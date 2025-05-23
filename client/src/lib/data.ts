// Game data
export interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  size: number;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Cyber Nexus 2080",
    description: "An action-packed FPS set in a dystopian future where corporations control everything.",
    category: "Action",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 4.5,
    size: 1.2
  },
  {
    id: 2,
    title: "Arcane Realms",
    description: "Embark on an epic journey through a magical world of ancient ruins and mythical creatures.",
    category: "RPG",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 5.0,
    size: 3.7
  },
  {
    id: 3,
    title: "Speed Rush Turbo",
    description: "Push your driving skills to the limit with the ultimate racing simulation experience.",
    category: "Racing",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 4.0,
    size: 2.8
  },
  {
    id: 4,
    title: "Whispers in the Dark",
    description: "Survive the horrors that lurk in the shadows of an abandoned mental asylum.",
    category: "Horror",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 4.5,
    size: 1.9
  },
  {
    id: 5,
    title: "Age of Conquest",
    description: "Build your empire, train your armies, and conquer the world in this epic strategy game.",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 4.0,
    size: 2.2
  },
  {
    id: 6,
    title: "Cosmic Frontier",
    description: "Explore the vastness of space, discover new planets, and build your interstellar empire.",
    category: "Simulation",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    rating: 5.0,
    size: 3.4
  }
];

// Testimonial data
export interface Testimonial {
  name: string;
  title: string;
  text: string;
  rating: number;
  accentColor: string;
  profileImage: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jason Miller",
    title: "Hardcore Gamer",
    text: "I was skeptical at first, but this site is the real deal! I've downloaded several games now and they all work perfectly. The verification process is fast and simple too!",
    rating: 5,
    accentColor: "cyan",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Johnson",
    title: "Casual Gamer",
    text: "GameVault has saved me so much money! The games are high quality and the download speeds are fantastic. I've recommended it to all my gaming friends!",
    rating: 4.5,
    accentColor: "magenta",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ryan Kim",
    title: "Streamer",
    text: "I've been using GameVault for over a year now. The selection keeps growing and I've never had any issues with the downloads. Definitely the best gaming site out there!",
    rating: 5,
    accentColor: "purple",
    profileImage: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Emily Zhang",
    title: "Content Creator",
    text: "As a content creator, I'm always looking for new games to stream. GameVault has introduced me to several indie gems that have become hits with my audience. The download verification is fast and simple!",
    rating: 5,
    accentColor: "pink",
    profileImage: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "David Rodriguez",
    title: "PC Gaming Enthusiast",
    text: "I've tried many game download sites, but GameVault stands out for its clean interface and absence of annoying pop-ups. The game selection is excellent and constantly updated with new titles.",
    rating: 5,
    accentColor: "blue",
    profileImage: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Jessica Williams",
    title: "Parent & Casual Gamer",
    text: "I love that I can find family-friendly games for my kids here. The category filtering makes it easy to find age-appropriate content. The download speeds are impressive too!",
    rating: 4.5,
    accentColor: "green",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Michael Chen",
    title: "Game Developer",
    text: "As a game developer, I appreciate the organization and curation of games on this platform. It's a great place to discover indie titles and get inspiration for my own projects.",
    rating: 4,
    accentColor: "indigo",
    profileImage: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Sophia Martinez",
    title: "Mobile Gamer",
    text: "Even though I primarily play mobile games, I've found GameVault useful for discovering PC titles that later get mobile ports. The interface is intuitive and works well even on my tablet browser.",
    rating: 4,
    accentColor: "amber",
    profileImage: "https://randomuser.me/api/portraits/women/54.jpg"
  }
];

// FAQ data
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Are the games really free?",
    answer: "Yes! All games on our platform are 100% free to download and play. There are absolutely no hidden fees, subscriptions, or 'premium' features to pay for. Every game is completely free forever."
  },
  {
    question: "How can you offer games for free?",
    answer: "We're able to offer games for free through our partnerships with game developers and sponsors who believe in making entertainment accessible to everyone. Our site is supported by minimal advertisements that don't interfere with your gaming experience."
  },
  {
    question: "Are the games safe to download?",
    answer: "Absolutely! We thoroughly scan all games for viruses and malware before making them available. Your security is our top priority. All our downloads are hosted on secure servers and we regularly verify the integrity of our game files."
  },
  {
    question: "What are the system requirements?",
    answer: "System requirements vary by game. Each game page lists the minimum and recommended requirements needed to run the game smoothly. We offer games for a wide range of systems, from older computers to high-end gaming rigs."
  },
  {
    question: "How often are new games added?",
    answer: "We add new games every week! Our team is constantly working to bring you the latest titles across all genres. Make sure to check back regularly or subscribe to our newsletter to stay updated on new releases."
  }
];
