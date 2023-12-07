import { useState, useMemo } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");
  const [input, setInput] = useState(0);
  const [numberObj, setNumberObj] = useState({ input: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure that the value is a number
    const inputValue = parseInt(e.target.value, 10);

    // Check if the conversion to a number was successful
    if (!isNaN(inputValue)) {
      setInput(inputValue);
    }
  };

  // Use useMemo to memoize the result of the slowFunction
  const doubleNumber = useMemo(() => {
    console.log("Calculating doubleNumber...");
    return slowFunction(numberObj.input);
  }, [numberObj.input]);

  return (
    <>
      <h2>useMemo Example</h2>

      <input value={input} type="number" onChange={handleInputChange} />

      <button onClick={() => setNumberObj({ input: input })}>Double {input}</button>

      <p className="use-memo__text">
        Double of {input}: {doubleNumber}
      </p>
    </>
  );
};

function slowFunction(num: number) {
  console.log("Calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰ Simulating a time-consuming operation
  }
  const result = num * 2;
  console.log(`Result: ${result}`);
  return result;
}
