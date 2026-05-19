import express from "express";
import {
  getFullPortfolio,
  getPersonalInfo,
  getHeroData,
  getAboutData,
  getExperience,
  getSkills,
  getProjects,
  getContactData,
} from "../controllers/portfolio.controller.js";

const router = express.Router();

router.get("/", getFullPortfolio);
router.get("/personal", getPersonalInfo);
router.get("/hero", getHeroData);
router.get("/about", getAboutData);
router.get("/experience", getExperience);
router.get("/skills", getSkills);
router.get("/projects", getProjects);
router.get("/contact", getContactData);

export default router;
