import { useState, useRef } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const changeCountRef = useRef(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeCountRef.current += 1;
  };

  return (
    <>
      <h2>useRef</h2>

      <input value={value} type="text" onChange={handleInputChange} />

      <p>{value}</p>
      <p>I have rendered {changeCountRef.current} times</p>
    </>
  );
};
