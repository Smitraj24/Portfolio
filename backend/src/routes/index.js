import express from "express";
import portfolioRoutes from "./portfolio.routes.js";
import contactRoutes from "./contact.routes.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ ok: true });
});

router.use("/portfolio", portfolioRoutes);
router.use("/contact", contactRoutes);

export default router;
