import { useState, useEffect } from "react";
import { X, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 75) {
            clearInterval(timer);
            return 75;
          }
          return prevProgress + 5;
        });
      }, 200);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  const handleUnlockClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to a CPA offer
    window.open('https://example.com/cpa-offer', '_blank');
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="bg-[hsl(var(--secondary-bg))] rounded-xl p-8 max-w-md w-full relative border border-[hsl(var(--neon-cyan))] shadow-[0_0_15px_rgba(0,240,255,0.8)]">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">
              Your Download is <span className="text-[hsl(var(--neon-cyan))] text-shadow-neon">Ready!</span>
            </h3>
            <p className="text-gray-300">
              Complete one quick offer to unlock your download
            </p>
          </div>
          <div className="mb-6">
            <Progress value={progress} className="h-2 mb-4" />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Preparing files...</span>
              <span>{progress}%</span>
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg mb-6 border border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[hsl(var(--primary-bg))] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Lock className="h-6 w-6 text-[hsl(var(--neon-cyan))]" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Verification Required</h4>
                <p className="text-sm text-gray-400">Please complete a quick verification to continue. This helps us maintain our free service.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="#"
              onClick={handleUnlockClick}
              className="glow-button-cyan bg-[hsl(var(--neon-cyan))] hover:bg-blue-500 text-[hsl(var(--primary-bg))] font-bold py-3 px-6 rounded-lg shadow-[0_0_5px_rgba(0,240,255,0.8)] transition-all duration-300 block mb-4"
            >
              Unlock Your Download Now
            </a>
            <p className="text-xs text-gray-500">
              By clicking above, you agree to our <a href="#" className="text-[hsl(var(--neon-cyan))]">Terms of Service</a> and <a href="#" className="text-[hsl(var(--neon-cyan))]">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
