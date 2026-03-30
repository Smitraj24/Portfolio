import { useState, useEffect } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import GlowBackground from "../components/GlowBackground";
import { api } from "../utils/api";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const [about, experience] = await Promise.all([
          api.getAbout(),
          api.getExperience(),
        ]);
        setAboutData(about);
        setExperienceData(experience);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24 flex items-center justify-center">
        <GlowBackground />
        <p className="text-xl text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24">
      <GlowBackground />

      {/* Header */}
      <section className="max-w-5xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold">
          {aboutData?.headline?.split(" ")[0] || "About"}{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            {aboutData?.headline?.split(" ").slice(1).join(" ") || "Me"}
          </span>
        </h1>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-[120px]" />
            <img
              src="/src/assets/tech/hero-image.jpg"
              alt="Profile"
              className="relative w-64 h-64 rounded-2xl object-cover border border-gray-800 shadow-neon animate-float"
            />
          </div>

          {/* Text */}
          <div className="animate-slideIn">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            
            {aboutData?.paragraphs?.map((paragraph, idx) => (
              <p key={idx} className="text-gray-400 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {aboutData?.highlights && aboutData.highlights.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-400">Key Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aboutData.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500 hover:shadow-neon transition text-sm"
                    >
                      ✓ {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {experienceData && experienceData.length > 0 && (
        <section className="max-w-6xl mx-auto mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-indigo-500 hover:shadow-neon transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold mt-2">
                      <FaBriefcase className="text-sm" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt className="text-sm" />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-400 mb-6">{exp.description}</p>
                )}

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-400">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 text-indigo-400 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
