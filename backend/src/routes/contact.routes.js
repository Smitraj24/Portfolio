import express from "express";
import { submitContactForm, getMessages } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", submitContactForm);
router.get("/messages", getMessages);

export default router;
