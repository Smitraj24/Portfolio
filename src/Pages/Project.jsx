import { motion } from "framer-motion";
import GlowBackground from "../components/GlowBackground";

const projects = [
  {
    title: "Wanderlust",
    tech: "Node.js • MongoDB • Passport.js",
    desc: "Full-stack travel platform with authentication and CRUD features.",
  },
  {
    title: "Zerodha Clone",
    tech: "React • Tailwind",
    desc: "Pixel-perfect frontend clone with modern UI.",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24">
      <GlowBackground />

      <h1 className="text-center text-4xl font-bold mb-16">
        Featured <span className="text-indigo-400">Projects</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 rounded-2xl border border-gray-800 p-8
            hover:border-indigo-500
            hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]
            transition"
          >
            <h2 className="text-2xl font-bold">{p.title}</h2>
            <p className="text-gray-400 mt-3">{p.desc}</p>
            <p className="mt-4 text-indigo-400 text-sm">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
