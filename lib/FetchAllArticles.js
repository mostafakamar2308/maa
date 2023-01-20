import Post from "./PostDataModel";
export const fetchArticles = async () => {
  const AllPostsResponse = await Post.find({}).sort("-createdAt").lean();
  return AllPostsResponse;
};
