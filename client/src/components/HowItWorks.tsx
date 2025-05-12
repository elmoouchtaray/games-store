import { Search, UnlockKeyhole, Gamepad2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[hsl(var(--secondary-bg))]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6">
            <span className="text-white">How It </span>
            <span className="text-[hsl(var(--neon-purple))] text-shadow-purple">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting your favorite games is quick and easy – just follow these simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[hsl(var(--primary-bg))] rounded-xl p-8 text-center border border-gray-800 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--neon-cyan))] text-[hsl(var(--primary-bg))] h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
            <div className="h-16 flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-[hsl(var(--neon-cyan))]" />
            </div>
            <h3 className="text-xl font-bold font-rajdhani mb-4">Browse Games</h3>
            <p className="text-gray-400">
              Explore our extensive collection of games across various genres and find your next favorite title.
            </p>
          </div>
          
          <div className="bg-[hsl(var(--primary-bg))] rounded-xl p-8 text-center border border-gray-800 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--neon-magenta))] text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
            <div className="h-16 flex items-center justify-center mb-6">
              <UnlockKeyhole className="w-10 h-10 text-[hsl(var(--neon-magenta))]" />
            </div>
            <h3 className="text-xl font-bold font-rajdhani mb-4">Unlock Content</h3>
            <p className="text-gray-400">
              Complete a quick verification process to unlock your chosen game for download.
            </p>
          </div>
          
          <div className="bg-[hsl(var(--primary-bg))] rounded-xl p-8 text-center border border-gray-800 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--neon-purple))] text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
            <div className="h-16 flex items-center justify-center mb-6">
              <Gamepad2 className="w-10 h-10 text-[hsl(var(--neon-purple))]" />
            </div>
            <h3 className="text-xl font-bold font-rajdhani mb-4">Play & Enjoy</h3>
            <p className="text-gray-400">
              Download your game, install it on your PC, and start playing immediately with no restrictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
