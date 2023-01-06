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
      <div className="md:flex justify-center gap-8 text-xl hidden">
        <Link href={"/articles"}>مقالات</Link>
        <a href="#" target="_blank">
          قناة اليوتيوب
        </a>
        <Link href="#contact">تواصل معي</Link>
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
