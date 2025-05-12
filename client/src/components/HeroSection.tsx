import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";

export default function HeroSection() {
  return (
    <section className="relative bg-[hsl(var(--primary-bg))] py-20 md:py-32 overflow-hidden" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-bg))] via-[hsla(var(--primary-bg),0.95)] to-[hsl(var(--primary-bg))] before:bg-black/60 before:absolute before:inset-0"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-rajdhani mb-6 leading-tight">
            <span className="block text-white">Download the Latest</span>
            <span className="text-[hsl(var(--neon-cyan))] text-shadow-neon">Free Games</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Get instant access to hundreds of high-quality games without spending a penny. New titles added weekly!
          </p>
          <a href="/games" className="glow-button-cyan bg-[hsl(var(--neon-cyan))] hover:bg-blue-500 text-[hsl(var(--primary-bg))] font-bold py-4 px-10 rounded-full text-lg md:text-xl shadow-[0_0_5px_rgba(0,240,255,0.8)] animate-[pulse_3s_ease-in-out_infinite] transition-all duration-300">
            Browse Games
          </a>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="flex space-x-8 items-center">
              <div className="text-center">
                <span className="block text-4xl font-bold text-white mb-1">500+</span>
                <span className="text-gray-400">Games</span>
              </div>
              <Divider orientation="vertical" className="h-12" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-white mb-1">10M+</span>
                <span className="text-gray-400">Downloads</span>
              </div>
              <Divider orientation="vertical" className="h-12" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-white mb-1">100%</span>
                <span className="text-gray-400">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
