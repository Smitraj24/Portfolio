import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake submit (no email, no backend)
    alert(
      `Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    );

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-gray-100 px-4 py-10 min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center rounded-2xl bg-gray-800 shadow-lg p-10">
        <h1 className="text-white font-bold text-4xl">Contact Me</h1>
        <p className="mt-4 text-gray-400">
          Have a project or idea? Let’s connect.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div
          className="bg-gray-900 rounded-xl p-8 border border-gray-700
          transform transition-all duration-300
          hover:-translate-y-2
          hover:border-indigo-500
          hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
        >
          <h2 className="font-bold text-2xl mb-4">Get in Touch</h2>

          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaboration, freelance work, or
            questions.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 Email: smitraj@example.com</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Location: Ahmedabad, India</p>
          </div>
        </div>

        {/* Form */}
        <div
          className="bg-gray-900 rounded-xl p-8 border border-gray-700
          transform transition-all duration-300
          hover:-translate-y-2
          hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        >
          <h2 className="font-bold text-2xl mb-6">Send a Message</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-lg rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
