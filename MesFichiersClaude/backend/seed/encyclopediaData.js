const encyclopediaData = {
  boeuf: {
    histoire: "Le bœuf est consommé depuis la domestication des bovins il y a plus de 10 000 ans. En France, l'élevage bovin s'est développé au Moyen Âge, avec l'émergence de races prestigieuses comme la Charolaise, la Limousine ou la Blonde d'Aquitaine. La tradition française du bœuf privilégie la maturation à sec et les races à viande spécialisées.",

    nutrition: "Le bœuf est une excellente source de protéines complètes (26g/100g), de fer héminique hautement biodisponible, de zinc, de vitamine B12, et de créatine. Les morceaux maigres comme le filet contiennent environ 5% de lipides, tandis que les morceaux persillés atteignent 15-20%. L'apport en acides gras varie selon l'alimentation de l'animal (herbe vs céréales).",

    selection: {
      couleur: "Rouge vif à rouge sombre selon la maturation. Une viande trop claire peut indiquer un manque de maturation, une viande très foncée une longue maturation (dry-aged).",
      texture: "Grain fin et régulier. Le persillage (gras intramusculaire) garantit tendreté et saveur. Vérifier la fermeté au toucher.",
      maturite: "La maturation optimale est de 14-21 jours pour les morceaux nobles, 28-45 jours pour le dry-aged. La viande jeune (< 7 jours) manque de tendreté.",
      signes: "Label Rouge, AOP (Bœuf de Charolles, Maine-Anjou), Agriculture Biologique, ou traçabilité complète."
    },

    conservation: "Viande fraîche : 2-3 jours à 2-4°C dans la partie la plus froide du réfrigérateur, emballée hermétiquement. Sous-vide : 5-7 jours. Congélation : -18°C maximum 6-12 mois selon le morceau. Décongélation lente au réfrigérateur (24-48h).",

    preparation: {
      temperaturage: "Sortir la viande 30-60 minutes avant cuisson pour atteindre 18-20°C. Une viande froide provoque un choc thermique et une cuisson inégale.",
      assaisonnement: "Saler juste avant la cuisson ou après pour éviter la perte d'eau. Poivrer après cuisson (le poivre brûle). Huile neutre haute température (pépins de raisin, arachide).",
      sechage: "Sécher soigneusement avec papier absorbant. L'humidité empêche la réaction de Maillard et la formation de la croûte."
    },

    cuts: {
      filet: {
        anatomie: "Situé sous la colonne vertébrale, le filet (psoas major) est le muscle le moins sollicité, d'où sa tendreté exceptionnelle. Il se divise en tête (moins noble), cœur (tournedos) et pointe (chateaubriand).",

        caracteristiques: {
          tendrete: "10/10 - Morceau le plus tendre",
          saveur: "6/10 - Peu de gras, saveur délicate",
          persillage: "2/10 - Très maigre",
          prix: "Très élevé (35-60€/kg)"
        },

        techniquesChef: [
          "Bardage recommandé pour les cuissons longues (entourer de lard)",
          "Saisir à feu très vif (2 min/côté) puis finir au four à 180°C",
          "Ne jamais dépasser 54°C à cœur pour préserver la tendreté",
          "Le filet ne bénéficie pas d'une longue cuisson - privilégier la rapidité",
          "Utiliser un thermomètre à sonde pour une précision parfaite"
        ],

        sauces: [
          {
            nom: "Sauce Périgueux",
            type: "Classique française",
            description: "Demi-glace au madère avec truffe noire hachée",
            accord: "Sublime le filet sans masquer sa finesse"
          },
          {
            nom: "Beurre maître d'hôtel",
            type: "Beurre composé",
            description: "Beurre, persil, jus de citron, échalotes",
            accord: "Fraîcheur qui contraste avec la richesse de la viande"
          },
          {
            nom: "Sauce bordelaise",
            type: "Réduction de vin",
            description: "Vin rouge, échalotes, moelle de bœuf, demi-glace",
            accord: "Accord classique, saveurs intenses"
          },
          {
            nom: "Sauce béarnaise",
            type: "Émulsion chaude",
            description: "Réduction estragon-échalote montée au beurre",
            accord: "Richesse qui compense la maigreur du filet"
          }
        ],

        accompagnements: [
          {
            type: "Légumes racines",
            suggestions: [
              "Gratin dauphinois (pommes de terre, crème, ail)",
              "Carottes Vichy (beurre, sucre, persil)",
              "Panais rôtis au miel et thym"
            ]
          },
          {
            type: "Légumes verts",
            suggestions: [
              "Haricots verts aux amandes grillées",
              "Asperges vertes rôties à l'huile d'olive",
              "Brocolis vapeur au beurre noisette"
            ]
          },
          {
            type: "Féculents nobles",
            suggestions: [
              "Pommes Anna (fines lamelles au beurre clarifié)",
              "Purée de pommes de terre à la crème et beurre",
              "Risotto au parmesan"
            ]
          },
          {
            type: "Champignons",
            suggestions: [
              "Cèpes poêlés à l'ail et persil",
              "Girolles sautées au beurre",
              "Morilles à la crème"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges puissants",
            suggestions: ["Pomerol", "Saint-Émilion Grand Cru", "Pauillac"],
            temperature: "16-18°C",
            notes: "Tannins soyeux pour accompagner sans dominer"
          },
          {
            type: "Rouges élégants",
            suggestions: ["Gevrey-Chambertin", "Vosne-Romanée", "Chambolle-Musigny"],
            temperature: "15-17°C",
            notes: "Finesse bourguignonne en accord avec la tendreté"
          }
        ],

        erreursCourantes: [
          "Cuisson excessive : le filet devient sec et perd tout intérêt au-delà de 60°C",
          "Assaisonnement trop précoce : saler 30 min avant fait perdre le jus",
          "Absence de repos : couper immédiatement fait jaillir tous les jus",
          "Feu insuffisant : pas de croûte = pas de réaction de Maillard",
          "Retournements multiples : perturbe la cuisson et empêche la croûte"
        ],

        anecdotes: "Le Chateaubriand, taillé dans le cœur du filet, doit son nom au vicomte François-René de Chateaubriand. Son chef personnel, Montmireil, aurait créé ce mode de cuisson au début du XIXe siècle. Traditionnellement, il est grillé entre deux steaks de moindre qualité (sacrifiés) pour protéger le morceau noble."
      },

      entrecote: {
        anatomie: "Prélevée dans le train de côtes (6ème à 12ème côte), l'entrecôte contient le muscle longissimus dorsi. Avec os, on l'appelle côte de bœuf. Le persillage généreux provient de la graisse intramusculaire qui fond à la cuisson.",

        caracteristiques: {
          tendrete: "8/10 - Tendre avec une belle mâche",
          saveur: "9/10 - Intensément goûteuse",
          persillage: "8/10 - Persillage généreux",
          prix: "Élevé (25-45€/kg)"
        },

        techniquesChef: [
          "Privilégier une épaisseur de 3-4 cm pour une cuisson optimale",
          "Saisir sur charbon de bois ou plancha ultra-chaude (250°C+)",
          "Arroser avec le gras fondu pendant la cuisson (basting)",
          "L'os apporte saveur et protège la viande - le conserver si possible",
          "Retirer le nerf central avant cuisson pour éviter la rétractation"
        ],

        sauces: [
          {
            nom: "Sauce au poivre vert",
            type: "Sauce crémée",
            description: "Poivre vert, cognac, fond de veau, crème",
            accord: "Classique incontournable, équilibre parfait"
          },
          {
            nom: "Beurre de bison",
            type: "Beurre composé",
            description: "Beurre, échalotes, vin blanc, estragon",
            accord: "Richesse qui sublime le persillage"
          },
          {
            nom: "Jus de viande réduit",
            type: "Réduction pure",
            description: "Sucs de cuisson dégacés au vin rouge",
            accord: "Concentré de saveurs, sans artifice"
          }
        ],

        accompagnements: [
          {
            type: "Pommes de terre",
            suggestions: [
              "Frites maison doubles cuisson (130°C puis 180°C)",
              "Pommes sautées au beurre clarifié",
              "Pommes de terre grenailles rôties au romarin"
            ]
          },
          {
            type: "Salades",
            suggestions: [
              "Roquette, copeaux de parmesan, vinaigre balsamique",
              "Mâche, noix, vinaigrette à l'huile de noix",
              "Salade verte simple, vinaigrette moutarde"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges corsés",
            suggestions: ["Cahors", "Madiran", "Côte-Rôtie"],
            temperature: "17-18°C",
            notes: "Structure tannique pour accompagner le gras"
          }
        ],

        erreursCourantes: [
          "Cuisson directe sortie du frigo : choc thermique et cuisson inégale",
          "Piquer avec une fourchette : perte massive de jus",
          "Couper contre le sens des fibres : viande plus dure",
          "Jeter les sucs de cuisson : ils sont la base d'un jus parfait"
        ],

        anecdotes: "L'entrecôte 'Rossini' fut créée pour le compositeur Gioachino Rossini, grand amateur de gastronomie. Elle associe entrecôte, foie gras poêlé et truffe noire, trinité de la haute cuisine française. Rossini aurait déclaré : 'J'ai pleuré trois fois dans ma vie : lors de la chute de ma première œuvre, lorsque j'entendis jouer Paganini, et quand une dinde truffée tomba à l'eau lors d'un pique-nique.'"
      },

      viande_hachee_de_boeuf: {
        anatomie: "Viande hachée issue de différents morceaux (paleron, macreuse, basses côtes, bavette). La proportion de gras (5% à 20%) détermine la texture et le goût. Un bon steak haché nécessite environ 15-20% de gras pour rester juteux.",

        caracteristiques: {
          tendrete: "Variable selon morceaux - 7/10 en moyenne",
          saveur: "8/10 - Intense si bon ratio gras/maigre",
          persillage: "Variable selon composition"
        },

        techniquesChef: [
          "Ne jamais tasser ou compresser la viande - manipulation délicate",
          "Former des galettes avec un creux au centre (évite le gonflement)",
          "Cuisson à feu vif pour créer la croûte (réaction de Maillard)",
          "Ne retourner qu'une seule fois pendant la cuisson",
          "Pour un burger juteux : ne jamais écraser avec la spatule",
          "Saler uniquement après cuisson pour éviter la perte de jus"
        ],

        sauces: [
          {
            nom: "Sauce burger classique",
            type: "Américaine",
            description: "Mayonnaise, ketchup, moutarde, cornichons, oignons",
            accord: "Incontournable pour burgers, équilibre acidité-onctuosité"
          },
          {
            nom: "Sauce poivre",
            type: "Française",
            description: "Poivre concassé, cognac, crème, fond de veau",
            accord: "Élève le steak haché au rang gastronomique"
          },
          {
            nom: "Sauce champignons",
            type: "Crémeuse",
            description: "Champignons de Paris, échalotes, crème, persil",
            accord: "Classique réconfortant et généreux"
          },
          {
            nom: "Chimichurri",
            type: "Argentine",
            description: "Persil, ail, origan, vinaigre, huile d'olive, piment",
            accord: "Fraîcheur herbacée qui sublime la viande grillée"
          }
        ],

        accompagnements: [
          {
            type: "Pour burgers",
            suggestions: [
              "Frites maison croustillantes",
              "Oignons caramélisés au beurre",
              "Cheddar affiné, comté, roquefort",
              "Bacon croustillant",
              "Laitue iceberg, tomate, cornichons"
            ]
          },
          {
            type: "Pour steaks hachés",
            suggestions: [
              "Purée de pommes de terre maison",
              "Haricots verts au beurre",
              "Gratin dauphinois",
              "Ratatouille",
              "Pâtes fraîches"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges fruités",
            suggestions: ["Côtes du Rhône", "Beaujolais Villages", "Merlot"],
            temperature: "15-17°C",
            notes: "Souplesse et fruit pour accompagner sans dominer"
          },
          {
            type: "Bières artisanales",
            suggestions: ["IPA", "Stout", "Ambrée"],
            temperature: "8-12°C",
            notes: "Alternative parfaite pour burgers et viandes grillées"
          }
        ],

        erreursCourantes: [
          "Tasser/compresser la viande : résultat dense et sec",
          "Retournements multiples : perte de jus et absence de croûte",
          "Écraser avec la spatule : expulse tout le jus",
          "Saler avant cuisson : extraction de l'humidité",
          "Cuisson excessive : au-delà de 65°C, devient sec et friable"
        ],

        anecdotes: "Le hamburger moderne serait né à la fin du XIXe siècle aux États-Unis, mais son origine exacte est disputée entre plusieurs villes (New Haven, Seymour, Hamburg). Le terme vient de 'Hamburg steak', plat allemand de viande hachée. Le record du plus gros burger jamais cuisiné est de 1164 kg (Minnesota, 2012)."
      },

      cote_de_boeuf: {
        anatomie: "Entrecôte avec os (côte), prélevée dans les côtes 5 à 9 du train de côtes. L'os apporte saveur et protège la viande pendant la cuisson. Une vraie côte de bœuf pèse 800g-1,5kg et se partage à deux ou trois convives.",

        caracteristiques: {
          tendrete: "8/10 - Tendre avec une belle texture",
          saveur: "10/10 - Sommet de la saveur bovine",
          persillage: "9/10 - Persillage généreux et fondant"
        },

        techniquesChef: [
          "Privilégier une épaisseur de 5-7 cm minimum pour une cuisson optimale",
          "Technique reverse sear : four doux (120°C) puis saisie finale très vive",
          "L'os doit être à température ambiante : sortir 1h avant cuisson",
          "Arroser régulièrement avec le gras fondu (basting)",
          "Ne jamais piquer la viande : utiliser des pinces pour retourner",
          "Cuisson au barbecue : méthode indirecte puis saisie directe"
        ],

        sauces: [
          {
            nom: "Beurre maître d'hôtel",
            type: "Beurre composé",
            description: "Beurre, persil plat, citron, fleur de sel",
            accord: "Simplicité qui sublime sans masquer"
          },
          {
            nom: "Sauce bordelaise",
            type: "Grande sauce française",
            description: "Vin rouge, échalotes, moelle de bœuf, thym, demi-glace",
            accord: "Alliance prestigieuse, richesse incomparable"
          },
          {
            nom: "Sauce au poivre vert",
            type: "Crémée et épicée",
            description: "Poivre vert, cognac, fond de veau, crème",
            accord: "Caractère affirmé pour une pièce d'exception"
          },
          {
            nom: "Jus de viande réduit",
            type: "Au naturel",
            description: "Déglacé des sucs de cuisson au vin rouge",
            accord: "Essence pure du bœuf, sans artifice"
          }
        ],

        accompagnements: [
          {
            type: "Pommes de terre",
            suggestions: [
              "Pommes Anna (lamelles fines au beurre clarifié)",
              "Pommes soufflées (double friture technique)",
              "Gratin dauphinois traditionnel",
              "Pommes château (tournées et rôties)"
            ]
          },
          {
            type: "Légumes nobles",
            suggestions: [
              "Asperges vertes rôties",
              "Cèpes ou girolles poêlés",
              "Épinards à la crème",
              "Tomates provençales au four"
            ]
          },
          {
            type: "Salades fraîches",
            suggestions: [
              "Roquette, parmesan, vinaigre balsamique",
              "Mesclun, noix, vinaigrette miel-moutarde",
              "Salade verte, échalotes, vinaigrette"
            ]
          }
        ],

        vins: [
          {
            type: "Grands rouges de Bordeaux",
            suggestions: ["Pauillac", "Saint-Julien", "Margaux", "Pomerol"],
            temperature: "17-18°C",
            notes: "Structure et élégance pour une pièce d'exception"
          },
          {
            type: "Rouges puissants",
            suggestions: ["Châteauneuf-du-Pape", "Hermitage", "Bandol"],
            temperature: "16-18°C",
            notes: "Puissance et générosité en accord parfait"
          }
        ],

        erreursCourantes: [
          "Cuire directement sortie du réfrigérateur : choc thermique",
          "Cuisson trop rapide : extérieur brûlé, intérieur cru",
          "Oublier le temps de repos (15 min minimum) : perte de jus",
          "Couper immédiatement : les jus s'échappent",
          "Négliger l'os : c'est lui qui apporte saveur et protection"
        ],

        anecdotes: "La côte de bœuf 'à la royale' était servie à la cour de Louis XIV. Elle était cuite à la broche devant un feu de bois noble, arrosée de son gras pendant des heures. Les maîtres-queux de l'époque considéraient la cuisson de la côte de bœuf comme le test ultime de leur talent. Une côte parfaite devait avoir une croûte dorée et un cœur rosé uniforme."
      },

      brisket_poitrine: {
        anatomie: "Muscle pectoral du bœuf, situé sous les côtes dans la poitrine. Muscle très travaillé donc riche en collagène. Le brisket se divise en 'flat' (plat, maigre) et 'point' (gras, plus persillé). Pièce emblématique du BBQ texan et américain.",

        caracteristiques: {
          tendrete: "3/10 cru - 9/10 après cuisson longue",
          saveur: "9/10 - Profondeur incomparable après cuisson lente",
          persillage: "Variable - Le 'point' est très persillé"
        },

        techniquesChef: [
          "Cuisson basse température impérative : 110-135°C pendant 8-16h",
          "Le collagène se transforme en gélatine à partir de 70°C sur durée longue",
          "Technique 'Texas crutch' : emballer dans papier alu à mi-cuisson",
          "Fumage au bois (hickory, chêne, mesquite) pour saveur intense",
          "Température cible : 95-98°C à cœur pour tendreté maximale",
          "Repos crucial : 1-2h dans glacière pour redistribution des jus"
        ],

        sauces: [
          {
            nom: "BBQ sauce Texas",
            type: "Américaine fumée",
            description: "Tomate, vinaigre, mélasse, épices, fumée liquide",
            accord: "Classique texan, équilibre sucré-acidulé-fumé"
          },
          {
            nom: "Sauce moutarde Caroline",
            type: "Sud des États-Unis",
            description: "Moutarde jaune, vinaigre, cassonade, épices",
            accord: "Acidité qui coupe le gras, très traditionnelle"
          },
          {
            nom: "Jus de viande concentré",
            type: "Au naturel",
            description: "Jus de cuisson réduit avec graisse séparée",
            accord: "Pureté des saveurs pour puristes"
          },
          {
            nom: "Sauce chimichurri",
            type: "Argentine",
            description: "Persil, ail, origan, vinaigre, piment, huile",
            accord: "Fraîcheur herbacée qui contraste avec richesse"
          }
        ],

        accompagnements: [
          {
            type: "Classiques BBQ",
            suggestions: [
              "Coleslaw (salade chou, carotte, mayonnaise)",
              "Haricots blancs au lard (baked beans)",
              "Maïs grillé au beurre et épices",
              "Pain blanc ou brioche toasté"
            ]
          },
          {
            type: "Accompagnements fumés",
            suggestions: [
              "Mac and cheese fumé",
              "Pommes de terre au four",
              "Jalapeños farcis au fromage",
              "Pickles de légumes maison"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges charpentés",
            suggestions: ["Zinfandel californien", "Malbec argentin", "Côtes du Rhône Villages"],
            temperature: "16-18°C",
            notes: "Structure pour tenir face à la fumée et l'intensité"
          },
          {
            type: "Bières robustes",
            suggestions: ["Porter", "Stout", "Brown Ale"],
            temperature: "10-12°C",
            notes: "Torréfaction et corps pour accompagner la fumée"
          }
        ],

        erreursCourantes: [
          "Cuisson trop rapide ou à température trop haute : viande dure et fibreuse",
          "Couper dans le sens des fibres : impossible à mâcher",
          "Ne pas respecter le temps de repos : viande sèche",
          "Absence de fumage : perte de 50% de la saveur caractéristique",
          "Séparer le flat et le point avant cuisson : perte de jutosité",
          "Température insuffisante à cœur (< 90°C) : collagène non transformé"
        ],

        anecdotes: "Le brisket est devenu l'emblème du BBQ texan dans les années 1950. À l'origine, c'était un morceau de pauvre, bon marché car dur. Les pit masters noirs et mexicains du Texas ont développé la technique de fumage lent qui transforme cette pièce difficile en mets d'exception. Aujourd'hui, les meilleurs briskets de Franklin BBQ (Austin) nécessitent 4-6h d'attente et se vendent 50$/kg."
      }
    ,
    rumsteck: {
          "anatomie": "Situé dans la partie arrière (cuisse), le rumsteck fait partie de la tranche. C'est un muscle maigre à fibres courtes, prélevé près de l'os iliaque. Poids typique d'une pièce : 300-500g.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre si bien coupé",
                "saveur": "8/10 - Goût prononcé",
                "persillage": "3/10 - Maigre"
          },
          "techniquesChef": [
                "Couper en pavés épais (3-4 cm) pour une cuisson optimale",
                "Saisir à feu très vif pour créer une croûte caramélisée",
                "Ne pas dépasser la cuisson à point pour conserver le moelleux",
                "Trancher finement perpendiculairement aux fibres pour servir",
                "Idéal pour le rosbif : rôtir entier puis trancher"
          ],
          "sauces": [
                {
                      "nom": "Sauce béarnaise",
                      "type": "Française",
                      "description": "Beurre clarifié, jaunes d'œufs, estragon, échalotes, vinaigre",
                      "accord": "Classique indémodable, richesse et acidité"
                },
                {
                      "nom": "Sauce au poivre vert",
                      "type": "Française",
                      "description": "Poivre vert, crème, cognac, fond de veau",
                      "accord": "Piquant délicat qui sublime la viande maigre"
                },
                {
                      "nom": "Beurre maître d'hôtel",
                      "type": "Française",
                      "description": "Beurre pommade, persil, citron, ail",
                      "accord": "Simple et efficace, fond sur la viande chaude"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Haricots verts au beurre",
                            "Pommes de terre grenaille",
                            "Épinards à la crème",
                            "Champignons poêlés"
                      ]
                },
                {
                      "type": "Féculents",
                      "suggestions": [
                            "Frites maison",
                            "Gratin dauphinois",
                            "Pommes de terre sautées"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges structurés",
                      "suggestions": [
                            "Saint-Émilion",
                            "Pomerol",
                            "Margaux"
                      ],
                      "temperature": "16-18°C",
                      "notes": "Tannins fondus pour accompagner la viande maigre"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : devient sec et fibreux",
                "Trancher dans le sens des fibres : masticabilité difficile",
                "Ne pas laisser reposer : perte de jus"
          ],
          "anecdotes": "Le nom 'rumsteck' vient de l'anglais 'rump steak' (steak de croupe). En France, c'est l'une des pièces les plus populaires pour le rosbif du dimanche. Les Britanniques le préfèrent plus épais et plus saignant que les Français."
    },
    bavette_d_aloyau: {
          "anatomie": "Muscle plat situé dans la région de l'aloyau, sous le faux-filet. Fibres longues et parallèles, texture légèrement striée. Poids typique : 150-250g par portion.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre si bien préparée",
                "saveur": "9/10 - Très goûteuse",
                "persillage": "4/10 - Modérément persillée"
          },
          "techniquesChef": [
                "Mariner 30 min à 2h dans huile/herbes pour attendrir",
                "Cuisson très vive et courte (1-2 min par face)",
                "Toujours servir saignant à point maximum",
                "Trancher en biais contre les fibres pour la présentation",
                "Laisser reposer 3-4 minutes avant de servir"
          ],
          "sauces": [
                {
                      "nom": "Sauce échalotes",
                      "type": "Française",
                      "description": "Échalotes confites, vin rouge, beurre, thym",
                      "accord": "Le classique de la bavette, incontournable"
                },
                {
                      "nom": "Sauce chimichurri",
                      "type": "Argentine",
                      "description": "Persil, ail, origan, vinaigre, huile, piment",
                      "accord": "Fraîcheur herbacée idéale pour grillades"
                },
                {
                      "nom": "Sauce moutarde à l'ancienne",
                      "type": "Française",
                      "description": "Moutarde en grains, crème, estragon",
                      "accord": "Piquant subtil qui rehausse la viande"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques bistrot",
                      "suggestions": [
                            "Frites croustillantes",
                            "Échalotes confites",
                            "Salade verte vinaigrette"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Haricots verts",
                            "Champignons de Paris poêlés",
                            "Tomates provençales"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fruités",
                      "suggestions": [
                            "Côtes du Rhône",
                            "Chinon",
                            "Bourgueil"
                      ],
                      "temperature": "15-17°C",
                      "notes": "Vins souples et fruités pour la bavette grillée"
                }
          ],
          "erreursCourantes": [
                "Cuisson trop longue : devient caoutchouteuse",
                "Trancher dans le sens des fibres : mastication pénible",
                "Servir trop chaud sans repos : perte de jutosité"
          ],
          "anecdotes": "La bavette à l'échalote est un classique des bistrots parisiens depuis les années 1950. Son nom vient de sa forme qui rappelle un bavoir. Elle a failli disparaître car longtemps considérée comme un morceau de second choix, avant d'être réhabilitée par les chefs bistrotiers."
    },
    bavette_de_flanchet: {
          "anatomie": "Située dans le flanc, plus épaisse que la bavette d'aloyau. Fibres longues et épaisses, texture plus grossière. Également appelée 'bavette à pot-au-feu'.",
          "caracteristiques": {
                "tendrete": "6/10 - Nécessite une bonne préparation",
                "saveur": "8/10 - Très parfumée",
                "persillage": "3/10 - Plus maigre"
          },
          "techniquesChef": [
                "Idéale marinée plusieurs heures voire une nuit",
                "Griller à haute température pour une croûte prononcée",
                "Cuisson saignante obligatoire pour éviter la dureté",
                "Trancher très finement en biais contre les fibres",
                "Peut aussi se braiser longuement pour fondant"
          ],
          "sauces": [
                {
                      "nom": "Marinade asiatique",
                      "type": "Asiatique",
                      "description": "Sauce soja, gingembre, miel, ail, sésame",
                      "accord": "Transforme la bavette en délice oriental"
                },
                {
                      "nom": "Sauce au vin rouge",
                      "type": "Française",
                      "description": "Bordeaux, échalotes, fond de veau, beurre",
                      "accord": "Profondeur et élégance"
                }
          ],
          "accompagnements": [
                {
                      "type": "Asiatiques",
                      "suggestions": [
                            "Riz parfumé",
                            "Légumes sautés au wok",
                            "Salade de chou"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Pommes sautées",
                            "Salade frisée",
                            "Champignons"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges corsés",
                      "suggestions": [
                            "Madiran",
                            "Cahors",
                            "Corbières"
                      ],
                      "temperature": "16-18°C",
                      "notes": "Vins tanniques pour la viande marinée"
                }
          ],
          "erreursCourantes": [
                "Ne pas mariner : viande trop ferme",
                "Cuisson au-delà du point : devient très dure",
                "Tranches trop épaisses : difficile à mâcher"
          ],
          "anecdotes": "La bavette de flanchet est particulièrement appréciée en Amérique du Sud où elle est connue sous le nom de 'vacio'. Au Mexique, elle entre dans la préparation des fajitas traditionnelles."
    },
    onglet: {
          "anatomie": "Muscle du diaphragme, l'onglet est un morceau unique (un seul par animal). Fibres longues, très persillé, avec un nerf central à retirer. Poids : 1-1,5 kg par bête.",
          "caracteristiques": {
                "tendrete": "8/10 - Très tendre si bien préparé",
                "saveur": "10/10 - Le plus goûteux des morceaux",
                "persillage": "6/10 - Bien persillé"
          },
          "techniquesChef": [
                "Retirer impérativement le nerf central avant cuisson",
                "Ne jamais dépasser la cuisson saignante/à point",
                "Saisir à feu très vif 2 min par face maximum",
                "Laisser reposer 5 minutes - la viande se détend",
                "Trancher en biais pour révéler la texture"
          ],
          "sauces": [
                {
                      "nom": "Sauce échalotes au vin rouge",
                      "type": "Française",
                      "description": "Échalotes, vin rouge, fond de veau, beurre",
                      "accord": "Le mariage parfait, classique bistrotier"
                },
                {
                      "nom": "Beurre de moelle",
                      "type": "Française",
                      "description": "Moelle pochée, échalotes, persil",
                      "accord": "Luxe et onctuosité sur viande goûteuse"
                }
          ],
          "accompagnements": [
                {
                      "type": "Bistrot",
                      "suggestions": [
                            "Frites maison",
                            "Échalotes confites",
                            "Pommes de terre sautées"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Épinards au beurre",
                            "Haricots verts fins"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges charpentés",
                      "suggestions": [
                            "Saint-Joseph",
                            "Crozes-Hermitage",
                            "Gigondas"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins de caractère pour morceau de caractère"
                }
          ],
          "erreursCourantes": [
                "Laisser le nerf : impossibilité de mâcher",
                "Cuisson excessive : caoutchouteux et dur",
                "Découper dans le sens des fibres : filandreux"
          ],
          "anecdotes": "L'onglet était autrefois le 'morceau du boucher' qu'il gardait pour lui. Son nom viendrait de sa forme en ongle. C'est devenu un classique des bistrots parisiens, souvent servi avec des frites et une salade."
    },
    hampe: {
          "anatomie": "Muscle du diaphragme comme l'onglet, la hampe est le pilier du diaphragme. Fibres épaisses et longues, très goûteuse. Un seul morceau par animal, environ 500-800g.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre avec bonne préparation",
                "saveur": "9/10 - Très parfumée",
                "persillage": "5/10 - Persillage visible"
          },
          "techniquesChef": [
                "Parer soigneusement les membranes extérieures",
                "Cuisson rapide et intense, saignant uniquement",
                "Ne jamais piquer avec une fourchette (perte de jus)",
                "Repos obligatoire de 3-5 minutes",
                "Découper en tranches fines contre les fibres"
          ],
          "sauces": [
                {
                      "nom": "Sauce bordelaise",
                      "type": "Française",
                      "description": "Moelle, échalotes, vin rouge de Bordeaux, thym",
                      "accord": "Accord régional parfait, richesse du vin"
                },
                {
                      "nom": "Sauce au roquefort",
                      "type": "Française",
                      "description": "Roquefort fondu, crème, poivre",
                      "accord": "Puissance du fromage sur viande goûteuse"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Frites maison",
                            "Pommes de terre sarladaises"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Cèpes poêlés",
                            "Haricots verts",
                            "Épinards"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges du Sud-Ouest",
                      "suggestions": [
                            "Madiran",
                            "Cahors",
                            "Bergerac"
                      ],
                      "temperature": "16-18°C",
                      "notes": "Vins tanniques de la région d'origine"
                }
          ],
          "erreursCourantes": [
                "Cuisson trop longue : devient très coriace",
                "Ne pas retirer les membranes : texture désagréable",
                "Servir trop cuit : perte totale du caractère"
          ],
          "anecdotes": "La hampe est le morceau traditionnel des boucheries du Sud-Ouest. Elle est particulièrement appréciée à Bordeaux où elle se marie avec les vins locaux. En Argentine, elle est connue sous le nom d'entraña et est la vedette des asados."
    },
    paleron: {
          "anatomie": "Muscle de l'épaule, le paleron est traversé par un nerf gélatineux central. Ce collagène se transforme en gélatine lors des cuissons longues. Poids : 2-3 kg par épaule.",
          "caracteristiques": {
                "tendrete": "5/10 cru - 9/10 braisé",
                "saveur": "9/10 - Très parfumé après braisage",
                "persillage": "4/10 - Persillage modéré"
          },
          "techniquesChef": [
                "Toujours braiser ou mijoter (minimum 2h30)",
                "Le nerf central devient fondant et délicieux après cuisson",
                "Saisir d'abord à feu vif pour colorer",
                "Cuire à couvert dans du liquide (vin, bouillon)",
                "La viande doit se défaire à la fourchette"
          ],
          "sauces": [
                {
                      "nom": "Jus de braisage",
                      "type": "Française",
                      "description": "Le jus de cuisson réduit avec légumes et vin",
                      "accord": "Concentré de saveurs, meilleure option"
                },
                {
                      "nom": "Sauce au vin rouge",
                      "type": "Française",
                      "description": "Bordeaux, carottes, oignons, lardons",
                      "accord": "Classique du bœuf bourguignon"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légumes braisés",
                      "suggestions": [
                            "Carottes",
                            "Pommes de terre",
                            "Navets",
                            "Oignons grelots"
                      ]
                },
                {
                      "type": "Féculents",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Pâtes fraîches",
                            "Polenta"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges puissants",
                      "suggestions": [
                            "Bourgogne Pinot Noir",
                            "Côtes du Rhône",
                            "Languedoc"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins généreux pour plat mijoté"
                }
          ],
          "erreursCourantes": [
                "Cuisson rapide : viande dure et fibreuse",
                "Température trop haute : viande sèche malgré le liquide",
                "Manque de temps : collagène non transformé"
          ],
          "anecdotes": "Le paleron est la pièce traditionnelle du bœuf bourguignon et du pot-au-feu. Son nerf central, longtemps considéré comme un défaut, est aujourd'hui reconnu comme ce qui donne son onctuosité au braisé."
    },
    macreuse_a_pot_au_feu: {
          "anatomie": "Partie de l'épaule, muscle gélatineux et nerveux. Parfaite pour les cuissons longues car riche en collagène. Se divise en deux parties : à pot-au-feu (plus grasse) et à bifteck (plus maigre).",
          "caracteristiques": {
                "tendrete": "4/10 cru - 8/10 mijotée",
                "saveur": "8/10 - Goût prononcé",
                "persillage": "3/10 - Peu persillée"
          },
          "techniquesChef": [
                "Démarrer dans l'eau froide pour pot-au-feu",
                "Écumer régulièrement en début de cuisson",
                "Cuisson lente minimum 3 heures",
                "La viande doit pouvoir s'émietter",
                "Le bouillon devient un excellent consommé"
          ],
          "sauces": [
                {
                      "nom": "Gros sel et cornichons",
                      "type": "Française",
                      "description": "Sel de Guérande, cornichons, moutarde",
                      "accord": "Traditionnel du pot-au-feu, simplicité parfaite"
                },
                {
                      "nom": "Sauce gribiche",
                      "type": "Française",
                      "description": "Œufs durs, câpres, cornichons, fines herbes, moutarde",
                      "accord": "Alternative riche au simple sel"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légumes du pot-au-feu",
                      "suggestions": [
                            "Poireaux",
                            "Carottes",
                            "Navets",
                            "Céleri"
                      ]
                },
                {
                      "type": "Condiments",
                      "suggestions": [
                            "Moutarde forte",
                            "Cornichons",
                            "Oignons au vinaigre"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges légers",
                      "suggestions": [
                            "Beaujolais",
                            "Côtes du Rhône léger",
                            "Bourgogne Passetoutgrain"
                      ],
                      "temperature": "14-16°C",
                      "notes": "Vins fruités et peu tanniques"
                }
          ],
          "erreursCourantes": [
                "Démarrer à l'eau chaude : viande durcie en surface",
                "Ne pas écumer : bouillon trouble",
                "Cuisson insuffisante : viande coriace"
          ],
          "anecdotes": "Le pot-au-feu est considéré comme le plat national français. Henri IV voulait 'une poule au pot' pour chaque Français, mais c'est le bœuf qui s'est imposé. La macreuse donne à la fois une viande fondante et un bouillon savoureux."
    },
    macreuse_a_bifteck: {
          "anatomie": "Partie maigre et tendre de l'épaule, proche de la palette. Contrairement à la macreuse à pot-au-feu, elle convient aux cuissons rapides. Fibres fines et régulières.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre pour un morceau d'épaule",
                "saveur": "7/10 - Bon goût de bœuf",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Couper en steaks de 2 cm d'épaisseur",
                "Saisir rapidement à feu vif",
                "Servir saignant à rosé uniquement",
                "Excellent pour les émincés et sautés",
                "Se prête bien aux marinades courtes"
          ],
          "sauces": [
                {
                      "nom": "Sauce poivrade",
                      "type": "Française",
                      "description": "Poivre concassé, vin rouge, vinaigre, fond de veau",
                      "accord": "Relevé qui sublime cette viande maigre"
                },
                {
                      "nom": "Sauce aux oignons",
                      "type": "Française",
                      "description": "Oignons caramélisés, fond brun, thym",
                      "accord": "Douceur des oignons sur viande maigre"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Ratatouille",
                            "Poêlée de légumes",
                            "Haricots verts"
                      ]
                },
                {
                      "type": "Féculents",
                      "suggestions": [
                            "Frites",
                            "Pommes de terre sautées",
                            "Riz pilaf"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges moyens",
                      "suggestions": [
                            "Côtes de Provence rouge",
                            "Minervois",
                            "Saint-Chinian"
                      ],
                      "temperature": "15-17°C",
                      "notes": "Vins souples pour viande maigre"
                }
          ],
          "erreursCourantes": [
                "Cuisson prolongée : sèche rapidement",
                "Tranches trop fines : impossible à saisir correctement",
                "Servir bien cuit : perd tout intérêt"
          ],
          "anecdotes": "La macreuse à bifteck est un morceau économique qui offre un excellent rapport qualité/prix. Elle est très populaire dans les cantines et restaurants d'entreprise pour sa polyvalence."
    },
    gite: {
          "anatomie": "Muscle de la jambe arrière, le gîte est composé de fibres longues et d'un os central (gîte à la noix). Morceau gélatineux idéal pour les cuissons longues.",
          "caracteristiques": {
                "tendrete": "3/10 cru - 8/10 braisé",
                "saveur": "8/10 - Très parfumé",
                "persillage": "2/10 - Maigre mais gélatineux"
          },
          "techniquesChef": [
                "Braiser ou mijoter obligatoirement (3-4 heures)",
                "L'os central enrichit le jus de cuisson",
                "Idéal taillé en tranches épaisses pour osso buco de bœuf",
                "La gélatine naturelle lie les sauces",
                "Se défait en filaments tendres à la fourchette"
          ],
          "sauces": [
                {
                      "nom": "Gremolata",
                      "type": "Italienne",
                      "description": "Persil, ail, zeste de citron",
                      "accord": "Fraîcheur qui équilibre le fondant du braisé"
                },
                {
                      "nom": "Sauce tomate",
                      "type": "Italienne",
                      "description": "Tomates, oignons, carottes, céleri, vin blanc",
                      "accord": "Base classique du braisé à l'italienne"
                }
          ],
          "accompagnements": [
                {
                      "type": "Italien",
                      "suggestions": [
                            "Risotto alla milanese",
                            "Polenta crémeuse",
                            "Gnocchis"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Légumes racines"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges italiens",
                      "suggestions": [
                            "Barolo",
                            "Amarone",
                            "Chianti Classico"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Vins puissants pour plat généreux"
                }
          ],
          "erreursCourantes": [
                "Cuisson rapide : viande immangeable",
                "Température trop forte : extérieur dur, intérieur cru",
                "Manque de liquide : braisé sec"
          ],
          "anecdotes": "Le gîte est l'équivalent du jarret pour la viande de bœuf. Il est à la base de l'osso buco de bœuf, variante du célèbre plat milanais traditionnellement préparé avec du veau."
    },
    plat_de_cotes: {
          "anatomie": "Les plats de côtes sont les basses côtes avec os, partie inférieure du train de côtes. Viande entrelardée, idéale pour les cuissons lentes. 3-4 kg pour un plat complet.",
          "caracteristiques": {
                "tendrete": "4/10 cru - 9/10 braisé",
                "saveur": "9/10 - Exceptionnellement parfumé",
                "persillage": "6/10 - Bien gras et persillé"
          },
          "techniquesChef": [
                "Braiser avec os pour maximum de saveur",
                "Cuisson minimum 3 heures à basse température",
                "La viande doit se détacher des os",
                "Déglacer régulièrement pendant la cuisson",
                "Parfait pour les préparations fumées (BBQ)"
          ],
          "sauces": [
                {
                      "nom": "Sauce BBQ maison",
                      "type": "Américaine",
                      "description": "Tomates, mélasse, vinaigre, épices, fumée liquide",
                      "accord": "L'accord texan par excellence"
                },
                {
                      "nom": "Sauce au vin rouge",
                      "type": "Française",
                      "description": "Vin rouge corsé, échalotes, fond de veau",
                      "accord": "Version française élégante"
                }
          ],
          "accompagnements": [
                {
                      "type": "BBQ",
                      "suggestions": [
                            "Coleslaw",
                            "Maïs grillé",
                            "Haricots rouges",
                            "Cornbread"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Purée",
                            "Légumes racines",
                            "Pommes de terre"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges puissants",
                      "suggestions": [
                            "Zinfandel",
                            "Côtes du Rhône Sud",
                            "Châteauneuf-du-Pape"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Vins riches et épicés"
                }
          ],
          "erreursCourantes": [
                "Cuisson trop courte : viande dure",
                "Feu trop fort : viande sèche malgré le gras",
                "Ne pas braiser avec os : perte de saveur"
          ],
          "anecdotes": "Les plats de côtes sont devenus populaires grâce au BBQ texan. Autrefois morceau de pauvre, ils sont maintenant servis dans les meilleurs restaurants. Le secret est le fumage lent qui peut durer jusqu'à 12 heures."
    },
    collier: {
          "anatomie": "Situé dans le cou, le collier est un muscle très travaillé donc ferme. Riche en collagène et en saveur. Poids typique : 2-3 kg pour un collier entier.",
          "caracteristiques": {
                "tendrete": "3/10 cru - 9/10 braisé",
                "saveur": "9/10 - Très goûteux",
                "persillage": "4/10 - Modérément persillé"
          },
          "techniquesChef": [
                "Braiser ou mijoter exclusivement (3+ heures)",
                "Excellent pour les daubes et ragoûts",
                "Découper en gros cubes pour les sautés",
                "Le collagène se transforme en gélatine onctueuse",
                "Peut être haché pour des préparations juteuses"
          ],
          "sauces": [
                {
                      "nom": "Sauce daube provençale",
                      "type": "Française",
                      "description": "Vin rouge, olives, tomates, herbes de Provence",
                      "accord": "La combinaison méridionale parfaite"
                },
                {
                      "nom": "Sauce à la bière",
                      "type": "Flamande",
                      "description": "Bière brune, pain d'épices, oignons",
                      "accord": "Rondeur et légère amertume"
                }
          ],
          "accompagnements": [
                {
                      "type": "Provençal",
                      "suggestions": [
                            "Pâtes fraîches",
                            "Polenta",
                            "Légumes confits"
                      ]
                },
                {
                      "type": "Flamand",
                      "suggestions": [
                            "Frites",
                            "Endives braisées",
                            "Chou rouge"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges du Sud",
                      "suggestions": [
                            "Bandol",
                            "Côtes de Provence",
                            "Palette"
                      ],
                      "temperature": "16-18°C",
                      "notes": "Vins généreux et ensoleillés"
                }
          ],
          "erreursCourantes": [
                "Cuisson rapide : immangeable",
                "Ne pas saisir avant braisage : manque de couleur",
                "Liquide insuffisant : braisé sec"
          ],
          "anecdotes": "Le collier de bœuf est la base de la célèbre daube provençale. Traditionnellement, la daube cuisait toute la nuit dans les braises de la cheminée. Le plat était encore meilleur réchauffé le lendemain."
    },
    jarret: {
          "anatomie": "Partie basse de la patte, le jarret est entouré de tendons et de collagène. L'os central contient de la moelle. Morceau gélatineux par excellence, environ 400-600g par jarret.",
          "caracteristiques": {
                "tendrete": "2/10 cru - 9/10 braisé",
                "saveur": "9/10 - Extrêmement parfumé",
                "persillage": "2/10 - Maigre mais très gélatineux"
          },
          "techniquesChef": [
                "Braiser impérativement (3-5 heures)",
                "L'os et les tendons enrichissent le jus",
                "Parfait pour l'osso buco de bœuf",
                "La viande doit se défaire en filaments",
                "Le jus devient naturellement onctueux"
          ],
          "sauces": [
                {
                      "nom": "Réduction de braisage",
                      "type": "Française",
                      "description": "Le jus de cuisson réduit et monté au beurre",
                      "accord": "Concentré de saveurs, indispensable"
                },
                {
                      "nom": "Gremolata",
                      "type": "Italienne",
                      "description": "Persil, ail, zeste de citron",
                      "accord": "Note fraîche sur le fondant"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Risotto",
                            "Purée de céleri",
                            "Polenta"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Carottes glacées",
                            "Petits oignons",
                            "Champignons"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges corsés",
                      "suggestions": [
                            "Barolo",
                            "Barbaresco",
                            "Brunello di Montalcino"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Grands vins pour grand plat"
                }
          ],
          "erreursCourantes": [
                "Cuisson insuffisante : tendons durs",
                "Feu trop vif : extérieur brûlé, intérieur cru",
                "Jeter le jus : c'est le meilleur !"
          ],
          "anecdotes": "Le jarret de bœuf est l'ancêtre de l'osso buco milanais (traditionnellement au veau). En France, il entre dans la composition du pot-au-feu où il apporte son incomparable gélatine au bouillon."
    },
    joue_de_boeuf: {
          "anatomie": "Muscle de la mâchoire, la joue est extrêmement travaillée par la mastication. Tissu conjonctif abondant qui fond en cuisson longue. Une joue pèse 300-500g.",
          "caracteristiques": {
                "tendrete": "2/10 cru - 10/10 braisée",
                "saveur": "10/10 - Saveur incomparable",
                "persillage": "3/10 - Peu persillée mais très gélatineuse"
          },
          "techniquesChef": [
                "Parer soigneusement les membranes et le gras",
                "Braiser au minimum 4 heures",
                "La texture doit être fondante à la cuillère",
                "Idéale pour les cuissons sous-vide longues (48-72h)",
                "Le jus de braisage est d'une onctuosité exceptionnelle"
          ],
          "sauces": [
                {
                      "nom": "Sauce vin rouge",
                      "type": "Française",
                      "description": "Grand vin rouge, échalotes, fond de veau, thym",
                      "accord": "L'accord ultime, élégance et profondeur"
                },
                {
                      "nom": "Sauce aux carottes",
                      "type": "Française",
                      "description": "Carottes confites, jus de braisage, orange",
                      "accord": "Douceur et couleur"
                }
          ],
          "accompagnements": [
                {
                      "type": "Raffinés",
                      "suggestions": [
                            "Purée de panais",
                            "Topinambours rôtis",
                            "Céleri rave"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Carottes glacées"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Grands rouges",
                      "suggestions": [
                            "Pauillac",
                            "Saint-Estèphe",
                            "Hermitage"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Grands crus pour morceau d'exception"
                }
          ],
          "erreursCourantes": [
                "Cuisson trop courte : morceau immangeable",
                "Ne pas parer : texture désagréable",
                "Feu trop fort : durcit la viande"
          ],
          "anecdotes": "La joue de bœuf était autrefois un abat bon marché. Elle est devenue un morceau prisé des grands chefs pour sa texture unique. Alain Ducasse l'a popularisée dans son restaurant trois étoiles."
    },
    queue_de_boeuf: {
          "anatomie": "La queue est composée de vertèbres entourées de viande maigre et de tendons. Très riche en collagène et en moelle. Poids total : 1,5-2,5 kg.",
          "caracteristiques": {
                "tendrete": "2/10 cru - 9/10 braisée",
                "saveur": "10/10 - Extrêmement parfumée",
                "persillage": "2/10 - Maigre mais très gélatineuse"
          },
          "techniquesChef": [
                "Couper entre les vertèbres en tronçons",
                "Braiser minimum 4-5 heures",
                "La viande doit se détacher des os",
                "Le jus gélifie naturellement au refroidissement",
                "Parfaite en terrine après braisage"
          ],
          "sauces": [
                {
                      "nom": "Sauce au vin rouge corsé",
                      "type": "Française",
                      "description": "Grand vin rouge, bouquet garni, fond de veau",
                      "accord": "La référence absolue"
                },
                {
                      "nom": "Sauce tomate aux herbes",
                      "type": "Méditerranéenne",
                      "description": "Tomates, romarin, laurier, ail",
                      "accord": "Version ensoleillée du braisé"
                }
          ],
          "accompagnements": [
                {
                      "type": "Féculents",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Polenta crémeuse",
                            "Pâtes fraîches"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Carottes",
                            "Petits oignons",
                            "Champignons de Paris"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges puissants",
                      "suggestions": [
                            "Châteauneuf-du-Pape",
                            "Bandol",
                            "Cornas"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Vins de grande garde pour ce plat"
                }
          ],
          "erreursCourantes": [
                "Cuisson insuffisante : impossible à manger",
                "Ne pas dégraisser : sauce trop grasse",
                "Vertèbres mal séparées : présentation difficile"
          ],
          "anecdotes": "La queue de bœuf était un plat de taverne populaire au XIXe siècle. Le 'oxtail soup' anglais et la 'rabo de toro' espagnole (queue de taureau de combat) sont des préparations légendaires."
    },
    tende_de_tranche: {
          "anatomie": "Partie de la cuisse, la tende de tranche est un muscle maigre et tendre situé sur la face interne de la cuisse. Fibres fines, peu de gras. Poids : 2-3 kg.",
          "caracteristiques": {
                "tendrete": "7/10 - Assez tendre",
                "saveur": "7/10 - Bon goût de bœuf",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Idéale pour rôtis et rosbifs",
                "Barder ou larder pour éviter le dessèchement",
                "Cuisson rosée recommandée",
                "Trancher finement pour carpaccio",
                "Excellente pour la fondue bourguignonne"
          ],
          "sauces": [
                {
                      "nom": "Jus de rôti",
                      "type": "Française",
                      "description": "Jus de cuisson déglacé, fond de veau",
                      "accord": "Simple et efficace"
                },
                {
                      "nom": "Sauce au raifort",
                      "type": "Anglo-saxonne",
                      "description": "Raifort râpé, crème fraîche, citron",
                      "accord": "Piquant qui réveille la viande maigre"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Yorkshire pudding",
                            "Pommes de terre rôties",
                            "Légumes verts"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Gratin dauphinois",
                            "Haricots verts",
                            "Carottes glacées"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fins",
                      "suggestions": [
                            "Volnay",
                            "Pommard",
                            "Chambolle-Musigny"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Bourgognes élégants pour rosbif"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : viande sèche",
                "Ne pas barder : dessèchement",
                "Découper trop épais : perd en finesse"
          ],
          "anecdotes": "La tende de tranche est le morceau traditionnel du rosbif anglais du dimanche. Elle a donné naissance au terme français 'rosbif' (de l'anglais roast beef), utilisé parfois pour désigner les Britanniques."
    },
    rond_de_tranche: {
          "anatomie": "Partie de la tranche, le rond est un muscle arrondi et maigre de la cuisse. Fibres courtes et régulières. Idéal pour les escalopes. Poids : 1,5-2 kg.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre",
                "saveur": "6/10 - Goût délicat",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Tailler en escalopes fines (5-8 mm)",
                "Excellent pour les escalopes panées",
                "Cuisson rapide à feu vif",
                "Ne pas trop aplatir : perd en jutosité",
                "Idéal pour les émincés de bœuf"
          ],
          "sauces": [
                {
                      "nom": "Sauce milanaise",
                      "type": "Italienne",
                      "description": "Tomates, ail, basilic, parmesan",
                      "accord": "Fraîcheur méditerranéenne"
                },
                {
                      "nom": "Sauce crème champignons",
                      "type": "Française",
                      "description": "Champignons, crème, échalotes",
                      "accord": "Onctuosité pour viande maigre"
                }
          ],
          "accompagnements": [
                {
                      "type": "Italien",
                      "suggestions": [
                            "Spaghetti",
                            "Roquette au parmesan",
                            "Tomates cerises"
                      ]
                },
                {
                      "type": "Classique",
                      "suggestions": [
                            "Frites",
                            "Salade verte",
                            "Légumes grillés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges légers",
                      "suggestions": [
                            "Valpolicella",
                            "Bardolino",
                            "Beaujolais"
                      ],
                      "temperature": "14-16°C",
                      "notes": "Vins fruités et faciles"
                }
          ],
          "erreursCourantes": [
                "Escalopes trop épaisses : cuisson inégale",
                "Cuisson prolongée : viande sèche et dure",
                "Panure brûlée : feu trop vif"
          ],
          "anecdotes": "Le rond de tranche est à la base de l'escalope milanaise, plat qui aurait inspiré la Wiener Schnitzel autrichienne. Les deux pays se disputent la paternité de ce classique pané."
    },
    jumeau_a_pot_au_feu: {
          "anatomie": "Situé dans l'épaule, le jumeau est un muscle gélatineux idéal pour les bouillons. Il existe en version 'à pot-au-feu' (plus grasse) et 'à bifteck' (plus maigre).",
          "caracteristiques": {
                "tendrete": "4/10 cru - 8/10 mijoté",
                "saveur": "8/10 - Très parfumé",
                "persillage": "4/10 - Persillé et gélatineux"
          },
          "techniquesChef": [
                "Cuisson longue dans un bouillon parfumé",
                "Démarrer à l'eau froide pour extraire les saveurs",
                "Écumer régulièrement le bouillon",
                "Cuisson minimum 3 heures",
                "La viande doit être fondante"
          ],
          "sauces": [
                {
                      "nom": "Gros sel et moutarde",
                      "type": "Française",
                      "description": "Sel de Guérande, moutarde de Dijon forte",
                      "accord": "L'accord traditionnel du pot-au-feu"
                },
                {
                      "nom": "Sauce raifort",
                      "type": "Anglo-saxonne",
                      "description": "Raifort, crème fraîche, vinaigre",
                      "accord": "Piquant rafraîchissant"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légumes du pot-au-feu",
                      "suggestions": [
                            "Poireaux",
                            "Navets",
                            "Carottes",
                            "Céleri-rave"
                      ]
                },
                {
                      "type": "Os à moelle",
                      "suggestions": [
                            "Os à moelle grillés",
                            "Toast aillé"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges légers",
                      "suggestions": [
                            "Beaujolais",
                            "Bourgogne Passetoutgrain"
                      ],
                      "temperature": "14-15°C",
                      "notes": "Vins simples et gouleyants"
                }
          ],
          "erreursCourantes": [
                "Démarrer à l'eau chaude : viande durcie",
                "Cuisson insuffisante : viande coriace",
                "Ne pas écumer : bouillon trouble"
          ],
          "anecdotes": "Le jumeau tire son nom du fait qu'il est situé contre un autre muscle similaire. C'est l'un des morceaux essentiels du pot-au-feu traditionnel, plat que les familles françaises cuisinaient le dimanche."
    },
    flanchet: {
          "anatomie": "Partie ventrale du bœuf, le flanchet est un muscle plat et peu épais. Fibres longues et apparentes. Très utilisé pour les bouillons et les hachis.",
          "caracteristiques": {
                "tendrete": "4/10 cru - 7/10 mijoté",
                "saveur": "7/10 - Goûteux",
                "persillage": "5/10 - Entrelardé"
          },
          "techniquesChef": [
                "Excellent haché pour les préparations",
                "Braiser ou mijoter pour attendrir",
                "Parfait roulé et farci",
                "Peut être grillé s'il est mariné longtemps",
                "La cuisson lente attendrit les fibres"
          ],
          "sauces": [
                {
                      "nom": "Sauce tomate maison",
                      "type": "Française",
                      "description": "Tomates, oignons, ail, herbes",
                      "accord": "Classique des plats mijotés"
                },
                {
                      "nom": "Sauce au curry",
                      "type": "Indienne",
                      "description": "Curry, lait de coco, gingembre",
                      "accord": "Exotisme sur viande braisée"
                }
          ],
          "accompagnements": [
                {
                      "type": "Féculents",
                      "suggestions": [
                            "Riz basmati",
                            "Pommes vapeur",
                            "Semoule"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Petits pois",
                            "Carottes",
                            "Courgettes"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges souples",
                      "suggestions": [
                            "Côtes du Rhône",
                            "Côtes de Gascogne"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Vins fruités et accessibles"
                }
          ],
          "erreursCourantes": [
                "Grillade sans marinade : viande dure",
                "Cuisson trop rapide : mastication difficile",
                "Tranches trop épaisses : texture désagréable"
          ],
          "anecdotes": "Le flanchet a longtemps été un morceau de second choix. Il est aujourd'hui apprécié pour les préparations mijotées et les hachis. En Amérique latine, il est la base des fameux tacos de 'bistec'."
    },
    foie: {
          "anatomie": "Organe filtrant du bœuf, le foie pèse 5-7 kg. Chair granuleuse brun-rouge, goût puissant. Doit être consommé très frais. Se vend en tranches de 150-200g.",
          "caracteristiques": {
                "tendrete": "8/10 - Tendre si bien cuit",
                "saveur": "9/10 - Très prononcé",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Retirer la membrane externe avant cuisson",
                "Cuisson très rapide (1-2 min par face)",
                "Doit rester rosé à l'intérieur",
                "Ne jamais recuire un foie déjà cuit",
                "Fariner légèrement pour une croûte dorée"
          ],
          "sauces": [
                {
                      "nom": "Sauce au vinaigre de xérès",
                      "type": "Française",
                      "description": "Vinaigre de xérès, échalotes, beurre",
                      "accord": "Acidité qui équilibre le goût puissant"
                },
                {
                      "nom": "Oignons caramélisés",
                      "type": "Vénitienne",
                      "description": "Oignons fondus, vinaigre balsamique",
                      "accord": "Le 'fegato alla veneziana' classique"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Bacon grillé",
                            "Oignons"
                      ]
                },
                {
                      "type": "Italiens",
                      "suggestions": [
                            "Polenta crémeuse",
                            "Salade de roquette"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fruités",
                      "suggestions": [
                            "Côtes du Rhône",
                            "Beaujolais",
                            "Merlot jeune"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Vins souples pour le foie"
                }
          ],
          "erreursCourantes": [
                "Surcuisson : devient granuleux et amer",
                "Ne pas retirer la membrane : texture désagréable",
                "Viande pas fraîche : goût trop fort"
          ],
          "anecdotes": "Le foie de bœuf était très populaire jusqu'aux années 1970, avant d'être détrôné par le foie de veau plus délicat. Il connaît un regain d'intérêt pour sa richesse en fer et vitamines B."
    },
    langue: {
          "anatomie": "Muscle très travaillé, la langue de bœuf pèse 1,5-2,5 kg. Doit être pochée puis pelée. Chair tendre et fine une fois préparée.",
          "caracteristiques": {
                "tendrete": "8/10 - Très tendre après cuisson",
                "saveur": "8/10 - Goût délicat",
                "persillage": "3/10 - Légèrement grasse"
          },
          "techniquesChef": [
                "Pocher 2-3 heures dans un bouillon aromatisé",
                "Peler à chaud (la peau s'enlève facilement)",
                "Peut être braisée après pochage",
                "Excellente froide en vinaigrette",
                "Se tranche finement pour les salades"
          ],
          "sauces": [
                {
                      "nom": "Sauce ravigote",
                      "type": "Française",
                      "description": "Câpres, cornichons, fines herbes, moutarde",
                      "accord": "Fraîcheur acidulée parfaite"
                },
                {
                      "nom": "Sauce piquante",
                      "type": "Française",
                      "description": "Cornichons, échalotes, vin blanc, vinaigre",
                      "accord": "Classique de la cuisine bourgeoise"
                },
                {
                      "nom": "Sauce tomate épicée",
                      "type": "Mexicaine",
                      "description": "Tomates, piments, oignons, coriandre",
                      "accord": "Version 'lengua' mexicaine"
                }
          ],
          "accompagnements": [
                {
                      "type": "Froids",
                      "suggestions": [
                            "Salade de pommes de terre",
                            "Cornichons",
                            "Câpres"
                      ]
                },
                {
                      "type": "Chauds",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Légumes braisés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Blancs secs",
                      "suggestions": [
                            "Muscadet",
                            "Chablis",
                            "Aligoté"
                      ],
                      "temperature": "10-12°C",
                      "notes": "Blancs vifs pour langue froide"
                },
                {
                      "type": "Rouges légers",
                      "suggestions": [
                            "Beaujolais",
                            "Bourgueil"
                      ],
                      "temperature": "14-15°C",
                      "notes": "Pour la langue chaude"
                }
          ],
          "erreursCourantes": [
                "Pochage insuffisant : difficile à peler",
                "Ne pas peler à chaud : peau qui colle",
                "Tranches trop épaisses : perd en finesse"
          ],
          "anecdotes": "La langue de bœuf était un mets de fête dans la cuisine bourgeoise du XIXe siècle. Au Mexique, les 'tacos de lengua' sont un classique des stands de rue. En France, elle reste populaire dans les boucheries charcutières."
    },
    os_a_moelle: {
          "anatomie": "Os longs des pattes (fémur, tibia), fendus pour exposer la moelle. La moelle est un tissu gras et onctueux, considéré comme un mets délicat. Un os fait 10-15 cm.",
          "caracteristiques": {
                "tendrete": "10/10 - Fondante",
                "saveur": "10/10 - Riche et onctueux",
                "persillage": "N/A"
          },
          "techniquesChef": [
                "Tremper 12h dans l'eau froide salée pour dégorger",
                "Rôtir au four 15-20 min à 200°C",
                "Servir aussitôt (la moelle fige en refroidissant)",
                "Protéger la moelle avec du papier aluminium",
                "Extraire avec une cuillère ou un couteau"
          ],
          "sauces": [
                {
                      "nom": "Fleur de sel",
                      "type": "Simple",
                      "description": "Fleur de sel de Guérande, poivre du moulin",
                      "accord": "Pureté absolue pour la moelle"
                },
                {
                      "nom": "Persillade",
                      "type": "Française",
                      "description": "Persil haché, ail, échalote",
                      "accord": "Fraîcheur herbacée"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pain grillé",
                            "Toast de campagne",
                            "Salade frisée"
                      ]
                },
                {
                      "type": "Raffinés",
                      "suggestions": [
                            "Tartare de bœuf",
                            "Risotto",
                            "Gnocchis"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges puissants",
                      "suggestions": [
                            "Saint-Émilion",
                            "Pomerol",
                            "Médoc"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Bordeaux classiques pour la moelle"
                }
          ],
          "erreursCourantes": [
                "Ne pas dégorger : moelle sanguinolente",
                "Cuisson excessive : moelle fondue perdue",
                "Servir froid : moelle figée et grasse"
          ],
          "anecdotes": "L'os à moelle était le régal des hommes préhistoriques qui cassaient les os pour l'extraire. C'est l'un des premiers aliments cuits de l'humanité. Aujourd'hui, c'est un classique des bistrots parisiens, souvent servi avec un verre de Bordeaux."
    },
    poire: {
          "anatomie": "Petit muscle rond situé dans la cuisse, la poire pèse environ 500-600g par animal. Sa forme rappelle le fruit du même nom. Fibres fines et courtes.",
          "caracteristiques": {
                "tendrete": "9/10 - Extrêmement tendre",
                "saveur": "8/10 - Goût fin",
                "persillage": "3/10 - Maigre et tendre"
          },
          "techniquesChef": [
                "Cuisson rapide à feu vif uniquement",
                "Ne jamais dépasser la cuisson rosée",
                "Idéale pour les tartares et carpaccios",
                "Peut être poêlée entière comme un filet",
                "Repos court (2-3 min) avant découpe"
          ],
          "sauces": [
                {
                      "nom": "Sauce béarnaise",
                      "type": "Française",
                      "description": "Jaunes d'œufs, beurre, estragon",
                      "accord": "Richesse sur viande délicate"
                },
                {
                      "nom": "Simple jus de citron",
                      "type": "Simple",
                      "description": "Citron, huile d'olive, fleur de sel",
                      "accord": "Pour tartare ou carpaccio"
                }
          ],
          "accompagnements": [
                {
                      "type": "Fins",
                      "suggestions": [
                            "Roquette au parmesan",
                            "Frites de patate douce",
                            "Légumes grillés"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Frites maison",
                            "Salade verte"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fins",
                      "suggestions": [
                            "Pommard",
                            "Volnay",
                            "Gevrey-Chambertin"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Bourgognes élégants pour cette pièce noble"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : perd toute sa tendreté",
                "Ne pas laisser reposer : perte de jus",
                "Découpe dans le sens des fibres : moins tendre"
          ],
          "anecdotes": "La poire est l'un des 'morceaux du boucher', ces pièces rares que le boucher gardait pour lui ou ses meilleurs clients. Il n'y en a que deux par bœuf, d'où sa rareté et son prix."
    },
    merlan: {
          "anatomie": "Muscle situé sur la face interne de la cuisse, le merlan tire son nom de sa couleur claire rappelant le poisson. Très tendre, environ 300-400g par animal.",
          "caracteristiques": {
                "tendrete": "9/10 - Très tendre",
                "saveur": "7/10 - Goût délicat",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Cuisson très rapide (comme un poisson !)",
                "Idéal en carpaccio ou tartare",
                "Poêler à feu vif 1-2 min par face",
                "Ne jamais cuire au-delà de rosé",
                "Parfait pour les cuissons basse température"
          ],
          "sauces": [
                {
                      "nom": "Huile d'olive et citron",
                      "type": "Méditerranéenne",
                      "description": "Huile d'olive première pression, citron",
                      "accord": "Pureté pour carpaccio"
                },
                {
                      "nom": "Sauce vierge",
                      "type": "Provençale",
                      "description": "Tomates, basilic, huile d'olive",
                      "accord": "Fraîcheur estivale"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légers",
                      "suggestions": [
                            "Roquette",
                            "Copeaux de parmesan",
                            "Câpres"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pommes de terre nouvelles",
                            "Légumes grillés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges délicats",
                      "suggestions": [
                            "Sancerre rouge",
                            "Mercurey",
                            "Rully"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Vins légers pour viande délicate"
                }
          ],
          "erreursCourantes": [
                "Cuisson prolongée : devient sec immédiatement",
                "Assaisonnement trop fort : masque la finesse",
                "Découpe épaisse : perd son intérêt"
          ],
          "anecdotes": "Le merlan doit son nom à sa chair pâle qui rappelle celle du poisson. C'est l'un des morceaux les plus rares (un seul par cuisse, soit deux par bœuf) et les plus recherchés des amateurs de viande crue."
    },
    araignee: {
          "anatomie": "Muscle situé au creux de l'articulation de la hanche, l'araignée tire son nom des nervures qui évoquent une toile. Environ 600-800g par animal.",
          "caracteristiques": {
                "tendrete": "8/10 - Tendre et juteuse",
                "saveur": "9/10 - Exceptionnellement goûteuse",
                "persillage": "5/10 - Bien persillée"
          },
          "techniquesChef": [
                "Retirer les membranes apparentes",
                "Griller ou poêler à feu très vif",
                "Servir saignant à rosé maximum",
                "Ne pas masquer sa saveur naturelle",
                "Repos court mais obligatoire"
          ],
          "sauces": [
                {
                      "nom": "Beurre de café de Paris",
                      "type": "Française",
                      "description": "Beurre composé aux herbes et épices",
                      "accord": "Fondant parfumé sur viande chaude"
                },
                {
                      "nom": "Simple fleur de sel",
                      "type": "Simple",
                      "description": "Fleur de sel, poivre du moulin",
                      "accord": "Pureté pour ce morceau exceptionnel"
                }
          ],
          "accompagnements": [
                {
                      "type": "Simples",
                      "suggestions": [
                            "Frites maison",
                            "Salade verte",
                            "Pommes grenaille"
                      ]
                },
                {
                      "type": "Bistrot",
                      "suggestions": [
                            "Échalotes confites",
                            "Haricots verts"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges charnus",
                      "suggestions": [
                            "Côte-Rôtie",
                            "Cornas",
                            "Saint-Joseph"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Syrah du Nord pour ce morceau de caractère"
                }
          ],
          "erreursCourantes": [
                "Surcuisson : perd son caractère juteux",
                "Ne pas retirer les membranes : texture gênante",
                "Sauce trop présente : cache la saveur unique"
          ],
          "anecdotes": "L'araignée est le morceau que le boucher garde traditionnellement pour sa propre consommation. Son nom vient du dessin de ses fibres musculaires. Il n'y en a que deux par bœuf."
    },
    dessus_de_palette: {
          "anatomie": "Partie supérieure de la palette dans l'épaule, c'est un muscle travaillé mais savoureux. Plus tendre que le paleron classique. Poids : 1-1,5 kg.",
          "caracteristiques": {
                "tendrete": "6/10 - Correcte en grillade",
                "saveur": "8/10 - Très parfumé",
                "persillage": "4/10 - Modérément persillé"
          },
          "techniquesChef": [
                "Peut être grillé s'il est bien préparé",
                "Excellent mariné puis grillé",
                "Aussi adapté au braisage court (2h)",
                "Découper contre les fibres impératif",
                "Repos important avant découpe"
          ],
          "sauces": [
                {
                      "nom": "Sauce barbecue",
                      "type": "Américaine",
                      "description": "Tomates, vinaigre, sucre brun, épices",
                      "accord": "Pour les grillades estivales"
                },
                {
                      "nom": "Sauce au poivre",
                      "type": "Française",
                      "description": "Poivre vert ou noir, crème, cognac",
                      "accord": "Classique relevé"
                }
          ],
          "accompagnements": [
                {
                      "type": "BBQ",
                      "suggestions": [
                            "Maïs grillé",
                            "Coleslaw",
                            "Pommes de terre au four"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Gratin dauphinois",
                            "Haricots verts"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fruités",
                      "suggestions": [
                            "Côtes du Rhône Villages",
                            "Crozes-Hermitage"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins généreux pour ce morceau"
                }
          ],
          "erreursCourantes": [
                "Cuisson sans marinade : peut être ferme",
                "Tranches dans le sens des fibres : mastication difficile",
                "Cuisson excessive : devient sec"
          ],
          "anecdotes": "Le dessus de palette est apprécié aux États-Unis sous le nom de 'flat iron steak'. Il a été redécouvert par les chercheurs de l'université du Nebraska qui ont identifié ce morceau méconnu comme l'un des plus tendres de l'animal."
    },
    surpris_boule_de_macreuse: {
          "anatomie": "Petit muscle rond caché dans l'épaule, le surpris (ou boule de macreuse) pèse environ 400-500g. Sa tendreté surprenante lui a donné son nom.",
          "caracteristiques": {
                "tendrete": "8/10 - Étonnamment tendre",
                "saveur": "8/10 - Goût prononcé",
                "persillage": "3/10 - Maigre"
          },
          "techniquesChef": [
                "Griller ou poêler rapidement",
                "Cuisson saignante à rosée idéale",
                "Peut être rôti entier comme un filet",
                "Trancher finement pour servir",
                "Marinade non nécessaire vu sa tendreté"
          ],
          "sauces": [
                {
                      "nom": "Sauce au vin rouge",
                      "type": "Française",
                      "description": "Vin rouge, échalotes, fond de veau",
                      "accord": "Classique indémodable"
                },
                {
                      "nom": "Beurre persillé",
                      "type": "Française",
                      "description": "Beurre, persil, ail",
                      "accord": "Simple et délicieux"
                }
          ],
          "accompagnements": [
                {
                      "type": "Raffinés",
                      "suggestions": [
                            "Pommes de terre au four",
                            "Légumes de saison rôtis"
                      ]
                },
                {
                      "type": "Simples",
                      "suggestions": [
                            "Frites",
                            "Salade verte"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges équilibrés",
                      "suggestions": [
                            "Haut-Médoc",
                            "Pessac-Léognan"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Bordeaux pour ce morceau méconnu"
                }
          ],
          "erreursCourantes": [
                "Méconnaissance : souvent vendu comme macreuse ordinaire",
                "Cuisson trop longue : perd sa tendreté",
                "Découpe grossière : gâche la finesse"
          ],
          "anecdotes": "Le surpris tire son nom de la surprise qu'éprouvent ceux qui goûtent ce morceau méconnu. Caché dans l'épaule, il était autrefois fondu dans la macreuse à pot-au-feu. Les bouchers avertis l'isolent maintenant pour les connaisseurs."
    },
    aiguillette_baronne: {
          "anatomie": "Muscle long et fin prélevé dans la cuisse, l'aiguillette baronne doit son nom à sa forme effilée. Environ 400-600g, très maigre.",
          "caracteristiques": {
                "tendrete": "7/10 - Assez tendre",
                "saveur": "7/10 - Bon goût de bœuf",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Idéale pour les rôtis individuels",
                "Peut être grillée en brochettes",
                "Barder recommandé car très maigre",
                "Cuisson rosée pour éviter le dessèchement",
                "Excellente émincée pour les woks"
          ],
          "sauces": [
                {
                      "nom": "Sauce aux morilles",
                      "type": "Française",
                      "description": "Morilles, crème, vin jaune",
                      "accord": "Luxe et élégance"
                },
                {
                      "nom": "Sauce soja gingembre",
                      "type": "Asiatique",
                      "description": "Sauce soja, gingembre, sésame",
                      "accord": "Pour les émincés asiatiques"
                }
          ],
          "accompagnements": [
                {
                      "type": "Français",
                      "suggestions": [
                            "Gratin de pommes de terre",
                            "Haricots verts fins"
                      ]
                },
                {
                      "type": "Asiatique",
                      "suggestions": [
                            "Nouilles sautées",
                            "Légumes croquants au wok"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fins",
                      "suggestions": [
                            "Chinon",
                            "Saumur-Champigny",
                            "Bourgueil"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Cabernet franc léger"
                }
          ],
          "erreursCourantes": [
                "Cuisson sans barde : dessèchement",
                "Température trop basse : viande bouillie",
                "Tranches épaisses : mastication difficile"
          ],
          "anecdotes": "L'aiguillette baronne était traditionnellement réservée aux dames de la noblesse, son nom évoquant le titre de baronne. Sa finesse et sa délicatesse en faisaient un mets féminin selon les codes de l'époque."
    },
    aiguillette_de_rumsteck: {
          "anatomie": "Fine pointe du rumsteck, l'aiguillette est un morceau maigre et tendre. Environ 200-300g, idéal pour une portion individuelle.",
          "caracteristiques": {
                "tendrete": "8/10 - Tendre",
                "saveur": "7/10 - Délicat",
                "persillage": "2/10 - Très maigre"
          },
          "techniquesChef": [
                "Parfaite pour les portions individuelles",
                "Griller ou poêler rapidement",
                "Cuisson rosée impérative",
                "Idéale en brochettes ou émincés",
                "Se marie bien aux marinades"
          ],
          "sauces": [
                {
                      "nom": "Sauce teryaki",
                      "type": "Japonaise",
                      "description": "Sauce soja, mirin, sucre, gingembre",
                      "accord": "Umami et douceur"
                },
                {
                      "nom": "Sauce aux herbes",
                      "type": "Française",
                      "description": "Herbes fraîches, échalotes, vin blanc",
                      "accord": "Fraîcheur printanière"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légers",
                      "suggestions": [
                            "Riz parfumé",
                            "Légumes sautés",
                            "Salade"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pommes de terre sautées",
                            "Champignons"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges légers",
                      "suggestions": [
                            "Fleurie",
                            "Morgon",
                            "Régnié"
                      ],
                      "temperature": "14-15°C",
                      "notes": "Beaujolais crus pour cette viande fine"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : sèche rapidement",
                "Morceaux trop petits : difficile à saisir",
                "Assaisonnement tardif : manque de goût"
          ],
          "anecdotes": "L'aiguillette de rumsteck est particulièrement appréciée des sportifs pour son apport protéique élevé et sa faible teneur en gras. Elle est devenue populaire dans les régimes hyperprotéinés."
    },
    tendron: {
          "anatomie": "Partie cartilagineuse du thorax, le tendron contient côtes et cartilages. Très gélatineux après cuisson longue. Se vend en morceaux de 500g-1kg.",
          "caracteristiques": {
                "tendrete": "3/10 cru - 9/10 braisé",
                "saveur": "9/10 - Très parfumé",
                "persillage": "5/10 - Entrelardé et gélatineux"
          },
          "techniquesChef": [
                "Braiser impérativement (minimum 3 heures)",
                "Les cartilages deviennent fondants",
                "Excellent grillé après braisage (double cuisson)",
                "Le gras fond et parfume la viande",
                "Se défait en filaments tendres"
          ],
          "sauces": [
                {
                      "nom": "Jus de braisage réduit",
                      "type": "Française",
                      "description": "Le jus concentré et monté au beurre",
                      "accord": "L'essence même du plat"
                },
                {
                      "nom": "Sauce barbecue",
                      "type": "Américaine",
                      "description": "Pour le tendron grillé après braisage",
                      "accord": "Version texane"
                }
          ],
          "accompagnements": [
                {
                      "type": "Braisé",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Carottes glacées",
                            "Oignons confits"
                      ]
                },
                {
                      "type": "Grillé",
                      "suggestions": [
                            "Coleslaw",
                            "Frites",
                            "Cornbread"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges puissants",
                      "suggestions": [
                            "Cahors",
                            "Madiran",
                            "Corbières"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Vins tanniques du Sud-Ouest"
                }
          ],
          "erreursCourantes": [
                "Cuisson rapide : cartilages immangeables",
                "Température trop haute : viande sèche",
                "Ne pas griller après braisage : manque une dimension"
          ],
          "anecdotes": "Le tendron est devenu une star du BBQ américain sous le nom de 'short ribs'. La technique de braisage puis grillade (double cuisson) a été popularisée par les pit masters coréens de Los Angeles."
    },
    jumeau_a_bifteck: {
          "anatomie": "Version maigre du jumeau, situé dans l'épaule. Plus tendre que son homonyme à pot-au-feu. Convient aux cuissons rapides. Environ 1-1,5 kg.",
          "caracteristiques": {
                "tendrete": "7/10 - Correct en grillade",
                "saveur": "8/10 - Goût prononcé",
                "persillage": "3/10 - Légèrement persillé"
          },
          "techniquesChef": [
                "Griller ou poêler à feu vif",
                "Cuisson saignante à rosée",
                "Idéal en steaks épais (2-3 cm)",
                "Découpe contre les fibres importante",
                "Se prête bien aux marinades courtes"
          ],
          "sauces": [
                {
                      "nom": "Sauce marchand de vin",
                      "type": "Française",
                      "description": "Vin rouge, échalotes, moelle, fond de veau",
                      "accord": "Grand classique des bistrots"
                },
                {
                      "nom": "Beurre maître d'hôtel",
                      "type": "Française",
                      "description": "Beurre, persil, citron",
                      "accord": "Simple et efficace"
                }
          ],
          "accompagnements": [
                {
                      "type": "Bistrot",
                      "suggestions": [
                            "Frites maison",
                            "Salade frisée",
                            "Échalotes"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pommes dauphine",
                            "Haricots verts"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fruités",
                      "suggestions": [
                            "Côtes du Rhône",
                            "Minervois",
                            "Faugères"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins du sud généreux"
                }
          ],
          "erreursCourantes": [
                "Confusion avec jumeau à pot-au-feu : cuisson inadaptée",
                "Steaks trop fins : cuisson difficile",
                "Cuisson excessive : devient sec"
          ],
          "anecdotes": "Le jumeau à bifteck est l'alternative économique à l'entrecôte. Il offre un excellent rapport qualité/prix pour ceux qui recherchent une viande goûteuse sans le prix des morceaux nobles."
    },
    mouvant: {
          "anatomie": "Muscle de la cuisse proche du gîte, le mouvant est un morceau méconnu. Fibres longues mais assez tendres. Environ 500-700g.",
          "caracteristiques": {
                "tendrete": "6/10 - Correct",
                "saveur": "7/10 - Bon goût de bœuf",
                "persillage": "3/10 - Maigre"
          },
          "techniquesChef": [
                "Braiser de préférence pour plus de tendreté",
                "Peut être grillé si mariné",
                "Émincé pour les sautés",
                "Cuisson moyenne à point maximum",
                "Découpe fine contre les fibres"
          ],
          "sauces": [
                {
                      "nom": "Sauce aux champignons",
                      "type": "Française",
                      "description": "Champignons, crème, persil",
                      "accord": "Onctuosité pour viande maigre"
                },
                {
                      "nom": "Sauce stroganoff",
                      "type": "Russe",
                      "description": "Crème, moutarde, cornichons, paprika",
                      "accord": "Le classique des émincés"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Riz pilaf",
                            "Tagliatelles",
                            "Pommes de terre vapeur"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Champignons poêlés",
                            "Épinards",
                            "Haricots verts"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges moyens",
                      "suggestions": [
                            "Côtes du Roussillon",
                            "Ventoux",
                            "Luberon"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Vins souples et fruités"
                }
          ],
          "erreursCourantes": [
                "Grillade sans préparation : viande ferme",
                "Tranches trop épaisses : difficile à mâcher",
                "Méconnaissance du morceau : souvent mal utilisé"
          ],
          "anecdotes": "Le mouvant tire son nom du mouvement constant de ce muscle lors de la marche du bœuf. C'est un morceau de connaiseur, peu connu du grand public mais apprécié des amateurs de viande économique."
    },
    tranche_grasse: {
          "anatomie": "Partie de la cuisse, la tranche grasse est plus persillée que les autres morceaux de la tranche. Muscle arrondi, environ 2-3 kg.",
          "caracteristiques": {
                "tendrete": "6/10 - Correct",
                "saveur": "8/10 - Goûteux grâce au persillage",
                "persillage": "5/10 - Bien persillée"
          },
          "techniquesChef": [
                "Idéale en rôti ou braisée",
                "Le persillage garde la viande juteuse",
                "Peut être taillée en pavés épais",
                "Cuisson rosée à point",
                "Repos obligatoire avant découpe"
          ],
          "sauces": [
                {
                      "nom": "Sauce bordelaise",
                      "type": "Française",
                      "description": "Vin rouge, échalotes, moelle",
                      "accord": "Accord régional parfait"
                },
                {
                      "nom": "Jus au thym",
                      "type": "Française",
                      "description": "Fond de veau, thym frais",
                      "accord": "Simplicité aromatique"
                }
          ],
          "accompagnements": [
                {
                      "type": "Rôti",
                      "suggestions": [
                            "Pommes de terre rôties",
                            "Légumes racines",
                            "Yorkshire pudding"
                      ]
                },
                {
                      "type": "Braisé",
                      "suggestions": [
                            "Purée",
                            "Carottes",
                            "Champignons"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges charpentés",
                      "suggestions": [
                            "Saint-Émilion",
                            "Pomerol",
                            "Fronsac"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Bordeaux rive droite"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : perd le bénéfice du persillage",
                "Température trop basse : gras non fondu",
                "Découpe trop hâtive : perte de jus"
          ],
          "anecdotes": "La tranche grasse était autrefois moins valorisée car considérée comme trop grasse. Elle est aujourd'hui recherchée par ceux qui apprécient une viande juteuse et savoureuse."
    },
    rond_de_gite: {
          "anatomie": "Partie arrondie du gîte, le rond est plus tendre que le gîte entier. Convient mieux aux cuissons moyennes. Environ 1-1,5 kg.",
          "caracteristiques": {
                "tendrete": "5/10 - Moyen",
                "saveur": "7/10 - Bon goût",
                "persillage": "2/10 - Maigre"
          },
          "techniquesChef": [
                "Braiser pour maximum de tendreté",
                "Peut être rôti bardé",
                "Émincé fin pour les sautés",
                "Éviter la grillade pure",
                "Cuisson humide recommandée"
          ],
          "sauces": [
                {
                      "nom": "Sauce aux carottes",
                      "type": "Française",
                      "description": "Carottes, oignons, fond de veau",
                      "accord": "Douceur des légumes"
                },
                {
                      "nom": "Sauce au paprika",
                      "type": "Hongroise",
                      "description": "Paprika, crème, oignons",
                      "accord": "Version goulash"
                }
          ],
          "accompagnements": [
                {
                      "type": "Braisé",
                      "suggestions": [
                            "Spätzle",
                            "Nouilles",
                            "Pommes vapeur"
                      ]
                },
                {
                      "type": "Émincé",
                      "suggestions": [
                            "Riz",
                            "Légumes sautés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges souples",
                      "suggestions": [
                            "Côtes de Bourg",
                            "Blaye",
                            "Premières Côtes"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Bordeaux accessibles"
                }
          ],
          "erreursCourantes": [
                "Grillade sans préparation : viande dure",
                "Cuisson insuffisante en braisé : reste ferme",
                "Découpe dans le sens des fibres"
          ],
          "anecdotes": "Le rond de gîte est populaire dans la cuisine d'Europe centrale où il entre dans la préparation du goulash. En Hongrie, il est mijoté longuement avec du paprika."
    },
    gite_a_la_noix: {
          "anatomie": "Le gîte à la noix inclut l'os central (la noix). C'est la pièce entière avec os, parfaite pour l'osso buco de bœuf. Tranches de 300-400g avec os.",
          "caracteristiques": {
                "tendrete": "3/10 cru - 9/10 braisé",
                "saveur": "9/10 - Exceptionnel grâce à l'os",
                "persillage": "2/10 - Maigre mais gélatineux"
          },
          "techniquesChef": [
                "Braiser en tranches avec os (osso buco)",
                "L'os enrichit considérablement le jus",
                "Cuisson minimum 3 heures",
                "La moelle se déguste à la cuillère",
                "Servir avec gremolata traditionnelle"
          ],
          "sauces": [
                {
                      "nom": "Jus de braisage",
                      "type": "Italienne",
                      "description": "Tomates, vin blanc, légumes",
                      "accord": "Base de l'osso buco"
                },
                {
                      "nom": "Gremolata",
                      "type": "Italienne",
                      "description": "Persil, ail, zeste de citron",
                      "accord": "Fraîcheur indispensable"
                }
          ],
          "accompagnements": [
                {
                      "type": "Italien",
                      "suggestions": [
                            "Risotto alla milanese (safran)",
                            "Polenta"
                      ]
                },
                {
                      "type": "Classique",
                      "suggestions": [
                            "Purée de pommes de terre",
                            "Légumes braisés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges italiens",
                      "suggestions": [
                            "Amarone",
                            "Barolo",
                            "Barbaresco"
                      ],
                      "temperature": "17-18°C",
                      "notes": "Grands vins pour ce plat noble"
                }
          ],
          "erreursCourantes": [
                "Cuisson insuffisante : viande dure",
                "Jeter la moelle : c'est le trésor !",
                "Oublier la gremolata : manque la fraîcheur"
          ],
          "anecdotes": "Le gîte à la noix est l'équivalent bœuf de l'osso buco de veau milanais. Cette version plus robuste est appréciée dans le nord de l'Italie et gagne en popularité en France."
    },
    rognons: {
          "anatomie": "Les rognons de bœuf sont les reins de l'animal. Organe filtrant au goût prononcé. Un rognon pèse 500-700g. Se vend entier ou en tranches.",
          "caracteristiques": {
                "tendrete": "7/10 - Tendre si bien cuit",
                "saveur": "9/10 - Très prononcé",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Retirer soigneusement le gras et les canaux",
                "Tremper dans du lait 2h pour adoucir",
                "Cuisson rapide à feu vif",
                "Doit rester rosé à l'intérieur",
                "Ne jamais recuire : devient caoutchouteux"
          ],
          "sauces": [
                {
                      "nom": "Sauce moutarde",
                      "type": "Française",
                      "description": "Moutarde, crème, échalotes",
                      "accord": "L'accord classique des bistrots"
                },
                {
                      "nom": "Sauce madère",
                      "type": "Française",
                      "description": "Madère, fond de veau, beurre",
                      "accord": "Élégance et profondeur"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Riz pilaf",
                            "Pommes de terre sautées",
                            "Purée"
                      ]
                },
                {
                      "type": "Légumes",
                      "suggestions": [
                            "Champignons",
                            "Épinards",
                            "Haricots verts"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges corsés",
                      "suggestions": [
                            "Madiran",
                            "Cahors",
                            "Pecharmant"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins du Sud-Ouest tanniques"
                }
          ],
          "erreursCourantes": [
                "Cuisson excessive : texture caoutchouteuse",
                "Ne pas dégorger : goût trop fort",
                "Laisser les canaux : goût urineux"
          ],
          "anecdotes": "Les rognons de bœuf étaient un classique des bistrots parisiens jusque dans les années 1980. Le 'rognon de veau sauce moutarde' reste un pilier de la cuisine bourgeoise française."
    },
    coeur: {
          "anatomie": "Le cœur de bœuf est un muscle strié pesant 2-3 kg. Chair ferme et maigre, goût prononcé. Se vend entier ou en tranches.",
          "caracteristiques": {
                "tendrete": "5/10 - Ferme mais pas dur",
                "saveur": "8/10 - Goût de viande marqué",
                "persillage": "1/10 - Très maigre"
          },
          "techniquesChef": [
                "Retirer les valves, artères et gras",
                "Trancher finement pour grillade",
                "Peut être braisé entier (3-4h)",
                "Excellent en brochettes (anticuchos)",
                "Marinade recommandée"
          ],
          "sauces": [
                {
                      "nom": "Sauce chimichurri",
                      "type": "Argentine",
                      "description": "Persil, ail, origan, vinaigre",
                      "accord": "Fraîcheur sur viande grillée"
                },
                {
                      "nom": "Sauce piquante péruvienne",
                      "type": "Péruvienne",
                      "description": "Piments, vinaigre, cumin",
                      "accord": "Pour les anticuchos"
                }
          ],
          "accompagnements": [
                {
                      "type": "Latino",
                      "suggestions": [
                            "Pommes de terre andines",
                            "Maïs grillé",
                            "Salsa criolla"
                      ]
                },
                {
                      "type": "Français",
                      "suggestions": [
                            "Riz",
                            "Légumes grillés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges fruités",
                      "suggestions": [
                            "Malbec argentin",
                            "Carmenère chilien"
                      ],
                      "temperature": "16-17°C",
                      "notes": "Vins d'Amérique du Sud"
                }
          ],
          "erreursCourantes": [
                "Tranches trop épaisses : mastication difficile",
                "Cuisson excessive : devient très ferme",
                "Ne pas retirer les parties dures"
          ],
          "anecdotes": "Le cœur de bœuf est très apprécié en Amérique du Sud, notamment au Pérou où les 'anticuchos de corazón' (brochettes de cœur) sont un plat de rue emblématique depuis l'époque inca."
    },
    ris_de_boeuf: {
          "anatomie": "Le ris est le thymus de l'animal, glande présente chez les jeunes bovins. Texture crémeuse et délicate. Environ 200-400g par animal.",
          "caracteristiques": {
                "tendrete": "9/10 - Très tendre",
                "saveur": "8/10 - Délicat et fin",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Dégorger plusieurs heures dans l'eau froide",
                "Blanchir puis peler la membrane",
                "Presser entre deux plaques pour égoutter",
                "Poêler au beurre mousseux",
                "Doit être doré à l'extérieur, crémeux à l'intérieur"
          ],
          "sauces": [
                {
                      "nom": "Sauce aux morilles",
                      "type": "Française",
                      "description": "Morilles, crème, vin jaune",
                      "accord": "Le mariage parfait"
                },
                {
                      "nom": "Jus de veau au porto",
                      "type": "Française",
                      "description": "Fond de veau, porto, beurre",
                      "accord": "Élégance et douceur"
                }
          ],
          "accompagnements": [
                {
                      "type": "Raffinés",
                      "suggestions": [
                            "Risotto aux asperges",
                            "Petits pois à la française",
                            "Épinards"
                      ]
                },
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pommes de terre fondantes",
                            "Légumes printaniers"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Blancs de garde",
                      "suggestions": [
                            "Meursault",
                            "Puligny-Montrachet",
                            "Pessac-Léognan blanc"
                      ],
                      "temperature": "12-14°C",
                      "notes": "Grands blancs pour ce mets délicat"
                }
          ],
          "erreursCourantes": [
                "Ne pas dégorger : goût de sang",
                "Ne pas peler : texture désagréable",
                "Cuisson excessive : perd son crémeux"
          ],
          "anecdotes": "Le ris de bœuf est moins connu que le ris de veau mais tout aussi délicieux. Il était très prisé à la Renaissance où il était considéré comme un mets aphrodisiaque réservé à la noblesse."
    },
    cervelle: {
          "anatomie": "La cervelle de bœuf pèse environ 400-500g. Texture très crémeuse et délicate. Doit être extrêmement fraîche.",
          "caracteristiques": {
                "tendrete": "10/10 - Fondante",
                "saveur": "7/10 - Très délicat",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Dégorger plusieurs heures dans l'eau vinaigrée",
                "Retirer délicatement les membranes",
                "Pocher doucement puis poêler",
                "Frire en beignets (cervelle frite)",
                "Manipuler avec grande délicatesse"
          ],
          "sauces": [
                {
                      "nom": "Beurre noir",
                      "type": "Française",
                      "description": "Beurre noisette, câpres, vinaigre, persil",
                      "accord": "Le classique absolu"
                },
                {
                      "nom": "Sauce ravigote",
                      "type": "Française",
                      "description": "Câpres, cornichons, fines herbes",
                      "accord": "Acidité et fraîcheur"
                }
          ],
          "accompagnements": [
                {
                      "type": "Classiques",
                      "suggestions": [
                            "Pommes de terre vapeur",
                            "Salade verte",
                            "Pain grillé"
                      ]
                },
                {
                      "type": "Friture",
                      "suggestions": [
                            "Quartier de citron",
                            "Persil frit",
                            "Frites"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Blancs secs",
                      "suggestions": [
                            "Muscadet",
                            "Entre-deux-Mers",
                            "Côtes de Gascogne"
                      ],
                      "temperature": "10-12°C",
                      "notes": "Blancs vifs et légers"
                }
          ],
          "erreursCourantes": [
                "Cervelle pas fraîche : goût désagréable",
                "Manipulation brutale : se désagrège",
                "Cuisson excessive : perd sa texture"
          ],
          "anecdotes": "La cervelle au beurre noir est un classique de la cuisine lyonnaise. Ce plat était autrefois très populaire dans les bouchons, ces petits restaurants traditionnels de Lyon."
    },
    tripes_gras_double_bonnet: {
          "anatomie": "Les tripes regroupent plusieurs parties de l'estomac : la panse, le bonnet (ou réseau), le feuillet et la caillette. Texture unique, goût prononcé.",
          "caracteristiques": {
                "tendrete": "6/10 - Particulière",
                "saveur": "8/10 - Très typé",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Acheter précuites et blanchies",
                "Braiser longuement (4-6 heures minimum)",
                "Couper en lanières régulières",
                "Les saveurs se développent à la cuisson",
                "Encore meilleur réchauffé le lendemain"
          ],
          "sauces": [
                {
                      "nom": "Sauce tomate au cidre",
                      "type": "Normande",
                      "description": "Tomates, cidre, calvados, carottes",
                      "accord": "Tripes à la mode de Caen"
                },
                {
                      "nom": "Sauce tomate épicée",
                      "type": "Espagnole",
                      "description": "Tomates, chorizo, piment",
                      "accord": "Callos à la madrileña"
                }
          ],
          "accompagnements": [
                {
                      "type": "Normand",
                      "suggestions": [
                            "Pommes de terre vapeur",
                            "Pain de campagne",
                            "Cidre"
                      ]
                },
                {
                      "type": "Espagnol",
                      "suggestions": [
                            "Pois chiches",
                            "Chorizo",
                            "Pain grillé"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Cidre ou rouges rustiques",
                      "suggestions": [
                            "Cidre brut",
                            "Côtes du Rhône",
                            "Irouléguy"
                      ],
                      "temperature": "12-16°C",
                      "notes": "Boissons de caractère"
                }
          ],
          "erreursCourantes": [
                "Cuisson insuffisante : texture désagréable",
                "Tripes mal nettoyées : goût prononcé",
                "Manque d'assaisonnement : plat fade"
          ],
          "anecdotes": "Les tripes à la mode de Caen sont inscrites au patrimoine gastronomique normand. La recette traditionnelle demande 10 à 12 heures de cuisson dans un récipient scellé à la pâte."
    },
    feuillet: {
          "anatomie": "Le feuillet est le troisième compartiment de l'estomac du bœuf. Il présente des replis en forme de feuillets. Texture ferme, goût prononcé.",
          "caracteristiques": {
                "tendrete": "5/10 - Ferme",
                "saveur": "7/10 - Typé",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Bien nettoyer et blanchir",
                "Braiser longuement avec aromates",
                "Entre dans la composition des tripes",
                "Peut être frit après cuisson",
                "Nécessite une longue préparation"
          ],
          "sauces": [
                {
                      "nom": "Sauce à la tomate",
                      "type": "Française",
                      "description": "Tomates, oignons, ail, thym",
                      "accord": "Base classique des tripes"
                },
                {
                      "nom": "Sauce piquante",
                      "type": "Méditerranéenne",
                      "description": "Piments, ail, vinaigre",
                      "accord": "Version relevée"
                }
          ],
          "accompagnements": [
                {
                      "type": "Traditionnels",
                      "suggestions": [
                            "Pommes de terre",
                            "Pain de campagne"
                      ]
                },
                {
                      "type": "Méditerranéens",
                      "suggestions": [
                            "Pois chiches",
                            "Légumes mijotés"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Rouges rustiques",
                      "suggestions": [
                            "Corbières",
                            "Fitou",
                            "Minervois"
                      ],
                      "temperature": "15-16°C",
                      "notes": "Vins du Sud robustes"
                }
          ],
          "erreursCourantes": [
                "Nettoyage insuffisant : goût trop fort",
                "Cuisson courte : texture coriace",
                "Utilisation seul : mieux en mélange"
          ],
          "anecdotes": "Le feuillet tire son nom de sa structure en lamelles parallèles qui ressemblent aux pages d'un livre. C'est l'un des quatre estomacs des ruminants, avec la panse, le bonnet et la caillette."
    },
    caillette: {
          "anatomie": "La caillette est le quatrième et vrai estomac du bœuf, celui qui produit les sucs gastriques. Plus tendre que les autres estomacs. Environ 1-2 kg.",
          "caracteristiques": {
                "tendrete": "6/10 - Plus tendre que les autres tripes",
                "saveur": "7/10 - Moins fort que les autres tripes",
                "persillage": "N/A - Abat"
          },
          "techniquesChef": [
                "Nettoyer soigneusement",
                "Peut être préparée seule (plus délicate)",
                "Braiser ou mijoter longuement",
                "Base de certains plats traditionnels",
                "S'utilise aussi pour faire cailler le lait (présure)"
          ],
          "sauces": [
                {
                      "nom": "Sauce au vin blanc",
                      "type": "Française",
                      "description": "Vin blanc, échalotes, crème",
                      "accord": "Légèreté pour cet abat délicat"
                },
                {
                      "nom": "Sauce provençale",
                      "type": "Provençale",
                      "description": "Tomates, olives, herbes de Provence",
                      "accord": "Saveurs du Sud"
                }
          ],
          "accompagnements": [
                {
                      "type": "Légers",
                      "suggestions": [
                            "Riz",
                            "Légumes verts",
                            "Salade"
                      ]
                },
                {
                      "type": "Traditionnels",
                      "suggestions": [
                            "Pommes de terre",
                            "Carottes glacées"
                      ]
                }
          ],
          "vins": [
                {
                      "type": "Blancs ou rosés",
                      "suggestions": [
                            "Côtes de Provence rosé",
                            "Cassis blanc"
                      ],
                      "temperature": "10-12°C",
                      "notes": "Vins frais pour abat délicat"
                }
          ],
          "erreursCourantes": [
                "Confondre avec autres tripes : préparation différente",
                "Cuisson trop longue : perd sa texture",
                "Assaisonnement trop fort : masque la finesse"
          ],
          "anecdotes": "La caillette contient de la présure, enzyme naturelle utilisée depuis l'Antiquité pour faire cailler le lait et fabriquer le fromage. Elle a donné son nom à un célèbre plat ardéchois : la caillette (farce de porc et blettes)."
    },
    }
  },

  porc: {

    histoire: "Le porc fut l'un des premiers animaux domestiqués, il y a 9000 ans en Chine et au Proche-Orient. En France, l'élevage porcin s'est structuré autour de races rustiques (Porc Basque, Porc Gascon) puis de races à croissance rapide. Le porc 'Label Rouge' et les AOP (Porc Noir de Bigorre) valorisent l'élevage traditionnel.",

    nutrition: "Viande riche en protéines (21g/100g) et source importante de vitamines B1 (thiamine) et B6. Contrairement aux idées reçues, le porc moderne est relativement maigre (le filet mignon contient seulement 3% de lipides). Excellente source de sélénium et phosphore.",

    selection: {
      couleur: "Rose pâle à rose soutenu. Éviter la viande grisâtre (viande PSE - pâle, molle, exsudative) ou trop rouge (stress ante-mortem).",
      texture: "Grain fin, légèrement humide mais pas mouillé. Ferme au toucher. Le persillage léger est un gage de qualité.",
      gras: "Blanc et ferme, jamais jaune ou huileux. L'épaisseur de lard dorsal doit être modérée (2-3 cm).",
      signes: "Label Rouge, AOP Porc Noir de Bigorre, Porc Fermier d'Auvergne, certification Bleu-Blanc-Cœur"
    },

    conservation: "Viande fraîche : 2-3 jours à 2-4°C. Sous-vide : 5-6 jours. Congélation : -18°C maximum 6 mois. Le porc étant sensible aux bactéries, une hygiène stricte est essentielle.",

    preparation: {
      temperaturage: "Sortir 20-30 minutes avant cuisson. Le porc supporte moins bien la cuisson froide que le bœuf.",
      assaisonnement: "Saler généreusement - le porc accepte bien le sel. Herbes aromatiques classiques : thym, romarin, sauge. Épices douces : paprika, cumin.",
      securite: "IMPORTANT : le porc doit atteindre 63°C minimum à cœur (norme UE) pour éliminer tout risque parasitaire (trichinose). La cuisson rosée (moderne) est sûre à partir de 63°C."
    },
    cuts: {
filet_mignon: {
        anatomie: "Morceau de porc situé dans la partie filet mignon. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      cote_de_porc: {
        anatomie: "Morceau de porc situé dans la partie côte de porc. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      echine: {
      filet_mignon: {
        anatomie: "Morceau de porc situé dans la partie filet mignon. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },


        anatomie: "Morceau de porc situé dans la partie échine. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      carre_de_porc: {
        anatomie: "Morceau de porc situé dans la partie carré de porc. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      roti_longe: {
        anatomie: "Morceau de porc situé dans la partie rôti (longe). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      escalopes: {
        anatomie: "Morceau de porc situé dans la partie escalopes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      palette: {
        anatomie: "Morceau de porc situé dans la partie palette. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      rouelle_de_jambon: {
        anatomie: "Morceau de porc situé dans la partie rouelle de jambon. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      epaule: {
        anatomie: "Morceau de porc situé dans la partie épaule. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      poitrine_lard_frais: {
        anatomie: "Morceau de porc situé dans la partie poitrine (lard frais). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      travers_spare_ribs: {
        anatomie: "Morceau de porc situé dans la partie travers (spare ribs). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      jambonneau_jarret: {
        anatomie: "Morceau de porc situé dans la partie jambonneau (jarret). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      joue_de_porc: {
        anatomie: "Morceau de porc situé dans la partie joue de porc. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      pied_de_porc: {
        anatomie: "Morceau de porc situé dans la partie pied de porc. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      couennes: {
        anatomie: "Morceau de porc situé dans la partie couennes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      foie: {
        anatomie: "Morceau de porc situé dans la partie foie. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      rognons: {
        anatomie: "Morceau de porc situé dans la partie rognons. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      pointe_de_filet: {
        anatomie: "Morceau de porc situé dans la partie pointe de filet. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      quasi: {
        anatomie: "Morceau de porc situé dans la partie quasi. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      noix_de_jambon: {
        anatomie: "Morceau de porc situé dans la partie noix de jambon. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      plat_de_cotes: {
        anatomie: "Morceau de porc situé dans la partie plat de côtes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      collier: {
        anatomie: "Morceau de porc situé dans la partie collier. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      gorge: {
        anatomie: "Morceau de porc situé dans la partie gorge. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      queue_de_porc: {
        anatomie: "Morceau de porc situé dans la partie queue de porc. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      oreilles: {
        anatomie: "Morceau de porc situé dans la partie oreilles. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      groin_museau: {
        anatomie: "Morceau de porc situé dans la partie groin (museau). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      tete_fromage_de_tete: {
        anatomie: "Morceau de porc situé dans la partie tête (fromage de tête). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      bardiere_gras_du_dos: {
        anatomie: "Morceau de porc situé dans la partie bardière (gras du dos). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      panne_gras_des_rognons: {
        anatomie: "Morceau de porc situé dans la partie panne (gras des rognons). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      secreto_piece_iberique: {
        anatomie: "Morceau de porc situé dans la partie secreto (pièce ibérique). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      pluma_piece_iberique: {
        anatomie: "Morceau de porc situé dans la partie pluma (pièce ibérique). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      presa_piece_iberique: {
        anatomie: "Morceau de porc situé dans la partie presa (pièce ibérique). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le filet mignon de porc est l'un des morceaux les plus tendres. Les pièces ibériques (secreto, pluma, presa) issues du cochon noir espagnol, sont considérées comme l'élite du porc, au persillage exceptionnel et à la saveur incomparable."
      },

      coeur: {
        anatomie: "Morceau de porc situé dans la partie cœur. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      langue: {
        anatomie: "Morceau de porc situé dans la partie langue. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      cervelle: {
        anatomie: "Morceau de porc situé dans la partie cervelle. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de porc sont largement utilisés en charcuterie. Le foie sert à la confection des pâtés et terrines. La tête, les pieds et les oreilles entrent dans la composition du fromage de tête, spécialité traditionnelle française."
      },

      rate: {
        anatomie: "Morceau de porc situé dans la partie rate. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      intestins_andouillettes: {
        anatomie: "Morceau de porc situé dans la partie intestins (andouillettes). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },

      crepine: {
        anatomie: "Morceau de porc situé dans la partie crépine. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le porc est la viande la plus consommée au monde. En France, la charcuterie est un art : près de 450 produits différents. Le cochon ibérique, élevé en Espagne, produit les pièces les plus nobles comme le secreto et la pluma, véritables joyaux gastronomiques."
      },    
      cotelettes_de_porc: {
            "anatomie": "Les côtelettes sont prélevées dans le carré (partie dorsale), comprenant une portion de noix et l'os de la côte. Coupe transversale avec os, épaisseur variable de 1.5 à 3 cm.",
            "caracteristiques": {
                  "tendrete": "7/10 - Tendre avec un peu de gras",
                  "saveur": "8/10 - Goûteuse et fondante",
                  "persillage": "5/10 - Gras intermusculaire modéré"
            },
            "techniquesChef": [
                  "Épaisseur idéale de 2-2.5 cm pour une cuisson optimale",
                  "Saisir à feu vif 3-4 min par face pour caraméliser",
                  "Finir au four si épaisse (180°C, 8-10 min)",
                  "Ne pas piquer pour conserver les jus",
                  "Température à cœur: 63°C pour une viande juteuse"
            ],
            "sauces": [
                  {
                        "nom": "Sauce charcutière",
                        "type": "Française",
                        "description": "Cornichons, moutarde, vin blanc, échalotes",
                        "accord": "Classique du porc, acidité et piquant"
                  },
                  {
                        "nom": "Sauce normande",
                        "type": "Française",
                        "description": "Crème, cidre, pommes, calvados",
                        "accord": "Douceur et fruité qui subliment la côtelette"
                  },
                  {
                        "nom": "Sauce miel-moutarde",
                        "type": "Moderne",
                        "description": "Miel, moutarde à l'ancienne, thym",
                        "accord": "Sucré-salé parfait avec le porc"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Légumes",
                        "suggestions": [
                              "Pommes sautées au beurre",
                              "Chou braisé",
                              "Haricots verts",
                              "Purée de céleri"
                        ]
                  },
                  {
                        "type": "Féculents",
                        "suggestions": [
                              "Pommes de terre rissolées",
                              "Polenta crémeuse",
                              "Écrasée de pommes de terre"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Blancs secs",
                        "suggestions": [
                              "Côtes du Rhône blanc",
                              "Mâcon-Villages",
                              "Pinot Gris d'Alsace"
                        ],
                        "temperature": "10-12°C",
                        "notes": "Blancs ronds pour accompagner le gras"
                  },
                  {
                        "type": "Rouges légers",
                        "suggestions": [
                              "Beaujolais-Villages",
                              "Sancerre rouge",
                              "Bourgueil"
                        ],
                        "temperature": "14-16°C",
                        "notes": "Fruité sans trop de tannins"
                  }
            ],
            "erreursCourantes": [
                  "Cuisson excessive: viande sèche et dure",
                  "Température trop basse: pas de caramélisation",
                  "Saler trop tôt: dessèche la viande"
            ],
            "anecdotes": "La côtelette de porc est l'un des plats les plus consommés en France. Dans le Nord, elle est traditionnellement servie avec des frites et de la salade. En Normandie, la version 'vallée d'Auge' avec pommes et crème est emblématique."
      },
      travers_de_porc: {
            "anatomie": "Les travers (ribs) proviennent de la cage thoracique, incluant les côtes et les muscles intercostaux. Viande striée entre les os, riche en collagène et en gras.",
            "caracteristiques": {
                  "tendrete": "6/10 (avant cuisson) → 9/10 (après cuisson lente)",
                  "saveur": "9/10 - Très savoureux",
                  "persillage": "7/10 - Gras intercostal important"
            },
            "techniquesChef": [
                  "Cuisson lente obligatoire: 3-4h à basse température",
                  "Retirer la membrane au dos des travers avant cuisson",
                  "Méthode 3-2-1 pour BBQ: 3h fumée, 2h papillote, 1h sauce",
                  "Température idéale: 110-130°C",
                  "La viande doit se détacher de l'os sans tomber"
            ],
            "sauces": [
                  {
                        "nom": "Sauce BBQ maison",
                        "type": "Américaine",
                        "description": "Ketchup, vinaigre, cassonade, épices fumées",
                        "accord": "Le classique indétrônable des ribs"
                  },
                  {
                        "nom": "Marinade asiatique",
                        "type": "Asiatique",
                        "description": "Sauce soja, miel, gingembre, ail, 5 épices",
                        "accord": "Laqué sucré-salé irrésistible"
                  },
                  {
                        "nom": "Sauce moutarde-miel",
                        "type": "Française",
                        "description": "Moutarde de Dijon, miel, thym, ail",
                        "accord": "Version française gourmande"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Américain",
                        "suggestions": [
                              "Coleslaw",
                              "Maïs en épi",
                              "Haricots à la sauce tomate",
                              "Cornbread"
                        ]
                  },
                  {
                        "type": "Asiatique",
                        "suggestions": [
                              "Riz gluant",
                              "Légumes sautés",
                              "Salade de chou asiatique"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Rouges fruités",
                        "suggestions": [
                              "Zinfandel",
                              "Malbec argentin",
                              "Côtes du Rhône"
                        ],
                        "temperature": "16-18°C",
                        "notes": "Vins gourmands avec du fruit"
                  },
                  {
                        "type": "Bières",
                        "suggestions": [
                              "IPA",
                              "Amber Ale",
                              "Porter"
                        ],
                        "temperature": "6-8°C",
                        "notes": "Alternative populaire aux vins"
                  }
            ],
            "erreursCourantes": [
                  "Cuisson trop rapide: viande dure et caoutchouteuse",
                  "Ne pas retirer la membrane: texture désagréable",
                  "Sauce ajoutée trop tôt: brûle et devient amère"
            ],
            "anecdotes": "Les ribs sont devenus emblématiques du barbecue américain, notamment au Texas et dans le Sud. En Chine, les travers de porc laqués (char siu) sont une spécialité cantonaise millénaire. En France, ils connaissent un regain de popularité depuis les années 2010."
      },
      coeur_porc: {
            "anatomie": "Le cœur de porc est un muscle creux très dense, pesant 300-400g. Composé principalement de fibres musculaires striées avec peu de gras, texture ferme et compacte.",
            "caracteristiques": {
                  "tendrete": "5/10 - Ferme mais pas dur",
                  "saveur": "8/10 - Goût prononcé, légèrement métallique",
                  "persillage": "1/10 - Très maigre"
            },
            "techniquesChef": [
                  "Retirer soigneusement les vaisseaux et le gras dur",
                  "Faire tremper 2h dans l'eau froide salée pour dégorger",
                  "Deux méthodes: poêlé rapide (rosé) ou braisé longuement",
                  "Trancher finement en émincé pour poêlée",
                  "Ne pas dépasser à point pour éviter le dessèchement"
            ],
            "sauces": [
                  {
                        "nom": "Sauce madère",
                        "type": "Classique",
                        "description": "Madère, fond brun, champignons",
                        "accord": "Élégance qui adoucit le goût prononcé"
                  },
                  {
                        "nom": "Persillade",
                        "type": "Simple",
                        "description": "Persil, ail, huile d'olive, citron",
                        "accord": "Fraîcheur qui équilibre le fer"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Légumes",
                        "suggestions": [
                              "Champignons poêlés",
                              "Épinards au beurre",
                              "Oignons caramélisés"
                        ]
                  },
                  {
                        "type": "Féculents",
                        "suggestions": [
                              "Purée de pommes de terre",
                              "Polenta",
                              "Riz pilaf"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Rouges corsés",
                        "suggestions": [
                              "Madiran",
                              "Cahors",
                              "Côtes du Roussillon"
                        ],
                        "temperature": "16-18°C",
                        "notes": "Tannins pour accompagner le fer"
                  }
            ],
            "erreursCourantes": [
                  "Ne pas dégorger: goût trop fort",
                  "Cuisson excessive: devient caoutchouteux",
                  "Tranches trop épaisses: cuisson inégale"
            ],
            "anecdotes": "Le cœur était très apprécié dans la cuisine bourgeoise française du XIXe siècle. Au Pérou, les anticuchos (brochettes de cœur) sont un plat national. En France, il est souvent utilisé en farce pour terrines."
      },
      }
  },

  agneau: {

    histoire: "L'agneau accompagne l'humanité depuis 11 000 ans. En France, les races ovines se sont spécialisées selon les terroirs : Pré-salé de la Baie du Mont-Saint-Michel (AOP), agneau de Sisteron (Label Rouge), agneau du Périgord. L'agneau de lait (non sevré) est considéré comme le summum.",

    nutrition: "Viande riche en protéines (20g/100g), fer, zinc, vitamine B12 et acides gras oméga-3 (si élevage à l'herbe). Plus grasse que le bœuf mais avec un profil lipidique favorable. Source importante de carnitine et créatine.",

    selection: {
      age: "Agneau de lait (< 2 mois) : très tendre, goût lacté. Agneau (2-12 mois) : standard. Mouton (> 12 mois) : goût plus prononcé.",
      couleur: "Rose pâle pour l'agneau de lait, rose-rouge pour l'agneau standard. Le gras doit être blanc crème.",
      texture: "Grain fin, chair ferme. L'agneau de qualité est légèrement persillé.",
      signes: "AOP Prés-salés du Mont-Saint-Michel, Label Rouge, IGP Agneau de Sisteron"
    },

    conservation: "Viande fraîche : 2-3 jours à 2-4°C. L'agneau développe rapidement une odeur forte - consommer rapidement. Sous-vide : 4-5 jours. Congélation : -18°C maximum 8 mois.",

    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson. L'agneau supporte bien une température ambiante.",
      assaisonnement: "Herbes méditerranéennes : thym, romarin, origan, menthe. Ail et échalotes. Le cumin et la coriandre sont aussi excellents.",
      parage: "Retirer l'excès de gras externe mais conserver une fine couche protectrice. Le gras d'agneau fond peu et peut être amer."
    },
    cuts: {
gigot_entier_ou_raccourci: {
        anatomie: "Morceau de agneau situé dans la partie gigot (entier ou raccourci). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      epaule: {
        anatomie: "Morceau de agneau situé dans la partie épaule. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      carre_d: {
      gigot_entier_ou_raccourci: {
        anatomie: "Morceau de agneau situé dans la partie gigot (entier ou raccourci). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },


        anatomie: "Morceau de agneau situé dans la partie carré d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      cotes_d: {
        anatomie: "Morceau de agneau situé dans la partie côtes d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le carré d'agneau et le gigot sont des pièces nobles traditionnellement servies lors des grandes occasions. La côtelette d'agneau, symbole de raffinement, était un incontournable des banquets aristocratiques."
      },

      cotelettes: {
        anatomie: "Morceau de agneau situé dans la partie côtelettes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le carré d'agneau et le gigot sont des pièces nobles traditionnellement servies lors des grandes occasions. La côtelette d'agneau, symbole de raffinement, était un incontournable des banquets aristocratiques."
      },

      souris_d: {
        anatomie: "Morceau de agneau situé dans la partie souris d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      collier: {
        anatomie: "Morceau de agneau situé dans la partie collier. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      saute_d: {
        anatomie: "Morceau de agneau situé dans la partie sauté d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      poitrine: {
        anatomie: "Morceau de agneau situé dans la partie poitrine. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      foie: {
        anatomie: "Morceau de agneau situé dans la partie foie. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      rognons: {
        anatomie: "Morceau de agneau situé dans la partie rognons. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      filet: {
        anatomie: "Morceau de agneau situé dans la partie filet. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le carré d'agneau et le gigot sont des pièces nobles traditionnellement servies lors des grandes occasions. La côtelette d'agneau, symbole de raffinement, était un incontournable des banquets aristocratiques."
      },

      selle_d: {
        anatomie: "Morceau de agneau situé dans la partie selle d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      "baron_selle_+_gigots": {
        anatomie: "Morceau de agneau situé dans la partie baron (selle + gigots). Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      haut_de_cotes: {
        anatomie: "Morceau de agneau situé dans la partie haut de côtes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "9/10",
          saveur: "7/10",
          persillage: "2/10"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le carré d'agneau et le gigot sont des pièces nobles traditionnellement servies lors des grandes occasions. La côtelette d'agneau, symbole de raffinement, était un incontournable des banquets aristocratiques."
      },

      coeur: {
        anatomie: "Morceau de agneau situé dans la partie cœur. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      langue: {
        anatomie: "Morceau de agneau situé dans la partie langue. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      cervelle: {
        anatomie: "Morceau de agneau situé dans la partie cervelle. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      pieds: {
        anatomie: "Morceau de agneau situé dans la partie pieds. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },

      ris_d: {
        anatomie: "Morceau de agneau situé dans la partie ris d. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "8/10",
          saveur: "7/10",
          persillage: "N/A"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats d'agneau sont appréciés dans de nombreuses cuisines du monde. Le foie d'agneau est particulièrement tendre et doux. Dans la cuisine marocaine, les rognons d'agneau sont préparés en brochettes épicées."
      },

      tripes: {
        anatomie: "Morceau de agneau situé dans la partie tripes. Chair de qualité nécessitant une préparation appropriée.",
        caracteristiques: {
          tendrete: "6/10",
          saveur: "8/10",
          persillage: "4/10"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "L'agneau tient une place centrale dans la gastronomie méditerranéenne et moyen-orientale. En France, l'agneau de Pauillac (AOP) et l'agneau de pré-salé de la baie du Mont-Saint-Michel sont particulièrement prisés. La tradition du gigot pascal remonte aux origines religieuses."
      },    
      gigot_d_agneau: {
            "anatomie": "Le gigot est la cuisse arrière de l'agneau, comprenant plusieurs muscles autour du fémur. Poids typique: 1.5-3 kg. Peut être raccourci (sans jarret) ou entier.",
            "caracteristiques": {
                  "tendrete": "7/10 - Tendre avec variations selon la zone",
                  "saveur": "9/10 - Très parfumé, typiquement ovin",
                  "persillage": "4/10 - Gras de couverture plutôt qu'intramusculaire"
            },
            "techniquesChef": [
                  "Sortir 2h avant cuisson pour atteindre température ambiante",
                  "Piquer d'ail et de romarin dans la chair",
                  "Cuisson idéale: 12-15 min/500g à 200°C puis 180°C",
                  "Laisser reposer 15-20 minutes sous aluminium",
                  "Température à cœur: 54°C (rosé) à 62°C (à point)"
            ],
            "sauces": [
                  {
                        "nom": "Jus d'agneau aux herbes",
                        "type": "Classique",
                        "description": "Fond d'agneau, thym, romarin, ail",
                        "accord": "Accompagnement naturel du gigot"
                  },
                  {
                        "nom": "Sauce à la menthe",
                        "type": "Britannique",
                        "description": "Menthe fraîche, vinaigre, sucre",
                        "accord": "Tradition anglaise, fraîcheur mentholée"
                  },
                  {
                        "nom": "Sauce aux anchois",
                        "type": "Provençale",
                        "description": "Anchois, ail, huile d'olive",
                        "accord": "Méditerranéen intense"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Classiques",
                        "suggestions": [
                              "Flageolets",
                              "Haricots blancs à la tomate",
                              "Gratin dauphinois"
                        ]
                  },
                  {
                        "type": "Légumes",
                        "suggestions": [
                              "Ratatouille",
                              "Tomates provençales",
                              "Courgettes grillées",
                              "Pommes boulangère"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Rouges du Sud",
                        "suggestions": [
                              "Châteauneuf-du-Pape",
                              "Bandol",
                              "Gigondas"
                        ],
                        "temperature": "16-18°C",
                        "notes": "Vins puissants et épicés"
                  },
                  {
                        "type": "Bordeaux",
                        "suggestions": [
                              "Pauillac",
                              "Saint-Julien",
                              "Médoc"
                        ],
                        "temperature": "17-18°C",
                        "notes": "Tannins fondus, élégance"
                  }
            ],
            "erreursCourantes": [
                  "Cuisson trop forte: extérieur brûlé, intérieur cru",
                  "Pas de repos: perte de jus à la découpe",
                  "Gigot froid au départ: cuisson inégale"
            ],
            "anecdotes": "Le gigot d'agneau pascal est une tradition française depuis le Moyen Âge. L'agneau de Pauillac, élevé dans les vignes bordelaises, est l'un des plus réputés. Le 'gigot de 7 heures' est un classique de la cuisine française où le gigot braise très lentement."
      },
      baron_d_agneau: {
            "anatomie": "Le baron comprend la selle (longe des deux côtés) plus les deux gigots, formant la partie arrière complète de l'agneau. Pièce majestueuse de 4-6 kg.",
            "caracteristiques": {
                  "tendrete": "8/10 - Combinaison de morceaux tendres",
                  "saveur": "9/10 - Très savoureux et complexe",
                  "persillage": "4/10 - Variable selon les parties"
            },
            "techniquesChef": [
                  "Réservé aux grandes occasions (8-12 convives)",
                  "Demander au boucher de préparer et ficeler",
                  "Four très chaud au début (240°C, 15 min) puis modéré (180°C)",
                  "Compter 15-18 min/kg pour une cuisson rosée",
                  "Repos obligatoire de 20-30 minutes"
            ],
            "sauces": [
                  {
                        "nom": "Jus corsé",
                        "type": "Classique",
                        "description": "Réduction de fond d'agneau, échalotes, herbes de Provence",
                        "accord": "Met en valeur la noblesse de la pièce"
                  },
                  {
                        "nom": "Sauce au Porto",
                        "type": "Festive",
                        "description": "Porto, fond brun, baies roses",
                        "accord": "Élégance pour les grandes occasions"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Festifs",
                        "suggestions": [
                              "Tian de légumes",
                              "Pommes fondantes",
                              "Flan de courgettes"
                        ]
                  },
                  {
                        "type": "Traditionnels",
                        "suggestions": [
                              "Flageolets",
                              "Gratin de légumes",
                              "Artichauts barigoule"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Grands crus",
                        "suggestions": [
                              "Pomerol",
                              "Hermitage",
                              "Châteauneuf-du-Pape"
                        ],
                        "temperature": "17-18°C",
                        "notes": "Vins d'exception pour pièce d'exception"
                  }
            ],
            "erreursCourantes": [
                  "Sous-estimer le temps de repos",
                  "Four pas assez chaud au démarrage",
                  "Ne pas ficeler: cuisson inégale"
            ],
            "anecdotes": "Le baron d'agneau tire son nom de la noblesse de la pièce. Traditionnellement servi pour les grandes réceptions, c'est la pièce maîtresse des tables de Pâques dans les familles aisées. Les chefs étoilés le présentent souvent entier avant découpe devant les convives."
      },
      coeur_agneau: {
            "anatomie": "Petit cœur de 80-120g, très tendre comparé aux autres cœurs. Muscle compact avec peu de vaisseaux, texture fine et délicate.",
            "caracteristiques": {
                  "tendrete": "7/10 - Plus tendre que les autres cœurs",
                  "saveur": "7/10 - Délicat, légèrement ovin",
                  "persillage": "1/10 - Très maigre"
            },
            "techniquesChef": [
                  "Cuisson rapide à la poêle: 2-3 min par face",
                  "Peut se griller entier en brochette",
                  "Servir rosé à point, jamais trop cuit",
                  "Nettoyer en retirant vaisseaux et gras",
                  "Mariner 30 min dans huile/herbes"
            ],
            "sauces": [
                  {
                        "nom": "Jus au thym",
                        "type": "Simple",
                        "description": "Jus de cuisson, thym frais, ail",
                        "accord": "Légèreté qui respecte la finesse"
                  },
                  {
                        "nom": "Persillade citronnée",
                        "type": "Fraîche",
                        "description": "Persil, citron, ail, huile d'olive",
                        "accord": "Vivacité méditerranéenne"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Légers",
                        "suggestions": [
                              "Salade de roquette",
                              "Légumes grillés",
                              "Couscous aux légumes"
                        ]
                  },
                  {
                        "type": "Consistants",
                        "suggestions": [
                              "Purée de pois chiches",
                              "Polenta crémeuse"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Rosés de Provence",
                        "suggestions": [
                              "Bandol rosé",
                              "Côtes de Provence"
                        ],
                        "temperature": "10-12°C",
                        "notes": "Fraîcheur pour la délicatesse du cœur"
                  },
                  {
                        "type": "Rouges légers",
                        "suggestions": [
                              "Côtes du Rhône Villages",
                              "Minervois"
                        ],
                        "temperature": "14-16°C",
                        "notes": "Fruité sans excès"
                  }
            ],
            "erreursCourantes": [
                  "Trop cuire: devient caoutchouteux",
                  "Ne pas nettoyer: texture désagréable",
                  "Cuisson à feu trop doux: pas de caramélisation"
            ],
            "anecdotes": "Les cœurs d'agneau sont particulièrement appréciés en Grèce (kokoretsi) et au Moyen-Orient où ils sont grillés en brochettes. En France, ils étaient autrefois un mets recherché dans la cuisine bourgeoise lyonnaise."
      },
      }
  },

  veau: {

    histoire: "Le veau est le jeune bovin (< 8 mois) à la chair pâle et tendre. En France, le veau sous la mère (élevé au lait maternel) et le veau Label Rouge représentent l'excellence. Les races laitières (Holstein, Montbéliarde) donnent les meilleurs veaux. Tradition forte dans la cuisine française classique.",

    nutrition: "Viande maigre (3-5% lipides), très riche en protéines (21g/100g), vitamines B12, B3, fer et zinc. Plus digeste que le bœuf grâce à des fibres musculaires plus courtes. Faible en gras saturés. Excellente source de phosphore et sélénium.",

    selection: {
      couleur: "Rose pâle nacré, jamais rouge (indique un veau trop âgé) ni gris. Le gras doit être blanc crème.",
      texture: "Chair fine, grains serrés, légèrement humide mais jamais mouillée. Très tendre au toucher.",
      age: "Veau de lait (< 4 mois) : le plus pâle et tendre. Veau jeune (4-8 mois) : légèrement plus rosé.",
      qualite: "Veau sous la mère, Label Rouge, IGP Veau d'Aveyron et du Ségala",
      signes: "Label Rouge garantit alimentation lactée 70% minimum, élevage 5 mois minimum"
    },

    conservation: "Viande fraîche : 2 jours à 2-4°C maximum (très fragile). Sous-vide : 3-4 jours. Le veau est plus périssable que le bœuf. Congélation : -18°C maximum 4-6 mois.",

    preparation: {
      temperaturage: "Sortir 20-30 minutes avant cuisson. Le veau supporte mal les chocs thermiques.",
      assaisonnement: "Saveur délicate : sel, poivre blanc, herbes fines (estragon, cerfeuil, persil). Éviter herbes trop puissantes.",
      securite: "Cuisson à cœur recommandée : 63°C minimum. Le veau rosé est possible mais moins courant que le bœuf.",
      preparation: "Escalopes : aplatir uniformément. Rôtis : barder si maigre pour éviter dessèchement."
    },
    cuts: {
filet: {
        anatomie: "Muscle long situé sous la colonne vertébrale du veau, peu sollicité donc extrêmement tendre. Plus petit que le filet de boeuf, il pèse 400-600g. Chair rose pâle, très fine, pratiquement sans gras.",
        caracteristiques: {
          tendrete: "10/10 - Morceau le plus tendre",
          saveur: "7/10 - Délicate et subtile",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      cote_de_veau: {
        anatomie: "Prélevée dans le carré, la côte de veau comprend un os en T (vertèbre) avec le muscle long dorsal. Épaisseur idéale 2-3cm. Chair rose tendre avec légère couche de gras protecteur.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "8/10 - Goûteuse et fine",
          persillage: "3/10 - Légèrement persillée"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      carre_de_veau: {
        anatomie: "Partie du dos entre l'épaule et la longe, comprenant 6-8 côtes. Pièce entière pour rôti de 1,5-2,5kg. Muscle long dorsal tendre et régulier, os donnent du goût.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "8/10 - Riche et délicate",
          persillage: "2/10 - Maigre avec gras externe"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      escalope_noix: {
        anatomie: "Fine tranche de 120-150g prélevée dans la noix (partie supérieure de la cuisse). Muscle rond et tendre, tranché perpendiculairement aux fibres. Chair rose pâle très fine.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Délicate",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      noix: {
        anatomie: "Muscle principal de la cuisse du veau (équivalent du cuisseau), situé sur le dessus. Pièce cylindrique de 800g-1,2kg. Chair fine, homogène, sans gras, idéale pour rôtis et escalopes.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Fine et délicate",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      quasi: {
        anatomie: "Situé à la jonction entre la longe et la cuisse, le quasi est un petit rôti de 600-800g. Muscle tendre en forme de poire, chair rose pâle homogène.",
        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "7/10 - Délicate",
          persillage: "2/10 - Maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      epaule: {
        anatomie: "Ensemble musculaire complexe du membre antérieur, comprenant plusieurs muscles de texture différente. Poids 2-3kg. Chair légèrement plus foncée que les morceaux nobles, présence de tendons.",
        caracteristiques: {
          tendrete: "6/10 - Moyennement tendre",
          saveur: "8/10 - Goûteuse",
          persillage: "3/10 - Légère présence de gras"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      collier: {
        anatomie: "Partie avant du veau, muscle du cou très sollicité donc riche en collagène. Chair rose plus foncée avec marbrures de gras et tissu conjonctif. Poids 1,5-2kg.",
        caracteristiques: {
          tendrete: "5/10 - Nécessite cuisson longue",
          saveur: "8/10 - Très savoureux",
          persillage: "5/10 - Présence de gras et collagène"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      tendron: {
        anatomie: "Partie cartilagineuse située entre les côtes et le sternum. Composé de cartilage, viande et os plats. Chair gélatineuse qui devient fondante à la cuisson longue.",
        caracteristiques: {
          tendrete: "6/10 - Après cuisson longue",
          saveur: "8/10 - Riche et gélatineuse",
          persillage: "4/10 - Gras entre les couches"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      poitrine: {
        anatomie: "Partie ventrale du veau, muscle mince et plat avec alternance de maigre et gras. Présence de cartilages. Se vend entière (1-1,5kg) ou désossée.",
        caracteristiques: {
          tendrete: "6/10 - Après braisage",
          saveur: "7/10 - Délicate mais savoureuse",
          persillage: "5/10 - Couches de gras"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      jarret_osso_buco: {
        anatomie: "Partie inférieure de la patte, coupée en tranches épaisses de 3-4cm avec l'os central à moelle. Chair gélatineuse entourée d'une membrane. La moelle est un délice.",
        caracteristiques: {
          tendrete: "7/10 - Devient fondant",
          saveur: "9/10 - Très savoureux",
          persillage: "6/10 - Gras et collagène abondants"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      blanquette_epaule_poitrine: {
        anatomie: "Mélange d'épaule et poitrine détaillées en cubes de 40-50g. Morceaux variés donnant texture fondante et sauce onctueuse. Base de la blanquette classique.",
        caracteristiques: {
          tendrete: "7/10 - Après pochage",
          saveur: "8/10 - Équilibrée",
          persillage: "4/10 - Présence modérée"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      foie_de_veau: {
        anatomie: "Organe de 1-1,5kg, lobe lisse brun rosé. Le foie de veau est plus pâle et doux que le foie de boeuf. Texture fine et fondante. Riche en fer et vitamines.",
        caracteristiques: {
          tendrete: "8/10 - Fondant si pas surcuit",
          saveur: "7/10 - Douce et fine",
          persillage: "N/A - Abat"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      ris_de_veau: {
        anatomie: "Thymus du veau, composé de la noix (partie ronde noble) et de la gorge (partie allongée). Chair blanche nacrée extrêmement délicate. Poids 300-500g. Mets de luxe.",
        caracteristiques: {
          tendrete: "10/10 - Fondant exceptionnel",
          saveur: "8/10 - Délicate crémeuse",
          persillage: "N/A - Abat noble"
        },
        techniquesChef: [
          "Dégorger à l'eau froide salée 1-2 heures si besoin",
          "Cuisson rapide impérative : 2-3 minutes par face maximum",
          "Ne jamais surcuire : texture devient granuleuse",
          "Assaisonnement délicat : sel, poivre blanc, herbes fines",
          "Sécher soigneusement avant cuisson",
          "Fariner légèrement pour protection et dorure"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : texture granuleuse, perte de fondant",
          "Ne pas dégorger : goût trop prononcé ou amer",
          "Cuisson à feu trop fort : extérieur brûlé, intérieur cru",
          "Oublier de retirer les membranes : texture désagréable",
          "Ne pas sécher avant cuisson : pas de coloration dorée"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      rognons: {
        anatomie: "Reins du veau, deux pièces de 200-300g chacune. Forme caractéristique, couleur brun clair. Souvent entourés de graisse périrénale. Texture ferme et fine.",
        caracteristiques: {
          tendrete: "7/10 - Ferme mais tendre",
          saveur: "8/10 - Prononcée mais fine",
          persillage: "N/A - Abat"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      longe: {
        anatomie: "Muscle long du dos situé après le carré, correspondant au filet avec l'os. Pièce de 1,5-2kg donnant côtes premières et rôtis. Chair tendre et fine.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Délicate",
          persillage: "2/10 - Maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      sous_noix: {
        anatomie: "Muscle externe de la cuisse, situé sous la noix. Forme triangulaire de 600-800g. Chair fine légèrement moins tendre que la noix, sans gras apparent.",
        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "7/10 - Délicate",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      noix_patissiere: {
        anatomie: "Petit muscle rond de 400-600g situé à l'intérieur de la cuisse. Forme arrondie parfaite d'où son nom. Chair rose pâle très fine, sans nerf ni gras.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Délicate",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      grenadins: {
        anatomie: "Tranches épaisses (2-3cm) taillées dans le filet ou la noix, de forme ronde. Poids 120-150g chacun. Chair rose pâle très tendre, traditionnellement bardés.",
        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Fine",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      medaillons: {
        anatomie: "Petites tranches rondes de 60-80g coupées dans le filet mignon. Épaisseur 2cm. Chair très tendre rose pâle. Cuisson rapide impérative.",
        caracteristiques: {
          tendrete: "10/10 - Extrêmement tendre",
          saveur: "7/10 - Délicate",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      flanchet: {
        anatomie: "Muscle plat du bas-ventre, situé entre la poitrine et la bavette. Chair maigre avec membranes. Texture fibreuse nécessitant cuisson longue. Poids 800g-1,2kg.",
        caracteristiques: {
          tendrete: "5/10 - Nécessite braisage",
          saveur: "7/10 - Goûteux",
          persillage: "3/10 - Peu de gras"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },
      filet: {
        anatomie: "Muscle long situé sous la colonne vertébrale du veau, peu sollicité donc extrêmement tendre. Plus petit que le filet de boeuf, il pèse 400-600g. Chair rose pâle, très fine, pratiquement sans gras.",
        caracteristiques: {
          tendrete: "10/10 - Morceau le plus tendre",
          saveur: "7/10 - Délicate et subtile",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Cuisson rapide : saisir 2-3 minutes par face à feu vif",
          "Température à coeur : 60-63°C pour un veau rosé tendre",
          "Sortir du réfrigérateur 20-30 minutes avant cuisson",
          "Sécher soigneusement avant cuisson pour une belle coloration",
          "Ne pas piquer la viande : laisser reposer 5 minutes avant découpe",
          "Déglacer la poêle au vin blanc pour récupérer les sucs"
        ],
        sauces: [
          {
            nom: "Sauce aux morilles et crème",
            type: "Classique française",
            description: "Morilles réhydratées, crème, échalotes, vin blanc, fond de veau",
            accord: "Excellence pour sublimer la finesse du veau"
          },
          {
            nom: "Beurre blanc citronné",
            type: "Classique légère",
            description: "Réduction échalotes-vin blanc, beurre monté, jus de citron, estragon",
            accord: "Fraîcheur acidulée qui respecte la délicatesse"
          },
          {
            nom: "Jus de veau réduit",
            type: "Classique simple",
            description: "Fond de veau concentré, beurre, thym, poivre",
            accord: "Simplicité élégante qui magnifie le morceau"
          },
          {
            nom: "Sauce Marsala",
            type: "Italienne",
            description: "Vin Marsala, champignons, fond de veau, beurre",
            accord: "Douceur sicilienne raffinée"
          }
        ],
        accompagnements: {
          legumes: ["Asperges vertes rôties", "Girolles sautées au persil", "Jeunes carottes glacées", "Épinards frais à la crème", "Haricots verts extra-fins"],
          feculents: ["Risotto crémeux au parmesan", "Tagliatelles fraîches au beurre", "Gratin dauphinois léger", "Pommes Anna", "Purée de pommes de terre fine"],
          autres: ["Morilles", "Champignons de Paris", "Tomates confites", "Artichauts poivrade"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Surcuisson : au-delà de 65°C, le veau devient sec et perd sa tendreté",
          "Cuisson direct du frigo : choc thermique qui durcit les fibres",
          "Ne pas laisser reposer : les jus s'échappent à la découpe",
          "Saler trop tôt : perte d'humidité de la viande",
          "Feu trop fort continu : extérieur brûlé, intérieur cru"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },



      haut_de_cotes: {
        anatomie: "Partie supérieure des côtes découvertes près de l'épaule. Muscles entrelardés avec os. Chair plus foncée et goûteuse que le carré. Poids 1-1,5kg.",
        caracteristiques: {
          tendrete: "7/10 - Moyennement tendre",
          saveur: "8/10 - Savoureux",
          persillage: "4/10 - Présence de gras"
        },
        techniquesChef: [
          "Coloration initiale : saisir tous les côtés pour développer les saveurs",
          "Cuisson longue : 2-3 heures à 150-160°C ou feu doux",
          "Couvrir hermétiquement pour maintenir l'humidité",
          "Mouiller à mi-hauteur avec fond, vin ou bouillon",
          "Ajouter aromates : carottes, oignon, bouquet garni",
          "Le collagène se transforme en gélatine : texture fondante garantie"
        ],
        sauces: [
          {
            nom: "Sauce tomate provençale",
            type: "Méditerranéenne",
            description: "Tomates, ail, herbes de Provence, vin blanc, olives",
            accord: "Acidité et fraîcheur pour viande braisée"
          },
          {
            nom: "Sauce brune au vin blanc",
            type: "Classique française",
            description: "Fond de veau, vin blanc sec, échalotes, champignons, crème",
            accord: "Richesse pour accompagner la cuisson longue"
          },
          {
            nom: "Jus de braisage réduit",
            type: "Simple et authentique",
            description: "Réduction du jus de cuisson dégraissé, beurre monté",
            accord: "Concentré de saveurs du mijotage"
          }
        ],
        accompagnements: {
          legumes: ["Carottes fondantes", "Oignons grelots", "Navets nouveaux", "Céleri branche", "Tomates provençales", "Fenouil braisé"],
          feculents: ["Polenta crémeuse", "Pâtes fraîches larges", "Pommes de terre grenailles", "Riz pilaf", "Gnocchis maison"],
          autres: ["Olives noires", "Champignons variés", "Lardons fumés"]
        },
        vins: [
          {
            type: "Côtes du Rhône",
            exemples: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            justification: "Structure pour plats mijotés et sauces riches"
          },
          {
            type: "Bourgogne rouge",
            exemples: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"],
            justification: "Puissance élégante pour cuissons longues"
          },
          {
            type: "Languedoc",
            exemples: ["Pic Saint-Loup", "Faugères", "Minervois"],
            justification: "Richesse méridionale pour plats en sauce"
          }
        ],
        erreursCourantes: [
          "Cuisson trop rapide : le collagène ne se transforme pas, viande dure",
          "Température trop élevée : viande qui se dessèche malgré le liquide",
          "Ne pas colorer avant braisage : perte de saveurs complexes",
          "Trop de liquide : dilution des saveurs, plus bouilli que braisé",
          "Ne pas dégraisser le jus final : sauce lourde et indigeste"
        ],
        anecdotes: "Les morceaux nobles du veau sont appréciés depuis l'Antiquité. Les Romains élevaient déjà des veaux pour leur chair tendre. En France, le veau de lait est une tradition depuis le Moyen Âge, symbole de raffinement culinaire."
      },

      cervelle: {
        anatomie: "Cerveau du veau, masse blanche rosée de 250-300g. Texture crémeuse unique, très délicate. Nécessite dégorgeage et retrait de la membrane. Mets raffiné devenu rare.",
        caracteristiques: {
          tendrete: "10/10 - Fondante crémeuse",
          saveur: "6/10 - Très douce neutre",
          persillage: "N/A - Abat délicat"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      tete_de_veau: {
        anatomie: "Tête entière ou en morceaux (joues, langue, cervelle). Chair gélatineuse très goûteuse. Traditionnellement servie avec sauce gribiche ou ravigote. Spécialité lyonnaise.",
        caracteristiques: {
          tendrete: "7/10 - Gélatineuse fondante",
          saveur: "8/10 - Riche et typée",
          persillage: "N/A - Préparation complexe"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      langue: {
        anatomie: "Muscle lisse de 600-800g, chair dense et homogène. Nécessite pochage prolongé et épluchage de la peau. Texture unique, fondante après cuisson longue.",
        caracteristiques: {
          tendrete: "8/10 - Fondante après cuisson",
          saveur: "7/10 - Douce et fine",
          persillage: "N/A - Muscle lisse"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      coeur: {
        anatomie: "Muscle cardiaque de 400-600g. Chair rouge dense et ferme, très maigre. Texture musculeuse nécessitant préparation soigneuse. Riche en protéines et fer.",
        caracteristiques: {
          tendrete: "6/10 - Ferme",
          saveur: "8/10 - Goût prononcé",
          persillage: "1/10 - Très maigre"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Les abats de veau sont considérés comme les plus fins et délicats de tous les abats. Dans la grande cuisine française, les ris de veau sont classés parmi les mets les plus nobles. La cervelle et les rognons de veau étaient autrefois des mets de luxe réservés aux tables bourgeoises."
      },

      pieds_de_veau: {
        anatomie: "Extrémités des pattes, riches en cartilage et gélatine. Cuisson très longue nécessaire. Chair gélatineuse fondante. Base de la gelée traditionnelle.",
        caracteristiques: {
          tendrete: "7/10 - Gélatineux fondant",
          saveur: "6/10 - Douce",
          persillage: "N/A - Cartilage gélatine"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      fraise_de_veau: {
        anatomie: "Mésentère (membrane intestinale) en forme de dentelle. Texture spongieuse unique. Nécessite nettoyage méticuleux et blanchiment. Spécialité lyonnaise rare.",
        caracteristiques: {
          tendrete: "8/10 - Texture unique",
          saveur: "7/10 - Délicate",
          persillage: "N/A - Membrane"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },

      animelles: {
        anatomie: "Testicules du veau, paire de 200-300g. Chair blanche crémeuse très délicate. Nécessite dégorgeage et retrait de la membrane. Mets raffiné devenu rare.",
        caracteristiques: {
          tendrete: "9/10 - Crémeuses fondantes",
          saveur: "6/10 - Très douce",
          persillage: "N/A - Abat délicat"
        },
        techniquesChef: [
          "Dégorgeage obligatoire : eau froide vinaigrée 2-4 heures",
          "Blanchir 5-10 minutes à l'eau bouillante salée",
          "Retirer membranes et parties indésirables",
          "Cuisson longue en mijotage ou pochage selon le morceau",
          "Aromates puissants : oignon, clous de girofle, laurier",
          "Servir avec sauce relevée : gribiche, ravigote, moutarde"
        ],
        sauces: [
          {
            nom: "Sauce gribiche",
            type: "Classique française",
            description: "Mayonnaise aux câpres, cornichons, œufs durs, herbes",
            accord: "Acidité et relief pour abats délicats"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Classique simple",
            description: "Beurre cuit jusqu'à noisette, câpres, persil, citron",
            accord: "Saveur grillée et acidité parfaite"
          },
          {
            nom: "Sauce ravigote",
            type: "Classique acidulée",
            description: "Échalotes, vinaigre, moutarde, herbes fraîches",
            accord: "Fraîcheur herbacée pour contraster"
          }
        ],
        accompagnements: {
          legumes: ["Épinards frais", "Endives braisées", "Champignons de Paris", "Haricots verts", "Mesclun"],
          feculents: ["Pommes de terre vapeur", "Rösti croustillant", "Pâtes fraîches", "Riz basmati"],
          autres: ["Cornichons", "Câpres", "Oignons confits", "Pickles"]
        },
        vins: [
          {
            type: "Bourgogne blanc",
            exemples: ["Meursault", "Puligny-Montrachet", "Chassagne-Montrachet"],
            justification: "Élégance et finesse pour la délicatesse du veau"
          },
          {
            type: "Côtes du Jura blanc",
            exemples: ["Arbois", "Château-Chalon"],
            justification: "Caractère qui sublime les sauces crémeuses"
          },
          {
            type: "Bourgogne rouge léger",
            exemples: ["Volnay", "Beaune", "Savigny-lès-Beaune"],
            justification: "Finesse et fruit pour ne pas dominer"
          }
        ],
        erreursCourantes: [
          "Dégorgeage insuffisant : goût trop fort et métallique",
          "Ne pas blanchir : texture et goût désagréables",
          "Cuisson insuffisante : texture caoutchouteuse",
          "Ne pas retirer les membranes : parties dures immmangeables",
          "Assaisonnement trop timide : manque de relief"
        ],
        anecdotes: "Le veau est particulièrement prisé dans la cuisine française classique. Escoffier consacrait de nombreuses recettes au veau dans son Guide Culinaire. Le veau sous la mère, élevé exclusivement au lait maternel, représente le summum de la qualité avec sa chair rose pâle et son goût délicat."
      },    
      escalope_de_veau: {
            "anatomie": "Fine tranche prélevée dans la noix, la sous-noix ou le quasi. Épaisseur de 5-8mm, aplatie au maillet pour attendrir et uniformiser.",
            "caracteristiques": {
                  "tendrete": "9/10 - Très tendre",
                  "saveur": "7/10 - Délicate et fine",
                  "persillage": "2/10 - Très maigre"
            },
            "techniquesChef": [
                  "Ne jamais dépasser 3-4 min de cuisson totale",
                  "Fariner légèrement pour une belle croûte dorée",
                  "Cuire à feu vif dans beurre clarifié",
                  "Déglacer la poêle pour récupérer les sucs",
                  "Servir immédiatement, ne supporte pas l'attente"
            ],
            "sauces": [
                  {
                        "nom": "Sauce milanaise",
                        "type": "Italienne",
                        "description": "Citron, câpres, beurre noisette",
                        "accord": "L'accord parfait avec la panure"
                  },
                  {
                        "nom": "Sauce à la crème",
                        "type": "Française",
                        "description": "Crème, champignons, vin blanc",
                        "accord": "Onctuosité qui enrobe l'escalope"
                  },
                  {
                        "nom": "Sauce piccata",
                        "type": "Italienne",
                        "description": "Citron, câpres, persil, beurre",
                        "accord": "Vivacité qui relève la viande douce"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Italiens",
                        "suggestions": [
                              "Spaghettis al limone",
                              "Risotto aux asperges",
                              "Roquette parmesan"
                        ]
                  },
                  {
                        "type": "Classiques",
                        "suggestions": [
                              "Pâtes fraîches au beurre",
                              "Haricots verts",
                              "Purée de pommes de terre"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Blancs italiens",
                        "suggestions": [
                              "Soave",
                              "Verdicchio",
                              "Gavi"
                        ],
                        "temperature": "10-12°C",
                        "notes": "Fraîcheur et minéralité"
                  },
                  {
                        "type": "Blancs français",
                        "suggestions": [
                              "Chablis",
                              "Pouilly-Fuissé",
                              "Saint-Véran"
                        ],
                        "temperature": "11-13°C",
                        "notes": "Élégance bourguignonne"
                  }
            ],
            "erreursCourantes": [
                  "Cuisson trop longue: devient sèche et dure",
                  "Huile pas assez chaude: pas de caramélisation",
                  "Escalope trop épaisse: cuisson inégale"
            ],
            "anecdotes": "L'escalope milanaise, panée et dorée, est l'ancêtre de la Wiener Schnitzel autrichienne. La légende veut que le maréchal Radetzky l'ait rapportée de Milan à Vienne au XIXe siècle. La 'valdôtaine' (jambon et fontina) est une variante savoyarde."
      },
      roti_de_veau: {
            "anatomie": "Pièce à rôtir prélevée dans la noix, le quasi, l'épaule ou le carré. Forme cylindrique ou ovale, poids de 800g à 2kg selon le nombre de convives.",
            "caracteristiques": {
                  "tendrete": "8/10 - Fondant après cuisson",
                  "saveur": "7/10 - Subtile et délicate",
                  "persillage": "3/10 - Peu de gras, nécessite attention"
            },
            "techniquesChef": [
                  "Ficeler serré pour maintenir la forme",
                  "Saisir sur toutes les faces avant enfournement",
                  "Four modéré 160-180°C pour éviter le dessèchement",
                  "Arroser régulièrement pendant la cuisson",
                  "Température à cœur: 62-65°C maximum"
            ],
            "sauces": [
                  {
                        "nom": "Jus au citron",
                        "type": "Légère",
                        "description": "Jus de cuisson, citron, thym",
                        "accord": "Fraîcheur qui allège la viande"
                  },
                  {
                        "nom": "Sauce aux morilles",
                        "type": "Gastronomique",
                        "description": "Morilles, crème, madère, fond de veau",
                        "accord": "Luxe terreux et crémeux"
                  },
                  {
                        "nom": "Sauce au thym-citron",
                        "type": "Provençale",
                        "description": "Thym, citron, huile d'olive, ail",
                        "accord": "Méditerranée ensoleillée"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Légumes printaniers",
                        "suggestions": [
                              "Petits pois à la française",
                              "Carottes nouvelles",
                              "Asperges vertes"
                        ]
                  },
                  {
                        "type": "Gratins",
                        "suggestions": [
                              "Gratin de courgettes",
                              "Pommes de terre boulangère",
                              "Gratin d'endives"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Blancs de garde",
                        "suggestions": [
                              "Meursault",
                              "Puligny-Montrachet",
                              "Condrieu"
                        ],
                        "temperature": "12-14°C",
                        "notes": "Blancs amples et généreux"
                  },
                  {
                        "type": "Rouges fins",
                        "suggestions": [
                              "Volnay",
                              "Mercurey",
                              "Crozes-Hermitage"
                        ],
                        "temperature": "15-16°C",
                        "notes": "Finesse et fruit"
                  }
            ],
            "erreursCourantes": [
                  "Four trop chaud: extérieur sec avant cuisson du centre",
                  "Pas d'arrosage: croûte dure et viande sèche",
                  "Découpe immédiate: perte de tous les jus"
            ],
            "anecdotes": "Le rôti de veau du dimanche était autrefois le symbole de l'aisance bourgeoise française. Le veau 'Orloff', farci de champignons et de sauce Mornay, fut créé par le chef Urbain Dubois pour le prince russe Orloff au XIXe siècle."
      },
      coeur_veau: {
            "anatomie": "Cœur de 250-400g, plus gros et plus tendre que celui du bœuf. Texture fine, peu de vaisseaux à retirer. Viande dense et maigre.",
            "caracteristiques": {
                  "tendrete": "6/10 - Ferme mais agréable",
                  "saveur": "7/10 - Fin, moins prononcé que le bœuf",
                  "persillage": "1/10 - Très maigre"
            },
            "techniquesChef": [
                  "Faire dégorger 1-2h dans l'eau froide salée",
                  "Retirer les vaisseaux et le gras dur du sommet",
                  "Trancher en médaillons de 1-1.5 cm",
                  "Poêler vivement 2 min par face",
                  "Servir rosé pour éviter la dureté"
            ],
            "sauces": [
                  {
                        "nom": "Sauce Porto",
                        "type": "Classique",
                        "description": "Porto, fond de veau, échalotes, crème",
                        "accord": "Élégance qui ennoblit l'abat"
                  },
                  {
                        "nom": "Sauce moutarde",
                        "type": "Française",
                        "description": "Moutarde de Dijon, crème, estragon",
                        "accord": "Piquant délicat"
                  }
            ],
            "accompagnements": [
                  {
                        "type": "Raffinés",
                        "suggestions": [
                              "Purée de céleri-rave",
                              "Champignons des bois",
                              "Épinards au beurre"
                        ]
                  },
                  {
                        "type": "Classiques",
                        "suggestions": [
                              "Pommes de terre sautées",
                              "Riz pilaf",
                              "Carottes glacées"
                        ]
                  }
            ],
            "vins": [
                  {
                        "type": "Rouges moyens",
                        "suggestions": [
                              "Saint-Nicolas-de-Bourgueil",
                              "Saumur-Champigny",
                              "Côtes du Rhône"
                        ],
                        "temperature": "15-16°C",
                        "notes": "Fruité et souple"
                  }
            ],
            "erreursCourantes": [
                  "Ne pas dégorger: goût trop fort",
                  "Cuisson excessive: texture caoutchouteuse",
                  "Tranches trop fines: dessèchent"
            ],
            "anecdotes": "Le cœur de veau était très prisé dans la grande cuisine française classique. Auguste Escoffier l'incluait dans ses menus gastronomiques. Au Pérou, les anticuchos de cœur de veau sont une variante raffinée des brochettes traditionnelles de cœur de bœuf."
      },
      }
  },
  volaille: {
    histoire: "Le poulet fut domestiqué en Asie il y a 8000 ans. En France, les races patrimoniales (Bresse, Géline de Touraine, Coucou de Rennes) sont protégées par des AOP et Labels. La Volaille de Bresse est la seule volaille au monde à bénéficier d'une AOP.",

    nutrition: "Viande maigre exceptionnelle (poulet sans peau : 3% lipides), riche en protéines (24g/100g), vitamines B et niacine. Le blanc est plus maigre, la cuisse plus goûteuse. Source de tryptophane (précurseur sérotonine).",

    selection: {
      qualite: "Volaille Label Rouge : 81 jours minimum, souche à croissance lente. AOP Volaille de Bresse : 4 mois, alimentation 100% céréales, finition à l'épinette.",
      couleur: "Peau blanc crème à jaune (maïs), jamais grisâtre. Chair rose pâle ferme.",
      texture: "Peau tendue sans déchirures, chair ferme. Bréchet souple (cartilage) pour un poulet jeune.",
      signes: "AOP Volaille de Bresse (bague), Label Rouge, Agriculture Biologique, Plein air"
    },

    conservation: "Volaille fraîche : 2 jours à 2-4°C maximum. Très périssable. Sous-vide : 4 jours. Congélation : -18°C maximum 6-8 mois. Décongeler au réfrigérateur 24h.",

    preparation: {
      temperaturage: "Sortir 30 minutes avant cuisson pour température uniforme.",
      assaisonnement: "Sel, poivre, herbes de Provence, thym, romarin, ail, citron. Butter sous la peau pour jutosité.",
      securite: "CRUCIAL : Température minimum 74°C à cœur (norme UE) pour éliminer salmonelles et campylobacter. Jus doit être clair, jamais rosé.",
      hygiene: "Ne jamais laver la volaille crue (disperse bactéries). Nettoyer tous ustensiles après contact. Cuire immédiatement."
    },

    cuts: {
      poulet_entier: {
        anatomie: "Poulet entier avec os, peau, abats optionnels. Poids 1,2-2,5 kg selon label et âge. Label Rouge : minimum 81 jours, 1,2kg. Bresse AOP : 4 mois, pattes bleues, crête rouge, plumage blanc. Le poulet fermier développe plus de goût.",

        caracteristiques: {
          tendrete: "8/10 global (blanc 9/10, cuisse 7/10)",
          saveur: "8/10 - Équilibré (Label Rouge 10/10)",
          persillage: "Variable selon alimentation"
        },

        techniquesChef: [
          "Cuisson rôti : 20 min/500g à 180°C + 20 min final à 200°C pour peau croustillante",
          "Brider le poulet pour cuisson uniforme et présentation",
          "Beurre ou huile sous la peau des blancs (moelleux garanti)",
          "Farcir la cavité : citron, ail, herbes pour parfum",
          "Arroser toutes les 15-20 minutes avec jus de cuisson",
          "Température cible : 74°C blanc, 82°C cuisse pour sécurité",
          "Repos 15 minutes avant découpe (redistribution des jus)"
        ],

        sauces: [
          {
            nom: "Jus de volaille au citron",
            type: "Classique léger",
            description: "Sucs de cuisson déglacés, citron, beurre, estragon",
            accord: "Fraîcheur qui sublime sans masquer"
          },
          {
            nom: "Sauce suprême",
            type: "Grande sauce française",
            description: "Velouté de volaille, crème, champignons, beurre",
            accord: "Onctuosité crémeuse emblématique"
          },
          {
            nom: "Sauce barbecue maison",
            type: "Américaine",
            description: "Ketchup, miel, vinaigre, moutarde, épices fumées",
            accord: "Caramélisation parfaite pour poulet rôti"
          },
          {
            nom: "Sauce au vin jaune et morilles",
            type: "Franc-comtoise gastronomique",
            description: "Vin jaune du Jura, morilles, crème, échalotes",
            accord: "Luxe pour poulet de Bresse"
          }
        ],

        accompagnements: [
          {
            type: "Légumes rôtis",
            suggestions: [
              "Pommes de terre rôties au romarin",
              "Carottes et panais glacés",
              "Oignons grelots caramélisés",
              "Tomates cerises confites",
              "Courge butternut rôtie"
            ]
          },
          {
            type: "Légumes verts",
            suggestions: [
              "Haricots verts au beurre",
              "Petits pois à la française",
              "Brocolis vapeur",
              "Épinards à la crème",
              "Salade verte vinaigrette"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Gratin dauphinois",
              "Riz pilaf",
              "Purée de pommes de terre",
              "Frites maison"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs de Bourgogne",
            suggestions: ["Meursault", "Chablis", "Pouilly-Fuissé"],
            temperature: "11-13°C",
            notes: "Élégance pour volaille de qualité"
          },
          {
            type: "Rouges légers",
            suggestions: ["Beaujolais Villages", "Pinot Noir", "Côtes du Rhône"],
            temperature: "14-16°C",
            notes: "Fruit et souplesse"
          }
        ],

        erreursCourantes: [
          "Cuisson insuffisante (< 74°C) : risque sanitaire majeur",
          "Température trop haute : blanc sec, peau brûlée",
          "Ne pas arroser : dessèchement des blancs",
          "Découper immédiatement : perte massive de jus",
          "Laver la volaille crue : dispersion bactérienne"
        ],

        anecdotes: "Le poulet de Bresse est la seule volaille AOP au monde depuis 1957. Sa chair blanche et ferme vient de l'élevage long (4 mois) et de la finition 'à l'épinette' (claustration 8-15 jours dans cage obscure, gavage au maïs et lait). Un poulet de Bresse peut atteindre 30-50€. Le général de Gaulle déclarait : 'Comment voulez-vous gouverner un pays qui compte 246 variétés de fromage... et un seul poulet de Bresse ?'"
      },

      blanc_de_poulet: {
        anatomie: "Muscle pectoral (poitrine), partie la plus maigre du poulet. Pèse 150-200g par blanc. Chair blanche, texture fine. Peut être préparé avec ou sans peau. Le blanc fermier est plus épais et savoureux que l'industriel.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre si bien cuit",
          saveur: "6/10 - Délicat (8/10 pour Label Rouge)",
          persillage: "1/10 - Extrêmement maigre"
        },

        techniquesChef: [
          "Cuisson douce impérative : 74°C à cœur, jamais au-delà",
          "Poêle : saisir 3 min côté peau, retourner, finir 6-8 min feu doux",
          "Four : 180°C pendant 18-22 min selon épaisseur",
          "Papillote : cuisson vapeur douce avec aromates",
          "Mariner 2-4h pour saveur et jutosité (yaourt, citron, herbes)",
          "Saumure (eau salée 1h) : blanc ultra-juteux garanti"
        ],

        sauces: [
          {
            nom: "Sauce curry-coco",
            type: "Fusion asiatique",
            description: "Lait de coco, curry, gingembre, citronnelle, citron vert",
            accord: "Exotisme crémeux pour blanc neutre"
          },
          {
            nom: "Sauce moutarde à l'ancienne",
            type: "Française bistrot",
            description: "Moutarde à l'ancienne, crème, vin blanc, échalotes",
            accord: "Classique réconfortant"
          },
          {
            nom: "Sauce tomate basilic",
            type: "Méditerranéenne",
            description: "Tomates fraîches, basilic, ail, huile d'olive",
            accord: "Fraîcheur estivale légère"
          },
          {
            nom: "Sauce champignons",
            type: "Crémeuse",
            description: "Champignons de Paris, crème, persil, vin blanc",
            accord: "Douceur forestière"
          }
        ],

        accompagnements: [
          {
            type: "Légumes légers",
            suggestions: [
              "Haricots verts vapeur",
              "Courgettes sautées",
              "Brocolis al dente",
              "Tomates confites",
              "Ratatouille"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Riz basmati nature ou pilaf",
              "Pâtes (tagliatelles, pennes)",
              "Quinoa aux légumes",
              "Purée de patate douce",
              "Semoule de couscous"
            ]
          },
          {
            type: "Salades composées",
            suggestions: [
              "César (laitue, parmesan, croûtons, anchois)",
              "Avocat, tomate, roquette",
              "Salade verte mixte"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs vifs",
            suggestions: ["Sancerre", "Riesling", "Chablis"],
            temperature: "10-12°C",
            notes: "Fraîcheur et minéralité"
          },
          {
            type: "Blancs ronds",
            suggestions: ["Chardonnay", "Viognier", "Côtes du Rhône blanc"],
            temperature: "11-13°C",
            notes: "Corps pour sauces crémeuses"
          }
        ],

        erreursCourantes: [
          "Surcuisson (> 76°C) : blanc sec et caoutchouteux",
          "Feu trop fort : extérieur brûlé, intérieur cru",
          "Cuisson sans matière grasse : dessèchement total",
          "Ne pas laisser reposer : perte de jus à la découpe",
          "Blanc trop épais cuit entier : cuisson inégale (inciser)"
        ],

        anecdotes: "Le blanc de poulet est devenu star du fitness dans les années 1980-90 avec l'engouement pour les protéines maigres. Arnold Schwarzenegger en mangeait 6 par jour. Le 'chicken breast syndrome' désigne ironiquement la surcuisson systématique des blancs en restauration par peur sanitaire. En réalité, un blanc juteux à 74°C est parfaitement sûr et infiniment meilleur."
      },

      cuisse_de_poulet: {
        anatomie: "Cuisse + pilon du poulet, viande brune riche en myoglobine. Plus grasse que le blanc (10% lipides), plus savoureuse et plus difficile à dessécher. Contient os et articulations, nécessite cuisson plus longue. Pèse 200-300g la pièce.",

        caracteristiques: {
          tendrete: "7/10 - Texture plus ferme que le blanc",
          saveur: "9/10 - Beaucoup plus goûteuse",
          persillage: "6/10 - Gras intramusculaire et sous-cutané"
        },

        techniquesChef: [
          "Température cible : 82-85°C (plus haute que blanc pour collagène)",
          "Four : 200°C pendant 35-45 min, peau vers le haut",
          "Confit : 90°C dans graisse de canard 2-3h (ultra-fondant)",
          "Marinade épicée : yaourt, épices, citron 4-12h",
          "BBQ/Grill : cuisson indirecte puis directe pour peau croustillante",
          "Désosser optionnel pour farcir ou cuisson rapide"
        ],

        sauces: [
          {
            nom: "Sauce tandoori",
            type: "Indienne",
            description: "Yaourt, tandoori masala, cumin, coriandre, citron",
            accord: "Épices intenses pour viande savoureuse"
          },
          {
            nom: "Sauce BBQ fumée",
            type: "Américaine",
            description: "Tomate, mélasse, vinaigre, fumée liquide, épices",
            accord: "Caramélisation pour cuisse grillée"
          },
          {
            nom: "Sauce au vin rouge",
            type: "Coq au vin",
            description: "Vin rouge, lardons, champignons, oignons, thym",
            accord: "Mijotée traditionnelle française"
          },
          {
            nom: "Sauce aigre-douce asiatique",
            type: "Chinoise",
            description: "Sauce soja, vinaigre riz, miel, gingembre, ail",
            accord: "Contraste sucré-salé typique"
          }
        ],

        accompagnements: [
          {
            type: "Féculents copieux",
            suggestions: [
              "Frites de pommes de terre croustillantes",
              "Riz pilaf aux épices",
              "Purée de pommes de terre maison",
              "Pâtes",
              "Pain naan ou pita"
            ]
          },
          {
            type: "Légumes mijotés",
            suggestions: [
              "Ratatouille provençale",
              "Poivrons confits",
              "Aubergines grillées",
              "Tomates rôties",
              "Champignons sautés"
            ]
          },
          {
            type: "Salades fraîches",
            suggestions: [
              "Coleslaw croquant",
              "Salade de tomates",
              "Taboulé",
              "Salade verte"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges fruités",
            suggestions: ["Beaujolais", "Côtes du Rhône", "Merlot"],
            temperature: "15-17°C",
            notes: "Fruit et rondeur pour viande savoureuse"
          },
          {
            type: "Rosés charpentés",
            suggestions: ["Tavel", "Bandol rosé", "Provence"],
            temperature: "10-12°C",
            notes: "Fraîcheur pour marinades épicées"
          }
        ],

        erreursCourantes: [
          "Sous-cuisson (< 80°C) : chair rosée près de l'os, risque sanitaire",
          "Cuire comme un blanc : texture caoutchouteuse",
          "Peau molle : température insuffisante pour croustillant",
          "Piquer excessivement : perte de jus",
          "Retirer la peau avant cuisson : dessèchement"
        ],

        anecdotes: "La cuisse de poulet est star du fried chicken américain depuis le XIXe siècle. La recette secrète du Colonel Sanders (KFC, 1952) utilise 11 herbes et épices. En France, les cuisses confites à la graisse de canard sont une spécialité du Sud-Ouest. La cuisse est préférée au blanc dans la cuisine africaine, asiatique et méditerranéenne pour sa résistance et sa saveur."
      },

      magret_de_canard: {
        anatomie: "Blanc (poitrine) d'un canard gras (mulard ou Barbarie), élevé pour le foie gras. Pèse 300-400g, très charnu. Peau épaisse avec couche de gras important. Chair rouge foncée, goût prononcé de gibier. À distinguer du blanc de canard maigre (canard de Pékin).",

        caracteristiques: {
          tendrete: "8/10 - Tendre si rosé",
          saveur: "10/10 - Intensément goûteux",
          persillage: "3/10 chair - Gras externe abondant"
        },

        techniquesChef: [
          "Quadriller la peau au couteau (ne pas entailler la chair)",
          "Cuisson peau côté froid dans poêle froide : 8-10 min feu moyen",
          "Vider le gras régulièrement (à conserver pour cuisson)",
          "Retourner : 2-3 min côté chair pour rosé parfait",
          "Température cible : 52-56°C pour rosé (comme bœuf)",
          "Repos 8-10 minutes impératif",
          "Trancher finement en biais contre les fibres"
        ],

        sauces: [
          {
            nom: "Sauce aux figues",
            type: "Sucrée-salée",
            description: "Figues fraîches, porto, miel, vinaigre balsamique",
            accord: "Douceur fruitée pour gras du magret"
          },
          {
            nom: "Sauce au miel et vinaigre balsamique",
            type: "Aigre-douce",
            description: "Miel, vinaigre balsamique réduit, fond de canard",
            accord: "Équilibre parfait sucré-acidulé"
          },
          {
            nom: "Sauce aux cerises",
            type: "Fruit rouge",
            description: "Cerises griottes, porto, sucre, vinaigre",
            accord: "Acidité fruitée classique"
          },
          {
            nom: "Sauce au poivre vert",
            type: "Épicée crémeuse",
            description: "Poivre vert, cognac, crème, fond de canard",
            accord: "Chaleur épicée pour viande puissante"
          }
        ],

        accompagnements: [
          {
            type: "Pommes de terre",
            suggestions: [
              "Pommes sarladaises (à la graisse de canard)",
              "Gratin dauphinois",
              "Pommes de terre rôties",
              "Purée à la graisse de canard"
            ]
          },
          {
            type: "Fruits",
            suggestions: [
              "Figues rôties au miel",
              "Pommes poêlées caramélisées",
              "Cerises griottes pochées",
              "Poires au vin rouge"
            ]
          },
          {
            type: "Légumes nobles",
            suggestions: [
              "Cèpes poêlés",
              "Épinards à la crème",
              "Haricots verts",
              "Navets confits"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges puissants du Sud-Ouest",
            suggestions: ["Cahors", "Madiran", "Bergerac"],
            temperature: "17-18°C",
            notes: "Tanins robustes pour gras et puissance"
          },
          {
            type: "Rouges fruités",
            suggestions: ["Pomerol", "Saint-Émilion", "Châteauneuf-du-Pape"],
            temperature: "16-18°C",
            notes: "Fruit mûr en harmonie"
          }
        ],

        erreursCourantes: [
          "Surcuisson (> 60°C) : magret sec et dur comme semelle",
          "Feu trop fort : peau brûlée, gras non fondu",
          "Ne pas quadriller la peau : gras ne fond pas, peau caoutchouteuse",
          "Oublier le repos : jus rouge qui s'écoule partout",
          "Trancher épais : texture dure, difficile à mâcher"
        ],

        anecdotes: "Le magret de canard n'existe que depuis les années 1960. André Daguin, chef à Auch (Gers), eut l'idée de cuire le blanc de canard gras comme un steak rosé, au lieu de le confire. Avant, seuls les foies étaient valorisés, la viande était confite. Cette innovation révolutionna la gastronomie du Sud-Ouest. Un magret IGP du Sud-Ouest pèse minimum 300g."
      },

      canard_entier: {
        anatomie: "Canard entier 1,8-2,5kg. Canard de Barbarie (chair ferme, moins grasse) ou Mulard (plus gras, élevé pour foie gras). Chair rouge foncée, peau épaisse grasse. Cuisses savoureuses, blancs maigres. Os carcasse pour fond.",

        caracteristiques: {
          tendrete: "7/10 - Chair ferme",
          saveur: "10/10 - Goût prononcé de gibier",
          persillage: "4/10 chair - Gras sous-cutané abondant"
        },

        techniquesChef: [
          "Cuisson longue : 2h à 180°C pour rendre gras et croustiller peau",
          "Piquer la peau partout (pas la chair) pour évacuer graisse",
          "Farcir la cavité : pommes, orange, pruneaux, aromates",
          "Arroser régulièrement avec gras fondu",
          "Finition 20 min à 220°C pour peau extra-croustillante",
          "Température : 74°C blanc, 82°C cuisse",
          "Repos 20 minutes avant découpe"
        ],

        sauces: [
          {
            nom: "Sauce à l'orange",
            type: "Grande classique française",
            description: "Jus d'orange, orange amère, Grand Marnier, vinaigre, sucre",
            accord: "Alliance mythique canard-agrume"
          },
          {
            nom: "Sauce aux olives",
            type: "Méditerranéenne",
            description: "Olives vertes, vin blanc, ail, herbes de Provence",
            accord: "Caractère provençal intense"
          },
          {
            nom: "Sauce bigarade",
            type: "Classique française",
            description: "Orange amère, citron, fond de canard, Curaçao",
            accord: "Version raffinée de la sauce à l'orange"
          },
          {
            nom: "Jus au miel épicé",
            type: "Moderne",
            description: "Miel, épices (cannelle, badiane), vinaigre, fond",
            accord: "Sucré-épicé contemporain"
          }
        ],

        accompagnements: [
          {
            type: "Fruits",
            suggestions: [
              "Pommes fondantes caramélisées",
              "Orange sanguine rôtie",
              "Pruneaux d'Agen au vin",
              "Figues au miel",
              "Cerises au porto"
            ]
          },
          {
            type: "Légumes automnaux",
            suggestions: [
              "Navets glacés",
              "Choux de Bruxelles aux marrons",
              "Purée de céleri-rave",
              "Courge butternut rôtie"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Pommes de terre sarladaises",
              "Gratin dauphinois",
              "Riz sauvage",
              "Polenta crémeuse"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges corsés",
            suggestions: ["Côte-Rôtie", "Hermitage", "Bandol"],
            temperature: "17-18°C",
            notes: "Puissance et structure"
          },
          {
            type: "Vins du Sud-Ouest",
            suggestions: ["Cahors", "Madiran", "Fronton"],
            temperature: "17-18°C",
            notes: "Tanins robustes terroir"
          }
        ],

        erreursCourantes: [
          "Cuisson trop rapide : gras non fondu, peau molle",
          "Ne pas piquer la peau : canard baignant dans sa graisse",
          "Oublier d'arroser : dessèchement de la chair",
          "Servir immédiatement : découpe difficile, jus perdu",
          "Jeter le gras : c'est de l'or culinaire (conserver pour cuisson)"
        ],

        anecdotes: "Le canard à l'orange fut popularisé par la Tour d'Argent à Paris, qui numérote chaque canard servi depuis 1890 (aujourd'hui > 1 million). Le 'Canard au sang' (pressed duck) nécessite une presse spéciale pour extraire le sang des os. En Chine, le canard laqué de Pékin est préparé depuis la dynastie Yuan (XIIIe siècle) : peau ultra-croustillante servie dans crêpes avec sauce hoisin."
      },

      confit_de_canard: {
        anatomie: "Cuisses de canard confites dans leur graisse. Technique ancestrale de conservation. Chair ultra-tendre qui se détache de l'os. Peau devenant croustillante au réchauffage. Spécialité emblématique du Sud-Ouest (Gascogne, Périgord, Quercy).",

        caracteristiques: {
          tendrete: "10/10 - Fondant extrême",
          saveur: "10/10 - Concentré de saveurs",
          persillage: "8/10 - Très riche en gras"
        },

        techniquesChef: [
          "Cuisson confite : 90-95°C dans graisse pendant 2-4h",
          "Saler les cuisses 12-24h avant (gros sel, aromates)",
          "Conservation : 6 mois immergé dans graisse au frais",
          "Réchauffage : poêle ou four 200°C jusqu'à peau croustillante",
          "Technique traditionnelle : cuisson très lente 6-8h à 80°C",
          "La chair doit se détacher de l'os sans effort"
        ],

        sauces: [
          {
            nom: "Jus de canard concentré",
            type: "Au naturel",
            description: "Jus de cuisson réduit, échalotes, persil",
            accord: "Simplicité qui respecte le confit"
          },
          {
            nom: "Sauce aux cèpes",
            type: "Forestière",
            description: "Cèpes, ail, persil, vin blanc, graisse de canard",
            accord: "Mariage Sud-Ouest parfait"
          },
          {
            nom: "Gastrique au miel",
            type: "Aigre-douce",
            description: "Miel, vinaigre de Xérès, fond de canard",
            accord: "Contraste sucré pour gras"
          },
          {
            nom: "Persillade à l'ail",
            type: "Rustique",
            description: "Persil plat, ail haché, huile d'olive",
            accord: "Fraîcheur simple et efficace"
          }
        ],

        accompagnements: [
          {
            type: "Pommes de terre",
            suggestions: [
              "Pommes sarladaises (à la graisse de canard)",
              "Pommes de terre sautées persillées",
              "Gratin dauphinois",
              "Pommes de terre rôties"
            ]
          },
          {
            type: "Spécialités Sud-Ouest",
            suggestions: [
              "Haricots tarbais",
              "Cèpes poêlés à l'ail",
              "Salade de gésiers",
              "Cassoulet (avec haricots blancs)"
            ]
          },
          {
            type: "Salades",
            suggestions: [
              "Salade landaise (gésiers, magret, foie gras)",
              "Mesclun aux noix et vinaigre de framboise",
              "Roquette, parmesan"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges du Sud-Ouest",
            suggestions: ["Cahors", "Madiran", "Bergerac"],
            temperature: "16-18°C",
            notes: "Tanins pour tenir face au gras"
          },
          {
            type: "Blancs moelleux",
            suggestions: ["Jurançon", "Monbazillac", "Pacherenc du Vic-Bilh"],
            temperature: "10-12°C",
            notes: "Contraste sucré-gras surprenant"
          }
        ],

        erreursCourantes: [
          "Cuisson trop courte : chair encore dure",
          "Graisse insuffisante : cuisses non immergées, dessèchement",
          "Réchauffage micro-ondes : peau molle et caoutchouteuse",
          "Jeter la graisse de confit : perte d'or culinaire",
          "Conservation hors graisse : oxydation et dessèchement"
        ],

        anecdotes: "Le confit est né au Moyen Âge comme méthode de conservation sans réfrigération. En Gascogne, chaque famille préparait ses confits à l'automne pour l'hiver. La graisse de canard était réutilisée d'année en année, bonifiant avec le temps. Le cassoulet toulousain, castelnaudary ou carcassonnais intègre obligatoirement du confit. Record : un confit correctement conservé peut durer 2-3 ans."
      },

      dinde_entiere: {
        anatomie: "Dinde entière femelle 3-6kg, mâle (dindon) 6-10kg. Gallinacé originaire d'Amérique. Chair blanche maigre (blanc) et brune (cuisses). Très volumineuse, nécessite four adapté. Emblème de Thanksgiving USA et repas de Noël.",

        caracteristiques: {
          tendrete: "7/10 - Peut être sèche si mal cuite",
          saveur: "7/10 - Douce et délicate",
          persillage: "2/10 - Très maigre"
        },

        techniquesChef: [
          "Cuisson lente impérative : 3-4h à 160-170°C (20 min/kg)",
          "Barder les blancs avec lard ou beurrer généreusement sous peau",
          "Farcir la cavité : pain, saucisse, marrons, aromates",
          "Arroser toutes les 30 minutes (essentiel pour éviter dessèchement)",
          "Température finale : 74°C blanc, 82°C cuisse",
          "Couvrir papier alu si peau dore trop vite",
          "Repos 30-45 minutes avant découpe"
        ],

        sauces: [
          {
            nom: "Sauce aux canneberges (cranberry)",
            type: "Américaine traditionnelle",
            description: "Canneberges, sucre, orange, cannelle",
            accord: "Acidité fruitée emblématique Thanksgiving"
          },
          {
            nom: "Gravy (sauce américaine)",
            type: "Sauce au jus",
            description: "Jus de cuisson, farine, bouillon, aromates",
            accord: "Onctuosité pour viande sèche"
          },
          {
            nom: "Sauce aux marrons",
            type: "Française festive",
            description: "Marrons, crème, porto, fond de volaille",
            accord: "Richesse automnale pour Noël"
          },
          {
            nom: "Beurre aux herbes",
            type: "Simple",
            description: "Beurre, persil, estragon, citron, sel",
            accord: "Fraîcheur herbacée"
          }
        ],

        accompagnements: [
          {
            type: "Accompagnements US Thanksgiving",
            suggestions: [
              "Purée de pommes de terre crémeuse",
              "Farce au pain et saucisse",
              "Patates douces confites (sweet potato casserole)",
              "Haricots verts amandine",
              "Maïs au beurre"
            ]
          },
          {
            type: "Accompagnements français Noël",
            suggestions: [
              "Marrons entiers braisés",
              "Gratin dauphinois",
              "Choux de Bruxelles aux lardons",
              "Purée de céleri-rave",
              "Pain d'épices"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs amples",
            suggestions: ["Meursault", "Châteauneuf-du-Pape blanc", "Hermitage blanc"],
            temperature: "12-14°C",
            notes: "Corps pour grande pièce festive"
          },
          {
            type: "Rouges légers",
            suggestions: ["Pinot Noir", "Beaujolais Cru", "Chinon"],
            temperature: "15-17°C",
            notes: "Souplesse pour viande délicate"
          },
          {
            type: "Champagne",
            suggestions: ["Brut", "Blanc de Blancs"],
            temperature: "8-10°C",
            notes: "Bulles festives pour fêtes"
          }
        ],

        erreursCourantes: [
          "Cuisson trop rapide/haute température : blancs ultra-secs",
          "Ne pas barder : dessèchement garanti des blancs",
          "Oublier d'arroser : catastrophe assurée",
          "Farce non cuite à cœur (74°C) : risque sanitaire",
          "Découper immédiatement : perte massive de jus"
        ],

        anecdotes: "La dinde de Thanksgiving remonte aux pèlerins du Mayflower (1621). Benjamin Franklin voulait en faire l'oiseau national USA (au lieu de l'aigle). Le président US gracie chaque année une dinde avant Thanksgiving. Record : la plus grosse dinde pesait 39kg (1989). En France, 2/3 des dindes sont consommées à Noël. Une dinde Label Rouge pèse minimum 3,5kg à 140 jours."
      },

      escalope_de_dinde: {
        anatomie: "Fine tranche de blanc de dinde (poitrine), similaire à escalope de veau mais moins chère. Pèse 100-150g, épaisseur 0,5-1cm. Chair blanche très maigre (2% lipides), texture fine. Alternative économique au veau.",

        caracteristiques: {
          tendrete: "8/10 - Tendre si bien cuite",
          saveur: "6/10 - Neutre et douce",
          persillage: "1/10 - Extrêmement maigre"
        },

        techniquesChef: [
          "Cuisson ultra-rapide impérative : 2-3 min par face",
          "Fariner légèrement pour protection",
          "Panure optionnelle : farine, œuf, chapelure",
          "Température 74°C maximum (sèche au-delà)",
          "Matière grasse obligatoire : beurre ou huile",
          "Aplatir uniformément pour cuisson égale",
          "Ne jamais presser pendant cuisson"
        ],

        sauces: [
          {
            nom: "Sauce à la crème et champignons",
            type: "Crémeuse classique",
            description: "Champignons, crème, vin blanc, persil",
            accord: "Onctuosité pour viande maigre"
          },
          {
            nom: "Sauce citron-câpres",
            type: "Légère",
            description: "Citron, câpres, beurre, persil, vin blanc",
            accord: "Fraîcheur acidulée"
          },
          {
            nom: "Sauce moutarde miel",
            type: "Sucrée-salée",
            description: "Moutarde, miel, crème, vinaigre cidre",
            accord: "Équilibre doux-piquant"
          },
          {
            nom: "Sauce tomate basilic",
            type: "Méditerranéenne",
            description: "Tomates, basilic, ail, huile d'olive",
            accord: "Légèreté estivale"
          }
        ],

        accompagnements: [
          {
            type: "Féculents",
            suggestions: [
              "Pâtes (spaghetti, pennes, tagliatelles)",
              "Riz pilaf nature ou aux herbes",
              "Purée de pommes de terre légère",
              "Quinoa",
              "Pommes de terre vapeur"
            ]
          },
          {
            type: "Légumes",
            suggestions: [
              "Haricots verts vapeur",
              "Courgettes sautées",
              "Ratatouille",
              "Brocolis",
              "Carottes Vichy"
            ]
          },
          {
            type: "Salades",
            suggestions: [
              "Salade verte vinaigrette",
              "Tomates mozzarella",
              "Roquette parmesan"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs légers",
            suggestions: ["Muscadet", "Entre-deux-Mers", "Bourgogne Aligoté"],
            temperature: "10-12°C",
            notes: "Fraîcheur pour viande neutre"
          },
          {
            type: "Rosés",
            suggestions: ["Côtes de Provence", "Tavel", "Anjou"],
            temperature: "10-12°C",
            notes: "Polyvalence pour toutes sauces"
          }
        ],

        erreursCourantes: [
          "Surcuisson : escalope sèche et caoutchouteuse",
          "Feu trop fort : extérieur brûlé, intérieur cru",
          "Pas de matière grasse : adhère et se déchire",
          "Presser avec spatule : expulse tout le jus",
          "Épaisseur irrégulière : cuisson inégale"
        ],

        anecdotes: "L'escalope de dinde s'est démocratisée en France dans les années 1970-80 comme alternative bon marché au veau (3x moins cher). Elle représente aujourd'hui 70% de la consommation de dinde en France. Le 'cordon bleu' industriel est majoritairement fait de dinde. Les bodybuilders en raffolent : 30g protéines/100g avec seulement 1g lipides."
      }
    }
  },

  gibier: {
    histoire: "Le gibier désigne les animaux sauvages chassés pour leur viande : grands gibiers (cervidés, sangliers) et gibiers à plumes (faisans, perdrix). La chasse est encadrée légalement (saisons, espèces, quotas). Le faisandage (maturation) développe les arômes. En France, 90% du gibier consommé provient d'élevages cynégétiques.",

    nutrition: "Viande extrêmement maigre (1-3% lipides), très riche en protéines (25-30g/100g), fer héminique, zinc, vitamines B. Goût prononcé dû aux myoglobines élevées (vie sauvage active). Valeur calorique faible : 100-120 kcal/100g. Source exceptionnelle de fer pour sportifs et anémiques.",

    selection: {
      age: "Jeunes animaux plus tendres : marcassin vs sanglier, faon vs cerf. Vérifier la denture si possible.",
      aspect: "Chair rouge foncé à brun, jamais grisâtre. Odeur forte mais agréable, forestière. Peau sans déchirure.",
      provenance: "Privilégier gibier sauvage chassé ou élevage semi-liberté. AOP Gibier des Cévennes.",
      saison: "Automne-hiver (septembre à février) : saison de chasse légale, viande au meilleur goût.",
      qualite: "Éviscération rapide post-chasse cruciale. Faisandage contrôlé 3-7 jours selon espèce."
    },

    conservation: "Gibier frais : 2-3 jours maximum à 2°C. Faisandage : suspendre 3-7 jours à 4-8°C (refroidir rapidement). Congélation : -18°C jusqu'à 8-10 mois. Marinade : 12-48h pour attendrir et parfumer.",

    preparation: {
      temperaturage: "Sortir 1h avant cuisson pour température uniforme.",
      marinade: "Quasi-obligatoire : vin rouge, genièvre, thym, laurier, aromates 12-48h. Attendrit et parfume.",
      bardage: "ESSENTIEL car très maigre : barder de lard ou larder pour éviter dessèchement.",
      parage: "Retirer membranes argentées (dures), tendons apparents. Découpe soignée.",
      securite: "Cuisson minimum 63°C pour trichinose (sanglier). Vérifier réglementation locale."
    },

    cuts: {
      filet_de_cerf: {
        anatomie: "Filet (psoas) du cerf, muscle le plus tendre. Viande rouge foncée, goût prononcé de gibier. Cerf (mâle) ou biche (femelle), chassés en automne. Chair maigre (2% lipides), texture fine. Poids 300-600g le filet. Noble pièce de la venaison.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "10/10 - Goût de gibier intense",
          persillage: "1/10 - Extrêmement maigre"
        },

        techniquesChef: [
          "Cuisson rosée impérative : 52-54°C comme bœuf saignant",
          "Barder ou larder pour compenser maigreur",
          "Mariner 12-24h : vin rouge, genièvre, baies, aromates",
          "Poêle : saisir vif 2-3 min/côté, finir four 180°C 8-10 min",
          "Ne jamais dépasser 58°C : devient sec instantanément",
          "Repos 10 minutes impératif",
          "Trancher finement contre les fibres"
        ],

        sauces: [
          {
            nom: "Sauce grand veneur",
            type: "Grande sauce française",
            description: "Poivrade (vinaigre, poivre), groseilles, fond de gibier",
            accord: "Sauce royale pour gibier noble"
          },
          {
            nom: "Sauce aux airelles",
            type: "Scandinave",
            description: "Airelles, sucre, vin rouge, cannelle",
            accord: "Acidité fruitée nordique"
          },
          {
            nom: "Sauce au genièvre",
            type: "Forestière",
            description: "Baies de genièvre, crème, cognac, fond gibier",
            accord: "Arôme résineux en harmonie"
          },
          {
            nom: "Réduction porto-cassis",
            type: "Fruitée",
            description: "Porto, cassis, fond de gibier, beurre",
            accord: "Douceur fruitée pour puissance"
          }
        ],

        accompagnements: [
          {
            type: "Accompagnements automnaux",
            suggestions: [
              "Purée de céleri-rave truffée",
              "Châtaignes braisées",
              "Courge butternut rôtie",
              "Choux de Bruxelles aux lardons",
              "Potimarron confit"
            ]
          },
          {
            type: "Champignons forestiers",
            suggestions: [
              "Cèpes poêlés",
              "Girolles au beurre",
              "Trompettes de la mort",
              "Morilles"
            ]
          },
          {
            type: "Fruits",
            suggestions: [
              "Poires pochées au vin",
              "Pommes caramélisées",
              "Figues rôties"
            ]
          }
        ],

        vins: [
          {
            type: "Grands rouges de Bourgogne",
            suggestions: ["Chambertin", "Gevrey-Chambertin", "Pommard"],
            temperature: "16-18°C",
            notes: "Élégance pour gibier noble"
          },
          {
            type: "Rouges puissants",
            suggestions: ["Hermitage", "Côte-Rôtie", "Châteauneuf-du-Pape"],
            temperature: "17-18°C",
            notes: "Puissance en harmonie"
          }
        ],

        erreursCourantes: [
          "Surcuisson (> 60°C) : viande sèche et dure comme cuir",
          "Ne pas barder : dessèchement garanti",
          "Oublier marinade : goût trop sauvage",
          "Découper immédiatement : perte de tout le jus",
          "Cuisson uniforme sans repos : filet ruiné"
        ],

        anecdotes: "La chasse au cerf était réservée à la noblesse jusqu'à la Révolution. Louis XIV et Napoléon étaient chasseurs passionnés. Le cerf d'Écosse (red deer) et le wapiti américain sont cousins du cerf européen. La viande de gibier sauvage ne peut être vendue qu'en boucherie spécialisée avec certification vétérinaire. Un filet de cerf peut atteindre 80-100€/kg."
      },

      filet_de_chevreuil: {
        anatomie: "Filet de chevreuil, petit cervidé (20-30kg). Viande rouge très foncée, goût prononcé mais plus fin que le cerf. Chair ultra-maigre et tendre. Poids 150-300g le filet. Chevreuil chassé octobre-février. Plus rare et recherché que le cerf.",

        caracteristiques: {
          tendrete: "9/10 - Extrêmement tendre",
          saveur: "10/10 - Intense, moins fort que cerf",
          persillage: "1/10 - Quasi aucun gras"
        },

        techniquesChef: [
          "Cuisson express rosé : 50-52°C maximum",
          "Barder impérativement (lard fumé ou bardière)",
          "Marinade courte : 6-12h (moins fort que cerf)",
          "Poêle très chaude : 2 min par face + repos",
          "Alternative four : 200°C 6-8 minutes total",
          "La moindre surcuisson est fatale",
          "Servir immédiatement après repos"
        ],

        sauces: [
          {
            nom: "Sauce poivrade",
            type: "Classique gibier",
            description: "Vinaigre, poivre mignonette, échalotes, vin rouge, fond gibier",
            accord: "Référence absolue pour chevreuil"
          },
          {
            nom: "Sauce aux myrtilles",
            type: "Montagnarde",
            description: "Myrtilles sauvages, vin rouge, sucre, vinaigre",
            accord: "Acidité fruitée des sous-bois"
          },
          {
            nom: "Sauce aux baies de genévrier",
            type: "Forestière",
            description: "Genièvre écrasé, cognac, crème, fond",
            accord: "Arômes résineuses de forêt"
          },
          {
            nom: "Réduction vin rouge et cassis",
            type: "Fruitée intense",
            description: "Vin rouge corsé, cassis, beurre, fond gibier",
            accord: "Fruit noir puissant"
          }
        ],

        accompagnements: [
          {
            type: "Purées nobles",
            suggestions: [
              "Purée de céleri-rave",
              "Purée de topinambour",
              "Purée de panais",
              "Purée de châtaignes"
            ]
          },
          {
            type: "Champignons sauvages",
            suggestions: [
              "Cèpes de Bordeaux",
              "Girolles",
              "Pieds de mouton",
              "Trompettes de la mort"
            ]
          },
          {
            type: "Légumes racines",
            suggestions: [
              "Carottes violettes rôties",
              "Navets boule d'or",
              "Betteraves au four",
              "Salsifis au beurre"
            ]
          }
        ],

        vins: [
          {
            type: "Bourgogne Grands Crus",
            suggestions: ["Romanée-Conti", "Richebourg", "Chambertin"],
            temperature: "16-17°C",
            notes: "Nec plus ultra pour gibier d'exception"
          },
          {
            type: "Vallée du Rhône",
            suggestions: ["Hermitage", "Côte-Rôtie", "Cornas"],
            temperature: "17-18°C",
            notes: "Syrah puissante pour gibier"
          }
        ],

        erreursCourantes: [
          "Cuisson au-delà de rosé : gaspillage tragique",
          "Marinade trop longue : masque finesse naturelle",
          "Ne pas barder : sécheresse absolue",
          "Sauce trop lourde : écrase saveur délicate",
          "Portions trop grosses : 100-120g suffisent"
        ],

        anecdotes: "Le chevreuil était le gibier préféré de la noblesse médiévale française. Plus fin que le cerf, il était réservé aux tables royales. La légende de saint Hubert raconte sa conversion après avoir vu un crucifix entre les bois d'un cerf (en réalité probablement un chevreuil). Aujourd'hui, le chevreuil est le gibier le plus chassé en France (500 000/an) mais sa commercialisation reste rare et chère."
      },

      roti_de_sanglier: {
        anatomie: "Rôti prélevé dans l'épaule ou cuisse du sanglier (suidé sauvage). Viande rouge foncée, texture dense. Goût puissant de gibier, plus fort que porc. Sanglier mâle adulte (100-150kg) ou marcassin jeune (< 6 mois, plus tendre). Chair persillée et ferme.",

        caracteristiques: {
          tendrete: "6/10 adulte - 8/10 marcassin",
          saveur: "10/10 - Très puissante, sauvage",
          persillage: "6/10 - Gras intramusculaire"
        },

        techniquesChef: [
          "Marinade longue impérative : 24-48h vin rouge, aromates",
          "Cuisson lente : 150°C pendant 2-3h pour adulte",
          "Barder et ficeler le rôti",
          "Arroser fréquemment avec marinade",
          "Température finale : 68-72°C (plus que porc domestique)",
          "Marcassin : cuisson comme rôti de porc (65°C)",
          "Repos 20 minutes minimum"
        ],

        sauces: [
          {
            nom: "Sauce grand veneur",
            type: "Grande classique",
            description: "Poivrade, groseilles, sang de gibier (optionnel)",
            accord: "Référence historique pour sanglier"
          },
          {
            nom: "Sauce aux pruneaux d'Agen",
            type: "Sud-Ouest",
            description: "Pruneaux, armagnac, fond de gibier, crème",
            accord: "Douceur fruitée qui adoucit puissance"
          },
          {
            nom: "Sauce aux champignons sauvages",
            type: "Forestière",
            description: "Cèpes, girolles, vin rouge, crème, thym",
            accord: "Univers forestier complet"
          },
          {
            nom: "Sauce au vin rouge et chocolat",
            type: "Moderne",
            description: "Vin rouge corsé, chocolat noir, fond gibier, épices",
            accord: "Amertume chocolat pour gibier fort"
          }
        ],

        accompagnements: [
          {
            type: "Fruits d'automne",
            suggestions: [
              "Pommes au four caramélisées",
              "Poires pochées au vin rouge",
              "Pruneaux à l'armagnac",
              "Compote de coings",
              "Figues rôties"
            ]
          },
          {
            type: "Légumes mijotés",
            suggestions: [
              "Choux rouge braisé aux pommes",
              "Choucroute",
              "Lentilles vertes du Puy",
              "Courge rôtie",
              "Marrons braisés"
            ]
          },
          {
            type: "Féculents copieux",
            suggestions: [
              "Polenta crémeuse",
              "Spätzle",
              "Pommes de terre rôties",
              "Purée de céleri-rave"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges très corsés",
            suggestions: ["Bandol", "Madiran", "Cahors"],
            temperature: "17-18°C",
            notes: "Tanins robustes pour gibier puissant"
          },
          {
            type: "Vallée du Rhône Nord",
            suggestions: ["Hermitage", "Côte-Rôtie", "Cornas"],
            temperature: "17-18°C",
            notes: "Syrah intense en harmonie"
          }
        ],

        erreursCourantes: [
          "Pas de marinade : goût trop sauvage, viande dure",
          "Cuisson trop rapide : texture fibreuse",
          "Sous-cuisson : risque trichinose (sanglier sauvage)",
          "Sauce trop douce : déséquilibre avec viande forte",
          "Vieux sanglier (> 3 ans) sans préparation : immangeable"
        ],

        anecdotes: "Le sanglier était déjà chassé au Paléolithique. Dans la mythologie grecque, le sanglier d'Érymanthe fut capturé par Héraclès (4e travail). Obélix en est amateur légendaire. Les Gaulois organisaient des festins au sanglier. Aujourd'hui, 500 000 sangliers sont chassés annuellement en France (régulation nécessaire). Le marcassin (< 6 mois) est un mets délicat, l'adulte demande expertise culinaire."
      },

      rable_de_lievre: {
        anatomie: "Râble = dos du lièvre (lombes sans pattes). Petit morceau noble de 200-300g. Viande rouge très foncée, texture fine. Goût de gibier le plus prononcé. Lièvre variable (3-5kg), cousin sauvage du lapin. Chair maigre, nécessite bardage.",

        caracteristiques: {
          tendrete: "8/10 - Tendre si rosé",
          saveur: "10/10 - Gibier le plus puissant",
          persillage: "1/10 - Quasiment pas de gras"
        },

        techniquesChef: [
          "Cuisson rosée obligatoire : 54-56°C",
          "Barder entièrement avec lard fumé",
          "Marinade courte : 6-12h (trop long masque finesse)",
          "Poêle + four : saisir puis 180°C 12-15 min",
          "Le sang peut servir à lier la sauce (royale)",
          "Repos 8-10 minutes crucial",
          "Lever les filets après cuisson (désosser)"
        ],

        sauces: [
          {
            nom: "Sauce royale",
            type: "Haute cuisine française",
            description: "Sang de lièvre, foie, cognac, échalotes, vin rouge",
            accord: "Apothéose gastronomique, technique complexe"
          },
          {
            nom: "Sauce poivrade au chocolat",
            type: "Moderne",
            description: "Poivrade classique, chocolat noir 70%, baies",
            accord: "Amertume pour contrebalancer puissance"
          },
          {
            nom: "Sauce aux groseilles",
            type: "Aigre-douce",
            description: "Groseilles, vin rouge, vinaigre, sucre, fond",
            accord: "Acidité fruitée nécessaire"
          },
          {
            nom: "Sauce diane",
            type: "Classique gibier",
            description: "Crème, poivre, cognac, fond de gibier",
            accord: "Onctuosité crémeuse"
          }
        ],

        accompagnements: [
          {
            type: "Purées fines",
            suggestions: [
              "Purée de céleri-rave truffée",
              "Purée de panais",
              "Purée de châtaignes",
              "Purée de topinambour"
            ]
          },
          {
            type: "Pâtes fraîches",
            suggestions: [
              "Tagliatelles au beurre",
              "Pappardelle",
              "Spätzle",
              "Polenta crémeuse"
            ]
          },
          {
            type: "Légumes nobles",
            suggestions: [
              "Cèpes poêlés au beurre",
              "Girolles persillées",
              "Choux de Bruxelles",
              "Carottes glacées"
            ]
          }
        ],

        vins: [
          {
            type: "Grands Bourgogne",
            suggestions: ["Chambertin", "Clos de Vougeot", "Richebourg"],
            temperature: "16-17°C",
            notes: "Seuls vins à hauteur du lièvre"
          },
          {
            type: "Hermitage ou Côte-Rôtie",
            suggestions: ["Hermitage rouge", "Côte-Rôtie Côte Brune"],
            temperature: "17-18°C",
            notes: "Syrah de garde pour gibier puissant"
          }
        ],

        erreursCourantes: [
          "Surcuisson (> 60°C) : catastrophe, viande sèche",
          "Ne pas barder : dessèchement total",
          "Marinade trop longue : perte de finesse",
          "Peur du rosé : le lièvre doit être rosé",
          "Sauce trop simple : ne tient pas face à la puissance"
        ],

        anecdotes: "Le lièvre à la royale est considéré comme un des sommets de la gastronomie française. Sénateur Couteaux (XXe siècle) en fit une recette mythique (3 jours de préparation, 20 étapes). Le lièvre était gibier royal au Moyen Âge. Contrairement au lapin d'élevage, le lièvre est toujours sauvage (chasse uniquement). Un lièvre pèse 3-5kg, le lapin de garenne 1-2kg. Population en déclin en France (-50% en 30 ans)."
      },

      faisan_entier: {
        anatomie: "Faisan entier (gallinacé), oiseau gibier 1-1,5kg. Mâle coloré à longue queue, femelle brune plus petite. Chair rosée, texture fine. Goût prononcé de gibier mais moins fort que gibier à poil. Élevage ou sauvage (chasse octobre-janvier). Faisandage traditionnel (maturation).",

        caracteristiques: {
          tendrete: "7/10 - Chair ferme",
          saveur: "9/10 - Gibier marqué mais raffiné",
          persillage: "2/10 - Maigre"
        },

        techniquesChef: [
          "Barder entièrement avec lard pour éviter dessèchement",
          "Cuisson rôti : 180°C pendant 45-55 min (jeune)",
          "Arroser toutes les 10 minutes impératif",
          "Farcir optionnel : foie gras, raisins, armagnac",
          "Température finale : 68-72°C (cuisse)",
          "Faisandage traditionnel : suspendre 3-5 jours (goût fort)",
          "Repos 10-15 minutes avant découpe"
        ],

        sauces: [
          {
            nom: "Sauce Périgueux truffée",
            type: "Grande cuisine",
            description: "Madère, truffe noire, demi-glace, foie gras",
            accord: "Luxe pour faisan noble"
          },
          {
            nom: "Sauce au raisin",
            type: "Classique gibier",
            description: "Raisins blancs, vin blanc, cognac, fond volaille",
            accord: "Douceur fruitée élégante"
          },
          {
            nom: "Sauce au porto",
            type: "Sucrée-vinée",
            description: "Porto rouge, échalotes, fond de gibier, beurre",
            accord: "Richesse pour oiseau rôti"
          },
          {
            nom: "Sauce au chou et lard",
            type: "Rustique alsacienne",
            description: "Chou braisé, lardons, vin blanc, genièvre",
            accord: "Tradition choucroute au faisan"
          }
        ],

        accompagnements: [
          {
            type: "Légumes automnaux",
            suggestions: [
              "Choux de Bruxelles aux marrons",
              "Courge butternut rôtie",
              "Chou rouge braisé aux pommes",
              "Céleri braisé",
              "Endives confites"
            ]
          },
          {
            type: "Fruits et compotes",
            suggestions: [
              "Raisins rôtis au four",
              "Pommes caramélisées",
              "Compote de coings",
              "Poires pochées"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Polenta crémeuse",
              "Purée de châtaignes",
              "Spätzle",
              "Pommes de terre rôties"
            ]
          }
        ],

        vins: [
          {
            type: "Bourgogne Pinot Noir",
            suggestions: ["Gevrey-Chambertin", "Vosne-Romanée", "Nuits-Saint-Georges"],
            temperature: "16-17°C",
            notes: "Élégance pour oiseau noble"
          },
          {
            type: "Bordeaux",
            suggestions: ["Pomerol", "Saint-Émilion", "Margaux"],
            temperature: "17-18°C",
            notes: "Structure pour gibier à plume"
          }
        ],

        erreursCourantes: [
          "Cuisson sans bardage : faisan sec et immangeable",
          "Oublier d'arroser : dessèchement de la poitrine",
          "Surcuisson : chair sèche au-delà de 75°C",
          "Faisandage excessif (> 7 jours) : goût trop fort",
          "Jeune faisan traité comme vieux : temps différents"
        ],

        anecdotes: "Le faisan vient de Colchide (Géorgie) et fut introduit en Europe par les Grecs. Son nom vient du fleuve Phase (Phasis). Les Romains le considéraient comme mets d'empereur. Au Moyen Âge, le 'serment du faisan' était prêté sur un faisan rôti. Le faisandage (maturation au grand air) développait un goût puissant prisé au XIXe siècle. Aujourd'hui, 90% des faisans sont d'élevage pour la chasse. Un faisan sauvage vole à 80 km/h."
      },

      // ==================== NOUVEAUX GIBIERS ====================

      perdrix: {
        anatomie: "Petit gallinacé (350-450g), deux espèces principales : perdrix grise (plus fine) et perdrix rouge (plus grosse et charnue). Chair rosée à brune, texture ferme. Gibier à plume très prisé en France, chassé d'octobre à janvier. La perdrix grise est considérée comme plus délicate gustativement.",

        caracteristiques: {
          tendrete: "7/10 - Tendre si jeune",
          saveur: "9/10 - Goût gibier marqué mais fin",
          persillage: "2/10 - Maigre",
          prix: "Élevé (40-60€/kg)"
        },

        techniquesChef: [
          "Barder systématiquement avec du lard gras",
          "Faisandage léger : 2-4 jours suspendues non plumées",
          "Cuisson rôtie : 200°C 20-25 min pour une jeune perdrix",
          "Vérifier la température : 65-68°C à la cuisse",
          "Pour une vieille perdrix : braisage ou salmis",
          "Les suprêmes peuvent se cuire rosés (58-60°C)",
          "Repos 10 minutes impératif avant découpe"
        ],

        sauces: [
          {
            nom: "Sauce salmis",
            type: "Grande sauce classique",
            description: "Carcasses broyées, vin rouge, échalotes, fond de gibier, foie haché",
            accord: "La sauce référence pour perdrix et bécasse"
          },
          {
            nom: "Sauce aux raisins chasselas",
            type: "Fruitée automnale",
            description: "Raisins pelés, verjus, fond de volaille, beurre",
            accord: "Douceur fruitée pour équilibrer le gibier"
          },
          {
            nom: "Sauce au chou",
            type: "Rustique",
            description: "Chou vert braisé, lardons, genièvre, vin blanc",
            accord: "Accord terroir traditionnel"
          },
          {
            nom: "Jus corsé au genièvre",
            type: "Forestière",
            description: "Sucs dégacés, baies de genièvre, cognac, fond gibier",
            accord: "Arômes résineux en harmonie"
          }
        ],

        accompagnements: [
          {
            type: "Choux",
            suggestions: [
              "Chou vert braisé au lard",
              "Choux de Bruxelles aux marrons",
              "Chou rouge aux pommes",
              "Choucroute nouvelle"
            ]
          },
          {
            type: "Légumes racines",
            suggestions: [
              "Purée de céleri-rave",
              "Carottes Vichy",
              "Navets glacés",
              "Topinambours sautés"
            ]
          },
          {
            type: "Fruits d'automne",
            suggestions: [
              "Raisins rôtis",
              "Poires pochées",
              "Pommes caramélisées",
              "Coings confits"
            ]
          }
        ],

        vins: [
          {
            type: "Bourgogne Pinot Noir",
            suggestions: ["Gevrey-Chambertin", "Chambolle-Musigny", "Morey-Saint-Denis"],
            temperature: "15-17°C",
            notes: "Finesse bourguignonne pour perdrix grise"
          },
          {
            type: "Vallée du Rhône",
            suggestions: ["Crozes-Hermitage", "Saint-Joseph", "Gigondas"],
            temperature: "16-18°C",
            notes: "Syrah pour perdrix rouge plus puissante"
          }
        ],

        erreursCourantes: [
          "Ne pas barder : dessèchement garanti",
          "Confondre perdrix jeune et vieille : temps de cuisson différents",
          "Oublier le faisandage : goût moins développé",
          "Surcuire les suprêmes : sécheresse",
          "Servir sans repos : perte des jus"
        ],

        anecdotes: "La perdrix était le gibier favori des rois de France au Moyen Âge. François Ier en fit un symbole de chasse royale. Le proverbe 'perdre la perdreau' vient du fait que ce gibier était si précieux qu'en perdre un était un drame. La 'chartreuse de perdrix' est une recette monastique du XVIIe siècle où l'oiseau est braisé dans du chou avec les légumes du potager. En Espagne, la 'perdiz en escabeche' est un plat national."
      },

      caille: {
        anatomie: "Très petit gallinacé (150-200g). Chair rosée, délicate et tendre. Aujourd'hui majoritairement d'élevage (caille japonaise), la caille sauvage (Coturnix coturnix) est protégée en France. Se cuisine entière, souvent farcie ou bardée. Un oiseau par personne en entrée, deux en plat.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Fin et délicat, moins prononcé que d'autres gibiers",
          persillage: "2/10 - Peu de gras",
          prix: "Moyen (15-25€/kg)"
        },

        techniquesChef: [
          "Désosser par le dos pour farcir (technique délicate)",
          "Barder avec lard fin ou feuilles de vigne",
          "Cuisson rapide : 180°C 15-20 minutes",
          "Poêle + four : saisir puis finir 8-10 min à 200°C",
          "Peut se cuire rosée : 60-62°C",
          "Farce : foie gras, raisins, épices douces",
          "Repos 5 minutes suffit vu la petite taille"
        ],

        sauces: [
          {
            nom: "Sauce au raisin muscat",
            type: "Douce fruitée",
            description: "Raisins muscat, verjus, fond de volaille, beurre",
            accord: "Classique parfait pour caille"
          },
          {
            nom: "Jus au miel et épices",
            type: "Orientale",
            description: "Miel, ras-el-hanout, citron confit, fond",
            accord: "Exotisme délicat"
          },
          {
            nom: "Sauce aux figues",
            type: "Méditerranéenne",
            description: "Figues fraîches, porto, thym, fond",
            accord: "Douceur méditerranéenne"
          },
          {
            nom: "Beurre noisette aux câpres",
            type: "Simple",
            description: "Beurre noisette, câpres, persil, citron",
            accord: "Fraîcheur acidulée"
          }
        ],

        accompagnements: [
          {
            type: "Céréales",
            suggestions: [
              "Risotto aux cèpes",
              "Polenta crémeuse au parmesan",
              "Boulgour aux herbes",
              "Quinoa aux légumes grillés"
            ]
          },
          {
            type: "Légumes grillés",
            suggestions: [
              "Courgettes à la plancha",
              "Aubergines confites",
              "Poivrons rôtis",
              "Tomates cerises"
            ]
          },
          {
            type: "Salades",
            suggestions: [
              "Mesclun aux noix",
              "Roquette parmesan",
              "Salade de figues",
              "Jeunes pousses vinaigrette miel"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs aromatiques",
            suggestions: ["Condrieu", "Viognier", "Gewurztraminer"],
            temperature: "12-14°C",
            notes: "Finesse aromatique pour caille farcie"
          },
          {
            type: "Rouges légers",
            suggestions: ["Sancerre rouge", "Bourgogne Pinot Noir", "Beaujolais Crus"],
            temperature: "14-16°C",
            notes: "Légèreté pour ne pas écraser la caille"
          }
        ],

        erreursCourantes: [
          "Surcuire : la caille devient sèche très vite",
          "Ne pas barder l'élevage : chair trop maigre",
          "Portions trop petites : compter 2 cailles par personne en plat",
          "Sauce trop puissante : masque la finesse de la chair",
          "Oublier le repos : même court, il est nécessaire"
        ],

        anecdotes: "La caille était considérée comme un mets d'Aphrodite dans la Grèce antique, symbole d'amour. Les Égyptiens en faisaient des conserves au miel. En France, la 'caille en sarcophage' (caille en croûte) était servie aux banquets royaux. La caille japonaise d'élevage (Coturnix japonica) a été domestiquée au Japon au XIIe siècle. Ses œufs sont 5 fois plus petits que ceux de poule mais très nutritifs."
      },

      becasse: {
        anatomie: "Oiseau migrateur (250-400g), long bec caractéristique pour fouiller la terre. Chair rouge foncée, goût de gibier très prononcé. Considérée comme le roi des gibiers à plume. Chassée d'octobre à février. Se cuisine traditionnellement avec ses entrailles (la 'culotte' ou 'traîne') qui sont un délice recherché.",

        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "10/10 - Gibier le plus puissant des oiseaux",
          persillage: "3/10 - Légèrement grasse",
          prix: "Très élevé (80-150€/pièce)"
        },

        techniquesChef: [
          "Ne jamais vider : les intestins se cuisent avec (tradition)",
          "Faisandage essentiel : 4-8 jours suspendue par le bec",
          "Cuisson rôtie : 220°C 12-18 min selon taille",
          "Cuisson rosée obligatoire : 55-58°C",
          "Les intestins (traîne) se tartinent sur croûtons",
          "Flambage au cognac classique",
          "Repos 10 minutes puis découpe délicate"
        ],

        sauces: [
          {
            nom: "Salmis de bécasse",
            type: "Grande sauce classique",
            description: "Carcasses pilées, foie, cognac, vin rouge, truffe",
            accord: "L'apothéose de la cuisine de gibier"
          },
          {
            nom: "Sauce Riche (Escoffier)",
            type: "Haute cuisine",
            description: "Demi-glace, truffe, foie gras, madère",
            accord: "Luxe pour roi des gibiers"
          },
          {
            nom: "Croûtons à la traîne",
            type: "Traditionnelle",
            description: "Intestins hachés, foie, cognac, beurre sur pain grillé",
            accord: "Accompagnement rituel de la bécasse"
          }
        ],

        accompagnements: [
          {
            type: "Accompagnements nobles",
            suggestions: [
              "Truffe fraîche en lamelles",
              "Cèpes poêlés au beurre",
              "Pommes sarladaises",
              "Foie gras poêlé"
            ]
          },
          {
            type: "Simples",
            suggestions: [
              "Croûtons au beurre (pour la traîne)",
              "Salade frisée aux lardons",
              "Pommes de terre sautées"
            ]
          }
        ],

        vins: [
          {
            type: "Très grands Bourgogne",
            suggestions: ["Romanée-Conti", "La Tâche", "Richebourg", "Chambertin"],
            temperature: "16-17°C",
            notes: "Seuls vins à la hauteur de ce roi"
          },
          {
            type: "Grands Bordeaux",
            suggestions: ["Pétrus", "Château Margaux", "Latour"],
            temperature: "17-18°C",
            notes: "Grande garde pour grande bécasse"
          }
        ],

        erreursCourantes: [
          "Vider la bécasse : perte de l'essence même",
          "Pas de faisandage : goût insuffisamment développé",
          "Surcuire : tragédie gustative irréparable",
          "Vin médiocre : insulte au produit",
          "Jeter les croûtons à la traîne : péché capital"
        ],

        anecdotes: "La bécasse est considérée comme le summum de la gastronomie française depuis le Moyen Âge. Brillat-Savarin la qualifiait de 'gibier par excellence'. La tradition de manger les intestins vient du fait que la bécasse se nourrit de vers de terre et d'insectes, ses entrailles ayant un goût terreux prisé. Le record de faisandage était de 3 semaines au XIXe siècle ! Talleyrand faisait servir une bécasse par convive lors de ses dîners diplomatiques. Une bonne bécasse se reconnaît à son œil brillant et à son long bec."
      },

      canard_sauvage: {
        anatomie: "Canard colvert sauvage (1-1.4kg), plus petit et maigre que le canard d'élevage. Chair rouge foncée, goût gibier prononcé. Chassé de septembre à janvier. Les magrets sont fins et les cuisses peu charnues. Se distingue du canard domestique par sa saveur plus intense et sa texture plus ferme.",

        caracteristiques: {
          tendrete: "6/10 - Chair ferme",
          saveur: "9/10 - Goût sauvage prononcé",
          persillage: "4/10 - Moins gras que l'élevage",
          prix: "Moyen à élevé (25-40€/pièce)"
        },

        techniquesChef: [
          "Plumer soigneusement sans abîmer la peau",
          "Faisandage 3-5 jours recommandé",
          "Rôti entier : 200°C 25-35 min (cuisson rosée)",
          "Magrets : poêle côté peau d'abord, rosé (54-56°C)",
          "Cuisses : confites ou braisées longuement",
          "Arroser fréquemment si rôti",
          "Repos 10-15 minutes essentiel"
        ],

        sauces: [
          {
            nom: "Sauce bigarade",
            type: "Classique français",
            description: "Orange amère, vinaigre, fond de canard, Grand Marnier",
            accord: "Alliance classique canard-orange"
          },
          {
            nom: "Sauce aux cerises",
            type: "Fruitée",
            description: "Cerises, kirsch, fond de canard, poivre",
            accord: "Tradition germanique"
          },
          {
            nom: "Sauce au sang (salmis)",
            type: "Traditionnelle",
            description: "Sang du canard, vin rouge, échalotes, cognac",
            accord: "Puissance pour gibier sauvage"
          },
          {
            nom: "Sauce aux olives",
            type: "Provençale",
            description: "Olives noires, tomates, thym, vin blanc",
            accord: "Méditerranée et canard sauvage"
          }
        ],

        accompagnements: [
          {
            type: "Fruits",
            suggestions: [
              "Oranges confites",
              "Cerises au vinaigre",
              "Figues rôties",
              "Pommes caramélisées",
              "Navets au miel"
            ]
          },
          {
            type: "Légumes",
            suggestions: [
              "Choux rouges braisés",
              "Endives caramélisées",
              "Petits pois à la française",
              "Haricots verts au beurre"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Pommes sarladaises",
              "Gratin dauphinois",
              "Spätzle"
            ]
          }
        ],

        vins: [
          {
            type: "Bordeaux rive droite",
            suggestions: ["Pomerol", "Saint-Émilion", "Fronsac"],
            temperature: "17-18°C",
            notes: "Merlot pour le fruit et la rondeur"
          },
          {
            type: "Sud-Ouest",
            suggestions: ["Madiran", "Cahors", "Bergerac"],
            temperature: "16-18°C",
            notes: "Tannat ou Malbec pour le gibier"
          }
        ],

        erreursCourantes: [
          "Cuire comme un canard d'élevage : trop long, dessèche",
          "Oublier que c'est plus maigre : barder si nécessaire",
          "Pas de faisandage : goût moins développé",
          "Surcuire les magrets : rosé obligatoire",
          "Jeter les cuisses : excellentes confites"
        ],

        anecdotes: "Le canard colvert est l'ancêtre de tous les canards domestiques, domestiqué en Chine il y a 4000 ans. En France, la chasse au colvert était réservée aux nobles. Le 'canard au sang' (canard au press) du restaurant La Tour d'Argent à Paris numérote chaque canard servi depuis 1890 - plus d'un million ont été servis ! Le colvert peut voler jusqu'à 90 km/h et migrer sur 3000 km."
      },

      lapin_de_garenne: {
        anatomie: "Lapin sauvage (1-1.5kg), plus petit et plus maigre que le lapin d'élevage. Chair rose foncée, goût plus prononcé. Chassé de septembre à février. Se distingue du lièvre par sa taille inférieure et son goût moins fort. Excellentes cuisses, râbles (dos) fins et délicats.",

        caracteristiques: {
          tendrete: "7/10 - Plus ferme que l'élevage",
          saveur: "8/10 - Goût gibier présent mais accessible",
          persillage: "2/10 - Très maigre",
          prix: "Moyen (20-35€/pièce)"
        },

        techniquesChef: [
          "Faisandage léger : 2-3 jours (optionnel)",
          "Marinade recommandée : vin blanc, thym, laurier 12-24h",
          "Râbles : poêlés rosés (60-62°C) ou rôtis",
          "Cuisses : braisées, en gibelotte ou civet",
          "Lapin entier : cocotte 150°C 1h30-2h",
          "Toujours barder ou arroser : très maigre",
          "Repos 10 minutes pour les pièces rôties"
        ],

        sauces: [
          {
            nom: "Sauce chasseur",
            type: "Classique",
            description: "Champignons, échalotes, vin blanc, tomates, estragon",
            accord: "L'alliance parfaite avec le lapin"
          },
          {
            nom: "Sauce moutarde",
            type: "Traditionnelle française",
            description: "Moutarde de Dijon, crème, vin blanc, estragon",
            accord: "Grand classique de la cuisine bourgeoise"
          },
          {
            nom: "Gibelotte (sauce)",
            type: "Régionale",
            description: "Vin blanc, lardons, oignons, champignons",
            accord: "Plat complet mijoté traditionnel"
          },
          {
            nom: "Sauce aux pruneaux",
            type: "Sud-Ouest",
            description: "Pruneaux d'Agen, armagnac, fond de lapin",
            accord: "Douceur pour équilibrer le gibier"
          }
        ],

        accompagnements: [
          {
            type: "Légumes printaniers",
            suggestions: [
              "Petits pois à la française",
              "Carottes nouvelles glacées",
              "Navets primeurs",
              "Oignons grelots"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Pommes de terre sautées",
              "Tagliatelles fraîches",
              "Polenta molle",
              "Riz pilaf"
            ]
          },
          {
            type: "Champignons",
            suggestions: [
              "Champignons de Paris",
              "Girolles",
              "Cèpes",
              "Morilles"
            ]
          }
        ],

        vins: [
          {
            type: "Blancs secs",
            suggestions: ["Sancerre", "Pouilly-Fumé", "Chablis"],
            temperature: "10-12°C",
            notes: "Fraîcheur pour lapin sauce moutarde"
          },
          {
            type: "Rouges légers",
            suggestions: ["Chinon", "Bourgueil", "Saumur-Champigny"],
            temperature: "14-16°C",
            notes: "Cabernet Franc de Loire pour gibelotte"
          }
        ],

        erreursCourantes: [
          "Confondre avec le lièvre : cuisson différente",
          "Oublier de mouiller : sécheresse garantie",
          "Cuire les râbles comme les cuisses : temps différents",
          "Pas de matière grasse : chair trop maigre",
          "Cuisson trop forte : chair qui se défait"
        ],

        anecdotes: "Le lapin de garenne est originaire d'Espagne (Hispania vient de 'terre des lapins'). Introduit en France par les Romains, il a colonisé toute l'Europe. Il se distingue du lapin domestique par ses oreilles plus courtes et sa chair plus foncée. La myxomatose, introduite en 1952, a décimé 90% des populations. Le terrier d'un lapin de garenne peut avoir jusqu'à 50 entrées et abriter plusieurs familles."
      },

      marcassin: {
        anatomie: "Jeune sanglier de moins de 6 mois (5-15kg), reconnaissable à ses rayures sur le dos. Chair plus tendre et moins forte que le sanglier adulte. Goût intermédiaire entre porc et gibier. Les morceaux nobles sont le filet, le carré et le cuissot. La robe rayée disparaît vers 4-6 mois.",

        caracteristiques: {
          tendrete: "8/10 - Bien plus tendre que l'adulte",
          saveur: "7/10 - Gibier présent mais doux",
          persillage: "5/10 - Modérément persillé",
          prix: "Élevé (30-50€/kg)"
        },

        techniquesChef: [
          "Marinade courte : 12-24h suffisent (chair tendre)",
          "Cuisson rosée possible : 60-65°C (contrairement à l'adulte)",
          "Rôti : 180°C 20-25 min/kg",
          "Filet : poêlé rosé comme un filet mignon",
          "Carré : rôti avec os, présentation spectaculaire",
          "Arroser régulièrement pendant la cuisson",
          "Repos 15 minutes sous papier alu"
        ],

        sauces: [
          {
            nom: "Sauce aux airelles",
            type: "Scandinave",
            description: "Airelles, sucre, vin rouge, fond de gibier",
            accord: "Acidité qui sublime la tendreté"
          },
          {
            nom: "Sauce miel et épices",
            type: "Douce",
            description: "Miel, gingembre, cannelle, fond de veau",
            accord: "Douceur pour jeune gibier"
          },
          {
            nom: "Sauce grand veneur légère",
            type: "Classique adapté",
            description: "Poivrade allégée, groseilles, crème",
            accord: "Version douce pour marcassin"
          },
          {
            nom: "Jus aux champignons",
            type: "Forestière",
            description: "Cèpes, girolles, cognac, fond de veau",
            accord: "Harmonie forestière"
          }
        ],

        accompagnements: [
          {
            type: "Fruits",
            suggestions: [
              "Pommes au four",
              "Poires pochées",
              "Airelles fraîches",
              "Pruneaux à l'armagnac"
            ]
          },
          {
            type: "Légumes d'automne",
            suggestions: [
              "Purée de châtaignes",
              "Courge butternut rôtie",
              "Champignons des bois",
              "Chou rouge aux pommes"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Spätzle au beurre",
              "Polenta crémeuse",
              "Pommes noisettes"
            ]
          }
        ],

        vins: [
          {
            type: "Rouges moyennement corsés",
            suggestions: ["Saint-Joseph", "Crozes-Hermitage", "Gigondas"],
            temperature: "16-17°C",
            notes: "Moins puissant que pour sanglier adulte"
          },
          {
            type: "Bourgogne",
            suggestions: ["Pommard", "Volnay", "Savigny-lès-Beaune"],
            temperature: "15-17°C",
            notes: "Élégance pour viande délicate"
          }
        ],

        erreursCourantes: [
          "Traiter comme un sanglier adulte : trop de cuisson",
          "Marinade trop longue : masque la finesse",
          "Sauce trop puissante : écrase la délicatesse",
          "Cuisson bien cuite : gaspillage de tendreté",
          "Confondre avec porc : c'est bien du gibier"
        ],

        anecdotes: "Le marcassin était considéré comme un mets délicat dès le Moyen Âge, bien plus prisé que le sanglier adulte. À la cour de Versailles, on distinguait le 'marcassin en rayures' (< 3 mois), la 'bête rousse' (6-12 mois) et le 'ragot' (1-2 ans). Astérix et Obélix mangent des sangliers, mais les Gaulois préféraient en réalité le marcassin ! Le marcassin perd ses rayures vers 6 mois quand son pelage devient uniformément brun."
      },

      pigeon_ramier: {
        anatomie: "Grand pigeon sauvage (400-550g), aussi appelé palombe dans le Sud-Ouest. Chair rouge foncée, goût gibier marqué. Chassé de septembre à février, particulièrement dans les Pyrénées. Suprêmes charnus, cuisses fines. Le pigeon de ferme (pigeonneau) est plus tendre mais moins goûteux.",

        caracteristiques: {
          tendrete: "7/10 - Chair ferme mais tendre",
          saveur: "9/10 - Goût gibier intense",
          persillage: "3/10 - Relativement maigre",
          prix: "Moyen à élevé (15-30€/pièce)"
        },

        techniquesChef: [
          "Faisandage léger : 2-4 jours (optionnel)",
          "Barder les suprêmes si rôti entier",
          "Cuisson rosée obligatoire : 54-58°C",
          "Rôti entier : 220°C 15-20 minutes",
          "Suprêmes : poêlés 3-4 min par face",
          "Cuisses : confites ou braisées séparément",
          "Repos 10 minutes minimum"
        ],

        sauces: [
          {
            nom: "Salmis de palombe",
            type: "Grande sauce classique",
            description: "Carcasses pilées, vin rouge, échalotes, foie",
            accord: "Tradition du Sud-Ouest"
          },
          {
            nom: "Sauce aux cèpes",
            type: "Forestière",
            description: "Cèpes frais, armagnac, crème, fond",
            accord: "Harmonie landaise parfaite"
          },
          {
            nom: "Jus au foie gras",
            type: "Luxueuse",
            description: "Fond de pigeon monté au foie gras",
            accord: "Richesse pour oiseau noble"
          },
          {
            nom: "Sauce aux petits pois",
            type: "Printanière",
            description: "Petits pois, lardons, laitue, fond de volaille",
            accord: "Fraîcheur pour pigeon jeune"
          }
        ],

        accompagnements: [
          {
            type: "Légumes du Sud-Ouest",
            suggestions: [
              "Cèpes poêlés à la persillade",
              "Haricots tarbais",
              "Petits pois à la française",
              "Fèves fraîches"
            ]
          },
          {
            type: "Féculents",
            suggestions: [
              "Pommes sarladaises",
              "Gnocchis au beurre",
              "Polenta aux cèpes"
            ]
          },
          {
            type: "Salades",
            suggestions: [
              "Salade de gésiers",
              "Mesclun aux noix",
              "Jeunes pousses d'épinards"
            ]
          }
        ],

        vins: [
          {
            type: "Bordeaux rive droite",
            suggestions: ["Pomerol", "Saint-Émilion", "Lalande-de-Pomerol"],
            temperature: "17-18°C",
            notes: "Merlot pour la rondeur"
          },
          {
            type: "Sud-Ouest",
            suggestions: ["Madiran", "Irouléguy", "Cahors"],
            temperature: "16-18°C",
            notes: "Tannat des Pyrénées pour palombe"
          }
        ],

        erreursCourantes: [
          "Surcuire : le pigeon doit être rosé",
          "Confondre ramier et pigeonneau : goût et cuisson différents",
          "Oublier les cuisses : excellentes confites",
          "Sauce trop légère : ne tient pas face au gibier",
          "Servir trop chaud : les arômes se développent tiède"
        ],

        anecdotes: "La chasse à la palombe est une tradition séculaire du Sud-Ouest français, avec les fameuses 'palombières' des Pyrénées. Les chasseurs utilisent des appelants (palombes apprivoisées) et des filets. Le record de passage est de 2 millions de palombes en une saison ! Le pigeon ramier est le plus grand pigeon sauvage d'Europe. Contrairement aux pigeons des villes (bisets), il vit en forêt et ne se laisse pas approcher."
      },

      biche: {
        anatomie: "Femelle du cerf (80-120kg), chair plus fine et tendre que le cerf mâle. Viande rouge foncée, goût gibier délicat. Chassée de septembre à février. Morceaux nobles : filet, selle, gigot. La biche n'a pas de bois (réservés au mâle). Chair plus tendre car animal moins musclé.",

        caracteristiques: {
          tendrete: "8/10 - Plus tendre que le cerf",
          saveur: "9/10 - Gibier fin et délicat",
          persillage: "2/10 - Très maigre",
          prix: "Très élevé (40-70€/kg)"
        },

        techniquesChef: [
          "Marinade plus courte que pour le cerf : 12-24h",
          "Cuisson rosée : 52-56°C à cœur",
          "Barder systématiquement : très maigre",
          "Filet : poêle très chaude, 2-3 min/face + repos",
          "Selle : rôtie 180°C 15-20 min/kg",
          "Gigot : rôti rosé ou braisé longuement",
          "Repos 10-15 minutes impératif"
        ],

        sauces: [
          {
            nom: "Sauce grand veneur",
            type: "Grande classique",
            description: "Poivrade, groseilles, crème, cognac",
            accord: "Référence pour tous les cervidés"
          },
          {
            nom: "Sauce aux fruits rouges",
            type: "Fruitée",
            description: "Cassis, myrtilles, vin rouge, fond gibier",
            accord: "Acidité fruitée pour viande fine"
          },
          {
            nom: "Sauce au chocolat et piment",
            type: "Moderne",
            description: "Chocolat noir, piment d'Espelette, fond corsé",
            accord: "Audace contemporaine"
          },
          {
            nom: "Jus au genièvre et romarin",
            type: "Aromatique",
            description: "Genièvre, romarin, fond de gibier, beurre",
            accord: "Parfums de garrigue"
          }
        ],

        accompagnements: [
          {
            type: "Purées nobles",
            suggestions: [
              "Purée de céleri-rave truffée",
              "Purée de châtaignes",
              "Purée de panais",
              "Purée de topinambour"
            ]
          },
          {
            type: "Légumes automnaux",
            suggestions: [
              "Girolles sautées",
              "Courge musquée rôtie",
              "Choux de Bruxelles",
              "Potimarron au thym"
            ]
          },
          {
            type: "Fruits",
            suggestions: [
              "Poires pochées au vin rouge",
              "Pommes caramélisées",
              "Coings confits"
            ]
          }
        ],

        vins: [
          {
            type: "Grands Bourgogne",
            suggestions: ["Chambertin", "Clos de Vougeot", "Pommard Premier Cru"],
            temperature: "16-17°C",
            notes: "Finesse bourguignonne pour biche délicate"
          },
          {
            type: "Vallée du Rhône Nord",
            suggestions: ["Hermitage", "Côte-Rôtie"],
            temperature: "17-18°C",
            notes: "Syrah noble pour gibier noble"
          }
        ],

        erreursCourantes: [
          "Confondre avec le cerf : la biche est plus tendre",
          "Marinade trop longue : masque la finesse",
          "Surcuisson : catastrophe avec cette chair maigre",
          "Sauce trop lourde : écrase la délicatesse",
          "Oublier de barder : dessèchement assuré"
        ],

        anecdotes: "Dans la mythologie, la biche était sacrée pour Artémis (Diane), déesse de la chasse. Tuer une biche de la déesse était puni de mort (voir Agamemnon). Au Moyen Âge, la biche était réservée au roi et aux très hauts seigneurs. Sa chair était considérée plus fine que celle du cerf car moins 'échauffée' par le rut. Le faon de biche (jusqu'à 6 mois) est un mets exceptionnel mais sa chasse est très réglementée."
      },

      selle_de_chevreuil: {
        anatomie: "Partie dorsale du chevreuil comprenant les deux filets et le carré avec côtes. Pièce noble de 1-2kg. Chair rouge très foncée, texture ultra-fine. Morceau de prestige pour grandes occasions. Se cuisine entière pour préserver le moelleux ou découpée en noisettes.",

        caracteristiques: {
          tendrete: "9/10 - Morceau le plus tendre du chevreuil",
          saveur: "10/10 - Concentration des saveurs",
          persillage: "1/10 - Extrêmement maigre",
          prix: "Très élevé (60-100€/kg)"
        },

        techniquesChef: [
          "Parer soigneusement : retirer le gras externe et les membranes",
          "Marinade légère : 6-12h maximum pour préserver finesse",
          "Barder avec lard fin ou crépine",
          "Rôtir entière : 220°C 15-20 min + repos",
          "Température rosée : 52-54°C impérative",
          "Noisettes : poêlées 2 min/face seulement",
          "Repos 10-15 minutes sous alu"
        ],

        sauces: [
          {
            nom: "Sauce poivrade royale",
            type: "Grande sauce",
            description: "Poivrade au sang de gibier, groseilles, crème",
            accord: "Le sommet pour cette pièce noble"
          },
          {
            nom: "Sauce au vin de Bourgogne",
            type: "Classique",
            description: "Pinot Noir, échalotes, fond de gibier, beurre",
            accord: "Élégance bourguignonne"
          },
          {
            nom: "Crème de morilles",
            type: "Luxueuse",
            description: "Morilles séchées, crème, cognac, fond",
            accord: "Mariage terre noble et forêt"
          },
          {
            nom: "Réduction au cassis",
            type: "Fruitée",
            description: "Cassis, porto, fond de chevreuil",
            accord: "Fruit noir pour gibier fin"
          }
        ],

        accompagnements: [
          {
            type: "Accompagnements de prestige",
            suggestions: [
              "Morilles fraîches sautées",
              "Purée de céleri truffée",
              "Cèpes de Bordeaux",
              "Pommes Anna"
            ]
          },
          {
            type: "Légumes de saison",
            suggestions: [
              "Courge butternut rôtie",
              "Châtaignes braisées",
              "Salsifis au beurre",
              "Panais caramélisés"
            ]
          },
          {
            type: "Féculents nobles",
            suggestions: [
              "Spätzle au beurre noisette",
              "Gnocchis à la parisienne",
              "Polenta aux herbes"
            ]
          }
        ],

        vins: [
          {
            type: "Très grands Bourgogne",
            suggestions: ["Musigny", "Richebourg", "Chambertin", "La Tâche"],
            temperature: "16-17°C",
            notes: "Seuls vins à la hauteur de ce morceau"
          },
          {
            type: "Grands crus Bordeaux",
            suggestions: ["Pauillac Premier Cru", "Margaux Premier Cru"],
            temperature: "17-18°C",
            notes: "Alternative pour amateurs de Bordeaux"
          }
        ],

        erreursCourantes: [
          "Surcuire : crime contre la gastronomie",
          "Marinade trop forte : masque la subtilité",
          "Découper sans repos : perte de tout le jus",
          "Sauce trop épaisse : étouffe la finesse",
          "Vin médiocre : insulte au produit"
        ],

        anecdotes: "La selle de chevreuil est considérée comme le morceau le plus noble de tout le gibier français. À la cour de Louis XIV, elle était réservée au roi et à la famille royale. La recette 'Selle de chevreuil Grand Veneur' d'Escoffier est une référence de la haute cuisine. Le chevreuil français (Capreolus capreolus) est le plus petit des cervidés européens. Une selle parfaitement cuite se reconnaît à son jus rouge clair qui perle à la découpe."
      },

      // ==================== MORCEAUX CERF COMPLETS ====================

      gigot_de_cerf: {
        anatomie: "Cuisse arrière du cerf (5-8kg), muscle très sollicité. Chair rouge foncée, texture dense. Se divise en plusieurs muscles : noix, sous-noix, tranche. Nécessite marinade et cuisson maîtrisée. Pièce majestueuse pour grande tablée.",

        caracteristiques: {
          tendrete: "6/10 - Ferme, nécessite marinade",
          saveur: "10/10 - Goût de gibier intense",
          persillage: "2/10 - Très maigre",
          prix: "Élevé (35-50€/kg)"
        },

        techniquesChef: [
          "Marinade obligatoire 24-48h : vin rouge, genièvre, thym, laurier",
          "Barder ou piquer de lard pour éviter dessèchement",
          "Cuisson rosée : 55-58°C maximum à cœur",
          "Four 160°C puis montée à 200°C pour croûter",
          "Arroser toutes les 15 minutes",
          "Repos 20-30 minutes sous papier alu",
          "Trancher finement perpendiculairement aux fibres"
        ],

        sauces: [
          { nom: "Sauce grand veneur", type: "Grande sauce", description: "Poivrade, groseilles, crème, fond de gibier", accord: "Référence absolue" },
          { nom: "Sauce aux airelles", type: "Scandinave", description: "Airelles, sucre, vin rouge, cannelle", accord: "Acidité fruitée nordique" },
          { nom: "Sauce au genièvre", type: "Forestière", description: "Baies écrasées, cognac, crème, fond", accord: "Arômes résineux" },
          { nom: "Sauce au poivre vert", type: "Moderne", description: "Poivre vert, cognac, crème, fond", accord: "Fraîcheur poivrée" }
        ],

        accompagnements: [
          { type: "Purées", suggestions: ["Céleri-rave truffé", "Châtaignes", "Panais", "Topinambour"] },
          { type: "Légumes", suggestions: ["Choux de Bruxelles", "Courge rôtie", "Champignons forestiers", "Carottes glacées"] },
          { type: "Fruits", suggestions: ["Poires pochées", "Pommes caramélisées", "Airelles", "Coings confits"] }
        ],

        vins: [
          { type: "Grands Bourgogne", suggestions: ["Chambertin", "Gevrey-Chambertin", "Pommard"], temperature: "16-18°C", notes: "Élégance pour gibier noble" },
          { type: "Rhône Nord", suggestions: ["Hermitage", "Côte-Rôtie", "Cornas"], temperature: "17-18°C", notes: "Syrah puissante" }
        ],

        erreursCourantes: [
          "Pas de marinade : viande dure et trop forte",
          "Surcuisson : dessèchement garanti",
          "Ne pas barder : le gigot devient sec",
          "Trancher trop épais : mastication difficile",
          "Oublier le repos : perte des jus"
        ],

        anecdotes: "Le gigot de cerf était le plat central des festins royaux de Versailles. Louis XIV imposait un rituel précis pour sa découpe. La venaison (viande de cerf) était réservée à la noblesse jusqu'à la Révolution. Un cerf adulte peut peser 200kg, son gigot seul représente près de 15% de sa masse."
      },

      selle_de_cerf: {
        anatomie: "Partie dorsale du cerf avec les deux filets et le carré. Pièce noble de 3-5kg. Chair tendre, la plus prisée du cerf. Se cuisine entière pour les grandes occasions ou découpée en médaillons.",

        caracteristiques: {
          tendrete: "8/10 - Morceau le plus tendre",
          saveur: "10/10 - Saveur concentrée",
          persillage: "2/10 - Maigre",
          prix: "Très élevé (50-80€/kg)"
        },

        techniquesChef: [
          "Marinade courte : 12-24h suffisent",
          "Barder avec crépine ou lard fin",
          "Rôtir à 220°C puis baisser à 180°C",
          "Cuisson rosée impérative : 52-55°C",
          "Repos 15 minutes minimum",
          "Médaillons : poêle très chaude 2-3min/face",
          "Servir sur planche pour spectacle"
        ],

        sauces: [
          { nom: "Sauce Diane", type: "Classique", description: "Crème, poivre, cognac, échalotes, fond", accord: "Élégance crémeuse" },
          { nom: "Sauce au cassis", type: "Fruitée", description: "Cassis, porto, fond de gibier, beurre", accord: "Fruit noir intense" },
          { nom: "Jus corsé aux morilles", type: "Luxueuse", description: "Morilles, madère, crème, fond", accord: "Mariage terre et forêt" }
        ],

        accompagnements: [
          { type: "Prestige", suggestions: ["Morilles sautées", "Truffe en lamelles", "Cèpes de Bordeaux", "Girolle au beurre"] },
          { type: "Classiques", suggestions: ["Purée de céleri", "Châtaignes braisées", "Spätzle", "Polenta crémeuse"] }
        ],

        vins: [
          { type: "Très grands Bourgogne", suggestions: ["Romanée-Conti", "La Tâche", "Richebourg"], temperature: "16-17°C", notes: "Nec plus ultra" },
          { type: "Grands Bordeaux", suggestions: ["Pauillac 1er Cru", "Margaux 1er Cru"], temperature: "17-18°C", notes: "Alternative prestigieuse" }
        ],

        erreursCourantes: [
          "Surcuire : la selle doit être rosée",
          "Marinade trop longue : masque finesse",
          "Découper sans repos : jus perdu",
          "Sauce trop lourde : écrase délicatesse"
        ],

        anecdotes: "La selle de cerf 'Prince Orloff' était servie à la cour de Russie, farcie de champignons et truffe. Escoffier l'a popularisée dans la haute cuisine française. C'est traditionnellement le plat du réveillon de la Saint-Hubert (patron des chasseurs, 3 novembre)."
      },

      epaule_de_cerf: {
        anatomie: "Épaule avant du cerf (3-5kg), muscle gélatineux. Chair ferme nécessitant cuisson longue. Moins noble que le gigot mais plus savoureuse après braisage. Idéale pour civets et daubes.",

        caracteristiques: {
          tendrete: "5/10 cru - 9/10 braisé",
          saveur: "10/10 - Très goûteuse après cuisson",
          persillage: "3/10 - Légèrement gélatineux",
          prix: "Moyen (25-35€/kg)"
        },

        techniquesChef: [
          "Marinade longue : 48h minimum",
          "Découper en gros cubes pour civet",
          "Braisage : 150°C pendant 3-4h",
          "Ou épaule entière rôtie lentement",
          "Arroser régulièrement",
          "La viande doit se défaire facilement"
        ],

        sauces: [
          { nom: "Sauce civet", type: "Traditionnelle", description: "Marinade, sang, chocolat", accord: "Classique absolu" },
          { nom: "Sauce forestière", type: "Champignons", description: "Cèpes, girolles, fond, crème", accord: "Harmonie forestière" }
        ],

        accompagnements: [
          { type: "Féculents", suggestions: ["Pappardelle", "Polenta", "Spätzle", "Pommes vapeur"] },
          { type: "Légumes", suggestions: ["Carottes", "Oignons grelots", "Champignons", "Céleri"] }
        ],

        vins: [
          { type: "Rouges corsés", suggestions: ["Cahors", "Madiran", "Bandol"], temperature: "17-18°C", notes: "Tanins pour plat mijoté" }
        ],

        erreursCourantes: [
          "Cuisson trop rapide : viande dure",
          "Pas de marinade : goût trop sauvage",
          "Morceaux trop petits : se défont trop"
        ],

        anecdotes: "L'épaule de cerf en daube était le plat des grandes chasses royales. On la préparait la veille et la réchauffait au retour de la chasse. Le collagène de l'épaule donne une sauce naturellement onctueuse."
      },

      civet_de_cerf: {
        anatomie: "Préparation mijotée avec épaule, collier et poitrine de cerf. Morceaux découpés en cubes, marinés puis braisés longuement. Plat traditionnel de la cuisine de chasse.",

        caracteristiques: {
          tendrete: "8/10 après cuisson",
          saveur: "10/10 - Concentrée",
          persillage: "4/10",
          prix: "Moyen (20-30€/kg)"
        },

        techniquesChef: [
          "Marinade au vin rouge 48h avec aromates",
          "Égoutter et sécher avant de rissoler",
          "Flamber au cognac",
          "Mouiller avec la marinade filtrée",
          "Cuisson 2h30-3h à 150°C",
          "Lier au sang en fin (hors feu)",
          "Meilleur réchauffé le lendemain"
        ],

        sauces: [
          { nom: "Liaison au sang", type: "Traditionnelle", description: "Sang de gibier, foie mixé, chocolat", accord: "Authentique" },
          { nom: "Sans sang", type: "Moderne", description: "Fond réduit, chocolat, foie de volaille", accord: "Plus accessible" }
        ],

        accompagnements: [
          { type: "Traditionnels", suggestions: ["Pâtes fraîches", "Polenta", "Pommes vapeur", "Pain grillé"] },
          { type: "Garnitures", suggestions: ["Lardons", "Champignons", "Oignons grelots", "Croûtons"] }
        ],

        vins: [
          { type: "Puissants", suggestions: ["Châteauneuf-du-Pape", "Gigondas", "Cahors"], temperature: "17-18°C", notes: "Structure pour le civet" }
        ],

        erreursCourantes: [
          "Bouillir après le sang : grumeaux",
          "Marinade courte : pas assez parfumé",
          "Cuisson trop forte : viande dure"
        ],

        anecdotes: "Le civet de cerf était servi lors des repas de Saint-Hubert depuis le Moyen Âge. La tradition de lier au sang vient de la cuisine médiévale. Le chocolat, ajouté depuis le XVIIIe siècle, provient de l'influence espagnole."
      },

      // ==================== MORCEAUX CHEVREUIL COMPLETS ====================

      gigot_de_chevreuil: {
        anatomie: "Cuisse arrière du chevreuil (1.5-2.5kg), plus petit et fin que le cerf. Chair ultra-tendre, goût délicat. Le morceau le plus demandé pour les fêtes. Se cuisine rosé.",

        caracteristiques: {
          tendrete: "8/10 - Plus tendre que le cerf",
          saveur: "10/10 - Fin et intense",
          persillage: "1/10 - Extrêmement maigre",
          prix: "Très élevé (50-70€/kg)"
        },

        techniquesChef: [
          "Marinade courte : 12-24h maximum",
          "Barder entièrement avec lard fin",
          "Cuisson rosée : 52-55°C à cœur",
          "Four 200°C, 15-20min/kg",
          "Arroser toutes les 10 minutes",
          "Repos 15 minutes impératif",
          "Trancher finement"
        ],

        sauces: [
          { nom: "Sauce poivrade", type: "Classique", description: "Vinaigre, poivre mignonette, vin rouge, fond", accord: "Référence" },
          { nom: "Sauce aux myrtilles", type: "Montagnarde", description: "Myrtilles, vin rouge, fond", accord: "Acidité fruitée" },
          { nom: "Sauce au genièvre", type: "Forestière", description: "Baies écrasées, cognac, crème", accord: "Arômes boisés" }
        ],

        accompagnements: [
          { type: "Purées", suggestions: ["Céleri-rave", "Châtaignes", "Panais", "Topinambour"] },
          { type: "Champignons", suggestions: ["Cèpes", "Girolles", "Trompettes", "Morilles"] }
        ],

        vins: [
          { type: "Grands Bourgogne", suggestions: ["Chambertin", "Richebourg", "Pommard 1er Cru"], temperature: "16-17°C", notes: "Finesse bourguignonne" }
        ],

        erreursCourantes: [
          "Marinade trop longue : masque finesse",
          "Surcuisson : catastrophe",
          "Ne pas barder : dessèchement",
          "Sauce trop lourde : écrase le chevreuil"
        ],

        anecdotes: "Le chevreuil était le gibier favori de Louis XV. Son gigot, plus fin que celui du cerf, était réservé aux tables royales. On distingue le chevreuil de printemps (brocard) du chevreuil d'automne, ce dernier étant plus goûteux après le rut."
      },

      noisettes_de_chevreuil: {
        anatomie: "Médaillons taillés dans le filet ou la selle, 2-3cm d'épaisseur. Chair extrêmement tendre, goût fin. 3-4 noisettes par personne. Le summum de la délicatesse.",

        caracteristiques: {
          tendrete: "10/10 - Ultra tendre",
          saveur: "10/10 - Finesse absolue",
          persillage: "1/10",
          prix: "Très élevé (70-100€/kg)"
        },

        techniquesChef: [
          "Pas de marinade : préserver finesse",
          "Poêle très chaude avec beurre clarifié",
          "2 minutes par face maximum",
          "Cuisson saignant à rosé : 50-54°C",
          "Repos 3-4 minutes suffit",
          "Servir immédiatement"
        ],

        sauces: [
          { nom: "Beurre noisette", type: "Simple", description: "Beurre noisette, câpres, persil", accord: "Simplicité élégante" },
          { nom: "Sauce aux cerises", type: "Fruitée", description: "Cerises, kirsch, fond", accord: "Aigre-doux délicat" },
          { nom: "Réduction balsamique", type: "Moderne", description: "Vinaigre balsamique vieilli, fond, beurre", accord: "Acidité raffinée" }
        ],

        accompagnements: [
          { type: "Légers", suggestions: ["Salade de mâche", "Légumes primeurs", "Risotto aux herbes"] }
        ],

        vins: [
          { type: "Bourgogne fins", suggestions: ["Volnay", "Chambolle-Musigny", "Vosne-Romanée"], temperature: "15-16°C", notes: "Élégance pour finesse" }
        ],

        erreursCourantes: [
          "Surcuisson : la noisette doit être rosée",
          "Poêle pas assez chaude : pas de croûte",
          "Sauce trop puissante : masque tout"
        ],

        anecdotes: "Les noisettes de chevreuil sont le plat signature de nombreux restaurants étoilés. Leur taille et leur tendreté permettent une cuisson parfaite en quelques minutes. On les appelle aussi 'grenadin' dans certaines régions."
      },

      // ==================== MORCEAUX LIÈVRE COMPLETS ====================

      lievre_entier: {
        anatomie: "Lièvre complet (2.5-4kg), gibier à poil le plus goûteux. Chair rouge foncée, saveur intense. Se découpe en râbles (nobles), cuisses (civet) et épaules. Le sang est précieux pour la sauce.",

        caracteristiques: {
          tendrete: "Variable selon morceau",
          saveur: "10/10 - Le plus prononcé",
          persillage: "2/10",
          prix: "Élevé (25-40€/kg)"
        },

        techniquesChef: [
          "Récupérer le sang pour le civet à la royale",
          "Séparer râbles et cuisses : cuissons différentes",
          "Râbles : cuisson rapide, rosé",
          "Cuisses : braisage ou civet",
          "Faisandage 3-5 jours traditionnel",
          "Marinade pour les cuisses"
        ],

        sauces: [
          { nom: "Royale", type: "Haute cuisine", description: "Sang, foie, cognac, truffes", accord: "Le sommet" },
          { nom: "Poivrade", type: "Classique", description: "Vinaigre, poivre, vin rouge", accord: "Traditionnel" }
        ],

        accompagnements: [
          { type: "Classiques", suggestions: ["Pâtes fraîches", "Polenta", "Purée de céleri"] }
        ],

        vins: [
          { type: "Grands rouges", suggestions: ["Chambertin", "Hermitage", "Côte-Rôtie"], temperature: "17-18°C", notes: "Puissance pour gibier" }
        ],

        erreursCourantes: [
          "Même cuisson pour tous les morceaux",
          "Jeter le sang : perte irréparable",
          "Pas de faisandage : goût moins développé"
        ],

        anecdotes: "Le lièvre à la royale du sénateur Couteaux nécessite 3 jours de préparation et fut servi à l'Élysée. C'est le plat le plus emblématique de la gastronomie française de gibier."
      },

      cuisses_de_lievre: {
        anatomie: "Cuisses arrière du lièvre (200-300g pièce), muscles denses. Destinées au civet ou braisage. Chair qui se défait après cuisson longue. Récupérer les os pour le fond.",

        caracteristiques: {
          tendrete: "5/10 cru - 9/10 braisé",
          saveur: "10/10",
          persillage: "2/10",
          prix: "Moyen (20-30€/kg)"
        },

        techniquesChef: [
          "Marinade au vin rouge 24h",
          "Rissoler avant braiser",
          "Cuisson cocotte 2-3h à 150°C",
          "La chair doit se détacher de l'os",
          "Récupérer os pour enrichir sauce"
        ],

        sauces: [
          { nom: "Sauce civet", type: "Traditionnelle", description: "Marinade, sang, lardons, champignons", accord: "Incontournable" }
        ],

        accompagnements: [
          { type: "Féculents", suggestions: ["Pappardelle", "Gnocchis", "Polenta", "Purée"] }
        ],

        vins: [
          { type: "Corsés", suggestions: ["Cahors", "Madiran", "Corbières"], temperature: "17-18°C", notes: "Tanins pour le civet" }
        ],

        erreursCourantes: [
          "Cuisson trop courte : viande dure",
          "Feu trop fort : chair fibreuse"
        ],

        anecdotes: "Les cuisses de lièvre en civet étaient le plat du dimanche dans les campagnes françaises. On gardait le sang dans un bol avec du vinaigre pour éviter la coagulation."
      },

      // ==================== MORCEAUX FAISAN COMPLETS ====================

      supremes_de_faisan: {
        anatomie: "Filets de poitrine du faisan (100-150g pièce). Chair rosée, fine et délicate. Cuisson rapide, peut rester rosé. Barder pour éviter dessèchement.",

        caracteristiques: {
          tendrete: "8/10",
          saveur: "8/10 - Fin et élégant",
          persillage: "2/10",
          prix: "Moyen-élevé (30-45€/kg)"
        },

        techniquesChef: [
          "Barder avec lard fin ou bacon",
          "Poêle : 3-4min/face",
          "Finir au four si épais : 180°C 5min",
          "Cuisson rosée : 62-65°C",
          "Repos 5 minutes",
          "Retirer le barde avant service ou pas"
        ],

        sauces: [
          { nom: "Sauce aux raisins", type: "Classique", description: "Raisins blancs, cognac, fond volaille", accord: "Douceur fruitée" },
          { nom: "Sauce aux morilles", type: "Luxueuse", description: "Morilles, crème, madère", accord: "Élégance" },
          { nom: "Jus au thym", type: "Simple", description: "Sucs dégacés, thym, beurre", accord: "Pureté" }
        ],

        accompagnements: [
          { type: "Fins", suggestions: ["Risotto", "Écrasé de pommes de terre", "Légumes primeurs", "Champignons"] }
        ],

        vins: [
          { type: "Blancs", suggestions: ["Meursault", "Puligny-Montrachet"], temperature: "12-14°C", notes: "Accord surprise" },
          { type: "Rouges", suggestions: ["Saint-Émilion", "Margaux"], temperature: "16-17°C", notes: "Classique" }
        ],

        erreursCourantes: [
          "Surcuisson : devient sec",
          "Oublier de barder : dessèchement",
          "Poêle pas chaude : pas de croûte"
        ],

        anecdotes: "Les suprêmes de faisan étaient servis à Versailles avec des truffes. C'est le morceau préféré des cuisiniers étoilés car il permet une cuisson précise."
      },

      cuisses_de_faisan: {
        anatomie: "Cuisses avec os du faisan (150-200g pièce). Chair plus goûteuse mais plus ferme que les suprêmes. Idéales confites ou braisées.",

        caracteristiques: {
          tendrete: "6/10 - Nécessite cuisson longue",
          saveur: "9/10 - Plus goûteuse que suprême",
          persillage: "3/10",
          prix: "Moyen (20-30€/kg)"
        },

        techniquesChef: [
          "Confire : 80°C dans graisse 2-3h",
          "Ou braiser : 150°C 1h30",
          "Bien cuit : 78°C minimum",
          "Peut se désosser après cuisson",
          "Récupérer os pour fond"
        ],

        sauces: [
          { nom: "Sauce au chou", type: "Rustique", description: "Chou braisé, lardons, genièvre", accord: "Terroir" },
          { nom: "Sauce aux pommes", type: "Normande", description: "Pommes, calvados, crème", accord: "Douceur" }
        ],

        accompagnements: [
          { type: "Rustiques", suggestions: ["Chou braisé", "Lentilles", "Pommes de terre confites", "Spätzle"] }
        ],

        vins: [
          { type: "Rouges moyens", suggestions: ["Côtes-du-Rhône", "Crozes-Hermitage"], temperature: "16-17°C", notes: "Pas trop puissant" }
        ],

        erreursCourantes: [
          "Cuisson trop rapide : chair dure",
          "Confondre avec suprême : cuisson différente"
        ],

        anecdotes: "Les cuisses de faisan confites se conservaient plusieurs semaines dans la graisse. Cette technique médiévale est toujours utilisée pour concentrer les saveurs."
      },

      // ==================== MORCEAUX SANGLIER COMPLETS ====================

      epaule_de_sanglier: {
        anatomie: "Épaule avant du sanglier (3-6kg). Chair gélatineuse, idéale pour braiser. Nécessite cuisson longue pour attendrir. Plus économique que le rôti.",

        caracteristiques: {
          tendrete: "5/10 cru - 9/10 braisé",
          saveur: "10/10",
          persillage: "5/10 - Gélatineux",
          prix: "Moyen (18-25€/kg)"
        },

        techniquesChef: [
          "Marinade 48h obligatoire",
          "Braisage 3-4h à 150°C",
          "Arroser régulièrement",
          "Chair doit se défaire",
          "OBLIGATOIRE : 71°C minimum (trichinose)",
          "Excellent effiloché"
        ],

        sauces: [
          { nom: "Sauce aux pruneaux", type: "Sud-Ouest", description: "Pruneaux, armagnac, fond", accord: "Douceur et puissance" },
          { nom: "Sauce barbecue maison", type: "Moderne", description: "Tomate, miel, vinaigre, épices", accord: "Pour pulled pork sauvage" }
        ],

        accompagnements: [
          { type: "Comfort food", suggestions: ["Polenta", "Purée", "Coleslaw maison", "Frites de patate douce"] }
        ],

        vins: [
          { type: "Corsés", suggestions: ["Madiran", "Cahors", "Fitou"], temperature: "17-18°C", notes: "Tanins pour le gras" }
        ],

        erreursCourantes: [
          "Cuisson trop courte : viande dure",
          "Pas de marinade : trop fort",
          "Oublier temp sécurité : risque sanitaire"
        ],

        anecdotes: "L'épaule de sanglier effilochée ('pulled wild boar') est devenue tendance dans les restaurants branchés. C'est une revisite moderne d'un plat paysan médiéval."
      },

      cotes_de_sanglier: {
        anatomie: "Côtes avec os du sanglier, rack de 6-8 côtes (1-2kg). Chair persillée entre les os. Peuvent être grillées ou braisées selon l'âge de l'animal.",

        caracteristiques: {
          tendrete: "6/10",
          saveur: "9/10",
          persillage: "6/10",
          prix: "Moyen (22-30€/kg)"
        },

        techniquesChef: [
          "Jeune sanglier : grillées ou BBQ",
          "Adulte : braisées longuement",
          "Marinade 24h recommandée",
          "BBQ basse température : 110°C 3-4h",
          "71°C minimum à cœur",
          "Glaçage final optionnel"
        ],

        sauces: [
          { nom: "Glaze BBQ au miel", type: "Moderne", description: "Miel, sauce soja, gingembre", accord: "Sucré-salé" },
          { nom: "Sauce moutarde", type: "Alsacienne", description: "Moutarde, crème, vin blanc", accord: "Traditionnelle" }
        ],

        accompagnements: [
          { type: "BBQ", suggestions: ["Coleslaw", "Épis de maïs", "Haricots rouges", "Cornbread"] },
          { type: "Traditionnel", suggestions: ["Choucroute", "Spätzle", "Chou rouge"] }
        ],

        vins: [
          { type: "Rouges fruités", suggestions: ["Côtes-du-Rhône", "Bergerac", "Buzet"], temperature: "16-17°C", notes: "Fruit pour le sucré-salé" }
        ],

        erreursCourantes: [
          "Cuisson directe trop vive : carbonisé dehors, cru dedans",
          "Pas de marinade : trop fort",
          "Oublier le repos : jus perdu"
        ],

        anecdotes: "Les côtes de sanglier au BBQ sont une tradition des chasseurs du Sud-Ouest. On les fait mariner dans du vin rouge avec des épices avant de les fumer lentement au bois de vigne."
      },

      filet_mignon_de_sanglier: {
        anatomie: "Filet mignon du sanglier (300-500g), muscle le plus tendre. Chair fine, moins marquée que les autres morceaux. Cuisson rapide possible.",

        caracteristiques: {
          tendrete: "9/10",
          saveur: "8/10 - Plus doux",
          persillage: "3/10",
          prix: "Élevé (35-50€/kg)"
        },

        techniquesChef: [
          "Marinade courte optionnelle",
          "Barder légèrement",
          "Saisir puis four : 180°C 12-15min",
          "Peut être rosé si jeune sanglier contrôlé",
          "Sinon 68-71°C par sécurité",
          "Repos 8 minutes"
        ],

        sauces: [
          { nom: "Sauce aux airelles", type: "Classique", description: "Airelles, fond, crème légère", accord: "Équilibre acidulé" },
          { nom: "Sauce au poivre", type: "Bistrot", description: "Poivre noir, cognac, crème", accord: "Force mesurée" }
        ],

        accompagnements: [
          { type: "Élégants", suggestions: ["Purée truffée", "Légumes racines rôtis", "Risotto aux champignons"] }
        ],

        vins: [
          { type: "Rouges élégants", suggestions: ["Pomerol", "Saint-Julien", "Gevrey-Chambertin"], temperature: "16-17°C", notes: "Finesse" }
        ],

        erreursCourantes: [
          "Le traiter comme un rôti : trop cuit",
          "Oublier le repos : jus perdu"
        ],

        anecdotes: "Le filet mignon de sanglier est souvent servi en médaillons dans les restaurants gastronomiques. C'est le morceau le plus accessible pour ceux qui découvrent le gibier."
      },

      cuissot_de_sanglier: {
        anatomie: "Cuisse entière du sanglier (8-15kg selon l'âge). Pièce majestueuse pour grande tablée. Peut être désossée ou cuite avec os. Se prépare aussi en jambon fumé.",

        caracteristiques: {
          tendrete: "6/10",
          saveur: "10/10",
          persillage: "5/10",
          prix: "Moyen (20-28€/kg)"
        },

        techniquesChef: [
          "Marinade 3-4 jours pour grande pièce",
          "Barder abondamment",
          "Four basse temp : 120°C 5-6h",
          "Ou haute temp : 160°C puis 180°C",
          "71°C minimum obligatoire",
          "Repos 30 minutes minimum",
          "Trancher finement"
        ],

        sauces: [
          { nom: "Sauce grand veneur", type: "Grande sauce", description: "Poivrade, groseilles, crème", accord: "Royale" },
          { nom: "Sauce aux cerises noires", type: "Allemande", description: "Cerises, kirsch, fond", accord: "Tradition germanique" }
        ],

        accompagnements: [
          { type: "Festifs", suggestions: ["Spätzle", "Chou rouge aux pommes", "Marrons", "Quenelles"] }
        ],

        vins: [
          { type: "Grands rouges", suggestions: ["Châteauneuf-du-Pape", "Hermitage", "Bandol"], temperature: "17-18°C", notes: "Puissance" }
        ],

        erreursCourantes: [
          "Cuisson trop rapide : sec à l'extérieur, cru à l'intérieur",
          "Pas assez de marinade : trop fort",
          "Découper trop tôt : jus perdu"
        ],

        anecdotes: "Le cuissot de sanglier rôti était servi aux banquets d'Obélix dans les BD d'Astérix ! En réalité, les Gaulois préféraient le marcassin. Un cuissot de grand sanglier peut nourrir 20 personnes."
      },

      joues_de_sanglier: {
        anatomie: "Joues du sanglier (80-150g pièce), muscles masticateurs très travaillés. Chair extrêmement gélatineuse après cuisson. Fondent en bouche.",

        caracteristiques: {
          tendrete: "4/10 cru - 10/10 braisé",
          saveur: "10/10 - Concentrée",
          persillage: "6/10 - Très gélatineux",
          prix: "Moyen-élevé (25-35€/kg)"
        },

        techniquesChef: [
          "Parer les nerfs extérieurs",
          "Marinade 24h",
          "Braiser 3-4h à 140°C",
          "Doivent être fondantes",
          "Se coupent à la cuillère",
          "Réduire le jus pour sauce"
        ],

        sauces: [
          { nom: "Jus de braisage réduit", type: "Naturelle", description: "Jus concentré, beurre", accord: "Pureté" },
          { nom: "Sauce au vin rouge", type: "Bourguignonne", description: "Vin rouge, échalotes, fond", accord: "Classique" }
        ],

        accompagnements: [
          { type: "Onctueux", suggestions: ["Purée de pommes de terre", "Polenta crémeuse", "Risotto"] }
        ],

        vins: [
          { type: "Rouges ronds", suggestions: ["Pomerol", "Saint-Émilion", "Côte de Nuits"], temperature: "16-17°C", notes: "Texture pour texture" }
        ],

        erreursCourantes: [
          "Cuisson trop courte : caoutchouteuses",
          "Feu trop fort : se dessèchent"
        ],

        anecdotes: "Les joues de sanglier étaient le morceau préféré des cuisiniers car ils les gardaient pour eux ! C'est maintenant un morceau recherché des gastronomes pour sa texture incomparable."
      }
    }
  },

  // ==================== GIBIER À POIL - GROS GIBIER ====================
  gibier_poil_gros: {
    histoire: "Le gros gibier à poil regroupe les cervidés (cerf, biche, chevreuil) et les suidés (sanglier, marcassin). Chassé depuis la préhistoire, il était réservé à la noblesse au Moyen Âge. Aujourd'hui, la chasse est réglementée et ces viandes nobles sont prisées des gastronomes pour leur goût intense et leur caractère sauvage.",

    nutrition: "Viandes très maigres (2-4% de lipides), exceptionnellement riches en protéines (28-32g/100g), fer héminique et zinc. Le cerf et le chevreuil sont parmi les viandes les plus protéinées. Faible en cholestérol, riche en oméga-3 si l'animal est sauvage. Environ 120-140 kcal/100g.",

    selection: {
      age: "Jeunes animaux plus tendres : faon (< 6 mois), marcassin (< 6 mois). La denture et la couleur de la viande indiquent l'âge.",
      aspect: "Chair rouge foncé à brun-rouge, ferme au toucher. Éviter les viandes grisâtres ou avec odeur désagréable.",
      provenance: "Privilégier gibier sauvage chassé localement ou élevage en semi-liberté. Vérifier la traçabilité.",
      saison: "Automne-hiver : septembre à février. Chaque espèce a ses dates d'ouverture/fermeture de chasse.",
      faisandage: "3-7 jours à 4-6°C selon l'espèce et le goût souhaité. Le faisandage développe les arômes."
    },

    conservation: "Frais : 2-4 jours maximum à 2°C. Après faisandage : consommer rapidement. Congélation : -18°C, 8-12 mois. Marinade : conserver la viande marinée 48h maximum au réfrigérateur.",

    preparation: {
      marinade: "Quasi-obligatoire pour attendrir et parfumer : vin rouge, genièvre, baies, aromates, 12-48h.",
      bardage: "Essentiel car viande très maigre : barder de lard ou larder de lardons pour éviter le dessèchement.",
      temperaturage: "Sortir 1-2h avant cuisson pour une cuisson uniforme.",
      parage: "Retirer les membranes argentées et les tendons. Découper soigneusement.",
      securite: "Cuisson minimum 63°C à cœur pour le sanglier (trichinose). Les cervidés peuvent être rosés."
    },

    animaux: {
      cerf: {
        description: "Le cerf élaphe est le plus grand cervidé d'Europe. Mâle majestueux pouvant peser 150-250 kg, il est chassé principalement en automne pendant le brame. Sa viande rouge foncée est très goûteuse, avec un fort caractère gibier.",
        caracteristiques: "Viande ferme, rouge sombre, goût prononcé. Morceaux nobles : filet, selle, gigot. Nécessite marinade et bardage.",
        saison: "Septembre à février. Meilleur après le brame (octobre-novembre).",
        poids_moyen: "150-250 kg pour un mâle adulte"
      },
      biche: {
        description: "La biche est la femelle du cerf. Plus petite et plus fine que le mâle, sa viande est légèrement plus tendre et moins prononcée en goût. Très appréciée des gastronomes.",
        caracteristiques: "Viande plus fine que le cerf, saveur légèrement plus douce. Excellente en rôti ou en médaillons.",
        saison: "Octobre à février.",
        poids_moyen: "80-120 kg"
      },
      chevreuil: {
        description: "Le chevreuil est le plus petit cervidé européen. Sa viande est considérée comme la plus fine et la plus délicate du gibier. Très tendre naturellement, elle nécessite peu de marinade.",
        caracteristiques: "Viande très tendre, fine, goût délicat. Le filet et la selle sont exceptionnels. Moins fort en goût que le cerf.",
        saison: "Juin à février selon les régions.",
        poids_moyen: "20-30 kg"
      },
      sanglier: {
        description: "Le sanglier est un suidé sauvage robuste. Sa viande est plus foncée et plus ferme que le porc. Le sanglier adulte nécessite une longue marinade et une cuisson lente. Attention à la trichinose : cuisson complète obligatoire.",
        caracteristiques: "Viande ferme, rouge foncé, goût puissant. Idéal en civet, rôti ou braisé. Marinade longue recommandée.",
        saison: "Septembre à janvier principalement.",
        poids_moyen: "50-100 kg, parfois plus"
      },
      marcassin: {
        description: "Le marcassin est un jeune sanglier de moins de 6 mois. Sa viande est beaucoup plus tendre que celle de l'adulte, avec un goût moins prononcé. Cuisson plus courte possible.",
        caracteristiques: "Viande tendre, saveur plus douce que le sanglier adulte. Peut se rôtir comme un cochon de lait.",
        saison: "Automne-hiver, quand disponible.",
        poids_moyen: "15-30 kg"
      }
    },

    cuts: {
      gigot_de_biche: {
        anatomie: "Cuisse arrière de la biche, muscle puissant et goûteux. Plus petite et plus fine que le gigot de cerf. Chair rouge foncée, texture ferme. Poids typique 1,5-2,5 kg. Pièce noble pour rôtir.",

        caracteristiques: {
          tendrete: "7/10 - Ferme mais fondante après cuisson",
          saveur: "9/10 - Goût de gibier fin",
          persillage: "1/10 - Très maigre",
          prix: "Élevé (25-40€/kg)"
        },

        techniquesChef: [
          "Marinade 24-48h : vin rouge, genièvre, thym, laurier",
          "Barder généreusement de lard",
          "Four préchauffé à 220°C, saisir 15 min puis baisser à 160°C",
          "Température à cœur : 55-58°C pour rosé",
          "Arroser régulièrement avec le jus de cuisson",
          "Repos 15-20 minutes sous aluminium"
        ],

        sauces: [
          { nom: "Sauce grand veneur", type: "Classique", description: "Poivrade aux groseilles, fond de gibier", accord: "L'accord royal" },
          { nom: "Sauce aux airelles", type: "Nordique", description: "Airelles, vin rouge, sucre, cannelle", accord: "Fraîcheur acidulée" },
          { nom: "Sauce au poivre vert", type: "Contemporaine", description: "Crème, poivre vert, cognac", accord: "Douceur épicée" }
        ],

        accompagnements: [
          { type: "Féculents", suggestions: ["Spätzle au beurre", "Purée de céleri", "Pommes dauphines"] },
          { type: "Légumes", suggestions: ["Choux rouges braisés aux pommes", "Champignons des bois", "Marrons glacés"] },
          { type: "Fruits", suggestions: ["Poires pochées au vin", "Compote d'airelles", "Pommes au four"] }
        ],

        vins: [
          { type: "Bourgogne", suggestions: ["Gevrey-Chambertin", "Pommard", "Nuits-Saint-Georges"], temperature: "16-17°C", notes: "Pinot noir puissant" },
          { type: "Rhône", suggestions: ["Châteauneuf-du-Pape", "Hermitage", "Côte-Rôtie"], temperature: "17-18°C", notes: "Syrah ou Grenache corsés" }
        ],

        erreursCourantes: [
          "Cuisson trop longue : viande sèche",
          "Pas de marinade : viande dure",
          "Température trop haute : dessèchement rapide",
          "Oublier de barder : manque de moelleux"
        ],

        anecdotes: "La biche était considérée comme un gibier plus raffiné que le cerf, car sa viande plus délicate convenait mieux aux palais féminins de la cour royale."
      },

      selle_de_biche: {
        anatomie: "Partie dorsale de la biche entre les côtes et le gigot. Morceau très tendre comprenant les filets. Poids 1-2 kg. Pièce de prestige pour les grandes occasions.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "9/10 - Goût fin et délicat",
          persillage: "1/10 - Très maigre",
          prix: "Très élevé (40-60€/kg)"
        },

        techniquesChef: [
          "Marinade courte 12-24h ou pas de marinade si jeune biche",
          "Désosser ou garder sur l'os selon présentation",
          "Barder entièrement de crépine ou lard",
          "Rôtir à 200°C 15-20 min puis 160°C jusqu'à 54°C à cœur",
          "Repos impératif 10-15 minutes"
        ],

        sauces: [
          { nom: "Sauce Diane", type: "Classique", description: "Crème, champignons, cognac, fond de gibier", accord: "Élégance crémeuse" },
          { nom: "Jus au cassis", type: "Fruitée", description: "Fond de gibier, cassis, beurre", accord: "Douceur fruitée" }
        ],

        accompagnements: [
          { type: "Raffinés", suggestions: ["Gratin de cèpes", "Gnocchis à la truffe", "Mousseline de panais"] }
        ],

        vins: [
          { type: "Grands Bourgognes", suggestions: ["Chambertin", "Clos de Vougeot", "Richebourg"], temperature: "16-17°C", notes: "Vins d'exception pour pièce d'exception" }
        ],

        erreursCourantes: [
          "Sur-cuisson : la selle doit rester rosée",
          "Trancher trop épais : perdre en finesse"
        ],

        anecdotes: "La selle de biche était le plat préféré du Roi Soleil Louis XIV lors des chasses à Versailles."
      },

      epaule_de_biche: {
        anatomie: "Partie avant de la biche, muscles de l'épaule. Plus gélatineuse que le gigot, idéale pour les cuissons longues. Poids 1-2 kg.",

        caracteristiques: {
          tendrete: "6/10 - Devient fondante en cuisson lente",
          saveur: "9/10 - Très goûteuse",
          persillage: "2/10 - Maigre avec un peu de collagène",
          prix: "Moyen (18-25€/kg)"
        },

        techniquesChef: [
          "Marinade longue 48h recommandée",
          "Braiser 3-4h à 150°C",
          "Parfait pour civet ou daube",
          "Peut être effilochée en fin de cuisson"
        ],

        sauces: [
          { nom: "Sauce civet", type: "Traditionnelle", description: "Vin rouge, sang, oignons, lardons", accord: "L'authentique" },
          { nom: "Sauce forestière", type: "Rustique", description: "Champignons, crème, fond de gibier", accord: "Saveurs boisées" }
        ],

        accompagnements: [
          { type: "Traditionnels", suggestions: ["Pâtes fraîches", "Polenta crémeuse", "Pommes vapeur"] }
        ],

        vins: [
          { type: "Vins corsés", suggestions: ["Cahors", "Madiran", "Bandol"], temperature: "17-18°C", notes: "Tannins pour la puissance" }
        ],

        erreursCourantes: [
          "Cuisson trop courte : viande dure",
          "Feu trop fort : viande sèche malgré le braisage"
        ],

        anecdotes: "L'épaule était traditionnellement le morceau des domestiques, le gigot et la selle étant réservés aux maîtres."
      },

      filet_de_biche: {
        anatomie: "Filet mignon de la biche, muscle le plus tendre situé sous la colonne vertébrale. Petit mais exceptionnel. Poids 200-400g.",

        caracteristiques: {
          tendrete: "10/10 - Le plus tendre",
          saveur: "8/10 - Délicat",
          persillage: "1/10 - Très maigre",
          prix: "Très élevé (50-70€/kg)"
        },

        techniquesChef: [
          "Pas de marinade nécessaire",
          "Poêler 2-3 min par face à feu vif",
          "Ne jamais dépasser 54°C à cœur",
          "Repos 5 minutes"
        ],

        sauces: [
          { nom: "Beurre aux cèpes", type: "Simple", description: "Beurre, cèpes séchés, persil", accord: "Pureté des saveurs" }
        ],

        accompagnements: [
          { type: "Légers", suggestions: ["Salade de mâche aux noix", "Légumes croquants", "Pommes soufflées"] }
        ],

        vins: [
          { type: "Bourgogne fin", suggestions: ["Volnay", "Beaune Premier Cru"], temperature: "16°C", notes: "Finesse pour finesse" }
        ],

        erreursCourantes: [
          "Trop cuire : devient sec instantanément"
        ],

        anecdotes: "Le filet de biche est si tendre qu'il peut se manger cru en tartare, une préparation prisée des grands chefs."
      },

      filet_de_sanglier: {
        anatomie: "Filet mignon du sanglier, muscle tendre le long de la colonne. Plus ferme que celui du porc. Poids 300-500g. Cuisson complète obligatoire.",

        caracteristiques: {
          tendrete: "8/10 - Tendre pour du sanglier",
          saveur: "9/10 - Goût gibier prononcé",
          persillage: "2/10 - Peu gras",
          prix: "Élevé (30-45€/kg)"
        },

        techniquesChef: [
          "Marinade 24h minimum",
          "Saisir à feu vif puis finir au four",
          "Température à cœur : minimum 68°C (sécurité trichinose)",
          "Barder ou larder recommandé",
          "Repos 10 minutes"
        ],

        sauces: [
          { nom: "Sauce au genièvre", type: "Forestière", description: "Genièvre, crème, fond de gibier", accord: "Arômes résineux" },
          { nom: "Sauce moutarde à l'ancienne", type: "Rustique", description: "Moutarde en grains, crème, vin blanc", accord: "Piquant doux" }
        ],

        accompagnements: [
          { type: "Automne", suggestions: ["Purée de patates douces", "Cèpes poêlés", "Choux de Bruxelles"] }
        ],

        vins: [
          { type: "Puissants", suggestions: ["Cornas", "Saint-Joseph", "Crozes-Hermitage"], temperature: "17°C", notes: "Syrah du Nord" }
        ],

        erreursCourantes: [
          "Sous-cuisson : risque sanitaire (trichinose)",
          "Pas de marinade : viande trop ferme"
        ],

        anecdotes: "Le filet de sanglier est un morceau rare car il y en a peu par animal et il est souvent gardé par le chasseur."
      },

      civet_de_sanglier: {
        anatomie: "Morceaux à braiser du sanglier : épaule, poitrine, collet coupés en cubes de 4-5 cm. La préparation traditionnelle est liée au sang.",

        caracteristiques: {
          tendrete: "7/10 - Fondant après cuisson longue",
          saveur: "10/10 - Concentrée et intense",
          persillage: "3/10 - Gras qui fond à la cuisson",
          prix: "Moyen (15-22€/kg)"
        },

        techniquesChef: [
          "Marinade 48h : vin rouge corsé, genièvre, aromates",
          "Rissoler les morceaux avant de mouiller",
          "Cuisson 3h à 150°C",
          "Lier au sang hors du feu en fin de cuisson",
          "Ne jamais faire bouillir après ajout du sang"
        ],

        sauces: [
          { nom: "Sauce civet au sang", type: "Traditionnelle", description: "Marinade, sang, chocolat noir", accord: "L'authentique" },
          { nom: "Sauce aux pruneaux", type: "Sud-Ouest", description: "Pruneaux, armagnac", accord: "Douceur qui équilibre" }
        ],

        accompagnements: [
          { type: "Féculents", suggestions: ["Pâtes fraîches larges", "Polenta crémeuse", "Pain de campagne"] },
          { type: "Garniture", suggestions: ["Champignons de Paris", "Petits oignons", "Lardons"] }
        ],

        vins: [
          { type: "Très corsés", suggestions: ["Cahors", "Madiran", "Corbières"], temperature: "17-18°C", notes: "Puissance pour puissance" }
        ],

        erreursCourantes: [
          "Faire bouillir après le sang : coagulation en grumeaux",
          "Marinade trop courte",
          "Servir le jour même : meilleur réchauffé"
        ],

        anecdotes: "Le civet doit son nom à la cive (ciboulette) qui parfumait le plat au Moyen Âge. Le chocolat noir est un ajout inspiré du mole mexicain."
      },

      roti_de_marcassin: {
        anatomie: "Rôti taillé dans le carré ou l'épaule du marcassin (jeune sanglier < 6 mois). Chair plus tendre et plus claire que le sanglier adulte.",

        caracteristiques: {
          tendrete: "8/10 - Plus tendre que l'adulte",
          saveur: "7/10 - Goût gibier modéré",
          persillage: "3/10 - Un peu plus gras",
          prix: "Élevé (25-35€/kg)"
        },

        techniquesChef: [
          "Marinade courte 12-24h suffit",
          "Rôtir comme un cochon de lait",
          "Four 180°C, 25-30 min/kg",
          "Arroser souvent",
          "Température à cœur : 68°C minimum"
        ],

        sauces: [
          { nom: "Sauce aux pommes", type: "Douce", description: "Compote de pommes, cidre, crème", accord: "Douceur enfantine" },
          { nom: "Jus de cuisson", type: "Simple", description: "Déglaçage au vin blanc, beurre", accord: "Pureté des saveurs" }
        ],

        accompagnements: [
          { type: "Accompagnements", suggestions: ["Pommes au four", "Purée maison", "Légumes racines rôtis"] }
        ],

        vins: [
          { type: "Moyennement corsés", suggestions: ["Chinon", "Bourgueil", "Saumur-Champigny"], temperature: "15-16°C", notes: "Cabernet franc de Loire" }
        ],

        erreursCourantes: [
          "Traiter comme un sanglier adulte : trop de marinade",
          "Sur-cuisson : perd sa tendreté"
        ],

        anecdotes: "Le marcassin garde ses rayures jusqu'à 6 mois. Passé cet âge, il devient 'bête rousse' puis sanglier."
      },

      carre_de_marcassin: {
        anatomie: "Côtes du jeune sanglier avec leur viande, présenté en carré comme l'agneau. 6-8 côtes, poids 800g-1,2kg.",

        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "7/10 - Délicat",
          persillage: "2/10 - Maigre",
          prix: "Élevé (30-40€/kg)"
        },

        techniquesChef: [
          "Parer les os (manchonner)",
          "Saisir puis rôtir à 180°C",
          "15-20 min de cuisson",
          "Repos 10 min avant de trancher"
        ],

        sauces: [
          { nom: "Sauce aux myrtilles", type: "Fruitée", description: "Myrtilles, vin rouge, fond", accord: "Acidité fruitée" }
        ],

        accompagnements: [
          { type: "Élégants", suggestions: ["Gratin dauphinois", "Haricots verts fins", "Pommes fondantes"] }
        ],

        vins: [
          { type: "Fins et fruités", suggestions: ["Côtes du Rhône Villages", "Crozes-Hermitage"], temperature: "16°C", notes: "Syrah légère" }
        ],

        erreursCourantes: [
          "Ne pas manchonner les os : présentation négligée"
        ],

        anecdotes: "Le carré de marcassin était un plat de fête dans les familles de chasseurs."
      },

      filet_de_marcassin: {
        anatomie: "Filet mignon du jeune sanglier. Plus petit et plus tendre que celui de l'adulte. Poids 150-250g.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "7/10 - Délicat",
          persillage: "2/10 - Maigre",
          prix: "Élevé (35-50€/kg)"
        },

        techniquesChef: [
          "Marinade légère ou pas de marinade",
          "Poêler 3-4 min par face",
          "Température 68°C minimum",
          "Repos 5 minutes"
        ],

        sauces: [
          { nom: "Sauce au miel et romarin", type: "Douce", description: "Miel, romarin, fond de veau", accord: "Sucré-salé" }
        ],

        accompagnements: [
          { type: "Légers", suggestions: ["Légumes primeurs", "Purée fine", "Salade aux noix"] }
        ],

        vins: [
          { type: "Souples", suggestions: ["Mercurey", "Givry", "Rully"], temperature: "15°C", notes: "Bourgogne accessibles" }
        ],

        erreursCourantes: [
          "Sous-cuire comme un filet de cerf : risque sanitaire"
        ],

        anecdotes: "Le filet de marcassin est un morceau si rare qu'il est souvent gardé secret par les chasseurs."
      }
    }
  },

  // ==================== GIBIER À POIL - PETIT GIBIER ====================
  gibier_poil_petit: {
    histoire: "Le petit gibier à poil comprend le lièvre et le lapin de garenne. Le lièvre, animal mythique de nos campagnes, est chassé depuis l'Antiquité. Le lapin de garenne, bien que moins noble, offre une chair savoureuse très appréciée. Ces gibiers se cuisinent traditionnellement en civet, en terrine ou rôtis.",

    nutrition: "Viandes très maigres (3-5% de lipides), riches en protéines (22-25g/100g). Le lièvre est particulièrement riche en fer. Chair plus foncée et plus goûteuse que le lapin d'élevage. Environ 120-150 kcal/100g.",

    selection: {
      age: "Jeunes animaux (levrauts, lapereaux) plus tendres. Les vieux lièvres sont réservés au civet.",
      aspect: "Chair rouge foncé pour le lièvre, rose foncé pour le lapin. Éviter les chairs flasques ou malodorantes.",
      provenance: "Gibier sauvage chassé. Le lapin de garenne est bien plus goûteux que le lapin d'élevage.",
      saison: "Septembre à février pour le lièvre. Le lapin de garenne se chasse toute l'année dans certaines régions.",
      qualite: "Pattes souples = animal jeune. Pattes raides = animal âgé, préférer le civet."
    },

    conservation: "Frais : 2-3 jours à 2°C. Faisandage du lièvre : 2-4 jours suspendu à 4-6°C. Congélation : -18°C, 6-8 mois maximum.",

    preparation: {
      depouillage: "Retirer la peau encore tiède si possible. Éviscérer rapidement, récupérer le foie et le sang pour le civet.",
      marinade: "Recommandée pour le lièvre : vin rouge, aromates, 12-24h. Facultative pour le lapin.",
      decoupe: "Râble (dos), cuisses, épaules. Le râble est le morceau noble.",
      sang: "Récupérer le sang pour lier le civet. Conserver au froid avec un peu de vinaigre."
    },

    animaux: {
      lievre: {
        description: "Le lièvre d'Europe est un animal sauvage solitaire, plus grand que le lapin (3-5 kg). Sa chair rouge foncée a un goût de gibier prononcé. Le civet de lièvre est un plat mythique de la gastronomie française.",
        caracteristiques: "Chair ferme, rouge foncé, goût puissant. Le râble est le morceau noble. Nécessite souvent une marinade.",
        saison: "Septembre à février.",
        poids_moyen: "3-5 kg"
      },
      lapin_de_garenne: {
        description: "Le lapin de garenne est un lapin sauvage vivant en groupe dans des terriers (garennes). Plus petit que le lapin d'élevage (1-2 kg), sa chair est plus ferme et plus goûteuse.",
        caracteristiques: "Chair rose foncé, ferme, saveur plus prononcée que le lapin d'élevage. Excellent en civet, rôti ou en terrine.",
        saison: "Toute l'année dans certaines régions, principalement automne-hiver.",
        poids_moyen: "1-2 kg"
      }
    },

    cuts: {
      lievre_entier: {
        anatomie: "Lièvre entier dépouillé et éviscéré, prêt à cuire. Animal de 3-5 kg, idéal pour le civet traditionnel ou rôti pour les jeunes sujets.",

        caracteristiques: {
          tendrete: "5/10 - Dépend de l'âge",
          saveur: "10/10 - Goût de gibier intense",
          persillage: "1/10 - Très maigre",
          prix: "Moyen (15-25€/kg)"
        },

        techniquesChef: [
          "Récupérer le sang et le foie pour le civet",
          "Jeune lièvre (levraut) : rôtir entier",
          "Vieux lièvre : civet obligatoire",
          "Marinade 24-48h",
          "Barder généreusement"
        ],

        sauces: [
          { nom: "Sauce civet royale", type: "Traditionnelle", description: "Vin rouge, sang, foie, oignons, lardons", accord: "Le grand classique" },
          { nom: "Sauce poivrade", type: "Classique", description: "Vinaigre, poivre mignonette, fond gibier", accord: "Puissance aromatique" }
        ],

        accompagnements: [
          { type: "Traditionnels", suggestions: ["Croûtons frits", "Champignons", "Pommes vapeur", "Pâtes fraîches"] }
        ],

        vins: [
          { type: "Corsés", suggestions: ["Pomerol", "Saint-Émilion Grand Cru", "Hermitage"], temperature: "17-18°C", notes: "Grands vins pour grand plat" }
        ],

        erreursCourantes: [
          "Rôtir un vieux lièvre : viande dure",
          "Oublier de lier au sang : manque d'authenticité"
        ],

        anecdotes: "Le civet de lièvre 'à la royale' était le plat préféré du Sénateur Aristide Couteaux, recette immortalisée par Curnonsky."
      },

      rables_de_lievre: {
        anatomie: "Partie dorsale du lièvre entre les épaules et les cuisses. Morceau le plus tendre comprenant les filets. Poids 300-500g par râble.",

        caracteristiques: {
          tendrete: "8/10 - Le plus tendre du lièvre",
          saveur: "9/10 - Intense mais fin",
          persillage: "1/10 - Très maigre",
          prix: "Élevé (25-40€/kg)"
        },

        techniquesChef: [
          "Marinade courte 12h ou pas de marinade si levraut",
          "Rôtir à 200°C 15-20 min",
          "Température rosée : 54-56°C à cœur",
          "Barder impérativement",
          "Repos 10 minutes"
        ],

        sauces: [
          { nom: "Sauce au chocolat", type: "Originale", description: "Chocolat noir, fond de lièvre, baies", accord: "Amertume noble" },
          { nom: "Sauce aux griottes", type: "Fruitée", description: "Griottes, kirsch, fond de gibier", accord: "Acidité fruitée" }
        ],

        accompagnements: [
          { type: "Raffinés", suggestions: ["Purée de céleri truffée", "Gnocchis au beurre", "Endives braisées"] }
        ],

        vins: [
          { type: "Bourgogne", suggestions: ["Chambolle-Musigny", "Vosne-Romanée"], temperature: "16-17°C", notes: "Pinot noir élégant" }
        ],

        erreursCourantes: [
          "Cuire sans barder : dessèchement",
          "Trop cuire : perd sa tendreté"
        ],

        anecdotes: "Le râble de lièvre était considéré comme le morceau du maître de maison, les cuisses revenant aux invités."
      },

      cuisses_de_lievre: {
        anatomie: "Cuisses arrière du lièvre, muscles puissants. Plus fermes que le râble, idéales pour les cuissons longues. Poids 200-350g par cuisse.",

        caracteristiques: {
          tendrete: "5/10 - Nécessite cuisson lente",
          saveur: "10/10 - Très goûteuses",
          persillage: "1/10 - Maigres",
          prix: "Moyen (18-28€/kg)"
        },

        techniquesChef: [
          "Marinade 24-48h recommandée",
          "Braiser 2-3h à 150°C",
          "Parfaites pour le civet",
          "Se désossent facilement après cuisson"
        ],

        sauces: [
          { nom: "Sauce chasseur", type: "Classique", description: "Champignons, échalotes, vin blanc, tomates", accord: "Saveurs forestières" },
          { nom: "Sauce moutarde", type: "Relevée", description: "Moutarde de Dijon, crème, estragon", accord: "Piquant herbacé" }
        ],

        accompagnements: [
          { type: "Rustiques", suggestions: ["Pommes sarladaises", "Cèpes à la persillade", "Haricots blancs"] }
        ],

        vins: [
          { type: "Sud-Ouest", suggestions: ["Cahors", "Bergerac", "Pécharmant"], temperature: "17°C", notes: "Malbec ou Merlot charnus" }
        ],

        erreursCourantes: [
          "Cuisson courte : viande dure et fibreuse",
          "Pas assez de liquide : dessèchement"
        ],

        anecdotes: "Les cuisses de lièvre confites étaient une préparation de conservation avant l'invention du réfrigérateur."
      },

      lapin_entier: {
        anatomie: "Lapin de garenne entier dépouillé, 1-2 kg. Plus petit et plus goûteux que le lapin d'élevage. Chair rose foncé à rouge.",

        caracteristiques: {
          tendrete: "6/10 - Plus ferme que l'élevage",
          saveur: "8/10 - Goût prononcé",
          persillage: "2/10 - Maigre",
          prix: "Moyen (12-20€/kg)"
        },

        techniquesChef: [
          "Marinade facultative mais recommandée",
          "Découper : râble, cuisses, épaules",
          "Rôtir jeune lapin, braiser les vieux",
          "Barder ou arroser souvent"
        ],

        sauces: [
          { nom: "Sauce au thym", type: "Provençale", description: "Thym, ail, vin blanc, huile d'olive", accord: "Parfums du Sud" },
          { nom: "Sauce chasseur", type: "Classique", description: "Champignons, échalotes, vin blanc", accord: "Forestier" }
        ],

        accompagnements: [
          { type: "Méditerranéens", suggestions: ["Ratatouille", "Polenta", "Olives", "Tomates confites"] }
        ],

        vins: [
          { type: "Provence/Rhône", suggestions: ["Côtes de Provence", "Gigondas", "Vacqueyras"], temperature: "15-16°C", notes: "Vins du soleil" }
        ],

        erreursCourantes: [
          "Confondre avec lapin d'élevage : cuisson différente",
          "Ne pas assez arroser : dessèchement"
        ],

        anecdotes: "Le lapin de garenne était le gibier du pauvre, très chassé dans les campagnes pour compléter l'alimentation familiale."
      },

      rables_de_lapin_de_garenne: {
        anatomie: "Dos du lapin de garenne avec les filets. Morceau le plus tendre. Poids 150-250g.",

        caracteristiques: {
          tendrete: "7/10 - Tendre",
          saveur: "8/10 - Savoureux",
          persillage: "2/10 - Maigre",
          prix: "Moyen (15-25€/kg)"
        },

        techniquesChef: [
          "Rôtir ou poêler rapidement",
          "Désosser pour farcir",
          "Cuisson rosée possible",
          "Barder de lard"
        ],

        sauces: [
          { nom: "Sauce à la moutarde", type: "Classique", description: "Moutarde, crème, estragon", accord: "Tradition française" }
        ],

        accompagnements: [
          { type: "Classiques", suggestions: ["Pommes de terre rissolées", "Haricots verts", "Champignons"] }
        ],

        vins: [
          { type: "Loire", suggestions: ["Chinon", "Bourgueil", "Saint-Nicolas-de-Bourgueil"], temperature: "15°C", notes: "Cabernet franc fruité" }
        ],

        erreursCourantes: [
          "Trop cuire : devient sec rapidement"
        ],

        anecdotes: "Le râble de lapin farci aux pruneaux est une spécialité du Sud-Ouest."
      },

      cuisses_de_lapin_de_garenne: {
        anatomie: "Cuisses arrière du lapin sauvage. Chair ferme, idéale pour braiser ou confire. Poids 100-180g par cuisse.",

        caracteristiques: {
          tendrete: "5/10 - Mieux en cuisson lente",
          saveur: "8/10 - Goûteuses",
          persillage: "2/10 - Maigres",
          prix: "Moyen (12-20€/kg)"
        },

        techniquesChef: [
          "Braiser ou confire",
          "Marinade au vin blanc recommandée",
          "2h de cuisson minimum",
          "Se désossent bien"
        ],

        sauces: [
          { nom: "Sauce aux olives", type: "Méditerranéenne", description: "Olives noires, tomates, herbes de Provence", accord: "Sud ensoleillé" }
        ],

        accompagnements: [
          { type: "Provençaux", suggestions: ["Tian de légumes", "Riz pilaf", "Courgettes grillées"] }
        ],

        vins: [
          { type: "Provence", suggestions: ["Bandol rouge", "Palette", "Cassis rouge"], temperature: "16°C", notes: "Mourvèdre et Grenache" }
        ],

        erreursCourantes: [
          "Cuisson rapide : cuisses dures"
        ],

        anecdotes: "Les cuisses confites de lapin se conservaient plusieurs mois dans la graisse."
      },

      epaules_de_lapin_de_garenne: {
        anatomie: "Pattes avant du lapin avec leur viande. Petits morceaux gélatineux parfaits pour terrines et pâtés.",

        caracteristiques: {
          tendrete: "5/10 - Gélatineuses",
          saveur: "8/10 - Très parfumées",
          persillage: "3/10 - Un peu de gras",
          prix: "Bas (8-15€/kg)"
        },

        techniquesChef: [
          "Idéales pour terrines et rillettes",
          "Braiser longuement",
          "Effilocher pour pâtés",
          "Peuvent enrichir un civet"
        ],

        sauces: [
          { nom: "En terrine", type: "Charcuterie", description: "Viande effilochée, gelée, aromates", accord: "Entrée froide" }
        ],

        accompagnements: [
          { type: "Pour terrine", suggestions: ["Pain de campagne grillé", "Cornichons", "Pickles"] }
        ],

        vins: [
          { type: "Légers", suggestions: ["Beaujolais", "Touraine", "Anjou rouge"], temperature: "14°C", notes: "Vins frais et fruités" }
        ],

        erreursCourantes: [
          "Servir en morceaux : peu de viande, mieux en terrine"
        ],

        anecdotes: "Les épaules servaient traditionnellement à faire les rillettes du pauvre."
      },

      civet_de_lapin_de_garenne: {
        anatomie: "Morceaux de lapin sauvage pour le civet : cuisses, épaules, râble découpé. Préparation traditionnelle au vin rouge.",

        caracteristiques: {
          tendrete: "7/10 - Fondant après cuisson",
          saveur: "9/10 - Concentrée",
          persillage: "2/10 - Maigre",
          prix: "Moyen (12-18€/kg)"
        },

        techniquesChef: [
          "Marinade 24h au vin rouge",
          "Rissoler les morceaux",
          "Mijoter 2h à feu doux",
          "Lier au sang ou au foie si disponible"
        ],

        sauces: [
          { nom: "Sauce civet", type: "Traditionnelle", description: "Vin rouge, oignons, lardons, champignons", accord: "Rustique et généreux" }
        ],

        accompagnements: [
          { type: "Classiques", suggestions: ["Pâtes fraîches", "Pommes vapeur", "Croûtons aillés"] }
        ],

        vins: [
          { type: "Corsés", suggestions: ["Côtes du Rhône Villages", "Minervois", "Corbières"], temperature: "16-17°C", notes: "Vins du Sud généreux" }
        ],

        erreursCourantes: [
          "Cuisson trop courte : viande dure",
          "Feu trop fort : sauce réduite trop vite"
        ],

        anecdotes: "Le civet de lapin était le plat du dimanche dans les familles rurales, préparé avec le produit de la chasse du week-end."
      }
    }
  },

  // ==================== GIBIER À PLUME ====================
  gibier_plume: {
    histoire: "Le gibier à plume regroupe les oiseaux sauvages chassés : faisan, perdrix, caille, bécasse, canard sauvage, pigeon ramier. Depuis le Moyen Âge, ces oiseaux sont prisés des tables nobles. Le faisandage (maturation) développe leurs arômes. La bécasse est considérée comme le roi des gibiers à plume.",

    nutrition: "Viandes maigres (2-6% de lipides), riches en protéines (24-28g/100g). Chair délicate et parfumée. Riche en fer et vitamines B. Le canard sauvage est légèrement plus gras. Environ 130-160 kcal/100g.",

    selection: {
      age: "Jeunes oiseaux plus tendres : plumes souples, bec flexible, ergots peu développés.",
      aspect: "Plumage brillant, yeux clairs, chair rose à rouge selon l'espèce. Éviter les oiseaux abîmés par le tir.",
      provenance: "Gibier sauvage chassé ou élevage en semi-liberté. Le gibier d'élevage est plus fade.",
      saison: "Automne-hiver selon les espèces. Faisan : octobre-février. Bécasse : octobre-décembre.",
      faisandage: "2-5 jours selon le goût souhaité. La bécasse se faisande plus longtemps (5-8 jours)."
    },

    conservation: "Frais non plumé : 3-5 jours à 4°C (faisandage). Plumé : 2-3 jours. Congélation : -18°C, 6 mois maximum.",

    preparation: {
      plumaison: "Plumer à sec ou échauder brièvement. Retirer les sicots à la pince.",
      vidage: "Vider tous les oiseaux sauf la bécasse (se mange avec ses entrailles = la traîne).",
      bridage: "Brider pour une cuisson uniforme et une belle présentation.",
      bardage: "Essentiel car viande maigre : barder de lard ou de crépine."
    },

    animaux: {
      faisan: {
        description: "Le faisan est un gallinacé au plumage coloré (mâle) ou brun (femelle/poule faisane). Chair délicate et parfumée, il est le gibier à plume le plus courant. La poule faisane est plus tendre.",
        caracteristiques: "Chair rose, texture fine, goût délicat. Se rôtit entier ou en morceaux. Barder impérativement.",
        saison: "Octobre à février.",
        poids_moyen: "1-1,5 kg (mâle), 0,8-1 kg (femelle)"
      },
      perdrix: {
        description: "La perdrix (grise ou rouge) est un petit gibier très apprécié. Chair fine et parfumée, plus goûteuse que le faisan. La perdrix rouge est plus grosse que la grise.",
        caracteristiques: "Chair rosée, fine, goût prononcé. Se rôtit entière. Les vieilles perdrix se braisent.",
        saison: "Septembre à février.",
        poids_moyen: "350-450g"
      },
      caille: {
        description: "La caille est le plus petit gibier à plume cuisiné. Délicate et tendre, elle se mange souvent entière. Aujourd'hui principalement d'élevage.",
        caracteristiques: "Chair très tendre, saveur douce. Cuisson rapide. Se mange avec les doigts.",
        saison: "Disponible toute l'année (élevage).",
        poids_moyen: "150-200g"
      },
      becasse: {
        description: "La bécasse est considérée comme le roi des gibiers à plume. Oiseau migrateur au long bec, elle se cuisine traditionnellement avec ses entrailles (la traîne). Très rare et prisée.",
        caracteristiques: "Chair sombre, goût intense et complexe. Se mange rosée. La traîne est un délice pour amateurs.",
        saison: "Octobre à décembre.",
        poids_moyen: "250-350g"
      },
      canard_sauvage: {
        description: "Le canard sauvage (colvert principalement) est plus petit et plus maigre que le canard d'élevage. Chair rouge, goût prononcé de gibier.",
        caracteristiques: "Chair rouge foncé, ferme, goût puissant. Magret moins gras que l'élevage. Se cuisine rosé.",
        saison: "Septembre à janvier.",
        poids_moyen: "1-1,3 kg"
      },
      pigeon_ramier: {
        description: "Le pigeon ramier (palombe) est un gibier très prisé du Sud-Ouest. Chair rouge, goût prononcé. La chasse à la palombe est une tradition locale.",
        caracteristiques: "Chair rouge sombre, ferme, saveur intense. Les suprêmes se servent rosés.",
        saison: "Octobre à février.",
        poids_moyen: "400-500g"
      }
    },

    cuts: {
      faisan_entier: {
        anatomie: "Faisan entier plumé, vidé et bridé. Mâle 1-1,5 kg au plumage coloré, femelle 0,8-1 kg plus tendre.",

        caracteristiques: {
          tendrete: "7/10 - Femelle plus tendre",
          saveur: "7/10 - Délicat",
          persillage: "1/10 - Très maigre",
          prix: "Moyen (18-30€ pièce)"
        },

        techniquesChef: [
          "Barder entièrement de lard",
          "Rôtir à 200°C 35-45 min selon taille",
          "Arroser régulièrement",
          "Vérifier cuisson à la cuisse (jus clair)",
          "Repos 10 minutes"
        ],

        sauces: [
          { nom: "Sauce aux raisins", type: "Fruitée", description: "Raisins, cognac, fond de volaille", accord: "Douceur automnale" },
          { nom: "Sauce au chou", type: "Traditionnelle", description: "Chou braisé, lardons, fond", accord: "Rustique et réconfortant" }
        ],

        accompagnements: [
          { type: "Classiques", suggestions: ["Choucroute", "Chou braisé", "Purée de marrons", "Pommes fondantes"] }
        ],

        vins: [
          { type: "Bourgogne blanc", suggestions: ["Meursault", "Puligny-Montrachet"], temperature: "12-14°C", notes: "Chardonnay gras" },
          { type: "Bourgogne rouge", suggestions: ["Gevrey-Chambertin", "Savigny-lès-Beaune"], temperature: "16°C", notes: "Pinot noir" }
        ],

        erreursCourantes: [
          "Ne pas barder : dessèchement garanti",
          "Trop cuire : chair sèche et fibreuse"
        ],

        anecdotes: "Le faisan aurait été introduit en Europe par les Argonautes, rapporté des rives du fleuve Phase (actuelle Géorgie)."
      },

      supremes_de_faisan: {
        anatomie: "Filets (blancs) du faisan avec leur peau. Morceau le plus tendre. Poids 150-200g par suprême.",

        caracteristiques: {
          tendrete: "8/10 - Très tendre",
          saveur: "7/10 - Délicat",
          persillage: "1/10 - Maigre",
          prix: "Élevé (30-45€/kg)"
        },

        techniquesChef: [
          "Garder la peau pour protéger",
          "Poêler côté peau 4-5 min",
          "Retourner et cuire 3-4 min",
          "Laisser rosé à cœur",
          "Repos 5 minutes"
        ],

        sauces: [
          { nom: "Sauce aux morilles", type: "Noble", description: "Morilles, crème, cognac", accord: "Luxe forestier" },
          { nom: "Jus au thym", type: "Simple", description: "Fond de volaille, thym, beurre", accord: "Pureté des saveurs" }
        ],

        accompagnements: [
          { type: "Fins", suggestions: ["Risotto aux cèpes", "Épinards au beurre", "Gnocchis à la parisienne"] }
        ],

        vins: [
          { type: "Blancs riches", suggestions: ["Hermitage blanc", "Condrieu"], temperature: "13°C", notes: "Viognier ou Marsanne" }
        ],

        erreursCourantes: [
          "Enlever la peau : dessèchement",
          "Trop cuire : perd toute tendreté"
        ],

        anecdotes: "Les suprêmes de faisan à la crème étaient un classique des dîners bourgeois du XIXe siècle."
      },

      cuisses_de_faisan: {
        anatomie: "Cuisses avec leur pilon et leur haut de cuisse. Plus fermes que les suprêmes, idéales braisées.",

        caracteristiques: {
          tendrete: "5/10 - Mieux braisées",
          saveur: "8/10 - Goûteuses",
          persillage: "2/10 - Un peu de gras",
          prix: "Moyen (20-30€/kg)"
        },

        techniquesChef: [
          "Braiser 45 min à 1h",
          "Ou confire dans la graisse de canard",
          "Peuvent enrichir un civet"
        ],

        sauces: [
          { nom: "Sauce vigneronne", type: "Au vin", description: "Vin rouge, raisin, échalotes", accord: "Automnal" }
        ],

        accompagnements: [
          { type: "Braisés", suggestions: ["Lentilles", "Chou braisé", "Carottes glacées"] }
        ],

        vins: [
          { type: "Rouges légers", suggestions: ["Sancerre rouge", "Menetou-Salon rouge"], temperature: "15°C", notes: "Pinot noir de Loire" }
        ],

        erreursCourantes: [
          "Rôtir comme les suprêmes : trop sec"
        ],

        anecdotes: "Les cuisses de faisan confites entraient dans la composition du traditionnel pâté en croûte."
      },

      perdrix_entiere: {
        anatomie: "Perdrix entière plumée et vidée. Perdrix grise 300-400g ou rouge 400-500g.",

        caracteristiques: {
          tendrete: "7/10 - Jeune perdrix tendre",
          saveur: "9/10 - Très parfumée",
          persillage: "1/10 - Maigre",
          prix: "Élevé (25-40€ pièce)"
        },

        techniquesChef: [
          "Barder de lard",
          "Rôtir 25-35 min à 200°C",
          "Jeune perdrix : rosée",
          "Vieille perdrix : braiser au chou"
        ],

        sauces: [
          { nom: "Sauce aux lentilles", type: "Rustique", description: "Lentilles du Puy, fond de gibier, lardons", accord: "Terroir" },
          { nom: "Sauce au cognac", type: "Noble", description: "Cognac, crème, fond", accord: "Élégance" }
        ],

        accompagnements: [
          { type: "Traditionnels", suggestions: ["Chou braisé", "Lentilles du Puy", "Pommes sarladaises"] }
        ],

        vins: [
          { type: "Bourgogne", suggestions: ["Pommard", "Volnay", "Nuits-Saint-Georges"], temperature: "16-17°C", notes: "Pinot noir charpenté" }
        ],

        erreursCourantes: [
          "Cuire vieille perdrix rapidement : chair dure"
        ],

        anecdotes: "La perdrix aux choux est un classique de la cuisine bourguignonne, citée par Alexandre Dumas."
      },

      supremes_de_perdrix: {
        anatomie: "Filets de perdrix, très tendres. Petits morceaux précieux. Poids 80-120g par suprême.",

        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "9/10 - Intense",
          persillage: "1/10 - Maigre",
          prix: "Très élevé (45-60€/kg)"
        },

        techniquesChef: [
          "Cuisson rapide 3-4 min par face",
          "Servir rosés",
          "Repos 3 minutes"
        ],

        sauces: [
          { nom: "Beurre noisette aux câpres", type: "Simple", description: "Beurre noisette, câpres, citron", accord: "Acidité qui relève" }
        ],

        accompagnements: [
          { type: "Légers", suggestions: ["Salade de mâche", "Champignons crus émincés", "Céleri rémoulade"] }
        ],

        vins: [
          { type: "Blancs de garde", suggestions: ["Côtes du Jura", "Arbois"], temperature: "12-13°C", notes: "Savagnin ou Chardonnay" }
        ],

        erreursCourantes: [
          "Trop cuire : minuscule portion devenue sèche"
        ],

        anecdotes: "Les suprêmes de perdrix étaient le mets préféré de Talleyrand, grand gastronome."
      },

      cuisses_de_perdrix: {
        anatomie: "Cuisses de perdrix, petits morceaux goûteux. Idéales pour sautés et ragoûts.",

        caracteristiques: {
          tendrete: "6/10 - Ferme",
          saveur: "9/10 - Concentrée",
          persillage: "1/10 - Maigre",
          prix: "Moyen (25-35€/kg)"
        },

        techniquesChef: [
          "Braiser avec légumes",
          "Utiliser dans une salade tiède",
          "Ajouter à une poêlée de champignons"
        ],

        sauces: [
          { nom: "Sauce aux cèpes", type: "Forestière", description: "Cèpes, crème, persil", accord: "Saveurs d'automne" }
        ],

        accompagnements: [
          { type: "Automne", suggestions: ["Cèpes poêlés", "Courge rôtie", "Châtaignes"] }
        ],

        vins: [
          { type: "Loire", suggestions: ["Chinon", "Bourgueil"], temperature: "15°C", notes: "Cabernet franc" }
        ],

        erreursCourantes: [
          "Cuisson courte : chair dure"
        ],

        anecdotes: "Les petites cuisses de perdrix étaient grignotées avec les doigts lors des parties de chasse."
      },

      caille_entiere: {
        anatomie: "Caille entière plumée et vidée. Petit oiseau de 150-200g, très tendre. Souvent d'élevage.",

        caracteristiques: {
          tendrete: "9/10 - Très tendre",
          saveur: "6/10 - Douce",
          persillage: "2/10 - Un peu de gras",
          prix: "Moyen (3-6€ pièce)"
        },

        techniquesChef: [
          "Rôtir 15-20 min à 220°C",
          "Peut se griller ou poêler",
          "Se mange rosée",
          "Compter 2 par personne"
        ],

        sauces: [
          { nom: "Sauce au raisin muscat", type: "Douce", description: "Raisins muscat, verjus, beurre", accord: "Douceur fruitée" },
          { nom: "Jus au miel", type: "Laquée", description: "Miel, soja, gingembre", accord: "Sucré-salé" }
        ],

        accompagnements: [
          { type: "Délicats", suggestions: ["Petits pois à la française", "Raisins poêlés", "Polenta crémeuse"] }
        ],

        vins: [
          { type: "Blancs doux", suggestions: ["Gewurztraminer", "Riesling vendanges tardives"], temperature: "10-12°C", notes: "Alsace aromatique" }
        ],

        erreursCourantes: [
          "Cuisson trop longue : dessèchement rapide"
        ],

        anecdotes: "La caille était l'oiseau favori des Romains qui la gavaient de figues pour en enrichir la chair."
      },

      caille_desossee_farcie: {
        anatomie: "Caille désossée en laissant les os des cuisses, garnie d'une farce. Présentation élégante.",

        caracteristiques: {
          tendrete: "9/10 - Tendre avec farce moelleuse",
          saveur: "7/10 - Dépend de la farce",
          persillage: "Variable selon farce",
          prix: "Élevé (8-12€ pièce)"
        },

        techniquesChef: [
          "Farcir sans trop serrer",
          "Ficeler ou piquer",
          "Rôtir 25-30 min à 200°C",
          "Glacer en fin de cuisson"
        ],

        sauces: [
          { nom: "Jus de cuisson réduit", type: "Simple", description: "Fond de volaille, beurre", accord: "Pureté" }
        ],

        accompagnements: [
          { type: "Raffinés", suggestions: ["Blinis", "Purée de céleri", "Légumes baby"] }
        ],

        vins: [
          { type: "Champagne", suggestions: ["Champagne brut", "Champagne rosé"], temperature: "8-10°C", notes: "Fête et élégance" }
        ],

        erreursCourantes: [
          "Farce trop dense : cuisson inégale",
          "Trop farcir : caille qui éclate"
        ],

        anecdotes: "La caille farcie au foie gras est un classique des réveillons."
      },

      becasse_entiere: {
        anatomie: "Bécasse entière, le roi des gibiers. Se cuisine traditionnellement non vidée (avec la traîne = entrailles). Poids 250-350g.",

        caracteristiques: {
          tendrete: "7/10 - Ferme",
          saveur: "10/10 - Incomparable",
          persillage: "2/10 - Maigre",
          prix: "Très élevé (30-60€ pièce)"
        },

        techniquesChef: [
          "Ne pas vider (ou récupérer la traîne)",
          "Faisandage 5-8 jours",
          "Rôtir 15-20 min à 220°C",
          "Servir rosée impérativement",
          "Tartine de traîne traditionnelle"
        ],

        sauces: [
          { nom: "Sauce Riche", type: "Classique", description: "Foie, cognac, fond de gibier, truffe", accord: "Le summum" },
          { nom: "Fumet de bécasse", type: "Pure", description: "Carcasse, porto, aromates", accord: "L'essence même" }
        ],

        accompagnements: [
          { type: "Nobles", suggestions: ["Croûtons à la traîne", "Foie gras poêlé", "Truffe fraîche"] }
        ],

        vins: [
          { type: "Grands Bourgognes", suggestions: ["Romanée-Conti", "La Tâche", "Richebourg"], temperature: "17°C", notes: "Les plus grands pour le plus grand" }
        ],

        erreursCourantes: [
          "Vider la bécasse : perdre son essence",
          "Trop cuire : sacrilège",
          "Pas assez faisander : manque de caractère"
        ],

        anecdotes: "La bécasse était si prisée au XIXe siècle qu'elle était servie avec révérence, accompagnée uniquement de sa traîne sur toast et d'un verre de Romanée-Conti."
      },

      supremes_de_becasse: {
        anatomie: "Filets de bécasse, morceaux précieux. Très petits mais d'une saveur incomparable. Poids 50-80g par suprême.",

        caracteristiques: {
          tendrete: "8/10 - Tendre",
          saveur: "10/10 - Exceptionnelle",
          persillage: "2/10 - Maigre",
          prix: "Exceptionnel (80-120€/kg)"
        },

        techniquesChef: [
          "Cuisson express 2 min par face",
          "Rosés à cœur absolument",
          "Repos 2-3 minutes"
        ],

        sauces: [
          { nom: "Beurre de traîne", type: "Traditionnelle", description: "Entrailles, beurre, cognac", accord: "L'authentique" }
        ],

        accompagnements: [
          { type: "Minimalistes", suggestions: ["Toast beurré", "Quelques feuilles de mâche"] }
        ],

        vins: [
          { type: "Exceptionnels", suggestions: ["Grands crus de Bourgogne", "Vieux Châteauneuf-du-Pape"], temperature: "17°C", notes: "À la hauteur" }
        ],

        erreursCourantes: [
          "Trop cuire : crime contre la gastronomie"
        ],

        anecdotes: "Brillat-Savarin écrivait que la bécasse était 'le premier des oiseaux comme le perdreau est le premier des quadrupèdes'."
      },

      canard_sauvage_entier: {
        anatomie: "Canard colvert sauvage entier. Plus petit que le canard d'élevage (1-1,3 kg). Chair rouge et ferme.",

        caracteristiques: {
          tendrete: "6/10 - Ferme",
          saveur: "9/10 - Goût prononcé",
          persillage: "3/10 - Moins gras que l'élevage",
          prix: "Moyen (15-25€ pièce)"
        },

        techniquesChef: [
          "Faisandage 2-4 jours",
          "Rôtir 25-35 min à 200°C",
          "Servir rosé",
          "Repos 10 minutes"
        ],

        sauces: [
          { nom: "Sauce bigarade", type: "Classique", description: "Orange amère, vinaigre, fond de canard", accord: "Acidité fruitée" },
          { nom: "Sauce aux cerises", type: "Fruitée", description: "Cerises, kirsch, fond", accord: "Aigre-doux" }
        ],

        accompagnements: [
          { type: "Fruités", suggestions: ["Navets glacés", "Poires au vin", "Choux rouges aux pommes"] }
        ],

        vins: [
          { type: "Rhône Nord", suggestions: ["Côte-Rôtie", "Cornas", "Saint-Joseph"], temperature: "17°C", notes: "Syrah épicée" }
        ],

        erreursCourantes: [
          "Cuire comme un canard d'élevage : temps différent",
          "Pas de faisandage : manque de goût"
        ],

        anecdotes: "Le canard sauvage était chassé au filet au Moyen Âge, avant l'invention des armes à feu."
      },

      magrets_de_canard_sauvage: {
        anatomie: "Filets de canard sauvage avec leur peau. Plus petits et moins gras que le magret d'élevage. Poids 150-200g.",

        caracteristiques: {
          tendrete: "7/10 - Ferme mais tendre si bien cuit",
          saveur: "9/10 - Intense",
          persillage: "3/10 - Gras sous la peau",
          prix: "Élevé (35-50€/kg)"
        },

        techniquesChef: [
          "Quadriller le gras sans percer la chair",
          "Commencer côté gras à froid",
          "Retourner quand le gras est doré",
          "Température 54°C pour rosé",
          "Repos 5 minutes"
        ],

        sauces: [
          { nom: "Sauce aux baies sauvages", type: "Forestière", description: "Mûres, myrtilles, vin rouge", accord: "Accord parfait" },
          { nom: "Réduction au cassis", type: "Fruitée", description: "Cassis, fond de canard, beurre", accord: "Acidité gourmande" }
        ],

        accompagnements: [
          { type: "Automne", suggestions: ["Pommes sarladaises", "Cèpes persillés", "Salade aux noix"] }
        ],

        vins: [
          { type: "Sud-Ouest", suggestions: ["Madiran", "Irouléguy", "Cahors"], temperature: "17°C", notes: "Tannat ou Malbec" }
        ],

        erreursCourantes: [
          "Feu trop fort au départ : gras brûlé",
          "Pas de repos : jus qui s'échappe"
        ],

        anecdotes: "Le magret de canard sauvage était autrefois réservé aux chasseurs chanceux, les autres se contentant des cuisses."
      },

      cuisses_de_canard_sauvage: {
        anatomie: "Cuisses de canard colvert. Plus fermes et moins grasses que l'élevage. Idéales pour confire ou braiser.",

        caracteristiques: {
          tendrete: "5/10 - Mieux confites",
          saveur: "9/10 - Intense",
          persillage: "4/10 - Un peu de gras",
          prix: "Moyen (18-25€/kg)"
        },

        techniquesChef: [
          "Confire 2-3h dans la graisse",
          "Ou braiser 1h30-2h",
          "Se désossent facilement après cuisson"
        ],

        sauces: [
          { nom: "Sauce aux lentilles vertes", type: "Rustique", description: "Lentilles, lardons, fond", accord: "Terroir" }
        ],

        accompagnements: [
          { type: "Confits", suggestions: ["Pommes sarladaises", "Salade aux gésiers", "Haricots blancs"] }
        ],

        vins: [
          { type: "Sud-Ouest", suggestions: ["Bergerac", "Côtes de Duras", "Buzet"], temperature: "16°C", notes: "Vins locaux" }
        ],

        erreursCourantes: [
          "Cuisson rapide : chair dure et sèche"
        ],

        anecdotes: "Le confit de canard sauvage était une méthode de conservation pour passer l'hiver."
      },

      pigeon_ramier_entier: {
        anatomie: "Pigeon ramier (palombe) entier. Oiseau de 400-500g très prisé du Sud-Ouest. Chair rouge et savoureuse.",

        caracteristiques: {
          tendrete: "6/10 - Chair ferme",
          saveur: "9/10 - Goût prononcé",
          persillage: "2/10 - Maigre",
          prix: "Élevé (12-20€ pièce)"
        },

        techniquesChef: [
          "Faisandage 2-3 jours",
          "Rôtir 18-25 min à 220°C",
          "Servir rosé",
          "Repos 5-10 minutes"
        ],

        sauces: [
          { nom: "Sauce salmis", type: "Classique", description: "Carcasse, vin rouge, aromates, foie", accord: "Grande tradition" },
          { nom: "Sauce aux figues", type: "Sud-Ouest", description: "Figues, armagnac, fond", accord: "Douceur gasconne" }
        ],

        accompagnements: [
          { type: "Sud-Ouest", suggestions: ["Cèpes à la persillade", "Pommes sarladaises", "Haricots tarbais"] }
        ],

        vins: [
          { type: "Sud-Ouest", suggestions: ["Madiran vieux", "Pacherenc", "Jurançon sec"], temperature: "17°C", notes: "Vins de caractère" }
        ],

        erreursCourantes: [
          "Trop cuire : chair sèche",
          "Pas de faisandage : goût plat"
        ],

        anecdotes: "La chasse à la palombe dans les Pyrénées est une tradition ancestrale avec des palombières perchées dans les arbres."
      },

      supremes_de_pigeon_ramier: {
        anatomie: "Filets de palombe avec leur peau. Chair rouge, texture ferme. Poids 80-120g par suprême.",

        caracteristiques: {
          tendrete: "7/10 - Ferme mais tendre si rosé",
          saveur: "9/10 - Intense",
          persillage: "2/10 - Maigre",
          prix: "Élevé (40-55€/kg)"
        },

        techniquesChef: [
          "Poêler côté peau 3 min",
          "Retourner 2-3 min",
          "Impérativement rosé",
          "Repos 3 minutes"
        ],

        sauces: [
          { nom: "Sauce au vin de noix", type: "Sud-Ouest", description: "Vin de noix, fond, beurre", accord: "Terroir gascon" }
        ],

        accompagnements: [
          { type: "Terroir", suggestions: ["Mesclun aux noix", "Girolles sautées", "Foie gras poêlé"] }
        ],

        vins: [
          { type: "Bordeaux", suggestions: ["Saint-Émilion Grand Cru", "Pomerol"], temperature: "17°C", notes: "Merlot charnu" }
        ],

        erreursCourantes: [
          "Trop cuire : viande grise et sèche"
        ],

        anecdotes: "Les suprêmes de palombe au foie gras sont le plat emblématique des grandes tables du Sud-Ouest."
      },

      cuisses_de_pigeon_ramier: {
        anatomie: "Cuisses de palombe, petits morceaux goûteux. Idéales pour salmis ou confites.",

        caracteristiques: {
          tendrete: "5/10 - Mieux braisées",
          saveur: "9/10 - Concentrée",
          persillage: "2/10 - Maigre",
          prix: "Moyen (25-35€/kg)"
        },

        techniquesChef: [
          "Braiser ou confire",
          "Utiliser pour le salmis",
          "Cuisson lente 1h30-2h"
        ],

        sauces: [
          { nom: "Sauce salmis", type: "Traditionnelle", description: "Vin rouge, carcasse, aromates", accord: "L'authentique" }
        ],

        accompagnements: [
          { type: "Braisés", suggestions: ["Petits pois à la française", "Champignons des bois", "Croûtons"] }
        ],

        vins: [
          { type: "Languedoc", suggestions: ["Minervois", "Corbières", "Fitou"], temperature: "16°C", notes: "Vins du Sud" }
        ],

        erreursCourantes: [
          "Cuisson courte : viande ferme"
        ],

        anecdotes: "Le salmis de palombes est servi dans toutes les grandes tables du Sud-Ouest pendant la saison de chasse."
      }
    }
  }

};

module.exports = encyclopediaData;
