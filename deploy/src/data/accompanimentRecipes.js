// Cookmaster - Recettes d'accompagnements (sauces, garnitures, etc.)

export const accompanimentRecipes = {
  // ==================== SAUCES ====================
  sauces: {
    // Sauces classiques françaises
    sauce_poivre: {
      id: 'sauce_poivre',
      name: 'Sauce au poivre',
      type: 'sauce',
      category: 'classique',
      icon: '🫚',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'La sauce au poivre crémeuse, parfaite pour les viandes rouges grillées.',
      ingredients: [
        { name: 'Échalotes', quantity: '2', unit: 'pièces', note: 'finement émincées' },
        { name: 'Cognac ou brandy', quantity: '4', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Poivre vert', quantity: '2', unit: 'c. à soupe', note: 'en saumure, égoutté' },
        { name: 'Poivre noir', quantity: '1', unit: 'c. à café', note: 'concassé' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl', note: 'optionnel' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Retirer la viande de la poêle et la réserver au chaud sous aluminium. Garder les sucs de cuisson dans la poêle car ils sont essentiels à la saveur de la sauce - ne surtout pas les jeter.',
        'Faire fondre le beurre à feu moyen dans cette même poêle encore chaude. Ajouter les échalotes émincées et les faire revenir 1 à 2 minutes en remuant régulièrement jusqu\'à ce qu\'elles deviennent translucides et légèrement dorées, sans les laisser brunir.',
        'Retirer la poêle du feu et verser le cognac. Attention : si vous flambez, penchez la poêle vers la flamme ou utilisez une allumette longue. Les flammes peuvent monter haut, éloignez-vous. Laisser flamber jusqu\'à extinction ou réduire simplement à feu vif 30 secondes.',
        'Remettre sur feu moyen, verser le fond de veau et gratter les sucs au fond avec une spatule en bois pour les décoller. Laisser réduire de moitié pendant environ 3-4 minutes - la sauce doit commencer à épaissir légèrement.',
        'Baisser le feu, verser la crème fraîche en remuant. Ajouter le poivre vert égoutté et le poivre noir concassé. Remuer pour bien incorporer.',
        'Laisser mijoter à feu doux pendant 3 à 4 minutes en remuant occasionnellement. La sauce est prête quand elle nappe le dos d\'une cuillère - si vous tracez une ligne avec le doigt sur la cuillère, elle ne doit pas couler.',
        'Goûter et rectifier l\'assaisonnement en sel uniquement (le poivre vert est déjà salé). Verser le jus rendu par la viande au repos dans la sauce, mélanger et servir immédiatement en saucière ou nappé sur la viande.'
      ],
      tips: [
        'Utilisez les sucs de cuisson de la viande pour plus de saveur',
        'Ne salez qu\'en fin de cuisson car le poivre vert est déjà salé',
        'Pour une sauce plus légère, remplacez la crème par du fromage frais',
        'Si la sauce est trop liquide, laissez-la réduire un peu plus. Si elle est trop épaisse, ajoutez un peu de fond ou de crème.'
      ],
      pairings: ['Entrecôte', 'Filet de boeuf', 'Tournedos', 'Bavette']
    },

    sauce_bearnaise: {
      id: 'sauce_bearnaise',
      name: 'Sauce béarnaise',
      type: 'sauce',
      category: 'classique',
      icon: '🧈',
      difficulty: 'difficile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'L\'émulsion classique à l\'estragon, reine des sauces pour viandes grillées.',
      ingredients: [
        { name: 'Jaunes d\'oeufs', quantity: '3', unit: 'pièces' },
        { name: 'Beurre', quantity: '200', unit: 'g', note: 'clarifié ou fondu' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces', note: 'finement émincées' },
        { name: 'Vinaigre d\'estragon', quantity: '5', unit: 'cl' },
        { name: 'Vin blanc sec', quantity: '5', unit: 'cl' },
        { name: 'Estragon frais', quantity: '3', unit: 'c. à soupe', note: 'ciselé' },
        { name: 'Cerfeuil', quantity: '1', unit: 'c. à soupe', note: 'ciselé' },
        { name: 'Poivre', quantity: '5', unit: 'grains', note: 'concassés' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer la réduction aromatique : dans une petite casserole, mettre les échalotes finement émincées, le vinaigre d\'estragon, le vin blanc, 1 cuillère à soupe d\'estragon ciselé et les grains de poivre concassés. Porter à ébullition puis réduire à feu moyen jusqu\'à ce qu\'il ne reste que 2 cuillères à soupe de liquide (environ 8-10 minutes). La réduction doit être sirupeuse.',
        'Filtrer cette réduction à travers une passoire fine au-dessus d\'un bol en pressant bien les échalotes pour en extraire tous les arômes. Laisser tiédir à température ambiante - la réduction ne doit pas être chaude quand vous l\'ajouterez aux jaunes.',
        'Préparer le bain-marie : faire chauffer de l\'eau dans une casserole large (l\'eau doit frémir, jamais bouillir - environ 70°C). Poser un cul-de-poule ou un saladier métallique dessus sans qu\'il touche l\'eau.',
        'Mettre les jaunes d\'œufs dans le récipient avec la réduction tiédie. Fouetter vigoureusement et constamment pendant 4-5 minutes. Le mélange doit tripler de volume, devenir mousseux et pâle, et former un ruban quand vous soulevez le fouet.',
        'Retirer le récipient du bain-marie. En fouettant constamment, verser le beurre fondu tiède (pas chaud !) en un mince filet régulier. Commencer très doucement, presque goutte à goutte, puis accélérer progressivement. L\'émulsion se forme peu à peu.',
        'La sauce est prête quand elle est onctueuse, crémeuse et nappe le dos d\'une cuillère. Si elle devient trop épaisse, ajouter quelques gouttes d\'eau tiède. Si elle commence à grainer, ajouter une cuillère d\'eau froide en fouettant vivement.',
        'Incorporer délicatement le reste de l\'estragon frais et le cerfeuil ciselés. Saler légèrement, poivrer. Servir tiède (50-60°C) dans une saucière préchauffée. Ne jamais réchauffer au-delà de 60°C sous peine de voir la sauce se séparer.'
      ],
      tips: [
        'Si la sauce tourne (aspect granuleux), ajoutez une cuillère d\'eau glacée en fouettant énergiquement, ou recommencez avec un nouveau jaune',
        'Le bain-marie ne doit jamais bouillir - l\'eau doit à peine frémir',
        'Conservez 30 min max au chaud, à 60°C maximum, en couvrant d\'un film au contact',
        'Pour une sauce Choron, ajoutez 2 c.s. de concentré de tomate à la fin'
      ],
      pairings: ['Entrecôte', 'Filet de boeuf', 'Chateaubriand', 'Pavé de boeuf']
    },

    sauce_bordelaise: {
      id: 'sauce_bordelaise',
      name: 'Sauce bordelaise',
      type: 'sauce',
      category: 'classique',
      icon: '🍷',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 30,
      servings: 4,
      description: 'Sauce au vin rouge de Bordeaux avec échalotes et moelle, pour les grandes occasions.',
      ingredients: [
        { name: 'Vin rouge de Bordeaux', quantity: '50', unit: 'cl' },
        { name: 'Échalotes', quantity: '4', unit: 'pièces', note: 'finement émincées' },
        { name: 'Os à moelle', quantity: '200', unit: 'g', note: 'moelle extraite' },
        { name: 'Fond de veau', quantity: '25', unit: 'cl' },
        { name: 'Thym', quantity: '2', unit: 'branches' },
        { name: 'Laurier', quantity: '1', unit: 'feuille' },
        { name: 'Beurre', quantity: '50', unit: 'g', note: 'froid, en dés' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'ciselé' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer la moelle : la veille idéalement, faire tremper les os à moelle dans l\'eau froide salée au réfrigérateur pour les dégorger. Le jour même, extraire délicatement la moelle des os avec un petit couteau. La couper en rondelles de 1 cm d\'épaisseur.',
        'Pocher la moelle : porter une casserole d\'eau salée à frémissement (petites bulles, environ 80°C - l\'eau ne doit surtout pas bouillir). Y plonger délicatement les rondelles de moelle et les pocher 5 minutes exactement. Elles doivent être fondantes mais garder leur forme. Les égoutter sur papier absorbant et réserver au chaud.',
        'Préparer la base de la sauce : dans une casserole à fond épais, faire fondre 20g de beurre à feu moyen. Ajouter les échalotes finement émincées et les faire suer 3-4 minutes en remuant, jusqu\'à ce qu\'elles soient fondantes et translucides, sans coloration.',
        'Verser le vin rouge de Bordeaux d\'un seul coup. Ajouter le thym et le laurier. Porter à ébullition puis baisser le feu et laisser réduire des deux tiers à feu moyen-vif pendant environ 15-20 minutes. Le vin doit devenir sirupeux et concentré, perdant son acidité.',
        'Ajouter le fond de veau et poursuivre la réduction pendant encore 10 minutes. La sauce doit napper légèrement une cuillère. Goûter régulièrement - la sauce ne doit plus être acide mais avoir un goût profond et concentré.',
        'Passer la sauce à travers un chinois fin ou une passoire au-dessus d\'une casserole propre, en pressant bien les échalotes et aromates pour en extraire tous les sucs. Remettre sur feu très doux.',
        'Monter au beurre : retirer la casserole du feu. Incorporer le reste du beurre froid coupé en petits dés, en fouettant constamment. Le beurre doit s\'émulsionner dans la sauce pour lui donner brillance et onctuosité. Ne plus faire bouillir après cette étape.',
        'Disposer délicatement les rondelles de moelle pochée dans la sauce. Parsemer de persil frais ciselé. Rectifier l\'assaisonnement en sel et poivre. Servir immédiatement en saucière chaude ou nappé directement sur la viande.'
      ],
      tips: [
        'Utilisez un bon Bordeaux (Saint-Émilion, Médoc) - la qualité du vin fait la qualité de la sauce',
        'La moelle doit être pochée à frémissement, jamais bouillie, sinon elle fond',
        'Servir avec une entrecôte grillée au feu de sarments pour un accord parfait',
        'La sauce peut être préparée à l\'avance jusqu\'à l\'étape du beurre, puis montée au dernier moment'
      ],
      pairings: ['Entrecôte', 'Côte de boeuf', 'Pavé de boeuf', 'Tournedos']
    },

    sauce_grand_veneur: {
      id: 'sauce_grand_veneur',
      name: 'Sauce grand veneur',
      type: 'sauce',
      category: 'gibier',
      icon: '🦌',
      difficulty: 'difficile',
      prepTime: 20,
      cookTime: 45,
      servings: 6,
      description: 'La sauce royale du gibier, à base de marinade et de crème.',
      ingredients: [
        { name: 'Marinade du gibier', quantity: '50', unit: 'cl', note: 'vin rouge + aromates' },
        { name: 'Fond de gibier ou veau', quantity: '30', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Vinaigre de vin', quantity: '3', unit: 'cl' },
        { name: 'Gelée de groseilles', quantity: '2', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Genièvre', quantity: '6', unit: 'baies', note: 'écrasées' },
        { name: 'Poivre', quantity: '', unit: '', note: 'généreusement' }
      ],
      steps: [
        'Récupérer la marinade du gibier : filtrer le liquide à travers une passoire fine pour retirer les légumes et aromates. Vous devez obtenir environ 50 cl de marinade parfumée au vin rouge.',
        'Dans une grande casserole, verser la marinade avec les échalotes émincées et les baies de genièvre écrasées. Porter à ébullition puis réduire à feu moyen-vif pendant 15-20 minutes jusqu\'à réduction de moitié. La marinade doit perdre son acidité et devenir plus concentrée.',
        'Ajouter le fond de gibier (ou à défaut fond de veau corsé) et poursuivre la réduction pendant encore 15 minutes. Écumer régulièrement les impuretés qui remontent à la surface. La sauce doit épaissir et napper légèrement une cuillère.',
        'Incorporer la crème fraîche en remuant, puis la gelée de groseilles. La gelée va fondre et apporter une douceur qui équilibre l\'acidité du vin et de la marinade. Laisser mijoter à feu doux pendant 10 minutes en remuant régulièrement.',
        'Passer la sauce au chinois fin au-dessus d\'une casserole propre, en pressant fermement avec le dos d\'une louche pour extraire tous les sucs des échalotes. La sauce doit être lisse et veloutée.',
        'Remettre sur feu très doux. Retirer du feu et monter au beurre froid en dés en fouettant vigoureusement. Le beurre doit s\'émulsionner et donner du brillant à la sauce. Ajouter le vinaigre de vin pour relever les saveurs.',
        'Poivrer généreusement au moulin - le poivre est essentiel dans cette sauce royale. Goûter et rectifier l\'assaisonnement si nécessaire. Servir en saucière préchauffée, accompagnant votre pièce de gibier.'
      ],
      tips: [
        'Conservez toujours la marinade de votre gibier dans un récipient au frais pour préparer cette sauce',
        'La gelée de groseilles est indispensable pour équilibrer l\'acidité du vin',
        'Peut se préparer à l\'avance jusqu\'à l\'étape du beurre, puis monter au beurre au dernier moment',
        'Pour une sauce encore plus riche, ajoutez une cuillère de sang du gibier hors du feu'
      ],
      pairings: ['Filet de cerf', 'Selle de chevreuil', 'Gigot de cerf', 'Marcassin']
    },

    sauce_poivrade: {
      id: 'sauce_poivrade',
      name: 'Sauce poivrade',
      type: 'sauce',
      category: 'gibier',
      icon: '🫚',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 60,
      servings: 6,
      description: 'Sauce classique du gibier, relevée au poivre et au vinaigre.',
      ingredients: [
        { name: 'Fond de gibier', quantity: '50', unit: 'cl' },
        { name: 'Vin rouge', quantity: '25', unit: 'cl' },
        { name: 'Vinaigre de vin', quantity: '10', unit: 'cl' },
        { name: 'Carottes', quantity: '2', unit: 'pièces', note: 'en mirepoix' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'en mirepoix' },
        { name: 'Céleri', quantity: '1', unit: 'branche' },
        { name: 'Poivre en grains', quantity: '15', unit: 'grains', note: 'concassés' },
        { name: 'Thym, laurier', quantity: '1', unit: 'bouquet' },
        { name: 'Beurre', quantity: '50', unit: 'g' }
      ],
      steps: [
        'Préparer la mirepoix : éplucher et couper les carottes, l\'oignon et le céleri en petits dés réguliers d\'environ 5 mm. Cette taille permet une cuisson homogène et une extraction optimale des saveurs.',
        'Dans une grande casserole à fond épais, faire chauffer 20g de beurre à feu moyen-vif. Quand il mousse, ajouter la mirepoix et faire revenir pendant 8-10 minutes en remuant régulièrement. Les légumes doivent être bien colorés, presque caramélisés - c\'est cette coloration qui donnera de la profondeur à la sauce.',
        'Verser le vinaigre de vin sur les légumes chauds - attention aux projections et vapeurs acides. Laisser réduire complètement à sec en grattant le fond de la casserole avec une spatule pour récupérer tous les sucs caramélisés.',
        'Verser le vin rouge et porter à ébullition. Réduire à feu moyen-vif pendant environ 10 minutes jusqu\'à ce que le volume soit réduit de moitié. L\'alcool doit s\'évaporer et le vin devenir sirupeux.',
        'Ajouter le fond de gibier (ou fond de veau corsé) et le bouquet garni. Porter à frémissement et laisser mijoter à découvert pendant 45 minutes. L\'évaporation va concentrer les saveurs. Écumer régulièrement les impuretés qui remontent à la surface.',
        'Dix minutes avant la fin de la cuisson, concasser grossièrement les grains de poivre au mortier ou sous la lame d\'un couteau et les ajouter à la sauce. Cette addition tardive préserve la puissance aromatique du poivre qui serait émoussée par une cuisson prolongée.',
        'Passer la sauce à travers un chinois fin au-dessus d\'une casserole propre, en pressant fermement les légumes pour extraire tous leurs sucs. Remettre sur feu doux et monter au beurre froid en dés en fouettant vigoureusement. Le beurre apporte brillance et onctuosité. Rectifier l\'assaisonnement et servir.'
      ],
      tips: [
        'Le poivre s\'ajoute en fin de cuisson pour garder toute sa puissance aromatique',
        'Accompagne tous les gibiers à poil : chevreuil, sanglier, lièvre, biche',
        'Peut être enrichie de gelée de groseilles pour adoucir l\'acidité',
        'Cette sauce se prépare à l\'avance et se réchauffe bien (monter au beurre au dernier moment)'
      ],
      pairings: ['Filet de chevreuil', 'Sanglier', 'Lièvre', 'Biche']
    },

    sauce_aux_morilles: {
      id: 'sauce_aux_morilles',
      name: 'Sauce aux morilles',
      type: 'sauce',
      category: 'champignons',
      icon: '🍄',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 20,
      servings: 4,
      description: 'Sauce crémeuse aux morilles, le luxe absolu pour sublimer veau et volaille.',
      ingredients: [
        { name: 'Morilles séchées', quantity: '30', unit: 'g', note: 'ou 150g fraîches' },
        { name: 'Crème fraîche', quantity: '30', unit: 'cl' },
        { name: 'Vin jaune ou blanc sec', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Réhydrater les morilles : placer les morilles séchées dans un bol et les couvrir d\'eau tiède (environ 40°C). Laisser tremper pendant 30 minutes minimum. Les morilles vont tripler de volume et devenir souples. Attention : les morilles contiennent souvent du sable.',
        'Sortir délicatement les morilles de l\'eau sans remuer le fond. Les rincer une par une sous l\'eau froide en ouvrant leur chapeau pour éliminer tout le sable. Si elles sont grosses, les couper en deux dans la longueur. Les éponger sur du papier absorbant.',
        'Filtrer soigneusement l\'eau de trempage à travers un filtre à café ou plusieurs couches d\'étamine - cette eau est un concentré de saveurs précieux, mais elle contient souvent du sable au fond. Réserver.',
        'Dans une poêle large, faire fondre le beurre à feu moyen. Ajouter les échalotes finement émincées et les faire suer 2-3 minutes jusqu\'à ce qu\'elles soient translucides, sans coloration.',
        'Augmenter le feu à moyen-vif et ajouter les morilles égouttées. Les faire sauter pendant 5 minutes en remuant doucement. Elles doivent rendre leur eau puis commencer à dorer légèrement - c\'est là que leurs arômes se développent.',
        'Déglacer avec le vin jaune (ou vin blanc sec). Ajouter l\'eau de trempage filtrée et le fond de veau. Laisser réduire à feu moyen pendant 5 minutes jusqu\'à ce que le liquide ait réduit de moitié.',
        'Baisser le feu au minimum et verser la crème fraîche. Mélanger délicatement et laisser épaissir pendant 5-8 minutes en remuant régulièrement. La sauce ne doit jamais bouillir après l\'ajout de la crème. Elle est prête quand elle nappe le dos d\'une cuillère.',
        'Goûter et assaisonner de sel et de poivre. Les morilles étant puissantes en goût, assaisonner avec parcimonie. Servir immédiatement, nappé sur la viande.'
      ],
      tips: [
        'Les morilles fraîches de printemps sont un luxe - les couper en deux et bien les nettoyer sous l\'eau',
        'Le vin jaune du Jura apporte une note de noix incomparable, sinon utilisez un bon vin blanc sec',
        'Ne jamais faire bouillir la crème, elle deviendrait granuleuse',
        'Cette sauce peut être préparée à l\'avance et réchauffée très doucement'
      ],
      pairings: ['Ris de veau', 'Poularde', 'Filet de veau', 'Volaille de Bresse']
    },

    sauce_chasseur: {
      id: 'sauce_chasseur',
      name: 'Sauce chasseur',
      type: 'sauce',
      category: 'classique',
      icon: '🍄',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce aux champignons et tomates, idéale pour le poulet et le lapin.',
      ingredients: [
        { name: 'Champignons de Paris', quantity: '200', unit: 'g', note: 'émincés' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Vin blanc sec', quantity: '15', unit: 'cl' },
        { name: 'Tomates concassées', quantity: '200', unit: 'g' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Estragon', quantity: '1', unit: 'c. à soupe' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Huile', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Préparer les champignons : les nettoyer avec un pinceau ou un papier humide (ne pas les laver sous l\'eau car ils s\'en gorgent). Couper le pied terreux et les émincer en tranches de 3-4 mm d\'épaisseur.',
        'Faire chauffer l\'huile dans une grande poêle à feu vif jusqu\'à ce qu\'elle soit bien chaude (elle doit presque fumer). Ajouter les champignons en une seule couche - ne pas surcharger la poêle sinon ils vont rendre leur eau au lieu de dorer.',
        'Faire sauter les champignons sans les remuer pendant 2 minutes pour qu\'ils colorent bien, puis les retourner et cuire encore 2-3 minutes. Ils doivent être bien dorés et avoir rendu leur eau qui se sera évaporée. Saler légèrement et réserver dans un bol.',
        'Dans la même poêle (sans la nettoyer pour garder les sucs), faire fondre le beurre à feu moyen. Ajouter les échalotes finement émincées et les faire suer 2-3 minutes jusqu\'à ce qu\'elles soient translucides et fondantes.',
        'Déglacer au vin blanc sec en grattant les sucs au fond de la poêle avec une spatule en bois. Laisser réduire de moitié à feu moyen-vif pendant environ 3 minutes.',
        'Ajouter les tomates concassées (fraîches pelées ou en boîte de qualité) et le fond de volaille. Porter à frémissement et laisser mijoter à feu doux pendant 10 minutes. La sauce doit réduire et s\'épaissir légèrement.',
        'Remettre les champignons réservés dans la sauce. Ajouter l\'estragon et le persil ciselés. Mélanger délicatement et chauffer 2 minutes sans bouillir. Rectifier l\'assaisonnement en sel et poivre, et servir immédiatement.'
      ],
      tips: [
        'Utilisez des champignons de Paris très frais (blancs ou bruns) ou des champignons sauvages de saison',
        'L\'estragon peut être remplacé par du cerfeuil ou du persil plat',
        'Pour une version plus riche, ajoutez 3 cl de cognac lors du déglaçage - flambez-le pour éliminer l\'alcool',
        'Cette sauce peut se réchauffer mais ajoutez les herbes au dernier moment'
      ],
      pairings: ['Poulet', 'Lapin', 'Veau', 'Côtes de porc']
    },

    sauce_madere: {
      id: 'sauce_madere',
      name: 'Sauce Madère',
      type: 'sauce',
      category: 'classique',
      icon: '🍷',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      description: 'Sauce élégante au vin de Madère, parfaite pour le veau et les rognons.',
      ingredients: [
        { name: 'Madère', quantity: '15', unit: 'cl' },
        { name: 'Fond de veau', quantity: '25', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Dans une casserole à fond épais, faire fondre 20g de beurre à feu moyen. Ajouter les échalotes finement émincées et les faire suer pendant 3-4 minutes en remuant régulièrement. Elles doivent devenir translucides et fondantes, sans prendre de couleur.',
        'Verser le Madère d\'un seul coup. Porter à ébullition et laisser réduire à feu moyen-vif pendant environ 5 minutes jusqu\'à ce que le volume soit réduit de moitié. L\'alcool doit s\'évaporer et le vin devenir sirupeux avec une belle couleur ambrée.',
        'Ajouter le fond de veau de qualité. Porter à nouveau à frémissement et laisser réduire pendant 10 minutes à feu moyen. La sauce doit napper légèrement le dos d\'une cuillère. Goûter régulièrement - elle doit avoir un goût riche et profond, sans acidité.',
        'Si vous souhaitez une sauce parfaitement lisse, passer au chinois fin au-dessus d\'une casserole propre en pressant les échalotes. Sinon, les garder pour plus de texture.',
        'Remettre sur feu très doux. Retirer du feu et incorporer le reste du beurre froid coupé en petits dés, en fouettant énergiquement. Le beurre doit s\'émulsionner progressivement dans la sauce pour lui donner brillance et onctuosité. Ne plus faire bouillir après cette étape.',
        'Goûter et rectifier l\'assaisonnement en sel et poivre. Servir immédiatement en saucière préchauffée ou nappé sur la viande.'
      ],
      tips: [
        'Utilisez un vrai vin de Madère (Sercial, Verdelho ou Bual), pas un vin de cuisine de mauvaise qualité',
        'Le Porto peut remplacer le Madère pour une version légèrement différente',
        'Parfaite avec des champignons de Paris sautés ou des morilles',
        'Cette sauce peut être préparée à l\'avance jusqu\'à la réduction, puis montée au beurre au moment de servir'
      ],
      pairings: ['Filet mignon', 'Rognons', 'Ris de veau', 'Tournedos']
    },

    sauce_moutarde: {
      id: 'sauce_moutarde',
      name: 'Sauce moutarde',
      type: 'sauce',
      category: 'classique',
      icon: '🟡',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce crémeuse à la moutarde, parfaite pour le lapin et le porc.',
      ingredients: [
        { name: 'Moutarde de Dijon', quantity: '3', unit: 'c. à soupe' },
        { name: 'Moutarde à l\'ancienne', quantity: '2', unit: 'c. à soupe' },
        { name: 'Crème fraîche', quantity: '25', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '20', unit: 'g' },
        { name: 'Estragon', quantity: '1', unit: 'c. à soupe', note: 'optionnel' }
      ],
      steps: [
        'Dans une casserole moyenne, faire fondre le beurre à feu moyen. Ajouter les échalotes finement émincées et les faire suer pendant 3-4 minutes en remuant régulièrement. Elles doivent devenir translucides et fondantes, sans prendre de couleur - la coloration apporterait de l\'amertume.',
        'Verser le vin blanc sec d\'un seul coup. Augmenter le feu et laisser réduire à feu moyen-vif pendant environ 3-4 minutes jusqu\'à ce que le volume soit réduit de moitié. L\'alcool doit s\'évaporer complètement.',
        'Baisser le feu à moyen-doux et verser la crème fraîche. Mélanger délicatement et porter à frémissement (petites bulles sur les bords). Laisser épaissir pendant 4-5 minutes en remuant régulièrement. La sauce doit napper le dos d\'une cuillère.',
        'ÉTAPE CRUCIALE : Retirer complètement la casserole du feu et attendre 30 secondes que la sauce cesse de frémir. Incorporer alors la moutarde de Dijon et la moutarde à l\'ancienne en fouettant vigoureusement. La moutarde ajoutée dans une sauce trop chaude ou qui bout deviendrait amère et perdrait sa saveur.',
        'Ajouter l\'estragon ciselé si utilisé - il apporte une fraîcheur qui s\'accorde parfaitement avec la moutarde. Mélanger délicatement.',
        'Goûter et rectifier l\'assaisonnement en sel et poivre. Attention : la moutarde apporte déjà du sel et du piquant. Servir immédiatement sans réchauffer - si nécessaire, réchauffer très doucement sans jamais faire bouillir.'
      ],
      tips: [
        'Règle d\'or : la moutarde s\'ajoute TOUJOURS hors du feu pour préserver sa saveur et éviter l\'amertume',
        'Mélanger moutarde de Dijon (piquant) et à l\'ancienne (texture avec les grains) donne le meilleur résultat',
        'Pour une version sucrée-salée, ajouter 1 c.s. de miel en même temps que la moutarde',
        'Si la sauce est trop épaisse, détendre avec un peu de crème ou de vin blanc froid'
      ],
      pairings: ['Lapin', 'Côtes de porc', 'Andouillette', 'Rognons']
    },

    sauce_aux_airelles: {
      id: 'sauce_aux_airelles',
      name: 'Sauce aux airelles',
      type: 'sauce',
      category: 'fruits',
      icon: '🔴',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      description: 'Sauce aigre-douce aux baies, traditionnelle avec le gibier scandinave.',
      ingredients: [
        { name: 'Airelles (canneberges)', quantity: '200', unit: 'g', note: 'fraîches ou surgelées' },
        { name: 'Sucre', quantity: '50', unit: 'g' },
        { name: 'Vin rouge', quantity: '10', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '15', unit: 'cl' },
        { name: 'Zeste d\'orange', quantity: '1', unit: 'pièce' },
        { name: 'Cannelle', quantity: '1', unit: 'pincée' }
      ],
      steps: [
        'Si vous utilisez des airelles fraîches ou surgelées, les rincer brièvement. Les placer dans une casserole à fond épais avec le sucre. Faire chauffer à feu doux en remuant doucement jusqu\'à ce que le sucre fonde et que les baies commencent à éclater et rendre leur jus (environ 5-7 minutes).',
        'Prélever le zeste de l\'orange à l\'aide d\'un zesteur ou d\'un économe (en évitant la partie blanche amère), puis le tailler en fine julienne. Ajouter le zeste et le vin rouge aux airelles.',
        'Augmenter légèrement le feu et laisser mijoter à découvert pendant 10 minutes. La sauce doit réduire et s\'épaissir. Les baies vont se transformer en une compotée avec des morceaux - c\'est la texture recherchée.',
        'Ajouter le fond de gibier (ou de volaille) et la pincée de cannelle. Mélanger et poursuivre la cuisson pendant 3-4 minutes. La sauce doit avoir une consistance nappante mais rester fluide.',
        'Goûter et ajuster l\'équilibre sucré-acide : les airelles étant naturellement très acides, ajoutez du sucre si nécessaire. Pour une texture plus lisse, mixer partiellement au mixeur plongeant en gardant quelques baies entières pour la présentation.',
        'Cette sauce peut être servie tiède ou à température ambiante. Elle se conserve jusqu\'à une semaine au réfrigérateur et peut être réchauffée doucement au moment de servir.'
      ],
      tips: [
        'Les canneberges (cranberries) remplacent parfaitement les airelles - elles sont plus faciles à trouver',
        'Se conserve 1 semaine au réfrigérateur dans un bocal hermétique',
        'Accompagne aussi le foie gras, la dinde de Noël et le gibier à plumes',
        'Pour une version plus adulte, remplacez une partie du vin par du Porto ou du Grand Marnier'
      ],
      pairings: ['Filet de cerf', 'Renne', 'Sanglier', 'Canard']
    },

    sauce_bigarade: {
      id: 'sauce_bigarade',
      name: 'Sauce bigarade',
      type: 'sauce',
      category: 'agrumes',
      icon: '🍊',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'La sauce à l\'orange amère, classique du canard.',
      ingredients: [
        { name: 'Oranges amères (bigarades)', quantity: '2', unit: 'pièces', note: 'ou oranges normales + citron' },
        { name: 'Fond de canard ou veau', quantity: '30', unit: 'cl' },
        { name: 'Sucre', quantity: '50', unit: 'g' },
        { name: 'Vinaigre de vin', quantity: '3', unit: 'cl' },
        { name: 'Grand Marnier', quantity: '3', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Prélever les zestes des oranges à l\'aide d\'un économe en évitant la partie blanche amère. Tailler ces zestes en fine julienne (allumettes de 2 mm de large). Presser les oranges et réserver le jus.',
        'Blanchir les zestes : les plonger dans une casserole d\'eau bouillante pendant 2 minutes pour ôter l\'amertume. Les égoutter et les rafraîchir sous l\'eau froide. Réserver.',
        'Préparer le caramel : dans une casserole à fond épais, faire fondre le sucre à sec à feu moyen sans remuer. Laisser caraméliser jusqu\'à obtenir une couleur blond doré (pas plus foncé, sinon le caramel sera amer). Surveiller attentivement car le caramel peut brûler en quelques secondes.',
        'Décuire le caramel : dès que la couleur est atteinte, verser immédiatement le vinaigre de vin. ATTENTION : le mélange va crépiter violemment et des vapeurs acides vont se dégager. Éloigner le visage et remuer rapidement pour dissoudre le caramel.',
        'Ajouter le jus d\'orange et le fond de canard (ou veau). Porter à ébullition et laisser réduire à feu moyen pendant environ 15 minutes jusqu\'à ce que la sauce ait réduit de moitié et nappe légèrement une cuillère.',
        'Hors du feu, ajouter le Grand Marnier - son parfum d\'orange va renforcer la sauce. Remettre brièvement sur feu doux si nécessaire pour intégrer.',
        'Monter au beurre froid en dés en fouettant vigoureusement hors du feu. Ajouter les zestes blanchis. Goûter et rectifier l\'assaisonnement. Servir immédiatement nappé sur le canard, avec éventuellement quelques suprêmes d\'orange pelés à vif.'
      ],
      tips: [
        'Sans bigarades (oranges amères) : utilisez 1 orange douce + le jus d\'un demi-citron pour retrouver l\'acidité',
        'Le caramel ne doit pas être trop foncé sinon il apportera de l\'amertume indésirable',
        'Servir avec des suprêmes d\'orange pelés à vif pour une présentation élégante',
        'Cette sauce peut être préparée à l\'avance jusqu\'à la réduction, puis montée au beurre au dernier moment'
      ],
      pairings: ['Magret de canard', 'Canard rôti', 'Canard sauvage', 'Oie']
    },

    jus_de_viande: {
      id: 'jus_de_viande',
      name: 'Jus de viande',
      type: 'sauce',
      category: 'fond',
      icon: '🥄',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Le jus simple et pur, essence même de la viande.',
      ingredients: [
        { name: 'Jus de cuisson de la viande', quantity: '', unit: '', note: 'récupéré' },
        { name: 'Vin rouge ou blanc', quantity: '10', unit: 'cl' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '20', unit: 'g', note: 'froid' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'optionnel' }
      ],
      steps: [
        'Après cuisson de la viande, la retirer et la laisser reposer sur une planche légèrement inclinée pour récupérer les sucs. Pendant ce temps, incliner la poêle ou cocotte et retirer l\'excès de graisse fondue avec une cuillère, mais conserver tous les sucs caramélisés collés au fond - ils sont l\'âme du jus.',
        'Si vous souhaitez plus de saveur, émincer finement une échalote et la faire suer 1-2 minutes dans les sucs résiduels avec une noix de beurre jusqu\'à ce qu\'elle soit fondante et translucide. Cette étape est facultative mais apporte de la profondeur.',
        'Déglacer au vin rouge ou blanc selon la viande (rouge pour boeuf/agneau, blanc pour veau/volaille). Verser d\'un coup et gratter énergiquement tous les sucs avec une spatule en bois. C\'est le coeur du goût. Laisser réduire de moitié à feu vif, environ 2-3 minutes.',
        'Verser le fond de veau et porter à ébullition. Réduire le feu à moyen et laisser réduire jusqu\'à consistance nappante - environ 5-8 minutes. Le jus doit napper légèrement le dos d\'une cuillère et laisser une trace quand on passe le doigt.',
        'Pendant la réduction, récupérer le jus qui s\'est écoulé de la viande au repos. Ce jus rosé est précieux - l\'ajouter à la sauce en fin de réduction.',
        'Hors du feu, monter au beurre froid coupé en petits dés. Fouetter énergiquement pour incorporer le beurre par émulsion - cela donne brillance et onctuosité. Ne pas remettre sur le feu après cette étape sinon le beurre va se séparer.',
        'Goûter et rectifier l\'assaisonnement. Passer au chinois fin pour une texture parfaitement lisse, ou servir tel quel pour un côté plus rustique. Servir immédiatement en saucière chaude ou nappé sur la viande.'
      ],
      tips: [
        'Le jus doit napper légèrement le dos d\'une cuillère - s\'il est trop liquide, réduire encore ; trop épais, allonger avec un peu de fond',
        'Toujours récupérer le jus de repos de la viande, c\'est un concentré de saveur',
        'Plus la viande est de qualité, plus le jus peut rester simple - avec une belle côte de boeuf, eau + sucs suffisent',
        'Préparer une saucière chaude (rincée à l\'eau bouillante) pour maintenir le jus à température'
      ],
      pairings: ['Toutes viandes rôties ou grillées']
    },

    sauce_au_roquefort: {
      id: 'sauce_au_roquefort',
      name: 'Sauce au Roquefort',
      type: 'sauce',
      category: 'fromage',
      icon: '🧀',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce crémeuse au bleu, puissante et fondante.',
      ingredients: [
        { name: 'Roquefort', quantity: '100', unit: 'g' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Noix', quantity: '30', unit: 'g', note: 'concassées' },
        { name: 'Poivre', quantity: '', unit: '', note: 'du moulin' },
        { name: 'Porto', quantity: '2', unit: 'cl', note: 'optionnel' }
      ],
      steps: [
        'Sortir le roquefort du réfrigérateur 15 minutes avant pour qu\'il soit à température ambiante - il fondra plus facilement et de façon plus homogène. L\'émietter grossièrement à la fourchette dans un bol en retirant la croûte si elle est trop sèche.',
        'Dans une casserole à fond épais, verser la crème fraîche et la chauffer à feu doux. Il est crucial de ne jamais dépasser le frémissement : la crème doit être chaude mais ne doit absolument pas bouillir, sinon le fromage deviendra granuleux et huileux.',
        'Ajouter progressivement le roquefort émietté dans la crème chaude, en remuant constamment avec une cuillère en bois ou un fouet. Le fromage va fondre lentement et créer une sauce onctueuse. Continuer de remuer 3-4 minutes jusqu\'à obtention d\'une texture parfaitement lisse.',
        'Si vous utilisez le porto, l\'ajouter maintenant. Il apporte une note sucrée qui équilibre le côté salé du fromage. Mélanger délicatement pour incorporer.',
        'Goûter la sauce avant d\'assaisonner. Le roquefort étant déjà très salé, il ne faut généralement pas ajouter de sel. Poivrer généreusement au moulin - le poivre noir se marie parfaitement avec le bleu.',
        'Pendant ce temps, torréfier légèrement les noix concassées dans une poêle sèche à feu moyen pendant 2 minutes en remuant - cela développe leurs arômes. Les réserver.',
        'Servir la sauce immédiatement, nappée sur la viande ou en saucière. Parsemer de noix torréfiées au dernier moment pour conserver leur croquant. La sauce épaissit en refroidissant, si elle est trop épaisse, détendre avec un peu de crème tiède.'
      ],
      tips: [
        'Ne jamais faire bouillir la sauce - la protéine du fromage se séparerait et la texture deviendrait granuleuse',
        'Tout bleu peut remplacer le roquefort : fourme d\'Ambert (plus doux), gorgonzola (plus crémeux), bleu d\'Auvergne',
        'Excellent accompagné d\'une poire pochée au vin qui apporte fraîcheur et contraste sucré',
        'Pour une version plus légère, remplacer la moitié de la crème par du fromage blanc'
      ],
      pairings: ['Entrecôte', 'Tournedos', 'Burger', 'Filet de boeuf']
    },

    sauce_au_miel: {
      id: 'sauce_au_miel',
      name: 'Sauce au miel et épices',
      type: 'sauce',
      category: 'sucree_salee',
      icon: '🍯',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce sucrée-salée aux notes orientales.',
      ingredients: [
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sauce soja', quantity: '3', unit: 'c. à soupe' },
        { name: 'Vinaigre de riz', quantity: '2', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Ail', quantity: '1', unit: 'gousse' },
        { name: 'Piment', quantity: '1', unit: 'pincée', note: 'optionnel' },
        { name: 'Sésame', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Peler et râper finement le gingembre frais - il doit être en purée fine pour bien se fondre dans la sauce. Écraser l\'ail et le hacher très finement ou le passer au presse-ail.',
        'Dans un bol, mélanger le miel, la sauce soja, le vinaigre de riz, le gingembre râpé et l\'ail haché. Bien fouetter pour homogénéiser le miel qui a tendance à rester au fond. Ajouter le piment si désiré - une pincée suffit pour une légère chaleur.',
        'Verser ce mélange dans une petite casserole. Porter à frémissement à feu moyen en remuant régulièrement. Ne pas faire bouillir vigoureusement car le miel peut brûler et devenir amer.',
        'Laisser réduire à feu doux pendant 5 minutes environ, en remuant de temps en temps. La sauce doit épaissir légèrement et devenir sirupeuse - elle doit napper le dos d\'une cuillère mais encore couler.',
        'Pour glacer une viande : badigeonner la viande de sauce pendant les 5-10 dernières minutes de cuisson. Le miel va caraméliser et créer une croûte brillante et savoureuse. Badigeonner plusieurs fois en couches fines plutôt qu\'une seule fois épais.',
        'Pendant ce temps, torréfier les graines de sésame dans une poêle sèche à feu moyen pendant 1-2 minutes jusqu\'à ce qu\'elles soient dorées et parfumées. Les remuer constamment car elles brûlent facilement.',
        'Servir la sauce en saucière ou nappée sur la viande. Parsemer généreusement de graines de sésame torréfiées. La sauce se conserve 1 semaine au réfrigérateur et se réchauffe bien.'
      ],
      tips: [
        'Excellent pour laquer des travers de porc - badigeonner toutes les 10 minutes pendant la cuisson',
        'Le miel caramélise très vite sous le grill : surveiller attentivement pour éviter qu\'il brûle',
        'Version thaï : ajouter citronnelle ciselée, feuilles de combava et coriandre fraîche au service',
        'Remplacer le vinaigre de riz par du jus de citron vert pour une touche plus acidulée'
      ],
      pairings: ['Travers de porc', 'Magret', 'Poulet', 'Caille']
    },

    sauce_aux_cerises: {
      id: 'sauce_aux_cerises',
      name: 'Sauce aux cerises',
      type: 'sauce',
      category: 'fruits',
      icon: '🍒',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce fruitée traditionnelle pour le gibier et le canard.',
      ingredients: [
        { name: 'Cerises', quantity: '300', unit: 'g', note: 'dénoyautées' },
        { name: 'Vin rouge', quantity: '15', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '15', unit: 'cl' },
        { name: 'Sucre', quantity: '30', unit: 'g' },
        { name: 'Vinaigre balsamique', quantity: '1', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '1', unit: 'branche' }
      ],
      steps: [
        'Si vous utilisez des cerises fraîches, les dénoyauter à l\'aide d\'un dénoyauteur ou en les écrasant légèrement avec le plat d\'un couteau. Garder quelques cerises entières pour la présentation. Les cerises griottes (plus acides) sont traditionnellement utilisées mais des cerises noires ou burlat conviennent aussi.',
        'Dans une sauteuse à fond épais, faire un caramel à sec avec le sucre : saupoudrer le sucre uniformément et le laisser fondre à feu moyen sans remuer. Dès qu\'il commence à colorer sur les bords, agiter légèrement la poêle pour uniformiser. Arrêter dès qu\'il est blond doré - il ne doit pas devenir brun foncé.',
        'Immédiatement, ajouter les cerises dénoyautées dans le caramel. Attention aux projections - le caramel chaud crépite au contact du jus des cerises. Faire sauter 2 minutes à feu vif pour enrober les cerises et les saisir légèrement. Elles doivent garder leur forme.',
        'Déglacer avec le vin rouge en versant d\'un coup. Ajouter la branche de thym. Gratter les sucs caramélisés au fond de la poêle. Laisser réduire 3 minutes jusqu\'à ce que l\'alcool se soit évaporé.',
        'Verser le fond de gibier (ou à défaut fond de veau ou de canard) et le vinaigre balsamique qui apporte une note acidulée profonde. Porter à ébullition puis réduire le feu et laisser compoter doucement 10 minutes. Les cerises doivent être tendres mais pas en compote.',
        'Retirer la branche de thym. Goûter et ajuster : si trop sucré, ajouter une goutte de vinaigre ; si trop acide, une pincée de sucre. La sauce doit avoir un équilibre sucré-acidulé.',
        'Servir tiède, nappée sur la viande ou en saucière. Pour une présentation élégante, disposer quelques cerises entières sur chaque portion. Un filet de kirsch ajouté hors du feu renforce le goût de cerise.'
      ],
      tips: [
        'Les cerises griottes apportent plus d\'acidité et sont traditionnelles - les chercher en bocal chez les épiciers fins',
        'Hors saison : cerises surgelées (les décongeler avant) ou cerises au sirop (réduire alors le sucre)',
        'Une cuillère à soupe de kirsch ajoutée hors du feu renforce considérablement le goût de cerise',
        'Cette sauce se prépare à l\'avance et se réchauffe très bien'
      ],
      pairings: ['Canard', 'Magret', 'Gibier', 'Pigeon']
    },

    sauce_au_calvados: {
      id: 'sauce_au_calvados',
      name: 'Sauce au Calvados',
      type: 'sauce',
      category: 'normandie',
      icon: '🍎',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      description: 'Sauce normande au Calvados et aux pommes.',
      ingredients: [
        { name: 'Calvados', quantity: '8', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Pommes', quantity: '2', unit: 'pièces', note: 'reinettes' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Cidre', quantity: '10', unit: 'cl', note: 'optionnel' }
      ],
      steps: [
        'Choisir des pommes à chair ferme qui tiennent à la cuisson : reinettes, golden ou granny smith. Les peler, les couper en quartiers puis en tranches épaisses de 1 cm. Retirer les pépins et le coeur.',
        'Dans une poêle bien chaude, faire fondre 20g de beurre jusqu\'à ce qu\'il mousse. Y faire dorer les pommes sur les deux faces, environ 2 minutes par côté, jusqu\'à ce qu\'elles soient dorées mais encore fermes au centre. Les réserver dans une assiette.',
        'Dans la même poêle avec les sucs des pommes, ajouter le reste du beurre. Y faire suer les échalotes émincées finement pendant 2-3 minutes jusqu\'à ce qu\'elles soient translucides et fondantes.',
        'Retirer la poêle du feu avant d\'ajouter le calvados. ATTENTION AU FLAMBAGE : le calvados s\'enflamme facilement. Soit vous flambez volontairement en inclinant la poêle vers la flamme (spectaculaire mais à faire loin de la hotte), soit vous remettez sur feu vif et laissez l\'alcool s\'évaporer 30 secondes. Dans les deux cas, les flammes peuvent être hautes - éloignez-vous.',
        'Si vous utilisez le cidre, l\'ajouter maintenant et laisser réduire de moitié à feu moyen, environ 3-4 minutes. Le cidre apporte fraîcheur et légèreté à la sauce.',
        'Verser la crème fraîche et porter à frémissement. Laisser épaissir à feu doux pendant 5 minutes en remuant régulièrement. La sauce doit napper une cuillère. Saler légèrement et poivrer.',
        'Remettre délicatement les quartiers de pommes dans la sauce pour les réchauffer 1 minute sans les écraser. Servir immédiatement, en nappant la viande et en disposant les pommes autour. Cette sauce est un classique de la cuisine normande, parfaite avec le veau ou le porc.'
      ],
      tips: [
        'Le flambage élimine l\'alcool mais conserve l\'arôme caractéristique du calvados - si vous ne flambez pas, la sauce sera plus forte en alcool',
        'Pommes pas trop mûres pour qu\'elles tiennent',
        'Parfait avec du boudin noir aussi'
      ],
      pairings: ['Porc', 'Poulet', 'Faisan', 'Andouillette']
    },

    sauce_salmis: {
      id: 'sauce_salmis',
      name: 'Sauce salmis',
      type: 'sauce',
      category: 'gibier',
      icon: '🦆',
      difficulty: 'difficile',
      prepTime: 20,
      cookTime: 45,
      servings: 4,
      description: 'Sauce traditionnelle préparée avec la carcasse du gibier à plume.',
      ingredients: [
        { name: 'Carcasse de gibier', quantity: '1', unit: 'pièce', note: 'concassée' },
        { name: 'Vin rouge', quantity: '50', unit: 'cl' },
        { name: 'Échalotes', quantity: '4', unit: 'pièces' },
        { name: 'Foie du gibier', quantity: '1', unit: 'pièce', note: 'optionnel' },
        { name: 'Cognac', quantity: '4', unit: 'cl' },
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '40', unit: 'g' }
      ],
      steps: [
        'Préparer la carcasse : après avoir prélevé les filets du gibier (bécasse, canard sauvage, perdreau, pigeon), concasser la carcasse en morceaux de 3-4 cm à l\'aide d\'un gros couteau ou d\'un feuillet. Ne pas hésiter à casser les os - ils vont libérer leur saveur. Réserver le foie s\'il y en a un.',
        'Dans une cocotte ou une grande sauteuse, faire chauffer 20g de beurre à feu vif jusqu\'à ce qu\'il soit noisette. Y faire revenir les morceaux de carcasse en les retournant régulièrement pendant 8-10 minutes. Ils doivent être bien dorés sur toutes les faces - cette coloration est cruciale pour la profondeur de goût.',
        'Ajouter les échalotes émincées et laisser colorer 2-3 minutes avec la carcasse. Elles doivent prendre une belle teinte dorée.',
        'Retirer du feu et verser le cognac. Flamber en inclinant la cocotte vers la flamme ou en utilisant une allumette longue. ATTENTION : le cognac s\'enflamme vivement. Éloignez-vous et attendez que les flammes s\'éteignent naturellement.',
        'Mouiller avec le vin rouge et ajouter le bouquet garni. Porter à ébullition puis laisser réduire à feu moyen-vif de moitié, environ 10-12 minutes. Le vin doit s\'évaporer et concentrer ses saveurs.',
        'Ajouter le fond de gibier (ou à défaut fond de veau corsé). Porter à nouveau à ébullition puis réduire le feu. Laisser mijoter doucement pendant 30 minutes à couvert entrouvert. Les os vont libérer leur gélatine et leur saveur.',
        'Passer la sauce au chinois fin en pressant fortement sur les carcasses avec le dos d\'une louche ou un pilon pour extraire le maximum de jus. Jeter les os et le bouquet garni. Remettre la sauce dans une casserole propre.',
        'Si vous utilisez le foie du gibier : l\'écraser finement à la fourchette avec le reste de beurre ramolli. Hors du feu, incorporer ce mélange dans la sauce chaude en fouettant vigoureusement - le foie va lier et enrichir la sauce, lui donnant une texture veloutée et une saveur profonde. Ne plus faire bouillir après cette étape. Servir immédiatement.'
      ],
      tips: [
        'La carcasse doit être bien colorée avant de mouiller - c\'est le secret d\'une sauce salmis réussie',
        'Le foie apporte onctuosité et profondeur incomparables - c\'est lui qui fait la vraie sauce salmis',
        'Sauce traditionnelle de la bécasse, elle est également excellente avec tout gibier à plume',
        'Se prépare pendant que le gibier rôtit et repose'
      ],
      pairings: ['Bécasse', 'Canard sauvage', 'Perdreau', 'Pigeon']
    },

    // Beurres composés
    beurre_maitre_hotel: {
      id: 'beurre_maitre_hotel',
      name: 'Beurre maître d\'hôtel',
      type: 'sauce',
      category: 'beurre',
      icon: '🧈',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 6,
      description: 'Beurre composé classique au persil et citron, parfait sur les grillades.',
      ingredients: [
        { name: 'Beurre', quantity: '125', unit: 'g', note: 'mou' },
        { name: 'Persil', quantity: '3', unit: 'c. à soupe', note: 'finement haché' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '1', unit: 'pincée' },
        { name: 'Poivre', quantity: '', unit: '', note: 'du moulin' }
      ],
      steps: [
        'Sortir le beurre du réfrigérateur au moins 30 minutes à l\'avance. Il doit être mou mais pas fondu - la consistance d\'une pommade. S\'il est trop dur, il sera difficile à travailler ; trop mou, il sera huileux.',
        'Laver et essorer parfaitement le persil (l\'eau résiduelle ferait "pleurer" le beurre). Retirer les tiges et hacher très finement les feuilles - le hachis doit être presque une purée. Plus le persil est fin, mieux il s\'intègre au beurre.',
        'Dans un bol, travailler le beurre mou à la fourchette ou à la spatule jusqu\'à ce qu\'il soit crémeux. Y incorporer progressivement le persil haché en mélangeant bien après chaque ajout pour une répartition homogène.',
        'Ajouter le jus de citron fraîchement pressé (jamais de jus en bouteille). Le citron apporte de la fraîcheur et "relève" le beurre. Saler légèrement et poivrer généreusement au moulin. Goûter et ajuster.',
        'Déposer le beurre parfumé sur une feuille de film alimentaire. Le rouler en boudin d\'environ 3 cm de diamètre en serrant bien aux extrémités comme un bonbon. Taper doucement le boudin sur le plan de travail pour éliminer les bulles d\'air.',
        'Réfrigérer au minimum 1 heure pour que le beurre durcisse. Idéalement le préparer la veille pour que les parfums se développent.',
        'Au moment de servir, découper des rondelles de 5 mm à 1 cm d\'épaisseur avec un couteau trempé dans l\'eau chaude. Déposer immédiatement sur la viande chaude sortie du grill - le beurre va fondre lentement en nappant la viande de sa saveur persillée.'
      ],
      tips: [
        'Se conserve 1 semaine au réfrigérateur, 3 mois au congélateur - découpez-le en rondelles avant de congeler',
        'Ajouter une demi-gousse d\'ail finement râpée pour une version plus corsée (beurre d\'escargot)',
        'Déposer sur la viande au tout dernier moment, juste avant de servir - le beurre doit fondre à table',
        'Utilisez un beurre de qualité (AOP Charentes-Poitou ou d\'Isigny) pour un résultat optimal'
      ],
      pairings: ['Entrecôte', 'Pavé de boeuf', 'Côte de boeuf', 'Poisson grillé']
    },

    beurre_cafe_paris: {
      id: 'beurre_cafe_paris',
      name: 'Beurre café de Paris',
      type: 'sauce',
      category: 'beurre',
      icon: '🧈',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 0,
      servings: 8,
      description: 'Beurre composé richement parfumé, spécialité suisse pour l\'entrecôte.',
      ingredients: [
        { name: 'Beurre', quantity: '200', unit: 'g', note: 'mou' },
        { name: 'Ketchup', quantity: '1', unit: 'c. à soupe' },
        { name: 'Moutarde de Dijon', quantity: '1', unit: 'c. à café' },
        { name: 'Cognac', quantity: '1', unit: 'c. à soupe' },
        { name: 'Câpres', quantity: '1', unit: 'c. à soupe', note: 'hachées' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'finement hachée' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Paprika', quantity: '1', unit: 'c. à café' },
        { name: 'Curry', quantity: '1/2', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Sortir le beurre 45 minutes à l\'avance pour qu\'il soit bien mou, presque pommade. La texture est cruciale : il doit pouvoir absorber tous les arômes des ingrédients.',
        'Préparer tous les ingrédients : émincer très finement l\'échalote, hacher finement les câpres et le persil. Plus les éléments sont fins, meilleure sera l\'intégration dans le beurre.',
        'Dans un grand bol, travailler le beurre mou à la fourchette ou au batteur électrique jusqu\'à ce qu\'il soit léger et crémeux, presque comme une chantilly.',
        'Incorporer un à un : le ketchup (pour la couleur et la douceur), la moutarde de Dijon (pour le piquant), le cognac (pour l\'arôme). Mélanger après chaque ajout.',
        'Ajouter ensuite les éléments solides : échalote, câpres et persil hachés. Puis les épices : paprika et curry. Ces derniers donnent la couleur caractéristique orangée du beurre café de Paris.',
        'Goûter et assaisonner avec sel et poivre. Le mélange doit être équilibré entre toutes les saveurs : légère acidité du ketchup, piquant de la moutarde, chaleur du curry.',
        'Former un boudin épais (4-5 cm de diamètre) dans du film alimentaire, en serrant bien. Réfrigérer au minimum 2 heures, idéalement une nuit, pour que tous les parfums se marient.',
        'Couper en médaillons épais de 1 cm environ. Servir sur une entrecôte brûlante - le beurre doit fondre et napper la viande de sa multitude de saveurs. Le spectacle du beurre qui fond fait partie du plaisir.'
      ],
      tips: [
        'La recette originale du restaurant genevois est secrète depuis 1930 - cette version est une interprétation classique',
        'Servir sur une entrecôte brûlante sortie du grill, le contraste de température est essentiel',
        'Certaines versions incluent de la pâte d\'anchois pour plus d\'umami - à essayer si vous aimez',
        'Accompagner traditionnellement de frites et d\'une salade verte'
      ],
      pairings: ['Entrecôte', 'Bavette', 'Onglet', 'Filet de boeuf']
    },

    beurre_aux_herbes: {
      id: 'beurre_aux_herbes',
      name: 'Beurre aux herbes',
      type: 'sauce',
      category: 'beurre',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 6,
      description: 'Beurre parfumé aux herbes fraîches du jardin.',
      ingredients: [
        { name: 'Beurre', quantity: '125', unit: 'g', note: 'mou' },
        { name: 'Ciboulette', quantity: '2', unit: 'c. à soupe', note: 'ciselée' },
        { name: 'Estragon', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Cerfeuil', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Persil', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Cueillir ou acheter des herbes fraîches de qualité - les herbes séchées ne conviennent pas pour ce beurre. Choisir des herbes bien vertes, sans flétrissure. La combinaison classique (ciboulette, estragon, cerfeuil, persil) peut être adaptée selon vos préférences et la saison.',
        'Laver délicatement les herbes sous un filet d\'eau froide. Les essorer parfaitement dans une essoreuse à salade puis les tamponner dans un torchon propre. Toute trace d\'eau ferait "pleurer" le beurre et réduirait sa conservation.',
        'Ciseler la ciboulette en fines rondelles de 2 mm. Hacher séparément l\'estragon, le cerfeuil et le persil très finement - ils doivent être presque en purée. Prendre son temps pour cette étape : plus les herbes sont fines, mieux elles s\'intègrent au beurre.',
        'Sortir le beurre à température ambiante 30 minutes avant. Il doit être mou mais pas huileux. Le travailler à la fourchette ou au batteur jusqu\'à obtenir une consistance crémeuse.',
        'Incorporer les herbes hachées au beurre en mélangeant délicatement pour ne pas écraser les herbes. Le beurre doit être moucheté de vert uniformément. Saler légèrement et poivrer selon votre goût.',
        'Goûter et ajuster : si le goût d\'une herbe domine trop, équilibrer avec les autres. Le mélange doit être harmonieux, aucune herbe ne doit prendre le dessus.',
        'Étaler le beurre sur une feuille de film alimentaire, le rouler en boudin serré de 3 cm de diamètre. Bien fermer les extrémités. Réfrigérer au minimum 2 heures.',
        'Découper en rondelles au moment de servir et déposer sur viande chaude, poisson grillé ou légumes vapeur. Le beurre fond et libère ses parfums d\'herbes fraîches.'
      ],
      tips: [
        'Utiliser impérativement des herbes fraîches - les herbes séchées donneraient un résultat médiocre',
        'Varier selon la saison : basilic et menthe en été, persil plat et thym en hiver',
        'Parfait sur légumes vapeur (asperges, haricots verts) ou sur un poisson simplement poché',
        'Se congèle très bien : prédécouper en rondelles avant congélation pour un usage pratique'
      ],
      pairings: ['Poulet', 'Veau', 'Poisson', 'Légumes']
    },

    // Sauces au vin
    sauce_au_porto: {
      id: 'sauce_au_porto',
      name: 'Sauce au porto',
      type: 'sauce',
      category: 'classique',
      icon: '🍷',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce élégante et légèrement sucrée, idéale pour le foie gras et le canard.',
      ingredients: [
        { name: 'Porto rouge', quantity: '20', unit: 'cl' },
        { name: 'Fond de veau', quantity: '20', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces', note: 'émincées' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Miel', quantity: '1', unit: 'c. à café', note: 'optionnel' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement les échalotes. Dans une sauteuse, faire fondre une noix de beurre (environ 15g) à feu moyen. Y faire suer les échalotes 2-3 minutes jusqu\'à ce qu\'elles soient translucides et fondantes, sans coloration - elles doivent rester pâles pour ne pas altérer l\'élégance de la sauce.',
        'Verser le porto rouge d\'un seul coup. Utiliser un porto de qualité (Ruby ou Tawny), pas un porto de cuisine. L\'alcool va remonter en vapeurs parfumées. Laisser réduire à feu moyen-vif jusqu\'à ce qu\'il n\'en reste que la moitié, environ 5-7 minutes. Le porto va s\'épaissir et devenir sirupeux.',
        'Ajouter le fond de veau. Porter à ébullition puis réduire le feu. Laisser mijoter doucement pendant 10 minutes supplémentaires. La sauce doit réduire et épaissir - elle doit napper légèrement une cuillère.',
        'Si vous souhaitez une touche sucrée supplémentaire, ajouter le miel maintenant. Il renforce la douceur naturelle du porto et apporte une belle brillance. Mélanger pour dissoudre.',
        'Goûter la sauce. Si elle est trop sucrée, un petit trait de vinaigre balsamique peut l\'équilibrer. Saler légèrement (le fond est déjà salé) et poivrer.',
        'Hors du feu, monter la sauce au beurre froid coupé en petits dés. Incorporer le beurre en fouettant vigoureusement - il va s\'émulsionner et donner à la sauce brillance et onctuosité. Ne plus faire chauffer après cette étape.',
        'Servir immédiatement dans une saucière chaude ou directement nappée sur la viande. Cette sauce est particulièrement élégante avec le foie gras poêlé ou un magret rosé.'
      ],
      tips: [
        'Utiliser un porto de qualité - le goût sera directement impacté. Un Ruby pour plus de fruité, un Tawny pour plus de complexité',
        'Ne pas trop réduire pour garder la douceur caractéristique du porto - la sauce doit rester soyeuse',
        'Un trait de vinaigre balsamique vieilli peut relever et équilibrer la douceur si nécessaire',
        'Cette sauce se prépare rapidement pendant le repos de la viande'
      ],
      pairings: ['Magret', 'Foie gras', 'Tournedos', 'Filet mignon de porc']
    },

    sauce_au_cidre: {
      id: 'sauce_au_cidre',
      name: 'Sauce au cidre',
      type: 'sauce',
      category: 'regionale',
      icon: '🍎',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce normande légère et fruitée, parfaite avec le porc et la volaille.',
      ingredients: [
        { name: 'Cidre brut', quantity: '25', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Pomme', quantity: '1', unit: 'pièce', note: 'en dés' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement les échalotes. Peler la pomme (choisir une variété ferme comme Reinette ou Granny Smith), la couper en petits dés de 1 cm en retirant le coeur et les pépins.',
        'Dans une sauteuse, faire fondre le beurre à feu moyen. Y faire revenir les échalotes 1 minute puis ajouter les dés de pomme. Faire sauter le tout 3-4 minutes jusqu\'à ce que les pommes soient légèrement dorées mais encore fermes.',
        'Verser le cidre brut d\'un coup. Choisir un vrai cidre fermier normand ou breton, pas un cidre industriel sucré. L\'effervescence va faire remonter les saveurs. Gratter les sucs au fond de la poêle.',
        'Laisser réduire à feu moyen-vif jusqu\'à ce que le cidre ait réduit de moitié, environ 5-6 minutes. Le cidre va perdre son acidité et concentrer ses arômes fruités.',
        'Verser la crème fraîche épaisse. Mélanger et porter à frémissement. Laisser épaissir à feu doux pendant 5 minutes en remuant de temps en temps. La sauce doit napper une cuillère.',
        'Goûter et assaisonner de sel et poivre. La sauce doit avoir un bon équilibre entre la douceur de la crème et l\'acidité fruitée du cidre. Ajuster si nécessaire.',
        'Pour plus de caractère normand, ajouter un trait de calvados hors du feu au dernier moment. Servir immédiatement avec les dés de pomme visibles dans la sauce - ils apportent texture et couleur.'
      ],
      tips: [
        'Choisir un cidre brut fermier AOP de Normandie ou de Bretagne pour l\'authenticité',
        'Un trait de calvados ajouté hors du feu renforce considérablement le caractère normand',
        'Les dés de pomme peuvent être retirés pour une sauce plus lisse, ou gardés pour plus de texture',
        'Accompagnement idéal du traditionnel cochon de lait rôti'
      ],
      pairings: ['Côte de porc', 'Poulet', 'Lapin', 'Andouillette']
    },

    sauce_vin_blanc: {
      id: 'sauce_vin_blanc',
      name: 'Sauce au vin blanc',
      type: 'sauce',
      category: 'classique',
      icon: '🍾',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      description: 'Sauce légère et élégante pour poissons et volailles.',
      ingredients: [
        { name: 'Vin blanc sec', quantity: '20', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement les échalotes - elles doivent presque fondre dans la sauce finale. Dans une sauteuse, faire fondre la moitié du beurre à feu moyen. Y faire suer les échalotes pendant 2-3 minutes jusqu\'à ce qu\'elles soient translucides et fondantes, sans aucune coloration.',
        'Verser le vin blanc sec d\'un seul coup. Utiliser un vin de qualité que vous boiriez - muscadet, chablis, entre-deux-mers ou sauvignon. Jamais de "vin de cuisine" qui apporterait de l\'acidité et de l\'amertume.',
        'Augmenter le feu et laisser réduire des deux tiers. Le vin va perdre son alcool et concentrer ses arômes. Cette réduction prend environ 5-7 minutes. La sauce doit avoir réduit de façon significative.',
        'Baisser le feu à moyen-doux et verser la crème fraîche. Mélanger et laisser épaissir 3-4 minutes. La sauce doit napper une cuillère mais rester fluide.',
        'Goûter et assaisonner de sel (peu, le beurre et la réduction sont déjà sapides) et de poivre blanc (pour ne pas avoir de points noirs dans la sauce).',
        'Hors du feu, monter la sauce au reste de beurre froid coupé en petits dés. Fouetter vigoureusement pour créer une émulsion onctueuse et brillante. Ne plus chauffer après cette étape.',
        'Selon le plat, ajouter des herbes fraîches ciselées au dernier moment : ciboulette pour le poisson, estragon pour la volaille. Servir immédiatement en saucière ou nappée.'
      ],
      tips: [
        'Ne jamais utiliser de vin de cuisine - il donnerait une sauce acide et amère',
        'Un bon muscadet sur lie, un chablis jeune ou un entre-deux-mers conviennent parfaitement',
        'Ajouter des herbes fraîches selon le plat : estragon pour volaille, aneth pour poisson, ciboulette universelle',
        'Pour une sauce encore plus riche, remplacer la crème par de la crème double'
      ],
      pairings: ['Poulet', 'Veau', 'Poisson', 'Fruits de mer']
    },

    sauce_vin_rouge: {
      id: 'sauce_vin_rouge',
      name: 'Sauce au vin rouge',
      type: 'sauce',
      category: 'classique',
      icon: '🍷',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      description: 'Sauce corsée au vin rouge, compagne idéale du boeuf.',
      ingredients: [
        { name: 'Vin rouge', quantity: '30', unit: 'cl', note: 'corsé' },
        { name: 'Fond de veau', quantity: '15', unit: 'cl' },
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Thym', quantity: '1', unit: 'branche' },
        { name: 'Laurier', quantity: '1', unit: 'feuille' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement les 3 échalotes. Dans une casserole à fond épais, faire fondre une noix de beurre et y faire revenir les échalotes à feu moyen pendant 3 minutes jusqu\'à ce qu\'elles commencent à dorer légèrement.',
        'Verser le vin rouge corsé. Utiliser idéalement le même vin que vous servirez à table - un Bourgogne, Côtes-du-Rhône ou Bordeaux. Ajouter la branche de thym et la feuille de laurier. Porter à ébullition.',
        'Laisser réduire à feu moyen-vif jusqu\'à ce que le vin ait réduit de moitié, environ 10 minutes. Le vin va devenir sirupeux et concentrer ses tanins et ses arômes. La couleur va s\'intensifier.',
        'Verser le fond de veau et poursuivre la réduction encore 10 minutes. La sauce doit avoir une consistance nappante - elle laisse une trace quand on passe le doigt sur le dos de la cuillère.',
        'Retirer la branche de thym et la feuille de laurier. Goûter : la sauce doit avoir du corps et une belle profondeur. Ajuster l\'assaisonnement - peu de sel car le fond et la réduction sont déjà sapides.',
        'Hors du feu, monter la sauce au beurre froid coupé en petits dés, en fouettant énergiquement. Le beurre crée une émulsion onctueuse et donne à la sauce brillance et rondeur. Ne plus faire chauffer.',
        'Cette sauce se prépare très bien à l\'avance jusqu\'à l\'étape de la réduction (sans le beurre). La réchauffer doucement puis monter au beurre au dernier moment.'
      ],
      tips: [
        'Utiliser le même vin que celui servi à table - la cohérence des saveurs est importante',
        'La réduction longue concentre et adoucit les tanins - plus la sauce réduit, plus elle est douce',
        'Se prépare à l\'avance jusqu\'à l\'ajout du beurre - idéal pour les dîners',
        'Excellent avec tous les morceaux de boeuf : entrecôte, bavette, onglet, paleron braisé'
      ],
      pairings: ['Entrecôte', 'Boeuf bourguignon', 'Joue de boeuf', 'Gibier']
    },

    // Sauces diverses
    sauce_aux_champignons: {
      id: 'sauce_aux_champignons',
      name: 'Sauce aux champignons',
      type: 'sauce',
      category: 'classique',
      icon: '🍄',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce crémeuse aux champignons, polyvalente et savoureuse.',
      ingredients: [
        { name: 'Champignons de Paris', quantity: '250', unit: 'g', note: 'émincés' },
        { name: 'Échalote', quantity: '1', unit: 'pièce' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Vin blanc', quantity: '5', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Nettoyer les champignons : les essuyer avec un papier absorbant humide (ne pas les laver à grande eau car ils se gorgent). Couper le bout terreux des pieds puis les émincer en tranches régulières de 3-4 mm.',
        'Faire chauffer le beurre dans une grande poêle à feu vif jusqu\'à ce qu\'il soit mousseux. Il est crucial que la poêle soit très chaude et le beurre crépitant avant d\'ajouter les champignons.',
        'Verser les champignons d\'un seul coup et les faire sauter sans remuer pendant 2 minutes - les laisser colorer. Puis les retourner et les faire dorer sur l\'autre face. Ils doivent être dorés et avoir rendu leur eau, qui doit s\'être évaporée. Ne pas les saler maintenant (ça les ferait dégorger).',
        'Pendant ce temps, émincer finement l\'échalote. Une fois les champignons bien colorés, baisser le feu à moyen et ajouter l\'échalote. Faire revenir 2 minutes en remuant jusqu\'à ce qu\'elle soit translucide.',
        'Déglacer au vin blanc en grattant les sucs au fond de la poêle. Laisser réduire complètement, environ 2 minutes - le vin doit être quasi évaporé.',
        'Verser la crème fraîche et porter à frémissement. Laisser réduire à feu doux 3-4 minutes jusqu\'à ce que la sauce nappe une cuillère. Saler et poivrer maintenant. Une pincée de muscade râpée relève merveilleusement la sauce.',
        'Parsemer de persil fraîchement haché et servir immédiatement. Les champignons doivent rester légèrement fermes, pas caoutchouteux.'
      ],
      tips: [
        'Remplacer tout ou partie des champignons de Paris par des champignons des bois (cèpes, girolles, pieds de mouton) pour plus de caractère',
        'Bien les faire colorer avant d\'ajouter la crème - c\'est la réaction de Maillard qui donne le goût',
        'Une pincée de muscade fraîchement râpée relève parfaitement les champignons',
        'Pour une sauce plus légère, remplacer la moitié de la crème par du fond de volaille réduit'
      ],
      pairings: ['Poulet', 'Veau', 'Porc', 'Tournedos']
    },

    sauce_aux_marrons: {
      id: 'sauce_aux_marrons',
      name: 'Sauce aux marrons',
      type: 'sauce',
      category: 'gibier',
      icon: '🌰',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      description: 'Sauce automnale onctueuse, mariage parfait avec le gibier.',
      ingredients: [
        { name: 'Marrons cuits', quantity: '200', unit: 'g' },
        { name: 'Fond de gibier ou veau', quantity: '25', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Cognac', quantity: '2', unit: 'cl' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Utiliser des marrons cuits sous vide ou en bocal (gain de temps considérable), ou des marrons frais cuits et épluchés. Diviser les marrons en deux parts : écraser grossièrement la moitié à la fourchette (pour la texture de la sauce) et laisser l\'autre moitié entière (pour la garniture).',
        'Émincer finement les échalotes. Dans une sauteuse, faire fondre le beurre à feu moyen et y faire revenir les échalotes pendant 2-3 minutes jusqu\'à ce qu\'elles soient translucides et légèrement dorées.',
        'Retirer du feu avant d\'ajouter le cognac. ATTENTION au flambage : verser le cognac et le flamber soit en inclinant vers la flamme, soit avec une allumette longue. Les flammes peuvent monter haut - éloignez-vous. Laisser flamber jusqu\'à extinction.',
        'Ajouter le fond de gibier (idéalement) ou de veau et les marrons écrasés. Porter à ébullition en remuant pour bien incorporer les marrons. Ils vont épaissir naturellement la sauce.',
        'Réduire le feu et laisser mijoter doucement pendant 10 minutes. Remuer de temps en temps. La sauce va s\'épaissir et prendre les arômes des marrons.',
        'Verser la crème fraîche et ajouter les marrons entiers réservés. Laisser chauffer 2-3 minutes à feu doux - ne pas faire bouillir pour que la crème reste onctueuse.',
        'Goûter et assaisonner de sel et poivre. Les marrons sont naturellement doux, un peu de sel relève la sauce. Servir immédiatement, la sauce doit être onctueuse avec des morceaux de marrons.'
      ],
      tips: [
        'Les marrons sous vide ou en bocal font gagner énormément de temps par rapport aux marrons frais à éplucher',
        'Mixer une partie de la sauce si vous la préférez plus lisse, en gardant quelques morceaux entiers',
        'Accompagnement traditionnel de la dinde de Noël, mais aussi excellent avec tout gibier d\'automne',
        'Ajouter quelques gouttes de vinaigre balsamique pour équilibrer la douceur des marrons'
      ],
      pairings: ['Dinde', 'Chevreuil', 'Sanglier', 'Chapon']
    },

    sauce_aux_pommes: {
      id: 'sauce_aux_pommes',
      name: 'Compote de pommes',
      type: 'sauce',
      category: 'fruitee',
      icon: '🍎',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 6,
      description: 'Compote maison légèrement acidulée, traditionnelle avec le boudin.',
      ingredients: [
        { name: 'Pommes', quantity: '6', unit: 'pièces', note: 'type Boskoop ou Canada' },
        { name: 'Sucre', quantity: '50', unit: 'g' },
        { name: 'Eau', quantity: '5', unit: 'cl' },
        { name: 'Cannelle', quantity: '1', unit: 'bâton', note: 'optionnel' },
        { name: 'Beurre', quantity: '20', unit: 'g' }
      ],
      steps: [
        'Choisir des pommes acidulées et à chair fondante : Boskoop, Canada, Reinette ou Granny Smith. Éviter les pommes trop sucrées comme les Golden. Les peler, les couper en quartiers, retirer le coeur et les pépins, puis les couper en morceaux d\'environ 2 cm.',
        'Placer les morceaux de pommes dans une casserole à fond épais. Ajouter l\'eau - elle empêche les pommes d\'attacher au début de la cuisson. Si vous utilisez le bâton de cannelle, l\'ajouter maintenant.',
        'Couvrir et cuire à feu doux pendant 15-20 minutes. Les pommes doivent être complètement fondantes et s\'écraser facilement sous la pression d\'une fourchette. Remuer de temps en temps pour éviter que ça n\'attache.',
        'Retirer le bâton de cannelle s\'il y en a un. Ajouter le sucre - goûter d\'abord car l\'acidité varie selon les pommes. Mieux vaut en mettre moins, on peut toujours en ajouter.',
        'Incorporer le beurre pendant que la compote est encore chaude - il fond et apporte onctuosité et brillance. Mélanger pour bien l\'incorporer.',
        'Écraser grossièrement à la fourchette pour une texture rustique, ou mixer pour une compote lisse. La version rustique avec des morceaux est traditionnelle avec le boudin.',
        'Servir tiède - ni trop chaude ni froide. La compote accompagne le boudin noir, mais aussi le porc rôti, le canard ou le gibier. Elle apporte une note acidulée qui contrebalance le gras.'
      ],
      tips: [
        'Choisir des pommes acidulées de préférence (Boskoop, Canada, Granny Smith) - trop sucrées, elles manquent de caractère',
        'Ne pas trop sucrer : l\'acidité est nécessaire pour contrebalancer le gras du boudin ou du porc',
        'Se conserve 5 jours au réfrigérateur dans un récipient hermétique',
        'Variante : ajouter une goutte de calvados hors du feu pour une version normande'
      ],
      pairings: ['Boudin noir', 'Porc', 'Canard', 'Gibier']
    },

    sauce_echalotes: {
      id: 'sauce_echalotes',
      name: 'Sauce échalotes',
      type: 'sauce',
      category: 'classique',
      icon: '🧅',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce douce aux échalotes confites, raffinée et délicate.',
      ingredients: [
        { name: 'Échalotes', quantity: '8', unit: 'pièces', note: 'émincées' },
        { name: 'Vin rouge', quantity: '20', unit: 'cl' },
        { name: 'Fond de veau', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Sucre', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Peler et émincer finement les 8 échalotes en rondelles très fines. Utiliser de préférence des échalotes grises (dites "de Jersey"), plus parfumées que les échalotes roses.',
        'Dans une sauteuse à fond épais, faire fondre la moitié du beurre à feu doux. Ajouter les échalotes et les faire "fondre" doucement pendant 15-20 minutes en remuant régulièrement. Elles doivent devenir translucides, fondantes et légèrement blondes - ne pas les faire brunir trop vite.',
        'Saupoudrer la cuillère à café de sucre sur les échalotes. Le sucre va aider à la caramélisation. Laisser légèrement caraméliser 2-3 minutes en remuant - les échalotes doivent prendre une teinte dorée ambrée.',
        'Déglacer au vin rouge en versant d\'un coup. Gratter les sucs de caramélisation au fond de la poêle. Laisser réduire à feu moyen jusqu\'à ce que le vin ait réduit de moitié, environ 5 minutes.',
        'Verser le fond de veau et laisser mijoter doucement pendant 10 minutes. La sauce doit réduire et devenir nappante. Les échalotes doivent être confites, presque fondantes.',
        'Goûter et assaisonner de sel (peu, le fond est déjà salé) et de poivre. Hors du feu, incorporer le reste du beurre froid en dés en fouettant pour émulsionner et donner du brillant.',
        'Cette sauce se sert avec les échalotes visibles - elles sont confites et fondantes. Elle accompagne parfaitement les viandes au goût prononcé comme l\'entrecôte, le magret ou le foie de veau.'
      ],
      tips: [
        'Cuire les échalotes longuement et doucement pour les rendre fondantes et confites - c\'est le secret de cette sauce',
        'Les échalotes grises (de Jersey) sont plus parfumées que les échalotes roses',
        'Variante au vinaigre balsamique : remplacer une partie du vin par du vinaigre balsamique pour une note plus sucrée-acidulée',
        'Se prépare à l\'avance et se réchauffe bien - ajouter le beurre au dernier moment'
      ],
      pairings: ['Entrecôte', 'Magret', 'Foie de veau', 'Bavette']
    },

    sauce_menthe: {
      id: 'sauce_menthe',
      name: 'Sauce à la menthe',
      type: 'sauce',
      category: 'anglaise',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 5,
      servings: 6,
      description: 'Sauce anglaise traditionnelle, indispensable avec l\'agneau.',
      ingredients: [
        { name: 'Menthe fraîche', quantity: '1', unit: 'bouquet', note: 'grandes feuilles' },
        { name: 'Vinaigre de vin', quantity: '5', unit: 'cl' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Eau chaude', quantity: '3', unit: 'c. à soupe' }
      ],
      steps: [
        'Choisir de la menthe fraîche bien parfumée, de préférence de la menthe verte classique (et non de la menthe poivrée trop forte). Détacher les feuilles des tiges - ne garder que les grandes feuilles, pas les petites feuilles du haut qui sont amères.',
        'Laver et sécher soigneusement les feuilles de menthe. Les hacher très finement au couteau - le hachis doit être presque une purée. Plus la menthe est finement hachée, plus elle libère ses huiles essentielles.',
        'Dans un bol, faire dissoudre le sucre dans l\'eau chaude (pas bouillante) en remuant. Le sucre doit être complètement fondu pour créer un sirop clair.',
        'Ajouter le vinaigre de vin au sirop sucré. Mélanger. L\'équilibre sucré-acidulé est important : goûter et ajuster si nécessaire.',
        'Incorporer la menthe hachée dans ce mélange. Remuer pour bien répartir. La sauce doit être d\'un beau vert vif.',
        'Couvrir et laisser reposer au réfrigérateur au minimum 30 minutes, idéalement 2 heures ou plus. Les saveurs vont se développer et s\'équilibrer avec le temps.',
        'Au moment de servir, remuer la sauce et la présenter en saucière à température ambiante ou légèrement fraîche. Chaque convive se sert selon ses goûts. C\'est la tradition britannique incontournable du Sunday roast avec l\'agneau.'
      ],
      tips: [
        'Préparer plusieurs heures à l\'avance, voire la veille, pour que les saveurs se développent pleinement',
        'Se conserve 1 semaine au réfrigérateur dans un bocal fermé',
        'Tradition britannique pour le gigot d\'agneau du dimanche - indispensable pour un vrai Sunday roast',
        'Variante moderne : ajouter une pointe de gelée de groseille pour plus de complexité'
      ],
      pairings: ['Gigot d\'agneau', 'Carré d\'agneau', 'Côtelettes d\'agneau']
    },

    sauce_orange: {
      id: 'sauce_orange',
      name: 'Sauce à l\'orange',
      type: 'sauce',
      category: 'fruitee',
      icon: '🍊',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      description: 'Sauce aigre-douce aux agrumes, classique du canard à l\'orange.',
      ingredients: [
        { name: 'Oranges', quantity: '2', unit: 'pièces', note: 'non traitées' },
        { name: 'Sucre', quantity: '50', unit: 'g' },
        { name: 'Vinaigre de vin', quantity: '3', unit: 'cl' },
        { name: 'Fond de canard ou veau', quantity: '20', unit: 'cl' },
        { name: 'Grand Marnier', quantity: '2', unit: 'cl', note: 'optionnel' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Avec un économe ou un zesteur, prélever les zestes des oranges en évitant la partie blanche (pith) qui est amère. Tailler ces zestes en fine julienne d\'environ 2 mm de large. Presser les oranges et réserver le jus.',
        'Blanchir les zestes pour ôter leur amertume : les plonger dans une petite casserole d\'eau bouillante pendant 2 minutes, égoutter, et répéter l\'opération une seconde fois avec de l\'eau fraîche. Égoutter et réserver.',
        'Dans une casserole à fond épais, préparer un caramel à sec : verser le sucre et le chauffer à feu moyen sans remuer. Observer attentivement : le sucre va fondre sur les bords puis au centre. Une fois fondu, agiter légèrement pour uniformiser. Arrêter dès qu\'il est blond doré - pas plus foncé sinon il sera amer.',
        'Décuire immédiatement le caramel au vinaigre de vin. ATTENTION : le mélange va crépiter violemment et dégager des vapeurs acides. Éloigner le visage et remuer rapidement. Le caramel va se figer puis se redissoudre.',
        'Ajouter le jus d\'orange pressé et le fond de canard (ou veau). Porter à ébullition puis réduire le feu. Laisser réduire pendant environ 10 minutes jusqu\'à obtenir une sauce qui nappe légèrement une cuillère.',
        'Hors du feu, ajouter le Grand Marnier si utilisé - son parfum d\'orange va intensifier la sauce. Ajouter les zestes blanchis qui apportent texture et amertume subtile.',
        'Monter au beurre froid en dés en fouettant vigoureusement hors du feu. Goûter et rectifier l\'assaisonnement. Servir nappé sur le canard, éventuellement avec quelques suprêmes d\'orange pelés à vif en garniture.'
      ],
      tips: [
        'Blanchir les zestes deux fois est indispensable pour ôter l\'amertume excessive du zeste',
        'Le caramel ne doit pas être trop foncé - blond doré est la couleur idéale, au-delà il devient amer',
        'Peut se préparer à l\'avance jusqu\'à la réduction - monter au beurre au dernier moment',
        'Pour une présentation élégante, ajouter des suprêmes d\'orange pelés à vif (sans membrane)'
      ],
      pairings: ['Canard', 'Magret', 'Canard laqué', 'Porc']
    },

    sauce_barbecue: {
      id: 'sauce_barbecue',
      name: 'Sauce barbecue',
      type: 'sauce',
      category: 'americaine',
      icon: '🍖',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 8,
      description: 'Sauce BBQ maison fumée et légèrement sucrée.',
      ingredients: [
        { name: 'Ketchup', quantity: '200', unit: 'g' },
        { name: 'Cassonade', quantity: '50', unit: 'g' },
        { name: 'Vinaigre de cidre', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sauce Worcestershire', quantity: '2', unit: 'c. à soupe' },
        { name: 'Moutarde', quantity: '1', unit: 'c. à soupe' },
        { name: 'Paprika fumé', quantity: '1', unit: 'c. à café' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Oignon', quantity: '1', unit: 'petit', note: 'râpé' }
      ],
      steps: [
        'Préparer les ingrédients : émincer finement les gousses d\'ail, râper l\'oignon sur une râpe fine (ou le hacher très finement), mesurer tous les ingrédients à l\'avance.',
        'Dans une casserole moyenne, combiner tous les ingrédients : ketchup, cassonade, vinaigre de cidre, sauce Worcestershire, moutarde, paprika fumé, ail émincé et oignon râpé. Bien mélanger à la cuillère en bois.',
        'Porter à ébullition à feu moyen en remuant régulièrement pour éviter que le fond n\'attache - les sucres ont tendance à caraméliser et coller.',
        'Dès l\'ébullition, baisser le feu à doux. Laisser mijoter à découvert pendant 15-20 minutes en remuant de temps en temps. La sauce va épaissir, réduire légèrement et les saveurs vont se mélanger.',
        'Pour une sauce lisse sans morceaux d\'oignon : mixer au blender ou au mixeur plongeant jusqu\'à obtenir une texture homogène. Pour une sauce plus rustique, laisser telle quelle.',
        'Goûter et ajuster l\'assaisonnement : plus de vinaigre pour l\'acidité, plus de cassonade pour la douceur, plus de paprika fumé pour le goût BBQ. Un trait de fumée liquide intensifie considérablement le caractère fumé.',
        'Laisser refroidir complètement avant de mettre en pot. La sauce épaissit en refroidissant. Elle se conserve 2 à 3 semaines au réfrigérateur dans un pot hermétique.'
      ],
      tips: [
        'Un trait de fumée liquide (liquid smoke) intensifie considérablement le goût fumé typique du BBQ américain',
        'Plus la sauce mijote longtemps, plus elle épaissit et plus les saveurs se concentrent',
        'Se conserve 2-3 semaines au réfrigérateur dans un bocal hermétique stérilisé',
        'Utiliser comme marinade (24h avant), comme sauce de cuisson (badigeonner régulièrement), ou comme sauce de table'
      ],
      pairings: ['Travers de porc', 'Poulet', 'Brisket', 'Burgers']
    },

    sauce_tartare: {
      id: 'sauce_tartare',
      name: 'Sauce tartare',
      type: 'sauce',
      category: 'froide',
      icon: '🥒',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 0,
      servings: 6,
      description: 'Sauce froide aux cornichons et câpres, parfaite avec les fritures.',
      ingredients: [
        { name: 'Mayonnaise', quantity: '200', unit: 'g' },
        { name: 'Cornichons', quantity: '6', unit: 'pièces', note: 'hachés' },
        { name: 'Câpres', quantity: '2', unit: 'c. à soupe', note: 'hachées' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'hachée' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ciboulette', quantity: '1', unit: 'c. à soupe' },
        { name: 'Estragon', quantity: '1', unit: 'c. à café' }
      ],
      steps: [
        'Égoutter les cornichons et les hacher très finement au couteau - ils doivent être en petits dés de 2-3 mm. Hacher de même les câpres. Peler et hacher très finement l\'échalote.',
        'Laver et sécher soigneusement les herbes fraîches. Ciseler finement le persil, la ciboulette et l\'estragon. L\'estragon a un goût puissant, l\'utiliser avec parcimonie.',
        'Dans un bol, mélanger la mayonnaise (idéalement maison, mais une bonne mayonnaise du commerce convient) avec tous les ingrédients hachés : cornichons, câpres, échalote et les trois herbes.',
        'Mélanger délicatement à la cuillère pour bien répartir les éléments sans casser la mayonnaise. Goûter et ajuster : un peu de jus de cornichon peut relever la sauce.',
        'Couvrir de film alimentaire au contact et réserver au réfrigérateur pendant au moins 30 minutes. Ce temps de repos permet aux saveurs de se développer et de s\'harmoniser.',
        'Avant de servir, remuer délicatement et rectifier l\'assaisonnement si nécessaire. La sauce doit être relevée mais pas trop salée (les câpres et cornichons apportent déjà du sel).',
        'Servir bien fraîche dans un ravier ou directement sur l\'assiette à côté des fritures. La sauce tartare est indissociable du fish and chips britannique et accompagne parfaitement toutes les fritures.'
      ],
      tips: [
        'Une mayonnaise maison donnera une sauce tartare incomparablement meilleure qu\'avec une mayonnaise industrielle',
        'Ajouter une cuillère de jus de cornichon pour un goût plus relevé',
        'Indispensable avec le fish and chips - c\'est l\'accompagnement traditionnel en Grande-Bretagne',
        'Se conserve 3-4 jours au réfrigérateur'
      ],
      pairings: ['Fish and chips', 'Beignets', 'Poulet pané', 'Croquettes']
    },

    sauce_chimichurri: {
      id: 'sauce_chimichurri',
      name: 'Chimichurri',
      type: 'sauce',
      category: 'argentine',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 0,
      servings: 8,
      description: 'Sauce argentine fraîche et piquante pour les viandes grillées.',
      ingredients: [
        { name: 'Persil plat', quantity: '1', unit: 'gros bouquet' },
        { name: 'Origan frais', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '15', unit: 'cl' },
        { name: 'Vinaigre de vin rouge', quantity: '3', unit: 'c. à soupe' },
        { name: 'Piment rouge', quantity: '1', unit: 'pièce', note: 'épépiné' },
        { name: 'Sel', quantity: '1', unit: 'c. à café' }
      ],
      steps: [
        'Le chimichurri se prépare TOUJOURS au couteau, jamais au mixer. Laver et essorer parfaitement le persil plat. Détacher les feuilles et les hacher finement au couteau - le hachis doit être fin mais garder de la texture.',
        'Peler les gousses d\'ail et les hacher le plus finement possible. Pour l\'origan, utiliser de préférence de l\'origan frais (ou séché de qualité si pas de frais). Hacher finement. Épépiner le piment rouge et le hacher menu.',
        'Dans un bol (ou traditionellement un petit pot à conserve), mélanger le persil haché, l\'origan, l\'ail et le piment. Ces éléments doivent être bien fins mais non réduits en purée.',
        'Verser l\'huile d\'olive de qualité - elle apporte onctuosité et permet aux saveurs de se libérer. Ajouter le vinaigre de vin rouge qui apporte l\'acidité caractéristique. Saler avec la cuillère à café de gros sel.',
        'Mélanger délicatement. Le chimichurri ne doit pas être émulsionné comme une vinaigrette - l\'huile et les herbes restent distinctes, c\'est une sauce "cassée" volontairement.',
        'Couvrir et laisser reposer au moins 2 heures à température ambiante, idéalement une nuit au réfrigérateur. Les saveurs vont se développer et s\'intensifier avec le temps.',
        'Sortir du réfrigérateur 30 minutes avant de servir pour qu\'il soit à température ambiante. Remuer avant de servir. En Argentine, le chimichurri est incontournable avec l\'asado (viande grillée au barbecue).'
      ],
      tips: [
        'Ne JAMAIS mixer le chimichurri - le hachage au couteau est essentiel pour la texture authentique',
        'Meilleur après quelques heures voire une nuit de repos - les saveurs se marient et s\'intensifient',
        'Se conserve 1 semaine au réfrigérateur dans un pot hermétique couvert d\'huile',
        'Servir à température ambiante, jamais froid - le froid atténue les saveurs'
      ],
      pairings: ['Entrecôte', 'Asado', 'Boeuf grillé', 'Poulet']
    },

    aioli: {
      id: 'aioli',
      name: 'Aïoli',
      type: 'sauce',
      category: 'provencale',
      icon: '🧄',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 0,
      servings: 6,
      description: 'Mayonnaise provençale à l\'ail, onctueuse et parfumée.',
      ingredients: [
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Jaune d\'oeuf', quantity: '1', unit: 'pièce' },
        { name: 'Huile d\'olive', quantity: '25', unit: 'cl' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '1', unit: 'pincée' }
      ],
      steps: [
        'Sortir tous les ingrédients (oeuf, huile) du réfrigérateur au moins 1 heure avant - ils doivent être à température ambiante pour que l\'émulsion prenne correctement.',
        'Peler les gousses d\'ail et retirer le germe central s\'il est présent (il donne de l\'amertume). Dans un mortier traditionnel en marbre ou en bois, piler l\'ail avec le sel jusqu\'à obtenir une pâte lisse et crémeuse.',
        'Ajouter le jaune d\'oeuf à la pâte d\'ail. Continuer à travailler au pilon en mélangeant intimement le jaune avec l\'ail. Le mélange doit être homogène.',
        'Commencer à incorporer l\'huile d\'olive GOUTTE À GOUTTE en tournant toujours dans le même sens. C\'est la phase cruciale : trop d\'huile d\'un coup fait "tourner" l\'aïoli. Continuer goutte à goutte pendant les premières cuillerées.',
        'Une fois que l\'émulsion a pris (l\'aïoli commence à épaissir et blanchir), vous pouvez verser l\'huile en filet fin tout en continuant de mélanger. L\'aïoli doit être ferme et brillant.',
        'Terminer avec le jus de citron qui va légèrement détendre l\'aïoli et apporter de la fraîcheur. Goûter et ajuster l\'assaisonnement. L\'aïoli doit être puissant en ail mais onctueux.',
        'Traditionnellement, l\'aïoli se prépare et se sert au mortier sur la table. Il accompagne le grand aïoli provençal : morue pochée, légumes vapeur, oeufs durs, escargots.'
      ],
      tips: [
        'Tous les ingrédients DOIVENT être à température ambiante - c\'est la clé d\'une émulsion réussie',
        'Si l\'ail est trop fort, le blanchir 30 secondes dans l\'eau bouillante pour l\'adoucir',
        'Tradition provençale : monter l\'aïoli au mortier à la force du poignet - c\'est un rituel',
        'Si l\'aïoli tourne : recommencer avec un nouveau jaune et incorporer l\'aïoli raté goutte à goutte comme si c\'était de l\'huile'
      ],
      pairings: ['Bourride', 'Légumes', 'Poisson poché', 'Morue']
    },

    gremolata: {
      id: 'gremolata',
      name: 'Gremolata',
      type: 'sauce',
      category: 'italienne',
      icon: '🍋',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      description: 'Condiment italien frais au citron et persil, finition de l\'osso buco.',
      ingredients: [
        { name: 'Persil plat', quantity: '1', unit: 'bouquet' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Zeste de citron', quantity: '1', unit: 'pièce', note: 'non traité' }
      ],
      steps: [
        'La gremolata est un condiment italien CRUS qui s\'ajoute au dernier moment pour apporter fraîcheur aux plats mijotés. Choisir du persil plat italien de préférence, bien frais et bien vert.',
        'Laver et essorer parfaitement le persil. Détacher les feuilles des tiges (les tiges sont amères). Hacher les feuilles très finement au couteau - le hachis doit être quasi en purée.',
        'Peler les gousses d\'ail. Pour une saveur moins agressive, retirer le germe central. Émincer l\'ail le plus finement possible, presque transparent. L\'ail doit être quasi invisible dans le mélange final.',
        'Avec un zesteur ou une râpe microplane, râper le zeste du citron (bio de préférence). Ne prélever que la partie jaune, pas le blanc (pith) qui est amer. Le zeste doit être très fin.',
        'Dans un petit bol, mélanger intimement le persil haché, l\'ail émincé et le zeste de citron. Ces trois éléments se complètent parfaitement : le persil pour la fraîcheur, l\'ail pour la puissance, le citron pour l\'acidité.',
        'La gremolata se prépare idéalement juste avant de servir pour garder toute sa fraîcheur. Elle ne se conserve pas.',
        'Parsemer généreusement la gremolata sur l\'osso buco ou tout plat mijoté APRÈS dressage, au moment de servir. La chaleur du plat va libérer les arômes sans cuire les éléments. C\'est le contraste entre le plat chaud longuement mijoté et ce condiment cru et frais qui fait la magie.'
      ],
      tips: [
        'Préparer à la toute dernière minute - la gremolata perd son croquant et sa fraîcheur si elle attend',
        'L\'ail peut être légèrement blanchi 10 secondes si vous le trouvez trop fort cru',
        'Ne JAMAIS cuire la gremolata - elle se pose sur le plat chaud mais ne doit pas chauffer',
        'Utilisez un citron non traité pour le zeste, ou lavez soigneusement un citron traité'
      ],
      pairings: ['Osso buco', 'Jarret de veau', 'Risotto', 'Plats mijotés']
    },

    gravy: {
      id: 'gravy',
      name: 'Gravy',
      type: 'sauce',
      category: 'anglaise',
      icon: '🍖',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 6,
      description: 'Sauce britannique au jus de viande, indispensable du Sunday roast.',
      ingredients: [
        { name: 'Jus de cuisson', quantity: '30', unit: 'cl', note: 'de rôti' },
        { name: 'Farine', quantity: '2', unit: 'c. à soupe' },
        { name: 'Bouillon', quantity: '20', unit: 'cl' },
        { name: 'Beurre', quantity: '20', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Pendant que le rôti repose, récupérer tout le jus de cuisson du plat. C\'est la base du gravy britannique. Incliner le plat et recueillir le jus avec une cuillère. Ne pas jeter les sucs caramélisés attachés au fond - ils sont précieux.',
        'Si le jus est très gras, le dégraisser : soit avec une cuillère en retirant le gras en surface, soit en le passant dans un séparateur à graisse. Un peu de gras est nécessaire mais pas une couche épaisse.',
        'Dans une casserole, faire fondre le beurre à feu moyen. Ajouter la farine d\'un coup et remuer vigoureusement au fouet pendant 2 minutes pour cuire le roux. Il doit être blond doré - c\'est un roux clair.',
        'Verser progressivement le jus de cuisson chaud sur le roux, en fouettant constamment pour éviter les grumeaux. Incorporer par petites quantités au début, puis plus généreusement quand la sauce est lisse.',
        'Compléter avec le bouillon de boeuf ou de volaille selon le rôti. Continuer de fouetter. Porter à ébullition douce puis réduire le feu.',
        'Laisser épaissir en fouettant régulièrement pendant 5-8 minutes. Le gravy doit être onctueux et napper une cuillère. S\'il est trop épais, ajouter du bouillon ; trop liquide, laisser réduire.',
        'Goûter et assaisonner. Passer au chinois si vous voulez un gravy parfaitement lisse. Servir brûlant dans une saucière chaude. Le gravy est versé généreusement sur la viande et les Yorkshire puddings - c\'est le coeur du Sunday roast britannique.'
      ],
      tips: [
        'Dégraisser le jus s\'il y a trop de gras - un peu de gras apporte de la saveur mais pas une couche épaisse',
        'Gratter soigneusement les sucs caramélisés dans le plat - ils donnent couleur et goût au gravy',
        'Pour une couleur plus foncée, ajouter quelques gouttes de caramel liquide ou de sauce soja',
        'Le gravy doit être servi très chaud, dans une saucière préalablement chauffée'
      ],
      pairings: ['Roast beef', 'Dinde', 'Poulet rôti', 'Yorkshire pudding']
    },

    sauce_blanquette: {
      id: 'sauce_blanquette',
      name: 'Sauce blanquette',
      type: 'sauce',
      category: 'classique',
      icon: '🥛',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce blanche crémeuse liée au jaune d\'oeuf.',
      ingredients: [
        { name: 'Fond de cuisson', quantity: '50', unit: 'cl', note: 'de la blanquette' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Jaunes d\'oeufs', quantity: '2', unit: 'pièces' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' }
      ],
      steps: [
        'Récupérer 50 cl du fond de cuisson de la blanquette (le bouillon dans lequel la viande et les légumes ont cuit). Le passer au chinois fin pour retirer les impuretés. Le verser dans une casserole et le faire réduire d\'un tiers à feu moyen - cela concentre les saveurs.',
        'Pendant la réduction, préparer la liaison : dans un bol, mélanger les jaunes d\'oeufs et la crème fraîche épaisse avec un fouet jusqu\'à obtenir un mélange homogène et fluide. C\'est cette liaison qui va donner l\'onctuosité caractéristique.',
        'Tempérer la liaison : verser une louche de fond chaud (mais non bouillant) sur le mélange oeufs-crème en fouettant constamment. Cette étape est cruciale pour éviter que les oeufs ne cuisent en grumeaux.',
        'Retirer la casserole de fond du feu. Verser le mélange tempéré dans le fond en fouettant vigoureusement. La sauce va s\'épaissir légèrement.',
        'Remettre sur feu très doux et chauffer en remuant constamment avec une cuillère en bois ou un fouet. La sauce doit épaissir et napper la cuillère. ATTENTION : ne JAMAIS laisser bouillir après cette étape, sinon les oeufs vont coaguler et la sauce sera grumeleuse.',
        'Quand la sauce est onctueuse et nappe bien la cuillère (elle doit laisser une trace quand on passe le doigt sur le dos de la cuillère), retirer du feu. Ajouter le jus de citron qui apporte fraîcheur et équilibre la richesse. Râper une pointe de muscade.',
        'Napper immédiatement la viande (sortie du bouillon et égouttée) avec cette sauce veloutée. Servir sans attendre - la blanquette n\'attend pas.'
      ],
      tips: [
        'Ne JAMAIS faire bouillir après avoir ajouté la liaison aux oeufs - la sauce tournerait et deviendrait granuleuse',
        'Le jus de citron est essentiel : il apporte la fraîcheur qui équilibre la richesse de la sauce',
        'Napper la viande au tout dernier moment - la sauce ne doit pas attendre',
        'Si la sauce est trop épaisse, la détendre avec un peu de fond de cuisson'
      ],
      pairings: ['Blanquette de veau', 'Fricassée de volaille', 'Poisson poché']
    },

    sauce_bourguignonne: {
      id: 'sauce_bourguignonne',
      name: 'Sauce bourguignonne',
      type: 'sauce',
      category: 'classique',
      icon: '🍷',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 30,
      servings: 6,
      description: 'Sauce au vin rouge de Bourgogne avec lardons et champignons.',
      ingredients: [
        { name: 'Vin rouge de Bourgogne', quantity: '75', unit: 'cl' },
        { name: 'Lardons', quantity: '150', unit: 'g' },
        { name: 'Champignons', quantity: '200', unit: 'g' },
        { name: 'Petits oignons', quantity: '12', unit: 'pièces' },
        { name: 'Fond de veau', quantity: '25', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' }
      ],
      steps: [
        'Dans une grande sauteuse ou cocotte, faire revenir les lardons à sec à feu moyen-vif jusqu\'à ce qu\'ils soient dorés et aient rendu leur gras. Les réserver sur du papier absorbant. Garder le gras rendu dans la poêle.',
        'Dans ce gras, faire revenir les petits oignons grelots entiers (préalablement pelés). Les faire dorer uniformément pendant 5-7 minutes en les retournant régulièrement. Les réserver avec les lardons.',
        'Dans la même poêle, faire sauter les champignons de Paris coupés en quartiers à feu vif. Ils doivent dorer et perdre leur eau. Les saler légèrement en fin de cuisson et les réserver avec le reste.',
        'Déglacer la poêle avec le vin rouge de Bourgogne (un Pinot Noir idéalement). Gratter énergiquement les sucs au fond de la poêle. Ajouter le bouquet garni. Porter à ébullition et laisser réduire de moitié, environ 10 minutes, à feu vif.',
        'Verser le fond de veau et laisser mijoter à feu moyen pendant 15 minutes supplémentaires. La sauce doit réduire et devenir nappante, avec une belle couleur bordeaux profond.',
        'Retirer le bouquet garni. Remettre les lardons, oignons et champignons dans la sauce pour les réchauffer quelques minutes. Goûter et assaisonner.',
        'Hors du feu, monter au beurre froid en dés en fouettant pour émulsionner et donner du brillant. Servir immédiatement. Cette sauce est la garniture classique du boeuf bourguignon et des oeufs en meurette.'
      ],
      tips: [
        'Utiliser un vrai Pinot Noir de Bourgogne pour l\'authenticité - le vin fait toute la différence',
        'Préparer les petits oignons grelots séparément : les glacer au beurre et sucre pour plus de saveur',
        'C\'est la garniture bourguignonne classique : lardons, champignons, petits oignons - elle accompagne le boeuf bourguignon et le coq au vin',
        'La sauce peut se préparer à l\'avance - elle se réchauffe très bien'
      ],
      pairings: ['Boeuf bourguignon', 'Oeufs en meurette', 'Coq au vin']
    },

    jus_agneau: {
      id: 'jus_agneau',
      name: 'Jus d\'agneau',
      type: 'sauce',
      category: 'jus',
      icon: '🍖',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Jus simple et parfumé au thym et romarin.',
      ingredients: [
        { name: 'Jus de cuisson', quantity: '20', unit: 'cl', note: 'de l\'agneau' },
        { name: 'Fond d\'agneau ou veau', quantity: '15', unit: 'cl' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'écrasées' },
        { name: 'Thym', quantity: '2', unit: 'branches' },
        { name: 'Romarin', quantity: '1', unit: 'branche' },
        { name: 'Beurre', quantity: '20', unit: 'g' }
      ],
      steps: [
        'Pendant que l\'agneau repose après cuisson, récupérer le jus de cuisson du plat. L\'incliner et retirer l\'excès de gras en surface avec une cuillère - le gras d\'agneau a un goût fort, mieux vaut en retirer la majorité. Garder les sucs caramélisés.',
        'Écraser les gousses d\'ail avec le plat d\'un couteau, sans les peler (ail en chemise). Ajouter l\'ail écrasé, le thym et le romarin dans le jus. Ces herbes méditerranéennes sont les compagnes naturelles de l\'agneau.',
        'Verser le fond d\'agneau (ou à défaut fond de veau) dans le plat ou une casserole. Gratter les sucs au fond. Porter à ébullition puis laisser réduire de moitié à feu moyen, environ 8-10 minutes.',
        'Pendant ce temps, récupérer le jus qui s\'est écoulé de l\'agneau au repos - il est rosé et très parfumé. L\'ajouter au jus en fin de réduction.',
        'Passer le jus au chinois fin pour retirer l\'ail et les herbes. Les saveurs ont été infusées, les éléments solides ne sont plus nécessaires.',
        'Hors du feu, monter au beurre froid en dés en fouettant vigoureusement pour émulsionner. Le jus doit être brillant et nappant.',
        'Goûter et rectifier l\'assaisonnement. Servir en saucière chaude à côté de l\'agneau - chaque convive se sert selon son goût.'
      ],
      tips: [
        'Le romarin est l\'herbe signature de l\'agneau - il donne son caractère au jus',
        'L\'ail en chemise (non pelé) donne une saveur plus douce que l\'ail pelé',
        'Toujours servir le jus en saucière à part pour que chacun dose selon son goût',
        'Ce jus simple met en valeur la qualité de la viande - avec un bon agneau, pas besoin de sauce élaborée'
      ],
      pairings: ['Gigot', 'Carré d\'agneau', 'Épaule', 'Souris']
    },

    sauce_perigueux: {
      id: 'sauce_perigueux',
      name: 'Sauce Périgueux',
      type: 'sauce',
      category: 'luxe',
      icon: '🍄',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce Madère enrichie à la truffe, pour les grandes occasions.',
      ingredients: [
        { name: 'Sauce Madère', quantity: '25', unit: 'cl' },
        { name: 'Truffe', quantity: '30', unit: 'g', note: 'en lamelles ou jus' },
        { name: 'Jus de truffe', quantity: '2', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'La sauce Périgueux repose sur une bonne sauce Madère. Préparer d\'abord celle-ci : faire suer des échalotes, déglacer au Madère, ajouter du fond de veau et réduire jusqu\'à consistance nappante. Ou utiliser une sauce Madère déjà préparée.',
        'Si vous utilisez une truffe fraîche (noire du Périgord idéalement), la brosser délicatement sous l\'eau froide puis la sécher. La couper en fines lamelles avec une mandoline ou un couteau très aiguisé.',
        'Si vous utilisez de la truffe en conserve, récupérer précieusement le jus du bocal - il contient énormément de parfum. Les lamelles sont déjà prêtes à l\'emploi.',
        'Verser la sauce Madère chaude dans une casserole. Ajouter le jus de truffe (du bocal ou acheté séparément). Ce jus est essentiel : il parfume la sauce de façon intense. Remuer et chauffer doucement.',
        'Incorporer les lamelles de truffe dans la sauce. Elles ne doivent surtout pas cuire - juste être réchauffées pour libérer leurs arômes sans les dénaturer.',
        'Hors du feu, monter au beurre froid en dés en fouettant pour émulsionner. Le beurre apporte brillance et onctuosité.',
        'Ne JAMAIS faire bouillir après l\'ajout des truffes - la chaleur excessive détruirait leurs arômes délicats. Servir immédiatement, nappée sur un tournedos Rossini ou un filet de boeuf. C\'est une sauce de grande occasion.'
      ],
      tips: [
        'La truffe en conserve de qualité est tout à fait acceptable - c\'est ce qui est utilisé dans la plupart des restaurants',
        'Le jus de truffe est absolument essentiel - il parfume la sauce bien plus que les lamelles seules',
        'Cette sauce est réservée aux grandes occasions : son coût et sa délicatesse l\'exigent',
        'Accompagnement classique du légendaire Tournedos Rossini (avec foie gras poêlé)'
      ],
      pairings: ['Tournedos Rossini', 'Filet de boeuf', 'Chapon', 'Foie gras']
    },

    // ===== JUS ET SAUCES SUPPLÉMENTAIRES =====

    jus_romarin: {
      id: 'jus_romarin',
      name: 'Jus au romarin',
      type: 'sauce',
      category: 'jus',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Jus parfumé au romarin, idéal pour l\'agneau et le gibier.',
      ingredients: [
        { name: 'Jus de cuisson', quantity: '20', unit: 'cl' },
        { name: 'Romarin frais', quantity: '3', unit: 'branches' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'écrasées' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Récupérer le jus de cuisson de la viande en inclinant le plat. Éliminer l\'excès de gras en surface mais conserver les sucs caramélisés au fond - ce sont eux qui donnent le goût.',
        'Transvaser le jus dans une petite casserole. Ajouter les branches de romarin frais (jamais de romarin séché pour cette recette - il n\'apporte pas la même fraîcheur aromatique). Écraser les gousses d\'ail avec le plat d\'un couteau et les ajouter.',
        'Faire infuser à feu très doux pendant 5 minutes. Le jus doit frémir à peine - pas bouillir. Le romarin va libérer ses huiles essentielles et parfumer intensément le jus.',
        'Passer au chinois fin dans une casserole propre. Presser légèrement le romarin pour extraire les derniers arômes. Jeter le romarin et l\'ail.',
        'Goûter et assaisonner si nécessaire. Hors du feu, monter au beurre froid coupé en petits dés en fouettant énergiquement. Le beurre va émulsionner et donner au jus brillance et onctuosité.',
        'Ne JAMAIS remettre sur le feu après avoir monté au beurre, sinon l\'émulsion va se briser et le beurre se séparer.',
        'Servir immédiatement dans une saucière chaude. Ce jus parfumé au romarin est le compagnon idéal de l\'agneau sous toutes ses formes.'
      ],
      tips: [
        'Le romarin frais est absolument indispensable - le romarin séché donne un goût médicinal',
        'Ne jamais faire bouillir après avoir monté au beurre - l\'émulsion se briserait',
        'Parfait avec l\'agneau : le romarin et l\'agneau sont faits l\'un pour l\'autre',
        'Variante : infuser avec du romarin ET du thym pour plus de complexité'
      ],
      pairings: ['Gigot d\'agneau', 'Carré d\'agneau', 'Chevreau']
    },

    jus_thym: {
      id: 'jus_thym',
      name: 'Jus au thym',
      type: 'sauce',
      category: 'jus',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Jus parfumé au thym, classique de la cuisine provençale.',
      ingredients: [
        { name: 'Jus de cuisson', quantity: '20', unit: 'cl' },
        { name: 'Thym frais', quantity: '5', unit: 'branches' },
        { name: 'Échalote', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement l\'échalote. Dans une petite casserole, faire fondre une noix de beurre (prélevée sur les 30g) à feu doux. Ajouter l\'échalote et la faire suer pendant 2-3 minutes - elle doit devenir translucide sans prendre de couleur.',
        'Verser le jus de cuisson récupéré de la viande. Si le jus contient du gras en excès, le dégraisser au préalable. Ajouter les branches de thym frais - le thym frais de Provence est idéal pour cette recette, sinon du thym citronné apporte une note originale.',
        'Porter à frémissement et laisser réduire de moitié à feu moyen-doux. Cette réduction va concentrer les saveurs et permettre au thym de libérer pleinement ses arômes. Compter environ 8-10 minutes. Goûter régulièrement pour surveiller l\'intensité.',
        'Passer le jus au chinois fin au-dessus d\'une casserole propre. Presser légèrement le thym avec le dos d\'une cuillère pour extraire un maximum d\'arômes. Jeter le thym et l\'échalote.',
        'Couper le reste du beurre froid en petits cubes. Hors du feu, incorporer le beurre morceau par morceau en fouettant énergiquement. Le beurre va émulsionner et donner au jus une texture veloutée et un beau brillant.',
        'Attention : ne JAMAIS remettre sur le feu après avoir monté au beurre, l\'émulsion se briserait. Assaisonner de sel et poivre si nécessaire.',
        'Servir immédiatement dans une saucière chaude. Ce jus parfumé accompagne merveilleusement l\'agneau, le lapin ou le poulet rôti.'
      ],
      tips: [
        'Excellente avec l\'agneau et le lapin',
        'Peut se parfumer au citron',
        'Le thym frais fait toute la différence'
      ],
      pairings: ['Agneau', 'Lapin', 'Poulet rôti', 'Veau']
    },

    jus_citron: {
      id: 'jus_citron',
      name: 'Jus au citron',
      type: 'sauce',
      category: 'jus',
      icon: '🍋',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 8,
      servings: 4,
      description: 'Sauce légère au citron, fraîche et acidulée.',
      ingredients: [
        { name: 'Jus de cuisson', quantity: '15', unit: 'cl' },
        { name: 'Citron', quantity: '2', unit: 'pièces', note: 'jus et zeste' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer les citrons : avec un économe ou un zesteur, prélever les zestes en évitant la partie blanche (amère). Détailler les zestes en fine julienne. Presser les citrons pour obtenir le jus (environ 8 cl pour 2 citrons).',
        'Après avoir cuit la viande, retirer-la et garder la poêle avec les sucs de cuisson. Sur feu vif, verser le jus de citron pour déglacer. L\'acidité va décoller tous les sucs caramélisés du fond - c\'est là que se trouve le goût.',
        'Ajouter le jus de cuisson de la viande. Laisser réduire d\'un tiers à feu moyen. La sauce va légèrement épaissir et les saveurs se concentrer. Cette réduction prend 3-4 minutes.',
        'Retirer du feu. Couper le beurre froid en petits cubes de 1 cm. Incorporer le beurre morceau par morceau en fouettant vigoureusement entre chaque ajout. La sauce va devenir crémeuse, nappante et brillante - c\'est le "monter au beurre".',
        'Ajouter la julienne de zestes (réserver quelques zestes pour la déco) et le persil ciselé. Mélanger délicatement. Goûter et ajuster l\'assaisonnement - le citron peut demander un peu plus de sel.',
        'IMPORTANT : ne jamais remettre sur le feu après le montage au beurre, la sauce se séparerait. Si elle est trop acide, ajouter encore un peu de beurre pour adoucir.',
        'Servir immédiatement, parsemée du reste des zestes. Cette sauce fraîche et acidulée sublime le veau, la volaille et les poissons blancs.'
      ],
      tips: [
        'Parfait avec le veau et la volaille',
        'Le zeste apporte de l\'arôme',
        'Ne pas faire bouillir'
      ],
      pairings: ['Escalope de veau', 'Poulet', 'Poisson']
    },

    jus_canard: {
      id: 'jus_canard',
      name: 'Jus de canard',
      type: 'sauce',
      category: 'jus',
      icon: '🦆',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Jus corsé de canard, base de nombreuses sauces.',
      ingredients: [
        { name: 'Carcasse de canard', quantity: '1', unit: 'pièce' },
        { name: 'Carotte', quantity: '1', unit: 'pièce' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Céleri', quantity: '1', unit: 'branche' },
        { name: 'Vin rouge', quantity: '20', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '50', unit: 'cl' },
        { name: 'Thym, laurier', quantity: '1', unit: 'bouquet' }
      ],
      steps: [
        'Préchauffer le four à 220°C. Découper la carcasse de canard en morceaux avec un couperet ou de forts ciseaux de cuisine. Disposer les morceaux dans un plat à rôtir et les faire colorer au four pendant 25-30 minutes jusqu\'à ce qu\'ils soient bien dorés.',
        'Pendant ce temps, éplucher et émincer grossièrement les légumes (carotte, oignon, céleri) - ce sont les "aromates" ou "mirepoix". Pas besoin de les couper finement car ils seront passés au chinois.',
        'Dans une grande casserole ou un fait-tout, faire revenir les légumes dans un peu de graisse de canard ou d\'huile jusqu\'à coloration (8-10 minutes). Cette caramélisation apporte de la couleur et de la profondeur au jus.',
        'Ajouter les morceaux de carcasse dorés. Déglacer au vin rouge en grattant bien le fond avec une cuillère en bois pour décoller tous les sucs - c\'est le secret d\'un bon jus.',
        'Laisser réduire le vin de moitié, puis mouiller avec le fond de volaille. Ajouter le bouquet garni (thym et laurier). Porter à frémissement - le jus ne doit jamais bouillir fort, juste frémir doucement.',
        'Laisser mijoter à découvert pendant 45 minutes minimum, idéalement 1 heure. Écumer régulièrement les impuretés qui remontent à la surface. Le jus va réduire et se concentrer naturellement.',
        'Passer le jus au chinois fin au-dessus d\'une casserole propre, en pressant bien les os et légumes pour extraire un maximum de saveurs. Vous devez obtenir environ 30-35 cl de jus.',
        'Dégraisser le jus si nécessaire. Goûter et réduire encore si le goût n\'est pas assez prononcé. Assaisonner de sel et poivre. Ce jus est la base parfaite pour une sauce à l\'orange ou aux cerises.'
      ],
      tips: [
        'Se prépare à l\'avance',
        'Se congèle très bien',
        'Base de la sauce à l\'orange'
      ],
      pairings: ['Magret', 'Confit', 'Canette rôtie']
    },

    sauce_supreme: {
      id: 'sauce_supreme',
      name: 'Sauce suprême',
      type: 'sauce',
      category: 'classique',
      icon: '🥄',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 20,
      servings: 6,
      description: 'Velouté de volaille enrichi à la crème, sauce mère de la cuisine française.',
      ingredients: [
        { name: 'Fond de volaille', quantity: '50', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Farine', quantity: '30', unit: 'g' },
        { name: 'Champignons', quantity: '100', unit: 'g', note: 'parures, optionnel' },
        { name: 'Citron', quantity: '1/2', unit: 'pièce', note: 'jus' },
        { name: 'Sel, poivre blanc', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Chauffer le fond de volaille dans une casserole - il doit être bien chaud pour une incorporation homogène. C\'est un classique de la cuisine française donc prenez un fond de qualité ou fait maison si possible.',
        'Préparer le roux blanc : dans une autre casserole à fond épais, faire fondre le beurre à feu moyen. Quand il mousse, ajouter la farine d\'un coup en pluie. Bien mélanger à la spatule ou au fouet.',
        'Cuire ce roux pendant 2 minutes en remuant constamment. Il doit rester BLANC - pas de coloration du tout, c\'est ce qui distingue le roux blanc du roux blond. L\'odeur de "croûte de pain" disparaît quand le roux est cuit.',
        'Verser le fond de volaille chaud en trois fois, en fouettant énergiquement entre chaque ajout pour éviter les grumeaux. C\'est comme faire une béchamel mais avec du fond au lieu du lait.',
        'Si vous avez des parures de champignons (pieds, chutes), ajoutez-les maintenant - ils vont parfumer la sauce pendant la cuisson. C\'est traditionnel pour une vraie sauce suprême.',
        'Laisser cuire à feu doux pendant 15-20 minutes en remuant régulièrement. La sauce va épaissir légèrement et perdre son goût de farine. Écumer si nécessaire les impuretés qui remontent.',
        'Passer la sauce au chinois fin dans une casserole propre pour éliminer les éventuels grumeaux et les parures de champignons. Presser pour extraire tous les sucs.',
        'Ajouter la crème fraîche et porter à petit frémissement. Laisser réduire 5 minutes - la sauce doit napper la cuillère. Assaisonner de sel et de poivre BLANC (pour éviter les points noirs dans cette sauce blanche).',
        'Terminer avec quelques gouttes de jus de citron juste avant de servir - cela relève la sauce et lui donne de la fraîcheur. Cette sauce mère accompagne parfaitement la volaille pochée et les ris de veau.'
      ],
      tips: [
        'Le poivre blanc évite les points noirs',
        'Les parures de champignons parfument',
        'Base de nombreuses sauces dérivées'
      ],
      pairings: ['Poulet poché', 'Poularde', 'Vol-au-vent', 'Ris de veau']
    },

    sauce_civet: {
      id: 'sauce_civet',
      name: 'Sauce civet',
      type: 'sauce',
      category: 'gibier',
      icon: '🍷',
      difficulty: 'difficile',
      prepTime: 20,
      cookTime: 90,
      servings: 6,
      description: 'Sauce traditionnelle au vin rouge liée au sang, pour le gibier.',
      ingredients: [
        { name: 'Marinade du gibier', quantity: '50', unit: 'cl' },
        { name: 'Sang du gibier', quantity: '10', unit: 'cl', note: 'ou sang de porc' },
        { name: 'Lardons', quantity: '150', unit: 'g' },
        { name: 'Oignons grelots', quantity: '200', unit: 'g' },
        { name: 'Champignons', quantity: '200', unit: 'g' },
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Farine', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Dans une grande cocotte, faire rissoler les lardons à sec jusqu\'à ce qu\'ils rendent leur graisse et soient dorés. Les réserver. Dans la même graisse, faire revenir les oignons grelots épéchés jusqu\'à coloration homogène.',
        'Saupoudrer les oignons de farine et remuer pendant 2 minutes pour cuire la farine - c\'est la base du roux qui va lier la sauce. La farine doit légèrement blondir.',
        'Mouiller avec la marinade du gibier (vin rouge, aromates) et le fond de gibier. Bien gratter le fond de la cocotte pour décoller tous les sucs. Porter à frémissement en remuant jusqu\'à épaississement.',
        'Remettre les morceaux de gibier et les lardons dans la cocotte. La sauce doit recouvrir la viande. Couvrir et laisser mijoter à feu très doux pendant au moins 1 heure, jusqu\'à ce que la viande soit tendre.',
        'Pendant ce temps, faire sauter les champignons dans du beurre à feu vif. Ils doivent être bien dorés et avoir rendu leur eau. Assaisonner et réserver.',
        'Quand la viande est cuite, la retirer avec les lardons et les oignons. Garder au chaud. Passer la sauce au chinois dans une casserole propre pour éliminer les aromates.',
        'ÉTAPE CRUCIALE - Liaison au sang : faire tiédir le sang à température ambiante (ne jamais l\'utiliser froid). Retirer la sauce du feu et la laisser redescendre légèrement en température (80°C max).',
        'Verser le sang en filet dans la sauce HORS DU FEU tout en fouettant vivement. Le sang va épaissir la sauce et lui donner sa couleur sombre caractéristique.',
        'ATTENTION : ne JAMAIS remettre sur le feu après l\'ajout du sang - il coagulerait et la sauce tournerait en grains. La chaleur résiduelle suffit.',
        'Remettre la viande, les lardons, les oignons et les champignons sautés dans la sauce. Servir immédiatement. Le civet est un plat de fête qui se mérite !'
      ],
      tips: [
        'Le sang ne doit jamais bouillir (caille)',
        'Peut se remplacer par du chocolat noir',
        'La marinade fait toute la différence'
      ],
      pairings: ['Lièvre', 'Sanglier', 'Chevreuil']
    },

    sauce_genièvre: {
      id: 'sauce_genievre',
      name: 'Sauce au genièvre',
      type: 'sauce',
      category: 'gibier',
      icon: '🫐',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce au genièvre, aromate traditionnel du gibier.',
      ingredients: [
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Genièvre', quantity: '15', unit: 'baies', note: 'écrasées' },
        { name: 'Gin', quantity: '4', unit: 'cl', note: 'optionnel' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Émincer finement les échalotes. Les faire suer doucement dans une noix de beurre pendant 3-4 minutes - elles doivent devenir translucides sans prendre de couleur.',
        'Écraser grossièrement les baies de genièvre avec le plat d\'un couteau ou dans un mortier. Cette étape est ESSENTIELLE pour libérer les huiles essentielles et l\'arôme résineux caractéristique. Ajouter les baies écrasées aux échalotes.',
        'Si vous utilisez du gin (recommandé pour intensifier le goût de genièvre) : verser le gin dans la poêle chaude, pencher la poêle vers la flamme pour faire flamber OU utiliser un briquet long. Laisser les flammes s\'éteindre naturellement - l\'alcool s\'évapore mais laisse son parfum.',
        'Verser le fond de gibier et porter à ébullition. Réduire de moitié à feu moyen - compter environ 10 minutes. Cette réduction va concentrer les saveurs et épaissir naturellement la sauce.',
        'Baisser le feu et ajouter la crème fraîche. Laisser réduire encore 5 minutes à petit frémissement. La sauce doit napper légèrement la cuillère.',
        'Retirer du feu. Incorporer le beurre froid coupé en dés en fouettant pour donner du brillant à la sauce. Goûter et assaisonner - attention, le fond de gibier est souvent déjà salé.',
        'Passer au chinois fin pour retirer les morceaux d\'échalotes et les baies - la sauce doit être lisse. Cette sauce au parfum boisé et résineux est l\'accompagnement parfait du gibier.'
      ],
      tips: [
        'Écraser les baies pour libérer l\'arôme',
        'Le gin renforce le goût de genièvre',
        'Indispensable avec le gibier'
      ],
      pairings: ['Sanglier', 'Chevreuil', 'Faisan', 'Canard sauvage']
    },

    sauce_charcutiere: {
      id: 'sauce_charcutiere',
      name: 'Sauce charcutière',
      type: 'sauce',
      category: 'classique',
      icon: '🥒',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce piquante aux cornichons, traditionnelle avec le porc.',
      ingredients: [
        { name: 'Échalotes', quantity: '3', unit: 'pièces' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Fond de veau', quantity: '20', unit: 'cl' },
        { name: 'Cornichons', quantity: '6', unit: 'pièces', note: 'en julienne' },
        { name: 'Moutarde', quantity: '1', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Émincer finement les échalotes. Tailler les cornichons en fine julienne (petits bâtonnets de 2-3 mm) - cette coupe traditionnelle permet une répartition homogène dans la sauce.',
        'Faire fondre une noix de beurre dans une casserole à feu moyen. Ajouter les échalotes et les faire suer 3-4 minutes jusqu\'à ce qu\'elles soient translucides et fondantes.',
        'Déglacer au vin blanc. Laisser réduire presque à sec à feu vif - le vin doit être absorbé par les échalotes. Cette réduction élimine l\'acidité crue du vin et concentre ses arômes.',
        'Verser le fond de veau et porter à ébullition. Réduire de moitié à feu moyen - la sauce va épaissir et les saveurs se concentrer. Compter environ 8-10 minutes.',
        'IMPORTANT : retirer du feu avant d\'ajouter la moutarde. Si on fait bouillir la moutarde, elle perd tout son piquant et devient amère. Incorporer la moutarde et bien mélanger.',
        'Ajouter la julienne de cornichons. Ils apportent le croquant et l\'acidité caractéristiques de cette sauce.',
        'Monter au beurre en fouettant pour donner du brillant et de l\'onctuosité. Rectifier l\'assaisonnement si nécessaire - attention, les cornichons sont déjà salés.',
        'Servir sans attendre avec des côtes de porc grillées, une andouillette ou une langue de boeuf. Cette sauce rustique est un classique de la cuisine bourgeoise française.'
      ],
      tips: [
        'La moutarde s\'ajoute hors du feu',
        'Les cornichons en julienne fine',
        'Classique avec les côtes de porc'
      ],
      pairings: ['Côtes de porc', 'Andouillette', 'Langue de boeuf']
    },

    sauce_curry: {
      id: 'sauce_curry',
      name: 'Sauce curry',
      type: 'sauce',
      category: 'exotique',
      icon: '🍛',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce crémeuse au curry, parfumée et épicée.',
      ingredients: [
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Curry', quantity: '2', unit: 'c. à soupe' },
        { name: 'Lait de coco', quantity: '20', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Pomme', quantity: '1/2', unit: 'pièce', note: 'optionnel' }
      ],
      steps: [
        'Émincer finement l\'oignon. Si vous utilisez la demi-pomme (fortement recommandé car elle adoucit et équilibre le curry), l\'éplucher et la couper en petits dés.',
        'Dans une casserole à fond épais, faire fondre le beurre à feu moyen. Ajouter l\'oignon et la pomme. Faire suer 5 minutes en remuant régulièrement - les oignons doivent devenir translucides.',
        'ÉTAPE CRUCIALE : ajouter le curry en poudre et remuer pendant 1 minute à feu moyen. Cette "torréfaction" active les huiles essentielles des épices et développe considérablement les arômes. On doit sentir les parfums se dégager.',
        'Verser le fond de volaille et le lait de coco. Bien mélanger pour dissoudre les épices. Porter à frémissement puis baisser le feu.',
        'Laisser mijoter à découvert pendant 15 minutes. La sauce va légèrement épaissir et les saveurs vont se fondre. Remuer de temps en temps.',
        'Pour une sauce lisse (style indien moderne) : mixer au blender ou mixeur plongeant, puis passer au chinois fin. Pour une sauce plus rustique : simplement écraser grossièrement à la fourchette.',
        'Remettre sur feu doux et incorporer la crème fraîche. Chauffer sans bouillir pendant 2-3 minutes. Goûter et ajuster l\'assaisonnement - sel et éventuellement un peu de sucre si trop épicé.',
        'Si la sauce est trop épaisse, détendre avec un peu de lait de coco. Si trop fluide, laisser réduire encore. Cette sauce parfumée accompagne aussi bien le poulet que l\'agneau ou les légumes.'
      ],
      tips: [
        'Torréfier le curry développe les arômes',
        'La pomme adoucit la sauce',
        'Ajuster le piquant selon les goûts'
      ],
      pairings: ['Poulet', 'Crevettes', 'Agneau', 'Légumes']
    },

    sauce_tomate: {
      id: 'sauce_tomate',
      name: 'Sauce tomate',
      type: 'sauce',
      category: 'base',
      icon: '🍅',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 45,
      servings: 6,
      description: 'Sauce tomate maison, base de nombreuses préparations.',
      ingredients: [
        { name: 'Tomates', quantity: '1', unit: 'kg', note: 'mûres ou pelées en boîte' },
        { name: 'Oignon', quantity: '1', unit: 'gros' },
        { name: 'Ail', quantity: '3', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Basilic', quantity: '1', unit: 'bouquet' },
        { name: 'Sucre', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Si vous utilisez des tomates fraîches : les inciser en croix à la base, les plonger 30 secondes dans l\'eau bouillante puis dans l\'eau glacée - la peau se retire facilement. Épépiner et concasser grossièrement. Les tomates pelées en boîte sont une excellente alternative, déjà prêtes à l\'emploi.',
        'Émincer finement l\'oignon. Écraser les gousses d\'ail avec le plat d\'un couteau (ne pas les hacher trop finement car elles risquent de brûler et devenir amères).',
        'Dans une grande casserole ou un fait-tout, faire chauffer l\'huile d\'olive à feu moyen. Ajouter l\'oignon et le faire suer 5 minutes jusqu\'à ce qu\'il soit translucide et légèrement doré.',
        'Ajouter l\'ail et faire revenir 1 minute supplémentaire - juste jusqu\'à ce qu\'il parfume, sans le laisser colorer (l\'ail brûlé est amer).',
        'Verser les tomates concassées. Saler, poivrer, ajouter la cuillère à café de sucre. Le sucre est ESSENTIEL pour équilibrer l\'acidité naturelle des tomates, surtout si elles ne sont pas parfaitement mûres.',
        'Porter à frémissement puis baisser le feu. Laisser mijoter à découvert pendant 40 minutes minimum, en remuant de temps en temps. La sauce va réduire et les saveurs se concentrer. À découvert, l\'eau s\'évapore et la sauce épaissit.',
        'Goûter et ajuster l\'assaisonnement. Si la sauce est trop acide, ajouter un peu plus de sucre. Pour la texture : mixer pour une sauce lisse, ou simplement écraser à la fourchette pour une texture rustique.',
        'Ajouter le basilic frais ciselé au dernier moment (jamais pendant la cuisson car il perdrait tout son parfum). La sauce peut se conserver 5 jours au frigo et se congèle parfaitement.'
      ],
      tips: [
        'Le sucre corrige l\'acidité',
        'Se congèle parfaitement',
        'Meilleure le lendemain'
      ],
      pairings: ['Pâtes', 'Pizza', 'Viandes braisées', 'Oeufs']
    },

    sauce_creme: {
      id: 'sauce_creme',
      name: 'Sauce crème',
      type: 'sauce',
      category: 'base',
      icon: '🥛',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce crème simple et polyvalente.',
      ingredients: [
        { name: 'Crème fraîche', quantity: '30', unit: 'cl' },
        { name: 'Échalote', quantity: '1', unit: 'pièce' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '20', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement l\'échalote. Dans une casserole, faire fondre le beurre à feu moyen. Ajouter l\'échalote et la faire suer 2-3 minutes - elle doit devenir translucide sans colorer.',
        'Verser le vin blanc et augmenter légèrement le feu. Laisser réduire presque à sec - il ne doit rester qu\'une fine pellicule de vin concentré autour des échalotes. Cette réduction élimine l\'acidité crue du vin.',
        'Verser la crème fraîche. Porter à petite ébullition puis baisser le feu. Laisser réduire à petit frémissement jusqu\'à ce que la sauce nappe la cuillère - quand vous passez le doigt sur le dos de la cuillère, la trace doit rester nette.',
        'Cette réduction prend environ 5-8 minutes. Attention à ne pas faire réduire trop longtemps ou trop fort, la crème pourrait graniner (se séparer) et la sauce deviendrait huileuse.',
        'Assaisonner de sel et de poivre. Goûter et ajuster. Cette sauce de base peut être personnalisée à l\'infini : herbes fraîches, moutarde, champignons, fromage, etc.',
        'Servir immédiatement - la sauce crème n\'attend pas. Si elle épaissit trop, la détendre avec un peu de crème ou de lait. Cette sauce polyvalente accompagne la volaille, le veau, le poisson et les pâtes.'
      ],
      tips: [
        'Base de nombreuses variations',
        'Peut s\'aromatiser aux herbes',
        'Ne pas faire bouillir trop longtemps'
      ],
      pairings: ['Volaille', 'Veau', 'Poisson', 'Pâtes']
    },

    sauce_moutarde_miel: {
      id: 'sauce_moutarde_miel',
      name: 'Sauce moutarde-miel',
      type: 'sauce',
      category: 'sucre-sale',
      icon: '🍯',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce sucrée-salée équilibrée, parfaite pour le porc et le poulet.',
      ingredients: [
        { name: 'Moutarde à l\'ancienne', quantity: '3', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Vinaigre de cidre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Dans un bol, mélanger la moutarde à l\'ancienne avec le miel jusqu\'à obtenir une préparation homogène. La moutarde à l\'ancienne avec ses grains apporte de la texture - c\'est le choix idéal pour cette sauce.',
        'Ajouter le vinaigre de cidre et bien mélanger. Le vinaigre apporte de l\'acidité qui équilibre le sucré du miel et relève l\'ensemble. Goûter et ajuster : plus de vinaigre pour une sauce plus vive, plus de miel pour plus de douceur.',
        'Incorporer progressivement la crème fraîche en fouettant. La sauce doit devenir homogène et légèrement fluide.',
        'Transvaser dans une petite casserole. Chauffer très doucement à feu minimum pendant 3-4 minutes en remuant constamment. La sauce doit juste tiédir et légèrement épaissir - NE JAMAIS faire bouillir, la moutarde deviendrait amère.',
        'Assaisonner de sel et d\'une pointe de poivre. Goûter et rectifier l\'équilibre sucré-salé-acide selon vos goûts.',
        'Cette sauce peut aussi s\'utiliser froide comme marinade ou vinaigrette. Elle se conserve 5 jours au réfrigérateur. Parfaite avec le porc, le poulet rôti, le saumon ou en glaçage sur du jambon.'
      ],
      tips: [
        'Équilibrer sucré et acide selon goût',
        'Excellente froide en marinade',
        'La moutarde à l\'ancienne apporte du croquant'
      ],
      pairings: ['Travers de porc', 'Poulet', 'Saumon', 'Jambon']
    },

    sauce_teriyaki: {
      id: 'sauce_teriyaki',
      name: 'Sauce teriyaki',
      type: 'sauce',
      category: 'asiatique',
      icon: '🍶',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce japonaise sucrée-salée laquée brillante.',
      ingredients: [
        { name: 'Sauce soja', quantity: '8', unit: 'cl' },
        { name: 'Mirin', quantity: '4', unit: 'cl' },
        { name: 'Saké', quantity: '4', unit: 'cl', note: 'ou vin blanc' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Ail', quantity: '1', unit: 'gousse' }
      ],
      steps: [
        'Râper finement le gingembre frais (environ 1 cuillère à café). Écraser la gousse d\'ail avec le plat d\'un couteau et la hacher finement. Le gingembre et l\'ail frais sont essentiels pour une sauce teriyaki authentique.',
        'Dans une petite casserole, verser la sauce soja, le mirin (vin de riz doux) et le saké (ou à défaut du vin blanc sec). Ajouter le sucre et mélanger pour commencer à le dissoudre.',
        'Ajouter le gingembre râpé et l\'ail haché. Porter à ébullition à feu moyen-vif en remuant pour dissoudre complètement le sucre.',
        'Dès l\'ébullition, baisser le feu à moyen et laisser réduire de moitié. Cette réduction prend environ 8-10 minutes. La sauce va épaissir et devenir sirupeuse.',
        'Surveiller attentivement : la sauce doit napper la cuillère - quand vous tracez une ligne sur le dos de la cuillère, la trace reste visible. Attention à ne pas trop réduire sinon la sauce devient trop salée.',
        'Passer au chinois fin si vous souhaitez une sauce lisse (optionnel - certains préfèrent garder les morceaux de gingembre et d\'ail). Laisser tiédir.',
        'La sauce teriyaki se conserve plusieurs semaines au réfrigérateur dans un bocal hermétique. Elle se fige un peu au froid mais se liquéfie à température ambiante. Parfaite pour laquer poulet, saumon ou boeuf en fin de cuisson.'
      ],
      tips: [
        'Se conserve au frigo plusieurs semaines',
        'Peut se parfumer au sésame',
        'Attention : devient vite trop salé si trop réduit'
      ],
      pairings: ['Poulet', 'Saumon', 'Boeuf', 'Tofu']
    },

    sauce_pruneaux: {
      id: 'sauce_pruneaux',
      name: 'Sauce aux pruneaux',
      type: 'sauce',
      category: 'sucre-sale',
      icon: '🫐',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Sauce fruitée aux pruneaux, traditionnelle avec le lapin et le porc.',
      ingredients: [
        { name: 'Pruneaux', quantity: '200', unit: 'g', note: 'dénoyautés' },
        { name: 'Vin blanc', quantity: '25', unit: 'cl' },
        { name: 'Fond de veau', quantity: '20', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Armagnac', quantity: '3', unit: 'cl', note: 'optionnel' }
      ],
      steps: [
        'Mettre les pruneaux dénoyautés dans un bol. Faire tiédir le vin blanc (pas bouillant) et le verser sur les pruneaux. Laisser gonfler pendant 30 minutes minimum - les pruneaux vont s\'hydrater et s\'imprégner du vin.',
        'Transvaser pruneaux et vin de trempage dans une casserole. Porter à frémissement puis baisser le feu. Laisser compoter doucement pendant 15 minutes - les pruneaux vont devenir très tendres.',
        'Ajouter le fond de veau. Mélanger et poursuivre la cuisson 5 minutes pour que les saveurs se fondent.',
        'Si vous utilisez l\'Armagnac (fortement recommandé pour l\'authenticité de cette recette du Sud-Ouest) : le verser dans la casserole chaude et pencher vers la flamme pour faire flamber. Ou utiliser un briquet long. Laisser les flammes s\'éteindre naturellement.',
        'Incorporer la crème fraîche et laisser réduire 3-4 minutes à petit feu. La sauce doit avoir une consistance nappante.',
        'Retirer du feu. Monter au beurre en fouettant pour apporter du brillant et de l\'onctuosité. Goûter et assaisonner si nécessaire.',
        'Vous pouvez mixer une partie des pruneaux pour épaissir la sauce et en garder quelques-uns entiers pour la texture. Cette sauce se prépare très bien la veille - elle n\'en sera que meilleure. Classique avec le lapin, le porc et le canard.'
      ],
      tips: [
        'Les pruneaux d\'Agen sont les meilleurs',
        'Peut se préparer la veille',
        'L\'Armagnac apporte de la profondeur'
      ],
      pairings: ['Lapin', 'Porc', 'Canard', 'Pintade']
    },

    sauce_raisin: {
      id: 'sauce_raisin',
      name: 'Sauce au raisin',
      type: 'sauce',
      category: 'fruit',
      icon: '🍇',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce automnale au raisin frais, délicate et parfumée.',
      ingredients: [
        { name: 'Raisins blancs', quantity: '250', unit: 'g', note: 'muscat ou chasselas' },
        { name: 'Verjus', quantity: '10', unit: 'cl', note: 'ou vin blanc' },
        { name: 'Fond de volaille', quantity: '20', unit: 'cl' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Estragon', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Préparer les raisins : si vous utilisez de gros grains, les couper en deux et retirer les pépins. Pour des petits raisins chasselas ou muscat, les laisser entiers (ils sont plus savoureux avec leur peau fine). Réserver.',
        'Dans une casserole, verser le verjus (jus de raisin vert acide - à défaut du vin blanc très sec). Faire réduire de moitié à feu moyen. Le verjus va concentrer ses saveurs acidulées caractéristiques.',
        'Ajouter le fond de volaille et poursuivre la réduction pendant 5 minutes supplémentaires. La sauce doit commencer à avoir du corps.',
        'Incorporer la crème fraîche et ajouter la moitié des raisins. Laisser frémir doucement 3-4 minutes - les raisins vont tiédir mais doivent rester fermes.',
        'Retirer du feu. Monter au beurre froid coupé en dés en fouettant énergiquement. Le beurre va émulsionner et donner à la sauce une texture veloutée et brillante.',
        'Ajouter le reste des raisins crus (pour le contraste de texture) et l\'estragon frais ciselé. L\'estragon est l\'herbe classique qui accompagne merveilleusement les raisins.',
        'Assaisonner de sel et de poivre blanc. Cette sauce délicate et automnale est le compagnon idéal des cailles, pintades ou foie gras poêlé. Servir immédiatement.'
      ],
      tips: [
        'Le verjus apporte de l\'acidité',
        'Choisir des raisins parfumés',
        'Classique avec les cailles et pintades'
      ],
      pairings: ['Caille', 'Pintade', 'Foie gras', 'Volaille']
    },

    laque_miel: {
      id: 'laque_miel',
      name: 'Laque au miel',
      type: 'sauce',
      category: 'glaçage',
      icon: '🍯',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Glaçage brillant au miel pour viandes rôties.',
      ingredients: [
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sauce soja', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vinaigre balsamique', quantity: '1', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Ail', quantity: '1', unit: 'gousse', note: 'pressée' }
      ],
      steps: [
        'Râper finement le gingembre frais. Presser la gousse d\'ail à l\'aide d\'un presse-ail ou la hacher très finement.',
        'Dans un bol, mélanger le miel avec la sauce soja. Bien fouetter pour homogénéiser - le miel doit se dissoudre dans la sauce soja.',
        'Ajouter le vinaigre balsamique, le gingembre râpé et l\'ail pressé. Bien mélanger. Goûter et ajuster l\'équilibre sucré-salé-acide selon vos préférences.',
        'Transvaser dans une petite casserole et chauffer très légèrement à feu doux pendant 1-2 minutes, juste pour fluidifier le mélange et aider les saveurs à se fondre. Ne pas faire bouillir.',
        'APPLICATION : attendre les 15 dernières minutes de cuisson de la viande. Badigeonner généreusement à l\'aide d\'un pinceau de cuisine. Le sucre du miel va caraméliser et créer une surface brillante et laquée.',
        'IMPORTANT : renouveler le badigeon 2 à 3 fois pendant les dernières minutes de cuisson, en laissant sécher entre chaque application. Chaque couche renforce le glaçage.',
        'Attention : si vous appliquez trop tôt, le miel va brûler et devenir amer. La température idéale de four est autour de 180°C pour le glaçage final. Cette laque sublime le magret, les travers de porc ou le poulet rôti.'
      ],
      tips: [
        'Appliquer en fin de cuisson pour éviter de brûler',
        'Le sucre caramélise vite',
        'Parfait pour le canard et le porc'
      ],
      pairings: ['Magret', 'Travers de porc', 'Poulet', 'Canard laqué']
    },

    echalotes_confites: {
      id: 'echalotes_confites',
      name: 'Échalotes confites',
      type: 'sauce',
      category: 'condiment',
      icon: '🧅',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 45,
      servings: 4,
      description: 'Échalotes fondantes et caramélisées, garniture classique.',
      ingredients: [
        { name: 'Échalotes', quantity: '400', unit: 'g' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vinaigre balsamique', quantity: '2', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '2', unit: 'branches' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les échalotes en les gardant entières - c\'est un peu fastidieux mais essentiel pour une belle présentation. Pour faciliter l\'épluchage, les ébouillanter 30 secondes puis les rafraîchir à l\'eau froide, la peau se retire plus facilement.',
        'Dans une sauteuse ou une poêle à bords hauts, faire fondre le beurre à feu moyen. Disposer les échalotes en une seule couche. Les faire dorer en les retournant régulièrement pendant 8-10 minutes - elles doivent être colorées uniformément.',
        'Saupoudrer de sucre et remuer délicatement. Laisser le sucre fondre et commencer à caraméliser pendant 2-3 minutes. Attention à ne pas brûler - le caramel passe vite du doré à l\'amer.',
        'Déglacer avec le vinaigre balsamique - il va créer une vapeur parfumée. Ajouter les branches de thym et une pincée de sel.',
        'Baisser le feu au minimum, couvrir et laisser confire pendant 30-40 minutes. Les échalotes cuisent dans leur propre jus et le caramel. Vérifier régulièrement et ajouter une cuillère d\'eau si le fond attache.',
        'Les échalotes sont prêtes quand elles sont complètement fondantes - un couteau doit s\'enfoncer sans résistance - et nappées d\'un glaçage brillant caramélisé.',
        'Se dégustent tièdes ou à température ambiante. Elles se conservent une semaine au réfrigérateur et se réchauffent parfaitement. Accompagnement universel qui sublime viandes rôties, foie gras ou même un simple steak.'
      ],
      tips: [
        'Se préparent à l\'avance',
        'Se réchauffent très bien',
        'Accompagnement universel'
      ],
      pairings: ['Entrecôte', 'Foie de veau', 'Magret', 'Rôti']
    },

    beurre_persille: {
      id: 'beurre_persille',
      name: 'Beurre persillé',
      type: 'sauce',
      category: 'beurre',
      icon: '🧈',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      description: 'Beurre composé au persil, parfait sur les escargots et grillades.',
      ingredients: [
        { name: 'Beurre', quantity: '125', unit: 'g', note: 'mou' },
        { name: 'Persil frais', quantity: '1', unit: 'bouquet', note: 'finement ciselé' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'pressées' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'finement émincée' },
        { name: 'Jus de citron', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Sortir le beurre du réfrigérateur au moins 30 minutes avant pour qu\'il soit bien mou (pommade). Effeuiller le persil et le ciseler très finement - il ne doit pas rester de morceaux grossiers. Presser l\'ail et émincer l\'échalote le plus fin possible.',
        'Dans un bol, travailler le beurre mou à la fourchette ou à la spatule jusqu\'à ce qu\'il soit crémeux et souple. Il doit avoir la consistance d\'une pommade.',
        'Incorporer progressivement le persil ciselé en mélangeant bien - le beurre doit prendre une belle couleur verte homogène. Ajouter ensuite l\'ail pressé et l\'échalote émincée.',
        'Assaisonner avec le jus de citron (il relève le goût et aide à conserver la couleur verte), du sel et du poivre fraîchement moulu. Bien mélanger et goûter pour ajuster.',
        'Étaler une feuille de film alimentaire. Déposer le beurre en ligne au centre. Rouler en serrant pour former un boudin régulier d\'environ 3-4 cm de diamètre. Torsader les extrémités pour bien fermer.',
        'Réfrigérer au minimum 1 heure (idéalement 2 heures) pour que le beurre durcisse et que les saveurs se mêlent. Se conserve 1 semaine au réfrigérateur ou 3 mois au congélateur.',
        'Pour servir : trancher des rondelles de 1 cm d\'épaisseur et poser directement sur la viande chaude. Le beurre fond lentement en napant la viande. Indispensable pour les escargots de Bourgogne !'
      ],
      tips: [
        'Se congèle très bien en rondelles',
        'Essentiel pour les escargots de Bourgogne',
        'Faire fondre doucement sur les viandes'
      ],
      pairings: ['Escargots', 'Entrecôte', 'Steak', 'Bavette']
    },

    jus_de_cuisson: {
      id: 'jus_de_cuisson',
      name: 'Jus de cuisson',
      type: 'sauce',
      category: 'jus',
      icon: '🍖',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Jus de cuisson simple et naturel, récupéré de la viande.',
      ingredients: [
        { name: 'Jus de cuisson de la viande', quantity: '', unit: '', note: 'récupéré' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'émincée' },
        { name: 'Vin blanc ou rouge', quantity: '5', unit: 'cl', note: 'selon la viande' },
        { name: 'Beurre', quantity: '20', unit: 'g', note: 'froid' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Après cuisson de la viande, la retirer de la poêle et la laisser reposer sur une planche inclinée ou une assiette creuse pendant 5-10 minutes. Ce repos permet au jus de se redistribuer dans la viande ET de s\'écouler - précieusement le récupérer.',
        'Dans la même poêle de cuisson (ne pas la nettoyer !), il reste des sucs caramélisés au fond - c\'est là que se concentre tout le goût. Ajouter l\'échalote émincée finement et la faire suer 2 minutes dans ces sucs.',
        'Déglacer avec le vin (blanc pour volaille/veau, rouge pour boeuf/agneau) en grattant énergiquement le fond avec une cuillère en bois pour décoller tous les sucs attachés. C\'est cette opération qui fait toute la différence.',
        'Laisser le vin réduire d\'un tiers, puis ajouter le jus de repos récupéré de la viande. Ce jus est chargé en saveurs et en sucs solubles.',
        'Laisser réduire légèrement à feu moyen pendant 2-3 minutes. La sauce doit avoir un peu de corps sans être trop concentrée.',
        'Retirer la poêle du feu. Ajouter le beurre froid coupé en petits morceaux et fouetter énergiquement pour émulsionner. Le beurre doit fondre en créant une sauce brillante et légèrement épaisse.',
        'Goûter et rectifier l\'assaisonnement. Servir immédiatement en nappant la viande. Cette sauce simple met en valeur le vrai goût de la viande sans le masquer.'
      ],
      tips: [
        'Le secret est dans les sucs de cuisson',
        'Laisser reposer la viande pour récupérer le jus',
        'Ne pas trop réduire pour garder du jus'
      ],
      pairings: ['Rôti', 'Côtes', 'Steaks', 'Toutes viandes']
    },

    jus_pigeon: {
      id: 'jus_pigeon',
      name: 'Jus de pigeon',
      type: 'sauce',
      category: 'jus',
      icon: '🐦',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Jus concentré de pigeon pour accompagner ce volatile délicat.',
      ingredients: [
        { name: 'Carcasses de pigeon', quantity: '2', unit: 'pièces', note: 'concassées' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Carotte', quantity: '1', unit: 'pièce' },
        { name: 'Vin rouge', quantity: '20', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '30', unit: 'cl' },
        { name: 'Thym, laurier', quantity: '1', unit: 'bouquet garni' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Concasser les carcasses de pigeon avec un couperet ou de forts ciseaux de cuisine. Plus les morceaux sont petits, plus ils libéreront de saveurs. Dans une cocotte ou un fait-tout, faire colorer les morceaux à feu vif avec un peu d\'huile pendant 8-10 minutes.',
        'Pendant ce temps, tailler les légumes (échalotes, carotte) en mirepoix - petits dés d\'environ 1 cm. Ajouter les légumes aux carcasses et faire suer 5 minutes en remuant régulièrement.',
        'Déglacer au vin rouge en grattant bien le fond pour décoller tous les sucs. Laisser réduire de moitié - le vin doit devenir sirupeux et concentré. Cette réduction est cruciale pour l\'intensité du jus.',
        'Mouiller avec le fond de volaille. Ajouter le bouquet garni (thym et laurier). Porter à frémissement - jamais à gros bouillon qui troublerait le jus.',
        'Laisser mijoter à découvert pendant 25-30 minutes. Écumer régulièrement les impuretés qui remontent à la surface. Le jus va réduire naturellement et se concentrer.',
        'Passer au chinois fin au-dessus d\'une casserole propre en pressant bien les carcasses et les légumes avec le dos d\'une louche pour extraire un maximum de saveurs.',
        'Goûter le jus. S\'il manque de concentration, le réduire encore quelques minutes. Hors du feu, monter au beurre froid en fouettant pour apporter brillance et onctuosité. Ce jus sublime le pigeon sous toutes ses formes.'
      ],
      tips: [
        'Utiliser les carcasses des pigeons cuisinés',
        'Un jus bien réduit est plus savoureux',
        'Peut se préparer à l\'avance'
      ],
      pairings: ['Pigeon rôti', 'Suprême de pigeon', 'Pigeonneau']
    },

    jus_veau: {
      id: 'jus_veau',
      name: 'Jus de veau',
      type: 'sauce',
      category: 'jus',
      icon: '🥩',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 45,
      servings: 4,
      description: 'Jus de veau léger et parfumé, base de nombreuses sauces.',
      ingredients: [
        { name: 'Parures de veau', quantity: '300', unit: 'g', note: 'ou os' },
        { name: 'Carotte', quantity: '1', unit: 'pièce' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Céleri', quantity: '1', unit: 'branche' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Fond de veau', quantity: '50', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Thym, laurier', quantity: '1', unit: 'bouquet garni' }
      ],
      steps: [
        'Couper les parures de veau (ou les os) en morceaux. Dans une cocotte ou un fait-tout, faire chauffer un peu d\'huile à feu vif. Faire colorer les parures pendant 10-12 minutes en les retournant régulièrement - elles doivent être bien dorées sur toutes les faces.',
        'Pendant ce temps, préparer la mirepoix : tailler la carotte, l\'oignon et le céleri en petits dés d\'environ 1 cm. Ajouter les légumes dans la cocotte et les faire suer 5-6 minutes jusqu\'à légère coloration.',
        'Déglacer au vin blanc en grattant bien le fond pour récupérer tous les sucs. Laisser réduire presque à sec - le vin doit être complètement évaporé, ne laissant que ses arômes concentrés.',
        'Mouiller avec le fond de veau (idéalement fait maison, sinon un bon fond du commerce). Ajouter le bouquet garni. Porter à frémissement doux.',
        'Laisser mijoter à découvert pendant 40 minutes, en écumant régulièrement les impuretés qui remontent. Le jus va réduire de moitié environ et se concentrer.',
        'Passer au chinois fin au-dessus d\'une casserole propre. Presser les parures et légumes pour extraire tout le jus. Vous devez obtenir environ 30-35 cl de jus.',
        'Goûter : si le jus manque de corps ou de goût, le réduire encore quelques minutes. Hors du feu, monter au beurre froid pour apporter brillance. Ce jus délicat est parfait pour les ris de veau, escalopes ou rôti de veau.'
      ],
      tips: [
        'Le fond maison est idéal',
        'Peut servir de base pour d\'autres sauces',
        'Se congèle très bien'
      ],
      pairings: ['Ris de veau', 'Escalope', 'Rôti de veau', 'Blanquette']
    },

    sauce_asiatique: {
      id: 'sauce_asiatique',
      name: 'Sauce asiatique sucrée-salée',
      type: 'sauce',
      category: 'exotique',
      icon: '🥢',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 5,
      servings: 4,
      description: 'Sauce sucrée-salée façon asiatique pour viandes et volailles.',
      ingredients: [
        { name: 'Sauce soja', quantity: '6', unit: 'cl' },
        { name: 'Miel', quantity: '3', unit: 'c. à soupe' },
        { name: 'Vinaigre de riz', quantity: '2', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à soupe', note: 'râpé' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'émincées' },
        { name: 'Huile de sésame', quantity: '1', unit: 'c. à café' },
        { name: 'Maïzena', quantity: '1', unit: 'c. à café', note: 'délayée' }
      ],
      steps: [
        'Dans un bol, mélanger la sauce soja, le miel et le vinaigre de riz. Bien fouetter pour dissoudre le miel. Réserver ce mélange.',
        'Râper finement le gingembre frais. Émincer les gousses d\'ail très finement. Dans une petite poêle ou casserole, faire chauffer une cuillère d\'huile neutre à feu moyen.',
        'Faire revenir l\'ail et le gingembre pendant 30 secondes seulement - ils doivent parfumer l\'huile sans brûler. L\'ail brûlé devient très amer.',
        'Verser immédiatement le mélange liquide (soja-miel-vinaigre). Porter à frémissement en mélangeant bien.',
        'Délayer la maïzena dans une cuillère à soupe d\'eau froide. Verser dans la sauce en filet tout en remuant. La sauce va épaissir légèrement et devenir brillante.',
        'Retirer du feu. Ajouter l\'huile de sésame qui apporte une note de noisette caractéristique de la cuisine asiatique. Ne jamais faire chauffer l\'huile de sésame - elle perd son goût.',
        'Goûter et ajuster : plus de miel pour plus sucré, plus de vinaigre pour plus d\'acidité. Cette sauce polyvalente sublime les travers de porc, ailes de poulet ou canard laqué.'
      ],
      tips: [
        'Ajuster le miel selon le goût',
        'Ajouter des graines de sésame',
        'Parfaite pour les travers de porc'
      ],
      pairings: ['Travers de porc', 'Ailes de poulet', 'Canard laqué', 'Porc caramélisé']
    },

    sauce_au_chou: {
      id: 'sauce_au_chou',
      name: 'Sauce au chou',
      type: 'sauce',
      category: 'régionale',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Sauce crémeuse au chou pour accompagner les saucisses et charcuteries.',
      ingredients: [
        { name: 'Chou blanc', quantity: '200', unit: 'g', note: 'émincé fin' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Lard fumé', quantity: '50', unit: 'g', note: 'en lardons' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Cumin', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Couper les lardons en petits morceaux. Dans une poêle sans matière grasse, les faire rissoler à feu moyen jusqu\'à ce qu\'ils soient dorés et croustillants. Les réserver sur du papier absorbant.',
        'Émincer finement le chou blanc en retirant le trognon dur. Émincer également l\'oignon. Dans une grande sauteuse, faire fondre le beurre à feu moyen.',
        'Faire revenir l\'oignon 3-4 minutes jusqu\'à ce qu\'il soit translucide. Ajouter le chou émincé et le faire suer pendant 10 minutes en remuant régulièrement - il doit commencer à fondre sans colorer.',
        'Déglacer au vin blanc. Le vin va décoller les sucs et apporter de l\'acidité. Laisser réduire de moitié.',
        'Verser la crème fraîche et ajouter le cumin (épice INDISPENSABLE pour cette recette alsacienne traditionnelle). Le cumin équilibre parfaitement le goût du chou et de la crème.',
        'Laisser mijoter à feu doux pendant 10 minutes en remuant de temps en temps. La sauce doit réduire légèrement et le chou doit être bien fondant.',
        'Remettre les lardons croustillants dans la sauce. Mélanger, goûter et rectifier l\'assaisonnement. Cette sauce crémeuse et réconfortante accompagne parfaitement les saucisses, la palette fumée ou la choucroute.'
      ],
      tips: [
        'Accompagnement alsacien traditionnel',
        'Le cumin est indispensable',
        'Idéal avec la choucroute garnie'
      ],
      pairings: ['Saucisses', 'Palette fumée', 'Jambonneau', 'Choucroute']
    },

    sauce_miel_epices: {
      id: 'sauce_miel_epices',
      name: 'Sauce au miel et épices',
      type: 'sauce',
      category: 'sucré-salé',
      icon: '🍯',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Sauce douce aux épices et au miel pour gibier et canard.',
      ingredients: [
        { name: 'Miel', quantity: '4', unit: 'c. à soupe' },
        { name: 'Vinaigre de cidre', quantity: '3', unit: 'c. à soupe' },
        { name: 'Fond de volaille', quantity: '20', unit: 'cl' },
        { name: 'Quatre-épices', quantity: '1/2', unit: 'c. à café' },
        { name: 'Cannelle', quantity: '1', unit: 'pincée' },
        { name: 'Gingembre', quantity: '1/2', unit: 'c. à café' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Dans une casserole à fond épais, verser le miel et le faire chauffer à feu moyen. Le laisser caraméliser légèrement - il va foncer et prendre une couleur ambrée. ATTENTION : surveiller attentivement car le miel brûle très vite et devient amer.',
        'Dès que le miel commence à mousser et à prendre une teinte plus foncée, retirer du feu et verser immédiatement le vinaigre de cidre. Attention aux projections ! Le mélange va créer une vapeur parfumée.',
        'Remettre sur feu doux. Ajouter les épices : quatre-épices, cannelle et gingembre. Bien mélanger pour les incorporer. Les épices vont parfumer la sauce d\'arômes de Noël.',
        'Verser le fond de volaille et porter à frémissement. Laisser réduire de moitié à feu moyen - compter environ 8-10 minutes. La sauce va épaissir et les saveurs se concentrer.',
        'Goûter et ajuster : plus de miel si trop acide, une pointe de vinaigre si trop sucré. Assaisonner de sel et poivre.',
        'Retirer du feu et monter au beurre froid en fouettant pour apporter brillance et onctuosité. Cette sauce épicée et parfumée est idéale pour les fêtes avec le magret, le canard ou la dinde.'
      ],
      tips: [
        'Attention à ne pas brûler le miel',
        'Les épices réchauffent en hiver',
        'Parfaite pour les fêtes'
      ],
      pairings: ['Magret', 'Canard', 'Gibier', 'Dinde de Noël']
    },

    sauce_au_thym: {
      id: 'sauce_au_thym',
      name: 'Sauce au thym',
      type: 'sauce',
      category: 'herbes',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce légère au thym frais, parfaite avec l\'agneau.',
      ingredients: [
        { name: 'Thym frais', quantity: '6', unit: 'branches' },
        { name: 'Fond d\'agneau', quantity: '25', unit: 'cl', note: 'ou veau' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émincer finement les échalotes. Dans une casserole, faire fondre une noix de beurre (prélevée sur les 40g) et y faire suer les échalotes pendant 3-4 minutes jusqu\'à ce qu\'elles soient translucides.',
        'Déglacer au vin blanc et laisser réduire de moitié à feu moyen. Cette réduction concentre les arômes et élimine l\'acidité crue du vin.',
        'Verser le fond d\'agneau (ou de veau si vous n\'en avez pas). Ajouter les branches de thym frais - le thym frais est ABSOLUMENT indispensable pour cette recette, le thym séché ne donne pas le même résultat.',
        'Porter à frémissement et laisser infuser pendant 5 minutes. Le thym va libérer ses huiles essentielles et parfumer délicatement la sauce. Ne pas faire bouillir fort.',
        'Retirer les branches de thym avec une écumoire. Goûter la sauce - elle doit avoir un goût prononcé de thym sans être trop herbacée.',
        'Retirer du feu. Monter au beurre froid restant en le coupant en petits morceaux et en fouettant énergiquement. Ne jamais remettre sur le feu après cette étape.',
        'Effeuiller quelques feuilles de thym frais (prélevées sur les branches) et les parsemer sur la sauce au moment de servir. Cette sauce parfumée est l\'accord parfait avec l\'agneau sous toutes ses formes.'
      ],
      tips: [
        'Le thym frais est indispensable',
        'Ne pas faire bouillir après le beurre',
        'Se marie aussi au veau'
      ],
      pairings: ['Carré d\'agneau', 'Gigot', 'Souris d\'agneau', 'Côtelettes']
    },

    sauce_aux_baies: {
      id: 'sauce_aux_baies',
      name: 'Sauce aux baies',
      type: 'sauce',
      category: 'gibier',
      icon: '🫐',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce aux baies sauvages pour accompagner le gibier.',
      ingredients: [
        { name: 'Baies mélangées', quantity: '150', unit: 'g', note: 'myrtilles, mûres, cassis' },
        { name: 'Fond de gibier', quantity: '25', unit: 'cl', note: 'ou volaille' },
        { name: 'Porto', quantity: '10', unit: 'cl' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Vinaigre balsamique', quantity: '1', unit: 'c. à soupe' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Dans une casserole, verser le porto et le faire réduire de moitié à feu moyen. Cette réduction va concentrer les arômes du porto et éliminer une partie de l\'alcool.',
        'Ajouter les baies (myrtilles, mûres, cassis - frais de préférence, ou surgelés hors saison). Saupoudrer de sucre et mélanger délicatement pour ne pas écraser les baies.',
        'Laisser compoter à feu doux pendant 5 minutes. Les baies vont libérer leur jus et commencer à éclater. Réserver quelques baies entières pour la présentation finale.',
        'Verser le fond de gibier (ou de volaille). Porter à frémissement et laisser réduire d\'un tiers - environ 8 minutes. La sauce va épaissir et prendre une belle couleur pourpre.',
        'Ajouter le vinaigre balsamique qui apporte de l\'acidité et de la profondeur. Il équilibre parfaitement le sucré des baies.',
        'Retirer du feu. Monter au beurre froid en fouettant pour apporter brillance et onctuosité. Goûter et ajuster le sucre si nécessaire selon l\'acidité des baies.',
        'Remettre les baies entières réservées dans la sauce. Cette sauce sauvage et parfumée sublime le gibier : chevreuil, biche, sanglier ou canard sauvage.'
      ],
      tips: [
        'Utiliser des baies surgelées hors saison',
        'Ajuster le sucre selon l\'acidité',
        'Les baies entières font une belle présentation'
      ],
      pairings: ['Chevreuil', 'Biche', 'Sanglier', 'Canard sauvage']
    },

    sauce_fruits_rouges: {
      id: 'sauce_fruits_rouges',
      name: 'Sauce aux fruits rouges',
      type: 'sauce',
      category: 'sucré-salé',
      icon: '🍓',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Sauce sucrée-salée aux fruits rouges pour gibier et canard.',
      ingredients: [
        { name: 'Fruits rouges', quantity: '200', unit: 'g', note: 'framboises, fraises' },
        { name: 'Fond de canard', quantity: '20', unit: 'cl', note: 'ou volaille' },
        { name: 'Vinaigre de framboise', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Poivre noir', quantity: '', unit: '', note: 'du moulin' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Rincer délicatement les fruits rouges s\'ils sont frais. Dans une casserole à feu moyen, mettre les fruits avec le sucre. Laisser fondre doucement pendant 3-4 minutes - les fruits vont libérer leur jus.',
        'Ajouter le vinaigre de framboise (ou à défaut du vinaigre balsamique). L\'acidité du vinaigre va équilibrer le sucre des fruits et créer ce goût sucré-salé caractéristique.',
        'Verser le fond de canard ou de volaille. Porter à frémissement et laisser réduire d\'un tiers pendant 5-6 minutes. La sauce va épaissir naturellement.',
        'ASTUCE IMPORTANTE : poivrer généreusement avec du poivre noir fraîchement moulu. Le poivre a une affinité extraordinaire avec les fruits rouges - il les relève et leur donne de la profondeur.',
        'Pour une sauce lisse, passer au tamis fin en pressant bien pour extraire tout le jus. Pour une sauce plus rustique avec des morceaux de fruits, sauter cette étape.',
        'Retirer du feu et monter au beurre froid en fouettant. Goûter et ajuster : plus de sucre si trop acide, plus de poivre si trop doux.',
        'Cette sauce estivale légère et fruitée est parfaite avec le magret, le canard ou la pintade. Elle apporte de la fraîcheur à la viande.'
      ],
      tips: [
        'Le poivre relève les fruits',
        'Parfaite en été avec des fruits frais',
        'Ne pas trop sucrer'
      ],
      pairings: ['Magret', 'Canard', 'Pintade', 'Gibier à plumes']
    },

    sauce_aux_legumes: {
      id: 'sauce_aux_legumes',
      name: 'Sauce aux légumes',
      type: 'sauce',
      category: 'légère',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Sauce de cuisson aux légumes pour accompagner les plats mijotés.',
      ingredients: [
        { name: 'Carottes', quantity: '2', unit: 'pièces' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Céleri', quantity: '1', unit: 'branche' },
        { name: 'Tomate', quantity: '2', unit: 'pièces' },
        { name: 'Fond de veau', quantity: '30', unit: 'cl' },
        { name: 'Vin blanc', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer les légumes : éplucher les carottes, l\'oignon et le céleri. Les tailler en petits dés réguliers d\'environ 5 mm (brunoise). Monder les tomates (les plonger 30 sec dans l\'eau bouillante puis dans l\'eau glacée pour retirer la peau), les épépiner et les concasser.',
        'Dans une casserole à fond épais, faire fondre le beurre à feu moyen. Ajouter tous les légumes taillés (sauf les tomates) et les faire suer pendant 10 minutes en remuant régulièrement. Ils doivent fondre et devenir translucides sans colorer.',
        'Déglacer au vin blanc et laisser réduire de moitié. L\'acidité du vin va être absorbée par les légumes.',
        'Ajouter les tomates concassées. Elles vont apporter de la couleur et de l\'acidité à la sauce.',
        'Verser le fond de veau. Porter à frémissement et laisser mijoter à découvert pendant 15 minutes. Les légumes vont confiner et la sauce va légèrement épaissir.',
        'Pour une sauce lisse : mixer au blender ou mixeur plongeant, puis passer au tamis fin pour une texture parfaitement homogène. Pour une sauce rustique : laisser les morceaux de légumes tels quels.',
        'Goûter et assaisonner. Cette sauce polyvalente accompagne parfaitement les plats mijotés comme le pot-au-feu, le jarret braisé ou l\'osso buco.'
      ],
      tips: [
        'Sauce polyvalente pour viandes braisées',
        'Les légumes apportent de la douceur',
        'Peut être passée au tamis pour plus de finesse'
      ],
      pairings: ['Pot-au-feu', 'Jarret', 'Osso buco', 'Boeuf braisé']
    },

    sauce_aux_olives: {
      id: 'sauce_aux_olives',
      name: 'Sauce aux olives',
      type: 'sauce',
      category: 'méditerranéenne',
      icon: '🫒',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce méditerranéenne aux olives pour agneau et volaille.',
      ingredients: [
        { name: 'Olives vertes', quantity: '100', unit: 'g', note: 'dénoyautées' },
        { name: 'Olives noires', quantity: '50', unit: 'g', note: 'dénoyautées' },
        { name: 'Tomates', quantity: '2', unit: 'pièces', note: 'pelées, épépinées' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Fond d\'agneau', quantity: '15', unit: 'cl' },
        { name: 'Herbes de Provence', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Faire revenir l\'ail émincé dans l\'huile d\'olive.',
        'Ajouter les tomates concassées.',
        'Verser le fond et les herbes.',
        'Laisser mijoter 10 min.',
        'Ajouter les olives coupées en deux.',
        'Chauffer 2-3 min sans bouillir.'
      ],
      tips: [
        'Choisir des olives de qualité',
        'Les olives Kalamata sont excellentes',
        'Ne pas trop cuire les olives'
      ],
      pairings: ['Gigot d\'agneau', 'Carré d\'agneau', 'Poulet rôti', 'Lapin']
    },

    sauce_petits_pois: {
      id: 'sauce_petits_pois',
      name: 'Sauce aux petits pois',
      type: 'sauce',
      category: 'printanière',
      icon: '🟢',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Sauce printanière aux petits pois frais.',
      ingredients: [
        { name: 'Petits pois', quantity: '200', unit: 'g', note: 'frais ou surgelés' },
        { name: 'Laitue', quantity: '4', unit: 'feuilles' },
        { name: 'Oignon nouveau', quantity: '2', unit: 'pièces' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Menthe fraîche', quantity: '4', unit: 'feuilles' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Faire fondre les oignons émincés dans le beurre.',
        'Ajouter les petits pois et la laitue ciselée.',
        'Verser le fond, cuire 10 min.',
        'Mixer une partie, garder des pois entiers.',
        'Ajouter la crème et la menthe ciselée.',
        'Rectifier l\'assaisonnement.'
      ],
      tips: [
        'Les petits pois frais sont incomparables',
        'La laitue apporte de la douceur',
        'La menthe apporte de la fraîcheur'
      ],
      pairings: ['Carré d\'agneau', 'Veau', 'Volaille', 'Ris de veau']
    },

    sauce_blue_cheese: {
      id: 'sauce_blue_cheese',
      name: 'Sauce blue cheese',
      type: 'sauce',
      category: 'américaine',
      icon: '🧀',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce crémeuse au fromage bleu à l\'américaine.',
      ingredients: [
        { name: 'Fromage bleu', quantity: '100', unit: 'g', note: 'roquefort ou gorgonzola' },
        { name: 'Crème fraîche', quantity: '20', unit: 'cl' },
        { name: 'Mayonnaise', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vinaigre de cidre', quantity: '1', unit: 'c. à café' },
        { name: 'Ciboulette', quantity: '1', unit: 'c. à soupe', note: 'ciselée' },
        { name: 'Poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Émietter le fromage bleu grossièrement.',
        'Mélanger la crème et la mayonnaise.',
        'Incorporer le fromage en gardant des morceaux.',
        'Ajouter le vinaigre.',
        'Parsemer de ciboulette.',
        'Poivrer, ne pas saler (le fromage l\'est).'
      ],
      tips: [
        'Servir froide ou tiède',
        'Parfaite pour les buffalo wings',
        'Accompagne les crudités'
      ],
      pairings: ['Buffalo wings', 'Steak', 'Crudités', 'Burgers']
    },

    sauce_buffalo: {
      id: 'sauce_buffalo',
      name: 'Sauce buffalo',
      type: 'sauce',
      category: 'américaine',
      icon: '🔥',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 5,
      servings: 4,
      description: 'Sauce piquante américaine pour les ailes de poulet.',
      ingredients: [
        { name: 'Sauce piquante', quantity: '12', unit: 'cl', note: 'type Tabasco ou Frank\'s' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Vinaigre blanc', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sauce Worcestershire', quantity: '1/2', unit: 'c. à café' },
        { name: 'Ail en poudre', quantity: '1/4', unit: 'c. à café' },
        { name: 'Paprika', quantity: '1/4', unit: 'c. à café' }
      ],
      steps: [
        'Faire fondre le beurre à feu doux.',
        'Ajouter la sauce piquante.',
        'Incorporer le vinaigre et la Worcestershire.',
        'Ajouter l\'ail et le paprika.',
        'Bien mélanger jusqu\'à homogénéité.',
        'Maintenir chaud sans bouillir.'
      ],
      tips: [
        'Ajuster le piquant selon le goût',
        'Servir avec sauce blue cheese',
        'Les ailes doivent être bien enrobées'
      ],
      pairings: ['Ailes de poulet', 'Nuggets', 'Poulet frit', 'Wings']
    },

    sauce_burger: {
      id: 'sauce_burger',
      name: 'Sauce burger',
      type: 'sauce',
      category: 'américaine',
      icon: '🍔',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      description: 'Sauce spéciale burger façon Big Mac.',
      ingredients: [
        { name: 'Mayonnaise', quantity: '8', unit: 'c. à soupe' },
        { name: 'Ketchup', quantity: '2', unit: 'c. à soupe' },
        { name: 'Moutarde', quantity: '1', unit: 'c. à café' },
        { name: 'Cornichons', quantity: '3', unit: 'pièces', note: 'finement hachés' },
        { name: 'Oignon', quantity: '2', unit: 'c. à soupe', note: 'très finement haché' },
        { name: 'Vinaigre blanc', quantity: '1', unit: 'c. à café' },
        { name: 'Sucre', quantity: '1/2', unit: 'c. à café' },
        { name: 'Paprika', quantity: '1/4', unit: 'c. à café' }
      ],
      steps: [
        'Mélanger la mayonnaise et le ketchup.',
        'Ajouter la moutarde et le vinaigre.',
        'Incorporer les cornichons et l\'oignon hachés.',
        'Assaisonner de sucre et paprika.',
        'Bien mélanger.',
        'Réfrigérer 30 min avant de servir.'
      ],
      tips: [
        'Le repos permet aux saveurs de se mélanger',
        'Hacher très fin les cornichons',
        'Se conserve 1 semaine au frigo'
      ],
      pairings: ['Burgers', 'Steaks hachés', 'Sandwichs', 'Frites']
    },

    sauce_citron: {
      id: 'sauce_citron',
      name: 'Sauce citron',
      type: 'sauce',
      category: 'classique',
      icon: '🍋',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Sauce légère au citron pour volailles et veau.',
      ingredients: [
        { name: 'Citrons', quantity: '2', unit: 'pièces', note: 'jus et zeste' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Échalote', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Faire suer l\'échalote émincée dans le beurre.',
        'Déglacer avec le jus de citron.',
        'Ajouter le fond et réduire de moitié.',
        'Verser la crème, laisser épaissir.',
        'Ajouter le zeste en fin de cuisson.',
        'Rectifier l\'assaisonnement.'
      ],
      tips: [
        'Utiliser des citrons non traités pour le zeste',
        'Le zeste apporte de la fraîcheur',
        'Ne pas faire bouillir après la crème'
      ],
      pairings: ['Escalope de veau', 'Poulet', 'Poisson', 'Ris de veau']
    },

    sauce_royale_sang: {
      id: 'sauce_royale_sang',
      name: 'Sauce royale au sang',
      type: 'sauce',
      category: 'gibier',
      icon: '👑',
      difficulty: 'difficile',
      prepTime: 20,
      cookTime: 30,
      servings: 4,
      description: 'Sauce traditionnelle liée au sang pour gibier et canard.',
      ingredients: [
        { name: 'Sang de l\'animal', quantity: '10', unit: 'cl', note: 'réservé à la cuisson' },
        { name: 'Foie', quantity: '50', unit: 'g', note: 'de l\'animal' },
        { name: 'Fond de gibier', quantity: '30', unit: 'cl' },
        { name: 'Vin rouge', quantity: '20', unit: 'cl', note: 'corsé' },
        { name: 'Échalotes', quantity: '2', unit: 'pièces' },
        { name: 'Cognac', quantity: '3', unit: 'cl' },
        { name: 'Crème', quantity: '5', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' }
      ],
      steps: [
        'Mixer le foie avec un peu de sang.',
        'Faire suer les échalotes, déglacer au cognac.',
        'Ajouter le vin rouge, réduire de moitié.',
        'Verser le fond, laisser mijoter 15 min.',
        'Hors du feu, incorporer le mélange foie-sang.',
        'Fouetter sans remettre sur le feu (coagulation).',
        'Ajouter la crème et monter au beurre.'
      ],
      tips: [
        'Ne jamais faire bouillir après liaison au sang',
        'Recette traditionnelle pour lièvre à la royale',
        'Le sang doit être très frais'
      ],
      pairings: ['Lièvre à la royale', 'Canard au sang', 'Bécasse', 'Gibier']
    },

    sauce_soja: {
      id: 'sauce_soja',
      name: 'Sauce soja',
      type: 'sauce',
      category: 'asiatique',
      icon: '🥢',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 5,
      servings: 4,
      description: 'Sauce soja cuisinée pour accompagner les viandes.',
      ingredients: [
        { name: 'Sauce soja', quantity: '8', unit: 'cl' },
        { name: 'Mirin', quantity: '3', unit: 'cl' },
        { name: 'Saké', quantity: '2', unit: 'cl', note: 'ou vin blanc sec' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Ail', quantity: '1', unit: 'gousse', note: 'émincée' }
      ],
      steps: [
        'Faire revenir l\'ail et le gingembre.',
        'Ajouter la sauce soja et le mirin.',
        'Verser le saké.',
        'Incorporer le sucre.',
        'Laisser réduire légèrement à feu doux.',
        'Servir tiède.'
      ],
      tips: [
        'Utiliser de la sauce soja de qualité',
        'Le mirin apporte de la douceur',
        'Peut être épaissie à la maïzena'
      ],
      pairings: ['Boeuf', 'Porc', 'Poulet', 'Canard']
    },

    sauce_tajine: {
      id: 'sauce_tajine',
      name: 'Sauce tajine',
      type: 'sauce',
      category: 'orientale',
      icon: '🫕',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Sauce parfumée aux épices marocaines pour tajines.',
      ingredients: [
        { name: 'Oignon', quantity: '2', unit: 'pièces', note: 'émincés' },
        { name: 'Tomates', quantity: '3', unit: 'pièces', note: 'pelées, concassées' },
        { name: 'Ras el hanout', quantity: '1', unit: 'c. à soupe' },
        { name: 'Cumin', quantity: '1', unit: 'c. à café' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café' },
        { name: 'Cannelle', quantity: '1/2', unit: 'c. à café' },
        { name: 'Miel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Coriandre fraîche', quantity: '1', unit: 'bouquet' },
        { name: 'Citron confit', quantity: '1/2', unit: 'pièce', note: 'optionnel' }
      ],
      steps: [
        'Faire revenir les oignons dans l\'huile d\'olive.',
        'Ajouter toutes les épices, torréfier 1 min.',
        'Incorporer les tomates concassées.',
        'Ajouter le miel et le citron confit émincé.',
        'Laisser mijoter 25 min à feu doux.',
        'Parsemer de coriandre fraîche.'
      ],
      tips: [
        'Le citron confit est traditionnel',
        'Les épices doivent torréfier pour libérer les arômes',
        'Peut être préparée à l\'avance'
      ],
      pairings: ['Agneau', 'Poulet', 'Boeuf', 'Légumes']
    },

    sauce_aux_navets: {
      id: 'sauce_aux_navets',
      name: 'Sauce aux navets',
      type: 'sauce',
      category: 'classique',
      icon: '🥬',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Navets glacés au jus de canard, garniture-sauce traditionnelle.',
      ingredients: [
        { name: 'Navets', quantity: '500', unit: 'g', note: 'petits navets nouveaux' },
        { name: 'Jus de canard', quantity: '20', unit: 'cl', note: 'ou fond de volaille' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '1', unit: 'c. à soupe' },
        { name: 'Thym frais', quantity: '2', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les navets. S\'ils sont petits, les laisser entiers ou les couper en deux. S\'ils sont gros, les tourner en forme de gousses d\'ail (7 faces).',
        'Faire fondre le beurre dans une sauteuse large. Ajouter les navets en une seule couche.',
        'Saupoudrer de sucre et laisser caraméliser légèrement à feu moyen pendant 5 minutes en remuant.',
        'Ajouter le miel, le thym et mouiller avec le jus de canard. Le liquide doit arriver à mi-hauteur des navets.',
        'Couvrir et laisser cuire à feu doux 15-20 minutes. Les navets doivent être tendres quand on les pique.',
        'Retirer le couvercle et laisser réduire le jus jusqu\'à ce qu\'il devienne sirupeux et enrobe les navets.',
        'Les navets doivent être brillants et glacés. Saler, poivrer et servir autour du canard.'
      ],
      tips: [
        'Les petits navets nouveaux sont les meilleurs',
        'Le glaçage doit être brillant, pas sec',
        'Utiliser le jus de cuisson du canard pour plus de saveur'
      ],
      pairings: ['Canard rôti', 'Canard à l\'orange', 'Magret', 'Oie']
    },

    sauce_satay: {
      id: 'sauce_satay',
      name: 'Sauce satay',
      type: 'sauce',
      category: 'asiatique',
      icon: '🥜',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Sauce indonésienne aux cacahuètes, parfaite pour brochettes et grillades.',
      ingredients: [
        { name: 'Beurre de cacahuètes', quantity: '150', unit: 'g', note: 'non sucré de préférence' },
        { name: 'Lait de coco', quantity: '20', unit: 'cl' },
        { name: 'Sauce soja', quantity: '3', unit: 'c. à soupe' },
        { name: 'Jus de citron vert', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sucre roux', quantity: '1', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'pressées' },
        { name: 'Piment', quantity: '1', unit: 'pincée', note: 'selon goût' },
        { name: 'Eau chaude', quantity: '5', unit: 'cl', note: 'pour ajuster' }
      ],
      steps: [
        'Dans une casserole à feu doux, faire chauffer le lait de coco jusqu\'à ce qu\'il frémisse légèrement. Ne pas faire bouillir pour éviter que le lait ne se sépare.',
        'Ajouter le beurre de cacahuètes et remuer constamment avec un fouet jusqu\'à ce qu\'il soit complètement fondu et incorporé au lait de coco. La texture doit être lisse.',
        'Incorporer la sauce soja, le jus de citron vert, le sucre roux, le gingembre râpé et l\'ail pressé. Bien mélanger pour homogénéiser tous les ingrédients.',
        'Ajouter le piment selon votre tolérance - commencer par une pincée et ajuster. Laisser mijoter à feu très doux pendant 5 minutes en remuant régulièrement.',
        'Si la sauce est trop épaisse, l\'allonger avec un peu d\'eau chaude jusqu\'à obtenir la consistance désirée. Elle doit napper une cuillère mais rester coulante.',
        'Goûter et ajuster : plus de citron vert pour l\'acidité, plus de sucre pour la douceur, plus de piment pour le piquant. L\'équilibre sucré-salé-acide est la clé.',
        'Servir tiède avec des brochettes de poulet, de bœuf ou de porc. Cette sauce peut aussi accompagner des légumes grillés ou des rouleaux de printemps.'
      ],
      tips: [
        'Un beurre de cacahuètes 100% cacahuètes (sans huile de palme ajoutée) donne un meilleur résultat',
        'La sauce épaissit en refroidissant - la réchauffer doucement en ajoutant un peu d\'eau',
        'Se conserve 5 jours au réfrigérateur dans un récipient hermétique',
        'Pour une version plus authentique, utiliser de la pâte de tamarin à la place du citron vert'
      ],
      pairings: ['Brochettes de poulet', 'Brochettes de boeuf', 'Porc grillé', 'Légumes grillés']
    }
  },

  // ==================== ACCOMPAGNEMENTS ====================
  accompagnements: {
    puree_maison: {
      id: 'puree_maison',
      name: 'Purée de pommes de terre',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'La vraie purée maison, crémeuse et réconfortante.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'Bintje ou Agata' },
        { name: 'Beurre', quantity: '100', unit: 'g', note: 'froid, en dés' },
        { name: 'Lait entier', quantity: '15', unit: 'cl', note: 'chaud' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Choisir des pommes de terre à chair farineuse (Bintje, Agata, Manon) - elles donnent une purée plus légère. Les éplucher et les couper en morceaux de taille égale (environ 3 cm) pour une cuisson homogène.',
        'Les mettre dans une grande casserole d\'eau froide salée (10g de sel par litre). Partir à l\'eau froide permet une cuisson plus uniforme. Porter à ébullition et cuire 20-25 minutes.',
        'Vérifier la cuisson en piquant une pomme de terre : le couteau doit s\'enfoncer facilement sans résistance. ATTENTION : des pommes de terre pas assez cuites = grumeaux garantis.',
        'Égoutter soigneusement. Remettre les pommes de terre dans la casserole sur feu doux pendant 1 minute pour les sécher. Cette étape évite une purée liquide.',
        'Passer au moulin à légumes (grille fine) directement dans la casserole. JAMAIS de mixer/blender qui rend la purée collante et élastique à cause de l\'amidon !',
        'Incorporer le beurre FROID coupé en petits dés, en mélangeant énergiquement à la spatule. Le beurre froid est la clé d\'une purée onctueuse - il s\'émulsionne mieux que le beurre fondu.',
        'Ajouter le lait chaud (jamais froid !) petit à petit en remuant, jusqu\'à la consistance désirée. La purée doit être lisse et brillante.',
        'Assaisonner avec la muscade râpée, du sel et du poivre. Servir immédiatement - une bonne purée n\'attend pas ! Version Robuchon pour les gourmands : utiliser 250g de beurre pour 1kg de pommes de terre.'
      ],
      tips: [
        'Le moulin à légumes évite la texture collante',
        'La proportion beurre = clé de l\'onctuosité',
        'Version Robuchon : 50% de beurre !'
      ]
    },

    puree_celeri: {
      id: 'puree_celeri',
      name: 'Purée de céleri-rave',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Purée délicate au goût subtil, parfaite avec le gibier.',
      ingredients: [
        { name: 'Céleri-rave', quantity: '600', unit: 'g' },
        { name: 'Pommes de terre', quantity: '200', unit: 'g' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher le céleri-rave avec un bon couteau (la peau est très épaisse). Le couper en gros cubes d\'environ 3 cm. Éplucher les pommes de terre et les couper de la même taille. L\'ajout de pomme de terre est essentiel pour lier la purée (le céleri seul est trop aqueux).',
        'Mettre céleri et pommes de terre dans une grande casserole. Couvrir d\'eau froide salée. Ajouter quelques gouttes de jus de citron pour éviter que le céleri noircisse à la cuisson.',
        'Porter à ébullition et cuire à petit feu pendant 25-30 minutes. Vérifier la cuisson : les légumes doivent s\'écraser facilement sous la fourchette.',
        'Égoutter soigneusement. Passer au moulin à légumes (grille fine) pour obtenir une texture lisse sans fils. Le moulin est préférable au mixer qui rend la purée élastique.',
        'Remettre la purée dans la casserole sur feu doux. Incorporer le beurre coupé en morceaux en remuant vivement.',
        'Ajouter la crème chaude progressivement jusqu\'à la consistance souhaitée. La purée de céleri doit être plus coulante que la purée de pommes de terre classique.',
        'Assaisonner avec la muscade râpée, du sel et du poivre. Si la purée est trop liquide, la faire sécher quelques minutes sur feu doux en remuant.',
        'Cette purée délicate aux notes subtilement anisées est l\'accompagnement parfait du gibier, du canard ou d\'une belle pièce de boeuf. Elle peut être servie avec quelques éclats de bleu émietté par-dessus.'
      ],
      tips: [
        'La pomme de terre lie la purée',
        'Ajouter quelques gouttes de citron pour éviter l\'oxydation',
        'Excellente avec du bleu émietté'
      ]
    },

    gratin_dauphinois: {
      id: 'gratin_dauphinois',
      name: 'Gratin dauphinois',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🧀',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 60,
      servings: 6,
      description: 'Le gratin originel, sans fromage, crémeux à souhait.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '1', unit: 'kg', note: 'Charlotte ou BF15' },
        { name: 'Crème fraîche', quantity: '40', unit: 'cl' },
        { name: 'Lait', quantity: '20', unit: 'cl' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 150°C - la cuisson lente et douce est le secret d\'un gratin parfaitement fondant. Choisir des pommes de terre à chair ferme (Charlotte, BF15) qui tiendront la cuisson sans se déliter.',
        'Éplucher les gousses d\'ail et les couper en deux. Frotter énergiquement tout l\'intérieur d\'un plat à gratin avec l\'ail - les arômes vont imprégner le plat. Beurrer généreusement par-dessus.',
        'Éplucher les pommes de terre et les émincer très finement (2-3 mm d\'épaisseur). Utiliser une mandoline pour plus de régularité. IMPORTANT : ne PAS rincer les tranches - l\'amidon est nécessaire pour la liaison du gratin.',
        'Disposer les tranches de pommes de terre en couches régulières, en se chevauchant légèrement comme des tuiles. Saler et poivrer entre chaque couche. Terminer par une belle couche bien arrangée.',
        'Dans un bol, mélanger la crème fraîche et le lait. Assaisonner de muscade râpée, de sel et de poivre. Verser ce mélange sur les pommes de terre - il doit arriver juste au niveau de la dernière couche.',
        'Parsemer quelques noisettes de beurre sur le dessus. Enfourner pour 1h à 1h15. Le gratin est prêt quand il est bien doré sur le dessus et que les pommes de terre sont fondantes quand on pique avec un couteau.',
        'Laisser reposer 5 minutes avant de servir pour que le gratin se tienne mieux. Un vrai gratin dauphinois n\'a PAS de fromage - c\'est un gratin savoyard qui en a !'
      ],
      tips: [
        'Le vrai dauphinois n\'a PAS de fromage',
        'Cuisson longue et douce = fondant parfait',
        'Ne pas rincer les pommes de terre (amidon = liaison)'
      ]
    },

    frites_maison: {
      id: 'frites_maison',
      name: 'Frites maison',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🍟',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 15,
      servings: 4,
      description: 'Les vraies frites belges, croustillantes dehors, fondantes dedans.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '1', unit: 'kg', note: 'Bintje' },
        { name: 'Huile de friture', quantity: '2', unit: 'L', note: 'arachide ou blanc de boeuf' },
        { name: 'Sel fin', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Choisir des pommes de terre Bintje (idéales) ou Agria - elles ont la bonne teneur en amidon pour des frites croustillantes. Éplucher et tailler en bâtonnets réguliers d\'environ 1 cm d\'épaisseur et 7-8 cm de long.',
        'Rincer les frites à l\'eau froide pour éliminer l\'excès d\'amidon en surface (qui ferait coller les frites). Les sécher TRÈS soigneusement dans un torchon propre - c\'est CRUCIAL pour éviter les projections d\'huile et obtenir des frites croustillantes.',
        'Chauffer l\'huile (arachide pour la neutralité, ou blanc de boeuf pour le goût authentique belge) à 150°C. Vérifier la température avec un thermomètre de cuisine.',
        '1ère CUISSON (blanchiment) : plonger les frites par petites quantités (ne pas surcharger) pendant 6-7 minutes. Elles doivent être cuites à coeur mais rester molles et blanches. Cette étape cuit l\'intérieur.',
        'Égoutter les frites sur du papier absorbant. Laisser refroidir AU MINIMUM 10 minutes - cette étape est obligatoire. On peut même les préparer à l\'avance et les conserver au frigo.',
        'Chauffer l\'huile à 180°C pour la 2ème CUISSON. Replonger les frites pendant 2-3 minutes jusqu\'à ce qu\'elles soient bien dorées et croustillantes. Cette cuisson rapide crée la croûte.',
        'Égoutter immédiatement sur du papier absorbant. Saler aussitôt (le sel adhère mieux sur les frites chaudes). Servir IMMÉDIATEMENT - une frite attend sa sauce, pas l\'inverse ! Les vraies frites belges se dégustent avec de la mayo.'
      ],
      tips: [
        'La double cuisson est obligatoire',
        'Le blanc de boeuf (graisse de boeuf) = goût authentique',
        'Bien sécher les frites avant friture (projections)'
      ]
    },

    haricots_verts: {
      id: 'haricots_verts',
      name: 'Haricots verts',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Haricots verts al dente, simplement parfaits.',
      ingredients: [
        { name: 'Haricots verts', quantity: '500', unit: 'g', note: 'fins de préférence' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'optionnel' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Équeuter les haricots verts en cassant les deux extrémités et en retirant les fils si nécessaire (les haricots fins n\'en ont généralement pas). Les haricots fins sont plus tendres et plus savoureux.',
        'Porter une grande quantité d\'eau à ébullition. Saler TRÈS généreusement (20g de sel par litre minimum - l\'eau doit être "salée comme la mer"). Cette forte concentration de sel permet de fixer la chlorophylle et de garder les haricots bien verts.',
        'Plonger les haricots dans l\'eau bouillante. Cuire 6-8 minutes selon la taille (6 min pour des très fins, 8 min pour des plus gros). Les haricots doivent rester légèrement croquants - al dente.',
        'ÉTAPE CRUCIALE : avoir préparé un grand saladier d\'eau glacée. Dès que les haricots sont cuits, les plonger immédiatement dans l\'eau glacée. Ce "choc thermique" stoppe la cuisson et fixe la belle couleur verte.',
        'Égoutter les haricots et les sécher soigneusement dans un torchon propre. Les haricots peuvent être préparés jusqu\'à cette étape plusieurs heures à l\'avance.',
        'Au moment de servir, faire chauffer le beurre dans une grande poêle à feu moyen. Ajouter l\'échalote finement émincée (optionnel) et la faire suer 1 minute.',
        'Ajouter les haricots verts et les faire revenir 2-3 minutes pour les réchauffer et les enrober de beurre. Assaisonner de sel et poivre.',
        'Parsemer de persil frais ciselé et servir immédiatement. Ces haricots sont l\'accompagnement parfait de presque toutes les viandes.'
      ],
      tips: [
        'Eau très salée = haricots bien verts',
        'L\'eau glacée stoppe la cuisson et fixe la couleur',
        'Peuvent se préparer à l\'avance et réchauffer'
      ]
    },

    champignons_sautes: {
      id: 'champignons_sautes',
      name: 'Champignons sautés',
      type: 'accompagnement',
      category: 'champignon',
      icon: '🍄',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Champignons dorés à l\'ail et persil, garniture classique.',
      ingredients: [
        { name: 'Champignons de Paris', quantity: '400', unit: 'g' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Persil', quantity: '3', unit: 'c. à soupe' },
        { name: 'Échalote', quantity: '1', unit: 'pièce' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'NETTOYAGE : ne JAMAIS laver les champignons à grande eau - ils se gorgent comme des éponges ! Les essuyer un par un avec un papier absorbant légèrement humide pour retirer la terre. Couper le bout terreux du pied et les émincer en tranches de 4-5 mm.',
        'Émincer finement l\'échalote. Écraser les gousses d\'ail avec le plat d\'un couteau et les hacher grossièrement. Ciseler le persil. Réserver ces aromates séparément - ils seront ajoutés en fin de cuisson.',
        'Chauffer une grande poêle à feu VIF (c\'est crucial !). Ajouter le beurre qui doit mousser immédiatement. Une poêle pas assez chaude = des champignons qui "suent" au lieu de dorer.',
        'Ajouter les champignons EN UNE SEULE COUCHE - ne pas surcharger la poêle ! S\'ils sont entassés, ils vont rendre leur eau au lieu de saisir. Mieux vaut faire deux tournées qu\'une mauvaise cuisson.',
        'Laisser les champignons SANS REMUER pendant 2-3 minutes. Ils doivent dorer sur une face. Puis les retourner et laisser dorer l\'autre face encore 2 minutes.',
        'Quand les champignons sont bien dorés et ont rendu leur eau (qui doit s\'évaporer), baisser légèrement le feu. Ajouter l\'échalote et l\'ail. Faire sauter encore 1-2 minutes - l\'ail ne doit pas brûler.',
        'Assaisonner de sel et de poivre. Parsemer généreusement de persil frais ciselé. Servir immédiatement. Ces champignons sautés "à la persillade" sont une garniture classique qui accompagne parfaitement les viandes rouges.'
      ],
      tips: [
        'Feu vif obligatoire sinon ils rendent leur eau',
        'Ne pas surcharger la poêle',
        'L\'ail s\'ajoute en fin pour ne pas brûler'
      ]
    },

    ratatouille: {
      id: 'ratatouille',
      name: 'Ratatouille',
      type: 'accompagnement',
      category: 'legume',
      icon: '🍆',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 45,
      servings: 6,
      description: 'Le légendaire ragoût de légumes provençal.',
      ingredients: [
        { name: 'Courgettes', quantity: '3', unit: 'pièces' },
        { name: 'Aubergines', quantity: '2', unit: 'pièces' },
        { name: 'Poivrons', quantity: '2', unit: 'pièces', note: '1 rouge, 1 jaune' },
        { name: 'Tomates', quantity: '4', unit: 'pièces', note: 'mûres' },
        { name: 'Oignon', quantity: '2', unit: 'pièces' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '8', unit: 'c. à soupe' },
        { name: 'Herbes de Provence', quantity: '1', unit: 'c. à soupe' },
        { name: 'Basilic frais', quantity: '1', unit: 'bouquet' }
      ],
      steps: [
        'Préparer tous les légumes : couper les aubergines et courgettes en cubes de 2 cm, les poivrons en lanières épaisses, les tomates en quartiers (après les avoir mondées si souhaité). Émincer les oignons, hacher l\'ail.',
        'SECRET D\'UNE VRAIE RATATOUILLE : cuire CHAQUE légume séparément pour qu\'ils gardent leur texture et leur goût propre. Commencer par les aubergines dans une poêle avec 3 c. à soupe d\'huile d\'olive à feu vif. Cuire 5-6 min jusqu\'à ce qu\'elles soient dorées. Réserver.',
        'Dans la même poêle, faire revenir les courgettes avec un peu d\'huile pendant 4-5 minutes - elles doivent rester légèrement croquantes. Réserver. Puis les poivrons 5 min. Réserver.',
        'Faire suer les oignons dans la même poêle avec un peu d\'huile pendant 5 minutes. Ajouter l\'ail et faire revenir 1 minute sans le laisser colorer.',
        'Ajouter les tomates et les herbes de Provence. Laisser compoter 10 minutes à feu moyen pour faire une base de sauce.',
        'Réunir tous les légumes réservés dans une grande cocotte. Ajouter la sauce aux tomates. Mélanger délicatement pour ne pas écraser les légumes. Saler et poivrer.',
        'Couvrir et laisser mijoter à feu très doux pendant 30 minutes. Les légumes vont finir de cuire et les saveurs vont se mêler. Vérifier l\'assaisonnement.',
        'Au moment de servir, parsemer généreusement de basilic frais ciselé. La ratatouille est encore meilleure réchauffée le lendemain - les saveurs se sont mélangées. Elle est aussi délicieuse froide en été.'
      ],
      tips: [
        'Cuire séparément = chaque légume garde sa texture',
        'Meilleure réchauffée le lendemain',
        'Excellente froide en été'
      ]
    },

    polenta: {
      id: 'polenta',
      name: 'Polenta crémeuse',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🌽',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 40,
      servings: 4,
      description: 'Polenta onctueuse à l\'italienne.',
      ingredients: [
        { name: 'Polenta', quantity: '200', unit: 'g', note: 'semoule de maïs' },
        { name: 'Eau', quantity: '1', unit: 'L' },
        { name: 'Parmesan', quantity: '50', unit: 'g', note: 'râpé' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sel', quantity: '1', unit: 'c. à café' }
      ],
      steps: [
        'Porter l\'eau salée à frémissement dans une grande casserole à fond épais. L\'eau doit être bien salée (comme pour les pâtes) - c\'est maintenant qu\'on assaisonne, pas à la fin.',
        'Réduire à feu moyen pour maintenir un léger frémissement. Verser la polenta EN PLUIE FINE d\'une main tout en fouettant vigoureusement de l\'autre. Cette technique évite absolument la formation de grumeaux.',
        'Baisser le feu au minimum et cuire 35-45 minutes en remuant RÉGULIÈREMENT à la cuillère en bois (toutes les 5 minutes environ). La polenta a tendance à attacher et à "cracher" - attention aux éclaboussures brûlantes !',
        'La polenta est cuite quand elle se détache des parois de la casserole et forme une masse épaisse. Elle doit avoir perdu son goût de farine crue - goûter pour vérifier.',
        'Hors du feu, incorporer le beurre froid en morceaux puis le parmesan râpé en remuant énergiquement. La polenta doit devenir brillante et onctueuse comme une purée.',
        'Rectifier l\'assaisonnement - la polenta demande souvent plus de sel qu\'on ne pense. Servir immédiatement en version crémeuse OU étaler sur 2 cm d\'épaisseur dans un plat huilé, laisser refroidir complètement puis couper et griller/poêler au beurre.'
      ],
      tips: [
        'Polenta instantanée : 5 min de cuisson seulement',
        'Pour griller : étaler, refroidir 2h minimum, puis poêler au beurre jusqu\'à croûte dorée',
        'Ajouter mascarpone ou gorgonzola pour plus de richesse',
        'Version traditionnelle italienne : cuire 1h pour une texture incomparable'
      ]
    },

    riz_pilaf: {
      id: 'riz_pilaf',
      name: 'Riz pilaf',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🍚',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 20,
      servings: 4,
      description: 'Riz nacré et parfumé, méthode infaillible.',
      ingredients: [
        { name: 'Riz basmati', quantity: '250', unit: 'g' },
        { name: 'Bouillon', quantity: '400', unit: 'ml', note: 'volaille ou légumes' },
        { name: 'Oignon', quantity: '1', unit: 'petit' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Laurier', quantity: '1', unit: 'feuille' },
        { name: 'Sel', quantity: '', unit: '', note: 'si bouillon non salé' }
      ],
      steps: [
        'Préchauffer le four à 180°C (chaleur tournante 160°C). Faire chauffer le bouillon - il DOIT être bouillant au moment de l\'ajouter au riz.',
        'Dans une cocotte allant au four, faire fondre le beurre à feu moyen. Ajouter l\'oignon finement émincé et faire suer 3-4 minutes jusqu\'à ce qu\'il soit translucide mais PAS coloré.',
        'Ajouter le riz NON RINCÉ (l\'amidon aide à la texture) et "nacrer" 2 minutes en remuant : chaque grain doit devenir translucide sur les bords avec un cœur blanc. Cette étape est cruciale pour un riz qui ne colle pas.',
        'Verser le bouillon BOUILLANT d\'un coup, ajouter la feuille de laurier. Mélanger UNE SEULE FOIS pour répartir le riz uniformément. Saler légèrement si le bouillon ne l\'est pas assez.',
        'Porter à ébullition, couvrir hermétiquement et enfourner 18 minutes exactement. NE JAMAIS OUVRIR pendant la cuisson - la vapeur est essentielle.',
        'Sortir du four et laisser reposer 5 minutes SANS SOULEVER LE COUVERCLE. Le riz finit de cuire à la vapeur. Retirer le laurier, égrener délicatement à la fourchette. Chaque grain doit être distinct et parfumé.'
      ],
      tips: [
        'Ne jamais remuer pendant la cuisson - c\'est ce qui rend le riz collant',
        'Ratio 1 volume riz / 1,5 volume liquide (ou 1,6 pour un riz plus moelleux)',
        'La cuisson au four garantit une chaleur uniforme sans surveillance',
        'Variante : ajouter des épices (curcuma, safran, cardamome) au moment du nacrage'
      ]
    },

    tagliatelles_fraiches: {
      id: 'tagliatelles_fraiches',
      name: 'Tagliatelles fraîches',
      type: 'accompagnement',
      category: 'pate',
      icon: '🍝',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 3,
      servings: 4,
      description: 'Pâtes fraîches maison, incomparables.',
      ingredients: [
        { name: 'Farine', quantity: '300', unit: 'g', note: 'type 00 ou 45' },
        { name: 'Oeufs', quantity: '3', unit: 'pièces' },
        { name: 'Sel', quantity: '1', unit: 'c. à café' },
        { name: 'Huile d\'olive', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Verser la farine en dôme sur le plan de travail propre. Creuser un large puits au centre et y casser les œufs. Ajouter le sel et l\'huile d\'olive. Les œufs doivent être à température ambiante pour une meilleure absorption.',
        'Avec une fourchette, battre les œufs au centre en incorporant progressivement la farine des parois intérieures. Procéder lentement pour éviter que les œufs ne s\'échappent. Quand la pâte devient trop épaisse pour la fourchette, continuer à la main.',
        'Pétrir énergiquement pendant 10 minutes minimum : plier, écraser avec la paume, tourner d\'un quart, recommencer. La pâte doit devenir TRÈS lisse, élastique et ne plus coller. Si elle colle encore, ajouter un peu de farine.',
        'Former une boule, l\'envelopper hermétiquement dans du film alimentaire. Laisser reposer 30 minutes à température ambiante - ce repos est ESSENTIEL pour que le gluten se détende et que la pâte soit facile à étaler.',
        'Diviser la pâte en 4 portions. Travailler une portion à la fois (garder les autres sous film). Aplatir au rouleau puis passer au laminoir en réduisant progressivement l\'épaisseur (ou étaler au rouleau jusqu\'à 1-2mm - on doit voir la main à travers).',
        'Fariner généreusement les feuilles de pâte, les rouler sans serrer et couper en lanières de 8mm au couteau. Dérouler immédiatement et disposer en nids farinés sur un plateau.',
        'Porter une grande quantité d\'eau salée (10g/L) à ébullition vive. Plonger les tagliatelles et cuire 2-3 minutes seulement - elles doivent rester "al dente". Égoutter en réservant un peu d\'eau de cuisson et servir immédiatement avec la sauce choisie.'
      ],
      tips: [
        'La pâte doit être souple mais pas collante - texture "lobe d\'oreille"',
        'Le repos permet au gluten de se détendre pour un laminage facile',
        'Se conservent 24h au frigo bien farinées, ou 1 mois au congélateur',
        'Pour des pâtes aux œufs plus riches : remplacer 1 œuf entier par 2 jaunes'
      ]
    },

    chou_rouge_braise: {
      id: 'chou_rouge_braise',
      name: 'Chou rouge braisé',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 60,
      servings: 6,
      description: 'Chou rouge fondant aux pommes, accompagnement hivernal.',
      ingredients: [
        { name: 'Chou rouge', quantity: '1', unit: 'pièce', note: 'moyen' },
        { name: 'Pommes', quantity: '2', unit: 'pièces', note: 'acides' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Lardons', quantity: '100', unit: 'g' },
        { name: 'Vinaigre de cidre', quantity: '4', unit: 'c. à soupe' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Graisse de canard', quantity: '3', unit: 'c. à soupe' },
        { name: 'Clou de girofle', quantity: '2', unit: 'pièces' }
      ],
      steps: [
        'Couper le chou rouge en quatre, retirer le trognon dur. Émincer finement (2-3mm) à la mandoline ou au couteau. Le chou réduit beaucoup à la cuisson donc ne pas lésiner sur la quantité.',
        'Dans une grande cocotte, faire rissoler les lardons à sec à feu moyen jusqu\'à ce qu\'ils soient dorés et croustillants. Les retirer et réserver, garder le gras rendu dans la cocotte.',
        'Ajouter la graisse de canard (ou de l\'huile) et faire suer l\'oignon émincé 5 minutes jusqu\'à ce qu\'il soit translucide. Le fond doit commencer à se colorer légèrement.',
        'Ajouter le chou émincé en plusieurs fois, remuer pour l\'enrober de gras. Ajouter les pommes coupées en gros dés (pas trop petits, elles doivent tenir la cuisson), le vinaigre de cidre et le sucre.',
        'Piquer les clous de girofle dans un morceau de pomme pour les retrouver facilement. Saler, poivrer, mélanger. Couvrir et baisser à feu doux. Le chou va rendre son eau.',
        'Braiser 1h à 1h30 en remuant toutes les 15 minutes. Le chou doit devenir fondant tout en gardant un peu de mâche. Ajouter un peu d\'eau si ça attache.',
        'En fin de cuisson, retirer le couvercle les 10 dernières minutes pour faire évaporer l\'excès de liquide si nécessaire. Remettre les lardons, rectifier l\'assaisonnement (souvent besoin d\'un peu plus de vinaigre et de sucre pour l\'équilibre aigre-doux).'
      ],
      tips: [
        'Le vinaigre garde la belle couleur violette du chou - sans lui, il vire au bleu !',
        'Se réchauffe très bien - encore meilleur le lendemain',
        'Accompagnement classique du gibier, canard et porc',
        'Variante alsacienne : ajouter quelques baies de genièvre'
      ]
    },

    petits_pois_francaise: {
      id: 'petits_pois_francaise',
      name: 'Petits pois à la française',
      type: 'accompagnement',
      category: 'legume',
      icon: '🟢',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Petits pois braisés avec laitue et petits oignons.',
      ingredients: [
        { name: 'Petits pois', quantity: '500', unit: 'g', note: 'frais ou surgelés' },
        { name: 'Laitue', quantity: '1', unit: 'pièce', note: 'émincée' },
        { name: 'Petits oignons', quantity: '12', unit: 'pièces', note: 'grelots' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sucre', quantity: '1', unit: 'c. à café' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' }
      ],
      steps: [
        'Éplucher les petits oignons grelots (astuce : les blanchir 1 minute dans l\'eau bouillante, la peau s\'enlève facilement). Dans une cocotte large, faire revenir les oignons dans le beurre moussant à feu moyen, en les faisant rouler pour une coloration uniforme légère (5 minutes).',
        'Ajouter les petits pois (si surgelés, pas besoin de les décongeler), la laitue grossièrement émincée et le sucre. Le sucre n\'est pas pour sucrer mais pour contrebalancer l\'amertume naturelle de la laitue.',
        'Mouiller à hauteur avec de l\'eau (environ 200ml). Ajouter le bouquet garni. Saler légèrement - la réduction va concentrer les saveurs.',
        'Porter à ébullition puis couvrir et baisser à feu doux. Laisser mijoter 25-30 minutes. Les petits pois doivent être tendres et la laitue complètement fondue, créant une sauce légèrement liée.',
        'Retirer le bouquet garni. Vérifier l\'assaisonnement et ajouter si besoin une noix de beurre frais hors du feu pour enrichir le jus. Servir avec le jus de cuisson parfumé - c\'est ce qui fait tout le charme du plat.',
        'VARIANTE TRADITIONNELLE : ajouter quelques feuilles de cerfeuil ciselé au moment de servir.'
      ],
      tips: [
        'La laitue fond complètement et parfume délicatement les petits pois',
        'Le sucre (1 c. à café) équilibre l\'amertume de la laitue',
        'Accompagnement classique du pigeon et des volailles rôties',
        'Avec des petits pois frais : réduire le temps de cuisson à 15-20 minutes'
      ]
    },

    spatzle: {
      id: 'spatzle',
      name: 'Spätzle',
      type: 'accompagnement',
      category: 'pate',
      icon: '🥟',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      description: 'Petites pâtes alsaciennes, moelleuses et légères.',
      ingredients: [
        { name: 'Farine', quantity: '300', unit: 'g' },
        { name: 'Oeufs', quantity: '4', unit: 'pièces' },
        { name: 'Eau ou lait', quantity: '10', unit: 'cl' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel', quantity: '1', unit: 'c. à café' },
        { name: 'Beurre', quantity: '40', unit: 'g', note: 'pour sauter' }
      ],
      steps: [
        'Dans un saladier, mélanger la farine avec le sel et la muscade. Former un puits au centre et y casser les œufs. Commencer à mélanger au fouet ou à la spatule en partant du centre.',
        'Ajouter l\'eau (ou le lait pour plus de moelleux) progressivement tout en mélangeant. La pâte doit être épaisse mais couler LENTEMENT du fouet - ni trop liquide ni trop épaisse. Battre énergiquement pour développer l\'élasticité.',
        'Laisser reposer la pâte 15 à 30 minutes à température ambiante. Ce repos permet à la farine d\'absorber le liquide et au gluten de se détendre. La pâte doit faire des bulles.',
        'Porter une grande casserole d\'eau salée à ébullition franche. Placer le presse-spätzle (ou passoire à gros trous) au-dessus et y verser une portion de pâte. Passer en appuyant fermement.',
        'Les spätzle tombent dans l\'eau. Remuer délicatement pour éviter qu\'ils ne collent. Dès qu\'ils remontent à la surface (1-2 minutes), ils sont cuits. Les retirer avec une écumoire et les plonger brièvement dans l\'eau froide pour stopper la cuisson.',
        'Dans une grande poêle, faire mousser le beurre à feu moyen-vif. Ajouter les spätzle bien égouttés et les faire sauter 3-5 minutes jusqu\'à ce qu\'ils soient légèrement dorés et croustillants sur les bords. Assaisonner et servir immédiatement.'
      ],
      tips: [
        'La pâte doit couler lentement comme du miel épais - si trop liquide, ajouter de la farine',
        'Alternative sans ustensile : étaler la pâte sur une planche humide et découper des lanières au couteau directement dans l\'eau',
        'Accompagnement traditionnel alsacien du gibier et du bœuf braisé',
        'Se conservent cuits non sautés au frigo 2 jours - les sauter au moment de servir'
      ]
    },

    puree_chataignes: {
      id: 'puree_chataignes',
      name: 'Purée de châtaignes',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🌰',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 30,
      servings: 4,
      description: 'Purée automnale sucrée-salée, parfaite avec le gibier.',
      ingredients: [
        { name: 'Châtaignes', quantity: '400', unit: 'g', note: 'cuites ou sous vide' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Céleri branche', quantity: '1', unit: 'branche', note: 'optionnel' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Si vous utilisez des châtaignes fraîches : inciser chaque châtaigne sur la face bombée (une croix). Les faire rôtir à la poêle sèche ou au four 15-20 min à 200°C. Les éplucher CHAUDES (elles deviennent impossibles à peler une fois froides) en retirant aussi la petite peau interne. Ou utiliser des châtaignes sous vide/surgelées pour gagner du temps.',
        'Mettre les châtaignes épluchées dans une casserole avec la branche de céleri (qui apporte une note fraîche) et couvrir d\'eau. Porter à ébullition et cuire 20-30 minutes jusqu\'à ce qu\'elles s\'écrasent facilement sous la fourchette.',
        'Égoutter les châtaignes en réservant un peu d\'eau de cuisson. Retirer le céleri. Passer les châtaignes CHAUDES au moulin à légumes (grille fine) pour obtenir une texture lisse sans grumeaux.',
        'Remettre la purée dans la casserole à feu doux. Incorporer le beurre froid en morceaux en mélangeant énergiquement - la purée doit devenir brillante.',
        'Ajouter la crème chaude progressivement jusqu\'à la consistance souhaitée. La purée de châtaignes doit rester plus épaisse qu\'une purée de pommes de terre. Si elle est trop épaisse, détendre avec un peu d\'eau de cuisson réservée.',
        'Assaisonner de sel et poivre. Goûter - la châtaigne étant naturellement sucrée, il faut parfois ajuster l\'équilibre salé. Servir immédiatement, la purée de châtaignes ne se réchauffe pas très bien.'
      ],
      tips: [
        'Châtaignes sous vide ou surgelées = gain de temps énorme pour un résultat quasi équivalent',
        'Peut se parfumer à la vanille ou au romarin (version sucrée ou salée)',
        'Accompagnement classique du gibier, de la dinde et du foie gras',
        'Pour une texture plus rustique, écraser grossièrement au lieu de passer au moulin'
      ]
    },

    // ===== FÉCULENTS SUPPLÉMENTAIRES =====

    pommes_sarladaises: {
      id: 'pommes_sarladaises',
      name: 'Pommes sarladaises',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 45,
      servings: 4,
      description: 'Pommes de terre du Périgord cuites à la graisse de canard avec ail et persil.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'Charlotte ou BF15' },
        { name: 'Graisse de canard', quantity: '80', unit: 'g' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Persil', quantity: '4', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les pommes de terre et les émincer finement (2-3mm maximum) à la mandoline. La régularité des tranches est ESSENTIELLE pour une cuisson homogène. Choisir des pommes de terre à chair ferme qui tiennent à la cuisson.',
        'Rincer les tranches à l\'eau froide pour éliminer l\'excès d\'amidon (sinon elles collent entre elles). Les sécher PARFAITEMENT dans un torchon propre - l\'eau ferait "cracher" la graisse chaude.',
        'Faire fondre la graisse de canard dans une grande poêle à bords hauts (ou une sauteuse) à feu moyen. La graisse doit être chaude mais pas fumante.',
        'Disposer les pommes de terre en couche pas trop épaisse, saler. Mélanger délicatement pour bien les enrober de graisse. Couvrir avec un couvercle ou du papier alu.',
        'Cuire à couvert à feu doux pendant 30 minutes en remuant très délicatement toutes les 10 minutes avec une spatule (pas une cuillère qui casserait les tranches). Les pommes de terre doivent devenir fondantes.',
        'Retirer le couvercle, augmenter à feu moyen-vif et cuire encore 10-15 minutes en retournant régulièrement. Les pommes de terre doivent dorer et devenir croustillantes par endroits.',
        'Dans les 2 dernières minutes, ajouter l\'ail finement émincé (pas avant sinon il brûle et devient amer). Ajouter le persil haché au tout dernier moment, mélanger et servir immédiatement.'
      ],
      tips: [
        'La VRAIE sarladaise se fait SANS cèpes - c\'est un ajout moderne non traditionnel',
        'La graisse de canard apporte un goût incomparable - ne pas la remplacer par de l\'huile',
        'L\'émincé fin (2-3mm) permet une cuisson uniforme - trop épais = cru au centre',
        'Se réchauffe mal - préparer juste avant de servir'
      ],
      pairings: ['Magret de canard', 'Confit de canard', 'Foie gras poêlé']
    },

    pommes_boulangeres: {
      id: 'pommes_boulangeres',
      name: 'Pommes boulangères',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 90,
      servings: 6,
      description: 'Gratin de pommes de terre aux oignons cuit dans le bouillon, façon traditionnelle.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '1', unit: 'kg', note: 'à chair ferme' },
        { name: 'Oignons', quantity: '3', unit: 'gros' },
        { name: 'Bouillon de volaille', quantity: '50', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 180°C (chaleur traditionnelle). Beurrer généreusement un plat à gratin assez profond (les pommes de terre vont gonfler).',
        'Éplucher les pommes de terre et les émincer finement (3mm) à la mandoline. Les garder dans l\'eau froide pour éviter qu\'elles ne noircissent. Émincer les oignons de la même épaisseur.',
        'Faire revenir les oignons dans le beurre à feu moyen pendant 10 minutes jusqu\'à ce qu\'ils soient fondants et légèrement dorés. Ils doivent être confits, pas brûlés. Saler légèrement.',
        'Égoutter et sécher les pommes de terre. Dans le plat beurré, alterner couches de pommes de terre et d\'oignons en commençant et finissant par les pommes de terre. Effeuiller du thym frais entre chaque couche. Saler et poivrer légèrement chaque couche.',
        'Faire chauffer le bouillon. Le verser CHAUD sur les pommes de terre - il doit affleurer juste sous la dernière couche, sans la recouvrir. Parsemer de quelques noisettes de beurre sur le dessus.',
        'Enfourner à découvert pendant 1h30 à 1h45. Le dessus doit être bien doré et croustillant, et une lame de couteau doit s\'enfoncer sans résistance dans les pommes de terre.',
        'Vérifier régulièrement : si ça dore trop vite, couvrir de papier alu. Le bouillon doit être entièrement absorbé en fin de cuisson. Laisser reposer 5 minutes avant de servir.'
      ],
      tips: [
        'Nom d\'origine : traditionnellement cuites dans le four du boulanger après le pain (d\'où "boulangères")',
        'Le bouillon plutôt que la crème rend le plat plus léger et met en valeur les saveurs',
        'L\'accompagnement classique parfait pour le gigot d\'agneau',
        'Variante : ajouter des tranches fines d\'ail entre les couches'
      ],
      pairings: ['Gigot d\'agneau', 'Carré d\'agneau', 'Épaule d\'agneau']
    },

    pommes_fondantes: {
      id: 'pommes_fondantes',
      name: 'Pommes fondantes',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 40,
      servings: 4,
      description: 'Pommes de terre dorées au beurre puis confites dans le bouillon.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'Yukon Gold ou Charlotte' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Bouillon de volaille', quantity: '30', unit: 'cl' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'en chemise' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les pommes de terre et les tailler en cylindres réguliers de 5cm de haut et 4-5cm de diamètre à l\'emporte-pièce ou au couteau. Garder les chutes pour une purée. Les sécher soigneusement avec du papier absorbant.',
        'Saler les cylindres sur toutes les faces. Dans une poêle allant au four (ou une sauteuse), faire mousser le beurre à feu moyen-vif. Dorer les pommes de terre sur UNE SEULE face pendant 5 minutes jusqu\'à obtenir une belle croûte caramélisée.',
        'Retourner délicatement les pommes de terre (face dorée vers le haut). Ajouter les gousses d\'ail en chemise (avec leur peau) et les branches de thym autour.',
        'Verser le bouillon CHAUD - il doit arriver à mi-hauteur des pommes de terre, jamais plus. C\'est cette quantité précise qui permet la cuisson parfaite.',
        'Cuire à découvert à feu moyen pendant 20-25 minutes. Le bouillon va s\'évaporer progressivement en confisant les pommes de terre. NE PAS COUVRIR sinon elles ne seront pas croustillantes.',
        'Vérifier la cuisson : une lame de couteau doit s\'enfoncer facilement. Le liquide doit être COMPLÈTEMENT évaporé, les pommes de terre caramélisées sur le fond.',
        'Servir face dorée visible, avec les gousses d\'ail confites à écraser sur la viande ou à tartiner. Les pommes de terre doivent être dorées et croustillantes dessous, fondantes et crémeuses à l\'intérieur.'
      ],
      tips: [
        'Le secret absolu : laisser le bouillon s\'évaporer COMPLÈTEMENT, sans jamais couvrir',
        'L\'ail confit en chemise devient doux et crémeux comme une pâte',
        'Parfait avec un rôti de boeuf - les jus de viande se marient avec le caramel des pommes de terre',
        'Utiliser une poêle assez grande pour que les pommes de terre ne se touchent pas'
      ],
      pairings: ['Rôti de boeuf', 'Côte de boeuf', 'Filet de boeuf']
    },

    pommes_dauphine: {
      id: 'pommes_dauphine',
      name: 'Pommes dauphine',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'difficile',
      prepTime: 30,
      cookTime: 20,
      servings: 6,
      description: 'Boulettes de purée et pâte à choux frites, croustillantes et aériennes.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '500', unit: 'g', note: 'Bintje' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Eau', quantity: '12', unit: 'cl' },
        { name: 'Farine', quantity: '75', unit: 'g' },
        { name: 'Oeufs', quantity: '2', unit: 'pièces' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Huile de friture', quantity: '1', unit: 'L' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Cuire les pommes de terre à l\'eau salée ou à la vapeur jusqu\'à ce qu\'elles soient bien tendres (25-30 min). Les égoutter et les passer au moulin à légumes (jamais de mixer !). Remettre la purée dans une casserole à feu doux et la "dessécher" en remuant 2-3 minutes - elle doit être TRÈS sèche.',
        'PÂTE À CHOUX : Dans une casserole, porter l\'eau et le beurre coupé en morceaux à ébullition. Le beurre doit être fondu AVANT l\'ébullition - ne pas laisser l\'eau s\'évaporer.',
        'Dès l\'ébullition, retirer du feu et verser la farine d\'UN SEUL COUP. Mélanger vigoureusement à la spatule jusqu\'à ce que la pâte forme une boule qui se détache des parois.',
        'Remettre sur feu doux et "dessécher" la pâte 1-2 minutes en remuant - un film se forme au fond de la casserole. Transférer dans un saladier et laisser tiédir 5 minutes.',
        'Incorporer les œufs UN PAR UN en mélangeant énergiquement entre chaque. La pâte doit être lisse et former un ruban quand on soulève la spatule.',
        'Mélanger 2/3 de purée TIÈDE avec 1/3 de pâte à choux. Cette proportion est CRUCIALE - trop de pâte à choux = caoutchouteux, pas assez = s\'effrite. Assaisonner généreusement de muscade, sel et poivre.',
        'Faire chauffer l\'huile de friture à 170°C (un petit bout de pâte doit remonter immédiatement en faisant des bulles). Former des quenelles avec 2 cuillères à soupe et les faire glisser dans l\'huile.',
        'Frire par petites quantités (4-5 à la fois) pendant 5-6 minutes en les retournant à mi-cuisson. Elles doivent être uniformément dorées et bien gonflées. Égoutter sur papier absorbant, saler légèrement et servir immédiatement - elles ramollissent vite !'
      ],
      tips: [
        'La purée DOIT être très sèche sinon les pommes dauphine seront lourdes et huileuses',
        'Les proportions 2/3 purée - 1/3 pâte à choux sont essentielles au résultat',
        'Ne pas surcharger la friteuse : la température chuterait et les pommes absorberaient le gras',
        'Astuce pro : réfrigérer la pâte 30 min pour un façonnage plus facile'
      ],
      pairings: ['Entrecôte', 'Tournedos', 'Magret']
    },

    risotto: {
      id: 'risotto',
      name: 'Risotto',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🍚',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      description: 'Le risotto crémeux à l\'italienne, onctueux à souhait.',
      ingredients: [
        { name: 'Riz arborio', quantity: '300', unit: 'g' },
        { name: 'Bouillon', quantity: '1', unit: 'L', note: 'volaille ou légumes, chaud' },
        { name: 'Vin blanc sec', quantity: '15', unit: 'cl' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Parmesan', quantity: '80', unit: 'g', note: 'râpé' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Maintenir le bouillon au chaud dans une casserole à côté - il doit TOUJOURS être frémissant. C\'est une règle d\'or : jamais de liquide froid dans un risotto.',
        'Dans une sauteuse large ou une casserole à fond épais, faire chauffer l\'huile d\'olive avec 20g de beurre. Faire suer l\'oignon finement émincé pendant 3-4 minutes jusqu\'à ce qu\'il soit translucide mais PAS coloré.',
        'Ajouter le riz arborio (ou carnaroli, vialone nano) et le "nacrer" 2 minutes en remuant : chaque grain doit devenir translucide sur les bords avec un cœur blanc opaque. Cette étape permet au riz de résister à la cuisson longue.',
        'Déglacer au vin blanc et remuer jusqu\'à absorption COMPLÈTE. On doit entendre le riz "grésiller" légèrement. L\'acidité du vin est importante pour l\'équilibre final.',
        'Commencer à ajouter le bouillon louche par louche (environ 100ml à la fois). Remuer CONSTAMMENT et attendre l\'absorption quasi-complète avant chaque ajout. Le riz doit toujours être "mouillé" mais pas noyé. Compter 18-20 minutes de cuisson totale.',
        'Goûter le riz : il doit être crémeux mais encore légèrement ferme au cœur ("al dente"). Retirer du feu. C\'est le moment crucial de la "MANTECATURA".',
        'Hors du feu, incorporer énergiquement le reste du beurre froid en morceaux puis le parmesan râpé. Remuer vigoureusement 30 secondes - le risotto doit devenir brillant et onctueux.',
        'Le risotto parfait est "ALL\'ONDA" : quand on incline l\'assiette, il doit couler comme une vague, ni trop liquide ni trop compact. Servir IMMÉDIATEMENT dans des assiettes chaudes - le risotto n\'attend pas !'
      ],
      tips: [
        'Ne jamais cesser de remuer - c\'est ce qui libère l\'amidon et crée l\'onctuosité',
        'Le bouillon doit TOUJOURS être chaud - le froid stoppe la cuisson',
        'La mantecatura finale (beurre + parmesan hors feu) = onctuosité garantie',
        'Un bon risotto se mange à la cuillère, jamais à la fourchette'
      ],
      pairings: ['Osso buco', 'Escalope de veau', 'Champignons']
    },

    couscous: {
      id: 'couscous',
      name: 'Semoule de couscous',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🌾',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      description: 'Semoule légère et parfumée, méthode traditionnelle.',
      ingredients: [
        { name: 'Semoule de couscous', quantity: '300', unit: 'g', note: 'moyenne' },
        { name: 'Eau ou bouillon', quantity: '30', unit: 'cl', note: 'chaud' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '1/2', unit: 'c. à café' }
      ],
      steps: [
        'Verser la semoule dans un plat large et peu profond (ou un saladier large). L\'étaler pour qu\'elle soit en couche fine et uniforme.',
        'Arroser d\'huile d\'olive (2 c. à soupe) et mélanger avec les mains ou une fourchette pour bien enrober CHAQUE grain. Cette étape est essentielle pour éviter les paquets et obtenir une semoule aérienne.',
        'Faire bouillir le liquide (eau ou bouillon) avec le sel. Verser d\'un coup sur la semoule - le liquide doit être BOUILLANT. Mélanger rapidement, couvrir hermétiquement avec du film alimentaire ou une assiette.',
        'Laisser gonfler 5 minutes EXACTEMENT. La semoule absorbe le liquide en gonflant. Ne pas soulever le couvercle pendant ce temps.',
        'Découvrir et égrener immédiatement à la fourchette en soulevant délicatement pour séparer les grains. Les mouvements doivent être légers, pas de pression.',
        'Ajouter le beurre coupé en petits morceaux. Égrener à nouveau pour faire fondre et répartir le beurre dans toute la semoule. Chaque grain doit être distinct et brillant.',
        'Rectifier l\'assaisonnement (sel, un peu de curcuma ou ras el hanout selon le plat). La semoule est prête - elle peut attendre 10 minutes couverte dans un endroit tiède.'
      ],
      tips: [
        'Ratio 1 volume semoule / 1 volume liquide (ou légèrement moins pour une semoule plus légère)',
        'L\'huile d\'olive en premier évite que les grains collent - étape cruciale',
        'Peut se parfumer au ras el hanout, cumin, ou safran selon le plat d\'accompagnement',
        'Version traditionnelle : cuire à la vapeur au-dessus du bouillon de légumes du couscous'
      ],
      pairings: ['Tajine d\'agneau', 'Méchoui', 'Brochettes']
    },

    nouilles: {
      id: 'nouilles',
      name: 'Nouilles au beurre',
      type: 'accompagnement',
      category: 'pate',
      icon: '🍜',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 12,
      servings: 4,
      description: 'Nouilles fraîches simplement au beurre et persil.',
      ingredients: [
        { name: 'Nouilles aux oeufs', quantity: '400', unit: 'g', note: 'fraîches ou sèches' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Persil', quantity: '3', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Porter une grande quantité d\'eau à ébullition vive. Saler généreusement (10g de sel par litre) - les nouilles doivent absorber l\'assaisonnement pendant la cuisson.',
        'Plonger les nouilles dans l\'eau bouillante en les séparant avec une fourchette pour éviter qu\'elles ne collent. Cuisson : 3-4 minutes pour des nouilles fraîches, suivre les indications de l\'emballage pour des sèches (généralement 8-10 minutes).',
        'GOÛTER une nouille : elle doit être "al dente", c\'est-à-dire encore légèrement ferme au centre. Les nouilles continuent de cuire même après égouttage.',
        'Égoutter les nouilles en réservant une petite louche d\'eau de cuisson (environ 100ml). Cette eau riche en amidon sera votre "liant" secret.',
        'Remettre immédiatement les nouilles égouttées dans la casserole encore chaude avec le beurre coupé en morceaux. Remuer délicatement pour enrober chaque nouille de beurre fondu.',
        'Si les nouilles semblent sèches ou collent entre elles, ajouter 2-3 cuillères d\'eau de cuisson réservée. L\'amidon crée une légère sauce brillante qui enrobe les pâtes.',
        'Poivrer généreusement, ajouter le persil haché au dernier moment et servir immédiatement dans un plat chaud. Les nouilles n\'attendent pas !'
      ],
      tips: [
        'L\'eau de cuisson riche en amidon aide à lier et à créer une sauce légère',
        'Les nouilles aux œufs (Alsaciennes) ont beaucoup plus de goût que les pâtes classiques',
        'Accompagnement classique du bœuf bourguignon et de la blanquette',
        'Ne JAMAIS rincer les pâtes - vous perdriez l\'amidon qui fait adhérer la sauce'
      ],
      pairings: ['Boeuf bourguignon', 'Blanquette', 'Gibier en sauce']
    },

    knopfle: {
      id: 'knopfle',
      name: 'Knöpfle',
      type: 'accompagnement',
      category: 'pate',
      icon: '🥟',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 15,
      servings: 4,
      description: 'Petites pâtes alsaciennes pochées puis rissolées au beurre.',
      ingredients: [
        { name: 'Farine', quantity: '250', unit: 'g' },
        { name: 'Oeufs', quantity: '3', unit: 'pièces' },
        { name: 'Lait', quantity: '8', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel', quantity: '1', unit: 'c. à café' }
      ],
      steps: [
        'Dans un grand saladier, mélanger la farine avec le sel et la muscade râpée. Former un puits au centre et y casser les œufs. Commencer à mélanger du centre vers l\'extérieur.',
        'Ajouter le lait progressivement tout en travaillant la pâte. Elle doit être épaisse et lisse, plus consistante que celle des spätzle - elle tient sur la cuillère sans couler. Battre vigoureusement pour développer l\'élasticité.',
        'Laisser reposer la pâte couverte d\'un torchon pendant 30 minutes minimum. Ce repos permet à l\'amidon de gonfler et au gluten de se détendre pour des knöpfle plus tendres.',
        'Porter une grande casserole d\'eau salée à frémissement (pas à gros bouillons). Mouiller 2 cuillères à soupe dans l\'eau chaude.',
        'Former des petites quenelles en prélevant de la pâte avec une cuillère et en la poussant dans l\'eau avec la seconde. Travailler par petites quantités pour ne pas surcharger la casserole.',
        'Laisser pocher 3-4 minutes. Les knöpfle sont cuits quand ils remontent à la surface et y restent. Les retirer avec une écumoire et les rafraîchir brièvement à l\'eau froide.',
        'Dans une grande poêle, faire mousser le beurre à feu moyen-vif. Ajouter les knöpfle bien égouttés et les faire rissoler 4-5 minutes en les retournant délicatement jusqu\'à ce qu\'ils soient dorés sur toutes les faces. Servir bien chaud.'
      ],
      tips: [
        'Similaires aux spätzle mais plus gros et plus "moelleux" au centre',
        'Peuvent être gratinés au fromage avec de la crème et du munster fondu',
        'Spécialité du Haut-Rhin, plus répandus dans le sud de l\'Alsace',
        'Se conservent pochés non rissolés au frigo 2 jours'
      ],
      pairings: ['Civet de gibier', 'Baeckeoffe', 'Coq au riesling']
    },

    // ===== LÉGUMES SUPPLÉMENTAIRES =====

    lentilles_vertes: {
      id: 'lentilles_vertes',
      name: 'Lentilles vertes du Puy',
      type: 'accompagnement',
      category: 'legume',
      icon: '🫘',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 30,
      servings: 4,
      description: 'Lentilles fondantes à la française, avec lardons et aromates.',
      ingredients: [
        { name: 'Lentilles vertes du Puy', quantity: '250', unit: 'g' },
        { name: 'Lardons', quantity: '100', unit: 'g' },
        { name: 'Carotte', quantity: '1', unit: 'pièce' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'piqué de 2 clous de girofle' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Vinaigre de vin', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Dans une cocotte à fond épais, faire rissoler les lardons à sec à feu moyen jusqu\'à ce qu\'ils soient dorés et croustillants. Ils vont parfumer tout le plat. Réserver le gras rendu.',
        'Dans le même gras, ajouter les lentilles du Puy (pas besoin de les tremper contrairement aux autres légumineuses), la carotte entière ou coupée en gros morceaux, et l\'oignon piqué de 2 clous de girofle.',
        'Couvrir d\'eau FROIDE à hauteur (environ 2 fois le volume des lentilles). Ajouter le bouquet garni. ATTENTION : NE PAS SALER - le sel au début durcit la peau des lentilles.',
        'Porter à ébullition puis réduire immédiatement à feu doux pour maintenir un léger frémissement. Écumer si nécessaire. Cuire 25-30 minutes en surveillant.',
        'Goûter régulièrement : les lentilles sont prêtes quand elles sont fondantes mais encore entières, pas éclatées ni en bouillie. Les lentilles du Puy gardent mieux leur forme que les autres variétés.',
        'Retirer l\'oignon piqué, la carotte et le bouquet garni. Égoutter les lentilles en réservant un peu de jus de cuisson. Remettre les lardons.',
        'Saler et poivrer MAINTENANT. Ajouter le beurre en morceaux et remuer délicatement pour l\'incorporer. Ajouter le vinaigre de vin qui "réveille" le goût des lentilles. Si trop sec, ajouter un peu de jus réservé. Servir chaud.'
      ],
      tips: [
        'RÈGLE D\'OR : ne jamais saler au début - le sel durcit la peau des légumineuses',
        'Les lentilles vertes du Puy (AOP) tiennent mieux la cuisson que les autres',
        'Le vinaigre en fin de cuisson relève le goût et aide à la digestion',
        'Encore meilleures réchauffées le lendemain'
      ],
      pairings: ['Saucisses de Toulouse', 'Petit salé', 'Palette de porc']
    },

    flageolets: {
      id: 'flageolets',
      name: 'Flageolets',
      type: 'accompagnement',
      category: 'legume',
      icon: '🫘',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 90,
      servings: 4,
      description: 'Flageolets fondants au beurre, accompagnement traditionnel de l\'agneau.',
      ingredients: [
        { name: 'Flageolets secs', quantity: '300', unit: 'g', note: 'ou 2 boîtes' },
        { name: 'Oignon', quantity: '1', unit: 'pièce' },
        { name: 'Carotte', quantity: '1', unit: 'pièce' },
        { name: 'Bouquet garni', quantity: '1', unit: 'pièce' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Crème', quantity: '5', unit: 'cl', note: 'optionnel' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' }
      ],
      steps: [
        'Si vous utilisez des flageolets secs : les faire tremper 12 heures dans de l\'eau froide (3 fois leur volume). Les égoutter et les rincer. Les flageolets en conserve évitent cette étape.',
        'Mettre les flageolets dans une grande cocotte avec l\'oignon coupé en deux (piqué de 2 clous de girofle pour le parfum), la carotte entière et le bouquet garni (thym, laurier, queues de persil).',
        'Couvrir largement d\'eau FROIDE (au moins 2-3 fois le volume). NE PAS SALER - comme pour toutes les légumineuses, le sel au début empêche les haricots de s\'attendrir.',
        'Porter à ébullition. Écumer soigneusement la mousse qui se forme à la surface (c\'est l\'amidon). Réduire à feu doux et laisser mijoter 1h30 à 2h selon la fraîcheur des haricots.',
        'Vérifier la cuisson : les flageolets doivent être fondants mais garder leur forme. SALER seulement quand ils sont presque cuits - les 15 dernières minutes suffisent.',
        'Égoutter les flageolets en réservant un peu de jus de cuisson. Retirer l\'oignon, la carotte et le bouquet garni.',
        'Dans une casserole, faire fondre le beurre à feu doux. Ajouter les flageolets et la crème si vous l\'utilisez. Réchauffer doucement 5 minutes en remuant délicatement pour ne pas écraser les haricots.',
        'Poivrer généreusement, rectifier le sel. Parsemer de persil frais haché au moment de servir. Les flageolets doivent être brillants et oncteux.'
      ],
      tips: [
        'Les flageolets en conserve (égouttés et rincés) = gain de temps énorme pour un résultat très correct',
        'Contrairement à leur réputation, les flageolets bien cuits sont très digestes',
        'L\'accompagnement CLASSIQUE et incontournable du gigot d\'agneau pascal',
        'Se réchauffent très bien - peuvent se préparer la veille'
      ],
      pairings: ['Gigot d\'agneau', 'Carré d\'agneau', 'Selle d\'agneau']
    },

    epinards: {
      id: 'epinards',
      name: 'Épinards à la crème',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      description: 'Épinards fondants à la crème, garniture classique.',
      ingredients: [
        { name: 'Épinards frais', quantity: '800', unit: 'g', note: 'ou 500g surgelés' },
        { name: 'Crème fraîche', quantity: '15', unit: 'cl' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Ail', quantity: '1', unit: 'gousse' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Laver soigneusement les épinards frais dans plusieurs bains d\'eau (ils retiennent la terre). Retirer les queues et les côtes centrales des grandes feuilles. Essorer grossièrement - un peu d\'eau aide à la cuisson.',
        'Dans une GRANDE poêle ou sauteuse (les épinards sont volumineux !), faire fondre le beurre à feu moyen-vif. Ajouter les épinards en plusieurs fois - ils réduisent à vue d\'œil !',
        'Faire tomber les épinards 3-4 minutes en les retournant avec une spatule. Ils vont rendre BEAUCOUP d\'eau (c\'est normal, ils sont composés à 90% d\'eau). La poêle va se remplir de liquide.',
        'IMPORTANT : bien égoutter les épinards dans une passoire en pressant avec le dos d\'une cuillère pour extraire le maximum d\'eau. Cette étape est cruciale pour éviter une crème liquide.',
        'Remettre les épinards égouttés dans la poêle. Ajouter l\'ail finement pressé ou haché et faire revenir 1-2 minutes pour parfumer.',
        'Verser la crème fraîche et remuer. Assaisonner de muscade râpée (indispensable !), sel et poivre. La muscade est LE secret des épinards réussis.',
        'Laisser réduire à feu moyen 5 minutes jusqu\'à ce que la crème nappe bien les épinards. Ils doivent être brillants et onctueux, pas noyés dans la sauce. Rectifier l\'assaisonnement et servir immédiatement.'
      ],
      tips: [
        'Les épinards rendent énormément d\'eau - bien les égoutter AVANT d\'ajouter la crème',
        'Si trop liquide malgré tout, faire réduire à feu vif quelques minutes',
        'La muscade est INDISPENSABLE - elle sublime les épinards',
        'Version surgelée : décongeler, bien presser, puis procéder à partir de l\'étape de l\'ail'
      ],
      pairings: ['Veau', 'Volaille', 'Poisson', 'Oeufs']
    },

    legumes_grilles: {
      id: 'legumes_grilles',
      name: 'Légumes grillés',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 25,
      servings: 4,
      description: 'Assortiment de légumes de saison grillés à l\'huile d\'olive.',
      ingredients: [
        { name: 'Courgettes', quantity: '2', unit: 'pièces' },
        { name: 'Poivrons', quantity: '2', unit: 'pièces' },
        { name: 'Aubergine', quantity: '1', unit: 'pièce' },
        { name: 'Oignons rouges', quantity: '2', unit: 'pièces' },
        { name: 'Huile d\'olive', quantity: '6', unit: 'c. à soupe' },
        { name: 'Herbes de Provence', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer les légumes : couper les courgettes et l\'aubergine en tranches de 1cm d\'épaisseur (dans la longueur pour les courgettes), les poivrons en larges quartiers (retirer pédoncule et graines), les oignons en rondelles épaisses piquées d\'un cure-dent pour qu\'elles tiennent.',
        'Disposer les légumes sur une grande plaque. Les badigeonner généreusement d\'huile d\'olive au pinceau sur les deux faces. Saupoudrer d\'herbes de Provence, saler et poivrer.',
        'Faire chauffer le gril, la plancha ou le barbecue à FEU TRÈS VIF. La surface doit être fumante - c\'est la clé des belles marques de grillage. Un gril pas assez chaud = légumes mous et pâles.',
        'Déposer les légumes sur le gril SANS les superposer. Laisser griller 3-4 minutes SANS TOUCHER - c\'est ce qui crée les marques. Les légumes doivent se détacher facilement quand ils sont prêts à être retournés.',
        'Retourner et griller l\'autre face 3-4 minutes. Les légumes doivent être marqués de stries bien nettes mais rester légèrement croquants à l\'intérieur - pas mous !',
        'Retirer et disposer sur un plat de service. Les légumes les plus fins (courgettes) cuisent plus vite que les plus épais (aubergines, poivrons) - les sortir au fur et à mesure.',
        'Arroser d\'un filet d\'huile d\'olive fraîche, parsemer d\'herbes de Provence. Servir chaud, tiède ou même à température ambiante - c\'est délicieux dans tous les cas.'
      ],
      tips: [
        'Gril TRÈS chaud = belles marques caramélisées. Pas assez chaud = légumes mous et fades',
        'Ne pas surcharger le gril - les légumes doivent avoir de l\'espace pour griller, pas pour étuver',
        'Excellents en antipasti avec un filet de vinaigre balsamique et des copeaux de parmesan',
        'Peuvent se préparer à l\'avance et se conservent 2 jours au frigo'
      ],
      pairings: ['Brochettes', 'Grillades', 'Côtes d\'agneau']
    },

    carottes_glacees: {
      id: 'carottes_glacees',
      name: 'Carottes glacées',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Carottes brillantes et légèrement sucrées, technique classique.',
      ingredients: [
        { name: 'Carottes', quantity: '600', unit: 'g', note: 'nouvelles de préférence' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel', quantity: '1/2', unit: 'c. à café' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' }
      ],
      steps: [
        'Éplucher les carottes (ou simplement les brosser si nouvelles). Les tailler de façon uniforme : en rondelles de 5mm, en tronçons obliques ou "tournées" pour une présentation plus élégante. Des morceaux de même taille = cuisson uniforme.',
        'Disposer les carottes dans une sauteuse large en UNE SEULE COUCHE. Ajouter le beurre coupé en morceaux, le sucre et le sel. Le sucre va créer le glaçage, pas le goût sucré.',
        'Couvrir d\'eau FROIDE à hauteur des carottes, pas plus. Trop d\'eau = temps d\'évaporation trop long et carottes molles.',
        'Porter à ébullition puis cuire à feu moyen à DÉCOUVERT. L\'eau va s\'évaporer progressivement. NE PAS couvrir sinon les carottes vont bouillir au lieu de glacer.',
        'Surveiller attentivement : quand l\'eau est presque évaporée (il reste juste un fond sirupeux), secouer régulièrement la sauteuse pour enrober les carottes. Le beurre, le sucre et le jus des carottes forment un glaçage.',
        'Les carottes sont prêtes quand elles sont tendres (tester avec la pointe d\'un couteau), brillantes et enrobées d\'une fine couche de glaçage caramélisé. Elles ne doivent PAS être sèches.',
        'Rectifier l\'assaisonnement, parsemer de persil frais haché. Servir immédiatement - le glaçage fige en refroidissant.'
      ],
      tips: [
        'Le SECRET du glaçage : laisser l\'eau s\'évaporer TOTALEMENT, jamais de couvercle',
        'Les carottes doivent être brillantes comme des bonbons, pas mates',
        'La même technique fonctionne avec navets, petits oignons ou champignons',
        'Variante : remplacer une partie du sucre par du miel pour un goût plus complexe'
      ],
      pairings: ['Rôti de veau', 'Côtes de porc', 'Volaille rôtie']
    },

    topinambours: {
      id: 'topinambours',
      name: 'Topinambours sautés',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      description: 'Topinambours dorés au beurre noisette, saveur d\'artichaut.',
      ingredients: [
        { name: 'Topinambours', quantity: '600', unit: 'g' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Citron', quantity: '1/2', unit: 'pièce', note: 'jus' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Bien brosser les topinambours sous l\'eau courante avec une brosse à légumes. Leur forme biscornue retient la terre dans les recoins. Si bio, pas besoin de les éplucher - la peau est comestible et apporte du croquant.',
        'Couper les topinambours en rondelles régulières de 5mm d\'épaisseur. Les arroser IMMÉDIATEMENT de jus de citron et mélanger - ils s\'oxydent très vite et noircissent comme les artichauts.',
        'Dans une grande poêle, faire chauffer le beurre à feu moyen. Attendre qu\'il mousse puis que la mousse retombe - c\'est le début du beurre noisette qui apporte une saveur de noisette.',
        'Ajouter les topinambours égouttés et séchés en une seule couche. Faire dorer 15-20 minutes en les retournant régulièrement avec une spatule. Ils doivent être dorés uniformément.',
        'Vérifier la cuisson : les topinambours doivent être tendres à cœur (piquer avec la pointe d\'un couteau) et bien dorés sur les faces. Pas mous ni brûlés.',
        'Saler et poivrer généreusement. Parsemer de persil frais haché. Arroser du beurre noisette de la poêle qui a concentré toutes les saveurs.',
        'Servir immédiatement. Les topinambours ont un goût subtil proche de l\'artichaut qui se marie parfaitement avec le beurre noisette.'
      ],
      tips: [
        'Pas besoin de les éplucher si bio - la peau fine devient croustillante à la cuisson',
        'Goût proche de l\'artichaut avec des notes de noisette',
        'Légume "oublié" revenu à la mode - très prisé des grands chefs',
        'ATTENTION : ne pas en abuser - les topinambours contiennent de l\'inuline, difficile à digérer en grande quantité'
      ],
      pairings: ['Gibier', 'Volaille', 'Saint-Jacques']
    },

    navets_confits: {
      id: 'navets_confits',
      name: 'Navets confits',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 35,
      servings: 4,
      description: 'Navets fondants et caramélisés, accompagnement d\'hiver.',
      ingredients: [
        { name: 'Navets', quantity: '600', unit: 'g', note: 'nouveaux ou boule d\'or' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Miel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Bouillon', quantity: '20', unit: 'cl' },
        { name: 'Thym', quantity: '2', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les navets. Si ce sont des navets nouveaux (petits, tendres), les laisser entiers ou les couper en deux. Si plus gros, les couper en quartiers réguliers pour une cuisson uniforme.',
        'Dans une sauteuse ou cocotte, faire fondre le beurre à feu moyen-vif. Ajouter les navets et les faire dorer 5 minutes en les retournant - ils doivent prendre une belle coloration sur toutes les faces.',
        'Ajouter le miel et laisser caraméliser 2-3 minutes en remuant. Le miel va enrober les navets et commencer à créer un glaçage. Le sucre du miel adoucit l\'amertume naturelle du navet.',
        'Verser le bouillon chaud (volaille ou légumes), ajouter les branches de thym. Le liquide va déglacer les sucs caramélisés. Saler légèrement (le bouillon est souvent déjà salé).',
        'Couvrir et laisser mijoter à feu doux 25-30 minutes. Les navets doivent être tendres quand on les pique avec un couteau - sans résistance au centre.',
        'Retirer le couvercle et augmenter le feu. Laisser réduire le liquide en remuant délicatement. Le but : obtenir un glaçage sirupeux qui enrobe les navets. Ils doivent être brillants.',
        'Retirer le thym, rectifier l\'assaisonnement (poivre, éventuellement un peu plus de miel si trop amers). Servir immédiatement, nappés de leur glaçage.'
      ],
      tips: [
        'Le miel adoucit l\'amertume naturelle du navet - ne pas s\'en passer',
        'Les navets "boule d\'or" sont plus doux et sucrés que les navets blancs classiques',
        'Accompagnement parfait du canard - le sucré-salé des navets équilibre le gras',
        'Variante : ajouter quelques échalotes confites en fin de cuisson'
      ],
      pairings: ['Canard', 'Magret', 'Gibier', 'Porc']
    },

    choux_bruxelles: {
      id: 'choux_bruxelles',
      name: 'Choux de Bruxelles',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      description: 'Choux de Bruxelles rôtis aux lardons, croustillants et savoureux.',
      ingredients: [
        { name: 'Choux de Bruxelles', quantity: '500', unit: 'g' },
        { name: 'Lardons', quantity: '100', unit: 'g' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Parer les choux de Bruxelles : retirer les feuilles extérieures jaunies ou abîmées, recouper la base si noircie. Les couper en deux dans le sens de la hauteur - c\'est essentiel pour la caramélisation.',
        'Porter une grande casserole d\'eau salée à ébullition. Blanchir les choux 5 minutes. Ce blanchiment est CRUCIAL : il réduit l\'amertume et le soufre responsables de leur mauvaise réputation. Égoutter et bien sécher.',
        'Dans une grande poêle, faire rissoler les lardons à sec à feu moyen jusqu\'à ce qu\'ils soient dorés et croustillants. Ajouter le beurre.',
        'Disposer les choux FACE COUPÉE VERS LE BAS dans la poêle. C\'est le secret de choux de Bruxelles réussis : la face plate va caraméliser et devenir croustillante et dorée.',
        'Laisser cuire 8-10 minutes SANS TROP REMUER. Résister à la tentation de les retourner constamment - ils doivent rester en contact avec le fond chaud pour bien caraméliser.',
        'Quand les faces coupées sont bien dorées et caramélisées, ajouter l\'ail finement émincé. Remuer délicatement et cuire encore 2 minutes.',
        'Saler (attention, les lardons sont déjà salés), poivrer généreusement. Les choux doivent être tendres à l\'intérieur et dorés/croustillants sur la face coupée. Servir immédiatement.'
      ],
      tips: [
        'Le blanchiment préalable réduit l\'amertume et le soufre - étape INDISPENSABLE',
        'Les dorer FACE COUPÉE vers le bas = caramélisation et saveur incomparable',
        'Bien meilleurs que leur réputation ! Cette recette convertit les réfractaires',
        'Variante : ajouter des marrons ou des noix pour plus de gourmandise'
      ],
      pairings: ['Gibier', 'Rôti de porc', 'Dinde']
    },

    potimarron_roti: {
      id: 'potimarron_roti',
      name: 'Potimarron rôti',
      type: 'accompagnement',
      category: 'legume',
      icon: '🎃',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 35,
      servings: 4,
      description: 'Quartiers de potimarron rôtis aux épices, fondants et sucrés.',
      ingredients: [
        { name: 'Potimarron', quantity: '1', unit: 'pièce', note: 'environ 800g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '1', unit: 'c. à soupe' },
        { name: 'Cumin', quantity: '1', unit: 'c. à café' },
        { name: 'Paprika', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 200°C (chaleur tournante 180°C). Placer une grande plaque de cuisson dans le four pour qu\'elle préchauffe aussi - les légumes rôtiront mieux sur une plaque chaude.',
        'Couper le potimarron en deux, retirer les graines et les filaments avec une cuillère. Découper en quartiers réguliers de 2-3 cm d\'épaisseur. GARDER LA PEAU : elle est fine et comestible (c\'est l\'avantage du potimarron !).',
        'Dans un grand bol, mélanger l\'huile d\'olive, le miel, le cumin et le paprika. Ce mélange sucré-épicé va créer une croûte caramélisée irrésistible.',
        'Badigeonner généreusement chaque quartier de potimarron avec ce mélange sur toutes les faces. Saler et poivrer.',
        'Disposer les quartiers sur la plaque chaude EN UNE SEULE COUCHE, avec de l\'espace entre chaque morceau. Si trop serrés, ils vont cuire à la vapeur au lieu de rôtir.',
        'Enfourner 30-35 minutes en retournant à mi-cuisson. Le potimarron est prêt quand il est tendre à cœur (tester avec un couteau), doré et légèrement caramélisé sur les bords.',
        'Sortir du four et servir immédiatement. La peau doit être légèrement croustillante, la chair fondante et sucrée.'
      ],
      tips: [
        'Le potimarron est le SEUL courge dont la peau est vraiment fine et agréable à manger',
        'Peut se parfumer à la cannelle, au gingembre ou à la coriandre pour varier',
        'Idéal pour l\'automne - le goût de châtaigne naturel sublime le gibier',
        'Se conserve bien au frigo et se réchauffe sans problème'
      ],
      pairings: ['Gibier', 'Canard', 'Porc', 'Poulet']
    },

    patates_douces: {
      id: 'patates_douces',
      name: 'Patates douces rôties',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🍠',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 35,
      servings: 4,
      description: 'Patates douces rôties au four, naturellement sucrées.',
      ingredients: [
        { name: 'Patates douces', quantity: '800', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Paprika fumé', quantity: '1', unit: 'c. à café' },
        { name: 'Ail en poudre', quantity: '1/2', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 200°C (chaleur tournante 180°C). Préchauffer la plaque de cuisson dans le four pour que les patates douces saisissent immédiatement au contact.',
        'Éplucher les patates douces (leur peau est plus épaisse que celle des pommes de terre). Les couper en cubes réguliers de 2-2,5cm - pas trop petits sinon ils sèchent, pas trop gros sinon ils ne cuisent pas uniformément.',
        'Dans un grand saladier, mélanger les cubes avec l\'huile d\'olive, le paprika fumé (qui apporte une note fumée subtile), l\'ail en poudre, le sel et le poivre. Bien enrober chaque morceau.',
        'Étaler les cubes sur la plaque chaude EN UNE SEULE COUCHE avec de l\'espace entre chaque. Si trop serrés, ils vont cuire à la vapeur au lieu de rôtir et ne doreront pas.',
        'Enfourner 30-35 minutes TOTALES. À mi-cuisson (15 min), retourner les cubes avec une spatule pour qu\'ils dorent uniformément.',
        'Les patates douces sont prêtes quand elles sont tendres à cœur, dorées et légèrement caramélisées sur les bords. Leur sucre naturel crée une belle croûte. Servir immédiatement.'
      ],
      tips: [
        'Les cubes pas trop petits (2cm minimum) pour garder du moelleux à l\'intérieur',
        'Excellentes aussi en purée avec un peu de beurre et de muscade',
        'Se marient parfaitement avec les saveurs sucrées-salées (miel, sirop d\'érable)',
        'Variante : ajouter des graines de cumin ou de la coriandre'
      ],
      pairings: ['Poulet', 'Côtes de porc', 'Brochettes']
    },

    betteraves: {
      id: 'betteraves',
      name: 'Betteraves rôties',
      type: 'accompagnement',
      category: 'legume',
      icon: '🟣',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 60,
      servings: 4,
      description: 'Betteraves rôties au four, sucrées et concentrées.',
      ingredients: [
        { name: 'Betteraves crues', quantity: '600', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Vinaigre balsamique', quantity: '2', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 180°C. Bien brosser les betteraves sous l\'eau froide pour éliminer toute la terre. NE PAS les éplucher - la peau protège la chair pendant la cuisson et les empêche de "saigner".',
        'Préparer des carrés de papier aluminium assez grands pour envelopper chaque betterave. Déposer une betterave au centre de chaque carré, l\'arroser d\'un filet d\'huile d\'olive, ajouter une branche de thym, saler légèrement.',
        'Refermer hermétiquement les papillotes en formant des plis serrés. La cuisson à l\'étouffée concentre les saveurs et garde les betteraves moelleuses.',
        'Disposer les papillotes sur une plaque et enfourner 50-60 minutes selon la taille (les petites cuisent plus vite). Les grosses betteraves peuvent nécessiter jusqu\'à 1h15.',
        'Pour vérifier la cuisson : piquer à travers le papier alu avec la pointe d\'un couteau - il doit s\'enfoncer FACILEMENT jusqu\'au cœur, sans aucune résistance.',
        'Ouvrir les papillotes avec précaution (vapeur brûlante !). Éplucher les betteraves ENCORE TIÈDES - la peau se détache toute seule sous les doigts. Porter des gants si vous craignez de vous tacher.',
        'Couper les betteraves en quartiers ou en tranches. Disposer dans un plat, assaisonner de sel et poivre, arroser de vinaigre balsamique. Servir tiède ou à température ambiante.'
      ],
      tips: [
        'La cuisson au four concentre les saveurs et le sucre naturel de la betterave',
        'BIEN SUPÉRIEURES aux betteraves cuites sous vide du commerce - rien à voir !',
        'Excellent avec du fromage de chèvre frais et des noix',
        'Se conservent plusieurs jours au frigo - pratique à préparer à l\'avance'
      ],
      pairings: ['Gibier', 'Boeuf', 'Fromage de chèvre']
    },

    airelles: {
      id: 'airelles',
      name: 'Compotée d\'airelles',
      type: 'accompagnement',
      category: 'condiment',
      icon: '🫐',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 6,
      description: 'Compotée acidulée traditionnelle pour accompagner le gibier.',
      ingredients: [
        { name: 'Airelles', quantity: '300', unit: 'g', note: 'fraîches ou surgelées' },
        { name: 'Sucre', quantity: '100', unit: 'g' },
        { name: 'Eau', quantity: '5', unit: 'cl' },
        { name: 'Zeste d\'orange', quantity: '1', unit: 'pièce', note: 'optionnel' }
      ],
      steps: [
        'Si vous utilisez des airelles fraîches, les rincer délicatement à l\'eau froide et les égoutter. Les airelles surgelées peuvent être utilisées directement sans décongélation préalable.',
        'Dans une casserole à fond épais, verser l\'eau et le sucre. Faire chauffer à feu moyen en remuant jusqu\'à dissolution complète du sucre - obtenir un sirop clair.',
        'Ajouter les airelles dans le sirop. Porter à ébullition puis réduire à feu doux. L\'acidité naturelle des airelles va réagir avec le sucre.',
        'Laisser mijoter doucement 10-15 minutes en remuant de temps en temps. Les airelles vont progressivement éclater et libérer leur jus - c\'est normal et souhaité.',
        'La compotée est prête quand elle a épaissi et que la plupart des baies ont éclaté, mais qu\'il en reste quelques-unes entières pour la texture. Retirer du feu.',
        'Si vous le souhaitez, ajouter le zeste d\'orange finement râpé (uniquement la partie colorée, pas le blanc amer). Bien mélanger.',
        'Laisser refroidir complètement. La compotée va encore épaissir en refroidissant grâce à la pectine naturelle des airelles. Transférer dans un pot propre.'
      ],
      tips: [
        'Se conserve plusieurs semaines au réfrigérateur dans un pot hermétique',
        'Peut remplacer la confiture de groseilles dans les recettes classiques',
        'INDISPENSABLE avec le gibier scandinave - tradition incontournable',
        'L\'acidité des airelles coupe le gras des viandes et équilibre les saveurs'
      ],
      pairings: ['Chevreuil', 'Cerf', 'Sanglier', 'Renne', 'Canard']
    },

    courge_butternut: {
      id: 'courge_butternut',
      name: 'Purée de butternut',
      type: 'accompagnement',
      category: 'legume',
      icon: '🎃',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Purée veloutée de courge butternut, douce et parfumée.',
      ingredients: [
        { name: 'Courge butternut', quantity: '800', unit: 'g' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Crème fraîche', quantity: '5', unit: 'cl' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Couper la courge butternut en deux dans le sens de la longueur. Retirer les graines et les filaments avec une cuillère. Éplucher chaque moitié avec un économe (la peau est épaisse mais se pèle bien).',
        'Couper la chair en cubes réguliers de 3cm environ. Des morceaux de même taille = cuisson uniforme. La courge butternut cuit plus vite que les autres courges.',
        'Cuire les cubes à la vapeur (panier vapeur ou couscoussier) pendant 20-25 minutes. Vérifier la cuisson : un couteau doit s\'enfoncer sans aucune résistance. La vapeur préserve mieux les saveurs que la cuisson à l\'eau.',
        'Écraser les cubes cuits au presse-purée pour une texture rustique, ou mixer pour une purée très lisse. La butternut donne naturellement une texture crémeuse et soyeuse.',
        'Remettre la purée dans une casserole à feu doux. Incorporer le beurre en morceaux et la crème fraîche. Mélanger énergiquement pour obtenir une purée homogène et brillante.',
        'Assaisonner généreusement de muscade râpée (elle sublime la courge !), sel et poivre. Goûter et ajuster.',
        'Si la purée est trop liquide (la butternut contient beaucoup d\'eau), la "sécher" en la faisant chauffer quelques minutes à feu doux en remuant constamment jusqu\'à la consistance désirée.'
      ],
      tips: [
        'La cuisson vapeur préserve les saveurs et évite que la courge se gorge d\'eau',
        'Peut se parfumer au curry doux, à la sauge frite ou au sirop d\'érable',
        'Texture naturellement crémeuse et soyeuse - moins besoin de beurre que pour une purée de pommes de terre',
        'Se congèle très bien pour une préparation à l\'avance'
      ],
      pairings: ['Volaille', 'Porc', 'Gibier', 'Canard']
    },

    choucroute: {
      id: 'choucroute',
      name: 'Choucroute garnie',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 120,
      servings: 6,
      description: 'Chou fermenté braisé au vin blanc avec charcuteries alsaciennes.',
      ingredients: [
        { name: 'Choucroute crue', quantity: '1', unit: 'kg' },
        { name: 'Lard fumé', quantity: '300', unit: 'g' },
        { name: 'Saucisses de Strasbourg', quantity: '6', unit: 'pièces' },
        { name: 'Saucisse de Montbéliard', quantity: '2', unit: 'pièces' },
        { name: 'Palette fumée', quantity: '500', unit: 'g' },
        { name: 'Vin blanc d\'Alsace', quantity: '50', unit: 'cl' },
        { name: 'Oignon', quantity: '1', unit: 'pièce', note: 'piqué de clous de girofle' },
        { name: 'Genièvre', quantity: '10', unit: 'baies' },
        { name: 'Saindoux', quantity: '2', unit: 'c. à soupe' }
      ],
      steps: [
        'Goûter la choucroute crue. Si elle est TRÈS acide, la rincer brièvement à l\'eau froide et l\'essorer. Sinon, la garder telle quelle - l\'acidité fait partie du plat ! La choucroute crue d\'Alsace est généralement moins acide.',
        'Dans une grande cocotte, faire fondre le saindoux (ou la graisse de canard) à feu moyen. Ajouter l\'oignon piqué des clous de girofle et faire revenir légèrement.',
        'Ajouter la moitié de la choucroute en couche. Disposer le lard et la palette fumée par-dessus. Ajouter les baies de genièvre (ESSENTIELLES au goût traditionnel). Couvrir avec le reste de choucroute.',
        'Mouiller avec le vin blanc d\'Alsace (Riesling ou Sylvaner de préférence). Le vin doit affleurer la choucroute sans la noyer.',
        'Couvrir et cuire à feu TRÈS DOUX pendant 1h30 à 2h. La vraie choucroute doit mijoter lentement, presque confire. Résister à l\'envie d\'augmenter le feu !',
        'Ajouter les saucisses de Strasbourg et de Montbéliard 20-25 minutes avant la fin de cuisson - elles doivent juste se réchauffer et s\'imprégner des arômes.',
        'Vérifier l\'assaisonnement (attention, les charcuteries sont souvent déjà salées). La choucroute doit être fondante mais pas en bouillie. Servir dans un grand plat avec les charcuteries disposées dessus, accompagné de pommes vapeur et de moutarde.'
      ],
      tips: [
        'La VRAIE choucroute cuit LONGTEMPS (minimum 1h30) à feu TRÈS DOUX - c\'est la clé',
        'Ne pas trop rincer : l\'acidité est importante pour le goût et la digestion',
        'Les baies de genièvre sont ESSENTIELLES - pas de choucroute sans genièvre !',
        'Encore meilleure réchauffée le lendemain - peut se préparer à l\'avance'
      ],
      pairings: ['Palette fumée', 'Jambonneau', 'Pommes vapeur']
    },

    endives_braisees: {
      id: 'endives_braisees',
      name: 'Endives braisées',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 45,
      servings: 4,
      description: 'Endives fondantes caramélisées au beurre.',
      ingredients: [
        { name: 'Endives', quantity: '6', unit: 'pièces' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Citron', quantity: '1/2', unit: 'pièce', note: 'jus' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer les endives : retirer les feuilles extérieures abîmées. Avec la pointe d\'un couteau, creuser et retirer le cône dur et amer à la base - cette étape est CRUCIALE pour des endives moins amères.',
        'Dans une grande sauteuse ou poêle à bords hauts (où les endives tiennent en une seule couche), faire fondre le beurre à feu moyen. Quand il mousse, disposer les endives côte à côte.',
        'Saupoudrer de sucre (il contrebalance l\'amertume), arroser du jus de citron (qui les empêche de noircir et ajoute de la fraîcheur). Saler légèrement.',
        'Couvrir hermétiquement et cuire à feu DOUX pendant 30 minutes. Les endives vont rendre leur eau et cuire doucement dans ce mélange de beurre et de jus.',
        'Retirer le couvercle. Retourner délicatement les endives et augmenter légèrement le feu. Laisser caraméliser 15-20 minutes en les retournant de temps en temps.',
        'Les endives sont prêtes quand elles sont bien dorées et caramélisées sur toutes les faces, complètement fondantes à l\'intérieur quand on les pique avec un couteau.',
        'Servir immédiatement, nappées de leur jus de cuisson caramélisé. Poivrer au moulin.'
      ],
      tips: [
        'TOUJOURS retirer le cône central à la base - c\'est lui qui concentre l\'amertume',
        'Le sucre et le citron équilibrent le goût amer naturel des endives',
        'Excellentes gratinées au jambon (endives au gratin)',
        'Se réchauffent bien - peuvent se préparer à l\'avance et gratiner au dernier moment'
      ],
      pairings: ['Jambon', 'Volaille', 'Rôti de porc']
    },

    puree_panais: {
      id: 'puree_panais',
      name: 'Purée de panais',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Purée douce et parfumée de légume ancien.',
      ingredients: [
        { name: 'Panais', quantity: '600', unit: 'g' },
        { name: 'Pomme de terre', quantity: '200', unit: 'g' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Muscade', quantity: '1', unit: 'pincée' }
      ],
      steps: [
        'Éplucher les panais et la pomme de terre avec un économe. Le panais a une peau fine mais souvent terreuse - bien la retirer. Couper en morceaux réguliers de 3-4 cm pour une cuisson homogène. La pomme de terre apporte du corps et lie la purée.',
        'Démarrer la cuisson à l\'eau froide salée (10g/litre). Porter à ébullition puis cuire 20-25 minutes à frémissement doux. Les légumes doivent être TRÈS tendres - ils doivent s\'écraser sans résistance quand on les pique avec un couteau.',
        'Égoutter soigneusement dans une passoire et laisser sécher 2-3 minutes. L\'excès d\'eau est l\'ennemi d\'une bonne purée ! Passer au moulin à légumes grille fine directement au-dessus de la casserole chaude. NE PAS mixer (la pomme de terre deviendrait collante).',
        'Chauffer la crème fraîche séparément (elle ne doit pas être froide). Incorporer d\'abord le beurre en morceaux dans la purée chaude, mélanger vigoureusement. Puis ajouter la crème chaude progressivement jusqu\'à la consistance voulue.',
        'Assaisonner généreusement : le panais supporte bien les épices. Ajouter une bonne pincée de muscade râpée fraîche (elle sublime le goût naturellement sucré du panais), sel et poivre blanc. Rectifier et servir bien chaud.'
      ],
      tips: [
        'La pomme de terre donne du corps',
        'Goût naturellement sucré',
        'Excellent avec le gibier'
      ],
      pairings: ['Gibier', 'Canard', 'Saint-Jacques']
    },

    fenouil_braise: {
      id: 'fenouil_braise',
      name: 'Fenouil braisé',
      type: 'accompagnement',
      category: 'legume',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 40,
      servings: 4,
      description: 'Fenouil fondant braisé au vin blanc et parmesan.',
      ingredients: [
        { name: 'Fenouil', quantity: '4', unit: 'bulbes' },
        { name: 'Vin blanc', quantity: '15', unit: 'cl' },
        { name: 'Bouillon de légumes', quantity: '20', unit: 'cl' },
        { name: 'Parmesan', quantity: '50', unit: 'g', note: 'râpé' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préparer les fenouils : retirer les tiges dures mais CONSERVER les belles pluches vertes pour la décoration finale. Couper chaque bulbe en 4 quartiers en gardant un morceau de base qui tient les couches ensemble. Retirer les parties abîmées ou fibreuses.',
        'Dans une sauteuse ou un plat allant au four, faire chauffer le beurre à feu moyen. Y faire dorer les quartiers de fenouil sur chaque face - compter 3-4 minutes par côté. Ils doivent prendre une belle coloration dorée qui va apporter des saveurs de caramélisation.',
        'Une fois colorés, déglacer avec le vin blanc (l\'alcool va s\'évaporer). Ajouter le bouillon de légumes. Le liquide doit arriver à mi-hauteur des fenouils. Saler légèrement (le parmesan apportera du sel).',
        'Couvrir avec un couvercle ou du papier aluminium et braiser 30 minutes à feu très doux. À mi-cuisson, retourner délicatement les quartiers. Le fenouil doit devenir complètement tendre et translucide - vérifier avec la pointe d\'un couteau.',
        'Préchauffer le gril du four. Découvrir le plat et laisser réduire le jus de moitié si besoin (5 minutes à feu moyen). Saupoudrer généreusement de parmesan râpé sur toute la surface.',
        'Passer sous le gril 5 minutes en surveillant attentivement - le fromage doit former une croûte dorée et grillée. Servir immédiatement parsemé des pluches de fenouil réservées. Le parfum anisé est à son apogée quand c\'est chaud !'
      ],
      tips: [
        'Garder les pluches pour la déco',
        'Le parmesan apporte l\'umami',
        'Parfait avec le poisson'
      ],
      pairings: ['Poisson', 'Loup', 'Daurade', 'Saumon']
    },

    poireaux_vinaigrette: {
      id: 'poireaux_vinaigrette',
      name: 'Poireaux vinaigrette',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      description: 'Poireaux tièdes en vinaigrette moutardée, entrée classique.',
      ingredients: [
        { name: 'Poireaux', quantity: '8', unit: 'pièces', note: 'moyens' },
        { name: 'Moutarde de Dijon', quantity: '1', unit: 'c. à soupe' },
        { name: 'Vinaigre de vin', quantity: '2', unit: 'c. à soupe' },
        { name: 'Huile de tournesol', quantity: '6', unit: 'c. à soupe' },
        { name: 'Ciboulette', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Nettoyer soigneusement les poireaux : couper la racine et le vert foncé dur (garder le vert tendre). Fendre chaque poireau en deux dans la longueur jusqu\'à 5cm de la base, puis rincer abondamment sous l\'eau courante en écartant les feuilles - la terre se cache entre les couches !',
        'Ficeler les poireaux en petites bottes de 2-3 pièces avec de la ficelle de cuisine. Cette technique traditionnelle permet de les manipuler sans les abîmer et assure une cuisson uniforme. Alternative : les laisser entiers fendus.',
        'Porter une grande quantité d\'eau salée à ébullition (15g de sel/litre). Y plonger les poireaux et cuire 15-20 minutes à petits bouillons. Ils sont cuits quand un couteau pénètre sans résistance dans la partie la plus épaisse. NE PAS trop cuire - ils doivent rester légèrement fermes.',
        'Égoutter délicatement les poireaux. Les laisser tiédir 5 minutes puis les PRESSER doucement entre vos mains (ou entre deux assiettes) pour exprimer l\'excès d\'eau. Cette étape est CRUCIALE - sinon l\'eau va diluer la vinaigrette.',
        'Préparer la vinaigrette dans un bol : mettre la moutarde de Dijon, le vinaigre de vin, une pincée de sel. Bien mélanger au fouet. La moutarde sert d\'émulsifiant et va stabiliser la sauce.',
        'Ajouter l\'huile en filet tout en fouettant vigoureusement. La vinaigrette doit devenir crémeuse et homogène. Poivrer généreusement. Goûter et ajuster l\'assaisonnement - elle doit être bien relevée.',
        'Disposer les poireaux tièdes (pas froids !) dans un plat de service. Les napper généreusement de vinaigrette en veillant à ce qu\'elle pénètre bien entre les couches. Parsemer de ciboulette ciselée. Servir tiède - c\'est à cette température que les arômes sont les meilleurs.'
      ],
      tips: [
        'Bien égoutter pour éviter de diluer la vinaigrette',
        'Servir tiède pour libérer les arômes',
        'Classique bistrot'
      ],
      pairings: ['Terrine', 'Jambon persillé', 'Pot-au-feu']
    },

    // ===== ACCOMPAGNEMENTS SUPPLÉMENTAIRES =====

    asperges: {
      id: 'asperges',
      name: 'Asperges',
      type: 'accompagnement',
      category: 'legume',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      description: 'Asperges vertes ou blanches, cuisson parfaite.',
      ingredients: [
        { name: 'Asperges', quantity: '500', unit: 'g', note: 'vertes ou blanches' },
        { name: 'Beurre', quantity: '40', unit: 'g', note: 'fondu ou hollandaise' },
        { name: 'Sel', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Préparer les asperges : pour les BLANCHES, éplucher entièrement de la pointe vers la base avec un économe, en retirant toute la peau fibreuse. Pour les VERTES, n\'éplucher que le tiers inférieur qui reste fibreux. Couper la base ligneuse (2-3 cm) - elle ne s\'attendrira jamais.',
        'Attacher les asperges en bottes de 6-8 pièces avec de la ficelle de cuisine. Cette technique permet de les cuire debout (pointes en haut), la partie basse plus dure cuisant plus longtemps dans l\'eau tandis que les pointes fragiles cuisent à la vapeur.',
        'Porter à ébullition une grande quantité d\'eau TRÈS salée (20g/litre - oui, c\'est beaucoup mais c\'est nécessaire). L\'eau doit être à gros bouillons. Y plonger les asperges (ou les mettre debout dans une aspergeière).',
        'Cuire selon le calibre et la couleur : asperges VERTES fines 6-8 minutes, moyennes 8-10 minutes. Asperges BLANCHES 15-20 minutes. La pointe doit fléchir légèrement quand on soulève l\'asperge horizontalement - c\'est le test infaillible !',
        'Vérifier la cuisson avec la pointe d\'un couteau dans la partie épaisse : il doit s\'enfoncer facilement mais l\'asperge doit garder un léger croquant. ATTENTION : elles continuent à cuire hors de l\'eau, donc les sortir légèrement fermes.',
        'Égoutter immédiatement et délicatement (les pointes sont fragiles). Disposer sur un linge propre pour absorber l\'excès d\'eau. Servir TIÈDES avec du beurre fondu noisette, une vinaigrette légère ou la classique sauce hollandaise. L\'asperge n\'attend pas !'
      ],
      tips: [
        'Les asperges blanches se pèlent entièrement',
        'Les attacher en botte pour cuisson uniforme',
        'Excellentes tièdes'
      ],
      pairings: ['Veau', 'Volaille', 'Poisson', 'Oeufs']
    },

    pommes_sautees: {
      id: 'pommes_sautees',
      name: 'Pommes sautées',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Pommes de terre rissolées croustillantes.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'Charlotte ou Ratte' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Huile', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Cuire les pommes de terre ENTIÈRES et avec la peau à l\'eau froide salée. Porter à ébullition puis cuire 15-20 minutes selon la taille. Elles doivent être cuites mais rester FERMES - un couteau doit pénétrer avec une légère résistance. Si trop cuites, elles s\'effriteront à la poêle.',
        'Égoutter et laisser refroidir complètement (idéalement les préparer la veille - elles seront encore meilleures). Peler si désiré puis couper en rondelles de 5mm d\'épaisseur. Des tranches régulières assurent une cuisson uniforme.',
        'Utiliser une GRANDE poêle ou sauteuse (les pommes de terre ne doivent pas se chevaucher). Chauffer le mélange beurre + huile à feu vif - l\'huile empêche le beurre de brûler. Attendre que la matière grasse soit bien chaude et "chante".',
        'Disposer les rondelles en UNE SEULE couche. C\'est le secret des vraies pommes sautées ! Laisser dorer 3-4 minutes SANS TOUCHER. Résistez à l\'envie de remuer - c\'est cette patience qui donne la croûte dorée et croustillante.',
        'Retourner les tranches délicatement à la spatule. Continuer à faire sauter 10-12 minutes en retournant de temps en temps. Toutes les faces doivent être bien dorées et croustillantes. Baisser le feu si ça colore trop vite.',
        'En fin de cuisson, ajouter les gousses d\'ail écrasées (pas hachées, pour qu\'elles parfument sans brûler). Sauter encore 2 minutes. Retirer l\'ail. Saler (JAMAIS avant - le sel fait rendre l\'eau !), poivrer généreusement et parsemer de persil frais haché. Servir immédiatement et brûlant !'
      ],
      tips: [
        'Les pommes de terre peuvent être précuites la veille',
        'Ne pas trop remuer pour obtenir des faces dorées',
        'L\'huile empêche le beurre de brûler'
      ],
      pairings: ['Entrecôte', 'Côtes de veau', 'Oeufs', 'Foie de veau']
    },

    pommes_vapeur: {
      id: 'pommes_vapeur',
      name: 'Pommes vapeur',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      description: 'Pommes de terre cuites à la vapeur, légères et fondantes.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'nouvelles ou Charlotte' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Choisir des pommes de terre de taille similaire pour une cuisson uniforme. Les laver soigneusement à l\'eau froide en brossant légèrement la peau - on garde la peau qui concentre les vitamines et donne du goût. Les pommes de terre nouvelles et Charlotte sont idéales, leur peau fine se mange.',
        'Installer votre cuiseur vapeur ou votre panier vapeur au-dessus d\'une casserole d\'eau bouillante. L\'eau ne doit PAS toucher le panier. Disposer les pommes de terre en une seule couche si possible, sans les serrer.',
        'Couvrir et cuire à la vapeur 15-25 minutes selon la grosseur. NE PAS soulever le couvercle pendant les 10 premières minutes - la vapeur doit rester concentrée. Une pomme de terre moyenne (taille d\'un œuf) cuit en environ 18 minutes.',
        'Vérifier la cuisson en piquant avec la pointe d\'un couteau : il doit pénétrer facilement jusqu\'au cœur sans résistance, mais la pomme de terre ne doit pas se défaire. Elle doit garder sa forme. Mieux vaut légèrement sous-cuire que trop cuire.',
        'Disposer les pommes de terre dans un plat de service chaud. Ajouter immédiatement une belle noix de beurre (qui va fondre à leur contact), parsemer de fleur de sel et de persil frais ciselé. Le beurre doit napper les pommes de terre brillantes et fumantes. Servir sans attendre !'
      ],
      tips: [
        'Les pommes de terre nouvelles se mangent avec la peau',
        'La vapeur préserve vitamines et minéraux',
        'Classique avec le poisson et la choucroute'
      ],
      pairings: ['Choucroute', 'Poisson', 'Raclette', 'Saucisses']
    },

    pommes_au_four: {
      id: 'pommes_au_four',
      name: 'Pommes au four',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 60,
      servings: 4,
      description: 'Pommes de terre entières rôties au four, peau croustillante.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '4', unit: 'grosses', note: 'Bintje ou Russet' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Gros sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Beurre', quantity: '40', unit: 'g', note: 'pour servir' },
        { name: 'Crème fraîche', quantity: '10', unit: 'cl', note: 'optionnel' }
      ],
      steps: [
        'Préchauffer le four à 200°C (chaleur tournante idéale). Choisir de GROSSES pommes de terre à chair farineuse (Bintje, Russet, Agria) - elles développeront un intérieur floconneux et une peau ultra-croustillante.',
        'Brosser vigoureusement les pommes de terre sous l\'eau froide pour retirer toute trace de terre. Les sécher COMPLÈTEMENT avec un torchon propre - l\'humidité empêche la peau de devenir croustillante.',
        'Piquer chaque pomme de terre 8-10 fois avec une fourchette sur toutes les faces. Cette étape est ESSENTIELLE : sans ces trous, la vapeur s\'accumule à l\'intérieur et la pomme de terre peut EXPLOSER dans le four !',
        'Frotter généreusement chaque pomme de terre avec l\'huile d\'olive (environ 1/2 c. à soupe par pièce). Puis les rouler dans du gros sel - il va se fixer grâce à l\'huile. Cette croûte de sel va déshydrater la peau et la rendre incroyablement croustillante.',
        'Placer les pommes de terre DIRECTEMENT sur la grille du four (avec une lèchefrite en dessous pour récupérer l\'huile). La chaleur doit circuler partout. Cuire 50-70 minutes selon la taille - la peau doit être ferme et craquante quand on la tapote.',
        'Sortir du four et fendre immédiatement en croix sur le dessus. Presser légèrement les côtés pour ouvrir et faire gonfler la chair. Ajouter généreusement beurre et crème fraîche dans la cavité fumante. Poivrer au moulin. La garniture classique : ciboulette, bacon émietté, fromage râpé...'
      ],
      tips: [
        'Piquer évite qu\'elles éclatent',
        'Le sel sur la peau la rend croustillante',
        'Excellent avec la viande grillée'
      ],
      pairings: ['Côte de boeuf', 'Steak', 'Bacon', 'Côtes d\'agneau']
    },

    cepes_sautes: {
      id: 'cepes_sautes',
      name: 'Cèpes sautés',
      type: 'accompagnement',
      category: 'champignon',
      icon: '🍄',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      description: 'Cèpes frais sautés à l\'ail et au persil, garniture d\'exception.',
      ingredients: [
        { name: 'Cèpes frais', quantity: '500', unit: 'g' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '3', unit: 'gousses' },
        { name: 'Persil', quantity: '3', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'RÈGLE D\'OR : ne JAMAIS laver les cèpes à l\'eau - ils absorbent l\'humidité comme des éponges et deviendraient spongieux à la cuisson ! Nettoyer soigneusement chaque cèpe avec un pinceau sec ou un chiffon légèrement humide. Gratter les parties terreuses au couteau si nécessaire.',
        'Séparer les chapeaux des pieds. Vérifier l\'absence de vers (petits trous dans la chair). Couper les cèpes en tranches de 5mm d\'épaisseur dans le sens de la longueur pour conserver leur belle forme. Les pieds peuvent être coupés en rondelles.',
        'Utiliser une GRANDE poêle ou sauteuse - les cèpes ne doivent SURTOUT PAS se chevaucher sinon ils vont "suer" au lieu de rissoler. Chauffer le mélange huile d\'olive + beurre à feu VIF. La matière grasse doit être très chaude avant d\'ajouter les champignons.',
        'Disposer les tranches de cèpes en une seule couche. CRUCIAL : NE PAS REMUER pendant les 3-4 premières minutes ! Laisser une belle croûte dorée se former dessous. Si vous entendez crépiter, c\'est bon signe. Si ça fait "pschitt" et rend de l\'eau, le feu n\'était pas assez fort.',
        'Retourner les tranches et faire dorer l\'autre face 2-3 minutes. Les cèpes doivent être dorés et légèrement croustillants sur les bords mais encore tendres à cœur. Saler EN FIN de cuisson seulement (le sel fait rendre l\'eau).',
        'Ajouter l\'ail finement haché dans les dernières 2 minutes de cuisson - il doit juste parfumer sans brûler (l\'ail brûlé est amer). Parsemer généreusement de persil plat frais haché. Poivrer au moulin. Servir IMMÉDIATEMENT dans des assiettes chaudes !'
      ],
      tips: [
        'Ne jamais laver les cèpes (ils absorbent l\'eau)',
        'Feu vif pour éviter qu\'ils rendent leur eau',
        'L\'ail s\'ajoute en fin de cuisson'
      ],
      pairings: ['Entrecôte', 'Tournedos', 'Magret', 'Gibier']
    },

    marrons: {
      id: 'marrons',
      name: 'Marrons',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🌰',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 30,
      servings: 4,
      description: 'Marrons braisés au beurre et aux herbes.',
      ingredients: [
        { name: 'Marrons', quantity: '500', unit: 'g', note: 'cuits sous vide ou frais' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Céleri branche', quantity: '1', unit: 'pièce' },
        { name: 'Sucre', quantity: '1', unit: 'c. à café' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Si vous utilisez des marrons FRAIS : inciser profondément chaque marron avec un couteau sur le côté bombé (entailler la coque ET la peau intérieure). Les cuire 20 minutes dans l\'eau bouillante ou au four à 200°C. Les éplucher CHAUDS - c\'est le seul moyen de retirer facilement la peau. Les marrons sous vide ou en bocal font gagner un temps précieux.',
        'Dans une sauteuse à fond épais, faire chauffer la moitié du beurre à feu moyen. Y faire revenir les marrons 5 minutes en les retournant délicatement - ils sont fragiles ! Ils doivent légèrement dorer sur toutes les faces pour développer des saveurs de noisette.',
        'Ajouter le céleri branche émincé finement - il va parfumer subtilement les marrons. Faire suer 2 minutes puis mouiller avec le fond de volaille chaud. Le liquide doit à peine couvrir les marrons.',
        'Couvrir et laisser braiser à feu très doux pendant 15-20 minutes. Les marrons vont absorber le bouillon et devenir tendres et moelleux. Remuer très délicatement de temps en temps - les marrons se brisent facilement.',
        'Découvrir et augmenter légèrement le feu. Ajouter le sucre et le reste du beurre. Faire "glacer" en secouant la sauteuse pendant 3-4 minutes - le jus va réduire et enrober les marrons d\'une fine couche brillante et légèrement caramélisée.',
        'Les marrons sont prêts quand ils sont brillants et enrobés. Assaisonner de sel (modérément, le fond était déjà salé) et poivre. Servir immédiatement - ils sont parfaits avec dinde, chapon, gibier ou tout simplement avec une volaille rôtie de fête !'
      ],
      tips: [
        'Les marrons sous vide font gagner du temps',
        'Le céleri parfume subtilement',
        'Accompagnement traditionnel de la dinde'
      ],
      pairings: ['Dinde', 'Chapon', 'Gibier', 'Sanglier']
    },

    compote_pommes: {
      id: 'compote_pommes',
      name: 'Compote de pommes',
      type: 'accompagnement',
      category: 'condiment',
      icon: '🍎',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      servings: 6,
      description: 'Compote maison légèrement sucrée, pour accompagner viandes et gibier.',
      ingredients: [
        { name: 'Pommes', quantity: '1', unit: 'kg', note: 'Boskoop ou Reinette' },
        { name: 'Sucre', quantity: '80', unit: 'g' },
        { name: 'Eau', quantity: '5', unit: 'cl' },
        { name: 'Cannelle', quantity: '1', unit: 'bâton', note: 'optionnel' },
        { name: 'Citron', quantity: '1/2', unit: 'pièce', note: 'jus' }
      ],
      steps: [
        'Choisir des pommes qui se défont bien à la cuisson : Boskoop, Reinette, Jonagold, ou Belle de Boskoop sont idéales. Les éplucher, retirer le cœur et les pépins, puis couper la chair en morceaux de taille égale (3-4 cm) pour une cuisson homogène.',
        'Mettre les morceaux de pommes dans une casserole à fond épais avec l\'eau. L\'eau crée de la vapeur qui permet de démarrer la cuisson sans brûler. Ajouter le bâton de cannelle entier (il parfumera délicatement sans laisser de résidu).',
        'Porter à ébullition puis réduire à feu doux. Couvrir et laisser compoter 15-20 minutes en remuant régulièrement avec une cuillère en bois pour éviter que ça n\'attache. Les pommes doivent devenir très tendres et se défaire presque d\'elles-mêmes.',
        'Ajouter le sucre en cours de cuisson (et non au début - on peut mieux doser selon l\'acidité des pommes). Goûter et ajuster : certaines pommes sont très acidulées, d\'autres très sucrées. Pour une compote d\'accompagnement salé, sucrer modérément.',
        'Retirer le bâton de cannelle. Pour une compote rustique : écraser grossièrement à la fourchette en laissant des morceaux. Pour une compote lisse : passer au moulin à légumes ou mixer brièvement. Ne pas trop mixer (ça devient élastique).',
        'Ajouter le jus de citron en fin de préparation - il relève le goût et empêche l\'oxydation (brunissement). Servir tiède ou froide. Se conserve 1 semaine au réfrigérateur dans un bocal hermétique.'
      ],
      tips: [
        'Choisir des pommes qui se défont',
        'Ajuster le sucre selon les pommes',
        'Se conserve 1 semaine au frigo'
      ],
      pairings: ['Boudin noir', 'Porc rôti', 'Canard', 'Gibier']
    },

    tian_legumes: {
      id: 'tian_legumes',
      name: 'Tian de légumes',
      type: 'accompagnement',
      category: 'legume',
      icon: '🍆',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 60,
      servings: 6,
      description: 'Gratin provençal de légumes d\'été en tranches alternées.',
      ingredients: [
        { name: 'Courgettes', quantity: '3', unit: 'pièces' },
        { name: 'Tomates', quantity: '4', unit: 'pièces' },
        { name: 'Aubergines', quantity: '2', unit: 'pièces' },
        { name: 'Oignon', quantity: '1', unit: 'gros' },
        { name: 'Ail', quantity: '4', unit: 'gousses' },
        { name: 'Huile d\'olive', quantity: '8', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '1', unit: 'c. à soupe' },
        { name: 'Parmesan', quantity: '50', unit: 'g', note: 'optionnel' }
      ],
      steps: [
        'Préchauffer le four à 180°C (chaleur traditionnelle). Choisir un beau plat en terre cuite ou un plat à gratin - le tian tire son nom de ce récipient provençal. La taille doit permettre de serrer les légumes verticalement.',
        'Émincer finement l\'oignon et le faire fondre doucement dans 3 cuillères d\'huile d\'olive pendant 10-15 minutes. Il doit être translucide et très doux, sans coloration. L\'étaler uniformément au fond du plat - c\'est le "lit" aromatique.',
        'Couper TOUS les légumes en rondelles fines et régulières de 3-4mm d\'épaisseur. Utiliser une mandoline si possible pour un résultat parfait. Des tranches de même épaisseur assurent une cuisson uniforme et un visuel impeccable.',
        'Disposer les rondelles de légumes en rangées alternées, DEBOUT, légèrement inclinées comme des dominos. Alterner les couleurs : aubergine violette, courgette verte, tomate rouge. Serrer bien les tranches - les légumes réduisent énormément à la cuisson.',
        'Émincer finement l\'ail et le répartir entre les légumes. Parsemer généreusement de thym frais ou séché. Arroser du reste d\'huile d\'olive en filet. Saler et poivrer.',
        'Couvrir hermétiquement de papier aluminium. Enfourner pour 1 heure - les légumes vont confire doucement dans leur jus. Retirer l\'aluminium et poursuivre 15-20 minutes pour que le dessus dore et caramélise légèrement.',
        'Le tian est prêt quand les légumes sont complètement fondants et légèrement gratinés sur le dessus. Saupoudrer de parmesan si désiré pour les 5 dernières minutes. Excellent chaud, tiède ou même froid le lendemain - les saveurs se développent.'
      ],
      tips: [
        'Tranches régulières pour un bel effet',
        'Serrer les légumes, ils réduisent beaucoup',
        'Excellent froid le lendemain'
      ],
      pairings: ['Agneau', 'Poulet rôti', 'Grillades']
    },

    coleslaw: {
      id: 'coleslaw',
      name: 'Coleslaw',
      type: 'accompagnement',
      category: 'salade',
      icon: '🥗',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 0,
      servings: 6,
      description: 'Salade de chou croquante à l\'américaine.',
      ingredients: [
        { name: 'Chou blanc', quantity: '1/2', unit: 'pièce' },
        { name: 'Carottes', quantity: '2', unit: 'pièces' },
        { name: 'Mayonnaise', quantity: '150', unit: 'g' },
        { name: 'Vinaigre de cidre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sucre', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Retirer les feuilles extérieures abîmées du chou. Couper le quart ou demi-chou en fines lanières de 2-3mm. Utiliser une mandoline pour un résultat parfait et régulier - c\'est le SECRET d\'un bon coleslaw, le chou doit être aussi fin que possible.',
        'Râper les carottes avec les gros trous de la râpe pour garder de la texture. Vous pouvez aussi les couper en fins bâtonnets (julienne) pour un effet plus élégant. Le contraste de couleur orange/blanc est important visuellement.',
        'Préparer la sauce : dans un grand saladier, mélanger la mayonnaise avec le vinaigre de cidre (son fruité est essentiel au goût authentique), le sucre et une bonne pincée de sel. Le sucre équilibre l\'acidité et adoucit le chou.',
        'Ajouter le chou et les carottes à la sauce. Mélanger intimement avec vos mains ou deux grandes cuillères. Chaque filament de chou doit être enrobé de sauce. Goûter et ajuster l\'assaisonnement - ça doit être légèrement sucré-acidulé.',
        'Couvrir de film alimentaire et réfrigérer au MINIMUM 1 heure, idéalement 2-4 heures. Ce repos est CRUCIAL : le chou va s\'attendrir légèrement et s\'imprégner de la sauce tout en gardant son croquant.',
        'Au moment de servir, mélanger à nouveau car le chou rend un peu d\'eau. Goûter et rectifier l\'assaisonnement (souvent il faut rajouter un peu de vinaigre et de sel). Servir bien frais. Parfait avec tout type de barbecue, burgers, ou poulet frit !'
      ],
      tips: [
        'Plus le chou est fin, meilleur c\'est',
        'Se prépare quelques heures à l\'avance',
        'Incontournable avec le barbecue'
      ],
      pairings: ['Pulled pork', 'Ribs', 'Burgers', 'Poulet frit']
    },

    mais_grille: {
      id: 'mais_grille',
      name: 'Maïs grillé',
      type: 'accompagnement',
      category: 'legume',
      icon: '🌽',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 15,
      servings: 4,
      description: 'Épis de maïs grillés au beurre, saveur estivale.',
      ingredients: [
        { name: 'Épis de maïs', quantity: '4', unit: 'pièces', note: 'frais' },
        { name: 'Beurre', quantity: '60', unit: 'g', note: 'mou' },
        { name: 'Paprika fumé', quantity: '1', unit: 'c. à café' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Éplucher les épis de maïs en retirant toutes les feuilles et les "barbes" (filaments). ASTUCE : si cuisson au barbecue, on peut garder quelques feuilles et les replier après cuisson pour une présentation rustique.',
        'Porter une grande casserole d\'eau à ébullition (NON salée - le sel durcit les grains). Y plonger les épis et cuire 8-10 minutes. Ils doivent être tendres mais pas pâteux - un grain pressé doit être juteux et légèrement croquant.',
        'Pendant ce temps, préparer le beurre épicé : ramollir le beurre à température ambiante puis le mélanger énergiquement avec le paprika fumé (pimentón). Vous pouvez ajouter un peu de jus de citron vert, du piment d\'Espelette ou de la coriandre selon les goûts.',
        'Préchauffer le barbecue ou une poêle grill à feu vif. Égoutter les épis et les SÉCHER (sinon ils ne grilleront pas, ils vapeuriseront). Les badigeonner légèrement d\'huile.',
        'Griller les épis 8-10 minutes en les tournant régulièrement d\'un quart de tour toutes les 2 minutes. Les grains doivent prendre de belles marques de grillage dorées, voire légèrement carbonisées par endroits - c\'est ce qui donne la saveur fumée !',
        'Retirer du gril et badigeonner IMMÉDIATEMENT et généreusement de beurre épicé sur les épis brûlants - il va fondre et pénétrer entre les grains. Parsemer de fleur de sel ou de gros sel. Servir sans attendre, c\'est un délice du barbecue estival !'
      ],
      tips: [
        'Peut se cuire directement avec les feuilles au barbecue',
        'Le maïs surgelé fonctionne aussi',
        'Accompagnement typique du barbecue'
      ],
      pairings: ['Ribs', 'Poulet grillé', 'Burgers', 'Steaks']
    },

    poires_pochees: {
      id: 'poires_pochees',
      name: 'Poires pochées',
      type: 'accompagnement',
      category: 'fruit',
      icon: '🍐',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      description: 'Poires pochées au vin pour accompagner le gibier.',
      ingredients: [
        { name: 'Poires', quantity: '4', unit: 'pièces', note: 'fermes' },
        { name: 'Vin rouge', quantity: '50', unit: 'cl' },
        { name: 'Sucre', quantity: '150', unit: 'g' },
        { name: 'Cannelle', quantity: '1', unit: 'bâton' },
        { name: 'Clous de girofle', quantity: '3', unit: 'pièces' },
        { name: 'Zeste d\'orange', quantity: '1', unit: 'pièce' }
      ],
      steps: [
        'Choisir des poires FERMES (Conference, Williams, Comice) - des poires mûres se désintégreraient. Les éplucher délicatement en gardant la queue intacte (c\'est la présentation classique). Évider la base avec une cuillère parisienne ou un petit couteau pour retirer pépins et cœur.',
        'Dans une casserole assez large pour que les poires tiennent couchées, verser le vin rouge (un Côtes-du-Rhône ou Bourgogne basique convient parfaitement). Ajouter le sucre, le bâton de cannelle, les clous de girofle et le zeste d\'orange (sans la partie blanche amère).',
        'Porter doucement à ébullition en remuant pour dissoudre le sucre. Laisser frémir 5 minutes pour que les épices infusent et que l\'alcool s\'évapore partiellement.',
        'Déposer délicatement les poires dans le sirop chaud - elles doivent être immergées (rajouter un peu d\'eau si nécessaire). Poser un rond de papier sulfurisé directement sur les poires (c\'est un "couvercle cartouche") - il maintient les poires immergées et évite l\'évaporation.',
        'Laisser pocher à tout petit frémissement (PAS d\'ébullition !) pendant 25-35 minutes selon la fermeté des poires. Elles sont cuites quand un couteau pénètre sans résistance jusqu\'au cœur. Retirer du feu.',
        'CRUCIAL : laisser les poires refroidir DANS leur sirop pendant plusieurs heures, idéalement une nuit au réfrigérateur. Elles vont s\'imprégner de la couleur rubis et des parfums épicés. Au moment de servir, sortir les poires et réduire le sirop de moitié pour obtenir une sauce sirupeuse. Napper les poires de cette réduction brillante.'
      ],
      tips: [
        'Choisir des poires pas trop mûres',
        'Se préparent la veille',
        'Le sirop peut être réduit en sauce'
      ],
      pairings: ['Gibier', 'Canard', 'Foie gras', 'Fromages']
    },

    oignons_grelots: {
      id: 'oignons_grelots',
      name: 'Petits oignons glacés',
      type: 'accompagnement',
      category: 'legume',
      icon: '🧅',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      servings: 4,
      description: 'Petits oignons caramélisés, garniture classique.',
      ingredients: [
        { name: 'Petits oignons grelots', quantity: '400', unit: 'g' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Sucre', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fond de volaille', quantity: '15', unit: 'cl' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'ASTUCE pour éplucher facilement : inciser légèrement la base de chaque oignon puis les blanchir 1 minute dans l\'eau bouillante. Les plonger aussitôt dans l\'eau glacée - la peau glisse alors toute seule ! Couper le plumet mais garder assez de base pour que l\'oignon reste entier.',
        'Disposer les oignons en UNE SEULE couche dans une sauteuse à fond épais. Ils ne doivent pas se chevaucher. Ajouter le beurre coupé en petits morceaux, le sucre et le fond de volaille. Le liquide doit arriver à mi-hauteur des oignons.',
        'Porter à frémissement à feu moyen, SANS couvrir. L\'idée est de cuire les oignons tout en faisant évaporer le liquide progressivement. Cette technique de "glaçage à blanc" donne des oignons brillants et caramélisés.',
        'Cuire 20-25 minutes en secouant régulièrement la sauteuse pour que les oignons roulent et s\'enrobent uniformément. Le liquide va réduire progressivement et devenir sirupeux.',
        'Les oignons sont prêts quand le liquide est complètement évaporé et que les oignons sont tendres (les piquer au couteau), brillants et légèrement dorés/caramélisés. Si le liquide s\'évapore avant que les oignons soient cuits, rajouter un peu d\'eau chaude.',
        'Goûter et saler selon besoin (le fond était déjà salé). Ces oignons glacés sont la garniture INDISPENSABLE du bœuf bourguignon et du coq au vin classiques. Ils se réchauffent très bien.'
      ],
      tips: [
        'Les blanchir 1 min facilite l\'épluchage',
        'Garniture du boeuf bourguignon',
        'Se préparent à l\'avance'
      ],
      pairings: ['Boeuf bourguignon', 'Coq au vin', 'Rôti']
    },

    legumes_confits: {
      id: 'legumes_confits',
      name: 'Légumes confits',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 45,
      servings: 4,
      description: 'Assortiment de légumes rôtis lentement au four.',
      ingredients: [
        { name: 'Carottes', quantity: '3', unit: 'pièces' },
        { name: 'Panais', quantity: '2', unit: 'pièces' },
        { name: 'Navets', quantity: '2', unit: 'pièces' },
        { name: 'Oignon rouge', quantity: '1', unit: 'pièce' },
        { name: 'Huile d\'olive', quantity: '5', unit: 'c. à soupe' },
        { name: 'Thym', quantity: '4', unit: 'branches' },
        { name: 'Miel', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Préchauffer le four à 180°C (chaleur tournante idéale pour un rôtissage uniforme). Préparer une grande plaque à pâtisserie - les légumes ne doivent PAS se chevaucher sinon ils vapeuriseront au lieu de rôtir.',
        'Éplucher tous les légumes racines. Les couper en morceaux de taille SIMILAIRE (environ 3-4 cm) - c\'est essentiel pour une cuisson uniforme. Des morceaux trop petits brûleront, trop gros resteront crus au centre. L\'oignon rouge en quartiers.',
        'Dans un grand saladier, mélanger les légumes avec l\'huile d\'olive (être généreux - c\'est l\'huile qui permet la caramélisation), le miel (qui va créer un glaçage caramélisé), sel et poivre. Effeuiller le thym directement sur les légumes.',
        'Étaler les légumes en UNE SEULE couche sur la plaque (utiliser 2 plaques si nécessaire). Chaque légume doit toucher la plaque chaude - c\'est ce contact qui crée les bords caramélisés et croustillants.',
        'Enfourner et rôtir 40-45 minutes au total. À mi-cuisson (20-25 min), retourner délicatement les légumes avec une spatule pour qu\'ils dorent uniformément. Si certains légumes cuisent plus vite (navets), les retirer en premier.',
        'Les légumes sont prêts quand ils sont bien dorés sur les bords, légèrement caramélisés et complètement tendres à cœur (piquer avec un couteau). Servir chauds directement du four - c\'est un accompagnement rustique parfait pour tout rôti !'
      ],
      tips: [
        'Tous les légumes racines conviennent',
        'Le miel aide à la caramélisation',
        'Parfait avec un rôti'
      ],
      pairings: ['Rôti de boeuf', 'Gigot', 'Poulet rôti']
    },

    legumes_printaniers: {
      id: 'legumes_printaniers',
      name: 'Légumes printaniers',
      type: 'accompagnement',
      category: 'legume',
      icon: '🌱',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 20,
      servings: 4,
      description: 'Assortiment de jeunes légumes de printemps.',
      ingredients: [
        { name: 'Petits pois', quantity: '200', unit: 'g' },
        { name: 'Fèves', quantity: '200', unit: 'g' },
        { name: 'Carottes nouvelles', quantity: '8', unit: 'pièces' },
        { name: 'Navets nouveaux', quantity: '4', unit: 'pièces' },
        { name: 'Oignons nouveaux', quantity: '4', unit: 'pièces' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Cerfeuil', quantity: '2', unit: 'c. à soupe' }
      ],
      steps: [
        'Préparer un grand bol d\'eau glacée - c\'est INDISPENSABLE pour "rafraîchir" les légumes après cuisson et fixer leur belle couleur verte. Chaque légume sera cuit séparément car ils ont des temps de cuisson différents.',
        'ÉCOSSER les petits pois et les fèves. Pour les fèves : APRÈS cuisson à l\'eau (2-3 min), les peler individuellement - retirer la petite peau qui entoure chaque fève pour révéler le beau vert tendre. C\'est long mais ça change tout !',
        'Préparer les autres légumes : gratter les carottes nouvelles (ne pas éplucher, leur peau est tendre), couper navets nouveaux en quartiers, nettoyer les oignons nouveaux en gardant un peu de vert.',
        'Porter une grande casserole d\'eau bien salée (15g/L) à ébullition. Cuire chaque légume séparément en les plongeant successivement et en les rafraîchissant aussitôt à l\'eau glacée : carottes 8-10 min, navets 6-8 min, oignons 5 min, petits pois 3 min, fèves 2-3 min.',
        'Bien égoutter tous les légumes sur un torchon propre. À ce stade ils peuvent attendre quelques heures au réfrigérateur. Au moment de servir, faire chauffer le beurre dans une grande sauteuse à feu doux.',
        'Y réchauffer délicatement tous les légumes ensemble en les faisant "sauter" pendant 3-4 minutes. Ils doivent être juste chauds et enrobés de beurre brillant. Saler légèrement, poivrer. Parsemer généreusement de cerfeuil frais ciselé au dernier moment. Servir immédiatement - c\'est la garniture printanière par excellence !'
      ],
      tips: [
        'Respecter les temps de cuisson de chaque légume',
        'Les fèves se pèlent après cuisson',
        'La fraîcheur est essentielle'
      ],
      pairings: ['Agneau de lait', 'Veau', 'Volaille', 'Lapin']
    },

    salade_verte: {
      id: 'salade_verte',
      name: 'Salade verte',
      type: 'accompagnement',
      category: 'salade',
      icon: '🥗',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      description: 'Salade verte en vinaigrette, fraîche et croquante.',
      ingredients: [
        { name: 'Laitue ou mesclun', quantity: '200', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Vinaigre de vin', quantity: '1', unit: 'c. à soupe' },
        { name: 'Moutarde', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Détacher les feuilles de la salade et les trier - retirer celles qui sont abîmées ou flétries. Les laver dans plusieurs eaux en les brassant délicatement (la terre se dépose au fond). Pour du mesclun pré-lavé, un simple rinçage suffit.',
        'ESSORER parfaitement la salade - c\'est CRUCIAL ! L\'eau qui reste empêche la vinaigrette d\'adhérer aux feuilles. Utiliser une essoreuse à salade et faire plusieurs tours. Les feuilles doivent être sèches au toucher.',
        'Préparer la vinaigrette dans un petit bol : commencer par la moutarde et le sel (le sel se dissout mal dans l\'huile). Ajouter le vinaigre de vin et mélanger au fouet pour dissoudre le sel.',
        'Incorporer l\'huile d\'olive en filet tout en fouettant énergiquement. La sauce doit s\'émulsionner et devenir légèrement crémeuse et homogène. Le ratio classique est 3 volumes d\'huile pour 1 volume de vinaigre. Poivrer au moulin. Goûter et ajuster.',
        'Mettre la salade dans un grand saladier (assez grand pour mélanger sans écraser). ASSAISONNER AU TOUT DERNIER MOMENT, juste avant de servir - une salade assaisonnée à l\'avance devient molle et triste. Verser la vinaigrette et mélanger délicatement avec vos mains ou deux grandes cuillères jusqu\'à ce que chaque feuille soit enrobée. Servir immédiatement !'
      ],
      tips: [
        'Assaisonner juste avant de servir',
        'Bien essorer pour que la vinaigrette accroche',
        'Ratio classique : 3 huile / 1 vinaigre'
      ],
      pairings: ['Grillades', 'Quiche', 'Fromages']
    },

    chou_chinois: {
      id: 'chou_chinois',
      name: 'Chou chinois sauté',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      servings: 4,
      description: 'Chou chinois sauté au wok, croquant et savoureux.',
      ingredients: [
        { name: 'Chou chinois (pak choï)', quantity: '500', unit: 'g' },
        { name: 'Huile de sésame', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sauce soja', quantity: '2', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Gingembre', quantity: '1', unit: 'c. à café', note: 'râpé' },
        { name: 'Graines de sésame', quantity: '1', unit: 'c. à soupe' }
      ],
      steps: [
        'Séparer les feuilles de pak choï du trognon. Les laver soigneusement (la terre se loge entre les côtes). Bien sécher - l\'humidité fait baisser la température du wok et empêche le "saisissement" des légumes.',
        'SÉPARER les côtes blanches des feuilles vertes - ils n\'ont pas le même temps de cuisson ! Couper les côtes en tronçons de 2-3 cm, et les feuilles en larges lanières. Les côtes sont fermes et cuisent plus longtemps, les feuilles cuisent en quelques secondes.',
        'Chauffer le wok à feu TRÈS VIF jusqu\'à ce qu\'il "fume" légèrement. Ajouter l\'huile de sésame et la faire tourner pour enduire les parois. Le wok doit être vraiment très chaud - c\'est le secret de la cuisine au wok.',
        'Jeter l\'ail émincé et le gingembre râpé dans l\'huile fumante - ils vont grésiller instantanément et parfumer l\'huile. Faire sauter 20-30 secondes MAXIMUM en remuant constamment - l\'ail brûlé devient amer.',
        'Ajouter les CÔTES blanches en premier et faire sauter 2-3 minutes en remuant constamment (mouvement du wok). Les côtes doivent commencer à attendrir tout en gardant du croquant. Puis ajouter les feuilles vertes - elles cuisent en 30-60 secondes et doivent juste flétrir.',
        'Assaisonner de sauce soja en filet sur les parois brûlantes du wok (ça caramélise et intensifie le goût). Mélanger rapidement. Parsemer de graines de sésame. Servir IMMÉDIATEMENT dans des assiettes chaudes - le pak choï sauté ne doit JAMAIS attendre, il doit être croquant et fumant !'
      ],
      tips: [
        'Les côtes cuisent plus longtemps que les feuilles',
        'Le wok doit être très chaud',
        'Garder le croquant'
      ],
      pairings: ['Canard', 'Porc', 'Poulet', 'Tofu']
    },

    champignons_poeles: {
      id: 'champignons_poeles',
      name: 'Champignons poêlés',
      type: 'accompagnement',
      category: 'legume',
      icon: '🍄',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      servings: 4,
      description: 'Champignons de Paris dorés au beurre et persillade, un classique indémodable.',
      ingredients: [
        { name: 'Champignons de Paris', quantity: '500', unit: 'g', note: 'fermes et blancs' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'émincées' },
        { name: 'Persil frais', quantity: '3', unit: 'c. à soupe', note: 'ciselé' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'émincée' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Nettoyer les champignons avec un pinceau ou un linge humide - ne jamais les laver à l\'eau, ils deviennent spongieux. Couper le bout terreux du pied et émincer en tranches de 5 mm.',
        'Chauffer une grande poêle à feu VIF avec le beurre. Attendre qu\'il mousse puis que la mousse retombe (beurre noisette). La poêle doit être très chaude.',
        'Étaler les champignons en UNE SEULE couche - c\'est crucial. S\'ils sont entassés, ils rendent leur eau et bouillent au lieu de dorer. Cuisez en plusieurs fois si nécessaire.',
        'Laisser dorer 3-4 minutes SANS REMUER pour obtenir une belle coloration. Puis retourner et cuire encore 2-3 minutes de l\'autre côté.',
        'Quand les champignons sont bien dorés, ajouter l\'échalote et l\'ail. Faire revenir 1 minute en remuant - l\'ail ne doit pas brûler.',
        'Parsemer de persil frais ciselé, saler, poivrer généreusement. Servir immédiatement - les champignons ne doivent pas attendre.'
      ],
      tips: [
        'Ne jamais laver les champignons à grande eau',
        'Une seule couche pour bien les dorer',
        'Le feu vif est essentiel'
      ],
      pairings: ['Entrecôte', 'Filet de boeuf', 'Poulet rôti', 'Escalope de veau']
    },

    pommes_terre_roties: {
      id: 'pommes_terre_roties',
      name: 'Pommes de terre rôties',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🥔',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 45,
      servings: 4,
      description: 'Pommes de terre croustillantes à l\'extérieur, fondantes à l\'intérieur.',
      ingredients: [
        { name: 'Pommes de terre', quantity: '800', unit: 'g', note: 'Charlotte ou grenaille' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'en chemise' },
        { name: 'Romarin', quantity: '2', unit: 'branches' },
        { name: 'Thym', quantity: '3', unit: 'branches' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 200°C. Laver les pommes de terre et les couper en deux ou en quartiers selon leur taille. Les sécher soigneusement.',
        'Dans un grand plat à four, mélanger les pommes de terre avec l\'huile d\'olive. Saler généreusement.',
        'Ajouter les gousses d\'ail non épluchées et les herbes. Mélanger pour bien enrober.',
        'Disposer en une seule couche, face coupée vers le bas. Enfourner pour 30 minutes.',
        'Retourner les pommes de terre et poursuivre la cuisson 15 minutes jusqu\'à ce qu\'elles soient bien dorées et croustillantes.',
        'Parsemer de fleur de sel et servir immédiatement avec les gousses d\'ail confites.'
      ],
      tips: [
        'Les sécher avant cuisson pour le croustillant',
        'Une seule couche pour une cuisson uniforme',
        'L\'ail en chemise devient confiture'
      ],
      pairings: ['Poulet rôti', 'Gigot d\'agneau', 'Côte de boeuf', 'Rôti de porc']
    },

    pates_fraiches: {
      id: 'pates_fraiches',
      name: 'Pâtes fraîches',
      type: 'accompagnement',
      category: 'feculent',
      icon: '🍝',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 3,
      servings: 4,
      description: 'Pâtes maison à l\'italienne, incomparables avec les sauces mijotées.',
      ingredients: [
        { name: 'Farine de blé T45', quantity: '300', unit: 'g' },
        { name: 'Oeufs entiers', quantity: '3', unit: 'pièces' },
        { name: 'Jaunes d\'oeufs', quantity: '2', unit: 'pièces' },
        { name: 'Huile d\'olive', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel fin', quantity: '1', unit: 'c. à café' }
      ],
      steps: [
        'Former un puits avec la farine sur le plan de travail. Y casser les oeufs entiers et ajouter les jaunes, l\'huile et le sel.',
        'Mélanger progressivement du centre vers l\'extérieur avec une fourchette, en incorporant petit à petit la farine.',
        'Pétrir énergiquement 10 minutes jusqu\'à obtenir une pâte lisse et élastique. Elle ne doit plus coller.',
        'Former une boule, filmer au contact et laisser reposer 30 minutes minimum à température ambiante.',
        'Diviser en 4 portions. Abaisser chaque portion au rouleau ou à la machine à pâtes jusqu\'à 1-2 mm d\'épaisseur.',
        'Découper selon la forme désirée : tagliatelles, pappardelles, lasagnes... Fariner légèrement pour éviter qu\'elles collent.',
        'Cuire 2-3 minutes dans une grande quantité d\'eau bouillante salée. Les pâtes fraîches cuisent très vite !'
      ],
      tips: [
        'La pâte doit reposer pour être souple',
        'Fariner généreusement pour éviter qu\'elles collent',
        'Cuisson très courte : 2-3 minutes max'
      ],
      pairings: ['Osso buco', 'Blanquette', 'Carbonade', 'Ragù']
    },

    legumes_sautes: {
      id: 'legumes_sautes',
      name: 'Légumes sautés',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥬',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      description: 'Poêlée de légumes croquants, colorés et savoureux.',
      ingredients: [
        { name: 'Courgettes', quantity: '2', unit: 'pièces' },
        { name: 'Poivrons', quantity: '2', unit: 'pièces', note: 'rouge et jaune' },
        { name: 'Oignon rouge', quantity: '1', unit: 'pièce' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '2', unit: 'gousses' },
        { name: 'Herbes de Provence', quantity: '1', unit: 'c. à café' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Laver et couper tous les légumes en morceaux de taille similaire (cubes de 2 cm environ) pour une cuisson uniforme.',
        'Chauffer une grande poêle ou un wok à feu vif avec l\'huile d\'olive.',
        'Commencer par les légumes les plus fermes : les poivrons. Faire sauter 3 minutes.',
        'Ajouter les courgettes et l\'oignon. Poursuivre la cuisson 4-5 minutes en remuant régulièrement.',
        'En fin de cuisson, ajouter l\'ail émincé et les herbes. Cuire 1 minute de plus.',
        'Saler, poivrer et servir immédiatement. Les légumes doivent rester légèrement croquants.'
      ],
      tips: [
        'Couper les légumes en taille uniforme',
        'Feu vif pour garder le croquant',
        'Ne pas trop remuer pour laisser colorer'
      ],
      pairings: ['Poulet grillé', 'Côtelettes d\'agneau', 'Saucisses', 'Poisson']
    },

    legumes_verts: {
      id: 'legumes_verts',
      name: 'Légumes verts',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥦',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      servings: 4,
      description: 'Assortiment de légumes verts croquants et vitaminés.',
      ingredients: [
        { name: 'Haricots verts', quantity: '200', unit: 'g' },
        { name: 'Brocoli', quantity: '200', unit: 'g', note: 'en fleurettes' },
        { name: 'Petits pois', quantity: '150', unit: 'g', note: 'frais ou surgelés' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Menthe fraîche', quantity: '6', unit: 'feuilles', note: 'ciselées' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Porter une grande casserole d\'eau salée à ébullition. Préparer un grand bol d\'eau glacée.',
        'Cuire les haricots verts 5-6 minutes, le brocoli 3-4 minutes, les petits pois 2-3 minutes. Les plonger dans l\'eau glacée pour stopper la cuisson et fixer la couleur.',
        'Égoutter soigneusement tous les légumes.',
        'Dans une grande poêle, faire fondre le beurre à feu moyen. Y réchauffer les légumes 2 minutes.',
        'Parsemer de menthe fraîche ciselée, saler et poivrer.',
        'Servir immédiatement - les légumes doivent être verts vifs et croquants.'
      ],
      tips: [
        'L\'eau glacée fixe la couleur verte',
        'Respecter les temps de cuisson différents',
        'La menthe apporte de la fraîcheur'
      ],
      pairings: ['Agneau', 'Veau', 'Poisson', 'Volaille']
    },

    legumes_racines: {
      id: 'legumes_racines',
      name: 'Légumes racines rôtis',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥕',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 40,
      servings: 4,
      description: 'Carottes, panais et navets caramélisés au four.',
      ingredients: [
        { name: 'Carottes', quantity: '300', unit: 'g' },
        { name: 'Panais', quantity: '300', unit: 'g' },
        { name: 'Navets', quantity: '200', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 200°C. Éplucher tous les légumes et les couper en bâtonnets ou en gros morceaux de taille uniforme.',
        'Mélanger les légumes avec l\'huile d\'olive, le miel, le sel et le poivre dans un grand plat à four.',
        'Ajouter les branches de thym et bien mélanger pour enrober tous les légumes.',
        'Étaler en une seule couche pour permettre une caramélisation uniforme.',
        'Enfourner pour 40 minutes en retournant à mi-cuisson. Les légumes doivent être tendres et dorés.',
        'Servir chaud avec les sucs caramélisés du plat.'
      ],
      tips: [
        'Le miel aide à la caramélisation',
        'Taille uniforme pour cuisson homogène',
        'Ne pas couvrir pour garder le croustillant'
      ],
      pairings: ['Rôti de porc', 'Canard', 'Boeuf braisé', 'Gigot']
    },

    legumes_saison: {
      id: 'legumes_saison',
      name: 'Légumes de saison',
      type: 'accompagnement',
      category: 'legume',
      icon: '🌿',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      description: 'Légumes frais du marché simplement préparés.',
      ingredients: [
        { name: 'Légumes variés de saison', quantity: '800', unit: 'g', note: 'selon disponibilité' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Herbes fraîches', quantity: '2', unit: 'c. à soupe', note: 'persil, ciboulette...' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Sélectionner des légumes de saison : au printemps (asperges, petits pois), en été (courgettes, tomates), en automne (courges, champignons), en hiver (poireaux, choux).',
        'Laver et préparer les légumes : éplucher si nécessaire, couper en morceaux adaptés à leur nature.',
        'Cuire selon le légume : blanchir les légumes verts, sauter les légumes fermes, griller les légumes d\'été.',
        'Faire chauffer le beurre et l\'huile dans une grande poêle. Y faire revenir ou réchauffer les légumes.',
        'Assaisonner de sel, poivre et herbes fraîches.',
        'Servir immédiatement pour préserver les saveurs et les couleurs.'
      ],
      tips: [
        'Privilégier les circuits courts et le local',
        'Adapter la cuisson à chaque légume',
        'La simplicité met en valeur la qualité'
      ],
      pairings: ['Toutes viandes', 'Poissons', 'Volailles']
    },

    pain_brioche: {
      id: 'pain_brioche',
      name: 'Pain brioché',
      type: 'accompagnement',
      category: 'pain',
      icon: '🍞',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 25,
      servings: 8,
      description: 'Pain moelleux légèrement sucré, parfait pour les burgers gastronomiques.',
      ingredients: [
        { name: 'Farine T45', quantity: '500', unit: 'g' },
        { name: 'Beurre mou', quantity: '100', unit: 'g' },
        { name: 'Oeufs', quantity: '3', unit: 'pièces' },
        { name: 'Lait tiède', quantity: '15', unit: 'cl' },
        { name: 'Levure fraîche', quantity: '20', unit: 'g' },
        { name: 'Sucre', quantity: '50', unit: 'g' },
        { name: 'Sel', quantity: '10', unit: 'g' },
        { name: 'Graines de sésame', quantity: '2', unit: 'c. à soupe' }
      ],
      steps: [
        'Diluer la levure dans le lait tiède (pas chaud!). Laisser reposer 10 minutes.',
        'Dans un saladier, mélanger la farine, le sucre et le sel. Ajouter les oeufs et le mélange lait-levure.',
        'Pétrir 10 minutes jusqu\'à obtenir une pâte lisse. Incorporer le beurre mou en plusieurs fois, pétrir encore 5 minutes.',
        'Couvrir et laisser lever 1h30 à température ambiante. La pâte doit doubler de volume.',
        'Dégazer la pâte et diviser en 8 boules. Les disposer sur une plaque beurrée, couvrir et laisser lever encore 45 minutes.',
        'Préchauffer le four à 180°C. Dorer à l\'oeuf battu, parsemer de graines de sésame.',
        'Cuire 20-25 minutes jusqu\'à coloration dorée.'
      ],
      tips: [
        'Le beurre doit être très mou',
        'Respecter les temps de pousse',
        'Le lait doit être tiède, pas chaud'
      ],
      pairings: ['Burgers', 'Foie gras', 'Sandwiches']
    },

    pain_burger: {
      id: 'pain_burger',
      name: 'Pain à burger',
      type: 'accompagnement',
      category: 'pain',
      icon: '🍔',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 15,
      servings: 6,
      description: 'Buns moelleux et dorés pour burgers maison.',
      ingredients: [
        { name: 'Farine T55', quantity: '400', unit: 'g' },
        { name: 'Lait tiède', quantity: '20', unit: 'cl' },
        { name: 'Beurre fondu', quantity: '50', unit: 'g' },
        { name: 'Oeuf', quantity: '1', unit: 'pièce' },
        { name: 'Levure sèche', quantity: '7', unit: 'g' },
        { name: 'Sucre', quantity: '30', unit: 'g' },
        { name: 'Sel', quantity: '8', unit: 'g' },
        { name: 'Graines de sésame', quantity: '2', unit: 'c. à soupe' }
      ],
      steps: [
        'Mélanger la farine, le sucre, le sel et la levure. Ajouter le lait tiède, l\'oeuf et le beurre fondu.',
        'Pétrir 10 minutes jusqu\'à obtenir une pâte souple et élastique.',
        'Couvrir et laisser lever 1h à température ambiante.',
        'Diviser en 6 portions égales. Former des boules et les aplatir légèrement en disques de 10 cm.',
        'Disposer sur une plaque, couvrir et laisser lever 30 minutes.',
        'Badigeonner d\'oeuf battu et parsemer de sésame. Cuire à 180°C pendant 12-15 minutes.',
        'Laisser refroidir sur grille avant de couper en deux.'
      ],
      tips: [
        'Aplatir pour des buns pas trop bombés',
        'Dorer généreusement à l\'oeuf',
        'Refroidir avant de couper'
      ],
      pairings: ['Burgers de boeuf', 'Pulled pork', 'Burgers de poulet']
    },

    salade_composee: {
      id: 'salade_composee',
      name: 'Salade composée',
      type: 'accompagnement',
      category: 'legume',
      icon: '🥗',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 0,
      servings: 4,
      description: 'Salade fraîche et croquante en accompagnement.',
      ingredients: [
        { name: 'Mesclun', quantity: '200', unit: 'g' },
        { name: 'Tomates cerises', quantity: '200', unit: 'g' },
        { name: 'Concombre', quantity: '1/2', unit: 'pièce' },
        { name: 'Oignon rouge', quantity: '1/2', unit: 'pièce' },
        { name: 'Huile d\'olive', quantity: '4', unit: 'c. à soupe' },
        { name: 'Vinaigre balsamique', quantity: '2', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Laver et essorer le mesclun. Le disposer dans un grand saladier.',
        'Couper les tomates cerises en deux, le concombre en demi-rondelles, l\'oignon en fines lamelles.',
        'Ajouter les légumes sur le mesclun.',
        'Préparer la vinaigrette : émulsionner l\'huile avec le vinaigre, saler et poivrer.',
        'Assaisonner au dernier moment pour garder le croquant.',
        'Mélanger délicatement et servir aussitôt.'
      ],
      tips: [
        'Bien essorer la salade',
        'Assaisonner au dernier moment',
        'Ajouter des noix ou graines pour le croquant'
      ],
      pairings: ['Grillades', 'Viandes rôties', 'Plats mijotés']
    },

    raisins_frais: {
      id: 'raisins_frais',
      name: 'Raisins frais',
      type: 'accompagnement',
      category: 'fruit',
      icon: '🍇',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 0,
      servings: 4,
      description: 'Grappes de raisin frais en accompagnement du gibier et des volailles.',
      ingredients: [
        { name: 'Raisins blancs ou noirs', quantity: '400', unit: 'g', note: 'chasselas ou muscat' },
        { name: 'Cognac', quantity: '2', unit: 'c. à soupe', note: 'optionnel' }
      ],
      steps: [
        'Choisir des grappes de raisin bien mûres mais fermes, de préférence du chasselas ou du muscat.',
        'Détacher les grains de la grappe en conservant un petit bout de tige.',
        'Les rincer délicatement à l\'eau fraîche et les éponger.',
        'Optionnel : les flamber légèrement au cognac pour les servir tièdes avec le gibier.',
        'Disposer en accompagnement autour de la viande.'
      ],
      tips: [
        'Choisir des raisins de table de qualité',
        'Le muscat est idéal avec le gibier',
        'Servir à température ambiante'
      ],
      pairings: ['Cailles', 'Perdrix', 'Pintade', 'Foie gras']
    },

    foie_gras_poele: {
      id: 'foie_gras_poele',
      name: 'Foie gras poêlé',
      type: 'accompagnement',
      category: 'viande',
      icon: '🦆',
      difficulty: 'moyen',
      prepTime: 5,
      cookTime: 4,
      servings: 4,
      description: 'Escalopes de foie gras saisies, fondantes à coeur.',
      ingredients: [
        { name: 'Foie gras de canard cru', quantity: '400', unit: 'g', note: 'déveiné' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre du moulin', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Sortir le foie gras du réfrigérateur 15 minutes avant cuisson. Le couper en escalopes de 1,5 cm d\'épaisseur.',
        'Chauffer une poêle antiadhésive à feu VIF sans matière grasse.',
        'Saler et poivrer les escalopes. Les poser dans la poêle brûlante.',
        'Cuire 1 minute de chaque côté - le foie doit être bien doré à l\'extérieur mais rosé à l\'intérieur.',
        'Égoutter sur papier absorbant quelques secondes.',
        'Servir immédiatement sur assiettes chaudes avec une pincée de fleur de sel.'
      ],
      tips: [
        'Poêle très chaude, sans gras',
        'Ne pas trop cuire - 1 minute par face',
        'Le foie doit rester rosé au centre'
      ],
      pairings: ['Tournedos Rossini', 'Magret', 'Ris de veau']
    },

    croutons_maison: {
      id: 'croutons_maison',
      name: 'Croûtons maison',
      type: 'accompagnement',
      category: 'pain',
      icon: '🥖',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 10,
      servings: 4,
      description: 'Croûtons dorés et croustillants pour soupes et salades.',
      ingredients: [
        { name: 'Pain de campagne rassis', quantity: '200', unit: 'g' },
        { name: 'Huile d\'olive', quantity: '3', unit: 'c. à soupe' },
        { name: 'Ail', quantity: '1', unit: 'gousse', note: 'écrasée' },
        { name: 'Herbes de Provence', quantity: '1', unit: 'c. à café' },
        { name: 'Sel', quantity: '', unit: '', note: 'à convenance' }
      ],
      steps: [
        'Préchauffer le four à 180°C. Couper le pain en cubes de 1,5 cm.',
        'Dans un saladier, mélanger l\'huile, l\'ail écrasé et les herbes.',
        'Ajouter les cubes de pain et bien mélanger pour les enrober uniformément.',
        'Étaler sur une plaque de cuisson en une seule couche.',
        'Enfourner 8-10 minutes en remuant à mi-cuisson, jusqu\'à ce qu\'ils soient dorés et croustillants.',
        'Saler légèrement à la sortie du four. Laisser refroidir.'
      ],
      tips: [
        'Utiliser du pain rassis, pas frais',
        'Une seule couche pour un résultat uniforme',
        'Se conservent plusieurs jours en boîte hermétique'
      ],
      pairings: ['Soupes', 'Salades', 'Veloutés']
    },

    cornichons: {
      id: 'cornichons',
      name: 'Cornichons',
      type: 'accompagnement',
      category: 'condiment',
      icon: '🥒',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 0,
      servings: 4,
      description: 'Cornichons croquants au vinaigre, indispensables avec les charcuteries.',
      ingredients: [
        { name: 'Cornichons au vinaigre', quantity: '200', unit: 'g', note: 'extra-fins' }
      ],
      steps: [
        'Sortir les cornichons du bocal et les égoutter.',
        'Les disposer dans un ravier ou directement sur le plat de service.',
        'Servir frais en accompagnement.'
      ],
      tips: [
        'Choisir des cornichons extra-fins pour plus de croquant',
        'Les cornichons maison sont incomparables',
        'Accompagnement classique des pâtés et terrines'
      ],
      pairings: ['Pâté', 'Terrine', 'Pot-au-feu', 'Raclette']
    },

    capres: {
      id: 'capres',
      name: 'Câpres',
      type: 'accompagnement',
      category: 'condiment',
      icon: '🫒',
      difficulty: 'facile',
      prepTime: 2,
      cookTime: 0,
      servings: 4,
      description: 'Petits boutons floraux au goût acidulé et relevé.',
      ingredients: [
        { name: 'Câpres au vinaigre', quantity: '50', unit: 'g', note: 'égouttées' }
      ],
      steps: [
        'Égoutter les câpres de leur saumure.',
        'Les rincer éventuellement si elles sont trop salées.',
        'Les ajouter en fin de cuisson ou parsemer sur le plat terminé.'
      ],
      tips: [
        'Les petites câpres (surfines) sont les meilleures',
        'Ajouter en fin de cuisson pour garder le croquant',
        'Se marient avec le citron et le beurre'
      ],
      pairings: ['Raie au beurre noir', 'Escalope de veau', 'Tartare', 'Poisson']
    },

    truffes: {
      id: 'truffes',
      name: 'Truffes',
      type: 'accompagnement',
      category: 'champignon',
      icon: '🖤',
      difficulty: 'facile',
      prepTime: 5,
      cookTime: 0,
      servings: 4,
      description: 'Le diamant noir de la cuisine, à utiliser avec parcimonie.',
      ingredients: [
        { name: 'Truffe noire', quantity: '30', unit: 'g', note: 'fraîche ou en conserve' },
        { name: 'Huile de truffe', quantity: '1', unit: 'c. à café', note: 'optionnel' }
      ],
      steps: [
        'Si truffe fraîche : la brosser délicatement pour retirer la terre, sans la laver.',
        'La râper finement à la mandoline ou au rasoir à truffe juste avant de servir.',
        'Parsemer sur le plat chaud - la chaleur libère les arômes.',
        'Optionnel : quelques gouttes d\'huile de truffe pour intensifier.'
      ],
      tips: [
        'Ne jamais chauffer la truffe - juste la poser sur le plat chaud',
        'La truffe s\'utilise crue, râpée au dernier moment',
        'Conserver au frigo dans du riz pour parfumer le riz'
      ],
      pairings: ['Oeufs brouillés', 'Risotto', 'Pâtes fraîches', 'Ris de veau']
    }
  }
}

// Alias pour les noms alternatifs de recettes
const recipeAliases = {
  // Sauces - variantes de noms
  'sauce bbq': 'sauce barbecue',
  'sauce champignons': 'sauce aux champignons',
  'sauce roquefort': 'sauce au roquefort',
  'sauce aux raisins': 'sauce au raisin',
  'sauce raisins': 'sauce au raisin',
  'ketchup': 'sauce barbecue',
  'sauce aux pommes': 'compote de pommes',
  'navarin printanier': 'sauce blanquette',
  'sauce chimichurri': 'chimichurri',
  'sauce tartare maison': 'sauce tartare',
  'sauce a l\'orange': 'sauce a l\'orange',
  'sauce orange': 'sauce a l\'orange',
  'sauce au miel': 'sauce au miel et epices',
  // Jus - variantes avec agneau/viande
  'jus d\'agneau au romarin': 'jus au romarin',
  'jus d\'agneau au thym': 'jus au thym',
  'jus de cuisson reduit': 'jus de cuisson',
  'jus de viande reduit': 'jus de viande',
  'jus d\'agneau': 'jus d\'agneau',
  // Condiments (simples - pas de recette élaborée)
  'moutarde': 'sauce moutarde',
  // Accompagnements
  'champignons poeles': 'champignons poeles',
  'pommes de terre roties': 'pommes de terre roties',
  'pates': 'pates fraiches',
  'raisins': 'raisins frais',
  'foie gras': 'foie gras poele',
  'croutons aux entrailles': 'croutons maison',
  'croutons': 'croutons maison',
  'pain burger': 'pain a burger',
  'sel de guerande': 'fleur de sel'
}

// Fonction pour trouver une recette par son nom (recherche partielle)
export function findRecipeByName(name) {
  const normalizedSearch = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // Vérifier d'abord les alias
  const aliasKey = Object.keys(recipeAliases).find(alias =>
    normalizedSearch.includes(alias) || alias.includes(normalizedSearch)
  )
  const searchTerm = aliasKey ? recipeAliases[aliasKey] : normalizedSearch

  // Chercher dans les sauces
  for (const [id, recipe] of Object.entries(accompanimentRecipes.sauces)) {
    const normalizedName = recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if (normalizedName.includes(searchTerm) || searchTerm.includes(normalizedName) ||
        normalizedName.includes(normalizedSearch) || normalizedSearch.includes(normalizedName)) {
      return { ...recipe, recipeType: 'sauce' }
    }
  }

  // Chercher dans les accompagnements
  for (const [id, recipe] of Object.entries(accompanimentRecipes.accompagnements)) {
    const normalizedName = recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if (normalizedName.includes(searchTerm) || searchTerm.includes(normalizedName) ||
        normalizedName.includes(normalizedSearch) || normalizedSearch.includes(normalizedName)) {
      return { ...recipe, recipeType: 'accompagnement' }
    }
  }

  return null
}

// Fonction pour obtenir toutes les recettes d'un type
export function getRecipesByType(type) {
  if (type === 'sauce') {
    return Object.values(accompanimentRecipes.sauces)
  }
  if (type === 'accompagnement') {
    return Object.values(accompanimentRecipes.accompagnements)
  }
  return []
}

// Fonction pour obtenir une recette par son ID
export function getRecipeById(id) {
  return accompanimentRecipes.sauces[id] || accompanimentRecipes.accompagnements[id] || null
}

export default accompanimentRecipes
