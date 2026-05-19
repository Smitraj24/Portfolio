import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      title: "Villa Vista",
      tagline: "Vacation Rental Platform",
      description: "A full-stack vacation rental platform inspired by Airbnb with secure authentication, CRUD operations, and real-time booking system.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      github: "https://github.com/Smitraj24/wanderlust",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mini Weather App",
      tagline: "Real-time Weather",
      description: "A minimal weather application with city search, real-time data fetching, and clean responsive UI design.",
      tech: ["React.js", "API", "CSS"],
      image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800&q=80",
      github: "https://github.com/Smitraj24/Weather-App-mini-Project",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Password Manager",
      tagline: "Secure Credential Storage",
      description: "Secure password management system with Bcrypt encryption, user authentication, and intuitive interface.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      github: "https://github.com/Smitraj24/PasswordManager",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Zerodha Clone",
      tagline: "Trading Dashboard UI",
      description: "Front-end clone of Zerodha's trading platform with responsive design and professional interface.",
      tech: ["React.js", "Node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      github: "https://github.com/Smitraj24/Zerodha-Clone",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 h-64">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more?</p>
          <motion.a
            href="https://github.com/Smitraj24"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
