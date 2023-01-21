import dbConnect from "../../lib/dbConnect";
import dynamic from "next/dynamic";
import Head from "next/head";
import { fetchSpecificArticle } from "../../lib/FetchSpecificArticle";
import { useContext, useState } from "react";
import { themeContext } from "../../context/context";
import LikesComponent from "../../components/LikesComponent";
import moment from "moment";

const Article = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const { theme } = useContext(themeContext);
  const DynamicMdx = dynamic(() =>
    import(`../../components/mdxFolder/${post.slug}.mdx`)
  );
  return (
    <div className="lg:p-8 p-2 py-8">
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="my-4">
        <h1 className="text-3xl border-b inline-block pl-8 pb-2">
          {post.title}
        </h1>
        <p className="p-2 text-sm opacity-60">
          {post.tags.map((tag) => (
            <span key={tag} className={"mx-1"}>
              {tag.toUpperCase()}
            </span>
          ))}
          |{moment(post.createdAt).format("YYYY/MM/DD")}
        </p>
      </div>
      <div className="md:flex text-white !w-screen overflow-hidden ">
        <div
          className={`prose lg:w-2/3 ${
            theme === "dark" ? "prose-invert" : ""
          } `}
        >
          <DynamicMdx />
        </div>
        <div className="grow relative flex items-center justify-center">
          <LikesComponent likes={likes} slug={post.slug} />
        </div>
      </div>
    </div>
  );
};
export default Article;

export async function getServerSideProps(context) {
  const { article } = context.params;
  await dbConnect();
  const articleResponse = await fetchSpecificArticle(article);
  if (!articleResponse) {
    return {
      props: {
        notFound: true,
      },
    };
  } else {
    return {
      props: {
        post: JSON.parse(JSON.stringify(articleResponse[0])),
      },
    };
  }
}
