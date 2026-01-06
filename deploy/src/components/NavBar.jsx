import { NavLink } from 'react-router-dom'
import { settingsService } from '../services/settingsService'

function NavBar() {
  // Langue
  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  const navItems = [
    { path: '/', icon: '🏠', label: lang === 'en' ? 'Home' : 'Accueil' },
    { path: '/calculator', icon: '🧮', label: lang === 'en' ? 'Calculator' : 'Calculateur' },
    { path: '/timer', icon: '⏱️', label: lang === 'en' ? 'Timer' : 'Minuteur' },
    { path: '/encyclopedia', icon: '📚', label: lang === 'en' ? 'Encyclopedia' : 'Encyclopédie' },
    { path: '/settings', icon: '⚙️', label: lang === 'en' ? 'Settings' : 'Paramètres' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-accent-light shadow-lg z-50 pb-safe">
      <div className="max-w-[430px] mx-auto flex justify-around items-center py-2 pb-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-accent bg-accent-light'
                  : 'text-text-light hover:text-accent'
              }`
            }
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
