import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertStartupSchema, insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - all prefixed with /api
  const apiRouter = express.Router();

  // GET all startups
  apiRouter.get("/startups", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string | undefined;
      
      let startups;
      if (category) {
        startups = await storage.getStartupsByCategory(category);
      } else {
        startups = await storage.getAllStartups();
      }
      
      res.json(startups);
    } catch (error) {
      console.error("Error fetching startups:", error);
      res.status(500).json({ message: "Failed to fetch startups" });
    }
  });

  // GET featured startups
  apiRouter.get("/startups/featured", async (req: Request, res: Response) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const startups = await storage.getFeaturedStartups(limit);
      res.json(startups);
    } catch (error) {
      console.error("Error fetching featured startups:", error);
      res.status(500).json({ message: "Failed to fetch featured startups" });
    }
  });

  // GET a single startup by ID
  apiRouter.get("/startups/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid startup ID" });
      }

      const startup = await storage.getStartupById(id);
      if (!startup) {
        return res.status(404).json({ message: "Startup not found" });
      }

      res.json(startup);
    } catch (error) {
      console.error("Error fetching startup:", error);
      res.status(500).json({ message: "Failed to fetch startup" });
    }
  });

  // POST create a new startup
  apiRouter.post("/startups", async (req: Request, res: Response) => {
    try {
      const startupData = insertStartupSchema.parse(req.body);
      const newStartup = await storage.createStartup(startupData);
      res.status(201).json(newStartup);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error creating startup:", error);
      res.status(500).json({ message: "Failed to create startup" });
    }
  });

  // POST create a contact message for a startup
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      
      // Verify the startup exists
      const startup = await storage.getStartupById(messageData.startupId);
      if (!startup) {
        return res.status(404).json({ message: "Startup not found" });
      }

      const newMessage = await storage.createContactMessage(messageData);
      res.status(201).json(newMessage);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      console.error("Error creating contact message:", error);
      res.status(500).json({ message: "Failed to send contact message" });
    }
  });

  // Mount the API router
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
