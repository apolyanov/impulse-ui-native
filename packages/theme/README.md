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

- `createPopoverTokens` and `PopoverTokens` define shared Tooltip/Popover
  geometry, typography, and elevated/inverse surfaces through `components.popover`.

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

## Shared visual customization

`theme.light` and `theme.dark` support `shadows` (radius, opacity, and Android
elevation by semantic level) and `codeFontFamily`. Component defaults are
configurable through `components.charts`, `components.slider`, and the overlay
motion tokens.

```tsx
<ThemeProvider
  theme={{
    light: {
      shadows: { sm: { radius: 6, opacity: 0.16, elevation: 3 } },
      codeFontFamily: "MyCodeFont",
    },
    dark: {
      shadows: { sm: { radius: 6, opacity: 0.24, elevation: 3 } },
      codeFontFamily: "MyCodeFont",
    },
  }}
  components={(theme) => ({
    charts: {
      insets: { left: theme.space.lg },
      line: { width: theme.borderSize.lg },
    },
    slider: {
      markLabelWidth: 64,
      thumbHighlightSize: 6,
      valueBubbleMinWidth: 48,
    },
    modal: { enterDuration: 220, exitDuration: 180 },
    toast: { enterDuration: 220, exitDuration: 180, stackDuration: 260 },
    flyout: { enterSpring: { damping: 45 }, exitDuration: 180 },
  })}
>
  {/* application */}
</ThemeProvider>
```

`createChartsTokens` and `ChartsTokens` define the chart palette, shared chart
insets, axis/grid/line widths, axis tick length and label gap, bar padding/rounding,
pie ring padding/rounding, typography, selection markers, legends, and tooltip
placement. `createChartsLabelTokens` and `ChartsLabelTokens` provide the same font
family, weight, size, and color defaults for native chart text and Skia labels.
Chart tooltip surface, border, radius, text color, padding, and gap come from
`components.charts.tooltip`; legend press feedback and
hidden opacity reuse Pressable tokens. New appearance groups are optional for
compatibility with older complete chart token objects. The palette defaults to `ChartColorTokens`; override
`components.charts.palette` to customize series colors. Explicit component and
series props continue to take precedence.

`getShadowStyle` accepts the active shadow scale as its fourth argument. Omitting
it retains the exported default `ShadowScale` for existing utility callers.
