import { Stack } from "expo-router";

import { ThemeProvider } from "@impulse-ui-native/toolkit";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
