import { useState } from "react";
import "./style.css";
export const Todo = ({ handle }) => {
  const [inpdata, setInpata] = useState("");
  return (
    <div>
      <input
        className="inpBtn"
        onChange={(e) => {
          //   console.log(e.target.value);
          setInpata(e.target.value);
        }}
        type="text"
        placeholder="Enter Itenms"
      />
      <button
        className="btn"
        onClick={() => {
          handle(inpdata);
        }}
      >
        Add Items
      </button>
    </div>
  );
};
