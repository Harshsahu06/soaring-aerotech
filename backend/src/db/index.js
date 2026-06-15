import mongoose from "mongoose";
import dns from "node:dns";

// Bypass querySrv ECONNREFUSED error on local network routers/VPNs by forcing Node to use public DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectMongo() {
  const MONGODB_URI = process.env["MONGODB_URI"];

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is required");
  }

  if (mongoose.connection.readyState === 1) return mongoose.connection;

  return await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 8000,
    connectTimeoutMS: 8000,
  });
}

export * from "./models/submission.js";
export { mongoose };
