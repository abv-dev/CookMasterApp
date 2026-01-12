import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './NavBar'
import { settingsService } from '../services/settingsService'

// Dynamic page titles
const pageTitles = {
  '/': { fr: 'CookMaster - Maîtrisez la Cuisson', en: 'CookMaster - Master Meat Cooking' },
  '/calculator': { fr: 'Calculateur - CookMaster', en: 'Calculator - CookMaster' },
  '/timer': { fr: 'Minuteur - CookMaster', en: 'Timer - CookMaster' },
  '/encyclopedia': { fr: 'Encyclopédie - CookMaster', en: 'Encyclopedia - CookMaster' },
  '/settings': { fr: 'Paramètres - CookMaster', en: 'Settings - CookMaster' },
  '/history': { fr: 'Historique - CookMaster', en: 'History - CookMaster' },
  '/favorites': { fr: 'Favoris - CookMaster', en: 'Favorites - CookMaster' }
}

function Layout({ children }) {
  const location = useLocation()

  // Pages without navbar (e.g., timer active)
  const hideNavbar = location.pathname.includes('/timer/active')

  // Dynamic document title based on route and language
  useEffect(() => {
    const settings = settingsService.getSettings()
    const lang = settings.language === 'auto'
      ? settingsService.detectBrowserLanguage()
      : settings.language

    // Find matching title (exact or starts with for nested routes)
    const basePath = '/' + location.pathname.split('/')[1]
    const titleConfig = pageTitles[basePath] || pageTitles['/']
    document.title = titleConfig[lang] || titleConfig.fr
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      {!hideNavbar && <NavBar />}
    </div>
  )
}

export default Layout
