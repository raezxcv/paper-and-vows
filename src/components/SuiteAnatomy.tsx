import React, { useState } from 'react';
import { Layers, ShieldCheck, Eye } from 'lucide-react';

interface AnatomyPart {
  id: string;
  name: string;
  shortLabel: string;
  specs: {
    paper: string;
    weight: string;
    print: string;
    dimensions: string;
    craftNote: string;
  };
  highlightCoord: { x: number; y: number }; // percentage position
}

const PARTS: AnatomyPart[] = [
  {
    id: 'main-invitation',
    name: 'The Main Formal Invitation Card',
    shortLabel: 'Invitation',
    specs: {
      paper: 'Somerset 100% Pure Cotton Rag',
      weight: '600 GSM Double-Thick Mould-Made',
      print: 'Heidelberg Platen Letterpress & Blind Deboss Border',
      dimensions: '140 × 200 mm British Archival Ratio',
      craftNote: 'Each card is pressed under 2.5 tons of pressure. The blind debossed framing creates a recessed stage for the deep charcoal letterpress type, casting soft micro-shadows under natural daylight.'
    },
    highlightCoord: { x: 38, y: 44 }
  },
  {
    id: 'rsvp-envelope',
    name: 'RSVP Card & Return Envelope',
    shortLabel: 'RSVP',
    specs: {
      paper: 'Somerset 100% Cotton Rag with Hand-Torn Deckle',
      weight: '300 GSM Flexible Cotton Sheet',
      print: 'One-Color Sepia Letterpress with Custom Response Prompts',
      dimensions: '105 × 148 mm (A6 European Standard)',
      craftNote: 'Torn by hand along a water-scored straight edge to achieve an organic, feathered deckle margin on all four sides. The envelope flap features calligraphed return addresses.'
    },
    highlightCoord: { x: 72, y: 32 }
  },
  {
    id: 'details-map',
    name: 'Details Card & Estate Itinerary',
    shortLabel: 'Details',
    specs: {
      paper: 'Hand-Cast Khadi Botanical Rag with Wild Linters',
      weight: '450 GSM Earthen Texture',
      print: 'Blind Debossed Monogram Crest & Charcoal Itinerary Grid',
      dimensions: '105 × 150 mm',
      craftNote: 'Houses ceremony timelines, transportation advice, and curated dress code suggestions. Printed on warm unbleached paper that complements the formal invitation.'
    },
    highlightCoord: { x: 62, y: 72 }
  },
  {
    id: 'silk-ribbon',
    name: 'Plant-Dyed Botanical Silk Ribbon',
    shortLabel: 'Silk Ribbon',
    specs: {
      paper: '100% Pure Habotai Silk (Hand-Torn Bias Cut)',
      weight: '16mm Width with Raw Frayed Edges',
      print: 'Dyed in Botanical Baths of Madder Root & Walnut Husk',
      dimensions: '450 mm Length per Suite',
      craftNote: 'Dyed in our studio garden dye-baths using rainwater and organic plant matter. The frayed edges flutter softly when untying, creating an intimate unboxing ritual.'
    },
    highlightCoord: { x: 26, y: 68 }
  },
  {
    id: 'wax-seal',
    name: 'Hand-Poured Wax Seal with Custom Crest',
    shortLabel: 'Wax Seal',
    specs: {
      paper: 'Flexible Archival Micro-Wax (Postal Shatter-Resistant)',
      weight: 'Hand-Mixed Burgundy or Champagne Pigment',
      print: 'Individually Stamped with Engraved Solid Brass Die',
      dimensions: '28 mm Diameter',
      craftNote: 'Unlike rigid sealing wax of antiquity, our proprietary beeswax blend retains elasticity to withstand mechanical postal sorting machines without cracking.'
    },
    highlightCoord: { x: 48, y: 22 }
  }
];

export const SuiteAnatomy: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>('main-invitation');
  const activePart = PARTS.find((p) => p.id === selectedPartId) || PARTS[0];

  return (
    <section className="py-24 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2623] tracking-tight leading-tight font-normal">
            The Anatomy of an Heirloom Suite
          </h2>
          <p className="font-sans text-base text-[#3C3530] font-light mt-4 leading-relaxed">
            Every bespoke invitation suite is a balanced ecosystem of tactile weight, historical type, and sensory finishes. Select each element below to explore its printing method and paper alchemy.
          </p>
        </div>

        {/* 2-Column Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Flat-Lay Stage with Clickable Hotspots */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden bg-[#FBF9F5] p-4 group">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <img
                  src="/images/hero-suite.jpg"
                  alt="Flat-lay luxury bespoke wedding stationery suite on limestone"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Hotspot Markers */}
                {PARTS.map((part) => {
                  const isActive = part.id === selectedPartId;
                  return (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPartId(part.id)}
                      style={{
                        left: `${part.highlightCoord.x}%`,
                        top: `${part.highlightCoord.y}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#4A1521] text-[#FBF9F5] scale-110 z-20 shadow-md ring-2 ring-[#8C7355]'
                          : 'bg-[#FBF9F5]/95 text-[#2C2623] hover:bg-[#4A1521] hover:text-[#FBF9F5] z-10 shadow-sm'
                      }`}
                      aria-label={`Inspect ${part.name}`}
                    >
                      <span className="text-sm font-serif font-bold">
                        {part.id === 'main-invitation' ? '1' : part.id === 'rsvp-envelope' ? '2' : part.id === 'details-map' ? '3' : part.id === 'silk-ribbon' ? '4' : '5'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Hotspot Legend */}
              <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#5C554F] gap-2">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#8C7355]" />
                  <span>Tap any numbered pin on the suite to deconstruct its craft</span>
                </div>
                <span>Studio Capture &middot; 45&deg; Daylight</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Architectural Specs & Selector Tabs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Part Tab Buttons */}
            <div className="flex flex-wrap gap-2 pb-2">
              {PARTS.map((part) => {
                const isActive = part.id === selectedPartId;
                return (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPartId(part.id)}
                    className={`px-3.5 py-2 rounded text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#4A1521] text-[#FBF9F5] font-semibold'
                        : 'bg-[#FBF9F5] text-[#3C3530] hover:text-[#4A1521] hover:bg-white'
                    }`}
                  >
                    {part.shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Active Part Card */}
            <div className="bg-[#FBF9F5] rounded-lg p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-semibold">
                  {activePart.name}
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#4A1521]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              {/* Technical Specifications Grid without arbitrary thin borders */}
              <div className="space-y-3.5 text-sm font-sans bg-[#F3EFEA] p-5 rounded">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#5C554F] uppercase tracking-wider text-xs font-semibold">Paper Weight</span>
                  <span className="text-[#2C2623] font-semibold text-right">{activePart.specs.weight}</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#5C554F] uppercase tracking-wider text-xs font-semibold">Cotton Origin</span>
                  <span className="text-[#2C2623] font-medium text-right">{activePart.specs.paper}</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#5C554F] uppercase tracking-wider text-xs font-semibold">Print Method</span>
                  <span className="text-[#4A1521] font-semibold text-right">{activePart.specs.print}</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#5C554F] uppercase tracking-wider text-xs font-semibold">Dimensions</span>
                  <span className="text-[#2C2623] font-medium text-right">{activePart.specs.dimensions}</span>
                </div>
              </div>

              {/* Craft Note Callout */}
              <div className="p-4 rounded bg-[#EAE4D9] space-y-1.5">
                <span className="text-xs font-sans uppercase tracking-wider text-[#4A1521] font-semibold block">
                  Artisan Print Technique
                </span>
                <p className="text-sm text-[#2C2623] leading-relaxed font-light">
                  {activePart.specs.craftNote}
                </p>
              </div>
            </div>

            {/* Archival Assurance */}
            <div className="flex items-center gap-3 text-xs text-[#5C554F] px-2">
              <ShieldCheck className="w-4 h-4 text-[#8C7355] shrink-0" />
              <span>All suites are tailored to royal envelope mail standards with certified postal-safe wax flex.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
