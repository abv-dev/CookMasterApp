/**
 * Service audio utilisant Web Audio API
 * Gestion des alarmes et sons
 */

let audioContext = null
let isPlaying = false
let oscillatorNodes = []
let timeoutIds = []

/**
 * Initialise le contexte audio (doit être appelé après interaction utilisateur)
 */
const init = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
  }
  // Resume si suspendu (politique autoplay des navigateurs)
  if (audioContext.state === 'suspended') {
    audioContext.resume()
  }
  return audioContext
}

/**
 * Joue un bip simple
 */
const playBeep = (frequency = 880, duration = 200, volume = 0.5) => {
  const ctx = init()
  if (!ctx) return

  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)

  oscillator.frequency.value = frequency
  oscillator.type = 'sine'
  gainNode.gain.value = volume

  oscillator.start()
  oscillator.stop(ctx.currentTime + duration / 1000)

  oscillatorNodes.push(oscillator)
}

/**
 * Joue l'alarme de fin de cuisson (pattern de bips)
 * @param {number} volume - Volume de 0 à 1
 * @param {number} repeat - Nombre de répétitions du pattern
 */
const playAlarm = (volume = 0.7, repeat = 3) => {
  if (isPlaying) return
  isPlaying = true

  const ctx = init()
  if (!ctx) {
    isPlaying = false
    return
  }

  // Pattern: 3 bips courts, pause, répéter
  const beepPattern = () => {
    for (let i = 0; i < repeat; i++) {
      // 3 bips par répétition
      timeoutIds.push(setTimeout(() => playBeep(880, 150, volume), i * 1000))
      timeoutIds.push(setTimeout(() => playBeep(880, 150, volume), i * 1000 + 200))
      timeoutIds.push(setTimeout(() => playBeep(1100, 200, volume), i * 1000 + 400))
    }

    // Fin après toutes les répétitions
    timeoutIds.push(setTimeout(() => {
      isPlaying = false
    }, repeat * 1000))
  }

  beepPattern()
}

/**
 * Joue une alarme continue jusqu'à arrêt manuel
 */
const playAlarmContinuous = (volume = 0.7) => {
  if (isPlaying) return
  isPlaying = true

  const ctx = init()
  if (!ctx) {
    isPlaying = false
    return
  }

  const beepLoop = () => {
    if (!isPlaying) return

    playBeep(880, 150, volume)
    timeoutIds.push(setTimeout(() => playBeep(880, 150, volume), 200))
    timeoutIds.push(setTimeout(() => playBeep(1100, 200, volume), 400))
    timeoutIds.push(setTimeout(beepLoop, 1500))
  }

  beepLoop()
}

/**
 * Arrête l'alarme
 */
const stopAlarm = () => {
  isPlaying = false

  // Arrêter tous les timeouts
  timeoutIds.forEach(id => clearTimeout(id))
  timeoutIds = []

  // Arrêter tous les oscillateurs
  oscillatorNodes.forEach(osc => {
    try {
      osc.stop()
    } catch {
      // Ignorer si déjà arrêté
    }
  })
  oscillatorNodes = []
}

/**
 * Active la vibration (si disponible)
 * @param {number|number[]} pattern - Durée ou pattern [vibration, pause, vibration, ...]
 */
const vibrate = (pattern = [200, 100, 200, 100, 300]) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern)
  }
}

/**
 * Arrête la vibration
 */
const stopVibration = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(0)
  }
}

/**
 * Demande les permissions de notification
 */
const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }
  return false
}

/**
 * Affiche une notification
 */
const showNotification = (title, body, icon = '/icon-192.png') => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon })
    return true
  }
  return false
}

export const audioService = {
  init,
  playBeep,
  playAlarm,
  playAlarmContinuous,
  stopAlarm,
  vibrate,
  stopVibration,
  requestNotificationPermission,
  showNotification,
  get isPlaying() {
    return isPlaying
  }
}
