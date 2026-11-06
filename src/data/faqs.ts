export interface FAQItem {
  question: string;
  answer: string;
  category: 'production' | 'materials' | 'ordering';
}

export const FAQS: FAQItem[] = [
  {
    category: 'production',
    question: 'How long does the bespoke printmaking process take?',
    answer: 'From initial design consultation to your finished suite arriving in our signature keepsake box, the typical bespoke timeline is 6 to 9 weeks. This includes 2 weeks of collaborative typography design and digital proofing, 2 weeks of custom magnesium die-making and paper allocation, 2 weeks on our 1954 Heidelberg platen press, and 1 to 2 weeks of hand-torn deckle edging, ribbon tying, and wax seal pouring. Rush timelines (4 weeks) are available by special arrangement.'
  },
  {
    category: 'ordering',
    question: 'What is your minimum order quantity?',
    answer: 'Because of the extensive setup time required for antique letterpress and hot foil stamping—including custom metal die engraving and ink mixing on stone—our studio minimum is 50 suites. We recommend ordering 15–20% more suites than your household count to accommodate keepsakes, photographers, and last-minute guest additions.'
  },
  {
    category: 'materials',
    question: 'What makes pure cotton rag paper superior to regular wedding cardstock?',
    answer: 'Standard commercial cardstocks are made from chemically bleached wood pulp, which is stiff, brittle, and deteriorates over decades. We print exclusively on 100% cotton rag paper milled from natural cotton linters. Cotton fibers are long, soft, and naturally acid-free, enabling our vintage letterpress to press deeply into the paper without puncturing the reverse. It will remain supple and luminous for centuries without yellowing.'
  },
  {
    category: 'materials',
    question: 'Can we order a tactile paper sample kit before committing to a full suite?',
    answer: 'Yes, absolutely. Our Curated Sample Box includes swatches of our four core cotton weights (300gsm to 800gsm duplex), tactile examples of blind deboss and hot foil finishes, plant-dyed silk ribbon swatches, and real wax seal crests. The £35 sample kit cost is fully credited toward your bespoke order once placed.'
  },
  {
    category: 'production',
    question: 'Do you provide full guest address printing or handwritten calligraphy?',
    answer: 'We offer both. We can typeset and letterpress your return address on the envelope flaps, and provide master calligraphed guest names and addresses in your chosen ink tone (charcoal umber, antique gold, or deep burgundy) to match the suite typography.'
  },
  {
    category: 'ordering',
    question: 'Do you ship internationally to destinations outside the UK?',
    answer: 'Yes. More than half of our couples celebrate across Europe, North America, and worldwide (notably Lake Como, the Amalfi Coast, Mallorca, Provence, the French Riviera, and the United States). All suites are individually packaged with archival glassine paper inside reinforced wooden keepsake boxes and dispatched via insured DHL Express with white-glove tracking.'
  }
];

