import connectDB from '../_lib/mongodb.js'
import User from '../_models/User.js'
import VerificationCode from '../_models/VerificationCode.js'
import { sendVerificationCode, generateCode } from '../_lib/email.js'
import { setCorsHeaders } from '../_lib/auth.js'

export default async function handler(req, res) {
  setCorsHeaders(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await connectDB()

    const { email, type = 'register' } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email requis' })
    }

    const emailLower = email.toLowerCase().trim()

    // Vérifier si l'utilisateur existe déjà (pour inscription)
    if (type === 'register') {
      const existingUser = await User.findOne({ email: emailLower })
      if (existingUser) {
        return res.status(400).json({ error: 'Cet email est déjà utilisé' })
      }
    }

    // Vérifier si un code récent existe (rate limiting)
    const recentCode = await VerificationCode.findOne({
      email: emailLower,
      createdAt: { $gt: new Date(Date.now() - 60000) } // 1 minute
    })

    if (recentCode) {
      return res.status(429).json({
        error: 'Veuillez attendre 1 minute avant de demander un nouveau code',
        retryAfter: 60
      })
    }

    // Générer et sauvegarder le code
    const code = generateCode()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    // Supprimer les anciens codes pour cet email
    await VerificationCode.deleteMany({ email: emailLower, type })

    // Créer le nouveau code
    await VerificationCode.create({
      email: emailLower,
      code,
      type,
      expiresAt
    })

    // Envoyer l'email
    const emailResult = await sendVerificationCode(emailLower, code)

    if (!emailResult.success) {
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' })
    }

    res.json({
      success: true,
      message: 'Code envoyé par email',
      expiresIn: 600 // 10 minutes en secondes
    })

  } catch (error) {
    console.error('Send code error:', error)
    res.status(500).json({ error: 'Erreur serveur: ' + error.message })
  }
}
