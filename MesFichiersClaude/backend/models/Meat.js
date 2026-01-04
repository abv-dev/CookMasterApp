const mongoose = require('mongoose');

const CookingTemperatureSchema = new mongoose.Schema({
  doneness: {
    type: String,
    required: true,
    enum: ['bleu', 'saignant', 'à point', 'bien cuit', 'très bien cuit']
  },
  coreTemperature: {
    type: Number,
    required: true,
    comment: "Température à coeur en °C"
  },
  description: {
    type: String,
    required: true
  }
});

const CookingMethodSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
    enum: [
      // Cuissons au four
      'four_traditionnel', 'four_convection', 'four_vapeur', 'four_chaleur_tournante',
      // Cuissons à la poêle/plancha
      'poele', 'plancha', 'wok', 'sauteuse',
      // Grillades
      'grill', 'barbecue_charbon', 'barbecue_gaz', 'barbecue_electrique', 'salamandre',
      // Cuissons mijotées
      'cocotte', 'mijoteuse', 'braisage', 'ragout',
      // Cuissons sous-vide et basse température
      'sous_vide', 'basse_temperature',
      // Rôtissage
      'rotissoire', 'rotissoire_verticale',
      // Cuissons vapeur et humide
      'vapeur', 'court_bouillon', 'pochage',
      // Cuissons rapides
      'saisie', 'flambé',
      // Cuissons fumées
      'fumoir_chaud', 'fumoir_froid',
      // Cuissons spéciales
      'air_fryer', 'micro_ondes', 'pierre_chaude',
      // Cuissons traditionnelles
      'tajine', 'papillote', 'croute_sel', 'croute_argile',
      // Cuissons professionnelles
      'plancha_professionnelle', 'grill_pierre_de_lave', 'grill_salamandre'
    ]
  },
  cookingTemperature: {
    type: Number,
    required: true,
    comment: "Température de cuisson en °C (four, plancha, etc.)"
  },
  baseTimePerKg: {
    type: Number,
    required: true,
    comment: "Temps de base en minutes par kg"
  },
  baseTimePerCm: {
    type: Number,
    comment: "Temps de base en minutes par cm d'épaisseur (optionnel)"
  },
  adjustmentFactor: {
    type: Number,
    default: 1.0,
    comment: "Facteur d'ajustement pour ce mode de cuisson"
  },
  restingTime: {
    type: Number,
    default: 0,
    comment: "Temps de repos recommandé en minutes"
  }
});

const MeatCutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameEn: String,
  description: String,
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
  recommendations: String,
  cookingMethods: [CookingMethodSchema],
  temperatures: [CookingTemperatureSchema]
});

const MeatSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['boeuf', 'veau', 'porc', 'agneau', 'mouton', 'volaille', 'gibier', 'poisson', 'fruits_mer']
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

module.exports = mongoose.model('Meat', MeatSchema);
