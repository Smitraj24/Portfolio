import { motion } from "framer-motion";
import HolographicCard from "../components/ui/HolographicCard";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiGit, SiDocker } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact />, level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95, color: "from-cyan-300 to-blue-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 90, color: "from-green-400 to-green-600" },
        { name: "Express", icon: <SiExpress />, level: 88, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "from-green-400 to-green-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, color: "from-blue-400 to-blue-600" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit />, level: 90, color: "from-orange-400 to-red-500" },
        { name: "Docker", icon: <SiDocker />, level: 75, color: "from-blue-400 to-blue-600" },
      ],
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
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I work with to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
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

                      {/* Progress bar */}
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
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              Currently diving deeper into WebGL, GSAP animations, and advanced Three.js techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
