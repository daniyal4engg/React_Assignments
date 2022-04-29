import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  //   useContext will returning objects that why we get prop in distructured way{}
  const { isAuth, toggleAuth } =
    useContext(
      AuthContext
    ); /*this will return whatever stored in AuthContext */

  return (
    <>
      <nav
        style={{
          color: "red",
          display: "flex",
          justifyContent: "end",
          margin: "20px",
          border: "1px solid green",
          padding: "10px",
        }}
      >
        User is :{isAuth}
      </nav>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        {" "}
        login or logout
      </button>
    </>
  );
};
