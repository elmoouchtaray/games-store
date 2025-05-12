import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Twitch
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--secondary-bg))] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-rajdhani text-white">Game<span className="text-[hsl(var(--neon-cyan))]">Vault</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your destination for free high-quality games. New titles added weekly!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">
                <Twitch size={18} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold font-rajdhani mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Home</Link></li>
              <li><a href="#games" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Games</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">How It Works</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold font-rajdhani mb-6">Game Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Action</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">RPG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Racing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Horror</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold font-rajdhani mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">DMCA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} GameVault. All rights reserved. All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
