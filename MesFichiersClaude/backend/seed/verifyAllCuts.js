const meatData = require('./meatData.js');

console.log('='.repeat(70));
console.log('   VÉRIFICATION COMPLÈTE DE TOUS LES MORCEAUX');
console.log('='.repeat(70));

const requiredFields = ['anatomie', 'techniqueDuChef', 'caracteristiques', 'sauces', 'accompagnements', 'erreursAEviter', 'leSaviezVous'];

let totalCuts = 0;
let completeCuts = 0;
let incompleteCuts = [];

function checkCut(meatName, subcategory, cut) {
  totalCuts++;
  const missing = [];

  requiredFields.forEach(field => {
    if (!cut[field]) {
      missing.push(field);
    } else if (Array.isArray(cut[field]) && cut[field].length === 0) {
      missing.push(field + ' (vide)');
    }
  });

  if (missing.length === 0) {
    completeCuts++;
    return true;
  } else {
    incompleteCuts.push({
      meat: meatName,
      subcategory: subcategory,
      cut: cut.name,
      missing: missing
    });
    return false;
  }
}

// Parcourir toutes les viandes
meatData.forEach(meat => {
  const meatName = meat.name;

  // Viandes avec sous-catégories (Boeuf, Porc, Agneau, Veau)
  if (meat.subcategories) {
    if (meat.subcategories.classique && meat.subcategories.classique.cuts) {
      meat.subcategories.classique.cuts.forEach(cut => {
        checkCut(meatName, 'classique', cut);
      });
    }
    if (meat.subcategories.boucher && meat.subcategories.boucher.cuts) {
      meat.subcategories.boucher.cuts.forEach(cut => {
        checkCut(meatName, 'boucher', cut);
      });
    }
  }

  // Viandes avec cuts directs (Volaille, Gibier)
  if (meat.cuts) {
    meat.cuts.forEach(cut => {
      checkCut(meatName, null, cut);
    });
  }
});

// Afficher les résultats
console.log(`\nTotal des morceaux: ${totalCuts}`);
console.log(`Morceaux complets: ${completeCuts}`);
console.log(`Morceaux incomplets: ${incompleteCuts.length}`);
console.log(`Taux de complétion: ${Math.round(completeCuts/totalCuts*100)}%`);

if (incompleteCuts.length > 0) {
  console.log('\n' + '='.repeat(70));
  console.log('   MORCEAUX INCOMPLETS');
  console.log('='.repeat(70));

  // Grouper par viande
  const byMeat = {};
  incompleteCuts.forEach(item => {
    const key = item.meat;
    if (!byMeat[key]) byMeat[key] = [];
    byMeat[key].push(item);
  });

  Object.entries(byMeat).forEach(([meatName, cuts]) => {
    console.log(`\n🥩 ${meatName} (${cuts.length} morceaux incomplets):`);
    cuts.forEach(item => {
      const subcat = item.subcategory ? ` [${item.subcategory}]` : '';
      console.log(`   ❌ ${item.cut}${subcat}`);
      console.log(`      Manquants: ${item.missing.join(', ')}`);
    });
  });
} else {
  console.log('\n✅ TOUS LES MORCEAUX SONT COMPLETS !');
}
