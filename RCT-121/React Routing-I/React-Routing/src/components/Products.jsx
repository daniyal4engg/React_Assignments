import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Products = () => {
  var [collect, setCollect] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await fetch("http://localhost:8000/items", {
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
    <div>
      {collect.map((e) => {
        return (
          <table
            key={e.id}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    justifyContent: "center",
                  }}
                >
                  {e.name}{" "}
                </td>
                <td style={{ border: "1px solid black" }}>
                  <Link to={`/products/${e.id}`}>More details</Link>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
