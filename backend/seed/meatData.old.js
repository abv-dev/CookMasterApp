/**
 * Base de données complète des viandes avec températures européennes/françaises
 * Normes de dégustation gustative idéales (pas de normes américaines)
 */

const meatData = [
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
          { doneness: 'bleu', coreTemperature: 45, description: 'Centre froid et rouge' },
          { doneness: 'saignant', coreTemperature: 50, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 55, description: 'Centre rosé et chaud' },
          { doneness: 'bien cuit', coreTemperature: 63, description: 'Uniformément cuit, légèrement rosé au centre' }
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
            restingTime: 10
          },
          {
            method: 'sous_vide',
            cookingTemperature: 55,
            baseTimePerKg: 90,
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
          { doneness: 'bleu', coreTemperature: 45, description: 'Centre froid et rouge' },
          { doneness: 'saignant', coreTemperature: 52, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 58, description: 'Centre rosé et chaud' },
          { doneness: 'bien cuit', coreTemperature: 65, description: 'Uniformément cuit' }
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
          },
          {
            method: 'barbecue_charbon',
            cookingTemperature: 210,
            baseTimePerKg: 16,
            baseTimePerCm: 3.2,
            adjustmentFactor: 0.93,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Faux-filet',
        nameEn: 'Sirloin',
        description: 'Morceau tendre et persillé',
        typicalWeight: { min: 0.2, max: 1.0, unit: 'kg' },
        typicalDimensions: { length: 20, width: 10, height: 3, unit: 'cm' },
        recommendations: 'Polyvalent, excellent grillé ou poêlé',
        temperatures: [
          { doneness: 'bleu', coreTemperature: 45, description: 'Centre froid et rouge' },
          { doneness: 'saignant', coreTemperature: 52, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 57, description: 'Centre rosé et chaud' },
          { doneness: 'bien cuit', coreTemperature: 65, description: 'Uniformément cuit' }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 190,
            baseTimePerKg: 17,
            baseTimePerCm: 3.5,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 220,
            baseTimePerKg: 15,
            baseTimePerCm: 3,
            adjustmentFactor: 0.92,
            restingTime: 5
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
          { doneness: 'saignant', coreTemperature: 52, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 58, description: 'Centre rosé et chaud' },
          { doneness: 'bien cuit', coreTemperature: 65, description: 'Uniformément cuit' }
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
            method: 'grill',
            cookingTemperature: 200,
            baseTimePerKg: 25,
            baseTimePerCm: 5,
            adjustmentFactor: 1.0,
            restingTime: 10
          },
          {
            method: 'barbecue_charbon',
            cookingTemperature: 180,
            baseTimePerKg: 28,
            baseTimePerCm: 5.5,
            adjustmentFactor: 1.1,
            restingTime: 12
          }
        ]
      },
      {
        name: 'Bavette',
        nameEn: 'Flank steak',
        description: 'Morceau fibreux et savoureux',
        typicalWeight: { min: 0.3, max: 0.8, unit: 'kg' },
        typicalDimensions: { length: 25, width: 10, height: 2, unit: 'cm' },
        recommendations: 'À couper dans le sens contraire des fibres après cuisson',
        temperatures: [
          { doneness: 'saignant', coreTemperature: 50, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 55, description: 'Centre rosé et chaud' }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 210,
            baseTimePerKg: 14,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'plancha',
            cookingTemperature: 230,
            baseTimePerKg: 12,
            baseTimePerCm: 2,
            adjustmentFactor: 0.85,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 240,
            baseTimePerKg: 13,
            baseTimePerCm: 2.2,
            adjustmentFactor: 0.87,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Rumsteck',
        nameEn: 'Rump steak',
        description: 'Morceau maigre et tendre',
        typicalWeight: { min: 0.3, max: 1.5, unit: 'kg' },
        typicalDimensions: { length: 20, width: 12, height: 4, unit: 'cm' },
        recommendations: 'Excellent grillé ou rôti',
        temperatures: [
          { doneness: 'saignant', coreTemperature: 50, description: 'Centre rouge et tiède' },
          { doneness: 'à point', coreTemperature: 56, description: 'Centre rosé et chaud' },
          { doneness: 'bien cuit', coreTemperature: 64, description: 'Uniformément cuit' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 190,
            baseTimePerKg: 25,
            baseTimePerCm: 5,
            adjustmentFactor: 1.0,
            restingTime: 10
          },
          {
            method: 'grill',
            cookingTemperature: 220,
            baseTimePerKg: 18,
            baseTimePerCm: 3.5,
            adjustmentFactor: 0.9,
            restingTime: 7
          }
        ]
      },
      {
        name: 'Paleron',
        nameEn: 'Chuck',
        description: 'Morceau gélatineux, idéal pour braisage',
        typicalWeight: { min: 0.5, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 15, width: 12, height: 8, unit: 'cm' },
        recommendations: 'Cuisson longue et lente pour attendrir',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 75, description: 'Tendre et fondant' },
          { doneness: 'très bien cuit', coreTemperature: 85, description: 'Très tendre, effiloché' }
        ],
        cookingMethods: [
          {
            method: 'cocotte',
            cookingTemperature: 160,
            baseTimePerKg: 120,
            baseTimePerCm: 15,
            adjustmentFactor: 1.5,
            restingTime: 10
          },
          {
            method: 'mijoteuse',
            cookingTemperature: 90,
            baseTimePerKg: 180,
            baseTimePerCm: 20,
            adjustmentFactor: 2.0,
            restingTime: 10
          },
          {
            method: 'braisage',
            cookingTemperature: 150,
            baseTimePerKg: 130,
            baseTimePerCm: 16,
            adjustmentFactor: 1.6,
            restingTime: 15
          }
        ]
      }
    ]
  },
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
        recommendations: 'Cuisson rapide, attention à ne pas dessécher',
        temperatures: [
          { doneness: 'rosé', coreTemperature: 63, description: 'Légèrement rosé au centre - cuisson moderne' },
          { doneness: 'à point', coreTemperature: 68, description: 'Juste cuit, juteux' },
          { doneness: 'bien cuit', coreTemperature: 72, description: 'Bien cuit traditionnel' }
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
            restingTime: 7
          },
          {
            method: 'sous_vide',
            cookingTemperature: 63,
            baseTimePerKg: 90,
            baseTimePerCm: 18,
            adjustmentFactor: 1.4,
            restingTime: 3
          }
        ]
      },
      {
        name: 'Côte de porc',
        nameEn: 'Pork chop',
        description: 'Côte avec os, juteuse et savoureuse',
        typicalWeight: { min: 0.2, max: 0.4, unit: 'kg' },
        typicalDimensions: { length: 15, width: 10, height: 2.5, unit: 'cm' },
        recommendations: 'Excellent grillé ou poêlé',
        temperatures: [
          { doneness: 'rosé', coreTemperature: 63, description: 'Légèrement rosé' },
          { doneness: 'à point', coreTemperature: 68, description: 'Juste cuit' },
          { doneness: 'bien cuit', coreTemperature: 73, description: 'Bien cuit' }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 190,
            baseTimePerKg: 22,
            baseTimePerCm: 4.5,
            adjustmentFactor: 1.0,
            restingTime: 5
          },
          {
            method: 'grill',
            cookingTemperature: 210,
            baseTimePerKg: 18,
            baseTimePerCm: 3.5,
            adjustmentFactor: 0.9,
            restingTime: 5
          },
          {
            method: 'plancha',
            cookingTemperature: 200,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 0.95,
            restingTime: 5
          }
        ]
      },
      {
        name: 'Rôti de porc',
        nameEn: 'Pork roast',
        description: 'Pièce à rôtir, échine ou longe',
        typicalWeight: { min: 0.8, max: 2.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 10, height: 10, unit: 'cm' },
        recommendations: 'Cuisson au four, peut être farci',
        temperatures: [
          { doneness: 'rosé', coreTemperature: 65, description: 'Légèrement rosé' },
          { doneness: 'à point', coreTemperature: 70, description: 'Juste cuit et juteux' },
          { doneness: 'bien cuit', coreTemperature: 75, description: 'Bien cuit traditionnel' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 35,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 15
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 170,
            baseTimePerKg: 32,
            baseTimePerCm: 6.5,
            adjustmentFactor: 1.15,
            restingTime: 15
          },
          {
            method: 'rotissoire',
            cookingTemperature: 180,
            baseTimePerKg: 33,
            baseTimePerCm: 6.8,
            adjustmentFactor: 1.18,
            restingTime: 12
          }
        ]
      },
      {
        name: 'Travers de porc',
        nameEn: 'Pork ribs',
        description: 'Côtes levées, idéales au barbecue',
        typicalWeight: { min: 0.6, max: 1.5, unit: 'kg' },
        typicalDimensions: { length: 30, width: 15, height: 3, unit: 'cm' },
        recommendations: 'Cuisson lente avec marinade ou sauce',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 75, description: 'Tendre, se détache de l\'os' },
          { doneness: 'très bien cuit', coreTemperature: 85, description: 'Très tendre, caramélisé' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 150,
            baseTimePerKg: 90,
            baseTimePerCm: 12,
            adjustmentFactor: 1.5,
            restingTime: 10
          },
          {
            method: 'barbecue_charbon',
            cookingTemperature: 140,
            baseTimePerKg: 100,
            baseTimePerCm: 13,
            adjustmentFactor: 1.6,
            restingTime: 10
          },
          {
            method: 'fumoir_chaud',
            cookingTemperature: 110,
            baseTimePerKg: 150,
            baseTimePerCm: 18,
            adjustmentFactor: 2.0,
            restingTime: 15
          }
        ]
      },
      {
        name: 'Épaule de porc',
        nameEn: 'Pork shoulder',
        description: 'Morceau pour cuisson longue, pulled pork',
        typicalWeight: { min: 1.5, max: 4.0, unit: 'kg' },
        typicalDimensions: { length: 25, width: 20, height: 15, unit: 'cm' },
        recommendations: 'Idéal pour cuisson lente, effiloché',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 85, description: 'Tendre et juteux' },
          { doneness: 'très bien cuit', coreTemperature: 93, description: 'Très tendre, s\'effiloche facilement' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 140,
            baseTimePerKg: 120,
            baseTimePerCm: 15,
            adjustmentFactor: 1.8,
            restingTime: 20
          },
          {
            method: 'mijoteuse',
            cookingTemperature: 90,
            baseTimePerKg: 180,
            baseTimePerCm: 20,
            adjustmentFactor: 2.2,
            restingTime: 15
          },
          {
            method: 'fumoir_chaud',
            cookingTemperature: 110,
            baseTimePerKg: 150,
            baseTimePerCm: 18,
            adjustmentFactor: 2.0,
            restingTime: 25
          }
        ]
      }
    ]
  },
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
        recommendations: 'Excellent rôti, peut être rosé',
        temperatures: [
          { doneness: 'saignant', coreTemperature: 55, description: 'Rosé et juteux' },
          { doneness: 'à point', coreTemperature: 60, description: 'Rosé léger' },
          { doneness: 'bien cuit', coreTemperature: 70, description: 'Bien cuit mais tendre' }
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
            restingTime: 12
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 170,
            baseTimePerKg: 27,
            baseTimePerCm: 5.5,
            adjustmentFactor: 1.1,
            restingTime: 15
          }
        ]
      },
      {
        name: 'Carré d\'agneau',
        nameEn: 'Rack of lamb',
        description: 'Côtes premières, très tendres',
        typicalWeight: { min: 0.4, max: 0.8, unit: 'kg' },
        typicalDimensions: { length: 20, width: 8, height: 5, unit: 'cm' },
        recommendations: 'Pièce raffinée, cuisson courte',
        temperatures: [
          { doneness: 'saignant', coreTemperature: 54, description: 'Rosé vif' },
          { doneness: 'à point', coreTemperature: 58, description: 'Rosé tendre' },
          { doneness: 'bien cuit', coreTemperature: 65, description: 'Cuit mais juteux' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 200,
            baseTimePerKg: 20,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 8
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
          }
        ]
      },
      {
        name: 'Épaule d\'agneau',
        nameEn: 'Lamb shoulder',
        description: 'Morceau savoureux pour cuisson lente',
        typicalWeight: { min: 1.0, max: 2.0, unit: 'kg' },
        typicalDimensions: { length: 25, width: 15, height: 10, unit: 'cm' },
        recommendations: 'Idéal pour méchoui ou confit',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 75, description: 'Tendre et fondant' },
          { doneness: 'très bien cuit', coreTemperature: 85, description: 'Très tendre, effiloché' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 160,
            baseTimePerKg: 90,
            baseTimePerCm: 12,
            adjustmentFactor: 1.5,
            restingTime: 15
          },
          {
            method: 'braisage',
            cookingTemperature: 150,
            baseTimePerKg: 100,
            baseTimePerCm: 13,
            adjustmentFactor: 1.6,
            restingTime: 20
          },
          {
            method: 'cocotte',
            cookingTemperature: 160,
            baseTimePerKg: 95,
            baseTimePerCm: 12.5,
            adjustmentFactor: 1.55,
            restingTime: 18
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
          { doneness: 'saignant', coreTemperature: 54, description: 'Rosé vif' },
          { doneness: 'à point', coreTemperature: 58, description: 'Rosé' },
          { doneness: 'bien cuit', coreTemperature: 65, description: 'Cuit' }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 200,
            baseTimePerKg: 12,
            baseTimePerCm: 2.5,
            adjustmentFactor: 0.8,
            restingTime: 3
          },
          {
            method: 'grill',
            cookingTemperature: 230,
            baseTimePerKg: 10,
            baseTimePerCm: 2,
            adjustmentFactor: 0.75,
            restingTime: 3
          },
          {
            method: 'plancha',
            cookingTemperature: 220,
            baseTimePerKg: 11,
            baseTimePerCm: 2.2,
            adjustmentFactor: 0.77,
            restingTime: 3
          }
        ]
      }
    ]
  },
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
        recommendations: 'Farci ou nature, bien assaisonné',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 74, description: 'Jus clair, chair blanche' }
        ],
        cookingMethods: [
          {
            method: 'four_traditionnel',
            cookingTemperature: 180,
            baseTimePerKg: 45,
            baseTimePerCm: 8,
            adjustmentFactor: 1.3,
            restingTime: 10
          },
          {
            method: 'rotissoire',
            cookingTemperature: 190,
            baseTimePerKg: 40,
            baseTimePerCm: 7,
            adjustmentFactor: 1.2,
            restingTime: 10
          },
          {
            method: 'four_chaleur_tournante',
            cookingTemperature: 170,
            baseTimePerKg: 42,
            baseTimePerCm: 7.5,
            adjustmentFactor: 1.25,
            restingTime: 10
          }
        ]
      },
      {
        name: 'Blanc de poulet',
        nameEn: 'Chicken breast',
        description: 'Filet de poulet, maigre',
        typicalWeight: { min: 0.15, max: 0.3, unit: 'kg' },
        typicalDimensions: { length: 15, width: 8, height: 2.5, unit: 'cm' },
        recommendations: 'Attention à ne pas dessécher',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 74, description: 'Jus clair, juteux' }
        ],
        cookingMethods: [
          {
            method: 'poele',
            cookingTemperature: 170,
            baseTimePerKg: 18,
            baseTimePerCm: 4,
            adjustmentFactor: 1.0,
            restingTime: 3
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
            restingTime: 3
          },
          {
            method: 'sous_vide',
            cookingTemperature: 64,
            baseTimePerKg: 75,
            baseTimePerCm: 15,
            adjustmentFactor: 1.3,
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
        recommendations: 'Plus difficile à dessécher que le blanc',
        temperatures: [
          { doneness: 'bien cuit', coreTemperature: 74, description: 'Tendre, jus clair' }
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
  }
];

module.exports = meatData;
