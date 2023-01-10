import CodePenContainer from "./CodepenContainer";
const Comp = ({ meta, children }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      {children} <br></br>
      <div
        dir="ltr"
        className="[&>*]:min-h-[5em] !text-2xl w-1/2 mx-auto border border-black"
      >
        <CodePenContainer
          title="hello"
          htmlCode="<div>Hello</div>"
          CssCode={`div{color:red}`}
        />
      </div>
    </div>
  );
};
export default Comp;
