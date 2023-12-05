import { useTheme } from "@context/ThemeContext";

export const Child2 = () => {
  const { theme } = useTheme();

  return <div style={theme}>Child 2</div>;
};
