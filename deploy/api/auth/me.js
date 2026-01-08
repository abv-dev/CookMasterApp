import connectDB from '../_lib/mongodb.js'
import User from '../_models/User.js'
import { getUserFromRequest, setCorsHeaders } from '../_lib/auth.js'

export default async function handler(req, res) {
  setCorsHeaders(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const userId = await getUserFromRequest(req)
    if (!userId) {
      return res.status(401).json({ error: 'Non autorisé' })
    }

    await connectDB()

    const user = await User.findById(userId).select('-password')
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        settings: user.settings
      }
    })
  } catch (error) {
    console.error('Me error:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
