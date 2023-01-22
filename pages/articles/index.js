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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={`مقالات | مدارج البرمجة`} />
        <meta
          name="description"
          content={
            "مدارج البرمجة هي مدونة تسعي الي رفع كفاءة المطور العربي، عن طريق شرح المفاهيم والتقنيات وكيفية استخدامها علي أرض الواقع بطريقة تفاعلية باللغة العربية"
          }
        />
        {/* Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.madaregprogramming.live/articles`}
        />
        <meta property="og:title" content={`مقالات | مدارج البرمجة`} />
        <meta
          property="og:description"
          content={
            "مدارج البرمجة هي مدونة تسعي الي رفع كفاءة المطور العربي، عن طريق شرح المفاهيم والتقنيات وكيفية استخدامها علي أرض الواقع بطريقة تفاعلية باللغة العربية"
          }
        />
        {/* Twitter meta tags */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.madaregprogramming.live/articles`}
        />
        <meta property="twitter:title" content={`مقالات | مدارج البرمجة`} />
        <meta
          property="twitter:description"
          content={
            "مدارج البرمجة هي مدونة تسعي الي رفع كفاءة المطور العربي، عن طريق شرح المفاهيم والتقنيات وكيفية استخدامها علي أرض الواقع بطريقة تفاعلية باللغة العربية"
          }
        />
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
