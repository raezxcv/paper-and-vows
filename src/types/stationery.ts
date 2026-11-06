export type CollectionCategory = 'all' | 'classical' | 'minimalist' | 'botanical' | 'velvet' | 'heirloom' | 'mediterranean';

export interface SuitePiece {
  name: string;
  dimensions: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  tagline: string;
  category: CollectionCategory;
  priceFrom: number;
  paperStock: string;
  paperWeight: string;
  printMethod: string;
  embellishments: string[];
  description: string;
  fullStory: string;
  featured: boolean;
  image: string;
  detailImages: string[];
  includedPieces: SuitePiece[];
  curatedColorPalette: { name: string; hex: string }[];
  calligraphyStyle: string;
  pressBiteDepth: string;
}

export interface PaperOption {
  id: string;
  name: string;
  weight: string;
  origin: string;
  texture: string;
  priceMultiplier: number;
  description: string;
  colorHex: string;
}

export interface PrintFinishOption {
  id: string;
  name: string;
  technique: string;
  pricePerHundred: number;
  description: string;
  badge: string;
}

export interface FoilColorOption {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export interface RibbonOption {
  id: string;
  name: string;
  material: string;
  colorHex: string;
}

export interface WaxSealOption {
  id: string;
  name: string;
  motif: string;
  colorHex: string;
}

export interface InquiryFormData {
  coupleNames: string;
  email: string;
  phone: string;
  eventDate: string;
  venueLocation: string;
  guestCount: number;
  suiteQuantity: number;
  selectedCollectionId: string;
  suitePieces: string[];
  paperStockId: string;
  printMethodId: string;
  foilColorId: string;
  ribbonId: string;
  waxSealId: string;
  budgetTier: string;
  specialVision: string;
  requestSampleKit: boolean;
}

