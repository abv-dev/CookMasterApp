import mongoose from 'mongoose'

const HistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  // Identifiants flexibles
  meatId: String,
  meatType: String,
  meatName: String,
  meatIcon: String,
  category: String,
  subcategory: String,
  subcategoryId: String,
  subcategoryName: String,
  cutId: String,
  cut: String,
  cutName: String,
  cutIcon: String,
  // Paramètres de cuisson
  weight: Number,
  thickness: Number,
  doneness: String,
  donenessName: String,
  targetTemp: Number,
  method: String,
  methodName: String,
  totalSeconds: Number,
  restSeconds: Number,
  cookingTime: Number,
  // Questions spécifiques
  specificAnswers: {
    type: mongoose.Schema.Types.Mixed
  },
  // Timestamp de l'entrée originale (pour sync)
  timestamp: String,
  // ID local pour sync
  localId: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { strict: false }) // Permet des champs supplémentaires

// Index pour les requêtes par utilisateur et date
HistorySchema.index({ userId: 1, createdAt: -1 })

export default mongoose.models.History || mongoose.model('History', HistorySchema)
