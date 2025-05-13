// import { useId } from "react";
// function Input(props) {
//   const { id = "input", label } = props;
//   const inputId = useId();
//   return (
//     <>
//       <label htmlFor="">
//         <span>{label}: </span>
//         <input type="text" id={`${inputId}-${id}`} />
//       </label>
//       <p aria-details={`${inputId}-${id}`}>
//         Name Should Contain at least first name and last name
//       </p>
//     </>
//   );
// }

import { memo, useState } from "react";

const TodoList = memo((props) => {
  const { todos } = props;
  console.log("call to list");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Create Video"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <>
      <TodoList todos={todos} />
      <button onClick={() => addTodo("Playing Piano")}> Add to do</button>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
