import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { audioService } from '../services/audioService'
import { settingsService } from '../services/settingsService'

function Timer() {
  const location = useLocation()
  const navigate = useNavigate()

  // Données passées depuis le calculateur
  const initialData = location.state || {}

  // Détecter si c'est une cuisson en deux étapes
  const isTwoStage = initialData.isTwoStage || false

  // Configuration de la saisie par faces
  const getSearConfig = () => {
    // Temps total de saisie en secondes
    const totalSearSeconds = initialData.stage2Seconds || initialData.totalSeconds || 300

    // Si moins de 3 minutes, c'est une saisie rapide → diviser par faces
    if (totalSearSeconds <= 180) {
      const faceTime = Math.floor(totalSearSeconds / 2)
      return {
        hasFaces: true,
        face1: faceTime,
        face2: faceTime,
        edges: Math.min(20, Math.floor(faceTime / 2)) // 15-20s pour les côtés
      }
    }
    return { hasFaces: false, total: totalSearSeconds }
  }

  const searConfig = getSearConfig()

  // États pour les temps
  const [stage1Seconds, setStage1Seconds] = useState(initialData.stage1Seconds || 0)
  const [restSeconds, setRestSeconds] = useState(initialData.restSeconds || 120)

  // Pour la saisie avec faces
  const [searSubPhase, setSearSubPhase] = useState(searConfig.hasFaces ? 'face1' : null)
  const [remainingSeconds, setRemainingSeconds] = useState(
    isTwoStage
      ? (initialData.stage1Seconds || 0)
      : (searConfig.hasFaces ? searConfig.face1 : (initialData.totalSeconds || 300))
  )

  // Phase actuelle: 'stage1', 'stage2', 'resting', 'done'
  const [phase, setPhase] = useState(isTwoStage ? 'stage1' : 'stage2')
  const [isRunning, setIsRunning] = useState(false)
  const [showConfig, setShowConfig] = useState(!initialData.totalSeconds && !initialData.stage1Seconds)
  const [alarmActive, setAlarmActive] = useState(false)
  const [showFlipAlert, setShowFlipAlert] = useState(false)

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Infos du morceau (avec IDs pour annonces contextuelles)
  const meatInfo = {
    // IDs pour le contexte vocal
    meatId: initialData.meatId,
    cutId: initialData.cutId,
    methodId: initialData.methodId || initialData.techniqueId, // Legacy + nouveau
    techniqueId: initialData.techniqueId,
    toolId: initialData.toolId,
    tool2Id: initialData.tool2Id,
    // Noms pour affichage
    meatName: initialData.meatName,
    meatName_en: initialData.meatName_en,
    cutName: initialData.cutName,
    cutName_en: initialData.cutName_en,
    // Technique
    techniqueName: initialData.techniqueName,
    techniqueName_en: initialData.techniqueName_en,
    techniqueIcon: initialData.techniqueIcon,
    // Outils
    toolName: initialData.toolName,
    toolName_en: initialData.toolName_en,
    toolIcon: initialData.toolIcon,
    tool2Name: initialData.tool2Name,
    tool2Name_en: initialData.tool2Name_en,
    tool2Icon: initialData.tool2Icon,
    // Outils par étape (cuisson 2 étapes)
    stage1Tool: initialData.stage1Tool,
    stage1Tool_en: initialData.stage1Tool_en,
    stage1ToolIcon: initialData.stage1ToolIcon,
    stage2Tool: initialData.stage2Tool,
    stage2Tool_en: initialData.stage2Tool_en,
    stage2ToolIcon: initialData.stage2ToolIcon,
    // Autres infos
    doneness: initialData.doneness,
    targetTemp: initialData.targetTemp,
    pullTemp: initialData.pullTemp,
    toolIntensity: initialData.toolIntensity,
    toolTemp: initialData.toolTemp,
    methodName: initialData.methodName,
    stage1Name: initialData.stage1Name,
    stage2Name: initialData.stage2Name,
    stage1Desc: initialData.stage1Desc,
    stage2Desc: initialData.stage2Desc
  }

  // Contexte pour les annonces vocales
  const voiceContext = {
    meatId: meatInfo.meatId,
    cutId: meatInfo.cutId,
    methodId: meatInfo.methodId || meatInfo.techniqueId,
    techniqueId: meatInfo.techniqueId,
    toolId: meatInfo.toolId,
    cutName: meatInfo.cutName,
    cutName_en: meatInfo.cutName_en
  }

  // Préréglages (cuisson simple)
  const presets = [
    { name: lang === 'en' ? 'Rare steak' : 'Steak saignant', time: 180, rest: 60, icon: '🥩', temp: '45°C' },
    { name: lang === 'en' ? 'Medium steak' : 'Steak à point', time: 300, rest: 120, icon: '🥩', temp: '55°C' },
    { name: lang === 'en' ? 'Ribeye' : 'Entrecôte', time: 420, rest: 180, icon: '🥩', temp: '52°C' },
    { name: lang === 'en' ? 'Beef rib' : 'Côte de boeuf', time: 2700, rest: 600, icon: '🥩', temp: '52°C' },
    { name: lang === 'en' ? 'Duck breast' : 'Magret', time: 480, rest: 300, icon: '🦆', temp: '54°C' },
    { name: lang === 'en' ? 'Whole chicken' : 'Poulet entier', time: 3600, rest: 600, icon: '🍗', temp: '74°C' },
  ]

  // Référence pour le timer
  const intervalRef = useRef(null)
  // Ref pour la fonction goToNextPhase (évite les problèmes de dépendances dans useEffect)
  const goToNextPhaseRef = useRef(null)

  // Initialiser l'audio
  const initAudio = () => {
    audioService.init()
  }

  // Formater le temps
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    if (mins === 0) return `${s}s`
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  // Calculer le pourcentage de progression
  const getProgress = () => {
    let total = 0
    if (phase === 'stage1') {
      total = stage1Seconds
    } else if (phase === 'stage2') {
      if (searConfig.hasFaces) {
        total = searSubPhase === 'face1' ? searConfig.face1 :
                searSubPhase === 'face2' ? searConfig.face2 : searConfig.edges
      } else {
        total = searConfig.total
      }
    } else if (phase === 'resting') {
      total = restSeconds
    } else {
      return 100
    }
    if (total === 0) return 100
    return ((total - remainingSeconds) / total) * 100
  }

  // Textes pour les sous-phases de saisie
  const getSearSubPhaseText = () => {
    if (!searConfig.hasFaces) return null

    const texts = {
      face1: {
        title: lang === 'en' ? 'FACE 1' : 'FACE 1',
        subtitle: lang === 'en' ? 'First flat side' : 'Premier côté plat',
        icon: '🥩',
        nextAction: lang === 'en' ? 'Flip to face 2' : 'Retourner face 2'
      },
      face2: {
        title: lang === 'en' ? 'FACE 2' : 'FACE 2',
        subtitle: lang === 'en' ? 'Second flat side' : 'Deuxième côté plat',
        icon: '🔄',
        nextAction: lang === 'en' ? 'Sear the edges' : 'Saisir les côtés'
      },
      edges: {
        title: lang === 'en' ? 'EDGES' : 'CÔTÉS',
        subtitle: lang === 'en' ? 'Quick sear on narrow sides' : 'Saisie rapide côtés étroits',
        icon: '📐',
        nextAction: lang === 'en' ? 'Rest time!' : 'Temps de repos !'
      }
    }
    return texts[searSubPhase]
  }

  // Obtenir le nom de l'outil selon la langue
  const getToolName = (toolName, toolName_en) => {
    return lang === 'en' ? (toolName_en || toolName) : toolName
  }

  // Conseil adapté à l'outil
  const getToolTip = (toolId) => {
    const tips = {
      poele: {
        fr: 'Poêle très chaude ! Ne bougez pas la viande, laissez la croûte se former',
        en: 'Very hot pan! Don\'t move the meat, let the crust form'
      },
      four: {
        fr: `Four préchauffé à ${meatInfo.toolTemp || 120}°C. Utilisez un thermomètre à sonde`,
        en: `Oven preheated to ${meatInfo.toolTemp || 250}°F. Use a probe thermometer`
      },
      bain_eau: {
        fr: 'Eau à température stable. Immergez complètement le sachet',
        en: 'Water at stable temperature. Fully submerge the bag'
      },
      thermoplongeur: {
        fr: 'Thermoplongeur réglé à la température exacte. Patience !',
        en: 'Immersion circulator set to exact temperature. Patience!'
      },
      bbq_indirect: {
        fr: 'Braises sur les côtés, viande au centre. Couvercle fermé !',
        en: 'Coals on sides, meat in center. Lid closed!'
      },
      bbq_direct: {
        fr: 'Braises bien chaudes, retourner une seule fois',
        en: 'Hot coals, flip only once'
      },
      grill: {
        fr: 'Grille propre et huilée pour de belles marques',
        en: 'Clean and oiled grate for perfect grill marks'
      },
      plancha: {
        fr: 'Plancha très chaude, saisie uniforme garantie',
        en: 'Very hot griddle, guaranteed even searing'
      },
      chalumeau: {
        fr: 'Mouvement constant, séchez bien la viande avant',
        en: 'Constant motion, pat meat completely dry first'
      }
    }
    return tips[toolId] || tips.poele
  }

  // Configuration visuelle par phase
  const getPhaseConfig = () => {
    // Outil actuel selon la phase
    const currentToolIcon = phase === 'stage1'
      ? (meatInfo.stage1ToolIcon || meatInfo.toolIcon || '🌡️')
      : (meatInfo.stage2ToolIcon || meatInfo.tool2Icon || meatInfo.toolIcon || '🔥')

    const currentToolId = phase === 'stage1' ? meatInfo.toolId : (meatInfo.tool2Id || meatInfo.toolId)
    const currentToolTip = getToolTip(currentToolId)

    const configs = {
      stage1: {
        bgClass: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        textClass: 'text-blue-600',
        borderClass: 'border-blue-400',
        icon: meatInfo.stage1ToolIcon || meatInfo.toolIcon || '🌡️',
        title: lang === 'en' ? 'Stage 1' : 'Étape 1',
        subtitle: getToolName(meatInfo.stage1Tool, meatInfo.stage1Tool_en) || meatInfo.stage1Name || (lang === 'en' ? 'Low temperature' : 'Basse température'),
        description: meatInfo.stage1Desc || (lang === 'en' ? 'Cook slowly until target internal temp' : 'Cuisson lente jusqu\'à température interne'),
        tip: lang === 'en'
          ? `Use a thermometer! Remove when internal temp reaches ${meatInfo.pullTemp || '?'}°C`
          : `Utilisez un thermomètre ! Retirez quand la température à cœur atteint ${meatInfo.pullTemp || '?'}°C`,
        toolTip: currentToolTip[lang === 'en' ? 'en' : 'fr']
      },
      stage2: {
        bgClass: 'bg-accent',
        bgLight: 'bg-accent-light',
        textClass: 'text-accent',
        borderClass: 'border-accent',
        icon: searConfig.hasFaces ? (getSearSubPhaseText()?.icon || '🔥') : (meatInfo.stage2ToolIcon || meatInfo.tool2Icon || meatInfo.toolIcon || '🔥'),
        title: searConfig.hasFaces
          ? getSearSubPhaseText()?.title
          : (isTwoStage ? (lang === 'en' ? 'Stage 2' : 'Étape 2') : (lang === 'en' ? 'Cooking' : 'Cuisson')),
        subtitle: searConfig.hasFaces
          ? getSearSubPhaseText()?.subtitle
          : (getToolName(meatInfo.stage2Tool, meatInfo.stage2Tool_en) || meatInfo.stage2Name || (lang === 'en' ? 'Searing' : 'Saisie')),
        description: meatInfo.stage2Desc || (lang === 'en' ? 'High heat for crust' : 'Feu vif pour la croûte'),
        tip: currentToolTip[lang === 'en' ? 'en' : 'fr']
      },
      resting: {
        bgClass: 'bg-green',
        bgLight: 'bg-green-light',
        textClass: 'text-green',
        borderClass: 'border-green',
        icon: '⏸️',
        title: lang === 'en' ? 'Resting' : 'Repos',
        subtitle: lang === 'en' ? 'Let it rest' : 'Laissez reposer',
        description: lang === 'en' ? 'Juices redistributing' : 'Les jus se redistribuent',
        tip: lang === 'en'
          ? 'Cover loosely with foil. Temperature rises 3-5°C during rest'
          : 'Couvrez légèrement de papier alu. La température monte de 3-5°C au repos'
      },
      done: {
        bgClass: 'bg-gold',
        bgLight: 'bg-gold-light',
        textClass: 'text-yellow-700',
        borderClass: 'border-gold',
        icon: '✅',
        title: lang === 'en' ? 'Ready!' : 'Prêt !',
        subtitle: lang === 'en' ? 'Enjoy!' : 'Bon appétit !',
        description: lang === 'en' ? 'Your meat is perfectly cooked' : 'Votre viande est parfaitement cuite',
        tip: lang === 'en'
          ? 'Slice against the grain for maximum tenderness'
          : 'Tranchez contre les fibres pour une tendreté maximale'
      }
    }
    return configs[phase]
  }

  const currentPhaseConfig = getPhaseConfig()

  // Jouer l'alerte avec annonce vocale contextuelle
  const playAlert = useCallback((message, voiceType = null, context = {}) => {
    const currentSettings = settingsService.getSettings()
    const effectiveLang = currentSettings.language === 'auto'
      ? settingsService.detectBrowserLanguage()
      : currentSettings.language

    setAlarmActive(true)

    // Annonce vocale selon le type (avec contexte pour personnalisation)
    if (voiceType && currentSettings.sound) {
      const announcements = audioService.speakAnnouncements
      const ctx = { ...context, lang: effectiveLang }

      switch (voiceType) {
        case 'flipFace2':
          announcements.flipFace2(effectiveLang, ctx)
          break
        case 'flipEdges':
          announcements.flipEdges(effectiveLang, ctx)
          break
        case 'endStage1':
          announcements.endStage1(effectiveLang, ctx)
          break
        case 'startSearing':
          announcements.startSearing(effectiveLang, ctx)
          break
        case 'removeFromBath':
          announcements.removeFromBath(effectiveLang, ctx)
          break
        case 'removeFromOven':
          announcements.removeFromOven(effectiveLang, ctx)
          break
        case 'startResting':
          announcements.startResting(effectiveLang, ctx)
          break
        case 'cookingDone':
          announcements.cookingDone(effectiveLang, ctx)
          break
        default:
          break
      }
    }

    // Afficher l'alerte flip si c'est un retournement
    const isFlip = voiceType === 'flipFace2' || voiceType === 'flipEdges'
    if (isFlip) {
      setShowFlipAlert(true)
      setTimeout(() => setShowFlipAlert(false), 3000)
    }

    // Son d'alarme (bips) après un petit délai pour laisser la voix parler
    if (currentSettings.sound) {
      setTimeout(() => {
        audioService.playAlarm(currentSettings.soundVolume || 0.7, isFlip ? 2 : 3)
      }, voiceType ? 2000 : 0) // Délai plus long pour les annonces contextuelles
    }

    if (currentSettings.vibration) {
      audioService.vibrate(isFlip ? [300, 100, 300] : [200, 100, 200, 100, 300])
    }

    if (currentSettings.notifications) {
      audioService.showNotification('CookMaster', message)
    }

    setTimeout(() => setAlarmActive(false), isFlip ? 3000 : 5000)
  }, [])

  // Arrêter l'alarme et la voix
  const stopAlarm = () => {
    audioService.stopAlarm()
    audioService.stopVibration()
    audioService.stopSpeaking()
    setAlarmActive(false)
    setShowFlipAlert(false)
  }

  // Passer à la phase/sous-phase suivante
  const goToNextPhase = useCallback(() => {
    // Gestion des sous-phases de saisie
    if (phase === 'stage2' && searConfig.hasFaces) {
      if (searSubPhase === 'face1') {
        const msg = lang === 'en' ? '🔄 FLIP NOW! Face 2' : '🔄 RETOURNEZ ! Face 2'
        playAlert(msg, 'flipFace2', voiceContext) // Annonce contextuelle
        setSearSubPhase('face2')
        setRemainingSeconds(searConfig.face2)
        return
      } else if (searSubPhase === 'face2') {
        const msg = lang === 'en' ? '📐 EDGES! Sear the sides' : '📐 CÔTÉS ! Saisissez les tranches'
        playAlert(msg, 'flipEdges', voiceContext) // Annonce contextuelle
        setSearSubPhase('edges')
        setRemainingSeconds(searConfig.edges)
        return
      }
      // Après les côtés, passer au repos
    }

    if (phase === 'stage1') {
      // Utiliser endStage1 qui détecte automatiquement la méthode
      const msg = lang === 'en'
        ? 'Stage 1 done! Time to sear!'
        : 'Étape 1 terminée ! Passez à la saisie !'
      playAlert(msg, 'endStage1', voiceContext) // Annonce selon méthode (sous-vide, four, BBQ)
      setPhase('stage2')
      if (searConfig.hasFaces) {
        setSearSubPhase('face1')
        setRemainingSeconds(searConfig.face1)
      } else {
        setRemainingSeconds(searConfig.total)
      }
    } else if (phase === 'stage2') {
      if (restSeconds > 0) {
        const msg = lang === 'en'
          ? '⏸️ Cooking done! Resting time'
          : '⏸️ Cuisson terminée ! Temps de repos'
        playAlert(msg, 'startResting', voiceContext) // Annonce contextuelle
        setPhase('resting')
        setSearSubPhase(null)
        setRemainingSeconds(restSeconds)
      } else {
        const msg = lang === 'en' ? '✅ Ready to serve!' : '✅ Prêt à servir !'
        playAlert(msg, 'cookingDone', voiceContext) // Annonce contextuelle
        setPhase('done')
        setIsRunning(false)
      }
    } else if (phase === 'resting') {
      const msg = lang === 'en' ? '✅ Ready to serve!' : '✅ Prêt à servir !'
      playAlert(msg, 'cookingDone', voiceContext) // Annonce contextuelle
      setPhase('done')
      setIsRunning(false)
    }
  }, [phase, searSubPhase, searConfig, restSeconds, playAlert, lang, voiceContext])

  // Mettre à jour la ref à chaque changement de goToNextPhase
  useEffect(() => {
    goToNextPhaseRef.current = goToNextPhase
  }, [goToNextPhase])

  // Effet pour le compte à rebours - utilise la ref pour éviter les problèmes de dépendances
  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            // Utiliser la ref pour appeler la fonction à jour
            if (goToNextPhaseRef.current) {
              goToNextPhaseRef.current()
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning]) // Seulement isRunning comme dépendance maintenant

  // Demander permission notifications
  useEffect(() => {
    if (settings.notifications) {
      audioService.requestNotificationPermission()
    }
  }, [settings.notifications])

  // Contrôles
  const toggleTimer = () => {
    initAudio()
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    stopAlarm()
    if (isTwoStage) {
      setPhase('stage1')
      setRemainingSeconds(stage1Seconds)
    } else {
      setPhase('stage2')
      if (searConfig.hasFaces) {
        setSearSubPhase('face1')
        setRemainingSeconds(searConfig.face1)
      } else {
        setRemainingSeconds(searConfig.total)
      }
    }
  }

  const skipToNextPhase = () => {
    setIsRunning(false)
    goToNextPhase()
  }

  const handlePreset = (preset) => {
    initAudio()
    setIsRunning(false)
    setPhase('stage2')
    const newSearConfig = preset.time <= 180
      ? { hasFaces: true, face1: Math.floor(preset.time/2), face2: Math.floor(preset.time/2), edges: 20 }
      : { hasFaces: false, total: preset.time }

    if (newSearConfig.hasFaces) {
      setSearSubPhase('face1')
      setRemainingSeconds(newSearConfig.face1)
    } else {
      setSearSubPhase(null)
      setRemainingSeconds(preset.time)
    }
    setRestSeconds(preset.rest)
    setShowConfig(false)
  }

  const adjustTime = (delta) => {
    if (!isRunning && phase !== 'done') {
      const newTime = Math.max(5, remainingSeconds + delta)
      setRemainingSeconds(newTime)
    }
  }

  // Textes
  const t = {
    pause: lang === 'en' ? 'Pause' : 'Pause',
    start: lang === 'en' ? 'Start' : 'Démarrer',
    skip: lang === 'en' ? 'Skip' : 'Passer',
    newCook: lang === 'en' ? 'New cooking' : 'Nouvelle cuisson',
    stopAlarm: lang === 'en' ? 'Stop alarm' : 'Arrêter l\'alarme',
    presets: lang === 'en' ? 'Quick presets' : 'Préréglages rapides',
    backCalc: lang === 'en' ? 'Back to calculator' : 'Retour au calculateur',
    targetTemp: lang === 'en' ? 'Target' : 'Cible',
    pullTemp: lang === 'en' ? 'Remove at' : 'Retirer à',
    internal: lang === 'en' ? 'internal' : 'à cœur',
    flipNow: lang === 'en' ? 'FLIP NOW!' : 'RETOURNEZ !'
  }

  // Indicateur des faces pour la saisie
  const renderSearProgress = () => {
    if (!searConfig.hasFaces || phase !== 'stage2') return null

    return (
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          searSubPhase === 'face1' ? 'bg-white text-accent' : 'bg-white/30 text-white'
        }`}>
          {lang === 'en' ? 'Face 1' : 'Face 1'}
        </div>
        <div className="w-4 h-0.5 bg-white/50" />
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          searSubPhase === 'face2' ? 'bg-white text-accent' : 'bg-white/30 text-white'
        }`}>
          {lang === 'en' ? 'Face 2' : 'Face 2'}
        </div>
        <div className="w-4 h-0.5 bg-white/50" />
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          searSubPhase === 'edges' ? 'bg-white text-accent' : 'bg-white/30 text-white'
        }`}>
          {lang === 'en' ? 'Edges' : 'Côtés'}
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${currentPhaseConfig.bgLight}`}>
      {/* Alerte RETOURNEZ en plein écran */}
      {showFlipAlert && (
        <div className="fixed inset-0 z-50 bg-yellow-400 flex flex-col items-center justify-center animate-pulse">
          <div className="text-8xl mb-4">🔄</div>
          <h1 className="text-4xl font-black text-yellow-900">{t.flipNow}</h1>
          <p className="text-xl text-yellow-800 mt-2">
            {getSearSubPhaseText()?.nextAction}
          </p>
          <button
            onClick={stopAlarm}
            className="mt-8 px-8 py-4 bg-yellow-900 text-white rounded-xl font-bold text-lg"
          >
            OK
          </button>
        </div>
      )}

      {/* Header avec progression des étapes */}
      <div className={`${currentPhaseConfig.bgClass} text-white py-4 px-4`}>
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => navigate('/calculator')} className="text-white/80 text-sm">
            ← {t.backCalc}
          </button>
          <div className="text-right">
            {meatInfo.cutName && (
              <div className="text-sm font-medium">{meatInfo.cutName}</div>
            )}
            {meatInfo.techniqueName && (
              <div className="text-xs text-white/70">
                {meatInfo.techniqueIcon} {lang === 'en' ? meatInfo.techniqueName_en : meatInfo.techniqueName}
              </div>
            )}
          </div>
        </div>

        {/* Indicateur d'étapes principales avec icônes d'outils */}
        {phase !== 'done' && (
          <div className="flex items-center justify-center gap-2 mb-2">
            {isTwoStage && (
              <>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                  phase === 'stage1' ? 'bg-white text-blue-600' : 'bg-white/30'
                }`} title={meatInfo.stage1Tool || 'Étape 1'}>
                  {meatInfo.stage1ToolIcon || meatInfo.toolIcon || '🌡️'}
                </div>
                <div className={`w-6 h-1 ${phase !== 'stage1' ? 'bg-white' : 'bg-white/30'}`} />
              </>
            )}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
              phase === 'stage2' ? 'bg-white text-accent' : (phase === 'stage1' ? 'bg-white/30' : 'bg-white/30')
            }`} title={meatInfo.stage2Tool || meatInfo.toolName || 'Saisie'}>
              {isTwoStage
                ? (meatInfo.stage2ToolIcon || meatInfo.tool2Icon || '🔥')
                : (meatInfo.toolIcon || '🔥')
              }
            </div>
            <div className={`w-6 h-1 ${phase === 'resting' ? 'bg-white' : 'bg-white/30'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
              phase === 'resting' ? 'bg-white text-green' : 'bg-white/30'
            }`}>⏸️</div>
          </div>
        )}

        {/* Sous-indicateur des faces pour la saisie */}
        {renderSearProgress()}

        {/* Titre de la phase */}
        <div className="text-center">
          <div className="text-4xl mb-1">{currentPhaseConfig.icon}</div>
          <h1 className="text-2xl font-bold">{currentPhaseConfig.title}</h1>
          <p className="text-white/80">{currentPhaseConfig.subtitle}</p>
        </div>
      </div>

      <div className="p-4 pb-24">
        {/* Timer principal */}
        {phase !== 'done' ? (
          <div className={`card border-2 ${currentPhaseConfig.borderClass} text-center py-8 mb-4`}>
            {/* Barre de progression */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div
                className={`h-full ${currentPhaseConfig.bgClass} transition-all duration-1000`}
                style={{ width: `${getProgress()}%` }}
              />
            </div>

            {/* Temps restant */}
            <div className={`text-7xl font-bold font-mono mb-2 ${currentPhaseConfig.textClass} ${alarmActive ? 'animate-pulse' : ''}`}>
              {formatTime(remainingSeconds)}
            </div>

            <p className="text-text-light text-sm mb-4">{currentPhaseConfig.description}</p>

            {/* Info sur la prochaine action pour la saisie */}
            {phase === 'stage2' && searConfig.hasFaces && getSearSubPhaseText() && (
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium mb-4">
                ➡️ {lang === 'en' ? 'Next:' : 'Ensuite :'} {getSearSubPhaseText().nextAction}
              </div>
            )}

            {/* Température cible / retrait */}
            {phase === 'stage1' && meatInfo.pullTemp && (
              <div className={`inline-block px-4 py-2 rounded-full ${currentPhaseConfig.bgLight} ${currentPhaseConfig.textClass} font-semibold`}>
                🌡️ {t.pullTemp} : {meatInfo.pullTemp}°C {t.internal}
              </div>
            )}
            {phase === 'stage2' && meatInfo.targetTemp && !searConfig.hasFaces && (
              <div className={`inline-block px-4 py-2 rounded-full ${currentPhaseConfig.bgLight} ${currentPhaseConfig.textClass} font-semibold`}>
                🎯 {t.targetTemp} : {meatInfo.targetTemp}°C {t.internal}
              </div>
            )}
          </div>
        ) : (
          /* Écran de fin */
          <div className="card border-2 border-gold bg-gold-light text-center py-10 mb-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-text-dark mb-2">{currentPhaseConfig.title}</h2>
            <p className="text-text-light text-lg mb-4">{currentPhaseConfig.subtitle}</p>
            {meatInfo.cutName && (
              <p className="text-text-dark">
                {lang === 'en' ? 'Your' : 'Votre'} <strong>{meatInfo.cutName}</strong> {lang === 'en' ? 'is ready!' : 'est prêt !'}
              </p>
            )}
          </div>
        )}

        {/* Bouton arrêter alarme */}
        {alarmActive && !showFlipAlert && (
          <button
            onClick={stopAlarm}
            className="w-full py-4 mb-4 rounded-xl font-bold bg-error text-white text-lg animate-pulse"
          >
            🔕 {t.stopAlarm}
          </button>
        )}

        {/* Ajustement du temps */}
        {!isRunning && phase !== 'done' && (
          <div className="flex justify-center gap-3 mb-4">
            <button onClick={() => adjustTime(-30)} className="w-14 h-14 rounded-full bg-white shadow-md text-lg font-bold text-text-dark">-30s</button>
            <button onClick={() => adjustTime(-10)} className="w-14 h-14 rounded-full bg-white shadow-md text-lg font-bold text-text-dark">-10s</button>
            <button onClick={() => adjustTime(10)} className="w-14 h-14 rounded-full bg-white shadow-md text-lg font-bold text-text-dark">+10s</button>
            <button onClick={() => adjustTime(30)} className="w-14 h-14 rounded-full bg-white shadow-md text-lg font-bold text-text-dark">+30s</button>
          </div>
        )}

        {/* Boutons de contrôle */}
        {phase !== 'done' ? (
          <div className="flex gap-3 mb-4">
            <button
              onClick={toggleTimer}
              className={`flex-1 py-4 rounded-xl font-bold text-white text-lg ${
                isRunning ? 'bg-yellow-500' : currentPhaseConfig.bgClass
              }`}
            >
              {isRunning ? `⏸️ ${t.pause}` : `▶️ ${t.start}`}
            </button>
            <button
              onClick={skipToNextPhase}
              className="px-6 py-4 rounded-xl font-bold bg-white shadow-md text-text-dark"
              title={t.skip}
            >
              ⏭️
            </button>
            <button
              onClick={resetTimer}
              className="px-6 py-4 rounded-xl font-bold bg-white shadow-md text-text-dark"
            >
              🔄
            </button>
          </div>
        ) : (
          <button
            onClick={resetTimer}
            className="w-full py-4 rounded-xl font-bold bg-accent text-white text-lg mb-4"
          >
            🔄 {t.newCook}
          </button>
        )}

        {/* Conseil */}
        <div className={`card ${currentPhaseConfig.bgLight} border ${currentPhaseConfig.borderClass}`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-text-dark">
                {lang === 'en' ? 'Tip' : 'Conseil'}
              </h3>
              <p className="text-sm text-text-light">{currentPhaseConfig.tip}</p>
            </div>
          </div>
        </div>

        {/* Préréglages */}
        {(showConfig || phase === 'done') && !isTwoStage && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-text-dark mb-3">{t.presets}</h2>
            <div className="grid grid-cols-2 gap-3">
              {presets.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => handlePreset(preset)}
                  className="card flex items-center gap-3 py-3 bg-white"
                >
                  <span className="text-2xl">{preset.icon}</span>
                  <div className="text-left">
                    <div className="font-medium text-text-dark text-sm">{preset.name}</div>
                    <div className="text-xs text-text-light">
                      {Math.floor(preset.time / 60)} min • {preset.temp}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Timer
