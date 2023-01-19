import Highlight from "react-highlight";
const CodeBlock = ({ codeText, language }) => {
  return (
    <div dir="ltr" className="relative">
      <div className="text-white font-cousin absolute bg-[#090b11] p-2 rounded-t-lg right-0 -top-5">
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
