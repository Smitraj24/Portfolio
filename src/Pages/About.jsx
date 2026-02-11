import GlowBackground from "../components/GlowBackground";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-6 py-24">
      <GlowBackground />

      {/* Header */}
      <section className="max-w-5xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Passionate Full Stack Developer focused on building modern,
          performance-driven web applications with clean UI and solid
          architecture.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-[120px]" />
          <img
            src="/src/assets/hero-image.jpg"
            alt="Profile"
            className="relative w-64 h-64 rounded-2xl object-cover border border-gray-800 shadow-neon animate-float"
          />
        </div>

        {/* Text */}
        <div className="animate-slideIn">
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-400 leading-relaxed">
            I’m a Full Stack Developer who loves turning complex problems into
            elegant digital solutions. I focus on performance, scalability, and
            clean user experience.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            My main stack includes React, Node.js, MongoDB, and Tailwind CSS. I
            enjoy building full products — from backend APIs to polished UI.
          </p>

          <div className="mt-8 flex gap-4">
            <span className="px-5 py-2 rounded-full bg-gray-900 border border-gray-800 hover:shadow-neon transition">
              🚀 Fast Learner
            </span>
            <span className="px-5 py-2 rounded-full bg-gray-900 border border-gray-800 hover:shadow-neon transition">
              💡 Problem Solver
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
