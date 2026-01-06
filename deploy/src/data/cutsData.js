// Cookmaster - Données détaillées des morceaux
// Organisé par catégorie > sous-catégorie > morceau

export const cutsData = {
  boeuf: {
    nobles: {
      name: 'Morceaux nobles',
      name_en: 'Noble Cuts',
      description: 'Les plus tendres et savoureux',
      description_en: 'The most tender and flavorful',
      cuts: {
        filet: {
          id: 'filet',
          name: 'Filet',
          name_en: 'Tenderloin',
          icon: '🥩',
          anatomie: "Situé sous la colonne vertébrale, le filet (psoas major) est le muscle le moins sollicité, d'où sa tendreté exceptionnelle. Il se divise en tête, cœur (tournedos) et pointe (chateaubriand).",
          caracteristiques: {
            tendrete: 10,
            saveur: 6,
            persillage: 2,
            prix: '€€€€'
          },
          poids_moyen: '150-250g',
          epaisseur_ideale: '3-4 cm',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'four', 'sousvide', 'basse_temp', 'reverse_sear', 'bbq', 'pierrade', 'croute', 'wok'],
          donenessType: 'viande_rouge',
          temps_base_100g: { // en secondes par 100g
            bleu: 90,
            saignant: 120,
            a_point: 180,
            bien_cuit: 240
          },
          conseils: [
            "Ne jamais dépasser 54°C à cœur pour préserver la tendreté",
            "Bardage recommandé pour les cuissons longues",
            "Saisir à feu très vif 2 min/côté",
            "Le filet ne bénéficie pas d'une longue cuisson",
            "Sous-vide à 54°C pendant 1h puis saisir",
            "Reverse sear : four 120°C puis saisir à la poêle"
          ],
          erreurs: [
            "Cuisson excessive : devient sec au-delà de 60°C",
            "Assaisonnement trop précoce : perte de jus",
            "Absence de repos après cuisson"
          ],
          sauces: ['Sauce Périgueux', 'Beurre maître d\'hôtel', 'Sauce bordelaise', 'Sauce béarnaise'],
          accompagnements: ['Gratin dauphinois', 'Haricots verts', 'Champignons poêlés', 'Purée de pommes de terre'],
          vins: ['Pomerol', 'Saint-Émilion', 'Gevrey-Chambertin']
        },

        entrecote: {
          id: 'entrecote',
          name: 'Entrecôte',
          name_en: 'Ribeye',
          icon: '🥩',
          anatomie: "Prélevée dans le train de côtes (6ème à 12ème côte), l'entrecôte contient le muscle longissimus dorsi. Le persillage généreux provient de la graisse intramusculaire.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 8,
            prix: '€€€'
          },
          poids_moyen: '250-400g',
          epaisseur_ideale: '2.5-3.5 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'bbq', 'cheminee', 'pierrade', 'sousvide', 'reverse_sear', 'basse_temp'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 60,
            saignant: 90,
            a_point: 150,
            bien_cuit: 210
          },
          conseils: [
            "Privilégier une épaisseur de 3-4 cm",
            "Arroser avec le gras fondu (basting)",
            "Saisir sur surface ultra-chaude 250°C+",
            "Sous-vide 55°C 2h puis saisir au chalumeau",
            "Au BBQ : zone directe puis indirecte"
          ],
          erreurs: [
            "Piquer avec une fourchette : perte de jus",
            "Cuisson directe sortie du frigo"
          ],
          sauces: ['Sauce au poivre', 'Beurre café de Paris', 'Jus de viande réduit'],
          accompagnements: ['Frites maison', 'Salade verte', 'Pommes sautées'],
          vins: ['Cahors', 'Madiran', 'Côte-Rôtie']
        },

        cote_de_boeuf: {
          id: 'cote_de_boeuf',
          name: 'Côte de boeuf',
          name_en: 'Beef Rib',
          icon: '🥩',
          anatomie: "Entrecôte avec son os, prélevée dans le train de côtes. L'os protège la viande et apporte saveur. Pièce à partager (800g-1.5kg).",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 8,
            prix: '€€€'
          },
          poids_moyen: '800g-1.5kg',
          epaisseur_ideale: '4-6 cm',
          hasBone: true, // toujours avec os
          canBeBarded: false,
          cuissons: ['four', 'saisir', 'grill', 'bbq', 'bbq_indirect', 'cheminee', 'broche', 'reverse_sear', 'basse_temp', 'sousvide', 'sel'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 50,
            saignant: 70,
            a_point: 100,
            bien_cuit: 140
          },
          conseils: [
            "Saisir d'abord en poêle puis finir au four",
            "L'os conduit la chaleur différemment",
            "Repos de 10-15 min obligatoire",
            "Température four : 180°C après saisie",
            "BBQ indirect : 120°C pendant 2h puis saisir",
            "Reverse sear idéal pour cuisson uniforme",
            "À la broche : spectaculaire et savoureux"
          ],
          erreurs: [
            "Ne pas tenir compte de l'os dans le calcul",
            "Découper immédiatement après cuisson"
          ],
          sauces: ['Sauce béarnaise', 'Beurre maître d\'hôtel', 'Sel de Guérande'],
          accompagnements: ['Gratin dauphinois', 'Frites', 'Salade composée'],
          vins: ['Pauillac', 'Saint-Estèphe', 'Hermitage']
        },

        faux_filet: {
          id: 'faux_filet',
          name: 'Faux-filet',
          name_en: 'Striploin',
          icon: '🥩',
          anatomie: "Situé le long de l'échine, c'est le contre-filet. Moins tendre que le filet mais plus goûteux grâce à son persillage.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 6,
            prix: '€€€'
          },
          poids_moyen: '200-300g',
          epaisseur_ideale: '2-3 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'bbq', 'sousvide', 'reverse_sear', 'pierrade', 'wok'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 70,
            saignant: 100,
            a_point: 160,
            bien_cuit: 220
          },
          conseils: [
            "Retirer la bande de gras externe si trop épaisse",
            "Excellent rapport qualité/prix",
            "Sous-vide 55°C 1h30 puis saisir rapidement",
            "En wok : émincer finement pour sauté asiatique"
          ],
          erreurs: [
            "Confondre avec le filet (moins tendre)"
          ],
          sauces: ['Sauce au poivre', 'Sauce roquefort', 'Échalotes confites'],
          accompagnements: ['Frites', 'Légumes grillés', 'Riz pilaf'],
          vins: ['Médoc', 'Haut-Médoc', 'Graves']
        }
      }
    },

    griller: {
      name: 'À griller',
      name_en: 'Grilling Cuts',
      description: 'Morceaux savoureux pour cuisson rapide',
      description_en: 'Flavorful cuts for quick cooking',
      cuts: {
        bavette: {
          id: 'bavette',
          name: 'Bavette',
          name_en: 'Flank Steak',
          icon: '🥩',
          anatomie: "Muscle de l'abdomen, fibres longues. Deux types : bavette d'aloyau (plus noble) et bavette de flanchet.",
          caracteristiques: {
            tendrete: 6,
            saveur: 9,
            persillage: 4,
            prix: '€€'
          },
          poids_moyen: '150-250g',
          epaisseur_ideale: '1.5-2 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'bbq', 'cheminee', 'wok', 'flambe'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 45,
            saignant: 60,
            a_point: 90,
            bien_cuit: 120
          },
          conseils: [
            "Cuisson saignante impérative",
            "Trancher contre les fibres",
            "Feu très vif, cuisson courte",
            "Au wok : émincer en lanières fines",
            "Flambée au cognac : spectaculaire"
          ],
          erreurs: [
            "Surcuisson : devient très dure",
            "Trancher dans le sens des fibres"
          ],
          sauces: ['Sauce échalotes', 'Beurre maître d\'hôtel'],
          accompagnements: ['Frites', 'Échalotes', 'Salade verte'],
          vins: ['Chinon', 'Bourgueil', 'Saint-Nicolas-de-Bourgueil']
        },

        onglet: {
          id: 'onglet',
          name: 'Onglet',
          name_en: 'Hanger Steak',
          icon: '🥩',
          anatomie: "Muscle du diaphragme, un seul par animal. Fibres grossières mais saveur intense. Morceau de boucher.",
          caracteristiques: {
            tendrete: 6,
            saveur: 10,
            persillage: 3,
            prix: '€€'
          },
          poids_moyen: '150-200g',
          epaisseur_ideale: '2-3 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'bbq', 'cheminee', 'flambe'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 50,
            saignant: 70,
            a_point: 100,
            bien_cuit: 140
          },
          conseils: [
            "Retirer le nerf central avant cuisson",
            "Cuisson saignante obligatoire",
            "Repos 5 min avant dégustation",
            "Morceau du boucher par excellence",
            "Flambé à l'armagnac : sublime"
          ],
          erreurs: [
            "Laisser le nerf : morceau immangeable",
            "Cuisson au-delà de à point"
          ],
          sauces: ['Sauce échalotes', 'Jus de viande'],
          accompagnements: ['Frites', 'Échalotes confites'],
          vins: ['Morgon', 'Fleurie', 'Côtes-du-Rhône']
        },

        hampe: {
          id: 'hampe',
          name: 'Hampe',
          name_en: 'Skirt Steak',
          icon: '🥩',
          anatomie: "Autre muscle du diaphragme, jumeau de l'onglet. Fibres plus fines, goût prononcé.",
          caracteristiques: {
            tendrete: 5,
            saveur: 9,
            persillage: 3,
            prix: '€€'
          },
          poids_moyen: '150-200g',
          epaisseur_ideale: '1.5-2 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'bbq', 'wok', 'cheminee'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 40,
            saignant: 55,
            a_point: 80,
            bien_cuit: 110
          },
          conseils: [
            "Cuisson rapide à feu vif",
            "Maximum à point",
            "Idéale pour fajitas et tacos",
            "Au wok avec légumes croquants"
          ],
          erreurs: [
            "Surcuisson : texture caoutchouteuse"
          ],
          sauces: ['Sauce chimichurri', 'Beurre persillé'],
          accompagnements: ['Frites', 'Salade', 'Légumes grillés'],
          vins: ['Côtes-du-Rhône', 'Crozes-Hermitage']
        },

        rumsteck: {
          id: 'rumsteck',
          name: 'Rumsteck',
          name_en: 'Rump Steak',
          icon: '🥩',
          anatomie: "Partie arrière de l'aloyau, au-dessus de la cuisse. Chair maigre et savoureuse.",
          caracteristiques: {
            tendrete: 7,
            saveur: 7,
            persillage: 4,
            prix: '€€'
          },
          poids_moyen: '150-250g',
          epaisseur_ideale: '2-3 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'four', 'bbq', 'sousvide', 'reverse_sear', 'wok', 'pierrade'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            bleu: 60,
            saignant: 85,
            a_point: 130,
            bien_cuit: 180
          },
          conseils: [
            "Polyvalent : grillé, rôti ou en pavé",
            "Excellente viande du quotidien",
            "Sous-vide 56°C 2h pour tendreté parfaite",
            "En wok émincé pour plats asiatiques"
          ],
          erreurs: [
            "Ne pas confondre avec le rond de gîte"
          ],
          sauces: ['Sauce au poivre', 'Sauce champignons'],
          accompagnements: ['Pommes de terre', 'Légumes verts'],
          vins: ['Côtes-de-Bordeaux', 'Lalande-de-Pomerol']
        }
      }
    },

    mijoter: {
      name: 'À mijoter',
      name_en: 'Stewing Cuts',
      description: 'Pour cuissons longues et mijotés',
      description_en: 'For long cooking and stews',
      cuts: {
        paleron: {
          id: 'paleron',
          name: 'Paleron',
          name_en: 'Blade Roast',
          icon: '🥩',
          anatomie: "Muscle de l'épaule traversé par un nerf gélatineux. Parfait pour le pot-au-feu et les braisés.",
          caracteristiques: {
            tendrete: 6,
            saveur: 8,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '500g-1kg',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'four', 'basse_temp', 'sousvide', 'bouillir', 'tajine'],
          donenessType: null, // cuisson longue
          temps_cuisson: '2-3h à 150°C',
          conseils: [
            "Le nerf central devient gélatineux à la cuisson",
            "Idéal pour pot-au-feu, daube, bourguignon",
            "Sous-vide 62°C pendant 24-48h : fondant",
            "En tajine avec épices marocaines"
          ],
          erreurs: [
            "Cuisson trop courte : dur",
            "Température trop élevée : viande sèche"
          ],
          sauces: ['Sauce au vin rouge', 'Jus de cuisson'],
          accompagnements: ['Carottes', 'Pommes de terre', 'Navets'],
          vins: ['Bourgogne', 'Côtes-du-Rhône']
        },

        joue: {
          id: 'joue',
          name: 'Joue de boeuf',
          name_en: 'Beef Cheeks',
          icon: '🥩',
          anatomie: "Muscle de la mâchoire, très travaillé donc gélatineux après cuisson longue.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '200-300g/pièce',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '3-4h à 140°C',
          conseils: [
            "Devient fondante après cuisson longue",
            "Braiser au vin rouge",
            "Sous-vide 60°C 48h : texture incroyable",
            "En cocotte fonte pour résultat optimal"
          ],
          erreurs: [
            "Cuisson insuffisante : caoutchouteux"
          ],
          sauces: ['Sauce au vin rouge', 'Sauce aux légumes'],
          accompagnements: ['Purée', 'Polenta', 'Pâtes fraîches'],
          vins: ['Madiran', 'Cahors', 'Cornas']
        },

        bourguignon: {
          id: 'bourguignon',
          name: 'Bourguignon (macreuse/gîte)',
          name_en: 'Beef Stew (chuck/shank)',
          icon: '🥩',
          anatomie: "Morceaux à braiser de l'épaule et de la cuisse. Macreuse, gîte, jumeau.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'four', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '2.5-3h à 150°C',
          conseils: [
            "Couper en cubes de 4-5cm",
            "Faire revenir avant de braiser",
            "Ajouter lardons, carottes, oignons, champignons",
            "En cocotte Le Creuset : traditionnel",
            "Sous-vide 60°C 24h puis réduire la sauce"
          ],
          erreurs: [
            "Morceaux trop petits : dessèchement",
            "Feu trop fort : viande dure"
          ],
          sauces: ['Sauce bourguignonne'],
          accompagnements: ['Pommes vapeur', 'Tagliatelles fraîches'],
          vins: ['Bourgogne rouge', 'Pinot noir']
        },

        queue_de_boeuf: {
          id: 'queue_de_boeuf',
          name: 'Queue de boeuf',
          name_en: 'Oxtail',
          icon: '🥩',
          anatomie: "Queue de l'animal, riche en collagène et en saveur.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '1-1.5kg',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'basse_temp', 'sousvide', 'bouillir'],
          donenessType: null,
          temps_cuisson: '3-4h à 140°C',
          conseils: [
            "Faire dégorger avant cuisson",
            "La viande doit se détacher de l'os",
            "En cocotte au four : fondant garanti",
            "Pour pot-au-feu : départ eau froide"
          ],
          erreurs: [
            "Cuisson trop courte"
          ],
          sauces: ['Jus de cuisson réduit'],
          accompagnements: ['Purée de pommes de terre', 'Carottes'],
          vins: ['Châteauneuf-du-Pape', 'Gigondas']
        }
      }
    },

    hache: {
      name: 'Viande hachée',
      name_en: 'Ground Beef',
      description: 'Steaks hachés et préparations',
      description_en: 'Ground patties and preparations',
      cuts: {
        steak_hache: {
          id: 'steak_hache',
          name: 'Steak haché',
          name_en: 'Beef Patty',
          icon: '🍔',
          anatomie: "Viande hachée de bœuf, différents taux de matière grasse (5%, 15%, 20%).",
          caracteristiques: {
            tendrete: 8,
            saveur: 7,
            persillage: 'Variable',
            prix: '€'
          },
          poids_moyen: '100-200g',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'plancha', 'bbq', 'pierrade', 'friture'],
          donenessType: 'viande_rouge',
          temps_base_100g: {
            saignant: 90,
            a_point: 150,
            bien_cuit: 210
          },
          conseils: [
            "15% MG pour jutosité optimale",
            "Ne pas tasser le steak",
            "Former juste avant cuisson",
            "Au BBQ : saisir vif 3 min/côté",
            "En friture : pour boulettes croustillantes"
          ],
          erreurs: [
            "Trop manipuler la viande",
            "Appuyer pendant la cuisson"
          ],
          sauces: ['Ketchup', 'Sauce burger', 'Moutarde'],
          accompagnements: ['Frites', 'Salade', 'Pain burger'],
          vins: ['Côtes-du-Rhône', 'Beaujolais']
        },

        tartare: {
          id: 'tartare',
          name: 'Tartare',
          name_en: 'Beef Tartare',
          icon: '🥩',
          anatomie: "Viande crue hachée finement. Utiliser filet, rumsteck ou cœur de rumsteck.",
          caracteristiques: {
            tendrete: 10,
            saveur: 8,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '150-200g',
          hasBone: false,
          canBeBarded: false,
          cuissons: [],
          donenessType: null,
          conseils: [
            "Viande ultra-fraîche obligatoire",
            "Hacher au couteau pour meilleure texture",
            "Assaisonner au dernier moment"
          ],
          erreurs: [
            "Viande pas assez fraîche",
            "Hachage trop fin"
          ],
          sauces: ['Sauce tartare maison'],
          accompagnements: ['Frites', 'Salade', 'Câpres', 'Oignons'],
          vins: ['Sancerre rouge', 'Beaujolais']
        }
      }
    }
  },

  porc: {
    rotir: {
      name: 'À rôtir',
      name_en: 'Roasting Cuts',
      description: 'Pièces pour le four',
      description_en: 'Cuts for oven roasting',
      cuts: {
        filet_mignon: {
          id: 'filet_mignon',
          name: 'Filet mignon',
          name_en: 'Pork Tenderloin',
          icon: '🐷',
          anatomie: "Muscle le plus tendre du porc, situé le long de la colonne vertébrale.",
          caracteristiques: {
            tendrete: 10,
            saveur: 7,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '400-600g',
          epaisseur_ideale: 'Pièce entière',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['four', 'poele', 'sousvide', 'grill', 'plancha', 'bbq', 'basse_temp', 'reverse_sear', 'croute'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 180,
            a_point: 240,
            bien_cuit: 300
          },
          conseils: [
            "Saisir avant de rôtir",
            "Barder pour éviter le dessèchement",
            "Temperature : 68°C à cœur idéal",
            "Sous-vide 62°C 2h puis saisir",
            "Reverse sear : four 120°C puis plancha",
            "En croûte feuilletée : cuisson spectaculaire"
          ],
          erreurs: [
            "Surcuisson : devient très sec",
            "Oublier le repos"
          ],
          sauces: ['Sauce moutarde', 'Sauce aux champignons', 'Sauce au miel'],
          accompagnements: ['Purée', 'Pommes au four', 'Légumes racines'],
          vins: ['Alsace Pinot Gris', 'Côtes-du-Rhône blanc']
        },

        roti: {
          id: 'roti',
          name: 'Rôti de porc',
          name_en: 'Pork Roast',
          icon: '🐷',
          anatomie: "Pièce à rôtir de l'échine ou de la longe. Peut être avec ou sans os.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '800g-1.5kg',
          hasBone: 'optional',
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'broche', 'basse_temp', 'cocotte', 'bbq_indirect'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 150,
            a_point: 200,
            bien_cuit: 250
          },
          conseils: [
            "Four à 180°C",
            "Arroser régulièrement",
            "Laisser reposer 15 min",
            "À la broche : croustillant parfait",
            "Basse température 120°C 3h : ultra-moelleux",
            "En cocotte avec légumes : plat complet"
          ],
          erreurs: [
            "Four trop chaud : extérieur sec",
            "Ne pas arroser"
          ],
          sauces: ['Jus de cuisson', 'Sauce aux pruneaux'],
          accompagnements: ['Pommes de terre rôties', 'Choux', 'Carottes'],
          vins: ['Pinot Noir d\'Alsace', 'Beaujolais']
        },

        carre: {
          id: 'carre',
          name: 'Carré de porc',
          name_en: 'Rack of Pork',
          icon: '🐷',
          anatomie: "Côtes premières et secondes avec leur échine. Pièce festive.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 6,
            prix: '€€'
          },
          poids_moyen: '1-2kg',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['four', 'rotissoire', 'broche', 'bbq_indirect', 'basse_temp', 'croute'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 140,
            a_point: 180,
            bien_cuit: 220
          },
          conseils: [
            "Demander au boucher de manchonner les os",
            "Four 200°C pour croûte dorée",
            "BBQ indirect : fumage léger au bois fruitier",
            "En croûte d'herbes : présentation spectaculaire",
            "À la broche : festif et délicieux"
          ],
          erreurs: [
            "Oublier de protéger les os (papier alu)"
          ],
          sauces: ['Sauce au cidre', 'Sauce aux pommes'],
          accompagnements: ['Gratin', 'Pommes au four'],
          vins: ['Côtes-du-Jura', 'Arbois']
        }
      }
    },

    griller: {
      name: 'À griller',
      name_en: 'Grilling Cuts',
      description: 'Pour la poêle et le barbecue',
      description_en: 'For pan and barbecue',
      cuts: {
        cotes: {
          id: 'cotes',
          name: 'Côtes de porc',
          name_en: 'Pork Chops',
          icon: '🐷',
          anatomie: "Tranche de carré comprenant une côte. Avec ou sans filet.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '150-200g',
          epaisseur_ideale: '2-3 cm',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'bbq', 'plancha', 'cheminee', 'pierrade', 'four'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 150,
            a_point: 200,
            bien_cuit: 250
          },
          conseils: [
            "Saisir côté gras d'abord",
            "Ne pas piquer pour garder le jus",
            "À la cheminée : saveur fumée naturelle",
            "Plancha : cuisson parfaite et rapide",
            "Mariner 2h pour plus de saveur"
          ],
          erreurs: [
            "Cuisson trop courte (sécurité)",
            "Piquer la viande"
          ],
          sauces: ['Sauce charcutière', 'Moutarde', 'Sauce barbecue'],
          accompagnements: ['Frites', 'Compote de pommes', 'Chou'],
          vins: ['Côtes-du-Rhône', 'Chinon']
        },

        travers: {
          id: 'travers',
          name: 'Travers (ribs)',
          name_en: 'Spare Ribs',
          icon: '🐷',
          anatomie: "Plat de côtes avec beaucoup de viande entre les os. Idéal pour le BBQ.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '1-1.5kg/rack',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['four', 'bbq', 'bbq_indirect', 'fumage', 'basse_temp', 'braise', 'sousvide'],
          donenessType: null,
          temps_cuisson: '2-3h à 150°C ou low & slow BBQ',
          conseils: [
            "Retirer la membrane arrière",
            "Marinade ou rub épicé",
            "Cuisson lente obligatoire",
            "BBQ indirect 120°C 4-5h : méthode américaine",
            "Fumage au bois de pommier : sublime",
            "Sous-vide 65°C 24h puis griller : ultra-tendre"
          ],
          erreurs: [
            "Cuisson trop rapide",
            "Laisser la membrane"
          ],
          sauces: ['Sauce BBQ', 'Sauce asiatique sucrée-salée'],
          accompagnements: ['Coleslaw', 'Maïs grillé', 'Haricots'],
          vins: ['Zinfandel', 'Côtes-du-Rhône']
        },

        echine: {
          id: 'echine',
          name: 'Échine',
          name_en: 'Pork Neck',
          icon: '🐷',
          anatomie: "Partie supérieure du cou, persillée et savoureuse.",
          caracteristiques: {
            tendrete: 6,
            saveur: 9,
            persillage: 7,
            prix: '€'
          },
          poids_moyen: '200-300g/tranche',
          hasBone: 'optional',
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'braise', 'bbq', 'mijoter', 'cocotte', 'plancha', 'four'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 160,
            a_point: 210,
            bien_cuit: 260
          },
          conseils: [
            "Excellent rapport qualité/prix",
            "Supporte bien la cuisson longue",
            "Braisée en cocotte : fondante",
            "Au BBQ marinée : délicieuse",
            "Parfaite pour plats mijotés"
          ],
          erreurs: [
            "Ne pas la saisir assez"
          ],
          sauces: ['Sauce au vin blanc', 'Sauce moutarde'],
          accompagnements: ['Lentilles', 'Purée', 'Chou'],
          vins: ['Beaujolais', 'Mâcon']
        }
      }
    },

    mijoter: {
      name: 'À mijoter',
      name_en: 'Stewing Cuts',
      description: 'Pour les plats mijotés',
      description_en: 'For stewed dishes',
      cuts: {
        epaule: {
          id: 'epaule',
          name: 'Épaule',
          name_en: 'Pork Shoulder',
          icon: '🐷',
          anatomie: "Pièce de l'avant, parfaite pour le pulled pork et les braisés.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '2-3kg',
          hasBone: 'optional',
          canBeBarded: false,
          cuissons: ['braise', 'four', 'fumage', 'bbq_indirect', 'basse_temp', 'sousvide', 'mijoter', 'cocotte'],
          donenessType: null,
          temps_cuisson: '4-6h à 120°C pour pulled pork',
          conseils: [
            "Idéale pour effilocher",
            "Cuisson très lente (low & slow)",
            "La viande doit s'effilocher facilement",
            "Fumage 6-8h au hickory : pulled pork parfait",
            "Sous-vide 68°C 24h : texture incroyable",
            "En cocotte avec cidre breton : classique"
          ],
          erreurs: [
            "Cuisson pas assez longue"
          ],
          sauces: ['Sauce BBQ', 'Sauce au cidre'],
          accompagnements: ['Coleslaw', 'Pain brioche', 'Cornichons'],
          vins: ['Côtes-du-Rhône', 'Bière ambrée']
        },

        poitrine: {
          id: 'poitrine',
          name: 'Poitrine (lard frais)',
          name_en: 'Pork Belly',
          icon: '🐷',
          anatomie: "Partie ventrale, alternance de gras et de maigre.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 9,
            prix: '€'
          },
          poids_moyen: '1-2kg',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['four', 'braise', 'fumage', 'bbq_indirect', 'basse_temp', 'sousvide', 'confit', 'cocotte'],
          donenessType: null,
          temps_cuisson: '3-4h à 150°C',
          conseils: [
            "Cuisson lente pour fondant",
            "Finir à haute température pour croûte",
            "Sous-vide 68°C 48h puis griller : fondant absolu",
            "Confite dans sa graisse : tradition du Sud-Ouest",
            "Fumée : bacon maison",
            "BBQ indirect 4h : pork belly croustillant"
          ],
          erreurs: [
            "Cuisson trop rapide"
          ],
          sauces: ['Sauce soja', 'Laque au miel'],
          accompagnements: ['Riz', 'Légumes sautés', 'Chou chinois'],
          vins: ['Gewurztraminer', 'Bière brune']
        },

        jarret: {
          id: 'jarret',
          name: 'Jarret (jambonneau)',
          name_en: 'Ham Hock',
          icon: '🐷',
          anatomie: "Partie inférieure de la patte, riche en collagène.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '500-800g/pièce',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'four', 'mijoter', 'cocotte', 'basse_temp', 'bouillir', 'fumage'],
          donenessType: null,
          temps_cuisson: '2-3h à 160°C',
          conseils: [
            "La viande doit se détacher de l'os",
            "Excellent avec choucroute",
            "En cocotte avec bière : tradition alsacienne",
            "Bouilli puis grillé : croûte croustillante",
            "Fumé : façon allemande"
          ],
          erreurs: [
            "Cuisson insuffisante"
          ],
          sauces: ['Jus de cuisson'],
          accompagnements: ['Choucroute', 'Lentilles', 'Pommes de terre'],
          vins: ['Riesling', 'Sylvaner']
        }
      }
    }
  },

  agneau: {
    rotir: {
      name: 'À rôtir',
      name_en: 'Roasting Cuts',
      description: 'Les grandes pièces',
      description_en: 'Large cuts for roasting',
      cuts: {
        gigot: {
          id: 'gigot',
          name: 'Gigot',
          name_en: 'Leg of Lamb',
          icon: '🐑',
          anatomie: "Cuisse entière de l'agneau. Peut être raccourci (sans souris) ou entier.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 4,
            prix: '€€'
          },
          poids_moyen: '1.5-3kg',
          hasBone: 'optional', // peut être désossé
          canBeBarded: false,
          cuissons: ['four', 'rotissoire', 'broche', 'bbq_indirect', 'basse_temp', 'sousvide', 'braise'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 100,
            a_point: 130,
            bien_cuit: 170
          },
          conseils: [
            "Piquer d'ail et de romarin",
            "Four 200°C puis baisser à 180°C",
            "Avec os : +15% de temps",
            "À la broche : fête traditionnelle",
            "Basse température 7h : fondant garanti",
            "Sous-vide 58°C 24h puis saisir"
          ],
          erreurs: [
            "Four trop chaud tout le temps",
            "Ne pas laisser reposer"
          ],
          sauces: ['Jus d\'agneau au romarin', 'Sauce à la menthe'],
          accompagnements: ['Flageolets', 'Gratin dauphinois', 'Haricots verts'],
          vins: ['Pauillac', 'Saint-Julien', 'Bandol']
        },

        carre: {
          id: 'carre',
          name: 'Carré d\'agneau',
          name_en: 'Rack of Lamb',
          icon: '🐑',
          anatomie: "Les côtes premières avec leur échine. Pièce festive par excellence.",
          caracteristiques: {
            tendrete: 9,
            saveur: 9,
            persillage: 5,
            prix: '€€€'
          },
          poids_moyen: '400-600g',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['four', 'poele', 'saisir', 'grill', 'bbq', 'reverse_sear', 'croute', 'basse_temp'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 80,
            a_point: 110,
            bien_cuit: 150
          },
          conseils: [
            "Manchonner les os",
            "Croûte d'herbes ou de moutarde",
            "Saisir avant de rôtir",
            "En croûte de pistaches : gastronomique",
            "Reverse sear : four 120°C puis saisir",
            "Au BBQ : saisie rapide uniquement"
          ],
          erreurs: [
            "Oublier de protéger les os"
          ],
          sauces: ['Jus d\'agneau', 'Sauce au thym'],
          accompagnements: ['Tian de légumes', 'Pommes boulangères'],
          vins: ['Châteauneuf-du-Pape', 'Hermitage']
        },

        epaule: {
          id: 'epaule',
          name: 'Épaule',
          name_en: 'Lamb Shoulder',
          icon: '🐑',
          anatomie: "Partie avant, plus grasse que le gigot, très savoureuse.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 6,
            prix: '€€'
          },
          poids_moyen: '1.2-2kg',
          hasBone: 'optional',
          canBeBarded: false,
          cuissons: ['four', 'braise', 'basse_temp', 'sousvide', 'cocotte', 'tajine', 'bbq_indirect'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 110,
            a_point: 140,
            bien_cuit: 180
          },
          conseils: [
            "Confite : 7h à 120°C",
            "La viande doit s'effilocher",
            "En tajine : épices marocaines",
            "Sous-vide 62°C 24h : fondante",
            "BBQ indirect au charbon de bois"
          ],
          erreurs: [
            "Cuisson trop courte pour le confit"
          ],
          sauces: ['Jus au romarin', 'Sauce aux olives'],
          accompagnements: ['Pommes de terre', 'Légumes confits'],
          vins: ['Côtes-de-Provence', 'Bandol']
        },

        selle: {
          id: 'selle',
          name: 'Selle d\'agneau',
          name_en: 'Saddle of Lamb',
          icon: '🐑',
          anatomie: "Partie de la longe comprenant les deux filets. Pièce très noble.",
          caracteristiques: {
            tendrete: 9,
            saveur: 9,
            persillage: 4,
            prix: '€€€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['four', 'saisir', 'reverse_sear', 'basse_temp', 'sousvide', 'croute'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 90,
            a_point: 120,
            bien_cuit: 160
          },
          conseils: [
            "Pièce de grand chef",
            "Saisir puis four à 200°C",
            "Sous-vide 56°C 3h : précision parfaite",
            "En croûte d'herbes : présentation somptueuse",
            "Reverse sear pour cuisson uniforme"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Jus d\'agneau au thym'],
          accompagnements: ['Légumes printaniers', 'Gratin'],
          vins: ['Margaux', 'Pauillac']
        }
      }
    },

    griller: {
      name: 'À griller',
      name_en: 'Grilling Cuts',
      description: 'Pour la poêle et le grill',
      description_en: 'For pan and grill',
      cuts: {
        cotes: {
          id: 'cotes',
          name: 'Côtes d\'agneau',
          name_en: 'Lamb Chops',
          icon: '🐑',
          anatomie: "Côtes premières ou secondes, individuelles ou doubles.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 5,
            prix: '€€'
          },
          poids_moyen: '80-120g/côte',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'bbq', 'plancha', 'cheminee', 'saisir', 'pierrade', 'four'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 90,
            a_point: 130,
            bien_cuit: 180
          },
          conseils: [
            "Feu vif pour saisir",
            "2-3 min par côté",
            "À la cheminée avec sarments : parfum unique",
            "Plancha très chaude : croûte parfaite",
            "Mariner à l'huile d'olive et herbes"
          ],
          erreurs: [
            "Cuisson trop longue"
          ],
          sauces: ['Sauce à la menthe', 'Aïoli'],
          accompagnements: ['Ratatouille', 'Frites', 'Salade'],
          vins: ['Côtes-de-Provence', 'Tavel']
        },

        souris: {
          id: 'souris',
          name: 'Souris d\'agneau',
          name_en: 'Lamb Shank',
          icon: '🐑',
          anatomie: "Partie inférieure du gigot, autour du jarret. Très fondante après cuisson lente.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 5,
            prix: '€€'
          },
          poids_moyen: '250-350g/pièce',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'four', 'cocotte', 'basse_temp', 'sousvide', 'tajine'],
          donenessType: null,
          temps_cuisson: '2-3h à 160°C',
          conseils: [
            "La viande doit se détacher de l'os",
            "Braiser avec aromates",
            "Sous-vide 62°C 24h : ultra-fondante",
            "En cocotte au miel et épices",
            "En tajine avec abricots secs"
          ],
          erreurs: [
            "Cuisson pas assez longue"
          ],
          sauces: ['Jus de cuisson réduit'],
          accompagnements: ['Purée', 'Légumes confits'],
          vins: ['Minervois', 'Corbières']
        },

        noisettes: {
          id: 'noisettes',
          name: 'Noisettes',
          name_en: 'Lamb Noisettes',
          icon: '🐑',
          anatomie: "Tranches rondes prélevées dans le filet. Sans os, très tendres.",
          caracteristiques: {
            tendrete: 9,
            saveur: 8,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: '60-80g/noisette',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['poele', 'saisir', 'grill', 'plancha', 'sousvide', 'reverse_sear'],
          donenessType: 'agneau',
          temps_base_100g: {
            rose: 60,
            a_point: 90,
            bien_cuit: 120
          },
          conseils: [
            "Cuisson rapide",
            "Bardées pour plus de saveur",
            "Sous-vide 56°C 1h puis saisir",
            "À la plancha : saisie express",
            "Ne pas dépasser rosé"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce au porto', 'Beurre aux herbes'],
          accompagnements: ['Haricots verts', 'Pommes fondantes'],
          vins: ['Saint-Émilion', 'Pomerol']
        }
      }
    },

    mijoter: {
      name: 'À mijoter',
      name_en: 'Stewing Cuts',
      description: 'Pour navarin et tajines',
      description_en: 'For navarin and tagines',
      cuts: {
        collier: {
          id: 'collier',
          name: 'Collier',
          name_en: 'Lamb Neck',
          icon: '🐑',
          anatomie: "Partie du cou, gélatineuse après cuisson.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '500g-1kg',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'tajine', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '2h à 160°C',
          conseils: [
            "Idéal pour navarin",
            "Découper en morceaux",
            "En cocotte avec légumes racines",
            "En tajine aux citrons confits",
            "Sous-vide 62°C 24h : texture parfaite"
          ],
          erreurs: [
            "Dégraisser insuffisamment"
          ],
          sauces: ['Navarin printanier'],
          accompagnements: ['Légumes printaniers', 'Pommes de terre'],
          vins: ['Côtes-du-Rhône', 'Crozes-Hermitage']
        },

        poitrine: {
          id: 'poitrine',
          name: 'Poitrine',
          name_en: 'Lamb Breast',
          icon: '🐑',
          anatomie: "Partie ventrale, morceaux entrelardés.",
          caracteristiques: {
            tendrete: 6,
            saveur: 8,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '500g-1kg',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'mijoter', 'cocotte', 'tajine', 'basse_temp', 'four'],
          donenessType: null,
          temps_cuisson: '2-2.5h à 160°C',
          conseils: [
            "Pour ragoûts et tajines",
            "Bien dégraisser",
            "En cocotte avec couscous",
            "Au four confite lentement",
            "Parfaite pour tajine aux pruneaux"
          ],
          erreurs: [
            "Ne pas dégraisser"
          ],
          sauces: ['Sauce tajine'],
          accompagnements: ['Couscous', 'Légumes'],
          vins: ['Côtes-du-Roussillon', 'Minervois']
        }
      }
    }
  },

  veau: {
    rotir: {
      name: 'À rôtir',
      name_en: 'Roasting Cuts',
      description: 'Pièces nobles',
      description_en: 'Noble cuts',
      cuts: {
        cote: {
          id: 'cote',
          name: 'Côte de veau',
          name_en: 'Veal Chop',
          icon: '🐄',
          anatomie: "Côte avec son os et sa noix. Pièce emblématique.",
          caracteristiques: {
            tendrete: 9,
            saveur: 8,
            persillage: 4,
            prix: '€€€'
          },
          poids_moyen: '250-350g',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['poele', 'four', 'saisir', 'grill', 'plancha', 'sousvide', 'reverse_sear', 'basse_temp'],
          donenessType: 'porc', // veau = bien cuit mais rosé accepté
          temps_base_100g: {
            juste_cuit: 140,
            a_point: 180,
            bien_cuit: 220
          },
          conseils: [
            "Saisir puis four à 180°C",
            "Le veau reste rosé au centre",
            "Ne pas surcuire",
            "Sous-vide 60°C 2h puis saisir",
            "Basse température 120°C 1h30",
            "À la plancha avec beurre noisette"
          ],
          erreurs: [
            "Cuisson trop forte"
          ],
          sauces: ['Sauce aux morilles', 'Jus de veau'],
          accompagnements: ['Risotto', 'Pâtes fraîches', 'Épinards'],
          vins: ['Meursault', 'Chassagne-Montrachet']
        },

        noix: {
          id: 'noix',
          name: 'Noix de veau',
          name_en: 'Veal Top Round',
          icon: '🐄',
          anatomie: "Muscle de la cuisse, tendre et maigre.",
          caracteristiques: {
            tendrete: 8,
            saveur: 7,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1-1.5kg en rôti',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'basse_temp', 'sousvide', 'cocotte', 'braise'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 120,
            a_point: 160,
            bien_cuit: 200
          },
          conseils: [
            "Barder pour éviter dessèchement",
            "Four 180°C",
            "Sous-vide 60°C 4h : moelleux parfait",
            "En cocotte avec petits légumes",
            "Rôtissoire pour croûte dorée"
          ],
          erreurs: [
            "Oublier de barder"
          ],
          sauces: ['Sauce crème', 'Jus de veau'],
          accompagnements: ['Légumes de saison', 'Gratin'],
          vins: ['Puligny-Montrachet', 'Chablis Grand Cru']
        },

        escalope: {
          id: 'escalope',
          name: 'Escalope de veau',
          name_en: 'Veal Cutlet',
          icon: '🐄',
          anatomie: "Tranche fine de la noix. Peut être panée.",
          caracteristiques: {
            tendrete: 8,
            saveur: 6,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '120-180g',
          epaisseur_ideale: '0.5-1 cm',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'plancha', 'paner', 'grill', 'wok'],
          donenessType: 'porc',
          temps_base_100g: {
            juste_cuit: 60,
            a_point: 90,
            bien_cuit: 120
          },
          conseils: [
            "Aplatir légèrement",
            "Cuisson rapide feu moyen",
            "Panée (Wiener Schnitzel) : classique",
            "À la plancha : rapide et saine",
            "En saltimbocca avec jambon et sauge"
          ],
          erreurs: [
            "Cuisson trop longue"
          ],
          sauces: ['Sauce citron', 'Sauce crème'],
          accompagnements: ['Pâtes', 'Riz', 'Salade'],
          vins: ['Riesling', 'Chablis']
        }
      }
    },

    mijoter: {
      name: 'À mijoter',
      name_en: 'Stewing Cuts',
      description: 'Pour blanquettes et osso buco',
      description_en: 'For blanquettes and osso buco',
      cuts: {
        jarret: {
          id: 'jarret',
          name: 'Jarret (osso buco)',
          name_en: 'Veal Shank (Osso Buco)',
          icon: '🐄',
          anatomie: "Tranches de jarret avec os à moelle. Spécialité italienne.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 4,
            prix: '€€'
          },
          poids_moyen: '300-400g/tranche',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'cocotte', 'mijoter', 'four', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '2-2.5h à 160°C',
          conseils: [
            "Ficeler pour maintenir la forme",
            "La moelle est un délice",
            "Sous-vide 65°C 24h : texture parfaite",
            "En cocotte fonte traditionnelle",
            "Gremolata fraîche en finition"
          ],
          erreurs: [
            "Cuisson insuffisante"
          ],
          sauces: ['Gremolata', 'Sauce tomate'],
          accompagnements: ['Risotto alla milanese', 'Polenta'],
          vins: ['Barolo', 'Barbaresco']
        },

        blanquette: {
          id: 'blanquette',
          name: 'Blanquette (épaule/poitrine)',
          name_en: 'Veal for Blanquette',
          icon: '🐄',
          anatomie: "Morceaux d'épaule et poitrine pour la blanquette.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'pocher', 'cocotte', 'mijoter', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '1.5-2h à feu doux',
          conseils: [
            "Ne jamais bouillir",
            "Cuisson frémissante",
            "Sauce liée à la crème et jaune d'œuf",
            "Pochée classiquement dans bouillon",
            "En cocotte à feu très doux",
            "Sous-vide 62°C 12h puis finition sauce"
          ],
          erreurs: [
            "Faire bouillir"
          ],
          sauces: ['Sauce blanquette'],
          accompagnements: ['Riz', 'Champignons', 'Petits oignons'],
          vins: ['Mâcon blanc', 'Saint-Véran']
        },

        tendron: {
          id: 'tendron',
          name: 'Tendron',
          name_en: 'Veal Flank',
          icon: '🐄',
          anatomie: "Partie du flanchet avec cartilages qui deviennent gélatineux.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '200-300g/pièce',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['braise', 'cocotte', 'mijoter', 'four', 'basse_temp', 'sousvide'],
          donenessType: null,
          temps_cuisson: '2-2.5h à 150°C',
          conseils: [
            "Devient onctueux après cuisson longue",
            "Les cartilages fondent",
            "Sous-vide 65°C 48h : texture incroyable",
            "En cocotte avec petits légumes",
            "Basse température 140°C 3h"
          ],
          erreurs: [
            "Cuisson trop courte"
          ],
          sauces: ['Jus de cuisson', 'Sauce aux légumes'],
          accompagnements: ['Carottes', 'Pommes de terre'],
          vins: ['Côtes-du-Rhône blanc', 'Crozes-Hermitage blanc']
        },

        ris: {
          id: 'ris',
          name: 'Ris de veau',
          name_en: 'Veal Sweetbreads',
          icon: '🐄',
          anatomie: "Thymus du veau, morceau de grande gastronomie.",
          caracteristiques: {
            tendrete: 10,
            saveur: 9,
            persillage: 3,
            prix: '€€€€'
          },
          poids_moyen: '200-300g/pièce',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'braise', 'saisir', 'gratin', 'four', 'sousvide'],
          donenessType: null,
          conseils: [
            "Dégorger 24h dans l'eau froide",
            "Blanchir puis presser",
            "Poêler au beurre mousseux",
            "Sous-vide 60°C 45min puis saisir",
            "En gratin avec sauce crème",
            "Saisir au beurre clarifié"
          ],
          erreurs: [
            "Ne pas dégorger",
            "Ne pas presser"
          ],
          sauces: ['Sauce aux morilles', 'Jus de veau'],
          accompagnements: ['Petits pois', 'Asperges'],
          vins: ['Grand Cru de Bourgogne blanc', 'Champagne']
        }
      }
    }
  },

  volaille: {
    poulet: {
      name: 'Poulet',
      name_en: 'Chicken',
      description: 'La volaille la plus populaire',
      description_en: 'The most popular poultry',
      cuts: {
        entier: {
          id: 'entier',
          name: 'Poulet entier',
          name_en: 'Whole Chicken',
          icon: '🍗',
          anatomie: "Poulet entier avec os, peau, 1.2-2.5 kg selon label.",
          caracteristiques: {
            tendrete: 8,
            saveur: 8,
            persillage: 3,
            prix: '€-€€'
          },
          poids_moyen: '1.2-2.5kg',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'rotissoire', 'broche', 'bbq_indirect', 'fumage', 'cocotte', 'basse_temp'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 150 // 20min/500g
          },
          conseils: [
            "20 min/500g à 180°C + 20 min à 200°C",
            "Beurre sous la peau des blancs",
            "Arroser toutes les 15-20 min",
            "74°C au blanc, 82°C à la cuisse",
            "À la broche : croustillant parfait",
            "Fumé au bois fruitier : savoureux",
            "En cocotte avec légumes racines"
          ],
          erreurs: [
            "Ne pas arroser",
            "Température insuffisante"
          ],
          sauces: ['Jus au citron', 'Sauce suprême'],
          accompagnements: ['Pommes de terre rôties', 'Légumes', 'Salade'],
          vins: ['Bourgogne blanc', 'Côtes-du-Rhône']
        },

        blancs: {
          id: 'blancs',
          name: 'Blancs de poulet',
          name_en: 'Chicken Breast',
          icon: '🍗',
          anatomie: "Poitrine désossée, très maigre.",
          caracteristiques: {
            tendrete: 7,
            saveur: 6,
            persillage: 1,
            prix: '€'
          },
          poids_moyen: '150-200g',
          hasBone: false,
          hasSkin: 'optional',
          canBeBarded: true,
          cuissons: ['poele', 'four', 'grill', 'sousvide', 'plancha', 'bbq', 'wok', 'paner', 'vapeur', 'basse_temp'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 120
          },
          conseils: [
            "Ne pas surcuire (devient sec)",
            "Avec peau : plus juteux",
            "Sous-vide 63°C 1h30 = parfait",
            "Au wok émincé : cuisine asiatique",
            "Pané croustillant : classique",
            "À la vapeur : ultra-sain"
          ],
          erreurs: [
            "Surcuisson (très fréquent)"
          ],
          sauces: ['Sauce crème', 'Sauce curry', 'Sauce citron'],
          accompagnements: ['Riz', 'Légumes verts', 'Pâtes'],
          vins: ['Chardonnay', 'Viognier']
        },

        cuisses: {
          id: 'cuisses',
          name: 'Cuisses de poulet',
          name_en: 'Chicken Thighs',
          icon: '🍗',
          anatomie: "Cuisse avec pilon et haut de cuisse. Plus goûteuse que le blanc.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '200-300g',
          hasBone: 'optional',
          hasSkin: 'optional',
          canBeBarded: false,
          cuissons: ['four', 'poele', 'braise', 'bbq', 'grill', 'cocotte', 'confit', 'friture', 'tajine'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 150
          },
          conseils: [
            "Supporte mieux la cuisson que le blanc",
            "Four 200°C pour peau croustillante",
            "Au BBQ marinées : délicieuses",
            "Confites dans la graisse : fondantes",
            "En tajine aux olives et citron",
            "Frites façon Southern fried"
          ],
          erreurs: [
            "Température finale insuffisante"
          ],
          sauces: ['Sauce BBQ', 'Sauce moutarde-miel'],
          accompagnements: ['Frites', 'Salade', 'Riz'],
          vins: ['Côtes-du-Rhône', 'Beaujolais']
        },

        ailes: {
          id: 'ailes',
          name: 'Ailes de poulet',
          name_en: 'Chicken Wings',
          icon: '🍗',
          anatomie: "Ailes avec manchon et aileron.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '80-120g/aile',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'friture', 'bbq', 'grill', 'fumage', 'plancha', 'wok'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 180
          },
          conseils: [
            "Four 200°C jusqu'à peau croustillante",
            "Mariner avant cuisson",
            "Frites Buffalo style : classique USA",
            "Fumées au bois de cerisier",
            "Au wok caramélisées : cuisine asiatique"
          ],
          erreurs: [
            "Pas assez croustillantes"
          ],
          sauces: ['Sauce buffalo', 'Sauce BBQ', 'Sauce teriyaki'],
          accompagnements: ['Céleri', 'Sauce blue cheese'],
          vins: ['Bière', 'Riesling']
        }
      }
    },

    canard: {
      name: 'Canard',
      name_en: 'Duck',
      description: 'Viande rouge de la volaille',
      description_en: 'Red meat of poultry',
      cuts: {
        magret: {
          id: 'magret',
          name: 'Magret de canard',
          name_en: 'Duck Breast',
          icon: '🦆',
          anatomie: "Filet de canard gras (gavé). Chair rouge comme le boeuf.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 6,
            prix: '€€'
          },
          poids_moyen: '350-450g',
          hasBone: false,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'bbq', 'plancha', 'saisir', 'sousvide', 'reverse_sear', 'cheminee', 'fumage'],
          donenessType: 'viande_rouge', // Exception: magret se cuit comme viande rouge
          temps_base_100g: {
            saignant: 90,
            a_point: 130,
            bien_cuit: 180
          },
          conseils: [
            "Quadriller le gras sans percer la chair",
            "Commencer côté gras à froid",
            "Servir saignant ou rosé",
            "Sous-vide 55°C 1h30 puis saisir côté gras",
            "Fumé légèrement : saveur exceptionnelle",
            "À la cheminée sur sarments"
          ],
          erreurs: [
            "Percer le gras (perte de jus)",
            "Surcuisson"
          ],
          sauces: ['Sauce au miel', 'Sauce aux cerises', 'Sauce au poivre'],
          accompagnements: ['Pommes sarladaises', 'Légumes grillés'],
          vins: ['Madiran', 'Cahors', 'Bergerac']
        },

        confit: {
          id: 'confit',
          name: 'Confit de canard',
          name_en: 'Duck Confit',
          icon: '🦆',
          anatomie: "Cuisses confites dans leur graisse. Conservation traditionnelle.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 7,
            prix: '€€'
          },
          poids_moyen: '200-250g/cuisse',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'poele', 'grill', 'bbq', 'confit'],
          donenessType: null,
          conseils: [
            "Réchauffer à four doux (150°C) puis griller",
            "Peau ultra-croustillante",
            "Saisir à la poêle côté peau",
            "Au BBQ pour réchauffer : fumé délicieux",
            "Confiture maison : 6h dans la graisse à 80°C"
          ],
          erreurs: [
            "Réchauffer trop fort"
          ],
          sauces: ['Jus de canard'],
          accompagnements: ['Pommes sarladaises', 'Salade', 'Haricots'],
          vins: ['Bergerac', 'Cahors']
        },

        canard_entier: {
          id: 'canard_entier',
          name: 'Canard entier',
          name_en: 'Whole Duck',
          icon: '🦆',
          anatomie: "Canard entier, à rôtir ou braiser.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 5,
            prix: '€€'
          },
          poids_moyen: '1.8-2.5kg',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'rotissoire', 'broche', 'braise', 'cocotte', 'fumage'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 130
          },
          conseils: [
            "Piquer la peau pour évacuer le gras",
            "Four 180°C, arroser souvent",
            "À la broche : spectaculaire",
            "Braisé au cidre : tradition normande",
            "Fumé au bois de pommier"
          ],
          erreurs: [
            "Ne pas piquer la peau"
          ],
          sauces: ['Sauce à l\'orange', 'Sauce aux navets'],
          accompagnements: ['Navets confits', 'Pommes de terre'],
          vins: ['Gewurztraminer', 'Pinot Gris']
        }
      }
    },

    dinde: {
      name: 'Dinde',
      name_en: 'Turkey',
      description: 'Volaille des fêtes',
      description_en: 'Holiday poultry',
      cuts: {
        entiere: {
          id: 'entiere',
          name: 'Dinde entière',
          name_en: 'Whole Turkey',
          icon: '🦃',
          anatomie: "Dinde entière pour les grandes tablées. 3-8kg.",
          caracteristiques: {
            tendrete: 7,
            saveur: 7,
            persillage: 2,
            prix: '€'
          },
          poids_moyen: '3-8kg',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'fumage', 'bbq_indirect', 'braise', 'basse_temp'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 130
          },
          conseils: [
            "Barder le blanc pour éviter dessèchement",
            "Farcir si désiré",
            "Arroser très régulièrement",
            "Fumée façon américaine : Thanksgiving",
            "BBQ indirect 4-5h : ultra-moelleuse",
            "Basse température 8h : sans stress"
          ],
          erreurs: [
            "Oublier de barder",
            "Four trop chaud"
          ],
          sauces: ['Sauce aux marrons', 'Gravy'],
          accompagnements: ['Marrons', 'Haricots verts', 'Purée'],
          vins: ['Bourgogne blanc', 'Champagne']
        },

        escalope: {
          id: 'escalope',
          name: 'Escalope de dinde',
          name_en: 'Turkey Cutlet',
          icon: '🦃',
          anatomie: "Tranche de blanc de dinde, très maigre.",
          caracteristiques: {
            tendrete: 7,
            saveur: 6,
            persillage: 1,
            prix: '€'
          },
          poids_moyen: '120-180g',
          hasBone: false,
          hasSkin: false,
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'plancha', 'paner', 'wok', 'papillote'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 100
          },
          conseils: [
            "Cuisson rapide",
            "Ne pas surcuire",
            "Panée : cordon bleu maison",
            "En papillote avec légumes",
            "Au wok émincée : cuisine express"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce crème', 'Sauce curry'],
          accompagnements: ['Riz', 'Pâtes', 'Légumes'],
          vins: ['Chardonnay', 'Viognier']
        },

        cuisse: {
          id: 'cuisse',
          name: 'Cuisse de dinde',
          name_en: 'Turkey Leg',
          icon: '🦃',
          anatomie: "Cuisse avec pilon. Plus goûteuse que le blanc.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 3,
            prix: '€'
          },
          poids_moyen: '500-800g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'braise', 'cocotte', 'bbq_indirect', 'fumage', 'basse_temp', 'confit'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 140
          },
          conseils: [
            "Cuisson lente pour tendreté",
            "Four 180°C",
            "Braisée aux champignons",
            "Confite dans la graisse",
            "Fumée au hickory : américain"
          ],
          erreurs: [
            "Four trop chaud"
          ],
          sauces: ['Sauce aux champignons'],
          accompagnements: ['Purée', 'Légumes'],
          vins: ['Côtes-du-Rhône']
        }
      }
    }
  },

  gibier: {
    grand_gibier: {
      name: 'Grand gibier',
      name_en: 'Large Game',
      description: 'Cervidés et sanglier',
      description_en: 'Deer and wild boar',
      cuts: {
        filet_cerf: {
          id: 'filet_cerf',
          name: 'Filet de cerf',
          name_en: 'Venison Tenderloin',
          icon: '🦌',
          anatomie: "Filet du cerf, muscle le plus tendre. Viande rouge foncée, goût prononcé.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 1,
            prix: '€€€€'
          },
          poids_moyen: '300-600g',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['poele', 'saisir', 'four', 'grill', 'plancha', 'bbq_indirect', 'sousvide', 'basse_temp', 'reverse_sear', 'cheminee'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 80,
            a_point: 110,
            bien_cuit: 150
          },
          conseils: [
            "Mariner 12-24h",
            "Barder impérativement",
            "Maximum 54°C à cœur",
            "Ne jamais dépasser à point",
            "Sous vide 52°C 2h : texture incroyable",
            "Reverse sear : four 120°C puis saisir",
            "BBQ indirect : fumé délicat",
            "Cheminée : authentique et rustique"
          ],
          erreurs: [
            "Surcuisson (sec comme du cuir)",
            "Ne pas barder",
            "Oublier la marinade"
          ],
          sauces: ['Sauce grand veneur', 'Sauce aux airelles', 'Sauce au genièvre'],
          accompagnements: ['Purée de céleri', 'Châtaignes', 'Cèpes'],
          vins: ['Chambertin', 'Hermitage', 'Côte-Rôtie']
        },

        filet_chevreuil: {
          id: 'filet_chevreuil',
          name: 'Filet de chevreuil',
          name_en: 'Roe Deer Tenderloin',
          icon: '🦌',
          anatomie: "Filet de chevreuil, plus fin et délicat que le cerf.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 1,
            prix: '€€€€'
          },
          poids_moyen: '150-300g',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['poele', 'saisir', 'four', 'grill', 'plancha', 'bbq_indirect', 'sousvide', 'basse_temp', 'reverse_sear'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 70,
            a_point: 100,
            bien_cuit: 140
          },
          conseils: [
            "Marinade courte 6-12h",
            "Cuisson express rosé 50-52°C",
            "Barder impérativement",
            "Sous vide 50°C 1h30 : parfait rosé",
            "Plancha très chaude : saisie parfaite",
            "BBQ indirect : cuisson douce fumée",
            "Grill braise chaude uniquement"
          ],
          erreurs: [
            "Surcuisson fatale"
          ],
          sauces: ['Sauce poivrade', 'Sauce aux fruits rouges'],
          accompagnements: ['Spätzle', 'Purée de céleri', 'Champignons'],
          vins: ['Pinot Noir Grand Cru', 'Gevrey-Chambertin']
        },

        selle_chevreuil: {
          id: 'selle_chevreuil',
          name: 'Selle de chevreuil',
          name_en: 'Roe Deer Saddle',
          icon: '🦌',
          anatomie: "Partie dorsale avec les deux filets. Pièce noble.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 1,
            prix: '€€€€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: true,
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'broche', 'bbq_indirect', 'basse_temp', 'sousvide', 'reverse_sear', 'cheminee'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 80,
            a_point: 110,
            bien_cuit: 150
          },
          conseils: [
            "Pièce de grand chef",
            "Saisir puis four 200°C",
            "Rotissoire : majestueux",
            "BBQ indirect : fumé noble",
            "Basse température 120°C : tendreté parfaite",
            "Reverse sear : résultat gastronomique",
            "À la broche : spectaculaire en tablée"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce grand veneur'],
          accompagnements: ['Purée de céleri', 'Poires pochées'],
          vins: ['Romanée-Conti', 'Chambertin']
        },

        gigot_cerf: {
          id: 'gigot_cerf',
          name: 'Gigot de cerf',
          name_en: 'Leg of Venison',
          icon: '🦌',
          anatomie: "Cuisse de cerf. Grosse pièce à rôtir.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 2,
            prix: '€€€'
          },
          poids_moyen: '2-4kg',
          hasBone: 'optional',
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'broche', 'braise', 'bbq_indirect', 'basse_temp', 'fumage', 'cheminee'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 90,
            a_point: 120,
            bien_cuit: 160
          },
          conseils: [
            "Mariner 24-48h",
            "Barder généreusement",
            "Four 180°C",
            "Rotissoire : cuisson régulière",
            "Braisé au vin : pour gigot moins tendre",
            "BBQ indirect 3-4h : goût fumé subtil",
            "Fumage au bois de hêtre : aromatique"
          ],
          erreurs: [
            "Marinade trop courte"
          ],
          sauces: ['Sauce grand veneur', 'Sauce aux cerises'],
          accompagnements: ['Purée de châtaignes', 'Chou rouge'],
          vins: ['Châteauneuf-du-Pape', 'Hermitage']
        },

        roti_sanglier: {
          id: 'roti_sanglier',
          name: 'Rôti de sanglier',
          name_en: 'Wild Boar Roast',
          icon: '🐗',
          anatomie: "Rôti dans le cuissot ou l'épaule. Viande foncée et puissante.",
          caracteristiques: {
            tendrete: 6,
            saveur: 10,
            persillage: 3,
            prix: '€€'
          },
          poids_moyen: '1-2kg',
          hasBone: false,
          canBeBarded: true,
          cuissons: ['four', 'braise', 'cocotte', 'bbq_indirect', 'fumage', 'basse_temp', 'rotissoire'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 100,
            a_point: 140,
            bien_cuit: 190
          },
          conseils: [
            "Mariner 24-48h obligatoire",
            "Vérifier 63°C minimum (trichinose)",
            "Barder généreusement",
            "Cocotte en fonte : cuisson parfaite",
            "BBQ indirect : fumé américain",
            "Fumage au bois dur : authentique",
            "Basse temp 130°C longue : tendre"
          ],
          erreurs: [
            "Pas assez mariné",
            "Pas assez cuit (sécurité)"
          ],
          sauces: ['Sauce poivrade', 'Sauce au vin rouge'],
          accompagnements: ['Polenta', 'Champignons', 'Chou'],
          vins: ['Madiran', 'Cahors', 'Bandol']
        },

        marcassin: {
          id: 'marcassin',
          name: 'Marcassin (jeune sanglier)',
          name_en: 'Young Wild Boar',
          icon: '🐗',
          anatomie: "Jeune sanglier (< 6 mois). Plus tendre et moins fort que l'adulte.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: 'Variable',
          hasBone: 'Variable',
          canBeBarded: true,
          cuissons: ['four', 'braise', 'rotissoire', 'cocotte', 'basse_temp', 'bbq_indirect'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 90,
            a_point: 120,
            bien_cuit: 160
          },
          conseils: [
            "Plus délicat que le sanglier adulte",
            "Marinade plus courte",
            "Rotissoire : spectaculaire entier",
            "Cocotte : cuisson douce",
            "Basse température : fondant",
            "Respecter 63°C minimum pour sécurité"
          ],
          erreurs: [
            "Traiter comme un sanglier adulte"
          ],
          sauces: ['Sauce au miel et épices'],
          accompagnements: ['Purée de céleri', 'Pommes'],
          vins: ['Côte-Rôtie', 'Cornas']
        }
      }
    },

    petit_gibier: {
      name: 'Petit gibier',
      name_en: 'Small Game',
      description: 'Lièvre et lapin de garenne',
      description_en: 'Hare and wild rabbit',
      cuts: {
        rable_lievre: {
          id: 'rable_lievre',
          name: 'Râble de lièvre',
          name_en: 'Hare Saddle',
          icon: '🐰',
          anatomie: "Partie dorsale du lièvre, très fine et savoureuse.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 1,
            prix: '€€€'
          },
          poids_moyen: '300-500g',
          hasBone: true,
          canBeBarded: true,
          cuissons: ['poele', 'saisir', 'four', 'sousvide', 'basse_temp', 'reverse_sear', 'grill'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 80,
            a_point: 110,
            bien_cuit: 150
          },
          conseils: [
            "Servir rosé",
            "Barder",
            "Sauce au sang traditionnelle",
            "Sous vide 52°C 1h30 : texture parfaite",
            "Reverse sear : saisie finale intense",
            "Grill braises chaudes : authentique"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce royale au sang', 'Sauce aux baies'],
          accompagnements: ['Spätzle', 'Purée de céleri'],
          vins: ['Pommard', 'Nuits-Saint-Georges']
        },

        civet_lievre: {
          id: 'civet_lievre',
          name: 'Civet de lièvre',
          name_en: 'Hare Stew',
          icon: '🐰',
          anatomie: "Morceaux pour civet (cuisses, épaules, coffre).",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1-1.5kg',
          hasBone: true,
          canBeBarded: false,
          cuissons: ['braise', 'cocotte', 'mijoter', 'tajine'],
          donenessType: null,
          temps_cuisson: '2-3h à feu doux',
          conseils: [
            "Mariner 24h au vin rouge",
            "Lier au sang en fin de cuisson",
            "Ne jamais bouillir après le sang",
            "Cocotte en fonte : idéal",
            "Mijoter 2-3h minimum",
            "Tajine aux pruneaux : version orientale"
          ],
          erreurs: [
            "Faire bouillir après ajout du sang"
          ],
          sauces: ['Sauce civet'],
          accompagnements: ['Tagliatelles', 'Pommes vapeur'],
          vins: ['Bourgogne rouge', 'Côtes-du-Rhône']
        },

        lapin_garenne: {
          id: 'lapin_garenne',
          name: 'Lapin de garenne',
          name_en: 'Wild Rabbit',
          icon: '🐰',
          anatomie: "Lapin sauvage, plus petit et plus goûteux que le lapin d'élevage.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1-1.5kg',
          hasBone: true,
          canBeBarded: true,
          cuissons: ['four', 'braise', 'cocotte', 'rotissoire', 'bbq_indirect', 'fumage', 'grill'],
          donenessType: null,
          conseils: [
            "Plus goûteux que le lapin fermier",
            "Mariner légèrement",
            "Rotissoire entier : spectaculaire",
            "Cocotte : cuisson lente parfaite",
            "BBQ indirect : arômes fumés",
            "Grill : pour les râbles uniquement"
          ],
          erreurs: [
            "Traiter comme un lapin d'élevage"
          ],
          sauces: ['Sauce moutarde', 'Sauce au thym'],
          accompagnements: ['Polenta', 'Haricots'],
          vins: ['Chinon', 'Bourgueil']
        }
      }
    },

    gibier_plume: {
      name: 'Gibier à plume',
      name_en: 'Game Birds',
      description: 'Faisan, perdrix, caille...',
      description_en: 'Pheasant, partridge, quail...',
      cuts: {
        faisan: {
          id: 'faisan',
          name: 'Faisan entier',
          name_en: 'Whole Pheasant',
          icon: '🐦',
          anatomie: "Gallinacé sauvage ou d'élevage. Chair fine et délicate.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'broche', 'cocotte', 'fumage', 'bbq_indirect', 'basse_temp', 'cheminee'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 140
          },
          conseils: [
            "Faisander 3-5 jours",
            "Barder impérativement",
            "Four 180°C",
            "Rotissoire : cuisson régulière",
            "À la broche : traditionnel",
            "Cocotte : avec chou et lard",
            "Fumé légèrement : subtil"
          ],
          erreurs: [
            "Ne pas barder",
            "Oublier le faisandage"
          ],
          sauces: ['Sauce au calvados', 'Sauce aux raisins'],
          accompagnements: ['Choux de Bruxelles', 'Champignons'],
          vins: ['Bourgogne rouge', 'Côtes-du-Rhône']
        },

        perdrix: {
          id: 'perdrix',
          name: 'Perdrix',
          name_en: 'Partridge',
          icon: '🐦',
          anatomie: "Petit gallinacé. Perdrix grise ou perdrix rouge.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '300-400g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          cuissons: ['four', 'braise', 'cocotte', 'rotissoire', 'bbq_indirect', 'fumage', 'cheminee'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 130
          },
          conseils: [
            "Barder",
            "1 perdrix par personne",
            "Cocotte au chou : classique",
            "Rotissoire : peau croustillante",
            "BBQ indirect : cuisson douce fumée",
            "Fumée légèrement : arômes subtils"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce au raisin', 'Sauce au chou'],
          accompagnements: ['Chou', 'Raisins'],
          vins: ['Pomerol', 'Saint-Émilion']
        },

        caille: {
          id: 'caille',
          name: 'Caille',
          name_en: 'Quail',
          icon: '🐦',
          anatomie: "Petit oiseau délicat. Souvent farcie.",
          caracteristiques: {
            tendrete: 8,
            saveur: 8,
            persillage: 3,
            prix: '€€'
          },
          poids_moyen: '150-200g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'poele', 'grill', 'plancha', 'bbq', 'bbq_indirect', 'broche', 'flambe'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 120
          },
          conseils: [
            "2 cailles par personne",
            "Peut être farcie au foie gras",
            "Cuisson rapide",
            "Grill ou plancha : aplatie (spatchcock)",
            "BBQ braises vives : rapide",
            "BBQ indirect : pour cailles entières",
            "Flambée au cognac : festif"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce au miel', 'Sauce aux raisins'],
          accompagnements: ['Raisins', 'Purée de céleri'],
          vins: ['Sauternes', 'Gewurztraminer']
        },

        becasse: {
          id: 'becasse',
          name: 'Bécasse',
          name_en: 'Woodcock',
          icon: '🐦',
          anatomie: "Oiseau mythique de la gastronomie. Se cuisine avec ses entrailles.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 2,
            prix: '€€€€'
          },
          poids_moyen: '250-350g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          cuissons: ['four', 'rotissoire', 'saisir', 'cheminee', 'flambe'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 100,
            a_point: 130
          },
          conseils: [
            "Ne pas vider (cuire avec intestins)",
            "Tartine des entrailles traditionnelle",
            "Pièce de grand chef",
            "Rotissoire : cuisson précise",
            "À la cheminée : authentique de chasse",
            "Flambée au cognac : rituel"
          ],
          erreurs: [
            "Vider l'oiseau"
          ],
          sauces: ['Sauce salmis'],
          accompagnements: ['Croûtons aux entrailles', 'Truffes'],
          vins: ['Romanée-Conti', 'Chambertin']
        },

        canard_sauvage: {
          id: 'canard_sauvage',
          name: 'Canard sauvage (colvert)',
          name_en: 'Wild Duck (Mallard)',
          icon: '🦆',
          anatomie: "Canard sauvage, plus petit et plus goûteux que le canard d'élevage.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: '800g-1.2kg',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'rotissoire', 'broche', 'bbq_indirect', 'saisir', 'poele', 'fumage', 'cheminee'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 90,
            a_point: 120
          },
          conseils: [
            "Servir rosé",
            "Goût plus prononcé que le canard gras",
            "Rotissoire : peau croustillante",
            "À la broche : spectaculaire",
            "BBQ indirect : fumé subtil",
            "Fumé au bois de pommier : délicieux",
            "Cheminée : goût de gibier authentique"
          ],
          erreurs: [
            "Surcuisson"
          ],
          sauces: ['Sauce bigarade', 'Sauce aux cerises'],
          accompagnements: ['Navets', 'Chou rouge'],
          vins: ['Pommard', 'Volnay']
        },

        pigeon: {
          id: 'pigeon',
          name: 'Pigeon (ramier)',
          name_en: 'Squab (Wood Pigeon)',
          icon: '🐦',
          anatomie: "Pigeon sauvage ou d'élevage. Chair rouge et fondante.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: '400-500g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          cuissons: ['four', 'poele', 'saisir', 'grill', 'bbq_indirect', 'sousvide', 'reverse_sear', 'braise', 'rotissoire'],
          donenessType: 'gibier',
          temps_base_100g: {
            rose: 80,
            a_point: 110
          },
          conseils: [
            "Servir rosé impérativement",
            "Les cuisses peuvent être braisées",
            "Sous vide 54°C : texture parfaite",
            "Reverse sear : rosé uniforme",
            "BBQ indirect : fumé délicat",
            "Rotissoire : peau craquante",
            "Grill : suprêmes uniquement"
          ],
          erreurs: [
            "Surcuisson des suprêmes"
          ],
          sauces: ['Jus de pigeon', 'Sauce aux petits pois'],
          accompagnements: ['Petits pois', 'Foie gras'],
          vins: ['Pomerol', 'Saint-Émilion']
        }
      }
    }
  }
};

// Export par défaut
export default cutsData;
