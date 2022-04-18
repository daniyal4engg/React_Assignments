import { useState } from "react";
import { Todo } from "./todo";
// import { todoList } from "./todoList";
function TodoInput() {
  const [todoArr, setTodoArr] = useState(["react", "java"]);
  const handle = (value) => {
    // const payload = {
    //   title: value,
    //   status: false,
    // };
    // console.log("value is", value);
    setTodoArr([...todoArr, value]);
    console.log("value is", todoArr);
  };
  return (
    <div>
      <Todo handle={handle} />
      {todoArr.map((e) => {
        // return <TodoList prop={e} />;
        // console.log(e);
        return (
          <div className="out">
            {e}{" "}
            <button className="blue" onClick={() => {}}>
              🔵
            </button>
          </div>
        );
      })}
    </div>
  );
}
export { TodoInput };
