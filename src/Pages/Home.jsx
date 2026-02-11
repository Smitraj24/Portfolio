import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCheck,
} from "react-icons/fa";
import {
  personal,
  hero,
  about,
  skills,
  projects,
  contact,
} from "../data/resume";
import BackgroundAnimation from "../components/BackgroundAnimation";

import reactLogo from "../assets/tech/react.png";
import nodeLogo from "../assets/tech/node.png";
import mongoLogo from "../assets/tech/mongo.png";
import jsLogo from "../assets/tech/js.png";
import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";

const localTechImages = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: jsLogo,
  "React.js": reactLogo,
  "Node.js": nodeLogo,
  MongoDB: mongoLogo,
};

function getSkillImage(skill) {
  if (skill.url) return skill.url;
  return localTechImages[skill.name] || null;
}

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const hoverColors = [
  "hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
  "hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",
  "hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
  "hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]",
  "hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]",
  "hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]",
];

export default function Home() {
  const [contactStatus, setContactStatus] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setContactStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setContactStatus("success");
        form.reset();
        setTimeout(() => setContactStatus(null), 3000);
      } else setContactStatus("error");
    } catch {
      setContactStatus("error");
    }
  };

  return (
    <div className="bg-[#0a0614] text-white overflow-x-hidden relative">
      <BackgroundAnimation />
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-violet-400 font-semibold tracking-widest uppercase text-base md:text-lg mb-6 font-display"
          >
            {hero.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight font-display"
          >
            {hero.greeting}{" "}
            <span className="hero-name block sm:inline mt-2 sm:mt-0">{hero.nameHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-amber-400/90 font-medium text-base md:text-lg"
          >
            Build · Ship · Iterate
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-gray-300 text-xl md:text-2xl leading-relaxed"
          >
            {hero.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-500 text-lg max-w-xl mx-auto"
          >
            {personal.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              {hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-secondary"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 py-28 bg-[#0f0a1a] relative z-10"
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 font-display bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent"
          >
            {about.headline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {p}
              </p>
            ))}
            <ul className="grid sm:grid-cols-2 gap-4 pt-4">
              {about.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-gray-300 text-lg"
                >
                  <span className="text-violet-400 shrink-0"><FaCheck /></span>
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="min-h-screen px-6 py-28 bg-[#0a0614] flex items-center relative z-10"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center font-display bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent"
          >
            Skills & tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center text-lg md:text-xl max-w-2xl mx-auto mb-16"
          >
            {skills.description}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          >
            {skills.list.map((skill, i) => {
              const imgSrc = getSkillImage(skill);
              return (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className={`bg-[#1a1225] p-8 rounded-2xl border border-violet-500/20 shadow-lg transition-all duration-300 hover:-translate-y-2 ${hoverColors[i % hoverColors.length]}`}
                >
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={skill.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-sm">
                      {skill.name.slice(0, 2)}
                    </div>
                  )}
                  <p className="text-center font-semibold text-base">{skill.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-display bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
              Tools & concepts
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.tools.map((tool, i) => (
                <div
                  key={tool}
                  className={`px-6 py-3 rounded-xl border border-violet-500/20 bg-[#1a1225] text-gray-300 font-medium transition-all duration-300 hover:-translate-y-2 ${hoverColors[i % hoverColors.length]}`}
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="min-h-screen px-6 py-28 bg-[#0f0a1a] relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8 text-center font-display bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center text-lg mb-20 max-w-2xl mx-auto"
          >
            Full-stack applications I've built from scratch—auth, APIs, and responsive UIs.
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={item}
                className={`group bg-[#1a1225] rounded-2xl overflow-hidden border border-violet-500/20 shadow-xl transition-all duration-300 hover:-translate-y-2 ${hoverColors[i % hoverColors.length]}`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{proj.title}</h3>
                  <p className="text-violet-400/90 font-medium mt-1">{proj.tagline}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-sm px-3 py-1.5 rounded-lg bg-violet-500/15 text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mt-5 text-base leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.highlights && (
                    <ul className="mt-5 space-y-2">
                      {proj.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                          <FaCheck className="text-violet-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 flex gap-6">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-amber-400 font-medium transition-colors"
                    >
                      View project <FaExternalLinkAlt className="text-sm" />
                    </a>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-28 bg-[#0a0614] relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 text-center font-display bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent"
        >
          {contact.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl mb-14 text-center max-w-2xl"
        >
          {contact.subtext}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleContactSubmit}
          className="w-full max-w-lg space-y-5 mb-16"
        >
          <input
            type="text"
            name="name"
            required
            placeholder={contact.formPlaceholders.name}
            className="w-full px-5 py-4 text-lg rounded-2xl bg-[#1a1225] border-2 border-violet-500/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={contact.formPlaceholders.email}
            className="w-full px-5 py-4 text-lg rounded-2xl bg-[#1a1225] border-2 border-violet-500/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder={contact.formPlaceholders.message}
            className="w-full px-5 py-4 text-lg rounded-2xl bg-[#1a1225] border-2 border-violet-500/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition resize-none"
          />
          <button
            type="submit"
            disabled={contactStatus === "sending"}
            className="btn-primary w-full py-4 text-lg rounded-2xl"
          >
            {contactStatus === "sending"
              ? contact.buttonSending
              : contactStatus === "success"
                ? contact.buttonSuccess
                : contactStatus === "error"
                  ? contact.buttonError
                  : contact.buttonSend}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 text-3xl"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="btn-social"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
        <p className="mt-8 text-gray-500 text-base">
          {personal.email} · {personal.phone}
        </p>
      </section>
    </div>
  );
}
