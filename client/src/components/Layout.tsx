import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ExitPopup from "./ExitPopup";
import DownloadModal from "./DownloadModal";
import { useExitIntent } from "@/hooks/use-exit-intent";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  // Create a context to share download modal state across components
  useEffect(() => {
    // Expose download modal open function to window for global access
    window.openDownloadModal = () => setIsDownloadModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Modals */}
      <ExitPopup 
        isOpen={showExitPopup} 
        onClose={() => setShowExitPopup(false)} 
      />
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
