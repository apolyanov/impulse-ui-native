import { DeepPartial, merge } from "@impulse-ui-native/core";
import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/montserrat";

import { DarkTheme, LightTheme } from "../theme";
import {
  AppTheme,
  ColorScheme,
  ComponentsThemes,
  CustomComponentsTheme,
  ThemeContextData,
} from "../types";


const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

interface ThemeProviderProps {
  scheme?: ColorScheme;
  theme?: DeepPartial<{
    light: AppTheme;
    dark: AppTheme;
  }>;
  components?: CustomComponentsTheme;
}

export const ThemeProvider = memo(function ThemeProvider(
  props: PropsWithChildren<ThemeProviderProps>
) {
  const scheme = props.scheme ?? "light";

  const [loaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  const context = useMemo<ThemeContextData>(() => {
    const baseTheme = scheme === "light" ? LightTheme : DarkTheme;
    const customBaseTheme = props.theme?.[scheme];
    const theme = merge(baseTheme, customBaseTheme);

    let componentsTheme: DeepPartial<ComponentsThemes> | undefined;

    if (typeof props.components === "function") {
      componentsTheme = props.components(theme);
    } else {
      componentsTheme = props.components;
    }

    return {
      loaded,
      theme,
      components: componentsTheme,
    };
  }, [props.theme?.light, props.theme?.dark, props.components]);

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
