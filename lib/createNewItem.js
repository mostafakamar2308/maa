import Post from "./PostDataModel";
async function createArticle({
  title,
  likes,
  slug,
  description,
  tags,
  imgSrc,
}) {
  const article = await Post.create({
    title,
    likes,
    slug,
    description,
    tags,
    imgSrc,
  });
  return article;
}
export default createArticle;
