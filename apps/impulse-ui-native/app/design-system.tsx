import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Typography } from "@impulse-ui-native/primitives";

import { AppShellRecipe } from "../../../docs/design-system/recipes/app-shell";
import { RecipeFrame } from "../../../packages/storybook/src/stories/design-system/recipe-frame";
import { NativeRecipeEntries } from "../constants/design-recipes.constants";

export default function DesignSystemScreen() {
  const params = useLocalSearchParams<{
    recipe?: string;
    scheme?: string;
    variant?: string;
    tone?: string;
    state?: string;
  }>();
  const recipe =
    NativeRecipeEntries.find((entry) => entry.id === params.recipe) ??
    NativeRecipeEntries.find((entry) => entry.id === "field-appearances")!;
  const scheme = params.scheme === "dark" ? "dark" : "light";
  const variant =
    params.variant === "filled" || params.variant === "soft"
      ? params.variant
      : "outlined";
  const tone =
    params.tone === "primary" || params.tone === "secondary"
      ? params.tone
      : "neutral";
  const disabled = params.state === "disabled";
  const error = params.state === "error" ? "Validation message" : undefined;
  const Component = recipe.Component;
  const scrollable = recipe.id !== "data-list";
  const previewKey = [
    recipe.id,
    scheme,
    variant,
    tone,
    params.state ?? "default",
  ].join("/");

  return (
    <AppShellRecipe key={previewKey} scheme={scheme}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Stack.Screen options={{ headerShown: false }} />
      <RecipeFrame scrollable={scrollable}>
        <Typography.Caption>
          {recipe.title} · {scheme}
        </Typography.Caption>
        <Component
          variant={variant}
          tone={tone}
          disabled={disabled}
          error={error}
        />
      </RecipeFrame>
    </AppShellRecipe>
  );
}
