import { useState } from "react";

const NewsForm = () => {
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
    <form className=" flex flex-wrap gap-2 border justify-between items-center rounded-md pr-4">
      <div className="w-4/5 flex items-center gap-2">
        <input
          placeholder="اسمك..."
          name="name"
          onChange={setUser}
          className="bg-white w-[30%] focus:outline-none"
        />
        <span className="h-[30px] w-[1px] bg-black inline-block"></span>
        <input
          placeholder="بريدك الالكتروني ..."
          name="email"
          onChange={setUser}
          className="bg-white w-[1fr] focus:outline-none"
        />
      </div>
      <button type="submit" className="bg-[#2a29bf] text-white p-4">
        اشترك
      </button>
    </form>
  );
};

export default NewsForm;
