// backend/src/controllers/emailController.ts
import nodemailer from "nodemailer";
import { VercelRequest, VercelResponse } from "@vercel/node"; // Import Vercel types
import { Email } from "../models/Email";

export const sendEmail = async (req: VercelRequest, res: VercelResponse) => {
  const { name, email, subject, message }: Email = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};
