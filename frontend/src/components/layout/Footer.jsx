import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { portfolioApi } from "../../services/api";

export default function Footer() {
  const [personal, setPersonal] = useState(null);

  useEffect(() => {
    const fetchPersonal = async () => {
      try {
        const data = await portfolioApi.getPersonal();
        setPersonal(data);
      } catch (error) {
        console.error("Failed to fetch personal data:", error);
      }
    };
    fetchPersonal();
  }, []);

  return (
    <footer className="border-t border-violet-500/10 bg-[#0f0a1a] relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start gap-1.5">
              Designed & built by <span className="text-violet-400 font-semibold">{personal?.name || "Developer"}</span>
              <FaHeart className="text-pink-400/80 text-xs inline" />
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <div className="flex gap-5 text-xl text-gray-400">
            {personal?.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:text-violet-400 hover:bg-violet-500/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(167,139,250,0.25)] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {personal?.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:text-violet-400 hover:bg-violet-500/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(167,139,250,0.25)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {personal?.email && (
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl hover:text-violet-400 hover:bg-violet-500/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(167,139,250,0.25)] transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            )}
          </div>
        </div>
        <p className="text-center text-gray-600 text-xs mt-6">
          React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
