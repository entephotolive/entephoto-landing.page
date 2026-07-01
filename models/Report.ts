import mongoose, { Schema, Document } from "mongoose";

interface IReport extends Document {
  type: "bug" | "feedback";
  name: string;
  email: string;
  message: string;
  status: "open" | "in_progress" | "resolved";
  createdAt: Date;
}

const ReportSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ["bug", "feedback"],
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000,
  },
  status: {
    type: String,
    enum: ["open", "in_progress", "resolved"],
    default: "open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema, "bug_reports");
