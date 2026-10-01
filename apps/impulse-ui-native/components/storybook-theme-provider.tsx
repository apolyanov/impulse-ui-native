import type { PropsWithChildren } from "react";
import { memo, useCallback, useState } from "react";

import type { ColorScheme } from "@impulse-ui-native/toolkit";
import { ThemeProvider } from "@impulse-ui-native/toolkit";

import { StorybookThemeFrame } from "./storybook-theme-frame";

export const StorybookThemeProvider = memo(function StorybookThemeProvider({
  children,
}: PropsWithChildren) {
  const [scheme, setScheme] = useState<ColorScheme>("light");

  const toggleScheme = useCallback(() => {
    setScheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeProvider scheme={scheme}>
      <StorybookThemeFrame scheme={scheme} onToggleScheme={toggleScheme}>
        {children}
      </StorybookThemeFrame>
    </ThemeProvider>
  );
});
