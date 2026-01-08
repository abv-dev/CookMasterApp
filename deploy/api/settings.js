import connectDB from './_lib/mongodb.js'
import User from './_models/User.js'
import { getUserFromRequest, setCorsHeaders } from './_lib/auth.js'

export default async function handler(req, res) {
  setCorsHeaders(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const userId = await getUserFromRequest(req)
  if (!userId) {
    return res.status(401).json({ error: 'Non autorisé' })
  }

  await connectDB()

  // GET - Récupérer les paramètres
  if (req.method === 'GET') {
    try {
      const user = await User.findById(userId).select('settings')
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' })
      }

      res.json({ success: true, settings: user.settings })
    } catch (error) {
      console.error('Settings GET error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  // PUT - Mettre à jour les paramètres
  else if (req.method === 'PUT') {
    try {
      const { language, measurementSystem, theme, notifications, vibration } = req.body

      const updateFields = {}
      if (language !== undefined) updateFields['settings.language'] = language
      if (measurementSystem !== undefined) updateFields['settings.measurementSystem'] = measurementSystem
      if (theme !== undefined) updateFields['settings.theme'] = theme
      if (notifications !== undefined) updateFields['settings.notifications'] = notifications
      if (vibration !== undefined) updateFields['settings.vibration'] = vibration

      const user = await User.findByIdAndUpdate(
        userId,
        { $set: updateFields },
        { new: true }
      ).select('settings')

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' })
      }

      res.json({ success: true, settings: user.settings })
    } catch (error) {
      console.error('Settings PUT error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
