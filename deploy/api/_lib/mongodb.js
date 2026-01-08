// Connexion MongoDB pour Vercel Serverless Functions
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  // Vérifier la variable d'environnement
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined')
    throw new Error('Please define the MONGODB_URI environment variable')
  }

  // Retourner la connexion existante
  if (cached.conn) {
    console.log('Using cached MongoDB connection')
    return cached.conn
  }

  // Créer une nouvelle connexion
  if (!cached.promise) {
    console.log('Creating new MongoDB connection...')
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully')
        return mongoose
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err.message)
        cached.promise = null
        throw err
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectDB
