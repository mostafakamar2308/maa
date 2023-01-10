import Link from "next/link";
import Image from "next/image";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useContext } from "react";
import { themeContext } from "../context/context";

const Header = () => {
  const { theme, setTheme } = useContext(themeContext);
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <header className="flex justify-between md:p-8 py-4 px-2 items-center">
      <h1 className="font-aref text-3xl">
        <Link href={"/"}>مدارج البرمجة</Link>
      </h1>
      <div
        className={
          theme === "light"
            ? "md:flex justify-center gap-8 text-xl hidden text-lightText"
            : "md:flex justify-center gap-8 text-xl hidden text-darkParagraph"
        }
      >
        <Link
          href={"/articles"}
          className={
            theme === "light"
              ? " transition-all	 hover:text-black"
              : " transition-all	hover:text-white"
          }
        >
          مقالات
        </Link>
        <a
          href="https://www.youtube.com/@Madareg_El_Programming"
          target={"_blank"}
          rel="noreferrer"
          className={
            theme === "light"
              ? " transition-all	 hover:text-black"
              : " transition-all	hover:text-white"
          }
        >
          قناة اليوتيوب
        </a>
        <Link
          href="#contact"
          className={
            theme === "light"
              ? " transition-all	 hover:text-black"
              : " transition-all	hover:text-white"
          }
        >
          تواصل معي
        </Link>
      </div>

      <div className="hidden lg:block">
        <button onClick={changeTheme}>
          <Image
            src={theme === "light" ? moon : sun}
            alt="icon"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
