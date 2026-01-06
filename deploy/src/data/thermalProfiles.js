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
          { value: 'scored', label: 'Incisée', label_en: 'Scored', factor: 0.97 },
          { value: 'removed', label: 'Retirée', label_en: 'Removed', factor: 0.95 }
        ],
        default: 'present'
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
        question: 'Position de l\'os ?',
        question_en: 'Bone position?',
        type: 'select',
        options: [
          { value: 'lateral', label: 'Os sur le côté', label_en: 'Bone on side', factor: 1.0 },
          { value: 'dessous', label: 'Os en dessous', label_en: 'Bone underneath', factor: 1.08 },
          { value: 'dessus', label: 'Os au-dessus', label_en: 'Bone on top', factor: 0.95 }
        ],
        default: 'lateral'
      },
      {
        id: 'cooking_method',
        question: 'Méthode de cuisson ?',
        question_en: 'Cooking method?',
        type: 'select',
        options: [
          { value: 'sear_then_oven', label: 'Saisir puis four', label_en: 'Sear then oven', factor: 1.0 },
          { value: 'reverse_sear', label: 'Reverse sear', label_en: 'Reverse sear', factor: 1.05 },
          { value: 'direct', label: 'Tout au grill/BBQ', label_en: 'All grill/BBQ', factor: 0.9 }
        ],
        default: 'sear_then_oven'
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
        tip: 'La marinade attendrit les fibres',
        tip_en: 'Marinade tenderizes fibers'
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
        id: 'cooking_style',
        question: 'Style de cuisson ?',
        question_en: 'Cooking style?',
        type: 'select',
        options: [
          { value: 'braise', label: 'Braisé classique', label_en: 'Classic braise', factor: 1.0 },
          { value: 'slow', label: 'Cuisson très lente (8h+)', label_en: 'Very slow (8h+)', factor: 1.5 },
          { value: 'pressure', label: 'Cocotte-minute', label_en: 'Pressure cooker', factor: 0.4 }
        ],
        default: 'braise'
      },
      {
        id: 'liquid_level',
        question: 'Niveau de liquide ?',
        question_en: 'Liquid level?',
        type: 'select',
        options: [
          { value: 'covered', label: 'Recouvert', label_en: 'Covered', factor: 0.9 },
          { value: 'half', label: 'À mi-hauteur', label_en: 'Half', factor: 1.0 },
          { value: 'minimal', label: 'Fond seulement', label_en: 'Minimal', factor: 1.15 }
        ],
        default: 'half'
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
        question_en: 'Trimmed?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.1
      },
      {
        id: 'cooking_method',
        question: 'Méthode ?',
        question_en: 'Method?',
        type: 'select',
        options: [
          { value: 'braise_wine', label: 'Braisée au vin', label_en: 'Braised in wine', factor: 1.0 },
          { value: 'sous_vide', label: 'Sous-vide longue durée', label_en: 'Long sous-vide', factor: 1.2 },
          { value: 'pressure', label: 'Cocotte-minute', label_en: 'Pressure cooker', factor: 0.35 }
        ],
        default: 'braise_wine'
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
        default: 'medium'
      },
      {
        id: 'seared',
        question: 'Viande saisie avant ?',
        question_en: 'Meat seared first?',
        type: 'boolean',
        default: true,
        factorYes: 1.0,
        factorNo: 1.1,
        tip: 'Saisir développe les saveurs (Maillard)',
        tip_en: 'Searing develops flavors (Maillard)'
      },
      {
        id: 'cooking_vessel',
        question: 'Récipient ?',
        question_en: 'Cooking vessel?',
        type: 'select',
        options: [
          { value: 'dutch_oven', label: 'Cocotte fonte', label_en: 'Dutch oven', factor: 1.0 },
          { value: 'slow_cooker', label: 'Mijoteuse électrique', label_en: 'Slow cooker', factor: 1.15 },
          { value: 'pressure', label: 'Cocotte-minute', label_en: 'Pressure cooker', factor: 0.4 }
        ],
        default: 'dutch_oven'
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
        id: 'cooking_style',
        question: 'Style de cuisson ?',
        question_en: 'Cooking style?',
        type: 'select',
        options: [
          { value: 'braise', label: 'Braisée', label_en: 'Braised', factor: 1.0 },
          { value: 'pot_au_feu', label: 'Pot-au-feu', label_en: 'Pot-au-feu', factor: 1.1 },
          { value: 'pressure', label: 'Cocotte-minute', label_en: 'Pressure cooker', factor: 0.4 }
        ],
        default: 'braise'
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
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
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
        id: 'cooking_style',
        question: 'Style de cuisson ?',
        question_en: 'Cooking style?',
        type: 'select',
        options: [
          { value: 'roast', label: 'Rôtie', label_en: 'Roasted', factor: 1.0 },
          { value: 'braise', label: 'Braisée', label_en: 'Braised', factor: 1.2 },
          { value: 'pulled', label: 'Effilochée (pulled)', label_en: 'Pulled', factor: 1.5 }
        ],
        default: 'roast'
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
        id: 'cooking_style',
        question: 'Style de cuisson ?',
        question_en: 'Cooking style?',
        type: 'select',
        options: [
          { value: 'bbq_low_slow', label: 'BBQ low & slow', label_en: 'BBQ low & slow', factor: 1.0 },
          { value: 'oven_braise', label: 'Four braisé', label_en: 'Oven braised', factor: 0.85 },
          { value: 'grilled', label: 'Grillé direct', label_en: 'Direct grilled', factor: 0.6 }
        ],
        default: 'bbq_low_slow'
      },
      {
        id: 'wrapped',
        question: 'Emballé (Texas crutch) ?',
        question_en: 'Wrapped (Texas crutch)?',
        type: 'boolean',
        default: false,
        factorYes: 0.75,
        factorNo: 1.0,
        tip: 'L\'emballage accélère la cuisson mais ramollit la croûte',
        tip_en: 'Wrapping speeds up but softens bark'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'roast_crispy', label: 'Rôtie (couenne croustillante)', label_en: 'Roasted (crispy)', factor: 1.0 },
          { value: 'braise', label: 'Braisée', label_en: 'Braised', factor: 1.3 },
          { value: 'confit', label: 'Confite', label_en: 'Confit', factor: 1.5 }
        ],
        default: 'roast_crispy'
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
        id: 'cooking_vessel',
        question: 'Récipient ?',
        question_en: 'Vessel?',
        type: 'select',
        options: [
          { value: 'dutch_oven', label: 'Cocotte', label_en: 'Dutch oven', factor: 1.0 },
          { value: 'pressure', label: 'Cocotte-minute', label_en: 'Pressure cooker', factor: 0.4 },
          { value: 'slow_cooker', label: 'Mijoteuse', label_en: 'Slow cooker', factor: 1.3 }
        ],
        default: 'dutch_oven'
      },
      {
        id: 'liquid_level',
        question: 'Niveau de liquide ?',
        question_en: 'Liquid level?',
        type: 'select',
        options: [
          { value: 'covered', label: 'Recouvert', label_en: 'Covered', factor: 0.9 },
          { value: 'half', label: 'À mi-hauteur', label_en: 'Half', factor: 1.0 }
        ],
        default: 'half'
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
        id: 'covered',
        question: 'Couvert pendant la cuisson ?',
        question_en: 'Covered?',
        type: 'select',
        options: [
          { value: 'open', label: 'Non couvert (rôti)', label_en: 'Uncovered', factor: 1.0 },
          { value: 'partial', label: 'Couvert en début', label_en: 'Partial', factor: 0.92 },
          { value: 'full', label: 'Couvert (braisé)', label_en: 'Covered', factor: 0.85 }
        ],
        default: 'open'
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
        options: [
          { value: 'sealed', label: 'Hermétique', label_en: 'Sealed', factor: 0.85 },
          { value: 'partial', label: 'Entrouvert', label_en: 'Partial', factor: 1.0 },
          { value: 'open', label: 'Sans couvercle', label_en: 'No lid', factor: 1.20 }
        ],
        default: 'sealed'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'braise', label: 'Braisé', label_en: 'Braised', factor: 1.0 },
          { value: 'tagine', label: 'Tajine', label_en: 'Tagine', factor: 1.1 },
          { value: 'curry', label: 'Curry', label_en: 'Curry', factor: 1.0 }
        ],
        default: 'braise'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'roast', label: 'Rôtie', label_en: 'Roasted', factor: 1.0 },
          { value: 'slow_roast', label: 'Rôtie lentement (7h)', label_en: 'Slow roast (7h)', factor: 2.0 },
          { value: 'braise', label: 'Braisée', label_en: 'Braised', factor: 1.3 }
        ],
        default: 'roast'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'braise', label: 'Braisé', label_en: 'Braised', factor: 1.0 },
          { value: 'grilled', label: 'Grillé', label_en: 'Grilled', factor: 0.7 }
        ],
        default: 'braise'
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
        id: 'cooking_style',
        question: 'Cuisson ?',
        question_en: 'Cooking?',
        type: 'select',
        options: [
          { value: 'pan_fried', label: 'Poêlé', label_en: 'Pan-fried', factor: 1.0 },
          { value: 'breaded', label: 'Pané', label_en: 'Breaded', factor: 1.1 },
          { value: 'braise', label: 'Braisé', label_en: 'Braised', factor: 1.4 }
        ],
        default: 'pan_fried'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'fried', label: 'Frites', label_en: 'Fried', factor: 1.0 },
          { value: 'baked', label: 'Four', label_en: 'Baked', factor: 1.2 },
          { value: 'grilled', label: 'Grillées', label_en: 'Grilled', factor: 0.9 }
        ],
        default: 'baked'
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
        options: [
          { value: 'court', label: '70% côté gras', label_en: '70% fat side', factor: 1.1 },
          { value: 'moyen', label: '80% côté gras', label_en: '80% fat side', factor: 1.0 },
          { value: 'long', label: '90% côté gras', label_en: '90% fat side', factor: 0.95 }
        ],
        default: 'moyen'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'roast', label: 'Rôti classique', label_en: 'Classic roast', factor: 1.0 },
          { value: 'slow', label: 'Rôti lent', label_en: 'Slow roast', factor: 1.5 },
          { value: 'peking', label: 'Style Pékin (séché)', label_en: 'Peking style', factor: 1.3 }
        ],
        default: 'roast'
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
        default: true,
        factorYes: 1.0,
        factorNo: 0.95
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'roast', label: 'Rôti', label_en: 'Roast', factor: 1.0 },
          { value: 'braise', label: 'Braisé', label_en: 'Braised', factor: 1.4 }
        ],
        default: 'roast'
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
        id: 'cooking_style',
        question: 'Style ?',
        question_en: 'Style?',
        type: 'select',
        options: [
          { value: 'roast', label: 'Rôtie', label_en: 'Roasted', factor: 1.0 },
          { value: 'casserole', label: 'En cocotte', label_en: 'Casserole', factor: 1.3 }
        ],
        default: 'roast'
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
