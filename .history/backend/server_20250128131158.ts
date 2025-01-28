// backend/src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import projectRoutes from "./routes/projectRoutes";
import emailRoutes from "./routes/emailRoutes"; // Import email routes
import { VercelRequest, VercelResponse } from '@vercel/node'; // Vercel types

dotenv.config();

const app = express();

// CORS configuration to allow requests from frontend URL set in the .env
const corsOptions = {
  origin: process.env.NEXT_PUBLIC_FRONTEND_URL|| "*", // Use the Vercel frontend URL from the .env or fallback to localhost
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization header for JWT
};
console.log(process.env.NEXT_PUBLIC_FRONTEND_URL,"frontendurl");
app.use(cors(corsOptions)); // Use the configured CORS

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/emails", emailRoutes); // Use email routes

// Connect to database (uncomment if you have database connection)
// connectDB();

// Use this to export the express app for Vercel's serverless functions
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); // This will call the Express app handler for the request
};
