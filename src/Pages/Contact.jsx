import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [contactInfo, setContactInfo] = useState(null);
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    // Fetch contact and personal info from backend
    const fetchData = async () => {
      try {
        const [contact, personal] = await Promise.all([
          api.getContactInfo(),
          api.getPersonal(),
        ]);
        setContactInfo(contact);
        setPersonalInfo(personal);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await api.submitContact(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 px-4 py-10 min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center rounded-2xl bg-gray-800 shadow-lg p-10">
        <h1 className="text-white font-bold text-4xl">
          {contactInfo?.headline || "Contact Me"}
        </h1>
        <p className="mt-4 text-gray-400">
          {contactInfo?.subtext || "Have a project or idea? Let's connect."}
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
            <p>📧 Email: {personalInfo?.email || "Loading..."}</p>
            <p>📞 Phone: {personalInfo?.phone || "Loading..."}</p>
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
              placeholder={contactInfo?.formPlaceholders?.name || "Your Name"}
              value={formData.name}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            />

            <input
              type="email"
              name="email"
              required
              placeholder={contactInfo?.formPlaceholders?.email || "Your Email"}
              value={formData.email}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder={contactInfo?.formPlaceholders?.message || "Your Message"}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg
              outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 text-lg rounded-2xl transition-all ${
                status === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : status === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "btn-primary"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === "sending" && (contactInfo?.buttonSending || "Sending...")}
              {status === "success" && (contactInfo?.buttonSuccess || "Message sent!")}
              {status === "error" && (contactInfo?.buttonError || "Failed - try again")}
              {status === "idle" && (contactInfo?.buttonSend || "Send Message")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
