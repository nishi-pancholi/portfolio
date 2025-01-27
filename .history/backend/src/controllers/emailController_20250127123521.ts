// backend/src/controllers/emailController.ts
import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { Email } from "../models/Email";

export const sendEmail = async (req: Request, res: Response) => {
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
    from: `${name} <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    text: message,
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