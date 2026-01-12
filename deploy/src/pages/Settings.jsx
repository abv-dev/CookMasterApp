import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { settingsService } from '../services/settingsService'
import { storageService } from '../services/storageService'

// Composant Toggle
function Toggle({ value, onChange, label }) {
  return (
    <button
      onClick={() => onChange(!value)}
      role="switch"
      aria-checked={value}
      aria-label={label}
      className={`w-12 h-7 rounded-full transition-all relative ${
        value ? 'bg-green' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${
          value ? 'right-1' : 'left-1'
        }`}
      />
    </button>
  )
}

// Labels de cuisson
const donenessLabels = {
  bleu: { fr: 'Bleu', en: 'Blue' },
  saignant: { fr: 'Saignant', en: 'Rare' },
  a_point: { fr: 'À point', en: 'Medium' },
  bien_cuit: { fr: 'Bien cuit', en: 'Well done' }
}

function Settings() {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout, loading: authLoading, syncing, syncFromCloud } = useAuth()
  const [settings, setSettings] = useState(settingsService.getSettings())
  const [showConfirmClear, setShowConfirmClear] = useState(false)

  // Charger les paramètres au montage
  useEffect(() => {
    setSettings(settingsService.getSettings())
  }, [])

  // Fonction pour mettre à jour un paramètre
  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    settingsService.saveSetting(key, value)
  }

  // Effacer toutes les données
  const handleClearAllData = () => {
    storageService.clearHistory()
    // Vider les favoris
    const favorites = storageService.getFavorites()
    favorites.forEach(fav => {
      storageService.removeFromFavorites(fav.id)
    })
    settingsService.resetSettings()
    setSettings(settingsService.getSettings())
    setShowConfirmClear(false)
  }

  // Langue effective pour l'affichage
  const effectiveLang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  return (
    <div className="p-4">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark">
          {effectiveLang === 'en' ? 'Settings' : 'Paramètres'}
        </h1>
        <p className="text-text-light text-sm">
          {effectiveLang === 'en' ? 'Customize your experience' : 'Personnalisez votre expérience'}
        </p>
      </header>

      {/* Language Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'Language' : 'Langue'}
        </h2>
        <div className="card">
          <div className="flex gap-2">
            <button
              onClick={() => updateSetting('language', 'auto')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                settings.language === 'auto'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-dark border border-gray-200'
              }`}
              aria-label={effectiveLang === 'en' ? 'Auto (browser language)' : 'Auto (langue du navigateur)'}
            >
              Auto
              <span className="block text-xs opacity-70">
                {effectiveLang === 'en' ? '(Browser)' : '(Navigateur)'}
              </span>
            </button>
            <button
              onClick={() => updateSetting('language', 'fr')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                settings.language === 'fr'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-dark border border-gray-200'
              }`}
            >
              Français
            </button>
            <button
              onClick={() => updateSetting('language', 'en')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                settings.language === 'en'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-dark border border-gray-200'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'Notifications' : 'Notifications'}
        </h2>
        <div className="card space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-text-dark">
                {effectiveLang === 'en' ? 'Notifications' : 'Notifications'}
              </h3>
              <p className="text-xs text-text-light">
                {effectiveLang === 'en' ? 'End of cooking alerts' : 'Alertes de fin de cuisson'}
              </p>
            </div>
            <Toggle
              value={settings.notifications}
              onChange={(v) => updateSetting('notifications', v)}
              label={effectiveLang === 'en' ? 'Toggle notifications' : 'Activer les notifications'}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-text-dark">
                {effectiveLang === 'en' ? 'Sound' : 'Son'}
              </h3>
              <p className="text-xs text-text-light">
                {effectiveLang === 'en' ? 'Sound alarm' : 'Alarme sonore'}
              </p>
            </div>
            <Toggle
              value={settings.sound}
              onChange={(v) => updateSetting('sound', v)}
              label={effectiveLang === 'en' ? 'Toggle sound' : 'Activer le son'}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-text-dark">
                {effectiveLang === 'en' ? 'Vibration' : 'Vibration'}
              </h3>
              <p className="text-xs text-text-light">
                {effectiveLang === 'en' ? 'Phone vibration' : 'Vibration du téléphone'}
              </p>
            </div>
            <Toggle
              value={settings.vibration}
              onChange={(v) => updateSetting('vibration', v)}
              label={effectiveLang === 'en' ? 'Toggle vibration' : 'Activer la vibration'}
            />
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'Units' : 'Unités'}
        </h2>
        <div className="card">
          <h3 className="font-medium text-text-dark mb-3">
            {effectiveLang === 'en' ? 'Measurement system' : 'Système de mesure'}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => updateSetting('measurementSystem', 'metric')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                settings.measurementSystem === 'metric'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-dark border border-gray-200'
              }`}
            >
              {effectiveLang === 'en' ? 'Metric' : 'Métrique'}
              <span className="block text-xs opacity-70">kg, °C</span>
            </button>
            <button
              onClick={() => updateSetting('measurementSystem', 'imperial')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                settings.measurementSystem === 'imperial'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-dark border border-gray-200'
              }`}
            >
              {effectiveLang === 'en' ? 'Imperial' : 'Impérial'}
              <span className="block text-xs opacity-70">lb, °F</span>
            </button>
          </div>
        </div>
      </section>

      {/* Default Preferences */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'Default preferences' : 'Préférences par défaut'}
        </h2>
        <div className="card">
          <h3 className="font-medium text-text-dark mb-3">
            {effectiveLang === 'en' ? 'Preferred doneness' : 'Cuisson préférée'}
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(donenessLabels).map(([key, labels]) => (
              <button
                key={key}
                onClick={() => updateSetting('defaultDoneness', key)}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  settings.defaultDoneness === key
                    ? 'bg-accent text-white'
                    : 'bg-surface text-text-dark'
                }`}
              >
                {labels[effectiveLang]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'Account' : 'Compte'}
        </h2>
        <div className="card">
          {authLoading ? (
            <div className="py-4 text-center text-text-light">
              {effectiveLang === 'en' ? 'Loading...' : 'Chargement...'}
            </div>
          ) : isAuthenticated && user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-text-dark">{user.name || user.email}</p>
                  <p className="text-sm text-text-light">{user.email}</p>
                </div>
                <span className={`text-sm font-medium ${syncing ? 'text-accent' : 'text-green'}`}>
                  {syncing
                    ? (effectiveLang === 'en' ? '↻ Syncing...' : '↻ Sync...')
                    : (effectiveLang === 'en' ? '✓ Synced' : '✓ Synchronisé')
                  }
                </span>
              </div>
              <button
                onClick={syncFromCloud}
                disabled={syncing}
                className="w-full py-3 bg-accent text-white rounded-xl font-medium mb-2 disabled:opacity-50"
              >
                {syncing
                  ? (effectiveLang === 'en' ? 'Syncing...' : 'Synchronisation...')
                  : (effectiveLang === 'en' ? '↻ Sync now' : '↻ Synchroniser')
                }
              </button>
              <button
                onClick={logout}
                className="w-full py-3 bg-surface text-text-dark rounded-xl font-medium"
              >
                {effectiveLang === 'en' ? 'Log out' : 'Se déconnecter'}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-text-light text-sm">
                {effectiveLang === 'en'
                  ? 'Sign in to sync your data across devices'
                  : 'Connectez-vous pour synchroniser vos données sur tous vos appareils'}
              </p>
              <button
                onClick={() => navigate('/auth')}
                className="w-full py-3 bg-accent text-white rounded-xl font-semibold"
              >
                {effectiveLang === 'en' ? 'Sign in / Sign up' : 'Se connecter / S\'inscrire'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-text-light uppercase mb-3">
          {effectiveLang === 'en' ? 'About' : 'À propos'}
        </h2>
        <div className="card space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-text-dark">Version</span>
            <span className="text-text-light">1.0.0</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-text-dark">
              {effectiveLang === 'en' ? 'Developer' : 'Développeur'}
            </span>
            <span className="text-text-light">CookMaster Team</span>
          </div>
          <a
            href="mailto:contact@cook-master.app"
            className="block w-full text-left py-2 text-accent font-medium"
          >
            📧 contact@cook-master.app
          </a>
          <button className="w-full text-left py-2 text-accent font-medium">
            {effectiveLang === 'en' ? 'Privacy policy' : 'Politique de confidentialité'} →
          </button>
          <button className="w-full text-left py-2 text-accent font-medium">
            {effectiveLang === 'en' ? 'Terms of use' : "Conditions d'utilisation"} →
          </button>
        </div>
      </section>

      {/* Danger Zone */}
      <section>
        <h2 className="text-sm font-semibold text-error uppercase mb-3">
          {effectiveLang === 'en' ? 'Danger zone' : 'Zone de danger'}
        </h2>
        <div className="card" style={{ border: '1px solid #F4433650' }}>
          {!showConfirmClear ? (
            <button
              onClick={() => setShowConfirmClear(true)}
              className="w-full text-left py-2 text-error font-medium"
            >
              {effectiveLang === 'en' ? '🗑️ Clear all data' : '🗑️ Effacer toutes les données'}
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-text-dark">
                {effectiveLang === 'en'
                  ? 'Are you sure? This will delete all your history, favorites and settings.'
                  : 'Êtes-vous sûr ? Cela supprimera tout votre historique, vos favoris et vos paramètres.'}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="flex-1 py-2 bg-surface text-text-dark rounded-lg font-medium"
                >
                  {effectiveLang === 'en' ? 'Cancel' : 'Annuler'}
                </button>
                <button
                  onClick={handleClearAllData}
                  className="flex-1 py-2 bg-error text-white rounded-lg font-medium"
                >
                  {effectiveLang === 'en' ? 'Delete' : 'Supprimer'}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Settings
