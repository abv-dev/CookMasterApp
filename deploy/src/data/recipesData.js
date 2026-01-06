// Cookmaster - Données des recettes
// Recettes classiques pour chaque type de viande

export const recipesData = {
  // ==================== BOEUF ====================
  boeuf: {
    entrecote_sauce_poivre: {
      id: 'entrecote_sauce_poivre',
      name: 'Entrecôte sauce au poivre',
      cutId: 'entrecote',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'L\'entrecôte classique des brasseries françaises, avec sa sauce au poivre crémée.',
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
      chefTips: [
        'Pour un steak saignant parfait : température à cœur de 52°C',
        'Le cognac peut être remplacé par du whisky ou du brandy',
        'Pour une sauce plus légère, utilisez du fromage frais à la place de la crème'
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
      cutId: 'bourguignon',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le grand classique de la cuisine française, un mijoté fondant au vin rouge de Bourgogne.',
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
      chefTips: [
        'Utilisez le même vin pour la marinade et pour boire à table',
        'Pour un plat plus riche, ajoutez des os à moelle en fin de cuisson',
        'La recette peut se préparer la veille et se réchauffer'
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
      cutId: 'tartare',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 0,
      restTime: 0,
      isCru: true,
      servings: 2,
      icon: '🥩',
      description: 'Le tartare à la française, assaisonné au couteau pour une texture parfaite.',
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
      chefTips: [
        'La viande doit être achetée le jour même chez un boucher de confiance',
        'Gardez tous les ingrédients au frais jusqu\'au dernier moment',
        'Proposez des toasts grillés chauds pour accompagner'
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
      cutId: 'bavette',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      restTime: 3,
      servings: 2,
      icon: '🥩',
      description: 'La classique bavette des bistrots parisiens avec ses échalotes fondantes.',
      ingredients: [
        { name: 'Bavette d\'aloyau', quantity: '400', unit: 'g' },
        { name: 'Échalotes', quantity: '6', unit: 'pièces', note: 'finement émincées' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Vin rouge', quantity: '10', unit: 'cl' },
        { name: 'Vinaigre de vin', quantity: '2', unit: 'c. à soupe' },
        { name: 'Persil', quantity: '2', unit: 'c. à soupe', note: 'haché' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
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
      chefTips: [
        'Choisir une bavette d\'aloyau plutôt que de flanchet',
        'Ne jamais dépasser la cuisson à point',
        'Servir avec des frites maison'
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
      cutId: 'cote_de_boeuf',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 35,
      restTime: 15,
      servings: 4,
      icon: '🥩',
      description: 'La pièce à partager par excellence, saisie et rôtie à la perfection.',
      ingredients: [
        { name: 'Côte de bœuf', quantity: '1.2', unit: 'kg', note: 'épaisse, maturée' },
        { name: 'Gros sel', quantity: '2', unit: 'c. à soupe' },
        { name: 'Poivre noir', quantity: '1', unit: 'c. à soupe', note: 'concassé' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'écrasées' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'pour le service' }
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
      chefTips: [
        'Demandez une côte maturée 21 jours minimum',
        'L\'os protège la viande et apporte de la saveur',
        'Accompagnez de sauce béarnaise et de frites'
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
      cutId: 'joue',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 240,
      restTime: 0,
      servings: 4,
      icon: '🥩',
      description: 'Une joue fondante braisée longuement au vin rouge, le plat réconfort ultime.',
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
      chefTips: [
        'Préparez la veille, c\'est encore meilleur réchauffé',
        'Servez avec une purée onctueuse ou de la polenta',
        'Le plat se congèle très bien'
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
      cutId: 'filet',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 35,
      restTime: 10,
      servings: 6,
      icon: '🥩',
      description: 'Le prestigieux bœuf Wellington, filet enrobé de duxelles et de pâte feuilletée.',
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
      chefTips: [
        'La réussite dépend de la température du filet (froid) et de la duxelles (sèche)',
        'Servir avec une sauce Périgueux aux truffes',
        'Préparez les étapes 1-3 la veille'
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
      cutId: 'faux_filet',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 12,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'Le faux-filet juteux accompagné d\'un beurre persillé fondant, un classique des grillades.',
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
      chefTips: [
        'Le faux-filet est plus persillé que le filet, donc plus savoureux',
        'Demandez une pièce de 2-3 cm d\'épaisseur pour une cuisson optimale',
        'Servir avec des frites maison ou un gratin dauphinois'
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
      cutId: 'onglet',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'L\'onglet, morceau du boucher par excellence, avec une sauce aux échalotes fondantes au vin rouge.',
      ingredients: [
        { name: 'Onglet de bœuf', quantity: '400', unit: 'g', note: 'débarrassé de la membrane centrale' },
        { name: 'Échalotes', quantity: '6', unit: 'pièces', note: 'finement émincées' },
        { name: 'Vin rouge corsé', quantity: '20', unit: 'cl' },
        { name: 'Beurre', quantity: '50', unit: 'g' },
        { name: 'Fond de veau', quantity: '10', unit: 'cl' },
        { name: 'Thym frais', quantity: '2', unit: 'branches' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
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
      chefTips: [
        'L\'onglet est aussi appelé "pièce du boucher" car il se le réservait traditionnellement',
        'Ne jamais cuire au-delà de saignant',
        'Parfait avec des frites ou une purée maison'
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
      cutId: 'hampe',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 6,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'La hampe juteuse et goûteuse, simplement grillée et parfumée aux herbes fraîches.',
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
      chefTips: [
        'La hampe et l\'onglet sont des pièces jumelles, même cuisson requise',
        'Idéale pour les amateurs de viande goûteuse et persillée',
        'Accompagner d\'une sauce chimichurri pour une touche argentine'
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
      cutId: 'rumsteck',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 10,
      restTime: 5,
      servings: 2,
      icon: '🥩',
      description: 'Le rumsteck tendre et savoureux, arrosé d\'un beurre à l\'ail mousseux.',
      ingredients: [
        { name: 'Rumsteck', quantity: '2', unit: 'pièces', note: '180-200g chacun' },
        { name: 'Beurre', quantity: '60', unit: 'g' },
        { name: 'Ail', quantity: '4', unit: 'gousses', note: 'écrasées' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Huile végétale', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
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
      chefTips: [
        'Le rumsteck est un compromis entre tendreté et saveur',
        'Excellent rapport qualité-prix pour une viande de qualité',
        'Accompagner de haricots verts et pommes sautées'
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
      cutId: 'paleron',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 210,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le paleron fondant braisé longuement avec des carottes confites, un plat familial généreux.',
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
      chefTips: [
        'Le paleron contient un nerf central qui se transforme en gélatine à la cuisson',
        'Préparez ce plat la veille pour des saveurs décuplées',
        'Servir avec une purée maison ou des pommes vapeur'
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
      cutId: 'queue_de_boeuf',
      difficulty: 'facile',
      prepTime: 30,
      cookTime: 240,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'La queue de bœuf gélatineuse et fondante, cuite lentement avec ses légumes d\'hiver.',
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
      chefTips: [
        'La queue de bœuf est très riche en gélatine, le bouillon sera onctueux',
        'Gardez le bouillon pour des risottos ou des sauces',
        'Accompagner de cornichons, gros sel et moutarde forte'
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
      cutId: 'steak_hache',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 8,
      restTime: 2,
      servings: 2,
      icon: '🍔',
      description: 'Le vrai steak haché du boucher, assaisonné et cuit à la perfection, bien rosé au centre.',
      ingredients: [
        { name: 'Bœuf haché', quantity: '300', unit: 'g', note: 'fraîchement haché, 15% MG' },
        { name: 'Échalote', quantity: '1', unit: 'pièce', note: 'finement ciselée' },
        { name: 'Persil', quantity: '1', unit: 'c. à soupe', note: 'haché' },
        { name: 'Œuf', quantity: '1', unit: 'jaune', note: 'optionnel, pour lier' },
        { name: 'Beurre', quantity: '30', unit: 'g' },
        { name: 'Huile', quantity: '1', unit: 'c. à soupe' },
        { name: 'Sel, poivre', quantity: '', unit: '', note: 'à convenance' }
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
      chefTips: [
        'Demandez du haché frais au boucher, pas du préemballé',
        'Un bon ratio de gras (15-20%) garantit le moelleux',
        'Pour un hamburger, ajouter du fromage fondu en fin de cuisson'
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
      cutId: 'filet_mignon',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 25,
      restTime: 5,
      servings: 4,
      icon: '🐷',
      description: 'Un classique familial, le filet mignon enrobé de moutarde et cuit au four.',
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
      chefTips: [
        'Le filet est cuit à point quand il est rosé au centre (65°C)',
        'Pour une version plus festive, enveloppez de bacon avant cuisson',
        'La sauce peut être préparée pendant le repos de la viande'
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
      cutId: 'travers',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 180,
      restTime: 10,
      servings: 4,
      icon: '🍖',
      description: 'Des ribs fondants et caramélisés façon américaine, cuits lentement au four.',
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
      chefTips: [
        'Le test de cuisson : la viande doit se détacher facilement de l\'os',
        'Pour un goût fumé plus prononcé, ajoutez du liquid smoke dans la sauce',
        'Vous pouvez finir sur un BBQ pour le goût grillé authentique'
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
      cutId: 'roti',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 90,
      restTime: 10,
      servings: 6,
      icon: '🐷',
      description: 'Un rôti de porc caramélisé au miel avec des notes de romarin, fondant et savoureux.',
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
      chefTips: [
        'La température à cœur doit atteindre 65-68°C',
        'Le miel de châtaignier apporte une note plus complexe',
        'Ajoutez des pommes en quartiers 30 min avant la fin'
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
      cutId: 'cotes',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🐷',
      description: 'Les côtes de porc façon charcutière avec leur sauce aux cornichons, un classique bistrot.',
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
      chefTips: [
        'Température à cœur : 65°C pour une cuisson parfaite',
        'Les cornichons doivent être coupés en rondelles fines',
        'Vous pouvez ajouter des câpres pour plus d\'acidité'
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
      cutId: 'carre',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🍖',
      description: 'Le carré de porc rôti, croûte dorée aux herbes de Provence et chair fondante.',
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
      chefTips: [
        'Demandez au boucher de parer le carré et de dégager les os',
        'Le temps de cuisson varie selon le poids : 45 min/kg',
        'Pour une croûte croustillante, passez 5 min sous le gril en fin de cuisson'
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
      cutId: 'echine',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🍖',
      description: 'L\'échine persillée et savoureuse, grillée avec une laque sucrée-salée.',
      ingredients: [
        { name: 'Échine de porc', quantity: '800', unit: 'g', note: 'en tranches de 2 cm' },
        { name: 'Sauce soja', quantity: '4', unit: 'c. à soupe' },
        { name: 'Miel', quantity: '3', unit: 'c. à soupe' },
        { name: 'Gingembre', quantity: '2', unit: 'cm', note: 'frais, râpé' },
        { name: 'Ail', quantity: '2', unit: 'gousses', note: 'pressées' },
        { name: 'Huile de sésame', quantity: '1', unit: 'c. à soupe' },
        { name: 'Graines de sésame', quantity: '1', unit: 'c. à soupe' }
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
      chefTips: [
        'L\'échine est plus grasse et savoureuse que le filet mignon',
        'La cuisson au barbecue apporte une dimension fumée',
        'Accompagner de chou chinois sauté'
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
      cutId: 'epaule',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 300,
      restTime: 15,
      servings: 8,
      icon: '🍖',
      description: 'L\'épaule de porc fondante confite au four pendant des heures, à effilocher.',
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
      chefTips: [
        'L\'épaule confite est idéale pour nourrir une grande tablée',
        'Le jus peut servir de base pour une sauce BBQ maison',
        'Se réchauffe très bien au four à 150°C'
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
      cutId: 'poitrine',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 180,
      restTime: 10,
      servings: 6,
      icon: '🥓',
      description: 'La poitrine de porc fondante à cœur avec sa laque caramélisée irrésistible.',
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
      chefTips: [
        'La technique de séchage au frigo est le secret de la couenne parfaite',
        'Pour plus de croustillant, finir sous le gril 2-3 min',
        'Accompagner de pickles pour couper le gras'
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
      cutId: 'jarret',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🍖',
      description: 'Le jarret fondant et gélatineux braisé avec du chou, des pommes de terre et du vin blanc.',
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
      chefTips: [
        'Le jarret est aussi appelé jambonneau quand il est salé',
        'Ajoutez des saucisses de Strasbourg les 20 dernières minutes',
        'Ce plat est encore meilleur réchauffé'
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
      cutId: 'gigot',
      difficulty: 'facile',
      prepTime: 30,
      cookTime: 420,
      restTime: 15,
      servings: 8,
      icon: '🐑',
      description: 'Le mythique gigot confit qui fond sous la fourchette, une recette traditionnelle du dimanche.',
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
      chefTips: [
        'Vous pouvez préparer la veille et réchauffer doucement',
        'L\'os se retirera tout seul en fin de cuisson',
        'Ajoutez des haricots blancs 1h avant la fin pour un plat complet'
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
      cutId: 'cotes',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 8,
      restTime: 3,
      servings: 2,
      icon: '🐑',
      description: 'Des côtes d\'agneau parfumées aux herbes de Provence, saisies à la perfection.',
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
      chefTips: [
        'Les côtes sont rosées quand elles sont souples au toucher',
        'Pour une cuisson parfaite : 52-54°C à cœur',
        'La fleur de sel apporte une texture croquante en fin de cuisson'
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
      cutId: 'carre',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 25,
      restTime: 10,
      servings: 4,
      icon: '🐑',
      description: 'Un carré d\'agneau rôti sous une croûte dorée aux herbes fraîches.',
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
      chefTips: [
        'Demandez au boucher de "manchonner" les côtes',
        'La menthe est traditionnelle avec l\'agneau en cuisine anglaise',
        'Pour une croûte plus croustillante, passez 2 min sous le grill en fin de cuisson'
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
      cutId: 'souris',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 210,
      restTime: 0,
      servings: 4,
      icon: '🐑',
      description: 'Des souris d\'agneau fondantes, confites au four avec des légumes de saison.',
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
      chefTips: [
        'La souris contient beaucoup de collagène qui devient fondant à la cuisson lente',
        'Servez avec une purée de céleri ou des pommes de terre écrasées',
        'Le plat peut être préparé la veille et réchauffé'
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
      cutId: 'epaule',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 180,
      restTime: 15,
      servings: 6,
      icon: '🍖',
      description: 'L\'épaule d\'agneau fondante rôtie sur un lit de pommes de terre fondantes.',
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
      chefTips: [
        'L\'épaule est plus économique que le gigot mais tout aussi savoureuse',
        'Ajoutez quelques tomates cerises les 30 dernières minutes',
        'Parfait pour un repas dominical en famille'
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
      cutId: 'selle',
      difficulty: 'difficile',
      prepTime: 30,
      cookTime: 35,
      restTime: 15,
      servings: 4,
      icon: '🍖',
      description: 'La selle d\'agneau, pièce noble par excellence, enrobée d\'une croûte d\'herbes fraîches.',
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
      chefTips: [
        'La selle est le morceau le plus tendre de l\'agneau',
        'Servir avec un jus d\'agneau au romarin',
        'Accompagner de haricots verts et tomates provençales'
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
      cutId: 'noisettes',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🍖',
      description: 'Les noisettes d\'agneau tendres et rosées, accompagnées de gousses d\'ail confites.',
      ingredients: [
        { name: 'Noisettes d\'agneau', quantity: '6', unit: 'pièces', note: '60-80g chacune' },
        { name: 'Ail', quantity: '12', unit: 'gousses', note: 'en chemise' },
        { name: 'Beurre', quantity: '40', unit: 'g' },
        { name: 'Thym frais', quantity: '4', unit: 'branches' },
        { name: 'Huile d\'olive', quantity: '2', unit: 'c. à soupe' },
        { name: 'Fleur de sel', quantity: '', unit: '', note: 'à convenance' },
        { name: 'Poivre du moulin', quantity: '', unit: '', note: 'à convenance' }
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
      chefTips: [
        'Les noisettes sont prélevées dans le filet ou la selle',
        'Demandez à votre boucher de les préparer',
        'Servir avec un gratin dauphinois ou des flageolets'
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
      cutId: 'collier',
      difficulty: 'facile',
      prepTime: 25,
      cookTime: 150,
      restTime: 0,
      servings: 6,
      icon: '🍲',
      description: 'Le collier d\'agneau fondant mijoté aux épices, pruneaux et amandes, façon tajine marocain.',
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
      chefTips: [
        'Le collier est un morceau gélatineux parfait pour les tajines',
        'Préparez la veille pour des saveurs plus intenses',
        'Variante : remplacer les pruneaux par des abricots secs'
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
      cutId: 'poitrine',
      difficulty: 'moyen',
      prepTime: 40,
      cookTime: 150,
      restTime: 10,
      servings: 6,
      icon: '🍖',
      description: 'La poitrine d\'agneau désossée, farcie aux herbes et roulée, cuite lentement au four.',
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
      chefTips: [
        'Demandez au boucher de préparer la poitrine en rectangle',
        'La poitrine est économique et très goûteuse',
        'Accompagner de flageolets ou de haricots blancs'
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
      cutId: 'blanquette',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 90,
      restTime: 0,
      servings: 6,
      icon: '🐄',
      description: 'La blanquette traditionnelle française, une sauce crémeuse et onctueuse.',
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
      chefTips: [
        'La vraie blanquette ne doit jamais bouillir après la liaison',
        'Vous pouvez ajouter des petites quenelles de veau',
        'Le citron doit être dosé avec parcimonie : il parfume sans acidifier'
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
      cutId: 'jarret',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 120,
      restTime: 0,
      servings: 4,
      icon: '🐄',
      description: 'Le grand classique milanais, des tranches de jarret braisées avec leur moelle.',
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
      chefTips: [
        'La moelle se déguste à la petite cuillère : c\'est le clou du plat',
        'Le risotto alla milanese (au safran) est l\'accompagnement traditionnel',
        'Vous pouvez préparer la veille : le plat n\'en sera que meilleur'
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
      cutId: 'escalope',
      difficulty: 'facile',
      prepTime: 10,
      cookTime: 15,
      restTime: 0,
      servings: 2,
      icon: '🐄',
      description: 'Des escalopes de veau tendres dans une sauce crémeuse aux champignons.',
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
      chefTips: [
        'Le veau doit rester légèrement rosé au centre',
        'Vous pouvez ajouter une touche de moutarde dans la sauce',
        'Remplacez les champignons de Paris par des girolles en saison'
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
      cutId: 'cote',
      difficulty: 'moyen',
      prepTime: 10,
      cookTime: 20,
      restTime: 5,
      servings: 2,
      icon: '🐄',
      description: 'Une belle côte de veau saisie et rôtie, avec un beurre aux herbes.',
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
      chefTips: [
        'Le veau doit être légèrement rosé pour être tendre',
        'Accompagnez de pommes de terre sarladaises ou d\'une poêlée de légumes',
        'Le beurre aux herbes se conserve 1 mois au congélateur'
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
      cutId: 'noix',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🥩',
      description: 'La noix de veau rôtie, tendre et moelleuse, avec son jus corsé aux légumes.',
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
      chefTips: [
        'La noix est le morceau le plus tendre du veau pour les rôtis',
        'Ne pas trop cuire : le veau sec est une catastrophe',
        'Accompagner de petits légumes glacés ou d\'une purée'
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
      cutId: 'tendron',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 150,
      restTime: 0,
      servings: 4,
      icon: '🍲',
      description: 'Le tendron de veau moelleux et gélatineux, braisé longuement avec des légumes printaniers.',
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
      chefTips: [
        'Le tendron est un morceau avec des cartilages qui deviennent fondants à la cuisson',
        'Parfait plat de printemps avec les légumes nouveaux',
        'Ce plat peut se réchauffer sans problème'
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
      cutId: 'ris',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 20,
      restTime: 0,
      servings: 4,
      icon: '🍳',
      description: 'Les ris de veau croustillants et fondants, accompagnés de morilles à la crème.',
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
      chefTips: [
        'Les ris de veau sont un mets délicat et raffiné',
        'Préférez les "noix" aux "gorges", plus tendres',
        'Se marie parfaitement avec un vin jaune du Jura'
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
      cutId: 'entier',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 75,
      restTime: 10,
      servings: 4,
      icon: '🍗',
      description: 'Le poulet rôti du dimanche, peau croustillante et chair juteuse.',
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
      chefTips: [
        'Pour une peau extra-croustillante, séchez bien le poulet la veille au frigo',
        'Ajoutez des pommes de terre autour pour un plat complet',
        'Le temps de cuisson est d\'environ 20 min par 500g'
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
      cutId: 'magret',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 15,
      restTime: 5,
      servings: 2,
      icon: '🦆',
      description: 'Le magret rosé avec sa sauce aux cerises aigres-douces.',
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
      chefTips: [
        'Pour un magret saignant : 52°C à cœur, rosé : 56°C',
        'Le gras récupéré se conserve des mois au frigo',
        'En saison, utilisez des cerises fraîches griotte'
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
      cutId: 'confit',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🦆',
      description: 'Le véritable confit du Sud-Ouest, cuit lentement dans sa graisse.',
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
      chefTips: [
        'Le confit se bonifie avec le temps comme un bon vin',
        'Réutilisez la graisse de confit pour de futures cuissons',
        'Servez avec une salade de roquette pour équilibrer le gras'
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
      cutId: 'cuisses',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 45,
      restTime: 0,
      servings: 4,
      icon: '🍗',
      description: 'Des cuisses de poulet dorées avec une sauce forestière aux champignons.',
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
      chefTips: [
        'Mélangez plusieurs variétés de champignons pour plus de saveur',
        'Vous pouvez ajouter des lardons pour plus de gourmandise',
        'Accompagnez de riz ou de tagliatelles'
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
      cutId: 'blancs',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 20,
      restTime: 5,
      servings: 4,
      icon: '🍗',
      description: 'Des blancs de poulet tendres avec une sauce crémeuse au basilic frais.',
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
      chefTips: [
        'Température à cœur : 74°C pour une cuisson sûre',
        'Utilisez du basilic grand vert ou génois pour plus de parfum',
        'Vous pouvez préparer le pesto à l\'avance'
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
      cutId: 'escalope',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 10,
      restTime: 0,
      servings: 2,
      icon: '🦃',
      description: 'Escalopes de dinde panées croustillantes, servies avec citron et roquette.',
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
      chefTips: [
        'Pour une version plus légère, cuire au four à 200°C pendant 20 min en retournant à mi-cuisson',
        'Accompagnez de spaghetti à la tomate pour un repas complet à l\'italienne',
        'La dinde est plus maigre que le veau mais tout aussi délicieuse en milanaise'
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
      cutId: 'ailes',
      difficulty: 'facile',
      prepTime: 15,
      cookTime: 45,
      restTime: 0,
      servings: 4,
      icon: '🍗',
      description: 'Les ailes de poulet croustillantes enrobées de sauce piquante Buffalo, un classique américain.',
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
      chefTips: [
        'Pour encore plus de croustillant, passez sous le gril 2-3 min après l\'enrobage',
        'La vraie recette vient de Buffalo, New York (1964)',
        'Proposez plusieurs niveaux de piquant à table'
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
      cutId: 'canard_entier',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 120,
      restTime: 15,
      servings: 4,
      icon: '🦆',
      description: 'Le canard rôti classique avec sa sauce à l\'orange bigarade, un grand classique français.',
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
      chefTips: [
        'Le canard à l\'orange est un classique de la cuisine bourgeoise française',
        'Le gras récupéré est excellent pour les pommes de terre sarladaises',
        'Accompagner de navets glacés ou de purée de céleri'
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
      cutId: 'entiere',
      difficulty: 'moyen',
      prepTime: 60,
      cookTime: 240,
      restTime: 30,
      servings: 10,
      icon: '🦃',
      description: 'La dinde de fête farcie aux marrons et aux herbes, dorée à souhait.',
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
      chefTips: [
        'Sortez la dinde du frigo 2h avant la cuisson',
        'Gardez le cou et les abats pour un fond de sauce',
        'Tradition : on sert la dinde à Noël et Thanksgiving'
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
      cutId: 'cuisse',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 180,
      restTime: 0,
      servings: 4,
      icon: '🦃',
      description: 'La cuisse de dinde moelleuse et fondante, confite lentement au four avec des herbes aromatiques.',
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
      chefTips: [
        'La cuisse de dinde est plus goûteuse et moins sèche que le blanc',
        'Conservez la graisse filtrée pour d\'autres confits ou des pommes de terre',
        'Se conserve plusieurs jours au frigo, couverte de graisse'
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
      cutId: 'roti_sanglier',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🐗',
      description: 'Un civet traditionnel, mariné longuement et mijoté aux saveurs forestières.',
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
      chefTips: [
        'Le civet est encore meilleur réchauffé le lendemain',
        'Servez avec des spätzle, de la polenta ou des pâtes fraîches',
        'Les baies de genièvre sont indispensables pour le goût typique'
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
      cutId: 'faisan',
      difficulty: 'moyen',
      prepTime: 20,
      cookTime: 50,
      restTime: 10,
      servings: 4,
      icon: '🐦',
      description: 'Un faisan bardé et rôti, accompagné de pommes caramélisées au calvados.',
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
      chefTips: [
        'La température à cœur doit atteindre 74°C minimum',
        'Le faisan peut être farci aux marrons pour les fêtes',
        'Le calvados peut être remplacé par du cognac ou de l\'armagnac'
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
      cutId: 'filet_cerf',
      difficulty: 'moyen',
      prepTime: 15,
      cookTime: 20,
      restTime: 8,
      servings: 4,
      icon: '🦌',
      description: 'Un filet de cerf rosé accompagné d\'une sauce aux airelles, gibier noble par excellence.',
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
      chefTips: [
        'Ne dépassez jamais la cuisson à point, le cerf deviendrait sec',
        'Les airelles peuvent être remplacées par des groseilles',
        'Le genièvre est l\'épice signature du gibier'
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
      cutId: 'rable_lievre',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 240,
      restTime: 0,
      servings: 6,
      icon: '🐰',
      description: 'Le plat mythique de la grande cuisine française, un lièvre farci et braisé.',
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
      chefTips: [
        'Recette emblématique de la cuisine de fête',
        'Le sang peut être remplacé par du chocolat noir',
        'Servez avec une purée truffée ou des châtaignes'
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
      cutId: 'filet_chevreuil',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 25,
      restTime: 5,
      servings: 4,
      icon: '🦌',
      description: 'Des noisettes de chevreuil avec la sauce Grand Veneur, classique de la cuisine de chasse.',
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
      chefTips: [
        'La sauce Grand Veneur est une base de la cuisine de gibier',
        'Le vinaigre et la crème créent le contraste aigre-doux',
        'Les groseilles peuvent être remplacées par des airelles'
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
      cutId: 'selle_chevreuil',
      difficulty: 'difficile',
      prepTime: 45,
      cookTime: 40,
      restTime: 15,
      servings: 6,
      icon: '🦌',
      description: 'La selle de chevreuil rôtie rosée avec la sauce Grand Veneur, un sommet de la cuisine de gibier.',
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
      chefTips: [
        'La selle de chevreuil est la pièce la plus noble du gibier',
        'Le Grand Veneur est la sauce royale du gibier depuis le XVIIe siècle',
        'Le sang peut être ajouté pour une sauce royale traditionnelle'
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
      cutId: 'gigot_cerf',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 240,
      restTime: 15,
      servings: 8,
      icon: '🦌',
      description: 'Le gigot de cerf braisé longuement aux baies de genièvre et au vin rouge, fondant et parfumé.',
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
      chefTips: [
        'Le cerf est plus corsé que le chevreuil, parfait pour les braisés',
        'Le genièvre est l\'épice traditionnelle du gibier',
        'Ce plat est encore meilleur réchauffé'
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
      cutId: 'marcassin',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 90,
      restTime: 15,
      servings: 6,
      icon: '🐗',
      description: 'Le marcassin tendre rôti accompagné de châtaignes et d\'une sauce au miel.',
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
      chefTips: [
        'Le marcassin (moins d\'un an) est plus tendre que le sanglier adulte',
        'Il peut se cuisiner sans marinade car sa chair est moins forte',
        'Accompagner de chou rouge braisé aux pommes'
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
      cutId: 'civet_lievre',
      difficulty: 'difficile',
      prepTime: 60,
      cookTime: 180,
      restTime: 0,
      servings: 6,
      icon: '🐇',
      description: 'Le civet de lièvre traditionnel, mijoté au vin rouge et lié au sang, un plat mythique.',
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
      chefTips: [
        'Sans sang, le civet devient un simple ragoût',
        'Le lièvre a une chair plus foncée et plus corsée que le lapin',
        'Traditionnellement servi avec des croûtons au foie du lièvre'
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
      cutId: 'lapin_garenne',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 90,
      restTime: 0,
      servings: 4,
      icon: '🐇',
      description: 'Le lapin de garenne sauté à la sauce chasseur, champignons, tomates et vin blanc.',
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
      chefTips: [
        'Le lapin de garenne est plus petit et plus goûteux que le lapin d\'élevage',
        'La sauce chasseur est parfaite pour les viandes blanches',
        'Servir avec des pommes de terre vapeur ou des pâtes fraîches'
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
      cutId: 'perdrix',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 120,
      restTime: 0,
      servings: 4,
      icon: '🐦',
      description: 'La perdrix braisée sur un lit de chou fondant, un classique de la cuisine de chasse.',
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
      chefTips: [
        'La perdrix au chou est un plat d\'automne/hiver par excellence',
        'Utilisez un chou de Savoie pour plus de finesse',
        'Ce plat peut se préparer la veille'
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
      cutId: 'caille',
      difficulty: 'facile',
      prepTime: 20,
      cookTime: 30,
      restTime: 5,
      servings: 4,
      icon: '🐦',
      description: 'Les cailles rôties dorées accompagnées de raisins frais et d\'une sauce au porto.',
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
      chefTips: [
        'Les cailles sont un gibier à plume délicat et festif',
        'Le mariage caille-raisin est un classique de l\'automne',
        'Comptez 2 cailles par personne'
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
      cutId: 'becasse',
      difficulty: 'difficile',
      prepTime: 30,
      cookTime: 20,
      restTime: 10,
      servings: 2,
      icon: '🐦',
      description: 'La bécasse rôtie entière avec ses intérieurs sur canapé, le gibier roi de la gastronomie.',
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
      chefTips: [
        'La bécasse est considérée comme le roi des gibiers à plume',
        'Ne pas vider est la tradition, mais certains préfèrent vider',
        'Accompagner d\'un grand Bourgogne rouge'
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
      cutId: 'canard_sauvage',
      difficulty: 'moyen',
      prepTime: 30,
      cookTime: 45,
      restTime: 10,
      servings: 2,
      icon: '🦆',
      description: 'Le canard colvert rôti rosé avec la sauce à l\'orange amère traditionnelle.',
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
      chefTips: [
        'Le colvert (canard sauvage) est plus parfumé que le canard d\'élevage',
        'La bigarade (orange amère) donne une sauce plus complexe',
        'Accompagner de navets glacés ou de purée de céleri'
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
      cutId: 'pigeon',
      difficulty: 'moyen',
      prepTime: 25,
      cookTime: 35,
      restTime: 5,
      servings: 2,
      icon: '🐦',
      description: 'Le pigeon ramier rosé accompagné de petits pois à la française et de lardons.',
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
      chefTips: [
        'Le pigeon ramier (palombe) est un gibier très fin',
        'Les petits pois à la française sont l\'accompagnement classique',
        'Un pigeon par personne est la portion traditionnelle'
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
