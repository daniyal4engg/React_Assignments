import { useState } from "react";

export const Employee = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    Address: "",
    Department: "",
    Salary: "",
    marital: "",
  });

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
    fetch("http://localhost:8080/employee", {
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
        value={formData.name}
        type="text"
        placeholder="name"
        id="name"
      />

      <br />
      <input
        onChange={handleChange}
        value={formData.age}
        type="number"
        placeholder="Age"
        id="age"
      />
      <br />
      <input
        onChange={handleChange}
        value={formData.Address}
        type="text"
        placeholder="Address"
        id="Address"
      />
      <br />

      <select
        onChange={handleChange}
        value={formData.Department}
        name="Department"
        id="Department"
      >
        <option value="">Department</option>
        <option value="Sells">Sells</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
      </select>

      <br />
      <input
        onChange={handleChange}
        value={formData.Salary}
        type="number"
        placeholder="Salary"
        id="Salary"
      />
      <br />
      <input
        onChange={handleChange}
        value={formData.marital}
        type=""
        placeholder="marital "
        id="marital "
      />
      <div>
        <input type="checkbox" name="marital" id="marital" value="married" />
        <label htmlFor="marital">married</label>
        <input type="checkbox" name="marital" id="marital" value="Unmarried" />
        <label htmlFor="marital">Unmarried</label>
      </div>

      <input type="submit" />
    </form>
  );
};
