require('dotenv').config();
const mongoose = require('mongoose');
const { Meat, CookingAppliance, CookingMethod } = require('../models/MeatV2');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meat-cooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// APPAREILS DE CUISSON (séparés des méthodes)
const appliances = [
  // FOURS
  {
    name: 'Four traditionnel',
    nameEn: 'Traditional oven',
    category: 'four',
    description: 'Four standard avec résistances haut et bas - basse température possible',
    temperatureRange: { min: 38, max: 280 },
    hasTemperatureControl: true,
    canDoIndirectHeat: true,
    adjustmentFactor: 1.0
  },
  {
    name: 'Four à convection / chaleur tournante',
    nameEn: 'Convection oven',
    category: 'four',
    description: 'Four avec ventilateur pour circulation d\'air - basse température possible',
    temperatureRange: { min: 38, max: 280 },
    hasTemperatureControl: true,
    canDoIndirectHeat: true,
    adjustmentFactor: 0.9
  },
  {
    name: 'Four vapeur',
    nameEn: 'Steam oven',
    category: 'four',
    description: 'Four avec injection de vapeur',
    temperatureRange: { min: 60, max: 100 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 1.2
  },

  // BBQ / GRILLS
  {
    name: 'Barbecue au charbon',
    nameEn: 'Charcoal BBQ',
    category: 'bbq_grill',
    description: 'BBQ traditionnel au charbon de bois - température contrôlable 70-270°C',
    temperatureRange: { min: 70, max: 270 },
    hasTemperatureControl: true,
    canDoIndirectHeat: true,
    canDoSmoke: true,
    adjustmentFactor: 0.95
  },
  {
    name: 'Barbecue au gaz',
    nameEn: 'Gas BBQ',
    category: 'bbq_grill',
    description: 'BBQ au gaz avec contrôle précis de température',
    temperatureRange: { min: 80, max: 280 },
    hasTemperatureControl: true,
    canDoIndirectHeat: true,
    canDoSmoke: true,
    adjustmentFactor: 1.0
  },
  {
    name: 'Barbecue électrique',
    nameEn: 'Electric BBQ',
    category: 'bbq_grill',
    description: 'BBQ électrique avec thermostat',
    temperatureRange: { min: 100, max: 250 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 1.0
  },
  {
    name: 'Plancha',
    nameEn: 'Griddle',
    category: 'plaque_cuisson',
    description: 'Plaque de cuisson chauffante',
    temperatureRange: { min: 150, max: 300 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 0.95
  },

  // FUMOIRS
  {
    name: 'Fumoir chaud',
    nameEn: 'Hot smoker',
    category: 'fumoir',
    description: 'Fumoir pour cuisson lente avec fumée - basse température',
    temperatureRange: { min: 70, max: 150 },
    hasTemperatureControl: true,
    canDoIndirectHeat: true,
    canDoSmoke: true,
    adjustmentFactor: 2.0
  },
  {
    name: 'Fumoir froid',
    nameEn: 'Cold smoker',
    category: 'fumoir',
    description: 'Fumoir pour fumage à froid (saumon, etc.)',
    temperatureRange: { min: 15, max: 30 },
    hasTemperatureControl: false,
    canDoIndirectHeat: true,
    canDoSmoke: true,
    adjustmentFactor: 5.0
  },

  // PLAQUES DE CUISSON
  {
    name: 'Poêle',
    nameEn: 'Pan',
    category: 'plaque_cuisson',
    description: 'Poêle traditionnelle sur feu',
    temperatureRange: { min: 100, max: 250 },
    hasTemperatureControl: false,
    canDoIndirectHeat: false,
    adjustmentFactor: 1.0
  },
  {
    name: 'Wok',
    nameEn: 'Wok',
    category: 'plaque_cuisson',
    description: 'Wok pour cuisson rapide à haute température',
    temperatureRange: { min: 150, max: 300 },
    hasTemperatureControl: false,
    canDoIndirectHeat: false,
    adjustmentFactor: 0.8
  },

  // MIJOTEUSES
  {
    name: 'Cocotte / Mijoteuse électrique',
    nameEn: 'Slow cooker',
    category: 'mijoteuse',
    description: 'Cuisson lente et douce',
    temperatureRange: { min: 70, max: 100 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 2.5
  },

  // SPÉCIAUX
  {
    name: 'Sous-vide',
    nameEn: 'Sous-vide',
    category: 'special',
    description: 'Cuisson sous-vide à température précise',
    temperatureRange: { min: 40, max: 85 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 3.0
  },
  {
    name: 'Air Fryer / Friteuse à air',
    nameEn: 'Air fryer',
    category: 'special',
    description: 'Cuisson à air chaud pulsé',
    temperatureRange: { min: 80, max: 200 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 0.8
  },
  {
    name: 'Rôtissoire',
    nameEn: 'Rotisserie',
    category: 'special',
    description: 'Rotation automatique pour rôtissage',
    temperatureRange: { min: 150, max: 250 },
    hasTemperatureControl: true,
    canDoIndirectHeat: false,
    adjustmentFactor: 1.1
  }
];

// MÉTHODES DE CUISSON (séparées des appareils)
const methods = [
  // MÉTHODES DIRECTES
  {
    name: 'Cuisson directe (saisie)',
    nameEn: 'Direct heat (searing)',
    category: 'direct',
    description: 'Cuisson directe à haute température pour saisir',
    recommendedTempRange: { min: 200, max: 280 },
    adjustmentFactor: 0.8,
    typicalRestingTime: 5
  },
  {
    name: 'Grillage direct',
    nameEn: 'Direct grilling',
    category: 'direct',
    description: 'Grillage direct sur la source de chaleur',
    recommendedTempRange: { min: 180, max: 250 },
    adjustmentFactor: 0.9,
    typicalRestingTime: 5
  },

  // MÉTHODES INDIRECTES
  {
    name: 'Cuisson indirecte',
    nameEn: 'Indirect heat',
    category: 'indirect',
    description: 'Cuisson sans contact direct avec la source de chaleur',
    recommendedTempRange: { min: 120, max: 200 },
    adjustmentFactor: 1.3,
    typicalRestingTime: 10
  },
  {
    name: 'Rôtissage',
    nameEn: 'Roasting',
    category: 'indirect',
    description: 'Cuisson au four chaleur sèche',
    recommendedTempRange: { min: 150, max: 220 },
    adjustmentFactor: 1.2,
    typicalRestingTime: 10
  },

  // MÉTHODES MIXTES
  {
    name: 'Saisir puis finir (reverse sear inversé)',
    nameEn: 'Sear then finish',
    category: 'mixte',
    description: 'Saisie rapide puis cuisson douce',
    recommendedTempRange: { min: 120, max: 250 },
    adjustmentFactor: 1.1,
    typicalRestingTime: 7
  },
  {
    name: 'Cuisson douce puis saisie (reverse sear)',
    nameEn: 'Reverse sear',
    category: 'mixte',
    description: 'Cuisson basse température puis saisie finale',
    recommendedTempRange: { min: 80, max: 250 },
    adjustmentFactor: 1.4,
    typicalRestingTime: 5
  },

  // BASSE TEMPÉRATURE
  {
    name: 'Basse température (70-90°C)',
    nameEn: 'Low temperature',
    category: 'basse_temperature',
    description: 'Cuisson longue à basse température',
    recommendedTempRange: { min: 70, max: 90 },
    adjustmentFactor: 2.5,
    typicalRestingTime: 10
  },
  {
    name: 'Très basse température (50-70°C)',
    nameEn: 'Very low temperature',
    category: 'basse_temperature',
    description: 'Cuisson ultra-lente à très basse température',
    recommendedTempRange: { min: 50, max: 70 },
    adjustmentFactor: 3.5,
    typicalRestingTime: 5
  },
  {
    name: 'Ultra basse température (38-50°C)',
    nameEn: 'Ultra low temperature',
    category: 'basse_temperature',
    description: 'Cuisson extrêmement lente - Pour passionnés de basse température - Idéal avant reverse sear',
    recommendedTempRange: { min: 38, max: 50 },
    adjustmentFactor: 4.5,
    typicalRestingTime: 3
  },

  // HUMIDE
  {
    name: 'Braisage',
    nameEn: 'Braising',
    category: 'humide',
    description: 'Cuisson lente dans liquide',
    recommendedTempRange: { min: 140, max: 180 },
    adjustmentFactor: 2.0,
    typicalRestingTime: 10
  },
  {
    name: 'Pochage',
    nameEn: 'Poaching',
    category: 'humide',
    description: 'Cuisson dans liquide frémissant',
    recommendedTempRange: { min: 70, max: 90 },
    adjustmentFactor: 1.5,
    typicalRestingTime: 3
  },

  // FUMAGE
  {
    name: 'Fumage à chaud',
    nameEn: 'Hot smoking',
    category: 'fumage',
    description: 'Cuisson avec fumée à température moyenne',
    recommendedTempRange: { min: 100, max: 140 },
    adjustmentFactor: 2.5,
    typicalRestingTime: 15
  },
  {
    name: 'Fumage à froid',
    nameEn: 'Cold smoking',
    category: 'fumage',
    description: 'Fumage sans cuisson (conservation)',
    recommendedTempRange: { min: 15, max: 30 },
    adjustmentFactor: 10.0,
    typicalRestingTime: 0
  },

  // SOUS-VIDE
  {
    name: 'Sous-vide',
    nameEn: 'Sous-vide',
    category: 'sous_vide',
    description: 'Cuisson sous vide à température précise',
    recommendedTempRange: { min: 48, max: 85 },
    adjustmentFactor: 3.0,
    typicalRestingTime: 2
  }
];

// TOUS LES MORCEAUX DE BŒUF (liste complète)
const beefCuts = [
  // MORCEAUX NOBLES / TENDRES
  {
    name: 'Filet',
    nameEn: 'Tenderloin',
    alternativeNames: ['Filet mignon', 'Tournedos', 'Chateaubriand'],
    description: 'Morceau le plus tendre du bœuf, très maigre',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill', 'rôti'],
    recommendations: 'Cuisson rapide recommandée. Idéal saignant à point.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'bleu', coreTemperature: 40, safetyTemperature: null, safetyNote: 'Non recommandé', description: 'Rouge froid au centre', restingTime: 5 },
      { doneness: 'saignant', coreTemperature: 44, safetyTemperature: 52, description: 'Rouge tiède au centre', restingTime: 5 },
      { doneness: 'à point', coreTemperature: 52, safetyTemperature: 57, description: 'Rosé au centre', restingTime: 7 },
      { doneness: 'bien cuit', coreTemperature: 60, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 10 },
      { doneness: 'très bien cuit', coreTemperature: 67, safetyTemperature: 70, description: 'Pas de rose', restingTime: 10 }
    ]
  },
  {
    name: 'Faux-filet',
    nameEn: 'Ribeye / Rib steak',
    alternativeNames: ['Entrecôte'],
    description: 'Morceau persillé et savoureux, tendre - sans os',
    tenderness: 'très_tendre',
    fatContent: 'persillé',
    bestUses: ['grill', 'poêle', 'plancha'],
    recommendations: 'Le persillage apporte saveur et tendreté. Excellent grillé.',
    baseTimePerKg: 18,
    baseTimePerCm: 3.5,
    temperatures: [
      { doneness: 'bleu', coreTemperature: 40, safetyTemperature: null, safetyNote: 'Non recommandé', description: 'Rouge froid au centre', restingTime: 5 },
      { doneness: 'saignant', coreTemperature: 44, safetyTemperature: 52, description: 'Rouge tiède au centre', restingTime: 5 },
      { doneness: 'à point', coreTemperature: 52, safetyTemperature: 57, description: 'Rosé au centre', restingTime: 7 },
      { doneness: 'bien cuit', coreTemperature: 60, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 10 },
      { doneness: 'très bien cuit', coreTemperature: 67, safetyTemperature: 70, description: 'Pas de rose', restingTime: 10 }
    ]
  },
  {
    name: 'Côte de bœuf',
    nameEn: 'Bone-in ribeye / Cowboy steak',
    alternativeNames: ['Côte à l\'os', 'Tomahawk (avec manche)', 'Cowboy steak'],
    description: 'Faux-filet avec os - pièce majestueuse et savoureuse. L\'os apporte saveur et présentation spectaculaire.',
    tenderness: 'très_tendre',
    fatContent: 'persillé',
    typicalWeight: { min: 0.8, max: 1.5, unit: 'kg' },
    typicalDimensions: { length: 25, width: 12, height: 5, unit: 'cm' },
    bestUses: ['grill', 'four', 'barbecue'],
    recommendations: 'Pièce de prestige. L\'os protège la viande et ajoute de la saveur. Temps de repos important. Parfait pour 2 personnes.',
    baseTimePerKg: 22,
    baseTimePerCm: 4.5,
    temperatures: [
      { doneness: 'bleu', coreTemperature: 40, safetyTemperature: null, safetyNote: 'Non recommandé', description: 'Rouge froid au centre', restingTime: 15 },
      { doneness: 'saignant', coreTemperature: 46, safetyTemperature: 52, description: 'Rouge tiède, juteux', restingTime: 18 },
      { doneness: 'à point', coreTemperature: 54, safetyTemperature: 57, description: 'Rosé au centre, idéal', restingTime: 20 },
      { doneness: 'bien cuit', coreTemperature: 62, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 22 },
      { doneness: 'très bien cuit', coreTemperature: 68, safetyTemperature: 70, description: 'Pas de rose', restingTime: 25 }
    ]
  },
  {
    name: 'Rumsteak',
    nameEn: 'Rump steak',
    alternativeNames: ['Culotte'],
    description: 'Morceau tendre de la croupe, bon goût',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['grill', 'poêle', 'rôti'],
    recommendations: 'Bon rapport qualité/tendreté. Polyvalent.',
    baseTimePerKg: 20,
    baseTimePerCm: 4,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 44, safetyTemperature: 52, description: 'Rouge tiède au centre', restingTime: 5 },
      { doneness: 'à point', coreTemperature: 52, safetyTemperature: 57, description: 'Rosé au centre', restingTime: 7 },
      { doneness: 'bien cuit', coreTemperature: 60, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 10 }
    ]
  },

  // MORCEAUX À GRILLER
  {
    name: 'Bavette d\'aloyau',
    nameEn: 'Flank steak',
    alternativeNames: ['Bavette de flanchet'],
    description: 'Morceau goûteux à fibres longues',
    tenderness: 'moyennement_tendre',
    fatContent: 'maigre',
    bestUses: ['grill', 'plancha', 'sauté'],
    recommendations: 'Découper perpendiculairement aux fibres. Excellent mariné.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, description: 'Rouge vif' },
      { doneness: 'à point', coreTemperature: 54, description: 'Rosé' },
      { doneness: 'bien cuit', coreTemperature: 60, description: 'Attention à ne pas trop cuire' }
    ]
  },
  {
    name: 'Onglet',
    nameEn: 'Hanger steak',
    alternativeNames: ['Hampe'],
    description: 'Morceau très goûteux du diaphragme',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['grill', 'poêle', 'plancha'],
    recommendations: 'Un des morceaux les plus savoureux. Ne pas trop cuire.',
    baseTimePerKg: 12,
    baseTimePerCm: 2.5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, description: 'Rouge vif, idéal' },
      { doneness: 'à point', coreTemperature: 54, description: 'Rosé' }
    ]
  },
  {
    name: 'Araignée',
    nameEn: 'Spider steak',
    description: 'Petit morceau rare et très tendre de la poire',
    tenderness: 'très_tendre',
    fatContent: 'moyen',
    bestUses: ['poêle', 'plancha'],
    recommendations: 'Morceau rare et recherché. Cuisson rapide.',
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, description: 'Rouge vif' },
      { doneness: 'à point', coreTemperature: 54, description: 'Rosé' }
    ]
  },
  {
    name: 'Poire',
    nameEn: 'Pear steak',
    alternativeNames: ['Merlan'],
    description: 'Petit morceau tendre proche de l\'araignée',
    tenderness: 'très_tendre',
    fatContent: 'moyen',
    bestUses: ['poêle', 'plancha'],
    recommendations: 'Morceau délicat. Cuisson courte.',
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, description: 'Rouge vif' },
      { doneness: 'à point', coreTemperature: 54, description: 'Rosé' }
    ]
  },

  // MORCEAUX À BRAISER / MIJOTER
  {
    name: 'Paleron',
    nameEn: 'Chuck',
    alternativeNames: ['Macreuse à pot-au-feu'],
    description: 'Morceau gélatineux pour cuisson longue',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['braisage', 'pot-au-feu', 'bourguignon'],
    recommendations: 'Excellent pour cuisson longue. Devient très tendre.',
    baseTimePerKg: 60,
    baseTimePerCm: 10,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 85, description: 'Fondant, effiloché' }
    ]
  },
  {
    name: 'Joue de bœuf',
    nameEn: 'Beef cheek',
    description: 'Morceau très gélatineux pour braisage',
    tenderness: 'très_ferme',
    fatContent: 'moyen',
    bestUses: ['braisage', 'cuisson longue'],
    recommendations: 'Devient extrêmement tendre après cuisson longue.',
    baseTimePerKg: 90,
    baseTimePerCm: 15,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 90, description: 'Fondant' }
    ]
  },
  {
    name: 'Queue de bœuf',
    nameEn: 'Oxtail',
    description: 'Morceau gélatineux pour soupes et ragoûts',
    tenderness: 'très_ferme',
    fatContent: 'gras',
    bestUses: ['braisage', 'soupe', 'pot-au-feu'],
    recommendations: 'Cuisson très longue nécessaire. Très savoureux.',
    baseTimePerKg: 120,
    baseTimePerCm: 20,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 92, description: 'Chair se détache de l\'os' }
    ]
  },
  {
    name: 'Gîte',
    nameEn: 'Shank',
    alternativeNames: ['Jarret'],
    description: 'Morceau du bas de la patte, gélatineux',
    tenderness: 'très_ferme',
    fatContent: 'maigre',
    bestUses: ['braisage', 'pot-au-feu', 'osso buco'],
    recommendations: 'Cuisson très longue. Excellent en osso buco.',
    baseTimePerKg: 90,
    baseTimePerCm: 15,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 88, description: 'Très tendre' }
    ]
  },
  {
    name: 'Plat de côtes',
    nameEn: 'Short ribs',
    alternativeNames: ['Basses-côtes'],
    description: 'Côtes avec viande entrelardée',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['braisage', 'barbecue basse température'],
    recommendations: 'Excellent braisé ou cuit lentement au BBQ.',
    baseTimePerKg: 80,
    baseTimePerCm: 12,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 88, description: 'Chair se détache' }
    ]
  },

  // MORCEAUX POUR RÔTIS
  {
    name: 'Rosbif (tende de tranche)',
    nameEn: 'Roast beef',
    description: 'Morceau maigre pour rôtir',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['rôti'],
    recommendations: 'Classique pour le rosbif anglais.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 50, description: 'Rouge tiède' },
      { doneness: 'à point', coreTemperature: 55, description: 'Rosé' },
      { doneness: 'bien cuit', coreTemperature: 62, description: 'Légèrement rosé' }
    ]
  },

  // MORCEAUX BBQ AMÉRICAIN
  {
    name: 'Brisket (poitrine)',
    nameEn: 'Brisket',
    description: 'Morceau pour BBQ low & slow, fumage',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['fumage', 'barbecue basse température'],
    recommendations: 'Cuisson très longue à 100-120°C. Spécialité BBQ texan.',
    baseTimePerKg: 180,
    baseTimePerCm: 25,
    temperatures: [
      { doneness: 'très bien cuit', coreTemperature: 92, description: 'Fondant, effiloché' }
    ]
  },
  {
    name: 'Tri-tip',
    nameEn: 'Tri-tip',
    description: 'Morceau de la pointe de surlonge, spécialité californienne',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['grill', 'rôti', 'fumage'],
    recommendations: 'Polyvalent. Peut être cuit entier ou tranché.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 50, description: 'Rouge tiède' },
      { doneness: 'à point', coreTemperature: 55, description: 'Rosé' },
      { doneness: 'bien cuit', coreTemperature: 62, description: 'Légèrement rosé' }
    ]
  },
  {
    name: 'Côtes levées de bœuf (Beef ribs)',
    nameEn: 'Beef ribs',
    alternativeNames: ['Dino ribs'],
    description: 'Grosses côtes pour BBQ',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['fumage', 'barbecue basse température'],
    recommendations: 'Cuisson longue à 110-130°C avec fumée.',
    baseTimePerKg: 150,
    baseTimePerCm: 20,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 88, description: 'Chair se détache de l\'os' }
    ]
  },

  // MORCEAUX À HACHER
  {
    name: 'Viande hachée de bœuf',
    nameEn: 'Ground beef',
    alternativeNames: ['Steak haché', 'Haché'],
    description: 'Viande hachée pour burgers, steaks hachés',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['poêle', 'plancha', 'grill'],
    recommendations: 'OBLIGATOIRE: cuire à 71°C minimum pour sécurité',
    baseTimePerKg: 20,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, safetyNote: 'Obligatoire', description: 'Pas de rose - OBLIGATOIRE sécurité', restingTime: 3 }
    ]
  },

  // AUTRES MORCEAUX
  {
    name: 'Aiguillette baronne',
    nameEn: 'Top sirloin cap',
    description: 'Morceau tendre du rumsteck',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['poêle', 'grill'],
    recommendations: 'Cuisson rapide.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 50, description: 'Rouge tiède' },
      { doneness: 'à point', coreTemperature: 55, description: 'Rosé' }
    ]
  },
  {
    name: 'Rond de gîte',
    nameEn: 'Eye of round',
    description: 'Morceau maigre pour rôtir ou braiser',
    tenderness: 'moyennement_tendre',
    fatContent: 'très_maigre',
    bestUses: ['rôti', 'bœuf en croûte'],
    recommendations: 'Attention à ne pas dessécher. Basse température recommandée.',
    baseTimePerKg: 30,
    baseTimePerCm: 6,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 50, description: 'Rouge tiède' },
      { doneness: 'à point', coreTemperature: 55, description: 'Rosé' }
    ]
  },
  {
    name: 'Tende de tranche',
    nameEn: 'Top round',
    description: 'Morceau maigre pour rosbif ou fondue',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['rôti', 'fondue', 'carpaccio'],
    recommendations: 'Idéal pour rosbif froid ou fondue bourguignonne.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 50, description: 'Rouge tiède' },
      { doneness: 'à point', coreTemperature: 55, description: 'Rosé' }
    ]
  },
  {
    name: 'Macreuse',
    nameEn: 'Blade steak',
    alternativeNames: ['Palette'],
    description: 'Morceau savoureux pour braiser',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['braisage', 'pot-au-feu'],
    recommendations: 'Excellent pour bœuf bourguignon.',
    baseTimePerKg: 70,
    baseTimePerCm: 12,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 85, description: 'Fondant' }
    ]
  }
];

// MORCEAUX DE PORC
const porkCuts = [
  {
    name: 'Filet mignon de porc',
    nameEn: 'Pork tenderloin',
    description: 'Morceau le plus tendre du porc, très maigre',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'rôti', 'grill'],
    recommendations: 'Cuisson rapide recommandée. Peut être servi rosé.',
    baseTimePerKg: 18,
    baseTimePerCm: 4,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 60, safetyTemperature: 63, safetyNote: '3 min à 63°C ou 71°C', description: 'Rose pâle tendre', restingTime: 5 }
    ]
  },
  {
    name: 'Côtelettes de porc',
    nameEn: 'Pork chops',
    description: 'Côtelettes avec ou sans os',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['poêle', 'grill', 'plancha'],
    recommendations: 'Excellentes grillées. Ne pas trop cuire.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'à peine rosé', coreTemperature: 62, safetyTemperature: 63, safetyNote: '3 min à 63°C ou 71°C', description: 'À peine rosé', restingTime: 4 }
    ]
  },
  {
    name: 'Rôti de porc',
    nameEn: 'Pork roast',
    description: 'Rôti de longe ou d\'épaule',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['rôti', 'four'],
    recommendations: 'Excellent au four. Laisser reposer.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'juteux', coreTemperature: 64, safetyTemperature: 71, description: 'Juteux', restingTime: 10 }
    ]
  },
  {
    name: 'Échine de porc',
    nameEn: 'Pork collar',
    description: 'Morceau persillé du cou',
    tenderness: 'tendre',
    fatContent: 'persillé',
    bestUses: ['rôti', 'grill', 'braisage'],
    recommendations: 'Très savoureux grâce au persillage.',
    baseTimePerKg: 30,
    baseTimePerCm: 6,
    temperatures: [
      { doneness: 'moelleux', coreTemperature: 66, safetyTemperature: 71, description: 'Moelleux', restingTime: 6 }
    ]
  },
  {
    name: 'Épaule de porc (pulled pork)',
    nameEn: 'Pork shoulder',
    description: 'Pour cuisson longue et effilochage',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['fumage', 'braisage', 'barbecue basse température'],
    recommendations: 'Cuisson très longue à basse température. Spécialité BBQ.',
    baseTimePerKg: 180,
    baseTimePerCm: 30,
    temperatures: [
      { doneness: 'effiloché', coreTemperature: 90, safetyTemperature: 71, description: 'Très tendre, effiloché', restingTime: 15 }
    ]
  },
  {
    name: 'Travers de porc (ribs)',
    nameEn: 'Pork ribs',
    description: 'Côtes levées pour BBQ',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['fumage', 'barbecue', 'four'],
    recommendations: 'Excellentes au BBQ avec sauce. Cuisson longue.',
    baseTimePerKg: 120,
    baseTimePerCm: 20,
    temperatures: [
      { doneness: 'tendre', coreTemperature: 85, safetyTemperature: 71, description: 'Chair se détache', restingTime: 10 }
    ]
  }
];

// SAUCISSES (nouvelle catégorie séparée)
const sausageCuts = [
  {
    name: 'Merguez',
    nameEn: 'Merguez sausage',
    description: 'Saucisse épicée à base d\'agneau et/ou bœuf',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['grill', 'barbecue', 'poêle', 'plancha'],
    recommendations: 'Bien cuire à feu moyen. Éviter de percer pour garder le jus.',
    typicalDimensions: {
      length: 12,
      width: 2,
      height: 2,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.04,
      max: 0.06,
      unit: 'kg'
    },
    baseTimePerKg: 12,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Bien cuit, juteux', restingTime: 2 }
    ]
  },
  {
    name: 'Chipolata',
    nameEn: 'Chipolata sausage',
    description: 'Petite saucisse fine de porc',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['grill', 'poêle', 'barbecue', 'four'],
    recommendations: 'Cuisson à feu doux pour éviter d\'éclater. Parfaite pour accompagnements.',
    typicalDimensions: {
      length: 10,
      width: 1.5,
      height: 1.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.025,
      max: 0.035,
      unit: 'kg'
    },
    baseTimePerKg: 10,
    baseTimePerCm: 1.5,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Bien cuit, doré', restingTime: 2 }
    ]
  },
  {
    name: 'Saucisse de Toulouse',
    nameEn: 'Toulouse sausage',
    description: 'Saucisse fraîche de porc nature',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['poêle', 'grill', 'cassoulet', 'braisage'],
    recommendations: 'Cuisson douce. Excellente dans le cassoulet ou poêlée.',
    typicalDimensions: {
      length: 15,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.08,
      max: 0.12,
      unit: 'kg'
    },
    baseTimePerKg: 15,
    baseTimePerCm: 2.5,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Bien cuit, moelleux', restingTime: 3 }
    ]
  },
  {
    name: 'Saucisse de Montbéliard',
    nameEn: 'Montbéliard sausage',
    description: 'Saucisse fumée IGP du Jura',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['pochage', 'poêle', 'choucroute'],
    recommendations: 'Précuite fumée. Réchauffer doucement ou pocher.',
    typicalDimensions: {
      length: 18,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.12,
      max: 0.16,
      unit: 'kg'
    },
    baseTimePerKg: 12,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Bien chaud', restingTime: 2 }
    ]
  },
  {
    name: 'Saucisse de Strasbourg',
    nameEn: 'Strasbourg sausage',
    description: 'Saucisse fumée fine type knack',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['pochage', 'eau chaude', 'grill'],
    recommendations: 'Précuite. Chauffer dans l\'eau frémissante sans bouillir.',
    typicalDimensions: {
      length: 15,
      width: 2,
      height: 2,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.05,
      max: 0.07,
      unit: 'kg'
    },
    baseTimePerKg: 8,
    baseTimePerCm: 1.5,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Bien chaud', restingTime: 1 }
    ]
  },
  {
    name: 'Saucisse de Morteau',
    nameEn: 'Morteau sausage',
    description: 'Saucisse fumée IGP du Haut-Doubs',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['pochage', 'court_bouillon', 'potée'],
    recommendations: 'Saucisse fumée au tuyé. Pocher 20-30 min dans l\'eau frémissante.',
    typicalDimensions: {
      length: 25,
      width: 3.5,
      height: 3.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.25,
      max: 0.35,
      unit: 'kg'
    },
    baseTimePerKg: 20,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Bien chaud, fondant', restingTime: 3 }
    ]
  },
  {
    name: 'Andouillette',
    nameEn: 'Andouillette',
    description: 'Saucisse de chaudins de porc',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['grill', 'poêle', 'four'],
    recommendations: 'Griller doucement. Amateur de goûts forts.',
    typicalDimensions: {
      length: 15,
      width: 3,
      height: 3,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.15,
      max: 0.2,
      unit: 'kg'
    },
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Dorée, croustillante', restingTime: 2 }
    ]
  },
  {
    name: 'Cervelas',
    nameEn: 'Cervelas',
    description: 'Grosse saucisse cuite, souvent pistachée',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['pochage', 'grill', 'poêle'],
    recommendations: 'Précuite. Réchauffer à l\'eau ou griller légèrement.',
    typicalDimensions: {
      length: 20,
      width: 4,
      height: 4,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.3,
      max: 0.4,
      unit: 'kg'
    },
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Bien chaud', restingTime: 2 }
    ]
  },
  {
    name: 'Chorizo frais',
    nameEn: 'Fresh chorizo',
    description: 'Saucisse espagnole épicée au pimentón',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['grill', 'poêle', 'plancha', 'barbecue'],
    recommendations: 'Bien cuire. Délicieux grillé ou poêlé.',
    typicalDimensions: {
      length: 12,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.08,
      max: 0.12,
      unit: 'kg'
    },
    baseTimePerKg: 12,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Bien cuit, huileux', restingTime: 2 }
    ]
  },
  {
    name: 'Boudin blanc',
    nameEn: 'White pudding',
    description: 'Saucisse blanche délicate à base de viande blanche',
    tenderness: 'très_tendre',
    fatContent: 'gras',
    bestUses: ['poêle', 'four'],
    recommendations: 'Cuisson très douce pour ne pas éclater. Fragile.',
    typicalDimensions: {
      length: 15,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.1,
      max: 0.15,
      unit: 'kg'
    },
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Doré, moelleux', restingTime: 2 }
    ]
  },
  {
    name: 'Boudin noir',
    nameEn: 'Blood sausage',
    description: 'Saucisse au sang de porc',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['poêle', 'four', 'grill'],
    recommendations: 'Cuisson douce. Ne pas percer. Délicieux avec pommes poêlées.',
    typicalDimensions: {
      length: 15,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.1,
      max: 0.15,
      unit: 'kg'
    },
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'chaud', coreTemperature: 68, safetyTemperature: 71, description: 'Chaud, croustillant dehors', restingTime: 2 }
    ]
  },
  {
    name: 'Saucisse italienne',
    nameEn: 'Italian sausage',
    description: 'Saucisse fraîche épicée aux herbes italiennes',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['grill', 'poêle', 'four', 'sauce tomate'],
    recommendations: 'Excellente grillée ou dans les pâtes. Bien cuire.',
    typicalDimensions: {
      length: 15,
      width: 2.5,
      height: 2.5,
      unit: 'cm'
    },
    typicalWeight: {
      min: 0.08,
      max: 0.12,
      unit: 'kg'
    },
    baseTimePerKg: 12,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, description: 'Bien cuit, juteux', restingTime: 2 }
    ]
  }
];

// MORCEAUX D'AGNEAU
const lambCuts = [
  {
    name: 'Côtelettes d\'agneau',
    nameEn: 'Lamb chops',
    description: 'Côtelettes tendres et savoureuses',
    tenderness: 'très_tendre',
    fatContent: 'moyen',
    bestUses: ['grill', 'poêle', 'plancha'],
    recommendations: 'Excellentes grillées. Idéales rosées.',
    baseTimePerKg: 12,
    baseTimePerCm: 2.5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 45, safetyTemperature: 52, description: 'Rouge vif', restingTime: 5 },
      { doneness: 'rosé', coreTemperature: 50, safetyTemperature: 57, description: 'Rose tendre', restingTime: 7 },
      { doneness: 'à point', coreTemperature: 57, safetyTemperature: 62, description: 'Rose pâle', restingTime: 10 },
      { doneness: 'bien cuit', coreTemperature: 66, safetyTemperature: 71, description: 'Pas de rose', restingTime: 10 }
    ]
  },
  {
    name: 'Gigot d\'agneau',
    nameEn: 'Leg of lamb',
    description: 'Pièce noble pour rôtir',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['rôti', 'four'],
    recommendations: 'Classique rôti. Excellent rosé.',
    baseTimePerKg: 40,
    baseTimePerCm: 8,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 54, safetyTemperature: 62, description: 'Rosé uniforme', restingTime: 15 },
      { doneness: 'à point', coreTemperature: 57, safetyTemperature: 62, description: 'Rose pâle', restingTime: 15 },
      { doneness: 'bien cuit', coreTemperature: 66, safetyTemperature: 71, description: 'Pas de rose', restingTime: 15 }
    ]
  },
  {
    name: 'Carré d\'agneau',
    nameEn: 'Rack of lamb',
    description: 'Pièce prestigieuse avec os',
    tenderness: 'très_tendre',
    fatContent: 'moyen',
    bestUses: ['rôti', 'four', 'grill'],
    recommendations: 'Pièce de choix. Cuisson rapide.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 45, safetyTemperature: 52, description: 'Rouge vif', restingTime: 5 },
      { doneness: 'rosé', coreTemperature: 50, safetyTemperature: 57, description: 'Rose tendre', restingTime: 7 },
      { doneness: 'à point', coreTemperature: 57, safetyTemperature: 62, description: 'Rose pâle', restingTime: 10 }
    ]
  },
  {
    name: 'Épaule d\'agneau',
    nameEn: 'Lamb shoulder',
    description: 'Morceau savoureux pour braisage',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['braisage', 'rôti lent', 'confit'],
    recommendations: 'Excellent braisé. Cuisson longue.',
    baseTimePerKg: 80,
    baseTimePerCm: 15,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 85, safetyTemperature: 71, description: 'Très tendre', restingTime: 15 }
    ]
  }
];

// MORCEAUX DE VEAU
const vealCuts = [
  {
    name: 'Côte de veau',
    nameEn: 'Veal chop',
    description: 'Côtelette tendre et délicate',
    tenderness: 'très_tendre',
    fatContent: 'maigre',
    bestUses: ['poêle', 'grill'],
    recommendations: 'Cuisson douce. Idéale rosée.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 54, safetyTemperature: 62, description: 'Rose délicat', restingTime: 5 },
      { doneness: 'à point', coreTemperature: 60, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 7 },
      { doneness: 'bien cuit', coreTemperature: 66, safetyTemperature: 71, description: 'Blanc', restingTime: 10 }
    ]
  },
  {
    name: 'Rôti de veau',
    nameEn: 'Veal roast',
    description: 'Rôti tendre et délicat',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['rôti', 'four'],
    recommendations: 'Cuisson douce au four. Ne pas dessécher.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 58, safetyTemperature: 67, description: 'Rose pâle', restingTime: 12 }
    ]
  },
  {
    name: 'Escalope de veau',
    nameEn: 'Veal cutlet',
    description: 'Fine tranche pour cuisson rapide',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'plancha'],
    recommendations: 'Cuisson très rapide. Ne pas trop cuire.',
    baseTimePerKg: 8,
    baseTimePerCm: 1.5,
    temperatures: [
      { doneness: 'à point', coreTemperature: 60, safetyTemperature: 67, description: 'Légèrement rosé', restingTime: 3 }
    ]
  },
  {
    name: 'Jarret de veau',
    nameEn: 'Veal shank',
    description: 'Morceau pour osso buco',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['braisage', 'osso buco'],
    recommendations: 'Classique italien. Cuisson longue.',
    baseTimePerKg: 90,
    baseTimePerCm: 18,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 85, safetyTemperature: 71, description: 'Très tendre', restingTime: 10 }
    ]
  }
];

// MORCEAUX DE VOLAILLE
const poultryCuts = [
  {
    name: 'Poulet entier',
    nameEn: 'Whole chicken',
    description: 'Poulet entier à rôtir',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['rôti', 'four', 'rôtissoire'],
    recommendations: 'Vérifier température à la cuisse. Jus doit être clair.',
    baseTimePerKg: 45,
    baseTimePerCm: 9,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 73, safetyTemperature: 74, safetyNote: 'Obligatoire', description: 'Jus clair', restingTime: 12 }
    ]
  },
  {
    name: 'Blanc de poulet',
    nameEn: 'Chicken breast',
    description: 'Filet de poulet maigre',
    tenderness: 'tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill', 'sous-vide'],
    recommendations: 'Attention à ne pas dessécher. Sous-vide idéal.',
    baseTimePerKg: 20,
    baseTimePerCm: 4,
    temperatures: [
      { doneness: 'juteux (sous-vide)', coreTemperature: 69, safetyTemperature: 74, description: 'Juteux', restingTime: 5 },
      { doneness: 'bien cuit', coreTemperature: 73, safetyTemperature: 74, safetyNote: 'Obligatoire', description: 'Bien cuit', restingTime: 5 }
    ]
  },
  {
    name: 'Cuisses de poulet',
    nameEn: 'Chicken thighs',
    description: 'Cuisses savoureuses et tendres',
    tenderness: 'tendre',
    fatContent: 'moyen',
    bestUses: ['four', 'braisage', 'grill'],
    recommendations: 'Plus savoureuses que les blancs. Cuisson plus longue.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 76, safetyTemperature: 74, description: 'Fondant', restingTime: 5 }
    ]
  },
  {
    name: 'Magret de canard',
    nameEn: 'Duck breast',
    description: 'Filet de canard gras et savoureux',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['poêle', 'plancha', 'grill'],
    recommendations: 'Excellent rosé. Inciser la peau.',
    baseTimePerKg: 18,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 54, safetyTemperature: 71, description: 'Rosé', restingTime: 5 }
    ]
  },
  {
    name: 'Canard entier',
    nameEn: 'Whole duck',
    description: 'Canard entier à rôtir',
    tenderness: 'tendre',
    fatContent: 'gras',
    bestUses: ['rôti', 'four'],
    recommendations: 'Cuisse bien cuite, magret rosé possible.',
    baseTimePerKg: 50,
    baseTimePerCm: 10,
    temperatures: [
      { doneness: 'varié', coreTemperature: 74, safetyTemperature: 74, description: 'Cuisse 74°C / Magret peut être rosé', restingTime: 10 }
    ]
  },
  {
    name: 'Dinde',
    nameEn: 'Turkey',
    description: 'Dinde entière pour grandes occasions',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['rôti', 'four'],
    recommendations: 'Arroser régulièrement. Temps de cuisson long.',
    baseTimePerKg: 55,
    baseTimePerCm: 11,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 74, safetyTemperature: 74, safetyNote: 'Obligatoire', description: 'Bien cuit', restingTime: 18 }
    ]
  }
];

// MORCEAUX DE CERF
const deerCuts = [
  {
    name: 'Cerf entier',
    nameEn: 'Whole deer',
    description: 'Cerf entier pour rôtir à la broche (traditionnel)',
    tenderness: 'moyennement_tendre',
    fatContent: 'très_maigre',
    bestUses: ['broche', 'rôtissoire'],
    recommendations: 'Cuisson traditionnelle à la broche. Arroser régulièrement.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 52, safetyTemperature: 62, description: 'Rosé uniforme', restingTime: 20 }
    ]
  },
  {
    name: 'Cuissot de cerf',
    nameEn: 'Deer leg',
    description: 'Cuisse de cerf pour rôtir',
    tenderness: 'moyennement_tendre',
    fatContent: 'très_maigre',
    bestUses: ['rôti', 'four'],
    recommendations: 'Piquer de lardons pour éviter le dessèchement.',
    baseTimePerKg: 30,
    baseTimePerCm: 6,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 50, safetyTemperature: 62, description: 'Rosé', restingTime: 12 }
    ]
  },
  {
    name: 'Côtes de cerf',
    nameEn: 'Deer chops',
    description: 'Côtelettes de cerf',
    tenderness: 'tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill', 'plancha'],
    recommendations: 'Cuisson rapide. Ne pas trop cuire.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'saignant-rosé', coreTemperature: 48, safetyTemperature: 62, description: 'Rouge-rosé', restingTime: 5 }
    ]
  },
  {
    name: 'Filet de cerf',
    nameEn: 'Deer tenderloin',
    description: 'Morceau le plus tendre du cerf',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill', 'rôti'],
    recommendations: 'Morceau noble. Cuisson courte idéale.',
    baseTimePerKg: 12,
    baseTimePerCm: 2.5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, safetyTemperature: 62, description: 'Rouge-rosé', restingTime: 5 }
    ]
  },
  {
    name: 'Épaule de cerf',
    nameEn: 'Deer shoulder',
    description: 'Épaule pour braisage ou civet',
    tenderness: 'ferme',
    fatContent: 'maigre',
    bestUses: ['braisage', 'civet', 'cuisson longue'],
    recommendations: 'Excellent pour civet. Cuisson longue.',
    baseTimePerKg: 90,
    baseTimePerCm: 15,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 85, safetyTemperature: 62, description: 'Très tendre', restingTime: 15 }
    ]
  }
];

// MORCEAUX DE CHEVREUIL
const venisonCuts = [
  {
    name: 'Chevreuil entier',
    nameEn: 'Whole venison',
    description: 'Chevreuil entier pour rôtir à la broche',
    tenderness: 'tendre',
    fatContent: 'très_maigre',
    bestUses: ['broche', 'rôtissoire'],
    recommendations: 'Plus petit que le cerf. Cuisson plus rapide.',
    baseTimePerKg: 30,
    baseTimePerCm: 6,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 50, safetyTemperature: 62, description: 'Rosé', restingTime: 15 }
    ]
  },
  {
    name: 'Cuissot de chevreuil',
    nameEn: 'Venison leg',
    description: 'Cuisse de chevreuil pour rôtir',
    tenderness: 'tendre',
    fatContent: 'très_maigre',
    bestUses: ['rôti', 'four'],
    recommendations: 'Viande très tendre. Ne pas trop cuire.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 50, safetyTemperature: 62, description: 'Rosé', restingTime: 10 }
    ]
  },
  {
    name: 'Côtes de chevreuil',
    nameEn: 'Venison chops',
    description: 'Côtelettes de chevreuil',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill'],
    recommendations: 'Morceau délicat. Cuisson rapide.',
    baseTimePerKg: 12,
    baseTimePerCm: 2.5,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, safetyTemperature: 62, description: 'Rouge-rosé', restingTime: 5 }
    ]
  },
  {
    name: 'Filet de chevreuil',
    nameEn: 'Venison tenderloin',
    description: 'Filet très tendre',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill'],
    recommendations: 'Morceau d\'exception. Cuisson courte.',
    baseTimePerKg: 10,
    baseTimePerCm: 2,
    temperatures: [
      { doneness: 'saignant', coreTemperature: 48, safetyTemperature: 62, description: 'Rouge-rosé', restingTime: 4 }
    ]
  }
];

// MORCEAUX DE SANGLIER
const boarCuts = [
  {
    name: 'Sanglier entier',
    nameEn: 'Whole wild boar',
    description: 'Sanglier entier pour rôtir à la broche (traditionnel)',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['broche', 'rôtissoire traditionnelle'],
    recommendations: 'OBLIGATOIRE: cuire à 71°C (risque trichinose). Cuisson longue.',
    baseTimePerKg: 60,
    baseTimePerCm: 12,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, safetyNote: 'Obligatoire - Risque trichinose', description: 'Bien cuit', restingTime: 25 }
    ]
  },
  {
    name: 'Cuissot de sanglier',
    nameEn: 'Wild boar leg',
    description: 'Cuisse de sanglier pour rôtir',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['rôti', 'four', 'braisage'],
    recommendations: 'OBLIGATOIRE: 71°C minimum. Excellent mariné.',
    baseTimePerKg: 50,
    baseTimePerCm: 10,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, safetyNote: 'Obligatoire - Risque trichinose', description: 'Bien cuit', restingTime: 15 }
    ]
  },
  {
    name: 'Côtes de sanglier',
    nameEn: 'Wild boar ribs',
    description: 'Côtes pour griller ou braiser',
    tenderness: 'ferme',
    fatContent: 'moyen',
    bestUses: ['grill', 'braisage', 'four'],
    recommendations: 'OBLIGATOIRE: 71°C minimum. Excellentes braisées.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 71, safetyTemperature: 71, safetyNote: 'Obligatoire - Risque trichinose', description: 'Bien cuit', restingTime: 10 }
    ]
  },
  {
    name: 'Épaule de sanglier',
    nameEn: 'Wild boar shoulder',
    description: 'Épaule pour civet ou braisage',
    tenderness: 'ferme',
    fatContent: 'gras',
    bestUses: ['civet', 'braisage', 'cuisson longue'],
    recommendations: 'Parfait pour civet. Cuisson très longue.',
    baseTimePerKg: 100,
    baseTimePerCm: 18,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 88, safetyTemperature: 71, safetyNote: 'Obligatoire - Risque trichinose', description: 'Très tendre', restingTime: 20 }
    ]
  },
  {
    name: 'Jarret de sanglier',
    nameEn: 'Wild boar shank',
    description: 'Jarret pour cuisson longue',
    tenderness: 'très_ferme',
    fatContent: 'moyen',
    bestUses: ['braisage', 'cuisson longue'],
    recommendations: 'Excellent braisé. Très gélatineux.',
    baseTimePerKg: 110,
    baseTimePerCm: 20,
    temperatures: [
      { doneness: 'fondant', coreTemperature: 90, safetyTemperature: 71, safetyNote: 'Obligatoire - Risque trichinose', description: 'Chair se détache', restingTime: 15 }
    ]
  }
];

// MORCEAUX DE LIÈVRE
const hareCuts = [
  {
    name: 'Lièvre entier',
    nameEn: 'Whole hare',
    description: 'Lièvre entier pour rôtir ou en civet',
    tenderness: 'ferme',
    fatContent: 'maigre',
    bestUses: ['rôti', 'civet', 'broche'],
    recommendations: 'Traditionnellement en civet. Peut être rôti entier.',
    baseTimePerKg: 40,
    baseTimePerCm: 8,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 62, safetyTemperature: 67, description: 'Rose pâle', restingTime: 10 }
    ]
  },
  {
    name: 'Râbles de lièvre',
    nameEn: 'Hare saddle',
    description: 'Dos du lièvre (partie noble)',
    tenderness: 'moyennement_tendre',
    fatContent: 'maigre',
    bestUses: ['poêle', 'rôti', 'grill'],
    recommendations: 'Partie la plus tendre. Cuisson rapide.',
    baseTimePerKg: 25,
    baseTimePerCm: 5,
    temperatures: [
      { doneness: 'rosé', coreTemperature: 60, safetyTemperature: 67, description: 'Rosé', restingTime: 7 }
    ]
  },
  {
    name: 'Cuisses de lièvre',
    nameEn: 'Hare legs',
    description: 'Cuisses pour civet ou braisage',
    tenderness: 'ferme',
    fatContent: 'maigre',
    bestUses: ['civet', 'braisage'],
    recommendations: 'Idéales pour civet. Marinade recommandée.',
    baseTimePerKg: 60,
    baseTimePerCm: 12,
    temperatures: [
      { doneness: 'tendre', coreTemperature: 80, safetyTemperature: 67, description: 'Très tendre', restingTime: 10 }
    ]
  }
];

// MORCEAUX DE FAISAN
const pheasantCuts = [
  {
    name: 'Faisan entier',
    nameEn: 'Whole pheasant',
    description: 'Faisan entier pour rôtir',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['rôti', 'four', 'broche'],
    recommendations: 'Barder de lard pour éviter le dessèchement.',
    baseTimePerKg: 45,
    baseTimePerCm: 9,
    temperatures: [
      { doneness: 'légèrement rosé', coreTemperature: 68, safetyTemperature: 74, description: 'Légèrement rosé', restingTime: 10 }
    ]
  },
  {
    name: 'Suprêmes de faisan',
    nameEn: 'Pheasant breasts',
    description: 'Blancs de faisan',
    tenderness: 'très_tendre',
    fatContent: 'très_maigre',
    bestUses: ['poêle', 'grill'],
    recommendations: 'Cuisson rapide. Ne pas dessécher.',
    baseTimePerKg: 15,
    baseTimePerCm: 3,
    temperatures: [
      { doneness: 'juteux', coreTemperature: 66, safetyTemperature: 74, description: 'Juteux', restingTime: 5 }
    ]
  },
  {
    name: 'Cuisses de faisan',
    nameEn: 'Pheasant legs',
    description: 'Cuisses pour cuisson plus longue',
    tenderness: 'tendre',
    fatContent: 'maigre',
    bestUses: ['braisage', 'confit'],
    recommendations: 'Cuisson plus longue que les suprêmes.',
    baseTimePerKg: 35,
    baseTimePerCm: 7,
    temperatures: [
      { doneness: 'bien cuit', coreTemperature: 74, safetyTemperature: 74, safetyNote: 'Obligatoire', description: 'Bien cuit', restingTime: 7 }
    ]
  }
];

async function seedDatabase() {
  try {
    console.log('🔄 Nettoyage de la base de données V2...');
    await CookingAppliance.deleteMany({});
    await CookingMethod.deleteMany({});
    await Meat.deleteMany({});

    console.log('📦 Insertion des appareils de cuisson...');
    await CookingAppliance.insertMany(appliances);
    console.log(`✓ ${appliances.length} appareils insérés`);

    console.log('📦 Insertion des méthodes de cuisson...');
    await CookingMethod.insertMany(methods);
    console.log(`✓ ${methods.length} méthodes insérées`);

    console.log('📦 Insertion des viandes...');

    const beefMeat = {
      category: 'boeuf',
      name: 'Bœuf',
      nameEn: 'Beef',
      description: 'Viande de bœuf - riche et savoureuse',
      cuts: beefCuts
    };
    await Meat.create(beefMeat);
    console.log(`✓ Bœuf avec ${beefCuts.length} morceaux inséré`);

    const porkMeat = {
      category: 'porc',
      name: 'Porc',
      nameEn: 'Pork',
      description: 'Viande de porc - polyvalente et savoureuse',
      cuts: porkCuts
    };
    await Meat.create(porkMeat);
    console.log(`✓ Porc avec ${porkCuts.length} morceaux inséré`);

    const lambMeat = {
      category: 'agneau',
      name: 'Agneau',
      nameEn: 'Lamb',
      description: 'Viande d\'agneau - tendre et goûteuse',
      cuts: lambCuts
    };
    await Meat.create(lambMeat);
    console.log(`✓ Agneau avec ${lambCuts.length} morceaux inséré`);

    const vealMeat = {
      category: 'veau',
      name: 'Veau',
      nameEn: 'Veal',
      description: 'Viande de veau - délicate et fine',
      cuts: vealCuts
    };
    await Meat.create(vealMeat);
    console.log(`✓ Veau avec ${vealCuts.length} morceaux inséré`);

    const poultryMeat = {
      category: 'volaille',
      name: 'Volaille',
      nameEn: 'Poultry',
      description: 'Volailles diverses - poulet, canard, dinde',
      cuts: poultryCuts
    };
    await Meat.create(poultryMeat);
    console.log(`✓ Volaille avec ${poultryCuts.length} morceaux inséré`);

    const sausageMeat = {
      category: 'saucisses',
      name: 'Saucisses',
      nameEn: 'Sausages',
      description: 'Saucisses et charcuteries diverses - merguez, chipolatas, boudins, etc.',
      cuts: sausageCuts
    };
    await Meat.create(sausageMeat);
    console.log(`✓ Saucisses avec ${sausageCuts.length} morceaux inséré`);

    const deerMeat = {
      category: 'cerf',
      name: 'Cerf',
      nameEn: 'Deer',
      description: 'Viande de cerf - gibier noble et maigre',
      cuts: deerCuts
    };
    await Meat.create(deerMeat);
    console.log(`✓ Cerf avec ${deerCuts.length} morceaux inséré`);

    const venisonMeat = {
      category: 'chevreuil',
      name: 'Chevreuil',
      nameEn: 'Venison',
      description: 'Viande de chevreuil - gibier tendre et fin',
      cuts: venisonCuts
    };
    await Meat.create(venisonMeat);
    console.log(`✓ Chevreuil avec ${venisonCuts.length} morceaux inséré`);

    const boarMeat = {
      category: 'sanglier',
      name: 'Sanglier',
      nameEn: 'Wild Boar',
      description: 'Viande de sanglier - gibier fort et goûteux',
      cuts: boarCuts
    };
    await Meat.create(boarMeat);
    console.log(`✓ Sanglier avec ${boarCuts.length} morceaux inséré`);

    const hareMeat = {
      category: 'lievre',
      name: 'Lièvre',
      nameEn: 'Hare',
      description: 'Viande de lièvre - petit gibier à chair ferme',
      cuts: hareCuts
    };
    await Meat.create(hareMeat);
    console.log(`✓ Lièvre avec ${hareCuts.length} morceaux inséré`);

    const pheasantMeat = {
      category: 'faisan',
      name: 'Faisan',
      nameEn: 'Pheasant',
      description: 'Viande de faisan - gibier à plumes délicat',
      cuts: pheasantCuts
    };
    await Meat.create(pheasantMeat);
    console.log(`✓ Faisan avec ${pheasantCuts.length} morceaux inséré`);

    const totalCuts = beefCuts.length + porkCuts.length + lambCuts.length + vealCuts.length + poultryCuts.length + sausageCuts.length + deerCuts.length + venisonCuts.length + boarCuts.length + hareCuts.length + pheasantCuts.length;

    console.log('\n✅ Base de données V2 remplie avec succès !');
    console.log(`\n📊 Résumé :`);
    console.log(`   - ${appliances.length} appareils de cuisson`);
    console.log(`   - ${methods.length} méthodes de cuisson`);
    console.log(`   - 11 catégories de viandes`);
    console.log(`   - ${totalCuts} morceaux au total`);
    console.log(`     • Bœuf: ${beefCuts.length} morceaux`);
    console.log(`     • Porc: ${porkCuts.length} morceaux`);
    console.log(`     • Agneau: ${lambCuts.length} morceaux`);
    console.log(`     • Veau: ${vealCuts.length} morceaux`);
    console.log(`     • Volaille: ${poultryCuts.length} morceaux`);
    console.log(`     • 🌭 Saucisses: ${sausageCuts.length} morceaux`);
    console.log(`     • Cerf: ${deerCuts.length} morceaux`);
    console.log(`     • Chevreuil: ${venisonCuts.length} morceaux`);
    console.log(`     • Sanglier: ${boarCuts.length} morceaux`);
    console.log(`     • Lièvre: ${hareCuts.length} morceaux`);
    console.log(`     • Faisan: ${pheasantCuts.length} morceaux`);
    console.log(`   - Température: 40°C à 300°C possible`);
    console.log(`   - Système séparé: APPAREIL + MÉTHODE`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
}

seedDatabase();
