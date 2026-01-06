import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'

function Layout({ children }) {
  const location = useLocation()

  // Pages without navbar (e.g., timer active)
  const hideNavbar = location.pathname.includes('/timer/active')

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
