import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
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
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 5;
        });
      }, 150);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would download the game
    alert("Your download has started! The game will be downloaded to your device shortly.");
    onClose();
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
              All games are 100% free to download and play!
            </p>
          </div>
          <div className="mb-6">
            <Progress value={progress} className="h-2 mb-4" />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Preparing files...</span>
              <span>{progress}%</span>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg mb-6 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[hsl(var(--primary-bg))] rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-[hsl(var(--neon-cyan))]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xl mb-2">Completely Free</h4>
                <p className="text-gray-300">Your game is ready to download with no fees, subscriptions, or hidden costs.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="#"
              onClick={handleDownloadClick}
              className="glow-button-cyan bg-[hsl(var(--neon-cyan))] hover:bg-blue-500 text-[hsl(var(--primary-bg))] font-bold py-3 px-6 rounded-lg shadow-[0_0_5px_rgba(0,240,255,0.8)] transition-all duration-300 block mb-4"
            >
              Download Now (Free)
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
