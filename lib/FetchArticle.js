import Post from "./PostDataModel";
export const fetchBestArticle = async () => {
  const bestArticleResponse = await Post.find({}).sort("-likes").lean();
  return bestArticleResponse[0];
};
