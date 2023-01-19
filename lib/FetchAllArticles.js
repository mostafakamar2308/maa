import Post from "./PostDataModel";
export const handler = async (req, res) => {
  const { nb } = req.query;
  const AllPosts = await Post.find({});
  res.status(200).json({ AllPosts: AllPosts });
};
