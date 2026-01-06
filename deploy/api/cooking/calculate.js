// Vercel Serverless Function - POST /api/cooking/calculate
const meatData = require('../data/meatData.js');

function findMeatIndex(id) {
  const numId = parseInt(id);
  if (!isNaN(numId) && numId >= 1 && numId <= meatData.length) {
    return numId - 1;
  }
  return meatData.findIndex(m => m.category === id || m.name.toLowerCase() === id.toLowerCase());
}

const methodNames = {
  'poele': 'poêle',
  'grill': 'grill',
  'four_traditionnel': 'four traditionnel',
  'four_chaleur_tournante': 'four à chaleur tournante',
  'sous_vide': 'cuisson sous-vide',
  'barbecue_charbon': 'barbecue au charbon',
  'barbecue_gaz': 'barbecue au gaz',
  'plancha': 'plancha',
  'fumoir_chaud': 'fumoir chaud',
  'mijoteuse': 'mijoteuse',
  'cocotte': 'cocotte',
  'braisage': 'braisage',
  'rotissoire': 'rôtissoire',
  'salamandre': 'salamandre',
  'air_fryer': 'friteuse à air',
  'barbecue_basse_temp': 'barbecue basse température',
  'four_a_pain': 'four à pain',
  'four_basse_temperature': 'four basse température',
  'wok': 'wok'
};

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { meatId, subcategory, cutIndex, cutName, weight, thickness, doneness, method, cookingTemperature, initialTemp, hasBone } = req.body;

  if (!meatId || (cutIndex === undefined && !cutName) || !weight || !doneness || !method) {
    return res.status(400).json({ error: 'Paramètres manquants' });
  }

  const meatIndex = findMeatIndex(meatId);
  if (meatIndex < 0 || meatIndex >= meatData.length) {
    return res.status(404).json({ error: 'Viande non trouvée' });
  }

  const meat = meatData[meatIndex];
  let cut;

  if (cutName) {
    if (meat.cuts && meat.cuts.length > 0) {
      cut = meat.cuts.find(c => c.name === cutName);
    }
    if (!cut && meat.subcategories) {
      for (const subcatKey of Object.keys(meat.subcategories)) {
        const subcat = meat.subcategories[subcatKey];
        if (subcat && subcat.cuts) {
          cut = subcat.cuts.find(c => c.name === cutName);
          if (cut) break;
        }
      }
    }
  } else {
    if (meat.subcategories) {
      if (!subcategory || !meat.subcategories[subcategory]) {
        return res.status(400).json({ error: 'Sous-catégorie requise (classique ou boucher)' });
      }
      cut = meat.subcategories[subcategory].cuts[cutIndex];
    } else {
      cut = meat.cuts[cutIndex];
    }
  }

  if (!cut) {
    return res.status(404).json({ error: 'Morceau non trouvé' });
  }

  const tempData = cut.temperatures.find(t => t.doneness === doneness);
  if (!tempData) {
    return res.status(400).json({ error: 'Niveau de cuisson non disponible pour ce morceau' });
  }

  const cookingMethod = cut.cookingMethods.find(m => m.method === method);
  if (!cookingMethod) {
    return res.status(400).json({ error: 'Méthode de cuisson non disponible pour ce morceau' });
  }

  let cookingTimeMinutes = (cookingMethod.baseTimePerKg * weight) +
                           (cookingMethod.baseTimePerCm * thickness);

  cookingTimeMinutes *= cookingMethod.adjustmentFactor;

  if (cookingTemperature && cookingMethod.temperatureRange) {
    const recommendedTemp = cookingMethod.temperatureRange.recommended;
    const temperatureDifference = cookingTemperature - recommendedTemp;
    const temperatureAdjustmentFactor = 1 - (temperatureDifference * 0.12 / 10);
    cookingTimeMinutes *= temperatureAdjustmentFactor;
  }

  if (initialTemp < 15) {
    cookingTimeMinutes *= 1.18;
  }

  if (hasBone) {
    cookingTimeMinutes *= 1.1;
  }

  cookingTimeMinutes = Math.round(cookingTimeMinutes);

  const selectedCookingTemp = cookingTemperature || cookingMethod.temperatureRange.recommended;

  const instructions = [
    initialTemp < 15
      ? 'Sortir la viande du réfrigérateur 30-45 minutes avant la cuisson'
      : 'Viande déjà à température ambiante - parfait pour commencer',
    `Préchauffer votre ${methodNames[method] || method} à ${selectedCookingTemp}°C`,
    method.includes('four')
      ? 'Placer la viande dans un plat adapté'
      : 'Saisir la viande sur toutes les faces pour créer une belle croûte',
    method === 'sous_vide'
      ? `Cuire pendant ${cookingTimeMinutes} minutes dans le bain-marie`
      : `Cuire pendant environ ${cookingTimeMinutes} minutes`,
    `Vérifier la température à cœur: elle doit atteindre ${tempData.coreTemperature}°C`,
    tempData.safetyTemperature
      ? `Pour la sécurité alimentaire, viser ${tempData.safetyTemperature}°C`
      : 'Attention: cette cuisson est en dessous des normes de sécurité EU',
    `Laisser reposer ${cookingMethod.restingTime} minutes avant de servir`,
    'La température va continuer de monter de 2-3°C pendant le repos'
  ];

  const tips = [];
  if (cut.recommendations) {
    tips.push(cut.recommendations);
  }
  if (cookingMethod.restingTime > 5) {
    tips.push(`Le repos est essentiel: ne sautez pas les ${cookingMethod.restingTime} minutes de repos !`);
  }
  if (method === 'sous_vide') {
    tips.push('La cuisson sous-vide garantit une cuisson parfaitement uniforme.');
  }
  if (hasBone) {
    tips.push('La viande avec os est plus savoureuse mais nécessite un temps de cuisson légèrement plus long.');
  }

  res.status(200).json({
    meatName: meat.name,
    cutName: cut.name,
    cutData: {
      recommendations: cut.recommendations,
      description: cut.description
    },
    calculation: {
      cookingTime: cookingTimeMinutes,
      cookingTimeMinutes,
      targetTemperature: tempData.coreTemperature,
      safetyTemperature: tempData.safetyTemperature || tempData.coreTemperature,
      cookingTemperature: selectedCookingTemp,
      restingTime: cookingMethod.restingTime,
      restingTimeMinutes: cookingMethod.restingTime,
      doneness: tempData.doneness,
      method: methodNames[method] || method,
      instructions,
      tips
    }
  });
};
