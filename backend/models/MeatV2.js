const mongoose = require('mongoose');

// Schéma pour les températures de cuisson désirées
const CookingTemperatureSchema = new mongoose.Schema({
  doneness: {
    type: String,
    required: true
    // Aucune restriction - peut être: bleu, saignant, à point, bien cuit, rosé, juteux, etc.
  },
  coreTemperature: {
    type: Number,
    required: true,
    min: 38,
    max: 100,
    comment: "Température à cœur en °C pour dégustation optimale"
  },
  safetyTemperature: {
    type: Number,
    required: false,
    comment: "Température de sécurité UE pour cette cuisson (peut être null si non recommandé)"
  },
  safetyNote: {
    type: String,
    required: false,
    comment: "Note de sécurité: 'Non recommandé', 'Obligatoire', etc."
  },
  description: {
    type: String,
    required: true,
    comment: "Description de l'aspect (Rouge tiède, Rosé, etc.)"
  },
  restingTime: {
    type: Number,
    default: 5,
    comment: "Temps de repos recommandé en minutes pour cette cuisson"
  }
});

// Schéma pour les morceaux de viande (centaines de possibilités)
const MeatCutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameEn: String,
  alternativeNames: [String], // Noms alternatifs/régionaux
  description: String,

  // Caractéristiques physiques
  typicalWeight: {
    min: Number,
    max: Number,
    unit: {
      type: String,
      default: 'kg'
    }
  },
  typicalDimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: {
      type: String,
      default: 'cm'
    }
  },

  // Caractéristiques de la viande
  tenderness: {
    type: String,
    enum: ['très_tendre', 'tendre', 'moyennement_tendre', 'ferme', 'très_ferme']
  },
  fatContent: {
    type: String,
    enum: ['très_maigre', 'maigre', 'moyen', 'gras', 'très_gras', 'persillé']
  },

  // Recommandations générales
  recommendations: String,
  bestUses: [String], // Ex: ["grillade", "rôti", "braisage"]

  // Températures recommandées pour ce morceau
  temperatures: [CookingTemperatureSchema],

  // Temps de base par kg et par cm (pour calculs)
  baseTimePerKg: {
    type: Number,
    default: 20,
    comment: "Temps de base en minutes par kg"
  },
  baseTimePerCm: {
    type: Number,
    default: 4,
    comment: "Temps de base en minutes par cm d'épaisseur"
  }
});

// Schéma principal pour les viandes
const MeatSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['boeuf', 'veau', 'porc', 'agneau', 'mouton', 'volaille', 'saucisses', 'cerf', 'chevreuil', 'sanglier', 'lievre', 'faisan', 'poisson', 'fruits_mer']
  },
  name: {
    type: String,
    required: true
  },
  nameEn: String,
  description: String,
  cuts: [MeatCutSchema]
}, {
  timestamps: true
});

// Schéma pour les APPAREILS de cuisson (séparé de la méthode)
const CookingApplianceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  nameEn: String,
  category: {
    type: String,
    enum: ['four', 'bbq_grill', 'plaque_cuisson', 'mijoteuse', 'fumoir', 'special', 'traditionnel'],
    required: true
  },
  description: String,

  // Plage de température possible pour cet appareil
  temperatureRange: {
    min: {
      type: Number,
      required: true,
      comment: "Température minimum en °C (peut être 40°C pour basse température)"
    },
    max: {
      type: Number,
      required: true,
      comment: "Température maximum en °C (peut aller jusqu'à 300°C+)"
    }
  },

  // Caractéristiques de l'appareil
  hasTemperatureControl: {
    type: Boolean,
    default: true
  },
  canDoIndirectHeat: {
    type: Boolean,
    default: false
  },
  canDoSmoke: {
    type: Boolean,
    default: false
  },

  // Facteur d'ajustement général pour cet appareil
  adjustmentFactor: {
    type: Number,
    default: 1.0
  }
}, {
  timestamps: true
});

// Schéma pour les MÉTHODES de cuisson (séparé de l'appareil)
const CookingMethodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  nameEn: String,
  category: {
    type: String,
    enum: ['direct', 'indirect', 'mixte', 'humide', 'sec', 'fumage', 'sous_vide', 'basse_temperature'],
    required: true
  },
  description: String,

  // Plage de température recommandée pour cette méthode
  recommendedTempRange: {
    min: Number,
    max: Number
  },

  // Facteur d'ajustement pour cette méthode
  adjustmentFactor: {
    type: Number,
    default: 1.0
  },

  // Temps de repos typique pour cette méthode
  typicalRestingTime: {
    type: Number,
    default: 5,
    comment: "Temps de repos en minutes"
  }
}, {
  timestamps: true
});

module.exports = {
  Meat: mongoose.model('MeatV2', MeatSchema),
  CookingAppliance: mongoose.model('CookingAppliance', CookingApplianceSchema),
  CookingMethod: mongoose.model('CookingMethod', CookingMethodSchema)
};
