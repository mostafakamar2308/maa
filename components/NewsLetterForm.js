import { useContext, useState } from "react";
import { themeContext } from "../context/context";

const NewsForm = () => {
  const { theme } = useContext(themeContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const setUser = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="flex lg:gap-2 border justify-between items-center rounded-xl text-lg lg:text-2xl">
      <div className="md:w-4/5 w-[60%] flex items-center gap-2 flex-wrap p-2">
        <input
          placeholder="اسمك..."
          name="name"
          onChange={setUser}
          className="bg-transparent md:w-[30%] focus:outline-none border-b-[#333] border-b-2 w-4/5 md:border-none"
        />
        <span
          className={`h-[30px] w-[1px] md:inline-block hidden ${
            theme === "light" ? "bg-black" : "bg-white"
          }`}
        ></span>
        <input
          placeholder="بريدك الالكتروني ..."
          name="email"
          type={"email"}
          onChange={setUser}
          className="bg-transparent md:w-[60%] focus:outline-none border-b-[#333] border-b-2 w-full md:border-none"
        />
      </div>
      <button
        type="submit"
        className="bg-[#2a29bf] text-white md:p-2 rounded-xl md:rounded-tr-none md:rounded-br-none p-4"
      >
        اشترك
      </button>
    </form>
  );
};

export default NewsForm;
