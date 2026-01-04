/**
 * Base de données complète des viandes - VERSION FINALE NETTOYÉE
 * Source: Tableau des Températures de Cuisson - Guide Complet
 * + Guide des Morceaux de Viande (PDF)
 * Températures gastronomiques ET normes de sécurité UE (Règlement 852/2004)
 *
 * STRUCTURE:
 * - Boeuf, Porc, Agneau, Veau: avec subcategories { classique, boucher }
 * - Volaille: entrées séparées (Poulet, Canard, Dinde)
 * - Gibier: entrées par espèce
 *
 * Classique = Facile à trouver (boucherie, grande surface)
 * Boucher = Difficile à trouver (à commander)
 */

const meatData = [
  {
    "category": "boeuf",
    "name": "Boeuf",
    "nameEn": "Beef",
    "description": "Tous les morceaux de bœuf, disponibles en boucherie et grande surface",
    "subcategories": {
      "classique": {
        "name": "Morceaux classiques",
        "description": "Morceaux courants disponibles en boucherie et grande surface",
        "cuts": [
          {
            "name": "Filet",
            "nameEn": "Tenderloin",
            "description": "Morceau le plus tendre, maigre et fondant",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Idéal pour tournedos, chateaubriand. Cuisson rapide recommandée.",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 40,
                "safetyTemperature": null,
                "description": "Rouge froid au centre (non recommandé pour sécurité)"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 44,
                "safetyTemperature": 52,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 52,
                "safetyTemperature": 57,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 60,
                "safetyTemperature": 67,
                "description": "Légèrement rosé"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Pas de rose"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Entrecôte",
            "nameEn": "Ribeye",
            "description": "Morceau persillé et savoureux, avec os ou sans",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Excellente au grill ou à la poêle. Le persillage apporte saveur et tendreté.",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 40,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 44,
                "safetyTemperature": 52,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 52,
                "safetyTemperature": 57,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 60,
                "safetyTemperature": 67,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 16,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 16,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 16,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 22,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 3.8,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Viande hachée de bœuf",
            "nameEn": "Ground beef",
            "description": "Viande hachée pour steaks hachés, bolognaise, etc.",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 12,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "OBLIGATOIRE: Cuire à 71°C minimum pour la sécurité",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 71,
                "safetyTemperature": 71,
                "description": "Pas de rose - OBLIGATOIRE pour sécurité alimentaire"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 25,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "air_fryer",
                "temperatureRange": {
                  "min": 140,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 22,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "wok",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 2
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 19,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Côte de bœuf",
            "nameEn": "Rib steak",
            "description": "Grande pièce avec os, généreuse et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 15,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Pièce de choix pour partager, excellente au four ou au grill",
            "temperatures": [
              {
                "doneness": "saignant",
                "coreTemperature": 44,
                "safetyTemperature": 52,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 52,
                "safetyTemperature": 57,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 60,
                "safetyTemperature": 67,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 30,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 25,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 27,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 24,
                "baseTimePerCm": 5,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              }
            ]
          },
          {
            "name": "Brisket (poitrine)",
            "nameEn": "Brisket",
            "description": "Morceau pour cuisson BBQ low & slow",
            "availability": "classique",
            "typicalWeight": {
              "min": 2,
              "max": 5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 40,
              "width": 25,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue à basse température, idéal fumé",
            "temperatures": [
              {
                "doneness": "très bien cuit",
                "coreTemperature": 90,
                "safetyTemperature": 90,
                "description": "Très tendre, effiloché"
              }
            ],
            "cookingMethods": [
              {
                "method": "fumoir_chaud",
                "temperatureRange": {
                  "min": 90,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 30,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 30
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 280,
                "baseTimePerCm": 35,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 25
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 230,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.4,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 30
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 230,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.4,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 30
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 220,
                "baseTimePerCm": 27,
                "adjustmentFactor": 2.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 210,
                "baseTimePerCm": 26,
                "adjustmentFactor": 2.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "barbecue_basse_temp",
                "temperatureRange": {
                  "min": 80,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              }
            ]
          },
          {
            "name": "Faux-filet",
            "nameEn": "Sirloin steak",
            "description": "Morceau tendre et persillé situé le long des vertèbres dorsales",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 10,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Excellent grillé ou poêlé, le persillage garantit tendreté et saveur",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Rumsteck",
            "nameEn": "Rump steak",
            "description": "Morceau maigre situé au-dessus de la cuisse, tendre et savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Idéal pour steaks et rôtis, cuisson rapide à moyenne",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Bavette d'aloyau",
            "nameEn": "Flank steak",
            "description": "Muscle abdominal long et plat, très goûteux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 10,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Parfaite pour grillades, à cuire saignant ou à point",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Bavette de flanchet",
            "nameEn": "Skirt steak",
            "description": "Muscle du flanc, persillé et savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 8,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Excellente marinée et grillée, couper dans le sens perpendiculaire aux fibres",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Onglet",
            "nameEn": "Hanger steak",
            "description": "Muscle du diaphragme, très tendre et goûteux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 8,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide et saignante recommandée pour préserver la tendreté",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Hampe",
            "nameEn": "Skirt steak",
            "description": "Muscle du diaphragme, proche de l'onglet, très savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.9,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 22,
              "width": 8,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à feu vif, idéale pour la plancha",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Paleron",
            "nameEn": "Chuck",
            "description": "Morceau de l'épaule, gélatineux et savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Parfait pour pot-au-feu, braisé ou en bourguignon",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Macreuse à pot-au-feu",
            "nameEn": "Chuck stew meat",
            "description": "Partie de l'épaule, gélatineuse et fondante en cuisson longue",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 12,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Idéale pour pot-au-feu, daube et plats mijotés",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Macreuse à bifteck",
            "nameEn": "Chuck steak",
            "description": "Partie plus tendre de la macreuse, persillée",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Peut se griller rapidement ou être braisée",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Gîte",
            "nameEn": "Shin",
            "description": "Jarret arrière, très gélatineux et savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 12,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue et douce pour pot-au-feu ou osso buco",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Plat de côtes",
            "nameEn": "Short ribs",
            "description": "Partie basse des côtes, gélatineuse et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 1.2,
              "max": 3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Excellent braisé ou en pot-au-feu, cuisson longue recommandée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Collier",
            "nameEn": "Neck",
            "description": "Morceau du cou, gélatineux et très savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Parfait pour daubes, carbonades et cuissons mijotées",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Jarret",
            "nameEn": "Shin shank",
            "description": "Partie inférieure de la patte, très gélatineuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Idéal pour pot-au-feu, osso buco et fonds de sauce",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Joue de bœuf",
            "nameEn": "Beef cheek",
            "description": "Muscle de la joue, fondant après cuisson longue",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Braisée lentement, devient extrêmement tendre et savoureuse",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Queue de bœuf",
            "nameEn": "Oxtail",
            "description": "Très gélatineuse, riche en collagène",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 5,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue pour soupes, ragoûts et plats mijotés",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Tende de tranche",
            "nameEn": "Eye round",
            "description": "Partie arrière maigre et tendre de la cuisse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rosbif, carpaccio ou cuisson rapide",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Rond de tranche",
            "nameEn": "Top round",
            "description": "Morceau maigre de la cuisse, légèrement ferme",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rosbif, fondue bourguignonne ou braisé",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Jumeau à pot-au-feu",
            "nameEn": "Chuck tender roast",
            "description": "Partie de l'épaule, gélatineuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Parfait pour pot-au-feu et cuissons mijotées",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Flanchet",
            "nameEn": "Flank",
            "description": "Partie ventrale maigre et gélatineuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 15,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Idéal pour pot-au-feu, bouillons et cuissons longues",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Foie",
            "nameEn": "Liver",
            "description": "Abat tendre et savoureux, riche en fer",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle, ne pas trop cuire",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Langue",
            "nameEn": "Tongue",
            "description": "Muscle très tendre après cuisson longue",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue à l'eau, puis pelage et préparation",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Os à moelle",
            "nameEn": "Marrow bones",
            "description": "Os contenant la moelle savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 8,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti au four ou utilisé pour fonds et bouillons",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          }
        ]
      },
      "boucher": {
        "name": "Pièces du boucher",
        "description": "Morceaux rares ou spéciaux, à commander chez le boucher",
        "cuts": [
          {
            "name": "Poire",
            "nameEn": "Pear cut",
            "description": "Petit muscle tendre de la cuisse, pièce rare du boucher",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Grillé ou poêlé rapidement, cuisson saignante recommandée",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Merlan",
            "nameEn": "Whiting cut",
            "description": "Petit muscle allongé de la cuisse, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 5,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Pièce délicate, cuisson rapide à la poêle ou plancha",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Araignée",
            "nameEn": "Spider steak",
            "description": "Muscle en forme d'araignée dans la cuisse, très persillé",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Pièce très prisée, grillée ou poêlée saignante",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Dessus de palette",
            "nameEn": "Top blade",
            "description": "Partie supérieure de l'épaule, tendre et persillé",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Rôti ou grillé, nécessite un bon boucher pour le préparer",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Surpris (boule de macreuse)",
            "nameEn": "Chuck eye",
            "description": "Petite partie très tendre de la macreuse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Pièce rare et tendre, excellente grillée",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Aiguillette baronne",
            "nameEn": "Baron needle",
            "description": "Longue pièce fine de la cuisse, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.7,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 5,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, parfaite pour steaks fins",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Aiguillette de rumsteck",
            "nameEn": "Rump needle",
            "description": "Fine languette au-dessus du rumsteck",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 6,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Très tendre, cuisson rapide recommandée",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Tendron",
            "nameEn": "Rib tips",
            "description": "Extrémités cartilagineuses des côtes",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Braisé lentement, devient fondant",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Jumeau à bifteck",
            "nameEn": "Chuck steak",
            "description": "Partie tendre du jumeau, peut se griller",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.4,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 10,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Grillé ou poêlé, demande une bonne préparation",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Mouvant",
            "nameEn": "Moving muscle",
            "description": "Muscle de l'épaule, gélatineux",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue en daube ou pot-au-feu",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Tranche grasse",
            "nameEn": "Fat slice",
            "description": "Partie de la cuisse avec du gras infiltré",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Braisée ou en pot-au-feu",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Rond de gîte",
            "nameEn": "Shin round",
            "description": "Partie centrale du jarret, très gélatineuse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 12,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue pour osso buco ou pot-au-feu",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Gîte à la noix",
            "nameEn": "Top shin",
            "description": "Partie supérieure du gîte, plus tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Pot-au-feu ou braisé",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Rognons",
            "nameEn": "Kidneys",
            "description": "Abat délicat au goût prononcé",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, ne pas trop cuire pour éviter la dureté",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Cœur",
            "nameEn": "Heart",
            "description": "Muscle dense et maigre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 12,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue pour attendrir, ou tranché finement et grillé",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Ris de bœuf",
            "nameEn": "Beef sweetbreads",
            "description": "Thymus, abat délicat et raffiné (rare)",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Préparation délicate, poêlé ou braisé",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Cervelle",
            "nameEn": "Brain",
            "description": "Abat très délicat, texture crémeuse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 10,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Pochée puis poêlée, préparation délicate",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 55,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Tripes (gras-double, bonnet)",
            "nameEn": "Tripe",
            "description": "Estomac, nécessite cuisson très longue",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue (plusieurs heures) pour devenir tendre",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Feuillet",
            "nameEn": "Omasum",
            "description": "Troisième poche de l'estomac",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue comme les tripes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Caillette",
            "nameEn": "Abomasum",
            "description": "Quatrième poche de l'estomac",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue, utilisée pour tripes à la mode de Caen",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          }
        ]
      }
    }
  },
  {
    "category": "porc",
    "name": "Porc",
    "nameEn": "Pork",
    "description": "Tous les morceaux de porc, disponibles en boucherie et grande surface",
    "subcategories": {
      "classique": {
        "name": "Morceaux classiques",
        "description": "Morceaux courants disponibles en boucherie et grande surface",
        "cuts": [
          {
            "name": "Filet mignon",
            "nameEn": "Pork tenderloin",
            "description": "Morceau très tendre et maigre",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 6,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, attention à ne pas dessécher. Peut être rosé selon normes UE.",
            "temperatures": [
              {
                "doneness": "rosé",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rose pâle tendre (tenir 3 min à 63°C OU 71°C instantané)"
              },
              {
                "doneness": "à point",
                "coreTemperature": 64,
                "safetyTemperature": 71,
                "description": "Juteux, légèrement rosé"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 71,
                "safetyTemperature": 71,
                "description": "Bien cuit traditionnel"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 25,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 17,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 19,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 19,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 23,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 22,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 8
              },
              {
                "method": "air_fryer",
                "temperatureRange": {
                  "min": 140,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 21,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              }
            ]
          },
          {
            "name": "Côtelettes de porc",
            "nameEn": "Pork chops",
            "description": "Côtes avec os, juteuses et savoureuses",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.35,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 2.5,
              "unit": "cm"
            },
            "recommendations": "Excellent grillé ou poêlé, peut être à peine rosé",
            "temperatures": [
              {
                "doneness": "rosé",
                "coreTemperature": 62,
                "safetyTemperature": 63,
                "description": "À peine rosé"
              },
              {
                "doneness": "à point",
                "coreTemperature": 67,
                "safetyTemperature": 71,
                "description": "Juste cuit"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 71,
                "safetyTemperature": 71,
                "description": "Bien cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 22,
                "baseTimePerCm": 4.5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 26,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "air_fryer",
                "temperatureRange": {
                  "min": 140,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 24,
                "baseTimePerCm": 5,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Rôti de porc (échine/longe)",
            "nameEn": "Pork roast",
            "description": "Pièce à rôtir, échine ou longe",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 10,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Cuisson au four, peut être farci",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 64,
                "safetyTemperature": 71,
                "description": "Juteux, moelleux"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 71,
                "safetyTemperature": 71,
                "description": "Bien cuit traditionnel"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 32,
                "baseTimePerCm": 6.5,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 30,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 8
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 9,
                "adjustmentFactor": 1.4,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "four_a_pain",
                "temperatureRange": {
                  "min": 100,
                  "max": 250,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              }
            ]
          },
          {
            "name": "Travers de porc (ribs)",
            "nameEn": "Pork ribs",
            "description": "Côtes levées, idéales au barbecue",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 15,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson lente avec marinade ou sauce BBQ",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 89,
                "safetyTemperature": 71,
                "description": "Tendre, se détache de l'os"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 20,
                "adjustmentFactor": 2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 22,
                "adjustmentFactor": 2.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "fumoir_chaud",
                "temperatureRange": {
                  "min": 90,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 22,
                "adjustmentFactor": 2.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 260,
                "baseTimePerCm": 30,
                "adjustmentFactor": 2.7,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 23,
                "adjustmentFactor": 2.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 170,
                "baseTimePerCm": 19,
                "adjustmentFactor": 1.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_basse_temp",
                "temperatureRange": {
                  "min": 80,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              }
            ]
          },
          {
            "name": "Épaule de porc (pulled pork)",
            "nameEn": "Pork shoulder",
            "description": "Morceau pour cuisson longue, pulled pork",
            "availability": "classique",
            "typicalWeight": {
              "min": 1.5,
              "max": 4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 20,
              "height": 15,
              "unit": "cm"
            },
            "recommendations": "Idéal pour cuisson lente, effiloché",
            "temperatures": [
              {
                "doneness": "très bien cuit",
                "coreTemperature": 94,
                "safetyTemperature": 71,
                "description": "Très tendre, s'effiloche facilement"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 300,
                "baseTimePerCm": 30,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "fumoir_chaud",
                "temperatureRange": {
                  "min": 90,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 280,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 25
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 270,
                "baseTimePerCm": 27,
                "adjustmentFactor": 2.7,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 25
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 270,
                "baseTimePerCm": 27,
                "adjustmentFactor": 2.7,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 25
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 260,
                "baseTimePerCm": 26,
                "adjustmentFactor": 2.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 250,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 230,
                "baseTimePerCm": 24,
                "adjustmentFactor": 2.4,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 30,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "barbecue_basse_temp",
                "temperatureRange": {
                  "min": 80,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              }
            ]
          },
          {
            "name": "Échine",
            "nameEn": "Pork collar",
            "description": "Partie du cou, persillée et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôtie ou grillée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Carré de porc",
            "nameEn": "Pork rack",
            "description": "Ensemble de côtes",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rôti au four",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Escalopes",
            "nameEn": "Pork escalopes",
            "description": "Tranches fines dans la longe",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 8,
              "height": 1,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Palette",
            "nameEn": "Pork shoulder blade",
            "description": "Partie de l'épaule, gélatineuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rôtie ou braisée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Rouelle de jambon",
            "nameEn": "Ham steak",
            "description": "Tranche épaisse du jambon",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 15,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Poêlée ou braisée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Poitrine (lard frais)",
            "nameEn": "Pork belly",
            "description": "Partie ventrale grasse et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 15,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Confite, braisée ou laquée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Jambonneau (jarret)",
            "nameEn": "Pork hock",
            "description": "Jarret, très gélatineux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Braisé longuement ou choucroute",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Joue de porc",
            "nameEn": "Pork jowl",
            "description": "Muscle de la joue, très fondant",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Confite ou braisée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Pied de porc",
            "nameEn": "Pork trotter",
            "description": "Très gélatineux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue, pané ou farci",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Couennes",
            "nameEn": "Pork rind",
            "description": "Peau du porc",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 0.5,
              "unit": "cm"
            },
            "recommendations": "Pour grattons, bouillon ou gélatine",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Foie",
            "nameEn": "Pork liver",
            "description": "Abat au goût prononcé",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Rognons",
            "nameEn": "Pork kidneys",
            "description": "Abat délicat",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 8,
              "width": 6,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, dégorger avant",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          }
        ]
      },
      "boucher": {
        "name": "Pièces du boucher",
        "description": "Morceaux rares ou spéciaux, à commander chez le boucher",
        "cuts": [
          {
            "name": "Pointe de filet",
            "nameEn": "Pork tenderloin tip",
            "description": "Extrémité du filet, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 5,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Médaillons poêlés",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Quasi",
            "nameEn": "Pork rump",
            "description": "Partie haute de la cuisse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti ou en escalopes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Noix de jambon",
            "nameEn": "Ham cushion",
            "description": "Partie noble du jambon",
            "availability": "boucher",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rôti ou en tranches",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Plat de côtes",
            "nameEn": "Pork short ribs",
            "description": "Partie basse des côtes",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Braisé ou pour choucroute",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Collier",
            "nameEn": "Pork neck",
            "description": "Morceau du cou, gélatineux",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 12,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Braisé ou pour rillettes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Gorge",
            "nameEn": "Pork throat",
            "description": "Partie avant du cou, grasse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Pour terrines et pâtés",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Queue de porc",
            "nameEn": "Pig tail",
            "description": "Très gélatineuse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 3,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Grillée ou en ragoût",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Oreilles",
            "nameEn": "Pig ears",
            "description": "Cartilagineuses",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 8,
              "height": 1,
              "unit": "cm"
            },
            "recommendations": "Grillées ou en salade",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Groin (museau)",
            "nameEn": "Pig snout",
            "description": "Pour fromage de tête",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue pour terrine",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Tête (fromage de tête)",
            "nameEn": "Pig head",
            "description": "Pour préparations charcutières",
            "availability": "boucher",
            "typicalWeight": {
              "min": 3,
              "max": 5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 20,
              "height": 20,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue pour terrine",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Bardière (gras du dos)",
            "nameEn": "Pork back fat",
            "description": "Couche de gras dorsal",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 20,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Pour barder ou saindoux",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Panne (gras des rognons)",
            "nameEn": "Leaf lard",
            "description": "Gras interne, le meilleur",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Pour saindoux de qualité",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Secreto (pièce ibérique)",
            "nameEn": "Secreto",
            "description": "Muscle caché entre épaule et lard",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Pièce rare, grillée rapidement",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Pluma (pièce ibérique)",
            "nameEn": "Pluma",
            "description": "Muscle en forme de plume, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 6,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Grillée saignante",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Presa (pièce ibérique)",
            "nameEn": "Presa",
            "description": "Haut de l'échine, très persillée",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.4,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Grillée ou rôtie",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Cœur",
            "nameEn": "Pork heart",
            "description": "Muscle dense",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Braisé ou en brochettes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Langue",
            "nameEn": "Pork tongue",
            "description": "Muscle tendre après cuisson",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 6,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Pochée puis pelée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Cervelle",
            "nameEn": "Pork brain",
            "description": "Abat délicat",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.25,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Pochée puis poêlée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Rate",
            "nameEn": "Pork spleen",
            "description": "Abat au goût prononcé",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 8,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Poêlée rapidement",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Intestins (andouillettes)",
            "nameEn": "Pork intestines",
            "description": "Pour charcuterie",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 200,
              "width": 3,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Grillés en andouillette",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Crépine",
            "nameEn": "Caul fat",
            "description": "Membrane grasse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 40,
              "width": 30,
              "height": 0.1,
              "unit": "cm"
            },
            "recommendations": "Pour envelopper pâtés et crépinettes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Rosé au centre, juteux"
              },
              {
                "doneness": "très bien cuit",
                "coreTemperature": 75,
                "safetyTemperature": 75,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          }
        ]
      }
    }
  },
  {
    "category": "agneau",
    "name": "Agneau",
    "nameEn": "Lamb",
    "description": "Tous les morceaux d'agneau, disponibles en boucherie et grande surface",
    "subcategories": {
      "classique": {
        "name": "Morceaux classiques",
        "description": "Morceaux courants disponibles en boucherie et grande surface",
        "cuts": [
          {
            "name": "Gigot d'agneau",
            "nameEn": "Leg of lamb",
            "description": "Pièce de choix pour rôtir",
            "availability": "classique",
            "typicalWeight": {
              "min": 1.5,
              "max": 3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 35,
              "width": 12,
              "height": 12,
              "unit": "cm"
            },
            "recommendations": "Excellent rôti, peut être rosé. Idéal pour grandes tablées.",
            "temperatures": [
              {
                "doneness": "saignant",
                "coreTemperature": 45,
                "safetyTemperature": 52,
                "description": "Rouge vif"
              },
              {
                "doneness": "rosé",
                "coreTemperature": 50,
                "safetyTemperature": 57,
                "description": "Rose tendre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 57,
                "safetyTemperature": 62,
                "description": "Rose pâle uniforme"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 67,
                "safetyTemperature": 71,
                "description": "Pas de rose"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 30,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 28,
                "baseTimePerCm": 5.5,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 30,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 90,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 80,
                "baseTimePerCm": 11,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              },
              {
                "method": "barbecue_basse_temp",
                "temperatureRange": {
                  "min": 80,
                  "max": 150,
                  "recommended": 110,
                  "unit": "C"
                },
                "baseTimePerKg": 200,
                "baseTimePerCm": 28,
                "adjustmentFactor": 2.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 20
              },
              {
                "method": "four_a_pain",
                "temperatureRange": {
                  "min": 100,
                  "max": 250,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              }
            ]
          },
          {
            "name": "Carré d'agneau",
            "nameEn": "Rack of lamb",
            "description": "Côtes premières, très tendres",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.4,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 8,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Pièce raffinée, cuisson courte recommandée",
            "temperatures": [
              {
                "doneness": "saignant",
                "coreTemperature": 45,
                "safetyTemperature": 52,
                "description": "Rouge vif"
              },
              {
                "doneness": "rosé",
                "coreTemperature": 50,
                "safetyTemperature": 57,
                "description": "Rose tendre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 57,
                "safetyTemperature": 62,
                "description": "Rose pâle"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 2.8,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 90,
                "baseTimePerCm": 15,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 2.8,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 16,
                "baseTimePerCm": 3.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 16,
                "baseTimePerCm": 3.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 19,
                "baseTimePerCm": 3.8,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Épaule d'agneau",
            "nameEn": "Lamb shoulder",
            "description": "Morceau savoureux pour cuisson lente",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Idéal pour méchoui ou confit, cuisson longue",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 67,
                "safetyTemperature": 71,
                "description": "Pas de rose"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 90,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 100,
                "baseTimePerCm": 13,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 95,
                "baseTimePerCm": 12.5,
                "adjustmentFactor": 1.55,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 20,
                "adjustmentFactor": 2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 85,
                "baseTimePerCm": 11,
                "adjustmentFactor": 1.45,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 240,
                "baseTimePerCm": 30,
                "adjustmentFactor": 2.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 8
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 100,
                "baseTimePerCm": 13,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 100,
                "baseTimePerCm": 13,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 85,
                "baseTimePerCm": 11.5,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              }
            ]
          },
          {
            "name": "Côtelettes d'agneau",
            "nameEn": "Lamb chops",
            "description": "Petites côtes individuelles",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.08,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 6,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, excellent grillées",
            "temperatures": [
              {
                "doneness": "saignant",
                "coreTemperature": 45,
                "safetyTemperature": 52,
                "description": "Rouge vif"
              },
              {
                "doneness": "rosé",
                "coreTemperature": 50,
                "safetyTemperature": 57,
                "description": "Rose tendre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 57,
                "safetyTemperature": 62,
                "description": "Rose pâle"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 10,
                "baseTimePerCm": 2,
                "adjustmentFactor": 0.75,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.75,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "air_fryer",
                "temperatureRange": {
                  "min": 140,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3.2,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Côtes d'agneau",
            "nameEn": "Lamb chops",
            "description": "Côtes individuelles, très tendres",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.08,
              "max": 0.12,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 6,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Grillées ou poêlées rapidement",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Souris d'agneau",
            "nameEn": "Lamb shank",
            "description": "Partie basse du gigot, très tendre braisée",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Braisée longuement, devient fondante",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Collier",
            "nameEn": "Lamb neck",
            "description": "Morceau du cou, gélatineux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.6,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Idéal pour navarin ou tajine",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Sauté d'agneau",
            "nameEn": "Lamb stew meat",
            "description": "Morceaux de l'épaule pour ragoût",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.5,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 5,
              "width": 5,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Navarin, tajine, curry",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Poitrine",
            "nameEn": "Lamb breast",
            "description": "Partie ventrale, grasse et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Farcie ou braisée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Foie",
            "nameEn": "Lamb liver",
            "description": "Abat tendre au goût prononcé",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 10,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, reste rosé",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Rognons",
            "nameEn": "Lamb kidneys",
            "description": "Abat délicat",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.06,
              "max": 0.12,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 6,
              "width": 4,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          }
        ]
      },
      "boucher": {
        "name": "Pièces du boucher",
        "description": "Morceaux rares ou spéciaux, à commander chez le boucher",
        "cuts": [
          {
            "name": "Filet",
            "nameEn": "Lamb tenderloin",
            "description": "Petit filet très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 4,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, rosé",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Selle d'agneau",
            "nameEn": "Saddle of lamb",
            "description": "Double filet avec os, pièce d'exception",
            "availability": "boucher",
            "typicalWeight": {
              "min": 1.5,
              "max": 2.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 35,
              "width": 20,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rôtie entière, présentation spectaculaire",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Baron (selle + gigots)",
            "nameEn": "Baron of lamb",
            "description": "Arrière complet, pièce exceptionnelle",
            "availability": "boucher",
            "typicalWeight": {
              "min": 4,
              "max": 6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 50,
              "width": 30,
              "height": 20,
              "unit": "cm"
            },
            "recommendations": "Rôti pour grandes occasions",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Haut de côtes",
            "nameEn": "Lamb chuck",
            "description": "Partie supérieure des côtes",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Braisé ou en navarin",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Cœur",
            "nameEn": "Lamb heart",
            "description": "Petit muscle dense",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.15,
              "max": 0.25,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 8,
              "width": 6,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Braisé ou grillé en brochettes",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Langue",
            "nameEn": "Lamb tongue",
            "description": "Petite langue tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 8,
              "width": 4,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Pochée puis pelée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Cervelle",
            "nameEn": "Lamb brain",
            "description": "Abat très délicat",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 6,
              "width": 5,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Pochée puis poêlée",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Pieds",
            "nameEn": "Lamb feet",
            "description": "Très gélatineux",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 5,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue, pied et paquets",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Ris d'agneau",
            "nameEn": "Lamb sweetbreads",
            "description": "Thymus, abat rare et délicat",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 6,
              "width": 5,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Poché puis poêlé",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Tripes",
            "nameEn": "Lamb tripe",
            "description": "Estomac, pour pieds et paquets",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 1,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          }
        ]
      }
    }
  },
  {
    "category": "veau",
    "name": "Veau",
    "nameEn": "Veal",
    "description": "Tous les morceaux de veau, disponibles en boucherie et grande surface",
    "subcategories": {
      "classique": {
        "name": "Morceaux classiques",
        "description": "Morceaux courants disponibles en boucherie et grande surface",
        "cuts": [
          {
            "name": "Escalope de veau",
            "nameEn": "Veal escalope",
            "description": "Fine tranche de veau, très tendre",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 1,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle, panée ou nature",
            "temperatures": [
              {
                "doneness": "rosé",
                "coreTemperature": 54,
                "safetyTemperature": 62,
                "description": "Rose délicat"
              },
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 67,
                "description": "Légèrement rosé"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 67,
                "safetyTemperature": 71,
                "description": "Blanc"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 10,
                "baseTimePerCm": 2,
                "adjustmentFactor": 0.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 9,
                "baseTimePerCm": 1.8,
                "adjustmentFactor": 0.75,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 9,
                "baseTimePerCm": 1.8,
                "adjustmentFactor": 0.75,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "air_fryer",
                "temperatureRange": {
                  "min": 140,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.85,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "wok",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 8,
                "baseTimePerCm": 1.5,
                "adjustmentFactor": 0.7,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 12,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 4
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 90,
                "baseTimePerCm": 15,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Rôti de veau",
            "nameEn": "Veal roast",
            "description": "Rôti tendre et savoureux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 10,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Cuisson douce au four pour préserver la tendreté",
            "temperatures": [
              {
                "doneness": "rosé",
                "coreTemperature": 58,
                "safetyTemperature": 67,
                "description": "Rose pâle"
              },
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 67,
                "description": "Légèrement rosé"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 67,
                "safetyTemperature": 71,
                "description": "Blanc"
              }
            ],
            "cookingMethods": [
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 35,
                "baseTimePerCm": 7,
                "adjustmentFactor": 1.2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 32,
                "baseTimePerCm": 6.5,
                "adjustmentFactor": 1.15,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "rotissoire",
                "temperatureRange": {
                  "min": 160,
                  "max": 200,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 30,
                "baseTimePerCm": 6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 52,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 2,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 8
              },
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 45,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 9,
                "adjustmentFactor": 1.35,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 180,
                "baseTimePerCm": 25,
                "adjustmentFactor": 3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 15
              }
            ]
          },
          {
            "name": "Côte de veau",
            "nameEn": "Veal chop",
            "description": "Côte avec os, tendre et savoureuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Excellente poêlée ou grillée",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Filet",
            "nameEn": "Veal tenderloin",
            "description": "Morceau le plus tendre du veau, très délicat",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 6,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide et douce, ne pas trop cuire",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Carré de veau",
            "nameEn": "Veal rack",
            "description": "Ensemble de côtes, pièce noble",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 12,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti au four, présentation élégante",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Noix",
            "nameEn": "Veal topside",
            "description": "Morceau de la cuisse, tendre et maigre",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Rôti ou en escalopes",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Quasi",
            "nameEn": "Veal rump",
            "description": "Partie haute de la cuisse, très tendre",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti ou braisé",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Épaule",
            "nameEn": "Veal shoulder",
            "description": "Morceau gélatineux, idéal braisé",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 15,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Braisée ou en blanquette",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Collier",
            "nameEn": "Veal neck",
            "description": "Morceau du cou, gélatineux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.8,
              "max": 1.5,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 12,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Idéal pour blanquette ou ragoût",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Tendron",
            "nameEn": "Veal breast",
            "description": "Extrémités des côtes, cartilagineux",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 10,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Braisé lentement",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Poitrine",
            "nameEn": "Veal brisket",
            "description": "Partie ventrale, gélatineuse",
            "availability": "classique",
            "typicalWeight": {
              "min": 1,
              "max": 2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 25,
              "width": 15,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Farcie ou braisée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Jarret (osso buco)",
            "nameEn": "Veal shank",
            "description": "Tranche de jarret avec os à moelle",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 10,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Osso buco, braisé longuement",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Blanquette (épaule/poitrine)",
            "nameEn": "Veal stew meat",
            "description": "Morceaux pour blanquette",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.5,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 5,
              "width": 5,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Cuisson douce en sauce blanche",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Foie de veau",
            "nameEn": "Veal liver",
            "description": "Abat tendre et délicat",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 12,
              "height": 2,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide, reste rosé",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Ris de veau",
            "nameEn": "Veal sweetbreads",
            "description": "Thymus, abat très raffiné",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Préparation délicate, poché puis poêlé",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Rognons",
            "nameEn": "Veal kidneys",
            "description": "Abat délicat au goût fin",
            "availability": "classique",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 8,
              "width": 6,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Cuisson rapide à la poêle",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          }
        ]
      },
      "boucher": {
        "name": "Pièces du boucher",
        "description": "Morceaux rares ou spéciaux, à commander chez le boucher",
        "cuts": [
          {
            "name": "Longe",
            "nameEn": "Veal loin",
            "description": "Partie du dos, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Rôti entier ou en médaillons",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Sous-noix",
            "nameEn": "Veal silverside",
            "description": "Partie de la cuisse, moins tendre que la noix",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 18,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti ou braisé",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Noix pâtissière",
            "nameEn": "Veal cushion",
            "description": "Partie interne de la cuisse, très tendre",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.5,
              "max": 1,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 10,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Rôti ou escalopes",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Grenadins",
            "nameEn": "Veal grenadins",
            "description": "Petites tranches épaisses du filet",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.08,
              "max": 0.12,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 6,
              "width": 5,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Poêlés rapidement",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Médaillons",
            "nameEn": "Veal medallions",
            "description": "Tranches épaisses et rondes du filet",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.15,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 7,
              "width": 7,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Poêlés ou grillés",
            "temperatures": [
              {
                "doneness": "bleu",
                "coreTemperature": 44,
                "safetyTemperature": null,
                "description": "Rouge froid au centre"
              },
              {
                "doneness": "saignant",
                "coreTemperature": 52,
                "safetyTemperature": 55,
                "description": "Rouge tiède au centre"
              },
              {
                "doneness": "à point",
                "coreTemperature": 58,
                "safetyTemperature": 60,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 65,
                "safetyTemperature": 70,
                "description": "Légèrement rosé"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 15,
                "baseTimePerCm": 3,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.5,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_charbon",
                "temperatureRange": {
                  "min": 180,
                  "max": 280,
                  "recommended": 230,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "barbecue_gaz",
                "temperatureRange": {
                  "min": 160,
                  "max": 260,
                  "recommended": 200,
                  "unit": "C"
                },
                "baseTimePerKg": 14,
                "baseTimePerCm": 3,
                "adjustmentFactor": 0.95,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_chaleur_tournante",
                "temperatureRange": {
                  "min": 130,
                  "max": 230,
                  "recommended": 170,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.5,
                "adjustmentFactor": 1.05,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 120,
                "baseTimePerCm": 20,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              }
            ]
          },
          {
            "name": "Flanchet",
            "nameEn": "Veal flank",
            "description": "Partie ventrale, gélatineuse",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 3,
              "unit": "cm"
            },
            "recommendations": "Braisé ou en blanquette",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Haut de côtes",
            "nameEn": "Veal chuck ribs",
            "description": "Partie supérieure des côtes",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.6,
              "max": 1.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 12,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Braisé ou en ragoût",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Cervelle",
            "nameEn": "Veal brain",
            "description": "Abat très délicat",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.3,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 10,
              "width": 8,
              "height": 5,
              "unit": "cm"
            },
            "recommendations": "Pochée puis poêlée",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Tête de veau",
            "nameEn": "Veal head",
            "description": "Spécialité, demande préparation longue",
            "availability": "boucher",
            "typicalWeight": {
              "min": 2,
              "max": 4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 30,
              "width": 20,
              "height": 20,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue, sauce gribiche",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Langue",
            "nameEn": "Veal tongue",
            "description": "Muscle tendre après cuisson",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.4,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 8,
              "height": 6,
              "unit": "cm"
            },
            "recommendations": "Cuisson longue, puis pelée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Cœur",
            "nameEn": "Veal heart",
            "description": "Muscle dense",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.4,
              "max": 0.8,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 12,
              "width": 10,
              "height": 10,
              "unit": "cm"
            },
            "recommendations": "Braisé ou en ragoût",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Pieds de veau",
            "nameEn": "Veal feet",
            "description": "Très gélatineux",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.3,
              "max": 0.6,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 15,
              "width": 8,
              "height": 8,
              "unit": "cm"
            },
            "recommendations": "Cuisson très longue pour gelée",
            "temperatures": [
              {
                "doneness": "bien cuit",
                "coreTemperature": 70,
                "safetyTemperature": 70,
                "description": "Tendre et juteux"
              },
              {
                "doneness": "confit",
                "coreTemperature": 85,
                "safetyTemperature": 85,
                "description": "Très tendre, se détache"
              }
            ],
            "cookingMethods": [
              {
                "method": "cocotte",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 40,
                "baseTimePerCm": 8,
                "adjustmentFactor": 1.3,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "braisage",
                "temperatureRange": {
                  "min": 140,
                  "max": 180,
                  "recommended": 160,
                  "unit": "C"
                },
                "baseTimePerKg": 38,
                "baseTimePerCm": 7.5,
                "adjustmentFactor": 1.25,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "mijoteuse",
                "temperatureRange": {
                  "min": 70,
                  "max": 100,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 60,
                "baseTimePerCm": 12,
                "adjustmentFactor": 1.8,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 10
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 20,
                "baseTimePerCm": 4,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              },
              {
                "method": "four_basse_temperature",
                "temperatureRange": {
                  "min": 60,
                  "max": 120,
                  "recommended": 90,
                  "unit": "C"
                },
                "baseTimePerKg": 50,
                "baseTimePerCm": 10,
                "adjustmentFactor": 1.6,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 12
              }
            ]
          },
          {
            "name": "Fraise de veau",
            "nameEn": "Veal mesentery",
            "description": "Membrane intestinale",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.2,
              "max": 0.4,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 20,
              "width": 15,
              "height": 0.5,
              "unit": "cm"
            },
            "recommendations": "Pochée puis grillée",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          },
          {
            "name": "Animelles",
            "nameEn": "Veal testicles",
            "description": "Abat délicat et raffiné",
            "availability": "boucher",
            "typicalWeight": {
              "min": 0.1,
              "max": 0.2,
              "unit": "kg"
            },
            "typicalDimensions": {
              "length": 6,
              "width": 5,
              "height": 4,
              "unit": "cm"
            },
            "recommendations": "Pochées puis poêlées",
            "temperatures": [
              {
                "doneness": "à point",
                "coreTemperature": 60,
                "safetyTemperature": 63,
                "description": "Rosé au centre"
              },
              {
                "doneness": "bien cuit",
                "coreTemperature": 68,
                "safetyTemperature": 70,
                "description": "Complètement cuit"
              }
            ],
            "cookingMethods": [
              {
                "method": "poele",
                "temperatureRange": {
                  "min": 140,
                  "max": 220,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 13,
                "baseTimePerCm": 2.7,
                "adjustmentFactor": 1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "grill",
                "temperatureRange": {
                  "min": 180,
                  "max": 260,
                  "recommended": 220,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "plancha",
                "temperatureRange": {
                  "min": 180,
                  "max": 240,
                  "recommended": 210,
                  "unit": "C"
                },
                "baseTimePerKg": 11,
                "baseTimePerCm": 2.2,
                "adjustmentFactor": 0.9,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 5
              },
              {
                "method": "sous_vide",
                "temperatureRange": {
                  "min": 52,
                  "max": 85,
                  "recommended": 58,
                  "unit": "C"
                },
                "baseTimePerKg": 108,
                "baseTimePerCm": 18,
                "adjustmentFactor": 1.5,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 3
              },
              {
                "method": "four_traditionnel",
                "temperatureRange": {
                  "min": 140,
                  "max": 240,
                  "recommended": 180,
                  "unit": "C"
                },
                "baseTimePerKg": 18,
                "baseTimePerCm": 3.6,
                "adjustmentFactor": 1.1,
                "temperatureAdjustmentFactor": 1,
                "restingTime": 7
              }
            ]
          }
        ]
      }
    }
  },
  {
    "category": "volaille",
    "name": "Poulet",
    "nameEn": "Chicken",
    "description": "Volaille - viande blanche maigre et versatile",
    "cuts": [
      {
        "name": "Poulet entier",
        "nameEn": "Whole chicken",
        "description": "Poulet complet à rôtir",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.2,
          "max": 2.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 20,
          "height": 15,
          "unit": "cm"
        },
        "recommendations": "Farci ou nature, bien assaisonné. OBLIGATOIRE: 74°C à cœur",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE pour sécurité"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 42,
            "baseTimePerCm": 7.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 30,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "four_a_pain",
            "temperatureRange": {
              "min": 100,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Blanc de poulet",
        "nameEn": "Chicken breast",
        "description": "Filet de poulet, maigre",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.3,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 2.5,
          "unit": "cm"
        },
        "recommendations": "Attention à ne pas dessécher. Sous-vide possible à 68-70°C mais 74°C recommandé",
        "temperatures": [
          {
            "doneness": "juteux (sous-vide)",
            "coreTemperature": 69,
            "safetyTemperature": 74,
            "description": "Juteux (nécessite pasteurisation longue)"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair, juteux - RECOMMANDÉ"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 140,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 22,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 20,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 17,
            "baseTimePerCm": 3.8,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 140,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.05,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "wok",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 14,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 4
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.05,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.05,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisse de poulet",
        "nameEn": "Chicken thigh",
        "description": "Haut de cuisse, plus gras et savoureux",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 10,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Plus difficile à dessécher que le blanc, très savoureux",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 76,
            "safetyTemperature": 74,
            "description": "Fondant, jus clair"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 140,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 7.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 7.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 32,
            "baseTimePerCm": 6.5,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 140,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 33,
            "baseTimePerCm": 6.8,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 150,
            "baseTimePerCm": 22,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          }
        ]
      },
      {
        "name": "Filet de poulet",
        "nameEn": "Chicken breast",
        "description": "Morceau le plus maigre, tendre et polyvalent",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Ne pas trop cuire pour éviter le dessèchement. OBLIGATOIRE: 74°C",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 22,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 3,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 62,
              "max": 74,
              "recommended": 65,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 15,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 0
          }
        ]
      },
      {
        "name": "Cuisse de poulet entière",
        "nameEn": "Whole chicken leg",
        "description": "Cuisse complète avec pilon et haut de cuisse",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.25,
          "max": 0.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 8,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Plus de goût que le blanc, cuisson complète obligatoire",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Pilon de poulet",
        "nameEn": "Chicken drumstick",
        "description": "Partie basse de la cuisse, avec os",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.1,
          "max": 0.15,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Idéal grillé ou rôti, bien croustillant",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 180,
              "max": 200,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          }
        ]
      },
      {
        "name": "Haut de cuisse",
        "nameEn": "Chicken thigh",
        "description": "Partie haute de la cuisse, plus juteuse que le blanc",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.12,
          "max": 0.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 10,
          "width": 7,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Plus goûteux et tolérant à la cuisson que le filet",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "wok",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 0
          }
        ]
      },
      {
        "name": "Ailes de poulet",
        "nameEn": "Chicken wings",
        "description": "Morceaux savoureux, idéaux en apéritif ou grillés",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.06,
          "max": 0.1,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 5,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Croustillantes à haute température, marinades recommandées",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 200,
              "max": 240,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 200,
              "max": 280,
              "recommended": 240,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 190,
              "max": 200,
              "recommended": 195,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          }
        ]
      },
      {
        "name": "Escalope de poulet",
        "nameEn": "Chicken escalope",
        "description": "Filet aplati, cuisson très rapide",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.12,
          "max": 0.18,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 12,
          "height": 1,
          "unit": "cm"
        },
        "recommendations": "Ne pas trop cuire, idéal pour schnitzels et escalopes panées",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 12,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          }
        ]
      },
      {
        "name": "Sot-l'y-laisse",
        "nameEn": "Oyster (chicken)",
        "description": "Petits morceaux tendres près du croupion, morceau du connaisseur",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.02,
          "max": 0.04,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 4,
          "width": 3,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Morceau délicat, cuisson rapide recommandée",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          }
        ]
      }
    ]
  },
  {
    "category": "volaille",
    "name": "Canard",
    "nameEn": "Duck",
    "description": "Volaille à chair rouge - riche et savoureuse",
    "cuts": [
      {
        "name": "Magret de canard",
        "nameEn": "Duck breast",
        "description": "Filet de canard, peut être rosé",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 18,
          "width": 10,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Excellent rosé, griller côté peau d'abord",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": 71,
            "description": "Rosé idéal pour magret"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 71,
            "description": "Rose léger"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 140,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 13,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 13,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3.2,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3.2,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 20,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 140,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Canard entier",
        "nameEn": "Whole duck",
        "description": "Canard complet à rôtir",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.5,
          "max": 2.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 18,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "Cuisses à 74°C, magret peut rester à 60°C",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Cuisses bien cuites, magret rosé"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 47,
            "baseTimePerCm": 8.5,
            "adjustmentFactor": 1.35,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 80,
            "baseTimePerCm": 13,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 90,
            "baseTimePerCm": 14,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 30,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_a_pain",
            "temperatureRange": {
              "min": 100,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Confit de canard",
        "nameEn": "Duck confit",
        "description": "Cuisses confites dans la graisse",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.2,
          "max": 0.3,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 10,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Cuisson longue et lente dans la graisse",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 85,
            "safetyTemperature": 74,
            "description": "Très tendre, fondant"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 150,
            "baseTimePerCm": 18,
            "adjustmentFactor": 2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 22,
            "adjustmentFactor": 2.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 70,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 28,
            "adjustmentFactor": 2.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 170,
            "baseTimePerCm": 20,
            "adjustmentFactor": 2.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 140,
            "baseTimePerCm": 17,
            "adjustmentFactor": 1.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 25,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisses de canard",
        "nameEn": "Duck legs",
        "description": "Idéales confites ou rôties, viande goûteuse",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.25,
          "max": 0.35,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 8,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Cuisson lente recommandée pour confits, ou rôtie à haute température",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE pour volaille"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 120,
              "max": 160,
              "recommended": 140,
              "unit": "C"
            },
            "baseTimePerKg": 90,
            "baseTimePerCm": 15,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Aiguillettes de canard",
        "nameEn": "Duck tenders",
        "description": "Filets fins le long du magret, très tendres",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.08,
          "max": 0.12,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 3,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide, idéal sauté ou en salade tiède",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "Le canard peut être servi rosé"
          },
          {
            "doneness": "à point",
            "coreTemperature": 63,
            "safetyTemperature": 63,
            "description": "Légèrement rosé au centre"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Cuit à cœur"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          },
          {
            "method": "wok",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 12,
            "baseTimePerCm": 2,
            "adjustmentFactor": 0.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          }
        ]
      },
      {
        "name": "Foie gras de canard",
        "nameEn": "Duck foie gras",
        "description": "Produit d'exception, cru à préparer ou mi-cuit",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.4,
          "max": 0.6,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 10,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson délicate, ne pas dépasser 65°C à cœur. Produit de luxe",
        "temperatures": [
          {
            "doneness": "mi-cuit",
            "coreTemperature": 50,
            "safetyTemperature": null,
            "description": "Mi-cuit - texture fondante"
          },
          {
            "doneness": "cuit",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "Cuit - plus ferme"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 110,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 0
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 5,
            "baseTimePerCm": 1,
            "adjustmentFactor": 0.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 1
          }
        ]
      },
      {
        "name": "Gésiers de canard",
        "nameEn": "Duck gizzards",
        "description": "Abats savoureux, souvent confits ou en salade",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 5,
          "width": 4,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Cuisson lente pour attendrir, délicieux confits",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit - OBLIGATOIRE pour abats"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 100,
              "max": 140,
              "recommended": 120,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 20,
            "adjustmentFactor": 2.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          }
        ]
      },
      {
        "name": "Manchons de canard",
        "nameEn": "Duck wings",
        "description": "Ailes de canard, riches en saveur",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.1,
          "max": 0.15,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 6,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Excellents braisés ou confits",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      }
    ]
  },
  {
    "category": "volaille",
    "name": "Dinde",
    "nameEn": "Turkey",
    "description": "Grande volaille, idéale pour les fêtes",
    "cuts": [
      {
        "name": "Dinde entière",
        "nameEn": "Whole turkey",
        "description": "Dinde complète à rôtir",
        "availability": "classique",
        "typicalWeight": {
          "min": 3,
          "max": 8,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 45,
          "width": 30,
          "height": 20,
          "unit": "cm"
        },
        "recommendations": "OBLIGATOIRE: 74°C à cœur. Arroser régulièrement",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 6.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 6.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 30,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "four_a_pain",
            "temperatureRange": {
              "min": 100,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Escalope de dinde",
        "nameEn": "Turkey breast",
        "description": "Fine tranche de dinde",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.1,
          "max": 0.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 10,
          "height": 1.5,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide, ne pas dessécher",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit, juteux"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 140,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 14,
            "baseTimePerCm": 2.8,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 14,
            "baseTimePerCm": 2.8,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "air_fryer",
            "temperatureRange": {
              "min": 140,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3.2,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "wok",
            "temperatureRange": {
              "min": 180,
              "max": 260,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 12,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 2
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 4
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.8,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 4
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 280,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "barbecue_gaz",
            "temperatureRange": {
              "min": 160,
              "max": 260,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 20,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 3
          },
          {
            "method": "four_a_pain",
            "temperatureRange": {
              "min": 100,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Cuisse de dinde",
        "nameEn": "Turkey leg",
        "description": "Grande cuisse, idéale rôtie ou braisée",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.6,
          "max": 1.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 12,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Cuisson lente pour une chair tendre, OBLIGATOIRE 74°C",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Filet de dinde",
        "nameEn": "Turkey breast fillet",
        "description": "Viande blanche maigre, très polyvalente",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 10,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Attention au dessèchement, ne pas trop cuire",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 175,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 175,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 60,
              "max": 74,
              "recommended": 65,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 0
          }
        ]
      },
      {
        "name": "Rôti de dinde",
        "nameEn": "Turkey roast",
        "description": "Rôti désossé, pratique et facile à trancher",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.0,
          "max": 2.0,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 12,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Ficeler pour garder la forme, arroser régulièrement",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 175,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 150,
              "max": 190,
              "recommended": 165,
              "unit": "C"
            },
            "baseTimePerKg": 42,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          }
        ]
      },
      {
        "name": "Pilon de dinde",
        "nameEn": "Turkey drumstick",
        "description": "Gros pilon savoureux, idéal pour 2-3 personnes",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.4,
          "max": 0.7,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 8,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Cuisson longue nécessaire, parfait grillé ou rôti",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 210,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "barbecue_charbon",
            "temperatureRange": {
              "min": 180,
              "max": 250,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      },
      {
        "name": "Ailes de dinde",
        "nameEn": "Turkey wings",
        "description": "Grandes ailes, riches en saveur",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.25,
          "max": 0.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 10,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Idéales braisées ou rôties",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Osso bucco de dinde",
        "nameEn": "Turkey osso buco",
        "description": "Tranches de cuisse avec os, façon osso buco",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 10,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Cuisson mijotée longue, idéal en sauce",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit - viande fondante"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 90,
            "baseTimePerCm": 15,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 85,
            "baseTimePerCm": 14,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      }
    ]
  },
  {
    "category": "volaille",
    "name": "Pintade",
    "nameEn": "Guinea fowl",
    "description": "Volaille à chair ferme et goûteuse, entre poulet et gibier",
    "cuts": [
      {
        "name": "Pintade entière",
        "nameEn": "Whole guinea fowl",
        "description": "Volaille complète à rôtir, chair savoureuse",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.0,
          "max": 1.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 18,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "Rôtir avec du beurre sous la peau, barder si nécessaire",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Suprême de pintade",
        "nameEn": "Guinea fowl breast",
        "description": "Blanc de pintade, chair ferme et savoureuse",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 8,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Ne pas trop cuire, peut être servi légèrement rosé",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - sécurité volaille"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 28,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 4
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 32,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisses de pintade",
        "nameEn": "Guinea fowl legs",
        "description": "Cuisses fermes et goûteuses",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 6,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Cuisson lente recommandée, excellent braisé",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      }
    ]
  },
  {
    "category": "volaille",
    "name": "Oie",
    "nameEn": "Goose",
    "description": "Grande volaille festive à la chair grasse et savoureuse",
    "cuts": [
      {
        "name": "Oie entière",
        "nameEn": "Whole goose",
        "description": "Grande volaille traditionnelle des fêtes",
        "availability": "boucher",
        "typicalWeight": {
          "min": 3.5,
          "max": 5.0,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 50,
          "width": 30,
          "height": 20,
          "unit": "cm"
        },
        "recommendations": "Piquer la peau pour faire fondre le gras, cuisson longue",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 150,
              "max": 200,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          }
        ]
      },
      {
        "name": "Magret d'oie",
        "nameEn": "Goose breast",
        "description": "Magret d'oie grasse, très savoureux",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.4,
          "max": 0.6,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 12,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Comme le magret de canard, quadriller le gras",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": null,
            "description": "Rosé - recommandé"
          },
          {
            "doneness": "à point",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "À point"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisses d'oie confites",
        "nameEn": "Confit goose legs",
        "description": "Cuisses à confire dans leur graisse",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 22,
          "width": 10,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson lente dans la graisse d'oie",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Confit - chair fondante"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 80,
              "max": 120,
              "recommended": 100,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 30,
            "adjustmentFactor": 3.0,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Foie gras d'oie",
        "nameEn": "Goose foie gras",
        "description": "Foie gras d'oie, plus fin que celui de canard",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.5,
          "max": 0.8,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 18,
          "width": 12,
          "height": 7,
          "unit": "cm"
        },
        "recommendations": "Préparation délicate, texture plus fine que canard",
        "temperatures": [
          {
            "doneness": "mi-cuit",
            "coreTemperature": 50,
            "safetyTemperature": null,
            "description": "Mi-cuit - fondant"
          },
          {
            "doneness": "cuit",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "Cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 110,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 0
          }
        ]
      }
    ]
  },
  {
    "category": "volaille",
    "name": "Chapon",
    "nameEn": "Capon",
    "description": "Coq castré, chair tendre et grasse, volaille festive",
    "cuts": [
      {
        "name": "Chapon entier",
        "nameEn": "Whole capon",
        "description": "Volaille de fête par excellence, tendre et savoureuse",
        "availability": "boucher",
        "typicalWeight": {
          "min": 2.5,
          "max": 4.0,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 40,
          "width": 25,
          "height": 18,
          "unit": "cm"
        },
        "recommendations": "Farci aux marrons traditionnellement, arroser souvent",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 150,
              "max": 200,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 140,
              "max": 190,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 48,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.35,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      },
      {
        "name": "Suprême de chapon",
        "nameEn": "Capon breast",
        "description": "Blanc de chapon, très tendre et goûteux",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 18,
          "width": 10,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Chair plus grasse et tendre que le poulet",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 175,
              "unit": "C"
            },
            "baseTimePerKg": 28,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 175,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          }
        ]
      },
      {
        "name": "Cuisses de chapon",
        "nameEn": "Capon legs",
        "description": "Grosses cuisses tendres et juteuses",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.35,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 22,
          "width": 10,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Parfaites rôties ou braisées",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Jus clair - OBLIGATOIRE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_gros",
    "subcategory": "gros_gibier",
    "name": "Sanglier",
    "nameEn": "Wild boar",
    "description": "Gibier à cuire complètement (risque trichinose)",
    "cuts": [
      {
        "name": "Rôti de sanglier",
        "nameEn": "Wild boar roast",
        "description": "Viande ferme et goûteuse",
        "availability": "boucher",
        "typicalWeight": {
          "min": 1,
          "max": 3,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 12,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "OBLIGATOIRE: 71°C minimum (risque trichinose)",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "À peine rosé - OBLIGATOIRE pour sécurité (trichinose)"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 140,
              "max": 240,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 65,
            "baseTimePerCm": 11,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 70,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 22,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 18
          },
          {
            "method": "four_chaleur_tournante",
            "temperatureRange": {
              "min": 130,
              "max": 230,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 48,
            "baseTimePerCm": 8.5,
            "adjustmentFactor": 1.35,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "sous_vide",
            "temperatureRange": {
              "min": 52,
              "max": 85,
              "recommended": 52,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 30,
            "adjustmentFactor": 2.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "fumoir_chaud",
            "temperatureRange": {
              "min": 90,
              "max": 150,
              "recommended": 110,
              "unit": "C"
            },
            "baseTimePerKg": 150,
            "baseTimePerCm": 20,
            "adjustmentFactor": 2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          },
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 60,
              "max": 120,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 25,
            "adjustmentFactor": 3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "barbecue_basse_temp",
            "temperatureRange": {
              "min": 80,
              "max": 150,
              "recommended": 110,
              "unit": "C"
            },
            "baseTimePerKg": 200,
            "baseTimePerCm": 28,
            "adjustmentFactor": 2.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          }
        ]
      },
      {
        "name": "Épaule de sanglier",
        "nameEn": "Wild boar shoulder",
        "description": "Morceau gélatineux idéal pour braiser",
        "availability": "boucher",
        "typicalWeight": {
          "min": 2,
          "max": 5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 20,
          "height": 15,
          "unit": "cm"
        },
        "recommendations": "Braisage long recommandé. OBLIGATOIRE: 71°C minimum.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Fondant - sécurité trichinose"
          },
          {
            "doneness": "effiloché",
            "coreTemperature": 88,
            "safetyTemperature": 88,
            "description": "Se défait à la fourchette"
          }
        ],
        "cookingMethods": [
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 75,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 11,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 120,
              "recommended": 100,
              "unit": "C"
            },
            "baseTimePerKg": 200,
            "baseTimePerCm": 28,
            "adjustmentFactor": 3.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          }
        ]
      },
      {
        "name": "Civet de sanglier",
        "nameEn": "Wild boar stew meat",
        "description": "Morceaux à braiser pour civet traditionnel",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.8,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 5,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Marinade 24-48h obligatoire. Cuisson longue en sauce.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Fondant en sauce"
          },
          {
            "doneness": "effiloché",
            "coreTemperature": 85,
            "safetyTemperature": 85,
            "description": "Se défait dans la sauce"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 90,
            "baseTimePerCm": 15,
            "adjustmentFactor": 2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 85,
            "baseTimePerCm": 14,
            "adjustmentFactor": 1.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 80,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 200,
            "baseTimePerCm": 25,
            "adjustmentFactor": 2.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      },
      {
        "name": "Côtes de sanglier",
        "nameEn": "Wild boar ribs",
        "description": "Côtes charnues et goûteuses",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.8,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 15,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Marinade recommandée. Grillées ou braisées.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Tendre et juteux"
          },
          {
            "doneness": "effiloché",
            "coreTemperature": 88,
            "safetyTemperature": 88,
            "description": "Chair qui se détache de l'os"
          }
        ],
        "cookingMethods": [
          {
            "method": "barbecue_basse_temp",
            "temperatureRange": {
              "min": 100,
              "max": 140,
              "recommended": 120,
              "unit": "C"
            },
            "baseTimePerKg": 150,
            "baseTimePerCm": 20,
            "adjustmentFactor": 2.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 80,
            "baseTimePerCm": 13,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          }
        ]
      },
      {
        "name": "Filet de sanglier",
        "nameEn": "Wild boar tenderloin",
        "description": "Morceau noble et tendre du sanglier",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.8,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 6,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Morceau noble. Cuisson rapide possible si de qualité.",
        "temperatures": [
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 71,
            "description": "Légèrement rosé si garanti sans trichinose"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Sécurité standard - recommandé"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      },
      {
        "name": "Cuissot/Jambon de sanglier",
        "nameEn": "Wild boar leg/ham",
        "description": "Grande pièce pour rôti ou salaison",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 4,
          "max": 10,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 50,
          "width": 25,
          "height": 20,
          "unit": "cm"
        },
        "recommendations": "Grande pièce festive. Marinade longue conseillée.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Juteux - sécurité respectée"
          },
          {
            "doneness": "effiloché",
            "coreTemperature": 88,
            "safetyTemperature": 88,
            "description": "Pour pulled pork façon gibier"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 25
          },
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 120,
              "recommended": 100,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 25,
            "adjustmentFactor": 3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 30
          },
          {
            "method": "fumoir_chaud",
            "temperatureRange": {
              "min": 90,
              "max": 130,
              "recommended": 110,
              "unit": "C"
            },
            "baseTimePerKg": 160,
            "baseTimePerCm": 22,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 25
          }
        ]
      },
      {
        "name": "Joues de sanglier",
        "nameEn": "Wild boar cheeks",
        "description": "Morceau gélatineux très savoureux",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.3,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 6,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Braisage long obligatoire. Résultat fondant exceptionnel.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Fondant"
          },
          {
            "doneness": "confit",
            "coreTemperature": 85,
            "safetyTemperature": 85,
            "description": "Ultra fondant, se coupe à la cuillère"
          }
        ],
        "cookingMethods": [
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 18,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 110,
            "baseTimePerCm": 16,
            "adjustmentFactor": 2.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_gros",
    "subcategory": "gros_gibier",
    "name": "Cerf",
    "nameEn": "Deer",
    "description": "Viande de cerf - maigre, savoureuse et noble",
    "cuts": [
      {
        "name": "Gigot de cerf",
        "nameEn": "Deer leg",
        "description": "Morceau principal et noble, très savoureux",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.5,
          "max": 3,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 40,
          "width": 15,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "Idéal rôti au four ou à la broche. Marinade recommandée 24-48h.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 55,
            "safetyTemperature": 60,
            "description": "Rosé tendre - cuisson recommandée pour le gibier"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "À point, encore juteux"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 68,
            "safetyTemperature": 70,
            "description": "Bien cuit mais risque de sécheresse"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 32,
            "baseTimePerCm": 5.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 20
          }
        ]
      },
      {
        "name": "Selle de cerf",
        "nameEn": "Deer saddle",
        "description": "Morceau d'exception, le plus tendre du cerf",
        "availability": "boucher",
        "typicalWeight": {
          "min": 1,
          "max": 2.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 20,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Pièce prestigieuse pour grandes occasions. Cuisson rosée impérative.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 52,
            "safetyTemperature": 58,
            "description": "Rosé - cuisson optimale"
          },
          {
            "doneness": "à point",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "À point"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Épaule de cerf",
        "nameEn": "Deer shoulder",
        "description": "Morceau savoureux pour cuisson longue",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.2,
          "max": 2.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 18,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Excellent en daube, civet ou braisé. Nécessite marinade.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 75,
            "safetyTemperature": 75,
            "description": "Tendre et fondant après cuisson longue"
          }
        ],
        "cookingMethods": [
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      },
      {
        "name": "Filet de cerf",
        "nameEn": "Deer tenderloin",
        "description": "Le plus tendre, rare et délicat",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.4,
          "max": 0.8,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 6,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide et rosée. Ne jamais surcuire.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 50,
            "safetyTemperature": 55,
            "description": "Rosé - cuisson idéale"
          },
          {
            "doneness": "à point",
            "coreTemperature": 56,
            "safetyTemperature": 60,
            "description": "À point maximum"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 13,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      },
      {
        "name": "Civet de cerf",
        "nameEn": "Deer stew meat",
        "description": "Morceaux pour ragoût et civet",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.8,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 10,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Pour civet traditionnel. Marinade au vin rouge 48h recommandée.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 80,
            "safetyTemperature": 80,
            "description": "Fondant après cuisson longue"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 70,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 100,
            "baseTimePerCm": 15,
            "adjustmentFactor": 2.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_gros",
    "subcategory": "gros_gibier",
    "name": "Chevreuil",
    "nameEn": "Roe deer",
    "description": "Viande de chevreuil - fine et délicate",
    "cuts": [
      {
        "name": "Gigot de chevreuil",
        "nameEn": "Roe deer leg",
        "description": "Morceau principal, plus petit que le cerf",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.8,
          "max": 1.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 12,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Rôti au four. Marinade 12-24h suffisante.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": 58,
            "description": "Rosé - cuisson optimale"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "À point"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 28,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          }
        ]
      },
      {
        "name": "Selle de chevreuil",
        "nameEn": "Roe deer saddle",
        "description": "Pièce noble et tendre",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.6,
          "max": 1.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 15,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson rosée impérative pour préserver la tendreté.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 52,
            "safetyTemperature": 56,
            "description": "Rosé parfait"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 22,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      },
      {
        "name": "Filet de chevreuil",
        "nameEn": "Roe deer tenderloin",
        "description": "Extrêmement tendre, pièce d'exception",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.2,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Cuisson très rapide. Saisir et finir au four.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 48,
            "safetyTemperature": 52,
            "description": "Rosé tendre"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 12,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 10,
            "baseTimePerCm": 2,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_gros",
    "subcategory": "gros_gibier",
    "name": "Biche",
    "nameEn": "Hind",
    "description": "Viande de biche - proche du cerf, légèrement plus fine",
    "cuts": [
      {
        "name": "Gigot de biche",
        "nameEn": "Hind leg",
        "description": "Morceau principal, savoureux et tendre",
        "availability": "classique",
        "typicalWeight": {
          "min": 1.2,
          "max": 2.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 14,
          "height": 11,
          "unit": "cm"
        },
        "recommendations": "Rôti traditionnel. Marinade 24h au vin rouge.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": 58,
            "description": "Rosé juteux"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "À point"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 33,
            "baseTimePerCm": 5.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 14
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 14
          }
        ]
      },
      {
        "name": "Selle de biche",
        "nameEn": "Hind saddle",
        "description": "Pièce noble pour grande table",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.8,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 30,
          "width": 18,
          "height": 7,
          "unit": "cm"
        },
        "recommendations": "Cuisson rosée. Pièce prestigieuse.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 52,
            "safetyTemperature": 57,
            "description": "Rosé parfait"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 24,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 11
          }
        ]
      },
      {
        "name": "Épaule de biche",
        "nameEn": "Hind shoulder",
        "description": "Pour cuisson mijotée",
        "availability": "classique",
        "typicalWeight": {
          "min": 1,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 28,
          "width": 16,
          "height": 9,
          "unit": "cm"
        },
        "recommendations": "Excellent braisé ou en daube.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 75,
            "safetyTemperature": 75,
            "description": "Fondant"
          }
        ],
        "cookingMethods": [
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 52,
            "baseTimePerCm": 8.5,
            "adjustmentFactor": 1.45,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      },
      {
        "name": "Filet de biche",
        "nameEn": "Hind tenderloin",
        "description": "Très tendre et délicat",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.7,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 22,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide. Ne pas dépasser rosé.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 50,
            "safetyTemperature": 54,
            "description": "Rosé tendre"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 14,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 12,
            "baseTimePerCm": 2.5,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_petit",
    "subcategory": "petit_gibier",
    "name": "Lièvre",
    "nameEn": "Hare",
    "description": "Viande de lièvre - goût prononcé et caractéristique",
    "cuts": [
      {
        "name": "Lièvre entier",
        "nameEn": "Whole hare",
        "description": "Animal entier, peut être cuisiné en une pièce",
        "availability": "classique",
        "typicalWeight": {
          "min": 2.5,
          "max": 4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 50,
          "width": 20,
          "height": 15,
          "unit": "cm"
        },
        "recommendations": "Traditionnellement en civet ou rôti entier. Marinade fortement recommandée.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 62,
            "safetyTemperature": 65,
            "description": "Rosé - cuisson optimale pour lièvre rôti"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 75,
            "safetyTemperature": 75,
            "description": "Bien cuit pour civet"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 5.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 80,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Râbles de lièvre",
        "nameEn": "Hare saddles",
        "description": "Partie dorsale, la plus tendre",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.6,
          "max": 1.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 10,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson rosée. Pièce noble du lièvre.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 58,
            "safetyTemperature": 62,
            "description": "Rosé juteux"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Cuisses de lièvre",
        "nameEn": "Hare legs",
        "description": "Morceaux pour civet traditionnel",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.8,
          "max": 1.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 12,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Idéal pour civet à la royale. Marinade au sang traditionnelle.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 78,
            "safetyTemperature": 78,
            "description": "Tendre et fondant"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 90,
            "baseTimePerCm": 14,
            "adjustmentFactor": 2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 70,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 120,
            "baseTimePerCm": 18,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Faisan",
    "nameEn": "Pheasant",
    "description": "Volaille de gibier - chair fine et savoureuse",
    "cuts": [
      {
        "name": "Faisan entier",
        "nameEn": "Whole pheasant",
        "description": "Oiseau entier, tradition culinaire noble",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.9,
          "max": 1.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 18,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "Rôti au four ou à la broche. Barder pour éviter le dessèchement.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 68,
            "safetyTemperature": 70,
            "description": "Rosé juteux - cuisson traditionnelle"
          },
          {
            "doneness": "à point",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "À point, normes UE"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6.5,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Suprêmes de faisan",
        "nameEn": "Pheasant breasts",
        "description": "Blancs de faisan, morceaux nobles",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.3,
          "max": 0.6,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide à la poêle. Barder ou ajouter matière grasse.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 66,
            "safetyTemperature": 68,
            "description": "Rosé tendre"
          },
          {
            "doneness": "à point",
            "coreTemperature": 72,
            "safetyTemperature": 74,
            "description": "À point"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 220,
              "recommended": 190,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 210,
              "unit": "C"
            },
            "baseTimePerKg": 22,
            "baseTimePerCm": 4,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          }
        ]
      },
      {
        "name": "Cuisses de faisan",
        "nameEn": "Pheasant legs",
        "description": "Morceaux plus goûteux, excellents confits",
        "availability": "classique",
        "typicalWeight": {
          "min": 0.2,
          "max": 0.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 8,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Cuisson plus longue que les suprêmes. Excellent confit ou braisé.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 78,
            "safetyTemperature": 78,
            "description": "Tendre et juteux"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.45,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_petit",
    "subcategory": "petit_gibier",
    "name": "Lapin de garenne",
    "nameEn": "Wild rabbit",
    "description": "Lapin sauvage à chair ferme et goût prononcé",
    "cuts": [
      {
        "name": "Lapin entier",
        "nameEn": "Whole wild rabbit",
        "description": "Lapin sauvage entier (1-1.5kg)",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 1,
          "max": 1.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 15,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Marinade conseillée. Chair plus ferme que le lapin d'élevage.",
        "temperatures": [
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 70,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 72,
            "safetyTemperature": 72,
            "description": "Bien cuit, tendre"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Râbles de lapin de garenne",
        "nameEn": "Wild rabbit saddle",
        "description": "Partie dorsale, morceau noble",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.2,
          "max": 0.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Morceau le plus tendre. Cuisson rapide possible.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 58,
            "safetyTemperature": 65,
            "description": "Rosé au centre"
          },
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 68,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 72,
            "safetyTemperature": 72,
            "description": "Bien cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          },
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          }
        ]
      },
      {
        "name": "Cuisses de lapin de garenne",
        "nameEn": "Wild rabbit legs",
        "description": "Cuisses musclées, idéales à braiser",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 6,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Chair ferme, braisage ou gibelotte recommandé.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 72,
            "safetyTemperature": 72,
            "description": "Tendre et juteux"
          },
          {
            "doneness": "confit",
            "coreTemperature": 78,
            "safetyTemperature": 78,
            "description": "Très fondant"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          }
        ]
      },
      {
        "name": "Épaules de lapin de garenne",
        "nameEn": "Wild rabbit shoulders",
        "description": "Épaules avec os, savoureuses",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.1,
          "max": 0.18,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 10,
          "width": 5,
          "height": 4,
          "unit": "cm"
        },
        "recommendations": "Idéales pour civet ou braisage.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 72,
            "safetyTemperature": 72,
            "description": "Fondant"
          },
          {
            "doneness": "confit",
            "coreTemperature": 80,
            "safetyTemperature": 80,
            "description": "Se détache de l'os"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 60,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 65,
            "baseTimePerCm": 11,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      },
      {
        "name": "Civet de lapin de garenne",
        "nameEn": "Wild rabbit stew meat",
        "description": "Morceaux découpés pour civet",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.5,
          "max": 1,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 5,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Marinade au vin rouge 12-24h. Cuisson longue.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 72,
            "safetyTemperature": 72,
            "description": "Fondant en sauce"
          },
          {
            "doneness": "effiloché",
            "coreTemperature": 80,
            "safetyTemperature": 80,
            "description": "Se défait"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 160,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 75,
            "baseTimePerCm": 12,
            "adjustmentFactor": 1.8,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "mijoteuse",
            "temperatureRange": {
              "min": 80,
              "max": 100,
              "recommended": 90,
              "unit": "C"
            },
            "baseTimePerKg": 180,
            "baseTimePerCm": 22,
            "adjustmentFactor": 2.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Perdrix",
    "nameEn": "Partridge",
    "description": "Petit gibier à plume, chair fine et parfumée",
    "cuts": [
      {
        "name": "Perdrix entière",
        "nameEn": "Whole partridge",
        "description": "Perdrix grise ou rouge entière (350-450g)",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.35,
          "max": 0.45,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 12,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Barder impérativement. Faisandage 2-4 jours conseillé.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "Rosé pour perdrix jeune"
          },
          {
            "doneness": "à point",
            "coreTemperature": 68,
            "safetyTemperature": 70,
            "description": "À point"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit pour perdrix vieille"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 38,
            "baseTimePerCm": 5.5,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Suprêmes de perdrix",
        "nameEn": "Partridge breasts",
        "description": "Filets de perdrix, tendres et savoureux",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.08,
          "max": 0.12,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 5,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Cuisson rapide, peut être rosé.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 58,
            "safetyTemperature": 62,
            "description": "Rosé tendre"
          },
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 68,
            "description": "Légèrement rosé"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisses de perdrix",
        "nameEn": "Partridge legs",
        "description": "Cuisses avec os, plus goûteuses",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.05,
          "max": 0.08,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 4,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Cuisson plus longue que les suprêmes.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Tendre et juteux"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "braisage",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 9,
            "adjustmentFactor": 1.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Caille",
    "nameEn": "Quail",
    "description": "Très petit gibier délicat (élevage principalement)",
    "cuts": [
      {
        "name": "Caille entière",
        "nameEn": "Whole quail",
        "description": "Caille entière (150-200g), se mange souvent à deux par personne",
        "availability": "supermarché",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Barder avec lard fin. Farce optionnelle.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "Rosé tendre"
          },
          {
            "doneness": "à point",
            "coreTemperature": 68,
            "safetyTemperature": 70,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Bien cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 50,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 200,
              "max": 260,
              "recommended": 230,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Caille désossée farcie",
        "nameEn": "Stuffed boneless quail",
        "description": "Caille désossée pour farce au foie gras ou raisins",
        "availability": "boucher",
        "typicalWeight": {
          "min": 0.18,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 12,
          "width": 8,
          "height": 6,
          "unit": "cm"
        },
        "recommendations": "Farce au foie gras ou aux raisins traditionnelle.",
        "temperatures": [
          {
            "doneness": "à point",
            "coreTemperature": 68,
            "safetyTemperature": 70,
            "description": "Farce bien chaude"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Cuit à cœur"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 55,
            "baseTimePerCm": 8,
            "adjustmentFactor": 1.4,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          },
          {
            "method": "poele",
            "temperatureRange": {
              "min": 150,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 45,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.25,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Bécasse",
    "nameEn": "Woodcock",
    "description": "Roi des gibiers à plume, très prisé des gastronomes",
    "cuts": [
      {
        "name": "Bécasse entière",
        "nameEn": "Whole woodcock",
        "description": "Bécasse entière (250-400g), traditionnellement non vidée",
        "availability": "boucher chasse spécialisé",
        "typicalWeight": {
          "min": 0.25,
          "max": 0.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 10,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "NE PAS VIDER (tradition). Faisandage 4-8 jours. Cuisson rosée obligatoire.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 55,
            "safetyTemperature": 60,
            "description": "Rosé impératif - tradition"
          },
          {
            "doneness": "à point",
            "coreTemperature": 58,
            "safetyTemperature": 62,
            "description": "Maximum acceptable"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 200,
              "max": 240,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 200,
              "max": 240,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 32,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.05,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Suprêmes de bécasse",
        "nameEn": "Woodcock breasts",
        "description": "Filets de bécasse, chair rouge foncée",
        "availability": "boucher chasse spécialisé",
        "typicalWeight": {
          "min": 0.06,
          "max": 0.1,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 4,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Cuisson très rapide, doit rester rosé.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 55,
            "safetyTemperature": 58,
            "description": "Rosé comme une viande rouge"
          },
          {
            "doneness": "à point",
            "coreTemperature": 58,
            "safetyTemperature": 60,
            "description": "Maximum"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Canard sauvage",
    "nameEn": "Wild duck",
    "description": "Canard colvert sauvage, plus petit et maigre que l'élevage",
    "cuts": [
      {
        "name": "Canard sauvage entier",
        "nameEn": "Whole wild duck",
        "description": "Colvert entier (1-1.4kg), chair rouge foncée",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 1,
          "max": 1.4,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 35,
          "width": 18,
          "height": 12,
          "unit": "cm"
        },
        "recommendations": "Faisandage 3-5 jours. Cuisson rosée pour les magrets.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": 58,
            "description": "Rosé pour magrets"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Pour cuisses - bien cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 32,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          }
        ]
      },
      {
        "name": "Magrets de canard sauvage",
        "nameEn": "Wild duck breasts",
        "description": "Filets de colvert, plus fins que le canard gras",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.25,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Cuisson rosée. Moins gras que magret d'élevage.",
        "temperatures": [
          {
            "doneness": "saignant",
            "coreTemperature": 52,
            "safetyTemperature": 55,
            "description": "Rouge au centre"
          },
          {
            "doneness": "rosé",
            "coreTemperature": 56,
            "safetyTemperature": 58,
            "description": "Rosé vif"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 63,
            "description": "Rose pâle"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 140,
              "max": 180,
              "recommended": 160,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          },
          {
            "method": "plancha",
            "temperatureRange": {
              "min": 180,
              "max": 240,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 16,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          }
        ]
      },
      {
        "name": "Cuisses de canard sauvage",
        "nameEn": "Wild duck legs",
        "description": "Cuisses de colvert, idéales confites",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.15,
          "max": 0.22,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 15,
          "width": 8,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Excellent confites ou braisées longuement.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Tendre"
          },
          {
            "doneness": "confit",
            "coreTemperature": 80,
            "safetyTemperature": 80,
            "description": "Chair qui se détache"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 65,
            "baseTimePerCm": 10,
            "adjustmentFactor": 1.6,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 100,
              "recommended": 85,
              "unit": "C"
            },
            "baseTimePerKg": 240,
            "baseTimePerCm": 30,
            "adjustmentFactor": 3.5,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_poil_gros",
    "subcategory": "gros_gibier",
    "name": "Marcassin",
    "nameEn": "Young wild boar",
    "description": "Jeune sanglier (< 6 mois), plus tendre que l'adulte",
    "cuts": [
      {
        "name": "Rôti de marcassin",
        "nameEn": "Young wild boar roast",
        "description": "Rôti dans le filet ou l'épaule, chair tendre",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 0.8,
          "max": 2,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 10,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Plus tendre que sanglier adulte. Marinade courte suffit.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "Rosé si garanti sans trichinose"
          },
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 68,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Sécurité standard"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 170,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 35,
            "baseTimePerCm": 6,
            "adjustmentFactor": 1.2,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          },
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 160,
              "max": 190,
              "recommended": 170,
              "unit": "C"
            },
            "baseTimePerKg": 40,
            "baseTimePerCm": 7,
            "adjustmentFactor": 1.3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 15
          }
        ]
      },
      {
        "name": "Carré de marcassin",
        "nameEn": "Young wild boar rack",
        "description": "Carré avec côtes, présentation festive",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 0.6,
          "max": 1.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 15,
          "height": 8,
          "unit": "cm"
        },
        "recommendations": "Pièce spectaculaire. Protéger les os avec papier alu.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 60,
            "safetyTemperature": 65,
            "description": "Rosé"
          },
          {
            "doneness": "à point",
            "coreTemperature": 65,
            "safetyTemperature": 68,
            "description": "Légèrement rosé"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Bien cuit - sécurité"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 5,
            "adjustmentFactor": 1.15,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 12
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 25,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Filet de marcassin",
        "nameEn": "Young wild boar tenderloin",
        "description": "Morceau le plus noble du marcassin",
        "availability": "boucher spécialisé",
        "typicalWeight": {
          "min": 0.2,
          "max": 0.5,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 20,
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "recommendations": "Morceau délicat, cuisson rapide.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 58,
            "safetyTemperature": 63,
            "description": "Rosé"
          },
          {
            "doneness": "à point",
            "coreTemperature": 63,
            "safetyTemperature": 67,
            "description": "À point"
          },
          {
            "doneness": "bien cuit",
            "coreTemperature": 71,
            "safetyTemperature": 71,
            "description": "Bien cuit"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 160,
              "max": 200,
              "recommended": 180,
              "unit": "C"
            },
            "baseTimePerKg": 20,
            "baseTimePerCm": 3.5,
            "adjustmentFactor": 1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 18,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.95,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 7
          }
        ]
      }
    ]
  },
  {
    "category": "gibier_plume",
    "subcategory": "gibier_plume",
    "name": "Pigeon ramier",
    "nameEn": "Wood pigeon",
    "description": "Palombe sauvage, gibier prisé du Sud-Ouest",
    "cuts": [
      {
        "name": "Pigeon ramier entier",
        "nameEn": "Whole wood pigeon",
        "description": "Palombe entière (400-550g), chair rouge foncée",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.4,
          "max": 0.55,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 25,
          "width": 12,
          "height": 10,
          "unit": "cm"
        },
        "recommendations": "Faisandage 2-4 jours optionnel. Cuisson rosée impérative.",
        "temperatures": [
          {
            "doneness": "rosé",
            "coreTemperature": 54,
            "safetyTemperature": 58,
            "description": "Rosé - recommandé"
          },
          {
            "doneness": "à point",
            "coreTemperature": 58,
            "safetyTemperature": 62,
            "description": "Légèrement rosé"
          }
        ],
        "cookingMethods": [
          {
            "method": "four_traditionnel",
            "temperatureRange": {
              "min": 200,
              "max": 240,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 30,
            "baseTimePerCm": 4.5,
            "adjustmentFactor": 1.1,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          },
          {
            "method": "rotissoire",
            "temperatureRange": {
              "min": 200,
              "max": 240,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 28,
            "baseTimePerCm": 4,
            "adjustmentFactor": 1.05,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      },
      {
        "name": "Suprêmes de pigeon ramier",
        "nameEn": "Wood pigeon breasts",
        "description": "Filets de palombe, chair ferme et goûteuse",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.08,
          "max": 0.12,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 10,
          "width": 5,
          "height": 2,
          "unit": "cm"
        },
        "recommendations": "Cuisson express, doit rester rosé.",
        "temperatures": [
          {
            "doneness": "saignant",
            "coreTemperature": 52,
            "safetyTemperature": 55,
            "description": "Rouge au centre"
          },
          {
            "doneness": "rosé",
            "coreTemperature": 56,
            "safetyTemperature": 58,
            "description": "Rosé vif"
          },
          {
            "doneness": "à point",
            "coreTemperature": 60,
            "safetyTemperature": 62,
            "description": "Rose pâle - maximum"
          }
        ],
        "cookingMethods": [
          {
            "method": "poele",
            "temperatureRange": {
              "min": 180,
              "max": 220,
              "recommended": 200,
              "unit": "C"
            },
            "baseTimePerKg": 15,
            "baseTimePerCm": 3,
            "adjustmentFactor": 0.9,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 6
          },
          {
            "method": "grill",
            "temperatureRange": {
              "min": 200,
              "max": 250,
              "recommended": 220,
              "unit": "C"
            },
            "baseTimePerKg": 14,
            "baseTimePerCm": 2.8,
            "adjustmentFactor": 0.85,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 5
          }
        ]
      },
      {
        "name": "Cuisses de pigeon ramier",
        "nameEn": "Wood pigeon legs",
        "description": "Cuisses de palombe, à confire ou braiser",
        "availability": "boucher chasse",
        "typicalWeight": {
          "min": 0.05,
          "max": 0.08,
          "unit": "kg"
        },
        "typicalDimensions": {
          "length": 8,
          "width": 4,
          "height": 3,
          "unit": "cm"
        },
        "recommendations": "Cuisson longue type confit recommandée.",
        "temperatures": [
          {
            "doneness": "bien cuit",
            "coreTemperature": 74,
            "safetyTemperature": 74,
            "description": "Tendre"
          },
          {
            "doneness": "confit",
            "coreTemperature": 78,
            "safetyTemperature": 78,
            "description": "Fondant"
          }
        ],
        "cookingMethods": [
          {
            "method": "cocotte",
            "temperatureRange": {
              "min": 140,
              "max": 170,
              "recommended": 150,
              "unit": "C"
            },
            "baseTimePerKg": 70,
            "baseTimePerCm": 11,
            "adjustmentFactor": 1.7,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 8
          },
          {
            "method": "four_basse_temperature",
            "temperatureRange": {
              "min": 80,
              "max": 100,
              "recommended": 85,
              "unit": "C"
            },
            "baseTimePerKg": 200,
            "baseTimePerCm": 25,
            "adjustmentFactor": 3,
            "temperatureAdjustmentFactor": 1,
            "restingTime": 10
          }
        ]
      }
    ]
  }
];

module.exports = meatData;
