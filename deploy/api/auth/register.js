import connectDB from '../_lib/mongodb.js'
import User from '../_models/User.js'
import VerificationCode from '../_models/VerificationCode.js'
import bcrypt from 'bcryptjs'
import { generateToken, setCorsHeaders } from '../_lib/auth.js'

export default async function handler(req, res) {
  // CORS headers
  setCorsHeaders(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Register request received')

    // Connexion à MongoDB
    await connectDB()
    console.log('MongoDB connected')

    const { email, password, name, code } = req.body
    console.log('Registration attempt for:', email)

    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' })
    }

    if (!code) {
      return res.status(400).json({ error: 'Code de vérification requis' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 6 caractères' })
    }

    const emailLower = email.toLowerCase().trim()

    // Vérifier que le code est valide et vérifié
    const verificationCode = await VerificationCode.findOne({
      email: emailLower,
      code: code.trim(),
      verified: true,
      expiresAt: { $gt: new Date() }
    })

    if (!verificationCode) {
      return res.status(400).json({ error: 'Code de vérification invalide ou expiré. Veuillez demander un nouveau code.' })
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email: emailLower })
    if (existingUser) {
      console.log('User already exists:', email)
      return res.status(400).json({ error: 'Cet email est déjà utilisé' })
    }

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Créer l'utilisateur
    const user = new User({
      email: emailLower,
      password: hashedPassword,
      name: name || '',
      emailVerified: true
    })

    await user.save()
    console.log('User created successfully:', user._id)

    // Supprimer le code de vérification utilisé
    await VerificationCode.deleteMany({ email: emailLower })

    // Générer le token
    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        settings: user.settings
      }
    })
  } catch (error) {
    console.error('Register error:', error.message, error.stack)
    res.status(500).json({ error: 'Erreur serveur: ' + error.message })
  }
}
