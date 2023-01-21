import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import InteractiveGuide from "../../components/InteractiveFlexBox.mdx";
import { themeContext } from "../context/context";
import { useRouter } from "next/router";
import { fetchSpecificArticle } from "../lib/FetchSpecificArticle";
import dbConnect from "../lib/dbConnect";

export default function InteractiveFlexBoxGuide({ likesCounter }) {
  const { theme } = useContext(themeContext);
  const [likes, setLikes] = useState(likesCounter || 0);
  const router = useRouter();
  console.log(router.pathname.split("/")[2]);

  return (
    <div>
      <Head>
        <title>طريقك لفهم الFlexbox بشكل تفاعلي</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex">
        <div className="text-white !w-screen overflow-hidden flex ">
          <div
            className={`prose lg:p-8 p-4 py-8 lg:w-3/4 ${
              theme === "dark" ? "prose-invert" : ""
            } `}
          >
            <InteractiveGuide />
          </div>
          <div className="textCenter">{likes}</div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  await dbConnect();
  const likes = await fetchSpecificArticle({});
  return {
    props: {},
  };
}
