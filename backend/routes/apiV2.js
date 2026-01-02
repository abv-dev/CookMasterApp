const express = require('express');
const router = express.Router();
const { Meat, CookingAppliance, CookingMethod } = require('../models/MeatV2');

// ===== ROUTES POUR LES VIANDES =====

// GET /api/v2/meats - Récupérer toutes les viandes
router.get('/meats', async (req, res) => {
  try {
    const meats = await Meat.find();
    res.json(meats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/meats/:category - Récupérer les viandes d'une catégorie
router.get('/meats/:category', async (req, res) => {
  try {
    const meats = await Meat.find({ category: req.params.category });
    res.json(meats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/meats/:meatId/cuts - Récupérer tous les morceaux d'une viande
router.get('/meats/:meatId/cuts', async (req, res) => {
  try {
    const meat = await Meat.findById(req.params.meatId);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }
    res.json(meat.cuts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== ROUTES POUR LES APPAREILS =====

// GET /api/v2/appliances - Récupérer tous les appareils
router.get('/appliances', async (req, res) => {
  try {
    const appliances = await CookingAppliance.find().sort({ category: 1, name: 1 });
    res.json(appliances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/appliances/:category - Récupérer les appareils d'une catégorie
router.get('/appliances/category/:category', async (req, res) => {
  try {
    const appliances = await CookingAppliance.find({ category: req.params.category });
    res.json(appliances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/appliances/:id - Récupérer un appareil spécifique
router.get('/appliances/:id', async (req, res) => {
  try {
    const appliance = await CookingAppliance.findById(req.params.id);
    if (!appliance) {
      return res.status(404).json({ error: 'Appareil non trouvé' });
    }
    res.json(appliance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== ROUTES POUR LES MÉTHODES =====

// GET /api/v2/methods - Récupérer toutes les méthodes
router.get('/methods', async (req, res) => {
  try {
    const methods = await CookingMethod.find().sort({ category: 1, name: 1 });
    res.json(methods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/methods/:category - Récupérer les méthodes d'une catégorie
router.get('/methods/category/:category', async (req, res) => {
  try {
    const methods = await CookingMethod.find({ category: req.params.category });
    res.json(methods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/v2/methods/:id - Récupérer une méthode spécifique
router.get('/methods/:id', async (req, res) => {
  try {
    const method = await CookingMethod.findById(req.params.id);
    if (!method) {
      return res.status(404).json({ error: 'Méthode non trouvée' });
    }
    res.json(method);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== ROUTE DE CALCUL AVANCÉE =====

// POST /api/v2/calculate - Calculer le temps de cuisson avec appareil + méthode séparés
router.post('/calculate', async (req, res) => {
  try {
    const {
      meatId,
      cutIndex,
      weight,              // en grammes
      thickness,           // en cm
      doneness,            // saignant, à point, etc.
      applianceId,         // ID de l'appareil
      methodId,            // ID de la méthode
      executionMode,       // Mode d'exécution: standard, reverse_sear, sear_then_finish
      cookingTemperature,  // température choisie par l'utilisateur (40-300°C)
      altitude,            // altitude en mètres
      preheated            // four préchauffé ou non
    } = req.body;

    // Valeur par défaut pour executionMode
    const mode = executionMode || 'standard';

    // Validation
    if (!meatId || cutIndex === undefined || !weight || !doneness || !applianceId || !methodId || !cookingTemperature) {
      return res.status(400).json({
        error: 'Paramètres manquants',
        required: ['meatId', 'cutIndex', 'weight', 'doneness', 'applianceId', 'methodId', 'cookingTemperature']
      });
    }

    // Récupérer les données
    const meat = await Meat.findById(meatId);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }

    const cut = meat.cuts[cutIndex];
    if (!cut) {
      return res.status(404).json({ error: 'Morceau non trouvé' });
    }

    const appliance = await CookingAppliance.findById(applianceId);
    if (!appliance) {
      return res.status(404).json({ error: 'Appareil non trouvé' });
    }

    const method = await CookingMethod.findById(methodId);
    if (!method) {
      return res.status(404).json({ error: 'Méthode non trouvée' });
    }

    // Vérifier que la température est dans la plage de l'appareil
    if (cookingTemperature < appliance.temperatureRange.min ||
        cookingTemperature > appliance.temperatureRange.max) {
      return res.status(400).json({
        error: `Température ${cookingTemperature}°C hors de la plage de l'appareil ${appliance.name} (${appliance.temperatureRange.min}-${appliance.temperatureRange.max}°C)`
      });
    }

    // Trouver la température à cœur pour la cuisson désirée
    const targetTemp = cut.temperatures.find(t => t.doneness.toLowerCase() === doneness.toLowerCase());
    if (!targetTemp) {
      return res.status(400).json({
        error: `Cuisson "${doneness}" non disponible pour ${cut.name}`,
        available: cut.temperatures.map(t => t.doneness)
      });
    }

    // ===== CALCUL DU TEMPS DE CUISSON =====

    let cookingTime, restingTime, totalTime;
    let phases = null; // Pour les modes multi-phases

    if (mode === 'standard') {
      // ===== MODE STANDARD: Cuisson simple =====
      const weightKg = weight / 1000;
      const timeFromWeight = cut.baseTimePerKg * weightKg;
      const timeFromThickness = thickness ? cut.baseTimePerCm * thickness : 0;
      let baseTime = Math.max(timeFromWeight, timeFromThickness);

      // Facteur d'ajustement de l'appareil
      baseTime *= appliance.adjustmentFactor;

      // Facteur d'ajustement de la méthode
      baseTime *= method.adjustmentFactor;

      // Ajustement selon la température de cuisson
      const tempFactor = calculateTemperatureFactor(cookingTemperature, targetTemp.coreTemperature);
      baseTime *= tempFactor;

      // Ajustement d'altitude
      if (altitude > 0) {
        const altitudeFactor = 1 + (altitude / 10000);
        baseTime *= altitudeFactor;
      }

      // Ajustement si four non préchauffé
      if (!preheated && appliance.category === 'four') {
        baseTime *= 1.15;
      }

      cookingTime = Math.round(baseTime);
      restingTime = method.typicalRestingTime || 5;
      totalTime = cookingTime + restingTime;

    } else if (mode === 'reverse_sear') {
      // ===== MODE REVERSE SEAR: Basse température puis saisie =====

      // Phase 1: Cuisson basse température (80-120°C) jusqu'à cœur - 10°C
      const lowTemp = Math.min(cookingTemperature, 120);
      const weightKg = weight / 1000;
      const baseTime1 = Math.max(cut.baseTimePerKg * weightKg, (thickness || 3) * cut.baseTimePerCm);

      // Temps plus long pour basse température
      const tempFactor1 = calculateTemperatureFactor(lowTemp, targetTemp.coreTemperature - 10);
      let phase1Time = baseTime1 * appliance.adjustmentFactor * method.adjustmentFactor * tempFactor1 * 1.5;

      // Phase 2: Saisie haute température (230-280°C) pour 2-4 min de chaque côté
      const sthickness = thickness || 3;
      const phase2Time = sthickness < 2 ? 4 : sthickness < 4 ? 6 : 8; // 2-4 min par face

      // Repos minimal entre phases + repos final court
      const restBetweenPhases = 2;
      const finalRest = Math.min(targetTemp.restingTime || 3, 3); // Repos final court pour reverse sear

      // Le restingTime affiché inclut le repos entre phases + repos final
      restingTime = restBetweenPhases + finalRest;

      cookingTime = Math.round(phase1Time + phase2Time);
      totalTime = cookingTime + restingTime;

      phases = {
        phase1: {
          description: `Cuisson basse température (${lowTemp}°C)`,
          temperature: lowTemp,
          time: Math.round(phase1Time),
          target: `Jusqu'à ${targetTemp.coreTemperature - 10}°C à cœur`
        },
        phase2: {
          description: `Saisie haute température (${Math.max(cookingTemperature, 230)}°C)`,
          temperature: Math.max(cookingTemperature, 230),
          time: phase2Time,
          target: `${phase2Time/2} min par face`
        },
        restBetweenPhases
      };

    } else if (mode === 'sear_then_finish') {
      // ===== MODE SAISIR PUIS FINIR: Saisie puis basse température =====

      // Phase 1: Saisie haute température (230-280°C) pour 2-3 min de chaque côté
      const sthickness = thickness || 3;
      const phase1Time = sthickness < 2 ? 4 : sthickness < 4 ? 6 : 8;

      // Phase 2: Finition basse température (120-160°C)
      const finishTemp = Math.min(cookingTemperature, 160);
      const weightKg = weight / 1000;
      const baseTime2 = Math.max(cut.baseTimePerKg * weightKg * 0.7, sthickness * cut.baseTimePerCm * 0.7); // 70% du temps normal

      const tempFactor2 = calculateTemperatureFactor(finishTemp, targetTemp.coreTemperature);
      const phase2Time = baseTime2 * appliance.adjustmentFactor * method.adjustmentFactor * tempFactor2;

      // Repos prolongé pour sear then finish
      restingTime = Math.max(targetTemp.restingTime || method.typicalRestingTime || 5, 7);

      cookingTime = Math.round(phase1Time + phase2Time);
      totalTime = cookingTime + restingTime;

      phases = {
        phase1: {
          description: `Saisie haute température (${Math.max(cookingTemperature, 230)}°C)`,
          temperature: Math.max(cookingTemperature, 230),
          time: phase1Time,
          target: `${phase1Time/2} min par face`
        },
        phase2: {
          description: `Finition basse température (${finishTemp}°C)`,
          temperature: finishTemp,
          time: Math.round(phase2Time),
          target: `Jusqu'à ${targetTemp.coreTemperature}°C à cœur`
        }
      };

    } else {
      // Mode invalide, utiliser standard par défaut
      mode = 'standard';
      // (même logique que standard ci-dessus - à factoriser plus tard)
      const weightKg = weight / 1000;
      const timeFromWeight = cut.baseTimePerKg * weightKg;
      const timeFromThickness = thickness ? cut.baseTimePerCm * thickness : 0;
      let baseTime = Math.max(timeFromWeight, timeFromThickness);
      baseTime *= appliance.adjustmentFactor * method.adjustmentFactor;
      const tempFactor = calculateTemperatureFactor(cookingTemperature, targetTemp.coreTemperature);
      baseTime *= tempFactor;
      cookingTime = Math.round(baseTime);
      restingTime = targetTemp.restingTime || method.typicalRestingTime || 5;
      totalTime = cookingTime + restingTime;
    }

    // Température de sécurité depuis la base de données
    const safetyTemperature = targetTemp.safetyTemperature || null;
    const safetyNote = targetTemp.safetyNote || null;

    // Température de dégustation (légèrement supérieure à température à cœur, mais limitée par la sécurité si définie)
    const tastingTemperature = safetyTemperature
      ? Math.min(targetTemp.coreTemperature + 2, safetyTemperature)
      : targetTemp.coreTemperature + 2;

    // Résultat
    res.json({
      // Viande
      meatName: meat.name,
      cutName: cut.name,
      cutDescription: cut.description,

      // Appareil et méthode
      appliance: {
        name: appliance.name,
        category: appliance.category,
        temperatureRange: appliance.temperatureRange
      },
      method: {
        name: method.name,
        category: method.category,
        description: method.description
      },

      // Mode d'exécution
      executionMode: mode,
      phases: phases, // null pour standard, objet avec détails phases pour les autres modes

      // Températures
      cookingTemperature,
      targetTemperature: targetTemp.coreTemperature,
      coreTemperature: targetTemp.coreTemperature,
      tastingTemperature,
      safetyTemperature,
      safetyNote,

      // Cuisson
      doneness,
      donenessDescription: targetTemp.description,

      // Temps
      cookingTime,
      restingTime,
      totalTime,

      // Recommandations
      recommendations: cut.recommendations || method.description,

      // Informations supplémentaires
      warnings: generateWarnings(cut, targetTemp, safetyTemperature, appliance, method)
    });

  } catch (error) {
    console.error('Erreur calcul:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===== FONCTIONS UTILITAIRES =====

function calculateTemperatureFactor(cookingTemp, targetCoreTemp) {
  // Plus l'écart entre température de cuisson et température cœur est faible,
  // plus le temps de cuisson est long
  const tempDiff = cookingTemp - targetCoreTemp;

  if (tempDiff <= 20) {
    return 3.0; // Très basse température
  } else if (tempDiff <= 50) {
    return 2.0; // Basse température
  } else if (tempDiff <= 100) {
    return 1.0; // Température normale
  } else if (tempDiff <= 150) {
    return 0.85; // Haute température
  } else {
    return 0.7; // Très haute température
  }
}

function generateWarnings(cut, targetTemp, safetyTemp, appliance, method) {
  const warnings = [];

  // Vérifier si la température à cœur est inférieure à la température de sécurité
  if (targetTemp.coreTemperature < safetyTemp) {
    warnings.push({
      type: 'sécurité',
      message: `⚠️ Attention : température à cœur ${targetTemp.coreTemperature}°C inférieure au minimum de sécurité (${safetyTemp}°C). Consommation à vos risques.`
    });
  }

  // Avertissement pour viande hachée
  if (cut.name.toLowerCase().includes('haché')) {
    warnings.push({
      type: 'obligatoire',
      message: '🚨 OBLIGATOIRE : La viande hachée doit être cuite à 71°C minimum pour éliminer les bactéries.'
    });
  }

  // Avertissement pour cuisson basse température
  if (method.category === 'basse_temperature' || method.category === 'sous_vide') {
    warnings.push({
      type: 'info',
      message: '💡 Cuisson basse température : nécessite une surveillance précise de la température à cœur avec thermomètre.'
    });
  }

  // Avertissement pour fumage
  if (appliance.canDoSmoke && method.category === 'fumage') {
    warnings.push({
      type: 'info',
      message: '💨 Fumage : utilisez du bois adapté (chêne, hêtre, noyer, fruitiers). Évitez les résineux.'
    });
  }

  return warnings;
}

module.exports = router;
