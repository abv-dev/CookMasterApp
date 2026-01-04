const meatData = require('./meatData.js');
const recetteIds = new Set();

function extractRecetteIds(obj) {
  if (typeof obj !== 'object' || obj === null) return;

  if (obj.recetteId) recetteIds.add(obj.recetteId);

  if (Array.isArray(obj)) {
    obj.forEach(item => extractRecetteIds(item));
  } else {
    Object.values(obj).forEach(val => extractRecetteIds(val));
  }
}

meatData.forEach(meat => extractRecetteIds(meat));
console.log([...recetteIds].sort().join('\n'));
