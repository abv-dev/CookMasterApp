// CookMaster TypeScript Models - Converted from iOS Swift

export enum MeatCategory {
  BOEUF = 'boeuf',
  PORC = 'porc',
  AGNEAU = 'agneau',
  VEAU = 'veau',
  VOLAILLE = 'volaille',
  SAUCISSES = 'saucisses',
  CERF = 'cerf',
  CHEVREUIL = 'chevreuil',
  SANGLIER = 'sanglier',
  LIEVRE = 'lievre',
  FAISAN = 'faisan',
}

export enum CookingMethodType {
  // Four
  FOUR_TRADITIONNEL = 'four_traditionnel',
  FOUR_CONVECTION = 'four_convection',
  FOUR_VAPEUR = 'four_vapeur',
  FOUR_CHALEUR_TOURNANTE = 'four_chaleur_tournante',

  // Poêle/Plancha
  POELE = 'poele',
  PLANCHA = 'plancha',
  WOK = 'wok',
  SAUTEUSE = 'sauteuse',

  // Grillades
  GRILL = 'grill',
  BARBECUE_CHARBON = 'barbecue_charbon',
  BARBECUE_GAZ = 'barbecue_gaz',
  BARBECUE_ELECTRIQUE = 'barbecue_electrique',
  SALAMANDRE = 'salamandre',

  // Mijotées
  COCOTTE = 'cocotte',
  MIJOTEUSE = 'mijoteuse',
  BRAISAGE = 'braisage',
  RAGOUT = 'ragout',

  // Basse température
  SOUS_VIDE = 'sous_vide',
  BASSE_TEMPERATURE = 'basse_temperature',

  // Rôtissage
  ROTISSOIRE = 'rotissoire',
  ROTISSOIRE_VERTICALE = 'rotissoire_verticale',

  // Vapeur
  VAPEUR = 'vapeur',
  COURT_BOUILLON = 'court_bouillon',
  POCHAGE = 'pochage',

  // Rapides
  SAISIE = 'saisie',
  FLAMBE = 'flambe',

  // Fumage
  FUMOIR_CHAUD = 'fumoir_chaud',
  FUMOIR_FROID = 'fumoir_froid',

  // Spéciales
  AIR_FRYER = 'air_fryer',
  MICRO_ONDES = 'micro_ondes',
  PIERRE_CHAUDE = 'pierre_chaude',

  // Traditionnelles
  TAJINE = 'tajine',
  PAPILLOTE = 'papillote',
  CROUTE_SEL = 'croute_sel',
  CROUTE_ARGILE = 'croute_argile',

  // Professionnelles
  PLANCHA_PROFESSIONNELLE = 'plancha_professionnelle',
  GRILL_PIERRE_DE_LAVE = 'grill_pierre_de_lave',
  GRILL_SALAMANDRE = 'grill_salamandre',
}

export interface WeightRange {
  min: number;
  max: number;
  unit: 'kg' | 'g';
}

export interface Dimensions {
  length?: number;
  width?: number;
  height?: number;
  unit: 'cm' | 'mm';
}

export interface CookingTemperature {
  doneness: string; // 'bleu', 'saignant', 'à point', 'bien cuit', etc.
  coreTemperature: number; // °C
  safetyTemperature?: number; // EU safety standard
  description: string;
}

export interface CookingMethodInfo {
  method: CookingMethodType;
  cookingTemperature: number; // °C
  baseTimePerKg: number; // minutes
  baseTimePerCm?: number; // minutes (for thickness)
  adjustmentFactor: number;
  restingTime: number; // minutes
}

export interface MeatCut {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  typicalWeight?: WeightRange;
  typicalDimensions?: Dimensions;
  recommendations?: string;
  temperatures: CookingTemperature[];
  cookingMethods: CookingMethodInfo[];
}

export interface Meat {
  id: string;
  category: MeatCategory;
  name: string;
  nameEn?: string;
  description?: string;
  cuts: MeatCut[];
  icon?: string; // emoji icon
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CookingResult {
  meat: Meat;
  cut: MeatCut;
  method: CookingMethodInfo;
  weight: number; // kg
  thickness?: number; // cm
  targetTemperature: number; // °C
  initialTemperature: number; // °C
  cookingTime: number; // minutes
  restingTime: number; // minutes
  totalTime: number; // minutes
  estimatedEndTime?: Date;
  instructions: string[];
  tips: string[];
  warnings?: string[];
}

export interface HistoryEntry {
  id: string;
  result: CookingResult;
  completedAt: Date;
  rating?: number; // 1-5
  notes?: string;
}

export interface UserProfile {
  id: string;
  name?: string;
  email?: string;
  preferredLanguage: 'fr' | 'en' | 'es';
  preferredUnits: {
    weight: 'kg' | 'lbs';
    temperature: 'celsius' | 'fahrenheit';
    length: 'cm' | 'inches';
  };
  history: HistoryEntry[];
  favorites: string[]; // meat IDs
}
