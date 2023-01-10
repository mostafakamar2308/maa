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
          ? "bg-lightBackground text-lightCodeText selection:bg-lightCodeBackground"
          : "bg-darkBackground text-darkText selection:bg-darkParagraph"
      } font-noto min-h-screen max-w-screen`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
