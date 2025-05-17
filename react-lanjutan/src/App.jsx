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

import {} from "react";
import ExampleUseCallback from "./components/ExampleUseCallback";

function App() {
  return (
    <>
      <ExampleUseCallback />
    </>
  );
}

export default App;
