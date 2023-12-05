import { useTheme } from "@context/ThemeContext";

import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

export const Parent = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Child1 />
      <Child2 />
    </div>
  );
};
