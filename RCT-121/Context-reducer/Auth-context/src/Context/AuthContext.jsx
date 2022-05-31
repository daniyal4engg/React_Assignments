import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => {
    isAuth ? setIsAuth(false) : setIsAuth(true);
  };
  return (
    <AuthContext.Provider value={[isAuth, toggleAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
