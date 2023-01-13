import CodeBlock from "./CodeBlock";
import CodePenContainer from "./CodepenContainer";
import Comment from "./Comment";

const Comp = ({ meta, children }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      {children} <br></br>
      <Comment
        name={"Mostafa Kamar"}
        date={"25/12/12"}
        commentData={`وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيج`}
      />
      <Comment
        name={"Mostafa Kamar"}
        date={"25/12/12"}
        commentData={`وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيج`}
      />
      <CodeBlock
        codeText={`function foo() {
 console.log(lol) 
}`}
        language="javascript"
      />
      <CodePenContainer
        title="hello"
        htmlCode="<div>Hello</div>"
        CssCode={`div{color:red}`}
      />
      {/* <div
        dir="ltr"
        className="[&>*]:min-h-[5em] lg:w-2/3 mx-auto border border-black"
      >
        
      </div>{" "}
       */}
      <iframe
        src="https://codesandbox.io/embed/sandpack-project-qce3us?codemirror=1&fontsize=14&theme=dark&editorsize=100&highlights=6,7,8,9"
        className="w-10/12 mx-auto h-[400px] my-4 flex flex-col"
        title="sandpack-project"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};
export default Comp;
