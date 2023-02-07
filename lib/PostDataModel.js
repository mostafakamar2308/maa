import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    likes: Number,
    slug: String,
    description: String,
    tags: Array,
    imgSrc: String,
    published: Boolean,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);
mongoose.models = {};
module.exports = mongoose.model("Post", PostSchema);
