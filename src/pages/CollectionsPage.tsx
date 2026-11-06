import React, { useState } from 'react';
import type { Collection, CollectionCategory } from '../types/stationery';
import { COLLECTIONS } from '../data/collections';
import { ArrowRight, Eye, Feather } from 'lucide-react';

interface CollectionsPageProps {
  onSelectCollection: (id: string) => void;
  onOpenSampleKit: () => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectCollection,
  onOpenSampleKit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory>('all');
  const [quickViewSuite, setQuickViewSuite] = useState<Collection | null>(null);

  const categories: { id: CollectionCategory; label: string }[] = [
    { id: 'all', label: 'All Six Suites' },
    { id: 'classical', label: 'Classical & Deckle' },
    { id: 'minimalist', label: 'Modern Minimalist' },
    { id: 'botanical', label: 'Botanical & Herbarium' },
    { id: 'velvet', label: 'Velvet & Imperial Foil' },
    { id: 'heirloom', label: 'British Heirloom' },
    { id: 'mediterranean', label: 'Mediterranean Arches' },
  ];

  const filteredCollections = selectedCategory === 'all'
    ? COLLECTIONS
    : COLLECTIONS.filter((c) => c.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 bg-[#FBF9F5] animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFEA] border border-[#8C7355]/30 text-xs font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-3">
            <Feather className="w-3.5 h-3.5 text-[#4A1521]" />
            <span>The Print Archives</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2623] tracking-tight leading-tight">
            The Six Original Suites
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#2C2623]/75 font-light mt-4 leading-relaxed">
            Every collection is conceived around a specific architectural legacy and paper tradition—from Florentine frescoed loggias to English Cotswold manor libraries. Each is fully customizable with our archival papers, hot foils, and botanical wax seals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#E5DDD0]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4A1521] text-[#FBF9F5] font-medium shadow-sm'
                    : 'bg-[#F3EFEA] text-[#2C2623]/70 hover:text-[#4A1521] hover:bg-white border border-[#E5DDD0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Collections Grid (6 Collections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {filteredCollections.map((suite) => (
            <div
              key={suite.id}
              className="bg-[#F3EFEA] border border-[#E5DDD0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Stage */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={suite.image}
                    alt={suite.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#FBF9F5]/90 backdrop-blur-sm text-[10px] font-sans tracking-widest uppercase text-[#4A1521] font-semibold border border-[#E5DDD0]">
                    {suite.category}
                  </div>
                  {/* Quick View Button on Image */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewSuite(suite);
                    }}
                    className="absolute bottom-3 right-3 p-2 bg-[#FBF9F5]/90 backdrop-blur-sm hover:bg-[#4A1521] hover:text-[#FBF9F5] text-[#2C2623] rounded-full shadow-md transition-colors cursor-pointer"
                    title="Quick Overview"
                    aria-label={`Quick overview for ${suite.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355] block font-medium">
                      {suite.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-semibold mt-1">
                      {suite.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#2C2623]/75 font-light leading-relaxed">
                    {suite.tagline}
                  </p>

                  {/* Technical Meta Pills */}
                  <div className="space-y-2 pt-2 border-t border-[#E5DDD0]/70 text-xs">
                    <div className="flex justify-between items-center text-[#2C2623]">
                      <span className="text-[#A89F91] text-[11px] uppercase tracking-wider">Paper Stock:</span>
                      <span className="font-medium text-right text-[11px]">{suite.paperStock}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#2C2623]">
                      <span className="text-[#A89F91] text-[11px] uppercase tracking-wider">Weight:</span>
                      <span className="font-semibold text-right text-[11px] text-[#4A1521]">{suite.paperWeight}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#2C2623]">
                      <span className="text-[#A89F91] text-[11px] uppercase tracking-wider">Technique:</span>
                      <span className="font-medium text-right text-[11px]">{suite.printMethod}</span>
                    </div>
                  </div>

                  {/* Palette Swatches */}
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#A89F91]">Palette:</span>
                    <div className="flex items-center gap-1.5">
                      {suite.curatedColorPalette.map((col, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                          className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectCollection(suite.id)}
                  className="w-full py-3 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.18em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm font-medium"
                >
                  <span>Explore &amp; Customize Suite</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89F7C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-xl bg-[#F3EFEA] border border-[#E5DDD0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-semibold">
              Desire a Fully Bespoke One-of-a-Kind Commission?
            </h3>
            <p className="text-xs sm:text-sm text-[#2C2623]/70 font-light max-w-xl">
              Beyond our six foundational suites, we create completely bespoke commissions with custom hand-carved monograms, architectural foil drawings, and hand-painted gold edges.
            </p>
          </div>
          <button
            onClick={onOpenSampleKit}
            className="px-6 py-3.5 bg-[#2C2623] text-[#FBF9F5] text-xs font-sans tracking-[0.18em] uppercase rounded hover:bg-[#4A1521] transition-colors cursor-pointer whitespace-nowrap shadow-sm font-medium"
          >
            Order Sample Box (&pound;35)
          </button>
        </div>

      </div>

      {/* Quick Overview Drawer / Modal */}
      {quickViewSuite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2623]/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FBF9F5] rounded-xl border border-[#E5DDD0] shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setQuickViewSuite(null)}
              className="absolute right-4 top-4 p-2 text-[#A89F91] hover:text-[#4A1521] transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#E5DDD0]">
                <img
                  src={quickViewSuite.image}
                  alt={quickViewSuite.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355] block font-medium">
                  {quickViewSuite.subtitle}
                </span>
                <h3 className="font-serif text-3xl text-[#2C2623] font-semibold mt-1">
                  {quickViewSuite.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2C2623]/80 leading-relaxed font-light mt-2">
                  {quickViewSuite.fullStory}
                </p>
              </div>

              {/* Included Pieces */}
              <div>
                <h4 className="text-xs font-sans tracking-wider uppercase text-[#4A1521] font-semibold mb-2">
                  Suite Components Included:
                </h4>
                <div className="space-y-2">
                  {quickViewSuite.includedPieces.map((piece, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#F3EFEA] border border-[#E5DDD0] text-xs">
                      <div className="flex justify-between font-medium text-[#2C2623]">
                        <span>{piece.name}</span>
                        <span className="text-[#8C7355]">{piece.dimensions}</span>
                      </div>
                      <p className="text-[11px] text-[#A89F91] mt-0.5">{piece.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5DDD0]">
                <div>
                  <span className="text-[10px] text-[#A89F91] uppercase block">Base Suite Pricing</span>
                  <span className="font-serif text-2xl font-bold text-[#4A1521]">
                    From &pound;{quickViewSuite.priceFrom.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const id = quickViewSuite.id;
                    setQuickViewSuite(null);
                    onSelectCollection(id);
                  }}
                  className="px-6 py-3 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.18em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer"
                >
                  Configure &amp; Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
