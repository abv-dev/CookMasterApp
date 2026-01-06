import { useState, useEffect } from 'react'
import { settingsService } from '../services/settingsService'
import { storageService } from '../services/storageService'

// Composant Toggle
function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
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
  bleu: { fr: 'Bleu', en: 'Blue rare' },
  saignant: { fr: 'Saignant', en: 'Rare' },
  a_point: { fr: 'À point', en: 'Medium' },
  bien_cuit: { fr: 'Bien cuit', en: 'Well done' }
}

function Settings() {
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
            >
              Auto
              <span className="block text-xs opacity-70">
                {effectiveLang === 'en' ? 'Browser' : 'Navigateur'}
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
            <span className="text-text-light">Cookmaster Team</span>
          </div>
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
