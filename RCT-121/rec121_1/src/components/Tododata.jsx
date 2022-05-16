import { useState } from "react";
import { StoreOnInput } from "./storeOnInput";
const collect = [
  {
    name: "daniyal",
    email: "daniyal@gmail.com",
    image:
      "https://thumbs.dreamstime.com/b/men-hair-beauty-handsome-male-model-touching-healthy-black-background-high-resolution-125032252.jpg",
  },
  {
    name: "sunny",
    email: "sunny@gmail.com",
    image:
      "https://static.remove.bg/remove-bg-web/f8fbcafbd1f3872923a7108604df9ddb62a43564/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
];

export const Tododata = () => {
  const [todoArr, setTodoArr] = useState(collect);
  //   console.log(todoArr);
  const handleChange = (NAME, EMAIL, IMAGE) => {
    setTodoArr([
      ...todoArr,
      {
        name: NAME,
        email: EMAIL,
        image: IMAGE,
      },
    ]);
  };
  return (
    <div>
      <StoreOnInput handleChange={handleChange} />
      {todoArr.map((e, i) => {
        return (
          <div key={i}>
            <div className="flex">
              <div>
                <img src={e.image} alt="icon" className="img" />
              </div>
              <div className="space">
                <h3>{e.name}</h3>
                <p>{e.email}</p>
              </div>
            </div>
            <hr className="width" />
          </div>
        );
      })}
    </div>
  );
};
