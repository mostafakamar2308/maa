import Highlight from "react-highlight";
import "highlight.js/styles/felipec.css";
const CodeBlock = ({ codeText, language }) => {
  return (
    <div dir="ltr">
      <Highlight
        className={`language-${language} lg:w-1/2 mx-auto m-1 w-11/12 text-lg md:text-xl`}
      >
        {codeText}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
