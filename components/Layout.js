import Header from "./Header";
import Footer from "./Who";
import { useContext } from "react";
import { themeContext } from "../context/context";

const Layout = ({ children }) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      dir="rtl"
      className={`${
        theme === "light"
          ? "bg-lightBackground text-lightCodeText selection:bg-lightCodeBackground flex flex-col justify-between"
          : "bg-darkBackground text-darkText selection:bg-darkParagraph flex flex-col justify-between"
      } font-noto min-h-screen max-w-screen`}
    >
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
