import type { FoilColorOption, PrintFinishOption, RibbonOption, WaxSealOption } from '../types/stationery';

export const PRINT_FINISHES: PrintFinishOption[] = [
  {
    id: 'letterpress-charcoal',
    name: 'Heidelberg Platen Letterpress',
    technique: 'Deep physical impression with oil-based pigment',
    pricePerHundred: 480,
    description: 'Printed one card at a time on our 1954 Heidelberg Windmill press. Generates a deep, tactile bite into pillowy cotton rag.',
    badge: 'Studio Signature',
  },
  {
    id: 'blind-deboss',
    name: 'Pure Blind Debossing (No Ink)',
    technique: 'Sculptural 3D dimensional presswork',
    pricePerHundred: 420,
    description: 'Carved magnesium dies depress the paper without ink, letting natural raking light and paper shadows articulate the motif.',
    badge: 'Tactile Minimalist',
  },
  {
    id: 'hot-foil',
    name: 'Micro-Etched Hot Foil Stamping',
    technique: 'Heated brass die with matte metallic leaf',
    pricePerHundred: 560,
    description: 'Heat and high tonnage fuse genuine metallic foil into the cotton fibers, yielding a warm, burnished metallic shimmer.',
    badge: 'Artisanal Lustre',
  },
  {
    id: 'duo-press',
    name: 'Letterpress & Hot Foil Combo',
    technique: 'Two-pass alignment of ink and metallic leaf',
    pricePerHundred: 680,
    description: 'The pinnacle of fine stationery: deep letterpress typography paired with subtle burnished foil crest accents.',
    badge: 'Heirloom Tier',
  },
];

export const FOIL_COLORS: FoilColorOption[] = [
  { id: 'champagne-gold', name: 'Burnished Champagne Gold', hex: '#D4C49A', description: 'Subtle warm gold, refined rather than brassy.' },
  { id: 'matte-espresso', name: 'Matte Espresso Umber', hex: '#3B312B', description: 'Deep dark coffee foil with zero glare.' },
  { id: 'warm-copper', name: 'Antique Florentine Copper', hex: '#C28464', description: 'Warm earthen copper with soft rosy undertones.' },
  { id: 'soft-pewter', name: 'Soft Archival Pewter', hex: '#8F8B85', description: 'Muted silver-grey with an antique patina.' },
];

export const SILK_RIBBONS: RibbonOption[] = [
  { id: 'alabaster', name: 'Alabaster Raw Edge Silk', material: '100% Habotai Silk, raw torn edges', colorHex: '#F6F3EE' },
  { id: 'burgundy', name: 'Madder Root Deep Burgundy', material: 'Plant-dyed bias cut habotai silk', colorHex: '#4A1521' },
  { id: 'sage-leaf', name: 'French Olive Green Silk', material: 'Botanical leaf bath dyed silk ribbon', colorHex: '#60695C' },
  { id: 'warm-sand', name: 'Walnut Dye Warm Sand', material: 'Slow walnut husk bath dyed silk', colorHex: '#C5B7A1' },
];

export const WAX_SEALS: WaxSealOption[] = [
  { id: 'monogram-crest', name: 'Bespoke Intertwined Monogram', motif: 'Hand-carved initials crest', colorHex: '#4A1521' },
  { id: 'botanical-olive', name: 'Mediterranean Olive Sprig', motif: 'Tuscan olive branch motif', colorHex: '#60695C' },
  { id: 'antique-fleur', name: 'Florentine Fleur-de-lis', motif: 'Classical Renaissance heraldic crest', colorHex: '#8C7355' },
  { id: 'champagne-blank', name: 'Minimalist Poured Oval (Smooth)', motif: 'Pure organic wax pool without stamp', colorHex: '#E5DDD0' },
];
