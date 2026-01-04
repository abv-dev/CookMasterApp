import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { meatCategories, donenessLevels, cookingMethods, intensityLevels, thermostatToTemp } from '../data/meatData'
import { cutsData } from '../data/cutsData'
import { saveToHistory } from '../services/storageService'
import { settingsService } from '../services/settingsService'

function Calculator() {
  const navigate = useNavigate()

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Textes traduits
  const t = {
    back: lang === 'en' ? '← Back' : '← Retour',
    calculator: lang === 'en' ? 'Calculator' : 'Calculateur',
    chooseYourMeat: lang === 'en' ? 'Choose your meat' : 'Choisissez votre viande',
    chooseCutType: lang === 'en' ? 'Choose the cut type' : 'Choisissez le type de morceau',
    chooseCut: lang === 'en' ? 'Choose the cut' : 'Choisissez le morceau',
    simple: 'Simple',
    advanced: lang === 'en' ? 'Advanced' : 'Avancé',
    weight: lang === 'en' ? 'Weight (g) *' : 'Poids (g) *',
    averageWeight: lang === 'en' ? 'Average weight' : 'Poids moyen',
    desiredDoneness: lang === 'en' ? 'Desired doneness' : 'Cuisson souhaitée',
    poultryAlwaysWellDone: lang === 'en' ? 'Poultry = Always well done' : 'Volaille = Toujours bien cuite',
    minTemp74: lang === 'en' ? 'Minimum temperature: 74°C core' : 'Température minimum : 74°C à cœur',
    salmonellaWarning: lang === 'en' ? '⚠️ Essential to eliminate salmonella' : '⚠️ Impératif pour éliminer les salmonelles',
    cookingMethod: lang === 'en' ? 'Cooking method' : 'Méthode de cuisson',
    fireIntensity: lang === 'en' ? '🔥 Fire intensity' : '🔥 Intensité du feu',
    ovenTemp: lang === 'en' ? '🌡️ Oven temperature' : '🌡️ Température du four',
    thermostat: lang === 'en' ? 'Thermostat' : 'Thermostat',
    sousVideTemp: lang === 'en' ? '💧 Bath temperature (sous-vide)' : '💧 Température bain (sous-vide)',
    temperature: lang === 'en' ? 'Temperature' : 'Température',
    initialMeatTemp: lang === 'en' ? 'Initial meat temperature' : 'Température initiale viande',
    frozen: lang === 'en' ? 'Frozen (-18°)' : 'Congelé (-18°)',
    fridge: lang === 'en' ? 'Fridge (4°)' : 'Frigo (4°)',
    roomTemp: lang === 'en' ? 'Room temp (25°)' : 'Ambiante (25°)',
    advancedOptions: lang === 'en' ? '⚙️ Advanced options' : '⚙️ Options avancées',
    thickness: lang === 'en' ? 'Thickness (cm)' : 'Épaisseur (cm)',
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
    sec: 'sec'
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
  const [thermostat, setThermostat] = useState(6)
  const [initialTemp, setInitialTemp] = useState(4)
  const [withBone, setWithBone] = useState(false)
  const [withSkin, setWithSkin] = useState(true)
  const [isBarded, setIsBarded] = useState(false)
  const [calculationResult, setCalculationResult] = useState(null)

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

    const weightG = parseFloat(weight)
    if (isNaN(weightG) || weightG <= 0) return null

    // Temps de base par 100g (en secondes)
    const baseTime = selectedCut.temps_base_100g?.[doneness] || 120

    // Facteur de poids (non linéaire - les grosses pièces cuisent plus lentement par gramme)
    const weightFactor = Math.pow(weightG / 100, 0.85)

    // Facteur d'épaisseur (si renseigné)
    let thicknessFactor = 1
    if (thickness && parseFloat(thickness) > 0) {
      const thicknessCm = parseFloat(thickness)
      // L'épaisseur a un impact quadratique (la chaleur doit traverser)
      thicknessFactor = Math.pow(thicknessCm / 2.5, 1.5)
    }

    // Facteur de température initiale
    // Plus la viande est froide, plus elle met de temps
    let tempFactor = 1
    if (initialTemp < 4) {
      tempFactor = 1.3 // Congelé ou très froid
    } else if (initialTemp < 15) {
      tempFactor = 1.1 // Sortie du frigo
    } else {
      tempFactor = 1.0 // Température ambiante
    }

    // Facteur avec os (+15% de temps)
    const boneFactor = withBone ? 1.15 : 1.0

    // Facteur bardage (protection = cuisson légèrement plus longue +10%)
    const bardingFactor = isBarded ? 1.1 : 1.0

    // Facteur intensité (feu vif = plus rapide)
    let intensityFactor = 1
    if (selectedMethodData?.hasIntensity) {
      const intensityData = intensityLevels.find(i => i.id === intensity)
      if (intensityData) {
        intensityFactor = 1 / (0.7 + (intensityData.value * 0.1))
      }
    }

    // Facteur thermostat (température four)
    let thermostatFactor = 1
    if (selectedMethodData?.hasThermostat) {
      const tempFour = thermostatToTemp(thermostat)
      thermostatFactor = 180 / tempFour // Référence à 180°C
    }

    // Calcul final
    let totalSeconds = baseTime * weightFactor * thicknessFactor * tempFactor * boneFactor * bardingFactor * intensityFactor * thermostatFactor

    // Arrondir à 15 secondes près
    totalSeconds = Math.round(totalSeconds / 15) * 15

    // Temps de repos recommandé (environ 1/3 du temps de cuisson, min 2 min)
    const restSeconds = Math.max(120, Math.round(totalSeconds / 3 / 30) * 30)

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
      donenessName: donenessData?.name || doneness
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
                <span className="font-semibold text-text-dark">{meat.name}</span>
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
              <h2 className="text-lg font-semibold text-text-dark">{selectedMeat.name}</h2>
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
                  <span className="font-medium text-text-dark block">{subcat.name}</span>
                  <span className="text-xs text-text-light">{subcat.description}</span>
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
              <h2 className="text-lg font-semibold text-text-dark">{selectedSubcategory.name}</h2>
              <p className="text-xs text-text-light">{selectedMeat.name} • {t.chooseCut}</p>
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
                    <span className="font-medium text-text-dark block">{cut.name}</span>
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
              <h3 className="font-bold text-text-dark">{selectedCut.name}</h3>
              <p className="text-xs text-text-light">{selectedMeat.name} • {selectedSubcategory.name}</p>
            </div>
            <button onClick={() => setStep(3)} className="text-accent text-xl">
              ✕
            </button>
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
                placeholder={`ex: ${selectedCut.poids_moyen?.split('-')[0]?.replace('g', '') || '300'}`}
                className="flex-1 bg-transparent outline-none text-text-dark text-center text-lg font-semibold"
              />
              <span className="text-text-light text-sm">g</span>
            </div>

            {/* Quick weight adjustment buttons */}
            <div className="flex justify-center gap-2 mt-2">
              <button
                type="button"
                onClick={() => setWeight(Math.max(0, (parseInt(weight) || 0) - 100).toString())}
                className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
              >
                -100
              </button>
              <button
                type="button"
                onClick={() => setWeight(Math.max(0, (parseInt(weight) || 0) - 50).toString())}
                className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
              >
                -50
              </button>
              <button
                type="button"
                onClick={() => setWeight(((parseInt(weight) || 0) + 50).toString())}
                className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
              >
                +50
              </button>
              <button
                type="button"
                onClick={() => setWeight(((parseInt(weight) || 0) + 100).toString())}
                className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
              >
                +100
              </button>
            </div>

            {/* Common weight presets */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {[150, 200, 250, 300, 400, 500, 750, 1000].map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w.toString())}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                    parseInt(weight) === w
                      ? 'bg-accent text-white'
                      : 'bg-surface text-text-light border border-gray-200'
                  }`}
                >
                  {w >= 1000 ? `${w/1000}kg` : `${w}g`}
                </button>
              ))}
            </div>

            <p className="text-xs text-text-light mt-2 text-center">
              {t.averageWeight} : {selectedCut.poids_moyen}
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
                    <div className="text-xs font-semibold">{level.name}</div>
                    <div className="text-xs opacity-70">{level.temp}°C</div>
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
                  <div className="text-xs font-medium">{m.name}</div>
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
                    onClick={() => setIntensity(level.id)}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      intensity === level.id
                        ? 'bg-accent text-white'
                        : 'bg-surface text-text-dark'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedMethodData?.hasThermostat && (
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-2">
                {t.ovenTemp}
              </label>
              <div className="bg-surface rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-light">{t.thermostat}</span>
                  <span className="font-bold text-accent">
                    Th. {thermostat} = {thermostatToTemp(thermostat)}°C
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="10"
                  value={thermostat}
                  onChange={(e) => setThermostat(parseInt(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-text-light mt-1">
                  <span>Th.3 (90°)</span>
                  <span>Th.6 (180°)</span>
                  <span>Th.10 (300°)</span>
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
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-light">{t.temperature}</span>
                  <span className="font-bold text-accent">{thermostat * 5 + 45}°C</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={thermostat}
                  onChange={(e) => setThermostat(parseInt(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-text-light mt-1">
                  <span>50°C</span>
                  <span>70°C</span>
                  <span>95°C</span>
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
                <span className="font-bold text-accent">{initialTemp}°C</span>
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

          {/* Tips for this cut */}
          {selectedCut.conseils && selectedCut.conseils.length > 0 && (
            <div className="card bg-gold-light border border-gold">
              <h3 className="font-bold text-text-dark mb-2 text-sm">{t.tipsFor} {selectedCut.name}</h3>
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
                {selectedMeat.icon} {selectedCut.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.weightLabel}</span>
              <span className="font-semibold text-text-dark">{weight}g</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.doneness}</span>
              <span className="font-semibold text-text-dark">{calculationResult.donenessName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-light">{t.targetTemp}</span>
              <span className="font-semibold text-accent">{calculationResult.targetTemp}°C</span>
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
