import { portfolioData } from "../data/portfolio.data.js";

export const getFullPortfolio = (req, res) => {
  res.json(portfolioData);
};

export const getPersonalInfo = (req, res) => {
  res.json(portfolioData.personal);
};

export const getHeroData = (req, res) => {
  res.json(portfolioData.hero);
};

export const getAboutData = (req, res) => {
  res.json(portfolioData.about);
};

export const getExperience = (req, res) => {
  res.json(portfolioData.experience);
};

export const getSkills = (req, res) => {
  res.json(portfolioData.skills);
};

export const getProjects = (req, res) => {
  res.json(portfolioData.projects);
};

export const getContactData = (req, res) => {
  res.json(portfolioData.contact);
};
