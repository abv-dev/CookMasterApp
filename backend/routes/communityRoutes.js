const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const CommunityPost = require('../models/CommunityPost');

// Configuration de Multer pour l'upload d'images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/community/'); // Dossier où les images seront stockées
  },
  filename: function (req, file, cb) {
    // Nom unique basé sur timestamp + extension originale
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'cook-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Filtrer seulement les images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Seulement les images sont autorisées (jpeg, jpg, png, gif, webp)'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // Limite à 5MB
  },
  fileFilter: fileFilter
});

// ===== ROUTES =====

// GET /api/community/posts - Récupérer tous les posts (avec pagination)
router.get('/posts', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const posts = await CommunityPost.find({ status: 'approved' })
      .sort({ createdAt: -1 }) // Plus récents en premier
      .skip(skip)
      .limit(limit);

    const total = await CommunityPost.countDocuments({ status: 'approved' });

    res.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts', error: error.message });
  }
});

// GET /api/community/posts/:id - Récupérer un post spécifique
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }

    // Incrémenter le compteur de vues
    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du post', error: error.message });
  }
});

// POST /api/community/posts - Créer un nouveau post
router.post('/posts', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Une image est requise' });
    }

    // Parser les données de cuisson (envoyées en JSON string)
    const cookingData = JSON.parse(req.body.cookingData);

    const newPost = new CommunityPost({
      authorName: req.body.authorName || 'Chef Anonyme',
      imageUrl: `/uploads/community/${req.file.filename}`,
      description: req.body.description || '',
      cookingData: cookingData
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du post', error: error.message });
  }
});

// POST /api/community/posts/:id/react - Ajouter une réaction
router.post('/posts/:id/react', async (req, res) => {
  try {
    const { emoji } = req.body;

    if (!emoji) {
      return res.status(400).json({ message: 'Emoji requis' });
    }

    const post = await CommunityPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }

    // Trouver la réaction correspondante
    const reaction = post.reactions.find(r => r.emoji === emoji);

    if (reaction) {
      reaction.count += 1;
    } else {
      post.reactions.push({ emoji, count: 1 });
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la réaction', error: error.message });
  }
});

// DELETE /api/community/posts/:id - Supprimer un post (pour modération)
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await CommunityPost.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }

    // TODO: Supprimer aussi l'image du serveur si nécessaire
    // const fs = require('fs');
    // fs.unlinkSync(path.join(__dirname, '..', post.imageUrl));

    res.json({ message: 'Post supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du post', error: error.message });
  }
});

// GET /api/community/stats - Statistiques globales de la communauté
router.get('/stats', async (req, res) => {
  try {
    const totalPosts = await CommunityPost.countDocuments({ status: 'approved' });
    const totalViews = await CommunityPost.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, total: { $sum: '$views' } } }
    ]);

    const totalReactions = await CommunityPost.aggregate([
      { $match: { status: 'approved' } },
      { $unwind: '$reactions' },
      { $group: { _id: null, total: { $sum: '$reactions.count' } } }
    ]);

    res.json({
      totalPosts,
      totalViews: totalViews[0]?.total || 0,
      totalReactions: totalReactions[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des statistiques', error: error.message });
  }
});

module.exports = router;
