import { 
  type Startup, 
  type InsertStartup, 
  type ContactMessage, 
  type InsertContactMessage,
  type User,
  type InsertUser
} from "@shared/schema";

export interface IStorage {
  // User methods (keeping original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Startup methods
  getAllStartups(): Promise<Startup[]>;
  getFeaturedStartups(limit?: number): Promise<Startup[]>;
  getStartupById(id: number): Promise<Startup | undefined>;
  getStartupsByCategory(category: string): Promise<Startup[]>;
  createStartup(startup: InsertStartup): Promise<Startup>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessagesByStartup(startupId: number): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private startups: Map<number, Startup>;
  private contactMessages: Map<number, ContactMessage>;
  
  private currentUserId: number;
  private currentStartupId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.startups = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentStartupId = 1;
    this.currentContactMessageId = 1;
    
    // Add some sample startups
    this.seedStartups();
  }

  // User methods (keeping original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Startup methods
  async getAllStartups(): Promise<Startup[]> {
    return Array.from(this.startups.values()).sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0);
    });
  }

  async getFeaturedStartups(limit = 3): Promise<Startup[]> {
    return Array.from(this.startups.values())
      .filter(startup => startup.featured)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async getStartupById(id: number): Promise<Startup | undefined> {
    return this.startups.get(id);
  }

  async getStartupsByCategory(category: string): Promise<Startup[]> {
    return Array.from(this.startups.values())
      .filter(startup => startup.category === category)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createStartup(insertStartup: InsertStartup): Promise<Startup> {
    const id = this.currentStartupId++;
    const startup: Startup = { 
      ...insertStartup, 
      id, 
      featured: false, 
      createdAt: new Date(),
      // Ensure all required fields have non-undefined values
      foundingYear: insertStartup.foundingYear || null,
      userBase: insertStartup.userBase || null,
      revenue: insertStartup.revenue || null,
      location: insertStartup.location || null,
      imageUrl: insertStartup.imageUrl || null
    };
    this.startups.set(id, startup);
    return startup;
  }

  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessagesByStartup(startupId: number): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .filter(message => message.startupId === startupId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  // Seed method for demo data
  private seedStartups() {
    const sampleStartups: InsertStartup[] = [
      {
        name: "TaskFlow",
        description: "A project management tool with 500+ active users and $2k MRR. Looking to pass it on to someone who can take it to the next level.",
        category: "SaaS",
        foundingYear: 2019,
        userBase: "500+ active users",
        revenue: "$2,000 MRR",
        location: "Portland, OR",
        founderName: "Michael Roberts",
        founderEmail: "michael@taskflow.com",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
      },
      {
        name: "EcoWares",
        description: "Sustainable home goods shop with established supplier relationships and logistics. Ready for a new owner who shares our environmental values.",
        category: "E-commerce",
        foundingYear: 2020,
        userBase: "1,200+ customers",
        revenue: "$5,000 monthly",
        location: "Austin, TX",
        founderName: "Sarah Chen",
        founderEmail: "sarah@ecowares.com",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
      },
      {
        name: "MindfulMe",
        description: "Meditation app with 3,000 downloads and a small but loyal user base. App is fully developed but needs marketing push.",
        category: "Mobile App",
        foundingYear: 2021,
        userBase: "3,000+ downloads",
        revenue: "$800 monthly",
        location: "Chicago, IL",
        founderName: "James Wilson",
        founderEmail: "james@mindfulme.com",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978"
      },
      {
        name: "FitTracker",
        description: "Fitness tracking platform with workout plans and nutrition guides. Has 1,500 registered users and a solid codebase.",
        category: "Health Tech",
        foundingYear: 2020,
        userBase: "1,500+ users",
        revenue: "$1,200 monthly",
        location: "Denver, CO",
        founderName: "Emily Parker",
        founderEmail: "emily@fittracker.com",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      },
      {
        name: "CodeBuddy",
        description: "Programming learning platform for beginners with interactive tutorials. Growing user base but founder is pivoting to new ventures.",
        category: "EdTech",
        foundingYear: 2019,
        userBase: "2,000+ students",
        revenue: "$3,000 monthly",
        location: "Seattle, WA",
        founderName: "David Kim",
        founderEmail: "david@codebuddy.com",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
      }
    ];

    sampleStartups.forEach((startup, index) => {
      const id = this.currentStartupId++;
      const newStartup: Startup = {
        ...startup,
        id,
        featured: index < 3, // Make the first 3 featured
        createdAt: new Date(Date.now() - (index * 86400000)), // Stagger dates
        // Ensure all required fields have non-undefined values
        foundingYear: startup.foundingYear || null,
        userBase: startup.userBase || null,
        revenue: startup.revenue || null,
        location: startup.location || null,
        imageUrl: startup.imageUrl || null
      };
      this.startups.set(id, newStartup);
    });
  }
}

export const storage = new MemStorage();
