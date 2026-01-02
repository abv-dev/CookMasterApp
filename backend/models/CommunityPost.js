const mongoose = require('mongoose');

// Schéma pour les réactions emoji
const ReactionSchema = new mongoose.Schema({
  emoji: {
    type: String,
    required: true,
    // Emojis autorisés pour les réactions
    enum: ['👍', '❤️', '🔥', '😋', '🤤', '👨‍🍳', '⭐', '💯']
  },
  count: {
    type: Number,
    default: 0,
    min: 0
  }
});

// Schéma pour les métadonnées de cuisson
const CookingMetadataSchema = new mongoose.Schema({
  meatCategory: {
    type: String,
    required: true
  },
  meatName: String,
  cutName: String,

  weight: Number,
  thickness: Number,

  cookingTemp: Number,
  targetTemp: Number,
  doneness: String,

  appliance: String,
  method: String,

  totalTime: Number, // en minutes

  // Paramètres avancés
  restingTime: Number,
  initialSear: Boolean,
  finalSear: Boolean
});

// Schéma principal pour les posts de la communauté
const CommunityPostSchema = new mongoose.Schema({
  // Informations de l'auteur (anonyme pour l'instant - on pourra ajouter auth plus tard)
  authorName: {
    type: String,
    default: 'Chef Anonyme'
  },

  // Image de la cuisson
  imageUrl: {
    type: String,
    required: true,
    comment: 'URL ou chemin vers l\'image uploadée'
  },

  // Description optionnelle de l'utilisateur
  description: {
    type: String,
    maxlength: 500,
    default: ''
  },

  // Métadonnées de cuisson (auto-générées depuis le calculateur)
  cookingData: {
    type: CookingMetadataSchema,
    required: true
  },

  // Réactions emoji
  reactions: {
    type: [ReactionSchema],
    default: [
      { emoji: '👍', count: 0 },
      { emoji: '❤️', count: 0 },
      { emoji: '🔥', count: 0 },
      { emoji: '😋', count: 0 },
      { emoji: '🤤', count: 0 },
      { emoji: '👨‍🍳', count: 0 },
      { emoji: '⭐', count: 0 },
      { emoji: '💯', count: 0 }
    ]
  },

  // Statistiques
  views: {
    type: Number,
    default: 0
  },

  // Statut de modération (pour gérer le spam plus tard si besoin)
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'approved' // Auto-approuvé pour l'instant
  }
}, {
  timestamps: true // Ajoute automatiquement createdAt et updatedAt
});

// Index pour performance
CommunityPostSchema.index({ createdAt: -1 }); // Pour trier par date décroissante
CommunityPostSchema.index({ status: 1 }); // Pour filtrer les posts approuvés

module.exports = mongoose.model('CommunityPost', CommunityPostSchema);
