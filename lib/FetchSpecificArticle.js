import Post from "./PostDataModel";
export const fetchSpecificArticle = async (article) => {
  const specificArticleResponse = await Post.find({ slug: article });
  return specificArticleResponse;
};
