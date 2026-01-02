/**
 * CookMaster Cooking Calculator
 * Complete calculation logic with all formulas for precise cooking time estimation
 */

import {
  MeatCut,
  CookingMethodInfo,
  CookingMethodType,
  CookingResult,
  Meat,
} from '../types/models';

export interface CalculatorParams {
  meat: Meat;
  cut: MeatCut;
  method: CookingMethodInfo;
  weight: number; // kg
  thickness?: number; // cm
  targetTemperature: number; // °C
  initialTemperature: number; // °C (température initiale de la viande)
  customCookingTemp?: number; // °C (température de cuisson personnalisée)
}

/**
 * Cooking Calculator Service
 * Implements all formulas for cooking time calculation
 */
export class CookingCalculator {
  /**
   * Main calculation method
   * Calculates complete cooking result with all parameters
   */
  static calculate(params: CalculatorParams): CookingResult {
    const {
      meat,
      cut,
      method,
      weight,
      thickness,
      targetTemperature,
      initialTemperature,
      customCookingTemp,
    } = params;

    // 1. Base cooking time calculation (weight × baseTimePerKg)
    let cookingTime = this.calculateBaseTime(
      weight,
      thickness,
      method.baseTimePerKg,
      method.baseTimePerCm
    );

    // 2. Temperature adjustment (different for low/high temp)
    const cookingTemp = customCookingTemp || method.cookingTemperature;
    const tempAdjustment = this.getTemperatureAdjustment(cookingTemp, method.method);
    cookingTime *= tempAdjustment;

    // 3. Adjustment factor (specific to cooking method)
    cookingTime *= method.adjustmentFactor;

    // 4. Core temperature adjustment
    const coreTempAdjustment = this.getCoreTemperatureAdjustment(targetTemperature);
    cookingTime *= coreTempAdjustment;

    // 5. Initial temperature adjustment
    const initialTempAdjustment = this.getInitialTemperatureAdjustment(initialTemperature);
    cookingTime *= initialTempAdjustment;

    // Round to nearest minute
    cookingTime = Math.round(cookingTime);

    // 6. Resting time
    const restingTime = method.restingTime;

    // 7. Total time calculation
    const totalTime = cookingTime + restingTime;

    // Generate instructions, tips, and warnings
    const instructions = this.generateInstructions(params, cookingTemp);
    const tips = this.generateTips(params);
    const warnings = this.generateWarnings(params, targetTemperature);

    return {
      meat,
      cut,
      method,
      weight,
      thickness,
      targetTemperature,
      initialTemperature,
      cookingTime,
      restingTime,
      totalTime,
      estimatedEndTime: new Date(Date.now() + totalTime * 60000),
      instructions,
      tips,
      warnings,
    };
  }

  /**
   * Formula 1: Base cooking time calculation
   * Uses weight and/or thickness to calculate base time
   */
  private static calculateBaseTime(
    weight: number,
    thickness: number | undefined,
    baseTimePerKg: number,
    baseTimePerCm: number | undefined
  ): number {
    let cookingTime = 0;

    // Calculate from weight
    if (weight && baseTimePerKg) {
      cookingTime = weight * baseTimePerKg;
    }

    // Thickness adjustment (more precise for certain cuts)
    if (thickness && baseTimePerCm) {
      const timeFromThickness = thickness * baseTimePerCm;
      // Use weighted average if both are available (60% weight, 40% thickness)
      if (cookingTime > 0) {
        cookingTime = cookingTime * 0.6 + timeFromThickness * 0.4;
      } else {
        cookingTime = timeFromThickness;
      }
    }

    return cookingTime;
  }

  /**
   * Formula 2: Temperature adjustment
   * Different formulas for low temperature (<100°C) vs high temperature (≥100°C)
   */
  private static getTemperatureAdjustment(
    cookingTemp: number,
    method: CookingMethodType
  ): number {
    // Reference temperatures by cooking method
    const referenceTemps: Record<string, number> = {
      four_traditionnel: 180,
      four_convection: 180,
      four_vapeur: 100,
      four_chaleur_tournante: 180,
      poele: 180,
      plancha: 200,
      wok: 200,
      sauteuse: 180,
      grill: 220,
      barbecue_charbon: 200,
      barbecue_gaz: 200,
      barbecue_electrique: 200,
      salamandre: 250,
      cocotte: 160,
      mijoteuse: 90,
      braisage: 150,
      ragout: 140,
      sous_vide: 60,
      basse_temperature: 80,
      rotissoire: 180,
      rotissoire_verticale: 180,
      vapeur: 100,
      court_bouillon: 90,
      pochage: 85,
      saisie: 220,
      flambe: 250,
      fumoir_chaud: 110,
      fumoir_froid: 25,
      air_fryer: 180,
      micro_ondes: 100,
      pierre_chaude: 250,
      tajine: 140,
      papillote: 180,
      croute_sel: 200,
      croute_argile: 180,
      plancha_professionnelle: 220,
      grill_pierre_de_lave: 240,
      grill_salamandre: 260,
    };

    const referenceTemp = referenceTemps[method] || 180;

    // Low temperature cooking (<100°C): Linear relationship
    if (cookingTemp < 100) {
      return referenceTemp / cookingTemp;
    }

    // High temperature cooking (≥100°C): Logarithmic relationship
    const ratio = referenceTemp / cookingTemp;
    return Math.pow(ratio, 0.85);
  }

  /**
   * Formula 3: Core temperature adjustment
   * Adjusts cooking time based on target doneness temperature
   */
  private static getCoreTemperatureAdjustment(targetTemp: number): number {
    // Reference temperature (medium for beef: 55°C)
    const referenceTemp = 55;

    if (targetTemp < referenceTemp) {
      // Less cooked = less time
      // Formula: 0.8 + (targetTemp / referenceTemp) × 0.2
      return 0.8 + (targetTemp / referenceTemp) * 0.2;
    } else {
      // More cooked = more time
      // Formula: 1.0 + ((targetTemp - referenceTemp) / referenceTemp) × 0.5
      return 1.0 + ((targetTemp - referenceTemp) / referenceTemp) * 0.5;
    }
  }

  /**
   * Formula 4: Initial temperature adjustment
   * Meat from fridge needs more time than room temperature meat
   */
  private static getInitialTemperatureAdjustment(initialTemp: number): number {
    // Reference: room temperature (20°C)
    const referenceTemp = 20;

    if (initialTemp < referenceTemp) {
      // Cold meat needs more time
      // For every 10°C below room temp, add 15% more time
      const tempDiff = referenceTemp - initialTemp;
      return 1.0 + (tempDiff / 10) * 0.15;
    } else if (initialTemp > referenceTemp) {
      // Warm meat needs less time
      const tempDiff = initialTemp - referenceTemp;
      return 1.0 - (tempDiff / 10) * 0.1;
    }

    return 1.0;
  }

  /**
   * Generate step-by-step cooking instructions
   */
  private static generateInstructions(
    params: CalculatorParams,
    cookingTemp: number
  ): string[] {
    const { method, weight, targetTemperature, initialTemperature } = params;
    const instructions: string[] = [];

    // Initial temperature advice
    if (initialTemperature < 15) {
      instructions.push(
        `Sortez la viande du réfrigérateur 30 minutes avant cuisson (actuellement à ${initialTemperature}°C)`
      );
    } else if (initialTemperature < 20) {
      instructions.push(
        `Sortez la viande du réfrigérateur 15 minutes avant cuisson pour une cuisson optimale`
      );
    }

    // Preparation
    instructions.push('Assaisonnez la viande selon vos préférences (sel, poivre, épices)');

    // Cooking method specific instructions
    if (
      method.method === CookingMethodType.FOUR_TRADITIONNEL ||
      method.method === CookingMethodType.FOUR_CONVECTION ||
      method.method === CookingMethodType.FOUR_CHALEUR_TOURNANTE
    ) {
      instructions.push(`Préchauffez le four à ${cookingTemp}°C`);
      instructions.push(
        `Enfournez la viande (${weight} kg) et laissez cuire selon le temps calculé`
      );
    } else if (
      method.method === CookingMethodType.POELE ||
      method.method === CookingMethodType.PLANCHA
    ) {
      instructions.push('Chauffez la poêle/plancha à feu moyen-vif');
      instructions.push('Saisissez la viande de tous les côtés (1-2 min par face)');
      instructions.push('Réduisez le feu et poursuivez la cuisson');
    } else if (
      method.method === CookingMethodType.BARBECUE_CHARBON ||
      method.method === CookingMethodType.BARBECUE_GAZ ||
      method.method === CookingMethodType.GRILL
    ) {
      instructions.push('Préparez le barbecue/grill à température moyenne-élevée');
      instructions.push('Huilez légèrement la grille');
      instructions.push('Grillez en retournant régulièrement');
    } else if (method.method === CookingMethodType.SOUS_VIDE) {
      instructions.push(`Réglez le bain-marie à ${targetTemperature}°C`);
      instructions.push('Placez la viande sous vide dans le bain');
      instructions.push('Laissez cuire selon le temps calculé');
      instructions.push('Saisissez rapidement à la poêle avant de servir (optionnel)');
    }

    // Temperature monitoring
    instructions.push(
      `Vérifiez la température à cœur (cible: ${targetTemperature}°C) avec un thermomètre`
    );

    // Resting
    if (method.restingTime > 0) {
      instructions.push(
        `Laissez reposer la viande ${method.restingTime} minutes sous papier aluminium`
      );
    }

    instructions.push('Servez et dégustez !');

    return instructions;
  }

  /**
   * Generate cooking tips
   */
  private static generateTips(params: CalculatorParams): string[] {
    const { method, weight, thickness } = params;
    const tips: string[] = [];

    // General tips
    tips.push('Utilisez un thermomètre à viande pour une précision optimale');

    // Weight-based tips
    if (weight > 2) {
      tips.push(
        'Pour les grosses pièces, surveillez régulièrement la température à cœur'
      );
    }

    // Thickness-based tips
    if (thickness && thickness < 2) {
      tips.push(
        'Attention: pièce fine, surveillez de près pour éviter la surcuisson'
      );
    } else if (thickness && thickness > 5) {
      tips.push(
        'Pièce épaisse: la température à cœur peut continuer à monter pendant le repos'
      );
    }

    // Method-specific tips
    if (
      method.method === CookingMethodType.FOUR_TRADITIONNEL ||
      method.method === CookingMethodType.FOUR_CHALEUR_TOURNANTE
    ) {
      tips.push('Placez la viande au centre du four pour une cuisson homogène');
      tips.push('Arrosez la viande en cours de cuisson pour plus de moelleux');
    } else if (
      method.method === CookingMethodType.POELE ||
      method.method === CookingMethodType.PLANCHA
    ) {
      tips.push('Ne retournez pas trop souvent la viande pour une belle coloration');
      tips.push('Utilisez une huile avec un point de fumée élevé');
    } else if (
      method.method === CookingMethodType.BARBECUE_CHARBON ||
      method.method === CookingMethodType.BARBECUE_GAZ
    ) {
      tips.push('Évitez de piquer la viande pour conserver les jus');
      tips.push('Laissez bien chauffer le grill avant de commencer');
    } else if (method.method === CookingMethodType.SOUS_VIDE) {
      tips.push('La cuisson sous vide permet une précision parfaite');
      tips.push('Vous pouvez prolonger légèrement sans risque de surcuisson');
    }

    // Resting tip
    if (method.restingTime > 0) {
      tips.push(
        'Le temps de repos permet une répartition homogène des jus dans la viande'
      );
    }

    return tips;
  }

  /**
   * Generate safety warnings
   */
  private static generateWarnings(
    params: CalculatorParams,
    targetTemperature: number
  ): string[] {
    const { meat } = params;
    const warnings: string[] = [];

    // Safety temperature warnings based on meat type
    const safetyTemps: Record<string, number> = {
      volaille: 75, // Poultry must reach 75°C
      porc: 63, // Pork minimum 63°C
      veau: 63, // Veal minimum 63°C
      agneau: 63, // Lamb minimum 63°C
      boeuf: 50, // Beef can be lower (but depends on cut)
    };

    const minSafeTemp = safetyTemps[meat.category] || 63;

    if (targetTemperature < minSafeTemp) {
      warnings.push(
        `⚠️ ATTENTION: Pour ${meat.name}, la température de sécurité recommandée est de ${minSafeTemp}°C minimum (cible actuelle: ${targetTemperature}°C)`
      );
    }

    // Poultry specific warning
    if (meat.category === 'volaille' && targetTemperature < 75) {
      warnings.push(
        '⚠️ IMPORTANT: La volaille doit atteindre 75°C à cœur pour éliminer les bactéries'
      );
    }

    // Pork specific warning
    if (meat.category === 'porc' && targetTemperature < 63) {
      warnings.push(
        '⚠️ SÉCURITÉ: Le porc doit atteindre au minimum 63°C pour être consommé en toute sécurité'
      );
    }

    // Ground meat warning
    if (
      params.cut.name.toLowerCase().includes('haché') ||
      params.cut.name.toLowerCase().includes('steak haché')
    ) {
      warnings.push(
        '⚠️ Viande hachée: cuisson à cœur complète recommandée (minimum 70°C)'
      );
    }

    return warnings;
  }

  /**
   * Calculate confidence level for the estimation
   */
  static calculateConfidence(params: CalculatorParams): number {
    let confidence = 100;

    // Reduce confidence if critical data is missing
    if (!params.weight && !params.thickness) {
      confidence -= 30;
    }

    if (!params.method.cookingTemperature && !params.customCookingTemp) {
      confidence -= 20;
    }

    if (!params.method.baseTimePerKg && !params.method.baseTimePerCm) {
      confidence -= 40;
    }

    if (!params.targetTemperature) {
      confidence -= 15;
    }

    return Math.max(confidence, 0);
  }

  /**
   * Convert temperature between Celsius and Fahrenheit
   */
  static convertTemperature(
    temp: number,
    from: 'celsius' | 'fahrenheit' = 'celsius',
    to: 'celsius' | 'fahrenheit' = 'fahrenheit'
  ): number {
    if (from === to) return temp;

    if (from === 'celsius' && to === 'fahrenheit') {
      return (temp * 9) / 5 + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      return ((temp - 32) * 5) / 9;
    }

    return temp;
  }

  /**
   * Calculate remaining time during cooking
   */
  static getRemainingTime(startTime: Date, totalTime: number) {
    const elapsed = (Date.now() - startTime.getTime()) / 60000; // in minutes
    const remaining = Math.max(0, totalTime - elapsed);

    return {
      elapsed: Math.round(elapsed),
      remaining: Math.round(remaining),
      progress: Math.min(100, (elapsed / totalTime) * 100),
    };
  }

  /**
   * Format time for display
   */
  static formatTime(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} min`;
    }

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (mins === 0) {
      return `${hours}h`;
    }

    return `${hours}h ${mins}min`;
  }
}
