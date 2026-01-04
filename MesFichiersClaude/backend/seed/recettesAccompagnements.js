/**
 * Recettes d'accompagnements pour CookMaster
 * Ces recettes sont liées aux accompagnements recommandés des morceaux de viande
 */

const recettesAccompagnements = {
  // ============================================
  // POMMES DE TERRE
  // ============================================
  "gratin_dauphinois": {
    nom: "Gratin Dauphinois",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre à chair ferme (Charlotte, Roseval, Belle de Fontenay)", quantite: "1 kg", type: "légume" },
      { nom: "Crème fraîche épaisse (30% MG minimum)", quantite: "50 cl", type: "produit laitier" },
      { nom: "Lait entier", quantite: "25 cl", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Noix de muscade", quantite: "1/4 de noix (râpée)", type: "épice" },
      { nom: "Beurre mou", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel fin", quantite: "1 c. à café rase", type: "assaisonnement" },
      { nom: "Poivre blanc", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉCHAUFFER LE FOUR : Allumer le four à 150°C (thermostat 5). Cette température basse est le secret d'un gratin crémeux et non pas sec.",
      "PRÉPARER LE PLAT : Couper une gousse d'ail en deux et frotter énergiquement tout l'intérieur du plat à gratin avec la partie coupée. L'ail va parfumer le plat. Beurrer généreusement par-dessus avec le beurre mou, en couvrant bien le fond et les bords.",
      "PRÉPARER LES POMMES DE TERRE : Éplucher les pommes de terre. Les couper en rondelles très fines et régulières de 2-3 mm d'épaisseur. IMPORTANT : utiliser une mandoline pour des tranches régulières. NE PAS rincer les pommes de terre après la coupe ! L'amidon en surface est essentiel pour lier le gratin et lui donner son onctuosité.",
      "PRÉPARER L'APPAREIL : Dans une casserole, mélanger la crème et le lait. Ajouter le sel, le poivre blanc et râper la muscade directement dedans. Écraser la deuxième gousse d'ail et l'ajouter. Chauffer à feu doux jusqu'à frémissement, sans faire bouillir. Retirer l'ail écrasé.",
      "ASSEMBLER LE GRATIN : Disposer une première couche de rondelles de pommes de terre au fond du plat en les faisant se chevaucher légèrement comme des écailles. Verser un peu de l'appareil crème/lait. Recommencer couche par couche en terminant par une belle couche de pommes de terre. Verser le reste de l'appareil qui doit arriver juste au niveau des pommes de terre, pas au-dessus.",
      "CUISSON : Enfourner pour 1h à 1h15. Le gratin est prêt quand : le dessus est doré, les pommes de terre sont fondantes (vérifier avec la pointe d'un couteau qui doit s'enfoncer sans résistance), et la crème forme des bulles dorées sur les bords.",
      "REPOS ET SERVICE : Sortir le gratin du four et le laisser reposer 5-10 minutes avant de servir. Le gratin va se tenir mieux et sera plus facile à découper."
    ],
    conseils: "Le vrai gratin dauphinois ne contient PAS de fromage ! C'est une recette traditionnelle du Dauphiné. La qualité des pommes de terre est essentielle : choisir des variétés à chair ferme qui ne se délitent pas à la cuisson. La cuisson lente à basse température est le secret d'un gratin crémeux.",
    variantes: ["Gratin savoyard (ajouter du beaufort ou gruyère râpé)", "Version truffée (glisser des lamelles de truffe entre les couches)", "Gratin de luxe (remplacer le lait par de la crème)"]
  },

  "pommes_sarladaises": {
    nom: "Pommes Sarladaises",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre à chair ferme (Charlotte, BF15)", quantite: "800 g", type: "légume" },
      { nom: "Graisse de canard (ou d'oie)", quantite: "100 g", type: "matière grasse" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Persil plat frais", quantite: "1 bouquet (20-30g)", type: "herbe" },
      { nom: "Sel fin", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LES POMMES DE TERRE : Éplucher les pommes de terre. Les couper en rondelles fines de 3mm d'épaisseur, à la mandoline de préférence pour une épaisseur régulière. NE PAS les rincer : l'amidon aidera à la cohésion et au croustillant.",
      "CHAUFFER LA GRAISSE : Dans une grande poêle (antiadhésive idéalement), faire fondre la graisse de canard à feu moyen. La graisse doit être bien chaude mais ne pas fumer.",
      "PREMIÈRE CUISSON : Ajouter toutes les pommes de terre d'un coup. Les étaler en couche relativement uniforme. Saler légèrement. Laisser cuire sans remuer pendant 5-6 minutes pour que le dessous colore.",
      "MÉLANGER ET CUIRE : Retourner délicatement les pommes de terre avec une spatule en bois. Continuer la cuisson à feu moyen pendant 30-35 minutes, en retournant régulièrement (toutes les 4-5 minutes) pour qu'elles dorent de tous côtés. Ne pas trop les remuer sinon elles vont se casser.",
      "PRÉPARER LA PERSILLADE : Pendant la cuisson, peler les gousses d'ail. Les hacher très finement. Laver, sécher et ciseler le persil. Mélanger l'ail et le persil ensemble : c'est la persillade.",
      "FINITION : 5 minutes avant la fin de la cuisson, quand les pommes de terre sont bien dorées et croustillantes, ajouter la persillade. Mélanger délicatement. Goûter et rectifier l'assaisonnement en sel et poivre.",
      "SERVICE : Servir immédiatement dans un plat chaud. Les pommes sarladaises doivent être bien dorées à l'extérieur et fondantes à l'intérieur."
    ],
    conseils: "Spécialité emblématique du Périgord, parfaite avec le confit de canard, le magret ou le foie gras poêlé. La graisse de canard est essentielle pour l'authenticité du goût. Pour un résultat optimal, utiliser une poêle en fonte bien culottée. Les pommes sarladaises authentiques de Sarlat contiennent parfois des lamelles de truffe noire du Périgord !",
    variantes: ["Ajouter des cèpes émincés pour une version forestière", "Version luxe avec des lamelles de truffe noire", "Remplacer la graisse de canard par de l'huile de noix pour une version plus légère"]
  },

  "pommes_fondantes": {
    nom: "Pommes de Terre Fondantes",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 40,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "30 cl", type: "bouillon" },
      { nom: "Thym frais", quantite: "4 branches", type: "herbe" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" }
    ],
    etapes: [
      "Éplucher les pommes de terre et les couper en cylindres épais.",
      "Faire fondre le beurre dans une poêle allant au four.",
      "Saisir les pommes de terre sur une face jusqu'à coloration dorée.",
      "Retourner, ajouter l'ail, le thym et le fond de volaille.",
      "Enfourner à 200°C pendant 25-30 min.",
      "Les pommes de terre doivent être dorées dessus et fondantes à l'intérieur."
    ],
    conseils: "Le secret est de ne pas retourner les pommes de terre pendant la cuisson au four.",
    variantes: ["Remplacer le fond de volaille par du fond de boeuf pour les viandes rouges"]
  },

  "frites_maison": {
    nom: "Frites Maison",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Bintje (ou Agria, Marabel)", quantite: "1 kg", type: "légume" },
      { nom: "Huile de friture (arachide ou tournesol)", quantite: "2 L", type: "matière grasse" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "CHOISIR LES BONNES POMMES DE TERRE : Les variétés à chair farineuse comme la Bintje sont idéales car elles absorbent moins d'huile et deviennent plus croustillantes. Éviter les pommes de terre à chair ferme.",
      "TAILLER LES FRITES : Éplucher les pommes de terre. Les couper en bâtonnets réguliers d'environ 1 cm de côté et 7-8 cm de long. La régularité est importante pour une cuisson uniforme. Utiliser un coupe-frites ou un couteau bien aiguisé.",
      "RINCER ET SÉCHER : Rincer les bâtonnets à l'eau froide pour éliminer l'excès d'amidon en surface (ce qui les rendrait collantes). Les sécher PARFAITEMENT avec un torchon propre ou du papier absorbant. C'est crucial : toute trace d'eau dans l'huile chaude provoquera des projections dangereuses !",
      "PREMIÈRE CUISSON (blanchiment) : Chauffer l'huile à 150°C exactement (utiliser un thermomètre de cuisine). Plonger les frites par petites quantités (ne pas surcharger, l'huile doit les entourer). Cuire 5-7 minutes : les frites doivent être cuites à l'intérieur mais sans coloration. Elles vont légèrement se ramollir. Les retirer avec une araignée et les étaler sur du papier absorbant.",
      "REPOS OBLIGATOIRE : Laisser refroidir les frites au moins 10-15 minutes (jusqu'à 24h au réfrigérateur). Pendant ce repos, l'humidité interne migre vers l'extérieur et s'évapore, ce qui garantira le croustillant final.",
      "DEUXIÈME CUISSON (finition) : Monter la température de l'huile à 180°C. Replonger les frites par petites quantités. Cuire 2-3 minutes jusqu'à obtenir une belle coloration dorée. Les frites doivent être croustillantes à l'extérieur.",
      "ASSAISONNER ET SERVIR : Égoutter rapidement les frites sur du papier absorbant. Les transférer IMMÉDIATEMENT dans un plat chaud et saler généreusement. Le sel n'adhère correctement qu'aux frites chaudes. Servir sans attendre !"
    ],
    conseils: "La DOUBLE CUISSON est le secret absolu des frites croustillantes. Première cuisson basse température = cuisson de l'intérieur. Deuxième cuisson haute température = croustillant de l'extérieur. Ne jamais surcharger la friteuse : trop de frites font chuter la température de l'huile. L'huile d'arachide supporte bien les hautes températures et donne un bon goût.",
    variantes: ["Frites de patate douce (cuire moins longtemps)", "Frites au paprika fumé (saupoudrer à la sortie)", "Frites à la truffe (ajouter de l'huile de truffe et du parmesan râpé)"]
  },

  "frites_belges": {
    nom: "Frites Belges",
    categorie: "féculent",
    temps_preparation: 25,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Bintje", quantite: "1.2 kg", type: "légume" },
      { nom: "Graisse de boeuf (blanc de boeuf)", quantite: "2 L", type: "matière grasse" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les pommes de terre en bâtonnets de 1.5 cm d'épaisseur.",
      "Tremper dans l'eau froide 2h, puis sécher parfaitement.",
      "Première cuisson à 140°C pendant 8-10 min jusqu'à ce qu'elles soient cuites mais pas dorées.",
      "Égoutter et laisser refroidir 30 min minimum.",
      "Deuxième cuisson à 175°C pendant 3-4 min jusqu'à coloration dorée.",
      "Égoutter, saler et servir dans un cornet en papier."
    ],
    conseils: "Le blanc de boeuf donne le goût authentique des friteries belges. Les frites doivent être plus épaisses que les françaises.",
    variantes: ["Servir avec de la mayonnaise maison"]
  },

  "puree_pommes_terre": {
    nom: "Purée de Pommes de Terre",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre à purée", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Lait chaud", quantite: "20 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel, poivre blanc", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les pommes de terre en morceaux.",
      "Cuire à l'eau salée froide 20-25 min jusqu'à ce qu'elles soient tendres.",
      "Égoutter et passer au moulin à légumes (grille fine).",
      "Incorporer le beurre froid en morceaux en mélangeant vivement.",
      "Ajouter progressivement le lait chaud jusqu'à consistance désirée.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Ne jamais mixer la purée au robot, elle deviendrait collante. Utiliser des pommes de terre farineuses (Bintje, Agria).",
    variantes: ["Purée à l'huile d'olive", "Purée à l'ail confit"]
  },

  "pommes_vapeur": {
    nom: "Pommes de Terre Vapeur",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre nouvelles", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Persil frais", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver les pommes de terre sans les éplucher.",
      "Les placer dans un panier vapeur au-dessus d'eau frémissante.",
      "Cuire 18-22 min selon la taille (vérifier avec la pointe d'un couteau).",
      "Servir avec une noisette de beurre, du persil ciselé et de la fleur de sel."
    ],
    conseils: "Garder la peau des pommes de terre nouvelles pour plus de goût et de texture.",
    variantes: ["Ajouter de la menthe fraîche", "Version au beurre d'herbes"]
  },

  "pommes_grenaille": {
    nom: "Pommes Grenaille Rôties",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre grenaille", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Thym frais", quantite: "4 branches", type: "herbe" },
      { nom: "Romarin", quantite: "2 branches", type: "herbe" },
      { nom: "Gros sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Laver les pommes grenaille et les sécher.",
      "Les disposer dans un plat, arroser d'huile d'olive.",
      "Ajouter les herbes et le gros sel.",
      "Enfourner 30-35 min en remuant à mi-cuisson.",
      "Servir dorées et croustillantes."
    ],
    conseils: "Les pommes grenaille sont des petites pommes de terre qui n'ont pas besoin d'être épluchées.",
    variantes: ["Version à l'ail en chemise", "Ajouter des olives noires"]
  },

  "rosti": {
    nom: "Rösti Suisse",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Beurre clarifié", quantite: "60 g", type: "matière grasse" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre en robe des champs la veille, réfrigérer.",
      "Éplucher et râper grossièrement les pommes de terre froides.",
      "Faire chauffer le beurre clarifié dans une poêle.",
      "Ajouter les pommes de terre, tasser et former une galette.",
      "Cuire 8-10 min à feu moyen jusqu'à formation d'une croûte dorée.",
      "Retourner à l'aide d'une assiette et cuire l'autre face 8 min."
    ],
    conseils: "Utiliser des pommes de terre cuites la veille pour qu'elles soient bien sèches et que le rösti soit croustillant.",
    variantes: ["Rösti au lard", "Rösti aux oignons"]
  },

  // ============================================
  // LÉGUMES
  // ============================================
  "haricots_verts": {
    nom: "Haricots Verts au Beurre",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots verts frais", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil frais", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Équeuter les haricots verts.",
      "Les plonger dans l'eau bouillante salée 6-8 min (ils doivent rester croquants).",
      "Égoutter et les plonger dans l'eau glacée pour fixer la couleur.",
      "Faire fondre le beurre avec l'ail haché.",
      "Sauter les haricots verts 2 min dans le beurre aillé.",
      "Assaisonner et parsemer de persil."
    ],
    conseils: "Le passage dans l'eau glacée garde les haricots bien verts.",
    variantes: ["Version amandes effilées", "Haricots verts à la provençale"]
  },

  "epinards_creme": {
    nom: "Épinards à la Crème",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards frais", quantite: "800 g", type: "légume" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver soigneusement les épinards et retirer les grosses tiges.",
      "Faire fondre le beurre dans une grande poêle.",
      "Ajouter l'ail émincé, puis les épinards.",
      "Faire tomber les épinards 3-4 min en remuant.",
      "Ajouter la crème, la muscade, sel et poivre.",
      "Laisser réduire 3-4 min et servir."
    ],
    conseils: "Les épinards réduisent énormément à la cuisson, prévoir une grande quantité.",
    variantes: ["Épinards à la florentine avec œuf poché", "Version au parmesan"]
  },

  "champignons_sautes": {
    nom: "Champignons Sautés",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Échalote", quantite: "2", type: "aromate" },
      { nom: "Persil frais", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les champignons (ne pas les laver, les essuyer).",
      "Les couper en quartiers.",
      "Faire chauffer le beurre à feu vif.",
      "Sauter les champignons sans les remuer pendant 3 min.",
      "Remuer, ajouter échalotes et ail, cuire encore 3 min.",
      "Assaisonner et parsemer de persil."
    ],
    conseils: "Ne pas surcharger la poêle pour bien faire sauter les champignons. Ils doivent dorer, pas bouillir.",
    variantes: ["À la bordelaise avec persillade", "Champignons forestiers mélangés"]
  },

  "chou_rouge_braise": {
    nom: "Chou Rouge Braisé aux Pommes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou rouge", quantite: "1 petit", type: "légume" },
      { nom: "Pommes", quantite: "2", type: "fruit" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Vinaigre de cidre", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Sucre roux", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Graisse de canard", quantite: "30 g", type: "matière grasse" },
      { nom: "Clou de girofle", quantite: "2", type: "épice" }
    ],
    etapes: [
      "Émincer finement le chou rouge.",
      "Éplucher et couper les pommes en dés.",
      "Faire revenir l'oignon émincé dans la graisse de canard.",
      "Ajouter le chou, les pommes, le vinaigre, le sucre et les clous de girofle.",
      "Mouiller avec un peu d'eau, couvrir.",
      "Braiser à feu doux 1h en remuant de temps en temps."
    ],
    conseils: "Accompagnement idéal pour le gibier et les viandes en sauce. Peut se préparer la veille.",
    variantes: ["Ajouter des marrons", "Version au vin rouge"]
  },

  "ratatouille": {
    nom: "Ratatouille Provençale",
    categorie: "légume",
    temps_preparation: 30,
    temps_cuisson: 45,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Courgettes", quantite: "3", type: "légume" },
      { nom: "Aubergines", quantite: "2", type: "légume" },
      { nom: "Poivrons", quantite: "2 (1 rouge, 1 jaune)", type: "légume" },
      { nom: "Tomates", quantite: "4", type: "légume" },
      { nom: "Oignon", quantite: "2", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "10 cl", type: "matière grasse" },
      { nom: "Thym, laurier, basilic", quantite: "à goût", type: "herbes" }
    ],
    etapes: [
      "Couper tous les légumes en gros dés.",
      "Faire revenir séparément chaque légume dans l'huile d'olive.",
      "Réunir tous les légumes dans une cocotte.",
      "Ajouter l'ail haché et les herbes.",
      "Couvrir et laisser mijoter 30 min à feu doux.",
      "Assaisonner et servir tiède ou froid."
    ],
    conseils: "Cuire les légumes séparément permet de mieux contrôler leur texture. La ratatouille est encore meilleure réchauffée.",
    variantes: ["Version au four en tian", "Ratatouille confite au four basse température"]
  },

  "puree_celeri": {
    nom: "Purée de Céleri-Rave",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri-rave", quantite: "1 (environ 800 g)", type: "légume" },
      { nom: "Pommes de terre", quantite: "200 g", type: "légume" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Éplucher et couper le céleri-rave et les pommes de terre en cubes.",
      "Cuire dans l'eau bouillante salée 25-30 min.",
      "Égoutter et passer au moulin à légumes.",
      "Incorporer le beurre et la crème chaude.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "La pomme de terre aide à lier la purée. Accompagnement idéal pour le gibier.",
    variantes: ["Purée céleri-pomme", "Version truffée"]
  },

  "polenta_cremeuse": {
    nom: "Polenta Crémeuse",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Polenta (semoule de maïs)", quantite: "200 g", type: "féculent" },
      { nom: "Eau ou bouillon", quantite: "1 L", type: "liquide" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Parmesan râpé", quantite: "60 g", type: "fromage" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Porter l'eau ou le bouillon à ébullition.",
      "Verser la polenta en pluie en remuant.",
      "Cuire à feu doux 40-45 min en remuant régulièrement.",
      "Incorporer le beurre et le parmesan.",
      "Assaisonner et servir crémeuse."
    ],
    conseils: "Remuer souvent pour éviter les grumeaux. Pour une polenta ferme, la verser dans un moule et la faire refroidir.",
    variantes: ["Polenta aux herbes", "Polenta grillée"]
  },

  "spatzle": {
    nom: "Spätzle Alsaciens",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Farine", quantite: "300 g", type: "féculent" },
      { nom: "Œufs", quantite: "4", type: "œuf" },
      { nom: "Lait", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la farine et le sel.",
      "Ajouter les œufs un à un en mélangeant.",
      "Incorporer le lait et la muscade pour obtenir une pâte épaisse.",
      "Porter une grande casserole d'eau salée à ébullition.",
      "Passer la pâte à travers une passoire à spätzle ou un presse-purée.",
      "Quand les spätzle remontent, les égoutter.",
      "Les faire sauter dans le beurre et servir."
    ],
    conseils: "Accompagnement traditionnel du gibier en Alsace et en Allemagne. Peuvent être préparés à l'avance et réchauffés.",
    variantes: ["Spätzle au fromage (Käsespätzle)", "Spätzle aux oignons frits"]
  },

  "marrons_poeles": {
    nom: "Marrons Poêlés",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Marrons entiers cuits (bocal)", quantite: "400 g", type: "fruit" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Égoutter les marrons.",
      "Faire fondre le beurre dans une poêle à feu moyen.",
      "Ajouter les marrons et le sucre.",
      "Faire dorer en remuant délicatement.",
      "Mouiller avec le fond de volaille et laisser caraméliser.",
      "Assaisonner et servir."
    ],
    conseils: "Manipulation délicate car les marrons s'émiettent facilement. Accompagnement classique de la dinde de Noël.",
    variantes: ["Marrons au lard", "Marrons aux champignons"]
  },

  "risotto_parmesan": {
    nom: "Risotto au Parmesan",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto (Arborio ou Carnaroli)", quantite: "300 g", type: "féculent" },
      { nom: "Bouillon de volaille chaud", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Échalote", quantite: "2", type: "aromate" },
      { nom: "Parmesan râpé", quantite: "80 g", type: "fromage" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Faire revenir les échalotes émincées dans l'huile et 20g de beurre.",
      "Ajouter le riz et le nacrer 2 min en remuant.",
      "Déglacer au vin blanc et laisser absorber.",
      "Ajouter le bouillon chaud louche par louche en remuant.",
      "Continuer jusqu'à ce que le riz soit crémeux (18-20 min).",
      "Hors du feu, incorporer le reste de beurre et le parmesan (mantecatura).",
      "Assaisonner et servir immédiatement."
    ],
    conseils: "Le bouillon doit toujours être chaud. Le risotto ne doit jamais attendre, le servir 'all'onda' (comme une vague).",
    variantes: ["Risotto aux cèpes", "Risotto au safran (alla milanese)"]
  },

  // ============================================
  // SALADES
  // ============================================
  "salade_verte": {
    nom: "Salade Verte Vinaigrette",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Laitue ou mesclun", quantite: "200 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de vin", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à café", type: "condiment" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et essorer soigneusement la salade.",
      "Préparer la vinaigrette : mélanger la moutarde, le vinaigre et le sel.",
      "Émulsionner en versant l'huile en filet.",
      "Poivrer.",
      "Assaisonner la salade au dernier moment avant de servir."
    ],
    conseils: "Toujours assaisonner la salade au dernier moment pour qu'elle reste croquante.",
    variantes: ["Vinaigrette au citron", "Vinaigrette balsamique"]
  },

  "coleslaw": {
    nom: "Coleslaw",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou blanc", quantite: "1/2", type: "légume" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Mayonnaise", quantite: "15 cl", type: "sauce" },
      { nom: "Vinaigre de cidre", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Sucre", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Émincer finement le chou blanc.",
      "Râper les carottes.",
      "Mélanger la mayonnaise, le vinaigre et le sucre.",
      "Incorporer les légumes et bien mélanger.",
      "Réfrigérer au moins 1h avant de servir."
    ],
    conseils: "Le coleslaw est meilleur après quelques heures au frais. Accompagnement parfait pour le barbecue.",
    variantes: ["Ajouter des pommes", "Version allégée au yaourt"]
  },

  // ============================================
  // SAUCES ET CONDIMENTS
  // ============================================
  "compote_airelles": {
    nom: "Compote d'Airelles",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Airelles fraîches ou surgelées", quantite: "300 g", type: "fruit" },
      { nom: "Sucre", quantite: "100 g", type: "assaisonnement" },
      { nom: "Eau", quantite: "5 cl", type: "liquide" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Mettre tous les ingrédients dans une casserole.",
      "Porter à ébullition en remuant.",
      "Laisser mijoter 10-15 min jusqu'à ce que les airelles éclatent.",
      "Laisser refroidir (la compote épaissit en refroidissant).",
      "Servir froid avec le gibier."
    ],
    conseils: "Accompagnement traditionnel du gibier en Europe du Nord. Se conserve plusieurs semaines au réfrigérateur.",
    variantes: ["Ajouter de la cannelle", "Version au vin rouge"]
  },

  // ============================================
  // AUTRES FÉCULENTS
  // ============================================
  "tagliatelles_fraiches": {
    nom: "Tagliatelles Fraîches au Beurre",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tagliatelles fraîches", quantite: "400 g", type: "pâtes" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Parmesan râpé", quantite: "40 g", type: "fromage" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les tagliatelles dans l'eau bouillante salée 2-3 min.",
      "Égoutter en réservant un peu d'eau de cuisson.",
      "Faire fondre le beurre dans une poêle.",
      "Y jeter les pâtes et remuer.",
      "Ajouter un peu d'eau de cuisson si nécessaire.",
      "Parsemer de parmesan et servir."
    ],
    conseils: "Les pâtes fraîches cuisent beaucoup plus vite que les sèches. Parfait pour accompagner les plats en sauce.",
    variantes: ["Avec de la truffe", "Aux herbes fraîches"]
  },

  "lentilles_vertes": {
    nom: "Lentilles Vertes du Puy",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Lentilles vertes du Puy", quantite: "250 g", type: "légumineuse" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Bouquet garni", quantite: "1", type: "herbes" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Vinaigre de vin", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer les lentilles.",
      "Les mettre dans une casserole avec la carotte, l'oignon piqué de clous de girofle et le bouquet garni.",
      "Couvrir d'eau froide et porter à ébullition.",
      "Cuire 20-25 min à petits frémissements.",
      "Égoutter, retirer les aromates.",
      "Assaisonner avec le beurre et le vinaigre."
    ],
    conseils: "Ne pas saler l'eau de cuisson, cela durcirait les lentilles. Les lentilles du Puy gardent bien leur forme.",
    variantes: ["Lentilles au lard", "Salade de lentilles tièdes"]
  },

  "choucroute": {
    nom: "Choucroute Garnie",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 180,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Choucroute crue", quantite: "1.5 kg", type: "légume" },
      { nom: "Saindoux ou graisse de canard", quantite: "80 g", type: "matière grasse" },
      { nom: "Oignon", quantite: "2", type: "aromate" },
      { nom: "Vin blanc d'Alsace", quantite: "50 cl", type: "alcool" },
      { nom: "Baies de genièvre", quantite: "10", type: "épice" },
      { nom: "Clous de girofle", quantite: "3", type: "épice" },
      { nom: "Laurier", quantite: "2 feuilles", type: "herbe" }
    ],
    etapes: [
      "Rincer la choucroute crue et l'égoutter.",
      "Faire revenir les oignons émincés dans le saindoux.",
      "Ajouter la choucroute et mélanger.",
      "Ajouter le vin, les baies de genièvre, les clous de girofle et le laurier.",
      "Couvrir et cuire à feu très doux 2h30-3h.",
      "Servir avec les charcuteries de votre choix."
    ],
    conseils: "La vraie choucroute se cuit longuement à feu très doux. Servir avec saucisses, lard, jarret...",
    variantes: ["Choucroute au champagne", "Choucroute de la mer"]
  },

  // ============================================
  // PURÉES DIVERSES
  // ============================================
  "puree_panais": {
    nom: "Purée de Panais",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Panais", quantite: "600 g", type: "légume" },
      { nom: "Pomme de terre", quantite: "200 g", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Éplucher et couper les panais et pommes de terre en cubes.",
      "Cuire dans l'eau bouillante salée 20-25 min.",
      "Égoutter et passer au moulin à légumes.",
      "Incorporer le beurre et la crème.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Le panais a un goût légèrement sucré et noisette. Parfait avec le gibier.",
    variantes: ["Purée panais-pomme", "Avec des noisettes torréfiées"]
  },

  "puree_marrons": {
    nom: "Purée de Marrons",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Marrons entiers cuits", quantite: "500 g", type: "fruit" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Céleri branche", quantite: "1", type: "légume" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Réchauffer les marrons avec le céleri haché et un peu d'eau.",
      "Égoutter et retirer le céleri.",
      "Mixer les marrons avec le beurre et la crème.",
      "Assaisonner avec sel et poivre."
    ],
    conseils: "Le céleri apporte une note de fraîcheur qui équilibre la douceur des marrons.",
    variantes: ["Purée de marrons au cognac", "Version sucrée pour les desserts"]
  },

  "puree_butternut": {
    nom: "Purée de Butternut",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Butternut", quantite: "1 (environ 1 kg)", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher le butternut et le couper en cubes.",
      "Cuire à la vapeur ou dans l'eau 25-30 min.",
      "Égoutter et mixer avec le beurre et la crème.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Le butternut a une chair douce et légèrement sucrée. Parfait avec les viandes blanches.",
    variantes: ["Purée butternut-orange", "Avec du gingembre"]
  },

  // ============================================
  // LÉGUMES BRAISÉS
  // ============================================
  "endives_braisees": {
    nom: "Endives Braisées",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Endives", quantite: "8", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Retirer les premières feuilles des endives et creuser légèrement la base.",
      "Faire fondre le beurre dans une cocotte.",
      "Disposer les endives, ajouter le sucre et le jus de citron.",
      "Assaisonner, couvrir et cuire à feu doux 45 min.",
      "Retourner à mi-cuisson."
    ],
    conseils: "Le sucre et le citron atténuent l'amertume des endives.",
    variantes: ["Endives au jambon gratinées", "Endives caramélisées"]
  },

  "fenouil_braise": {
    nom: "Fenouil Braisé",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fenouil", quantite: "4 bulbes", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" },
      { nom: "Parmesan râpé", quantite: "40 g", type: "fromage" }
    ],
    etapes: [
      "Couper les fenouils en quartiers.",
      "Les faire revenir dans l'huile d'olive avec l'ail.",
      "Mouiller avec le vin blanc, couvrir.",
      "Braiser 35-40 min à feu doux.",
      "Parsemer de parmesan avant de servir."
    ],
    conseils: "Le fenouil braisé accompagne parfaitement les poissons mais aussi les viandes blanches.",
    variantes: ["Fenouil à l'orange", "Fenouil gratinée à la béchamel"]
  },

  "carottes_glacees": {
    nom: "Carottes Glacées",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Eau ou bouillon", quantite: "20 cl", type: "liquide" },
      { nom: "Persil frais", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher les carottes et les couper en rondelles ou en bâtonnets.",
      "Les mettre dans une poêle avec le beurre, le sucre et l'eau.",
      "Cuire à découvert jusqu'à évaporation du liquide.",
      "Les carottes doivent être enrobées d'un glaçage brillant.",
      "Parsemer de persil et servir."
    ],
    conseils: "Technique classique de glaçage des légumes. Le liquide doit s'évaporer complètement.",
    variantes: ["Carottes glacées au cumin", "Carottes Vichy (avec eau de Vichy)"]
  },

  "navets_glaces": {
    nom: "Navets Glacés",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Navets", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" }
    ],
    etapes: [
      "Éplucher les navets et les tourner en petits légumes.",
      "Les mettre dans une poêle avec le beurre, le sucre et le fond.",
      "Cuire jusqu'à évaporation complète du liquide.",
      "Les navets doivent être tendres et brillants."
    ],
    conseils: "Les navets nouveaux sont plus doux. Accompagnement classique du canard.",
    variantes: ["Navets au miel", "Navets confits à l'orange"]
  },

  // ============================================
  // CHAMPIGNONS
  // ============================================
  "girolles_poelees": {
    nom: "Girolles Poêlées à la Persillade",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Girolles fraîches", quantite: "400 g", type: "champignon" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil frais", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les girolles avec un pinceau (ne pas les laver).",
      "Faire chauffer le beurre à feu vif.",
      "Sauter les girolles 5-6 min en remuant.",
      "Ajouter l'ail et le persil hachés en fin de cuisson.",
      "Assaisonner et servir immédiatement."
    ],
    conseils: "Ne jamais laver les champignons, ils deviennent spongieux. Les essuyer ou les brosser.",
    variantes: ["Girolles à la crème", "Girolles au thym"]
  },

  "cepes_bordelaise": {
    nom: "Cèpes à la Bordelaise",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais", quantite: "500 g", type: "champignon" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Échalotes", quantite: "3", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Persil frais", quantite: "4 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Nettoyer les cèpes et les couper en tranches épaisses.",
      "Chauffer l'huile dans une grande poêle.",
      "Saisir les cèpes à feu vif 3-4 min de chaque côté.",
      "Ajouter les échalotes émincées.",
      "En fin de cuisson, ajouter la persillade (ail + persil hachés).",
      "Assaisonner et servir."
    ],
    conseils: "Spécialité du Sud-Ouest, la persillade (ail + persil) est ajoutée au dernier moment.",
    variantes: ["Cèpes à la crème", "Cèpes grillés"]
  },

  // ============================================
  // ACCOMPAGNEMENTS DIVERS
  // ============================================
  "yorkshire_pudding": {
    nom: "Yorkshire Pudding",
    categorie: "accompagnement",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Farine", quantite: "150 g", type: "féculent" },
      { nom: "Œufs", quantite: "3", type: "œuf" },
      { nom: "Lait", quantite: "25 cl", type: "produit laitier" },
      { nom: "Graisse de bœuf (ou huile)", quantite: "6 c. à soupe", type: "matière grasse" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la farine et le sel, ajouter les œufs un à un.",
      "Incorporer le lait progressivement pour obtenir une pâte lisse.",
      "Laisser reposer 30 min à température ambiante.",
      "Préchauffer le four à 220°C.",
      "Répartir la graisse dans des moules à muffins et les chauffer au four.",
      "Verser la pâte dans les moules chauds et enfourner 20-25 min.",
      "Servir immédiatement, gonflés et dorés."
    ],
    conseils: "Le secret : la graisse et le four doivent être très chauds pour que les puddings gonflent.",
    variantes: ["Version géante (Toad in the Hole)", "Mini Yorkshire pour apéritif"]
  },

  "legumes_racines_rotis": {
    nom: "Légumes Racines Rôtis",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Carottes", quantite: "3", type: "légume" },
      { nom: "Panais", quantite: "2", type: "légume" },
      { nom: "Navets", quantite: "2", type: "légume" },
      { nom: "Betteraves", quantite: "2", type: "légume" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Thym et romarin", quantite: "quelques branches", type: "herbes" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Éplucher et couper les légumes en morceaux.",
      "Les disposer dans un plat, arroser d'huile et de miel.",
      "Ajouter les herbes, saler et poivrer.",
      "Enfourner 40-45 min en remuant à mi-cuisson.",
      "Servir bien caramélisés."
    ],
    conseils: "Mélange parfait pour l'automne et l'hiver. Accompagnement idéal pour le gibier.",
    variantes: ["Avec du butternut", "Ajouter des châtaignes"]
  },

  "gratin_pommes_terre": {
    nom: "Gratin de Pommes de Terre",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre", quantite: "1 kg", type: "légume" },
      { nom: "Gruyère râpé", quantite: "150 g", type: "fromage" },
      { nom: "Crème fraîche", quantite: "30 cl", type: "produit laitier" },
      { nom: "Lait", quantite: "20 cl", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Éplucher et émincer finement les pommes de terre.",
      "Frotter un plat avec l'ail, beurrer.",
      "Disposer les pommes de terre en couches, parsemer de fromage entre chaque.",
      "Mélanger crème et lait, verser sur le gratin.",
      "Enfourner 45-50 min jusqu'à ce que le dessus soit doré."
    ],
    conseils: "Le gratin doit être tendre à l'intérieur et croustillant dessus.",
    variantes: ["Gratin savoyard (avec Beaufort)", "Gratin aux 3 fromages"]
  }
};

// ============================================
// RECETTES SUPPLÉMENTAIRES POUR COMPLÉTER
// ============================================

// Ajout d'autres recettes importantes
const recettesSupplementaires = {
  "riz_pilaf": {
    nom: "Riz Pilaf",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz long grain", quantite: "250 g", type: "féculent" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Bouillon de volaille", quantite: "50 cl", type: "bouillon" },
      { nom: "Laurier", quantite: "1 feuille", type: "herbe" }
    ],
    etapes: [
      "Faire fondre le beurre, y faire revenir l'oignon émincé.",
      "Ajouter le riz et le nacrer 2 min en remuant.",
      "Verser le bouillon chaud, ajouter le laurier.",
      "Couvrir et cuire 18 min à feu doux.",
      "Laisser reposer 5 min à couvert avant de servir."
    ],
    conseils: "Ne pas remuer le riz pendant la cuisson. Le laisser gonfler tranquillement.",
    variantes: ["Riz aux épices", "Riz aux petits légumes"]
  },

  "flageolets": {
    nom: "Flageolets au Beurre",
    categorie: "légumineuse",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Flageolets en conserve", quantite: "800 g", type: "légumineuse" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil frais", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Rincer et égoutter les flageolets.",
      "Faire fondre le beurre avec l'ail haché.",
      "Ajouter les flageolets et réchauffer 10 min.",
      "Assaisonner et parsemer de persil."
    ],
    conseils: "Accompagnement traditionnel du gigot d'agneau.",
    variantes: ["Flageolets à la crème", "Flageolets à la tomate"]
  },

  "petits_pois_francaise": {
    nom: "Petits Pois à la Française",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits pois frais ou surgelés", quantite: "500 g", type: "légume" },
      { nom: "Laitue", quantite: "1", type: "légume" },
      { nom: "Petits oignons nouveaux", quantite: "12", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Effeuiller et ciseler la laitue.",
      "Mettre tous les ingrédients dans une cocotte avec un peu d'eau.",
      "Couvrir et cuire à feu doux 25-30 min.",
      "La laitue doit être fondante et les petits pois tendres."
    ],
    conseils: "La laitue apporte du moelleux et de la douceur aux petits pois.",
    variantes: ["Avec des lardons", "Avec de la menthe fraîche"]
  },

  "choux_bruxelles": {
    nom: "Choux de Bruxelles Sautés",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Choux de Bruxelles", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Lardons", quantite: "100 g", type: "charcuterie" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Parer les choux et les couper en deux.",
      "Les blanchir 5 min à l'eau bouillante salée.",
      "Égoutter et sécher.",
      "Faire revenir les lardons, ajouter les choux.",
      "Sauter 8-10 min avec le beurre et la muscade."
    ],
    conseils: "Choisir des petits choux, ils sont plus doux. Les blanchir réduit l'amertume.",
    variantes: ["Gratinés au parmesan", "Avec des marrons"]
  },

  "tomates_provencales": {
    nom: "Tomates à la Provençale",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates", quantite: "8", type: "légume" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Persil frais", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Chapelure", quantite: "4 c. à soupe", type: "féculent" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les tomates en deux horizontalement.",
      "Les disposer dans un plat huilé, face coupée vers le haut.",
      "Mélanger ail haché, persil et chapelure.",
      "Répartir sur les tomates, arroser d'huile.",
      "Enfourner 20-25 min."
    ],
    conseils: "Utiliser des tomates bien mûres en été.",
    variantes: ["Avec du parmesan", "Tomates farcies au thon"]
  }
};

// ============================================
// RECETTES SUPPLÉMENTAIRES - LÉGUMES ET SALADES
// ============================================

const recettesLegumes = {
  "asperges_vertes": {
    nom: "Asperges Vertes au Parmesan",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Asperges vertes", quantite: "500 g", type: "légume" },
      { nom: "Parmesan", quantite: "40 g", type: "fromage" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Citron", quantite: "1/2", type: "agrume" }
    ],
    etapes: [
      "Casser la base dure des asperges.",
      "Les cuire à l'eau bouillante salée 4-6 min (al dente).",
      "Égoutter et disposer dans un plat.",
      "Arroser d'huile d'olive et de jus de citron.",
      "Parsemer de copeaux de parmesan."
    ],
    conseils: "Les asperges doivent rester croquantes. Parfait avec le veau.",
    variantes: ["Asperges grillées", "Asperges à la hollandaise"]
  },

  "artichauts_poeles": {
    nom: "Artichauts Poêlés",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Artichauts poivrade", quantite: "8", type: "légume" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Citron", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Tourner les artichauts, les citronner pour éviter l'oxydation.",
      "Les couper en quartiers.",
      "Chauffer l'huile et faire sauter les artichauts 20 min.",
      "Ajouter l'ail émincé en fin de cuisson.",
      "Parsemer de persil et servir avec un filet de citron."
    ],
    conseils: "Les artichauts poivrade sont tendres et n'ont pas de foin.",
    variantes: ["Artichauts à la barigoule", "Artichauts violets frits"]
  },

  "epinards": {
    nom: "Épinards Simples",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards frais", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Sel, poivre, muscade", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver les épinards et retirer les tiges.",
      "Faire fondre le beurre avec l'ail.",
      "Ajouter les épinards et faire tomber 3-4 min.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Les épinards réduisent énormément, prévoir une grande quantité.",
    variantes: ["Épinards sautés à l'asiatique", "Épinards au sésame"]
  },

  "epinards_beurre": {
    nom: "Épinards au Beurre",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards frais", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Laver soigneusement les épinards.",
      "Faire revenir l'échalote dans le beurre.",
      "Ajouter les épinards et faire tomber.",
      "Ajouter le reste de beurre et la muscade.",
      "Servir bien chaud."
    ],
    conseils: "Le beurre doit napper les épinards sans être gras.",
    variantes: ["Avec des pignons grillés", "Au beurre noisette"]
  },

  "epinards_branches": {
    nom: "Épinards en Branches",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards en branches", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Piment", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Laver les épinards avec les tiges.",
      "Chauffer l'huile avec l'ail émincé.",
      "Faire sauter les épinards à feu vif.",
      "Ajouter le piment et servir."
    ],
    conseils: "Garder les tiges tendres pour plus de texture.",
    variantes: ["À l'italienne avec raisins et pignons"]
  },

  "pak_choi": {
    nom: "Pak Choi Sauté",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pak choi", quantite: "4", type: "légume" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "sauce" },
      { nom: "Gingembre", quantite: "1 cm", type: "épice" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Couper les pak choi en deux dans la longueur.",
      "Chauffer l'huile dans un wok.",
      "Faire sauter l'ail et le gingembre 30 secondes.",
      "Ajouter les pak choi côté coupé vers le bas.",
      "Cuire 2-3 min, ajouter la sauce soja."
    ],
    conseils: "Le pak choi doit rester croquant.",
    variantes: ["Avec des shiitakes", "À l'huile d'huître"]
  },

  "celeri_branches": {
    nom: "Céleri-Branches Braisé",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri-branches", quantite: "1 pied", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "25 cl", type: "bouillon" },
      { nom: "Thym", quantite: "2 branches", type: "herbe" }
    ],
    etapes: [
      "Nettoyer le céleri et le couper en tronçons.",
      "Faire revenir dans le beurre.",
      "Mouiller avec le fond, ajouter le thym.",
      "Braiser 25-30 min à couvert."
    ],
    conseils: "Le céleri-branches accompagne très bien les viandes blanches.",
    variantes: ["Céleri au jus de viande", "Céleri gratinée"]
  },

  "celeri_remoulade": {
    nom: "Céleri Rémoulade",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri-rave", quantite: "400 g", type: "légume" },
      { nom: "Mayonnaise", quantite: "15 cl", type: "sauce" },
      { nom: "Moutarde forte", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Citron", quantite: "1/2", type: "agrume" }
    ],
    etapes: [
      "Éplucher et râper le céleri-rave.",
      "Le citronner immédiatement.",
      "Mélanger mayonnaise et moutarde.",
      "Incorporer le céleri et bien mélanger.",
      "Réfrigérer 1h avant de servir."
    ],
    conseils: "Classique de la cuisine bistrot française.",
    variantes: ["Avec des pommes", "Allégée au yaourt"]
  },

  "chou_braise": {
    nom: "Chou Braisé",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou vert", quantite: "1", type: "légume" },
      { nom: "Lardons", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Bouillon", quantite: "25 cl", type: "liquide" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Couper le chou en lanières.",
      "Blanchir 5 min à l'eau bouillante.",
      "Faire revenir les lardons et l'oignon.",
      "Ajouter le chou, mouiller avec le bouillon.",
      "Braiser 40 min à couvert."
    ],
    conseils: "Accompagnement traditionnel de la potée.",
    variantes: ["Chou au cumin", "Chou au vin blanc"]
  },

  "chou_vert": {
    nom: "Chou Vert Sauté",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Chou vert", quantite: "1/2", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Carvi ou cumin", quantite: "1 c. à café", type: "épice" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Émincer le chou finement.",
      "Blanchir 3 min à l'eau bouillante.",
      "Égoutter et sauter dans le beurre.",
      "Ajouter le carvi, assaisonner."
    ],
    conseils: "Le blanchiment réduit l'amertume du chou.",
    variantes: ["Chou vert aux pommes", "Chou vert au lard"]
  },

  "chou_vert_braise": {
    nom: "Chou Vert Braisé au Lard",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou vert", quantite: "1", type: "légume" },
      { nom: "Poitrine fumée", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Bouillon", quantite: "30 cl", type: "liquide" },
      { nom: "Baies de genièvre", quantite: "5", type: "épice" }
    ],
    etapes: [
      "Couper le chou en quartiers, blanchir.",
      "Faire revenir la poitrine et l'oignon.",
      "Ajouter le chou et les baies.",
      "Mouiller, couvrir et braiser 45 min."
    ],
    conseils: "Les baies de genièvre parfument délicatement le chou.",
    variantes: ["Au vin blanc", "Avec des saucisses"]
  },

  "chou_rouge_pommes": {
    nom: "Chou Rouge aux Pommes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou rouge", quantite: "1 petit", type: "légume" },
      { nom: "Pommes", quantite: "2", type: "fruit" },
      { nom: "Vinaigre de cidre", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Sucre roux", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Graisse de canard", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Émincer le chou rouge.",
      "Éplucher et couper les pommes.",
      "Faire revenir le chou dans la graisse.",
      "Ajouter pommes, vinaigre, sucre.",
      "Braiser 1h à feu doux."
    ],
    conseils: "Accompagnement classique du gibier. Meilleur réchauffé.",
    variantes: ["Au vin rouge", "Aux marrons"]
  },

  "salade_mache": {
    nom: "Salade de Mâche",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mâche", quantite: "200 g", type: "légume" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de xérès", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et essorer délicatement la mâche.",
      "Préparer la vinaigrette à l'huile de noix.",
      "Assaisonner au dernier moment."
    ],
    conseils: "La mâche est fragile, la manipuler avec soin.",
    variantes: ["Avec des noix", "Avec des betteraves"]
  },

  "salade_mache_noix": {
    nom: "Salade de Mâche aux Noix",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mâche", quantite: "200 g", type: "légume" },
      { nom: "Noix", quantite: "50 g", type: "fruit sec" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et essorer la mâche.",
      "Concasser les noix grossièrement.",
      "Préparer la vinaigrette.",
      "Mélanger et servir aussitôt."
    ],
    conseils: "La mâche aux noix accompagne bien le magret.",
    variantes: ["Ajouter du bleu", "Avec des pommes"]
  },

  "salade_mesclun": {
    nom: "Mesclun",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun", quantite: "200 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre balsamique", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et essorer le mesclun.",
      "Préparer une vinaigrette légère.",
      "Assaisonner juste avant de servir."
    ],
    conseils: "Le mesclun est un mélange de jeunes pousses.",
    variantes: ["Avec des herbes fraîches", "Aux agrumes"]
  },

  "mesclun": {
    nom: "Mesclun Simple",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun", quantite: "200 g", type: "légume" },
      { nom: "Vinaigrette", quantite: "4 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Laver et essorer le mesclun.",
      "Assaisonner au moment de servir."
    ],
    conseils: "Accompagnement léger pour les viandes grillées.",
    variantes: ["Aux herbes", "Aux fleurs comestibles"]
  },

  "salade_roquette": {
    nom: "Salade de Roquette",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Roquette", quantite: "150 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Citron", quantite: "1/2", type: "agrume" },
      { nom: "Parmesan", quantite: "30 g", type: "fromage" }
    ],
    etapes: [
      "Laver et essorer la roquette.",
      "Préparer une vinaigrette huile-citron.",
      "Assaisonner et parsemer de parmesan."
    ],
    conseils: "La roquette a un goût poivré qui se marie bien avec le boeuf.",
    variantes: ["Aux tomates cerises", "Aux pignons grillés"]
  },

  "salade_roquette_parmesan": {
    nom: "Roquette Parmesan",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Roquette", quantite: "150 g", type: "légume" },
      { nom: "Parmesan en copeaux", quantite: "60 g", type: "fromage" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre balsamique", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Disposer la roquette dans les assiettes.",
      "Parsemer de copeaux de parmesan.",
      "Arroser d'huile et de balsamique."
    ],
    conseils: "Classique accompagnement de la tagliata.",
    variantes: ["Avec des tomates séchées"]
  },

  "salade_endives_noix": {
    nom: "Salade d'Endives aux Noix",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Endives", quantite: "4", type: "légume" },
      { nom: "Noix", quantite: "60 g", type: "fruit sec" },
      { nom: "Roquefort", quantite: "80 g", type: "fromage" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Émincer les endives.",
      "Concasser les noix.",
      "Émietter le roquefort.",
      "Mélanger et assaisonner à l'huile de noix."
    ],
    conseils: "L'amertume des endives se marie bien avec le roquefort.",
    variantes: ["Avec des pommes", "Avec du bleu d'Auvergne"]
  },

  "salade_frisee_lardons": {
    nom: "Salade Frisée aux Lardons",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Frisée", quantite: "1", type: "légume" },
      { nom: "Lardons", quantite: "150 g", type: "charcuterie" },
      { nom: "Croûtons", quantite: "80 g", type: "pain" },
      { nom: "Œuf poché", quantite: "4", type: "œuf" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et essorer la frisée.",
      "Faire rissoler les lardons.",
      "Déglacer la poêle au vinaigre.",
      "Verser sur la salade avec les croûtons.",
      "Servir avec l'œuf poché."
    ],
    conseils: "La salade lyonnaise classique.",
    variantes: ["Avec un œuf mollet", "Salade au chèvre chaud"]
  },

  "salade_perigourdine": {
    nom: "Salade Périgourdine",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun", quantite: "150 g", type: "légume" },
      { nom: "Gésiers confits", quantite: "200 g", type: "viande" },
      { nom: "Magret séché", quantite: "100 g", type: "charcuterie" },
      { nom: "Noix", quantite: "50 g", type: "fruit sec" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Réchauffer les gésiers.",
      "Disposer le mesclun dans les assiettes.",
      "Ajouter gésiers, magret émincé et noix.",
      "Assaisonner à l'huile de noix."
    ],
    conseils: "Spécialité du Sud-Ouest.",
    variantes: ["Avec du foie gras", "Avec des cèpes"]
  },

  "salade_gesiers": {
    nom: "Salade de Gésiers",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Gésiers confits", quantite: "300 g", type: "viande" },
      { nom: "Salade verte", quantite: "200 g", type: "légume" },
      { nom: "Croûtons", quantite: "80 g", type: "pain" },
      { nom: "Vinaigre de xérès", quantite: "2 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Réchauffer les gésiers à la poêle.",
      "Disposer la salade et les croûtons.",
      "Ajouter les gésiers chauds.",
      "Déglacer la poêle au vinaigre et verser sur la salade."
    ],
    conseils: "Les gésiers doivent être bien chauds sur la salade froide.",
    variantes: ["Avec des pignons", "Avec du foie de volaille"]
  },

  "salade_tomates": {
    nom: "Salade de Tomates",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates", quantite: "4 belles", type: "légume" },
      { nom: "Oignon rouge", quantite: "1/2", type: "aromate" },
      { nom: "Basilic frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Couper les tomates en rondelles.",
      "Émincer finement l'oignon.",
      "Disposer dans un plat.",
      "Arroser d'huile, parsemer de basilic."
    ],
    conseils: "Utiliser des tomates bien mûres en été.",
    variantes: ["Tomates mozzarella", "Tomates au thon"]
  },

  "salade_concombre": {
    nom: "Salade de Concombre",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Concombre", quantite: "1 grand", type: "légume" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Aneth frais", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Vinaigre", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et émincer finement le concombre.",
      "Le faire dégorger au sel 15 min.",
      "Rincer et égoutter.",
      "Mélanger avec crème et aneth."
    ],
    conseils: "Le dégorgement rend le concombre plus digeste.",
    variantes: ["Au yaourt grec", "À la menthe"]
  },

  "salade_pommes_terre": {
    nom: "Salade de Pommes de Terre",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre à chair ferme", quantite: "800 g", type: "légume" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Vin blanc", quantite: "5 cl", type: "alcool" },
      { nom: "Huile", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Persil ou ciboulette", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau.",
      "Les couper chaudes en rondelles.",
      "Arroser de vin blanc, ajouter échalotes émincées.",
      "Assaisonner avec huile et herbes."
    ],
    conseils: "Assaisonner les pommes de terre encore chaudes pour qu'elles s'imprègnent.",
    variantes: ["À la mayonnaise", "Avec des cornichons"]
  },

  "salade_lentilles": {
    nom: "Salade de Lentilles",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Lentilles vertes du Puy", quantite: "250 g", type: "légumineuse" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Moutarde", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les lentilles 20-25 min.",
      "Égoutter et laisser tiédir.",
      "Préparer une vinaigrette à la moutarde.",
      "Mélanger lentilles, échalotes émincées et vinaigrette.",
      "Parsemer de persil."
    ],
    conseils: "Servir tiède pour plus de saveur.",
    variantes: ["Aux lardons", "Au saumon fumé"]
  },

  "salade_composee": {
    nom: "Salade Composée",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Salade verte", quantite: "150 g", type: "légume" },
      { nom: "Tomates", quantite: "2", type: "légume" },
      { nom: "Concombre", quantite: "1/2", type: "légume" },
      { nom: "Maïs", quantite: "100 g", type: "légume" },
      { nom: "Vinaigrette", quantite: "5 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Laver et préparer tous les légumes.",
      "Couper tomates et concombre.",
      "Disposer harmonieusement dans un saladier.",
      "Assaisonner au dernier moment."
    ],
    conseils: "Varier les couleurs pour une belle présentation.",
    variantes: ["Avec du thon", "Avec des œufs durs"]
  },

  "salade_fraiche": {
    nom: "Salade Fraîche",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Salade verte", quantite: "200 g", type: "légume" },
      { nom: "Radis", quantite: "1 botte", type: "légume" },
      { nom: "Concombre", quantite: "1/2", type: "légume" },
      { nom: "Herbes fraîches", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Laver tous les légumes.",
      "Émincer radis et concombre.",
      "Mélanger avec la salade.",
      "Assaisonner avec les herbes."
    ],
    conseils: "Parfaite en été pour accompagner les grillades.",
    variantes: ["Avec du fromage frais"]
  },

  "salade_herbes": {
    nom: "Salade aux Herbes",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun", quantite: "150 g", type: "légume" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Estragon", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Cerfeuil", quantite: "1 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Laver le mesclun et les herbes.",
      "Ciseler les herbes finement.",
      "Mélanger le tout.",
      "Assaisonner légèrement."
    ],
    conseils: "Les herbes fraîches apportent de la fraîcheur.",
    variantes: ["Avec des fleurs comestibles"]
  },

  "salade_tiede": {
    nom: "Salade Tiède",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Salade verte", quantite: "200 g", type: "légume" },
      { nom: "Lardons", quantite: "100 g", type: "charcuterie" },
      { nom: "Croûtons", quantite: "80 g", type: "pain" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Préparer la salade dans un saladier.",
      "Faire rissoler les lardons.",
      "Déglacer au vinaigre.",
      "Verser chaud sur la salade.",
      "Ajouter les croûtons."
    ],
    conseils: "Le vinaigre chaud fait légèrement faner la salade.",
    variantes: ["Avec un œuf poché", "Avec du chèvre chaud"]
  },

  "salade_vinaigrette": {
    nom: "Salade Vinaigrette",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Salade", quantite: "200 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Moutarde", quantite: "1 c. à café", type: "condiment" }
    ],
    etapes: [
      "Préparer la vinaigrette.",
      "Laver et essorer la salade.",
      "Assaisonner au moment de servir."
    ],
    conseils: "La vinaigrette classique : 3 parts d'huile pour 1 de vinaigre.",
    variantes: ["Au citron", "Au balsamique"]
  },

  "salade_thai": {
    nom: "Salade Thaï",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Chou blanc", quantite: "200 g", type: "légume" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Cacahuètes", quantite: "50 g", type: "fruit sec" },
      { nom: "Coriandre", quantite: "1 bouquet", type: "herbe" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "sauce" },
      { nom: "Jus de citron vert", quantite: "2 c. à soupe", type: "agrume" }
    ],
    etapes: [
      "Émincer finement le chou.",
      "Râper les carottes.",
      "Concasser les cacahuètes.",
      "Mélanger avec la sauce soja et le citron.",
      "Parsemer de coriandre."
    ],
    conseils: "Ajouter du piment pour plus d'authenticité.",
    variantes: ["Avec des crevettes", "Avec du bœuf"]
  },

  "salade_wakame": {
    nom: "Salade de Wakame",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Wakame déshydraté", quantite: "30 g", type: "algue" },
      { nom: "Concombre", quantite: "1", type: "légume" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "sauce" },
      { nom: "Vinaigre de riz", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "matière grasse" },
      { nom: "Graines de sésame", quantite: "2 c. à soupe", type: "graine" }
    ],
    etapes: [
      "Réhydrater le wakame 10 min dans l'eau.",
      "Émincer le concombre finement.",
      "Mélanger la sauce : soja, vinaigre, sésame.",
      "Égoutter le wakame et mélanger le tout.",
      "Parsemer de graines de sésame."
    ],
    conseils: "Accompagnement typique des restaurants japonais.",
    variantes: ["Avec du gingembre mariné", "Avec du tofu"]
  },

  "crudites": {
    nom: "Crudités",
    categorie: "entrée",
    temps_preparation: 20,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Céleri-rave", quantite: "200 g", type: "légume" },
      { nom: "Concombre", quantite: "1", type: "légume" },
      { nom: "Radis", quantite: "1 botte", type: "légume" },
      { nom: "Vinaigrettes diverses", quantite: "à goût", type: "sauce" }
    ],
    etapes: [
      "Éplucher et râper les carottes.",
      "Préparer le céleri rémoulade.",
      "Émincer le concombre.",
      "Laver les radis.",
      "Présenter avec les sauces."
    ],
    conseils: "Classique de la cuisine française.",
    variantes: ["Avec betteraves râpées", "Avec du chou rouge"]
  }
};

// ============================================
// FÉCULENTS, RIZ, PÂTES
// ============================================

const recettesFeculents = {
  "pommes_sautees": {
    nom: "Pommes de Terre Sautées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher et couper les pommes de terre en cubes.",
      "Les cuire à l'eau 8-10 min (à peine tendres).",
      "Égoutter et sécher.",
      "Sauter dans le beurre jusqu'à coloration dorée.",
      "Ajouter ail et persil en fin de cuisson."
    ],
    conseils: "Précuire les pommes de terre pour un meilleur résultat.",
    variantes: ["Au romarin", "À la graisse de canard"]
  },

  "pommes_rissolees": {
    nom: "Pommes de Terre Rissolées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Huile et beurre", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Thym", quantite: "2 branches", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les pommes de terre en gros dés.",
      "Chauffer huile et beurre dans une grande poêle.",
      "Faire rissoler à feu moyen 25-30 min.",
      "Retourner régulièrement pour dorer uniformément.",
      "Ajouter le thym, assaisonner."
    ],
    conseils: "Ne pas trop remuer pour avoir une belle croûte.",
    variantes: ["Aux herbes de Provence", "Au paprika"]
  },

  "pommes_roties": {
    nom: "Pommes de Terre Rôties",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Romarin", quantite: "3 branches", type: "herbe" },
      { nom: "Gros sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les pommes de terre en quartiers.",
      "Les disposer dans un plat avec l'huile et le romarin.",
      "Enfourner 40-45 min en remuant à mi-cuisson.",
      "Saler en fin de cuisson."
    ],
    conseils: "Cuisson parfaite autour d'un rôti.",
    variantes: ["À l'ail", "Aux herbes de Provence"]
  },

  "pommes_boulangeres": {
    nom: "Pommes Boulangères",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre", quantite: "1 kg", type: "légume" },
      { nom: "Oignons", quantite: "2", type: "aromate" },
      { nom: "Fond de volaille", quantite: "40 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Thym", quantite: "3 branches", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Émincer pommes de terre et oignons.",
      "Alterner couches de pommes de terre et oignons dans un plat beurré.",
      "Verser le fond, ajouter le thym.",
      "Enfourner 1h jusqu'à ce que le dessus soit doré."
    ],
    conseils: "Le fond doit être absorbé en fin de cuisson.",
    variantes: ["Avec du lard", "Au jus de rôti"]
  },

  "pommes_four": {
    nom: "Pommes de Terre au Four",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Grosses pommes de terre", quantite: "4", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Ciboulette", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Piquer les pommes de terre à la fourchette.",
      "Enfourner directement sur la grille 1h.",
      "Ouvrir et servir avec beurre, crème et ciboulette."
    ],
    conseils: "La cuisson directe sur la grille donne une peau croustillante.",
    variantes: ["Garnie au fromage", "Au bacon et cheddar"]
  },

  "pommes_ecrasees": {
    nom: "Pommes de Terre Écrasées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Herbes fraîches", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les pommes de terre en robe des champs.",
      "Les écraser grossièrement à la fourchette.",
      "Arroser généreusement d'huile d'olive.",
      "Ajouter l'ail haché et les herbes."
    ],
    conseils: "Texture rustique, ni purée ni entières.",
    variantes: ["À l'huile de truffe", "Au fromage de chèvre"]
  },

  "pommes_nouvelles": {
    nom: "Pommes de Terre Nouvelles",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre nouvelles", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Menthe fraîche", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Gratter légèrement les pommes de terre.",
      "Les cuire à l'eau salée 15-20 min.",
      "Égoutter et ajouter le beurre.",
      "Parsemer de menthe et de fleur de sel."
    ],
    conseils: "Les pommes de terre nouvelles se mangent avec leur peau fine.",
    variantes: ["Au persil", "À la ciboulette"]
  },

  "pommes_persillees": {
    nom: "Pommes de Terre Persillées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Persil frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau salée.",
      "Égoutter et couper en morceaux.",
      "Faire fondre le beurre et ajouter les pommes de terre.",
      "Parsemer généreusement de persil ciselé."
    ],
    conseils: "Classique et simple, parfait avec le poisson ou le veau.",
    variantes: ["À l'ail", "Au beurre noisette"]
  },

  "pommes_allumettes": {
    nom: "Pommes Allumettes",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 5,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "600 g", type: "légume" },
      { nom: "Huile de friture", quantite: "2 L", type: "matière grasse" },
      { nom: "Sel fin", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les pommes de terre en fins bâtonnets (5 mm).",
      "Rincer et sécher parfaitement.",
      "Frire à 180°C en petites quantités.",
      "Égoutter sur papier absorbant.",
      "Saler immédiatement."
    ],
    conseils: "Plus fines que les frites classiques, elles doivent être très croustillantes.",
    variantes: ["Pommes paille (encore plus fines)"]
  },

  "pommes_dauphine": {
    nom: "Pommes Dauphine",
    categorie: "féculent",
    temps_preparation: 30,
    temps_cuisson: 10,
    difficulte: "difficile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre", quantite: "500 g", type: "légume" },
      { nom: "Pâte à choux", quantite: "200 g", type: "pâte" },
      { nom: "Huile de friture", quantite: "2 L", type: "matière grasse" },
      { nom: "Sel, muscade", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre et les réduire en purée sèche.",
      "Préparer la pâte à choux.",
      "Mélanger purée et pâte à choux (2/3 - 1/3).",
      "Former des boules et frire à 180°C.",
      "Égoutter et servir chaud."
    ],
    conseils: "La purée doit être très sèche pour un bon résultat.",
    variantes: ["En forme de quenelles", "Au parmesan"]
  },

  "pommes_pont_neuf": {
    nom: "Pommes Pont-Neuf",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Bintje", quantite: "1 kg", type: "légume" },
      { nom: "Huile de friture", quantite: "2 L", type: "matière grasse" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les pommes de terre en gros bâtonnets de 2 cm.",
      "Rincer et sécher.",
      "Blanchir à 150°C puis frire à 180°C.",
      "Égoutter et saler."
    ],
    conseils: "Les pommes Pont-Neuf sont les frites classiques des brasseries.",
    variantes: ["Au paprika", "À la truffe"]
  },

  "pommes_soufflees": {
    nom: "Pommes Soufflées",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "600 g", type: "légume" },
      { nom: "Huile de friture", quantite: "4 L (2 bains)", type: "matière grasse" },
      { nom: "Sel fin", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les pommes de terre en tranches régulières de 3mm.",
      "Première friture à 150°C jusqu'à ce qu'elles remontent.",
      "Les transférer rapidement dans une huile à 190°C.",
      "Elles doivent gonfler.",
      "Égoutter et saler."
    ],
    conseils: "Technique difficile, la température est cruciale.",
    variantes: ["Servir avec une sauce béarnaise"]
  },

  "pommes_huile": {
    nom: "Pommes de Terre à l'Huile",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre à chair ferme", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Ciboulette", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau.",
      "Les couper chaudes en rondelles.",
      "Assaisonner immédiatement avec huile et vinaigre.",
      "Ajouter échalotes et ciboulette."
    ],
    conseils: "Les pommes de terre absorbent mieux la vinaigrette quand elles sont chaudes.",
    variantes: ["Au vin blanc", "Au vinaigre balsamique"]
  },

  "pommes_confites": {
    nom: "Pommes de Terre Confites",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 90,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Graisse de canard", quantite: "200 g", type: "matière grasse" },
      { nom: "Ail", quantite: "1 tête", type: "aromate" },
      { nom: "Thym, laurier", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 140°C.",
      "Disposer les pommes de terre dans un plat.",
      "Couvrir de graisse fondue avec l'ail et les herbes.",
      "Confire au four 1h30.",
      "Servir fondantes et dorées."
    ],
    conseils: "Cuisson lente qui donne des pommes de terre fondantes à l'intérieur.",
    variantes: ["À l'huile d'olive", "Au lard"]
  },

  // RIZ
  "riz_blanc": {
    nom: "Riz Blanc",
    categorie: "féculent",
    temps_preparation: 2,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz long grain", quantite: "200 g", type: "féculent" },
      { nom: "Eau", quantite: "40 cl", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer le riz sous l'eau froide.",
      "Porter l'eau salée à ébullition.",
      "Ajouter le riz, couvrir et baisser le feu.",
      "Cuire 12-15 min sans soulever le couvercle.",
      "Laisser reposer 5 min puis égrener."
    ],
    conseils: "Ne pas remuer pendant la cuisson.",
    variantes: ["Au beurre", "À l'huile d'olive"]
  },

  "riz_nature": {
    nom: "Riz Nature",
    categorie: "féculent",
    temps_preparation: 2,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz", quantite: "200 g", type: "féculent" },
      { nom: "Eau", quantite: "2 fois le volume de riz", type: "liquide" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer le riz.",
      "Cuire selon la méthode pilaf ou créole.",
      "Égoutter si nécessaire.",
      "Servir nature."
    ],
    conseils: "Base neutre pour accompagner tous les plats.",
    variantes: ["Au beurre", "Aux herbes"]
  },

  "riz_basmati": {
    nom: "Riz Basmati",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz basmati", quantite: "200 g", type: "féculent" },
      { nom: "Eau", quantite: "35 cl", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Cardamome", quantite: "2 gousses", type: "épice" }
    ],
    etapes: [
      "Rincer le riz jusqu'à ce que l'eau soit claire.",
      "Faire tremper 20 min (optionnel).",
      "Porter l'eau à ébullition avec le sel et la cardamome.",
      "Ajouter le riz, couvrir et cuire 12 min à feu doux.",
      "Égrener à la fourchette."
    ],
    conseils: "Le basmati doit être bien rincé pour être léger et détaché.",
    variantes: ["Au curcuma", "Au safran"]
  },

  "riz_parfume": {
    nom: "Riz Parfumé",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz thaï parfumé", quantite: "200 g", type: "féculent" },
      { nom: "Eau", quantite: "35 cl", type: "liquide" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer le riz.",
      "Porter l'eau à ébullition.",
      "Ajouter le riz, couvrir et cuire 12 min.",
      "Laisser reposer 5 min."
    ],
    conseils: "Le riz parfumé a un arôme naturel de jasmin.",
    variantes: ["Au lait de coco", "À la citronnelle"]
  },

  "riz_vapeur": {
    nom: "Riz Vapeur",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz", quantite: "200 g", type: "féculent" },
      { nom: "Eau", quantite: "pour la vapeur", type: "liquide" }
    ],
    etapes: [
      "Rincer le riz.",
      "Placer dans un panier vapeur.",
      "Cuire à la vapeur 20 min.",
      "Égrener et servir."
    ],
    conseils: "Cuisson légère qui préserve les nutriments.",
    variantes: ["Riz gluant", "Avec des herbes"]
  },

  "riz_sauvage": {
    nom: "Riz Sauvage",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz sauvage", quantite: "200 g", type: "féculent" },
      { nom: "Bouillon de volaille", quantite: "60 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Rincer le riz sauvage.",
      "Cuire dans le bouillon 40-45 min.",
      "Égoutter et ajouter le beurre.",
      "Les grains doivent s'ouvrir."
    ],
    conseils: "Le riz sauvage n'est pas vraiment du riz, il a une texture particulière.",
    variantes: ["Avec des champignons", "Mélangé au riz blanc"]
  },

  "riz_gluant": {
    nom: "Riz Gluant",
    categorie: "féculent",
    temps_preparation: 120,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz gluant", quantite: "300 g", type: "féculent" },
      { nom: "Eau", quantite: "pour trempage et vapeur", type: "liquide" }
    ],
    etapes: [
      "Faire tremper le riz 2h minimum (idéalement toute la nuit).",
      "Égoutter et rincer.",
      "Cuire à la vapeur 20-25 min.",
      "Servir collant."
    ],
    conseils: "Le riz gluant accompagne les plats asiatiques et peut être sucré.",
    variantes: ["Riz gluant à la mangue", "Riz gluant au sésame"]
  },

  "riz_japonais": {
    nom: "Riz Japonais",
    categorie: "féculent",
    temps_preparation: 30,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz japonais", quantite: "300 g", type: "féculent" },
      { nom: "Eau", quantite: "36 cl", type: "liquide" }
    ],
    etapes: [
      "Rincer le riz 4-5 fois jusqu'à ce que l'eau soit claire.",
      "Faire tremper 30 min.",
      "Cuire à feu vif jusqu'à ébullition.",
      "Baisser au minimum et cuire 12 min.",
      "Laisser reposer 10 min à couvert."
    ],
    conseils: "Le riz japonais doit être légèrement collant mais chaque grain distinct.",
    variantes: ["Riz à sushi (avec vinaigre)", "Riz au sésame"]
  },

  "riz_cantonnais": {
    nom: "Riz Cantonnais",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz cuit de la veille", quantite: "400 g", type: "féculent" },
      { nom: "Œufs", quantite: "2", type: "œuf" },
      { nom: "Petits pois", quantite: "100 g", type: "légume" },
      { nom: "Jambon ou char siu", quantite: "100 g", type: "viande" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "sauce" },
      { nom: "Huile", quantite: "3 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Battre les œufs et les cuire en omelette, réserver.",
      "Faire sauter le riz froid dans l'huile chaude.",
      "Ajouter les petits pois et le jambon coupé.",
      "Incorporer l'omelette émincée.",
      "Assaisonner à la sauce soja."
    ],
    conseils: "Utiliser du riz de la veille pour qu'il soit bien sec.",
    variantes: ["Aux crevettes", "Au poulet"]
  },

  "riz_epice": {
    nom: "Riz aux Épices",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz basmati", quantite: "200 g", type: "féculent" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Cardamome, cannelle, clous de girofle", quantite: "à goût", type: "épice" },
      { nom: "Beurre clarifié (ghee)", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire revenir les épices dans le ghee.",
      "Ajouter l'oignon émincé.",
      "Ajouter le riz et nacrer.",
      "Mouiller et cuire à couvert."
    ],
    conseils: "Accompagnement classique des currys.",
    variantes: ["Riz biryani", "Riz au curcuma"]
  },

  "riz_mexicain": {
    nom: "Riz à la Mexicaine",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz long grain", quantite: "200 g", type: "féculent" },
      { nom: "Tomates", quantite: "2", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Bouillon de poulet", quantite: "40 cl", type: "bouillon" },
      { nom: "Cumin", quantite: "1 c. à café", type: "épice" }
    ],
    etapes: [
      "Faire revenir le riz dans l'huile jusqu'à coloration.",
      "Mixer tomates, oignon et ail, ajouter au riz.",
      "Verser le bouillon et le cumin.",
      "Couvrir et cuire 20 min."
    ],
    conseils: "Le riz mexicain doit avoir une légère couleur orangée.",
    variantes: ["Avec des haricots noirs", "Au piment"]
  },

  // RISOTTOS
  "risotto": {
    nom: "Risotto de Base",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto", quantite: "300 g", type: "féculent" },
      { nom: "Bouillon chaud", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "15 cl", type: "alcool" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre et parmesan", quantite: "60 g chaque", type: "produit laitier" }
    ],
    etapes: [
      "Faire revenir l'échalote dans le beurre.",
      "Nacrer le riz.",
      "Déglacer au vin blanc.",
      "Ajouter le bouillon louche par louche.",
      "Terminer avec beurre et parmesan."
    ],
    conseils: "La mantecatura (incorporation finale) rend le risotto crémeux.",
    variantes: ["Aux champignons", "Au safran", "Aux fruits de mer"]
  },

  "risotto_cepes": {
    nom: "Risotto aux Cèpes",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto", quantite: "300 g", type: "féculent" },
      { nom: "Cèpes frais ou séchés", quantite: "200 g frais ou 30 g séchés", type: "champignon" },
      { nom: "Bouillon de volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "15 cl", type: "alcool" },
      { nom: "Parmesan, beurre", quantite: "60 g chaque", type: "produit laitier" }
    ],
    etapes: [
      "Si séchés, réhydrater les cèpes et filtrer le jus.",
      "Faire sauter les cèpes frais ou réhydratés.",
      "Préparer le risotto de base.",
      "Incorporer les cèpes en fin de cuisson.",
      "Mantecatura avec beurre et parmesan."
    ],
    conseils: "Le jus de trempage des cèpes séchés parfume délicieusement le risotto.",
    variantes: ["Aux girolles", "Aux morilles"]
  },

  "risotto_truffe": {
    nom: "Risotto à la Truffe",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto", quantite: "300 g", type: "féculent" },
      { nom: "Bouillon de volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Truffe fraîche ou huile de truffe", quantite: "30 g ou 2 c. à soupe", type: "condiment" },
      { nom: "Parmesan, beurre", quantite: "60 g chaque", type: "produit laitier" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" }
    ],
    etapes: [
      "Préparer un risotto classique.",
      "Mantecatura avec beurre et parmesan.",
      "Ajouter la truffe râpée ou l'huile hors du feu.",
      "Servir avec des lamelles de truffe."
    ],
    conseils: "La truffe ne doit pas cuire pour garder son parfum.",
    variantes: ["À la truffe noire", "À la truffe blanche d'Alba"]
  },

  "risotto_safran": {
    nom: "Risotto au Safran",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto", quantite: "300 g", type: "féculent" },
      { nom: "Safran", quantite: "1 dose (0.3 g)", type: "épice" },
      { nom: "Bouillon de boeuf", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "15 cl", type: "alcool" },
      { nom: "Os à moelle", quantite: "2 (optionnel)", type: "viande" },
      { nom: "Parmesan, beurre", quantite: "80 g chaque", type: "produit laitier" }
    ],
    etapes: [
      "Infuser le safran dans un peu de bouillon chaud.",
      "Préparer le risotto de base.",
      "Ajouter le bouillon safrané en milieu de cuisson.",
      "Terminer avec beurre, parmesan et moelle."
    ],
    conseils: "Risotto alla Milanese traditionnel, accompagne l'osso-buco.",
    variantes: ["Sans moelle", "Avec des pistils de safran sur le dessus"]
  },

  "risotto_milanese": {
    nom: "Risotto alla Milanese",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz Carnaroli", quantite: "320 g", type: "féculent" },
      { nom: "Safran", quantite: "1 dose", type: "épice" },
      { nom: "Bouillon de boeuf", quantite: "1.2 L", type: "bouillon" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Moelle de bœuf", quantite: "50 g", type: "viande" },
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Parmesan", quantite: "80 g", type: "fromage" }
    ],
    etapes: [
      "Faire fondre la moelle avec 30 g de beurre.",
      "Nacrer le riz, déglacer au vin.",
      "Ajouter le bouillon safrané louche par louche.",
      "Mantecatura généreuse avec beurre et parmesan."
    ],
    conseils: "La version authentique milanaise, très riche en beurre.",
    variantes: ["Version légère sans moelle"]
  },

  "risotto_herbes": {
    nom: "Risotto aux Herbes",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz à risotto", quantite: "300 g", type: "féculent" },
      { nom: "Herbes fraîches (persil, basilic, ciboulette)", quantite: "1 bouquet de chaque", type: "herbe" },
      { nom: "Bouillon de légumes", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" },
      { nom: "Parmesan, beurre", quantite: "50 g chaque", type: "produit laitier" }
    ],
    etapes: [
      "Préparer un risotto de base.",
      "Mixer la moitié des herbes avec un peu de bouillon.",
      "Incorporer la purée d'herbes en fin de cuisson.",
      "Ajouter les herbes ciselées et la mantecatura."
    ],
    conseils: "Le risotto doit être d'un beau vert printanier.",
    variantes: ["Au pesto", "À l'ortie"]
  },

  // PÂTES
  "tagliatelles": {
    nom: "Tagliatelles",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tagliatelles", quantite: "400 g", type: "pâtes" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Parmesan", quantite: "50 g", type: "fromage" }
    ],
    etapes: [
      "Cuire les tagliatelles al dente.",
      "Réserver un peu d'eau de cuisson.",
      "Égoutter et mélanger avec le beurre.",
      "Ajouter le parmesan et un peu d'eau de cuisson."
    ],
    conseils: "Accompagnement classique des plats en sauce.",
    variantes: ["À la crème", "Aux champignons"]
  },

  "pates_fraiches": {
    nom: "Pâtes Fraîches",
    categorie: "féculent",
    temps_preparation: 30,
    temps_cuisson: 3,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Farine", quantite: "300 g", type: "féculent" },
      { nom: "Œufs", quantite: "3", type: "œuf" },
      { nom: "Huile d'olive", quantite: "1 c. à soupe", type: "matière grasse" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Faire une fontaine avec la farine, ajouter les œufs.",
      "Pétrir jusqu'à obtenir une pâte lisse.",
      "Laisser reposer 30 min.",
      "Étaler finement et découper.",
      "Cuire 2-3 min dans l'eau bouillante."
    ],
    conseils: "Les pâtes fraîches cuisent très vite.",
    variantes: ["Pâtes aux épinards", "Pâtes à l'encre de seiche"]
  },

  "pates_beurre": {
    nom: "Pâtes au Beurre",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pâtes", quantite: "400 g", type: "pâtes" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Parmesan", quantite: "60 g", type: "fromage" },
      { nom: "Poivre noir", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pâtes al dente.",
      "Faire fondre le beurre.",
      "Égoutter les pâtes en gardant de l'eau.",
      "Mélanger pâtes, beurre et parmesan.",
      "Ajouter un peu d'eau si nécessaire."
    ],
    conseils: "La simplicité à l'italienne.",
    variantes: ["Cacio e pepe", "Alfredo"]
  },

  "spaghetti": {
    nom: "Spaghetti",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Spaghetti", quantite: "400 g", type: "pâtes" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Piment", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Cuire les spaghetti al dente.",
      "Chauffer l'huile avec l'ail et le piment.",
      "Mélanger les pâtes avec l'huile parfumée."
    ],
    conseils: "Aglio e olio, le plat de minuit italien.",
    variantes: ["À la carbonara", "Aux palourdes"]
  },

  "nouilles_fraiches": {
    nom: "Nouilles Fraîches",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Nouilles fraîches asiatiques", quantite: "400 g", type: "pâtes" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Cuire les nouilles selon le paquet.",
      "Égoutter et rincer rapidement.",
      "Assaisonner avec huile de sésame et sauce soja."
    ],
    conseils: "Base pour les sautés asiatiques.",
    variantes: ["Nouilles sautées", "Nouilles froides"]
  },

  "nouilles_sautees": {
    nom: "Nouilles Sautées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Nouilles", quantite: "400 g", type: "pâtes" },
      { nom: "Légumes (chou, carottes)", quantite: "200 g", type: "légume" },
      { nom: "Sauce soja", quantite: "3 c. à soupe", type: "sauce" },
      { nom: "Huile", quantite: "3 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Cuire et égoutter les nouilles.",
      "Faire sauter les légumes au wok.",
      "Ajouter les nouilles et la sauce soja.",
      "Bien mélanger à feu vif."
    ],
    conseils: "Le wok doit être très chaud.",
    variantes: ["Aux crevettes", "Au poulet"]
  },

  "nouilles_beurre": {
    nom: "Nouilles au Beurre",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Nouilles aux œufs", quantite: "400 g", type: "pâtes" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les nouilles.",
      "Égoutter et mélanger avec le beurre.",
      "Parsemer de persil."
    ],
    conseils: "Simple et réconfortant.",
    variantes: ["Au fromage", "À l'ail"]
  },

  "gnocchis_poeles": {
    nom: "Gnocchis Poêlés",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Gnocchis", quantite: "500 g", type: "pâtes" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Sauge fraîche", quantite: "10 feuilles", type: "herbe" },
      { nom: "Parmesan", quantite: "50 g", type: "fromage" }
    ],
    etapes: [
      "Cuire les gnocchis à l'eau bouillante.",
      "Les égoutter dès qu'ils remontent.",
      "Faire fondre le beurre avec la sauge.",
      "Faire dorer les gnocchis dans le beurre.",
      "Servir avec le parmesan."
    ],
    conseils: "Le beurre de sauge est un classique italien.",
    variantes: ["À la gorgonzola", "Gratinés"]
  },

  "semoule": {
    nom: "Semoule",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Semoule de blé", quantite: "250 g", type: "féculent" },
      { nom: "Eau ou bouillon", quantite: "30 cl", type: "liquide" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Porter l'eau à ébullition avec le sel.",
      "Verser la semoule en pluie.",
      "Couvrir et laisser gonfler 5 min hors du feu.",
      "Égrener à la fourchette avec le beurre."
    ],
    conseils: "Base du couscous.",
    variantes: ["Aux raisins secs", "Au curcuma"]
  },

  "couscous": {
    nom: "Couscous (Semoule)",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Semoule de couscous", quantite: "500 g", type: "féculent" },
      { nom: "Eau chaude", quantite: "50 cl", type: "liquide" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" }
    ],
    etapes: [
      "Verser la semoule dans un plat.",
      "Arroser d'eau chaude et d'huile.",
      "Couvrir et laisser gonfler 10 min.",
      "Égrener avec le beurre.",
      "Répéter si nécessaire pour un couscous aéré."
    ],
    conseils: "Traditionnellement cuit à la vapeur dans un couscoussier.",
    variantes: ["Couscous aux légumes", "Couscous tfaya (aux oignons et raisins)"]
  },

  "taboule": {
    nom: "Taboulé",
    categorie: "salade",
    temps_preparation: 20,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Semoule fine", quantite: "150 g", type: "féculent" },
      { nom: "Tomates", quantite: "3", type: "légume" },
      { nom: "Concombre", quantite: "1", type: "légume" },
      { nom: "Menthe et persil", quantite: "1 bouquet de chaque", type: "herbe" },
      { nom: "Jus de citron", quantite: "4 c. à soupe", type: "agrume" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Faire gonfler la semoule dans de l'eau tiède.",
      "Couper tomates et concombre en petits dés.",
      "Ciseler les herbes finement.",
      "Mélanger le tout avec citron et huile.",
      "Réfrigérer 1h avant de servir."
    ],
    conseils: "Le vrai taboulé libanais contient plus d'herbes que de semoule.",
    variantes: ["Taboulé au quinoa", "Taboulé de chou-fleur"]
  },

  "polenta": {
    nom: "Polenta",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Polenta", quantite: "200 g", type: "féculent" },
      { nom: "Eau ou bouillon", quantite: "1 L", type: "liquide" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Porter l'eau à ébullition.",
      "Verser la polenta en pluie en remuant.",
      "Cuire 40-45 min en remuant souvent.",
      "Incorporer le beurre."
    ],
    conseils: "La polenta traditionnelle demande du temps et de l'attention.",
    variantes: ["Polenta grillée", "Polenta aux champignons"]
  },

  "polenta_herbes": {
    nom: "Polenta aux Herbes",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Polenta", quantite: "200 g", type: "féculent" },
      { nom: "Bouillon de légumes", quantite: "1 L", type: "bouillon" },
      { nom: "Herbes fraîches (thym, romarin, sauge)", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Parmesan", quantite: "50 g", type: "fromage" }
    ],
    etapes: [
      "Cuire la polenta dans le bouillon.",
      "Incorporer les herbes ciselées.",
      "Ajouter le parmesan en fin de cuisson."
    ],
    conseils: "Les herbes méditerranéennes se marient bien avec la polenta.",
    variantes: ["Au pesto", "À l'ail"]
  },

  "mac_and_cheese": {
    nom: "Mac and Cheese",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Macaroni", quantite: "400 g", type: "pâtes" },
      { nom: "Cheddar râpé", quantite: "300 g", type: "fromage" },
      { nom: "Lait", quantite: "50 cl", type: "produit laitier" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Farine", quantite: "40 g", type: "féculent" }
    ],
    etapes: [
      "Cuire les macaroni al dente.",
      "Préparer une béchamel avec beurre, farine et lait.",
      "Ajouter 2/3 du cheddar à la béchamel.",
      "Mélanger pâtes et sauce.",
      "Gratiner avec le reste de fromage."
    ],
    conseils: "Classique américain réconfortant.",
    variantes: ["Au bacon", "À la truffe"]
  }
};

// ============================================
// RECETTES GASTRONOMIQUES - CHAMPIGNONS NOBLES, CONDIMENTS, LÉGUMES RAFFINÉS
// ============================================

const recettesGastronomiques = {
  // CHAMPIGNONS NOBLES
  "morilles_sautees": {
    nom: "Morilles Sautées à la Crème",
    categorie: "garniture",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Morilles fraîches ou séchées", quantite: "200 g fraîches ou 40 g séchées", type: "champignon" },
      { nom: "Crème fraîche épaisse", quantite: "20 cl", type: "produit laitier" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Cognac", quantite: "3 cl", type: "alcool" },
      { nom: "Persil plat", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Si séchées, réhydrater les morilles 30 min dans de l'eau tiède, bien les rincer (elles retiennent le sable).",
      "Couper les grosses morilles en deux, garder les petites entières.",
      "Faire fondre le beurre, y faire revenir les échalotes émincées.",
      "Ajouter les morilles bien égouttées, sauter 5-6 min à feu vif.",
      "Flamber au cognac.",
      "Verser la crème, laisser réduire 5 min à feu doux.",
      "Assaisonner et parsemer de persil. Servir aussitôt."
    ],
    conseils: "Les morilles sont le champignon noble par excellence. Ne jamais les manger crues. Parfaites avec le veau, le poulet de Bresse ou le ris de veau.",
    variantes: ["Morilles farcies au foie gras", "Morilles en croûte feuilletée"]
  },

  "chanterelles_poelees": {
    nom: "Chanterelles Poêlées",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Chanterelles (girolles)", quantite: "400 g", type: "champignon" },
      { nom: "Beurre demi-sel", quantite: "60 g", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil frais", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les chanterelles au pinceau (ne pas les laver).",
      "Couper les plus grosses en deux.",
      "Chauffer le beurre à feu vif jusqu'à ce qu'il mousse.",
      "Sauter les chanterelles 5-6 min en les faisant sauter régulièrement.",
      "Ajouter l'ail haché et le persil en fin de cuisson.",
      "Assaisonner à la fleur de sel et servir immédiatement."
    ],
    conseils: "Les chanterelles doivent rester fermes et parfumées. Elles accompagnent magnifiquement le gibier à plumes et les viandes blanches.",
    variantes: ["Chanterelles à la crème", "Chanterelles en omelette"]
  },

  "poelee_champignons": {
    nom: "Poêlée de Champignons des Bois",
    categorie: "garniture",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Mélange de champignons (cèpes, girolles, trompettes)", quantite: "500 g", type: "champignon" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Échalotes", quantite: "3", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Thym frais", quantite: "3 branches", type: "herbe" },
      { nom: "Persil plat", quantite: "1 bouquet", type: "herbe" }
    ],
    etapes: [
      "Nettoyer soigneusement les champignons sans les laver.",
      "Les couper en morceaux selon leur taille.",
      "Chauffer beurre et huile à feu vif dans une grande poêle.",
      "Sauter les champignons par lots pour éviter qu'ils ne rendent leur eau.",
      "Ajouter les échalotes, puis l'ail et le thym.",
      "Terminer avec la persillade, assaisonner généreusement."
    ],
    conseils: "Garniture classique et luxueuse pour les pièces de bœuf et le gibier. Chaque champignon apporte sa saveur unique.",
    variantes: ["Avec des lamelles de truffe", "Flambée au madère"]
  },

  "poelee_girolles": {
    nom: "Poêlée de Girolles au Beurre Noisette",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Girolles fraîches", quantite: "400 g", type: "champignon" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" },
      { nom: "Persil et ciboulette", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre du moulin", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les girolles au pinceau.",
      "Chauffer le beurre jusqu'à coloration noisette.",
      "Ajouter les girolles et sauter 6-8 min.",
      "Déglacer avec le jus de citron.",
      "Parsemer d'herbes ciselées et servir."
    ],
    conseils: "Le beurre noisette apporte une saveur incomparable aux girolles. Accord parfait avec la volaille fermière.",
    variantes: ["Aux noisettes torréfiées", "À la crème de cèpes"]
  },

  "champignons_paris": {
    nom: "Champignons de Paris à la Crème",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris", quantite: "500 g", type: "champignon" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Émincer les champignons.",
      "Les faire sauter dans le beurre à feu vif.",
      "Ajouter l'échalote émincée.",
      "Verser la crème et laisser réduire.",
      "Parsemer de persil."
    ],
    conseils: "Un classique qui accompagne de nombreuses viandes.",
    variantes: ["À l'ail", "Au vin blanc"]
  },

  "gratin_cepes": {
    nom: "Gratin de Cèpes",
    categorie: "garniture",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais", quantite: "500 g", type: "champignon" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Parmesan râpé", quantite: "60 g", type: "fromage" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Persil plat", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Chapelure", quantite: "3 c. à soupe", type: "féculent" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Nettoyer et émincer les cèpes.",
      "Les faire sauter rapidement dans du beurre.",
      "Disposer dans un plat à gratin.",
      "Mélanger crème, parmesan, ail et persil, verser sur les cèpes.",
      "Saupoudrer de chapelure et gratiner 15-20 min."
    ],
    conseils: "Accompagnement d'exception pour les pièces de bœuf nobles.",
    variantes: ["Aux trompettes de la mort", "Aux morilles"]
  },

  // PURÉES NOBLES
  "puree_truffee": {
    nom: "Purée de Pommes de Terre Truffée",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Ratte ou BF15", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "150 g", type: "produit laitier" },
      { nom: "Lait chaud", quantite: "15 cl", type: "produit laitier" },
      { nom: "Truffe noire", quantite: "30 g (ou huile de truffe)", type: "condiment" },
      { nom: "Crème fraîche", quantite: "5 cl", type: "produit laitier" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau salée.",
      "Les passer au moulin à légumes (grille fine).",
      "Incorporer le beurre froid en morceaux en fouettant vivement.",
      "Ajouter le lait chaud progressivement.",
      "Hors du feu, incorporer la truffe râpée ou en julienne.",
      "Rectifier l'assaisonnement et servir immédiatement."
    ],
    conseils: "La truffe ne doit jamais cuire pour préserver son parfum. Accord sublime avec le filet de bœuf ou la volaille de Bresse.",
    variantes: ["Avec des brisures de truffe", "À l'huile de truffe blanche"]
  },

  "puree_topinambours": {
    nom: "Purée de Topinambours",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Topinambours", quantite: "600 g", type: "légume" },
      { nom: "Pommes de terre", quantite: "200 g", type: "légume" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Éplucher topinambours et pommes de terre.",
      "Cuire à l'eau salée 25-30 min.",
      "Passer au moulin à légumes.",
      "Incorporer beurre et crème chaude.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Le topinambour a un goût délicat de noisette. Accompagnement raffiné pour le gibier.",
    variantes: ["Aux noisettes torréfiées", "À l'huile de noisette"]
  },

  "puree_chataignes": {
    nom: "Purée de Châtaignes",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Châtaignes cuites (bocal)", quantite: "500 g", type: "fruit" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Céleri branche", quantite: "1", type: "légume" }
    ],
    etapes: [
      "Réchauffer les châtaignes avec le fond et le céleri.",
      "Retirer le céleri et mixer les châtaignes.",
      "Incorporer le beurre et la crème chaude.",
      "Ajuster la consistance avec un peu de fond si nécessaire."
    ],
    conseils: "La purée de châtaignes est l'accompagnement classique du gibier et de la dinde de fêtes.",
    variantes: ["Au cognac", "Avec des éclats de marrons glacés"]
  },

  "puree_carottes": {
    nom: "Purée de Carottes au Cumin",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Cumin", quantite: "1 c. à café", type: "épice" },
      { nom: "Miel", quantite: "1 c. à café", type: "sucrant" }
    ],
    etapes: [
      "Éplucher et cuire les carottes à l'eau salée.",
      "Mixer avec le beurre et la crème.",
      "Ajouter le cumin et le miel.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "Le cumin relève subtilement la douceur des carottes. Parfait avec l'agneau.",
    variantes: ["À l'orange", "Au gingembre"]
  },

  "puree_patates_douces": {
    nom: "Purée de Patates Douces",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Patates douces", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Cannelle", quantite: "1 pincée", type: "épice" },
      { nom: "Gingembre frais", quantite: "1 cm", type: "épice" }
    ],
    etapes: [
      "Éplucher et cuire les patates douces à la vapeur ou à l'eau.",
      "Écraser au moulin ou mixer.",
      "Incorporer beurre et crème.",
      "Parfumer avec cannelle et gingembre râpé."
    ],
    conseils: "Accompagnement original et savoureux pour le porc et la volaille.",
    variantes: ["À la vanille", "Au sirop d'érable"]
  },

  "puree_maison": {
    nom: "Purée Maison de Chef",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Bintje", quantite: "1 kg", type: "légume" },
      { nom: "Beurre", quantite: "200 g", type: "produit laitier" },
      { nom: "Lait entier chaud", quantite: "25 cl", type: "produit laitier" },
      { nom: "Sel, poivre blanc", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre épluchées dans l'eau salée froide.",
      "Égoutter et passer au moulin à légumes encore chaudes.",
      "Incorporer le beurre froid en morceaux en travaillant vivement.",
      "Ajouter le lait chaud progressivement.",
      "Assaisonner finement avec sel et poivre blanc."
    ],
    conseils: "La purée de Joël Robuchon contient 50% de beurre. Le secret : beurre froid et lait chaud.",
    variantes: ["À l'huile d'olive", "À la ciboulette"]
  },

  "puree_pois_casses": {
    nom: "Purée de Pois Cassés",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pois cassés", quantite: "300 g", type: "légumineuse" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Oignon piqué de clous", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" }
    ],
    etapes: [
      "Rincer les pois cassés.",
      "Cuire avec carotte et oignon piqué 40-45 min.",
      "Retirer l'oignon, mixer avec le beurre et la crème.",
      "Assaisonner généreusement."
    ],
    conseils: "Accompagnement rustique et savoureux pour le petit salé ou le jarret.",
    variantes: ["Aux lardons", "À la menthe"]
  },

  "puree_brocoli": {
    nom: "Purée de Brocoli",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Brocoli", quantite: "600 g", type: "légume" },
      { nom: "Pomme de terre", quantite: "150 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" }
    ],
    etapes: [
      "Cuire brocoli et pomme de terre à la vapeur.",
      "Mixer avec beurre et crème.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Accompagnement léger et coloré pour les viandes blanches.",
    variantes: ["Au parmesan", "À l'huile d'olive"]
  },

  // CONDIMENTS ET SAUCES D'ACCOMPAGNEMENT
  "chutney_figues": {
    nom: "Chutney de Figues",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Figues fraîches ou séchées", quantite: "500 g", type: "fruit" },
      { nom: "Oignon rouge", quantite: "1", type: "aromate" },
      { nom: "Vinaigre balsamique", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Sucre roux", quantite: "100 g", type: "sucrant" },
      { nom: "Gingembre frais", quantite: "2 cm", type: "épice" },
      { nom: "Cannelle", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Couper les figues en morceaux et émincer l'oignon.",
      "Faire revenir l'oignon dans un peu d'huile.",
      "Ajouter les figues, le vinaigre, le sucre et les épices.",
      "Cuire à feu doux 35-40 min en remuant.",
      "Le chutney doit être confit et sirupeux."
    ],
    conseils: "Accompagnement parfait pour le foie gras, le magret et les terrines de gibier.",
    variantes: ["Aux noix", "Au porto"]
  },

  "compote_pommes": {
    nom: "Compote de Pommes à la Cannelle",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes (Golden ou Reinette)", quantite: "6", type: "fruit" },
      { nom: "Sucre", quantite: "60 g", type: "sucrant" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Eau", quantite: "5 cl", type: "liquide" }
    ],
    etapes: [
      "Éplucher, épépiner et couper les pommes en morceaux.",
      "Les mettre dans une casserole avec l'eau, le sucre et la cannelle.",
      "Cuire à feu doux 20 min en remuant.",
      "Écraser à la fourchette (ou mixer pour une texture lisse).",
      "Incorporer le beurre hors du feu."
    ],
    conseils: "Accompagnement traditionnel du boudin noir et du rôti de porc.",
    variantes: ["À la vanille", "Aux raisins secs"]
  },

  "oignons_confits": {
    nom: "Oignons Confits au Vin Rouge",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Oignons rouges", quantite: "500 g", type: "aromate" },
      { nom: "Vin rouge", quantite: "20 cl", type: "alcool" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Vinaigre de vin", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Thym", quantite: "2 branches", type: "herbe" }
    ],
    etapes: [
      "Émincer les oignons en fines rondelles.",
      "Les faire fondre doucement dans le beurre 10 min.",
      "Ajouter le sucre et caraméliser légèrement.",
      "Verser le vin et le vinaigre, ajouter le thym.",
      "Laisser confire à feu doux 30-35 min."
    ],
    conseils: "Sublime avec les viandes rouges grillées et le foie de veau.",
    variantes: ["Au miel", "Au cassis"]
  },

  "echalotes_confites": {
    nom: "Échalotes Confites",
    categorie: "condiment",
    temps_preparation: 10,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Échalotes", quantite: "300 g", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Vinaigre de xérès", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Thym", quantite: "2 branches", type: "herbe" }
    ],
    etapes: [
      "Peler les échalotes en les gardant entières.",
      "Les faire revenir dans le beurre à feu doux.",
      "Ajouter le miel et caraméliser.",
      "Déglacer au vinaigre, ajouter le thym.",
      "Couvrir et confire 30 min à feu très doux."
    ],
    conseils: "Accompagnement délicat pour les viandes rouges et le canard.",
    variantes: ["Au balsamique", "Au jus de viande"]
  },

  "figues_roties": {
    nom: "Figues Rôties au Miel",
    categorie: "garniture",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Figues fraîches", quantite: "8", type: "fruit" },
      { nom: "Miel", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Thym frais", quantite: "quelques brins", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les figues en deux.",
      "Les disposer dans un plat, côté coupé vers le haut.",
      "Parsemer de noisettes de beurre et arroser de miel.",
      "Enfourner 12-15 min. Servir avec du thym effeuillé."
    ],
    conseils: "Accompagnement sucré-salé parfait pour le magret, le foie gras ou le gibier.",
    variantes: ["Au vinaigre balsamique", "Aux amandes effilées"]
  },

  "poires_vin": {
    nom: "Poires au Vin Rouge",
    categorie: "garniture",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Poires Williams", quantite: "4", type: "fruit" },
      { nom: "Vin rouge corsé", quantite: "50 cl", type: "alcool" },
      { nom: "Sucre", quantite: "100 g", type: "sucrant" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" },
      { nom: "Clou de girofle", quantite: "2", type: "épice" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Éplucher les poires en gardant la queue.",
      "Porter le vin à ébullition avec le sucre et les épices.",
      "Pocher les poires 25-30 min à feu doux.",
      "Les retourner régulièrement pour une coloration uniforme.",
      "Servir tièdes ou froides avec le sirop réduit."
    ],
    conseils: "Accompagnement classique du gibier et du canard.",
    variantes: ["Au vin blanc", "Au porto"]
  },

  "poire_pochee": {
    nom: "Poire Pochée au Vin et Épices",
    categorie: "garniture",
    temps_preparation: 10,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Poires Conference", quantite: "4", type: "fruit" },
      { nom: "Vin rouge", quantite: "75 cl", type: "alcool" },
      { nom: "Sucre", quantite: "150 g", type: "sucrant" },
      { nom: "Badiane", quantite: "2 étoiles", type: "épice" },
      { nom: "Poivre noir", quantite: "6 grains", type: "épice" }
    ],
    etapes: [
      "Préparer un sirop avec le vin, le sucre et les épices.",
      "Éplucher les poires et les pocher 30-35 min.",
      "Laisser refroidir dans le sirop.",
      "Servir avec le sirop réduit."
    ],
    conseils: "Le poivre apporte une touche originale. Parfait avec le gibier.",
    variantes: ["À la vanille", "Au gingembre"]
  },

  "pruneaux_vin": {
    nom: "Pruneaux au Vin",
    categorie: "garniture",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pruneaux d'Agen", quantite: "200 g", type: "fruit" },
      { nom: "Vin rouge", quantite: "30 cl", type: "alcool" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Cannelle", quantite: "1/2 bâton", type: "épice" },
      { nom: "Zeste de citron", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Porter le vin à ébullition avec le sucre et les épices.",
      "Ajouter les pruneaux et laisser mijoter 15-20 min.",
      "Servir tiède ou froid."
    ],
    conseils: "Accompagnement traditionnel du lapin et du porc.",
    variantes: ["Au thé", "À l'armagnac"]
  },

  "raisins_poeles": {
    nom: "Raisins Poêlés au Verjus",
    categorie: "garniture",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Raisins (chasselas ou muscat)", quantite: "300 g", type: "fruit" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Verjus ou jus de citron", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Égrapper les raisins.",
      "Les faire sauter dans le beurre mousseux.",
      "Ajouter le sucre et le verjus.",
      "Cuire 2-3 min, les raisins doivent rester entiers."
    ],
    conseils: "Garniture raffinée pour le foie gras poêlé et les volailles rôties.",
    variantes: ["Au cognac", "Aux amandes"]
  },

  // LÉGUMES BRAISÉS ET CONFITS
  "endives_caramelisees": {
    nom: "Endives Caramélisées",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Endives", quantite: "8", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Jus d'orange", quantite: "10 cl", type: "agrume" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Retirer les premières feuilles des endives.",
      "Les faire dorer dans le beurre.",
      "Saupoudrer de sucre et caraméliser légèrement.",
      "Ajouter le jus d'orange, couvrir.",
      "Braiser 40-45 min à feu doux en retournant à mi-cuisson."
    ],
    conseils: "Le sucre et l'orange adoucissent l'amertume des endives.",
    variantes: ["Au miel", "À la bière"]
  },

  "navets_confits": {
    nom: "Navets Confits au Miel",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Navets nouveaux", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Fond de volaille", quantite: "15 cl", type: "bouillon" },
      { nom: "Thym", quantite: "3 branches", type: "herbe" }
    ],
    etapes: [
      "Éplucher et tourner les navets.",
      "Les faire dorer dans le beurre.",
      "Ajouter le miel et caraméliser.",
      "Mouiller avec le fond, ajouter le thym.",
      "Braiser 30 min jusqu'à ce qu'ils soient confits et glacés."
    ],
    conseils: "Les navets nouveaux sont plus doux. Accompagnement délicat pour le canard.",
    variantes: ["À l'orange", "Au vinaigre balsamique"]
  },

  "navets_miel": {
    nom: "Navets au Miel et Thym",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Navets", quantite: "500 g", type: "légume" },
      { nom: "Miel", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Thym frais", quantite: "4 branches", type: "herbe" }
    ],
    etapes: [
      "Éplucher et couper les navets en quartiers.",
      "Les faire revenir dans le beurre.",
      "Ajouter le miel et le thym.",
      "Cuire à couvert 25-30 min à feu doux."
    ],
    conseils: "Le miel sublime la douceur naturelle des navets.",
    variantes: ["Au sirop d'érable", "Au cumin"]
  },

  "topinambours_rotis": {
    nom: "Topinambours Rôtis",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Topinambours", quantite: "500 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Thym", quantite: "4 branches", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Brosser les topinambours (pas besoin de les éplucher).",
      "Les couper en morceaux, mélanger avec l'huile.",
      "Disposer dans un plat avec l'ail en chemise et le thym.",
      "Rôtir 30-35 min jusqu'à coloration dorée."
    ],
    conseils: "Goût de noisette et d'artichaut. Parfait avec le gibier.",
    variantes: ["Au beurre noisette", "Avec des noisettes"]
  },

  "carottes_fondantes": {
    nom: "Carottes Fondantes",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher et couper les carottes en biseaux.",
      "Les mettre dans une sauteuse avec le beurre, le fond et le sucre.",
      "Cuire à découvert jusqu'à évaporation du liquide.",
      "Les carottes doivent être glacées et brillantes.",
      "Parsemer de persil."
    ],
    conseils: "Technique de glaçage classique pour légumes racines.",
    variantes: ["À l'orange", "Au cumin"]
  },

  "carottes_vichy": {
    nom: "Carottes Vichy",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "600 g", type: "légume" },
      { nom: "Eau de Vichy (ou eau)", quantite: "30 cl", type: "liquide" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher et émincer les carottes en rondelles.",
      "Les mettre dans une casserole avec l'eau, le beurre et le sucre.",
      "Cuire à découvert jusqu'à évaporation complète.",
      "Les carottes sont glacées et brillantes.",
      "Parsemer de persil haché."
    ],
    conseils: "Recette classique française, l'eau de Vichy était réputée pour sa douceur.",
    variantes: ["Au miel", "À la menthe"]
  },

  "carottes_nouvelles": {
    nom: "Carottes Nouvelles Glacées",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes nouvelles (fanes)", quantite: "2 bottes", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à café", type: "sucrant" },
      { nom: "Thym citron", quantite: "3 branches", type: "herbe" }
    ],
    etapes: [
      "Gratter les carottes en gardant 2 cm de fane.",
      "Les glacer avec beurre, sucre et un fond d'eau.",
      "Cuire jusqu'à évaporation et glaçage.",
      "Parfumer au thym citron."
    ],
    conseils: "Les carottes nouvelles sont tendres et sucrées. Garniture printanière.",
    variantes: ["À l'estragon", "Au miel"]
  },

  "legumes_glaces": {
    nom: "Légumes Glacés",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "200 g", type: "légume" },
      { nom: "Navets", quantite: "200 g", type: "légume" },
      { nom: "Petits oignons", quantite: "12", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" }
    ],
    etapes: [
      "Tourner les légumes en forme régulière.",
      "Les cuire séparément dans beurre, sucre et fond.",
      "Cuire jusqu'à ce que le liquide s'évapore et forme un glaçage.",
      "Mélanger délicatement pour servir."
    ],
    conseils: "Garniture classique des plats bourgeois. Chaque légume doit être glacé séparément.",
    variantes: ["Avec des champignons tournés", "Au jus de viande"]
  },

  "oignons_glaces": {
    nom: "Petits Oignons Glacés",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits oignons grelots", quantite: "300 g", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Fond de volaille", quantite: "15 cl", type: "bouillon" }
    ],
    etapes: [
      "Peler les petits oignons.",
      "Les disposer en une seule couche dans une sauteuse.",
      "Ajouter beurre, sucre et fond.",
      "Cuire à découvert jusqu'à évaporation et glaçage.",
      "Les oignons doivent être dorés et brillants."
    ],
    conseils: "Garniture classique du bœuf bourguignon et du coq au vin.",
    variantes: ["À brun (caramélisés)", "À blanc (plus doux)"]
  },

  "petits_oignons": {
    nom: "Petits Oignons à la Crème",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits oignons", quantite: "400 g", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Peler les oignons.",
      "Les faire dorer dans le beurre.",
      "Ajouter la crème et la muscade.",
      "Braiser 25 min à feu doux."
    ],
    conseils: "Accompagnement doux et onctueux pour les viandes blanches.",
    variantes: ["Au thym", "Au vin blanc"]
  },

  // LÉGUMINEUSES
  "lentilles": {
    nom: "Lentilles",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Lentilles vertes", quantite: "250 g", type: "légumineuse" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Oignon piqué", quantite: "1", type: "aromate" },
      { nom: "Bouquet garni", quantite: "1", type: "herbes" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Rincer les lentilles.",
      "Les cuire avec carotte, oignon et bouquet garni.",
      "Cuire 25-30 min à frémissement.",
      "Égoutter, retirer les aromates.",
      "Assaisonner et ajouter le beurre."
    ],
    conseils: "Ne pas saler l'eau de cuisson pour éviter que les lentilles durcissent.",
    variantes: ["Au vinaigre", "Aux lardons"]
  },

  "lentilles_puy": {
    nom: "Lentilles Vertes du Puy",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Lentilles du Puy AOP", quantite: "250 g", type: "légumineuse" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Laurier", quantite: "1 feuille", type: "herbe" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Vinaigre de xérès", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer les lentilles.",
      "Les cuire 20-25 min avec les aromates.",
      "Égoutter et retirer l'oignon et le laurier.",
      "Couper la carotte en dés et mélanger.",
      "Assaisonner avec beurre et vinaigre."
    ],
    conseils: "Les lentilles du Puy gardent leur forme et leur texture. Accompagnement noble du petit salé ou du saucisson.",
    variantes: ["En salade tiède", "Au foie gras"]
  },

  "haricots_blancs": {
    nom: "Haricots Blancs à la Tomate",
    categorie: "légumineuse",
    temps_preparation: 15,
    temps_cuisson: 90,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Haricots blancs secs (lingots)", quantite: "300 g", type: "légumineuse" },
      { nom: "Tomates concassées", quantite: "400 g", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Thym, laurier", quantite: "1 bouquet", type: "herbes" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Faire tremper les haricots une nuit.",
      "Les cuire 1h dans l'eau non salée avec le bouquet garni.",
      "Faire revenir oignon et ail dans l'huile.",
      "Ajouter les tomates, cuire 15 min.",
      "Incorporer les haricots égouttés, mijoter 20 min."
    ],
    conseils: "Accompagnement méditerranéen classique pour l'agneau.",
    variantes: ["Au chorizo", "À la provençale"]
  },

  "haricots_noirs": {
    nom: "Haricots Noirs",
    categorie: "légumineuse",
    temps_preparation: 15,
    temps_cuisson: 90,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Haricots noirs secs", quantite: "300 g", type: "légumineuse" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Cumin", quantite: "1 c. à café", type: "épice" },
      { nom: "Piment", quantite: "1", type: "épice" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Tremper les haricots une nuit.",
      "Les cuire 1h30 avec l'oignon et l'ail.",
      "Écraser légèrement une partie pour épaissir.",
      "Assaisonner avec cumin et piment.",
      "Arroser d'huile d'olive."
    ],
    conseils: "Base de la cuisine tex-mex et brésilienne. Parfait avec le porc.",
    variantes: ["Feijoada", "Refried beans"]
  },

  "haricots_tomate": {
    nom: "Haricots à la Tomate",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots blancs (conserve)", quantite: "500 g", type: "légumineuse" },
      { nom: "Tomates", quantite: "400 g", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Herbes de Provence", quantite: "1 c. à café", type: "herbes" }
    ],
    etapes: [
      "Faire revenir l'oignon émincé.",
      "Ajouter l'ail et les tomates concassées.",
      "Incorporer les haricots égouttés.",
      "Mijoter 20 min avec les herbes."
    ],
    conseils: "Version rapide avec des haricots en conserve.",
    variantes: ["Au basilic", "Au chorizo"]
  },

  "feves_lard": {
    nom: "Fèves au Lard",
    categorie: "légumineuse",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fèves fraîches ou surgelées", quantite: "500 g (écossées)", type: "légumineuse" },
      { nom: "Lardons", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon nouveau", quantite: "4", type: "aromate" },
      { nom: "Sarriette", quantite: "2 branches", type: "herbe" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Blanchir les fèves 3 min, les rafraîchir et les monder.",
      "Faire rissoler les lardons.",
      "Ajouter les oignons émincés et les fèves.",
      "Sauter 5-6 min avec la sarriette.",
      "Terminer avec une noisette de beurre."
    ],
    conseils: "La sarriette est l'herbe traditionnelle des fèves. Accompagnement printanier pour l'agneau.",
    variantes: ["À la crème", "Aux herbes fraîches"]
  },

  "petits_pois": {
    nom: "Petits Pois",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits pois frais ou surgelés", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à café", type: "sucrant" },
      { nom: "Menthe", quantite: "quelques feuilles", type: "herbe" }
    ],
    etapes: [
      "Cuire les petits pois à l'eau salée.",
      "Égoutter et mélanger avec le beurre.",
      "Ajouter une pincée de sucre et la menthe."
    ],
    conseils: "Simple et classique. Le sucre rehausse la douceur naturelle.",
    variantes: ["À la française", "Au lard"]
  },

  "petits_pois_lardons": {
    nom: "Petits Pois aux Lardons",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits pois", quantite: "400 g", type: "légume" },
      { nom: "Lardons", quantite: "100 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire rissoler les lardons.",
      "Ajouter l'oignon émincé.",
      "Incorporer les petits pois cuits.",
      "Mélanger avec le beurre."
    ],
    conseils: "Les lardons apportent du goût aux petits pois.",
    variantes: ["À la crème", "À la menthe"]
  },

  // GRATINS
  "gratin_courge": {
    nom: "Gratin de Courge",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Courge butternut", quantite: "1 kg", type: "légume" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Gruyère râpé", quantite: "100 g", type: "fromage" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sauge", quantite: "6 feuilles", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Éplucher et couper la courge en tranches.",
      "Précuire à la vapeur 10 min.",
      "Disposer dans un plat avec la sauge.",
      "Verser la crème, parsemer de fromage.",
      "Gratiner 25-30 min."
    ],
    conseils: "La sauge sublime la courge. Parfait en automne avec le porc.",
    variantes: ["Au parmesan", "Aux noisettes"]
  },

  "gratin_potimarron": {
    nom: "Gratin de Potimarron",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Potimarron", quantite: "1 (environ 1 kg)", type: "légume" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Comté râpé", quantite: "100 g", type: "fromage" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Thym", quantite: "2 branches", type: "herbe" }
    ],
    etapes: [
      "Couper le potimarron en tranches (sans éplucher).",
      "Le précuire au four 15 min.",
      "Disposer dans un plat avec l'ail émincé.",
      "Verser la crème, parsemer de fromage.",
      "Gratiner 20 min."
    ],
    conseils: "La peau du potimarron est comestible une fois cuite.",
    variantes: ["Aux châtaignes", "À la sauge"]
  },

  "gratin_courgettes": {
    nom: "Gratin de Courgettes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Courgettes", quantite: "4", type: "légume" },
      { nom: "Œufs", quantite: "2", type: "œuf" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Gruyère râpé", quantite: "80 g", type: "fromage" },
      { nom: "Basilic", quantite: "10 feuilles", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Émincer les courgettes et les faire revenir.",
      "Mélanger œufs, crème et fromage.",
      "Disposer les courgettes dans un plat.",
      "Verser l'appareil et gratiner 25 min."
    ],
    conseils: "Accompagnement léger pour les viandes blanches.",
    variantes: ["À la feta", "À la menthe"]
  },

  "gratin_legumes": {
    nom: "Gratin de Légumes",
    categorie: "légume",
    temps_preparation: 25,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Courgettes, aubergines, tomates", quantite: "200 g chaque", type: "légume" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Herbes de Provence", quantite: "1 c. à soupe", type: "herbes" },
      { nom: "Chapelure", quantite: "4 c. à soupe", type: "féculent" }
    ],
    etapes: [
      "Trancher les légumes finement.",
      "Les disposer en rosace dans un plat huilé.",
      "Parsemer d'ail, d'herbes et de chapelure.",
      "Arroser d'huile et enfourner 35-40 min à 180°C."
    ],
    conseils: "Version gratinée de la ratatouille.",
    variantes: ["Au parmesan", "À la mozzarella"]
  },

  "gratin_fin": {
    nom: "Gratin Fin de Légumes",
    categorie: "légume",
    temps_preparation: 30,
    temps_cuisson: 35,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Carottes, poireaux, céleri", quantite: "150 g chaque", type: "légume" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Parmesan", quantite: "50 g", type: "fromage" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Tailler les légumes en brunoise fine.",
      "Les braiser doucement dans le beurre.",
      "Disposer dans des ramequins.",
      "Napper de crème, parsemer de parmesan.",
      "Gratiner 15 min à 200°C."
    ],
    conseils: "Garniture raffinée pour les pièces nobles.",
    variantes: ["Aux herbes", "À la truffe"]
  },

  "tian_legumes": {
    nom: "Tian de Légumes",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Courgettes", quantite: "2", type: "légume" },
      { nom: "Tomates", quantite: "4", type: "légume" },
      { nom: "Aubergine", quantite: "1", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Huile d'olive", quantite: "8 c. à soupe", type: "matière grasse" },
      { nom: "Thym", quantite: "4 branches", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Trancher tous les légumes finement.",
      "Disposer les oignons émincés au fond d'un plat.",
      "Alterner les légumes en les faisant chevaucher.",
      "Arroser d'huile, parsemer de thym.",
      "Cuire 45-50 min."
    ],
    conseils: "Plat provençal classique qui se sert tiède ou froid.",
    variantes: ["Aux herbes de Provence", "Au basilic"]
  },

  // LÉGUMES DIVERS
  "legumes_rotis": {
    nom: "Légumes Rôtis",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés (carottes, pommes de terre, oignon)", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Herbes (romarin, thym)", quantite: "quelques branches", type: "herbe" },
      { nom: "Gros sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les légumes en morceaux.",
      "Mélanger avec l'huile et les herbes.",
      "Disposer dans un plat et enfourner 35-40 min.",
      "Remuer à mi-cuisson."
    ],
    conseils: "Les légumes doivent être dorés et caramélisés.",
    variantes: ["Au miel", "Au vinaigre balsamique"]
  },

  "legumes_grilles": {
    nom: "Légumes Grillés",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Courgettes, poivrons, aubergines", quantite: "200 g chaque", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Herbes fraîches", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Couper les légumes en tranches.",
      "Les badigeonner d'huile.",
      "Les griller au barbecue ou à la plancha.",
      "Assaisonner avec ail, herbes et huile."
    ],
    conseils: "Parfait pour accompagner les grillades.",
    variantes: ["Marinés au vinaigre balsamique", "Au pesto"]
  },

  "legumes_vapeur": {
    nom: "Légumes Vapeur",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés (brocoli, haricots, carottes)", quantite: "600 g", type: "légume" },
      { nom: "Beurre ou huile d'olive", quantite: "30 g", type: "matière grasse" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" },
      { nom: "Herbes fraîches", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Préparer les légumes en morceaux.",
      "Les cuire à la vapeur 10-15 min selon leur taille.",
      "Assaisonner avec beurre et fleur de sel.",
      "Parsemer d'herbes."
    ],
    conseils: "Cuisson santé qui préserve les saveurs et les vitamines.",
    variantes: ["Sauce hollandaise", "Vinaigrette aux herbes"]
  },

  "legumes_sautes": {
    nom: "Légumes Sautés",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés", quantite: "600 g", type: "légume" },
      { nom: "Huile", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Sauce soja ou assaisonnement", quantite: "2 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Couper les légumes en morceaux uniformes.",
      "Chauffer l'huile à feu vif.",
      "Sauter les légumes par lot.",
      "Ajouter l'ail et assaisonner."
    ],
    conseils: "Le wok doit être très chaud pour un bon sauté.",
    variantes: ["À l'asiatique", "À la provençale"]
  },

  "wok_legumes": {
    nom: "Wok de Légumes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes croquants (poivrons, pois mange-tout, champignons)", quantite: "500 g", type: "légume" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Sauce soja", quantite: "3 c. à soupe", type: "sauce" },
      { nom: "Gingembre", quantite: "2 cm", type: "épice" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Préparer tous les légumes en julienne ou en morceaux.",
      "Chauffer le wok à feu vif avec l'huile.",
      "Sauter gingembre et ail 30 secondes.",
      "Ajouter les légumes par ordre de dureté.",
      "Assaisonner à la sauce soja."
    ],
    conseils: "Les légumes doivent rester croquants.",
    variantes: ["À l'huile d'huître", "Au curry"]
  },

  "legumes_braises": {
    nom: "Légumes Braisés",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes (carottes, navets, céleri)", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "25 cl", type: "bouillon" },
      { nom: "Thym, laurier", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Couper les légumes en morceaux.",
      "Les faire revenir dans le beurre.",
      "Mouiller avec le fond, ajouter les herbes.",
      "Braiser à couvert 40 min à feu doux."
    ],
    conseils: "Les légumes s'imprègnent du fond de cuisson.",
    variantes: ["Au vin blanc", "Au jus de viande"]
  },

  "legumes_confits": {
    nom: "Légumes Confits à l'Huile d'Olive",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates, poivrons, oignons", quantite: "150 g chaque", type: "légume" },
      { nom: "Huile d'olive", quantite: "10 cl", type: "matière grasse" },
      { nom: "Ail", quantite: "6 gousses", type: "aromate" },
      { nom: "Thym, romarin", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 140°C.",
      "Disposer les légumes dans un plat.",
      "Ajouter l'ail en chemise et les herbes.",
      "Arroser généreusement d'huile.",
      "Confire 1h au four."
    ],
    conseils: "Cuisson lente qui concentre les saveurs.",
    variantes: ["À la fleur de sel", "Au piment d'Espelette"]
  },

  "tomates_confites": {
    nom: "Tomates Confites",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 180,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomates Roma", quantite: "1 kg", type: "légume" },
      { nom: "Huile d'olive", quantite: "10 cl", type: "matière grasse" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Thym", quantite: "6 branches", type: "herbe" },
      { nom: "Sucre", quantite: "1 c. à café", type: "sucrant" }
    ],
    etapes: [
      "Préchauffer le four à 100°C.",
      "Couper les tomates en deux, les épépiner.",
      "Les disposer dans un plat, côté coupé vers le haut.",
      "Arroser d'huile, parsemer d'ail, thym et sucre.",
      "Confire 3h au four."
    ],
    conseils: "Les tomates confites se conservent plusieurs jours dans l'huile.",
    variantes: ["Au basilic", "À l'origan"]
  },

  "legumes_verts": {
    nom: "Légumes Verts à la Minute",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots verts, brocoli, épinards", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Blanchir les légumes à l'eau bouillante salée.",
      "Les rafraîchir à l'eau glacée.",
      "Les sauter rapidement dans le beurre.",
      "Assaisonner à la fleur de sel."
    ],
    conseils: "Les légumes doivent rester croquants et d'un beau vert.",
    variantes: ["À l'ail", "Aux amandes effilées"]
  },

  "legumes_saison": {
    nom: "Légumes de Saison",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes de saison variés", quantite: "600 g", type: "légume" },
      { nom: "Beurre ou huile d'olive", quantite: "40 g", type: "matière grasse" },
      { nom: "Herbes fraîches", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Choisir des légumes de saison au marché.",
      "Les préparer selon leur nature (cuire, sauter, griller).",
      "Assaisonner simplement pour mettre en valeur leur goût."
    ],
    conseils: "Respecter la saisonnalité pour des légumes savoureux.",
    variantes: ["Selon les saisons"]
  },

  "legumes_primeurs": {
    nom: "Légumes Primeurs",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits légumes nouveaux (carottes, navets, radis)", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Herbes (cerfeuil, ciboulette)", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Garder les légumes entiers si petits.",
      "Les cuire à la vapeur ou à l'eau.",
      "Les glacer légèrement au beurre.",
      "Parsemer d'herbes fraîches."
    ],
    conseils: "Les légumes primeurs sont tendres et délicats.",
    variantes: ["À la menthe", "Au beurre d'herbes"]
  },

  "legumes_printaniers": {
    nom: "Légumes Printaniers",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Petits pois, fèves, asperges", quantite: "150 g chaque", type: "légume" },
      { nom: "Carottes nouvelles", quantite: "100 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Herbes (cerfeuil, estragon)", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Écosser les petits pois et monder les fèves.",
      "Cuire chaque légume séparément.",
      "Les mélanger avec le beurre fondu.",
      "Parsemer d'herbes fraîches."
    ],
    conseils: "Garniture raffinée pour les viandes blanches et le veau.",
    variantes: ["À la crème", "Au jus de viande"]
  },

  "legumes_croquants": {
    nom: "Légumes Croquants",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés (haricots, brocoli, pois mange-tout)", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Blanchir les légumes 2-3 min à l'eau bouillante.",
      "Les refroidir immédiatement à l'eau glacée.",
      "Les sauter rapidement au beurre.",
      "Assaisonner et servir aussitôt."
    ],
    conseils: "La cuisson très courte préserve le croquant.",
    variantes: ["À l'ail", "Aux herbes"]
  },

  "legumes_fins": {
    nom: "Légumes Fins",
    categorie: "légume",
    temps_preparation: 25,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Carottes, navets, courgettes", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Cerfeuil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Tourner les légumes en forme régulière.",
      "Les glacer séparément au beurre et fond.",
      "Mélanger délicatement.",
      "Parsemer de cerfeuil."
    ],
    conseils: "Garniture de restaurant pour viandes nobles.",
    variantes: ["Avec des perles de légumes", "À la truffe"]
  },

  "petits_legumes": {
    nom: "Petits Légumes Glacés",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Mini carottes, navets, oignons grelots", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Fond de volaille", quantite: "15 cl", type: "bouillon" }
    ],
    etapes: [
      "Parer les légumes en gardant leur forme.",
      "Les glacer séparément au beurre, sucre et fond.",
      "Le liquide doit s'évaporer en glaçant les légumes.",
      "Mélanger et servir."
    ],
    conseils: "Garniture classique française.",
    variantes: ["Avec des champignons", "Au jus de rôti"]
  },

  "legumes_racines": {
    nom: "Légumes Racines au Four",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Carottes, panais, betteraves, navets", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Thym, romarin", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les légumes en morceaux.",
      "Mélanger avec huile, miel et herbes.",
      "Rôtir 40-45 min en remuant."
    ],
    conseils: "Accompagnement parfait pour le gibier en automne-hiver.",
    variantes: ["Au sirop d'érable", "Au vinaigre balsamique"]
  },

  // ACCOMPAGNEMENTS SPÉCIAUX
  "marrons": {
    nom: "Marrons",
    categorie: "garniture",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Marrons cuits (bocal ou sous vide)", quantite: "400 g", type: "fruit" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Égoutter les marrons.",
      "Les réchauffer dans le beurre.",
      "Assaisonner et servir."
    ],
    conseils: "Accompagnement classique de la dinde et du gibier.",
    variantes: ["Glacés", "En purée"]
  },

  "os_moelle": {
    nom: "Os à Moelle Gratiné",
    categorie: "garniture",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Os à moelle", quantite: "4", type: "viande" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" },
      { nom: "Pain grillé", quantite: "4 tranches", type: "pain" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Disposer les os debout dans un plat.",
      "Enfourner 12-15 min.",
      "Servir avec la fleur de sel et le pain grillé."
    ],
    conseils: "Accompagnement riche et savoureux pour l'entrecôte ou le pot-au-feu.",
    variantes: ["Sur canapé", "Avec une persillade"]
  },

  "truffe_lamelle": {
    nom: "Lamelles de Truffe",
    categorie: "garniture",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Truffe noire ou blanche", quantite: "20-30 g", type: "condiment" },
      { nom: "Fleur de sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Brosser délicatement la truffe.",
      "La trancher finement à la mandoline.",
      "Disposer sur le plat au dernier moment.",
      "Assaisonner d'une pincée de fleur de sel."
    ],
    conseils: "La truffe ne doit jamais cuire pour préserver son parfum. À ajouter juste avant de servir.",
    variantes: ["Truffe râpée", "Copeaux de truffe"]
  },

  "gremolata": {
    nom: "Gremolata",
    categorie: "condiment",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Persil plat", quantite: "1 bouquet", type: "herbe" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Zeste de citron", quantite: "2", type: "agrume" }
    ],
    etapes: [
      "Hacher finement le persil.",
      "Émincer l'ail très finement.",
      "Râper les zestes de citron.",
      "Mélanger le tout."
    ],
    conseils: "Condiment traditionnel de l'osso-buco. Apporte fraîcheur et peps aux plats mijotés.",
    variantes: ["À l'orange", "À la menthe"]
  },

  // CONDIMENTS ET PICKLES
  "cornichons": {
    nom: "Cornichons au Vinaigre",
    categorie: "condiment",
    temps_preparation: 30,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 12,
    ingredients: [
      { nom: "Petits cornichons", quantite: "1 kg", type: "légume" },
      { nom: "Vinaigre blanc", quantite: "1 L", type: "assaisonnement" },
      { nom: "Sel", quantite: "60 g", type: "assaisonnement" },
      { nom: "Estragon, petits oignons", quantite: "à goût", type: "aromate" }
    ],
    etapes: [
      "Frotter les cornichons avec du gros sel.",
      "Les laisser dégorger quelques heures.",
      "Rincer et sécher.",
      "Les mettre en bocaux avec estragon et oignons.",
      "Couvrir de vinaigre bouillant."
    ],
    conseils: "Accompagnement indispensable des terrines, pâtés et pot-au-feu.",
    variantes: ["À l'aneth", "Aux épices"]
  },

  "pickles": {
    nom: "Pickles de Légumes",
    categorie: "condiment",
    temps_preparation: 20,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Légumes variés (carottes, chou-fleur, oignons)", quantite: "500 g", type: "légume" },
      { nom: "Vinaigre de cidre", quantite: "50 cl", type: "assaisonnement" },
      { nom: "Sucre", quantite: "100 g", type: "sucrant" },
      { nom: "Sel", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Épices (moutarde, coriandre)", quantite: "à goût", type: "épice" }
    ],
    etapes: [
      "Couper les légumes en petits morceaux.",
      "Porter à ébullition vinaigre, sucre, sel et épices.",
      "Verser sur les légumes dans des bocaux.",
      "Laisser mariner au moins 24h."
    ],
    conseils: "Les pickles apportent acidité et croquant aux viandes grillées.",
    variantes: ["À l'asiatique", "À la moutarde"]
  },

  "pickles_legumes": {
    nom: "Pickles Aigres-Doux",
    categorie: "condiment",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Concombre, radis, oignon rouge", quantite: "400 g", type: "légume" },
      { nom: "Vinaigre de riz", quantite: "30 cl", type: "assaisonnement" },
      { nom: "Sucre", quantite: "80 g", type: "sucrant" },
      { nom: "Gingembre", quantite: "2 cm", type: "épice" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Trancher finement les légumes.",
      "Préparer le vinaigre avec sucre, sel et gingembre.",
      "Verser sur les légumes.",
      "Réfrigérer au moins 2h."
    ],
    conseils: "Version rapide façon asiatique.",
    variantes: ["Au piment", "À la coriandre"]
  },

  "kimchi": {
    nom: "Kimchi",
    categorie: "condiment",
    temps_preparation: 45,
    temps_cuisson: 0,
    difficulte: "moyen",
    portions: 10,
    ingredients: [
      { nom: "Chou chinois", quantite: "1", type: "légume" },
      { nom: "Gros sel", quantite: "100 g", type: "assaisonnement" },
      { nom: "Piment coréen (gochugaru)", quantite: "50 g", type: "épice" },
      { nom: "Ail", quantite: "8 gousses", type: "aromate" },
      { nom: "Gingembre", quantite: "3 cm", type: "épice" },
      { nom: "Sauce de poisson", quantite: "3 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Couper le chou et le saler pendant 2h.",
      "Rincer et essorer.",
      "Préparer la pâte avec piment, ail, gingembre et sauce poisson.",
      "Enrober le chou de pâte.",
      "Laisser fermenter 3-5 jours à température ambiante."
    ],
    conseils: "Condiment coréen fermenté, accompagne bien le porc et le bœuf.",
    variantes: ["Au radis", "Plus ou moins pimenté"]
  },

  // PAINS ET ACCOMPAGNEMENTS SPÉCIAUX
  "pain_campagne": {
    nom: "Tartines de Pain de Campagne",
    categorie: "accompagnement",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de campagne", quantite: "4 tranches", type: "pain" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Griller légèrement le pain.",
      "Servir avec le beurre."
    ],
    conseils: "Accompagnement des terrines et du fromage.",
    variantes: ["Toasté", "Frotté à l'ail"]
  },

  "pain_grille": {
    nom: "Pain Grillé",
    categorie: "accompagnement",
    temps_preparation: 2,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain", quantite: "8 tranches", type: "pain" }
    ],
    etapes: [
      "Griller le pain au toaster ou au four."
    ],
    conseils: "Pour accompagner pâtés, terrines et foie gras.",
    variantes: ["Pain brioché", "Pain aux noix"]
  },

  "brioche": {
    nom: "Brioche Toastée",
    categorie: "accompagnement",
    temps_preparation: 2,
    temps_cuisson: 2,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Brioche", quantite: "4 tranches", type: "pain" }
    ],
    etapes: [
      "Griller légèrement les tranches de brioche."
    ],
    conseils: "Accompagnement traditionnel du foie gras.",
    variantes: ["Brioche toastée au beurre"]
  },

  "croutons": {
    nom: "Croûtons",
    categorie: "accompagnement",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain rassis", quantite: "200 g", type: "pain" },
      { nom: "Beurre clarifié ou huile", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" }
    ],
    etapes: [
      "Couper le pain en cubes.",
      "Les faire dorer dans le beurre avec l'ail.",
      "Égoutter sur du papier absorbant."
    ],
    conseils: "Pour les salades et les soupes.",
    variantes: ["Aux herbes", "Au parmesan"]
  },

  "croutons_frits": {
    nom: "Croûtons Frits à l'Ail",
    categorie: "accompagnement",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de mie ou baguette", quantite: "150 g", type: "pain" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Huile", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Couper le pain en petits cubes.",
      "Chauffer beurre et huile avec l'ail.",
      "Faire dorer les croûtons uniformément.",
      "Égoutter sur papier absorbant."
    ],
    conseils: "Les croûtons doivent être dorés et croustillants.",
    variantes: ["Aux herbes de Provence", "Au cumin"]
  },

  "naan": {
    nom: "Naan",
    categorie: "pain",
    temps_preparation: 90,
    temps_cuisson: 5,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Farine", quantite: "300 g", type: "féculent" },
      { nom: "Yaourt", quantite: "150 g", type: "produit laitier" },
      { nom: "Levure", quantite: "1 c. à café", type: "levure" },
      { nom: "Beurre fondu", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Mélanger farine, levure et sel.",
      "Ajouter yaourt et eau tiède, pétrir.",
      "Laisser lever 1h.",
      "Diviser en boules, étaler en ovales.",
      "Cuire à la poêle bien chaude 2 min par côté.",
      "Badigeonner de beurre."
    ],
    conseils: "Pain indien parfait pour accompagner les currys.",
    variantes: ["Au fromage", "À l'ail"]
  },

  "bao_buns": {
    nom: "Bao Buns",
    categorie: "pain",
    temps_preparation: 120,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Farine", quantite: "300 g", type: "féculent" },
      { nom: "Levure", quantite: "1 c. à café", type: "levure" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Huile", quantite: "1 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Mélanger les ingrédients secs.",
      "Ajouter l'eau tiède et pétrir.",
      "Laisser lever 1h.",
      "Former des boules, les aplatir.",
      "Plier en deux sur un carré de papier sulfurisé.",
      "Cuire à la vapeur 10-12 min."
    ],
    conseils: "Petits pains vapeur pour le porc effiloché ou le canard.",
    variantes: ["Fourrés", "Au charbon végétal"]
  },

  "tortillas": {
    nom: "Tortillas de Maïs",
    categorie: "pain",
    temps_preparation: 30,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Farine de maïs (masa harina)", quantite: "200 g", type: "féculent" },
      { nom: "Eau tiède", quantite: "25 cl", type: "liquide" },
      { nom: "Sel", quantite: "1/2 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la farine et le sel.",
      "Ajouter l'eau et pétrir.",
      "Former des boules et les aplatir finement.",
      "Cuire à sec dans une poêle chaude 1 min par côté."
    ],
    conseils: "Base des tacos et burritos.",
    variantes: ["Tortillas de blé", "Tortillas aux herbes"]
  },

  // SAUCES ET DIPS
  "houmous": {
    nom: "Houmous",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pois chiches cuits", quantite: "400 g", type: "légumineuse" },
      { nom: "Tahini", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Jus de citron", quantite: "3 c. à soupe", type: "agrume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Mixer les pois chiches avec le tahini et le citron.",
      "Ajouter l'ail et mixer jusqu'à onctuosité.",
      "Incorporer l'huile d'olive.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "Servir avec du pain pita et des crudités.",
    variantes: ["Au cumin", "À la betterave"]
  },

  "guacamole": {
    nom: "Guacamole",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Avocats mûrs", quantite: "3", type: "légume" },
      { nom: "Oignon rouge", quantite: "1/2", type: "aromate" },
      { nom: "Tomate", quantite: "1", type: "légume" },
      { nom: "Coriandre", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Jus de citron vert", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Piment", quantite: "à goût", type: "épice" }
    ],
    etapes: [
      "Écraser les avocats à la fourchette.",
      "Ajouter l'oignon et la tomate en dés.",
      "Incorporer coriandre, citron et piment.",
      "Servir immédiatement."
    ],
    conseils: "Accompagnement tex-mex pour les grillades.",
    variantes: ["À la mangue", "Au jalapeño"]
  },

  "sauce_ranch": {
    nom: "Sauce Ranch",
    categorie: "sauce",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Mayonnaise", quantite: "15 cl", type: "sauce" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Aneth", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Ail en poudre", quantite: "1/2 c. à café", type: "aromate" }
    ],
    etapes: [
      "Mélanger mayonnaise et crème.",
      "Ajouter les herbes et l'ail.",
      "Assaisonner et réfrigérer."
    ],
    conseils: "Sauce américaine pour crudités et ailes de poulet.",
    variantes: ["Au buttermilk", "Épicée"]
  },

  "blue_cheese_dip": {
    nom: "Blue Cheese Dip",
    categorie: "sauce",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Bleu (roquefort ou gorgonzola)", quantite: "100 g", type: "fromage" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Mayonnaise", quantite: "5 cl", type: "sauce" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" }
    ],
    etapes: [
      "Écraser le fromage à la fourchette.",
      "Mélanger avec crème et mayonnaise.",
      "Ajouter le citron et assaisonner."
    ],
    conseils: "Accompagnement des Buffalo wings.",
    variantes: ["Au yaourt grec", "Plus ou moins crémeux"]
  },

  // ACCOMPAGNEMENTS INTERNATIONAUX
  "baked_beans": {
    nom: "Baked Beans",
    categorie: "légumineuse",
    temps_preparation: 15,
    temps_cuisson: 180,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Haricots blancs secs", quantite: "400 g", type: "légumineuse" },
      { nom: "Coulis de tomate", quantite: "40 cl", type: "sauce" },
      { nom: "Mélasse ou cassonade", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Moutarde", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Lard fumé", quantite: "150 g", type: "charcuterie" }
    ],
    etapes: [
      "Tremper et cuire les haricots.",
      "Mélanger avec les autres ingrédients.",
      "Cuire au four à 150°C pendant 2-3h.",
      "Remuer de temps en temps."
    ],
    conseils: "Accompagnement anglo-saxon classique du breakfast et du BBQ.",
    variantes: ["Végétariens", "Épicés"]
  },

  "cornbread": {
    nom: "Cornbread",
    categorie: "pain",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Farine de maïs", quantite: "150 g", type: "féculent" },
      { nom: "Farine de blé", quantite: "100 g", type: "féculent" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Lait", quantite: "25 cl", type: "produit laitier" },
      { nom: "Œuf", quantite: "1", type: "œuf" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Mélanger les ingrédients secs.",
      "Ajouter les ingrédients humides.",
      "Verser dans un moule beurré.",
      "Cuire 20-25 min."
    ],
    conseils: "Pain de maïs américain pour accompagner le chili et le BBQ.",
    variantes: ["Au jalapeño", "Au fromage"]
  },

  "patatas_bravas": {
    nom: "Patatas Bravas",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "600 g", type: "légume" },
      { nom: "Huile de friture", quantite: "pour la friture", type: "matière grasse" },
      { nom: "Sauce tomate épicée", quantite: "20 cl", type: "sauce" },
      { nom: "Piment", quantite: "à goût", type: "épice" },
      { nom: "Aïoli", quantite: "10 cl", type: "sauce" }
    ],
    etapes: [
      "Couper les pommes de terre en gros cubes.",
      "Les frire jusqu'à coloration dorée.",
      "Préparer une sauce tomate relevée de piment.",
      "Servir les pommes de terre nappées de sauce et d'aïoli."
    ],
    conseils: "Tapas espagnol classique.",
    variantes: ["Sauce brava authentique", "Au paprika fumé"]
  },

  "pan_tomate": {
    nom: "Pan con Tomate",
    categorie: "accompagnement",
    temps_preparation: 10,
    temps_cuisson: 2,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de campagne", quantite: "4 tranches", type: "pain" },
      { nom: "Tomates mûres", quantite: "2", type: "légume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Griller le pain.",
      "Le frotter avec l'ail.",
      "Frotter avec la tomate coupée.",
      "Arroser d'huile d'olive et saler."
    ],
    conseils: "Tradition catalane, servir avec le jambon ibérique.",
    variantes: ["Avec jambon serrano", "Avec anchois"]
  },

  "oignons_rings": {
    nom: "Onion Rings",
    categorie: "accompagnement",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Gros oignons", quantite: "2", type: "aromate" },
      { nom: "Farine", quantite: "150 g", type: "féculent" },
      { nom: "Bière", quantite: "20 cl", type: "alcool" },
      { nom: "Huile de friture", quantite: "pour la friture", type: "matière grasse" }
    ],
    etapes: [
      "Couper les oignons en rondelles épaisses.",
      "Préparer une pâte avec farine et bière.",
      "Tremper les rondelles dans la pâte.",
      "Frire à 180°C jusqu'à coloration.",
      "Égoutter et saler."
    ],
    conseils: "Accompagnement américain des burgers et steaks.",
    variantes: ["Panés", "Épicés"]
  },

  "frites_patate_douce": {
    nom: "Frites de Patate Douce",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Patates douces", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Paprika fumé", quantite: "1 c. à café", type: "épice" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 220°C.",
      "Couper les patates douces en bâtonnets.",
      "Mélanger avec l'huile et le paprika.",
      "Disposer sur une plaque et enfourner 20-25 min.",
      "Saler à la sortie du four."
    ],
    conseils: "Alternative plus sucrée aux frites classiques.",
    variantes: ["Frites au four", "Frites croustillantes"]
  },

  "chips_couenne": {
    nom: "Chips de Couenne",
    categorie: "accompagnement",
    temps_preparation: 10,
    temps_cuisson: 60,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Couenne de porc", quantite: "200 g", type: "viande" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Gratter la couenne pour retirer le gras.",
      "La couper en morceaux.",
      "Cuire au four à 180°C jusqu'à ce qu'elle soit soufflée.",
      "Ou frire dans l'huile chaude.",
      "Saler et servir croustillant."
    ],
    conseils: "Chicharrones, snack croustillant pour accompagner les plats mexicains.",
    variantes: ["Au piment", "Au citron vert"]
  },

  "mais_grille": {
    nom: "Maïs Grillé",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épis de maïs", quantite: "4", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Piment d'Espelette", quantite: "1 c. à café", type: "épice" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Précuire les épis à l'eau 5 min.",
      "Les griller au barbecue ou au four.",
      "Mélanger beurre fondu et piment.",
      "Badigeonner les épis de beurre épicé."
    ],
    conseils: "Accompagnement estival des grillades.",
    variantes: ["À la mexicaine (mayonnaise et fromage)", "Au beurre aux herbes"]
  },

  "pimientos_padron": {
    nom: "Pimientos de Padrón",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pimientos de Padrón", quantite: "300 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Chauffer l'huile dans une poêle à feu vif.",
      "Sauter les piments 3-4 min.",
      "Ils doivent être légèrement cloqués.",
      "Saler généreusement et servir chaud."
    ],
    conseils: "Certains sont doux, d'autres piquants - c'est la surprise !",
    variantes: ["Au gros sel", "Avec aïoli"]
  },

  "piquillos": {
    nom: "Piquillos Farcis",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Piquillos en conserve", quantite: "12", type: "légume" },
      { nom: "Fromage de chèvre", quantite: "150 g", type: "fromage" },
      { nom: "Herbes fraîches", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Égoutter les piquillos.",
      "Mélanger le fromage avec les herbes.",
      "Farcir chaque piquillo.",
      "Passer au four 10 min pour réchauffer."
    ],
    conseils: "Tapas espagnol élégant.",
    variantes: ["À la morue", "Au thon"]
  }
};

// ============================================
// RECETTES FINALES MANQUANTES
// ============================================
const recettesFinales = {
  "anticuchos": {
    nom: "Anticuchos - Brochettes Péruviennes",
    categorie: "plat",
    temps_preparation: 30,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cœur de bœuf", quantite: "500 g", type: "viande" },
      { nom: "Piment aji panca (pâte)", quantite: "3 c. à soupe", type: "épice" },
      { nom: "Vinaigre de vin rouge", quantite: "6 cl", type: "assaisonnement" },
      { nom: "Ail", quantite: "6 gousses", type: "aromate" },
      { nom: "Cumin moulu", quantite: "2 c. à café", type: "épice" },
      { nom: "Origan séché", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Huile végétale", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer le cœur de bœuf, retirer les nerfs et la graisse. Couper en cubes de 3 cm.",
      "Préparer la marinade : mixer l'ail avec le piment aji panca, le vinaigre, le cumin et l'origan.",
      "Mariner les cubes de cœur minimum 4h, idéalement une nuit au réfrigérateur.",
      "Enfiler les morceaux sur des brochettes en bois (préalablement trempées).",
      "Griller sur braises vives ou à la plancha très chaude, 2-3 min par face.",
      "Le cœur doit rester rosé à l'intérieur pour être tendre.",
      "Servir avec des pommes de terre bouillies et de la sauce aji."
    ],
    conseils: "Les anticuchos sont un plat de rue emblématique du Pérou. Le secret est une cuisson vive et courte pour garder la viande tendre. Traditionnellement servis avec du maïs grillé.",
    variantes: ["Version au foie", "Avec sauce huancaína", "Marinade au chicha (bière de maïs)"]
  },

  "brioche_burger": {
    nom: "Buns Briochés Maison",
    categorie: "pain",
    temps_preparation: 40,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Farine T45", quantite: "500 g", type: "farine" },
      { nom: "Lait tiède", quantite: "15 cl", type: "produit laitier" },
      { nom: "Beurre mou", quantite: "80 g", type: "produit laitier" },
      { nom: "Œufs", quantite: "2", type: "œuf" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Levure boulangère", quantite: "10 g", type: "levure" },
      { nom: "Sel", quantite: "8 g", type: "assaisonnement" },
      { nom: "Jaune d'œuf pour dorure", quantite: "1", type: "œuf" },
      { nom: "Graines de sésame", quantite: "2 c. à soupe", type: "graines" }
    ],
    etapes: [
      "Délayer la levure dans le lait tiède avec une pincée de sucre.",
      "Mélanger la farine, le sel et le sucre. Ajouter les œufs et le lait.",
      "Pétrir 10 min jusqu'à obtenir une pâte lisse et élastique.",
      "Incorporer le beurre mou en plusieurs fois, pétrir encore 5 min.",
      "Laisser lever 1h30 sous un linge jusqu'à doublement du volume.",
      "Dégazer et diviser en 8 portions égales. Former des boules.",
      "Disposer sur une plaque, aplatir légèrement. Laisser lever 45 min.",
      "Dorer au jaune d'œuf, parsemer de sésame.",
      "Cuire à 180°C pendant 12-15 min jusqu'à coloration dorée."
    ],
    conseils: "La texture briochée fond en bouche et complète parfaitement un burger de qualité. Laisser refroidir sur grille avant de trancher.",
    variantes: ["Buns au charbon végétal (noirs)", "Buns au lait de pomme de terre", "Version sans sésame"]
  },

  "carottes_navets": {
    nom: "Carottes et Navets Glacés",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes nouvelles", quantite: "300 g", type: "légume" },
      { nom: "Navets nouveaux", quantite: "300 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" },
      { nom: "Persil plat", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre blanc", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher carottes et navets. Les tourner en petites olives ou couper en bâtonnets.",
      "Faire fondre le beurre dans une sauteuse, ajouter les légumes.",
      "Saupoudrer de sucre et faire légèrement caraméliser.",
      "Mouiller avec le fond de volaille, assaisonner.",
      "Cuire à découvert en remuant jusqu'à évaporation du liquide.",
      "Les légumes doivent être glacés, brillants et légèrement caramélisés.",
      "Parsemer de persil ciselé avant de servir."
    ],
    conseils: "La technique du glaçage classique donne aux légumes un aspect laqué et une saveur douce. Accompagnement traditionnel des viandes blanches et volailles.",
    variantes: ["Au miel", "À l'orange", "Avec gingembre"]
  },

  "cassoulet": {
    nom: "Cassoulet Traditionnel",
    categorie: "plat",
    temps_preparation: 60,
    temps_cuisson: 180,
    difficulte: "difficile",
    portions: 8,
    ingredients: [
      { nom: "Haricots lingots", quantite: "800 g", type: "légumineuse" },
      { nom: "Confit de canard", quantite: "4 cuisses", type: "viande" },
      { nom: "Saucisse de Toulouse", quantite: "500 g", type: "charcuterie" },
      { nom: "Poitrine de porc", quantite: "300 g", type: "viande" },
      { nom: "Couennes de porc", quantite: "200 g", type: "viande" },
      { nom: "Oignon", quantite: "2", type: "aromate" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "1 tête", type: "aromate" },
      { nom: "Concentré de tomate", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Chapelure", quantite: "100 g", type: "pain" }
    ],
    etapes: [
      "La veille, faire tremper les haricots dans l'eau froide.",
      "Cuire les haricots avec couennes, oignon, carotte et bouquet garni 1h30.",
      "Dans une cocotte, faire rissoler la poitrine de porc coupée en dés.",
      "Ajouter la saucisse coupée en tronçons, faire dorer.",
      "Incorporer l'ail, le concentré de tomate et un peu de bouillon de cuisson des haricots.",
      "Dans une cassole (ou plat en terre), alterner couches de haricots et viandes.",
      "Terminer par des haricots, arroser de graisse de confit.",
      "Enfourner à 150°C pendant 2h minimum.",
      "Casser la croûte qui se forme 7 fois en l'enfonçant, saupoudrer de chapelure entre chaque.",
      "La dernière croûte doit être bien dorée."
    ],
    conseils: "Le cassoulet authentique demande du temps et de la patience. La tradition veut qu'on casse la croûte 7 fois pour un cassoulet parfait. Se réchauffant très bien, il est encore meilleur le lendemain.",
    variantes: ["Cassoulet de Castelnaudary (sans confit)", "Cassoulet de Carcassonne (avec perdrix)", "Cassoulet de Toulouse (avec saucisse fraîche)"]
  },

  "choux_bruxelles_lard": {
    nom: "Choux de Bruxelles au Lard",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Choux de Bruxelles", quantite: "500 g", type: "légume" },
      { nom: "Lardons fumés", quantite: "150 g", type: "charcuterie" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les choux, retirer les feuilles abîmées et inciser la base en croix.",
      "Les blanchir 5 min à l'eau bouillante salée, égoutter.",
      "Faire revenir les lardons à sec jusqu'à coloration.",
      "Ajouter l'oignon émincé et le beurre, faire suer.",
      "Incorporer les choux, sauter 10 min à feu moyen.",
      "Ajouter la crème, la muscade, assaisonner.",
      "Cuire encore 5 min jusqu'à ce que les choux soient tendres mais croquants."
    ],
    conseils: "Le blanchiment initial retire l'amertume. Les choux de Bruxelles sont parfaits avec le gibier et les viandes de caractère.",
    variantes: ["Aux châtaignes", "Gratinés", "Au vinaigre balsamique"]
  },

  "condiments_charcuterie": {
    nom: "Assortiment de Condiments pour Charcuterie",
    categorie: "condiment",
    temps_preparation: 30,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Cornichons", quantite: "200 g", type: "condiment" },
      { nom: "Oignons grelots", quantite: "150 g", type: "légume" },
      { nom: "Moutarde de Dijon", quantite: "100 g", type: "condiment" },
      { nom: "Moutarde à l'ancienne", quantite: "100 g", type: "condiment" },
      { nom: "Vinaigre de vin", quantite: "20 cl", type: "assaisonnement" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Câpres", quantite: "50 g", type: "condiment" },
      { nom: "Beurre demi-sel", quantite: "200 g", type: "produit laitier" },
      { nom: "Pain de campagne", quantite: "1", type: "pain" }
    ],
    etapes: [
      "Préparer les oignons au vinaigre : éplucher les grelots, les blanchir 2 min.",
      "Porter à ébullition le vinaigre avec le sucre, y plonger les oignons.",
      "Laisser mariner minimum 24h au réfrigérateur.",
      "Disposer les cornichons dans un ravier, les câpres dans un autre.",
      "Présenter les deux moutardes dans des coupelles.",
      "Sortir le beurre 30 min avant pour qu'il soit à température.",
      "Trancher le pain en belles tranches épaisses.",
      "Dresser harmonieusement sur une grande planche de bois."
    ],
    conseils: "Les condiments doivent être variés pour accompagner différents types de charcuterie. L'acidité des cornichons et oignons coupe le gras des terrines et pâtés.",
    variantes: ["Ajouter des pickles maison", "Avec chutney de figues", "Gelée de vin rouge"]
  },

  "condiments_pot_au_feu": {
    nom: "Condiments Traditionnels du Pot-au-Feu",
    categorie: "condiment",
    temps_preparation: 20,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Moutarde de Dijon", quantite: "150 g", type: "condiment" },
      { nom: "Cornichons au vinaigre", quantite: "200 g", type: "condiment" },
      { nom: "Gros sel de Guérande", quantite: "100 g", type: "assaisonnement" },
      { nom: "Poivre noir en grains", quantite: "30 g", type: "épice" },
      { nom: "Câpres", quantite: "50 g", type: "condiment" },
      { nom: "Raifort râpé", quantite: "100 g", type: "condiment" },
      { nom: "Oignons au vinaigre", quantite: "150 g", type: "condiment" }
    ],
    etapes: [
      "Disposer la moutarde dans un ravier avec une petite cuillère.",
      "Égoutter les cornichons et les présenter dans un plat allongé.",
      "Mettre le gros sel dans un petit bol avec une pince.",
      "Placer le poivre dans un moulin ou un petit bol avec cuillère.",
      "Présenter le raifort dans une coupelle.",
      "Disposer les oignons au vinaigre dans un ravier.",
      "Organiser tous les condiments autour du pot-au-feu sur la table."
    ],
    conseils: "Ces condiments sont indispensables pour relever les viandes bouillies. Chaque convive assaisonne à son goût. Le raifort apporte une touche piquante appréciée.",
    variantes: ["Ajouter de la sauce verte aux herbes", "Avec ketchup maison", "Mayonnaise aux herbes"]
  },

  "entrecote_grillee": {
    nom: "Garniture pour Entrecôte Grillée",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Échalotes", quantite: "8", type: "aromate" },
      { nom: "Beurre maître d'hôtel", quantite: "100 g", type: "produit laitier" },
      { nom: "Persil plat", quantite: "1 bouquet", type: "herbe" },
      { nom: "Cresson", quantite: "2 bottes", type: "légume" },
      { nom: "Pommes de terre", quantite: "600 g", type: "légume" },
      { nom: "Huile d'arachide", quantite: "1 L", type: "matière grasse" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Beurre maître d'hôtel : mélanger beurre pommade, persil ciselé, jus de citron, sel et poivre. Rouler en boudin et réfrigérer.",
      "Éplucher les échalotes, les couper en deux.",
      "Les faire confire au beurre doux 20 min jusqu'à tendreté.",
      "Préparer les frites : couper les pommes de terre, les frire deux fois.",
      "Laver et essorer le cresson, retirer les tiges dures.",
      "Au moment de servir, disposer l'entrecôte sur assiette chaude.",
      "Ajouter une rondelle de beurre maître d'hôtel sur la viande.",
      "Garnir avec les échalotes confites, le cresson et les frites."
    ],
    conseils: "Le beurre maître d'hôtel fond doucement sur la viande chaude, l'enrobant d'un manteau parfumé. Le cresson apporte fraîcheur et amertume bienvenue.",
    variantes: ["Avec sauce béarnaise", "Échalotes au vin rouge", "Beurre Café de Paris"]
  },

  "fondue_bourguignonne": {
    nom: "Fondue Bourguignonne et ses Sauces",
    categorie: "plat",
    temps_preparation: 45,
    temps_cuisson: 0,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Huile d'arachide", quantite: "1 L", type: "matière grasse" },
      { nom: "Filet de bœuf", quantite: "1 kg", type: "viande" },
      { nom: "Mayonnaise", quantite: "20 cl", type: "sauce" },
      { nom: "Ketchup", quantite: "5 cl", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Cornichons", quantite: "6", type: "condiment" },
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Curry", quantite: "1 c. à café", type: "épice" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Herbes fraîches", quantite: "4 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Préparer 5-6 sauces différentes :",
      "Sauce cocktail : mayonnaise + ketchup + cognac + tabasco.",
      "Sauce tartare : mayonnaise + câpres + cornichons + herbes hachés.",
      "Sauce moutarde : mayonnaise + moutarde forte.",
      "Sauce curry : mayonnaise + curry + miel.",
      "Sauce aïoli : mayonnaise + ail écrasé.",
      "Sauce béarnaise : jaunes d'œufs + beurre + estragon (classique).",
      "Couper la viande en cubes de 2,5 cm.",
      "Disposer dans des assiettes individuelles avec les sauces autour.",
      "Chauffer l'huile dans le caquelon, maintenir à température (180°C).",
      "Chacun pique sa viande et la cuit à son goût dans l'huile."
    ],
    conseils: "Prévoir au moins 5 sauces différentes pour varier les plaisirs. L'huile doit être très chaude mais ne pas fumer. Accompagner de salade verte et pommes de terre vapeur.",
    variantes: ["Fondue chinoise (bouillon)", "Fondue vigneronne (vin rouge)", "Avec plusieurs viandes"]
  },

  "frites_allumettes": {
    nom: "Frites Allumettes",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 8,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre Bintje", quantite: "800 g", type: "légume" },
      { nom: "Huile d'arachide", quantite: "2 L", type: "matière grasse" },
      { nom: "Fleur de sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher les pommes de terre.",
      "Les tailler en bâtonnets très fins (3-4 mm d'épaisseur).",
      "Utiliser une mandoline pour une coupe régulière.",
      "Rincer abondamment et bien sécher dans un torchon.",
      "Première cuisson : 140°C pendant 4-5 min (blanchiment).",
      "Égoutter et laisser refroidir sur papier absorbant.",
      "Deuxième cuisson : 180°C pendant 2-3 min jusqu'à coloration dorée.",
      "Égoutter, saler immédiatement et servir très chaud."
    ],
    conseils: "Les frites allumettes sont très fines et croustillantes. Elles doivent être servies immédiatement car elles ramollissent vite. Accompagnement classique des steaks et tournedos.",
    variantes: ["Frites paille (encore plus fines)", "Assaisonnées au paprika", "Truffe et parmesan"]
  },

  "haricots_verts_ail": {
    nom: "Haricots Verts à l'Ail et Persil",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 12,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots verts extra-fins", quantite: "500 g", type: "légume" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Persil plat", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Équeter les haricots verts (retirer les deux extrémités).",
      "Les cuire à l'eau bouillante salée 6-8 min selon leur taille.",
      "Ils doivent rester légèrement croquants.",
      "Les plonger immédiatement dans l'eau glacée pour stopper la cuisson.",
      "Égoutter parfaitement.",
      "Faire fondre le beurre dans une poêle, ajouter l'ail finement émincé.",
      "Faire dorer légèrement sans brûler.",
      "Ajouter les haricots, sauter 2 min pour les réchauffer.",
      "Parsemer de persil ciselé, assaisonner et servir."
    ],
    conseils: "Le bain de glace garde la belle couleur verte des haricots. L'ail ne doit pas être trop cuit pour rester digeste.",
    variantes: ["À la persillade complète (ail + persil + chapelure)", "Aux amandes effilées", "Au sésame"]
  },

  "legumes_pot_au_feu": {
    nom: "Légumes du Pot-au-Feu",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Carottes", quantite: "6", type: "légume" },
      { nom: "Poireaux", quantite: "4", type: "légume" },
      { nom: "Navets", quantite: "4", type: "légume" },
      { nom: "Céleri branche", quantite: "1 pied", type: "légume" },
      { nom: "Pommes de terre", quantite: "6", type: "légume" },
      { nom: "Chou vert", quantite: "1/2", type: "légume" },
      { nom: "Oignons piqués de clous de girofle", quantite: "2", type: "aromate" },
      { nom: "Bouillon de pot-au-feu", quantite: "2 L", type: "bouillon" }
    ],
    etapes: [
      "Éplucher tous les légumes, les garder entiers ou en gros morceaux.",
      "Ficeler les poireaux en bottes pour éviter qu'ils ne se défassent.",
      "Blanchir le chou 5 min à l'eau bouillante, égoutter.",
      "Cuire les légumes dans le bouillon par ordre de temps de cuisson :",
      "D'abord les carottes et navets (45 min).",
      "Puis le céleri et les poireaux (30 min).",
      "Enfin les pommes de terre et le chou (25 min).",
      "Les légumes doivent être tendres mais garder leur forme.",
      "Servir autour des viandes avec du bouillon."
    ],
    conseils: "Les légumes sont l'âme du pot-au-feu. Les cuire dans le bouillon de viande leur donne tout leur goût. Certains ajoutent des panais pour plus de douceur.",
    variantes: ["Avec panais et rutabaga", "Légumes en julienne", "Petits légumes tournés"]
  },

  "legumes_wok": {
    nom: "Légumes Sautés au Wok",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Brocoli", quantite: "200 g", type: "légume" },
      { nom: "Poivrons", quantite: "2", type: "légume" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Pois gourmands", quantite: "100 g", type: "légume" },
      { nom: "Champignons shiitake", quantite: "150 g", type: "champignon" },
      { nom: "Gingembre frais", quantite: "3 cm", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Sauce soja", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "matière grasse" },
      { nom: "Huile végétale", quantite: "2 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Préparer tous les légumes : détailler le brocoli en petits bouquets, émincer les poivrons et champignons, tailler les carottes en julienne.",
      "Émincer finement l'ail et le gingembre.",
      "Chauffer le wok à feu très vif avec l'huile végétale.",
      "Saisir d'abord les carottes 1 min (légume le plus dur).",
      "Ajouter le brocoli et les poivrons, sauter 2 min.",
      "Incorporer les champignons et pois gourmands, sauter 2 min.",
      "Ajouter ail et gingembre, sauter 30 secondes.",
      "Déglacer avec la sauce soja, finir avec l'huile de sésame.",
      "Servir immédiatement, les légumes doivent rester croquants."
    ],
    conseils: "Le secret du wok est la chaleur intense et le mouvement constant. Tout doit être prêt avant de commencer car la cuisson est très rapide.",
    variantes: ["Sauce teriyaki", "À l'aigre-doux", "Avec noix de cajou"]
  },

  "pain_epices": {
    nom: "Pain d'Épices Traditionnel",
    categorie: "pain",
    temps_preparation: 20,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Farine de seigle", quantite: "250 g", type: "farine" },
      { nom: "Miel", quantite: "250 g", type: "sucrant" },
      { nom: "Sucre", quantite: "100 g", type: "sucrant" },
      { nom: "Lait", quantite: "15 cl", type: "produit laitier" },
      { nom: "Œuf", quantite: "1", type: "œuf" },
      { nom: "Bicarbonate", quantite: "1 c. à café", type: "levure" },
      { nom: "Cannelle", quantite: "2 c. à café", type: "épice" },
      { nom: "Anis étoilé moulu", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Gingembre moulu", quantite: "1 c. à café", type: "épice" },
      { nom: "Quatre-épices", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Préchauffer le four à 150°C.",
      "Chauffer le lait avec le miel et le sucre jusqu'à dissolution.",
      "Laisser tiédir, puis ajouter l'œuf battu.",
      "Mélanger la farine avec toutes les épices et le bicarbonate.",
      "Incorporer le mélange liquide progressivement en fouettant.",
      "La pâte doit être lisse et assez liquide.",
      "Verser dans un moule à cake beurré et fariné.",
      "Cuire 45-50 min, le pain est cuit quand un couteau ressort sec.",
      "Démouler tiède et laisser refroidir sur grille.",
      "Emballer dans du film alimentaire et attendre 2-3 jours avant de déguster."
    ],
    conseils: "Le pain d'épices se bonifie en vieillissant. Accompagnement classique du foie gras, du gibier et des fromages persillés. À Dijon, on le prépare depuis le Moyen Âge.",
    variantes: ["Aux écorces d'orange confites", "Aux noix", "Glacé au sucre"]
  },

  "pommes_four_sucrees": {
    nom: "Pommes au Four Sucrées",
    categorie: "garniture",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes (Boskoop ou Reinette)", quantite: "4", type: "fruit" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Sucre cassonade", quantite: "80 g", type: "sucrant" },
      { nom: "Cannelle", quantite: "1 c. à café", type: "épice" },
      { nom: "Raisins secs", quantite: "40 g", type: "fruit" },
      { nom: "Amandes effilées", quantite: "30 g", type: "fruit sec" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Laver les pommes et retirer le cœur avec un vide-pomme.",
      "Les placer dans un plat à four.",
      "Mélanger le beurre mou avec le sucre et la cannelle.",
      "Incorporer les raisins secs et les amandes.",
      "Farcir le centre de chaque pomme avec ce mélange.",
      "Arroser de miel.",
      "Cuire 35-40 min en arrosant régulièrement du jus de cuisson.",
      "Les pommes doivent être fondantes mais garder leur forme."
    ],
    conseils: "Accompagnement sucré-salé parfait pour le boudin noir, le porc rôti et les volailles. Choisir des pommes acidulées qui tiennent à la cuisson.",
    variantes: ["Au calvados", "Aux fruits secs variés", "Au pain d'épices émietté"]
  },

  "pommes_sautees_sucrees": {
    nom: "Pommes Sautées au Beurre",
    categorie: "garniture",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes Golden", quantite: "4", type: "fruit" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Calvados (facultatif)", quantite: "3 cl", type: "alcool" }
    ],
    etapes: [
      "Éplucher les pommes, les couper en quartiers et retirer le cœur.",
      "Faire fondre le beurre dans une poêle à feu moyen.",
      "Disposer les quartiers de pommes et les faire dorer 5 min par face.",
      "Saupoudrer de sucre et caraméliser légèrement.",
      "Flamber au calvados si désiré.",
      "Les pommes doivent être dorées et légèrement caramélisées mais pas molles."
    ],
    conseils: "Accompagnement classique du boudin noir et du rôti de porc. Le calvados apporte une touche normande authentique.",
    variantes: ["Au miel", "À la vanille", "Avec noix caramélisées"]
  },

  "potee": {
    nom: "Potée Auvergnate",
    categorie: "plat",
    temps_preparation: 30,
    temps_cuisson: 180,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Palette de porc demi-sel", quantite: "800 g", type: "viande" },
      { nom: "Saucisses fumées", quantite: "4", type: "charcuterie" },
      { nom: "Petit salé", quantite: "400 g", type: "viande" },
      { nom: "Chou vert frisé", quantite: "1", type: "légume" },
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Carottes", quantite: "4", type: "légume" },
      { nom: "Navets", quantite: "4", type: "légume" },
      { nom: "Poireaux", quantite: "4", type: "légume" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "aromate" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "La veille, faire dessaler la palette et le petit salé dans l'eau froide.",
      "Blanchir le chou coupé en quartiers 5 min, égoutter.",
      "Mettre les viandes dans une grande marmite, couvrir d'eau froide.",
      "Porter à ébullition, écumer soigneusement.",
      "Ajouter l'oignon piqué et le bouquet garni.",
      "Laisser mijoter 2h à petit feu.",
      "Ajouter les carottes, navets et poireaux, cuire 30 min.",
      "Ajouter les pommes de terre et le chou, cuire encore 30 min.",
      "Ajouter les saucisses 15 min avant la fin.",
      "Servir les viandes tranchées entourées de légumes avec du bouillon."
    ],
    conseils: "Plat familial et généreux typique de l'Auvergne. La cuisson longue et douce permet aux saveurs de se mélanger. Servir avec moutarde et cornichons.",
    variantes: ["Potée lorraine (avec lard)", "Potée bretonne (avec andouille)", "Potée bourguignonne"]
  },

  "roties_becasse": {
    nom: "Rôties à la Bécasse",
    categorie: "garniture",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Pain de mie", quantite: "4 tranches épaisses", type: "pain" },
      { nom: "Intestins de bécasse (intérieurs)", quantite: "de 2 bécasses", type: "abat" },
      { nom: "Foies de volaille", quantite: "100 g", type: "abat" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Cognac", quantite: "4 cl", type: "alcool" },
      { nom: "Échalote", quantite: "2", type: "aromate" },
      { nom: "Persil", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre, quatre-épices", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Hacher finement les intestins (ou trail) de bécasse avec les foies de volaille.",
      "Faire revenir l'échalote ciselée dans 30g de beurre.",
      "Ajouter le hachis, faire sauter 3 min à feu vif.",
      "Flamber au cognac, assaisonner avec sel, poivre et quatre-épices.",
      "Retirer du feu, incorporer le reste de beurre en parcelles et le persil.",
      "Faire frire les tranches de pain de mie dans du beurre clarifié.",
      "Elles doivent être dorées et croustillantes.",
      "Tartiner généreusement chaque rôtie avec la préparation.",
      "Servir immédiatement sous les bécasses rôties."
    ],
    conseils: "Les rôties sont le complément traditionnel et indissociable de la bécasse rôtie. Cette préparation rustique magnifie le caractère unique de ce gibier d'exception. Pour les amateurs de saveurs franches.",
    variantes: ["Version simplifiée avec foies de volaille seuls", "Aux truffes", "Avec morilles"]
  }
};

// ============================================
// ACCOMPAGNEMENTS MANQUANTS
// ============================================
const recettesManquantes = {
  // ===== FRUITS ET CONDIMENTS =====
  "airelles": {
    nom: "Airelles",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Airelles fraîches ou surgelées", quantite: "300 g", type: "fruit" },
      { nom: "Sucre", quantite: "100 g", type: "sucre" },
      { nom: "Eau", quantite: "50 ml", type: "liquide" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Rincer les airelles si fraîches.",
      "Les mettre dans une casserole avec le sucre et l'eau.",
      "Ajouter le zeste d'orange.",
      "Cuire à feu doux 15 minutes en remuant.",
      "Laisser refroidir et réserver au frais."
    ],
    conseils: "Accompagnement scandinave traditionnel du gibier. L'acidité des airelles équilibre les viandes fortes.",
    variantes: ["Avec cannelle", "Au vin rouge"]
  },

  "capres_et_cornichons": {
    nom: "Câpres et cornichons",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Câpres", quantite: "50 g", type: "condiment" },
      { nom: "Cornichons", quantite: "100 g", type: "condiment" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Égoutter les câpres.",
      "Couper les cornichons en rondelles.",
      "Émincer finement l'échalote.",
      "Mélanger le tout avec le persil ciselé.",
      "Servir frais en accompagnement."
    ],
    conseils: "Condiment traditionnel pour pot-au-feu, tête de veau et viandes bouillies.",
    variantes: ["Avec oignons au vinaigre", "Pickles variés"]
  },

  "chutney": {
    nom: "Chutney",
    categorie: "condiment",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "moyen",
    portions: 10,
    ingredients: [
      { nom: "Mangue mûre", quantite: "2", type: "fruit" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Vinaigre de cidre", quantite: "100 ml", type: "vinaigre" },
      { nom: "Sucre roux", quantite: "100 g", type: "sucre" },
      { nom: "Gingembre frais", quantite: "20 g", type: "aromate" },
      { nom: "Piment", quantite: "1", type: "épice" },
      { nom: "Raisins secs", quantite: "50 g", type: "fruit sec" }
    ],
    etapes: [
      "Peler et couper la mangue en dés.",
      "Émincer l'oignon et râper le gingembre.",
      "Mettre tous les ingrédients dans une casserole.",
      "Cuire à feu doux 45 minutes en remuant régulièrement.",
      "Le chutney doit être épais et confit.",
      "Mettre en pots et conserver au frais."
    ],
    conseils: "Se conserve plusieurs semaines au réfrigérateur. Excellent avec les viandes grillées et currys.",
    variantes: ["Aux figues", "Aux tomates vertes", "À la pomme"]
  },

  "compote_de_pommes": {
    nom: "Compote de pommes",
    categorie: "condiment",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes (Boskoop, Reinette)", quantite: "1 kg", type: "fruit" },
      { nom: "Sucre", quantite: "80 g", type: "sucre" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" },
      { nom: "Eau", quantite: "50 ml", type: "liquide" }
    ],
    etapes: [
      "Éplucher les pommes, retirer le trognon, les couper en morceaux.",
      "Les mettre dans une casserole avec l'eau, le sucre et la cannelle.",
      "Cuire à feu doux 20 minutes en remuant.",
      "Retirer la cannelle et écraser à la fourchette.",
      "Servir tiède ou froide."
    ],
    conseils: "Accompagnement classique du boudin noir et du rôti de porc. Ajuster le sucre selon l'acidité des pommes.",
    variantes: ["À la vanille", "Au calvados", "Avec poires"]
  },

  "pickles_maison": {
    nom: "Pickles maison",
    categorie: "condiment",
    temps_preparation: 20,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Concombre", quantite: "2", type: "légume" },
      { nom: "Vinaigre blanc", quantite: "300 ml", type: "vinaigre" },
      { nom: "Eau", quantite: "150 ml", type: "liquide" },
      { nom: "Sucre", quantite: "3 c. à soupe", type: "sucre" },
      { nom: "Sel", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Graines de moutarde", quantite: "1 c. à café", type: "épice" },
      { nom: "Aneth", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Couper les concombres en rondelles ou en bâtonnets.",
      "Porter à ébullition vinaigre, eau, sucre et sel.",
      "Placer les concombres dans un bocal avec moutarde et aneth.",
      "Verser le vinaigre chaud dessus.",
      "Fermer et laisser refroidir.",
      "Conserver au réfrigérateur au moins 24h avant de consommer."
    ],
    conseils: "Se conservent plusieurs semaines au frais. Parfaits avec burgers, sandwiches et grillades.",
    variantes: ["Aux oignons", "Aux carottes", "Épicés au piment"]
  },

  "legumes_en_pickles": {
    redirect: "pickles_maison"
  },

  // ===== PAINS ET TARTINES =====
  "pain": {
    nom: "Pain",
    categorie: "accompagnement",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Pain de votre choix", quantite: "selon besoin", type: "pain" }
    ],
    etapes: [
      "Choisir un pain adapté au plat (baguette, pain de campagne, etc.).",
      "Couper en tranches si nécessaire.",
      "Servir à température ambiante ou légèrement toasté."
    ],
    conseils: "Le pain accompagne traditionnellement les plats en sauce pour saucer.",
    variantes: ["Baguette tradition", "Pain de campagne", "Pain aux céréales"]
  },

  "pain_de_campagne": {
    nom: "Pain de campagne",
    categorie: "accompagnement",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pain de campagne", quantite: "1", type: "pain" }
    ],
    etapes: [
      "Couper le pain en tranches épaisses.",
      "Servir avec le plat pour saucer."
    ],
    conseils: "Pain rustique idéal avec les plats mijotés et les terrines.",
    variantes: ["Grillé", "Frotté à l'ail"]
  },

  "pain_de_campagne_grille": {
    nom: "Pain de campagne grillé",
    categorie: "accompagnement",
    temps_preparation: 2,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de campagne", quantite: "4 tranches", type: "pain" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "huile" }
    ],
    etapes: [
      "Couper le pain en tranches d'1 cm.",
      "Badigeonner légèrement d'huile d'olive.",
      "Griller au four ou au grille-pain jusqu'à coloration dorée."
    ],
    conseils: "Parfait pour les soupes, salades et plats en sauce.",
    variantes: ["Frotté à l'ail", "Avec tomate"]
  },

  "pain_brioche": {
    nom: "Pain brioché",
    categorie: "accompagnement",
    temps_preparation: 0,
    temps_cuisson: 2,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain brioché", quantite: "4 tranches", type: "pain" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Couper le pain brioché en tranches.",
      "Faire toaster légèrement si désiré.",
      "Servir avec du beurre."
    ],
    conseils: "Accompagnement moelleux pour le foie gras et les terrines.",
    variantes: ["Toasté", "Nature"]
  },

  "brioche_toastee": {
    nom: "Brioche toastée",
    categorie: "accompagnement",
    temps_preparation: 2,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Brioche", quantite: "4 tranches épaisses", type: "pain" }
    ],
    etapes: [
      "Couper la brioche en tranches d'1 cm.",
      "Faire toaster au grille-pain ou au four.",
      "La brioche doit être dorée à l'extérieur, moelleuse à l'intérieur."
    ],
    conseils: "Accompagnement classique du foie gras poêlé ou en terrine.",
    variantes: ["Au beurre", "Caramélisée"]
  },

  "pain_a_la_tomate": {
    nom: "Pain à la tomate",
    categorie: "accompagnement",
    temps_preparation: 5,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de campagne", quantite: "4 tranches", type: "pain" },
      { nom: "Tomate mûre", quantite: "1", type: "légume" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "huile" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Griller les tranches de pain.",
      "Frotter avec la gousse d'ail coupée.",
      "Couper la tomate en deux et frotter sur le pain.",
      "Arroser d'huile d'olive et saler."
    ],
    conseils: "Pan con tomate catalan. La tomate doit être très mûre pour bien imprégner le pain.",
    variantes: ["Avec jambon serrano", "Avec anchois"]
  },

  "pain_d_epices_grille": {
    nom: "Pain d'épices grillé",
    categorie: "accompagnement",
    temps_preparation: 2,
    temps_cuisson: 3,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain d'épices", quantite: "4 tranches", type: "pain" }
    ],
    etapes: [
      "Couper le pain d'épices en tranches fines.",
      "Faire toaster légèrement au grille-pain ou au four.",
      "Servir tiède."
    ],
    conseils: "Accompagnement original pour le foie gras, apportant une note sucrée-épicée.",
    variantes: ["Au beurre salé", "Avec confiture de figues"]
  },

  "roties_tartines": {
    nom: "Rôties (tartines)",
    categorie: "accompagnement",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pain de mie ou pain de campagne", quantite: "4 tranches", type: "pain" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire griller les tranches de pain.",
      "Beurrer généreusement.",
      "Servir sous les gibiers rôtis pour recueillir le jus."
    ],
    conseils: "Tradition de la cuisine classique française pour servir les gibiers à plume.",
    variantes: ["Aux foies", "À la moelle"]
  },

  "tortillas_maison": {
    nom: "Tortillas maison",
    categorie: "accompagnement",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Farine de maïs (masa harina)", quantite: "250 g", type: "farine" },
      { nom: "Eau tiède", quantite: "200 ml", type: "liquide" },
      { nom: "Sel", quantite: "1/2 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la farine et le sel.",
      "Ajouter l'eau tiède progressivement et pétrir.",
      "Former une boule lisse, laisser reposer 30 min.",
      "Diviser en 8 portions, former des boules.",
      "Aplatir chaque boule entre deux feuilles de plastique.",
      "Cuire sur une poêle sèche chaude 1 min de chaque côté."
    ],
    conseils: "Les tortillas doivent rester souples. Les empiler dans un linge propre pour les garder au chaud.",
    variantes: ["À la farine de blé", "Aux herbes"]
  },

  // ===== LÉGUMES SIMPLES =====
  "carottes": {
    nom: "Carottes",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les carottes en rondelles.",
      "Les cuire à l'eau bouillante salée 15-20 min.",
      "Égoutter et ajouter le beurre.",
      "Servir chaud."
    ],
    conseils: "Accompagnement simple et classique. Les carottes doivent rester légèrement fermes.",
    variantes: ["Glacées au miel", "Vichy (avec persil)"]
  },

  "carottes_et_navets": {
    nom: "Carottes et navets",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "300 g", type: "légume" },
      { nom: "Navets", quantite: "300 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucre" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher et tourner les carottes et navets.",
      "Les faire revenir dans le beurre avec le sucre.",
      "Mouiller à hauteur d'eau, saler.",
      "Cuire à découvert jusqu'à évaporation du liquide.",
      "Les légumes doivent être glacés et brillants.",
      "Parsemer de persil."
    ],
    conseils: "Légumes glacés traditionnels pour accompagner les viandes braisées.",
    variantes: ["Avec miel", "Aux herbes de Provence"]
  },

  "champignons": {
    nom: "Champignons",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris", quantite: "400 g", type: "champignon" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Nettoyer les champignons et les émincer.",
      "Les faire sauter dans le beurre à feu vif.",
      "Ajouter l'ail haché en fin de cuisson.",
      "Parsemer de persil et servir."
    ],
    conseils: "Cuire à feu vif pour éviter que les champignons ne rendent trop d'eau.",
    variantes: ["À la crème", "À la persillade"]
  },

  "champignons_de_paris": {
    redirect: "champignons"
  },

  "champignons_de_paris_sautes": {
    nom: "Champignons de Paris sautés",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris", quantite: "500 g", type: "champignon" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Citron", quantite: "1/2", type: "agrume" }
    ],
    etapes: [
      "Nettoyer et émincer les champignons.",
      "Faire chauffer le beurre à feu vif.",
      "Sauter les champignons rapidement.",
      "Ajouter l'échalote et l'ail émincés.",
      "Arroser de jus de citron.",
      "Parsemer de persil et servir."
    ],
    conseils: "Les champignons doivent être saisis rapidement pour rester fermes et ne pas rendre d'eau.",
    variantes: ["Forestière (avec lardons)", "À la crème"]
  },

  "champignons_des_bois": {
    nom: "Champignons des bois",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 12,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Champignons des bois mélangés (cèpes, girolles, trompettes)", quantite: "400 g", type: "champignon" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil plat", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Échalote", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Nettoyer soigneusement les champignons sans les laver.",
      "Les couper en morceaux selon leur taille.",
      "Faire sauter dans le beurre mousseux à feu vif.",
      "Ajouter l'échalote et l'ail en fin de cuisson.",
      "Parsemer de persil et servir."
    ],
    conseils: "Les champignons des bois ne se lavent pas, les brosser ou essuyer avec un linge humide.",
    variantes: ["À la crème", "Avec œuf poché"]
  },

  "champignons_sauvages": {
    redirect: "champignons_des_bois"
  },

  "cepes_a_la_bordelaise": {
    nom: "Cèpes à la bordelaise",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais", quantite: "500 g", type: "champignon" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Persil plat", quantite: "1 bouquet", type: "herbe" },
      { nom: "Échalotes", quantite: "2", type: "aromate" }
    ],
    etapes: [
      "Nettoyer les cèpes et les émincer épais.",
      "Chauffer l'huile dans une poêle à feu vif.",
      "Saisir les cèpes sans les remuer au début.",
      "Retourner et cuire 5 min de plus.",
      "Ajouter ail et échalotes hachés.",
      "Parsemer généreusement de persil haché."
    ],
    conseils: "Recette du Sud-Ouest. La persillade en fin de cuisson est indispensable.",
    variantes: ["Avec jambon de Bayonne", "À la graisse de canard"]
  },

  "girolles_sautees": {
    nom: "Girolles sautées",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Girolles fraîches", quantite: "400 g", type: "champignon" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer les girolles en les brossant, ne pas les laver.",
      "Couper les plus grosses en deux.",
      "Faire mousser le beurre dans une poêle.",
      "Sauter les girolles à feu vif 8-10 min.",
      "Ajouter l'ail haché et le persil.",
      "Assaisonner et servir."
    ],
    conseils: "Les girolles rendent beaucoup d'eau, les cuire à feu vif pour l'évaporer rapidement.",
    variantes: ["À la crème", "Avec œufs brouillés"]
  },

  "poelee_de_girolles": {
    redirect: "girolles_sautees"
  },

  "morilles": {
    nom: "Morilles à la crème",
    categorie: "légume",
    temps_preparation: 30,
    temps_cuisson: 20,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Morilles séchées", quantite: "50 g", type: "champignon" },
      { nom: "Crème fraîche", quantite: "200 ml", type: "crème" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Vin jaune ou blanc", quantite: "50 ml", type: "alcool" }
    ],
    etapes: [
      "Réhydrater les morilles 30 min dans l'eau tiède.",
      "Les rincer soigneusement (elles contiennent souvent du sable).",
      "Faire suer les échalotes dans le beurre.",
      "Ajouter les morilles et faire sauter 5 min.",
      "Déglacer au vin, laisser réduire.",
      "Ajouter la crème et cuire 10 min à feu doux."
    ],
    conseils: "Les morilles doivent être bien nettoyées car elles retiennent le sable. Plat de printemps par excellence.",
    variantes: ["Au vin jaune du Jura", "Avec ris de veau"]
  },

  "poelee_de_champignons": {
    nom: "Poêlée de champignons",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 12,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons mélangés", quantite: "500 g", type: "champignon" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Thym", quantite: "1 branche", type: "herbe" }
    ],
    etapes: [
      "Nettoyer et émincer les champignons.",
      "Faire chauffer le beurre à feu vif.",
      "Sauter les champignons avec le thym.",
      "Ajouter ail et échalote émincés.",
      "Cuire jusqu'à évaporation du jus.",
      "Parsemer de persil et servir."
    ],
    conseils: "Mélanger plusieurs variétés de champignons pour plus de saveurs.",
    variantes: ["Forestière", "À la crème", "À la persillade"]
  },

  "gratin_de_cepes": {
    nom: "Gratin de cèpes",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais", quantite: "500 g", type: "champignon" },
      { nom: "Crème fraîche", quantite: "200 ml", type: "crème" },
      { nom: "Parmesan râpé", quantite: "50 g", type: "fromage" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Chapelure", quantite: "2 c. à soupe", type: "chapelure" }
    ],
    etapes: [
      "Nettoyer et émincer les cèpes.",
      "Les faire sauter avec l'ail et le persil.",
      "Disposer dans un plat à gratin.",
      "Napper de crème.",
      "Mélanger parmesan et chapelure, parsemer dessus.",
      "Gratiner 15 min à 200°C."
    ],
    conseils: "Un plat généreux qui met en valeur les cèpes. Servir avec une viande rôtie.",
    variantes: ["Avec pommes de terre", "Au comté"]
  },

  // ===== ÉPINARDS =====
  "epinards_frais": {
    nom: "Épinards frais",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards frais", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Laver soigneusement les épinards, retirer les tiges.",
      "Les faire tomber dans une poêle avec le beurre.",
      "Remuer jusqu'à ce qu'ils soient fondus.",
      "Assaisonner de sel et muscade.",
      "Servir immédiatement."
    ],
    conseils: "Les épinards réduisent énormément à la cuisson. Prévoir une grande quantité.",
    variantes: ["À la crème", "À l'ail"]
  },

  "epinards_jeunes": {
    redirect: "epinards_frais"
  },

  "epinards_en_branches": {
    nom: "Épinards en branches",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards en branches", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Laver les épinards, garder les feuilles entières.",
      "Blanchir 2 min à l'eau bouillante salée.",
      "Égoutter et presser pour enlever l'eau.",
      "Faire revenir dans le beurre avec l'ail.",
      "Assaisonner et servir."
    ],
    conseils: "Les épinards en branches se servent entiers, contrairement aux épinards hachés.",
    variantes: ["Au beurre noisette", "Avec pignons"]
  },

  "epinards_au_beurre": {
    nom: "Épinards au beurre",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Laver et équeuter les épinards.",
      "Les faire tomber dans une poêle sans matière grasse.",
      "Une fois fondus, bien les égoutter.",
      "Ajouter le beurre et mélanger.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "Bien égoutter les épinards pour éviter qu'ils soient aqueux.",
    variantes: ["À l'ail", "Avec croutons"]
  },

  "epinards_a_la_creme": {
    nom: "Épinards à la crème",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épinards", quantite: "600 g", type: "légume" },
      { nom: "Crème fraîche", quantite: "150 ml", type: "crème" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Faire tomber les épinards lavés dans le beurre.",
      "Bien les égoutter et les hacher grossièrement.",
      "Ajouter l'ail pressé et la crème.",
      "Laisser réduire 5 min.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "Accompagnement classique des œufs, du veau et du poulet.",
    variantes: ["Au parmesan", "Avec œuf poché"]
  },

  // ===== CHOUX =====
  "chou_rouge_aux_pommes": {
    nom: "Chou rouge aux pommes",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 90,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou rouge", quantite: "1 (environ 800 g)", type: "légume" },
      { nom: "Pommes", quantite: "2", type: "fruit" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Vinaigre de vin rouge", quantite: "3 c. à soupe", type: "vinaigre" },
      { nom: "Sucre roux", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Graisse de canard", quantite: "30 g", type: "matière grasse" },
      { nom: "Clous de girofle", quantite: "2", type: "épice" }
    ],
    etapes: [
      "Émincer finement le chou rouge.",
      "Faire revenir l'oignon émincé dans la graisse.",
      "Ajouter le chou, le vinaigre, le sucre et les clous de girofle.",
      "Couvrir et cuire à feu doux 1h en remuant.",
      "Ajouter les pommes coupées en dés.",
      "Poursuivre la cuisson 30 min."
    ],
    conseils: "Accompagnement traditionnel du gibier et du porc. Le vinaigre garde la couleur du chou.",
    variantes: ["Au vin rouge", "Aux marrons"]
  },

  "chou_rouge_confit": {
    redirect: "chou_rouge_aux_pommes"
  },

  "choux_rouges_aux_pommes": {
    redirect: "chou_rouge_aux_pommes"
  },

  "choux_braise": {
    nom: "Chou braisé",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou vert", quantite: "1", type: "légume" },
      { nom: "Lardons", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Bouillon", quantite: "300 ml", type: "bouillon" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Couper le chou en quartiers, retirer le trognon.",
      "Blanchir 5 min à l'eau bouillante.",
      "Faire revenir les lardons et l'oignon.",
      "Ajouter le chou égoutté.",
      "Mouiller au bouillon.",
      "Braiser à couvert 1h à feu doux."
    ],
    conseils: "Le blanchiment atténue le goût fort du chou. Idéal avec saucisses et porc.",
    variantes: ["Au vin blanc", "Avec carottes"]
  },

  "choux_de_bruxelles": {
    nom: "Choux de Bruxelles",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Choux de Bruxelles", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Parer les choux de Bruxelles et inciser la base.",
      "Les cuire à l'eau bouillante salée 15-18 min.",
      "Égoutter et faire sauter dans le beurre.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "Ne pas trop cuire pour garder une légère fermeté. L'incision à la base assure une cuisson uniforme.",
    variantes: ["Au bacon", "Gratinés", "Rôtis au four"]
  },

  "choux_de_bruxelles_au_lard": {
    nom: "Choux de Bruxelles au lard",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Choux de Bruxelles", quantite: "500 g", type: "légume" },
      { nom: "Lardons fumés", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "100 ml", type: "crème" }
    ],
    etapes: [
      "Cuire les choux à l'eau bouillante 12-15 min.",
      "Faire rissoler les lardons et l'oignon émincé.",
      "Ajouter les choux égouttés.",
      "Verser la crème et laisser mijoter 5 min.",
      "Assaisonner et servir."
    ],
    conseils: "Le fumé des lardons s'accorde parfaitement avec les choux de Bruxelles.",
    variantes: ["Aux châtaignes", "Au parmesan"]
  },

  "chou_pak_choi": {
    nom: "Chou pak choi",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pak choi", quantite: "4 petits", type: "légume" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "huile" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Gingembre", quantite: "1 cm", type: "aromate" }
    ],
    etapes: [
      "Couper les pak choi en deux dans la longueur.",
      "Faire chauffer l'huile dans un wok.",
      "Sauter l'ail et le gingembre émincés.",
      "Ajouter les pak choi et cuire 3-4 min.",
      "Arroser de sauce soja et servir."
    ],
    conseils: "Le pak choi doit rester croquant. Cuisson rapide à feu vif.",
    variantes: ["À l'huître", "Avec champignons"]
  },

  // ===== HARICOTS =====
  "haricots_verts_fins": {
    nom: "Haricots verts fins",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 8,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots verts fins", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Équeuter les haricots verts.",
      "Les cuire à l'eau bouillante salée 6-8 min.",
      "Ils doivent rester croquants.",
      "Égoutter et les rafraîchir à l'eau glacée.",
      "Faire sauter dans le beurre et servir."
    ],
    conseils: "Le bain d'eau glacée fixe la couleur verte. Ne pas trop cuire.",
    variantes: ["À l'ail", "Amandine"]
  },

  "haricots_verts_persilles": {
    nom: "Haricots verts persillés",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Haricots verts", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les haricots verts à l'eau salée.",
      "Les égoutter et les refroidir.",
      "Faire chauffer le beurre dans une poêle.",
      "Sauter les haricots avec l'ail haché.",
      "Parsemer de persil et servir."
    ],
    conseils: "La persillade apporte fraîcheur et couleur aux haricots.",
    variantes: ["Avec échalotes", "À la provençale"]
  },

  "haricots_flageolets": {
    nom: "Haricots flageolets",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Flageolets secs", quantite: "300 g", type: "légumineuse" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Tremper les flageolets une nuit (ou utiliser des flageolets en conserve).",
      "Les cuire avec le bouquet garni et l'oignon.",
      "Égoutter quand ils sont tendres (45 min environ).",
      "Les faire sauter dans le beurre.",
      "Parsemer de persil et servir."
    ],
    conseils: "Accompagnement classique du gigot d'agneau. Les flageolets en conserve sont très pratiques.",
    variantes: ["À la crème", "Avec lardons"]
  },

  "haricots_a_la_tomate": {
    nom: "Haricots à la tomate",
    categorie: "légumineuse",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Haricots blancs cuits", quantite: "400 g", type: "légumineuse" },
      { nom: "Tomates concassées", quantite: "400 g", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Herbes de Provence", quantite: "1 c. à café", type: "herbe" }
    ],
    etapes: [
      "Faire revenir l'oignon et l'ail émincés.",
      "Ajouter les tomates et les herbes.",
      "Laisser mijoter 15 min.",
      "Incorporer les haricots égouttés.",
      "Cuire encore 15 min à feu doux."
    ],
    conseils: "Plat méditerranéen savoureux. Peut se servir chaud ou tiède.",
    variantes: ["Avec saucisses", "Au chorizo"]
  },

  "haricots_a_la_texane": {
    nom: "Haricots à la texane",
    categorie: "légumineuse",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Haricots rouges cuits", quantite: "400 g", type: "légumineuse" },
      { nom: "Lard fumé", quantite: "100 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Sauce tomate", quantite: "200 ml", type: "sauce" },
      { nom: "Cassonade", quantite: "3 c. à soupe", type: "sucre" },
      { nom: "Moutarde", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "vinaigre" }
    ],
    etapes: [
      "Couper le lard en dés et le faire rissoler.",
      "Ajouter l'oignon émincé.",
      "Incorporer tous les autres ingrédients.",
      "Laisser mijoter 40 min à feu doux.",
      "Les haricots doivent être confits et brillants."
    ],
    conseils: "Accompagnement incontournable du BBQ américain. Saveur sucrée-fumée caractéristique.",
    variantes: ["Au bourbon", "Avec piments"]
  },

  "feves_au_lard": {
    nom: "Fèves au lard",
    categorie: "légumineuse",
    temps_preparation: 20,
    temps_cuisson: 40,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Fèves fraîches ou surgelées", quantite: "500 g", type: "légumineuse" },
      { nom: "Lardons", quantite: "150 g", type: "charcuterie" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Bouillon de volaille", quantite: "200 ml", type: "bouillon" },
      { nom: "Sarriette", quantite: "1 branche", type: "herbe" },
      { nom: "Crème fraîche", quantite: "100 ml", type: "crème" }
    ],
    etapes: [
      "Écosser et monder les fèves si fraîches.",
      "Faire rissoler les lardons avec l'oignon.",
      "Ajouter les fèves et le bouillon.",
      "Cuire avec la sarriette 20-30 min.",
      "Ajouter la crème en fin de cuisson."
    ],
    conseils: "La sarriette est l'herbe traditionnelle des fèves. Retirer la peau des fèves pour plus de finesse.",
    variantes: ["Sans crème", "Avec chorizo"]
  },

  // ===== LENTILLES =====
  "lentilles_du_puy": {
    nom: "Lentilles du Puy",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Lentilles vertes du Puy", quantite: "300 g", type: "légumineuse" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "aromate" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Rincer les lentilles (pas de trempage nécessaire).",
      "Les mettre dans une casserole, couvrir d'eau froide.",
      "Ajouter carotte, oignon et bouquet garni.",
      "Cuire 25-30 min à feu doux.",
      "Égoutter, retirer les aromates.",
      "Assaisonner et ajouter le beurre."
    ],
    conseils: "Les lentilles du Puy AOP gardent leur tenue à la cuisson. Ne pas saler l'eau de cuisson.",
    variantes: ["En salade tiède", "Avec lardons"]
  },

  "lentilles_vertes_du_puy": {
    redirect: "lentilles_du_puy"
  },

  // ===== SALADES =====
  "salade": {
    nom: "Salade verte",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Salade (laitue, batavia, feuille de chêne)", quantite: "1", type: "légume" },
      { nom: "Vinaigrette", quantite: "4 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Laver et essorer la salade.",
      "La couper ou l'effeuiller.",
      "Assaisonner de vinaigrette au moment de servir."
    ],
    conseils: "La salade verte accompagne presque tous les plats. L'assaisonner au dernier moment.",
    variantes: ["Mesclun", "Roquette", "Mâche"]
  },

  "salade_de_mache": {
    nom: "Salade de mâche",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mâche", quantite: "200 g", type: "légume" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Vinaigre de Xérès", quantite: "1 c. à soupe", type: "vinaigre" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Laver délicatement la mâche.",
      "L'essorer soigneusement.",
      "Préparer la vinaigrette à l'huile de noix.",
      "Assaisonner au moment de servir."
    ],
    conseils: "La mâche est fragile, la manipuler avec douceur. L'huile de noix la sublime.",
    variantes: ["Aux cerneaux de noix", "Aux betteraves"]
  },

  "salade_de_mache_aux_noix": {
    nom: "Salade de mâche aux noix",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mâche", quantite: "200 g", type: "légume" },
      { nom: "Cerneaux de noix", quantite: "50 g", type: "fruit sec" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Vinaigre de Xérès", quantite: "1 c. à soupe", type: "vinaigre" }
    ],
    etapes: [
      "Laver et essorer la mâche.",
      "Concasser légèrement les noix.",
      "Préparer la vinaigrette à l'huile de noix.",
      "Mélanger et servir."
    ],
    conseils: "Classique de l'hiver. Les noix du Périgord sont les meilleures.",
    variantes: ["Au roquefort", "Avec pommes"]
  },

  "salade_de_roquette": {
    nom: "Salade de roquette",
    categorie: "salade",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Roquette", quantite: "150 g", type: "légume" },
      { nom: "Parmesan en copeaux", quantite: "50 g", type: "fromage" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Citron", quantite: "1/2", type: "agrume" }
    ],
    etapes: [
      "Laver et essorer la roquette.",
      "Disposer dans un plat.",
      "Parsemer de copeaux de parmesan.",
      "Assaisonner d'huile d'olive et de citron."
    ],
    conseils: "La roquette a un goût poivré qui se marie bien avec le parmesan. Accompagne les viandes grillées.",
    variantes: ["Avec tomates cerises", "Aux pignons"]
  },

  "salade_d_herbes": {
    nom: "Salade d'herbes",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun", quantite: "100 g", type: "légume" },
      { nom: "Persil plat", quantite: "30 g", type: "herbe" },
      { nom: "Cerfeuil", quantite: "20 g", type: "herbe" },
      { nom: "Ciboulette", quantite: "20 g", type: "herbe" },
      { nom: "Estragon", quantite: "10 g", type: "herbe" },
      { nom: "Vinaigrette légère", quantite: "4 c. à soupe", type: "sauce" }
    ],
    etapes: [
      "Laver et sécher toutes les herbes.",
      "Les mélanger avec le mesclun.",
      "Assaisonner légèrement."
    ],
    conseils: "Fraîcheur et légèreté. Accompagne parfaitement les viandes grillées et poissons.",
    variantes: ["Avec fleurs comestibles", "À la menthe"]
  },

  "salade_de_tomates": {
    nom: "Salade de tomates",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates mûres", quantite: "4", type: "légume" },
      { nom: "Oignon rouge", quantite: "1/2", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Basilic frais", quantite: "quelques feuilles", type: "herbe" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les tomates en rondelles.",
      "Émincer finement l'oignon.",
      "Disposer dans un plat, arroser d'huile d'olive.",
      "Parsemer de basilic ciselé.",
      "Saler et poivrer."
    ],
    conseils: "Utiliser des tomates de saison bien mûres. Sortir du frigo 30 min avant de servir.",
    variantes: ["À la mozzarella (Caprese)", "Aux herbes de Provence"]
  },

  "salade_de_concombre": {
    nom: "Salade de concombre",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Concombre", quantite: "1 gros", type: "légume" },
      { nom: "Crème fraîche", quantite: "100 ml", type: "crème" },
      { nom: "Aneth", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Vinaigre blanc", quantite: "1 c. à soupe", type: "vinaigre" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et émincer finement le concombre.",
      "Le faire dégorger 15 min avec le sel.",
      "Égoutter et presser pour enlever l'eau.",
      "Mélanger avec la crème, le vinaigre et l'aneth."
    ],
    conseils: "Le dégorgeage élimine l'eau du concombre et le rend plus croquant.",
    variantes: ["Au yaourt", "À la menthe"]
  },

  "salade_d_endives_aux_noix": {
    nom: "Salade d'endives aux noix",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Endives", quantite: "4", type: "légume" },
      { nom: "Cerneaux de noix", quantite: "60 g", type: "fruit sec" },
      { nom: "Roquefort", quantite: "80 g", type: "fromage" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "vinaigre" }
    ],
    etapes: [
      "Effeuiller les endives et les couper en tronçons.",
      "Émietter le roquefort.",
      "Concasser les noix.",
      "Mélanger le tout avec la vinaigrette."
    ],
    conseils: "Salade d'hiver par excellence. L'amertume de l'endive s'équilibre avec le sucré des noix.",
    variantes: ["Avec pommes", "Au bleu d'Auvergne"]
  },

  "salade_de_lentilles": {
    nom: "Salade de lentilles",
    categorie: "salade",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Lentilles vertes", quantite: "250 g", type: "légumineuse" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Persil", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Vinaigre de Xérès", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Moutarde", quantite: "1 c. à café", type: "condiment" }
    ],
    etapes: [
      "Cuire les lentilles à l'eau non salée 20-25 min.",
      "Les égoutter et les laisser tiédir.",
      "Préparer la vinaigrette moutardée.",
      "Ajouter les échalotes émincées et le persil.",
      "Assaisonner tiède."
    ],
    conseils: "Assaisonner les lentilles encore tièdes pour qu'elles s'imprègnent bien de la vinaigrette.",
    variantes: ["Aux lardons", "Au saumon fumé"]
  },

  "salade_de_pommes_de_terre": {
    nom: "Salade de pommes de terre",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre à chair ferme", quantite: "800 g", type: "légume" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Vin blanc sec", quantite: "50 ml", type: "alcool" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "huile" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Ciboulette", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les pommes de terre en robe des champs.",
      "Les peler encore chaudes et les couper en rondelles.",
      "Arroser de vin blanc pendant qu'elles sont chaudes.",
      "Ajouter la vinaigrette et les échalotes.",
      "Parsemer de ciboulette."
    ],
    conseils: "Assaisonner les pommes de terre encore chaudes pour qu'elles absorbent la vinaigrette.",
    variantes: ["À la mayonnaise", "Aux cornichons et câpres"]
  },

  "salade_coleslaw": {
    nom: "Salade coleslaw",
    categorie: "salade",
    temps_preparation: 20,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Chou blanc", quantite: "400 g", type: "légume" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Mayonnaise", quantite: "150 g", type: "sauce" },
      { nom: "Vinaigre de cidre", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucre" }
    ],
    etapes: [
      "Émincer finement le chou.",
      "Râper les carottes.",
      "Mélanger mayonnaise, vinaigre et sucre.",
      "Incorporer les légumes et bien mélanger.",
      "Réfrigérer 1h avant de servir."
    ],
    conseils: "Le repos au frais permet aux saveurs de se développer et au chou de s'attendrir.",
    variantes: ["Au yaourt", "Avec raisins secs"]
  },

  "coleslaw_maison": {
    redirect: "salade_coleslaw"
  },

  "coleslaw_cremeux": {
    redirect: "salade_coleslaw"
  },

  "salade_frisee_aux_lardons": {
    nom: "Salade frisée aux lardons",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Frisée", quantite: "1", type: "légume" },
      { nom: "Lardons fumés", quantite: "150 g", type: "charcuterie" },
      { nom: "Œufs", quantite: "4", type: "œuf" },
      { nom: "Croûtons", quantite: "100 g", type: "pain" },
      { nom: "Vinaigre de vin", quantite: "3 c. à soupe", type: "vinaigre" },
      { nom: "Huile", quantite: "4 c. à soupe", type: "huile" }
    ],
    etapes: [
      "Laver et essorer la frisée.",
      "Faire rissoler les lardons.",
      "Pocher les œufs.",
      "Déglacer la poêle au vinaigre.",
      "Dresser la salade avec lardons, croûtons et œuf poché.",
      "Arroser de vinaigrette chaude."
    ],
    conseils: "Salade lyonnaise classique. La vinaigrette tiède fait légèrement flétrir la salade.",
    variantes: ["Avec foies de volaille", "À l'œuf mollet"]
  },

  "salade_aux_gesiers": {
    nom: "Salade aux gésiers",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mesclun ou frisée", quantite: "200 g", type: "légume" },
      { nom: "Gésiers confits", quantite: "200 g", type: "charcuterie" },
      { nom: "Cerneaux de noix", quantite: "50 g", type: "fruit sec" },
      { nom: "Huile de noix", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Vinaigre balsamique", quantite: "2 c. à soupe", type: "vinaigre" }
    ],
    etapes: [
      "Laver et essorer la salade.",
      "Faire réchauffer les gésiers à la poêle.",
      "Préparer la vinaigrette à l'huile de noix.",
      "Dresser la salade avec gésiers et noix.",
      "Arroser de vinaigrette."
    ],
    conseils: "Spécialité du Sud-Ouest. Les gésiers confits apportent du fondant.",
    variantes: ["Avec magret séché", "Aux pignons"]
  },

  "salade_de_gesiers": {
    redirect: "salade_aux_gesiers"
  },

  "salade_de_wakame": {
    nom: "Salade de wakame",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Wakame séché", quantite: "30 g", type: "algue" },
      { nom: "Concombre", quantite: "1/2", type: "légume" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de riz", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "huile" },
      { nom: "Graines de sésame", quantite: "1 c. à soupe", type: "garniture" }
    ],
    etapes: [
      "Réhydrater le wakame 10 min dans l'eau froide.",
      "Égoutter et couper en morceaux.",
      "Émincer finement le concombre.",
      "Mélanger avec la sauce soja, le vinaigre et l'huile.",
      "Parsemer de graines de sésame."
    ],
    conseils: "Accompagnement japonais léger et iodé. Se marie parfaitement avec les poissons et viandes grillées.",
    variantes: ["Avec edamame", "Au gingembre"]
  },

  // ===== POMMES DE TERRE =====
  "pommes_de_terre": {
    nom: "Pommes de terre",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Sel", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher les pommes de terre ou les garder en robe des champs.",
      "Les cuire à l'eau bouillante salée 20-25 min.",
      "Vérifier la cuisson avec la pointe d'un couteau.",
      "Égoutter et servir."
    ],
    conseils: "Accompagnement basique et polyvalent. Choisir la variété selon l'usage.",
    variantes: ["Vapeur", "Au four", "Sautées"]
  },

  "pommes_de_terre_vapeur": {
    nom: "Pommes de terre vapeur",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre nouvelles ou grenaille", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Laver les pommes de terre sans les éplucher.",
      "Les cuire à la vapeur 20-25 min.",
      "Les servir avec une noisette de beurre.",
      "Parsemer de persil et de fleur de sel."
    ],
    conseils: "La cuisson vapeur préserve les nutriments et la texture. Idéal avec du poisson.",
    variantes: ["Avec herbes fraîches", "À l'aneth"]
  },

  "pommes_de_terre_nouvelles": {
    redirect: "pommes_de_terre_vapeur"
  },

  "pommes_de_terre_sautees": {
    nom: "Pommes de terre sautées",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre à chair ferme", quantite: "800 g", type: "légume" },
      { nom: "Huile ou graisse de canard", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les pommes de terre en cubes ou rondelles.",
      "Les précuire 10 min à l'eau bouillante.",
      "Les égoutter et les sécher.",
      "Les faire sauter dans la matière grasse à feu vif.",
      "Ajouter l'ail et le persil en fin de cuisson."
    ],
    conseils: "Bien sécher les pommes de terre pour qu'elles dorent bien. Ne pas trop les remuer.",
    variantes: ["À la graisse de canard", "Aux oignons"]
  },

  "pommes_de_terre_roties": {
    nom: "Pommes de terre rôties",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "1 kg", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Romarin", quantite: "2 branches", type: "herbe" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Gros sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Couper les pommes de terre en quartiers.",
      "Les mélanger avec l'huile, le romarin et l'ail.",
      "Étaler sur une plaque et saler.",
      "Rôtir 40-45 min en retournant à mi-cuisson."
    ],
    conseils: "Les pommes de terre doivent être bien espacées pour rôtir et non cuire à la vapeur.",
    variantes: ["Au thym", "Avec graisse de canard"]
  },

  "pommes_de_terre_au_four": {
    nom: "Pommes de terre au four",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Grosses pommes de terre", quantite: "4", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "100 ml", type: "crème" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Préchauffer le four à 200°C.",
      "Piquer les pommes de terre avec une fourchette.",
      "Les enfourner directement sur la grille 50-60 min.",
      "Fendre en croix et garnir de beurre, crème et ciboulette."
    ],
    conseils: "Jacket potatoes à l'anglaise. Choisir des variétés farineuses type Bintje.",
    variantes: ["Avec bacon et fromage", "Tex-Mex avec guacamole"]
  },

  "pommes_de_terre_grenaille": {
    nom: "Pommes de terre grenaille",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre grenaille", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Thym", quantite: "3 branches", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Laver les grenailles sans les éplucher.",
      "Les mélanger à l'huile d'olive et au thym.",
      "Rôtir au four à 200°C pendant 25-30 min.",
      "Saler à la fleur de sel."
    ],
    conseils: "Les grenailles sont de petites pommes de terre qui se mangent avec leur peau fine.",
    variantes: ["Au romarin", "À l'ail confit"]
  },

  "pommes_de_terre_persillees": {
    nom: "Pommes de terre persillées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre nouvelles", quantite: "800 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Persil plat", quantite: "1 bouquet", type: "herbe" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau salée.",
      "Les égoutter.",
      "Faire fondre le beurre et ajouter le persil ciselé.",
      "Enrober les pommes de terre de beurre persillé."
    ],
    conseils: "Simple et savoureux. Le persil doit être ajouté hors du feu pour garder sa fraîcheur.",
    variantes: ["Avec ail", "À la ciboulette"]
  },

  "pommes_de_terre_fondantes": {
    redirect: "pommes_fondantes"
  },

  "pommes_de_terre_confites": {
    nom: "Pommes de terre confites",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 90,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Graisse de canard", quantite: "200 g", type: "matière grasse" },
      { nom: "Ail", quantite: "1 tête", type: "aromate" },
      { nom: "Thym", quantite: "4 branches", type: "herbe" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 150°C.",
      "Éplucher les pommes de terre et les couper en deux.",
      "Les disposer dans un plat avec la graisse fondue.",
      "Ajouter l'ail et le thym.",
      "Cuire 1h30 à couvert, puis 15 min à découvert."
    ],
    conseils: "Cuisson lente qui rend les pommes de terre fondantes et confites. Accompagnement du Sud-Ouest.",
    variantes: ["Avec cèpes", "Au romarin"]
  },

  "pommes_de_terre_ecrasees": {
    nom: "Pommes de terre écrasées",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Ail confit", quantite: "4 gousses", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Fleur de sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les pommes de terre à l'eau salée.",
      "Les écraser grossièrement à la fourchette.",
      "Ajouter l'huile d'olive et l'ail confit écrasé.",
      "Parsemer de persil et de fleur de sel."
    ],
    conseils: "Texture rustique, plus grossière qu'une purée. Très tendance.",
    variantes: ["À l'huile d'olive citronnée", "Aux herbes"]
  },

  "pommes_de_terre_sarladaises": {
    redirect: "pommes_sarladaises"
  },

  "pommes_a_l_huile": {
    nom: "Pommes à l'huile",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre à chair ferme", quantite: "1 kg", type: "légume" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "huile" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Persil ou ciboulette", quantite: "3 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Cuire les pommes de terre en robe des champs.",
      "Les peler et couper en rondelles encore chaudes.",
      "Assaisonner immédiatement avec huile et vinaigre.",
      "Ajouter les échalotes émincées et les herbes."
    ],
    conseils: "Assaisonner à chaud pour que les pommes de terre absorbent la vinaigrette.",
    variantes: ["Avec hareng fumé", "Au cervelas"]
  },

  // ===== FRITES =====
  "frites": {
    nom: "Frites",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Pommes de terre (Bintje)", quantite: "1 kg", type: "légume" },
      { nom: "Huile de friture", quantite: "2 L", type: "huile" },
      { nom: "Sel fin", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les pommes de terre en bâtonnets.",
      "Les rincer et bien les sécher.",
      "Première cuisson à 150°C pendant 6-7 min.",
      "Égoutter et laisser reposer.",
      "Deuxième cuisson à 180°C jusqu'à coloration dorée.",
      "Égoutter et saler immédiatement."
    ],
    conseils: "La double cuisson est le secret des vraies frites belges. La première cuisson précuit, la seconde dore.",
    variantes: ["Frites allumettes", "Frites pont-neuf"]
  },

  "frites_classiques": {
    redirect: "frites"
  },

  "frites_de_patate_douce": {
    nom: "Frites de patate douce",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Patates douces", quantite: "800 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Paprika fumé", quantite: "1 c. à café", type: "épice" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Préchauffer le four à 220°C.",
      "Éplucher et couper les patates douces en bâtonnets.",
      "Les enrober d'huile et de paprika.",
      "Étaler sur une plaque en une seule couche.",
      "Cuire 20-25 min en retournant à mi-cuisson.",
      "Saler à la sortie du four."
    ],
    conseils: "Les frites de patate douce au four sont plus légères que frites. Elles brûlent vite, surveiller la cuisson.",
    variantes: ["À la cannelle", "Au curry"]
  },

  // ===== PURÉES =====
  "puree": {
    nom: "Purée de pommes de terre",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre (Bintje, Agata)", quantite: "1 kg", type: "légume" },
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Lait chaud", quantite: "200 ml", type: "produit laitier" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les pommes de terre en morceaux.",
      "Les cuire à l'eau salée 20-25 min.",
      "Les égoutter et les écraser au presse-purée.",
      "Incorporer le beurre en morceaux.",
      "Ajouter le lait chaud progressivement.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "Ne jamais mixer la purée, cela la rend collante. Le beurre doit être froid et le lait chaud.",
    variantes: ["À l'huile d'olive", "À l'ail confit"]
  },

  "puree_de_pommes_de_terre": {
    redirect: "puree"
  },

  "puree_de_carottes": {
    nom: "Purée de carottes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carottes", quantite: "600 g", type: "légume" },
      { nom: "Pommes de terre", quantite: "200 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème", quantite: "50 ml", type: "crème" },
      { nom: "Cumin", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Éplucher et couper carottes et pommes de terre.",
      "Les cuire à l'eau salée 20-25 min.",
      "Égoutter et mixer ou passer au moulin.",
      "Incorporer le beurre et la crème.",
      "Ajouter le cumin et assaisonner."
    ],
    conseils: "La pomme de terre apporte du liant. Le cumin est optionnel mais délicieux avec les carottes.",
    variantes: ["À l'orange", "Au gingembre"]
  },

  "puree_de_celeri": {
    nom: "Purée de céleri",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri-rave", quantite: "500 g", type: "légume" },
      { nom: "Pommes de terre", quantite: "200 g", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème", quantite: "100 ml", type: "crème" },
      { nom: "Noix de muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Éplucher le céleri et les pommes de terre.",
      "Les couper en morceaux et les cuire à l'eau.",
      "Égoutter et réduire en purée.",
      "Ajouter beurre et crème.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "Le goût prononcé du céleri s'adoucit avec la pomme de terre. Excellent avec le gibier.",
    variantes: ["Avec truffe", "Aux noisettes"]
  },

  "puree_de_celeri_rave": {
    redirect: "puree_de_celeri"
  },

  "celeri_en_puree": {
    redirect: "puree_de_celeri"
  },

  "puree_de_panais": {
    nom: "Purée de panais",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Panais", quantite: "600 g", type: "légume" },
      { nom: "Pomme de terre", quantite: "1", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème", quantite: "100 ml", type: "crème" }
    ],
    etapes: [
      "Éplucher et couper panais et pomme de terre.",
      "Cuire à l'eau salée 20-25 min.",
      "Égoutter et mixer.",
      "Incorporer beurre et crème.",
      "Assaisonner."
    ],
    conseils: "Légume ancien au goût doux et sucré. Accompagnement parfait du bœuf et du gibier.",
    variantes: ["Au miel", "Aux noisettes"]
  },

  "puree_de_butternut": {
    nom: "Purée de butternut",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Courge butternut", quantite: "1 (environ 800 g)", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Crème", quantite: "50 ml", type: "crème" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Couper la butternut en deux, retirer les graines.",
      "Cuire au four à 180°C pendant 30-40 min ou à la vapeur.",
      "Prélever la chair et la mixer.",
      "Ajouter beurre et crème.",
      "Assaisonner de muscade, sel et poivre."
    ],
    conseils: "La butternut est naturellement sucrée et onctueuse. Accompagne parfaitement les viandes blanches.",
    variantes: ["Au curry", "Aux noisettes grillées"]
  },

  "puree_de_patates_douces": {
    nom: "Purée de patates douces",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Patates douces", quantite: "600 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Lait de coco", quantite: "100 ml", type: "lait végétal" },
      { nom: "Gingembre", quantite: "1 cm", type: "aromate" }
    ],
    etapes: [
      "Éplucher et couper les patates douces.",
      "Les cuire à l'eau ou à la vapeur 20-25 min.",
      "Les écraser avec le beurre et le lait de coco.",
      "Ajouter le gingembre râpé.",
      "Assaisonner."
    ],
    conseils: "Purée onctueuse et légèrement sucrée. Le lait de coco apporte une touche exotique.",
    variantes: ["À l'érable", "Au piment d'Espelette"]
  },

  "puree_de_brocoli": {
    nom: "Purée de brocoli",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Brocoli", quantite: "500 g", type: "légume" },
      { nom: "Pomme de terre", quantite: "1", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Crème", quantite: "50 ml", type: "crème" }
    ],
    etapes: [
      "Cuire le brocoli et la pomme de terre à la vapeur.",
      "Mixer finement.",
      "Ajouter beurre et crème.",
      "Assaisonner."
    ],
    conseils: "Ne pas trop cuire le brocoli pour garder sa belle couleur verte.",
    variantes: ["Au parmesan", "À l'ail"]
  },

  "puree_de_pois_casses": {
    nom: "Purée de pois cassés",
    categorie: "légumineuse",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pois cassés", quantite: "300 g", type: "légumineuse" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Crème", quantite: "50 ml", type: "crème" }
    ],
    etapes: [
      "Rincer les pois cassés.",
      "Les cuire avec l'oignon et le bouquet garni 45 min.",
      "Retirer le bouquet garni, égoutter si nécessaire.",
      "Mixer et ajouter beurre et crème.",
      "Assaisonner."
    ],
    conseils: "Accompagnement rustique du petit salé. Les pois cassés épaississent naturellement.",
    variantes: ["À la menthe", "Aux lardons"]
  },

  "puree_de_marrons": {
    nom: "Purée de marrons",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Marrons sous vide ou en conserve", quantite: "500 g", type: "légume" },
      { nom: "Lait", quantite: "200 ml", type: "produit laitier" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Céleri-branche", quantite: "1 branche", type: "légume" }
    ],
    etapes: [
      "Chauffer les marrons avec le lait et le céleri.",
      "Cuire 15-20 min jusqu'à ce qu'ils soient tendres.",
      "Retirer le céleri et mixer.",
      "Incorporer le beurre.",
      "Assaisonner."
    ],
    conseils: "Accompagnement classique de la dinde et du gibier. Le céleri apporte une note fraîche.",
    variantes: ["Au cognac", "À la vanille (version sucrée)"]
  },

  "puree_de_chataignes": {
    redirect: "puree_de_marrons"
  },

  "puree_de_topinambours": {
    nom: "Purée de topinambours",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Topinambours", quantite: "500 g", type: "légume" },
      { nom: "Pomme de terre", quantite: "1", type: "légume" },
      { nom: "Beurre noisette", quantite: "50 g", type: "produit laitier" },
      { nom: "Crème", quantite: "50 ml", type: "crème" }
    ],
    etapes: [
      "Brosser et éplucher les topinambours.",
      "Les cuire avec la pomme de terre à l'eau citronnée.",
      "Égoutter et mixer.",
      "Faire un beurre noisette et l'incorporer.",
      "Ajouter la crème et assaisonner."
    ],
    conseils: "Légume ancien au goût d'artichaut. Le beurre noisette sublime sa saveur.",
    variantes: ["Aux noisettes", "À la truffe"]
  },

  // ========== RISOTTOS ==========
  "risotto_alla_milanese": {
    nom: "Risotto alla milanese",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz arborio", quantite: "300 g", type: "féculent" },
      { nom: "Safran", quantite: "1 g (dosette)", type: "épice" },
      { nom: "Bouillon de bœuf", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Parmesan", quantite: "80 g", type: "fromage" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" }
    ],
    etapes: [
      "Infuser le safran dans le bouillon chaud.",
      "Faire revenir l'oignon émincé dans le beurre.",
      "Ajouter le riz et nacrer 2 minutes.",
      "Déglacer au vin blanc.",
      "Ajouter le bouillon safrané louche par louche.",
      "Cuire 18-20 min en remuant.",
      "Mantecare avec beurre et parmesan."
    ],
    conseils: "Accompagnement traditionnel de l'osso buco. Le safran doit être de qualité.",
    variantes: ["Avec moelle de bœuf"]
  },

  "risotto_au_parmesan": {
    nom: "Risotto au parmesan",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz arborio", quantite: "300 g", type: "féculent" },
      { nom: "Bouillon de volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Parmesan", quantite: "100 g", type: "fromage" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire revenir l'oignon émincé dans le beurre.",
      "Ajouter le riz et nacrer.",
      "Déglacer au vin blanc.",
      "Ajouter le bouillon louche par louche.",
      "Cuire 18-20 min en remuant.",
      "Finir avec parmesan râpé et beurre froid."
    ],
    conseils: "Le risotto de base, crémeux et réconfortant.",
    variantes: ["Au pecorino", "Aux deux fromages"]
  },

  "risotto_au_safran": {
    redirect: "risotto_alla_milanese"
  },

  "risotto_aux_cepes": {
    nom: "Risotto aux cèpes",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz arborio", quantite: "300 g", type: "féculent" },
      { nom: "Cèpes frais ou séchés", quantite: "200 g (frais) ou 30 g (séchés)", type: "champignon" },
      { nom: "Bouillon de volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Échalote", quantite: "2", type: "légume" },
      { nom: "Parmesan", quantite: "80 g", type: "fromage" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Persil", quantite: "1 bouquet", type: "herbe" }
    ],
    etapes: [
      "Si cèpes séchés, les réhydrater et filtrer le jus.",
      "Faire sauter les cèpes à feu vif dans le beurre.",
      "Réserver les cèpes, faire revenir les échalotes.",
      "Ajouter le riz et nacrer.",
      "Déglacer au vin blanc.",
      "Ajouter bouillon (+ jus de cèpes) louche par louche.",
      "En fin de cuisson, incorporer les cèpes.",
      "Finir avec parmesan et beurre."
    ],
    conseils: "Les cèpes séchés ont plus de goût, les frais plus de texture. Idéalement, combiner les deux.",
    variantes: ["Aux morilles", "Aux girolles"]
  },

  "risotto_aux_herbes": {
    nom: "Risotto aux herbes",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Riz arborio", quantite: "300 g", type: "féculent" },
      { nom: "Bouillon de légumes", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Échalote", quantite: "2", type: "légume" },
      { nom: "Herbes fraîches (basilic, persil, ciboulette)", quantite: "1 bouquet de chaque", type: "herbe" },
      { nom: "Parmesan", quantite: "80 g", type: "fromage" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" }
    ],
    etapes: [
      "Ciseler finement les herbes.",
      "Faire revenir les échalotes dans le beurre.",
      "Ajouter le riz et nacrer.",
      "Déglacer au vin blanc.",
      "Ajouter le bouillon louche par louche.",
      "En fin de cuisson, incorporer les herbes.",
      "Finir avec parmesan et beurre."
    ],
    conseils: "Les herbes s'ajoutent à la fin pour garder fraîcheur et couleur.",
    variantes: ["À la menthe", "À l'estragon"]
  },

  "risotto_aux_truffes": {
    nom: "Risotto aux truffes",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Riz arborio", quantite: "300 g", type: "féculent" },
      { nom: "Truffe noire ou blanche", quantite: "30-50 g", type: "champignon" },
      { nom: "Bouillon de volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Échalote", quantite: "1", type: "légume" },
      { nom: "Parmesan", quantite: "80 g", type: "fromage" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Huile de truffe", quantite: "1 c. à soupe", type: "huile" }
    ],
    etapes: [
      "Nettoyer délicatement la truffe et râper la moitié.",
      "Faire revenir l'échalote dans le beurre.",
      "Ajouter le riz et nacrer.",
      "Déglacer au vin blanc.",
      "Ajouter le bouillon louche par louche.",
      "Incorporer la truffe râpée en fin de cuisson.",
      "Finir avec parmesan et beurre.",
      "Servir avec des lamelles de truffe fraîche."
    ],
    conseils: "Plat de luxe. Ne pas masquer la truffe avec d'autres saveurs fortes.",
    variantes: ["Truffe blanche d'Alba", "Truffe d'été"]
  },

  // ========== RIZ ET PÂTES ==========
  "riz": {
    nom: "Riz",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Riz basmati ou long grain", quantite: "250 g", type: "féculent" },
      { nom: "Eau", quantite: "500 ml", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Rincer le riz à l'eau froide jusqu'à ce que l'eau soit claire.",
      "Porter l'eau salée à ébullition.",
      "Ajouter le riz, couvrir et réduire le feu.",
      "Cuire 12-15 min jusqu'à absorption de l'eau.",
      "Laisser reposer 5 min à couvert avant de servir."
    ],
    conseils: "Le rinçage élimine l'excès d'amidon pour un riz non collant.",
    variantes: ["Riz pilaf", "Riz à la créole"]
  },

  "nouilles": {
    nom: "Nouilles",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Nouilles aux œufs", quantite: "400 g", type: "féculent" },
      { nom: "Eau", quantite: "3 L", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Porter l'eau à ébullition avec le sel.",
      "Ajouter les nouilles et cuire selon le temps indiqué.",
      "Égoutter en réservant un peu d'eau de cuisson.",
      "Servir aussitôt."
    ],
    conseils: "Les nouilles aux œufs accompagnent parfaitement les plats en sauce.",
    variantes: ["Nouilles asiatiques", "Nouilles fraîches"]
  },

  "nouilles_au_beurre": {
    nom: "Nouilles au beurre",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Nouilles aux œufs", quantite: "400 g", type: "féculent" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les nouilles al dente.",
      "Égoutter en gardant un peu d'eau.",
      "Faire fondre le beurre dans une poêle.",
      "Ajouter les nouilles et mélanger.",
      "Parsemer de persil, saler et poivrer."
    ],
    conseils: "Accompagnement classique des ragoûts et plats en sauce.",
    variantes: ["À la ciboulette", "Aux graines de pavot"]
  },

  "pates": {
    nom: "Pâtes",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 12,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pâtes (penne, fusilli, farfalle...)", quantite: "400 g", type: "féculent" },
      { nom: "Eau", quantite: "4 L", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Porter l'eau à ébullition avec le sel.",
      "Ajouter les pâtes et remuer.",
      "Cuire al dente selon le temps indiqué.",
      "Égoutter en réservant l'eau de cuisson.",
      "Servir immédiatement."
    ],
    conseils: "1 L d'eau pour 100 g de pâtes. L'eau doit être bien salée.",
    variantes: ["Pâtes fraîches", "Pâtes complètes"]
  },

  "pates_au_beurre": {
    nom: "Pâtes au beurre",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 12,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pâtes", quantite: "400 g", type: "féculent" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Parmesan râpé", quantite: "50 g", type: "fromage" },
      { nom: "Poivre noir", quantite: "À convenance", type: "épice" }
    ],
    etapes: [
      "Cuire les pâtes al dente.",
      "Égoutter en gardant un peu d'eau.",
      "Mélanger avec le beurre froid coupé en dés.",
      "Ajouter le parmesan et l'eau de cuisson.",
      "Poivrer généreusement."
    ],
    conseils: "Simple mais délicieux. Le beurre froid crée une émulsion crémeuse.",
    variantes: ["Au beurre de sauge", "Au beurre d'ail"]
  },

  "spatzle_maison": {
    nom: "Spätzle maison",
    categorie: "féculent",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Farine", quantite: "300 g", type: "féculent" },
      { nom: "Œufs", quantite: "4", type: "œuf" },
      { nom: "Eau ou lait", quantite: "100 ml", type: "liquide" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Mélanger farine, œufs, sel et muscade.",
      "Ajouter l'eau progressivement pour une pâte épaisse.",
      "Laisser reposer 30 min.",
      "Passer au presse-spätzle au-dessus d'eau bouillante.",
      "Récupérer quand ils remontent à la surface.",
      "Égoutter et servir."
    ],
    conseils: "Spécialité alsacienne et allemande. Peuvent être rissolés au beurre.",
    variantes: ["Aux herbes", "Au fromage"]
  },

  "spatzle_au_beurre": {
    nom: "Spätzle au beurre",
    categorie: "féculent",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Spätzle (frais ou maison)", quantite: "500 g", type: "féculent" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Cuire les spätzle dans l'eau bouillante.",
      "Égoutter quand ils remontent.",
      "Faire fondre le beurre dans une poêle.",
      "Faire sauter les spätzle jusqu'à légèrement dorés.",
      "Parsemer de persil, assaisonner."
    ],
    conseils: "Accompagnement traditionnel du gibier et des viandes en sauce.",
    variantes: ["Gratinés au fromage", "À l'oignon caramélisé"]
  },

  "gnocchis_dores": {
    nom: "Gnocchis dorés",
    categorie: "féculent",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Gnocchis de pommes de terre", quantite: "500 g", type: "féculent" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "huile" },
      { nom: "Parmesan râpé", quantite: "50 g", type: "fromage" },
      { nom: "Sauge", quantite: "8 feuilles", type: "herbe" }
    ],
    etapes: [
      "Cuire les gnocchis dans l'eau bouillante.",
      "Égoutter dès qu'ils remontent.",
      "Chauffer beurre et huile dans une poêle.",
      "Faire dorer les gnocchis 5-7 min en les retournant.",
      "Ajouter la sauge et le parmesan.",
      "Servir aussitôt."
    ],
    conseils: "Les gnocchis doivent être bien dorés et croustillants à l'extérieur.",
    variantes: ["Au gorgonzola", "Au pesto"]
  },

  "polenta_aux_herbes": {
    nom: "Polenta aux herbes",
    categorie: "féculent",
    temps_preparation: 5,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Polenta", quantite: "200 g", type: "féculent" },
      { nom: "Eau ou bouillon", quantite: "800 ml", type: "liquide" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Parmesan", quantite: "60 g", type: "fromage" },
      { nom: "Herbes fraîches (thym, romarin)", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Porter le liquide à ébullition.",
      "Verser la polenta en pluie en remuant.",
      "Cuire 25-30 min en remuant régulièrement.",
      "Incorporer beurre, parmesan et herbes.",
      "Servir crémeuse ou laisser refroidir pour griller."
    ],
    conseils: "La polenta peut être servie crémeuse ou solidifiée puis grillée.",
    variantes: ["Au mascarpone", "À la truffe"]
  },

  // ========== GRATINS ==========
  "gratin_de_pommes_de_terre": {
    nom: "Gratin de pommes de terre",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes de terre", quantite: "1 kg", type: "légume" },
      { nom: "Crème fraîche", quantite: "300 ml", type: "crème" },
      { nom: "Lait", quantite: "200 ml", type: "produit laitier" },
      { nom: "Ail", quantite: "2 gousses", type: "condiment" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Frotter un plat à gratin avec l'ail.",
      "Éplucher et trancher finement les pommes de terre.",
      "Mélanger crème, lait et muscade.",
      "Disposer les pommes de terre en couches.",
      "Verser le mélange crème/lait.",
      "Parsemer de noisettes de beurre.",
      "Cuire au four à 180°C pendant 1h."
    ],
    conseils: "Les pommes de terre ne doivent pas être rincées après tranchage - l'amidon lie le gratin.",
    variantes: ["Dauphinois au fromage", "Savoyard"]
  },

  "gratin_de_courgettes": {
    nom: "Gratin de courgettes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Courgettes", quantite: "800 g", type: "légume" },
      { nom: "Crème fraîche", quantite: "200 ml", type: "crème" },
      { nom: "Œufs", quantite: "2", type: "œuf" },
      { nom: "Gruyère râpé", quantite: "100 g", type: "fromage" },
      { nom: "Ail", quantite: "1 gousse", type: "condiment" },
      { nom: "Thym", quantite: "1 c. à café", type: "herbe" }
    ],
    etapes: [
      "Trancher les courgettes en rondelles.",
      "Les faire revenir à la poêle 5 min.",
      "Mélanger crème, œufs, ail et thym.",
      "Disposer les courgettes dans un plat.",
      "Verser le mélange et couvrir de fromage.",
      "Cuire au four à 180°C pendant 30 min."
    ],
    conseils: "Faire dégorger les courgettes au sel évite un gratin aqueux.",
    variantes: ["À la menthe", "Au chèvre"]
  },

  "gratin_de_courge": {
    nom: "Gratin de courge",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Courge (butternut, potimarron)", quantite: "800 g", type: "légume" },
      { nom: "Crème", quantite: "200 ml", type: "crème" },
      { nom: "Gruyère râpé", quantite: "100 g", type: "fromage" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" },
      { nom: "Sauge", quantite: "6 feuilles", type: "herbe" }
    ],
    etapes: [
      "Éplucher et couper la courge en cubes.",
      "Précuire à la vapeur 10 min.",
      "Disposer dans un plat à gratin.",
      "Mélanger crème, muscade et sauge ciselée.",
      "Verser sur la courge et couvrir de fromage.",
      "Cuire au four à 180°C pendant 35 min."
    ],
    conseils: "La courge butternut est naturellement sucrée, la sauge équilibre.",
    variantes: ["Au parmesan", "Aux noisettes"]
  },

  "gratin_de_potimarron": {
    redirect: "gratin_de_courge"
  },

  "gratin_de_legumes": {
    nom: "Gratin de légumes",
    categorie: "légume",
    temps_preparation: 25,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Courgettes", quantite: "2", type: "légume" },
      { nom: "Aubergines", quantite: "1", type: "légume" },
      { nom: "Tomates", quantite: "3", type: "légume" },
      { nom: "Poivrons", quantite: "1", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Crème fraîche", quantite: "200 ml", type: "crème" },
      { nom: "Gruyère râpé", quantite: "100 g", type: "fromage" },
      { nom: "Herbes de Provence", quantite: "1 c. à café", type: "herbe" }
    ],
    etapes: [
      "Couper tous les légumes en rondelles ou dés.",
      "Faire revenir l'oignon et les poivrons.",
      "Ajouter aubergines et courgettes, cuire 10 min.",
      "Disposer dans un plat, ajouter les tomates.",
      "Verser la crème assaisonnée d'herbes.",
      "Couvrir de fromage et cuire 25 min à 180°C."
    ],
    conseils: "Varier les légumes selon la saison.",
    variantes: ["À la provençale", "Au fromage de chèvre"]
  },

  // ========== LÉGUMES DU POT-AU-FEU ==========
  "legumes_du_pot_au_feu": {
    nom: "Légumes du pot-au-feu",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Carottes", quantite: "4", type: "légume" },
      { nom: "Poireaux", quantite: "3", type: "légume" },
      { nom: "Navets", quantite: "3", type: "légume" },
      { nom: "Céleri branche", quantite: "3 branches", type: "légume" },
      { nom: "Pommes de terre", quantite: "4", type: "légume" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "légume" },
      { nom: "Bouillon de bœuf", quantite: "2 L", type: "bouillon" }
    ],
    etapes: [
      "Éplucher et tailler les légumes en gros morceaux.",
      "Ficeler les poireaux.",
      "Cuire les légumes dans le bouillon frémissant.",
      "Ajouter les pommes de terre en dernier (20 min avant la fin).",
      "Cuire jusqu'à tendreté mais en gardant la forme.",
      "Servir avec gros sel, moutarde et cornichons."
    ],
    conseils: "Les légumes traditionnels du pot-au-feu. Cuire à feu doux pour ne pas les écraser.",
    variantes: ["Avec panais", "Avec rutabaga"]
  },

  "legumes_de_pot_au_feu": {
    redirect: "legumes_du_pot_au_feu"
  },

  "legumes_de_saison": {
    nom: "Légumes de saison",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes de saison variés", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Herbes fraîches", quantite: "1 bouquet", type: "herbe" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Préparer les légumes selon leur type.",
      "Cuire selon la méthode adaptée (vapeur, rôtis, sautés).",
      "Assaisonner d'huile d'olive et herbes.",
      "Servir aussitôt."
    ],
    conseils: "Adapter les légumes selon la saison : asperges au printemps, tomates en été, courges en automne, choux en hiver.",
    variantes: ["Rôtis au four", "Vapeur", "Sautés au wok"]
  },

  "legumes_de_saison_grilles": {
    nom: "Légumes de saison grillés",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés (courgettes, poivrons, aubergines...)", quantite: "600 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Herbes de Provence", quantite: "1 c. à café", type: "herbe" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les légumes en tranches épaisses.",
      "Les badigeonner d'huile et herbes.",
      "Griller sur barbecue ou plancha chaude.",
      "Retourner quand des marques apparaissent.",
      "Servir chaud ou tiède."
    ],
    conseils: "Idéal pour accompagner les viandes grillées. Les légumes doivent être marqués mais pas carbonisés.",
    variantes: ["Marinés au vinaigre balsamique", "À l'ail confit"]
  },

  "petits_legumes_glaces": {
    nom: "Petits légumes glacés",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Carottes nouvelles", quantite: "200 g", type: "légume" },
      { nom: "Navets nouveaux", quantite: "200 g", type: "légume" },
      { nom: "Oignons grelots", quantite: "150 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Bouillon", quantite: "200 ml", type: "bouillon" }
    ],
    etapes: [
      "Éplucher et tourner les légumes.",
      "Les disposer en une couche dans une sauteuse.",
      "Ajouter beurre, sucre et bouillon à hauteur.",
      "Cuire à couvert jusqu'à évaporation du liquide.",
      "Continuer à feu doux pour glacer les légumes.",
      "Ils doivent être brillants et légèrement caramélisés."
    ],
    conseils: "Technique classique française. Les légumes cuisent et se glacent en même temps.",
    variantes: ["À la menthe", "Au miel"]
  },

  "petits_oignons_glaces": {
    nom: "Petits oignons glacés",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons grelots", quantite: "400 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Bouillon", quantite: "150 ml", type: "bouillon" }
    ],
    etapes: [
      "Éplucher les oignons en gardant la base intacte.",
      "Les faire revenir dans le beurre.",
      "Ajouter le sucre et laisser caraméliser légèrement.",
      "Mouiller au bouillon et cuire à couvert 20 min.",
      "Découvrir et laisser réduire jusqu'à glaçage."
    ],
    conseils: "Accompagnement classique du bœuf bourguignon et du coq au vin.",
    variantes: ["Au vinaigre balsamique", "À la grenadine"]
  },

  // ========== PETITS POIS ==========
  "petits_pois_a_la_francaise": {
    nom: "Petits pois à la française",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits pois frais ou surgelés", quantite: "500 g", type: "légume" },
      { nom: "Laitue", quantite: "1 cœur", type: "légume" },
      { nom: "Oignons nouveaux", quantite: "1 botte", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Bouillon", quantite: "100 ml", type: "bouillon" }
    ],
    etapes: [
      "Émincer la laitue en chiffonnade.",
      "Couper les oignons nouveaux.",
      "Faire revenir oignons et laitue dans le beurre.",
      "Ajouter les petits pois, le sucre et le bouillon.",
      "Cuire à couvert 20-25 min à feu doux.",
      "Le liquide doit être presque évaporé."
    ],
    conseils: "La laitue apporte fraîcheur et fond délicatement. Recette classique française.",
    variantes: ["Aux lardons", "À la menthe"]
  },

  "petits_pois_frais": {
    nom: "Petits pois frais",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Petits pois frais (en cosses)", quantite: "1 kg", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Menthe fraîche", quantite: "quelques feuilles", type: "herbe" },
      { nom: "Sel", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Écosser les petits pois.",
      "Les cuire à l'eau bouillante salée 8-12 min.",
      "Égoutter et rafraîchir rapidement.",
      "Faire sauter au beurre.",
      "Ajouter la menthe ciselée et servir."
    ],
    conseils: "Les petits pois frais sont de saison au printemps. Bien meilleurs que les surgelés.",
    variantes: ["Nature", "À la crème"]
  },

  // ========== CÉLERIS ==========
  "celeri_rave_remoulade": {
    nom: "Céleri-rave rémoulade",
    categorie: "salade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri-rave", quantite: "1 (environ 500 g)", type: "légume" },
      { nom: "Mayonnaise", quantite: "150 g", type: "sauce" },
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Citron", quantite: "1", type: "agrume" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher le céleri-rave.",
      "Le râper finement ou le couper en julienne.",
      "Citronner immédiatement pour éviter l'oxydation.",
      "Mélanger mayonnaise et moutarde.",
      "Assaisonner le céleri avec la sauce.",
      "Parsemer de persil et réfrigérer 30 min."
    ],
    conseils: "Classique des entrées françaises. La moutarde forte équilibre la douceur du céleri.",
    variantes: ["Allégée au yaourt", "À la ciboulette"]
  },

  "celeri_et_carotte": {
    nom: "Céleri et carotte",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Céleri branche", quantite: "4 branches", type: "légume" },
      { nom: "Carottes", quantite: "3", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Bouillon", quantite: "100 ml", type: "bouillon" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Éplucher et tailler les carottes en bâtonnets.",
      "Émincer le céleri branche.",
      "Faire revenir dans le beurre 5 min.",
      "Ajouter le bouillon et cuire à couvert 15 min.",
      "Parsemer de persil et servir."
    ],
    conseils: "Combinaison classique qui accompagne bien les viandes blanches.",
    variantes: ["Glacés au miel", "Au thym"]
  },

  // ========== OS À MOELLE ==========
  "os_a_moelle": {
    nom: "Os à moelle",
    categorie: "viande",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Os à moelle", quantite: "4 tronçons", type: "viande" },
      { nom: "Gros sel", quantite: "Pour servir", type: "assaisonnement" },
      { nom: "Pain grillé", quantite: "4 tranches", type: "pain" },
      { nom: "Fleur de sel", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Faire dégorger les os à l'eau froide 2h.",
      "Les pocher dans l'eau frémissante 15-20 min.",
      "Ne pas faire bouillir pour garder la moelle entière.",
      "Servir avec du pain grillé et du gros sel."
    ],
    conseils: "Accompagnement traditionnel du pot-au-feu. La moelle doit être fondante mais tenir.",
    variantes: ["Rôtis au four", "Gratinés"]
  },

  "os_a_moelle_gratine": {
    nom: "Os à moelle gratiné",
    categorie: "viande",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Os à moelle", quantite: "4 tronçons", type: "viande" },
      { nom: "Chapelure", quantite: "4 c. à soupe", type: "pain" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Échalote", quantite: "1", type: "légume" },
      { nom: "Fleur de sel", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Faire dégorger les os 2h à l'eau froide.",
      "Mélanger chapelure, persil et échalote ciselée.",
      "Disposer les os debout dans un plat.",
      "Couvrir de chapelure persillée.",
      "Gratiner au four à 220°C pendant 12-15 min.",
      "Servir avec fleur de sel."
    ],
    conseils: "Version élégante de l'os à moelle. La croûte ajoute du croquant.",
    variantes: ["Au parmesan", "À la truffe"]
  },

  // ========== ÉCHALOTES ET NAVETS ==========
  "echalottes_confites": {
    nom: "Échalotes confites",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Échalotes", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vinaigre balsamique", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Thym", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Éplucher les échalotes en gardant la base.",
      "Les faire revenir dans le beurre.",
      "Ajouter miel et vinaigre balsamique.",
      "Ajouter le thym et un peu d'eau.",
      "Cuire à couvert à feu doux 40 min.",
      "Découvrir pour caraméliser légèrement."
    ],
    conseils: "Accompagnement doux et sucré idéal pour le magret de canard.",
    variantes: ["Au vin rouge", "À l'orange"]
  },

  "navets_confits_au_miel": {
    nom: "Navets confits au miel",
    categorie: "légume",
    temps_preparation: 10,
    temps_cuisson: 35,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Navets", quantite: "500 g", type: "légume" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Miel", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Bouillon", quantite: "150 ml", type: "bouillon" },
      { nom: "Thym", quantite: "quelques branches", type: "herbe" }
    ],
    etapes: [
      "Éplucher et couper les navets en quartiers.",
      "Les faire revenir dans le beurre.",
      "Ajouter le miel et caraméliser légèrement.",
      "Mouiller au bouillon et ajouter le thym.",
      "Cuire à couvert 25 min.",
      "Découvrir et glacer à feu vif."
    ],
    conseils: "Le miel adoucit l'amertume naturelle du navet.",
    variantes: ["À l'orange", "Au vinaigre de cidre"]
  },

  // ========== FRUITS CUITS ==========
  "pommes_au_four": {
    nom: "Pommes au four",
    categorie: "fruit",
    temps_preparation: 10,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes (Boskoop, Canada)", quantite: "4", type: "fruit" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre cassonade", quantite: "4 c. à soupe", type: "sucre" },
      { nom: "Cannelle", quantite: "1 c. à café", type: "épice" },
      { nom: "Raisins secs", quantite: "50 g", type: "fruit sec" }
    ],
    etapes: [
      "Préchauffer le four à 180°C.",
      "Évider les pommes sans percer le fond.",
      "Mélanger beurre mou, sucre, cannelle et raisins.",
      "Garnir le centre des pommes.",
      "Cuire au four 35-40 min.",
      "Servir tiède avec le jus de cuisson."
    ],
    conseils: "Accompagnement traditionnel du boudin noir et du rôti de porc.",
    variantes: ["Au miel", "Aux amandes"]
  },

  "pommes_fruit_sautees": {
    nom: "Pommes fruit sautées",
    categorie: "fruit",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pommes", quantite: "3", type: "fruit" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Calvados (facultatif)", quantite: "2 c. à soupe", type: "alcool" }
    ],
    etapes: [
      "Éplucher et couper les pommes en quartiers.",
      "Faire fondre le beurre dans une poêle.",
      "Faire sauter les pommes à feu vif.",
      "Ajouter le sucre et caraméliser.",
      "Flamber au calvados si désiré.",
      "Servir aussitôt."
    ],
    conseils: "Accompagnement express pour le boudin et le porc.",
    variantes: ["Au cidre", "À la vanille"]
  },

  "poires_au_vin": {
    nom: "Poires au vin",
    categorie: "fruit",
    temps_preparation: 10,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Poires fermes", quantite: "4", type: "fruit" },
      { nom: "Vin rouge", quantite: "500 ml", type: "alcool" },
      { nom: "Sucre", quantite: "100 g", type: "sucre" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" },
      { nom: "Clou de girofle", quantite: "2", type: "épice" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Éplucher les poires en gardant la queue.",
      "Porter vin, sucre et épices à ébullition.",
      "Pocher les poires 30-40 min à feu doux.",
      "Les retirer et réduire le sirop.",
      "Napper les poires de sirop.",
      "Servir tiède ou froid."
    ],
    conseils: "Accompagnement élégant pour le gibier.",
    variantes: ["Au vin blanc", "Épicées au poivre"]
  },

  "poire_pochee_au_vin": {
    redirect: "poires_au_vin"
  },

  "pruneaux_au_vin": {
    nom: "Pruneaux au vin",
    categorie: "fruit",
    temps_preparation: 5,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pruneaux d'Agen", quantite: "300 g", type: "fruit sec" },
      { nom: "Vin rouge", quantite: "400 ml", type: "alcool" },
      { nom: "Sucre", quantite: "50 g", type: "sucre" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" },
      { nom: "Zeste de citron", quantite: "1", type: "agrume" }
    ],
    etapes: [
      "Mettre les pruneaux dans une casserole.",
      "Ajouter vin, sucre, cannelle et zeste.",
      "Porter à frémissement.",
      "Cuire 25-30 min à feu doux.",
      "Laisser refroidir dans le sirop."
    ],
    conseils: "Accompagnement classique du lapin et du gibier.",
    variantes: ["Au thé", "À l'armagnac"]
  },

  // ========== POIVRONS ==========
  "pimientos_de_padron": {
    nom: "Pimientos de Padrón",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pimientos de Padrón", quantite: "300 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Gros sel", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Chauffer l'huile d'olive à feu vif.",
      "Ajouter les pimientos et faire sauter 3-4 min.",
      "Ils doivent être cloqués et légèrement dorés.",
      "Égoutter et saler au gros sel.",
      "Servir aussitôt."
    ],
    conseils: "Tapa espagnole classique. Attention, certains sont piquants !",
    variantes: ["À la fleur de sel", "Au piment d'Espelette"]
  },

  "poivrons_piquillos": {
    nom: "Poivrons piquillos",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Poivrons piquillos (bocal)", quantite: "400 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "huile" },
      { nom: "Ail", quantite: "1 gousse", type: "condiment" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Égoutter les piquillos.",
      "Les réchauffer doucement dans l'huile avec l'ail.",
      "Parsemer de persil.",
      "Servir tiède."
    ],
    conseils: "Les piquillos sont des poivrons doux du Pays Basque espagnol, déjà grillés et pelés.",
    variantes: ["Farcis à la morue", "À l'huile d'olive vierge"]
  },

  // ========== AUTRES ==========
  "tian_de_legumes": {
    nom: "Tian de légumes",
    categorie: "légume",
    temps_preparation: 20,
    temps_cuisson: 50,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Courgettes", quantite: "2", type: "légume" },
      { nom: "Tomates", quantite: "4", type: "légume" },
      { nom: "Aubergine", quantite: "1", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "huile" },
      { nom: "Herbes de Provence", quantite: "2 c. à café", type: "herbe" },
      { nom: "Ail", quantite: "2 gousses", type: "condiment" }
    ],
    etapes: [
      "Trancher finement tous les légumes.",
      "Étaler l'oignon émincé et l'ail au fond d'un plat huilé.",
      "Disposer les tranches de légumes en alternance debout.",
      "Arroser d'huile d'olive.",
      "Parsemer d'herbes de Provence.",
      "Cuire au four à 180°C pendant 45-50 min."
    ],
    conseils: "Spécialité provençale. Les légumes doivent être de taille similaire.",
    variantes: ["Au chèvre", "À la feta"]
  },

  "wok_de_legumes": {
    nom: "Wok de légumes",
    categorie: "légume",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Légumes variés (poivrons, carottes, brocoli, pois gourmands)", quantite: "600 g", type: "légume" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "huile" },
      { nom: "Sauce soja", quantite: "3 c. à soupe", type: "sauce" },
      { nom: "Gingembre frais", quantite: "2 cm", type: "condiment" },
      { nom: "Ail", quantite: "2 gousses", type: "condiment" },
      { nom: "Graines de sésame", quantite: "2 c. à soupe", type: "graine" }
    ],
    etapes: [
      "Préparer tous les légumes en morceaux uniformes.",
      "Chauffer le wok à feu très vif.",
      "Ajouter l'huile, l'ail et le gingembre.",
      "Faire sauter les légumes par ordre de dureté.",
      "Ajouter la sauce soja.",
      "Parsemer de graines de sésame."
    ],
    conseils: "Le wok doit être très chaud. Les légumes doivent rester croquants.",
    variantes: ["Aux cacahuètes", "Au miel"]
  },

  "epi_de_mais_grille": {
    nom: "Épi de maïs grillé",
    categorie: "légume",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Épis de maïs", quantite: "4", type: "légume" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" },
      { nom: "Piment d'Espelette (facultatif)", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Précuire les épis à l'eau bouillante 8 min.",
      "Les égoutter et badigeonner de beurre.",
      "Griller sur barbecue ou plancha 5-7 min.",
      "Tourner régulièrement pour colorer uniformément.",
      "Saler, poivrer et servir avec du beurre."
    ],
    conseils: "Accompagnement festif typiquement américain mais adopté partout.",
    variantes: ["Au parmesan", "Au beurre d'herbes"]
  },

  "marrons_glaces": {
    nom: "Marrons glacés",
    categorie: "accompagnement",
    temps_preparation: 30,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Marrons (ou châtaignes)", quantite: "500 g", type: "fruit" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Bouillon", quantite: "100 ml", type: "bouillon" }
    ],
    etapes: [
      "Inciser et cuire les marrons 15 min.",
      "Les éplucher encore chauds.",
      "Faire revenir dans le beurre.",
      "Ajouter sucre et bouillon.",
      "Glacer en remuant délicatement.",
      "Servir brillants et dorés."
    ],
    conseils: "Accompagnement de fête pour gibier et volaille. Attention à ne pas les briser.",
    variantes: ["À la vanille", "Au cognac"]
  },

  "truffe_fraiche": {
    nom: "Truffe fraîche",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Truffe noire ou blanche", quantite: "30-50 g", type: "champignon" },
      { nom: "Fleur de sel", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Nettoyer délicatement la truffe avec une brosse.",
      "Râper ou émincer finement au dernier moment.",
      "Disposer sur le plat chaud.",
      "Assaisonner de fleur de sel.",
      "Servir immédiatement."
    ],
    conseils: "La truffe s'utilise crue en finition. La chaleur du plat libère ses arômes.",
    variantes: ["Truffe d'été", "Truffe de Bourgogne"]
  },

  "gros_sel_de_guerande": {
    nom: "Gros sel de Guérande",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Gros sel de Guérande", quantite: "À convenance", type: "assaisonnement" }
    ],
    etapes: [
      "Servir dans une coupelle à part.",
      "Chaque convive se sert selon son goût."
    ],
    conseils: "Le gros sel de Guérande est un sel marin naturel récolté à la main en Bretagne. Idéal avec pot-au-feu et viandes bouillies.",
    variantes: ["Fleur de sel", "Sel gris"]
  },

  // ========== ENTRÉES SPÉCIALES ET N/A ==========
  "anticuchos_peruviens": {
    nom: "Anticuchos péruviens",
    categorie: "entrée",
    temps_preparation: 30,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cœur de bœuf", quantite: "500 g", type: "viande" },
      { nom: "Piment aji panca", quantite: "3 c. à soupe", type: "épice" },
      { nom: "Ail", quantite: "4 gousses", type: "condiment" },
      { nom: "Vinaigre", quantite: "3 c. à soupe", type: "vinaigre" },
      { nom: "Cumin", quantite: "1 c. à café", type: "épice" },
      { nom: "Huile", quantite: "3 c. à soupe", type: "huile" }
    ],
    etapes: [
      "Couper le cœur en cubes de 3 cm.",
      "Préparer la marinade avec tous les ingrédients.",
      "Mariner minimum 4h (idéalement une nuit).",
      "Enfiler sur des brochettes.",
      "Griller à feu vif 3-4 min de chaque côté.",
      "Servir avec des pommes de terre."
    ],
    conseils: "Spécialité péruvienne de rue. Le cœur de bœuf est tendre et savoureux.",
    variantes: ["Au poulet", "Aux fruits de mer"]
  },

  "aperitif_chips": {
    nom: "Apéritif (chips)",
    categorie: "apéritif",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Chips", quantite: "200 g", type: "snack" }
    ],
    etapes: [
      "Servir les chips dans un bol.",
      "Accompagner de sauces dipping si désiré."
    ],
    conseils: "Simple accompagnement d'apéritif pour les plats informels.",
    variantes: ["Chips maison", "Chips de légumes"]
  },

  "sauce_dipping": {
    nom: "Sauce dipping",
    categorie: "sauce",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "4 c. à soupe", type: "sauce" },
      { nom: "Vinaigre de riz", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Huile de sésame", quantite: "1 c. à café", type: "huile" },
      { nom: "Gingembre râpé", quantite: "1 c. à café", type: "condiment" },
      { nom: "Ciboulette", quantite: "1 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Laisser reposer 10 min pour que les saveurs se mêlent.",
      "Servir dans de petits bols individuels."
    ],
    conseils: "Sauce d'accompagnement pour les brochettes et viandes grillées asiatiques.",
    variantes: ["Au piment", "Au citron vert"]
  },

  "entrecote": {
    nom: "Entrecôte",
    categorie: "viande",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Entrecôte", quantite: "250-300 g", type: "viande" },
      { nom: "Sel et poivre", quantite: "À convenance", type: "assaisonnement" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Sortir la viande 30 min avant cuisson.",
      "Saisir à feu vif 3-4 min de chaque côté.",
      "Ajouter le beurre et arroser.",
      "Laisser reposer 5 min avant de servir."
    ],
    conseils: "Morceau noble à griller, persillé et savoureux.",
    variantes: ["Sauce béarnaise", "Beurre maître d'hôtel"]
  },

  "n_a_accompagne_les_rotis": {
    nom: "Accompagnement pour rôtis",
    categorie: "note",
    description: "Les rôtis s'accompagnent traditionnellement de pommes de terre (rôties, en gratin, purée), légumes du jardin, haricots verts, carottes glacées ou salade verte.",
    redirect: "pommes_de_terre_roties"
  },

  "n_a_ingredient_de_base": {
    nom: "Ingrédient de base",
    categorie: "note",
    description: "Cet élément est un ingrédient de base utilisé dans de nombreuses préparations.",
    redirect: "riz"
  },

  "selon_la_preparation_enveloppee": {
    nom: "Selon la préparation enveloppée",
    categorie: "note",
    description: "L'accompagnement dépend de la préparation enveloppée (en croûte, en papillote, etc.). Généralement une salade verte ou des légumes de saison.",
    redirect: "legumes_de_saison"
  },

  // Entrée pour les produits non-viande (gras, crépine)
  "N/A": {
    nom: "N/A - Produit de cuisson",
    categorie: "note",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Aucun ingrédient", quantite: "N/A", type: "note" }
    ],
    etapes: [
      "Ce produit (gras de bardage, crépine, etc.) est utilisé pour la préparation ou la cuisson d'autres viandes.",
      "Il ne nécessite pas d'accompagnement car il n'est pas consommé seul."
    ],
    description: "Produit de cuisson ou de préparation, ne nécessite pas d'accompagnement."
  }
};

// Fusionner toutes les recettes
Object.assign(recettesAccompagnements, recettesSupplementaires, recettesLegumes, recettesFeculents, recettesGastronomiques, recettesFinales, recettesManquantes);

module.exports = recettesAccompagnements;
