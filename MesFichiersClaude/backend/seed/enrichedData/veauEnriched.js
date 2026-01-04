// Données enrichies pour le Veau - Morceaux Classiques et Boucher

const veauClassiqueEnriched = {
  "Escalope de veau": {
    anatomie: { localisation: "Noix ou sous-noix", origine: "Cuisse, tranché fin", muscles: ["Variable"], categorie: "Morceau noble" },
    techniqueDuChef: ["Aplatir légèrement pour uniformiser", "Fariner juste avant cuisson", "Poêle très chaude", "2-3 min par face maximum", "Ne pas surcharger la poêle", "Servir immédiatement"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat, subtil", gras: "Très maigre", fibres: "Coupées", couleur: "Rose très pâle", tenue: "Fragile" },
    sauces: [{ nom: "Sauce milanaise", type: "italien", description: "Tomate, jambon, champignons" }, { nom: "Sauce piccata", type: "italien", description: "Citron, câpres, beurre" }, { nom: "Sauce à la crème", type: "classique", description: "Crème, champignons" }],
    accompagnements: [{ nom: "Spaghetti", recetteId: "spaghetti", type: "féculent" }, { nom: "Risotto", recetteId: "risotto", type: "féculent" }, { nom: "Légumes grillés", recetteId: "legumes_grilles", type: "légume" }],
    erreursAEviter: [{ erreur: "Escalope trop épaisse", consequence: "Cuisson inégale", solution: "Maximum 5-8mm, aplatir si besoin" }, { erreur: "Poêle pas assez chaude", consequence: "Viande qui rend son eau", solution: "Poêle fumante" }],
    leSaviezVous: "L'escalope milanaise a inspiré le Wiener Schnitzel autrichien ! La vraie recette italienne utilise des œufs et de la chapelure fine. Le veau de lait sous la mère (élevé au pis) est le plus réputé."
  },
  "Rôti de veau": {
    anatomie: { localisation: "Noix, quasi ou longe", origine: "Cuisse ou dos", muscles: ["Variables selon partie"], categorie: "Morceau noble" },
    techniqueDuChef: ["Ficeler régulièrement", "Sortir 1h avant cuisson", "Saisir de tous côtés", "Four à 180°C, 25-30 min/500g", "Arroser souvent", "Repos 15 min obligatoire"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Délicat", gras: "Maigre, barder si besoin", fibres: "Fines", couleur: "Rose pâle", tenue: "Excellente" },
    sauces: [{ nom: "Jus de rôti", type: "simple", description: "Fond déglaçé" }, { nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème, vin jaune" }, { nom: "Sauce estragon", type: "classique", description: "Estragon, crème, vinaigre" }],
    accompagnements: [{ nom: "Carottes glacées", recetteId: "carottes_glacees", type: "légume" }, { nom: "Petits pois", recetteId: "petits_pois", type: "légume" }, { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" }],
    erreursAEviter: [{ erreur: "Ne pas barder", consequence: "Viande sèche car très maigre", solution: "Barder de lard ou envelopper de crépine" }, { erreur: "Four trop chaud", consequence: "Croûte dure, intérieur sec", solution: "180°C maximum" }],
    leSaviezVous: "Le rôti de veau est le plat du dimanche par excellence en France ! La viande de veau française est réputée parmi les meilleures au monde. L'AOP 'Veau de l'Aveyron et du Ségala' est particulièrement prisée."
  },
  "Côte de veau": {
    anatomie: { localisation: "Partie dorsale avec os", origine: "Carré", muscles: ["Longissimus"], categorie: "Morceau noble" },
    techniqueDuChef: ["Sortir 45 min avant", "Saisir à feu vif côté gras", "Finir à feu moyen", "Arroser de beurre moussant", "Cuisson rosée pour maximum tendreté", "Repos égal au temps de cuisson"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Délicat, beurré", gras: "Bordure grasse", fibres: "Fines", couleur: "Rose pâle", tenue: "Excellente avec os" },
    sauces: [{ nom: "Beurre noisette", type: "simple", description: "Beurre mousseux, citron" }, { nom: "Sauce aux champignons", type: "classique", description: "Champignons, crème" }, { nom: "Jus au thym", type: "simple", description: "Thym frais, fond de veau" }],
    accompagnements: [{ nom: "Pommes de terre fondantes", recetteId: "pommes_fondantes", type: "féculent" }, { nom: "Épinards à la crème", recetteId: "epinards_creme", type: "légume" }, { nom: "Morilles", recetteId: "morilles_sautees", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire bien cuit", consequence: "Viande sèche et sans saveur", solution: "Rosé au centre, encore nacré" }, { erreur: "Feu trop fort tout le temps", consequence: "Extérieur brûlé", solution: "Saisir puis baisser le feu" }],
    leSaviezVous: "La côte de veau poêlée au beurre est un classique de la gastronomie française ! La côte 'première' (près de la selle) est la plus prisée. Un veau de qualité donne une viande rosée et nacrée."
  },
  "Filet": {
    anatomie: { localisation: "Sous les vertèbres lombaires", origine: "Muscle psoas", muscles: ["Psoas major"], categorie: "Morceau noble" },
    techniqueDuChef: ["Retirer la chaîne", "Très petit (600-800g)", "Cuisson rapide", "Rosé obligatoire", "Peut être enrobé de croûte", "Repos court"],
    caracteristiques: { texture: "Extrêmement tendre", gout: "Très délicat", gras: "Très maigre", fibres: "Très fines", couleur: "Rose pâle", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème, vin jaune" }, { nom: "Jus corsé", type: "simple", description: "Fond de veau réduit" }],
    accompagnements: [{ nom: "Asperges vertes", recetteId: "asperges_vertes", type: "légume" }, { nom: "Risotto aux herbes", recetteId: "risotto_herbes", type: "féculent" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Viande sèche", solution: "Maximum rosé" }],
    leSaviezVous: "Le filet de veau est l'un des morceaux les plus chers et les plus rares ! Un seul filet par animal d'environ 600-800g. C'est le morceau préféré des grands chefs pour les plats de fête."
  },
  "Carré de veau": {
    anatomie: { localisation: "Dos avec les côtes", origine: "Train de côtes", muscles: ["Longissimus"], categorie: "Morceau noble d'exception" },
    techniqueDuChef: ["Manchonner les os", "Inciser le gras", "Commencer à four chaud", "Cuisson rosée", "Présentation impressionnante", "Découper en côtes pour servir"],
    caracteristiques: { texture: "Très tendre", gout: "Fin et délicat", gras: "Couverture fine", fibres: "Fines", couleur: "Rose pâle", tenue: "Spectaculaire" },
    sauces: [{ nom: "Jus aux herbes", type: "simple", description: "Herbes fraîches, fond de veau" }],
    accompagnements: [{ nom: "Légumes glacés", recetteId: "legumes_glaces", type: "légume" }, { nom: "Gratin fin", recetteId: "gratin_fin", type: "féculent" }],
    erreursAEviter: [{ erreur: "Os qui brûlent", consequence: "Goût amer", solution: "Protéger les os avec alu" }],
    leSaviezVous: "Le carré de veau est la pièce de choix des grandes occasions ! En couronne (crown roast), c'est spectaculaire. Le veau français Label Rouge garantit un élevage de qualité."
  },
  "Noix": {
    anatomie: { localisation: "Face externe de la cuisse", origine: "Muscle de la cuisse", muscles: ["Principaux de la cuisse"], categorie: "Morceau de première catégorie" },
    techniqueDuChef: ["Le morceau le plus tendre de la cuisse", "Parfait pour escalopes", "Peut être rôti entier", "Cuisson précise car maigre", "Trancher perpendiculairement", "Reposer si rôti"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat", gras: "Très maigre", fibres: "Fines", couleur: "Rose pâle", tenue: "Excellente" },
    sauces: [{ nom: "Sauce crème", type: "classique", description: "Crème, champignons" }, { nom: "Sauce au citron", type: "légère", description: "Citron, beurre" }],
    accompagnements: [{ nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" }, { nom: "Légumes printaniers", recetteId: "legumes_printaniers", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Très sec car très maigre", solution: "Cuisson rosée ou sauce généreuse" }],
    leSaviezVous: "La noix de veau est le morceau traditionnel pour les escalopes de qualité ! Elle donne les tranches les plus régulières et les plus tendres."
  },
  "Quasi": {
    anatomie: { localisation: "Au-dessus de la cuisse, partie arrière", origine: "Croupe", muscles: ["Gluteus"], categorie: "Morceau de première catégorie" },
    techniqueDuChef: ["Excellent en rôti", "Partie la plus charnue", "Ficeler soigneusement", "Cuisson rosée", "Se tranche bien", "Reposer longuement"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Savoureux", gras: "Légèrement persillé", fibres: "Moyennes", couleur: "Rose", tenue: "Très bonne" },
    sauces: [{ nom: "Sauce forestière", type: "classique", description: "Champignons des bois" }, { nom: "Jus au thym", type: "simple", description: "Thym, fond de veau" }],
    accompagnements: [{ nom: "Gratin de légumes", recetteId: "gratin_legumes", type: "légume" }, { nom: "Pommes boulangères", recetteId: "pommes_boulangeres", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson trop poussée", consequence: "Viande sèche", solution: "Rosé au centre" }],
    leSaviezVous: "Le quasi de veau est souvent préféré au filet par les connaisseurs pour son goût plus prononcé ! C'est le 'rumsteck' du veau."
  },
  "Épaule": {
    anatomie: { localisation: "Membre antérieur", origine: "Muscles de l'épaule", muscles: ["Muscles de l'épaule"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Idéale braisée ou en blanquette", "Peut être farcie et roulée", "Cuisson longue pour fondant", "Le collagène enrichit", "Excellent rapport qualité-prix", "Réchauffé c'est meilleur"],
    caracteristiques: { texture: "Fondante après cuisson longue", gout: "Savoureux", gras: "Légèrement gras", fibres: "Moyennes", couleur: "Rose", tenue: "Se défait facilement" },
    sauces: [{ nom: "Sauce blanquette", type: "classique", description: "Crème, champignons, oignons" }, { nom: "Jus de braisage", type: "simple", description: "Fond réduit" }],
    accompagnements: [{ nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" }, { nom: "Carottes", recetteId: "carottes_glacees", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Viande ferme", solution: "1h30 minimum de braisage" }],
    leSaviezVous: "L'épaule de veau est le morceau traditionnel de la blanquette ! Ce plat familial français date du XVIIIe siècle. La sauce 'blanquette' tire son nom de la couleur blanche de la sauce."
  },
  "Collier": {
    anatomie: { localisation: "Cou de l'animal", origine: "Muscles cervicaux", muscles: ["Muscles du cou"], categorie: "Morceau de troisième catégorie" },
    techniqueDuChef: ["Parfait pour blanquette", "Riche en collagène", "Cuisson longue", "Couper en gros morceaux", "Le gras fond et enrichit", "Économique et savoureux"],
    caracteristiques: { texture: "Gélatineuse", gout: "Très savoureux", gras: "Bien gras", fibres: "Courtes", couleur: "Rose avec marbrures", tenue: "Se défait" },
    sauces: [{ nom: "Sauce blanquette", type: "classique", description: "Sauce blanche à la crème" }],
    accompagnements: [{ nom: "Riz blanc", recetteId: "riz_blanc", type: "féculent" }, { nom: "Champignons de Paris", recetteId: "champignons_paris", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson rapide", consequence: "Viande dure", solution: "1h30-2h de cuisson douce" }],
    leSaviezVous: "Le collier de veau est indispensable à la vraie blanquette ! Son collagène se transforme en gélatine et donne l'onctuosité caractéristique du plat."
  },
  "Tendron": {
    anatomie: { localisation: "Partie basse de la poitrine", origine: "Cartilages costaux", muscles: ["Intercostaux avec cartilages"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Les cartilages fondent à la cuisson", "Braisé uniquement", "Cuisson longue (2h30+)", "Devient fondant et gélatineux", "Morceau de connaisseur", "Excellent le lendemain"],
    caracteristiques: { texture: "Cartilagineux puis fondant", gout: "Très savoureux", gras: "Entrelardé de cartilages", fibres: "Courtes", couleur: "Rose avec blanc", tenue: "Gélatineuse" },
    sauces: [{ nom: "Sauce printanière", type: "classique", description: "Petits légumes, herbes" }, { nom: "Jus de braisage", type: "simple", description: "Fond réduit" }],
    accompagnements: [{ nom: "Petits légumes", recetteId: "petits_legumes", type: "légume" }, { nom: "Carottes nouvelles", recetteId: "carottes_nouvelles", type: "légume" }],
    erreursAEviter: [{ erreur: "Griller", consequence: "Cartilages durs", solution: "Braiser uniquement" }],
    leSaviezVous: "Le tendron de veau aux petits légumes est un grand classique de la cuisine bourgeoise ! Les cartilages fondus sont un délice de texture. C'est le morceau préféré des chefs pour les plats familiaux."
  },
  "Poitrine": {
    anatomie: { localisation: "Partie ventrale", origine: "Paroi abdominale", muscles: ["Muscles abdominaux"], categorie: "Morceau de troisième catégorie" },
    techniqueDuChef: ["Idéale farcie et roulée", "Braisée ou pochée", "Cuisson longue", "Le gras parfume", "Peut être désossée", "Économique"],
    caracteristiques: { texture: "Entrelardée", gout: "Savoureux", gras: "Bien gras", fibres: "Variables", couleur: "Rose et blanc", tenue: "Fondante" },
    sauces: [{ nom: "Sauce aux oignons", type: "classique", description: "Oignons confits, fond" }],
    accompagnements: [{ nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Retirer le gras", consequence: "Viande sèche", solution: "Le gras est nécessaire" }],
    leSaviezVous: "La poitrine de veau farcie est un plat traditionnel de la cuisine juive ashkénaze ! En Italie, elle est préparée 'alla genovese' avec une farce aux herbes."
  },
  "Jarret (osso buco)": {
    anatomie: { localisation: "Partie basse des pattes", origine: "Jarret avant ou arrière", muscles: ["Muscles du jarret"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Trancher avec l'os (3-4cm)", "L'os à moelle au centre est le trésor", "Braiser 2h minimum", "La viande doit se détacher", "Servir avec la gremolata", "Cuillère pour la moelle !"],
    caracteristiques: { texture: "Fondante et gélatineuse", gout: "Très savoureux", gras: "Maigre mais collagéneux", fibres: "Autour de l'os", couleur: "Brun après braisage", tenue: "Se défait de l'os" },
    sauces: [{ nom: "Sauce osso buco", type: "italien", description: "Tomates, vin blanc, aromates" }, { nom: "Gremolata", type: "italien", description: "Zeste citron, ail, persil" }],
    accompagnements: [{ nom: "Risotto alla milanese", recetteId: "risotto_milanese", type: "féculent" }, { nom: "Polenta", recetteId: "polenta", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Viande ferme", solution: "2h minimum de braisage" }, { erreur: "Jeter la moelle", consequence: "Perdre le meilleur !", solution: "La moelle se déguste à la cuillère" }],
    leSaviezVous: "L'osso buco alla milanese est le plat emblématique de Milan ! 'Osso buco' signifie 'os troué' en italien, référence à la moelle visible au centre. Traditionnellement servi avec le risotto au safran."
  },
  "Blanquette (épaule/poitrine)": {
    anatomie: { localisation: "Mélange épaule et poitrine", origine: "Morceaux à braiser", muscles: ["Variables"], categorie: "Préparation" },
    techniqueDuChef: ["Morceaux de 50-60g", "Blanchir puis cuire dans bouillon", "NE PAS saisir (c'est la différence avec un ragoût)", "Sauce liée crème et jaunes", "Champignons et oignons", "Cuisson douce 1h30"],
    caracteristiques: { texture: "Fondante", gout: "Délicat, crémeux", gras: "Modéré", fibres: "Tendres", couleur: "Blanc-crème", tenue: "Morceaux entiers" },
    sauces: [{ nom: "Sauce blanquette", type: "classique", description: "Velouté, crème, jaune d'œuf, citron" }],
    accompagnements: [{ nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" }, { nom: "Champignons de Paris", recetteId: "champignons_paris", type: "légume" }, { nom: "Petits oignons", recetteId: "petits_oignons", type: "légume" }],
    erreursAEviter: [{ erreur: "Faire bouillir", consequence: "Viande filandreuse", solution: "Frémissement uniquement" }, { erreur: "Saisir la viande", consequence: "Ce n'est plus une blanquette !", solution: "Blanchir puis pocher, jamais saisir" }],
    leSaviezVous: "La blanquette de veau est LE plat familial français par excellence ! La recette remonte au XVIIIe siècle. Le secret : ne jamais faire colorer la viande et finir la sauce avec de la crème et du jaune d'œuf."
  },
  "Foie de veau": {
    anatomie: { localisation: "Cavité abdominale", origine: "Organe filtrant", muscles: ["N/A"], categorie: "Abat noble de première catégorie" },
    techniqueDuChef: ["Le roi des foies", "Retirer membranes et canaux", "Trancher à 1cm d'épaisseur", "Saisir 1-2 min par face", "OBLIGATOIREMENT rosé", "Déglacer au vinaigre"],
    caracteristiques: { texture: "Fondante si rosé", gout: "Fin, le plus délicat des foies", gras: "Maigre", fibres: "Dense sans fibres", couleur: "Brun-rouge clair", tenue: "Fragile" },
    sauces: [{ nom: "Sauce vénitienne", type: "italien", description: "Oignons caramélisés très lentement" }, { nom: "Vinaigre de framboise", type: "gastronomique", description: "Déglaçage acidulé-sucré" }, { nom: "Beurre de sauge", type: "italien", description: "Beurre noisette, sauge frite" }],
    accompagnements: [{ nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" }, { nom: "Oignons confits", recetteId: "oignons_confits", type: "légume" }, { nom: "Épinards au beurre", recetteId: "epinards_beurre", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Texture pâteuse, goût amer", solution: "Rose au centre OBLIGATOIRE" }, { erreur: "Feu trop doux", consequence: "Le foie bout au lieu de saisir", solution: "Feu vif, poêle fumante" }],
    leSaviezVous: "Le foie de veau est le plus fin et le plus cher des foies ! Le 'Fegato alla veneziana' (foie à la vénitienne) se cuisine avec des oignons caramélisés pendant 1h minimum. En France, c'est un classique des bistrots depuis le XIXe siècle."
  },
  "Ris de veau": {
    anatomie: { localisation: "Gorge (thymus)", origine: "Glande thymus", muscles: ["N/A - Glande"], categorie: "Abat noble d'exception" },
    techniqueDuChef: ["Dégorger plusieurs heures (eau froide)", "Blanchir 5 min", "Retirer les membranes sous l'eau", "Presser entre deux plaques", "Fariner puis saisir au beurre", "Croustillant dehors, crémeux dedans"],
    caracteristiques: { texture: "Crémeux, fondant", gout: "Extrêmement délicat et fin", gras: "Riche mais léger", fibres: "N/A - Granuleux", couleur: "Blanc-rosé", tenue: "Fragile" },
    sauces: [{ nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème, vin jaune" }, { nom: "Jus de veau corsé", type: "classique", description: "Fond de veau réduit" }, { nom: "Sauce au citron", type: "légère", description: "Citron, beurre blanc" }],
    accompagnements: [{ nom: "Morilles sautées", recetteId: "morilles_sautees", type: "légume" }, { nom: "Petits pois à la française", recetteId: "petits_pois_francaise", type: "légume" }, { nom: "Épinards en branches", recetteId: "epinards_branches", type: "légume" }],
    erreursAEviter: [{ erreur: "Sauter le dégorgeage", consequence: "Couleur terne, goût moins fin", solution: "Minimum 3-4h dans eau froide changée" }, { erreur: "Ne pas presser", consequence: "Forme irrégulière, cuisson inégale", solution: "Presser 1h entre deux plaques au frigo" }],
    leSaviezVous: "Le ris de veau est l'abat le plus noble et le plus cher ! On distingue le 'cœur' (rond, le meilleur) de la 'gorge' (allongée). Le thymus disparaît à l'âge adulte, d'où la rareté. Les grands chefs comme Paul Bocuse en ont fait leur signature."
  },
  "Rognons": {
    anatomie: { localisation: "Région lombaire", origine: "Reins", muscles: ["N/A - Organe"], categorie: "Abat de première catégorie" },
    techniqueDuChef: ["Retirer gras et nerf central", "Couper en deux ou trancher", "Dégorger au lait (optionnel)", "Saisir à feu très vif", "Rosé au centre", "Déglacer au madère"],
    caracteristiques: { texture: "Ferme si bien cuit", gout: "Plus délicat que bœuf", gras: "Entourés de gras (à retirer)", fibres: "En lobes", couleur: "Brun-rouge", tenue: "Devient caoutchouteux si trop cuit" },
    sauces: [{ nom: "Sauce moutarde", type: "classique", description: "Moutarde de Dijon, crème" }, { nom: "Sauce madère", type: "classique", description: "Madère, fond de veau" }],
    accompagnements: [{ nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" }, { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Texture caoutchouteuse", solution: "Rosé au centre" }],
    leSaviezVous: "Les rognons de veau sont plus fins que ceux de bœuf ! En France, les 'rognons de veau à la moutarde' sont un classique des bistrots depuis le XIXe siècle."
  }
};

const veauBoucherEnriched = {
  "Longe": {
    anatomie: { localisation: "Dos, partie arrière", origine: "Vertèbres lombaires", muscles: ["Longissimus"], categorie: "Morceau noble" },
    techniqueDuChef: ["Rôtir entière ou en côtes", "Cuisson rosée", "Reposer longuement", "Barde recommandée", "Trancher perpendiculairement", "Température précise"],
    caracteristiques: { texture: "Tendre", gout: "Délicat", gras: "Maigre", fibres: "Fines", couleur: "Rose pâle", tenue: "Excellente" },
    sauces: [{ nom: "Jus au thym", type: "simple", description: "Thym, fond de veau" }],
    accompagnements: [{ nom: "Légumes rôtis", recetteId: "legumes_rotis", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Sec car maigre", solution: "Rosé et bardé" }],
    leSaviezVous: "La longe de veau est souvent confondue avec le carré mais elle est désossée ! C'est un morceau prisé des restaurateurs pour sa régularité."
  },
  "Sous-noix": {
    anatomie: { localisation: "Face interne de la cuisse", origine: "Muscle de la cuisse", muscles: ["Gracilis, Sartorius"], categorie: "Morceau de première catégorie" },
    techniqueDuChef: ["Moins tendre que la noix", "Idéale pour escalopes épaisses", "Peut être rôtie", "Bien ficeler si rôti", "Cuisson moyenne", "Trancher fin"],
    caracteristiques: { texture: "Légèrement ferme", gout: "Savoureux", gras: "Maigre", fibres: "Moyennes", couleur: "Rose", tenue: "Bonne" },
    sauces: [{ nom: "Sauce aux câpres", type: "italien", description: "Câpres, citron, beurre" }],
    accompagnements: [{ nom: "Pâtes au beurre", recetteId: "pates_beurre", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuire comme la noix", consequence: "Un peu plus ferme", solution: "Légèrement plus cuit ou mariné" }],
    leSaviezVous: "La sous-noix est moins connue que la noix mais offre un excellent rapport qualité-prix ! Les Italiens l'utilisent pour le vitello tonnato."
  },
  "Noix pâtissière": {
    anatomie: { localisation: "Partie externe de la cuisse", origine: "Muscle abducteur", muscles: ["Rectus femoris"], categorie: "Morceau de première catégorie" },
    techniqueDuChef: ["Très maigre", "Pour escalopes fines", "Cuisson rapide", "Sauces crémeuses recommandées", "Ne pas trop cuire", "Aplatir si besoin"],
    caracteristiques: { texture: "Ferme", gout: "Délicat", gras: "Très maigre", fibres: "Longues", couleur: "Rose pâle", tenue: "Correcte" },
    sauces: [{ nom: "Sauce crème aux herbes", type: "classique", description: "Crème, fines herbes" }],
    accompagnements: [{ nom: "Légumes verts", recetteId: "legumes_verts", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson sans matière grasse", consequence: "Très sec", solution: "Sauce généreuse ou beurre" }],
    leSaviezVous: "La noix pâtissière tire son nom de son utilisation en pâtisseries salées et terrines ! C'est un morceau économique pour les escalopes."
  },
  "Grenadins": {
    anatomie: { localisation: "Tranches épaisses de noix ou filet", origine: "Morceau noble tranché épais", muscles: ["Variables"], categorie: "Présentation noble" },
    techniqueDuChef: ["Tranches de 2-3cm", "Souvent bardés ou lardés", "Saisir puis finir au four", "Cuisson rosée", "Présentation élégante", "Repos avant service"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Fin", gras: "Maigre mais bardé", fibres: "Fines", couleur: "Rose", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux champignons", type: "classique", description: "Champignons variés, crème" }],
    accompagnements: [{ nom: "Légumes de saison", recetteId: "legumes_saison", type: "légume" }],
    erreursAEviter: [{ erreur: "Retirer la barde", consequence: "Viande sèche", solution: "La barde protège et parfume" }],
    leSaviezVous: "Les grenadins de veau sont une présentation classique de la haute cuisine française ! Ils sont traditionnellement piqués de lardons et braisés au four."
  },
  "Médaillons": {
    anatomie: { localisation: "Tranches rondes de filet", origine: "Filet tranché", muscles: ["Psoas"], categorie: "Présentation noble" },
    techniqueDuChef: ["Tranches de 2cm d'épaisseur", "Forme ronde régulière", "Cuisson rapide poêlée", "Rosé au centre", "Présentation soignée", "Servir immédiatement"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat", gras: "Très maigre", fibres: "Fines", couleur: "Rose pâle", tenue: "Excellente" },
    sauces: [{ nom: "Sauce au porto", type: "gastronomique", description: "Porto, crème, fond" }],
    accompagnements: [{ nom: "Légumes fins", recetteId: "legumes_fins", type: "légume" }],
    erreursAEviter: [{ erreur: "Médaillons irréguliers", consequence: "Cuisson inégale", solution: "Ficeler pour uniformiser" }],
    leSaviezVous: "Les médaillons de veau sont la base du célèbre 'Veau Orloff' ! Ce plat classique français les nape de sauce Mornay et les gratine."
  },
  "Flanchet": {
    anatomie: { localisation: "Partie ventrale", origine: "Paroi abdominale", muscles: ["Abdominaux"], categorie: "Morceau de troisième catégorie" },
    techniqueDuChef: ["Très entrelardé", "Idéal en blanquette", "Cuisson longue", "Apporte du gras au plat", "Peut être farci", "Économique"],
    caracteristiques: { texture: "Entrelardée", gout: "Savoureux", gras: "Très gras", fibres: "Variables", couleur: "Rose et blanc", tenue: "Fondante" },
    sauces: [{ nom: "Sauce blanquette", type: "classique", description: "Sauce blanche crémeuse" }],
    accompagnements: [{ nom: "Riz blanc", recetteId: "riz_blanc", type: "féculent" }],
    erreursAEviter: [{ erreur: "Retirer le gras", consequence: "Plat sec", solution: "Le gras enrichit le plat" }],
    leSaviezVous: "Le flanchet est indispensable à une vraie blanquette ! Son gras fond et apporte l'onctuosité caractéristique. C'est un morceau de connaisseur."
  },
  "Haut de côtes": {
    anatomie: { localisation: "Partie antérieure des côtes", origine: "Côtes vers le cou", muscles: ["Intercostaux"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Pour blanquette ou pot-au-feu", "Riche en collagène", "Cuisson longue", "Parfume le bouillon", "Économique et savoureux", "Les os enrichissent"],
    caracteristiques: { texture: "Gélatineuse", gout: "Savoureux", gras: "Bien gras", fibres: "Courtes", couleur: "Rose avec os", tenue: "Se défait" },
    sauces: [{ nom: "Sauce blanquette", type: "classique", description: "Sauce blanche" }],
    accompagnements: [{ nom: "Légumes de pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson rapide", consequence: "Viande dure", solution: "Cuisson longue uniquement" }],
    leSaviezVous: "Le haut de côtes de veau enrichit magnifiquement les bouillons ! C'est un morceau de boucher souvent méconnu mais très apprécié des connaisseurs."
  },
  "Cervelle": {
    anatomie: { localisation: "Boîte crânienne", origine: "Encéphale", muscles: ["N/A"], categorie: "Abat" },
    techniqueDuChef: ["Dégorger longuement", "Retirer membranes délicatement", "Pocher au court-bouillon", "Paner et frire ou beurre noir", "Manipuler avec soin", "Servir chaud"],
    caracteristiques: { texture: "Crémeuse", gout: "Très délicat", gras: "Riche en lipides", fibres: "N/A", couleur: "Gris-rosé", tenue: "Très fragile" },
    sauces: [{ nom: "Beurre noir aux câpres", type: "classique", description: "Beurre noisette, câpres, vinaigre" }],
    accompagnements: [{ nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" }],
    erreursAEviter: [{ erreur: "Manipuler brusquement", consequence: "Se défait", solution: "Gestes très délicats" }],
    leSaviezVous: "La cervelle de veau au beurre noir est un grand classique de la cuisine française ! C'était le plat préféré du roi Louis XIV. Très riche en phospholipides."
  },
  "Tête de veau": {
    anatomie: { localisation: "Tête complète", origine: "Toutes les parties de la tête", muscles: ["Muscles faciaux, langue"], categorie: "Abat" },
    techniqueDuChef: ["Faire blanchir et nettoyer", "Cuire 3-4h dans bouillon", "Désosser si besoin", "Servir avec sauce gribiche", "Plat de tradition", "Présentation rustique"],
    caracteristiques: { texture: "Gélatineuse variée", gout: "Complexe, savoureux", gras: "Variable", fibres: "Diverses textures", couleur: "Pâle après cuisson", tenue: "Gélatineuse" },
    sauces: [{ nom: "Sauce gribiche", type: "classique", description: "Œuf dur, câpres, cornichons, herbes" }, { nom: "Sauce ravigote", type: "classique", description: "Herbes, vinaigre, câpres" }],
    accompagnements: [{ nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" }, { nom: "Cornichons", recetteId: "cornichons", type: "condiment" }],
    erreursAEviter: [{ erreur: "Cuisson insuffisante", consequence: "Parties dures", solution: "3-4h de pochage" }],
    leSaviezVous: "La tête de veau sauce gribiche est un plat emblématique de la cuisine de bistrot ! Jacques Chirac en était un fervent amateur. Chaque région a sa recette traditionnelle."
  },
  "Langue": {
    anatomie: { localisation: "Cavité buccale", origine: "Muscle lingual", muscles: ["Langue"], categorie: "Abat de première catégorie" },
    techniqueDuChef: ["Dégorger plusieurs heures", "Blanchir puis dépouiller", "Cuire 2-2h30 dans bouillon aromatique", "Retirer la peau quand chaude", "Servir chaude ou froide", "Trancher en biseau"],
    caracteristiques: { texture: "Fondante", gout: "Délicat, fin", gras: "Modérément gras", fibres: "Musculaire", couleur: "Gris-rose", tenue: "Se tranche bien" },
    sauces: [{ nom: "Sauce piquante", type: "classique", description: "Cornichons, câpres, vinaigre" }, { nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres" }],
    accompagnements: [{ nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }, { nom: "Épinards", recetteId: "epinards", type: "légume" }],
    erreursAEviter: [{ erreur: "Ne pas dépouiller", consequence: "Peau épaisse désagréable", solution: "Retirer la peau après pochage" }],
    leSaviezVous: "La langue de veau est considérée comme plus fine que celle de bœuf ! C'est un classique de la cuisine bourgeoise française. Elle peut se préparer aussi bien chaude que froide en entrée."
  },
  "Cœur": {
    anatomie: { localisation: "Cavité thoracique", origine: "Muscle cardiaque", muscles: ["Myocarde"], categorie: "Abat" },
    techniqueDuChef: ["Parer (retirer gras, vaisseaux)", "Trancher ou cuire entier", "Saisir rapidement ou braiser longuement", "Peut être farci", "Bien assaisonner", "Texture ferme"],
    caracteristiques: { texture: "Ferme et dense", gout: "Prononcé", gras: "Très maigre", fibres: "Denses", couleur: "Rouge foncé", tenue: "Ferme" },
    sauces: [{ nom: "Sauce forestière", type: "classique", description: "Champignons, persil" }],
    accompagnements: [{ nom: "Purée", recetteId: "puree_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson moyenne", consequence: "Texture dure", solution: "Saisir vif ou braiser long" }],
    leSaviezVous: "Le cœur de veau farci est un plat de la cuisine traditionnelle ! Plus tendre que celui de bœuf, il se prête bien à de nombreuses préparations."
  },
  "Pieds de veau": {
    anatomie: { localisation: "Extrémités des pattes", origine: "Pieds avec os", muscles: ["N/A - Cartilages"], categorie: "Abat" },
    techniqueDuChef: ["Nettoyer et blanchir", "Cuire 4-5h dans bouillon", "Deviennent très gélatineux", "Utilisés pour les fonds", "Peuvent être panés", "Source de collagène"],
    caracteristiques: { texture: "Très gélatineuse", gout: "Neutre", gras: "Maigre", fibres: "Cartilages", couleur: "Blanc", tenue: "Fond en gelée" },
    sauces: [{ nom: "Sauce poulette", type: "classique", description: "Champignons, crème, citron" }, { nom: "Vinaigrette", type: "simple", description: "Huile, vinaigre" }],
    accompagnements: [{ nom: "Salade", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Cartilages durs", solution: "4-5h minimum" }],
    leSaviezVous: "Les pieds de veau étaient indispensables à la cuisine classique pour leur gélatine ! Avant l'invention de la gélatine en poudre, ils servaient à faire prendre les aspics et les fonds de sauce."
  },
  "Fraise de veau": {
    anatomie: { localisation: "Mésentère (membrane intestinale)", origine: "Membrane du tube digestif", muscles: ["N/A - Membrane"], categorie: "Abat" },
    techniqueDuChef: ["Blanchir puis cuire longuement", "Devient très tendre", "Traditionnellement à la lyonnaise", "Cuisson 2-3h", "Assaisonner généreusement", "Plat de tradition"],
    caracteristiques: { texture: "Fondante, dentelle", gout: "Délicat", gras: "Peu gras", fibres: "Membrane fine", couleur: "Blanc-rosé", tenue: "Délicate" },
    sauces: [{ nom: "Sauce lyonnaise", type: "classique", description: "Oignons, vinaigre, vin blanc" }],
    accompagnements: [{ nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson insuffisante", consequence: "Texture caoutchouteuse", solution: "2-3h de pochage" }],
    leSaviezVous: "La fraise de veau à la lyonnaise est une spécialité des bouchons lyonnais ! Son nom vient de sa forme qui évoque une fraise de la Renaissance (collerette plissée). C'est un mets devenu rare mais très apprécié des connaisseurs."
  },
  "Animelles": {
    anatomie: { localisation: "Testicules de l'animal", origine: "Glandes génitales", muscles: ["N/A - Glandes"], categorie: "Abat" },
    techniqueDuChef: ["Parer et dégager la membrane", "Blanchir puis poêler", "Peuvent être panées", "Cuisson rapide", "Servir très chaud", "Mets délicat et rare"],
    caracteristiques: { texture: "Crémeuse", gout: "Fin et délicat", gras: "Peu gras", fibres: "N/A", couleur: "Blanc-rosé", tenue: "Fragile" },
    sauces: [{ nom: "Beurre persillé", type: "simple", description: "Beurre, persil, citron" }, { nom: "Sauce piquante", type: "classique", description: "Vinaigre, câpres" }],
    accompagnements: [{ nom: "Salade verte", recetteId: "salade_verte", type: "légume" }, { nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Texture caoutchouteuse", solution: "Cuisson rapide uniquement" }],
    leSaviezVous: "Les animelles sont un mets très apprécié en Espagne (criadillas) et au Moyen-Orient ! En France, c'est un abat rare et recherché. On les consommait déjà dans la Rome antique."
  }
};

module.exports = { veauClassiqueEnriched, veauBoucherEnriched };
