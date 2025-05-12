import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { games } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, StarHalf, Download, Clock, HardDrive, Cpu, MemoryStick } from "lucide-react";

export default function GameDetails() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  
  const game = games.find(g => g.id === parseInt(id));
  
  useEffect(() => {
    if (!game) {
      setLocation("/");
      return;
    }
    
    // Set page title
    document.title = `${game.title} - GameVault`;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `Download ${game.title} for free. ${game.description}`);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = `Download ${game.title} for free. ${game.description}`;
      document.head.appendChild(meta);
    }
    
    // Update OG tags
    const ogTags = [
      { property: "og:title", content: `${game.title} - GameVault` },
      { property: "og:description", content: game.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];
    
    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute("property", tag.property);
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);
      }
    });
  }, [game, id, setLocation]);
  
  if (!game) return null;
  
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
  
  // Handle download button click
  const handleDownloadClick = () => {
    window.openDownloadModal();
  };
  
  return (
    <div className="bg-[hsl(var(--primary-bg))] py-12">
      <div className="container mx-auto px-4">
        <Button 
          variant="outline" 
          className="mb-8 flex items-center gap-2"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft size={16} />
          Back to Games
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Image and Download Section */}
          <div className="lg:col-span-1">
            <Card className="bg-[hsl(var(--secondary-bg))] border-gray-800 overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-[hsl(var(--neon-purple))]">
                  {game.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[hsl(var(--neon-cyan))] font-semibold">{game.size} GB</span>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(game.rating)}
                      </div>
                      <span className="text-gray-400 text-sm">{game.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full glow-button-magenta bg-[hsl(var(--neon-magenta))] hover:bg-pink-600 text-white font-bold py-3 shadow-[0_0_5px_rgba(255,0,229,0.8)] transition-all duration-300"
                    onClick={handleDownloadClick}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Game Details Section */}
          <div className="lg:col-span-2">
            <Card className="bg-[hsl(var(--secondary-bg))] border-gray-800">
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold font-rajdhani mb-4">{game.title}</h1>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {game.description}
                  {/* Extended description */}
                  {' '}Immerse yourself in a stunning world with breathtaking graphics and an engaging storyline. Experience the thrill of epic battles and challenging puzzles that will test your skills and strategic thinking. Unlock powerful abilities and discover hidden secrets as you progress through the game.
                </p>
                
                <h2 className="text-xl font-bold font-rajdhani mb-4 text-[hsl(var(--neon-cyan))]">Game Features</h2>
                <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
                  <li>Immersive gameplay with stunning graphics</li>
                  <li>Epic storyline with multiple endings</li>
                  <li>Challenging puzzles and dynamic combat system</li>
                  <li>Open world exploration with hidden treasures</li>
                  <li>Powerful character customization options</li>
                </ul>
                
                <h2 className="text-xl font-bold font-rajdhani mb-4 text-[hsl(var(--neon-cyan))]">System Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Minimum</h3>
                      <div className="space-y-2 text-gray-300 text-sm">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-gray-400" />
                          <span>Intel Core i5-6600 / AMD Ryzen 3 1300X</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MemoryStick className="h-4 w-4 text-gray-400" />
                          <span>8 GB RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-4 w-4 text-gray-400" />
                          <span>{game.size} GB available space</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Recommended</h3>
                      <div className="space-y-2 text-gray-300 text-sm">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-gray-400" />
                          <span>Intel Core i7-8700K / AMD Ryzen 5 3600X</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MemoryStick className="h-4 w-4 text-gray-400" />
                          <span>16 GB RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-4 w-4 text-gray-400" />
                          <span>{game.size * 1.5} GB available space</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
