import connectDB from './_lib/mongodb.js'
import History from './_models/History.js'
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

  // GET - Récupérer l'historique
  if (req.method === 'GET') {
    try {
      const limit = parseInt(req.query.limit) || 50
      const history = await History.find({ userId })
        .sort({ createdAt: -1 })
        .limit(limit)

      res.json({ success: true, history })
    } catch (error) {
      console.error('History GET error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  // POST - Ajouter à l'historique
  else if (req.method === 'POST') {
    try {
      const historyEntry = new History({
        userId,
        ...req.body
      })

      await historyEntry.save()

      res.status(201).json({ success: true, entry: historyEntry })
    } catch (error) {
      console.error('History POST error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  // DELETE - Supprimer tout l'historique
  else if (req.method === 'DELETE') {
    try {
      const { id } = req.query

      if (id) {
        // Supprimer une entrée spécifique
        await History.deleteOne({ _id: id, userId })
      } else {
        // Supprimer tout l'historique de l'utilisateur
        await History.deleteMany({ userId })
      }

      res.json({ success: true })
    } catch (error) {
      console.error('History DELETE error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
