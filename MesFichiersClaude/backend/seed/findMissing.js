// Script pour trouver toutes les sauces et accompagnements manquants
const meatData = require('./meatData.js');
const recettesSauces = require('./recettesSauces.js');
const recettesAccompagnements = require('./recettesAccompagnements.js');

// Fonction pour normaliser un nom en ID
function normalizeToId(nom) {
    return nom.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '');
}

// Extraire toutes les sauces
const allSauces = new Set();
const allAccompagnements = new Set();

function extractFromObject(obj) {
    if (!obj || typeof obj !== 'object') return;

    if (Array.isArray(obj)) {
        obj.forEach(item => extractFromObject(item));
        return;
    }

    // Extraire les sauces
    if (obj.sauces && Array.isArray(obj.sauces)) {
        obj.sauces.forEach(s => {
            if (s.nom) allSauces.add(s.nom);
        });
    }

    // Extraire les accompagnements
    if (obj.accompagnements) {
        if (Array.isArray(obj.accompagnements)) {
            obj.accompagnements.forEach(a => {
                if (typeof a === 'string') allAccompagnements.add(a);
                else if (a.nom) allAccompagnements.add(a.nom);
            });
        } else if (typeof obj.accompagnements === 'object') {
            Object.values(obj.accompagnements).forEach(arr => {
                if (Array.isArray(arr)) {
                    arr.forEach(a => {
                        if (typeof a === 'string') allAccompagnements.add(a);
                        else if (a.nom) allAccompagnements.add(a.nom);
                    });
                }
            });
        }
    }

    // Récursif
    Object.values(obj).forEach(val => extractFromObject(val));
}

meatData.forEach(meat => extractFromObject(meat));

// Vérifier les recettes existantes
const existingSauces = new Set(Object.keys(recettesSauces));
const existingAccomp = new Set(Object.keys(recettesAccompagnements));

// Trouver les manquants
const missingSauces = [];
const missingAccomp = [];

allSauces.forEach(sauce => {
    const id = normalizeToId(sauce);
    if (!existingSauces.has(id)) {
        missingSauces.push({ nom: sauce, id });
    }
});

allAccompagnements.forEach(acc => {
    const id = normalizeToId(acc);
    if (!existingAccomp.has(id)) {
        missingAccomp.push({ nom: acc, id });
    }
});

console.log('=== SAUCES MANQUANTES ===');
console.log(`Total sauces référencées: ${allSauces.size}`);
console.log(`Recettes existantes: ${existingSauces.size}`);
console.log(`Manquantes: ${missingSauces.length}`);
console.log('');
missingSauces.sort((a,b) => a.nom.localeCompare(b.nom)).forEach(s => {
    console.log(`  - ${s.nom} (id: ${s.id})`);
});

console.log('\n=== ACCOMPAGNEMENTS MANQUANTS ===');
console.log(`Total accompagnements référencés: ${allAccompagnements.size}`);
console.log(`Recettes existantes: ${existingAccomp.size}`);
console.log(`Manquants: ${missingAccomp.length}`);
console.log('');
missingAccomp.sort((a,b) => a.nom.localeCompare(b.nom)).forEach(a => {
    console.log(`  - ${a.nom} (id: ${a.id})`);
});
