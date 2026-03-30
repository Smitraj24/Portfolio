import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { api } from "../utils/api";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getPortfolio();
        setPortfolioData(data);
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: "bot",
          text: `Hi! I'm Smitraj's portfolio assistant. I can help you learn about his skills, experience, and projects. What would you like to know?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    // Skills
    if (msg.includes("skill") || msg.includes("technology") || msg.includes("tech stack")) {
      return `My tech stack includes:
      
**Languages:** C, Java, JavaScript, TypeScript
**Frontend:** React, Next.js, Vite, Bootstrap, CSS3
**Backend:** Node.js, Express.js, JWT, REST APIs, EJS, Nodemon
**Database:** MongoDB, PostgreSQL, Supabase
**Tools:** Git, GitHub, Vercel, npm

I'm proficient in full-stack development with modern technologies!`;
    }

    // Languages
    if (msg.includes("language") || msg.includes("programming")) {
      return "I work with C, Java, JavaScript, and TypeScript. I'm comfortable with both object-oriented and functional programming paradigms.";
    }

    // Frontend
    if (msg.includes("frontend") || msg.includes("react") || msg.includes("ui") || msg.includes("next")) {
      return "I build modern frontends using React and Next.js with Vite for fast development. I use Bootstrap and CSS3 for responsive, beautiful UIs.";
    }

    // Backend
    if (msg.includes("backend") || msg.includes("api") || msg.includes("server") || msg.includes("express")) {
      return "I develop RESTful APIs using Node.js and Express.js, implementing JWT authentication, EJS templating, and using Nodemon for efficient development.";
    }

    // Database
    if (msg.includes("database") || msg.includes("mongodb") || msg.includes("postgres") || msg.includes("sql")) {
      return "I work with both SQL (PostgreSQL) and NoSQL (MongoDB) databases. I also use Supabase for modern backend solutions with real-time capabilities.";
    }

    // Experience
    if (msg.includes("experience") || msg.includes("work") || msg.includes("job") || msg.includes("company")) {
      const exp = portfolioData?.experience?.[0];
      if (exp) {
        return `I'm currently working as a ${exp.position} at ${exp.company} in ${exp.location}. I develop RESTful APIs, build responsive frontends with React, implement secure authentication, and manage databases. I focus on writing clean, maintainable code following best practices.`;
      }
      return "I'm a Full-Stack Developer with experience in building scalable web applications using modern technologies.";
    }

    // Projects
    if (msg.includes("project") || msg.includes("portfolio") || msg.includes("built") || msg.includes("created")) {
      const projects = portfolioData?.projects || [];
      if (projects.length > 0) {
        const projectList = projects.slice(0, 3).map((p) => `• ${p.title}: ${p.tagline}`).join("\n");
        return `Here are some of my key projects:\n\n${projectList}\n\nEach showcases different aspects of full-stack development!`;
      }
      return "I've built various full-stack projects including vacation rental platforms, password managers, and trading dashboards using React, Node.js, and MongoDB.";
    }

    // Tools
    if (msg.includes("tool") || msg.includes("git") || msg.includes("github") || msg.includes("vercel")) {
      return "I use Git & GitHub for version control, Vercel for deployment, and npm for package management. I'm experienced in modern development workflows and CI/CD practices.";
    }

    // Security
    if (msg.includes("security") || msg.includes("auth") || msg.includes("jwt")) {
      return "I implement secure authentication using JWT (JSON Web Tokens) and Bcrypt for password hashing. I follow security best practices including input validation, SQL injection prevention, and secure API design.";
    }

    // Contact
    if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("hire")) {
      const email = portfolioData?.personal?.email || "smitrajsinhmakvana@gmail.com";
      const phone = portfolioData?.personal?.phone || "(+91) 9327178482";
      return `You can reach me at:\n📧 ${email}\n📱 ${phone}\n\nI'm open to new opportunities and collaborations!`;
    }

    // About
    if (msg.includes("about") || msg.includes("who are you") || msg.includes("tell me") || msg.includes("yourself")) {
      return "I'm a Full-Stack Developer specializing in building scalable and secure web applications. I develop efficient backend systems with Node.js and Express while creating modern, responsive frontends with React and Next.js. I'm currently working at Krishang Technolab.";
    }

    // Education
    if (msg.includes("education") || msg.includes("degree") || msg.includes("study")) {
      return "I'm a Full-Stack Developer focused on continuous learning. I regularly explore new technologies and apply them in both professional work and personal projects to stay current with industry trends.";
    }

    // TypeScript
    if (msg.includes("typescript") || msg.includes("type")) {
      return "Yes, I work with TypeScript for type-safe development. It helps catch errors early and improves code quality, especially in large-scale applications.";
    }

    // Default responses
    const defaultResponses = [
      "I can tell you about my skills, experience, projects, or how to contact me. What interests you?",
      "Feel free to ask about my technical skills (React, Node.js, TypeScript), work experience, or projects I've built!",
      "I'm here to help! You can ask about my expertise in frontend, backend, databases, or my professional experience.",
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your experience",
    "What projects have you built?",
    "How can I contact you?",
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open chat"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-violet-500/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaRobot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white">Portfolio Assistant</h3>
              <p className="text-xs text-violet-100">Ask me anything!</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-violet-600 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="text-xs px-3 py-1.5 bg-gray-800 text-violet-400 rounded-full hover:bg-gray-700 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-full outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
