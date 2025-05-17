import { use, useCallback, useState } from "react";
import Search from "./Search";
const dataUsers = ["Avip", "Budi", "Reza"];

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(dataUsers);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const shuffle = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random());
  };

  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);
      const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(text)
      );
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div>
      <div>
        <h4>Count: {count}</h4>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <hr />
      <div>
        <Search onChange={handleSearch} />
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button onClick={() => setUsers(shuffle(dataUsers))}>Shuffle</button>
      </div>
    </div>
  );
};

export default ExampleUseCallback;
