// Cookmaster - Encyclopédie complète des viandes
// Données extraites de encyclopediaData.js

export const meatCategories = {
  boeuf: {
    id: 'boeuf',
    name: 'Bœuf',
    name_en: 'Beef',
    icon: '🥩',
    color: '#C62828',
    histoire: "Le bœuf est consommé depuis la domestication des bovins il y a plus de 10 000 ans. En France, l'élevage bovin s'est développé au Moyen Âge, avec l'émergence de races prestigieuses comme la Charolaise, la Limousine ou la Blonde d'Aquitaine.",
    histoire_en: "Beef has been consumed since cattle domestication over 10,000 years ago. In France, cattle farming developed during the Middle Ages, with the emergence of prestigious breeds such as Charolais, Limousin, and Blonde d'Aquitaine.",
    nutrition: "Excellente source de protéines complètes (26g/100g), de fer héminique hautement biodisponible, de zinc, de vitamine B12, et de créatine.",
    nutrition_en: "Excellent source of complete proteins (26g/100g), highly bioavailable heme iron, zinc, vitamin B12, and creatine.",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Sous-vide : 5-7 jours. Congélation : -18°C maximum 6-12 mois.",
    conservation_en: "Fresh meat: 2-3 days at 35-40°F. Vacuum-sealed: 5-7 days. Frozen: 0°F for up to 6-12 months.",
    selection: {
      couleur: "Rouge vif à rouge sombre selon la maturation",
      texture: "Grain fin et régulier, persillage garantit tendreté et saveur",
      maturite: "Maturation optimale : 14-21 jours pour morceaux nobles, 28-45 jours pour dry-aged"
    },
    selection_en: {
      couleur: "Bright red to dark red depending on aging",
      texture: "Fine and even grain, marbling ensures tenderness and flavor",
      maturite: "Optimal aging: 14-21 days for prime cuts, 28-45 days for dry-aged"
    },
    preparation: {
      temperaturage: "Sortir 30-60 minutes avant cuisson pour atteindre 18-20°C",
      assaisonnement: "Saler juste avant ou après cuisson, poivrer après",
      sechage: "Sécher soigneusement avec papier absorbant"
    },
    // Facteurs de cuisson spécifiques au boeuf
    cookingFactors: {
      boneFactor: 1.15,          // Os moyennement épais, bonne conduction
      bardingFactor: 1.08,       // Déjà bien persillé, peu d'effet du bardage
      thicknessExponent: 1.5,    // Densité standard
      weightExponent: 0.85,      // Cuisson non-linéaire standard
      frozenTempFactor: 1.30,    // Temps supplémentaire si congelé
      fridgeTempFactor: 1.10,    // Temps supplémentaire si frigo
      baseThicknessRef: 2.5      // Épaisseur de référence en cm
    }
  },

  porc: {
    id: 'porc',
    name: 'Porc',
    name_en: 'Pork',
    icon: '🐷',
    color: '#F48FB1',
    histoire: "Le porc est élevé depuis 9000 ans. En France, les porcs fermiers Label Rouge et les races patrimoniales (Noir de Bigorre, Porc Basque, Cul Noir Limousin) offrent une qualité supérieure.",
    histoire_en: "Pork has been raised for 9,000 years. In France, Label Rouge farm pigs and heritage breeds (Noir de Bigorre, Basque Pig, Cul Noir Limousin) offer superior quality.",
    nutrition: "Excellente source de protéines (22g/100g), vitamines B1 (thiamine), B6, B12, zinc et sélénium. Le filet mignon est très maigre (3% lipides).",
    nutrition_en: "Excellent source of proteins (22g/100g), vitamins B1 (thiamine), B6, B12, zinc and selenium. Tenderloin is very lean (3% fat).",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Sous-vide : 5-7 jours. Congélation : -18°C maximum 4-6 mois.",
    conservation_en: "Fresh meat: 2-3 days at 35-40°F. Vacuum-sealed: 5-7 days. Frozen: 0°F for up to 4-6 months.",
    selection: {
      couleur: "Rose pâle à rose soutenu, jamais grisâtre",
      texture: "Chair ferme et élastique, gras blanc et ferme",
      qualite: "Label Rouge, Porc Fermier, races patrimoniales AOP"
    },
    selection_en: {
      couleur: "Pale pink to deep pink, never grayish",
      texture: "Firm and elastic meat, white and firm fat",
      qualite: "Look for heritage breeds, free-range or organic certified"
    },
    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson",
      assaisonnement: "Sel, poivre, herbes (thym, romarin, sauge), ail",
      securite: "Température minimum 63°C à cœur (recommandé 68-70°C)"
    },
    // Facteurs de cuisson spécifiques au porc
    cookingFactors: {
      boneFactor: 1.18,          // Os denses mais petits
      bardingFactor: 1.05,       // Chair déjà grasse, peu d'effet
      thicknessExponent: 1.4,    // Chair moins dense que boeuf
      weightExponent: 0.82,      // Cuisson plus rapide
      frozenTempFactor: 1.35,    // Plus sensible au froid
      fridgeTempFactor: 1.12,
      baseThicknessRef: 2.0      // Morceaux généralement plus fins
    }
  },

  agneau: {
    id: 'agneau',
    name: 'Agneau',
    name_en: 'Lamb',
    icon: '🐑',
    color: '#8D6E63',
    histoire: "L'agneau est élevé depuis 10 000 ans au Moyen-Orient. En France, les Label Rouge (Agneau de Sisteron, Agneau du Quercy) et AOP (Prés-salés du Mont-Saint-Michel) garantissent une qualité exceptionnelle.",
    histoire_en: "Lamb has been raised for 10,000 years in the Middle East. In France, Label Rouge (Sisteron Lamb, Quercy Lamb) and AOP (Salt Meadow Lamb from Mont-Saint-Michel) guarantee exceptional quality.",
    nutrition: "Riche en protéines (25g/100g), fer héminique, zinc, vitamines B12 et B3. L'agneau de lait est plus tendre et délicat.",
    nutrition_en: "Rich in proteins (25g/100g), heme iron, zinc, vitamins B12 and B3. Milk-fed lamb is more tender and delicate.",
    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Congélation : -18°C maximum 6-8 mois.",
    conservation_en: "Fresh meat: 2-3 days at 35-40°F. Frozen: 0°F for up to 6-8 months.",
    selection: {
      couleur: "Rose pâle (agneau de lait) à rouge clair (agneau)",
      texture: "Chair fine et tendre, gras blanc ferme",
      age: "Agneau de lait (< 3 mois), agneau (3-12 mois), mouton (> 1 an)"
    },
    selection_en: {
      couleur: "Pale pink (milk-fed lamb) to light red (lamb)",
      texture: "Fine and tender meat, firm white fat",
      age: "Milk-fed lamb (< 3 months), lamb (3-12 months), mutton (> 1 year)"
    },
    preparation: {
      temperaturage: "Sortir 30-45 minutes avant cuisson",
      assaisonnement: "Ail, romarin, thym, moutarde, anchois",
      marinade: "Optionnelle : huile d'olive, citron, herbes"
    },
    // Facteurs de cuisson spécifiques à l'agneau
    cookingFactors: {
      boneFactor: 1.20,          // Os fins mais nombreux (carré, souris)
      bardingFactor: 1.12,       // Moins gras que boeuf, bardage utile
      thicknessExponent: 1.6,    // Chair dense et fine
      weightExponent: 0.88,      // Pièces souvent petites
      frozenTempFactor: 1.28,
      fridgeTempFactor: 1.08,
      baseThicknessRef: 2.0      // Morceaux généralement plus fins
    }
  },

  veau: {
    id: 'veau',
    name: 'Veau',
    name_en: 'Veal',
    icon: '🐄',
    color: '#FFAB91',
    histoire: "Le veau de lait français est réputé mondialement. Les Labels Rouge et le Veau d'Aveyron et du Ségala (IGP) garantissent une alimentation lactée et une chair claire et tendre.",
    histoire_en: "French milk-fed veal is world-renowned. Label Rouge and Aveyron & Ségala Veal (IGP) guarantee milk-fed diet and pale, tender meat.",
    nutrition: "Viande maigre (5-8% lipides), riche en protéines (20g/100g), fer, zinc et vitamines B. Plus digeste que le bœuf.",
    nutrition_en: "Lean meat (5-8% fat), rich in proteins (20g/100g), iron, zinc and B vitamins. More digestible than beef.",
    conservation: "Viande très fragile : 2 jours maximum à 2°C. Congélation : -18°C maximum 4 mois.",
    conservation_en: "Very delicate meat: 2 days maximum at 35°F. Frozen: 0°F for up to 4 months.",
    selection: {
      couleur: "Rose très pâle à blanc rosé (veau de lait)",
      texture: "Chair fine, tendre et délicate",
      qualite: "Label Rouge, IGP, veau élevé sous la mère"
    },
    selection_en: {
      couleur: "Very pale pink to pinkish white (milk-fed veal)",
      texture: "Fine, tender and delicate meat",
      qualite: "Look for milk-fed, organic or pasture-raised veal"
    },
    preparation: {
      temperaturage: "Sortir 20-30 minutes avant cuisson",
      assaisonnement: "Légèrement : sel, citron, sauge, estragon",
      cuisson: "Ne pas surcuire : le veau devient sec rapidement"
    },
    // Facteurs de cuisson spécifiques au veau
    cookingFactors: {
      boneFactor: 1.12,          // Os jeunes, moins denses
      bardingFactor: 1.10,       // Viande maigre, bardage recommandé
      thicknessExponent: 1.4,    // Chair tendre et fine
      weightExponent: 0.80,      // Cuisson rapide
      frozenTempFactor: 1.25,
      fridgeTempFactor: 1.08,
      baseThicknessRef: 1.5      // Escalopes fines
    }
  },

  volaille: {
    id: 'volaille',
    name: 'Volaille',
    name_en: 'Poultry',
    icon: '🍗',
    color: '#FFB300',
    histoire: "Le poulet fut domestiqué en Asie il y a 8000 ans. La Volaille de Bresse est la seule volaille au monde à bénéficier d'une AOP. Les races patrimoniales françaises sont réputées mondialement.",
    histoire_en: "Chicken was domesticated in Asia 8,000 years ago. Bresse Poultry is the only poultry in the world to hold an AOP designation. French heritage breeds are world-renowned.",
    nutrition: "Viande maigre exceptionnelle (poulet sans peau : 3% lipides), riche en protéines (24g/100g), vitamines B et niacine.",
    nutrition_en: "Exceptionally lean meat (skinless chicken: 3% fat), rich in proteins (24g/100g), B vitamins and niacin.",
    conservation: "Volaille fraîche : 2 jours à 2-4°C maximum. Très périssable. Congélation : -18°C maximum 6-8 mois.",
    conservation_en: "Fresh poultry: 2 days maximum at 35-40°F. Highly perishable. Frozen: 0°F for up to 6-8 months.",
    selection: {
      couleur: "Peau blanc crème à jaune, chair rose pâle ferme",
      texture: "Peau tendue sans déchirures, chair ferme",
      qualite: "AOP Volaille de Bresse, Label Rouge, Agriculture Biologique"
    },
    selection_en: {
      couleur: "Cream to yellow skin, firm pale pink flesh",
      texture: "Taut skin without tears, firm meat",
      qualite: "Free-range, organic, or heritage breed certified"
    },
    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson",
      assaisonnement: "Sel, poivre, herbes de Provence, thym, romarin, ail, citron",
      securite: "CRUCIAL : Température minimum 74°C à cœur pour éliminer salmonelles"
    },
    // Facteurs de cuisson spécifiques à la volaille
    cookingFactors: {
      boneFactor: 1.25,          // Os creux mais volumineux
      bardingFactor: 1.15,       // Chair maigre, bardage très utile
      skinFactor: 0.92,          // Peau protège et accélère (graisse sous-cutanée)
      thicknessExponent: 1.3,    // Chair moins dense
      weightExponent: 0.75,      // Pièces volumineuses mais creuses
      frozenTempFactor: 1.40,    // Très sensible au froid
      fridgeTempFactor: 1.15,
      baseThicknessRef: 3.0      // Cuisses épaisses
    }
  },

  gibier: {
    id: 'gibier',
    name: 'Gibier',
    name_en: 'Game',
    icon: '🦌',
    color: '#5D4037',
    histoire: "Le gibier désigne les animaux sauvages chassés : grands gibiers (cervidés, sangliers) et gibiers à plumes (faisans, perdrix). La chasse est encadrée légalement avec saisons et quotas.",
    histoire_en: "Game refers to wild hunted animals: large game (deer, wild boar) and game birds (pheasant, partridge). Hunting is legally regulated with seasons and quotas.",
    nutrition: "Viande extrêmement maigre (1-3% lipides), très riche en protéines (25-30g/100g), fer héminique, zinc. Valeur calorique faible : 100-120 kcal/100g.",
    nutrition_en: "Extremely lean meat (1-3% fat), very high in proteins (25-30g/100g), heme iron, zinc. Low caloric value: 100-120 kcal/100g.",
    conservation: "Gibier frais : 2-3 jours maximum à 2°C. Faisandage : 3-7 jours à 4-8°C. Congélation : -18°C jusqu'à 8-10 mois.",
    conservation_en: "Fresh game: 2-3 days maximum at 35°F. Hanging/aging: 3-7 days at 40-46°F. Frozen: 0°F for up to 8-10 months.",
    selection: {
      age: "Jeunes animaux plus tendres : marcassin vs sanglier, faon vs cerf",
      aspect: "Chair rouge foncé à brun, odeur forte mais agréable, forestière",
      saison: "Automne-hiver (septembre à février) : saison de chasse"
    },
    selection_en: {
      age: "Young animals are more tender: young boar vs adult, fawn vs deer",
      aspect: "Dark red to brown flesh, strong but pleasant, forest-like scent",
      saison: "Fall-winter (September to February): hunting season"
    },
    preparation: {
      temperaturage: "Sortir 1h avant cuisson",
      marinade: "Quasi-obligatoire : vin rouge, genièvre, thym, laurier 12-48h",
      bardage: "ESSENTIEL car très maigre : barder de lard pour éviter dessèchement"
    },
    // Facteurs de cuisson spécifiques au gibier
    cookingFactors: {
      boneFactor: 1.22,          // Os denses d'animaux sauvages
      bardingFactor: 1.25,       // TRÈS maigre, le bardage fait une énorme différence
      thicknessExponent: 1.7,    // Chair très dense et ferme
      weightExponent: 0.90,      // Nécessite cuisson plus uniforme
      frozenTempFactor: 1.35,
      fridgeTempFactor: 1.12,
      baseThicknessRef: 3.0,     // Pièces souvent épaisses
      marinadeFactor: 0.90       // La marinade attendrit et accélère légèrement
    }
  }
};

// Niveaux de cuisson avec températures (Source: Guide Complet Températures de Cuisson)
export const donenessLevels = {
  viande_rouge: [
    { id: 'bleu', name: 'Bleu', name_en: 'Blue', temp: 38, tempMax: 42, description: 'Centre froid et rouge vif', description_en: 'Cold and bright red center', color: '#D32F2F' },
    { id: 'saignant', name: 'Saignant', name_en: 'Rare', temp: 42, tempMax: 45, description: 'Centre tiède et rouge', description_en: 'Warm and red center', color: '#E53935' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 50, tempMax: 55, description: 'Centre chaud et rosé', description_en: 'Hot and pink center', color: '#F4511E' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 58, tempMax: 62, description: 'Centre légèrement rosé', description_en: 'Slightly pink center', color: '#8D6E63' },
    { id: 'tres_bien_cuit', name: 'Très bien cuit', name_en: 'Very Well Done', temp: 65, tempMax: 70, description: 'Centre gris-brun, pas de rose', description_en: 'Gray-brown center, no pink', color: '#5D4037' }
  ],
  agneau: [
    { id: 'saignant', name: 'Saignant', name_en: 'Rare', temp: 42, tempMax: 48, description: 'Centre rouge vif', description_en: 'Bright red center', color: '#D32F2F' },
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 48, tempMax: 52, description: 'Centre rosé tendre', description_en: 'Tender pink center', color: '#E57373' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 55, tempMax: 60, description: 'Centre rose pâle', description_en: 'Pale pink center', color: '#F4511E' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 65, tempMax: 68, description: 'Pas de rose', description_en: 'No pink', color: '#8D6E63' }
  ],
  veau: [
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 52, tempMax: 56, description: 'Centre rose délicat', description_en: 'Delicate pink center', color: '#F8BBD9' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 58, tempMax: 62, description: 'Légèrement rosé', description_en: 'Slightly pink', color: '#F48FB1' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 65, tempMax: 68, description: 'Blanc, entièrement cuit', description_en: 'White, fully cooked', color: '#EC407A' }
  ],
  porc: [
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 58, tempMax: 62, description: 'Rose pâle tendre (filet)', description_en: 'Tender pale pink (tenderloin)', color: '#F8BBD9' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 60, tempMax: 65, description: 'À peine rosé, juteux', description_en: 'Barely pink, juicy', color: '#F48FB1' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well Done', temp: 68, tempMax: 71, description: 'Cuit traditionnel', description_en: 'Traditional cooked', color: '#EC407A' },
    { id: 'effiloche', name: 'Effiloché', name_en: 'Pulled', temp: 88, tempMax: 93, description: 'Très tendre, se défait', description_en: 'Very tender, falls apart', color: '#AD1457' }
  ],
  volaille: [
    { id: 'poulet_entier', name: 'Poulet entier', name_en: 'Whole chicken', temp: 72, tempMax: 74, description: '74°C obligatoire - jus clair', description_en: '74°C required - clear juices', color: '#FFB300' },
    { id: 'blanc_poulet', name: 'Blanc de poulet', name_en: 'Chicken breast', temp: 68, tempMax: 70, description: 'Sous-vide idéal, juteux', description_en: 'Sous-vide ideal, juicy', color: '#FFCA28' },
    { id: 'cuisse', name: 'Cuisses de poulet', name_en: 'Chicken thighs', temp: 74, tempMax: 78, description: 'Fondant', description_en: 'Tender', color: '#FFA000' },
    { id: 'dinde', name: 'Dinde', name_en: 'Turkey', temp: 74, tempMax: 74, description: '74°C obligatoire', description_en: '74°C required', color: '#FF8F00' },
    { id: 'magret', name: 'Magret canard', name_en: 'Duck breast', temp: 52, tempMax: 56, description: 'Rosé comme bœuf', description_en: 'Pink like beef', color: '#E53935' },
    { id: 'canard_entier', name: 'Canard entier', name_en: 'Whole duck', temp: 74, tempMax: 74, description: 'Cuisse 74°C / Magret 60°C', description_en: 'Thigh 74°C / Breast 60°C', color: '#D84315' }
  ],
  gibier: [
    { id: 'rose', name: 'Rosé', name_en: 'Pink', temp: 48, tempMax: 52, description: 'Cervidés (cerf, chevreuil) - centre rosé', description_en: 'Deer family - pink center', color: '#A1887F' },
    { id: 'a_point', name: 'À point', name_en: 'Medium', temp: 55, tempMax: 60, description: 'Centre légèrement rosé, tendre', description_en: 'Slightly pink center, tender', color: '#8D6E63' },
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well done', temp: 65, tempMax: 68, description: 'Gibier à plumes, lièvre - cuit à cœur', description_en: 'Game birds, hare - cooked through', color: '#6D4C41' },
    { id: 'tres_bien_cuit', name: 'Très bien cuit (sécuritaire)', name_en: 'Very well done (safe)', temp: 71, tempMax: 74, description: '⚠️ Obligatoire sanglier/marcassin (trichinose)', description_en: '⚠️ Required for wild boar (trichinosis)', color: '#5D4037' }
  ],
  // Type spécifique pour sanglier/marcassin - SÉCURITÉ ALIMENTAIRE (trichinose)
  sanglier: [
    { id: 'bien_cuit', name: 'Bien cuit', name_en: 'Well done', temp: 68, tempMax: 71, description: 'Cuit à cœur, tendre', description_en: 'Cooked through, tender', color: '#8D6E63' },
    { id: 'tres_bien_cuit', name: 'Sécuritaire (71°C)', name_en: 'Safe (160°F)', temp: 71, tempMax: 74, description: '⚠️ Minimum recommandé (trichinose)', description_en: '⚠️ Recommended minimum (trichinosis)', color: '#5D4037' }
  ]
};

// Méthodes de cuisson - Liste complète (legacy, gardé pour compatibilité)
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

// ============================================
// CUISSONS EN DEUX ÉTAPES (Source: Guide PDF)
// ============================================

// Températures pour retirer du four AVANT saisie (carryover + saisie = +5-8°C)
export const twoStageConfig = {
  // SOUS-VIDE : Température du bain = température finale exacte
  sousvide: {
    isTwoStage: true,
    stage1: {
      name: 'Bain-marie',
      name_en: 'Water bath',
      // Températures par type de viande et cuisson
      temps: {
        boeuf: {
          bleu: { bath: 38, time_min: 45, time_max: 90 },      // 45min-1h30
          saignant: { bath: 43, time_min: 60, time_max: 180 }, // 1-3h
          a_point: { bath: 52, time_min: 90, time_max: 240 },  // 1h30-4h
          bien_cuit: { bath: 60, time_min: 120, time_max: 300 } // 2-5h
        },
        porc: {
          rose: { bath: 58, time_min: 120, time_max: 240 },    // 2-4h
          a_point: { bath: 62, time_min: 150, time_max: 300 }, // 2h30-5h
          effiloche: { bath: 74, time_min: 480, time_max: 1440 } // 8-24h
        },
        agneau: {
          saignant: { bath: 45, time_min: 60, time_max: 180 },
          rose: { bath: 50, time_min: 90, time_max: 180 },
          a_point: { bath: 57, time_min: 120, time_max: 240 }
        },
        volaille: {
          poulet_entier: { bath: 63, time_min: 120, time_max: 240 },  // 2-4h, 62-65°C selon PDF
          blanc_poulet: { bath: 63, time_min: 90, time_max: 180 },    // 1h30-3h
          cuisse: { bath: 65, time_min: 120, time_max: 240 },         // 2-4h, plus de collagène
          dinde: { bath: 63, time_min: 180, time_max: 300 },          // 3-5h (plus gros)
          magret: { bath: 54, time_min: 90, time_max: 180 }           // 1h30-3h, rosé
        },
        gibier: {
          rose: { bath: 50, time_min: 60, time_max: 180 },            // 1-3h, cerf/biche/chevreuil
          a_point: { bath: 57, time_min: 90, time_max: 240 },         // 1h30-4h
          bien_cuit: { bath: 63, time_min: 120, time_max: 300 },      // 2-5h, gibier à plumes/lièvre
          tres_bien_cuit: { bath: 71, time_min: 180, time_max: 480 }  // 3-8h, sanglier (71°C obligatoire)
        },
        // Sanglier/Marcassin - SÉCURITÉ : 71°C minimum obligatoire
        sanglier: {
          bien_cuit: { bath: 68, time_min: 240, time_max: 480 },      // 4-8h
          tres_bien_cuit: { bath: 71, time_min: 300, time_max: 600 }  // 5-10h, sécuritaire
        }
      }
    },
    stage2: {
      name: 'Saisie',
      name_en: 'Sear',
      time_seconds: 60,  // 30s-1min par face
      temp_surface: 250  // Très haute température
    },
    carryover: 0  // Pas de carryover significatif en sous-vide
  },

  // REVERSE SEAR : Cuisson basse temp puis saisie (four, BBQ indirect, kamado, fumoir...)
  reverse_sear: {
    isTwoStage: true,
    stage1: {
      name: 'Montée lente (basse température)',
      name_en: 'Low & slow (indirect heat)',
      ovenTemp: { min: 100, max: 130, recommended: 110 },
      // Température interne à atteindre AVANT saisie (cible finale - 5°C pour carryover/saisie)
      pullTemps: {
        boeuf: {
          bleu: 33,      // cible 38-42, retire à 33
          saignant: 37,  // cible 42-45, retire à 37
          a_point: 45,   // cible 50-55, retire à 45
          bien_cuit: 53  // cible 58-62, retire à 53
        },
        agneau: {
          saignant: 37,
          rose: 43,
          a_point: 50,
          bien_cuit: 60
        },
        veau: {
          rose: 47,
          a_point: 53,
          bien_cuit: 60
        },
        gibier: {
          rose: 43,            // cible 48-52, retire à 43
          a_point: 50,         // cible 55-60, retire à 50
          bien_cuit: 60,       // cible 65-68, retire à 60
          tres_bien_cuit: 66   // cible 71-74, retire à 66
        },
        // Sanglier/Marcassin - SÉCURITÉ : pas de rosé/à point !
        sanglier: {
          bien_cuit: 63,       // cible 68-71, retire à 63
          tres_bien_cuit: 66   // cible 71-74, retire à 66
        },
        volaille: {
          magret: 47,     // cible 52-56, retire à 47 (rosé)
          blanc_poulet: 63  // cible 68-70, retire à 63
        }
      }
    },
    stage2: {
      name: 'Saisie finale',
      name_en: 'Final sear',
      time_seconds: 90,  // 45s-1min par face
      temp_surface: 250
    },
    carryover: 5  // +5°C pendant repos après saisie
  },

  // BASSE TEMPÉRATURE (sans saisie finale) - four, kamado, BBQ indirect...
  basse_temp: {
    isTwoStage: false,
    stage1: {
      name: 'Cuisson basse température',
      name_en: 'Low temperature cooking',
      ovenTemp: { min: 60, max: 90, recommended: 80 },
      // Température interne à atteindre (+ 3°C de carryover au repos)
      pullTemps: {
        boeuf: {
          bleu: 35,
          saignant: 39,
          a_point: 47,
          bien_cuit: 55
        }
      }
    },
    carryover: 3
  },

  // BBQ INDIRECT / LOW & SLOW
  bbq_indirect: {
    isTwoStage: true,
    stage1: {
      name: 'Zone indirecte',
      name_en: 'Indirect zone',
      ovenTemp: { min: 107, max: 150, recommended: 120 },
      // Pour les grosses pièces (brisket, pulled pork)
      pullTemps: {
        boeuf: {
          brisket: 88  // cible 88-93°C (effiloché)
        },
        porc: {
          effiloche: 93  // cible 93-96°C
        }
      },
      // Temps approximatifs
      times: {
        brisket: { min: 480, max: 720 },    // 8-12h
        pulled_pork: { min: 480, max: 600 }, // 8-10h
        ribs: { min: 240, max: 360 }         // 4-6h
      }
    },
    stage2: {
      name: 'Finition (optionnelle)',
      name_en: 'Finishing (optional)',
      time_seconds: 120,  // 2min zone directe pour caraméliser
      temp_surface: 200
    },
    carryover: 8  // Grosses pièces = plus de carryover
  },

  // SAISIE PUIS CUISSON : L'inverse du reverse sear - saisir d'abord puis finir au four
  saisie_puis_cuisson: {
    isTwoStage: true,
    stage1: {
      name: 'Saisie',
      name_en: 'Sear',
      time_seconds: 90,  // 45s-1min par face
      temp_surface: 250  // Très haute température
    },
    stage2: {
      name: 'Finition au four',
      name_en: 'Oven finish',
      ovenTemp: { min: 150, max: 180, recommended: 160 },
      // Temps basé sur épaisseur et température cible
      pullTemps: {
        boeuf: {
          bleu: 35,
          saignant: 40,
          a_point: 48,
          bien_cuit: 55
        },
        agneau: {
          saignant: 40,
          rose: 45,
          a_point: 52
        },
        veau: {
          rose: 48,
          a_point: 55
        },
        volaille: {
          magret: 48,
          poulet: 70
        }
      }
    },
    carryover: 5  // La saisie initiale ajoute du carryover
  }
};

// Temps de repos recommandés par épaisseur
export const restingTimes = {
  thin: { cm: 2, seconds: 180 },    // 3 min
  medium: { cm: 4, seconds: 300 },  // 5 min
  thick: { cm: 6, seconds: 420 },   // 7 min
  roast: { cm: 10, seconds: 600 }   // 10 min (rôtis)
};

// ============================================
// TECHNIQUES DE CUISSON (le COMMENT cuire)
// ============================================
// La technique définit l'approche/méthode de cuisson
export const cookingTechniques = [
  {
    id: 'saisie_simple',
    name: 'Saisie seule',
    name_en: 'Pan sear only',
    description: 'Cuisson rapide à haute température - steaks fins',
    description_en: 'Quick high-heat cooking - thin steaks',
    icon: '🔥',
    isTwoStage: false,
    compatibleTools: ['poele', 'grill', 'plancha', 'bbq_direct'],
    idealFor: ['steak_fin', 'escalope', 'bavette', 'onglet'],
    donenessRange: ['bleu', 'saignant', 'a_point'], // Pas bien cuit en saisie seule
    tips: {
      fr: 'Poêle très chaude, ne pas bouger la viande pendant la saisie',
      en: 'Very hot pan, don\'t move the meat during searing'
    }
  },
  {
    id: 'saisie_puis_cuisson',
    name: 'Saisie + cuisson',
    name_en: 'Sear then cook',
    description: 'Saisir d\'abord puis finir au four ou à couvert',
    description_en: 'Sear first then finish in oven or covered',
    icon: '🍳➡️🔥',
    isTwoStage: true,
    stage1: 'searing',
    stage2: 'cooking',
    stage1Tools: ['poele', 'grill', 'plancha'],
    stage2Tools: ['four', 'poele_couverte', 'bbq_indirect'],
    idealFor: ['cote_boeuf', 'filet_epais', 'magret', 'cuisse_poulet'],
    tips: {
      fr: 'Saisir à feu vif puis baisser le feu ou passer au four',
      en: 'Sear over high heat then lower heat or transfer to oven'
    }
  },
  {
    id: 'reverse_sear',
    name: 'Reverse sear',
    name_en: 'Reverse sear',
    description: 'Four basse température puis saisie finale - cuisson homogène',
    description_en: 'Low temp oven then final sear - even cooking',
    icon: '🌡️➡️🔥',
    isTwoStage: true,
    stage1: 'low_temp_cooking',
    stage2: 'searing',
    stage1Tools: ['four', 'bbq_indirect'],
    stage2Tools: ['poele', 'grill', 'chalumeau', 'bbq_direct'],
    idealFor: ['entrecote_epaisse', 'cote_boeuf', 'filet_epais', 'prime_rib'],
    tips: {
      fr: 'Four à 110°C jusqu\'à 5°C sous la cible, puis saisie 45s/face',
      en: 'Oven at 230°F until 10°F below target, then sear 45s/side'
    }
  },
  {
    id: 'sous_vide',
    name: 'Sous-vide',
    name_en: 'Sous-vide',
    description: 'Cuisson précise sous vide puis saisie - perfection garantie',
    description_en: 'Precise vacuum cooking then sear - guaranteed perfection',
    icon: '💧➡️🔥',
    isTwoStage: true,
    stage1: 'water_bath',
    stage2: 'searing',
    stage1Tools: ['bain_eau', 'thermoplongeur', 'braises_indirectes'],
    stage2Tools: ['poele', 'grill', 'chalumeau', 'bbq_direct'],
    idealFor: ['tous_morceaux', 'viandes_delicates', 'cuissons_longues'],
    requiresVacuum: true, // Nécessite mise sous vide
    tips: {
      fr: 'Sécher parfaitement la viande avant de saisir',
      en: 'Pat meat completely dry before searing'
    }
  },
  {
    id: 'basse_temperature',
    name: 'Basse température',
    name_en: 'Low temperature',
    description: 'Cuisson lente au four sans saisie - tendre et moelleux',
    description_en: 'Slow oven cooking without searing - tender and moist',
    icon: '🌡️',
    isTwoStage: false,
    compatibleTools: ['four', 'bbq_indirect'],
    idealFor: ['roti', 'gigot', 'epaule', 'cote_boeuf'],
    tips: {
      fr: 'Four entre 60-90°C, temps long mais résultat parfait',
      en: 'Oven at 140-195°F, long time but perfect result'
    }
  },
  {
    id: 'cuisson_lente',
    name: 'Mijoté / Braisé',
    name_en: 'Braised / Stewed',
    description: 'Cuisson longue en liquide - viandes à collagène',
    description_en: 'Long cooking in liquid - collagen-rich meats',
    icon: '🥘',
    isTwoStage: false,
    compatibleTools: ['cocotte', 'faitout', 'four', 'autocuiseur'],
    idealFor: ['bourguignon', 'joue', 'paleron', 'jarret', 'queue'],
    requiresLiquid: true,
    tips: {
      fr: 'Saisir avant de braiser pour plus de saveur',
      en: 'Sear before braising for more flavor'
    }
  },
  {
    id: 'grill_direct',
    name: 'Grill direct',
    name_en: 'Direct grilling',
    description: 'Cuisson directe sur les flammes/braises',
    description_en: 'Direct cooking over flames/coals',
    icon: '🔥',
    isTwoStage: false,
    compatibleTools: ['bbq_direct', 'grill', 'plancha'],
    idealFor: ['steak', 'brochette', 'cote_agneau', 'saucisse'],
    tips: {
      fr: 'Braises bien chaudes, retourner une seule fois',
      en: 'Hot coals, flip only once'
    }
  },
  {
    id: 'bbq_low_slow',
    name: 'BBQ Low & Slow',
    name_en: 'BBQ Low & Slow',
    description: 'Cuisson indirecte longue - pulled pork, brisket',
    description_en: 'Long indirect cooking - pulled pork, brisket',
    icon: '🍖',
    isTwoStage: true,
    stage1: 'smoking',
    stage2: 'resting', // Le repos est crucial
    stage1Tools: ['bbq_indirect', 'fumoir'],
    idealFor: ['brisket', 'pulled_pork', 'ribs', 'epaule'],
    tips: {
      fr: 'Température stable 107-120°C, patience est la clé',
      en: 'Stable temp 225-250°F, patience is key'
    }
  },
  {
    id: 'rotissoire',
    name: 'Rôtissoire',
    name_en: 'Rotisserie',
    description: 'Rotation continue - cuisson uniforme et peau croustillante',
    description_en: 'Continuous rotation - even cooking and crispy skin',
    icon: '🔄',
    isTwoStage: false,
    compatibleTools: ['rotissoire', 'bbq_rotissoire', 'four_rotissoire'],
    idealFor: ['poulet_entier', 'gigot', 'roti_boeuf'],
    tips: {
      fr: 'Bien ficeler la viande, récupérer le jus',
      en: 'Truss meat well, collect the drippings'
    }
  },
  {
    id: 'wok',
    name: 'Sauté au wok',
    name_en: 'Wok stir-fry',
    description: 'Cuisson ultra-rapide à très haute température',
    description_en: 'Ultra-fast cooking at very high temperature',
    icon: '🥢',
    isTwoStage: false,
    compatibleTools: ['wok'],
    idealFor: ['emince', 'lamelles', 'petits_morceaux'],
    tips: {
      fr: 'Tout préparer avant, cuire par petites quantités',
      en: 'Prepare everything first, cook in small batches'
    }
  },
  {
    id: 'rotir',
    name: 'Rôtir',
    name_en: 'Roast',
    description: 'Rôtissage classique au four ou en cocotte - poulet du quotidien',
    description_en: 'Classic roasting in oven or Dutch oven - everyday chicken',
    icon: '🍗',
    isTwoStage: false,
    compatibleTools: ['four', 'cocotte', 'bbq_gaz', 'bbq_charbon', 'kamado'],
    idealFor: ['poulet_entier', 'roti_boeuf', 'roti_porc', 'gigot', 'dinde'],
    tips: {
      fr: 'Préchauffer, arroser régulièrement, laisser reposer',
      en: 'Preheat, baste regularly, let it rest'
    }
  },
  {
    id: 'convivial',
    name: 'Cuisson conviviale',
    name_en: 'Table cooking',
    description: 'Cuisson à table pour repas partagé - fondue, raclette, pierrade',
    description_en: 'Table cooking for shared meals - fondue, raclette, hot stone',
    icon: '🫕',
    isTwoStage: false,
    compatibleTools: ['pierrade', 'fondue', 'raclette'],
    idealFor: ['emince', 'lamelles', 'cubes', 'petits_morceaux'],
    tips: {
      fr: 'Viande émincée très finement, prévoir sauces variées',
      en: 'Thinly sliced meat, provide various sauces'
    }
  }
];

// ============================================
// OUTILS DE CUISSON (le AVEC QUOI cuire)
// ============================================
// L'outil est le matériel/équipement utilisé
export const cookingTools = [
  // === INTÉRIEUR ===
  {
    id: 'poele',
    name: 'Poêle',
    name_en: 'Pan / Skillet',
    icon: '🍳',
    category: 'interieur',
    hasIntensity: true, // Feu doux/moyen/vif
    heatSource: 'direct',
    idealMaterials: ['fonte', 'inox', 'fer'],
    tips: {
      fr: 'Préchauffer 2-3 min, huile qui fume légèrement',
      en: 'Preheat 2-3 min, oil slightly smoking'
    }
  },
  {
    id: 'four',
    name: 'Four',
    name_en: 'Oven',
    icon: '🔲',
    category: 'interieur',
    hasThermostat: true,
    tempRange: [60, 280],
    modes: ['convection', 'statique', 'grill'],
    tips: {
      fr: 'Toujours préchauffer, utiliser une sonde',
      en: 'Always preheat, use a probe thermometer'
    }
  },
  {
    id: 'cocotte',
    name: 'Cocotte / Faitout',
    name_en: 'Dutch oven',
    icon: '🥘',
    category: 'interieur',
    hasIntensity: true,
    hasLid: true,
    idealFor: ['braise', 'mijote', 'roti_cocotte'],
    tips: {
      fr: 'Fonte émaillée idéale, couvercle pour garder l\'humidité',
      en: 'Enameled cast iron ideal, lid to retain moisture'
    }
  },
  {
    id: 'wok',
    name: 'Wok',
    name_en: 'Wok',
    icon: '🥡',
    category: 'interieur',
    hasIntensity: true,
    heatSource: 'direct',
    requiresHighHeat: true,
    tips: {
      fr: 'Feu très vif, huile avec point de fumée élevé',
      en: 'Very high heat, oil with high smoke point'
    }
  },
  {
    id: 'autocuiseur',
    name: 'Autocuiseur / Cocotte-minute',
    name_en: 'Pressure cooker',
    icon: '♨️',
    category: 'interieur',
    speedFactor: 3, // 3x plus rapide
    tips: {
      fr: 'Diviser les temps de cuisson par 3',
      en: 'Divide cooking times by 3'
    }
  },

  // === PRÉCISION (Sous-vide) ===
  {
    id: 'bain_eau',
    name: 'Bain d\'eau chaude',
    name_en: 'Hot water bath',
    icon: '💧',
    category: 'precision',
    hasThermostat: true,
    tempRange: [45, 85],
    requiresThermometer: true,
    tips: {
      fr: 'Maintenir température stable, circulateur recommandé',
      en: 'Maintain stable temperature, circulator recommended'
    }
  },
  {
    id: 'thermoplongeur',
    name: 'Thermoplongeur / Circulateur',
    name_en: 'Immersion circulator',
    icon: '🌡️',
    category: 'precision',
    hasThermostat: true,
    tempRange: [25, 95],
    precision: 0.1, // Précision au dixième de degré
    tips: {
      fr: 'Le must pour le sous-vide, précision au dixième',
      en: 'The best for sous-vide, precise to 0.1°'
    }
  },
  {
    id: 'chalumeau',
    name: 'Chalumeau de cuisine',
    name_en: 'Kitchen torch',
    icon: '🔦',
    category: 'precision',
    heatSource: 'direct',
    forSearing: true,
    tips: {
      fr: 'Pour finition après sous-vide, mouvement constant',
      en: 'For finishing after sous-vide, constant motion'
    }
  },

  // === EXTÉRIEUR / BBQ ===
  {
    id: 'bbq_direct',
    name: 'BBQ zone directe',
    name_en: 'BBQ direct zone',
    icon: '🔥',
    category: 'exterieur',
    heatSource: 'direct',
    hasIntensity: true,
    tips: {
      fr: 'Braises incandescentes, viande directement au-dessus',
      en: 'Glowing coals, meat directly above'
    }
  },
  {
    id: 'bbq_indirect',
    name: 'BBQ zone indirecte',
    name_en: 'BBQ indirect zone',
    icon: '🌡️',
    category: 'exterieur',
    heatSource: 'indirect',
    hasThermostat: false, // Contrôle par les évents
    tips: {
      fr: 'Braises d\'un côté, viande de l\'autre, couvercle fermé',
      en: 'Coals on one side, meat on the other, lid closed'
    }
  },
  {
    id: 'braises_indirectes',
    name: 'Braises (indirect/enterré)',
    name_en: 'Indirect coals/buried',
    icon: '🪨',
    category: 'exterieur',
    heatSource: 'indirect',
    forSousVide: true, // Peut faire du sous-vide BBQ style
    tips: {
      fr: 'Pour cuisson enterrée ou pochage en sachet dans les braises',
      en: 'For buried cooking or pouch cooking in coals'
    }
  },
  {
    id: 'fumoir',
    name: 'Fumoir',
    name_en: 'Smoker',
    icon: '💨',
    category: 'exterieur',
    heatSource: 'indirect',
    addsFlavor: true,
    tempRange: [80, 150],
    tips: {
      fr: 'Bois de qualité, température basse et stable',
      en: 'Quality wood, low and steady temperature'
    }
  },
  {
    id: 'grill',
    name: 'Grill / Grille',
    name_en: 'Grill grate',
    icon: '🍖',
    category: 'exterieur',
    heatSource: 'direct',
    hasIntensity: true,
    tips: {
      fr: 'Grille propre et huilée, marques de grill parfaites',
      en: 'Clean and oiled grate, perfect grill marks'
    }
  },
  {
    id: 'plancha',
    name: 'Plancha',
    name_en: 'Plancha / Flat top',
    icon: '🔳',
    category: 'exterieur',
    heatSource: 'direct',
    hasIntensity: true,
    surface: 'flat',
    tips: {
      fr: 'Surface très chaude, idéal pour saisie uniforme',
      en: 'Very hot surface, ideal for even searing'
    }
  },
  {
    id: 'rotissoire',
    name: 'Rôtissoire',
    name_en: 'Rotisserie',
    icon: '🔄',
    category: 'exterieur',
    hasRotation: true,
    tips: {
      fr: 'Bien équilibrer la pièce, ficeler serré',
      en: 'Balance the meat well, truss tightly'
    }
  },

  // === BBQ GAZ / CHARBON ===
  {
    id: 'bbq_gaz',
    name: 'BBQ Gaz',
    name_en: 'Gas BBQ / Gas Grill',
    icon: '🔥',
    category: 'exterieur',
    heatSource: 'both', // Direct et indirect possible
    hasThermostat: true, // Contrôle facile
    tempRange: [100, 350],
    modes: ['direct', 'indirect'],
    tips: {
      fr: 'Allumage facile, contrôle précis, préchauffer 10-15 min',
      en: 'Easy start, precise control, preheat 10-15 min'
    }
  },
  {
    id: 'bbq_charbon',
    name: 'BBQ Charbon',
    name_en: 'Charcoal BBQ / Kettle Grill',
    icon: '🪵',
    category: 'exterieur',
    heatSource: 'both', // Direct et indirect
    hasThermostat: false, // Contrôle par évents
    tempRange: [100, 400],
    modes: ['direct', 'indirect', 'fumage'],
    addsFlavor: true,
    tips: {
      fr: 'Saveur fumée authentique, maîtrise des évents, charbon de bois de qualité',
      en: 'Authentic smoky flavor, vent control mastery, quality charcoal'
    }
  },

  // === BBQ MODERNES / POLYVALENTS ===
  {
    id: 'kamado',
    name: 'Kamado (Big Green Egg, Montvel...)',
    name_en: 'Kamado (Big Green Egg, Kamado Joe...)',
    icon: '🥚',
    category: 'exterieur',
    heatSource: 'both', // Direct et indirect
    hasThermostat: false, // Contrôle par évents
    tempRange: [80, 400], // Très polyvalent
    modes: ['direct', 'indirect', 'fumage', 'pizza'],
    tips: {
      fr: 'Céramique = inertie thermique, contrôle par les évents, polyvalent',
      en: 'Ceramic = thermal mass, vent control, very versatile'
    }
  },
  {
    id: 'pellet_smoker',
    name: 'Pellet smoker (Traeger, Weber...)',
    name_en: 'Pellet smoker (Traeger, Weber...)',
    icon: '💨',
    category: 'exterieur',
    heatSource: 'indirect',
    hasThermostat: true, // Contrôle électronique
    tempRange: [80, 260],
    addsFlavor: true,
    tips: {
      fr: 'Fumage automatisé, température stable, set & forget',
      en: 'Automated smoking, stable temp, set & forget'
    }
  },

  // === ÉLECTROMÉNAGER MODERNE ===
  {
    id: 'mijoteuse',
    name: 'Mijoteuse électrique (Crock-Pot)',
    name_en: 'Slow cooker (Crock-Pot)',
    icon: '🍲',
    category: 'interieur',
    hasIntensity: true, // Low / High
    tempRange: [80, 150],
    speedFactor: 0.5, // Plus lent que cocotte
    tips: {
      fr: 'Set & forget, cuisson sans surveillance, idéal pour braisés',
      en: 'Set & forget, unattended cooking, ideal for braises'
    }
  },
  {
    id: 'airfryer',
    name: 'Air Fryer',
    name_en: 'Air Fryer',
    icon: '🌀',
    category: 'interieur',
    hasThermostat: true,
    tempRange: [80, 200],
    heatSource: 'convection',
    tips: {
      fr: 'Croustillant sans huile, préchauffage rapide, petites portions',
      en: 'Crispy without oil, quick preheat, small portions'
    }
  },
  {
    id: 'multicuiseur',
    name: 'Multicuiseur (Instant Pot, Cookeo)',
    name_en: 'Multi-cooker (Instant Pot)',
    icon: '⚡',
    category: 'interieur',
    modes: ['pression', 'mijoteuse', 'saisir', 'vapeur'],
    speedFactor: 3, // Mode pression
    tips: {
      fr: 'Tout-en-un : pression, mijoteuse, saisie, vapeur',
      en: 'All-in-one: pressure, slow cook, sear, steam'
    }
  },
  {
    id: 'four_vapeur',
    name: 'Four vapeur / Combi',
    name_en: 'Steam oven / Combi',
    icon: '💨',
    category: 'interieur',
    hasThermostat: true,
    tempRange: [40, 230],
    modes: ['vapeur', 'convection', 'combi'],
    tips: {
      fr: 'Cuisson douce à la vapeur, viande ultra-juteuse',
      en: 'Gentle steam cooking, ultra-juicy meat'
    }
  },

  // === CUISSON TRADITIONNELLE ===
  {
    id: 'cheminee',
    name: 'Cheminée / Âtre',
    name_en: 'Fireplace / Hearth',
    icon: '🔥',
    category: 'traditionnel',
    heatSource: 'direct',
    addsFlavor: true,
    tips: {
      fr: 'Cuisson ancestrale, saveur unique, nécessite surveillance',
      en: 'Ancestral cooking, unique flavor, requires attention'
    }
  },
  {
    id: 'pierrade',
    name: 'Pierrade / Pierre chaude',
    name_en: 'Hot stone',
    icon: '🪨',
    category: 'table',
    heatSource: 'direct',
    tips: {
      fr: 'Cuisson conviviale à table, tranches très fines',
      en: 'Convivial table cooking, very thin slices'
    }
  },
  {
    id: 'fondue',
    name: 'Fondue bourguignonne',
    name_en: 'Fondue pot',
    icon: '🫕',
    category: 'table',
    heatSource: 'direct',
    tips: {
      fr: 'Huile à 180°C, petits cubes de viande, convivial',
      en: 'Oil at 350°F, small meat cubes, convivial'
    }
  },
  {
    id: 'raclette',
    name: 'Appareil à raclette (avec grill)',
    name_en: 'Raclette grill',
    icon: '🧀',
    category: 'table',
    heatSource: 'direct',
    tips: {
      fr: 'Petites portions, cuisson rapide à table, tranches fines',
      en: 'Small portions, quick table cooking, thin slices'
    }
  }
];

// Mapping technique -> outils compatibles (pour filtrer dans le Calculator)
// Pour les techniques en 2 temps: stage1 = première étape, stage2 = deuxième étape
// Mise à jour: 2026-01-09 selon mapping utilisateur
export const techniqueToolsMapping = {
  // Saisie simple - haute température, cuisson rapide
  saisie_simple: ['poele', 'wok', 'chalumeau', 'bbq_gaz', 'bbq_charbon', 'kamado', 'grill', 'plancha', 'cheminee', 'pierrade', 'fondue', 'raclette', 'airfryer', 'multicuiseur'],

  // Saisie puis cuisson - saisir d'abord, puis finir au four/couvert (2 outils)
  saisie_puis_cuisson: {
    stage1: ['poele', 'wok', 'bbq_gaz', 'bbq_charbon', 'kamado', 'grill', 'plancha', 'cheminee', 'pierrade', 'raclette', 'airfryer', 'multicuiseur'],
    stage2: ['four', 'cocotte', 'bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker', 'airfryer', 'multicuiseur', 'poele', 'cheminee']
  },

  // Reverse sear - basse temp d'abord, saisie ensuite (2 outils différents)
  reverse_sear: {
    stage1: ['four', 'four_vapeur', 'bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker'],
    stage2: ['poele', 'chalumeau', 'bbq_gaz', 'bbq_charbon', 'kamado', 'grill', 'plancha', 'cheminee']
  },

  // Sous-vide - bain puis saisie (2 outils différents obligatoirement)
  sous_vide: {
    stage1: ['bain_eau', 'thermoplongeur'],
    stage2: ['poele', 'chalumeau', 'bbq_gaz', 'bbq_charbon', 'kamado', 'grill', 'plancha']
  },

  // Basse température - cuisson longue douce
  basse_temperature: ['four', 'cocotte', 'mijoteuse', 'four_vapeur', 'bain_eau', 'thermoplongeur', 'bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker', 'multicuiseur'],

  // Cuisson lente / Braisé
  cuisson_lente: ['four', 'cocotte', 'mijoteuse', 'four_vapeur', 'bbq_charbon', 'kamado', 'pellet_smoker', 'autocuiseur', 'multicuiseur', 'cheminee'],

  // Grill direct - haute chaleur directe
  grill_direct: ['bbq_gaz', 'bbq_charbon', 'kamado', 'grill', 'plancha', 'cheminee'],

  // BBQ Low & Slow - fumage longue durée
  bbq_low_slow: ['bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker', 'fumoir', 'cheminee'],

  // Rôtissoire / Tournebroche
  rotissoire: ['rotissoire', 'four', 'bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker', 'cheminee'],

  // Wok - haute chaleur, mouvement constant
  wok: ['wok', 'poele'],

  // Rôtir - technique de rôtissage classique (four, cocotte, BBQ)
  rotir: ['four', 'cocotte', 'four_vapeur', 'bbq_gaz', 'bbq_charbon', 'kamado', 'pellet_smoker', 'rotissoire', 'cheminee', 'airfryer'],

  // Convivial / Table - cuisson à table
  convivial: ['pierrade', 'fondue', 'raclette', 'bbq_gaz', 'bbq_charbon', 'plancha', 'cheminee']
};

export default {
  meatCategories,
  donenessLevels,
  cookingMethods,
  intensityLevels,
  thermostatToTemp,
  tempToThermostat,
  twoStageConfig,
  restingTimes,
  cookingTechniques,
  cookingTools,
  techniqueToolsMapping
};
