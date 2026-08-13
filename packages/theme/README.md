# @impulse-ui-native/theme

The token system, light and dark themes, theme provider, and styling hooks for Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/theme
```

Wrap themed components with `ThemeProvider` near the root of the application.

```tsx
import { ThemeProvider } from "@impulse-ui-native/theme";

export function App() {
  return <ThemeProvider scheme="light">{/* application */}</ThemeProvider>;
}
```

## Main exports

- `ThemeProvider` installs the current theme and accepts `light` and `dark` token overrides.
- `LightTheme` and `DarkTheme` provide the default primitive themes.
- `useTheme` returns the complete `AppTheme`.
- `useColors`, `useSpace`, `useBorder`, and `useRadii` read focused token groups.
- `useComponentsTokens` reads component-level tokens.
- `useThemedStyles` creates memoized React Native styles from the active theme.
- `useStyleProps` and `extractStyleProps` convert supported system props into styles.
- Primitive token constants include `SpaceTokens`, `BorderSizeTokens`, `RadiiTokens`, `FontSizeTokens`, `LineHeightTokens`, `FontWeightTokens`, and the color scales.
- Public types cover colors, spacing, dimensions, flex, typography, shadows, component variants, theme extension, and every component-token group.

## Customizing tokens

```tsx
<ThemeProvider
  scheme="light"
  theme={{
    light: {
      colors: {
        primary: {
          value: "#5b4bff",
          contrast: "#ffffff",
        },
      },
    },
  }}
>
  {/* application */}
</ThemeProvider>
```

Theme overrides are deep partials, so only the tokens you want to change need to be supplied.
