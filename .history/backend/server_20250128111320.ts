import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import projectRoutes from "./routes/projectRoutes";
import emailRoutes from "./routes/emailRoutes"; // Import email routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/emails", emailRoutes); // Use email routes

// Export the app as a serverless function
export default (req, res) => {
  app(req, res); // Pass the request and response to the Express app
};
