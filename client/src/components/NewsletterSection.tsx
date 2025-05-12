import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if email is valid
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the email to a backend service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    });
    
    setEmail('');
  };
  
  return (
    <section className="py-20 bg-[hsl(var(--primary-bg))] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      ></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-6">
            <span className="text-white">Get New Game </span>
            <span className="text-[hsl(var(--neon-cyan))] text-shadow-neon">Alerts</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about new game releases, exclusive offers, and special promotions
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow py-3 px-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--neon-cyan))] text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit"
              className="glow-button-cyan bg-[hsl(var(--neon-cyan))] hover:bg-blue-500 text-[hsl(var(--primary-bg))] font-bold py-3 px-6 rounded-lg shadow-[0_0_5px_rgba(0,240,255,0.8)] transition-all duration-300"
            >
              Subscribe Now
            </Button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
