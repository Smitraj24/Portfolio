import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { api } from "../utils/api";

// Import local assets
import htmlImg from "../assets/tech/html.png";
import cssImg from "../assets/tech/css.png";
import jsImg from "../assets/tech/js.png";
import reactImg from "../assets/tech/react.png";
import nodeImg from "../assets/tech/node.png";
import mongoImg from "../assets/tech/mongo.png";
import tailwindImg from "../assets/tech/tailwind.png";
import githubImg from "../assets/tools/github.png";
import vscodeImg from "../assets/tools/vscode.png";

// Map skill names to local images
const localImages = {
  HTML: htmlImg,
  CSS: cssImg,
  JavaScript: jsImg,
  "React.js": reactImg,
  "Node.js": nodeImg,
  MongoDB: mongoImg,
  Tailwind: tailwindImg,
  GitHub: githubImg,
  "VS Code": vscodeImg,
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await api.getSkills();
        setSkillsData(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 flex items-center justify-center">
        <p className="text-xl text-gray-400">Loading skills...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6 text-blue-400"
      >
        Skills
      </motion.h2>

      {skillsData?.description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          {skillsData.description}
        </motion.p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {skillsData?.list?.map((skill, i) => {
          const imgSrc = skill.url || localImages[skill.name];
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0b153d] border border-blue-900 rounded-xl p-4 text-center shadow-lg"
            >
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto mb-3 object-contain"
                />
              )}
              <h3 className="font-semibold text-white text-sm">{skill.name}</h3>
            </motion.div>
          );
        })}
      </div>

      {skillsData?.tools && skillsData.tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Tools & More</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
