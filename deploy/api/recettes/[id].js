// Vercel Serverless Function - GET /api/recettes/:id
const recettesAccompagnements = require('../data/recettesAccompagnements.js');
const { recettesSauces, normalizeToId } = require('../data/recettesSauces.js');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const recetteId = req.query.id;

  // Chercher dans les sauces
  if (recettesSauces[recetteId]) {
    const sauce = recettesSauces[recetteId];
    if (sauce.redirect) {
      return res.status(200).json({
        recette: recettesSauces[sauce.redirect],
        type: 'sauce',
        id: sauce.redirect
      });
    }
    return res.status(200).json({
      recette: sauce,
      type: 'sauce',
      id: recetteId
    });
  }

  // Chercher dans les accompagnements
  if (recettesAccompagnements[recetteId]) {
    return res.status(200).json({
      recette: recettesAccompagnements[recetteId],
      type: 'accompagnement',
      id: recetteId
    });
  }

  // Normaliser et chercher à nouveau
  const normalizedId = normalizeToId(recetteId);
  if (recettesSauces[normalizedId]) {
    const sauce = recettesSauces[normalizedId];
    if (sauce.redirect) {
      return res.status(200).json({
        recette: recettesSauces[sauce.redirect],
        type: 'sauce',
        id: sauce.redirect
      });
    }
    return res.status(200).json({
      recette: sauce,
      type: 'sauce',
      id: normalizedId
    });
  }

  if (recettesAccompagnements[normalizedId]) {
    return res.status(200).json({
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
    return res.status(200).json({
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
    return res.status(200).json({
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
};
