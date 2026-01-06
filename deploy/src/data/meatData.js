// Cookmaster - Encyclopédie complète des viandes
// Données extraites de encyclopediaData.js

export const meatCategories = {
  boeuf: {
    id: 'boeuf',
    name: 'Boeuf',
    name_en: 'Beef',
    icon: '🥩',
    color: '#C62828',
    histoire: "Le bœuf est consommé depuis la domestication des bovins il y a plus de 10 000 ans. En France, l'élevage bovin s'est développé au Moyen Âge, avec l'émergence de races prestigieuses comme la Charolaise, la Limousine ou la Blonde d'Aquitaine.",
    nutrition: "Excellente source de protéines complètes (26g/100g), de fer héminique hautement biodisponible, de zinc, de vitamine B12, et de créatine.",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Sous-vide : 5-7 jours. Congélation : -18°C maximum 6-12 mois.",
    selection: {
      couleur: "Rouge vif à rouge sombre selon la maturation",
      texture: "Grain fin et régulier, persillage garantit tendreté et saveur",
      maturite: "Maturation optimale : 14-21 jours pour morceaux nobles, 28-45 jours pour dry-aged"
    },
    preparation: {
      temperaturage: "Sortir 30-60 minutes avant cuisson pour atteindre 18-20°C",
      assaisonnement: "Saler juste avant ou après cuisson, poivrer après",
      sechage: "Sécher soigneusement avec papier absorbant"
    }
  },

  porc: {
    id: 'porc',
    name: 'Porc',
    name_en: 'Pork',
    icon: '🐷',
    color: '#F48FB1',
    histoire: "Le porc est élevé depuis 9000 ans. En France, les porcs fermiers Label Rouge et les races patrimoniales (Noir de Bigorre, Porc Basque, Cul Noir Limousin) offrent une qualité supérieure.",
    nutrition: "Excellente source de protéines (22g/100g), vitamines B1 (thiamine), B6, B12, zinc et sélénium. Le filet mignon est très maigre (3% lipides).",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Sous-vide : 5-7 jours. Congélation : -18°C maximum 4-6 mois.",
    selection: {
      couleur: "Rose pâle à rose soutenu, jamais grisâtre",
      texture: "Chair ferme et élastique, gras blanc et ferme",
      qualite: "Label Rouge, Porc Fermier, races patrimoniales AOP"
    },
    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson",
      assaisonnement: "Sel, poivre, herbes (thym, romarin, sauge), ail",
      securite: "Température minimum 63°C à cœur (recommandé 68-70°C)"
    }
  },

  agneau: {
    id: 'agneau',
    name: 'Agneau',
    name_en: 'Lamb',
    icon: '🐑',
    color: '#8D6E63',
    histoire: "L'agneau est élevé depuis 10 000 ans au Moyen-Orient. En France, les Label Rouge (Agneau de Sisteron, Agneau du Quercy) et AOP (Prés-salés du Mont-Saint-Michel) garantissent une qualité exceptionnelle.",
    nutrition: "Riche en protéines (25g/100g), fer héminique, zinc, vitamines B12 et B3. L'agneau de lait est plus tendre et délicat.",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Congélation : -18°C maximum 6-8 mois.",
    selection: {
      couleur: "Rose pâle (agneau de lait) à rouge clair (agneau)",
      texture: "Chair fine et tendre, gras blanc ferme",
      age: "Agneau de lait (< 3 mois), agneau (3-12 mois), mouton (> 1 an)"
    },
    preparation: {
      temperaturage: "Sortir 30-45 minutes avant cuisson",
      assaisonnement: "Ail, romarin, thym, moutarde, anchois",
      marinade: "Optionnelle : huile d'olive, citron, herbes"
    }
  },

  veau: {
    id: 'veau',
    name: 'Veau',
    name_en: 'Veal',
    icon: '🐄',
    color: '#FFAB91',
    histoire: "Le veau de lait français est réputé mondialement. Les Labels Rouge et le Veau d'Aveyron et du Ségala (IGP) garantissent une alimentation lactée et une chair claire et tendre.",
    nutrition: "Viande maigre (5-8% lipides), riche en protéines (20g/100g), fer, zinc et vitamines B. Plus digeste que le bœuf.",
    conservation: "Viande très fragile : 2 jours maximum à 2°C. Congélation : -18°C maximum 4 mois.",
    selection: {
      couleur: "Rose très pâle à blanc rosé (veau de lait)",
      texture: "Chair fine, tendre et délicate",
      qualite: "Label Rouge, IGP, veau élevé sous la mère"
    },
    preparation: {
      temperaturage: "Sortir 20-30 minutes avant cuisson",
      assaisonnement: "Légèrement : sel, citron, sauge, estragon",
      cuisson: "Ne pas surcuire : le veau devient sec rapidement"
    }
  },

  volaille: {
    id: 'volaille',
    name: 'Volaille',
    name_en: 'Poultry',
    icon: '🍗',
    color: '#FFB300',
    histoire: "Le poulet fut domestiqué en Asie il y a 8000 ans. La Volaille de Bresse est la seule volaille au monde à bénéficier d'une AOP. Les races patrimoniales françaises sont réputées mondialement.",
    nutrition: "Viande maigre exceptionnelle (poulet sans peau : 3% lipides), riche en protéines (24g/100g), vitamines B et niacine.",
    conservation: "Volaille fraîche : 2 jours à 2-4°C maximum. Très périssable. Congélation : -18°C maximum 6-8 mois.",
    selection: {
      couleur: "Peau blanc crème à jaune, chair rose pâle ferme",
      texture: "Peau tendue sans déchirures, chair ferme",
      qualite: "AOP Volaille de Bresse, Label Rouge, Agriculture Biologique"
    },
    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson",
      assaisonnement: "Sel, poivre, herbes de Provence, thym, romarin, ail, citron",
      securite: "CRUCIAL : Température minimum 74°C à cœur pour éliminer salmonelles"
    }
  },

  gibier: {
    id: 'gibier',
    name: 'Gibier',
    name_en: 'Game',
    icon: '🦌',
    color: '#5D4037',
    histoire: "Le gibier désigne les animaux sauvages chassés : grands gibiers (cervidés, sangliers) et gibiers à plumes (faisans, perdrix). La chasse est encadrée légalement avec saisons et quotas.",
    nutrition: "Viande extrêmement maigre (1-3% lipides), très riche en protéines (25-30g/100g), fer héminique, zinc. Valeur calorique faible : 100-120 kcal/100g.",
    conservation: "Gibier frais : 2-3 jours maximum à 2°C. Faisandage : 3-7 jours à 4-8°C. Congélation : -18°C jusqu'à 8-10 mois.",
    selection: {
      age: "Jeunes animaux plus tendres : marcassin vs sanglier, faon vs cerf",
      aspect: "Chair rouge foncé à brun, odeur forte mais agréable, forestière",
      saison: "Automne-hiver (septembre à février) : saison de chasse"
    },
    preparation: {
      temperaturage: "Sortir 1h avant cuisson",
      marinade: "Quasi-obligatoire : vin rouge, genièvre, thym, laurier 12-48h",
      bardage: "ESSENTIEL car très maigre : barder de lard pour éviter dessèchement"
    }
  }
};

// Niveaux de cuisson avec températures
export const donenessLevels = {
  viande_rouge: [
    { id: 'bleu', name: 'Bleu', name_en: 'Blue Rare', temp: 45, tempMax: 48, description: 'Centre froid et rouge vif', description_en: 'Cold and bright red center', color: '#D32F2F' },
    { id: 'saignant', name: 'Saignant', name_en: 'Rare', temp: 50, tempMax: 52, description: 'Centre tiède et rouge', description_en: 'Warm and red center', color: '#E53935' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 55, tempMax: 58, description: 'Centre chaud et rosé', description_en: 'Hot and pink center', color: '#F4511E' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 63, tempMax: 68, description: 'Centre gris-brun, plus de rose', description_en: 'Gray-brown center, no pink', color: '#8D6E63' }
  ],
  agneau: [
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 54, tempMax: 56, description: 'Centre rosé juteux', description_en: 'Juicy pink center', color: '#E57373' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 58, tempMax: 62, description: 'Centre légèrement rosé', description_en: 'Slightly pink center', color: '#F4511E' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 68, tempMax: 72, description: 'Entièrement cuit', description_en: 'Fully cooked', color: '#8D6E63' }
  ],
  porc: [
    { id: 'juste_cuit', name: 'Juste cuit', name_en: 'Just Cooked', temp: 63, tempMax: 65, description: 'Légèrement rosé au centre (moderne)', description_en: 'Slightly pink center (modern)', color: '#F48FB1' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 68, tempMax: 70, description: 'Cuit mais juteux', description_en: 'Cooked but juicy', color: '#EC407A' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 72, tempMax: 75, description: 'Entièrement cuit (traditionnel)', description_en: 'Fully cooked (traditional)', color: '#AD1457' }
  ],
  volaille: [
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 74, tempMax: 82, description: 'Obligatoire - jus clair', description_en: 'Required - clear juices', color: '#FFB300' }
  ],
  gibier: [
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 52, tempMax: 54, description: 'Centre rosé (recommandé)', description_en: 'Pink center (recommended)', color: '#A1887F' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 56, tempMax: 60, description: 'Centre légèrement rosé', description_en: 'Slightly pink center', color: '#8D6E63' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 65, tempMax: 70, description: 'Attention: devient sec', description_en: 'Warning: becomes dry', color: '#5D4037' }
  ]
};

// Méthodes de cuisson - Liste complète
export const cookingMethods = [
  // === CUISSONS RAPIDES (feu vif) ===
  {
    id: 'poele',
    name: 'Poêle',
    name_en: 'Pan-fry',
    icon: '🍳',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson classique à la poêle avec matière grasse',
    description_en: 'Classic pan cooking with fat',
    conseils: ['Bien chauffer avant de poser la viande', 'Ne pas surcharger la poêle', 'Laisser saisir sans bouger']
  },
  {
    id: 'saisir',
    name: 'Saisir',
    name_en: 'Sear',
    icon: '🔥',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson très haute température pour croûte Maillard',
    description_en: 'Very high temperature cooking for Maillard crust',
    conseils: ['Température maximale', 'Viande sèche et à température ambiante', '1-2 min par face maximum']
  },
  {
    id: 'grill',
    name: 'Grill',
    name_en: 'Grill',
    icon: '♨️',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson sur grille avec source de chaleur directe',
    description_en: 'Cooking on grill with direct heat source',
    conseils: ['Huiler la grille', 'Marquer en quadrillage', 'Ne pas piquer la viande']
  },
  {
    id: 'plancha',
    name: 'Plancha',
    name_en: 'Griddle',
    icon: '🫓',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson sur plaque chauffante en fonte ou acier',
    description_en: 'Cooking on cast iron or steel hot plate',
    conseils: ['Température 250-300°C', 'Cuisson très rapide', 'Idéal pour viandes fines']
  },
  {
    id: 'wok',
    name: 'Wok',
    name_en: 'Wok',
    icon: '🥘',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson sautée à très haute température style asiatique',
    description_en: 'Asian-style stir-fry at very high temperature',
    conseils: ['Couper en fines lamelles', 'Feu très vif', 'Remuer constamment', 'Cuisson en 2-3 minutes']
  },
  {
    id: 'flambe',
    name: 'Flambé',
    name_en: 'Flambé',
    icon: '🔥',
    category: 'rapide',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson avec flambage à l\'alcool',
    description_en: 'Cooking with alcohol flambé',
    conseils: ['Alcool à température ambiante', 'Éloigner du feu pour verser', 'Laisser l\'alcool s\'évaporer']
  },
  {
    id: 'pierrade',
    name: 'Pierrade',
    name_en: 'Hot Stone',
    icon: '🪨',
    category: 'rapide',
    hasIntensity: false,
    tempRange: null,
    description: 'Cuisson sur pierre chaude à table',
    description_en: 'Cooking on hot stone at table',
    conseils: ['Tranches très fines', 'Cuisson conviviale', 'Chacun cuit à son goût']
  },

  // === CUISSONS AU FOUR ===
  {
    id: 'four',
    name: 'Four',
    name_en: 'Oven',
    icon: '🔥',
    category: 'four',
    hasThermostat: true,
    tempRange: [100, 250],
    description: 'Cuisson au four traditionnel',
    description_en: 'Traditional oven cooking',
    conseils: ['Préchauffer 15-20 min', 'Arroser régulièrement', 'Utiliser une sonde thermique']
  },
  {
    id: 'rotissoire',
    name: 'Rôtissoire',
    name_en: 'Rotisserie',
    icon: '🔄',
    category: 'four',
    hasThermostat: true,
    tempRange: [180, 220],
    description: 'Cuisson rotative au four ou à la broche',
    description_en: 'Rotary oven or spit cooking',
    conseils: ['Rotation constante', 'Récupérer le jus', 'Idéal pour volailles entières']
  },
  {
    id: 'broche',
    name: 'À la broche',
    name_en: 'Spit Roast',
    icon: '🍢',
    category: 'four',
    hasThermostat: true,
    tempRange: [180, 220],
    description: 'Cuisson traditionnelle à la broche tournante',
    description_en: 'Traditional rotating spit cooking',
    conseils: ['Ficeler solidement', 'Rotation lente et régulière', 'Lèchefrite pour récupérer le jus']
  },
  {
    id: 'gratin',
    name: 'Gratin',
    name_en: 'Gratin',
    icon: '🧀',
    category: 'four',
    hasThermostat: true,
    tempRange: [180, 220],
    description: 'Cuisson gratinée avec croûte dorée',
    description_en: 'Gratin cooking with golden crust',
    conseils: ['Finir sous le grill', 'Fromage ou chapelure', 'Surveiller la coloration']
  },
  {
    id: 'croute',
    name: 'En croûte',
    name_en: 'In Pastry',
    icon: '🥧',
    category: 'four',
    hasThermostat: true,
    tempRange: [180, 200],
    description: 'Cuisson enveloppée dans une pâte feuilletée',
    description_en: 'Cooking wrapped in puff pastry',
    conseils: ['Saisir d\'abord la viande', 'Refroidir avant d\'envelopper', 'Dorer au jaune d\'œuf']
  },
  {
    id: 'sel',
    name: 'Croûte de sel',
    name_en: 'Salt Crust',
    icon: '🧂',
    category: 'four',
    hasThermostat: true,
    tempRange: [200, 220],
    description: 'Cuisson enfermée dans une croûte de gros sel',
    description_en: 'Cooking enclosed in coarse salt crust',
    conseils: ['Mélanger sel et blanc d\'œuf', 'Enfermer hermétiquement', 'Casser à table']
  },
  {
    id: 'papillote',
    name: 'En papillote',
    name_en: 'En Papillote',
    icon: '📦',
    category: 'four',
    hasThermostat: true,
    tempRange: [180, 200],
    description: 'Cuisson à l\'étouffée dans du papier ou aluminium',
    description_en: 'Steaming in paper or foil',
    conseils: ['Fermer hermétiquement', 'Ajouter aromates et liquide', 'Ouvrir à table pour les arômes']
  },

  // === CUISSONS LENTES ===
  {
    id: 'braise',
    name: 'Braisé',
    name_en: 'Braised',
    icon: '🍲',
    category: 'lente',
    hasThermostat: true,
    tempRange: [120, 160],
    description: 'Cuisson longue avec peu de liquide en cocotte fermée',
    description_en: 'Long cooking with little liquid in covered pot',
    conseils: ['Saisir avant de braiser', 'Liquide à mi-hauteur', 'Four doux 3-4h minimum']
  },
  {
    id: 'mijoter',
    name: 'Mijoté',
    name_en: 'Stew',
    icon: '🫕',
    category: 'lente',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson lente à feu doux sur la cuisinière',
    description_en: 'Slow cooking over low heat on stovetop',
    conseils: ['Frémissement léger', 'Ne jamais bouillir', 'Couvrir partiellement']
  },
  {
    id: 'cocotte',
    name: 'Cocotte',
    name_en: 'Dutch Oven',
    icon: '🥘',
    category: 'lente',
    hasThermostat: true,
    tempRange: [140, 180],
    description: 'Cuisson en cocotte en fonte, idéale pour les mijotés',
    description_en: 'Cast iron pot cooking, ideal for stews',
    conseils: ['Cocotte en fonte idéale', 'Répartition uniforme de la chaleur', 'Peut aller au four']
  },
  {
    id: 'confit',
    name: 'Confit',
    name_en: 'Confit',
    icon: '🦆',
    category: 'lente',
    hasTemperature: true,
    tempRange: [80, 100],
    description: 'Cuisson très lente dans la graisse',
    description_en: 'Very slow cooking in fat',
    conseils: ['Viande immergée dans le gras', 'Température basse 80-90°C', '4-6h de cuisson']
  },
  {
    id: 'tajine',
    name: 'Tajine',
    name_en: 'Tagine',
    icon: '🫕',
    category: 'lente',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson marocaine à l\'étouffée avec couvercle conique',
    description_en: 'Moroccan steaming with conical lid',
    conseils: ['Feu très doux', 'Le couvercle crée la vapeur', 'Épices et fruits secs']
  },
  {
    id: 'basse_temp',
    name: 'Basse température',
    name_en: 'Low Temperature',
    icon: '🌡️',
    category: 'lente',
    hasTemperature: true,
    tempRange: [60, 90],
    description: 'Cuisson au four à température très basse (60-90°C)',
    description_en: 'Oven cooking at very low temperature (140-195°F)',
    conseils: ['Saisir avant ou après', 'Plusieurs heures de cuisson', 'Résultat ultra-tendre']
  },
  {
    id: 'sousvide',
    name: 'Sous-vide',
    name_en: 'Sous-vide',
    icon: '💧',
    category: 'lente',
    hasTemperature: true,
    tempRange: [50, 85],
    description: 'Cuisson sous vide au bain-marie à température précise',
    description_en: 'Vacuum-sealed water bath cooking at precise temperature',
    conseils: ['Mise sous vide obligatoire', 'Température au degré près', 'Saisir après pour la croûte']
  },
  {
    id: 'reverse_sear',
    name: 'Reverse sear',
    name_en: 'Reverse Sear',
    icon: '🔄',
    category: 'lente',
    hasTemperature: true,
    tempRange: [100, 130],
    description: 'Cuisson lente au four puis saisie finale intense',
    description_en: 'Slow oven cooking then final intense sear',
    conseils: ['Four basse température d\'abord', 'Saisir à la fin 1 min/face', 'Idéal pour pièces épaisses']
  },

  // === CUISSONS EXTÉRIEURES ===
  {
    id: 'bbq',
    name: 'BBQ direct',
    name_en: 'Direct BBQ',
    icon: '🍖',
    category: 'exterieur',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson directe sur les braises au barbecue',
    description_en: 'Direct cooking over charcoal on barbecue',
    conseils: ['Braises bien formées', 'Zone directe pour saisir', 'Huiler la grille']
  },
  {
    id: 'bbq_indirect',
    name: 'BBQ indirect',
    name_en: 'Indirect BBQ',
    icon: '🍖',
    category: 'exterieur',
    hasTemperature: true,
    tempRange: [100, 150],
    description: 'Cuisson lente au barbecue sans chaleur directe',
    description_en: 'Slow barbecue cooking without direct heat',
    conseils: ['Braises sur les côtés', 'Viande au centre', 'Couvercle fermé', 'Idéal pour grosses pièces']
  },
  {
    id: 'fumage',
    name: 'Fumage à chaud',
    name_en: 'Hot Smoking',
    icon: '💨',
    category: 'exterieur',
    hasTemperature: true,
    tempRange: [80, 120],
    description: 'Cuisson et fumage simultané avec copeaux de bois',
    description_en: 'Simultaneous cooking and smoking with wood chips',
    conseils: ['Copeaux de bois trempés', 'Température 80-120°C', 'Hickory, mesquite, pommier']
  },
  {
    id: 'fumage_froid',
    name: 'Fumage à froid',
    name_en: 'Cold Smoking',
    icon: '❄️',
    category: 'exterieur',
    hasTemperature: true,
    tempRange: [15, 30],
    description: 'Fumage sans cuisson, pour aromatiser',
    description_en: 'Smoking without cooking, for flavoring',
    conseils: ['Température < 30°C', 'Ne cuit pas la viande', 'Pour séchage et conservation']
  },
  {
    id: 'cheminee',
    name: 'Cheminée',
    name_en: 'Fireplace',
    icon: '🏠',
    category: 'exterieur',
    hasIntensity: true,
    tempRange: null,
    description: 'Cuisson traditionnelle au feu de bois',
    description_en: 'Traditional wood fire cooking',
    conseils: ['Braises sans flammes', 'Hauteur ajustable', 'Goût fumé authentique']
  },

  // === CUISSONS HUMIDES ===
  {
    id: 'pocher',
    name: 'Pocher',
    name_en: 'Poach',
    icon: '🍵',
    category: 'humide',
    hasTemperature: true,
    tempRange: [65, 85],
    description: 'Cuisson immergée dans un liquide frémissant',
    description_en: 'Cooking submerged in simmering liquid',
    conseils: ['Ne jamais bouillir', 'Bouillon ou court-bouillon aromatique', 'Viande couverte de liquide']
  },
  {
    id: 'vapeur',
    name: 'Vapeur',
    name_en: 'Steam',
    icon: '♨️',
    category: 'humide',
    hasTemperature: true,
    tempRange: [100, 100],
    description: 'Cuisson à la vapeur d\'eau sans contact',
    description_en: 'Steam cooking without contact',
    conseils: ['Viande au-dessus du liquide', 'Cuisson douce et saine', 'Préserve les nutriments']
  },
  {
    id: 'bouillir',
    name: 'Bouilli',
    name_en: 'Boiled',
    icon: '🫕',
    category: 'humide',
    hasTemperature: true,
    tempRange: [100, 100],
    description: 'Cuisson dans un liquide bouillant (pot-au-feu)',
    description_en: 'Cooking in boiling liquid (pot-au-feu style)',
    conseils: ['Départ eau froide', 'Écumer régulièrement', 'Cuisson longue 2-4h']
  },

  // === FRITURE ===
  {
    id: 'friture',
    name: 'Friture',
    name_en: 'Deep Fry',
    icon: '🍟',
    category: 'friture',
    hasTemperature: true,
    tempRange: [160, 190],
    description: 'Cuisson immergée dans l\'huile chaude',
    description_en: 'Cooking submerged in hot oil',
    conseils: ['Huile à 170-180°C', 'Égoutter sur papier', 'Petites quantités à la fois']
  },
  {
    id: 'paner',
    name: 'Pané/Frit',
    name_en: 'Breaded/Fried',
    icon: '🍗',
    category: 'friture',
    hasTemperature: true,
    tempRange: [170, 180],
    description: 'Viande panée puis frite ou poêlée',
    description_en: 'Breaded meat then fried or pan-fried',
    conseils: ['Farine, œuf, chapelure', 'Bien presser la panure', 'Huile bien chaude']
  }
];

// Intensités de feu
export const intensityLevels = [
  { id: 'doux', name: 'Doux', name_en: 'Low', value: 1, description: 'Cuisson lente, 120-140°C', description_en: 'Slow cooking, 250-285°F' },
  { id: 'moyen', name: 'Moyen', name_en: 'Medium', value: 2, description: 'Cuisson normale, 160-180°C', description_en: 'Normal cooking, 320-355°F' },
  { id: 'vif', name: 'Vif', name_en: 'High', value: 3, description: 'Saisir la viande, 200-220°C', description_en: 'Sear the meat, 390-430°F' },
  { id: 'tres_vif', name: 'Très vif', name_en: 'Very High', value: 4, description: 'Croûte Maillard, 240°C+', description_en: 'Maillard crust, 465°F+' },
];

// Conversion thermostat
export const thermostatToTemp = (th) => th * 30;
export const tempToThermostat = (temp) => Math.round(temp / 30);

export default {
  meatCategories,
  donenessLevels,
  cookingMethods,
  intensityLevels,
  thermostatToTemp,
  tempToThermostat
};
