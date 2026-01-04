/**
 * Données enrichies pour le Gibier
 * 13 espèces, 46 morceaux au total
 */

// ============================================
// SANGLIER (7 morceaux)
// ============================================
const sanglierEnriched = {
  "Rôti de sanglier": {
    anatomie: {
      localisation: "Longe ou cuisse du sanglier",
      origine: "Partie dorsale ou membre postérieur",
      muscles: ["Longissimus dorsi", "Quadriceps"],
      categorie: "Morceau principal"
    },
    techniqueDuChef: [
      "Mariner 48-72h dans un vin rouge corsé avec aromates (genièvre, thym, laurier)",
      "Sortir la viande 2h avant cuisson pour température ambiante",
      "Larder de petits bâtonnets de lard pour éviter le dessèchement",
      "Saisir à feu vif avant cuisson au four pour caraméliser",
      "Arroser régulièrement pendant la cuisson avec le jus de marinade",
      "SÉCURITÉ : Atteindre impérativement 71°C à cœur (risque trichinose)"
    ],
    caracteristiques: {
      texture: "Ferme et dense",
      gout: "Puissant, sauvage, légèrement musqué",
      gras: "Maigre, nécessite du lardage",
      fibres: "Serrées et longues",
      couleur: "Rouge sombre à brun",
      tenue: "Excellente tenue à la cuisson longue"
    },
    sauces: [
      { nom: "Sauce grand veneur", type: "classique", description: "Sauce au vin rouge, crème et groseilles" },
      { nom: "Sauce poivrade", type: "classique", description: "Sauce au poivre et vinaigre" },
      { nom: "Sauce aux airelles", type: "traditionnelle", description: "Compotée d'airelles aigre-douce" },
      { nom: "Sauce au genièvre", type: "gibier", description: "Fond de gibier aux baies de genièvre" }
    ],
    accompagnements: [
      { nom: "Spätzle", recetteId: "spatzle", type: "féculent" },
      { nom: "Purée de céleri-rave", recetteId: "puree_celeri", type: "légume" },
      { nom: "Chou rouge braisé", recetteId: "chou_rouge_braise", type: "légume" },
      { nom: "Marrons poêlés", recetteId: "marrons_poeles", type: "garniture" }
    ],
    erreursAEviter: [
      { erreur: "Ne pas mariner assez longtemps", consequence: "Goût trop fort et viande dure", solution: "Mariner minimum 48h, idéalement 72h" },
      { erreur: "Cuire à température trop élevée", consequence: "Viande sèche et coriace", solution: "Cuire à 160°C maximum, arroser souvent" },
      { erreur: "Ne pas atteindre 71°C à cœur", consequence: "Risque sanitaire (trichinose)", solution: "Utiliser un thermomètre, 71°C minimum obligatoire" }
    ],
    leSaviezVous: "Le sanglier est l'ancêtre du porc domestique. En France, la chasse au sanglier représente plus de 600 000 animaux prélevés par an. La trichinose, maladie parasitaire, impose une cuisson complète de la viande."
  },

  "Épaule de sanglier": {
    anatomie: {
      localisation: "Membre antérieur du sanglier",
      origine: "Partie avant de l'animal",
      muscles: ["Deltoïde", "Triceps", "Biceps brachial"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Désosser partiellement ou braiser avec l'os pour plus de saveur",
      "Mariner 48h minimum dans un vin rouge avec aromates",
      "Saisir tous les côtés avant le braisage",
      "Braiser à couvert avec la marinade et un fond de gibier",
      "Cuisson longue de 3-4h jusqu'à ce que la viande se détache",
      "Le collagène fondu rend la viande moelleuse et onctueuse"
    ],
    caracteristiques: {
      texture: "Gélatineuse après braisage",
      gout: "Intense et profond",
      gras: "Persillée de gras intramusculaire",
      fibres: "Se défont à la cuisson longue",
      couleur: "Rouge foncé, devient brune à la cuisson",
      tenue: "Se délite en filaments tendres"
    },
    sauces: [
      { nom: "Jus de braisage réduit", type: "naturelle", description: "Jus de cuisson concentré" },
      { nom: "Sauce aux champignons sauvages", type: "forestière", description: "Cèpes, girolles dans le jus" },
      { nom: "Sauce au chocolat amer", type: "moderne", description: "Touche de cacao pour la profondeur" }
    ],
    accompagnements: [
      { nom: "Polenta crémeuse", recetteId: "polenta_cremeuse", type: "féculent" },
      { nom: "Purée de panais", recetteId: "puree_panais", type: "légume" },
      { nom: "Champignons des bois", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Braisage trop court", consequence: "Viande restant dure", solution: "Minimum 3h de braisage à feu doux" },
      { erreur: "Liquide insuffisant", consequence: "Viande sèche", solution: "La viande doit être aux 2/3 immergée" }
    ],
    leSaviezVous: "L'épaule de sanglier était le mets préféré d'Astérix et Obélix dans les banquets gaulois ! C'est un morceau économique qui devient un plat de fête grâce au braisage."
  },

  "Civet de sanglier": {
    anatomie: {
      localisation: "Morceaux divers (épaule, collier, poitrine)",
      origine: "Pièces de deuxième catégorie découpées en cubes",
      muscles: ["Muscles variés à collagène"],
      categorie: "Morceau à mijoter"
    },
    techniqueDuChef: [
      "Découper en cubes réguliers de 4-5 cm",
      "Mariner 48h dans du vin rouge avec oignons, carottes, aromates",
      "Égoutter et sécher parfaitement les morceaux avant de les saisir",
      "Saisir par petites quantités pour bien colorer",
      "Flamber au cognac pour éliminer l'excès de gras",
      "Lier la sauce au sang en fin de cuisson (traditionnel) ou à la crème"
    ],
    caracteristiques: {
      texture: "Fondante après mijotage",
      gout: "Très prononcé, riche en umami",
      gras: "Variable selon les morceaux",
      fibres: "Se défont complètement",
      couleur: "Sauce sombre et brillante",
      tenue: "Morceaux qui fondent en bouche"
    },
    sauces: [
      { nom: "Sauce au sang", type: "traditionnelle", description: "Liaison au sang pour onctuosité" },
      { nom: "Sauce au vin rouge", type: "classique", description: "Réduction de marinade liée" }
    ],
    accompagnements: [
      { nom: "Tagliatelles fraîches", recetteId: "tagliatelles_fraiches", type: "féculent" },
      { nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Croûtons frits", recetteId: "croutons_frits", type: "garniture" }
    ],
    erreursAEviter: [
      { erreur: "Marinade trop courte", consequence: "Viande trop forte", solution: "48h minimum de marinade" },
      { erreur: "Faire bouillir après ajout du sang", consequence: "Sauce grumeleuse", solution: "Ajouter le sang hors du feu, lier à 80°C max" }
    ],
    leSaviezVous: "Le civet tire son nom du mot latin 'cibus' (nourriture). Traditionnellement, le sang de l'animal servait à lier la sauce. Aujourd'hui, on peut le remplacer par du chocolat noir ou de la crème."
  },

  "Côtes de sanglier": {
    anatomie: {
      localisation: "Cage thoracique du sanglier",
      origine: "Paroi costale",
      muscles: ["Intercostaux", "Dentelés"],
      categorie: "Morceau grillé ou braisé"
    },
    techniqueDuChef: [
      "Retirer la membrane argentée au dos des côtes",
      "Mariner au moins 24h dans un mélange épicé",
      "Pour un résultat tendre, précuire au four basse température",
      "Finir au barbecue ou grill pour caraméliser",
      "Badigeonner de sauce pendant la cuisson",
      "La viande doit se détacher de l'os facilement"
    ],
    caracteristiques: {
      texture: "Charnue avec alternance gras/maigre",
      gout: "Goût de gibier prononcé",
      gras: "Gras intercostal fondant",
      fibres: "Courtes, se détachent de l'os",
      couleur: "Brun doré après cuisson",
      tenue: "Moelleuse si bien cuite"
    },
    sauces: [
      { nom: "Sauce barbecue maison", type: "américaine", description: "Sauce sucrée-épicée au paprika fumé" },
      { nom: "Glace de viande au miel", type: "laquée", description: "Réduction au miel et soja" }
    ],
    accompagnements: [
      { nom: "Coleslaw maison", recetteId: "coleslaw", type: "salade" },
      { nom: "Pommes de terre au four", recetteId: "pommes_four", type: "féculent" },
      { nom: "Haricots à la tomate", recetteId: "haricots_tomate", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson trop rapide", consequence: "Viande dure", solution: "Cuisson lente obligatoire (2-3h)" },
      { erreur: "Oublier de retirer la membrane", consequence: "Côtes caoutchouteuses", solution: "Toujours retirer la membrane dorsale" }
    ],
    leSaviezVous: "Les côtes de sanglier sont plus petites que celles du porc mais beaucoup plus goûteuses. Dans les Ardennes, elles sont traditionnellement préparées à la bière brune."
  },

  "Filet de sanglier": {
    anatomie: {
      localisation: "Le long de la colonne vertébrale",
      origine: "Partie lombaire interne",
      muscles: ["Psoas major", "Psoas minor"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Retirer soigneusement la fine membrane argentée",
      "Mariner brièvement (4-6h) pour ne pas masquer le goût délicat",
      "Sortir 1h avant cuisson pour température ambiante",
      "Saisir vivement à la poêle très chaude",
      "Finir au four à 180°C quelques minutes",
      "Laisser reposer autant que le temps de cuisson"
    ],
    caracteristiques: {
      texture: "Très tendre, presque fondante",
      gout: "Délicat pour un gibier, légèrement sauvage",
      gras: "Très maigre",
      fibres: "Fines et courtes",
      couleur: "Rouge vif, rosé à cœur si autorisé",
      tenue: "Tranche nette et élégante"
    },
    sauces: [
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Crème et morilles réhydratées" },
      { nom: "Jus court au genièvre", type: "légère", description: "Réduction légère parfumée" },
      { nom: "Beurre aux herbes", type: "simple", description: "Beurre composé thym-romarin" }
    ],
    accompagnements: [
      { nom: "Gratin de pommes de terre", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Poêlée de girolles", recetteId: "girolles_poelees", type: "légume" },
      { nom: "Épinards frais", recetteId: "epinards_beurre", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Surcuire le filet", consequence: "Viande sèche et sans intérêt", solution: "Cuisson rosé à point maximum (65°C), sauf contrainte sanitaire (71°C)" },
      { erreur: "Ne pas laisser reposer", consequence: "Jus qui s'écoule à la découpe", solution: "Repos de 8-10 min sous aluminium" }
    ],
    leSaviezVous: "Le filet de sanglier est surnommé le 'filet mignon des bois'. C'est la partie la plus tendre de l'animal, ne représentant que 1% de son poids total."
  },

  "Cuissot/Jambon de sanglier": {
    anatomie: {
      localisation: "Membre postérieur complet",
      origine: "Cuisse et jambe arrière",
      muscles: ["Quadriceps", "Ischio-jambiers", "Adducteurs"],
      categorie: "Grande pièce festive"
    },
    techniqueDuChef: [
      "Pièce impressionnante pour grande tablée (8-15 personnes)",
      "Mariner 4-5 jours en retournant quotidiennement",
      "Larder généreusement de lard et ail",
      "Cuire au four à basse température (160°C) très longtemps",
      "Arroser toutes les 30 minutes",
      "Prévoir 1h de repos couvert avant découpe"
    ],
    caracteristiques: {
      texture: "Variable selon les parties",
      gout: "Intense et complexe",
      gras: "Couche externe à conserver pour la cuisson",
      fibres: "Longues, se détaillent en belles tranches",
      couleur: "Croûte dorée, intérieur rosé-brun",
      tenue: "Spectaculaire en présentation"
    },
    sauces: [
      { nom: "Sauce grand veneur", type: "classique", description: "La sauce traditionnelle du gibier" },
      { nom: "Sauce Cumberland", type: "anglaise", description: "Gelée de groseilles, porto, orange" }
    ],
    accompagnements: [
      { nom: "Gratin de courge", recetteId: "gratin_courge", type: "légume" },
      { nom: "Purée de marrons", recetteId: "puree_marrons", type: "féculent" },
      { nom: "Légumes racines rôtis", recetteId: "legumes_racines_rotis", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Sous-estimer le temps de cuisson", consequence: "Viande pas assez cuite à cœur", solution: "Compter 50-60 min/kg à 160°C" },
      { erreur: "Ne pas mariner assez longtemps", consequence: "Goût trop sauvage", solution: "4-5 jours de marinade minimum" }
    ],
    leSaviezVous: "Un cuissot de grand sanglier peut peser jusqu'à 15 kg ! Autrefois, il était servi lors des banquets royaux avec sa peau transformée en 'hure' décorative."
  },

  "Joues de sanglier": {
    anatomie: {
      localisation: "Muscles des joues",
      origine: "Tête du sanglier",
      muscles: ["Masséter", "Temporal"],
      categorie: "Morceau du chef"
    },
    techniqueDuChef: [
      "Parer les joues en retirant les parties nerveuses",
      "Saisir vivement pour colorer",
      "Braiser très lentement (3-4h) à couvert",
      "Le collagène se transforme en gélatine onctueuse",
      "La viande doit se couper à la cuillère",
      "Réduire le jus pour une sauce brillante"
    ],
    caracteristiques: {
      texture: "Fondante, gélatineuse",
      gout: "Concentré, très savoureux",
      gras: "Persillé de gélatine",
      fibres: "Se défont complètement",
      couleur: "Brune profonde",
      tenue: "Moelleuse à souhait"
    },
    sauces: [
      { nom: "Jus de braisage", type: "naturelle", description: "Concentré de cuisson" },
      { nom: "Sauce au vin rouge et échalotes", type: "classique", description: "Réduction onctueuse" }
    ],
    accompagnements: [
      { nom: "Purée truffée", recetteId: "puree_truffee", type: "féculent" },
      { nom: "Polenta", recetteId: "polenta_cremeuse", type: "féculent" },
      { nom: "Légumes glacés", recetteId: "legumes_glaces", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Braisage trop court", consequence: "Joues encore fermes", solution: "Minimum 3h de braisage doux" },
      { erreur: "Feu trop fort", consequence: "Viande fibreuse", solution: "Braiser à frémissement, jamais à ébullition" }
    ],
    leSaviezVous: "Les joues de sanglier étaient autrefois réservées au chef de chasse comme récompense. Aujourd'hui, c'est un morceau prisé des gastronomes pour sa texture incomparable."
  }
};

// ============================================
// CERF (5 morceaux)
// ============================================
const cerfEnriched = {
  "Gigot de cerf": {
    anatomie: {
      localisation: "Membre postérieur du cerf",
      origine: "Cuisse arrière",
      muscles: ["Quadriceps", "Ischio-jambiers", "Fessiers"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Choisir un gigot de cerf de 1 à 2 ans pour plus de tendreté",
      "Mariner 24-48h au vin rouge avec aromates classiques",
      "Piquer d'éclats d'ail et de lardons",
      "Saisir à haute température puis cuire au four à 180°C",
      "Cuisson rosée recommandée (55-60°C à cœur)",
      "Arroser régulièrement avec le jus de marinade"
    ],
    caracteristiques: {
      texture: "Tendre et ferme à la fois",
      gout: "Sauvage mais fin",
      gras: "Très maigre",
      fibres: "Longues et serrées",
      couleur: "Rouge profond",
      tenue: "Belles tranches à la découpe"
    },
    sauces: [
      { nom: "Sauce grand veneur", type: "classique", description: "Incontournable avec le cerf" },
      { nom: "Sauce aux myrtilles", type: "fruitée", description: "Baies et fond de gibier" },
      { nom: "Sauce au cassis", type: "fruitée", description: "Crème de cassis et fond brun" }
    ],
    accompagnements: [
      { nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" },
      { nom: "Chou rouge aux pommes", recetteId: "chou_rouge_pommes", type: "légume" },
      { nom: "Spätzle au beurre", recetteId: "spatzle", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Trop cuire", consequence: "Viande sèche (le cerf est très maigre)", solution: "Ne pas dépasser 60°C à cœur" },
      { erreur: "Oublier le temps de repos", consequence: "Jus qui s'écoule", solution: "15 min de repos minimum" }
    ],
    leSaviezVous: "Le cerf est chassé depuis la préhistoire. Au Moyen Âge, sa chasse était réservée à la noblesse. Le gigot de cerf était considéré comme le mets le plus prestigieux des banquets royaux."
  },

  "Selle de cerf": {
    anatomie: {
      localisation: "Partie dorsale entre les côtes et le gigot",
      origine: "Région lombaire",
      muscles: ["Longissimus dorsi", "Multifidus"],
      categorie: "Morceau d'exception"
    },
    techniqueDuChef: [
      "La selle peut être cuite avec ou sans os",
      "Marinade légère de 12-24h maximum",
      "Température ambiante 2h avant cuisson",
      "Rôtir à four chaud (220°C) puis baisser à 180°C",
      "Viser une cuisson rosée (55°C à cœur)",
      "Cette pièce noble mérite une présentation soignée"
    ],
    caracteristiques: {
      texture: "Exceptionnellement tendre",
      gout: "Fin et délicat pour un gibier",
      gras: "Pratiquement absent",
      fibres: "Très fines",
      couleur: "Rouge rubis",
      tenue: "Découpe élégante possible"
    },
    sauces: [
      { nom: "Sauce poivrade", type: "classique", description: "Fond de gibier, vinaigre, poivre concassé" },
      { nom: "Sauce aux cèpes", type: "forestière", description: "Crème et cèpes frais" }
    ],
    accompagnements: [
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Poire pochée au vin", recetteId: "poire_pochee", type: "fruit" },
      { nom: "Champignons sauvages", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson au-delà du rosé", consequence: "Perte de la finesse", solution: "Maximum 55°C à cœur" },
      { erreur: "Découper trop vite", consequence: "Perte des sucs", solution: "10 min de repos au chaud" }
    ],
    leSaviezVous: "La selle de cerf était surnommée 'la pièce royale'. Louis XIV en était particulièrement friand et la faisait servir lors des grandes occasions à Versailles."
  },

  "Épaule de cerf": {
    anatomie: {
      localisation: "Membre antérieur",
      origine: "Partie avant de l'animal",
      muscles: ["Deltoïde", "Triceps", "Sous-scapulaire"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Morceau plus ferme nécessitant un braisage",
      "Mariner 48h dans un vin corsé",
      "Désosser ou laisser l'os pour plus de saveur",
      "Braiser 3-4h à feu doux",
      "Le collagène rendra la viande moelleuse",
      "Idéal pour les civets et daubes"
    ],
    caracteristiques: {
      texture: "Ferme crue, fondante braisée",
      gout: "Prononcé et riche",
      gras: "Maigre avec tissu conjonctif",
      fibres: "Se défont au braisage",
      couleur: "Rouge sombre",
      tenue: "Effilochée après braisage"
    },
    sauces: [
      { nom: "Sauce au vin rouge", type: "braisage", description: "Jus de cuisson réduit" },
      { nom: "Sauce aux baies", type: "fruitée", description: "Airelles ou myrtilles" }
    ],
    accompagnements: [
      { nom: "Nouilles fraîches", recetteId: "nouilles_fraiches", type: "féculent" },
      { nom: "Purée de topinambours", recetteId: "puree_topinambours", type: "légume" },
      { nom: "Carottes glacées", recetteId: "carottes_glacees", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson rapide", consequence: "Viande dure", solution: "Toujours braiser longuement" },
      { erreur: "Manque de liquide", consequence: "Dessèchement", solution: "Maintenir le niveau de liquide" }
    ],
    leSaviezVous: "L'épaule de cerf était traditionnellement réservée aux serviteurs lors des chasses royales, les nobles préférant les morceaux plus tendres. Aujourd'hui, les chefs la redécouvrent pour sa richesse en goût."
  },

  "Filet de cerf": {
    anatomie: {
      localisation: "Sous la colonne vertébrale",
      origine: "Muscle psoas",
      muscles: ["Psoas major", "Iliacus"],
      categorie: "Morceau le plus noble"
    },
    techniqueDuChef: [
      "Le filet de cerf est d'une tendreté exceptionnelle",
      "Pas ou peu de marinade pour préserver sa finesse",
      "Tempérer 1h avant cuisson",
      "Saisir à feu très vif dans une poêle fumante",
      "Cuisson saignant à rosé uniquement (52-55°C)",
      "Découper en médaillons épais"
    ],
    caracteristiques: {
      texture: "Fondante, presque crémeuse",
      gout: "Subtil et élégant",
      gras: "Inexistant",
      fibres: "Ultra-fines",
      couleur: "Rouge vif, rosé à cœur",
      tenue: "Médaillons parfaits"
    },
    sauces: [
      { nom: "Jus corsé au porto", type: "légère", description: "Réduction au porto ruby" },
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Crème et morilles" },
      { nom: "Beurre de truffe", type: "luxe", description: "Beurre composé à la truffe noire" }
    ],
    accompagnements: [
      { nom: "Risotto aux cèpes", recetteId: "risotto_cepes", type: "féculent" },
      { nom: "Pommes fondantes", recetteId: "pommes_fondantes", type: "féculent" },
      { nom: "Épinards à la crème", recetteId: "epinards_creme", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson au-delà du rosé", consequence: "Viande sèche et fibreuse", solution: "52-55°C maximum à cœur" },
      { erreur: "Mariner trop longtemps", consequence: "Perte de la finesse", solution: "Simple assaisonnement suffit" }
    ],
    leSaviezVous: "Le filet de cerf est considéré comme l'un des morceaux les plus fins de la gastronomie française. Un cerf adulte ne produit que 400-600g de filet, soit moins de 1% de son poids."
  },

  "Civet de cerf": {
    anatomie: {
      localisation: "Morceaux divers (épaule, collier, poitrine)",
      origine: "Pièces de second choix",
      muscles: ["Muscles variés riches en collagène"],
      categorie: "Préparation mijotée"
    },
    techniqueDuChef: [
      "Utiliser des morceaux gélatineux pour un civet onctueux",
      "Mariner 48h minimum dans un bon Bourgogne",
      "Saisir les morceaux à feu vif avant le mijotage",
      "Flamber au marc de Bourgogne",
      "Mijoter 2-3h à feu très doux",
      "Lier au sang en fin de cuisson (traditionnel) ou au chocolat"
    ],
    caracteristiques: {
      texture: "Ultra-fondante",
      gout: "Riche et complexe",
      gras: "Gélatine fondue",
      fibres: "Complètement défaites",
      couleur: "Sauce brillante brun-noir",
      tenue: "Morceaux qui s'effeuillent"
    },
    sauces: [
      { nom: "Sauce au sang", type: "traditionnelle", description: "Liaison classique au sang" },
      { nom: "Sauce chocolat-épices", type: "moderne", description: "Alternative au sang" }
    ],
    accompagnements: [
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Pain grillé", recetteId: "croutons", type: "garniture" },
      { nom: "Champignons de Paris", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Faire bouillir la sauce après ajout du sang", consequence: "Sauce grumeleuse", solution: "Lier hors du feu à 80°C max" },
      { erreur: "Morceaux trop petits", consequence: "Viande qui s'émiette", solution: "Cubes de 5-6 cm" }
    ],
    leSaviezVous: "Le civet de cerf était le plat favori du roi Henri IV. Le terme 'civet' vient de 'cive', ancien nom de la ciboulette qui parfumait traditionnellement ce ragoût."
  }
};

// ============================================
// CHEVREUIL (3 morceaux)
// ============================================
const chevreuilEnriched = {
  "Gigot de chevreuil": {
    anatomie: {
      localisation: "Membre postérieur du chevreuil",
      origine: "Cuisse arrière",
      muscles: ["Quadriceps", "Ischio-jambiers"],
      categorie: "Morceau principal"
    },
    techniqueDuChef: [
      "Le chevreuil est plus petit et plus fin que le cerf",
      "Mariner 24h dans un vin blanc sec avec aromates",
      "La viande est naturellement tendre, ne pas surmariner",
      "Rôtir à 200°C après saisie",
      "Cuisson rosée impérative (55°C)",
      "Découper en tranches fines"
    ],
    caracteristiques: {
      texture: "Très tendre et fine",
      gout: "Délicat, moins prononcé que le cerf",
      gras: "Extrêmement maigre",
      fibres: "Fines et courtes",
      couleur: "Rouge soutenu",
      tenue: "Tranches délicates"
    },
    sauces: [
      { nom: "Sauce à la crème et genièvre", type: "classique", description: "Crème parfumée aux baies" },
      { nom: "Sauce aux griottes", type: "fruitée", description: "Cerises acidulées" },
      { nom: "Jus au thym", type: "légère", description: "Réduction parfumée" }
    ],
    accompagnements: [
      { nom: "Purée de patates douces", recetteId: "puree_patates_douces", type: "féculent" },
      { nom: "Airelles", recetteId: "compote_airelles", type: "condiment" },
      { nom: "Chanterelles poêlées", recetteId: "chanterelles_poelees", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Trop cuire", consequence: "Viande sèche instantanément", solution: "55°C maximum, c'est une viande très maigre" },
      { erreur: "Servir froid", consequence: "Graisse figée sur la surface", solution: "Servir sur assiettes chaudes" }
    ],
    leSaviezVous: "Le chevreuil est appelé 'la biche des bois' pour sa chair délicate. En France, c'est le gibier le plus chassé avec plus de 500 000 prélèvements annuels."
  },

  "Selle de chevreuil": {
    anatomie: {
      localisation: "Dos du chevreuil, partie lombaire",
      origine: "Entre les côtes et le gigot",
      muscles: ["Longissimus dorsi"],
      categorie: "Pièce d'exception"
    },
    techniqueDuChef: [
      "La selle de chevreuil est un morceau raffiné",
      "Simple assaisonnement sel-poivre suffit",
      "Rôtir rapidement à four très chaud (220°C)",
      "10-12 min par kg maximum",
      "Repos obligatoire de 10 min",
      "Découper en noisettes épaisses"
    ],
    caracteristiques: {
      texture: "Veloutée, exceptionnelle",
      gout: "Subtil et élégant",
      gras: "Quasi inexistant",
      fibres: "Très fines",
      couleur: "Rose vif à cœur",
      tenue: "Présentation gastronomique"
    },
    sauces: [
      { nom: "Sauce poivrade légère", type: "classique", description: "Version allégée" },
      { nom: "Réduction de porto", type: "simple", description: "Porto ruby réduit" }
    ],
    accompagnements: [
      { nom: "Gratin de cèpes", recetteId: "gratin_cepes", type: "légume" },
      { nom: "Pommes soufflées", recetteId: "pommes_soufflees", type: "féculent" },
      { nom: "Endives braisées", recetteId: "endives_braisees", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson prolongée", consequence: "Viande sèche et fade", solution: "Cuisson express rosée uniquement" },
      { erreur: "Sauce trop forte", consequence: "Masque la finesse", solution: "Sauces légères recommandées" }
    ],
    leSaviezVous: "La selle de chevreuil est souvent comparée au filet de bœuf pour sa tendreté. Elle était le morceau préféré de l'Empereur Napoléon III lors de ses chasses à Compiègne."
  },

  "Filet de chevreuil": {
    anatomie: {
      localisation: "Sous la colonne vertébrale",
      origine: "Muscle psoas",
      muscles: ["Psoas major"],
      categorie: "Morceau ultra-noble"
    },
    techniqueDuChef: [
      "Le plus tendre des gibiers",
      "Aucune marinade nécessaire",
      "Saisir 1-2 min par face à feu vif",
      "Cuisson bleu à saignant pour les amateurs",
      "Ne jamais dépasser 52°C à cœur",
      "Trancher en médaillons de 2 cm"
    ],
    caracteristiques: {
      texture: "Fondante comme du beurre",
      gout: "Délicat, presque sucré",
      gras: "Aucun",
      fibres: "Imperceptibles",
      couleur: "Rouge cerise",
      tenue: "Médaillons parfaits"
    },
    sauces: [
      { nom: "Jus de viande léger", type: "naturelle", description: "Simple déglaçage" },
      { nom: "Sauce vierge aux herbes", type: "moderne", description: "Huile d'olive, herbes fraîches" }
    ],
    accompagnements: [
      { nom: "Purée de butternut", recetteId: "puree_butternut", type: "légume" },
      { nom: "Champignons des bois", recetteId: "champignons_sautes", type: "légume" },
      { nom: "Rösti", recetteId: "rosti", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Toute surcuisson", consequence: "Perte totale de l'intérêt du morceau", solution: "Bleu à saignant uniquement" },
      { erreur: "Assaisonnement excessif", consequence: "Goût naturel masqué", solution: "Sel, poivre, c'est tout" }
    ],
    leSaviezVous: "Le filet de chevreuil pèse rarement plus de 150g. C'est l'un des morceaux les plus recherchés par les grands chefs, souvent servi avec une simple noisette de beurre."
  }
};

// ============================================
// BICHE (4 morceaux)
// ============================================
const bicheEnriched = {
  "Gigot de biche": {
    anatomie: {
      localisation: "Membre postérieur de la biche",
      origine: "Cuisse arrière",
      muscles: ["Quadriceps", "Ischio-jambiers", "Fessiers"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "La biche est la femelle du cerf, chair plus fine",
      "Mariner 24-36h dans un vin blanc ou rouge léger",
      "Piquer de lardons fins pour éviter le dessèchement",
      "Rôtir à 180°C après saisie",
      "Viser 55-58°C à cœur (rosé)",
      "Arroser fréquemment pendant la cuisson"
    ],
    caracteristiques: {
      texture: "Plus tendre que le cerf",
      gout: "Fin et délicat",
      gras: "Très maigre",
      fibres: "Fines et serrées",
      couleur: "Rouge clair",
      tenue: "Belles tranches régulières"
    },
    sauces: [
      { nom: "Sauce aux airelles", type: "traditionnelle", description: "Compotée aigre-douce" },
      { nom: "Sauce crème et morilles", type: "gastronomique", description: "Élégante et parfumée" },
      { nom: "Jus aux herbes de Provence", type: "légère", description: "Thym, romarin, sarriette" }
    ],
    accompagnements: [
      { nom: "Gratin de potimarron", recetteId: "gratin_potimarron", type: "légume" },
      { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" },
      { nom: "Haricots verts fins", recetteId: "haricots_verts", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Trop cuire", consequence: "Viande sèche (chair très maigre)", solution: "55-58°C à cœur maximum" },
      { erreur: "Oublier le lardage", consequence: "Croûte sèche", solution: "Larder ou barder systématiquement" }
    ],
    leSaviezVous: "La biche est chassée uniquement de septembre à février en France. Sa chair est réputée plus fine que celle du cerf mâle car elle ne contient pas les hormones de rut."
  },

  "Selle de biche": {
    anatomie: {
      localisation: "Partie dorsale lombaire",
      origine: "Dos de la biche",
      muscles: ["Longissimus dorsi", "Multifidus"],
      categorie: "Pièce d'exception"
    },
    techniqueDuChef: [
      "Morceau délicat demandant une cuisson précise",
      "Pas de marinade, juste un badigeon d'huile aux herbes",
      "Saisir tous les côtés à la poêle",
      "Finir au four 10-12 min à 200°C",
      "Repos de 8 min avant découpe",
      "Servir en médaillons rosés"
    ],
    caracteristiques: {
      texture: "Soyeuse et tendre",
      gout: "Subtil, légèrement boisé",
      gras: "Inexistant",
      fibres: "Ultra-fines",
      couleur: "Rose soutenu à cœur",
      tenue: "Découpe gastronomique"
    },
    sauces: [
      { nom: "Sauce au cassis", type: "fruitée", description: "Cassis et fond de gibier" },
      { nom: "Beurre noisette", type: "simple", description: "Beurre doré aux herbes" }
    ],
    accompagnements: [
      { nom: "Purée de céleri-rave", recetteId: "puree_celeri", type: "légume" },
      { nom: "Gnocchis dorés", recetteId: "gnocchis_poeles", type: "féculent" },
      { nom: "Girolles sautées", recetteId: "girolles_poelees", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Surcuisson", consequence: "Perd tout son intérêt", solution: "Maximum 55°C à cœur" },
      { erreur: "Sauce dominante", consequence: "Masque la finesse", solution: "Sauces légères et fruitées" }
    ],
    leSaviezVous: "La selle de biche est considérée par de nombreux chefs comme supérieure à celle du cerf. Elle fond littéralement en bouche quand elle est correctement préparée."
  },

  "Épaule de biche": {
    anatomie: {
      localisation: "Membre antérieur",
      origine: "Partie avant",
      muscles: ["Deltoïde", "Triceps", "Biceps"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Morceau plus ferme, idéal pour braisage ou civet",
      "Mariner 36-48h dans un vin aromatique",
      "Désosser pour faciliter le service",
      "Braiser 2h30-3h à feu très doux",
      "Le collagène fond et attendrit la viande",
      "Réduire le jus pour une sauce onctueuse"
    ],
    caracteristiques: {
      texture: "Fondante après braisage",
      gout: "Prononcé et savoureux",
      gras: "Tissu conjonctif gélatineux",
      fibres: "Se défont à la cuisson",
      couleur: "Brune après braisage",
      tenue: "Se délite en filaments"
    },
    sauces: [
      { nom: "Jus de braisage réduit", type: "naturelle", description: "Concentré de cuisson" },
      { nom: "Sauce grand veneur", type: "classique", description: "Traditionnelle du gibier" }
    ],
    accompagnements: [
      { nom: "Spätzle maison", recetteId: "spatzle", type: "féculent" },
      { nom: "Chou rouge confit", recetteId: "chou_rouge_braise", type: "légume" },
      { nom: "Purée de marrons", recetteId: "puree_marrons", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Braisage insuffisant", consequence: "Viande encore ferme", solution: "2h30 minimum de cuisson douce" },
      { erreur: "Feu trop fort", consequence: "Viande filandreuse", solution: "Frémissement, pas ébullition" }
    ],
    leSaviezVous: "L'épaule de biche est souvent utilisée pour préparer le traditionnel 'salmis', une préparation où la viande est d'abord rôtie puis finie en sauce."
  },

  "Filet de biche": {
    anatomie: {
      localisation: "Sous la colonne vertébrale",
      origine: "Muscle psoas",
      muscles: ["Psoas major", "Psoas minor"],
      categorie: "Morceau ultra-noble"
    },
    techniqueDuChef: [
      "Le filet de biche est d'une délicatesse rare",
      "Ne jamais mariner, juste assaisonner",
      "Saisir 1 min par face dans une poêle fumante",
      "Cuisson saignant à rosé uniquement (50-54°C)",
      "Laisser reposer 5 min",
      "Trancher en médaillons généreux"
    ],
    caracteristiques: {
      texture: "Exceptionnellement fondante",
      gout: "Très fin, presque sucré",
      gras: "Aucun",
      fibres: "Imperceptibles",
      couleur: "Rouge rubis à cœur",
      tenue: "Médaillons parfaits"
    },
    sauces: [
      { nom: "Jus de truffe", type: "luxe", description: "Simple jus truffé" },
      { nom: "Sauce aux griottes", type: "fruitée", description: "Cerises et fond léger" }
    ],
    accompagnements: [
      { nom: "Risotto aux truffes", recetteId: "risotto_truffe", type: "féculent" },
      { nom: "Topinambours rôtis", recetteId: "topinambours_rotis", type: "légume" },
      { nom: "Purée truffée", recetteId: "puree_truffee", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson au-delà du rosé", consequence: "Ruine le morceau", solution: "Maximum 54°C à cœur" },
      { erreur: "Accompagnements dominants", consequence: "Éclipsent la finesse", solution: "Garnitures délicates" }
    ],
    leSaviezVous: "Le filet de biche est si tendre qu'il peut presque se manger cru en tartare. Certains grands chefs le servent juste saisi 30 secondes par face, comme un tataki."
  }
};

// ============================================
// LIÈVRE (3 morceaux)
// ============================================
const lievreEnriched = {
  "Lièvre entier": {
    anatomie: {
      localisation: "Animal complet",
      origine: "Lièvre européen (Lepus europaeus)",
      muscles: ["Tous les muscles du corps"],
      categorie: "Gibier à poil"
    },
    techniqueDuChef: [
      "Choisir un lièvre de l'année (levraut) pour plus de tendreté",
      "Réserver le sang pour le civet (à conserver au frais avec un peu de vinaigre)",
      "Dépouiller et vider soigneusement",
      "Séparer les morceaux : râble, cuisses, épaules",
      "Le foie est un met délicat à poêler rapidement",
      "Le lièvre se cuisine entier rôti ou découpé"
    ],
    caracteristiques: {
      texture: "Variable selon les morceaux",
      gout: "Fort et sauvage, très caractéristique",
      gras: "Très maigre",
      fibres: "Serrées",
      couleur: "Rouge très foncé, presque brun",
      tenue: "Chair ferme"
    },
    sauces: [
      { nom: "Sauce royale", type: "classique", description: "Liaison au sang et foie" },
      { nom: "Sauce au genièvre", type: "traditionnelle", description: "Baies de genièvre et fond" }
    ],
    accompagnements: [
      { nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" },
      { nom: "Choux de Bruxelles", recetteId: "choux_bruxelles", type: "légume" },
      { nom: "Nouilles au beurre", recetteId: "nouilles_beurre", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Confondre avec le lapin", consequence: "Cuisson inadaptée", solution: "Le lièvre nécessite plus de temps" },
      { erreur: "Jeter le sang", consequence: "Perte pour les sauces", solution: "Réserver le sang avec du vinaigre" }
    ],
    leSaviezVous: "Le lièvre peut atteindre 70 km/h à la course ! En cuisine, le 'Lièvre à la Royale' est l'une des préparations les plus complexes de la gastronomie française, demandant plusieurs jours de préparation."
  },

  "Râbles de lièvre": {
    anatomie: {
      localisation: "Partie dorsale du lièvre",
      origine: "Du bas des côtes au bassin",
      muscles: ["Longissimus dorsi", "Multifidus"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Le râble est le morceau le plus fin du lièvre",
      "Peut se cuisiner avec ou sans os",
      "Marinade légère de 12h au vin blanc",
      "Rôtir à four vif (220°C) 15-20 min",
      "Cuisson rosée obligatoire",
      "Lever les filets en suivant l'os"
    ],
    caracteristiques: {
      texture: "Tendre si bien cuit",
      gout: "Fin mais prononcé",
      gras: "Très maigre",
      fibres: "Courtes et fines",
      couleur: "Rouge sombre, rosé à cœur",
      tenue: "Filets élégants"
    },
    sauces: [
      { nom: "Sauce moutarde à l'ancienne", type: "classique", description: "Moutarde en grains et crème" },
      { nom: "Sauce au thym", type: "provençale", description: "Infusion de thym frais" }
    ],
    accompagnements: [
      { nom: "Gratin de pommes de terre", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Champignons des bois", recetteId: "champignons_sautes", type: "légume" },
      { nom: "Poires au vin", recetteId: "poires_vin", type: "fruit" }
    ],
    erreursAEviter: [
      { erreur: "Surcuisson", consequence: "Chair sèche et dure", solution: "Rosé obligatoire, repos important" },
      { erreur: "Oublier de barder", consequence: "Croûte desséchée", solution: "Protéger avec une barde de lard" }
    ],
    leSaviezVous: "Le râble de lièvre était le mets préféré de l'écrivain Alexandre Dumas, qui lui consacra plusieurs pages dans son 'Grand Dictionnaire de Cuisine' publié en 1873."
  },

  "Cuisses de lièvre": {
    anatomie: {
      localisation: "Membres postérieurs",
      origine: "Pattes arrière très musclées",
      muscles: ["Quadriceps", "Ischio-jambiers", "Gastrocnémien"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Les cuisses sont plus fermes que le râble",
      "Mariner 24-48h dans un vin rouge",
      "Idéales pour le civet traditionnel",
      "Braiser longuement 2-3h",
      "La chair doit se détacher de l'os",
      "Peuvent aussi être confites"
    ],
    caracteristiques: {
      texture: "Ferme, fondante après braisage",
      gout: "Très prononcé",
      gras: "Maigre avec tendons",
      fibres: "Longues, se défont à la cuisson",
      couleur: "Brune après braisage",
      tenue: "Chair qui se détache de l'os"
    },
    sauces: [
      { nom: "Sauce civet", type: "traditionnelle", description: "Vin rouge, sang, lardons" },
      { nom: "Sauce aux pruneaux", type: "sucrée-salée", description: "Pruneaux et armagnac" }
    ],
    accompagnements: [
      { nom: "Tagliatelles fraîches", recetteId: "tagliatelles_fraiches", type: "féculent" },
      { nom: "Chou vert braisé", recetteId: "chou_vert_braise", type: "légume" },
      { nom: "Navets glacés", recetteId: "navets_glaces", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson trop courte", consequence: "Viande dure et sèche", solution: "Braiser jusqu'à tendreté complète" },
      { erreur: "Marinade insuffisante", consequence: "Goût trop fort", solution: "48h de marinade minimum" }
    ],
    leSaviezVous: "Les cuisses de lièvre étaient autrefois réservées aux serviteurs lors des chasses royales. Aujourd'hui, le civet de lièvre aux cuisses est considéré comme un plat d'exception."
  }
};

// ============================================
// FAISAN (3 morceaux)
// ============================================
const faisanEnriched = {
  "Faisan entier": {
    anatomie: {
      localisation: "Volatile complet",
      origine: "Faisan commun (Phasianus colchicus)",
      muscles: ["Pectoraux", "Cuisses"],
      categorie: "Gibier à plumes noble"
    },
    techniqueDuChef: [
      "Choisir une poule faisane pour plus de tendreté",
      "Faisander 3-5 jours au réfrigérateur pour attendrir",
      "Barder généreusement de lard",
      "Rôtir à 200°C, 20-25 min par livre",
      "Arroser toutes les 10 min",
      "Le faisan doit rester rosé (blanc légèrement nacré)"
    ],
    caracteristiques: {
      texture: "Chair ferme et fine",
      gout: "Délicat, légèrement boisé",
      gras: "Maigre, nécessite du lard",
      fibres: "Fines sur les filets",
      couleur: "Chair claire, peau dorée",
      tenue: "Se découpe en portions classiques"
    },
    sauces: [
      { nom: "Sauce aux raisins", type: "classique", description: "Raisins frais et fond de volaille" },
      { nom: "Sauce au champagne", type: "festive", description: "Champagne et crème" },
      { nom: "Sauce forestière", type: "traditionnelle", description: "Champignons des bois" }
    ],
    accompagnements: [
      { nom: "Choux de Bruxelles au lard", recetteId: "choux_bruxelles_lard", type: "légume" },
      { nom: "Marrons glacés", recetteId: "marrons_poeles", type: "garniture" },
      { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Ne pas faisander", consequence: "Chair trop ferme", solution: "3-5 jours de maturation" },
      { erreur: "Trop cuire", consequence: "Chair sèche", solution: "Filets juste rosés" }
    ],
    leSaviezVous: "Le faisan a été introduit en France par les Romains. Il tire son nom de la région du Phase (actuelle Géorgie), d'où il est originaire. Un faisan mâle peut mesurer jusqu'à 90 cm avec sa queue !"
  },

  "Suprêmes de faisan": {
    anatomie: {
      localisation: "Poitrine du faisan",
      origine: "Muscles pectoraux",
      muscles: ["Grand pectoral", "Petit pectoral"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Lever les suprêmes en suivant le bréchet",
      "Conserver la peau pour protéger la chair",
      "Ne pas mariner, simple assaisonnement",
      "Saisir côté peau dans une poêle chaude",
      "Cuire doucement pour garder la chair moelleuse",
      "Repos de 5 min avant service"
    ],
    caracteristiques: {
      texture: "Tendre et délicate",
      gout: "Fin, légèrement gibier",
      gras: "Très peu",
      fibres: "Fines et courtes",
      couleur: "Blanc nacré à rosé",
      tenue: "Tranches élégantes"
    },
    sauces: [
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Crème et morilles" },
      { nom: "Jus au cognac", type: "simple", description: "Déglaçage au cognac" }
    ],
    accompagnements: [
      { nom: "Risotto au parmesan", recetteId: "risotto_parmesan", type: "féculent" },
      { nom: "Épinards frais", recetteId: "epinards_beurre", type: "légume" },
      { nom: "Purée de panais", recetteId: "puree_panais", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Retirer la peau", consequence: "Chair qui sèche", solution: "Garder la peau pour la cuisson" },
      { erreur: "Feu trop vif", consequence: "Extérieur brûlé, intérieur cru", solution: "Feu moyen, cuisson patiente" }
    ],
    leSaviezVous: "Les suprêmes de faisan étaient le plat signature d'Auguste Escoffier au Ritz. Il les préparait 'à la Souvaroff', farcis de foie gras et truffes, cuits en croûte."
  },

  "Cuisses de faisan": {
    anatomie: {
      localisation: "Membres inférieurs",
      origine: "Pattes du faisan",
      muscles: ["Quadriceps", "Ischio-jambiers"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Les cuisses sont plus fermes que les suprêmes",
      "Idéales pour confits ou braisages",
      "Saisir avant de braiser",
      "Cuire 1h30-2h à feu doux",
      "La chair doit se détacher de l'os",
      "Peuvent être confites dans la graisse de canard"
    ],
    caracteristiques: {
      texture: "Ferme, fondante après braisage",
      gout: "Plus prononcé que les blancs",
      gras: "Peu mais plus que les blancs",
      fibres: "Se défont à la cuisson longue",
      couleur: "Chair plus sombre",
      tenue: "Chair qui se détache"
    },
    sauces: [
      { nom: "Sauce au chou", type: "traditionnelle", description: "Choucroute en accompagnement" },
      { nom: "Sauce aux pommes", type: "sucrée-salée", description: "Compote de pommes acidulée" }
    ],
    accompagnements: [
      { nom: "Choucroute", recetteId: "choucroute", type: "légume" },
      { nom: "Lentilles vertes", recetteId: "lentilles_vertes", type: "légumineuse" },
      { nom: "Pommes au four", recetteId: "pommes_four", type: "fruit" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson trop rapide", consequence: "Cuisses restent dures", solution: "Braisage lent obligatoire" },
      { erreur: "Manque de liquide", consequence: "Chair sèche", solution: "Maintenir le niveau de braising" }
    ],
    leSaviezVous: "En Alsace, les cuisses de faisan sont traditionnellement préparées sur un lit de choucroute au champagne, un mariage parfait entre gibier et traditions locales."
  }
};

// ============================================
// LAPIN DE GARENNE (5 morceaux)
// ============================================
const lapinGarenneEnriched = {
  "Lapin entier": {
    anatomie: {
      localisation: "Animal complet",
      origine: "Lapin sauvage européen",
      muscles: ["Tous les muscles"],
      categorie: "Petit gibier à poil"
    },
    techniqueDuChef: [
      "Le lapin de garenne est plus petit que le lapin domestique",
      "Chair plus ferme et plus goûteuse",
      "Dépouiller et vider, réserver le foie",
      "Mariner 12-24h dans un vin blanc avec herbes",
      "Découper en 6-8 morceaux pour la cuisson",
      "Peut être rôti entier bardé de lard"
    ],
    caracteristiques: {
      texture: "Plus ferme que le lapin d'élevage",
      gout: "Prononcé, légèrement sauvage",
      gras: "Très maigre",
      fibres: "Serrées",
      couleur: "Rose plus foncé que l'élevage",
      tenue: "Chair dense"
    },
    sauces: [
      { nom: "Sauce chasseur", type: "classique", description: "Tomates, champignons, vin blanc" },
      { nom: "Sauce à la moutarde", type: "traditionnelle", description: "Moutarde de Dijon, crème" }
    ],
    accompagnements: [
      { nom: "Pommes grenaille", recetteId: "pommes_grenaille", type: "féculent" },
      { nom: "Haricots verts", recetteId: "haricots_verts", type: "légume" },
      { nom: "Champignons de Paris", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Confondre avec lapin d'élevage", consequence: "Cuisson inadaptée", solution: "Adapter les temps (chair plus ferme)" },
      { erreur: "Cuisson à feu vif", consequence: "Viande sèche", solution: "Toujours cuire à feu doux" }
    ],
    leSaviezVous: "Le lapin de garenne est originaire d'Espagne. Les Romains l'appelaient 'Hispania' (terre des lapins). Il peut parcourir jusqu'à 40 km/h pour échapper aux prédateurs !"
  },

  "Râbles de lapin de garenne": {
    anatomie: {
      localisation: "Partie dorsale",
      origine: "Du bas des côtes au bassin",
      muscles: ["Longissimus dorsi"],
      categorie: "Morceau noble du lapin"
    },
    techniqueDuChef: [
      "Le râble est le meilleur morceau du lapin",
      "Désosser ou garder sur l'os selon la recette",
      "Peut se farcir si désossé",
      "Rôtir à 180°C, 25-30 min",
      "Arroser régulièrement",
      "Chair doit rester légèrement rosée"
    ],
    caracteristiques: {
      texture: "Tendre et moelleuse",
      gout: "Fin, légèrement gibier",
      gras: "Maigre",
      fibres: "Courtes et fines",
      couleur: "Rose clair",
      tenue: "Se découpe en médaillons"
    },
    sauces: [
      { nom: "Sauce aux olives", type: "provençale", description: "Olives noires, thym" },
      { nom: "Sauce au romarin", type: "aromatique", description: "Infusion de romarin frais" }
    ],
    accompagnements: [
      { nom: "Ratatouille", recetteId: "ratatouille", type: "légume" },
      { nom: "Polenta", recetteId: "polenta_cremeuse", type: "féculent" },
      { nom: "Tomates confites", recetteId: "tomates_confites", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Trop cuire", consequence: "Chair sèche et fibreuse", solution: "Vérifier la cuisson régulièrement" },
      { erreur: "Ne pas laisser reposer", consequence: "Jus qui s'écoule", solution: "5 min de repos minimum" }
    ],
    leSaviezVous: "Le râble de lapin était le plat favori de la reine Victoria. Elle le faisait préparer rôti aux herbes de Provence, importées spécialement de France !"
  },

  "Cuisses de lapin de garenne": {
    anatomie: {
      localisation: "Membres postérieurs",
      origine: "Pattes arrière musculeuses",
      muscles: ["Quadriceps", "Gastrocnémien"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Cuisses plus musclées que le lapin d'élevage",
      "Idéales pour braisage ou confits",
      "Mariner dans un vin blanc aromatisé",
      "Braiser 1h30 minimum",
      "La chair doit se détacher de l'os",
      "Excellentes en civet"
    ],
    caracteristiques: {
      texture: "Ferme, fondante après braisage",
      gout: "Prononcé et savoureux",
      gras: "Maigre mais juteux après braisage",
      fibres: "Se détachent à la cuisson",
      couleur: "Rose foncé cru, brune cuite",
      tenue: "Chair qui se défait"
    },
    sauces: [
      { nom: "Sauce au cidre", type: "normande", description: "Cidre brut et crème" },
      { nom: "Sauce aux pruneaux", type: "sucrée-salée", description: "Pruneaux et vin rouge" }
    ],
    accompagnements: [
      { nom: "Gratin de courgettes", recetteId: "gratin_courgettes", type: "légume" },
      { nom: "Pommes de terre fondantes", recetteId: "pommes_fondantes", type: "féculent" },
      { nom: "Carottes Vichy", recetteId: "carottes_vichy", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Braisage trop court", consequence: "Chair encore dure", solution: "1h30 minimum de cuisson" },
      { erreur: "Feu trop fort", consequence: "Extérieur brûlé", solution: "Feu doux constant" }
    ],
    leSaviezVous: "Les cuisses de lapin de garenne sont plus développées que celles du lapin d'élevage car l'animal sauvage court beaucoup plus. Cette musculature donne une chair plus goûteuse."
  },

  "Épaules de lapin de garenne": {
    anatomie: {
      localisation: "Membres antérieurs",
      origine: "Pattes avant",
      muscles: ["Triceps", "Biceps"],
      categorie: "Morceau de seconde catégorie"
    },
    techniqueDuChef: [
      "Morceaux petits mais savoureux",
      "Toujours braiser ou mijoter",
      "Incorporer aux civets et ragoûts",
      "Cuisson 1h-1h30",
      "La chair se détache facilement de l'os",
      "Apporte du goût aux préparations"
    ],
    caracteristiques: {
      texture: "Gélatineuse après braisage",
      gout: "Très parfumé",
      gras: "Peu mais tissu conjonctif",
      fibres: "Courtes",
      couleur: "Brune après cuisson",
      tenue: "Se défait en filaments"
    },
    sauces: [
      { nom: "Sauce au vin rouge", type: "traditionnelle", description: "Vin corsé et aromates" },
      { nom: "Sauce tomate", type: "méditerranéenne", description: "Tomates, ail, basilic" }
    ],
    accompagnements: [
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Fèves au lard", recetteId: "feves_lard", type: "légumineuse" },
      { nom: "Artichauts poêlés", recetteId: "artichauts_poeles", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson rapide", consequence: "Chair dure", solution: "Toujours braiser longuement" },
      { erreur: "Servir seules", consequence: "Peu de matière", solution: "Intégrer à un plat complet" }
    ],
    leSaviezVous: "Les épaules de lapin sont traditionnellement utilisées pour faire le fameux 'lapin aux girolles' du Périgord, où elles mijotent doucement avec les champignons."
  },

  "Civet de lapin de garenne": {
    anatomie: {
      localisation: "Morceaux divers découpés",
      origine: "Tout le lapin en morceaux",
      muscles: ["Muscles variés"],
      categorie: "Préparation mijotée"
    },
    techniqueDuChef: [
      "Utiliser un lapin entier découpé en morceaux",
      "Mariner 24h dans un vin rouge avec aromates",
      "Réserver le sang si disponible pour lier",
      "Saisir tous les morceaux avant mijotage",
      "Cuire 2h à feu très doux",
      "Lier au sang ou au chocolat en fin de cuisson"
    ],
    caracteristiques: {
      texture: "Fondante et onctueuse",
      gout: "Riche et complexe",
      gras: "Sauce brillante",
      fibres: "Complètement attendries",
      couleur: "Sauce sombre et brillante",
      tenue: "Morceaux qui se défont"
    },
    sauces: [
      { nom: "Sauce au sang", type: "traditionnelle", description: "Liaison classique" },
      { nom: "Sauce au chocolat", type: "moderne", description: "Alternative au sang" }
    ],
    accompagnements: [
      { nom: "Nouilles fraîches", recetteId: "nouilles_fraiches", type: "féculent" },
      { nom: "Champignons des bois", recetteId: "champignons_sautes", type: "légume" },
      { nom: "Petits oignons glacés", recetteId: "oignons_glaces", type: "garniture" }
    ],
    erreursAEviter: [
      { erreur: "Faire bouillir après le sang", consequence: "Sauce grumeleuse", solution: "Lier hors du feu à 80°C max" },
      { erreur: "Morceaux trop gros", consequence: "Cuisson inégale", solution: "Morceaux réguliers de 4-5 cm" }
    ],
    leSaviezVous: "Le civet de lapin de garenne est considéré comme supérieur au civet de lapin domestique par les connaisseurs. La chair sauvage donne une sauce plus riche et parfumée."
  }
};

// ============================================
// PERDRIX (3 morceaux)
// ============================================
const perdrixEnriched = {
  "Perdrix entière": {
    anatomie: {
      localisation: "Volatile complet",
      origine: "Perdrix grise ou rouge",
      muscles: ["Pectoraux", "Cuisses"],
      categorie: "Gibier à plumes délicat"
    },
    techniqueDuChef: [
      "Choisir une perdrix de l'année pour plus de tendreté",
      "Plumer soigneusement, flamber les duvets",
      "Faisander 2-3 jours maximum (moins que le faisan)",
      "Barder de fines tranches de lard",
      "Rôtir à 200°C, 20-25 min",
      "La chair doit rester rosée"
    ],
    caracteristiques: {
      texture: "Chair fine et délicate",
      gout: "Subtil, moins prononcé que le faisan",
      gras: "Très maigre",
      fibres: "Très fines",
      couleur: "Chair claire rosée",
      tenue: "Portions individuelles"
    },
    sauces: [
      { nom: "Sauce au verjus", type: "classique", description: "Jus de raisin vert acidulé" },
      { nom: "Sauce aux raisins", type: "traditionnelle", description: "Raisins frais et fond de volaille" }
    ],
    accompagnements: [
      { nom: "Raisins poêlés", recetteId: "raisins_poeles", type: "fruit" },
      { nom: "Chou braisé", recetteId: "chou_braise", type: "légume" },
      { nom: "Purée de pommes de terre", recetteId: "puree_pommes_terre", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Faisander trop longtemps", consequence: "Goût trop fort", solution: "2-3 jours maximum" },
      { erreur: "Oublier de barder", consequence: "Chair qui sèche", solution: "Barder impérativement" }
    ],
    leSaviezVous: "La perdrix était le gibier préféré de Brillat-Savarin, célèbre gastronome du XIXe siècle. Il écrivait : 'La perdrix est pour le gourmand ce que le diamant est pour le bijoutier.'"
  },

  "Suprêmes de perdrix": {
    anatomie: {
      localisation: "Poitrine de la perdrix",
      origine: "Muscles pectoraux",
      muscles: ["Grand pectoral"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Lever délicatement le long du bréchet",
      "Conserver la peau pour protéger",
      "Simple assaisonnement sel-poivre",
      "Saisir côté peau à feu moyen",
      "Cuisson rapide, chair rosée",
      "Repos de 3-4 min avant service"
    ],
    caracteristiques: {
      texture: "Très tendre et délicate",
      gout: "Fin et subtil",
      gras: "Inexistant",
      fibres: "Imperceptibles",
      couleur: "Blanc nacré rosé",
      tenue: "Portions élégantes"
    },
    sauces: [
      { nom: "Beurre noisette", type: "simple", description: "Beurre doré aux herbes" },
      { nom: "Sauce aux pommes", type: "fruitée", description: "Compote légèrement acidulée" }
    ],
    accompagnements: [
      { nom: "Choux de Bruxelles", recetteId: "choux_bruxelles", type: "légume" },
      { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" },
      { nom: "Purée de châtaignes", recetteId: "puree_chataignes", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Surcuisson", consequence: "Perd toute sa finesse", solution: "Cuisson rosée impérative" },
      { erreur: "Sauce trop puissante", consequence: "Écrase le goût délicat", solution: "Sauces légères uniquement" }
    ],
    leSaviezVous: "Les suprêmes de perdrix sont si délicats qu'ils cuisent en moins de 5 minutes. Les grands chefs les servent souvent simplement poêlés, avec juste une noisette de beurre."
  },

  "Cuisses de perdrix": {
    anatomie: {
      localisation: "Membres inférieurs",
      origine: "Pattes de la perdrix",
      muscles: ["Muscles des cuisses"],
      categorie: "Morceau à confire"
    },
    techniqueDuChef: [
      "Les cuisses sont plus fermes que les blancs",
      "Idéales pour les confits",
      "Saler et laisser dégorger 24h",
      "Confire dans la graisse de canard 2h",
      "Ou braiser avec légumes racines",
      "La chair doit se détacher de l'os"
    ],
    caracteristiques: {
      texture: "Fondante après confitage",
      gout: "Plus prononcé que les blancs",
      gras: "Absorbé lors du confitage",
      fibres: "Se détachent facilement",
      couleur: "Chair brune dorée",
      tenue: "Chair qui se défait"
    },
    sauces: [
      { nom: "Jus de confitage", type: "naturelle", description: "Graisse dégraissée réduite" },
      { nom: "Sauce au chou", type: "traditionnelle", description: "Accompagnement de chou braisé" }
    ],
    accompagnements: [
      { nom: "Choucroute", recetteId: "choucroute", type: "légume" },
      { nom: "Lentilles vertes", recetteId: "lentilles_vertes", type: "légumineuse" },
      { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Confitage trop court", consequence: "Chair encore ferme", solution: "2h minimum à 80°C" },
      { erreur: "Température trop haute", consequence: "Chair qui durcit", solution: "Graisse frémissante, pas bouillante" }
    ],
    leSaviezVous: "Les cuisses de perdrix confites étaient autrefois conservées dans des pots de grès remplis de graisse. Cette méthode permettait de les garder plusieurs mois avant l'invention du réfrigérateur."
  }
};

// ============================================
// CAILLE (2 morceaux)
// ============================================
const cailleEnriched = {
  "Caille entière": {
    anatomie: {
      localisation: "Petit volatile complet",
      origine: "Caille des blés (sauvage) ou d'élevage",
      muscles: ["Pectoraux", "Cuisses miniatures"],
      categorie: "Petit gibier à plumes"
    },
    techniqueDuChef: [
      "La caille pèse environ 150g, portion individuelle",
      "Vider et flamber les duvets résiduels",
      "Peut être farcie pour plus de saveur",
      "Brider pour maintenir la forme",
      "Rôtir à 200°C, 15-18 min",
      "La chair doit rester rosée"
    ],
    caracteristiques: {
      texture: "Tendre et moelleuse",
      gout: "Délicat, légèrement gibier",
      gras: "Très peu",
      fibres: "Très fines",
      couleur: "Chair rosée",
      tenue: "Se mange entière"
    },
    sauces: [
      { nom: "Sauce aux raisins", type: "classique", description: "Raisins frais et jus de veau" },
      { nom: "Jus au miel et thym", type: "aromatique", description: "Miel et thym frais" }
    ],
    accompagnements: [
      { nom: "Polenta crémeuse", recetteId: "polenta_cremeuse", type: "féculent" },
      { nom: "Petits pois à la française", recetteId: "petits_pois_francaise", type: "légume" },
      { nom: "Figues rôties", recetteId: "figues_roties", type: "fruit" }
    ],
    erreursAEviter: [
      { erreur: "Trop cuire", consequence: "Chair sèche instantanément", solution: "15-18 min maximum" },
      { erreur: "Oublier de brider", consequence: "Forme irrégulière", solution: "Ficeler les pattes et ailes" }
    ],
    leSaviezVous: "La caille est le plus petit gibier à plumes. Dans l'Égypte ancienne, elle était considérée comme sacrée et représentait le symbole du renouveau. Les Romains l'élevaient déjà pour sa chair délicate."
  },

  "Caille désossée farcie": {
    anatomie: {
      localisation: "Caille sans os, reformée",
      origine: "Caille entièrement désossée",
      muscles: ["Chair de caille reformée"],
      categorie: "Préparation gastronomique"
    },
    techniqueDuChef: [
      "Désosser la caille par le dos en gardant la peau intacte",
      "Préparer une farce (foie gras, champignons, ou chair à saucisse)",
      "Farcir modérément pour ne pas éclater",
      "Refermer et ficeler en forme originale",
      "Saisir à la poêle puis four à 180°C, 12-15 min",
      "Trancher pour montrer la farce"
    ],
    caracteristiques: {
      texture: "Contraste chair tendre et farce moelleuse",
      gout: "Complexe selon la farce",
      gras: "Dépend de la farce",
      fibres: "Chair fine autour de la farce",
      couleur: "Peau dorée, farce visible à la coupe",
      tenue: "Se tranche proprement"
    },
    sauces: [
      { nom: "Sauce au Porto", type: "classique", description: "Porto réduit et fond de veau" },
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Si farcie aux champignons" }
    ],
    accompagnements: [
      { nom: "Risotto au safran", recetteId: "risotto_safran", type: "féculent" },
      { nom: "Épinards jeunes", recetteId: "epinards_beurre", type: "légume" },
      { nom: "Purée de pommes de terre", recetteId: "puree_pommes_terre", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Trop farcir", consequence: "Caille qui éclate", solution: "Farce modérée, 30-40g max" },
      { erreur: "Mal ficeler", consequence: "Farce qui s'échappe", solution: "Ficeler soigneusement en plusieurs points" }
    ],
    leSaviezVous: "La caille désossée farcie au foie gras est une spécialité des tables de Noël dans le Sud-Ouest. Elle permet de servir un plat élégant en portions individuelles parfaitement calibrées."
  }
};

// ============================================
// BÉCASSE (2 morceaux)
// ============================================
const becasseEnriched = {
  "Bécasse entière": {
    anatomie: {
      localisation: "Oiseau migrateur complet",
      origine: "Bécasse des bois (Scolopax rusticola)",
      muscles: ["Pectoraux", "Cuisses fines"],
      categorie: "Roi des gibiers à plumes"
    },
    techniqueDuChef: [
      "La bécasse ne se vide traditionnellement pas (sauf le gésier)",
      "Les intestins sont utilisés pour les tartines",
      "Faisander 4-6 jours pour développer les arômes",
      "Barder et brider soigneusement",
      "Rôtir à 200°C, 15-18 min",
      "Servir rosé avec les 'rôties' (tartines aux entrailles)"
    ],
    caracteristiques: {
      texture: "Chair fine et fondante",
      gout: "Intense et unique, le plus fin des gibiers",
      gras: "Maigre",
      fibres: "Très délicates",
      couleur: "Rose soutenu",
      tenue: "Se déguste avec les doigts"
    },
    sauces: [
      { nom: "Jus court", type: "simple", description: "Simple déglaçage au cognac" },
      { nom: "Salmis", type: "classique", description: "Sauce aux carcasses broyées" }
    ],
    accompagnements: [
      { nom: "Rôties (tartines)", recetteId: "roties_becasse", type: "garniture traditionnelle" },
      { nom: "Céleri-rave rémoulade", recetteId: "celeri_remoulade", type: "légume" },
      { nom: "Pommes Pont-Neuf", recetteId: "pommes_pont_neuf", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Vider la bécasse", consequence: "Perd la moitié de son intérêt", solution: "Ne retirer que le gésier" },
      { erreur: "Faisander insuffisamment", consequence: "Goût pas développé", solution: "4-6 jours de faisandage" }
    ],
    leSaviezVous: "La bécasse est surnommée 'la dame des bois' ou 'le roi des gibiers'. Les chasseurs la vénèrent tant que réussir un 'doublé' (deux bécasses) est considéré comme l'exploit d'une vie. Les grands chefs comme Alain Ducasse la considèrent comme le gibier suprême."
  },

  "Suprêmes de bécasse": {
    anatomie: {
      localisation: "Poitrine de la bécasse",
      origine: "Muscles pectoraux",
      muscles: ["Grand pectoral"],
      categorie: "Morceau d'exception absolue"
    },
    techniqueDuChef: [
      "Lever les suprêmes après faisandage",
      "Conserver la peau fine",
      "Saisir 1 min par face maximum",
      "Cuisson rosé vif, presque saignante",
      "Ne pas masquer le goût avec une sauce",
      "Servir immédiatement"
    ],
    caracteristiques: {
      texture: "Incomparable, fondante",
      gout: "Le plus fin des gibiers",
      gras: "Inexistant",
      fibres: "Imperceptibles",
      couleur: "Rose intense",
      tenue: "Portions délicates"
    },
    sauces: [
      { nom: "Simple jus de carcasse", type: "naturelle", description: "Réduction des os" },
      { nom: "Beurre clarifié", type: "simple", description: "Pour la cuisson uniquement" }
    ],
    accompagnements: [
      { nom: "Céleri en purée", recetteId: "puree_celeri", type: "légume" },
      { nom: "Truffe fraîche", recetteId: "truffe_lamelle", type: "luxe" },
      { nom: "Pain de campagne grillé", recetteId: "pain_grille", type: "garniture" }
    ],
    erreursAEviter: [
      { erreur: "Toute surcuisson", consequence: "Massacre d'un produit d'exception", solution: "Rosé vif, 1 min par face" },
      { erreur: "Sauce dominante", consequence: "Perte de la finesse unique", solution: "Jus très léger uniquement" }
    ],
    leSaviezVous: "Les suprêmes de bécasse peuvent atteindre des prix faramineux dans les grandes tables. Chez certains restaurants étoilés, un plat de bécasse dépasse les 200€. Le produit est rare car la bécasse ne peut pas être élevée."
  }
};

// ============================================
// CANARD SAUVAGE (3 morceaux)
// ============================================
const canardSauvageEnriched = {
  "Canard sauvage entier": {
    anatomie: {
      localisation: "Volatile aquatique complet",
      origine: "Colvert, Sarcelle ou Pilet",
      muscles: ["Pectoraux développés", "Cuisses musculeuses"],
      categorie: "Gibier d'eau"
    },
    techniqueDuChef: [
      "Plumer et flamber soigneusement",
      "Faisander 2-4 jours selon le goût",
      "Chair plus ferme et goûteuse que le canard d'élevage",
      "Barder pour compenser le manque de gras",
      "Rôtir à 200°C, 25-30 min pour un colvert",
      "Servir rosé, chair rose soutenu"
    ],
    caracteristiques: {
      texture: "Plus ferme que le canard d'élevage",
      gout: "Prononcé, goût de marais caractéristique",
      gras: "Beaucoup moins gras que l'élevage",
      fibres: "Serrées et longues",
      couleur: "Rouge foncé",
      tenue: "Belle présentation entière"
    },
    sauces: [
      { nom: "Sauce bigarade", type: "classique", description: "Orange amère" },
      { nom: "Sauce au sang", type: "traditionnelle", description: "Liaison au sang du canard" },
      { nom: "Sauce aux cerises", type: "fruitée", description: "Cerises et kirsch" }
    ],
    accompagnements: [
      { nom: "Navets confits", recetteId: "navets_confits", type: "légume" },
      { nom: "Choux rouges aux pommes", recetteId: "chou_rouge_pommes", type: "légume" },
      { nom: "Pommes de terre sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Cuire comme un canard gras", consequence: "Chair trop sèche", solution: "Barder et arroser fréquemment" },
      { erreur: "Surcuisson", consequence: "Viande coriace", solution: "Servir rosé, 25-30 min max" }
    ],
    leSaviezVous: "Le colvert est l'ancêtre du canard domestique. Un canard sauvage peut voler à plus de 80 km/h ! Les chasseurs le traquent à l'aube dans les marais, ce qui en fait un gibier particulièrement convoité."
  },

  "Magrets de canard sauvage": {
    anatomie: {
      localisation: "Poitrine du canard sauvage",
      origine: "Muscles pectoraux développés par le vol",
      muscles: ["Grand pectoral", "Petit pectoral"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Moins gras que le magret de canard d'élevage",
      "Ne pas quadriller la peau (moins de gras)",
      "Assaisonner simplement",
      "Saisir côté peau d'abord à feu moyen",
      "Retourner et finir côté chair",
      "Cuisson saignant à rosé obligatoire"
    ],
    caracteristiques: {
      texture: "Plus ferme, presque comme du gibier à poil",
      gout: "Intense, notes de sous-bois",
      gras: "Couche de gras fine",
      fibres: "Longues et serrées",
      couleur: "Rouge très sombre",
      tenue: "Tranches fines"
    },
    sauces: [
      { nom: "Sauce aux airelles", type: "nordique", description: "Baies et jus de viande" },
      { nom: "Jus au poivre vert", type: "épicée", description: "Poivre vert de Madagascar" }
    ],
    accompagnements: [
      { nom: "Purée de céleri-rave", recetteId: "puree_celeri", type: "légume" },
      { nom: "Endives caramélisées", recetteId: "endives_caramelisees", type: "légume" },
      { nom: "Pommes de terre grenaille", recetteId: "pommes_grenaille", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Cuire comme un magret gras", consequence: "Chair sèche", solution: "Cuisson plus courte, sans quadrillage" },
      { erreur: "Cuisson au-delà du rosé", consequence: "Perte de jutosité", solution: "Saignant à rosé uniquement" }
    ],
    leSaviezVous: "Le magret de canard sauvage contient jusqu'à 3 fois moins de gras que celui du canard mulard. Les pectoraux sont très développés car l'animal vole quotidiennement, contrairement au canard d'élevage."
  },

  "Cuisses de canard sauvage": {
    anatomie: {
      localisation: "Membres inférieurs",
      origine: "Pattes palmées musculeuses",
      muscles: ["Quadriceps", "Ischio-jambiers"],
      categorie: "Morceau à braiser"
    },
    techniqueDuChef: [
      "Cuisses plus petites et plus fermes que l'élevage",
      "Idéales pour le confit (mais moins de gras rendu)",
      "Ou braiser en sauce 1h30-2h",
      "Mariner dans un vin corsé",
      "La chair doit se détacher de l'os",
      "Peuvent être confites dans du gras de canard d'élevage"
    ],
    caracteristiques: {
      texture: "Ferme, fondante après cuisson longue",
      gout: "Très prononcé, goût sauvage",
      gras: "Peu de gras sous-cutané",
      fibres: "Se détachent à la cuisson",
      couleur: "Brune profonde après cuisson",
      tenue: "Chair qui se défait"
    },
    sauces: [
      { nom: "Sauce aux olives", type: "provençale", description: "Olives noires et tomates" },
      { nom: "Sauce aux pruneaux", type: "sucrée-salée", description: "Pruneaux et armagnac" }
    ],
    accompagnements: [
      { nom: "Haricots blancs", recetteId: "haricots_blancs", type: "légumineuse" },
      { nom: "Pommes de terre confites", recetteId: "pommes_confites", type: "féculent" },
      { nom: "Chou vert braisé", recetteId: "chou_vert_braise", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Confitage sans ajout de gras", consequence: "Cuisses sèches", solution: "Ajouter du gras de canard d'élevage" },
      { erreur: "Cuisson trop courte", consequence: "Chair dure", solution: "1h30-2h minimum de braisage" }
    ],
    leSaviezVous: "Les cuisses de canard sauvage étaient autrefois salées et conservées dans des pots pour l'hiver. C'est l'origine du confit de canard, devenu emblème de la cuisine du Sud-Ouest."
  }
};

// ============================================
// MARCASSIN (3 morceaux)
// ============================================
const marcassinEnriched = {
  "Rôti de marcassin": {
    anatomie: {
      localisation: "Longe ou cuisse du jeune sanglier",
      origine: "Marcassin de moins d'un an",
      muscles: ["Longissimus dorsi", "Quadriceps"],
      categorie: "Morceau noble du jeune sanglier"
    },
    techniqueDuChef: [
      "Le marcassin a une chair plus tendre que le sanglier adulte",
      "Mariner 24h (moins que l'adulte)",
      "Larder de petits bâtonnets de lard",
      "Rôtir à 180°C, 45-50 min/kg",
      "La viande peut rester légèrement rosée (moins de risque que l'adulte)",
      "Toujours atteindre 71°C à cœur par sécurité"
    ],
    caracteristiques: {
      texture: "Plus tendre que le sanglier",
      gout: "Moins fort, plus délicat",
      gras: "Légèrement plus persillé",
      fibres: "Plus courtes et fines",
      couleur: "Rouge rosé",
      tenue: "Belles tranches"
    },
    sauces: [
      { nom: "Sauce grand veneur", type: "classique", description: "Adaptée au marcassin" },
      { nom: "Sauce aux poires", type: "fruitée", description: "Poires pochées et jus de viande" }
    ],
    accompagnements: [
      { nom: "Purée de marrons", recetteId: "puree_marrons", type: "féculent" },
      { nom: "Pommes au four", recetteId: "pommes_four", type: "fruit" },
      { nom: "Choux de Bruxelles au lard", recetteId: "choux_bruxelles_lard", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Traiter comme un sanglier adulte", consequence: "Viande trop cuite", solution: "Temps de marinade et cuisson réduits" },
      { erreur: "Oublier la sécurité", consequence: "Risque sanitaire", solution: "Toujours 71°C à cœur minimum" }
    ],
    leSaviezVous: "Le marcassin porte des rayures jusqu'à 6 mois environ (d'où son surnom de 'bête rousse'). Sa chair est considérée comme la plus fine du sanglier. Les Romains l'élevaient déjà pour les banquets."
  },

  "Carré de marcassin": {
    anatomie: {
      localisation: "Côtes et longe attenantes",
      origine: "Partie dorsale avec os",
      muscles: ["Longissimus dorsi", "Intercostaux"],
      categorie: "Pièce de prestige"
    },
    techniqueDuChef: [
      "Pièce spectaculaire pour grande occasion",
      "Demander au boucher de parer les os",
      "Marinade légère de 12-24h",
      "Saisir au four très chaud (240°C) 10 min",
      "Baisser à 180°C pour finir la cuisson",
      "Découper en côtes individuelles"
    ],
    caracteristiques: {
      texture: "Tendre entre les côtes",
      gout: "Délicat pour du gibier",
      gras: "Gras intercostal savoureux",
      fibres: "Fines autour des os",
      couleur: "Rosé à cœur",
      tenue: "Présentation impressionnante"
    },
    sauces: [
      { nom: "Sauce aux girolles", type: "forestière", description: "Girolles fraîches et crème" },
      { nom: "Jus au thym", type: "aromatique", description: "Infusion de thym frais" }
    ],
    accompagnements: [
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Épinards à la crème", recetteId: "epinards_creme", type: "légume" },
      { nom: "Champignons des bois", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Ne pas saisir d'abord", consequence: "Croûte molle", solution: "Commencer à four très chaud" },
      { erreur: "Découper trop tôt", consequence: "Jus qui s'échappe", solution: "Repos de 10 min" }
    ],
    leSaviezVous: "Le carré de marcassin était le plat favori des chasses princières au XVIIIe siècle. Un carré entier pouvait nourrir toute une tablée de chasseurs après une journée de traque."
  },

  "Filet de marcassin": {
    anatomie: {
      localisation: "Sous la colonne vertébrale",
      origine: "Muscle psoas",
      muscles: ["Psoas major"],
      categorie: "Morceau le plus noble"
    },
    techniqueDuChef: [
      "Le filet de marcassin est d'une grande finesse",
      "Pas de marinade nécessaire",
      "Retirer la fine membrane argentée",
      "Saisir à feu vif 2 min par face",
      "Repos de 5 min",
      "Trancher en médaillons épais"
    ],
    caracteristiques: {
      texture: "Très tendre",
      gout: "Délicat, léger goût sauvage",
      gras: "Très maigre",
      fibres: "Courtes et fines",
      couleur: "Rose vif",
      tenue: "Médaillons parfaits"
    },
    sauces: [
      { nom: "Sauce au poivre vert", type: "classique", description: "Poivre vert et crème" },
      { nom: "Beurre aux herbes", type: "simple", description: "Beurre composé" }
    ],
    accompagnements: [
      { nom: "Risotto aux cèpes", recetteId: "risotto_cepes", type: "féculent" },
      { nom: "Haricots verts fins", recetteId: "haricots_verts", type: "légume" },
      { nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" }
    ],
    erreursAEviter: [
      { erreur: "Surcuisson", consequence: "Viande sèche", solution: "Rosé impératif (58-60°C), 71°C minimum par sécurité" },
      { erreur: "Accompagnements dominants", consequence: "Masquent la finesse", solution: "Garnitures légères" }
    ],
    leSaviezVous: "Le filet de marcassin est si rare qu'un animal n'en produit que 200-300g. Les grands chefs le réservent pour leurs menus dégustation les plus exclusifs."
  }
};

// ============================================
// PIGEON RAMIER (3 morceaux)
// ============================================
const pigeonRamierEnriched = {
  "Pigeon ramier entier": {
    anatomie: {
      localisation: "Volatile sauvage complet",
      origine: "Pigeon ramier ou Palombe (Columba palumbus)",
      muscles: ["Pectoraux très développés", "Cuisses fines"],
      categorie: "Gibier à plumes noble"
    },
    techniqueDuChef: [
      "La palombe est le pigeon sauvage du Sud-Ouest",
      "Plumer et flamber, vider mais garder le foie",
      "Faisander 2-3 jours pour développer les arômes",
      "Brider et barder de lard fin",
      "Rôtir à 200°C, 18-22 min",
      "Servir rosé, la chair doit être rose à cœur"
    ],
    caracteristiques: {
      texture: "Chair ferme et savoureuse",
      gout: "Prononcé, notes boisées",
      gras: "Très maigre",
      fibres: "Serrées sur les filets",
      couleur: "Rouge sombre",
      tenue: "Portions individuelles"
    },
    sauces: [
      { nom: "Sauce salmis", type: "classique", description: "Sauce aux carcasses" },
      { nom: "Sauce aux cèpes", type: "forestière", description: "Cèpes et fond de pigeon" },
      { nom: "Sauce au vin de Bordeaux", type: "régionale", description: "Vin rouge et échalotes" }
    ],
    accompagnements: [
      { nom: "Cèpes à la bordelaise", recetteId: "cepes_bordelaise", type: "légume" },
      { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" },
      { nom: "Salade de mâche aux noix", recetteId: "salade_mache_noix", type: "salade" }
    ],
    erreursAEviter: [
      { erreur: "Surcuisson", consequence: "Chair sèche et dure", solution: "Toujours servir rosé" },
      { erreur: "Oublier de barder", consequence: "Chair desséchée", solution: "Barder impérativement" }
    ],
    leSaviezVous: "La palombe est l'obsession des chasseurs du Sud-Ouest. Les 'palombières' sont des installations de chasse élaborées, véritables cabanes perchées dans les arbres, où les chasseurs attendent les vols migratoires d'octobre."
  },

  "Suprêmes de pigeon ramier": {
    anatomie: {
      localisation: "Poitrine du pigeon",
      origine: "Muscles pectoraux",
      muscles: ["Grand pectoral", "Petit pectoral"],
      categorie: "Morceau noble"
    },
    techniqueDuChef: [
      "Lever les suprêmes en suivant le bréchet",
      "Garder la peau pour la cuisson",
      "Assaisonner simplement",
      "Saisir côté peau 2 min",
      "Retourner et finir 1-2 min",
      "Servir immédiatement, rosé"
    ],
    caracteristiques: {
      texture: "Ferme mais tendre si bien cuit",
      gout: "Intense et complexe",
      gras: "Maigre",
      fibres: "Courtes",
      couleur: "Rouge rubis à cœur",
      tenue: "Tranches élégantes"
    },
    sauces: [
      { nom: "Jus au cassis", type: "fruitée", description: "Cassis et fond de pigeon" },
      { nom: "Sauce au foie gras", type: "luxe", description: "Foie gras émulsionné" }
    ],
    accompagnements: [
      { nom: "Purée de panais", recetteId: "puree_panais", type: "légume" },
      { nom: "Navets confits au miel", recetteId: "navets_miel", type: "légume" },
      { nom: "Polenta aux herbes", recetteId: "polenta_herbes", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Cuisson au-delà du rosé", consequence: "Chair immangeable", solution: "Rosé vif impératif" },
      { erreur: "Repos insuffisant", consequence: "Sang qui s'écoule", solution: "3-4 min de repos" }
    ],
    leSaviezVous: "Les suprêmes de palombe sont considérés par beaucoup comme supérieurs à ceux du pigeon d'élevage. La chair est plus dense et plus goûteuse grâce à la vie sauvage de l'oiseau et ses longs vols migratoires."
  },

  "Cuisses de pigeon ramier": {
    anatomie: {
      localisation: "Membres inférieurs",
      origine: "Pattes du pigeon",
      muscles: ["Muscles des cuisses"],
      categorie: "Morceau à braiser ou confire"
    },
    techniqueDuChef: [
      "Les cuisses de pigeon sont petites mais savoureuses",
      "Confire dans la graisse de canard 1h30",
      "Ou braiser avec des légumes",
      "La chair doit se détacher de l'os",
      "Peuvent accompagner les suprêmes rôtis",
      "Idéales pour les terrines"
    ],
    caracteristiques: {
      texture: "Fondante après confitage",
      gout: "Très concentré",
      gras: "Absorbe le gras de confitage",
      fibres: "Se défont facilement",
      couleur: "Brune dorée",
      tenue: "Petites portions"
    },
    sauces: [
      { nom: "Jus de confitage", type: "naturelle", description: "Graisse réduite et dégraissée" },
      { nom: "Sauce aux figues", type: "sucrée-salée", description: "Figues et vinaigre balsamique" }
    ],
    accompagnements: [
      { nom: "Salade de gésiers", recetteId: "salade_gesiers", type: "salade" },
      { nom: "Lentilles du Puy", recetteId: "lentilles_puy", type: "légumineuse" },
      { nom: "Pommes de terre sautées", recetteId: "pommes_sautees", type: "féculent" }
    ],
    erreursAEviter: [
      { erreur: "Confitage trop court", consequence: "Chair encore ferme", solution: "1h30 minimum à température douce" },
      { erreur: "Température trop haute", consequence: "Chair qui durcit", solution: "80°C maximum dans le gras" }
    ],
    leSaviezVous: "Dans les Landes, les cuisses de palombe confites sont traditionnellement servies dans une salade avec des gésiers et des foies. C'est un plat emblématique de la cuisine du Sud-Ouest."
  }
};

// ============================================
// EXPORTS
// ============================================
module.exports = {
  sanglierEnriched,
  cerfEnriched,
  chevreuilEnriched,
  bicheEnriched,
  lievreEnriched,
  faisanEnriched,
  lapinGarenneEnriched,
  perdrixEnriched,
  cailleEnriched,
  becasseEnriched,
  canardSauvageEnriched,
  marcassinEnriched,
  pigeonRamierEnriched
};
