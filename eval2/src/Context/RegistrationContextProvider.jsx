// Write code for Registration context
import { createContext, useState } from "react";
export const RegistrationContext = createContext();
export const RegistrationContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <RegistrationContext.Provider value={isAuth}>
      {children}
    </RegistrationContext.Provider>
  );
};
