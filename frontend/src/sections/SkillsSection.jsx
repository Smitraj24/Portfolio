import { motion } from "framer-motion";
import HolographicCard from "../components/ui/HolographicCard";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiPostgresql } from "react-icons/si";
import heroImage from "../assets/images/tech/hero-image.jpg";

export default function SkillsSection() {
  const skills = [
    { name: "React", icon: <SiReact />, level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 90, color: "from-gray-400 to-gray-600" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 95, color: "from-cyan-300 to-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs />, level: 90, color: "from-green-400 to-green-600" },
    { name: "Express", icon: <SiExpress />, level: 88, color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "from-green-400 to-green-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, color: "from-blue-400 to-blue-600" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I work with to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <HolographicCard key={skill.name} className="h-full">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} mb-4 text-white text-4xl`}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>

                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
              </motion.div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
