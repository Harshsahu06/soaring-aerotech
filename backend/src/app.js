import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

const app = express();

// Simple request logger middleware
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url }, "Request received");
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
