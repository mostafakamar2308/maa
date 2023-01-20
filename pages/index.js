import Head from "next/head";
import GiftSection from "../components/Gift";
import HR from "../components/HR";
import Intro from "../components/Intro";
import RecentSection from "../components/RecentArticlesSections";
import Post from "../lib/PostDataModel";
import dbConnect from "../lib/dbConnect";
import { fetchArticles } from "../lib/FetchAllArticles";
import { fetchBestArticle } from "../lib/FetchArticle";

export default function Home({ bestPost, recentPosts }) {
  return (
    <div>
      <Head>
        <title>مدارج البرمجة</title>
        <meta
          name="description"
          content="مدارج البرمجة، هي مدونة تفاعلية، تسعي الي رفع كفاءة المطور العربي، عن طريق شرح التقنيات والمفاهيم بطريقة تفاعلية وباللغة العربية"
        />
      </Head>
      <div>
        <Intro bestPost={bestPost} />

        <HR />

        <RecentSection recentPosts={recentPosts} />

        <HR />
        <GiftSection />
        <HR />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  await dbConnect();
  const posts = await fetchArticles();
  const bestPost = await fetchBestArticle();
  // console.log();
  // const bestPost = await fetch("http://localhost:3000/api/FetchBestArticle");
  // const bestPostResponse = await bestPost.json();
  // const recentPosts = await fetch(
  //   "http://localhost:3000/api/FetchRecentArticle?numb=3"
  // );
  // const recentPostsResponse = await recentPosts.json();
  return {
    props: {
      bestPost: JSON.parse(JSON.stringify(bestPost)),
      recentPosts: JSON.parse(JSON.stringify(posts.slice(0, 3))),
    },
    revalidate: 10,
  };
}
