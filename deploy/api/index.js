// Vercel Serverless Function - GET /api
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    message: 'CookMaster API - Bienvenue!',
    version: '1.0.0',
    endpoints: {
      meats: '/api/meats',
      meatById: '/api/meats/:id',
      meatSubcategory: '/api/meats/:id/:subcategory',
      cookingCalculate: '/api/cooking/calculate',
      encyclopedia: '/api/encyclopedia/:category',
      recettes: '/api/recettes',
      recetteById: '/api/recettes/:id'
    },
    documentation: 'https://github.com/abv-dev/CookMasterApp'
  });
};
