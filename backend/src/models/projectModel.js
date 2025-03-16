import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Project", ProjectSchema);
