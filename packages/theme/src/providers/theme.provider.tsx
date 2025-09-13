import { merge } from "@impulse-ui-native/core";
import { DeepPartial } from "@impulse-ui-native/core";
import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { DarkTheme, LightTheme } from "../theme";
import { ThemeContextData } from "../types";

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
import { View } from "react-native";

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider = memo(function ThemeProvider(
  props: PropsWithChildren<DeepPartial<ThemeContextData>>
) {
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
    const base: ThemeContextData = {
      light: { theme: LightTheme },
      dark: { theme: DarkTheme },
    };

    let override: DeepPartial<ThemeContextData> | undefined = undefined;

    if (props.light || props.dark) {
      override = { dark: props.dark, light: props.light };
    }

    return merge(base, override);
  }, [props.dark, props.light]);

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
