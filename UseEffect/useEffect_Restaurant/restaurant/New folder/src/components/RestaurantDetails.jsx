import { useState } from "react";

export const RestaurantDetails = () => {
  const [formData, setFormData] = useState({ restaurant: "" });

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   const { id, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [id]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8080/restaurants", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  // };

  const handleChange = (e) => {
    // const id = e.target.id;
    // const value = e.target.value;
    const { id, value } = e.target;
    setFormData({
      ...formData /* PREVIOUS formData */,
      [id]: value /* variale value of id , ie username,value*/,
      /*her above it will check [id] weather it is username or age : her it will check weather it is value associate to id ie usrname or age (input)  */
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/restaurants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // here we can add the form data to backend
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formData.Restaurant}
        type="text"
        placeholder="Restaurant"
        id="restaurant"
      />
      <input type="submit" />
    </form>
  );
};
