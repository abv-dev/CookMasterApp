import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'

// Lazy load des pages pour optimiser le bundle
const Home = lazy(() => import('./pages/Home'))
const Calculator = lazy(() => import('./pages/Calculator'))
const Timer = lazy(() => import('./pages/Timer'))
const Encyclopedia = lazy(() => import('./pages/Encyclopedia'))
const Settings = lazy(() => import('./pages/Settings'))
const History = lazy(() => import('./pages/History'))
const Favorites = lazy(() => import('./pages/Favorites'))

// Composant de chargement
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-coral/20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-coral border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/encyclopedia/*" element={<Encyclopedia />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/history" element={<History />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App
