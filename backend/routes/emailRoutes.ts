// backend/src/routes/emailRoutes.ts
import express from "express";
import { sendEmail } from "../controllers/emailController";

const router = express.Router();

// Route for sending email
router.post("/send-email", sendEmail);

export default router;
