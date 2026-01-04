const express = require('express');
const router = express.Router();
const CookingCalculator = require('../utils/cookingCalculator');
const UnitConverter = require('../utils/unitConverter');
const Meat = require('../models/Meat');

/**
 * POST /api/cooking/calculate
 * Calculer le temps de cuisson
 */
router.post('/calculate', async (req, res) => {
  try {
    const {
      meatId,
      cutName,
      cookingMethod,
      weight,              // { value, unit }
      dimensions,          // { thickness, length, width, unit }
      cookingTemperature,  // { value, unit }
      targetDoneness,      // 'bleu', 'saignant', 'à point', etc.
      userPreferences      // { temperatureUnit, weightUnit, dimensionUnit }
    } = req.body;

    // Récupérer les informations de la viande et du morceau
    const meat = await Meat.findById(meatId);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }

    // Find cut - handle both direct cuts and subcategories structures
    let cut = null;
    if (meat.cuts && meat.cuts.length > 0) {
      // Direct cuts structure (volaille, gibier)
      cut = meat.cuts.find(c => c.name === cutName);
    }
    if (!cut && meat.subcategories) {
      // Subcategories structure (boeuf, porc, veau, agneau)
      for (const subcatKey of Object.keys(meat.subcategories)) {
        const subcat = meat.subcategories[subcatKey];
        if (subcat && subcat.cuts) {
          cut = subcat.cuts.find(c => c.name === cutName);
          if (cut) break;
        }
      }
    }
    if (!cut) {
      return res.status(404).json({ error: 'Morceau non trouvé' });
    }

    // Trouver la méthode de cuisson pour ce morceau
    const method = cut.cookingMethods.find(m => m.method === cookingMethod);
    if (!method) {
      return res.status(404).json({
        error: 'Méthode de cuisson non disponible pour ce morceau'
      });
    }

    // Trouver la température à coeur cible
    const donenessInfo = cut.temperatures.find(t => t.doneness === targetDoneness);
    if (!donenessInfo) {
      return res.status(404).json({
        error: 'Niveau de cuisson non disponible pour cette viande'
      });
    }

    // Convertir toutes les unités en unités standards (kg, cm, celsius)
    const weightInKg = weight ? UnitConverter.convertWeight(
      weight.value,
      weight.unit,
      'kg'
    ) : null;

    const thicknessInCm = dimensions?.thickness ? UnitConverter.convertDimension(
      dimensions.thickness,
      dimensions.unit,
      'cm'
    ) : null;

    const cookingTempInCelsius = cookingTemperature ? UnitConverter.convertTemperature(
      cookingTemperature.value,
      cookingTemperature.unit,
      'celsius'
    ) : method.cookingTemperature;

    // Calculer le temps de cuisson
    const result = CookingCalculator.calculateCookingTime({
      weight: weightInKg,
      thickness: thicknessInCm,
      cookingMethod: method.method,
      cookingTemperature: cookingTempInCelsius,
      targetCoreTemp: donenessInfo.coreTemperature,
      baseTimePerKg: method.baseTimePerKg,
      baseTimePerCm: method.baseTimePerCm,
      adjustmentFactor: method.adjustmentFactor,
      restingTime: method.restingTime
    });

    // Préparer la réponse avec conversion selon les préférences utilisateur
    const response = {
      calculation: result,
      meatInfo: {
        category: meat.category,
        name: meat.name,
        cut: cut.name
      },
      cookingInfo: {
        method: method.method,
        cookingTemperature: userPreferences?.temperatureUnit === 'fahrenheit' ?
          UnitConverter.convertTemperature(cookingTempInCelsius, 'celsius', 'fahrenheit') :
          cookingTempInCelsius,
        temperatureUnit: userPreferences?.temperatureUnit || 'celsius'
      },
      targetInfo: {
        doneness: targetDoneness,
        coreTemperature: userPreferences?.temperatureUnit === 'fahrenheit' ?
          UnitConverter.convertTemperature(donenessInfo.coreTemperature, 'celsius', 'fahrenheit') :
          donenessInfo.coreTemperature,
        temperatureUnit: userPreferences?.temperatureUnit || 'celsius',
        description: donenessInfo.description
      },
      recommendations: cut.recommendations
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/cooking/remaining-time
 * Calculer le temps restant pendant la cuisson
 */
router.post('/remaining-time', async (req, res) => {
  try {
    const { startTime, totalTime } = req.body;

    if (!startTime || !totalTime) {
      return res.status(400).json({
        error: 'startTime et totalTime sont requis'
      });
    }

    const result = CookingCalculator.getRemainingTime(
      new Date(startTime),
      totalTime
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/cooking/methods
 * Récupérer tous les modes de cuisson disponibles
 */
router.get('/methods', async (req, res) => {
  try {
    // Liste complète des modes de cuisson avec descriptions
    const methods = [
      {
        id: 'four_traditionnel',
        name: 'Four traditionnel',
        category: 'four',
        description: 'Cuisson au four avec chaleur statique'
      },
      {
        id: 'four_convection',
        name: 'Four à convection',
        category: 'four',
        description: 'Cuisson avec ventilation pour une chaleur uniforme'
      },
      {
        id: 'four_vapeur',
        name: 'Four vapeur',
        category: 'four',
        description: 'Cuisson à la vapeur pour conserver le moelleux'
      },
      {
        id: 'four_chaleur_tournante',
        name: 'Four chaleur tournante',
        category: 'four',
        description: 'Chaleur ventilée pour une cuisson homogène'
      },
      {
        id: 'poele',
        name: 'Poêle',
        category: 'poele_plancha',
        description: 'Cuisson à la poêle traditionnelle'
      },
      {
        id: 'plancha',
        name: 'Plancha',
        category: 'poele_plancha',
        description: 'Cuisson sur plaque chaude'
      },
      {
        id: 'wok',
        name: 'Wok',
        category: 'poele_plancha',
        description: 'Cuisson rapide à feu vif'
      },
      {
        id: 'sauteuse',
        name: 'Sauteuse',
        category: 'poele_plancha',
        description: 'Cuisson avec possibilité de sauce'
      },
      {
        id: 'grill',
        name: 'Grill',
        category: 'grillade',
        description: 'Cuisson au grill électrique ou gaz'
      },
      {
        id: 'barbecue_charbon',
        name: 'Barbecue au charbon',
        category: 'grillade',
        description: 'Cuisson traditionnelle au charbon de bois'
      },
      {
        id: 'barbecue_gaz',
        name: 'Barbecue au gaz',
        category: 'grillade',
        description: 'Barbecue avec contrôle précis de la température'
      },
      {
        id: 'barbecue_electrique',
        name: 'Barbecue électrique',
        category: 'grillade',
        description: 'Barbecue d\'intérieur ou extérieur électrique'
      },
      {
        id: 'salamandre',
        name: 'Salamandre',
        category: 'grillade',
        description: 'Grill professionnel avec chaleur par le dessus'
      },
      {
        id: 'cocotte',
        name: 'Cocotte',
        category: 'mijote',
        description: 'Cuisson lente en cocotte'
      },
      {
        id: 'mijoteuse',
        name: 'Mijoteuse',
        category: 'mijote',
        description: 'Cuisson très lente et douce'
      },
      {
        id: 'braisage',
        name: 'Braisage',
        category: 'mijote',
        description: 'Cuisson longue avec liquide'
      },
      {
        id: 'ragout',
        name: 'Ragoût',
        category: 'mijote',
        description: 'Cuisson en sauce mijotée'
      },
      {
        id: 'sous_vide',
        name: 'Sous-vide',
        category: 'basse_temperature',
        description: 'Cuisson sous vide à basse température'
      },
      {
        id: 'basse_temperature',
        name: 'Basse température',
        category: 'basse_temperature',
        description: 'Cuisson douce au four basse température'
      },
      {
        id: 'rotissoire',
        name: 'Rôtissoire',
        category: 'rotissage',
        description: 'Cuisson à la broche tournante'
      },
      {
        id: 'rotissoire_verticale',
        name: 'Rôtissoire verticale',
        category: 'rotissage',
        description: 'Cuisson verticale à la broche'
      },
      {
        id: 'vapeur',
        name: 'Vapeur',
        category: 'vapeur_humide',
        description: 'Cuisson à la vapeur'
      },
      {
        id: 'court_bouillon',
        name: 'Court-bouillon',
        category: 'vapeur_humide',
        description: 'Cuisson dans un bouillon aromatisé'
      },
      {
        id: 'pochage',
        name: 'Pochage',
        category: 'vapeur_humide',
        description: 'Cuisson douce dans un liquide frémissant'
      },
      {
        id: 'saisie',
        name: 'Saisie',
        category: 'rapide',
        description: 'Cuisson rapide à feu très vif'
      },
      {
        id: 'flambe',
        name: 'Flambé',
        category: 'rapide',
        description: 'Cuisson avec flambage'
      },
      {
        id: 'fumoir_chaud',
        name: 'Fumoir chaud',
        category: 'fumage',
        description: 'Fumage à chaud (60-90°C)'
      },
      {
        id: 'fumoir_froid',
        name: 'Fumoir froid',
        category: 'fumage',
        description: 'Fumage à froid (< 30°C)'
      },
      {
        id: 'air_fryer',
        name: 'Air fryer',
        category: 'special',
        description: 'Friteuse à air chaud'
      },
      {
        id: 'micro_ondes',
        name: 'Micro-ondes',
        category: 'special',
        description: 'Cuisson aux micro-ondes'
      },
      {
        id: 'pierre_chaude',
        name: 'Pierre chaude',
        category: 'special',
        description: 'Cuisson sur pierre volcanique chaude'
      },
      {
        id: 'tajine',
        name: 'Tajine',
        category: 'traditionnel',
        description: 'Cuisson traditionnelle en tajine'
      },
      {
        id: 'papillote',
        name: 'Papillote',
        category: 'traditionnel',
        description: 'Cuisson en papillote (aluminium ou papier)'
      },
      {
        id: 'croute_sel',
        name: 'Croûte de sel',
        category: 'traditionnel',
        description: 'Cuisson en croûte de sel'
      },
      {
        id: 'croute_argile',
        name: 'Croûte d\'argile',
        category: 'traditionnel',
        description: 'Cuisson en croûte d\'argile'
      },
      {
        id: 'plancha_professionnelle',
        name: 'Plancha professionnelle',
        category: 'professionnel',
        description: 'Plancha haute performance'
      },
      {
        id: 'grill_pierre_de_lave',
        name: 'Grill pierre de lave',
        category: 'professionnel',
        description: 'Grill avec pierres de lave'
      },
      {
        id: 'grill_salamandre',
        name: 'Grill salamandre',
        category: 'professionnel',
        description: 'Grill professionnel salamandre'
      }
    ];

    res.json(methods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
