import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { DeepPartial, merge } from "@impulse-ui-native/core";

import { createComponentsTokens, DarkTheme, LightTheme } from "../theme";
import {
  AppTheme,
  ColorScheme,
  ComponentsTokens,
  PrimitiveThemeTokens,
} from "../types";

const ThemeContext = createContext<AppTheme | undefined>(undefined);

interface ThemeProviderProps {
  scheme?: ColorScheme;
  theme?: DeepPartial<{
    light: PrimitiveThemeTokens;
    dark: PrimitiveThemeTokens;
  }>;
  components?:
    | ((theme: PrimitiveThemeTokens) => DeepPartial<ComponentsTokens>)
    | DeepPartial<ComponentsTokens>;
}

export const ThemeProvider = memo(function ThemeProvider(
  props: PropsWithChildren<ThemeProviderProps>,
) {
  const scheme = props?.scheme ?? "light";

  const context = useMemo<AppTheme>(() => {
    const baseTheme = scheme === "light" ? LightTheme : DarkTheme;
    const customBaseTheme = props.theme?.[scheme];
    const theme = merge(baseTheme, customBaseTheme);

    return {
      ...theme,
      components: createComponentsTokens(theme),
    };
  }, [scheme, props.theme?.light, props.theme?.dark, props.components]);

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}
