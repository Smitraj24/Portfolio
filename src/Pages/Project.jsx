import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlowBackground from "../components/GlowBackground";
import { api } from "../utils/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24 flex items-center justify-center">
        <GlowBackground />
        <p className="text-xl text-gray-400">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24">
      <GlowBackground />

      <h1 className="text-center text-4xl font-bold mb-16">
        Featured <span className="text-indigo-400">Projects</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 rounded-2xl border border-gray-800 p-8
            hover:border-indigo-500
            hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]
            transition overflow-hidden"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-2xl font-bold">{project.title}</h2>
            {project.tagline && (
              <p className="text-sm text-indigo-400 mt-1">{project.tagline}</p>
            )}
            <p className="text-gray-400 mt-3">{project.description}</p>
            
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-800 text-indigo-400 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition"
                >
                  View Project →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition"
                >
                  GitHub →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
