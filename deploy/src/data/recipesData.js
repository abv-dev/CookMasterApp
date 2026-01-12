// Cookmaster - Données des recettes
// Recettes classiques pour chaque type de viande

export const recipesData = {
  // ==================== BOEUF ====================
  boeuf: {
    entrecote_sauce_poivre: {
      id: 'entrecote_sauce_poivre',
      name: 'Entrecôte sauce au poivre',
      name_en: 'Ribeye Steak with Pepper Sauce',
      cutId: 'entrecote',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'L\'entrecôte classique des brasseries françaises, avec sa sauce au poivre crémée.',
      description_en: 'The classic ribeye steak from French brasseries, with its creamy pepper sauce.',
      ingredients: [
        { name: 'Entrecôte', quantity: '2', unit: 'pièces', note: '250-300g chacune' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces', note: 'finement émincées' },
        { name: 'Cognac', quantity: '4', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Poivre vert', quantity: '2', unit: 'c. à soupe', note: 'en saumure, égoutté' },
        { name: 'Poivre noir', quantity: '1', unit: 'c. à café', note: 'concassé' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Fond de veau', quantity: '5', unit: 'cl', note: 'optionnel' }
      ],
      ingredients_en: [
        { name: 'Ribeye steak', quantity: '2', unit: 'pieces', note: '250-300g each' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Shallots', quantity: '2', unit: 'pieces', note: 'finely sliced' },
        { name: 'Cognac', quantity: '4', unit: 'cl' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'Green peppercorns', quantity: '2', unit: 'tbsp', note: 'in brine, drained' },
        { name: 'Black pepper', quantity: '1', unit: 'tsp', note: 'crushed' },
        { name: 'Salt', quantity: '', unit: '', note: 'to taste' },
        { name: 'Veal stock', quantity: '5', unit: 'cl', note: 'optional' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation de la viande',
          description: 'Sortir les entrecôtes du réfrigérateur 30 minutes avant cuisson. Sécher avec du papier absorbant.',
          tip: 'La viande à température ambiante cuit plus uniformément.'
        },
        {
          step: 2,
          title: 'Saisir la viande',
          description: 'Chauffer une poêle à feu vif avec l\'huile. Saler et poivrer les entrecôtes. Saisir 2-3 min par côté selon cuisson désirée.',
          tip: 'Ne retournez qu\'une seule fois pour une belle croûte.'
        },
        {
          step: 3,
          title: 'Repos',
          description: 'Retirer les entrecôtes et les laisser reposer sur une assiette chaude, couvertes de papier alu.',
          tip: 'Le repos permet aux jus de se redistribuer.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Dans la même poêle, faire revenir les échalotes dans 20g de beurre 1-2 min. Déglacer au cognac (attention aux flammes).',
          tip: 'Grattez bien les sucs de cuisson.'
        },
        {
          step: 5,
          title: 'Finir la sauce',
          description: 'Ajouter la crème, le poivre vert et le fond de veau. Laisser réduire 3-4 min. Incorporer le reste du beurre hors du feu.',
          tip: 'Le beurre doit être ajouté à feu doux pour ne pas se séparer.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Napper les entrecôtes de sauce. Servir immédiatement avec des frites ou un gratin.',
          tip: 'Récupérez le jus de repos et ajoutez-le à la sauce.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the meat',
          description: 'Remove the ribeye steaks from the refrigerator 30 minutes before cooking. Pat dry with paper towels.',
          tip: 'Room temperature meat cooks more evenly.'
        },
        {
          step: 2,
          title: 'Sear the meat',
          description: 'Heat a pan over high heat with oil. Season the steaks with salt and pepper. Sear 2-3 min per side depending on desired doneness.',
          tip: 'Only flip once for a beautiful crust.'
        },
        {
          step: 3,
          title: 'Rest',
          description: 'Remove the steaks and let rest on a warm plate, covered with foil.',
          tip: 'Resting allows the juices to redistribute.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'In the same pan, saute the shallots in 20g butter for 1-2 min. Deglaze with cognac (watch out for flames).',
          tip: 'Scrape up the pan drippings well.'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Add the cream, green peppercorns and veal stock. Let reduce 3-4 min. Incorporate the remaining butter off the heat.',
          tip: 'The butter should be added over low heat to prevent separation.'
        },
        {
          step: 6,
          title: 'Serve',
          description: 'Top the steaks with sauce. Serve immediately with fries or a gratin.',
          tip: 'Collect the resting juices and add them to the sauce.'
        }
      ],
      chefTips: [
        'Pour un steak saignant parfait : température à cœur de 52°C',
        'Le cognac peut être remplacé par du whisky ou du brandy',
        'Pour une sauce plus légère, utilisez du fromage frais à la place de la crème'
      ],
      chefTips_en: [
        'For a perfect rare steak: core temperature of 52C (125F)',
        'Cognac can be replaced with whisky or brandy',
        'For a lighter sauce, use cream cheese instead of heavy cream'
      ],
      nutritionPer100g: {
        calories: 280,
        proteins: 26,
        carbs: 2,
        fat: 18
      }
    },

    boeuf_bourguignon: {
      id: 'boeuf_bourguignon',
      name: 'Bœuf Bourguignon',
      name_en: 'Boeuf Bourguignon',
      cutId: 'bourguignon',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le grand classique de la cuisine française, un mijoté fondant au vin rouge de Bourgogne.',
      description_en: 'The great classic of French cuisine, a melt-in-your-mouth stew with Burgundy red wine.',
      ingredients: [
        { name: 'Bœuf à braiser', quantity: '1.2', unit: 'kg', note: 'macreuse, gîte ou paleron' },
        { name: 'Vin rouge de Bourgogne', quantity: '75', unit: 'cl' },
        { name: 'Lardons fumés', quantity: '150', unit: 'g' },
        { name: 'Champignons de Paris', quantity: '250', unit: 'g' },
        { name: 'Petits oignons', quantity: '200', unit: 'g', note: 'grelots' },
        { name: 'Carottes', quantity: '3', unit: 'pièces', note: 'grosses' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'pour la marinade' },
        { name: 'Ail', quantity: '3', unit: 'gousses' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce', note: 'thym, laurier, persil' },
        { name: 'Farine', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fond de veau', quantity: '25', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Huile', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        {
          step: 1,
          title: 'Marinade',
          description: 'Couper la viande en cubes de 4-5 cm. Mariner avec le vin, l\'oignon émincé et le bouquet garni pendant 12-24h au frais.',
          tip: 'Plus la marinade est longue, plus la viande sera tendre et parfumée.'
        },
        {
          step: 2,
          title: 'Égoutter et sécher',
          description: 'Égoutter la viande et la sécher soigneusement. Réserver la marinade. Filtrer le vin.',
          tip: 'La viande doit être bien sèche pour bien saisir.'
        },
        {
          step: 3,
          title: 'Rissoler les lardons',
          description: 'Dans une cocotte, faire revenir les lardons dans le beurre. Réserver. Faire dorer les petits oignons. Réserver.',
          tip: 'Travaillez en plusieurs fois pour ne pas surcharger la cocotte.'
        },
        {
          step: 4,
          title: 'Saisir la viande',
          description: 'Dans la même cocotte, saisir les cubes de viande à feu vif pour les colorer sur toutes les faces. Saupoudrer de farine, mélanger.',
          tip: 'La farine va permettre de lier la sauce.'
        },
        {
          step: 5,
          title: 'Mouiller et mijoter',
          description: 'Verser le vin de la marinade et le fond de veau. Ajouter l\'ail, le bouquet garni et les carottes en rondelles. Porter à ébullition puis baisser le feu. Couvrir et cuire 2h30 à feu doux.',
          tip: 'La cuisson doit être frémissante, jamais bouillonnante.'
        },
        {
          step: 6,
          title: 'Finitions',
          description: 'Ajouter les lardons, petits oignons et champignons. Poursuivre la cuisson 30 min. Rectifier l\'assaisonnement.',
          tip: 'La viande doit s\'effilocher à la fourchette.'
        },
        {
          step: 7,
          title: 'Service',
          description: 'Servir bien chaud avec des pommes vapeur, des tagliatelles fraîches ou une purée maison.',
          tip: 'Le bourguignon est encore meilleur réchauffé le lendemain.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Marinade',
          description: 'Cut the meat into 4-5 cm cubes. Marinate with wine, sliced onion and bouquet garni for 12-24h in the refrigerator.',
          tip: 'The longer the marinade, the more tender and flavorful the meat.'
        },
        {
          step: 2,
          title: 'Drain and dry',
          description: 'Drain the meat and dry thoroughly. Reserve the marinade. Strain the wine.',
          tip: 'The meat must be very dry to sear properly.'
        },
        {
          step: 3,
          title: 'Brown the lardons',
          description: 'In a Dutch oven, brown the lardons in butter. Set aside. Brown the pearl onions. Set aside.',
          tip: 'Work in batches to avoid overcrowding the pot.'
        },
        {
          step: 4,
          title: 'Sear the meat',
          description: 'In the same pot, sear the meat cubes over high heat to brown on all sides. Sprinkle with flour, stir.',
          tip: 'The flour will help thicken the sauce.'
        },
        {
          step: 5,
          title: 'Add liquid and simmer',
          description: 'Pour in the marinade wine and veal stock. Add garlic, bouquet garni and sliced carrots. Bring to a boil then reduce heat. Cover and cook 2h30 over low heat.',
          tip: 'The cooking should be simmering, never boiling.'
        },
        {
          step: 6,
          title: 'Finishing touches',
          description: 'Add lardons, pearl onions and mushrooms. Continue cooking 30 min. Adjust seasoning.',
          tip: 'The meat should fall apart with a fork.'
        },
        {
          step: 7,
          title: 'Serve',
          description: 'Serve hot with steamed potatoes, fresh tagliatelle or homemade mash.',
          tip: 'Bourguignon is even better reheated the next day.'
        }
      ],
      chefTips: [
        'Utilisez le même vin pour la marinade et pour boire à table',
        'Pour un plat plus riche, ajoutez des os à moelle en fin de cuisson',
        'La recette peut se préparer la veille et se réchauffer'
      ],
      chefTips_en: [
        'Use the same wine for the marinade and to drink at the table',
        'For a richer dish, add marrow bones at the end of cooking',
        'The recipe can be prepared the day before and reheated'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 20,
        carbs: 5,
        fat: 9
      }
    },

    tartare_classique: {
      id: 'tartare_classique',
      name: 'Tartare de bœuf classique',
      name_en: 'Classic Beef Tartare',
      cutId: 'tartare',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 0,
      restTime: 0,
      isCru: true,
      servings: 2,
      icon: '🥩',
      description: 'Le tartare à la française, assaisonné au couteau pour une texture parfaite.',
      description_en: 'The French-style tartare, hand-chopped for a perfect texture.',
      ingredients: [
        { name: 'Filet de bœuf', quantity: '300', unit: 'g', note: 'ultra-frais' },
        { name: 'Jaunes d\'œufs', quantity: '2', unit: 'pièces', note: 'très frais' },
        { name: 'Moutarde de Dijon', quantity: '1', unit: 'c. à café' },
        { name: 'Câpres', quantity: '2', unit: 'c. à soupe', note: 'égouttés' },
        { name: 'Cornichons', quantity: '4', unit: 'pièces', note: 'finement hachés' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'finement ciselée' },
        { name: 'Persil plat', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Tabasco', quantity: '3-4', unit: 'gouttes' },
        { name: 'Sauce Worcestershire', quantity: '1', unit: 'c. à café' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Beef tenderloin', quantity: '300', unit: 'g', note: 'ultra-fresh' },
        { name: 'Egg yolks', quantity: '2', unit: 'pieces', note: 'very fresh' },
        { name: 'Dijon mustard', quantity: '1', unit: 'tsp' },
        { name: 'Capers', quantity: '2', unit: 'tbsp', note: 'drained' },
        { name: 'Gherkins', quantity: '4', unit: 'pieces', note: 'finely chopped' },
        { name: 'Shallot', quantity: '1', unit: 'piece', note: 'finely minced' },
        { name: 'Flat-leaf parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Tabasco', quantity: '3-4', unit: 'drops' },
        { name: 'Worcestershire sauce', quantity: '1', unit: 'tsp' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la viande',
          description: 'Hacher le filet de bœuf au couteau en petits dés réguliers (5mm). Ne jamais utiliser de mixeur.',
          tip: 'Un couteau bien aiguisé est essentiel. Le hachoir donne une texture pâteuse.'
        },
        {
          step: 2,
          title: 'Préparer les condiments',
          description: 'Hacher finement les câpres, cornichons, échalote et persil. Réserver séparément.',
          tip: 'La finesse de la découpe est importante pour l\'harmonie du plat.'
        },
        {
          step: 3,
          title: 'Assaisonner',
          description: 'Dans un bol, mélanger la viande avec la moutarde, le Tabasco, la Worcestershire, l\'huile, sel et poivre.',
          tip: 'Assaisonnez au dernier moment pour garder la viande fraîche.'
        },
        {
          step: 4,
          title: 'Incorporer les condiments',
          description: 'Ajouter les câpres, cornichons, échalote et la moitié du persil. Mélanger délicatement.',
          tip: 'Goûtez et ajustez l\'assaisonnement selon vos goûts.'
        },
        {
          step: 5,
          title: 'Dresser',
          description: 'Former le tartare à l\'aide d\'un cercle. Créer un puits au centre pour le jaune d\'œuf. Parsemer du reste de persil.',
          tip: 'Servez avec des frites croustillantes et une salade.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the meat',
          description: 'Hand-chop the beef tenderloin into small regular dice (5mm). Never use a food processor.',
          tip: 'A sharp knife is essential. A grinder gives a pasty texture.'
        },
        {
          step: 2,
          title: 'Prepare the condiments',
          description: 'Finely chop the capers, gherkins, shallot and parsley. Set aside separately.',
          tip: 'The fineness of the cut is important for the harmony of the dish.'
        },
        {
          step: 3,
          title: 'Season',
          description: 'In a bowl, mix meat with mustard, Tabasco, Worcestershire, oil, salt and pepper.',
          tip: 'Season at the last moment to keep the meat fresh.'
        },
        {
          step: 4,
          title: 'Add the condiments',
          description: 'Add capers, gherkins, shallot and half the parsley. Mix gently.',
          tip: 'Taste and adjust seasoning to your preference.'
        },
        {
          step: 5,
          title: 'Plate',
          description: 'Shape the tartare using a ring mold. Create a well in the center for the egg yolk. Sprinkle with remaining parsley.',
          tip: 'Serve with crispy fries and a salad.'
        }
      ],
      chefTips: [
        'La viande doit être achetée le jour même chez un boucher de confiance',
        'Gardez tous les ingrédients au frais jusqu\'au dernier moment',
        'Proposez des toasts grillés chauds pour accompagner'
      ],
      chefTips_en: [
        'The meat should be bought same day from a trusted butcher',
        'Keep all ingredients refrigerated until the last moment',
        'Offer warm toasted bread as an accompaniment'
      ],
      nutritionPer100g: {
        calories: 180,
        proteins: 23,
        carbs: 1,
        fat: 10
      }
    },

    bavette_echalotes: {
      id: 'bavette_echalotes',
      name: 'Bavette à l\'échalote',
      name_en: 'Flank Steak with Shallots',
      cutId: 'bavette',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      restTime: 3,
      servings: 2,
      icon: '🥩',
      description: 'La classique bavette des bistrots parisiens avec ses échalotes fondantes.',
      description_en: 'The classic Parisian bistro flank steak with melting shallots.',
      ingredients: [
        { name: 'Bavette d\'aloyau', quantity: '400', unit: 'g' },
        { name: 'Échalotes', quantity: '6', unit: 'pièces', note: 'finement émincées' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Vin rouge', quantity: '10', unit: 'cl' },
        { name: 'Vinaigre de vin', quantity: '2', unit: 'c. à soupe' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Flank steak', quantity: '400', unit: 'g' },
        { name: 'Shallots', quantity: '6', unit: 'pieces', note: 'finely sliced' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Red wine', quantity: '10', unit: 'cl' },
        { name: 'Wine vinegar', quantity: '2', unit: 'tbsp' },
        { name: 'Parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les échalotes',
          description: 'Émincer finement les échalotes. Les faire fondre dans 30g de beurre à feu doux 10 min jusqu\'à coloration.',
          tip: 'Les échalotes doivent être confites, pas croustillantes.'
        },
        {
          step: 2,
          title: 'Déglacer',
          description: 'Ajouter le vinaigre, puis le vin rouge. Laisser réduire 3 min. Réserver au chaud.',
          tip: 'Le vinaigre apporte l\'acidité caractéristique.'
        },
        {
          step: 3,
          title: 'Cuire la bavette',
          description: 'Dans une poêle très chaude avec le reste du beurre, saisir la bavette 2-3 min par côté (saignant).',
          tip: 'La bavette se mange saignante, sinon elle devient dure.'
        },
        {
          step: 4,
          title: 'Repos et service',
          description: 'Laisser reposer 3 min. Trancher contre les fibres. Napper d\'échalotes et parsemer de persil.',
          tip: 'Trancher dans le sens contraire aux fibres est crucial.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the shallots',
          description: 'Finely slice the shallots. Sweat in 30g butter over low heat 10 min until golden.',
          tip: 'Shallots should be caramelized, not crispy.'
        },
        {
          step: 2,
          title: 'Deglaze',
          description: 'Add vinegar, then red wine. Let reduce 3 min. Keep warm.',
          tip: 'The vinegar brings the characteristic acidity.'
        },
        {
          step: 3,
          title: 'Cook the steak',
          description: 'In a very hot pan with remaining butter, sear steak 2-3 min per side (rare).',
          tip: 'Flank steak should be eaten rare, otherwise it becomes tough.'
        },
        {
          step: 4,
          title: 'Rest and serve',
          description: 'Let rest 3 min. Slice against the grain. Top with shallots and parsley.',
          tip: 'Slicing against the grain is crucial.'
        }
      ],
      chefTips: [
        'Choisir une bavette d\'aloyau plutôt que de flanchet',
        'Ne jamais dépasser la cuisson à point',
        'Servir avec des frites maison'
      ],
      chefTips_en: [
        'Choose sirloin flank rather than plate flank',
        'Never cook beyond medium',
        'Serve with homemade fries'
      ],
      nutritionPer100g: {
        calories: 220,
        proteins: 24,
        carbs: 3,
        fat: 12
      }
    },

    cote_boeuf_grillee: {
      id: 'cote_boeuf_grillee',
      name: 'Côte de bœuf grillée',
      name_en: 'Grilled Bone-in Ribeye',
      cutId: 'cote_de_boeuf',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 35,
      restTime: 15,
      servings: 4,
      icon: '🥩',
      description: 'La pièce à partager par excellence, saisie et rôtie à la perfection.',
      description_en: 'The ultimate sharing cut, seared and roasted to perfection.',
      ingredients: [
        { name: 'Côte de bœuf', quantity: '1.2', unit: 'kg', note: 'épaisse, maturée' },
        { name: 'Gros sel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Poivre noir', quantity: '1', unit: 'c. à soupe', note: 'concassé' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'écrasées' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'pour le service' }
      ],
      ingredients_en: [
        { name: 'Bone-in ribeye', quantity: '1.2', unit: 'kg', note: 'thick, aged' },
        { name: 'Coarse salt', quantity: '2', unit: 'tbsp' },
        { name: 'Black pepper', quantity: '1', unit: 'tbsp', note: 'crushed' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Fresh thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Garlic', quantity: '4', unit: 'cloves', note: 'crushed' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'for serving' }
      ],
      steps: [
        {
          step: 1,
          title: 'Tempérer',
          description: 'Sortir la côte 2h avant cuisson. Préchauffer le four à 200°C.',
          tip: 'Une viande froide ne cuit pas uniformément.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Dans une poêle en fonte très chaude, saisir la côte 3 min de chaque côté jusqu\'à belle coloration.',
          tip: 'La réaction de Maillard donne la croûte savoureuse.'
        },
        {
          step: 3,
          title: 'Rôtir',
          description: 'Transférer dans un plat avec le beurre, thym et ail. Enfourner 20-25 min pour saignant (52°C à cœur).',
          tip: 'Arrosez régulièrement avec le beurre fondu.'
        },
        {
          step: 4,
          title: 'Repos',
          description: 'Laisser reposer 15 min couvert d\'alu. La température monte encore de 3-4°C.',
          tip: 'Le repos est aussi important que la cuisson.'
        },
        {
          step: 5,
          title: 'Découper et servir',
          description: 'Détacher la viande de l\'os. Trancher. Parsemer de fleur de sel.',
          tip: 'Servez l\'os à part, c\'est le meilleur morceau pour certains !'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Temper',
          description: 'Remove rib 2h before cooking. Preheat oven to 200C (400F).',
          tip: 'Cold meat does not cook evenly.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'In a very hot cast iron pan, sear rib 3 min each side until nicely colored.',
          tip: 'The Maillard reaction creates the flavorful crust.'
        },
        {
          step: 3,
          title: 'Roast',
          description: 'Transfer to baking dish with butter, thyme and garlic. Roast 20-25 min for rare (52C/125F core).',
          tip: 'Baste regularly with melted butter.'
        },
        {
          step: 4,
          title: 'Rest',
          description: 'Let rest 15 min covered with foil. Temperature rises another 3-4C.',
          tip: 'Resting is as important as cooking.'
        },
        {
          step: 5,
          title: 'Carve and serve',
          description: 'Remove meat from bone. Slice. Sprinkle with fleur de sel.',
          tip: 'Serve bone separately, it is the best part for some!'
        }
      ],
      chefTips: [
        'Demandez une côte maturée 21 jours minimum',
        'L\'os protège la viande et apporte de la saveur',
        'Accompagnez de sauce béarnaise et de frites'
      ],
      chefTips_en: [
        'Ask for a rib aged at least 21 days',
        'The bone protects the meat and adds flavor',
        'Serve with bearnaise sauce and fries'
      ],
      nutritionPer100g: {
        calories: 250,
        proteins: 25,
        carbs: 0,
        fat: 16
      }
    },

    joue_boeuf_braisee: {
      id: 'joue_boeuf_braisee',
      name: 'Joue de bœuf braisée',
      name_en: 'Braised Beef Cheeks',
      cutId: 'joue',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 240,
      restTime: 0,
      servings: 4,
      icon: '🥩',
      description: 'Une joue fondante braisée longuement au vin rouge, le plat réconfort ultime.',
      description_en: 'Meltingly tender cheeks braised slowly in red wine, the ultimate comfort food.',
      ingredients: [
        { name: 'Joues de bœuf', quantity: '4', unit: 'pièces', note: 'parées' },
        { name: 'Vin rouge corsé', quantity: '75', unit: 'cl' },
        { name: 'Carottes', quantity: '3', unit: 'pièces' },
        { name: 'Oignons', quantity: '2', unit: 'pièces' },
        { name: 'Céleri', quantity: '2', unit: 'branches' },
        { name: 'Fond de veau', quantity: '50', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Beef cheeks', quantity: '4', unit: 'pieces', note: 'trimmed' },
        { name: 'Full-bodied red wine', quantity: '75', unit: 'cl' },
        { name: 'Carrots', quantity: '3', unit: 'pieces' },
        { name: 'Onions', quantity: '2', unit: 'pieces' },
        { name: 'Celery', quantity: '2', unit: 'stalks' },
        { name: 'Veal stock', quantity: '50', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir les joues',
          description: 'Sécher les joues. Les saisir dans le beurre chaud pour les colorer. Réserver.',
          tip: 'Une belle coloration = saveur.'
        },
        {
          step: 2,
          title: 'Faire revenir les légumes',
          description: 'Dans la même cocotte, faire revenir les légumes coupés grossièrement 5 min.',
          tip: 'Les légumes parfument le jus.'
        },
        {
          step: 3,
          title: 'Braiser',
          description: 'Remettre les joues, verser le vin et le fond. Ajouter le bouquet garni. Couvrir et enfourner 4h à 140°C.',
          tip: 'La cuisson lente transforme le collagène en gélatine.'
        },
        {
          step: 4,
          title: 'Finition',
          description: 'Retirer les joues. Passer et réduire la sauce si nécessaire. Napper les joues.',
          tip: 'La sauce doit napper la cuillère.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the cheeks',
          description: 'Pat cheeks dry. Sear in hot butter to brown. Set aside.',
          tip: 'Good browning = flavor.'
        },
        {
          step: 2,
          title: 'Saute the vegetables',
          description: 'In the same pot, saute roughly chopped vegetables for 5 min.',
          tip: 'The vegetables flavor the sauce.'
        },
        {
          step: 3,
          title: 'Braise',
          description: 'Return cheeks, pour in wine and stock. Add bouquet garni. Cover and bake 4h at 140C (285F).',
          tip: 'Slow cooking transforms collagen into gelatin.'
        },
        {
          step: 4,
          title: 'Finish',
          description: 'Remove cheeks. Strain and reduce sauce if needed. Coat cheeks.',
          tip: 'The sauce should coat a spoon.'
        }
      ],
      chefTips: [
        'Préparez la veille, c\'est encore meilleur réchauffé',
        'Servez avec une purée onctueuse ou de la polenta',
        'Le plat se congèle très bien'
      ],
      chefTips_en: [
        'Prepare the day before, even better reheated',
        'Serve with creamy mash or polenta',
        'The dish freezes very well'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 28,
        carbs: 4,
        fat: 8
      }
    },

    filet_boeuf_wellington: {
      id: 'filet_boeuf_wellington',
      name: 'Filet de bœuf en croûte',
      name_en: 'Beef Wellington',
      cutId: 'filet',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 35,
      restTime: 10,
      servings: 6,
      icon: '🥩',
      description: 'Le prestigieux bœuf Wellington, filet enrobé de duxelles et de pâte feuilletée.',
      description_en: 'The prestigious Beef Wellington, tenderloin wrapped in duxelles and puff pastry.',
      ingredients: [
        { name: 'Filet de bœuf', quantity: '800', unit: 'g', note: 'paré, en un morceau' },
        { name: 'Pâte feuilletée', quantity: '1', unit: 'rouleau' },
        { name: 'Champignons de Paris', quantity: '400', unit: 'g' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Foie gras', quantity: '100', unit: 'g', note: 'optionnel' },
        { name: 'Tranches de jambon cru', quantity: '6', unit: 'tranches' },
        { name: 'Jaune d\'œuf', quantity: '1', unit: 'pièce' },
        { name: 'Moutarde de Dijon', quantity: '2', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '1', unit: 'c. à café' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      ingredients_en: [
        { name: 'Beef tenderloin', quantity: '800', unit: 'g', note: 'trimmed, in one piece' },
        { name: 'Puff pastry', quantity: '1', unit: 'sheet' },
        { name: 'Button mushrooms', quantity: '400', unit: 'g' },
        { name: 'Shallots', quantity: '2', unit: 'pieces' },
        { name: 'Foie gras', quantity: '100', unit: 'g', note: 'optional' },
        { name: 'Prosciutto slices', quantity: '6', unit: 'slices' },
        { name: 'Egg yolk', quantity: '1', unit: 'piece' },
        { name: 'Dijon mustard', quantity: '2', unit: 'tbsp' },
        { name: 'Thyme', quantity: '1', unit: 'tsp' },
        { name: 'Butter', quantity: '30', unit: 'g' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir le filet',
          description: 'Saisir le filet de tous côtés à feu vif. Badigeonner de moutarde. Réfrigérer 20 min.',
          tip: 'Le filet doit être très froid pour que la pâte ne détrempe pas.'
        },
        {
          step: 2,
          title: 'Préparer la duxelles',
          description: 'Mixer les champignons. Les cuire avec échalotes dans le beurre jusqu\'à évaporation complète. Ajouter le thym.',
          tip: 'La duxelles doit être très sèche.'
        },
        {
          step: 3,
          title: 'Assembler',
          description: 'Sur film plastique, étaler le jambon, puis la duxelles (et le foie gras). Poser le filet, rouler serré. Réfrigérer 30 min.',
          tip: 'Le roulage doit être très serré.'
        },
        {
          step: 4,
          title: 'Envelopper de pâte',
          description: 'Envelopper le rouleau dans la pâte feuilletée. Décorer, dorer au jaune d\'œuf.',
          tip: 'Percer des petits trous pour laisser s\'échapper la vapeur.'
        },
        {
          step: 5,
          title: 'Cuire',
          description: 'Enfourner 25-30 min à 200°C. Le cœur doit atteindre 52°C (saignant).',
          tip: 'Utilisez un thermomètre pour une cuisson parfaite.'
        },
        {
          step: 6,
          title: 'Repos',
          description: 'Laisser reposer 10 min avant de trancher.',
          tip: 'Des tranches épaisses de 3 cm sont idéales.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the tenderloin',
          description: 'Sear tenderloin on all sides over high heat. Brush with mustard. Refrigerate 20 min.',
          tip: 'Tenderloin must be very cold so pastry does not get soggy.'
        },
        {
          step: 2,
          title: 'Prepare the duxelles',
          description: 'Pulse mushrooms. Cook with shallots in butter until completely dry. Add thyme.',
          tip: 'The duxelles must be very dry.'
        },
        {
          step: 3,
          title: 'Assemble',
          description: 'On plastic wrap, spread prosciutto, then duxelles (and foie gras). Place tenderloin, roll tightly. Refrigerate 30 min.',
          tip: 'The roll must be very tight.'
        },
        {
          step: 4,
          title: 'Wrap in pastry',
          description: 'Wrap roll in puff pastry. Decorate, brush with egg yolk.',
          tip: 'Poke small holes to let steam escape.'
        },
        {
          step: 5,
          title: 'Bake',
          description: 'Bake 25-30 min at 200C (400F). Core should reach 52C (125F) for rare.',
          tip: 'Use a thermometer for perfect cooking.'
        },
        {
          step: 6,
          title: 'Rest',
          description: 'Let rest 10 min before slicing.',
          tip: 'Thick slices of 3 cm are ideal.'
        }
      ],
      chefTips: [
        'La réussite dépend de la température du filet (froid) et de la duxelles (sèche)',
        'Servir avec une sauce Périgueux aux truffes',
        'Préparez les étapes 1-3 la veille'
      ],
      chefTips_en: [
        'Success depends on tenderloin temperature (cold) and duxelles (dry)',
        'Serve with Perigueux sauce with truffles',
        'Prepare steps 1-3 the day before'
      ],
      nutritionPer100g: {
        calories: 320,
        proteins: 22,
        carbs: 18,
        fat: 18
      }
    },

    faux_filet_maitre_hotel: {
      id: 'faux_filet_maitre_hotel',
      name: 'Faux-filet beurre maître d\'hôtel',
      name_en: 'New York Strip with Maitre d\'Hotel Butter',
      cutId: 'faux_filet',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 12,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'Le faux-filet juteux accompagné d\'un beurre persillé fondant, un classique des grillades.',
      description_en: 'The juicy strip steak with melting parsley butter, a grilling classic.',
      ingredients: [
        { name: 'Faux-filet', quantity: '2', unit: 'pièces', note: '200-250g chacun, 2-3 cm d\'épaisseur' },
        { name: 'Beurre mou', quantity: '80', unit: 'g', note: 'pour le beurre maître d\'hôtel' },
        { name: 'Persil plat', quantity: '3', unit: 'c. à soupe', note: 'finement haché' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à café' },
        { name: 'Échalote', quantity: '1', unit: 'petite', note: 'finement ciselée' },
        { name: 'Huile végétale', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre du moulin', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'New York strip', quantity: '2', unit: 'pieces', note: '200-250g each, 2-3 cm thick' },
        { name: 'Soft butter', quantity: '80', unit: 'g', note: 'for maitre d hotel butter' },
        { name: 'Flat-leaf parsley', quantity: '3', unit: 'tbsp', note: 'finely chopped' },
        { name: 'Lemon juice', quantity: '1', unit: 'tsp' },
        { name: 'Shallot', quantity: '1', unit: 'small', note: 'finely minced' },
        { name: 'Vegetable oil', quantity: '2', unit: 'tbsp' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Freshly ground pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le beurre maître d\'hôtel',
          description: 'Mélanger le beurre mou avec le persil, l\'échalote et le jus de citron. Saler et poivrer. Former un boudin dans du film alimentaire. Réfrigérer 30 min minimum.',
          tip: 'Préparez ce beurre à l\'avance, il se conserve 1 semaine au frais ou 3 mois au congélateur.'
        },
        {
          step: 2,
          title: 'Tempérer la viande',
          description: 'Sortir les faux-filets 30-45 minutes avant cuisson. Sécher avec du papier absorbant.',
          tip: 'Une viande à température ambiante cuit de façon plus homogène.'
        },
        {
          step: 3,
          title: 'Préchauffer et huiler',
          description: 'Chauffer une poêle en fonte ou un gril à feu vif. Huiler légèrement la viande (pas la poêle).',
          tip: 'Huiler la viande évite les fumées excessives.'
        },
        {
          step: 4,
          title: 'Cuire le faux-filet',
          description: 'Saisir 3-4 min par côté pour une cuisson saignante. Assaisonner de fleur de sel après retournement.',
          tip: 'Ne retournez qu\'une seule fois. Pour à point : 4-5 min par côté.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 5 min. Déposer une généreuse rondelle de beurre maître d\'hôtel sur chaque faux-filet.',
          tip: 'Le beurre doit juste commencer à fondre, créant une sauce naturelle.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare maitre d hotel butter',
          description: 'Mix soft butter with parsley, shallot and lemon juice. Season. Form log in plastic wrap. Refrigerate 30 min minimum.',
          tip: 'Prepare in advance, keeps 1 week refrigerated or 3 months frozen.'
        },
        {
          step: 2,
          title: 'Temper the meat',
          description: 'Remove steaks 30-45 min before cooking. Pat dry with paper towels.',
          tip: 'Room temperature meat cooks more evenly.'
        },
        {
          step: 3,
          title: 'Preheat and oil',
          description: 'Heat cast iron pan or grill over high heat. Lightly oil the meat (not the pan).',
          tip: 'Oiling meat prevents excessive smoke.'
        },
        {
          step: 4,
          title: 'Cook the steak',
          description: 'Sear 3-4 min per side for rare. Season with fleur de sel after flipping.',
          tip: 'Only flip once. For medium: 4-5 min per side.'
        },
        {
          step: 5,
          title: 'Rest and serve',
          description: 'Let rest 5 min. Place generous round of maitre d hotel butter on each steak.',
          tip: 'Butter should just begin to melt, creating a natural sauce.'
        }
      ],
      chefTips: [
        'Le faux-filet est plus persillé que le filet, donc plus savoureux',
        'Demandez une pièce de 2-3 cm d\'épaisseur pour une cuisson optimale',
        'Servir avec des frites maison ou un gratin dauphinois'
      ],
      chefTips_en: [
        'Strip steak has more marbling than tenderloin, more flavorful',
        'Ask for 2-3 cm thick piece for optimal cooking',
        'Serve with homemade fries or gratin dauphinois'
      ],
      nutritionPer100g: {
        calories: 250,
        proteins: 26,
        carbs: 0,
        fat: 16
      }
    },

    onglet_echalotes_vin_rouge: {
      id: 'onglet_echalotes_vin_rouge',
      name: 'Onglet aux échalotes et vin rouge',
      name_en: 'Hanger Steak with Shallots and Red Wine',
      cutId: 'onglet',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'L\'onglet, morceau du boucher par excellence, avec une sauce aux échalotes fondantes au vin rouge.',
      description_en: 'The hanger steak, the butcher\'s favorite cut, with a melting shallot red wine sauce.',
      ingredients: [
        { name: 'Onglet de bœuf', quantity: '400', unit: 'g', note: 'débarrassé de la membrane centrale' },
        { name: 'Échalotes', quantity: '6', unit: 'pièces', note: 'finement émincées' },
        { name: 'Vin rouge corsé', quantity: '20', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl' },
        { name: 'Thym frais', quantity: '2', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Hanger steak', quantity: '400', unit: 'g', note: 'center membrane removed' },
        { name: 'Shallots', quantity: '6', unit: 'pieces', note: 'finely sliced' },
        { name: 'Full-bodied red wine', quantity: '20', unit: 'cl' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Veal stock', quantity: '10', unit: 'cl' },
        { name: 'Fresh thyme', quantity: '2', unit: 'sprigs' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer l\'onglet',
          description: 'Retirer la membrane centrale si nécessaire. Séparer en deux morceaux. Sortir 30 min avant cuisson.',
          tip: 'La membrane centrale est dure, demandez à votre boucher de la retirer.'
        },
        {
          step: 2,
          title: 'Confire les échalotes',
          description: 'Faire fondre 30g de beurre à feu doux. Ajouter les échalotes et le thym. Cuire 10 min en remuant.',
          tip: 'Les échalotes doivent être fondantes et légèrement dorées.'
        },
        {
          step: 3,
          title: 'Déglacer',
          description: 'Verser le vin rouge. Laisser réduire de moitié à feu moyen. Ajouter le fond de veau, poursuivre 3 min.',
          tip: 'La sauce doit napper légèrement une cuillère.'
        },
        {
          step: 4,
          title: 'Cuire l\'onglet',
          description: 'Dans une poêle très chaude avec le reste du beurre, saisir l\'onglet 2-3 min par côté (saignant obligatoire).',
          tip: 'L\'onglet se mange exclusivement saignant, sinon il devient caoutchouteux.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 5 min. Trancher perpendiculairement aux fibres. Napper de sauce aux échalotes.',
          tip: 'Récupérez le jus de repos pour l\'ajouter à la sauce.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the hanger steak',
          description: 'Remove center membrane if needed. Separate into two pieces. Remove from fridge 30 min before cooking.',
          tip: 'The center membrane is tough, ask your butcher to remove it.'
        },
        {
          step: 2,
          title: 'Confit the shallots',
          description: 'Melt 30g butter over low heat. Add shallots and thyme. Cook 10 min, stirring.',
          tip: 'Shallots should be melting and lightly golden.'
        },
        {
          step: 3,
          title: 'Deglaze',
          description: 'Pour in red wine. Reduce by half over medium heat. Add veal stock, continue 3 min.',
          tip: 'Sauce should lightly coat a spoon.'
        },
        {
          step: 4,
          title: 'Cook the hanger steak',
          description: 'In a very hot pan with remaining butter, sear steak 2-3 min per side (rare mandatory).',
          tip: 'Hanger steak must be eaten rare, otherwise becomes rubbery.'
        },
        {
          step: 5,
          title: 'Rest and serve',
          description: 'Let rest 5 min. Slice perpendicular to grain. Top with shallot sauce.',
          tip: 'Collect resting juices to add to sauce.'
        }
      ],
      chefTips: [
        'L\'onglet est aussi appelé "pièce du boucher" car il se le réservait traditionnellement',
        'Ne jamais cuire au-delà de saignant',
        'Parfait avec des frites ou une purée maison'
      ],
      chefTips_en: [
        'Hanger steak is also called butcher\'s cut because butchers kept it for themselves',
        'Never cook beyond rare',
        'Perfect with fries or homemade mash'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 28,
        carbs: 2,
        fat: 8
      }
    },

    hampe_grillee_herbes: {
      id: 'hampe_grillee_herbes',
      name: 'Hampe grillée aux herbes',
      name_en: 'Grilled Skirt Steak with Herbs',
      cutId: 'hampe',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 6,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'La hampe juteuse et goûteuse, simplement grillée et parfumée aux herbes fraîches.',
      description_en: 'The juicy and flavorful skirt steak, simply grilled and fragrant with fresh herbs.',
      ingredients: [
        { name: 'Hampe de bœuf', quantity: '400', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Thym frais', quantity: '1', unit: 'c. à soupe', note: 'effeuillé' },
        { name: 'Romarin', quantity: '1', unit: 'c. à café', note: 'haché' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'finement émincées' },
        { name: 'Persil plat', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre noir', quantity: '', unit: '', note: 'concassé' }
      ],
      ingredients_en: [
        { name: 'Skirt steak', quantity: '400', unit: 'g' },
        { name: 'Olive oil', quantity: '3', unit: 'tbsp' },
        { name: 'Fresh thyme', quantity: '1', unit: 'tbsp', note: 'leaves picked' },
        { name: 'Rosemary', quantity: '1', unit: 'tsp', note: 'chopped' },
        { name: 'Garlic', quantity: '2', unit: 'cloves', note: 'finely sliced' },
        { name: 'Flat-leaf parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Black pepper', quantity: '', unit: '', note: 'crushed' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la marinade',
          description: 'Mélanger l\'huile, le thym, le romarin et l\'ail. Badigeonner la hampe. Laisser mariner 30 min à température ambiante.',
          tip: 'Ne pas saler avant cuisson pour éviter que la viande ne rende son jus.'
        },
        {
          step: 2,
          title: 'Préchauffer',
          description: 'Chauffer un gril ou une poêle en fonte à feu très vif.',
          tip: 'La poêle doit être fumante pour une bonne saisie.'
        },
        {
          step: 3,
          title: 'Griller la hampe',
          description: 'Saisir 2-3 min par côté maximum pour une cuisson saignante. La hampe doit rester rosée au centre.',
          tip: 'Comme l\'onglet, la hampe devient dure si trop cuite.'
        },
        {
          step: 4,
          title: 'Repos',
          description: 'Retirer et laisser reposer 5 min sur une planche. Saler à la fleur de sel et poivrer.',
          tip: 'Le repos permet aux fibres de se détendre.'
        },
        {
          step: 5,
          title: 'Trancher et servir',
          description: 'Trancher en biais, contre les fibres. Parsemer de persil frais. Servir immédiatement.',
          tip: 'Des tranches fines perpendiculaires aux fibres garantissent la tendreté.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the marinade',
          description: 'Mix oil, thyme, rosemary and garlic. Brush the skirt steak. Marinate 30 min at room temperature.',
          tip: 'Don\'t salt before cooking to prevent meat from releasing its juices.'
        },
        {
          step: 2,
          title: 'Preheat',
          description: 'Heat grill or cast iron pan over very high heat.',
          tip: 'Pan should be smoking for a good sear.'
        },
        {
          step: 3,
          title: 'Grill the skirt steak',
          description: 'Sear 2-3 min per side maximum for rare. Skirt should remain pink in center.',
          tip: 'Like hanger steak, skirt becomes tough if overcooked.'
        },
        {
          step: 4,
          title: 'Rest',
          description: 'Remove and let rest 5 min on a board. Season with fleur de sel and pepper.',
          tip: 'Resting allows fibers to relax.'
        },
        {
          step: 5,
          title: 'Slice and serve',
          description: 'Slice on the bias, against the grain. Sprinkle with fresh parsley. Serve immediately.',
          tip: 'Thin slices perpendicular to grain ensure tenderness.'
        }
      ],
      chefTips: [
        'La hampe et l\'onglet sont des pièces jumelles, même cuisson requise',
        'Idéale pour les amateurs de viande goûteuse et persillée',
        'Accompagner d\'une sauce chimichurri pour une touche argentine'
      ],
      chefTips_en: [
        'Skirt and hanger steak are sister cuts, requiring same cooking',
        'Ideal for lovers of flavorful, well-marbled meat',
        'Serve with chimichurri sauce for an Argentine touch'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 27,
        carbs: 0,
        fat: 8
      }
    },

    rumsteck_poele_beurre_ail: {
      id: 'rumsteck_poele_beurre_ail',
      name: 'Rumsteck poêlé au beurre d\'ail',
      name_en: 'Pan-Seared Rump Steak with Garlic Butter',
      cutId: 'rumsteck',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'Le rumsteck tendre et savoureux, arrosé d\'un beurre à l\'ail mousseux.',
      description_en: 'The tender and flavorful rump steak, basted with foamy garlic butter.',
      ingredients: [
        { name: 'Rumsteck', quantity: '2', unit: 'pièces', note: '180-200g chacun' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'écrasées' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Huile végétale', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Rump steak', quantity: '2', unit: 'pieces', note: '180-200g each' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Garlic', quantity: '4', unit: 'cloves', note: 'crushed' },
        { name: 'Fresh thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Vegetable oil', quantity: '1', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Tempérer',
          description: 'Sortir les rumstecks 30 min avant cuisson. Sécher soigneusement.',
          tip: 'L\'humidité empêche la formation de la croûte.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Chauffer l\'huile à feu vif dans une poêle. Saler et poivrer la viande. Saisir 2 min par côté.',
          tip: 'Ne touchez pas la viande pendant la saisie pour une belle croûte.'
        },
        {
          step: 3,
          title: 'Arroser au beurre',
          description: 'Réduire à feu moyen. Ajouter le beurre, l\'ail et le thym. Incliner la poêle et arroser continuellement la viande pendant 2-3 min.',
          tip: 'Cette technique s\'appelle le "basting", elle parfume et attendrit.'
        },
        {
          step: 4,
          title: 'Repos',
          description: 'Retirer la viande. Laisser reposer 5 min. Filtrer le beurre et le réserver.',
          tip: 'Le beurre parfumé sera versé sur la viande au service.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Trancher si désiré. Napper du beurre à l\'ail filtré. Servir aussitôt.',
          tip: 'Le rumsteck est excellent saignant à à point.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Temper',
          description: 'Remove rump steaks 30 min before cooking. Pat dry thoroughly.',
          tip: 'Moisture prevents crust formation.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'Heat oil over high heat in pan. Season meat. Sear 2 min per side.',
          tip: 'Don\'t touch meat during searing for nice crust.'
        },
        {
          step: 3,
          title: 'Baste with butter',
          description: 'Reduce to medium heat. Add butter, garlic and thyme. Tilt pan and continuously baste meat 2-3 min.',
          tip: 'This technique is called basting, it flavors and tenderizes.'
        },
        {
          step: 4,
          title: 'Rest',
          description: 'Remove meat. Let rest 5 min. Strain butter and reserve.',
          tip: 'Flavored butter will be poured over meat when serving.'
        },
        {
          step: 5,
          title: 'Serve',
          description: 'Slice if desired. Drizzle with strained garlic butter. Serve immediately.',
          tip: 'Rump steak is excellent rare to medium.'
        }
      ],
      chefTips: [
        'Le rumsteck est un compromis entre tendreté et saveur',
        'Excellent rapport qualité-prix pour une viande de qualité',
        'Accompagner de haricots verts et pommes sautées'
      ],
      chefTips_en: [
        'Rump steak is a compromise between tenderness and flavor',
        'Excellent value for quality meat',
        'Serve with green beans and sauteed potatoes'
      ],
      nutritionPer100g: {
        calories: 200,
        proteins: 28,
        carbs: 0,
        fat: 10
      }
    },

    paleron_braise_carottes: {
      id: 'paleron_braise_carottes',
      name: 'Paleron braisé aux carottes',
      name_en: 'Braised Beef Chuck with Carrots',
      cutId: 'paleron',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 210,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le paleron fondant braisé longuement avec des carottes confites, un plat familial généreux.',
      description_en: 'Melt-in-your-mouth chuck roast braised slowly with candied carrots, a generous family dish.',
      ingredients: [
        { name: 'Paleron de bœuf', quantity: '1.5', unit: 'kg', note: 'en un seul morceau' },
        { name: 'Carottes', quantity: '800', unit: 'g', note: 'en tronçons' },
        { name: 'Oignons', quantity: '2', unit: 'gros' },
        { name: 'Vin blanc sec', quantity: '30', unit: 'cl' },
        { name: 'Fond de bœuf', quantity: '50', unit: 'cl' },
        { name: 'Concentré de tomate', quantity: '2', unit: 'c. à soupe' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Huile', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Beef chuck roast', quantity: '1.5', unit: 'kg', note: 'in one piece' },
        { name: 'Carrots', quantity: '800', unit: 'g', note: 'cut into chunks' },
        { name: 'Onions', quantity: '2', unit: 'large' },
        { name: 'Dry white wine', quantity: '30', unit: 'cl' },
        { name: 'Beef stock', quantity: '50', unit: 'cl' },
        { name: 'Tomato paste', quantity: '2', unit: 'tbsp' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Garlic', quantity: '4', unit: 'cloves' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Oil', quantity: '2', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir le paleron',
          description: 'Sécher la viande. La saisir dans l\'huile très chaude sur toutes les faces. Saler, poivrer. Réserver.',
          tip: 'Une belle coloration est essentielle pour la saveur finale.'
        },
        {
          step: 2,
          title: 'Faire revenir les légumes',
          description: 'Dans la même cocotte, ajouter le beurre. Faire revenir les oignons émincés et l\'ail 5 min.',
          tip: 'Grattez bien les sucs de la viande.'
        },
        {
          step: 3,
          title: 'Déglacer',
          description: 'Ajouter le concentré de tomate, mélanger. Verser le vin blanc, gratter le fond. Laisser réduire 2 min.',
          tip: 'L\'alcool doit s\'évaporer.'
        },
        {
          step: 4,
          title: 'Braiser',
          description: 'Remettre la viande, ajouter le fond, le bouquet garni et les carottes. Couvrir. Enfourner à 140°C pendant 3h30.',
          tip: 'Le liquide doit arriver à mi-hauteur de la viande.'
        },
        {
          step: 5,
          title: 'Vérifier la cuisson',
          description: 'La viande est prête quand elle s\'effiloche à la fourchette. Rectifier l\'assaisonnement.',
          tip: 'Si la sauce est trop liquide, la faire réduire à découvert.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Trancher le paleron. Disposer les carottes autour. Napper généreusement de sauce.',
          tip: 'Ce plat est encore meilleur réchauffé le lendemain.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the chuck',
          description: 'Pat meat dry. Sear in very hot oil on all sides. Season with salt and pepper. Set aside.',
          tip: 'Good browning is essential for the final flavor.'
        },
        {
          step: 2,
          title: 'Saute the vegetables',
          description: 'In the same pot, add butter. Saute sliced onions and garlic for 5 min.',
          tip: 'Scrape up the meat juices well.'
        },
        {
          step: 3,
          title: 'Deglaze',
          description: 'Add tomato paste, stir. Pour in white wine, scrape the bottom. Let reduce 2 min.',
          tip: 'The alcohol must evaporate.'
        },
        {
          step: 4,
          title: 'Braise',
          description: 'Return the meat, add stock, bouquet garni and carrots. Cover. Bake at 140C (285F) for 3h30.',
          tip: 'The liquid should come halfway up the meat.'
        },
        {
          step: 5,
          title: 'Check cooking',
          description: 'The meat is ready when it shreds with a fork. Adjust seasoning.',
          tip: 'If sauce is too thin, reduce uncovered.'
        },
        {
          step: 6,
          title: 'Serve',
          description: 'Slice the chuck. Arrange carrots around. Coat generously with sauce.',
          tip: 'This dish is even better reheated the next day.'
        }
      ],
      chefTips: [
        'Le paleron contient un nerf central qui se transforme en gélatine à la cuisson',
        'Préparez ce plat la veille pour des saveurs décuplées',
        'Servir avec une purée maison ou des pommes vapeur'
      ],
      chefTips_en: [
        'Chuck contains a central sinew that transforms into gelatin during cooking',
        'Prepare this dish the day before for enhanced flavors',
        'Serve with homemade mash or steamed potatoes'
      ],
      nutritionPer100g: {
        calories: 175,
        proteins: 22,
        carbs: 6,
        fat: 7
      }
    },

    queue_boeuf_pot_au_feu: {
      id: 'queue_boeuf_pot_au_feu',
      name: 'Queue de bœuf en pot-au-feu',
      name_en: 'Oxtail Pot-au-Feu',
      cutId: 'queue_de_boeuf',
      difficulty: 'facile',
      prepTime: 30,
      cookTime: 240,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'La queue de bœuf gélatineuse et fondante, cuite lentement avec ses légumes d\'hiver.',
      description_en: 'Gelatinous and tender oxtail, slowly cooked with winter vegetables.',
      ingredients: [
        { name: 'Queue de bœuf', quantity: '1.5', unit: 'kg', note: 'coupée en tronçons' },
        { name: 'Carottes', quantity: '6', unit: 'pièces' },
        { name: 'Poireaux', quantity: '4', unit: 'pièces' },
        { name: 'Navets', quantity: '4', unit: 'pièces' },
        { name: 'Céleri branche', quantity: '4', unit: 'branches' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'piqué de 2 clous de girofle' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Gros sel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Poivre en grains', quantity: '1', unit: 'c. à café' }
      ],
      ingredients_en: [
        { name: 'Oxtail', quantity: '1.5', unit: 'kg', note: 'cut into pieces' },
        { name: 'Carrots', quantity: '6', unit: 'pieces' },
        { name: 'Leeks', quantity: '4', unit: 'pieces' },
        { name: 'Turnips', quantity: '4', unit: 'pieces' },
        { name: 'Celery stalks', quantity: '4', unit: 'stalks' },
        { name: 'Onion', quantity: '1', unit: 'piece', note: 'studded with 2 cloves' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Coarse salt', quantity: '2', unit: 'tbsp' },
        { name: 'Peppercorns', quantity: '1', unit: 'tsp' }
      ],
      steps: [
        {
          step: 1,
          title: 'Blanchir la queue',
          description: 'Mettre les tronçons de queue dans une grande marmite d\'eau froide. Porter à ébullition 5 min. Écumer et jeter l\'eau.',
          tip: 'Le blanchiment élimine les impuretés et donne un bouillon clair.'
        },
        {
          step: 2,
          title: 'Démarrer la cuisson',
          description: 'Remettre la queue dans la marmite avec 4L d\'eau froide. Ajouter le sel, le poivre en grains, l\'oignon piqué et le bouquet garni.',
          tip: 'Démarrer à l\'eau froide permet une cuisson homogène.'
        },
        {
          step: 3,
          title: 'Cuire à frémissement',
          description: 'Porter à ébullition, écumer. Réduire le feu et cuire à petit frémissement pendant 3h.',
          tip: 'Ne jamais faire bouillir fort, la viande durcirait.'
        },
        {
          step: 4,
          title: 'Ajouter les légumes',
          description: 'Ajouter les carottes et navets. Après 30 min, ajouter les poireaux et le céleri. Poursuivre 30 min.',
          tip: 'Échelonner l\'ajout des légumes selon leur temps de cuisson.'
        },
        {
          step: 5,
          title: 'Vérifier et servir',
          description: 'La viande doit se détacher de l\'os. Servir dans des assiettes creuses avec du bouillon, accompagné de gros sel et moutarde.',
          tip: 'Le bouillon se déguste aussi en entrée avec des croûtons.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Blanch the oxtail',
          description: 'Place oxtail pieces in a large pot of cold water. Bring to boil for 5 min. Skim and discard water.',
          tip: 'Blanching removes impurities and gives a clear broth.'
        },
        {
          step: 2,
          title: 'Start cooking',
          description: 'Return oxtail to pot with 4L cold water. Add salt, peppercorns, studded onion and bouquet garni.',
          tip: 'Starting in cold water ensures even cooking.'
        },
        {
          step: 3,
          title: 'Simmer',
          description: 'Bring to boil, skim. Reduce heat and simmer gently for 3h.',
          tip: 'Never boil hard, the meat would toughen.'
        },
        {
          step: 4,
          title: 'Add vegetables',
          description: 'Add carrots and turnips. After 30 min, add leeks and celery. Continue 30 min.',
          tip: 'Stagger adding vegetables according to their cooking time.'
        },
        {
          step: 5,
          title: 'Check and serve',
          description: 'The meat should fall off the bone. Serve in shallow bowls with broth, accompanied by coarse salt and mustard.',
          tip: 'The broth can also be enjoyed as a starter with croutons.'
        }
      ],
      chefTips: [
        'La queue de bœuf est très riche en gélatine, le bouillon sera onctueux',
        'Gardez le bouillon pour des risottos ou des sauces',
        'Accompagner de cornichons, gros sel et moutarde forte'
      ],
      chefTips_en: [
        'Oxtail is very rich in gelatin, the broth will be silky',
        'Save the broth for risottos or sauces',
        'Serve with gherkins, coarse salt and strong mustard'
      ],
      nutritionPer100g: {
        calories: 220,
        proteins: 20,
        carbs: 4,
        fat: 14
      }
    },

    steak_hache_maison: {
      id: 'steak_hache_maison',
      name: 'Steak haché maison façon bistrot',
      name_en: 'Homemade Bistro-Style Burger Patty',
      cutId: 'steak_hache',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 8,
      restTime: 2,
      servings: 2,
      icon: '🍔',
      description: 'Le vrai steak haché du boucher, assaisonné et cuit à la perfection, bien rosé au centre.',
      description_en: 'The real butcher\'s ground beef patty, seasoned and cooked to perfection, pink in the center.',
      ingredients: [
        { name: 'Bœuf haché', quantity: '300', unit: 'g', note: 'fraîchement haché, 15% MG' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'finement ciselée' },
        { name: 'Persil', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Œuf', quantity: '1', unit: 'jaune', note: 'optionnel, pour lier' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Huile', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Ground beef', quantity: '300', unit: 'g', note: 'freshly ground, 15% fat' },
        { name: 'Shallot', quantity: '1', unit: 'piece', note: 'finely minced' },
        { name: 'Parsley', quantity: '1', unit: 'tbsp', note: 'chopped' },
        { name: 'Egg', quantity: '1', unit: 'yolk', note: 'optional, to bind' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Oil', quantity: '1', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la viande',
          description: 'Mélanger délicatement le bœuf haché avec l\'échalote, le persil et éventuellement le jaune d\'œuf. Assaisonner.',
          tip: 'Ne pas trop travailler la viande pour garder une texture aérée.'
        },
        {
          step: 2,
          title: 'Former les steaks',
          description: 'Former 2 steaks épais (3 cm environ) sans trop les compacter. Faire une légère empreinte au centre.',
          tip: 'L\'empreinte évite que le steak ne gonfle à la cuisson.'
        },
        {
          step: 3,
          title: 'Cuire',
          description: 'Chauffer l\'huile et le beurre à feu vif. Saisir 3-4 min par côté pour une cuisson rosée au centre.',
          tip: 'Pour un steak bien cuit (enfants), prolonger à 5 min par côté.'
        },
        {
          step: 4,
          title: 'Repos',
          description: 'Laisser reposer 2 min avant de servir. Le steak continue de cuire.',
          tip: 'Vérifier à cœur : 55°C saignant, 60°C rosé, 70°C à point.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Servir aussitôt avec les frites et une salade. Proposer ketchup, moutarde et sauce béarnaise.',
          tip: 'Le steak haché doit être consommé le jour de l\'achat.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the meat',
          description: 'Gently mix ground beef with shallot, parsley and optionally egg yolk. Season.',
          tip: 'Don\'t overwork the meat to keep an airy texture.'
        },
        {
          step: 2,
          title: 'Form the patties',
          description: 'Form 2 thick patties (about 3 cm) without compacting too much. Make a slight indent in the center.',
          tip: 'The indent prevents the patty from puffing up during cooking.'
        },
        {
          step: 3,
          title: 'Cook',
          description: 'Heat oil and butter over high heat. Sear 3-4 min per side for pink in the center.',
          tip: 'For well-done (children), extend to 5 min per side.'
        },
        {
          step: 4,
          title: 'Rest',
          description: 'Let rest 2 min before serving. The patty continues cooking.',
          tip: 'Check core: 55C (130F) rare, 60C (140F) pink, 70C (160F) medium.'
        },
        {
          step: 5,
          title: 'Serve',
          description: 'Serve immediately with fries and a salad. Offer ketchup, mustard and bearnaise sauce.',
          tip: 'Ground beef should be consumed the day of purchase.'
        }
      ],
      chefTips: [
        'Demandez du haché frais au boucher, pas du préemballé',
        'Un bon ratio de gras (15-20%) garantit le moelleux',
        'Pour un hamburger, ajouter du fromage fondu en fin de cuisson'
      ],
      chefTips_en: [
        'Ask for freshly ground beef from the butcher, not pre-packaged',
        'A good fat ratio (15-20%) ensures juiciness',
        'For a burger, add melted cheese at the end of cooking'
      ],
      nutritionPer100g: {
        calories: 235,
        proteins: 21,
        carbs: 1,
        fat: 16
      }
    }
  },

  // ==================== PORC ====================
  porc: {
    filet_mignon_moutarde: {
      id: 'filet_mignon_moutarde',
      name: 'Filet mignon de porc à la moutarde',
      name_en: 'Pork Tenderloin with Mustard',
      cutId: 'filet_mignon',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      restTime: 5,
      servings: 4,
      icon: '🐷',
      description: 'Un classique familial, le filet mignon enrobé de moutarde et cuit au four.',
      description_en: 'A family classic, pork tenderloin coated with mustard and oven-roasted.',
      ingredients: [
        { name: 'Filet mignon de porc', quantity: '500', unit: 'g' },
        { name: 'Moutarde à l\'ancienne', quantity: '3', unit: 'c. à soupe' },
        { name: 'Moutarde de Dijon', quantity: '1', unit: 'c. à soupe' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Vin blanc sec', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Thym frais', quantity: '3', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork tenderloin', quantity: '500', unit: 'g' },
        { name: 'Whole grain mustard', quantity: '3', unit: 'tbsp' },
        { name: 'Dijon mustard', quantity: '1', unit: 'tbsp' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'Dry white wine', quantity: '10', unit: 'cl' },
        { name: 'Shallots', quantity: '2', unit: 'pieces' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Fresh thyme', quantity: '3', unit: 'sprigs' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation',
          description: 'Préchauffer le four à 180°C. Sortir le filet mignon 20 min avant. Retirer la fine membrane si présente.',
          tip: 'La membrane se retire facilement avec un couteau et du papier absorbant.'
        },
        {
          step: 2,
          title: 'Badigeonner',
          description: 'Mélanger les deux moutardes. En réserver 2 c. à soupe pour la sauce. Badigeonner généreusement le filet.',
          tip: 'La moutarde forme une croûte protectrice.'
        },
        {
          step: 3,
          title: 'Saisir',
          description: 'Chauffer l\'huile et la moitié du beurre dans une poêle. Saisir le filet 2 min sur chaque face.',
          tip: 'La saisie caramélise la moutarde et donne de la couleur.'
        },
        {
          step: 4,
          title: 'Cuisson au four',
          description: 'Transférer dans un plat avec le thym. Enfourner 18-20 min jusqu\'à 65°C à cœur.',
          tip: 'Utilisez un thermomètre pour une cuisson parfaite.'
        },
        {
          step: 5,
          title: 'Préparer la sauce',
          description: 'Faire revenir les échalotes émincées dans la poêle. Déglacer au vin blanc. Ajouter la crème et la moutarde réservée. Réduire 5 min.',
          tip: 'Grattez bien les sucs pour parfumer la sauce.'
        },
        {
          step: 6,
          title: 'Finition et service',
          description: 'Laisser reposer le filet 5 min. Trancher en médaillons. Servir nappé de sauce.',
          tip: 'Accompagnez de pommes de terre rôties ou d\'une purée.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Preparation',
          description: 'Preheat the oven to 180°C (350°F). Take the tenderloin out 20 min before cooking. Remove the thin membrane if present.',
          tip: 'The membrane is easily removed with a knife and paper towel.'
        },
        {
          step: 2,
          title: 'Coat',
          description: 'Mix both mustards together. Set aside 2 tbsp for the sauce. Generously coat the tenderloin.',
          tip: 'The mustard forms a protective crust.'
        },
        {
          step: 3,
          title: 'Sear',
          description: 'Heat the oil and half the butter in a pan. Sear the tenderloin for 2 min on each side.',
          tip: 'Searing caramelizes the mustard and adds color.'
        },
        {
          step: 4,
          title: 'Oven roasting',
          description: 'Transfer to a baking dish with the thyme. Roast for 18-20 min until internal temperature reaches 65°C (150°F).',
          tip: 'Use a thermometer for perfect doneness.'
        },
        {
          step: 5,
          title: 'Make the sauce',
          description: 'Sauté the sliced shallots in the pan. Deglaze with white wine. Add the cream and reserved mustard. Reduce for 5 min.',
          tip: 'Scrape up the browned bits to flavor the sauce.'
        },
        {
          step: 6,
          title: 'Finish and serve',
          description: 'Let the tenderloin rest for 5 min. Slice into medallions. Serve drizzled with sauce.',
          tip: 'Serve with roasted potatoes or mashed potatoes.'
        }
      ],
      chefTips: [
        'Le filet est cuit à point quand il est rosé au centre (65°C)',
        'Pour une version plus festive, enveloppez de bacon avant cuisson',
        'La sauce peut être préparée pendant le repos de la viande'
      ],
      chefTips_en: [
        'The tenderloin is done when it is pink in the center (65°C/150°F)',
        'For a more festive version, wrap in bacon before cooking',
        'The sauce can be prepared while the meat is resting'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 27,
        carbs: 2,
        fat: 8
      }
    },

    travers_bbq: {
      id: 'travers_bbq',
      name: 'Travers de porc BBQ (ribs)',
      name_en: 'BBQ Pork Spare Ribs',
      cutId: 'travers',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 180,
      restTime: 10,
      servings: 4,
      icon: '🍖',
      description: 'Des ribs fondants et caramélisés façon américaine, cuits lentement au four.',
      description_en: 'Tender and caramelized American-style ribs, slow-cooked in the oven.',
      ingredients: [
        { name: 'Travers de porc', quantity: '1.5', unit: 'kg', note: '1 rack' },
        { name: 'Ketchup', quantity: '15', unit: 'cl' },
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sauce soja', quantity: '3', unit: 'c. à soupe' },
        { name: 'Vinaigre de cidre', quantity: '3', unit: 'c. à soupe' },
        { name: 'Paprika fumé', quantity: '1', unit: 'c. à soupe' },
        { name: 'Poudre d\'ail', quantity: '1', unit: 'c. à café' },
        { name: 'Poudre d\'oignon', quantity: '1', unit: 'c. à café' },
        { name: 'Cumin', quantity: '1', unit: 'c. à café' },
        { name: 'Cassonade', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork spare ribs', quantity: '1.5', unit: 'kg', note: '1 rack' },
        { name: 'Ketchup', quantity: '15', unit: 'cl' },
        { name: 'Honey', quantity: '4', unit: 'tbsp' },
        { name: 'Soy sauce', quantity: '3', unit: 'tbsp' },
        { name: 'Apple cider vinegar', quantity: '3', unit: 'tbsp' },
        { name: 'Smoked paprika', quantity: '1', unit: 'tbsp' },
        { name: 'Garlic powder', quantity: '1', unit: 'tsp' },
        { name: 'Onion powder', quantity: '1', unit: 'tsp' },
        { name: 'Cumin', quantity: '1', unit: 'tsp' },
        { name: 'Brown sugar', quantity: '3', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le rack',
          description: 'Retirer la membrane sur le dos des travers (glisser un couteau dessous et tirer avec du papier absorbant).',
          tip: 'Sans cette membrane, la viande sera plus tendre et s\'imprégnera mieux.'
        },
        {
          step: 2,
          title: 'Préparer le rub',
          description: 'Mélanger le paprika, ail, oignon, cumin, cassonade, sel et poivre. Frotter généreusement les travers.',
          tip: 'Idéalement, laissez mariner au frigo toute une nuit.'
        },
        {
          step: 3,
          title: 'Première cuisson',
          description: 'Préchauffer le four à 150°C. Envelopper les travers dans du papier alu. Cuire 2h.',
          tip: 'La cuisson lente attendrit la viande et fait fondre le collagène.'
        },
        {
          step: 4,
          title: 'Préparer la sauce BBQ',
          description: 'Mélanger le ketchup, miel, sauce soja et vinaigre. Chauffer légèrement pour homogénéiser.',
          tip: 'Ajustez le sucré et l\'acidité selon vos goûts.'
        },
        {
          step: 5,
          title: 'Glaçage',
          description: 'Retirer le papier alu. Monter le four à 200°C. Badigeonner de sauce, cuire 15 min. Répéter 2-3 fois.',
          tip: 'Les couches successives créent une croûte caramélisée.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer 10 min. Découper entre les os. Servir avec le reste de sauce à côté.',
          tip: 'Accompagnez de coleslaw et de maïs grillé.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the rack',
          description: 'Remove the membrane from the back of the ribs (slide a knife underneath and pull with paper towel).',
          tip: 'Without this membrane, the meat will be more tender and absorb flavors better.'
        },
        {
          step: 2,
          title: 'Prepare the rub',
          description: 'Mix paprika, garlic, onion, cumin, brown sugar, salt and pepper. Rub generously over the ribs.',
          tip: 'Ideally, let marinate in the fridge overnight.'
        },
        {
          step: 3,
          title: 'First cooking',
          description: 'Preheat oven to 150°C (300°F). Wrap the ribs in aluminum foil. Cook for 2 hours.',
          tip: 'Slow cooking tenderizes the meat and melts the collagen.'
        },
        {
          step: 4,
          title: 'Prepare the BBQ sauce',
          description: 'Mix ketchup, honey, soy sauce and vinegar. Heat slightly to combine.',
          tip: 'Adjust sweetness and acidity to your taste.'
        },
        {
          step: 5,
          title: 'Glazing',
          description: 'Remove the foil. Increase oven to 200°C (400°F). Brush with sauce, cook 15 min. Repeat 2-3 times.',
          tip: 'Multiple layers create a caramelized crust.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Let rest 10 min. Cut between the bones. Serve with remaining sauce on the side.',
          tip: 'Serve with coleslaw and grilled corn.'
        }
      ],
      chefTips: [
        'Le test de cuisson : la viande doit se détacher facilement de l\'os',
        'Pour un goût fumé plus prononcé, ajoutez du liquid smoke dans la sauce',
        'Vous pouvez finir sur un BBQ pour le goût grillé authentique'
      ],
      chefTips_en: [
        'Doneness test: the meat should pull away from the bone easily',
        'For a more pronounced smoky flavor, add liquid smoke to the sauce',
        'You can finish on a BBQ for authentic grilled flavor'
      ],
      nutritionPer100g: {
        calories: 295,
        proteins: 22,
        carbs: 12,
        fat: 18
      }
    },

    roti_porc_miel: {
      id: 'roti_porc_miel',
      name: 'Rôti de porc au miel et romarin',
      name_en: 'Honey and Rosemary Pork Roast',
      cutId: 'roti',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 90,
      restTime: 10,
      servings: 6,
      icon: '🐷',
      description: 'Un rôti de porc caramélisé au miel avec des notes de romarin, fondant et savoureux.',
      description_en: 'A honey-caramelized pork roast with rosemary notes, tender and flavorful.',
      ingredients: [
        { name: 'Rôti de porc', quantity: '1.2', unit: 'kg', note: 'échine ou filet' },
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Moutarde', quantity: '2', unit: 'c. à soupe' },
        { name: 'Romarin frais', quantity: '4', unit: 'branches' },
        { name: 'Ail', quantity: '6', unit: 'gousses' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork roast', quantity: '1.2', unit: 'kg', note: 'shoulder or tenderloin' },
        { name: 'Honey', quantity: '4', unit: 'tbsp' },
        { name: 'Mustard', quantity: '2', unit: 'tbsp' },
        { name: 'Fresh rosemary', quantity: '4', unit: 'sprigs' },
        { name: 'Garlic', quantity: '6', unit: 'cloves' },
        { name: 'White wine', quantity: '15', unit: 'cl' },
        { name: 'Olive oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation',
          description: 'Préchauffer le four à 180°C. Mélanger miel et moutarde. Piquer le rôti et insérer les gousses d\'ail.',
          tip: 'Les incisions permettent au miel de pénétrer.'
        },
        {
          step: 2,
          title: 'Badigeonner',
          description: 'Enduire généreusement le rôti du mélange miel-moutarde. Parsemer de romarin.',
          tip: 'Gardez un peu de mélange pour arroser en cours de cuisson.'
        },
        {
          step: 3,
          title: 'Cuisson',
          description: 'Placer dans un plat avec le vin blanc. Cuire 1h15-1h30 en arrosant régulièrement.',
          tip: 'Comptez 25 min par 500g pour une cuisson à point.'
        },
        {
          step: 4,
          title: 'Caramélisation',
          description: 'En fin de cuisson, monter à 200°C et badigeonner une dernière fois pour caraméliser.',
          tip: 'Surveillez pour éviter que le miel ne brûle.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 10 min. Trancher et servir avec le jus de cuisson réduit.',
          tip: 'Accompagnez de pommes de terre rôties.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Preparation',
          description: 'Preheat oven to 180°C (350°F). Mix honey and mustard. Pierce the roast and insert garlic cloves.',
          tip: 'The incisions allow the honey to penetrate.'
        },
        {
          step: 2,
          title: 'Coat',
          description: 'Generously coat the roast with the honey-mustard mixture. Sprinkle with rosemary.',
          tip: 'Keep some mixture aside for basting during cooking.'
        },
        {
          step: 3,
          title: 'Cooking',
          description: 'Place in a roasting pan with white wine. Cook for 1h15-1h30, basting regularly.',
          tip: 'Allow 25 min per 500g for medium doneness.'
        },
        {
          step: 4,
          title: 'Caramelization',
          description: 'Near the end of cooking, increase to 200°C (400°F) and brush one last time to caramelize.',
          tip: 'Watch carefully to prevent the honey from burning.'
        },
        {
          step: 5,
          title: 'Rest and serve',
          description: 'Let rest 10 min. Slice and serve with reduced cooking juices.',
          tip: 'Serve with roasted potatoes.'
        }
      ],
      chefTips: [
        'La température à cœur doit atteindre 65-68°C',
        'Le miel de châtaignier apporte une note plus complexe',
        'Ajoutez des pommes en quartiers 30 min avant la fin'
      ],
      chefTips_en: [
        'Internal temperature should reach 65-68°C (150-155°F)',
        'Chestnut honey adds a more complex flavor note',
        'Add apple quarters 30 min before the end'
      ],
      nutritionPer100g: {
        calories: 205,
        proteins: 26,
        carbs: 8,
        fat: 7
      }
    },

    cotes_porc_charcutiere: {
      id: 'cotes_porc_charcutiere',
      name: 'Côtes de porc charcutière',
      name_en: 'Pork Chops Charcutiere Style',
      cutId: 'cotes',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🐷',
      description: 'Les côtes de porc façon charcutière avec leur sauce aux cornichons, un classique bistrot.',
      description_en: 'Pork chops charcutiere style with gherkin sauce, a French bistro classic.',
      ingredients: [
        { name: 'Côtes de porc', quantity: '4', unit: 'pièces', note: 'épaisses' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Cornichons', quantity: '6', unit: 'pièces', note: 'émincés' },
        { name: 'Moutarde', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vin blanc sec', quantity: '15', unit: 'cl' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork chops', quantity: '4', unit: 'pieces', note: 'thick-cut' },
        { name: 'Shallots', quantity: '3', unit: 'pieces' },
        { name: 'Gherkins', quantity: '6', unit: 'pieces', note: 'sliced' },
        { name: 'Mustard', quantity: '2', unit: 'tbsp' },
        { name: 'Dry white wine', quantity: '15', unit: 'cl' },
        { name: 'Veal stock', quantity: '10', unit: 'cl' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir les côtes',
          description: 'Dans une poêle chaude avec un peu de beurre, saisir les côtes 5 min de chaque côté. Réserver au chaud.',
          tip: 'Les côtes doivent être dorées mais pas trop cuites.'
        },
        {
          step: 2,
          title: 'Faire revenir les échalotes',
          description: 'Dans la même poêle, faire revenir les échalotes émincées 2 min.',
          tip: 'Grattez les sucs de cuisson.'
        },
        {
          step: 3,
          title: 'Déglacer',
          description: 'Déglacer au vin blanc, laisser réduire de moitié. Ajouter le fond de veau.',
          tip: 'Le vin doit s\'évaporer presque complètement.'
        },
        {
          step: 4,
          title: 'Finir la sauce',
          description: 'Incorporer la moutarde et les cornichons. Monter au beurre froid en fouettant.',
          tip: 'La moutarde ne doit pas bouillir.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Napper les côtes de sauce, parsemer de persil. Servir avec une purée.',
          tip: 'Ajoutez le jus rendu par la viande à la sauce.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the chops',
          description: 'In a hot pan with a little butter, sear the chops 5 min on each side. Set aside and keep warm.',
          tip: 'The chops should be golden but not overcooked.'
        },
        {
          step: 2,
          title: 'Saute the shallots',
          description: 'In the same pan, saute the sliced shallots for 2 min.',
          tip: 'Scrape up the browned bits.'
        },
        {
          step: 3,
          title: 'Deglaze',
          description: 'Deglaze with white wine, reduce by half. Add the veal stock.',
          tip: 'The wine should evaporate almost completely.'
        },
        {
          step: 4,
          title: 'Finish the sauce',
          description: 'Incorporate the mustard and gherkins. Whisk in cold butter to finish.',
          tip: 'The mustard should not boil.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Spoon sauce over the chops, sprinkle with parsley. Serve with mashed potatoes.',
          tip: 'Add the meat juices to the sauce.'
        }
      ],
      chefTips: [
        'Température à cœur : 65°C pour une cuisson parfaite',
        'Les cornichons doivent être coupés en rondelles fines',
        'Vous pouvez ajouter des câpres pour plus d\'acidité'
      ],
      chefTips_en: [
        'Internal temperature: 65°C (150°F) for perfect doneness',
        'Gherkins should be cut into thin slices',
        'You can add capers for more acidity'
      ],
      nutritionPer100g: {
        calories: 230,
        proteins: 24,
        carbs: 3,
        fat: 14
      }
    },

    carre_porc_roti: {
      id: 'carre_porc_roti',
      name: 'Carré de porc rôti aux herbes',
      name_en: 'Herb-Crusted Roast Pork Rack',
      cutId: 'carre',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🍖',
      description: 'Le carré de porc rôti, croûte dorée aux herbes de Provence et chair fondante.',
      description_en: 'Roasted pork rack with a golden herbes de Provence crust and tender meat.',
      ingredients: [
        { name: 'Carré de porc', quantity: '1.5', unit: 'kg', note: '6-8 côtes, avec os' },
        { name: 'Herbes de Provence', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '6', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Moutarde', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork rack', quantity: '1.5', unit: 'kg', note: '6-8 ribs, bone-in' },
        { name: 'Herbes de Provence', quantity: '2', unit: 'tbsp' },
        { name: 'Garlic', quantity: '6', unit: 'cloves' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Honey', quantity: '2', unit: 'tbsp' },
        { name: 'Mustard', quantity: '2', unit: 'tbsp' },
        { name: 'White wine', quantity: '15', unit: 'cl' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la marinade',
          description: 'Mixer l\'ail avec l\'huile, les herbes, la moutarde et le miel. Badigeonner généreusement le carré.',
          tip: 'Préparez la veille pour des saveurs plus intenses.'
        },
        {
          step: 2,
          title: 'Tempérer',
          description: 'Sortir le carré 1h avant cuisson. Préchauffer le four à 220°C.',
          tip: 'La viande à température ambiante rôtit plus uniformément.'
        },
        {
          step: 3,
          title: 'Saisir au four',
          description: 'Enfourner 20 min à 220°C pour créer une belle croûte dorée.',
          tip: 'Le gras doit être côté haut.'
        },
        {
          step: 4,
          title: 'Baisser et cuire',
          description: 'Réduire à 160°C. Verser le vin blanc. Poursuivre 60-70 min en arrosant régulièrement.',
          tip: 'Température à cœur : 65-68°C pour un porc rosé.'
        },
        {
          step: 5,
          title: 'Repos',
          description: 'Couvrir d\'alu et laisser reposer 15 min. Récupérer le jus pour la sauce.',
          tip: 'Le repos est essentiel pour une viande juteuse.'
        },
        {
          step: 6,
          title: 'Découper et servir',
          description: 'Trancher entre les côtes. Napper de jus. Servir avec des pommes boulangères.',
          tip: 'Un couteau bien aiguisé facilite la découpe.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the marinade',
          description: 'Blend garlic with oil, herbs, mustard and honey. Generously coat the rack.',
          tip: 'Prepare the day before for more intense flavors.'
        },
        {
          step: 2,
          title: 'Temper',
          description: 'Take the rack out 1h before cooking. Preheat oven to 220°C (425°F).',
          tip: 'Room temperature meat roasts more evenly.'
        },
        {
          step: 3,
          title: 'Sear in the oven',
          description: 'Roast for 20 min at 220°C (425°F) to create a beautiful golden crust.',
          tip: 'The fat side should face up.'
        },
        {
          step: 4,
          title: 'Lower and cook',
          description: 'Reduce to 160°C (320°F). Pour in white wine. Continue for 60-70 min, basting regularly.',
          tip: 'Internal temperature: 65-68°C (150-155°F) for pink pork.'
        },
        {
          step: 5,
          title: 'Rest',
          description: 'Cover with foil and rest for 15 min. Collect the juices for the sauce.',
          tip: 'Resting is essential for juicy meat.'
        },
        {
          step: 6,
          title: 'Carve and serve',
          description: 'Slice between the ribs. Drizzle with juices. Serve with boulangere potatoes.',
          tip: 'A sharp knife makes carving easier.'
        }
      ],
      chefTips: [
        'Demandez au boucher de parer le carré et de dégager les os',
        'Le temps de cuisson varie selon le poids : 45 min/kg',
        'Pour une croûte croustillante, passez 5 min sous le gril en fin de cuisson'
      ],
      chefTips_en: [
        'Ask your butcher to trim the rack and french the bones',
        'Cooking time varies by weight: 45 min/kg',
        'For a crispy crust, broil for 5 min at the end of cooking'
      ],
      nutritionPer100g: {
        calories: 240,
        proteins: 25,
        carbs: 2,
        fat: 15
      }
    },

    echine_grillee_miel: {
      id: 'echine_grillee_miel',
      name: 'Échine de porc grillée miel-soja',
      name_en: 'Grilled Pork Shoulder with Honey-Soy Glaze',
      cutId: 'echine',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🍖',
      description: 'L\'échine persillée et savoureuse, grillée avec une laque sucrée-salée.',
      description_en: 'Marbled and flavorful pork shoulder, grilled with a sweet and savory glaze.',
      ingredients: [
        { name: 'Échine de porc', quantity: '800', unit: 'g', note: 'en tranches de 2 cm' },
        { name: 'Sauce soja', quantity: '4', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '3', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '2', unit: 'cm', note: 'frais, râpé' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'pressées' },
        { name: 'Huile de sésame', quantity: '1', unit: 'c. à soupe' },
        { name: 'Graines de sésame', quantity: '1', unit: 'c. à soupe' }
      ],
      ingredients_en: [
        { name: 'Pork shoulder steaks', quantity: '800', unit: 'g', note: '2 cm thick slices' },
        { name: 'Soy sauce', quantity: '4', unit: 'tbsp' },
        { name: 'Honey', quantity: '3', unit: 'tbsp' },
        { name: 'Ginger', quantity: '2', unit: 'cm', note: 'fresh, grated' },
        { name: 'Garlic', quantity: '2', unit: 'cloves', note: 'pressed' },
        { name: 'Sesame oil', quantity: '1', unit: 'tbsp' },
        { name: 'Sesame seeds', quantity: '1', unit: 'tbsp' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la marinade',
          description: 'Mélanger la sauce soja, le miel, le gingembre, l\'ail et l\'huile de sésame. Mariner la viande 2h minimum.',
          tip: 'Une nuit de marinade donne les meilleurs résultats.'
        },
        {
          step: 2,
          title: 'Préparer le gril',
          description: 'Chauffer un gril ou une plancha à feu vif. Égoutter la viande, réserver la marinade.',
          tip: 'Essuyez l\'excès de marinade pour éviter qu\'elle brûle.'
        },
        {
          step: 3,
          title: 'Griller',
          description: 'Cuire 4-5 min par côté en badigeonnant de marinade à mi-cuisson.',
          tip: 'L\'échine supporte une cuisson à cœur, pas besoin de rester saignant.'
        },
        {
          step: 4,
          title: 'Réduire la marinade',
          description: 'Verser le reste de marinade dans une casserole, faire réduire 3 min jusqu\'à consistance sirupeuse.',
          tip: 'Cette glace sucrée-salée est la signature du plat.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Napper la viande de sauce. Parsemer de graines de sésame. Servir avec du riz.',
          tip: 'Excellent aussi froid le lendemain en salade.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the marinade',
          description: 'Mix soy sauce, honey, ginger, garlic and sesame oil. Marinate the meat for at least 2 hours.',
          tip: 'Overnight marinating gives the best results.'
        },
        {
          step: 2,
          title: 'Prepare the grill',
          description: 'Heat a grill or griddle over high heat. Drain the meat, reserve the marinade.',
          tip: 'Pat off excess marinade to prevent burning.'
        },
        {
          step: 3,
          title: 'Grill',
          description: 'Cook 4-5 min per side, brushing with marinade halfway through.',
          tip: 'Pork shoulder can be cooked through, no need to keep it rare.'
        },
        {
          step: 4,
          title: 'Reduce the marinade',
          description: 'Pour remaining marinade into a saucepan, reduce for 3 min until syrupy.',
          tip: 'This sweet-savory glaze is the signature of the dish.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Drizzle meat with sauce. Sprinkle with sesame seeds. Serve with rice.',
          tip: 'Also excellent cold the next day in a salad.'
        }
      ],
      chefTips: [
        'L\'échine est plus grasse et savoureuse que le filet mignon',
        'La cuisson au barbecue apporte une dimension fumée',
        'Accompagner de chou chinois sauté'
      ],
      chefTips_en: [
        'Pork shoulder is fattier and more flavorful than tenderloin',
        'Barbecue cooking adds a smoky dimension',
        'Serve with stir-fried Chinese cabbage'
      ],
      nutritionPer100g: {
        calories: 255,
        proteins: 22,
        carbs: 8,
        fat: 16
      }
    },

    epaule_porc_confite: {
      id: 'epaule_porc_confite',
      name: 'Épaule de porc confite',
      name_en: 'Slow-Roasted Pork Shoulder Confit',
      cutId: 'epaule',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 300,
      restTime: 15,
      servings: 8,
      icon: '🍖',
      description: 'L\'épaule de porc fondante confite au four pendant des heures, à effilocher.',
      description_en: 'Meltingly tender pork shoulder slow-roasted for hours, perfect for pulling.',
      ingredients: [
        { name: 'Épaule de porc', quantity: '2', unit: 'kg', note: 'avec couenne' },
        { name: 'Oignons', quantity: '3', unit: 'pièces', note: 'en quartiers' },
        { name: 'Carottes', quantity: '3', unit: 'pièces' },
        { name: 'Ail', quantity: '1', unit: 'tête', note: 'coupée en deux' },
        { name: 'Vin blanc', quantity: '50', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '30', unit: 'cl' },
        { name: 'Thym, romarin', quantity: '4', unit: 'branches de chaque' },
        { name: 'Gros sel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork shoulder', quantity: '2', unit: 'kg', note: 'with skin' },
        { name: 'Onions', quantity: '3', unit: 'pieces', note: 'quartered' },
        { name: 'Carrots', quantity: '3', unit: 'pieces' },
        { name: 'Garlic', quantity: '1', unit: 'head', note: 'halved' },
        { name: 'White wine', quantity: '50', unit: 'cl' },
        { name: 'Chicken stock', quantity: '30', unit: 'cl' },
        { name: 'Thyme, rosemary', quantity: '4', unit: 'sprigs of each' },
        { name: 'Coarse salt', quantity: '2', unit: 'tbsp' },
        { name: 'Pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer l\'épaule',
          description: 'Quadriller la couenne au couteau. Frotter de gros sel. Laisser 1h à température ambiante.',
          tip: 'Le quadrillage aide le gras à fondre et la peau à croustiller.'
        },
        {
          step: 2,
          title: 'Installer au four',
          description: 'Préchauffer à 220°C. Disposer les légumes et les herbes dans un grand plat. Poser l\'épaule dessus, couenne vers le haut.',
          tip: 'Le lit de légumes parfume et empêche d\'attacher.'
        },
        {
          step: 3,
          title: 'Saisir à haute température',
          description: 'Enfourner 30 min à 220°C pour dorer la couenne.',
          tip: 'Surveillez pour éviter que ça brûle.'
        },
        {
          step: 4,
          title: 'Confire longuement',
          description: 'Baisser à 140°C. Verser le vin et le fond. Couvrir d\'alu. Cuire 4h30 en arrosant toutes les heures.',
          tip: 'La viande est prête quand elle se détache à la fourchette.'
        },
        {
          step: 5,
          title: 'Finition',
          description: 'Retirer l\'alu les 30 dernières minutes pour croustiller la couenne. Laisser reposer 15 min.',
          tip: 'Si la couenne n\'est pas assez croustillante, passer sous le gril.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Effilocher ou trancher. Servir avec le jus dégraissé et les légumes confits.',
          tip: 'Parfait pour des pulled pork sandwiches le lendemain.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the shoulder',
          description: 'Score the skin in a crosshatch pattern. Rub with coarse salt. Let sit 1h at room temperature.',
          tip: 'Scoring helps the fat render and the skin crisp up.'
        },
        {
          step: 2,
          title: 'Set up in the oven',
          description: 'Preheat to 220°C (425°F). Arrange vegetables and herbs in a large roasting pan. Place shoulder on top, skin side up.',
          tip: 'The vegetable bed adds flavor and prevents sticking.'
        },
        {
          step: 3,
          title: 'Sear at high heat',
          description: 'Roast for 30 min at 220°C (425°F) to brown the skin.',
          tip: 'Watch carefully to prevent burning.'
        },
        {
          step: 4,
          title: 'Slow roast',
          description: 'Lower to 140°C (285°F). Pour in wine and stock. Cover with foil. Cook 4h30, basting every hour.',
          tip: 'The meat is ready when it pulls apart with a fork.'
        },
        {
          step: 5,
          title: 'Finishing',
          description: 'Remove foil for the last 30 minutes to crisp the skin. Rest for 15 min.',
          tip: 'If skin is not crispy enough, broil briefly.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Pull or slice the meat. Serve with defatted juices and the roasted vegetables.',
          tip: 'Perfect for pulled pork sandwiches the next day.'
        }
      ],
      chefTips: [
        'L\'épaule confite est idéale pour nourrir une grande tablée',
        'Le jus peut servir de base pour une sauce BBQ maison',
        'Se réchauffe très bien au four à 150°C'
      ],
      chefTips_en: [
        'Slow-roasted shoulder is ideal for feeding a large crowd',
        'The juices can be used as a base for homemade BBQ sauce',
        'Reheats beautifully in the oven at 150°C (300°F)'
      ],
      nutritionPer100g: {
        calories: 270,
        proteins: 23,
        carbs: 2,
        fat: 19
      }
    },

    poitrine_porc_laquee: {
      id: 'poitrine_porc_laquee',
      name: 'Poitrine de porc laquée',
      name_en: 'Glazed Pork Belly',
      cutId: 'poitrine',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 180,
      restTime: 10,
      servings: 6,
      icon: '🥓',
      description: 'La poitrine de porc fondante à cœur avec sa laque caramélisée irrésistible.',
      description_en: 'Melt-in-your-mouth pork belly with an irresistible caramelized glaze.',
      ingredients: [
        { name: 'Poitrine de porc', quantity: '1.5', unit: 'kg', note: 'avec couenne' },
        { name: 'Sauce soja', quantity: '10', unit: 'cl' },
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Vinaigre de riz', quantity: '3', unit: 'c. à soupe' },
        { name: 'Cinq-épices', quantity: '1', unit: 'c. à café' },
        { name: 'Gingembre', quantity: '3', unit: 'cm', note: 'râpé' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'hachées' },
        { name: 'Gros sel', quantity: '', unit: '', note: 'pour la couenne' }
      ],
      ingredients_en: [
        { name: 'Pork belly', quantity: '1.5', unit: 'kg', note: 'with skin' },
        { name: 'Soy sauce', quantity: '10', unit: 'cl' },
        { name: 'Honey', quantity: '4', unit: 'tbsp' },
        { name: 'Rice vinegar', quantity: '3', unit: 'tbsp' },
        { name: 'Five-spice powder', quantity: '1', unit: 'tsp' },
        { name: 'Ginger', quantity: '3', unit: 'cm', note: 'grated' },
        { name: 'Garlic', quantity: '4', unit: 'cloves', note: 'minced' },
        { name: 'Coarse salt', quantity: '', unit: '', note: 'for the skin' }
      ],
      steps: [
        {
          step: 1,
          title: 'Sécher la couenne',
          description: 'Piquer la couenne avec une fourchette. Frotter de gros sel. Réfrigérer à découvert une nuit.',
          tip: 'La couenne sèche devient ultra-croustillante.'
        },
        {
          step: 2,
          title: 'Préparer la laque',
          description: 'Mélanger sauce soja, miel, vinaigre, cinq-épices, gingembre et ail.',
          tip: 'Goûtez et ajustez selon vos préférences sucré/salé.'
        },
        {
          step: 3,
          title: 'Première cuisson',
          description: 'Préchauffer à 200°C. Rincer et sécher la poitrine. Enfourner 30 min couenne vers le haut.',
          tip: 'Cette étape sèche et croustille la couenne.'
        },
        {
          step: 4,
          title: 'Braiser',
          description: 'Retourner la poitrine. Verser la laque et 20 cl d\'eau. Couvrir. Baisser à 150°C. Cuire 2h.',
          tip: 'La viande doit baigner dans le liquide.'
        },
        {
          step: 5,
          title: 'Glacer',
          description: 'Retourner couenne vers le haut. Badigeonner de jus. Augmenter à 200°C. Cuire 20 min à découvert.',
          tip: 'Badigeonnez plusieurs fois pour une laque brillante.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Trancher en morceaux. Servir avec du riz et des légumes sautés.',
          tip: 'La couenne doit croustiller, la viande doit fondre.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Dry the skin',
          description: 'Pierce the skin with a fork. Rub with coarse salt. Refrigerate uncovered overnight.',
          tip: 'Dry skin becomes ultra-crispy.'
        },
        {
          step: 2,
          title: 'Prepare the glaze',
          description: 'Mix soy sauce, honey, vinegar, five-spice, ginger and garlic.',
          tip: 'Taste and adjust to your sweet/salty preference.'
        },
        {
          step: 3,
          title: 'First cooking',
          description: 'Preheat to 200°C (400°F). Rinse and dry the belly. Roast 30 min skin side up.',
          tip: 'This step dries and crisps the skin.'
        },
        {
          step: 4,
          title: 'Braise',
          description: 'Flip the belly over. Pour in glaze and 20 cl water. Cover. Lower to 150°C (300°F). Cook 2h.',
          tip: 'The meat should be submerged in liquid.'
        },
        {
          step: 5,
          title: 'Glaze',
          description: 'Flip skin side up. Brush with juices. Increase to 200°C (400°F). Cook 20 min uncovered.',
          tip: 'Brush several times for a glossy glaze.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Slice into pieces. Serve with rice and stir-fried vegetables.',
          tip: 'The skin should be crispy, the meat should melt.'
        }
      ],
      chefTips: [
        'La technique de séchage au frigo est le secret de la couenne parfaite',
        'Pour plus de croustillant, finir sous le gril 2-3 min',
        'Accompagner de pickles pour couper le gras'
      ],
      chefTips_en: [
        'The fridge-drying technique is the secret to perfect crackling',
        'For extra crispiness, broil for 2-3 min at the end',
        'Serve with pickles to cut through the richness'
      ],
      nutritionPer100g: {
        calories: 340,
        proteins: 18,
        carbs: 8,
        fat: 27
      }
    },

    jarret_porc_choucroute: {
      id: 'jarret_porc_choucroute',
      name: 'Jarret de porc braisé façon choucroute',
      name_en: 'Braised Pork Hock with Sauerkraut',
      cutId: 'jarret',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🍖',
      description: 'Le jarret fondant et gélatineux braisé avec du chou, des pommes de terre et du vin blanc.',
      description_en: 'Tender and gelatinous pork hock braised with sauerkraut, potatoes and white wine.',
      ingredients: [
        { name: 'Jarret de porc', quantity: '2', unit: 'pièces', note: 'environ 500g chacun' },
        { name: 'Choucroute crue', quantity: '800', unit: 'g' },
        { name: 'Pommes de terre', quantity: '8', unit: 'moyennes' },
        { name: 'Vin blanc d\'Alsace', quantity: '50', unit: 'cl' },
        { name: 'Oignon', quantity: '1', unit: 'gros', note: 'piqué de clous de girofle' },
        { name: 'Baies de genièvre', quantity: '10', unit: 'pièces' },
        { name: 'Laurier', quantity: '2', unit: 'feuilles' },
        { name: 'Saindoux ou graisse d\'oie', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pork hock', quantity: '2', unit: 'pieces', note: 'about 500g each' },
        { name: 'Raw sauerkraut', quantity: '800', unit: 'g' },
        { name: 'Potatoes', quantity: '8', unit: 'medium' },
        { name: 'Alsace white wine', quantity: '50', unit: 'cl' },
        { name: 'Onion', quantity: '1', unit: 'large', note: 'studded with cloves' },
        { name: 'Juniper berries', quantity: '10', unit: 'pieces' },
        { name: 'Bay leaves', quantity: '2', unit: 'leaves' },
        { name: 'Lard or goose fat', quantity: '3', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la choucroute',
          description: 'Rincer la choucroute sous l\'eau froide si trop acide. Essorer. Faire revenir dans le saindoux 5 min.',
          tip: 'La choucroute crue a besoin de rinçage, la cuite moins.'
        },
        {
          step: 2,
          title: 'Installer les jarrets',
          description: 'Dans une grande cocotte, étaler la moitié de la choucroute. Poser les jarrets. Ajouter l\'oignon, le genièvre, le laurier.',
          tip: 'Les jarrets doivent être bien enrobés.'
        },
        {
          step: 3,
          title: 'Braiser',
          description: 'Couvrir du reste de choucroute. Verser le vin blanc. Couvrir hermétiquement. Enfourner à 150°C pendant 2h30.',
          tip: 'La cuisson doit être douce et longue.'
        },
        {
          step: 4,
          title: 'Ajouter les pommes de terre',
          description: 'Éplucher les pommes de terre. Les enfouir dans la choucroute. Poursuivre 30 min.',
          tip: 'Les pommes de terre absorbent les parfums.'
        },
        {
          step: 5,
          title: 'Vérifier et servir',
          description: 'La viande doit se détacher de l\'os. Servir les jarrets sur un lit de choucroute avec les pommes de terre.',
          tip: 'Accompagner de moutarde forte et de cornichons.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the sauerkraut',
          description: 'Rinse sauerkraut under cold water if too acidic. Drain well. Saute in lard for 5 min.',
          tip: 'Raw sauerkraut needs rinsing, pre-cooked needs less.'
        },
        {
          step: 2,
          title: 'Set up the hocks',
          description: 'In a large Dutch oven, spread half the sauerkraut. Place hocks on top. Add onion, juniper, bay leaves.',
          tip: 'The hocks should be well surrounded.'
        },
        {
          step: 3,
          title: 'Braise',
          description: 'Cover with remaining sauerkraut. Pour in white wine. Cover tightly. Bake at 150°C (300°F) for 2h30.',
          tip: 'The cooking should be gentle and long.'
        },
        {
          step: 4,
          title: 'Add the potatoes',
          description: 'Peel the potatoes. Bury them in the sauerkraut. Continue cooking 30 min.',
          tip: 'The potatoes absorb the flavors.'
        },
        {
          step: 5,
          title: 'Check and serve',
          description: 'The meat should fall off the bone. Serve the hocks on a bed of sauerkraut with potatoes.',
          tip: 'Serve with strong mustard and gherkins.'
        }
      ],
      chefTips: [
        'Le jarret est aussi appelé jambonneau quand il est salé',
        'Ajoutez des saucisses de Strasbourg les 20 dernières minutes',
        'Ce plat est encore meilleur réchauffé'
      ],
      chefTips_en: [
        'Pork hock is also called ham hock when cured',
        'Add Strasbourg sausages for the last 20 minutes',
        'This dish is even better reheated'
      ],
      nutritionPer100g: {
        calories: 220,
        proteins: 18,
        carbs: 10,
        fat: 12
      }
    }
  },

  // ==================== AGNEAU ====================
  agneau: {
    gigot_sept_heures: {
      id: 'gigot_sept_heures',
      name: 'Gigot de 7 heures',
      name_en: '7-Hour Leg of Lamb',
      cutId: 'gigot',
      difficulty: 'facile',
      prepTime: 30,
      cookTime: 420,
      restTime: 15,
      servings: 8,
      icon: '🐑',
      description: 'Le mythique gigot confit qui fond sous la fourchette, une recette traditionnelle du dimanche.',
      description_en: 'The legendary slow-cooked leg of lamb that melts under your fork, a traditional Sunday recipe.',
      ingredients: [
        { name: 'Gigot d\'agneau', quantity: '2.5', unit: 'kg', note: 'avec os' },
        { name: 'Vin blanc sec', quantity: '50', unit: 'cl' },
        { name: 'Fond d\'agneau ou veau', quantity: '50', unit: 'cl' },
        { name: 'Carottes', quantity: '4', unit: 'pièces' },
        { name: 'Oignons', quantity: '3', unit: 'pièces' },
        { name: 'Têtes d\'ail', quantity: '3', unit: 'pièces', note: 'entières' },
        { name: 'Tomates', quantity: '4', unit: 'pièces', note: 'ou 400g de tomates concassées' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce', note: 'thym, romarin, laurier' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Leg of lamb', quantity: '2.5', unit: 'kg', note: 'bone-in' },
        { name: 'Dry white wine', quantity: '50', unit: 'cl' },
        { name: 'Lamb or veal stock', quantity: '50', unit: 'cl' },
        { name: 'Carrots', quantity: '4', unit: 'pieces' },
        { name: 'Onions', quantity: '3', unit: 'pieces' },
        { name: 'Garlic heads', quantity: '3', unit: 'pieces', note: 'whole' },
        { name: 'Tomatoes', quantity: '4', unit: 'pieces', note: 'or 400g crushed tomatoes' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece', note: 'thyme, rosemary, bay leaf' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation',
          description: 'Préchauffer le four à 150°C. Saler et poivrer le gigot généreusement.',
          tip: 'Sortez le gigot 1h avant pour qu\'il soit à température ambiante.'
        },
        {
          step: 2,
          title: 'Saisir le gigot',
          description: 'Dans une grande cocotte, chauffer l\'huile et saisir le gigot sur toutes les faces jusqu\'à coloration.',
          tip: 'Une belle coloration apporte saveur et couleur à la sauce.'
        },
        {
          step: 3,
          title: 'Préparer les légumes',
          description: 'Réserver le gigot. Dans la cocotte, faire revenir les oignons et carottes en morceaux 5 min.',
          tip: 'Les légumes vont servir de lit de cuisson.'
        },
        {
          step: 4,
          title: 'Montage',
          description: 'Poser le gigot sur les légumes. Ajouter les têtes d\'ail, tomates, bouquet garni. Verser le vin et le fond.',
          tip: 'Le liquide doit arriver à mi-hauteur du gigot.'
        },
        {
          step: 5,
          title: 'Cuisson longue',
          description: 'Couvrir et enfourner pour 7 heures. Arroser toutes les heures avec le jus.',
          tip: 'La viande est prête quand elle se détache à la cuillère.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Dresser le gigot entouré des légumes. Filtrer et réduire le jus si nécessaire. Servir avec des flageolets.',
          tip: 'Récupérez les gousses d\'ail confites, délicieuses en purée.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Preparation',
          description: 'Preheat oven to 150°C (300°F). Season the leg of lamb generously with salt and pepper.',
          tip: 'Take the lamb out 1 hour before so it reaches room temperature.'
        },
        {
          step: 2,
          title: 'Sear the lamb',
          description: 'In a large Dutch oven, heat the oil and sear the lamb on all sides until browned.',
          tip: 'A nice browning adds flavor and color to the sauce.'
        },
        {
          step: 3,
          title: 'Prepare the vegetables',
          description: 'Set the lamb aside. In the pot, sauté the chopped onions and carrots for 5 minutes.',
          tip: 'The vegetables will serve as a cooking bed.'
        },
        {
          step: 4,
          title: 'Assembly',
          description: 'Place the lamb on the vegetables. Add garlic heads, tomatoes, bouquet garni. Pour in wine and stock.',
          tip: 'The liquid should reach halfway up the lamb.'
        },
        {
          step: 5,
          title: 'Slow cooking',
          description: 'Cover and bake for 7 hours. Baste with the juices every hour.',
          tip: 'The meat is ready when it falls off the bone with a spoon.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Arrange the lamb surrounded by vegetables. Strain and reduce the juices if needed. Serve with flageolet beans.',
          tip: 'Save the confit garlic cloves, they are delicious as a puree.'
        }
      ],
      chefTips: [
        'Vous pouvez préparer la veille et réchauffer doucement',
        'L\'os se retirera tout seul en fin de cuisson',
        'Ajoutez des haricots blancs 1h avant la fin pour un plat complet'
      ],
      chefTips_en: [
        'You can prepare the day before and reheat gently',
        'The bone will come out on its own at the end of cooking',
        'Add white beans 1 hour before the end for a complete dish'
      ],
      nutritionPer100g: {
        calories: 215,
        proteins: 25,
        carbs: 3,
        fat: 11
      }
    },

    cotes_agneau_herbes: {
      id: 'cotes_agneau_herbes',
      name: 'Côtes d\'agneau aux herbes',
      name_en: 'Lamb Chops with Herbs',
      cutId: 'cotes',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      restTime: 3,
      servings: 2,
      icon: '🐑',
      description: 'Des côtes d\'agneau parfumées aux herbes de Provence, saisies à la perfection.',
      description_en: 'Lamb chops flavored with Herbes de Provence, seared to perfection.',
      ingredients: [
        { name: 'Côtes d\'agneau', quantity: '6', unit: 'pièces', note: 'premières' },
        { name: 'Herbes de Provence', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '3', unit: 'gousses', note: 'écrasées' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Romarin frais', quantity: '2', unit: 'branches' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre du moulin', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb chops', quantity: '6', unit: 'pieces', note: 'first cut' },
        { name: 'Herbes de Provence', quantity: '2', unit: 'tbsp' },
        { name: 'Garlic', quantity: '3', unit: 'cloves', note: 'crushed' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Fresh rosemary', quantity: '2', unit: 'sprigs' },
        { name: 'Fresh thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Ground pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Marinade rapide',
          description: 'Mélanger l\'huile d\'olive, les herbes de Provence et l\'ail. Badigeonner les côtes. Laisser 15 min minimum.',
          tip: 'Vous pouvez mariner jusqu\'à 4h au frigo.'
        },
        {
          step: 2,
          title: 'Tempérer',
          description: 'Sortir les côtes du frigo 20 min avant cuisson.',
          tip: 'La viande à température ambiante cuit plus uniformément.'
        },
        {
          step: 3,
          title: 'Cuisson',
          description: 'Chauffer une poêle à feu vif. Saisir les côtes 3 min de chaque côté pour une cuisson rosée.',
          tip: 'Ne retournez qu\'une fois pour une belle croûte.'
        },
        {
          step: 4,
          title: 'Aromatiser',
          description: 'En fin de cuisson, ajouter le beurre, le romarin et le thym. Arroser les côtes avec le beurre mousseux.',
          tip: 'Le beurre noisette apporte des arômes incomparables.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 3 min sur une assiette chaude. Saler à la fleur de sel et poivrer au moment de servir.',
          tip: 'Accompagnez de ratatouille ou de légumes grillés.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Quick marinade',
          description: 'Mix olive oil, Herbes de Provence and garlic. Brush the chops. Let rest for at least 15 minutes.',
          tip: 'You can marinate up to 4 hours in the fridge.'
        },
        {
          step: 2,
          title: 'Temper',
          description: 'Take the chops out of the fridge 20 minutes before cooking.',
          tip: 'Meat at room temperature cooks more evenly.'
        },
        {
          step: 3,
          title: 'Cooking',
          description: 'Heat a skillet over high heat. Sear the chops 3 minutes per side for medium-rare.',
          tip: 'Only flip once for a nice crust.'
        },
        {
          step: 4,
          title: 'Flavor',
          description: 'At the end of cooking, add butter, rosemary and thyme. Baste the chops with the foamy butter.',
          tip: 'Brown butter adds incomparable flavors.'
        },
        {
          step: 5,
          title: 'Rest and serve',
          description: 'Let rest 3 minutes on a warm plate. Season with fleur de sel and pepper when serving.',
          tip: 'Serve with ratatouille or grilled vegetables.'
        }
      ],
      chefTips: [
        'Les côtes sont rosées quand elles sont souples au toucher',
        'Pour une cuisson parfaite : 52-54°C à cœur',
        'La fleur de sel apporte une texture croquante en fin de cuisson'
      ],
      chefTips_en: [
        'Chops are medium-rare when they feel springy to the touch',
        'For perfect cooking: 52-54°C (125-130°F) internal temperature',
        'Fleur de sel adds a crunchy texture at the end of cooking'
      ],
      nutritionPer100g: {
        calories: 250,
        proteins: 22,
        carbs: 0,
        fat: 18
      }
    },

    carre_agneau_croute: {
      id: 'carre_agneau_croute',
      name: 'Carré d\'agneau en croûte d\'herbes',
      name_en: 'Herb-Crusted Rack of Lamb',
      cutId: 'carre',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 25,
      restTime: 10,
      servings: 4,
      icon: '🐑',
      description: 'Un carré d\'agneau rôti sous une croûte dorée aux herbes fraîches.',
      description_en: 'A rack of lamb roasted under a golden crust of fresh herbs.',
      ingredients: [
        { name: 'Carré d\'agneau', quantity: '1', unit: 'pièce', note: '8 côtes, paré' },
        { name: 'Chapelure', quantity: '100', unit: 'g' },
        { name: 'Persil', quantity: '1', unit: 'bouquet' },
        { name: 'Menthe fraîche', quantity: '10', unit: 'feuilles' },
        { name: 'Moutarde de Dijon', quantity: '3', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Beurre', quantity: '50', unit: 'g', note: 'ramolli' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Rack of lamb', quantity: '1', unit: 'piece', note: '8 ribs, trimmed' },
        { name: 'Breadcrumbs', quantity: '100', unit: 'g' },
        { name: 'Parsley', quantity: '1', unit: 'bunch' },
        { name: 'Fresh mint', quantity: '10', unit: 'leaves' },
        { name: 'Dijon mustard', quantity: '3', unit: 'tbsp' },
        { name: 'Garlic', quantity: '2', unit: 'cloves' },
        { name: 'Butter', quantity: '50', unit: 'g', note: 'softened' },
        { name: 'Olive oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la croûte',
          description: 'Mixer chapelure, persil, menthe, ail et beurre. Assaisonner.',
          tip: 'Le mélange doit être homogène mais pas pâteux.'
        },
        {
          step: 2,
          title: 'Saisir le carré',
          description: 'Préchauffer le four à 200°C. Saisir le carré dans l\'huile chaude sur toutes les faces.',
          tip: 'Protégez les os avec du papier alu pour qu\'ils ne brûlent pas.'
        },
        {
          step: 3,
          title: 'Enduire de moutarde',
          description: 'Badigeonner le dessus du carré de moutarde.',
          tip: 'La moutarde fait adhérer la croûte et ajoute du goût.'
        },
        {
          step: 4,
          title: 'Appliquer la croûte',
          description: 'Presser le mélange d\'herbes sur la moutarde. Tasser légèrement.',
          tip: 'La croûte doit être uniforme et bien compacte.'
        },
        {
          step: 5,
          title: 'Rôtir',
          description: 'Enfourner 20-25 min pour une cuisson rosée (54°C à cœur). Laisser reposer 10 min.',
          tip: 'La croûte doit être dorée mais pas brûlée.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Découper en côtes individuelles. Servir avec un jus d\'agneau ou une réduction.',
          tip: 'Accompagnez de haricots verts ou de ratatouille.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Prepare the crust', description: 'Blend breadcrumbs, parsley, mint, garlic and butter. Season.', tip: 'The mixture should be homogeneous but not pasty.' },
        { step: 2, title: 'Sear the rack', description: 'Preheat oven to 200°C (400°F). Sear the rack in hot oil on all sides.', tip: 'Protect the bones with foil so they do not burn.' },
        { step: 3, title: 'Coat with mustard', description: 'Brush the top of the rack with mustard.', tip: 'The mustard helps the crust adhere and adds flavor.' },
        { step: 4, title: 'Apply the crust', description: 'Press the herb mixture onto the mustard. Pack lightly.', tip: 'The crust should be uniform and well compacted.' },
        { step: 5, title: 'Roast', description: 'Bake 20-25 minutes for medium-rare (54°C/130°F internal). Let rest 10 minutes.', tip: 'The crust should be golden but not burnt.' },
        { step: 6, title: 'Serving', description: 'Cut into individual chops. Serve with lamb jus or a reduction.', tip: 'Serve with green beans or ratatouille.' }
      ],
      chefTips: [
        'Demandez au boucher de "manchonner" les côtes',
        'La menthe est traditionnelle avec l\'agneau en cuisine anglaise',
        'Pour une croûte plus croustillante, passez 2 min sous le grill en fin de cuisson'
      ],
      chefTips_en: [
        'Ask the butcher to "french" the ribs',
        'Mint is traditional with lamb in English cuisine',
        'For a crispier crust, broil for 2 minutes at the end of cooking'
      ],
      nutritionPer100g: {
        calories: 265,
        proteins: 23,
        carbs: 8,
        fat: 16
      }
    },

    souris_agneau_confite: {
      id: 'souris_agneau_confite',
      name: 'Souris d\'agneau confite',
      name_en: 'Braised Lamb Shanks',
      cutId: 'souris',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 210,
      restTime: 0,
      servings: 4,
      icon: '🐑',
      description: 'Des souris d\'agneau fondantes, confites au four avec des légumes de saison.',
      description_en: 'Melt-in-your-mouth lamb shanks, slow-cooked in the oven with seasonal vegetables.',
      ingredients: [
        { name: 'Souris d\'agneau', quantity: '4', unit: 'pièces' },
        { name: 'Vin blanc', quantity: '30', unit: 'cl' },
        { name: 'Fond d\'agneau', quantity: '40', unit: 'cl', note: 'ou fond de veau' },
        { name: 'Carottes', quantity: '4', unit: 'pièces' },
        { name: 'Oignons', quantity: '2', unit: 'pièces' },
        { name: 'Tomates', quantity: '4', unit: 'pièces' },
        { name: 'Ail', quantity: '1', unit: 'tête' },
        { name: 'Thym', quantity: '6', unit: 'branches' },
        { name: 'Romarin', quantity: '2', unit: 'branches' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb shanks', quantity: '4', unit: 'pieces' },
        { name: 'White wine', quantity: '30', unit: 'cl' },
        { name: 'Lamb stock', quantity: '40', unit: 'cl', note: 'or veal stock' },
        { name: 'Carrots', quantity: '4', unit: 'pieces' },
        { name: 'Onions', quantity: '2', unit: 'pieces' },
        { name: 'Tomatoes', quantity: '4', unit: 'pieces' },
        { name: 'Garlic', quantity: '1', unit: 'head' },
        { name: 'Thyme', quantity: '6', unit: 'sprigs' },
        { name: 'Rosemary', quantity: '2', unit: 'sprigs' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir les souris',
          description: 'Préchauffer le four à 150°C. Saisir les souris dans l\'huile chaude jusqu\'à coloration.',
          tip: 'Une belle coloration donne saveur et couleur au plat.'
        },
        {
          step: 2,
          title: 'Préparer les légumes',
          description: 'Couper carottes et oignons en morceaux. Couper les tomates en quartiers.',
          tip: 'Les légumes vont servir de lit de cuisson.'
        },
        {
          step: 3,
          title: 'Assembler',
          description: 'Disposer les légumes dans un plat. Poser les souris dessus. Ajouter l\'ail, les herbes.',
          tip: 'La tête d\'ail peut rester entière.'
        },
        {
          step: 4,
          title: 'Mouiller et cuire',
          description: 'Verser le vin et le fond. Couvrir de papier alu et enfourner 3h30.',
          tip: 'La viande doit se détacher de l\'os facilement.'
        },
        {
          step: 5,
          title: 'Finition',
          description: 'Retirer l\'alu les 30 dernières minutes pour colorer. Rectifier l\'assaisonnement.',
          tip: 'Réduisez le jus si nécessaire.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Sear the shanks', description: 'Preheat oven to 150°C (300°F). Sear the shanks in hot oil until browned.', tip: 'A nice browning gives flavor and color to the dish.' },
        { step: 2, title: 'Prepare the vegetables', description: 'Cut carrots and onions into pieces. Quarter the tomatoes.', tip: 'The vegetables will serve as a cooking bed.' },
        { step: 3, title: 'Assemble', description: 'Arrange vegetables in a baking dish. Place the shanks on top. Add garlic and herbs.', tip: 'The garlic head can remain whole.' },
        { step: 4, title: 'Add liquid and cook', description: 'Pour in wine and stock. Cover with foil and bake for 3.5 hours.', tip: 'The meat should easily come off the bone.' },
        { step: 5, title: 'Finishing', description: 'Remove foil for the last 30 minutes to brown. Adjust seasoning.', tip: 'Reduce the juices if needed.' }
      ],
      chefTips: [
        'La souris contient beaucoup de collagène qui devient fondant à la cuisson lente',
        'Servez avec une purée de céleri ou des pommes de terre écrasées',
        'Le plat peut être préparé la veille et réchauffé'
      ],
      chefTips_en: [
        'Lamb shanks contain lots of collagen that becomes melt-in-your-mouth tender with slow cooking',
        'Serve with celery root puree or mashed potatoes',
        'The dish can be prepared the day before and reheated'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 24,
        carbs: 4,
        fat: 9
      }
    },

    epaule_agneau_boulangere: {
      id: 'epaule_agneau_boulangere',
      name: 'Épaule d\'agneau boulangère',
      name_en: 'Baker\'s Style Lamb Shoulder',
      cutId: 'epaule',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 180,
      restTime: 15,
      servings: 6,
      icon: '🍖',
      description: 'L\'épaule d\'agneau fondante rôtie sur un lit de pommes de terre fondantes.',
      description_en: 'Tender lamb shoulder roasted on a bed of melt-in-your-mouth potatoes.',
      ingredients: [
        { name: 'Épaule d\'agneau', quantity: '1.8', unit: 'kg', note: 'avec os' },
        { name: 'Pommes de terre', quantity: '1.2', unit: 'kg', note: 'type charlotte' },
        { name: 'Oignons', quantity: '3', unit: 'moyens' },
        { name: 'Ail', quantity: '8', unit: 'gousses' },
        { name: 'Thym frais', quantity: '1', unit: 'bouquet' },
        { name: 'Romarin', quantity: '2', unit: 'branches' },
        { name: 'Bouillon de volaille', quantity: '40', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb shoulder', quantity: '1.8', unit: 'kg', note: 'bone-in' },
        { name: 'Potatoes', quantity: '1.2', unit: 'kg', note: 'waxy variety like Charlotte' },
        { name: 'Onions', quantity: '3', unit: 'medium' },
        { name: 'Garlic', quantity: '8', unit: 'cloves' },
        { name: 'Fresh thyme', quantity: '1', unit: 'bunch' },
        { name: 'Rosemary', quantity: '2', unit: 'sprigs' },
        { name: 'Chicken broth', quantity: '40', unit: 'cl' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer l\'épaule',
          description: 'Sortir l\'épaule 1h avant. Faire des incisions et y glisser des éclats d\'ail et du thym. Saler, poivrer.',
          tip: 'L\'ail parfume la viande de l\'intérieur.'
        },
        {
          step: 2,
          title: 'Préparer le lit de légumes',
          description: 'Émincer finement les pommes de terre et oignons. Les disposer dans un grand plat beurré. Saler, poivrer.',
          tip: 'Des tranches fines cuisent mieux et absorbent les jus.'
        },
        {
          step: 3,
          title: 'Assembler',
          description: 'Verser le bouillon sur les pommes de terre. Poser l\'épaule dessus. Parsemer de noisettes de beurre.',
          tip: 'Le bouillon doit affleurer les pommes de terre.'
        },
        {
          step: 4,
          title: 'Cuire',
          description: 'Enfourner à 180°C pendant 3h. Arroser régulièrement avec le jus. Couvrir d\'alu si ça colore trop.',
          tip: 'La viande doit se détacher de l\'os.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 15 min. Découper à table pour le spectacle.',
          tip: 'Les pommes de terre doivent être dorées et fondantes.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Prepare the shoulder', description: 'Take the shoulder out 1 hour before. Make incisions and insert garlic slivers and thyme. Season with salt and pepper.', tip: 'The garlic flavors the meat from within.' },
        { step: 2, title: 'Prepare the vegetable bed', description: 'Thinly slice potatoes and onions. Arrange in a large buttered dish. Season.', tip: 'Thin slices cook better and absorb the juices.' },
        { step: 3, title: 'Assemble', description: 'Pour broth over potatoes. Place shoulder on top. Dot with butter.', tip: 'The broth should just reach the level of the potatoes.' },
        { step: 4, title: 'Cook', description: 'Bake at 180°C (350°F) for 3 hours. Baste regularly. Cover with foil if browning too much.', tip: 'The meat should fall off the bone.' },
        { step: 5, title: 'Rest and serve', description: 'Let rest 15 minutes. Carve at the table for dramatic effect.', tip: 'The potatoes should be golden and tender.' }
      ],
      chefTips: [
        'L\'épaule est plus économique que le gigot mais tout aussi savoureuse',
        'Ajoutez quelques tomates cerises les 30 dernières minutes',
        'Parfait pour un repas dominical en famille'
      ],
      chefTips_en: [
        'Shoulder is more economical than leg but just as tasty',
        'Add some cherry tomatoes 30 minutes before the end',
        'Perfect for a Sunday family meal'
      ],
      nutritionPer100g: {
        calories: 215,
        proteins: 20,
        carbs: 12,
        fat: 10
      }
    },

    selle_agneau_rotie: {
      id: 'selle_agneau_rotie',
      name: 'Selle d\'agneau rôtie en croûte d\'herbes',
      name_en: 'Herb-Crusted Roasted Saddle of Lamb',
      cutId: 'selle',
      difficulty: 'difficile',
      prepTime: 30,
      cookTime: 35,
      restTime: 15,
      servings: 4,
      icon: '🍖',
      description: 'La selle d\'agneau, pièce noble par excellence, enrobée d\'une croûte d\'herbes fraîches.',
      description_en: 'The saddle of lamb, the noblest cut, wrapped in a crust of fresh herbs.',
      ingredients: [
        { name: 'Selle d\'agneau', quantity: '1.2', unit: 'kg', note: 'parée' },
        { name: 'Chapelure', quantity: '80', unit: 'g' },
        { name: 'Persil plat', quantity: '1', unit: 'bouquet' },
        { name: 'Menthe fraîche', quantity: '10', unit: 'feuilles' },
        { name: 'Ail', quantity: '3', unit: 'gousses' },
        { name: 'Moutarde de Dijon', quantity: '3', unit: 'c. à soupe' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Saddle of lamb', quantity: '1.2', unit: 'kg', note: 'trimmed' },
        { name: 'Breadcrumbs', quantity: '80', unit: 'g' },
        { name: 'Flat-leaf parsley', quantity: '1', unit: 'bunch' },
        { name: 'Fresh mint', quantity: '10', unit: 'leaves' },
        { name: 'Garlic', quantity: '3', unit: 'cloves' },
        { name: 'Dijon mustard', quantity: '3', unit: 'tbsp' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la croûte',
          description: 'Mixer la chapelure avec les herbes, l\'ail et l\'huile. Saler et poivrer.',
          tip: 'La croûte doit être humide mais pas détrempée.'
        },
        {
          step: 2,
          title: 'Saisir la selle',
          description: 'Chauffer le beurre dans une poêle. Saisir la selle sur toutes les faces 2-3 min au total.',
          tip: 'La saisie donne couleur et saveur.'
        },
        {
          step: 3,
          title: 'Enrober',
          description: 'Badigeonner la selle de moutarde. Presser la croûte d\'herbes sur toute la surface.',
          tip: 'La moutarde fait adhérer la croûte.'
        },
        {
          step: 4,
          title: 'Rôtir',
          description: 'Enfourner à 200°C pendant 20-25 min (rosé). Température à cœur : 55-58°C.',
          tip: 'Pour à point, prolonger à 30 min (60°C à cœur).'
        },
        {
          step: 5,
          title: 'Repos',
          description: 'Laisser reposer 15 min sous alu. Trancher en médaillons épais.',
          tip: 'Le repos est crucial pour une viande rosée uniforme.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Prepare the crust', description: 'Blend breadcrumbs with herbs, garlic and oil. Season with salt and pepper.', tip: 'The crust should be moist but not soggy.' },
        { step: 2, title: 'Sear the saddle', description: 'Heat butter in a pan. Sear the saddle on all sides for 2-3 minutes total.', tip: 'Searing adds color and flavor.' },
        { step: 3, title: 'Coat', description: 'Brush the saddle with mustard. Press the herb crust over the entire surface.', tip: 'The mustard helps the crust adhere.' },
        { step: 4, title: 'Roast', description: 'Bake at 200°C (400°F) for 20-25 minutes (medium-rare). Internal temperature: 55-58°C (130-136°F).', tip: 'For medium, extend to 30 minutes (60°C/140°F internal).' },
        { step: 5, title: 'Rest', description: 'Let rest 15 minutes under foil. Slice into thick medallions.', tip: 'Resting is crucial for evenly pink meat.' }
      ],
      chefTips: [
        'La selle est le morceau le plus tendre de l\'agneau',
        'Servir avec un jus d\'agneau au romarin',
        'Accompagner de haricots verts et tomates provençales'
      ],
      chefTips_en: [
        'The saddle is the most tender cut of lamb',
        'Serve with rosemary lamb jus',
        'Accompany with green beans and Provencal tomatoes'
      ],
      nutritionPer100g: {
        calories: 230,
        proteins: 26,
        carbs: 5,
        fat: 12
      }
    },

    noisettes_agneau_ail: {
      id: 'noisettes_agneau_ail',
      name: 'Noisettes d\'agneau à l\'ail en chemise',
      name_en: 'Lamb Noisettes with Garlic in Skin',
      cutId: 'noisettes',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🍖',
      description: 'Les noisettes d\'agneau tendres et rosées, accompagnées de gousses d\'ail confites.',
      description_en: 'Tender, pink lamb noisettes accompanied by confit garlic cloves.',
      ingredients: [
        { name: 'Noisettes d\'agneau', quantity: '6', unit: 'pièces', note: '60-80g chacune' },
        { name: 'Ail', quantity: '12', unit: 'gousses', note: 'en chemise' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre du moulin', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb noisettes', quantity: '6', unit: 'pieces', note: '60-80g each' },
        { name: 'Garlic', quantity: '12', unit: 'cloves', note: 'unpeeled' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Fresh thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Ground pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Tempérer',
          description: 'Sortir les noisettes 30 min avant cuisson. Sécher avec du papier absorbant.',
          tip: 'La viande à température ambiante cuit plus uniformément.'
        },
        {
          step: 2,
          title: 'Précuire l\'ail',
          description: 'Faire revenir les gousses d\'ail en chemise dans l\'huile à feu doux 8-10 min jusqu\'à ce qu\'elles soient tendres.',
          tip: 'L\'ail en chemise ne brûle pas et devient doux.'
        },
        {
          step: 3,
          title: 'Saisir les noisettes',
          description: 'Augmenter le feu. Ajouter le beurre et le thym. Saisir les noisettes 2-3 min par côté.',
          tip: 'Les noisettes d\'agneau se mangent rosées, max à point.'
        },
        {
          step: 4,
          title: 'Arroser',
          description: 'Incliner la poêle et arroser les noisettes de beurre mousseux pendant 1-2 min.',
          tip: 'Le basting parfume et colore joliment.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Laisser reposer 5 min. Saler à la fleur de sel. Servir avec l\'ail confit.',
          tip: 'Presser l\'ail confit sur la viande, c\'est un délice.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Temper', description: 'Take the noisettes out 30 minutes before cooking. Pat dry with paper towels.', tip: 'Meat at room temperature cooks more evenly.' },
        { step: 2, title: 'Pre-cook the garlic', description: 'Sauté the unpeeled garlic cloves in oil over low heat for 8-10 minutes until tender.', tip: 'Garlic in its skin does not burn and becomes sweet.' },
        { step: 3, title: 'Sear the noisettes', description: 'Increase heat. Add butter and thyme. Sear the noisettes 2-3 minutes per side.', tip: 'Lamb noisettes are best served pink, medium-rare at most.' },
        { step: 4, title: 'Baste', description: 'Tilt the pan and baste the noisettes with foamy butter for 1-2 minutes.', tip: 'Basting adds flavor and beautiful color.' },
        { step: 5, title: 'Serving', description: 'Let rest 5 minutes. Season with fleur de sel. Serve with the confit garlic.', tip: 'Squeeze the confit garlic over the meat - delicious.' }
      ],
      chefTips: [
        'Les noisettes sont prélevées dans le filet ou la selle',
        'Demandez à votre boucher de les préparer',
        'Servir avec un gratin dauphinois ou des flageolets'
      ],
      chefTips_en: [
        'Noisettes are cut from the loin or saddle',
        'Ask your butcher to prepare them',
        'Serve with gratin dauphinois or flageolet beans'
      ],
      nutritionPer100g: {
        calories: 210,
        proteins: 25,
        carbs: 2,
        fat: 12
      }
    },

    collier_agneau_tajine: {
      id: 'collier_agneau_tajine',
      name: 'Collier d\'agneau en tajine',
      name_en: 'Lamb Neck Tagine',
      cutId: 'collier',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 150,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le collier d\'agneau fondant mijoté aux épices, pruneaux et amandes, façon tajine marocain.',
      description_en: 'Melt-in-your-mouth lamb neck simmered with spices, prunes and almonds, Moroccan tagine style.',
      ingredients: [
        { name: 'Collier d\'agneau', quantity: '1.2', unit: 'kg', note: 'en morceaux' },
        { name: 'Oignons', quantity: '3', unit: 'pièces' },
        { name: 'Pruneaux', quantity: '200', unit: 'g' },
        { name: 'Amandes effilées', quantity: '50', unit: 'g' },
        { name: 'Miel', quantity: '3', unit: 'c. à soupe' },
        { name: 'Ras el hanout', quantity: '2', unit: 'c. à soupe' },
        { name: 'Cannelle', quantity: '1', unit: 'bâton' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'en poudre' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Coriandre fraîche', quantity: '1', unit: 'bouquet' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb neck', quantity: '1.2', unit: 'kg', note: 'cut into pieces' },
        { name: 'Onions', quantity: '3', unit: 'pieces' },
        { name: 'Prunes', quantity: '200', unit: 'g' },
        { name: 'Slivered almonds', quantity: '50', unit: 'g' },
        { name: 'Honey', quantity: '3', unit: 'tbsp' },
        { name: 'Ras el hanout', quantity: '2', unit: 'tbsp' },
        { name: 'Cinnamon', quantity: '1', unit: 'stick' },
        { name: 'Ginger', quantity: '1', unit: 'tsp', note: 'ground' },
        { name: 'Olive oil', quantity: '4', unit: 'tbsp' },
        { name: 'Fresh cilantro', quantity: '1', unit: 'bunch' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Faire revenir la viande',
          description: 'Dans un tajine ou une cocotte, faire dorer les morceaux de collier dans l\'huile. Réserver.',
          tip: 'Procédez en plusieurs fois pour bien colorer.'
        },
        {
          step: 2,
          title: 'Préparer la base',
          description: 'Faire revenir les oignons émincés. Ajouter les épices, mélanger 1 min. Remettre la viande.',
          tip: 'Torréfier les épices libère leurs arômes.'
        },
        {
          step: 3,
          title: 'Mijoter',
          description: 'Couvrir d\'eau à hauteur. Ajouter la cannelle. Couvrir et mijoter 1h30 à feu doux.',
          tip: 'Le collier devient fondant grâce au collagène.'
        },
        {
          step: 4,
          title: 'Ajouter les fruits',
          description: 'Incorporer les pruneaux et le miel. Poursuivre 30 min. La sauce doit être sirupeuse.',
          tip: 'Si trop liquide, finir à découvert.'
        },
        {
          step: 5,
          title: 'Finitions',
          description: 'Parsemer d\'amandes grillées et de coriandre. Servir avec de la semoule.',
          tip: 'Un filet d\'eau de fleur d\'oranger sublime le plat.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Brown the meat', description: 'In a tagine or Dutch oven, brown the neck pieces in oil. Set aside.', tip: 'Work in batches for proper browning.' },
        { step: 2, title: 'Prepare the base', description: 'Sauté the sliced onions. Add the spices, stir 1 minute. Return the meat.', tip: 'Toasting the spices releases their aromas.' },
        { step: 3, title: 'Simmer', description: 'Cover with water. Add the cinnamon stick. Cover and simmer 1.5 hours over low heat.', tip: 'The neck becomes tender thanks to its collagen.' },
        { step: 4, title: 'Add the fruit', description: 'Stir in prunes and honey. Continue 30 minutes. Sauce should be syrupy.', tip: 'If too liquid, finish uncovered.' },
        { step: 5, title: 'Finishing', description: 'Sprinkle with toasted almonds and cilantro. Serve with couscous.', tip: 'A drizzle of orange blossom water elevates the dish.' }
      ],
      chefTips: [
        'Le collier est un morceau gélatineux parfait pour les tajines',
        'Préparez la veille pour des saveurs plus intenses',
        'Variante : remplacer les pruneaux par des abricots secs'
      ],
      chefTips_en: [
        'Neck is a gelatinous cut perfect for tagines',
        'Prepare the day before for more intense flavors',
        'Variation: replace prunes with dried apricots'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 18,
        carbs: 15,
        fat: 8
      }
    },

    poitrine_agneau_farcie: {
      id: 'poitrine_agneau_farcie',
      name: 'Poitrine d\'agneau farcie',
      name_en: 'Stuffed Lamb Breast',
      cutId: 'poitrine',
      difficulty: 'moyen',
      prepTime: 40,
      cookTime: 150,
      restTime: 10,
      servings: 6,
      icon: '🍖',
      description: 'La poitrine d\'agneau désossée, farcie aux herbes et roulée, cuite lentement au four.',
      description_en: 'Boneless lamb breast stuffed with herbs, rolled, and slowly baked in the oven.',
      ingredients: [
        { name: 'Poitrine d\'agneau', quantity: '1.5', unit: 'kg', note: 'désossée, ouverte' },
        { name: 'Chair à saucisse', quantity: '300', unit: 'g' },
        { name: 'Épinards', quantity: '200', unit: 'g', note: 'frais, blanchis' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'haché' },
        { name: 'Ail', quantity: '3', unit: 'gousses' },
        { name: 'Persil', quantity: '3', unit: 'c. à soupe', note: 'haché' },
        { name: 'Œuf', quantity: '1', unit: 'pièce' },
        { name: 'Pain de mie', quantity: '2', unit: 'tranches', note: 'trempées dans du lait' },
        { name: 'Vin blanc', quantity: '20', unit: 'cl' },
        { name: 'Fond d\'agneau', quantity: '30', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Lamb breast', quantity: '1.5', unit: 'kg', note: 'boneless, butterflied' },
        { name: 'Sausage meat', quantity: '300', unit: 'g' },
        { name: 'Spinach', quantity: '200', unit: 'g', note: 'fresh, blanched' },
        { name: 'Onion', quantity: '1', unit: 'piece', note: 'chopped' },
        { name: 'Garlic', quantity: '3', unit: 'cloves' },
        { name: 'Parsley', quantity: '3', unit: 'tbsp', note: 'chopped' },
        { name: 'Egg', quantity: '1', unit: 'piece' },
        { name: 'White bread', quantity: '2', unit: 'slices', note: 'soaked in milk' },
        { name: 'White wine', quantity: '20', unit: 'cl' },
        { name: 'Lamb stock', quantity: '30', unit: 'cl' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la farce',
          description: 'Mélanger la chair à saucisse, les épinards essorés, l\'oignon revenu, l\'ail, le persil, l\'œuf et le pain essoré. Assaisonner.',
          tip: 'La farce doit être homogène mais pas trop compacte.'
        },
        {
          step: 2,
          title: 'Farcir et rouler',
          description: 'Étaler la poitrine à plat. Répartir la farce. Rouler serré et ficeler tous les 3 cm.',
          tip: 'Le ficelage maintient la forme pendant la cuisson.'
        },
        {
          step: 3,
          title: 'Saisir',
          description: 'Faire dorer le rôti sur toutes les faces dans une cocotte. Réserver.',
          tip: 'La coloration apporte la saveur.'
        },
        {
          step: 4,
          title: 'Braiser',
          description: 'Déglacer au vin blanc. Ajouter le fond. Remettre la viande. Couvrir et enfourner à 150°C pendant 2h30.',
          tip: 'Arroser régulièrement.'
        },
        {
          step: 5,
          title: 'Finitions',
          description: 'Laisser reposer 10 min. Retirer les ficelles. Trancher. Servir avec le jus réduit.',
          tip: 'Des tranches de 2 cm montrent bien la spirale de farce.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Prepare the stuffing', description: 'Mix sausage meat, drained spinach, sautéed onion, garlic, parsley, egg and squeezed bread. Season.', tip: 'The stuffing should be homogeneous but not too compact.' },
        { step: 2, title: 'Stuff and roll', description: 'Lay the breast flat. Spread the stuffing. Roll tightly and tie every 3 cm.', tip: 'Tying maintains the shape during cooking.' },
        { step: 3, title: 'Sear', description: 'Brown the roast on all sides in a Dutch oven. Set aside.', tip: 'Browning adds flavor.' },
        { step: 4, title: 'Braise', description: 'Deglaze with white wine. Add stock. Return the meat. Cover and bake at 150°C (300°F) for 2.5 hours.', tip: 'Baste regularly.' },
        { step: 5, title: 'Finishing', description: 'Let rest 10 minutes. Remove strings. Slice. Serve with reduced juices.', tip: '2 cm slices show off the stuffing spiral nicely.' }
      ],
      chefTips: [
        'Demandez au boucher de préparer la poitrine en rectangle',
        'La poitrine est économique et très goûteuse',
        'Accompagner de flageolets ou de haricots blancs'
      ],
      chefTips_en: [
        'Ask the butcher to prepare the breast as a rectangle',
        'Breast is economical and very flavorful',
        'Serve with flageolet beans or white beans'
      ],
      nutritionPer100g: {
        calories: 280,
        proteins: 20,
        carbs: 5,
        fat: 20
      }
    }
  },

  // ==================== VEAU ====================
  veau: {
    blanquette_veau: {
      id: 'blanquette_veau',
      name: 'Blanquette de veau',
      name_en: 'Veal Blanquette',
      cutId: 'blanquette',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 90,
      restTime: 0,
      servings: 6,
      icon: '🐄',
      description: 'La blanquette traditionnelle française, une sauce crémeuse et onctueuse.',
      description_en: 'The traditional French blanquette, with a creamy and velvety sauce.',
      ingredients: [
        { name: 'Épaule et poitrine de veau', quantity: '1.2', unit: 'kg', note: 'mélange' },
        { name: 'Carottes', quantity: '4', unit: 'pièces' },
        { name: 'Poireaux', quantity: '2', unit: 'pièces' },
        { name: 'Oignon piqué', quantity: '1', unit: 'pièce', note: 'avec 2 clous de girofle' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Champignons de Paris', quantity: '250', unit: 'g' },
        { name: 'Petits oignons', quantity: '150', unit: 'g', note: 'grelots' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Farine', quantity: '50', unit: 'g' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Jaunes d\'œufs', quantity: '2', unit: 'pièces' },
        { name: 'Jus de citron', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre blanc', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal shoulder and breast', quantity: '1.2', unit: 'kg', note: 'mixed' },
        { name: 'Carrots', quantity: '4', unit: 'pieces' },
        { name: 'Leeks', quantity: '2', unit: 'pieces' },
        { name: 'Studded onion', quantity: '1', unit: 'piece', note: 'with 2 cloves' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Button mushrooms', quantity: '250', unit: 'g' },
        { name: 'Pearl onions', quantity: '150', unit: 'g', note: 'small' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Flour', quantity: '50', unit: 'g' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'Egg yolks', quantity: '2', unit: 'pieces' },
        { name: 'Lemon juice', quantity: '2', unit: 'tbsp' },
        { name: 'Salt, white pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Blanchir la viande',
          description: 'Couper la viande en cubes de 4 cm. Les mettre dans une casserole d\'eau froide, porter à ébullition 2 min, égoutter et rincer.',
          tip: 'Cette étape élimine les impuretés et éclaircit la sauce.'
        },
        {
          step: 2,
          title: 'Cuisson de la viande',
          description: 'Remettre la viande dans la casserole avec carottes, poireaux, oignon piqué et bouquet garni. Couvrir d\'eau, saler. Cuire à frémissement 1h15.',
          tip: 'Ne jamais faire bouillir : le frémissement garde la viande tendre.'
        },
        {
          step: 3,
          title: 'Préparer la garniture',
          description: 'Cuire les petits oignons et champignons dans du beurre. Réserver.',
          tip: 'Les champignons doivent rester blancs.'
        },
        {
          step: 4,
          title: 'Préparer le roux',
          description: 'Faire fondre le beurre, ajouter la farine. Cuire 2 min sans colorer (roux blanc). Mouiller avec 75cl de bouillon de cuisson filtré.',
          tip: 'Fouettez constamment pour éviter les grumeaux.'
        },
        {
          step: 5,
          title: 'Liaison',
          description: 'Mélanger crème et jaunes d\'œufs. Hors du feu, incorporer à la sauce en fouettant. Ne plus faire bouillir.',
          tip: 'La liaison aux œufs donne l\'onctuosité caractéristique.'
        },
        {
          step: 6,
          title: 'Finition',
          description: 'Ajouter le jus de citron, la viande et la garniture. Rectifier l\'assaisonnement. Servir avec du riz.',
          tip: 'Le poivre blanc évite les points noirs dans la sauce.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Blanch the meat',
          description: 'Cut the meat into 4 cm cubes. Place them in a pot of cold water, bring to a boil for 2 min, drain and rinse.',
          tip: 'This step removes impurities and lightens the sauce.'
        },
        {
          step: 2,
          title: 'Cook the meat',
          description: 'Return the meat to the pot with carrots, leeks, studded onion and bouquet garni. Cover with water, season with salt. Simmer for 1h15.',
          tip: 'Never boil: simmering keeps the meat tender.'
        },
        {
          step: 3,
          title: 'Prepare the garnish',
          description: 'Cook the pearl onions and mushrooms in butter. Set aside.',
          tip: 'The mushrooms should stay white.'
        },
        {
          step: 4,
          title: 'Prepare the roux',
          description: 'Melt the butter, add the flour. Cook 2 min without browning (white roux). Add 75cl of filtered cooking broth.',
          tip: 'Whisk constantly to avoid lumps.'
        },
        {
          step: 5,
          title: 'Liaison',
          description: 'Mix cream and egg yolks. Off the heat, incorporate into the sauce while whisking. Do not boil again.',
          tip: 'The egg liaison gives the characteristic creaminess.'
        },
        {
          step: 6,
          title: 'Finishing',
          description: 'Add the lemon juice, meat and garnish. Adjust seasoning. Serve with rice.',
          tip: 'White pepper avoids black specks in the sauce.'
        }
      ],
      chefTips: [
        'La vraie blanquette ne doit jamais bouillir après la liaison',
        'Vous pouvez ajouter des petites quenelles de veau',
        'Le citron doit être dosé avec parcimonie : il parfume sans acidifier'
      ],
      chefTips_en: [
        'A true blanquette should never boil after the liaison',
        'You can add small veal quenelles',
        'Lemon should be used sparingly: it flavors without making it acidic'
      ],
      nutritionPer100g: {
        calories: 165,
        proteins: 18,
        carbs: 5,
        fat: 8
      }
    },

    osso_buco: {
      id: 'osso_buco',
      name: 'Osso Buco alla Milanese',
      name_en: 'Osso Buco alla Milanese',
      cutId: 'jarret',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 120,
      restTime: 0,
      servings: 4,
      icon: '🐄',
      description: 'Le grand classique milanais, des tranches de jarret braisées avec leur moelle.',
      description_en: 'The great Milanese classic, braised veal shank slices with their marrow.',
      ingredients: [
        { name: 'Jarret de veau', quantity: '4', unit: 'tranches', note: '3-4 cm d\'épaisseur' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'gros' },
        { name: 'Carotte', quantity: '1', unit: 'pièce', note: 'grosse' },
        { name: 'Céleri', quantity: '2', unit: 'branches' },
        { name: 'Tomates pelées', quantity: '400', unit: 'g' },
        { name: 'Vin blanc sec', quantity: '20', unit: 'cl' },
        { name: 'Fond de veau', quantity: '30', unit: 'cl' },
        { name: 'Farine', quantity: '4', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Gremolata', quantity: '', unit: '', note: 'voir ci-dessous' },
        { name: 'Persil plat', quantity: '1', unit: 'bouquet' },
        { name: 'Zeste de citron', quantity: '1', unit: 'pièce' },
        { name: 'Ail', quantity: '2', unit: 'gousses' }
      ],
      ingredients_en: [
        { name: 'Veal shank', quantity: '4', unit: 'slices', note: '3-4 cm thick' },
        { name: 'Onion', quantity: '1', unit: 'piece', note: 'large' },
        { name: 'Carrot', quantity: '1', unit: 'piece', note: 'large' },
        { name: 'Celery', quantity: '2', unit: 'stalks' },
        { name: 'Peeled tomatoes', quantity: '400', unit: 'g' },
        { name: 'Dry white wine', quantity: '20', unit: 'cl' },
        { name: 'Veal stock', quantity: '30', unit: 'cl' },
        { name: 'Flour', quantity: '4', unit: 'tbsp' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Olive oil', quantity: '3', unit: 'tbsp' },
        { name: 'Gremolata', quantity: '', unit: '', note: 'see below' },
        { name: 'Flat-leaf parsley', quantity: '1', unit: 'bunch' },
        { name: 'Lemon zest', quantity: '1', unit: 'piece' },
        { name: 'Garlic', quantity: '2', unit: 'cloves' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les jarrets',
          description: 'Ficeler les tranches pour maintenir la viande autour de l\'os. Fariner légèrement.',
          tip: 'La ficelle empêche la viande de se détacher pendant la cuisson.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Dans une cocotte, chauffer huile et beurre. Saisir les jarrets 3 min de chaque côté. Réserver.',
          tip: 'Une belle coloration est essentielle pour la saveur.'
        },
        {
          step: 3,
          title: 'Faire revenir les légumes',
          description: 'Faire revenir l\'oignon, la carotte et le céleri émincés 5 min dans la cocotte.',
          tip: 'Les légumes doivent être transparents mais pas colorés.'
        },
        {
          step: 4,
          title: 'Déglacer et braiser',
          description: 'Déglacer au vin blanc. Ajouter les tomates et le fond. Remettre les jarrets. Couvrir et cuire 2h à 160°C.',
          tip: 'La viande doit être presque immergée.'
        },
        {
          step: 5,
          title: 'Préparer la gremolata',
          description: 'Mélanger le persil haché, le zeste de citron râpé et l\'ail finement émincé.',
          tip: 'La gremolata fraîche doit être ajoutée au dernier moment.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Dresser les jarrets avec leur sauce. Parsemer de gremolata. Servir avec un risotto à la milanaise.',
          tip: 'La moelle doit rester dans l\'os : c\'est le trésor du plat !'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the shanks',
          description: 'Tie the slices to keep the meat around the bone. Lightly flour.',
          tip: 'The string prevents the meat from falling off during cooking.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'In a Dutch oven, heat oil and butter. Sear the shanks 3 min on each side. Set aside.',
          tip: 'A nice browning is essential for flavor.'
        },
        {
          step: 3,
          title: 'Saute the vegetables',
          description: 'Saute the sliced onion, carrot and celery for 5 min in the Dutch oven.',
          tip: 'The vegetables should be translucent but not browned.'
        },
        {
          step: 4,
          title: 'Deglaze and braise',
          description: 'Deglaze with white wine. Add the tomatoes and stock. Return the shanks. Cover and cook 2h at 160C.',
          tip: 'The meat should be almost submerged.'
        },
        {
          step: 5,
          title: 'Prepare the gremolata',
          description: 'Mix the chopped parsley, grated lemon zest and finely minced garlic.',
          tip: 'Fresh gremolata should be added at the last moment.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Plate the shanks with their sauce. Sprinkle with gremolata. Serve with risotto alla milanese.',
          tip: 'The marrow should stay in the bone: it is the treasure of the dish!'
        }
      ],
      chefTips: [
        'La moelle se déguste à la petite cuillère : c\'est le clou du plat',
        'Le risotto alla milanese (au safran) est l\'accompagnement traditionnel',
        'Vous pouvez préparer la veille : le plat n\'en sera que meilleur'
      ],
      chefTips_en: [
        'The marrow is eaten with a small spoon: it is the highlight of the dish',
        'Risotto alla milanese (with saffron) is the traditional accompaniment',
        'You can prepare it the day before: the dish will be even better'
      ],
      nutritionPer100g: {
        calories: 175,
        proteins: 22,
        carbs: 6,
        fat: 7
      }
    },

    escalope_veau_creme: {
      id: 'escalope_veau_creme',
      name: 'Escalope de veau à la crème',
      name_en: 'Veal Escalope with Cream Sauce',
      cutId: 'escalope',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 0,
      servings: 2,
      icon: '🐄',
      description: 'Des escalopes de veau tendres dans une sauce crémeuse aux champignons.',
      description_en: 'Tender veal escalopes in a creamy mushroom sauce.',
      ingredients: [
        { name: 'Escalopes de veau', quantity: '2', unit: 'pièces', note: '150g chacune' },
        { name: 'Champignons de Paris', quantity: '200', unit: 'g', note: 'émincés' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal escalopes', quantity: '2', unit: 'pieces', note: '150g each' },
        { name: 'Button mushrooms', quantity: '200', unit: 'g', note: 'sliced' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'White wine', quantity: '10', unit: 'cl' },
        { name: 'Shallots', quantity: '2', unit: 'pieces' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les escalopes',
          description: 'Aplatir légèrement les escalopes si nécessaire. Saler et poivrer.',
          tip: 'L\'épaisseur doit être uniforme pour une cuisson régulière.'
        },
        {
          step: 2,
          title: 'Cuire les escalopes',
          description: 'Dans une poêle chaude avec la moitié du beurre, cuire les escalopes 2 min par côté. Réserver.',
          tip: 'Ne pas trop cuire pour garder la tendreté.'
        },
        {
          step: 3,
          title: 'Cuire les champignons',
          description: 'Dans la même poêle, ajouter le reste du beurre. Faire revenir échalotes et champignons 5 min.',
          tip: 'Les champignons doivent être dorés.'
        },
        {
          step: 4,
          title: 'Déglacer',
          description: 'Déglacer au vin blanc, laisser réduire. Ajouter la crème et laisser mijoter 3 min.',
          tip: 'La sauce doit napper la cuillère.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Remettre les escalopes 1 min dans la sauce. Dresser et parsemer de persil.',
          tip: 'Accompagnez de riz ou de pâtes fraîches.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the escalopes',
          description: 'Lightly flatten the escalopes if necessary. Season with salt and pepper.',
          tip: 'The thickness should be uniform for even cooking.'
        },
        {
          step: 2,
          title: 'Cook the escalopes',
          description: 'In a hot pan with half the butter, cook the escalopes 2 min per side. Set aside.',
          tip: 'Do not overcook to keep them tender.'
        },
        {
          step: 3,
          title: 'Cook the mushrooms',
          description: 'In the same pan, add the remaining butter. Saute shallots and mushrooms for 5 min.',
          tip: 'The mushrooms should be golden.'
        },
        {
          step: 4,
          title: 'Deglaze',
          description: 'Deglaze with white wine, let reduce. Add the cream and simmer for 3 min.',
          tip: 'The sauce should coat a spoon.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Return the escalopes to the sauce for 1 min. Plate and sprinkle with parsley.',
          tip: 'Serve with rice or fresh pasta.'
        }
      ],
      chefTips: [
        'Le veau doit rester légèrement rosé au centre',
        'Vous pouvez ajouter une touche de moutarde dans la sauce',
        'Remplacez les champignons de Paris par des girolles en saison'
      ],
      chefTips_en: [
        'The veal should remain slightly pink in the center',
        'You can add a touch of mustard to the sauce',
        'Replace button mushrooms with chanterelles in season'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 24,
        carbs: 3,
        fat: 10
      }
    },

    cote_veau_grillee: {
      id: 'cote_veau_grillee',
      name: 'Côte de veau grillée',
      name_en: 'Grilled Veal Chop',
      cutId: 'cote',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 20,
      restTime: 5,
      servings: 2,
      icon: '🐄',
      description: 'Une belle côte de veau saisie et rôtie, avec un beurre aux herbes.',
      description_en: 'A beautiful veal chop, seared and roasted, with herb butter.',
      ingredients: [
        { name: 'Côte de veau', quantity: '2', unit: 'pièces', note: '250g chacune' },
        { name: 'Beurre', quantity: '80', unit: 'g', note: 'ramolli' },
        { name: 'Thym', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Romarin', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'écrasées' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal chop', quantity: '2', unit: 'pieces', note: '250g each' },
        { name: 'Butter', quantity: '80', unit: 'g', note: 'softened' },
        { name: 'Thyme', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Rosemary', quantity: '1', unit: 'tbsp', note: 'chopped' },
        { name: 'Garlic', quantity: '2', unit: 'cloves', note: 'crushed' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le beurre aux herbes',
          description: 'Mélanger le beurre ramolli avec les herbes et l\'ail. Former un boudin dans du film, réfrigérer.',
          tip: 'Le beurre peut être préparé à l\'avance et congelé.'
        },
        {
          step: 2,
          title: 'Tempérer',
          description: 'Sortir les côtes 30 min avant. Préchauffer le four à 180°C.',
          tip: 'La viande à température ambiante cuit plus uniformément.'
        },
        {
          step: 3,
          title: 'Saisir',
          description: 'Dans une poêle très chaude avec l\'huile, saisir les côtes 3 min de chaque côté.',
          tip: 'La croûte dorée apporte saveur et texture.'
        },
        {
          step: 4,
          title: 'Rôtir',
          description: 'Transférer au four et cuire 10-12 min. La température à cœur doit atteindre 58-60°C.',
          tip: 'Utilisez un thermomètre pour une cuisson parfaite.'
        },
        {
          step: 5,
          title: 'Repos et service',
          description: 'Laisser reposer 5 min. Poser une rondelle de beurre aux herbes sur chaque côte.',
          tip: 'Le beurre va fondre et napper la viande.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the herb butter',
          description: 'Mix the softened butter with the herbs and garlic. Shape into a log in plastic wrap, refrigerate.',
          tip: 'The butter can be prepared in advance and frozen.'
        },
        {
          step: 2,
          title: 'Temper',
          description: 'Remove the chops 30 min before cooking. Preheat the oven to 180C.',
          tip: 'Meat at room temperature cooks more evenly.'
        },
        {
          step: 3,
          title: 'Sear',
          description: 'In a very hot pan with the oil, sear the chops 3 min on each side.',
          tip: 'The golden crust adds flavor and texture.'
        },
        {
          step: 4,
          title: 'Roast',
          description: 'Transfer to the oven and cook 10-12 min. Internal temperature should reach 58-60C.',
          tip: 'Use a thermometer for perfect cooking.'
        },
        {
          step: 5,
          title: 'Rest and serve',
          description: 'Let rest 5 min. Place a slice of herb butter on each chop.',
          tip: 'The butter will melt and coat the meat.'
        }
      ],
      chefTips: [
        'Le veau doit être légèrement rosé pour être tendre',
        'Accompagnez de pommes de terre sarladaises ou d\'une poêlée de légumes',
        'Le beurre aux herbes se conserve 1 mois au congélateur'
      ],
      chefTips_en: [
        'The veal should be slightly pink to be tender',
        'Serve with Sarladaise potatoes or sauteed vegetables',
        'Herb butter keeps for 1 month in the freezer'
      ],
      nutritionPer100g: {
        calories: 220,
        proteins: 26,
        carbs: 0,
        fat: 12
      }
    },

    noix_veau_rotie: {
      id: 'noix_veau_rotie',
      name: 'Noix de veau rôtie',
      name_en: 'Roasted Veal Cushion',
      cutId: 'noix',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🥩',
      description: 'La noix de veau rôtie, tendre et moelleuse, avec son jus corsé aux légumes.',
      description_en: 'Roasted veal cushion, tender and moist, with its rich vegetable jus.',
      ingredients: [
        { name: 'Noix de veau', quantity: '1.2', unit: 'kg', note: 'ficelée' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Carottes', quantity: '3', unit: 'pièces' },
        { name: 'Oignons', quantity: '2', unit: 'pièces' },
        { name: 'Vin blanc sec', quantity: '20', unit: 'cl' },
        { name: 'Fond de veau', quantity: '30', unit: 'cl' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'en chemise' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal cushion', quantity: '1.2', unit: 'kg', note: 'tied' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Carrots', quantity: '3', unit: 'pieces' },
        { name: 'Onions', quantity: '2', unit: 'pieces' },
        { name: 'Dry white wine', quantity: '20', unit: 'cl' },
        { name: 'Veal stock', quantity: '30', unit: 'cl' },
        { name: 'Thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Garlic', quantity: '4', unit: 'cloves', note: 'unpeeled' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la viande',
          description: 'Sortir la noix 1h avant cuisson. Saler et poivrer généreusement toute la surface.',
          tip: 'Le veau doit être à température ambiante.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Dans une cocotte, faire fondre le beurre. Saisir la noix sur toutes les faces jusqu\'à coloration dorée.',
          tip: 'La coloration donne la saveur du jus.'
        },
        {
          step: 3,
          title: 'Ajouter les aromates',
          description: 'Disposer les carottes et oignons coupés autour de la viande. Ajouter le thym et l\'ail.',
          tip: 'Les légumes vont parfumer et enrichir le jus.'
        },
        {
          step: 4,
          title: 'Rôtir',
          description: 'Couvrir et enfourner à 160°C. Cuire 1h15-1h30 (environ 50 min/kg). Arroser toutes les 20 min.',
          tip: 'Température à cœur : 62-65°C pour un veau rosé.'
        },
        {
          step: 5,
          title: 'Préparer le jus',
          description: 'Retirer la viande. Déglacer au vin blanc, ajouter le fond. Réduire de moitié. Filtrer.',
          tip: 'Écrasez les légumes pour extraire les sucs.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer 15 min. Retirer les ficelles. Trancher et napper de jus.',
          tip: 'Des tranches de 1 cm sont idéales.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the meat',
          description: 'Remove the veal cushion 1h before cooking. Generously season the entire surface with salt and pepper.',
          tip: 'The veal should be at room temperature.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'In a Dutch oven, melt the butter. Sear the veal on all sides until golden brown.',
          tip: 'The browning gives flavor to the jus.'
        },
        {
          step: 3,
          title: 'Add aromatics',
          description: 'Arrange the cut carrots and onions around the meat. Add the thyme and garlic.',
          tip: 'The vegetables will flavor and enrich the jus.'
        },
        {
          step: 4,
          title: 'Roast',
          description: 'Cover and bake at 160C. Cook 1h15-1h30 (about 50 min/kg). Baste every 20 min.',
          tip: 'Internal temperature: 62-65C for pink veal.'
        },
        {
          step: 5,
          title: 'Prepare the jus',
          description: 'Remove the meat. Deglaze with white wine, add the stock. Reduce by half. Strain.',
          tip: 'Crush the vegetables to extract the juices.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Let rest 15 min. Remove the strings. Slice and drizzle with jus.',
          tip: 'Slices of 1 cm are ideal.'
        }
      ],
      chefTips: [
        'La noix est le morceau le plus tendre du veau pour les rôtis',
        'Ne pas trop cuire : le veau sec est une catastrophe',
        'Accompagner de petits légumes glacés ou d\'une purée'
      ],
      chefTips_en: [
        'The cushion is the most tender cut of veal for roasting',
        'Do not overcook: dry veal is a disaster',
        'Serve with glazed baby vegetables or mashed potatoes'
      ],
      nutritionPer100g: {
        calories: 175,
        proteins: 28,
        carbs: 2,
        fat: 6
      }
    },

    tendron_veau_braise: {
      id: 'tendron_veau_braise',
      name: 'Tendron de veau braisé',
      name_en: 'Braised Veal Breast',
      cutId: 'tendron',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 150,
      restTime: 0,
      servings: 4,
      icon: '🍲',
      description: 'Le tendron de veau moelleux et gélatineux, braisé longuement avec des légumes printaniers.',
      description_en: 'Tender and gelatinous veal breast, slow-braised with spring vegetables.',
      ingredients: [
        { name: 'Tendrons de veau', quantity: '4', unit: 'pièces', note: '250g chacun environ' },
        { name: 'Carottes nouvelles', quantity: '12', unit: 'pièces' },
        { name: 'Navets nouveaux', quantity: '8', unit: 'pièces' },
        { name: 'Petits pois', quantity: '200', unit: 'g', note: 'frais ou surgelés' },
        { name: 'Oignons nouveaux', quantity: '8', unit: 'pièces' },
        { name: 'Vin blanc', quantity: '30', unit: 'cl' },
        { name: 'Fond de veau', quantity: '40', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal breast pieces', quantity: '4', unit: 'pieces', note: 'about 250g each' },
        { name: 'Baby carrots', quantity: '12', unit: 'pieces' },
        { name: 'Baby turnips', quantity: '8', unit: 'pieces' },
        { name: 'Peas', quantity: '200', unit: 'g', note: 'fresh or frozen' },
        { name: 'Spring onions', quantity: '8', unit: 'pieces' },
        { name: 'White wine', quantity: '30', unit: 'cl' },
        { name: 'Veal stock', quantity: '40', unit: 'cl' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir les tendrons',
          description: 'Sécher les tendrons. Les faire colorer dans le beurre chaud sur toutes les faces. Réserver.',
          tip: 'Ne pas surcharger la cocotte pour une belle coloration.'
        },
        {
          step: 2,
          title: 'Préparer les légumes',
          description: 'Faire revenir les carottes, navets et oignons 5 min dans le même beurre.',
          tip: 'Les légumes doivent juste être saisis.'
        },
        {
          step: 3,
          title: 'Braiser',
          description: 'Remettre les tendrons, ajouter le vin et le fond. Ajouter le bouquet garni. Couvrir et enfourner à 150°C pendant 2h.',
          tip: 'Le liquide doit arriver à mi-hauteur.'
        },
        {
          step: 4,
          title: 'Ajouter les petits pois',
          description: 'Ajouter les petits pois les 15 dernières minutes de cuisson.',
          tip: 'Les petits pois cuisent vite et doivent rester verts.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Vérifier l\'assaisonnement. Servir les tendrons entourés de légumes, nappés de jus.',
          tip: 'La viande doit être fondante mais tenir sur l\'os.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the veal breast',
          description: 'Pat the veal breast dry. Brown them in hot butter on all sides. Set aside.',
          tip: 'Do not overcrowd the pot for proper browning.'
        },
        {
          step: 2,
          title: 'Prepare the vegetables',
          description: 'Saute the carrots, turnips and onions for 5 min in the same butter.',
          tip: 'The vegetables should just be seared.'
        },
        {
          step: 3,
          title: 'Braise',
          description: 'Return the veal, add wine and stock. Add the bouquet garni. Cover and bake at 150C for 2h.',
          tip: 'The liquid should come halfway up.'
        },
        {
          step: 4,
          title: 'Add the peas',
          description: 'Add the peas for the last 15 minutes of cooking.',
          tip: 'Peas cook quickly and should stay green.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Check the seasoning. Serve the veal breast surrounded by vegetables, drizzled with jus.',
          tip: 'The meat should be meltingly tender but hold on the bone.'
        }
      ],
      chefTips: [
        'Le tendron est un morceau avec des cartilages qui deviennent fondants à la cuisson',
        'Parfait plat de printemps avec les légumes nouveaux',
        'Ce plat peut se réchauffer sans problème'
      ],
      chefTips_en: [
        'Veal breast is a cut with cartilage that becomes meltingly tender when cooked',
        'Perfect spring dish with baby vegetables',
        'This dish reheats well'
      ],
      nutritionPer100g: {
        calories: 190,
        proteins: 22,
        carbs: 6,
        fat: 9
      }
    },

    ris_veau_poeles: {
      id: 'ris_veau_poeles',
      name: 'Ris de veau poêlés aux morilles',
      name_en: 'Pan-Seared Veal Sweetbreads with Morels',
      cutId: 'ris',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 20,
      restTime: 0,
      servings: 4,
      icon: '🍳',
      description: 'Les ris de veau croustillants et fondants, accompagnés de morilles à la crème.',
      description_en: 'Crispy yet tender veal sweetbreads, served with creamy morel sauce.',
      ingredients: [
        { name: 'Ris de veau', quantity: '600', unit: 'g', note: 'noix de préférence' },
        { name: 'Morilles séchées', quantity: '40', unit: 'g', note: 'ou 200g fraîches' },
        { name: 'Crème fraîche', quantity: '25', unit: 'cl' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Vin jaune ou blanc sec', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '80', unit: 'g' },
        { name: 'Farine', quantity: '3', unit: 'c. à soupe' },
        { name: 'Citron', quantity: '1', unit: 'pièce', note: 'jus' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Veal sweetbreads', quantity: '600', unit: 'g', note: 'heart preferred' },
        { name: 'Dried morels', quantity: '40', unit: 'g', note: 'or 200g fresh' },
        { name: 'Heavy cream', quantity: '25', unit: 'cl' },
        { name: 'Shallots', quantity: '3', unit: 'pieces' },
        { name: 'Vin jaune or dry white wine', quantity: '15', unit: 'cl' },
        { name: 'Butter', quantity: '80', unit: 'g' },
        { name: 'Flour', quantity: '3', unit: 'tbsp' },
        { name: 'Lemon', quantity: '1', unit: 'piece', note: 'juice' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les ris (la veille)',
          description: 'Faire dégorger les ris 4h dans l\'eau froide citronnée en changeant l\'eau. Les blanchir 3 min dans l\'eau frémissante. Refroidir, retirer les peaux et nerfs. Presser entre deux planches au frais.',
          tip: 'Cette préparation est longue mais essentielle pour des ris parfaits.'
        },
        {
          step: 2,
          title: 'Réhydrater les morilles',
          description: 'Faire tremper les morilles 30 min dans l\'eau tiède. Les rincer soigneusement pour retirer le sable. Réserver l\'eau de trempage filtrée.',
          tip: 'Les morilles cachent souvent du sable dans leurs alvéoles.'
        },
        {
          step: 3,
          title: 'Poêler les ris',
          description: 'Couper les ris en escalopes. Fariner légèrement. Les poêler dans 40g de beurre mousseux 3-4 min par face jusqu\'à coloration dorée.',
          tip: 'Les ris doivent être dorés dehors et nacrés dedans.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Faire revenir les échalotes dans le reste de beurre. Ajouter les morilles 2 min. Déglacer au vin. Ajouter l\'eau de trempage, réduire. Incorporer la crème.',
          tip: 'La sauce doit napper une cuillère.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Disposer les ris sur des assiettes chaudes. Napper de sauce aux morilles. Servir immédiatement.',
          tip: 'Les ris ne doivent jamais attendre, ils durcissent.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the sweetbreads (day before)',
          description: 'Soak the sweetbreads 4h in cold lemon water, changing the water. Blanch 3 min in simmering water. Cool, remove membranes and sinews. Press between two boards in the refrigerator.',
          tip: 'This preparation is long but essential for perfect sweetbreads.'
        },
        {
          step: 2,
          title: 'Rehydrate the morels',
          description: 'Soak the morels 30 min in warm water. Rinse carefully to remove sand. Reserve the filtered soaking water.',
          tip: 'Morels often hide sand in their honeycomb texture.'
        },
        {
          step: 3,
          title: 'Pan-sear the sweetbreads',
          description: 'Cut the sweetbreads into escalopes. Lightly flour. Pan-fry in 40g foaming butter 3-4 min per side until golden.',
          tip: 'The sweetbreads should be golden outside and pearly inside.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'Saute the shallots in the remaining butter. Add the morels 2 min. Deglaze with wine. Add the soaking water, reduce. Stir in the cream.',
          tip: 'The sauce should coat a spoon.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Arrange the sweetbreads on warm plates. Top with morel sauce. Serve immediately.',
          tip: 'Sweetbreads should never wait, they toughen.'
        }
      ],
      chefTips: [
        'Les ris de veau sont un mets délicat et raffiné',
        'Préférez les "noix" aux "gorges", plus tendres',
        'Se marie parfaitement avec un vin jaune du Jura'
      ],
      chefTips_en: [
        'Veal sweetbreads are a delicate and refined delicacy',
        'Prefer the "heart" sweetbreads to "throat" sweetbreads, they are more tender',
        'Pairs perfectly with a vin jaune from Jura'
      ],
      nutritionPer100g: {
        calories: 250,
        proteins: 20,
        carbs: 5,
        fat: 17
      }
    }
  },

  // ==================== VOLAILLE ====================
  volaille: {
    poulet_roti: {
      id: 'poulet_roti',
      name: 'Poulet rôti parfait',
      name_en: 'Perfect Roast Chicken',
      cutId: 'entier',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 75,
      restTime: 10,
      servings: 4,
      icon: '🍗',
      description: 'Le poulet rôti du dimanche, peau croustillante et chair juteuse.',
      description_en: 'The classic Sunday roast chicken with crispy skin and juicy meat.',
      ingredients: [
        { name: 'Poulet fermier', quantity: '1.5', unit: 'kg' },
        { name: 'Beurre', quantity: '80', unit: 'g', note: 'ramolli' },
        { name: 'Ail', quantity: '1', unit: 'tête' },
        { name: 'Citron', quantity: '1', unit: 'pièce' },
        { name: 'Thym frais', quantity: '6', unit: 'branches' },
        { name: 'Romarin', quantity: '2', unit: 'branches' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'optionnel' }
      ],
      ingredients_en: [
        { name: 'Free-range chicken', quantity: '1.5', unit: 'kg' },
        { name: 'Butter', quantity: '80', unit: 'g', note: 'softened' },
        { name: 'Garlic', quantity: '1', unit: 'head' },
        { name: 'Lemon', quantity: '1', unit: 'piece' },
        { name: 'Fresh thyme', quantity: '6', unit: 'sprigs' },
        { name: 'Rosemary', quantity: '2', unit: 'sprigs' },
        { name: 'Olive oil', quantity: '2', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' },
        { name: 'Potatoes', quantity: '800', unit: 'g', note: 'optional' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation',
          description: 'Sortir le poulet 1h avant. Préchauffer le four à 220°C. Mélanger le beurre avec du thym émietté, sel et poivre.',
          tip: 'Le poulet à température ambiante cuit plus uniformément.'
        },
        {
          step: 2,
          title: 'Assaisonner',
          description: 'Glisser le beurre aromatisé sous la peau des blancs. Mettre le citron piqué et le reste des herbes dans la cavité.',
          tip: 'Le beurre sous la peau protège et parfume les blancs.'
        },
        {
          step: 3,
          title: 'Brider',
          description: 'Croiser les pattes et les ficeler. Replier les ailes sous le corps. Huiler et saler la peau.',
          tip: 'Le bridage permet une cuisson homogène.'
        },
        {
          step: 4,
          title: 'Cuisson',
          description: 'Poser sur la tête d\'ail et cuire 20 min à 220°C. Baisser à 180°C et poursuivre 50 min. Arroser toutes les 20 min.',
          tip: 'Le jus qui coule doit être clair, pas rosé.'
        },
        {
          step: 5,
          title: 'Vérifier la cuisson',
          description: 'La température doit atteindre 74°C dans le blanc et 82°C dans la cuisse. La peau doit être dorée.',
          tip: 'Piquez la cuisse : le jus doit être clair.'
        },
        {
          step: 6,
          title: 'Repos et service',
          description: 'Laisser reposer 10 min couvert d\'alu. Récupérer le jus et l\'ail confit pour la sauce.',
          tip: 'Écrasez l\'ail confit dans le jus : c\'est délicieux !'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Preparation',
          description: 'Take the chicken out 1 hour before. Preheat oven to 220°C (425°F). Mix butter with crumbled thyme, salt and pepper.',
          tip: 'Room temperature chicken cooks more evenly.'
        },
        {
          step: 2,
          title: 'Season',
          description: 'Slide the herb butter under the breast skin. Place the pierced lemon and remaining herbs in the cavity.',
          tip: 'Butter under the skin protects and flavors the breast meat.'
        },
        {
          step: 3,
          title: 'Truss',
          description: 'Cross the legs and tie them. Tuck the wings under the body. Oil and salt the skin.',
          tip: 'Trussing ensures even cooking.'
        },
        {
          step: 4,
          title: 'Roasting',
          description: 'Place on the garlic head and roast 20 min at 220°C (425°F). Lower to 180°C (350°F) and continue for 50 min. Baste every 20 min.',
          tip: 'The juices should run clear, not pink.'
        },
        {
          step: 5,
          title: 'Check doneness',
          description: 'Temperature should reach 74°C (165°F) in the breast and 82°C (180°F) in the thigh. Skin should be golden.',
          tip: 'Pierce the thigh: juices should run clear.'
        },
        {
          step: 6,
          title: 'Rest and serve',
          description: 'Let rest 10 min covered with foil. Collect the juices and confit garlic for the sauce.',
          tip: 'Mash the confit garlic into the juices: it\'s delicious!'
        }
      ],
      chefTips: [
        'Pour une peau extra-croustillante, séchez bien le poulet la veille au frigo',
        'Ajoutez des pommes de terre autour pour un plat complet',
        'Le temps de cuisson est d\'environ 20 min par 500g'
      ],
      chefTips_en: [
        'For extra-crispy skin, dry the chicken well in the fridge the night before',
        'Add potatoes around for a complete meal',
        'Cooking time is about 20 min per 500g (1 lb)'
      ],
      nutritionPer100g: {
        calories: 190,
        proteins: 27,
        carbs: 0,
        fat: 9
      }
    },

    magret_canard: {
      id: 'magret_canard',
      name: 'Magret de canard aux cerises',
      name_en: 'Duck Breast with Cherries',
      cutId: 'magret',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🦆',
      description: 'Le magret rosé avec sa sauce aux cerises aigres-douces.',
      description_en: 'Pink duck breast with its sweet and sour cherry sauce.',
      ingredients: [
        { name: 'Magret de canard', quantity: '1', unit: 'pièce', note: '400g environ' },
        { name: 'Cerises', quantity: '200', unit: 'g', note: 'fraîches ou en bocal' },
        { name: 'Vinaigre de vin rouge', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Porto rouge', quantity: '10', unit: 'cl' },
        { name: 'Fond de canard', quantity: '15', unit: 'cl', note: 'ou fond de volaille' },
        { name: 'Beurre', quantity: '20', unit: 'g' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre 5 baies', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Duck breast', quantity: '1', unit: 'piece', note: 'about 400g' },
        { name: 'Cherries', quantity: '200', unit: 'g', note: 'fresh or jarred' },
        { name: 'Red wine vinegar', quantity: '3', unit: 'tbsp' },
        { name: 'Sugar', quantity: '2', unit: 'tbsp' },
        { name: 'Red port', quantity: '10', unit: 'cl' },
        { name: 'Duck stock', quantity: '15', unit: 'cl', note: 'or poultry stock' },
        { name: 'Butter', quantity: '20', unit: 'g' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'to taste' },
        { name: 'Five-pepper blend', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le magret',
          description: 'Quadriller le gras en croisillons sans percer la chair. Saler et poivrer.',
          tip: 'Les entailles permettent au gras de fondre uniformément.'
        },
        {
          step: 2,
          title: 'Cuisson',
          description: 'Poser le magret côté gras dans une poêle froide. Cuire 8 min à feu moyen. Retourner, cuire 4 min côté chair.',
          tip: 'Démarrer à froid permet au gras de fondre doucement.'
        },
        {
          step: 3,
          title: 'Repos',
          description: 'Réserver le magret couvert d\'alu. Vider le gras de la poêle (gardez-le pour les pommes sarladaises !).',
          tip: 'Le repos est crucial pour un magret rosé et juteux.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Dans la poêle, faire un caramel avec le sucre. Déglacer au vinaigre et au porto. Ajouter le fond, réduire de moitié.',
          tip: 'Attention aux projections lors du déglaçage.'
        },
        {
          step: 5,
          title: 'Finir la sauce',
          description: 'Ajouter les cerises dénoyautées. Cuire 3 min. Monter au beurre hors du feu.',
          tip: 'Le beurre apporte brillance et onctuosité.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Trancher le magret en biais. Dresser avec la sauce aux cerises. Parsemer de fleur de sel.',
          tip: 'Accompagnez de pommes sarladaises ou d\'un gratin.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the duck breast',
          description: 'Score the fat in a crosshatch pattern without piercing the meat. Season with salt and pepper.',
          tip: 'The cuts allow the fat to render evenly.'
        },
        {
          step: 2,
          title: 'Cooking',
          description: 'Place the duck breast fat-side down in a cold pan. Cook 8 min over medium heat. Flip and cook 4 min on the meat side.',
          tip: 'Starting cold allows the fat to render slowly.'
        },
        {
          step: 3,
          title: 'Resting',
          description: 'Set aside the duck breast covered with foil. Drain the fat from the pan (save it for Sarladaises potatoes!).',
          tip: 'Resting is crucial for a pink and juicy duck breast.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'In the pan, make a caramel with the sugar. Deglaze with vinegar and port. Add the stock, reduce by half.',
          tip: 'Be careful of splatters when deglazing.'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Add the pitted cherries. Cook 3 min. Whisk in butter off the heat.',
          tip: 'The butter adds shine and richness.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Slice the duck breast on the bias. Plate with the cherry sauce. Sprinkle with fleur de sel.',
          tip: 'Serve with Sarladaises potatoes or a gratin.'
        }
      ],
      chefTips: [
        'Pour un magret saignant : 52°C à cœur, rosé : 56°C',
        'Le gras récupéré se conserve des mois au frigo',
        'En saison, utilisez des cerises fraîches griotte'
      ],
      chefTips_en: [
        'For rare duck breast: 52°C (125°F) internal, medium-rare: 56°C (133°F)',
        'The rendered fat keeps for months in the fridge',
        'In season, use fresh sour cherries'
      ],
      nutritionPer100g: {
        calories: 230,
        proteins: 22,
        carbs: 8,
        fat: 12
      }
    },

    confit_canard: {
      id: 'confit_canard',
      name: 'Confit de canard maison',
      name_en: 'Homemade Duck Confit',
      cutId: 'confit',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🦆',
      description: 'Le véritable confit du Sud-Ouest, cuit lentement dans sa graisse.',
      description_en: 'The authentic Southwest France confit, slowly cooked in its own fat.',
      ingredients: [
        { name: 'Cuisses de canard', quantity: '4', unit: 'pièces' },
        { name: 'Graisse de canard', quantity: '1', unit: 'kg' },
        { name: 'Gros sel', quantity: '100', unit: 'g' },
        { name: 'Poivre noir', quantity: '1', unit: 'c. à soupe', note: 'concassé' },
        { name: 'Thym', quantity: '6', unit: 'branches' },
        { name: 'Laurier', quantity: '2', unit: 'feuilles' },
        { name: 'Ail', quantity: '6', unit: 'gousses' },
        { name: 'Baies de genièvre', quantity: '6', unit: 'pièces' }
      ],
      ingredients_en: [
        { name: 'Duck legs', quantity: '4', unit: 'pieces' },
        { name: 'Duck fat', quantity: '1', unit: 'kg' },
        { name: 'Coarse salt', quantity: '100', unit: 'g' },
        { name: 'Black pepper', quantity: '1', unit: 'tbsp', note: 'crushed' },
        { name: 'Thyme', quantity: '6', unit: 'sprigs' },
        { name: 'Bay leaves', quantity: '2', unit: 'leaves' },
        { name: 'Garlic', quantity: '6', unit: 'cloves' },
        { name: 'Juniper berries', quantity: '6', unit: 'pieces' }
      ],
      steps: [
        {
          step: 1,
          title: 'Salaison',
          description: 'Frotter les cuisses avec le sel, le poivre et les épices. Couvrir et réfrigérer 24-48h.',
          tip: 'La salaison préserve et parfume la viande.'
        },
        {
          step: 2,
          title: 'Rincer',
          description: 'Rincer les cuisses pour enlever l\'excès de sel. Sécher soigneusement.',
          tip: 'Un bon rinçage évite un confit trop salé.'
        },
        {
          step: 3,
          title: 'Confire',
          description: 'Préchauffer le four à 120°C. Faire fondre la graisse. Immerger les cuisses. Cuire 3h.',
          tip: 'La viande doit frémire, jamais bouillir.'
        },
        {
          step: 4,
          title: 'Test de cuisson',
          description: 'La viande est confite quand un couteau pénètre facilement jusqu\'à l\'os.',
          tip: 'La chair doit se détacher facilement.'
        },
        {
          step: 5,
          title: 'Conservation',
          description: 'Transférer les cuisses dans un bocal. Couvrir de graisse filtrée. Se conserve 3 mois au frais.',
          tip: 'La graisse doit recouvrir entièrement la viande.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Pour servir : poêler côté peau jusqu\'à croustillant. Accompagner de pommes sarladaises.',
          tip: 'Le croustillant de la peau est la signature du confit.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Curing',
          description: 'Rub the legs with salt, pepper and spices. Cover and refrigerate 24-48h.',
          tip: 'Curing preserves and flavors the meat.'
        },
        {
          step: 2,
          title: 'Rinse',
          description: 'Rinse the legs to remove excess salt. Dry thoroughly.',
          tip: 'A good rinse prevents an overly salty confit.'
        },
        {
          step: 3,
          title: 'Confit',
          description: 'Preheat oven to 120°C (250°F). Melt the fat. Submerge the legs. Cook for 3 hours.',
          tip: 'The meat should simmer, never boil.'
        },
        {
          step: 4,
          title: 'Check doneness',
          description: 'The meat is done when a knife penetrates easily to the bone.',
          tip: 'The meat should fall off the bone easily.'
        },
        {
          step: 5,
          title: 'Storage',
          description: 'Transfer the legs to a jar. Cover with strained fat. Keeps 3 months refrigerated.',
          tip: 'The fat must completely cover the meat.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'To serve: pan-fry skin-side down until crispy. Serve with Sarladaises potatoes.',
          tip: 'The crispy skin is the signature of confit.'
        }
      ],
      chefTips: [
        'Le confit se bonifie avec le temps comme un bon vin',
        'Réutilisez la graisse de confit pour de futures cuissons',
        'Servez avec une salade de roquette pour équilibrer le gras'
      ],
      chefTips_en: [
        'Confit improves with time like a fine wine',
        'Reuse the confit fat for future cooking',
        'Serve with arugula salad to balance the richness'
      ],
      nutritionPer100g: {
        calories: 280,
        proteins: 25,
        carbs: 0,
        fat: 20
      }
    },

    cuisses_poulet_champignons: {
      id: 'cuisses_poulet_champignons',
      name: 'Cuisses de poulet aux champignons',
      name_en: 'Chicken Thighs with Mushrooms',
      cutId: 'cuisses',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 45,
      restTime: 0,
      servings: 4,
      icon: '🍗',
      description: 'Des cuisses de poulet dorées avec une sauce forestière aux champignons.',
      description_en: 'Golden chicken thighs with a forest mushroom sauce.',
      ingredients: [
        { name: 'Cuisses de poulet', quantity: '4', unit: 'pièces' },
        { name: 'Champignons de Paris', quantity: '400', unit: 'g' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Chicken thighs', quantity: '4', unit: 'pieces' },
        { name: 'Button mushrooms', quantity: '400', unit: 'g' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'White wine', quantity: '15', unit: 'cl' },
        { name: 'Shallots', quantity: '3', unit: 'pieces' },
        { name: 'Garlic', quantity: '2', unit: 'cloves' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Parsley', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Dorer les cuisses',
          description: 'Saler et poivrer les cuisses. Les dorer dans le beurre à feu moyen-vif, 5 min par côté.',
          tip: 'La peau doit être bien dorée et croustillante.'
        },
        {
          step: 2,
          title: 'Cuire à couvert',
          description: 'Baisser le feu, couvrir et cuire 25 min en retournant à mi-cuisson.',
          tip: 'La cuisson à couvert garde la viande moelleuse.'
        },
        {
          step: 3,
          title: 'Préparer les champignons',
          description: 'Retirer les cuisses. Faire revenir échalotes, ail et champignons 8 min.',
          tip: 'Les champignons doivent être bien dorés.'
        },
        {
          step: 4,
          title: 'La sauce',
          description: 'Déglacer au vin blanc, ajouter le thym et la crème. Laisser réduire 5 min.',
          tip: 'La sauce doit être onctueuse et nappante.'
        },
        {
          step: 5,
          title: 'Finition',
          description: 'Remettre les cuisses 5 min dans la sauce. Parsemer de persil.',
          tip: 'La température à cœur doit atteindre 74°C minimum.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Brown the thighs',
          description: 'Season the thighs with salt and pepper. Brown them in butter over medium-high heat, 5 min per side.',
          tip: 'The skin should be well browned and crispy.'
        },
        {
          step: 2,
          title: 'Cook covered',
          description: 'Lower the heat, cover and cook 25 min, turning halfway through.',
          tip: 'Covered cooking keeps the meat moist.'
        },
        {
          step: 3,
          title: 'Prepare the mushrooms',
          description: 'Remove the thighs. Saute shallots, garlic and mushrooms for 8 min.',
          tip: 'The mushrooms should be well browned.'
        },
        {
          step: 4,
          title: 'The sauce',
          description: 'Deglaze with white wine, add thyme and cream. Let reduce 5 min.',
          tip: 'The sauce should be smooth and coating.'
        },
        {
          step: 5,
          title: 'Finish',
          description: 'Return the thighs to the sauce for 5 min. Sprinkle with parsley.',
          tip: 'Internal temperature should reach at least 74°C (165°F).'
        }
      ],
      chefTips: [
        'Mélangez plusieurs variétés de champignons pour plus de saveur',
        'Vous pouvez ajouter des lardons pour plus de gourmandise',
        'Accompagnez de riz ou de tagliatelles'
      ],
      chefTips_en: [
        'Mix several varieties of mushrooms for more flavor',
        'You can add bacon lardons for extra indulgence',
        'Serve with rice or tagliatelle'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 22,
        carbs: 4,
        fat: 10
      }
    },

    blancs_poulet_basilic: {
      id: 'blancs_poulet_basilic',
      name: 'Blancs de poulet au basilic',
      name_en: 'Chicken Breast with Basil',
      cutId: 'blancs',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🍗',
      description: 'Des blancs de poulet tendres avec une sauce crémeuse au basilic frais.',
      description_en: 'Tender chicken breasts with a creamy fresh basil sauce.',
      ingredients: [
        { name: 'Blancs de poulet', quantity: '4', unit: 'pièces' },
        { name: 'Basilic frais', quantity: '1', unit: 'bouquet' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Parmesan', quantity: '50', unit: 'g', note: 'râpé' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Pignons de pin', quantity: '30', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Chicken breasts', quantity: '4', unit: 'pieces' },
        { name: 'Fresh basil', quantity: '1', unit: 'bunch' },
        { name: 'Heavy cream', quantity: '20', unit: 'cl' },
        { name: 'Parmesan', quantity: '50', unit: 'g', note: 'grated' },
        { name: 'Garlic', quantity: '2', unit: 'cloves' },
        { name: 'Pine nuts', quantity: '30', unit: 'g' },
        { name: 'Olive oil', quantity: '3', unit: 'tbsp' },
        { name: 'Lemon juice', quantity: '1', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la sauce',
          description: 'Mixer basilic, ail, pignons, parmesan et huile. Réserver.',
          tip: 'C\'est un pesto qui servira de base à la sauce.'
        },
        {
          step: 2,
          title: 'Cuire les blancs',
          description: 'Aplatir légèrement les blancs. Saler, poivrer. Cuire 6-7 min par côté à feu moyen.',
          tip: 'Ne pas trop cuire pour garder la tendreté.'
        },
        {
          step: 3,
          title: 'Repos',
          description: 'Laisser reposer les blancs 5 min sous alu.',
          tip: 'Le repos permet aux jus de se redistribuer.'
        },
        {
          step: 4,
          title: 'Finir la sauce',
          description: 'Dans la poêle, verser la crème, le pesto et le jus de citron. Chauffer sans bouillir.',
          tip: 'Le parmesan coagule à haute température.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Trancher les blancs. Napper de sauce. Décorer de feuilles de basilic.',
          tip: 'Accompagnez de pâtes fraîches ou de légumes grillés.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the sauce',
          description: 'Blend basil, garlic, pine nuts, parmesan and oil. Set aside.',
          tip: 'This is a pesto that will serve as the base for the sauce.'
        },
        {
          step: 2,
          title: 'Cook the breasts',
          description: 'Pound the breasts slightly. Season with salt and pepper. Cook 6-7 min per side over medium heat.',
          tip: 'Do not overcook to keep them tender.'
        },
        {
          step: 3,
          title: 'Resting',
          description: 'Let the breasts rest 5 min under foil.',
          tip: 'Resting allows the juices to redistribute.'
        },
        {
          step: 4,
          title: 'Finish the sauce',
          description: 'In the pan, pour the cream, pesto and lemon juice. Heat without boiling.',
          tip: 'Parmesan curdles at high temperatures.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Slice the breasts. Drizzle with sauce. Garnish with basil leaves.',
          tip: 'Serve with fresh pasta or grilled vegetables.'
        }
      ],
      chefTips: [
        'Température à cœur : 74°C pour une cuisson sûre',
        'Utilisez du basilic grand vert ou génois pour plus de parfum',
        'Vous pouvez préparer le pesto à l\'avance'
      ],
      chefTips_en: [
        'Internal temperature: 74°C (165°F) for safe cooking',
        'Use large-leaf or Genovese basil for more fragrance',
        'You can prepare the pesto in advance'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 28,
        carbs: 2,
        fat: 8
      }
    },

    escalope_dinde_milanaise: {
      id: 'escalope_dinde_milanaise',
      name: 'Escalope de dinde à la milanaise',
      name_en: 'Turkey Cutlet Milanese',
      cutId: 'escalope',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 10,
      restTime: 0,
      servings: 2,
      icon: '🦃',
      description: 'Escalopes de dinde panées croustillantes, servies avec citron et roquette.',
      description_en: 'Crispy breaded turkey cutlets served with lemon and arugula.',
      ingredients: [
        { name: 'Escalopes de dinde', quantity: '2', unit: 'pièces', note: '150g chacune' },
        { name: 'Chapelure', quantity: '100', unit: 'g' },
        { name: 'Parmesan', quantity: '30', unit: 'g', note: 'râpé finement' },
        { name: 'Oeufs', quantity: '2', unit: 'pièces' },
        { name: 'Farine', quantity: '50', unit: 'g' },
        { name: 'Huile de tournesol', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Citron', quantity: '1', unit: 'pièce' },
        { name: 'Roquette', quantity: '1', unit: 'poignée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Turkey cutlets', quantity: '2', unit: 'pieces', note: '150g each' },
        { name: 'Breadcrumbs', quantity: '100', unit: 'g' },
        { name: 'Parmesan', quantity: '30', unit: 'g', note: 'finely grated' },
        { name: 'Eggs', quantity: '2', unit: 'pieces' },
        { name: 'Flour', quantity: '50', unit: 'g' },
        { name: 'Sunflower oil', quantity: '10', unit: 'cl' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Lemon', quantity: '1', unit: 'piece' },
        { name: 'Arugula', quantity: '1', unit: 'handful' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Aplatir les escalopes',
          description: 'Placer chaque escalope entre deux feuilles de film alimentaire. Aplatir au rouleau ou batteur jusqu\'à 5mm d\'épaisseur uniforme.',
          tip: 'L\'épaisseur régulière assure une cuisson homogène et une panure qui adhère bien.'
        },
        {
          step: 2,
          title: 'Préparer la panure',
          description: 'Mélanger la chapelure avec le parmesan râpé. Battre les oeufs dans un plat creux. Mettre la farine dans un troisième plat.',
          tip: 'Le parmesan apporte saveur et croustillant à la milanaise.'
        },
        {
          step: 3,
          title: 'Paner les escalopes',
          description: 'Saler et poivrer les escalopes. Les passer dans la farine (secouer l\'excès), puis dans l\'oeuf battu, enfin dans le mélange chapelure-parmesan. Presser pour bien faire adhérer.',
          tip: 'Une main pour le sec, une main pour l\'humide - technique du chef !'
        },
        {
          step: 4,
          title: 'Cuisson',
          description: 'Chauffer l\'huile et le beurre dans une grande poêle à feu moyen-vif. Quand le beurre mousse, cuire les escalopes 3-4 min par côté jusqu\'à ce qu\'elles soient bien dorées.',
          tip: 'Ne pas cuire à feu trop vif - le beurre brûlerait avant que la panure ne dore.'
        },
        {
          step: 5,
          title: 'Égoutter et servir',
          description: 'Déposer sur du papier absorbant 30 secondes. Dresser sur assiette chaude avec roquette, quartiers de citron et copeaux de parmesan.',
          tip: 'Servir immédiatement - les escalopes panées n\'attendent pas !'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Flatten the cutlets',
          description: 'Place each cutlet between two sheets of plastic wrap. Pound with a rolling pin or mallet to a uniform 5mm thickness.',
          tip: 'Even thickness ensures uniform cooking and proper breading adhesion.'
        },
        {
          step: 2,
          title: 'Prepare the breading',
          description: 'Mix breadcrumbs with grated parmesan. Beat eggs in a shallow dish. Place flour in a third dish.',
          tip: 'The parmesan adds flavor and crunch to the Milanese.'
        },
        {
          step: 3,
          title: 'Bread the cutlets',
          description: 'Season cutlets with salt and pepper. Dredge in flour (shake off excess), dip in beaten egg, then coat in breadcrumb-parmesan mixture. Press to adhere well.',
          tip: 'One hand for dry, one hand for wet - chef\'s technique!'
        },
        {
          step: 4,
          title: 'Cooking',
          description: 'Heat oil and butter in a large pan over medium-high heat. When butter foams, cook cutlets 3-4 min per side until golden brown.',
          tip: 'Don\'t cook over too high heat - the butter would burn before the breading browns.'
        },
        {
          step: 5,
          title: 'Drain and serve',
          description: 'Place on paper towels for 30 seconds. Plate on warm dishes with arugula, lemon wedges and parmesan shavings.',
          tip: 'Serve immediately - breaded cutlets don\'t wait!'
        }
      ],
      chefTips: [
        'Pour une version plus légère, cuire au four à 200°C pendant 20 min en retournant à mi-cuisson',
        'Accompagnez de spaghetti à la tomate pour un repas complet à l\'italienne',
        'La dinde est plus maigre que le veau mais tout aussi délicieuse en milanaise'
      ],
      chefTips_en: [
        'For a lighter version, bake at 200°C (400°F) for 20 min, turning halfway through',
        'Serve with spaghetti and tomato sauce for a complete Italian meal',
        'Turkey is leaner than veal but just as delicious Milanese-style'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 26,
        carbs: 12,
        fat: 6
      }
    },

    ailes_poulet_buffalo: {
      id: 'ailes_poulet_buffalo',
      name: 'Ailes de poulet Buffalo',
      name_en: 'Buffalo Chicken Wings',
      cutId: 'ailes',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 45,
      restTime: 0,
      servings: 4,
      icon: '🍗',
      description: 'Les ailes de poulet croustillantes enrobées de sauce piquante Buffalo, un classique américain.',
      description_en: 'Crispy chicken wings coated in Buffalo hot sauce, an American classic.',
      ingredients: [
        { name: 'Ailes de poulet', quantity: '1', unit: 'kg', note: 'coupées en deux (drumettes et ailettes)' },
        { name: 'Sauce piquante type Tabasco', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '80', unit: 'g' },
        { name: 'Vinaigre blanc', quantity: '1', unit: 'c. à soupe' },
        { name: 'Ail en poudre', quantity: '1', unit: 'c. à café' },
        { name: 'Paprika', quantity: '1', unit: 'c. à café' },
        { name: 'Huile végétale', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Chicken wings', quantity: '1', unit: 'kg', note: 'cut in two (drumettes and wingettes)' },
        { name: 'Hot sauce (Tabasco type)', quantity: '10', unit: 'cl' },
        { name: 'Butter', quantity: '80', unit: 'g' },
        { name: 'White vinegar', quantity: '1', unit: 'tbsp' },
        { name: 'Garlic powder', quantity: '1', unit: 'tsp' },
        { name: 'Paprika', quantity: '1', unit: 'tsp' },
        { name: 'Vegetable oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les ailes',
          description: 'Sécher soigneusement les ailes. Les enrober d\'huile, paprika, ail en poudre et sel.',
          tip: 'Des ailes bien sèches deviennent croustillantes au four.'
        },
        {
          step: 2,
          title: 'Cuire au four',
          description: 'Disposer sur une grille au-dessus d\'une plaque. Enfourner à 200°C pendant 45 min en retournant à mi-cuisson.',
          tip: 'La grille permet à l\'air de circuler pour un croustillant optimal.'
        },
        {
          step: 3,
          title: 'Préparer la sauce Buffalo',
          description: 'Faire fondre le beurre. Ajouter la sauce piquante et le vinaigre. Bien mélanger.',
          tip: 'Ajustez le piquant selon vos goûts.'
        },
        {
          step: 4,
          title: 'Enrober',
          description: 'Mettre les ailes chaudes dans un grand saladier. Verser la sauce et mélanger pour bien enrober.',
          tip: 'Les ailes doivent être uniformément couvertes.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Servir immédiatement avec du céleri branche et de la sauce blue cheese ou ranch.',
          tip: 'Le céleri et la sauce fraîche calment le piquant.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the wings',
          description: 'Pat the wings thoroughly dry. Coat with oil, paprika, garlic powder and salt.',
          tip: 'Well-dried wings become crispy in the oven.'
        },
        {
          step: 2,
          title: 'Bake',
          description: 'Arrange on a rack over a baking sheet. Bake at 200°C (400°F) for 45 min, turning halfway through.',
          tip: 'The rack allows air to circulate for optimal crispiness.'
        },
        {
          step: 3,
          title: 'Prepare the Buffalo sauce',
          description: 'Melt the butter. Add hot sauce and vinegar. Mix well.',
          tip: 'Adjust the heat level to your taste.'
        },
        {
          step: 4,
          title: 'Coat',
          description: 'Place hot wings in a large bowl. Pour sauce over and toss to coat evenly.',
          tip: 'Wings should be uniformly coated.'
        },
        {
          step: 5,
          title: 'Serving',
          description: 'Serve immediately with celery sticks and blue cheese or ranch dressing.',
          tip: 'The celery and cool dressing tame the heat.'
        }
      ],
      chefTips: [
        'Pour encore plus de croustillant, passez sous le gril 2-3 min après l\'enrobage',
        'La vraie recette vient de Buffalo, New York (1964)',
        'Proposez plusieurs niveaux de piquant à table'
      ],
      chefTips_en: [
        'For even more crispiness, broil for 2-3 min after coating',
        'The original recipe comes from Buffalo, New York (1964)',
        'Offer several heat levels at the table'
      ],
      nutritionPer100g: {
        calories: 290,
        proteins: 22,
        carbs: 2,
        fat: 22
      }
    },

    canard_entier_orange: {
      id: 'canard_entier_orange',
      name: 'Canard à l\'orange',
      name_en: 'Duck a l\'Orange',
      cutId: 'canard_entier',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 120,
      restTime: 15,
      servings: 4,
      icon: '🦆',
      description: 'Le canard rôti classique avec sa sauce à l\'orange bigarade, un grand classique français.',
      description_en: 'The classic roast duck with bitter orange sauce, a French culinary icon.',
      ingredients: [
        { name: 'Canard entier', quantity: '1', unit: 'pièce', note: 'environ 2 kg, prêt à cuire' },
        { name: 'Oranges', quantity: '4', unit: 'pièces', note: 'bio de préférence' },
        { name: 'Sucre', quantity: '100', unit: 'g' },
        { name: 'Vinaigre de vin', quantity: '5', unit: 'cl' },
        { name: 'Grand Marnier', quantity: '3', unit: 'cl', note: 'optionnel' },
        { name: 'Fond de canard ou volaille', quantity: '30', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Whole duck', quantity: '1', unit: 'piece', note: 'about 2 kg, oven-ready' },
        { name: 'Oranges', quantity: '4', unit: 'pieces', note: 'organic preferably' },
        { name: 'Sugar', quantity: '100', unit: 'g' },
        { name: 'Wine vinegar', quantity: '5', unit: 'cl' },
        { name: 'Grand Marnier', quantity: '3', unit: 'cl', note: 'optional' },
        { name: 'Duck or poultry stock', quantity: '30', unit: 'cl' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le canard',
          description: 'Sortir le canard 1h avant. Piquer la peau sans atteindre la chair. Saler et poivrer l\'intérieur et l\'extérieur.',
          tip: 'Les trous permettent au gras de s\'écouler.'
        },
        {
          step: 2,
          title: 'Rôtir',
          description: 'Enfourner à 180°C, cuisse vers le haut. Cuire 30 min, retourner, poursuivre 1h30 en arrosant régulièrement.',
          tip: 'Videz le gras de la lèchefrite pendant la cuisson.'
        },
        {
          step: 3,
          title: 'Préparer les zestes',
          description: 'Prélever les zestes de 2 oranges en julienne fine. Les blanchir 2 fois. Presser le jus de toutes les oranges.',
          tip: 'Le blanchiment retire l\'amertume des zestes.'
        },
        {
          step: 4,
          title: 'Faire le caramel',
          description: 'Cuire le sucre à sec jusqu\'à caramel blond. Déglacer au vinaigre puis au jus d\'orange. Ajouter le fond et le Grand Marnier.',
          tip: 'Attention aux éclaboussures au déglaçage !'
        },
        {
          step: 5,
          title: 'Finir la sauce',
          description: 'Réduire la sauce de moitié. Monter au beurre. Ajouter les zestes blanchis.',
          tip: 'La sauce doit être sirupeuse et brillante.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer le canard 15 min. Découper. Napper de sauce à l\'orange.',
          tip: 'Présenter avec des quartiers d\'orange fraîche.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the duck',
          description: 'Take the duck out 1 hour before. Prick the skin without piercing the meat. Season inside and out with salt and pepper.',
          tip: 'The holes allow the fat to render.'
        },
        {
          step: 2,
          title: 'Roast',
          description: 'Roast at 180°C (350°F), leg side up. Cook 30 min, turn over, continue for 1h30, basting regularly.',
          tip: 'Drain the fat from the roasting pan during cooking.'
        },
        {
          step: 3,
          title: 'Prepare the zest',
          description: 'Remove zest from 2 oranges in fine julienne. Blanch twice. Juice all the oranges.',
          tip: 'Blanching removes bitterness from the zest.'
        },
        {
          step: 4,
          title: 'Make the caramel',
          description: 'Cook sugar dry until light caramel. Deglaze with vinegar then orange juice. Add stock and Grand Marnier.',
          tip: 'Watch for splatters when deglazing!'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Reduce sauce by half. Whisk in butter. Add blanched zest.',
          tip: 'The sauce should be syrupy and glossy.'
        },
        {
          step: 6,
          title: 'Serving',
          description: 'Let the duck rest 15 min. Carve. Drizzle with orange sauce.',
          tip: 'Present with fresh orange segments.'
        }
      ],
      chefTips: [
        'Le canard à l\'orange est un classique de la cuisine bourgeoise française',
        'Le gras récupéré est excellent pour les pommes de terre sarladaises',
        'Accompagner de navets glacés ou de purée de céleri'
      ],
      chefTips_en: [
        'Duck a l\'orange is a classic of French bourgeois cuisine',
        'The rendered fat is excellent for Sarladaises potatoes',
        'Serve with glazed turnips or celery root puree'
      ],
      nutritionPer100g: {
        calories: 280,
        proteins: 20,
        carbs: 10,
        fat: 18
      }
    },

    dinde_entiere_farcie: {
      id: 'dinde_entiere_farcie',
      name: 'Dinde entière farcie aux marrons',
      name_en: 'Whole Roast Turkey Stuffed with Chestnuts',
      cutId: 'entiere',
      difficulty: 'moyen',
      prepTime: 60,
      cookTime: 240,
      restTime: 30,
      servings: 10,
      icon: '🦃',
      description: 'La dinde de fête farcie aux marrons et aux herbes, dorée à souhait.',
      description_en: 'The festive turkey stuffed with chestnuts and herbs, perfectly golden.',
      ingredients: [
        { name: 'Dinde entière', quantity: '4', unit: 'kg', note: 'prête à cuire' },
        { name: 'Marrons entiers', quantity: '500', unit: 'g', note: 'cuits ou en bocal' },
        { name: 'Chair à saucisse', quantity: '400', unit: 'g' },
        { name: 'Foies de volaille', quantity: '200', unit: 'g' },
        { name: 'Oignon', quantity: '2', unit: 'pièces' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Beurre', quantity: '150', unit: 'g', note: 'ramolli' },
        { name: 'Thym, sauge', quantity: '4', unit: 'branches de chaque' },
        { name: 'Bouillon de volaille', quantity: '50', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Whole turkey', quantity: '4', unit: 'kg', note: 'oven-ready' },
        { name: 'Whole chestnuts', quantity: '500', unit: 'g', note: 'cooked or jarred' },
        { name: 'Sausage meat', quantity: '400', unit: 'g' },
        { name: 'Poultry livers', quantity: '200', unit: 'g' },
        { name: 'Onion', quantity: '2', unit: 'pieces' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Butter', quantity: '150', unit: 'g', note: 'softened' },
        { name: 'Thyme, sage', quantity: '4', unit: 'sprigs each' },
        { name: 'Poultry stock', quantity: '50', unit: 'cl' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer la farce',
          description: 'Faire revenir les oignons hachés et les foies. Hacher grossièrement. Mélanger avec la chair à saucisse, les marrons émiettés et le cognac. Assaisonner.',
          tip: 'La farce doit être bien relevée car la dinde est fade.'
        },
        {
          step: 2,
          title: 'Farcir la dinde',
          description: 'Remplir la cavité de farce sans tasser. Fermer avec des piques ou recoudre. Brider si nécessaire.',
          tip: 'Ne pas trop remplir car la farce gonfle.'
        },
        {
          step: 3,
          title: 'Préparer la peau',
          description: 'Glisser du beurre ramolli mélangé aux herbes sous la peau des blancs. Badigeonner tout l\'extérieur de beurre.',
          tip: 'Le beurre sous la peau garde les blancs moelleux.'
        },
        {
          step: 4,
          title: 'Rôtir',
          description: 'Enfourner à 180°C. Compter 45 min par kg. Arroser très régulièrement avec le jus et le bouillon.',
          tip: 'Couvrir d\'alu si ça colore trop vite.'
        },
        {
          step: 5,
          title: 'Vérifier la cuisson',
          description: 'Piquer entre la cuisse et le corps : le jus doit être clair. Température à cœur : 74°C.',
          tip: 'Mieux vaut vérifier que servir une dinde crue !'
        },
        {
          step: 6,
          title: 'Repos et service',
          description: 'Laisser reposer 30 min sous alu avant de découper. Servir avec la farce et le jus dégraissé.',
          tip: 'Le repos est indispensable pour une dinde juteuse.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the stuffing',
          description: 'Saute the chopped onions and livers. Roughly chop. Mix with sausage meat, crumbled chestnuts and cognac. Season.',
          tip: 'The stuffing should be well seasoned as turkey is bland.'
        },
        {
          step: 2,
          title: 'Stuff the turkey',
          description: 'Fill the cavity with stuffing without packing. Close with skewers or sew shut. Truss if needed.',
          tip: 'Do not overfill as the stuffing expands.'
        },
        {
          step: 3,
          title: 'Prepare the skin',
          description: 'Slide softened butter mixed with herbs under the breast skin. Brush the entire exterior with butter.',
          tip: 'Butter under the skin keeps the breast moist.'
        },
        {
          step: 4,
          title: 'Roast',
          description: 'Roast at 180°C (350°F). Allow 45 min per kg. Baste very regularly with juices and stock.',
          tip: 'Cover with foil if browning too quickly.'
        },
        {
          step: 5,
          title: 'Check doneness',
          description: 'Pierce between thigh and body: juices should run clear. Internal temperature: 74°C (165°F).',
          tip: 'Better to check than serve undercooked turkey!'
        },
        {
          step: 6,
          title: 'Rest and serve',
          description: 'Let rest 30 min under foil before carving. Serve with stuffing and defatted juices.',
          tip: 'Resting is essential for a juicy turkey.'
        }
      ],
      chefTips: [
        'Sortez la dinde du frigo 2h avant la cuisson',
        'Gardez le cou et les abats pour un fond de sauce',
        'Tradition : on sert la dinde à Noël et Thanksgiving'
      ],
      chefTips_en: [
        'Take the turkey out of the fridge 2 hours before cooking',
        'Keep the neck and giblets for making gravy',
        'Tradition: turkey is served at Christmas and Thanksgiving'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 24,
        carbs: 8,
        fat: 8
      }
    },

    cuisse_dinde_confite: {
      id: 'cuisse_dinde_confite',
      name: 'Cuisse de dinde confite aux herbes',
      name_en: 'Herb-Confit Turkey Leg',
      cutId: 'cuisse',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🦃',
      description: 'La cuisse de dinde moelleuse et fondante, confite lentement au four avec des herbes aromatiques.',
      description_en: 'Moist and tender turkey leg, slowly confited in the oven with aromatic herbs.',
      ingredients: [
        { name: 'Cuisses de dinde', quantity: '2', unit: 'grosses', note: 'environ 600g chacune' },
        { name: 'Graisse de canard', quantity: '200', unit: 'g', note: 'ou huile d\'olive' },
        { name: 'Ail', quantity: '8', unit: 'gousses' },
        { name: 'Thym', quantity: '6', unit: 'branches' },
        { name: 'Romarin', quantity: '2', unit: 'branches' },
        { name: 'Laurier', quantity: '3', unit: 'feuilles' },
        { name: 'Gros sel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Poivre en grains', quantity: '1', unit: 'c. à café' }
      ],
      ingredients_en: [
        { name: 'Turkey legs', quantity: '2', unit: 'large', note: 'about 600g each' },
        { name: 'Duck fat', quantity: '200', unit: 'g', note: 'or olive oil' },
        { name: 'Garlic', quantity: '8', unit: 'cloves' },
        { name: 'Thyme', quantity: '6', unit: 'sprigs' },
        { name: 'Rosemary', quantity: '2', unit: 'sprigs' },
        { name: 'Bay leaves', quantity: '3', unit: 'leaves' },
        { name: 'Coarse salt', quantity: '2', unit: 'tbsp' },
        { name: 'Peppercorns', quantity: '1', unit: 'tsp' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saler les cuisses',
          description: 'Frotter les cuisses de gros sel. Parsemer de thym effeuillé. Réfrigérer 4h ou une nuit.',
          tip: 'Le sel pénètre et assaisonne la viande.'
        },
        {
          step: 2,
          title: 'Préparer',
          description: 'Rincer les cuisses, bien les sécher. Préchauffer le four à 140°C.',
          tip: 'Sécher est important pour que la peau croustille.'
        },
        {
          step: 3,
          title: 'Confire',
          description: 'Disposer les cuisses dans un plat. Ajouter l\'ail, les herbes et le poivre. Verser la graisse fondue. Couvrir de papier alu.',
          tip: 'La graisse doit couvrir les cuisses à moitié.'
        },
        {
          step: 4,
          title: 'Cuire lentement',
          description: 'Enfourner pendant 3h. La chair doit se détacher facilement de l\'os.',
          tip: 'La cuisson lente transforme le collagène en gélatine.'
        },
        {
          step: 5,
          title: 'Croustiller et servir',
          description: 'Retirer l\'alu, augmenter à 200°C pendant 15 min pour dorer la peau. Servir avec une salade.',
          tip: 'La peau doit être dorée et croustillante.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Salt the legs',
          description: 'Rub the legs with coarse salt. Sprinkle with thyme leaves. Refrigerate 4 hours or overnight.',
          tip: 'The salt penetrates and seasons the meat.'
        },
        {
          step: 2,
          title: 'Prepare',
          description: 'Rinse the legs, dry them well. Preheat oven to 140°C (285°F).',
          tip: 'Drying is important for crispy skin.'
        },
        {
          step: 3,
          title: 'Confit',
          description: 'Place the legs in a baking dish. Add garlic, herbs and pepper. Pour in melted fat. Cover with foil.',
          tip: 'The fat should cover the legs halfway.'
        },
        {
          step: 4,
          title: 'Slow cook',
          description: 'Bake for 3 hours. The meat should fall off the bone easily.',
          tip: 'Slow cooking transforms collagen into gelatin.'
        },
        {
          step: 5,
          title: 'Crisp and serve',
          description: 'Remove foil, increase to 200°C (400°F) for 15 min to brown the skin. Serve with a salad.',
          tip: 'The skin should be golden and crispy.'
        }
      ],
      chefTips: [
        'La cuisse de dinde est plus goûteuse et moins sèche que le blanc',
        'Conservez la graisse filtrée pour d\'autres confits ou des pommes de terre',
        'Se conserve plusieurs jours au frigo, couverte de graisse'
      ],
      chefTips_en: [
        'Turkey leg is more flavorful and less dry than breast meat',
        'Save the strained fat for other confits or potatoes',
        'Keeps several days in the fridge, covered with fat'
      ],
      nutritionPer100g: {
        calories: 210,
        proteins: 25,
        carbs: 0,
        fat: 12
      }
    }
  },

  // ==================== GIBIER ====================
  gibier: {
    civet_sanglier: {
      id: 'civet_sanglier',
      name: 'Civet de sanglier',
      name_en: 'Wild Boar Stew',
      cutId: 'roti_sanglier',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🐗',
      description: 'Un civet traditionnel, mariné longuement et mijoté aux saveurs forestières.',
      description_en: 'A traditional stew, marinated for a long time and simmered with forest flavors.',
      ingredients: [
        { name: 'Épaule de sanglier', quantity: '1.5', unit: 'kg', note: 'en cubes' },
        { name: 'Vin rouge corsé', quantity: '1', unit: 'L', note: 'Cahors, Madiran' },
        { name: 'Lardons fumés', quantity: '200', unit: 'g' },
        { name: 'Oignons', quantity: '3', unit: 'pièces' },
        { name: 'Carottes', quantity: '3', unit: 'pièces' },
        { name: 'Champignons', quantity: '300', unit: 'g', note: 'cèpes ou champignons de Paris' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce', note: 'thym, laurier, baies de genièvre' },
        { name: 'Fond de gibier', quantity: '25', unit: 'cl', note: 'ou fond de veau' },
        { name: 'Farine', quantity: '3', unit: 'c. à soupe' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Chocolat noir', quantity: '20', unit: 'g', note: 'optionnel' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Wild boar shoulder', quantity: '1.5', unit: 'kg', note: 'cubed' },
        { name: 'Full-bodied red wine', quantity: '1', unit: 'L', note: 'Cahors, Madiran' },
        { name: 'Smoked lardons', quantity: '200', unit: 'g' },
        { name: 'Onions', quantity: '3', unit: 'pieces' },
        { name: 'Carrots', quantity: '3', unit: 'pieces' },
        { name: 'Mushrooms', quantity: '300', unit: 'g', note: 'porcini or button mushrooms' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece', note: 'thyme, bay leaf, juniper berries' },
        { name: 'Game stock', quantity: '25', unit: 'cl', note: 'or veal stock' },
        { name: 'Flour', quantity: '3', unit: 'tbsp' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Dark chocolate', quantity: '20', unit: 'g', note: 'optional' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Marinade',
          description: 'Mariner la viande 24-48h avec le vin, 1 oignon émincé, 1 carotte, le bouquet garni et quelques grains de poivre.',
          tip: 'Plus la marinade est longue, plus le gibier sera tendre et moins fort.'
        },
        {
          step: 2,
          title: 'Égoutter',
          description: 'Égoutter la viande et la sécher soigneusement. Filtrer et réserver la marinade.',
          tip: 'La viande humide ne saisira pas correctement.'
        },
        {
          step: 3,
          title: 'Rissoler',
          description: 'Faire revenir les lardons. Réserver. Saisir les cubes de viande par portions. Saupoudrer de farine.',
          tip: 'Ne surchargez pas la cocotte pour une bonne coloration.'
        },
        {
          step: 4,
          title: 'Flamber',
          description: 'Remettre toute la viande, flamber au cognac. Ajouter la marinade et le fond. Porter à frémissement.',
          tip: 'Attention aux flammes ! Éloignez-vous de la hotte.'
        },
        {
          step: 5,
          title: 'Braiser',
          description: 'Ajouter les oignons et carottes restants en morceaux. Couvrir et cuire 2h30-3h à 150°C.',
          tip: 'La viande doit être fondante à la fourchette.'
        },
        {
          step: 6,
          title: 'Finitions',
          description: 'Ajouter les champignons et lardons. Poursuivre 30 min. Incorporer le chocolat râpé. Rectifier.',
          tip: 'Le chocolat arrondit la sauce sans la sucrer.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Marinade', description: 'Marinate the meat 24-48h with wine, 1 sliced onion, 1 carrot, bouquet garni and a few peppercorns.', tip: 'The longer the marinade, the more tender and milder the game will be.' },
        { step: 2, title: 'Drain', description: 'Drain the meat and dry it thoroughly. Strain and reserve the marinade.', tip: 'Wet meat will not sear properly.' },
        { step: 3, title: 'Brown', description: 'Sauté the lardons. Set aside. Sear the meat cubes in batches. Dust with flour.', tip: 'Do not overcrowd the pot for proper browning.' },
        { step: 4, title: 'Flambé', description: 'Return all the meat, flambé with cognac. Add the marinade and stock. Bring to a simmer.', tip: 'Watch out for flames! Step away from the range hood.' },
        { step: 5, title: 'Braise', description: 'Add the remaining onions and carrots in chunks. Cover and cook 2.5-3h at 150°C.', tip: 'The meat should be fork-tender.' },
        { step: 6, title: 'Finishing', description: 'Add mushrooms and lardons. Continue 30 min. Stir in grated chocolate. Adjust seasoning.', tip: 'The chocolate rounds out the sauce without sweetening it.' }
      ],
      chefTips: [
        'Le civet est encore meilleur réchauffé le lendemain',
        'Servez avec des spätzle, de la polenta ou des pâtes fraîches',
        'Les baies de genièvre sont indispensables pour le goût typique'
      ],
      chefTips_en: [
        'The stew is even better reheated the next day',
        'Serve with spätzle, polenta or fresh pasta',
        'Juniper berries are essential for the typical flavor'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 24,
        carbs: 4,
        fat: 9
      }
    },

    faisan_roti: {
      id: 'faisan_roti',
      name: 'Faisan rôti aux pommes et calvados',
      name_en: 'Roast Pheasant with Apples and Calvados',
      cutId: 'faisan',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 50,
      restTime: 10,
      servings: 4,
      icon: '🐦',
      description: 'Un faisan bardé et rôti, accompagné de pommes caramélisées au calvados.',
      description_en: 'A barded and roasted pheasant, accompanied by caramelized apples with Calvados.',
      ingredients: [
        { name: 'Faisan', quantity: '1', unit: 'pièce', note: 'environ 1kg' },
        { name: 'Bardes de lard', quantity: '4', unit: 'tranches' },
        { name: 'Pommes', quantity: '4', unit: 'pièces', note: 'reinettes ou goldens' },
        { name: 'Calvados', quantity: '8', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Pheasant', quantity: '1', unit: 'piece', note: 'about 1kg' },
        { name: 'Lard bards', quantity: '4', unit: 'slices' },
        { name: 'Apples', quantity: '4', unit: 'pieces', note: 'reinettes or golden' },
        { name: 'Calvados', quantity: '8', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Poultry stock', quantity: '15', unit: 'cl' },
        { name: 'Thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparation',
          description: 'Préchauffer le four à 200°C. Saler et poivrer l\'intérieur du faisan. Y mettre du thym et 20g de beurre.',
          tip: 'Le faisan doit être faisandé 3-5 jours pour développer ses arômes.'
        },
        {
          step: 2,
          title: 'Barder',
          description: 'Recouvrir les blancs avec les bardes de lard. Ficeler pour maintenir.',
          tip: 'Le lard protège la chair délicate du dessèchement.'
        },
        {
          step: 3,
          title: 'Cuisson',
          description: 'Saisir le faisan dans 20g de beurre. Enfourner 40 min. Arroser toutes les 10 min.',
          tip: 'Retirer les bardes 10 min avant la fin pour dorer la peau.'
        },
        {
          step: 4,
          title: 'Préparer les pommes',
          description: 'Peler les pommes, les couper en quartiers. Les faire dorer dans le reste du beurre. Flamber au calvados.',
          tip: 'Les pommes doivent rester fermes.'
        },
        {
          step: 5,
          title: 'La sauce',
          description: 'Retirer le faisan. Déglacer avec le fond. Ajouter la crème et un peu de calvados. Réduire 5 min.',
          tip: 'Passez la sauce au chinois pour plus de finesse.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer le faisan 10 min. Découper et dresser avec les pommes. Napper de sauce.',
          tip: 'Les cuisses peuvent être servies séparément, elles sont plus cuites.'
        }
      ],
      steps_en: [
        { step: 1, title: 'Preparation', description: 'Preheat oven to 200°C. Season inside of pheasant with salt and pepper. Add thyme and 20g butter.', tip: 'The pheasant should be hung 3-5 days to develop its flavors.' },
        { step: 2, title: 'Barding', description: 'Cover the breasts with lard bards. Tie to secure.', tip: 'The lard protects the delicate meat from drying out.' },
        { step: 3, title: 'Cooking', description: 'Sear the pheasant in 20g butter. Roast 40 min. Baste every 10 min.', tip: 'Remove the bards 10 min before end to brown the skin.' },
        { step: 4, title: 'Prepare the apples', description: 'Peel apples, cut into quarters. Brown in remaining butter. Flambé with Calvados.', tip: 'Apples should stay firm.' },
        { step: 5, title: 'The sauce', description: 'Remove pheasant. Deglaze with stock. Add cream and a little Calvados. Reduce 5 min.', tip: 'Strain sauce through a sieve for more refinement.' },
        { step: 6, title: 'Serving', description: 'Rest pheasant 10 min. Carve and plate with apples. Drizzle with sauce.', tip: 'Legs can be served separately, they are more cooked.' }
      ],
      chefTips: [
        'La température à cœur doit atteindre 74°C minimum',
        'Le faisan peut être farci aux marrons pour les fêtes',
        'Le calvados peut être remplacé par du cognac ou de l\'armagnac'
      ],
      chefTips_en: [
        'Internal temperature should reach at least 74°C',
        'Pheasant can be stuffed with chestnuts for holidays',
        'Calvados can be replaced with cognac or armagnac'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 28,
        carbs: 6,
        fat: 6
      }
    },

    filet_cerf_airelles: {
      id: 'filet_cerf_airelles',
      name: 'Filet de cerf aux airelles',
      name_en: 'Venison Fillet with Lingonberries',
      cutId: 'filet_cerf',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 20,
      restTime: 8,
      servings: 4,
      icon: '🦌',
      description: 'Un filet de cerf rosé accompagné d\'une sauce aux airelles, gibier noble par excellence.',
      description_en: 'A pink venison fillet with lingonberry sauce, noble game par excellence.',
      ingredients: [
        { name: 'Filet de cerf', quantity: '600', unit: 'g' },
        { name: 'Airelles', quantity: '150', unit: 'g', note: 'fraîches ou en bocal' },
        { name: 'Vin rouge corsé', quantity: '20', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '20', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Baies de genièvre', quantity: '6', unit: 'pièces', note: 'écrasées' },
        { name: 'Thym', quantity: '3', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Venison fillet', quantity: '600', unit: 'g' },
        { name: 'Lingonberries', quantity: '150', unit: 'g', note: 'fresh or jarred' },
        { name: 'Full-bodied red wine', quantity: '20', unit: 'cl' },
        { name: 'Game stock', quantity: '20', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Shallots', quantity: '2', unit: 'pieces' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Juniper berries', quantity: '6', unit: 'pieces', note: 'crushed' },
        { name: 'Thyme', quantity: '3', unit: 'sprigs' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Tempérer',
          description: 'Sortir le filet 30 min avant. Saler et poivrer.',
          tip: 'Le cerf est très maigre, il doit être cuit rosé.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Dans une poêle très chaude avec le beurre, saisir le filet 2 min sur chaque face.',
          tip: 'Une croûte dorée est essentielle pour la saveur.'
        },
        {
          step: 3,
          title: 'Rôtir',
          description: 'Transférer au four à 180°C pour 10-12 min. Viser 52-54°C à cœur pour rosé.',
          tip: 'Le thermomètre est indispensable pour le gibier.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Dans la poêle, faire revenir échalotes et genièvre. Déglacer au vin rouge, réduire.',
          tip: 'Grattez bien les sucs de cuisson.'
        },
        {
          step: 5,
          title: 'Finir la sauce',
          description: 'Ajouter le fond, la crème et les airelles. Réduire 5 min. Monter au beurre.',
          tip: 'Les airelles apportent l\'acidité qui équilibre le gibier.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer le filet 8 min. Trancher en médaillons. Napper de sauce.',
          tip: 'Accompagnez de spätzle ou de purée de céleri.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Temper',
          description: 'Take the fillet out 30 min before. Season with salt and pepper.',
          tip: 'Venison is very lean, it must be cooked pink.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'In a very hot pan with butter, sear the fillet 2 min on each side.',
          tip: 'A golden crust is essential for flavor.'
        },
        {
          step: 3,
          title: 'Roast',
          description: 'Transfer to oven at 180°C for 10-12 min. Aim for 52-54°C internal for pink.',
          tip: 'A thermometer is essential for game.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'In the pan, sauté shallots and juniper. Deglaze with red wine, reduce.',
          tip: 'Scrape up the cooking juices well.'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Add stock, cream and lingonberries. Reduce 5 min. Finish with butter.',
          tip: 'The lingonberries provide the acidity that balances the game.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Rest the fillet 8 min. Slice into medallions. Coat with sauce.',
          tip: 'Serve with spätzle or celery purée.'
        }
      ],
      chefTips: [
        'Ne dépassez jamais la cuisson à point, le cerf deviendrait sec',
        'Les airelles peuvent être remplacées par des groseilles',
        'Le genièvre est l\'épice signature du gibier'
      ],
      chefTips_en: [
        'Never cook beyond medium, venison would become dry',
        'Lingonberries can be replaced with redcurrants',
        'Juniper is the signature spice for game'
      ],
      nutritionPer100g: {
        calories: 165,
        proteins: 30,
        carbs: 4,
        fat: 4
      }
    },

    rable_lievre_royale: {
      id: 'rable_lievre_royale',
      name: 'Râble de lièvre à la royale',
      name_en: 'Hare Saddle Royale',
      cutId: 'rable_lievre',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 240,
      restTime: 0,
      servings: 6,
      icon: '🐰',
      description: 'Le plat mythique de la grande cuisine française, un lièvre farci et braisé.',
      description_en: 'The legendary dish of French haute cuisine, a stuffed and braised hare.',
      ingredients: [
        { name: 'Lièvre entier', quantity: '1', unit: 'pièce', note: 'avec son sang' },
        { name: 'Foie gras de canard', quantity: '200', unit: 'g' },
        { name: 'Vin rouge de Bourgogne', quantity: '1', unit: 'L' },
        { name: 'Lard gras', quantity: '150', unit: 'g' },
        { name: 'Échalotes', quantity: '10', unit: 'pièces' },
        { name: 'Carottes', quantity: '2', unit: 'pièces' },
        { name: 'Céleri', quantity: '2', unit: 'branches' },
        { name: 'Cognac', quantity: '10', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Whole hare', quantity: '1', unit: 'piece', note: 'with its blood' },
        { name: 'Duck foie gras', quantity: '200', unit: 'g' },
        { name: 'Burgundy red wine', quantity: '1', unit: 'L' },
        { name: 'Fat bacon', quantity: '150', unit: 'g' },
        { name: 'Shallots', quantity: '10', unit: 'pieces' },
        { name: 'Carrots', quantity: '2', unit: 'pieces' },
        { name: 'Celery', quantity: '2', unit: 'stalks' },
        { name: 'Cognac', quantity: '10', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Garlic', quantity: '4', unit: 'cloves' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Désosser le lièvre',
          description: 'Lever les filets et les cuisses. Réserver le sang et le foie. Concasser les os.',
          tip: 'Demandez à votre boucher de préparer le lièvre.'
        },
        {
          step: 2,
          title: 'Marinade',
          description: 'Mariner les morceaux dans le vin avec les légumes et aromates. 24-48h au frais.',
          tip: 'Plus la marinade est longue, plus les saveurs sont intenses.'
        },
        {
          step: 3,
          title: 'Préparer la farce',
          description: 'Mixer le lard, le foie du lièvre et le foie gras. Assaisonner.',
          tip: 'La farce doit être fine et homogène.'
        },
        {
          step: 4,
          title: 'Farcir et brider',
          description: 'Reconstituer le lièvre avec la farce. Ficeler soigneusement.',
          tip: 'Le bridage doit être serré pour garder la forme.'
        },
        {
          step: 5,
          title: 'Braiser',
          description: 'Saisir le lièvre. Mouiller avec la marinade filtrée. Braiser 4h à 140°C.',
          tip: 'La cuisson très lente attendrit le gibier.'
        },
        {
          step: 6,
          title: 'La sauce',
          description: 'Réduire le jus, lier au sang hors du feu. Ne plus faire bouillir.',
          tip: 'Le sang donne l\'onctuosité caractéristique.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Bone the hare',
          description: 'Remove the fillets and legs. Reserve the blood and liver. Crush the bones.',
          tip: 'Ask your butcher to prepare the hare.'
        },
        {
          step: 2,
          title: 'Marinade',
          description: 'Marinate the pieces in wine with vegetables and aromatics. 24-48h refrigerated.',
          tip: 'The longer the marinade, the more intense the flavors.'
        },
        {
          step: 3,
          title: 'Prepare the stuffing',
          description: 'Blend the bacon, hare liver and foie gras. Season.',
          tip: 'The stuffing should be fine and smooth.'
        },
        {
          step: 4,
          title: 'Stuff and truss',
          description: 'Reconstruct the hare with the stuffing. Tie carefully.',
          tip: 'The trussing must be tight to maintain shape.'
        },
        {
          step: 5,
          title: 'Braise',
          description: 'Sear the hare. Moisten with strained marinade. Braise 4h at 140°C.',
          tip: 'Very slow cooking tenderizes the game.'
        },
        {
          step: 6,
          title: 'The sauce',
          description: 'Reduce the juices, bind with blood off the heat. Do not boil again.',
          tip: 'The blood gives the characteristic smoothness.'
        }
      ],
      chefTips: [
        'Recette emblématique de la cuisine de fête',
        'Le sang peut être remplacé par du chocolat noir',
        'Servez avec une purée truffée ou des châtaignes'
      ],
      chefTips_en: [
        'An emblematic recipe for festive cuisine',
        'The blood can be replaced with dark chocolate',
        'Serve with truffle mash or chestnuts'
      ],
      nutritionPer100g: {
        calories: 245,
        proteins: 28,
        carbs: 3,
        fat: 13
      }
    },

    chevreuil_grand_veneur: {
      id: 'chevreuil_grand_veneur',
      name: 'Noisettes de chevreuil Grand Veneur',
      name_en: 'Roe Deer Medallions Grand Veneur',
      cutId: 'filet_chevreuil',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 25,
      restTime: 5,
      servings: 4,
      icon: '🦌',
      description: 'Des noisettes de chevreuil avec la sauce Grand Veneur, classique de la cuisine de chasse.',
      description_en: 'Roe deer medallions with Grand Veneur sauce, a classic of hunting cuisine.',
      ingredients: [
        { name: 'Filet de chevreuil', quantity: '600', unit: 'g' },
        { name: 'Vin rouge', quantity: '30', unit: 'cl' },
        { name: 'Vinaigre de vin', quantity: '5', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Groseilles', quantity: '100', unit: 'g' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Poivre en grains', quantity: '1', unit: 'c. à soupe' },
        { name: 'Laurier, thym', quantity: '', unit: '', note: 'quelques brins' }
      ],
      ingredients_en: [
        { name: 'Roe deer fillet', quantity: '600', unit: 'g' },
        { name: 'Red wine', quantity: '30', unit: 'cl' },
        { name: 'Wine vinegar', quantity: '5', unit: 'cl' },
        { name: 'Game stock', quantity: '30', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Redcurrants', quantity: '100', unit: 'g' },
        { name: 'Shallots', quantity: '3', unit: 'pieces' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Peppercorns', quantity: '1', unit: 'tbsp' },
        { name: 'Bay leaf, thyme', quantity: '', unit: '', note: 'a few sprigs' }
      ],
      steps: [
        {
          step: 1,
          title: 'Découper',
          description: 'Couper le filet en noisettes de 3 cm. Saler et poivrer.',
          tip: 'Les noisettes doivent être de taille égale.'
        },
        {
          step: 2,
          title: 'Préparer la base',
          description: 'Faire suer les échalotes. Ajouter le vinaigre et le poivre concassé. Réduire à sec.',
          tip: 'Le vinaigre doit s\'évaporer complètement.'
        },
        {
          step: 3,
          title: 'Sauce',
          description: 'Mouiller au vin rouge, réduire de moitié. Ajouter le fond, réduire encore.',
          tip: 'La réduction concentre les saveurs.'
        },
        {
          step: 4,
          title: 'Finir la sauce',
          description: 'Passer au chinois. Ajouter la crème et les groseilles. Monter au beurre.',
          tip: 'La sauce Grand Veneur doit être poivrée et acidulée.'
        },
        {
          step: 5,
          title: 'Cuire les noisettes',
          description: 'Saisir les noisettes 2 min par côté pour une cuisson rosée (52°C).',
          tip: 'Le chevreuil se mange saignant ou rosé.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer 5 min. Dresser sur la sauce. Décorer de groseilles.',
          tip: 'Accompagnez de pommes Dauphine ou de céleri rémoulade.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Cut',
          description: 'Cut the fillet into 3 cm medallions. Season with salt and pepper.',
          tip: 'The medallions should be of equal size.'
        },
        {
          step: 2,
          title: 'Prepare the base',
          description: 'Sweat the shallots. Add vinegar and crushed pepper. Reduce until dry.',
          tip: 'The vinegar must evaporate completely.'
        },
        {
          step: 3,
          title: 'Sauce',
          description: 'Moisten with red wine, reduce by half. Add stock, reduce again.',
          tip: 'Reduction concentrates the flavors.'
        },
        {
          step: 4,
          title: 'Finish the sauce',
          description: 'Strain through a chinois. Add cream and redcurrants. Finish with butter.',
          tip: 'Grand Veneur sauce should be peppery and tangy.'
        },
        {
          step: 5,
          title: 'Cook the medallions',
          description: 'Sear the medallions 2 min per side for pink cooking (52°C).',
          tip: 'Roe deer is eaten rare or pink.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Rest 5 min. Plate on the sauce. Garnish with redcurrants.',
          tip: 'Serve with Dauphine potatoes or celeriac remoulade.'
        }
      ],
      chefTips: [
        'La sauce Grand Veneur est une base de la cuisine de gibier',
        'Le vinaigre et la crème créent le contraste aigre-doux',
        'Les groseilles peuvent être remplacées par des airelles'
      ],
      chefTips_en: [
        'Grand Veneur sauce is a foundation of game cuisine',
        'Vinegar and cream create the sweet-sour contrast',
        'Redcurrants can be replaced with lingonberries'
      ],
      nutritionPer100g: {
        calories: 175,
        proteins: 28,
        carbs: 5,
        fat: 5
      }
    },

    selle_chevreuil_grand_veneur: {
      id: 'selle_chevreuil_grand_veneur',
      name: 'Selle de chevreuil Grand Veneur',
      name_en: 'Saddle of Roe Deer Grand Veneur',
      cutId: 'selle_chevreuil',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 40,
      restTime: 15,
      servings: 6,
      icon: '🦌',
      description: 'La selle de chevreuil rôtie rosée avec la sauce Grand Veneur, un sommet de la cuisine de gibier.',
      description_en: 'Pink roasted saddle of roe deer with Grand Veneur sauce, a pinnacle of game cuisine.',
      ingredients: [
        { name: 'Selle de chevreuil', quantity: '1.5', unit: 'kg', note: 'parée, dénervée' },
        { name: 'Marinade au vin rouge', quantity: '1', unit: 'L', note: 'vin, carottes, oignons, genièvre' },
        { name: 'Crème fraîche', quantity: '25', unit: 'cl' },
        { name: 'Vinaigre de vin rouge', quantity: '3', unit: 'c. à soupe' },
        { name: 'Gelée de groseilles', quantity: '3', unit: 'c. à soupe' },
        { name: 'Fond de gibier', quantity: '50', unit: 'cl' },
        { name: 'Beurre', quantity: '80', unit: 'g' },
        { name: 'Huile', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Saddle of roe deer', quantity: '1.5', unit: 'kg', note: 'trimmed, sinews removed' },
        { name: 'Red wine marinade', quantity: '1', unit: 'L', note: 'wine, carrots, onions, juniper' },
        { name: 'Crème fraîche', quantity: '25', unit: 'cl' },
        { name: 'Red wine vinegar', quantity: '3', unit: 'tbsp' },
        { name: 'Redcurrant jelly', quantity: '3', unit: 'tbsp' },
        { name: 'Game stock', quantity: '50', unit: 'cl' },
        { name: 'Butter', quantity: '80', unit: 'g' },
        { name: 'Oil', quantity: '3', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Mariner',
          description: 'Mariner la selle 24-48h au frais dans le vin avec les aromates. Retourner régulièrement.',
          tip: 'La marinade attendrit et parfume le gibier.'
        },
        {
          step: 2,
          title: 'Préparer la selle',
          description: 'Sortir 2h avant cuisson. Égoutter et sécher parfaitement. Filtrer et réserver la marinade.',
          tip: 'Une viande humide ne colorera pas.'
        },
        {
          step: 3,
          title: 'Saisir et rôtir',
          description: 'Saisir dans l\'huile et le beurre sur toutes les faces. Enfourner à 200°C pendant 25-30 min (rosé : 55°C à cœur).',
          tip: 'Le chevreuil se mange rosé, sinon il devient sec.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Réduire 30 cl de marinade de moitié. Ajouter le fond et réduire encore. Ajouter le vinaigre, la gelée et la crème. Réduire jusqu\'à consistance nappante.',
          tip: 'Goûtez et ajustez l\'équilibre sucré-acide.'
        },
        {
          step: 5,
          title: 'Monter la sauce',
          description: 'Hors du feu, incorporer 30g de beurre froid en fouettant. Passer au chinois.',
          tip: 'Le beurre donne brillance et onctuosité.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer la selle 15 min. Trancher en médaillons. Napper de sauce.',
          tip: 'Servir avec une purée de céleri et des airelles.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Marinate',
          description: 'Marinate the saddle 24-48h refrigerated in wine with aromatics. Turn regularly.',
          tip: 'The marinade tenderizes and flavors the game.'
        },
        {
          step: 2,
          title: 'Prepare the saddle',
          description: 'Remove 2h before cooking. Drain and dry thoroughly. Strain and reserve the marinade.',
          tip: 'Wet meat will not brown.'
        },
        {
          step: 3,
          title: 'Sear and roast',
          description: 'Sear in oil and butter on all sides. Roast at 200°C for 25-30 min (pink: 55°C internal).',
          tip: 'Roe deer is eaten pink, otherwise it becomes dry.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'Reduce 30 cl of marinade by half. Add stock and reduce again. Add vinegar, jelly and cream. Reduce until coating consistency.',
          tip: 'Taste and adjust the sweet-sour balance.'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Off heat, whisk in 30g cold butter. Strain through a chinois.',
          tip: 'The butter gives shine and smoothness.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Rest the saddle 15 min. Slice into medallions. Coat with sauce.',
          tip: 'Serve with celery purée and lingonberries.'
        }
      ],
      chefTips: [
        'La selle de chevreuil est la pièce la plus noble du gibier',
        'Le Grand Veneur est la sauce royale du gibier depuis le XVIIe siècle',
        'Le sang peut être ajouté pour une sauce royale traditionnelle'
      ],
      chefTips_en: [
        'The saddle of roe deer is the noblest cut of game',
        'Grand Veneur has been the royal game sauce since the 17th century',
        'Blood can be added for a traditional royal sauce'
      ],
      nutritionPer100g: {
        calories: 165,
        proteins: 30,
        carbs: 3,
        fat: 4
      }
    },

    gigot_cerf_braise: {
      id: 'gigot_cerf_braise',
      name: 'Gigot de cerf braisé au genièvre',
      name_en: 'Braised Venison Leg with Juniper',
      cutId: 'gigot_cerf',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 240,
      restTime: 15,
      servings: 8,
      icon: '🦌',
      description: 'Le gigot de cerf braisé longuement aux baies de genièvre et au vin rouge, fondant et parfumé.',
      description_en: 'Venison leg slowly braised with juniper berries and red wine, tender and flavorful.',
      ingredients: [
        { name: 'Gigot de cerf', quantity: '2.5', unit: 'kg', note: 'avec os' },
        { name: 'Vin rouge corsé', quantity: '1', unit: 'L' },
        { name: 'Baies de genièvre', quantity: '20', unit: 'pièces', note: 'écrasées' },
        { name: 'Carottes', quantity: '4', unit: 'pièces' },
        { name: 'Oignons', quantity: '3', unit: 'pièces' },
        { name: 'Céleri', quantity: '3', unit: 'branches' },
        { name: 'Fond de gibier', quantity: '50', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Venison leg', quantity: '2.5', unit: 'kg', note: 'bone-in' },
        { name: 'Full-bodied red wine', quantity: '1', unit: 'L' },
        { name: 'Juniper berries', quantity: '20', unit: 'pieces', note: 'crushed' },
        { name: 'Carrots', quantity: '4', unit: 'pieces' },
        { name: 'Onions', quantity: '3', unit: 'pieces' },
        { name: 'Celery', quantity: '3', unit: 'stalks' },
        { name: 'Game stock', quantity: '50', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Mariner',
          description: 'Mariner le gigot 48h dans le vin avec les légumes grossièrement coupés, le genièvre et le bouquet garni.',
          tip: 'Le cerf a besoin d\'une longue marinade pour s\'attendrir.'
        },
        {
          step: 2,
          title: 'Préparer',
          description: 'Égoutter le gigot et bien le sécher. Filtrer et réserver la marinade séparément des légumes.',
          tip: 'Les légumes serviront pour le braisage.'
        },
        {
          step: 3,
          title: 'Saisir',
          description: 'Saisir le gigot dans le beurre chaud sur toutes les faces. Réserver.',
          tip: 'La coloration apporte la saveur.'
        },
        {
          step: 4,
          title: 'Braiser',
          description: 'Faire revenir les légumes de la marinade. Ajouter le gigot, la marinade et le fond. Couvrir et enfourner à 140°C pendant 4h.',
          tip: 'Arroser régulièrement.'
        },
        {
          step: 5,
          title: 'Finir la sauce',
          description: 'Retirer le gigot. Passer la sauce au chinois en pressant les légumes. Réduire si nécessaire.',
          tip: 'La sauce doit napper une cuillère.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Laisser reposer 15 min. Découper et napper de sauce. Servir avec une purée de châtaignes.',
          tip: 'La viande doit être fondante.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Marinate',
          description: 'Marinate the leg 48h in wine with roughly cut vegetables, juniper and bouquet garni.',
          tip: 'Venison needs a long marinade to tenderize.'
        },
        {
          step: 2,
          title: 'Prepare',
          description: 'Drain the leg and dry well. Strain and reserve the marinade separately from vegetables.',
          tip: 'The vegetables will be used for braising.'
        },
        {
          step: 3,
          title: 'Sear',
          description: 'Sear the leg in hot butter on all sides. Set aside.',
          tip: 'Browning brings flavor.'
        },
        {
          step: 4,
          title: 'Braise',
          description: 'Sauté the marinade vegetables. Add the leg, marinade and stock. Cover and bake at 140°C for 4h.',
          tip: 'Baste regularly.'
        },
        {
          step: 5,
          title: 'Finish the sauce',
          description: 'Remove the leg. Strain the sauce through a chinois, pressing the vegetables. Reduce if needed.',
          tip: 'The sauce should coat a spoon.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Rest 15 min. Carve and coat with sauce. Serve with chestnut purée.',
          tip: 'The meat should be meltingly tender.'
        }
      ],
      chefTips: [
        'Le cerf est plus corsé que le chevreuil, parfait pour les braisés',
        'Le genièvre est l\'épice traditionnelle du gibier',
        'Ce plat est encore meilleur réchauffé'
      ],
      chefTips_en: [
        'Venison is more robust than roe deer, perfect for braising',
        'Juniper is the traditional spice for game',
        'This dish is even better reheated'
      ],
      nutritionPer100g: {
        calories: 155,
        proteins: 28,
        carbs: 3,
        fat: 3
      }
    },

    marcassin_roti: {
      id: 'marcassin_roti',
      name: 'Rôti de marcassin aux châtaignes',
      name_en: 'Roast Young Wild Boar with Chestnuts',
      cutId: 'marcassin',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🐗',
      description: 'Le marcassin tendre rôti accompagné de châtaignes et d\'une sauce au miel.',
      description_en: 'Tender roast young wild boar with chestnuts and honey sauce.',
      ingredients: [
        { name: 'Rôti de marcassin', quantity: '1.2', unit: 'kg', note: 'épaule ou cuissot' },
        { name: 'Châtaignes', quantity: '400', unit: 'g', note: 'cuites' },
        { name: 'Miel de forêt', quantity: '3', unit: 'c. à soupe' },
        { name: 'Vin blanc sec', quantity: '25', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Baies de genièvre', quantity: '8', unit: 'pièces' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Young wild boar roast', quantity: '1.2', unit: 'kg', note: 'shoulder or haunch' },
        { name: 'Chestnuts', quantity: '400', unit: 'g', note: 'cooked' },
        { name: 'Forest honey', quantity: '3', unit: 'tbsp' },
        { name: 'Dry white wine', quantity: '25', unit: 'cl' },
        { name: 'Game stock', quantity: '30', unit: 'cl' },
        { name: 'Thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Juniper berries', quantity: '8', unit: 'pieces' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer',
          description: 'Sortir le rôti 2h avant. Le badigeonner de miel et d\'huile. Parsemer de thym et genièvre écrasé.',
          tip: 'Le marcassin est jeune donc ne nécessite pas de marinade.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Saisir le rôti dans le beurre sur toutes les faces. Transférer dans un plat.',
          tip: 'La coloration caramélise le miel.'
        },
        {
          step: 3,
          title: 'Rôtir',
          description: 'Enfourner à 180°C. Après 30 min, ajouter les châtaignes autour. Poursuivre 45 min en arrosant.',
          tip: 'Température à cœur : 65°C pour un marcassin rosé.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Retirer le rôti et les châtaignes. Déglacer au vin blanc, ajouter le fond. Réduire de moitié.',
          tip: 'Grattez bien les sucs.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Laisser reposer 15 min. Trancher, disposer les châtaignes autour. Napper de sauce.',
          tip: 'La chair doit être légèrement rosée.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare',
          description: 'Remove the roast 2h before. Brush with honey and oil. Sprinkle with thyme and crushed juniper.',
          tip: 'Young wild boar is young so does not need marinating.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'Sear the roast in butter on all sides. Transfer to a roasting dish.',
          tip: 'Browning caramelizes the honey.'
        },
        {
          step: 3,
          title: 'Roast',
          description: 'Bake at 180°C. After 30 min, add chestnuts around. Continue 45 min, basting.',
          tip: 'Internal temperature: 65°C for pink young wild boar.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'Remove the roast and chestnuts. Deglaze with white wine, add stock. Reduce by half.',
          tip: 'Scrape up the juices well.'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Rest 15 min. Slice, arrange chestnuts around. Coat with sauce.',
          tip: 'The meat should be slightly pink.'
        }
      ],
      chefTips: [
        'Le marcassin (moins d\'un an) est plus tendre que le sanglier adulte',
        'Il peut se cuisiner sans marinade car sa chair est moins forte',
        'Accompagner de chou rouge braisé aux pommes'
      ],
      chefTips_en: [
        'Young wild boar (under one year) is more tender than adult wild boar',
        'It can be cooked without marinade as its flesh is milder',
        'Serve with braised red cabbage and apples'
      ],
      nutritionPer100g: {
        calories: 180,
        proteins: 26,
        carbs: 8,
        fat: 5
      }
    },

    civet_lievre: {
      id: 'civet_lievre',
      name: 'Civet de lièvre',
      name_en: 'Hare Stew',
      cutId: 'civet_lievre',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🐇',
      description: 'Le civet de lièvre traditionnel, mijoté au vin rouge et lié au sang, un plat mythique.',
      description_en: 'The traditional hare stew, simmered in red wine and thickened with blood, a legendary dish.',
      ingredients: [
        { name: 'Lièvre', quantity: '1', unit: 'pièce', note: '2.5 kg environ, découpé' },
        { name: 'Sang du lièvre', quantity: '10', unit: 'cl', note: 'réservé avec un peu de vinaigre' },
        { name: 'Vin rouge corsé', quantity: '1', unit: 'L' },
        { name: 'Lardons', quantity: '200', unit: 'g' },
        { name: 'Petits oignons', quantity: '250', unit: 'g' },
        { name: 'Champignons', quantity: '250', unit: 'g' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Farine', quantity: '3', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Hare', quantity: '1', unit: 'piece', note: 'about 2.5 kg, cut up' },
        { name: 'Hare blood', quantity: '10', unit: 'cl', note: 'reserved with a little vinegar' },
        { name: 'Full-bodied red wine', quantity: '1', unit: 'L' },
        { name: 'Lardons', quantity: '200', unit: 'g' },
        { name: 'Pearl onions', quantity: '250', unit: 'g' },
        { name: 'Mushrooms', quantity: '250', unit: 'g' },
        { name: 'Cognac', quantity: '5', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'piece' },
        { name: 'Flour', quantity: '3', unit: 'tbsp' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Mariner',
          description: 'Mariner les morceaux de lièvre 24h dans le vin avec le bouquet garni. Réserver le sang au frais avec du vinaigre.',
          tip: 'Le vinaigre empêche le sang de coaguler.'
        },
        {
          step: 2,
          title: 'Préparer',
          description: 'Égoutter et sécher les morceaux. Réserver la marinade. Faire revenir les lardons, puis les oignons et champignons. Réserver.',
          tip: 'Travailler en plusieurs fois pour bien colorer.'
        },
        {
          step: 3,
          title: 'Saisir le lièvre',
          description: 'Fariner légèrement les morceaux. Les saisir dans le beurre. Flamber au cognac.',
          tip: 'La flambe élimine l\'alcool et concentre les saveurs.'
        },
        {
          step: 4,
          title: 'Mijoter',
          description: 'Remettre tous les éléments. Verser la marinade. Couvrir et mijoter 2h30-3h à feu très doux.',
          tip: 'Le lièvre doit devenir très tendre.'
        },
        {
          step: 5,
          title: 'Lier au sang',
          description: 'Hors du feu, délayer le sang avec un peu de sauce chaude, puis l\'incorporer en remuant. Ne plus faire bouillir.',
          tip: 'Le sang coagule à 70°C, ne jamais faire bouillir après.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Rectifier l\'assaisonnement. Servir avec des croûtons frottés d\'ail.',
          tip: 'Accompagner de spätzle ou de pâtes fraîches.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Marinate',
          description: 'Marinate the hare pieces 24h in wine with bouquet garni. Reserve the blood refrigerated with vinegar.',
          tip: 'The vinegar prevents the blood from coagulating.'
        },
        {
          step: 2,
          title: 'Prepare',
          description: 'Drain and dry the pieces. Reserve the marinade. Brown the lardons, then onions and mushrooms. Set aside.',
          tip: 'Work in batches to brown well.'
        },
        {
          step: 3,
          title: 'Sear the hare',
          description: 'Lightly flour the pieces. Sear in butter. Flambé with cognac.',
          tip: 'Flambéing removes alcohol and concentrates flavors.'
        },
        {
          step: 4,
          title: 'Simmer',
          description: 'Return all elements. Pour in the marinade. Cover and simmer 2h30-3h on very low heat.',
          tip: 'The hare should become very tender.'
        },
        {
          step: 5,
          title: 'Bind with blood',
          description: 'Off heat, dilute the blood with a little hot sauce, then incorporate stirring. Do not boil again.',
          tip: 'Blood coagulates at 70°C, never boil after adding.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Adjust seasoning. Serve with garlic-rubbed croutons.',
          tip: 'Serve with spätzle or fresh pasta.'
        }
      ],
      chefTips: [
        'Sans sang, le civet devient un simple ragoût',
        'Le lièvre a une chair plus foncée et plus corsée que le lapin',
        'Traditionnellement servi avec des croûtons au foie du lièvre'
      ],
      chefTips_en: [
        'Without blood, the civet becomes a simple stew',
        'Hare has darker and more robust meat than rabbit',
        'Traditionally served with hare liver croutons'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 28,
        carbs: 4,
        fat: 7
      }
    },

    lapin_garenne_chasseur: {
      id: 'lapin_garenne_chasseur',
      name: 'Lapin de garenne chasseur',
      name_en: 'Wild Rabbit Hunter Style',
      cutId: 'lapin_garenne',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 90,
      restTime: 0,
      servings: 4,
      icon: '🐇',
      description: 'Le lapin de garenne sauté à la sauce chasseur, champignons, tomates et vin blanc.',
      description_en: 'Wild rabbit sautéed in chasseur sauce with mushrooms, tomatoes and white wine.',
      ingredients: [
        { name: 'Lapin de garenne', quantity: '1', unit: 'pièce', note: '1.5 kg, découpé' },
        { name: 'Champignons de Paris', quantity: '300', unit: 'g' },
        { name: 'Tomates', quantity: '4', unit: 'pièces', note: 'pelées, épépinées' },
        { name: 'Échalotes', quantity: '4', unit: 'pièces' },
        { name: 'Vin blanc sec', quantity: '25', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '25', unit: 'cl' },
        { name: 'Estragon', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Huile', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Wild rabbit', quantity: '1', unit: 'piece', note: '1.5 kg, cut up' },
        { name: 'Button mushrooms', quantity: '300', unit: 'g' },
        { name: 'Tomatoes', quantity: '4', unit: 'pieces', note: 'peeled, seeded' },
        { name: 'Shallots', quantity: '4', unit: 'pieces' },
        { name: 'Dry white wine', quantity: '25', unit: 'cl' },
        { name: 'Chicken stock', quantity: '25', unit: 'cl' },
        { name: 'Tarragon', quantity: '2', unit: 'tbsp', note: 'chopped' },
        { name: 'Butter', quantity: '50', unit: 'g' },
        { name: 'Oil', quantity: '2', unit: 'tbsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir le lapin',
          description: 'Sécher les morceaux. Les saisir dans l\'huile et 30g de beurre jusqu\'à coloration. Réserver.',
          tip: 'Le lapin de garenne est plus maigre et savoureux que le lapin d\'élevage.'
        },
        {
          step: 2,
          title: 'Préparer la garniture',
          description: 'Faire sauter les champignons émincés. Ajouter les échalotes hachées. Réserver.',
          tip: 'Les champignons doivent être bien dorés.'
        },
        {
          step: 3,
          title: 'Déglacer',
          description: 'Déglacer au vin blanc. Réduire de moitié. Ajouter les tomates concassées et le fond.',
          tip: 'Grattez bien les sucs de cuisson.'
        },
        {
          step: 4,
          title: 'Mijoter',
          description: 'Remettre le lapin. Couvrir et mijoter 1h à feu doux.',
          tip: 'Le lapin de garenne est plus ferme, prévoyez un peu plus de temps.'
        },
        {
          step: 5,
          title: 'Finitions',
          description: 'Ajouter les champignons et l\'estragon. Poursuivre 10 min. Monter avec le reste de beurre.',
          tip: 'L\'estragon est la signature de la sauce chasseur.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the rabbit',
          description: 'Pat the pieces dry. Sear in oil and 30g butter until golden. Set aside.',
          tip: 'Wild rabbit is leaner and more flavorful than farm-raised.'
        },
        {
          step: 2,
          title: 'Prepare the garnish',
          description: 'Sauté the sliced mushrooms. Add the chopped shallots. Set aside.',
          tip: 'The mushrooms should be well browned.'
        },
        {
          step: 3,
          title: 'Deglaze',
          description: 'Deglaze with white wine. Reduce by half. Add the crushed tomatoes and stock.',
          tip: 'Scrape up all the cooking juices.'
        },
        {
          step: 4,
          title: 'Simmer',
          description: 'Return the rabbit. Cover and simmer 1h over low heat.',
          tip: 'Wild rabbit is firmer, allow a bit more time.'
        },
        {
          step: 5,
          title: 'Finishing',
          description: 'Add the mushrooms and tarragon. Continue 10 min. Finish with remaining butter.',
          tip: 'Tarragon is the signature of chasseur sauce.'
        }
      ],
      chefTips: [
        'Le lapin de garenne est plus petit et plus goûteux que le lapin d\'élevage',
        'La sauce chasseur est parfaite pour les viandes blanches',
        'Servir avec des pommes de terre vapeur ou des pâtes fraîches'
      ],
      chefTips_en: [
        'Wild rabbit is smaller and more flavorful than farm-raised',
        'Chasseur sauce is perfect for white meats',
        'Serve with steamed potatoes or fresh pasta'
      ],
      nutritionPer100g: {
        calories: 165,
        proteins: 25,
        carbs: 4,
        fat: 5
      }
    },

    perdrix_chou: {
      id: 'perdrix_chou',
      name: 'Perdrix au chou',
      name_en: 'Partridge with Cabbage',
      cutId: 'perdrix',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 120,
      restTime: 0,
      servings: 4,
      icon: '🐦',
      description: 'La perdrix braisée sur un lit de chou fondant, un classique de la cuisine de chasse.',
      description_en: 'Partridge braised on a bed of tender cabbage, a classic hunting cuisine dish.',
      ingredients: [
        { name: 'Perdrix', quantity: '2', unit: 'pièces', note: 'prêtes à cuire' },
        { name: 'Chou vert', quantity: '1', unit: 'pièce', note: 'environ 800g' },
        { name: 'Lard fumé', quantity: '150', unit: 'g', note: 'en tranches' },
        { name: 'Saucisses fumées', quantity: '4', unit: 'pièces' },
        { name: 'Carottes', quantity: '2', unit: 'pièces' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'piqué de clous de girofle' },
        { name: 'Vin blanc', quantity: '25', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '30', unit: 'cl' },
        { name: 'Baies de genièvre', quantity: '8', unit: 'pièces' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Partridges', quantity: '2', unit: 'pieces', note: 'oven-ready' },
        { name: 'Green cabbage', quantity: '1', unit: 'piece', note: 'about 800g' },
        { name: 'Smoked bacon', quantity: '150', unit: 'g', note: 'sliced' },
        { name: 'Smoked sausages', quantity: '4', unit: 'pieces' },
        { name: 'Carrots', quantity: '2', unit: 'pieces' },
        { name: 'Onion', quantity: '1', unit: 'piece', note: 'studded with cloves' },
        { name: 'White wine', quantity: '25', unit: 'cl' },
        { name: 'Chicken stock', quantity: '30', unit: 'cl' },
        { name: 'Juniper berries', quantity: '8', unit: 'pieces' },
        { name: 'Butter', quantity: '30', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le chou',
          description: 'Couper le chou en quartiers. Le blanchir 5 min à l\'eau bouillante salée. Rafraîchir et égoutter.',
          tip: 'Le blanchiment adoucit le chou.'
        },
        {
          step: 2,
          title: 'Saisir les perdrix',
          description: 'Colorer les perdrix dans le beurre sur toutes les faces. Réserver.',
          tip: 'Une belle coloration assure la saveur.'
        },
        {
          step: 3,
          title: 'Assembler',
          description: 'Tapisser une cocotte de tranches de lard. Ajouter la moitié du chou, les perdrix, les carottes, l\'oignon et le genièvre. Couvrir du reste de chou.',
          tip: 'Le lard parfume et empêche d\'attacher.'
        },
        {
          step: 4,
          title: 'Braiser',
          description: 'Verser le vin et le fond. Couvrir hermétiquement. Enfourner à 150°C pendant 1h30.',
          tip: 'La cuisson doit être douce.'
        },
        {
          step: 5,
          title: 'Ajouter les saucisses',
          description: 'Enfouir les saucisses dans le chou. Poursuivre 30 min.',
          tip: 'Les saucisses apportent du moelleux.'
        },
        {
          step: 6,
          title: 'Service',
          description: 'Dresser le chou sur un plat, disposer les perdrix et les saucisses. Arroser de jus.',
          tip: 'Servir avec de la moutarde et des cornichons.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the cabbage',
          description: 'Cut cabbage into quarters. Blanch 5 min in salted boiling water. Refresh and drain.',
          tip: 'Blanching softens the cabbage.'
        },
        {
          step: 2,
          title: 'Sear the partridges',
          description: 'Brown the partridges in butter on all sides. Set aside.',
          tip: 'Good browning ensures flavor.'
        },
        {
          step: 3,
          title: 'Assemble',
          description: 'Line a Dutch oven with bacon slices. Add half the cabbage, the partridges, carrots, onion and juniper. Cover with remaining cabbage.',
          tip: 'The bacon adds flavor and prevents sticking.'
        },
        {
          step: 4,
          title: 'Braise',
          description: 'Pour in wine and stock. Cover tightly. Bake at 150°C (300°F) for 1h30.',
          tip: 'Cooking should be gentle.'
        },
        {
          step: 5,
          title: 'Add the sausages',
          description: 'Bury the sausages in the cabbage. Continue 30 min.',
          tip: 'The sausages add moisture.'
        },
        {
          step: 6,
          title: 'Serve',
          description: 'Arrange cabbage on a platter, place partridges and sausages. Drizzle with cooking juices.',
          tip: 'Serve with mustard and pickles.'
        }
      ],
      chefTips: [
        'La perdrix au chou est un plat d\'automne/hiver par excellence',
        'Utilisez un chou de Savoie pour plus de finesse',
        'Ce plat peut se préparer la veille'
      ],
      chefTips_en: [
        'Partridge with cabbage is the quintessential fall/winter dish',
        'Use Savoy cabbage for more delicacy',
        'This dish can be prepared the day before'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 22,
        carbs: 6,
        fat: 8
      }
    },

    caille_raisin: {
      id: 'caille_raisin',
      name: 'Cailles rôties aux raisins',
      name_en: 'Roasted Quail with Grapes',
      cutId: 'caille',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 30,
      restTime: 5,
      servings: 4,
      icon: '🐦',
      description: 'Les cailles rôties dorées accompagnées de raisins frais et d\'une sauce au porto.',
      description_en: 'Golden roasted quails accompanied by fresh grapes and a port wine sauce.',
      ingredients: [
        { name: 'Cailles', quantity: '8', unit: 'pièces', note: 'prêtes à cuire' },
        { name: 'Raisins', quantity: '300', unit: 'g', note: 'blancs, type chasselas' },
        { name: 'Porto', quantity: '15', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Cognac', quantity: '3', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Quails', quantity: '8', unit: 'pieces', note: 'ready to cook' },
        { name: 'Grapes', quantity: '300', unit: 'g', note: 'white, Chasselas type' },
        { name: 'Port wine', quantity: '15', unit: 'cl' },
        { name: 'Chicken stock', quantity: '15', unit: 'cl' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Thyme', quantity: '4', unit: 'sprigs' },
        { name: 'Cognac', quantity: '3', unit: 'cl' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les cailles',
          description: 'Brider les cailles. Saler et poivrer l\'intérieur et l\'extérieur. Glisser une branche de thym dans chaque.',
          tip: 'Le bridage maintient la forme pendant la cuisson.'
        },
        {
          step: 2,
          title: 'Saisir',
          description: 'Colorer les cailles dans 40g de beurre sur toutes les faces. Flamber au cognac.',
          tip: 'La flambe concentre les saveurs.'
        },
        {
          step: 3,
          title: 'Rôtir',
          description: 'Enfourner à 220°C pendant 15-18 min. Les cailles doivent rester légèrement rosées.',
          tip: 'Les cailles cuisent vite, ne pas trop les cuire.'
        },
        {
          step: 4,
          title: 'Préparer la sauce',
          description: 'Retirer les cailles. Déglacer au porto, ajouter le fond. Réduire de moitié. Ajouter les raisins pelés.',
          tip: 'Pour peler les raisins facilement : les plonger 30 sec dans l\'eau bouillante.'
        },
        {
          step: 5,
          title: 'Finitions',
          description: 'Monter la sauce avec le reste de beurre. Napper les cailles. Servir aussitôt.',
          tip: 'Accompagner de riz sauvage ou de polenta.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the quails',
          description: 'Truss the quails. Season inside and out with salt and pepper. Tuck a sprig of thyme in each.',
          tip: 'Trussing maintains the shape during cooking.'
        },
        {
          step: 2,
          title: 'Sear',
          description: 'Brown the quails in 40g butter on all sides. Flambé with cognac.',
          tip: 'Flambéing concentrates the flavors.'
        },
        {
          step: 3,
          title: 'Roast',
          description: 'Roast at 220°C (425°F) for 15-18 min. The quails should remain slightly pink.',
          tip: 'Quails cook quickly, do not overcook.'
        },
        {
          step: 4,
          title: 'Prepare the sauce',
          description: 'Remove the quails. Deglaze with port, add the stock. Reduce by half. Add the peeled grapes.',
          tip: 'To peel grapes easily: blanch them for 30 sec in boiling water.'
        },
        {
          step: 5,
          title: 'Finishing touches',
          description: 'Mount the sauce with the remaining butter. Spoon over the quails. Serve immediately.',
          tip: 'Serve with wild rice or polenta.'
        }
      ],
      chefTips: [
        'Les cailles sont un gibier à plume délicat et festif',
        'Le mariage caille-raisin est un classique de l\'automne',
        'Comptez 2 cailles par personne'
      ],
      chefTips_en: [
        'Quails are a delicate and festive game bird',
        'The quail-grape pairing is a classic autumn dish',
        'Allow 2 quails per person'
      ],
      nutritionPer100g: {
        calories: 195,
        proteins: 25,
        carbs: 6,
        fat: 8
      }
    },

    becasse_rotie: {
      id: 'becasse_rotie',
      name: 'Bécasse rôtie traditionnelle',
      name_en: 'Traditional Roasted Woodcock',
      cutId: 'becasse',
      difficulty: 'difficile',
      prepTime: 30,
      cookTime: 20,
      restTime: 10,
      servings: 2,
      icon: '🐦',
      description: 'La bécasse rôtie entière avec ses intérieurs sur canapé, le gibier roi de la gastronomie.',
      description_en: 'Whole roasted woodcock with its innards on canapé, the king of game in gastronomy.',
      ingredients: [
        { name: 'Bécasses', quantity: '2', unit: 'pièces', note: 'non vidées' },
        { name: 'Beurre', quantity: '80', unit: 'g' },
        { name: 'Pain de mie', quantity: '4', unit: 'tranches', note: 'épaisses' },
        { name: 'Foie gras', quantity: '50', unit: 'g', note: 'optionnel' },
        { name: 'Cognac', quantity: '4', unit: 'cl' },
        { name: 'Barde de lard', quantity: '2', unit: 'tranches' },
        { name: 'Thym', quantity: '2', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Woodcocks', quantity: '2', unit: 'pieces', note: 'not gutted' },
        { name: 'Butter', quantity: '80', unit: 'g' },
        { name: 'White bread', quantity: '4', unit: 'slices', note: 'thick' },
        { name: 'Foie gras', quantity: '50', unit: 'g', note: 'optional' },
        { name: 'Cognac', quantity: '4', unit: 'cl' },
        { name: 'Pork fat strips', quantity: '2', unit: 'slices' },
        { name: 'Thyme', quantity: '2', unit: 'sprigs' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer les bécasses',
          description: 'Plumer, flamber mais ne pas vider (tradition). Brider et barder. Glisser le thym à l\'intérieur.',
          tip: 'La bécasse est le seul gibier qu\'on rôtit sans vider traditionnellement.'
        },
        {
          step: 2,
          title: 'Rôtir',
          description: 'Saisir dans le beurre mousseux, puis enfourner à 230°C pendant 12-15 min. La chair doit être rosée.',
          tip: 'La bécasse se mange très rosée, presque saignante.'
        },
        {
          step: 3,
          title: 'Préparer les canapés',
          description: 'Faire dorer les tranches de pain dans le beurre de cuisson. Réserver au chaud.',
          tip: 'Les canapés doivent être croustillants.'
        },
        {
          step: 4,
          title: 'Préparer les intérieurs',
          description: 'Retirer les intestins et le gésier. Écraser avec le foie gras et le cognac. Saler, poivrer. Tartiner sur les canapés.',
          tip: 'Cette préparation s\'appelle "la mousse de bécasse".'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Laisser reposer 10 min. Poser les bécasses sur les canapés. Servir avec le jus de cuisson.',
          tip: 'Traditionnellement servie avec des truffes fraîches.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the woodcocks',
          description: 'Pluck, singe but do not gut (traditional). Truss and bard. Tuck the thyme inside.',
          tip: 'Woodcock is the only game bird traditionally roasted without gutting.'
        },
        {
          step: 2,
          title: 'Roast',
          description: 'Sear in foaming butter, then roast at 230°C (450°F) for 12-15 min. The meat should be pink.',
          tip: 'Woodcock is eaten very pink, almost rare.'
        },
        {
          step: 3,
          title: 'Prepare the canapés',
          description: 'Toast the bread slices in the cooking butter. Keep warm.',
          tip: 'The canapés should be crispy.'
        },
        {
          step: 4,
          title: 'Prepare the innards',
          description: 'Remove the intestines and gizzard. Mash with foie gras and cognac. Season. Spread on the canapés.',
          tip: 'This preparation is called "woodcock mousse".'
        },
        {
          step: 5,
          title: 'Serve',
          description: 'Rest for 10 min. Place the woodcocks on the canapés. Serve with the pan juices.',
          tip: 'Traditionally served with fresh truffles.'
        }
      ],
      chefTips: [
        'La bécasse est considérée comme le roi des gibiers à plume',
        'Ne pas vider est la tradition, mais certains préfèrent vider',
        'Accompagner d\'un grand Bourgogne rouge'
      ],
      chefTips_en: [
        'Woodcock is considered the king of game birds',
        'Not gutting is traditional, but some prefer to gut',
        'Pair with a fine red Burgundy'
      ],
      nutritionPer100g: {
        calories: 170,
        proteins: 26,
        carbs: 5,
        fat: 5
      }
    },

    canard_sauvage_bigarade: {
      id: 'canard_sauvage_bigarade',
      name: 'Canard sauvage à la bigarade',
      name_en: 'Wild Duck à la Bigarade',
      cutId: 'canard_sauvage',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 45,
      restTime: 10,
      servings: 2,
      icon: '🦆',
      description: 'Le canard colvert rôti rosé avec la sauce à l\'orange amère traditionnelle.',
      description_en: 'Pink roasted mallard with traditional bitter orange sauce.',
      ingredients: [
        { name: 'Canard colvert', quantity: '1', unit: 'pièce', note: 'environ 1.2 kg' },
        { name: 'Oranges amères (bigarades)', quantity: '3', unit: 'pièces', note: 'ou oranges classiques' },
        { name: 'Sucre', quantity: '60', unit: 'g' },
        { name: 'Vinaigre de vin', quantity: '3', unit: 'c. à soupe' },
        { name: 'Fond de canard', quantity: '25', unit: 'cl' },
        { name: 'Curaçao', quantity: '2', unit: 'cl', note: 'optionnel' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Mallard duck', quantity: '1', unit: 'piece', note: 'about 1.2 kg' },
        { name: 'Bitter oranges (bigarades)', quantity: '3', unit: 'pieces', note: 'or regular oranges' },
        { name: 'Sugar', quantity: '60', unit: 'g' },
        { name: 'Wine vinegar', quantity: '3', unit: 'tbsp' },
        { name: 'Duck stock', quantity: '25', unit: 'cl' },
        { name: 'Curaçao', quantity: '2', unit: 'cl', note: 'optional' },
        { name: 'Butter', quantity: '40', unit: 'g' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Préparer le canard',
          description: 'Sortir le canard 1h avant. Saler et poivrer l\'intérieur et l\'extérieur.',
          tip: 'Le canard sauvage est plus petit et plus goûteux que le domestique.'
        },
        {
          step: 2,
          title: 'Rôtir',
          description: 'Saisir dans le beurre, puis enfourner à 220°C pendant 25-30 min. Le canard doit être rosé.',
          tip: 'Le canard sauvage se mange rosé, sinon il devient sec.'
        },
        {
          step: 3,
          title: 'Préparer les zestes',
          description: 'Prélever les zestes en julienne fine. Les blanchir 2 fois. Presser le jus des oranges.',
          tip: 'Le blanchiment retire l\'amertume excessive.'
        },
        {
          step: 4,
          title: 'Faire le caramel',
          description: 'Cuire le sucre à sec jusqu\'à caramel ambré. Déglacer au vinaigre puis au jus d\'orange. Ajouter le fond et le Curaçao.',
          tip: 'Le caramel ne doit pas être trop foncé.'
        },
        {
          step: 5,
          title: 'Finitions',
          description: 'Réduire la sauce, ajouter les zestes. Monter au beurre. Laisser reposer le canard 10 min avant de découper.',
          tip: 'Napper de sauce et servir aussitôt.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Prepare the duck',
          description: 'Take the duck out 1h before. Season inside and out with salt and pepper.',
          tip: 'Wild duck is smaller and more flavorful than domestic.'
        },
        {
          step: 2,
          title: 'Roast',
          description: 'Sear in butter, then roast at 220°C (425°F) for 25-30 min. The duck should be pink.',
          tip: 'Wild duck is eaten pink, otherwise it becomes dry.'
        },
        {
          step: 3,
          title: 'Prepare the zest',
          description: 'Cut the zest into fine julienne. Blanch twice. Squeeze the orange juice.',
          tip: 'Blanching removes excessive bitterness.'
        },
        {
          step: 4,
          title: 'Make the caramel',
          description: 'Cook the sugar dry until amber caramel. Deglaze with vinegar then orange juice. Add the stock and Curaçao.',
          tip: 'The caramel should not be too dark.'
        },
        {
          step: 5,
          title: 'Finishing touches',
          description: 'Reduce the sauce, add the zest. Mount with butter. Rest the duck 10 min before carving.',
          tip: 'Spoon sauce over and serve immediately.'
        }
      ],
      chefTips: [
        'Le colvert (canard sauvage) est plus parfumé que le canard d\'élevage',
        'La bigarade (orange amère) donne une sauce plus complexe',
        'Accompagner de navets glacés ou de purée de céleri'
      ],
      chefTips_en: [
        'Mallard (wild duck) is more flavorful than farm-raised duck',
        'Bigarade (bitter orange) creates a more complex sauce',
        'Serve with glazed turnips or celery purée'
      ],
      nutritionPer100g: {
        calories: 200,
        proteins: 24,
        carbs: 8,
        fat: 8
      }
    },

    pigeon_ramier_petits_pois: {
      id: 'pigeon_ramier_petits_pois',
      name: 'Pigeon ramier aux petits pois',
      name_en: 'Wood Pigeon with Peas',
      cutId: 'pigeon',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 35,
      restTime: 5,
      servings: 2,
      icon: '🐦',
      description: 'Le pigeon ramier rosé accompagné de petits pois à la française et de lardons.',
      description_en: 'Pink roasted wood pigeon with French-style peas and lardons.',
      ingredients: [
        { name: 'Pigeons ramiers', quantity: '2', unit: 'pièces', note: 'prêts à cuire' },
        { name: 'Petits pois', quantity: '400', unit: 'g', note: 'frais ou surgelés' },
        { name: 'Lardons', quantity: '100', unit: 'g' },
        { name: 'Petits oignons', quantity: '12', unit: 'pièces' },
        { name: 'Laitue', quantity: '1', unit: 'cœur', note: 'ciselé' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Sucre', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      ingredients_en: [
        { name: 'Wood pigeons', quantity: '2', unit: 'pieces', note: 'ready to cook' },
        { name: 'Peas', quantity: '400', unit: 'g', note: 'fresh or frozen' },
        { name: 'Lardons', quantity: '100', unit: 'g' },
        { name: 'Pearl onions', quantity: '12', unit: 'pieces' },
        { name: 'Lettuce', quantity: '1', unit: 'heart', note: 'shredded' },
        { name: 'Butter', quantity: '60', unit: 'g' },
        { name: 'Chicken stock', quantity: '15', unit: 'cl' },
        { name: 'Sugar', quantity: '1', unit: 'tsp' },
        { name: 'Salt, pepper', quantity: '', unit: '', note: 'to taste' }
      ],
      steps: [
        {
          step: 1,
          title: 'Saisir les pigeons',
          description: 'Colorer les pigeons bridés dans 40g de beurre sur toutes les faces. Saler, poivrer.',
          tip: 'Une belle coloration est essentielle.'
        },
        {
          step: 2,
          title: 'Rôtir',
          description: 'Enfourner à 220°C pendant 18-20 min. Les pigeons doivent être rosés.',
          tip: 'Le pigeon se mange rosé, jamais à point.'
        },
        {
          step: 3,
          title: 'Préparer les petits pois',
          description: 'Faire revenir les lardons et les oignons. Ajouter les petits pois, la laitue, le fond, le sucre et le reste de beurre.',
          tip: 'La laitue fond et parfume les petits pois.'
        },
        {
          step: 4,
          title: 'Cuire les petits pois',
          description: 'Couvrir et cuire 15-20 min à feu doux. Les petits pois doivent être fondants.',
          tip: 'C\'est la cuisson "à la française".'
        },
        {
          step: 5,
          title: 'Service',
          description: 'Laisser reposer les pigeons 5 min. Dresser sur les petits pois. Arroser du jus de cuisson.',
          tip: 'Découper à table si vous le souhaitez.'
        }
      ],
      steps_en: [
        {
          step: 1,
          title: 'Sear the pigeons',
          description: 'Brown the trussed pigeons in 40g butter on all sides. Season with salt and pepper.',
          tip: 'A good sear is essential.'
        },
        {
          step: 2,
          title: 'Roast',
          description: 'Roast at 220°C (425°F) for 18-20 min. The pigeons should be pink.',
          tip: 'Pigeon is eaten pink, never well-done.'
        },
        {
          step: 3,
          title: 'Prepare the peas',
          description: 'Sauté the lardons and onions. Add the peas, lettuce, stock, sugar and remaining butter.',
          tip: 'The lettuce melts and flavors the peas.'
        },
        {
          step: 4,
          title: 'Cook the peas',
          description: 'Cover and cook 15-20 min over low heat. The peas should be tender.',
          tip: 'This is the "French-style" cooking method.'
        },
        {
          step: 5,
          title: 'Serve',
          description: 'Rest the pigeons 5 min. Arrange on the peas. Drizzle with pan juices.',
          tip: 'Carve at the table if desired.'
        }
      ],
      chefTips: [
        'Le pigeon ramier (palombe) est un gibier très fin',
        'Les petits pois à la française sont l\'accompagnement classique',
        'Un pigeon par personne est la portion traditionnelle'
      ],
      chefTips_en: [
        'Wood pigeon (palombe) is a very fine game bird',
        'French-style peas are the classic accompaniment',
        'One pigeon per person is the traditional portion'
      ],
      nutritionPer100g: {
        calories: 185,
        proteins: 24,
        carbs: 8,
        fat: 7
      }
    }
  }
};

// Fonction pour obtenir les recettes par morceau
// categoryId est optionnel mais recommandé pour éviter les conflits (ex: escalope de veau vs escalope de dinde)
export const getRecipesByCut = (cutId, categoryId = null) => {
  const recipes = [];

  // Si categoryId est fourni, chercher uniquement dans cette catégorie
  if (categoryId && recipesData[categoryId]) {
    Object.values(recipesData[categoryId]).forEach(recipe => {
      if (recipe.cutId === cutId) {
        recipes.push(recipe);
      }
    });
  } else {
    // Sinon, chercher dans toutes les catégories (comportement legacy)
    Object.values(recipesData).forEach(category => {
      Object.values(category).forEach(recipe => {
        if (recipe.cutId === cutId) {
          recipes.push(recipe);
        }
      });
    });
  }

  return recipes;
};

// Fonction pour obtenir les recettes par catégorie
export const getRecipesByCategory = (categoryId) => {
  return recipesData[categoryId] ? Object.values(recipesData[categoryId]) : [];
};

// Fonction pour obtenir toutes les recettes
export const getAllRecipes = () => {
  const allRecipes = [];
  Object.values(recipesData).forEach(category => {
    Object.values(category).forEach(recipe => {
      allRecipes.push(recipe);
    });
  });
  return allRecipes;
};

export default recipesData;
