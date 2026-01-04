// Données enrichies pour le Boeuf - Morceaux Classiques et Boucher
// Structure: anatomie, techniqueDuChef, caracteristiques, sauces, accompagnements, erreursAEviter, leSaviezVous

const boeufClassiqueEnriched = {
  // === 0: FILET ===
  "Filet": {
    anatomie: {
      localisation: "Muscle psoas situé le long de la colonne vertébrale, dans la cavité abdominale",
      origine: "Partie lombaire de l'animal, sous les vertèbres",
      muscles: ["Psoas major", "Psoas minor", "Iliacus"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Retirer soigneusement la chaîne (membrane fibreuse blanche) à l'aide d'un couteau bien aiguisé",
      "Parer le filet en retirant l'excès de gras et les parties argentées",
      "Ficeler si nécessaire pour une cuisson uniforme (rôti)",
      "Tempérer 1h à température ambiante avant cuisson",
      "Saisir à feu vif pour créer une croûte de Maillard sans cuire l'intérieur",
      "Utiliser une sonde thermomètre pour un contrôle précis de la cuisson"
    ],
    caracteristiques: {
      texture: "Extrêmement tendre, fondante en bouche, aucune mâche",
      gout: "Délicat et subtil, peu prononcé, légèrement sucré",
      gras: "Très maigre (3-5% de matière grasse), persillé fin",
      fibres: "Fines, courtes et serrées",
      couleur: "Rouge vif à rouge foncé selon maturation",
      tenue: "Se défait facilement, nécessite une cuisson précise"
    },
    sauces: [
      { nom: "Béarnaise", type: "classique", description: "Émulsion au beurre, estragon et échalotes" },
      { nom: "Sauce au poivre", type: "classique", description: "Crème, cognac et poivre vert ou noir" },
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Crème, morilles réhydratées, vin jaune" },
      { nom: "Sauce Périgueux", type: "gastronomique", description: "Demi-glace, truffe noire et madère" },
      { nom: "Beurre maître d'hôtel", type: "simple", description: "Beurre composé, persil, citron" },
      { nom: "Sauce bordelaise", type: "classique", description: "Vin rouge, échalotes, moelle" }
    ],
    accompagnements: [
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Pommes de terre sarladaises", recetteId: "pommes_sarladaises", type: "féculent" },
      { nom: "Haricots verts fins", recetteId: "haricots_verts_ail", type: "légume" },
      { nom: "Épinards à la crème", recetteId: "epinards_creme", type: "légume" },
      { nom: "Champignons de Paris sautés", recetteId: "champignons_sautes", type: "légume" },
      { nom: "Frites maison", recetteId: "frites_maison", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire le filet froid",
        consequence: "La viande se contracte, rend son jus et devient sèche à l'extérieur",
        solution: "Sortir le filet 1h avant cuisson pour le tempérer à température ambiante"
      },
      {
        erreur: "Saler trop tôt",
        consequence: "Le sel fait sortir l'eau de la viande par osmose",
        solution: "Saler juste avant de saisir ou après cuisson"
      },
      {
        erreur: "Poêle pas assez chaude",
        consequence: "Viande qui bout au lieu de griller, pas de croûte",
        solution: "Chauffer la poêle à feu vif jusqu'à ce qu'elle fume légèrement"
      },
      {
        erreur: "Piquer la viande pendant la cuisson",
        consequence: "Les jus s'échappent, viande sèche",
        solution: "Utiliser une pince ou une spatule, jamais de fourchette"
      },
      {
        erreur: "Ne pas laisser reposer",
        consequence: "Les jus s'écoulent à la découpe au lieu de se répartir",
        solution: "Laisser reposer 5-7 minutes sous papier alu, le temps de cuisson ÷ 2"
      }
    ],
    leSaviezVous: "Le filet ne représente que 1% du poids total d'un bœuf (environ 3-4 kg pour un animal de 350 kg), ce qui explique son prix élevé. C'est le seul muscle de l'animal qui ne travaille pratiquement jamais, d'où son extrême tendreté. En boucherie, on distingue la tête (partie large), le cœur (partie centrale, idéale pour le Chateaubriand) et la queue (partie fine pour les tournedos)."
  },

  // === 1: ENTRECÔTE ===
  "Entrecôte": {
    anatomie: {
      localisation: "Partie centrale du dos, entre les côtes 7 à 11",
      origine: "Train de côtes de l'animal, partie dorsale",
      muscles: ["Longissimus dorsi (muscle principal)", "Spinalis dorsi (la noix)"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Choisir une entrecôte bien persillée (marbrée de gras) pour plus de saveur",
      "Sortir du réfrigérateur 45 min à 1h avant cuisson",
      "Sécher la surface avec du papier absorbant avant de saisir",
      "Saisir à feu très vif des deux côtés puis baisser le feu",
      "Arroser de beurre moussant en fin de cuisson",
      "Laisser reposer sur une grille pour éviter que la viande baigne dans son jus"
    ],
    caracteristiques: {
      texture: "Tendre et juteuse grâce au persillé",
      gout: "Prononcé, savoureux, notes de noisette grillée",
      gras: "Bien persillé (10-15%), gras intramusculaire",
      fibres: "Moyennes, grain serré",
      couleur: "Rouge soutenu avec marbrures blanches",
      tenue: "Excellente tenue à la cuisson, reste moelleuse"
    },
    sauces: [
      { nom: "Beurre Café de Paris", type: "classique", description: "Beurre composé aux herbes et épices" },
      { nom: "Sauce échalotes", type: "simple", description: "Échalotes confites au vin rouge" },
      { nom: "Sauce au bleu", type: "classique", description: "Crème et roquefort ou fourme d'Ambert" },
      { nom: "Sauce marchand de vin", type: "classique", description: "Vin rouge, échalotes, fond de veau" },
      { nom: "Beurre maître d'hôtel", type: "simple", description: "Beurre, persil, citron" }
    ],
    accompagnements: [
      { nom: "Frites belges", recetteId: "frites_belges", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_vinaigrette", type: "légume" },
      { nom: "Pommes pont-neuf", recetteId: "pommes_pont_neuf", type: "féculent" },
      { nom: "Gratin de courgettes", recetteId: "gratin_courgettes", type: "légume" },
      { nom: "Tomates provençales", recetteId: "tomates_provencales", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Choisir une entrecôte trop maigre",
        consequence: "Viande sèche et sans saveur",
        solution: "Privilégier les pièces bien persillées, le gras = la saveur"
      },
      {
        erreur: "Écraser la viande avec la spatule",
        consequence: "Les jus sont expulsés, viande sèche",
        solution: "Ne jamais appuyer, laisser la viande tranquille"
      },
      {
        erreur: "Retourner trop souvent",
        consequence: "Croûte qui ne se forme pas correctement",
        solution: "Retourner une seule fois quand la face est bien colorée"
      }
    ],
    leSaviezVous: "L'entrecôte tire son nom de sa position anatomique : \"entre les côtes\". La partie appelée \"noix de l'entrecôte\" (muscle Spinalis) est considérée par les connaisseurs comme le morceau le plus savoureux du bœuf. Au Japon, le bœuf de Kobe présente un persillage exceptionnel classé de A1 à A5."
  },

  // === 2: VIANDE HACHÉE DE BŒUF ===
  "Viande hachée de bœuf": {
    anatomie: {
      localisation: "Mélange de plusieurs morceaux selon le taux de matière grasse souhaité",
      origine: "Parures de découpe, collier, paleron, bavette",
      muscles: ["Variables selon le hachage"],
      categorie: "Préparation de viande"
    },
    techniqueDuChef: [
      "Choisir un taux de gras adapté : 5% pour tartare, 15-20% pour burger",
      "Hacher au dernier moment pour préserver la fraîcheur",
      "Ne jamais compacter excessivement la viande pour les steaks hachés",
      "Former les steaks délicatement, sans trop travailler la viande",
      "Pour un burger, créer une légère dépression au centre (évite le gonflement)",
      "Cuire à feu vif pour une croûte, puis baisser si épaisseur importante"
    ],
    caracteristiques: {
      texture: "Variable selon le hachage (fin, moyen, gros)",
      gout: "Dépend des morceaux utilisés et du taux de gras",
      gras: "5% (extra maigre) à 20% (moelleux)",
      fibres: "Détruites par le hachage",
      couleur: "Rouge vif si frais, brunâtre si oxydé",
      tenue: "Fragile, se défait facilement"
    },
    sauces: [
      { nom: "Ketchup maison", type: "simple", description: "Tomates, vinaigre, épices" },
      { nom: "Sauce burger", type: "simple", description: "Mayonnaise, ketchup, cornichons" },
      { nom: "Sauce tartare", type: "classique", description: "Mayonnaise, câpres, cornichons, herbes" },
      { nom: "Moutarde à l'ancienne", type: "simple", description: "Grains de moutarde, vinaigre" }
    ],
    accompagnements: [
      { nom: "Frites maison", recetteId: "frites_maison", type: "féculent" },
      { nom: "Salade coleslaw", recetteId: "coleslaw", type: "légume" },
      { nom: "Oignons rings", recetteId: "oignons_rings", type: "légume" },
      { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Acheter de la viande hachée à l'avance",
        consequence: "Oxydation, perte de fraîcheur, risque sanitaire",
        solution: "Faire hacher par le boucher le jour même ou hacher soi-même"
      },
      {
        erreur: "Trop travailler la viande",
        consequence: "Steak haché compact et caoutchouteux",
        solution: "Former délicatement, sans pétrir"
      },
      {
        erreur: "Cuire un steak haché saignant mal conservé",
        consequence: "Risque sanitaire (bactéries au centre)",
        solution: "Saignant uniquement si haché minute, sinon cuire à cœur"
      }
    ],
    leSaviezVous: "En France, la mention \"pur bœuf\" garantit l'absence de tout autre animal dans la préparation. Le steak tartare doit son nom aux cavaliers tatars qui attendrissaient leur viande sous leur selle ! Un bon steak haché pour burger contient idéalement 15-20% de matière grasse pour rester juteux."
  },

  // === 3: CÔTE DE BŒUF ===
  "Côte de bœuf": {
    anatomie: {
      localisation: "Partie dorsale de l'animal, côtes 6 à 9 (les plus prisées)",
      origine: "Train de côtes avec l'os",
      muscles: ["Longissimus dorsi", "Spinalis dorsi", "Complexus"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Choisir une côte de bœuf maturée (minimum 21 jours idéalement)",
      "Sortir 2h avant cuisson pour une pièce de 1kg+",
      "Sécher parfaitement la surface avant cuisson",
      "Saisir d'abord le côté gras pour rendre la graisse",
      "Utiliser un thermomètre car l'os influence la cuisson",
      "Laisser reposer 10-15 minutes minimum, c'est crucial",
      "Découper en tranches perpendiculaires à l'os"
    ],
    caracteristiques: {
      texture: "Très tendre au centre, croûte savoureuse à l'extérieur",
      gout: "Intense, saveurs décuplées grâce à l'os et au gras",
      gras: "Persillé + gras de couverture (15-20%)",
      fibres: "Moyennes, grain serré",
      couleur: "Rouge profond avec belle couverture grasse",
      tenue: "Excellente, la viande reste accrochée à l'os"
    },
    sauces: [
      { nom: "Sauce à l'os", type: "classique", description: "Jus de cuisson déglaçé au vin" },
      { nom: "Béarnaise", type: "classique", description: "Émulsion beurre, estragon, échalotes" },
      { nom: "Fleur de sel et poivre", type: "simple", description: "Assaisonnement pur" },
      { nom: "Beurre aux herbes", type: "simple", description: "Beurre, thym, romarin, ail" },
      { nom: "Sauce au whisky", type: "gastronomique", description: "Crème, whisky single malt" }
    ],
    accompagnements: [
      { nom: "Pommes de terre au four", recetteId: "pommes_four", type: "féculent" },
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Légumes grillés", recetteId: "legumes_grilles", type: "légume" },
      { nom: "Os à moelle gratiné", recetteId: "os_moelle", type: "accompagnement" },
      { nom: "Échalotes confites", recetteId: "echalotes_confites", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Sous-estimer le temps de tempérage",
        consequence: "Extérieur trop cuit, centre froid",
        solution: "2h minimum à température ambiante pour une pièce de 1kg"
      },
      {
        erreur: "Cuire à température unique",
        consequence: "Croûte brûlée ou pas de croûte",
        solution: "Saisir à feu vif puis finir à température moyenne ou au four"
      },
      {
        erreur: "Découper immédiatement",
        consequence: "Jus qui s'écoule, viande moins juteuse",
        solution: "Repos obligatoire de 10-15 minutes sous papier alu lâche"
      },
      {
        erreur: "Ne pas tenir compte de l'os",
        consequence: "Cuisson inégale (viande près de l'os plus saignante)",
        solution: "Viser 3-4°C de moins à cœur, l'os continue de chauffer"
      }
    ],
    leSaviezVous: "La côte de bœuf maturée développe des arômes de noisette et de beurre grâce à l'action des enzymes naturelles. En Amérique, le \"Tomahawk steak\" est une côte de bœuf avec un long manche d'os, très tendance sur les réseaux sociaux ! Le gras de la côte de bœuf fond à partir de 130°C et arrose la viande naturellement pendant la cuisson."
  },

  // === 4: BRISKET (POITRINE) ===
  "Brisket (poitrine)": {
    anatomie: {
      localisation: "Partie ventrale avant de l'animal, entre les pattes avant",
      origine: "Poitrail, muscles pectoraux profonds",
      muscles: ["Pectoralis profundus", "Pectoralis superficialis"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Choisir un brisket avec une bonne couche de gras (fat cap)",
      "Appliquer un dry rub (mélange d'épices) la veille",
      "Cuire côté gras vers le haut pour que le gras arrose la viande",
      "Maintenir une température constante de 110-120°C",
      "Passer le 'stall' (plateau de température) sans paniquer",
      "Emballer dans du papier kraft à mi-cuisson pour attendrir",
      "Cuire jusqu'à ce qu'une sonde glisse comme dans du beurre"
    ],
    caracteristiques: {
      texture: "Ferme cru, fondant après cuisson longue",
      gout: "Intense, fumé si BBQ, riche en collagène",
      gras: "Gras de couverture + gras interne",
      fibres: "Longues, nécessitent cuisson prolongée",
      couleur: "Rouge foncé, anneau rose si fumé",
      tenue: "Se défait en filaments après cuisson"
    },
    sauces: [
      { nom: "Sauce BBQ texane", type: "américain", description: "Tomates, vinaigre, mélasse, épices" },
      { nom: "Sauce moutarde", type: "américain", description: "Moutarde jaune, vinaigre, miel" },
      { nom: "Jus de cuisson", type: "simple", description: "Jus naturel dégraissé" },
      { nom: "Sauce chimichurri", type: "latino", description: "Persil, ail, vinaigre, huile d'olive" }
    ],
    accompagnements: [
      { nom: "Coleslaw", recetteId: "coleslaw", type: "légume" },
      { nom: "Mac and cheese", recetteId: "mac_and_cheese", type: "féculent" },
      { nom: "Cornbread", recetteId: "cornbread", type: "pain" },
      { nom: "Haricots à la texane", recetteId: "baked_beans", type: "légume" },
      { nom: "Pickles maison", recetteId: "pickles", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire trop vite",
        consequence: "Viande dure et sèche malgré la cuisson longue",
        solution: "Low and slow : 110-120°C pendant 10-14h"
      },
      {
        erreur: "Ouvrir le fumoir/four constamment",
        consequence: "Perte de chaleur et d'humidité",
        solution: "Si vous regardez, vous ne cuisinez pas (dicton BBQ)"
      },
      {
        erreur: "Trancher dans le sens des fibres",
        consequence: "Viande filandreuse et difficile à mâcher",
        solution: "Toujours trancher perpendiculairement aux fibres"
      },
      {
        erreur: "Retirer le fat cap",
        consequence: "Viande sèche sans protection",
        solution: "Garder au moins 6mm de gras pour protéger"
      }
    ],
    leSaviezVous: "Le brisket est le roi du barbecue texan ! Un brisket de compétition peut cuire jusqu'à 18 heures. Le 'stall' (plateau) se produit vers 70°C quand l'évaporation refroidit la viande - c'est normal ! Le terme 'Texas Crutch' désigne l'enveloppement en papier pour passer ce plateau plus vite."
  },

  // === 5: FAUX-FILET ===
  "Faux-filet": {
    anatomie: {
      localisation: "Dos de l'animal, au-dessus des vertèbres lombaires",
      origine: "Partie arrière du train de côtes, sans os",
      muscles: ["Longissimus dorsi (principal)"],
      categorie: "Morceau noble de première catégorie"
    },
    techniqueDuChef: [
      "Choisir une pièce avec un bon persillé et une fine couche de gras",
      "Retirer du réfrigérateur 1h avant cuisson",
      "Graisser légèrement la viande plutôt que la poêle",
      "Saisir à feu vif pour caraméliser la surface",
      "Retourner quand des gouttelettes perlent sur le dessus",
      "Finir avec une noix de beurre pour le brillant"
    ],
    caracteristiques: {
      texture: "Tendre mais avec plus de mâche que le filet",
      gout: "Plus prononcé que le filet, saveurs de bœuf affirmées",
      gras: "Persillé modéré (8-12%)",
      fibres: "Moyennes, régulières",
      couleur: "Rouge vif à rouge sombre",
      tenue: "Très bonne tenue à la cuisson"
    },
    sauces: [
      { nom: "Sauce au poivre", type: "classique", description: "Crème, cognac, poivre vert" },
      { nom: "Sauce roquefort", type: "classique", description: "Crème, roquefort, noix" },
      { nom: "Beurre d'anchois", type: "gastronomique", description: "Beurre, anchois, câpres" },
      { nom: "Sauce champignons", type: "classique", description: "Crème, champignons de Paris" }
    ],
    accompagnements: [
      { nom: "Frites allumettes", recetteId: "frites_allumettes", type: "féculent" },
      { nom: "Gratin de pommes de terre", recetteId: "gratin_pommes_terre", type: "féculent" },
      { nom: "Poêlée de champignons", recetteId: "poelee_champignons", type: "légume" },
      { nom: "Salade d'endives aux noix", recetteId: "salade_endives_noix", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre faux-filet et entrecôte",
        consequence: "Attentes différentes en goût et texture",
        solution: "Le faux-filet est sans os et moins gras que l'entrecôte"
      },
      {
        erreur: "Utiliser de l'huile d'olive seule",
        consequence: "Point de fumée trop bas, goût amer",
        solution: "Huile neutre (tournesol, pépin de raisin) puis beurre en fin"
      },
      {
        erreur: "Couper pour vérifier la cuisson",
        consequence: "Perte des jus précieux",
        solution: "Test du doigt ou thermomètre sonde"
      }
    ],
    leSaviezVous: "Le faux-filet s'appelle ainsi car il est situé à côté du filet, de l'autre côté de la colonne vertébrale. C'est le même muscle que l'entrecôte mais sans l'os ! Aux États-Unis, il est appelé 'New York Strip' et est l'un des steaks les plus populaires."
  },

  // === 6: RUMSTECK ===
  "Rumsteck": {
    anatomie: {
      localisation: "Partie arrière de l'animal, au-dessus de la cuisse",
      origine: "Croupe du bœuf, partie haute de la fesse",
      muscles: ["Gluteus medius"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Choisir un rumsteck bien coloré et légèrement persillé",
      "Couper les steaks perpendiculairement aux fibres",
      "Attendrir légèrement si nécessaire (attendrisseur ou marinade)",
      "Cuire à température élevée mais moins que le filet",
      "Ne pas dépasser 'à point' pour garder la tendreté",
      "Trancher fin si servi en rôti"
    ],
    caracteristiques: {
      texture: "Ferme, légèrement plus de mâche que l'entrecôte",
      gout: "Bœuf prononcé, saveurs authentiques",
      gras: "Maigre (5-8%)",
      fibres: "Moyennes à longues",
      couleur: "Rouge soutenu",
      tenue: "Bonne, supporte bien la cuisson"
    },
    sauces: [
      { nom: "Sauce poivrade", type: "classique", description: "Poivre, vinaigre, fond de veau" },
      { nom: "Beurre maître d'hôtel", type: "simple", description: "Beurre, persil, citron" },
      { nom: "Sauce aux oignons", type: "simple", description: "Oignons caramélisés, fond brun" },
      { nom: "Sauce barbecue", type: "moderne", description: "Tomates, épices, vinaigre" }
    ],
    accompagnements: [
      { nom: "Frites maison", recetteId: "frites_maison", type: "féculent" },
      { nom: "Ratatouille", recetteId: "ratatouille", type: "légume" },
      { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" },
      { nom: "Salade composée", recetteId: "salade_composee", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire comme un filet",
        consequence: "Viande un peu ferme car moins persillée",
        solution: "Marinade ou cuisson un peu moins poussée"
      },
      {
        erreur: "Trancher dans le sens des fibres",
        consequence: "Mâche désagréable",
        solution: "Toujours trancher perpendiculairement aux fibres"
      },
      {
        erreur: "Servir trop épais en steak",
        consequence: "Difficile à cuire uniformément",
        solution: "Steaks de 1,5-2cm d'épaisseur maximum"
      }
    ],
    leSaviezVous: "Le mot 'rumsteck' vient de l'anglais 'rump steak' (steak de croupe). En France, on le surnommait autrefois 'culotte' à cause de sa position anatomique ! C'est un excellent rapport qualité-prix pour un morceau noble."
  },

  // === 7: BAVETTE D'ALOYAU ===
  "Bavette d'aloyau": {
    anatomie: {
      localisation: "Flanc de l'animal, attachée à l'aloyau",
      origine: "Muscle du flanc, près des côtes",
      muscles: ["Obliquus internus abdominis"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Retirer la fine membrane si présente",
      "Ne jamais cuire au-delà de saignant/à point",
      "Saisir à très haute température (poêle fumante)",
      "Laisser reposer autant que la cuisson",
      "Trancher fin et en biais contre les fibres",
      "Servir immédiatement, refroidit vite"
    ],
    caracteristiques: {
      texture: "Fibres longues mais tendre si bien cuite",
      gout: "Très prononcé, l'un des plus savoureux",
      gras: "Maigre mais juteux",
      fibres: "Longues et apparentes",
      couleur: "Rouge foncé intense",
      tenue: "Devient dure si trop cuite"
    },
    sauces: [
      { nom: "Sauce à l'échalote", type: "classique", description: "Échalotes, vin rouge, beurre" },
      { nom: "Chimichurri", type: "latino", description: "Persil, ail, huile, vinaigre" },
      { nom: "Sauce soja sucrée", type: "asiatique", description: "Soja, miel, gingembre, sésame" },
      { nom: "Beurre café de Paris", type: "gastronomique", description: "Beurre aux herbes composé" }
    ],
    accompagnements: [
      { nom: "Frites de patate douce", recetteId: "frites_patate_douce", type: "féculent" },
      { nom: "Salade roquette parmesan", recetteId: "salade_roquette_parmesan", type: "légume" },
      { nom: "Échalottes confites", recetteId: "echalotes_confites", type: "condiment" },
      { nom: "Pommes de terre grenaille", recetteId: "pommes_grenaille", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire bien cuit",
        consequence: "Viande dure comme du cuir",
        solution: "Maximum à point, idéalement saignant"
      },
      {
        erreur: "Trancher dans le sens des fibres",
        consequence: "Impossible à mâcher",
        solution: "Trancher en travers et en biais"
      },
      {
        erreur: "Servir en grosses tranches",
        consequence: "Mâche difficile",
        solution: "Fines tranches de 3-5mm"
      }
    ],
    leSaviezVous: "La bavette d'aloyau est le secret des bistrots parisiens ! Elle est parfois appelée 'steak de l'amitié' car sa forme plate permet de la partager facilement. C'est le morceau le plus savoureux selon de nombreux chefs, devant le filet beaucoup plus cher."
  },

  // === 8: BAVETTE DE FLANCHET ===
  "Bavette de flanchet": {
    anatomie: {
      localisation: "Partie ventrale de l'animal, flanc",
      origine: "Muscles abdominaux latéraux",
      muscles: ["Rectus abdominis", "Obliquus externus"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Parer soigneusement les membranes",
      "Excellente en marinade (minimum 4h)",
      "Cuisson rapide à feu très vif",
      "Repos obligatoire avant découpe",
      "Trancher très fin contre les fibres",
      "Idéale pour les tacos et fajitas"
    ],
    caracteristiques: {
      texture: "Plus ferme que la bavette d'aloyau",
      gout: "Savoureux, légèrement plus rustique",
      gras: "Maigre",
      fibres: "Longues et prononcées",
      couleur: "Rouge foncé",
      tenue: "Nécessite une coupe parfaite"
    },
    sauces: [
      { nom: "Marinade teriyaki", type: "asiatique", description: "Soja, mirin, saké, gingembre" },
      { nom: "Salsa verde", type: "mexicain", description: "Tomatilles, piments, coriandre" },
      { nom: "Sauce BBQ fumée", type: "américain", description: "Tomates, paprika fumé, mélasse" }
    ],
    accompagnements: [
      { nom: "Guacamole", recetteId: "guacamole", type: "condiment" },
      { nom: "Riz mexicain", recetteId: "riz_mexicain", type: "féculent" },
      { nom: "Haricots noirs", recetteId: "haricots_noirs", type: "légume" },
      { nom: "Tortillas maison", recetteId: "tortillas", type: "pain" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire sans mariner",
        consequence: "Viande plus ferme et moins savoureuse",
        solution: "Mariner minimum 4h, idéalement une nuit"
      },
      {
        erreur: "Cuire à température moyenne",
        consequence: "Viande grise et dure",
        solution: "Feu très vif, saisir rapidement"
      },
      {
        erreur: "Servir en grosses portions",
        consequence: "Difficile à mâcher",
        solution: "Tranches fines, parfait pour tacos/fajitas"
      }
    ],
    leSaviezVous: "La bavette de flanchet est le morceau traditionnel des fajitas mexicaines ! Aux USA, elle s'appelle 'flank steak' et connaît un regain de popularité. Marinée dans du jus d'ananas, elle devient incroyablement tendre grâce à la bromélaïne."
  },

  // === 9: ONGLET ===
  "Onglet": {
    anatomie: {
      localisation: "À l'intérieur de la cavité abdominale, suspendu au diaphragme",
      origine: "Piliers du diaphragme",
      muscles: ["Crus diaphragmatis (piliers du diaphragme)"],
      categorie: "Morceau de première catégorie (dit 'du boucher')"
    },
    techniqueDuChef: [
      "Retirer impérativement la membrane centrale (le nerf)",
      "Ne jamais dépasser la cuisson saignante",
      "Saisir à feu très vif, 1-2 min par face maximum",
      "Laisser reposer 5 minutes avant de servir",
      "Trancher en biais contre les fibres",
      "Servir immédiatement, ne supporte pas l'attente"
    ],
    caracteristiques: {
      texture: "Fibreuse mais fondante si bien cuite",
      gout: "Très prononcé, presque 'sauvage', le plus goûteux",
      gras: "Maigre mais juteux",
      fibres: "Longues et très apparentes",
      couleur: "Rouge très foncé, presque brun",
      tenue: "Devient immangeable si trop cuit"
    },
    sauces: [
      { nom: "Sauce à l'échalote", type: "classique", description: "Échalotes, vin rouge, beurre" },
      { nom: "Sauce au vin rouge", type: "classique", description: "Vin corsé, fond de veau" },
      { nom: "Moutarde violette", type: "simple", description: "Moutarde de Brive" },
      { nom: "Beurre persillé", type: "simple", description: "Beurre, persil, ail" }
    ],
    accompagnements: [
      { nom: "Frites maison", recetteId: "frites_maison", type: "féculent" },
      { nom: "Échalotes confites", recetteId: "echalotes_confites", type: "condiment" },
      { nom: "Pommes allumettes", recetteId: "pommes_allumettes", type: "féculent" },
      { nom: "Salade frisée aux lardons", recetteId: "salade_frisee_lardons", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Oublier de retirer le nerf",
        consequence: "Membrane dure au centre impossible à mâcher",
        solution: "Toujours retirer la membrane centrale blanche"
      },
      {
        erreur: "Cuire au-delà de saignant",
        consequence: "Viande dure comme une semelle",
        solution: "Bleu à saignant maximum, jamais plus"
      },
      {
        erreur: "Laisser attendre après cuisson",
        consequence: "Continue de cuire et devient ferme",
        solution: "Servir immédiatement après le repos"
      }
    ],
    leSaviezVous: "L'onglet était autrefois le morceau que le boucher gardait pour lui, d'où l'appellation 'morceau du boucher'. Il n'y a que deux onglets par bœuf (environ 1kg au total). En anglais, on l'appelle 'hanging tender' car il 'pend' au diaphragme. C'est le chouchou des vrais amateurs de viande !"
  },

  // === 10: HAMPE ===
  "Hampe": {
    anatomie: {
      localisation: "Muscle du diaphragme, partie musculaire",
      origine: "Diaphragme de l'animal",
      muscles: ["Diaphragma (partie charnue)"],
      categorie: "Morceau du boucher"
    },
    techniqueDuChef: [
      "Retirer la membrane extérieure si présente",
      "Cuisson rapide et intense obligatoire",
      "Maximum saignant, bleu idéalement",
      "Repos égal au temps de cuisson",
      "Trancher fin en biais",
      "Assaisonner après cuisson"
    ],
    caracteristiques: {
      texture: "Très fibreuse, fondante si saignante",
      gout: "Intense, goût de bœuf marqué",
      gras: "Très maigre",
      fibres: "Longues et épaisses",
      couleur: "Rouge très foncé",
      tenue: "Devient caoutchouteuse si trop cuite"
    },
    sauces: [
      { nom: "Sauce béarnaise", type: "classique", description: "Beurre, estragon, échalotes" },
      { nom: "Sauce au poivre vert", type: "classique", description: "Crème, poivre vert, cognac" },
      { nom: "Chimichurri", type: "latino", description: "Herbes, ail, huile, vinaigre" }
    ],
    accompagnements: [
      { nom: "Frites belges", recetteId: "frites_belges", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_vinaigrette", type: "légume" },
      { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre hampe et onglet",
        consequence: "Cuisson inadaptée",
        solution: "La hampe est plate, l'onglet est épais avec un nerf central"
      },
      {
        erreur: "Cuire à point ou plus",
        consequence: "Viande immangeable",
        solution: "Bleu à saignant uniquement"
      },
      {
        erreur: "Trancher épais",
        consequence: "Difficile à mâcher",
        solution: "Tranches fines de 3-4mm"
      }
    ],
    leSaviezVous: "La hampe est la partie musculaire du diaphragme (l'onglet en est les piliers). Comme l'onglet, c'est un morceau rare : seulement 700g-1kg par bœuf ! En Argentine, c'est l'un des morceaux stars de l'asado sous le nom de 'entraña'."
  },

  // === 11: PALERON ===
  "Paleron": {
    anatomie: {
      localisation: "Épaule de l'animal, partie centrale",
      origine: "Omoplate, muscles de l'épaule",
      muscles: ["Infraspinatus (principal)", "Teres major"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Idéal pour les cuissons longues et mijotées",
      "Retirer le nerf central si cuisson rapide",
      "En daube, le nerf fond et apporte du moelleux",
      "Saisir les morceaux avant de mouiller",
      "Cuisson minimum 2h30 à feu doux",
      "Se bonifie en réchauffant le lendemain"
    ],
    caracteristiques: {
      texture: "Gélatineux après cuisson longue",
      gout: "Riche, profond, excellent en sauce",
      gras: "Persillé avec nerf gélatineux",
      fibres: "Moyennes, fondantes après mijotage",
      couleur: "Rouge avec marbrures de gras",
      tenue: "Se défait à la fourchette quand prêt"
    },
    sauces: [
      { nom: "Sauce bourguignonne", type: "classique", description: "Vin rouge, lardons, champignons" },
      { nom: "Sauce au vin blanc", type: "classique", description: "Vin blanc, crème, estragon" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Carottes glacées", recetteId: "carottes_glacees", type: "légume" },
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Polenta crémeuse", recetteId: "polenta", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Vouloir le cuire comme un steak",
        consequence: "Viande dure et sèche",
        solution: "Cuisson longue obligatoire (braisé, mijoté)"
      },
      {
        erreur: "Cuire à feu trop fort",
        consequence: "Viande sèche malgré le liquide",
        solution: "Feu doux, frémissement léger (90-95°C)"
      },
      {
        erreur: "Cuisson trop courte",
        consequence: "Nerf encore dur, viande pas fondante",
        solution: "Minimum 2h30, jusqu'à ce qu'une fourchette s'enfonce facilement"
      }
    ],
    leSaviezVous: "Le paleron contient un nerf central en forme de Y qui fond complètement lors d'une cuisson longue et donne un résultat incroyablement moelleux. C'est le morceau idéal pour le bœuf bourguignon ! En anglais, il s'appelle 'flat iron steak' quand il est préparé sans le nerf."
  },

  // === 12: MACREUSE À POT-AU-FEU ===
  "Macreuse à pot-au-feu": {
    anatomie: {
      localisation: "Épaule de l'animal, partie basse",
      origine: "Muscles de l'avant-bras",
      muscles: ["Triceps brachii"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Ficeler pour maintenir la forme pendant la cuisson",
      "Démarrer à l'eau froide pour un bouillon clair",
      "Écumer régulièrement en début de cuisson",
      "Maintenir un frémissement doux, jamais d'ébullition",
      "Cuire 3h minimum pour attendrir",
      "Servir avec le gros sel et les condiments"
    ],
    caracteristiques: {
      texture: "Ferme mais moelleuse après cuisson longue",
      gout: "Savoureux, fait un excellent bouillon",
      gras: "Maigre avec peu de persillé",
      fibres: "Longues, deviennent tendres avec le temps",
      couleur: "Rouge soutenu",
      tenue: "Se tient bien en cuisson, ne se défait pas"
    },
    sauces: [
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, cornichons, herbes" },
      { nom: "Sauce raifort", type: "classique", description: "Crème, raifort frais râpé" },
      { nom: "Moutarde en grains", type: "simple", description: "Moutarde à l'ancienne" }
    ],
    accompagnements: [
      { nom: "Légumes du pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" },
      { nom: "Os à moelle", recetteId: "os_moelle", type: "accompagnement" },
      { nom: "Pommes de terre vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Cornichons", recetteId: "cornichons", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Faire bouillir",
        consequence: "Viande sèche et filandreuse, bouillon trouble",
        solution: "Frémissement léger uniquement (85-90°C)"
      },
      {
        erreur: "Démarrer à l'eau chaude",
        consequence: "Protéines qui coagulent en surface, bouillon trouble",
        solution: "Toujours démarrer à l'eau froide"
      },
      {
        erreur: "Cuisson trop courte",
        consequence: "Viande ferme et difficile à découper",
        solution: "Minimum 3h de pochage doux"
      }
    ],
    leSaviezVous: "Le pot-au-feu est le plat national français par excellence ! Traditionnellement servi en deux services : d'abord le bouillon en entrée, puis la viande et les légumes. La macreuse doit son nom à sa forme qui rappelait un oiseau (le canard macreuse)."
  },

  // === 13: MACREUSE À BIFTECK ===
  "Macreuse à bifteck": {
    anatomie: {
      localisation: "Épaule, partie supérieure proche de l'omoplate",
      origine: "Muscle deltoïde de l'épaule",
      muscles: ["Deltoideus", "Triceps brachii (partie)"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Trancher perpendiculairement aux fibres",
      "Attendrir légèrement au marteau si épais",
      "Cuisson rapide à feu vif",
      "Ne pas dépasser 'à point'",
      "Excellent en steaks fins ou émincés",
      "Peut être mariné pour plus de tendreté"
    ],
    caracteristiques: {
      texture: "Plus ferme que les morceaux nobles",
      gout: "Bœuf prononcé, savoureux",
      gras: "Maigre",
      fibres: "Moyennes à longues",
      couleur: "Rouge vif",
      tenue: "Bonne, ne rétrécit pas trop"
    },
    sauces: [
      { nom: "Sauce aux oignons", type: "classique", description: "Oignons caramélisés, fond de veau" },
      { nom: "Sauce moutarde", type: "simple", description: "Moutarde, crème fraîche" },
      { nom: "Sauce poivrade", type: "classique", description: "Poivre concassé, vin, fond brun" }
    ],
    accompagnements: [
      { nom: "Frites classiques", recetteId: "frites_maison", type: "féculent" },
      { nom: "Haricots verts", recetteId: "haricots_verts_ail", type: "légume" },
      { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre avec la macreuse à pot-au-feu",
        consequence: "Mode de cuisson inadapté",
        solution: "Bifteck = cuisson rapide, pot-au-feu = cuisson longue"
      },
      {
        erreur: "Couper dans le sens des fibres",
        consequence: "Viande difficile à mâcher",
        solution: "Toujours trancher perpendiculairement"
      },
      {
        erreur: "Steaks trop épais",
        consequence: "Cuisson inégale",
        solution: "1-1,5cm d'épaisseur maximum"
      }
    ],
    leSaviezVous: "La macreuse à bifteck est appelée 'boule de macreuse' quand elle est vendue entière. Elle représente un excellent rapport qualité-prix pour des steaks du quotidien. Bien préparée, elle peut rivaliser avec des morceaux plus chers !"
  },

  // === 14: GÎTE ===
  "Gîte": {
    anatomie: {
      localisation: "Partie inférieure de la cuisse, jambe arrière",
      origine: "Muscles de la jambe postérieure",
      muscles: ["Gastrocnemius", "Soleus"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Ficeler en rôti pour une cuisson uniforme",
      "Idéal braisé ou en pot-au-feu",
      "Saisir avant de mouiller pour les braisés",
      "Cuisson longue obligatoire (3h minimum)",
      "Se prête bien à la cuisson en cocotte",
      "Excellent froid en salade"
    ],
    caracteristiques: {
      texture: "Ferme, gélatineuse après cuisson",
      gout: "Savoureux, riche en collagène",
      gras: "Maigre mais avec tendons",
      fibres: "Longues et serrées",
      couleur: "Rouge foncé",
      tenue: "Se défait après cuisson longue"
    },
    sauces: [
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" },
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, herbes" },
      { nom: "Vinaigrette relevée", type: "simple", description: "Huile, vinaigre, moutarde, échalotes" }
    ],
    accompagnements: [
      { nom: "Légumes racines", recetteId: "legumes_racines", type: "légume" },
      { nom: "Pommes de terre fondantes", recetteId: "pommes_fondantes", type: "féculent" },
      { nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Viande dure et tendons caoutchouteux",
        solution: "Cuisson longue uniquement (braisé, pot-au-feu)"
      },
      {
        erreur: "Feu trop fort",
        consequence: "Extérieur sec avant que l'intérieur soit tendre",
        solution: "Feu doux, temps long"
      },
      {
        erreur: "Jeter les tendons",
        consequence: "Perte de texture gélatineuse",
        solution: "Les tendons fondent et enrichissent le plat"
      }
    ],
    leSaviezVous: "Le gîte est riche en collagène qui se transforme en gélatine pendant la cuisson longue, donnant une sauce naturellement onctueuse. Il existe le gîte-gîte (partie centrale) et le gîte à la noix (partie supérieure, plus tendre)."
  },

  // === 15: PLAT DE CÔTES ===
  "Plat de côtes": {
    anatomie: {
      localisation: "Partie ventrale des côtes",
      origine: "Côtes inférieures avec leur viande",
      muscles: ["Intercostaux", "Muscles abdominaux"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Excellent pour le pot-au-feu (avec os)",
      "Désosser pour braiser",
      "Les os donnent un excellent fond",
      "Cuisson longue à basse température",
      "Peut être grillé style BBQ coréen",
      "Le gras est essentiel au moelleux"
    ],
    caracteristiques: {
      texture: "Entrelardé, fondant après cuisson",
      gout: "Riche, gras très savoureux",
      gras: "Bien gras, entrelardé",
      fibres: "Courtes entre les côtes",
      couleur: "Rouge avec stries de gras blanc",
      tenue: "La viande se détache de l'os quand prête"
    },
    sauces: [
      { nom: "Sauce barbecue", type: "américain", description: "Tomate, vinaigre, sucre, épices" },
      { nom: "Marinade coréenne", type: "asiatique", description: "Soja, poire, ail, sésame" },
      { nom: "Jus naturel", type: "simple", description: "Jus de cuisson dégraissé" }
    ],
    accompagnements: [
      { nom: "Kimchi", recetteId: "kimchi", type: "condiment" },
      { nom: "Riz vapeur", recetteId: "riz_vapeur", type: "féculent" },
      { nom: "Légumes du pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Vouloir dégraisser totalement",
        consequence: "Viande sèche sans saveur",
        solution: "Le gras est nécessaire, dégraisser le jus après cuisson"
      },
      {
        erreur: "Cuisson trop courte",
        consequence: "Viande qui ne se détache pas de l'os",
        solution: "3-4h minimum pour un plat de côtes fondant"
      }
    ],
    leSaviezVous: "En Corée, le plat de côtes (Galbi) est l'un des BBQ les plus populaires, mariné dans une sauce sucrée-salée. Le pot-au-feu traditionnel français contient obligatoirement du plat de côtes pour le gras qui enrichit le bouillon !"
  },

  // === 16: COLLIER ===
  "Collier": {
    anatomie: {
      localisation: "Cou de l'animal",
      origine: "Muscles du cou",
      muscles: ["Muscles cervicaux", "Trapèze"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Parfait pour les daubes et bourguignons",
      "Couper en gros cubes de 4-5cm",
      "Saisir les morceaux avant de mouiller",
      "Cuire au minimum 3h à feu doux",
      "Le collagène fond et lie la sauce naturellement",
      "Meilleur réchauffé le lendemain"
    ],
    caracteristiques: {
      texture: "Gélatineuse après cuisson longue",
      gout: "Savoureux, très bœuf",
      gras: "Moyennement gras avec collagène",
      fibres: "Courtes et irrégulières",
      couleur: "Rouge avec marbrures",
      tenue: "Se défait en morceaux tendres"
    },
    sauces: [
      { nom: "Sauce bourguignonne", type: "classique", description: "Vin rouge, lardons, oignons, champignons" },
      { nom: "Sauce tomate", type: "simple", description: "Tomates, ail, herbes de Provence" },
      { nom: "Sauce au curry", type: "indien", description: "Épices, lait de coco, tomates" }
    ],
    accompagnements: [
      { nom: "Tagliatelles fraîches", recetteId: "tagliatelles", type: "féculent" },
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Carottes Vichy", recetteId: "carottes_vichy", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire en steak",
        consequence: "Viande dure et nerveuse",
        solution: "Cuisson mijotée uniquement"
      },
      {
        erreur: "Couper trop petit",
        consequence: "Morceaux qui se défont trop",
        solution: "Cubes de 4-5cm qui resteront entiers"
      },
      {
        erreur: "Faire bouillir",
        consequence: "Viande sèche malgré le liquide",
        solution: "Frémissement doux à couvert"
      }
    ],
    leSaviezVous: "Le collier est le morceau idéal pour le bœuf bourguignon selon les chefs traditionnels ! Son collagène abondant se transforme en gélatine et donne une sauce naturellement liée et brillante sans ajout de fécule."
  },

  // === 17: JARRET ===
  "Jarret": {
    anatomie: {
      localisation: "Partie basse de la patte (avant ou arrière)",
      origine: "Muscles et tendons de la jambe",
      muscles: ["Muscles du tibia", "Tendons"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Le jarret arrière est plus charnu que l'avant",
      "Parfait pour l'osso buco (en tranches avec os)",
      "Cuisson longue indispensable (3-4h)",
      "Saisir puis braiser dans un liquide aromatique",
      "La moelle de l'os parfume le plat",
      "Servir avec une cuillère pour la moelle"
    ],
    caracteristiques: {
      texture: "Fondante, gélatineuse",
      gout: "Très savoureux, riche",
      gras: "Maigre mais riche en collagène",
      fibres: "Serrées autour de l'os",
      couleur: "Rouge foncé",
      tenue: "Se détache de l'os quand prêt"
    },
    sauces: [
      { nom: "Gremolata", type: "italien", description: "Zeste citron, ail, persil" },
      { nom: "Sauce tomate", type: "italien", description: "Tomates, vin blanc, légumes" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" }
    ],
    accompagnements: [
      { nom: "Risotto alla milanese", recetteId: "risotto_milanese", type: "féculent" },
      { nom: "Polenta", recetteId: "polenta", type: "féculent" },
      { nom: "Gremolata", recetteId: "gremolata", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Trancher trop fin",
        consequence: "Morceaux qui se défont à la cuisson",
        solution: "Tranches de 3-4cm d'épaisseur"
      },
      {
        erreur: "Cuisson insuffisante",
        consequence: "Tendons encore durs",
        solution: "La viande doit presque tomber de l'os"
      },
      {
        erreur: "Jeter la moelle",
        consequence: "Perte de la meilleure partie !",
        solution: "Déguster la moelle à la cuillère"
      }
    ],
    leSaviezVous: "L'osso buco (littéralement 'os troué' en italien) est le plat signature du jarret de veau à Milan, mais fonctionne aussi très bien avec le bœuf. La gremolata (persil, ail, zeste de citron) est l'accompagnement traditionnel qui apporte fraîcheur au plat."
  },

  // === 18: JOUE DE BŒUF ===
  "Joue de bœuf": {
    anatomie: {
      localisation: "Joue de l'animal, muscle masticateur",
      origine: "Tête du bœuf",
      muscles: ["Masséter (muscle masticateur)"],
      categorie: "Morceau de troisième catégorie (abat)"
    },
    techniqueDuChef: [
      "Parer soigneusement les parties nerveuses",
      "Faire dégorger dans l'eau froide si besoin",
      "Saisir pour colorer avant de braiser",
      "Cuisson longue de 3-4h minimum",
      "Le collagène fond et rend la viande fondante",
      "Parfaite pour les préparations en sauce"
    ],
    caracteristiques: {
      texture: "Fondante, se défait en filaments",
      gout: "Très savoureux, gélatineux",
      gras: "Maigre mais très riche en collagène",
      fibres: "Courtes et denses",
      couleur: "Rouge foncé",
      tenue: "Se défait à la fourchette"
    },
    sauces: [
      { nom: "Sauce au vin rouge", type: "classique", description: "Vin corsé, fond de veau, aromates" },
      { nom: "Sauce au cacao", type: "gastronomique", description: "Cacao amer, vin rouge, épices" },
      { nom: "Daube provençale", type: "régional", description: "Vin rouge, olives, orange" }
    ],
    accompagnements: [
      { nom: "Purée de céleri-rave", recetteId: "puree_celeri", type: "légume" },
      { nom: "Pommes de terre écrasées", recetteId: "pommes_ecrasees", type: "féculent" },
      { nom: "Carottes fondantes", recetteId: "carottes_fondantes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Viande dure et caoutchouteuse",
        solution: "3-4h de braisage minimum"
      },
      {
        erreur: "Ne pas parer",
        consequence: "Parties nerveuses désagréables",
        solution: "Retirer les parties blanches avant cuisson"
      },
      {
        erreur: "Feu trop fort",
        consequence: "Extérieur sec, intérieur pas cuit",
        solution: "Feu doux, mijotage patient"
      }
    ],
    leSaviezVous: "La joue de bœuf est l'un des morceaux préférés des grands chefs pour sa texture incomparable après cuisson longue. Il n'y a que 2 joues par animal ! Le muscle masséter est très travaillé (l'animal rumine toute la journée), d'où la nécessité d'une cuisson longue."
  },

  // === 19: QUEUE DE BŒUF ===
  "Queue de bœuf": {
    anatomie: {
      localisation: "Queue de l'animal",
      origine: "Vertèbres caudales avec leur viande",
      muscles: ["Muscles caudaux", "Graisse intervertébrale"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Demander au boucher de tronçonner en morceaux de 5cm",
      "Faire dégorger à l'eau froide 2h pour retirer le sang",
      "Saisir les morceaux pour les colorer",
      "Braiser 4-5h jusqu'à ce que la viande se détache",
      "Dégraisser le jus après cuisson",
      "Servir avec les os pour sucer la moelle"
    ],
    caracteristiques: {
      texture: "Gélatineuse, fondante",
      gout: "Très riche, profond",
      gras: "Gras intervertébral qui fond",
      fibres: "Courtes autour des vertèbres",
      couleur: "Rouge avec os apparents",
      tenue: "La viande se détache des os"
    },
    sauces: [
      { nom: "Sauce au vin rouge", type: "classique", description: "Vin corsé, fond de veau, aromates" },
      { nom: "Bouillon épicé", type: "asiatique", description: "Anis étoilé, gingembre, soja" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson concentré" }
    ],
    accompagnements: [
      { nom: "Purée de panais", recetteId: "puree_panais", type: "légume" },
      { nom: "Polenta crémeuse", recetteId: "polenta", type: "féculent" },
      { nom: "Légumes racines rôtis", recetteId: "legumes_racines_rotis", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson trop courte",
        consequence: "Viande qui ne se détache pas",
        solution: "4-5h de braisage minimum"
      },
      {
        erreur: "Ne pas dégorger",
        consequence: "Goût fort, sauce trouble",
        solution: "Tremper 2h dans l'eau froide"
      },
      {
        erreur: "Servir avec trop de gras",
        consequence: "Plat écœurant",
        solution: "Dégraisser soigneusement le jus"
      }
    ],
    leSaviezVous: "La queue de bœuf était autrefois considérée comme un déchet et donnée aux pauvres. Aujourd'hui c'est un mets recherché des gastronomes ! En Jamaïque, l'Oxtail stew est un plat national. La gélatine naturelle rend la sauce incroyablement onctueuse."
  },

  // === 20: TENDE DE TRANCHE ===
  "Tende de tranche": {
    anatomie: {
      localisation: "Partie arrière de la cuisse, face externe",
      origine: "Muscle de la cuisse",
      muscles: ["Tensor fasciae latae"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Excellent en rôti ou en steaks",
      "Parer les aponévroses (membranes) si présentes",
      "Ficeler en rôti pour cuisson uniforme",
      "Cuisson rosée pour garder la tendreté",
      "Bien laisser reposer après cuisson",
      "Trancher fin perpendiculairement aux fibres"
    ],
    caracteristiques: {
      texture: "Tendre, légèrement ferme",
      gout: "Bœuf prononcé, savoureux",
      gras: "Maigre",
      fibres: "Longues et régulières",
      couleur: "Rouge vif",
      tenue: "Bonne, ne se défait pas"
    },
    sauces: [
      { nom: "Sauce chasseur", type: "classique", description: "Champignons, tomates, vin blanc" },
      { nom: "Sauce au poivre", type: "classique", description: "Crème, cognac, poivre" },
      { nom: "Jus de rôti", type: "simple", description: "Fond de cuisson déglaçé" }
    ],
    accompagnements: [
      { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" },
      { nom: "Haricots verts", recetteId: "haricots_verts_ail", type: "légume" },
      { nom: "Pommes boulangères", recetteId: "pommes_boulangeres", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Trop cuire",
        consequence: "Viande sèche car maigre",
        solution: "Maximum à point, idéalement rosé"
      },
      {
        erreur: "Ne pas ficeler le rôti",
        consequence: "Cuisson inégale, forme irrégulière",
        solution: "Ficeler tous les 2-3cm"
      },
      {
        erreur: "Trancher chaud sans repos",
        consequence: "Perte de jus importante",
        solution: "10 minutes de repos sous alu"
      }
    ],
    leSaviezVous: "La tende de tranche est particulièrement appréciée pour le rosbif en Angleterre. Son nom vient de sa position : elle 'tend' (s'étire) le long de la tranche. C'est un bon compromis entre prix et qualité pour un rôti dominical."
  },

  // === 21: ROND DE TRANCHE ===
  "Rond de tranche": {
    anatomie: {
      localisation: "Partie arrière de la cuisse, muscle interne",
      origine: "Face interne de la cuisse",
      muscles: ["Semimembranosus"],
      categorie: "Morceau de première catégorie"
    },
    techniqueDuChef: [
      "Idéal en rôti ou tranché fin pour fondue/pierrade",
      "Très maigre, ne pas trop cuire",
      "Arroser souvent si rôti au four",
      "Excellent pour la viande des grisons maison",
      "Peut être mariné pour plus de saveur",
      "Trancher extrêmement fin si servi froid"
    ],
    caracteristiques: {
      texture: "Ferme, maigre",
      gout: "Délicat, peu prononcé",
      gras: "Très maigre (2-3%)",
      fibres: "Longues et fines",
      couleur: "Rouge pâle",
      tenue: "Bonne mais sèche vite"
    },
    sauces: [
      { nom: "Sauce madère", type: "classique", description: "Madère, fond de veau" },
      { nom: "Sauce forestière", type: "classique", description: "Champignons des bois, persil" },
      { nom: "Condiment cornichons", type: "simple", description: "Cornichons, câpres" }
    ],
    accompagnements: [
      { nom: "Fondue bourguignonne", recetteId: "fondue_bourguignonne", type: "plat" },
      { nom: "Pommes dauphine", recetteId: "pommes_dauphine", type: "féculent" },
      { nom: "Salade mesclun", recetteId: "salade_mesclun", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire comme un morceau gras",
        consequence: "Viande très sèche",
        solution: "Cuisson précise, arrosages fréquents"
      },
      {
        erreur: "Servir en tranches épaisses",
        consequence: "Mâche difficile",
        solution: "Tranches fines, surtout si froid"
      },
      {
        erreur: "Oublier de barder",
        consequence: "Dessèchement au four",
        solution: "Barder de lard ou envelopper de crépine"
      }
    ],
    leSaviezVous: "Le rond de tranche est le morceau traditionnel pour faire la viande des grisons (Bündnerfleisch) suisse et la bresaola italienne. Son faible taux de gras le rend idéal pour le séchage. C'est aussi le morceau préféré pour la fondue bourguignonne !"
  },

  // === 22: JUMEAU À POT-AU-FEU ===
  "Jumeau à pot-au-feu": {
    anatomie: {
      localisation: "Épaule, partie basse",
      origine: "Muscles de l'épaule",
      muscles: ["Muscles brachiaux"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Ficeler pour maintenir la forme",
      "Parfait en pot-au-feu ou bouilli",
      "Cuisson longue à feu doux",
      "Ne pas faire bouillir, juste frémir",
      "Écumer régulièrement",
      "Servir avec les condiments traditionnels"
    ],
    caracteristiques: {
      texture: "Ferme puis tendre après cuisson",
      gout: "Savoureux, fait un bon bouillon",
      gras: "Modérément gras",
      fibres: "Moyennes",
      couleur: "Rouge",
      tenue: "Se tient bien à la cuisson"
    },
    sauces: [
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, herbes" },
      { nom: "Sauce raifort", type: "classique", description: "Crème, raifort râpé" },
      { nom: "Moutardes variées", type: "simple", description: "Dijon, grains, violette" }
    ],
    accompagnements: [
      { nom: "Légumes du pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" },
      { nom: "Pommes de terre vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Gros sel de Guérande", recetteId: "condiments_pot_au_feu", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Faire bouillir",
        consequence: "Viande sèche et filandreuse",
        solution: "Frémissement léger (85-90°C)"
      },
      {
        erreur: "Cuire trop peu",
        consequence: "Viande ferme",
        solution: "Minimum 2h30-3h de pochage"
      },
      {
        erreur: "Ne pas écumer",
        consequence: "Bouillon trouble et gras",
        solution: "Écumer régulièrement le gras et l'écume"
      }
    ],
    leSaviezVous: "Le jumeau s'appelle ainsi car il existe deux morceaux jumeaux : celui à pot-au-feu (partie gélatineuse) et celui à bifteck (partie maigre). Ensemble, ils forment la 'macreuse' de l'épaule."
  },

  // === 23: FLANCHET ===
  "Flanchet": {
    anatomie: {
      localisation: "Partie ventrale de l'animal",
      origine: "Paroi abdominale",
      muscles: ["Muscles abdominaux"],
      categorie: "Morceau de troisième catégorie"
    },
    techniqueDuChef: [
      "Idéal pour le pot-au-feu (avec son gras)",
      "Peut être farci et roulé",
      "Le gras fond et parfume le bouillon",
      "Cuisson longue obligatoire",
      "Sert aussi pour la viande hachée",
      "Bon rapport qualité-prix"
    ],
    caracteristiques: {
      texture: "Entrelardée, fondante",
      gout: "Savoureux grâce au gras",
      gras: "Bien gras, entrelardé",
      fibres: "Variables",
      couleur: "Rouge avec stries blanches",
      tenue: "Se défait facilement"
    },
    sauces: [
      { nom: "Jus de cuisson", type: "simple", description: "Bouillon dégraissé" },
      { nom: "Sauce tomate", type: "simple", description: "Pour les plats farcis" },
      { nom: "Sauce gribiche", type: "classique", description: "Pour le pot-au-feu" }
    ],
    accompagnements: [
      { nom: "Légumes du pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" },
      { nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" },
      { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Retirer tout le gras",
        consequence: "Viande sèche",
        solution: "Le gras est nécessaire au moelleux"
      },
      {
        erreur: "Cuisson courte",
        consequence: "Gras pas fondu, texture désagréable",
        solution: "3h minimum de cuisson"
      }
    ],
    leSaviezVous: "Le flanchet est indispensable au vrai pot-au-feu ! Son gras fond pendant la cuisson et donne au bouillon toute sa richesse. En Italie, il est utilisé pour le bollito misto. Les restaurants asiatiques l'apprécient pour le phở vietnamien."
  },

  // === 24: FOIE ===
  "Foie": {
    anatomie: {
      localisation: "Organe situé dans la cavité abdominale",
      origine: "Abat rouge, organe filtrant",
      muscles: ["N/A - Organe"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Choisir un foie brillant, sans taches",
      "Retirer les membranes et canaux biliaires",
      "Couper en tranches de 1cm d'épaisseur",
      "Fariner légèrement avant cuisson",
      "Saisir à feu vif, 1-2 min par face",
      "Servir rosé au centre, jamais trop cuit"
    ],
    caracteristiques: {
      texture: "Fondante si rosé, pâteuse si trop cuit",
      gout: "Prononcé, ferreux, caractéristique",
      gras: "Maigre",
      fibres: "Structure dense sans fibres",
      couleur: "Brun-rouge foncé",
      tenue: "Fragile, se casse facilement"
    },
    sauces: [
      { nom: "Vinaigre de framboise", type: "gastronomique", description: "Déglaçage acide-sucré" },
      { nom: "Sauce à l'oignon", type: "classique", description: "Oignons confits, vinaigre balsamique" },
      { nom: "Persil-ail", type: "simple", description: "Persillade classique" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Oignons confits", recetteId: "oignons_confits", type: "légume" },
      { nom: "Pommes fruit sautées", recetteId: "pommes_sautees_sucrees", type: "fruit" }
    ],
    erreursAEviter: [
      {
        erreur: "Trop cuire",
        consequence: "Texture pâteuse, goût amer",
        solution: "Rosé au centre obligatoire"
      },
      {
        erreur: "Ne pas parer",
        consequence: "Morceaux durs, goût amer (bile)",
        solution: "Retirer toutes les membranes et canaux"
      },
      {
        erreur: "Feu trop doux",
        consequence: "Foie qui rend son jus et bout",
        solution: "Feu vif, cuisson rapide"
      }
    ],
    leSaviezVous: "Le foie de bœuf est très riche en fer (5x plus que la viande) et en vitamine A. Au Moyen Âge, on pensait que le foie était le siège des émotions ! Le foie de veau est plus délicat et prisé que celui de bœuf."
  },

  // === 25: LANGUE ===
  "Langue": {
    anatomie: {
      localisation: "Cavité buccale",
      origine: "Muscle lingual",
      muscles: ["Muscles de la langue"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger plusieurs heures dans l'eau froide",
      "Blanchir puis dépouiller (retirer la peau)",
      "Cuire dans un bouillon aromatique 2-3h",
      "La peau se retire facilement quand cuite",
      "Peut être servie chaude ou froide",
      "Se conserve bien dans son bouillon"
    ],
    caracteristiques: {
      texture: "Fondante, légèrement granuleuse",
      gout: "Délicat, moins fort que le foie",
      gras: "Modérément grasse",
      fibres: "Texture musculaire spécifique",
      couleur: "Gris-rosé après cuisson",
      tenue: "Se tranche bien"
    },
    sauces: [
      { nom: "Sauce piquante", type: "classique", description: "Cornichons, câpres, vinaigre" },
      { nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres, huile" },
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, herbes, moutarde" },
      { nom: "Sauce tomate", type: "simple", description: "Tomates, aromates" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Épinards", recetteId: "epinards_creme", type: "légume" },
      { nom: "Carottes Vichy", recetteId: "carottes_vichy", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas dépouiller",
        consequence: "Peau épaisse désagréable",
        solution: "Toujours retirer la peau après cuisson"
      },
      {
        erreur: "Cuisson insuffisante",
        consequence: "Texture ferme, difficile à trancher",
        solution: "2h30-3h minimum, une fourchette doit s'enfoncer"
      },
      {
        erreur: "Servir froide sans assaisonnement",
        consequence: "Fade et sans intérêt",
        solution: "Vinaigrette ou sauce relevée"
      }
    ],
    leSaviezVous: "La langue de bœuf était très appréciée des Romains qui la considéraient comme un mets de choix. Elle pèse entre 1,5 et 2kg. En Amérique du Sud, la lengua est un plat traditionnel des tacos !"
  },

  // === 26: OS À MOELLE ===
  "Os à moelle": {
    anatomie: {
      localisation: "Os longs des pattes (fémur, tibia)",
      origine: "Structure osseuse contenant la moelle",
      muscles: ["N/A - Os"],
      categorie: "Abat / Accompagnement"
    },
    techniqueDuChef: [
      "Demander au boucher de les couper en tronçons de 5-7cm",
      "Faire dégorger 12h dans l'eau salée (change l'eau)",
      "Pocher 15-20 min dans un bouillon frémissant",
      "Ou rôtir 20-25 min au four à 200°C",
      "Servir immédiatement avec du pain grillé",
      "Assaisonner de fleur de sel"
    ],
    caracteristiques: {
      texture: "Moelle fondante, crémeuse",
      gout: "Riche, beurré, délicat",
      gras: "100% graisse (moelle)",
      fibres: "N/A",
      couleur: "Blanc-rosé (moelle)",
      tenue: "Fond à la chaleur"
    },
    sauces: [
      { nom: "Fleur de sel", type: "simple", description: "Sel de qualité uniquement" },
      { nom: "Persillade", type: "simple", description: "Persil, ail, sel" },
      { nom: "Sel au piment d'Espelette", type: "simple", description: "Sel, piment doux" }
    ],
    accompagnements: [
      { nom: "Pain de campagne grillé", recetteId: "pain_grille", type: "pain" },
      { nom: "Salade de roquette", recetteId: "salade_roquette", type: "légume" },
      { nom: "Entrecôte", recetteId: "entrecote_grillee", type: "viande" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas faire dégorger",
        consequence: "Moelle avec du sang, goût fort",
        solution: "12h minimum dans l'eau salée"
      },
      {
        erreur: "Trop cuire",
        consequence: "Moelle qui fond et s'échappe",
        solution: "Juste le temps de chauffer à cœur"
      },
      {
        erreur: "Servir froid",
        consequence: "Moelle figée, texture grasse",
        solution: "Servir très chaud, manger immédiatement"
      }
    ],
    leSaviezVous: "Les os à moelle étaient si prisés au XIXe siècle qu'on a inventé des cuillères spéciales pour les déguster ! La moelle est composée principalement de graisse et de cellules souches. Elle était considérée comme un fortifiant et donnée aux convalescents."
  }
};

// Export
module.exports = {
  boeufClassiqueEnriched
};
