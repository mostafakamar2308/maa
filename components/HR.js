import { useContext } from "react";
import { themeContext } from "../context/context";
const HR = () => {
  const { theme } = useContext(themeContext);
  return (
    <hr
      className={`"text-black border-black ${
        theme === "light"
          ? " border-black bg-black text-black"
          : " border-white bg-white text-white"
      }
        `}
    ></hr>
  );
};

export default HR;
