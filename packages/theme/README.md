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

- `createCarouselTokens` and `CarouselTokens` define Carousel spacing, corners,
  indicators, touch targets, and semantic colors. Carousel actions reuse the
  existing default `iconButton` tokens.

- `ThemeProvider` installs the current theme and accepts `light` and `dark` token overrides.
- `LightTheme` and `DarkTheme` provide the default primitive themes.
- `LightColors` and `DarkColors` provide the complete semantic palettes. Select
  `scheme="dark"` on `ThemeProvider` for dark surfaces, light text, and matching
  component colors without supplying overrides.
- `NeutralColorTokens` is the same white-to-black scale in both schemes. Use
  semantic surface, border, and text tokens for colors that should adapt to the
  active scheme. The `white` and `black` tokens also keep their literal colors.
- Dark borders use progressively lighter `subtle`, `default`, and `strong` tones
  that remain visible on primary, secondary, and elevated surfaces. Disabled
  control fills use surface tokens independently of the border scale.
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

Component-token overrides can be supplied as a deep-partial object or as a
callback that receives the resolved primitive theme:

```tsx
<ThemeProvider
  components={(theme) => ({
    button: {
      borderRadius: theme.radii.lg,
      variants: {
        filled: {
          backgroundColor: theme.colors.accent.value,
        },
      },
    },
  })}
>
  {/* application */}
</ThemeProvider>
```

Component overrides are merged with the generated defaults, so unspecified
tokens retain their theme-derived values.

## Visual token checks

The light primary, warning, and success defaults use deeper shades to keep
small foreground text distinct from their fills. Secondary foregrounds use
`secondary.contrast`; background tints use `secondary.value`.

From the repository root, run `node scripts/check-theme-visuals.mjs` to check
default foreground/background pairs and state indicators in both palettes.
See `docs/visual-token-audit.md` for package coverage and verification limits.
