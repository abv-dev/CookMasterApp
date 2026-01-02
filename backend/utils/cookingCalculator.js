/**
 * Calculateur de temps de cuisson pour viandes
 * Prend en compte: poids, dimensions, température de cuisson, mode de cuisson
 */

class CookingCalculator {
  /**
   * Calcule le temps de cuisson basé sur les paramètres fournis
   * @param {Object} params - Paramètres de cuisson
   * @returns {Object} - Temps de cuisson et température à coeur
   */
  static calculateCookingTime(params) {
    const {
      weight,              // poids en kg
      thickness,           // épaisseur en cm
      cookingMethod,       // méthode de cuisson
      cookingTemperature,  // température du four/plancha
      targetCoreTemp,      // température à coeur souhaitée
      baseTimePerKg,       // temps de base par kg
      baseTimePerCm,       // temps de base par cm (optionnel)
      adjustmentFactor = 1.0,  // facteur d'ajustement
      restingTime = 0      // temps de repos
    } = params;

    let cookingTime = 0;

    // Calcul basé sur le poids
    if (weight && baseTimePerKg) {
      cookingTime = weight * baseTimePerKg;
    }

    // Ajustement basé sur l'épaisseur (plus précis pour certaines pièces)
    if (thickness && baseTimePerCm) {
      const timeFromThickness = thickness * baseTimePerCm;
      // Utiliser la moyenne pondérée si les deux sont disponibles
      if (cookingTime > 0) {
        cookingTime = (cookingTime * 0.6) + (timeFromThickness * 0.4);
      } else {
        cookingTime = timeFromThickness;
      }
    }

    // Ajustement en fonction de la température de cuisson
    // Plus la température est élevée, plus le temps est court (mais avec limites)
    if (cookingTemperature) {
      const tempAdjustment = this.getTemperatureAdjustment(
        cookingTemperature,
        cookingMethod
      );
      cookingTime *= tempAdjustment;
    }

    // Application du facteur d'ajustement spécifique au mode de cuisson
    cookingTime *= adjustmentFactor;

    // Ajustement pour la température à coeur cible
    if (targetCoreTemp) {
      const coretempAdjustment = this.getCoreTemperatureAdjustment(targetCoreTemp);
      cookingTime *= coretempAdjustment;
    }

    // Arrondir à la minute près
    cookingTime = Math.round(cookingTime);

    return {
      cookingTime,           // en minutes
      restingTime,           // en minutes
      totalTime: cookingTime + restingTime,
      estimatedEndTime: new Date(Date.now() + (cookingTime + restingTime) * 60000),
      confidence: this.calculateConfidence(params)
    };
  }

  /**
   * Calcule l'ajustement basé sur la température de cuisson
   */
  static getTemperatureAdjustment(cookingTemp, method) {
    // Températures de référence par méthode
    const referenceTemps = {
      four_traditionnel: 180,
      four_convection: 180,
      four_chaleur_tournante: 180,
      poele: 180,
      plancha: 200,
      grill: 220,
      barbecue_charbon: 200,
      barbecue_gaz: 200,
      sous_vide: 60,
      basse_temperature: 80,
      rotissoire: 180,
      air_fryer: 180
    };

    const referenceTemp = referenceTemps[method] || 180;

    // Formule d'ajustement (non-linéaire pour tenir compte de la physique)
    if (cookingTemp < 100) {
      // Cuisson basse température: relation plus linéaire
      return referenceTemp / cookingTemp;
    } else {
      // Cuisson haute température: relation logarithmique
      const ratio = referenceTemp / cookingTemp;
      return Math.pow(ratio, 0.85);
    }
  }

  /**
   * Ajustement basé sur la température à coeur cible
   */
  static getCoreTemperatureAdjustment(targetTemp) {
    // Température de référence (à point pour boeuf: 55°C)
    const referenceTemp = 55;

    if (targetTemp < referenceTemp) {
      // Moins cuit = moins de temps
      return 0.8 + (targetTemp / referenceTemp) * 0.2;
    } else {
      // Plus cuit = plus de temps
      return 1.0 + ((targetTemp - referenceTemp) / referenceTemp) * 0.5;
    }
  }

  /**
   * Calcule un indice de confiance pour l'estimation
   */
  static calculateConfidence(params) {
    let confidence = 100;

    // Réduire la confiance si certaines données manquent
    if (!params.weight && !params.thickness) {
      confidence -= 30;
    }
    if (!params.cookingTemperature) {
      confidence -= 20;
    }
    if (!params.baseTimePerKg && !params.baseTimePerCm) {
      confidence -= 40;
    }

    return Math.max(confidence, 0);
  }

  /**
   * Convertit les températures entre Celsius et Fahrenheit
   */
  static convertTemperature(temp, from = 'celsius', to = 'fahrenheit') {
    if (from === to) return temp;

    if (from === 'celsius' && to === 'fahrenheit') {
      return (temp * 9/5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      return (temp - 32) * 5/9;
    }

    return temp;
  }

  /**
   * Calcule le temps restant pendant la cuisson
   */
  static getRemainingTime(startTime, totalTime) {
    const elapsed = (Date.now() - startTime) / 60000; // en minutes
    const remaining = Math.max(0, totalTime - elapsed);

    return {
      elapsed: Math.round(elapsed),
      remaining: Math.round(remaining),
      progress: Math.min(100, (elapsed / totalTime) * 100)
    };
  }
}

module.exports = CookingCalculator;
