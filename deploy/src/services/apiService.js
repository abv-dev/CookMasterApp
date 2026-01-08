// Service API pour communiquer avec le backend MongoDB
const API_BASE = '/api'

// Token d'authentification
let authToken = localStorage.getItem('cookmaster_token')

export const apiService = {
  // Définir le token
  setToken(token) {
    authToken = token
    if (token) {
      localStorage.setItem('cookmaster_token', token)
    } else {
      localStorage.removeItem('cookmaster_token')
    }
  },

  // Obtenir le token
  getToken() {
    return authToken
  },

  // Vérifier si connecté
  isAuthenticated() {
    return !!authToken
  },

  // Headers par défaut
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    }
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`
    }
    return headers
  },

  // === AUTHENTIFICATION ===

  async sendVerificationCode(email) {
    const res = await fetch(`${API_BASE}/auth/send-code`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, type: 'register' })
    })
    return res.json()
  },

  async verifyCode(email, code) {
    const res = await fetch(`${API_BASE}/auth/verify-code`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, code })
    })
    return res.json()
  },

  async register(email, password, name = '', code) {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, password, name, code })
    })
    const data = await res.json()
    if (data.success && data.token) {
      this.setToken(data.token)
    }
    return data
  },

  async login(email, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (data.success && data.token) {
      this.setToken(data.token)
    }
    return data
  },

  async logout() {
    this.setToken(null)
    return { success: true }
  },

  async getCurrentUser() {
    if (!authToken) return { success: false, error: 'Non connecté' }

    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: this.getHeaders()
    })
    return res.json()
  },

  // === HISTORIQUE ===

  async getHistory(limit = 50) {
    if (!authToken) return { success: false, history: [] }

    const res = await fetch(`${API_BASE}/history?limit=${limit}`, {
      headers: this.getHeaders()
    })
    return res.json()
  },

  async addToHistory(entry) {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/history`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(entry)
    })
    return res.json()
  },

  async deleteHistoryEntry(id) {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/history?id=${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    })
    return res.json()
  },

  async clearHistory() {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/history`, {
      method: 'DELETE',
      headers: this.getHeaders()
    })
    return res.json()
  },

  // === FAVORIS ===

  async getFavorites(type = null) {
    if (!authToken) return { success: false, favorites: [] }

    const url = type ? `${API_BASE}/favorites?type=${type}` : `${API_BASE}/favorites`
    const res = await fetch(url, {
      headers: this.getHeaders()
    })
    return res.json()
  },

  async addFavorite(data) {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/favorites`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    })
    return res.json()
  },

  async removeFavorite(type, id) {
    if (!authToken) return { success: false }

    const param = type === 'cut' ? `cutId=${id}` : `recipeId=${id}`
    const res = await fetch(`${API_BASE}/favorites?type=${type}&${param}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    })
    return res.json()
  },

  // === PARAMÈTRES ===

  async getSettings() {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/settings`, {
      headers: this.getHeaders()
    })
    return res.json()
  },

  async updateSettings(settings) {
    if (!authToken) return { success: false }

    const res = await fetch(`${API_BASE}/settings`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(settings)
    })
    return res.json()
  }
}

export default apiService
