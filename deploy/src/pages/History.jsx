import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { storageService } from '../services/storageService'
import { settingsService } from '../services/settingsService'

function History() {
  const navigate = useNavigate()
  const [history, setHistory] = useState([])
  const [showConfirmClear, setShowConfirmClear] = useState(false)

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Charger l'historique
  useEffect(() => {
    setHistory(storageService.getHistory())
  }, [])

  // Supprimer un élément
  const handleRemove = (id) => {
    storageService.removeFromHistory(id)
    setHistory(storageService.getHistory())
  }

  // Tout effacer
  const handleClearAll = () => {
    storageService.clearHistory()
    setHistory([])
    setShowConfirmClear(false)
  }

  // Naviguer vers une recette
  const handleNavigate = (item) => {
    if (item.path) {
      navigate(item.path)
    }
  }

  // Formater la date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    // Moins d'une heure
    if (diff < 3600000) {
      const mins = Math.floor(diff / 60000)
      return lang === 'en' ? `${mins} min ago` : `Il y a ${mins} min`
    }

    // Moins d'un jour
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000)
      return lang === 'en' ? `${hours}h ago` : `Il y a ${hours}h`
    }

    // Plus d'un jour
    return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'fr-FR', {
      day: 'numeric',
      month: 'short'
    })
  }

  // Textes
  const texts = {
    title: lang === 'en' ? 'History' : 'Historique',
    back: lang === 'en' ? '← Back' : '← Retour',
    empty: lang === 'en' ? 'Your history is empty' : 'Votre historique est vide',
    emptyDesc: lang === 'en'
      ? 'Your past cookings will appear here'
      : 'Vos cuissons passées apparaîtront ici',
    clearAll: lang === 'en' ? 'Clear all' : 'Tout effacer',
    confirmClear: lang === 'en'
      ? 'Are you sure you want to clear all history?'
      : "Êtes-vous sûr de vouloir effacer tout l'historique ?",
    cancel: lang === 'en' ? 'Cancel' : 'Annuler',
    delete: lang === 'en' ? 'Delete' : 'Supprimer',
    startCooking: lang === 'en' ? 'Start cooking' : 'Commencer une cuisson'
  }

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <header className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="text-accent font-medium mb-2"
        >
          {texts.back}
        </button>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text-dark">{texts.title}</h1>
          {history.length > 0 && (
            <button
              onClick={() => setShowConfirmClear(true)}
              className="text-sm text-error font-medium"
            >
              {texts.clearAll}
            </button>
          )}
        </div>
      </header>

      {/* Confirmation de suppression */}
      {showConfirmClear && (
        <div className="card mb-4 border-2 border-error">
          <p className="text-sm text-text-dark mb-3">{texts.confirmClear}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowConfirmClear(false)}
              className="flex-1 py-2 bg-surface text-text-dark rounded-lg font-medium"
            >
              {texts.cancel}
            </button>
            <button
              onClick={handleClearAll}
              className="flex-1 py-2 bg-error text-white rounded-lg font-medium"
            >
              {texts.delete}
            </button>
          </div>
        </div>
      )}

      {/* Liste de l'historique */}
      {history.length > 0 ? (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="card flex items-center gap-3"
            >
              <button
                onClick={() => handleNavigate(item)}
                className="flex-1 flex items-center gap-3 text-left"
              >
                <span className="text-2xl">{item.icon || '🍖'}</span>
                <div className="flex-1">
                  <h3 className="font-medium text-text-dark">{lang === 'en' && item.name_en ? item.name_en : item.name}</h3>
                  <p className="text-xs text-text-light">
                    {item.details || ''} • {formatDate(item.timestamp)}
                  </p>
                </div>
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="p-2 text-text-light hover:text-error transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-lg font-semibold text-text-dark mb-2">{texts.empty}</h2>
          <p className="text-text-light text-sm mb-6">{texts.emptyDesc}</p>
          <button
            onClick={() => navigate('/calculator')}
            className="px-6 py-3 bg-accent text-white rounded-xl font-semibold"
          >
            {texts.startCooking}
          </button>
        </div>
      )}
    </div>
  )
}

export default History
