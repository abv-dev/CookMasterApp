import mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  type: {
    type: String,
    enum: ['cut', 'recipe'],
    default: 'cut'
  },
  // Pour les morceaux
  meatId: String,
  category: String,
  subcategory: String,
  subcategoryId: String,
  cutId: String,
  // Pour les recettes
  recipeId: String,
  // Données dénormalisées pour affichage rapide
  name: String,
  name_en: String,
  icon: String,
  description: String,
  // Timestamp pour sync
  addedAt: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { strict: false })

// Index composé pour éviter les doublons
FavoriteSchema.index({ userId: 1, type: 1, cutId: 1 }, { sparse: true })
FavoriteSchema.index({ userId: 1, type: 1, recipeId: 1 }, { sparse: true })

export default mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema)
