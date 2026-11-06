import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { StudioPage } from './pages/StudioPage';
import { SampleKitModal } from './components/SampleKitModal';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('the-florentine');
  const [isSampleKitOpen, setIsSampleKitOpen] = useState<boolean>(false);
  const [customConfig, setCustomConfig] = useState<any>(null);

  // Sync with browser hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'collections', 'detail', 'studio'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCollection = (id: string) => {
    setSelectedCollectionId(id);
    setCurrentTab('detail');
    window.location.hash = 'detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToInquiryWithConfig = (config: any) => {
    setCustomConfig(config);
    setCurrentTab('studio');
    window.location.hash = 'studio';
    setTimeout(() => {
      const formEl = document.getElementById('inquiry-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C2623] font-sans selection:bg-[#4A1521]/15 selection:text-[#4A1521]">
      {/* Primary Studio Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        onOpenSampleKit={() => setIsSampleKitOpen(true)}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCollection={handleSelectCollection}
            onOpenSampleKit={() => setIsSampleKitOpen(true)}
          />
        )}

        {currentTab === 'collections' && (
          <CollectionsPage
            onSelectCollection={handleSelectCollection}
            onOpenSampleKit={() => setIsSampleKitOpen(true)}
          />
        )}

        {currentTab === 'detail' && (
          <CollectionDetailPage
            collectionId={selectedCollectionId}
            onBackToCollections={() => handleNavigate('collections')}
            onNavigateToInquiryWithConfig={handleNavigateToInquiryWithConfig}
            onOpenSampleKit={() => setIsSampleKitOpen(true)}
            onSelectCollection={(id) => setSelectedCollectionId(id)}
          />
        )}

        {currentTab === 'studio' && (
          <StudioPage
            customConfig={customConfig}
            onOpenSampleKit={() => setIsSampleKitOpen(true)}
          />
        )}
      </main>

      {/* Primary Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSampleKit={() => setIsSampleKitOpen(true)}
      />

      {/* Global Paper Swatch Box Modal */}
      <SampleKitModal
        isOpen={isSampleKitOpen}
        onClose={() => setIsSampleKitOpen(false)}
      />
    </div>
  );
}

export default App;
