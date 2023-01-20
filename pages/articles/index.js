import BestArticle from "../../components/Best Article";
import dbConnect from "../../lib/dbConnect";
import { fetchArticles } from "../../lib/FetchAllArticles";
import Head from "next/head";
import Article from "../../components/articleInArticleSection";

const Articles = ({ articles }) => {
  return (
    <div className="flex flex-wrap w-screen lg:m-4 my-4">
      <Head>
        <title>مقالات | مدارج البرمجة </title>
      </Head>
      <div className="flex flex-wrap justify-center w-full">
        {articles.map((article) => (
          <Article post={article} key={article._id} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

export async function getStaticProps() {
  await dbConnect();
  const articles = await fetchArticles();
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
}
