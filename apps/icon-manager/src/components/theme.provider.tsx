import React, { useEffect, useMemo, useState } from "react";
import { darkTheme, lightTheme, ThemeContext } from "../constants";
import type { ThemeMode } from "../types";

// Provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getInitialMode = (): ThemeMode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) =>
      setMode(e.matches ? "dark" : "light");
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
