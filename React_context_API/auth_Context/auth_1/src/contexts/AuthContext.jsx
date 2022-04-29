import { createContext, useState } from "react";

// create empty box
export const AuthContext = createContext();

// coonect app to box
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("true");

  const toggleAuth = () => {
    return setIsAuth(isAuth === "true" ? "false" : "true");
  };

  return (
    // here we are passing objects as value so get this object in distructured way in useState
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// init
// get data
// import { init } from "create-react-app/createReactApp";
// import { createContext } from "react";

// // create empty box
// export const CartContext = createContext();

// // coonect app to box
// export const CartContextProvider = ({ children }) => (
//   <CartContext.Provider value={10}>{children}</CartContext.Provider>
// );
// update date
