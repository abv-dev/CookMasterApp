const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers statiques
app.use(express.static('public'));

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meat-cooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✓ Connecté à MongoDB'))
.catch(err => console.error('✗ Erreur de connexion MongoDB:', err));

// Charger les vraies données
const meatData = require('./seed/meatData');
const encyclopediaData = require('./seed/encyclopediaData');
const recipesData = require('./seed/recipesData');
const recettesAccompagnements = require('./seed/recettesAccompagnements');
const { recettesSauces, normalizeToId } = require('./seed/recettesSauces');

// Helper pour trouver l'index de la viande (accepte ID numérique ou nom de catégorie)
function findMeatIndex(id) {
  // Si c'est un nombre, utiliser comme index
  const numId = parseInt(id);
  if (!isNaN(numId) && numId >= 1 && numId <= meatData.length) {
    return numId - 1;
  }
  // Sinon chercher par nom de catégorie
  return meatData.findIndex(m => m.category === id || m.name.toLowerCase() === id.toLowerCase());
}

// Routes de démonstration (sans MongoDB) avec VRAIES données
app.get('/api/meats', (req, res) => {
  // Transformer meatData en format API - AVEC TOUTES LES DONNÉES ENRICHIES
  const meats = meatData.map((meat, index) => {
    // Viandes avec sous-catégories (boeuf, porc, agneau, veau)
    if (meat.subcategories) {
      return {
        _id: String(index + 1),
        name: meat.name,
        nameEn: meat.nameEn,
        category: meat.category,
        description: meat.description,
        emoji: meat.emoji || '🥩',
        hasSubcategories: true,
        subcategories: {
          classique: {
            name: meat.subcategories.classique.name,
            description: meat.subcategories.classique.description,
            cutsCount: meat.subcategories.classique.cuts.length,
            cuts: meat.subcategories.classique.cuts // INCLURE LES CUTS COMPLETS
          },
          boucher: {
            name: meat.subcategories.boucher.name,
            description: meat.subcategories.boucher.description,
            cutsCount: meat.subcategories.boucher.cuts.length,
            cuts: meat.subcategories.boucher.cuts // INCLURE LES CUTS COMPLETS
          }
        }
      };
    }
    // Viandes sans sous-catégories (volaille, gibier)
    return {
      _id: String(index + 1),
      name: meat.name,
      nameEn: meat.nameEn,
      category: meat.category,
      subcategory: meat.subcategory || null,
      description: meat.description,
      emoji: meat.emoji || '🥩',
      hasSubcategories: false,
      cuts: meat.cuts
    };
  });

  res.json({ meats });
});

// Route pour les données encyclopédiques
app.get('/api/encyclopedia/:category', (req, res) => {
  const category = req.params.category;
  if (encyclopediaData[category]) {
    res.json({ data: encyclopediaData[category] });
  } else {
    res.status(404).json({ error: 'Catégorie non trouvée' });
  }
});

// Route pour les recettes
app.get('/api/recipes/:category/:cut', (req, res) => {
  const { category, cut } = req.params;
  // Normaliser le nom du morceau (ex: "Filet" -> "filet", "Côte de bœuf" -> "cote_de_boeuf")
  const normalizedCut = cut.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Retirer les accents
    .replace(/[^a-z0-9]+/g, '_') // Remplacer les caractères spéciaux par _
    .replace(/^_+|_+$/g, ''); // Retirer les _ en début/fin

  if (recipesData[category] && recipesData[category][normalizedCut]) {
    res.json({
      category,
      cut: normalizedCut,
      recipes: recipesData[category][normalizedCut]
    });
  } else {
    // Essayer de trouver une correspondance partielle
    if (recipesData[category]) {
      const cutKeys = Object.keys(recipesData[category]);
      const match = cutKeys.find(k => normalizedCut.includes(k) || k.includes(normalizedCut));
      if (match) {
        return res.json({
          category,
          cut: match,
          recipes: recipesData[category][match]
        });
      }
    }
    res.status(404).json({ error: 'Recettes non trouvées', category, cut: normalizedCut });
  }
});

// Route pour lister toutes les recettes d'une catégorie
app.get('/api/recipes/:category', (req, res) => {
  const { category } = req.params;
  if (recipesData[category]) {
    const allRecipes = {};
    Object.entries(recipesData[category]).forEach(([cut, recipes]) => {
      allRecipes[cut] = recipes.map(r => ({
        nom: r.nom,
        type: r.type,
        difficulte: r.difficulte,
        tempsTotal: r.tempsPreparation + r.tempsCuisson,
        portions: r.portions
      }));
    });
    res.json({ category, cuts: allRecipes });
  } else {
    res.status(404).json({ error: 'Catégorie non trouvée' });
  }
});

// ==============================================
// NOUVELLE API POUR LES RECETTES (SAUCES + ACCOMPAGNEMENTS)
// ==============================================

// Route pour obtenir une recette par ID (sauce ou accompagnement)
app.get('/api/recettes/:id', (req, res) => {
  const recetteId = req.params.id;

  // Chercher d'abord dans les sauces
  if (recettesSauces[recetteId]) {
    const sauce = recettesSauces[recetteId];
    // Gérer les redirections
    if (sauce.redirect) {
      return res.json({
        recette: recettesSauces[sauce.redirect],
        type: 'sauce',
        id: sauce.redirect
      });
    }
    return res.json({
      recette: sauce,
      type: 'sauce',
      id: recetteId
    });
  }

  // Chercher dans les accompagnements
  if (recettesAccompagnements[recetteId]) {
    return res.json({
      recette: recettesAccompagnements[recetteId],
      type: 'accompagnement',
      id: recetteId
    });
  }

  // Essayer de normaliser l'ID et chercher à nouveau
  const normalizedId = normalizeToId(recetteId);
  if (recettesSauces[normalizedId]) {
    const sauce = recettesSauces[normalizedId];
    if (sauce.redirect) {
      return res.json({
        recette: recettesSauces[sauce.redirect],
        type: 'sauce',
        id: sauce.redirect
      });
    }
    return res.json({
      recette: sauce,
      type: 'sauce',
      id: normalizedId
    });
  }

  if (recettesAccompagnements[normalizedId]) {
    return res.json({
      recette: recettesAccompagnements[normalizedId],
      type: 'accompagnement',
      id: normalizedId
    });
  }

  // Recherche partielle dans les sauces
  const sauceKeys = Object.keys(recettesSauces);
  const sauceMatch = sauceKeys.find(k =>
    k.includes(normalizedId) || normalizedId.includes(k) ||
    (recettesSauces[k].nom && recettesSauces[k].nom.toLowerCase().includes(recetteId.toLowerCase()))
  );
  if (sauceMatch && recettesSauces[sauceMatch] && !recettesSauces[sauceMatch].redirect) {
    return res.json({
      recette: recettesSauces[sauceMatch],
      type: 'sauce',
      id: sauceMatch
    });
  }

  // Recherche partielle dans les accompagnements
  const accompKeys = Object.keys(recettesAccompagnements);
  const accompMatch = accompKeys.find(k =>
    k.includes(normalizedId) || normalizedId.includes(k) ||
    (recettesAccompagnements[k].nom && recettesAccompagnements[k].nom.toLowerCase().includes(recetteId.toLowerCase()))
  );
  if (accompMatch) {
    return res.json({
      recette: recettesAccompagnements[accompMatch],
      type: 'accompagnement',
      id: accompMatch
    });
  }

  res.status(404).json({
    error: 'Recette non trouvée',
    searched: recetteId,
    normalized: normalizedId
  });
});

// Route pour lister toutes les recettes disponibles
app.get('/api/recettes', (req, res) => {
  const sauces = Object.entries(recettesSauces)
    .filter(([k, v]) => !v.redirect)
    .map(([id, r]) => ({
      id,
      nom: r.nom,
      type: 'sauce',
      categorie: r.categorie,
      difficulte: r.difficulte,
      tempsTotal: (r.temps_preparation || 0) + (r.temps_cuisson || 0)
    }));

  const accompagnements = Object.entries(recettesAccompagnements)
    .map(([id, r]) => ({
      id,
      nom: r.nom,
      type: 'accompagnement',
      categorie: r.categorie,
      difficulte: r.difficulte,
      tempsTotal: (r.temps_preparation || 0) + (r.temps_cuisson || 0)
    }));

  res.json({
    total: sauces.length + accompagnements.length,
    sauces: sauces.sort((a, b) => a.nom.localeCompare(b.nom)),
    accompagnements: accompagnements.sort((a, b) => a.nom.localeCompare(b.nom))
  });
});

app.get('/api/meats/:id', (req, res) => {
  const meatIndex = findMeatIndex(req.params.id);
  if (meatIndex >= 0 && meatIndex < meatData.length) {
    const meat = meatData[meatIndex];

    // Viandes avec sous-catégories - Ne pas renvoyer les cuts ici
    // Les cuts sont accessibles via /api/meats/:id/classique ou /api/meats/:id/boucher
    if (meat.subcategories) {
      res.json({
        meat: {
          _id: req.params.id,
          name: meat.name,
          nameEn: meat.nameEn,
          category: meat.category,
          description: meat.description,
          hasSubcategories: true,
          subcategories: {
            classique: {
              name: meat.subcategories.classique.name,
              description: meat.subcategories.classique.description,
              cutsCount: meat.subcategories.classique.cuts.length
            },
            boucher: {
              name: meat.subcategories.boucher.name,
              description: meat.subcategories.boucher.description,
              cutsCount: meat.subcategories.boucher.cuts.length
            }
          }
        }
      });
    } else {
      // Viandes sans sous-catégories
      res.json({
        meat: {
          _id: req.params.id,
          name: meat.name,
          nameEn: meat.nameEn,
          category: meat.category,
          subcategory: meat.subcategory || null,
          description: meat.description,
          hasSubcategories: false,
          cuts: meat.cuts
        }
      });
    }
  } else {
    res.status(404).json({ error: 'Viande non trouvée' });
  }
});

// Route pour obtenir les morceaux d'une sous-catégorie spécifique
app.get('/api/meats/:id/:subcategory', (req, res) => {
  const meatIndex = findMeatIndex(req.params.id);
  const subcategory = req.params.subcategory;

  if (meatIndex < 0 || meatIndex >= meatData.length) {
    return res.status(404).json({ error: 'Viande non trouvée' });
  }

  const meat = meatData[meatIndex];

  if (!meat.subcategories) {
    return res.status(400).json({ error: 'Cette viande n\'a pas de sous-catégories' });
  }

  if (!meat.subcategories[subcategory]) {
    return res.status(404).json({ error: 'Sous-catégorie non trouvée (utilisez "classique" ou "boucher")' });
  }

  res.json({
    meat: {
      _id: req.params.id,
      name: meat.name,
      category: meat.category
    },
    subcategory: {
      type: subcategory,
      name: meat.subcategories[subcategory].name,
      description: meat.subcategories[subcategory].description,
      cuts: meat.subcategories[subcategory].cuts
    }
  });
});

app.post('/api/cooking/calculate', (req, res) => {
  const { meatId, subcategory, cutIndex, cutName, weight, thickness, doneness, method, cookingTemperature, initialTemp, hasBone } = req.body;

  // Validation - accept either cutIndex or cutName
  if (!meatId || (cutIndex === undefined && !cutName) || !weight || !doneness || !method) {
    return res.status(400).json({ error: 'Paramètres manquants' });
  }

  const meatIndex = findMeatIndex(meatId);
  if (meatIndex < 0 || meatIndex >= meatData.length) {
    return res.status(404).json({ error: 'Viande non trouvée' });
  }

  const meat = meatData[meatIndex];

  // Gérer les viandes avec sous-catégories
  let cut;

  // If cutName is provided, search by name
  if (cutName) {
    // Search in direct cuts first
    if (meat.cuts && meat.cuts.length > 0) {
      cut = meat.cuts.find(c => c.name === cutName);
    }
    // If not found and subcategories exist, search there
    if (!cut && meat.subcategories) {
      for (const subcatKey of Object.keys(meat.subcategories)) {
        const subcat = meat.subcategories[subcatKey];
        if (subcat && subcat.cuts) {
          cut = subcat.cuts.find(c => c.name === cutName);
          if (cut) break;
        }
      }
    }
  } else {
    // Original behavior: use cutIndex
    if (meat.subcategories) {
      // Viande avec sous-catégories (boeuf, porc, agneau, veau)
      if (!subcategory || !meat.subcategories[subcategory]) {
        return res.status(400).json({ error: 'Sous-catégorie requise (classique ou boucher)' });
      }
      cut = meat.subcategories[subcategory].cuts[cutIndex];
    } else {
      // Viande sans sous-catégories (volaille, gibier)
      cut = meat.cuts[cutIndex];
    }
  }

  if (!cut) {
    return res.status(404).json({ error: 'Morceau non trouvé' });
  }

  // Trouver la température cible
  const tempData = cut.temperatures.find(t => t.doneness === doneness);
  if (!tempData) {
    return res.status(400).json({ error: 'Niveau de cuisson non disponible pour ce morceau' });
  }

  // Trouver la méthode de cuisson
  const cookingMethod = cut.cookingMethods.find(m => m.method === method);
  if (!cookingMethod) {
    return res.status(400).json({ error: 'Méthode de cuisson non disponible pour ce morceau' });
  }

  // CALCUL PRÉCIS DU TEMPS DE CUISSON
  // Formule: (baseTimePerKg * weight) + (baseTimePerCm * thickness) * adjustmentFactor
  let cookingTimeMinutes = (cookingMethod.baseTimePerKg * weight) +
                           (cookingMethod.baseTimePerCm * thickness);

  // Appliquer le facteur d'ajustement de la méthode
  cookingTimeMinutes *= cookingMethod.adjustmentFactor;

  // Ajustement basé sur la température de cuisson sélectionnée
  if (cookingTemperature && cookingMethod.temperatureRange) {
    const recommendedTemp = cookingMethod.temperatureRange.recommended;
    const temperatureDifference = cookingTemperature - recommendedTemp;

    // Pour chaque 10°C de différence, ajuster le temps de ~12%
    // Température plus basse = temps plus long (facteur > 1)
    // Température plus haute = temps plus court (facteur < 1)
    const temperatureAdjustmentFactor = 1 - (temperatureDifference * 0.12 / 10);
    cookingTimeMinutes *= temperatureAdjustmentFactor;
  }

  // Ajustement pour température initiale
  if (initialTemp < 15) {
    // Viande froide: ajouter 15-20% au temps
    cookingTimeMinutes *= 1.18;
  }

  // Ajustement pour os
  if (hasBone) {
    // Avec os: ajouter ~10% au temps
    cookingTimeMinutes *= 1.1;
  }

  // Arrondir
  cookingTimeMinutes = Math.round(cookingTimeMinutes);

  // Instructions détaillées
  const methodNames = {
    'poele': 'poêle',
    'grill': 'grill',
    'four_traditionnel': 'four traditionnel',
    'four_chaleur_tournante': 'four à chaleur tournante',
    'sous_vide': 'cuisson sous-vide',
    'barbecue_charbon': 'barbecue au charbon',
    'barbecue_gaz': 'barbecue au gaz',
    'plancha': 'plancha',
    'fumoir_chaud': 'fumoir chaud',
    'mijoteuse': 'mijoteuse',
    'cocotte': 'cocotte',
    'braisage': 'braisage',
    'rotissoire': 'rôtissoire',
    'salamandre': 'salamandre',
    'air_fryer': 'friteuse à air',
    'barbecue_basse_temp': 'barbecue basse température',
    'four_a_pain': 'four à pain',
    'four_basse_temperature': 'four basse température',
    'wok': 'wok'
  };

  // Utiliser la température sélectionnée ou la recommandée par défaut
  const selectedCookingTemp = cookingTemperature || cookingMethod.temperatureRange.recommended;

  const instructions = [
    initialTemp < 15
      ? 'Sortir la viande du réfrigérateur 30-45 minutes avant la cuisson'
      : 'Viande déjà à température ambiante - parfait pour commencer',
    `Préchauffer votre ${methodNames[method] || method} à ${selectedCookingTemp}°C`,
    method.includes('four')
      ? 'Placer la viande dans un plat adapté'
      : 'Saisir la viande sur toutes les faces pour créer une belle croûte',
    method === 'sous_vide'
      ? `Cuire pendant ${cookingTimeMinutes} minutes dans le bain-marie`
      : `Cuire pendant environ ${cookingTimeMinutes} minutes`,
    `Vérifier la température à cœur: elle doit atteindre ${tempData.coreTemperature}°C`,
    tempData.safetyTemperature
      ? `Pour la sécurité alimentaire, viser ${tempData.safetyTemperature}°C`
      : 'Attention: cette cuisson est en dessous des normes de sécurité EU',
    `Laisser reposer ${cookingMethod.restingTime} minutes avant de servir`,
    'La température va continuer de monter de 2-3°C pendant le repos'
  ];

  // Tips basés sur le morceau et la méthode
  const tips = [];
  if (cut.recommendations) {
    tips.push(cut.recommendations);
  }
  if (cookingMethod.restingTime > 5) {
    tips.push(`Le repos est essentiel: ne sautez pas les ${cookingMethod.restingTime} minutes de repos !`);
  }
  if (method === 'sous_vide') {
    tips.push('La cuisson sous-vide garantit une cuisson parfaitement uniforme.');
  }
  if (hasBone) {
    tips.push('La viande avec os est plus savoureuse mais nécessite un temps de cuisson légèrement plus long.');
  }

  res.json({
    meatName: meat.name,
    cutName: cut.name,
    cutData: {
      recommendations: cut.recommendations,
      description: cut.description
    },
    calculation: {
      // Use both field names for compatibility
      cookingTime: cookingTimeMinutes,
      cookingTimeMinutes,
      targetTemperature: tempData.coreTemperature,
      safetyTemperature: tempData.safetyTemperature || tempData.coreTemperature,
      cookingTemperature: selectedCookingTemp,
      restingTime: cookingMethod.restingTime,
      restingTimeMinutes: cookingMethod.restingTime,
      doneness: tempData.doneness,
      method: methodNames[method] || method,
      instructions,
      tips
    }
  });
});

// Routes originales (désactivées sans MongoDB)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/meats', require('./routes/meats'));
// app.use('/api/cooking', require('./routes/cooking'));
// app.use('/api/history', require('./routes/history'));
// app.use('/api/user', require('./routes/user'));

// Route de test
app.get('/', (req, res) => {
  res.json({
    message: 'API Meat Cooking - Bienvenue!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      meats: '/api/meats',
      cooking: '/api/cooking',
      history: '/api/history',
      user: '/api/user'
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
