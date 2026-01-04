const meatData = require('./meatData.js');
const recettes = require('./recettesAccompagnements.js');

let stats = {};
let missing = [];

function checkRecettes(obj, meatName, cutName) {
  if (typeof obj !== 'object' || obj === null) return;

  if (obj.recetteId && obj.recetteId !== 'N/A') {
    if (!stats[meatName]) stats[meatName] = { total: 0, covered: 0 };
    stats[meatName].total++;

    if (recettes[obj.recetteId]) {
      stats[meatName].covered++;
    } else {
      missing.push({meat: meatName, cut: cutName, id: obj.recetteId});
    }
  }

  if (Array.isArray(obj)) {
    obj.forEach(item => checkRecettes(item, meatName, cutName));
  } else {
    Object.values(obj).forEach(val => checkRecettes(val, meatName, cutName));
  }
}

// Parcourir toutes les viandes
meatData.forEach(meat => {
  const meatName = meat.name;

  // Viandes avec subcategories (Boeuf, Porc, Agneau, Veau)
  if (meat.subcategories) {
    Object.values(meat.subcategories).forEach(sub => {
      if (sub.cuts) {
        sub.cuts.forEach(cut => checkRecettes(cut, meatName, cut.name));
      }
    });
  }

  // Viandes avec cuts directs (Volaille, Gibier)
  if (meat.cuts) {
    meat.cuts.forEach(cut => checkRecettes(cut, meatName, cut.name));
  }
});

console.log('='.repeat(55));
console.log('   COUVERTURE DES RECETTES PAR TYPE DE VIANDE');
console.log('='.repeat(55));

let grandTotal = 0;
let grandCovered = 0;

Object.entries(stats).sort().forEach(([meat, data]) => {
  const pct = Math.round(data.covered / data.total * 100);
  const status = pct === 100 ? '✅' : '⚠️';
  console.log(`${status} ${meat.padEnd(20)} : ${data.covered}/${data.total} recettes (${pct}%)`);
  grandTotal += data.total;
  grandCovered += data.covered;
});

console.log('='.repeat(55));
console.log(`   TOTAL: ${grandCovered}/${grandTotal} recettes (${Math.round(grandCovered/grandTotal*100)}%)`);
console.log('='.repeat(55));

if (missing.length > 0) {
  console.log('\n⚠️ Recettes manquantes:');
  missing.forEach(m => console.log(`   - ${m.meat} / ${m.cut}: ${m.id}`));
} else {
  console.log('\n✅ TOUTES LES VIANDES ONT LEURS RECETTES !');
}
