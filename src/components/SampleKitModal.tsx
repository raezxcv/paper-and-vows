import React, { useState } from 'react';
import { X, CheckCircle, Package } from 'lucide-react';
import { COLLECTIONS } from '../data/collections';

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [selectedSuites, setSelectedSuites] = useState<string[]>(['the-florentine', 'botanique-provence']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleSuite = (id: string) => {
    if (selectedSuites.includes(id)) {
      if (selectedSuites.length > 1) {
        setSelectedSuites(selectedSuites.filter((s) => s !== id));
      }
    } else {
      if (selectedSuites.length < 3) {
        setSelectedSuites([...selectedSuites, id]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2623]/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F5] rounded-xl border border-[#E5DDD0] shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[#A89F91] hover:text-[#4A1521] transition-colors rounded-full hover:bg-[#F3EFEA]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#4A1521]/10 text-[#4A1521] flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#2C2623] font-semibold">
              Your Sample Box is Reserved
            </h3>
            <p className="text-sm text-[#2C2623]/80 leading-relaxed font-light max-w-md mx-auto">
              Thank you, <strong className="font-medium text-[#2C2623]">{fullName}</strong>. We are hand-assembling your tactile swatch folio with Somerset cotton rag, wax seal specimens, and your chosen collection cards.
            </p>
            <div className="p-4 bg-[#F3EFEA] border border-[#8C7355]/30 rounded-lg text-xs text-left max-w-sm mx-auto space-y-1.5 text-[#2C2623]/80">
              <div className="flex justify-between">
                <span className="text-[#A89F91]">Dispatch Reference:</span>
                <span className="font-mono font-medium text-[#4A1521]">PV-BOX-2026-89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]">Shipping Method:</span>
                <span>Royal Mail 24 Tracked</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]">Deposit Credited:</span>
                <span className="text-[#8C7355] font-semibold">&pound;35 Credit Applied</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.15em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer"
            >
              Return to Studio
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFEA] border border-[#8C7355]/30 text-xs font-sans tracking-[0.2em] uppercase text-[#8C7355] w-fit mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Tactile Paper Kit</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2623] font-semibold">
              The Curated Sample Box
            </h3>
            <p className="text-xs sm:text-sm text-[#2C2623]/70 font-light mt-1">
              Hold the 600gsm cotton rag in your hands, feel the deep letterpress indentation, and explore botanical wax seals. The &pound;35 fee is fully credited to your bespoke suite.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                    Your Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor & Julian"
                    className="w-full px-3 py-2 bg-white border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:border-[#4A1521] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 bg-white border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:border-[#4A1521] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Delivery Postal Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, Postal Code, Country"
                  className="w-full px-3 py-2 bg-white border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:border-[#4A1521] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1.5 font-medium">
                  Choose up to 2 Specific Collection Cards to Include:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {COLLECTIONS.map((c) => {
                    const isSelected = selectedSuites.includes(c.id);
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => toggleSuite(c.id)}
                        className={`p-2 rounded text-left border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#4A1521] text-[#FBF9F5] border-[#4A1521]'
                            : 'bg-white text-[#2C2623] border-[#E5DDD0] hover:border-[#8C7355]'
                        }`}
                      >
                        <span className="block font-serif font-medium">{c.title}</span>
                        <span className="text-[10px] opacity-70 block">{c.paperWeight}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-sans tracking-wider uppercase text-[#2C2623] mb-1 font-medium">
                  Approximate Wedding Date (Optional)
                </label>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5DDD0] rounded text-xs text-[#2C2623] focus:border-[#4A1521] focus:outline-none"
                />
              </div>

              {/* Order Summary & Deposit Guarantee */}
              <div className="p-3.5 bg-[#F3EFEA] rounded-lg border border-[#8C7355]/30 space-y-1 text-xs">
                <div className="flex justify-between items-center text-[#2C2623]">
                  <span>Curated Sample Box &amp; Material Folio:</span>
                  <span className="font-semibold">&pound;35.00</span>
                </div>
                <div className="flex justify-between items-center text-[#A89F91]">
                  <span>Royal Mail Tracked Delivery:</span>
                  <span>Complimentary</span>
                </div>
                <p className="text-[10px] text-[#8C7355] pt-1">
                  &lowast; 100% of this &pound;35 fee is automatically credited to your final bespoke suite invoice.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A1521] text-[#FBF9F5] text-xs font-sans tracking-[0.18em] uppercase rounded hover:bg-[#6A2232] transition-colors cursor-pointer shadow-md font-medium"
              >
                Dispatch Sample Kit (&pound;35 Deposit)
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
