// api/emails/send-email.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendEmail } from "../../controllers/emailController"; // Path to your controller

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    return sendEmail(req, res); // Delegate to the controller function for handling the email sending logic
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
