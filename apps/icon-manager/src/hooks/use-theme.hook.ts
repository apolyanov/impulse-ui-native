import { useContext } from "react";
import { ThemeContext } from "../constants";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme should be use within ThemeProvider");
  }

  return context;
}
