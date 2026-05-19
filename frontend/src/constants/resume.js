// Portfolio content – Smitraj Makvana

export const personal = {
  name: "Smitraj Makvana",
  title: "Full-Stack Developer",
  email: "smitrajsinhmakvana@gmail.com",
  phone: "(+91) 9327178482",
  github: "https://github.com/Smitraj24",
  linkedin: "https://www.linkedin.com/in/smitrajmakvana",
  tagline:
    "I build web applications that are fast, secure, and a pleasure to use.",
  objective:
    "Open to new opportunities and collaboration on impactful projects.",
};

export const hero = {
  greeting: "Hi, I'm",
  nameHighlight: "Smitraj",
  subtitle: "Full-Stack Developer",
  intro:
    "I build production-ready web apps using React, Node.js, and MongoDB. I work at a company and love turning ideas into clean, scalable products with solid architecture and great UX.",
  ctaPrimary: "See my work",
  ctaSecondary: "Get in touch",
};

export const about = {
  headline: "About Me",
  paragraphs: [
    "I'm a Full-Stack Developer working at a company, with hands-on experience building everything from vacation rental platforms to secure password managers and trading-style dashboards. I focus on backend APIs, databases, and modern frontends.",
    "I'm comfortable across the stack: Java, Node.js and Express for APIs, React for interfaces, and MongoDB or MySQL for data. I care about security (Bcrypt, auth), clean architecture, and maintainable code.",
    "I keep learning and applying new tools on the job and through side projects—always aiming to ship quality software.",
  ],
  highlights: [
    "Full-stack: frontend to database",
    "REST APIs, auth, and CRUD design",
    "Responsive, user-friendly UIs",
    "Git and agile workflows",
  ],
};

// Skill logos: use 'url' for CDN or null for local asset. tools = names only, no boxes/images.
export const skills = {
  description:
    "I work with modern web technologies and keep adding new tools as projects demand. Strong foundation in object-oriented design and problem-solving.",
  list: [
    {
      name: "Java",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    { name: "HTML", url: null },
    { name: "CSS", url: null },
    { name: "JavaScript", url: null },
    { name: "Node.js", url: null },
    {
      name: "Express.js",
      url: "https://img.icons8.com/ios/50/FFFFFF/express-js.png",
    },
    { name: "React.js", url: null },
    {
      name: "MySQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    { name: "MongoDB", url: null },
  ],
  tools: ["OOP", "DSA", "GitHub", "VS Code"],
};

export const projects = [
  {
    title: "Villa Vista",
    tagline: "Vacation rental platform",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    description:
      "A full-stack vacation rental platform inspired by Airbnb. Users can browse properties, create listings, and manage bookings. Built with secure authentication, CRUD for listings, and a clear, responsive UI.",
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
    description:
      "A minimal weather app that fetches and displays current weather by city. Uses a weather API, clean UI, and responsive design for a quick, focused user experience.",
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
    description:
      "A secure password manager web app built following Code with Harry's web development course. Store and manage passwords with Bcrypt encryption and user-specific access. Clean React frontend with Node/Express API and MongoDB.",
    highlights: [
      "Bcrypt for secure password hashing",
      "User-specific access control",
      "React frontend with clear UX",
      "REST API and MongoDB storage",
    ],
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/Smitraj24/PasswordManager",
    github: "https://github.com/Smitraj24/PasswordManager",
  },
  {
    title: "Zerodha Clone",
    tagline: "Trading dashboard UI",
    tech: ["React.js", "Node.js", "Express.js"],
    description:
      "A front-end clone of Zerodha's trading dashboard. Responsive layout with stock/watchlist-style sections, clean typography, and a professional trading interface look and feel.",
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
];

export const contact = {
  headline: "Let's work together",
  subtext:
    "Open to new roles, freelance, and collaboration. Drop a message and I'll get back soon.",
  formPlaceholders: {
    name: "Your name",
    email: "Your email",
    message: "Your message – project idea or just hello",
  },
  buttonSend: "Send message",
  buttonSending: "Sending...",
  buttonSuccess: "Message sent!",
  buttonError: "Something went wrong – try again",
};
