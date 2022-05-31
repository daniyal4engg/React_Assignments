import { useEffect } from "react";
import axios from "axios";
export const Onother = () => {
  //   useEffect(() => {
  //     getdata();
  //   }, []);

  const getdata = async () => {
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "GET",
        data: {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        },
      });
      var dataContent = await res.json();
      //   console.log(dataContent);
      alert("succ");
      console.log(dataContent);
    } catch (err) {
      console.log(err);
      alert("fail");
    }
  };
  return (
    <div>
      <div onClick={getdata}>ONOTHER</div>
    </div>
  );
};

// .then((res) => {
//     alert("login");
//   })
//   .catch((err) => {
//     alert("failure");
//   })

// axios({
//     method: "POST",
//     url: "https://reqres.in/api/login",
//   });
