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
  sousvide: { h_base: 150 }, // eau = excellent transfert
  braise: { h_base: 35 },
  bbq: { h_direct: 180, h_indirect: 30 },
  friture: { h_base: 250 }
}

// Questions spécifiques par morceau - générées dynamiquement dans l'UI
export const cutSpecificQuestions = {
  // === MAGRET DE CANARD ===
  magret: {
    questions: [
      {
        id: 'fat_scored',
        question: 'Avez-vous quadrillé le gras ?',
        question_en: 'Did you score the fat?',
        type: 'boolean',
        default: true,
        impact: 'timing', // affecte le timing
        factorYes: 0.88, // quadrillage = meilleur rendu de gras = cuisson plus rapide
        factorNo: 1.0,
        tip: 'Le quadrillage permet au gras de fondre uniformément',
        tip_en: 'Scoring allows fat to render evenly'
      },
      {
        id: 'cold_start',
        question: 'Démarrez-vous à froid ?',
        question_en: 'Cold start cooking?',
        type: 'boolean',
        default: true,
        impact: 'technique',
        description: 'Poser sur poêle froide et chauffer progressivement',
        description_en: 'Place on cold pan and heat gradually',
        factorYes: 1.25, // démarrage froid = temps total plus long mais meilleur résultat
        factorNo: 1.0,
        tip: 'Recommandé pour un rendu de gras optimal',
        tip_en: 'Recommended for optimal fat rendering'
      },
      {
        id: 'skin_side_time',
        question: 'Temps prévu côté gras ?',
        question_en: 'Time planned for fat side?',
        type: 'select',
        options: [
          { value: 'court', label: '70% côté gras', label_en: '70% fat side', factor: 1.1 },
          { value: 'moyen', label: '80% côté gras (recommandé)', label_en: '80% fat side (recommended)', factor: 1.0 },
          { value: 'long', label: '90% côté gras', label_en: '90% fat side', factor: 0.95 }
        ],
        default: 'moyen',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'plate', // géométrie plate (épaisseur constante)
      layers: [
        { type: 'graisse', thickness_mm: 8, position: 'top' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 2.5,
      notes: 'Le gras agit comme isolant thermique - la cuisson côté gras est cruciale'
    }
  },

  // === CÔTE DE BOEUF ===
  cote_de_boeuf: {
    questions: [
      {
        id: 'bone_orientation',
        question: 'Position de l\'os pendant la cuisson ?',
        question_en: 'Bone position during cooking?',
        type: 'select',
        options: [
          { value: 'lateral', label: 'Os sur le côté', label_en: 'Bone on side', factor: 1.0 },
          { value: 'dessous', label: 'Os en dessous', label_en: 'Bone underneath', factor: 1.08 },
          { value: 'dessus', label: 'Os au-dessus', label_en: 'Bone on top', factor: 0.95 }
        ],
        default: 'lateral',
        impact: 'timing',
        tip: 'L\'os conduit la chaleur différemment',
        tip_en: 'Bone conducts heat differently'
      },
      {
        id: 'sear_first',
        question: 'Méthode de cuisson ?',
        question_en: 'Cooking method?',
        type: 'select',
        options: [
          { value: 'sear_then_oven', label: 'Saisir puis four', label_en: 'Sear then oven', factor: 1.0 },
          { value: 'reverse_sear', label: 'Reverse sear (four puis saisir)', label_en: 'Reverse sear (oven then sear)', factor: 1.05 },
          { value: 'direct', label: 'Tout au grill/BBQ', label_en: 'All on grill/BBQ', factor: 0.9 }
        ],
        default: 'sear_then_oven',
        impact: 'technique'
      },
      {
        id: 'fat_cap',
        question: 'Couche de gras externe ?',
        question_en: 'External fat cap?',
        type: 'select',
        options: [
          { value: 'thick', label: 'Épaisse (> 1cm)', label_en: 'Thick (> 1cm)', factor: 1.12 },
          { value: 'medium', label: 'Moyenne (5-10mm)', label_en: 'Medium (5-10mm)', factor: 1.0 },
          { value: 'trimmed', label: 'Parée (< 5mm)', label_en: 'Trimmed (< 5mm)', factor: 0.95 }
        ],
        default: 'medium',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'irregular', // forme irrégulière due à l'os
      bone: { type: 'lateral', thermalMass: 'high' },
      layers: [
        { type: 'graisse', thickness_mm: 8, position: 'cap' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 5,
      notes: 'L\'os crée un gradient thermique - la zone près de l\'os cuit plus lentement'
    }
  },

  // === FILET DE BOEUF ===
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
        impact: 'shape',
        factorYes: 1.05, // plus compact = cuisson légèrement plus longue
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
        impact: 'timing',
        factorYes: 1.10, // bardage = isolation thermique
        factorNo: 1.0,
        tip: 'Recommandé pour éviter le dessèchement',
        tip_en: 'Recommended to prevent drying'
      }
    ],
    thermalProfile: {
      geometry: 'cylinder',
      layers: [
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      defaultThickness_cm: 3.5,
      notes: 'Muscle très tendre et maigre - éviter toute surcuisson'
    }
  },

  // === ENTRECÔTE ===
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
          { value: 'wagyu', label: 'Très persillé (type Wagyu)', label_en: 'Heavy marbling (Wagyu type)', factor: 1.08 }
        ],
        default: 'medium',
        impact: 'timing',
        tip: 'Plus de gras = meilleure conduction thermique mais temps légèrement plus long',
        tip_en: 'More fat = better heat conduction but slightly longer time'
      },
      {
        id: 'fat_edge',
        question: 'Bande de gras sur le bord ?',
        question_en: 'Fat edge?',
        type: 'select',
        options: [
          { value: 'present', label: 'Présente', label_en: 'Present', factor: 1.0 },
          { value: 'scored', label: 'Présente et incisée', label_en: 'Present and scored', factor: 0.97 },
          { value: 'removed', label: 'Retirée', label_en: 'Removed', factor: 0.95 }
        ],
        default: 'present',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      layers: [
        { type: 'graisse', thickness_mm: 5, position: 'edge' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 2.5,
      notes: 'Le persillage fond et arrose la viande pendant la cuisson'
    }
  },

  // === SOURIS D'AGNEAU ===
  souris: {
    questions: [
      {
        id: 'cooking_liquid',
        question: 'Quantité de liquide de cuisson ?',
        question_en: 'Cooking liquid amount?',
        type: 'select',
        options: [
          { value: 'partial', label: 'À mi-hauteur', label_en: 'Half-covered', factor: 1.0 },
          { value: 'full', label: 'Recouverte', label_en: 'Fully covered', factor: 0.90 },
          { value: 'minimal', label: 'Fond seulement', label_en: 'Just bottom', factor: 1.15 }
        ],
        default: 'partial',
        impact: 'timing'
      },
      {
        id: 'lid',
        question: 'Couvercle ?',
        question_en: 'Lid?',
        type: 'select',
        options: [
          { value: 'sealed', label: 'Hermétique (cocotte)', label_en: 'Sealed (dutch oven)', factor: 0.85 },
          { value: 'partial', label: 'Entrouvert', label_en: 'Partially open', factor: 1.0 },
          { value: 'open', label: 'Sans couvercle', label_en: 'No lid', factor: 1.20 }
        ],
        default: 'sealed',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central', thermalMass: 'medium' },
      tissue: 'collagene', // riche en collagène
      layers: [
        { type: 'collagene', position: 'main' }
      ],
      minCoreTemp: 85, // doit atteindre 85°C pour transformer le collagène
      notes: 'Le collagène se transforme en gélatine à partir de 80°C - cuisson longue obligatoire'
    }
  },

  // === POULET ENTIER ===
  poulet_entier: {
    questions: [
      {
        id: 'stuffed',
        question: 'Poulet farci ?',
        question_en: 'Stuffed chicken?',
        type: 'boolean',
        default: false,
        impact: 'timing',
        factorYes: 1.25, // farce = masse thermique supplémentaire
        factorNo: 1.0,
        tip: 'La farce doit aussi atteindre 74°C',
        tip_en: 'Stuffing must also reach 165°F'
      },
      {
        id: 'trussed',
        question: 'Poulet bridé/ficelé ?',
        question_en: 'Trussed chicken?',
        type: 'boolean',
        default: true,
        impact: 'shape',
        factorYes: 1.08,
        factorNo: 1.0,
        tip: 'Le bridage assure une cuisson plus uniforme',
        tip_en: 'Trussing ensures more even cooking'
      },
      {
        id: 'skin_prep',
        question: 'Préparation de la peau ?',
        question_en: 'Skin preparation?',
        type: 'select',
        options: [
          { value: 'dry', label: 'Séchée (croustillante)', label_en: 'Dried (crispy)', factor: 0.95 },
          { value: 'butter', label: 'Beurrée', label_en: 'Buttered', factor: 1.0 },
          { value: 'wet', label: 'Non préparée', label_en: 'Unprepared', factor: 1.05 }
        ],
        default: 'butter',
        impact: 'timing'
      },
      {
        id: 'cavity_aromatics',
        question: 'Aromates dans la cavité ?',
        question_en: 'Aromatics in cavity?',
        type: 'boolean',
        default: true,
        impact: 'timing',
        factorYes: 1.03,
        factorNo: 1.0
      }
    ],
    thermalProfile: {
      geometry: 'complex', // forme complexe avec cavité
      hasCavity: true,
      zones: ['breast', 'thigh', 'wing'],
      targetTemps: {
        breast: 74, // blanc : 74°C
        thigh: 82   // cuisse : peut aller jusqu'à 82°C pour être plus tendre
      },
      layers: [
        { type: 'peau', position: 'outer' },
        { type: 'graisse', thickness_mm: 3, position: 'subcutaneous' },
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      notes: 'Zones de cuisson différentes - les cuisses supportent plus de chaleur que les blancs'
    }
  },

  // === CARRÉ D'AGNEAU ===
  carre_agneau: {
    questions: [
      {
        id: 'frenched',
        question: 'Côtes manchonnées ?',
        question_en: 'Frenched ribs?',
        type: 'boolean',
        default: true,
        impact: 'presentation',
        factorYes: 0.97, // moins de masse = légèrement plus rapide
        factorNo: 1.0,
        tip: 'Les os manchonnés protéger de papier alu pour éviter qu\'ils brûlent',
        tip_en: 'Cover frenched bones with foil to prevent burning'
      },
      {
        id: 'crust',
        question: 'En croûte d\'herbes ?',
        question_en: 'Herb crust?',
        type: 'boolean',
        default: false,
        impact: 'timing',
        factorYes: 1.08, // croûte = légère isolation
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
        default: 'scored',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'arc', // forme en arc avec os
      bone: { type: 'multiple_lateral', thermalMass: 'medium' },
      layers: [
        { type: 'graisse', thickness_mm: 4, position: 'cap' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 3,
      notes: 'Les côtes protègent une face - surveiller la cuisson du côté chair'
    }
  },

  // === CÔTELETTES DE PORC ===
  cotelettes_porc: {
    questions: [
      {
        id: 'bone_in',
        question: 'Avec os ?',
        question_en: 'Bone-in?',
        type: 'boolean',
        default: true,
        impact: 'timing',
        factorYes: 1.12,
        factorNo: 1.0
      },
      {
        id: 'brined',
        question: 'Saumurée ?',
        question_en: 'Brined?',
        type: 'boolean',
        default: false,
        impact: 'moisture',
        factorYes: 0.95, // saumure = meilleure rétention d'eau = cuisson plus rapide
        factorNo: 1.0,
        tip: 'La saumure garde la viande juteuse',
        tip_en: 'Brining keeps meat juicy'
      },
      {
        id: 'thickness',
        question: 'Épaisseur ?',
        question_en: 'Thickness?',
        type: 'select',
        options: [
          { value: 'thin', label: 'Fine (< 2cm)', label_en: 'Thin (< 0.8in)', factor: 0.75 },
          { value: 'standard', label: 'Standard (2-3cm)', label_en: 'Standard (0.8-1.2in)', factor: 1.0 },
          { value: 'thick', label: 'Épaisse (> 3cm)', label_en: 'Thick (> 1.2in)', factor: 1.35 }
        ],
        default: 'standard',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      bone: { type: 'lateral', thermalMass: 'low' },
      layers: [
        { type: 'graisse', thickness_mm: 5, position: 'edge' },
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      defaultThickness_cm: 2.5,
      targetTemp: 63, // porc moderne peut être rosé
      notes: 'Le porc moderne peut être servi légèrement rosé (63°C)'
    }
  },

  // === GIGOT D'AGNEAU ===
  gigot: {
    questions: [
      {
        id: 'bone_status',
        question: 'Os du gigot ?',
        question_en: 'Leg bone status?',
        type: 'select',
        options: [
          { value: 'bone_in', label: 'Avec os entier', label_en: 'Bone-in whole', factor: 1.18 },
          { value: 'shortened', label: 'Raccourci (sans souris)', label_en: 'Shortened (no shank)', factor: 1.10 },
          { value: 'boneless', label: 'Désossé', label_en: 'Boneless', factor: 0.90 }
        ],
        default: 'bone_in',
        impact: 'timing'
      },
      {
        id: 'studded',
        question: 'Piqué à l\'ail ?',
        question_en: 'Studded with garlic?',
        type: 'boolean',
        default: true,
        impact: 'flavor',
        factorYes: 1.0,
        factorNo: 1.0
      },
      {
        id: 'covered',
        question: 'Couvert pendant la cuisson ?',
        question_en: 'Covered during cooking?',
        type: 'select',
        options: [
          { value: 'open', label: 'Non couvert (rôti)', label_en: 'Uncovered (roast)', factor: 1.0 },
          { value: 'partial', label: 'Couvert en début', label_en: 'Covered at start', factor: 0.92 },
          { value: 'full', label: 'Couvert (braisé)', label_en: 'Covered (braised)', factor: 0.85 }
        ],
        default: 'open',
        impact: 'timing'
      }
    ],
    thermalProfile: {
      geometry: 'irregular',
      bone: { type: 'central_large', thermalMass: 'high' },
      layers: [
        { type: 'graisse', thickness_mm: 6, position: 'cap' },
        { type: 'viande_rouge_persillee', position: 'main' }
      ],
      defaultThickness_cm: 8,
      notes: 'Pièce massive - nécessite repos prolongé (15-20 min)'
    }
  },

  // === BAVETTE ===
  bavette: {
    questions: [
      {
        id: 'type',
        question: 'Type de bavette ?',
        question_en: 'Type of flank?',
        type: 'select',
        options: [
          { value: 'aloyau', label: 'Bavette d\'aloyau (noble)', label_en: 'Flank from loin (noble)', factor: 1.0 },
          { value: 'flanchet', label: 'Bavette de flanchet', label_en: 'Flank from belly', factor: 0.92 }
        ],
        default: 'aloyau',
        impact: 'timing'
      },
      {
        id: 'slicing',
        question: 'Allez-vous trancher contre les fibres ?',
        question_en: 'Will you slice against the grain?',
        type: 'boolean',
        default: true,
        impact: 'presentation',
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'CRUCIAL : toujours trancher perpendiculairement aux fibres',
        tip_en: 'CRUCIAL: always slice perpendicular to the grain'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      fiberDirection: 'long', // fibres longues
      layers: [
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      defaultThickness_cm: 1.5,
      maxDoneness: 'a_point', // ne pas dépasser à point
      notes: 'Fibres longues - devient très dure si surcuite. Maximum à point.'
    }
  },

  // === ONGLET ===
  onglet: {
    questions: [
      {
        id: 'nerve_removed',
        question: 'Nerf central retiré ?',
        question_en: 'Central nerve removed?',
        type: 'boolean',
        default: true,
        impact: 'edibility',
        factorYes: 1.0,
        factorNo: 1.0,
        tip: 'OBLIGATOIRE : le nerf rend la viande immangeable',
        tip_en: 'REQUIRED: the nerve makes the meat inedible'
      }
    ],
    thermalProfile: {
      geometry: 'plate',
      fiberDirection: 'coarse', // fibres grossières
      layers: [
        { type: 'viande_rouge_maigre', position: 'main' }
      ],
      defaultThickness_cm: 2.5,
      maxDoneness: 'saignant', // recommandé saignant max
      notes: 'Morceau du boucher - saveur intense, texture unique. Saignant obligatoire.'
    }
  }
}

// Fonction utilitaire pour calculer le facteur total depuis les réponses
export function calculateSpecificFactors(cutId, answers) {
  const cutQuestions = cutSpecificQuestions[cutId]
  if (!cutQuestions) return 1.0

  let totalFactor = 1.0

  cutQuestions.questions.forEach(q => {
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
  if (!profile) return 1.3e-7 // valeur par défaut

  // Calculer la diffusivité moyenne basée sur les couches
  const layers = profile.layers || []
  let weightedDiffusivity = 0
  let totalWeight = 0

  layers.forEach(layer => {
    const tissue = tissuProperties[layer.type] || tissuProperties.viande_rouge_maigre
    const alpha = tissue.lambda / (tissue.rho * tissue.Cp)
    const weight = layer.thickness_mm || 10 // poids par épaisseur
    weightedDiffusivity += alpha * weight
    totalWeight += weight
  })

  return totalWeight > 0 ? weightedDiffusivity / totalWeight : 1.3e-7
}

// Export des profils par défaut pour chaque morceau
export const defaultProfiles = Object.fromEntries(
  Object.entries(cutSpecificQuestions).map(([cutId, data]) => [
    cutId,
    {
      questions: data.questions,
      thermal: data.thermalProfile
    }
  ])
)
