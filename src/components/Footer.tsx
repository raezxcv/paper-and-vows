import React, { useState } from 'react';
import { Mail, CheckCircle2, Award, Compass, Feather } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenSampleKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSampleKit }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#2C2623] text-[#FBF9F5] pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Col 1 & 2: Studio Identity & Heritage */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#8C7355] flex items-center justify-center text-[#FBF9F5] font-serif text-lg bg-[#4A1521]">
                &amp;
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.18em] uppercase font-semibold text-[#FBF9F5] block">
                  Paper &amp; Vows
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#A89F91] block">
                  Fine Art Wedding Stationery &middot; Atelier de Papeterie
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FBF9F5]/80 leading-relaxed font-light pr-4 max-w-md">
              We create heirloom wedding suites printed on antique 1954 Heidelberg platen presses using 100% pure cotton rag paper. Each piece is hand-torn, botanically dyed, and sealed with custom wax monograms in our Cotswolds workshop.
            </p>

            {/* Archival Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded bg-[#FBF9F5]/5 border border-[#8C7355]/40 text-xs text-[#E5DDD0]">
              <Award className="w-4 h-4 text-[#B89F7C]" />
              <span>Certified Archival: 100% Cotton Rag &middot; 300-Year Longevity</span>
            </div>
          </div>

          {/* Col 3: Studio Ateliers */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#B89F7C] font-medium pb-2">
              Our Locations
            </h4>
            <div className="space-y-4 text-sm text-[#FBF9F5]/90 leading-relaxed font-light">
              <div>
                <strong className="block text-[#FBF9F5] uppercase tracking-wider font-medium text-xs">
                  Cotswolds Print Atelier
                </strong>
                <p className="text-[#D6CEBE]">The Old Mill, Sheep Street</p>
                <p className="text-[#D6CEBE]">Chipping Campden, GL55 6HB</p>
                <p className="text-[#B89F7C] text-xs mt-1">Press visits by appointment</p>
              </div>

              <div>
                <strong className="block text-[#FBF9F5] uppercase tracking-wider font-medium text-xs">
                  London Private Showroom
                </strong>
                <p className="text-[#D6CEBE]">14 Berkeley Square, Mayfair</p>
                <p className="text-[#D6CEBE]">London, W1J 6BL</p>
                <p className="text-[#B89F7C] text-xs mt-1">Bespoke consultation salon</p>
              </div>
            </div>
          </div>

          {/* Col 4: Navigation & Curation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#B89F7C] font-medium pb-2">
              The Archives
            </h4>
            <ul className="space-y-3 text-sm text-[#FBF9F5]/90 tracking-wider font-light">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#B89F7C] transition-colors cursor-pointer"
                >
                  The Atelier Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#B89F7C] transition-colors cursor-pointer"
                >
                  The Six Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('detail')}
                  className="hover:text-[#B89F7C] transition-colors cursor-pointer"
                >
                  Paper &amp; Finish Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-[#B89F7C] transition-colors cursor-pointer"
                >
                  Bespoke Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSampleKit}
                  className="text-[#B89F7C] hover:text-[#FBF9F5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Order Sample Box</span>
                  <Feather className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Editorial Gazette & Dispatch */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#B89F7C] font-medium pb-2">
              The Paper Journal
            </h4>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Seasonal notes on cotton harvests, historical typography specimens, and wedding etiquette dispatches.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#4A1521]/40 border border-[#8C7355] rounded text-xs text-[#FBF9F5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89F7C]" />
                <span>You are subscribed to The Paper Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F5]/5 border border-[#8C7355]/50 rounded text-xs text-[#FBF9F5] placeholder-[#A89F91] focus:outline-none focus:border-[#B89F7C] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#4A1521] text-[#FBF9F5] rounded text-xs hover:bg-[#6A2232] transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="block text-[10px] text-[#A89F91]">
                  Dispatched twice monthly. Never unsolicited.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89F91] gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#8C7355]" />
            <span>&copy; {new Date().getFullYear()} Paper &amp; Vows Ltd. All rights reserved. Registered in England &amp; Wales.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>Heidelberg 1954 Letterpress</span>
            <span>&middot;</span>
            <span>100% Recycled Cotton Linters</span>
            <span>&middot;</span>
            <span>Bespoke Wax Alchemy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
