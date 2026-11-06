import React, { useState } from 'react';
import type { InquiryFormData } from '../types/stationery';
import { COLLECTIONS } from '../data/collections';
import { PAPERS } from '../data/papers';
import { PRINT_FINISHES, WAX_SEALS } from '../data/finishes';
import { Check, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface InquiryFormProps {
  initialCollectionId?: string;
  initialPaperId?: string;
  initialFinishId?: string;
  initialFoilId?: string;
  initialRibbonId?: string;
  initialSealId?: string;
}

const SUITE_PIECES_OPTIONS = [
  { id: 'main-invitation', label: 'Main Formal Invitation Card' },
  { id: 'rsvp-envelope', label: 'RSVP Card & Return Envelope' },
  { id: 'details-itinerary', label: 'Weekend Details & Travel Itinerary' },
  { id: 'illustrated-map', label: 'Hand-Drawn & Letterpressed Estate Map' },
  { id: 'silk-ribbon', label: 'Botanical Plant-Dyed Silk Ribbon' },
  { id: 'wax-seal', label: 'Hand-Poured Wax Seal with Custom Crest' },
  { id: 'vow-books', label: 'Silk-Stitched Keepsake Vow Booklets (Pair)' },
  { id: 'reception-menus', label: 'Day-of Reception Dinner Menus' },
  { id: 'placecards', label: 'Calligraphed Deckle-Edge Place Cards' },
];

const BUDGET_TIERS = [
  { id: 'tier-1', label: '&pound;1,500 &ndash; &pound;2,500', desc: 'Core 4-piece letterpress suite for 50&ndash;80 guests' },
  { id: 'tier-2', label: '&pound;2,500 &ndash; &pound;4,500', desc: 'Comprehensive multi-piece suite with foil, wax seals & ribbons' },
  { id: 'tier-3', label: '&pound;4,500 &ndash; &pound;7,500', desc: 'Full bespoke heirloom suite + day-of menus, vow books & programs' },
  { id: 'tier-4', label: '&pound;7,500+', desc: 'Master bespoke archival commission with hand-painted gold bevels' },
];

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialCollectionId = 'the-florentine',
  initialPaperId = 'somerset-600',
  initialFinishId = 'letterpress-charcoal',
  initialFoilId = 'champagne-gold',
  initialRibbonId = 'alabaster',
  initialSealId = 'monogram-crest',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    coupleNames: '',
    email: '',
    phone: '',
    eventDate: '',
    venueLocation: '',
    guestCount: 120,
    suiteQuantity: 80,
    selectedCollectionId: initialCollectionId,
    suitePieces: ['main-invitation', 'rsvp-envelope', 'details-itinerary', 'wax-seal'],
    paperStockId: initialPaperId,
    printMethodId: initialFinishId,
    foilColorId: initialFoilId,
    ribbonId: initialRibbonId,
    waxSealId: initialSealId,
    budgetTier: 'tier-2',
    specialVision: '',
    requestSampleKit: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState('');

  const togglePiece = (pieceId: string) => {
    setFormData((prev) => {
      const exists = prev.suitePieces.includes(pieceId);
      if (exists) {
        if (prev.suitePieces.length <= 1) return prev; // Keep at least one
        return { ...prev, suitePieces: prev.suitePieces.filter((p) => p !== pieceId) };
      } else {
        return { ...prev, suitePieces: [...prev.suitePieces, pieceId] };
      }
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.coupleNames.trim()) errs.coupleNames = 'Please provide the couple’s names.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address for your design proof.';
    }
    if (!formData.eventDate) errs.eventDate = 'Please select your wedding date or approximate month.';
    if (!formData.venueLocation.trim()) errs.venueLocation = 'Please share your wedding venue, city, or region.';
    if (formData.suitePieces.length === 0) errs.suitePieces = 'Please select at least one suite component.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const randomRef = 'PV-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionReference(randomRef);
      setSubmitted(true);
    }
  };

  const selectedCol = COLLECTIONS.find((c) => c.id === formData.selectedCollectionId) || COLLECTIONS[0];
  const selectedPap = PAPERS.find((p) => p.id === formData.paperStockId) || PAPERS[0];
  const selectedFin = PRINT_FINISHES.find((f) => f.id === formData.printMethodId) || PRINT_FINISHES[0];

  return (
    <div id="inquiry-section" className="bg-[#FBF9F5] rounded-xl border border-[#E5DDD0] shadow-xl p-6 sm:p-10">
      {submitted ? (
        <div className="py-12 px-4 max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#4A1521] text-[#FBF9F5] flex items-center justify-center shadow-lg border-4 border-[#F3EFEA]">
            <CheckCircle2 className="w-10 h-10 text-[#B89F7C]" />
          </div>

          <span className="inline-block text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] font-semibold">
            Bespoke Commission Received
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-semibold">
            Thank you, {formData.coupleNames}
          </h3>

          <p className="text-sm sm:text-base text-[#2C2623]/80 leading-relaxed font-light">
            Your inquiry for the <strong className="font-serif italic text-[#4A1521]">{selectedCol.title}</strong> suite has been registered in our Cotswolds press schedule. Our creative director and master printer will review your vision and reply with a tailored quote within 24 business hours.
          </p>

          {/* Dossier Summary Card */}
          <div className="bg-[#F3EFEA] border border-[#8C7355]/30 rounded-lg p-6 text-left text-xs space-y-3 max-w-md mx-auto shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b border-[#E5DDD0]">
              <span className="text-[#A89F91] uppercase tracking-wider">Atelier Reference</span>
              <span className="font-mono font-bold text-[#4A1521] text-sm">{submissionReference}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A89F91]">Celebration Date:</span>
              <span className="font-medium text-[#2C2623]">{formData.eventDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A89F91]">Location:</span>
              <span className="font-medium text-[#2C2623]">{formData.venueLocation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A89F91]">Suite Quantity:</span>
              <span className="font-medium text-[#2C2623]">{formData.suiteQuantity} Suites ({formData.guestCount} Guests)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A89F91]">Chosen Paper:</span>
              <span className="font-medium text-[#2C2623]">{selectedPap.name} ({selectedPap.weight})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#A89F91]">Print Technique:</span>
              <span className="font-medium text-[#2C2623]">{selectedFin.name}</span>
            </div>
            <div className="pt-2 border-t border-[#E5DDD0] text-[11px] text-[#8C7355]">
              &lowast; A copy of your specifications and next steps has been dispatched to {formData.email}.
            </div>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.15em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer"
          >
            Submit Another Inquiry or Edit Details
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFEA] border border-[#8C7355]/30 text-xs font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Bespoke Commission Dossier</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2623] font-semibold">
              Begin Your Paper Collaboration
            </h3>
            <p className="text-xs sm:text-sm text-[#2C2623]/70 font-light mt-1">
              Please share the details of your wedding celebration. We limit our press capacity to 4 bespoke suites per month to preserve absolute precision.
            </p>
          </div>

          {/* Section 1: Couple & Celebration */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-[#4A1521] font-bold border-b border-[#E5DDD0] pb-2 flex items-center gap-2">
              <span>01. The Couple &amp; Celebration</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Couple's Full Names *
                </label>
                <input
                  type="text"
                  value={formData.coupleNames}
                  onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                  placeholder="e.g. Eleanor Vance &amp; Julian Sterling"
                  className={`w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521] transition-colors ${
                    errors.coupleNames ? 'border-red-500' : 'border-[#E5DDD0]'
                  }`}
                />
                {errors.coupleNames && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.coupleNames}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Email Address for Digital Proofs *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="eleanor@example.com"
                  className={`w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521] transition-colors ${
                    errors.email ? 'border-red-500' : 'border-[#E5DDD0]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7911 123456"
                  className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Wedding Date *
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521] ${
                    errors.eventDate ? 'border-red-500' : 'border-[#E5DDD0]'
                  }`}
                />
                {errors.eventDate && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.eventDate}</span>
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Venue &amp; Destination *
                </label>
                <input
                  type="text"
                  value={formData.venueLocation}
                  onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                  placeholder="e.g. Villa Cetinale, Tuscany, Italy or Cornwell Manor, Cotswolds, UK"
                  className={`w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521] ${
                    errors.venueLocation ? 'border-red-500' : 'border-[#E5DDD0]'
                  }`}
                />
                {errors.venueLocation && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.venueLocation}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Estimated Guest Count: <span className="text-[#4A1521] font-semibold">{formData.guestCount} guests</span>
                </label>
                <input
                  type="range"
                  min="30"
                  max="350"
                  step="10"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full accent-[#4A1521]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Suites Required: <span className="text-[#4A1521] font-semibold">{formData.suiteQuantity} suites</span>
                </label>
                <input
                  type="range"
                  min="30"
                  max="250"
                  step="5"
                  value={formData.suiteQuantity}
                  onChange={(e) => setFormData({ ...formData, suiteQuantity: Number(e.target.value) })}
                  className="w-full accent-[#4A1521]"
                />
                <span className="text-[10px] text-[#A89F91]">
                  (Usually 1 suite per couple/household + 15 keepsakes)
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Collection & Materiality */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-[#4A1521] font-bold border-b border-[#E5DDD0] pb-2">
              02. Selected Collection &amp; Materials
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Preferred Studio Collection
                </label>
                <select
                  value={formData.selectedCollectionId}
                  onChange={(e) => setFormData({ ...formData, selectedCollectionId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
                >
                  {COLLECTIONS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} &mdash; {c.subtitle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Archival Paper Stock
                </label>
                <select
                  value={formData.paperStockId}
                  onChange={(e) => setFormData({ ...formData, paperStockId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
                >
                  {PAPERS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.weight})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Primary Print Technique
                </label>
                <select
                  value={formData.printMethodId}
                  onChange={(e) => setFormData({ ...formData, printMethodId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
                >
                  {PRINT_FINISHES.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Wax Seal Motif
                </label>
                <select
                  value={formData.waxSealId}
                  onChange={(e) => setFormData({ ...formData, waxSealId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
                >
                  {WAX_SEALS.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name} ({w.motif})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Suite Components Checklist */}
            <div className="pt-2">
              <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-2 font-medium">
                Desired Suite Components (Select all that apply) *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {SUITE_PIECES_OPTIONS.map((piece) => {
                  const isChecked = formData.suitePieces.includes(piece.id);
                  return (
                    <button
                      type="button"
                      key={piece.id}
                      onClick={() => togglePiece(piece.id)}
                      className={`p-2.5 rounded text-left border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                        isChecked
                          ? 'bg-[#F3EFEA] border-[#4A1521] text-[#2C2623]'
                          : 'bg-white border-[#E5DDD0] text-[#2C2623]/70 hover:border-[#8C7355]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#4A1521] border-[#4A1521] text-[#FBF9F5]' : 'border-[#A89F91]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className="leading-snug">{piece.label}</span>
                    </button>
                  );
                })}
              </div>
              {errors.suitePieces && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.suitePieces}</span>
                </p>
              )}
            </div>
          </div>

          {/* Section 3: Investment Tier & Vision */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-[#4A1521] font-bold border-b border-[#E5DDD0] pb-2">
              03. Investment Guidance &amp; Vision
            </h4>

            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-2 font-medium">
                Anticipated Stationery Investment Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUDGET_TIERS.map((tier) => {
                  const isSelected = formData.budgetTier === tier.id;
                  return (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setFormData({ ...formData, budgetTier: tier.id })}
                      className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#F3EFEA] border-[#4A1521] ring-1 ring-[#4A1521]'
                          : 'bg-white border-[#E5DDD0] hover:border-[#8C7355]'
                      }`}
                    >
                      <span
                        className="font-serif text-sm font-semibold text-[#2C2623] block"
                        dangerouslySetInnerHTML={{ __html: tier.label }}
                      />
                      <span
                        className="text-[11px] text-[#A89F91] mt-0.5 block"
                        dangerouslySetInnerHTML={{ __html: tier.desc }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                Tell Us About Your Celebration, Aesthetic Vision, or Custom Monograms
              </label>
              <textarea
                rows={3}
                value={formData.specialVision}
                onChange={(e) => setFormData({ ...formData, specialVision: e.target.value })}
                placeholder="Share any details about your floral choices, architectural venue history, color moods, or whether you desire a custom hand-drawn crest or estate map..."
                className="w-full px-3.5 py-2.5 bg-[#F3EFEA]/50 border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:outline-none focus:border-[#4A1521]"
              />
            </div>

            {/* Checkbox for Sample Kit */}
            <div className="p-4 bg-[#F3EFEA] border border-[#8C7355]/40 rounded-lg flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="req-sample-box"
                checked={formData.requestSampleKit}
                onChange={(e) => setFormData({ ...formData, requestSampleKit: e.target.checked })}
                className="mt-0.5 accent-[#4A1521] w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="req-sample-box" className="text-xs text-[#2C2623] cursor-pointer">
                <span className="font-semibold block">Also dispatch the &pound;35 Curated Paper Sample Box</span>
                <span className="text-[#A89F91] block mt-0.5">
                  Receive physical swatches of 600gsm Somerset rag, blind deboss, and wax seals before our design consultation. (Credited to your order).
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-[#A89F91]">
              &lowast; Confidential atelier consultation. We never share wedding schedules.
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.2em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2 font-medium"
            >
              <Send className="w-4 h-4 text-[#B89F7C]" />
              <span>Submit Bespoke Commission Inquiry</span>
            </button>
          </div>

        </form>
      )}
    </div>
  );
};
