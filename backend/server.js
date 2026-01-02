const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security Middleware
app.use(helmet());

// CORS Configuration - Use whitelist from environment
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:8080'];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn(`⚠️  CORS blocked request from: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Trop de requêtes depuis cette IP, veuillez réessayer plus tard.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Body Parser Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Servir les fichiers statiques (images uploadées)
app.use('/uploads', express.static('uploads'));

// Connexion à MongoDB
if (!process.env.MONGODB_URI) {
  console.error('🚨 ERREUR: MONGODB_URI n\'est pas défini dans .env');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✓ Connecté à MongoDB');
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
})
.catch(err => {
  console.error('✗ Erreur de connexion MongoDB:', err.message);
  process.exit(1);
});

// Routes V1 (ancien système)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/meats', require('./routes/meats'));
app.use('/api/cooking', require('./routes/cooking'));
app.use('/api/history', require('./routes/history'));
app.use('/api/user', require('./routes/user'));

// Routes V2 (nouveau système avec appareil + méthode séparés)
app.use('/api/v2', require('./routes/apiV2'));

// Routes Communauté
app.use('/api/community', require('./routes/communityRoutes'));

// Route de test
app.get('/', (req, res) => {
  res.json({
    message: 'API Meat Cooking - Bienvenue!',
    version: '2.0.0',
    endpoints: {
      v1: {
        auth: '/api/auth',
        meats: '/api/meats',
        cooking: '/api/cooking',
        history: '/api/history',
        user: '/api/user'
      },
      v2: {
        meats: '/api/v2/meats',
        appliances: '/api/v2/appliances',
        methods: '/api/v2/methods',
        calculate: '/api/v2/calculate'
      },
      community: {
        posts: '/api/community/posts',
        stats: '/api/community/stats'
      }
    },
    features: {
      v2: [
        'Séparation APPAREIL + MÉTHODE',
        '22+ morceaux de bœuf',
        '15 appareils (40°C à 300°C)',
        '13 méthodes de cuisson',
        'Calcul avancé avec température personnalisée'
      ]
    }
  });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Erreur serveur',
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
