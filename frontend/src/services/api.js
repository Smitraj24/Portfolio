const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

class ApiService {
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }
}

export const api = new ApiService();

// Portfolio API
export const portfolioApi = {
  getAll: () => api.get("/portfolio"),
  getPersonal: () => api.get("/portfolio/personal"),
  getHero: () => api.get("/portfolio/hero"),
  getAbout: () => api.get("/portfolio/about"),
  getExperience: () => api.get("/portfolio/experience"),
  getSkills: () => api.get("/portfolio/skills"),
  getProjects: () => api.get("/portfolio/projects"),
  getContact: () => api.get("/portfolio/contact"),
};

// Contact API
export const contactApi = {
  submit: (data) => api.post("/contact", data),
};
