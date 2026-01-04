const express = require('express');
const router = express.Router();
const Meat = require('../models/Meat');

/**
 * GET /api/meats
 * Récupérer toutes les catégories de viandes
 */
router.get('/', async (req, res) => {
  try {
    const meats = await Meat.find();
    res.json(meats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/meats/categories
 * Récupérer la liste des catégories
 */
router.get('/categories', async (req, res) => {
  try {
    const categories = await Meat.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/meats/category/:category
 * Récupérer toutes les viandes d'une catégorie
 */
router.get('/category/:category', async (req, res) => {
  try {
    const meats = await Meat.find({ category: req.params.category });
    res.json(meats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/meats/:id
 * Récupérer une viande spécifique par ID
 */
router.get('/:id', async (req, res) => {
  try {
    const meat = await Meat.findById(req.params.id);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }
    res.json(meat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/meats/:id/cuts
 * Récupérer tous les morceaux d'une viande
 */
router.get('/:id/cuts', async (req, res) => {
  try {
    const meat = await Meat.findById(req.params.id);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }
    res.json(meat.cuts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/meats/:id/cuts/:cutName
 * Récupérer un morceau spécifique
 */
router.get('/:id/cuts/:cutName', async (req, res) => {
  try {
    const meat = await Meat.findById(req.params.id);
    if (!meat) {
      return res.status(404).json({ error: 'Viande non trouvée' });
    }

    const cut = meat.cuts.find(c =>
      c.name.toLowerCase() === req.params.cutName.toLowerCase()
    );

    if (!cut) {
      return res.status(404).json({ error: 'Morceau non trouvé' });
    }

    res.json(cut);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/meats/search
 * Rechercher des viandes/morceaux
 */
router.post('/search', async (req, res) => {
  try {
    const { query, category } = req.body;

    let searchCriteria = {};

    if (category) {
      searchCriteria.category = category;
    }

    if (query) {
      searchCriteria.$or = [
        { name: { $regex: query, $options: 'i' } },
        { 'cuts.name': { $regex: query, $options: 'i' } }
      ];
    }

    const meats = await Meat.find(searchCriteria);
    res.json(meats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
