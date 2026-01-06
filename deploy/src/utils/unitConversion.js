/**
 * Utilitaire de conversion d'unités (métrique <-> impérial)
 */

// Conversions de poids
const gramsToOunces = (grams) => {
  return (grams * 0.035274).toFixed(1)
}

const ouncesToGrams = (oz) => {
  return Math.round(oz / 0.035274)
}

const kgToLbs = (kg) => {
  return (kg * 2.20462).toFixed(2)
}

const lbsToKg = (lbs) => {
  return (lbs / 2.20462).toFixed(2)
}

// Conversions de température
const celsiusToFahrenheit = (celsius) => {
  return Math.round(celsius * 9 / 5 + 32)
}

const fahrenheitToCelsius = (fahrenheit) => {
  return Math.round((fahrenheit - 32) * 5 / 9)
}

/**
 * Formate un poids selon le système de mesure
 * @param {number} grams - Poids en grammes
 * @param {string} system - 'metric' ou 'imperial'
 * @param {string} lang - 'fr' ou 'en'
 * @returns {string} Poids formaté
 */
const formatWeight = (grams, system = 'metric', lang = 'fr') => {
  if (system === 'imperial') {
    if (grams >= 450) {
      const lbs = parseFloat(kgToLbs(grams / 1000))
      return `${lbs} lb`
    }
    const oz = parseFloat(gramsToOunces(grams))
    return `${oz} oz`
  }

  // Métrique
  if (grams >= 1000) {
    const kg = (grams / 1000).toFixed(1)
    return `${kg} kg`
  }
  return `${grams} g`
}

/**
 * Formate une température selon le système de mesure
 * @param {number} celsius - Température en Celsius
 * @param {string} system - 'metric' ou 'imperial'
 * @returns {string} Température formatée
 */
const formatTemperature = (celsius, system = 'metric') => {
  if (system === 'imperial') {
    return `${celsiusToFahrenheit(celsius)}°F`
  }
  return `${celsius}°C`
}

/**
 * Formate une plage de température
 * @param {number} minCelsius - Température min en Celsius
 * @param {number} maxCelsius - Température max en Celsius
 * @param {string} system - 'metric' ou 'imperial'
 * @returns {string} Plage formatée
 */
const formatTemperatureRange = (minCelsius, maxCelsius, system = 'metric') => {
  if (system === 'imperial') {
    return `${celsiusToFahrenheit(minCelsius)}-${celsiusToFahrenheit(maxCelsius)}°F`
  }
  return `${minCelsius}-${maxCelsius}°C`
}

/**
 * Convertit un poids de l'input utilisateur vers des grammes
 * @param {number} value - Valeur entrée
 * @param {string} unit - 'g', 'kg', 'oz', 'lb'
 * @returns {number} Poids en grammes
 */
const toGrams = (value, unit) => {
  switch (unit) {
    case 'kg':
      return value * 1000
    case 'oz':
      return ouncesToGrams(value)
    case 'lb':
      return parseFloat(lbsToKg(value)) * 1000
    case 'g':
    default:
      return value
  }
}

/**
 * Obtient les unités disponibles selon le système
 * @param {string} system - 'metric' ou 'imperial'
 * @returns {Object} Unités de poids et température
 */
const getUnits = (system = 'metric') => {
  if (system === 'imperial') {
    return {
      weight: { small: 'oz', large: 'lb' },
      temp: '°F'
    }
  }
  return {
    weight: { small: 'g', large: 'kg' },
    temp: '°C'
  }
}

/**
 * Températures de cuisson communes converties
 */
const cookingTemperatures = {
  bleu: { celsius: 48, label: { fr: 'Bleu', en: 'Blue rare' } },
  saignant: { celsius: 52, label: { fr: 'Saignant', en: 'Rare' } },
  a_point: { celsius: 58, label: { fr: 'À point', en: 'Medium' } },
  bien_cuit: { celsius: 68, label: { fr: 'Bien cuit', en: 'Well done' } }
}

/**
 * Obtient la température de cuisson formatée
 * @param {string} doneness - Niveau de cuisson
 * @param {string} system - 'metric' ou 'imperial'
 * @returns {string} Température formatée
 */
const getDonenessTemp = (doneness, system = 'metric') => {
  const temp = cookingTemperatures[doneness]
  if (!temp) return ''
  return formatTemperature(temp.celsius, system)
}

export const unitConversion = {
  // Conversions brutes
  gramsToOunces,
  ouncesToGrams,
  kgToLbs,
  lbsToKg,
  celsiusToFahrenheit,
  fahrenheitToCelsius,

  // Formatage
  formatWeight,
  formatTemperature,
  formatTemperatureRange,

  // Utilitaires
  toGrams,
  getUnits,
  getDonenessTemp,
  cookingTemperatures
}
