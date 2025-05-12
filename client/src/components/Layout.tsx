import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DownloadModal from "./DownloadModal";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create a context to share download modal state across components
  useEffect(() => {
    // Expose download modal open function to window for global access
    window.openDownloadModal = () => setIsDownloadModalOpen(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className={`flex-grow transition-all duration-300 ${isMobileMenuOpen ? 'opacity-30 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {children}
      </main>
      <Footer />
      
      {/* Modals */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </div>
  );
}

// Declare global window interface extension
declare global {
  interface Window {
    openDownloadModal: () => void;
  }
}
