import { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { meatCategories, donenessLevels, cookingMethods, intensityLevels, twoStageConfig, restingTimes, cookingTechniques, cookingTools, techniqueToolsMapping } from '../data/meatData'
import { cutsData } from '../data/cutsData'
import { cutSpecificQuestions, calculateSpecificFactors, getEffectiveDiffusivity, heatTransferCoeffs } from '../data/thermalProfiles'
import { getRecipesByCut } from '../data/recipesData'
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
    cookingTechnique: lang === 'en' ? 'Cooking technique' : 'Technique de cuisson',
    chooseTechnique: lang === 'en' ? 'How do you want to cook?' : 'Comment voulez-vous cuire ?',
    cookingTool: lang === 'en' ? 'Cooking tool' : 'Outil de cuisson',
    chooseTool: lang === 'en' ? 'With what?' : 'Avec quoi ?',
    stage1Tool: lang === 'en' ? 'Stage 1' : 'Étape 1',
    stage2Tool: lang === 'en' ? 'Stage 2' : 'Étape 2',
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
      ? `Cut thickness (${isImperial ? 'in' : 'cm'})`
      : `Épaisseur de la pièce (${isImperial ? 'in' : 'cm'})`,
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
    precisionModeDesc: lang === 'en' ? 'Answer these questions for a more accurate calculation' : 'Répondez à ces questions pour un calcul plus précis',
    recipes: lang === 'en' ? '👨‍🍳 Recipes' : '👨‍🍳 Recettes',
    viewRecipe: lang === 'en' ? 'View recipe' : 'Voir la recette',
    noRecipes: lang === 'en' ? 'No recipes for this cut' : 'Pas de recettes pour ce morceau'
  }

  // Helper pour obtenir le texte traduit
  const getText = (obj, field) => {
    if (!obj) return ''
    if (lang === 'en' && obj[`${field}_en`]) {
      return obj[`${field}_en`]
    }
    return obj[field] || ''
  }

  const [step, setStep] = useState(1) // 1: meat, 2: subcategory, 3: cut, 4: technique, 5: options, 6: config, 7: tool, 8: results
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [selectedMeatId, setSelectedMeatId] = useState(null)
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null)
  const [selectedCutId, setSelectedCutId] = useState(null)
  const [selectedTechniqueId, setSelectedTechniqueId] = useState(null) // Nouvelle: technique de cuisson
  const [selectedToolId, setSelectedToolId] = useState(null) // Nouvelle: outil de cuisson
  const [selectedTool2Id, setSelectedTool2Id] = useState(null) // Pour techniques 2 étapes: outil étape 2
  const [weight, setWeight] = useState('')
  const [thickness, setThickness] = useState('')
  const [doneness, setDoneness] = useState('saignant')
  const [method, setMethod] = useState('poele') // Gardé pour compatibilité avec ancien code
  const [intensity, setIntensity] = useState('vif')
  const [intensity2, setIntensity2] = useState('vif') // Pour étape 2
  const [ovenTemp, setOvenTemp] = useState(180) // Température du four en °C (étape 1)
  const [ovenTemp2, setOvenTemp2] = useState(180) // Température du four en °C (étape 2)
  const [surfaceTemp, setSurfaceTemp] = useState(200) // Température surface poêle/grill en °C
  const [surfaceTemp2, setSurfaceTemp2] = useState(250) // Température surface étape 2 (saisie)
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

  // Scroll en haut de page quand on change d'étape
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

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

  // Méthode de cuisson sélectionnée (ancien système - gardé pour compatibilité)
  const selectedMethodData = cookingMethods.find(m => m.id === method)

  // Technique de cuisson sélectionnée (nouveau système)
  const selectedTechnique = cookingTechniques.find(t => t.id === selectedTechniqueId)

  // Outil de cuisson sélectionné (nouveau système)
  const selectedTool = cookingTools.find(t => t.id === selectedToolId)
  const selectedTool2 = cookingTools.find(t => t.id === selectedTool2Id)

  // Techniques de cuisson disponibles pour ce morceau
  const availableTechniques = useMemo(() => {
    if (!selectedCut?.cuissons) return cookingTechniques
    // Filtrer les techniques qui ont au moins un outil compatible avec ce morceau
    return cookingTechniques.filter(tech => {
      // Si le morceau a des méthodes prédéfinies, vérifier la compatibilité
      const techTools = techniqueToolsMapping[tech.id]
      if (!techTools) return true

      // Pour les techniques à 2 étapes, on accepte si l'outil principal est compatible
      const mainTools = Array.isArray(techTools) ? techTools : (techTools.stage1 || techTools.stage2 || [])
      return mainTools.length > 0
    })
  }, [selectedCut])

  // Outils disponibles selon la technique sélectionnée
  const availableTools = useMemo(() => {
    if (!selectedTechniqueId) return cookingTools

    const techTools = techniqueToolsMapping[selectedTechniqueId]
    if (!techTools) return cookingTools

    // Pour techniques simples (tableau d'ids)
    if (Array.isArray(techTools)) {
      return cookingTools.filter(tool => techTools.includes(tool.id))
    }

    // Pour techniques à 2 étapes (objet avec stage1/stage2)
    // Retourner les outils de l'étape 1
    return cookingTools.filter(tool => techTools.stage1?.includes(tool.id))
  }, [selectedTechniqueId])

  // Outils disponibles pour l'étape 2 (saisie)
  const availableTools2 = useMemo(() => {
    if (!selectedTechniqueId || !selectedTechnique?.isTwoStage) return []

    const techTools = techniqueToolsMapping[selectedTechniqueId]
    if (!techTools || Array.isArray(techTools)) return []

    return cookingTools.filter(tool => techTools.stage2?.includes(tool.id))
  }, [selectedTechniqueId, selectedTechnique])

  // Questions spécifiques au morceau sélectionné - filtrées selon technique/outil
  const cutQuestions = useMemo(() => {
    if (!selectedCutId) return null
    const cutData = cutSpecificQuestions[selectedCutId]
    if (!cutData?.questions) return cutData || null

    // Fonction pour évaluer si une question doit être affichée
    const shouldShowQuestion = (q) => {
      if (!q.showWhen) return true // Pas de condition = toujours afficher

      const { techniques, tools, NOT_techniques, NOT_tools } = q.showWhen

      // Vérifier les techniques requises
      if (techniques && techniques.length > 0) {
        if (!selectedTechniqueId || !techniques.includes(selectedTechniqueId)) {
          return false
        }
      }

      // Vérifier les outils requis
      if (tools && tools.length > 0) {
        if (!selectedToolId || !tools.includes(selectedToolId)) {
          return false
        }
      }

      // Vérifier les techniques exclues
      if (NOT_techniques && NOT_techniques.length > 0) {
        if (selectedTechniqueId && NOT_techniques.includes(selectedTechniqueId)) {
          return false
        }
      }

      // Vérifier les outils exclus
      if (NOT_tools && NOT_tools.length > 0) {
        if (selectedToolId && NOT_tools.includes(selectedToolId)) {
          return false
        }
      }

      return true
    }

    // Retourner les questions filtrées
    return {
      ...cutData,
      questions: cutData.questions.filter(shouldShowQuestion)
    }
  }, [selectedCutId, selectedTechniqueId, selectedToolId])

  // Méthodes de cuisson disponibles pour ce morceau (ancien système - gardé pour compatibilité)
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
    setStep(4) // Step 4 = sélection de la TECHNIQUE

    // Réinitialiser la technique et l'outil
    setSelectedTechniqueId(null)
    setSelectedToolId(null)
    setSelectedTool2Id(null)

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

  // Nouveau: Handler pour la sélection de technique
  const handleTechniqueSelect = (techniqueId) => {
    setSelectedTechniqueId(techniqueId)
    setSelectedToolId(null) // Reset l'outil quand on change de technique
    setSelectedTool2Id(null)

    // Si la technique a des outils compatibles, pré-sélectionner le premier
    const techTools = techniqueToolsMapping[techniqueId]
    if (techTools) {
      if (Array.isArray(techTools) && techTools.length > 0) {
        setSelectedToolId(techTools[0])
      } else if (techTools.stage1?.length > 0) {
        setSelectedToolId(techTools.stage1[0])
        if (techTools.stage2?.length > 0) {
          setSelectedTool2Id(techTools.stage2[0])
        }
      }
    }

    // Mettre à jour l'ancienne méthode pour compatibilité
    const technique = cookingTechniques.find(t => t.id === techniqueId)
    if (technique) {
      // Mapper la technique vers une méthode existante si possible
      if (techniqueId === 'sous_vide') setMethod('sousvide')
      else if (techniqueId === 'reverse_sear') setMethod('reverse_sear')
      else if (techniqueId === 'saisie_puis_cuisson') setMethod('saisie_puis_cuisson')
      else if (techniqueId === 'bbq_low_slow') setMethod('bbq_indirect')
      else if (techniqueId === 'grill_direct') setMethod('grill')
      else if (techniqueId === 'cuisson_lente') setMethod('four')
      else if (techniqueId === 'saisir') setMethod('poele')
      else if (techniqueId === 'poeler') setMethod('poele')
      else if (techniqueId === 'rotir') setMethod('four')
      else if (techniqueId === 'braiser') setMethod('braise')
      else if (techniqueId === 'mijoter') setMethod('braise')
      else setMethod('poele') // Par défaut
    }

    setStep(5) // Passer aux options de préparation
  }

  const handleBack = () => {
    if (step === 2) {
      setSelectedMeatId(null)
      setStep(1)
    } else if (step === 3) {
      setSelectedSubcategoryId(null)
      setStep(2)
    } else if (step === 4) {
      // Retour depuis technique -> cut
      setSelectedCutId(null)
      setStep(3)
    } else if (step === 5) {
      // Retour depuis options -> technique
      setSelectedTechniqueId(null)
      setStep(4)
    } else if (step === 6) {
      // Retour depuis config -> options
      setStep(5)
    } else if (step === 7) {
      // Retour depuis tool -> config
      setStep(6)
    } else if (step === 8) {
      // Retour depuis results -> tool
      setStep(7)
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

    // ========================================
    // CUISSONS EN DEUX ÉTAPES
    // ========================================
    const methodId = selectedMethodData?.id
    const twoStageData = twoStageConfig[methodId]

    if (twoStageData && twoStageData.isTwoStage) {
      // Méthode à deux étapes (reverse sear, sous-vide, bbq indirect)
      const meatType = selectedMeatId // boeuf, porc, agneau, etc.

      if (methodId === 'sousvide') {
        // SOUS-VIDE : utiliser les temps et températures du bain
        const sousVideTemps = twoStageData.stage1.temps[meatType]?.[doneness]
        if (sousVideTemps) {
          const bathTemp = sousVideTemps.bath
          // Temps basé sur l'épaisseur (plus épais = plus long)
          let thicknessCm = parseFloat(thickness) || 3
          if (isImperial) thicknessCm = thicknessCm * 2.54
          const thicknessFactor = Math.max(1, thicknessCm / 3)

          const stage1Minutes = Math.round((sousVideTemps.time_min + (sousVideTemps.time_max - sousVideTemps.time_min) * 0.3) * thicknessFactor)
          const stage2Seconds = twoStageData.stage2.time_seconds * 2 // 2 faces

          return {
            isTwoStage: true,
            methodName: 'Sous-vide',
            stage1: {
              name: lang === 'en' ? twoStageData.stage1.name_en : twoStageData.stage1.name,
              totalMinutes: stage1Minutes,
              temp: bathTemp,
              description: lang === 'en' ? `Water bath at ${bathTemp}°C` : `Bain-marie à ${bathTemp}°C`
            },
            stage2: {
              name: lang === 'en' ? twoStageData.stage2.name_en : twoStageData.stage2.name,
              totalSeconds: stage2Seconds,
              totalMinutes: Math.floor(stage2Seconds / 60),
              remainingSeconds: stage2Seconds % 60,
              description: lang === 'en' ? 'High heat sear, 30s-1min per side' : 'Saisie feu vif, 30s-1min par face'
            },
            totalSeconds: stage1Minutes * 60 + stage2Seconds,
            totalMinutes: stage1Minutes + Math.ceil(stage2Seconds / 60),
            remainingSeconds: 0,
            restSeconds: 60, // Repos court après sous-vide
            restMinutes: 1,
            targetTemp,
            pullTemp: bathTemp, // En sous-vide, bath temp = pull temp
            donenessName: getText(donenessData, 'name') || doneness
          }
        }
      } else if (methodId === 'reverse_sear') {
        // REVERSE SEAR : four basse temp puis saisie
        const pullTemps = twoStageData.stage1.pullTemps[meatType]
        const pullTemp = pullTemps?.[doneness] || (targetTemp - 5)
        const ovenTempRS = twoStageData.stage1.ovenTemp.recommended

        // Temps phase 1 : calcul basé sur la montée en température lente
        // Environ 40-60 min pour une viande de 3cm à 110°C pour atteindre 45°C
        let thicknessCm = parseFloat(thickness) || 3
        if (isImperial) thicknessCm = thicknessCm * 2.54

        // Formule simplifiée : base 30 min pour 2cm, +15 min par cm supplémentaire
        const stage1Minutes = Math.round(30 + (thicknessCm - 2) * 15 + (weightG / 100) * 3)
        const stage2Seconds = twoStageData.stage2.time_seconds * 2 // 2 faces

        return {
          isTwoStage: true,
          methodName: 'Reverse Sear',
          stage1: {
            name: lang === 'en' ? twoStageData.stage1.name_en : twoStageData.stage1.name,
            totalMinutes: stage1Minutes,
            temp: ovenTempRS,
            description: lang === 'en'
              ? `Oven at ${ovenTempRS}°C until ${pullTemp}°C internal`
              : `Four à ${ovenTempRS}°C jusqu'à ${pullTemp}°C à cœur`
          },
          stage2: {
            name: lang === 'en' ? twoStageData.stage2.name_en : twoStageData.stage2.name,
            totalSeconds: stage2Seconds,
            totalMinutes: Math.floor(stage2Seconds / 60),
            remainingSeconds: stage2Seconds % 60,
            description: lang === 'en' ? 'High heat sear, 45s-1min per side' : 'Saisie feu vif, 45s-1min par face'
          },
          totalSeconds: stage1Minutes * 60 + stage2Seconds,
          totalMinutes: stage1Minutes + Math.ceil(stage2Seconds / 60),
          remainingSeconds: 0,
          restSeconds,
          restMinutes: Math.floor(restSeconds / 60),
          targetTemp,
          pullTemp,
          carryover: twoStageData.carryover,
          donenessName: getText(donenessData, 'name') || doneness
        }
      } else if (methodId === 'bbq_indirect') {
        // BBQ INDIRECT : zone indirecte puis finition (pour grosses pièces)
        const times = twoStageData.stage1.times
        const bbqTime = times.ribs || { min: 240, max: 360 } // Défaut : ribs
        const stage1Minutes = Math.round((bbqTime.min + bbqTime.max) / 2)
        const stage2Seconds = twoStageData.stage2.time_seconds

        return {
          isTwoStage: true,
          methodName: 'BBQ Indirect',
          stage1: {
            name: lang === 'en' ? twoStageData.stage1.name_en : twoStageData.stage1.name,
            totalMinutes: stage1Minutes,
            temp: twoStageData.stage1.ovenTemp.recommended,
            description: lang === 'en'
              ? `Indirect zone at ${twoStageData.stage1.ovenTemp.recommended}°C`
              : `Zone indirecte à ${twoStageData.stage1.ovenTemp.recommended}°C`
          },
          stage2: {
            name: lang === 'en' ? twoStageData.stage2.name_en : twoStageData.stage2.name,
            totalSeconds: stage2Seconds,
            totalMinutes: Math.floor(stage2Seconds / 60),
            remainingSeconds: stage2Seconds % 60,
            description: lang === 'en' ? 'Direct zone to caramelize' : 'Zone directe pour caraméliser'
          },
          totalSeconds: stage1Minutes * 60 + stage2Seconds,
          totalMinutes: stage1Minutes + Math.ceil(stage2Seconds / 60),
          remainingSeconds: 0,
          restSeconds: 600, // 10 min repos pour grosses pièces
          restMinutes: 10,
          targetTemp,
          pullTemp: targetTemp - twoStageData.carryover,
          carryover: twoStageData.carryover,
          donenessName: getText(donenessData, 'name') || doneness
        }
      } else if (methodId === 'saisie_puis_cuisson') {
        // SAISIE PUIS CUISSON : Saisir d'abord puis finir au four
        const pullTemps = twoStageData.stage2.pullTemps[meatType]
        const pullTemp = pullTemps?.[doneness] || (targetTemp - 5)
        const ovenTempSPC = twoStageData.stage2.ovenTemp.recommended

        // Temps saisie : temps fixe par face
        const stage1Seconds = twoStageData.stage1.time_seconds * 2 // 2 faces

        // Temps phase 2 (four) : basé sur épaisseur et montée en température
        let thicknessCm = parseFloat(thickness) || 3
        if (isImperial) thicknessCm = thicknessCm * 2.54

        // Formule : base 10 min pour 2cm, +8 min par cm supplémentaire
        // Moins long que reverse sear car la viande est déjà chaude après saisie
        const stage2Minutes = Math.round(10 + (thicknessCm - 2) * 8 + (weightG / 100) * 2)

        return {
          isTwoStage: true,
          methodName: lang === 'en' ? 'Sear then cook' : 'Saisie puis cuisson',
          stage1: {
            name: lang === 'en' ? twoStageData.stage1.name_en : twoStageData.stage1.name,
            totalSeconds: stage1Seconds,
            totalMinutes: Math.floor(stage1Seconds / 60),
            remainingSeconds: stage1Seconds % 60,
            description: lang === 'en' ? 'High heat sear, 45s-1min per side' : 'Saisie feu vif, 45s-1min par face'
          },
          stage2: {
            name: lang === 'en' ? twoStageData.stage2.name_en : twoStageData.stage2.name,
            totalMinutes: stage2Minutes,
            temp: ovenTempSPC,
            description: lang === 'en'
              ? `Oven at ${ovenTempSPC}°C until ${pullTemp}°C internal`
              : `Four à ${ovenTempSPC}°C jusqu'à ${pullTemp}°C à cœur`
          },
          totalSeconds: stage1Seconds + stage2Minutes * 60,
          totalMinutes: Math.ceil(stage1Seconds / 60) + stage2Minutes,
          remainingSeconds: 0,
          restSeconds,
          restMinutes: Math.floor(restSeconds / 60),
          targetTemp,
          pullTemp,
          carryover: twoStageData.carryover,
          donenessName: getText(donenessData, 'name') || doneness
        }
      }
    }

    // Cuisson standard (une seule étape)
    return {
      isTwoStage: false,
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
      setStep(8) // Nouveau: étape 8 = résultats
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

    // Préparer les données pour le Timer
    const timerData = {
      // Identifiants pour annonces contextuelles
      meatId: selectedMeatId,
      cutId: selectedCutId,
      methodId: selectedMethodId, // Legacy - gardé pour compatibilité
      techniqueId: selectedTechniqueId,
      toolId: selectedToolId,
      tool2Id: selectedTool2Id,
      // Noms pour affichage
      meatName: selectedMeat?.name,
      meatName_en: selectedMeat?.name_en,
      cutName: selectedCut?.name,
      cutName_en: selectedCut?.name_en,
      techniqueName: selectedTechnique?.name,
      techniqueName_en: selectedTechnique?.name_en,
      techniqueIcon: selectedTechnique?.icon,
      toolName: selectedTool?.name,
      toolName_en: selectedTool?.name_en,
      toolIcon: selectedTool?.icon,
      tool2Name: selectedTool2?.name,
      tool2Name_en: selectedTool2?.name_en,
      tool2Icon: selectedTool2?.icon,
      doneness: result.donenessName,
      targetTemp: result.targetTemp,
      restSeconds: result.restSeconds,
      // Intensité et température de l'outil (étape 1)
      toolIntensity: intensity,
      toolTemp: ovenTemp,
      surfaceTemp: surfaceTemp
    }

    if (result.isTwoStage) {
      // Cuisson en deux étapes (reverse sear, sous-vide, saisie_puis_cuisson, etc.)
      timerData.isTwoStage = true
      // Utiliser totalSeconds si disponible, sinon calculer depuis totalMinutes
      timerData.stage1Seconds = result.stage1.totalSeconds || (result.stage1.totalMinutes * 60)
      timerData.stage2Seconds = result.stage2.totalSeconds || (result.stage2.totalMinutes * 60)
      timerData.pullTemp = result.pullTemp
      timerData.methodName = result.methodName
      timerData.techniqueName = selectedTechnique?.name
      timerData.stage1Name = result.stage1.name || selectedTool?.name
      timerData.stage2Name = result.stage2.name || selectedTool2?.name
      timerData.stage1Desc = result.stage1.description
      timerData.stage2Desc = result.stage2.description
      // Outils par étape pour affichage
      timerData.stage1Tool = selectedTool?.name
      timerData.stage1Tool_en = selectedTool?.name_en
      timerData.stage1ToolIcon = selectedTool?.icon
      timerData.stage2Tool = selectedTool2?.name
      timerData.stage2Tool_en = selectedTool2?.name_en
      timerData.stage2ToolIcon = selectedTool2?.icon
      // Températures par étape
      timerData.stage1Intensity = intensity
      timerData.stage1OvenTemp = ovenTemp
      timerData.stage1SurfaceTemp = surfaceTemp
      timerData.stage2Intensity = intensity2
      timerData.stage2OvenTemp = ovenTemp2
      timerData.stage2SurfaceTemp = surfaceTemp2
    } else {
      // Cuisson simple
      timerData.totalSeconds = result.totalSeconds
    }

    navigate('/timer', { state: timerData })
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

      {/* Progress indicator - 8 étapes */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
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

      {/* Step 4: Technique Selection (NOUVEAU) */}
      {step === 4 && selectedCut && (
        <section className="space-y-4">
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
          </div>

          <h2 className="text-lg font-semibold text-text-dark">
            {t.chooseTechnique}
          </h2>

          {/* Grid of techniques */}
          <div className="grid grid-cols-2 gap-3">
            {availableTechniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => handleTechniqueSelect(technique.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedTechniqueId === technique.id
                    ? 'border-accent bg-accent-light'
                    : 'border-gray-200 bg-white hover:border-accent/50'
                }`}
              >
                <div className="text-2xl mb-2">{technique.icon}</div>
                <div className="font-semibold text-text-dark text-sm">{getText(technique, 'name')}</div>
                <div className="text-xs text-text-light mt-1">{getText(technique, 'description')}</div>
                {technique.isTwoStage && (
                  <div className="mt-2 text-xs text-accent font-medium">
                    {lang === 'en' ? '2 stages' : '2 étapes'}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Tip for selected technique */}
          {selectedTechnique?.tips && (
            <div className="bg-accent-light rounded-xl p-3 text-sm text-accent">
              💡 {lang === 'en' ? selectedTechnique.tips.en : selectedTechnique.tips.fr}
            </div>
          )}
        </section>
      )}

      {/* Step 5: Cooking Options (anciennement Step 4) */}
      {step === 5 && selectedCut && selectedTechnique && (
        <section className="space-y-4">
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
          </div>

          <h2 className="text-lg font-semibold text-text-dark">
            {lang === 'en' ? '🍖 Preparation Options' : '🍖 Options de préparation'}
          </h2>

          {/* Dynamic Cooking Options based on cut properties */}
          <div className="grid grid-cols-2 gap-3">
            {/* Mariné - Toujours pertinent */}
            <button
              onClick={() => setSpecificAnswers(prev => ({ ...prev, marinated: !prev.marinated }))}
              className={`p-4 rounded-xl border-2 transition-all ${
                specificAnswers.marinated
                  ? 'border-accent bg-accent-light'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-2xl mb-1">🥣</div>
              <div className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Marinated' : 'Mariné'}</div>
              <div className={`text-xs mt-1 font-bold ${specificAnswers.marinated ? 'text-accent' : 'text-text-light'}`}>
                {specificAnswers.marinated ? (lang === 'en' ? 'Yes' : 'Oui') : (lang === 'en' ? 'No' : 'Non')}
              </div>
            </button>

            {/* Bardé - Seulement si canBeBarded === true */}
            {selectedCut.canBeBarded && (
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
            )}

            {/* Avec Os - Seulement si hasBone === 'optional' */}
            {selectedCut.hasBone === 'optional' && (
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
            )}

            {/* Sonde thermique - Toujours pertinent */}
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

          {/* Cut-Specific Questions from thermalProfiles.js */}
          {cutQuestions && cutQuestions.questions && cutQuestions.questions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-dark">
                {lang === 'en' ? '🎯 Specific to this cut' : '🎯 Spécifique à ce morceau'}
              </h3>
              {cutQuestions.questions.map((q) => (
                <div key={q.id} className="card">
                  <label className="block text-sm text-text-dark mb-2 font-medium">
                    {lang === 'en' && q.question_en ? q.question_en : q.question}
                  </label>

                  {/* Boolean question */}
                  {q.type === 'boolean' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSpecificAnswers(prev => ({ ...prev, [q.id]: true }))}
                        className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                          specificAnswers[q.id] === true
                            ? 'bg-accent text-white'
                            : 'bg-gray-100 text-text-dark'
                        }`}
                      >
                        {lang === 'en' ? 'Yes' : 'Oui'}
                      </button>
                      <button
                        onClick={() => setSpecificAnswers(prev => ({ ...prev, [q.id]: false }))}
                        className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                          specificAnswers[q.id] === false
                            ? 'bg-accent text-white'
                            : 'bg-gray-100 text-text-dark'
                        }`}
                      >
                        {lang === 'en' ? 'No' : 'Non'}
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
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            specificAnswers[q.id] === opt.value
                              ? 'bg-accent text-white'
                              : 'bg-gray-100 text-text-dark'
                          }`}
                        >
                          {lang === 'en' && opt.label_en ? opt.label_en : opt.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Tip */}
                  {q.tip && (
                    <p className="text-xs text-accent mt-2">
                      💡 {lang === 'en' && q.tip_en ? q.tip_en : q.tip}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Thickness Slider */}
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-text-dark flex items-center gap-2">
                📏 {lang === 'en' ? 'Cut thickness' : 'Épaisseur de la pièce'}
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

          {/* Continue Button */}
          <button
            onClick={() => setStep(6)}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <span>{lang === 'en' ? 'Continue' : 'Continuer'}</span>
            <span>→</span>
          </button>
        </section>
      )}

      {/* Step 6: Configuration (anciennement Step 5) */}
      {step === 6 && selectedCut && selectedTechnique && (
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
            <button onClick={() => setStep(4)} className="text-accent text-xl">
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
                placeholder={`ex: ${isImperial ? '10' : (selectedCut.poids_moyen?.split('-')[0]?.replace('g', '') || '300')}`}
                className="flex-1 bg-transparent outline-none text-text-dark text-center text-lg font-semibold"
              />
              <span className="text-text-light text-sm">{isImperial ? 'oz' : 'g'}</span>
            </div>

            {/* Quick weight adjustment buttons - adapté selon la taille du morceau */}
            {(() => {
              const avgWeight = selectedCut.poids_moyen || '300g'
              const isLargeCut = selectedCut.isLargeCut || selectedCut.isWholeAnimal || avgWeight.includes('kg') || parseInt(avgWeight) > 1500

              // Incréments pour grosses pièces (500g / 250g)
              const largeInc = isImperial ? [8, 17] : [250, 500]
              // Incréments pour morceaux standards (50g / 100g)
              const smallInc = isImperial ? [2, 4] : [50, 100]

              const inc = isLargeCut ? largeInc : smallInc

              return (
                <div className="flex justify-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setWeight(Math.max(0, (parseFloat(weight) || 0) - inc[1]).toString())}
                    className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
                  >
                    -{inc[1]}{isLargeCut ? '' : ''}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeight(Math.max(0, (parseFloat(weight) || 0) - inc[0]).toString())}
                    className="px-3 py-1 rounded-lg bg-gray-200 text-text-dark text-sm font-medium active:scale-95 transition-transform"
                  >
                    -{inc[0]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeight(((parseFloat(weight) || 0) + inc[0]).toString())}
                    className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
                  >
                    +{inc[0]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeight(((parseFloat(weight) || 0) + inc[1]).toString())}
                    className="px-3 py-1 rounded-lg bg-accent-light text-accent text-sm font-medium active:scale-95 transition-transform"
                  >
                    +{inc[1]}
                  </button>
                </div>
              )
            })()}

            {/* Common weight presets - adapté selon le morceau */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {(() => {
                // Générer des presets intelligents basés sur le poids moyen du morceau
                const avgWeight = selectedCut.poids_moyen || '300g'
                const isLargeCut = selectedCut.isLargeCut || selectedCut.isWholeAnimal || avgWeight.includes('kg') || parseInt(avgWeight) > 1500

                // Presets pour grosses pièces (animaux entiers, rôtis)
                const largePresets = isImperial
                  ? [35, 53, 70, 88, 105, 140, 175, 210] // 1-6kg en oz
                  : [1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000]

                // Presets standard pour steaks/morceaux
                const standardPresets = isImperial
                  ? [5, 7, 9, 10, 14, 18, 26, 35]
                  : [150, 200, 250, 300, 400, 500, 750, 1000]

                const presets = isLargeCut ? largePresets : standardPresets

                return presets.map((w) => (
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
                ))
              })()}
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

          {/* Note: Temperature/Intensity controls are now in Step 7 after tool selection */}

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

          {/* Continue to Tool Selection */}
          <button
            onClick={() => setStep(7)}
            disabled={!weight}
            className={`btn-primary flex items-center justify-center gap-2 ${
              !weight ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span>{lang === 'en' ? 'Continue' : 'Continuer'}</span>
            <span>→</span>
          </button>
        </section>
      )}

      {/* Step 7: Tool Selection (NOUVEAU) */}
      {step === 7 && selectedCut && selectedTechnique && (
        <section className="space-y-4">
          {/* Selected Cut & Technique Card */}
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
              <p className="text-xs text-text-light">
                {getText(selectedTechnique, 'name')} • {weight}{isImperial ? 'oz' : 'g'}
              </p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-text-dark">
            {t.chooseTool}
          </h2>

          {/* Two-stage technique: show both tools with their temperature controls */}
          {selectedTechnique.isTwoStage ? (
            <>
              {/* ========== ÉTAPE 1 ========== */}
              <div className="border-2 border-blue-300 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <label className="text-sm font-semibold text-text-dark">
                    {t.stage1Tool} - {getText(selectedTechnique, 'name')}
                  </label>
                </div>

                {/* Stage 1 Tool Selection */}
                <div className="grid grid-cols-3 gap-2">
                  {availableTools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedToolId(tool.id)}
                      className={`py-3 px-2 rounded-lg text-center transition-all ${
                        selectedToolId === tool.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-surface text-text-dark'
                      }`}
                    >
                      <div className="text-xl">{tool.icon}</div>
                      <div className="text-xs font-medium mt-1">{getText(tool, 'name')}</div>
                    </button>
                  ))}
                </div>

                {/* Stage 1 Temperature Controls */}
                {selectedTool?.hasIntensity && (
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      {t.fireIntensity}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {intensityLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => {
                            setIntensity(level.id)
                            const tempMap = { doux: 130, moyen: 170, vif: 210, tres_vif: 250 }
                            setSurfaceTemp(tempMap[level.id] || 200)
                          }}
                          className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                            intensity === level.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-blue-50 text-text-dark'
                          }`}
                        >
                          {lang === 'en' ? level.name_en : level.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTool?.hasThermostat && (
                  <div>
                    <label className="block text-sm font-medium text-blue-600 mb-2">
                      {t.ovenTemp}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[100, 120, 150, 180, 200, 220, 250].map((temp) => (
                        <button
                          key={temp}
                          onClick={() => setOvenTemp(temp)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            ovenTemp === temp
                              ? 'bg-blue-500 text-white'
                              : 'bg-blue-50 text-text-dark'
                          }`}
                        >
                          {isImperial ? Math.round(temp * 9/5 + 32) : temp}°{isImperial ? 'F' : 'C'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTool?.tips && (
                  <div className="bg-blue-50 rounded-lg p-2 text-xs text-blue-700">
                    💡 {lang === 'en' ? selectedTool.tips.en : selectedTool.tips.fr}
                  </div>
                )}
              </div>

              {/* ========== ÉTAPE 2 (Saisie) ========== */}
              {availableTools2.length > 0 && (
                <div className="border-2 border-orange-300 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <label className="text-sm font-semibold text-text-dark">
                      {t.stage2Tool} - {lang === 'en' ? 'Searing' : 'Saisie'}
                    </label>
                  </div>

                  {/* Stage 2 Tool Selection */}
                  <div className="grid grid-cols-3 gap-2">
                    {availableTools2.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => setSelectedTool2Id(tool.id)}
                        className={`py-3 px-2 rounded-lg text-center transition-all ${
                          selectedTool2Id === tool.id
                            ? 'bg-orange-500 text-white'
                            : 'bg-surface text-text-dark'
                        }`}
                      >
                        <div className="text-xl">{tool.icon}</div>
                        <div className="text-xs font-medium mt-1">{getText(tool, 'name')}</div>
                      </button>
                    ))}
                  </div>

                  {/* Stage 2 Temperature Controls */}
                  {selectedTool2?.hasIntensity && (
                    <div>
                      <label className="block text-sm font-medium text-orange-600 mb-2">
                        {t.fireIntensity}
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {intensityLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => {
                              setIntensity2(level.id)
                              const tempMap = { doux: 130, moyen: 170, vif: 210, tres_vif: 250 }
                              setSurfaceTemp2(tempMap[level.id] || 250)
                            }}
                            className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                              intensity2 === level.id
                                ? 'bg-orange-500 text-white'
                                : 'bg-orange-50 text-text-dark'
                            }`}
                          >
                            {lang === 'en' ? level.name_en : level.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTool2?.hasThermostat && (
                    <div>
                      <label className="block text-sm font-medium text-orange-600 mb-2">
                        {t.ovenTemp}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[200, 220, 250, 280].map((temp) => (
                          <button
                            key={temp}
                            onClick={() => setOvenTemp2(temp)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              ovenTemp2 === temp
                                ? 'bg-orange-500 text-white'
                                : 'bg-orange-50 text-text-dark'
                            }`}
                          >
                            {isImperial ? Math.round(temp * 9/5 + 32) : temp}°{isImperial ? 'F' : 'C'}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTool2?.tips && (
                    <div className="bg-orange-50 rounded-lg p-2 text-xs text-orange-700">
                      💡 {lang === 'en' ? selectedTool2.tips.en : selectedTool2.tips.fr}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Single-stage technique: show one tool selection */
            <>
              <div className="grid grid-cols-3 gap-2">
                {availableTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedToolId(tool.id)}
                    className={`py-3 px-2 rounded-lg text-center transition-all ${
                      selectedToolId === tool.id
                        ? 'bg-accent text-white'
                        : 'bg-surface text-text-dark'
                    }`}
                  >
                    <div className="text-xl">{tool.icon}</div>
                    <div className="text-xs font-medium mt-1">{getText(tool, 'name')}</div>
                  </button>
                ))}
              </div>

              {/* Tool tips */}
              {selectedTool?.tips && (
                <div className="bg-surface rounded-xl p-3 text-sm text-text-light">
                  💡 {lang === 'en' ? selectedTool.tips.en : selectedTool.tips.fr}
                </div>
              )}

              {/* Intensity/Temperature based on tool */}
              {selectedTool?.hasIntensity && (
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
                </div>
              )}

              {selectedTool?.hasThermostat && (
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t.ovenTemp}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[100, 120, 150, 180, 200, 220, 250].map((temp) => (
                      <button
                        key={temp}
                        onClick={() => setOvenTemp(temp)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          ovenTemp === temp
                            ? 'bg-accent text-white'
                            : 'bg-surface text-text-dark'
                        }`}
                      >
                        {isImperial ? Math.round(temp * 9/5 + 32) : temp}°{isImperial ? 'F' : 'C'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={!selectedToolId}
            className={`btn-primary flex items-center justify-center gap-2 ${
              !selectedToolId ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span>🔥</span>
            <span>{t.calculateTime}</span>
          </button>
        </section>
      )}

      {/* Step 8: Results (anciennement Step 6) */}
      {step === 8 && calculationResult && (
        <section className="space-y-4">
          {/* Two-Stage Cooking Results */}
          {calculationResult.isTwoStage ? (
            <>
              {/* Method Header */}
              <div className="card text-center py-4 bg-accent-light border-2 border-accent">
                <div className="text-3xl mb-1">🔄</div>
                <h2 className="text-xl font-bold text-accent">{calculationResult.methodName}</h2>
                <p className="text-sm text-text-light">{lang === 'en' ? 'Two-stage cooking' : 'Cuisson en deux étapes'}</p>
              </div>

              {/* Stage 1 */}
              <div className="card border-2 border-blue-400">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="font-bold text-text-dark">{calculationResult.stage1.name}</h3>
                  {selectedTool && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full ml-auto">
                      {selectedTool.icon} {getText(selectedTool, 'name')}
                    </span>
                  )}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center mb-3">
                  <div className="text-3xl font-bold text-blue-600">
                    {calculationResult.stage1.totalMinutes} {t.min}
                  </div>
                  <div className="text-sm text-blue-500">{calculationResult.stage1.description}</div>
                </div>
                {/* Température étape 1 */}
                <div className="space-y-1 text-sm">
                  {selectedTool?.hasThermostat && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-light">🌡️ {lang === 'en' ? 'Oven temp' : 'Temp. four'}</span>
                      <span className="font-semibold text-blue-600">{isImperial ? Math.round(ovenTemp * 9/5 + 32) : ovenTemp}°{isImperial ? 'F' : 'C'}</span>
                    </div>
                  )}
                  {selectedTool?.hasIntensity && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-light">🔥 {lang === 'en' ? 'Surface temp' : 'Temp. surface'}</span>
                      <span className="font-semibold text-blue-600">{isImperial ? Math.round(surfaceTemp * 9/5 + 32) : surfaceTemp}°{isImperial ? 'F' : 'C'}</span>
                    </div>
                  )}
                  {calculationResult.pullTemp && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-light">{lang === 'en' ? 'Remove at' : 'Retirer à'}</span>
                      <span className="font-bold text-blue-600">{unitConversion.formatTemperature(calculationResult.pullTemp, measurementSystem)} {lang === 'en' ? 'internal' : 'à cœur'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stage 2 */}
              <div className="card border-2 border-orange-400">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="font-bold text-text-dark">{calculationResult.stage2.name}</h3>
                  {selectedTool2 && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full ml-auto">
                      {selectedTool2.icon} {getText(selectedTool2, 'name')}
                    </span>
                  )}
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center mb-3">
                  <div className="text-3xl font-bold text-orange-600">
                    {calculationResult.stage2.totalMinutes > 0 && `${calculationResult.stage2.totalMinutes} ${t.min} `}
                    {calculationResult.stage2.remainingSeconds > 0 && `${calculationResult.stage2.remainingSeconds} ${t.sec}`}
                  </div>
                  <div className="text-sm text-orange-500">{calculationResult.stage2.description}</div>
                </div>
                {/* Température étape 2 */}
                <div className="space-y-1 text-sm">
                  {selectedTool2?.hasThermostat && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-light">🌡️ {lang === 'en' ? 'Oven temp' : 'Temp. four'}</span>
                      <span className="font-semibold text-orange-600">{isImperial ? Math.round(ovenTemp2 * 9/5 + 32) : ovenTemp2}°{isImperial ? 'F' : 'C'}</span>
                    </div>
                  )}
                  {selectedTool2?.hasIntensity && (
                    <div className="flex items-center justify-between">
                      <span className="text-text-light">🔥 {lang === 'en' ? 'Surface temp' : 'Temp. surface'}</span>
                      <span className="font-semibold text-orange-600">{isImperial ? Math.round(surfaceTemp2 * 9/5 + 32) : surfaceTemp2}°{isImperial ? 'F' : 'C'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Total + Rest */}
              <div className="card bg-green-light border-2 border-green">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-dark font-medium">{lang === 'en' ? 'Total time' : 'Temps total'}</span>
                  <span className="font-bold text-green text-xl">{calculationResult.totalMinutes} {t.min}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-light">{t.targetTemp}</span>
                  <span className="font-semibold text-accent">{unitConversion.formatTemperature(calculationResult.targetTemp, measurementSystem)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-light">{t.restTime}</span>
                  <span className="font-semibold text-text-dark">{calculationResult.restMinutes} {t.min}</span>
                </div>
                {calculationResult.carryover && (
                  <div className="mt-2 pt-2 border-t border-green-200 text-xs text-text-light">
                    ⚠️ {lang === 'en'
                      ? `Temperature will rise +${calculationResult.carryover}°C during rest`
                      : `La température montera de +${calculationResult.carryover}°C au repos`}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Standard Single-Stage Result Card */}
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
            </>
          )}

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

          {/* Recipes for this cut */}
          {(() => {
            const recipes = getRecipesByCut(selectedCutId, selectedMeatId)
            if (recipes && recipes.length > 0) {
              return (
                <div className="card">
                  <h3 className="font-bold text-text-dark mb-3">{t.recipes}</h3>
                  <div className="space-y-2">
                    {recipes.slice(0, 3).map((recipe) => (
                      <button
                        key={recipe.id}
                        onClick={() => navigate(`/encyclopedia/${selectedMeatId}/${selectedSubcategoryId}/${selectedCutId}`, { state: { openRecipe: recipe.id } })}
                        className="w-full flex items-center justify-between p-3 bg-surface rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{recipe.icon || '📖'}</span>
                          <div className="text-left">
                            <div className="font-medium text-text-dark">{lang === 'en' && recipe.name_en ? recipe.name_en : recipe.name}</div>
                            <div className="text-xs text-text-light">
                              {recipe.prepTime + recipe.cookTime} min • {lang === 'en' ? (recipe.difficulty === 'facile' ? 'Easy' : recipe.difficulty === 'moyen' ? 'Medium' : 'Hard') : recipe.difficulty}
                            </div>
                          </div>
                        </div>
                        <span className="text-accent">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          })()}

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
                setStep(5)
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
