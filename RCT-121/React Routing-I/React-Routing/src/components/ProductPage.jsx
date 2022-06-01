import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  var [collect, setCollect] = useState([]);
  const Params = useParams();

  //   console.log("id", id);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const { id } = Params;
    try {
      const res = await fetch(`http://localhost:8000/items/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setCollect(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div key={collect.id}>
      <div>Product Name : {collect.name}</div>
      <div>Price : {collect.price}</div>
    </div>
  );
};
