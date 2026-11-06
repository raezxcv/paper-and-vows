import React, { useState } from 'react';
import type { Collection, PaperOption, PrintFinishOption, FoilColorOption, RibbonOption, WaxSealOption } from '../types/stationery';
import { PAPERS } from '../data/papers';
import { PRINT_FINISHES, FOIL_COLORS, SILK_RIBBONS, WAX_SEALS } from '../data/finishes';
import { Check, Layers, Sliders, ArrowRight, User } from 'lucide-react';

interface PaperCustomizerProps {
  collection: Collection;
  onApplyToInquiry?: (customConfig: {
    collectionId: string;
    paperId: string;
    finishId: string;
    foilId: string;
    ribbonId: string;
    sealId: string;
  }) => void;
  onOpenSampleKit?: () => void;
}

export const PaperCustomizer: React.FC<PaperCustomizerProps> = ({
  collection,
  onApplyToInquiry,
  onOpenSampleKit,
}) => {
  const [selectedPaper, setSelectedPaper] = useState<PaperOption>(PAPERS[0]);
  const [selectedFinish, setSelectedFinish] = useState<PrintFinishOption>(PRINT_FINISHES[0]);
  const [selectedFoil, setSelectedFoil] = useState<FoilColorOption>(FOIL_COLORS[0]);
  const [selectedRibbon, setSelectedRibbon] = useState<RibbonOption>(SILK_RIBBONS[0]);
  const [selectedSeal, setSelectedSeal] = useState<WaxSealOption>(WAX_SEALS[0]);
  const [quantity, setQuantity] = useState<number>(100);
  const [coupleNames, setCoupleNames] = useState<string>('Eleanor & Julian');
  const [eventDate, setEventDate] = useState<string>('Saturday, the Twelfth of September');
  const [eventVenue, setEventVenue] = useState<string>('Villa Cetinale · Tuscany, Italy');

  // Compute initials for the wax seal / crest
  const computeInitials = (nameStr: string) => {
    const parts = nameStr.split('&').map((s) => s.trim());
    if (parts.length >= 2 && parts[0] && parts[1]) {
      return `${parts[0][0]} & ${parts[1][0]}`;
    }
    return nameStr.slice(0, 3).toUpperCase();
  };

  const initials = computeInitials(coupleNames);

  // Dynamic pricing calculation
  const basePrice = collection.priceFrom;
  const calculatedUnitPrice = (basePrice * selectedPaper.priceMultiplier + selectedFinish.pricePerHundred) / 100;
  const totalEstimatedPrice = Math.round(calculatedUnitPrice * quantity);

  const handleApply = () => {
    if (onApplyToInquiry) {
      onApplyToInquiry({
        collectionId: collection.id,
        paperId: selectedPaper.id,
        finishId: selectedFinish.id,
        foilId: selectedFoil.id,
        ribbonId: selectedRibbon.id,
        sealId: selectedSeal.id,
      });
    }
  };

  return (
    <div className="bg-[#F3EFEA] rounded-xl p-6 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#EAE4D9] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#8C7355] mb-2 font-medium">
            <Sliders className="w-3.5 h-3.5 text-[#4A1521]" />
            <span>Interactive Atelier Customizer</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-normal">
            Tailor Your Suite Specifications
          </h3>
          <p className="text-sm text-[#3C3530] font-light mt-1">
            Experience the interplay of heavy cotton weights, pressbite depth, and hand-finished embellishments in real time.
          </p>
        </div>

        {/* Live Cost Preview Widget */}
        <div className="bg-[#FBF9F5] rounded-lg p-5 text-right shrink-0">
          <span className="block text-xs uppercase tracking-wider text-[#5C554F] font-medium">
            Estimated Suite Investment ({quantity} Suites)
          </span>
          <div className="flex items-baseline justify-end gap-2 mt-1">
            <span className="font-serif text-3xl font-bold text-[#4A1521]">
              &pound;{totalEstimatedPrice.toLocaleString()}
            </span>
            <span className="text-xs text-[#5C554F]">(&pound;{calculatedUnitPrice.toFixed(2)}/suite)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
        
        {/* Left Column: Interactive Visual Card Simulator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sticky top-28 space-y-4">
            
            {/* Live Personalization Input */}
            <div className="bg-[#FBF9F5] p-3.5 rounded space-y-2">
              <label className="text-xs font-sans uppercase tracking-wider text-[#4A433F] font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8C7355]" />
                <span>Personalize Card Names</span>
              </label>
              <input
                type="text"
                value={coupleNames}
                onChange={(e) => setCoupleNames(e.target.value)}
                placeholder="Couple Names (e.g. Eleanor & Julian)"
                className="w-full px-3 py-1.5 bg-white border border-[#EAE4D9] rounded text-sm text-[#2C2623] focus:border-[#4A1521] focus:outline-none"
              />
            </div>

            {/* The Live Rendered Card Mockup */}
            <div
              style={{ backgroundColor: selectedPaper.colorHex }}
              className={`aspect-[3/4] rounded-lg p-8 transition-all duration-500 relative flex flex-col justify-between overflow-hidden shadow-md ${
                selectedPaper.id === 'fabriano-deckle' || selectedPaper.id === 'somerset-600'
                  ? 'border border-dashed border-[#A89F91]/50'
                  : 'border border-[#E5DDD0]'
              }`}
            >
              {/* Paper Grain Overlay */}
              <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

              {/* Silk Ribbon Accent Simulation */}
              <div
                style={{ backgroundColor: selectedRibbon.colorHex }}
                className="absolute top-0 right-10 w-8 h-28 shadow-sm transform -skew-y-3 opacity-90 border-x border-black/10"
                title={`Plant-Dyed Ribbon: ${selectedRibbon.name}`}
              >
                <div className="absolute bottom-0 left-0 right-0 h-3 border-b border-dashed border-black/20" />
              </div>

              {/* Top Card Crest / Monogram */}
              <div className="relative z-10 text-center pt-4">
                <div className="w-12 h-12 mx-auto rounded-full border border-[#8C7355]/60 flex items-center justify-center text-xs font-serif italic text-[#8C7355] mb-2 bg-white/40">
                  {initials}
                </div>
                <span className="text-xs font-sans tracking-widest uppercase text-[#5C554F] block">
                  Together With Their Families
                </span>
              </div>

              {/* Central Typographic Mockup */}
              <div className="relative z-10 text-center my-auto space-y-3">
                <p className="font-serif text-3xl sm:text-4xl text-[#2C2623] italic leading-tight">
                  {coupleNames || 'Eleanor & Julian'}
                </p>
                <p className="text-xs font-sans tracking-widest uppercase text-[#2C2623]/80 font-medium">
                  Request the Honour of Your Presence
                </p>
                
                {/* Simulated Deboss or Foil Technique */}
                <div className="py-2">
                  {selectedFinish.id === 'hot-foil' || selectedFinish.id === 'duo-press' ? (
                    <span
                      style={{ color: selectedFoil.hex }}
                      className="font-serif text-sm tracking-widest uppercase font-semibold foil-shimmer inline-block"
                    >
                      &lowast; {eventDate} &lowast;
                    </span>
                  ) : (
                    <span className="font-serif text-xs tracking-widest uppercase text-[#2C2623]/70 letterpress-deboss inline-block">
                      {eventDate}
                    </span>
                  )}
                </div>

                <p className="text-xs font-sans tracking-widest uppercase text-[#5C554F]">
                  {eventVenue}
                </p>
              </div>

              {/* Simulated Hand-Poured Wax Seal with Custom Initials */}
              <div className="relative z-10 flex items-center justify-center pb-2">
                <div
                  style={{ backgroundColor: selectedSeal.colorHex }}
                  className="w-14 h-14 rounded-full shadow-md flex items-center justify-center text-[#FBF9F5] border-2 border-white/20 transform hover:scale-105 transition-transform"
                >
                  <span className="font-serif text-xs font-bold tracking-widest">
                    {selectedSeal.id === 'monogram-crest' ? initials : selectedSeal.id === 'botanical-olive' ? '🫒' : '⚜'}
                  </span>
                </div>
              </div>

              {/* Card Meta Badge */}
              <div className="relative z-10 pt-2 border-t border-[#2C2623]/10 flex items-center justify-between text-xs text-[#5C554F]">
                <span>{selectedPaper.weight}</span>
                <span>{selectedFinish.badge}</span>
              </div>
            </div>

            {/* Quick Action under Preview */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-widest uppercase rounded hover:bg-[#6A2232] transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
              >
                <span>Save Specification to Inquiry Form</span>
                <ArrowRight className="w-4 h-4 text-[#B89F7C]" />
              </button>
              {onOpenSampleKit && (
                <button
                  onClick={onOpenSampleKit}
                  className="w-full py-3 px-4 bg-[#FBF9F5] text-[#2C2623] text-xs font-sans tracking-wider uppercase rounded hover:bg-white transition-colors cursor-pointer text-center font-medium"
                >
                  Order Physical Swatch Kit of these Materials (&pound;35)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Configuration Selectors */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 1. Paper Stock Selector */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8C7355]" />
                <span>1. Archival Paper Stock</span>
              </label>
              <span className="text-sm text-[#8C7355] font-serif italic">
                {selectedPaper.origin}
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAPERS.map((paper) => {
                const isSelected = selectedPaper.id === paper.id;
                return (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper)}
                    className={`p-4 rounded-lg text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FBF9F5] ring-2 ring-[#4A1521] shadow-xs'
                        : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#2C2623]">{paper.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#4A1521]" />}
                    </div>
                    <span className="block text-xs text-[#8C7355] font-medium mt-1">
                      {paper.weight}
                    </span>
                    <p className="text-xs text-[#5C554F] mt-1.5 leading-relaxed">
                      {paper.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Print Technique Selector */}
          <div>
            <label className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] block mb-3">
              2. Printing Technique
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRINT_FINISHES.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`p-4 rounded-lg text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FBF9F5] ring-2 ring-[#4A1521] shadow-xs'
                        : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#2C2623]">{finish.name}</span>
                      <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE4D9] text-[#4A1521] font-medium">
                        {finish.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C554F] mt-1.5 leading-relaxed">
                      {finish.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Hot Foil / Ink Accent */}
          <div>
            <label className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] block mb-3">
              3. Metallic Foil or Ink Accent
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FOIL_COLORS.map((foil) => {
                const isSelected = selectedFoil.id === foil.id;
                return (
                  <button
                    key={foil.id}
                    onClick={() => setSelectedFoil(foil)}
                    className={`p-3.5 rounded-lg text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#FBF9F5] ring-2 ring-[#4A1521]'
                        : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        style={{ backgroundColor: foil.hex }}
                        className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                      />
                      <span className="text-xs font-semibold text-[#2C2623] truncate">{foil.name}</span>
                    </div>
                    <span className="text-xs text-[#5C554F] leading-tight block">
                      {foil.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Silk Ribbon & Wax Seal Swatches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Ribbons */}
            <div>
              <label className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] block mb-2">
                4. Plant-Dyed Silk Ribbon
              </label>
              <div className="space-y-2">
                {SILK_RIBBONS.map((ribbon) => {
                  const isSelected = selectedRibbon.id === ribbon.id;
                  return (
                    <button
                      key={ribbon.id}
                      onClick={() => setSelectedRibbon(ribbon)}
                      className={`w-full p-3 rounded text-left flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#FBF9F5] ring-2 ring-[#4A1521]'
                          : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          style={{ backgroundColor: ribbon.colorHex }}
                          className="w-5 h-5 rounded-full border border-black/20"
                        />
                        <span className="text-xs font-medium text-[#2C2623]">{ribbon.name}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#4A1521]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wax Seals */}
            <div>
              <label className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] block mb-2">
                5. Hand-Poured Wax Seal
              </label>
              <div className="space-y-2">
                {WAX_SEALS.map((seal) => {
                  const isSelected = selectedSeal.id === seal.id;
                  return (
                    <button
                      key={seal.id}
                      onClick={() => setSelectedSeal(seal)}
                      className={`w-full p-3 rounded text-left flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#FBF9F5] ring-2 ring-[#4A1521]'
                          : 'bg-[#FBF9F5]/70 hover:bg-[#FBF9F5]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          style={{ backgroundColor: seal.colorHex }}
                          className="w-5 h-5 rounded-full border border-black/20"
                        />
                        <span className="text-xs font-medium text-[#2C2623]">{seal.name}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#4A1521]" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* 5. Quantity Stepper */}
          <div className="pt-6 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-sans uppercase tracking-wider font-semibold text-[#2C2623] block">
                Suite Quantity Needed
              </span>
              <span className="text-xs text-[#5C554F]">
                Standard atelier minimum: 50 suites. (We recommend +15% for keepsakes)
              </span>
            </div>

            <div className="flex items-center gap-2">
              {[50, 75, 100, 150, 200].map((qty) => (
                <button
                  key={qty}
                  onClick={() => setQuantity(qty)}
                  className={`px-3.5 py-2 rounded text-xs font-mono transition-all cursor-pointer ${
                    quantity === qty
                      ? 'bg-[#4A1521] text-[#FBF9F5] font-semibold'
                      : 'bg-[#FBF9F5] text-[#2C2623] hover:bg-white'
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
