/**
 * Base de données complète des viandes - MISE À JOUR
 * Source: Tableau des Températures de Cuisson - Guide Complet
 * Températures gastronomiques ET normes de sécurité UE (Règlement 852/2004)
 */

const meatData = [
  // ==================== BŒUF ====================
  {
    category: 'boeuf',
    name: 'Boeuf',
    nameEn: 'Beef',
    description: 'Viande de bœuf - riche et savoureuse',
    cuts: [
      {
        name: 'Filet',
        nameEn: 'Tenderloin',
        description: 'Morceau le plus tendre, maigre et fondant',
        typicalWeight: { min: 0.4, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 30, width: 8, height: 8, unit: 'cm' },
        recommendations: 'Idéal pour tournedos, chateaubriand. Cuisson rapide recommandée.',
        temperatures: [
          {
            doneness: 'bleu',
            coreTemperature: 40,
            safetyTemperature: null,
            description: 'Rouge froid au centre (non recommandé pour sécurité)'
          },
          {
            doneness: 'saignant',
            coreTemperature: 44,
            safetyTemperature: 52,
            description: 'Rouge tiède au centre'
          },
          {
            doneness: 'à point',
            coreTemperature: 52,
            safetyTemperature: 57,
            description: 'Rosé au centre'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          },
          {
            doneness: 'très bien cuit',
            coreTemperature: 68,
            safetyTemperature: 70,
            description: 'Pas de rose'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 220,
            baseTimePerKg: 12,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'four_traditionnel',
            cookingTemperature: 200,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.1,
            restingTime: 7
          },
          {
            method: 'sous_vide',
            cookingTemperature: 52,
            baseTimePerKg: 120,
            baseTimePerCm: 20,
            adjustmentFactor: 1.5,
            restingTime: 3
          },
          {
            method: 'barbecue_charbon',
            cookingTemperature: 200,
            baseTimePerKg: 14,
            baseTimePerCm: 3,
            adjustmentFactor: 0.95,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Entrecôte',
        nameEn: 'Ribeye',
        description: 'Morceau persillé et savoureux, avec os ou sans',
        typicalWeight: { min: 0.3, max: 1.2, unit: 'kg' },
        typicalDimensions: { length: 25, width: 12, height: 3, unit: 'cm' },
        recommendations: 'Excellente au grill ou à la poêle. Le persillage apporte saveur et tendreté.',
        temperatures: [
          {
            doneness: 'bleu',
            coreTemperature: 40,
            safetyTemperature: null,
            description: 'Rouge froid au centre'
          },
          {
            doneness: 'saignant',
            coreTemperature: 44,
            safetyTemperature: 52,
            description: 'Rouge tiède au centre'
          },
          {
            doneness: 'à point',
            coreTemperature: 52,
            safetyTemperature: 57,
            description: 'Rosé au centre'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 200,
            baseTimePerKg: 18,
            baseTimePerCm: 3.5,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'plancha',
            cookingTemperature: 220,
            baseTimePerKg: 16,
            baseTimePerCm: 3,
            adjustmentFactor: 0.95,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 230,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.9,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Viande hachée de bœuf',
        nameEn: 'Ground beef',
        description: 'Viande hachée pour steaks hachés, bolognaise, etc.',
        typicalWeight: { min: 0.1, max: 0.5, unit: 'kg' },
        typicalDimensions: { length: 12, width: 12, height: 2, unit: 'cm' },
        recommendations: 'OBLIGATOIRE: Cuire à 71°C minimum pour la sécurité',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 71,
            safetyTemperature: 71,
            description: 'Pas de rose - OBLIGATOIRE pour sécurité alimentaire'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 20,
            baseTimePerCm: 5,
            adjustmentFactor: 1.0,
            restingTime: 3
          },
          {
            method: 'plancha',
            cookingTemperature: 200,
            baseTimePerKg: 18,
            baseTimePerCm: 4.5,
            adjustmentFactor: 0.95,
            restingTime: 3
          }
        ]
      },
      {
        name: 'Côte de bœuf',
        nameEn: 'Rib steak',
        description: 'Grande pièce avec os, généreuse et savoureuse',
        typicalWeight: { min: 0.8, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 30, width: 15, height: 5, unit: 'cm' },
        recommendations: 'Pièce de choix pour partager, excellente au four ou au grill',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 44,
            safetyTemperature: 52,
            description: 'Rouge tiède au centre'
          },
          {
            doneness: 'à point',
            coreTemperature: 52,
            safetyTemperature: 57,
            description: 'Rosé au centre'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 30,
            baseTimePerCm: 6,
            adjustmentFactor: 1.2,
            restingTime: 10
          },
          {
            method: 'grill',
            cookingTemperature: 200,
            baseTimePerKg: 25,
            baseTimePerCm: 5,
            adjustmentFactor: 1.0,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Brisket (poitrine)',
        nameEn: 'Brisket',
        description: 'Morceau pour cuisson BBQ low & slow',
        typicalWeight: { min: 2.0, max: 5.0, unit: 'kg' },
        typicalDimensions: { length: 40, width: 25, height: 8, unit: 'cm' },
        recommendations: 'Cuisson très longue à basse température, idéal fumé',
        temperatures: [
          {
            doneness: 'très bien cuit',
            coreTemperature: 90,
            safetyTemperature: 90,
            description: 'Très tendre, effiloché'
          }
        ],
        cookingMethods: [
          {
            method: 'fumoir_chaud',
            cookingTemperature: 120,
            baseTimePerKg: 240,
            baseTimePerCm: 30,
            adjustmentFactor: 2.5,
            restingTime: 30
          },
          {
            method: 'four_traditionnel',
            cookingTemperature: 120,
            baseTimePerKg: 200,
            baseTimePerCm: 25,
            adjustmentFactor: 2.2,
            restingTime: 20
          }
        ]
      }
    ]
  },

  // ==================== PORC ====================
  {
    category: 'porc',
    name: 'Porc',
    nameEn: 'Pork',
    description: 'Viande de porc - polyvalente et savoureuse',
    cuts: [
      {
        name: 'Filet mignon',
        nameEn: 'Pork tenderloin',
        description: 'Morceau très tendre et maigre',
        typicalWeight: { min: 0.3, max: 0.6, unit: 'kg' },
        typicalDimensions: { length: 25, width: 6, height: 6, unit: 'cm' },
        recommendations: 'Cuisson rapide, attention à ne pas dessécher. Peut être rosé selon normes UE.',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 60,
            safetyTemperature: 63,
            description: 'Rose pâle tendre (tenir 3 min à 63°C OU 71°C instantané)'
          },
          {
            doneness: 'à point',
            coreTemperature: 64,
            safetyTemperature: 71,
            description: 'Juteux, légèrement rosé'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 71,
            safetyTemperature: 71,
            description: 'Bien cuit traditionnel'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 25,
            baseTimePerCm: 5,
            adjustmentFactor: 1.1,
            restingTime: 10
          },
          {
            method: 'sous_vide',
            cookingTemperature: 60,
            baseTimePerKg: 120,
            baseTimePerCm: 20,
            adjustmentFactor: 1.5,
            restingTime: 3
          }
        ]
      },
      {
        name: 'Côtelettes de porc',
        nameEn: 'Pork chops',
        description: 'Côtes avec os, juteuses et savoureuses',
        typicalWeight: { min: 0.15, max: 0.35, unit: 'kg' },
        typicalDimensions: { length: 15, width: 10, height: 2.5, unit: 'cm' },
        recommendations: 'Excellent grillé ou poêlé, peut être à peine rosé',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 62,
            safetyTemperature: 63,
            description: 'À peine rosé'
          },
          {
            doneness: 'à point',
            coreTemperature: 67,
            safetyTemperature: 71,
            description: 'Juste cuit'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 71,
            safetyTemperature: 71,
            description: 'Bien cuit'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 190,
            baseTimePerKg: 22,
            baseTimePerCm: 4.5,
            adjustmentFactor: 1.0,
            restingTime: 4
          },
          {
            method: 'grill',
            cookingTemperature: 210,
            baseTimePerKg: 18,
            baseTimePerCm: 3.5,
            adjustmentFactor: 0.9,
            restingTime: 4
          },
          {
            method: 'plancha',
            cookingTemperature: 200,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 0.95,
            restingTime: 4
          }
        ]
      },
      {
        name: 'Rôti de porc (échine/longe)',
        nameEn: 'Pork roast',
        description: 'Pièce à rôtir, échine ou longe',
        typicalWeight: { min: 0.8, max: 2.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 10, height: 10, unit: 'cm' },
        recommendations: 'Cuisson au four, peut être farci',
        temperatures: [
          {
            doneness: 'à point',
            coreTemperature: 64,
            safetyTemperature: 71,
            description: 'Juteux, moelleux'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 71,
            safetyTemperature: 71,
            description: 'Bien cuit traditionnel'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 35,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 10
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 170,
            baseTimePerKg: 32,
            baseTimePerCm: 6.5,
            adjustmentFactor: 1.15,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Travers de porc (ribs)',
        nameEn: 'Pork ribs',
        description: 'Côtes levées, idéales au barbecue',
        typicalWeight: { min: 0.6, max: 1.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 15, height: 3, unit: 'cm' },
        recommendations: 'Cuisson lente avec marinade ou sauce BBQ',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 89,
            safetyTemperature: 71,
            description: 'Tendre, se détache de l\'os'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 120,
            baseTimePerKg: 180,
            baseTimePerCm: 20,
            adjustmentFactor: 2.0,
            restingTime: 10
          },
          {
            method: 'barbecue_charbon',
            cookingTemperature: 115,
            baseTimePerKg: 200,
            baseTimePerCm: 22,
            adjustmentFactor: 2.2,
            restingTime: 10
          },
          {
            method: 'fumoir_chaud',
            cookingTemperature: 115,
            baseTimePerKg: 240,
            baseTimePerCm: 25,
            adjustmentFactor: 2.5,
            restingTime: 15
          }
        ]
      },
      {
        name: 'Épaule de porc (pulled pork)',
        nameEn: 'Pork shoulder',
        description: 'Morceau pour cuisson longue, pulled pork',
        typicalWeight: { min: 1.5, max: 4.0, unit: 'kg' },
        typicalDimensions: { length: 25, width: 20, height: 15, unit: 'cm' },
        recommendations: 'Idéal pour cuisson lente, effiloché',
        temperatures: [
          {
            doneness: 'très bien cuit',
            coreTemperature: 94,
            safetyTemperature: 71,
            description: 'Très tendre, s\'effiloche facilement'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 115,
            baseTimePerKg: 240,
            baseTimePerCm: 25,
            adjustmentFactor: 2.5,
            restingTime: 20
          },
          {
            method: 'mijoteuse',
            cookingTemperature: 90,
            baseTimePerKg: 300,
            baseTimePerCm: 30,
            adjustmentFactor: 3.0,
            restingTime: 15
          },
          {
            method: 'fumoir_chaud',
            cookingTemperature: 115,
            baseTimePerKg: 280,
            baseTimePerCm: 28,
            adjustmentFactor: 2.8,
            restingTime: 25
          }
        ]
      }
    ]
  },

  // ==================== AGNEAU ====================
  {
    category: 'agneau',
    name: 'Agneau',
    nameEn: 'Lamb',
    description: 'Viande d\'agneau - délicate et parfumée',
    cuts: [
      {
        name: 'Gigot d\'agneau',
        nameEn: 'Leg of lamb',
        description: 'Pièce de choix pour rôtir',
        typicalWeight: { min: 1.5, max: 3.0, unit: 'kg' },
        typicalDimensions: { length: 35, width: 12, height: 12, unit: 'cm' },
        recommendations: 'Excellent rôti, peut être rosé. Idéal pour grandes tablées.',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 45,
            safetyTemperature: 52,
            description: 'Rouge vif'
          },
          {
            doneness: 'rosé',
            coreTemperature: 50,
            safetyTemperature: 57,
            description: 'Rose tendre'
          },
          {
            doneness: 'à point',
            coreTemperature: 57,
            safetyTemperature: 62,
            description: 'Rose pâle uniforme'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 67,
            safetyTemperature: 71,
            description: 'Pas de rose'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 30,
            baseTimePerCm: 6,
            adjustmentFactor: 1.2,
            restingTime: 15
          },
          {
            method: 'rotissoire',
            cookingTemperature: 180,
            baseTimePerKg: 28,
            baseTimePerCm: 5.5,
            adjustmentFactor: 1.15,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Carré d\'agneau',
        nameEn: 'Rack of lamb',
        description: 'Côtes premières, très tendres',
        typicalWeight: { min: 0.4, max: 0.8, unit: 'kg' },
        typicalDimensions: { length: 20, width: 8, height: 5, unit: 'cm' },
        recommendations: 'Pièce raffinée, cuisson courte recommandée',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 45,
            safetyTemperature: 52,
            description: 'Rouge vif'
          },
          {
            doneness: 'rosé',
            coreTemperature: 50,
            safetyTemperature: 57,
            description: 'Rose tendre'
          },
          {
            doneness: 'à point',
            coreTemperature: 57,
            safetyTemperature: 62,
            description: 'Rose pâle'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 200,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 7
          },
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 220,
            baseTimePerKg: 14,
            baseTimePerCm: 2.8,
            adjustmentFactor: 0.85,
            restingTime: 5
          },
          {
            method: 'sous_vide',
            cookingTemperature: 52,
            baseTimePerKg: 90,
            baseTimePerCm: 15,
            adjustmentFactor: 1.3,
            restingTime: 3
          }
        ]
      },
      {
        name: 'Épaule d\'agneau',
        nameEn: 'Lamb shoulder',
        description: 'Morceau savoureux pour cuisson lente',
        typicalWeight: { min: 1.0, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 25, width: 15, height: 10, unit: 'cm' },
        recommendations: 'Idéal pour méchoui ou confit, cuisson longue',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 67,
            safetyTemperature: 71,
            description: 'Pas de rose'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 160,
            baseTimePerKg: 90,
            baseTimePerCm: 12,
            adjustmentFactor: 1.5,
            restingTime: 10
          },
          {
            method: 'braisage',
            cookingTemperature: 150,
            baseTimePerKg: 100,
            baseTimePerCm: 13,
            adjustmentFactor: 1.6,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Côtelettes d\'agneau',
        nameEn: 'Lamb chops',
        description: 'Petites côtes individuelles',
        typicalWeight: { min: 0.08, max: 0.15, unit: 'kg' },
        typicalDimensions: { length: 10, width: 6, height: 2, unit: 'cm' },
        recommendations: 'Cuisson rapide, excellent grillées',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 45,
            safetyTemperature: 52,
            description: 'Rouge vif'
          },
          {
            doneness: 'rosé',
            coreTemperature: 50,
            safetyTemperature: 57,
            description: 'Rose tendre'
          },
          {
            doneness: 'à point',
            coreTemperature: 57,
            safetyTemperature: 62,
            description: 'Rose pâle'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 200,
            baseTimePerKg: 12,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.8,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 230,
            baseTimePerKg: 10,
            baseTimePerCm: 2,
            adjustmentFactor: 0.75,
            restingTime: 5
          }
        ]
      }
    ]
  },

  // ==================== VEAU ====================
  {
    category: 'veau',
    name: 'Veau',
    nameEn: 'Veal',
    description: 'Viande de veau - tendre et délicate',
    cuts: [
      {
        name: 'Escalope de veau',
        nameEn: 'Veal escalope',
        description: 'Fine tranche de veau, très tendre',
        typicalWeight: { min: 0.1, max: 0.2, unit: 'kg' },
        typicalDimensions: { length: 15, width: 10, height: 1, unit: 'cm' },
        recommendations: 'Cuisson rapide à la poêle, panée ou nature',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 54,
            safetyTemperature: 62,
            description: 'Rose délicat'
          },
          {
            doneness: 'à point',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 67,
            safetyTemperature: 71,
            description: 'Blanc'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 170,
            baseTimePerKg: 10,
            baseTimePerCm: 2,
            adjustmentFactor: 0.8,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Rôti de veau',
        nameEn: 'Veal roast',
        description: 'Rôti tendre et savoureux',
        typicalWeight: { min: 0.8, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 25, width: 10, height: 10, unit: 'cm' },
        recommendations: 'Cuisson douce au four pour préserver la tendreté',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 58,
            safetyTemperature: 67,
            description: 'Rose pâle'
          },
          {
            doneness: 'à point',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 67,
            safetyTemperature: 71,
            description: 'Blanc'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 170,
            baseTimePerKg: 35,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 12
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 160,
            baseTimePerKg: 32,
            baseTimePerCm: 6.5,
            adjustmentFactor: 1.15,
            restingTime: 12
          }
        ]
      },
      {
        name: 'Côte de veau',
        nameEn: 'Veal chop',
        description: 'Côte avec os, juteuse',
        typicalWeight: { min: 0.2, max: 0.4, unit: 'kg' },
        typicalDimensions: { length: 15, width: 12, height: 3, unit: 'cm' },
        recommendations: 'Excellente à la poêle ou au grill',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 54,
            safetyTemperature: 62,
            description: 'Rose délicat'
          },
          {
            doneness: 'à point',
            coreTemperature: 60,
            safetyTemperature: 67,
            description: 'Légèrement rosé'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 7
          },
          {
            method: 'grill',
            cookingTemperature: 200,
            baseTimePerKg: 18,
            baseTimePerCm: 3.5,
            adjustmentFactor: 0.95,
            restingTime: 7
          }
        ]
      }
    ]
  },

  // ==================== VOLAILLE ====================
  {
    category: 'volaille',
    name: 'Poulet',
    nameEn: 'Chicken',
    description: 'Volaille - viande blanche maigre et versatile',
    cuts: [
      {
        name: 'Poulet entier',
        nameEn: 'Whole chicken',
        description: 'Poulet complet à rôtir',
        typicalWeight: { min: 1.2, max: 2.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 20, height: 15, unit: 'cm' },
        recommendations: 'Farci ou nature, bien assaisonné. OBLIGATOIRE: 74°C à cœur',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Jus clair - OBLIGATOIRE pour sécurité'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 45,
            baseTimePerCm: 8,
            adjustmentFactor: 1.3,
            restingTime: 12
          },
          {
            method: 'rotissoire',
            cookingTemperature: 190,
            baseTimePerKg: 40,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 12
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 170,
            baseTimePerKg: 42,
            baseTimePerCm: 7.5,
            adjustmentFactor: 1.25,
            restingTime: 12
          }
        ]
      },
      {
        name: 'Blanc de poulet',
        nameEn: 'Chicken breast',
        description: 'Filet de poulet, maigre',
        typicalWeight: { min: 0.15, max: 0.3, unit: 'kg' },
        typicalDimensions: { length: 15, width: 8, height: 2.5, unit: 'cm' },
        recommendations: 'Attention à ne pas dessécher. Sous-vide possible à 68-70°C mais 74°C recommandé',
        temperatures: [
          {
            doneness: 'juteux (sous-vide)',
            coreTemperature: 69,
            safetyTemperature: 74,
            description: 'Juteux (nécessite pasteurisation longue)'
          },
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Jus clair, juteux - RECOMMANDÉ'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 170,
            baseTimePerKg: 18,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 22,
            baseTimePerCm: 5,
            adjustmentFactor: 1.1,
            restingTime: 5
          },
          {
            method: 'plancha',
            cookingTemperature: 180,
            baseTimePerKg: 16,
            baseTimePerCm: 3.5,
            adjustmentFactor: 0.95,
            restingTime: 5
          },
          {
            method: 'sous_vide',
            cookingTemperature: 64,
            baseTimePerKg: 120,
            baseTimePerCm: 20,
            adjustmentFactor: 1.5,
            restingTime: 2
          }
        ]
      },
      {
        name: 'Cuisse de poulet',
        nameEn: 'Chicken thigh',
        description: 'Haut de cuisse, plus gras et savoureux',
        typicalWeight: { min: 0.15, max: 0.25, unit: 'kg' },
        typicalDimensions: { length: 12, width: 10, height: 4, unit: 'cm' },
        recommendations: 'Plus difficile à dessécher que le blanc, très savoureux',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 76,
            safetyTemperature: 74,
            description: 'Fondant, jus clair'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 190,
            baseTimePerKg: 35,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 5
          },
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 25,
            baseTimePerCm: 5,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 200,
            baseTimePerKg: 30,
            baseTimePerCm: 6,
            adjustmentFactor: 1.1,
            restingTime: 5
          }
        ]
      }
    ]
  },

  // ==================== CANARD ====================
  {
    category: 'volaille',
    name: 'Canard',
    nameEn: 'Duck',
    description: 'Volaille à chair rouge - riche et savoureuse',
    cuts: [
      {
        name: 'Magret de canard',
        nameEn: 'Duck breast',
        description: 'Filet de canard, peut être rosé',
        typicalWeight: { min: 0.3, max: 0.5, unit: 'kg' },
        typicalDimensions: { length: 18, width: 10, height: 3, unit: 'cm' },
        recommendations: 'Excellent rosé, griller côté peau d\'abord',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 54,
            safetyTemperature: 71,
            description: 'Rosé idéal pour magret'
          },
          {
            doneness: 'à point',
            coreTemperature: 60,
            safetyTemperature: 71,
            description: 'Rose léger'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'plancha',
            cookingTemperature: 200,
            baseTimePerKg: 13,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.85,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Canard entier',
        nameEn: 'Whole duck',
        description: 'Canard complet à rôtir',
        typicalWeight: { min: 1.5, max: 2.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 18, height: 12, unit: 'cm' },
        recommendations: 'Cuisses à 74°C, magret peut rester à 60°C',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Cuisses bien cuites, magret rosé'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 50,
            baseTimePerCm: 9,
            adjustmentFactor: 1.4,
            restingTime: 10
          },
          {
            method: 'rotissoire',
            cookingTemperature: 190,
            baseTimePerKg: 45,
            baseTimePerCm: 8,
            adjustmentFactor: 1.3,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Confit de canard',
        nameEn: 'Duck confit',
        description: 'Cuisses confites dans la graisse',
        typicalWeight: { min: 0.2, max: 0.3, unit: 'kg' },
        typicalDimensions: { length: 15, width: 10, height: 5, unit: 'cm' },
        recommendations: 'Cuisson longue et lente dans la graisse',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 85,
            safetyTemperature: 74,
            description: 'Très tendre, fondant'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 140,
            baseTimePerKg: 150,
            baseTimePerCm: 18,
            adjustmentFactor: 2.0,
            restingTime: 5
          }
        ]
      }
    ]
  },

  // ==================== DINDE ====================
  {
    category: 'volaille',
    name: 'Dinde',
    nameEn: 'Turkey',
    description: 'Grande volaille, idéale pour les fêtes',
    cuts: [
      {
        name: 'Dinde entière',
        nameEn: 'Whole turkey',
        description: 'Dinde complète à rôtir',
        typicalWeight: { min: 3.0, max: 8.0, unit: 'kg' },
        typicalDimensions: { length: 45, width: 30, height: 20, unit: 'cm' },
        recommendations: 'OBLIGATOIRE: 74°C à cœur. Arroser régulièrement',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Bien cuit - OBLIGATOIRE'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 170,
            baseTimePerKg: 40,
            baseTimePerCm: 7,
            adjustmentFactor: 1.3,
            restingTime: 20
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 160,
            baseTimePerKg: 38,
            baseTimePerCm: 6.5,
            adjustmentFactor: 1.25,
            restingTime: 20
          }
        ]
      },
      {
        name: 'Escalope de dinde',
        nameEn: 'Turkey breast',
        description: 'Fine tranche de dinde',
        typicalWeight: { min: 0.1, max: 0.2, unit: 'kg' },
        typicalDimensions: { length: 15, width: 10, height: 1.5, unit: 'cm' },
        recommendations: 'Cuisson rapide, ne pas dessécher',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Bien cuit, juteux'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 170,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.9,
            restingTime: 3
          }
        ]
      }
    ]
  },

  // ==================== GIBIER ====================
  {
    category: 'gibier',
    name: 'Cerf/Biche',
    nameEn: 'Deer',
    description: 'Gibier à viande rouge, maigre et goûteuse',
    cuts: [
      {
        name: 'Filet de cerf',
        nameEn: 'Venison tenderloin',
        description: 'Morceau très tendre, peu gras',
        typicalWeight: { min: 0.5, max: 1.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 8, height: 8, unit: 'cm' },
        recommendations: 'Viande maigre, ne pas trop cuire',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 50,
            safetyTemperature: 62,
            description: 'Rouge-rosé, viande maigre'
          },
          {
            doneness: 'à point',
            coreTemperature: 56,
            safetyTemperature: 65,
            description: 'Rosé'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'four_traditionnel',
            cookingTemperature: 190,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 10
          }
        ]
      }
    ]
  },
  {
    category: 'gibier',
    name: 'Chevreuil',
    nameEn: 'Roe deer',
    description: 'Petit gibier très tendre',
    cuts: [
      {
        name: 'Filet de chevreuil',
        nameEn: 'Roe deer fillet',
        description: 'Très tendre, saveur délicate',
        typicalWeight: { min: 0.3, max: 0.8, unit: 'kg' },
        typicalDimensions: { length: 25, width: 6, height: 6, unit: 'cm' },
        recommendations: 'Très tendre, cuisson rapide',
        temperatures: [
          {
            doneness: 'saignant',
            coreTemperature: 50,
            safetyTemperature: 62,
            description: 'Rosé, très tendre'
          }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 180,
            baseTimePerKg: 12,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.85,
            restingTime: 5
          }
        ]
      }
    ]
  },
  {
    category: 'gibier',
    name: 'Sanglier',
    nameEn: 'Wild boar',
    description: 'Gibier à cuire complètement (risque trichinose)',
    cuts: [
      {
        name: 'Rôti de sanglier',
        nameEn: 'Wild boar roast',
        description: 'Viande ferme et goûteuse',
        typicalWeight: { min: 1.0, max: 3.0, unit: 'kg' },
        typicalDimensions: { length: 30, width: 12, height: 12, unit: 'cm' },
        recommendations: 'OBLIGATOIRE: 71°C minimum (risque trichinose)',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 71,
            safetyTemperature: 71,
            description: 'À peine rosé - OBLIGATOIRE pour sécurité (trichinose)'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 160,
            baseTimePerKg: 50,
            baseTimePerCm: 9,
            adjustmentFactor: 1.4,
            restingTime: 15
          },
          {
            method: 'braisage',
            cookingTemperature: 150,
            baseTimePerKg: 70,
            baseTimePerCm: 12,
            adjustmentFactor: 1.7,
            restingTime: 15
          }
        ]
      }
    ]
  },
  {
    category: 'gibier',
    name: 'Lièvre',
    nameEn: 'Hare',
    description: 'Petit gibier à chair ferme',
    cuts: [
      {
        name: 'Râble de lièvre',
        nameEn: 'Hare saddle',
        description: 'Morceau noble du lièvre',
        typicalWeight: { min: 0.3, max: 0.6, unit: 'kg' },
        typicalDimensions: { length: 20, width: 10, height: 5, unit: 'cm' },
        recommendations: 'Viande ferme, peut être légèrement rosé',
        temperatures: [
          {
            doneness: 'rosé',
            coreTemperature: 62,
            safetyTemperature: 67,
            description: 'Rose pâle, viande ferme'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 30,
            baseTimePerCm: 6,
            adjustmentFactor: 1.2,
            restingTime: 7
          }
        ]
      }
    ]
  },
  {
    category: 'gibier',
    name: 'Faisan',
    nameEn: 'Pheasant',
    description: 'Volaille de gibier',
    cuts: [
      {
        name: 'Faisan entier',
        nameEn: 'Whole pheasant',
        description: 'Volaille de gibier complète',
        typicalWeight: { min: 0.8, max: 1.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 15, height: 10, unit: 'cm' },
        recommendations: 'Comme volaille, 74°C obligatoire',
        temperatures: [
          {
            doneness: 'bien cuit',
            coreTemperature: 74,
            safetyTemperature: 74,
            description: 'Légèrement rosé - traiter comme volaille'
          }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 40,
            baseTimePerCm: 7,
            adjustmentFactor: 1.3,
            restingTime: 10
          },
          {
            method: 'rotissoire',
            cookingTemperature: 190,
            baseTimePerKg: 35,
            baseTimePerCm: 6,
            adjustmentFactor: 1.2,
            restingTime: 10
          }
        ]
      }
    ]
  }
];

module.exports = meatData;
