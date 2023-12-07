import { useState, useMemo } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");

  const [numberObj, setNumberObj] = useState({ input: 0 });

  // Use useMemo to memoize the result of the slowFunction
  const doubleNumber = useMemo(() => {
    console.log("Calculating doubleNumber...");
    return slowFunction(numberObj.input);
  }, [numberObj.input]);

  return (
    <>
      <h2>useMemo Example</h2>

      <button onClick={() => setNumberObj({ input: 3 })}>Double 3</button>

      <button onClick={() => setNumberObj({ input: 5 })}>Double 5</button>

      <p className="use-memo__text">
        Double of {numberObj.input}: {doubleNumber}
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
