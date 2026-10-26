import type { PropsWithChildren, ReactNode } from "react";
import { memo, useCallback, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useFonts } from "expo-font";

import type { ColorScheme } from "@impulse-ui-native/toolkit";
import { ThemeProvider } from "@impulse-ui-native/toolkit";

import { RecipeFonts } from "../constants/recipe-fonts.constants";
import { StorybookThemeFrame } from "./storybook-theme-frame";

interface StorybookThemeProviderProps extends PropsWithChildren {
  overlays?: ReactNode;
}

export const StorybookThemeProvider = memo(function StorybookThemeProvider({
  children,
  overlays,
}: StorybookThemeProviderProps) {
  const [scheme, setScheme] = useState<ColorScheme>("light");
  const [fontsLoaded, fontError] = useFonts(RecipeFonts);

  const toggleScheme = useCallback(() => {
    setScheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  if (fontError)
    return <Text>Preview fonts could not load: {fontError.message}</Text>;
  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <ThemeProvider scheme={scheme}>
      <StorybookThemeFrame
        scheme={scheme}
        onToggleScheme={toggleScheme}
        overlays={overlays}
      >
        {children}
      </StorybookThemeFrame>
    </ThemeProvider>
  );
});
