import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AppShellRecipe } from "../../../docs/design-system/recipes/app-shell";
import { PickerComparisonPreview } from "../../../packages/storybook/src/stories/design-system/picker-comparison.preview";

export default function PickerComparisonScreen() {
  const params = useLocalSearchParams<{
    variant?: string;
    tone?: string;
    scheme?: string;
  }>();
  const variant =
    params.variant === "filled" || params.variant === "soft"
      ? params.variant
      : "outlined";
  const tone =
    params.tone === "neutral" || params.tone === "secondary"
      ? params.tone
      : "primary";
  const scheme = params.scheme === "dark" ? "dark" : "light";
  const previewKey = [variant, tone, scheme, "consistent"].join("/");
  return (
    <AppShellRecipe key={previewKey} scheme={scheme}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <PickerComparisonPreview variant={variant} tone={tone} />
    </AppShellRecipe>
  );
}
