/**
 * Script pour fusionner les données enrichies avec meatData.js
 * Inclut: Boeuf, Porc, Agneau, Veau, Volaille, Gibier
 * Usage: node mergeEnrichedData.js
 */

const fs = require('fs');
const path = require('path');

// Charger les données existantes
const meatDataPath = path.join(__dirname, '..', 'meatData.js');

// Charger les données enrichies - BOEUF
const { boeufClassiqueEnriched } = require('./boeufEnriched');
const { boeufBoucherEnriched } = require('./boeufBoucherEnriched');

// Charger les données enrichies - PORC
const { porcClassiqueEnriched, porcBoucherEnriched } = require('./porcEnriched');

// Charger les données enrichies - AGNEAU
const { agneauClassiqueEnriched, agneauBoucherEnriched } = require('./agneauEnriched');

// Charger les données enrichies - VEAU
const { veauClassiqueEnriched, veauBoucherEnriched } = require('./veauEnriched');

// Charger les données enrichies - VOLAILLE
const {
  pouletEnriched,
  canardEnriched,
  dindeEnriched,
  pintadeEnriched,
  oieEnriched,
  chaponEnriched
} = require('./volailleEnriched');

// Charger les données enrichies - GIBIER
const {
  sanglierEnriched,
  cerfEnriched,
  chevreuilEnriched,
  bicheEnriched,
  lievreEnriched,
  faisanEnriched,
  lapinGarenneEnriched,
  perdrixEnriched,
  cailleEnriched,
  becasseEnriched,
  canardSauvageEnriched,
  marcassinEnriched,
  pigeonRamierEnriched
} = require('./gibierEnriched');

// Fonction pour fusionner les données enrichies dans un morceau
function enrichCut(cut, enrichedData) {
  const enrichment = enrichedData[cut.name];
  if (enrichment) {
    return {
      ...cut,
      anatomie: enrichment.anatomie,
      techniqueDuChef: enrichment.techniqueDuChef,
      caracteristiques: enrichment.caracteristiques,
      sauces: enrichment.sauces,
      accompagnements: enrichment.accompagnements,
      erreursAEviter: enrichment.erreursAEviter,
      leSaviezVous: enrichment.leSaviezVous
    };
  }
  console.log(`⚠️ Pas de données enrichies pour: ${cut.name}`);
  return cut;
}

// Charger et modifier meatData
const meatData = require('../meatData');

let totalEnriched = 0;

// ============================================
// ENRICHIR LE BOEUF (index 0)
// ============================================
const boeufIndex = meatData.findIndex(m => m.name === 'Boeuf');
if (boeufIndex !== -1 && meatData[boeufIndex].subcategories) {
  // Morceaux classiques
  if (meatData[boeufIndex].subcategories.classique) {
    meatData[boeufIndex].subcategories.classique.cuts = meatData[boeufIndex].subcategories.classique.cuts.map(
      cut => enrichCut(cut, boeufClassiqueEnriched)
    );
    const count = meatData[boeufIndex].subcategories.classique.cuts.length;
    console.log(`✅ Boeuf classique enrichi: ${count} morceaux`);
    totalEnriched += count;
  }

  // Morceaux boucher
  if (meatData[boeufIndex].subcategories.boucher) {
    meatData[boeufIndex].subcategories.boucher.cuts = meatData[boeufIndex].subcategories.boucher.cuts.map(
      cut => enrichCut(cut, boeufBoucherEnriched)
    );
    const count = meatData[boeufIndex].subcategories.boucher.cuts.length;
    console.log(`✅ Boeuf boucher enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// ENRICHIR LE PORC (index 1)
// ============================================
const porcIndex = meatData.findIndex(m => m.name === 'Porc');
if (porcIndex !== -1 && meatData[porcIndex].subcategories) {
  // Morceaux classiques
  if (meatData[porcIndex].subcategories.classique) {
    meatData[porcIndex].subcategories.classique.cuts = meatData[porcIndex].subcategories.classique.cuts.map(
      cut => enrichCut(cut, porcClassiqueEnriched)
    );
    const count = meatData[porcIndex].subcategories.classique.cuts.length;
    console.log(`✅ Porc classique enrichi: ${count} morceaux`);
    totalEnriched += count;
  }

  // Morceaux boucher
  if (meatData[porcIndex].subcategories.boucher) {
    meatData[porcIndex].subcategories.boucher.cuts = meatData[porcIndex].subcategories.boucher.cuts.map(
      cut => enrichCut(cut, porcBoucherEnriched)
    );
    const count = meatData[porcIndex].subcategories.boucher.cuts.length;
    console.log(`✅ Porc boucher enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// ENRICHIR L'AGNEAU (index 2)
// ============================================
const agneauIndex = meatData.findIndex(m => m.name === 'Agneau');
if (agneauIndex !== -1 && meatData[agneauIndex].subcategories) {
  // Morceaux classiques
  if (meatData[agneauIndex].subcategories.classique) {
    meatData[agneauIndex].subcategories.classique.cuts = meatData[agneauIndex].subcategories.classique.cuts.map(
      cut => enrichCut(cut, agneauClassiqueEnriched)
    );
    const count = meatData[agneauIndex].subcategories.classique.cuts.length;
    console.log(`✅ Agneau classique enrichi: ${count} morceaux`);
    totalEnriched += count;
  }

  // Morceaux boucher
  if (meatData[agneauIndex].subcategories.boucher) {
    meatData[agneauIndex].subcategories.boucher.cuts = meatData[agneauIndex].subcategories.boucher.cuts.map(
      cut => enrichCut(cut, agneauBoucherEnriched)
    );
    const count = meatData[agneauIndex].subcategories.boucher.cuts.length;
    console.log(`✅ Agneau boucher enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// ENRICHIR LE VEAU (index 3)
// ============================================
const veauIndex = meatData.findIndex(m => m.name === 'Veau');
if (veauIndex !== -1 && meatData[veauIndex].subcategories) {
  // Morceaux classiques
  if (meatData[veauIndex].subcategories.classique) {
    meatData[veauIndex].subcategories.classique.cuts = meatData[veauIndex].subcategories.classique.cuts.map(
      cut => enrichCut(cut, veauClassiqueEnriched)
    );
    const count = meatData[veauIndex].subcategories.classique.cuts.length;
    console.log(`✅ Veau classique enrichi: ${count} morceaux`);
    totalEnriched += count;
  }

  // Morceaux boucher
  if (meatData[veauIndex].subcategories.boucher) {
    meatData[veauIndex].subcategories.boucher.cuts = meatData[veauIndex].subcategories.boucher.cuts.map(
      cut => enrichCut(cut, veauBoucherEnriched)
    );
    const count = meatData[veauIndex].subcategories.boucher.cuts.length;
    console.log(`✅ Veau boucher enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// ENRICHIR LA VOLAILLE
// ============================================
// Mapping des noms de volaille vers leurs données enrichies
const volaileEnrichedMap = {
  'Poulet': pouletEnriched,
  'Canard': canardEnriched,
  'Dinde': dindeEnriched,
  'Pintade': pintadeEnriched,
  'Oie': oieEnriched,
  'Chapon': chaponEnriched
};

for (const [volailleName, enrichedData] of Object.entries(volaileEnrichedMap)) {
  const volaileIndex = meatData.findIndex(m => m.name === volailleName);
  if (volaileIndex !== -1 && meatData[volaileIndex].cuts) {
    meatData[volaileIndex].cuts = meatData[volaileIndex].cuts.map(
      cut => enrichCut(cut, enrichedData)
    );
    const count = meatData[volaileIndex].cuts.length;
    console.log(`✅ ${volailleName} enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// ENRICHIR LE GIBIER
// ============================================
// Mapping des noms de gibier vers leurs données enrichies
const gibierEnrichedMap = {
  'Sanglier': sanglierEnriched,
  'Cerf': cerfEnriched,
  'Chevreuil': chevreuilEnriched,
  'Biche': bicheEnriched,
  'Lièvre': lievreEnriched,
  'Faisan': faisanEnriched,
  'Lapin de garenne': lapinGarenneEnriched,
  'Perdrix': perdrixEnriched,
  'Caille': cailleEnriched,
  'Bécasse': becasseEnriched,
  'Canard sauvage': canardSauvageEnriched,
  'Marcassin': marcassinEnriched,
  'Pigeon ramier': pigeonRamierEnriched
};

for (const [gibierName, enrichedData] of Object.entries(gibierEnrichedMap)) {
  const gibierIndex = meatData.findIndex(m => m.name === gibierName);
  if (gibierIndex !== -1 && meatData[gibierIndex].cuts) {
    meatData[gibierIndex].cuts = meatData[gibierIndex].cuts.map(
      cut => enrichCut(cut, enrichedData)
    );
    const count = meatData[gibierIndex].cuts.length;
    console.log(`✅ ${gibierName} enrichi: ${count} morceaux`);
    totalEnriched += count;
  }
}

// ============================================
// GÉNÉRER LE FICHIER ENRICHI
// ============================================
const newContent = `// meatData.js - Données enrichies avec anatomie, techniques, accompagnements, etc.
// Généré automatiquement par mergeEnrichedData.js
// Total: ${totalEnriched} morceaux enrichis

const meatData = ${JSON.stringify(meatData, null, 2)};

module.exports = meatData;
`;

// Sauvegarder
const outputPath = path.join(__dirname, '..', 'meatData_enriched.js');
fs.writeFileSync(outputPath, newContent);

console.log('\n' + '='.repeat(50));
console.log(`📊 TOTAL: ${totalEnriched} morceaux enrichis`);
console.log(`📁 Fichier sauvegardé: ${outputPath}`);
console.log('='.repeat(50));
console.log('\n💡 Pour appliquer:');
console.log('   1. Vérifier le fichier meatData_enriched.js');
console.log('   2. Sauvegarder une copie de meatData.js');
console.log('   3. Renommer meatData_enriched.js en meatData.js');
