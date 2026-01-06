/**
 * Service de gestion des paramètres utilisateur
 * Persistance dans localStorage
 */

const SETTINGS_KEY = 'cookmaster_settings';

const defaultSettings = {
  // Langue: 'auto' détecte via navigateur, sinon 'fr' ou 'en'
  language: 'auto',

  // Notifications et sons
  notifications: true,
  sound: true,
  vibration: true,
  soundVolume: 0.7,

  // Système de mesure: 'metric' ou 'imperial'
  measurementSystem: 'metric',

  // Cuisson par défaut
  defaultDoneness: 'medium_rare',

  // Thème (pour future extension)
  theme: 'system'
};

/**
 * Récupère tous les paramètres
 */
const getSettings = () => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Fusionner avec defaults pour les nouvelles clés
      return { ...defaultSettings, ...parsed };
    }
  } catch (error) {
    console.error('Error reading settings:', error);
  }
  return { ...defaultSettings };
};

/**
 * Récupère un paramètre spécifique
 */
const getSetting = (key) => {
  const settings = getSettings();
  return settings[key] ?? defaultSettings[key];
};

/**
 * Sauvegarde tous les paramètres
 */
const saveSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch (error) {
    console.error('Error saving settings:', error);
    return false;
  }
};

/**
 * Met à jour un paramètre spécifique
 */
const saveSetting = (key, value) => {
  const settings = getSettings();
  settings[key] = value;
  return saveSettings(settings);
};

/**
 * Réinitialise tous les paramètres
 */
const resetSettings = () => {
  try {
    localStorage.removeItem(SETTINGS_KEY);
    return true;
  } catch (error) {
    console.error('Error resetting settings:', error);
    return false;
  }
};

/**
 * Détecte la langue du navigateur
 */
const detectBrowserLanguage = () => {
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return browserLang === 'en' ? 'en' : 'fr';
};

/**
 * Récupère la langue effective (résout 'auto')
 */
const getEffectiveLanguage = () => {
  const langSetting = getSetting('language');
  if (langSetting === 'auto') {
    return detectBrowserLanguage();
  }
  return langSetting;
};

export const settingsService = {
  getSettings,
  getSetting,
  saveSettings,
  saveSetting,
  resetSettings,
  detectBrowserLanguage,
  getEffectiveLanguage,
  defaultSettings
};
