import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  var [time, setTime] = useState("light");
  console.log(time);
  const themefun = () => {
    time === "light" ? setTime("dark") : setTime("light");
  };

  return (
    <ThemeContext.Provider value={[time, themefun]}>
      {children}
    </ThemeContext.Provider>
  );
};
