import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      const scrollY = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el?.getBoundingClientRect();
        const top = (rect?.top ?? 0) + window.scrollY;
        if (scrollY >= top) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0614]/95 backdrop-blur-xl border-violet-500/20 shadow-lg shadow-violet-500/5"
          : "bg-[#0a0614]/80 backdrop-blur-md border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="text-2xl font-bold font-display bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Smitraj.dev
        </motion.a>

        <div className="hidden md:flex gap-1">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-5 py-2.5 rounded-lg text-gray-300 font-medium transition-colors hover:text-violet-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 bg-violet-500/15 border border-violet-500/40 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.button
          className="md:hidden p-3 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          whileTap={{ scale: 0.95 }}
        >
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f0a1a]/98 border-t border-violet-500/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                    activeSection === item.id ? "text-violet-400 bg-violet-500/10" : "text-gray-300 hover:text-violet-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
