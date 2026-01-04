const meatData = require('./meatData.js');
const sauces = new Map();

function extractSauces(obj, meatName) {
  if (typeof obj !== 'object' || obj === null) return;

  if (obj.sauces && Array.isArray(obj.sauces)) {
    obj.sauces.forEach(sauce => {
      const key = sauce.nom;
      if (!sauces.has(key)) {
        sauces.set(key, {
          nom: sauce.nom,
          type: sauce.type,
          description: sauce.description,
          usedBy: [meatName]
        });
      } else {
        const existing = sauces.get(key);
        if (!existing.usedBy.includes(meatName)) {
          existing.usedBy.push(meatName);
        }
      }
    });
  }

  if (Array.isArray(obj)) {
    obj.forEach(item => extractSauces(item, meatName));
  } else {
    Object.values(obj).forEach(val => extractSauces(val, meatName));
  }
}

meatData.forEach(meat => extractSauces(meat, meat.name));

// Trier par type puis par nom
const sortedSauces = [...sauces.values()].sort((a, b) => {
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return a.nom.localeCompare(b.nom);
});

console.log(`Total sauces uniques: ${sortedSauces.length}\n`);

// Grouper par type
const byType = {};
sortedSauces.forEach(s => {
  if (!byType[s.type]) byType[s.type] = [];
  byType[s.type].push(s);
});

Object.entries(byType).forEach(([type, saucesList]) => {
  console.log(`\n=== ${type.toUpperCase()} (${saucesList.length}) ===`);
  saucesList.forEach(s => {
    console.log(`  - ${s.nom}`);
    console.log(`    ${s.description || 'Pas de description'}`);
  });
});
