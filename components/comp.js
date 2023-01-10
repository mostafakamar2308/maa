import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";
const Comp = ({ meta, children }) => {
  useCodePenEmbed();
  return (
    <div>
      <h1>{meta.title}</h1>
      {children} <br></br>
      <div dir="ltr" className="[&>*]:min-h-[10em] w-1/2 mx-auto">
        <PrefillEmbed
          embedHeight="450px"
          editable
          penTitle="I am editable"
          head={
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          }
        >
          <PrefillLang lang="html">
            {stripIndent`
              <div id="lol">
                Hello
              </div>
            `}
          </PrefillLang>
          <PrefillLang lang="css">
            {stripIndent`
              <div>
                Hello
              </div>
            `}
          </PrefillLang>
          <PrefillLang lang="js">
            {stripIndent`
                document.getElementById("lol").innerHTML = "I am Edited"
              `}
          </PrefillLang>
        </PrefillEmbed>
      </div>
    </div>
  );
};
export default Comp;
