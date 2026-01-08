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
 * Joue un bip simple très doux
 */
const playBeep = (frequency = 392, duration = 300, volume = 0.15) => {
  const ctx = init()
  if (!ctx) return

  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)

  oscillator.frequency.value = frequency
  oscillator.type = 'triangle' // Plus doux que 'sine'

  // Fade-in lent et fade-out très progressif
  const now = ctx.currentTime
  gainNode.gain.setValueAtTime(0, now)
  gainNode.gain.linearRampToValueAtTime(volume, now + 0.05)
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration / 1000)

  oscillator.start()
  oscillator.stop(ctx.currentTime + duration / 1000)

  oscillatorNodes.push(oscillator)
}

/**
 * Joue un son de carillon très doux (style notification mobile)
 */
const playChime = (volume = 0.2) => {
  const ctx = init()
  if (!ctx) return

  // Notes graves et douces (Sol3 et Si3 - accord majeur doux)
  const notes = [
    { freq: 392, delay: 0, vol: 1 },      // Sol3
    { freq: 494, delay: 0.15, vol: 0.7 }, // Si3
  ]

  notes.forEach(({ freq, delay, vol }) => {
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.frequency.value = freq
    oscillator.type = 'triangle' // Son très doux

    const startTime = ctx.currentTime + delay
    const actualVol = volume * vol

    gainNode.gain.setValueAtTime(0, startTime)
    gainNode.gain.linearRampToValueAtTime(actualVol, startTime + 0.03)
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2)

    oscillator.start(startTime)
    oscillator.stop(startTime + 1.2)

    oscillatorNodes.push(oscillator)
  })
}

/**
 * Joue l'alarme - version très douce (carillon)
 * @param {number} volume - Volume de 0 à 1
 * @param {number} repeat - Nombre de répétitions
 */
const playAlarm = (volume = 0.25, repeat = 2) => {
  if (isPlaying) return
  isPlaying = true

  const ctx = init()
  if (!ctx) {
    isPlaying = false
    return
  }

  // Un seul carillon doux, répété doucement
  for (let i = 0; i < repeat; i++) {
    timeoutIds.push(setTimeout(() => playChime(volume), i * 1800))
  }

  timeoutIds.push(setTimeout(() => {
    isPlaying = false
  }, repeat * 1800 + 1000))
}

/**
 * Joue une alarme continue douce
 */
const playAlarmContinuous = (volume = 0.25) => {
  if (isPlaying) return
  isPlaying = true

  const ctx = init()
  if (!ctx) {
    isPlaying = false
    return
  }

  const chimeLoop = () => {
    if (!isPlaying) return

    playChime(volume)
    timeoutIds.push(setTimeout(chimeLoop, 3000)) // Très espacé
  }

  chimeLoop()
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
 * Synthèse vocale - Annonces audio parlées
 * @param {string} text - Le texte à prononcer
 * @param {string} lang - La langue ('fr-FR' ou 'en-US')
 * @param {number} rate - Vitesse de parole (0.5 à 2, défaut 1)
 */
const speak = (text, lang = 'fr-FR', rate = 1.0) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported')
    return false
  }

  // Annuler toute annonce en cours
  speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate
  utterance.pitch = 1.0
  utterance.volume = 1.0

  // Sur mobile, il faut parfois un petit délai
  setTimeout(() => {
    speechSynthesis.speak(utterance)
  }, 100)

  return true
}

/**
 * Génère une annonce vocale contextuelle selon la méthode et le morceau
 * @param {Object} context - { methodId, meatId, cutName, cutName_en, lang }
 */
const getContextualAnnouncement = (type, context = {}) => {
  const { methodId, meatId, cutName, cutName_en, lang = 'fr' } = context
  const isEn = lang === 'en'
  const cut = isEn ? (cutName_en || cutName) : cutName

  // Annonces pour retournement
  if (type === 'flipFace2') {
    return isEn
      ? `Flip! Sear the second side of your ${cut || 'meat'}`
      : `Retournez ! Saisissez la deuxième face de votre ${cut || 'viande'}`
  }

  if (type === 'flipEdges') {
    // Certains morceaux ont des côtés épais (entrecôte, côte de bœuf)
    const hasThickEdges = ['entrecote', 'cote_boeuf', 'ribeye'].includes(context.cutId)
    if (hasThickEdges) {
      return isEn
        ? 'Now sear the fat cap and edges. Hold with tongs'
        : 'Maintenant saisissez le gras et les côtés. Tenez avec une pince'
    }
    return isEn
      ? 'Quick sear on the edges'
      : 'Saisie rapide des côtés'
  }

  // Annonces fin d'étape 1 (selon la méthode)
  if (type === 'endStage1') {
    if (methodId === 'sous_vide') {
      return isEn
        ? `Remove your ${cut || 'meat'} from the water bath. Pat dry before searing!`
        : `Sortez votre ${cut || 'viande'} du bain-marie. Séchez bien avant de saisir !`
    }
    if (methodId === 'reverse_sear') {
      return isEn
        ? `Remove your ${cut || 'meat'} from the oven. Time to sear in a very hot pan!`
        : `Sortez votre ${cut || 'viande'} du four. Passez à la saisie dans une poêle très chaude !`
    }
    if (methodId === 'bbq_indirect') {
      return isEn
        ? `Move your ${cut || 'meat'} to direct heat for searing`
        : `Déplacez votre ${cut || 'viande'} en chaleur directe pour la saisie`
    }
    // Par défaut
    return isEn
      ? 'Stage 1 complete. Time to sear!'
      : 'Étape 1 terminée. Passez à la saisie !'
  }

  // Annonces début de saisie (selon le type de viande)
  if (type === 'startSearing') {
    // Conseils spécifiques selon la viande
    if (meatId === 'volaille') {
      return isEn
        ? 'Sear skin-side down first for crispy skin!'
        : 'Saisissez côté peau d\'abord pour une peau croustillante !'
    }
    if (meatId === 'canard' || context.cutId?.includes('magret')) {
      return isEn
        ? 'Start with the fat side down in a cold pan'
        : 'Commencez côté gras dans une poêle froide'
    }
    if (meatId === 'porc') {
      return isEn
        ? 'Sear until golden. Don\'t move the meat!'
        : 'Saisissez jusqu\'à coloration dorée. Ne bougez pas la viande !'
    }
    // Bœuf, agneau, gibier - saisie classique
    return isEn
      ? 'Very hot pan! Sear without moving until crust forms'
      : 'Poêle très chaude ! Saisissez sans bouger jusqu\'à formation de la croûte'
  }

  // Annonces repos (selon le morceau)
  if (type === 'startResting') {
    // Gros morceaux = repos plus long
    const isBigCut = ['cote_boeuf', 'gigot', 'roti', 'poulet_entier', 'canard_entier', 'dinde'].some(
      c => context.cutId?.includes(c)
    )
    if (isBigCut) {
      return isEn
        ? `Rest your ${cut || 'meat'} for at least 10 minutes, covered loosely with foil`
        : `Laissez reposer votre ${cut || 'viande'} au moins 10 minutes, couvert de papier alu`
    }
    return isEn
      ? `Resting time. Cover your ${cut || 'meat'} and let the juices redistribute`
      : `Temps de repos. Couvrez votre ${cut || 'viande'} et laissez les jus se redistribuer`
  }

  // Annonce fin de cuisson
  if (type === 'cookingDone') {
    if (meatId === 'boeuf') {
      return isEn
        ? `Your ${cut || 'beef'} is ready! Slice against the grain. Bon appétit!`
        : `Votre ${cut || 'bœuf'} est prêt ! Tranchez contre les fibres. Bon appétit !`
    }
    if (meatId === 'volaille' || meatId === 'canard') {
      return isEn
        ? `Your ${cut || 'poultry'} is ready! Let it rest one more minute before carving`
        : `Votre ${cut || 'volaille'} est prête ! Attendez encore une minute avant de découper`
    }
    return isEn
      ? `Done! Your ${cut || 'meat'} is perfectly cooked. Enjoy!`
      : `Terminé ! Votre ${cut || 'viande'} est parfaitement cuite. Bon appétit !`
  }

  // Par défaut
  return null
}

/**
 * Annonces vocales prédéfinies pour la cuisson
 */
const speakAnnouncements = {
  // Saisie - retourner (avec contexte)
  flipFace2: (lang, context = {}) => speak(
    getContextualAnnouncement('flipFace2', { ...context, lang }) ||
    (lang === 'en' ? 'Flip! Sear face two' : 'Retournez ! Saisissez la face deux'),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),
  flipEdges: (lang, context = {}) => speak(
    getContextualAnnouncement('flipEdges', { ...context, lang }) ||
    (lang === 'en' ? 'Sear the edges now' : 'Saisissez les côtés maintenant'),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),

  // Fin d'étape 1 (contextuel selon méthode)
  endStage1: (lang, context = {}) => speak(
    getContextualAnnouncement('endStage1', { ...context, lang }),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),

  // Transitions de phases
  startSearing: (lang, context = {}) => speak(
    getContextualAnnouncement('startSearing', { ...context, lang }) ||
    (lang === 'en' ? 'Time to sear! Heat your pan' : 'Temps de saisir ! Chauffez votre poêle'),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),
  removeFromBath: (lang, context = {}) => speak(
    getContextualAnnouncement('endStage1', { ...context, methodId: 'sous_vide', lang }),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),
  removeFromOven: (lang, context = {}) => speak(
    getContextualAnnouncement('endStage1', { ...context, methodId: 'reverse_sear', lang }),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),

  // Repos (contextuel)
  startResting: (lang, context = {}) => speak(
    getContextualAnnouncement('startResting', { ...context, lang }) ||
    (lang === 'en' ? 'Resting time. Let the meat rest' : 'Temps de repos. Laissez reposer la viande'),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),

  // Fin (contextuel)
  cookingDone: (lang, context = {}) => speak(
    getContextualAnnouncement('cookingDone', { ...context, lang }) ||
    (lang === 'en' ? 'Done! Your meat is ready. Bon appétit!' : 'Terminé ! Votre viande est prête. Bon appétit !'),
    lang === 'en' ? 'en-US' : 'fr-FR'
  ),

  // Alertes de température
  checkTemperature: (temp, lang) => speak(
    lang === 'en'
      ? `Check temperature. Target: ${temp} degrees`
      : `Vérifiez la température. Cible : ${temp} degrés`,
    lang === 'en' ? 'en-US' : 'fr-FR'
  )
}

/**
 * Arrête la synthèse vocale
 */
const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel()
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
  speak,
  speakAnnouncements,
  stopSpeaking,
  get isPlaying() {
    return isPlaying
  }
}
