import mongoose from 'mongoose'

const VerificationCodeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    index: true
  },
  code: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['register', 'reset_password'],
    default: 'register'
  },
  expiresAt: {
    type: Date,
    required: true,
    index: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Supprimer automatiquement les codes expirés
VerificationCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export default mongoose.models.VerificationCode || mongoose.model('VerificationCode', VerificationCodeSchema)
