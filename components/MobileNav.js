import Link from "next/link";
import Image from "next/image";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useContext } from "react";
import { themeContext } from "../context/context";
import useSound from "use-sound";

const MobileNav = ({ changeMobNav }) => {
  const { theme, setTheme } = useContext(themeContext);
  const [play] = useSound("/sounds/click.mp3");
  const changeTheme = () => {
    play();
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div
      className={`md:hidden  fixed  z-50 ${
        theme === "light" ? "bg-white" : "bg-darkBackground"
      }`}
    >
      <div
        className="relative w-screen h-screen"
        onClick={() => changeMobNav(false)}
      >
        <div>
          <button
            onClick={() => changeMobNav(false)}
            className="font-mono text-2xl absolute top-4 right-5"
          >
            X
          </button>
        </div>
        <nav
          className={
            theme === "light"
              ? "flex flex-col w-full h-5/6 justify-center items-center gap-8 text-xl text-lightText"
              : "flex flex-col justify-center w-full h-5/6 items-center gap-8 text-xl text-darkParagraph"
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
            href="#contact"
            className={
              theme === "light"
                ? " transition-all	 hover:text-black"
                : " transition-all	hover:text-white"
            }
          >
            تواصل معي
          </Link>
        </nav>
        <div className="flex justify-center items-center">
          <button onClick={changeTheme}>
            <Image
              src={theme === "light" ? moon : sun}
              alt="icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
