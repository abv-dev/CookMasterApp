// Vercel Serverless Function - GET /api/meats/:id
const meatData = require('../data/meatData.js');

function findMeatIndex(id) {
  const numId = parseInt(id);
  if (!isNaN(numId) && numId >= 1 && numId <= meatData.length) {
    return numId - 1;
  }
  return meatData.findIndex(m => m.category === id || m.name.toLowerCase() === id.toLowerCase());
}

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

  const { id } = req.query;
  const meatIndex = findMeatIndex(id);

  if (meatIndex < 0 || meatIndex >= meatData.length) {
    return res.status(404).json({ error: 'Viande non trouvée' });
  }

  const meat = meatData[meatIndex];

  if (meat.subcategories) {
    res.status(200).json({
      meat: {
        _id: id,
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
    res.status(200).json({
      meat: {
        _id: id,
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
};
