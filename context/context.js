import { createContext, useState } from "react";
export const themeContext = createContext(null);

const Context = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
export default Context;
