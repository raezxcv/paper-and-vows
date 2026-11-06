import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenSampleKit: () => void;
  onSelectCollection?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSampleKit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'The Studio' },
    { id: 'collections', label: 'Collections' },
    { id: 'detail', label: 'Suite Customizer' },
    { id: 'studio', label: 'Craft & Inquiries' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <aside aria-label="Studio Notice" className="bg-[#2C2623] text-[#FBF9F5] text-xs py-2.5 px-4 text-center font-sans flex items-center justify-center gap-3">
        <span>Reserving 2026/2027 Wedding Suites &middot; Heidelberg Press in Cotswolds &amp; London</span>
        <button
          onClick={onOpenSampleKit}
          className="underline hover:text-[#B89F7C] transition-colors ml-3 hidden sm:inline-block cursor-pointer font-medium"
        >
          Request Swatch Box (&pound;35)
        </button>
      </aside>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/98 backdrop-blur-md shadow-xs py-4'
            : 'bg-[#FBF9F5] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <button
            onClick={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4A1521] text-[#FBF9F5] flex items-center justify-center font-serif text-base">
                &amp;
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.15em] uppercase font-semibold text-[#2C2623] block leading-none">
                  Paper &amp; Vows
                </span>
                <span className="font-sans text-xs text-[#5C554F] block mt-1 font-medium">
                  Bespoke Print Atelier &middot; Est. 2018
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-medium text-[#2C2623]">
            {navItems.map((item) => {
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-all duration-200 relative py-1 cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'text-[#4A1521] font-semibold'
                      : 'hover:text-[#4A1521] text-[#3C3530]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1521]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Hidden on smaller screens to ensure comfortable margins */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSampleKit}
              className="px-4 py-2 text-xs font-sans text-[#2C2623] bg-[#F3EFEA] rounded hover:bg-[#EAE4D9] transition-all cursor-pointer font-medium"
            >
              <span>Sample Box</span>
            </button>
            <button
              onClick={() => {
                setCurrentTab('studio');
                setTimeout(() => {
                  const formEl = document.getElementById('inquiry-section');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hidden lg:inline-flex px-5 py-2 text-xs font-sans bg-[#4A1521] text-[#FBF9F5] rounded hover:bg-[#6A2232] transition-all cursor-pointer font-medium"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button for Tablet & Phone */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C2623] hover:text-[#4A1521] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C2623]/60 backdrop-blur-sm lg:hidden animate-fade-in flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#FBF9F5] h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE4D9]">
                <div>
                  <span className="font-serif text-2xl tracking-[0.15em] uppercase font-semibold text-[#2C2623]">
                    Paper &amp; Vows
                  </span>
                  <span className="block text-xs text-[#5C554F] mt-1">
                    Bespoke Print Atelier
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#2C2623] hover:text-[#4A1521]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentTab(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center justify-between py-3 text-base text-left transition-colors ${
                      currentTab === item.id
                        ? 'text-[#4A1521] font-semibold pl-2 border-l-2 border-[#4A1521]'
                        : 'text-[#3C3530] hover:text-[#4A1521]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#8C7355]" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EAE4D9] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleKit();
                }}
                className="w-full py-3 text-xs bg-[#F3EFEA] text-[#2C2623] rounded text-center font-medium"
              >
                Order Paper Swatch Box (&pound;35)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCurrentTab('studio');
                  setTimeout(() => {
                    const formEl = document.getElementById('inquiry-section');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-3 text-xs bg-[#4A1521] text-[#FBF9F5] rounded text-center font-medium"
              >
                Book Bespoke Consultation
              </button>
              <p className="text-xs text-center text-[#5C554F] mt-2">
                Cotswolds &amp; London &middot; Mon&ndash;Fri by Appointment
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
