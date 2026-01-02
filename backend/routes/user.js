const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const User = require('../models/User');

// Toutes les routes utilisateur nécessitent l'authentification
router.use(authenticate);

/**
 * GET /api/user/profile
 * Récupérer le profil de l'utilisateur
 */
router.get('/profile', async (req, res) => {
  try {
    res.json({
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      preferences: req.user.preferences,
      favoriteRecipes: req.user.favoriteRecipes,
      createdAt: req.user.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/user/profile
 * Mettre à jour le profil
 */
router.put('/profile', async (req, res) => {
  try {
    const { name, email } = req.body;

    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      message: 'Profil mis à jour',
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/user/preferences
 * Mettre à jour les préférences
 */
router.put('/preferences', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { preferences: req.body },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      message: 'Préférences mises à jour',
      preferences: user.preferences
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/user/favorites
 * Ajouter une recette aux favoris
 */
router.post('/favorites', async (req, res) => {
  try {
    const { meatId, cutName, cookingMethod } = req.body;

    const user = await User.findById(req.user._id);

    // Vérifier si déjà dans les favoris
    const exists = user.favoriteRecipes.some(
      fav => fav.meatId.toString() === meatId &&
             fav.cutName === cutName &&
             fav.cookingMethod === cookingMethod
    );

    if (exists) {
      return res.status(400).json({ error: 'Déjà dans les favoris' });
    }

    user.favoriteRecipes.push({ meatId, cutName, cookingMethod });
    await user.save();

    res.json({
      message: 'Ajouté aux favoris',
      favoriteRecipes: user.favoriteRecipes
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/user/favorites/:id
 * Retirer une recette des favoris
 */
router.delete('/favorites/:id', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.favoriteRecipes = user.favoriteRecipes.filter(
      fav => fav._id.toString() !== req.params.id
    );

    await user.save();

    res.json({
      message: 'Retiré des favoris',
      favoriteRecipes: user.favoriteRecipes
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/user/favorites
 * Récupérer toutes les recettes favorites
 */
router.get('/favorites', async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('favoriteRecipes.meatId');

    res.json(user.favoriteRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/user/password
 * Changer le mot de passe
 */
router.put('/password', async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id);

    // Vérifier le mot de passe actuel
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ error: 'Mot de passe actuel incorrect' });
    }

    // Mettre à jour le mot de passe
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Mot de passe mis à jour' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
