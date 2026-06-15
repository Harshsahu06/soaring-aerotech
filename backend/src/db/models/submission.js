import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["contact", "enrollment"],
      required: true,
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    subject: { type: String },
    program: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export const Submission =
  mongoose.models["Submission"] ||
  mongoose.model("Submission", submissionSchema);
