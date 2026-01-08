/**
 * Service de stockage pour l'historique et les favoris
 * Utilise localStorage + synchronisation cloud si connecté
 */

import { apiService } from './apiService'

const HISTORY_KEY = 'cookmaster_history'
const FAVORITES_KEY = 'cookmaster_favorites'
const MAX_HISTORY_ITEMS = 50

// ============ HISTORIQUE ============

/**
 * Sauvegarder une session de cuisson dans l'historique
 */
export async function saveToHistory(cookingSession) {
  try {
    const history = getHistoryLocal()

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

    // Sauvegarder localement
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))

    // Sync avec le cloud si connecté
    if (apiService.isAuthenticated()) {
      try {
        await apiService.addToHistory(newEntry)
      } catch (e) {
        console.warn('Cloud sync failed for history:', e)
      }
    }

    return newEntry
  } catch (error) {
    console.error('Erreur lors de la sauvegarde dans l\'historique:', error)
    return null
  }
}

/**
 * Récupérer l'historique local uniquement
 */
function getHistoryLocal() {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la lecture de l\'historique local:', error)
    return []
  }
}

/**
 * Récupérer tout l'historique (local ou cloud selon connexion)
 */
export function getHistory() {
  return getHistoryLocal()
}

/**
 * Récupérer l'historique depuis le cloud et fusionner
 */
export async function syncHistoryFromCloud() {
  if (!apiService.isAuthenticated()) return getHistoryLocal()

  try {
    const cloudData = await apiService.getHistory(MAX_HISTORY_ITEMS)
    if (cloudData.success && cloudData.history) {
      const localHistory = getHistoryLocal()
      const merged = mergeHistory(localHistory, cloudData.history)
      localStorage.setItem(HISTORY_KEY, JSON.stringify(merged))
      return merged
    }
  } catch (e) {
    console.warn('Failed to sync history from cloud:', e)
  }

  return getHistoryLocal()
}

/**
 * Fusionner historique local et cloud (dédupliquer par timestamp)
 */
function mergeHistory(local, cloud) {
  const combined = [...local]
  const localTimestamps = new Set(local.map(h => h.timestamp))

  for (const item of cloud) {
    if (!localTimestamps.has(item.timestamp)) {
      combined.push({
        ...item,
        id: item._id || item.id || Date.now()
      })
    }
  }

  // Trier par date décroissante
  combined.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  // Limiter
  return combined.slice(0, MAX_HISTORY_ITEMS)
}

/**
 * Supprimer un élément de l'historique
 */
export async function removeFromHistory(id) {
  try {
    const history = getHistoryLocal()
    const filtered = history.filter(item => item.id !== id && item._id !== id)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered))

    // Sync avec le cloud si connecté
    if (apiService.isAuthenticated()) {
      try {
        await apiService.deleteHistoryEntry(id)
      } catch (e) {
        console.warn('Cloud sync failed for history delete:', e)
      }
    }

    return true
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return false
  }
}

/**
 * Effacer tout l'historique
 */
export async function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)

    // Sync avec le cloud si connecté
    if (apiService.isAuthenticated()) {
      try {
        await apiService.clearHistory()
      } catch (e) {
        console.warn('Cloud sync failed for history clear:', e)
      }
    }

    return true
  } catch (error) {
    console.error('Erreur lors de l\'effacement de l\'historique:', error)
    return false
  }
}

/**
 * Envoyer tout l'historique local vers le cloud
 */
export async function pushHistoryToCloud() {
  if (!apiService.isAuthenticated()) return false

  const localHistory = getHistoryLocal()
  for (const entry of localHistory) {
    try {
      await apiService.addToHistory(entry)
    } catch (e) {
      console.warn('Failed to push history entry:', e)
    }
  }
  return true
}

// ============ FAVORIS ============

/**
 * Récupérer les favoris locaux uniquement
 */
function getFavoritesLocal() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la lecture des favoris:', error)
    return []
  }
}

/**
 * Ajouter un morceau aux favoris
 */
export async function addToFavorites(item) {
  try {
    const favorites = getFavoritesLocal()

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
      type: 'cut',
      ...item
    }

    favorites.push(newFavorite)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))

    // Sync avec le cloud si connecté
    if (apiService.isAuthenticated()) {
      try {
        await apiService.addFavorite({
          type: 'cut',
          cutId: item.cutId,
          category: item.category,
          subcategory: item.subcategory,
          name: item.name
        })
      } catch (e) {
        console.warn('Cloud sync failed for favorite add:', e)
      }
    }

    return newFavorite
  } catch (error) {
    console.error('Erreur lors de l\'ajout aux favoris:', error)
    return null
  }
}

/**
 * Retirer un morceau des favoris
 */
export async function removeFromFavorites(category, subcategory, cutId) {
  try {
    const favorites = getFavoritesLocal()
    const filtered = favorites.filter(
      fav => !(fav.category === category &&
               fav.subcategory === subcategory &&
               fav.cutId === cutId)
    )
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))

    // Sync avec le cloud si connecté
    if (apiService.isAuthenticated()) {
      try {
        await apiService.removeFavorite('cut', cutId)
      } catch (e) {
        console.warn('Cloud sync failed for favorite remove:', e)
      }
    }

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
    const favorites = getFavoritesLocal()
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
  return getFavoritesLocal()
}

/**
 * Récupérer les favoris depuis le cloud et fusionner
 */
export async function syncFavoritesFromCloud() {
  if (!apiService.isAuthenticated()) return getFavoritesLocal()

  try {
    const cloudData = await apiService.getFavorites()
    if (cloudData.success && cloudData.favorites) {
      const localFavorites = getFavoritesLocal()
      const merged = mergeFavorites(localFavorites, cloudData.favorites)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(merged))
      return merged
    }
  } catch (e) {
    console.warn('Failed to sync favorites from cloud:', e)
  }

  return getFavoritesLocal()
}

/**
 * Fusionner favoris locaux et cloud
 */
function mergeFavorites(local, cloud) {
  const combined = [...local]
  const localKeys = new Set(local.map(f => `${f.category}-${f.subcategory}-${f.cutId}`))

  for (const item of cloud) {
    const key = `${item.category}-${item.subcategory}-${item.cutId}`
    if (!localKeys.has(key)) {
      combined.push({
        ...item,
        id: item._id || item.id || Date.now()
      })
    }
  }

  return combined
}

/**
 * Effacer tous les favoris
 */
export async function clearFavorites() {
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
export async function toggleFavorite(item) {
  const { category, subcategory, cutId } = item

  if (isFavorite(category, subcategory, cutId)) {
    await removeFromFavorites(category, subcategory, cutId)
    return false // N'est plus favori
  } else {
    await addToFavorites(item)
    return true // Est maintenant favori
  }
}

/**
 * Envoyer tous les favoris locaux vers le cloud
 */
export async function pushFavoritesToCloud() {
  if (!apiService.isAuthenticated()) return false

  const localFavorites = getFavoritesLocal()
  for (const fav of localFavorites) {
    try {
      await apiService.addFavorite({
        type: 'cut',
        cutId: fav.cutId,
        category: fav.category,
        subcategory: fav.subcategory,
        name: fav.name
      })
    } catch (e) {
      console.warn('Failed to push favorite:', e)
    }
  }
  return true
}

/**
 * Synchroniser toutes les données avec le cloud
 */
export async function syncAllFromCloud() {
  if (!apiService.isAuthenticated()) return

  await Promise.all([
    syncHistoryFromCloud(),
    syncFavoritesFromCloud()
  ])
}

/**
 * Envoyer toutes les données locales vers le cloud
 */
export async function pushAllToCloud() {
  if (!apiService.isAuthenticated()) return

  await Promise.all([
    pushHistoryToCloud(),
    pushFavoritesToCloud()
  ])
}

// Export object for convenient import
export const storageService = {
  saveToHistory,
  getHistory,
  removeFromHistory,
  clearHistory,
  syncHistoryFromCloud,
  pushHistoryToCloud,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  getFavorites,
  clearFavorites,
  toggleFavorite,
  syncFavoritesFromCloud,
  pushFavoritesToCloud,
  syncAllFromCloud,
  pushAllToCloud
}
