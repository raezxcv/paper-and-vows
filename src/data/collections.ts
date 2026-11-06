import type { Collection } from '../types/stationery';

export const COLLECTIONS: Collection[] = [
  {
    id: 'the-florentine',
    title: 'The Florentine',
    subtitle: 'Renaissance Deckle & Blind Filigree',
    era: '16th Century Tuscany & Tuscan Villa Cetinale',
    tagline: 'Hand-torn Fabriano cotton kissed with antique blind debossed filigree and unbleached silk.',
    category: 'classical',
    priceFrom: 1450,
    paperStock: 'Fabriano Artisanal Deckle Rag',
    paperWeight: '500 GSM Handmade',
    printMethod: 'Blind Deboss & Charcoal Letterpress',
    embellishments: ['Warm Ivory Botanical Wax Seal', '25mm Alabaster Silk Ribbon', 'Hand-calligraphed Envelopes'],
    description: 'Inspired by the frescoed loggias of Florence. Delicate floral architectural engravings pressed deep into damp cotton paper with classical humanist serif typography.',
    fullStory: 'The Florentine was conceived in the archives of historic print shops in Florence. We custom-cast magnesium relief plates that mimic the carved friezes of Tuscan palazzos. When struck onto 500gsm Italian rag, the floral vines create a quiet shadow play that catches natural daylight. It is classical without being ornate, archival without feeling antiquated.',
    featured: true,
    image: '/images/florentine-collection.jpg',
    detailImages: [
      '/images/florentine-collection.jpg',
      '/images/macro-letterpress.jpg',
      '/images/macro-wax-seal.jpg',
      '/images/menu-placecard.jpg'
    ],
    includedPieces: [
      { name: 'Main Invitation Card', dimensions: '135 × 195 mm', description: '500gsm Fabriano cotton with 4-side deckle edge, blind deboss frame, charcoal letterpress' },
      { name: 'RSVP Response Card', dimensions: '105 × 148 mm (A6)', description: 'Tear-off response card with hand-addressed matching envelope' },
      { name: 'Details & Travel Card', dimensions: '105 × 148 mm', description: 'Accommodations, dress code, and local transport itinerary' },
      { name: 'Mailing Envelope', dimensions: '140 × 200 mm', description: 'Flap adorned with botanical olive wax seal and calligraphed guest address' }
    ],
    curatedColorPalette: [
      { name: 'Warm Ivory', hex: '#FBF9F5' },
      { name: 'Charcoal Umber', hex: '#2C2623' },
      { name: 'Antique Gold', hex: '#8C7355' },
      { name: 'Florentine Olive', hex: '#60695C' }
    ],
    calligraphyStyle: 'Classical Humanist Italic with flourished initials',
    pressBiteDepth: '0.45mm into 500gsm soft cotton'
  },
  {
    id: 'sorella-minimalist',
    title: 'Sorella Minimalist',
    subtitle: 'Architectural Typography & Duplex Weight',
    era: 'Bauhaus Restraint meets Contemporary Scandinavian Design',
    tagline: 'Ultra-heavy 800gsm board, razor-sharp deboss, and warm espresso matte foil.',
    category: 'minimalist',
    priceFrom: 1320,
    paperStock: 'Monolithic Architectural Board',
    paperWeight: '800 GSM Duplex',
    printMethod: 'Matte Espresso Hot Foil Stamping & Blind Deboss',
    embellishments: ['Translucent Vellum Overlay', 'Graphite Blind Debossed Crest', 'Guillotine Beveled Edge'],
    description: 'For couples who worship whitespace and structural balance. Every typographic glyph is positioned with mathematical intention, celebrating pure paper mass.',
    fullStory: 'Sorella strips away all decorative distraction to honor typography and materiality. Bonded from two heavyweight sheets, the 800gsm board possesses an undeniable sculptural presence in the hand. The warm matte espresso foil provides gentle contrast against warm alabaster cotton without the gaudiness of polished metallics.',
    featured: true,
    image: '/images/sorella-minimalist.jpg',
    detailImages: [
      '/images/sorella-minimalist.jpg',
      '/images/macro-letterpress.jpg',
      '/images/ceremony-program.jpg',
      '/images/hero-suite.jpg'
    ],
    includedPieces: [
      { name: 'Monolithic Invitation', dimensions: '140 × 205 mm', description: '800gsm duplex board with matte espresso hot foil and blind debossed date' },
      { name: 'Vellum Itinerary Overlay', dimensions: '135 × 200 mm', description: '120gsm translucent German vellum with minimalist grid layout' },
      { name: 'RSVP Postcard', dimensions: '105 × 148 mm', description: 'Clean typographic layout with reply deadline and QR archival link' },
      { name: 'Envelope with Minimal Liner', dimensions: '145 × 210 mm', description: 'Sharp euro-flap envelope with taupe ink return address' }
    ],
    curatedColorPalette: [
      { name: 'Warm Alabaster', hex: '#F3EFEA' },
      { name: 'Matte Espresso', hex: '#3B312B' },
      { name: 'Muted Taupe', hex: '#A89F91' },
      { name: 'Clean White', hex: '#FFFFFF' }
    ],
    calligraphyStyle: 'Clean architectural grotesque with tracked capitals',
    pressBiteDepth: '0.55mm heavy hydraulic foil depression'
  },
  {
    id: 'botanique-provence',
    title: 'Botanique Provence',
    subtitle: 'Organic Wildflowers & Botanical Ink',
    era: 'Luberon Herbariums & Wild French Garden Meadows',
    tagline: 'Pressed botanical relief on unbleached cotton rag with madder-dyed silk.',
    category: 'botanical',
    priceFrom: 1380,
    paperStock: 'Somerset 100% Cotton Rag',
    paperWeight: '600 GSM Deckle Edge',
    printMethod: 'Sage Green Letterpress Ink & Wildflower Relief',
    embellishments: ['Olive Branch Monogram Wax Seal', 'Madder-Dyed Silk Ribbon', 'Feathered Deckle Margins'],
    description: 'Designed for celebrations under olive groves and open sky. We press vintage botanical illustrations directly into soft cotton fibers with organic earth-derived inks.',
    fullStory: 'Inspired by herbarium folios kept by botanists in southern France, Botanique Provence features custom etchings of wild olive, sprigged thyme, and lavender. The ink is mixed by hand on glass slabs using botanical pigment bases, resulting in a gentle, sun-bleached sage that settles harmoniously into the unbleached cotton.',
    featured: true,
    image: '/images/botanique-provence.jpg',
    detailImages: [
      '/images/botanique-provence.jpg',
      '/images/paper-textures.jpg',
      '/images/macro-wax-seal.jpg',
      '/images/menu-placecard.jpg'
    ],
    includedPieces: [
      { name: 'Botanical Invitation', dimensions: '130 × 190 mm', description: 'Deckle edge 600gsm rag with sage letterpress and blind-pressed wildflowers' },
      { name: 'Herbarium RSVP Card', dimensions: '100 × 145 mm', description: 'Deckle edge card with meal choice botanical icons' },
      { name: 'Illustrated Provence Map', dimensions: '125 × 180 mm', description: 'Hand-drawn watercolor & letterpress map of wedding weekend venues' },
      { name: 'Sage Linen Mailing Envelope', dimensions: '135 × 195 mm', description: 'Lined with vintage floral toile and sealed with olive wax' }
    ],
    curatedColorPalette: [
      { name: 'Sage Leaf', hex: '#60695C' },
      { name: 'Natural Cotton', hex: '#FBF9F5' },
      { name: 'Warm Taupe', hex: '#A89F91' },
      { name: 'Walnut Husk', hex: '#735F50' }
    ],
    calligraphyStyle: 'Organic French cursive script with delicate flourishes',
    pressBiteDepth: '0.40mm deep botanical plate bite'
  },
  {
    id: 'velvet-vow',
    title: 'Velvet & Vow',
    subtitle: 'Imperial Burgundy & Burnished Gold Foil',
    era: 'European Opera Salons & Candlelit Country Estates',
    tagline: 'Deep burgundy envelopes, burnished gold calligraphy foil, and heirloom wax crests.',
    category: 'velvet',
    priceFrom: 1650,
    paperStock: 'Somerset 100% Cotton Rag with Hand-Gilded Edges',
    paperWeight: '600 GSM Double-Thick',
    printMethod: 'Micro-Etched Hot Gold Foil & Deep Burgundy Letterpress',
    embellishments: ['Hand-Poured Deep Burgundy Wax Seal', 'Pure Velvet Ribbon', 'Gold Beveled Edges'],
    description: 'Dramatic, theatrical, and deeply romantic. Deep burgundy ink and warm gold foil meet on heavy cotton sheets edged in antique gold leaf.',
    fullStory: 'Created for evening vows and candlelit celebrations in historic castles and city libraries. The bespoke envelopes are crafted from 300gsm Colorplan Imperial Burgundy paper, lined with shimmering champagne silk, and closed with a hand-poured wax seal bearing the couple’s custom intertwined crest.',
    featured: false,
    image: '/images/velvet-vow.jpg',
    detailImages: [
      '/images/velvet-vow.jpg',
      '/images/macro-wax-seal.jpg',
      '/images/hero-suite.jpg',
      '/images/ceremony-program.jpg'
    ],
    includedPieces: [
      { name: 'Gilded Invitation Suite', dimensions: '140 × 200 mm', description: '600gsm cotton with burnished gold foil typography and 24k gold beveled edge' },
      { name: 'Burgundy RSVP Envelope & Card', dimensions: '105 × 150 mm', description: 'Deep burgundy card with gold ink calligraphy and reply card' },
      { name: 'Reception & Festivities Card', dimensions: '100 × 140 mm', description: 'Evening reception schedule and dress code guide' },
      { name: 'Imperial Burgundy Mailing Envelope', dimensions: '145 × 210 mm', description: 'Hand-addressed in shimmering antique gold calligraphy ink' }
    ],
    curatedColorPalette: [
      { name: 'Deep Burgundy', hex: '#4A1521' },
      { name: 'Burnished Gold', hex: '#8C7355' },
      { name: 'Parchment Ivory', hex: '#FBF9F5' },
      { name: 'Velvet Plum', hex: '#2C0D14' }
    ],
    calligraphyStyle: 'Dramatic Victorian Spencerian script with gold leaf capitals',
    pressBiteDepth: '0.50mm heated brass die impression'
  },
  {
    id: 'cotswold-heirloom',
    title: 'Cotswold Heirloom',
    subtitle: 'Traditional British Heritage & Sepia Ink',
    era: 'English Manor Archives & 19th Century Platen Presses',
    tagline: '100% British cotton rag, vintage sepia letterpress, and hand-addressed calligraphy.',
    category: 'heirloom',
    priceFrom: 1420,
    paperStock: 'Somerset 100% Cotton Rag',
    paperWeight: '600 GSM Handmade',
    printMethod: '1954 Heidelberg Platen Letterpress with Sepia Ink',
    embellishments: ['Weathered Bronze Wax Seal', 'Natural Silk Twine', 'Hand-Torn Deckle Edges'],
    description: 'Crafted on our 1954 Heidelberg windmill press with slow, methodical precision. Sepia umber ink enters pillowy cotton under tons of pressure.',
    fullStory: 'Rooted in the printmaking heritage of Gloucestershire and Somerset. We use authentic Somerset paper milled on cylinder moulds using archival cotton fibres that will remain pristine for over 300 years. The sepia ink is mixed with walnut extracts for an enduring, warm antiquarian tone.',
    featured: false,
    image: '/images/cotswold-heirloom.jpg',
    detailImages: [
      '/images/cotswold-heirloom.jpg',
      '/images/artisan-press.jpg',
      '/images/studio-detail.jpg',
      '/images/ceremony-program.jpg'
    ],
    includedPieces: [
      { name: 'Heirloom Invitation', dimensions: '135 × 195 mm', description: '600gsm Somerset rag with sepia letterpress and subtle blind monogram' },
      { name: 'Cotswold Estate Map Card', dimensions: '110 × 160 mm', description: 'Letterpress illustrated map of the stone manor grounds' },
      { name: 'RSVP Card & Return Envelope', dimensions: '100 × 140 mm', description: 'Hand-torn deckle card with pre-stamped return envelope' },
      { name: 'Cotton Parchment Envelope', dimensions: '140 × 200 mm', description: 'Archival envelope with hand-tied natural silk twine binding' }
    ],
    curatedColorPalette: [
      { name: 'Weathered Stone', hex: '#A89F91' },
      { name: 'Sepia Umber', hex: '#2C2623' },
      { name: 'Warm Cream', hex: '#FBF9F5' },
      { name: 'Antique Bronze', hex: '#735F50' }
    ],
    calligraphyStyle: 'Timeless Copperplate Calligraphy with subtle shade strokes',
    pressBiteDepth: '0.60mm deep sculptural letterpress indentation'
  },
  {
    id: 'soleil-terracotta',
    title: 'Soleil Terracotta',
    subtitle: 'Sun-Drenched Earthen Arches & Warm Sand',
    era: 'Amalfi Coast Villa Loggias & Warm Mediterranean Terracotta',
    tagline: 'Arched contours, blind sunbeam relief, and sand-washed handmade sheets.',
    category: 'mediterranean',
    priceFrom: 1390,
    paperStock: 'Khadi Raw Botanical Cotton',
    paperWeight: '450 GSM Hand-Cast',
    printMethod: 'Die-Cut Arch & Blind Debossed Sunbeam Relief',
    embellishments: ['Terracotta Seal with Sun Motif', 'Raw Frayed Linen Ribbon', 'Hand-Cast Arches'],
    description: 'Warm, luminous, and celebratory. Architectural arch die-cuts and blind debossed ray motifs honor the warmth of coastal Mediterranean sunlight.',
    fullStory: 'Soleil Terracotta captures the tactile soul of sun-warmed clay tiles and coastal stone walls. Each invitation card is individually die-cut into a graceful architectural arch, evoking Mediterranean courtyards. Hand-poured terracotta sealing wax adds an earthy, tactile focal point to the suite.',
    featured: false,
    image: '/images/soleil-terracotta.jpg',
    detailImages: [
      '/images/soleil-terracotta.jpg',
      '/images/paper-textures.jpg',
      '/images/menu-placecard.jpg',
      '/images/hero-suite.jpg'
    ],
    includedPieces: [
      { name: 'Die-Cut Arch Invitation', dimensions: '130 × 195 mm (Arched)', description: '450gsm Khadi cotton with blind sunbeam deboss and terracotta typography' },
      { name: 'Wave Details Card', dimensions: '105 × 150 mm', description: 'Curved edge card detailing welcome dinner and brunch' },
      { name: 'Terracotta RSVP Card', dimensions: '100 × 130 mm', description: 'Warm sand paper with terracotta letterpress and online RSVP URL' },
      { name: 'Earthen Terracotta Envelope', dimensions: '135 × 200 mm', description: 'Sealed with sunbeam wax seal and tied with raw frayed linen' }
    ],
    curatedColorPalette: [
      { name: 'Terracotta Clay', hex: '#B25D43' },
      { name: 'Warm Sand', hex: '#E5DDD0' },
      { name: 'Unbleached Cotton', hex: '#FBF9F5' },
      { name: 'Sunbeam Ochre', hex: '#C28464' }
    ],
    calligraphyStyle: 'Breezy Mediterranean monoline script with rounded arches',
    pressBiteDepth: '0.40mm blind contour arch deboss'
  }
];
