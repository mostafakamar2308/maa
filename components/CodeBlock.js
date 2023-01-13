import Highlight from "react-highlight";
const CodeBlock = ({ codeText, language }) => {
  return (
    <div dir="ltr" className="relative">
      <div className="text-white absolute bg-[#1f2937] p-2 rounded-t-lg right-0 -top-5">
        {language.toUpperCase()}
      </div>
      <Highlight className={`language-${language} w-11/12 text-lg `}>
        {codeText}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
