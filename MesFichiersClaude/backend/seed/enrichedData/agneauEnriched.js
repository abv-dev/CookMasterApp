// Données enrichies pour l'Agneau - Morceaux Classiques et Boucher

const agneauClassiqueEnriched = {
  "Gigot d'agneau": {
    anatomie: { localisation: "Cuisse arrière de l'animal", origine: "Membre postérieur", muscles: ["Muscles de la cuisse"], categorie: "Morceau noble" },
    techniqueDuChef: ["Inciser et piquer d'ail et de romarin", "Sortir 2h avant cuisson", "Commencer à four chaud 220°C puis baisser à 180°C", "Compter 15 min/500g pour rosé", "Arroser toutes les 15 min", "Repos 15-20 min obligatoire"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Prononcé, caractéristique de l'agneau", gras: "Couverture grasse à garder", fibres: "Longues", couleur: "Rose foncé", tenue: "Excellente" },
    sauces: [{ nom: "Jus d'agneau au romarin", type: "classique", description: "Jus de cuisson, romarin, ail" }, { nom: "Sauce à la menthe", type: "anglais", description: "Menthe, vinaigre, sucre" }, { nom: "Aïoli", type: "provençal", description: "Ail, huile d'olive, jaune d'œuf" }],
    accompagnements: [{ nom: "Flageolets", recetteId: "flageolets", type: "légume" }, { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" }, { nom: "Haricots verts", recetteId: "haricots_verts_ail", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire trop cuit", consequence: "Viande sèche et sans goût", solution: "Rosé à cœur, thermomètre à 55-60°C" }, { erreur: "Ne pas laisser reposer", consequence: "Jus qui s'écoule", solution: "15-20 min de repos couvert" }],
    leSaviezVous: "Le gigot de 7 heures est une spécialité qui cuit si longtemps que la viande se détache à la cuillère ! En France, le gigot pascal est traditionnellement servi à Pâques. L'agneau de Sisteron est une IGP reconnue."
  },
  "Carré d'agneau": {
    anatomie: { localisation: "Partie dorsale avec les côtes", origine: "Train de côtes", muscles: ["Longissimus dorsi"], categorie: "Morceau noble" },
    techniqueDuChef: ["Manchonner les os pour la présentation", "Inciser le gras en quadrillage", "Saisir à la poêle puis finir au four", "Cuisson rosée obligatoire", "Découper en côtes pour servir", "Protéger les os avec alu"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat, fin", gras: "Couverture fine", fibres: "Fines", couleur: "Rose", tenue: "Présentation élégante" },
    sauces: [{ nom: "Jus aux herbes de Provence", type: "provençal", description: "Thym, romarin, sarriette" }, { nom: "Persillade", type: "simple", description: "Persil, ail, chapelure" }],
    accompagnements: [{ nom: "Tian de légumes", recetteId: "tian_legumes", type: "légume" }, { nom: "Pommes boulangères", recetteId: "pommes_boulangeres", type: "féculent" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Perd son intérêt", solution: "Rosé à saignant uniquement" }],
    leSaviezVous: "Le carré d'agneau en croûte d'herbes est un grand classique de la gastronomie française ! Un carré comporte généralement 8 côtes. L'agneau de pré-salé de la baie du Mont-Saint-Michel est particulièrement réputé."
  },
  "Épaule d'agneau": {
    anatomie: { localisation: "Membre antérieur", origine: "Épaule avec os ou désossée", muscles: ["Muscles de l'épaule"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Désosser et farcir ou cuire avec os", "Parfaite pour cuisson longue (7h)", "Peut être braisée ou rôtie", "Arroser fréquemment", "Se détache quand prête", "Excellent confite"],
    caracteristiques: { texture: "Fondante après cuisson longue", gout: "Très savoureux", gras: "Bien persillée", fibres: "Moyennes", couleur: "Rose foncé", tenue: "Se défait facilement" },
    sauces: [{ nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" }, { nom: "Sauce au citron confit", type: "oriental", description: "Citrons confits, olives" }],
    accompagnements: [{ nom: "Couscous", recetteId: "couscous", type: "féculent" }, { nom: "Légumes confits", recetteId: "legumes_confits", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson trop courte si braisée", consequence: "Viande ferme", solution: "3h minimum pour fondant" }],
    leSaviezVous: "L'épaule d'agneau confite 7 heures est un plat du sud de la France ! Elle est moins chère que le gigot mais tout aussi savoureuse. C'est le morceau traditionnel du méchoui."
  },
  "Côtelettes d'agneau": {
    anatomie: { localisation: "Carré découpé en portions individuelles", origine: "Côtes dorsales", muscles: ["Longissimus"], categorie: "Morceau noble" },
    techniqueDuChef: ["Sortir 30 min avant cuisson", "Saisir à feu vif 2-3 min par face", "Rosé obligatoire", "Ne retourner qu'une fois", "Finir au beurre moussant", "Servir immédiatement"],
    caracteristiques: { texture: "Tendre", gout: "Fin, délicat", gras: "Bordure grasse", fibres: "Fines", couleur: "Rose", tenue: "Excellente" },
    sauces: [{ nom: "Beurre à l'ail", type: "simple", description: "Beurre, ail, persil" }, { nom: "Sauce aux câpres", type: "méditerranéen", description: "Câpres, citron, huile" }],
    accompagnements: [{ nom: "Ratatouille", recetteId: "ratatouille", type: "légume" }, { nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuire bien cuit", consequence: "Viande sèche", solution: "Maximum à point, idéalement rosé" }],
    leSaviezVous: "Les côtelettes d'agneau grillées sont un classique du barbecue méditerranéen ! En Grèce, elles sont marinées au citron et à l'origan. La côtelette première (près de la selle) est la plus tendre."
  },
  "Côtes d'agneau": {
    anatomie: { localisation: "Partie antérieure du carré", origine: "Côtes découvertes", muscles: ["Intercostaux"], categorie: "Morceau de première catégorie" },
    techniqueDuChef: ["Griller ou poêler à feu vif", "Cuisson rapide", "Rosé au centre", "Excellent au barbecue", "Mariner légèrement possible", "Servir chaud"],
    caracteristiques: { texture: "Juteuse avec os", gout: "Prononcé", gras: "Entrelardé", fibres: "Courtes", couleur: "Rose foncé", tenue: "Se détache de l'os" },
    sauces: [{ nom: "Chermoula", type: "marocain", description: "Coriandre, persil, épices" }, { nom: "Sauce yaourt-menthe", type: "oriental", description: "Yaourt, menthe, concombre" }],
    accompagnements: [{ nom: "Taboulé", recetteId: "taboule", type: "féculent" }, { nom: "Houmous", recetteId: "houmous", type: "légume" }],
    erreursAEviter: [{ erreur: "Feu trop doux", consequence: "Pas de croûte, viande bouillie", solution: "Feu vif pour caraméliser" }],
    leSaviezVous: "Au Moyen-Orient, les côtes d'agneau grillées (mashawi) sont un incontournable des fêtes ! L'agneau était déjà consommé 10 000 ans avant J-C."
  },
  "Souris d'agneau": {
    anatomie: { localisation: "Partie basse du jarret", origine: "Jarret arrière", muscles: ["Muscles de la jambe"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Saisir pour colorer", "Braiser longuement (2h30-3h)", "La viande doit se détacher de l'os", "Liquide à mi-hauteur", "Peut être confite", "Le collagène fond et enrichit"],
    caracteristiques: { texture: "Fondante, gélatineuse", gout: "Très savoureux", gras: "Maigre mais collagène", fibres: "Se défont", couleur: "Brun après braisage", tenue: "Se détache de l'os" },
    sauces: [{ nom: "Jus de braisage au thym", type: "classique", description: "Thym, fond d'agneau" }, { nom: "Sauce au miel et épices", type: "oriental", description: "Miel, ras el hanout" }],
    accompagnements: [{ nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" }, { nom: "Légumes racines", recetteId: "legumes_racines", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson trop courte", consequence: "Viande ferme sur l'os", solution: "2h30 minimum de braisage" }],
    leSaviezVous: "La souris d'agneau s'appelle ainsi car sa forme rappelle une souris avec l'os comme queue ! C'est devenu un plat tendance dans les bistros gastronomiques. Il n'y en a que 2 par agneau."
  },
  "Collier": {
    anatomie: { localisation: "Cou de l'animal", origine: "Muscles cervicaux", muscles: ["Muscles du cou"], categorie: "Morceau de troisième catégorie" },
    techniqueDuChef: ["Idéal pour navarin et tajines", "Couper en morceaux", "Cuisson longue obligatoire", "Le collagène fond et lie", "Excellent le lendemain", "Économique et savoureux"],
    caracteristiques: { texture: "Gélatineuse après cuisson", gout: "Très parfumé", gras: "Bien gras", fibres: "Courtes", couleur: "Rose avec os", tenue: "Se défait" },
    sauces: [{ nom: "Sauce navarin", type: "classique", description: "Petits légumes printaniers" }, { nom: "Sauce tajine", type: "marocain", description: "Épices, fruits secs" }],
    accompagnements: [{ nom: "Petits légumes", recetteId: "petits_legumes", type: "légume" }, { nom: "Semoule", recetteId: "semoule", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuire comme un morceau noble", consequence: "Viande dure", solution: "Mijotage long uniquement" }],
    leSaviezVous: "Le navarin d'agneau printanier est un grand classique de la cuisine française ! Le collier d'agneau donne les meilleurs tajines car son gras parfume tout le plat."
  },
  "Sauté d'agneau": {
    anatomie: { localisation: "Mélange de morceaux à braiser", origine: "Épaule, collier, poitrine", muscles: ["Variables"], categorie: "Préparation" },
    techniqueDuChef: ["Morceaux réguliers pour cuisson uniforme", "Faire revenir puis mouiller", "Cuisson 1h30-2h", "Le fond devient onctueux", "Peut être préparé la veille", "Réchauffé c'est meilleur"],
    caracteristiques: { texture: "Fondante", gout: "Savoureux", gras: "Variable selon morceaux", fibres: "Se défont", couleur: "Brun doré", tenue: "Morceaux tendres" },
    sauces: [{ nom: "Sauce curry", type: "indien", description: "Curry, tomates, yaourt" }, { nom: "Sauce aux olives", type: "méditerranéen", description: "Olives, tomates, herbes" }],
    accompagnements: [{ nom: "Riz basmati", recetteId: "riz_basmati", type: "féculent" }, { nom: "Naan", recetteId: "naan", type: "pain" }],
    erreursAEviter: [{ erreur: "Morceaux trop petits", consequence: "Se défont trop", solution: "Cubes de 4-5cm" }],
    leSaviezVous: "Le curry d'agneau est le plat national britannique ! Héritage de la colonisation des Indes. Le sauté permet d'utiliser des morceaux économiques avec un résultat gastronomique."
  },
  "Poitrine": {
    anatomie: { localisation: "Partie ventrale", origine: "Côtes inférieures et paroi", muscles: ["Abdominaux"], categorie: "Morceau de troisième catégorie" },
    techniqueDuChef: ["Idéale farcie et roulée", "Cuisson longue braisée", "Peut être grillée lentement", "Le gras fond et parfume", "Excellent en potée", "Économique"],
    caracteristiques: { texture: "Entrelardée", gout: "Riche", gras: "Très gras", fibres: "Courtes", couleur: "Rose et blanc", tenue: "Fondante" },
    sauces: [{ nom: "Jus de braisage", type: "simple", description: "Fond réduit" }],
    accompagnements: [{ nom: "Légumes du pot-au-feu", recetteId: "legumes_pot_au_feu", type: "légume" }],
    erreursAEviter: [{ erreur: "Retirer le gras", consequence: "Viande sèche", solution: "Le gras est essentiel" }],
    leSaviezVous: "La poitrine d'agneau farcie est une spécialité du Sud-Ouest ! Elle est aussi utilisée pour le couscous traditionnel."
  },
  "Foie": {
    anatomie: { localisation: "Cavité abdominale", origine: "Organe filtrant", muscles: ["N/A"], categorie: "Abat" },
    techniqueDuChef: ["Retirer les membranes", "Trancher fin", "Cuisson rapide, rosé au centre", "Ne pas trop cuire", "Déglacer au vinaigre", "Servir immédiatement"],
    caracteristiques: { texture: "Fondante si rosé", gout: "Plus doux que bœuf", gras: "Maigre", fibres: "Dense", couleur: "Brun-rouge", tenue: "Fragile" },
    sauces: [{ nom: "Sauce persil-citron", type: "simple", description: "Persil, citron, huile" }, { nom: "Vinaigre balsamique", type: "italien", description: "Balsamique réduit" }],
    accompagnements: [{ nom: "Pommes sautées", recetteId: "pommes_sautees", type: "féculent" }, { nom: "Oignons confits", recetteId: "oignons_confits", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Texture pâteuse", solution: "Rosé au centre" }],
    leSaviezVous: "Le foie d'agneau est réputé plus fin que celui de bœuf ! Au Moyen-Orient, il est souvent grillé en brochettes avec des oignons."
  },
  "Rognons": {
    anatomie: { localisation: "Région lombaire", origine: "Reins", muscles: ["N/A"], categorie: "Abat de première catégorie" },
    techniqueDuChef: ["Retirer la graisse et le nerf", "Couper en deux ou trancher", "Faire dégorger au lait", "Cuisson vive et rapide", "Rosé au centre", "Déglacer au madère"],
    caracteristiques: { texture: "Ferme si bien cuit", gout: "Plus délicat que bœuf", gras: "Entourés de gras", fibres: "En lobes", couleur: "Brun-rouge", tenue: "Devient caoutchouteux si trop cuit" },
    sauces: [{ nom: "Sauce madère", type: "classique", description: "Madère, fond de veau" }, { nom: "Sauce moutarde", type: "classique", description: "Moutarde, crème" }],
    accompagnements: [{ nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" }, { nom: "Purée maison", recetteId: "puree_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Ne pas dégorger", consequence: "Goût fort", solution: "Tremper au lait 1h" }],
    leSaviezVous: "Les rognons d'agneau sont considérés comme les meilleurs des rognons ! Très prisés dans la cuisine britannique traditionnelle. Ils sont plus petits et plus tendres que ceux de veau."
  }
};

const agneauBoucherEnriched = {
  "Filet": {
    anatomie: { localisation: "Sous les vertèbres lombaires", origine: "Muscle psoas", muscles: ["Psoas"], categorie: "Morceau du boucher" },
    techniqueDuChef: ["Morceau très petit et tendre", "Retirer la membrane", "Cuisson rapide à feu vif", "Rosé obligatoire", "Peut être enrobé de croûte d'herbes", "Repos court"],
    caracteristiques: { texture: "Extrêmement tendre", gout: "Délicat", gras: "Très maigre", fibres: "Fines", couleur: "Rose", tenue: "Excellent" },
    sauces: [{ nom: "Jus au romarin", type: "simple", description: "Romarin, ail, fond" }],
    accompagnements: [{ nom: "Légumes primeurs", recetteId: "legumes_primeurs", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Viande sèche", solution: "Bleu à saignant" }],
    leSaviezVous: "Le filet d'agneau est si petit (150-200g) qu'il n'est souvent pas commercialisé ! Les bouchers le gardent pour eux ou leurs meilleurs clients."
  },
  "Selle d'agneau": {
    anatomie: { localisation: "Partie lombaire", origine: "Dos de l'animal non séparé", muscles: ["Longissimus", "Psoas"], categorie: "Morceau noble" },
    techniqueDuChef: ["Pièce impressionnante pour réceptions", "Rôtir entière", "Peut être désossée et farcie", "Cuisson rosée", "Découper en tranches transversales", "Présentation spectaculaire"],
    caracteristiques: { texture: "Très tendre", gout: "Fin et savoureux", gras: "Couverture fine", fibres: "Fines", couleur: "Rose", tenue: "Excellente" },
    sauces: [{ nom: "Jus corsé", type: "classique", description: "Fond d'agneau réduit" }],
    accompagnements: [{ nom: "Gratin de légumes", recetteId: "gratin_legumes", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Perd tout son intérêt", solution: "Rosé uniquement" }],
    leSaviezVous: "La selle d'agneau était le plat de prédilection des tables royales ! Elle peut nourrir 6-8 personnes. Le terme 'selle' vient de la forme qui rappelle une selle de cheval."
  },
  "Baron (selle + gigots)": {
    anatomie: { localisation: "Arrière-train complet", origine: "Selle et deux gigots", muscles: ["Tous les muscles postérieurs"], categorie: "Pièce d'exception" },
    techniqueDuChef: ["Pièce de grand apparat", "Rôtir au four lentement", "Arroser constamment", "Nécessite un grand four", "Découper à table", "Pour grandes occasions"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Savoureux", gras: "Variable", fibres: "Longues", couleur: "Rose à rosé", tenue: "Impressionnante" },
    sauces: [{ nom: "Jus de rôti", type: "simple", description: "Jus naturel" }],
    accompagnements: [{ nom: "Légumes de saison", recetteId: "legumes_saison", type: "légume" }],
    erreursAEviter: [{ erreur: "Four trop petit", consequence: "Cuisson inégale", solution: "Prévoir un grand four ou rôtissoire" }],
    leSaviezVous: "Le baron d'agneau tire son nom du titre de noblesse car c'était un mets réservé aux grandes tables ! Il peut peser jusqu'à 6-8 kg."
  },
  "Haut de côtes": {
    anatomie: { localisation: "Entre le collier et le carré", origine: "Côtes antérieures", muscles: ["Intercostaux"], categorie: "Morceau de deuxième catégorie" },
    techniqueDuChef: ["Idéal pour plats mijotés", "Peut être grillé lentement", "Cuisson longue", "Le gras parfume", "Excellent en tagine", "Prix abordable"],
    caracteristiques: { texture: "Gélatineuse", gout: "Savoureux", gras: "Bien gras", fibres: "Courtes", couleur: "Rose", tenue: "Se détache de l'os" },
    sauces: [{ nom: "Sauce aux pruneaux", type: "sucré-salé", description: "Pruneaux, miel, épices" }],
    accompagnements: [{ nom: "Semoule", recetteId: "semoule", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson rapide", consequence: "Gras pas fondu", solution: "Cuisson lente et longue" }],
    leSaviezVous: "Le haut de côtes d'agneau est le secret des vrais tajines marocains ! C'est ce morceau qui donne l'onctuosité au plat."
  },
  "Cœur": {
    anatomie: { localisation: "Cavité thoracique", origine: "Muscle cardiaque", muscles: ["Myocarde"], categorie: "Abat" },
    techniqueDuChef: ["Parer (retirer gras et vaisseaux)", "Griller en brochettes", "Ou braiser longuement", "Texture ferme", "Bien assaisonner", "Cuisson rapide ou très longue"],
    caracteristiques: { texture: "Ferme", gout: "Prononcé", gras: "Très maigre", fibres: "Denses", couleur: "Rouge foncé", tenue: "Ferme" },
    sauces: [{ nom: "Chimichurri", type: "latino", description: "Persil, ail, vinaigre" }],
    accompagnements: [{ nom: "Riz épicé", recetteId: "riz_epice", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson moyenne", consequence: "Dur", solution: "Saisir vif ou braiser long" }],
    leSaviezVous: "Le cœur d'agneau est très apprécié au Moyen-Orient ! Grillé en brochettes, c'est un mets délicat. Plus petit que celui de bœuf, il est plus tendre."
  },
  "Langue": {
    anatomie: { localisation: "Cavité buccale", origine: "Muscle lingual", muscles: ["Langue"], categorie: "Abat" },
    techniqueDuChef: ["Faire dégorger", "Pocher 1h30-2h", "Retirer la peau après cuisson", "Servir chaude ou froide", "Trancher en biseau", "Délicate et fine"],
    caracteristiques: { texture: "Fondante", gout: "Délicat", gras: "Peu gras", fibres: "Musculaire", couleur: "Gris-rose", tenue: "Bonne" },
    sauces: [{ nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres" }],
    accompagnements: [{ nom: "Salade verte", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Ne pas dépouiller", consequence: "Peau dure", solution: "Retirer la peau après pochage" }],
    leSaviezVous: "La langue d'agneau est considérée comme un mets délicat ! Plus petite et plus tendre que celle de bœuf. Au Maroc, elle est souvent cuisinée avec des épices."
  },
  "Cervelle": {
    anatomie: { localisation: "Boîte crânienne", origine: "Encéphale", muscles: ["N/A"], categorie: "Abat" },
    techniqueDuChef: ["Faire dégorger dans l'eau froide", "Retirer les membranes", "Pocher puis paner et frire", "Ou servir au beurre noir", "Manipuler délicatement", "Servir chaud"],
    caracteristiques: { texture: "Crémeuse", gout: "Délicat", gras: "Riche en lipides", fibres: "N/A", couleur: "Gris-rosé", tenue: "Très fragile" },
    sauces: [{ nom: "Beurre noir", type: "classique", description: "Beurre noisette, câpres" }],
    accompagnements: [{ nom: "Salade de mâche", recetteId: "salade_mache", type: "légume" }],
    erreursAEviter: [{ erreur: "Manipuler brusquement", consequence: "Se défait", solution: "Gestes délicats" }],
    leSaviezVous: "La cervelle d'agneau panée est un classique des restaurants traditionnels ! Au Maroc, elle est souvent préparée avec des épices dans les sandwichs."
  },
  "Pieds": {
    anatomie: { localisation: "Extrémités des pattes", origine: "Pieds avec os", muscles: ["N/A - Cartilages"], categorie: "Abat" },
    techniqueDuChef: ["Nettoyer soigneusement", "Blanchir puis cuire 3-4h", "Deviennent gélatineux", "Pour terrines ou bouillons", "Peuvent être panés", "Source de collagène"],
    caracteristiques: { texture: "Gélatineuse", gout: "Neutre", gras: "Maigre", fibres: "Cartilages", couleur: "Blanc", tenue: "Fond" },
    sauces: [{ nom: "Vinaigrette", type: "simple", description: "Huile, vinaigre" }],
    accompagnements: [{ nom: "Salade", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Cartilages durs", solution: "3-4h minimum" }],
    leSaviezVous: "Les pieds d'agneau sont utilisés dans le couscous traditionnel marocain ! Riches en collagène, ils donnent une texture onctueuse au bouillon."
  },
  "Ris d'agneau": {
    anatomie: { localisation: "Gorge", origine: "Thymus", muscles: ["N/A - Glande"], categorie: "Abat noble" },
    techniqueDuChef: ["Faire dégorger longuement", "Blanchir et retirer membranes", "Presser pour uniformiser", "Saisir au beurre", "Croustillant dehors, moelleux dedans", "Mets délicat"],
    caracteristiques: { texture: "Crémeuse", gout: "Fin et subtil", gras: "Riche", fibres: "N/A", couleur: "Blanc-rosé", tenue: "Fragile" },
    sauces: [{ nom: "Jus au citron", type: "léger", description: "Citron, beurre" }],
    accompagnements: [{ nom: "Petits pois", recetteId: "petits_pois", type: "légume" }],
    erreursAEviter: [{ erreur: "Sauter le dégorgeage", consequence: "Goût fort", solution: "Plusieurs heures dans l'eau froide" }],
    leSaviezVous: "Les ris d'agneau sont plus petits et plus délicats que ceux de veau ! C'est un mets rare et recherché des gastronomes."
  },
  "Tripes": {
    anatomie: { localisation: "Estomacs", origine: "Parois stomacales", muscles: ["N/A"], categorie: "Abat" },
    techniqueDuChef: ["Nettoyer et blanchir", "Cuisson très longue (5-6h)", "Parfumer généreusement", "Deviennent fondantes", "Tradition du Sud-Ouest", "Mélanger avec épices"],
    caracteristiques: { texture: "Gélatineuse", gout: "Prononcé", gras: "Peu gras", fibres: "N/A", couleur: "Beige", tenue: "Fond" },
    sauces: [{ nom: "Sauce tomate épicée", type: "simple", description: "Tomates, épices, herbes" }],
    accompagnements: [{ nom: "Pain", recetteId: "pain_campagne", type: "pain" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Texture caoutchouteuse", solution: "5-6h minimum" }],
    leSaviezVous: "Les tripoux d'Auvergne sont faits avec des tripes d'agneau ! C'est une spécialité régionale traditionnelle. Au Maroc, les tripes d'agneau sont préparées à l'occasion de l'Aïd."
  }
};

module.exports = { agneauClassiqueEnriched, agneauBoucherEnriched };
