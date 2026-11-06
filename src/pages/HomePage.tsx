import React from 'react';
import { SuiteAnatomy } from '../components/SuiteAnatomy';
import { COLLECTIONS } from '../data/collections';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectCollection: (id: string) => void;
  onOpenSampleKit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCollection,
  onOpenSampleKit,
}) => {
  const featuredSuites = COLLECTIONS.slice(0, 3);

  return (
    <div className="space-y-0 overflow-x-clip">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="bg-[#FBF9F5] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#2C2623] tracking-tight leading-[1.08] font-normal">
                Slow Paper, Pressed for Enduring Vows.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#3C3530] font-light leading-relaxed max-w-xl">
                We craft tactile wedding stationery printed on 1954 Heidelberg platen presses using 100% pure cotton rag, botanical dye baths, and hand-poured wax seals. Designed in Gloucestershire, celebrated worldwide.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('collections')}
                  className="px-8 py-4 bg-[#4A1521] text-[#FBF9F5] text-sm font-sans tracking-widest uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer flex items-center justify-center gap-3 font-medium"
                >
                  <span>Explore The Six Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#B89F7C]" />
                </button>

                <button
                  onClick={onOpenSampleKit}
                  className="px-7 py-4 bg-[#F3EFEA] text-[#2C2623] text-sm font-sans tracking-widest uppercase rounded hover:bg-[#EAE4D9] transition-colors cursor-pointer text-center font-medium"
                >
                  Order Swatch Folio (&pound;35)
                </button>
              </div>

              {/* Studio Accreditations */}
              <div className="pt-8 grid grid-cols-3 gap-6 text-sm font-sans">
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#4A1521] block">600 GSM</span>
                  <span className="text-sm text-[#4A433F] font-medium mt-1 block">Mould-made cotton</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#4A1521] block">1954</span>
                  <span className="text-sm text-[#4A433F] font-medium mt-1 block">Platen letterpress</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#4A1521] block">300 Years</span>
                  <span className="text-sm text-[#4A433F] font-medium mt-1 block">Archival longevity</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photographic Composition */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden bg-[#F3EFEA]">
                <img
                  src="/images/hero-suite.jpg"
                  alt="Editorial bespoke wedding stationery suite flat-lay with letterpress and wax seal"
                  className="w-full aspect-[4/3] object-cover"
                />
                
                {/* Information Caption Bar */}
                <div className="p-4 bg-[#F3EFEA] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#5C554F] gap-2">
                  <span className="font-serif text-sm font-medium text-[#2C2623]">
                    The Cotswold Heirloom Suite &middot; 600gsm Somerset Cotton Rag
                  </span>
                  <span className="uppercase tracking-wider font-medium text-[#4A1521]">
                    Heidelberg Letterpress &middot; Hand-Torn Deckle
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ATELIER NARRATIVE: THE CRAFT & PRESSWORK (Replaces repetitive icon cards) */}
      <section className="py-24 bg-[#F3EFEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2623] leading-tight font-normal">
                An antidote to fleeting digital invitations.
              </h2>
              
              <p className="font-sans text-base text-[#3C3530] font-light leading-relaxed">
                When a guest slides their finger beneath a heavy cotton envelope flap, feeling the crisp pop of a botanical wax seal and the deep impression of letterpress type biting into pillowy rag paper, they understand instantly that this celebration is intentional.
              </p>

              <p className="font-sans text-base text-[#3C3530] font-light leading-relaxed">
                We mill our paper from pure cotton garment linters rather than tree pulp. Cotton fibers are long, soft, and naturally acid-free, enabling our 1954 Heidelberg platen press to press deeply into the sheet without breaking the reverse. The impression remains sharp for centuries.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('studio')}
                  className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase text-[#4A1521] hover:text-[#6A2232] font-semibold transition-colors cursor-pointer"
                >
                  <span>Read our Chipping Campden Atelier Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden bg-[#EAE4D9]">
                <img
                  src="/images/macro-letterpress.jpg"
                  alt="Vintage wood letterpress type cases in atelier workshop"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-[#EAE4D9] text-xs text-[#5C554F] flex justify-between">
                  <span className="font-serif text-sm text-[#2C2623]">Hand-set movable wood &amp; metal type</span>
                  <span className="uppercase tracking-wider">Historical Specimen Archive</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ANATOMY DECONSTRUCTION */}
      <SuiteAnatomy />

      {/* 4. CURATED SIGNATURE SUITES PREVIEW */}
      <section className="py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2623] font-normal">
                Signature Collections
              </h2>
              <p className="text-base text-[#3C3530] font-light mt-3 max-w-xl leading-relaxed">
                Each collection represents a distinct architectural and typographic heritage, from Renaissance Italian blind deboss to modern Scandinavian minimalism.
              </p>
            </div>

            <button
              onClick={() => onNavigate('collections')}
              className="px-6 py-3 bg-[#F3EFEA] text-[#4A1521] text-xs font-sans tracking-widest uppercase rounded hover:bg-[#4A1521] hover:text-[#FBF9F5] transition-all cursor-pointer font-semibold self-start md:self-auto flex items-center gap-2"
            >
              <span>View All Six Suites</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSuites.map((suite) => (
              <div
                key={suite.id}
                onClick={() => onSelectCollection(suite.id)}
                className="group cursor-pointer bg-[#F3EFEA] rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-2">
                    <h3 className="font-serif text-2xl text-[#2C2623] font-semibold group-hover:text-[#4A1521] transition-colors">
                      {suite.title}
                    </h3>
                    <p className="text-sm font-sans text-[#8C7355] font-medium">
                      {suite.subtitle}
                    </p>
                    <p className="text-sm text-[#3C3530] font-light leading-relaxed line-clamp-2 pt-1">
                      {suite.tagline}
                    </p>

                    <div className="pt-4 flex justify-between items-center text-sm text-[#4A433F]">
                      <span>{suite.paperWeight}</span>
                      <span className="font-serif text-[#4A1521] font-bold text-base">
                        From &pound;{suite.priceFrom.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="w-full py-3 bg-[#FBF9F5] rounded text-center text-xs font-sans tracking-widest uppercase text-[#2C2623] group-hover:bg-[#4A1521] group-hover:text-[#FBF9F5] transition-all font-medium flex items-center justify-center gap-2">
                    <span>Inspect Suite &amp; Materials</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B89F7C]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DESIGN PHILOSOPHY & HEIDELBERG CRAFTSMANSHIP MANIFESTO */}
      <section className="py-24 bg-[#2C2623] text-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] leading-tight font-normal">
                Slow Printmaking in a Digital Age.
              </h2>

              <p className="text-base text-[#E5DDD0] font-light leading-relaxed">
                In an era of fleeting screens and transient pixels, a wedding invitation remains one of the few physical objects that family members preserve in heirloom cedar boxes for half a century.
              </p>

              <p className="text-base text-[#E5DDD0] font-light leading-relaxed">
                We refuse to rush. Our 1954 Heidelberg platen press was forged when machinery was built to outlast generations. It requires oil, patient calibration, and an artisan’s hand to feel the dampness of the cotton paper before the lever is pulled. The result is genuine physical impression.
              </p>

              <div className="pt-4 text-base font-serif italic text-[#B89F7C]">
                &ldquo;Paper is the very first touch of your celebration.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden bg-[#3B332F] aspect-[4/3]">
                <img
                  src="/images/artisan-press.jpg"
                  alt="Vintage 1954 Heidelberg platen letterpress in sunlit Cotswolds print shop"
                  className="w-full h-full object-cover"
                />
                <div className="p-4 bg-[#3B332F] text-xs text-[#E5DDD0] flex justify-between">
                  <span className="font-serif text-sm">The Chipping Campden Atelier</span>
                  <span className="uppercase tracking-wider">1954 Heidelberg Windmill</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. EDITORIAL LETTERS FROM REAL COUPLES */}
      <section className="py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-normal">
              Letters from Our Couples
            </h2>
            <p className="text-base text-[#3C3530] font-light mt-2">
              Reflections on paper weight, custom monograms, and wedding day keepsakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-[#F3EFEA] space-y-4">
              <p className="font-serif text-base text-[#2C2623] italic leading-relaxed">
                &ldquo;When our guests opened the envelopes for our Villa Cetinale wedding, they immediately called us just to talk about the paper. The blind debossed filigree and the deep burgundy wax seal set the entire tone for our celebration.&rdquo;
              </p>
              <div className="pt-4 text-xs">
                <span className="font-semibold text-[#2C2623] block text-sm">Eleanor &amp; Charles</span>
                <span className="text-[#5C554F]">Villa Cetinale &middot; Tuscany, Italy</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#F3EFEA] space-y-4">
              <p className="font-serif text-base text-[#2C2623] italic leading-relaxed">
                &ldquo;As an architect, I am relentlessly particular about materials. The 800gsm duplex Sorella suite was magnificent. The weight in the hand and the crisp matte espresso foil bite were flawless.&rdquo;
              </p>
              <div className="pt-4 text-xs">
                <span className="font-semibold text-[#2C2623] block text-sm">Marcus &amp; Linnea</span>
                <span className="text-[#5C554F]">The Glass House &middot; Copenhagen</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#F3EFEA] space-y-4">
              <p className="font-serif text-base text-[#2C2623] italic leading-relaxed">
                &ldquo;Working with Paper &amp; Vows was the calmest, most inspiring part of wedding planning. The sample box arrived beautifully packaged, and seeing our vows bound in hand-dyed silk ribbon brought tears to our eyes.&rdquo;
              </p>
              <div className="pt-4 text-xs">
                <span className="font-semibold text-[#2C2623] block text-sm">Sophie &amp; William</span>
                <span className="text-[#5C554F]">Cornwell Manor &middot; Cotswolds, UK</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-[#F3EFEA]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2623] font-normal">
            Begin with the Touch of Paper
          </h2>
          <p className="font-sans text-base text-[#3C3530] font-light max-w-xl mx-auto leading-relaxed">
            Order our curated sample box to experience four cotton rag weights and wax seal crests in person, or schedule your private design consultation with our atelier.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenSampleKit}
              className="px-8 py-4 bg-[#4A1521] text-[#FBF9F5] text-sm font-sans tracking-widest uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer font-medium"
            >
              Order Sample Box (&pound;35 Credited)
            </button>
            <button
              onClick={() => onNavigate('studio')}
              className="px-8 py-4 bg-[#FBF9F5] text-[#2C2623] text-sm font-sans tracking-widest uppercase rounded hover:bg-white transition-colors cursor-pointer font-medium"
            >
              Book Studio Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
