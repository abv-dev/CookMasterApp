import { createContext, useContext, useState, useEffect } from 'react'
import { apiService } from '../services/apiService'
import { storageService } from '../services/storageService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [syncing, setSyncing] = useState(false)

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    if (apiService.isAuthenticated()) {
      try {
        const data = await apiService.getCurrentUser()
        if (data.success) {
          setUser(data.user)
          setIsAuthenticated(true)
          // Synchroniser les données depuis le cloud
          await syncFromCloud()
        } else {
          // Token invalide
          apiService.setToken(null)
          setUser(null)
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error('Auth check error:', error)
        apiService.setToken(null)
        setUser(null)
        setIsAuthenticated(false)
      }
    }
    setLoading(false)
  }

  // Synchroniser depuis le cloud
  const syncFromCloud = async () => {
    if (!apiService.isAuthenticated()) return

    setSyncing(true)
    try {
      await storageService.syncAllFromCloud()
      console.log('Data synced from cloud')
    } catch (error) {
      console.error('Sync from cloud error:', error)
    }
    setSyncing(false)
  }

  // Envoyer les données locales vers le cloud
  const pushToCloud = async () => {
    if (!apiService.isAuthenticated()) return

    setSyncing(true)
    try {
      await storageService.pushAllToCloud()
      console.log('Data pushed to cloud')
    } catch (error) {
      console.error('Push to cloud error:', error)
    }
    setSyncing(false)
  }

  const login = async (email, password) => {
    const data = await apiService.login(email, password)
    if (data.success) {
      setUser(data.user)
      setIsAuthenticated(true)
      // D'abord envoyer les données locales vers le cloud (pour ne pas les perdre)
      await pushToCloud()
      // Puis synchroniser depuis le cloud (pour récupérer les données existantes)
      await syncFromCloud()
    }
    return data
  }

  const register = async (email, password, name, code) => {
    const data = await apiService.register(email, password, name, code)
    if (data.success) {
      setUser(data.user)
      setIsAuthenticated(true)
      // Envoyer les données locales vers le cloud pour le nouvel utilisateur
      await pushToCloud()
    }
    return data
  }

  const sendVerificationCode = async (email) => {
    return await apiService.sendVerificationCode(email)
  }

  const verifyCode = async (email, code) => {
    return await apiService.verifyCode(email, code)
  }

  const logout = async () => {
    await apiService.logout()
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    syncing,
    login,
    register,
    logout,
    checkAuth,
    syncFromCloud,
    pushToCloud,
    sendVerificationCode,
    verifyCode
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
