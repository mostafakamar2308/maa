import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import InteractiveGuide from "../../components/InteractiveFlexBox.mdx";
import { themeContext } from "../../context/context";

export default function InteractiveFlexBoxGuide() {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <Head>
        <title>طريقك لفهم الFlexbox بشكل تفاعلي</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex">
        <div className="lg:w-2/3 lg:mx-auto m-4 text-white !w-screen overflow-hidden max-w-none ">
          <div className={`prose  ${theme === "dark" ? "prose-invert" : ""} `}>
            <InteractiveGuide />
          </div>
        </div>
      </div>
    </div>
  );
}
