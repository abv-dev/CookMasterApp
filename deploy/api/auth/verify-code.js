import connectDB from '../_lib/mongodb.js'
import VerificationCode from '../_models/VerificationCode.js'
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

    const { email, code } = req.body

    if (!email || !code) {
      return res.status(400).json({ error: 'Email et code requis' })
    }

    const emailLower = email.toLowerCase().trim()

    // Chercher le code
    const verificationCode = await VerificationCode.findOne({
      email: emailLower,
      code: code.trim(),
      expiresAt: { $gt: new Date() }
    })

    if (!verificationCode) {
      return res.status(400).json({ error: 'Code invalide ou expiré' })
    }

    // Marquer comme vérifié
    verificationCode.verified = true
    await verificationCode.save()

    res.json({
      success: true,
      message: 'Email vérifié',
      email: emailLower
    })

  } catch (error) {
    console.error('Verify code error:', error)
    res.status(500).json({ error: 'Erreur serveur: ' + error.message })
  }
}
