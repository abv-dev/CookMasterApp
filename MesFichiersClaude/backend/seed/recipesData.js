// CookMaster - Base de données des recettes
// 2-3 recettes par morceau : classique, élaborée, originale

const recipesData = {
  // ==================== BOEUF ====================
  boeuf: {
    filet: [
      {
        nom: "Filet de bœuf poêlé classique",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 10,
        tempsCuisson: 12,
        portions: 2,
        description: "Le filet de bœuf dans sa plus simple expression, saisi à la perfection.",
        ingredients: [
          { ingredient: "Filet de bœuf", quantite: "400g", note: "2 pavés de 200g" },
          { ingredient: "Beurre", quantite: "30g" },
          { ingredient: "Huile d'olive", quantite: "2 c. à soupe" },
          { ingredient: "Fleur de sel", quantite: "1 c. à café" },
          { ingredient: "Poivre du moulin", quantite: "selon goût" },
          { ingredient: "Thym frais", quantite: "2 branches" },
          { ingredient: "Ail", quantite: "2 gousses", note: "écrasées en chemise" }
        ],
        etapes: [
          "Sortir le filet du réfrigérateur 30 minutes avant la cuisson pour qu'il soit à température ambiante.",
          "Sécher soigneusement la viande avec du papier absorbant des deux côtés.",
          "Faire chauffer une poêle en fonte à feu vif avec l'huile d'olive jusqu'à ce qu'elle fume légèrement.",
          "Saler généreusement la viande juste avant de la déposer dans la poêle.",
          "Saisir 2-3 minutes par face sans y toucher pour obtenir une belle croûte dorée.",
          "Ajouter le beurre, le thym et l'ail écrasé. Arroser la viande avec le beurre moussant.",
          "Pour une cuisson saignante, retirer quand la température à cœur atteint 50°C.",
          "Laisser reposer 5 minutes sur une planche, recouvert d'aluminium.",
          "Poivrer au moment de servir, trancher si désiré et napper du jus de repos."
        ],
        conseils: [
          "Ne jamais piquer la viande pour vérifier la cuisson - utilisez un thermomètre",
          "Le beurre ajouté en fin de cuisson doit mousser, pas brûler",
          "Le repos est essentiel : il permet aux jus de se redistribuer"
        ],
        cookingHelper: {
          method: "poele",
          doneness: "saignant",
          temperature: null
        }
      },
      {
        nom: "Filet de bœuf Wellington",
        type: "elaboree",
        difficulte: "difficile",
        tempsPreparation: 45,
        tempsCuisson: 35,
        portions: 6,
        description: "Le mythique Wellington : filet en croûte de pâte feuilletée, duxelles de champignons et foie gras.",
        ingredients: [
          { ingredient: "Filet de bœuf", quantite: "1kg", note: "paré et ficelé" },
          { ingredient: "Pâte feuilletée", quantite: "500g", note: "pur beurre" },
          { ingredient: "Champignons de Paris", quantite: "500g" },
          { ingredient: "Échalotes", quantite: "3" },
          { ingredient: "Foie gras mi-cuit", quantite: "150g", note: "optionnel" },
          { ingredient: "Jambon de Parme", quantite: "8 tranches" },
          { ingredient: "Moutarde de Dijon", quantite: "2 c. à soupe" },
          { ingredient: "Jaune d'œuf", quantite: "2", note: "pour la dorure" },
          { ingredient: "Beurre", quantite: "50g" },
          { ingredient: "Sel, poivre", quantite: "selon goût" }
        ],
        etapes: [
          "Saisir le filet de tous les côtés dans une poêle très chaude. Laisser refroidir puis badigeonner de moutarde.",
          "Préparer la duxelles : hacher finement les champignons et les échalotes. Faire revenir à feu vif jusqu'à évaporation complète de l'eau. Assaisonner et laisser refroidir.",
          "Sur un film plastique, disposer les tranches de jambon de Parme en les faisant se chevaucher.",
          "Étaler la duxelles sur le jambon, puis le foie gras en tranches.",
          "Déposer le filet et rouler en serrant bien. Réfrigérer 30 minutes.",
          "Étaler la pâte feuilletée. Retirer le film du rouleau et déposer sur la pâte.",
          "Envelopper hermétiquement, souder les bords. Réfrigérer 30 minutes.",
          "Badigeonner de jaune d'œuf, dessiner des motifs à la fourchette.",
          "Cuire au four préchauffé à 200°C pendant 25-35 minutes selon la cuisson souhaitée.",
          "Laisser reposer 10 minutes avant de trancher."
        ],
        conseils: [
          "Le filet doit être complètement froid avant l'emballage en pâte",
          "La duxelles doit être très sèche pour ne pas détremper la pâte",
          "Utilisez un thermomètre : 52°C pour saignant, 58°C pour à point"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "saignant",
          temperature: 200
        }
      },
      {
        nom: "Tataki de bœuf à la japonaise",
        type: "originale",
        difficulte: "moyen",
        tempsPreparation: 20,
        tempsCuisson: 5,
        portions: 4,
        description: "Filet de bœuf saisi, tranché fin, marinade ponzu et garnitures fraîches.",
        ingredients: [
          { ingredient: "Filet de bœuf", quantite: "400g", note: "en un seul morceau" },
          { ingredient: "Sauce ponzu", quantite: "80ml" },
          { ingredient: "Huile de sésame", quantite: "2 c. à soupe" },
          { ingredient: "Gingembre frais", quantite: "30g", note: "râpé" },
          { ingredient: "Ciboule", quantite: "4 tiges", note: "émincées" },
          { ingredient: "Graines de sésame", quantite: "2 c. à soupe" },
          { ingredient: "Radis daikon", quantite: "100g", note: "râpé" },
          { ingredient: "Shiso ou coriandre", quantite: "quelques feuilles" },
          { ingredient: "Piment shichimi", quantite: "selon goût" }
        ],
        etapes: [
          "Sortir le filet 20 minutes avant. Sécher parfaitement.",
          "Chauffer une poêle en fonte à feu très vif avec l'huile de sésame.",
          "Saisir le filet 30 secondes par face maximum - l'intérieur doit rester complètement cru.",
          "Plonger immédiatement dans un bain d'eau glacée pour stopper la cuisson.",
          "Sécher et réfrigérer 30 minutes minimum.",
          "Trancher très finement (3-4mm) avec un couteau bien aiguisé.",
          "Disposer les tranches en rosace sur les assiettes.",
          "Préparer la sauce : mélanger le ponzu et le gingembre râpé.",
          "Garnir de daikon, ciboule, sésame et shiso. Arroser de sauce."
        ],
        conseils: [
          "Le filet doit être de qualité irréprochable car servi quasiment cru",
          "Congeler légèrement (20 min) facilite le tranchage fin",
          "Servir très frais, c'est une entrée idéale en été"
        ],
        cookingHelper: {
          method: "poele",
          doneness: "bleu",
          temperature: null
        }
      }
    ],

    entrecote: [
      {
        nom: "Entrecôte grillée maître d'hôtel",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 15,
        tempsCuisson: 10,
        portions: 2,
        description: "L'entrecôte de bistrot par excellence, couronnée d'un beurre persillé fondant.",
        ingredients: [
          { ingredient: "Entrecôte", quantite: "600g", note: "épaisseur 3cm" },
          { ingredient: "Beurre mou", quantite: "100g" },
          { ingredient: "Persil frais", quantite: "1 bouquet" },
          { ingredient: "Échalote", quantite: "1 petite" },
          { ingredient: "Jus de citron", quantite: "1 c. à café" },
          { ingredient: "Fleur de sel", quantite: "selon goût" },
          { ingredient: "Poivre noir", quantite: "selon goût" }
        ],
        etapes: [
          "Préparer le beurre maître d'hôtel : mixer le beurre mou avec le persil haché, l'échalote finement ciselée et le jus de citron. Former un boudin dans du film plastique et réfrigérer.",
          "Sortir l'entrecôte 1 heure avant la cuisson.",
          "Préchauffer le grill ou la poêle à feu très vif.",
          "Sécher la viande et badigeonner légèrement d'huile.",
          "Saler généreusement juste avant la cuisson.",
          "Saisir 3-4 minutes par face pour une cuisson saignante.",
          "Laisser reposer 5 minutes sous aluminium.",
          "Servir avec une rondelle de beurre maître d'hôtel sur le dessus."
        ],
        conseils: [
          "Le beurre composé peut se préparer à l'avance et se congèle très bien",
          "Ne pas retourner la viande plus d'une fois",
          "Accompagner de frites maison et salade verte"
        ],
        cookingHelper: {
          method: "grill",
          doneness: "saignant",
          temperature: 250
        }
      },
      {
        nom: "Entrecôte sauce au poivre",
        type: "elaboree",
        difficulte: "moyen",
        tempsPreparation: 10,
        tempsCuisson: 20,
        portions: 2,
        description: "Entrecôte généreuse nappée d'une sauce au poivre flambée au cognac.",
        ingredients: [
          { ingredient: "Entrecôte", quantite: "700g" },
          { ingredient: "Poivre noir en grains", quantite: "2 c. à soupe" },
          { ingredient: "Poivre vert", quantite: "2 c. à soupe" },
          { ingredient: "Cognac", quantite: "50ml" },
          { ingredient: "Crème fraîche épaisse", quantite: "200ml" },
          { ingredient: "Fond de veau", quantite: "100ml" },
          { ingredient: "Échalotes", quantite: "2" },
          { ingredient: "Beurre", quantite: "40g" },
          { ingredient: "Sel", quantite: "selon goût" }
        ],
        etapes: [
          "Concasser grossièrement le poivre noir au mortier.",
          "Saisir l'entrecôte dans une poêle chaude avec un peu de beurre, 3-4 min par face.",
          "Réserver la viande au chaud sous aluminium.",
          "Dans la même poêle, faire suer les échalotes ciselées.",
          "Déglacer au cognac et flamber.",
          "Ajouter le fond de veau, la crème et les deux poivres.",
          "Laisser réduire 5 minutes jusqu'à consistance nappante.",
          "Rectifier l'assaisonnement et monter au beurre froid.",
          "Napper l'entrecôte de sauce et servir immédiatement."
        ],
        conseils: [
          "Ne pas trop réduire la sauce, elle épaissit en refroidissant",
          "Le flambage élimine l'alcool et concentre les arômes",
          "Servir avec un gratin dauphinois"
        ],
        cookingHelper: {
          method: "poele",
          doneness: "a_point",
          temperature: null
        }
      }
    ],

    cote_de_boeuf: [
      {
        nom: "Côte de bœuf au barbecue",
        type: "classique",
        difficulte: "moyen",
        tempsPreparation: 15,
        tempsCuisson: 45,
        portions: 4,
        description: "La pièce royale du barbecue, saisie à feu vif puis cuite en indirect.",
        ingredients: [
          { ingredient: "Côte de bœuf", quantite: "1.2kg", note: "avec l'os" },
          { ingredient: "Gros sel", quantite: "2 c. à soupe" },
          { ingredient: "Poivre noir concassé", quantite: "1 c. à soupe" },
          { ingredient: "Thym séché", quantite: "1 c. à café" },
          { ingredient: "Ail en poudre", quantite: "1 c. à café" },
          { ingredient: "Huile d'olive", quantite: "3 c. à soupe" }
        ],
        etapes: [
          "Sortir la côte du réfrigérateur 2 heures avant (pièce épaisse).",
          "Préparer un rub : mélanger sel, poivre, thym et ail. Enrober la viande.",
          "Préparer le barbecue en zone directe (braises) et indirecte (sans braises).",
          "Saisir la côte 3 minutes par face sur la zone directe pour créer une croûte.",
          "Déplacer en zone indirecte, fermer le couvercle.",
          "Cuire environ 30-40 minutes jusqu'à 50°C à cœur pour saignant.",
          "Laisser reposer 15 minutes sur une planche, côté os en bas.",
          "Trancher perpendiculairement à l'os et servir."
        ],
        conseils: [
          "L'os protège un côté de la viande - en tenir compte pour la cuisson",
          "Un thermomètre sans fil est idéal pour surveiller sans ouvrir",
          "Récupérer le jus de repos pour arroser les tranches"
        ],
        cookingHelper: {
          method: "barbecue_charbon",
          doneness: "saignant",
          temperature: 250
        }
      },
      {
        nom: "Côte de bœuf à la moelle",
        type: "elaboree",
        difficulte: "moyen",
        tempsPreparation: 30,
        tempsCuisson: 50,
        portions: 4,
        description: "Côte de bœuf rôtie au four, servie avec des os à moelle gratinés.",
        ingredients: [
          { ingredient: "Côte de bœuf", quantite: "1.3kg" },
          { ingredient: "Os à moelle", quantite: "4 tronçons" },
          { ingredient: "Échalotes", quantite: "4" },
          { ingredient: "Vin rouge corsé", quantite: "300ml" },
          { ingredient: "Fond de veau", quantite: "200ml" },
          { ingredient: "Beurre", quantite: "60g" },
          { ingredient: "Persil plat", quantite: "1 bouquet" },
          { ingredient: "Fleur de sel", quantite: "selon goût" }
        ],
        etapes: [
          "Faire tremper les os à moelle 2h dans l'eau froide salée.",
          "Préchauffer le four à 200°C.",
          "Saisir la côte dans une cocotte sur toutes les faces.",
          "Enfourner et cuire 25-30 min pour saignant (50°C à cœur).",
          "Pendant ce temps, pocher les os à moelle 20 min dans l'eau frémissante salée.",
          "Réserver la viande. Déglacer la cocotte avec le vin, ajouter les échalotes.",
          "Réduire de moitié, ajouter le fond, réduire encore. Monter au beurre.",
          "Extraire la moelle des os, la déposer sur des toasts.",
          "Trancher la côte, napper de sauce, servir avec la moelle."
        ],
        conseils: [
          "La moelle doit être pochée délicatement pour rester crémeuse",
          "Un Bordeaux Saint-Émilion accompagne parfaitement ce plat",
          "Le temps de repos est crucial pour une pièce aussi épaisse"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "saignant",
          temperature: 200
        }
      }
    ],

    bavette: [
      {
        nom: "Bavette à l'échalote",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 10,
        tempsCuisson: 15,
        portions: 2,
        description: "Le classique du bistrot parisien, bavette fondante et échalotes confites au vin.",
        ingredients: [
          { ingredient: "Bavette d'aloyau", quantite: "400g" },
          { ingredient: "Échalotes", quantite: "6 grosses" },
          { ingredient: "Vin rouge", quantite: "150ml" },
          { ingredient: "Vinaigre de vin", quantite: "2 c. à soupe" },
          { ingredient: "Beurre", quantite: "80g" },
          { ingredient: "Persil frais", quantite: "quelques branches" },
          { ingredient: "Sel, poivre", quantite: "selon goût" }
        ],
        etapes: [
          "Émincer finement les échalotes.",
          "Les faire fondre doucement dans 40g de beurre pendant 10 min.",
          "Ajouter le vinaigre, puis le vin. Laisser réduire de moitié.",
          "Pendant ce temps, saisir la bavette à feu vif, 2 min par face.",
          "Laisser reposer 5 minutes.",
          "Monter la sauce aux échalotes avec le reste du beurre.",
          "Trancher la bavette dans le sens contraire des fibres.",
          "Napper de sauce et parsemer de persil."
        ],
        conseils: [
          "La bavette doit impérativement être tranchée contre les fibres",
          "Ne pas dépasser la cuisson saignante, elle devient dure",
          "Accompagner de frites fraîches"
        ],
        cookingHelper: {
          method: "poele",
          doneness: "saignant",
          temperature: null
        }
      }
    ]
  },

  // ==================== PORC ====================
  porc: {
    filet_mignon: [
      {
        nom: "Filet mignon en croûte",
        type: "classique",
        difficulte: "moyen",
        tempsPreparation: 20,
        tempsCuisson: 35,
        portions: 4,
        description: "Filet mignon de porc enrobé de moutarde et de pâte feuilletée dorée.",
        ingredients: [
          { ingredient: "Filet mignon de porc", quantite: "600g" },
          { ingredient: "Pâte feuilletée", quantite: "1 rouleau" },
          { ingredient: "Moutarde à l'ancienne", quantite: "3 c. à soupe" },
          { ingredient: "Jambon blanc", quantite: "4 tranches" },
          { ingredient: "Jaune d'œuf", quantite: "1" },
          { ingredient: "Herbes de Provence", quantite: "1 c. à café" }
        ],
        etapes: [
          "Saisir le filet mignon dans une poêle chaude sur toutes les faces. Laisser refroidir.",
          "Badigeonner généreusement de moutarde et saupoudrer d'herbes.",
          "Envelopper de tranches de jambon.",
          "Étaler la pâte, déposer le filet et refermer. Souder les bords.",
          "Réfrigérer 20 minutes.",
          "Dorer au jaune d'œuf et décorer à la fourchette.",
          "Cuire au four à 200°C pendant 25-30 minutes.",
          "Laisser reposer 5 minutes avant de trancher."
        ],
        conseils: [
          "Le filet doit être froid avant l'emballage en pâte",
          "Vérifier la cuisson avec un thermomètre : 65°C pour rosé",
          "Délicieux avec une sauce aux champignons"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "rose",
          temperature: 200
        }
      },
      {
        nom: "Filet mignon au miel et romarin",
        type: "originale",
        difficulte: "facile",
        tempsPreparation: 10,
        tempsCuisson: 25,
        portions: 4,
        description: "Filet mignon laqué au miel, caramélisé au four avec du romarin frais.",
        ingredients: [
          { ingredient: "Filet mignon de porc", quantite: "600g" },
          { ingredient: "Miel", quantite: "4 c. à soupe" },
          { ingredient: "Sauce soja", quantite: "3 c. à soupe" },
          { ingredient: "Romarin frais", quantite: "4 branches" },
          { ingredient: "Ail", quantite: "3 gousses" },
          { ingredient: "Huile d'olive", quantite: "2 c. à soupe" }
        ],
        etapes: [
          "Préparer la marinade : mélanger miel, sauce soja, ail écrasé et romarin.",
          "Mariner le filet minimum 1 heure (idéalement toute la nuit).",
          "Préchauffer le four à 180°C.",
          "Saisir le filet dans une poêle chaude sur toutes les faces.",
          "Transférer dans un plat, arroser de marinade.",
          "Cuire 20-25 minutes en arrosant régulièrement.",
          "La viande est prête quand elle atteint 68°C à cœur.",
          "Laisser reposer 5 minutes, trancher et napper du jus."
        ],
        conseils: [
          "Attention, le miel brûle vite - surveiller la cuisson",
          "Servir avec des patates douces rôties",
          "Le reste de marinade cuit fait une excellente sauce"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "a_point",
          temperature: 180
        }
      }
    ],

    travers: [
      {
        nom: "Travers de porc caramélisés BBQ",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 15,
        tempsCuisson: 180,
        portions: 4,
        description: "Travers fondants, cuits lentement puis laqués à la sauce BBQ maison.",
        ingredients: [
          { ingredient: "Travers de porc", quantite: "1.5kg", note: "en rack entier" },
          { ingredient: "Ketchup", quantite: "200ml" },
          { ingredient: "Cassonade", quantite: "100g" },
          { ingredient: "Vinaigre de cidre", quantite: "60ml" },
          { ingredient: "Sauce Worcestershire", quantite: "2 c. à soupe" },
          { ingredient: "Moutarde", quantite: "1 c. à soupe" },
          { ingredient: "Paprika fumé", quantite: "1 c. à café" },
          { ingredient: "Ail en poudre", quantite: "1 c. à café" }
        ],
        etapes: [
          "Retirer la membrane au dos des travers (important pour la tendreté).",
          "Préparer un rub sec : paprika, ail, sel, poivre. Frotter les travers.",
          "Envelopper hermétiquement dans du papier alu.",
          "Cuire au four à 150°C pendant 2h30.",
          "Préparer la sauce BBQ : mélanger tous les ingrédients liquides.",
          "Déballer les travers, badigeonner de sauce.",
          "Passer sous le grill 10 minutes en retournant et badigeonnant.",
          "Servir avec le reste de sauce en accompagnement."
        ],
        conseils: [
          "La cuisson lente est la clé de la tendreté - ne pas presser",
          "Les travers sont prêts quand la viande se rétracte de 1cm sur l'os",
          "Laisser reposer 10 minutes avant de découper"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "bien_cuit",
          temperature: 150
        }
      }
    ]
  },

  // ==================== AGNEAU ====================
  agneau: {
    gigot: [
      {
        nom: "Gigot d'agneau de 7 heures",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 30,
        tempsCuisson: 420,
        portions: 8,
        description: "Le mythique gigot confit pendant 7 heures, si fondant qu'il se mange à la cuillère.",
        ingredients: [
          { ingredient: "Gigot d'agneau", quantite: "2.5kg", note: "avec os" },
          { ingredient: "Carottes", quantite: "4" },
          { ingredient: "Oignons", quantite: "4" },
          { ingredient: "Tomates", quantite: "4" },
          { ingredient: "Têtes d'ail", quantite: "2" },
          { ingredient: "Vin blanc sec", quantite: "500ml" },
          { ingredient: "Bouquet garni", quantite: "1", note: "thym, laurier, romarin" },
          { ingredient: "Huile d'olive", quantite: "4 c. à soupe" }
        ],
        etapes: [
          "Piquer le gigot de gousses d'ail. Saler, poivrer généreusement.",
          "Dans une cocotte, faire dorer le gigot sur toutes les faces.",
          "Retirer et faire revenir les légumes coupés grossièrement.",
          "Replacer le gigot, ajouter le vin et le bouquet garni.",
          "Couvrir hermétiquement (avec de la pâte à pain si besoin).",
          "Cuire à 120°C pendant 7 heures sans ouvrir.",
          "La viande doit se détacher toute seule de l'os.",
          "Servir avec les légumes confits et le jus réduit."
        ],
        conseils: [
          "Ne JAMAIS ouvrir pendant la cuisson !",
          "Prévoir un récipient très profond, le gigot rend beaucoup de jus",
          "Peut se préparer la veille, encore meilleur réchauffé"
        ],
        cookingHelper: {
          method: "cocotte",
          doneness: "confit",
          temperature: 120
        }
      },
      {
        nom: "Gigot d'agneau rôti à l'ail",
        type: "elaboree",
        difficulte: "moyen",
        tempsPreparation: 20,
        tempsCuisson: 60,
        portions: 6,
        description: "Gigot rôti classique, piqué d'ail et de romarin, rosé à cœur.",
        ingredients: [
          { ingredient: "Gigot d'agneau", quantite: "2kg" },
          { ingredient: "Ail", quantite: "1 tête" },
          { ingredient: "Romarin frais", quantite: "6 branches" },
          { ingredient: "Beurre", quantite: "50g" },
          { ingredient: "Huile d'olive", quantite: "3 c. à soupe" },
          { ingredient: "Fond d'agneau", quantite: "200ml" }
        ],
        etapes: [
          "Sortir le gigot 2 heures avant la cuisson.",
          "Piquer profondément d'ail et de brins de romarin.",
          "Enduire de beurre pommade mélangé à l'huile.",
          "Saler et poivrer généreusement.",
          "Cuire à 210°C pendant 15 minutes (saisir).",
          "Baisser à 180°C et poursuivre 12-15 min par 500g pour rosé.",
          "Arroser régulièrement du jus de cuisson.",
          "Laisser reposer 15 minutes sous aluminium.",
          "Déglacer le plat au fond d'agneau pour la sauce."
        ],
        conseils: [
          "Le gigot est rosé à 58°C, à point à 65°C",
          "Trancher perpendiculairement à l'os",
          "Servir avec des flageolets ou un gratin de pommes de terre"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "rose",
          temperature: 180
        }
      }
    ],

    carre: [
      {
        nom: "Carré d'agneau en croûte d'herbes",
        type: "classique",
        difficulte: "moyen",
        tempsPreparation: 20,
        tempsCuisson: 25,
        portions: 4,
        description: "Carré d'agneau sous une croûte croustillante de chapelure aux herbes.",
        ingredients: [
          { ingredient: "Carré d'agneau", quantite: "800g", note: "8 côtes parées" },
          { ingredient: "Chapelure", quantite: "100g" },
          { ingredient: "Persil", quantite: "1 bouquet" },
          { ingredient: "Moutarde de Dijon", quantite: "3 c. à soupe" },
          { ingredient: "Ail", quantite: "2 gousses" },
          { ingredient: "Huile d'olive", quantite: "4 c. à soupe" }
        ],
        etapes: [
          "Mixer la chapelure avec le persil, l'ail et 3 c. à soupe d'huile.",
          "Saisir le carré côté gras dans une poêle très chaude.",
          "Badigeonner la partie grasse de moutarde.",
          "Appliquer la chapelure aux herbes en pressant bien.",
          "Cuire au four à 200°C, 20-25 minutes pour rosé.",
          "Laisser reposer 10 minutes.",
          "Découper entre chaque côte pour servir."
        ],
        conseils: [
          "Demander au boucher de parer les os (manchonner)",
          "La croûte doit être dorée mais pas brûlée",
          "Servir avec une purée de petits pois à la menthe"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "rose",
          temperature: 200
        }
      }
    ],

    souris: [
      {
        nom: "Souris d'agneau confite au thym",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 15,
        tempsCuisson: 180,
        portions: 4,
        description: "Souris d'agneau braisée lentement jusqu'à ce qu'elle fonde sous la fourchette.",
        ingredients: [
          { ingredient: "Souris d'agneau", quantite: "4 pièces" },
          { ingredient: "Oignons", quantite: "2" },
          { ingredient: "Carottes", quantite: "3" },
          { ingredient: "Vin blanc", quantite: "300ml" },
          { ingredient: "Fond de veau", quantite: "300ml" },
          { ingredient: "Thym", quantite: "1 bouquet" },
          { ingredient: "Miel", quantite: "2 c. à soupe" }
        ],
        etapes: [
          "Faire dorer les souris dans une cocotte sur toutes les faces.",
          "Réserver et faire revenir les légumes émincés.",
          "Replacer les souris, ajouter le vin et le fond.",
          "Ajouter le thym et le miel, saler, poivrer.",
          "Couvrir et enfourner à 150°C pendant 3 heures.",
          "Les souris sont prêtes quand la chair se détache de l'os.",
          "Réduire la sauce si nécessaire.",
          "Servir une souris par personne, nappée de sauce."
        ],
        conseils: [
          "Ce plat est encore meilleur réchauffé le lendemain",
          "Accompagner de polenta crémeuse ou de pommes de terre écrasées",
          "Le miel apporte un léger caramélisé divin"
        ],
        cookingHelper: {
          method: "cocotte",
          doneness: "confit",
          temperature: 150
        }
      }
    ]
  },

  // ==================== VOLAILLE ====================
  volaille: {
    poulet_entier: [
      {
        nom: "Poulet rôti traditionnel",
        type: "classique",
        difficulte: "facile",
        tempsPreparation: 15,
        tempsCuisson: 75,
        portions: 4,
        description: "Le poulet rôti du dimanche, peau croustillante et chair juteuse.",
        ingredients: [
          { ingredient: "Poulet fermier", quantite: "1.5kg" },
          { ingredient: "Beurre", quantite: "80g" },
          { ingredient: "Citron", quantite: "1" },
          { ingredient: "Ail", quantite: "1 tête" },
          { ingredient: "Thym", quantite: "4 branches" },
          { ingredient: "Pommes de terre", quantite: "800g" }
        ],
        etapes: [
          "Sortir le poulet 1 heure avant. Préchauffer le four à 210°C.",
          "Glisser le beurre pommade sous la peau des blancs.",
          "Farcir l'intérieur du citron coupé, de la tête d'ail et du thym.",
          "Saler et poivrer généreusement, enduire d'huile.",
          "Disposer les pommes de terre autour.",
          "Cuire 20 minutes à 210°C, puis baisser à 180°C.",
          "Poursuivre 50-60 minutes en arrosant régulièrement.",
          "Le poulet est cuit quand le jus de cuisse est clair.",
          "Laisser reposer 10 minutes avant de découper."
        ],
        conseils: [
          "Un poulet fermier Label Rouge fait toute la différence",
          "Le beurre sous la peau garantit des blancs moelleux",
          "Retourner le poulet à mi-cuisson pour des cuisses dorées"
        ],
        cookingHelper: {
          method: "four_traditionnel",
          doneness: "bien_cuit",
          temperature: 180
        }
      }
    ],

    magret: [
      {
        nom: "Magret de canard aux cerises",
        type: "classique",
        difficulte: "moyen",
        tempsPreparation: 15,
        tempsCuisson: 15,
        portions: 2,
        description: "Magret rosé à la peau croustillante, accompagné d'une sauce aux cerises acidulée.",
        ingredients: [
          { ingredient: "Magret de canard", quantite: "400g" },
          { ingredient: "Cerises", quantite: "200g", note: "fraîches ou griottes au sirop" },
          { ingredient: "Vinaigre de vin", quantite: "2 c. à soupe" },
          { ingredient: "Sucre", quantite: "1 c. à soupe" },
          { ingredient: "Fond de canard", quantite: "100ml" },
          { ingredient: "Beurre", quantite: "30g" }
        ],
        etapes: [
          "Quadriller la peau du magret au couteau sans atteindre la chair.",
          "Poser côté peau dans une poêle froide, cuire à feu moyen.",
          "Laisser le gras fondre 8-10 minutes, vider régulièrement.",
          "Retourner et cuire 3-4 minutes côté chair pour rosé.",
          "Laisser reposer 5 minutes, côté peau vers le haut.",
          "Dans une casserole, caraméliser le sucre, déglacer au vinaigre.",
          "Ajouter les cerises et le fond, réduire 5 minutes.",
          "Monter au beurre, saler.",
          "Trancher le magret et napper de sauce."
        ],
        conseils: [
          "Démarrer à froid permet au gras de fondre sans brûler la peau",
          "Conserver le gras de canard pour les pommes de terre sarladaises",
          "Le magret est rosé à 54°C à cœur"
        ],
        cookingHelper: {
          method: "poele",
          doneness: "rose",
          temperature: null
        }
      }
    ]
  }
};

module.exports = recipesData;
