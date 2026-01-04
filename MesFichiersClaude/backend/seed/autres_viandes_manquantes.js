// Fiches manquantes pour porc, agneau, veau
// À fusionner dans encyclopediaData.js

const autresViandesManquantes = {
  porc: {
    cotelettes_de_porc: {
      anatomie: "Les côtelettes sont prélevées dans le carré (partie dorsale), comprenant une portion de noix et l'os de la côte. Coupe transversale avec os, épaisseur variable de 1.5 à 3 cm.",
      caracteristiques: {
        tendrete: "7/10 - Tendre avec un peu de gras",
        saveur: "8/10 - Goûteuse et fondante",
        persillage: "5/10 - Gras intermusculaire modéré"
      },
      techniquesChef: [
        "Épaisseur idéale de 2-2.5 cm pour une cuisson optimale",
        "Saisir à feu vif 3-4 min par face pour caraméliser",
        "Finir au four si épaisse (180°C, 8-10 min)",
        "Ne pas piquer pour conserver les jus",
        "Température à cœur: 63°C pour une viande juteuse"
      ],
      sauces: [
        { nom: "Sauce charcutière", type: "Française", description: "Cornichons, moutarde, vin blanc, échalotes", accord: "Classique du porc, acidité et piquant" },
        { nom: "Sauce normande", type: "Française", description: "Crème, cidre, pommes, calvados", accord: "Douceur et fruité qui subliment la côtelette" },
        { nom: "Sauce miel-moutarde", type: "Moderne", description: "Miel, moutarde à l'ancienne, thym", accord: "Sucré-salé parfait avec le porc" }
      ],
      accompagnements: [
        { type: "Légumes", suggestions: ["Pommes sautées au beurre", "Chou braisé", "Haricots verts", "Purée de céleri"] },
        { type: "Féculents", suggestions: ["Pommes de terre rissolées", "Polenta crémeuse", "Écrasée de pommes de terre"] }
      ],
      vins: [
        { type: "Blancs secs", suggestions: ["Côtes du Rhône blanc", "Mâcon-Villages", "Pinot Gris d'Alsace"], temperature: "10-12°C", notes: "Blancs ronds pour accompagner le gras" },
        { type: "Rouges légers", suggestions: ["Beaujolais-Villages", "Sancerre rouge", "Bourgueil"], temperature: "14-16°C", notes: "Fruité sans trop de tannins" }
      ],
      erreursCourantes: [
        "Cuisson excessive: viande sèche et dure",
        "Température trop basse: pas de caramélisation",
        "Saler trop tôt: dessèche la viande"
      ],
      anecdotes: "La côtelette de porc est l'un des plats les plus consommés en France. Dans le Nord, elle est traditionnellement servie avec des frites et de la salade. En Normandie, la version 'vallée d'Auge' avec pommes et crème est emblématique."
    },

    travers_de_porc: {
      anatomie: "Les travers (ribs) proviennent de la cage thoracique, incluant les côtes et les muscles intercostaux. Viande striée entre les os, riche en collagène et en gras.",
      caracteristiques: {
        tendrete: "6/10 (avant cuisson) → 9/10 (après cuisson lente)",
        saveur: "9/10 - Très savoureux",
        persillage: "7/10 - Gras intercostal important"
      },
      techniquesChef: [
        "Cuisson lente obligatoire: 3-4h à basse température",
        "Retirer la membrane au dos des travers avant cuisson",
        "Méthode 3-2-1 pour BBQ: 3h fumée, 2h papillote, 1h sauce",
        "Température idéale: 110-130°C",
        "La viande doit se détacher de l'os sans tomber"
      ],
      sauces: [
        { nom: "Sauce BBQ maison", type: "Américaine", description: "Ketchup, vinaigre, cassonade, épices fumées", accord: "Le classique indétrônable des ribs" },
        { nom: "Marinade asiatique", type: "Asiatique", description: "Sauce soja, miel, gingembre, ail, 5 épices", accord: "Laqué sucré-salé irrésistible" },
        { nom: "Sauce moutarde-miel", type: "Française", description: "Moutarde de Dijon, miel, thym, ail", accord: "Version française gourmande" }
      ],
      accompagnements: [
        { type: "Américain", suggestions: ["Coleslaw", "Maïs en épi", "Haricots à la sauce tomate", "Cornbread"] },
        { type: "Asiatique", suggestions: ["Riz gluant", "Légumes sautés", "Salade de chou asiatique"] }
      ],
      vins: [
        { type: "Rouges fruités", suggestions: ["Zinfandel", "Malbec argentin", "Côtes du Rhône"], temperature: "16-18°C", notes: "Vins gourmands avec du fruit" },
        { type: "Bières", suggestions: ["IPA", "Amber Ale", "Porter"], temperature: "6-8°C", notes: "Alternative populaire aux vins" }
      ],
      erreursCourantes: [
        "Cuisson trop rapide: viande dure et caoutchouteuse",
        "Ne pas retirer la membrane: texture désagréable",
        "Sauce ajoutée trop tôt: brûle et devient amère"
      ],
      anecdotes: "Les ribs sont devenus emblématiques du barbecue américain, notamment au Texas et dans le Sud. En Chine, les travers de porc laqués (char siu) sont une spécialité cantonaise millénaire. En France, ils connaissent un regain de popularité depuis les années 2010."
    },

    coeur_porc: {
      anatomie: "Le cœur de porc est un muscle creux très dense, pesant 300-400g. Composé principalement de fibres musculaires striées avec peu de gras, texture ferme et compacte.",
      caracteristiques: {
        tendrete: "5/10 - Ferme mais pas dur",
        saveur: "8/10 - Goût prononcé, légèrement métallique",
        persillage: "1/10 - Très maigre"
      },
      techniquesChef: [
        "Retirer soigneusement les vaisseaux et le gras dur",
        "Faire tremper 2h dans l'eau froide salée pour dégorger",
        "Deux méthodes: poêlé rapide (rosé) ou braisé longuement",
        "Trancher finement en émincé pour poêlée",
        "Ne pas dépasser à point pour éviter le dessèchement"
      ],
      sauces: [
        { nom: "Sauce madère", type: "Classique", description: "Madère, fond brun, champignons", accord: "Élégance qui adoucit le goût prononcé" },
        { nom: "Persillade", type: "Simple", description: "Persil, ail, huile d'olive, citron", accord: "Fraîcheur qui équilibre le fer" }
      ],
      accompagnements: [
        { type: "Légumes", suggestions: ["Champignons poêlés", "Épinards au beurre", "Oignons caramélisés"] },
        { type: "Féculents", suggestions: ["Purée de pommes de terre", "Polenta", "Riz pilaf"] }
      ],
      vins: [
        { type: "Rouges corsés", suggestions: ["Madiran", "Cahors", "Côtes du Roussillon"], temperature: "16-18°C", notes: "Tannins pour accompagner le fer" }
      ],
      erreursCourantes: [
        "Ne pas dégorger: goût trop fort",
        "Cuisson excessive: devient caoutchouteux",
        "Tranches trop épaisses: cuisson inégale"
      ],
      anecdotes: "Le cœur était très apprécié dans la cuisine bourgeoise française du XIXe siècle. Au Pérou, les anticuchos (brochettes de cœur) sont un plat national. En France, il est souvent utilisé en farce pour terrines."
    }
  },

  agneau: {
    gigot_d_agneau: {
      anatomie: "Le gigot est la cuisse arrière de l'agneau, comprenant plusieurs muscles autour du fémur. Poids typique: 1.5-3 kg. Peut être raccourci (sans jarret) ou entier.",
      caracteristiques: {
        tendrete: "7/10 - Tendre avec variations selon la zone",
        saveur: "9/10 - Très parfumé, typiquement ovin",
        persillage: "4/10 - Gras de couverture plutôt qu'intramusculaire"
      },
      techniquesChef: [
        "Sortir 2h avant cuisson pour atteindre température ambiante",
        "Piquer d'ail et de romarin dans la chair",
        "Cuisson idéale: 12-15 min/500g à 200°C puis 180°C",
        "Laisser reposer 15-20 minutes sous aluminium",
        "Température à cœur: 54°C (rosé) à 62°C (à point)"
      ],
      sauces: [
        { nom: "Jus d'agneau aux herbes", type: "Classique", description: "Fond d'agneau, thym, romarin, ail", accord: "Accompagnement naturel du gigot" },
        { nom: "Sauce à la menthe", type: "Britannique", description: "Menthe fraîche, vinaigre, sucre", accord: "Tradition anglaise, fraîcheur mentholée" },
        { nom: "Sauce aux anchois", type: "Provençale", description: "Anchois, ail, huile d'olive", accord: "Méditerranéen intense" }
      ],
      accompagnements: [
        { type: "Classiques", suggestions: ["Flageolets", "Haricots blancs à la tomate", "Gratin dauphinois"] },
        { type: "Légumes", suggestions: ["Ratatouille", "Tomates provençales", "Courgettes grillées", "Pommes boulangère"] }
      ],
      vins: [
        { type: "Rouges du Sud", suggestions: ["Châteauneuf-du-Pape", "Bandol", "Gigondas"], temperature: "16-18°C", notes: "Vins puissants et épicés" },
        { type: "Bordeaux", suggestions: ["Pauillac", "Saint-Julien", "Médoc"], temperature: "17-18°C", notes: "Tannins fondus, élégance" }
      ],
      erreursCourantes: [
        "Cuisson trop forte: extérieur brûlé, intérieur cru",
        "Pas de repos: perte de jus à la découpe",
        "Gigot froid au départ: cuisson inégale"
      ],
      anecdotes: "Le gigot d'agneau pascal est une tradition française depuis le Moyen Âge. L'agneau de Pauillac, élevé dans les vignes bordelaises, est l'un des plus réputés. Le 'gigot de 7 heures' est un classique de la cuisine française où le gigot braise très lentement."
    },

    baron_d_agneau: {
      anatomie: "Le baron comprend la selle (longe des deux côtés) plus les deux gigots, formant la partie arrière complète de l'agneau. Pièce majestueuse de 4-6 kg.",
      caracteristiques: {
        tendrete: "8/10 - Combinaison de morceaux tendres",
        saveur: "9/10 - Très savoureux et complexe",
        persillage: "4/10 - Variable selon les parties"
      },
      techniquesChef: [
        "Réservé aux grandes occasions (8-12 convives)",
        "Demander au boucher de préparer et ficeler",
        "Four très chaud au début (240°C, 15 min) puis modéré (180°C)",
        "Compter 15-18 min/kg pour une cuisson rosée",
        "Repos obligatoire de 20-30 minutes"
      ],
      sauces: [
        { nom: "Jus corsé", type: "Classique", description: "Réduction de fond d'agneau, échalotes, herbes de Provence", accord: "Met en valeur la noblesse de la pièce" },
        { nom: "Sauce au Porto", type: "Festive", description: "Porto, fond brun, baies roses", accord: "Élégance pour les grandes occasions" }
      ],
      accompagnements: [
        { type: "Festifs", suggestions: ["Tian de légumes", "Pommes fondantes", "Flan de courgettes"] },
        { type: "Traditionnels", suggestions: ["Flageolets", "Gratin de légumes", "Artichauts barigoule"] }
      ],
      vins: [
        { type: "Grands crus", suggestions: ["Pomerol", "Hermitage", "Châteauneuf-du-Pape"], temperature: "17-18°C", notes: "Vins d'exception pour pièce d'exception" }
      ],
      erreursCourantes: [
        "Sous-estimer le temps de repos",
        "Four pas assez chaud au démarrage",
        "Ne pas ficeler: cuisson inégale"
      ],
      anecdotes: "Le baron d'agneau tire son nom de la noblesse de la pièce. Traditionnellement servi pour les grandes réceptions, c'est la pièce maîtresse des tables de Pâques dans les familles aisées. Les chefs étoilés le présentent souvent entier avant découpe devant les convives."
    },

    coeur_agneau: {
      anatomie: "Petit cœur de 80-120g, très tendre comparé aux autres cœurs. Muscle compact avec peu de vaisseaux, texture fine et délicate.",
      caracteristiques: {
        tendrete: "7/10 - Plus tendre que les autres cœurs",
        saveur: "7/10 - Délicat, légèrement ovin",
        persillage: "1/10 - Très maigre"
      },
      techniquesChef: [
        "Cuisson rapide à la poêle: 2-3 min par face",
        "Peut se griller entier en brochette",
        "Servir rosé à point, jamais trop cuit",
        "Nettoyer en retirant vaisseaux et gras",
        "Mariner 30 min dans huile/herbes"
      ],
      sauces: [
        { nom: "Jus au thym", type: "Simple", description: "Jus de cuisson, thym frais, ail", accord: "Légèreté qui respecte la finesse" },
        { nom: "Persillade citronnée", type: "Fraîche", description: "Persil, citron, ail, huile d'olive", accord: "Vivacité méditerranéenne" }
      ],
      accompagnements: [
        { type: "Légers", suggestions: ["Salade de roquette", "Légumes grillés", "Couscous aux légumes"] },
        { type: "Consistants", suggestions: ["Purée de pois chiches", "Polenta crémeuse"] }
      ],
      vins: [
        { type: "Rosés de Provence", suggestions: ["Bandol rosé", "Côtes de Provence"], temperature: "10-12°C", notes: "Fraîcheur pour la délicatesse du cœur" },
        { type: "Rouges légers", suggestions: ["Côtes du Rhône Villages", "Minervois"], temperature: "14-16°C", notes: "Fruité sans excès" }
      ],
      erreursCourantes: [
        "Trop cuire: devient caoutchouteux",
        "Ne pas nettoyer: texture désagréable",
        "Cuisson à feu trop doux: pas de caramélisation"
      ],
      anecdotes: "Les cœurs d'agneau sont particulièrement appréciés en Grèce (kokoretsi) et au Moyen-Orient où ils sont grillés en brochettes. En France, ils étaient autrefois un mets recherché dans la cuisine bourgeoise lyonnaise."
    }
  },

  veau: {
    escalope_de_veau: {
      anatomie: "Fine tranche prélevée dans la noix, la sous-noix ou le quasi. Épaisseur de 5-8mm, aplatie au maillet pour attendrir et uniformiser.",
      caracteristiques: {
        tendrete: "9/10 - Très tendre",
        saveur: "7/10 - Délicate et fine",
        persillage: "2/10 - Très maigre"
      },
      techniquesChef: [
        "Ne jamais dépasser 3-4 min de cuisson totale",
        "Fariner légèrement pour une belle croûte dorée",
        "Cuire à feu vif dans beurre clarifié",
        "Déglacer la poêle pour récupérer les sucs",
        "Servir immédiatement, ne supporte pas l'attente"
      ],
      sauces: [
        { nom: "Sauce milanaise", type: "Italienne", description: "Citron, câpres, beurre noisette", accord: "L'accord parfait avec la panure" },
        { nom: "Sauce à la crème", type: "Française", description: "Crème, champignons, vin blanc", accord: "Onctuosité qui enrobe l'escalope" },
        { nom: "Sauce piccata", type: "Italienne", description: "Citron, câpres, persil, beurre", accord: "Vivacité qui relève la viande douce" }
      ],
      accompagnements: [
        { type: "Italiens", suggestions: ["Spaghettis al limone", "Risotto aux asperges", "Roquette parmesan"] },
        { type: "Classiques", suggestions: ["Pâtes fraîches au beurre", "Haricots verts", "Purée de pommes de terre"] }
      ],
      vins: [
        { type: "Blancs italiens", suggestions: ["Soave", "Verdicchio", "Gavi"], temperature: "10-12°C", notes: "Fraîcheur et minéralité" },
        { type: "Blancs français", suggestions: ["Chablis", "Pouilly-Fuissé", "Saint-Véran"], temperature: "11-13°C", notes: "Élégance bourguignonne" }
      ],
      erreursCourantes: [
        "Cuisson trop longue: devient sèche et dure",
        "Huile pas assez chaude: pas de caramélisation",
        "Escalope trop épaisse: cuisson inégale"
      ],
      anecdotes: "L'escalope milanaise, panée et dorée, est l'ancêtre de la Wiener Schnitzel autrichienne. La légende veut que le maréchal Radetzky l'ait rapportée de Milan à Vienne au XIXe siècle. La 'valdôtaine' (jambon et fontina) est une variante savoyarde."
    },

    roti_de_veau: {
      anatomie: "Pièce à rôtir prélevée dans la noix, le quasi, l'épaule ou le carré. Forme cylindrique ou ovale, poids de 800g à 2kg selon le nombre de convives.",
      caracteristiques: {
        tendrete: "8/10 - Fondant après cuisson",
        saveur: "7/10 - Subtile et délicate",
        persillage: "3/10 - Peu de gras, nécessite attention"
      },
      techniquesChef: [
        "Ficeler serré pour maintenir la forme",
        "Saisir sur toutes les faces avant enfournement",
        "Four modéré 160-180°C pour éviter le dessèchement",
        "Arroser régulièrement pendant la cuisson",
        "Température à cœur: 62-65°C maximum"
      ],
      sauces: [
        { nom: "Jus au citron", type: "Légère", description: "Jus de cuisson, citron, thym", accord: "Fraîcheur qui allège la viande" },
        { nom: "Sauce aux morilles", type: "Gastronomique", description: "Morilles, crème, madère, fond de veau", accord: "Luxe terreux et crémeux" },
        { nom: "Sauce au thym-citron", type: "Provençale", description: "Thym, citron, huile d'olive, ail", accord: "Méditerranée ensoleillée" }
      ],
      accompagnements: [
        { type: "Légumes printaniers", suggestions: ["Petits pois à la française", "Carottes nouvelles", "Asperges vertes"] },
        { type: "Gratins", suggestions: ["Gratin de courgettes", "Pommes de terre boulangère", "Gratin d'endives"] }
      ],
      vins: [
        { type: "Blancs de garde", suggestions: ["Meursault", "Puligny-Montrachet", "Condrieu"], temperature: "12-14°C", notes: "Blancs amples et généreux" },
        { type: "Rouges fins", suggestions: ["Volnay", "Mercurey", "Crozes-Hermitage"], temperature: "15-16°C", notes: "Finesse et fruit" }
      ],
      erreursCourantes: [
        "Four trop chaud: extérieur sec avant cuisson du centre",
        "Pas d'arrosage: croûte dure et viande sèche",
        "Découpe immédiate: perte de tous les jus"
      ],
      anecdotes: "Le rôti de veau du dimanche était autrefois le symbole de l'aisance bourgeoise française. Le veau 'Orloff', farci de champignons et de sauce Mornay, fut créé par le chef Urbain Dubois pour le prince russe Orloff au XIXe siècle."
    },

    coeur_veau: {
      anatomie: "Cœur de 250-400g, plus gros et plus tendre que celui du bœuf. Texture fine, peu de vaisseaux à retirer. Viande dense et maigre.",
      caracteristiques: {
        tendrete: "6/10 - Ferme mais agréable",
        saveur: "7/10 - Fin, moins prononcé que le bœuf",
        persillage: "1/10 - Très maigre"
      },
      techniquesChef: [
        "Faire dégorger 1-2h dans l'eau froide salée",
        "Retirer les vaisseaux et le gras dur du sommet",
        "Trancher en médaillons de 1-1.5 cm",
        "Poêler vivement 2 min par face",
        "Servir rosé pour éviter la dureté"
      ],
      sauces: [
        { nom: "Sauce Porto", type: "Classique", description: "Porto, fond de veau, échalotes, crème", accord: "Élégance qui ennoblit l'abat" },
        { nom: "Sauce moutarde", type: "Française", description: "Moutarde de Dijon, crème, estragon", accord: "Piquant délicat" }
      ],
      accompagnements: [
        { type: "Raffinés", suggestions: ["Purée de céleri-rave", "Champignons des bois", "Épinards au beurre"] },
        { type: "Classiques", suggestions: ["Pommes de terre sautées", "Riz pilaf", "Carottes glacées"] }
      ],
      vins: [
        { type: "Rouges moyens", suggestions: ["Saint-Nicolas-de-Bourgueil", "Saumur-Champigny", "Côtes du Rhône"], temperature: "15-16°C", notes: "Fruité et souple" }
      ],
      erreursCourantes: [
        "Ne pas dégorger: goût trop fort",
        "Cuisson excessive: texture caoutchouteuse",
        "Tranches trop fines: dessèchent"
      ],
      anecdotes: "Le cœur de veau était très prisé dans la grande cuisine française classique. Auguste Escoffier l'incluait dans ses menus gastronomiques. Au Pérou, les anticuchos de cœur de veau sont une variante raffinée des brochettes traditionnelles de cœur de bœuf."
    }
  }
};

module.exports = autresViandesManquantes;
