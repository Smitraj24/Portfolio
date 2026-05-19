import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import { FaCode, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

export default function About() {
  const values = [
    {
      icon: <FaCode size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and elegant solutions",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technologies",
    },
    {
      icon: <FaLightbulb size={32} />,
      title: "Creativity",
      description: "Transforming ideas into immersive experiences",
    },
    {
      icon: <FaHeart size={32} />,
      title: "Passion",
      description: "Dedicated to crafting exceptional digital products",
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
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting the future of web experiences
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <GlassCard delay={0.2}>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Full-Stack Developer specializing in building scalable and secure web applications. 
                My journey in tech has been driven by a passion for creating immersive digital experiences 
                that blend functionality with stunning visuals.
              </p>
              <p>
                With expertise in modern frameworks like React, Next.js, and Three.js, I develop 
                efficient backend systems with Node.js and Express while creating modern, responsive 
                frontends that push the boundaries of what's possible on the web.
              </p>
              <p>
                Currently working at Krishang Technolab, I focus on writing clean, maintainable code 
                following best practices and architectural principles. I'm committed to continuous 
                learning and regularly explore new technologies to deliver high-quality software solutions.
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.4}>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-gray-400">
                    Creating stunning, responsive interfaces with React, Next.js, and modern CSS frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-gray-400">
                    Building robust APIs and server-side applications with Node.js, Express, and databases
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎭</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3D Web Experiences</h3>
                  <p className="text-gray-400">
                    Crafting immersive 3D experiences using Three.js, WebGL, and advanced animations
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 text-purple-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
