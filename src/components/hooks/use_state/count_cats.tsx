import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState(["🐈"]);
  const cat = "🐈";

  const incrementCats = () => {
    setCats([...cats, cat]);
  };

  return (
    <>
      <h2>useState</h2>

      <p>{cats}</p>

      <button onClick={incrementCats}>There are {cats.length} cats 🥳</button>
    </>
  );
}
