import mongoose from "mongoose";

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
