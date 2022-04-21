import { useEffect, useState } from "react";

function Timer() {
  const [intial, setInitial] = useState(0);
  const [end, setEnd] = useState(20);

  useEffect(() => {
    let id = setInterval(() => {
      setInitial((prevalue) => {
        console.log("ss");
        if (prevalue >= end) {
          clearInterval(id);
          return end;
        } else if (prevalue > 60) {
          return;
        }
        return prevalue + 1;
      });
    }, 1000);
    return () => {
      [clearInterval(id)];
    };
  }, []);

  return (
    <div>
      <h1>:{intial}</h1>
    </div>
  );
}
export { Timer };

// { initial, end }
// <button
//         onClick={() => {
//           setInitial(intial + 1);
//         }}
//       >
//         click
//       </button>
