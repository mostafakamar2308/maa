import { useContext } from "react";
import { themeContext } from "../context/context";

const Comment = ({ name, date, commentData }) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`lg:w-10/12  lg:mx-auto mx-2 my-3 rounded-xl  min-h-10 lg:p-8 p-4  ${
        theme === "dark"
          ? "bg-darkButtonUnimportantColor text-lightBackground"
          : "bg-darkParagraph"
      }`}
    >
      <div>
        <h3 className="text-2xl">{name}</h3>
        <p className="text-xs font-thin">{date}</p>
      </div>
      <p className="px-4 py-2">{commentData}</p>
    </div>
  );
};
export default Comment;
