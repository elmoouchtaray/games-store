import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Star, StarHalf, Search, ArrowLeft, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Expanded game data for the 40 games
const expandedGames = Array.from({ length: 40 }).map((_, index) => {
  // Reuse the existing 6 games for the first entries
  if (index < 6) {
    const existingGameIndex = index;
    return {
      id: existingGameIndex + 1,
      title: [
        "Cyber Nexus 2080",
        "Arcane Realms",
        "Speed Rush Turbo",
        "Whispers in the Dark",
        "Age of Conquest",
        "Cosmic Frontier"
      ][existingGameIndex],
      description: [
        "An action-packed FPS set in a dystopian future where corporations control everything.",
        "Embark on an epic journey through a magical world of ancient ruins and mythical creatures.",
        "Push your driving skills to the limit with the ultimate racing simulation experience.",
        "Survive the horrors that lurk in the shadows of an abandoned mental asylum.",
        "Build your empire, train your armies, and conquer the world in this epic strategy game.",
        "Explore the vastness of space, discover new planets, and build your interstellar empire."
      ][existingGameIndex],
      category: [
        "Action",
        "RPG",
        "Racing",
        "Horror",
        "Strategy",
        "Simulation"
      ][existingGameIndex],
      image: [
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        "https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
      ][existingGameIndex],
      rating: [4.5, 5.0, 4.0, 4.5, 4.0, 5.0][existingGameIndex],
      size: [1.2, 3.7, 2.8, 1.9, 2.2, 3.4][existingGameIndex],
    };
  } 
  
  // Generate new game data for the rest
  const categories = ["Action", "RPG", "Racing", "Horror", "Strategy", "Simulation", "Adventure", "Puzzle", "Sports", "Fighting"];
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  // Generate random titles based on the category
  let title;
  switch (category) {
    case "Action":
      title = [
        "Night City Outlaws", "Mercenary's Code", "Shadow Protocol", "Urban Warfare", 
        "Syndicate Rising", "Steel Division", "Tactical Ops", "Combat Zone"
      ][Math.floor(Math.random() * 8)];
      break;
    case "RPG":
      title = [
        "Ancient Legacy", "Dragon's Dogma", "Mystic Legends", "Enchanted Realms", 
        "Forgotten Kingdom", "Sorcerer's Path", "Runic Odyssey", "Elven Chronicles"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Racing":
      title = [
        "Street Legends", "Drift Masters", "Velocity Rush", "Nitro Boost", 
        "Circuit Champions", "Rally Extreme", "Turbo Racers", "Asphalt Kings"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Horror":
      title = [
        "Silent Manor", "Haunted Depths", "Paranormal Entity", "Nightmare Protocol", 
        "The Dark Descent", "Cursed Asylum", "Fear Chronicles", "Dread Hollow"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Strategy":
      title = [
        "Global Conquest", "Empire Builder", "Tactical Command", "War Generals", 
        "Civilization Nexus", "Kingdom Wars", "Resource Empire", "Supreme Commander"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Simulation":
      title = [
        "Life Simulator", "Space Colony", "Farm Manager", "City Planner", 
        "Business Tycoon", "Flight Academy", "Medical Center", "Construction Master"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Adventure":
      title = [
        "Lost Expedition", "Treasure Hunters", "Jungle Quest", "Ocean Explorer", 
        "Mountain Climber", "Desert Journey", "Arctic Survival", "Island Adventure"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Puzzle":
      title = [
        "Mind Bender", "Logic Masters", "Pattern Solver", "Quantum Puzzles", 
        "Mystery Box", "Brain Challenge", "Enigma Code", "Puzzle Matrix"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Sports":
      title = [
        "Pro Soccer", "Basketball Dynasty", "Tennis Champions", "Golf Masters", 
        "Hockey League", "Baseball Stars", "Swimming Challenge", "Olympic Games"
      ][Math.floor(Math.random() * 8)];
      break;
    case "Fighting":
      title = [
        "Street Fighters", "Combat Masters", "Martial Arts Legend", "Boxing Champions", 
        "Wrestling Empire", "Arena Battles", "Tournament Fighters", "Melee Masters"
      ][Math.floor(Math.random() * 8)];
      break;
    default:
      title = "Mystery Game";
  }
  
  // Generate image URLs that match the category theme
  const imageUrlsByCategory: Record<string, string[]> = {
    "Action": [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1496979551903-46e46589a88b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "RPG": [
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1563991655736-794d2e87a740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Racing": [
      "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1604609886088-8b3ff1b33a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1505570554449-69463dd15426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Horror": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1555354921-3f8a7e8697e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1504480798153-448d2aeb2530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Strategy": [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Simulation": [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Adventure": [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Puzzle": [
      "https://images.unsplash.com/photo-1628815117408-dd7d8379f0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Sports": [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ],
    "Fighting": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1617360547704-3da8b5363359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    ]
  };
  
  const imageList = imageUrlsByCategory[category] || imageUrlsByCategory["Action"];
  const image = imageList[Math.floor(Math.random() * imageList.length)];
  
  // Game descriptions based on category
  const descriptions: Record<string, string[]> = {
    "Action": [
      "Fast-paced action shooter with intense firefights and explosive combat sequences.",
      "Experience heart-pumping action in this combat-heavy adventure through urban environments.",
      "Battle against overwhelming odds in this tactical action game with RPG elements.",
      "Non-stop action with cutting-edge weapons and intense multiplayer combat arenas."
    ],
    "RPG": [
      "Immerse yourself in a vast fantasy world filled with magic, danger and epic quests.",
      "Create your hero, choose your path, and embark on a journey that will shape the world.",
      "A deep role-playing experience with hundreds of hours of gameplay and complex character development.",
      "Navigate political intrigue and ancient mysteries in this story-driven RPG adventure."
    ],
    "Racing": [
      "Push the limits of speed in the most realistic racing simulation on the market.",
      "Feel the adrenaline as you drift around treacherous corners in exotic locations.",
      "Customize your dream cars and compete against the best drivers in the world.",
      "From street racing to professional circuits, prove your skills in every racing discipline."
    ],
    "Horror": [
      "Survival horror at its finest, with limited resources and terrifying enemies lurking in the shadows.",
      "Psychological horror that will keep you on edge with its disturbing atmosphere and jump scares.",
      "Uncover the dark secrets of a haunted location while fighting to maintain your sanity.",
      "Every decision matters in this choice-driven horror story with multiple endings."
    ],
    "Strategy": [
      "Build your empire from nothing, manage resources, and outthink your opponents.",
      "Command armies in real-time tactical battles across historically accurate campaigns.",
      "Strategic depth combined with accessible gameplay for both veterans and newcomers.",
      "Diplomacy or domination - choose how you'll rule in this complex 4X strategy game."
    ],
    "Simulation": [
      "The most detailed simulation of its kind, with realistic physics and authentic systems.",
      "Build, manage, and optimize your operation in this deep management simulation.",
      "Experience the challenges and rewards of professional life in this career simulator.",
      "Create and control your own world in this sandbox simulation with endless possibilities."
    ],
    "Adventure": [
      "Explore uncharted territories and solve ancient puzzles in this narrative-driven adventure.",
      "Every choice shapes your story in this branching adventure game with multiple endings.",
      "A beautiful hand-crafted world awaits with secrets to discover and treasures to find.",
      "Embark on an emotional journey through stunning landscapes and memorable characters."
    ],
    "Puzzle": [
      "Exercise your brain with increasingly challenging puzzles that test your problem-solving skills.",
      "Relaxing yet stimulating puzzle gameplay that's easy to learn but difficult to master.",
      "Connect the dots in this mind-bending puzzle game with a surprising narrative twist.",
      "Hundreds of unique puzzles with innovative mechanics that will keep you engaged for hours."
    ],
    "Sports": [
      "The most authentic sports simulation with official licenses and realistic gameplay.",
      "Build your team from rookies to champions in this deep sports management simulator.",
      "Compete against friends in local and online multiplayer matches.",
      "Master complex techniques and become the ultimate champion in your favorite sport."
    ],
    "Fighting": [
      "Technical fighting game with depth that rewards skill and practice.",
      "Choose from dozens of unique fighters each with their own fighting styles and special moves.",
      "Rise through the ranks from amateur to professional in the engaging career mode.",
      "The ultimate test of reflexes and strategy in both local and online competitive modes."
    ]
  };
  
  const description = descriptions[category][Math.floor(Math.random() * descriptions[category].length)];
  
  // Generate random game size between 1.0 and 5.0 GB
  const size = Math.round((1 + Math.random() * 4) * 10) / 10;
  
  // Generate random rating between 3.0 and 5.0
  const rating = Math.round((3 + Math.random() * 2) * 10) / 10;
  
  return {
    id: index + 1,
    title,
    description,
    category,
    image,
    rating,
    size
  };
});

export default function Games() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState(expandedGames);
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [showFilters, setShowFilters] = useState(false);
  const [sizeRange, setSizeRange] = useState<{min: number, max: number}>({min: 0, max: 5});
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);
  
  // Categories for filtering
  const categories = ["Action", "RPG", "Racing", "Horror", "Strategy", "Simulation", "Adventure", "Puzzle", "Sports", "Fighting"];
  
  // Function to handle download button click
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Access the global function we defined in Layout.tsx
    window.openDownloadModal();
  };
  
  // Filter games when search term or category changes
  useEffect(() => {
    let results = expandedGames;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      results = results.filter(game => game.category === selectedCategory);
    }
    
    // Filter by size range
    results = results.filter(game => game.size >= sizeRange.min && game.size <= sizeRange.max);
    
    // Filter by rating
    if (ratingFilter.length > 0) {
      results = results.filter(game => {
        const roundedRating = Math.floor(game.rating);
        return ratingFilter.includes(roundedRating);
      });
    }
    
    // Sort results
    switch(sortBy) {
      case "name":
        results = [...results].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "size":
        results = [...results].sort((a, b) => a.size - b.size);
        break;
      case "rating":
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      case "popularity":
      default:
        // We don't have real popularity data, so we'll use a combination of rating and id
        results = [...results].sort((a, b) => (b.rating * 10 + b.id) - (a.rating * 10 + a.id));
        break;
    }
    
    setFilteredGames(results);
  }, [searchTerm, selectedCategory, sortBy, sizeRange, ratingFilter]);
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-yellow-400 h-4 w-4" />);
    }
    
    return stars;
  };
  
  // SEO metadata
  useEffect(() => {
    document.title = "Browse Games - GameVault";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse and download free games from GameVault. Action, RPG, Horror, Racing, and more genres available. No payment required.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Browse and download free games from GameVault. Action, RPG, Horror, Racing, and more genres available. No payment required.";
      document.head.appendChild(meta);
    }
    
    // Add Open Graph meta tags for better social sharing
    const ogTags = [
      { property: "og:title", content: "Browse Games - GameVault" },
      { property: "og:description", content: "Browse and download free games from GameVault. Action, RPG, Horror, Racing, and more genres available." },
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
  }, []);
  
  return (
    <div className="bg-[hsl(var(--primary-bg))] py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-rajdhani mb-4">
            <span className="text-white">Browse All </span>
            <span className="text-[hsl(var(--neon-cyan))] text-shadow-neon">Games</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our extensive collection of free games across all genres
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-[hsl(var(--secondary-bg))] rounded-xl p-4 mb-8 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search games..."
                className="pl-10 pr-4 py-2 bg-gray-800 border-gray-700 focus:border-[hsl(var(--neon-cyan))] rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                  <SelectItem value="size">Size (Smallest First)</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-gray-800 border-gray-700 hover:bg-gray-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} />
                <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
              </Button>
            </div>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-white font-medium mb-3">Category</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Size Range Filter */}
                <div>
                  <h3 className="text-white font-medium mb-3">Game Size</h3>
                  <div className="flex items-center gap-2">
                    <Select 
                      value={sizeRange.min.toString()} 
                      onValueChange={(value) => setSizeRange({...sizeRange, min: parseFloat(value)})}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Min Size" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="0">0 GB</SelectItem>
                        <SelectItem value="1">1 GB</SelectItem>
                        <SelectItem value="2">2 GB</SelectItem>
                        <SelectItem value="3">3 GB</SelectItem>
                        <SelectItem value="4">4 GB</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-gray-400">to</span>
                    <Select 
                      value={sizeRange.max.toString()} 
                      onValueChange={(value) => setSizeRange({...sizeRange, max: parseFloat(value)})}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Max Size" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="1">1 GB</SelectItem>
                        <SelectItem value="2">2 GB</SelectItem>
                        <SelectItem value="3">3 GB</SelectItem>
                        <SelectItem value="4">4 GB</SelectItem>
                        <SelectItem value="5">5 GB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Rating Filter */}
                <div>
                  <h3 className="text-white font-medium mb-3">Minimum Rating</h3>
                  <div className="flex items-center gap-4">
                    {[3, 4, 5].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <Checkbox 
                          id={`rating-${rating}`} 
                          checked={ratingFilter.includes(rating)} 
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setRatingFilter([...ratingFilter, rating]);
                            } else {
                              setRatingFilter(ratingFilter.filter(r => r !== rating));
                            }
                          }}
                        />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                          <div className="flex mr-1">
                            {Array(rating).fill(0).map((_, i) => (
                              <Star key={i} className="fill-yellow-400 text-yellow-400 h-4 w-4" />
                            ))}
                          </div>
                          <span className="text-gray-400">+</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  variant="outline" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                    setSortBy("popularity");
                    setSizeRange({min: 0, max: 5});
                    setRatingFilter([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div key={game.id} className="game-card bg-[hsl(var(--secondary-bg))] rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={`${game.title} game thumbnail`} 
                    className="w-full h-36 object-cover object-center"
                    loading="lazy"
                  />
                  <div 
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium
                      ${game.category === 'Action' || game.category === 'Horror' || game.category === 'Racing' || game.category === 'Simulation' ? 
                        'bg-[hsl(var(--neon-purple))] text-white' : 
                        'bg-[hsl(var(--neon-cyan))] text-[hsl(var(--primary-bg))]'
                      }`}
                  >
                    {game.category}
                  </div>
                </div>
                <div className="p-4">
                  <Link href={`/games/${game.id}`}>
                    <h3 className="text-lg font-bold font-rajdhani mb-1 hover:text-[hsl(var(--neon-cyan))] transition-colors duration-300">{game.title}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {renderStars(game.rating)}
                    </div>
                    <span className="text-gray-400 text-xs ml-2">{game.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[hsl(var(--neon-cyan))] text-sm font-semibold">{game.size} GB</span>
                    <button 
                      onClick={handleDownloadClick}
                      className="glow-button-magenta bg-[hsl(var(--neon-magenta))] hover:bg-pink-600 text-white font-bold py-1 px-3 text-sm rounded-lg shadow-[0_0_5px_rgba(255,0,229,0.8)] transition-all duration-300"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-gray-400 text-lg mb-4">No games found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="text-[hsl(var(--neon-cyan))] border-[hsl(var(--neon-cyan))] hover:bg-[hsla(var(--neon-cyan),0.1)]"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSizeRange({min: 0, max: 5});
                  setRatingFilter([]);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Results Stats */}
        <div className="mt-6 text-center text-gray-400">
          <p>Showing {filteredGames.length} of {expandedGames.length} games</p>
        </div>
      </div>
    </div>
  );
}