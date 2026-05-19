export default function Docs() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About This Portfolio</h2>
          <p className="text-gray-300 mb-4">
            This portfolio is built with modern web technologies and follows best practices 
            for both frontend and backend development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>React 19 - UI Library</li>
              <li>Vite - Build Tool</li>
              <li>Tailwind CSS - Styling</li>
              <li>Framer Motion - Animations</li>
              <li>React Router - Routing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Node.js - Runtime</li>
              <li>Express - Web Framework</li>
              <li>Nodemailer - Email Service</li>
              <li>CORS - Cross-Origin Support</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Responsive design for all devices</li>
            <li>Smooth animations and transitions</li>
            <li>Contact form with email integration</li>
            <li>RESTful API architecture</li>
            <li>Clean and maintainable code structure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`portfolio/
├── frontend/     # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── services/
│   └── package.json
│
└── backend/      # Express API
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   └── services/
    └── package.json`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
