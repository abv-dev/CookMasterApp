/**
 * Recettes de Sauces pour CookMaster
 * Toutes les sauces classiques, gastronomiques et du monde
 */

const recettesSauces = {
  // ============================================
  // SAUCES CLASSIQUES FRANÇAISES
  // ============================================

  "bearnaise": {
    nom: "Sauce Béarnaise",
    categorie: "sauce émulsionnée",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Jaunes d'œufs très frais", quantite: "4", type: "œuf" },
      { nom: "Beurre doux", quantite: "250 g", type: "produit laitier" },
      { nom: "Échalotes", quantite: "2 moyennes", type: "aromate" },
      { nom: "Estragon frais", quantite: "1 bouquet (20 g)", type: "herbe" },
      { nom: "Cerfeuil frais", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Vinaigre d'estragon (ou de vin blanc)", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Vin blanc sec", quantite: "5 cl", type: "alcool" },
      { nom: "Poivre noir en grains", quantite: "1 c. à café", type: "épice" },
      { nom: "Sel fin", quantite: "1/2 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "CLARIFIER LE BEURRE (peut se faire la veille) : Faire fondre le beurre à feu très doux dans une casserole. Une mousse blanche se forme en surface : l'écumer délicatement. Le beurre se sépare en trois couches : la mousse (caséine) en haut, le beurre clarifié jaune et limpide au milieu, le petit-lait (liquide blanchâtre) au fond. Verser doucement le beurre jaune dans un bol en arrêtant avant le petit-lait. Garder tiède (50-60°C).",
      "PRÉPARER LA RÉDUCTION : Ciseler finement les échalotes (petits dés de 2mm). Effeuiller l'estragon, garder la moitié des feuilles entières pour la fin, ciseler le reste avec les tiges. Dans une petite casserole, mettre le vinaigre, le vin blanc, les échalotes, l'estragon ciselé et les grains de poivre. Faire réduire à feu moyen jusqu'à ce qu'il reste environ 2-3 cuillères à soupe de liquide sirupeux. Cela prend 5-8 minutes.",
      "FILTRER ET REFROIDIR : Passer la réduction au chinois fin en pressant bien pour extraire tous les sucs. Jeter les solides. Ajouter 2 cuillères à soupe d'eau froide pour arrêter la cuisson et refroidir légèrement. La réduction doit être tiède, pas chaude.",
      "PRÉPARER LE BAIN-MARIE : Remplir une casserole d'eau et la porter à frémissement (petites bulles), jamais à ébullition. L'eau ne doit pas toucher le fond du récipient qui sera posé dessus. Réduire le feu au minimum pour maintenir juste tiède.",
      "MONTER LA SAUCE : Mettre les jaunes d'œufs dans un cul-de-poule ou une casserole à fond épais. Ajouter la réduction filtrée. Placer sur le bain-marie tiède. Fouetter énergiquement en décrivant des 8. Les jaunes vont progressivement mousser, blanchir et épaissir. C'est prêt quand le mélange 'fait le ruban' : en soulevant le fouet, le mélange retombe en formant un ruban qui reste visible quelques secondes.",
      "INCORPORER LE BEURRE : Retirer du bain-marie. Verser le beurre clarifié tiède en très fin filet (comme un fil), en fouettant vigoureusement et constamment. Ne pas aller trop vite ! La sauce doit s'épaissir progressivement et devenir crémeuse. Si elle devient trop épaisse, ajouter quelques gouttes d'eau tiède.",
      "FINITIONS : Goûter et rectifier l'assaisonnement en sel. Ciseler finement les feuilles d'estragon et le cerfeuil réservés. Les incorporer à la sauce. Servir immédiatement ou maintenir au chaud au bain-marie tiède (maximum 60°C) en couvrant d'un film au contact."
    ],
    conseils: "La béarnaise est la reine des sauces pour viandes rouges. ATTENTION : Ne jamais dépasser 65°C ou la sauce 'tourne' (les œufs coagulent). Si elle tranche (aspect granuleux), mettre une cuillère d'eau glacée dans un bol propre et incorporer la sauce tranchée petit à petit en fouettant. Se conserve 30min maximum.",
    variantes: ["Sauce Choron (+ 2 c. à soupe de purée de tomates concentrée)", "Sauce Paloise (remplacer l'estragon par de la menthe fraîche)", "Sauce Foyot (+ 2 c. à soupe de glace de viande)"]
  },

  "sauce_bearnaise": {
    nom: "Sauce Béarnaise",
    redirect: "bearnaise"
  },

  "sauce_au_poivre": {
    nom: "Sauce au Poivre",
    categorie: "sauce liée",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche épaisse (30% MG)", quantite: "25 cl", type: "produit laitier" },
      { nom: "Poivre vert en saumure", quantite: "2 c. à soupe bombées", type: "épice" },
      { nom: "Cognac (ou Armagnac)", quantite: "4 cl", type: "alcool" },
      { nom: "Fond de veau (ou bouillon de bœuf)", quantite: "10 cl", type: "bouillon" },
      { nom: "Échalote", quantite: "1 moyenne", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LES INGRÉDIENTS : Égoutter le poivre vert de sa saumure et le rincer légèrement. Peler et ciseler finement l'échalote (petits dés de 2-3mm). Mesurer le cognac dans un petit verre (pour faciliter le flambage). Avoir la crème et le fond de veau à portée de main.",
      "CUIRE LES ÉCHALOTES : Dans une poêle ou la même poêle que la viande (avec les sucs de cuisson), faire fondre le beurre à feu moyen. Ajouter l'échalote ciselée et faire suer 2 minutes sans colorer, en remuant. L'échalote doit devenir translucide.",
      "FLAMBER LE COGNAC : Hors du feu, verser le cognac d'un coup. ATTENTION : éloigner votre visage ! Remettre sur le feu et incliner la poêle vers la flamme (ou approcher un briquet) pour enflammer l'alcool. Laisser les flammes s'éteindre seules (environ 20 secondes). Le flambage élimine l'alcool tout en gardant les arômes.",
      "RÉDUIRE : Ajouter le fond de veau. Porter à ébullition puis baisser à feu moyen. Laisser réduire de moitié, environ 3-4 minutes. Le liquide doit épaissir légèrement et devenir sirupeux.",
      "INCORPORER LA CRÈME : Verser la crème fraîche et le poivre vert. Mélanger et laisser frémir à feu doux pendant 4-5 minutes. La sauce va épaissir et napper le dos d'une cuillère. Écraser quelques grains de poivre contre la paroi de la poêle avec une fourchette pour libérer plus de saveur.",
      "FINIR ET SERVIR : Goûter et rectifier en sel si nécessaire (attention, la saumure du poivre est déjà salée). Napper généreusement la viande ou servir en saucière à part."
    ],
    conseils: "Le poivre vert en saumure apporte une fraîcheur et un croquant que n'a pas le poivre noir concassé. Classique absolu avec l'entrecôte. Si vous n'avez pas de cognac, utilisez du whisky ou du brandy. La sauce peut être préparée à l'avance et réchauffée doucement.",
    variantes: ["Au poivre noir concassé (1 c. à soupe)", "Au poivre de Sichuan (saveur citronnée)", "Aux trois poivres (vert, noir, rose)"]
  },

  "sauce_au_poivre_vert": {
    nom: "Sauce au Poivre Vert",
    redirect: "sauce_au_poivre"
  },

  "sauce_bordelaise": {
    nom: "Sauce Bordelaise",
    categorie: "sauce au vin",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Vin rouge de Bordeaux (ou autre vin corsé)", quantite: "50 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "4 moyennes", type: "aromate" },
      { nom: "Fond de veau (ou bouillon concentré)", quantite: "25 cl", type: "bouillon" },
      { nom: "Os à moelle de bœuf", quantite: "2-3 tronçons (environ 100g de moelle)", type: "viande" },
      { nom: "Beurre froid", quantite: "50 g coupé en dés", type: "produit laitier" },
      { nom: "Thym frais", quantite: "1 branche", type: "herbe" },
      { nom: "Laurier", quantite: "1 feuille", type: "herbe" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LA MOELLE (la veille idéalement) : Demander au boucher de couper les os à moelle en tronçons de 5 cm. Faire tremper les os dans de l'eau froide salée pendant 2-3 heures minimum (ou une nuit) pour faire dégorger le sang. Changer l'eau 2-3 fois. La moelle doit devenir bien blanche.",
      "PRÉPARER LES ÉCHALOTES : Peler les échalotes et les ciseler très finement (petits dés de 2mm maximum). Plus le hachage est fin, plus les saveurs se diffuseront dans la sauce.",
      "FAIRE SUER LES ÉCHALOTES : Dans une casserole à fond épais, faire fondre une noix de beurre (environ 15g) à feu moyen. Ajouter les échalotes ciselées et les faire suer 3-4 minutes en remuant. Elles doivent devenir translucides et fondantes, sans colorer.",
      "RÉDUIRE LE VIN : Verser le vin rouge d'un coup. Ajouter le thym et le laurier. Porter à ébullition puis réduire le feu. Laisser réduire à feu moyen-vif jusqu'à ce qu'il ne reste qu'environ 1/4 du volume initial (soit environ 12-15 cl). Cela prend 15-20 minutes. Le liquide doit devenir sirupeux et concentré.",
      "AJOUTER LE FOND : Verser le fond de veau dans la réduction de vin. Mélanger et laisser réduire à nouveau de moitié, environ 8-10 minutes. Retirer le thym et le laurier.",
      "POCHER LA MOELLE : Pendant la dernière réduction, porter une casserole d'eau salée à frémissement (petites bulles, pas d'ébullition forte). Sortir la moelle des os délicatement avec un petit couteau ou en tapant l'os sur le plan de travail. Pocher la moelle 5-6 minutes dans l'eau frémissante. Elle doit devenir fondante mais garder sa forme. La retirer délicatement avec une écumoire et la réserver au chaud.",
      "MONTER AU BEURRE : Retirer la casserole du feu. Incorporer les dés de beurre froid un par un en fouettant vigoureusement. Chaque morceau doit être incorporé avant d'ajouter le suivant. Cette technique (monter au beurre) donne à la sauce son onctuosité et son brillant.",
      "FINITIONS : Passer la sauce au chinois fin pour obtenir une texture lisse (ou laisser les échalotes si vous préférez). Couper la moelle pochée en rondelles de 1 cm. Les disposer délicatement dans la sauce ou sur la viande. Assaisonner en sel et poivre. Servir immédiatement."
    ],
    conseils: "La moelle doit rester fondante, jamais caoutchouteuse. Utilisez un vin que vous boiriez à table - un vin médiocre donnera une sauce médiocre. L'accord parfait avec l'entrecôte grillée. La sauce ne se réchauffe pas bien car le beurre se sépare.",
    variantes: ["Sans moelle = sauce marchand de vin", "Au porto (remplacer la moitié du vin par du porto)", "Au Médoc avec des champignons"]
  },

  "sauce_marchand_de_vin": {
    nom: "Sauce Marchand de Vin",
    categorie: "sauce au vin",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vin rouge corsé (Côtes du Rhône, Bordeaux)", quantite: "30 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "3 moyennes", type: "aromate" },
      { nom: "Fond de veau (ou bouillon de bœuf)", quantite: "20 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "60 g coupé en dés", type: "produit laitier" },
      { nom: "Persil plat", quantite: "2 c. à soupe ciselé", type: "herbe" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LES INGRÉDIENTS : Peler et émincer finement les échalotes (tranches fines de 2mm). Ciseler le persil : laver, sécher, rassembler les feuilles et les émincer finement. Couper le beurre froid en petits dés de 1 cm et le garder au frais.",
      "FAIRE SUER LES ÉCHALOTES : Dans une casserole à fond épais, faire fondre 20g de beurre à feu moyen. Ajouter les échalotes émincées. Faire suer (cuire doucement sans coloration) pendant 3-4 minutes en remuant régulièrement. Les échalotes doivent devenir translucides et fondantes.",
      "RÉDUIRE LE VIN : Verser le vin rouge. Porter à ébullition puis maintenir un feu moyen-vif. Laisser réduire jusqu'à ce qu'il ne reste qu'environ 1/3 du volume initial (soit environ 10 cl). Cela prend 10-12 minutes. Le vin doit devenir sirupeux et brillant.",
      "AJOUTER LE FOND : Verser le fond de veau. Mélanger et laisser réduire de moitié à feu moyen, environ 5-7 minutes supplémentaires. La sauce doit napper légèrement le dos d'une cuillère.",
      "MONTER AU BEURRE : Retirer la casserole du feu. C'est important car si le beurre est ajouté sur le feu, la sauce va se séparer. Incorporer les dés de beurre froid un par un en fouettant vigoureusement entre chaque ajout. Le beurre doit s'émulsionner dans la sauce pour lui donner brillance et onctuosité.",
      "FINIR ET SERVIR : Ajouter le persil ciselé. Goûter et rectifier l'assaisonnement en sel et poivre. Servir immédiatement car cette sauce ne se réchauffe pas bien (le beurre se sépare)."
    ],
    conseils: "Version simplifiée de la bordelaise sans moelle. Convient parfaitement aux grillades et aux viandes rouges. La qualité du vin est importante : utilisez un vin que vous boiriez. Cette sauce peut être préparée pendant que la viande repose.",
    variantes: ["Au Bourgogne (Pinot noir)", "Au vin blanc sec (pour les poissons)", "Avec un trait de cognac"]
  },

  "sauce_au_vin_rouge": {
    nom: "Sauce au Vin Rouge",
    redirect: "sauce_marchand_de_vin"
  },

  "sauce_chasseur": {
    nom: "Sauce Chasseur",
    categorie: "sauce brune",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris bien frais", quantite: "200 g", type: "champignon" },
      { nom: "Échalotes", quantite: "2 moyennes", type: "aromate" },
      { nom: "Tomates mûres (ou 200g de tomates concassées en boîte)", quantite: "2 moyennes", type: "légume" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Fond de veau (ou bouillon de volaille)", quantite: "20 cl", type: "bouillon" },
      { nom: "Estragon frais", quantite: "1 c. à soupe ciselé", type: "herbe" },
      { nom: "Persil plat", quantite: "2 c. à soupe ciselé", type: "herbe" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LES CHAMPIGNONS : Nettoyer les champignons avec un linge humide (ne pas les laver sous l'eau, ils deviendraient spongieux). Couper le bout terreux du pied. Émincer en tranches de 3-4mm d'épaisseur.",
      "PRÉPARER LES AUTRES INGRÉDIENTS : Peler et ciseler finement les échalotes. Si vous utilisez des tomates fraîches : les ébouillanter 30 secondes, les peler, les épépiner et les couper en petits dés (c'est la \"tomate concassée\"). Ciseler l'estragon et le persil.",
      "SAUTER LES CHAMPIGNONS : Dans une poêle ou sauteuse, faire chauffer le beurre à feu vif. Quand il mousse, ajouter les champignons d'un coup. Les faire sauter 4-5 minutes à feu vif en remuant. Ils doivent être bien dorés et avoir rendu leur eau. C'est la réaction de Maillard qui leur donne ce bon goût.",
      "AJOUTER LES ÉCHALOTES : Baisser le feu à moyen. Ajouter les échalotes ciselées et les faire suer 2-3 minutes jusqu'à ce qu'elles soient translucides. Ne pas les laisser colorer.",
      "DÉGLACER : Verser le vin blanc d'un coup. Bien gratter le fond de la poêle avec une spatule en bois pour décoller tous les sucs de cuisson (c'est le \"déglaçage\"). Laisser réduire de moitié à feu moyen, environ 3-4 minutes.",
      "MIJOTER : Ajouter les tomates concassées et le fond de veau. Mélanger. Laisser mijoter à feu doux pendant 15 minutes. La sauce doit épaissir légèrement et devenir homogène.",
      "FINIR ET SERVIR : Ajouter l'estragon et le persil ciselés. Mélanger, goûter et rectifier l'assaisonnement en sel et poivre. Servir immédiatement sur ou à côté de la viande."
    ],
    conseils: "Sauce polyvalente qui accompagne aussi bien le poulet que le veau, le lapin ou le porc. L'estragon apporte sa signature aromatique caractéristique. Si vous n'avez pas d'estragon frais, omettez-le plutôt que d'utiliser du séché.",
    variantes: ["Avec cèpes ou girolles (version gastronomique)", "Sauce forestière (même base sans tomates)", "Avec un trait de cognac pour plus de profondeur"]
  },

  "sauce_forestiere": {
    nom: "Sauce Forestière",
    categorie: "sauce aux champignons",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons mélangés (cèpes, girolles, shiitakes, ou champignons de Paris)", quantite: "300 g", type: "champignon" },
      { nom: "Échalotes", quantite: "2 moyennes", type: "aromate" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Vin blanc sec", quantite: "10 cl", type: "alcool" },
      { nom: "Crème fraîche épaisse", quantite: "15 cl", type: "produit laitier" },
      { nom: "Persil plat frais", quantite: "3 c. à soupe ciselé", type: "herbe" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sel fin", quantite: "selon goût", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LES CHAMPIGNONS : Nettoyer chaque champignon avec un linge humide ou une brosse douce. Ne JAMAIS les laver sous l'eau courante car ils absorberaient l'eau comme des éponges. Couper la partie terreuse des pieds. Selon la taille : laisser entiers les petits, couper en deux les moyens, émincer les gros en tranches de 5mm. Les différentes formes donneront du caractère à la sauce.",
      "PRÉPARER LES AROMATES : Peler et ciseler finement les échalotes (petits dés de 2mm). Peler l'ail, retirer le germe central si présent (il rend amer), et l'émincer finement ou l'écraser. Laver, sécher et ciseler le persil.",
      "SAUTER LES CHAMPIGNONS : Faire chauffer le beurre dans une grande poêle ou sauteuse à feu vif. Le beurre doit mousser et commencer à colorer légèrement. Ajouter tous les champignons d'un coup. Les faire sauter vigoureusement pendant 5-7 minutes en remuant régulièrement. Ils vont d'abord rendre leur eau, puis celle-ci va s'évaporer et les champignons vont commencer à dorer. C'est ce qu'on veut !",
      "AJOUTER LES AROMATES : Baisser le feu à moyen. Ajouter les échalotes et l'ail. Faire suer 2-3 minutes en mélangeant jusqu'à ce que les échalotes soient translucides et parfumées. L'ail ne doit surtout pas brûler.",
      "DÉGLACER ET RÉDUIRE : Verser le vin blanc d'un coup. Gratter le fond de la poêle avec une spatule en bois pour décoller les sucs de cuisson (c'est le déglaçage - il apporte beaucoup de saveur). Laisser réduire à feu moyen jusqu'à ce que le liquide ait presque entièrement disparu, environ 3 minutes.",
      "CRÉMER : Verser la crème fraîche. Mélanger et laisser frémir à feu doux pendant 3-4 minutes. La sauce va légèrement épaissir et napper les champignons.",
      "FINIR ET SERVIR : Ajouter les 2/3 du persil ciselé, mélanger. Goûter et rectifier l'assaisonnement en sel et poivre. Servir immédiatement, parsemé du reste de persil. La sauce ne doit pas attendre car les champignons continuent à rendre de l'eau."
    ],
    conseils: "Idéale en automne avec les champignons frais des bois. Cèpes, girolles, pieds de mouton, trompettes de la mort se marient parfaitement. En toute saison, un mélange shiitakes + champignons de Paris fonctionne très bien. Accompagne parfaitement volailles, veau et porc.",
    variantes: ["Aux morilles (luxe suprême)", "Aux cèpes seuls", "Ajouter des lardons pour une version plus rustique"]
  },

  "sauce_aux_champignons": {
    nom: "Sauce aux Champignons",
    redirect: "sauce_forestiere"
  },

  "sauce_madere": {
    nom: "Sauce Madère",
    categorie: "sauce au vin",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Madère", quantite: "15 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "30 cl", type: "bouillon" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire suer les échalotes dans le beurre.",
      "Déglacer au Madère et réduire de moitié.",
      "Ajouter le fond de veau et réduire à consistance nappante.",
      "Monter au beurre froid.",
      "Passer au chinois, assaisonner."
    ],
    conseils: "Le Madère apporte une douceur caractéristique. Parfait avec les rognons, le foie et le filet de bœuf.",
    variantes: ["Au Porto", "Au Xérès"]
  },

  "sauce_au_porto": {
    nom: "Sauce au Porto",
    categorie: "sauce au vin",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Porto ruby", quantite: "20 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire suer les échalotes dans le beurre.",
      "Verser le Porto et réduire des 2/3.",
      "Ajouter le fond de veau, réduire de moitié.",
      "Incorporer la crème, laisser épaissir.",
      "Monter au beurre froid, assaisonner."
    ],
    conseils: "Le Porto ruby apporte des notes fruitées, le tawny des notes plus boisées. Excellent avec le magret et le foie gras.",
    variantes: ["Porto tawny", "Porto blanc (pour poissons)"]
  },

  "sauce_roquefort": {
    nom: "Sauce Roquefort",
    categorie: "sauce au fromage",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Roquefort", quantite: "100 g", type: "fromage" },
      { nom: "Crème fraîche épaisse", quantite: "20 cl", type: "produit laitier" },
      { nom: "Vin blanc sec", quantite: "5 cl", type: "alcool" },
      { nom: "Poivre", quantite: "à goût", type: "assaisonnement" },
      { nom: "Noix concassées", quantite: "2 c. à soupe", type: "fruit sec" }
    ],
    etapes: [
      "Émietter le roquefort.",
      "Chauffer la crème avec le vin blanc.",
      "Ajouter le roquefort et remuer jusqu'à fonte.",
      "Poivrer généreusement (pas de sel, le fromage suffit).",
      "Parsemer de noix au moment de servir."
    ],
    conseils: "Ne pas faire bouillir pour éviter que le fromage ne file. Accord parfait avec l'entrecôte.",
    variantes: ["Sauce au bleu d'Auvergne", "Sauce à la fourme d'Ambert"]
  },

  "sauce_au_bleu": {
    nom: "Sauce au Bleu",
    redirect: "sauce_roquefort"
  },

  "sauce_moutarde": {
    nom: "Sauce Moutarde",
    categorie: "sauce liée",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Moutarde de Dijon", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Vin blanc sec", quantite: "5 cl", type: "alcool" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire suer l'échalote ciselée dans le beurre.",
      "Déglacer au vin blanc, réduire.",
      "Ajouter la crème et laisser épaissir.",
      "Hors du feu, incorporer la moutarde (ne plus faire bouillir).",
      "Assaisonner et servir."
    ],
    conseils: "Ajouter la moutarde hors du feu pour préserver son piquant. Classique du lapin et du porc.",
    variantes: ["Moutarde à l'ancienne", "Moutarde au miel"]
  },

  "sauce_moutarde_a_l_ancienne": {
    nom: "Sauce Moutarde à l'Ancienne",
    categorie: "sauce liée",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Moutarde à l'ancienne", quantite: "4 c. à soupe", type: "condiment" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire suer l'échalote dans le beurre.",
      "Ajouter le fond et la crème, réduire légèrement.",
      "Incorporer la moutarde hors du feu.",
      "Servir aussitôt."
    ],
    conseils: "Les grains de moutarde apportent une texture agréable. Parfait avec le lapin et le porc.",
    variantes: ["Avec miel", "Avec estragon"]
  },

  "sauce_a_la_moutarde": {
    nom: "Sauce à la Moutarde",
    redirect: "sauce_moutarde"
  },

  "sauce_grand_veneur": {
    nom: "Sauce Grand Veneur",
    categorie: "sauce gibier",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "difficile",
    portions: 6,
    ingredients: [
      { nom: "Vin rouge corsé", quantite: "50 cl", type: "alcool" },
      { nom: "Fond de gibier", quantite: "50 cl", type: "bouillon" },
      { nom: "Vinaigre de vin", quantite: "5 cl", type: "assaisonnement" },
      { nom: "Gelée de groseilles", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Échalotes", quantite: "3", type: "aromate" },
      { nom: "Carottes", quantite: "1", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Baies de genièvre", quantite: "6", type: "épice" },
      { nom: "Poivre en grains", quantite: "10", type: "épice" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire revenir échalotes et carottes dans le beurre.",
      "Déglacer au vinaigre, réduire à sec.",
      "Ajouter le vin rouge, le bouquet garni, genièvre et poivre.",
      "Réduire des 2/3.",
      "Ajouter le fond de gibier, réduire de moitié.",
      "Passer au chinois en pressant.",
      "Incorporer la gelée de groseilles et la crème.",
      "Monter au beurre froid, rectifier l'assaisonnement."
    ],
    conseils: "La sauce emblématique du grand gibier. L'équilibre entre l'acidité et le sucré des groseilles est essentiel.",
    variantes: ["Avec sang de gibier", "Sauce poivrade (sans crème ni groseilles)"]
  },

  "sauce_poivrade": {
    nom: "Sauce Poivrade",
    categorie: "sauce gibier",
    temps_preparation: 20,
    temps_cuisson: 60,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Vin rouge", quantite: "30 cl", type: "alcool" },
      { nom: "Vinaigre de vin", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Fond de gibier ou veau", quantite: "50 cl", type: "bouillon" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Céleri", quantite: "1 branche", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Poivre en grains", quantite: "2 c. à soupe", type: "épice" },
      { nom: "Huile", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire revenir la mirepoix (carottes, oignon, céleri) dans l'huile.",
      "Déglacer au vinaigre, réduire à sec.",
      "Ajouter le vin et le poivre concassé, réduire de moitié.",
      "Incorporer le fond, ajouter le bouquet garni.",
      "Laisser mijoter 45 min.",
      "Passer au chinois, réduire si nécessaire.",
      "Monter au beurre froid."
    ],
    conseils: "Base de nombreuses sauces gibier. Le poivre est l'élément clé.",
    variantes: ["Sauce diane (crème, champignons)", "Sauce chevreuil (avec marinade)"]
  },

  "sauce_au_genievre": {
    nom: "Sauce au Genièvre",
    categorie: "sauce gibier",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Baies de genièvre", quantite: "15", type: "épice" },
      { nom: "Gin (facultatif)", quantite: "3 cl", type: "alcool" },
      { nom: "Fond de gibier ou veau", quantite: "30 cl", type: "bouillon" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Écraser légèrement les baies de genièvre.",
      "Faire suer les échalotes dans le beurre.",
      "Ajouter les baies et le gin, flamber.",
      "Verser le fond, réduire de moitié.",
      "Ajouter la crème, laisser épaissir.",
      "Passer ou non au chinois selon texture souhaitée."
    ],
    conseils: "Le genièvre se marie parfaitement avec le gibier. Le gin renforce les arômes sans être indispensable.",
    variantes: ["Avec airelles", "Sans crème"]
  },

  "sauce_aux_airelles": {
    nom: "Sauce aux Airelles",
    categorie: "sauce fruitée",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Airelles (fraîches ou surgelées)", quantite: "200 g", type: "fruit" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Vin rouge", quantite: "10 cl", type: "alcool" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" },
      { nom: "Cannelle", quantite: "1/2 bâton", type: "épice" }
    ],
    etapes: [
      "Cuire les airelles avec le sucre et le vin.",
      "Ajouter le zeste et la cannelle.",
      "Laisser compoter 10 min en remuant.",
      "Retirer la cannelle.",
      "Servir tiède ou froid."
    ],
    conseils: "Classique scandinave, parfait avec le gibier. La légère amertume des airelles équilibre les viandes riches.",
    variantes: ["Aux cranberries", "Au genièvre"]
  },

  "sauce_aux_cerises": {
    nom: "Sauce aux Cerises",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cerises dénoyautées", quantite: "250 g", type: "fruit" },
      { nom: "Vin rouge", quantite: "15 cl", type: "alcool" },
      { nom: "Fond de canard ou gibier", quantite: "15 cl", type: "bouillon" },
      { nom: "Sucre", quantite: "30 g", type: "sucrant" },
      { nom: "Vinaigre balsamique", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Pocher les cerises dans le vin et le sucre 10 min.",
      "Retirer les cerises, réduire le jus de moitié.",
      "Ajouter le fond, réduire encore.",
      "Ajouter le vinaigre balsamique.",
      "Monter au beurre, remettre les cerises.",
      "Servir aussitôt."
    ],
    conseils: "Mariage classique avec le canard et le gibier. Utiliser des cerises acides de préférence.",
    variantes: ["Aux griottes", "Au kirsch"]
  },

  "sauce_aux_griottes": {
    nom: "Sauce aux Griottes",
    redirect: "sauce_aux_cerises"
  },

  "sauce_bigarade": {
    nom: "Sauce Bigarade",
    categorie: "sauce agrumes",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Orange amère (ou 1 orange + 1 citron)", quantite: "2", type: "agrume" },
      { nom: "Fond de canard", quantite: "40 cl", type: "bouillon" },
      { nom: "Grand Marnier", quantite: "3 cl", type: "alcool" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" },
      { nom: "Vinaigre de vin", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Prélever les zestes en fines juliennes, blanchir 2 fois.",
      "Préparer un caramel avec sucre et vinaigre.",
      "Décuire au jus d'orange et au fond.",
      "Réduire de moitié.",
      "Ajouter le Grand Marnier et les zestes.",
      "Monter au beurre froid."
    ],
    conseils: "La sauce classique du canard à l'orange. L'équilibre sucré-acide est crucial.",
    variantes: ["À l'orange sanguine", "Au kumquat"]
  },

  "sauce_a_l_orange": {
    nom: "Sauce à l'Orange",
    redirect: "sauce_bigarade"
  },

  // ============================================
  // BEURRES COMPOSÉS
  // ============================================

  "beurre_maitre_d_hotel": {
    nom: "Beurre Maître d'Hôtel",
    categorie: "beurre composé",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre doux de qualité", quantite: "200 g", type: "produit laitier" },
      { nom: "Persil plat", quantite: "1 bouquet (environ 30 g)", type: "herbe" },
      { nom: "Jus de citron", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Sel fin", quantite: "1 c. à café rase", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "5-6 tours", type: "assaisonnement" }
    ],
    etapes: [
      "PRÉPARER LE BEURRE POMMADE : Sortir le beurre du réfrigérateur 2 à 3 heures à l'avance. Il doit être à température ambiante (environ 20°C), mou et malléable comme une pommade, mais pas fondu. Pour accélérer : couper le beurre en petits dés et les écraser à la fourchette, ou passer 10 secondes au micro-ondes en surveillant.",
      "CISELER LE PERSIL : Laver et sécher le persil. Détacher les feuilles des tiges (garder les tiges pour un bouillon). Rassembler les feuilles en boule serrée et les émincer très finement au couteau bien aiguisé en mouvements de balancier. Vous devez obtenir environ 4 c. à soupe de persil finement ciselé.",
      "MÉLANGER : Dans un bol, travailler le beurre mou à la fourchette ou à la spatule jusqu'à obtenir une consistance crémeuse et homogène. Incorporer le persil ciselé, le jus de citron, le sel et le poivre. Mélanger vigoureusement pour répartir uniformément tous les ingrédients.",
      "FORMER LE BOUDIN : Déposer le mélange sur une feuille de film alimentaire. Former un boudin d'environ 3-4 cm de diamètre en roulant et en serrant les extrémités comme un bonbon. Faire rouler sur le plan de travail pour obtenir une forme régulière.",
      "RAFFERMIR : Placer au réfrigérateur minimum 2 heures pour que le beurre raffermisse et que les saveurs se mélangent. Idéalement, préparer la veille.",
      "SERVIR : Couper des rondelles de 1 cm d'épaisseur. Déposer une rondelle sur chaque viande juste sortie du feu, le beurre va fondre doucement et napper la viande."
    ],
    conseils: "Le classique des beurres composés. Le persil plat a plus de goût que le frisé. Se conserve 1 semaine au frigo, 3 mois au congélateur. Pour un service élégant, on peut aussi mouler le beurre dans des petits moules en silicone.",
    variantes: ["Beurre d'escargot (+ 2 gousses d'ail écrasées)", "Beurre Bercy (+ 2 échalotes ciselées revenues dans 5cl de vin blanc réduit)"]
  },

  "beurre_persille": {
    nom: "Beurre Persillé",
    redirect: "beurre_maitre_d_hotel"
  },

  "beurre_cafe_de_paris": {
    nom: "Beurre Café de Paris",
    categorie: "beurre composé",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre doux", quantite: "250 g", type: "produit laitier" },
      { nom: "Échalote", quantite: "1 petite", type: "aromate" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Câpres", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Anchois à l'huile", quantite: "2 filets", type: "poisson" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à café", type: "condiment" },
      { nom: "Curry en poudre", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Paprika doux", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Persil, ciboulette, estragon", quantite: "3 c. à soupe total", type: "herbe" },
      { nom: "Cognac", quantite: "1 c. à soupe", type: "alcool" },
      { nom: "Sauce Worcestershire", quantite: "1 c. à café", type: "condiment" }
    ],
    etapes: [
      "PRÉPARER LE BEURRE POMMADE : Sortir le beurre 2-3h à l'avance. Il doit être mou et malléable à température ambiante (environ 20°C), comme une pommade, mais surtout pas fondu. Astuce rapide : couper en petits dés et écraser à la fourchette.",
      "HACHER LES AROMATES : Peler et hacher très finement l'échalote (petits dés de 2mm). Écraser et hacher finement l'ail. Égoutter et hacher les câpres. Écraser les anchois à la fourchette jusqu'à obtenir une pâte.",
      "CISELER LES HERBES : Laver, sécher et ciseler finement le persil, la ciboulette et l'estragon. Mélanger les trois herbes ensemble.",
      "ASSEMBLER : Dans un grand bol, travailler le beurre mou à la fourchette. Incorporer progressivement : l'échalote, l'ail, les câpres, la pâte d'anchois, les herbes, la moutarde, le curry, le paprika, le cognac et la Worcestershire. Mélanger énergiquement jusqu'à ce que tous les ingrédients soient parfaitement répartis.",
      "FORMER : Déposer le mélange sur du film alimentaire. Rouler en boudin de 4 cm de diamètre en serrant les extrémités. Faire rouler sur le plan de travail pour régulariser la forme.",
      "RAFFERMIR ET SERVIR : Réfrigérer au moins 3 heures, idéalement une nuit pour que les saveurs se développent. Couper des rondelles de 1,5 cm et les déposer sur l'entrecôte brûlante."
    ],
    conseils: "Recette secrète des restaurants genevois depuis 1930. Chaque établissement a sa version. Le secret est l'équilibre entre toutes les saveurs. Se conserve 1 semaine au frigo, 2 mois au congélateur.",
    variantes: ["Version sans anchois pour les allergiques", "Ajouter du ketchup pour une version américanisée"]
  },

  "beurre_aux_herbes": {
    nom: "Beurre aux Herbes",
    categorie: "beurre composé",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre pommade", quantite: "200 g", type: "produit laitier" },
      { nom: "Thym frais", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Romarin frais", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Ciseler finement toutes les herbes et l'ail.",
      "Incorporer au beurre pommade.",
      "Assaisonner.",
      "Former en boudin et réfrigérer."
    ],
    conseils: "Adapter les herbes selon la viande : romarin pour l'agneau, estragon pour le poulet.",
    variantes: ["Beurre à l'ail (ail uniquement)", "Beurre provençal"]
  },

  "beurre_a_l_ail": {
    nom: "Beurre à l'Ail",
    categorie: "beurre composé",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre pommade", quantite: "200 g", type: "produit laitier" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Persil plat", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Hacher finement l'ail et le persil.",
      "Mélanger au beurre pommade.",
      "Assaisonner.",
      "Former en boudin, réfrigérer."
    ],
    conseils: "Pour un ail plus doux, le blanchir 1 minute avant de l'utiliser.",
    variantes: ["Beurre d'escargot (+ échalote)"]
  },

  "beurre_noisette": {
    nom: "Beurre Noisette",
    categorie: "beurre cuit",
    temps_preparation: 2,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire fondre le beurre à feu moyen.",
      "Laisser mousser, puis colorer.",
      "Quand il prend une couleur noisette et sent la noisette, c'est prêt.",
      "Utiliser immédiatement."
    ],
    conseils: "Surveiller constamment, le beurre passe très vite de noisette à brûlé. Parfait pour les poissons et la raie.",
    variantes: ["Beurre noir (plus foncé, + câpres)", "Beurre meunière (+ citron, persil)"]
  },

  "beurre_noir": {
    nom: "Beurre Noir aux Câpres",
    categorie: "beurre cuit",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Faire le beurre noisette jusqu'à coloration brun foncé.",
      "Attention, il ne doit pas brûler.",
      "Ajouter les câpres et le persil.",
      "Déglacer au vinaigre (attention aux projections).",
      "Verser sur la viande ou le poisson."
    ],
    conseils: "Classique de la cervelle et de la raie. Le nom est trompeur : un vrai beurre noir serait brûlé.",
    variantes: ["Sans vinaigre", "Avec citron"]
  },

  "beurre_noir_aux_capres": {
    nom: "Beurre Noir aux Câpres",
    redirect: "beurre_noir"
  },

  "beurre_de_sauge": {
    nom: "Beurre de Sauge",
    categorie: "beurre cuit",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Feuilles de sauge", quantite: "20", type: "herbe" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire mousser le beurre jusqu'à coloration noisette.",
      "Ajouter les feuilles de sauge entières.",
      "Laisser frire jusqu'à ce qu'elles soient croustillantes.",
      "Saler et verser sur les pâtes ou la viande."
    ],
    conseils: "Sauce express italienne pour les gnocchis, raviolis et scaloppine de veau.",
    variantes: ["Avec ail", "Avec parmesan"]
  },

  // ============================================
  // SAUCES ÉMULSIONNÉES À FROID
  // ============================================

  "sauce_tartare": {
    nom: "Sauce Tartare",
    categorie: "sauce froide",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mayonnaise", quantite: "20 cl", type: "sauce" },
      { nom: "Cornichons", quantite: "4", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Oignon ou échalote", quantite: "1", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Ciboulette", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Estragon", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Moutarde", quantite: "1 c. à café", type: "condiment" }
    ],
    etapes: [
      "Hacher finement cornichons, câpres, oignon et herbes.",
      "Mélanger à la mayonnaise.",
      "Ajouter la moutarde, bien mélanger.",
      "Réfrigérer 1h pour développer les saveurs."
    ],
    conseils: "Accompagnement indispensable des fritures et du tartare de bœuf. Se conserve 3 jours au frais.",
    variantes: ["Sauce rémoulade (+ anchois)", "Version allégée au yaourt"]
  },

  "sauce_gribiche": {
    nom: "Sauce Gribiche",
    categorie: "sauce froide",
    temps_preparation: 20,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Œufs durs", quantite: "3", type: "œuf" },
      { nom: "Huile neutre", quantite: "25 cl", type: "matière grasse" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Cornichons", quantite: "4", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Persil, cerfeuil, estragon", quantite: "3 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Écraser les jaunes d'œufs avec la moutarde.",
      "Monter à l'huile comme une mayonnaise.",
      "Ajouter le vinaigre.",
      "Hacher les blancs, cornichons, câpres et herbes.",
      "Incorporer au mélange.",
      "Assaisonner."
    ],
    conseils: "Classique de la tête de veau et du pot-au-feu. Plus rustique qu'une mayonnaise.",
    variantes: ["Sans moutarde", "Avec anchois"]
  },

  "aioli": {
    nom: "Aïoli",
    categorie: "sauce froide",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Ail", quantite: "6 gousses", type: "aromate" },
      { nom: "Jaune d'œuf", quantite: "1", type: "œuf" },
      { nom: "Huile d'olive", quantite: "25 cl", type: "matière grasse" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Piler l'ail avec une pincée de sel au mortier.",
      "Ajouter le jaune d'œuf, bien mélanger.",
      "Incorporer l'huile en filet très fin, en tournant constamment.",
      "Ajouter le citron à la fin.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "La vraie aïoli provençale se fait au mortier. Accompagnement traditionnel du grand aïoli et de la bourride.",
    variantes: ["Rouille (+ safran, piment)", "Aïoli au safran"]
  },

  "alioli": {
    nom: "Alioli",
    redirect: "aioli"
  },

  "chimichurri": {
    nom: "Chimichurri",
    categorie: "sauce froide",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Persil plat", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Origan frais ou séché", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Piment rouge", quantite: "1", type: "épice" },
      { nom: "Huile d'olive", quantite: "15 cl", type: "matière grasse" },
      { nom: "Vinaigre de vin rouge", quantite: "4 c. à soupe", type: "assaisonnement" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Hacher finement persil, ail et piment.",
      "Mélanger avec l'origan.",
      "Ajouter l'huile et le vinaigre.",
      "Saler et laisser reposer 2h minimum.",
      "Servir à température ambiante."
    ],
    conseils: "Sauce nationale argentine pour l'asado. Doit reposer pour développer ses arômes. Se conserve 1 semaine au frais.",
    variantes: ["Chimichurri rojo (+ poivron)", "Chimichurri avec coriandre"]
  },

  "sauce_chimichurri": {
    nom: "Sauce Chimichurri",
    redirect: "chimichurri"
  },

  // ============================================
  // SAUCES ASIATIQUES
  // ============================================

  "sauce_teriyaki": {
    nom: "Sauce Teriyaki",
    categorie: "sauce asiatique",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Mirin", quantite: "5 cl", type: "alcool" },
      { nom: "Saké", quantite: "5 cl", type: "alcool" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Gingembre frais", quantite: "2 cm", type: "aromate" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition en remuant.",
      "Laisser réduire 5-10 min jusqu'à consistance sirupeuse.",
      "Filtrer le gingembre ou le laisser."
    ],
    conseils: "La sauce doit napper la cuillère. Parfaite pour laquer poulet, saumon ou bœuf.",
    variantes: ["Sans alcool", "Avec ail", "Épicée"]
  },

  "sauce_yakitori": {
    nom: "Sauce Yakitori",
    redirect: "sauce_teriyaki"
  },

  "sauce_satay": {
    nom: "Sauce Satay",
    categorie: "sauce asiatique",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Beurre de cacahuète", quantite: "150 g", type: "fruit sec" },
      { nom: "Lait de coco", quantite: "20 cl", type: "produit laitier" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Jus de citron vert", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Sucre de palme ou cassonade", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Piment rouge", quantite: "1", type: "épice" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Mixer ou hacher ail et piment.",
      "Faire chauffer le lait de coco.",
      "Ajouter le beurre de cacahuète, bien mélanger.",
      "Incorporer la sauce soja, le sucre, le citron, l'ail et le piment.",
      "Laisser épaissir légèrement.",
      "Servir tiède ou à température ambiante."
    ],
    conseils: "Sauce indonésienne classique pour les brochettes. Ajuster le piment selon les goûts.",
    variantes: ["Sauce thaï (+ citronnelle)", "Plus crémeuse"]
  },

  "sauce_hoisin": {
    nom: "Sauce Hoisin Maison",
    categorie: "sauce asiatique",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pâte de soja ou miso", quantite: "4 c. à soupe", type: "assaisonnement" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Vinaigre de riz", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "5 épices chinois", quantite: "1/4 c. à café", type: "épice" },
      { nom: "Piment", quantite: "selon goût", type: "épice" }
    ],
    etapes: [
      "Mixer tous les ingrédients jusqu'à consistance lisse.",
      "Chauffer légèrement pour homogénéiser.",
      "Ajuster l'assaisonnement.",
      "Laisser refroidir avant utilisation."
    ],
    conseils: "Sauce sucrée-épicée indispensable pour le canard laqué et le porc char siu.",
    variantes: ["Plus sucrée", "Plus épicée"]
  },

  "sauce_au_miel_et_soja": {
    nom: "Sauce au Miel et Soja",
    categorie: "sauce asiatique",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Miel", quantite: "4 c. à soupe", type: "sucrant" },
      { nom: "Sauce soja", quantite: "4 c. à soupe", type: "assaisonnement" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Gingembre", quantite: "1 c. à café", type: "aromate" },
      { nom: "Huile de sésame", quantite: "1 c. à café", type: "matière grasse" }
    ],
    etapes: [
      "Mélanger le miel et la sauce soja.",
      "Ajouter l'ail pressé et le gingembre râpé.",
      "Chauffer légèrement pour dissoudre le miel.",
      "Finir avec l'huile de sésame."
    ],
    conseils: "Excellent pour laquer les travers de porc ou le poulet.",
    variantes: ["Avec 5 épices", "Avec piment"]
  },

  // ============================================
  // SAUCES BBQ ET AMÉRICAINES
  // ============================================

  "sauce_bbq": {
    nom: "Sauce BBQ Maison",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Ketchup", quantite: "25 cl", type: "condiment" },
      { nom: "Vinaigre de cidre", quantite: "6 cl", type: "assaisonnement" },
      { nom: "Cassonade", quantite: "100 g", type: "sucrant" },
      { nom: "Mélasse", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Worcestershire", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Moutarde", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Paprika fumé", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Ail en poudre", quantite: "1 c. à café", type: "épice" },
      { nom: "Oignon en poudre", quantite: "1 c. à café", type: "épice" },
      { nom: "Cayenne", quantite: "1/4 c. à café", type: "épice" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition en remuant.",
      "Baisser le feu et laisser mijoter 20-30 min.",
      "La sauce doit épaissir et devenir brillante.",
      "Laisser refroidir et ajuster l'assaisonnement."
    ],
    conseils: "Se conserve plusieurs semaines au réfrigérateur. Idéale pour les ribs et le pulled pork.",
    variantes: ["Kansas City (plus sucrée)", "Texas (plus épicée)", "Carolina (vinaigre dominant)"]
  },

  "sauce_bbq_americaine": {
    nom: "Sauce BBQ Américaine",
    redirect: "sauce_bbq"
  },

  "sauce_bbq_texas": {
    nom: "Sauce BBQ Texane",
    redirect: "sauce_bbq"
  },

  "sauce_barbecue": {
    nom: "Sauce Barbecue",
    redirect: "sauce_bbq"
  },

  "sauce_barbecue_maison": {
    nom: "Sauce Barbecue Maison",
    redirect: "sauce_bbq"
  },

  "gravy": {
    nom: "Gravy",
    categorie: "sauce américaine",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson de la viande", quantite: "30 cl", type: "bouillon" },
      { nom: "Fond de volaille ou bœuf", quantite: "20 cl", type: "bouillon" },
      { nom: "Farine", quantite: "2 c. à soupe", type: "farine" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire un roux avec le beurre et la farine.",
      "Mouiller progressivement avec les jus.",
      "Remuer pour éviter les grumeaux.",
      "Laisser épaissir à la consistance souhaitée.",
      "Assaisonner."
    ],
    conseils: "La sauce américaine par excellence. Doit être onctueuse et brillante.",
    variantes: ["Mushroom gravy", "Onion gravy"]
  },

  // ============================================
  // SAUCES ITALIENNES
  // ============================================

  "gremolata": {
    nom: "Gremolata",
    categorie: "condiment italien",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Persil plat", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Zeste de citron", quantite: "2", type: "agrume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Ciseler finement le persil.",
      "Hacher l'ail très fin.",
      "Prélever les zestes de citron et les hacher.",
      "Mélanger le tout.",
      "Parsemer sur l'osso buco au dernier moment."
    ],
    conseils: "Condiment milanais frais qui réveille l'osso buco et les viandes braisées.",
    variantes: ["Avec orange", "Avec anchois"]
  },

  "sauce_tonnato": {
    nom: "Sauce Tonnato",
    categorie: "sauce italienne",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Thon à l'huile", quantite: "150 g", type: "poisson" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Anchois", quantite: "4 filets", type: "poisson" },
      { nom: "Mayonnaise", quantite: "15 cl", type: "sauce" },
      { nom: "Jus de citron", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Mixer le thon égoutté avec les anchois et les câpres.",
      "Ajouter la mayonnaise et mixer à nouveau.",
      "Incorporer le citron et l'huile pour détendre.",
      "Passer au tamis pour une texture lisse.",
      "Réfrigérer 2h minimum."
    ],
    conseils: "Sauce du vitello tonnato. Doit être onctueuse et napper le veau finement tranché.",
    variantes: ["Plus légère (moins de mayo)", "Sans anchois"]
  },

  "sauce_piccata": {
    nom: "Sauce Piccata",
    categorie: "sauce italienne",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Jus de citron", quantite: "4 c. à soupe", type: "agrume" },
      { nom: "Câpres", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "60 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Déglacer la poêle au vin blanc après avoir cuit la viande.",
      "Ajouter le jus de citron et le fond.",
      "Réduire de moitié.",
      "Incorporer les câpres.",
      "Monter au beurre froid.",
      "Parsemer de persil."
    ],
    conseils: "Sauce express pour les escalopes de veau ou de poulet. L'acidité du citron est la clé.",
    variantes: ["Sauce aux câpres simple", "Avec échalotes"]
  },

  "sauce_aux_capres": {
    nom: "Sauce aux Câpres",
    redirect: "sauce_piccata"
  },

  // ============================================
  // SAUCES CRÉMEUSES
  // ============================================

  "sauce_a_la_creme": {
    nom: "Sauce à la Crème",
    categorie: "sauce liée",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche épaisse", quantite: "25 cl", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Vin blanc sec", quantite: "10 cl", type: "alcool" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Sel, poivre, muscade", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire suer l'échalote dans le beurre.",
      "Déglacer au vin blanc, réduire à sec.",
      "Ajouter la crème et laisser réduire d'1/3.",
      "Assaisonner avec sel, poivre et muscade."
    ],
    conseils: "Base de nombreuses variantes. Ajoutez champignons, herbes ou épices selon l'accompagnement.",
    variantes: ["Aux herbes", "Aux champignons", "Au curry"]
  },

  "sauce_creme": {
    nom: "Sauce Crème",
    redirect: "sauce_a_la_creme"
  },

  "sauce_aux_morilles": {
    nom: "Sauce aux Morilles",
    categorie: "sauce gastronomique",
    temps_preparation: 20,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Morilles séchées", quantite: "40 g", type: "champignon" },
      { nom: "Crème fraîche épaisse", quantite: "25 cl", type: "produit laitier" },
      { nom: "Vin jaune ou blanc sec", quantite: "10 cl", type: "alcool" },
      { nom: "Fond de veau ou volaille", quantite: "15 cl", type: "bouillon" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Réhydrater les morilles 30 min dans l'eau tiède.",
      "Les rincer soigneusement (sable dans les alvéoles).",
      "Filtrer l'eau de trempage.",
      "Faire suer les échalotes dans le beurre.",
      "Ajouter les morilles, faire revenir 5 min.",
      "Déglacer au vin et à l'eau de trempage filtrée.",
      "Ajouter le fond, réduire de moitié.",
      "Incorporer la crème, laisser épaissir.",
      "Assaisonner."
    ],
    conseils: "Les morilles sont le champignon le plus prestigieux. Le vin jaune du Jura crée un accord magique.",
    variantes: ["Au vin jaune", "Au cognac"]
  },

  "sauce_creme_et_morilles": {
    nom: "Sauce Crème et Morilles",
    redirect: "sauce_aux_morilles"
  },

  "sauce_aux_cepes": {
    nom: "Sauce aux Cèpes",
    categorie: "sauce aux champignons",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais ou séchés", quantite: "200 g frais ou 30 g séchés", type: "champignon" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Si séchés, réhydrater 20 min, filtrer l'eau.",
      "Émincer les cèpes.",
      "Les faire sauter à feu vif dans le beurre.",
      "Ajouter échalotes et ail, faire suer.",
      "Mouiller avec l'eau de trempage si utilisée.",
      "Ajouter la crème, réduire.",
      "Parsemer de persil."
    ],
    conseils: "Les cèpes frais d'automne sont incomparables. Parfait avec le bœuf et le veau.",
    variantes: ["Aux girolles", "Mix de champignons"]
  },

  "sauce_aux_girolles": {
    nom: "Sauce aux Girolles",
    categorie: "sauce aux champignons",
    redirect: "sauce_aux_cepes"
  },

  // ============================================
  // JUS ET RÉDUCTIONS
  // ============================================

  "jus_de_veau": {
    nom: "Jus de Veau",
    categorie: "fond",
    temps_preparation: 30,
    temps_cuisson: 180,
    difficulte: "moyen",
    portions: 10,
    ingredients: [
      { nom: "Os de veau", quantite: "2 kg", type: "viande" },
      { nom: "Carottes", quantite: "3", type: "légume" },
      { nom: "Oignons", quantite: "2", type: "aromate" },
      { nom: "Céleri", quantite: "2 branches", type: "légume" },
      { nom: "Tomates", quantite: "2", type: "légume" },
      { nom: "Concentré de tomate", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vin blanc", quantite: "25 cl", type: "alcool" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Eau", quantite: "4 L", type: "liquide" }
    ],
    etapes: [
      "Faire colorer les os au four à 220°C pendant 30 min.",
      "Ajouter la mirepoix (carottes, oignons, céleri) à mi-cuisson.",
      "Transférer dans une marmite avec les tomates et le concentré.",
      "Déglacer le plat au vin blanc, ajouter à la marmite.",
      "Couvrir d'eau froide, porter à ébullition.",
      "Écumer régulièrement, ajouter le bouquet garni.",
      "Laisser mijoter 3h à feu très doux.",
      "Filtrer, dégraisser et réduire si souhaité."
    ],
    conseils: "Base de la grande cuisine française. Se congèle parfaitement en portions.",
    variantes: ["Fond brun de bœuf", "Fond de volaille"]
  },

  "jus_de_veau_corse": {
    nom: "Jus de Veau Corsé",
    redirect: "jus_de_veau"
  },

  "reduction_de_porto": {
    nom: "Réduction de Porto",
    categorie: "réduction",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Porto ruby", quantite: "30 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" }
    ],
    etapes: [
      "Verser le Porto dans une casserole.",
      "Réduire des 2/3 à feu moyen.",
      "Ajouter le fond de veau.",
      "Réduire encore jusqu'à consistance sirupeuse.",
      "Utiliser pour napper ou déglacer."
    ],
    conseils: "Une réduction puissante qui sublime les viandes rouges et le foie gras.",
    variantes: ["Au Madère", "Au Banyuls"]
  },

  "jus_corse_au_porto": {
    nom: "Jus Corsé au Porto",
    redirect: "reduction_de_porto"
  },

  "jus_naturel": {
    nom: "Jus Naturel",
    categorie: "jus",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson de la viande", quantite: "tout", type: "jus" },
      { nom: "Vin blanc ou rouge", quantite: "5 cl", type: "alcool" },
      { nom: "Fond de veau ou volaille", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Retirer la viande de la poêle, garder au chaud.",
      "Dégraisser partiellement le jus.",
      "Déglacer au vin en grattant les sucs.",
      "Ajouter le fond, réduire légèrement.",
      "Monter au beurre froid hors du feu.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "Le jus le plus simple et souvent le meilleur. Respecte le goût de la viande.",
    variantes: ["Au cognac", "Aux herbes"]
  },

  "jus_de_cuisson": {
    nom: "Jus de Cuisson",
    redirect: "jus_naturel"
  },

  "jus_de_roti": {
    nom: "Jus de Rôti",
    redirect: "jus_naturel"
  },

  // ============================================
  // SAUCES RÉGIONALES FRANÇAISES
  // ============================================

  "sauce_normande": {
    nom: "Sauce Normande",
    categorie: "sauce régionale",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cidre brut", quantite: "20 cl", type: "alcool" },
      { nom: "Crème fraîche d'Isigny", quantite: "20 cl", type: "produit laitier" },
      { nom: "Calvados", quantite: "3 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Pomme", quantite: "1", type: "fruit" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire suer les échalotes dans le beurre.",
      "Déglacer au cidre, réduire de moitié.",
      "Flamber au Calvados.",
      "Ajouter la crème, laisser épaissir.",
      "Ajouter la pomme en dés, cuire 2 min."
    ],
    conseils: "Sauce emblématique de Normandie. Parfaite avec le porc, le poulet et la sole.",
    variantes: ["Sans pomme", "Avec champignons"]
  },

  "sauce_au_cidre": {
    nom: "Sauce au Cidre",
    redirect: "sauce_normande"
  },

  "sauce_basquaise": {
    nom: "Sauce Basquaise",
    categorie: "sauce régionale",
    temps_preparation: 20,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Poivrons (rouge, vert, jaune)", quantite: "3", type: "légume" },
      { nom: "Tomates", quantite: "400 g", type: "légume" },
      { nom: "Oignon", quantite: "2", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Piment d'Espelette", quantite: "1 c. à café", type: "épice" },
      { nom: "Jambon de Bayonne", quantite: "100 g", type: "charcuterie" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Thym", quantite: "1 branche", type: "herbe" }
    ],
    etapes: [
      "Couper les poivrons en lanières.",
      "Faire revenir oignons et ail dans l'huile.",
      "Ajouter les poivrons, faire suer 10 min.",
      "Incorporer les tomates concassées.",
      "Ajouter thym et piment d'Espelette.",
      "Laisser mijoter 20 min.",
      "Ajouter le jambon en lanières à la fin."
    ],
    conseils: "Base de la piperade et du poulet basquaise. Le piment d'Espelette est indispensable.",
    variantes: ["Sans jambon", "Plus pimentée"]
  },

  "sauce_lyonnaise": {
    nom: "Sauce Lyonnaise",
    categorie: "sauce régionale",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons", quantite: "4 gros", type: "aromate" },
      { nom: "Vinaigre de vin", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Émincer finement les oignons.",
      "Les faire fondre dans le beurre à feu doux 15 min.",
      "Déglacer au vinaigre, réduire à sec.",
      "Ajouter le vin, réduire de moitié.",
      "Mouiller avec le fond, réduire légèrement.",
      "Assaisonner."
    ],
    conseils: "La sauce des bouchons lyonnais. Les oignons doivent être fondants mais pas colorés.",
    variantes: ["Au vin rouge", "Avec crème"]
  },

  "sauce_provencale": {
    nom: "Sauce Provençale",
    categorie: "sauce régionale",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomates mûres", quantite: "1 kg", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "matière grasse" },
      { nom: "Olives noires", quantite: "100 g", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Herbes de Provence", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Basilic frais", quantite: "1 bouquet", type: "herbe" }
    ],
    etapes: [
      "Monder et concasser les tomates.",
      "Faire revenir l'oignon émincé dans l'huile.",
      "Ajouter l'ail, les tomates et les herbes.",
      "Laisser compoter 25 min.",
      "Ajouter olives et câpres.",
      "Parsemer de basilic ciselé."
    ],
    conseils: "L'été en pot ! Utiliser des tomates bien mûres en saison.",
    variantes: ["Avec anchois", "Sans olives"]
  },

  // ============================================
  // SAUCES ESPAGNOLES
  // ============================================

  "sauce_romesco": {
    nom: "Sauce Romesco",
    categorie: "sauce espagnole",
    temps_preparation: 20,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Poivrons rouges grillés", quantite: "2", type: "légume" },
      { nom: "Tomates", quantite: "2", type: "légume" },
      { nom: "Amandes", quantite: "50 g", type: "fruit sec" },
      { nom: "Noisettes", quantite: "30 g", type: "fruit sec" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Piment nora ou pimentón", quantite: "2 c. à café", type: "épice" },
      { nom: "Vinaigre de Xérès", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Huile d'olive", quantite: "15 cl", type: "matière grasse" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Griller les tomates, l'ail et les fruits secs à sec.",
      "Peler les poivrons et tomates.",
      "Mixer tous les ingrédients sauf l'huile.",
      "Incorporer l'huile en filet.",
      "Ajuster la consistance et l'assaisonnement."
    ],
    conseils: "Sauce catalane traditionnelle pour les calçots et les grillades. Se garde 1 semaine.",
    variantes: ["Plus pimentée", "Avec pain grillé"]
  },

  "alioli_espagnol": {
    nom: "Alioli Espagnol",
    redirect: "aioli"
  },

  // ============================================
  // SAUCES DIVERSES
  // ============================================

  "sauce_blanquette": {
    nom: "Sauce Blanquette",
    categorie: "sauce liée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Bouillon de cuisson de la blanquette", quantite: "50 cl", type: "bouillon" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Jaunes d'œufs", quantite: "2", type: "œuf" },
      { nom: "Jus de citron", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Farine", quantite: "30 g", type: "farine" },
      { nom: "Muscade", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Faire un roux blanc avec beurre et farine.",
      "Mouiller avec le bouillon filtré.",
      "Cuire 10 min en remuant.",
      "Mélanger crème et jaunes d'œufs.",
      "Hors du feu, incorporer la liaison.",
      "Ajouter le citron et la muscade.",
      "Ne plus faire bouillir."
    ],
    conseils: "La sauce doit être crémeuse et acidulée. La liaison finale apporte l'onctuosité.",
    variantes: ["Sans liaison", "Avec champignons"]
  },

  "sauce_poulette": {
    nom: "Sauce Poulette",
    categorie: "sauce liée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Fond de volaille", quantite: "30 cl", type: "bouillon" },
      { nom: "Champignons de Paris", quantite: "150 g", type: "champignon" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Jaune d'œuf", quantite: "1", type: "œuf" },
      { nom: "Jus de citron", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Émincer et faire sauter les champignons.",
      "Ajouter le fond, réduire légèrement.",
      "Incorporer la crème.",
      "Mélanger jaune d'œuf et citron.",
      "Lier hors du feu.",
      "Parsemer de persil."
    ],
    conseils: "Sauce classique pour la volaille pochée et les ris de veau.",
    variantes: ["Sans champignons", "Sauce suprême (sans citron)"]
  },

  "sauce_supreme": {
    nom: "Sauce Suprême",
    redirect: "sauce_poulette"
  },

  "sauce_robert": {
    nom: "Sauce Robert",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons", quantite: "3", type: "aromate" },
      { nom: "Vin blanc", quantite: "15 cl", type: "alcool" },
      { nom: "Vinaigre", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 pincée", type: "sucrant" }
    ],
    etapes: [
      "Émincer les oignons et les faire fondre dans le beurre.",
      "Déglacer au vin et vinaigre, réduire.",
      "Ajouter le fond, réduire de moitié.",
      "Hors du feu, incorporer la moutarde et le sucre.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "Sauce traditionnelle pour le porc grillé. La moutarde ne doit pas cuire.",
    variantes: ["Sauce charcutière (+ cornichons)"]
  },

  "sauce_charcutiere": {
    nom: "Sauce Charcutière",
    categorie: "sauce classique",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons", quantite: "2", type: "aromate" },
      { nom: "Cornichons", quantite: "6", type: "condiment" },
      { nom: "Vin blanc", quantite: "15 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Émincer les oignons et les faire fondre.",
      "Déglacer au vin, réduire.",
      "Ajouter le fond, réduire de moitié.",
      "Hors du feu, incorporer la moutarde.",
      "Ajouter les cornichons en julienne."
    ],
    conseils: "La sauce traditionnelle des côtelettes de porc. Les cornichons ajoutent du croquant.",
    variantes: ["Avec câpres"]
  },

  "sauce_au_curry": {
    nom: "Sauce au Curry",
    categorie: "sauce exotique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème de coco", quantite: "20 cl", type: "produit laitier" },
      { nom: "Curry en poudre", quantite: "2 c. à soupe", type: "épice" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Gingembre", quantite: "2 cm", type: "aromate" },
      { nom: "Tomates concassées", quantite: "15 cl", type: "légume" },
      { nom: "Huile", quantite: "2 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Faire revenir oignon, ail et gingembre.",
      "Ajouter le curry, faire revenir 1 min.",
      "Incorporer les tomates.",
      "Verser la crème de coco.",
      "Laisser mijoter 10 min."
    ],
    conseils: "Adaptable à tous les types de curry : madras, tikka, korma...",
    variantes: ["Curry rouge thaï", "Curry vert"]
  },

  "sauce_curry": {
    nom: "Sauce Curry",
    redirect: "sauce_au_curry"
  },

  "sauce_stroganoff": {
    nom: "Sauce Stroganoff",
    categorie: "sauce internationale",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons", quantite: "200 g", type: "champignon" },
      { nom: "Oignon", quantite: "1", type: "aromate" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Paprika", quantite: "1 c. à café", type: "épice" },
      { nom: "Cognac", quantite: "2 c. à soupe", type: "alcool" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire sauter les champignons émincés.",
      "Ajouter l'oignon, faire suer.",
      "Flamber au cognac.",
      "Incorporer la crème et le paprika.",
      "Laisser épaissir.",
      "Ajouter la moutarde hors du feu."
    ],
    conseils: "Sauce russe classique pour le bœuf stroganoff. Le paprika lui donne sa couleur.",
    variantes: ["Avec cornichons russes", "Plus crémeuse"]
  },

  "sauce_vierge": {
    nom: "Sauce Vierge",
    categorie: "sauce froide",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates bien mûres", quantite: "3", type: "légume" },
      { nom: "Huile d'olive vierge extra", quantite: "10 cl", type: "matière grasse" },
      { nom: "Basilic frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Monder, épépiner et concasser les tomates.",
      "Ciseler le basilic et hacher l'ail.",
      "Mélanger tous les ingrédients.",
      "Laisser mariner 30 min à température ambiante.",
      "Servir tiède ou à température."
    ],
    conseils: "Sauce estivale fraîche pour poissons et viandes blanches. Qualité de l'huile essentielle.",
    variantes: ["Avec olives", "Avec coriandre"]
  },

  "sauce_vierge_aux_herbes": {
    nom: "Sauce Vierge aux Herbes",
    redirect: "sauce_vierge"
  },

  "sauce_ravigote": {
    nom: "Sauce Ravigote",
    categorie: "sauce froide",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile de tournesol", quantite: "15 cl", type: "matière grasse" },
      { nom: "Vinaigre de vin", quantite: "3 c. à soupe", type: "assaisonnement" },
      { nom: "Moutarde", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Cornichons", quantite: "3", type: "condiment" },
      { nom: "Persil, cerfeuil, estragon, ciboulette", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Faire une vinaigrette avec huile, vinaigre et moutarde.",
      "Hacher finement câpres, cornichons, herbes et échalote.",
      "Incorporer à la vinaigrette.",
      "Assaisonner."
    ],
    conseils: "Accompagnement classique de la tête de veau et des abats froids.",
    variantes: ["Sauce verte (herbes mixées)"]
  },

  "sauce_verte": {
    nom: "Sauce Verte",
    categorie: "sauce froide",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Persil", quantite: "1 bouquet", type: "herbe" },
      { nom: "Cerfeuil", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Estragon", quantite: "4 branches", type: "herbe" },
      { nom: "Ciboulette", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Épinards frais", quantite: "50 g", type: "légume" },
      { nom: "Mayonnaise", quantite: "15 cl", type: "sauce" },
      { nom: "Câpres", quantite: "1 c. à soupe", type: "condiment" }
    ],
    etapes: [
      "Blanchir les herbes et épinards 30 secondes.",
      "Rafraîchir, égoutter et presser.",
      "Mixer finement.",
      "Incorporer à la mayonnaise.",
      "Ajouter les câpres hachées."
    ],
    conseils: "La couleur vive est préservée par le blanchiment rapide. Parfaite avec le saumon et le veau.",
    variantes: ["Au yaourt", "Avec anchois"]
  },

  // ============================================
  // MARINADES
  // ============================================

  "marinade_teriyaki": {
    nom: "Marinade Teriyaki",
    redirect: "sauce_teriyaki"
  },

  "marinade_asiatique": {
    nom: "Marinade Asiatique",
    categorie: "marinade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "6 c. à soupe", type: "assaisonnement" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Gingembre râpé", quantite: "2 c. à soupe", type: "aromate" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "5 épices chinois", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Mariner la viande minimum 2h, idéalement une nuit.",
      "Réserver au frais.",
      "Égoutter avant cuisson."
    ],
    conseils: "Excellent pour le porc, le poulet et le bœuf destinés au wok ou au barbecue.",
    variantes: ["Avec citronnelle", "Plus pimentée"]
  },

  "chermoula": {
    nom: "Chermoula",
    categorie: "marinade",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Coriandre fraîche", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Persil plat", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Cumin", quantite: "1 c. à café", type: "épice" },
      { nom: "Paprika", quantite: "1 c. à café", type: "épice" },
      { nom: "Jus de citron", quantite: "4 c. à soupe", type: "agrume" },
      { nom: "Huile d'olive", quantite: "8 c. à soupe", type: "matière grasse" },
      { nom: "Sel", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Mixer coriandre, persil et ail.",
      "Ajouter les épices.",
      "Incorporer le citron et l'huile.",
      "Mixer jusqu'à consistance homogène."
    ],
    conseils: "Marinade marocaine traditionnelle pour poissons et viandes grillées.",
    variantes: ["Avec safran", "Plus pimentée"]
  },

  // ============================================
  // CONDIMENTS
  // ============================================

  "persillade": {
    nom: "Persillade",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Persil plat", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Hacher finement le persil.",
      "Hacher l'ail très fin.",
      "Mélanger avec une pincée de sel."
    ],
    conseils: "Finition classique des viandes et poissons poêlés. Ajouter en fin de cuisson.",
    variantes: ["Avec chapelure (pour gratins)"]
  },

  "persil_ail": {
    nom: "Persil-Ail",
    redirect: "persillade"
  },

  "vinaigrette": {
    nom: "Vinaigrette Classique",
    categorie: "sauce froide",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile (olive ou neutre)", quantite: "6 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à café", type: "condiment" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Dissoudre le sel dans le vinaigre.",
      "Ajouter la moutarde, bien mélanger.",
      "Incorporer l'huile en fouettant.",
      "Poivrer."
    ],
    conseils: "La base : 3 volumes d'huile pour 1 de vinaigre. Adaptez selon vos goûts.",
    variantes: ["À l'échalote", "Aux herbes", "Au miel"]
  },

  "vinaigrette_a_l_echalote": {
    nom: "Vinaigrette à l'Échalote",
    categorie: "sauce froide",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile de tournesol ou olive", quantite: "6 c. à soupe", type: "matière grasse" },
      { nom: "Vinaigre de vin rouge", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "à goût", type: "assaisonnement" }
    ],
    etapes: [
      "Ciseler finement les échalotes.",
      "Faire la vinaigrette de base.",
      "Incorporer les échalotes et le persil."
    ],
    conseils: "Parfaite pour accompagner les viandes froides et la tête de veau.",
    variantes: ["Avec câpres", "Vinaigrette tiède"]
  },

  // ============================================
  // BEURRES COMPOSÉS ET MATIÈRES GRASSES
  // ============================================

  "beurre_clarifie": {
    nom: "Beurre Clarifié",
    categorie: "matière grasse",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre doux", quantite: "250 g", type: "produit laitier" }
    ],
    etapes: [
      "Couper le beurre en morceaux et le faire fondre à feu très doux dans une casserole.",
      "Laisser chauffer doucement sans remuer jusqu'à ce que le beurre se sépare en trois couches.",
      "Écumer délicatement la mousse blanche (caséine) qui se forme en surface.",
      "Verser doucement le beurre jaune limpide dans un récipient, en arrêtant avant le petit-lait blanc au fond.",
      "Conserver au réfrigérateur jusqu'à 3 mois."
    ],
    conseils: "Le beurre clarifié supporte des températures élevées sans brûler (jusqu'à 250°C). Idéal pour saisir les viandes et les poissons.",
    variantes: ["Ghee indien (cuit plus longtemps pour un goût noisette)"]
  },

  "beurre_d_anchois": {
    nom: "Beurre d'Anchois",
    categorie: "beurre composé",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Beurre doux tempéré", quantite: "125 g", type: "produit laitier" },
      { nom: "Filets d'anchois à l'huile", quantite: "6", type: "poisson" },
      { nom: "Câpres", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Persil frais", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Poivre noir", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Égoutter les anchois et les écraser à la fourchette jusqu'à obtenir une pâte.",
      "Rincer et hacher finement les câpres.",
      "Travailler le beurre en pommade à la fourchette.",
      "Incorporer les anchois, les câpres et le persil ciselé.",
      "Poivrer (ne pas saler, les anchois sont salés).",
      "Rouler le beurre dans du film alimentaire en forme de boudin et réfrigérer."
    ],
    conseils: "Servir des rondelles sur les grillades de bœuf ou de poisson. Se conserve 2 semaines au réfrigérateur ou 2 mois au congélateur.",
    variantes: ["Avec zeste de citron", "Avec ail"]
  },

  "beurre_de_truffe": {
    nom: "Beurre de Truffe",
    categorie: "beurre composé",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Beurre doux tempéré", quantite: "200 g", type: "produit laitier" },
      { nom: "Truffe noire fraîche ou en conserve", quantite: "30 g", type: "champignon" },
      { nom: "Jus de truffe", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Fleur de sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Hacher très finement la truffe ou la râper.",
      "Travailler le beurre en pommade.",
      "Incorporer la truffe hachée et son jus.",
      "Assaisonner délicatement avec la fleur de sel.",
      "Rouler en boudin dans du film alimentaire et réfrigérer."
    ],
    conseils: "Beurre de luxe pour les grandes occasions. Servir sur filet de bœuf, risotto ou pâtes fraîches. Laisser tempérer 10 min avant de servir pour révéler les arômes.",
    variantes: ["À la truffe blanche d'Alba", "Avec un trait de cognac"]
  },

  "graisse_de_confit": {
    nom: "Graisse de Confit",
    categorie: "matière grasse",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Graisse d'oie ou de canard", quantite: "500 g", type: "matière grasse" }
    ],
    etapes: [
      "Récupérer la graisse de cuisson des confits.",
      "Filtrer à travers une passoire fine pour retirer les impuretés.",
      "Conserver dans un bocal hermétique au réfrigérateur."
    ],
    conseils: "La graisse de confit apporte une saveur incomparable aux pommes de terre sarladaises. Se conserve plusieurs mois au frais.",
    variantes: ["Graisse d'oie pure", "Graisse de canard"]
  },

  "huile_d_olive_arbequina": {
    nom: "Huile d'Olive Arbequina",
    categorie: "huile",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Huile d'olive arbequina", quantite: "selon besoin", type: "matière grasse" }
    ],
    etapes: [
      "Utiliser en finition sur les viandes et poissons grillés.",
      "Verser un filet au moment de servir."
    ],
    conseils: "L'arbequina est une huile douce et fruitée d'Espagne, parfaite pour les finitions délicates. Ne pas chauffer.",
    variantes: ["Autres huiles fruitées : picual, koroneiki"]
  },

  "huile_d_olive_et_sel": {
    nom: "Huile d'Olive et Sel",
    categorie: "assaisonnement simple",
    temps_preparation: 1,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile d'olive vierge extra", quantite: "4 c. à soupe", type: "matière grasse" },
      { nom: "Fleur de sel", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "Arroser la viande d'un filet d'huile d'olive de qualité.",
      "Parsemer de fleur de sel au moment de servir."
    ],
    conseils: "La simplicité absolue pour les viandes de qualité exceptionnelle. L'huile doit être excellente.",
    variantes: ["Avec poivre du moulin", "Avec herbes fraîches"]
  },

  // ============================================
  // BOUILLONS ET FONDS
  // ============================================

  "bouillon_aromatique": {
    nom: "Bouillon Aromatique",
    categorie: "bouillon",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Eau", quantite: "2 L", type: "liquide" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Céleri branche", quantite: "2 branches", type: "légume" },
      { nom: "Poireau", quantite: "1", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Clous de girofle", quantite: "2", type: "épice" },
      { nom: "Gros sel", quantite: "1 c. à soupe", type: "assaisonnement" }
    ],
    etapes: [
      "Éplucher et couper les légumes en gros morceaux.",
      "Piquer l'oignon des clous de girofle.",
      "Mettre tous les ingrédients dans une grande casserole.",
      "Porter à ébullition puis baisser le feu.",
      "Laisser frémir 45 minutes en écumant régulièrement.",
      "Filtrer et réserver."
    ],
    conseils: "Base idéale pour pocher les viandes. Peut se congeler en portions.",
    variantes: ["Avec os de bœuf pour plus de goût", "Avec herbes de Provence"]
  },

  "bouillon_de_cuisson": {
    nom: "Bouillon de Cuisson",
    categorie: "bouillon",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson de la viande", quantite: "selon disponibilité", type: "bouillon" },
      { nom: "Herbes aromatiques", quantite: "selon goût", type: "aromate" }
    ],
    etapes: [
      "Récupérer le jus de cuisson de la viande.",
      "Dégraisser si nécessaire.",
      "Faire réduire pour concentrer les saveurs.",
      "Filtrer et servir."
    ],
    conseils: "Le meilleur accompagnement est souvent le jus naturel de cuisson. Simple et authentique.",
    variantes: ["Aromatisé aux herbes", "Monté au beurre"]
  },

  "bouillon_de_potee": {
    nom: "Bouillon de Potée",
    categorie: "bouillon",
    temps_preparation: 20,
    temps_cuisson: 180,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Palette de porc demi-sel", quantite: "500 g", type: "viande" },
      { nom: "Lard fumé", quantite: "200 g", type: "viande" },
      { nom: "Chou vert", quantite: "1/2", type: "légume" },
      { nom: "Carottes", quantite: "4", type: "légume" },
      { nom: "Pommes de terre", quantite: "6", type: "légume" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Poivre en grains", quantite: "10", type: "épice" }
    ],
    etapes: [
      "Dessaler la viande si nécessaire en la faisant tremper.",
      "Mettre les viandes dans une grande marmite d'eau froide.",
      "Porter à ébullition et écumer.",
      "Ajouter les légumes, le bouquet garni et le poivre.",
      "Laisser mijoter 3 heures à feu doux.",
      "Servir le bouillon en entrée, les viandes et légumes en plat."
    ],
    conseils: "Grand classique auvergnat et breton. Le bouillon se déguste avec du pain grillé.",
    variantes: ["Potée auvergnate", "Potée lorraine avec saucisses"]
  },

  "bouillon_epice": {
    nom: "Bouillon Épicé Asiatique",
    categorie: "bouillon",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Bouillon de bœuf ou volaille", quantite: "1 L", type: "bouillon" },
      { nom: "Anis étoilé", quantite: "2", type: "épice" },
      { nom: "Gingembre frais", quantite: "30 g", type: "aromate" },
      { nom: "Sauce soja", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Citronnelle", quantite: "1 tige", type: "aromate" },
      { nom: "Cannelle", quantite: "1 bâton", type: "épice" }
    ],
    etapes: [
      "Trancher le gingembre en rondelles.",
      "Écraser la citronnelle.",
      "Porter le bouillon à frémissement avec toutes les épices.",
      "Laisser infuser 30 minutes à feu doux.",
      "Filtrer et ajouter la sauce soja."
    ],
    conseils: "Base parfaite pour le phở vietnamien ou les nouilles asiatiques.",
    variantes: ["Plus pimenté avec du piment oiseau", "Au lait de coco"]
  },

  // ============================================
  // JUS DE VIANDE ET RÉDUCTIONS
  // ============================================

  "caramel_de_viande": {
    nom: "Caramel de Viande",
    categorie: "jus réduit",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Jus de viande (bœuf ou veau)", quantite: "50 cl", type: "bouillon" },
      { nom: "Porto ou madère", quantite: "5 cl", type: "alcool" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le jus de viande à feu moyen jusqu'à obtenir une consistance sirupeuse.",
      "Ajouter le porto et réduire encore de moitié.",
      "Hors du feu, monter au beurre froid en fouettant.",
      "Servir immédiatement."
    ],
    conseils: "Un jus ultra-concentré aux saveurs profondes. Parfait pour les viandes rouges d'exception.",
    variantes: ["Au cognac", "Au vinaigre balsamique"]
  },

  "glace_de_viande_au_miel": {
    nom: "Glace de Viande au Miel",
    categorie: "glaçage",
    temps_preparation: 5,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau", quantite: "30 cl", type: "bouillon" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Gingembre râpé", quantite: "1 c. à café", type: "aromate" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition.",
      "Réduire à feu moyen jusqu'à consistance nappante.",
      "Badigeonner la viande en fin de cuisson."
    ],
    conseils: "Idéal pour laquer les travers de porc, le canard ou le poulet.",
    variantes: ["Au sirop d'érable", "À la mélasse"]
  },

  "jus_au_cassis": {
    nom: "Jus au Cassis",
    categorie: "jus fruité",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de gibier ou de volaille", quantite: "25 cl", type: "bouillon" },
      { nom: "Crème de cassis", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Cassis frais ou surgelés", quantite: "50 g", type: "fruit" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le fond de moitié.",
      "Ajouter la crème de cassis et les baies.",
      "Laisser compoter 5 minutes.",
      "Monter au beurre hors du feu.",
      "Passer au chinois si désiré."
    ],
    conseils: "Accord sublime avec le pigeon, le canard et le gibier à plumes.",
    variantes: ["Aux mûres", "Aux myrtilles"]
  },

  "jus_au_citron": {
    nom: "Jus au Citron",
    categorie: "jus léger",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson de la viande", quantite: "15 cl", type: "bouillon" },
      { nom: "Citron", quantite: "1", type: "agrume" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" },
      { nom: "Persil ciselé", quantite: "1 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Déglacer la poêle avec le jus de citron.",
      "Ajouter le jus de cuisson et faire réduire légèrement.",
      "Monter au beurre froid en fouettant.",
      "Ajouter le persil et servir."
    ],
    conseils: "Sauce légère et acidulée, parfaite pour le veau et la volaille.",
    variantes: ["Au citron vert", "Avec des câpres"]
  },

  "jus_au_cognac": {
    nom: "Jus au Cognac",
    categorie: "jus flambé",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sucs de cuisson", quantite: "selon disponibilité", type: "jus" },
      { nom: "Cognac", quantite: "4 cl", type: "alcool" },
      { nom: "Fond de veau", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Retirer la viande de la poêle et réserver au chaud.",
      "Déglacer au cognac et flamber.",
      "Ajouter le fond de veau et réduire de moitié.",
      "Monter au beurre froid.",
      "Napper la viande."
    ],
    conseils: "Le flambage élimine l'alcool tout en concentrant les arômes.",
    variantes: ["À l'armagnac", "Au calvados"]
  },

  "jus_au_miel_et_thym": {
    nom: "Jus au Miel et Thym",
    categorie: "jus aromatique",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de volaille ou de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Thym frais", quantite: "4 branches", type: "herbe" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire chauffer le miel dans une poêle jusqu'à légère caramélisation.",
      "Déglacer au vinaigre.",
      "Ajouter le fond et le thym.",
      "Réduire de moitié.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Le miel apporte douceur et brillance. Parfait avec l'agneau et le canard.",
    variantes: ["Au romarin", "Au miel de lavande"]
  },

  "jus_au_poivre_vert": {
    nom: "Jus au Poivre Vert",
    categorie: "jus épicé",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson", quantite: "15 cl", type: "bouillon" },
      { nom: "Poivre vert en saumure", quantite: "2 c. à soupe", type: "épice" },
      { nom: "Fond de veau", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Rincer légèrement le poivre vert.",
      "Déglacer la poêle avec le fond.",
      "Ajouter le poivre vert et réduire.",
      "Monter au beurre et servir."
    ],
    conseils: "Version allégée de la sauce au poivre, sans crème.",
    variantes: ["Au poivre de Sichuan", "Au poivre long"]
  },

  "jus_au_romarin": {
    nom: "Jus au Romarin",
    categorie: "jus aromatique",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Romarin frais", quantite: "3 branches", type: "herbe" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Écraser l'ail.",
      "Faire infuser le romarin et l'ail dans le fond chaud pendant 10 minutes.",
      "Filtrer et faire réduire de moitié.",
      "Monter au beurre."
    ],
    conseils: "Accompagnement classique de l'agneau rôti.",
    variantes: ["Avec du miel", "Au vin blanc"]
  },

  "jus_au_thym": {
    nom: "Jus au Thym",
    categorie: "jus aromatique",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau ou de volaille", quantite: "25 cl", type: "bouillon" },
      { nom: "Thym frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Ciseler l'échalote et la faire suer au beurre.",
      "Ajouter le fond et le thym.",
      "Laisser infuser et réduire de moitié.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Le thym frais apporte fraîcheur et parfum de garrigue.",
    variantes: ["Au thym citron", "Avec du laurier"]
  },

  "jus_aux_herbes": {
    nom: "Jus aux Herbes",
    categorie: "jus aromatique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Persil", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Cerfeuil", quantite: "1/4 bouquet", type: "herbe" },
      { nom: "Estragon", quantite: "4 branches", type: "herbe" },
      { nom: "Ciboulette", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le fond de moitié.",
      "Ciseler finement toutes les herbes.",
      "Monter au beurre hors du feu.",
      "Incorporer les herbes au dernier moment."
    ],
    conseils: "Ajouter les herbes en fin pour préserver leur fraîcheur et leur couleur.",
    variantes: ["Herbes de Provence", "Menthe et basilic"]
  },

  "jus_aux_herbes_de_provence": {
    nom: "Jus aux Herbes de Provence",
    categorie: "jus provençal",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau ou d'agneau", quantite: "25 cl", type: "bouillon" },
      { nom: "Herbes de Provence", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Écraser l'ail et le faire dorer dans l'huile d'olive.",
      "Ajouter les herbes de Provence.",
      "Mouiller avec le fond et laisser infuser 10 minutes.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Parfum du Sud pour accompagner l'agneau, le lapin ou le poulet.",
    variantes: ["Avec tomates séchées", "Au pastis"]
  },

  "jus_corse": {
    nom: "Jus Corsé",
    categorie: "jus réduit",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau concentré", quantite: "30 cl", type: "bouillon" },
      { nom: "Porto", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le fond de veau de deux tiers.",
      "Ajouter le porto et réduire encore légèrement.",
      "Monter au beurre froid.",
      "Servir très chaud."
    ],
    conseils: "Un jus puissant pour les viandes rouges grillées.",
    variantes: ["Au madère", "Au cognac"]
  },

  "jus_court": {
    nom: "Jus Court",
    categorie: "jus simple",
    temps_preparation: 2,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sucs de cuisson", quantite: "selon disponibilité", type: "jus" },
      { nom: "Cognac", quantite: "2 c. à soupe", type: "alcool" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Déglacer les sucs de cuisson au cognac.",
      "Flamber si désiré.",
      "Monter au beurre et servir immédiatement."
    ],
    conseils: "Sauce minute pour ne pas masquer le goût de la viande.",
    variantes: ["Au whisky", "Au calvados"]
  },

  "jus_court_au_genievre": {
    nom: "Jus Court au Genièvre",
    categorie: "jus léger",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sucs de cuisson", quantite: "selon disponibilité", type: "jus" },
      { nom: "Gin ou genièvre", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Baies de genièvre", quantite: "6", type: "épice" },
      { nom: "Fond de gibier", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Écraser légèrement les baies de genièvre.",
      "Déglacer au gin et flamber.",
      "Ajouter le fond et les baies.",
      "Réduire légèrement et monter au beurre."
    ],
    conseils: "Parfait avec le gibier et le canard. Les baies apportent une note résineuse.",
    variantes: ["Au peket belge", "Avec crème"]
  },

  "jus_d_agneau_au_romarin": {
    nom: "Jus d'Agneau au Romarin",
    categorie: "jus classique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Jus de cuisson de l'agneau", quantite: "20 cl", type: "jus" },
      { nom: "Fond d'agneau ou de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Romarin frais", quantite: "3 branches", type: "herbe" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Récupérer le jus de cuisson de l'agneau.",
      "Dégraisser et ajouter le fond.",
      "Ajouter l'ail écrasé et le romarin.",
      "Laisser infuser 10 minutes à feu doux.",
      "Filtrer et monter au beurre."
    ],
    conseils: "L'accord parfait avec le gigot ou le carré d'agneau rôti.",
    variantes: ["À la menthe", "Au thym"]
  },

  "jus_de_braisage": {
    nom: "Jus de Braisage",
    categorie: "jus de cuisson",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de braisage", quantite: "50 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Récupérer le fond de braisage après la cuisson.",
      "Dégraisser soigneusement.",
      "Faire réduire de moitié à feu vif.",
      "Monter au beurre si désiré.",
      "Rectifier l'assaisonnement."
    ],
    conseils: "Le jus de braisage concentre toutes les saveurs de la cuisson longue.",
    variantes: ["Passé au chinois", "Avec les légumes mixés"]
  },

  "jus_de_braisage_au_thym": {
    nom: "Jus de Braisage au Thym",
    categorie: "jus de cuisson",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de braisage d'agneau", quantite: "50 cl", type: "bouillon" },
      { nom: "Thym frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Récupérer et dégraisser le fond de braisage.",
      "Ajouter le thym frais et infuser 10 minutes.",
      "Faire réduire de moitié.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Le thym sublime les braisés d'agneau et de bœuf.",
    variantes: ["Au romarin", "Aux herbes de Provence"]
  },

  "jus_de_braisage_reduit": {
    nom: "Jus de Braisage Réduit",
    categorie: "jus concentré",
    temps_preparation: 5,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de braisage", quantite: "75 cl", type: "bouillon" }
    ],
    etapes: [
      "Récupérer tout le fond de braisage.",
      "Dégraisser soigneusement.",
      "Faire réduire à feu moyen-vif jusqu'à consistance nappante.",
      "Le jus doit réduire des deux tiers."
    ],
    conseils: "Un jus naturel et puissant, sans ajout de beurre. Idéal pour les puristes.",
    variantes: ["Légèrement monté au beurre", "Avec un trait de cognac"]
  },

  "jus_de_chapon": {
    nom: "Jus de Chapon",
    categorie: "jus de volaille",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Jus de cuisson du chapon", quantite: "30 cl", type: "jus" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" },
      { nom: "Porto blanc", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Récupérer le jus de cuisson et dégraisser.",
      "Ajouter le fond de volaille et le porto.",
      "Faire réduire de moitié.",
      "Monter au beurre et servir."
    ],
    conseils: "Un jus délicat pour les fêtes. Le chapon mérite un jus raffiné.",
    variantes: ["Au champagne", "Aux morilles"]
  },

  "jus_de_confit": {
    nom: "Jus de Confit",
    categorie: "jus de canard",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Graisse de confit", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Fond de canard", quantite: "15 cl", type: "bouillon" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Récupérer un peu de graisse de confit (la partie brune au fond).",
      "Ajouter l'ail écrasé et faire revenir.",
      "Mouiller avec le fond et réduire.",
      "Servir avec le confit."
    ],
    conseils: "Un jus simple pour accompagner le confit de canard.",
    variantes: ["Au vin blanc", "Avec persil"]
  },

  "jus_de_confitage": {
    nom: "Jus de Confitage",
    categorie: "jus de canard",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fond de graisse dégraissé", quantite: "15 cl", type: "jus" },
      { nom: "Fond de canard", quantite: "10 cl", type: "bouillon" }
    ],
    etapes: [
      "Récupérer le jus sous la graisse de confit.",
      "Faire réduire avec le fond de canard.",
      "Servir en petite quantité, très concentré."
    ],
    conseils: "Un jus très parfumé, à utiliser avec parcimonie.",
    variantes: ["Monté au beurre", "Au vinaigre de xérès"]
  },

  "jus_de_poulet_roti": {
    nom: "Jus de Poulet Rôti",
    categorie: "jus de volaille",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson du poulet", quantite: "20 cl", type: "jus" },
      { nom: "Eau ou bouillon", quantite: "10 cl", type: "liquide" },
      { nom: "Beurre froid", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Dégraisser le plat de cuisson.",
      "Déglacer avec l'eau ou le bouillon en grattant les sucs.",
      "Faire réduire légèrement.",
      "Monter au beurre si désiré."
    ],
    conseils: "Le meilleur jus est souvent le plus simple. Ne pas trop réduire pour garder du volume.",
    variantes: ["À l'estragon", "Au citron"]
  },

  "jus_de_rotissage": {
    nom: "Jus de Rôtissage",
    categorie: "jus naturel",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson du rôti", quantite: "selon disponibilité", type: "jus" },
      { nom: "Eau ou bouillon", quantite: "5 cl", type: "liquide" }
    ],
    etapes: [
      "Récupérer le jus de cuisson.",
      "Dégraisser si nécessaire.",
      "Déglacer le plat avec un peu d'eau si les sucs ont accroché.",
      "Servir nature."
    ],
    conseils: "Le jus de rôtissage pur est l'accompagnement le plus authentique.",
    variantes: ["Avec les légumes de garniture mixés"]
  },

  "jus_de_truffe": {
    nom: "Jus de Truffe",
    categorie: "jus luxueux",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Jus de truffe (conserve)", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Truffe hachée", quantite: "10 g", type: "champignon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le fond de veau de moitié.",
      "Ajouter le jus de truffe.",
      "Monter au beurre.",
      "Incorporer la truffe hachée au dernier moment."
    ],
    conseils: "Pour les grandes occasions. La truffe doit rester crue pour garder son parfum.",
    variantes: ["Avec un trait de cognac", "Au madère"]
  },

  "jus_de_viande_leger": {
    nom: "Jus de Viande Léger",
    categorie: "jus naturel",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sucs de cuisson", quantite: "selon disponibilité", type: "jus" },
      { nom: "Eau chaude", quantite: "10 cl", type: "liquide" }
    ],
    etapes: [
      "Retirer la viande et réserver au chaud.",
      "Déglacer les sucs avec l'eau chaude.",
      "Gratter les sucs caramélisés.",
      "Servir tel quel, sans réduction."
    ],
    conseils: "Un jus léger pour ceux qui préfèrent la simplicité.",
    variantes: ["Avec un filet de citron", "Aux herbes fraîches"]
  },

  "jus_simple": {
    nom: "Jus Simple",
    categorie: "jus naturel",
    temps_preparation: 2,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson", quantite: "selon disponibilité", type: "jus" }
    ],
    etapes: [
      "Récupérer le jus de cuisson.",
      "Dégraisser si nécessaire.",
      "Servir tel quel ou légèrement réduit."
    ],
    conseils: "Parfois, le meilleur accompagnement est le jus naturel de la viande.",
    variantes: ["Légèrement réduit", "Avec beurre"]
  },

  "simple_jus_de_carcasse": {
    nom: "Simple Jus de Carcasse",
    categorie: "jus naturel",
    temps_preparation: 10,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Carcasse de volaille", quantite: "1", type: "os" },
      { nom: "Eau", quantite: "1 L", type: "liquide" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Carotte", quantite: "1", type: "légume" }
    ],
    etapes: [
      "Concasser la carcasse.",
      "La faire rissoler dans une cocotte.",
      "Ajouter les légumes coupés.",
      "Mouiller à l'eau et laisser mijoter 45 minutes.",
      "Filtrer et réduire de moitié."
    ],
    conseils: "Ne rien jeter ! Les carcasses font d'excellents jus.",
    variantes: ["Avec herbes aromatiques", "Au vin blanc"]
  },

  // ============================================
  // CONDIMENTS ET CHUTNEYS
  // ============================================

  "chutney_de_figues": {
    nom: "Chutney de Figues",
    categorie: "condiment sucré",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Figues fraîches ou séchées", quantite: "500 g", type: "fruit" },
      { nom: "Oignon rouge", quantite: "1", type: "légume" },
      { nom: "Vinaigre balsamique", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Sucre brun", quantite: "100 g", type: "sucrant" },
      { nom: "Gingembre frais", quantite: "1 c. à soupe râpé", type: "aromate" },
      { nom: "Cannelle", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les figues en morceaux et l'oignon en petits dés.",
      "Faire revenir l'oignon dans une casserole avec un peu d'huile.",
      "Ajouter les figues, le vinaigre, le sucre et les épices.",
      "Laisser mijoter 40 minutes en remuant régulièrement.",
      "Le chutney est prêt quand il a une consistance confiture épaisse."
    ],
    conseils: "Excellent avec le foie gras, les terrines et le gibier. Se conserve plusieurs semaines au réfrigérateur.",
    variantes: ["Aux figues et noix", "Figues et porto"]
  },

  "condiment_cornichons": {
    nom: "Condiment Cornichons",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cornichons", quantite: "100 g", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Échalote", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Hacher finement les cornichons.",
      "Rincer et hacher les câpres.",
      "Ciseler l'échalote et le persil.",
      "Mélanger tous les ingrédients."
    ],
    conseils: "Accompagnement traditionnel du pot-au-feu et des viandes bouillies.",
    variantes: ["Avec moutarde", "Avec oignon"]
  },

  "ketchup_maison": {
    nom: "Ketchup Maison",
    categorie: "condiment",
    temps_preparation: 15,
    temps_cuisson: 60,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Tomates mûres", quantite: "1 kg", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Vinaigre de cidre", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Sucre brun", quantite: "100 g", type: "sucrant" },
      { nom: "Paprika", quantite: "1 c. à café", type: "épice" },
      { nom: "Cannelle", quantite: "1/4 c. à café", type: "épice" },
      { nom: "Clou de girofle", quantite: "2", type: "épice" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Couper les tomates et l'oignon en morceaux.",
      "Faire cuire tous les ingrédients à feu doux pendant 45 minutes.",
      "Mixer finement et passer au tamis.",
      "Remettre sur le feu et réduire jusqu'à consistance épaisse.",
      "Mettre en bocaux stérilisés."
    ],
    conseils: "Bien meilleur que l'industriel ! Se conserve plusieurs mois au frais une fois ouvert.",
    variantes: ["Épicé avec du piment", "Fumé au paprika fumé"]
  },

  // ============================================
  // MOUTARDES
  // ============================================

  "moutarde": {
    nom: "Moutarde",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Moutarde de Dijon", quantite: "selon besoin", type: "condiment" }
    ],
    etapes: [
      "Servir à température ambiante.",
      "Accompagner les viandes grillées ou bouillies."
    ],
    conseils: "La moutarde de Dijon est incontournable avec les viandes rouges.",
    variantes: ["À l'ancienne", "Douce", "Violette"]
  },

  "moutarde_a_l_ancienne": {
    nom: "Moutarde à l'Ancienne",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Moutarde à l'ancienne en grains", quantite: "selon besoin", type: "condiment" }
    ],
    etapes: [
      "Servir telle quelle.",
      "Les grains apportent texture et saveur plus douce."
    ],
    conseils: "Parfaite avec les charcuteries, le lapin et le porc.",
    variantes: ["Moutarde de Meaux", "Moutarde au miel"]
  },

  "moutarde_de_dijon": {
    nom: "Moutarde de Dijon",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Moutarde de Dijon forte", quantite: "selon besoin", type: "condiment" }
    ],
    etapes: [
      "Utiliser en accompagnement ou en sauce."
    ],
    conseils: "La vraie moutarde de Dijon est forte et piquante. Indispensable en cuisine française.",
    variantes: ["Extra-forte", "Mi-forte"]
  },

  "moutarde_douce": {
    nom: "Moutarde Douce",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Moutarde douce (bavaroise ou américaine)", quantite: "selon besoin", type: "condiment" }
    ],
    etapes: [
      "Servir avec les saucisses et hot-dogs."
    ],
    conseils: "La moutarde douce est sucrée et peu piquante, idéale pour les enfants.",
    variantes: ["Moutarde au miel", "Moutarde américaine yellow"]
  },

  "moutarde_en_grains": {
    nom: "Moutarde en Grains",
    redirect: "moutarde_a_l_ancienne"
  },

  "moutarde_violette": {
    nom: "Moutarde Violette",
    categorie: "condiment",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Moutarde violette de Brive", quantite: "selon besoin", type: "condiment" }
    ],
    etapes: [
      "Servir avec les viandes blanches et le porc."
    ],
    conseils: "Spécialité corrézienne au moût de raisin, douce et fruitée.",
    variantes: []
  },

  "moutardes_variees": {
    nom: "Moutardes Variées",
    categorie: "condiment",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Moutarde à l'ancienne", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Moutarde violette", quantite: "2 c. à soupe", type: "condiment" }
    ],
    etapes: [
      "Disposer les différentes moutardes dans des coupelles.",
      "Servir en accompagnement des viandes."
    ],
    conseils: "Proposer plusieurs moutardes permet à chacun de trouver son bonheur.",
    variantes: ["Avec moutarde au miel", "Avec moutarde au cassis"]
  },

  // ============================================
  // SELS ET ASSAISONNEMENTS SIMPLES
  // ============================================

  "fleur_de_sel": {
    nom: "Fleur de Sel",
    categorie: "assaisonnement",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Fleur de sel de Guérande ou de Camargue", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "Parsemer sur la viande au moment de servir.",
      "Ne jamais cuire la fleur de sel."
    ],
    conseils: "Le sel de finition par excellence. Ses cristaux croquants subliment les viandes de qualité.",
    variantes: ["Fleur de sel de Ré", "Maldon"]
  },

  "fleur_de_sel_et_poivre": {
    nom: "Fleur de Sel et Poivre",
    categorie: "assaisonnement",
    temps_preparation: 1,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Fleur de sel", quantite: "selon goût", type: "assaisonnement" },
      { nom: "Poivre du moulin", quantite: "selon goût", type: "épice" }
    ],
    etapes: [
      "Moudre le poivre au moment de servir.",
      "Parsemer de fleur de sel."
    ],
    conseils: "L'assaisonnement le plus pur pour apprécier une viande d'exception.",
    variantes: ["Au poivre de Kampot", "Au poivre Timut"]
  },

  "fleur_de_sel_fumee": {
    nom: "Fleur de Sel Fumée",
    categorie: "assaisonnement",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Sel Maldon fumé ou fleur de sel fumée", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "Parsemer sur les viandes grillées au moment de servir."
    ],
    conseils: "Apporte une note fumée subtile aux grillades. Excellent sur le bœuf.",
    variantes: ["Fumé au bois de hêtre", "Fumé au bois de pommier"]
  },

  "fleur_de_sel_simple": {
    nom: "Fleur de Sel Simple",
    redirect: "fleur_de_sel"
  },

  "sel_au_piment_d_espelette": {
    nom: "Sel au Piment d'Espelette",
    categorie: "assaisonnement",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Gros sel ou fleur de sel", quantite: "100 g", type: "assaisonnement" },
      { nom: "Piment d'Espelette", quantite: "1 c. à soupe", type: "épice" }
    ],
    etapes: [
      "Mélanger le sel et le piment d'Espelette.",
      "Conserver dans un bocal hermétique."
    ],
    conseils: "Le piment d'Espelette apporte chaleur sans brûler. Parfait avec l'agneau et le poulet basquaise.",
    variantes: ["Plus ou moins pimenté", "Avec zeste de citron"]
  },

  "sel_aux_epices": {
    nom: "Sel aux Épices",
    categorie: "assaisonnement",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Gros sel", quantite: "100 g", type: "assaisonnement" },
      { nom: "Paprika", quantite: "1 c. à café", type: "épice" },
      { nom: "Cumin", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Coriandre moulue", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Poivre noir", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Conserver dans un bocal hermétique."
    ],
    conseils: "Idéal pour assaisonner les chips de couennes de porc.",
    variantes: ["Aux herbes de Provence", "Au curry"]
  },

  "sel_de_guerande": {
    nom: "Sel de Guérande",
    categorie: "assaisonnement",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Gros sel de Guérande", quantite: "selon besoin", type: "assaisonnement" }
    ],
    etapes: [
      "Utiliser pour la cuisson ou en finition."
    ],
    conseils: "Le sel de Guérande est naturellement gris et riche en minéraux.",
    variantes: ["Gros sel pour cuisson", "Sel fin pour table"]
  },

  // ============================================
  // MARINADES
  // ============================================

  "marinade_citronnee": {
    nom: "Marinade Citronnée",
    categorie: "marinade",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Citron", quantite: "2", type: "agrume" },
      { nom: "Huile d'olive", quantite: "10 cl", type: "matière grasse" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Origan frais", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel, poivre", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "Presser les citrons et récupérer le zeste.",
      "Écraser l'ail.",
      "Mélanger tous les ingrédients.",
      "Faire mariner la viande 2 à 4 heures."
    ],
    conseils: "Marinade méditerranéenne idéale pour le poulet et l'agneau grillés.",
    variantes: ["Au citron vert", "Avec thym et romarin"]
  },

  "marinade_coreenne": {
    nom: "Marinade Coréenne",
    categorie: "marinade asiatique",
    temps_preparation: 15,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "6 c. à soupe", type: "condiment" },
      { nom: "Poire asiatique (ou pomme)", quantite: "1/2", type: "fruit" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Gingembre frais", quantite: "2 c. à soupe râpé", type: "aromate" },
      { nom: "Huile de sésame", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Graines de sésame", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Oignon vert", quantite: "2", type: "aromate" }
    ],
    etapes: [
      "Mixer la poire, l'ail et le gingembre.",
      "Ajouter la sauce soja, l'huile de sésame et le sucre.",
      "Incorporer les oignons verts ciselés et le sésame.",
      "Faire mariner le bœuf au minimum 4 heures, idéalement une nuit."
    ],
    conseils: "La base du bulgogi coréen. La poire attendrit la viande naturellement.",
    variantes: ["Plus épicée avec gochujang", "Au miel"]
  },

  "marinade_miel_soja": {
    nom: "Marinade Miel-Soja",
    categorie: "marinade asiatique",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "4 c. à soupe", type: "condiment" },
      { nom: "Miel", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Gingembre frais râpé", quantite: "1 c. à soupe", type: "aromate" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Badigeonner la viande ou faire mariner 2 heures.",
      "Idéal pour les cuissons au four ou au barbecue."
    ],
    conseils: "Le sucre du miel caramélise à la cuisson pour une belle couleur dorée.",
    variantes: ["Au sirop d'érable", "Avec piment"]
  },

  "marinade_yakitori": {
    nom: "Marinade Yakitori",
    categorie: "marinade japonaise",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce soja", quantite: "10 cl", type: "condiment" },
      { nom: "Mirin", quantite: "10 cl", type: "alcool" },
      { nom: "Saké", quantite: "5 cl", type: "alcool" },
      { nom: "Sucre", quantite: "3 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition puis réduire de moitié.",
      "Laisser refroidir.",
      "Utiliser pour badigeonner les brochettes pendant la cuisson."
    ],
    conseils: "La sauce yakitori traditionnelle doit être appliquée plusieurs fois pendant la cuisson pour former une belle laque.",
    variantes: ["Au gingembre", "Plus sucrée"]
  },

  // ============================================
  // SAUCES AU VIN ET ALCOOL
  // ============================================

  "sauce_a_la_biere": {
    nom: "Sauce à la Bière",
    categorie: "sauce régionale",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Bière brune (belge ou artisanale)", quantite: "33 cl", type: "alcool" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Moutarde à l'ancienne", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Cassonade", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Émincer l'oignon et le faire revenir au beurre.",
      "Verser la bière et faire réduire de moitié.",
      "Ajouter la moutarde et la cassonade.",
      "Incorporer la crème et laisser épaissir."
    ],
    conseils: "Sauce flamande traditionnelle pour la carbonade. Utilisez une bonne bière belge.",
    variantes: ["À la bière blonde", "Avec pain d'épices"]
  },

  "sauce_au_champagne": {
    nom: "Sauce au Champagne",
    categorie: "sauce festive",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Champagne brut", quantite: "25 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Beurre froid", quantite: "50 g", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "10 cl", type: "bouillon" }
    ],
    etapes: [
      "Ciseler les échalotes et les faire suer au beurre.",
      "Déglacer au champagne et réduire de deux tiers.",
      "Ajouter le fond et la crème.",
      "Réduire jusqu'à consistance nappante.",
      "Monter au beurre froid."
    ],
    conseils: "Sauce de fête pour les volailles nobles et les poissons fins.",
    variantes: ["Au crémant", "Avec zeste de citron"]
  },

  "sauce_au_vin": {
    nom: "Sauce au Vin",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vin rouge ou blanc", quantite: "30 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Fond de veau", quantite: "15 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" },
      { nom: "Thym", quantite: "1 branche", type: "herbe" }
    ],
    etapes: [
      "Ciseler les échalotes et les faire suer.",
      "Déglacer au vin avec le thym.",
      "Réduire de moitié.",
      "Ajouter le fond et réduire encore.",
      "Monter au beurre."
    ],
    conseils: "La base de nombreuses sauces classiques. Adaptez le vin à la viande.",
    variantes: ["Au vin jaune du Jura", "Au porto"]
  },

  "sauce_au_vin_blanc": {
    nom: "Sauce au Vin Blanc",
    categorie: "sauce légère",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vin blanc sec", quantite: "25 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Estragon frais", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire suer les échalotes au beurre.",
      "Déglacer au vin blanc et réduire de moitié.",
      "Ajouter la crème et laisser épaissir.",
      "Incorporer l'estragon ciselé."
    ],
    conseils: "Sauce délicate pour les volailles et les poissons.",
    variantes: ["Au muscadet", "Au chablis"]
  },

  "sauce_au_vin_de_bordeaux": {
    nom: "Sauce au Vin de Bordeaux",
    redirect: "sauce_bordelaise"
  },

  "sauce_au_vin_rouge_et_echalotes": {
    nom: "Sauce au Vin Rouge et Échalotes",
    redirect: "sauce_marchand_de_vin"
  },

  "sauce_au_whisky": {
    nom: "Sauce au Whisky",
    categorie: "sauce flambée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Whisky (single malt de préférence)", quantite: "5 cl", type: "alcool" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Fond de veau", quantite: "10 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" },
      { nom: "Moutarde", quantite: "1 c. à café", type: "condiment" }
    ],
    etapes: [
      "Faire suer l'échalote ciselée au beurre.",
      "Déglacer au whisky et flamber.",
      "Ajouter le fond et réduire.",
      "Incorporer la crème et la moutarde.",
      "Laisser épaissir."
    ],
    conseils: "Sauce puissante pour les viandes rouges grillées. Le flambage adoucit l'alcool.",
    variantes: ["Au bourbon", "Au whisky tourbé"]
  },

  "sauce_au_xeres": {
    nom: "Sauce au Xérès",
    categorie: "sauce espagnole",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Xérès sec (fino ou manzanilla)", quantite: "15 cl", type: "alcool" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Fond de volaille", quantite: "15 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Émincer l'ail et le faire dorer légèrement.",
      "Déglacer au xérès et réduire de moitié.",
      "Ajouter le fond et réduire encore.",
      "Monter au beurre."
    ],
    conseils: "Le xérès apporte des notes de noix et d'amande. Excellent avec le porc et la volaille.",
    variantes: ["Au pedro ximénez (plus doux)", "Avec amandes effilées"]
  },

  "pedro_ximenez_reduit": {
    nom: "Pedro Ximénez Réduit",
    categorie: "réduction",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pedro Ximénez (vin doux)", quantite: "25 cl", type: "alcool" }
    ],
    etapes: [
      "Verser le pedro ximénez dans une casserole.",
      "Faire réduire à feu moyen jusqu'à consistance sirupeuse.",
      "Le volume doit réduire de moitié environ."
    ],
    conseils: "Ce sirop doux et complexe sublime le foie gras et les viandes laquées.",
    variantes: ["Avec une pointe de vinaigre de xérès"]
  },

  "reduction_de_sauternes": {
    nom: "Réduction de Sauternes",
    categorie: "réduction",
    temps_preparation: 5,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Sauternes", quantite: "25 cl", type: "alcool" }
    ],
    etapes: [
      "Verser le Sauternes dans une casserole.",
      "Faire réduire à feu doux jusqu'à consistance sirupeuse.",
      "Le vin doit réduire de deux tiers."
    ],
    conseils: "Accompagnement luxueux du foie gras poêlé. Ne pas faire bouillir trop fort.",
    variantes: ["Avec quelques grains de poivre blanc"]
  },

  "gelee_au_sauternes": {
    nom: "Gelée au Sauternes",
    categorie: "gelée",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Sauternes", quantite: "50 cl", type: "alcool" },
      { nom: "Gélatine en feuilles", quantite: "6", type: "agent gélifiant" },
      { nom: "Sucre", quantite: "50 g", type: "sucrant" }
    ],
    etapes: [
      "Faire tremper la gélatine dans l'eau froide.",
      "Chauffer le Sauternes avec le sucre sans bouillir.",
      "Incorporer la gélatine essorée et bien mélanger.",
      "Verser dans un moule et réfrigérer 4 heures."
    ],
    conseils: "Découper en cubes pour accompagner le foie gras ou les terrines.",
    variantes: ["Au muscat de Beaumes-de-Venise", "Au monbazillac"]
  },

  // ============================================
  // SAUCES CLASSIQUES FRANÇAISES
  // ============================================

  "sauce_a_l_echalote": {
    nom: "Sauce à l'Échalote",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Échalotes", quantite: "4", type: "aromate" },
      { nom: "Vin rouge", quantite: "20 cl", type: "alcool" },
      { nom: "Beurre", quantite: "80 g", type: "produit laitier" },
      { nom: "Sel, poivre", quantite: "selon goût", type: "assaisonnement" }
    ],
    etapes: [
      "Ciseler finement les échalotes.",
      "Les faire suer au beurre sans colorer.",
      "Déglacer au vin rouge et réduire de moitié.",
      "Monter au beurre froid en fouettant."
    ],
    conseils: "Sauce classique pour l'entrecôte. Les échalotes doivent rester fondantes.",
    variantes: ["Au vin blanc", "Avec un trait de vinaigre"]
  },

  "sauce_echalote": {
    nom: "Sauce Échalote",
    redirect: "sauce_a_l_echalote"
  },

  "sauce_echalotes": {
    nom: "Sauce Échalotes",
    redirect: "sauce_a_l_echalote"
  },

  "sauce_a_l_oignon": {
    nom: "Sauce à l'Oignon",
    categorie: "sauce brune",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons", quantite: "3 gros", type: "légume" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Vinaigre balsamique", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Émincer les oignons finement.",
      "Les faire caraméliser au beurre à feu doux pendant 20 minutes.",
      "Ajouter le sucre pour accélérer la caramélisation.",
      "Déglacer au vinaigre balsamique.",
      "Ajouter le fond et laisser mijoter 10 minutes."
    ],
    conseils: "La patience est la clé : les oignons doivent être bien caramélisés.",
    variantes: ["Aux oignons rouges", "Au vinaigre de xérès"]
  },

  "sauce_aux_oignons": {
    nom: "Sauce aux Oignons",
    redirect: "sauce_a_l_oignon"
  },

  "sauce_oignons": {
    nom: "Sauce Oignons",
    redirect: "sauce_a_l_oignon"
  },

  "sauce_a_l_os": {
    nom: "Sauce à l'Os",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Jus de cuisson de la côte", quantite: "20 cl", type: "jus" },
      { nom: "Vin rouge", quantite: "10 cl", type: "alcool" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Retirer la viande et réserver au chaud.",
      "Faire suer l'échalote ciselée dans les sucs.",
      "Déglacer au vin rouge et réduire.",
      "Monter au beurre."
    ],
    conseils: "Sauce traditionnelle de la côte de bœuf. Utiliser tous les sucs de cuisson.",
    variantes: ["Au cognac", "Avec moelle"]
  },

  "sauce_estragon": {
    nom: "Sauce à l'Estragon",
    categorie: "sauce aux herbes",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Estragon frais", quantite: "1 bouquet", type: "herbe" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Vin blanc sec", quantite: "10 cl", type: "alcool" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Vinaigre d'estragon", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Effeuiller l'estragon, garder quelques feuilles pour la fin.",
      "Faire suer l'échalote ciselée au beurre.",
      "Déglacer au vin blanc et au vinaigre.",
      "Ajouter les tiges d'estragon et réduire de moitié.",
      "Ajouter la crème et laisser épaissir.",
      "Filtrer et ajouter les feuilles d'estragon ciselées."
    ],
    conseils: "Grand classique du poulet. L'estragon frais est indispensable.",
    variantes: ["Avec moutarde", "Au vin jaune"]
  },

  "sauce_bourguignonne": {
    nom: "Sauce Bourguignonne",
    categorie: "sauce au vin",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Vin rouge de Bourgogne", quantite: "75 cl", type: "alcool" },
      { nom: "Lardons", quantite: "150 g", type: "viande" },
      { nom: "Champignons de Paris", quantite: "200 g", type: "légume" },
      { nom: "Petits oignons grelots", quantite: "12", type: "légume" },
      { nom: "Fond de veau", quantite: "25 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Faire revenir les lardons, réserver.",
      "Faire sauter les champignons, réserver.",
      "Glacer les petits oignons au beurre et sucre, réserver.",
      "Réduire le vin de moitié avec le bouquet garni.",
      "Ajouter le fond et réduire encore.",
      "Incorporer la garniture et réchauffer."
    ],
    conseils: "La sauce du bœuf bourguignon. Utilisez un bon pinot noir.",
    variantes: ["Sans lardons", "Avec os à moelle"]
  },

  "sauce_piquante": {
    nom: "Sauce Piquante",
    categorie: "sauce classique",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Échalotes", quantite: "3", type: "aromate" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Vinaigre de vin", quantite: "5 cl", type: "assaisonnement" },
      { nom: "Fond de veau", quantite: "20 cl", type: "bouillon" },
      { nom: "Cornichons", quantite: "6", type: "condiment" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Persil, estragon", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Ciseler les échalotes et les faire réduire avec le vin et le vinaigre.",
      "Ajouter le fond et réduire de moitié.",
      "Hacher les cornichons et les câpres.",
      "Les incorporer avec les herbes ciselées."
    ],
    conseils: "Sauce relevée parfaite pour la langue de bœuf et le porc.",
    variantes: ["Plus vinaigrée", "Avec tomate"]
  },

  "sauce_perigueux": {
    nom: "Sauce Périgueux",
    categorie: "sauce gastronomique",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Demi-glace (ou fond de veau très réduit)", quantite: "25 cl", type: "bouillon" },
      { nom: "Truffe noire", quantite: "30 g", type: "champignon" },
      { nom: "Jus de truffe", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Madère", quantite: "5 cl", type: "alcool" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Hacher finement la truffe.",
      "Faire chauffer la demi-glace avec le madère.",
      "Réduire légèrement.",
      "Ajouter le jus de truffe.",
      "Monter au beurre et incorporer la truffe."
    ],
    conseils: "La grande sauce aux truffes du Périgord. Pour les occasions exceptionnelles.",
    variantes: ["Avec cognac", "Plus généreuse en truffe"]
  },

  "sauce_truffee": {
    nom: "Sauce Truffée",
    redirect: "sauce_perigueux"
  },

  // ============================================
  // SAUCES CRÉMEUSES ET AUX CHAMPIGNONS
  // ============================================

  "sauce_a_la_creme_et_genievre": {
    nom: "Sauce à la Crème et Genièvre",
    categorie: "sauce crémeuse",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Baies de genièvre", quantite: "10", type: "épice" },
      { nom: "Gin ou genièvre", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Fond de gibier ou veau", quantite: "10 cl", type: "bouillon" },
      { nom: "Échalote", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Écraser les baies de genièvre.",
      "Faire suer l'échalote, déglacer au gin.",
      "Ajouter le fond et les baies, réduire de moitié.",
      "Incorporer la crème et laisser épaissir."
    ],
    conseils: "Sauce parfumée idéale pour le gibier et le canard.",
    variantes: ["Plus parfumée en baies", "Au peket belge"]
  },

  "sauce_champignons": {
    nom: "Sauce aux Champignons",
    categorie: "sauce crémeuse",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Champignons de Paris", quantite: "250 g", type: "légume" },
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Émincer les champignons et les faire sauter au beurre.",
      "Ajouter l'échalote ciselée.",
      "Déglacer au vin blanc et réduire.",
      "Incorporer la crème et laisser épaissir.",
      "Parsemer de persil."
    ],
    conseils: "Grand classique de la cuisine française. Ne pas laver les champignons, les brosser.",
    variantes: ["Aux champignons des bois", "Au thym"]
  },

  "sauce_creme_aux_champignons": {
    nom: "Sauce Crème aux Champignons",
    redirect: "sauce_champignons"
  },

  "sauce_cremeuse": {
    nom: "Sauce Crémeuse",
    redirect: "sauce_champignons"
  },

  "sauce_cremeuse_aux_champignons": {
    nom: "Sauce Crémeuse aux Champignons",
    redirect: "sauce_champignons"
  },

  "sauce_aux_champignons_sauvages": {
    nom: "Sauce aux Champignons Sauvages",
    categorie: "sauce gastronomique",
    temps_preparation: 20,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Cèpes frais ou séchés", quantite: "150 g", type: "champignon" },
      { nom: "Girolles", quantite: "100 g", type: "champignon" },
      { nom: "Crème légère", quantite: "15 cl", type: "produit laitier" },
      { nom: "Fond de veau", quantite: "15 cl", type: "bouillon" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "produit laitier" },
      { nom: "Persil plat", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Si séchés, réhydrater les cèpes 30 min dans l'eau tiède.",
      "Faire sauter les champignons au beurre à feu vif.",
      "Ajouter les échalotes ciselées.",
      "Mouiller avec le fond et le jus de trempage filtré.",
      "Réduire puis ajouter la crème.",
      "Parsemer de persil."
    ],
    conseils: "La sauce des grandes occasions. Les champignons sauvages méritent un traitement délicat.",
    variantes: ["Aux morilles", "Aux trompettes de la mort"]
  },

  "sauce_creme_aux_herbes": {
    nom: "Sauce Crème aux Herbes",
    categorie: "sauce crémeuse",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche", quantite: "20 cl", type: "produit laitier" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Estragon", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Cerfeuil", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" }
    ],
    etapes: [
      "Ciseler finement toutes les herbes.",
      "Faire chauffer la crème doucement.",
      "Incorporer les herbes et le jus de citron hors du feu.",
      "Servir immédiatement."
    ],
    conseils: "Les herbes doivent rester fraîches et vertes. Ne pas faire bouillir après ajout.",
    variantes: ["Avec aneth", "Au basilic"]
  },

  "sauce_creme_citron": {
    nom: "Sauce Crème Citron",
    categorie: "sauce légère",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche", quantite: "15 cl", type: "produit laitier" },
      { nom: "Citron", quantite: "1", type: "agrume" },
      { nom: "Câpres", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Beurre", quantite: "20 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire la crème légèrement.",
      "Ajouter le jus et le zeste de citron.",
      "Incorporer les câpres et le beurre.",
      "Servir avec du veau ou du poisson."
    ],
    conseils: "Sauce légère et acidulée, parfaite pour les escalopes de veau.",
    variantes: ["Au citron vert", "Avec aneth"]
  },

  "sauce_aux_herbes": {
    nom: "Sauce aux Herbes",
    categorie: "sauce verte",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Persil", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Cerfeuil", quantite: "1/4 bouquet", type: "herbe" },
      { nom: "Ciboulette", quantite: "1/2 bouquet", type: "herbe" },
      { nom: "Estragon", quantite: "quelques feuilles", type: "herbe" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" }
    ],
    etapes: [
      "Ciseler toutes les herbes très finement.",
      "Faire fondre le beurre et le laisser mousser.",
      "Incorporer les herbes hors du feu.",
      "Ajouter le jus de citron."
    ],
    conseils: "Un beurre aux herbes classique pour les grillades et poissons.",
    variantes: ["En sauce froide avec mayonnaise", "Avec ail"]
  },

  // ============================================
  // SAUCES AUX FRUITS
  // ============================================

  "sauce_aux_baies": {
    nom: "Sauce aux Baies",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Airelles ou myrtilles", quantite: "150 g", type: "fruit" },
      { nom: "Fond de gibier", quantite: "20 cl", type: "bouillon" },
      { nom: "Porto", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Faire compoter les baies avec le sucre.",
      "Ajouter le porto et le fond, réduire.",
      "Monter au beurre.",
      "Garder quelques baies entières pour la présentation."
    ],
    conseils: "Accord classique avec le gibier à plumes et à poils.",
    variantes: ["Aux mûres", "Aux groseilles"]
  },

  "sauce_au_cassis": {
    nom: "Sauce au Cassis",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Cassis frais ou surgelés", quantite: "100 g", type: "fruit" },
      { nom: "Crème de cassis", quantite: "5 cl", type: "alcool" },
      { nom: "Fond de canard", quantite: "20 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire réduire le fond de moitié.",
      "Ajouter la crème de cassis et les fruits.",
      "Laisser compoter 5 minutes.",
      "Monter au beurre."
    ],
    conseils: "Le cassis sublime le canard et le gibier.",
    variantes: ["Aux myrtilles", "Au vin rouge"]
  },

  "sauce_aux_myrtilles": {
    nom: "Sauce aux Myrtilles",
    redirect: "sauce_aux_baies"
  },

  "sauce_aux_figues": {
    nom: "Sauce aux Figues",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Figues fraîches", quantite: "4", type: "fruit" },
      { nom: "Porto", quantite: "10 cl", type: "alcool" },
      { nom: "Fond de canard ou veau", quantite: "15 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" },
      { nom: "Miel", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Couper les figues en quartiers.",
      "Les faire caraméliser au beurre avec le miel.",
      "Déglacer au porto.",
      "Ajouter le fond et réduire.",
      "Monter au beurre."
    ],
    conseils: "Sauce d'automne parfaite pour le magret de canard.",
    variantes: ["Au vinaigre balsamique", "Au vin rouge"]
  },

  "sauce_aux_framboises": {
    nom: "Sauce aux Framboises",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Framboises fraîches", quantite: "150 g", type: "fruit" },
      { nom: "Vinaigre de framboise", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de canard", quantite: "15 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Réserver quelques framboises pour la déco.",
      "Écraser les autres et les faire chauffer avec le vinaigre.",
      "Ajouter le fond et réduire.",
      "Passer au chinois, monter au beurre.",
      "Ajouter les framboises entières."
    ],
    conseils: "Sauce délicate pour le canard et le foie gras poêlé.",
    variantes: ["Aux groseilles", "Au vinaigre de vin"]
  },

  "sauce_aux_fruits_rouges": {
    nom: "Sauce aux Fruits Rouges",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Mélange de fruits rouges", quantite: "200 g", type: "fruit" },
      { nom: "Vinaigre de vin rouge", quantite: "2 c. à soupe", type: "assaisonnement" },
      { nom: "Fond de gibier", quantite: "20 cl", type: "bouillon" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Faire compoter les fruits avec le sucre et le vinaigre.",
      "Ajouter le fond et réduire de moitié.",
      "Monter au beurre.",
      "Servir avec quelques fruits entiers."
    ],
    conseils: "Parfaite pour le gibier et les magrets.",
    variantes: ["Plus acidulée", "Au porto"]
  },

  "sauce_aux_poires": {
    nom: "Sauce aux Poires",
    categorie: "sauce fruitée",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Poires mûres", quantite: "2", type: "fruit" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Miel", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Peler et couper les poires en dés.",
      "Les faire caraméliser au beurre avec le miel.",
      "Déglacer au vin blanc.",
      "Ajouter le fond et réduire.",
      "Mixer partiellement pour garder des morceaux."
    ],
    conseils: "Accompagnement original pour la volaille et le porc.",
    variantes: ["Au gorgonzola", "Au roquefort"]
  },

  "sauce_aux_pommes": {
    nom: "Sauce aux Pommes",
    categorie: "sauce fruitée",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes (Golden ou Boskoop)", quantite: "4", type: "fruit" },
      { nom: "Cidre brut", quantite: "15 cl", type: "alcool" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" },
      { nom: "Crème fraîche", quantite: "5 cl", type: "produit laitier" },
      { nom: "Cannelle", quantite: "1 pincée", type: "épice" }
    ],
    etapes: [
      "Peler et couper les pommes en morceaux.",
      "Les faire compoter au beurre à feu doux.",
      "Ajouter le cidre et la cannelle.",
      "Cuire jusqu'à obtenir une compote.",
      "Incorporer la crème."
    ],
    conseils: "Accompagnement traditionnel du boudin noir et du porc rôti.",
    variantes: ["Au calvados", "Avec raisins secs"]
  },

  "sauce_aux_pruneaux": {
    nom: "Sauce aux Pruneaux",
    categorie: "sauce fruitée",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Pruneaux d'Agen dénoyautés", quantite: "150 g", type: "fruit" },
      { nom: "Vin blanc sec", quantite: "20 cl", type: "alcool" },
      { nom: "Crème fraîche", quantite: "10 cl", type: "produit laitier" },
      { nom: "Fond de volaille", quantite: "15 cl", type: "bouillon" },
      { nom: "Armagnac", quantite: "2 c. à soupe", type: "alcool" }
    ],
    etapes: [
      "Faire gonfler les pruneaux dans le vin blanc tiède 1 heure.",
      "Ajouter le fond et l'armagnac.",
      "Laisser mijoter 15 minutes.",
      "Incorporer la crème."
    ],
    conseils: "Sauce classique du lapin et du porc. Les pruneaux d'Agen sont les meilleurs.",
    variantes: ["Au thé", "Sans crème"]
  },

  "sauce_aux_raisins": {
    nom: "Sauce aux Raisins",
    categorie: "sauce fruitée",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Raisins blancs muscat", quantite: "200 g", type: "fruit" },
      { nom: "Fond de volaille", quantite: "20 cl", type: "bouillon" },
      { nom: "Verjus ou vin blanc", quantite: "5 cl", type: "alcool" },
      { nom: "Beurre froid", quantite: "40 g", type: "produit laitier" }
    ],
    etapes: [
      "Éplucher et épépiner les raisins (ou les couper en deux).",
      "Faire réduire le fond avec le verjus.",
      "Ajouter les raisins et réchauffer.",
      "Monter au beurre."
    ],
    conseils: "Sauce automnale pour les volailles et le foie gras.",
    variantes: ["Aux raisins noirs", "Au muscat de Rivesaltes"]
  },

  "sauce_aux_agrumes": {
    nom: "Sauce aux Agrumes",
    categorie: "sauce fruitée",
    temps_preparation: 15,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Orange", quantite: "1", type: "agrume" },
      { nom: "Citron vert", quantite: "1", type: "agrume" },
      { nom: "Pamplemousse rose", quantite: "1/2", type: "agrume" },
      { nom: "Fond de canard", quantite: "20 cl", type: "bouillon" },
      { nom: "Miel", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Beurre froid", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Prélever les zestes et presser les agrumes.",
      "Faire réduire le fond avec les jus et le miel.",
      "Ajouter les zestes.",
      "Monter au beurre."
    ],
    conseils: "Sauce fraîche et parfumée pour le canard à l'orange moderne.",
    variantes: ["Au piment chipotle", "Au gingembre"]
  },

  // ============================================
  // SAUCES RÉGIONALES ET TRADITIONNELLES
  // ============================================

  "daube_provencale": {
    nom: "Sauce Daube Provençale",
    categorie: "sauce régionale",
    temps_preparation: 30,
    temps_cuisson: 180,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Vin rouge (Côtes du Rhône)", quantite: "75 cl", type: "alcool" },
      { nom: "Olives noires de Nyons", quantite: "100 g", type: "condiment" },
      { nom: "Zeste d'orange", quantite: "1", type: "agrume" },
      { nom: "Lard fumé", quantite: "100 g", type: "viande" },
      { nom: "Carottes", quantite: "3", type: "légume" },
      { nom: "Oignons", quantite: "2", type: "légume" },
      { nom: "Tomates", quantite: "3", type: "légume" },
      { nom: "Bouquet garni provençal", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Faire mariner la viande dans le vin la veille.",
      "Faire revenir le lard, puis les légumes.",
      "Ajouter la viande et le vin.",
      "Cuire 3 heures à feu très doux.",
      "Ajouter les olives et le zeste en fin de cuisson."
    ],
    conseils: "La vraie daube provençale se prépare la veille et se réchauffe.",
    variantes: ["Au vin blanc (daube avignonnaise)", "Aux câpres"]
  },

  "sauce_du_cassoulet": {
    nom: "Sauce du Cassoulet",
    categorie: "sauce régionale",
    temps_preparation: 30,
    temps_cuisson: 240,
    difficulte: "difficile",
    portions: 8,
    ingredients: [
      { nom: "Haricots lingots", quantite: "800 g", type: "légume" },
      { nom: "Confit de canard", quantite: "4 cuisses", type: "viande" },
      { nom: "Saucisse de Toulouse", quantite: "400 g", type: "viande" },
      { nom: "Couenne de porc", quantite: "200 g", type: "viande" },
      { nom: "Tomates", quantite: "3", type: "légume" },
      { nom: "Oignon piqué de clous de girofle", quantite: "1", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Tremper les haricots la veille.",
      "Les cuire avec la couenne, l'oignon et le bouquet garni.",
      "Monter le cassoulet en couches dans une cassole.",
      "Cuire au four 4 heures en cassant la croûte 7 fois."
    ],
    conseils: "Le cassoulet est un art. La croûte doit être cassée et reformée plusieurs fois.",
    variantes: ["De Castelnaudary", "De Toulouse", "De Carcassonne"]
  },

  "sauce_navarin": {
    nom: "Sauce Navarin",
    categorie: "sauce printanière",
    temps_preparation: 30,
    temps_cuisson: 90,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Fond d'agneau ou veau", quantite: "50 cl", type: "bouillon" },
      { nom: "Navets nouveaux", quantite: "200 g", type: "légume" },
      { nom: "Carottes nouvelles", quantite: "200 g", type: "légume" },
      { nom: "Petits pois", quantite: "150 g", type: "légume" },
      { nom: "Pommes de terre grenaille", quantite: "300 g", type: "légume" },
      { nom: "Tomates", quantite: "2", type: "légume" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Faire rissoler les morceaux d'agneau.",
      "Singer avec la farine, mouiller au fond.",
      "Ajouter les tomates et le bouquet garni.",
      "Incorporer les légumes selon leur temps de cuisson.",
      "Les petits pois en dernier."
    ],
    conseils: "Le navarin printanier est un hymne aux légumes nouveaux.",
    variantes: ["Sans pommes de terre", "Avec fèves"]
  },

  "sauce_printaniere": {
    nom: "Sauce Printanière",
    redirect: "sauce_navarin"
  },

  "sauce_civet": {
    nom: "Sauce Civet",
    categorie: "sauce traditionnelle",
    temps_preparation: 30,
    temps_cuisson: 150,
    difficulte: "difficile",
    portions: 6,
    ingredients: [
      { nom: "Vin rouge corsé", quantite: "1 L", type: "alcool" },
      { nom: "Sang de lièvre ou lapin", quantite: "10 cl", type: "liaison" },
      { nom: "Lardons", quantite: "150 g", type: "viande" },
      { nom: "Oignons grelots", quantite: "12", type: "légume" },
      { nom: "Champignons", quantite: "200 g", type: "légume" },
      { nom: "Cognac", quantite: "5 cl", type: "alcool" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" }
    ],
    etapes: [
      "Faire mariner la viande dans le vin 24 heures.",
      "Faire revenir les lardons, la garniture.",
      "Cuire la viande dans la marinade 2h30.",
      "Lier au sang hors du feu, sans faire bouillir."
    ],
    conseils: "La liaison au sang est délicate : ne jamais faire bouillir après.",
    variantes: ["Avec chocolat amer à la place du sang", "Au vin blanc"]
  },

  "sauce_au_sang": {
    nom: "Sauce au Sang",
    redirect: "sauce_civet"
  },

  "sauce_royale": {
    nom: "Sauce Royale",
    categorie: "sauce classique",
    temps_preparation: 20,
    temps_cuisson: 20,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Fond de gibier", quantite: "30 cl", type: "bouillon" },
      { nom: "Sang de gibier", quantite: "5 cl", type: "liaison" },
      { nom: "Foie de gibier", quantite: "50 g", type: "abat" },
      { nom: "Cognac", quantite: "3 c. à soupe", type: "alcool" },
      { nom: "Crème", quantite: "5 cl", type: "produit laitier" }
    ],
    etapes: [
      "Mixer le foie avec le sang et la crème.",
      "Faire réduire le fond avec le cognac.",
      "Lier avec le mélange hors du feu.",
      "Ne surtout pas faire bouillir."
    ],
    conseils: "La sauce royale traditionnelle du gibier à plumes.",
    variantes: ["Sans sang (au chocolat)", "Avec truffe"]
  },

  "salmis": {
    nom: "Sauce Salmis",
    categorie: "sauce classique",
    temps_preparation: 30,
    temps_cuisson: 45,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Carcasses de gibier à plumes", quantite: "2", type: "os" },
      { nom: "Vin rouge", quantite: "50 cl", type: "alcool" },
      { nom: "Échalotes", quantite: "4", type: "aromate" },
      { nom: "Cognac", quantite: "5 cl", type: "alcool" },
      { nom: "Fond de gibier", quantite: "30 cl", type: "bouillon" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" }
    ],
    etapes: [
      "Concasser les carcasses et les faire rissoler.",
      "Ajouter les échalotes, déglacer au cognac.",
      "Mouiller au vin et au fond.",
      "Cuire 45 minutes, passer au chinois en pressant.",
      "Monter au beurre."
    ],
    conseils: "La grande sauce du gibier à plumes. Les carcasses doivent être bien rissolées.",
    variantes: ["Avec foie gras", "Au sang"]
  },

  "sauce_salmis": {
    nom: "Sauce Salmis",
    redirect: "salmis"
  },

  "sauce_tajine": {
    nom: "Sauce Tajine",
    categorie: "sauce marocaine",
    temps_preparation: 20,
    temps_cuisson: 90,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Oignons", quantite: "3", type: "légume" },
      { nom: "Ras el hanout", quantite: "2 c. à soupe", type: "épice" },
      { nom: "Safran", quantite: "1 pincée", type: "épice" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Pruneaux ou abricots secs", quantite: "150 g", type: "fruit" },
      { nom: "Amandes", quantite: "50 g", type: "fruit sec" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "matière grasse" }
    ],
    etapes: [
      "Faire revenir les oignons émincés dans l'huile.",
      "Ajouter les épices et faire torréfier.",
      "Mouiller légèrement et ajouter la viande.",
      "Cuire longuement à couvert.",
      "Ajouter les fruits secs et le miel en fin."
    ],
    conseils: "Le tajine se cuit lentement, la viande doit être confite.",
    variantes: ["Aux citrons confits et olives", "Aux coings"]
  },

  "sauce_osso_buco": {
    nom: "Sauce Osso Buco",
    categorie: "sauce italienne",
    temps_preparation: 20,
    temps_cuisson: 120,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Vin blanc sec", quantite: "30 cl", type: "alcool" },
      { nom: "Tomates pelées", quantite: "400 g", type: "légume" },
      { nom: "Oignon, carotte, céleri", quantite: "1 de chaque", type: "légume" },
      { nom: "Fond de veau", quantite: "30 cl", type: "bouillon" },
      { nom: "Zeste de citron", quantite: "1", type: "agrume" },
      { nom: "Persil", quantite: "1 bouquet", type: "herbe" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Faire rissoler la viande farinée.",
      "Faire revenir les légumes en brunoise.",
      "Déglacer au vin blanc.",
      "Ajouter les tomates et le fond.",
      "Cuire 2 heures à couvert.",
      "Servir avec la gremolata (zeste, persil, ail)."
    ],
    conseils: "L'osso buco se sert traditionnellement avec du risotto alla milanese.",
    variantes: ["Bianco (sans tomates)", "Al pomodoro"]
  },

  "sauce_milanaise": {
    nom: "Sauce Milanaise",
    categorie: "sauce italienne",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Tomates", quantite: "300 g", type: "légume" },
      { nom: "Jambon cuit", quantite: "100 g", type: "viande" },
      { nom: "Champignons", quantite: "150 g", type: "légume" },
      { nom: "Vin blanc", quantite: "10 cl", type: "alcool" },
      { nom: "Beurre", quantite: "30 g", type: "produit laitier" }
    ],
    etapes: [
      "Faire sauter les champignons émincés.",
      "Ajouter le jambon en julienne.",
      "Incorporer les tomates concassées.",
      "Mouiller au vin blanc et laisser mijoter."
    ],
    conseils: "Sauce classique pour accompagner les escalopes panées.",
    variantes: ["Avec langue fumée", "Au marsala"]
  },

  "sauce_saltimbocca": {
    nom: "Sauce Saltimbocca",
    categorie: "sauce italienne",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Sauge fraîche", quantite: "12 feuilles", type: "herbe" },
      { nom: "Jambon de Parme", quantite: "8 tranches", type: "viande" },
      { nom: "Beurre", quantite: "60 g", type: "produit laitier" },
      { nom: "Fond de veau", quantite: "10 cl", type: "bouillon" }
    ],
    etapes: [
      "Cuire les escalopes garnies de sauge et jambon.",
      "Déglacer au vin blanc.",
      "Ajouter le fond et réduire.",
      "Monter au beurre."
    ],
    conseils: "Le saltimbocca alla romana : la sauge et le jambon parfument la sauce.",
    variantes: ["Au marsala", "Avec câpres"]
  },

  "sauce_venitienne": {
    nom: "Sauce Vénitienne",
    categorie: "sauce italienne",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Oignons", quantite: "500 g", type: "légume" },
      { nom: "Vin blanc sec", quantite: "15 cl", type: "alcool" },
      { nom: "Beurre", quantite: "50 g", type: "produit laitier" },
      { nom: "Huile d'olive", quantite: "2 c. à soupe", type: "matière grasse" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" }
    ],
    etapes: [
      "Émincer les oignons très finement.",
      "Les faire fondre au beurre et huile à feu très doux.",
      "Cuire 45 minutes jusqu'à caramélisation complète.",
      "Déglacer au vin blanc."
    ],
    conseils: "Le fegato alla veneziana : les oignons doivent être fondants et dorés.",
    variantes: ["Au vinaigre balsamique", "Avec persil"]
  },

  // ============================================
  // SAUCES BBQ ET AMÉRICAINES
  // ============================================

  "sauce_bbq_fumee": {
    nom: "Sauce BBQ Fumée",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Ketchup", quantite: "250 g", type: "condiment" },
      { nom: "Vinaigre de cidre", quantite: "5 cl", type: "assaisonnement" },
      { nom: "Cassonade", quantite: "100 g", type: "sucrant" },
      { nom: "Paprika fumé", quantite: "2 c. à soupe", type: "épice" },
      { nom: "Mélasse", quantite: "2 c. à soupe", type: "sucrant" },
      { nom: "Sauce Worcestershire", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Oignon en poudre", quantite: "1 c. à café", type: "épice" },
      { nom: "Ail en poudre", quantite: "1 c. à café", type: "épice" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition puis réduire le feu.",
      "Laisser mijoter 30 minutes en remuant.",
      "La sauce doit épaissir et devenir brillante."
    ],
    conseils: "Le paprika fumé est la clé de l'arôme fumé. Se conserve plusieurs semaines au frais.",
    variantes: ["Plus épicée avec du chipotle", "Au bourbon"]
  },

  "sauce_bbq_kansas_city": {
    nom: "Sauce BBQ Kansas City",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Ketchup", quantite: "300 g", type: "condiment" },
      { nom: "Mélasse", quantite: "4 c. à soupe", type: "sucrant" },
      { nom: "Vinaigre de cidre", quantite: "4 c. à soupe", type: "assaisonnement" },
      { nom: "Cassonade", quantite: "50 g", type: "sucrant" },
      { nom: "Moutarde jaune", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Sauce Worcestershire", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Liquid smoke (facultatif)", quantite: "1/2 c. à café", type: "arôme" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Faire mijoter 25 minutes à feu doux.",
      "Laisser refroidir."
    ],
    conseils: "Style Kansas City : épaisse, sucrée et tomatée. La plus populaire aux USA.",
    variantes: ["Plus épicée", "Au café"]
  },

  "sauce_bbq_memphis": {
    nom: "Sauce BBQ Memphis",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Vinaigre de cidre", quantite: "15 cl", type: "assaisonnement" },
      { nom: "Moutarde jaune", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Ketchup", quantite: "100 g", type: "condiment" },
      { nom: "Sucre brun", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Paprika", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Cayenne", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Mélanger tous les ingrédients.",
      "Faire mijoter 20 minutes.",
      "Cette sauce est plus fine que la Kansas City."
    ],
    conseils: "Style Memphis : plus vinaigrée et moutardée, moins épaisse.",
    variantes: ["Dry rub sans sauce", "Plus moutardée"]
  },

  "sauce_bbq_sucree": {
    nom: "Sauce BBQ Sucrée",
    redirect: "sauce_bbq_kansas_city"
  },

  "sauce_bbq_texane": {
    nom: "Sauce BBQ Texane",
    categorie: "sauce américaine",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "facile",
    portions: 10,
    ingredients: [
      { nom: "Tomates concassées", quantite: "400 g", type: "légume" },
      { nom: "Vinaigre de cidre", quantite: "10 cl", type: "assaisonnement" },
      { nom: "Mélasse", quantite: "3 c. à soupe", type: "sucrant" },
      { nom: "Piment chipotle", quantite: "2", type: "épice" },
      { nom: "Cumin", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Café fort", quantite: "5 cl", type: "arôme" }
    ],
    etapes: [
      "Faire revenir l'oignon et l'ail.",
      "Ajouter les tomates, chipotles et épices.",
      "Mouiller au vinaigre et café.",
      "Mijoter 45 minutes, mixer."
    ],
    conseils: "Style texan : épicée, fumée, moins sucrée. Le café ajoute de la profondeur.",
    variantes: ["Au whisky", "Plus pimentée"]
  },

  "sauce_carolina_vinegar": {
    nom: "Sauce Carolina Vinegar",
    categorie: "sauce américaine",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Vinaigre de cidre", quantite: "25 cl", type: "assaisonnement" },
      { nom: "Piment rouge broyé", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucrant" },
      { nom: "Sel", quantite: "1 c. à café", type: "assaisonnement" },
      { nom: "Cayenne", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Chauffer le vinaigre avec le sucre et le sel.",
      "Ajouter les épices.",
      "Laisser infuser."
    ],
    conseils: "Style Caroline : très vinaigrée et épicée, sans tomate. Pour le pulled pork.",
    variantes: ["South Carolina avec moutarde", "Avec sauce piquante"]
  },

  "sauce_buffalo": {
    nom: "Sauce Buffalo",
    categorie: "sauce américaine",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Sauce piquante (Frank's RedHot)", quantite: "12 cl", type: "condiment" },
      { nom: "Beurre", quantite: "100 g", type: "produit laitier" },
      { nom: "Vinaigre blanc", quantite: "1 c. à soupe", type: "assaisonnement" },
      { nom: "Sauce Worcestershire", quantite: "1/2 c. à café", type: "condiment" },
      { nom: "Cayenne", quantite: "1/4 c. à café", type: "épice" }
    ],
    etapes: [
      "Faire fondre le beurre.",
      "Ajouter la sauce piquante et les autres ingrédients.",
      "Bien mélanger.",
      "Enrober les ailes de poulet frites."
    ],
    conseils: "La sauce des Buffalo wings de New York. Servir avec du bleu cheese.",
    variantes: ["Extra hot", "Honey buffalo"]
  },

  "sauce_burger": {
    nom: "Sauce Burger",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Mayonnaise", quantite: "100 g", type: "condiment" },
      { nom: "Ketchup", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Cornichons", quantite: "3", type: "condiment" },
      { nom: "Oignon", quantite: "1/4", type: "légume" },
      { nom: "Moutarde", quantite: "1 c. à café", type: "condiment" },
      { nom: "Paprika", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Hacher finement les cornichons et l'oignon.",
      "Mélanger avec la mayonnaise et le ketchup.",
      "Ajouter la moutarde et le paprika."
    ],
    conseils: "La sauce burger maison type Big Mac. Ajuster le sucré/acide selon vos goûts.",
    variantes: ["Avec relish", "Sauce smoky au bacon"]
  },

  "sauce_ranch": {
    nom: "Sauce Ranch",
    categorie: "sauce américaine",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Yaourt grec ou crème aigre", quantite: "200 g", type: "produit laitier" },
      { nom: "Mayonnaise", quantite: "100 g", type: "condiment" },
      { nom: "Ciboulette", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Aneth", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Ail en poudre", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Oignon en poudre", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Jus de citron", quantite: "1 c. à soupe", type: "agrume" }
    ],
    etapes: [
      "Mélanger le yaourt et la mayonnaise.",
      "Ajouter les herbes ciselées et les épices.",
      "Incorporer le jus de citron.",
      "Réfrigérer 1 heure avant de servir."
    ],
    conseils: "Sauce américaine omniprésente. Parfaite pour les crudités et le poulet frit.",
    variantes: ["Au bacon", "Épicée"]
  },

  // ===== SAUCES INTERNATIONALES =====

  "salsa_verde": {
    nom: "Salsa verde",
    categorie: "sauce mexicaine",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomatilles", quantite: "500 g", type: "légume" },
      { nom: "Piments verts (serrano ou jalapeño)", quantite: "2-3", type: "piment" },
      { nom: "Oignon", quantite: "1/2", type: "légume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Coriandre fraîche", quantite: "1 bouquet", type: "herbe" },
      { nom: "Jus de citron vert", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Sel", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Retirer la peau des tomatilles et les rincer.",
      "Faire griller les tomatilles, piments, oignon et ail à sec dans une poêle.",
      "Mixer tous les ingrédients grillés avec la coriandre.",
      "Ajouter le jus de citron vert et assaisonner."
    ],
    conseils: "Les tomatilles peuvent être remplacées par des tomates vertes. La salsa se conserve 1 semaine au frais.",
    variantes: ["Crue (sans griller)", "Avec avocat"]
  },

  "sauce_a_la_menthe": {
    nom: "Sauce à la menthe",
    categorie: "sauce anglaise",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Menthe fraîche", quantite: "1 gros bouquet (50 g)", type: "herbe" },
      { nom: "Vinaigre de vin blanc", quantite: "100 ml", type: "vinaigre" },
      { nom: "Sucre", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Eau chaude", quantite: "50 ml", type: "liquide" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Dissoudre le sucre dans l'eau chaude.",
      "Ciseler finement la menthe.",
      "Mélanger le vinaigre, l'eau sucrée et la menthe.",
      "Laisser infuser au moins 30 minutes."
    ],
    conseils: "Accompagnement traditionnel du gigot d'agneau en Angleterre. Préparer la veille pour plus de saveur.",
    variantes: ["Au vinaigre balsamique", "Avec un peu de gelée de groseilles"]
  },

  "sauce_aigre_douce": {
    nom: "Sauce aigre-douce",
    categorie: "sauce asiatique",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Ananas en morceaux", quantite: "200 g", type: "fruit" },
      { nom: "Vinaigre de riz", quantite: "80 ml", type: "vinaigre" },
      { nom: "Sucre", quantite: "80 g", type: "sucre" },
      { nom: "Ketchup", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Sauce soja", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Maïzena", quantite: "1 c. à soupe", type: "liant" },
      { nom: "Poivron rouge", quantite: "1/2", type: "légume" }
    ],
    etapes: [
      "Faire chauffer le vinaigre et le sucre jusqu'à dissolution.",
      "Ajouter le ketchup, la sauce soja et les morceaux d'ananas.",
      "Incorporer le poivron coupé en dés.",
      "Épaissir avec la maïzena diluée dans un peu d'eau.",
      "Laisser mijoter 5 minutes."
    ],
    conseils: "Classique de la cuisine sino-américaine. Excellent avec du porc ou du canard.",
    variantes: ["Avec mangue", "Plus épicée au piment"]
  },

  "sauce_asiatique": {
    nom: "Sauce asiatique",
    categorie: "sauce asiatique",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Sauce soja", quantite: "100 ml", type: "condiment" },
      { nom: "Gingembre frais râpé", quantite: "2 c. à soupe", type: "aromate" },
      { nom: "Anis étoilé", quantite: "2", type: "épice" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "huile" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Ciboule", quantite: "2 tiges", type: "herbe" }
    ],
    etapes: [
      "Infuser l'anis étoilé dans la sauce soja chaude 10 minutes.",
      "Retirer l'anis et ajouter le gingembre et l'ail pressé.",
      "Incorporer le miel et l'huile de sésame.",
      "Finir avec la ciboule ciselée."
    ],
    conseils: "Base polyvalente pour marinades et glaçages. Les saveurs umami s'intensifient au repos.",
    variantes: ["Au cinq-épices", "Avec du piment"]
  },

  "sauce_au_cacao": {
    nom: "Sauce au cacao",
    categorie: "sauce gastronomique",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Cacao amer en poudre", quantite: "20 g", type: "cacao" },
      { nom: "Vin rouge corsé", quantite: "200 ml", type: "alcool" },
      { nom: "Fond de veau", quantite: "300 ml", type: "fond" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Quatre-épices", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" },
      { nom: "Miel", quantite: "1 c. à soupe", type: "sucre" }
    ],
    etapes: [
      "Faire suer les échalotes émincées dans le beurre.",
      "Déglacer au vin rouge et réduire de moitié.",
      "Ajouter le fond de veau et les épices.",
      "Incorporer le cacao en fouettant et laisser réduire.",
      "Ajouter le miel et monter au beurre."
    ],
    conseils: "Le cacao apporte profondeur et amertume. Excellent avec le gibier et le canard.",
    variantes: ["Au chocolat noir 70%", "Avec du piment d'Espelette"]
  },

  "sauce_au_chocolat": {
    nom: "Sauce au chocolat (salée)",
    categorie: "sauce moderne",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Chocolat noir 70%", quantite: "50 g", type: "chocolat" },
      { nom: "Fond de gibier ou veau", quantite: "300 ml", type: "fond" },
      { nom: "Vin rouge", quantite: "100 ml", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "matière grasse" },
      { nom: "Poivre noir", quantite: "à volonté", type: "épice" }
    ],
    etapes: [
      "Faire réduire le vin avec les échalotes émincées.",
      "Ajouter le fond et réduire de moitié.",
      "Hors du feu, incorporer le chocolat râpé en fouettant.",
      "Monter au beurre et poivrer."
    ],
    conseils: "Alternative moderne au sang dans les civets. Le chocolat apporte rondeur et brillance.",
    variantes: ["Au café", "Avec des épices mexicaines"]
  },

  "sauce_au_chocolat_amer": {
    nom: "Sauce au chocolat amer",
    categorie: "sauce moderne",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Chocolat noir 85%", quantite: "40 g", type: "chocolat" },
      { nom: "Fond de veau", quantite: "300 ml", type: "fond" },
      { nom: "Porto", quantite: "50 ml", type: "alcool" },
      { nom: "Échalotes", quantite: "1", type: "aromate" },
      { nom: "Thym", quantite: "1 branche", type: "herbe" },
      { nom: "Beurre", quantite: "20 g", type: "matière grasse" }
    ],
    etapes: [
      "Réduire le porto avec l'échalote et le thym.",
      "Ajouter le fond et réduire d'un tiers.",
      "Filtrer et incorporer le chocolat hors du feu.",
      "Émulsionner au beurre."
    ],
    conseils: "L'amertume du chocolat équilibre les viandes riches. Ne pas sucrer.",
    variantes: ["Au cognac", "Avec zeste d'orange"]
  },

  "sauce_au_chou": {
    nom: "Sauce au chou",
    categorie: "sauce alsacienne",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Choucroute cuite", quantite: "200 g", type: "légume" },
      { nom: "Vin blanc d'Alsace", quantite: "150 ml", type: "alcool" },
      { nom: "Crème fraîche", quantite: "150 ml", type: "crème" },
      { nom: "Baies de genièvre", quantite: "5", type: "épice" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire fondre l'oignon émincé dans le beurre.",
      "Ajouter la choucroute égouttée et les baies de genièvre.",
      "Mouiller au vin blanc et laisser cuire 15 minutes.",
      "Mixer et ajouter la crème.",
      "Réduire jusqu'à consistance onctueuse."
    ],
    conseils: "Accompagne parfaitement le porc et les saucisses. L'acidité de la choucroute coupe le gras.",
    variantes: ["Au riesling", "Avec lardons"]
  },

  "sauce_au_citron": {
    nom: "Sauce au citron",
    categorie: "sauce légère",
    temps_preparation: 10,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Citron", quantite: "2", type: "agrume" },
      { nom: "Beurre", quantite: "80 g", type: "matière grasse" },
      { nom: "Fond de volaille", quantite: "100 ml", type: "fond" },
      { nom: "Persil", quantite: "2 c. à soupe", type: "herbe" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Prélever le zeste d'un citron et presser les deux.",
      "Réduire le fond de volaille avec le jus de citron.",
      "Monter au beurre froid en fouettant.",
      "Ajouter le zeste et le persil ciselé."
    ],
    conseils: "Fraîcheur idéale pour les volailles et poissons. Le beurre tempère l'acidité.",
    variantes: ["À la crème", "Avec câpres"]
  },

  "sauce_au_citron_confit": {
    nom: "Sauce au citron confit",
    categorie: "sauce orientale",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Citron confit", quantite: "1", type: "condiment" },
      { nom: "Olives vertes", quantite: "50 g", type: "condiment" },
      { nom: "Fond de volaille", quantite: "200 ml", type: "fond" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Coriandre fraîche", quantite: "2 c. à soupe", type: "herbe" }
    ],
    etapes: [
      "Rincer et hacher finement le citron confit (écorce uniquement).",
      "Faire revenir l'ail dans l'huile d'olive.",
      "Ajouter le fond et réduire légèrement.",
      "Incorporer le citron confit et les olives dénoyautées.",
      "Finir avec la coriandre."
    ],
    conseils: "Parfum du Maghreb. Excellent avec le poulet et l'agneau. Ne pas saler, le citron confit l'est déjà.",
    variantes: ["Aux olives noires", "Avec harissa"]
  },

  "sauce_au_cola": {
    nom: "Sauce au cola",
    categorie: "sauce américaine",
    temps_preparation: 5,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Coca-Cola", quantite: "330 ml", type: "boisson" },
      { nom: "Ketchup", quantite: "100 g", type: "condiment" },
      { nom: "Sauce Worcestershire", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de cidre", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Oignon râpé", quantite: "1", type: "légume" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" }
    ],
    etapes: [
      "Mélanger tous les ingrédients dans une casserole.",
      "Porter à ébullition puis réduire à feu doux.",
      "Laisser réduire de moitié (environ 25 minutes).",
      "La sauce doit napper la cuillère."
    ],
    conseils: "Sauce BBQ américaine culte. Le cola apporte du caramel et des épices. Excellent pour glacer des travers.",
    variantes: ["Au Dr Pepper", "Avec bourbon"]
  },

  "sauce_au_foie_gras": {
    nom: "Sauce au foie gras",
    categorie: "sauce de luxe",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "difficile",
    portions: 4,
    ingredients: [
      { nom: "Foie gras mi-cuit", quantite: "80 g", type: "foie gras" },
      { nom: "Fond de veau", quantite: "200 ml", type: "fond" },
      { nom: "Porto", quantite: "50 ml", type: "alcool" },
      { nom: "Crème", quantite: "50 ml", type: "crème" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "20 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire suer l'échalote dans le beurre.",
      "Déglacer au porto et réduire de moitié.",
      "Ajouter le fond et la crème, réduire légèrement.",
      "Hors du feu, incorporer le foie gras en morceaux en fouettant.",
      "Passer au chinois fin. Ne pas faire bouillir."
    ],
    conseils: "Sauce grand luxe pour le bœuf et le canard. Le foie gras doit être froid pour bien émulsionner.",
    variantes: ["À la truffe", "Au Sauternes"]
  },

  "sauce_au_miel_epice": {
    nom: "Sauce au miel épicé",
    categorie: "sauce moderne",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Miel", quantite: "80 g", type: "sucre" },
      { nom: "Vinaigre de cidre", quantite: "3 c. à soupe", type: "vinaigre" },
      { nom: "Quatre-épices", quantite: "1 c. à café", type: "épice" },
      { nom: "Gingembre en poudre", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Piment de Cayenne", quantite: "1 pincée", type: "épice" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire chauffer le miel avec le vinaigre.",
      "Ajouter les épices et laisser infuser.",
      "Monter au beurre hors du feu."
    ],
    conseils: "Glaçage idéal pour le canard, le porc et les travers. Badigeonner en fin de cuisson.",
    variantes: ["Au piment d'Espelette", "À l'orange"]
  },

  "sauce_au_miel_et_epices": {
    redirect: "sauce_au_miel_epice"
  },

  "sauce_au_miel_et_romarin": {
    nom: "Sauce au miel et romarin",
    categorie: "sauce moderne",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Miel de lavande", quantite: "60 g", type: "sucre" },
      { nom: "Romarin frais", quantite: "3 branches", type: "herbe" },
      { nom: "Fond de volaille", quantite: "200 ml", type: "fond" },
      { nom: "Vinaigre balsamique", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Infuser le romarin dans le fond chaud 10 minutes.",
      "Retirer le romarin et ajouter le miel.",
      "Incorporer le vinaigre balsamique.",
      "Réduire légèrement et monter au beurre."
    ],
    conseils: "Parfait avec l'agneau provençal. Le miel de lavande renforce l'accord régional.",
    variantes: ["Au thym", "À la sauge"]
  },

  "sauce_au_raifort": {
    nom: "Sauce au raifort",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Raifort frais râpé", quantite: "50 g", type: "condiment" },
      { nom: "Crème fraîche épaisse", quantite: "200 g", type: "crème" },
      { nom: "Vinaigre de vin blanc", quantite: "1 c. à soupe", type: "vinaigre" },
      { nom: "Sucre", quantite: "1 c. à café", type: "sucre" },
      { nom: "Sel", quantite: "1/2 c. à café", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger le raifort râpé avec le vinaigre.",
      "Incorporer la crème fraîche.",
      "Ajouter le sucre et le sel.",
      "Réserver au frais au moins 1 heure."
    ],
    conseils: "Accompagnement traditionnel du pot-au-feu et du rosbif. Le raifort perd sa force à la cuisson, ne pas chauffer.",
    variantes: ["À la pomme râpée", "Au wasabi"]
  },

  "sauce_raifort": {
    redirect: "sauce_au_raifort"
  },

  "sauce_au_romarin": {
    nom: "Sauce au romarin",
    categorie: "sauce aromatique",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Romarin frais", quantite: "4 branches", type: "herbe" },
      { nom: "Fond d'agneau ou de veau", quantite: "300 ml", type: "fond" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Ail", quantite: "2 gousses", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "matière grasse" }
    ],
    etapes: [
      "Réduire le vin blanc avec l'ail écrasé.",
      "Ajouter le fond et le romarin.",
      "Laisser infuser et réduire de moitié.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Le romarin a un goût puissant, ne pas en abuser. Parfait avec l'agneau et le porc.",
    variantes: ["Au miel", "À l'ail confit"]
  },

  "sauce_au_thym": {
    nom: "Sauce au thym",
    categorie: "sauce provençale",
    temps_preparation: 5,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Thym frais", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Fond de volaille", quantite: "300 ml", type: "fond" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Crème", quantite: "50 ml", type: "crème" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire suer les échalotes dans le beurre.",
      "Déglacer au vin blanc et réduire.",
      "Ajouter le fond et le thym, infuser 15 minutes.",
      "Filtrer, ajouter la crème et réduire.",
      "Monter au beurre."
    ],
    conseils: "Le thym de Provence a le parfum le plus intense. Excellent avec lapin, poulet et agneau.",
    variantes: ["Au citron", "À la lavande"]
  },

  "sauce_au_verjus": {
    nom: "Sauce au verjus",
    categorie: "sauce classique",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 4,
    ingredients: [
      { nom: "Verjus", quantite: "150 ml", type: "acide" },
      { nom: "Fond de volaille", quantite: "200 ml", type: "fond" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Crème", quantite: "100 ml", type: "crème" },
      { nom: "Beurre", quantite: "50 g", type: "matière grasse" },
      { nom: "Estragon", quantite: "quelques feuilles", type: "herbe" }
    ],
    etapes: [
      "Faire suer les échalotes dans le beurre.",
      "Déglacer au verjus et réduire des deux tiers.",
      "Ajouter le fond et réduire de moitié.",
      "Incorporer la crème, réduire légèrement.",
      "Monter au beurre et ajouter l'estragon."
    ],
    conseils: "Acidité subtile du raisin vert, plus douce que le vinaigre. Sauce médiévale redécouverte.",
    variantes: ["Sans crème", "Aux grains de raisin"]
  },

  "sauce_aux_carottes": {
    nom: "Sauce aux carottes",
    categorie: "sauce simple",
    temps_preparation: 15,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Carottes", quantite: "400 g", type: "légume" },
      { nom: "Fond de volaille", quantite: "200 ml", type: "fond" },
      { nom: "Jus de cuisson", quantite: "100 ml", type: "jus" },
      { nom: "Beurre", quantite: "40 g", type: "matière grasse" },
      { nom: "Crème", quantite: "50 ml", type: "crème" },
      { nom: "Cumin", quantite: "1/2 c. à café", type: "épice" }
    ],
    etapes: [
      "Cuire les carottes en rondelles dans le fond.",
      "Mixer finement avec la crème.",
      "Ajouter le jus de cuisson et le cumin.",
      "Monter au beurre."
    ],
    conseils: "Douceur naturelle de la carotte. Accompagne bien le porc et la volaille.",
    variantes: ["À l'orange", "Au gingembre"]
  },

  "sauce_aux_lentilles": {
    nom: "Sauce aux lentilles",
    categorie: "sauce auvergnate",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Lentilles vertes du Puy", quantite: "150 g", type: "légumineuse" },
      { nom: "Lardons fumés", quantite: "100 g", type: "charcuterie" },
      { nom: "Fond de veau", quantite: "300 ml", type: "fond" },
      { nom: "Vin rouge", quantite: "100 ml", type: "alcool" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Carotte", quantite: "1", type: "légume" },
      { nom: "Thym", quantite: "1 branche", type: "herbe" }
    ],
    etapes: [
      "Faire rissoler les lardons, ajouter l'oignon et la carotte en dés.",
      "Ajouter les lentilles, le vin et le fond.",
      "Cuire 35-40 minutes avec le thym.",
      "Retirer le thym, écraser légèrement pour lier."
    ],
    conseils: "Accompagnement rustique du petit salé. Les lentilles ne doivent pas être en purée.",
    variantes: ["Au vinaigre", "Avec saucisse de Morteau"]
  },

  "sauce_aux_marrons": {
    nom: "Sauce aux marrons",
    categorie: "sauce classique",
    temps_preparation: 15,
    temps_cuisson: 20,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Marrons cuits", quantite: "200 g", type: "légume" },
      { nom: "Fond de volaille", quantite: "300 ml", type: "fond" },
      { nom: "Crème", quantite: "100 ml", type: "crème" },
      { nom: "Cognac", quantite: "30 ml", type: "alcool" },
      { nom: "Beurre", quantite: "40 g", type: "matière grasse" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Écraser grossièrement la moitié des marrons.",
      "Chauffer le fond et y ajouter tous les marrons.",
      "Incorporer la crème et le cognac.",
      "Laisser réduire 10 minutes.",
      "Monter au beurre."
    ],
    conseils: "Sauce automnale par excellence. Accompagne dinde, chapon, gibier et porc.",
    variantes: ["Avec morceaux entiers", "Au porto"]
  },

  "sauce_aux_navets": {
    nom: "Sauce aux navets",
    categorie: "sauce classique",
    temps_preparation: 15,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Navets", quantite: "300 g", type: "légume" },
      { nom: "Fond de canard ou volaille", quantite: "300 ml", type: "fond" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Beurre", quantite: "50 g", type: "matière grasse" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "vinaigre" }
    ],
    etapes: [
      "Couper les navets en dés et les glacer au beurre et miel.",
      "Mouiller au fond et laisser cuire jusqu'à fondant.",
      "Mixer une partie pour lier.",
      "Ajouter le vinaigre et servir avec les dés entiers."
    ],
    conseils: "Classique avec le canard. Les navets nouveaux au printemps sont les meilleurs.",
    variantes: ["Avec morilles", "Au jus d'orange"]
  },

  "sauce_aux_olives": {
    nom: "Sauce aux olives",
    categorie: "sauce méditerranéenne",
    temps_preparation: 10,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Olives noires et vertes mélangées", quantite: "150 g", type: "condiment" },
      { nom: "Tomates concassées", quantite: "200 g", type: "légume" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Herbes de Provence", quantite: "1 c. à café", type: "herbe" },
      { nom: "Câpres", quantite: "2 c. à soupe", type: "condiment" }
    ],
    etapes: [
      "Faire revenir l'ail émincé dans l'huile d'olive.",
      "Ajouter les tomates et les herbes, cuire 10 minutes.",
      "Incorporer les olives dénoyautées et les câpres.",
      "Laisser compoter 5 minutes."
    ],
    conseils: "Ne pas saler, les olives et câpres le sont suffisamment. Excellent avec poulet et lapin.",
    variantes: ["Aux anchois (tapenade)", "Au citron confit"]
  },

  "sauce_chocolat_epices": {
    redirect: "sauce_au_chocolat"
  },

  "sauce_cumberland": {
    nom: "Sauce Cumberland",
    categorie: "sauce anglaise",
    temps_preparation: 15,
    temps_cuisson: 10,
    difficulte: "moyen",
    portions: 8,
    ingredients: [
      { nom: "Gelée de groseilles", quantite: "200 g", type: "confiture" },
      { nom: "Porto rouge", quantite: "100 ml", type: "alcool" },
      { nom: "Orange", quantite: "1", type: "agrume" },
      { nom: "Citron", quantite: "1", type: "agrume" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à café", type: "condiment" },
      { nom: "Gingembre en poudre", quantite: "1/4 c. à café", type: "épice" }
    ],
    etapes: [
      "Prélever les zestes en julienne et les blanchir.",
      "Presser les agrumes.",
      "Hacher finement l'échalote et la blanchir.",
      "Faire fondre la gelée avec le porto.",
      "Ajouter tous les ingrédients et laisser tiédir."
    ],
    conseils: "Sauce froide anglaise traditionnelle pour le gibier, jambon et terrines. Se conserve plusieurs semaines.",
    variantes: ["À la gelée de cassis", "Sans alcool au jus de raisin"]
  },

  "sauce_moutarde_et_miel": {
    nom: "Sauce moutarde et miel",
    categorie: "sauce classique",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Moutarde à l'ancienne", quantite: "3 c. à soupe", type: "condiment" },
      { nom: "Miel", quantite: "2 c. à soupe", type: "sucre" },
      { nom: "Crème fraîche", quantite: "150 ml", type: "crème" },
      { nom: "Vinaigre de cidre", quantite: "1 c. à soupe", type: "vinaigre" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la moutarde et le miel.",
      "Ajouter la crème et le vinaigre.",
      "Chauffer doucement sans bouillir.",
      "Assaisonner."
    ],
    conseils: "Équilibre parfait sucré-piquant. Excellent avec porc, poulet et saumon.",
    variantes: ["À la moutarde de Meaux", "Au sirop d'érable"]
  },

  "sauce_moutarde_miel": {
    redirect: "sauce_moutarde_et_miel"
  },

  "sauce_persil_citron": {
    nom: "Sauce persil-citron",
    categorie: "sauce simple",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Persil plat", quantite: "1 gros bouquet", type: "herbe" },
      { nom: "Citron", quantite: "1", type: "agrume" },
      { nom: "Huile d'olive", quantite: "100 ml", type: "huile" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Effeuiller et hacher finement le persil.",
      "Presser le citron et prélever le zeste.",
      "Mélanger tous les ingrédients.",
      "Laisser reposer 30 minutes."
    ],
    conseils: "Gremolata simplifiée. Fraîcheur idéale pour les viandes grillées et poissons.",
    variantes: ["Avec câpres", "À la coriandre"]
  },

  "sauce_poivrade_legere": {
    nom: "Sauce poivrade légère",
    categorie: "sauce classique",
    temps_preparation: 20,
    temps_cuisson: 45,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Fond de gibier ou veau", quantite: "500 ml", type: "fond" },
      { nom: "Vin rouge", quantite: "150 ml", type: "alcool" },
      { nom: "Vinaigre de vin", quantite: "50 ml", type: "vinaigre" },
      { nom: "Échalotes", quantite: "3", type: "aromate" },
      { nom: "Poivre noir en grains", quantite: "1 c. à soupe", type: "épice" },
      { nom: "Bouquet garni", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Concasser les grains de poivre.",
      "Faire suer les échalotes, ajouter le vinaigre et réduire à sec.",
      "Mouiller au vin et réduire de moitié.",
      "Ajouter le fond et le bouquet garni.",
      "Cuire 30 minutes à feu doux.",
      "Filtrer et monter au beurre."
    ],
    conseils: "Version allégée de la sauce poivrade classique, moins liée. Idéale pour le gibier.",
    variantes: ["Au genièvre", "Au cognac"]
  },

  "sauce_pomme_gingembre": {
    nom: "Sauce pomme-gingembre",
    categorie: "sauce fusion",
    temps_preparation: 10,
    temps_cuisson: 20,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Pommes", quantite: "3", type: "fruit" },
      { nom: "Gingembre frais", quantite: "30 g", type: "aromate" },
      { nom: "Fond de volaille", quantite: "100 ml", type: "fond" },
      { nom: "Vinaigre de cidre", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" },
      { nom: "Sucre", quantite: "1 c. à soupe", type: "sucre" }
    ],
    etapes: [
      "Peler et couper les pommes en morceaux.",
      "Cuire avec le gingembre râpé et le fond.",
      "Mixer finement.",
      "Ajouter le vinaigre, le sucre et le beurre."
    ],
    conseils: "Alliance parfaite avec le porc et le canard. Le gingembre réveille la douceur de la pomme.",
    variantes: ["Au curry", "Au miel"]
  },

  "sauce_ponzu": {
    nom: "Sauce ponzu",
    categorie: "sauce japonaise",
    temps_preparation: 10,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 8,
    ingredients: [
      { nom: "Sauce soja", quantite: "100 ml", type: "condiment" },
      { nom: "Jus de yuzu ou citron vert", quantite: "50 ml", type: "agrume" },
      { nom: "Mirin", quantite: "30 ml", type: "alcool" },
      { nom: "Dashi", quantite: "50 ml", type: "bouillon" },
      { nom: "Vinaigre de riz", quantite: "30 ml", type: "vinaigre" },
      { nom: "Katsuobushi", quantite: "5 g", type: "poisson" }
    ],
    etapes: [
      "Chauffer le mirin pour évaporer l'alcool.",
      "Mélanger tous les liquides.",
      "Ajouter les flocons de bonite et infuser 10 minutes.",
      "Filtrer et conserver au frais."
    ],
    conseils: "Sauce acidulée et umami. Indispensable avec le tataki de bœuf et les gyozas.",
    variantes: ["Sans dashi (végétarien)", "Au sudachi"]
  },

  "sauce_soja_sucree": {
    nom: "Sauce soja sucrée",
    categorie: "sauce asiatique",
    temps_preparation: 5,
    temps_cuisson: 10,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Sauce soja", quantite: "100 ml", type: "condiment" },
      { nom: "Miel", quantite: "3 c. à soupe", type: "sucre" },
      { nom: "Gingembre râpé", quantite: "1 c. à soupe", type: "aromate" },
      { nom: "Huile de sésame", quantite: "1 c. à soupe", type: "huile" },
      { nom: "Graines de sésame", quantite: "1 c. à soupe", type: "garniture" }
    ],
    etapes: [
      "Mélanger la sauce soja et le miel.",
      "Chauffer doucement jusqu'à dissolution.",
      "Ajouter le gingembre et l'huile de sésame.",
      "Parsemer de graines de sésame."
    ],
    conseils: "Base du glaçage teriyaki. Parfait pour badigeonner en fin de cuisson.",
    variantes: ["Au sirop d'agave", "Avec piment"]
  },

  "sauce_tomate": {
    nom: "Sauce tomate",
    categorie: "sauce simple",
    temps_preparation: 10,
    temps_cuisson: 30,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomates pelées", quantite: "800 g", type: "légume" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" },
      { nom: "Herbes de Provence", quantite: "1 c. à soupe", type: "herbe" },
      { nom: "Sucre", quantite: "1 c. à café", type: "sucre" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Faire revenir l'ail émincé dans l'huile d'olive.",
      "Ajouter les tomates concassées.",
      "Incorporer les herbes et le sucre.",
      "Laisser mijoter 25-30 minutes.",
      "Mixer ou laisser en morceaux selon préférence."
    ],
    conseils: "Base de la cuisine méditerranéenne. Le sucre corrige l'acidité. Excellente avec les pâtes et viandes.",
    variantes: ["À la napolitaine (basilic)", "Arrabbiata (piment)"]
  },

  "sauce_tomate_caen": {
    nom: "Sauce tomate façon Caen",
    categorie: "sauce normande",
    temps_preparation: 15,
    temps_cuisson: 45,
    difficulte: "moyen",
    portions: 6,
    ingredients: [
      { nom: "Tomates", quantite: "500 g", type: "légume" },
      { nom: "Cidre brut", quantite: "200 ml", type: "alcool" },
      { nom: "Carottes", quantite: "2", type: "légume" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Crème de Normandie", quantite: "100 ml", type: "crème" },
      { nom: "Beurre", quantite: "30 g", type: "matière grasse" }
    ],
    etapes: [
      "Faire suer l'oignon et les carottes en dés.",
      "Ajouter les tomates et le cidre.",
      "Laisser mijoter 40 minutes.",
      "Mixer, passer au chinois.",
      "Ajouter la crème et le beurre."
    ],
    conseils: "Version normande de la sauce tomate. Le cidre apporte une touche locale.",
    variantes: ["Au calvados", "Sans crème"]
  },

  "sauce_tomate_aux_aromates": {
    nom: "Sauce tomate aux aromates",
    categorie: "sauce italienne",
    temps_preparation: 15,
    temps_cuisson: 40,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomates San Marzano", quantite: "800 g", type: "légume" },
      { nom: "Vin blanc", quantite: "100 ml", type: "alcool" },
      { nom: "Oignon", quantite: "1", type: "légume" },
      { nom: "Ail", quantite: "4 gousses", type: "aromate" },
      { nom: "Basilic", quantite: "1 bouquet", type: "herbe" },
      { nom: "Origan", quantite: "1 c. à café", type: "herbe" },
      { nom: "Huile d'olive", quantite: "4 c. à soupe", type: "huile" }
    ],
    etapes: [
      "Faire revenir l'oignon et l'ail dans l'huile.",
      "Déglacer au vin blanc.",
      "Ajouter les tomates et l'origan.",
      "Laisser mijoter 35 minutes.",
      "Ajouter le basilic frais en fin de cuisson."
    ],
    conseils: "Base de la vraie sauce tomate italienne. Les San Marzano sont les meilleures tomates pour sauces.",
    variantes: ["Alla puttanesca (câpres, olives, anchois)", "All'amatriciana (guanciale)"]
  },

  "sauce_tomate_epicee": {
    nom: "Sauce tomate épicée",
    categorie: "sauce simple",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Tomates concassées", quantite: "600 g", type: "légume" },
      { nom: "Piment rouge", quantite: "1", type: "piment" },
      { nom: "Ail", quantite: "3 gousses", type: "aromate" },
      { nom: "Paprika fumé", quantite: "1 c. à café", type: "épice" },
      { nom: "Cumin", quantite: "1/2 c. à café", type: "épice" },
      { nom: "Huile d'olive", quantite: "3 c. à soupe", type: "huile" },
      { nom: "Coriandre", quantite: "quelques feuilles", type: "herbe" }
    ],
    etapes: [
      "Faire revenir l'ail et le piment émincé dans l'huile.",
      "Ajouter les épices et torréfier 1 minute.",
      "Incorporer les tomates.",
      "Laisser mijoter 20 minutes.",
      "Finir avec la coriandre."
    ],
    conseils: "Sauce polyvalente relevée. Ajuster le piment selon votre tolérance.",
    variantes: ["Aux chipotle", "Harissa style"]
  },

  "sauce_wasabi_creme": {
    nom: "Sauce wasabi-crème",
    categorie: "sauce fusion",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Crème fraîche épaisse", quantite: "150 g", type: "crème" },
      { nom: "Wasabi en pâte", quantite: "1-2 c. à café", type: "condiment" },
      { nom: "Sauce soja", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Jus de citron vert", quantite: "1 c. à café", type: "agrume" }
    ],
    etapes: [
      "Mélanger la crème fraîche et le wasabi.",
      "Incorporer la sauce soja et le citron.",
      "Goûter et ajuster le wasabi.",
      "Réserver au frais."
    ],
    conseils: "Attention, le wasabi est très puissant. Commencer par peu et ajuster. Excellent avec le bœuf.",
    variantes: ["Au raifort", "Avec gingembre"]
  },

  "sauce_yaourt_menthe": {
    nom: "Sauce yaourt-menthe",
    categorie: "sauce orientale",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Yaourt grec", quantite: "300 g", type: "produit laitier" },
      { nom: "Menthe fraîche", quantite: "20 feuilles", type: "herbe" },
      { nom: "Concombre", quantite: "1/2", type: "légume" },
      { nom: "Ail", quantite: "1 gousse", type: "aromate" },
      { nom: "Jus de citron", quantite: "2 c. à soupe", type: "agrume" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Râper le concombre et le presser pour éliminer l'eau.",
      "Ciseler finement la menthe.",
      "Mélanger tous les ingrédients avec le yaourt.",
      "Réfrigérer 1 heure avant de servir."
    ],
    conseils: "Raïta revisité. Rafraîchissant avec les grillades et kebabs. Indispensable avec l'agneau.",
    variantes: ["À la coriandre", "Au cumin"]
  },

  // ===== VINAIGRES ET VINAIGRETTES =====

  "vinaigre_balsamique": {
    nom: "Réduction de vinaigre balsamique",
    categorie: "sauce simple",
    temps_preparation: 2,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 6,
    ingredients: [
      { nom: "Vinaigre balsamique", quantite: "200 ml", type: "vinaigre" },
      { nom: "Miel", quantite: "1 c. à soupe", type: "sucre" }
    ],
    etapes: [
      "Verser le vinaigre balsamique dans une petite casserole.",
      "Ajouter le miel et mélanger.",
      "Faire réduire à feu doux jusqu'à consistance sirupeuse.",
      "Laisser refroidir, il épaissira encore."
    ],
    conseils: "Crème de balsamique maison. Parfaite pour finir les viandes rouges et foie gras.",
    variantes: ["Au poivre", "À la figue"]
  },

  "vinaigre_de_framboise": {
    nom: "Réduction au vinaigre de framboise",
    categorie: "sauce gastronomique",
    temps_preparation: 5,
    temps_cuisson: 15,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Vinaigre de framboise", quantite: "100 ml", type: "vinaigre" },
      { nom: "Fond de canard", quantite: "150 ml", type: "fond" },
      { nom: "Échalote", quantite: "1", type: "aromate" },
      { nom: "Beurre", quantite: "40 g", type: "matière grasse" },
      { nom: "Framboises fraîches", quantite: "quelques-unes", type: "fruit" }
    ],
    etapes: [
      "Faire suer l'échalote.",
      "Déglacer au vinaigre et réduire de moitié.",
      "Ajouter le fond et réduire encore.",
      "Monter au beurre, garnir de framboises."
    ],
    conseils: "Accord classique avec le canard et le foie gras. L'acidité fruitée coupe le gras.",
    variantes: ["Au cassis", "À la cerise"]
  },

  "vinaigrette_aux_herbes": {
    nom: "Vinaigrette aux herbes",
    categorie: "sauce simple",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "huile" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Fines herbes (persil, ciboulette, cerfeuil, estragon)", quantite: "4 c. à soupe", type: "herbe" },
      { nom: "Moutarde de Dijon", quantite: "1 c. à café", type: "condiment" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Ciseler finement les herbes.",
      "Mélanger la moutarde et le vinaigre.",
      "Incorporer l'huile en filet en fouettant.",
      "Ajouter les herbes et assaisonner."
    ],
    conseils: "Utiliser des herbes fraîches impérativement. Accompagne les viandes froides et salades.",
    variantes: ["Au basilic seul", "À la coriandre"]
  },

  "vinaigrette_moutardee": {
    nom: "Vinaigrette moutardée",
    categorie: "sauce simple",
    temps_preparation: 5,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Moutarde de Dijon", quantite: "2 c. à soupe", type: "condiment" },
      { nom: "Vinaigre de vin rouge", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Huile de tournesol", quantite: "6 c. à soupe", type: "huile" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger la moutarde et le vinaigre.",
      "Saler et poivrer.",
      "Incorporer l'huile en filet en fouettant vigoureusement."
    ],
    conseils: "La vinaigrette française classique. Le ratio 1:3 vinaigre/huile est la base.",
    variantes: ["À l'huile de noix", "Au vinaigre de Xérès"]
  },

  "vinaigrette_relevee": {
    nom: "Vinaigrette relevée",
    categorie: "sauce simple",
    temps_preparation: 10,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile d'olive", quantite: "5 c. à soupe", type: "huile" },
      { nom: "Vinaigre de vin", quantite: "2 c. à soupe", type: "vinaigre" },
      { nom: "Moutarde forte", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Câpres", quantite: "1 c. à soupe", type: "condiment" },
      { nom: "Cornichons", quantite: "2", type: "condiment" }
    ],
    etapes: [
      "Hacher finement échalotes, câpres et cornichons.",
      "Émulsionner moutarde et vinaigre.",
      "Incorporer l'huile.",
      "Ajouter la garniture hachée."
    ],
    conseils: "Vinaigrette type ravigote. Parfaite avec les viandes bouillies et tête de veau.",
    variantes: ["Avec anchois", "Aux herbes"]
  },

  "vinaigrette_tiede": {
    nom: "Vinaigrette tiède",
    categorie: "sauce simple",
    temps_preparation: 5,
    temps_cuisson: 5,
    difficulte: "facile",
    portions: 4,
    ingredients: [
      { nom: "Huile d'olive", quantite: "6 c. à soupe", type: "huile" },
      { nom: "Vinaigre de Xérès", quantite: "3 c. à soupe", type: "vinaigre" },
      { nom: "Échalotes", quantite: "2", type: "aromate" },
      { nom: "Sel et poivre", quantite: "à volonté", type: "assaisonnement" }
    ],
    etapes: [
      "Émincer finement les échalotes.",
      "Chauffer l'huile sans la faire fumer.",
      "Ajouter le vinaigre et les échalotes.",
      "Verser tiède sur la salade ou viande."
    ],
    conseils: "La vinaigrette tiède fait légèrement flétrir les salades. Servir immédiatement.",
    variantes: ["Aux lardons", "Au foie de volaille"]
  },

  // ===== ACCOMPAGNEMENT ANGLAIS =====

  "yorkshire_pudding": {
    nom: "Yorkshire pudding",
    categorie: "accompagnement anglais",
    temps_preparation: 10,
    temps_cuisson: 25,
    difficulte: "moyen",
    portions: 12,
    ingredients: [
      { nom: "Farine", quantite: "150 g", type: "farine" },
      { nom: "Lait", quantite: "200 ml", type: "produit laitier" },
      { nom: "Œufs", quantite: "3", type: "œuf" },
      { nom: "Graisse de bœuf ou huile", quantite: "3 c. à soupe", type: "matière grasse" },
      { nom: "Sel", quantite: "1 pincée", type: "assaisonnement" }
    ],
    etapes: [
      "Mélanger farine et sel. Creuser un puits.",
      "Ajouter les œufs et le lait progressivement en fouettant.",
      "Laisser reposer la pâte 1 heure minimum.",
      "Préchauffer le four à 220°C avec la graisse dans les moules.",
      "Verser la pâte dans les moules brûlants.",
      "Cuire 20-25 minutes sans ouvrir le four."
    ],
    conseils: "Accompagnement traditionnel du rosbif anglais. Le secret : four très chaud et graisse fumante.",
    variantes: ["En trou dans le toad-in-the-hole", "Géant pour un rôti"]
  },

  // ===== ENTRÉES N/A - REDIRECTIONS POUR CATÉGORIES SPÉCIALES =====

  "n_a_enveloppe": {
    nom: "N/A - Enveloppe",
    categorie: "note",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Feuilles de brick, pâte feuilletée, ou feuilles de vigne", quantite: "selon recette", type: "enveloppe" }
    ],
    etapes: [
      "Cette catégorie regroupe les préparations servant à envelopper les viandes (feuilles de brick, pâte feuilletée, feuilles de vigne, crépine, etc.).",
      "Consulter la recette principale pour les instructions spécifiques."
    ],
    description: "Catégorie pour les préparations servant à envelopper (feuilles, pâtes, etc.)"
  },

  "n_a_matiere_grasse": {
    nom: "N/A - Matière grasse",
    categorie: "catégorie spéciale",
    description: "Catégorie pour les matières grasses de cuisson",
    redirect: "beurre_clarifie"
  },

  "n_a_utilise_en_preparation": {
    nom: "N/A - Utilisé en préparation",
    categorie: "note",
    temps_preparation: 0,
    temps_cuisson: 0,
    difficulte: "facile",
    portions: 1,
    ingredients: [
      { nom: "Ingrédients de base (marinades, fonds, bouillons)", quantite: "selon recette", type: "base" }
    ],
    etapes: [
      "Cette catégorie regroupe les ingrédients et préparations utilisés pendant la cuisson de la viande.",
      "Consulter la recette principale pour les instructions spécifiques."
    ],
    description: "Catégorie pour les ingrédients utilisés en préparation"
  }
};

// Fonction utilitaire pour normaliser les noms de sauces en IDs
function normalizeToId(name) {
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

module.exports = { recettesSauces, normalizeToId };
