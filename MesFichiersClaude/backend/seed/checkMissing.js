const encyclo = require('./encyclopediaData.js');
const meatData = require('./meatData.js');

// Fonction pour normaliser les noms
function normalize(name) {
  return name.toLowerCase()
    .replace(/œ/g, 'oe')  // Gérer les ligatures
    .replace(/æ/g, 'ae')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

const viandes = ['boeuf', 'porc', 'agneau', 'veau'];

viandes.forEach(v => {
  const meat = meatData.find(m => m.category === v);
  if (!meat || !meat.subcategories) return;

  const classiqueCuts = meat.subcategories.classique.cuts.map(c => c.name);
  const boucherCuts = meat.subcategories.boucher.cuts.map(c => c.name);
  const allCuts = [...classiqueCuts, ...boucherCuts];

  const encycloKeys = Object.keys(encyclo[v]?.cuts || {});

  const missing = allCuts.filter(cut => {
    const normalized = normalize(cut);
    return !encycloKeys.some(k => k === normalized || k.includes(normalized) || normalized.includes(k));
  });

  console.log('\n=== ' + v.toUpperCase() + ' ===');
  console.log('Classique:', classiqueCuts.length, '| Boucher:', boucherCuts.length, '| Total:', allCuts.length);
  console.log('Fiches encyclopédie existantes:', encycloKeys.length);
  console.log('Morceaux SANS fiche:', missing.length);
  if (missing.length > 0) {
    console.log('  Manquants:', missing.join(', '));
  }
});
