import { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { meatCategories, donenessLevels, cookingMethods, intensityLevels } from '../data/meatData'
import { cutsData } from '../data/cutsData'
import { cutSpecificQuestions, calculateSpecificFactors, getEffectiveDiffusivity, heatTransferCoeffs } from '../data/thermalProfiles'
import { saveToHistory } from '../services/storageService'
import { settingsService } from '../services/settingsService'
import { unitConversion } from '../utils/unitConversion'

function Calculator() {
  const navigate = useNavigate()
  const location = useLocation()

  // Langue et système de mesure
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language
  const measurementSystem = settings.measurementSystem || 'metric'
  const isImperial = measurementSystem === 'imperial'
  const units = unitConversion.getUnits(measurementSystem)

  // Textes traduits
  const t = {
    back: lang === 'en' ? '← Back' : '← Retour',
    calculator: lang === 'en' ? 'Calculator' : 'Calculateur',
    chooseYourMeat: lang === 'en' ? 'Choose your meat' : 'Choisissez votre viande',
    chooseCutType: lang === 'en' ? 'Choose the cut type' : 'Choisissez le type de morceau',
    chooseCut: lang === 'en' ? 'Choose the cut' : 'Choisissez le morceau',
    simple: 'Simple',
    advanced: lang === 'en' ? 'Advanced' : 'Avancé',
    weight: lang === 'en'
      ? `Weight (${isImperial ? 'oz' : 'g'}) *`
      : `Poids (${isImperial ? 'oz' : 'g'}) *`,
    averageWeight: lang === 'en' ? 'Average weight' : 'Poids moyen',
    desiredDoneness: lang === 'en' ? 'Desired doneness' : 'Cuisson souhaitée',
    poultryAlwaysWellDone: lang === 'en' ? 'Poultry = Always well done' : 'Volaille = Toujours bien cuite',
    minTemp74: lang === 'en'
      ? `Minimum temperature: ${isImperial ? '165°F' : '74°C'} core`
      : `Température minimum : ${isImperial ? '165°F' : '74°C'} à cœur`,
    salmonellaWarning: lang === 'en' ? '⚠️ Essential to eliminate salmonella' : '⚠️ Impératif pour éliminer les salmonelles',
    cookingMethod: lang === 'en' ? 'Cooking method' : 'Méthode de cuisson',
    fireIntensity: lang === 'en' ? '🔥 Fire intensity' : '🔥 Intensité du feu',
    ovenTemp: lang === 'en' ? '🌡️ Oven temperature' : '🌡️ Température du four',
    thermostat: lang === 'en' ? 'Thermostat' : 'Thermostat',
    sousVideTemp: lang === 'en' ? '💧 Bath temperature (sous-vide)' : '💧 Température bain (sous-vide)',
    temperature: lang === 'en' ? 'Temperature' : 'Température',
    initialMeatTemp: lang === 'en' ? 'Initial meat temperature' : 'Température initiale viande',
    frozen: lang === 'en'
      ? `Frozen (${isImperial ? '0°F' : '-18°C'})`
      : `Congelé (${isImperial ? '0°F' : '-18°C'})`,
    fridge: lang === 'en'
      ? `Fridge (${isImperial ? '39°F' : '4°C'})`
      : `Frigo (${isImperial ? '39°F' : '4°C'})`,
    roomTemp: lang === 'en'
      ? `Room temp (${isImperial ? '77°F' : '25°C'})`
      : `Ambiante (${isImperial ? '77°F' : '25°C'})`,
    advancedOptions: lang === 'en' ? '⚙️ Advanced options' : '⚙️ Options avancées',
    thickness: lang === 'en'
      ? `Thickness (${isImperial ? 'in' : 'cm'})`
      : `Épaisseur (${isImperial ? 'in' : 'cm'})`,
    ideal: lang === 'en' ? 'Ideal' : 'Idéal',
    withBone: lang === 'en' ? '🦴 With bone?' : '🦴 Avec os ?',
    boned: lang === 'en' ? 'With bone' : 'Avec os',
    boneless: lang === 'en' ? 'Boneless' : 'Désossé',
    withSkin: lang === 'en' ? '🍗 With skin?' : '🍗 Avec peau ?',
    skinOn: lang === 'en' ? 'With skin' : 'Avec peau',
    skinOff: lang === 'en' ? 'Without skin' : 'Sans peau',
    barded: lang === 'en' ? '🥓 Barded (wrapped in bacon)?' : '🥓 Bardé (enrobé de lard) ?',
    notBarded: lang === 'en' ? 'Not barded' : 'Non bardé',
    isBarded: lang === 'en' ? 'Barded' : 'Bardé',
    bardedRecommended: lang === 'en' ? '💡 Recommended for game (very lean meat)' : '💡 Recommandé pour le gibier (viande très maigre)',
    tipsFor: lang === 'en' ? '💡 Tips for' : '💡 Conseils pour',
    calculateTime: lang === 'en' ? 'Calculate cooking time' : 'Calculer le temps',
    estimatedCookingTime: lang === 'en' ? 'Estimated cooking time' : 'Temps de cuisson estimé',
    meat: lang === 'en' ? 'Meat' : 'Viande',
    weightLabel: lang === 'en' ? 'Weight' : 'Poids',
    doneness: lang === 'en' ? 'Doneness' : 'Cuisson',
    targetTemp: lang === 'en' ? '🌡️ Target temperature' : '🌡️ Température cible',
    restTime: lang === 'en' ? '⏸️ Rest time' : '⏸️ Temps de repos',
    suggestions: lang === 'en' ? '🍽️ Suggestions' : '🍽️ Suggestions',
    sauces: lang === 'en' ? 'Sauces' : 'Sauces',
    sides: lang === 'en' ? 'Side dishes' : 'Accompagnements',
    wines: lang === 'en' ? 'Wines 🍷' : 'Vins 🍷',
    startTimer: lang === 'en' ? 'Start timer' : 'Démarrer le minuteur',
    modifyParams: lang === 'en' ? '← Modify parameters' : '← Modifier les paramètres',
    min: 'min',
    sec: 'sec',
    commonTemps: lang === 'en' ? 'Common temperatures' : 'Températures courantes',
    presetTemps: lang === 'en' ? 'Preset temperatures' : 'Températures prédéfinies',
    preciseSurfaceTemp: lang === 'en' ? '🌡️ Precise surface temperature' : '🌡️ Température de surface précise',
    specificQuestions: lang === 'en' ? '🎯 Specific options for this cut' : '🎯 Options spécifiques à ce morceau',
    yes: lang === 'en' ? 'Yes' : 'Oui',
    no: lang === 'en' ? 'No' : 'Non',
    precisionMode: lang === 'en' ? '🔬 Precision mode' : '🔬 Mode précision',
    precisionModeDesc: lang === 'en' ? 'Answer these questions for a more accurate calculation' : 'Répondez à ces questions pour un calcul plus précis'
  }

  // Helper pour obtenir le texte traduit
  const getText = (obj, field) => {
    if (!obj) return ''
    if (lang === 'en' && obj[`${field}_en`]) {
      return obj[`${field}_en`]
    }
    return obj[field] || ''
  }

  const [step, setStep] = useState(1) // 1: meat, 2: subcategory, 3: cut, 4: config
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [selectedMeatId, setSelectedMeatId] = useState(null)
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null)
  const [selectedCutId, setSelectedCutId] = useState(null)
  const [weight, setWeight] = useState('')
  const [thickness, setThickness] = useState('')
  const [doneness, setDoneness] = useState('saignant')
  const [method, setMethod] = useState('poele')
  const [intensity, setIntensity] = useState('vif')
  const [ovenTemp, setOvenTemp] = useState(180) // Température du four en °C
  const [surfaceTemp, setSurfaceTemp] = useState(200) // Température surface poêle/grill en °C
  const [initialTemp, setInitialTemp] = useState(4)
  const [withBone, setWithBone] = useState(false)
  const [withSkin, setWithSkin] = useState(true)
  const [isBarded, setIsBarded] = useState(false)
  const [calculationResult, setCalculationResult] = useState(null)
  const [specificAnswers, setSpecificAnswers] = useState({}) // Réponses aux questions spécifiques par morceau

  // Effet pour pré-remplir depuis l'encyclopédie
  useEffect(() => {
    const state = location.state
    if (state?.fromEncyclopedia) {
      // Pré-sélectionner la viande, sous-catégorie et morceau
      if (state.categoryId) {
        setSelectedMeatId(state.categoryId)
      }
      if (state.subcategoryId) {
        setSelectedSubcategoryId(state.subcategoryId)
      }
      if (state.cutId) {
        setSelectedCutId(state.cutId)
        // Aller directement à l'étape de configuration
        setStep(4)

        // Initialiser les options selon le morceau
        const meatCuts = cutsData[state.categoryId]
        const subcat = meatCuts?.[state.subcategoryId]
        const cut = subcat?.cuts?.[state.cutId]
        if (cut) {
          setWithBone(cut.hasBone === true)
          if (cut.cuissons?.length > 0) {
            setMethod(cut.cuissons[0])
          }
          const donenessType = cut.donenessType || 'viande_rouge'
          const defaultDoneness = donenessLevels[donenessType]?.[1]?.id || 'saignant'
          setDoneness(defaultDoneness)
        }
      }
      // Nettoyer l'état de navigation pour éviter de recharger
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Données dérivées
  const selectedMeat = selectedMeatId ? meatCategories[selectedMeatId] : null
  const meatCutsData = selectedMeatId ? cutsData[selectedMeatId] : null
  const selectedSubcategory = meatCutsData && selectedSubcategoryId ? meatCutsData[selectedSubcategoryId] : null
  const selectedCut = selectedSubcategory?.cuts?.[selectedCutId] || null

  // Niveaux de cuisson adaptés au type de viande
  const availableDoneness = useMemo(() => {
    if (!selectedCut) return donenessLevels.viande_rouge
    const donenessType = selectedCut.donenessType || 'viande_rouge'
    return donenessLevels[donenessType] || donenessLevels.viande_rouge
  }, [selectedCut])

  // Méthode de cuisson sélectionnée
  const selectedMethodData = cookingMethods.find(m => m.id === method)

  // Questions spécifiques au morceau sélectionné
  const cutQuestions = useMemo(() => {
    if (!selectedCutId) return null
    return cutSpecificQuestions[selectedCutId] || null
  }, [selectedCutId])

  // Méthodes de cuisson disponibles pour ce morceau
  const availableMethods = useMemo(() => {
    if (!selectedCut?.cuissons) return cookingMethods
    return cookingMethods.filter(m => selectedCut.cuissons.includes(m.id))
  }, [selectedCut])

  // Vérifier si c'est de la volaille (toujours bien cuit)
  const isVolaille = selectedMeatId === 'volaille'

  // Handlers
  const handleMeatSelect = (meatId) => {
    setSelectedMeatId(meatId)
    setSelectedSubcategoryId(null)
    setSelectedCutId(null)
    setStep(2)
  }

  const handleSubcategorySelect = (subcatId) => {
    setSelectedSubcategoryId(subcatId)
    setSelectedCutId(null)
    setStep(3)
  }

  const handleCutSelect = (cutId) => {
    setSelectedCutId(cutId)
    const cut = selectedSubcategory?.cuts?.[cutId]
    setStep(4)

    // Réinitialiser les options selon le morceau
    if (cut) {
      setWithBone(cut.hasBone === true)
      if (cut.cuissons?.length > 0) {
        setMethod(cut.cuissons[0])
      }
      // Définir la cuisson par défaut
      const donenessType = cut.donenessType || 'viande_rouge'
      const defaultDoneness = donenessLevels[donenessType]?.[1]?.id || 'saignant'
      setDoneness(defaultDoneness)

      // Initialiser les réponses spécifiques avec les valeurs par défaut
      const cutQs = cutSpecificQuestions[cutId]
      if (cutQs?.questions) {
        const defaultAnswers = {}
        cutQs.questions.forEach(q => {
          defaultAnswers[q.id] = q.default
        })
        setSpecificAnswers(defaultAnswers)
      } else {
        setSpecificAnswers({})
      }
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setSelectedMeatId(null)
      setStep(1)
    } else if (step === 3) {
      setSelectedSubcategoryId(null)
      setStep(2)
    } else if (step === 4) {
      setSelectedCutId(null)
      setStep(3)
    } else if (step === 5) {
      setStep(4)
      setCalculationResult(null)
    }
  }

  // Calcul du temps de cuisson
  const calculateCookingTime = () => {
    if (!selectedCut || !weight) return null

    // Convertir en grammes si en système impérial (l'utilisateur entre des oz)
    let weightG = parseFloat(weight)
    if (isImperial) {
      weightG = unitConversion.ouncesToGrams(weightG)
    }
    if (isNaN(weightG) || weightG <= 0) return null

    // Récupérer les facteurs de cuisson spécifiques à ce type de viande
    const meatFactors = selectedMeat?.cookingFactors || {
      boneFactor: 1.15,
      bardingFactor: 1.10,
      thicknessExponent: 1.5,
      weightExponent: 0.85,
      frozenTempFactor: 1.30,
      fridgeTempFactor: 1.10,
      baseThicknessRef: 2.5,
      skinFactor: 1.0
    }

    // Temps de base par 100g (en secondes)
    const baseTime = selectedCut.temps_base_100g?.[doneness] || 120

    // Facteur de poids (non linéaire - utilise l'exposant spécifique à la viande)
    const weightFactor = Math.pow(weightG / 100, meatFactors.weightExponent)

    // Facteur d'épaisseur (si renseigné)
    let thicknessFactor = 1
    if (thickness && parseFloat(thickness) > 0) {
      // Convertir en cm si en système impérial (l'utilisateur entre des inches)
      let thicknessCm = parseFloat(thickness)
      if (isImperial) {
        thicknessCm = thicknessCm * 2.54 // 1 inch = 2.54 cm
      }
      // L'épaisseur utilise l'exposant et la référence spécifiques à la viande
      thicknessFactor = Math.pow(thicknessCm / meatFactors.baseThicknessRef, meatFactors.thicknessExponent)
    }

    // Facteur de température initiale (utilise les facteurs spécifiques)
    let tempFactor = 1
    if (initialTemp < 0) {
      tempFactor = meatFactors.frozenTempFactor // Congelé
    } else if (initialTemp < 15) {
      tempFactor = meatFactors.fridgeTempFactor // Sortie du frigo
    } else {
      tempFactor = 1.0 // Température ambiante
    }

    // Facteur avec os (utilise le facteur spécifique à la viande)
    const boneFactor = withBone ? meatFactors.boneFactor : 1.0

    // Facteur bardage (utilise le facteur spécifique - très important pour le gibier)
    // Prend en compte soit l'ancien state isBarded soit le nouveau specificAnswers.barded
    const isBardedFinal = isBarded || specificAnswers.barded
    const bardingFactor = isBardedFinal ? meatFactors.bardingFactor : 1.0

    // Facteur marinade (la viande marinée cuit plus vite - 10% plus rapide)
    const marinatedFactor = specificAnswers.marinated ? 0.90 : 1.0

    // Facteur peau (pour la volaille - la peau protège et accélère)
    const skinFactor = (selectedMeatId === 'volaille' && withSkin) ? (meatFactors.skinFactor || 1.0) : 1.0

    // Facteur intensité (feu vif = plus rapide)
    let intensityFactor = 1
    if (selectedMethodData?.hasIntensity) {
      if (isAdvanced) {
        // En mode avancé, utiliser la température de surface précise
        intensityFactor = 180 / surfaceTemp // Référence à 180°C
      } else {
        // En mode simple, utiliser le niveau d'intensité
        const intensityData = intensityLevels.find(i => i.id === intensity)
        if (intensityData) {
          intensityFactor = 1 / (0.7 + (intensityData.value * 0.1))
        }
      }
    }

    // Facteur température four
    let thermostatFactor = 1
    if (selectedMethodData?.hasThermostat) {
      thermostatFactor = 180 / ovenTemp // Référence à 180°C
    }

    // Facteur spécifique au morceau (questions détaillées)
    const specificFactor = calculateSpecificFactors(selectedCutId, specificAnswers)

    // Calcul final avec tous les facteurs spécifiques
    let totalSeconds = baseTime * weightFactor * thicknessFactor * tempFactor * boneFactor * bardingFactor * marinatedFactor * skinFactor * intensityFactor * thermostatFactor * specificFactor

    // Arrondir à 15 secondes près
    totalSeconds = Math.round(totalSeconds / 15) * 15

    // Temps de repos recommandé (varie selon la viande)
    // Gibier et boeuf : repos plus long pour redistribuer les jus
    // Volaille : repos court, risque de refroidissement
    let restRatio = 0.33 // 1/3 par défaut
    if (selectedMeatId === 'gibier' || selectedMeatId === 'boeuf') {
      restRatio = 0.40 // 40% pour viandes denses
    } else if (selectedMeatId === 'volaille') {
      restRatio = 0.25 // 25% pour volaille
    } else if (selectedMeatId === 'veau') {
      restRatio = 0.30 // 30% pour veau
    }
    const restSeconds = Math.max(120, Math.round(totalSeconds * restRatio / 30) * 30)

    // Températures cibles
    const donenessData = availableDoneness.find(d => d.id === doneness)
    const targetTemp = donenessData?.temp || 55

    return {
      totalSeconds,
      totalMinutes: Math.floor(totalSeconds / 60),
      remainingSeconds: totalSeconds % 60,
      restSeconds,
      restMinutes: Math.floor(restSeconds / 60),
      targetTemp,
      donenessName: getText(donenessData, 'name') || doneness
    }
  }

  const handleCalculate = () => {
    const result = calculateCookingTime()
    if (result) {
      setCalculationResult(result)
      setStep(5)
    }
  }

  const handleStartTimer = () => {
    // Naviguer vers le timer avec les paramètres
    const result = calculationResult

    // Sauvegarder dans l'historique
    saveToHistory({
      meatId: selectedMeatId,
      meatName: selectedMeat?.name,
      meatIcon: selectedMeat?.icon,
      meatColor: selectedMeat?.color,
      subcategoryId: selectedSubcategoryId,
      subcategoryName: selectedSubcategory?.name,
      cutId: selectedCutId,
      cutName: selectedCut?.name,
      cutIcon: selectedCut?.icon,
      weight: parseInt(weight),
      doneness: doneness,
      donenessName: result.donenessName,
      targetTemp: result.targetTemp,
      method: method,
      methodName: selectedMethodData?.name,
      totalSeconds: result.totalSeconds,
      restSeconds: result.restSeconds
    })

    navigate('/timer', {
      state: {
        totalSeconds: result.totalSeconds,
        restSeconds: result.restSeconds,
        meatName: selectedMeat?.name,
        cutName: selectedCut?.name,
        doneness: result.donenessName,
        targetTemp: result.targetTemp
      }
    })
  }

  // Convertir les catégories en tableau pour l'affichage
  const meatArray = Object.entries(meatCategories).map(([id, data]) => ({
    id,
    ...data
  }))

  // Sous-catégories en tableau
  const subcategoriesArray = meatCutsData ? Object.entries(meatCutsData).map(([id, data]) => ({
    id,
    ...data,
    cutCount: data.cuts ? Object.keys(data.cuts).length : 0
  })) : []

  // Morceaux en tableau
  const cutsArray = selectedSubcategory?.cuts ? Object.entries(selectedSubcategory.cuts).map(([id, data]) => ({
    id,
    ...data
  })) : []

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        {step > 1 ? (
          <button onClick={handleBack} className="text-accent text-lg font-medium">
            {t.back}
          </button>
        ) : (
          <span></span>
        )}
        <h1 className="text-xl font-bold text-text-dark">{t.calculator}</h1>
        <span></span>
      </header>

      {/* Progress indicator */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-all ${
              s <= step ? 'bg-accent' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Meat Selection */}
      {step === 1 && (
        <section>
          <h2 className="text-lg font-semibold text-text-dark mb-3">
            {t.chooseYourMeat}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {meatArray.map((meat) => (
              <button
                key={meat.id}
                onClick={() => handleMeatSelect(meat.id)}
                className="card flex flex-col items-center py-6 hover:shadow-md hover:border-accent border-2 border-transparent transition-all"
                style={{ borderColor: 'transparent' }}
              >
                <span className="text-4xl mb-2">{meat.icon}</span>
                <span className="font-semibold text-text-dark">{getText(meat, 'name')}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 2: Subcategory Selection */}
      {step === 2 && selectedMeat && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: selectedMeat.color + '20' }}
            >
              {selectedMeat.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-dark">{getText(selectedMeat, 'name')}</h2>
              <p className="text-xs text-text-light">{t.chooseCutType}</p>
            </div>
          </div>
          <div className="space-y-2">
            {subcategoriesArray.map((subcat) => (
              <button
                key={subcat.id}
                onClick={() => handleSubcategorySelect(subcat.id)}
                className="card w-full flex items-center justify-between py-4 hover:shadow-md hover:border-accent border-2 border-transparent transition-all"
              >
                <div className="text-left">
                  <span className="font-medium text-text-dark block">{getText(subcat, 'name')}</span>
                  <span className="text-xs text-text-light">{getText(subcat, 'description')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                    {subcat.cutCount}
                  </span>
                  <span className="text-text-light">→</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 3: Cut Selection */}
      {step === 3 && selectedSubcategory && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: selectedMeat.color + '20' }}
            >
              {selectedMeat.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-dark">{getText(selectedSubcategory, 'name')}</h2>
              <p className="text-xs text-text-light">{getText(selectedMeat, 'name')} • {t.chooseCut}</p>
            </div>
          </div>
          <div className="space-y-2">
            {cutsArray.map((cut) => (
              <button
                key={cut.id}
                onClick={() => handleCutSelect(cut.id)}
                className="card w-full flex items-center justify-between py-4 hover:shadow-md hover:border-accent border-2 border-transparent transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cut.icon || selectedMeat.icon}</span>
                  <div className="text-left">
                    <span className="font-medium text-text-dark block">{getText(cut, 'name')}</span>
                    <span className="text-xs text-text-light">{cut.poids_moyen}</span>
                  </div>
                </div>
                <span className="text-text-light">→</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 4: Configuration */}
      {step === 4 && selectedCut && (
        <section className="space-y-4">
          {/* Mode Toggle */}
          <div className="flex bg-surface rounded-xl p-1">
            <button
              onClick={() => setIsAdvanced(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                !isAdvanced ? 'bg-accent text-white' : 'text-text-light'
              }`}
            >
              {t.simple}
            </button>
            <button
              onClick={() => setIsAdvanced(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                isAdvanced ? 'bg-purple text-white' : 'text-text-light'
              }`}
            >
              {t.advanced}
            </button>
          </div>

          {/* Selected Cut Card */}
          <div
            className="card flex items-center gap-3 border-2"
            style={{ borderColor: selectedMeat.color }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ backgroundColor: selectedMeat.color }}
            >
              {selectedCut.icon || selectedMeat.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text-dark">{getText(selectedCut, 'name')}</h3>
              <p className="text-xs text-text-light">{getText(selectedMeat, 'name')} • {getText(selectedSubcategory, 'name')}</p>
            </div>
            <button onClick={() => setStep(3)} className="text-accent text-xl">
              ✕
            </button>
          </div>

          {/* Quick Cooking Options - Always Visible */}
          <div className="grid grid-cols-2 gap-3">
            {/* Mariné */}
            <button
              onClick={() => setSpecificAnswers(prev => ({ ...prev, marinated: !prev.marinated }))}
              className={`p-4 rounded-xl border-2 transition-all ${
                specificAnswers.marinated
                  ? 'border-accent bg-accent-light'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-2xl mb-1">🫒</div>
              <div className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Marinated' : 'Mariné'}</div>
              <div className={`text-xs mt-1 font-bold ${specificAnswers.marinated ? 'text-accent' : 'text-text-light'}`}>
                {specificAnswers.marinated ? (lang === 'en' ? 'Yes' : 'Oui') : (lang === 'en' ? 'No' : 'Non')}
              </div>
            </button>

            {/* Bardé */}
            <button
              onClick={() => setSpecificAnswers(prev => ({ ...prev, barded: !prev.barded }))}
              className={`p-4 rounded-xl border-2 transition-all ${
                specificAnswers.barded
                  ? 'border-accent bg-accent-light'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-2xl mb-1">🥓</div>
              <div className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Barded' : 'Bardé'}</div>
              <div className={`text-xs mt-1 font-bold ${specificAnswers.barded ? 'text-accent' : 'text-text-light'}`}>
                {specificAnswers.barded ? (lang === 'en' ? 'Yes' : 'Oui') : (lang === 'en' ? 'No' : 'Non')}
              </div>
            </button>

            {/* Avec Os */}
            <button
              onClick={() => setWithBone(!withBone)}
              className={`p-4 rounded-xl border-2 transition-all ${
                withBone
                  ? 'border-accent bg-accent-light'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-2xl mb-1">🦴</div>
              <div className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'With Bone' : 'Avec Os'}</div>
              <div className={`text-xs mt-1 font-bold ${withBone ? 'text-accent' : 'text-text-light'}`}>
                {withBone ? (lang === 'en' ? 'Yes' : 'Oui') : (lang === 'en' ? 'No' : 'Non')}
              </div>
            </button>

            {/* Sonde thermique */}
            <button
              onClick={() => setSpecificAnswers(prev => ({ ...prev, probe: !prev.probe }))}
              className={`p-4 rounded-xl border-2 transition-all ${
                specificAnswers.probe
                  ? 'border-green bg-green-50'
                  : 'border-gray-200 bg-white'
              }`}
              style={specificAnswers.probe ? { borderColor: '#27AE60', backgroundColor: '#27AE6015' } : {}}
            >
              <div className="text-2xl mb-1">🌡️</div>
              <div className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Meat Probe' : 'Sonde'}</div>
              <div className={`text-xs mt-1 font-bold`} style={{ color: specificAnswers.probe ? '#27AE60' : '#A0A0A0' }}>
                {specificAnswers.probe ? (lang === 'en' ? 'Yes' : 'Oui') : (lang === 'en' ? 'No' : 'Non')}
              </div>
            </button>
          </div>

          {/* Thickness Slider */}
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-text-dark flex items-center gap-2">
                📏 {lang === 'en' ? 'Thickness' : 'Épaisseur'}
              </label>
              <span className="text-lg font-bold text-accent">
                {thickness || (isImperial ? '1' : '2.5')} {isImperial ? 'in' : 'cm'}
              </span>
            </div>
            <input
              type="range"
              min={isImperial ? 0.5 : 1}
              max={isImperial ? 4 : 10}
              step={isImperial ? 0.25 : 0.5}
              value={thickness || (isImperial ? 1 : 2.5)}
              onChange={(e) => setThickness(e.target.value)}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-xs text-text-light mt-1">
              <span>{isImperial ? '0.5 in' : '1 cm'}</span>
              <span>{isImperial ? '2 in' : '5 cm'}</span>
              <span>{isImperial ? '4 in' : '10 cm'}</span>
            </div>
            {/* Quick presets */}
            <div className="flex justify-center gap-2 mt-2">
              {(isImperial ? [0.5, 1, 1.5, 2, 3] : [1.5, 2.5, 3.5, 5, 7]).map((t) => (
                <button
                  key={t}
                  onClick={() => setThickness(t.toString())}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    parseFloat(thickness) === t
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-text-dark'
                  }`}
                >
                  {t}{isImperial ? '"' : 'cm'}
                </button>
              ))}
            </div>
          </div>

          {/* Weight Input */}
          <div>
            <label className="block text-sm font-semibold text-text-dark mb-2">
              {t.weight}
            </label>
            <div className="flex items-center gap-2 bg-surface rounded-xl p-3 border border-gray-200">
              <span>⚖️</span>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={`ex: ${isImperial ? '10' : (selectedCut.poids_moyen?.split('-')[0]?.replace('g', '') || '300')}`}
                className="flex-1 bg-transparent outline-none text-text-dark text-center text-lg font-semibold"
              />
              <span className="text-text-light text-sm">{isImperial ? 'oz' : 'g'}</span>
            </div>

            {/* Quick weight adjustment buttons */}
            <div className="flex justify-center gap-2 mt-2">
              <button
                type="button"
                onClick={() => setWeight(Math.max(0, (parseFloat(weight) || 0) - (isImperial ? 4 : 100)).toString())}
                className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
              >
                {isImperial ? '-4' : '-100'}
              </button>
              <button
                type="button"
                onClick={() => setWeight(Math.max(0, (parseFloat(weight) || 0) - (isImperial ? 2 : 50)).toString())}
                className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
              >
                {isImperial ? '-2' : '-50'}
              </button>
              <button
                type="button"
                onClick={() => setWeight(((parseFloat(weight) || 0) + (isImperial ? 2 : 50)).toString())}
                className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
              >
                {isImperial ? '+2' : '+50'}
              </button>
              <button
                type="button"
                onClick={() => setWeight(((parseFloat(weight) || 0) + (isImperial ? 4 : 100)).toString())}
                className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
              >
                {isImperial ? '+4' : '+100'}
              </button>
            </div>

            {/* Common weight presets */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {(isImperial ? [5, 7, 9, 10, 14, 18, 26, 35] : [150, 200, 250, 300, 400, 500, 750, 1000]).map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w.toString())}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                    parseFloat(weight) === w
                      ? 'bg-accent text-white'
                      : 'bg-surface text-text-light border border-gray-200'
                  }`}
                >
                  {isImperial
                    ? (w >= 32 ? `${(w/16).toFixed(1)}lb` : `${w}oz`)
                    : (w >= 1000 ? `${w/1000}kg` : `${w}g`)}
                </button>
              ))}
            </div>

            <p className="text-xs text-text-light mt-2 text-center">
              {t.averageWeight} : {isImperial && selectedCut.poids_moyen
                ? unitConversion.formatWeight(parseInt(selectedCut.poids_moyen), 'imperial')
                : selectedCut.poids_moyen}
            </p>
          </div>

          {/* Doneness (not for volaille) */}
          {!isVolaille && (
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t.desiredDoneness}
              </label>
              <div className={`grid grid-cols-${Math.min(availableDoneness.length, 4)} gap-2`}>
                {availableDoneness.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setDoneness(level.id)}
                    className={`py-2 px-1 rounded-lg text-center transition-all ${
                      doneness === level.id
                        ? 'text-white'
                        : 'bg-surface text-text-dark'
                    }`}
                    style={{
                      backgroundColor: doneness === level.id ? level.color : undefined
                    }}
                  >
                    <div className="text-xs font-semibold">{getText(level, 'name')}</div>
                    <div className="text-xs opacity-70">{unitConversion.formatTemperature(level.temp, measurementSystem)}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Volaille Notice */}
          {isVolaille && (
            <div className="card border border-dashed border-gold text-center py-4 bg-gold-light">
              <span className="text-2xl">🍗</span>
              <p className="font-semibold text-text-dark">{t.poultryAlwaysWellDone}</p>
              <p className="text-xs text-text-light">{t.minTemp74}</p>
              <p className="text-xs text-error mt-1">{t.salmonellaWarning}</p>
            </div>
          )}

          {/* Cooking Method */}
          <div>
            <label className="block text-sm font-semibold text-text-dark mb-2">
              {t.cookingMethod}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableMethods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`py-3 px-2 rounded-lg text-center transition-all ${
                    method === m.id
                      ? 'bg-accent text-white'
                      : 'bg-surface text-text-dark'
                  }`}
                >
                  <div className="text-xl">{m.icon}</div>
                  <div className="text-xs font-medium">{getText(m, 'name')}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature/Intensity based on method */}
          {selectedMethodData?.hasIntensity && (
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t.fireIntensity}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {intensityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => {
                      setIntensity(level.id)
                      // Set approximate surface temperature based on intensity
                      const tempMap = { doux: 130, moyen: 170, vif: 210, tres_vif: 250 }
                      setSurfaceTemp(tempMap[level.id] || 200)
                    }}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      intensity === level.id
                        ? 'bg-accent text-white'
                        : 'bg-surface text-text-dark'
                    }`}
                  >
                    {lang === 'en' ? level.name_en : level.name}
                  </button>
                ))}
              </div>

              {/* Advanced: Precise surface temperature control */}
              {isAdvanced && (
                <div className="mt-3 bg-purple-50 rounded-xl p-3 border border-purple-200" style={{ backgroundColor: '#9C27B010', borderColor: '#9C27B030' }}>
                  <p className="text-xs text-purple font-medium mb-2">
                    {t.preciseSurfaceTemp}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <button
                      type="button"
                      onClick={() => setSurfaceTemp(Math.max(100, surfaceTemp - (isImperial ? 25 : 10)))}
                      className="w-9 h-9 rounded-full bg-gray-200 text-text-dark font-bold text-xs active:scale-95 transition-transform"
                    >
                      {isImperial ? '-25' : '-10'}
                    </button>
                    <div className="text-center">
                      <input
                        type="number"
                        value={isImperial ? Math.round(unitConversion.celsiusToFahrenheit(surfaceTemp)) : surfaceTemp}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0
                          if (isImperial) {
                            setSurfaceTemp(Math.max(100, Math.min(300, unitConversion.fahrenheitToCelsius(val))))
                          } else {
                            setSurfaceTemp(Math.max(100, Math.min(300, val)))
                          }
                        }}
                        className="w-16 text-xl font-bold text-purple text-center bg-transparent outline-none"
                      />
                      <span className="text-sm text-text-light">{isImperial ? '°F' : '°C'}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSurfaceTemp(Math.min(300, surfaceTemp + (isImperial ? 25 : 10)))}
                      className="w-9 h-9 rounded-full text-white font-bold text-xs active:scale-95 transition-transform"
                      style={{ backgroundColor: '#9C27B0' }}
                    >
                      {isImperial ? '+25' : '+10'}
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {(isImperial
                      ? [250, 300, 350, 400, 450, 500]
                      : [120, 150, 180, 200, 220, 250]
                    ).map((temp) => {
                      const targetCelsius = isImperial ? Math.round(unitConversion.fahrenheitToCelsius(temp)) : temp
                      const isSelected = Math.abs(surfaceTemp - targetCelsius) < 10
                      return (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setSurfaceTemp(targetCelsius)}
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? 'text-white'
                              : 'bg-white text-text-dark border border-gray-200'
                          }`}
                          style={isSelected ? { backgroundColor: '#9C27B0' } : {}}
                        >
                          {temp}°{isImperial ? 'F' : 'C'}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedMethodData?.hasThermostat && (
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t.ovenTemp}
              </label>
              <div className="bg-surface rounded-xl p-4">
                {/* Direct temperature input with +/- buttons */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  {/* Minus buttons */}
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.max(50, ovenTemp - (isImperial ? 25 : 10)))}
                      className="w-10 h-10 rounded-full bg-gray-200 text-text-dark font-bold text-sm active:scale-95 transition-transform"
                    >
                      {isImperial ? '-25' : '-10'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.max(50, ovenTemp - (isImperial ? 10 : 5)))}
                      className="w-8 h-10 rounded-full bg-gray-100 text-text-light font-medium text-xs active:scale-95 transition-transform"
                    >
                      {isImperial ? '-10' : '-5'}
                    </button>
                  </div>

                  {/* Temperature display and direct input */}
                  <div className="text-center">
                    <div className="relative">
                      <input
                        type="number"
                        value={isImperial ? Math.round(unitConversion.celsiusToFahrenheit(ovenTemp)) : ovenTemp}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0
                          if (isImperial) {
                            setOvenTemp(Math.max(50, Math.min(300, unitConversion.fahrenheitToCelsius(val))))
                          } else {
                            setOvenTemp(Math.max(50, Math.min(300, val)))
                          }
                        }}
                        className="w-24 text-3xl font-bold text-accent text-center bg-transparent outline-none"
                      />
                      <span className="text-lg text-text-light">{isImperial ? '°F' : '°C'}</span>
                    </div>
                    <div className="text-xs text-text-light">
                      Th. {Math.round(ovenTemp / 30)}
                    </div>
                  </div>

                  {/* Plus buttons */}
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.min(300, ovenTemp + (isImperial ? 10 : 5)))}
                      className="w-8 h-10 rounded-full bg-accent-light text-accent font-medium text-xs active:scale-95 transition-transform"
                    >
                      {isImperial ? '+10' : '+5'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.min(300, ovenTemp + (isImperial ? 25 : 10)))}
                      className="w-10 h-10 rounded-full bg-accent text-white font-bold text-sm active:scale-95 transition-transform"
                    >
                      {isImperial ? '+25' : '+10'}
                    </button>
                  </div>
                </div>

                {/* Common temperature presets */}
                <div className="mb-3">
                  <p className="text-xs text-text-light text-center mb-2">
                    {t.commonTemps}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {(isImperial
                      ? [250, 300, 325, 350, 375, 400, 425, 450, 475, 500]
                      : [100, 120, 150, 160, 180, 200, 210, 220, 240, 250]
                    ).map((temp) => {
                      const targetCelsius = isImperial ? Math.round(unitConversion.fahrenheitToCelsius(temp)) : temp
                      const isSelected = Math.abs(ovenTemp - targetCelsius) < 5
                      return (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setOvenTemp(targetCelsius)}
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-accent text-white'
                              : 'bg-white text-text-dark border border-gray-200'
                          }`}
                        >
                          {temp}°{isImperial ? 'F' : 'C'}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="5"
                  value={ovenTemp}
                  onChange={(e) => setOvenTemp(parseInt(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-text-light mt-1">
                  <span>{unitConversion.formatTemperature(50, measurementSystem)}</span>
                  <span>{unitConversion.formatTemperature(180, measurementSystem)}</span>
                  <span>{unitConversion.formatTemperature(300, measurementSystem)}</span>
                </div>
              </div>
            </div>
          )}

          {selectedMethodData?.hasTemperature && (
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t.sousVideTemp}
              </label>
              <div className="bg-surface rounded-xl p-4">
                {/* Direct temperature input with +/- buttons */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  {/* Minus buttons */}
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.max(45, ovenTemp - (isImperial ? 5 : 2)))}
                      className="w-9 h-9 rounded-full bg-gray-200 text-text-dark font-bold text-xs active:scale-95 transition-transform"
                    >
                      {isImperial ? '-5' : '-2'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.max(45, ovenTemp - 1))}
                      className="w-8 h-9 rounded-full bg-gray-100 text-text-light font-medium text-xs active:scale-95 transition-transform"
                    >
                      -1
                    </button>
                  </div>

                  {/* Temperature display and direct input */}
                  <div className="text-center">
                    <div className="relative">
                      <input
                        type="number"
                        value={isImperial ? Math.round(unitConversion.celsiusToFahrenheit(ovenTemp)) : ovenTemp}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value) || 0
                          if (isImperial) {
                            setOvenTemp(Math.max(45, Math.min(95, unitConversion.fahrenheitToCelsius(val))))
                          } else {
                            setOvenTemp(Math.max(45, Math.min(95, val)))
                          }
                        }}
                        className="w-20 text-2xl font-bold text-accent text-center bg-transparent outline-none"
                      />
                      <span className="text-sm text-text-light">{isImperial ? '°F' : '°C'}</span>
                    </div>
                  </div>

                  {/* Plus buttons */}
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.min(95, ovenTemp + 1))}
                      className="w-8 h-9 rounded-full bg-accent-light text-accent font-medium text-xs active:scale-95 transition-transform"
                    >
                      +1
                    </button>
                    <button
                      type="button"
                      onClick={() => setOvenTemp(Math.min(95, ovenTemp + (isImperial ? 5 : 2)))}
                      className="w-9 h-9 rounded-full bg-accent text-white font-bold text-xs active:scale-95 transition-transform"
                    >
                      {isImperial ? '+5' : '+2'}
                    </button>
                  </div>
                </div>

                {/* Sous-vide temperature presets */}
                <div className="mb-3">
                  <p className="text-xs text-text-light text-center mb-2">
                    {t.presetTemps}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {(isImperial
                      ? [125, 130, 135, 140, 145, 150, 155, 165]
                      : [52, 54, 56, 58, 60, 63, 68, 74]
                    ).map((temp) => {
                      const targetCelsius = isImperial ? Math.round(unitConversion.fahrenheitToCelsius(temp)) : temp
                      const isSelected = Math.abs(ovenTemp - targetCelsius) < 2
                      return (
                        <button
                          key={temp}
                          type="button"
                          onClick={() => setOvenTemp(targetCelsius)}
                          className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-accent text-white'
                              : 'bg-white text-text-dark border border-gray-200'
                          }`}
                        >
                          {temp}°{isImperial ? 'F' : 'C'}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="45"
                  max="95"
                  step="1"
                  value={ovenTemp}
                  onChange={(e) => setOvenTemp(parseInt(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-text-light mt-1">
                  <span>{unitConversion.formatTemperature(45, measurementSystem)}</span>
                  <span>{unitConversion.formatTemperature(65, measurementSystem)}</span>
                  <span>{unitConversion.formatTemperature(95, measurementSystem)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Initial Temperature */}
          <div>
            <label className="block text-sm font-semibold text-text-dark mb-2">
              {t.initialMeatTemp}
            </label>
            <div className="bg-surface rounded-xl p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-light">{t.temperature}</span>
                <span className="font-bold text-accent">{unitConversion.formatTemperature(initialTemp, measurementSystem)}</span>
              </div>
              <input
                type="range"
                min="-18"
                max="25"
                value={initialTemp}
                onChange={(e) => setInitialTemp(parseInt(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-text-light mt-1">
                <span>{t.frozen}</span>
                <span>{t.fridge}</span>
                <span>{t.roomTemp}</span>
              </div>
            </div>
          </div>

          {/* Advanced Options */}
          {isAdvanced && (
            <div className="rounded-xl p-4 space-y-3" style={{ backgroundColor: '#9C27B015', border: '1px solid #9C27B050' }}>
              <h3 className="font-bold text-purple text-sm">{t.advancedOptions}</h3>

              {/* Thickness */}
              <div>
                <label className="block text-xs text-text-dark mb-1">
                  {t.thickness} {selectedCut.epaisseur_ideale && `- ${t.ideal}: ${selectedCut.epaisseur_ideale}`}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  placeholder="ex: 2.5"
                  className="w-full bg-white rounded-lg px-3 py-2 text-sm outline-none border border-gray-200 focus:border-purple"
                />
              </div>

              {/* Bone option (if applicable) */}
              {(selectedCut.hasBone === 'optional' || selectedCut.hasBone === true) && (
                <div>
                  <label className="block text-xs text-text-dark mb-1">
                    {t.withBone}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setWithBone(true)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        withBone ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.boned}
                    </button>
                    <button
                      onClick={() => setWithBone(false)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        !withBone ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.boneless}
                    </button>
                  </div>
                </div>
              )}

              {/* Skin option (volaille) */}
              {selectedCut.hasSkin !== undefined && (
                <div>
                  <label className="block text-xs text-text-dark mb-1">
                    {t.withSkin}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setWithSkin(true)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        withSkin ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.skinOn}
                    </button>
                    <button
                      onClick={() => setWithSkin(false)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        !withSkin ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.skinOff}
                    </button>
                  </div>
                </div>
              )}

              {/* Barded option */}
              {selectedCut.canBeBarded && (
                <div>
                  <label className="block text-xs text-text-dark mb-1">
                    {t.barded}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsBarded(false)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        !isBarded ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.notBarded}
                    </button>
                    <button
                      onClick={() => setIsBarded(true)}
                      className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                        isBarded ? 'bg-purple text-white' : 'bg-white text-text-dark'
                      }`}
                    >
                      {t.isBarded}
                    </button>
                  </div>
                  {selectedMeatId === 'gibier' && (
                    <p className="text-xs text-purple mt-1">
                      {t.bardedRecommended}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Cut-Specific Questions - Mode Précision */}
          {cutQuestions && cutQuestions.questions && cutQuestions.questions.length > 0 && (
            <div className="rounded-xl p-4 space-y-3" style={{ backgroundColor: '#3498DB15', border: '1px solid #3498DB50' }}>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm" style={{ color: '#3498DB' }}>{t.specificQuestions}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#3498DB', color: 'white' }}>
                  {cutQuestions.questions.length}
                </span>
              </div>
              <p className="text-xs text-text-light">{t.precisionModeDesc}</p>

              <div className="space-y-3">
                {cutQuestions.questions.map((q) => (
                  <div key={q.id}>
                    <label className="block text-xs text-text-dark mb-1 font-medium">
                      {lang === 'en' && q.question_en ? q.question_en : q.question}
                    </label>

                    {/* Boolean question */}
                    {q.type === 'boolean' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSpecificAnswers(prev => ({ ...prev, [q.id]: true }))}
                          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                            specificAnswers[q.id] === true
                              ? 'text-white'
                              : 'bg-white text-text-dark border border-gray-200'
                          }`}
                          style={specificAnswers[q.id] === true ? { backgroundColor: '#3498DB' } : {}}
                        >
                          {t.yes}
                        </button>
                        <button
                          onClick={() => setSpecificAnswers(prev => ({ ...prev, [q.id]: false }))}
                          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                            specificAnswers[q.id] === false
                              ? 'text-white'
                              : 'bg-white text-text-dark border border-gray-200'
                          }`}
                          style={specificAnswers[q.id] === false ? { backgroundColor: '#3498DB' } : {}}
                        >
                          {t.no}
                        </button>
                      </div>
                    )}

                    {/* Select question */}
                    {q.type === 'select' && (
                      <div className="flex flex-wrap gap-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setSpecificAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                              specificAnswers[q.id] === opt.value
                                ? 'text-white'
                                : 'bg-white text-text-dark border border-gray-200'
                            }`}
                            style={specificAnswers[q.id] === opt.value ? { backgroundColor: '#3498DB' } : {}}
                          >
                            {lang === 'en' && opt.label_en ? opt.label_en : opt.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Tip if available */}
                    {q.tip && (
                      <p className="text-xs mt-1" style={{ color: '#3498DB' }}>
                        💡 {lang === 'en' && q.tip_en ? q.tip_en : q.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips for this cut */}
          {selectedCut.conseils && selectedCut.conseils.length > 0 && (
            <div className="card bg-gold-light border border-gold">
              <h3 className="font-bold text-text-dark mb-2 text-sm">{t.tipsFor} {getText(selectedCut, 'name')}</h3>
              <ul className="space-y-1">
                {selectedCut.conseils.slice(0, 3).map((tip, i) => (
                  <li key={i} className="text-xs text-text-light flex items-start gap-2">
                    <span>•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={!weight}
            className={`btn-primary flex items-center justify-center gap-2 ${
              !weight ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span>🔥</span>
            <span>{t.calculateTime}</span>
          </button>
        </section>
      )}

      {/* Step 5: Results */}
      {step === 5 && calculationResult && (
        <section className="space-y-4">
          {/* Result Card */}
          <div className="card text-center py-6 border-2 border-green">
            <div className="text-5xl mb-2">⏱️</div>
            <h2 className="text-3xl font-bold text-text-dark">
              {calculationResult.totalMinutes > 0 && `${calculationResult.totalMinutes} ${t.min} `}
              {calculationResult.remainingSeconds > 0 && `${calculationResult.remainingSeconds} ${t.sec}`}
            </h2>
            <p className="text-text-light">{t.estimatedCookingTime}</p>
          </div>

          {/* Details */}
          <div className="card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.meat}</span>
              <span className="font-semibold text-text-dark flex items-center gap-2">
                {selectedMeat.icon} {getText(selectedCut, 'name')}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.weightLabel}</span>
              <span className="font-semibold text-text-dark">{weight}{isImperial ? 'oz' : 'g'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.doneness}</span>
              <span className="font-semibold text-text-dark">{calculationResult.donenessName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.targetTemp}</span>
              <span className="font-semibold text-accent">{unitConversion.formatTemperature(calculationResult.targetTemp, measurementSystem)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.restTime}</span>
              <span className="font-semibold text-text-dark">{calculationResult.restMinutes} {t.min}</span>
            </div>
          </div>

          {/* Sauces & Accompaniments */}
          {(selectedCut.sauces || selectedCut.accompagnements) && (
            <div className="card">
              <h3 className="font-bold text-text-dark mb-3">{t.suggestions}</h3>

              {selectedCut.sauces && (
                <div className="mb-3">
                  <span className="text-xs text-text-light block mb-1">{t.sauces}</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCut.sauces.slice(0, 3).map((sauce, i) => (
                      <span key={i} className="bg-accent-light text-accent text-xs px-2 py-1 rounded-full">
                        {sauce}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedCut.accompagnements && (
                <div className="mb-3">
                  <span className="text-xs text-text-light block mb-1">{t.sides}</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCut.accompagnements.slice(0, 3).map((acc, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#8BC34A20', color: '#8BC34A' }}>
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedCut.vins && (
                <div>
                  <span className="text-xs text-text-light block mb-1">{t.wines}</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedCut.vins.slice(0, 3).map((vin, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#9C27B020', color: '#9C27B0' }}>
                        {vin}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={handleStartTimer}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <span>⏱️</span>
              <span>{t.startTimer}</span>
            </button>

            <button
              onClick={() => {
                setStep(4)
                setCalculationResult(null)
              }}
              className="w-full py-3 text-accent font-semibold"
            >
              {t.modifyParams}
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default Calculator
