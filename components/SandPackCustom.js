import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackPreview,
  SandpackConsole,
  useSandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { cyberpunk } from "@codesandbox/sandpack-themes";

const SandPackCustom = ({ files, mainWindow, title }) => {
  return (
    <div dir="ltr" id="preview" className="not-prose">
      <p className="prose-md p-2 m-0">{title}</p>
      {/* {/* <SandpackProvider template="vanilla" theme={cyberpunk} files={files} options={{Pa}}>
        <SandpackCodeEditor showTabs showInlineErrors />
        <SandpackConsole />
      </SandpackProvider> }
      <SandpackProvider
        id="#HI"
        files={files}
        theme={cyberpunk}
        template="vanilla"
        options={{ showConsoleButton: true, showConsole: true }}
      >
        <SandpackCodeEditor />
        <CustomBtn id="#HI" />
      </SandpackProvider>{" "}
      */}
    </div>
  );
};
export default SandPackCustom;
