import { useEffect, useState } from "react";

const endPoint = "https://jsonplaceholder.typicode.com/todos/1";

export const APICall = () => {
  const [todo, setTodo] = useState();

  const fetchTodo = async () => {
    try {
      const response = await fetch(endPoint);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setTodo(data.title);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{todo}</p>
    </>
  );
};
