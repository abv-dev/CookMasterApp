// Vercel Serverless Function - GET /api/recettes
const recettesAccompagnements = require('./data/recettesAccompagnements.js');
const { recettesSauces } = require('./data/recettesSauces.js');

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

  res.status(200).json({
    total: sauces.length + accompagnements.length,
    sauces: sauces.sort((a, b) => a.nom.localeCompare(b.nom)),
    accompagnements: accompagnements.sort((a, b) => a.nom.localeCompare(b.nom))
  });
};
