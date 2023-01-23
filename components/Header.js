import Link from "next/link";
import Image from "next/image";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useContext } from "react";
import { themeContext } from "../context/context";
import useSound from "use-sound";
import menuLight from "../assets/menu-light.svg";
import menuDark from "../assets/menu-dark.svg";

const Header = ({ changeMobNav }) => {
  const { theme, setTheme } = useContext(themeContext);
  const [play] = useSound("/sounds/click.mp3");
  const changeTheme = () => {
    try {
      play();
      theme === "light" ? setTheme("dark") : setTheme("light");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className="flex justify-between md:p-4  p-2 items-center border-b ">
      <h1 className="font-aref text-3xl">
        <Link href={"/"}>مدارج البرمجة</Link>
      </h1>
      <nav
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
        <Link
          href="/#contact"
          className={
            theme === "light"
              ? " transition-all	 hover:text-black"
              : " transition-all	hover:text-white"
          }
        >
          تواصل معي
        </Link>
      </nav>
      <div className="md:hidden translate-y-2">
        <button onClick={() => changeMobNav((prev) => !prev)}>
          {" "}
          <Image
            src={theme === "light" ? menuLight : menuDark}
            alt="icon"
            width={50}
            height={50}
          />
        </button>
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
