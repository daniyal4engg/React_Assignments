import { useState } from "react";

export const StoreOnInput = ({ handleChange }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  return (
    <div>
      <input
        type="text"
        placeholder="ENTER NAME"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="ENTER EMAIL"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="IMAGE URL"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          handleChange(name, email, image);
        }}
      >
        add{" "}
      </button>
    </div>
  );
};
