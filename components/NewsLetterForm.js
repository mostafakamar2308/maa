import { useContext, useState } from "react";
import { themeContext } from "../context/context";

const NewsForm = () => {
  const { theme } = useContext(themeContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [msg, setMsg] = useState({ msg: "", visible: false, color: "" });

  const setUser = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/Newsletter", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const item = await response.json();
    console.log(item);
    if (item.code === 200) {
      setMsg((prev) => {
        return {
          ...prev,
          msg: "تم تسجيلك بنجاح",
          visible: true,
          color: "text-green-500",
        };
      });
    }
    if (item.code === 400) {
      setMsg((prev) => {
        return {
          ...prev,
          msg: "هذا البريد مسجل مسبقا",
          visible: true,
          color: "text-red-500",
        };
      });
    }
    // .then((res) => {

    // })
    // .catch((e) => {

    // });
  };
  return (
    <>
      <form
        className={`flex lg:gap-2 w-11/12 mt-2 border justify-between items-center rounded-xl text-lg lg:text-2xl ${
          theme === "light" ? " border-black" : " border-white"
        }`}
        onSubmit={submitUser}
      >
        <div className="md:w-4/5 w-[60%] flex items-center gap-2 flex-wrap p-2">
          <input
            placeholder="اسمك..."
            name="name"
            required
            onChange={setUser}
            className="bg-transparent grow md:w-[30%] focus:outline-none border-b-[#333] border-b-2 w-4/5 md:border-none"
          />
          <span
            className={`h-[30px] w-[1px] md:inline-block hidden ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          ></span>
          <input
            placeholder="بريدك الالكتروني ..."
            name="email"
            required
            type={"email"}
            onChange={setUser}
            className="bg-transparent md:w-[60%] focus:outline-none border-b-[#333] border-b-2 w-full md:border-none"
          />
        </div>
        <button
          onClick={submitUser}
          type="submit"
          className="bg-darkSelectionBackground self-stretch border-darkBackground border-r hover:bg-lightEmphasizeText duration-300 text-darkBackground md:p-2 rounded-xl md:rounded-tr-none md:rounded-br-none p-4"
        >
          اشترك
        </button>
      </form>
      {msg.visible === true && <p className={`${msg.color}`}>{msg.msg}</p>}{" "}
    </>
  );
};

export default NewsForm;
