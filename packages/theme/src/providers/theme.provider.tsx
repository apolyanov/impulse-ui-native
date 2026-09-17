import type { PropsWithChildren } from "react";
import { createContext, memo, useContext, useMemo } from "react";

import type { DeepPartial } from "@impulse-ui-native/core";
import { merge } from "@impulse-ui-native/core";

import type {
  AppTheme,
  ColorScheme,
  ComponentsTokens,
  PrimitiveThemeTokens,
} from "../types";
import { createComponentsTokens, DarkTheme, LightTheme } from "../theme";

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
  const {
    children,
    components: componentsOverride,
    scheme = "light",
    theme: themeOverride,
  } = props;

  const context = useMemo<AppTheme>(() => {
    const baseTheme = scheme === "light" ? LightTheme : DarkTheme;
    const customBaseTheme = themeOverride?.[scheme];
    const theme = merge(baseTheme, customBaseTheme);
    const customComponents =
      typeof componentsOverride === "function"
        ? componentsOverride(theme)
        : componentsOverride;

    return {
      ...theme,
      components: merge(createComponentsTokens(theme), customComponents),
    };
  }, [scheme, themeOverride, componentsOverride]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}
