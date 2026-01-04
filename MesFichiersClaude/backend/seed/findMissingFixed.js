const meatData = require('./meatData.js');
const { recettesSauces } = require('./recettesSauces.js');
const recettesAccompagnements = require('./recettesAccompagnements.js');

// Fonction pour normaliser un nom en ID
function normalizeToId(nom) {
    return nom.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '');
}

// Extraire toutes les sauces et accompagnements
const allSauces = new Map();
const allAccompagnements = new Map();

function extractFromObject(obj) {
    if (obj === null || obj === undefined || typeof obj !== 'object') return;

    if (Array.isArray(obj)) {
        obj.forEach(item => extractFromObject(item));
        return;
    }

    // Extraire les sauces
    if (obj.sauces && Array.isArray(obj.sauces)) {
        obj.sauces.forEach(s => {
            if (s.nom) {
                const id = normalizeToId(s.nom);
                if (!allSauces.has(id)) {
                    allSauces.set(id, { nom: s.nom, type: s.type || '', description: s.description || '' });
                }
            }
        });
    }

    // Extraire les accompagnements
    if (obj.accompagnements) {
        if (Array.isArray(obj.accompagnements)) {
            obj.accompagnements.forEach(a => {
                const nom = typeof a === 'string' ? a : a.nom;
                if (nom) {
                    const id = normalizeToId(nom);
                    if (!allAccompagnements.has(id)) {
                        allAccompagnements.set(id, { nom });
                    }
                }
            });
        } else if (typeof obj.accompagnements === 'object') {
            Object.values(obj.accompagnements).forEach(arr => {
                if (Array.isArray(arr)) {
                    arr.forEach(a => {
                        const nom = typeof a === 'string' ? a : a.nom;
                        if (nom) {
                            const id = normalizeToId(nom);
                            if (!allAccompagnements.has(id)) {
                                allAccompagnements.set(id, { nom });
                            }
                        }
                    });
                }
            });
        }
    }

    // Récursif
    Object.values(obj).forEach(val => extractFromObject(val));
}

meatData.forEach(meat => extractFromObject(meat));

// Trouver les manquants
const existingSauces = new Set(Object.keys(recettesSauces));
const existingAccomp = new Set(Object.keys(recettesAccompagnements));

const missingSauces = [];
const missingAccomp = [];

allSauces.forEach((data, id) => {
    if (!existingSauces.has(id)) {
        missingSauces.push({ id, ...data });
    }
});

allAccompagnements.forEach((data, id) => {
    if (!existingAccomp.has(id)) {
        missingAccomp.push({ id, ...data });
    }
});

console.log('=== SAUCES MANQUANTES (' + missingSauces.length + ') ===');
missingSauces.sort((a,b) => a.nom.localeCompare(b.nom)).forEach(s => {
    console.log(JSON.stringify(s));
});

console.log('\n=== ACCOMPAGNEMENTS MANQUANTS (' + missingAccomp.length + ') ===');
missingAccomp.sort((a,b) => a.nom.localeCompare(b.nom)).forEach(a => {
    console.log(JSON.stringify(a));
});

// Exporter pour utilisation externe
module.exports = { missingSauces, missingAccomp };
