import { useEffect, useState } from "react";

export const User = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    getData();
  }, []);

  console.log(entries[0].id);
  const getData = async () => {
    const data = await fetch("http://localhost:8081/logusers").then((d) =>
      d.json()
    );
    setEntries(data);
  };

  const handleChange = (e) => {
    // const id = e.target.id;
    // const value = e.target.value;
    const { id, value } = e.target;
    setFormData({
      ...formData /* PREVIOUS formData */,
      [id]: value /* variale value of id , ie username,value*/,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/logusers", {
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
        value={formData.username}
        type="text"
        id="username"
        placeholder="Enter Email"
      />
      <input
        onChange={handleChange}
        value={formData.password}
        type="text"
        id="password"
        placeholder="Enter pass"
      />
      <input type="submit" />
    </form>
  );
};
