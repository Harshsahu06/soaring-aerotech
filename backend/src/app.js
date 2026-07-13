import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";
import { connectMongo } from "./db/index.js";

const app = express();

// Simple request logger middleware
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url }, "Request received");
  next();
});

// Auto-connect MongoDB on incoming serverless function requests
app.use(async (req, res, next) => {
  try {
    await connectMongo();
  } catch (err) {
    logger.warn({ err }, "MongoDB connection failed in request middleware");
  }
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.get("/",(req,res)=>{
  let response={
    "status":"Success"
  };
  res.json(response);
});
export default app;
