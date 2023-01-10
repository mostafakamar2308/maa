import CodePenContainer from "./CodepenContainer";
import Highlight from "react-highlight";
import "highlight.js/styles/felipec.css";
import CodeBlock from "./CodeBlock";

const Comp = ({ meta, children }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      {children} <br></br>
      <CodeBlock
        codeText={`function foo() {
 console.log(lol) 
}`}
        language="javascript"
      />
      {/* <div
        dir="ltr"
        className="[&>*]:min-h-[5em] lg:w-2/3 mx-auto border border-black"
      >
        <CodePenContainer
          title="hello"
          htmlCode="<div>Hello</div>"
          CssCode={`div{color:red}`}
        />
      </div>{" "}
       */}
    </div>
  );
};
export default Comp;
