import Header from "./Header";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { themeContext } from "../context/context";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  const [visibleMobNav, setVisibleMobNav] = useState(false);
  const { theme } = useContext(themeContext);

  return (
    <div
      dir="rtl"
      className={`${
        theme === "light"
          ? "bg-lightBackground text-lightCodeText selection:bg-lightCodeBackground flex flex-col justify-between"
          : "bg-darkBackground text-darkText selection:bg-darkParagraph flex flex-col justify-between"
      } font-noto min-h-screen max-w-screen relative`}
    >
      {visibleMobNav && <MobileNav changeMobNav={setVisibleMobNav} />}
      <Header changeMobNav={setVisibleMobNav} />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
