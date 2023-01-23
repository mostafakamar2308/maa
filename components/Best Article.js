import Image from "next/image";
import arrow from "../assets/arrow.svg";
import { useContext } from "react";
import { themeContext } from "../context/context";
import Link from "next/link";
import moment from "moment";

const BestArticle = ({ post }) => {
  const postDetails = post;
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`grid grid-rows-[50%,50%] md:w-2/3 w-4/5 min-h-[500px] md:min-h-[450px] lg:min-h-[350px] mx-auto md:mx-0 border rounded-lg relative ${
        theme === "light"
          ? " border-black bg-darkButtonUnimportantColor text-white"
          : "border-white bg-lightCodeBackground text-lightCodeText"
      }`}
    >
      <div className="relative">
        <Image
          src={postDetails.imgSrc}
          fill
          priority="true"
          alt="Article Image"
          className="object-cover w-full object-center rounded-t-lg "
        />
      </div>

      <div className="p-2 flex flex-col justify-between">
        <div>
          <Link href={`/articles/${postDetails.slug}`}>
            <h2 className="md:text-xl text-2xl">{postDetails.title}</h2>
          </Link>
          <p className="text-base">{postDetails.description}</p>
        </div>
        <div className="text-sm text-left">
          {moment(postDetails.createdAt).format("YYYY-MM-DD")}
        </div>
      </div>
      <div
        className={`rounded-full border p-2 bg-white absolute z-100 top-1/2 left-0 rotate-[-145deg] -translate-x-9 ${
          theme === "light" ? " border-black" : "border-white"
        }`}
      >
        <Link href={`/articles/${postDetails.slug}`}>
          <Image src={arrow} alt="Link to Article" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
};

export default BestArticle;
