import { useTheme } from "@context/ThemeContext";

export const Child1 = () => {
  const { theme } = useTheme();

  return <div style={theme}>Child 1</div>;
};
