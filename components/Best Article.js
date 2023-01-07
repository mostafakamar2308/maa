import Image from "next/image";
import demo from "../assets/demo.jpg";
import arrow from "../assets/arrow.svg";
import { useContext } from "react";
import { themeContext } from "../context/context";

const BestArticle = () => {
  const { theme } = useContext(themeContext);
  console.log(theme);
  return (
    <div
      className={`lg:w-3/4 w-5/6 h-[350px] mx-auto border  rounded-lg relative ${
        theme === "light" ? " border-black" : "border-white"
      }`}
    >
      <Image
        src={demo}
        alt="Article Image"
        className="object-cover object-top h-1/2 rounded-t-lg "
      />

      <div className=" h-1/2 p-2 flex flex-col justify-between">
        <div>
          <h2>مقال جامد جدا</h2>
          <p className="text-lg md:text-xl">
            وصف مقال جامد جدا، بتكلم فيه عن البنت الي بحبها، كاغويا بنت عسل اوي
            والله
          </p>
        </div>
        <div className=" text-sm text-left">19 أكتوبر 2022</div>
      </div>
      <div
        className={`rounded-full border p-2 bg-white absolute z-100 top-1/2 left-0 rotate-[-145deg] -translate-x-9 ${
          theme === "light" ? " border-black" : "border-white"
        }`}
      >
        <Image src={arrow} alt="Link to Article" width={40} height={40} />
      </div>
    </div>
  );
};

export default BestArticle;
