import { Link } from "wouter";
import { Star, StarHalf } from "lucide-react";
import { games } from "@/lib/data";

export default function GamesSection() {
  // Function to handle download button click
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Access the global function we defined in Layout.tsx
    window.openDownloadModal();
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <section id="games" className="py-20 bg-[hsl(var(--primary-bg))]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6">
            <span className="text-white">Popular </span>
            <span className="text-[hsl(var(--neon-magenta))] text-shadow-magenta">Games</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our collection of premium games, available completely free of charge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game) => (
            <div key={game.id} className="game-card bg-[hsl(var(--secondary-bg))] rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={`${game.title} game thumbnail`} 
                  className="w-full h-48 object-cover object-center"
                  loading="lazy"
                />
                <div 
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium
                    ${game.category === 'Action' || game.category === 'Horror' || game.category === 'Racing' || game.category === 'Simulation' ? 
                      'bg-[hsl(var(--neon-purple))] text-white' : 
                      'bg-[hsl(var(--neon-cyan))] text-[hsl(var(--primary-bg))]'
                    }`}
                >
                  {game.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-rajdhani mb-2">{game.title}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {renderStars(game.rating)}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{game.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {game.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[hsl(var(--neon-cyan))] font-semibold">{game.size} GB</span>
                  <button 
                    onClick={handleDownloadClick}
                    className="glow-button-magenta bg-[hsl(var(--neon-magenta))] hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-[0_0_5px_rgba(255,0,229,0.8)] transition-all duration-300"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/games" className="glow-button-cyan inline-block bg-transparent border-2 border-[hsl(var(--neon-cyan))] hover:bg-[hsl(var(--neon-cyan))] hover:text-[hsl(var(--primary-bg))] text-[hsl(var(--neon-cyan))] font-bold py-3 px-10 rounded-full transition-all duration-300">
            View All Games
          </Link>
        </div>
      </div>
    </section>
  );
}
