import connectDB from './_lib/mongodb.js'
import Favorite from './_models/Favorite.js'
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

  // GET - Récupérer les favoris
  if (req.method === 'GET') {
    try {
      const { type } = req.query
      const query = { userId }
      if (type) query.type = type

      const favorites = await Favorite.find(query).sort({ createdAt: -1 })

      res.json({ success: true, favorites })
    } catch (error) {
      console.error('Favorites GET error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  // POST - Ajouter un favori
  else if (req.method === 'POST') {
    try {
      const { type, meatId, subcategoryId, cutId, recipeId, name, name_en, icon, description } = req.body

      // Vérifier si déjà en favoris
      const existingQuery = { userId, type }
      if (type === 'cut') {
        existingQuery.cutId = cutId
      } else if (type === 'recipe') {
        existingQuery.recipeId = recipeId
      }

      const existing = await Favorite.findOne(existingQuery)
      if (existing) {
        return res.status(400).json({ error: 'Déjà en favoris' })
      }

      const favorite = new Favorite({
        userId,
        type,
        meatId,
        subcategoryId,
        cutId,
        recipeId,
        name,
        name_en,
        icon,
        description
      })

      await favorite.save()

      res.status(201).json({ success: true, favorite })
    } catch (error) {
      console.error('Favorites POST error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  // DELETE - Supprimer un favori
  else if (req.method === 'DELETE') {
    try {
      const { id, type, cutId, recipeId } = req.query

      if (id) {
        await Favorite.deleteOne({ _id: id, userId })
      } else if (type === 'cut' && cutId) {
        await Favorite.deleteOne({ userId, type: 'cut', cutId })
      } else if (type === 'recipe' && recipeId) {
        await Favorite.deleteOne({ userId, type: 'recipe', recipeId })
      } else {
        return res.status(400).json({ error: 'Paramètres manquants' })
      }

      res.json({ success: true })
    } catch (error) {
      console.error('Favorites DELETE error:', error)
      res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
