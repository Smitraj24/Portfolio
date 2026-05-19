import express from "express";
import "dotenv/config";
import cors from "cors";
import { corsOptions } from "./src/config/cors.config.js";
import { requestLogger } from "./src/middleware/logger.js";
import { errorHandler, notFoundHandler } from "./src/middleware/errorHandler.js";
import routes from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(requestLogger); 

// Routes
app.use("/api", routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Portfolio Is  running on this ${PORT}`);
});
