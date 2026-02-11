import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Email transporter (Gmail SMTP). Use App Password: https://myaccount.google.com/apppasswords
const transporter =
  process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

// Store messages in memory (optional backup; primary is email)
const messages = [];

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required" });
  }
  const entry = { name, email, message, createdAt: new Date().toISOString() };
  messages.push(entry);
  console.log("Contact form submission:", entry);

  if (transporter && CONTACT_TO_EMAIL) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
      });
      return res.status(201).json({ success: true, id: messages.length });
    } catch (err) {
      console.error("Email send failed:", err);
      return res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  }

  // No email config: still accept and store (dev mode)
  res.status(201).json({ success: true, id: messages.length });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
