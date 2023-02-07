import { useSandpack, useSandpackConsole } from "@codesandbox/sandpack-react";

const CustomConsole = () => {
  const lol2 = useSandpackConsole();
  console.log(lol2);
  return <div>{lol2.logs}</div>;
};

export default CustomConsole;
