// Cookmaster - Profils thermiques détaillés pour calcul précis
// Ce fichier contient les propriétés physiques et les questions spécifiques par morceau

// Propriétés thermiques par type de tissu (W/m·K pour conductivité, J/kg·K pour Cp)
export const tissuProperties = {
  viande_rouge_maigre: { lambda: 0.50, Cp: 3470, rho: 1070 },
  viande_rouge_persillee: { lambda: 0.46, Cp: 3300, rho: 1050 },
  graisse: { lambda: 0.21, Cp: 2300, rho: 920 },
  peau: { lambda: 0.25, Cp: 2500, rho: 1100 },
  os: { lambda: 0.60, Cp: 1260, rho: 1900 },
  collagene: { lambda: 0.53, Cp: 3100, rho: 1100 },
  bardage: { lambda: 0.19, Cp: 2100, rho: 900 }
}

// Coefficients de transfert thermique par méthode de cuisson (W/m²·K)
export const heatTransferCoeffs = {
  poele: { h_base: 120, h_vif: 200, h_doux: 80 },
  grill: { h_base: 150, h_vif: 250, h_doux: 100 },
  plancha: { h_base: 180, h_vif: 300, h_doux: 120 },
  four: { h_base: 25, h_convection: 45 },
  sousvide: { h_base: 150 },
  braise: { h_base: 35 },
  bbq: { h_direct: 180, h_indirect: 30 },
  friture: { h_base: 250 }
}

// Questions spécifiques par morceau
export const cutSpecificQuestions = {

  // ============================================
  // BOEUF
  // ============================================

  filet: {
    questions: [
      {
        id: 'shape',
        question: 'Forme du morceau ?',
        question_en: 'Cut shape?',
        type: 'select',
        options: [
          { value: 'tournedos', label: 'Tournedos (cylindrique)', label_en: 'Tournedos (cylindrical)', factor: 1.0 },
          { value: 'chateaubriand', label: 'Châteaubriand (épais)', label_en: 'Chateaubriand (thick)', factor: 1.15 },
          { value: 'filet_entier', label: 'Filet entier', label_en: 'Whole tenderloin', factor: 1.25 }
        ],
        default: 'tournedos',
        impact: 'timing'
      },
      {
        id: 'tied',
        question: 'Ficelé ?',
        question_en: 'Tied?',
        type: 'boolean',
        default: false,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Le ficelage maintient une forme uniforme',
        tip_en: 'Tying maintains uniform shape'
      },
      {
        id: 'barded',
        question: 'Bardé de lard ?',
        question_en: 'Wrapped in bacon?',
        type: 'boolean',
        default: false,
        factorYes: 1.10,
        factorNo: 1.0,
        tip: 'Recommandé pour éviter le dessèchement',
        tip_en: 'Recommended to prevent drying'
      },
      {
        id: 'butter_basting',
        question: 'Arroser de beurre en fin de cuisson ?',
        question_en: 'Butter baste at the end?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple'], tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Arroser de beurre = croûte dorée et saveur',
        tip_en: 'Butter basting = golden crust and flavor'
      },
      {
        id: 'flip_count',
        question: 'Nombre de retournements ?',
        question_en: 'Number of flips?',
        type: 'select',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        options: [
          { value: 'once', label: 'Une seule fois', label_en: 'Once only', factor: 1.0 },
          { value: 'multiple', label: 'Plusieurs fois', label_en: 'Multiple times', factor: 0.95 }
        ],
        default: 'once',
        tip: 'Retourner une fois = meilleure croûte',
        tip_en: 'Flip once = better crust'
      },
      {
        id: 'sv_target_temp',
        question: 'Température cible sous-vide ?',
        question_en: 'Target sous-vide temp?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '52°C (saignant)', label_en: '126°F (rare)', factor: 1.0 },
          { value: 'medium_rare', label: '55°C (rosé)', label_en: '131°F (medium-rare)', factor: 1.0 },
          { value: 'medium', label: '58°C (à point)', label_en: '136°F (medium)', factor: 1.0 }
        ],
        default: 'medium_rare'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      layers: [{ type: 'viande_rouge_maigre', position: 'main' }],
      defaultThickness_cm: 3.5
    }
  },

  entrecote: {
    questions: [
      {
        id: 'marbling',
        question: 'Niveau de persillage ?',
        question_en: 'Marbling level?',
        type: 'select',
        options: [
          { value: 'lean', label: 'Peu persillé', label_en: 'Lean', factor: 0.95 },
          { value: 'medium', label: 'Persillage moyen', label_en: 'Medium marbling', factor: 1.0 },
          { value: 'wagyu', label: 'Très persillé (Wagyu)', label_en: 'Heavy marbling (Wagyu)', factor: 1.08 }
        ],
        default: 'medium'
      },
      {
        id: 'fat_edge',
        question: 'Bande de gras sur le bord ?',
        question_en: 'Fat edge?',
        type: 'select',
        options: [
          { value: 'present', label: 'Présente', label_en: 'Present', factor: 1.0 },
          { value: 'scored', label: 'Incisée (pour éviter de gondoler)', label_en: 'Scored (to prevent curling)', factor: 0.97 },
          { value: 'removed', label: 'Retirée', label_en: 'Removed', factor: 0.95 }
        ],
        default: 'present',
        tip: 'Inciser la bande de gras tous les 2cm empêche le steak de gondoler',
        tip_en: 'Score fat strip every inch to prevent curling'
      },
      {
        id: 'sear_fat_first',
        question: 'Saisir le gras en premier ?',
        question_en: 'Sear fat edge first?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Debout sur le gras 1-2 min = gras croustillant',
        tip_en: 'Standing on fat 1-2 min = crispy fat'
      },
      {
        id: 'rest_covered',
        question: 'Repos couvert ?',
        question_en: 'Rest covered?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct', 'reverse_sear'] },
        default: false,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Couvert = moins de croûte, non couvert = croûte préservée',
        tip_en: 'Covered = softer crust, uncovered = crisp crust'
      },
      {
        id: 'bbq_zone',
        question: 'Zone de cuisson BBQ ?',
        question_en: 'BBQ cooking zone?',
        type: 'select',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        options: [
          { value: 'direct', label: 'Directe (sur les braises)', label_en: 'Direct (over coals)', factor: 0.9 },
          { value: 'indirect', label: 'Indirecte puis saisie', label_en: 'Indirect then sear', factor: 1.1 }
        ],
        default: 'direct'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      layers: [
        { type: 'graisse', thickness_mm: 5, position: 'edge' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 2.5
    }
  },

  cote_de_boeuf: {
    questions: [
      {
        id: 'bone_orientation',
        question: 'Position de l\'os pendant la cuisson ?',
        question_en: 'Bone position during cooking?',
        type: 'select',
        options: [
          { value: 'lateral', label: 'Os sur le côté', label_en: 'Bone on side', factor: 1.0 },
          { value: 'dessous', label: 'Os en dessous (protège)', label_en: 'Bone underneath (protects)', factor: 1.08 },
          { value: 'dessus', label: 'Os au-dessus', label_en: 'Bone on top', factor: 0.95 }
        ],
        default: 'lateral',
        tip: 'Os en dessous = cuisson plus douce côté os',
        tip_en: 'Bone underneath = gentler cooking on bone side'
      },
      {
        id: 'fat_cap',
        question: 'Couche de gras externe ?',
        question_en: 'External fat cap?',
        type: 'select',
        options: [
          { value: 'thick', label: 'Épaisse (> 1cm)', label_en: 'Thick (> 1cm)', factor: 1.12 },
          { value: 'medium', label: 'Moyenne (5-10mm)', label_en: 'Medium', factor: 1.0 },
          { value: 'trimmed', label: 'Parée (< 5mm)', label_en: 'Trimmed', factor: 0.95 }
        ],
        default: 'medium'
      },
      {
        id: 'bbq_lid',
        question: 'Couvercle du BBQ ?',
        question_en: 'BBQ lid?',
        type: 'select',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        options: [
          { value: 'closed', label: 'Fermé (convection)', label_en: 'Closed (convection)', factor: 0.85 },
          { value: 'open', label: 'Ouvert (saisie directe)', label_en: 'Open (direct sear)', factor: 1.0 }
        ],
        default: 'closed',
        tip: 'Fermé = cuisson plus uniforme pour pièces épaisses',
        tip_en: 'Closed = more even cooking for thick cuts'
      },
      {
        id: 'sear_first',
        question: 'Saisir la viande avant le four ?',
        question_en: 'Sear meat before oven?',
        type: 'boolean',
        showWhen: { techniques: ['basse_temperature'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.05,
        tip: 'Saisir avant = croûte + jus caramélisés',
        tip_en: 'Searing first = crust + caramelized juices'
      },
      {
        id: 'convection',
        question: 'Mode convection (chaleur tournante) ?',
        question_en: 'Convection mode (fan)?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'Convection = cuisson 10% plus rapide',
        tip_en: 'Convection = 10% faster cooking'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'lateral', thermalMass: 'high' },
      defaultThickness_cm: 5
    }
  },

  faux_filet: {
    questions: [
      {
        id: 'fat_strip',
        question: 'Bande de gras ?',
        question_en: 'Fat strip?',
        type: 'select',
        options: [
          { value: 'kept', label: 'Conservée', label_en: 'Kept', factor: 1.05 },
          { value: 'trimmed', label: 'Parée', label_en: 'Trimmed', factor: 1.0 },
          { value: 'removed', label: 'Retirée', label_en: 'Removed', factor: 0.95 }
        ],
        default: 'kept'
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (< 2cm)', label_en: 'Thin', factor: 0.8 },
          { value: 'standard', label: 'Standard (2-3cm)', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisse (> 3cm)', label_en: 'Thick', factor: 1.25 }
        ],
        default: 'standard'
      },
      {
        id: 'pan_material',
        question: 'Type de poêle ?',
        question_en: 'Pan type?',
        type: 'select',
        showWhen: { techniques: ['saisie_simple'], tools: ['poele'] },
        options: [
          { value: 'cast_iron', label: 'Fonte', label_en: 'Cast iron', factor: 0.95 },
          { value: 'stainless', label: 'Inox', label_en: 'Stainless steel', factor: 1.0 },
          { value: 'nonstick', label: 'Anti-adhésive', label_en: 'Non-stick', factor: 1.05 }
        ],
        default: 'cast_iron',
        tip: 'La fonte retient mieux la chaleur pour une belle croûte',
        tip_en: 'Cast iron retains heat better for a good crust'
      },
      {
        id: 'grill_marks',
        question: 'Marques de grill croisées ?',
        question_en: 'Cross-hatch grill marks?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct'] },
        default: false,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Tourner 45° à mi-cuisson par face',
        tip_en: 'Rotate 45° halfway through each side'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      defaultThickness_cm: 2.5
    }
  },

  bavette: {
    questions: [
      {
        id: 'type',
        question: 'Type de bavette ?',
        question_en: 'Type of flank?',
        type: 'select',
        options: [
          { value: 'aloyau', label: 'Bavette d\'aloyau (noble)', label_en: 'Flank from loin', factor: 1.0 },
          { value: 'flanchet', label: 'Bavette de flanchet', label_en: 'Flank from belly', factor: 0.92 }
        ],
        default: 'aloyau'
      },
      {
        id: 'marinated',
        question: 'Marinée ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: false,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'La marinade attendrit les fibres longues',
        tip_en: 'Marinade tenderizes long fibers'
      },
      {
        id: 'high_heat',
        question: 'Feu très vif ?',
        question_en: 'Very high heat?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'La bavette se saisit toujours à feu vif',
        tip_en: 'Flank steak must be seared on high heat'
      },
      {
        id: 'rest_before_slice',
        question: 'Repos avant tranchage ?',
        question_en: 'Rest before slicing?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Repos 5 min puis trancher contre les fibres',
        tip_en: 'Rest 5 min then slice against the grain'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      fiberDirection: 'long',
      defaultThickness_cm: 1.5,
      maxDoneness: 'a_point'
    }
  },

  onglet: {
    questions: [
      {
        id: 'nerve_removed',
        question: 'Nerf central retiré ?',
        question_en: 'Central nerve removed?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'OBLIGATOIRE : le nerf rend la viande immangeable',
        tip_en: 'REQUIRED: nerve makes meat inedible'
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine', label_en: 'Thin', factor: 0.85 },
          { value: 'standard', label: 'Standard', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisse', label_en: 'Thick', factor: 1.15 }
        ],
        default: 'standard'
      },
      {
        id: 'quick_sear',
        question: 'Saisie rapide feu vif ?',
        question_en: 'Quick high-heat sear?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: true,
        factorYes: 0.85,
        factorNo: 1.0,
        tip: 'L\'onglet se mange saignant, saisie rapide obligatoire',
        tip_en: 'Onglet must be rare, quick sear required'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      fiberDirection: 'coarse',
      defaultThickness_cm: 2.5,
      maxDoneness: 'saignant'
    }
  },

  hampe: {
    questions: [
      {
        id: 'membrane_removed',
        question: 'Membrane retirée ?',
        question_en: 'Membrane removed?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.05,
        tip: 'La membrane peut être dure si laissée',
        tip_en: 'Membrane can be tough if left'
      },
      {
        id: 'cut_style',
        question: 'Style de coupe ?',
        question_en: 'Cut style?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entière', label_en: 'Whole', factor: 1.0 },
          { value: 'strips', label: 'En lanières (fajitas)', label_en: 'Strips (fajitas)', factor: 0.7 }
        ],
        default: 'whole'
      },
      {
        id: 'wok_style',
        question: 'Cuisson façon wok ?',
        question_en: 'Wok-style cooking?',
        type: 'boolean',
        showWhen: { techniques: ['wok'] },
        default: true,
        factorYes: 0.6,
        factorNo: 1.0,
        tip: 'Lanières fines, feu très vif, cuisson ultra-rapide',
        tip_en: 'Thin strips, very high heat, ultra-fast cooking'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      defaultThickness_cm: 1.5
    }
  },

  rumsteck: {
    questions: [
      {
        id: 'cut_type',
        question: 'Type de découpe ?',
        question_en: 'Cut type?',
        type: 'select',
        options: [
          { value: 'steak', label: 'En steak', label_en: 'Steak', factor: 1.0 },
          { value: 'roast', label: 'En rôti', label_en: 'Roast', factor: 1.3 },
          { value: 'cubes', label: 'En cubes (brochettes)', label_en: 'Cubes (skewers)', factor: 0.75 }
        ],
        default: 'steak'
      },
      {
        id: 'quality',
        question: 'Qualité/maturation ?',
        question_en: 'Quality/aging?',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard', label_en: 'Standard', factor: 1.0 },
          { value: 'matured', label: 'Maturé (21+ jours)', label_en: 'Aged (21+ days)', factor: 0.95 }
        ],
        default: 'standard'
      },
      {
        id: 'roast_sear',
        question: 'Saisir le rôti avant cuisson ?',
        question_en: 'Sear roast before cooking?',
        type: 'boolean',
        showWhen: { techniques: ['basse_temperature', 'rotissoire'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.05,
        tip: 'Saisir développe les arômes',
        tip_en: 'Searing develops flavors'
      },
      {
        id: 'skewer_size',
        question: 'Taille des cubes pour brochettes ?',
        question_en: 'Cube size for skewers?',
        type: 'select',
        showWhen: { techniques: ['grill_direct'] },
        options: [
          { value: 'small', label: 'Petits (2cm)', label_en: 'Small (1in)', factor: 0.7 },
          { value: 'medium', label: 'Moyens (3cm)', label_en: 'Medium (1.5in)', factor: 1.0 },
          { value: 'large', label: 'Gros (4cm)', label_en: 'Large (2in)', factor: 1.2 }
        ],
        default: 'medium'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      defaultThickness_cm: 2.5
    }
  },

  paleron: {
    questions: [
      {
        id: 'piece_size',
        question: 'Taille du morceau ?',
        question_en: 'Piece size?',
        type: 'select',
        options: [
          { value: 'small', label: 'Petit (< 500g)', label_en: 'Small (< 1lb)', factor: 0.8 },
          { value: 'medium', label: 'Moyen (500g-1kg)', label_en: 'Medium (1-2lb)', factor: 1.0 },
          { value: 'large', label: 'Gros (> 1kg)', label_en: 'Large (> 2lb)', factor: 1.25 }
        ],
        default: 'medium'
      },
      {
        id: 'liquid_level',
        question: 'Niveau de liquide ?',
        question_en: 'Liquid level?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'covered', label: 'Recouvert', label_en: 'Covered', factor: 0.9 },
          { value: 'half', label: 'À mi-hauteur', label_en: 'Half', factor: 1.0 },
          { value: 'minimal', label: 'Fond seulement', label_en: 'Minimal', factor: 1.15 }
        ],
        default: 'half',
        tip: 'Plus de liquide = cuisson plus douce et moelleuse',
        tip_en: 'More liquid = gentler, more tender result'
      },
      {
        id: 'seared_first',
        question: 'Viande saisie avant de braiser ?',
        question_en: 'Meat seared before braising?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.05,
        tip: 'Saisir = saveurs Maillard + meilleure texture',
        tip_en: 'Searing = Maillard flavors + better texture'
      },
      {
        id: 'sv_duration',
        question: 'Durée sous-vide prévue ?',
        question_en: 'Planned sous-vide duration?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'short', label: '12-24h (ferme)', label_en: '12-24h (firm)', factor: 0.7 },
          { value: 'medium', label: '24-48h (fondant)', label_en: '24-48h (tender)', factor: 1.0 },
          { value: 'long', label: '48-72h (effiloché)', label_en: '48-72h (shreddable)', factor: 1.3 }
        ],
        default: 'medium'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  joue: {
    questions: [
      {
        id: 'trimmed',
        question: 'Parée (gras/nerfs retirés) ?',
        question_en: 'Trimmed (fat/sinew removed)?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'La joue parée cuit plus uniformément',
        tip_en: 'Trimmed cheek cooks more evenly'
      },
      {
        id: 'wine_base',
        question: 'Base de cuisson au vin ?',
        question_en: 'Wine-based cooking liquid?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'Le vin attendrit et parfume la viande',
        tip_en: 'Wine tenderizes and flavors the meat'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'low', label: '60°C (très tendre)', label_en: '140°F (very tender)', factor: 1.3 },
          { value: 'medium', label: '68°C (effiloché)', label_en: '154°F (shreddable)', factor: 1.0 },
          { value: 'high', label: '77°C (traditionnel)', label_en: '170°F (traditional)', factor: 0.8 }
        ],
        default: 'medium'
      },
      {
        id: 'quantity',
        question: 'Nombre de joues ?',
        question_en: 'Number of cheeks?',
        type: 'select',
        options: [
          { value: 'few', label: '2-4 joues', label_en: '2-4 cheeks', factor: 1.0 },
          { value: 'many', label: '6+ joues', label_en: '6+ cheeks', factor: 1.1 }
        ],
        default: 'few'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      tissue: 'collagene',
      minCoreTemp: 88
    }
  },

  bourguignon: {
    questions: [
      {
        id: 'cube_size',
        question: 'Taille des cubes ?',
        question_en: 'Cube size?',
        type: 'select',
        options: [
          { value: 'small', label: 'Petits (3cm)', label_en: 'Small (1.2in)', factor: 0.85 },
          { value: 'medium', label: 'Moyens (4-5cm)', label_en: 'Medium (1.5-2in)', factor: 1.0 },
          { value: 'large', label: 'Gros (6cm+)', label_en: 'Large (2.5in+)', factor: 1.2 }
        ],
        default: 'medium',
        tip: 'Cubes réguliers = cuisson uniforme',
        tip_en: 'Even cubes = uniform cooking'
      },
      {
        id: 'seared',
        question: 'Viande saisie avant ?',
        question_en: 'Meat seared first?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Saisir développe les saveurs (réaction de Maillard)',
        tip_en: 'Searing develops flavors (Maillard reaction)'
      },
      {
        id: 'lid_type',
        question: 'Couvercle pendant la cuisson ?',
        question_en: 'Lid during cooking?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'tight', label: 'Bien fermé', label_en: 'Tightly sealed', factor: 0.95 },
          { value: 'loose', label: 'Entrouvert', label_en: 'Slightly open', factor: 1.05 }
        ],
        default: 'tight',
        tip: 'Couvercle fermé = moins d\'évaporation',
        tip_en: 'Sealed lid = less evaporation'
      },
      {
        id: 'oven_or_stove',
        question: 'Cuisson au four ou sur feu ?',
        question_en: 'Oven or stovetop?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'oven', label: 'Au four (150°C)', label_en: 'Oven (300°F)', factor: 1.0 },
          { value: 'stove', label: 'Sur feu doux', label_en: 'Low stovetop', factor: 1.1 }
        ],
        default: 'oven',
        tip: 'Le four offre une chaleur plus uniforme',
        tip_en: 'Oven provides more even heat'
      }
    ],
    thermalProfile: {
      geometry: 'cubes',
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  queue_de_boeuf: {
    questions: [
      {
        id: 'soaked',
        question: 'Dégorgée à l\'eau froide ?',
        question_en: 'Soaked in cold water?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Faire dégorger 2h pour retirer le sang',
        tip_en: 'Soak 2h to remove blood'
      },
      {
        id: 'piece_count',
        question: 'Nombre de tronçons ?',
        question_en: 'Number of pieces?',
        type: 'select',
        options: [
          { value: 'few', label: '3-4 tronçons', label_en: '3-4 pieces', factor: 1.0 },
          { value: 'many', label: '6+ tronçons', label_en: '6+ pieces', factor: 1.1 }
        ],
        default: 'few'
      },
      {
        id: 'liquid_type',
        question: 'Base de liquide ?',
        question_en: 'Liquid base?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin rouge', label_en: 'Red wine', factor: 0.95 },
          { value: 'stock', label: 'Bouillon', label_en: 'Stock', factor: 1.0 },
          { value: 'water', label: 'Eau (pot-au-feu)', label_en: 'Water (pot-au-feu)', factor: 1.05 }
        ],
        default: 'wine',
        tip: 'Le vin aide à attendrir la viande',
        tip_en: 'Wine helps tenderize the meat'
      },
      {
        id: 'seared_first',
        question: 'Tronçons saisis avant ?',
        question_en: 'Pieces seared first?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.05,
        tip: 'Saisir = plus de saveur, meilleure texture',
        tip_en: 'Searing = more flavor, better texture'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'high' },
      tissue: 'collagene',
      minCoreTemp: 90
    }
  },

  steak_hache: {
    questions: [
      {
        id: 'fat_content',
        question: 'Teneur en matière grasse ?',
        question_en: 'Fat content?',
        type: 'select',
        options: [
          { value: 'lean', label: '5% MG (maigre)', label_en: '5% fat (lean)', factor: 0.9 },
          { value: 'regular', label: '15% MG', label_en: '15% fat', factor: 1.0 },
          { value: 'rich', label: '20% MG (juteux)', label_en: '20% fat (juicy)', factor: 1.05 }
        ],
        default: 'regular'
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (1cm - smash)', label_en: 'Thin (smash)', factor: 0.6 },
          { value: 'standard', label: 'Standard (1.5-2cm)', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisse (3cm+ burger)', label_en: 'Thick (burger)', factor: 1.4 }
        ],
        default: 'standard'
      },
      {
        id: 'fresh',
        question: 'Viande ?',
        question_en: 'Meat?',
        type: 'select',
        options: [
          { value: 'fresh', label: 'Fraîche / fait maison', label_en: 'Fresh / homemade', factor: 1.0 },
          { value: 'frozen', label: 'Surgelée', label_en: 'Frozen', factor: 1.3 }
        ],
        default: 'fresh'
      }
    ],
    thermalProfile: {
      geometry: 'disc',
      defaultThickness_cm: 1.5
    }
  },

  tartare: {
    questions: [
      {
        id: 'preparation',
        question: 'Préparation ?',
        question_en: 'Preparation?',
        type: 'select',
        options: [
          { value: 'knife', label: 'Haché au couteau', label_en: 'Knife-cut', factor: 1.0 },
          { value: 'ground', label: 'Haché machine', label_en: 'Machine ground', factor: 1.0 }
        ],
        default: 'knife'
      }
    ],
    thermalProfile: {
      geometry: 'none',
      notes: 'Servi cru - pas de cuisson'
    }
  },

  // ============================================
  // PORC
  // ============================================

  filet_mignon: {
    questions: [
      {
        id: 'whole_or_medallions',
        question: 'Forme ?',
        question_en: 'Form?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entier', label_en: 'Whole', factor: 1.0 },
          { value: 'medallions', label: 'En médaillons', label_en: 'Medallions', factor: 0.7 },
          { value: 'wrapped', label: 'En croûte/lard', label_en: 'Wrapped', factor: 1.15 }
        ],
        default: 'whole'
      },
      {
        id: 'tied',
        question: 'Ficelé ?',
        question_en: 'Tied?',
        type: 'boolean',
        default: false,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Le ficelage uniformise la cuisson',
        tip_en: 'Tying ensures even cooking'
      },
      {
        id: 'seared_first',
        question: 'Saisi d\'abord ?',
        question_en: 'Seared first?',
        type: 'boolean',
        showWhen: { NOT_techniques: ['sous_vide'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'low', label: '58°C (rosé)', label_en: '136°F (medium-rare)', factor: 1.0 },
          { value: 'medium', label: '62°C (à point)', label_en: '144°F (medium)', factor: 1.1 },
          { value: 'high', label: '68°C (bien cuit)', label_en: '154°F (well done)', factor: 1.2 }
        ],
        default: 'medium',
        tip: 'Le porc doit atteindre 63°C minimum pour la sécurité',
        tip_en: 'Pork must reach 145°F for safety'
      },
      {
        id: 'sv_finish',
        question: 'Finition après sous-vide ?',
        question_en: 'Finish after sous-vide?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'sear', label: 'Saisie poêle', label_en: 'Pan sear', factor: 1.0 },
          { value: 'torch', label: 'Chalumeau', label_en: 'Torch', factor: 0.98 },
          { value: 'none', label: 'Aucune', label_en: 'None', factor: 0.95 }
        ],
        default: 'sear'
      },
      {
        id: 'oven_convection',
        question: 'Mode four ?',
        question_en: 'Oven mode?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'convection', label: 'Chaleur tournante', label_en: 'Convection', factor: 0.9 },
          { value: 'static', label: 'Statique', label_en: 'Static', factor: 1.0 }
        ],
        default: 'convection'
      }
    ],
    thermalProfile: {
      geometry: 'tapered_cylinder',
      defaultThickness_cm: 4,
      targetTemp: 63
    }
  },

  echine: {
    questions: [
      {
        id: 'bone',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: false,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'bbq_smoke',
        question: 'Fumage ?',
        question_en: 'Smoking?',
        type: 'select',
        showWhen: { techniques: ['bbq_low_slow'] },
        options: [
          { value: 'heavy', label: 'Intense (hickory/mesquite)', label_en: 'Heavy (hickory/mesquite)', factor: 1.1 },
          { value: 'medium', label: 'Moyen (chêne/pommier)', label_en: 'Medium (oak/apple)', factor: 1.0 },
          { value: 'light', label: 'Léger', label_en: 'Light', factor: 0.95 }
        ],
        default: 'medium',
        tip: 'Pulled pork traditionnel = 8-12h de fumage',
        tip_en: 'Traditional pulled pork = 8-12h smoking'
      },
      {
        id: 'bbq_wrap',
        question: 'Emballage mi-cuisson (Texas crutch) ?',
        question_en: 'Mid-cook wrap (Texas crutch)?',
        type: 'boolean',
        showWhen: { techniques: ['bbq_low_slow'] },
        default: false,
        factorYes: 0.75,
        factorNo: 1.0,
        tip: 'Accélère la cuisson mais ramollit la croûte',
        tip_en: 'Speeds up cooking but softens bark'
      },
      {
        id: 'slow_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'beer', label: 'Bière', label_en: 'Beer', factor: 1.0 },
          { value: 'cider', label: 'Cidre', label_en: 'Cider', factor: 1.0 },
          { value: 'stock', label: 'Bouillon', label_en: 'Stock', factor: 0.95 }
        ],
        default: 'beer'
      },
      {
        id: 'oven_temp',
        question: 'Température four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: 'Haute (200°C) - rôti', label_en: 'High (400°F) - roast', factor: 0.8 },
          { value: 'low', label: 'Basse (140°C) - effiloché', label_en: 'Low (285°F) - pulled', factor: 1.5 }
        ],
        default: 'high'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      defaultThickness_cm: 6
    }
  },

  cotes: {
    questions: [
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (< 2cm)', label_en: 'Thin', factor: 0.75 },
          { value: 'standard', label: 'Standard (2-3cm)', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisse (> 3cm)', label_en: 'Thick', factor: 1.35 }
        ],
        default: 'standard'
      },
      {
        id: 'brined',
        question: 'Saumurée ?',
        question_en: 'Brined?',
        type: 'boolean',
        default: false,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'La saumure garde la viande juteuse',
        tip_en: 'Brining keeps meat juicy'
      },
      {
        id: 'grill_zone',
        question: 'Zone de cuisson ?',
        question_en: 'Cooking zone?',
        type: 'select',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        options: [
          { value: 'direct', label: 'Directe (saisie)', label_en: 'Direct (sear)', factor: 0.9 },
          { value: 'indirect', label: 'Indirecte (pour épaisse)', label_en: 'Indirect (for thick)', factor: 1.2 },
          { value: 'reverse', label: 'Indirect puis direct', label_en: 'Indirect then direct', factor: 1.15 }
        ],
        default: 'direct'
      },
      {
        id: 'pan_butter',
        question: 'Beurrer en fin ?',
        question_en: 'Butter baste?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Le beurre noisette apporte saveur et moelleux',
        tip_en: 'Brown butter adds flavor and moisture'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      bone: { type: 'lateral', thermalMass: 'low' },
      defaultThickness_cm: 2.5
    }
  },

  cotelettes_porc: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.12,
        factorNo: 1.0
      },
      {
        id: 'brined',
        question: 'Saumurée ?',
        question_en: 'Brined?',
        type: 'boolean',
        default: false,
        factorYes: 0.95,
        factorNo: 1.0
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (< 2cm)', label_en: 'Thin', factor: 0.75 },
          { value: 'standard', label: 'Standard (2-3cm)', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisse (> 3cm)', label_en: 'Thick', factor: 1.35 }
        ],
        default: 'standard'
      },
      {
        id: 'plancha_oil',
        question: 'Huile sur viande ou plancha ?',
        question_en: 'Oil on meat or plancha?',
        type: 'select',
        showWhen: { tools: ['plancha'] },
        options: [
          { value: 'meat', label: 'Huiler la viande', label_en: 'Oil the meat', factor: 1.0 },
          { value: 'surface', label: 'Huiler la plancha', label_en: 'Oil the plancha', factor: 0.95 }
        ],
        default: 'meat'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temp?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'medium', label: '60°C (juteux)', label_en: '140°F (juicy)', factor: 1.0 },
          { value: 'safe', label: '63°C (sûr)', label_en: '145°F (safe)', factor: 1.1 }
        ],
        default: 'safe'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      bone: { type: 'lateral', thermalMass: 'low' },
      defaultThickness_cm: 2.5,
      targetTemp: 63
    }
  },

  roti: {
    questions: [
      {
        id: 'tied',
        question: 'Ficelé ?',
        question_en: 'Tied?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'stuffed',
        question: 'Farci ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.2,
        factorNo: 1.0
      },
      {
        id: 'fat_cap',
        question: 'Couenne/gras ?',
        question_en: 'Rind/fat?',
        type: 'select',
        options: [
          { value: 'with_rind', label: 'Avec couenne', label_en: 'With rind', factor: 1.1 },
          { value: 'fat_only', label: 'Gras sans couenne', label_en: 'Fat no rind', factor: 1.0 },
          { value: 'trimmed', label: 'Paré', label_en: 'Trimmed', factor: 0.9 }
        ],
        default: 'fat_only'
      },
      {
        id: 'oven_mode',
        question: 'Mode de cuisson four ?',
        question_en: 'Oven cooking mode?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'convection', label: 'Chaleur tournante', label_en: 'Convection', factor: 0.88 },
          { value: 'static', label: 'Statique traditionnel', label_en: 'Static traditional', factor: 1.0 },
          { value: 'steam', label: 'Vapeur (si dispo)', label_en: 'Steam (if available)', factor: 0.92 }
        ],
        default: 'convection'
      },
      {
        id: 'seared_first',
        question: 'Saisi d\'abord ?',
        question_en: 'Seared first?',
        type: 'boolean',
        showWhen: { techniques: ['basse_temperature'] },
        default: false,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'En basse température, saisir en fin est souvent préférable',
        tip_en: 'In low-temp cooking, searing at the end is often preferred'
      },
      {
        id: 'rotisserie',
        question: 'Rôtissoire tournante ?',
        question_en: 'Rotisserie?',
        type: 'boolean',
        showWhen: { techniques: ['rotissoire'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'La rotation assure une cuisson uniforme',
        tip_en: 'Rotation ensures even cooking'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      defaultThickness_cm: 8
    }
  },

  travers: {
    questions: [
      {
        id: 'membrane_removed',
        question: 'Membrane retirée ?',
        question_en: 'Membrane removed?',
        type: 'boolean',
        default: true,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'Retirer la membrane du dos pour plus de tendreté',
        tip_en: 'Remove back membrane for tenderness'
      },
      {
        id: 'wrapped',
        question: 'Emballé (Texas crutch) ?',
        question_en: 'Wrapped (Texas crutch)?',
        type: 'boolean',
        showWhen: { techniques: ['bbq_low_slow'] },
        default: false,
        factorYes: 0.75,
        factorNo: 1.0,
        tip: 'L\'emballage accélère la cuisson mais ramollit la croûte',
        tip_en: 'Wrapping speeds up but softens bark'
      },
      {
        id: 'bbq_wood',
        question: 'Type de bois de fumage ?',
        question_en: 'Smoking wood type?',
        type: 'select',
        showWhen: { techniques: ['bbq_low_slow'] },
        options: [
          { value: 'hickory', label: 'Hickory (classique)', label_en: 'Hickory (classic)', factor: 1.0 },
          { value: 'apple', label: 'Pommier (doux)', label_en: 'Apple (mild)', factor: 0.95 },
          { value: 'cherry', label: 'Cerisier (fruité)', label_en: 'Cherry (fruity)', factor: 0.95 },
          { value: 'mesquite', label: 'Mesquite (intense)', label_en: 'Mesquite (intense)', factor: 1.05 }
        ],
        default: 'hickory'
      },
      {
        id: 'bbq_spray',
        question: 'Spritz pendant cuisson ?',
        question_en: 'Spritz during cooking?',
        type: 'boolean',
        showWhen: { techniques: ['bbq_low_slow'] },
        default: true,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Vinaigre de cidre/jus de pomme toutes les heures',
        tip_en: 'Apple cider vinegar/juice every hour'
      },
      {
        id: 'oven_covered',
        question: 'Couvert pendant cuisson ?',
        question_en: 'Covered during cooking?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'covered', label: 'Couvert (plus tendre)', label_en: 'Covered (more tender)', factor: 0.85 },
          { value: 'uncovered', label: 'Découvert (plus croustillant)', label_en: 'Uncovered (crispier)', factor: 1.0 },
          { value: 'both', label: 'Couvert puis découvert', label_en: 'Covered then uncovered', factor: 0.92 }
        ],
        default: 'both'
      },
      {
        id: 'direct_sear',
        question: 'Saisie finale directe ?',
        question_en: 'Final direct sear?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'Attention à ne pas brûler le glaçage',
        tip_en: 'Be careful not to burn the glaze'
      }
    ],
    thermalProfile: {
      geometry: 'ribs',
      bone: { type: 'multiple', thermalMass: 'medium' },
      tissue: 'collagene'
    }
  },

  poitrine: {
    questions: [
      {
        id: 'skin',
        question: 'Avec couenne ?',
        question_en: 'With skin?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'skin_scored',
        question: 'Couenne incisée ?',
        question_en: 'Skin scored?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'Inciser en losanges pour une couenne croustillante',
        tip_en: 'Score in diamonds for crispy skin'
      },
      {
        id: 'initial_high_heat',
        question: 'Démarrage haute température ?',
        question_en: 'Start at high heat?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: '220°C pendant 30min puis baisser',
        tip_en: '425°F for 30min then reduce'
      },
      {
        id: 'slow_liquid',
        question: 'Type de liquide ?',
        question_en: 'Liquid type?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'stock', label: 'Bouillon', label_en: 'Stock', factor: 1.0 },
          { value: 'beer', label: 'Bière', label_en: 'Beer', factor: 0.95 },
          { value: 'cider', label: 'Cidre', label_en: 'Cider', factor: 0.95 }
        ],
        default: 'stock'
      },
      {
        id: 'bbq_rub',
        question: 'Assaisonnement sec (rub) ?',
        question_en: 'Dry rub?',
        type: 'boolean',
        showWhen: { techniques: ['bbq_low_slow'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Appliquer la veille pour meilleure pénétration',
        tip_en: 'Apply night before for better penetration'
      }
    ],
    thermalProfile: {
      geometry: 'slab',
      layers: [
        { type: 'peau', position: 'top' },
        { type: 'graisse', thickness_mm: 15, position: 'under_skin' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ]
    }
  },

  jarret: {
    questions: [
      {
        id: 'liquid_level',
        question: 'Niveau de liquide ?',
        question_en: 'Liquid level?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'covered', label: 'Recouvert', label_en: 'Covered', factor: 0.9 },
          { value: 'half', label: 'À mi-hauteur', label_en: 'Half', factor: 1.0 }
        ],
        default: 'half'
      },
      {
        id: 'seared_first',
        question: 'Saisi avant braisage ?',
        question_en: 'Seared before braising?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Saisir développe les saveurs (Maillard)',
        tip_en: 'Searing develops flavors (Maillard)'
      },
      {
        id: 'pressure_release',
        question: 'Type de dépressurisation ?',
        question_en: 'Pressure release type?',
        type: 'select',
        showWhen: { tools: ['autocuiseur'] },
        options: [
          { value: 'natural', label: 'Naturelle (plus tendre)', label_en: 'Natural (more tender)', factor: 1.1 },
          { value: 'quick', label: 'Rapide', label_en: 'Quick', factor: 1.0 }
        ],
        default: 'natural'
      },
      {
        id: 'slow_cooker_setting',
        question: 'Réglage mijoteuse ?',
        question_en: 'Slow cooker setting?',
        type: 'select',
        showWhen: { tools: ['mijoteuse'] },
        options: [
          { value: 'low', label: 'Bas (8-10h)', label_en: 'Low (8-10h)', factor: 1.3 },
          { value: 'high', label: 'Haut (4-6h)', label_en: 'High (4-6h)', factor: 0.8 }
        ],
        default: 'low'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      bone: { type: 'central', thermalMass: 'high' },
      tissue: 'collagene',
      minCoreTemp: 88
    }
  },

  // ============================================
  // AGNEAU
  // ============================================

  gigot: {
    questions: [
      {
        id: 'bone_status',
        question: 'Os du gigot ?',
        question_en: 'Leg bone?',
        type: 'select',
        options: [
          { value: 'bone_in', label: 'Avec os entier', label_en: 'Bone-in whole', factor: 1.18 },
          { value: 'shortened', label: 'Raccourci (sans souris)', label_en: 'Shortened', factor: 1.10 },
          { value: 'boneless', label: 'Désossé', label_en: 'Boneless', factor: 0.90 }
        ],
        default: 'bone_in'
      },
      {
        id: 'studded',
        question: 'Piqué à l\'ail ?',
        question_en: 'Studded with garlic?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0
      },
      {
        id: 'oven_initial',
        question: 'Température initiale four ?',
        question_en: 'Initial oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high_then_low', label: 'Haute puis basse (240°C → 160°C)', label_en: 'High then low', factor: 0.95 },
          { value: 'constant', label: 'Constante (180°C)', label_en: 'Constant (350°F)', factor: 1.0 },
          { value: 'low_slow', label: 'Basse constante (140°C)', label_en: 'Low constant', factor: 1.4 }
        ],
        default: 'high_then_low',
        tip: 'Haute température initiale pour croûte dorée',
        tip_en: 'High initial temp for golden crust'
      },
      {
        id: 'bbq_method',
        question: 'Méthode BBQ ?',
        question_en: 'BBQ method?',
        type: 'select',
        showWhen: { techniques: ['bbq_low_slow', 'grill_direct'] },
        options: [
          { value: 'indirect', label: 'Indirect (recommandé)', label_en: 'Indirect (recommended)', factor: 1.0 },
          { value: 'spit', label: 'À la broche', label_en: 'On spit', factor: 0.9 }
        ],
        default: 'indirect'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '54°C (rosé)', label_en: '129°F (rare)', factor: 1.0 },
          { value: 'medium', label: '58°C (à point)', label_en: '136°F (medium)', factor: 1.1 }
        ],
        default: 'rare'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central_large', thermalMass: 'high' },
      defaultThickness_cm: 8
    }
  },

  souris: {
    questions: [
      {
        id: 'cooking_liquid',
        question: 'Quantité de liquide ?',
        question_en: 'Liquid amount?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'partial', label: 'À mi-hauteur', label_en: 'Half-covered', factor: 1.0 },
          { value: 'full', label: 'Recouverte', label_en: 'Fully covered', factor: 0.90 },
          { value: 'minimal', label: 'Fond seulement', label_en: 'Minimal', factor: 1.15 }
        ],
        default: 'partial'
      },
      {
        id: 'lid',
        question: 'Couvercle ?',
        question_en: 'Lid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'sealed', label: 'Hermétique', label_en: 'Sealed', factor: 0.85 },
          { value: 'partial', label: 'Entrouvert', label_en: 'Partial', factor: 1.0 },
          { value: 'open', label: 'Sans couvercle', label_en: 'No lid', factor: 1.20 }
        ],
        default: 'sealed'
      },
      {
        id: 'seared_first',
        question: 'Saisie avant braisage ?',
        question_en: 'Seared before braising?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Saisir à feu vif pour colorer',
        tip_en: 'Sear on high heat to brown'
      },
      {
        id: 'sv_time',
        question: 'Durée sous-vide ?',
        question_en: 'Sous-vide duration?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'short', label: '12h (ferme)', label_en: '12h (firm)', factor: 0.8 },
          { value: 'medium', label: '24h (tendre)', label_en: '24h (tender)', factor: 1.0 },
          { value: 'long', label: '48h (effiloché)', label_en: '48h (fall-apart)', factor: 1.2 }
        ],
        default: 'medium'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'medium' },
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  carre_agneau: {
    questions: [
      {
        id: 'frenched',
        question: 'Côtes manchonnées ?',
        question_en: 'Frenched?',
        type: 'boolean',
        default: true,
        factorYes: 0.97,
        factorNo: 1.0,
        tip: 'Protéger les os avec du papier alu',
        tip_en: 'Cover bones with foil'
      },
      {
        id: 'crust',
        question: 'En croûte d\'herbes ?',
        question_en: 'Herb crust?',
        type: 'boolean',
        default: false,
        factorYes: 1.08,
        factorNo: 1.0
      },
      {
        id: 'fat_cap',
        question: 'Couche de gras ?',
        question_en: 'Fat cap?',
        type: 'select',
        options: [
          { value: 'intact', label: 'Intacte', label_en: 'Intact', factor: 1.05 },
          { value: 'scored', label: 'Incisée', label_en: 'Scored', factor: 1.0 },
          { value: 'removed', label: 'Retirée', label_en: 'Removed', factor: 0.92 }
        ],
        default: 'scored'
      },
      {
        id: 'sear_first',
        question: 'Saisir avant four ?',
        question_en: 'Sear before oven?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Saisir côté gras en premier',
        tip_en: 'Sear fat side first'
      },
      {
        id: 'rest_time',
        question: 'Temps de repos ?',
        question_en: 'Rest time?',
        type: 'select',
        showWhen: { techniques: ['saisie_simple', 'reverse_sear'] },
        options: [
          { value: 'short', label: '5 min', label_en: '5 min', factor: 1.0 },
          { value: 'medium', label: '10 min (recommandé)', label_en: '10 min (recommended)', factor: 1.0 }
        ],
        default: 'medium'
      },
      {
        id: 'grill_indirect',
        question: 'Finition directe ?',
        question_en: 'Direct finish?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        default: true,
        factorYes: 0.95,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'arc',
      bone: { type: 'multiple_lateral', thermalMass: 'medium' },
      defaultThickness_cm: 3
    }
  },

  carre: {
    questions: [
      {
        id: 'frenched',
        question: 'Côtes manchonnées ?',
        question_en: 'Frenched?',
        type: 'boolean',
        default: true,
        factorYes: 0.97,
        factorNo: 1.0
      },
      {
        id: 'crust',
        question: 'En croûte ?',
        question_en: 'Crusted?',
        type: 'boolean',
        default: false,
        factorYes: 1.08,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'arc',
      bone: { type: 'multiple_lateral', thermalMass: 'medium' },
      defaultThickness_cm: 3
    }
  },

  cote: {
    questions: [
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (côtelette)', label_en: 'Thin (chop)', factor: 0.7 },
          { value: 'standard', label: 'Standard', label_en: 'Standard', factor: 1.0 },
          { value: 'double', label: 'Double', label_en: 'Double', factor: 1.4 }
        ],
        default: 'standard'
      },
      {
        id: 'fat_trimmed',
        question: 'Gras paré ?',
        question_en: 'Fat trimmed?',
        type: 'boolean',
        default: false,
        factorYes: 0.95,
        factorNo: 1.0
      },
      {
        id: 'high_heat',
        question: 'Feu très vif ?',
        question_en: 'Very high heat?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple'], tools: ['poele', 'plancha', 'grill'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'L\'agneau supporte le feu vif - saisir rapidement',
        tip_en: 'Lamb handles high heat - sear quickly'
      },
      {
        id: 'rest_covered',
        question: 'Repos couvert ?',
        question_en: 'Rest covered?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: false,
        factorYes: 1.05,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      bone: { type: 'lateral', thermalMass: 'low' },
      defaultThickness_cm: 2
    }
  },

  collier: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'seared_first',
        question: 'Morceaux saisis avant ?',
        question_en: 'Pieces seared first?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'liquid_base',
        question: 'Base de liquide ?',
        question_en: 'Liquid base?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin rouge', label_en: 'Red wine', factor: 0.95 },
          { value: 'stock', label: 'Bouillon', label_en: 'Stock', factor: 1.0 },
          { value: 'tomato', label: 'Base tomate', label_en: 'Tomato base', factor: 1.0 }
        ],
        default: 'stock'
      },
      {
        id: 'spices',
        question: 'Épices orientales ?',
        question_en: 'Oriental spices?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: false,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Cumin, coriandre, cannelle pour tajine/curry',
        tip_en: 'Cumin, coriander, cinnamon for tagine/curry'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  epaule: {
    questions: [
      {
        id: 'bone_status',
        question: 'Os ?',
        question_en: 'Bone?',
        type: 'select',
        options: [
          { value: 'bone_in', label: 'Avec os', label_en: 'Bone-in', factor: 1.15 },
          { value: 'boneless', label: 'Désossée', label_en: 'Boneless', factor: 1.0 },
          { value: 'rolled', label: 'Roulée ficelée', label_en: 'Rolled tied', factor: 1.05 }
        ],
        default: 'bone_in'
      },
      {
        id: 'oven_temp',
        question: 'Température four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: 'Haute (200°C) - rôti classique', label_en: 'High (400°F) - classic roast', factor: 0.8 },
          { value: 'medium', label: 'Moyenne (160°C)', label_en: 'Medium (320°F)', factor: 1.0 },
          { value: 'low', label: 'Basse (120°C) - effilochée', label_en: 'Low (250°F) - pull-apart', factor: 2.0 }
        ],
        default: 'medium'
      },
      {
        id: 'covered',
        question: 'Couvert pendant cuisson ?',
        question_en: 'Covered during cooking?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente', 'basse_temperature'] },
        options: [
          { value: 'sealed', label: 'Couvert hermétique', label_en: 'Sealed', factor: 0.85 },
          { value: 'partial', label: 'Couvert puis découvert', label_en: 'Covered then uncovered', factor: 0.95 },
          { value: 'open', label: 'Découvert', label_en: 'Uncovered', factor: 1.1 }
        ],
        default: 'partial'
      },
      {
        id: 'liquid_amount',
        question: 'Quantité de liquide ?',
        question_en: 'Liquid amount?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'none', label: 'Sans (rôti sec)', label_en: 'None (dry roast)', factor: 1.0 },
          { value: 'minimal', label: 'Fond de sauce', label_en: 'Sauce base', factor: 0.95 },
          { value: 'braising', label: 'Mi-hauteur (braisé)', label_en: 'Half-height (braised)', factor: 0.9 }
        ],
        default: 'minimal'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      defaultThickness_cm: 10
    }
  },

  noisettes: {
    questions: [
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fines (2cm)', label_en: 'Thin', factor: 0.8 },
          { value: 'standard', label: 'Standard (3cm)', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épaisses (4cm)', label_en: 'Thick', factor: 1.2 }
        ],
        default: 'standard'
      },
      {
        id: 'wrapped',
        question: 'Bardées/Entourées de lard ?',
        question_en: 'Bacon wrapped?',
        type: 'boolean',
        default: false,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'pan_butter',
        question: 'Beurrer en fin ?',
        question_en: 'Butter baste at end?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Arroser de beurre noisette pour le goût',
        tip_en: 'Baste with brown butter for flavor'
      },
      {
        id: 'high_heat',
        question: 'Feu très vif ?',
        question_en: 'Very high heat?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple'] },
        default: true,
        factorYes: 0.85,
        factorNo: 1.0,
        tip: 'Saisie rapide 1-2 min par face',
        tip_en: 'Quick sear 1-2 min per side'
      }
    ],
    thermalProfile: {
      geometry: 'disc',
      defaultThickness_cm: 3
    }
  },

  selle: {
    questions: [
      {
        id: 'preparation',
        question: 'Préparation ?',
        question_en: 'Preparation?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entière', label_en: 'Whole', factor: 1.0 },
          { value: 'boned_rolled', label: 'Désossée roulée', label_en: 'Boned rolled', factor: 0.9 },
          { value: 'crown', label: 'En couronne', label_en: 'Crown', factor: 1.1 }
        ],
        default: 'whole'
      },
      {
        id: 'oven_convection',
        question: 'Mode four ?',
        question_en: 'Oven mode?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'convection', label: 'Chaleur tournante', label_en: 'Convection', factor: 0.9 },
          { value: 'static', label: 'Statique', label_en: 'Static', factor: 1.0 }
        ],
        default: 'static'
      },
      {
        id: 'sear_first',
        question: 'Saisir avant four ?',
        question_en: 'Sear before oven?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Saisir sur toutes les faces à feu vif',
        tip_en: 'Sear on all sides on high heat'
      }
    ],
    thermalProfile: {
      geometry: 'saddle',
      bone: { type: 'central', thermalMass: 'high' },
      defaultThickness_cm: 6
    }
  },

  blanquette: {
    questions: [
      {
        id: 'cut_size',
        question: 'Taille des morceaux ?',
        question_en: 'Piece size?',
        type: 'select',
        options: [
          { value: 'small', label: 'Petits (3cm)', label_en: 'Small', factor: 0.85 },
          { value: 'medium', label: 'Moyens (4-5cm)', label_en: 'Medium', factor: 1.0 },
          { value: 'large', label: 'Gros (6cm)', label_en: 'Large', factor: 1.15 }
        ],
        default: 'medium'
      },
      {
        id: 'blanched',
        question: 'Blanchi avant ?',
        question_en: 'Blanched first?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Blanchir retire les impuretés',
        tip_en: 'Blanching removes impurities'
      }
    ],
    thermalProfile: {
      geometry: 'cubes',
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  // ============================================
  // VEAU
  // ============================================

  escalope: {
    questions: [
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'very_thin', label: 'Très fine (escalope milanaise)', label_en: 'Very thin (milanese)', factor: 0.5 },
          { value: 'thin', label: 'Fine', label_en: 'Thin', factor: 0.7 },
          { value: 'standard', label: 'Standard', label_en: 'Standard', factor: 1.0 }
        ],
        default: 'thin'
      },
      {
        id: 'breaded',
        question: 'Panée ?',
        question_en: 'Breaded?',
        type: 'boolean',
        default: false,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'pounded',
        question: 'Aplatie au maillet ?',
        question_en: 'Pounded?',
        type: 'boolean',
        default: false,
        factorYes: 0.85,
        factorNo: 1.0
      },
      {
        id: 'pan_fat',
        question: 'Matière grasse ?',
        question_en: 'Cooking fat?',
        type: 'select',
        showWhen: { tools: ['poele'] },
        options: [
          { value: 'butter_clarified', label: 'Beurre clarifié', label_en: 'Clarified butter', factor: 1.0 },
          { value: 'butter_oil', label: 'Beurre + huile', label_en: 'Butter + oil', factor: 1.0 },
          { value: 'oil', label: 'Huile seule', label_en: 'Oil only', factor: 0.95 }
        ],
        default: 'butter_clarified',
        tip: 'Le beurre clarifié supporte la haute température',
        tip_en: 'Clarified butter handles high heat'
      },
      {
        id: 'sauce_pan',
        question: 'Déglacer la poêle ?',
        question_en: 'Deglaze pan?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      defaultThickness_cm: 0.8
    }
  },

  noix: {
    questions: [
      {
        id: 'whole_or_sliced',
        question: 'Forme ?',
        question_en: 'Form?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entière (rôti)', label_en: 'Whole (roast)', factor: 1.0 },
          { value: 'escalopes', label: 'En escalopes', label_en: 'Escalopes', factor: 0.6 },
          { value: 'medallions', label: 'En médaillons', label_en: 'Medallions', factor: 0.7 }
        ],
        default: 'whole'
      },
      {
        id: 'barded',
        question: 'Bardée ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: false,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Le veau est maigre - le bardage évite le dessèchement',
        tip_en: 'Veal is lean - barding prevents drying'
      },
      {
        id: 'oven_temp',
        question: 'Température four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: 'Haute (200°C)', label_en: 'High (400°F)', factor: 0.85 },
          { value: 'medium', label: 'Moyenne (160°C)', label_en: 'Medium (320°F)', factor: 1.0 },
          { value: 'low', label: 'Basse température (80°C)', label_en: 'Low temp (175°F)', factor: 1.8 }
        ],
        default: 'medium'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'tender', label: '58°C (tendre)', label_en: '136°F (tender)', factor: 1.0 },
          { value: 'medium', label: '62°C (à point)', label_en: '144°F (medium)', factor: 1.1 }
        ],
        default: 'tender'
      },
      {
        id: 'arrosage',
        question: 'Arroser pendant cuisson ?',
        question_en: 'Baste during cooking?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Le veau a besoin d\'arrosage régulier',
        tip_en: 'Veal needs regular basting'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      defaultThickness_cm: 8
    }
  },

  tendron: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'seared_first',
        question: 'Saisi avant braisage ?',
        question_en: 'Seared before braising?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'liquid_type',
        question: 'Type de liquide ?',
        question_en: 'Liquid type?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine_white', label: 'Vin blanc', label_en: 'White wine', factor: 0.95 },
          { value: 'stock', label: 'Fond de veau', label_en: 'Veal stock', factor: 1.0 },
          { value: 'tomato', label: 'Base tomate', label_en: 'Tomato base', factor: 1.0 }
        ],
        default: 'stock'
      },
      {
        id: 'grill_zone',
        question: 'Zone de grill ?',
        question_en: 'Grill zone?',
        type: 'select',
        showWhen: { techniques: ['grill_direct'] },
        options: [
          { value: 'direct', label: 'Directe (croustillant)', label_en: 'Direct (crispy)', factor: 0.8 },
          { value: 'indirect_then_direct', label: 'Indirect puis direct', label_en: 'Indirect then direct', factor: 1.0 }
        ],
        default: 'indirect_then_direct',
        tip: 'Le tendron est gras - attention aux flambées',
        tip_en: 'Tendron is fatty - watch for flare-ups'
      }
    ],
    thermalProfile: {
      geometry: 'ribs',
      bone: { type: 'multiple', thermalMass: 'medium' },
      tissue: 'collagene'
    }
  },

  ris: {
    questions: [
      {
        id: 'soaked',
        question: 'Dégorgé et blanchi ?',
        question_en: 'Soaked and blanched?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.2,
        tip: 'OBLIGATOIRE : dégorger 2h puis blanchir',
        tip_en: 'REQUIRED: soak 2h then blanch'
      },
      {
        id: 'pressed',
        question: 'Pressé après blanchiment ?',
        question_en: 'Pressed after blanching?',
        type: 'boolean',
        default: true,
        factorYes: 0.95,
        factorNo: 1.0
      },
      {
        id: 'pan_butter',
        question: 'Cuisson au beurre ?',
        question_en: 'Butter cooking?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Beurre noisette classique pour les ris',
        tip_en: 'Brown butter is classic for sweetbreads'
      },
      {
        id: 'flour_coating',
        question: 'Fariner avant cuisson ?',
        question_en: 'Flour before cooking?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'La farine aide à dorer',
        tip_en: 'Flour helps browning'
      },
      {
        id: 'braise_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'cream', label: 'Crème', label_en: 'Cream', factor: 1.0 },
          { value: 'wine', label: 'Vin blanc', label_en: 'White wine', factor: 0.95 },
          { value: 'stock', label: 'Fond de veau', label_en: 'Veal stock', factor: 1.0 }
        ],
        default: 'cream'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      defaultThickness_cm: 3
    }
  },

  // ============================================
  // VOLAILLE
  // ============================================

  poulet_entier: {
    questions: [
      {
        id: 'stuffed',
        question: 'Farci ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.25,
        factorNo: 1.0,
        tip: 'La farce doit aussi atteindre 74°C',
        tip_en: 'Stuffing must reach 165°F too'
      },
      {
        id: 'trussed',
        question: 'Bridé ?',
        question_en: 'Trussed?',
        type: 'boolean',
        default: true,
        factorYes: 1.08,
        factorNo: 1.0
      },
      {
        id: 'skin_prep',
        question: 'Préparation peau ?',
        question_en: 'Skin prep?',
        type: 'select',
        options: [
          { value: 'dry', label: 'Séchée (croustillante)', label_en: 'Dried (crispy)', factor: 0.95 },
          { value: 'butter', label: 'Beurrée', label_en: 'Buttered', factor: 1.0 },
          { value: 'wet', label: 'Non préparée', label_en: 'Unprepared', factor: 1.05 }
        ],
        default: 'butter'
      },
      {
        id: 'spatchcocked',
        question: 'En crapaudine ?',
        question_en: 'Spatchcocked?',
        type: 'boolean',
        default: false,
        factorYes: 0.7,
        factorNo: 1.0,
        tip: 'Crapaudine = cuisson 30% plus rapide et plus uniforme',
        tip_en: 'Spatchcock = 30% faster and more even'
      },
      {
        id: 'oven_method',
        question: 'Méthode four ?',
        question_en: 'Oven method?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high_constant', label: 'Haute constante (200°C)', label_en: 'High constant (400°F)', factor: 0.85 },
          { value: 'high_then_low', label: 'Haute puis basse', label_en: 'High then low', factor: 0.95 },
          { value: 'low_slow', label: 'Basse température', label_en: 'Low temperature', factor: 1.4 }
        ],
        default: 'high_constant'
      },
      {
        id: 'bbq_indirect',
        question: 'Cuisson indirecte ?',
        question_en: 'Indirect cooking?',
        type: 'boolean',
        showWhen: { techniques: ['bbq_low_slow', 'grill_direct'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.8,
        tip: 'Toujours indirect pour poulet entier',
        tip_en: 'Always indirect for whole chicken'
      },
      {
        id: 'rotisserie',
        question: 'À la broche ?',
        question_en: 'Rotisserie?',
        type: 'boolean',
        showWhen: { techniques: ['rotissoire'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      zones: ['breast', 'thigh', 'wing'],
      targetTemps: { breast: 74, thigh: 82 }
    }
  },

  blancs: {
    questions: [
      {
        id: 'skin',
        question: 'Avec peau ?',
        question_en: 'With skin?',
        type: 'boolean',
        default: true,
        factorYes: 1.05,
        factorNo: 1.0
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fin (aiguillettes)', label_en: 'Thin (strips)', factor: 0.6 },
          { value: 'standard', label: 'Standard', label_en: 'Standard', factor: 1.0 },
          { value: 'thick', label: 'Épais (suprême)', label_en: 'Thick (supreme)', factor: 1.2 }
        ],
        default: 'standard'
      },
      {
        id: 'pounded',
        question: 'Aplati ?',
        question_en: 'Pounded?',
        type: 'boolean',
        default: false,
        factorYes: 0.75,
        factorNo: 1.0
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'juicy', label: '60°C (très juteux)', label_en: '140°F (very juicy)', factor: 1.0 },
          { value: 'safe', label: '63°C (sûr)', label_en: '145°F (safe)', factor: 1.1 },
          { value: 'traditional', label: '74°C (traditionnel)', label_en: '165°F (traditional)', factor: 1.3 }
        ],
        default: 'safe',
        tip: 'À 60°C, pasteuriser plus longtemps',
        tip_en: 'At 140°F, pasteurize longer'
      },
      {
        id: 'pan_skin_down',
        question: 'Commencer côté peau ?',
        question_en: 'Start skin side down?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95,
        tip: 'Peau croustillante = commencer côté peau à froid',
        tip_en: 'Crispy skin = start skin side on cold pan'
      },
      {
        id: 'brine',
        question: 'Saumuré avant ?',
        question_en: 'Brined before?',
        type: 'boolean',
        showWhen: { techniques: ['saisie_simple', 'grill_direct'] },
        default: false,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'Saumure = blanc plus juteux',
        tip_en: 'Brining = juicier breast'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      layers: [
        { type: 'peau', position: 'top' },
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      defaultThickness_cm: 3,
      targetTemp: 74
    }
  },

  cuisses: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'skin',
        question: 'Avec peau ?',
        question_en: 'With skin?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'separated',
        question: 'Haut de cuisse séparé du pilon ?',
        question_en: 'Thigh separated from drumstick?',
        type: 'boolean',
        default: false,
        factorYes: 0.85,
        factorNo: 1.0
      },
      {
        id: 'bbq_zone',
        question: 'Zone BBQ ?',
        question_en: 'BBQ zone?',
        type: 'select',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        options: [
          { value: 'indirect', label: 'Indirecte (moins risqué)', label_en: 'Indirect (less risky)', factor: 1.1 },
          { value: 'direct_low', label: 'Directe feu doux', label_en: 'Direct low heat', factor: 1.0 },
          { value: 'combo', label: 'Indirect puis direct', label_en: 'Indirect then direct', factor: 1.05 }
        ],
        default: 'combo',
        tip: 'La peau peut brûler en direct - surveiller',
        tip_en: 'Skin can burn on direct - watch carefully'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'low', label: '65°C (tendre)', label_en: '149°F (tender)', factor: 1.0 },
          { value: 'high', label: '74°C (effiloché)', label_en: '165°F (shreddable)', factor: 1.2 }
        ],
        default: 'low'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'medium' },
      targetTemp: 82
    }
  },

  ailes: {
    questions: [
      {
        id: 'wing_type',
        question: 'Type ?',
        question_en: 'Type?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entières', label_en: 'Whole', factor: 1.0 },
          { value: 'drumettes', label: 'Manchons seuls', label_en: 'Drumettes only', factor: 0.85 },
          { value: 'flats', label: 'Plats seuls', label_en: 'Flats only', factor: 0.8 }
        ],
        default: 'whole'
      },
      {
        id: 'oven_temp',
        question: 'Température four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: 'Haute (220°C) - croustillant', label_en: 'High (425°F) - crispy', factor: 0.85 },
          { value: 'medium', label: 'Moyenne (180°C)', label_en: 'Medium (350°F)', factor: 1.0 }
        ],
        default: 'high'
      },
      {
        id: 'bbq_direct',
        question: 'Cuisson directe ?',
        question_en: 'Direct heat?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.1,
        tip: 'Surveiller les flambées dues au gras',
        tip_en: 'Watch for flare-ups from fat'
      },
      {
        id: 'sauce_before',
        question: 'Saucer avant cuisson ?',
        question_en: 'Sauce before cooking?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct', 'bbq_low_slow'] },
        default: false,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Les sauces sucrées brûlent - saucer en fin',
        tip_en: 'Sweet sauces burn - sauce at end'
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      bone: { type: 'multiple', thermalMass: 'low' },
      targetTemp: 74
    }
  },

  magret: {
    questions: [
      {
        id: 'fat_scored',
        question: 'Gras quadrillé ?',
        question_en: 'Fat scored?',
        type: 'boolean',
        default: true,
        factorYes: 0.88,
        factorNo: 1.0,
        tip: 'Le quadrillage permet au gras de fondre uniformément',
        tip_en: 'Scoring allows fat to render evenly'
      },
      {
        id: 'cold_start',
        question: 'Démarrage à froid ?',
        question_en: 'Cold start?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.25,
        factorNo: 1.0,
        tip: 'Recommandé pour un rendu de gras optimal',
        tip_en: 'Recommended for optimal fat rendering'
      },
      {
        id: 'skin_side_time',
        question: 'Temps côté gras ?',
        question_en: 'Fat side time?',
        type: 'select',
        showWhen: { techniques: ['saisie_simple'], tools: ['poele', 'plancha'] },
        options: [
          { value: 'court', label: '70% côté gras', label_en: '70% fat side', factor: 1.1 },
          { value: 'moyen', label: '80% côté gras', label_en: '80% fat side', factor: 1.0 },
          { value: 'long', label: '90% côté gras', label_en: '90% fat side', factor: 0.95 }
        ],
        default: 'moyen'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '54°C (saignant)', label_en: '129°F (rare)', factor: 0.95 },
          { value: 'medium_rare', label: '57°C (rosé)', label_en: '135°F (medium-rare)', factor: 1.0 },
          { value: 'medium', label: '60°C (à point)', label_en: '140°F (medium)', factor: 1.1 }
        ],
        default: 'medium_rare',
        tip: 'Le magret se déguste rosé',
        tip_en: 'Duck breast is best medium-rare'
      },
      {
        id: 'grill_direct',
        question: 'Zone directe au grill ?',
        question_en: 'Direct heat zone?',
        type: 'boolean',
        showWhen: { techniques: ['grill_direct'], tools: ['grill', 'bbq_direct'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.1,
        tip: 'Attention aux flambées avec le gras de canard',
        tip_en: 'Watch for flare-ups with duck fat'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      layers: [
        { type: 'graisse', thickness_mm: 8, position: 'top' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 2.5
    }
  },

  confit: {
    questions: [
      {
        id: 'from_scratch',
        question: 'Type ?',
        question_en: 'Type?',
        type: 'select',
        options: [
          { value: 'reheat', label: 'Réchauffer un confit', label_en: 'Reheat confit', factor: 0.5 },
          { value: 'fresh', label: 'Confire de la cuisse fraîche', label_en: 'Confit fresh leg', factor: 1.0 }
        ],
        default: 'reheat'
      },
      {
        id: 'crispy_skin',
        question: 'Peau croustillante désirée ?',
        question_en: 'Want crispy skin?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Finir au grill ou poêle pour croustillant',
        tip_en: 'Finish under broiler for crispy'
      },
      {
        id: 'oven_crisp',
        question: 'Croustiller au four ?',
        question_en: 'Crisp in oven?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.15,
        factorNo: 1.0,
        tip: 'Four chaud (200°C) pour croustiller',
        tip_en: 'Hot oven (400°F) to crisp'
      },
      {
        id: 'pan_finish',
        question: 'Finir à la poêle ?',
        question_en: 'Finish in pan?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Côté peau dans la poêle chaude',
        tip_en: 'Skin-side down in hot pan'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'medium' }
    }
  },

  canard_entier: {
    questions: [
      {
        id: 'pricked',
        question: 'Peau piquée ?',
        question_en: 'Skin pricked?',
        type: 'boolean',
        default: true,
        factorYes: 0.95,
        factorNo: 1.0,
        tip: 'Piquer permet au gras de s\'écouler',
        tip_en: 'Pricking lets fat drain'
      },
      {
        id: 'stuffed',
        question: 'Farci ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.2,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C (croustillant)', label_en: '425°F (crispy)', factor: 0.85 },
          { value: 'medium', label: '180°C (classique)', label_en: '350°F (classic)', factor: 1.0 },
          { value: 'low', label: '150°C (lent)', label_en: '300°F (slow)', factor: 1.5 }
        ],
        default: 'medium'
      },
      {
        id: 'rotisserie',
        question: 'À la rôtissoire ?',
        question_en: 'Rotisserie?',
        type: 'boolean',
        showWhen: { techniques: ['rotissoire'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Rotation régulière pour cuisson uniforme',
        tip_en: 'Even rotation for uniform cooking'
      },
      {
        id: 'bbq_indirect',
        question: 'Zone indirecte ?',
        question_en: 'Indirect zone?',
        type: 'boolean',
        showWhen: { tools: ['bbq_indirect'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.8,
        tip: 'Essentiel pour éviter les flambées avec le gras',
        tip_en: 'Essential to avoid flare-ups with fat'
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      layers: [
        { type: 'peau', position: 'outer' },
        { type: 'graisse', thickness_mm: 10, position: 'subcutaneous' }
      ]
    }
  },

  entier: {
    questions: [
      {
        id: 'bird_type',
        question: 'Type de volaille ?',
        question_en: 'Bird type?',
        type: 'select',
        options: [
          { value: 'chicken', label: 'Poulet', label_en: 'Chicken', factor: 1.0 },
          { value: 'turkey', label: 'Dinde', label_en: 'Turkey', factor: 1.3 },
          { value: 'guinea_fowl', label: 'Pintade', label_en: 'Guinea fowl', factor: 0.9 }
        ],
        default: 'chicken'
      },
      {
        id: 'stuffed',
        question: 'Farci ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.25,
        factorNo: 1.0
      },
      {
        id: 'basted',
        question: 'Arrosé régulièrement ?',
        question_en: 'Basted regularly?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 },
          { value: 'low', label: '150°C', label_en: '300°F', factor: 1.4 }
        ],
        default: 'medium'
      },
      {
        id: 'rotisserie',
        question: 'À la rôtissoire ?',
        question_en: 'Rotisserie?',
        type: 'boolean',
        showWhen: { techniques: ['rotissoire'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Cuisson uniforme avec rotation',
        tip_en: 'Uniform cooking with rotation'
      },
      {
        id: 'bbq_indirect',
        question: 'Zone indirecte ?',
        question_en: 'Indirect zone?',
        type: 'boolean',
        showWhen: { tools: ['bbq_indirect'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.85
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      targetTemp: 74
    }
  },

  entiere: {
    questions: [
      {
        id: 'barded',
        question: 'Bardée ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'La pintade est maigre - bardage recommandé',
        tip_en: 'Guinea fowl is lean - barding recommended'
      },
      {
        id: 'trussed',
        question: 'Bridée ?',
        question_en: 'Trussed?',
        type: 'boolean',
        default: true,
        factorYes: 1.05,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '200°C', label_en: '400°F', factor: 0.9 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'medium'
      },
      {
        id: 'rotisserie',
        question: 'À la rôtissoire ?',
        question_en: 'Rotisserie?',
        type: 'boolean',
        showWhen: { techniques: ['rotissoire'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      targetTemp: 74
    }
  },

  cuisse: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'skin',
        question: 'Avec peau ?',
        question_en: 'With skin?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      },
      {
        id: 'pan_sear',
        question: 'Saisir la peau ?',
        question_en: 'Sear the skin?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Côté peau en premier pour croustillant',
        tip_en: 'Skin-side first for crispy'
      },
      {
        id: 'bbq_zone',
        question: 'Zone de cuisson ?',
        question_en: 'Cooking zone?',
        type: 'select',
        showWhen: { tools: ['grill', 'bbq_direct', 'bbq_indirect'] },
        options: [
          { value: 'direct', label: 'Directe', label_en: 'Direct', factor: 0.85 },
          { value: 'indirect', label: 'Indirecte', label_en: 'Indirect', factor: 1.2 },
          { value: 'both', label: 'Les deux', label_en: 'Both', factor: 1.0 }
        ],
        default: 'both',
        tip: 'Finir en indirect pour cuisson à coeur',
        tip_en: 'Finish indirect for even cooking'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'tender', label: '65°C (tendre)', label_en: '149°F (tender)', factor: 1.0 },
          { value: 'fall_off', label: '74°C (effiloché)', label_en: '165°F (fall-off)', factor: 1.3 }
        ],
        default: 'tender'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'medium' },
      targetTemp: 82
    }
  },

  // ============================================
  // GIBIER - Grands gibiers
  // ============================================

  filet_cerf: {
    questions: [
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: true,
        factorYes: 0.92,
        factorNo: 1.0,
        tip: 'La marinade attendrit la chair dense',
        tip_en: 'Marinade tenderizes dense meat'
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0,
        tip: 'ESSENTIEL : le cerf est très maigre',
        tip_en: 'ESSENTIAL: venison is very lean'
      },
      {
        id: 'tied',
        question: 'Ficelé ?',
        question_en: 'Tied?',
        type: 'boolean',
        default: true,
        factorYes: 1.05,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C (saisir)', label_en: '425°F (sear)', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 },
          { value: 'low', label: '130°C (lent)', label_en: '265°F (slow)', factor: 1.5 }
        ],
        default: 'medium'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '52°C (saignant)', label_en: '126°F (rare)', factor: 0.95 },
          { value: 'medium_rare', label: '55°C (rosé)', label_en: '131°F (medium-rare)', factor: 1.0 }
        ],
        default: 'medium_rare',
        tip: 'Le cerf se déguste rosé maximum',
        tip_en: 'Venison is best medium-rare max'
      },
      {
        id: 'pan_sear',
        question: 'Saisir à la poêle ?',
        question_en: 'Pan sear?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Saisir rapidement à feu vif',
        tip_en: 'Sear quickly over high heat'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      defaultThickness_cm: 5,
      maxDoneness: 'a_point'
    }
  },

  gigot_cerf: {
    questions: [
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: true,
        factorYes: 0.9,
        factorNo: 1.0
      },
      {
        id: 'larded',
        question: 'Piqué au lard ?',
        question_en: 'Larded?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Piquer de lardons pour apporter du gras',
        tip_en: 'Lard with bacon strips for fat'
      },
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        factorYes: 1.2,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high_start', label: '220°C puis 160°C', label_en: '425°F then 325°F', factor: 1.0 },
          { value: 'medium', label: '180°C constant', label_en: '350°F constant', factor: 1.1 },
          { value: 'low', label: '140°C (lent)', label_en: '285°F (slow)', factor: 1.6 }
        ],
        default: 'high_start',
        tip: 'Démarrer chaud pour croûter, puis baisser',
        tip_en: 'Start hot to crust, then lower'
      },
      {
        id: 'basted',
        question: 'Arrosé régulièrement ?',
        question_en: 'Basted regularly?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central_large', thermalMass: 'high' },
      defaultThickness_cm: 10
    }
  },

  selle_chevreuil: {
    questions: [
      {
        id: 'preparation',
        question: 'Préparation ?',
        question_en: 'Preparation?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entière sur os', label_en: 'Whole on bone', factor: 1.0 },
          { value: 'boned', label: 'Désossée', label_en: 'Boned', factor: 0.85 },
          { value: 'noisettes', label: 'En noisettes', label_en: 'Noisettes', factor: 0.6 }
        ],
        default: 'whole'
      },
      {
        id: 'barded',
        question: 'Bardée ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.12,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'high',
        tip: 'Cuisson courte à haute température',
        tip_en: 'Short cooking at high temperature'
      },
      {
        id: 'sear_first',
        question: 'Saisir avant le four ?',
        question_en: 'Sear before oven?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1
      }
    ],
    thermalProfile: {
      geometry: 'saddle',
      bone: { type: 'central', thermalMass: 'high' },
      defaultThickness_cm: 6
    }
  },

  filet_chevreuil: {
    questions: [
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: false,
        factorYes: 0.92,
        factorNo: 1.0,
        tip: 'Le chevreuil jeune peut se passer de marinade',
        tip_en: 'Young venison may skip marinade'
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.12,
        factorNo: 1.0
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '52°C (saignant)', label_en: '126°F (rare)', factor: 0.95 },
          { value: 'medium_rare', label: '55°C (rosé)', label_en: '131°F (medium-rare)', factor: 1.0 }
        ],
        default: 'medium_rare'
      },
      {
        id: 'pan_butter',
        question: 'Beurrer en fin de cuisson ?',
        question_en: 'Butter at end?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.05,
        factorNo: 1.0,
        tip: 'Arroser de beurre noisette',
        tip_en: 'Baste with brown butter'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      defaultThickness_cm: 4,
      maxDoneness: 'a_point'
    }
  },

  marcassin: {
    questions: [
      {
        id: 'age',
        question: 'Âge ?',
        question_en: 'Age?',
        type: 'select',
        options: [
          { value: 'young', label: 'Jeune (< 6 mois)', label_en: 'Young (< 6 months)', factor: 0.9 },
          { value: 'medium', label: 'Moyen (6-12 mois)', label_en: 'Medium', factor: 1.0 },
          { value: 'older', label: 'Plus âgé', label_en: 'Older', factor: 1.15 }
        ],
        default: 'young'
      },
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: true,
        factorYes: 0.9,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '200°C', label_en: '400°F', factor: 0.9 },
          { value: 'medium', label: '170°C', label_en: '340°F', factor: 1.0 },
          { value: 'low', label: '140°C (lent)', label_en: '285°F (slow)', factor: 1.5 }
        ],
        default: 'medium'
      },
      {
        id: 'braise_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin rouge', label_en: 'Red wine', factor: 1.0 },
          { value: 'beer', label: 'Bière', label_en: 'Beer', factor: 0.95 },
          { value: 'stock', label: 'Fond de gibier', label_en: 'Game stock', factor: 1.0 }
        ],
        default: 'wine'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      defaultThickness_cm: 8
    }
  },

  roti_sanglier: {
    questions: [
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: true,
        factorYes: 0.88,
        factorNo: 1.0,
        tip: 'Marinade vin rouge 24-48h recommandée',
        tip_en: 'Red wine marinade 24-48h recommended'
      },
      {
        id: 'larded',
        question: 'Piqué au lard ?',
        question_en: 'Larded?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high_start', label: '220°C puis 160°C', label_en: '425°F then 325°F', factor: 1.0 },
          { value: 'medium', label: '170°C constant', label_en: '340°F constant', factor: 1.1 },
          { value: 'low', label: '140°C (lent)', label_en: '285°F (slow)', factor: 1.6 }
        ],
        default: 'high_start'
      },
      {
        id: 'braise_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin rouge', label_en: 'Red wine', factor: 1.0 },
          { value: 'beer', label: 'Bière brune', label_en: 'Dark beer', factor: 0.95 }
        ],
        default: 'wine'
      },
      {
        id: 'covered',
        question: 'Couvert pendant cuisson ?',
        question_en: 'Covered during cooking?',
        type: 'boolean',
        showWhen: { techniques: ['cuisson_lente'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.9
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      defaultThickness_cm: 10
    }
  },

  civet_lievre: {
    questions: [
      {
        id: 'marinated',
        question: 'Mariné au vin ?',
        question_en: 'Wine marinated?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'La marinade est traditionnelle pour le civet',
        tip_en: 'Marinade is traditional for civet'
      },
      {
        id: 'blood_liaison',
        question: 'Lié au sang ?',
        question_en: 'Blood liaison?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Le sang est ajouté en fin, ne pas faire bouillir',
        tip_en: 'Blood added at end, do not boil'
      },
      {
        id: 'slow_cooker',
        question: 'Mijoteuse électrique ?',
        question_en: 'Slow cooker?',
        type: 'boolean',
        showWhen: { tools: ['mijoteuse'] },
        default: true,
        factorYes: 1.3,
        factorNo: 1.0,
        tip: 'Position basse pour cuisson douce',
        tip_en: 'Low setting for gentle cooking'
      },
      {
        id: 'pressure_release',
        question: 'Type de dépressurisation ?',
        question_en: 'Pressure release type?',
        type: 'select',
        showWhen: { tools: ['autocuiseur'] },
        options: [
          { value: 'natural', label: 'Naturelle', label_en: 'Natural', factor: 1.1 },
          { value: 'quick', label: 'Rapide', label_en: 'Quick', factor: 1.0 }
        ],
        default: 'natural',
        tip: 'Dépressurisation naturelle pour viande tendre',
        tip_en: 'Natural release for tender meat'
      }
    ],
    thermalProfile: {
      geometry: 'pieces',
      tissue: 'collagene',
      minCoreTemp: 85
    }
  },

  rable_lievre: {
    questions: [
      {
        id: 'boned',
        question: 'Désossé ?',
        question_en: 'Boned?',
        type: 'boolean',
        default: false,
        factorYes: 0.85,
        factorNo: 1.0
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'stuffed',
        question: 'Farci ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.2,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'high',
        tip: 'Cuisson vive pour garder rosé',
        tip_en: 'High heat to keep pink'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '54°C (saignant)', label_en: '129°F (rare)', factor: 0.95 },
          { value: 'medium_rare', label: '58°C (rosé)', label_en: '136°F (medium-rare)', factor: 1.0 }
        ],
        default: 'medium_rare'
      }
    ],
    thermalProfile: {
      geometry: 'saddle',
      bone: { type: 'central', thermalMass: 'medium' },
      defaultThickness_cm: 4,
      maxDoneness: 'rose'
    }
  },

  lapin_garenne: {
    questions: [
      {
        id: 'cut',
        question: 'Découpe ?',
        question_en: 'Cut?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entier', label_en: 'Whole', factor: 1.0 },
          { value: 'pieces', label: 'En morceaux', label_en: 'Pieces', factor: 0.8 },
          { value: 'saddle_only', label: 'Râble seul', label_en: 'Saddle only', factor: 0.7 }
        ],
        default: 'pieces'
      },
      {
        id: 'marinated',
        question: 'Mariné ?',
        question_en: 'Marinated?',
        type: 'boolean',
        default: true,
        factorYes: 0.92,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '200°C', label_en: '400°F', factor: 0.9 },
          { value: 'medium', label: '170°C', label_en: '340°F', factor: 1.0 }
        ],
        default: 'medium'
      },
      {
        id: 'braise_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin blanc', label_en: 'White wine', factor: 1.0 },
          { value: 'cider', label: 'Cidre', label_en: 'Cider', factor: 0.95 },
          { value: 'mustard', label: 'Sauce moutarde', label_en: 'Mustard sauce', factor: 1.0 }
        ],
        default: 'wine'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      defaultThickness_cm: 4
    }
  },

  // ============================================
  // GIBIER - Gibier à plumes
  // ============================================

  faisan: {
    questions: [
      {
        id: 'aged',
        question: 'Faisandé ?',
        question_en: 'Aged/hung?',
        type: 'select',
        options: [
          { value: 'none', label: 'Non faisandé', label_en: 'Not aged', factor: 1.0 },
          { value: 'light', label: 'Légèrement (3-4 jours)', label_en: 'Light (3-4 days)', factor: 0.95 },
          { value: 'strong', label: 'Bien faisandé (7+ jours)', label_en: 'Well aged (7+ days)', factor: 0.9 }
        ],
        default: 'light'
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.15,
        factorNo: 1.0,
        tip: 'Le faisan est sec - bardage indispensable',
        tip_en: 'Pheasant is dry - barding essential'
      },
      {
        id: 'trussed',
        question: 'Bridé ?',
        question_en: 'Trussed?',
        type: 'boolean',
        default: true,
        factorYes: 1.05,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'high',
        tip: 'Cuisson rapide pour garder moelleux',
        tip_en: 'Quick cooking to keep moist'
      },
      {
        id: 'basted',
        question: 'Arrosé régulièrement ?',
        question_en: 'Basted regularly?',
        type: 'boolean',
        showWhen: { tools: ['four'] },
        default: true,
        factorYes: 1.0,
        factorNo: 0.9,
        tip: 'Essentiel pour éviter le dessèchement',
        tip_en: 'Essential to prevent drying out'
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      maxDoneness: 'rose'
    }
  },

  perdrix: {
    questions: [
      {
        id: 'barded',
        question: 'Bardée ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.12,
        factorNo: 1.0
      },
      {
        id: 'stuffed',
        question: 'Farcie ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'high'
      },
      {
        id: 'braise_liquid',
        question: 'Liquide de braisage ?',
        question_en: 'Braising liquid?',
        type: 'select',
        showWhen: { techniques: ['cuisson_lente'] },
        options: [
          { value: 'wine', label: 'Vin blanc', label_en: 'White wine', factor: 1.0 },
          { value: 'cabbage', label: 'Au chou', label_en: 'With cabbage', factor: 1.1 }
        ],
        default: 'wine',
        tip: 'Perdrix au chou est un classique',
        tip_en: 'Partridge with cabbage is a classic'
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      maxDoneness: 'rose'
    }
  },

  caille: {
    questions: [
      {
        id: 'boned',
        question: 'Désossée ?',
        question_en: 'Boned?',
        type: 'boolean',
        default: false,
        factorYes: 0.75,
        factorNo: 1.0
      },
      {
        id: 'stuffed',
        question: 'Farcie ?',
        question_en: 'Stuffed?',
        type: 'boolean',
        default: false,
        factorYes: 1.15,
        factorNo: 1.0
      },
      {
        id: 'wrapped',
        question: 'En feuille de vigne ?',
        question_en: 'In vine leaf?',
        type: 'boolean',
        default: false,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '200°C', label_en: '400°F', factor: 1.0 }
        ],
        default: 'high',
        tip: 'Cuisson vive pour petites pièces',
        tip_en: 'High heat for small pieces'
      },
      {
        id: 'grill_direct',
        question: 'Chaleur directe ?',
        question_en: 'Direct heat?',
        type: 'boolean',
        showWhen: { tools: ['grill', 'bbq_direct'] },
        default: true,
        factorYes: 0.9,
        factorNo: 1.1
      }
    ],
    thermalProfile: {
      geometry: 'small_bird',
      hasCavity: true,
      defaultThickness_cm: 4
    }
  },

  becasse: {
    questions: [
      {
        id: 'drawn',
        question: 'Vidée ?',
        question_en: 'Drawn?',
        type: 'boolean',
        default: false,
        factorYes: 0.9,
        factorNo: 1.0,
        tip: 'Traditionnellement non vidée (sauf le gésier)',
        tip_en: 'Traditionally not drawn (except gizzard)'
      },
      {
        id: 'flambeed',
        question: 'Flambée ?',
        question_en: 'Flambéed?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'Flamber à l\'armagnac est traditionnel',
        tip_en: 'Flambéing with armagnac is traditional'
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'very_high', label: '240°C', label_en: '465°F', factor: 0.8 },
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.9 }
        ],
        default: 'very_high',
        tip: 'Cuisson très vive, servir rosée',
        tip_en: 'Very high heat, serve pink'
      }
    ],
    thermalProfile: {
      geometry: 'small_bird',
      hasCavity: true,
      notes: 'Servir rosé - pièce de grand gastronome'
    }
  },

  pigeon: {
    questions: [
      {
        id: 'preparation',
        question: 'Préparation ?',
        question_en: 'Preparation?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entier', label_en: 'Whole', factor: 1.0 },
          { value: 'breast_only', label: 'Suprêmes seuls', label_en: 'Breast only', factor: 0.6 },
          { value: 'spatchcocked', label: 'En crapaudine', label_en: 'Spatchcocked', factor: 0.8 }
        ],
        default: 'whole'
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: false,
        factorYes: 1.1,
        factorNo: 1.0
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '200°C', label_en: '400°F', factor: 1.0 }
        ],
        default: 'high'
      },
      {
        id: 'sv_temp',
        question: 'Température sous-vide ?',
        question_en: 'Sous-vide temperature?',
        type: 'select',
        showWhen: { techniques: ['sous_vide'] },
        options: [
          { value: 'rare', label: '54°C (saignant)', label_en: '129°F (rare)', factor: 0.9 },
          { value: 'medium_rare', label: '58°C (rosé)', label_en: '136°F (medium-rare)', factor: 1.0 }
        ],
        default: 'medium_rare',
        tip: 'Finir par une saisie rapide',
        tip_en: 'Finish with a quick sear'
      },
      {
        id: 'pan_sear',
        question: 'Saisir à la poêle ?',
        question_en: 'Pan sear?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1
      }
    ],
    thermalProfile: {
      geometry: 'small_bird',
      hasCavity: true,
      maxDoneness: 'rose'
    }
  },

  canard_sauvage: {
    questions: [
      {
        id: 'aged',
        question: 'Faisandé ?',
        question_en: 'Aged?',
        type: 'boolean',
        default: false,
        factorYes: 0.95,
        factorNo: 1.0
      },
      {
        id: 'barded',
        question: 'Bardé ?',
        question_en: 'Barded?',
        type: 'boolean',
        default: true,
        factorYes: 1.1,
        factorNo: 1.0,
        tip: 'Plus maigre que le canard d\'élevage',
        tip_en: 'Leaner than farmed duck'
      },
      {
        id: 'preparation',
        question: 'Préparation ?',
        question_en: 'Preparation?',
        type: 'select',
        options: [
          { value: 'whole', label: 'Entier', label_en: 'Whole', factor: 1.0 },
          { value: 'breast', label: 'Filets seuls', label_en: 'Breast only', factor: 0.65 }
        ],
        default: 'whole'
      },
      {
        id: 'oven_temp',
        question: 'Température du four ?',
        question_en: 'Oven temperature?',
        type: 'select',
        showWhen: { tools: ['four'] },
        options: [
          { value: 'high', label: '220°C', label_en: '425°F', factor: 0.85 },
          { value: 'medium', label: '180°C', label_en: '350°F', factor: 1.0 }
        ],
        default: 'high',
        tip: 'Cuisson rosée recommandée',
        tip_en: 'Pink cooking recommended'
      },
      {
        id: 'pan_sear',
        question: 'Saisir à la poêle ?',
        question_en: 'Pan sear?',
        type: 'boolean',
        showWhen: { tools: ['poele'] },
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Saisir côté peau d\'abord',
        tip_en: 'Sear skin-side first'
      }
    ],
    thermalProfile: {
      geometry: 'complex',
      hasCavity: true,
      maxDoneness: 'rose'
    }
  }
}

// Fonction pour calculer le facteur total depuis les réponses
export function calculateSpecificFactors(cutId, answers) {
  const cutData = cutSpecificQuestions[cutId]
  if (!cutData || !cutData.questions) return 1.0

  let totalFactor = 1.0

  cutData.questions.forEach(q => {
    const answer = answers[q.id]
    if (answer === undefined) return

    if (q.type === 'boolean') {
      totalFactor *= answer ? (q.factorYes || 1.0) : (q.factorNo || 1.0)
    } else if (q.type === 'select') {
      const selectedOption = q.options.find(opt => opt.value === answer)
      if (selectedOption) {
        totalFactor *= selectedOption.factor || 1.0
      }
    }
  })

  return totalFactor
}

// Fonction pour obtenir la diffusivité thermique effective
export function getEffectiveDiffusivity(cutId) {
  const profile = cutSpecificQuestions[cutId]?.thermalProfile
  if (!profile) return 1.3e-7

  const layers = profile.layers || []
  let weightedDiffusivity = 0
  let totalWeight = 0

  layers.forEach(layer => {
    const tissue = tissuProperties[layer.type] || tissuProperties.viande_rouge_maigre
    const alpha = tissue.lambda / (tissue.rho * tissue.Cp)
    const weight = layer.thickness_mm || 10
    weightedDiffusivity += alpha * weight
    totalWeight += weight
  })

  return totalWeight > 0 ? weightedDiffusivity / totalWeight : 1.3e-7
}

// Export des profils par défaut
export const defaultProfiles = Object.fromEntries(
  Object.entries(cutSpecificQuestions).map(([cutId, data]) => [
    cutId,
    {
      questions: data.questions,
      thermal: data.thermalProfile
    }
  ])
)
