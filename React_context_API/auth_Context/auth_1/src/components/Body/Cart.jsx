import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
export const Cart = () => {
  //   useContext will returning objects that why we get prop in distructured way{}

  const { toggleAuth } =
    useContext(
      AuthContext
    ); /*this will return whatever stored in CartContext */

  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        padding: "20px",
        background: "teal",
      }}
    >
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
