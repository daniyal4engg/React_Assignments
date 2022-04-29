import { createContext, useState } from "react";

export const LangguageContext = createContext();

export const LangguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const handleLanguage = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <LangguageContext.Provider value={{ lang, handleLanguage }}>
      {children}
    </LangguageContext.Provider>
  );
};
