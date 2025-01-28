// backend/src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { VercelRequest, VercelResponse } from "@vercel/node";
import serverless from "serverless-http"; // Import serverless-http
import emailRoutes from "./routes/emailRoutes"; // Import email routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/emails", emailRoutes); // Use email routes

// Use serverless-http to wrap your Express app for serverless deployment
const handler = serverless(app);

// Export the handler to be used by Vercel
export default (req: VercelRequest, res: VercelResponse) => handler(req, res);
