/**
 * Service de stockage pour l'historique et les favoris
 * Utilise localStorage pour persister les données
 */

const HISTORY_KEY = 'cookmaster_history'
const FAVORITES_KEY = 'cookmaster_favorites'
const MAX_HISTORY_ITEMS = 50

// ============ HISTORIQUE ============

/**
 * Sauvegarder une session de cuisson dans l'historique
 */
export function saveToHistory(cookingSession) {
  try {
    const history = getHistory()

    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...cookingSession
    }

    // Ajouter en début de liste (plus récent en premier)
    history.unshift(newEntry)

    // Limiter la taille de l'historique
    if (history.length > MAX_HISTORY_ITEMS) {
      history.pop()
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    return newEntry
  } catch (error) {
    console.error('Erreur lors de la sauvegarde dans l\'historique:', error)
    return null
  }
}

/**
 * Récupérer tout l'historique
 */
export function getHistory() {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la lecture de l\'historique:', error)
    return []
  }
}

/**
 * Supprimer un élément de l'historique
 */
export function removeFromHistory(id) {
  try {
    const history = getHistory()
    const filtered = history.filter(item => item.id !== id)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered))
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return false
  }
}

/**
 * Effacer tout l'historique
 */
export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)
    return true
  } catch (error) {
    console.error('Erreur lors de l\'effacement de l\'historique:', error)
    return false
  }
}

// ============ FAVORIS ============

/**
 * Ajouter un morceau aux favoris
 */
export function addToFavorites(item) {
  try {
    const favorites = getFavorites()

    // Vérifier si déjà dans les favoris
    const exists = favorites.some(
      fav => fav.category === item.category &&
             fav.subcategory === item.subcategory &&
             fav.cutId === item.cutId
    )

    if (exists) {
      return false // Déjà dans les favoris
    }

    const newFavorite = {
      id: Date.now(),
      addedAt: new Date().toISOString(),
      ...item
    }

    favorites.push(newFavorite)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    return newFavorite
  } catch (error) {
    console.error('Erreur lors de l\'ajout aux favoris:', error)
    return null
  }
}

/**
 * Retirer un morceau des favoris
 */
export function removeFromFavorites(category, subcategory, cutId) {
  try {
    const favorites = getFavorites()
    const filtered = favorites.filter(
      fav => !(fav.category === category &&
               fav.subcategory === subcategory &&
               fav.cutId === cutId)
    )
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression des favoris:', error)
    return false
  }
}

/**
 * Vérifier si un morceau est dans les favoris
 */
export function isFavorite(category, subcategory, cutId) {
  try {
    const favorites = getFavorites()
    return favorites.some(
      fav => fav.category === category &&
             fav.subcategory === subcategory &&
             fav.cutId === cutId
    )
  } catch {
    return false
  }
}

/**
 * Récupérer tous les favoris
 */
export function getFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la lecture des favoris:', error)
    return []
  }
}

/**
 * Effacer tous les favoris
 */
export function clearFavorites() {
  try {
    localStorage.removeItem(FAVORITES_KEY)
    return true
  } catch (error) {
    console.error('Erreur lors de l\'effacement des favoris:', error)
    return false
  }
}

/**
 * Basculer le statut favori d'un morceau
 */
export function toggleFavorite(item) {
  const { category, subcategory, cutId } = item

  if (isFavorite(category, subcategory, cutId)) {
    removeFromFavorites(category, subcategory, cutId)
    return false // N'est plus favori
  } else {
    addToFavorites(item)
    return true // Est maintenant favori
  }
}

// Export object for convenient import
export const storageService = {
  saveToHistory,
  getHistory,
  removeFromHistory,
  clearHistory,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  getFavorites,
  clearFavorites,
  toggleFavorite
}
