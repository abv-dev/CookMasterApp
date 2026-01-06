// Vercel Serverless Function - GET /api/meats/:id/:subcategory
const meatData = require('../../data/meatData.js');

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

  const { id, subcategory } = req.query;
  const meatIndex = findMeatIndex(id);

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

  res.status(200).json({
    meat: {
      _id: id,
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
};
