import dbConnect from "../../lib/dbConnect";
import Post from "../../lib/PostDataModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({});
        res.status(200).json({ postsArr: posts });
      } catch (error) {
        res.status(400).json({ err: error });
      }
      break;
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
