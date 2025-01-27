// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import projectRoutes from './routes/projectRoutes';
import nodemailer from 'nodemailer';


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);

// Connect to database
connectDB();

const PORT = process.env.PORT || 5001;


// POST route to handle email submissions
app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use any email service (e.g., Outlook, Yahoo)
      auth: {
        user: process.env.EMAIL, // Replace with your email
        pass: process.env.PASSWORD, // Replace with your email password or app password
      },
    });
  
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.RECIPIENT_EMAIL, // Your email address (where you’ll receive messages)
      subject: `Message from ${name}: ${subject}`,
      text: message,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});