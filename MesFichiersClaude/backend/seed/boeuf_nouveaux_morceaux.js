// Nouvelles fiches encyclopédiques pour le boeuf
// À ajouter dans encyclopediaData.js

const nouveauxMorceauxBoeuf = {
  // === MORCEAUX CLASSIQUES ===

  rumsteck: {
    anatomie: "Situé dans la partie arrière (cuisse), le rumsteck fait partie de la tranche. C'est un muscle maigre à fibres courtes, prélevé près de l'os iliaque. Poids typique d'une pièce : 300-500g.",
    caracteristiques: {
      tendrete: "7/10 - Tendre si bien coupé",
      saveur: "8/10 - Goût prononcé",
      persillage: "3/10 - Maigre"
    },
    techniquesChef: [
      "Couper en pavés épais (3-4 cm) pour une cuisson optimale",
      "Saisir à feu très vif pour créer une croûte caramélisée",
      "Ne pas dépasser la cuisson à point pour conserver le moelleux",
      "Trancher finement perpendiculairement aux fibres pour servir",
      "Idéal pour le rosbif : rôtir entier puis trancher"
    ],
    sauces: [
      { nom: "Sauce béarnaise", type: "Française", description: "Beurre clarifié, jaunes d'œufs, estragon, échalotes, vinaigre", accord: "Classique indémodable, richesse et acidité" },
      { nom: "Sauce au poivre vert", type: "Française", description: "Poivre vert, crème, cognac, fond de veau", accord: "Piquant délicat qui sublime la viande maigre" },
      { nom: "Beurre maître d'hôtel", type: "Française", description: "Beurre pommade, persil, citron, ail", accord: "Simple et efficace, fond sur la viande chaude" }
    ],
    accompagnements: [
      { type: "Légumes", suggestions: ["Haricots verts au beurre", "Pommes de terre grenaille", "Épinards à la crème", "Champignons poêlés"] },
      { type: "Féculents", suggestions: ["Frites maison", "Gratin dauphinois", "Pommes de terre sautées"] }
    ],
    vins: [
      { type: "Rouges structurés", suggestions: ["Saint-Émilion", "Pomerol", "Margaux"], temperature: "16-18°C", notes: "Tannins fondus pour accompagner la viande maigre" }
    ],
    erreursCourantes: [
      "Cuisson excessive : devient sec et fibreux",
      "Trancher dans le sens des fibres : masticabilité difficile",
      "Ne pas laisser reposer : perte de jus"
    ],
    anecdotes: "Le nom 'rumsteck' vient de l'anglais 'rump steak' (steak de croupe). En France, c'est l'une des pièces les plus populaires pour le rosbif du dimanche. Les Britanniques le préfèrent plus épais et plus saignant que les Français."
  },

  bavette_d_aloyau: {
    anatomie: "Muscle plat situé dans la région de l'aloyau, sous le faux-filet. Fibres longues et parallèles, texture légèrement striée. Poids typique : 150-250g par portion.",
    caracteristiques: {
      tendrete: "7/10 - Tendre si bien préparée",
      saveur: "9/10 - Très goûteuse",
      persillage: "4/10 - Modérément persillée"
    },
    techniquesChef: [
      "Mariner 30 min à 2h dans huile/herbes pour attendrir",
      "Cuisson très vive et courte (1-2 min par face)",
      "Toujours servir saignant à point maximum",
      "Trancher en biais contre les fibres pour la présentation",
      "Laisser reposer 3-4 minutes avant de servir"
    ],
    sauces: [
      { nom: "Sauce échalotes", type: "Française", description: "Échalotes confites, vin rouge, beurre, thym", accord: "Le classique de la bavette, incontournable" },
      { nom: "Sauce chimichurri", type: "Argentine", description: "Persil, ail, origan, vinaigre, huile, piment", accord: "Fraîcheur herbacée idéale pour grillades" },
      { nom: "Sauce moutarde à l'ancienne", type: "Française", description: "Moutarde en grains, crème, estragon", accord: "Piquant subtil qui rehausse la viande" }
    ],
    accompagnements: [
      { type: "Classiques bistrot", suggestions: ["Frites croustillantes", "Échalotes confites", "Salade verte vinaigrette"] },
      { type: "Légumes", suggestions: ["Haricots verts", "Champignons de Paris poêlés", "Tomates provençales"] }
    ],
    vins: [
      { type: "Rouges fruités", suggestions: ["Côtes du Rhône", "Chinon", "Bourgueil"], temperature: "15-17°C", notes: "Vins souples et fruités pour la bavette grillée" }
    ],
    erreursCourantes: [
      "Cuisson trop longue : devient caoutchouteuse",
      "Trancher dans le sens des fibres : mastication pénible",
      "Servir trop chaud sans repos : perte de jutosité"
    ],
    anecdotes: "La bavette à l'échalote est un classique des bistrots parisiens depuis les années 1950. Son nom vient de sa forme qui rappelle un bavoir. Elle a failli disparaître car longtemps considérée comme un morceau de second choix, avant d'être réhabilitée par les chefs bistrotiers."
  },

  bavette_de_flanchet: {
    anatomie: "Située dans le flanc, plus épaisse que la bavette d'aloyau. Fibres longues et épaisses, texture plus grossière. Également appelée 'bavette à pot-au-feu'.",
    caracteristiques: {
      tendrete: "6/10 - Nécessite une bonne préparation",
      saveur: "8/10 - Très parfumée",
      persillage: "3/10 - Plus maigre"
    },
    techniquesChef: [
      "Idéale marinée plusieurs heures voire une nuit",
      "Griller à haute température pour une croûte prononcée",
      "Cuisson saignante obligatoire pour éviter la dureté",
      "Trancher très finement en biais contre les fibres",
      "Peut aussi se braiser longuement pour fondant"
    ],
    sauces: [
      { nom: "Marinade asiatique", type: "Asiatique", description: "Sauce soja, gingembre, miel, ail, sésame", accord: "Transforme la bavette en délice oriental" },
      { nom: "Sauce au vin rouge", type: "Française", description: "Bordeaux, échalotes, fond de veau, beurre", accord: "Profondeur et élégance" }
    ],
    accompagnements: [
      { type: "Asiatiques", suggestions: ["Riz parfumé", "Légumes sautés au wok", "Salade de chou"] },
      { type: "Français", suggestions: ["Pommes sautées", "Salade frisée", "Champignons"] }
    ],
    vins: [
      { type: "Rouges corsés", suggestions: ["Madiran", "Cahors", "Corbières"], temperature: "16-18°C", notes: "Vins tanniques pour la viande marinée" }
    ],
    erreursCourantes: [
      "Ne pas mariner : viande trop ferme",
      "Cuisson au-delà du point : devient très dure",
      "Tranches trop épaisses : difficile à mâcher"
    ],
    anecdotes: "La bavette de flanchet est particulièrement appréciée en Amérique du Sud où elle est connue sous le nom de 'vacio'. Au Mexique, elle entre dans la préparation des fajitas traditionnelles."
  },

  onglet: {
    anatomie: "Muscle du diaphragme, l'onglet est un morceau unique (un seul par animal). Fibres longues, très persillé, avec un nerf central à retirer. Poids : 1-1,5 kg par bête.",
    caracteristiques: {
      tendrete: "8/10 - Très tendre si bien préparé",
      saveur: "10/10 - Le plus goûteux des morceaux",
      persillage: "6/10 - Bien persillé"
    },
    techniquesChef: [
      "Retirer impérativement le nerf central avant cuisson",
      "Ne jamais dépasser la cuisson saignante/à point",
      "Saisir à feu très vif 2 min par face maximum",
      "Laisser reposer 5 minutes - la viande se détend",
      "Trancher en biais pour révéler la texture"
    ],
    sauces: [
      { nom: "Sauce échalotes au vin rouge", type: "Française", description: "Échalotes, vin rouge, fond de veau, beurre", accord: "Le mariage parfait, classique bistrotier" },
      { nom: "Beurre de moelle", type: "Française", description: "Moelle pochée, échalotes, persil", accord: "Luxe et onctuosité sur viande goûteuse" }
    ],
    accompagnements: [
      { type: "Bistrot", suggestions: ["Frites maison", "Échalotes confites", "Pommes de terre sautées"] },
      { type: "Légumes", suggestions: ["Épinards au beurre", "Haricots verts fins"] }
    ],
    vins: [
      { type: "Rouges charpentés", suggestions: ["Saint-Joseph", "Crozes-Hermitage", "Gigondas"], temperature: "16-17°C", notes: "Vins de caractère pour morceau de caractère" }
    ],
    erreursCourantes: [
      "Laisser le nerf : impossibilité de mâcher",
      "Cuisson excessive : caoutchouteux et dur",
      "Découper dans le sens des fibres : filandreux"
    ],
    anecdotes: "L'onglet était autrefois le 'morceau du boucher' qu'il gardait pour lui. Son nom viendrait de sa forme en ongle. C'est devenu un classique des bistrots parisiens, souvent servi avec des frites et une salade."
  },

  hampe: {
    anatomie: "Muscle du diaphragme comme l'onglet, la hampe est le pilier du diaphragme. Fibres épaisses et longues, très goûteuse. Un seul morceau par animal, environ 500-800g.",
    caracteristiques: {
      tendrete: "7/10 - Tendre avec bonne préparation",
      saveur: "9/10 - Très parfumée",
      persillage: "5/10 - Persillage visible"
    },
    techniquesChef: [
      "Parer soigneusement les membranes extérieures",
      "Cuisson rapide et intense, saignant uniquement",
      "Ne jamais piquer avec une fourchette (perte de jus)",
      "Repos obligatoire de 3-5 minutes",
      "Découper en tranches fines contre les fibres"
    ],
    sauces: [
      { nom: "Sauce bordelaise", type: "Française", description: "Moelle, échalotes, vin rouge de Bordeaux, thym", accord: "Accord régional parfait, richesse du vin" },
      { nom: "Sauce au roquefort", type: "Française", description: "Roquefort fondu, crème, poivre", accord: "Puissance du fromage sur viande goûteuse" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Frites maison", "Pommes de terre sarladaises"] },
      { type: "Légumes", suggestions: ["Cèpes poêlés", "Haricots verts", "Épinards"] }
    ],
    vins: [
      { type: "Rouges du Sud-Ouest", suggestions: ["Madiran", "Cahors", "Bergerac"], temperature: "16-18°C", notes: "Vins tanniques de la région d'origine" }
    ],
    erreursCourantes: [
      "Cuisson trop longue : devient très coriace",
      "Ne pas retirer les membranes : texture désagréable",
      "Servir trop cuit : perte totale du caractère"
    ],
    anecdotes: "La hampe est le morceau traditionnel des boucheries du Sud-Ouest. Elle est particulièrement appréciée à Bordeaux où elle se marie avec les vins locaux. En Argentine, elle est connue sous le nom d'entraña et est la vedette des asados."
  },

  paleron: {
    anatomie: "Muscle de l'épaule, le paleron est traversé par un nerf gélatineux central. Ce collagène se transforme en gélatine lors des cuissons longues. Poids : 2-3 kg par épaule.",
    caracteristiques: {
      tendrete: "5/10 cru - 9/10 braisé",
      saveur: "9/10 - Très parfumé après braisage",
      persillage: "4/10 - Persillage modéré"
    },
    techniquesChef: [
      "Toujours braiser ou mijoter (minimum 2h30)",
      "Le nerf central devient fondant et délicieux après cuisson",
      "Saisir d'abord à feu vif pour colorer",
      "Cuire à couvert dans du liquide (vin, bouillon)",
      "La viande doit se défaire à la fourchette"
    ],
    sauces: [
      { nom: "Jus de braisage", type: "Française", description: "Le jus de cuisson réduit avec légumes et vin", accord: "Concentré de saveurs, meilleure option" },
      { nom: "Sauce au vin rouge", type: "Française", description: "Bordeaux, carottes, oignons, lardons", accord: "Classique du bœuf bourguignon" }
    ],
    accompagnements: [
      { type: "Légumes braisés", suggestions: ["Carottes", "Pommes de terre", "Navets", "Oignons grelots"] },
      { type: "Féculents", suggestions: ["Purée de pommes de terre", "Pâtes fraîches", "Polenta"] }
    ],
    vins: [
      { type: "Rouges puissants", suggestions: ["Bourgogne Pinot Noir", "Côtes du Rhône", "Languedoc"], temperature: "16-17°C", notes: "Vins généreux pour plat mijoté" }
    ],
    erreursCourantes: [
      "Cuisson rapide : viande dure et fibreuse",
      "Température trop haute : viande sèche malgré le liquide",
      "Manque de temps : collagène non transformé"
    ],
    anecdotes: "Le paleron est la pièce traditionnelle du bœuf bourguignon et du pot-au-feu. Son nerf central, longtemps considéré comme un défaut, est aujourd'hui reconnu comme ce qui donne son onctuosité au braisé."
  },

  macreuse_a_pot_au_feu: {
    anatomie: "Partie de l'épaule, muscle gélatineux et nerveux. Parfaite pour les cuissons longues car riche en collagène. Se divise en deux parties : à pot-au-feu (plus grasse) et à bifteck (plus maigre).",
    caracteristiques: {
      tendrete: "4/10 cru - 8/10 mijotée",
      saveur: "8/10 - Goût prononcé",
      persillage: "3/10 - Peu persillée"
    },
    techniquesChef: [
      "Démarrer dans l'eau froide pour pot-au-feu",
      "Écumer régulièrement en début de cuisson",
      "Cuisson lente minimum 3 heures",
      "La viande doit pouvoir s'émietter",
      "Le bouillon devient un excellent consommé"
    ],
    sauces: [
      { nom: "Gros sel et cornichons", type: "Française", description: "Sel de Guérande, cornichons, moutarde", accord: "Traditionnel du pot-au-feu, simplicité parfaite" },
      { nom: "Sauce gribiche", type: "Française", description: "Œufs durs, câpres, cornichons, fines herbes, moutarde", accord: "Alternative riche au simple sel" }
    ],
    accompagnements: [
      { type: "Légumes du pot-au-feu", suggestions: ["Poireaux", "Carottes", "Navets", "Céleri"] },
      { type: "Condiments", suggestions: ["Moutarde forte", "Cornichons", "Oignons au vinaigre"] }
    ],
    vins: [
      { type: "Rouges légers", suggestions: ["Beaujolais", "Côtes du Rhône léger", "Bourgogne Passetoutgrain"], temperature: "14-16°C", notes: "Vins fruités et peu tanniques" }
    ],
    erreursCourantes: [
      "Démarrer à l'eau chaude : viande durcie en surface",
      "Ne pas écumer : bouillon trouble",
      "Cuisson insuffisante : viande coriace"
    ],
    anecdotes: "Le pot-au-feu est considéré comme le plat national français. Henri IV voulait 'une poule au pot' pour chaque Français, mais c'est le bœuf qui s'est imposé. La macreuse donne à la fois une viande fondante et un bouillon savoureux."
  },

  macreuse_a_bifteck: {
    anatomie: "Partie maigre et tendre de l'épaule, proche de la palette. Contrairement à la macreuse à pot-au-feu, elle convient aux cuissons rapides. Fibres fines et régulières.",
    caracteristiques: {
      tendrete: "7/10 - Tendre pour un morceau d'épaule",
      saveur: "7/10 - Bon goût de bœuf",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Couper en steaks de 2 cm d'épaisseur",
      "Saisir rapidement à feu vif",
      "Servir saignant à rosé uniquement",
      "Excellent pour les émincés et sautés",
      "Se prête bien aux marinades courtes"
    ],
    sauces: [
      { nom: "Sauce poivrade", type: "Française", description: "Poivre concassé, vin rouge, vinaigre, fond de veau", accord: "Relevé qui sublime cette viande maigre" },
      { nom: "Sauce aux oignons", type: "Française", description: "Oignons caramélisés, fond brun, thym", accord: "Douceur des oignons sur viande maigre" }
    ],
    accompagnements: [
      { type: "Légumes", suggestions: ["Ratatouille", "Poêlée de légumes", "Haricots verts"] },
      { type: "Féculents", suggestions: ["Frites", "Pommes de terre sautées", "Riz pilaf"] }
    ],
    vins: [
      { type: "Rouges moyens", suggestions: ["Côtes de Provence rouge", "Minervois", "Saint-Chinian"], temperature: "15-17°C", notes: "Vins souples pour viande maigre" }
    ],
    erreursCourantes: [
      "Cuisson prolongée : sèche rapidement",
      "Tranches trop fines : impossible à saisir correctement",
      "Servir bien cuit : perd tout intérêt"
    ],
    anecdotes: "La macreuse à bifteck est un morceau économique qui offre un excellent rapport qualité/prix. Elle est très populaire dans les cantines et restaurants d'entreprise pour sa polyvalence."
  },

  gite: {
    anatomie: "Muscle de la jambe arrière, le gîte est composé de fibres longues et d'un os central (gîte à la noix). Morceau gélatineux idéal pour les cuissons longues.",
    caracteristiques: {
      tendrete: "3/10 cru - 8/10 braisé",
      saveur: "8/10 - Très parfumé",
      persillage: "2/10 - Maigre mais gélatineux"
    },
    techniquesChef: [
      "Braiser ou mijoter obligatoirement (3-4 heures)",
      "L'os central enrichit le jus de cuisson",
      "Idéal taillé en tranches épaisses pour osso buco de bœuf",
      "La gélatine naturelle lie les sauces",
      "Se défait en filaments tendres à la fourchette"
    ],
    sauces: [
      { nom: "Gremolata", type: "Italienne", description: "Persil, ail, zeste de citron", accord: "Fraîcheur qui équilibre le fondant du braisé" },
      { nom: "Sauce tomate", type: "Italienne", description: "Tomates, oignons, carottes, céleri, vin blanc", accord: "Base classique du braisé à l'italienne" }
    ],
    accompagnements: [
      { type: "Italien", suggestions: ["Risotto alla milanese", "Polenta crémeuse", "Gnocchis"] },
      { type: "Français", suggestions: ["Purée de pommes de terre", "Légumes racines"] }
    ],
    vins: [
      { type: "Rouges italiens", suggestions: ["Barolo", "Amarone", "Chianti Classico"], temperature: "17-18°C", notes: "Vins puissants pour plat généreux" }
    ],
    erreursCourantes: [
      "Cuisson rapide : viande immangeable",
      "Température trop forte : extérieur dur, intérieur cru",
      "Manque de liquide : braisé sec"
    ],
    anecdotes: "Le gîte est l'équivalent du jarret pour la viande de bœuf. Il est à la base de l'osso buco de bœuf, variante du célèbre plat milanais traditionnellement préparé avec du veau."
  },

  plat_de_cotes: {
    anatomie: "Les plats de côtes sont les basses côtes avec os, partie inférieure du train de côtes. Viande entrelardée, idéale pour les cuissons lentes. 3-4 kg pour un plat complet.",
    caracteristiques: {
      tendrete: "4/10 cru - 9/10 braisé",
      saveur: "9/10 - Exceptionnellement parfumé",
      persillage: "6/10 - Bien gras et persillé"
    },
    techniquesChef: [
      "Braiser avec os pour maximum de saveur",
      "Cuisson minimum 3 heures à basse température",
      "La viande doit se détacher des os",
      "Déglacer régulièrement pendant la cuisson",
      "Parfait pour les préparations fumées (BBQ)"
    ],
    sauces: [
      { nom: "Sauce BBQ maison", type: "Américaine", description: "Tomates, mélasse, vinaigre, épices, fumée liquide", accord: "L'accord texan par excellence" },
      { nom: "Sauce au vin rouge", type: "Française", description: "Vin rouge corsé, échalotes, fond de veau", accord: "Version française élégante" }
    ],
    accompagnements: [
      { type: "BBQ", suggestions: ["Coleslaw", "Maïs grillé", "Haricots rouges", "Cornbread"] },
      { type: "Français", suggestions: ["Purée", "Légumes racines", "Pommes de terre"] }
    ],
    vins: [
      { type: "Rouges puissants", suggestions: ["Zinfandel", "Côtes du Rhône Sud", "Châteauneuf-du-Pape"], temperature: "17-18°C", notes: "Vins riches et épicés" }
    ],
    erreursCourantes: [
      "Cuisson trop courte : viande dure",
      "Feu trop fort : viande sèche malgré le gras",
      "Ne pas braiser avec os : perte de saveur"
    ],
    anecdotes: "Les plats de côtes sont devenus populaires grâce au BBQ texan. Autrefois morceau de pauvre, ils sont maintenant servis dans les meilleurs restaurants. Le secret est le fumage lent qui peut durer jusqu'à 12 heures."
  },

  collier: {
    anatomie: "Situé dans le cou, le collier est un muscle très travaillé donc ferme. Riche en collagène et en saveur. Poids typique : 2-3 kg pour un collier entier.",
    caracteristiques: {
      tendrete: "3/10 cru - 9/10 braisé",
      saveur: "9/10 - Très goûteux",
      persillage: "4/10 - Modérément persillé"
    },
    techniquesChef: [
      "Braiser ou mijoter exclusivement (3+ heures)",
      "Excellent pour les daubes et ragoûts",
      "Découper en gros cubes pour les sautés",
      "Le collagène se transforme en gélatine onctueuse",
      "Peut être haché pour des préparations juteuses"
    ],
    sauces: [
      { nom: "Sauce daube provençale", type: "Française", description: "Vin rouge, olives, tomates, herbes de Provence", accord: "La combinaison méridionale parfaite" },
      { nom: "Sauce à la bière", type: "Flamande", description: "Bière brune, pain d'épices, oignons", accord: "Rondeur et légère amertume" }
    ],
    accompagnements: [
      { type: "Provençal", suggestions: ["Pâtes fraîches", "Polenta", "Légumes confits"] },
      { type: "Flamand", suggestions: ["Frites", "Endives braisées", "Chou rouge"] }
    ],
    vins: [
      { type: "Rouges du Sud", suggestions: ["Bandol", "Côtes de Provence", "Palette"], temperature: "16-18°C", notes: "Vins généreux et ensoleillés" }
    ],
    erreursCourantes: [
      "Cuisson rapide : immangeable",
      "Ne pas saisir avant braisage : manque de couleur",
      "Liquide insuffisant : braisé sec"
    ],
    anecdotes: "Le collier de bœuf est la base de la célèbre daube provençale. Traditionnellement, la daube cuisait toute la nuit dans les braises de la cheminée. Le plat était encore meilleur réchauffé le lendemain."
  },

  jarret: {
    anatomie: "Partie basse de la patte, le jarret est entouré de tendons et de collagène. L'os central contient de la moelle. Morceau gélatineux par excellence, environ 400-600g par jarret.",
    caracteristiques: {
      tendrete: "2/10 cru - 9/10 braisé",
      saveur: "9/10 - Extrêmement parfumé",
      persillage: "2/10 - Maigre mais très gélatineux"
    },
    techniquesChef: [
      "Braiser impérativement (3-5 heures)",
      "L'os et les tendons enrichissent le jus",
      "Parfait pour l'osso buco de bœuf",
      "La viande doit se défaire en filaments",
      "Le jus devient naturellement onctueux"
    ],
    sauces: [
      { nom: "Réduction de braisage", type: "Française", description: "Le jus de cuisson réduit et monté au beurre", accord: "Concentré de saveurs, indispensable" },
      { nom: "Gremolata", type: "Italienne", description: "Persil, ail, zeste de citron", accord: "Note fraîche sur le fondant" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Risotto", "Purée de céleri", "Polenta"] },
      { type: "Légumes", suggestions: ["Carottes glacées", "Petits oignons", "Champignons"] }
    ],
    vins: [
      { type: "Rouges corsés", suggestions: ["Barolo", "Barbaresco", "Brunello di Montalcino"], temperature: "17-18°C", notes: "Grands vins pour grand plat" }
    ],
    erreursCourantes: [
      "Cuisson insuffisante : tendons durs",
      "Feu trop vif : extérieur brûlé, intérieur cru",
      "Jeter le jus : c'est le meilleur !"
    ],
    anecdotes: "Le jarret de bœuf est l'ancêtre de l'osso buco milanais (traditionnellement au veau). En France, il entre dans la composition du pot-au-feu où il apporte son incomparable gélatine au bouillon."
  },

  joue_de_boeuf: {
    anatomie: "Muscle de la mâchoire, la joue est extrêmement travaillée par la mastication. Tissu conjonctif abondant qui fond en cuisson longue. Une joue pèse 300-500g.",
    caracteristiques: {
      tendrete: "2/10 cru - 10/10 braisée",
      saveur: "10/10 - Saveur incomparable",
      persillage: "3/10 - Peu persillée mais très gélatineuse"
    },
    techniquesChef: [
      "Parer soigneusement les membranes et le gras",
      "Braiser au minimum 4 heures",
      "La texture doit être fondante à la cuillère",
      "Idéale pour les cuissons sous-vide longues (48-72h)",
      "Le jus de braisage est d'une onctuosité exceptionnelle"
    ],
    sauces: [
      { nom: "Sauce vin rouge", type: "Française", description: "Grand vin rouge, échalotes, fond de veau, thym", accord: "L'accord ultime, élégance et profondeur" },
      { nom: "Sauce aux carottes", type: "Française", description: "Carottes confites, jus de braisage, orange", accord: "Douceur et couleur" }
    ],
    accompagnements: [
      { type: "Raffinés", suggestions: ["Purée de panais", "Topinambours rôtis", "Céleri rave"] },
      { type: "Classiques", suggestions: ["Purée de pommes de terre", "Carottes glacées"] }
    ],
    vins: [
      { type: "Grands rouges", suggestions: ["Pauillac", "Saint-Estèphe", "Hermitage"], temperature: "17-18°C", notes: "Grands crus pour morceau d'exception" }
    ],
    erreursCourantes: [
      "Cuisson trop courte : morceau immangeable",
      "Ne pas parer : texture désagréable",
      "Feu trop fort : durcit la viande"
    ],
    anecdotes: "La joue de bœuf était autrefois un abat bon marché. Elle est devenue un morceau prisé des grands chefs pour sa texture unique. Alain Ducasse l'a popularisée dans son restaurant trois étoiles."
  },

  queue_de_boeuf: {
    anatomie: "La queue est composée de vertèbres entourées de viande maigre et de tendons. Très riche en collagène et en moelle. Poids total : 1,5-2,5 kg.",
    caracteristiques: {
      tendrete: "2/10 cru - 9/10 braisée",
      saveur: "10/10 - Extrêmement parfumée",
      persillage: "2/10 - Maigre mais très gélatineuse"
    },
    techniquesChef: [
      "Couper entre les vertèbres en tronçons",
      "Braiser minimum 4-5 heures",
      "La viande doit se détacher des os",
      "Le jus gélifie naturellement au refroidissement",
      "Parfaite en terrine après braisage"
    ],
    sauces: [
      { nom: "Sauce au vin rouge corsé", type: "Française", description: "Grand vin rouge, bouquet garni, fond de veau", accord: "La référence absolue" },
      { nom: "Sauce tomate aux herbes", type: "Méditerranéenne", description: "Tomates, romarin, laurier, ail", accord: "Version ensoleillée du braisé" }
    ],
    accompagnements: [
      { type: "Féculents", suggestions: ["Purée de pommes de terre", "Polenta crémeuse", "Pâtes fraîches"] },
      { type: "Légumes", suggestions: ["Carottes", "Petits oignons", "Champignons de Paris"] }
    ],
    vins: [
      { type: "Rouges puissants", suggestions: ["Châteauneuf-du-Pape", "Bandol", "Cornas"], temperature: "17-18°C", notes: "Vins de grande garde pour ce plat" }
    ],
    erreursCourantes: [
      "Cuisson insuffisante : impossible à manger",
      "Ne pas dégraisser : sauce trop grasse",
      "Vertèbres mal séparées : présentation difficile"
    ],
    anecdotes: "La queue de bœuf était un plat de taverne populaire au XIXe siècle. Le 'oxtail soup' anglais et la 'rabo de toro' espagnole (queue de taureau de combat) sont des préparations légendaires."
  },

  tende_de_tranche: {
    anatomie: "Partie de la cuisse, la tende de tranche est un muscle maigre et tendre situé sur la face interne de la cuisse. Fibres fines, peu de gras. Poids : 2-3 kg.",
    caracteristiques: {
      tendrete: "7/10 - Assez tendre",
      saveur: "7/10 - Bon goût de bœuf",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Idéale pour rôtis et rosbifs",
      "Barder ou larder pour éviter le dessèchement",
      "Cuisson rosée recommandée",
      "Trancher finement pour carpaccio",
      "Excellente pour la fondue bourguignonne"
    ],
    sauces: [
      { nom: "Jus de rôti", type: "Française", description: "Jus de cuisson déglacé, fond de veau", accord: "Simple et efficace" },
      { nom: "Sauce au raifort", type: "Anglo-saxonne", description: "Raifort râpé, crème fraîche, citron", accord: "Piquant qui réveille la viande maigre" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Yorkshire pudding", "Pommes de terre rôties", "Légumes verts"] },
      { type: "Français", suggestions: ["Gratin dauphinois", "Haricots verts", "Carottes glacées"] }
    ],
    vins: [
      { type: "Rouges fins", suggestions: ["Volnay", "Pommard", "Chambolle-Musigny"], temperature: "16-17°C", notes: "Bourgognes élégants pour rosbif" }
    ],
    erreursCourantes: [
      "Cuisson excessive : viande sèche",
      "Ne pas barder : dessèchement",
      "Découper trop épais : perd en finesse"
    ],
    anecdotes: "La tende de tranche est le morceau traditionnel du rosbif anglais du dimanche. Elle a donné naissance au terme français 'rosbif' (de l'anglais roast beef), utilisé parfois pour désigner les Britanniques."
  },

  rond_de_tranche: {
    anatomie: "Partie de la tranche, le rond est un muscle arrondi et maigre de la cuisse. Fibres courtes et régulières. Idéal pour les escalopes. Poids : 1,5-2 kg.",
    caracteristiques: {
      tendrete: "7/10 - Tendre",
      saveur: "6/10 - Goût délicat",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Tailler en escalopes fines (5-8 mm)",
      "Excellent pour les escalopes panées",
      "Cuisson rapide à feu vif",
      "Ne pas trop aplatir : perd en jutosité",
      "Idéal pour les émincés de bœuf"
    ],
    sauces: [
      { nom: "Sauce milanaise", type: "Italienne", description: "Tomates, ail, basilic, parmesan", accord: "Fraîcheur méditerranéenne" },
      { nom: "Sauce crème champignons", type: "Française", description: "Champignons, crème, échalotes", accord: "Onctuosité pour viande maigre" }
    ],
    accompagnements: [
      { type: "Italien", suggestions: ["Spaghetti", "Roquette au parmesan", "Tomates cerises"] },
      { type: "Classique", suggestions: ["Frites", "Salade verte", "Légumes grillés"] }
    ],
    vins: [
      { type: "Rouges légers", suggestions: ["Valpolicella", "Bardolino", "Beaujolais"], temperature: "14-16°C", notes: "Vins fruités et faciles" }
    ],
    erreursCourantes: [
      "Escalopes trop épaisses : cuisson inégale",
      "Cuisson prolongée : viande sèche et dure",
      "Panure brûlée : feu trop vif"
    ],
    anecdotes: "Le rond de tranche est à la base de l'escalope milanaise, plat qui aurait inspiré la Wiener Schnitzel autrichienne. Les deux pays se disputent la paternité de ce classique pané."
  },

  jumeau_a_pot_au_feu: {
    anatomie: "Situé dans l'épaule, le jumeau est un muscle gélatineux idéal pour les bouillons. Il existe en version 'à pot-au-feu' (plus grasse) et 'à bifteck' (plus maigre).",
    caracteristiques: {
      tendrete: "4/10 cru - 8/10 mijoté",
      saveur: "8/10 - Très parfumé",
      persillage: "4/10 - Persillé et gélatineux"
    },
    techniquesChef: [
      "Cuisson longue dans un bouillon parfumé",
      "Démarrer à l'eau froide pour extraire les saveurs",
      "Écumer régulièrement le bouillon",
      "Cuisson minimum 3 heures",
      "La viande doit être fondante"
    ],
    sauces: [
      { nom: "Gros sel et moutarde", type: "Française", description: "Sel de Guérande, moutarde de Dijon forte", accord: "L'accord traditionnel du pot-au-feu" },
      { nom: "Sauce raifort", type: "Anglo-saxonne", description: "Raifort, crème fraîche, vinaigre", accord: "Piquant rafraîchissant" }
    ],
    accompagnements: [
      { type: "Légumes du pot-au-feu", suggestions: ["Poireaux", "Navets", "Carottes", "Céleri-rave"] },
      { type: "Os à moelle", suggestions: ["Os à moelle grillés", "Toast aillé"] }
    ],
    vins: [
      { type: "Rouges légers", suggestions: ["Beaujolais", "Bourgogne Passetoutgrain"], temperature: "14-15°C", notes: "Vins simples et gouleyants" }
    ],
    erreursCourantes: [
      "Démarrer à l'eau chaude : viande durcie",
      "Cuisson insuffisante : viande coriace",
      "Ne pas écumer : bouillon trouble"
    ],
    anecdotes: "Le jumeau tire son nom du fait qu'il est situé contre un autre muscle similaire. C'est l'un des morceaux essentiels du pot-au-feu traditionnel, plat que les familles françaises cuisinaient le dimanche."
  },

  flanchet: {
    anatomie: "Partie ventrale du bœuf, le flanchet est un muscle plat et peu épais. Fibres longues et apparentes. Très utilisé pour les bouillons et les hachis.",
    caracteristiques: {
      tendrete: "4/10 cru - 7/10 mijoté",
      saveur: "7/10 - Goûteux",
      persillage: "5/10 - Entrelardé"
    },
    techniquesChef: [
      "Excellent haché pour les préparations",
      "Braiser ou mijoter pour attendrir",
      "Parfait roulé et farci",
      "Peut être grillé s'il est mariné longtemps",
      "La cuisson lente attendrit les fibres"
    ],
    sauces: [
      { nom: "Sauce tomate maison", type: "Française", description: "Tomates, oignons, ail, herbes", accord: "Classique des plats mijotés" },
      { nom: "Sauce au curry", type: "Indienne", description: "Curry, lait de coco, gingembre", accord: "Exotisme sur viande braisée" }
    ],
    accompagnements: [
      { type: "Féculents", suggestions: ["Riz basmati", "Pommes vapeur", "Semoule"] },
      { type: "Légumes", suggestions: ["Petits pois", "Carottes", "Courgettes"] }
    ],
    vins: [
      { type: "Rouges souples", suggestions: ["Côtes du Rhône", "Côtes de Gascogne"], temperature: "15-16°C", notes: "Vins fruités et accessibles" }
    ],
    erreursCourantes: [
      "Grillade sans marinade : viande dure",
      "Cuisson trop rapide : mastication difficile",
      "Tranches trop épaisses : texture désagréable"
    ],
    anecdotes: "Le flanchet a longtemps été un morceau de second choix. Il est aujourd'hui apprécié pour les préparations mijotées et les hachis. En Amérique latine, il est la base des fameux tacos de 'bistec'."
  },

  foie: {
    anatomie: "Organe filtrant du bœuf, le foie pèse 5-7 kg. Chair granuleuse brun-rouge, goût puissant. Doit être consommé très frais. Se vend en tranches de 150-200g.",
    caracteristiques: {
      tendrete: "8/10 - Tendre si bien cuit",
      saveur: "9/10 - Très prononcé",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Retirer la membrane externe avant cuisson",
      "Cuisson très rapide (1-2 min par face)",
      "Doit rester rosé à l'intérieur",
      "Ne jamais recuire un foie déjà cuit",
      "Fariner légèrement pour une croûte dorée"
    ],
    sauces: [
      { nom: "Sauce au vinaigre de xérès", type: "Française", description: "Vinaigre de xérès, échalotes, beurre", accord: "Acidité qui équilibre le goût puissant" },
      { nom: "Oignons caramélisés", type: "Vénitienne", description: "Oignons fondus, vinaigre balsamique", accord: "Le 'fegato alla veneziana' classique" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Purée de pommes de terre", "Bacon grillé", "Oignons"] },
      { type: "Italiens", suggestions: ["Polenta crémeuse", "Salade de roquette"] }
    ],
    vins: [
      { type: "Rouges fruités", suggestions: ["Côtes du Rhône", "Beaujolais", "Merlot jeune"], temperature: "15-16°C", notes: "Vins souples pour le foie" }
    ],
    erreursCourantes: [
      "Surcuisson : devient granuleux et amer",
      "Ne pas retirer la membrane : texture désagréable",
      "Viande pas fraîche : goût trop fort"
    ],
    anecdotes: "Le foie de bœuf était très populaire jusqu'aux années 1970, avant d'être détrôné par le foie de veau plus délicat. Il connaît un regain d'intérêt pour sa richesse en fer et vitamines B."
  },

  langue: {
    anatomie: "Muscle très travaillé, la langue de bœuf pèse 1,5-2,5 kg. Doit être pochée puis pelée. Chair tendre et fine une fois préparée.",
    caracteristiques: {
      tendrete: "8/10 - Très tendre après cuisson",
      saveur: "8/10 - Goût délicat",
      persillage: "3/10 - Légèrement grasse"
    },
    techniquesChef: [
      "Pocher 2-3 heures dans un bouillon aromatisé",
      "Peler à chaud (la peau s'enlève facilement)",
      "Peut être braisée après pochage",
      "Excellente froide en vinaigrette",
      "Se tranche finement pour les salades"
    ],
    sauces: [
      { nom: "Sauce ravigote", type: "Française", description: "Câpres, cornichons, fines herbes, moutarde", accord: "Fraîcheur acidulée parfaite" },
      { nom: "Sauce piquante", type: "Française", description: "Cornichons, échalotes, vin blanc, vinaigre", accord: "Classique de la cuisine bourgeoise" },
      { nom: "Sauce tomate épicée", type: "Mexicaine", description: "Tomates, piments, oignons, coriandre", accord: "Version 'lengua' mexicaine" }
    ],
    accompagnements: [
      { type: "Froids", suggestions: ["Salade de pommes de terre", "Cornichons", "Câpres"] },
      { type: "Chauds", suggestions: ["Purée de pommes de terre", "Légumes braisés"] }
    ],
    vins: [
      { type: "Blancs secs", suggestions: ["Muscadet", "Chablis", "Aligoté"], temperature: "10-12°C", notes: "Blancs vifs pour langue froide" },
      { type: "Rouges légers", suggestions: ["Beaujolais", "Bourgueil"], temperature: "14-15°C", notes: "Pour la langue chaude" }
    ],
    erreursCourantes: [
      "Pochage insuffisant : difficile à peler",
      "Ne pas peler à chaud : peau qui colle",
      "Tranches trop épaisses : perd en finesse"
    ],
    anecdotes: "La langue de bœuf était un mets de fête dans la cuisine bourgeoise du XIXe siècle. Au Mexique, les 'tacos de lengua' sont un classique des stands de rue. En France, elle reste populaire dans les boucheries charcutières."
  },

  os_a_moelle: {
    anatomie: "Os longs des pattes (fémur, tibia), fendus pour exposer la moelle. La moelle est un tissu gras et onctueux, considéré comme un mets délicat. Un os fait 10-15 cm.",
    caracteristiques: {
      tendrete: "10/10 - Fondante",
      saveur: "10/10 - Riche et onctueux",
      persillage: "N/A"
    },
    techniquesChef: [
      "Tremper 12h dans l'eau froide salée pour dégorger",
      "Rôtir au four 15-20 min à 200°C",
      "Servir aussitôt (la moelle fige en refroidissant)",
      "Protéger la moelle avec du papier aluminium",
      "Extraire avec une cuillère ou un couteau"
    ],
    sauces: [
      { nom: "Fleur de sel", type: "Simple", description: "Fleur de sel de Guérande, poivre du moulin", accord: "Pureté absolue pour la moelle" },
      { nom: "Persillade", type: "Française", description: "Persil haché, ail, échalote", accord: "Fraîcheur herbacée" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Pain grillé", "Toast de campagne", "Salade frisée"] },
      { type: "Raffinés", suggestions: ["Tartare de bœuf", "Risotto", "Gnocchis"] }
    ],
    vins: [
      { type: "Rouges puissants", suggestions: ["Saint-Émilion", "Pomerol", "Médoc"], temperature: "17-18°C", notes: "Bordeaux classiques pour la moelle" }
    ],
    erreursCourantes: [
      "Ne pas dégorger : moelle sanguinolente",
      "Cuisson excessive : moelle fondue perdue",
      "Servir froid : moelle figée et grasse"
    ],
    anecdotes: "L'os à moelle était le régal des hommes préhistoriques qui cassaient les os pour l'extraire. C'est l'un des premiers aliments cuits de l'humanité. Aujourd'hui, c'est un classique des bistrots parisiens, souvent servi avec un verre de Bordeaux."
  },

  // === PIÈCES DU BOUCHER ===

  poire: {
    anatomie: "Petit muscle rond situé dans la cuisse, la poire pèse environ 500-600g par animal. Sa forme rappelle le fruit du même nom. Fibres fines et courtes.",
    caracteristiques: {
      tendrete: "9/10 - Extrêmement tendre",
      saveur: "8/10 - Goût fin",
      persillage: "3/10 - Maigre et tendre"
    },
    techniquesChef: [
      "Cuisson rapide à feu vif uniquement",
      "Ne jamais dépasser la cuisson rosée",
      "Idéale pour les tartares et carpaccios",
      "Peut être poêlée entière comme un filet",
      "Repos court (2-3 min) avant découpe"
    ],
    sauces: [
      { nom: "Sauce béarnaise", type: "Française", description: "Jaunes d'œufs, beurre, estragon", accord: "Richesse sur viande délicate" },
      { nom: "Simple jus de citron", type: "Simple", description: "Citron, huile d'olive, fleur de sel", accord: "Pour tartare ou carpaccio" }
    ],
    accompagnements: [
      { type: "Fins", suggestions: ["Roquette au parmesan", "Frites de patate douce", "Légumes grillés"] },
      { type: "Classiques", suggestions: ["Frites maison", "Salade verte"] }
    ],
    vins: [
      { type: "Rouges fins", suggestions: ["Pommard", "Volnay", "Gevrey-Chambertin"], temperature: "16-17°C", notes: "Bourgognes élégants pour cette pièce noble" }
    ],
    erreursCourantes: [
      "Cuisson excessive : perd toute sa tendreté",
      "Ne pas laisser reposer : perte de jus",
      "Découpe dans le sens des fibres : moins tendre"
    ],
    anecdotes: "La poire est l'un des 'morceaux du boucher', ces pièces rares que le boucher gardait pour lui ou ses meilleurs clients. Il n'y en a que deux par bœuf, d'où sa rareté et son prix."
  },

  merlan: {
    anatomie: "Muscle situé sur la face interne de la cuisse, le merlan tire son nom de sa couleur claire rappelant le poisson. Très tendre, environ 300-400g par animal.",
    caracteristiques: {
      tendrete: "9/10 - Très tendre",
      saveur: "7/10 - Goût délicat",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Cuisson très rapide (comme un poisson !)",
      "Idéal en carpaccio ou tartare",
      "Poêler à feu vif 1-2 min par face",
      "Ne jamais cuire au-delà de rosé",
      "Parfait pour les cuissons basse température"
    ],
    sauces: [
      { nom: "Huile d'olive et citron", type: "Méditerranéenne", description: "Huile d'olive première pression, citron", accord: "Pureté pour carpaccio" },
      { nom: "Sauce vierge", type: "Provençale", description: "Tomates, basilic, huile d'olive", accord: "Fraîcheur estivale" }
    ],
    accompagnements: [
      { type: "Légers", suggestions: ["Roquette", "Copeaux de parmesan", "Câpres"] },
      { type: "Classiques", suggestions: ["Pommes de terre nouvelles", "Légumes grillés"] }
    ],
    vins: [
      { type: "Rouges délicats", suggestions: ["Sancerre rouge", "Mercurey", "Rully"], temperature: "15-16°C", notes: "Vins légers pour viande délicate" }
    ],
    erreursCourantes: [
      "Cuisson prolongée : devient sec immédiatement",
      "Assaisonnement trop fort : masque la finesse",
      "Découpe épaisse : perd son intérêt"
    ],
    anecdotes: "Le merlan doit son nom à sa chair pâle qui rappelle celle du poisson. C'est l'un des morceaux les plus rares (un seul par cuisse, soit deux par bœuf) et les plus recherchés des amateurs de viande crue."
  },

  araignee: {
    anatomie: "Muscle situé au creux de l'articulation de la hanche, l'araignée tire son nom des nervures qui évoquent une toile. Environ 600-800g par animal.",
    caracteristiques: {
      tendrete: "8/10 - Tendre et juteuse",
      saveur: "9/10 - Exceptionnellement goûteuse",
      persillage: "5/10 - Bien persillée"
    },
    techniquesChef: [
      "Retirer les membranes apparentes",
      "Griller ou poêler à feu très vif",
      "Servir saignant à rosé maximum",
      "Ne pas masquer sa saveur naturelle",
      "Repos court mais obligatoire"
    ],
    sauces: [
      { nom: "Beurre de café de Paris", type: "Française", description: "Beurre composé aux herbes et épices", accord: "Fondant parfumé sur viande chaude" },
      { nom: "Simple fleur de sel", type: "Simple", description: "Fleur de sel, poivre du moulin", accord: "Pureté pour ce morceau exceptionnel" }
    ],
    accompagnements: [
      { type: "Simples", suggestions: ["Frites maison", "Salade verte", "Pommes grenaille"] },
      { type: "Bistrot", suggestions: ["Échalotes confites", "Haricots verts"] }
    ],
    vins: [
      { type: "Rouges charnus", suggestions: ["Côte-Rôtie", "Cornas", "Saint-Joseph"], temperature: "16-17°C", notes: "Syrah du Nord pour ce morceau de caractère" }
    ],
    erreursCourantes: [
      "Surcuisson : perd son caractère juteux",
      "Ne pas retirer les membranes : texture gênante",
      "Sauce trop présente : cache la saveur unique"
    ],
    anecdotes: "L'araignée est le morceau que le boucher garde traditionnellement pour sa propre consommation. Son nom vient du dessin de ses fibres musculaires. Il n'y en a que deux par bœuf."
  },

  dessus_de_palette: {
    anatomie: "Partie supérieure de la palette dans l'épaule, c'est un muscle travaillé mais savoureux. Plus tendre que le paleron classique. Poids : 1-1,5 kg.",
    caracteristiques: {
      tendrete: "6/10 - Correcte en grillade",
      saveur: "8/10 - Très parfumé",
      persillage: "4/10 - Modérément persillé"
    },
    techniquesChef: [
      "Peut être grillé s'il est bien préparé",
      "Excellent mariné puis grillé",
      "Aussi adapté au braisage court (2h)",
      "Découper contre les fibres impératif",
      "Repos important avant découpe"
    ],
    sauces: [
      { nom: "Sauce barbecue", type: "Américaine", description: "Tomates, vinaigre, sucre brun, épices", accord: "Pour les grillades estivales" },
      { nom: "Sauce au poivre", type: "Française", description: "Poivre vert ou noir, crème, cognac", accord: "Classique relevé" }
    ],
    accompagnements: [
      { type: "BBQ", suggestions: ["Maïs grillé", "Coleslaw", "Pommes de terre au four"] },
      { type: "Français", suggestions: ["Gratin dauphinois", "Haricots verts"] }
    ],
    vins: [
      { type: "Rouges fruités", suggestions: ["Côtes du Rhône Villages", "Crozes-Hermitage"], temperature: "16-17°C", notes: "Vins généreux pour ce morceau" }
    ],
    erreursCourantes: [
      "Cuisson sans marinade : peut être ferme",
      "Tranches dans le sens des fibres : mastication difficile",
      "Cuisson excessive : devient sec"
    ],
    anecdotes: "Le dessus de palette est apprécié aux États-Unis sous le nom de 'flat iron steak'. Il a été redécouvert par les chercheurs de l'université du Nebraska qui ont identifié ce morceau méconnu comme l'un des plus tendres de l'animal."
  },

  surpris_boule_de_macreuse: {
    anatomie: "Petit muscle rond caché dans l'épaule, le surpris (ou boule de macreuse) pèse environ 400-500g. Sa tendreté surprenante lui a donné son nom.",
    caracteristiques: {
      tendrete: "8/10 - Étonnamment tendre",
      saveur: "8/10 - Goût prononcé",
      persillage: "3/10 - Maigre"
    },
    techniquesChef: [
      "Griller ou poêler rapidement",
      "Cuisson saignante à rosée idéale",
      "Peut être rôti entier comme un filet",
      "Trancher finement pour servir",
      "Marinade non nécessaire vu sa tendreté"
    ],
    sauces: [
      { nom: "Sauce au vin rouge", type: "Française", description: "Vin rouge, échalotes, fond de veau", accord: "Classique indémodable" },
      { nom: "Beurre persillé", type: "Française", description: "Beurre, persil, ail", accord: "Simple et délicieux" }
    ],
    accompagnements: [
      { type: "Raffinés", suggestions: ["Pommes de terre au four", "Légumes de saison rôtis"] },
      { type: "Simples", suggestions: ["Frites", "Salade verte"] }
    ],
    vins: [
      { type: "Rouges équilibrés", suggestions: ["Haut-Médoc", "Pessac-Léognan"], temperature: "17-18°C", notes: "Bordeaux pour ce morceau méconnu" }
    ],
    erreursCourantes: [
      "Méconnaissance : souvent vendu comme macreuse ordinaire",
      "Cuisson trop longue : perd sa tendreté",
      "Découpe grossière : gâche la finesse"
    ],
    anecdotes: "Le surpris tire son nom de la surprise qu'éprouvent ceux qui goûtent ce morceau méconnu. Caché dans l'épaule, il était autrefois fondu dans la macreuse à pot-au-feu. Les bouchers avertis l'isolent maintenant pour les connaisseurs."
  },

  aiguillette_baronne: {
    anatomie: "Muscle long et fin prélevé dans la cuisse, l'aiguillette baronne doit son nom à sa forme effilée. Environ 400-600g, très maigre.",
    caracteristiques: {
      tendrete: "7/10 - Assez tendre",
      saveur: "7/10 - Bon goût de bœuf",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Idéale pour les rôtis individuels",
      "Peut être grillée en brochettes",
      "Barder recommandé car très maigre",
      "Cuisson rosée pour éviter le dessèchement",
      "Excellente émincée pour les woks"
    ],
    sauces: [
      { nom: "Sauce aux morilles", type: "Française", description: "Morilles, crème, vin jaune", accord: "Luxe et élégance" },
      { nom: "Sauce soja gingembre", type: "Asiatique", description: "Sauce soja, gingembre, sésame", accord: "Pour les émincés asiatiques" }
    ],
    accompagnements: [
      { type: "Français", suggestions: ["Gratin de pommes de terre", "Haricots verts fins"] },
      { type: "Asiatique", suggestions: ["Nouilles sautées", "Légumes croquants au wok"] }
    ],
    vins: [
      { type: "Rouges fins", suggestions: ["Chinon", "Saumur-Champigny", "Bourgueil"], temperature: "15-16°C", notes: "Cabernet franc léger" }
    ],
    erreursCourantes: [
      "Cuisson sans barde : dessèchement",
      "Température trop basse : viande bouillie",
      "Tranches épaisses : mastication difficile"
    ],
    anecdotes: "L'aiguillette baronne était traditionnellement réservée aux dames de la noblesse, son nom évoquant le titre de baronne. Sa finesse et sa délicatesse en faisaient un mets féminin selon les codes de l'époque."
  },

  aiguillette_de_rumsteck: {
    anatomie: "Fine pointe du rumsteck, l'aiguillette est un morceau maigre et tendre. Environ 200-300g, idéal pour une portion individuelle.",
    caracteristiques: {
      tendrete: "8/10 - Tendre",
      saveur: "7/10 - Délicat",
      persillage: "2/10 - Très maigre"
    },
    techniquesChef: [
      "Parfaite pour les portions individuelles",
      "Griller ou poêler rapidement",
      "Cuisson rosée impérative",
      "Idéale en brochettes ou émincés",
      "Se marie bien aux marinades"
    ],
    sauces: [
      { nom: "Sauce teryaki", type: "Japonaise", description: "Sauce soja, mirin, sucre, gingembre", accord: "Umami et douceur" },
      { nom: "Sauce aux herbes", type: "Française", description: "Herbes fraîches, échalotes, vin blanc", accord: "Fraîcheur printanière" }
    ],
    accompagnements: [
      { type: "Légers", suggestions: ["Riz parfumé", "Légumes sautés", "Salade"] },
      { type: "Classiques", suggestions: ["Pommes de terre sautées", "Champignons"] }
    ],
    vins: [
      { type: "Rouges légers", suggestions: ["Fleurie", "Morgon", "Régnié"], temperature: "14-15°C", notes: "Beaujolais crus pour cette viande fine" }
    ],
    erreursCourantes: [
      "Cuisson excessive : sèche rapidement",
      "Morceaux trop petits : difficile à saisir",
      "Assaisonnement tardif : manque de goût"
    ],
    anecdotes: "L'aiguillette de rumsteck est particulièrement appréciée des sportifs pour son apport protéique élevé et sa faible teneur en gras. Elle est devenue populaire dans les régimes hyperprotéinés."
  },

  tendron: {
    anatomie: "Partie cartilagineuse du thorax, le tendron contient côtes et cartilages. Très gélatineux après cuisson longue. Se vend en morceaux de 500g-1kg.",
    caracteristiques: {
      tendrete: "3/10 cru - 9/10 braisé",
      saveur: "9/10 - Très parfumé",
      persillage: "5/10 - Entrelardé et gélatineux"
    },
    techniquesChef: [
      "Braiser impérativement (minimum 3 heures)",
      "Les cartilages deviennent fondants",
      "Excellent grillé après braisage (double cuisson)",
      "Le gras fond et parfume la viande",
      "Se défait en filaments tendres"
    ],
    sauces: [
      { nom: "Jus de braisage réduit", type: "Française", description: "Le jus concentré et monté au beurre", accord: "L'essence même du plat" },
      { nom: "Sauce barbecue", type: "Américaine", description: "Pour le tendron grillé après braisage", accord: "Version texane" }
    ],
    accompagnements: [
      { type: "Braisé", suggestions: ["Purée de pommes de terre", "Carottes glacées", "Oignons confits"] },
      { type: "Grillé", suggestions: ["Coleslaw", "Frites", "Cornbread"] }
    ],
    vins: [
      { type: "Rouges puissants", suggestions: ["Cahors", "Madiran", "Corbières"], temperature: "17-18°C", notes: "Vins tanniques du Sud-Ouest" }
    ],
    erreursCourantes: [
      "Cuisson rapide : cartilages immangeables",
      "Température trop haute : viande sèche",
      "Ne pas griller après braisage : manque une dimension"
    ],
    anecdotes: "Le tendron est devenu une star du BBQ américain sous le nom de 'short ribs'. La technique de braisage puis grillade (double cuisson) a été popularisée par les pit masters coréens de Los Angeles."
  },

  jumeau_a_bifteck: {
    anatomie: "Version maigre du jumeau, situé dans l'épaule. Plus tendre que son homonyme à pot-au-feu. Convient aux cuissons rapides. Environ 1-1,5 kg.",
    caracteristiques: {
      tendrete: "7/10 - Correct en grillade",
      saveur: "8/10 - Goût prononcé",
      persillage: "3/10 - Légèrement persillé"
    },
    techniquesChef: [
      "Griller ou poêler à feu vif",
      "Cuisson saignante à rosée",
      "Idéal en steaks épais (2-3 cm)",
      "Découpe contre les fibres importante",
      "Se prête bien aux marinades courtes"
    ],
    sauces: [
      { nom: "Sauce marchand de vin", type: "Française", description: "Vin rouge, échalotes, moelle, fond de veau", accord: "Grand classique des bistrots" },
      { nom: "Beurre maître d'hôtel", type: "Française", description: "Beurre, persil, citron", accord: "Simple et efficace" }
    ],
    accompagnements: [
      { type: "Bistrot", suggestions: ["Frites maison", "Salade frisée", "Échalotes"] },
      { type: "Classiques", suggestions: ["Pommes dauphine", "Haricots verts"] }
    ],
    vins: [
      { type: "Rouges fruités", suggestions: ["Côtes du Rhône", "Minervois", "Faugères"], temperature: "16-17°C", notes: "Vins du sud généreux" }
    ],
    erreursCourantes: [
      "Confusion avec jumeau à pot-au-feu : cuisson inadaptée",
      "Steaks trop fins : cuisson difficile",
      "Cuisson excessive : devient sec"
    ],
    anecdotes: "Le jumeau à bifteck est l'alternative économique à l'entrecôte. Il offre un excellent rapport qualité/prix pour ceux qui recherchent une viande goûteuse sans le prix des morceaux nobles."
  },

  mouvant: {
    anatomie: "Muscle de la cuisse proche du gîte, le mouvant est un morceau méconnu. Fibres longues mais assez tendres. Environ 500-700g.",
    caracteristiques: {
      tendrete: "6/10 - Correct",
      saveur: "7/10 - Bon goût de bœuf",
      persillage: "3/10 - Maigre"
    },
    techniquesChef: [
      "Braiser de préférence pour plus de tendreté",
      "Peut être grillé si mariné",
      "Émincé pour les sautés",
      "Cuisson moyenne à point maximum",
      "Découpe fine contre les fibres"
    ],
    sauces: [
      { nom: "Sauce aux champignons", type: "Française", description: "Champignons, crème, persil", accord: "Onctuosité pour viande maigre" },
      { nom: "Sauce stroganoff", type: "Russe", description: "Crème, moutarde, cornichons, paprika", accord: "Le classique des émincés" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Riz pilaf", "Tagliatelles", "Pommes de terre vapeur"] },
      { type: "Légumes", suggestions: ["Champignons poêlés", "Épinards", "Haricots verts"] }
    ],
    vins: [
      { type: "Rouges moyens", suggestions: ["Côtes du Roussillon", "Ventoux", "Luberon"], temperature: "15-16°C", notes: "Vins souples et fruités" }
    ],
    erreursCourantes: [
      "Grillade sans préparation : viande ferme",
      "Tranches trop épaisses : difficile à mâcher",
      "Méconnaissance du morceau : souvent mal utilisé"
    ],
    anecdotes: "Le mouvant tire son nom du mouvement constant de ce muscle lors de la marche du bœuf. C'est un morceau de connaiseur, peu connu du grand public mais apprécié des amateurs de viande économique."
  },

  tranche_grasse: {
    anatomie: "Partie de la cuisse, la tranche grasse est plus persillée que les autres morceaux de la tranche. Muscle arrondi, environ 2-3 kg.",
    caracteristiques: {
      tendrete: "6/10 - Correct",
      saveur: "8/10 - Goûteux grâce au persillage",
      persillage: "5/10 - Bien persillée"
    },
    techniquesChef: [
      "Idéale en rôti ou braisée",
      "Le persillage garde la viande juteuse",
      "Peut être taillée en pavés épais",
      "Cuisson rosée à point",
      "Repos obligatoire avant découpe"
    ],
    sauces: [
      { nom: "Sauce bordelaise", type: "Française", description: "Vin rouge, échalotes, moelle", accord: "Accord régional parfait" },
      { nom: "Jus au thym", type: "Française", description: "Fond de veau, thym frais", accord: "Simplicité aromatique" }
    ],
    accompagnements: [
      { type: "Rôti", suggestions: ["Pommes de terre rôties", "Légumes racines", "Yorkshire pudding"] },
      { type: "Braisé", suggestions: ["Purée", "Carottes", "Champignons"] }
    ],
    vins: [
      { type: "Rouges charpentés", suggestions: ["Saint-Émilion", "Pomerol", "Fronsac"], temperature: "17-18°C", notes: "Bordeaux rive droite" }
    ],
    erreursCourantes: [
      "Cuisson excessive : perd le bénéfice du persillage",
      "Température trop basse : gras non fondu",
      "Découpe trop hâtive : perte de jus"
    ],
    anecdotes: "La tranche grasse était autrefois moins valorisée car considérée comme trop grasse. Elle est aujourd'hui recherchée par ceux qui apprécient une viande juteuse et savoureuse."
  },

  rond_de_gite: {
    anatomie: "Partie arrondie du gîte, le rond est plus tendre que le gîte entier. Convient mieux aux cuissons moyennes. Environ 1-1,5 kg.",
    caracteristiques: {
      tendrete: "5/10 - Moyen",
      saveur: "7/10 - Bon goût",
      persillage: "2/10 - Maigre"
    },
    techniquesChef: [
      "Braiser pour maximum de tendreté",
      "Peut être rôti bardé",
      "Émincé fin pour les sautés",
      "Éviter la grillade pure",
      "Cuisson humide recommandée"
    ],
    sauces: [
      { nom: "Sauce aux carottes", type: "Française", description: "Carottes, oignons, fond de veau", accord: "Douceur des légumes" },
      { nom: "Sauce au paprika", type: "Hongroise", description: "Paprika, crème, oignons", accord: "Version goulash" }
    ],
    accompagnements: [
      { type: "Braisé", suggestions: ["Spätzle", "Nouilles", "Pommes vapeur"] },
      { type: "Émincé", suggestions: ["Riz", "Légumes sautés"] }
    ],
    vins: [
      { type: "Rouges souples", suggestions: ["Côtes de Bourg", "Blaye", "Premières Côtes"], temperature: "15-16°C", notes: "Bordeaux accessibles" }
    ],
    erreursCourantes: [
      "Grillade sans préparation : viande dure",
      "Cuisson insuffisante en braisé : reste ferme",
      "Découpe dans le sens des fibres"
    ],
    anecdotes: "Le rond de gîte est populaire dans la cuisine d'Europe centrale où il entre dans la préparation du goulash. En Hongrie, il est mijoté longuement avec du paprika."
  },

  gite_a_la_noix: {
    anatomie: "Le gîte à la noix inclut l'os central (la noix). C'est la pièce entière avec os, parfaite pour l'osso buco de bœuf. Tranches de 300-400g avec os.",
    caracteristiques: {
      tendrete: "3/10 cru - 9/10 braisé",
      saveur: "9/10 - Exceptionnel grâce à l'os",
      persillage: "2/10 - Maigre mais gélatineux"
    },
    techniquesChef: [
      "Braiser en tranches avec os (osso buco)",
      "L'os enrichit considérablement le jus",
      "Cuisson minimum 3 heures",
      "La moelle se déguste à la cuillère",
      "Servir avec gremolata traditionnelle"
    ],
    sauces: [
      { nom: "Jus de braisage", type: "Italienne", description: "Tomates, vin blanc, légumes", accord: "Base de l'osso buco" },
      { nom: "Gremolata", type: "Italienne", description: "Persil, ail, zeste de citron", accord: "Fraîcheur indispensable" }
    ],
    accompagnements: [
      { type: "Italien", suggestions: ["Risotto alla milanese (safran)", "Polenta"] },
      { type: "Classique", suggestions: ["Purée de pommes de terre", "Légumes braisés"] }
    ],
    vins: [
      { type: "Rouges italiens", suggestions: ["Amarone", "Barolo", "Barbaresco"], temperature: "17-18°C", notes: "Grands vins pour ce plat noble" }
    ],
    erreursCourantes: [
      "Cuisson insuffisante : viande dure",
      "Jeter la moelle : c'est le trésor !",
      "Oublier la gremolata : manque la fraîcheur"
    ],
    anecdotes: "Le gîte à la noix est l'équivalent bœuf de l'osso buco de veau milanais. Cette version plus robuste est appréciée dans le nord de l'Italie et gagne en popularité en France."
  },

  rognons: {
    anatomie: "Les rognons de bœuf sont les reins de l'animal. Organe filtrant au goût prononcé. Un rognon pèse 500-700g. Se vend entier ou en tranches.",
    caracteristiques: {
      tendrete: "7/10 - Tendre si bien cuit",
      saveur: "9/10 - Très prononcé",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Retirer soigneusement le gras et les canaux",
      "Tremper dans du lait 2h pour adoucir",
      "Cuisson rapide à feu vif",
      "Doit rester rosé à l'intérieur",
      "Ne jamais recuire : devient caoutchouteux"
    ],
    sauces: [
      { nom: "Sauce moutarde", type: "Française", description: "Moutarde, crème, échalotes", accord: "L'accord classique des bistrots" },
      { nom: "Sauce madère", type: "Française", description: "Madère, fond de veau, beurre", accord: "Élégance et profondeur" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Riz pilaf", "Pommes de terre sautées", "Purée"] },
      { type: "Légumes", suggestions: ["Champignons", "Épinards", "Haricots verts"] }
    ],
    vins: [
      { type: "Rouges corsés", suggestions: ["Madiran", "Cahors", "Pecharmant"], temperature: "16-17°C", notes: "Vins du Sud-Ouest tanniques" }
    ],
    erreursCourantes: [
      "Cuisson excessive : texture caoutchouteuse",
      "Ne pas dégorger : goût trop fort",
      "Laisser les canaux : goût urineux"
    ],
    anecdotes: "Les rognons de bœuf étaient un classique des bistrots parisiens jusque dans les années 1980. Le 'rognon de veau sauce moutarde' reste un pilier de la cuisine bourgeoise française."
  },

  coeur: {
    anatomie: "Le cœur de bœuf est un muscle strié pesant 2-3 kg. Chair ferme et maigre, goût prononcé. Se vend entier ou en tranches.",
    caracteristiques: {
      tendrete: "5/10 - Ferme mais pas dur",
      saveur: "8/10 - Goût de viande marqué",
      persillage: "1/10 - Très maigre"
    },
    techniquesChef: [
      "Retirer les valves, artères et gras",
      "Trancher finement pour grillade",
      "Peut être braisé entier (3-4h)",
      "Excellent en brochettes (anticuchos)",
      "Marinade recommandée"
    ],
    sauces: [
      { nom: "Sauce chimichurri", type: "Argentine", description: "Persil, ail, origan, vinaigre", accord: "Fraîcheur sur viande grillée" },
      { nom: "Sauce piquante péruvienne", type: "Péruvienne", description: "Piments, vinaigre, cumin", accord: "Pour les anticuchos" }
    ],
    accompagnements: [
      { type: "Latino", suggestions: ["Pommes de terre andines", "Maïs grillé", "Salsa criolla"] },
      { type: "Français", suggestions: ["Riz", "Légumes grillés"] }
    ],
    vins: [
      { type: "Rouges fruités", suggestions: ["Malbec argentin", "Carmenère chilien"], temperature: "16-17°C", notes: "Vins d'Amérique du Sud" }
    ],
    erreursCourantes: [
      "Tranches trop épaisses : mastication difficile",
      "Cuisson excessive : devient très ferme",
      "Ne pas retirer les parties dures"
    ],
    anecdotes: "Le cœur de bœuf est très apprécié en Amérique du Sud, notamment au Pérou où les 'anticuchos de corazón' (brochettes de cœur) sont un plat de rue emblématique depuis l'époque inca."
  },

  ris_de_boeuf: {
    anatomie: "Le ris est le thymus de l'animal, glande présente chez les jeunes bovins. Texture crémeuse et délicate. Environ 200-400g par animal.",
    caracteristiques: {
      tendrete: "9/10 - Très tendre",
      saveur: "8/10 - Délicat et fin",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Dégorger plusieurs heures dans l'eau froide",
      "Blanchir puis peler la membrane",
      "Presser entre deux plaques pour égoutter",
      "Poêler au beurre mousseux",
      "Doit être doré à l'extérieur, crémeux à l'intérieur"
    ],
    sauces: [
      { nom: "Sauce aux morilles", type: "Française", description: "Morilles, crème, vin jaune", accord: "Le mariage parfait" },
      { nom: "Jus de veau au porto", type: "Française", description: "Fond de veau, porto, beurre", accord: "Élégance et douceur" }
    ],
    accompagnements: [
      { type: "Raffinés", suggestions: ["Risotto aux asperges", "Petits pois à la française", "Épinards"] },
      { type: "Classiques", suggestions: ["Pommes de terre fondantes", "Légumes printaniers"] }
    ],
    vins: [
      { type: "Blancs de garde", suggestions: ["Meursault", "Puligny-Montrachet", "Pessac-Léognan blanc"], temperature: "12-14°C", notes: "Grands blancs pour ce mets délicat" }
    ],
    erreursCourantes: [
      "Ne pas dégorger : goût de sang",
      "Ne pas peler : texture désagréable",
      "Cuisson excessive : perd son crémeux"
    ],
    anecdotes: "Le ris de bœuf est moins connu que le ris de veau mais tout aussi délicieux. Il était très prisé à la Renaissance où il était considéré comme un mets aphrodisiaque réservé à la noblesse."
  },

  cervelle: {
    anatomie: "La cervelle de bœuf pèse environ 400-500g. Texture très crémeuse et délicate. Doit être extrêmement fraîche.",
    caracteristiques: {
      tendrete: "10/10 - Fondante",
      saveur: "7/10 - Très délicat",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Dégorger plusieurs heures dans l'eau vinaigrée",
      "Retirer délicatement les membranes",
      "Pocher doucement puis poêler",
      "Frire en beignets (cervelle frite)",
      "Manipuler avec grande délicatesse"
    ],
    sauces: [
      { nom: "Beurre noir", type: "Française", description: "Beurre noisette, câpres, vinaigre, persil", accord: "Le classique absolu" },
      { nom: "Sauce ravigote", type: "Française", description: "Câpres, cornichons, fines herbes", accord: "Acidité et fraîcheur" }
    ],
    accompagnements: [
      { type: "Classiques", suggestions: ["Pommes de terre vapeur", "Salade verte", "Pain grillé"] },
      { type: "Friture", suggestions: ["Quartier de citron", "Persil frit", "Frites"] }
    ],
    vins: [
      { type: "Blancs secs", suggestions: ["Muscadet", "Entre-deux-Mers", "Côtes de Gascogne"], temperature: "10-12°C", notes: "Blancs vifs et légers" }
    ],
    erreursCourantes: [
      "Cervelle pas fraîche : goût désagréable",
      "Manipulation brutale : se désagrège",
      "Cuisson excessive : perd sa texture"
    ],
    anecdotes: "La cervelle au beurre noir est un classique de la cuisine lyonnaise. Ce plat était autrefois très populaire dans les bouchons, ces petits restaurants traditionnels de Lyon."
  },

  tripes_gras_double_bonnet: {
    anatomie: "Les tripes regroupent plusieurs parties de l'estomac : la panse, le bonnet (ou réseau), le feuillet et la caillette. Texture unique, goût prononcé.",
    caracteristiques: {
      tendrete: "6/10 - Particulière",
      saveur: "8/10 - Très typé",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Acheter précuites et blanchies",
      "Braiser longuement (4-6 heures minimum)",
      "Couper en lanières régulières",
      "Les saveurs se développent à la cuisson",
      "Encore meilleur réchauffé le lendemain"
    ],
    sauces: [
      { nom: "Sauce tomate au cidre", type: "Normande", description: "Tomates, cidre, calvados, carottes", accord: "Tripes à la mode de Caen" },
      { nom: "Sauce tomate épicée", type: "Espagnole", description: "Tomates, chorizo, piment", accord: "Callos à la madrileña" }
    ],
    accompagnements: [
      { type: "Normand", suggestions: ["Pommes de terre vapeur", "Pain de campagne", "Cidre"] },
      { type: "Espagnol", suggestions: ["Pois chiches", "Chorizo", "Pain grillé"] }
    ],
    vins: [
      { type: "Cidre ou rouges rustiques", suggestions: ["Cidre brut", "Côtes du Rhône", "Irouléguy"], temperature: "12-16°C", notes: "Boissons de caractère" }
    ],
    erreursCourantes: [
      "Cuisson insuffisante : texture désagréable",
      "Tripes mal nettoyées : goût prononcé",
      "Manque d'assaisonnement : plat fade"
    ],
    anecdotes: "Les tripes à la mode de Caen sont inscrites au patrimoine gastronomique normand. La recette traditionnelle demande 10 à 12 heures de cuisson dans un récipient scellé à la pâte."
  },

  feuillet: {
    anatomie: "Le feuillet est le troisième compartiment de l'estomac du bœuf. Il présente des replis en forme de feuillets. Texture ferme, goût prononcé.",
    caracteristiques: {
      tendrete: "5/10 - Ferme",
      saveur: "7/10 - Typé",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Bien nettoyer et blanchir",
      "Braiser longuement avec aromates",
      "Entre dans la composition des tripes",
      "Peut être frit après cuisson",
      "Nécessite une longue préparation"
    ],
    sauces: [
      { nom: "Sauce à la tomate", type: "Française", description: "Tomates, oignons, ail, thym", accord: "Base classique des tripes" },
      { nom: "Sauce piquante", type: "Méditerranéenne", description: "Piments, ail, vinaigre", accord: "Version relevée" }
    ],
    accompagnements: [
      { type: "Traditionnels", suggestions: ["Pommes de terre", "Pain de campagne"] },
      { type: "Méditerranéens", suggestions: ["Pois chiches", "Légumes mijotés"] }
    ],
    vins: [
      { type: "Rouges rustiques", suggestions: ["Corbières", "Fitou", "Minervois"], temperature: "15-16°C", notes: "Vins du Sud robustes" }
    ],
    erreursCourantes: [
      "Nettoyage insuffisant : goût trop fort",
      "Cuisson courte : texture coriace",
      "Utilisation seul : mieux en mélange"
    ],
    anecdotes: "Le feuillet tire son nom de sa structure en lamelles parallèles qui ressemblent aux pages d'un livre. C'est l'un des quatre estomacs des ruminants, avec la panse, le bonnet et la caillette."
  },

  caillette: {
    anatomie: "La caillette est le quatrième et vrai estomac du bœuf, celui qui produit les sucs gastriques. Plus tendre que les autres estomacs. Environ 1-2 kg.",
    caracteristiques: {
      tendrete: "6/10 - Plus tendre que les autres tripes",
      saveur: "7/10 - Moins fort que les autres tripes",
      persillage: "N/A - Abat"
    },
    techniquesChef: [
      "Nettoyer soigneusement",
      "Peut être préparée seule (plus délicate)",
      "Braiser ou mijoter longuement",
      "Base de certains plats traditionnels",
      "S'utilise aussi pour faire cailler le lait (présure)"
    ],
    sauces: [
      { nom: "Sauce au vin blanc", type: "Française", description: "Vin blanc, échalotes, crème", accord: "Légèreté pour cet abat délicat" },
      { nom: "Sauce provençale", type: "Provençale", description: "Tomates, olives, herbes de Provence", accord: "Saveurs du Sud" }
    ],
    accompagnements: [
      { type: "Légers", suggestions: ["Riz", "Légumes verts", "Salade"] },
      { type: "Traditionnels", suggestions: ["Pommes de terre", "Carottes glacées"] }
    ],
    vins: [
      { type: "Blancs ou rosés", suggestions: ["Côtes de Provence rosé", "Cassis blanc"], temperature: "10-12°C", notes: "Vins frais pour abat délicat" }
    ],
    erreursCourantes: [
      "Confondre avec autres tripes : préparation différente",
      "Cuisson trop longue : perd sa texture",
      "Assaisonnement trop fort : masque la finesse"
    ],
    anecdotes: "La caillette contient de la présure, enzyme naturelle utilisée depuis l'Antiquité pour faire cailler le lait et fabriquer le fromage. Elle a donné son nom à un célèbre plat ardéchois : la caillette (farce de porc et blettes)."
  }
};

module.exports = nouveauxMorceauxBoeuf;
