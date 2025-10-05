import { LayerCenter } from "@impulse-ui-native/layer-manager";
import { ThemeProvider } from "@impulse-ui-native/theme";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <LayerCenter />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
