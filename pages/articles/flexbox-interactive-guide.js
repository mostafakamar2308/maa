import Head from "next/head";
import { useContext } from "react";
import InteractiveGuide from "../../components/InteractiveFlexBox.mdx";
import { themeContext } from "../../context/context";

export default function InteractiveFlexBoxGuide() {
  const { theme } = useContext(themeContext);
  return (
    <div>
      <Head>
        <title>طريقك لفهم الFlexbox بشكل تفاعلي</title>
      </Head>
      <div className="lg:w-2/3 lg:mx-auto m-4 text-white">
        <div className={`prose  ${theme === "dark" ? "prose-invert" : ""}`}>
          <InteractiveGuide />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(){
//     const post = fetch("../api/FetchSpecificPost", {
//         query
//     })
// }
