import app from "./app.js";
import { logger } from "./lib/logger.js";
import { connectMongo } from "./db/index.js";

const rawPort = process.env["PORT"];
const port = rawPort ? Number(rawPort) : 3001;

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

async function main() {
  try {
    await connectMongo();
    logger.info("MongoDB connected successfully");
  } catch (err) {
    logger.warn({ err }, "MongoDB connection failed — forms will return 503 until connection is available");
  }

  app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });
}

main().catch((err) => {
  logger.error({ err }, "Failed to start server");
  process.exit(1);
});
