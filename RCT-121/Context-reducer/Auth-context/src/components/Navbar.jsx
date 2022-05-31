import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const [isAuth, toggleAuth] = useContext(AuthContext);
  return (
    <div>
      <div>Navbar</div>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        {isAuth ? "logout" : "login"}
      </button>
    </div>
  );
};
