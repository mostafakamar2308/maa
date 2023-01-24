import { useContext } from "react";
import { themeContext } from "../../../context/context";

const StyledInput = () => {
  const { theme } = useContext(themeContext);
  return (
    <div dir="ltr" className="flex gap-2 text-xl flex-col items-center p-2">
      <div className="flex w-[500px] border border-lightText rounded-lg overflow-hidden max-w-full">
        <label
          htmlFor="http"
          className={`border-r border-lightText p-1 px-2 rounded-l-lg`}
        >
          https://
        </label>
        <input
          id="http"
          placeholder="URL"
          className={`${
            theme === "dark" ? "" : "bg-transparent"
          } grow indent-2`}
        />
      </div>
      <div className="flex w-[500px] border border-lightText rounded-lg overflow-hidden max-w-full">
        <input
          id="email-flex"
          type={"email"}
          className={`${theme === "dark" ? "" : "bg-transparent"} grow w-1/2`}
        />
        <label
          htmlFor="email-flex"
          className={`rounded-r-lg border-l border-lightText p-1 px-2`}
        >
          @gmail.com
        </label>
      </div>
    </div>
  );
};

export default StyledInput;
