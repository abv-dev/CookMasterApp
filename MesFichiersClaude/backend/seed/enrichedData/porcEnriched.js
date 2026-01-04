// Données enrichies pour le Porc - Morceaux Classiques et Boucher

const porcClassiqueEnriched = {
  // === 0: FILET MIGNON ===
  "Filet mignon": {
    anatomie: {
      localisation: "Muscle le long de la colonne vertébrale, sous les lombaires",
      origine: "Partie dorsale du porc",
      muscles: ["Psoas major"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Retirer la fine membrane argentée (le silverskin)",
      "Tempérer 30 min avant cuisson",
      "Saisir à feu vif pour colorer",
      "Finir au four à 180°C pour une cuisson uniforme",
      "Le porc doit être cuit à cœur mais juteux",
      "Laisser reposer 5-8 min sous alu"
    ],
    caracteristiques: {
      texture: "Très tendre, fondante",
      gout: "Délicat, subtil, légèrement sucré",
      gras: "Très maigre",
      fibres: "Fines et courtes",
      couleur: "Rose pâle",
      tenue: "Sèche vite si trop cuit"
    },
    sauces: [
      { nom: "Sauce moutarde et miel", type: "classique", description: "Moutarde à l'ancienne, miel, crème" },
      { nom: "Sauce aux pommes", type: "classique", description: "Compote, cidre, beurre" },
      { nom: "Sauce aux champignons", type: "classique", description: "Champignons, crème, persil" },
      { nom: "Sauce au cidre", type: "normand", description: "Cidre, crème, échalotes" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Pommes au four", recetteId: "pommes_four_sucrees", type: "fruit" },
      { nom: "Gratin de courgettes", recetteId: "gratin_courgettes", type: "légume" },
      { nom: "Haricots verts", recetteId: "haricots_verts_ail", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire saignant",
        consequence: "Le porc doit être cuit pour des raisons sanitaires",
        solution: "65-68°C à cœur minimum, mais pas plus"
      },
      {
        erreur: "Laisser la membrane",
        consequence: "Se rétracte et déforme la viande",
        solution: "Glisser un couteau sous la membrane et tirer"
      },
      {
        erreur: "Trop cuire",
        consequence: "Viande sèche et sans saveur",
        solution: "Thermomètre : 65°C, la viande reste rosée et juteuse"
      }
    ],
    leSaviezVous: "Le filet mignon de porc est 2 fois moins cher que celui de bœuf pour une tendreté similaire ! En France, c'est le morceau préféré pour les repas du dimanche. Un porc ne possède que 2 filets mignons d'environ 400g chacun."
  },

  // === 1: CÔTELETTES DE PORC ===
  "Côtelettes de porc": {
    anatomie: {
      localisation: "Partie dorsale avec l'os de la côte",
      origine: "Carré de côtes",
      muscles: ["Longissimus dorsi avec os"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Choisir des côtelettes avec un peu de gras",
      "Inciser le gras pour éviter que la côtelette ne se courbe",
      "Saisir côté gras d'abord",
      "Cuire à feu moyen-vif, pas trop fort",
      "Retourner une seule fois",
      "L'os doit rester légèrement rosé près de l'attache"
    ],
    caracteristiques: {
      texture: "Tendre avec léger croquant du gras grillé",
      gout: "Savoureux, goût de porc prononcé",
      gras: "Bordure grasse + persillé léger",
      fibres: "Moyennes",
      couleur: "Rose à blanc-rose",
      tenue: "Bonne grâce à l'os"
    },
    sauces: [
      { nom: "Sauce charcutière", type: "classique", description: "Cornichons, moutarde, vin blanc" },
      { nom: "Sauce Robert", type: "classique", description: "Oignons, moutarde, vinaigre" },
      { nom: "Beurre maître d'hôtel", type: "simple", description: "Beurre, persil, citron" },
      { nom: "Sauce normande", type: "régional", description: "Cidre, crème, pommes" }
    ],
    accompagnements: [
      { nom: "Compote de pommes", recetteId: "compote_pommes", type: "fruit" },
      { nom: "Choux de Bruxelles", recetteId: "choux_bruxelles", type: "légume" },
      { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" },
      { nom: "Lentilles vertes", recetteId: "lentilles_vertes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Choisir des côtelettes trop maigres",
        consequence: "Viande sèche sans saveur",
        solution: "Un peu de gras = jutosité et goût"
      },
      {
        erreur: "Cuire à feu trop fort",
        consequence: "Extérieur brûlé, intérieur cru",
        solution: "Feu moyen-vif, cuisson patiente"
      },
      {
        erreur: "Ne pas inciser le gras",
        consequence: "Côtelette qui se courbe",
        solution: "Entailler le gras tous les 2cm"
      }
    ],
    leSaviezVous: "La côtelette de porc est le plat préféré des Français pour les repas en semaine ! L'expression 'côtelette' vient du latin 'costa' (côte). En Autriche, le Wiener Schnitzel (escalope viennoise) se fait traditionnellement avec une côtelette de porc aplatie."
  },

  // === 2: RÔTI DE PORC ===
  "Rôti de porc (échine/longe)": {
    anatomie: {
      localisation: "Dos de l'animal, partie centrale",
      origine: "Longe ou échine désossée et ficelée",
      muscles: ["Longissimus dorsi", "Spinalis"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Sortir le rôti 1h avant cuisson",
      "Ficeler régulièrement pour une forme homogène",
      "Saisir de tous côtés avant le four",
      "Cuire à 180°C, 30 min par livre (500g)",
      "Arroser régulièrement avec le jus",
      "Repos 15 min couvert avant découpe"
    ],
    caracteristiques: {
      texture: "Moelleuse, juteuse si bien cuite",
      gout: "Classique, familial, réconfortant",
      gras: "Couverture grasse selon la partie",
      fibres: "Moyennes",
      couleur: "Rose pâle à blanc",
      tenue: "Excellente, se tranche bien"
    },
    sauces: [
      { nom: "Jus de rôti", type: "simple", description: "Fond de cuisson déglaçé" },
      { nom: "Sauce aux pruneaux", type: "classique", description: "Pruneaux, vin blanc, crème" },
      { nom: "Sauce au miel et romarin", type: "moderne", description: "Miel, romarin, fond" },
      { nom: "Sauce aux oignons", type: "simple", description: "Oignons caramélisés, bouillon" }
    ],
    accompagnements: [
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Haricots flageolets", recetteId: "flageolets", type: "légume" },
      { nom: "Carottes glacées", recetteId: "carottes_glacees", type: "légume" },
      { nom: "Pruneaux au vin", recetteId: "pruneaux_vin", type: "fruit" }
    ],
    erreursAEviter: [
      {
        erreur: "Four trop chaud",
        consequence: "Croûte brûlée, intérieur pas cuit",
        solution: "180°C maximum, cuisson lente"
      },
      {
        erreur: "Ne pas arroser",
        consequence: "Surface sèche",
        solution: "Arroser toutes les 15-20 min"
      },
      {
        erreur: "Découper immédiatement",
        consequence: "Jus qui s'écoule, viande sèche",
        solution: "15 min de repos obligatoire"
      }
    ],
    leSaviezVous: "Le rôti de porc du dimanche est une tradition française remontant au Moyen Âge ! La partie la plus tendre est le filet de longe. Un rôti de 1kg nourrit 4-5 personnes. Le secret des chefs : commencer à four très chaud (230°C) 15 min, puis baisser à 180°C."
  },

  // === 3: TRAVERS DE PORC (RIBS) ===
  "Travers de porc (ribs)": {
    anatomie: {
      localisation: "Partie ventrale des côtes",
      origine: "Côtes inférieures avec leur viande",
      muscles: ["Muscles intercostaux"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Retirer la membrane sur la face intérieure",
      "Appliquer le dry rub la veille si possible",
      "Cuisson basse température : 110-130°C pendant 3-4h",
      "Envelopper de papier alu à mi-cuisson (méthode Texas Crutch)",
      "Finir au grill ou au four chaud pour caraméliser",
      "La viande doit se détacher facilement de l'os"
    ],
    caracteristiques: {
      texture: "Fondante, se détache de l'os",
      gout: "Riche, caramélisé si bien glacé",
      gras: "Entrelardé avec cartilages",
      fibres: "Courtes entre les côtes",
      couleur: "Rose à caramel selon glaçage",
      tenue: "Se détache en portions individuelles"
    },
    sauces: [
      { nom: "Sauce BBQ américaine", type: "américain", description: "Tomates, vinaigre, mélasse, épices" },
      { nom: "Sauce BBQ Kansas City", type: "américain", description: "Sucrée et tomatée" },
      { nom: "Sauce BBQ Memphis", type: "américain", description: "Vinaigre et moutarde" },
      { nom: "Marinade asiatique", type: "asiatique", description: "Soja, miel, gingembre, 5 épices" }
    ],
    accompagnements: [
      { nom: "Coleslaw", recetteId: "coleslaw", type: "légume" },
      { nom: "Épi de maïs grillé", recetteId: "mais_grille", type: "légume" },
      { nom: "Baked beans", recetteId: "baked_beans", type: "légume" },
      { nom: "Cornbread", recetteId: "cornbread", type: "pain" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas retirer la membrane",
        consequence: "Texture caoutchouteuse, sauce qui n'adhère pas",
        solution: "Glisser un couteau sous la membrane et tirer"
      },
      {
        erreur: "Cuire trop vite",
        consequence: "Viande qui ne se détache pas",
        solution: "Low and slow : 3-4h minimum à basse température"
      },
      {
        erreur: "Trop de sauce pendant la cuisson",
        consequence: "Sucre qui brûle, goût amer",
        solution: "Sauce uniquement les 30 dernières minutes"
      }
    ],
    leSaviezVous: "Aux États-Unis, les concours de BBQ sont un sport national ! Les St. Louis ribs (travers parés en rectangle) sont les plus populaires. Le test du 'bend' : quand les ribs se plient à 45° et que la viande commence à craquer, c'est prêt. La NASA a même envoyé des ribs dans l'espace !"
  },

  // === 4: ÉPAULE DE PORC ===
  "Épaule de porc (pulled pork)": {
    anatomie: {
      localisation: "Partie avant de l'animal",
      origine: "Muscles de l'épaule avec os ou désossée",
      muscles: ["Deltoïde", "Triceps", "Biceps"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Choisir une épaule avec du gras (Boston butt idéalement)",
      "Dry rub généreux la veille",
      "Cuisson très longue : 8-12h à 110°C",
      "Viser une température interne de 90-95°C",
      "À cette température, le collagène fond",
      "Effilocher avec 2 fourchettes, mélanger avec le jus"
    ],
    caracteristiques: {
      texture: "Fondante, s'effiloche facilement",
      gout: "Riche, complexe, fumé si BBQ",
      gras: "Bien gras avec collagène",
      fibres: "Se séparent complètement",
      couleur: "Anneau rose (smoke ring) si fumé",
      tenue: "Se défait totalement"
    },
    sauces: [
      { nom: "Sauce Carolina Vinegar", type: "américain", description: "Vinaigre, piment, moutarde" },
      { nom: "Sauce BBQ sucrée", type: "américain", description: "Tomates, sucre brun, épices" },
      { nom: "Sauce au cola", type: "américain", description: "Coca-cola réduit, épices" },
      { nom: "Sauce aux agrumes", type: "moderne", description: "Orange, citron vert, chipotle" }
    ],
    accompagnements: [
      { nom: "Brioche burger", recetteId: "brioche_burger", type: "pain" },
      { nom: "Coleslaw crémeux", recetteId: "coleslaw", type: "légume" },
      { nom: "Mac and cheese", recetteId: "mac_and_cheese", type: "féculent" },
      { nom: "Pickles", recetteId: "pickles", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire pas assez longtemps",
        consequence: "Viande qui ne s'effiloche pas",
        solution: "Minimum 8h, jusqu'à 90°C interne"
      },
      {
        erreur: "Retirer le gras",
        consequence: "Viande sèche",
        solution: "Le gras fond et arrose la viande"
      },
      {
        erreur: "Ouvrir constamment le fumoir/four",
        consequence: "Perte de chaleur et d'humidité",
        solution: "Patience, ouvrir le moins possible"
      }
    ],
    leSaviezVous: "Le pulled pork est né dans le sud des États-Unis où les esclaves cuisaient les parties les moins nobles du porc. Aujourd'hui c'est un plat culte ! La 'Boston butt' n'a rien à voir avec Boston : le terme vient des barils (butts) dans lesquels on conservait cette partie."
  },

  // === 5: ÉCHINE ===
  "Échine": {
    anatomie: {
      localisation: "Cou et haut du dos",
      origine: "Entre la tête et le carré",
      muscles: ["Muscles cervicaux et dorsaux"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Morceau persillé, idéal pour cuisson longue",
      "Parfait en rôti désossé et ficelé",
      "Braisé avec légumes pour fondant optimal",
      "Cuisson 2-3h à basse température",
      "Le gras fond et parfume le plat",
      "Excellent pour les currys et ragoûts"
    ],
    caracteristiques: {
      texture: "Fondante après cuisson longue",
      gout: "Savoureux, riche grâce au gras",
      gras: "Bien persillé, entrelardé",
      fibres: "Moyennes",
      couleur: "Rose avec marbrures",
      tenue: "Se défait à la fourchette"
    },
    sauces: [
      { nom: "Sauce au curry", type: "indien", description: "Épices, lait de coco, tomates" },
      { nom: "Sauce aigre-douce", type: "asiatique", description: "Vinaigre, sucre, ananas" },
      { nom: "Sauce au chou", type: "alsacien", description: "Choucroute, vin blanc" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" }
    ],
    accompagnements: [
      { nom: "Riz basmati", recetteId: "riz_basmati", type: "féculent" },
      { nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" },
      { nom: "Choucroute", recetteId: "choucroute", type: "légume" },
      { nom: "Pommes de terre vapeur", recetteId: "pommes_vapeur", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire comme un morceau maigre",
        consequence: "Ne pas profiter du potentiel",
        solution: "Cuisson longue pour fondre le gras"
      },
      {
        erreur: "Feu trop fort",
        consequence: "Extérieur dur, intérieur gras",
        solution: "Feu doux, mijotage patient"
      }
    ],
    leSaviezVous: "L'échine est le morceau traditionnel de la potée et de la choucroute alsacienne ! Son nom vient du latin 'scaena' qui désignait le dos. C'est aussi le morceau préféré pour les saucisses de Toulouse."
  },

  // === 6: CARRÉ DE PORC ===
  "Carré de porc": {
    anatomie: {
      localisation: "Dos, partie centrale avec les côtes",
      origine: "Train de côtes dorsales",
      muscles: ["Longissimus dorsi avec os"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Demander au boucher de 'manchonner' les os",
      "Inciser le gras en quadrillage pour le croustillant",
      "Assaisonner généreusement, y compris entre les côtes",
      "Commencer à 220°C pour dorer, puis baisser à 180°C",
      "Protéger les os avec du papier alu si nécessaire",
      "Découper en côtes individuelles pour servir"
    ],
    caracteristiques: {
      texture: "Tendre avec croûte croustillante",
      gout: "Délicat, savoureux, festif",
      gras: "Couverture grasse qui croustille",
      fibres: "Fines à moyennes",
      couleur: "Rose pâle, croûte dorée",
      tenue: "Excellente, présentation élégante"
    },
    sauces: [
      { nom: "Jus au thym", type: "simple", description: "Jus de rôti, thym frais" },
      { nom: "Sauce aux figues", type: "gastronomique", description: "Figues, porto, fond" },
      { nom: "Sauce aux airelles", type: "scandinave", description: "Airelles, sucre, vin" },
      { nom: "Sauce au miel épicé", type: "moderne", description: "Miel, 4 épices, vinaigre" }
    ],
    accompagnements: [
      { nom: "Gratin de pommes de terre", recetteId: "gratin_pommes_terre", type: "féculent" },
      { nom: "Petits légumes glacés", recetteId: "legumes_glaces", type: "légume" },
      { nom: "Purée de marrons", recetteId: "puree_marrons", type: "féculent" },
      { nom: "Endives braisées", recetteId: "endives_braisees", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas inciser le gras",
        consequence: "Croûte molle, pas croustillante",
        solution: "Quadrillage au couteau, 5mm de profondeur"
      },
      {
        erreur: "Four pas assez chaud au début",
        consequence: "Pas de belle croûte",
        solution: "220°C les 15 premières minutes"
      },
      {
        erreur: "Oublier de protéger les os",
        consequence: "Os brûlés, amers",
        solution: "Manchons de papier alu sur les os"
      }
    ],
    leSaviezVous: "Le carré de porc est la pièce de choix pour les fêtes ! En Angleterre, le 'crown roast' est un carré formé en couronne. Le record du plus grand carré de porc cuisiné pesait 180 kg lors d'une fête au Texas !"
  },

  // === 7: ESCALOPES ===
  "Escalopes": {
    anatomie: {
      localisation: "Noix de jambon ou filet",
      origine: "Parties maigres tranchées fin",
      muscles: ["Variable selon origine"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Aplatir légèrement pour uniformiser l'épaisseur",
      "Fariner, paner ou laisser nature",
      "Poêle très chaude avec peu de matière grasse",
      "Cuisson rapide : 2-3 min par face",
      "Ne pas surcharger la poêle",
      "Servir immédiatement"
    ],
    caracteristiques: {
      texture: "Tendre, fine",
      gout: "Délicat, neutre, prend bien les saveurs",
      gras: "Très maigre",
      fibres: "Coupées par le tranchage",
      couleur: "Rose très pâle à blanc",
      tenue: "Fragile, cuisson rapide"
    },
    sauces: [
      { nom: "Sauce à la crème", type: "classique", description: "Crème, champignons, herbes" },
      { nom: "Sauce piccata", type: "italien", description: "Citron, câpres, beurre" },
      { nom: "Sauce saltimbocca", type: "italien", description: "Jambon, sauge, vin blanc" },
      { nom: "Sauce moutarde", type: "simple", description: "Moutarde, crème fraîche" }
    ],
    accompagnements: [
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" },
      { nom: "Légumes vapeur", recetteId: "legumes_vapeur", type: "légume" },
      { nom: "Purée de brocoli", recetteId: "puree_brocoli", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Escalope trop épaisse",
        consequence: "Cuisson inégale",
        solution: "Aplatir à 5-8mm d'épaisseur"
      },
      {
        erreur: "Poêle pas assez chaude",
        consequence: "Viande qui rend son eau",
        solution: "Poêle fumante, huile qui crépite"
      },
      {
        erreur: "Trop cuire",
        consequence: "Escalope sèche et dure",
        solution: "2-3 min par face maximum"
      }
    ],
    leSaviezVous: "L'escalope milanaise (panée) est née à Milan au XIXe siècle. L'escalope viennoise (Wiener Schnitzel) autrichienne se fait traditionnellement au veau, mais le porc est plus courant au quotidien. Aplatir la viande brise les fibres et l'attendrit naturellement."
  },

  // === 8: PALETTE ===
  "Palette": {
    anatomie: {
      localisation: "Épaule, partie haute",
      origine: "Au-dessus de l'omoplate",
      muscles: ["Sous-scapulaire", "Sus-épineux"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Morceau gélatineux idéal pour mijotés",
      "Braiser ou pocher longuement",
      "Parfait pour les potées",
      "Le collagène fond et enrichit la sauce",
      "Cuisson minimum 2h30",
      "Excellent le lendemain"
    ],
    caracteristiques: {
      texture: "Gélatineuse et fondante",
      gout: "Savoureux, enrichit le bouillon",
      gras: "Modéré avec collagène",
      fibres: "Moyennes, fondantes",
      couleur: "Rose",
      tenue: "Se défait facilement"
    },
    sauces: [
      { nom: "Bouillon de potée", type: "classique", description: "Légumes, herbes, porc" },
      { nom: "Sauce au chou", type: "alsacien", description: "Choucroute, vin blanc" },
      { nom: "Sauce aux lentilles", type: "auvergnat", description: "Lentilles vertes, lardons" }
    ],
    accompagnements: [
      { nom: "Chou vert", recetteId: "chou_vert", type: "légume" },
      { nom: "Pommes de terre fondantes", recetteId: "pommes_fondantes", type: "féculent" },
      { nom: "Carottes et navets", recetteId: "carottes_navets", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Viande ferme, gélatine pas fondue",
        solution: "Minimum 2h30 de pochage/braisage"
      },
      {
        erreur: "Faire bouillir",
        consequence: "Viande sèche et filandreuse",
        solution: "Frémissement doux uniquement"
      }
    ],
    leSaviezVous: "La palette est le morceau traditionnel de la potée auvergnate ! Son nom vient de l'os plat (omoplate) qui la traverse. Le collagène de la palette, une fois fondu, donne une sauce naturellement liée et onctueuse."
  },

  // === 9: ROUELLE DE JAMBON ===
  "Rouelle de jambon": {
    anatomie: {
      localisation: "Tranche de cuisse avec l'os",
      origine: "Jambon tranché transversalement",
      muscles: ["Tous les muscles de la cuisse"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Idéal pour le pot-au-feu ou braisé",
      "L'os enrichit le bouillon",
      "Cuisson longue pour attendrir",
      "Peut être salée/fumée (petit salé)",
      "Ficeler pour maintenir",
      "Servir en tranches avec les légumes"
    ],
    caracteristiques: {
      texture: "Variable selon cuisson",
      gout: "Savoureux, fait un bon bouillon",
      gras: "Modéré, graisse de surface",
      fibres: "Dépend de la zone",
      couleur: "Rose",
      tenue: "Bonne avec l'os"
    },
    sauces: [
      { nom: "Sauce moutarde", type: "classique", description: "Moutarde, crème, estragon" },
      { nom: "Jus de cuisson", type: "simple", description: "Bouillon réduit" },
      { nom: "Sauce aux lentilles", type: "auvergnat", description: "Lentilles, carottes, oignons" }
    ],
    accompagnements: [
      { nom: "Lentilles vertes du Puy", recetteId: "lentilles_puy", type: "légume" },
      { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" },
      { nom: "Chou braisé", recetteId: "chou_braise", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire trop vite",
        consequence: "Viande dure autour de l'os",
        solution: "Cuisson lente et longue"
      },
      {
        erreur: "Oublier de dessaler si salé",
        consequence: "Plat trop salé",
        solution: "Dessaler 12h en changeant l'eau"
      }
    ],
    leSaviezVous: "La rouelle de jambon aux lentilles est un plat emblématique de l'Auvergne ! Le mot 'rouelle' signifie 'petite roue' en vieux français, référence à sa forme ronde. C'était traditionnellement le plat du lundi, jour de lessive."
  },

  // === 10: POITRINE (LARD FRAIS) ===
  "Poitrine (lard frais)": {
    anatomie: {
      localisation: "Partie ventrale de l'animal",
      origine: "Paroi abdominale",
      muscles: ["Muscles abdominaux avec gras"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Peut être rôtie entière (crispy pork belly)",
      "Confite lentement pour fondant",
      "Inciser la couenne en quadrillage",
      "Sécher au réfrigérateur 24h pour croûte croustillante",
      "Four très chaud pour finir (230°C)",
      "Le gras doit être translucide"
    ],
    caracteristiques: {
      texture: "Fondant gras / croûte croustillante",
      gout: "Riche, savoureux, umami",
      gras: "Très gras, entrelardé",
      fibres: "Courtes entre les couches",
      couleur: "Rose et blanc alterné",
      tenue: "Se découpe en belles tranches"
    },
    sauces: [
      { nom: "Sauce hoisin", type: "asiatique", description: "Sauce sucrée-épicée chinoise" },
      { nom: "Sauce pomme-gingembre", type: "fusion", description: "Compote, gingembre frais" },
      { nom: "Sauce au miel et soja", type: "asiatique", description: "Miel, soja, ail" },
      { nom: "Caramel de viande", type: "gastronomique", description: "Jus réduit et caramélisé" }
    ],
    accompagnements: [
      { nom: "Bao buns", recetteId: "bao_buns", type: "pain" },
      { nom: "Chou pak choi", recetteId: "pak_choi", type: "légume" },
      { nom: "Riz gluant", recetteId: "riz_gluant", type: "féculent" },
      { nom: "Salade de concombre", recetteId: "salade_concombre", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Couenne pas sèche",
        consequence: "Pas de croustillant",
        solution: "24h au frigo à découvert ou sèche-cheveux !"
      },
      {
        erreur: "Temperature trop basse au finish",
        consequence: "Couenne molle",
        solution: "230-250°C les 20 dernières minutes"
      },
      {
        erreur: "Incisions pas assez profondes",
        consequence: "Couenne qui ne craque pas",
        solution: "Inciser jusqu'à la viande (pas seulement le gras)"
      }
    ],
    leSaviezVous: "La poitrine de porc croustillante (crispy pork belly) est un plat signature de la cuisine chinoise ! En Alsace, elle entre dans la composition de la choucroute. Les Coréens en font le Samgyeopsal, grillé à table. Le Japon l'utilise pour le Chashu du ramen."
  },

  // === 11: JAMBONNEAU (JARRET) ===
  "Jambonneau (jarret)": {
    anatomie: {
      localisation: "Partie basse de la patte",
      origine: "Jarret avant ou arrière",
      muscles: ["Muscles de la jambe avec os et couenne"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Idéal braisé ou poché longuement",
      "La couenne devient gélatineuse",
      "L'os donne un bouillon riche",
      "Peut être pané et grillé (style bavarois)",
      "Cuisson minimum 2h",
      "La viande doit se détacher de l'os"
    ],
    caracteristiques: {
      texture: "Gélatineuse, fondante",
      gout: "Savoureux, rustique",
      gras: "Couenne grasse, viande maigre",
      fibres: "Serrées autour de l'os",
      couleur: "Rose, couenne dorée si grillé",
      tenue: "Se défait de l'os"
    },
    sauces: [
      { nom: "Sauce à la bière", type: "allemand", description: "Bière brune, moutarde" },
      { nom: "Sauce aux lentilles", type: "français", description: "Lentilles, lardons" },
      { nom: "Moutarde douce", type: "simple", description: "Moutarde bavaroise sucrée" }
    ],
    accompagnements: [
      { nom: "Choucroute", recetteId: "choucroute", type: "légume" },
      { nom: "Purée de pois cassés", recetteId: "puree_pois_casses", type: "légume" },
      { nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson trop courte",
        consequence: "Couenne caoutchouteuse",
        solution: "2h minimum de braisage"
      },
      {
        erreur: "Ne pas piquer la couenne (si grillé)",
        consequence: "Couenne qui éclate",
        solution: "Piquer régulièrement avant grillage"
      }
    ],
    leSaviezVous: "Le Schweinshaxe allemand (jarret de porc grillé) est servi à l'Oktoberfest de Munich ! En France, le jambonneau braisé est un plat de bistrot traditionnel. La couenne devient une gelée naturelle quand le plat refroidit - délicieux en tartine !"
  },

  // === 12: JOUE DE PORC ===
  "Joue de porc": {
    anatomie: {
      localisation: "Joue de l'animal",
      origine: "Muscle masticateur",
      muscles: ["Masséter"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Parer soigneusement les parties nerveuses",
      "Faire dégorger si besoin",
      "Braisage long obligatoire (2h30+)",
      "Le collagène fond et donne un résultat fondant",
      "Parfaite en daube ou bourguignon",
      "Meilleure le lendemain"
    ],
    caracteristiques: {
      texture: "Fondante après braisage",
      gout: "Très savoureux, gélatineux",
      gras: "Maigre mais riche en collagène",
      fibres: "Courtes et denses",
      couleur: "Rose foncé",
      tenue: "Se défait à la fourchette"
    },
    sauces: [
      { nom: "Sauce au vin rouge", type: "classique", description: "Vin corsé, aromates" },
      { nom: "Sauce asiatique", type: "asiatique", description: "Soja, gingembre, anis étoilé" },
      { nom: "Sauce au cidre", type: "normand", description: "Cidre, pommes, crème" }
    ],
    accompagnements: [
      { nom: "Polenta crémeuse", recetteId: "polenta", type: "féculent" },
      { nom: "Purée de panais", recetteId: "puree_panais", type: "légume" },
      { nom: "Carottes glacées", recetteId: "carottes_glacees", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson courte",
        consequence: "Viande dure",
        solution: "2h30 minimum de braisage"
      },
      {
        erreur: "Ne pas parer",
        consequence: "Parties nerveuses désagréables",
        solution: "Retirer les membranes et nerfs"
      }
    ],
    leSaviezVous: "La joue de porc est le secret des grands chefs pour des plats fondants ! Elle contient autant de collagène que la joue de bœuf mais cuit 2 fois plus vite. Très économique, elle donne des résultats dignes des meilleurs restaurants."
  },

  // === 13: PIED DE PORC ===
  "Pied de porc": {
    anatomie: {
      localisation: "Extrémité des pattes",
      origine: "Pied avec os, couenne et cartilages",
      muscles: ["N/A - Principalement cartilages"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Blanchir avant utilisation",
      "Cuisson très longue (3-4h)",
      "Les cartilages fondent en gélatine",
      "Peut être pané et grillé",
      "Parfait en potée ou ragoût",
      "Excellent pour enrichir les fonds"
    ],
    caracteristiques: {
      texture: "Gélatineuse, moelleuse",
      gout: "Neutre, enrichit les sauces",
      gras: "Peu de gras, beaucoup de gélatine",
      fibres: "Cartilages principalement",
      couleur: "Blanc-rosé",
      tenue: "Fond complètement si trop cuit"
    },
    sauces: [
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, herbes" },
      { nom: "Sauce ravigote", type: "classique", description: "Herbes, vinaigre, câpres" },
      { nom: "Vinaigrette moutardée", type: "simple", description: "Moutarde, vinaigre, huile" }
    ],
    accompagnements: [
      { nom: "Pommes de terre persillées", recetteId: "pommes_persillees", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" },
      { nom: "Lentilles", recetteId: "lentilles", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas blanchir",
        consequence: "Goût fort, impuretés",
        solution: "Blanchir 5 min puis jeter l'eau"
      },
      {
        erreur: "Cuisson insuffisante",
        consequence: "Cartilages caoutchouteux",
        solution: "3-4h jusqu'à ce que les os se détachent"
      }
    ],
    leSaviezVous: "Les pieds de porc panés sont une spécialité de Sainte-Ménéhould en Champagne ! Après 24h de cuisson, les os deviennent assez mous pour être mangés. Le chef Pierre Koffmann a rendu célèbre son pied de cochon farci aux morilles."
  },

  // === 14: COUENNES ===
  "Couennes": {
    anatomie: {
      localisation: "Peau de l'animal",
      origine: "Peau retirée après échaudage",
      muscles: ["N/A - Tissu cutané"],
      categorie: "Sous-produit"
    },
    techniqueDuChef: [
      "Gratter et nettoyer soigneusement",
      "Rouler et ficeler pour cuisson",
      "Ajout en fond de casserole pour enrichir",
      "Peuvent être frites en chips (chicharrones)",
      "Donnent de l'onctuosité aux cassoulets",
      "Source naturelle de gélatine"
    ],
    caracteristiques: {
      texture: "Moelleuse cuite / croustillante frite",
      gout: "Neutre, enrichit les plats",
      gras: "Peu de gras, riche en collagène",
      fibres: "N/A - Tissu conjonctif",
      couleur: "Blanc-beige",
      tenue: "Fond partiellement"
    },
    sauces: [
      { nom: "Sauce du cassoulet", type: "classique", description: "Haricots, saucisses, confit" },
      { nom: "Sel aux épices", type: "simple", description: "Pour chips de couennes" }
    ],
    accompagnements: [
      { nom: "Cassoulet", recetteId: "cassoulet", type: "plat" },
      { nom: "Potée", recetteId: "potee", type: "plat" },
      { nom: "Apéritif (chips)", recetteId: "chips_couenne", type: "amuse-bouche" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas bien nettoyer",
        consequence: "Résidus de soies",
        solution: "Gratter soigneusement au couteau"
      },
      {
        erreur: "Les retirer des plats mijotés",
        consequence: "Perte de l'onctuosité",
        solution: "Elles enrichissent naturellement"
      }
    ],
    leSaviezVous: "Les couennes sont indispensables au vrai cassoulet de Castelnaudary ! En Amérique latine, les chicharrones (couennes frites) sont un snack populaire. Les couennes sont composées à 90% de collagène qui se transforme en gélatine à la cuisson."
  },

  // === 15: FOIE ===
  "Foie": {
    anatomie: {
      localisation: "Cavité abdominale",
      origine: "Organe filtrant",
      muscles: ["N/A - Organe"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Choisir un foie ferme et brillant",
      "Retirer les membranes et canaux",
      "Trancher en escalopes de 1cm",
      "Fariner légèrement avant cuisson",
      "Saisir à feu vif 1-2 min par face",
      "Servir rosé au centre"
    ],
    caracteristiques: {
      texture: "Fondante si rosé",
      gout: "Prononcé, plus doux que le bœuf",
      gras: "Maigre mais riche en nutriments",
      fibres: "Dense, sans fibres",
      couleur: "Brun-rouge",
      tenue: "Fragile"
    },
    sauces: [
      { nom: "Sauce vénitienne", type: "italien", description: "Oignons caramélisés lentement" },
      { nom: "Vinaigre balsamique", type: "simple", description: "Réduction de balsamique" },
      { nom: "Sauce aux pommes", type: "classique", description: "Compote, calvados" }
    ],
    accompagnements: [
      { nom: "Oignons confits", recetteId: "oignons_confits", type: "légume" },
      { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" },
      { nom: "Épinards au beurre", recetteId: "epinards_beurre", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Trop cuire",
        consequence: "Texture pâteuse et sèche",
        solution: "Rosé au centre obligatoire"
      },
      {
        erreur: "Ne pas parer",
        consequence: "Parties dures et amères",
        solution: "Retirer membranes et canaux biliaires"
      }
    ],
    leSaviezVous: "Le foie de porc est traditionnellement utilisé pour les pâtés et terrines. À Venise, le 'Fegato alla veneziana' (foie aux oignons) est cuit avec une quantité énorme d'oignons caramélisés lentement pendant 1h. Le foie est très riche en fer et en vitamine A."
  },

  // === 16: ROGNONS ===
  "Rognons": {
    anatomie: {
      localisation: "Région lombaire",
      origine: "Reins de l'animal",
      muscles: ["N/A - Organe filtrant"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Retirer le gras et le nerf central",
      "Faire dégorger dans du lait 2h",
      "Couper en tranches ou en deux",
      "Saisir à feu très vif",
      "Cuisson rapide, rosé au centre",
      "Déglacer au madère ou moutarde"
    ],
    caracteristiques: {
      texture: "Ferme si bien cuit",
      gout: "Prononcé, spécifique",
      gras: "Maigre, entouré de gras",
      fibres: "Structure en lobes",
      couleur: "Brun-rouge",
      tenue: "Devient caoutchouteux si trop cuit"
    },
    sauces: [
      { nom: "Sauce moutarde", type: "classique", description: "Moutarde, crème, persil" },
      { nom: "Sauce madère", type: "classique", description: "Madère, fond de veau" },
      { nom: "Sauce au xérès", type: "espagnol", description: "Xérès sec, ail" }
    ],
    accompagnements: [
      { nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" },
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Champignons sautés", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas dégorger",
        consequence: "Goût d'urine prononcé",
        solution: "2h dans du lait"
      },
      {
        erreur: "Cuisson lente",
        consequence: "Texture caoutchouteuse",
        solution: "Feu vif, cuisson rapide"
      }
    ],
    leSaviezVous: "Les rognons de porc sont plus petits et plus doux que ceux de bœuf. En Espagne, les 'riñones al jerez' (rognons au xérès) sont un classique des tapas. Le lait absorbe l'acide urique responsable du goût fort."
  }
};

const porcBoucherEnriched = {
  // === 0: POINTE DE FILET ===
  "Pointe de filet": {
    anatomie: {
      localisation: "Extrémité fine du filet mignon",
      origine: "Queue du filet",
      muscles: ["Psoas minor"],
      categorie: "Morceau du boucher"
    },
    techniqueDuChef: [
      "Morceau plus fin, cuisson plus rapide",
      "Idéal en brochettes ou émincé",
      "Marinade courte possible",
      "Saisir à feu vif",
      "Ne pas trop cuire, très maigre",
      "Trancher en médaillons"
    ],
    caracteristiques: {
      texture: "Très tendre",
      gout: "Délicat comme le filet",
      gras: "Très maigre",
      fibres: "Fines",
      couleur: "Rose pâle",
      tenue: "Fragile"
    },
    sauces: [
      { nom: "Sauce au curry", type: "indien", description: "Curry, lait de coco" },
      { nom: "Sauce satay", type: "asiatique", description: "Cacahuète, soja, lait de coco" },
      { nom: "Marinade citronnée", type: "méditerranéen", description: "Citron, huile, herbes" }
    ],
    accompagnements: [
      { nom: "Riz basmati", recetteId: "riz_basmati", type: "féculent" },
      { nom: "Légumes grillés", recetteId: "legumes_grilles", type: "légume" },
      { nom: "Salade thaï", recetteId: "salade_thai", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire entier comme le filet",
        consequence: "Surcuisson",
        solution: "Adapter le temps à la taille plus petite"
      }
    ],
    leSaviezVous: "La pointe de filet est parfois appelée 'chaînette'. C'est la partie que les bouchers gardent souvent pour eux car sa petite taille la rend difficile à vendre, mais elle est délicieuse !"
  },

  // === 1: QUASI ===
  "Quasi": {
    anatomie: {
      localisation: "Partie arrière, au-dessus du jambon",
      origine: "Croupe du porc",
      muscles: ["Gluteus medius"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Morceau tendre à cuire rosé",
      "Excellent en rôti",
      "Peut être poêlé en steaks",
      "Cuisson moyenne à vif",
      "Laisser reposer",
      "Trancher fin"
    ],
    caracteristiques: {
      texture: "Tendre, juteuse",
      gout: "Délicat, fin",
      gras: "Maigre à légèrement persillé",
      fibres: "Fines",
      couleur: "Rose",
      tenue: "Très bonne"
    },
    sauces: [
      { nom: "Sauce aux herbes", type: "classique", description: "Herbes fraîches, crème légère" },
      { nom: "Jus au romarin", type: "simple", description: "Romarin, fond de veau" },
      { nom: "Sauce aux câpres", type: "italien", description: "Câpres, citron, beurre" }
    ],
    accompagnements: [
      { nom: "Légumes de saison", recetteId: "legumes_saison", type: "légume" },
      { nom: "Pommes de terre nouvelles", recetteId: "pommes_nouvelles", type: "féculent" },
      { nom: "Fenouil braisé", recetteId: "fenouil_braise", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire trop longtemps",
        consequence: "Viande sèche",
        solution: "Comme un morceau noble, rosé"
      }
    ],
    leSaviezVous: "Le quasi de porc est l'équivalent du rumsteck de bœuf ! C'est un morceau souvent méconnu mais qui offre un excellent rapport qualité-prix pour un résultat gastronomique."
  },

  // === 2: NOIX DE JAMBON ===
  "Noix de jambon": {
    anatomie: {
      localisation: "Centre du jambon, partie la plus tendre",
      origine: "Cuisse, muscle central",
      muscles: ["Partie centrale du jambon"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Le morceau le plus noble du jambon",
      "Idéal en rôti ou escalopes",
      "Cuisson précise, ne pas trop cuire",
      "Peut être pané",
      "Trancher perpendiculairement aux fibres",
      "Reposer avant découpe"
    ],
    caracteristiques: {
      texture: "Très tendre",
      gout: "Fin, délicat",
      gras: "Très maigre",
      fibres: "Courtes et fines",
      couleur: "Rose pâle",
      tenue: "Excellente"
    },
    sauces: [
      { nom: "Sauce crème aux champignons", type: "classique", description: "Crème, champignons, vin blanc" },
      { nom: "Sauce au citron", type: "légère", description: "Citron, beurre, câpres" },
      { nom: "Sauce au porto", type: "gastronomique", description: "Porto, fond de veau" }
    ],
    accompagnements: [
      { nom: "Gratin de courgettes", recetteId: "gratin_courgettes", type: "légume" },
      { nom: "Riz sauvage", recetteId: "riz_sauvage", type: "féculent" },
      { nom: "Petits légumes glacés", recetteId: "legumes_glaces", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre avec le jambon entier",
        consequence: "Cuisson inadaptée",
        solution: "C'est un morceau à cuire, pas charcuterie"
      },
      {
        erreur: "Trop cuire",
        consequence: "Sèche rapidement car très maigre",
        solution: "65-68°C à cœur maximum"
      }
    ],
    leSaviezVous: "La noix de jambon est utilisée pour faire le jambon blanc de Paris ! C'est la partie centrale et la plus tendre de la cuisse. En charcuterie, c'est elle qui donne les plus belles tranches de jambon."
  },

  // === 3: PLAT DE CÔTES ===
  "Plat de côtes": {
    anatomie: {
      localisation: "Partie basse des côtes",
      origine: "Côtes inférieures",
      muscles: ["Intercostaux"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Idéal pour pot-au-feu ou potée",
      "Le gras enrichit le bouillon",
      "Cuisson longue nécessaire",
      "Peut être grillé style BBQ coréen",
      "Les os donnent du goût",
      "Se détache facilement quand prêt"
    ],
    caracteristiques: {
      texture: "Entrelardée, fondante",
      gout: "Savoureux, riche",
      gras: "Bien gras",
      fibres: "Courtes",
      couleur: "Rose avec gras blanc",
      tenue: "Se détache de l'os"
    },
    sauces: [
      { nom: "Bouillon de potée", type: "classique", description: "Légumes, aromates" },
      { nom: "Sauce BBQ", type: "américain", description: "Tomates, vinaigre, sucre" }
    ],
    accompagnements: [
      { nom: "Chou vert", recetteId: "chou_vert", type: "légume" },
      { nom: "Pommes de terre vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Kimchi", recetteId: "kimchi", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Retirer le gras",
        consequence: "Plat sec et fade",
        solution: "Le gras est essentiel au goût"
      }
    ],
    leSaviezVous: "Le plat de côtes de porc entre dans la composition de la vraie choucroute alsacienne ! En Corée, il est utilisé pour le Galbi-jjim, un plat braisé traditionnel des fêtes."
  },

  // === 4: COLLIER ===
  "Collier": {
    anatomie: {
      localisation: "Cou de l'animal",
      origine: "Muscles cervicaux",
      muscles: ["Muscles du cou"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Très parfumé et gélatineux",
      "Parfait pour saucisses et pâtés",
      "Braisé donne un résultat fondant",
      "Couper en gros cubes pour ragoûts",
      "Cuisson longue recommandée",
      "Excellent rapport qualité-prix"
    ],
    caracteristiques: {
      texture: "Fondante après cuisson longue",
      gout: "Très savoureux",
      gras: "Bien gras, persillé",
      fibres: "Courtes",
      couleur: "Rose avec marbrures",
      tenue: "Se défait facilement"
    },
    sauces: [
      { nom: "Sauce au vin blanc", type: "classique", description: "Vin blanc, crème, estragon" },
      { nom: "Sauce tomate", type: "italien", description: "Tomates, basilic, ail" }
    ],
    accompagnements: [
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Polenta", recetteId: "polenta", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Viande dure",
        solution: "Mijotage long, 2h minimum"
      }
    ],
    leSaviezVous: "Le collier de porc est le morceau traditionnel pour les saucisses de Toulouse ! Son persillage idéal (30% de gras) en fait la base parfaite pour la charcuterie artisanale."
  },

  // === 5: GORGE ===
  "Gorge": {
    anatomie: {
      localisation: "Sous le cou, partie ventrale avant",
      origine: "Partie grasse du dessous",
      muscles: ["Peu de muscle, principalement gras"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Très grasse, utilisée en charcuterie",
      "Base des pâtés et rillettes",
      "Peut être confite",
      "Donne du moelleux aux farces",
      "Fond lentement à la cuisson",
      "Indispensable pour le lard"
    ],
    caracteristiques: {
      texture: "Grasse, fondante",
      gout: "Riche, onctueux",
      gras: "Très gras (70%+)",
      fibres: "Quasi inexistantes",
      couleur: "Blanc rosé",
      tenue: "Fond à la cuisson"
    },
    sauces: [
      { nom: "N/A - Utilisé en préparation", type: "N/A", description: "Composant de recettes" }
    ],
    accompagnements: [
      { nom: "Pain de campagne grillé", recetteId: "pain_grille", type: "pain" },
      { nom: "Cornichons", recetteId: "cornichons", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Utiliser seule",
        consequence: "Trop gras, écœurant",
        solution: "Mélanger avec des morceaux plus maigres"
      }
    ],
    leSaviezVous: "La gorge est le secret des meilleures rillettes du Mans ! Son gras fond lentement et rend les préparations incroyablement onctueuses. Elle est aussi utilisée pour envelopper les pâtés en croûte."
  },

  // === 6: QUEUE DE PORC ===
  "Queue de porc": {
    anatomie: {
      localisation: "Queue de l'animal",
      origine: "Appendice caudal",
      muscles: ["Muscles caudaux"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger plusieurs heures",
      "Blanchir avant utilisation",
      "Cuisson très longue (3-4h)",
      "Utiliser pour enrichir les bouillons",
      "Peut être panée et grillée",
      "Texture gélatineuse"
    ],
    caracteristiques: {
      texture: "Gélatineuse",
      gout: "Savoureux, collagéneux",
      gras: "Peu de gras, beaucoup de collagène",
      fibres: "Autour des vertèbres",
      couleur: "Rose",
      tenue: "Se détache des os"
    },
    sauces: [
      { nom: "Sauce piquante", type: "classique", description: "Cornichons, câpres" },
      { nom: "Moutarde", type: "simple", description: "Moutarde à l'ancienne" }
    ],
    accompagnements: [
      { nom: "Lentilles", recetteId: "lentilles", type: "légume" },
      { nom: "Purée", recetteId: "puree_maison", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson courte",
        consequence: "Texture caoutchouteuse",
        solution: "3-4h de braisage minimum"
      }
    ],
    leSaviezVous: "En Chine, la queue de porc braisée est considérée comme un mets délicat, riche en collagène bon pour la peau ! En France, elle entre dans la composition des bouillons de pot-au-feu traditionnels."
  },

  // === 7: OREILLES ===
  "Oreilles": {
    anatomie: {
      localisation: "Tête, appendices auriculaires",
      origine: "Cartilage auriculaire",
      muscles: ["N/A - Cartilage"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Gratter et nettoyer soigneusement",
      "Blanchir puis cuire longuement",
      "Cartilage devient croquant-moelleux",
      "Peuvent être panées et frites",
      "Excellentes en salade tiède",
      "Cuire 2-3h minimum"
    ],
    caracteristiques: {
      texture: "Croquante et moelleuse",
      gout: "Neutre, prend les saveurs",
      gras: "Maigre, cartilagineux",
      fibres: "N/A - Cartilage",
      couleur: "Blanc-rosé",
      tenue: "Reste croquante"
    },
    sauces: [
      { nom: "Vinaigrette aux herbes", type: "classique", description: "Huile, vinaigre, fines herbes" },
      { nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres, cornichons" }
    ],
    accompagnements: [
      { nom: "Salade de lentilles", recetteId: "salade_lentilles", type: "légume" },
      { nom: "Pommes à l'huile", recetteId: "pommes_huile", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas assez cuire",
        consequence: "Cartilage trop dur",
        solution: "2-3h de cuisson minimum"
      },
      {
        erreur: "Ne pas nettoyer",
        consequence: "Résidus de soies",
        solution: "Gratter au couteau, flamber"
      }
    ],
    leSaviezVous: "Les oreilles de porc sont un délice en Asie ! Au Sichuan, elles sont servies épicées en salade. En France, elles étaient traditionnellement servies panées dans les bouchons lyonnais."
  },

  // === 8: GROIN (MUSEAU) ===
  "Groin (museau)": {
    anatomie: {
      localisation: "Face, partie du nez",
      origine: "Museau cartilagineux",
      muscles: ["Muscles faciaux"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Nettoyer et gratter soigneusement",
      "Cuisson très longue (4-5h)",
      "Base du museau vinaigrette",
      "Cartilage devient fondant",
      "Servir tiède en salade",
      "Assaisonner généreusement"
    ],
    caracteristiques: {
      texture: "Gélatineuse et croquante",
      gout: "Neutre, collagéneux",
      gras: "Maigre mais gélatineux",
      fibres: "Cartilage principalement",
      couleur: "Blanc-rosé",
      tenue: "Moelleux après cuisson"
    },
    sauces: [
      { nom: "Vinaigrette à l'échalote", type: "classique", description: "Échalotes, persil, vinaigre" },
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, herbes" }
    ],
    accompagnements: [
      { nom: "Salade de pommes de terre", recetteId: "salade_pommes_terre", type: "légume" },
      { nom: "Cornichons", recetteId: "cornichons", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson insuffisante",
        consequence: "Cartilage dur",
        solution: "4-5h minimum"
      }
    ],
    leSaviezVous: "Le museau vinaigrette est une spécialité des bistros lyonnais ! C'est un plat de tradition populaire qui revient à la mode dans la bistronomie. Il est très riche en collagène, bon pour les articulations."
  },

  // === 9: TÊTE (FROMAGE DE TÊTE) ===
  "Tête (fromage de tête)": {
    anatomie: {
      localisation: "Tête complète de l'animal",
      origine: "Toutes les parties de la tête",
      muscles: ["Muscles faciaux, langue"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Nettoyer et blanchir la tête entière",
      "Cuire 4-5h dans un bouillon aromatique",
      "Désosser et hacher grossièrement",
      "Mélanger avec la gelée de cuisson",
      "Mouler et laisser prendre au froid",
      "Servir en tranches froides"
    ],
    caracteristiques: {
      texture: "En gelée, morceaux variés",
      gout: "Savoureux, complexe",
      gras: "Variable selon les parties",
      fibres: "Diverses textures",
      couleur: "Marbré dans la gelée",
      tenue: "Ferme une fois prise"
    },
    sauces: [
      { nom: "Vinaigrette moutardée", type: "classique", description: "Moutarde, cornichons" },
      { nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres" }
    ],
    accompagnements: [
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" },
      { nom: "Cornichons", recetteId: "cornichons", type: "condiment" },
      { nom: "Pain de campagne", recetteId: "pain_campagne", type: "pain" }
    ],
    erreursAEviter: [
      {
        erreur: "Pas assez de gelée",
        consequence: "Ne tient pas à la découpe",
        solution: "Réduire le bouillon, ajouter gélatine si besoin"
      }
    ],
    leSaviezVous: "Le fromage de tête n'a rien à voir avec le fromage ! Le terme vient de 'fromaige' qui signifiait 'moulé'. C'est une spécialité de charcuterie française traditionnelle. En anglais, on l'appelle 'head cheese'."
  },

  // === 10: BARDIÈRE (GRAS DU DOS) ===
  "Bardière (gras du dos)": {
    anatomie: {
      localisation: "Dos de l'animal, sous la peau",
      origine: "Couche grasse dorsale",
      muscles: ["N/A - Tissu adipeux"],
      categorie: "Sous-produit"
    },
    techniqueDuChef: [
      "Trancher finement pour barder les viandes",
      "Protège les rôtis maigres",
      "Peut être salée (lard gras)",
      "Fond lentement à la cuisson",
      "Ajoute du moelleux aux viandes sèches",
      "Se conserve bien au sel"
    ],
    caracteristiques: {
      texture: "Grasse, ferme crue",
      gout: "Doux, neutre",
      gras: "100% gras",
      fibres: "N/A",
      couleur: "Blanc pur",
      tenue: "Fond à la chaleur"
    },
    sauces: [
      { nom: "N/A - Utilisé en préparation", type: "N/A", description: "Sert à protéger et parfumer" }
    ],
    accompagnements: [
      { nom: "N/A - Accompagne les rôtis", recetteId: "N/A", type: "N/A" }
    ],
    erreursAEviter: [
      {
        erreur: "Trancher trop épais",
        consequence: "Ne fond pas correctement",
        solution: "Tranches fines de 2-3mm"
      }
    ],
    leSaviezVous: "La bardière était autrefois indispensable en cuisine ! Avant l'invention du papier cuisson, on bardait toutes les viandes pour les protéger. Le lard gras traditionnel vient de la bardière salée et séchée."
  },

  // === 11: PANNE (GRAS DES ROGNONS) ===
  "Panne (gras des rognons)": {
    anatomie: {
      localisation: "Autour des reins",
      origine: "Graisse périrénale",
      muscles: ["N/A - Tissu adipeux"],
      categorie: "Sous-produit"
    },
    techniqueDuChef: [
      "Graisse la plus pure du porc",
      "Idéale pour faire le saindoux",
      "Fondre à feu doux (rending)",
      "Filtrer et conserver au frais",
      "Point de fumée élevé pour fritures",
      "Saveur neutre, excellente pour pâtisserie"
    ],
    caracteristiques: {
      texture: "Ferme et feuilletée",
      gout: "Très neutre",
      gras: "100% gras, très pur",
      fibres: "N/A",
      couleur: "Blanc brillant",
      tenue: "Se feuillette"
    },
    sauces: [
      { nom: "N/A - Matière grasse", type: "N/A", description: "Pour cuisson et pâtisserie" }
    ],
    accompagnements: [
      { nom: "N/A - Ingrédient de base", recetteId: "N/A", type: "N/A" }
    ],
    erreursAEviter: [
      {
        erreur: "Fondre à feu trop fort",
        consequence: "Goût de friture, brunissement",
        solution: "Feu très doux, patience"
      }
    ],
    leSaviezVous: "La panne donne le meilleur saindoux ! C'est cette graisse qui rend les pâtes feuilletées et les croûtes de tarte si croustillantes. Les grands chefs pâtissiers la préfèrent au beurre pour certaines recettes."
  },

  // === 12: SECRETO ===
  "Secreto (pièce ibérique)": {
    anatomie: {
      localisation: "Entre l'épaule et le jambon",
      origine: "Muscle caché (d'où le nom)",
      muscles: ["Muscle secret de l'épaule"],
      categorie: "Morceau du boucher - Spécialité ibérique"
    },
    techniqueDuChef: [
      "Morceau très persillé et savoureux",
      "Cuisson rapide à feu vif",
      "Peut être servi rosé (porc ibérique)",
      "Saler uniquement après cuisson",
      "Trancher en travers des fibres",
      "Ne pas trop cuire, reste juteux"
    ],
    caracteristiques: {
      texture: "Fondante, très persillée",
      gout: "Intense, notes de noisette (ibérique)",
      gras: "Très bien persillé",
      fibres: "Courtes",
      couleur: "Rouge foncé (ibérique)",
      tenue: "Excellente"
    },
    sauces: [
      { nom: "Huile d'olive et sel", type: "simple", description: "Simplicité pour goûter le produit" },
      { nom: "Sauce romesco", type: "espagnol", description: "Poivrons, amandes, tomates" },
      { nom: "Chimichurri", type: "latino", description: "Persil, ail, vinaigre" }
    ],
    accompagnements: [
      { nom: "Pimientos de Padrón", recetteId: "pimientos_padron", type: "légume" },
      { nom: "Pommes de terre rôties", recetteId: "pommes_roties", type: "féculent" },
      { nom: "Salade de tomates", recetteId: "salade_tomates", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire comme du porc standard",
        consequence: "Perte de la spécificité ibérique",
        solution: "Peut être servi rosé si porc ibérique de qualité"
      },
      {
        erreur: "Masquer avec des sauces fortes",
        consequence: "Ne pas profiter du goût unique",
        solution: "Accompagnements simples qui ne masquent pas"
      }
    ],
    leSaviezVous: "Le Secreto (littéralement 'secret') s'appelle ainsi car ce morceau était caché et gardé par les découpeurs espagnols ! Le porc ibérique bellota (nourri aux glands) développe un persillage exceptionnel, proche du wagyu."
  },

  // === 13: PLUMA ===
  "Pluma (pièce ibérique)": {
    anatomie: {
      localisation: "Extrémité du filet, près du jambon",
      origine: "Muscle en forme de plume",
      muscles: ["Extension du longe"],
      categorie: "Morceau du boucher - Spécialité ibérique"
    },
    techniqueDuChef: [
      "Morceau très tendre et persillé",
      "Forme caractéristique de plume",
      "Griller à haute température",
      "Peut être servi rosé (ibérique)",
      "Repos minimal, servir chaud",
      "Trancher en biseau"
    ],
    caracteristiques: {
      texture: "Très tendre, fondante",
      gout: "Délicat avec notes de gland (ibérique)",
      gras: "Persillé fin",
      fibres: "Fines et courtes",
      couleur: "Rose soutenu",
      tenue: "Excellente"
    },
    sauces: [
      { nom: "Fleur de sel fumée", type: "simple", description: "Sel Maldon fumé" },
      { nom: "Pedro Ximénez réduit", type: "espagnol", description: "Vin doux réduit" },
      { nom: "Alioli", type: "espagnol", description: "Aïl, huile d'olive" }
    ],
    accompagnements: [
      { nom: "Patatas bravas", recetteId: "patatas_bravas", type: "féculent" },
      { nom: "Salade de roquette", recetteId: "salade_roquette", type: "légume" },
      { nom: "Pain à la tomate", recetteId: "pan_tomate", type: "pain" }
    ],
    erreursAEviter: [
      {
        erreur: "Trop cuire",
        consequence: "Perd son fondant caractéristique",
        solution: "Rosé à point, jamais plus"
      }
    ],
    leSaviezVous: "La Pluma tire son nom de sa forme qui rappelle une plume d'oiseau ! C'est l'un des morceaux les plus tendres et les plus recherchés du porc ibérique. Elle pèse seulement 100-150g par animal."
  },

  // === 14: PRESA ===
  "Presa (pièce ibérique)": {
    anatomie: {
      localisation: "Haut de l'épaule, près du cou",
      origine: "Muscle de l'épaule",
      muscles: ["Muscle de la nuque"],
      categorie: "Morceau du boucher - Spécialité ibérique"
    },
    techniqueDuChef: [
      "Persillage intense, très savoureux",
      "Griller ou saisir à haute température",
      "Peut être servi rosé (ibérique)",
      "Repos court avant découpe",
      "Trancher contre les fibres",
      "Ne pas masquer le goût naturel"
    ],
    caracteristiques: {
      texture: "Ferme mais fondante",
      gout: "Le plus intense des morceaux ibériques",
      gras: "Très persillé",
      fibres: "Moyennes",
      couleur: "Rouge intense",
      tenue: "Très bonne"
    },
    sauces: [
      { nom: "Huile d'olive arbequina", type: "simple", description: "Huile fruitée de qualité" },
      { nom: "Sel de Guérande", type: "simple", description: "Sel pur" },
      { nom: "Sauce aux champignons sauvages", type: "gastronomique", description: "Cèpes, crème légère" }
    ],
    accompagnements: [
      { nom: "Pommes de terre confites", recetteId: "pommes_confites", type: "féculent" },
      { nom: "Légumes de saison grillés", recetteId: "legumes_grilles", type: "légume" },
      { nom: "Poivrons piquillos", recetteId: "piquillos", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire bien cuit",
        consequence: "Perte totale de l'intérêt du produit",
        solution: "Rosé obligatoire pour ibérique"
      }
    ],
    leSaviezVous: "La Presa est considérée par de nombreux chefs comme le meilleur morceau du porc ibérique ! Son nom signifie 'prise' ou 'capture' car c'était le morceau que les travailleurs 'capturaient' pour eux. Elle peut atteindre 50€/kg pour le Bellota de qualité."
  },

  // === 15: CŒUR ===
  "Cœur": {
    anatomie: {
      localisation: "Cavité thoracique",
      origine: "Muscle cardiaque",
      muscles: ["Myocarde"],
      categorie: "Abat de deuxième catégorie"
    },
    techniqueDuChef: [
      "Parer (retirer gras, valves, vaisseaux)",
      "Peut être tranché ou coupé en cubes",
      "Marinade recommandée",
      "Cuisson rapide (grillé) ou longue (braisé)",
      "En brochettes c'est excellent",
      "Bien assaisonner"
    ],
    caracteristiques: {
      texture: "Ferme et dense",
      gout: "Prononcé mais plus doux que bœuf",
      gras: "Très maigre",
      fibres: "Denses",
      couleur: "Rouge foncé",
      tenue: "Ferme"
    },
    sauces: [
      { nom: "Sauce chimichurri", type: "latino", description: "Persil, ail, vinaigre" },
      { nom: "Sauce yakitori", type: "japonais", description: "Soja, mirin, sucre" }
    ],
    accompagnements: [
      { nom: "Riz parfumé", recetteId: "riz_parfume", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas parer",
        consequence: "Parties dures",
        solution: "Retirer valves et vaisseaux"
      }
    ],
    leSaviezVous: "Le cœur de porc est traditionnellement utilisé dans les anticuchos au Pérou ! Plus petit que celui de bœuf, il est plus tendre et plus facile à préparer. C'est l'un des abats les plus riches en protéines."
  },

  // === 16: LANGUE ===
  "Langue": {
    anatomie: {
      localisation: "Cavité buccale",
      origine: "Muscle lingual",
      muscles: ["Muscles de la langue"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger plusieurs heures",
      "Blanchir puis dépouiller (retirer la peau)",
      "Cuire dans un bouillon aromatique 2h",
      "La peau s'enlève facilement une fois cuite",
      "Peut être servie chaude ou froide",
      "Trancher en biseau"
    ],
    caracteristiques: {
      texture: "Fondante, légèrement granuleuse",
      gout: "Délicat",
      gras: "Modérément grasse",
      fibres: "Structure musculaire particulière",
      couleur: "Gris-rosé cuite",
      tenue: "Se tranche bien"
    },
    sauces: [
      { nom: "Sauce piquante", type: "classique", description: "Cornichons, câpres, vinaigre" },
      { nom: "Sauce tomate", type: "espagnol", description: "Tomates, piment, chorizo" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Légumes braisés", recetteId: "legumes_braises", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas dépouiller",
        consequence: "Peau épaisse désagréable",
        solution: "Retirer la peau après cuisson"
      }
    ],
    leSaviezVous: "La langue de porc est plus petite et plus délicate que celle de bœuf. Au Mexique, les tacos de lengua sont très populaires. Elle était autrefois considérée comme un mets de fête dans les campagnes françaises."
  },

  // === 17: CERVELLE ===
  "Cervelle": {
    anatomie: {
      localisation: "Boîte crânienne",
      origine: "Encéphale",
      muscles: ["N/A - Organe nerveux"],
      categorie: "Abat de deuxième catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger longuement",
      "Retirer les membranes délicatement",
      "Pocher dans court-bouillon vinaigré",
      "Paner et frire ou beurre noir",
      "Manipuler avec grande délicatesse",
      "Servir immédiatement"
    ],
    caracteristiques: {
      texture: "Très crémeuse",
      gout: "Délicat, subtil",
      gras: "Riche en lipides",
      fibres: "N/A",
      couleur: "Gris-rosé",
      tenue: "Très fragile"
    },
    sauces: [
      { nom: "Beurre noir", type: "classique", description: "Beurre noisette, câpres" },
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, herbes" }
    ],
    accompagnements: [
      { nom: "Salade de mâche", recetteId: "salade_mache", type: "légume" },
      { nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Manipuler brusquement",
        consequence: "Se défait en morceaux",
        solution: "Gestes délicats"
      }
    ],
    leSaviezVous: "La cervelle de porc est moins consommée depuis les crises sanitaires, mais reste un mets délicat. Plus petite que celle de veau, elle se cuisine de la même façon. Très riche en phospholipides et en cholestérol."
  },

  // === 18: RATE ===
  "Rate": {
    anatomie: {
      localisation: "Cavité abdominale, près de l'estomac",
      origine: "Organe lymphatique",
      muscles: ["N/A - Organe"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Retirer la membrane externe",
      "Poêler rapidement ou braiser",
      "Peut être panée",
      "Texture particulière, divisive",
      "Assaisonner généreusement",
      "Servir bien chaud"
    ],
    caracteristiques: {
      texture: "Granuleuse, spongieuse",
      gout: "Fort, caractéristique",
      gras: "Maigre",
      fibres: "Structure particulière",
      couleur: "Brun-rouge foncé",
      tenue: "Fragile"
    },
    sauces: [
      { nom: "Sauce piquante", type: "classique", description: "Vinaigre, cornichons" },
      { nom: "Persillade", type: "simple", description: "Ail, persil" }
    ],
    accompagnements: [
      { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Servir à des non-initiés",
        consequence: "Texture qui peut déplaire",
        solution: "Réserver aux amateurs d'abats"
      }
    ],
    leSaviezVous: "La rate de porc est peu connue mais était autrefois cuisinée dans les campagnes. En Sicile, le 'stigghiola' utilise les abats dont la rate, enroulés autour d'un oignon vert et grillés. C'est un mets pour connaisseurs."
  },

  // === 19: INTESTINS (ANDOUILLETTES) ===
  "Intestins (andouillettes)": {
    anatomie: {
      localisation: "Tube digestif",
      origine: "Intestins et estomac",
      muscles: ["N/A - Parois intestinales"],
      categorie: "Abat / Charcuterie"
    },
    techniqueDuChef: [
      "Achetés préparés (andouillettes)",
      "Griller ou poêler",
      "Piquer avant cuisson",
      "Cuisson douce, pas trop fort",
      "Servir avec moutarde",
      "Odeur caractéristique à la cuisson"
    ],
    caracteristiques: {
      texture: "Particulière, intestinale",
      gout: "Très prononcé, caractéristique",
      gras: "Variable",
      fibres: "Structure en couches",
      couleur: "Beige-gris",
      tenue: "Ferme"
    },
    sauces: [
      { nom: "Moutarde de Dijon", type: "classique", description: "Moutarde forte" },
      { nom: "Sauce au vin blanc", type: "classique", description: "Vin blanc, échalotes, crème" }
    ],
    accompagnements: [
      { nom: "Pommes de terre sautées", recetteId: "pommes_sautees", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas piquer",
        consequence: "Éclate à la cuisson",
        solution: "Piquer plusieurs fois à la fourchette"
      },
      {
        erreur: "Feu trop fort",
        consequence: "Éclate ou brûle",
        solution: "Cuisson douce et longue"
      }
    ],
    leSaviezVous: "L'andouillette AAAAA (Association Amicale des Amateurs d'Andouillette Authentique) est un label de qualité ! Troyes est la capitale de l'andouillette. Son odeur forte à la cuisson divise : on adore ou on déteste. C'est un plat typiquement français."
  },

  // === 20: CRÉPINE ===
  "Crépine": {
    anatomie: {
      localisation: "Membrane entourant les intestins",
      origine: "Péritoine de l'animal",
      muscles: ["N/A - Membrane graisseuse"],
      categorie: "Sous-produit"
    },
    techniqueDuChef: [
      "Rincer à l'eau froide",
      "Étaler délicatement",
      "Envelopper viandes, farces, pâtés",
      "Fond à la cuisson en parfumant",
      "Remplace la barde",
      "Maintient les préparations"
    ],
    caracteristiques: {
      texture: "Fine, dentelle graisseuse",
      gout: "Neutre, enrichit",
      gras: "Gras en réseau",
      fibres: "Membrane fine",
      couleur: "Blanc translucide",
      tenue: "Fond à la cuisson"
    },
    sauces: [
      { nom: "N/A - Enveloppe", type: "N/A", description: "Sert à envelopper" }
    ],
    accompagnements: [
      { nom: "Selon la préparation enveloppée", recetteId: "N/A", type: "N/A" }
    ],
    erreursAEviter: [
      {
        erreur: "Manipuler brusquement",
        consequence: "Se déchire",
        solution: "Manipuler délicatement dans l'eau"
      },
      {
        erreur: "Utiliser sèche",
        consequence: "Cassante et inutilisable",
        solution: "Toujours humidifier avant usage"
      }
    ],
    leSaviezVous: "La crépine est indispensable pour les crépinettes (saucisses plates) et les caillettes provençales ! Elle ressemble à une dentelle de gras et fond complètement à la cuisson en donnant du moelleux et de la saveur."
  }
};

// Export
module.exports = {
  porcClassiqueEnriched,
  porcBoucherEnriched
};
