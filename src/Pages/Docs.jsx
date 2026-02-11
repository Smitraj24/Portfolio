import React from "react";

function Docs() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Project Documentation
        </h1>
        <p className="text-gray-400 mb-10">
          Complete guide to understand features, structure, and usage.
        </p>

        {/* Section 1 */}
        <section className="mb-8 bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">📌 Overview</h2>
          <p className="text-gray-400">
            This project is built using React and Tailwind CSS with a modern
            dark-mode UI and responsive design.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8 bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">⚙️ Tech Stack</h2>
          <ul className="list-disc ml-6 text-gray-400">
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8 bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
          <ul className="list-disc ml-6 text-gray-400">
            <li>Sticky-free navbar</li>
            <li>Mobile responsive menu</li>
            <li>Contact form</li>
            <li>Dark mode UI</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">🚀 How to Use</h2>
          <p className="text-gray-400">
            Navigate using the menu. Click “Contact Us” to send a message. View
            documentation anytime from the Docs button.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Docs;
