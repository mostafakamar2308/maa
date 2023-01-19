import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import InteractiveGuide from "../../components/InteractiveFlexBox.mdx";
import { themeContext } from "../../context/context";

export default function InteractiveFlexBoxGuide() {
  const router = useRouter();
  const { theme } = useContext(themeContext);
  return (
    <div>
      <Head>
        <title>طريقك لفهم الFlexbox بشكل تفاعلي</title>
      </Head>
      <div className="flex">
        <div className="lg:w-2/3 lg:mx-auto m-4 text-white">
          <div className={`prose  ${theme === "dark" ? "prose-invert" : ""}`}>
            <InteractiveGuide />
          </div>
        </div>
        <div>
          {/* <a href={`https://www.facebook.com/sharer.php?u=${router.pathname}`}>
            facebook
          </a> */}
        </div>
      </div>
    </div>
  );
}
