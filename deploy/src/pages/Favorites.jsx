import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { storageService } from '../services/storageService'
import { settingsService } from '../services/settingsService'

function Favorites() {
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Charger les favoris
  useEffect(() => {
    setFavorites(storageService.getFavorites())
  }, [])

  // Supprimer un favori
  const handleRemove = (id) => {
    storageService.removeFromFavorites(id)
    setFavorites(storageService.getFavorites())
  }

  // Naviguer vers une recette
  const handleNavigate = (item) => {
    if (item.path) {
      navigate(item.path)
    }
  }

  // Textes
  const texts = {
    title: lang === 'en' ? 'Favorites' : 'Favoris',
    back: lang === 'en' ? '← Back' : '← Retour',
    empty: lang === 'en' ? 'No favorites yet' : 'Pas encore de favoris',
    emptyDesc: lang === 'en'
      ? 'Add cookings to your favorites to find them easily'
      : 'Ajoutez des cuissons à vos favoris pour les retrouver facilement',
    remove: lang === 'en' ? 'Remove' : 'Retirer',
    startCooking: lang === 'en' ? 'Explore encyclopedia' : "Explorer l'encyclopédie"
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
        <h1 className="text-2xl font-bold text-text-dark">{texts.title}</h1>
      </header>

      {/* Grille des favoris */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="card relative"
            >
              <button
                onClick={() => handleNavigate(item)}
                className="w-full text-left"
              >
                <div className="text-center mb-2">
                  <span className="text-4xl">{item.icon || '🍖'}</span>
                </div>
                <h3 className="font-medium text-text-dark text-sm text-center truncate">
                  {lang === 'en' && item.name_en ? item.name_en : item.name}
                </h3>
                {item.details && (
                  <p className="text-xs text-text-light text-center truncate">
                    {item.details}
                  </p>
                )}
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-error/10 text-error rounded-full text-xs flex items-center justify-center hover:bg-error/20 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">❤️</div>
          <h2 className="text-lg font-semibold text-text-dark mb-2">{texts.empty}</h2>
          <p className="text-text-light text-sm mb-6">{texts.emptyDesc}</p>
          <button
            onClick={() => navigate('/encyclopedia')}
            className="px-6 py-3 bg-accent text-white rounded-xl font-semibold"
          >
            {texts.startCooking}
          </button>
        </div>
      )}
    </div>
  )
}

export default Favorites
