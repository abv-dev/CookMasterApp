const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const CookingHistory = require('../models/CookingHistory');

// Toutes les routes d'historique nécessitent l'authentification
router.use(authenticate);

/**
 * GET /api/history
 * Récupérer l'historique de cuisson de l'utilisateur
 */
router.get('/', async (req, res) => {
  try {
    const { limit = 50, skip = 0, sortBy = 'date', order = 'desc' } = req.query;

    const history = await CookingHistory.find({ userId: req.user._id })
      .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    const total = await CookingHistory.countDocuments({ userId: req.user._id });

    res.json({
      history,
      pagination: {
        total,
        limit: parseInt(limit),
        skip: parseInt(skip),
        hasMore: (parseInt(skip) + parseInt(limit)) < total
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/history/:id
 * Récupérer un enregistrement spécifique
 */
router.get('/:id', async (req, res) => {
  try {
    const history = await CookingHistory.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!history) {
      return res.status(404).json({ error: 'Enregistrement non trouvé' });
    }

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/history
 * Créer un nouvel enregistrement d'historique
 */
router.post('/', async (req, res) => {
  try {
    const historyData = {
      ...req.body,
      userId: req.user._id
    };

    const history = new CookingHistory(historyData);
    await history.save();

    res.status(201).json({
      message: 'Enregistrement créé avec succès',
      history
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/history/:id
 * Mettre à jour un enregistrement
 */
router.put('/:id', async (req, res) => {
  try {
    const history = await CookingHistory.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!history) {
      return res.status(404).json({ error: 'Enregistrement non trouvé' });
    }

    res.json({
      message: 'Enregistrement mis à jour',
      history
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/history/:id
 * Supprimer un enregistrement
 */
router.delete('/:id', async (req, res) => {
  try {
    const history = await CookingHistory.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!history) {
      return res.status(404).json({ error: 'Enregistrement non trouvé' });
    }

    res.json({ message: 'Enregistrement supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/history/stats/summary
 * Récupérer des statistiques sur l'historique
 */
router.get('/stats/summary', async (req, res) => {
  try {
    const userId = req.user._id;

    // Nombre total de cuissons
    const totalCookings = await CookingHistory.countDocuments({ userId });

    // Cuissons réussies
    const successfulCookings = await CookingHistory.countDocuments({
      userId,
      success: true
    });

    // Viande la plus cuisinée
    const meatStats = await CookingHistory.aggregate([
      { $match: { userId: userId.toString() } },
      { $group: {
        _id: { category: '$meatCategory', name: '$meatName' },
        count: { $sum: 1 }
      }},
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Méthode de cuisson favorite
    const methodStats = await CookingHistory.aggregate([
      { $match: { userId: userId.toString() } },
      { $group: {
        _id: '$cookingMethod',
        count: { $sum: 1 }
      }},
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Note moyenne
    const ratingStats = await CookingHistory.aggregate([
      { $match: { userId: userId.toString(), rating: { $exists: true } } },
      { $group: {
        _id: null,
        averageRating: { $avg: '$rating' },
        totalRated: { $sum: 1 }
      }}
    ]);

    res.json({
      totalCookings,
      successfulCookings,
      successRate: totalCookings > 0 ? (successfulCookings / totalCookings * 100).toFixed(1) : 0,
      favoriteMetats: meatStats,
      favoriteMethods: methodStats,
      averageRating: ratingStats.length > 0 ? ratingStats[0].averageRating : null,
      totalRated: ratingStats.length > 0 ? ratingStats[0].totalRated : 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/history/search
 * Rechercher dans l'historique
 */
router.post('/search', async (req, res) => {
  try {
    const {
      meatCategory,
      meatName,
      cookingMethod,
      minRating,
      success,
      dateFrom,
      dateTo
    } = req.body;

    let query = { userId: req.user._id };

    if (meatCategory) query.meatCategory = meatCategory;
    if (meatName) query.meatName = { $regex: meatName, $options: 'i' };
    if (cookingMethod) query.cookingMethod = cookingMethod;
    if (minRating) query.rating = { $gte: minRating };
    if (success !== undefined) query.success = success;

    if (dateFrom || dateTo) {
      query.date = {};
      if (dateFrom) query.date.$gte = new Date(dateFrom);
      if (dateTo) query.date.$lte = new Date(dateTo);
    }

    const history = await CookingHistory.find(query)
      .sort({ date: -1 })
      .limit(100);

    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
