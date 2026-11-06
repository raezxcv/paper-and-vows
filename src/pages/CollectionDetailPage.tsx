import React, { useState } from 'react';
import { COLLECTIONS } from '../data/collections';
import { PaperCustomizer } from '../components/PaperCustomizer';
import { ArrowLeft, ShieldCheck, Check } from 'lucide-react';

interface CollectionDetailPageProps {
  collectionId: string;
  onBackToCollections: () => void;
  onNavigateToInquiryWithConfig: (config: any) => void;
  onOpenSampleKit: () => void;
  onSelectCollection: (id: string) => void;
}

export const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({
  collectionId,
  onBackToCollections,
  onNavigateToInquiryWithConfig,
  onOpenSampleKit,
  onSelectCollection,
}) => {
  const collection = COLLECTIONS.find((c) => c.id === collectionId) || COLLECTIONS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = collection.detailImages.length > 0 ? collection.detailImages : [collection.image];

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5] animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Navigation & Suite Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-[#E5DDD0] gap-4">
          <button
            onClick={onBackToCollections}
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.18em] uppercase text-[#8C7355] hover:text-[#4A1521] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Collections</span>
          </button>

          {/* Quick Collection Switcher Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            <span className="text-[10px] uppercase tracking-wider text-[#A89F91] hidden md:inline-block mr-1">
              Switch Suite:
            </span>
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onSelectCollection(c.id);
                  setActiveImageIndex(0);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-sans tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  c.id === collection.id
                    ? 'bg-[#4A1521] text-[#FBF9F5] font-medium'
                    : 'bg-[#F3EFEA] text-[#2C2623]/70 hover:bg-[#E5DDD0]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Gallery & Editorial Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-start">
          
          {/* Left Column: Multi-Angle Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F3EFEA] border border-[#E5DDD0] shadow-xl group">
              <img
                src={images[activeImageIndex]}
                alt={`${collection.title} detail view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#FBF9F5]/90 backdrop-blur-sm rounded text-[10px] font-sans tracking-widest uppercase text-[#4A1521] font-semibold border border-[#E5DDD0]">
                {collection.category} &middot; Plate No. 0{activeImageIndex + 1}
              </div>
            </div>

            {/* Thumbnail Ribbon */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#4A1521] ring-2 ring-[#4A1521] shadow-md'
                      : 'border-[#E5DDD0] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-[11px] text-[#A89F91] text-center uppercase tracking-widest pt-1">
              Photographed under 45&deg; natural raking morning light to expose letterpress relief.
            </p>
          </div>

          {/* Right Column: Architectural Description & Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block font-medium">
                {collection.subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2623] font-semibold mt-1">
                {collection.title}
              </h1>
              <p className="font-serif italic text-base text-[#4A1521] mt-2">
                &ldquo;{collection.tagline}&rdquo;
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#2C2623]/80 leading-relaxed font-light">
              {collection.fullStory}
            </p>

            {/* Archival Specification Table */}
            <div className="bg-[#F3EFEA] border border-[#E5DDD0] rounded-lg p-5 space-y-3 text-xs">
              <h4 className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8C7355] font-semibold border-b border-[#E5DDD0] pb-2">
                Suite Technical Profile
              </h4>

              <div className="flex justify-between items-center">
                <span className="text-[#A89F91] uppercase tracking-wider">Default Paper:</span>
                <span className="font-medium text-[#2C2623]">{collection.paperStock}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A89F91] uppercase tracking-wider">Paper Density:</span>
                <span className="font-semibold text-[#4A1521]">{collection.paperWeight}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A89F91] uppercase tracking-wider">Press Bite Depth:</span>
                <span className="font-medium text-[#2C2623]">{collection.pressBiteDepth}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A89F91] uppercase tracking-wider">Calligraphy Discipline:</span>
                <span className="font-medium text-[#2C2623]">{collection.calligraphyStyle}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A89F91] uppercase tracking-wider">Era Inspiration:</span>
                <span className="font-serif italic text-[#8C7355]">{collection.era}</span>
              </div>
            </div>

            {/* Hand-Finished Embellishments */}
            <div>
              <span className="text-[11px] font-sans tracking-[0.15em] uppercase text-[#A89F91] block mb-2 font-medium">
                Included Embellishments:
              </span>
              <div className="flex flex-wrap gap-2">
                {collection.embellishments.map((emb, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded bg-[#FBF9F5] border border-[#8C7355]/40 text-xs text-[#2C2623] flex items-center gap-1.5"
                  >
                    <Check className="w-3 h-3 text-[#4A1521]" />
                    <span>{emb}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Base Pricing & Sample CTA */}
            <div className="pt-4 border-t border-[#E5DDD0] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#A89F91] uppercase tracking-widest block">
                  Foundational Suite Investment
                </span>
                <span className="font-serif text-3xl font-bold text-[#4A1521]">
                  From &pound;{collection.priceFrom.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#A89F91] block">per 100 bespoke suites</span>
              </div>

              <button
                onClick={onOpenSampleKit}
                className="px-5 py-2.5 bg-[#F3EFEA] border border-[#8C7355] text-[#2C2623] text-xs font-sans tracking-wider uppercase rounded hover:bg-white transition-all cursor-pointer font-medium"
              >
                Sample Box (&pound;35)
              </button>
            </div>
          </div>

        </div>

        {/* Suite Components Deep Dive */}
        <div className="mt-20 pt-16 border-t border-[#E5DDD0]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#8C7355] block font-medium">
              What Is Included
            </span>
            <h3 className="font-serif text-3xl text-[#2C2623] font-semibold mt-1">
              Pieces Comprising {collection.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collection.includedPieces.map((piece, i) => (
              <div key={i} className="p-6 rounded-lg bg-[#F3EFEA] border border-[#E5DDD0] space-y-3 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-full bg-[#FBF9F5] border border-[#8C7355]/40 flex items-center justify-center font-serif text-xs font-bold text-[#4A1521] mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#2C2623]">
                    {piece.name}
                  </h4>
                  <span className="text-[10px] font-sans tracking-wider uppercase text-[#8C7355] font-medium block mt-0.5">
                    {piece.dimensions}
                  </span>
                  <p className="text-xs text-[#2C2623]/75 font-light leading-relaxed mt-2">
                    {piece.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DDD0]/70 flex items-center gap-1.5 text-[11px] text-[#A89F91]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C7355]" />
                  <span>Mould-made cotton stock</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Interactive Paper & Finish Customizer Section */}
        <div className="mt-24">
          <PaperCustomizer
            collection={collection}
            onApplyToInquiry={onNavigateToInquiryWithConfig}
            onOpenSampleKit={onOpenSampleKit}
          />
        </div>

      </div>
    </div>
  );
};
