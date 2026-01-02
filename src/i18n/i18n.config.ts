import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations } from './translations';

const LANGUAGE_KEY = '@CookMaster:language';

// Get device language
const getDeviceLanguage = () => {
  const deviceLang = Localization.getLocales()[0]?.languageCode || 'fr';
  // Support only fr, en, es
  if (['fr', 'en', 'es'].includes(deviceLang)) {
    return deviceLang;
  }
  return 'fr'; // Default to French
};

// Initialize i18n
const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

  if (!savedLanguage) {
    savedLanguage = getDeviceLanguage();
    await AsyncStorage.setItem(LANGUAGE_KEY, savedLanguage);
  }

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        fr: { translation: translations.fr },
        en: { translation: translations.en },
        es: { translation: translations.es },
      },
      lng: savedLanguage,
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false,
      },
      compatibilityJSON: 'v4',
    });
};

initI18n();

export const changeLanguage = async (lang: 'fr' | 'en' | 'es') => {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  i18n.changeLanguage(lang);
};

export const getCurrentLanguage = () => i18n.language;

export default i18n;
