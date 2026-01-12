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
          anatomie_en: "Located under the spine, the tenderloin (psoas major) is the least used muscle, hence its exceptional tenderness. Divided into head, heart (tournedos) and tip (chateaubriand).",
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
            "Pour une tendreté optimale, viser 50-54°C à cœur",
            "Bardage recommandé pour les cuissons longues",
            "Saisir à feu très vif 2 min/côté",
            "Le filet ne bénéficie pas d'une longue cuisson",
            "Sous-vide à 54°C pendant 1h puis saisir",
            "Reverse sear : four 120°C puis saisir à la poêle"
          ],
          conseils_en: [
            "For optimal tenderness, aim for 50-54°C core temperature",
            "Barding recommended for long cooking",
            "Sear over very high heat 2 min/side",
            "Tenderloin doesn't benefit from long cooking",
            "Sous-vide at 54°C for 1h then sear",
            "Reverse sear: oven 120°C then sear in pan"
          ],
          erreurs: [
            "Au-delà de 58°C, la viande s'assèche progressivement",
            "Assaisonnement trop précoce : perte de jus",
            "Absence de repos après cuisson"
          ],
          erreurs_en: [
            "Above 58°C, the meat progressively dries out",
            "Seasoning too early: juice loss",
            "No resting after cooking"
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
          anatomie_en: "Cut from the rib section (6th to 12th rib), the ribeye contains the longissimus dorsi muscle. The generous marbling comes from intramuscular fat.",
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
          conseils_en: [
            "Prefer 3-4 cm thickness",
            "Baste with melted fat",
            "Sear on ultra-hot surface 250°C+",
            "Sous-vide 55°C 2h then sear with torch",
            "BBQ: direct zone then indirect"
          ],
          erreurs: [
            "Piquer avec une fourchette : perte de jus",
            "Cuisson directe sortie du frigo"
          ],
          erreurs_en: [
            "Piercing with a fork: juice loss",
            "Cooking directly from fridge"
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
          anatomie_en: "Ribeye with its bone, cut from the rib section. The bone protects the meat and adds flavor. Sharing cut (800g-1.5kg).",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 8,
            prix: '€€€'
          },
          poids_moyen: '800-1500g',
          epaisseur_ideale: '4-6 cm',
          hasBone: true, // toujours avec os
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Sear first in pan then finish in oven",
            "The bone conducts heat differently",
            "10-15 min rest required",
            "Oven temperature: 180°C after searing",
            "Indirect BBQ: 120°C for 2h then sear",
            "Reverse sear ideal for even cooking",
            "On spit: spectacular and flavorful"
          ],
          erreurs: [
            "Ne pas tenir compte de l'os dans le calcul",
            "Découper immédiatement après cuisson"
          ],
          erreurs_en: [
            "Not accounting for the bone in calculation",
            "Cutting immediately after cooking"
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
          anatomie_en: "Located along the spine, this is the strip loin. Less tender than the tenderloin but more flavorful thanks to its marbling.",
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
          conseils_en: [
            "Remove fat cap if too thick",
            "Excellent value for money",
            "Sous-vide 55°C 1h30 then sear quickly",
            "In wok: slice thinly for Asian stir-fry"
          ],
          erreurs: [
            "Confondre avec le filet (moins tendre)"
          ],
          erreurs_en: [
            "Confusing with tenderloin (less tender)"
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
          anatomie_en: "Abdominal muscle with long fibers. Two types: flank steak from the loin (more noble) and from the belly.",
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
          conseils_en: [
            "Rare cooking mandatory",
            "Slice against the grain",
            "Very high heat, short cooking",
            "In wok: slice into thin strips",
            "Flambéed with cognac: spectacular"
          ],
          erreurs: [
            "Surcuisson : devient très dure",
            "Trancher dans le sens des fibres"
          ],
          erreurs_en: [
            "Overcooking: becomes very tough",
            "Slicing with the grain"
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
          anatomie_en: "Diaphragm muscle, only one per animal. Coarse fibers but intense flavor. Butcher's cut.",
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
          conseils_en: [
            "Remove the central nerve before cooking",
            "Rare cooking mandatory",
            "Rest 5 min before serving",
            "The butcher's cut par excellence",
            "Flambéed with armagnac: sublime"
          ],
          erreurs: [
            "Laisser le nerf : morceau immangeable",
            "Cuisson au-delà de à point"
          ],
          erreurs_en: [
            "Leaving the nerve: inedible cut",
            "Cooking beyond medium"
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
          anatomie_en: "Another diaphragm muscle, twin of the hanger steak. Finer fibers, pronounced flavor.",
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
          conseils_en: [
            "Quick cooking over high heat",
            "Maximum medium",
            "Ideal for fajitas and tacos",
            "In wok with crunchy vegetables"
          ],
          erreurs: [
            "Surcuisson : texture caoutchouteuse"
          ],
          erreurs_en: [
            "Overcooking: rubbery texture"
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
          anatomie_en: "Rear part of the sirloin, above the thigh. Lean and flavorful meat.",
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
          conseils_en: [
            "Versatile: grilled, roasted or as steak",
            "Excellent everyday meat",
            "Sous-vide 56°C 2h for perfect tenderness",
            "Sliced in wok for Asian dishes"
          ],
          erreurs: [
            "Ne pas confondre avec le rond de gîte"
          ],
          erreurs_en: [
            "Do not confuse with eye of round"
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
          anatomie_en: "Shoulder muscle crossed by a gelatinous nerve. Perfect for pot-au-feu and braised dishes.",
          caracteristiques: {
            tendrete: 6,
            saveur: 8,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '500-1000g',
          hasBone: false,
          canBeBarded: false,
          isLargeCut: true,
          cuissons: ['braise', 'mijoter', 'cocotte', 'four', 'basse_temp', 'sousvide', 'bouillir', 'tajine'],
          donenessType: null, // cuisson longue
          temps_cuisson: '2-3h à 150°C',
          conseils: [
            "Le nerf central devient gélatineux à la cuisson",
            "Idéal pour pot-au-feu, daube, bourguignon",
            "Sous-vide 62°C pendant 24-48h : fondant",
            "En tajine avec épices marocaines"
          ],
          conseils_en: [
            "The central nerve becomes gelatinous when cooked",
            "Ideal for pot-au-feu, daube, bourguignon",
            "Sous-vide 62°C for 24-48h: melt-in-your-mouth",
            "In tagine with Moroccan spices"
          ],
          erreurs: [
            "Cuisson trop courte : dur",
            "Température trop élevée : viande sèche"
          ],
          erreurs_en: [
            "Cooking time too short: tough",
            "Temperature too high: dry meat"
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
          anatomie_en: "Jaw muscle, heavily worked thus gelatinous after long cooking.",
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
          conseils_en: [
            "Becomes melt-in-your-mouth after long cooking",
            "Braise in red wine",
            "Sous-vide 60°C 48h: incredible texture",
            "In cast iron Dutch oven for optimal results"
          ],
          erreurs: [
            "Cuisson insuffisante : caoutchouteux"
          ],
          erreurs_en: [
            "Insufficient cooking: rubbery"
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
          anatomie_en: "Braising cuts from the shoulder and thigh. Chuck, shank, leg.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '800-1200g',
          hasBone: false,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Cut into 4-5cm cubes",
            "Brown before braising",
            "Add bacon, carrots, onions, mushrooms",
            "In Le Creuset Dutch oven: traditional",
            "Sous-vide 60°C 24h then reduce the sauce"
          ],
          erreurs: [
            "Morceaux trop petits : dessèchement",
            "Feu trop fort : viande dure"
          ],
          erreurs_en: [
            "Pieces too small: drying out",
            "Heat too high: tough meat"
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
          anatomie_en: "Animal's tail, rich in collagen and flavor.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '1000-1500g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
          cuissons: ['braise', 'mijoter', 'cocotte', 'basse_temp', 'sousvide', 'bouillir'],
          donenessType: null,
          temps_cuisson: '3-4h à 140°C',
          conseils: [
            "Faire dégorger avant cuisson",
            "La viande doit se détacher de l'os",
            "En cocotte au four : fondant garanti",
            "Pour pot-au-feu : départ eau froide"
          ],
          conseils_en: [
            "Soak before cooking",
            "The meat should fall off the bone",
            "In Dutch oven in the oven: guaranteed melt-in-your-mouth",
            "For pot-au-feu: start with cold water"
          ],
          erreurs: [
            "Cuisson trop courte"
          ],
          erreurs_en: [
            "Cooking time too short"
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
          anatomie_en: "Ground beef, various fat percentages (5%, 15%, 20%).",
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
          anatomie_en: "Finely chopped raw meat. Use tenderloin, rump, or rump heart.",
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
          anatomie_en: "The most tender pork muscle, located along the spine.",
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
            rose: 180,
            a_point: 240,
            bien_cuit: 300
          },
          conseils: [
            "Saisir avant de rôtir",
            "Barder pour éviter le dessèchement",
            "Rosé (58-62°C) pour tendreté optimale, bien cuit à 68°C",
            "Sous-vide 58°C 2h puis saisir : texture parfaite",
            "Reverse sear : four 120°C puis plancha",
            "En croûte feuilletée : cuisson spectaculaire"
          ],
          conseils_en: [
            "Sear before roasting",
            "Bard to prevent drying out",
            "Pink (58-62°C) for optimal tenderness, well done at 68°C",
            "Sous-vide 58°C 2h then sear: perfect texture",
            "Reverse sear: oven 120°C then griddle",
            "In puff pastry crust: spectacular cooking"
          ],
          erreurs: [
            "Surcuisson : devient très sec au-delà de 70°C",
            "Oublier le repos"
          ],
          erreurs_en: [
            "Overcooking: becomes very dry above 70°C",
            "Forgetting to rest"
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
          anatomie_en: "Roasting cut from the neck or loin. Can be with or without bone.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '800-1500g',
          hasBone: 'optional',
          canBeBarded: true,
          isLargeCut: true,
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
          conseils_en: [
            "Oven at 180°C",
            "Baste regularly",
            "Let rest for 15 min",
            "On the spit: perfect crispiness",
            "Low temperature 120°C 3h: ultra-tender",
            "In Dutch oven with vegetables: complete dish"
          ],
          erreurs: [
            "Four trop chaud : extérieur sec",
            "Ne pas arroser"
          ],
          erreurs_en: [
            "Oven too hot: dry exterior",
            "Not basting"
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
          anatomie_en: "First and second ribs with their backbone. Festive cut.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 6,
            prix: '€€'
          },
          poids_moyen: '1000-2000g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Ask the butcher to french the bones",
            "Oven 200°C for golden crust",
            "Indirect BBQ: light smoking with fruitwood",
            "In herb crust: spectacular presentation",
            "On the spit: festive and delicious"
          ],
          erreurs: [
            "Oublier de protéger les os (papier alu)"
          ],
          erreurs_en: [
            "Forgetting to protect the bones (aluminum foil)"
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
          anatomie_en: "Slice of the rack including one rib. With or without tenderloin.",
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
          conseils_en: [
            "Sear fat side first",
            "Don't pierce to keep the juices",
            "In fireplace: natural smoky flavor",
            "Griddle: perfect and quick cooking",
            "Marinate 2h for more flavor"
          ],
          erreurs: [
            "Cuisson trop courte (sécurité)",
            "Piquer la viande"
          ],
          erreurs_en: [
            "Cooking too short (safety)",
            "Piercing the meat"
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
          anatomie_en: "Spare ribs with lots of meat between the bones. Ideal for BBQ.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '1000-1500g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Remove the back membrane",
            "Marinade or spicy rub",
            "Slow cooking mandatory",
            "Indirect BBQ 120°C 4-5h: American method",
            "Smoking with apple wood: sublime",
            "Sous-vide 65°C 24h then grill: ultra-tender"
          ],
          erreurs: [
            "Cuisson trop rapide",
            "Laisser la membrane"
          ],
          erreurs_en: [
            "Cooking too fast",
            "Leaving the membrane"
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
          anatomie_en: "Upper part of the neck, well-marbled and flavorful.",
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
          conseils_en: [
            "Excellent value for money",
            "Handles long cooking well",
            "Braised in Dutch oven: melt-in-your-mouth",
            "Marinated on BBQ: delicious",
            "Perfect for stewed dishes"
          ],
          erreurs: [
            "Ne pas la saisir assez"
          ],
          erreurs_en: [
            "Not searing it enough"
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
          anatomie_en: "Front cut, perfect for pulled pork and braised dishes.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '2000-3000g',
          hasBone: 'optional',
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Ideal for shredding",
            "Very slow cooking (low & slow)",
            "Meat should shred easily",
            "Smoking 6-8h with hickory: perfect pulled pork",
            "Sous-vide 68°C 24h: incredible texture",
            "In Dutch oven with Breton cider: classic"
          ],
          erreurs: [
            "Cuisson pas assez longue"
          ],
          erreurs_en: [
            "Cooking not long enough"
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
          anatomie_en: "Belly section, alternating layers of fat and lean meat.",
          caracteristiques: {
            tendrete: 8,
            saveur: 10,
            persillage: 9,
            prix: '€'
          },
          poids_moyen: '1000-2000g',
          hasBone: false,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Slow cooking for tenderness",
            "Finish at high temperature for crust",
            "Sous-vide 68°C 48h then grill: absolute melt-in-your-mouth",
            "Confit in its own fat: Southwest tradition",
            "Smoked: homemade bacon",
            "Indirect BBQ 4h: crispy pork belly"
          ],
          erreurs: [
            "Cuisson trop rapide"
          ],
          erreurs_en: [
            "Cooking too fast"
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
          anatomie_en: "Lower part of the leg, rich in collagen.",
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
          conseils_en: [
            "Meat should fall off the bone",
            "Excellent with sauerkraut",
            "In Dutch oven with beer: Alsatian tradition",
            "Boiled then grilled: crispy crust",
            "Smoked: German style"
          ],
          erreurs: [
            "Cuisson insuffisante"
          ],
          erreurs_en: [
            "Insufficient cooking"
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
          anatomie_en: "Whole lamb leg. Can be shortened (without shank) or whole.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 4,
            prix: '€€'
          },
          poids_moyen: '1500-3000g',
          hasBone: 'optional', // peut être désossé
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Stud with garlic and rosemary",
            "Oven at 200°C then lower to 180°C",
            "With bone: +15% cooking time",
            "On the spit: traditional celebration",
            "Low temperature 7h: guaranteed tenderness",
            "Sous-vide 58°C 24h then sear"
          ],
          erreurs: [
            "Four trop chaud tout le temps",
            "Ne pas laisser reposer"
          ],
          erreurs_en: [
            "Oven too hot the whole time",
            "Not letting it rest"
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
          anatomie_en: "The first ribs with their backbone. The ultimate festive cut.",
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
          conseils_en: [
            "French the bones",
            "Herb or mustard crust",
            "Sear before roasting",
            "Pistachio crust: gourmet",
            "Reverse sear: oven 120°C then sear",
            "On BBQ: quick sear only"
          ],
          erreurs: [
            "Oublier de protéger les os"
          ],
          erreurs_en: [
            "Forgetting to protect the bones"
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
          anatomie_en: "Front section, fattier than the leg, very flavorful.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 6,
            prix: '€€'
          },
          poids_moyen: '1200-2000g',
          hasBone: 'optional',
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Confit: 7h at 120°C",
            "The meat should shred easily",
            "In tagine: Moroccan spices",
            "Sous-vide 62°C 24h: melt-in-your-mouth",
            "Indirect BBQ over charcoal"
          ],
          erreurs: [
            "Cuisson trop courte pour le confit"
          ],
          erreurs_en: [
            "Cooking time too short for confit"
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
          anatomie_en: "Part of the loin comprising both tenderloins. Very noble cut.",
          caracteristiques: {
            tendrete: 9,
            saveur: 9,
            persillage: 4,
            prix: '€€€'
          },
          poids_moyen: '800-1200g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Top chef's cut",
            "Sear then oven at 200°C",
            "Sous-vide 56°C 3h: perfect precision",
            "Herb crust: stunning presentation",
            "Reverse sear for even cooking"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "First or second ribs, single or double.",
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
          conseils_en: [
            "High heat to sear",
            "2-3 min per side",
            "Over fireplace with vine cuttings: unique aroma",
            "Very hot plancha: perfect crust",
            "Marinate in olive oil and herbs"
          ],
          erreurs: [
            "Cuisson trop longue"
          ],
          erreurs_en: [
            "Cooking too long"
          ],
          sauces: ['Sauce à la menthe', 'Aïoli'],
          accompagnements: ['Ratatouille', 'Frites', 'Salade'],
          vins: ['Côtes-de-Provence', 'Tavel']
        },

        noisettes: {
          id: 'noisettes',
          name: 'Noisettes',
          name_en: 'Lamb Noisettes',
          icon: '🐑',
          anatomie: "Tranches rondes prélevées dans le filet. Sans os, très tendres.",
          anatomie_en: "Round slices cut from the tenderloin. Boneless, very tender.",
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
          conseils_en: [
            "Quick cooking",
            "Barded for more flavor",
            "Sous-vide 56°C 1h then sear",
            "On plancha: express sear",
            "Do not exceed medium-rare"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Neck section, becomes gelatinous when cooked.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 5,
            prix: '€'
          },
          poids_moyen: '500-1000g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Ideal for navarin",
            "Cut into pieces",
            "In Dutch oven with root vegetables",
            "In tagine with preserved lemons",
            "Sous-vide 62°C 24h: perfect texture"
          ],
          erreurs: [
            "Dégraisser insuffisamment"
          ],
          erreurs_en: [
            "Not removing enough fat"
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
          anatomie_en: "Belly section, marbled pieces.",
          caracteristiques: {
            tendrete: 6,
            saveur: 8,
            persillage: 6,
            prix: '€'
          },
          poids_moyen: '500-1000g',
          hasBone: false,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "For stews and tagines",
            "Remove fat well",
            "In Dutch oven with couscous",
            "Slow-roasted in oven",
            "Perfect for tagine with prunes"
          ],
          erreurs: [
            "Ne pas dégraisser"
          ],
          erreurs_en: [
            "Not removing fat"
          ],
          sauces: ['Sauce tajine'],
          accompagnements: ['Couscous', 'Légumes'],
          vins: ['Côtes-du-Roussillon', 'Minervois']
        },

        souris: {
          id: 'souris',
          name: 'Souris d\'agneau',
          name_en: 'Lamb Shank',
          icon: '🐑',
          anatomie: "Partie inférieure du gigot, autour du jarret. Très fondante après cuisson lente.",
          anatomie_en: "Lower part of the leg, around the shank. Very tender after slow cooking.",
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
          conseils_en: [
            "The meat should fall off the bone",
            "Braise with aromatics",
            "Sous-vide 62°C 24h: ultra-tender",
            "In Dutch oven with honey and spices",
            "In tagine with dried apricots"
          ],
          erreurs: [
            "Cuisson pas assez longue"
          ],
          erreurs_en: [
            "Not cooking long enough"
          ],
          sauces: ['Jus de cuisson réduit'],
          accompagnements: ['Purée', 'Légumes confits'],
          vins: ['Minervois', 'Corbières']
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
          anatomie_en: "Chop with bone and eye. Iconic cut.",
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
          donenessType: 'veau',
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
          conseils_en: [
            "Sear then oven at 180°C",
            "Veal stays pink in the center",
            "Do not overcook",
            "Sous-vide 60°C 2h then sear",
            "Low temperature 120°C 1h30",
            "On plancha with brown butter"
          ],
          erreurs: [
            "Cuisson trop forte"
          ],
          erreurs_en: [
            "Heat too high"
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
          anatomie_en: "Thigh muscle, tender and lean.",
          caracteristiques: {
            tendrete: 8,
            saveur: 7,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1000-1500g',
          hasBone: false,
          canBeBarded: true,
          isLargeCut: true,
          cuissons: ['four', 'rotissoire', 'basse_temp', 'sousvide', 'cocotte', 'braise'],
          donenessType: 'veau',
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
          conseils_en: [
            "Bard to prevent drying out",
            "Oven at 180°C",
            "Sous-vide 60°C 4h: perfectly tender",
            "In Dutch oven with small vegetables",
            "Rotisserie for golden crust"
          ],
          erreurs: [
            "Oublier de barder"
          ],
          erreurs_en: [
            "Forgetting to bard"
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
          anatomie_en: "Thin slice from the top round. Can be breaded.",
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
          donenessType: 'veau',
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
          conseils_en: [
            "Flatten slightly",
            "Quick cooking over medium heat",
            "Breaded (Wiener Schnitzel): classic",
            "On plancha: quick and healthy",
            "As saltimbocca with ham and sage"
          ],
          erreurs: [
            "Cuisson trop longue"
          ],
          erreurs_en: [
            "Cooking too long"
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
          anatomie_en: "Shank slices with marrow bone. Italian specialty.",
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
          conseils_en: [
            "Tie to maintain shape",
            "The marrow is a delicacy",
            "Sous-vide 65°C 24h: perfect texture",
            "In traditional cast iron Dutch oven",
            "Fresh gremolata to finish"
          ],
          erreurs: [
            "Cuisson insuffisante"
          ],
          erreurs_en: [
            "Insufficient cooking"
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
          anatomie_en: "Shoulder and breast pieces for blanquette.",
          caracteristiques: {
            tendrete: 7,
            saveur: 8,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '800-1200g',
          hasBone: false,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Never boil",
            "Simmer gently",
            "Sauce bound with cream and egg yolk",
            "Classically poached in broth",
            "In Dutch oven over very low heat",
            "Sous-vide 62°C 12h then finish with sauce"
          ],
          erreurs: [
            "Faire bouillir"
          ],
          erreurs_en: [
            "Boiling"
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
          anatomie_en: "Part of the flank with cartilage that becomes gelatinous.",
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
          conseils_en: [
            "Becomes silky after long cooking",
            "The cartilage melts",
            "Sous-vide 65°C 48h: incredible texture",
            "In Dutch oven with small vegetables",
            "Low temperature 140°C 3h"
          ],
          erreurs: [
            "Cuisson trop courte"
          ],
          erreurs_en: [
            "Cooking too short"
          ],
          sauces: ['Jus de cuisson', 'Sauce aux légumes'],
          accompagnements: ['Carottes', 'Pommes de terre'],
          vins: ['Côtes-du-Rhône blanc', 'Crozes-Hermitage blanc']
        }
      }
    },

    abats: {
      name: 'Abats',
      name_en: 'Offal',
      description: 'Morceaux nobles de grande gastronomie',
      description_en: 'Noble offal for fine dining',
      cuts: {
        ris: {
          id: 'ris',
          name: 'Ris de veau',
          name_en: 'Veal Sweetbreads',
          icon: '🐄',
          anatomie: "Thymus du veau, morceau de grande gastronomie.",
          anatomie_en: "Veal thymus, a fine dining delicacy.",
          caracteristiques: {
            tendrete: 10,
            saveur: 9,
            persillage: 3,
            prix: '€€€€'
          },
          poids_moyen: '200-300g/pièce',
          hasBone: false,
          canBeBarded: false,
          cuissons: ['poele', 'saisir', 'gratin', 'four', 'sousvide', 'braise'],
          donenessType: null,
          conseils: [
            "Dégorger 24h dans l'eau froide",
            "Blanchir puis presser",
            "Poêler au beurre mousseux",
            "Sous-vide 60°C 45min puis saisir",
            "En gratin avec sauce crème",
            "Saisir au beurre clarifié"
          ],
          conseils_en: [
            "Soak 24h in cold water",
            "Blanch then press",
            "Pan-fry in foaming butter",
            "Sous-vide 60°C 45min then sear",
            "As gratin with cream sauce",
            "Sear in clarified butter"
          ],
          erreurs: [
            "Ne pas dégorger",
            "Ne pas presser"
          ],
          erreurs_en: [
            "Not soaking",
            "Not pressing"
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
          anatomie_en: "Whole chicken with bones, skin, 1.2-2.5 kg depending on label.",
          caracteristiques: {
            tendrete: 8,
            saveur: 8,
            persillage: 3,
            prix: '€-€€'
          },
          poids_moyen: '1200-2500g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          isWholeAnimal: true,
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
          conseils_en: [
            "20 min/500g at 180°C + 20 min at 200°C",
            "Butter under the breast skin",
            "Baste every 15-20 min",
            "74°C in the breast, 82°C in the thigh",
            "On the spit: perfect crispiness",
            "Smoked with fruit wood: flavorful",
            "In a Dutch oven with root vegetables"
          ],
          erreurs: [
            "Ne pas arroser",
            "Température insuffisante"
          ],
          erreurs_en: [
            "Not basting",
            "Insufficient temperature"
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
          anatomie_en: "Boneless breast, very lean.",
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
          conseils_en: [
            "Do not overcook (becomes dry)",
            "With skin: juicier",
            "Sous-vide 63°C 1h30 = perfect",
            "Sliced in wok: Asian cuisine",
            "Crispy breaded: classic",
            "Steamed: ultra-healthy"
          ],
          erreurs: [
            "Surcuisson (très fréquent)"
          ],
          erreurs_en: [
            "Overcooking (very common)"
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
          anatomie: "Cuisse entière avec pilon et haut de cuisse, os et peau. Plus goûteuse que le blanc.",
          anatomie_en: "Whole thigh with drumstick and upper thigh, bone and skin. More flavorful than breast.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '200-300g',
          hasBone: true,
          hasSkin: true,
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
          conseils_en: [
            "Handles cooking better than breast",
            "Oven 200°C for crispy skin",
            "Marinated on BBQ: delicious",
            "Confit in fat: melt-in-your-mouth",
            "In tagine with olives and lemon",
            "Southern fried style"
          ],
          erreurs: [
            "Température finale insuffisante"
          ],
          erreurs_en: [
            "Insufficient final temperature"
          ],
          sauces: ['Sauce BBQ', 'Sauce moutarde-miel'],
          accompagnements: ['Frites', 'Salade', 'Riz'],
          vins: ['Côtes-du-Rhône', 'Beaujolais']
        },

        hauts_cuisses: {
          id: 'hauts_cuisses',
          name: 'Hauts de cuisses désossés',
          name_en: 'Boneless Chicken Thighs',
          icon: '🍗',
          anatomie: "Haut de cuisse désossé, avec ou sans peau. Très polyvalent.",
          anatomie_en: "Boneless upper thigh, with or without skin. Very versatile.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 4,
            prix: '€'
          },
          poids_moyen: '100-150g',
          hasBone: false,
          hasSkin: 'optional',
          canBeBarded: false,
          cuissons: ['poele', 'grill', 'bbq', 'plancha', 'wok', 'braise', 'cocotte', 'tajine', 'brochette'],
          donenessType: 'volaille',
          temps_base_100g: {
            bien_cuit: 120
          },
          conseils: [
            "Cuisson rapide grâce à l'absence d'os",
            "Parfait pour brochettes et satay",
            "Saisir côté peau d'abord si avec peau",
            "Au wok : émincés en 3-4 min",
            "Marinés puis grillés : très juteux",
            "Farcis et roulés : préparation élégante"
          ],
          conseils_en: [
            "Quick cooking thanks to boneless",
            "Perfect for skewers and satay",
            "Sear skin side first if with skin",
            "In wok: sliced in 3-4 min",
            "Marinated then grilled: very juicy",
            "Stuffed and rolled: elegant preparation"
          ],
          erreurs: [
            "Surcuisson (plus rapide que cuisses avec os)",
            "Oublier de saisir côté peau"
          ],
          erreurs_en: [
            "Overcooking (faster than bone-in thighs)",
            "Forgetting to sear skin side"
          ],
          sauces: ['Sauce teriyaki', 'Sauce satay', 'Sauce curry'],
          accompagnements: ['Riz', 'Nouilles', 'Légumes sautés'],
          vins: ['Gewurztraminer', 'Côtes-du-Rhône blanc']
        },

        ailes: {
          id: 'ailes',
          name: 'Ailes de poulet',
          name_en: 'Chicken Wings',
          icon: '🍗',
          anatomie: "Ailes avec manchon et aileron.",
          anatomie_en: "Wings with drumette and wingette.",
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
          conseils_en: [
            "Oven 200°C until crispy skin",
            "Marinate before cooking",
            "Fried Buffalo style: USA classic",
            "Smoked with cherry wood",
            "Caramelized in wok: Asian cuisine"
          ],
          erreurs: [
            "Pas assez croustillantes"
          ],
          erreurs_en: [
            "Not crispy enough"
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
          anatomie_en: "Fattened duck breast (force-fed). Red meat like beef.",
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
          conseils_en: [
            "Score the fat without piercing the flesh",
            "Start fat side down in cold pan",
            "Serve rare or medium-rare",
            "Sous-vide 55°C 1h30 then sear fat side",
            "Lightly smoked: exceptional flavor",
            "On fireplace over vine shoots"
          ],
          erreurs: [
            "Percer le gras (perte de jus)",
            "Surcuisson"
          ],
          erreurs_en: [
            "Piercing the fat (juice loss)",
            "Overcooking"
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
          anatomie_en: "Legs preserved in their own fat. Traditional preservation method.",
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
          conseils_en: [
            "Reheat in low oven (150°C) then grill",
            "Ultra-crispy skin",
            "Sear in pan skin side down",
            "On BBQ to reheat: delicious smoky flavor",
            "Homemade confit: 6h in fat at 80°C"
          ],
          erreurs: [
            "Réchauffer trop fort"
          ],
          erreurs_en: [
            "Reheating too hot"
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
          anatomie_en: "Whole duck, for roasting or braising.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 5,
            prix: '€€'
          },
          poids_moyen: '1800-2500g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          isWholeAnimal: true,
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
          conseils_en: [
            "Prick the skin to release fat",
            "Oven 180°C, baste often",
            "On the spit: spectacular",
            "Braised in cider: Norman tradition",
            "Smoked with apple wood"
          ],
          erreurs: [
            "Ne pas piquer la peau"
          ],
          erreurs_en: [
            "Not pricking the skin"
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
          anatomie_en: "Whole turkey for large gatherings. 3-8kg.",
          caracteristiques: {
            tendrete: 7,
            saveur: 7,
            persillage: 2,
            prix: '€'
          },
          poids_moyen: '3000-8000g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          isWholeAnimal: true,
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
          conseils_en: [
            "Bard the breast to prevent drying",
            "Stuff if desired",
            "Baste very regularly",
            "American-style smoked: Thanksgiving",
            "Indirect BBQ 4-5h: ultra-moist",
            "Low temperature 8h: stress-free"
          ],
          erreurs: [
            "Oublier de barder",
            "Four trop chaud"
          ],
          erreurs_en: [
            "Forgetting to bard",
            "Oven too hot"
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
          anatomie_en: "Turkey breast slice, very lean.",
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
          conseils_en: [
            "Quick cooking",
            "Do not overcook",
            "Breaded: homemade cordon bleu",
            "In parchment with vegetables",
            "Sliced in wok: express cooking"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Thigh with drumstick. More flavorful than breast.",
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
          conseils_en: [
            "Slow cooking for tenderness",
            "Oven 180°C",
            "Braised with mushrooms",
            "Confit in fat",
            "Smoked with hickory: American style"
          ],
          erreurs: [
            "Four trop chaud"
          ],
          erreurs_en: [
            "Oven too hot"
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
          anatomie_en: "Deer tenderloin, the most tender muscle. Dark red meat, pronounced flavor.",
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
          conseils_en: [
            "Marinate 12-24h",
            "Barding is essential",
            "Maximum 54°C internal temperature",
            "Never cook beyond medium",
            "Sous vide 52°C 2h: incredible texture",
            "Reverse sear: oven 120°C then sear",
            "Indirect BBQ: delicate smoke",
            "Fireplace: authentic and rustic"
          ],
          erreurs: [
            "Surcuisson (sec comme du cuir)",
            "Ne pas barder",
            "Oublier la marinade"
          ],
          erreurs_en: [
            "Overcooking (dry as leather)",
            "Not barding",
            "Forgetting to marinate"
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
          anatomie_en: "Roe deer tenderloin, finer and more delicate than venison.",
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
          conseils_en: [
            "Short marinade 6-12h",
            "Quick cooking to pink 50-52°C",
            "Barding is essential",
            "Sous vide 50°C 1h30: perfect pink",
            "Very hot plancha: perfect sear",
            "Indirect BBQ: gentle smoky cooking",
            "Grill on hot embers only"
          ],
          erreurs: [
            "Surcuisson fatale"
          ],
          erreurs_en: [
            "Overcooking is fatal"
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
          anatomie_en: "Dorsal section with both tenderloins. Noble cut.",
          caracteristiques: {
            tendrete: 9,
            saveur: 10,
            persillage: 1,
            prix: '€€€€'
          },
          poids_moyen: '800-1200g',
          hasBone: true,
          canBeBarded: true,
          isLargeCut: true,
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
          conseils_en: [
            "Top chef's cut",
            "Sear then oven 200°C",
            "Rotisserie: majestic",
            "Indirect BBQ: noble smoke",
            "Low temperature 120°C: perfect tenderness",
            "Reverse sear: gourmet result",
            "On the spit: spectacular for gatherings"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Deer thigh. Large roasting cut.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 2,
            prix: '€€€'
          },
          poids_moyen: '2000-4000g',
          hasBone: 'optional',
          canBeBarded: true,
          isLargeCut: true,
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
          conseils_en: [
            "Marinate 24-48h",
            "Bard generously",
            "Oven 180°C",
            "Rotisserie: even cooking",
            "Braised in wine: for less tender leg",
            "Indirect BBQ 3-4h: subtle smoky flavor",
            "Beechwood smoking: aromatic"
          ],
          erreurs: [
            "Marinade trop courte"
          ],
          erreurs_en: [
            "Marinade too short"
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
          anatomie_en: "Roast from the leg or shoulder. Dark and intense meat.",
          caracteristiques: {
            tendrete: 6,
            saveur: 10,
            persillage: 3,
            prix: '€€'
          },
          poids_moyen: '1000-2000g',
          hasBone: false,
          canBeBarded: true,
          isLargeCut: true,
          cuissons: ['four', 'braise', 'cocotte', 'bbq_indirect', 'fumage', 'basse_temp', 'rotissoire'],
          donenessType: 'sanglier',
          temps_base_100g: {
            bien_cuit: 150,
            tres_bien_cuit: 190
          },
          conseils: [
            "Mariner 24-48h obligatoire",
            "⚠️ OBLIGATOIRE : 71°C minimum (risque trichinose)",
            "Barder généreusement",
            "Cocotte en fonte : cuisson parfaite",
            "BBQ indirect : fumé américain",
            "Fumage au bois dur : authentique",
            "Basse temp 130°C longue : tendre"
          ],
          conseils_en: [
            "Marinate 24-48h mandatory",
            "MANDATORY: 71°C minimum (trichinosis risk)",
            "Bard generously",
            "Cast iron Dutch oven: perfect cooking",
            "Indirect BBQ: American smoke",
            "Hardwood smoking: authentic",
            "Low temp 130°C long cooking: tender"
          ],
          erreurs: [
            "Pas assez mariné",
            "Pas assez cuit (DANGER : trichinose)"
          ],
          erreurs_en: [
            "Not marinated enough",
            "Not cooked enough (DANGER: trichinosis)"
          ],
          sauces: ['Sauce poivrade', 'Sauce au vin rouge'],
          accompagnements: ['Polenta', 'Champignons', 'Chou'],
          vins: ['Madiran', 'Cahors', 'Bandol']
        },

        marcassin: {
          id: 'marcassin',
          name: 'Marcassin entier',
          name_en: 'Whole Young Wild Boar',
          icon: '🐗',
          anatomie: "Jeune sanglier (< 6 mois, 3-8kg). Chair plus tendre et saveur moins prononcée que l'adulte. Se cuisine entier ou en morceaux.",
          anatomie_en: "Young wild boar (< 6 months, 3-8kg). More tender flesh and milder flavor than adult. Cooked whole or in pieces.",
          caracteristiques: {
            tendrete: 8,
            saveur: 9,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: '3000-8000g',
          hasBone: true,
          canBeBarded: true,
          isWholeAnimal: true,
          cuissons: ['four', 'braise', 'rotissoire', 'cocotte', 'basse_temp', 'bbq_indirect'],
          donenessType: 'sanglier',
          temps_base_100g: {
            bien_cuit: 130,
            tres_bien_cuit: 160
          },
          conseils: [
            "Plus délicat que le sanglier adulte",
            "Marinade 12-24h (plus courte que sanglier adulte)",
            "Rotissoire : spectaculaire entier pour 6-10 personnes",
            "Cocotte : cuisson douce 3-4h",
            "Basse température : fondant",
            "⚠️ OBLIGATOIRE : Température minimum 71°C à cœur (risque trichinose)"
          ],
          conseils_en: [
            "More delicate than adult wild boar",
            "Marinade 12-24h (shorter than adult boar)",
            "Rotisserie: spectacular whole for 6-10 people",
            "Dutch oven: gentle cooking 3-4h",
            "Low temperature: melt-in-mouth",
            "MANDATORY: Minimum 71°C internal temperature (trichinosis risk)"
          ],
          erreurs: [
            "Cuire rosé ou à point (risque sanitaire !)",
            "Traiter comme un sanglier adulte",
            "Oublier la marinade"
          ],
          erreurs_en: [
            "Cooking pink or medium (health risk!)",
            "Treating like adult wild boar",
            "Forgetting to marinate"
          ],
          sauces: ['Sauce au miel et épices', 'Sauce grand veneur', 'Sauce aux fruits rouges'],
          accompagnements: ['Purée de céleri', 'Pommes caramélisées', 'Chou rouge braisé'],
          vins: ['Côte-Rôtie', 'Cornas', 'Hermitage']
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
          anatomie_en: "Dorsal section of hare, very fine and flavorful.",
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
          conseils_en: [
            "Serve pink",
            "Bard",
            "Traditional blood sauce",
            "Sous vide 52°C 1h30: perfect texture",
            "Reverse sear: intense final sear",
            "Grill on hot embers: authentic"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Pieces for stew (thighs, shoulders, body).",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1000-1500g',
          hasBone: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Marinate 24h in red wine",
            "Bind with blood at end of cooking",
            "Never boil after adding blood",
            "Cast iron Dutch oven: ideal",
            "Simmer 2-3h minimum",
            "Tagine with prunes: oriental version"
          ],
          erreurs: [
            "Faire bouillir après ajout du sang"
          ],
          erreurs_en: [
            "Boiling after adding blood"
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
          anatomie_en: "Wild rabbit, smaller and more flavorful than farmed rabbit.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '1000-1500g',
          hasBone: true,
          canBeBarded: true,
          isLargeCut: true,
          cuissons: ['four', 'braise', 'cocotte', 'rotissoire', 'bbq_indirect', 'fumage', 'grill'],
          donenessType: 'volaille',
          conseils: [
            "Plus goûteux que le lapin fermier",
            "Mariner légèrement",
            "Rotissoire entier : spectaculaire",
            "Cocotte : cuisson lente parfaite",
            "BBQ indirect : arômes fumés",
            "Grill : pour les râbles uniquement"
          ],
          conseils_en: [
            "More flavorful than farmed rabbit",
            "Marinate lightly",
            "Whole on rotisserie: spectacular",
            "Dutch oven: perfect slow cooking",
            "Indirect BBQ: smoky aromas",
            "Grill: for saddles only"
          ],
          erreurs: [
            "Traiter comme un lapin d'élevage"
          ],
          erreurs_en: [
            "Treating like farmed rabbit"
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
      icon: '🦆',
      description: 'Faisan, perdrix, caille...',
      description_en: 'Pheasant, partridge, quail...',
      cuts: {
        faisan: {
          id: 'faisan',
          name: 'Faisan entier',
          name_en: 'Whole Pheasant',
          icon: '🐦',
          anatomie: "Gallinacé sauvage ou d'élevage. Chair fine et délicate.",
          anatomie_en: "Wild or farm-raised game bird. Fine and delicate meat.",
          caracteristiques: {
            tendrete: 7,
            saveur: 9,
            persillage: 2,
            prix: '€€'
          },
          poids_moyen: '800-1200g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: true,
          isLargeCut: true,
          cuissons: ['four', 'rotissoire', 'broche', 'cocotte', 'fumage', 'bbq_indirect', 'basse_temp', 'cheminee'],
          donenessType: 'gibier',
          temps_base_100g: {
            a_point: 120,
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
          conseils_en: [
            "Hang for 3-5 days",
            "Barding is essential",
            "Oven 180°C",
            "Rotisserie: even cooking",
            "On the spit: traditional",
            "Dutch oven: with cabbage and bacon",
            "Lightly smoked: subtle"
          ],
          erreurs: [
            "Ne pas barder",
            "Oublier le faisandage"
          ],
          erreurs_en: [
            "Not barding",
            "Forgetting to hang"
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
          anatomie_en: "Small game bird. Grey or red-legged partridge.",
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
          donenessType: 'gibier',
          temps_base_100g: {
            a_point: 110,
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
          conseils_en: [
            "Bard",
            "1 partridge per person",
            "Dutch oven with cabbage: classic",
            "Rotisserie: crispy skin",
            "Indirect BBQ: gentle smoky cooking",
            "Lightly smoked: subtle aromas"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Small delicate bird. Often stuffed.",
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
          conseils_en: [
            "2 quails per person",
            "Can be stuffed with foie gras",
            "Quick cooking",
            "Grill or plancha: flattened (spatchcock)",
            "BBQ on hot embers: quick",
            "Indirect BBQ: for whole quails",
            "Flambeed with cognac: festive"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Legendary bird in gastronomy. Cooked with its innards.",
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
          conseils_en: [
            "Do not gut (cook with innards)",
            "Traditional innards on toast",
            "Top chef's cut",
            "Rotisserie: precise cooking",
            "Fireplace: authentic hunting style",
            "Flambeed with cognac: ritual"
          ],
          erreurs: [
            "Vider l'oiseau"
          ],
          erreurs_en: [
            "Gutting the bird"
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
          anatomie_en: "Wild duck, smaller and more flavorful than farmed duck.",
          caracteristiques: {
            tendrete: 7,
            saveur: 10,
            persillage: 3,
            prix: '€€€'
          },
          poids_moyen: '800-1200g',
          hasBone: true,
          hasSkin: true,
          canBeBarded: false,
          isLargeCut: true,
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
          conseils_en: [
            "Serve pink",
            "More pronounced flavor than fattened duck",
            "Rotisserie: crispy skin",
            "On the spit: spectacular",
            "Indirect BBQ: subtle smoke",
            "Applewood smoked: delicious",
            "Fireplace: authentic game flavor"
          ],
          erreurs: [
            "Surcuisson"
          ],
          erreurs_en: [
            "Overcooking"
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
          anatomie_en: "Wild or farm-raised pigeon. Red and tender meat.",
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
          conseils_en: [
            "Must be served pink",
            "Legs can be braised",
            "Sous vide 54°C: perfect texture",
            "Reverse sear: uniform pink",
            "Indirect BBQ: delicate smoke",
            "Rotisserie: crispy skin",
            "Grill: breasts only"
          ],
          erreurs: [
            "Surcuisson des suprêmes"
          ],
          erreurs_en: [
            "Overcooking the breasts"
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
