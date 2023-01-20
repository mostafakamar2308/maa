import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
} from "react-codepen-prefill-embed";

const CodePenContainer = ({ htmlCode, CssCode, jsCode, title }) => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      embedHeight="300px"
      editable
      penTitle={title}
      themeId={"31525"}
      defaultTabs={["css", "result"]}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
    >
      {htmlCode && <PrefillLang lang="html">{htmlCode}</PrefillLang>}

      {CssCode && <PrefillLang lang="css">{CssCode}</PrefillLang>}
      {jsCode && <PrefillLang lang="js">{jsCode}</PrefillLang>}
    </PrefillEmbed>
  );
};
export default CodePenContainer;

//31525
//sir
//1 => Light
//yellow: 2
//3
// red:23657
//white: 24457 => Dark
