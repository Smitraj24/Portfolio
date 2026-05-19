import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/features/chatbot/Chatbot";
import IsometricWorld from "./components/3d/IsometricWorld";
import LoadingScreen from "./components/ui/LoadingScreen";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("home"); // "home" or "3d"

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    setView("home");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
      ) : (
        <div key="app" className="min-h-screen bg-black text-white overflow-x-hidden">
          {view === "3d" ? (
            <>
              {/* 3D Isometric World View */}
              <IsometricWorld onSectionClick={scrollToSection} />
              
              {/* Toggle Button */}
              <button
                onClick={() => setView("home")}
                className="fixed top-24 right-6 z-50 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 transition-all duration-300"
              >
                Back to Portfolio
              </button>
            </>
          ) : (
            <>
              {/* Main Content */}
              <div className="relative z-10">
                <Navbar />
                
                {/* Toggle Button */}
                <button
                  onClick={() => setView("3d")}
                  className="fixed top-24 right-6 z-50 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 transition-all duration-300"
                >
                  3D World View
                </button>
                
                {/* All sections in one scrollable page */}
                <main>
                  <HeroSection />
                  <AboutSection />
                  <SkillsSection />
                  <ProjectsSection />
                  <ContactSection />
                </main>
                
                <Footer />
                <Chatbot />
              </div>
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
