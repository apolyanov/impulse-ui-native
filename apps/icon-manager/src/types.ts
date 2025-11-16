import type { RawSvgModule } from "./utils";

export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: {
    // Accent / brand colors
    primary: string;
    secondary: string;

    // General UI tokens
    border: string;
    hover: string;

    // Background colors
    background: {
      primary: string; // main app background
      secondary: string; // surfaces, bars, cards
    };

    // Text colors
    text: {
      primary: string; // main text
      secondary: string; // subtle / labels
      muted: string; // disabled / low emphasis
    };
  };
}

export interface FiltersContextValue {
  query: string;
  setQuery: (value: string) => void;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export interface IconsContextValue {
  icons: RawSvgModule[];
  setIcons: React.Dispatch<React.SetStateAction<RawSvgModule[]>>;
  selectedIcons: Record<string, RawSvgModule>;
  toggleIcon: (icon: RawSvgModule) => void;

  renamedIcons: Record<string, string>;
  renameIcon: (iconPath: string, newName: string) => void;
  clearRenamedIcons: () => void;
  clearSelectedIcons: () => void;
}
