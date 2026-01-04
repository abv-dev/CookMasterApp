// Données enrichies pour les Volailles

const pouletEnriched = {
  "Poulet entier": {
    anatomie: { localisation: "Volaille complète", origine: "Gallus gallus domesticus", muscles: ["Tous les muscles"], categorie: "Volaille entière" },
    techniqueDuChef: ["Sortir 1h avant cuisson", "Glisser du beurre sous la peau des blancs", "Farcir la cavité (citron, ail, herbes)", "Four 210°C puis 180°C", "Arroser toutes les 15 min", "Vérifier que le jus de cuisse est clair"],
    caracteristiques: { texture: "Variable selon parties", gout: "Savoureux, familier", gras: "Sous la peau", fibres: "Fines (blancs) à moyennes (cuisses)", couleur: "Blanc à rose selon cuisson", tenue: "Bonne" },
    sauces: [{ nom: "Jus de poulet rôti", type: "simple", description: "Jus de cuisson déglaçé" }, { nom: "Sauce suprême", type: "classique", description: "Velouté crémé" }],
    accompagnements: [{ nom: "Pommes de terre rôties", recetteId: "pommes_roties", type: "féculent" }, { nom: "Salade verte", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire le poulet froid", consequence: "Cuisson inégale", solution: "1h à température ambiante avant" }],
    leSaviezVous: "Le poulet rôti du dimanche est la tradition française par excellence ! Un poulet fermier Label Rouge a une chair plus savoureuse. La poule de Bresse AOP est considérée comme la meilleure volaille au monde."
  },
  "Blanc de poulet": {
    anatomie: { localisation: "Poitrine de la volaille", origine: "Muscles pectoraux", muscles: ["Pectoralis major"], categorie: "Morceau noble" },
    techniqueDuChef: ["Aplatir légèrement pour uniformiser", "Cuire avec la peau si possible", "Ne pas surcuire (très maigre)", "Poêle chaude, pas brûlante", "Repos avant découpe", "68-74°C à cœur"],
    caracteristiques: { texture: "Ferme et maigre", gout: "Délicat, neutre", gras: "Très maigre (sous la peau)", fibres: "Longues et fines", couleur: "Blanc nacré", tenue: "Sèche si trop cuit" },
    sauces: [{ nom: "Sauce crémeuse aux champignons", type: "classique", description: "Crème, champignons" }, { nom: "Sauce au curry", type: "indien", description: "Curry, lait de coco" }],
    accompagnements: [{ nom: "Riz basmati", recetteId: "riz_basmati", type: "féculent" }, { nom: "Légumes vapeur", recetteId: "legumes_vapeur", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Viande sèche et caoutchouteuse", solution: "74°C maximum à cœur" }],
    leSaviezVous: "Le blanc de poulet est la protéine la plus consommée au monde ! Sans la peau, c'est l'une des viandes les plus maigres. En cuisine asiatique, il est souvent mariné pour rester moelleux."
  },
  "Cuisse de poulet": {
    anatomie: { localisation: "Membre postérieur complet", origine: "Cuisse + pilon", muscles: ["Muscles de la cuisse"], categorie: "Morceau populaire" },
    techniqueDuChef: ["Plus tolérante à la cuisson que le blanc", "Cuire jusqu'à ce que le jus soit clair", "La peau doit être croustillante", "Peut être confite", "Se réchauffe bien", "74°C minimum pour sécurité"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Plus savoureux que le blanc", gras: "Plus gras, sous la peau", fibres: "Moyennes", couleur: "Plus foncé que le blanc", tenue: "Excellente" },
    sauces: [{ nom: "Sauce basquaise", type: "régional", description: "Poivrons, tomates, piment d'Espelette" }, { nom: "Sauce moutarde miel", type: "simple", description: "Moutarde, miel, crème" }],
    accompagnements: [{ nom: "Riz", recetteId: "riz_blanc", type: "féculent" }, { nom: "Ratatouille", recetteId: "ratatouille", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire comme le blanc", consequence: "Pas assez cuit, risque sanitaire", solution: "Jus clair obligatoire, plus longtemps que le blanc" }],
    leSaviezVous: "La cuisse de poulet est la partie préférée des connaisseurs ! Elle reste juteuse même réchauffée. Dans de nombreuses cultures, la cuisse est le morceau d'honneur offert aux invités."
  },
  "Filet de poulet": {
    anatomie: { localisation: "Petit muscle sous le blanc", origine: "Petit pectoral", muscles: ["Pectoralis minor"], categorie: "Morceau fin" },
    techniqueDuChef: ["Très petit et tendre", "Cuisson très rapide", "Idéal pour sautés et woks", "Peut être pané", "Ne pas trop cuire", "Parfait pour brochettes"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat", gras: "Très maigre", fibres: "Fines", couleur: "Blanc", tenue: "Fragile" },
    sauces: [{ nom: "Sauce satay", type: "asiatique", description: "Cacahuètes, soja" }, { nom: "Sauce aigre-douce", type: "asiatique", description: "Vinaigre, sucre, tomate" }],
    accompagnements: [{ nom: "Nouilles sautées", recetteId: "nouilles_sautees", type: "féculent" }, { nom: "Légumes wok", recetteId: "legumes_wok", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson longue", consequence: "Devient sec", solution: "Cuisson flash" }],
    leSaviezVous: "Le filet de poulet est aussi appelé 'aiguillette' ! C'est le morceau le plus tendre du poulet. Un poulet n'en a que deux, d'environ 50g chacun."
  },
  "Cuisse de poulet entière": {
    anatomie: { localisation: "Cuisse avec haut de cuisse", origine: "Membre postérieur non séparé", muscles: ["Tous muscles de la jambe"], categorie: "Morceau familial" },
    techniqueDuChef: ["Cuisson longue supportée", "Grillée, rôtie ou confite", "Inciser pour cuisson uniforme", "Jus clair = cuit", "Peau croustillante recherchée", "Excellent en marinade"],
    caracteristiques: { texture: "Juteuse", gout: "Savoureux", gras: "Modéré, sous la peau", fibres: "Moyennes", couleur: "Chair rosée à blanche", tenue: "Excellente" },
    sauces: [{ nom: "Sauce barbecue", type: "américain", description: "Tomate, vinaigre, épices" }, { nom: "Marinade asiatique", type: "asiatique", description: "Soja, miel, gingembre" }],
    accompagnements: [{ nom: "Frites", recetteId: "frites_maison", type: "féculent" }, { nom: "Coleslaw", recetteId: "coleslaw", type: "légume" }],
    erreursAEviter: [{ erreur: "Jus rose au centre", consequence: "Pas assez cuit", solution: "Le jus doit être parfaitement clair" }],
    leSaviezVous: "La cuisse de poulet entière est le format idéal pour le poulet frit ! Aux États-Unis, le 'fried chicken' est une institution du Sud. En Corée, le poulet frit (chimaek) se déguste avec de la bière."
  },
  "Pilon de poulet": {
    anatomie: { localisation: "Partie basse de la cuisse", origine: "Jambe inférieure", muscles: ["Muscles du tibia"], categorie: "Morceau populaire" },
    techniqueDuChef: ["Parfait pour BBQ et finger food", "Marinades longues recommandées", "Cuisson complète obligatoire", "La peau doit croustiller", "Se mange avec les doigts", "Idéal pour enfants"],
    caracteristiques: { texture: "Juteuse, pratique à manger", gout: "Savoureux", gras: "Sous la peau", fibres: "Moyennes", couleur: "Chair rosée", tenue: "Pratique avec l'os" },
    sauces: [{ nom: "Sauce buffalo", type: "américain", description: "Hot sauce, beurre" }, { nom: "Sauce teriyaki", type: "japonais", description: "Soja, mirin, sucre" }],
    accompagnements: [{ nom: "Sauce dipping", recetteId: "sauce_ranch", type: "condiment" }, { nom: "Céleri branches", recetteId: "celeri_branches", type: "légume" }],
    erreursAEviter: [{ erreur: "Sous-cuire", consequence: "Chair rose près de l'os", solution: "Bien cuit, jus clair" }],
    leSaviezVous: "Le pilon est la partie préférée des enfants ! Facile à tenir, il se mange sans couverts. Les drummettes (ailes) de Buffalo Wings sont devenues un phénomène mondial né à Buffalo, NY en 1964."
  },
  "Haut de cuisse": {
    anatomie: { localisation: "Partie supérieure de la cuisse", origine: "Fémur et muscles", muscles: ["Muscles de la cuisse"], categorie: "Morceau savoureux" },
    techniqueDuChef: ["Plus de saveur que le blanc", "Désossé idéal pour sautés", "Supporte la surcuisson", "Rester juteux plus facilement", "Excellent grillé ou rôti", "Peut remplacer le blanc dans les recettes"],
    caracteristiques: { texture: "Tendre et juteuse", gout: "Plus savoureux que blanc", gras: "Modérément gras", fibres: "Moyennes", couleur: "Plus foncé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce provençale", type: "français", description: "Tomates, olives, herbes" }, { nom: "Sauce crémeuse", type: "classique", description: "Crème, champignons" }],
    accompagnements: [{ nom: "Légumes grillés", recetteId: "legumes_grilles", type: "légume" }, { nom: "Purée", recetteId: "puree_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Le traiter comme du blanc", consequence: "Ne pas profiter de sa jutosité", solution: "Peut cuire un peu plus sans risque" }],
    leSaviezVous: "Le haut de cuisse est le secret des chefs pour les plats mijotés ! Il reste juteux même après une longue cuisson. C'est souvent moins cher que le blanc pour plus de saveur."
  },
  "Ailes de poulet": {
    anatomie: { localisation: "Membres antérieurs", origine: "Ailes avec 3 parties", muscles: ["Muscles alaires"], categorie: "Finger food" },
    techniqueDuChef: ["Trois parties : drumette, flat, tip", "Marinades longues recommandées", "Friture ou grillade", "Croustillant recherché", "Servir avec sauces", "Double friture pour extra croustillant"],
    caracteristiques: { texture: "Peau croustillante, chair juteuse", gout: "Savoureux", gras: "Sous la peau", fibres: "Fines", couleur: "Doré si croustillant", tenue: "Pratique" },
    sauces: [{ nom: "Sauce buffalo", type: "américain", description: "Hot sauce, beurre fondu" }, { nom: "Sauce BBQ", type: "américain", description: "Sucrée-épicée" }, { nom: "Sauce ranch", type: "américain", description: "Yaourt, herbes" }],
    accompagnements: [{ nom: "Céleri et carotte", recetteId: "crudites", type: "légume" }, { nom: "Blue cheese dip", recetteId: "blue_cheese_dip", type: "condiment" }],
    erreursAEviter: [{ erreur: "Friture unique", consequence: "Pas assez croustillant", solution: "Double friture à deux températures" }],
    leSaviezVous: "Les Buffalo Wings sont nées en 1964 à l'Anchor Bar de Buffalo, NY ! Les ailes étaient auparavant jetées ou utilisées pour le bouillon. Aujourd'hui, elles sont devenues un plat culte mondial."
  },
  "Escalope de poulet": {
    anatomie: { localisation: "Blanc tranché et aplati", origine: "Poitrine", muscles: ["Pectoralis"], categorie: "Préparation" },
    techniqueDuChef: ["Aplatir entre films plastiques", "Fariner avant cuisson", "Poêle très chaude", "2-3 min par face", "Peut être panée", "Servir immédiatement"],
    caracteristiques: { texture: "Tendre si pas trop cuite", gout: "Neutre, prend les saveurs", gras: "Très maigre", fibres: "Aplaties", couleur: "Blanc", tenue: "Fragile" },
    sauces: [{ nom: "Sauce crème citron", type: "simple", description: "Crème, citron, câpres" }, { nom: "Sauce chasseur", type: "classique", description: "Champignons, tomates, vin" }],
    accompagnements: [{ nom: "Pâtes", recetteId: "pates_beurre", type: "féculent" }, { nom: "Salade", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Épaisseur inégale", consequence: "Cuisson inégale", solution: "Aplatir pour uniformiser" }],
    leSaviezVous: "L'escalope de poulet panée est une alternative économique au Wiener Schnitzel ! En Italie, elle devient 'cotoletta alla milanese'. Au Japon, le 'chicken katsu' est servi avec du riz et sauce tonkatsu."
  },
  "Sot-l'y-laisse": {
    anatomie: { localisation: "Petits muscles au-dessus des cuisses", origine: "Dos de la volaille, près du croupion", muscles: ["Iliotibial"], categorie: "Morceau du connaisseur" },
    techniqueDuChef: ["Morceau le plus tendre du poulet", "Souvent laissé sur la carcasse (d'où le nom)", "Cuisson rapide recommandée", "Excellent en brochettes", "Ne pas trop cuire", "Réserver pour les connaisseurs"],
    caracteristiques: { texture: "Extrêmement tendre", gout: "Le plus savoureux", gras: "Légèrement gras", fibres: "Très fines", couleur: "Plus foncé", tenue: "Délicate" },
    sauces: [{ nom: "Jus simple", type: "simple", description: "Jus de volaille" }, { nom: "Beurre noisette", type: "simple", description: "Beurre mousseux" }],
    accompagnements: [{ nom: "Légumes fins", recetteId: "legumes_fins", type: "légume" }],
    erreursAEviter: [{ erreur: "Ne pas les prélever", consequence: "Les laisser sur la carcasse", solution: "Toujours récupérer ces pépites !" }],
    leSaviezVous: "Le sot-l'y-laisse ('le sot l'y laisse') tire son nom du fait que seuls les ignorants le laissent ! C'est le morceau préféré des chefs. Il n'y en a que 2 par poulet, cachés près du croupion."
  }
};

const canardEnriched = {
  "Magret de canard": {
    anatomie: { localisation: "Filet de canard gras (gavé)", origine: "Poitrine de canard à foie gras", muscles: ["Pectoralis major hypertrophié"], categorie: "Morceau noble" },
    techniqueDuChef: ["Inciser le gras en quadrillage", "Commencer côté gras, poêle froide", "Laisser rendre le gras doucement", "Retourner et saisir côté chair", "Cuisson rosée obligatoire", "Repos 5 min avant découpe"],
    caracteristiques: { texture: "Fondante, proche de la viande rouge", gout: "Intense, giboyeux", gras: "Épais layer de gras (rend à la cuisson)", fibres: "Serrées", couleur: "Rouge foncé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce au miel et épices", type: "sucré-salé", description: "Miel, 4 épices, vinaigre" }, { nom: "Sauce aux cerises", type: "fruit", description: "Cerises, vin rouge, fond" }, { nom: "Sauce à l'orange", type: "classique", description: "Orange, Grand Marnier" }],
    accompagnements: [{ nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }, { nom: "Figues rôties", recetteId: "figues_roties", type: "fruit" }],
    erreursAEviter: [{ erreur: "Poêle chaude au départ", consequence: "Gras qui ne fond pas correctement", solution: "Démarrer à froid, côté gras" }, { erreur: "Cuire bien cuit", consequence: "Viande dure et sèche", solution: "Rosé à saignant uniquement" }],
    leSaviezVous: "Le magret n'existe que sur les canards gavés pour le foie gras ! Avant les années 1960, ce muscle était jeté. André Daguin, chef à Auch, a inventé le magret grillé. C'est devenu un classique du Sud-Ouest."
  },
  "Canard entier": {
    anatomie: { localisation: "Volaille complète", origine: "Anas platyrhynchos domesticus", muscles: ["Tous les muscles"], categorie: "Volaille entière" },
    techniqueDuChef: ["Piquer la peau pour rendre le gras", "Four 180°C, 20 min/500g", "Arroser souvent avec le gras", "Retourner à mi-cuisson", "La peau doit être croustillante", "Température à cœur 74°C"],
    caracteristiques: { texture: "Juteuse sous peau croustillante", gout: "Savoureux, caractéristique", gras: "Beaucoup sous la peau", fibres: "Moyennes", couleur: "Plus foncé que poulet", tenue: "Bonne" },
    sauces: [{ nom: "Sauce à l'orange", type: "classique", description: "Orange, Grand Marnier, fond" }, { nom: "Sauce aux navets", type: "classique", description: "Navets glacés, jus" }],
    accompagnements: [{ nom: "Navets glacés", recetteId: "navets_glaces", type: "légume" }, { nom: "Petits pois", recetteId: "petits_pois", type: "légume" }],
    erreursAEviter: [{ erreur: "Ne pas piquer la peau", consequence: "Gras qui ne s'écoule pas", solution: "Piquer régulièrement toute la surface" }],
    leSaviezVous: "Le canard à l'orange (canard Bigarade) est un grand classique de la cuisine française ! En Chine, le canard laqué de Pékin est préparé depuis la dynastie Ming."
  },
  "Confit de canard": {
    anatomie: { localisation: "Cuisses confites dans leur graisse", origine: "Cuisses de canard", muscles: ["Muscles de la cuisse"], categorie: "Préparation traditionnelle" },
    techniqueDuChef: ["Saler et assaisonner 24h", "Cuire lentement dans la graisse (3h à 90°C)", "Conserver couvert de graisse", "Réchauffer au four pour croustiller", "La peau doit être dorée et croustillante", "Se conserve des mois au frais"],
    caracteristiques: { texture: "Fondante sous peau croustillante", gout: "Intense, concentré", gras: "Confit dans le gras", fibres: "Se détachent facilement", couleur: "Doré", tenue: "Se défait de l'os" },
    sauces: [{ nom: "Jus de confit", type: "simple", description: "Graisse de confit dégraissée" }],
    accompagnements: [{ nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }, { nom: "Salade aux gésiers", recetteId: "salade_gesiers", type: "légume" }],
    erreursAEviter: [{ erreur: "Température trop haute", consequence: "Viande sèche malgré le gras", solution: "90°C maximum, cuisson longue" }],
    leSaviezVous: "Le confit est une méthode de conservation millénaire du Sud-Ouest ! Avant les réfrigérateurs, la graisse protégeait la viande de l'air et des bactéries. Un bon confit peut se conserver 6 mois au frais."
  },
  "Cuisses de canard": {
    anatomie: { localisation: "Membres postérieurs", origine: "Cuisses avec os", muscles: ["Muscles de la cuisse"], categorie: "Morceau savoureux" },
    techniqueDuChef: ["Idéales pour le confit", "Peuvent être grillées ou rôties", "Chair plus goûteuse que le blanc", "Cuisson complète nécessaire", "Piquer la peau", "Rendre le gras à la cuisson"],
    caracteristiques: { texture: "Juteuse et fondante", gout: "Prononcé, canard typique", gras: "Sous la peau", fibres: "Moyennes", couleur: "Plus foncé que poulet", tenue: "Excellente avec os" },
    sauces: [{ nom: "Sauce aux olives", type: "provençal", description: "Olives, tomates, herbes" }],
    accompagnements: [{ nom: "Haricots blancs", recetteId: "haricots_blancs", type: "légume" }, { nom: "Chou braisé", recetteId: "chou_braise", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire trop vite", consequence: "Peau molle, chair pas cuite", solution: "Cuisson douce et longue" }],
    leSaviezVous: "Les cuisses de canard sont l'ingrédient star du cassoulet de Toulouse ! Traditionnellement confites, elles apportent richesse et saveur au plat."
  },
  "Aiguillettes de canard": {
    anatomie: { localisation: "Petits filets sous le magret", origine: "Muscles pectoraux mineurs", muscles: ["Pectoralis minor"], categorie: "Morceau fin" },
    techniqueDuChef: ["Très tendres et fines", "Cuisson rapide à feu vif", "2-3 min suffisent", "Rosées au centre", "Idéales en salade tiède", "Ne pas trop cuire"],
    caracteristiques: { texture: "Très tendre", gout: "Délicat, canard subtil", gras: "Maigre", fibres: "Fines", couleur: "Rouge rosé", tenue: "Fragile" },
    sauces: [{ nom: "Vinaigre balsamique", type: "simple", description: "Balsamique réduit" }, { nom: "Sauce aux framboises", type: "fruit", description: "Framboises, vinaigre" }],
    accompagnements: [{ nom: "Salade tiède", recetteId: "salade_tiede", type: "légume" }, { nom: "Mesclun", recetteId: "mesclun", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson longue", consequence: "Viande sèche", solution: "Flash seulement" }],
    leSaviezVous: "Les aiguillettes sont le 'filet mignon' du canard ! Ce sont les morceaux les plus tendres après le magret. Parfaites pour les salades gourmandes du Sud-Ouest."
  },
  "Foie gras de canard": {
    anatomie: { localisation: "Foie hypertrophié", origine: "Foie de canard gavé", muscles: ["N/A - Organe"], categorie: "Produit d'exception" },
    techniqueDuChef: ["Déveiner soigneusement", "Pour terrine : assaisonner, cuire au bain-marie", "Pour poêler : tranches épaisses, poêle très chaude", "Cuisson ultra-rapide (30s/face)", "Servir immédiatement", "Ne jamais trop cuire"],
    caracteristiques: { texture: "Fondante, soyeuse", gout: "Intense, subtil, beurré", gras: "Très gras (50%+)", fibres: "N/A", couleur: "Beige rosé", tenue: "Fond à la chaleur" },
    sauces: [{ nom: "Réduction de Sauternes", type: "gastronomique", description: "Sauternes réduit" }, { nom: "Chutney de figues", type: "sucré", description: "Figues confites" }],
    accompagnements: [{ nom: "Pain d'épices grillé", recetteId: "pain_epices", type: "pain" }, { nom: "Brioche toastée", recetteId: "brioche", type: "pain" }],
    erreursAEviter: [{ erreur: "Cuisson trop longue", consequence: "Fond et disparaît dans la poêle", solution: "30 secondes par face maximum" }],
    leSaviezVous: "Le foie gras est une spécialité française depuis l'Égypte antique ! La France produit 75% du foie gras mondial. L'IGP 'Canard à Foie Gras du Sud-Ouest' protège la tradition."
  },
  "Gésiers de canard": {
    anatomie: { localisation: "Estomac musculaire", origine: "Gésier (organe digestif)", muscles: ["Muscle gésier"], categorie: "Abat" },
    techniqueDuChef: ["Nettoyer et retirer la membrane", "Confire doucement 2-3h", "Ou sauter rapidement", "Servir en salade tiède", "Texture ferme recherchée", "Assaisonner généreusement"],
    caracteristiques: { texture: "Ferme, croquante", gout: "Prononcé, rustique", gras: "Maigre mais souvent confit", fibres: "Muscle dense", couleur: "Brun foncé", tenue: "Ferme" },
    sauces: [{ nom: "Vinaigrette tiède", type: "simple", description: "Vinaigrette au jus de confit" }],
    accompagnements: [{ nom: "Salade périgourdine", recetteId: "salade_perigourdine", type: "légume" }, { nom: "Pommes de terre sautées", recetteId: "pommes_sautees", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson insuffisante", consequence: "Trop caoutchouteux", solution: "Confits ou bien sautés" }],
    leSaviezVous: "La salade aux gésiers confits est un classique du Sud-Ouest ! Autrefois considérés comme des déchets, les gésiers sont devenus un produit recherché. Ils sont riches en fer et en protéines."
  },
  "Manchons de canard": {
    anatomie: { localisation: "Ailes de canard", origine: "Membres antérieurs", muscles: ["Muscles alaires"], categorie: "Morceau économique" },
    techniqueDuChef: ["Idéaux pour le confit", "Cuire longuement dans la graisse", "Peuvent être grillés", "Chair savoureuse sur les os", "Croustillant recherché", "Économiques et goûteux"],
    caracteristiques: { texture: "Croustillante et juteuse", gout: "Intense", gras: "Sous la peau", fibres: "Fines", couleur: "Doré si confit", tenue: "Se détache des os" },
    sauces: [{ nom: "Sauce aux pruneaux", type: "sucré-salé", description: "Pruneaux, Armagnac" }],
    accompagnements: [{ nom: "Haricots blancs", recetteId: "haricots_blancs", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson rapide", consequence: "Chair pas assez tendre", solution: "Confire ou cuisson longue" }],
    leSaviezVous: "Les manchons de canard confits sont un incontournable du cassoulet ! Ils apportent de la saveur sans le coût des cuisses entières."
  }
};

const dindeEnriched = {
  "Dinde entière": {
    anatomie: { localisation: "Volaille complète", origine: "Meleagris gallopavo", muscles: ["Tous les muscles"], categorie: "Volaille festive" },
    techniqueDuChef: ["Sortir 2h avant cuisson", "Beurrer sous la peau", "Four 180°C, 45 min/kg", "Arroser toutes les 30 min", "Couvrir d'alu si trop doré", "Repos 30 min obligatoire"],
    caracteristiques: { texture: "Chair blanche et brune", gout: "Délicat, moins gras que canard", gras: "Maigre (surtout le blanc)", fibres: "Longues", couleur: "Blanc à rose selon parties", tenue: "Sèche si mal cuite" },
    sauces: [{ nom: "Gravy", type: "américain", description: "Jus de cuisson lié" }, { nom: "Sauce aux marrons", type: "classique", description: "Marrons, crème" }],
    accompagnements: [{ nom: "Purée de marrons", recetteId: "puree_marrons", type: "féculent" }, { nom: "Choux de Bruxelles", recetteId: "choux_bruxelles", type: "légume" }],
    erreursAEviter: [{ erreur: "Four trop chaud", consequence: "Extérieur brûlé, intérieur cru", solution: "180°C et patience" }],
    leSaviezVous: "La dinde de Thanksgiving est une tradition américaine depuis 1621 ! Elle vient du Mexique et a été rapportée par les conquistadors. Le record : une dinde de 39 kg !"
  },
  "Escalope de dinde": {
    anatomie: { localisation: "Blanc tranché", origine: "Poitrine", muscles: ["Pectoralis"], categorie: "Morceau populaire" },
    techniqueDuChef: ["Aplatir pour uniformiser", "Cuisson rapide à feu vif", "Ne pas surcuire (très maigre)", "Peut être panée", "Sauces crémeuses recommandées", "Alternative économique au veau"],
    caracteristiques: { texture: "Maigre et ferme", gout: "Neutre, prend les saveurs", gras: "Très maigre", fibres: "Longues", couleur: "Blanc", tenue: "Sèche facilement" },
    sauces: [{ nom: "Sauce à la crème", type: "classique", description: "Crème, champignons" }, { nom: "Sauce curry", type: "indien", description: "Curry, lait de coco" }],
    accompagnements: [{ nom: "Riz", recetteId: "riz_blanc", type: "féculent" }, { nom: "Légumes vapeur", recetteId: "legumes_vapeur", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Carton à mâcher", solution: "Cuisson juste, sauce généreuse" }],
    leSaviezVous: "L'escalope de dinde est devenue populaire comme alternative maigre au veau ! C'est l'une des viandes les moins caloriques. En Allemagne, le 'Putenschnitzel' est très populaire."
  },
  "Cuisse de dinde": {
    anatomie: { localisation: "Membre postérieur", origine: "Cuisse avec os", muscles: ["Muscles de la cuisse"], categorie: "Morceau familial" },
    techniqueDuChef: ["Plus savoureuse que le blanc", "Cuisson longue supportée", "Idéale braisée", "Peut être confite", "Chair foncée plus goûteuse", "Économique pour grandes tablées"],
    caracteristiques: { texture: "Juteuse, plus grasse", gout: "Plus prononcé que le blanc", gras: "Modéré", fibres: "Moyennes", couleur: "Plus foncé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux champignons", type: "classique", description: "Champignons variés, crème" }],
    accompagnements: [{ nom: "Purée", recetteId: "puree_maison", type: "féculent" }, { nom: "Choux braisé", recetteId: "chou_braise", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire comme le blanc", consequence: "Pas assez cuit près de l'os", solution: "Cuisson plus longue" }],
    leSaviezVous: "Une cuisse de dinde peut peser jusqu'à 1 kg ! C'est économique pour nourrir toute la famille. La chair foncée contient plus de fer que la blanche."
  },
  "Filet de dinde": {
    anatomie: { localisation: "Petit muscle sous le blanc", origine: "Petit pectoral", muscles: ["Pectoralis minor"], categorie: "Morceau fin" },
    techniqueDuChef: ["Très maigre", "Cuisson rapide", "Idéal pour sautés", "Marinade recommandée", "Ne pas trop cuire", "Parfait émincé"],
    caracteristiques: { texture: "Tendre", gout: "Très délicat", gras: "Très maigre", fibres: "Fines", couleur: "Blanc", tenue: "Fragile" },
    sauces: [{ nom: "Sauce asiatique", type: "asiatique", description: "Soja, gingembre" }],
    accompagnements: [{ nom: "Nouilles", recetteId: "nouilles_sautees", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson longue", consequence: "Devient sec", solution: "Cuisson flash" }],
    leSaviezVous: "Le filet de dinde est encore plus maigre que le blanc de poulet ! C'est le choix des sportifs et des régimes protéinés."
  },
  "Rôti de dinde": {
    anatomie: { localisation: "Blanc ficelé en rôti", origine: "Poitrine", muscles: ["Pectoralis"], categorie: "Préparation" },
    techniqueDuChef: ["Souvent bardé de lard", "Four 180°C", "Arroser régulièrement", "Thermomètre recommandé", "Repos obligatoire", "74°C à cœur"],
    caracteristiques: { texture: "Selon cuisson", gout: "Délicat", gras: "Très maigre sauf barde", fibres: "Longues", couleur: "Blanc", tenue: "Dépend de la cuisson" },
    sauces: [{ nom: "Jus de rôti", type: "simple", description: "Fond déglaçé" }],
    accompagnements: [{ nom: "Légumes rôtis", recetteId: "legumes_rotis", type: "légume" }],
    erreursAEviter: [{ erreur: "Pas de barde", consequence: "Rôti sec", solution: "Barder ou arroser souvent" }],
    leSaviezVous: "Le rôti de dinde est une alternative économique au rôti de veau ! Très populaire pour les repas du dimanche."
  },
  "Pilon de dinde": {
    anatomie: { localisation: "Partie basse de la cuisse", origine: "Jambe inférieure", muscles: ["Muscles du tibia"], categorie: "Morceau populaire" },
    techniqueDuChef: ["Peut peser 300-400g", "Cuisson longue nécessaire", "Idéal BBQ ou rôti", "Chair savoureuse", "Os pratique à tenir", "Bien cuit obligatoire"],
    caracteristiques: { texture: "Juteuse", gout: "Savoureux", gras: "Sous la peau", fibres: "Moyennes", couleur: "Chair foncée", tenue: "Excellente" },
    sauces: [{ nom: "Sauce BBQ", type: "américain", description: "Tomate, épices" }],
    accompagnements: [{ nom: "Frites", recetteId: "frites_maison", type: "féculent" }],
    erreursAEviter: [{ erreur: "Sous-cuire", consequence: "Rose près de l'os", solution: "Bien cuit impératif" }],
    leSaviezVous: "Le pilon de dinde géant est populaire dans les fêtes foraines américaines ! Un seul pilon peut nourrir une personne."
  },
  "Ailes de dinde": {
    anatomie: { localisation: "Membres antérieurs", origine: "Ailes", muscles: ["Muscles alaires"], categorie: "Morceau économique" },
    techniqueDuChef: ["Grandes et charnues", "Excellentes en ragoût", "Peuvent être grillées", "Cuisson longue", "Chair savoureuse", "Économiques"],
    caracteristiques: { texture: "Juteuse", gout: "Savoureux", gras: "Sous la peau", fibres: "Moyennes", couleur: "Chair foncée", tenue: "Bonne" },
    sauces: [{ nom: "Sauce tomate", type: "simple", description: "Tomates, herbes" }],
    accompagnements: [{ nom: "Légumes racines", recetteId: "legumes_racines", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuisson courte", consequence: "Chair pas tendre", solution: "Cuisson longue ou braisé" }],
    leSaviezVous: "Les ailes de dinde sont très utilisées pour les bouillons et les ragoûts ! Une seule aile peut peser jusqu'à 500g."
  },
  "Osso bucco de dinde": {
    anatomie: { localisation: "Jarret tranché", origine: "Jambe avec os", muscles: ["Muscles du jarret"], categorie: "Préparation moderne" },
    techniqueDuChef: ["Tranches avec os à moelle", "Braiser 1h30-2h", "Version économique de l'osso buco de veau", "La moelle enrichit la sauce", "Servir avec gremolata", "Chair fondante recherchée"],
    caracteristiques: { texture: "Fondante après braisage", gout: "Savoureux", gras: "Peu gras mais moelleux", fibres: "Se détachent", couleur: "Brun après braisage", tenue: "Se défait de l'os" },
    sauces: [{ nom: "Sauce tomate aux aromates", type: "italien", description: "Tomates, vin blanc, aromates" }, { nom: "Gremolata", type: "italien", description: "Zeste citron, ail, persil" }],
    accompagnements: [{ nom: "Risotto", recetteId: "risotto", type: "féculent" }, { nom: "Polenta", recetteId: "polenta", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson insuffisante", consequence: "Chair ferme", solution: "1h30 minimum de braisage" }],
    leSaviezVous: "L'osso buco de dinde est une invention moderne économique ! Il offre le même plaisir que le veau à moindre coût."
  }
};

const pintadeEnriched = {
  "Pintade entière": {
    anatomie: { localisation: "Volaille complète", origine: "Numida meleagris", muscles: ["Tous les muscles"], categorie: "Volaille de caractère" },
    techniqueDuChef: ["Chair ferme, entre poulet et gibier", "Barder car maigre", "Four 180°C, 50-60 min/kg", "Arroser souvent", "Repos 10-15 min", "Peut être braisée"],
    caracteristiques: { texture: "Ferme et savoureuse", gout: "Plus prononcé que poulet, giboyeux", gras: "Maigre", fibres: "Moyennes", couleur: "Légèrement plus foncé", tenue: "Bonne" },
    sauces: [{ nom: "Sauce au chou", type: "classique", description: "Chou braisé, lardons" }, { nom: "Sauce forestière", type: "classique", description: "Champignons des bois" }],
    accompagnements: [{ nom: "Chou braisé", recetteId: "chou_braise", type: "légume" }, { nom: "Champignons", recetteId: "champignons_sautes", type: "légume" }],
    erreursAEviter: [{ erreur: "Cuire sans barde", consequence: "Chair sèche", solution: "Barder ou cocotte avec liquide" }],
    leSaviezVous: "La pintade vient d'Afrique et était considérée comme un met de luxe ! Sa chair est à mi-chemin entre le poulet et le gibier. Elle est plus ferme et plus savoureuse que le poulet."
  },
  "Suprême de pintade": {
    anatomie: { localisation: "Blanc avec aile", origine: "Poitrine avec os de l'aile", muscles: ["Pectoralis"], categorie: "Morceau noble" },
    techniqueDuChef: ["Plus ferme que le poulet", "Saisir côté peau d'abord", "Finir au four si épais", "Cuisson précise nécessaire", "Repos important", "Peut être rosé au centre"],
    caracteristiques: { texture: "Ferme et tendre", gout: "Caractéristique, giboyeux léger", gras: "Sous la peau", fibres: "Moyennes", couleur: "Légèrement rosé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème, vin jaune" }],
    accompagnements: [{ nom: "Purée de céleri", recetteId: "puree_celeri", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Chair sèche et ferme", solution: "Cuisson précise, légèrement rosé accepté" }],
    leSaviezVous: "Le suprême de pintade est très apprécié en gastronomie ! Sa fermeté permet une cuisson moins risquée que le poulet. C'est souvent au menu des restaurants étoilés."
  },
  "Cuisses de pintade": {
    anatomie: { localisation: "Membres postérieurs", origine: "Cuisses avec os", muscles: ["Muscles de la cuisse"], categorie: "Morceau savoureux" },
    techniqueDuChef: ["Plus fermes que celles de poulet", "Idéales braisées ou confites", "Cuisson longue recommandée", "Le collagène fond et attendrit", "Excellentes le lendemain", "Peau croustillante si rôties"],
    caracteristiques: { texture: "Ferme puis fondante", gout: "Prononcé, savoureux", gras: "Sous la peau", fibres: "Moyennes", couleur: "Plus foncé que poulet", tenue: "Excellente" },
    sauces: [{ nom: "Sauce au vin", type: "classique", description: "Vin rouge ou blanc, échalotes" }],
    accompagnements: [{ nom: "Lentilles", recetteId: "lentilles", type: "légume" }, { nom: "Pommes de terre", recetteId: "pommes_fondantes", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuisson comme le poulet", consequence: "Chair trop ferme", solution: "Cuisson plus longue ou braisée" }],
    leSaviezVous: "Les cuisses de pintade confites sont un délice méconnu ! Plus goûteuses que celles de poulet, elles méritent une cuisson longue pour révéler toute leur saveur."
  }
};

const oieEnriched = {
  "Oie entière": {
    anatomie: { localisation: "Volaille complète", origine: "Anser anser domesticus", muscles: ["Tous les muscles"], categorie: "Volaille festive" },
    techniqueDuChef: ["Traditionnellement servie à Noël", "Piquer la peau pour rendre le gras", "Four 180°C, 20 min/500g", "Arroser très souvent", "Beaucoup de gras à récupérer", "Chair plus foncée que le canard"],
    caracteristiques: { texture: "Chair foncée, juteuse", gout: "Prononcé, plus fort que canard", gras: "Très grasse", fibres: "Moyennes", couleur: "Rouge foncé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux pommes", type: "classique", description: "Compote de pommes" }, { nom: "Sauce aux airelles", type: "scandinave", description: "Airelles, sucre" }],
    accompagnements: [{ nom: "Chou rouge aux pommes", recetteId: "chou_rouge_pommes", type: "légume" }, { nom: "Marrons", recetteId: "marrons", type: "féculent" }],
    erreursAEviter: [{ erreur: "Ne pas piquer la peau", consequence: "Gras qui ne s'écoule pas", solution: "Piquer généreusement" }],
    leSaviezVous: "L'oie rôtie est le plat traditionnel de Noël en Allemagne et en Angleterre ! Le gras d'oie est considéré comme l'un des meilleurs pour la cuisine. En Alsace, l'oie de la Saint-Martin est une tradition."
  },
  "Magret d'oie": {
    anatomie: { localisation: "Filet d'oie gavée", origine: "Poitrine d'oie à foie gras", muscles: ["Pectoralis hypertrophié"], categorie: "Morceau noble" },
    techniqueDuChef: ["Plus gros que le magret de canard", "Même technique de cuisson", "Commencer côté gras, poêle froide", "Cuisson rosée obligatoire", "Repos avant découpe", "Trancher fin"],
    caracteristiques: { texture: "Fondante", gout: "Plus délicat que le canard", gras: "Épais layer de gras", fibres: "Serrées", couleur: "Rouge foncé", tenue: "Excellente" },
    sauces: [{ nom: "Sauce aux fruits rouges", type: "fruit", description: "Fruits rouges, vinaigre" }],
    accompagnements: [{ nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuire bien cuit", consequence: "Viande dure", solution: "Rosé uniquement" }],
    leSaviezVous: "Le magret d'oie est plus rare et plus cher que celui de canard ! Il est plus gros (400-600g) et son goût est considéré comme plus fin par certains amateurs."
  },
  "Cuisses d'oie confites": {
    anatomie: { localisation: "Membres postérieurs confits", origine: "Cuisses d'oie", muscles: ["Muscles de la cuisse"], categorie: "Préparation traditionnelle" },
    techniqueDuChef: ["Saler 24-48h", "Confire dans la graisse d'oie", "Cuisson très lente 3-4h", "Conservation en pot dans la graisse", "Réchauffer au four pour croustiller", "Se conserve des mois"],
    caracteristiques: { texture: "Fondante sous peau croustillante", gout: "Intense, riche", gras: "Confit dans le gras", fibres: "Se détachent", couleur: "Doré", tenue: "Se défait de l'os" },
    sauces: [{ nom: "Graisse de confit", type: "simple", description: "Graisse d'oie pure" }],
    accompagnements: [{ nom: "Pommes sarladaises", recetteId: "pommes_sarladaises", type: "féculent" }, { nom: "Salade", recetteId: "salade_verte", type: "légume" }],
    erreursAEviter: [{ erreur: "Température trop haute", consequence: "Chair sèche", solution: "90°C maximum, patience" }],
    leSaviezVous: "Le confit d'oie est la préparation traditionnelle d'Alsace et du Sud-Ouest ! La graisse d'oie était autrefois le principal corps gras de ces régions. Un bon confit peut se garder un an."
  },
  "Foie gras d'oie": {
    anatomie: { localisation: "Foie hypertrophié", origine: "Foie d'oie gavée", muscles: ["N/A - Organe"], categorie: "Produit d'exception" },
    techniqueDuChef: ["Le plus fin des foies gras", "Déveiner avec soin", "Pour terrine ou mi-cuit", "Température de cuisson précise", "Se travaille froid", "Conservation au frais"],
    caracteristiques: { texture: "Plus ferme que canard", gout: "Plus fin, plus subtil", gras: "Très gras", fibres: "N/A", couleur: "Ivoire", tenue: "Meilleure que canard" },
    sauces: [{ nom: "Gelée au Sauternes", type: "gastronomique", description: "Sauternes en gelée" }],
    accompagnements: [{ nom: "Pain brioché", recetteId: "brioche", type: "pain" }, { nom: "Chutney", recetteId: "chutney_figues", type: "condiment" }],
    erreursAEviter: [{ erreur: "Surcuisson", consequence: "Le foie fond", solution: "Température très précise" }],
    leSaviezVous: "Le foie gras d'oie est plus rare et plus cher que celui de canard ! Il est considéré comme plus fin et plus subtil par les connaisseurs. L'Alsace est la région traditionnelle du foie gras d'oie."
  }
};

const chaponEnriched = {
  "Chapon entier": {
    anatomie: { localisation: "Coq castré engraissé", origine: "Gallus gallus domesticus (castré)", muscles: ["Tous les muscles hypertrophiés"], categorie: "Volaille festive d'exception" },
    techniqueDuChef: ["Volaille de Noël par excellence", "Beurrer généreusement sous la peau", "Four 180°C, 25-30 min/kg", "Arroser très souvent", "Chair très tendre naturellement", "Repos 20 min obligatoire"],
    caracteristiques: { texture: "Exceptionnellement tendre", gout: "Délicat, fin, persillé", gras: "Plus gras que poulet, persillé", fibres: "Fines", couleur: "Chair claire persillée", tenue: "Excellente" },
    sauces: [{ nom: "Jus de chapon", type: "simple", description: "Jus de cuisson" }, { nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème" }],
    accompagnements: [{ nom: "Marrons", recetteId: "marrons", type: "féculent" }, { nom: "Gratin dauphinois", recetteId: "gratin_dauphinois", type: "féculent" }],
    erreursAEviter: [{ erreur: "Four trop chaud", consequence: "Peau brûlée, chair sèche", solution: "180°C maximum, arrosage fréquent" }],
    leSaviezVous: "Le chapon est castré à 8 semaines et élevé 5 mois minimum ! C'est la volaille la plus prisée pour Noël. Le chapon de Bresse AOP est considéré comme le meilleur du monde."
  },
  "Suprême de chapon": {
    anatomie: { localisation: "Blanc avec aile", origine: "Poitrine avec os de l'aile", muscles: ["Pectoralis"], categorie: "Morceau d'exception" },
    techniqueDuChef: ["Morceau le plus tendre", "Saisir côté peau", "Finir au four doucement", "Arroser de beurre", "Cuisson précise", "Repos obligatoire"],
    caracteristiques: { texture: "Extrêmement tendre", gout: "Fin et délicat", gras: "Persillé sous la peau", fibres: "Très fines", couleur: "Blanc nacré", tenue: "Excellente" },
    sauces: [{ nom: "Sauce truffée", type: "gastronomique", description: "Truffe noire, crème" }],
    accompagnements: [{ nom: "Légumes fins", recetteId: "legumes_fins", type: "légume" }],
    erreursAEviter: [{ erreur: "Trop cuire", consequence: "Perte de la tendreté exceptionnelle", solution: "Cuisson juste, température contrôlée" }],
    leSaviezVous: "Le suprême de chapon de Bresse est l'un des morceaux les plus chers du monde ! Sa tendreté est due à l'absence de testostérone qui durcirait les muscles."
  },
  "Cuisses de chapon": {
    anatomie: { localisation: "Membres postérieurs", origine: "Cuisses avec os", muscles: ["Muscles de la cuisse"], categorie: "Morceau savoureux" },
    techniqueDuChef: ["Plus tendres que celles de poulet", "Peuvent être rôties ou braisées", "Cuisson plus courte que poulet", "Chair juteuse naturellement", "Peau fine et croustillante", "Repos avant service"],
    caracteristiques: { texture: "Tendre et fondante", gout: "Savoureux et fin", gras: "Bien gras", fibres: "Moyennes mais tendres", couleur: "Plus claire que poulet", tenue: "Excellente" },
    sauces: [{ nom: "Jus de rôtissage", type: "simple", description: "Jus naturel" }],
    accompagnements: [{ nom: "Purée truffée", recetteId: "puree_truffee", type: "féculent" }],
    erreursAEviter: [{ erreur: "Cuire comme du poulet", consequence: "Risque de surcuisson", solution: "Moins longtemps, viande plus tendre" }],
    leSaviezVous: "Les cuisses de chapon sont parfois plus recherchées que les blancs par les connaisseurs ! Leur gras persillé les rend exceptionnellement savoureuses."
  }
};

module.exports = {
  pouletEnriched,
  canardEnriched,
  dindeEnriched,
  pintadeEnriched,
  oieEnriched,
  chaponEnriched
};
