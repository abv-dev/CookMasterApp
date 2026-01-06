import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { meatCategories, donenessLevels } from '../data/meatData'
import { cutsData } from '../data/cutsData'
import { storageService } from '../services/storageService'
import { settingsService } from '../services/settingsService'

function Home() {
  const navigate = useNavigate()
  // Initialisation lazy - chargement uniquement au premier rendu
  const [history, setHistory] = useState(() => storageService.getHistory())
  const [favorites, setFavorites] = useState(() => storageService.getFavorites())

  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  // Textes selon la langue
  const texts = {
    title: 'Cookmaster',
    subtitle: lang === 'en' ? 'Master the cooking of your meats' : 'Maîtrisez la cuisson de vos viandes',
    meats: lang === 'en' ? 'meats' : 'viandes',
    cuts: lang === 'en' ? 'cuts' : 'morceaux',
    calculator: lang === 'en' ? 'Calculator' : 'Calculateur',
    calculatorDesc: lang === 'en' ? 'Perfect cooking time' : 'Temps de cuisson parfait',
    encyclopedia: lang === 'en' ? 'Encyclopedia' : 'Encyclopédie',
    encyclopediaDesc: lang === 'en' ? 'All about meats' : 'Tout sur les viandes',
    recentHistory: lang === 'en' ? 'Recent history' : 'Historique récent',
    clear: lang === 'en' ? 'Clear' : 'Effacer',
    seeAll: lang === 'en' ? 'See all' : 'Voir tout',
    myFavorites: lang === 'en' ? '❤️ My favorites' : '❤️ Mes favoris',
    popularCuts: lang === 'en' ? 'Popular cuts' : 'Morceaux populaires',
    meatTypes: lang === 'en' ? 'Meat types' : 'Types de viandes',
    chefTips: lang === 'en' ? "Chef's tips" : 'Conseils du chef',
    coreTemps: lang === 'en' ? 'Core temperatures by meat' : 'Températures à cœur par viande',
    startCooking: lang === 'en' ? 'Start cooking' : 'Commencer une cuisson',
    otherCookings: lang === 'en' ? 'other cookings' : 'autres cuissons',
    safety: lang === 'en' ? 'Safety' : 'Sécurité',
    alwaysWellDone: lang === 'en' ? 'Always well done' : 'Toujours bien cuit',
    minimum: lang === 'en' ? 'minimum' : 'minimum',
    clearJuice: lang === 'en' ? 'Clear juice, never pink' : 'Jus clair, jamais rosé'
  }

  // Formater la date relative
  const formatRelativeDate = (isoString) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (lang === 'en') {
      if (diffMins < 1) return 'Just now'
      if (diffMins < 60) return `${diffMins} min ago`
      if (diffHours < 24) return `${diffHours}h ago`
      if (diffDays < 7) return `${diffDays}d ago`
      return date.toLocaleDateString('en-US')
    }

    if (diffMins < 1) return 'À l\'instant'
    if (diffMins < 60) return `Il y a ${diffMins} min`
    if (diffHours < 24) return `Il y a ${diffHours}h`
    if (diffDays < 7) return `Il y a ${diffDays}j`
    return date.toLocaleDateString('fr-FR')
  }

  // Formater le temps de cuisson
  const formatCookingTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    if (mins >= 60) {
      const hours = Math.floor(mins / 60)
      const remainMins = mins % 60
      return remainMins > 0 ? `${hours}h${remainMins}` : `${hours}h`
    }
    return `${mins} min`
  }

  // Supprimer un élément de l'historique
  const handleRemoveHistory = (id, e) => {
    e.stopPropagation()
    storageService.removeFromHistory(id)
    setHistory(storageService.getHistory())
  }

  // Relancer une cuisson depuis l'historique
  const handleRelaunchCooking = (item) => {
    navigate('/timer', {
      state: {
        totalSeconds: item.totalSeconds,
        restSeconds: item.restSeconds,
        meatName: item.meatName,
        cutName: item.cutName,
        doneness: item.donenessName,
        targetTemp: item.targetTemp
      }
    })
  }

  // Effacer tout l'historique
  const handleClearHistory = () => {
    const msg = lang === 'en' ? 'Clear all history?' : 'Effacer tout l\'historique ?'
    if (window.confirm(msg)) {
      storageService.clearHistory()
      setHistory([])
    }
  }

  // Supprimer un favori
  const handleRemoveFavorite = (item, e) => {
    e.preventDefault()
    e.stopPropagation()
    storageService.removeFromFavorites(item.category, item.subcategory, item.cutId)
    setFavorites(storageService.getFavorites())
  }

  // Compter le total des morceaux
  const totalCuts = Object.values(cutsData).reduce((acc, category) => {
    return acc + Object.values(category).reduce((subAcc, subcat) => {
      return subAcc + (subcat.cuts ? Object.keys(subcat.cuts).length : 0)
    }, 0)
  }, 0)

  const features = [
    {
      icon: '🧮',
      title: texts.calculator,
      description: texts.calculatorDesc,
      path: '/calculator',
      color: '#F97066',
      gradient: 'linear-gradient(135deg, #F97066, #FF8A80)',
    },
    {
      icon: '📚',
      title: texts.encyclopedia,
      description: texts.encyclopediaDesc,
      path: '/encyclopedia',
      color: '#8BC34A',
      gradient: 'linear-gradient(135deg, #8BC34A, #AED581)',
    },
  ]

  // Morceaux populaires
  const popularCuts = [
    { id: 'entrecote', name: lang === 'en' ? 'Ribeye' : 'Entrecôte', icon: '🥩', category: 'boeuf', subcat: 'nobles', color: '#C62828' },
    { id: 'filet_mignon', name: lang === 'en' ? 'Pork tenderloin' : 'Filet mignon', icon: '🐷', category: 'porc', subcat: 'rotir', color: '#F48FB1' },
    { id: 'magret', name: lang === 'en' ? 'Duck breast' : 'Magret', icon: '🦆', category: 'volaille', subcat: 'canard', color: '#FFB300' },
    { id: 'gigot', name: lang === 'en' ? 'Leg of lamb' : 'Gigot', icon: '🐑', category: 'agneau', subcat: 'rotir', color: '#8D6E63' },
    { id: 'cote_de_boeuf', name: lang === 'en' ? 'Beef rib' : 'Côte de boeuf', icon: '🥩', category: 'boeuf', subcat: 'nobles', color: '#C62828' },
    { id: 'filet_cerf', name: lang === 'en' ? 'Venison fillet' : 'Filet de cerf', icon: '🦌', category: 'gibier', subcat: 'grand_gibier', color: '#5D4037' },
  ]

  const tips = lang === 'en' ? [
    {
      icon: '🌡️',
      title: 'Temper the meat',
      description: 'Take out 30-60 min before cooking for even temperature',
    },
    {
      icon: '🧂',
      title: 'Salt at the right time',
      description: 'Just before or after cooking, never during',
    },
    {
      icon: '⏸️',
      title: 'Resting time',
      description: 'Essential: the meat relaxes and juices redistribute',
    },
    {
      icon: '🌡️',
      title: 'Meat thermometer',
      description: 'The essential tool for perfect cooking',
    },
  ] : [
    {
      icon: '🌡️',
      title: 'Tempérer la viande',
      description: 'Sortir 30-60 min avant cuisson pour une température homogène',
    },
    {
      icon: '🧂',
      title: 'Saler au bon moment',
      description: 'Juste avant ou après cuisson, jamais pendant',
    },
    {
      icon: '⏸️',
      title: 'Temps de repos',
      description: 'Essentiel : la viande se détend et les jus se répartissent',
    },
    {
      icon: '🌡️',
      title: 'Thermomètre de cuisson',
      description: 'L\'outil indispensable pour une cuisson parfaite',
    },
  ]

  // Convertir les catégories en tableau
  const categoriesArray = Object.entries(meatCategories).map(([id, data]) => ({
    id,
    ...data
  }))

  return (
    <div className="p-4 pb-24">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-gradient font-display italic">
          {texts.title}
        </h1>
        <p className="text-text-light text-sm mt-2">
          {texts.subtitle}
        </p>
        <div className="flex justify-center gap-4 mt-3 text-xs text-text-light">
          <span>🥩 {Object.keys(meatCategories).length} {texts.meats}</span>
          <span>•</span>
          <span>📋 {totalCuts}+ {texts.cuts}</span>
        </div>
      </header>

      {/* Main Features - Calculator & Encyclopedia */}
      <section className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="relative overflow-hidden rounded-2xl p-5 hover:shadow-lg transition-all active:scale-98"
              style={{ background: feature.gradient }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-white/80">
                {feature.description}
              </p>
              <div className="absolute -bottom-4 -right-4 text-7xl opacity-20">
                {feature.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cooking History */}
      {history.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-text-dark">{texts.recentHistory}</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleClearHistory}
                className="text-text-light text-xs hover:text-accent"
              >
                {texts.clear}
              </button>
              <Link to="/history" className="text-accent text-sm font-medium">
                {texts.seeAll} →
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            {history.slice(0, 5).map((item) => (
              <div
                key={item.id}
                onClick={() => handleRelaunchCooking(item)}
                className="card flex items-center gap-3 py-3 cursor-pointer hover:shadow-md transition-shadow active:scale-98"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: (item.meatColor || '#F97066') + '20' }}
                >
                  {item.meatIcon || '🥩'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-text-dark text-sm truncate">
                      {item.cutName}
                    </span>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-text-light">
                      {item.donenessName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-light">
                    <span>{item.weight}g</span>
                    <span>•</span>
                    <span>{formatCookingTime(item.totalSeconds)}</span>
                    <span>•</span>
                    <span>{formatRelativeDate(item.timestamp)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleRemoveHistory(item.id, e)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-text-light hover:bg-gray-100"
                  >
                    ✕
                  </button>
                  <span className="text-accent text-lg">▶</span>
                </div>
              </div>
            ))}
          </div>
          {history.length > 5 && (
            <Link to="/history" className="block text-xs text-accent text-center mt-2">
              +{history.length - 5} {texts.otherCookings}
            </Link>
          )}
        </section>
      )}

      {/* Favorites */}
      {favorites.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-text-dark">
              {texts.myFavorites}
            </h2>
            <Link to="/favorites" className="text-accent text-sm font-medium">
              {texts.seeAll} →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {favorites.map((fav) => (
              <Link
                key={fav.id}
                to={`/encyclopedia/${fav.category}/${fav.subcategory}/${fav.cutId}`}
                className="flex-shrink-0 w-28 card flex flex-col items-center py-3 hover:shadow-md transition-shadow relative"
              >
                <button
                  onClick={(e) => handleRemoveFavorite(fav, e)}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-text-light hover:bg-gray-200"
                >
                  ✕
                </button>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-1"
                  style={{ backgroundColor: (fav.meatColor || '#F97066') + '20' }}
                >
                  {fav.cutIcon || fav.meatIcon || '🥩'}
                </div>
                <span className="text-xs font-medium text-text-dark text-center leading-tight">
                  {fav.cutName}
                </span>
                <span className="text-xs text-text-light">
                  {fav.meatName}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Popular Cuts - Quick Access */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-text-dark">{texts.popularCuts}</h2>
          <Link to="/encyclopedia" className="text-accent text-sm font-medium">
            {texts.seeAll} →
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {popularCuts.map((cut) => (
            <Link
              key={cut.id}
              to={`/encyclopedia/${cut.category}/${cut.subcat}/${cut.id}`}
              className="flex-shrink-0 w-24 card flex flex-col items-center py-3 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-1">{cut.icon}</span>
              <span className="text-xs font-medium text-text-dark text-center leading-tight">
                {cut.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Meat Categories */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-text-dark mb-3">{texts.meatTypes}</h2>
        <div className="grid grid-cols-3 gap-2">
          {categoriesArray.map((cat) => (
            <Link
              key={cat.id}
              to={`/encyclopedia/${cat.id}`}
              className="card flex flex-col items-center py-3 hover:shadow-md transition-shadow"
              style={{ borderLeft: `3px solid ${cat.color}` }}
            >
              <span className="text-2xl mb-1">{cat.icon}</span>
              <span className="text-xs font-medium text-text-dark">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-text-dark mb-3">
          {texts.chefTips}
        </h2>
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="card flex items-start gap-3"
            >
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <h3 className="font-semibold text-text-dark text-sm">{tip.title}</h3>
                <p className="text-xs text-text-light">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Temperature Guide Per Meat Type */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-text-dark mb-3">
          {texts.coreTemps}
        </h2>
        <div className="space-y-2">
          {/* Boeuf / Viande rouge */}
          <div className="card py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🥩</span>
              <span className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Beef' : 'Bœuf'}</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center">
              {donenessLevels.viande_rouge.map((level) => (
                <div key={level.id} className="p-1 rounded" style={{ backgroundColor: level.color + '20' }}>
                  <div className="text-xs text-text-light">{level.name}</div>
                  <div className="font-bold text-xs" style={{ color: level.color }}>{level.temp}°C</div>
                </div>
              ))}
            </div>
          </div>

          {/* Agneau */}
          <div className="card py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🐑</span>
              <span className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Lamb' : 'Agneau'}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              {donenessLevels.agneau.map((level) => (
                <div key={level.id} className="p-1 rounded" style={{ backgroundColor: level.color + '20' }}>
                  <div className="text-xs text-text-light">{level.name}</div>
                  <div className="font-bold text-xs" style={{ color: level.color }}>{level.temp}°C</div>
                </div>
              ))}
            </div>
          </div>

          {/* Porc */}
          <div className="card py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🐷</span>
              <span className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Pork' : 'Porc'}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              {donenessLevels.porc.map((level) => (
                <div key={level.id} className="p-1 rounded" style={{ backgroundColor: level.color + '20' }}>
                  <div className="text-xs text-text-light">{level.name}</div>
                  <div className="font-bold text-xs" style={{ color: level.color }}>{level.temp}°C</div>
                </div>
              ))}
            </div>
          </div>

          {/* Volaille */}
          <div className="card py-3 border-2" style={{ borderColor: '#FFB300' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🍗</span>
              <span className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Poultry' : 'Volaille'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">⚠️ {texts.safety}</span>
            </div>
            <div className="text-center p-2 rounded" style={{ backgroundColor: '#FFB30020' }}>
              <div className="text-xs text-text-light">{texts.alwaysWellDone}</div>
              <div className="font-bold text-sm" style={{ color: '#FFB300' }}>74°C {texts.minimum}</div>
              <div className="text-xs text-text-light mt-1">{texts.clearJuice}</div>
            </div>
          </div>

          {/* Gibier */}
          <div className="card py-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🦌</span>
              <span className="font-semibold text-text-dark text-sm">{lang === 'en' ? 'Game' : 'Gibier'}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              {donenessLevels.gibier.map((level) => (
                <div key={level.id} className="p-1 rounded" style={{ backgroundColor: level.color + '20' }}>
                  <div className="text-xs text-text-light">{level.name}</div>
                  <div className="font-bold text-xs" style={{ color: level.color }}>{level.temp}°C</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <Link to="/calculator">
        <button className="btn-primary flex items-center justify-center gap-2">
          <span>🔥</span>
          <span>{texts.startCooking}</span>
        </button>
      </Link>
    </div>
  )
}

export default Home
