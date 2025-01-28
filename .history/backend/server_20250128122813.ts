// backend/src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import emailRoutes from "./routes/emailRoutes"; // Import email routes

dotenv.config();

const app = express();

// CORS configuration to allow requests from frontend URL set in the .env
const corsOptions = {
  origin: process.env.NEXT_PUBLIC_FRONTEND_URL, // Use the Vercel frontend URL from the .env or fallback to localhost
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization header for JWT
};

app.use(cors(corsOptions)); // Use the configured CORS

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/emails", emailRoutes); // Use email routes

// Connect to database
// connectDB();

const PORT = process.env.PORT || 5001;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
