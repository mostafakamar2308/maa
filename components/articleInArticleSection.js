import moment from "moment";
import Link from "next/link";
import { useContext } from "react";
import { themeContext } from "../context/context";
import Image from "next/image";
const Article = ({ post }) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`${
        theme === "light" ? "border-lightCodeText" : "border"
      } md:w-2/5 xl:text-lg  w-full border rounded-lg m-2 my-4 p-4 relative h-fit `}
    >
      <Image
        src={post.imgSrc}
        className="mx-auto mb-2 !static !h-4/5"
        fill
        loading={"lazy"}
        alt={post.title}
      />
      <Link href={`/articles/${post.slug}`}>
        <h3 className="text-xl xl:text-2xl">{post.title}</h3>
      </Link>
      <span className="opacity-60 text-xs xl:text-sm">
        {moment(post.createdAt).format("YYYY/MM/DD")}
      </span>
      <p className="opacity-75">{post.description}</p>
      <div className="text-left">
        <Link
          href={`/articles/${post.slug}`}
          className="hover:opacity-100 opacity-80 duration-150"
        >
          اقرأ المزيد ...
        </Link>
      </div>
    </div>
  );
};

export default Article;
