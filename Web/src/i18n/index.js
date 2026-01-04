/**
 * Configuration i18n
 */
import fr from './fr'
import en from './en'

export const translations = { fr, en }

/**
 * Récupère une traduction par chemin (ex: 'nav.home')
 * @param {Object} langData - Données de langue
 * @param {string} path - Chemin vers la traduction
 * @param {string} fallback - Valeur par défaut si non trouvée
 * @returns {string} Traduction
 */
export const getTranslation = (langData, path, fallback = '') => {
  const keys = path.split('.')
  let result = langData

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      return fallback || path
    }
  }

  return typeof result === 'string' ? result : fallback || path
}

export default translations
