import { createContext } from "react";
import {
  type FiltersContextValue,
  type IconsContextValue,
  type Theme,
} from "./types";

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    primary: "#1E90FF", // accent
    secondary: "#555555",

    border: "#CCCCCC",
    hover: "#EAEAEA",

    background: {
      primary: "#FFFFFF",
      secondary: "#F7F7F7",
    },

    text: {
      primary: "#111111",
      secondary: "#555555",
      muted: "#9E9E9E",
    },
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    primary: "#4A90E2",
    secondary: "#AAAAAA",

    border: "#333333",
    hover: "#1A1A1A",

    background: {
      primary: "#0F0F0F",
      secondary: "#333333",
    },

    text: {
      primary: "#F5F5F5",
      secondary: "#C5C5C5",
      muted: "#777777",
    },
  },
};

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const IconsContext = createContext<IconsContextValue | null>(null);

export const FiltersContext = createContext<FiltersContextValue | null>(null);
