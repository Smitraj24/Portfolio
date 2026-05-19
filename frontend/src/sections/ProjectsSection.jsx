import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import heroImage from "../assets/images/tech/hero-image.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Villa Vista",
      tagline: "Vacation Rental Platform",
      description: "Full-stack vacation rental platform with secure authentication and real-time booking.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      github: "https://github.com/Smitraj24/wanderlust",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mini Weather App",
      tagline: "Real-time Weather",
      description: "Weather application with city search and real-time data fetching.",
      tech: ["React.js", "API", "CSS"],
      image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800&q=80",
      github: "https://github.com/Smitraj24/Weather-App-mini-Project",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Password Manager",
      tagline: "Secure Credential Storage",
      description: "Secure password management with Bcrypt encryption and user authentication.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      github: "https://github.com/Smitraj24/PasswordManager",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Zerodha Clone",
      tagline: "Trading Dashboard UI",
      description: "Front-end clone of trading platform with responsive design.",
      tech: ["React.js", "Node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      github: "https://github.com/Smitraj24/Zerodha-Clone",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.title} delay={index * 0.1}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="group">
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

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-gray-400 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border-2 border-purple-400/50 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
