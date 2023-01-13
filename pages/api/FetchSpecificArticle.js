import dbConnect from "../../lib/dbConnect";
import Post from "../../lib/PostDataModel";

export default async function handler(req, res) {
  const { method } = req;
  const { slug } = req.query;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const post = Post.findOne({ slug });
        const sortedPosts = await post;

        res.status(200).json({ post: sortedPosts });
      } catch (error) {
        res.status(404).json({ msg: "notFound", err: error });
      }
      break;
  }
}
