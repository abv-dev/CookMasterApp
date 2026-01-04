import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { settingsService } from '../services/settingsService'
import translations, { getTranslation } from '../i18n'

// Créer le contexte
const LanguageContext = createContext(null)

/**
 * Provider de langue pour l'application
 */
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return settingsService.getEffectiveLanguage()
  })

  // Écouter les changements de paramètres
  useEffect(() => {
    const checkLanguage = () => {
      const newLang = settingsService.getEffectiveLanguage()
      if (newLang !== language) {
        setLanguageState(newLang)
      }
    }

    // Vérifier périodiquement (pour les changements depuis Settings)
    const interval = setInterval(checkLanguage, 1000)
    return () => clearInterval(interval)
  }, [language])

  // Changer la langue
  const setLanguage = useCallback((lang) => {
    settingsService.saveSetting('language', lang)
    const effectiveLang = lang === 'auto'
      ? settingsService.detectBrowserLanguage()
      : lang
    setLanguageState(effectiveLang)
  }, [])

  // Données de traduction actuelles
  const t = useMemo(() => translations[language] || translations.fr, [language])

  // Fonction helper pour obtenir une traduction par chemin
  const translate = useCallback((path, fallback) => {
    return getTranslation(t, path, fallback)
  }, [t])

  // Valeur du contexte
  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    translate,
    isEnglish: language === 'en',
    isFrench: language === 'fr'
  }), [language, setLanguage, t, translate])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook pour utiliser le contexte de langue
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/**
 * Hook simplifié pour les traductions
 */
export function useTranslation() {
  const { t, translate, language } = useLanguage()
  return { t, translate, language }
}

export default LanguageContext
