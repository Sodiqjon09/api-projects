import { useState, useEffect } from "react";
import "./index.css";

const api = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div>
      {data?.map((user) => (
        <div className="mt-[50px] border p-5 text-[red]" key={user.id}>
          {user.name}, {user.username}, {user.email}
        </div>
      ))}
    </div>
  );
}

export default App;
