const mongoose = require('mongoose');

const CookingHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  meatCategory: {
    type: String,
    required: true
  },
  meatName: {
    type: String,
    required: true
  },
  cutName: {
    type: String,
    required: true
  },
  cookingMethod: {
    type: String,
    required: true
  },
  parameters: {
    weight: {
      value: Number,
      unit: String
    },
    dimensions: {
      thickness: Number,
      length: Number,
      width: Number,
      unit: String
    },
    cookingTemperature: {
      type: Number,
      comment: "Température du four/plancha/etc"
    },
    targetDoneness: {
      type: String,
      comment: "bleu, saignant, à point, etc."
    },
    targetCoreTemperature: {
      type: Number,
      comment: "Température à coeur ciblée"
    }
  },
  calculatedCookingTime: {
    type: Number,
    comment: "Temps de cuisson calculé en minutes"
  },
  actualCookingTime: {
    type: Number,
    comment: "Temps de cuisson réel utilisé"
  },
  restingTime: {
    type: Number,
    comment: "Temps de repos"
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  notes: String,
  photos: [String],
  success: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index pour rechercher rapidement l'historique d'un utilisateur
CookingHistorySchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model('CookingHistory', CookingHistorySchema);
