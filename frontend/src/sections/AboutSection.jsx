import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import { FaCode, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";
import heroImage from "../assets/images/tech/hero-image.jpg";

export default function AboutSection() {
  const values = [
    { icon: <FaCode size={32} />, title: "Clean Code", description: "Writing maintainable, scalable solutions" },
    { icon: <FaRocket size={32} />, title: "Innovation", description: "Pushing boundaries with tech" },
    { icon: <FaLightbulb size={32} />, title: "Creativity", description: "Transforming ideas into experiences" },
    { icon: <FaHeart size={32} />, title: "Passion", description: "Crafting exceptional products" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Light overlay for text readability only */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
      
      {/* Subtle blue accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20 pointer-events-none" />
      <div className=""> </div>
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting the future of web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <GlassCard delay={0.2}>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Full-Stack Developer specializing in building scalable and secure web applications.
                My journey in tech has been driven by a passion for creating immersive digital experiences.
              </p>
              <p>
                With expertise in React, Next.js, and Three.js, I develop efficient backend systems with
                Node.js and Express while creating modern, responsive frontends.
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.4}>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What I Do
            </h3>
            <div className="space-y-6">
              {[
                { emoji: "🎨", title: "Frontend Development", desc: "Creating stunning interfaces with React & Next.js" },
                { emoji: "⚙️", title: "Backend Development", desc: "Building robust APIs with Node.js & Express" },
                { emoji: "🎭", title: "3D Web Experiences", desc: "Crafting immersive 3D with Three.js & WebGL" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/40 border border-cyan-400/30">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 mb-4 text-cyan-400 shadow-lg shadow-cyan-500/50 border border-cyan-400/30">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
