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
            <a href="#games" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Games</a>
            <a href="#how-it-works" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">How It Works</a>
            <a href="#faq" className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">FAQ</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-[hsl(var(--secondary-bg))] absolute top-full left-0 w-full z-20 border-b border-gray-800 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Home</Link>
              <a href="#games" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Games</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">How It Works</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
