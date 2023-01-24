import Head from "next/head";
import Contact from "../components/Contact";
import HR from "../components/HR";
import Intro from "../components/Intro";
import RecentSection from "../components/RecentArticlesSections";
import dbConnect from "../lib/dbConnect";
import { fetchArticles } from "../lib/FetchAllArticles";
import { fetchBestArticle } from "../lib/FetchArticle";

export default function Home({ bestPost, recentPosts }) {
  return (
    <div>
      <Head>
        <title>مدارج البرمجة</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="مدارج البرمجة، هي مدونة تفاعلية، تسعي الي رفع كفاءة المطور العربي، عن طريق شرح التقنيات والمفاهيم بطريقة تفاعلية وباللغة العربية"
        />
        <meta name="title" content={`مقالات | مدارج البرمجة`} />

        {/* Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.madaregprogramming.live`}
        />
        <meta property="og:title" content={`مدارج البرمجة`} />
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
        <meta property="twitter:title" content={`مدارج البرمجة`} />
        <meta
          property="twitter:description"
          content={
            "مدارج البرمجة هي مدونة تسعي الي رفع كفاءة المطور العربي، عن طريق شرح المفاهيم والتقنيات وكيفية استخدامها علي أرض الواقع بطريقة تفاعلية باللغة العربية"
          }
        />
      </Head>
      <div>
        <Intro bestPost={bestPost} />

        <HR />

        <RecentSection recentPosts={recentPosts} />

        <HR />
        <Contact />
        <HR />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  await dbConnect();
  const posts = await fetchArticles();
  const bestPost = await fetchBestArticle();

  return {
    props: {
      bestPost: JSON.parse(JSON.stringify(bestPost)),
      recentPosts: JSON.parse(JSON.stringify(posts.slice(0, 3))),
    },
    revalidate: 10,
  };
}
