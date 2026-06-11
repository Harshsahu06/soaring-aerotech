import { Router, type IRouter } from "express";
import { connectMongo } from "../lib/mongodb";
import { Submission } from "../models/submission";

const router: IRouter = Router();

router.post("/submit", async (req, res) => {
  try {
    await connectMongo();

    const { type, name, phone, email, subject, program, message } = req.body;

    if (!type || !name || !phone) {
      res.status(400).json({ success: false, error: "name and phone are required" });
      return;
    }

    const doc = await Submission.create({
      type,
      name,
      phone,
      email,
      subject,
      program,
      message,
    });

    res.json({ success: true, id: doc._id });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to save submission" });
  }
});

export default router;
