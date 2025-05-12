import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className="py-4 px-6 md:px-12 relative z-10 border-b border-gray-800">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold font-rajdhani text-white mr-2">Game<span className="text-[hsl(var(--neon-cyan))]">Vault</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Home</Link>
            <Link href="/games" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Games</Link>
            <a href="#how-it-works" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">How It Works</a>
            <a href="#faq" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">FAQ</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none h-10 w-10 flex items-center justify-center rounded-md bg-[hsla(var(--neon-cyan),0.1)] border border-[hsla(var(--neon-cyan),0.3)] hover:bg-[hsla(var(--neon-cyan),0.2)] transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="h-6 w-6 text-[hsl(var(--neon-cyan))]" />
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu - Positioned fixed to overlay the entire page with solid background */}
        <div 
          className={`md:hidden fixed left-0 right-0 top-0 bottom-0 bg-[hsl(var(--primary-bg))] z-[9999] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="w-full h-full flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center">
                <span className="text-2xl font-bold font-rajdhani text-white">Game<span className="text-[hsl(var(--neon-cyan))]">Vault</span></span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[hsl(var(--neon-cyan))] focus:outline-none h-10 w-10 flex items-center justify-center rounded-md bg-[hsla(var(--neon-cyan),0.1)] border border-[hsla(var(--neon-cyan),0.3)] hover:bg-[hsla(var(--neon-cyan),0.2)] transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Menu Links */}
            <div className="flex-grow py-10 px-6">
              <div className="flex flex-col space-y-8">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-white text-2xl font-rajdhani font-semibold hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300 border-b border-gray-800 pb-3"
                >
                  Home
                </Link>
                <Link 
                  href="/games" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-white text-2xl font-rajdhani font-semibold hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300 border-b border-gray-800 pb-3"
                >
                  Games
                </Link>
                <a 
                  href="#how-it-works" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-white text-2xl font-rajdhani font-semibold hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300 border-b border-gray-800 pb-3"
                >
                  How It Works
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-white text-2xl font-rajdhani font-semibold hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300 border-b border-gray-800 pb-3"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
