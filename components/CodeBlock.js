import { useContext } from "react";
import Highlight from "react-highlight";
import { themeContext } from "../context/context";
const CodeBlock = ({ codeText, language }) => {
  const { theme } = useContext(themeContext);
  return (
    <div dir="ltr" className="relative  mt-8">
      <div
        className={`text-white font-cousin absolute  p-2 rounded-t-lg   ${
          theme === "dark" ? "bg-[#090b11]" : "bg-[#1f2937]"
        } right-0 -top-8 `}
      >
        {language.toUpperCase()}
      </div>
      <Highlight
        language={language}
        className={`language-${language} w-11/12 text-lg `}
      >
        {codeText}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
