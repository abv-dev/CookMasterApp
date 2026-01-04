import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Timer from './pages/Timer'
import Encyclopedia from './pages/Encyclopedia'
import Settings from './pages/Settings'
import History from './pages/History'
import Favorites from './pages/Favorites'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/encyclopedia/*" element={<Encyclopedia />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App
