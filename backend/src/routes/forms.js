import { Router } from "express";
import { connectMongo, Submission } from "../db/index.js";
import { sendSubmissionEmail } from "../lib/email.js";

const router = Router();

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

    // Trigger email notification asynchronously
    sendSubmissionEmail({
      type,
      name,
      phone,
      email,
      subject,
      program,
      message,
    }).catch((err) => {
      console.error("Failed to send email notification:", err);
    });

    res.json({ success: true, id: doc._id });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to save submission" });
  }
});

export default router;
