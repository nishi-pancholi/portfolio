// api/emails/send-email.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { sendEmail } from "../../controllers/emailController"; // Path to your controller

// Load environment variables
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.post("/api/emails/send-email", (req: VercelRequest, res: VercelResponse) => {
  return sendEmail(req, res); // Delegate to the controller function for handling the email sending logic
});

// Export the app as a serverless function
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); // Pass the request and response to the Express app
};
