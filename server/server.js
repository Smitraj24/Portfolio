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

// Portfolio data endpoints
const portfolioData = {
  personal: {
    name: "Smitraj Makvana",
    title: "Full-Stack Developer",
    email: "smitrajsinhmakvana@gmail.com",
    phone: "(+91) 9327178482",
    github: "https://github.com/Smitraj24",
    linkedin: "https://www.linkedin.com/in/smitrajmakvana",
    tagline: "I build web applications that are fast, secure, and a pleasure to use.",
    objective: "Open to new opportunities and collaboration on impactful projects.",
  },
  hero: {
    greeting: "Hi, I'm",
    nameHighlight: "Smitraj",
    subtitle: "Full-Stack Developer",
    intro: "I build production-ready web apps using React, Node.js, and MongoDB. I work at a company and love turning ideas into clean, scalable products with solid architecture and great UX.",
    ctaPrimary: "See my work",
    ctaSecondary: "Get in touch",
  },
  about: {
    headline: "About Me",
    paragraphs: [
      "I am a Full-Stack Developer specializing in building scalable and secure web applications. I develop efficient backend systems with Node.js and Express while creating modern, responsive frontends with React.",
      "My expertise includes RESTful API development, database management with MongoDB and MySQL, and implementing secure authentication systems. I focus on writing clean, maintainable code following best practices and architectural principles.",
      "I am committed to continuous learning and regularly explore new technologies to deliver high-quality software solutions.",
    ],
    highlights: [
      "Full-stack development",
      "RESTful APIs & secure authentication",
      "React, Node.js, Express",
      "MongoDB & MySQL",
      "Clean code & best practices",
      "Agile workflows",
    ],
  },
  experience: [
    {
      company: "Krishang Technolab",
      position: "Full-Stack Developer",
      duration: "Present",
      location: "Ahmedabad, India",
      description: "Working on building scalable web applications with modern technologies.",
      responsibilities: [
        "Developing RESTful APIs using Node.js and Express",
        "Building responsive frontend interfaces with React",
        "Implementing secure authentication and authorization systems",
        "Managing databases with MongoDB and MySQL",
        "Writing clean, maintainable code following best practices",
        "Collaborating in agile development environment",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Git"],
    },
  ],
  skills: {
    description: "I work with modern web technologies across the full stack. Strong foundation in object-oriented design and problem-solving.",
    list: [
      { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", url: null },
      { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", url: null },
      { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vite", url: "https://vitejs.dev/logo.svg" },
      { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "CSS3", url: null },
      { name: "Node.js", url: null },
      { name: "Express.js", url: "https://img.icons8.com/ios/50/FFFFFF/express-js.png" },
      { name: "MongoDB", url: null },
      { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", url: "https://supabase.com/favicon/favicon-32x32.png" },
    ],
    tools: ["JWT", "REST APIs", "EJS", "Nodemon", "Git", "GitHub", "Vercel", "npm"],
  },
  projects: [
    {
      title: "Villa Vista",
      tagline: "Vacation rental platform",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      description: "A full-stack vacation rental platform inspired by Airbnb. Users can browse properties, create listings, and manage bookings. Built with secure authentication, CRUD for listings, and a clear, responsive UI.",
      highlights: [
        "User auth and session management",
        "CRUD for property listings",
        "Booking flow with real-time updates",
        "Responsive layout and clean UX",
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      link: "https://github.com/Smitraj24/wanderlust",
      github: "https://github.com/Smitraj24/wanderlust",
    },
    {
      title: "Mini Weather App",
      tagline: "Real-time weather",
      tech: ["HTML", "CSS", "React.js", "API"],
      description: "A minimal weather app that fetches and displays current weather by city. Uses a weather API, clean UI, and responsive design for a quick, focused user experience.",
      highlights: [
        "Weather API integration",
        "Search by city",
        "Current conditions and display",
        "Simple, responsive UI",
      ],
      image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800",
      link: "https://github.com/Smitraj24/Weather-App-mini-Project",
      github: "https://github.com/Smitraj24/Weather-App-mini-Project",
    },
    {
      title: "Password Manager",
      tagline: "Secure credential storage · Code with Harry Web Dev",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      description: "A secure password manager web app built following Code with Harry's web development course. Store and manage passwords with Bcrypt encryption and user-specific access. Clean React frontend with Node/Express API and MongoDB.",
      highlights: [
        "Bcrypt for secure password hashing",
        "User-specific access control",
        "React frontend with clear UX",
        "REST API and MongoDB storage",
      ],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/Smitraj24/PasswordManager",
      github: "https://github.com/Smitraj24/PasswordManager",
    },
    {
      title: "Zerodha Clone",
      tagline: "Trading dashboard UI",
      tech: ["React.js", "Node.js", "Express.js"],
      description: "A front-end clone of Zerodha's trading dashboard. Responsive layout with stock/watchlist-style sections, clean typography, and a professional trading interface look and feel.",
      highlights: [
        "Responsive dashboard layout",
        "Stock/watchlist-style UI",
        "Clean, professional design",
        "Modern CSS and component structure",
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      link: "https://github.com/Smitraj24/Zerodha-Clone",
      github: "https://github.com/Smitraj24/Zerodha-Clone",
    },
  ],
  contact: {
    headline: "Let's work together",
    subtext: "Open to new roles, freelance, and collaboration. Drop a message and I'll get back soon.",
    formPlaceholders: {
      name: "Your name",
      email: "Your email",
      message: "Your message – project idea or just hello",
    },
    buttonSend: "Send message",
    buttonSending: "Sending...",
    buttonSuccess: "Message sent!",
    buttonError: "Something went wrong – try again",
  },
};

// API endpoints for portfolio data
app.get("/api/portfolio", (req, res) => {
  res.json(portfolioData);
});

app.get("/api/portfolio/personal", (req, res) => {
  res.json(portfolioData.personal);
});

app.get("/api/portfolio/hero", (req, res) => {
  res.json(portfolioData.hero);
});

app.get("/api/portfolio/about", (req, res) => {
  res.json(portfolioData.about);
});

app.get("/api/portfolio/experience", (req, res) => {
  res.json(portfolioData.experience);
});

app.get("/api/portfolio/skills", (req, res) => {
  res.json(portfolioData.skills);
});

app.get("/api/portfolio/projects", (req, res) => {
  res.json(portfolioData.projects);
});

app.get("/api/portfolio/contact", (req, res) => {
  res.json(portfolioData.contact);
});

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
