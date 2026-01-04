/**
 * Utilitaire de conversion d'unités
 * Gère les conversions de poids, températures et dimensions
 */

class UnitConverter {
  /**
   * Convertit le poids
   */
  static convertWeight(value, from, to) {
    if (from === to) return value;

    const toKg = {
      'kg': 1,
      'g': 0.001,
      'lbs': 0.453592,
      'oz': 0.0283495
    };

    // Convertir en kg puis vers l'unité cible
    const inKg = value * toKg[from];
    return inKg / toKg[to];
  }

  /**
   * Convertit la température
   */
  static convertTemperature(value, from, to) {
    if (from === to) return value;

    const conversions = {
      'celsius_to_fahrenheit': (c) => (c * 9/5) + 32,
      'fahrenheit_to_celsius': (f) => (f - 32) * 5/9,
      'celsius_to_kelvin': (c) => c + 273.15,
      'kelvin_to_celsius': (k) => k - 273.15,
      'fahrenheit_to_kelvin': (f) => ((f - 32) * 5/9) + 273.15,
      'kelvin_to_fahrenheit': (k) => ((k - 273.15) * 9/5) + 32
    };

    const conversionKey = `${from}_to_${to}`;
    return conversions[conversionKey] ? conversions[conversionKey](value) : value;
  }

  /**
   * Convertit les dimensions (longueur)
   */
  static convertDimension(value, from, to) {
    if (from === to) return value;

    const toCm = {
      'cm': 1,
      'mm': 0.1,
      'm': 100,
      'inches': 2.54,
      'ft': 30.48
    };

    // Convertir en cm puis vers l'unité cible
    const inCm = value * toCm[from];
    return inCm / toCm[to];
  }

  /**
   * Convertit un objet complet avec toutes ses mesures
   */
  static convertMeasurements(measurements, targetUnits) {
    const result = { ...measurements };

    if (measurements.weight && targetUnits.weight) {
      result.weight = {
        value: this.convertWeight(
          measurements.weight.value,
          measurements.weight.unit,
          targetUnits.weight
        ),
        unit: targetUnits.weight
      };
    }

    if (measurements.dimensions && targetUnits.dimension) {
      result.dimensions = {
        thickness: measurements.dimensions.thickness ?
          this.convertDimension(
            measurements.dimensions.thickness,
            measurements.dimensions.unit,
            targetUnits.dimension
          ) : undefined,
        length: measurements.dimensions.length ?
          this.convertDimension(
            measurements.dimensions.length,
            measurements.dimensions.unit,
            targetUnits.dimension
          ) : undefined,
        width: measurements.dimensions.width ?
          this.convertDimension(
            measurements.dimensions.width,
            measurements.dimensions.unit,
            targetUnits.dimension
          ) : undefined,
        unit: targetUnits.dimension
      };
    }

    if (measurements.temperature && targetUnits.temperature) {
      result.temperature = {
        value: this.convertTemperature(
          measurements.temperature.value,
          measurements.temperature.unit,
          targetUnits.temperature
        ),
        unit: targetUnits.temperature
      };
    }

    return result;
  }

  /**
   * Formate une valeur avec son unité
   */
  static formatWithUnit(value, unit, decimals = 1) {
    const roundedValue = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);

    const unitSymbols = {
      // Poids
      'kg': 'kg',
      'g': 'g',
      'lbs': 'lbs',
      'oz': 'oz',
      // Température
      'celsius': '°C',
      'fahrenheit': '°F',
      'kelvin': 'K',
      // Dimensions
      'cm': 'cm',
      'mm': 'mm',
      'm': 'm',
      'inches': '"',
      'ft': '\''
    };

    return `${roundedValue} ${unitSymbols[unit] || unit}`;
  }

  /**
   * Valide qu'une unité est supportée
   */
  static isValidUnit(value, type) {
    const validUnits = {
      weight: ['kg', 'g', 'lbs', 'oz'],
      temperature: ['celsius', 'fahrenheit', 'kelvin'],
      dimension: ['cm', 'mm', 'm', 'inches', 'ft']
    };

    return validUnits[type] && validUnits[type].includes(value);
  }
}

module.exports = UnitConverter;
