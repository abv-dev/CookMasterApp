// Vercel Serverless Function - GET /api/meats
const meatData = require('./data/meatData.js');

module.exports = (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const meats = meatData.map((meat, index) => {
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
            cuts: meat.subcategories.classique.cuts
          },
          boucher: {
            name: meat.subcategories.boucher.name,
            description: meat.subcategories.boucher.description,
            cutsCount: meat.subcategories.boucher.cuts.length,
            cuts: meat.subcategories.boucher.cuts
          }
        }
      };
    }
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

  res.status(200).json({ meats });
};
