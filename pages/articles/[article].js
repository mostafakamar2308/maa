import dbConnect from "../../lib/dbConnect";
import dynamic from "next/dynamic";
import Head from "next/head";
import { fetchSpecificArticle } from "../../lib/FetchSpecificArticle";
import { useContext, useMemo, useState } from "react";
import { themeContext } from "../../context/context";
import Image from "next/image";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import moment from "moment";

const Article = ({ post }) => {
  const { theme } = useContext(themeContext);

  const DynamicMdx = useMemo(() => {
    return dynamic(() => import(`../../components/mdxFolder/${post.slug}.mdx`));
  }, [post.slug]);
  console.log(DynamicMdx);
  return (
    <div className="lg:p-8 p-2 py-8">
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={post.title} />
        <meta name="description" content={post.description} />
        {/* Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.madaregprogramming.live/articles/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.imgSrc} />
        {/* Twitter meta tags */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.madaregprogramming.live/articles/${post.slug}`}
        />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.description} />
        <meta property="twitter:image" content={post.imgSrc} />
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
      <div className="md:flex text-white !w-screen overflow-hidden relative">
        <div
          className={`prose lg:w-2/3 ${
            theme === "dark" ? "prose-invert" : ""
          } `}
        >
          <DynamicMdx />
        </div>
        <div className="flex flex-col items-end fixed left-0 top-1/2">
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.madaregprogramming.live/articles/${post.slug}`}
          >
            <Image
              src={facebook}
              alt="share on facebook"
              width="50"
              height={50}
            ></Image>{" "}
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.madaregprogramming.live/articles/${post.slug}`}
          >
            <Image
              src={linkedin}
              alt="share on facebook"
              width="50"
              height={50}
            ></Image>{" "}
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?text=https%3A//www.madaregprogramming.live/articles/${post.slug}`}
          >
            {" "}
            <Image
              src={twitter}
              alt="share on facebook"
              width="50"
              height={50}
            ></Image>{" "}
          </a>
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
