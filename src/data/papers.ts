import type { PaperOption } from '../types/stationery';

export const PAPERS: PaperOption[] = [
  {
    id: 'somerset-600',
    name: 'Somerset 100% Cotton Rag',
    weight: '600 GSM (Double-Thick)',
    origin: 'St Cuthbert Mill, Somerset, England',
    texture: 'Pillowy cotton with feather-soft deckle edges',
    priceMultiplier: 1.25,
    description: 'Mould-made using pure water from the River Axe. Takes deep letterpress indentation with sculptural relief and no show-through.',
    colorHex: '#FBF9F5',
  },
  {
    id: 'fabriano-deckle',
    name: 'Fabriano Artisanal Deckle Rag',
    weight: '500 GSM Handmade',
    origin: 'Fabriano, Marche, Italy',
    texture: 'Organic 4-side feather deckle, raw botanical pulp',
    priceMultiplier: 1.35,
    description: 'Hand-dipped deckle sheets crafted since the 13th century. Each sheet bears subtle, natural deckle variations on all four margins.',
    colorHex: '#F7F3ED',
  },
  {
    id: 'duplex-arch',
    name: 'Monolithic Architectural Board',
    weight: '800 GSM Duplex',
    origin: 'Kranichstein, Germany',
    texture: 'Ultra-dense smooth cotton, razor-sharp edge',
    priceMultiplier: 1.4,
    description: 'Two heavyweight sheets bonded with archival vegetable starch. Substantial, rigid, with a clean architectural profile.',
    colorHex: '#F4EFEB',
  },
  {
    id: 'khadi-wild',
    name: 'Khadi Raw Botanical Cotton',
    weight: '450 GSM Hand-Cast',
    origin: 'Karnataka, India',
    texture: 'Woven screen imprint with botanical fiber flecks',
    priceMultiplier: 1.15,
    description: 'Cast on woven cloth screens from recycled cotton garment cuttings. Softly textured, warm earthen tone, intensely tactile.',
    colorHex: '#ECE5DB',
  },
];
