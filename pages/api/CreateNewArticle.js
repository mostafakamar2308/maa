import Post from "../../lib/PostDataModel";
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
