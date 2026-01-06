import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { audioService } from '../services/audioService'
import { settingsService } from '../services/settingsService'

function Timer() {
  const location = useLocation()
  const navigate = useNavigate()

  // Données passées depuis le calculateur
  const initialData = location.state || {}

  // États
  const [phase, setPhase] = useState('cooking') // 'cooking', 'resting', 'done'
  const [totalSeconds, setTotalSeconds] = useState(initialData.totalSeconds || 300)
  const [restSeconds, setRestSeconds] = useState(initialData.restSeconds || 120)
  const [remainingSeconds, setRemainingSeconds] = useState(initialData.totalSeconds || 300)
  const [isRunning, setIsRunning] = useState(false)
  const [showConfig, setShowConfig] = useState(!initialData.totalSeconds)
  const [alarmActive, setAlarmActive] = useState(false)

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Infos du morceau (si venant du calculateur)
  const meatInfo = {
    meatName: initialData.meatName,
    cutName: initialData.cutName,
    doneness: initialData.doneness,
    targetTemp: initialData.targetTemp
  }

  // Préréglages
  const presets = [
    { name: lang === 'en' ? 'Rare steak' : 'Steak saignant', time: 180, icon: '🥩', temp: '52°C' },
    { name: lang === 'en' ? 'Medium steak' : 'Steak à point', time: 300, icon: '🥩', temp: '58°C' },
    { name: lang === 'en' ? 'Ribeye' : 'Entrecôte', time: 420, icon: '🥩', temp: '55°C' },
    { name: lang === 'en' ? 'Beef rib' : 'Côte de boeuf', time: 2700, icon: '🥩', temp: '54°C' },
    { name: lang === 'en' ? 'Pork tenderloin' : 'Filet mignon', time: 900, icon: '🐷', temp: '65°C' },
    { name: lang === 'en' ? 'Duck breast' : 'Magret', time: 480, icon: '🦆', temp: '58°C' },
    { name: lang === 'en' ? 'Whole chicken' : 'Poulet entier', time: 3600, icon: '🍗', temp: '74°C' },
    { name: lang === 'en' ? 'Leg of lamb' : 'Gigot d\'agneau', time: 2400, icon: '🐑', temp: '58°C' },
  ]

  // Référence pour le timer
  const intervalRef = useRef(null)

  // Initialiser l'audio au premier clic (politique navigateur)
  const initAudio = () => {
    audioService.init()
  }

  // Formater le temps en MM:SS
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  // Calculer le pourcentage de progression
  const getProgress = () => {
    if (phase === 'cooking') {
      return ((totalSeconds - remainingSeconds) / totalSeconds) * 100
    } else if (phase === 'resting') {
      return ((restSeconds - remainingSeconds) / restSeconds) * 100
    }
    return 100
  }

  // Jouer l'alerte selon les paramètres
  const playAlert = useCallback(() => {
    const currentSettings = settingsService.getSettings()
    setAlarmActive(true)

    // Son
    if (currentSettings.sound) {
      audioService.playAlarm(currentSettings.soundVolume || 0.7, 3)
    }

    // Vibration
    if (currentSettings.vibration) {
      audioService.vibrate([200, 100, 200, 100, 300])
    }

    // Notification
    if (currentSettings.notifications) {
      const title = lang === 'en' ? 'Cooking Timer' : 'Minuteur de cuisson'
      const body = phase === 'cooking'
        ? (lang === 'en' ? 'Cooking time is up! Time to rest.' : 'Cuisson terminée ! Temps de repos.')
        : (lang === 'en' ? 'Your meal is ready!' : 'Votre plat est prêt !')
      audioService.showNotification(title, body)
    }

    // Désactiver l'alerte après 5 secondes
    setTimeout(() => {
      setAlarmActive(false)
    }, 5000)
  }, [lang, phase])

  // Arrêter l'alarme manuellement
  const stopAlarm = () => {
    audioService.stopAlarm()
    audioService.stopVibration()
    setAlarmActive(false)
  }

  // Effet pour le compte à rebours
  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            // Temps écoulé
            if (phase === 'cooking' && restSeconds > 0) {
              playAlert()
              setPhase('resting')
              return restSeconds
            } else {
              playAlert()
              setIsRunning(false)
              setPhase('done')
              return 0
            }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, phase, restSeconds, playAlert])

  // Demander la permission de notification au montage
  useEffect(() => {
    if (settings.notifications) {
      audioService.requestNotificationPermission()
    }
  }, [settings.notifications])

  // Démarrer/Pause
  const toggleTimer = () => {
    initAudio() // S'assurer que l'audio est initialisé
    setIsRunning(!isRunning)
  }

  // Réinitialiser
  const resetTimer = () => {
    setIsRunning(false)
    setPhase('cooking')
    setRemainingSeconds(totalSeconds)
    stopAlarm()
  }

  // Sélectionner un préréglage
  const handlePreset = (preset) => {
    initAudio()
    setIsRunning(false)
    setPhase('cooking')
    setTotalSeconds(preset.time)
    setRestSeconds(Math.round(preset.time / 3))
    setRemainingSeconds(preset.time)
    setShowConfig(false)
  }

  // Ajuster le temps manuellement
  const adjustTime = (delta) => {
    if (!isRunning) {
      const newTime = Math.max(15, remainingSeconds + delta)
      setRemainingSeconds(newTime)
      if (phase === 'cooking') {
        setTotalSeconds(newTime)
      }
    }
  }

  // Passer à la phase repos manuellement
  const skipToRest = () => {
    if (phase === 'cooking') {
      setIsRunning(false)
      setPhase('resting')
      setRemainingSeconds(restSeconds)
    }
  }

  // Couleur selon la phase
  const getPhaseColor = () => {
    switch (phase) {
      case 'cooking': return '#F97066' // accent
      case 'resting': return '#8BC34A' // green
      case 'done': return '#FFD93D' // gold
      default: return '#F97066'
    }
  }

  // Textes selon la langue
  const texts = {
    title: lang === 'en' ? 'Timer' : 'Minuteur',
    cooking: lang === 'en' ? 'Cooking' : 'Cuisson',
    resting: lang === 'en' ? 'Resting' : 'Repos',
    ready: lang === 'en' ? 'Ready' : 'Prêt',
    cookingInProgress: lang === 'en' ? '🔥 Cooking in progress' : '🔥 Cuisson en cours',
    restingTime: lang === 'en' ? '⏸️ Resting time' : '⏸️ Temps de repos',
    itsReady: lang === 'en' ? "✅ It's ready!" : "✅ C'est prêt !",
    target: lang === 'en' ? 'Target' : 'Cible',
    pause: lang === 'en' ? 'Pause' : 'Pause',
    start: lang === 'en' ? 'Start' : 'Démarrer',
    newCook: lang === 'en' ? '🔄 New cooking' : '🔄 Nouvelle cuisson',
    skipToRest: lang === 'en' ? '⏭️ Skip to resting time' : '⏭️ Passer au temps de repos',
    cookingDone: lang === 'en' ? 'Cooking done!' : 'Cuisson terminée !',
    yourMeatReady: lang === 'en' ? 'is ready to be enjoyed' : 'est prêt à être dégusté',
    bonAppetit: lang === 'en' ? 'Enjoy your meal!' : 'Bon appétit !',
    quickPresets: lang === 'en' ? 'Quick presets' : 'Préréglages rapides',
    seePresets: lang === 'en' ? 'See presets' : 'Voir les préréglages',
    tip: lang === 'en' ? 'Tip' : 'Conseil',
    tipCooking: lang === 'en' ? 'Use a meat thermometer for perfect cooking. Internal temperature is more reliable than time.' : "Utilisez un thermomètre à viande pour une cuisson parfaite. La température interne est plus fiable que le temps.",
    tipResting: lang === 'en' ? 'During resting, the core temperature still rises 2-3°C. Cover lightly with aluminum foil.' : "Pendant le repos, la température à cœur augmente encore de 2-3°C. Couvrez légèrement de papier alu.",
    tipDone: lang === 'en' ? 'Slice against the grain for maximum tenderness. Serve immediately!' : "Tranchez contre les fibres pour une tendreté maximale. Servez immédiatement !",
    backToCalculator: lang === 'en' ? '← Back to calculator' : '← Retour au calculateur',
    stopAlarm: lang === 'en' ? '🔕 Stop alarm' : "🔕 Arrêter l'alarme"
  }

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="text-2xl font-bold text-text-dark">{texts.title}</h1>
        {meatInfo.cutName && (
          <p className="text-accent font-medium">
            {meatInfo.cutName} • {meatInfo.doneness}
          </p>
        )}
      </header>

      {/* Phase Indicator */}
      <div className="flex justify-center gap-2 mb-4">
        <div
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            phase === 'cooking' ? 'bg-accent text-white' : 'bg-gray-200 text-text-light'
          }`}
        >
          🔥 {texts.cooking}
        </div>
        <div
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            phase === 'resting' ? 'bg-green text-white' : 'bg-gray-200 text-text-light'
          }`}
        >
          ⏸️ {texts.resting}
        </div>
        <div
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            phase === 'done' ? 'bg-gold text-text-dark' : 'bg-gray-200 text-text-light'
          }`}
        >
          ✅ {texts.ready}
        </div>
      </div>

      {/* Timer Display */}
      <div className="card text-center py-8 mb-4 relative overflow-hidden">
        {/* Progress bar background */}
        <div
          className="absolute bottom-0 left-0 h-1 transition-all duration-1000"
          style={{
            width: `${getProgress()}%`,
            backgroundColor: getPhaseColor()
          }}
        />

        <div
          className={`text-6xl font-bold font-mono mb-2 ${alarmActive ? 'animate-pulse' : ''}`}
          style={{ color: getPhaseColor() }}
        >
          {formatTime(remainingSeconds)}
        </div>

        <p className="text-text-light text-sm">
          {phase === 'cooking' && texts.cookingInProgress}
          {phase === 'resting' && texts.restingTime}
          {phase === 'done' && texts.itsReady}
        </p>

        {meatInfo.targetTemp && phase === 'cooking' && (
          <p className="text-accent text-sm mt-2">
            🌡️ {texts.target} : {meatInfo.targetTemp}°C {lang === 'en' ? 'internal' : 'à cœur'}
          </p>
        )}
      </div>

      {/* Stop Alarm Button (when alarm is active) */}
      {alarmActive && (
        <button
          onClick={stopAlarm}
          className="w-full py-4 mb-4 rounded-xl font-bold bg-error text-white text-lg animate-pulse"
        >
          {texts.stopAlarm}
        </button>
      )}

      {/* Time Adjustment (only when paused) */}
      {!isRunning && phase !== 'done' && (
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => adjustTime(-30)}
            className="w-14 h-14 rounded-full bg-surface text-xl font-bold text-text-dark shadow-md active:scale-95 transition-transform"
          >
            -30s
          </button>
          <button
            onClick={() => adjustTime(-60)}
            className="w-14 h-14 rounded-full bg-surface text-xl font-bold text-text-dark shadow-md active:scale-95 transition-transform"
          >
            -1m
          </button>
          <button
            onClick={() => adjustTime(60)}
            className="w-14 h-14 rounded-full bg-surface text-xl font-bold text-text-dark shadow-md active:scale-95 transition-transform"
          >
            +1m
          </button>
          <button
            onClick={() => adjustTime(30)}
            className="w-14 h-14 rounded-full bg-surface text-xl font-bold text-text-dark shadow-md active:scale-95 transition-transform"
          >
            +30s
          </button>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex gap-3 mb-4">
        {phase !== 'done' ? (
          <>
            <button
              onClick={toggleTimer}
              className={`flex-1 py-4 rounded-xl font-bold text-white text-lg active:scale-98 transition-transform ${
                isRunning ? 'bg-yellow-500' : 'bg-green'
              }`}
            >
              {isRunning ? `⏸️ ${texts.pause}` : `▶️ ${texts.start}`}
            </button>
            <button
              onClick={resetTimer}
              className="px-6 py-4 rounded-xl font-bold bg-surface text-text-dark active:scale-95 transition-transform"
            >
              🔄
            </button>
          </>
        ) : (
          <button
            onClick={resetTimer}
            className="flex-1 py-4 rounded-xl font-bold bg-accent text-white text-lg"
          >
            {texts.newCook}
          </button>
        )}
      </div>

      {/* Skip to rest button */}
      {phase === 'cooking' && isRunning && (
        <button
          onClick={skipToRest}
          className="w-full py-3 text-accent font-medium mb-4"
        >
          {texts.skipToRest}
        </button>
      )}

      {/* Done celebration */}
      {phase === 'done' && (
        <div className="card bg-gold-light border-2 border-gold text-center py-6 mb-4">
          <div className="text-5xl mb-2">🎉</div>
          <h2 className="text-xl font-bold text-text-dark">{texts.cookingDone}</h2>
          <p className="text-text-light">
            {meatInfo.cutName
              ? `${lang === 'en' ? 'Your' : 'Votre'} ${meatInfo.cutName} ${texts.yourMeatReady}`
              : texts.bonAppetit}
          </p>
        </div>
      )}

      {/* Presets (show if no data from calculator or user wants to change) */}
      {showConfig || !meatInfo.cutName ? (
        <section>
          <h2 className="text-lg font-semibold text-text-dark mb-3">
            {texts.quickPresets}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePreset(preset)}
                className="card flex items-center gap-3 py-3 hover:shadow-md transition-shadow active:scale-98"
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
      ) : (
        <button
          onClick={() => setShowConfig(true)}
          className="w-full py-3 text-text-light text-sm"
        >
          {texts.seePresets}
        </button>
      )}

      {/* Tips */}
      <div className="card mt-4 bg-gold-light border border-gold">
        <div className="flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <h3 className="font-semibold text-text-dark text-sm">{texts.tip}</h3>
            <p className="text-xs text-text-light">
              {phase === 'cooking' && texts.tipCooking}
              {phase === 'resting' && texts.tipResting}
              {phase === 'done' && texts.tipDone}
            </p>
          </div>
        </div>
      </div>

      {/* Back to calculator button */}
      <button
        onClick={() => navigate('/calculator')}
        className="w-full mt-4 py-3 text-accent font-medium"
      >
        {texts.backToCalculator}
      </button>
    </div>
  )
}

export default Timer
