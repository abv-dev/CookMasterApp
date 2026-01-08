import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  settings: {
    language: { type: String, default: 'auto' },
    measurementSystem: { type: String, default: 'metric' },
    theme: { type: String, default: 'light' },
    notifications: { type: Boolean, default: true },
    vibration: { type: Boolean, default: true }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Utiliser timestamps automatiques de Mongoose
export default mongoose.models.User || mongoose.model('User', UserSchema)
