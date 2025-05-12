import { X } from "lucide-react";

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitPopup({ isOpen, onClose }: ExitPopupProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="bg-[hsl(var(--secondary-bg))] rounded-xl p-8 max-w-md relative border-2 border-[hsl(var(--neon-magenta))] shadow-[0_0_15px_rgba(255,0,229,0.8)]">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">
              <span className="text-[hsl(var(--neon-magenta))] text-shadow-magenta">Wait!</span> Don't Leave Yet!
            </h3>
            <p className="text-gray-300 mb-4">
              We've got an exclusive deal just for you!
            </p>
          </div>
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
              alt="Special offer" 
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold mb-4 text-[hsl(var(--neon-cyan))]">
              Get Premium Access to ALL Games!
            </p>
            <button 
              onClick={onClose}
              className="glow-button-magenta bg-[hsl(var(--neon-magenta))] hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-[0_0_5px_rgba(255,0,229,0.8)] transition-all duration-300 w-full"
            >
              Unlock Premium Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
