import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    likes: Number,
    slug: String,
    description: String,
    tags: Array,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);
module.exports = mongoose.model.Post || mongoose.model("Post", PostSchema);
