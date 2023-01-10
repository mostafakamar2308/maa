import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";
import { useContext } from "react";
import { themeContext } from "../context/context";

const CodePenContainer = ({ htmlCode, CssCode, JsCode, title }) => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      embedHeight="400px"
      editable
      penTitle={title}
      themeId={"24457"}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
    >
      {htmlCode && <PrefillLang lang="html">{htmlCode}</PrefillLang>}

      {CssCode && <PrefillLang lang="css">{CssCode}</PrefillLang>}
      {JsCode && <PrefillLang lang="js">{JsCode}</PrefillLang>}
    </PrefillEmbed>
  );
};
export default CodePenContainer;

//31525
//1 => Light
//yellow: 2
//3
// red:23657
//white: 24457 => Dark
