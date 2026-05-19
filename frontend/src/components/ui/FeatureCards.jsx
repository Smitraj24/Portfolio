import { motion } from "framer-motion";

const items = [
  { title: "Clean Code", color: "indigo" },
  { title: "Modern UI", color: "purple" },
  { title: "High Performance", color: "pink" },
];

export default function FeatureCards() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`bg-gray-900 border border-gray-800 rounded-2xl p-8
            hover:border-${item.color}-500
            hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
            transition`}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400 mt-3">
              Professional-grade development focused on quality and scalability.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
