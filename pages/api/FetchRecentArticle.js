import dbConnect from "../../lib/dbConnect";
import Post from "../../lib/PostDataModel";

export default async function handler(req, res) {
  const { method } = req;
  const { numb } = req.query;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const post = Post.find({}).sort("-createdAt");
        const sortedPosts = await post;
        if (!numb) {
          res.status(200).json({ post: sortedPosts });
        }
        res.status(200).json({ post: sortedPosts.slice(0, numb) });
      } catch (error) {
        res.status(404).json({ msg: "notFound", err: error });
      }
      break;
  }
}
