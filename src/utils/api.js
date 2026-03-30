// API utility for backend communication
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const api = {
  // Fetch all portfolio data
  getPortfolio: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio`);
    if (!response.ok) throw new Error("Failed to fetch portfolio data");
    return response.json();
  },

  // Fetch specific sections
  getPersonal: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/personal`);
    if (!response.ok) throw new Error("Failed to fetch personal data");
    return response.json();
  },

  getHero: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/hero`);
    if (!response.ok) throw new Error("Failed to fetch hero data");
    return response.json();
  },

  getAbout: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/about`);
    if (!response.ok) throw new Error("Failed to fetch about data");
    return response.json();
  },

  getExperience: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/experience`);
    if (!response.ok) throw new Error("Failed to fetch experience data");
    return response.json();
  },

  getSkills: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/skills`);
    if (!response.ok) throw new Error("Failed to fetch skills data");
    return response.json();
  },

  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/projects`);
    if (!response.ok) throw new Error("Failed to fetch projects data");
    return response.json();
  },

  getContactInfo: async () => {
    const response = await fetch(`${API_BASE_URL}/api/portfolio/contact`);
    if (!response.ok) throw new Error("Failed to fetch contact data");
    return response.json();
  },

  // Submit contact form
  submitContact: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to send message");
    }
    return response.json();
  },

  // Health check
  checkHealth: async () => {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    if (!response.ok) throw new Error("API health check failed");
    return response.json();
  },
};
