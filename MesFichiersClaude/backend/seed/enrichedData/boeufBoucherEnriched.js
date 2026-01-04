// Données enrichies pour le Boeuf - Morceaux de Boucher
// Morceaux rares et précieux, souvent réservés par le boucher

const boeufBoucherEnriched = {
  // === 0: POIRE ===
  "Poire": {
    anatomie: {
      localisation: "Face interne de la cuisse, près de l'articulation",
      origine: "Muscle de la cuisse",
      muscles: ["Partie du quadriceps"],
      categorie: "Morceau du boucher, première catégorie"
    },
    techniqueDuChef: [
      "Un des morceaux les plus tendres après le filet",
      "Idéal en steak ou en rôti",
      "Cuisson rapide à haute température",
      "Ne pas dépasser 'à point'",
      "Laisser reposer pour redistribuer les jus",
      "Trancher fin en biais"
    ],
    caracteristiques: {
      texture: "Très tendre, fondante",
      gout: "Délicat, subtil comme le filet",
      gras: "Très maigre",
      fibres: "Fines et courtes",
      couleur: "Rouge vif",
      tenue: "Excellente"
    },
    sauces: [
      { nom: "Sauce béarnaise", type: "classique", description: "Beurre, estragon, échalotes" },
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Crème, morilles, vin jaune" },
      { nom: "Beurre noisette", type: "simple", description: "Beurre mousseux aux notes de noisette" }
    ],
    accompagnements: [
      { nom: "Pommes de terre fondantes", recetteId: "pommes_fondantes", type: "féculent" },
      { nom: "Asperges vertes", recetteId: "asperges_vertes", type: "légume" },
      { nom: "Gratin de cèpes", recetteId: "gratin_cepes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire trop longtemps",
        consequence: "Perte de tendreté, viande sèche",
        solution: "Maximum à point, surveiller attentivement"
      },
      {
        erreur: "Ne pas tempérer",
        consequence: "Cuisson inégale",
        solution: "1h à température ambiante avant cuisson"
      }
    ],
    leSaviezVous: "La poire tire son nom de sa forme caractéristique. C'est l'un des morceaux les plus recherchés par les connaisseurs car il combine tendreté du filet et saveur plus prononcée. Il n'y en a que 600g environ par animal !"
  },

  // === 1: MERLAN ===
  "Merlan": {
    anatomie: {
      localisation: "Face interne de la cuisse",
      origine: "Muscle profond de la cuisse",
      muscles: ["Vastus medialis (vaste interne)"],
      categorie: "Morceau du boucher, première catégorie"
    },
    techniqueDuChef: [
      "Forme allongée rappelant le poisson du même nom",
      "Un des morceaux les plus tendres",
      "Cuisson rapide comme le filet",
      "Parfait en steak ou escalope",
      "Ne jamais dépasser saignant-à point",
      "Arroser de beurre en fin de cuisson"
    ],
    caracteristiques: {
      texture: "Extrêmement tendre",
      gout: "Fin et délicat",
      gras: "Très maigre",
      fibres: "Très fines",
      couleur: "Rouge clair",
      tenue: "Fragile, cuisson précise requise"
    },
    sauces: [
      { nom: "Sauce au poivre", type: "classique", description: "Crème, cognac, poivre" },
      { nom: "Sauce vierge", type: "légère", description: "Tomates, huile d'olive, basilic" },
      { nom: "Beurre maître d'hôtel", type: "simple", description: "Beurre, persil, citron" }
    ],
    accompagnements: [
      { nom: "Légumes de saison grillés", recetteId: "legumes_grilles", type: "légume" },
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Salade mesclun", recetteId: "salade_mesclun", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre avec un morceau courant",
        consequence: "Mauvaise valorisation, cuisson inadaptée",
        solution: "Traiter comme un morceau noble"
      },
      {
        erreur: "Cuisson trop poussée",
        consequence: "Viande sèche instantanément",
        solution: "Bleu à saignant idéalement"
      }
    ],
    leSaviezVous: "Le merlan s'appelle ainsi car sa forme allongée ressemble au poisson du même nom ! C'est l'un des secrets les mieux gardés des bouchers. Certains chefs le considèrent même supérieur au filet pour sa saveur plus prononcée."
  },

  // === 2: ARAIGNÉE ===
  "Araignée": {
    anatomie: {
      localisation: "Cavité de la hanche, dans le bassin",
      origine: "Muscle de la hanche",
      muscles: ["Obturateur interne"],
      categorie: "Morceau du boucher, première catégorie"
    },
    techniqueDuChef: [
      "Retirer la fine membrane si présente",
      "Cuisson très rapide à feu vif",
      "Ne JAMAIS dépasser saignant",
      "Laisser reposer quelques minutes",
      "Trancher en biais très fin",
      "Servir immédiatement"
    ],
    caracteristiques: {
      texture: "Fibreuse mais incroyablement savoureuse",
      gout: "Le plus goûteux avec l'onglet",
      gras: "Maigre mais juteux",
      fibres: "Apparentes, rayonnantes (d'où le nom)",
      couleur: "Rouge foncé",
      tenue: "Devient dure rapidement si trop cuite"
    },
    sauces: [
      { nom: "Fleur de sel simple", type: "simple", description: "Juste du bon sel" },
      { nom: "Beurre aux herbes", type: "simple", description: "Beurre, thym, romarin" },
      { nom: "Sauce échalote", type: "classique", description: "Échalotes, vin rouge, beurre" }
    ],
    accompagnements: [
      { nom: "Frites maison", recetteId: "frites_maison", type: "féculent" },
      { nom: "Salade verte", recetteId: "salade_vinaigrette", type: "légume" },
      { nom: "Échalotes confites", recetteId: "echalotes_confites", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire au-delà de saignant",
        consequence: "Viande immangeable, dure comme du cuir",
        solution: "Bleu à saignant maximum, pas plus !"
      },
      {
        erreur: "Trancher dans le sens des fibres",
        consequence: "Impossible à mâcher",
        solution: "Trancher fin et perpendiculairement"
      },
      {
        erreur: "Laisser attendre",
        consequence: "Continue de cuire et durcit",
        solution: "Servir dès le repos terminé"
      }
    ],
    leSaviezVous: "L'araignée tire son nom des fibres musculaires qui rayonnent depuis le centre comme les pattes d'une araignée ! Il n'y a que 2 araignées par bœuf (600-800g au total). C'est LE morceau que les bouchers gardaient traditionnellement pour leur famille."
  },

  // === 3: DESSUS DE PALETTE ===
  "Dessus de palette": {
    anatomie: {
      localisation: "Au-dessus de l'omoplate",
      origine: "Muscle de l'épaule",
      muscles: ["Rhomboïde", "Trapèze"],
      categorie: "Morceau du boucher"
    },
    techniqueDuChef: [
      "Excellent en steak ou émincé",
      "Cuisson moyenne recommandée",
      "Peut être légèrement mariné",
      "Saisir à feu vif puis baisser",
      "Bien reposer avant de trancher",
      "Idéal pour les plats asiatiques sautés"
    ],
    caracteristiques: {
      texture: "Tendre avec du caractère",
      gout: "Savoureux, notes de bœuf prononcées",
      gras: "Légèrement persillé",
      fibres: "Moyennes",
      couleur: "Rouge soutenu",
      tenue: "Bonne"
    },
    sauces: [
      { nom: "Sauce teriyaki", type: "asiatique", description: "Soja, mirin, sucre" },
      { nom: "Sauce aux champignons", type: "classique", description: "Champignons, crème, persil" },
      { nom: "Chimichurri", type: "latino", description: "Persil, ail, huile, vinaigre" }
    ],
    accompagnements: [
      { nom: "Nouilles sautées", recetteId: "nouilles_sautees", type: "féculent" },
      { nom: "Wok de légumes", recetteId: "wok_legumes", type: "légume" },
      { nom: "Riz cantonnais", recetteId: "riz_cantonnais", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Le traiter comme un morceau banal",
        consequence: "Ne pas profiter de sa qualité",
        solution: "Cuisson soignée comme un morceau noble"
      },
      {
        erreur: "Trop cuire",
        consequence: "Perte de jutosité",
        solution: "Maximum à point"
      }
    ],
    leSaviezVous: "Le dessus de palette est souvent méconnu du grand public mais très apprécié des restaurateurs pour son excellent rapport qualité-prix. C'est un morceau polyvalent qui s'adapte à de nombreuses préparations !"
  },

  // === 4: SURPRIS (BOULE DE MACREUSE) ===
  "Surpris (boule de macreuse)": {
    anatomie: {
      localisation: "Centre de l'épaule, forme ronde",
      origine: "Muscle de l'omoplate",
      muscles: ["Supraspinatus"],
      categorie: "Morceau du boucher"
    },
    techniqueDuChef: [
      "Nom 'surpris' car on ne s'attend pas à cette tendreté",
      "Idéal en steak ou petit rôti",
      "Cuisson rapide à température élevée",
      "Laisser reposer autant que la cuisson",
      "Excellent en tataki",
      "Ne pas trop assaisonner pour apprécier le goût"
    ],
    caracteristiques: {
      texture: "Étonnamment tendre pour l'épaule",
      gout: "Délicat avec du caractère",
      gras: "Maigre à légèrement persillé",
      fibres: "Fines",
      couleur: "Rouge vif",
      tenue: "Très bonne"
    },
    sauces: [
      { nom: "Sauce ponzu", type: "japonais", description: "Agrumes, soja, dashi" },
      { nom: "Beurre noisette", type: "simple", description: "Beurre mousseux doré" },
      { nom: "Sauce wasabi-crème", type: "fusion", description: "Crème, wasabi, soja" }
    ],
    accompagnements: [
      { nom: "Salade de wakame", recetteId: "salade_wakame", type: "légume" },
      { nom: "Riz japonais", recetteId: "riz_japonais", type: "féculent" },
      { nom: "Légumes croquants", recetteId: "legumes_croquants", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Le confondre avec la macreuse ordinaire",
        consequence: "Cuisson longue inadaptée",
        solution: "C'est un morceau à cuisson rapide !"
      },
      {
        erreur: "Dépasser la cuisson à point",
        consequence: "Perte de la tendreté caractéristique",
        solution: "Saignant à à point maximum"
      }
    ],
    leSaviezVous: "Le surpris s'appelle ainsi car les premiers qui l'ont goûté ont été 'surpris' par sa tendreté inattendue pour un morceau d'épaule ! Aussi appelé 'boule de macreuse', il ne pèse qu'environ 800g par animal."
  },

  // === 5: AIGUILLETTE BARONNE ===
  "Aiguillette baronne": {
    anatomie: {
      localisation: "Face externe de la cuisse, partie haute",
      origine: "Muscle de la cuisse",
      muscles: ["Biceps femoris (partie)"],
      categorie: "Morceau du boucher, première catégorie"
    },
    techniqueDuChef: [
      "Forme allongée caractéristique",
      "Parfait en rôti ou tranché en steaks",
      "Cuisson moyenne à vif",
      "Ficeler pour rôti uniforme",
      "Laisser reposer longuement",
      "Trancher fin pour servir"
    ],
    caracteristiques: {
      texture: "Tendre et ferme à la fois",
      gout: "Savoureux, typé bœuf",
      gras: "Maigre",
      fibres: "Longues et fines",
      couleur: "Rouge soutenu",
      tenue: "Excellente"
    },
    sauces: [
      { nom: "Sauce forestière", type: "classique", description: "Champignons des bois, persil" },
      { nom: "Jus corsé", type: "simple", description: "Fond de veau réduit" },
      { nom: "Sauce moutarde", type: "classique", description: "Moutarde, crème, estragon" }
    ],
    accompagnements: [
      { nom: "Gratin de pommes de terre", recetteId: "gratin_pommes_terre", type: "féculent" },
      { nom: "Poêlée de girolles", recetteId: "poelee_girolles", type: "légume" },
      { nom: "Haricots verts persillés", recetteId: "haricots_verts_ail", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson trop poussée",
        consequence: "Viande sèche car maigre",
        solution: "Rosé au centre maximum"
      },
      {
        erreur: "Tranches trop épaisses",
        consequence: "Mâche difficile",
        solution: "Trancher fin contre les fibres"
      }
    ],
    leSaviezVous: "L'aiguillette baronne tire son nom de sa forme fine et allongée comme une aiguille. 'Baronne' fait référence à sa noblesse parmi les morceaux. C'est un des meilleurs morceaux pour le rôti du dimanche !"
  },

  // === 6: AIGUILLETTE DE RUMSTECK ===
  "Aiguillette de rumsteck": {
    anatomie: {
      localisation: "Partie fine du rumsteck",
      origine: "Extension du rumsteck",
      muscles: ["Gluteus medius (partie)"],
      categorie: "Morceau du boucher"
    },
    techniqueDuChef: [
      "Plus fine que le rumsteck classique",
      "Excellente en rôti ou brochettes",
      "Cuisson rapide recommandée",
      "Marinade express possible (30 min)",
      "Ne pas trop cuire, maigre",
      "Trancher très fin si rôti"
    ],
    caracteristiques: {
      texture: "Ferme mais tendre",
      gout: "Bœuf prononcé",
      gras: "Maigre",
      fibres: "Longues",
      couleur: "Rouge vif",
      tenue: "Bonne"
    },
    sauces: [
      { nom: "Sauce satay", type: "asiatique", description: "Cacahuète, soja, lait de coco" },
      { nom: "Marinade miel-soja", type: "asiatique", description: "Soja, miel, gingembre" },
      { nom: "Sauce barbecue", type: "américain", description: "Tomate, vinaigre, épices" }
    ],
    accompagnements: [
      { nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" },
      { nom: "Salade d'herbes", recetteId: "salade_herbes", type: "légume" },
      { nom: "Légumes grillés", recetteId: "legumes_grilles", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire entière comme un pavé",
        consequence: "Cuisson inégale (fine)",
        solution: "Adapter le temps à l'épaisseur fine"
      },
      {
        erreur: "Oublier la marinade",
        consequence: "Viande plus sèche",
        solution: "Même courte, une marinade hydrate"
      }
    ],
    leSaviezVous: "L'aiguillette de rumsteck est la partie 'queue' du rumsteck, plus fine et plus longue. Elle est parfaite pour les brochettes car elle ne sèche pas aussi vite que d'autres morceaux maigres !"
  },

  // === 7: TENDRON ===
  "Tendron": {
    anatomie: {
      localisation: "Partie basse de la poitrine, entre les côtes",
      origine: "Cartilages costaux et viande",
      muscles: ["Muscles intercostaux", "Cartilages"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Contient des cartilages qui fondent à la cuisson",
      "Braisé ou en ragoût uniquement",
      "Cuisson longue (3h minimum)",
      "Les cartilages deviennent gélatineux",
      "Saveur exceptionnelle en sauce",
      "Excellent le lendemain, réchauffé"
    ],
    caracteristiques: {
      texture: "Cartilagineux cru, fondant après cuisson",
      gout: "Très savoureux, riche",
      gras: "Entrelardé avec cartilages",
      fibres: "Variables",
      couleur: "Rouge avec zones blanches",
      tenue: "Se défait après cuisson longue"
    },
    sauces: [
      { nom: "Sauce printanière", type: "classique", description: "Petits légumes, herbes fraîches" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" },
      { nom: "Sauce aux carottes", type: "simple", description: "Carottes fondues, jus" }
    ],
    accompagnements: [
      { nom: "Petits pois frais", recetteId: "petits_pois_lardons", type: "légume" },
      { nom: "Carottes nouvelles", recetteId: "carottes_nouvelles", type: "légume" },
      { nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Vouloir le griller",
        consequence: "Cartilages durs, immangeable",
        solution: "Braisé uniquement, jamais grillé"
      },
      {
        erreur: "Cuisson trop courte",
        consequence: "Cartilages caoutchouteux",
        solution: "3h minimum à feu doux"
      },
      {
        erreur: "Retirer les cartilages",
        consequence: "Perdre le meilleur !",
        solution: "Les cartilages fondus sont un délice"
      }
    ],
    leSaviezVous: "Le tendron est le morceau des connaisseurs ! Les cartilages costaux se transforment en une gelée savoureuse lors de la cuisson longue. C'est le morceau traditionnel du tendron de veau aux petits légumes, mais celui de bœuf est tout aussi délicieux."
  },

  // === 8: JUMEAU À BIFTECK ===
  "Jumeau à bifteck": {
    anatomie: {
      localisation: "Épaule, partie maigre",
      origine: "Muscles de l'épaule",
      muscles: ["Partie du triceps"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Version 'steak' du jumeau (vs pot-au-feu)",
      "Trancher finement contre les fibres",
      "Cuisson rapide à feu vif",
      "Peut être légèrement attendri",
      "Excellent rapport qualité-prix",
      "Idéal pour les émincés"
    ],
    caracteristiques: {
      texture: "Légèrement ferme mais goûteuse",
      gout: "Bœuf franc, savoureux",
      gras: "Maigre",
      fibres: "Moyennes à longues",
      couleur: "Rouge soutenu",
      tenue: "Bonne si bien tranché"
    },
    sauces: [
      { nom: "Sauce stroganoff", type: "russe", description: "Crème, champignons, paprika" },
      { nom: "Sauce oignons", type: "classique", description: "Oignons fondus, fond brun" },
      { nom: "Sauce moutarde", type: "simple", description: "Moutarde, crème" }
    ],
    accompagnements: [
      { nom: "Tagliatelles", recetteId: "tagliatelles", type: "féculent" },
      { nom: "Riz basmati", recetteId: "riz_basmati", type: "féculent" },
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Trancher dans le sens des fibres",
        consequence: "Viande difficile à mâcher",
        solution: "Toujours perpendiculairement aux fibres"
      },
      {
        erreur: "Steaks trop épais",
        consequence: "Cuisson inégale",
        solution: "Maximum 1,5cm d'épaisseur"
      }
    ],
    leSaviezVous: "Le jumeau à bifteck est le 'frère' maigre du jumeau à pot-au-feu ! Ensemble ils forment le muscle complet. C'est un excellent choix économique pour des steaks du quotidien avec du goût."
  },

  // === 9: MOUVANT ===
  "Mouvant": {
    anatomie: {
      localisation: "Cuisse, partie externe",
      origine: "Muscle de la cuisse",
      muscles: ["Partie du quadriceps"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Morceau méconnu mais savoureux",
      "Bon pour rôti ou braisé court",
      "Peut être pané",
      "Attendrir si en steak",
      "Idéal émincé pour sautés",
      "Prix très attractif"
    ],
    caracteristiques: {
      texture: "Ferme",
      gout: "Bœuf classique",
      gras: "Maigre",
      fibres: "Longues",
      couleur: "Rouge",
      tenue: "Correcte"
    },
    sauces: [
      { nom: "Sauce milanaise", type: "italien", description: "Tomate, jambon, champignons" },
      { nom: "Sauce piquante", type: "classique", description: "Cornichons, câpres, vinaigre" },
      { nom: "Jus au thym", type: "simple", description: "Fond, thym frais" }
    ],
    accompagnements: [
      { nom: "Spaghetti", recetteId: "spaghetti", type: "féculent" },
      { nom: "Légumes sautés", recetteId: "legumes_sautes", type: "légume" },
      { nom: "Pommes rissolées", recetteId: "pommes_rissolees", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Le cuire comme un morceau noble",
        consequence: "Résultat décevant",
        solution: "Préparations adaptées (émincé, braisé)"
      },
      {
        erreur: "En steaks épais saignants",
        consequence: "Mâche difficile",
        solution: "Fin et à point ou émincé"
      }
    ],
    leSaviezVous: "Le mouvant s'appelle ainsi car c'est un muscle très sollicité par le mouvement de l'animal. Peu connu du grand public, c'est un allié des budgets serrés pour manger de la viande de qualité !"
  },

  // === 10: TRANCHE GRASSE ===
  "Tranche grasse": {
    anatomie: {
      localisation: "Cuisse, partie supérieure",
      origine: "Muscle de la cuisse",
      muscles: ["Adducteurs"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Ne pas se fier au nom : pas si grasse !",
      "Excellente pour rosbif",
      "Ficeler en rôti",
      "Cuisson rosée recommandée",
      "Bien reposer avant découpe",
      "Convient aussi émincée"
    ],
    caracteristiques: {
      texture: "Tendre pour un morceau économique",
      gout: "Bon goût de bœuf",
      gras: "Modérément gras (persillé fin)",
      fibres: "Moyennes",
      couleur: "Rouge avec léger persillé",
      tenue: "Bonne"
    },
    sauces: [
      { nom: "Jus de rôti", type: "simple", description: "Fond déglaçé au vin" },
      { nom: "Sauce au raifort", type: "classique", description: "Crème, raifort frais" },
      { nom: "Yorkshire pudding", type: "anglais", description: "Pâte soufflée au jus" }
    ],
    accompagnements: [
      { nom: "Yorkshire pudding", recetteId: "yorkshire_pudding", type: "accompagnement" },
      { nom: "Légumes rôtis", recetteId: "legumes_rotis", type: "légume" },
      { nom: "Pommes de terre au four", recetteId: "pommes_four", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "S'attendre à du gras",
        consequence: "Surprise car relativement maigre",
        solution: "Le nom est trompeur, arroser si rôti"
      },
      {
        erreur: "Cuire à point ou plus",
        consequence: "Devient sec",
        solution: "Rosé à saignant idéalement"
      }
    ],
    leSaviezVous: "Malgré son nom, la tranche grasse n'est pas particulièrement grasse ! Le terme vient de l'ancien français où 'gras' signifiait 'épais'. C'est un excellent morceau pour un rosbif économique du dimanche."
  },

  // === 11: ROND DE GÎTE ===
  "Rond de gîte": {
    anatomie: {
      localisation: "Partie basse de la cuisse, près du genou",
      origine: "Muscle de la jambe",
      muscles: ["Gastrocnemius medialis"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Forme arrondie caractéristique",
      "Idéal braisé ou en pot-au-feu",
      "Peut être préparé en rôti (cuisson douce)",
      "Riche en collagène = fondant braisé",
      "Ficeler pour maintenir la forme",
      "Cuisson longue recommandée"
    ],
    caracteristiques: {
      texture: "Ferme cru, fondant après braisage",
      gout: "Savoureux, bon en sauce",
      gras: "Maigre avec collagène",
      fibres: "Serrées",
      couleur: "Rouge foncé",
      tenue: "Se défait après cuisson longue"
    },
    sauces: [
      { nom: "Sauce bourguignonne", type: "classique", description: "Vin rouge, lardons, champignons" },
      { nom: "Sauce tomate", type: "italien", description: "Tomates, basilic, ail" },
      { nom: "Jus de braisage", type: "simple", description: "Fond de cuisson réduit" }
    ],
    accompagnements: [
      { nom: "Pâtes fraîches", recetteId: "pates_fraiches", type: "féculent" },
      { nom: "Polenta", recetteId: "polenta", type: "féculent" },
      { nom: "Purée de carottes", recetteId: "puree_carottes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Viande dure",
        solution: "Braisage ou pot-au-feu uniquement"
      },
      {
        erreur: "Le griller",
        consequence: "Texture caoutchouteuse",
        solution: "Cuisson humide et longue"
      }
    ],
    leSaviezVous: "Le rond de gîte tire son nom de sa forme arrondie. C'est un morceau économique idéal pour les plats familiaux mijotés. En Italie, il entre dans la composition du bollito misto !"
  },

  // === 12: GÎTE À LA NOIX ===
  "Gîte à la noix": {
    anatomie: {
      localisation: "Partie supérieure du gîte, près de la noix",
      origine: "Jonction cuisse/jambe",
      muscles: ["Semitendinosus"],
      categorie: "Morceau de deuxième catégorie"
    },
    techniqueDuChef: [
      "Plus tendre que le gîte simple",
      "Peut être rôti (rosé) ou braisé",
      "Ficeler soigneusement",
      "Idéal pour le vitello tonnato",
      "Excellent froid en charcuterie",
      "Trancher très fin"
    ],
    caracteristiques: {
      texture: "Plus tendre que le gîte classique",
      gout: "Délicat, fin",
      gras: "Maigre",
      fibres: "Fines et longues",
      couleur: "Rouge",
      tenue: "Bonne"
    },
    sauces: [
      { nom: "Sauce tonnato", type: "italien", description: "Thon, câpres, anchois, mayonnaise" },
      { nom: "Vinaigrette aux herbes", type: "simple", description: "Huile, vinaigre, fines herbes" },
      { nom: "Sauce verte", type: "classique", description: "Herbes mixées, huile" }
    ],
    accompagnements: [
      { nom: "Salade de roquette", recetteId: "salade_roquette", type: "légume" },
      { nom: "Câpres et cornichons", recetteId: "condiments_charcuterie", type: "condiment" },
      { nom: "Légumes en pickles", recetteId: "pickles_legumes", type: "condiment" }
    ],
    erreursAEviter: [
      {
        erreur: "Confondre avec le gîte simple",
        consequence: "Mode de cuisson inadapté",
        solution: "Le gîte à la noix peut être rôti rosé"
      },
      {
        erreur: "Trancher épais",
        consequence: "Mâche difficile",
        solution: "Tranches fines, surtout froid"
      }
    ],
    leSaviezVous: "Le gîte à la noix est le morceau traditionnel du vitello tonnato italien (remplacez le veau par du bœuf pour une version économique). Il est aussi excellent pour faire de la bresaola maison !"
  },

  // === 13: ROGNONS ===
  "Rognons": {
    anatomie: {
      localisation: "Cavité abdominale, région lombaire",
      origine: "Organe filtrant (reins)",
      muscles: ["N/A - Organe"],
      categorie: "Abat de première catégorie"
    },
    techniqueDuChef: [
      "Choisir des rognons fermes et brillants",
      "Retirer la graisse et les canaux (le 'nerf')",
      "Faire dégorger dans du lait ou vinaigre",
      "Cuisson rapide à feu vif",
      "Servir rosé au centre, jamais trop cuit",
      "Flamber au cognac pour parfumer"
    ],
    caracteristiques: {
      texture: "Ferme et tendre si bien cuit",
      gout: "Prononcé, typé, légèrement urique si mal préparé",
      gras: "Entouré de graisse (à retirer)",
      fibres: "Structure en lobes",
      couleur: "Brun-rouge foncé",
      tenue: "Devient caoutchouteux si trop cuit"
    },
    sauces: [
      { nom: "Sauce moutarde", type: "classique", description: "Moutarde de Dijon, crème" },
      { nom: "Sauce madère", type: "classique", description: "Madère, fond de veau" },
      { nom: "Sauce au porto", type: "gastronomique", description: "Porto, crème, échalotes" }
    ],
    accompagnements: [
      { nom: "Purée de pommes de terre", recetteId: "puree_maison", type: "féculent" },
      { nom: "Riz pilaf", recetteId: "riz_pilaf", type: "féculent" },
      { nom: "Champignons sautés", recetteId: "champignons_sautes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas dégorger",
        consequence: "Goût d'urine prononcé",
        solution: "Tremper 1-2h dans du lait"
      },
      {
        erreur: "Trop cuire",
        consequence: "Texture caoutchouteuse",
        solution: "Rosé au centre obligatoire"
      },
      {
        erreur: "Laisser le nerf",
        consequence: "Parties dures et goût fort",
        solution: "Retirer soigneusement le centre blanc"
      }
    ],
    leSaviezVous: "Les rognons de bœuf sont plus forts en goût que ceux de veau. Le trempage dans le lait neutralise l'acidité. Le plat 'Rognons à la moutarde' est un grand classique de la cuisine de bistrot parisien !"
  },

  // === 14: CŒUR ===
  "Cœur": {
    anatomie: {
      localisation: "Cavité thoracique",
      origine: "Muscle cardiaque",
      muscles: ["Myocarde"],
      categorie: "Abat de deuxième catégorie"
    },
    techniqueDuChef: [
      "Parer soigneusement (retirer gras, valves, vaisseaux)",
      "Peut être tranché ou coupé en cubes",
      "Marinade recommandée pour attendrir",
      "Cuisson rapide (grillé) ou longue (braisé)",
      "En brochettes c'est excellent",
      "Bien assaisonner, goût prononcé"
    ],
    caracteristiques: {
      texture: "Ferme et dense, musclé",
      gout: "Fort, viande très prononcée",
      gras: "Maigre (muscle pur)",
      fibres: "Denses et serrées",
      couleur: "Rouge très foncé",
      tenue: "Ferme, ne se défait pas"
    },
    sauces: [
      { nom: "Sauce chimichurri", type: "latino", description: "Persil, ail, vinaigre, huile" },
      { nom: "Marinade yakitori", type: "japonais", description: "Soja, mirin, sucre" },
      { nom: "Sauce piquante", type: "simple", description: "Piment, ail, huile" }
    ],
    accompagnements: [
      { nom: "Anticuchos péruviens", recetteId: "anticuchos", type: "plat" },
      { nom: "Salade fraîche", recetteId: "salade_fraiche", type: "légume" },
      { nom: "Riz parfumé", recetteId: "riz_parfume", type: "féculent" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas parer correctement",
        consequence: "Parties dures et non comestibles",
        solution: "Retirer tout ce qui n'est pas muscle rouge"
      },
      {
        erreur: "Cuire entre-deux (ni rapide, ni long)",
        consequence: "Viande dure",
        solution: "Saisir vif ou braiser longuement"
      }
    ],
    leSaviezVous: "Au Pérou, le cœur de bœuf grillé en brochettes (anticuchos) est un plat national hérité des Incas ! C'est l'un des morceaux les plus riches en fer et en protéines. Un cœur de bœuf pèse environ 2kg."
  },

  // === 15: RIS DE BŒUF ===
  "Ris de bœuf": {
    anatomie: {
      localisation: "Gorge (thymus)",
      origine: "Glande thymus",
      muscles: ["N/A - Glande"],
      categorie: "Abat noble de première catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger plusieurs heures dans l'eau froide",
      "Blanchir puis retirer les membranes",
      "Presser entre deux plaques pour uniformiser",
      "Fariner légèrement avant cuisson",
      "Saisir au beurre moussant",
      "Servir croustillant dehors, moelleux dedans"
    ],
    caracteristiques: {
      texture: "Crémeux, fondant",
      gout: "Délicat, fin, subtil",
      gras: "Riche",
      fibres: "N/A - Texture granuleuse",
      couleur: "Blanc-rosé",
      tenue: "Fragile"
    },
    sauces: [
      { nom: "Sauce aux morilles", type: "gastronomique", description: "Morilles, crème, vin jaune" },
      { nom: "Jus de veau", type: "classique", description: "Fond de veau corsé" },
      { nom: "Sauce au citron", type: "légère", description: "Citron, beurre, persil" }
    ],
    accompagnements: [
      { nom: "Risotto aux herbes", recetteId: "risotto_herbes", type: "féculent" },
      { nom: "Épinards en branches", recetteId: "epinards_branches", type: "légume" },
      { nom: "Petits pois à la française", recetteId: "petits_pois_francaise", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Sauter l'étape de dégorgeage",
        consequence: "Goût fort, couleur peu appétissante",
        solution: "Plusieurs heures dans l'eau froide"
      },
      {
        erreur: "Ne pas presser",
        consequence: "Forme irrégulière, cuisson inégale",
        solution: "Presser pour uniformiser l'épaisseur"
      },
      {
        erreur: "Cuisson insuffisante",
        consequence: "Texture molle et désagréable",
        solution: "Bien dorer pour le croustillant"
      }
    ],
    leSaviezVous: "Le ris est la glande thymus, active seulement chez les jeunes animaux. Celui de bœuf est plus rare que celui de veau et réservé aux connaisseurs. C'est l'un des abats les plus chers et les plus recherchés en gastronomie !"
  },

  // === 16: CERVELLE ===
  "Cervelle": {
    anatomie: {
      localisation: "Boîte crânienne",
      origine: "Encéphale",
      muscles: ["N/A - Organe nerveux"],
      categorie: "Abat de deuxième catégorie"
    },
    techniqueDuChef: [
      "Faire dégorger longuement (éliminer le sang)",
      "Retirer délicatement les membranes",
      "Pocher dans un court-bouillon vinaigré",
      "Égoutter et sécher",
      "Paner et frire ou servir en beurre noir",
      "Manipuler avec délicatesse (fragile)"
    ],
    caracteristiques: {
      texture: "Très crémeuse, fondante",
      gout: "Délicat, subtil",
      gras: "Très riche en lipides",
      fibres: "N/A - Texture unique",
      couleur: "Gris-rosé",
      tenue: "Très fragile"
    },
    sauces: [
      { nom: "Beurre noir", type: "classique", description: "Beurre noisette, câpres, vinaigre" },
      { nom: "Sauce ravigote", type: "classique", description: "Herbes, câpres, échalotes" },
      { nom: "Sauce gribiche", type: "classique", description: "Œuf dur, herbes, moutarde" }
    ],
    accompagnements: [
      { nom: "Salade de mâche", recetteId: "salade_mache", type: "légume" },
      { nom: "Pommes vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Épinards au beurre", recetteId: "epinards_beurre", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Ne pas dégorger",
        consequence: "Sang résiduel, goût fort",
        solution: "Plusieurs heures dans l'eau froide"
      },
      {
        erreur: "Manipuler brusquement",
        consequence: "Se défait en morceaux",
        solution: "Gestes délicats, égouttoir large"
      },
      {
        erreur: "Trop cuire",
        consequence: "Texture granuleuse",
        solution: "Juste pochée et dorée"
      }
    ],
    leSaviezVous: "La cervelle de bœuf était très prisée jusqu'à la crise de la vache folle. Elle est aujourd'hui moins consommée mais reste un mets délicat. Très riche en cholestérol et en phospholipides, elle était autrefois recommandée pour 'nourrir le cerveau' !"
  },

  // === 17: TRIPES (GRAS-DOUBLE, BONNET) ===
  "Tripes (gras-double, bonnet)": {
    anatomie: {
      localisation: "Estomacs (rumen, réseau)",
      origine: "Parois des estomacs",
      muscles: ["N/A - Parois stomacales"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Acheter précuites ou prévoir 6-8h de cuisson",
      "Bien nettoyer et blanchir",
      "Couper en lanières ou carrés",
      "Cuisson très longue dans un bouillon aromatique",
      "Les saveurs se développent avec le temps",
      "Excellent réchauffé"
    ],
    caracteristiques: {
      texture: "Épaisse, moelleuse après cuisson",
      gout: "Prononcé, rustique",
      gras: "Modéré",
      fibres: "Structure en nid d'abeille (bonnet)",
      couleur: "Blanc-beige",
      tenue: "Fondante après cuisson longue"
    },
    sauces: [
      { nom: "Sauce tomate (Caen)", type: "normand", description: "Cidre, carottes, tomates" },
      { nom: "Sauce piquante", type: "espagnol", description: "Piment, paprika, tomates" },
      { nom: "Sauce lyonnaise", type: "lyonnais", description: "Oignons, vinaigre, vin blanc" }
    ],
    accompagnements: [
      { nom: "Pommes de terre vapeur", recetteId: "pommes_vapeur", type: "féculent" },
      { nom: "Pain de campagne", recetteId: "pain_campagne", type: "pain" },
      { nom: "Salade verte", recetteId: "salade_verte", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson insuffisante",
        consequence: "Texture caoutchouteuse",
        solution: "6-8h minimum ou acheter précuites"
      },
      {
        erreur: "Ne pas parfumer le bouillon",
        consequence: "Goût fade",
        solution: "Aromates généreux, vin, légumes"
      },
      {
        erreur: "Servir sans sauce",
        consequence: "Plat sec et peu savoureux",
        solution: "Toujours avec la sauce de cuisson"
      }
    ],
    leSaviezVous: "Les tripes à la mode de Caen sont une spécialité normande qui cuit 12h minimum ! Le bœuf a 4 estomacs : la panse (gras-double), le bonnet (en nid d'abeille), le feuillet et la caillette. C'est l'un des plats les plus anciens, mentionné dès le XIVe siècle."
  },

  // === 18: FEUILLET ===
  "Feuillet": {
    anatomie: {
      localisation: "Troisième estomac (omasum)",
      origine: "Paroi stomacale feuilletée",
      muscles: ["N/A - Paroi stomacale"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Structure en feuillets caractéristique",
      "Nettoyer soigneusement",
      "Blanchir avant utilisation",
      "Intégrer aux tripes ou préparer seul",
      "Cuisson longue nécessaire",
      "Texture plus fine que le gras-double"
    ],
    caracteristiques: {
      texture: "Feuilletée, délicate",
      gout: "Plus fin que les autres tripes",
      gras: "Maigre",
      fibres: "Structure en feuillets",
      couleur: "Gris-beige",
      tenue: "Fondante après cuisson"
    },
    sauces: [
      { nom: "Sauce poulette", type: "classique", description: "Champignons, crème, citron" },
      { nom: "Sauce au vin blanc", type: "classique", description: "Vin blanc, échalotes" },
      { nom: "Bouillon de cuisson", type: "simple", description: "Aromatisé et réduit" }
    ],
    accompagnements: [
      { nom: "Pommes persillées", recetteId: "pommes_persillees", type: "féculent" },
      { nom: "Pain grillé", recetteId: "pain_grille", type: "pain" },
      { nom: "Salade d'herbes", recetteId: "salade_herbes", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuisson rapide",
        consequence: "Texture coriace",
        solution: "Cuisson longue comme les tripes"
      },
      {
        erreur: "Négliger le nettoyage",
        consequence: "Résidus désagréables",
        solution: "Rincer et frotter soigneusement"
      }
    ],
    leSaviezVous: "Le feuillet s'appelle ainsi car il ressemble aux pages d'un livre ! C'est le troisième des quatre estomacs du bœuf. En Italie, il entre dans la composition du lampredotto florentin, un street food traditionnel."
  },

  // === 19: CAILLETTE ===
  "Caillette": {
    anatomie: {
      localisation: "Quatrième estomac (abomasum)",
      origine: "Estomac glandulaire",
      muscles: ["N/A - Paroi glandulaire"],
      categorie: "Abat de troisième catégorie"
    },
    techniqueDuChef: [
      "Seul estomac à fonction digestive",
      "Très fin et délicat à préparer",
      "Nettoyer avec soin",
      "Intégrer aux préparations de tripes",
      "Cuisson douce et longue",
      "Rare et peu commercialisé seul"
    ],
    caracteristiques: {
      texture: "Fine, délicate",
      gout: "Le plus fin des 4 estomacs",
      gras: "Maigre",
      fibres: "Texture lisse",
      couleur: "Rosé-beige",
      tenue: "Fragile"
    },
    sauces: [
      { nom: "Sauce aux herbes", type: "simple", description: "Herbes fraîches, beurre" },
      { nom: "Bouillon aromatique", type: "simple", description: "Légumes, herbes" },
      { nom: "Vinaigrette tiède", type: "simple", description: "Huile, vinaigre, échalotes" }
    ],
    accompagnements: [
      { nom: "Légumes verts", recetteId: "legumes_verts", type: "légume" },
      { nom: "Riz nature", recetteId: "riz_nature", type: "féculent" },
      { nom: "Salade composée", recetteId: "salade_composee", type: "légume" }
    ],
    erreursAEviter: [
      {
        erreur: "Cuire trop fort",
        consequence: "Se contracte et durcit",
        solution: "Feu doux, patience"
      },
      {
        erreur: "Ne pas nettoyer suffisamment",
        consequence: "Arrière-goût désagréable",
        solution: "Rinçages multiples"
      }
    ],
    leSaviezVous: "La caillette (ou abomasum) est le seul vrai estomac du bœuf au sens digestif - les trois autres sont des 'pré-estomacs'. Elle contient la présure, utilisée traditionnellement pour faire cailler le lait dans la fabrication du fromage !"
  }
};

// Export
module.exports = {
  boeufBoucherEnriched
};
