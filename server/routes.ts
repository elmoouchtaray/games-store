import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for getting all games
  app.get('/api/games', (_req, res) => {
    // As this is a static website, we're not using the database
    // In a real app, we would fetch games from the database
    res.json({
      success: true,
      message: "This is a static website example. Games are served from the client side."
    });
  });

  // API route for newsletter subscription (demo purpose)
  app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address provided."
      });
    }
    
    // In a real app, we would save this to a database
    res.json({
      success: true,
      message: "Thank you for subscribing!"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
