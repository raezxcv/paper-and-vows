import React, { useState } from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { FAQS } from '../data/faqs';
import { Compass, ChevronDown, ChevronUp, Clock, Package } from 'lucide-react';

interface StudioPageProps {
  customConfig?: {
    collectionId?: string;
    paperId?: string;
    finishId?: string;
    foilId?: string;
    ribbonId?: string;
    sealId?: string;
  };
  onOpenSampleKit: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ customConfig, onOpenSampleKit }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const processSteps = [
    {
      num: '01',
      title: 'Consultation & Swatch Folio',
      timeframe: 'Weeks 1 &ndash; 2',
      desc: 'We begin with a conversation about your celebration, wedding aesthetic, and architectural venue. You receive our Curated Sample Box with tactile cotton swatches, foil finishes, and silk ribbon cuttings to review in your home.'
    },
    {
      num: '02',
      title: 'Typographic Curation & Digital Proofs',
      timeframe: 'Weeks 2 &ndash; 4',
      desc: 'We draft bespoke typographic layouts, pairing historical serif types with custom calligraphy for your names. You review two rounds of architectural digital proofs to perfect every ligature, line spacing, and wording etiquette.'
    },
    {
      num: '03',
      title: 'Magnesium Dies & Heidelberg Presswork',
      timeframe: 'Weeks 5 &ndash; 7',
      desc: 'Once approved, metal relief dies are milled. Our master printer mixes ink on stone slabs and hand-feeds each cotton sheet into our 1954 Heidelberg platen press under 2.5 tons of pressure. Foils and blind debossings are pressed in subsequent passes.'
    },
    {
      num: '04',
      title: 'Hand-Finishing & Archival Dispatch',
      timeframe: 'Weeks 7 &ndash; 9',
      desc: 'Our artisans hand-tear deckle margins, pour botanical wax seals with your monogram crest, and tie plant-dyed habotai silk ribbons. Your complete suite is cushioned in glassine within cedar keepsake boxes and dispatched worldwide via insured express courier.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FBF9F5] animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        
        {/* 1. ATELIER STORY & CRAFTSMANSHIP HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFEA] border border-[#8C7355]/30 text-xs font-sans tracking-[0.2em] uppercase text-[#8C7355]">
              <Compass className="w-3.5 h-3.5 text-[#4A1521]" />
              <span>The Atelier Heritage</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2623] tracking-tight leading-tight">
              An independent studio dedicated to tactile permanence.
            </h1>

            <p className="font-sans text-xs sm:text-base text-[#2C2623]/80 leading-relaxed font-light">
              Founded in 2018 in Gloucestershire, <em>Paper &amp; Vows</em> was born out of a desire to rescue wedding stationery from the disposable realm of digital offset printing. 
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#2C2623]/80 leading-relaxed font-light">
              We operate two working spaces: our primary printmaking workshop inside an 18th-century stone mill in Chipping Campden, where our 1954 Heidelberg platen presses reside, and our private appointment salon on Berkeley Square in London.
            </p>

            <div className="pt-2 flex items-center gap-8 text-xs font-sans">
              <div>
                <span className="font-serif text-2xl font-bold text-[#4A1521] block">50 Suites</span>
                <span className="text-[10px] text-[#A89F91] tracking-widest uppercase">Monthly Studio Cap</span>
              </div>
              <div className="w-px h-10 bg-[#E5DDD0]" />
              <div>
                <span className="font-serif text-2xl font-bold text-[#4A1521] block">100%</span>
                <span className="text-[10px] text-[#A89F91] tracking-widest uppercase">Mould-Made Cotton</span>
              </div>
              <div className="w-px h-10 bg-[#E5DDD0]" />
              <div>
                <span className="font-serif text-2xl font-bold text-[#4A1521] block">1954</span>
                <span className="text-[10px] text-[#A89F91] tracking-widest uppercase">Windmill Platen</span>
              </div>
            </div>

            {/* Quick Sample Box CTA inside Hero */}
            <div className="pt-4">
              <button
                onClick={onOpenSampleKit}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F3EFEA] border border-[#8C7355] text-[#2C2623] text-xs font-sans tracking-wider uppercase rounded hover:bg-white transition-all cursor-pointer font-medium"
              >
                <Package className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>Order Physical Material Sample Box (&pound;35)</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#E5DDD0] shadow-lg">
                <img
                  src="/images/studio-detail.jpg"
                  alt="Mixing letterpress ink on glass slab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#F3EFEA] rounded border border-[#E5DDD0] text-center text-[10px] tracking-widest uppercase text-[#8C7355]">
                Custom Pigment Ink Mixing
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#E5DDD0] shadow-lg">
                <img
                  src="/images/paper-textures.jpg"
                  alt="Cotton deckle edge paper stacks in the studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#F3EFEA] rounded border border-[#E5DDD0] text-center text-[10px] tracking-widest uppercase text-[#8C7355]">
                Archival Cotton Stacks
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE 4-STEP BESPOKE COMMISSION JOURNEY */}
        <section className="py-16 border-y border-[#E5DDD0]/70">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block font-medium">
              The Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-semibold mt-1">
              Our 4-Step Bespoke Commission Process
            </h2>
            <p className="text-xs sm:text-sm text-[#2C2623]/70 font-light mt-2">
              From our first design dialogue to opening your finished keepsake box, our process is calm, personal, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F3EFEA] border border-[#E5DDD0] rounded-xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E5DDD0]/70">
                    <span className="font-serif text-3xl font-bold text-[#4A1521]">
                      {step.num}
                    </span>
                    <span
                      className="text-[10px] font-sans tracking-widest uppercase text-[#8C7355] px-2 py-0.5 rounded bg-[#FBF9F5] border border-[#E5DDD0]"
                      dangerouslySetInnerHTML={{ __html: step.timeframe }}
                    />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#2C2623] mt-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#2C2623]/75 font-light leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DDD0]/60 flex items-center gap-1.5 text-[11px] text-[#A89F91]">
                  <Clock className="w-3.5 h-3.5 text-[#8C7355]" />
                  <span>White-glove collaboration</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. FREQUENTLY ASKED QUESTIONS ACCORDION */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block font-medium">
              Studio Etiquette &amp; Technical Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 mt-8">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F3EFEA] border border-[#E5DDD0] rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-[#E5DDD0]/30 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#2C2623]">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#FBF9F5] border border-[#8C7355]/40 flex items-center justify-center shrink-0 text-[#4A1521]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#2C2623]/80 leading-relaxed font-light border-t border-[#E5DDD0]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. FUNCTIONAL BESPOKE INQUIRY FORM */}
        <section className="pt-8">
          <InquiryForm
            initialCollectionId={customConfig?.collectionId || 'the-florentine'}
            initialPaperId={customConfig?.paperId || 'somerset-600'}
            initialFinishId={customConfig?.finishId || 'letterpress-charcoal'}
            initialFoilId={customConfig?.foilId || 'champagne-gold'}
            initialRibbonId={customConfig?.ribbonId || 'alabaster'}
            initialSealId={customConfig?.sealId || 'monogram-crest'}
          />
        </section>

      </div>
    </div>
  );
};
