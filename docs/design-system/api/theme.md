# @impulse-ui-native/theme

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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
  that remain visible on canvas, default, and elevated surfaces. Disabled
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

## Surface roles

| Role                      | Purpose                                               | Light     | Dark      |
| ------------------------- | ----------------------------------------------------- | --------- | --------- |
| `colors.surface.canvas`   | App and screen backgrounds                            | `#f1f3f5` | `#16191d` |
| `colors.surface.subtle`   | Muted control fills, tracks, and disabled backgrounds | `#f1f3f5` | `#16191d` |
| `colors.surface.default`  | Content panels, cards, and lists                      | `#ffffff` | `#212529` |
| `colors.surface.elevated` | Floating overlays, popovers, sheets, and toasts       | `#ffffff` | `#343a40` |
| `colors.surface.inverse`  | Inverse surfaces such as tooltips                     | `#000000` | `#ffffff` |

Each role has a `value` fill and a `contrast` foreground. Canvas and subtle
start with the same colors but can be overridden independently. For example,
changing `theme.dark.colors.surface.canvas.value` leaves control fills intact.

Migration: replace `surface.primary` with `surface.canvas` for page backgrounds
or `surface.subtle` for muted control fills. Replace `surface.secondary` with
`surface.default` for content surfaces. Cards, lists, and accordions now use
`default`; popovers use `elevated`.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/theme/src/constants/index.ts

```tsx
export * from "./style.constants";
```

### packages/theme/src/constants/style.constants.ts

```tsx
import { ShadowIntensity, ShadowLevel, StyleProps } from "../types";

const StylePropsRecord: Record<keyof StyleProps, number> = {
  margin: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginHorizontal: 0,
  marginVertical: 0,
  padding: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingHorizontal: 0,
  paddingVertical: 0,
  color: 0,
  backgroundColor: 0,
  opacity: 0,
  shadow: 0,
  shadowPosition: 0,
  shadowColor: 0,
  shadowOpacity: 0,
  shadowRadius: 0,
  shadowOffset: 0,
  elevation: 0,
  borderRadius: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderWidth: 0,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderColor: 0,
  borderTopColor: 0,
  borderRightColor: 0,
  borderBottomColor: 0,
  borderLeftColor: 0,
  borderStyle: 0,
  fontSize: 0,
  fontFamily: 0,
  fontWeight: 0,
  fontStyle: 0,
  fontVariant: 0,
  letterSpacing: 0,
  lineHeight: 0,
  textAlign: 0,
  textDecorationLine: 0,
  textDecorationStyle: 0,
  textDecorationColor: 0,
  textTransform: 0,
  includeFontPadding: 0,
  textAlignVertical: 0,
  flex: 0,
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 0,
  flexDirection: 0,
  flexWrap: 0,
  justifyContent: 0,
  alignItems: 0,
  alignSelf: 0,
  alignContent: 0,
  gap: 0,
  rowGap: 0,
  columnGap: 0,
  position: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 0,
  width: 0,
  height: 0,
  minWidth: 0,
  maxWidth: 0,
  minHeight: 0,
  maxHeight: 0,
  aspectRatio: 0,
  overflow: 0,
} as const;

export const StylePropsSet = new Set<keyof StyleProps>(
  Object.keys(StylePropsRecord) as (keyof StyleProps)[],
);

export const ShadowScale: Record<ShadowLevel, ShadowIntensity> = {
  none: { radius: 0, opacity: 0, elevation: 0 },
  xs: { radius: 2, opacity: 0.08, elevation: 1 },
  sm: { radius: 4, opacity: 0.1, elevation: 2 },
  md: { radius: 8, opacity: 0.15, elevation: 4 },
  lg: { radius: 16, opacity: 0.18, elevation: 8 },
  xl: { radius: 24, opacity: 0.22, elevation: 12 },
};
```

### packages/theme/src/hooks/index.ts

```tsx
export { useBorder } from "./use-border.hook";
export { useColors } from "./use-colors.hook";
export { useComponentsTokens } from "./use-components-tokens.hook";
export { useRadii } from "./use-radii.hook";
export { useSpace } from "./use-space.hook";
export { useStyleProps } from "./use-style-props.hook";
export { useTheme } from "./use-theme.hook";
export { useThemedStyles } from "./use-themed-styles";
```

### packages/theme/src/hooks/use-border.hook.ts

```tsx
import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { BorderSize } from "../types";

export function useBorder(): BorderSize {
  const context = useThemeContext();

  return useMemo(() => context.borderSize, [context.borderSize]);
}
```

### packages/theme/src/hooks/use-colors.hook.ts

```tsx
import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { ThemeColors } from "../types";

export function useColors(): ThemeColors {
  const context = useThemeContext();

  return useMemo(() => context.colors, [context.colors]);
}
```

### packages/theme/src/hooks/use-components-tokens.hook.ts

```tsx
import { useMemo } from "react";

import { useThemeContext } from "../providers";

export function useComponentsTokens() {
  const context = useThemeContext();

  return useMemo(() => context.components, [context.components]);
}
```

### packages/theme/src/hooks/use-radii.hook.ts

```tsx
import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { Radii } from "../types";

export function useRadii(): Radii {
  const context = useThemeContext();

  return useMemo(() => context.radii, [context.radii]);
}
```

### packages/theme/src/hooks/use-space.hook.ts

```tsx
import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { Space } from "../types";

export function useSpace(): Space {
  const context = useThemeContext();

  return useMemo(() => context.space, [context.space]);
}
```

### packages/theme/src/hooks/use-style-props.hook.ts

```tsx
import { useMemo } from "react";

import { createStyleKey, extractStyleProps } from "../utils";

export function useStyleProps<Props extends object>(props: Props) {
  const key = useMemo(() => createStyleKey(props), [props]);

  return useMemo(() => extractStyleProps(props), [key]);
}
```

### packages/theme/src/hooks/use-theme.hook.ts

```tsx
import { useThemeContext } from "../providers";
import { AppTheme } from "../types";

export function useTheme(): AppTheme {
  return useThemeContext();
}
```

### packages/theme/src/hooks/use-themed-styles.ts

```tsx
import { useMemo } from "react";
import { StyleSheet } from "react-native";

import { AppTheme } from "../types";
import { useTheme } from "./use-theme.hook";

type ThemedStyles<T extends StyleSheet.NamedStyles<T>> = T;

type StyledFunctionNoProps<T extends StyleSheet.NamedStyles<T>> = (
  theme: AppTheme,
) => ThemedStyles<T>;

type StyledFunctionWithProps<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
> = (theme: AppTheme, props: Props) => ThemedStyles<T>;

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  styledFunction: StyledFunctionNoProps<T>,
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionWithProps<Props, T>,
  props: Props,
  dependencies: readonly unknown[],
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionWithProps<Props, T>,
  props: Props,
  dependencies: readonly unknown[],
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionNoProps<T> | StyledFunctionWithProps<Props, T>,
  props?: Props,
  dependencies?: readonly unknown[],
): ThemedStyles<T> {
  const theme = useTheme();

  const memoDependencies = dependencies ?? (props === undefined ? [] : [props]);

  return useMemo(() => {
    if (props === undefined) {
      return (styledFunction as StyledFunctionNoProps<T>)(theme);
    }

    return (styledFunction as StyledFunctionWithProps<Props, T>)(theme, props);
  }, [theme, styledFunction, ...memoDependencies]);
}
```

### packages/theme/src/index.ts

```tsx
export * from "./constants";
export * from "./hooks";
export * from "./providers";
export * from "./theme";
export * from "./types";
export * from "./utils";
```

### packages/theme/src/providers/index.ts

```tsx
export * from "./theme.provider";
```

### packages/theme/src/providers/theme.provider.tsx

```tsx
import type { PropsWithChildren } from "react";
import { createContext, memo, useContext, useMemo } from "react";

import type { DeepPartial } from "@impulse-ui-native/core";
import { merge } from "@impulse-ui-native/core";

import type {
  AppTheme,
  ColorScheme,
  ComponentsTokens,
  PrimitiveThemeTokens,
} from "../types";
import { createComponentsTokens, DarkTheme, LightTheme } from "../theme";

const ThemeContext = createContext<AppTheme | undefined>(undefined);

interface ThemeProviderProps {
  scheme?: ColorScheme;
  theme?: DeepPartial<{
    light: PrimitiveThemeTokens;
    dark: PrimitiveThemeTokens;
  }>;
  components?:
    | ((theme: PrimitiveThemeTokens) => DeepPartial<ComponentsTokens>)
    | DeepPartial<ComponentsTokens>;
}

export const ThemeProvider = memo(function ThemeProvider(
  props: PropsWithChildren<ThemeProviderProps>,
) {
  const {
    children,
    components: componentsOverride,
    scheme = "light",
    theme: themeOverride,
  } = props;

  const context = useMemo<AppTheme>(() => {
    const baseTheme = scheme === "light" ? LightTheme : DarkTheme;
    const customBaseTheme = themeOverride?.[scheme];
    const theme = merge(baseTheme, customBaseTheme);
    const customComponents =
      typeof componentsOverride === "function"
        ? componentsOverride(theme)
        : componentsOverride;

    return {
      ...theme,
      components: merge(createComponentsTokens(theme), customComponents),
    };
  }, [scheme, themeOverride, componentsOverride]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}
```

### packages/theme/src/theme/chart-color-tokens.ts

```tsx
import type { ChartColorPalette } from "../types";

export const ChartColorTokens: ChartColorPalette = [
  "#F55D6B",
  "#2563eb",
  "#16a34a",
  "#9333ea",
  "#ea580c",
  "#0891b2",
  "#db2777",
  "#65a30d",
  "#4f46e5",
  "#0d9488",
  "#ca8a04",
  "#c026d3",
  "#0284c7",
  "#7c3aed",
  "#9f5f3f",
];
```

### packages/theme/src/theme/create-carousel-tokens.ts

```tsx
import type { CarouselTokens, PrimitiveThemeTokens } from "../types";

export function createCarouselTokens(
  tokens: PrimitiveThemeTokens,
): CarouselTokens {
  return {
    gap: tokens.space.sm,
    slideGap: tokens.space.mxs,
    borderRadius: tokens.radii.lg,
    indicatorGap: tokens.space.xs,
    indicator: {
      borderRadius: tokens.radii.round,
      targetSize: tokens.space.lg,
      variants: {
        dots: { width: tokens.space.xs, height: tokens.space.xs },
        segments: { width: tokens.space.md, height: tokens.space.xxs },
      },
      states: {
        unselected: { backgroundColor: tokens.colors.border.strong.value },
        selected: { backgroundColor: tokens.colors.primary.value },
        disabledUnselected: { backgroundColor: tokens.colors.text.disabled },
        disabledSelected: { backgroundColor: tokens.colors.text.secondary },
      },
    },
    counter: {
      states: {
        default: { color: tokens.colors.text.primary },
        disabled: { color: tokens.colors.text.disabled },
      },
    },
  };
}
```

### packages/theme/src/theme/create-charts-tokens.ts

```tsx
import type {
  ChartsLabelTokens,
  ChartsTokens,
  PrimitiveThemeTokens,
} from "../types";
import { ChartColorTokens } from "./chart-color-tokens";

export function createChartsTokens(tokens: PrimitiveThemeTokens): ChartsTokens {
  return {
    palette: ChartColorTokens,
    insets: {
      top: tokens.space.md,
      right: tokens.space.md,
      bottom: tokens.space.md,
      left: tokens.space.md,
    },
    axis: {
      width: tokens.borderSize.sm,
      tickLength: tokens.space.xxs,
      labelGap: tokens.space.xxs,
    },
    grid: { width: tokens.borderSize.sm },
    line: { width: tokens.borderSize.md },
    bar: { categoryPadding: 0.2, seriesPadding: 0.1, radius: tokens.radii.sm },
    pie: { ringPadding: tokens.borderSize.md, cornerRadius: tokens.radii.sm },
    label: createChartsLabelTokens(tokens),
    selection: { radius: tokens.space.xxs, width: tokens.borderSize.md },
    legend: {
      gap: tokens.space.xs,
      padding: tokens.space.xs,
      swatchSize: tokens.space.mxs,
      swatchRadius: tokens.radii.sm,
    },
    tooltip: {
      offset: tokens.space.xs,
      maxWidth: "90%",
      backgroundColor: tokens.colors.surface.elevated.value,
      color: tokens.colors.text.primary,
      borderColor: tokens.colors.border.subtle.value,
      borderWidth: tokens.borderSize.sm,
      borderRadius: tokens.radii.sm,
      padding: tokens.space.xs,
      gap: tokens.space.xs,
    },
  };
}

export function createChartsLabelTokens(
  tokens: PrimitiveThemeTokens,
): ChartsLabelTokens {
  return {
    color: tokens.colors.text.secondary,
    fontSize: tokens.fontSize.xs,
    fontFamily: tokens.fontFamily.normal[tokens.fontWeight.regular],
    fontWeight: tokens.fontWeight.regular,
  };
}
```

### packages/theme/src/theme/create-color-picker-tokens.ts

```tsx
import type { ColorPickerTokens, PrimitiveThemeTokens } from "../types";

export function createColorPickerTokens(
  tokens: PrimitiveThemeTokens,
): ColorPickerTokens {
  const { colors, space, radii, borderSize } = tokens;

  return {
    gap: space.sm,
    rowGap: space.sm,
    sliderLabelGap: space.xxs,
    presetsLabelGap: space.xs,
    presetsGap: space.xs,
    presetLabelGap: space.xxs,
    alphaFieldFlex: 0.6,
    padding: space.sm,
    borderRadius: radii.lg,
    spectrumBorderRadius: radii.md,
    previewBorderRadius: radii.md,
    swatchBorderRadius: radii.round,
    swatchRingPadding: space.xxs,
    swatchRingBorderWidth: borderSize.md,
    borderWidth: borderSize.sm,
    borderColor: colors.border.default.value,
    backgroundColor: colors.surface.elevated.value,
    labelColor: colors.text.primary,
    selectedBorderColor: colors.border.focus.value,
    indicatorColor: colors.white,
    indicatorBorderRadius: radii.round,
    indicatorBorderWidth: borderSize.md,
    indicatorShadowOffsetX: 0,
    indicatorShadowOffsetY: 1,
    indicatorShadowBlurRadius: space.xxs,
    indicatorShadowColor: colors.black,
    checkerLightColor: colors.neutral["0"],
    checkerDarkColor: colors.neutral["4"],
    checkerSize: space.xs,
    disabledOpacity: 0.5,
    presets: [
      { label: "Primary", color: colors.primary.value },
      { label: "Accent", color: colors.accent.value },
      { label: "Secondary", color: colors.secondary.value },
      { label: "Error", color: colors.feedback.error.value },
      { label: "Warning", color: colors.feedback.warning.value },
      { label: "Success", color: colors.feedback.success.value },
      { label: "Info", color: colors.feedback.info.value },
      { label: "White", color: colors.white },
      { label: "Black", color: colors.black },
    ],
    sizes: {
      small: {
        spectrumHeight: 144,
        indicatorSize: 20,
        previewSize: 32,
        swatchSize: 24,
        swatchCheckSize: 12,
        swatchTargetSize: 44,
      },
      medium: {
        spectrumHeight: 192,
        indicatorSize: 24,
        previewSize: 40,
        swatchSize: 32,
        swatchCheckSize: 16,
        swatchTargetSize: 44,
      },
      large: {
        spectrumHeight: 240,
        indicatorSize: 28,
        previewSize: 48,
        swatchSize: 40,
        swatchCheckSize: 20,
        swatchTargetSize: 48,
      },
    },
  };
}
```

### packages/theme/src/theme/create-modal-tokens.ts

```tsx
import type { ModalTokens, PrimitiveThemeTokens } from "../types";

export function createModalTokens(tokens: PrimitiveThemeTokens): ModalTokens {
  return {
    enterDuration: 180,
    exitDuration: 150,
    zIndexBase: 100,
    overlayColor: tokens.colors.text.tertiary,
    overlayVisibleOpacity: 0.4,
    viewportPadding: tokens.space.sm,
    closedScale: 0.96,
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    padding: tokens.space.sm,
    gap: tokens.space.sm,
    headerGap: tokens.space.xs,
    footerGap: tokens.space.xs,
    titleColor: tokens.colors.text.primary,
    titleFontSize: tokens.fontSize.lg,
    titleLineHeight: tokens.lineHeight.lg,
    descriptionColor: tokens.colors.text.secondary,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    sizes: {
      small: { maxWidth: 320 },
      medium: { maxWidth: 440 },
      large: { maxWidth: 640 },
    },
  };
}
```

### packages/theme/src/theme/create-pagination-tokens.ts

```tsx
import type { PaginationTokens, PrimitiveThemeTokens } from "../types";

export function createPaginationTokens(
  tokens: PrimitiveThemeTokens,
): PaginationTokens {
  return {
    borderRadius: tokens.radii.md,
    borderWidth: tokens.borderSize.sm,
    gap: tokens.space.xs,
    sizes: {
      small: {
        compactMinWidth: 112,
        controlSize: 32,
        fontSize: tokens.fontSize.xsm,
        hitSlop: 6,
        iconSize: 16,
        paddingHorizontal: tokens.space.mxs,
      },
      medium: {
        compactMinWidth: 144,
        controlSize: 40,
        fontSize: tokens.fontSize.sm,
        hitSlop: 2,
        iconSize: 18,
        paddingHorizontal: tokens.space.sm,
      },
      large: {
        compactMinWidth: 176,
        controlSize: 48,
        fontSize: tokens.fontSize.sm,
        hitSlop: 0,
        iconSize: 20,
        paddingHorizontal: tokens.space.msm,
      },
    },
    states: {
      default: {
        backgroundColor: tokens.colors.surface.elevated.value,
        borderColor: tokens.colors.border.default.value,
        color: tokens.colors.text.primary,
        ellipsisColor: tokens.colors.text.tertiary,
      },
      current: {
        backgroundColor: tokens.colors.primary.value,
        borderColor: tokens.colors.primary.value,
        color: tokens.colors.primary.contrast,
        ellipsisColor: tokens.colors.text.tertiary,
      },
      disabled: {
        backgroundColor: tokens.colors.surface.subtle.value,
        borderColor: tokens.colors.border.subtle.value,
        color: tokens.colors.text.disabled,
        ellipsisColor: tokens.colors.text.disabled,
      },
    },
  };
}
```

### packages/theme/src/theme/create-popover-tokens.ts

```tsx
import type { PopoverTokens, PrimitiveThemeTokens } from "../types";

export function createPopoverTokens(
  tokens: PrimitiveThemeTokens,
): PopoverTokens {
  return {
    zIndexBase: 3000,
    gap: tokens.space.xs,
    edgeOffset: tokens.space.sm,
    arrowSize: 6,
    maxWidth: 320,
    actionMinSize: tokens.space.md,

    titleFontSize: tokens.fontSize.sm,
    titleLineHeight: tokens.lineHeight.sm,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    titleColor: tokens.colors.text.primary,
    descriptionColor: tokens.colors.text.secondary,

    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    paddingHorizontal: tokens.space.sm,
    paddingVertical: tokens.space.sm,

    tooltip: {
      backgroundColor: tokens.colors.surface.inverse.value,
      color: tokens.colors.surface.inverse.contrast,
      borderRadius: tokens.radii.md,
      paddingHorizontal: tokens.space.mxs,
      paddingVertical: tokens.space.xs,
    },
  };
}
```

### packages/theme/src/theme/create-segmented-control-tokens.ts

```tsx
import type { PrimitiveThemeTokens, SegmentedControlTokens } from "../types";

export function createSegmentedControlTokens(
  tokens: PrimitiveThemeTokens,
): SegmentedControlTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;
  const transparent = "transparent";

  return {
    borderRadius: tokens.radii.md,
    borderWidth: tokens.borderSize.sm,
    itemBorderRadius: tokens.radii.md,
    itemBorderWidth: tokens.borderSize.sm,
    rootBackgroundColor: tokens.colors.surface.subtle.value,
    rootBorderColor: tokens.colors.border.default.value,
    rootGap: tokens.space.none,
    rootPadding: tokens.space.none,
    sizes: {
      small: {
        fontSize: tokens.fontSize.xsm,
        height: 32,
        hitSlop: 6,
        iconSize: 16,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.xxs,
          },
        },
        minItemWidth: 64,
        paddingHorizontal: tokens.space.xs,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        height: 40,
        hitSlop: 2,
        iconSize: 18,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.xs,
          },
        },
        minItemWidth: 80,
        paddingHorizontal: tokens.space.mxs,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        height: 48,
        hitSlop: 0,
        iconSize: 20,
        layouts: {
          inline: {
            flexDirection: "row",
            gap: tokens.space.xxs,
            paddingVertical: tokens.space.none,
          },
          stacked: {
            flexDirection: "column",
            gap: tokens.space.xxs,
            paddingVertical: 10,
          },
        },
        minItemWidth: 96,
        paddingHorizontal: tokens.space.sm,
      },
    },
    variants: {
      filled: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: primary,
            borderColor: primary,
            color: primaryContrast,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
      outlined: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: tokens.colors.surface.elevated.value,
            borderColor: primary,
            color: primary,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: transparent,
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
      soft: {
        states: {
          unselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.secondary,
          },
          selected: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: transparent,
            borderColor: transparent,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
  };
}
```

### packages/theme/src/theme/create-slider-tokens.ts

```tsx
import type { PrimitiveThemeTokens, SliderTokens } from "../types";

export function createSliderTokens(tokens: PrimitiveThemeTokens): SliderTokens {
  return {
    interactionMinHeight: 44,
    trackBorderRadius: tokens.radii.round,
    thumbBorderRadius: tokens.radii.round,
    valueBubbleBorderRadius: tokens.radii.md,
    valueBubbleBorderWidth: tokens.borderSize.sm,
    valueBubblePaddingHorizontal: tokens.space.xs,
    valueBubblePaddingVertical: tokens.space.xxs,
    valueBubbleGap: tokens.space.xxs,
    labelGap: tokens.space.xxs,
    markLabelWidth: tokens.space.lg,
    thumbHighlightSize: tokens.space.xxs,
    valueBubbleMinWidth: 40,
    layouts: {
      default: {
        reservedVerticalSpace: 0,
      },
      valueBubble: {
        reservedVerticalSpace: 28 + tokens.space.xxs,
      },
    },
    sizes: {
      small: {
        trackHeight: 4,
        thumbSize: 16,
        markSize: 6,
      },
      medium: {
        trackHeight: 6,
        thumbSize: 20,
        markSize: 6,
      },
      large: {
        trackHeight: 8,
        thumbSize: 24,
        markSize: 8,
      },
    },
    variants: {
      filled: {
        default: {
          activeMarkColor: tokens.colors.primary.contrast,
          activeTrackColor: tokens.colors.primary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.primary.value,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.primary.value,
          thumbBorderColor: tokens.colors.primary.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: tokens.colors.primary.contrast,
          valueBubbleBackgroundColor: tokens.colors.primary.value,
          valueBubbleBorderColor: tokens.colors.primary.value,
          valueBubbleColor: tokens.colors.primary.contrast,
        },
        focused: {
          activeMarkColor: tokens.colors.primary.contrast,
          activeTrackColor: tokens.colors.primary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.primary.value,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.primary.value,
          thumbBorderColor: tokens.colors.primary.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: tokens.colors.primary.contrast,
          valueBubbleBackgroundColor: tokens.colors.primary.value,
          valueBubbleBorderColor: tokens.colors.primary.value,
          valueBubbleColor: tokens.colors.primary.contrast,
        },
        disabled: {
          activeMarkColor: tokens.colors.surface.elevated.value,
          activeTrackColor: tokens.colors.border.strong.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.text.disabled,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.border.strong.value,
          thumbBorderColor: tokens.colors.border.strong.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: "transparent",
          valueBubbleBackgroundColor: tokens.colors.surface.elevated.value,
          valueBubbleBorderColor: tokens.colors.border.default.value,
          valueBubbleColor: tokens.colors.text.disabled,
        },
      },
      outlined: {
        default: {
          activeMarkColor: tokens.colors.primary.contrast,
          activeTrackColor: tokens.colors.primary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.primary.value,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.surface.elevated.value,
          thumbBorderColor: tokens.colors.primary.value,
          thumbBorderWidth: tokens.borderSize.md,
          thumbHighlightColor: "transparent",
          valueBubbleBackgroundColor: "transparent",
          valueBubbleBorderColor: tokens.colors.primary.value,
          valueBubbleColor: tokens.colors.primary.value,
        },
        focused: {
          activeMarkColor: tokens.colors.primary.contrast,
          activeTrackColor: tokens.colors.primary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.primary.value,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.surface.elevated.value,
          thumbBorderColor: tokens.colors.primary.value,
          thumbBorderWidth: tokens.borderSize.md,
          thumbHighlightColor: "transparent",
          valueBubbleBackgroundColor: "transparent",
          valueBubbleBorderColor: tokens.colors.primary.value,
          valueBubbleColor: tokens.colors.primary.value,
        },
        disabled: {
          activeMarkColor: tokens.colors.surface.elevated.value,
          activeTrackColor: tokens.colors.border.strong.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.text.disabled,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.border.strong.value,
          thumbBorderColor: tokens.colors.border.strong.value,
          thumbBorderWidth: tokens.borderSize.md,
          thumbHighlightColor: "transparent",
          valueBubbleBackgroundColor: tokens.colors.surface.elevated.value,
          valueBubbleBorderColor: tokens.colors.border.default.value,
          valueBubbleColor: tokens.colors.text.disabled,
        },
      },
      soft: {
        default: {
          activeMarkColor: tokens.colors.secondary.contrast,
          activeTrackColor: tokens.colors.secondary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.secondary.contrast,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.accent.value,
          thumbBorderColor: tokens.colors.accent.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: tokens.colors.accent.contrast,
          valueBubbleBackgroundColor: tokens.colors.secondary.value,
          valueBubbleBorderColor: tokens.colors.secondary.value,
          valueBubbleColor: tokens.colors.secondary.contrast,
        },
        focused: {
          activeMarkColor: tokens.colors.secondary.contrast,
          activeTrackColor: tokens.colors.secondary.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.secondary.contrast,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.accent.value,
          thumbBorderColor: tokens.colors.accent.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: tokens.colors.accent.contrast,
          valueBubbleBackgroundColor: tokens.colors.secondary.value,
          valueBubbleBorderColor: tokens.colors.secondary.value,
          valueBubbleColor: tokens.colors.secondary.contrast,
        },
        disabled: {
          activeMarkColor: tokens.colors.surface.elevated.value,
          activeTrackColor: tokens.colors.border.strong.value,
          inactiveTrackColor: tokens.colors.border.subtle.value,
          labelColor: tokens.colors.text.disabled,
          markColor: tokens.colors.text.primary,
          thumbBackgroundColor: tokens.colors.border.strong.value,
          thumbBorderColor: tokens.colors.border.strong.value,
          thumbBorderWidth: tokens.borderSize.sm,
          thumbHighlightColor: "transparent",
          valueBubbleBackgroundColor: tokens.colors.surface.elevated.value,
          valueBubbleBorderColor: tokens.colors.border.default.value,
          valueBubbleColor: tokens.colors.text.disabled,
        },
      },
    },
  };
}
```

### packages/theme/src/theme/create-tabs-tokens.ts

```tsx
import type { PrimitiveThemeTokens, TabsTokens } from "../types";

export function createTabsTokens(tokens: PrimitiveThemeTokens): TabsTokens {
  return {
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    indicatorHeight: tokens.borderSize.md,
    panelGap: tokens.space.msm,
    states: {
      unselected: {
        color: tokens.colors.text.secondary,
        indicatorColor: tokens.colors.primary.value,
        indicatorOpacity: 0,
      },
      selected: {
        color: tokens.colors.primary.value,
        indicatorColor: tokens.colors.primary.value,
        indicatorOpacity: 1,
      },
      disabledUnselected: {
        color: tokens.colors.text.disabled,
        indicatorColor: tokens.colors.text.disabled,
        indicatorOpacity: 0,
      },
      disabledSelected: {
        color: tokens.colors.text.disabled,
        indicatorColor: tokens.colors.text.disabled,
        indicatorOpacity: 1,
      },
    },
    sizes: {
      small: {
        fontSize: tokens.fontSize.xsm,
        minHeight: 32,
        hitSlop: 6,
        paddingHorizontal: tokens.space.xs,
        paddingVertical: tokens.space.xxs,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        minHeight: 40,
        hitSlop: 2,
        paddingHorizontal: tokens.space.mxs,
        paddingVertical: tokens.space.xs,
      },
      large: {
        fontSize: tokens.fontSize.sm,
        minHeight: 48,
        hitSlop: 0,
        paddingHorizontal: tokens.space.sm,
        paddingVertical: tokens.space.mxs,
      },
    },
  };
}
```

### packages/theme/src/theme/create-toast-tokens.ts

```tsx
import type { PrimitiveThemeTokens, ToastTokens } from "../types";

export function createToastTokens(tokens: PrimitiveThemeTokens): ToastTokens {
  return {
    enterDuration: 180,
    exitDuration: 150,
    stackDuration: 220,
    actionFontWeight: tokens.fontWeight.semiBold,
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.lg,
    padding: tokens.space.sm,
    gap: tokens.space.xs,
    stackLimit: 5,
    stackScaleStep: 0.04,
    contentGap: tokens.space.xxs,
    edgeOffset: tokens.space.sm,
    topOffset: tokens.space.xs,
    iconSize: 24,
    closeIconSize: 18,
    closeColor: tokens.colors.text.tertiary,
    iconContainerSize: tokens.space.md,
    actionMinSize: tokens.space.md,
    titleColor: tokens.colors.text.primary,
    descriptionColor: tokens.colors.text.secondary,
    actionColor: tokens.colors.primary.value,
    disabledColor: tokens.colors.text.disabled,
    titleFontSize: tokens.fontSize.sm,
    titleLineHeight: tokens.lineHeight.sm,
    descriptionFontSize: tokens.fontSize.xsm,
    descriptionLineHeight: tokens.lineHeight.xsm,
    zIndexBase: 2000,
    tones: { ...tokens.colors.feedback },
  };
}
```

### packages/theme/src/theme/dark.theme.ts

```tsx
import { ShadowScale } from "../constants";
import { PrimitiveThemeTokens } from "../types";
import {
  BorderSizeTokens,
  CodeFontFamilyToken,
  DarkColors,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LetterSpacingTokens,
  LineHeightTokens,
  RadiiTokens,
  SpaceTokens,
} from "./tokens.theme";

export const DarkTheme: PrimitiveThemeTokens = {
  shadows: ShadowScale,
  codeFontFamily: CodeFontFamilyToken,
  colors: DarkColors,
  space: SpaceTokens,
  radii: RadiiTokens,
  fontFamily: FontFamilyTokens,
  borderSize: BorderSizeTokens,
  fontSize: FontSizeTokens,
  fontWeight: FontWeightTokens,
  lineHeight: LineHeightTokens,
  letterSpacing: LetterSpacingTokens,
};
```

### packages/theme/src/theme/index.ts

```tsx
export { DarkTheme } from "./dark.theme";
export { LightTheme } from "./light.theme";
export * from "./tokens.theme";
export * from "./create-charts-tokens";
export * from "./create-pagination-tokens";
export * from "./create-slider-tokens";
export * from "./create-segmented-control-tokens";
export * from "./create-tabs-tokens";
export * from "./create-carousel-tokens";

export * from "./create-toast-tokens";
export * from "./create-popover-tokens";
export * from "./create-modal-tokens";

export * from "./create-color-picker-tokens";
```

### packages/theme/src/theme/light.theme.ts

```tsx
import { ShadowScale } from "../constants";
import { PrimitiveThemeTokens } from "../types";
import {
  BorderSizeTokens,
  CodeFontFamilyToken,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LetterSpacingTokens,
  LightColors,
  LineHeightTokens,
  RadiiTokens,
  SpaceTokens,
} from "./tokens.theme";

export const LightTheme: PrimitiveThemeTokens = {
  shadows: ShadowScale,
  codeFontFamily: CodeFontFamilyToken,
  colors: LightColors,
  space: SpaceTokens,
  radii: RadiiTokens,
  fontFamily: FontFamilyTokens,
  borderSize: BorderSizeTokens,
  fontSize: FontSizeTokens,
  fontWeight: FontWeightTokens,
  lineHeight: LineHeightTokens,
  letterSpacing: LetterSpacingTokens,
};
```

### packages/theme/src/theme/tokens.theme.ts

```tsx
import type {
  BorderSize,
  ComponentsTokens,
  FontFamily,
  FontSize,
  FontWeight,
  FontWeightItalic,
  FontWeightNormal,
  FontWeightValue,
  LetterSpacings,
  LineHeight,
  NeutralColor,
  PrimitiveThemeTokens,
  Radii,
  Space,
  ThemeColors,
} from "../types";
import { createAccordionTokens } from "./create-accordion-tokens";
import { createAvatarTokens } from "./create-avatar-tokens";
import { createBadgeTokens } from "./create-badge-tokens";
import { createButtonTokens } from "./create-button-tokens";
import { createCardTokens } from "./create-card-tokens";
import { createCarouselTokens } from "./create-carousel-tokens";
import { createChartsTokens } from "./create-charts-tokens";
import { createCheckboxTokens } from "./create-checkbox-tokens";
import { createColorPickerTokens } from "./create-color-picker-tokens";
import {
  createControlAddonTokens,
  createControlContainerTokens,
  createControlErrorTokens,
  createControlInputTokens,
  createControlLabelTokens,
} from "./create-control-tokens";
import { createDataStateTokens } from "./create-data-state-tokens";
import { createDatetimePickerTokens } from "./create-datetime-picker";
import { createDividerTokens } from "./create-divider-tokens";
import { createFlyoutTokens } from "./create-flyout-tokens";
import { createIconButtonTokens } from "./create-icon-button-tokens";
import { createIconTokens } from "./create-icon-tokens";
import { createListTokens } from "./create-list-tokens";
import { createModalTokens } from "./create-modal-tokens";
import { createPaginationTokens } from "./create-pagination-tokens";
import { createPopoverTokens } from "./create-popover-tokens";
import { createPressableTokens } from "./create-pressable-tokens";
import { createProgressTokens } from "./create-progress-tokens";
import { createRadioTokens } from "./create-radio-tokens";
import { createSegmentedControlTokens } from "./create-segmented-control-tokens";
import { createSelectTokens } from "./create-select-tokens";
import { createSkeletonTokens } from "./create-skeleton-tokens";
import { createSliderTokens } from "./create-slider-tokens";
import { createSpinnerTokens } from "./create-spinner-tokens";
import { createStepperTokens } from "./create-stepper-tokens";
import { createSwitchTokens } from "./create-switch-tokens";
import { createTabsTokens } from "./create-tabs-tokens";
import { createTagTokens } from "./create-tag-tokens";
import { createTextareaTokens } from "./create-textarea-tokens";
import { createTimePickerTokens } from "./create-time-picker-tokens";
import { createToastTokens } from "./create-toast-tokens";

export const CodeFontFamilyToken = "monospace";

export { ChartColorTokens } from "./chart-color-tokens";

export const SpaceTokens: Space = {
  none: 0,
  xxs: 4,
  xs: 8,
  mxs: 12,
  sm: 16,
  msm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  xxl: 96,
};

export const BorderSizeTokens: BorderSize = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 5,
  xxl: 10,
};

export const RadiiTokens: Radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  xxl: 64,
  xxxl: 128,
  round: 100000,
};

export const FontSizeTokens: FontSize = {
  xxs: 8,
  xs: 12,
  xsm: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  huge: 36,
  massive: 40,
  giant: 48,
  colossal: 56,
};

export const LineHeightTokens: LineHeight = {
  xxs: 12,
  xs: 16,
  xsm: 20,
  sm: 24,
  md: 26,
  lg: 28,
  xl: 32,
  xxl: 36,
  xxxl: 40,
  huge: 44,
  massive: 48,
  giant: 56,
  colossal: 64,
};

export const LetterSpacingTokens: LetterSpacings = {
  tightest: -1,
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.25,
  wider: 0.5,
  widest: 0.75,
  ultraWide: 1,
};

export const FontWeightTokens: FontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const FontFamilyWeightsNormalTokens: Record<
  FontWeightValue,
  FontWeightNormal
> = {
  100: "Montserrat_100Thin",
  200: "Montserrat_200ExtraLight",
  300: "Montserrat_300Light",
  400: "Montserrat_400Regular",
  500: "Montserrat_500Medium",
  600: "Montserrat_600SemiBold",
  700: "Montserrat_700Bold",
  800: "Montserrat_800ExtraBold",
  900: "Montserrat_900Black",
};

export const FontFamilyWeightsItalicTokens: Record<
  FontWeightValue,
  FontWeightItalic
> = {
  100: "Montserrat_100Thin_Italic",
  200: "Montserrat_200ExtraLight_Italic",
  300: "Montserrat_300Light_Italic",
  400: "Montserrat_400Regular_Italic",
  500: "Montserrat_500Medium_Italic",
  600: "Montserrat_600SemiBold_Italic",
  700: "Montserrat_700Bold_Italic",
  800: "Montserrat_800ExtraBold_Italic",
  900: "Montserrat_900Black_Italic",
};

export const FontFamilyTokens: FontFamily = {
  normal: FontFamilyWeightsNormalTokens,
  italic: FontFamilyWeightsItalicTokens,
};

export const NeutralColorTokens: NeutralColor = {
  "0": "#ffffff",
  "1": "#f8f9fa",
  "2": "#f1f3f5",
  "3": "#e9ecef",
  "4": "#dee2e6",
  "5": "#ced4da",
  "6": "#adb5bd",
  "7": "#868e96",
  "8": "#495057",
  "9": "#343a40",
  "10": "#212529",
  "11": "#16191d",
  "12": "#0d0f12",
  "13": "#000000",
};

export const LightColors: ThemeColors = {
  primary: {
    value: "#F55D6B",
    contrast: NeutralColorTokens["0"],
  },

  accent: {
    value: "#FA9EA7",
    contrast: NeutralColorTokens["11"],
  },

  secondary: {
    value: "#FEE7E9",
    contrast: "#c92a3b",
  },

  neutral: NeutralColorTokens,

  surface: {
    canvas: {
      value: NeutralColorTokens["2"],
      contrast: NeutralColorTokens["11"],
    },
    subtle: {
      value: NeutralColorTokens["2"],
      contrast: NeutralColorTokens["11"],
    },
    default: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
    elevated: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
    inverse: {
      value: NeutralColorTokens["13"],
      contrast: NeutralColorTokens["0"],
    },
  },

  text: {
    primary: NeutralColorTokens["11"],
    secondary: NeutralColorTokens["10"],
    tertiary: NeutralColorTokens["9"],
    inverse: NeutralColorTokens["0"],
    disabled: NeutralColorTokens["7"],
  },

  border: {
    subtle: {
      value: NeutralColorTokens["3"],
      contrast: NeutralColorTokens["9"],
    },
    default: {
      value: NeutralColorTokens["4"],
      contrast: NeutralColorTokens["10"],
    },
    strong: {
      value: NeutralColorTokens["6"],
      contrast: NeutralColorTokens["11"],
    },
    focus: {
      value: "#c92a3b",
      contrast: NeutralColorTokens["0"],
    },
  },

  feedback: {
    error: {
      value: "#c92a2a",
      contrast: "#fff5f5",
    },
    warning: {
      value: "#a65300",
      contrast: "#fff4e6",
    },
    success: {
      value: "#526b00",
      contrast: "#f4fce3",
    },
    info: {
      value: "#1864ab",
      contrast: "#e7f5ff",
    },
  },

  overlay: "rgba(0, 0, 0, 0.45)",

  white: NeutralColorTokens["0"],
  black: NeutralColorTokens["13"],
};

export const DarkColors: ThemeColors = {
  primary: {
    value: "#FA9EA7",
    contrast: NeutralColorTokens["11"],
  },

  accent: {
    value: "#f55d6b",
    contrast: NeutralColorTokens["11"],
  },

  secondary: {
    value: "#3b2027",
    contrast: "#FA9EA7",
  },

  neutral: NeutralColorTokens,

  surface: {
    canvas: {
      value: NeutralColorTokens["11"],
      contrast: NeutralColorTokens["0"],
    },
    subtle: {
      value: NeutralColorTokens["11"],
      contrast: NeutralColorTokens["0"],
    },
    default: {
      value: NeutralColorTokens["10"],
      contrast: NeutralColorTokens["0"],
    },
    elevated: {
      value: NeutralColorTokens["9"],
      contrast: NeutralColorTokens["0"],
    },
    inverse: {
      value: NeutralColorTokens["0"],
      contrast: NeutralColorTokens["11"],
    },
  },

  text: {
    primary: NeutralColorTokens["0"],
    secondary: NeutralColorTokens["2"],
    tertiary: NeutralColorTokens["6"],
    inverse: NeutralColorTokens["11"],
    disabled: NeutralColorTokens["7"],
  },

  border: {
    subtle: {
      value: NeutralColorTokens["7"],
      contrast: NeutralColorTokens["6"],
    },
    default: {
      value: NeutralColorTokens["6"],
      contrast: NeutralColorTokens["2"],
    },
    strong: {
      value: NeutralColorTokens["5"],
      contrast: NeutralColorTokens["0"],
    },
    focus: {
      value: "#FA9EA7",
      contrast: NeutralColorTokens["11"],
    },
  },

  feedback: {
    error: {
      value: "#ff8787",
      contrast: "#3b1515",
    },
    warning: {
      value: "#ffc078",
      contrast: "#3b250f",
    },
    success: {
      value: "#c0eb75",
      contrast: "#26320f",
    },
    info: {
      value: "#74c0fc",
      contrast: "#102a43",
    },
  },

  overlay: "rgba(0, 0, 0, 0.65)",

  white: NeutralColorTokens["0"],
  black: NeutralColorTokens["13"],
};

export function createComponentsTokens(
  tokens: PrimitiveThemeTokens,
): ComponentsTokens {
  return {
    colorPicker: createColorPickerTokens(tokens),
    charts: createChartsTokens(tokens),
    modal: createModalTokens(tokens),
    toast: createToastTokens(tokens),
    popover: createPopoverTokens(tokens),
    carousel: createCarouselTokens(tokens),
    accordion: createAccordionTokens(tokens),
    avatar: createAvatarTokens(tokens),
    badge: createBadgeTokens(tokens),
    button: createButtonTokens(tokens),
    card: createCardTokens(tokens),
    list: createListTokens(tokens),
    checkbox: createCheckboxTokens(tokens),
    iconButton: createIconButtonTokens(tokens),
    icon: createIconTokens(),
    pagination: createPaginationTokens(tokens),
    pressable: createPressableTokens(),
    progress: createProgressTokens(tokens),
    radio: createRadioTokens(tokens),
    tag: createTagTokens(tokens),
    controlAddon: createControlAddonTokens(tokens),
    controlContainer: createControlContainerTokens(tokens),
    controlError: createControlErrorTokens(tokens),
    controlInput: createControlInputTokens(tokens),
    controlLabel: createControlLabelTokens(tokens),
    select: createSelectTokens(tokens),
    segmentedControl: createSegmentedControlTokens(tokens),
    tabs: createTabsTokens(tokens),
    datetimePicker: createDatetimePickerTokens(tokens),
    divider: createDividerTokens(tokens),
    timePicker: createTimePickerTokens(tokens),
    flyout: createFlyoutTokens(tokens),
    skeleton: createSkeletonTokens(tokens),
    slider: createSliderTokens(tokens),
    spinner: createSpinnerTokens(tokens),
    stepper: createStepperTokens(tokens),
    switch: createSwitchTokens(tokens),
    textarea: createTextareaTokens(tokens),
    dataState: createDataStateTokens(tokens),
  };
}
```

### packages/theme/src/types/accordion-tokens.types.ts

```tsx
import type { ControlVisualState, VisualStateTokens } from "./components.types";

export interface AccordionTriggerAppearanceTokens {
  backgroundColor: string;
  iconColor: string;
  opacity: number;
  pressedOpacity: number;
  titleColor: string;
}

export interface AccordionTokens {
  animationDuration: number;
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
  content: {
    paddingBottom: number;
    paddingHorizontal: number;
  };
  dividerColor: string;
  dividerWidth: number;
  iconSize: number;
  trigger: {
    gap: number;
    minHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
    states: VisualStateTokens<
      ControlVisualState,
      AccordionTriggerAppearanceTokens
    >;
  };
}
```

### packages/theme/src/types/avatar-tokens.types.ts

```tsx
import type { ComponentSize, DisplayVariant } from "./components.types";

export type AvatarStatus = "online" | "offline" | "away" | "busy";

export interface AvatarSizeTokens {
  fontSize: number;
  size: number;
  statusBorderWidth: number;
  statusSize: number;
}

export interface AvatarVariantTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface AvatarTokens {
  borderWidth: number;
  fontFamily: string;
  sizes: Record<ComponentSize, AvatarSizeTokens>;
  statusBorderColor: string;
  statusColors: Record<AvatarStatus, string>;
  variants: Record<DisplayVariant, AvatarVariantTokens>;
}
```

### packages/theme/src/types/badge-tokens.types.ts

```tsx
import type { ComponentSize, DisplayVariant } from "./components.types";

export type BadgeTone =
  | "primary"
  | "secondary"
  | "neutral"
  | "error"
  | "warning"
  | "success"
  | "info";

export interface BadgeSizeTokens {
  fontSize: number;
  height: number;
  iconSize: number;
  lineHeight: number;
  minWidth: number;
  paddingHorizontal: number;
}

export interface BadgeVariantTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type BadgeColorTokens = Record<DisplayVariant, BadgeVariantTokens>;

export interface BadgeTokens {
  addonHitSlop: number;
  borderRadius: number;
  borderWidth: number;
  fontFamily: string;
  gap: number;
  sizes: Record<ComponentSize, BadgeSizeTokens>;
  colors: Record<BadgeTone, BadgeColorTokens>;
}
```

### packages/theme/src/types/border.types.ts

```tsx
import { ViewStyle } from "react-native";

export interface BorderProps {
  borderRadius?: ViewStyle["borderRadius"];
  borderTopLeftRadius?: ViewStyle["borderTopLeftRadius"];
  borderTopRightRadius?: ViewStyle["borderTopRightRadius"];
  borderBottomLeftRadius?: ViewStyle["borderBottomLeftRadius"];
  borderBottomRightRadius?: ViewStyle["borderBottomRightRadius"];

  borderWidth?: ViewStyle["borderWidth"];
  borderTopWidth?: ViewStyle["borderTopWidth"];
  borderRightWidth?: ViewStyle["borderRightWidth"];
  borderBottomWidth?: ViewStyle["borderBottomWidth"];
  borderLeftWidth?: ViewStyle["borderLeftWidth"];

  borderColor?: ViewStyle["borderColor"];
  borderTopColor?: ViewStyle["borderTopColor"];
  borderRightColor?: ViewStyle["borderRightColor"];
  borderBottomColor?: ViewStyle["borderBottomColor"];
  borderLeftColor?: ViewStyle["borderLeftColor"];

  borderStyle?: ViewStyle["borderStyle"]; // "solid" | "dotted" | "dashed"
}
```

### packages/theme/src/types/buttons-tokens.types.ts

```tsx
import type {
  ActionVariant,
  ActionVisualState,
  ComponentSize,
  VisualStateTokens,
} from "./components.types";

export type ButtonSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingVertical: number;
    paddingHorizontal: number;
    fontSize: number;
  }
>;

export type IconButtonSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    padding: number;
  }
>;

export interface ActionAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type ButtonVariantTokens = Record<
  ActionVariant,
  VisualStateTokens<ActionVisualState, ActionAppearanceTokens>
>;

export type IconButtonVariantTokens = Record<
  ActionVariant,
  VisualStateTokens<ActionVisualState, ActionAppearanceTokens>
>;

export interface ButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: ButtonSizeTokens;
  variants: ButtonVariantTokens;
}

export interface IconButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: IconButtonSizeTokens;
  variants: IconButtonVariantTokens;
}
```

### packages/theme/src/types/card-tokens.types.ts

```tsx
export interface CardSectionTokens {
  gap: number;
  padding: number;
}

export interface CardTokens {
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
  content: CardSectionTokens;
  footer: CardSectionTokens;
  header: CardSectionTokens;
  mediaBackgroundColor: string;
}
```

### packages/theme/src/types/carousel-tokens.types.ts

```tsx
import type {
  AvailabilityVisualState,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export interface CarouselIndicatorAppearanceTokens {
  backgroundColor: string;
}

export interface CarouselCounterAppearanceTokens {
  color: string;
}

export interface CarouselTokens {
  gap: number;
  slideGap: number;
  borderRadius: number;
  indicatorGap: number;
  indicator: {
    borderRadius: number;
    targetSize: number;
    variants: Record<"dots" | "segments", { width: number; height: number }>;
    states: VisualStateTokens<
      SelectionVisualState,
      CarouselIndicatorAppearanceTokens
    >;
  };
  counter: {
    states: VisualStateTokens<
      AvailabilityVisualState,
      CarouselCounterAppearanceTokens
    >;
  };
}
```

### packages/theme/src/types/chart.types.ts

```tsx
export type ChartColorPalette = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
```

### packages/theme/src/types/charts-tokens.types.ts

```tsx
import type { DimensionValue } from "react-native";

import type { ChartColorPalette } from "./chart.types";
import type { FontWeightValue } from "./tokens.types";

export interface ChartsLabelTokens {
  color: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: FontWeightValue;
}

export interface ChartsTokens {
  palette: ChartColorPalette;
  insets: { top: number; right: number; bottom: number; left: number };
  axis: { width: number; tickLength: number; labelGap: number };
  grid: { width: number };
  line: { width: number };
  bar: { categoryPadding: number; seriesPadding: number; radius?: number };
  pie: { ringPadding: number; cornerRadius?: number };
  /** Optional for compatibility with existing full token objects. */
  label?: ChartsLabelTokens;
  selection?: { radius: number; width: number };
  legend?: {
    gap: number;
    padding: number;
    swatchSize: number;
    swatchRadius: number;
  };
  tooltip?: {
    offset: number;
    maxWidth: DimensionValue;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    padding?: number;
    gap?: number;
  };
}
```

### packages/theme/src/types/checkbox-tokens.types.ts

```tsx
import type {
  ComponentSize,
  SelectionVariant,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export type CheckboxSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    iconSize: number;
    hitSlop: number;
  }
>;

export interface CheckboxAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type CheckboxVariantTokens = Record<
  SelectionVariant,
  VisualStateTokens<SelectionVisualState, CheckboxAppearanceTokens>
>;

export interface CheckboxTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: CheckboxSizeTokens;
  variants: CheckboxVariantTokens;
}
```

### packages/theme/src/types/color-picker-tokens.types.ts

```tsx
import type { ComponentSize } from "./components.types";

export interface ColorPickerPreset {
  label: string;
  color: string;
  disabled?: boolean;
}

export interface ColorPickerTokens {
  gap: number;
  rowGap: number;
  sliderLabelGap: number;
  presetsLabelGap: number;
  presetsGap: number;
  presetLabelGap: number;
  alphaFieldFlex: number;
  padding: number;
  borderRadius: number;
  spectrumBorderRadius: number;
  previewBorderRadius: number;
  swatchBorderRadius: number;
  swatchRingPadding: number;
  swatchRingBorderWidth: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  labelColor: string;
  selectedBorderColor: string;
  indicatorColor: string;
  indicatorBorderRadius: number;
  indicatorBorderWidth: number;
  indicatorShadowOffsetX: number;
  indicatorShadowOffsetY: number;
  indicatorShadowBlurRadius: number;
  indicatorShadowColor: string;
  checkerLightColor: string;
  checkerDarkColor: string;
  checkerSize: number;
  disabledOpacity: number;
  presets: readonly ColorPickerPreset[];
  sizes: Record<
    ComponentSize,
    {
      spectrumHeight: number;
      indicatorSize: number;
      previewSize: number;
      swatchSize: number;
      swatchCheckSize: number;
      swatchTargetSize: number;
    }
  >;
}
```

### packages/theme/src/types/color.types.ts

```tsx
import { TextStyle, ViewStyle } from "react-native";

export interface ColorProps {
  color?: TextStyle["color"];
  backgroundColor?: ViewStyle["backgroundColor"];
  opacity?: ViewStyle["opacity"];
}
```

### packages/theme/src/types/components.types.ts

```tsx
export type ComponentSize = "small" | "medium" | "large";

export type VisualStateTokens<VisualState extends PropertyKey, Tokens> = Record<
  VisualState,
  Tokens
>;

export type ControlVisualState = "default" | "focused" | "disabled";

export interface ControlState {
  disabled?: boolean;
  focused?: boolean;
}

export type ActionVisualState = "default" | "loading" | "disabled";

export interface ActionState {
  disabled?: boolean;
  loading?: boolean;
}

export type AvailabilityVisualState = "default" | "disabled";

export interface AvailabilityState {
  disabled?: boolean;
}

export type FieldVisualState =
  | "default"
  | "error"
  | "disabled"
  | "disabledError";

export interface FieldState {
  disabled?: boolean;
  error?: boolean;
}

export type SelectionVisualState =
  | "unselected"
  | "selected"
  | "disabledUnselected"
  | "disabledSelected";

export interface SelectionState {
  disabled?: boolean;
  selected: boolean;
}

export type SelectionItemVisualState = "default" | "selected";

export interface SelectionItemState {
  selected: boolean;
}

export type ActionVariant = "filled" | "outlined" | "soft" | "ghost";

export type DisplayVariant = "filled" | "outlined" | "soft";

export type FieldVariant = "filled" | "outlined";

export type SelectionVariant = "filled" | "outlined" | "soft";

/** @deprecated Use the variant type for the relevant component family. */
export type ComponentVariant = ActionVariant;
```

### packages/theme/src/types/control-tokens.types.ts

```tsx
import type {
  ComponentSize,
  FieldVariant,
  FieldVisualState,
  VisualStateTokens,
} from "./components.types";

export interface ControlAddonAppearanceTokens {
  iconColor: string;
}

export type ControlAddonVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlAddonAppearanceTokens>
>;

export interface ControlAddonTokens {
  marginHorizontal: number;
  hitSlop: number;
  variants: ControlAddonVariantTokens;
}

export type ControlContainerSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
  }
>;

export interface ControlContainerAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  opacity: number;
}

export type ControlContainerVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlContainerAppearanceTokens>
>;

export interface ControlContainerTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: ControlContainerSizeTokens;
  variants: ControlContainerVariantTokens;
}

export interface ControlErrorTokens {
  marginTop: number;
  color: string;
  fontSize: number;
}

export type ControlInputSizeTokens = Record<
  ComponentSize,
  {
    fontSize: number;
  }
>;

export interface ControlInputAppearanceTokens {
  color: string;
  placeholderColor: string;
}

export type ControlInputVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlInputAppearanceTokens>
>;

export interface ControlInputTokens {
  flex: number;
  fontFamily: string;
  paddingHorizontal: number;
  sizes: ControlInputSizeTokens;
  variants: ControlInputVariantTokens;
}

export interface ControlLabelAppearanceTokens {
  color: string;
}

export interface ControlLabelTokens {
  marginBottom: number;
  fontSize: number;
  states: VisualStateTokens<FieldVisualState, ControlLabelAppearanceTokens>;
}
```

### packages/theme/src/types/data-state-tokens.types.ts

```tsx
export interface DataStateDetailsTokens {
  gap: number;
  iconSize: number;
  iconColor: string;
}

export interface DataStateActionsFooterTokens {
  gap: number;
}

export interface DataStateContentTokens {
  zIndex: number;
}

export interface DataStateLoadingTokens {
  transitionDuration: number;
  loaderZIndex: number;
}

export interface DataStateTokens {
  details: DataStateDetailsTokens;
  actionsFooter: DataStateActionsFooterTokens;
  content: DataStateContentTokens;
  loading: DataStateLoadingTokens;
}
```

### packages/theme/src/types/datetime-picker-tokens.types.ts

```tsx
import type { VisualStateTokens } from "./components.types";

export type DatetimePickerDayVisualState =
  | "default"
  | "outsideMonth"
  | "range"
  | "selected";

export interface DatetimePickerDayState {
  currentMonth?: boolean;
  inRange?: boolean;
  selected?: boolean;
}

export interface DatetimePickerCalendarTokens {
  dayNamesMarginBottom: number;
  weeksGap: number;
}

export interface DatetimePickerDayAppearanceTokens {
  backgroundColor: string;
  color: string;
}

export interface DatetimePickerDayTokens {
  size: number;
  borderRadius: number;
  states: VisualStateTokens<
    DatetimePickerDayVisualState,
    DatetimePickerDayAppearanceTokens
  >;
}

export interface DatetimePickerFlyoutActionsTokens {
  gap: number;
  buttonsGap: number;
  clearColor: string;
}

export interface DatetimePickerQuickDateOptionsTokens {
  gap: number;
}

export interface DatetimePickerVisibleDateSelectTokens {
  gap: number;
}

export interface DatePickerFlyoutTokens {
  gap: number;
}

export interface DatetimePickerFlyoutTokens {
  gap: number;
}

export interface DatetimeRangePickerFlyoutTokens {
  gap: number;
  timeInputsGap: number;
}

export interface DatetimePickerTokens {
  calendar: DatetimePickerCalendarTokens;
  day: DatetimePickerDayTokens;
  datePickerFlyout: DatePickerFlyoutTokens;
  datetimePickerFlyout: DatetimePickerFlyoutTokens;
  datetimeRangePickerFlyout: DatetimeRangePickerFlyoutTokens;
  flyoutActions: DatetimePickerFlyoutActionsTokens;
  quickDateOptions: DatetimePickerQuickDateOptionsTokens;
  visibleDateSelect: DatetimePickerVisibleDateSelectTokens;
}
```

### packages/theme/src/types/dimension.types.ts

```tsx
import { ViewStyle } from "react-native";

export interface DimensionProps {
  width?: ViewStyle["width"];
  height?: ViewStyle["height"];
  minWidth?: ViewStyle["minWidth"];
  maxWidth?: ViewStyle["maxWidth"];
  minHeight?: ViewStyle["minHeight"];
  maxHeight?: ViewStyle["maxHeight"];
  aspectRatio?: ViewStyle["aspectRatio"];
  overflow?: ViewStyle["overflow"];
}
```

### packages/theme/src/types/divider-tokens.types.ts

```tsx
export type DividerTone =
  | "subtle"
  | "default"
  | "strong"
  | "primary"
  | "inverse";

export type DividerTokenOrientation = "horizontal" | "vertical";

export type DividerTokenInset = "none" | "start" | "end" | "both";

export interface DividerLayoutTokens {
  height?: number;
  marginBottom: number;
  marginEnd: number;
  marginStart: number;
  marginTop: number;
  width?: number;
}

export interface DividerTokens {
  colors: Record<DividerTone, string>;
  layouts: Record<
    DividerTokenOrientation,
    Record<DividerTokenInset, DividerLayoutTokens>
  >;
}

export interface DividerTokenState {
  inset: DividerTokenInset;
  orientation: DividerTokenOrientation;
  tone: DividerTone;
}

export type ResolvedDividerTokens = DividerLayoutTokens & {
  backgroundColor: string;
};
```

### packages/theme/src/types/flex.types.ts

```tsx
import { ViewStyle } from "react-native";

export type FlexProps = {
  flex?: ViewStyle["flex"];
  flexGrow?: ViewStyle["flexGrow"];
  flexShrink?: ViewStyle["flexShrink"];
  flexBasis?: ViewStyle["flexBasis"];

  flexDirection?: ViewStyle["flexDirection"];
  flexWrap?: ViewStyle["flexWrap"];

  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  alignSelf?: ViewStyle["alignSelf"];
  alignContent?: ViewStyle["alignContent"];

  gap?: ViewStyle["gap"];
  rowGap?: ViewStyle["rowGap"];
  columnGap?: ViewStyle["columnGap"];

  // positioning (often used with flex layouts)
  position?: ViewStyle["position"];
  top?: ViewStyle["top"];
  right?: ViewStyle["right"];
  bottom?: ViewStyle["bottom"];
  left?: ViewStyle["left"];
  zIndex?: ViewStyle["zIndex"];
};
```

### packages/theme/src/types/flyout-tokens.types.ts

```tsx
export interface FlyoutHandleTokens {
  width: `${number}%`;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}

export type FlyoutPlacement = "top" | "bottom";

export interface FlyoutPlacementTokens {
  container: {
    top?: number;
    bottom?: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
  };
  handleContainer: {
    top?: number;
    bottom?: number;
    height: number;
  };
}

export interface FlyoutTitleTokens {
  paddingVertical: number;
  paddingHorizontal: number;
  color: string;
  fontSize: number;
  lineHeight: number;
}

export interface FlyoutTokens {
  enterSpring: { damping: number; stiffness: number; mass: number };
  exitDuration: number;
  zIndexBase: number;

  maxHeightRatio: number;

  overlayColor: string;
  overlayVisibleOpacity: number;

  backgroundColor: string;
  contentPaddingHorizontal: number;

  hiddenOpacity: number;

  title: FlyoutTitleTokens;
  handle: FlyoutHandleTokens;
  placements: Record<FlyoutPlacement, FlyoutPlacementTokens>;
}

export interface FlyoutTokenState {
  placement: FlyoutPlacement;
}

export type ResolvedFlyoutTokens = Omit<FlyoutTokens, "placements"> &
  FlyoutPlacementTokens;
```

### packages/theme/src/types/icon-tokens.types.ts

```tsx
import { ComponentSize } from "./components.types";

export interface IconTokens {
  sizes: Record<ComponentSize, number>;
}
```

### packages/theme/src/types/index.ts

```tsx
export * from "./border.types";
export * from "./color.types";
export * from "./chart.types";
export * from "./charts-tokens.types";
export * from "./components.types";
export * from "./dimension.types";
export * from "./flex.types";
export * from "./shadow.types";
export * from "./spacing.types";
export * from "./style.types";
export * from "./theme-provider.types";
export * from "./tokens.types";
export * from "./typography.types";
export * from "./buttons-tokens.types";
export * from "./accordion-tokens.types";
export * from "./avatar-tokens.types";
export * from "./badge-tokens.types";
export * from "./card-tokens.types";
export * from "./checkbox-tokens.types";
export * from "./tag-tokens.types";
export * from "./control-tokens.types";
export * from "./select-tokens.types";
export * from "./datetime-picker-tokens.types";
export * from "./divider-tokens.types";
export * from "./time-picker-token.types";
export * from "./flyout-tokens.types";
export * from "./icon-tokens.types";
export * from "./pressable-tokens.types";
export * from "./pagination-tokens.types";
export * from "./progress-tokens.types";
export * from "./radio-tokens.types";
export * from "./segmented-control-tokens.types";
export * from "./tabs-tokens.types";
export * from "./skeleton-tokens.types";
export * from "./slider-tokens.types";
export * from "./spinner-tokens.types";
export * from "./stepper-tokens.types";
export * from "./switch-tokens.types";
export * from "./textarea-tokens.types";
export * from "./data-state-tokens.types";

export * from "./list-tokens.types";
export * from "./carousel-tokens.types";

export * from "./toast-tokens.types";
export * from "./popover-tokens.types";
export * from "./modal-tokens.types";

export * from "./color-picker-tokens.types";
```

### packages/theme/src/types/list-tokens.types.ts

```tsx
export interface ListTokens {
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  item: { gap: number; padding: number };
  content: { gap: number };
}
```

### packages/theme/src/types/modal-tokens.types.ts

```tsx
import type { ComponentSize } from "./components.types";

export interface ModalTokens {
  enterDuration: number;
  exitDuration: number;
  zIndexBase: number;
  overlayColor: string;
  overlayVisibleOpacity: number;
  viewportPadding: number;
  closedScale: number;

  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  gap: number;
  headerGap: number;
  footerGap: number;

  titleColor: string;
  titleFontSize: number;
  titleLineHeight: number;

  descriptionColor: string;
  descriptionFontSize: number;
  descriptionLineHeight: number;

  sizes: Record<ComponentSize, { maxWidth: number }>;
}
```

### packages/theme/src/types/pagination-tokens.types.ts

```tsx
import type { ComponentSize, VisualStateTokens } from "./components.types";

export type PaginationVisualState = "default" | "current" | "disabled";

export interface PaginationState {
  current: boolean;
  disabled?: boolean;
}

export interface PaginationAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
  ellipsisColor: string;
}

export interface PaginationSizeToken {
  compactMinWidth: number;
  controlSize: number;
  fontSize: number;
  hitSlop: number;
  iconSize: number;
  paddingHorizontal: number;
}

export interface PaginationTokens {
  borderRadius: number;
  borderWidth: number;
  gap: number;
  sizes: Record<ComponentSize, PaginationSizeToken>;
  states: VisualStateTokens<PaginationVisualState, PaginationAppearanceTokens>;
}
```

### packages/theme/src/types/popover-tokens.types.ts

```tsx
export interface PopoverTokens {
  zIndexBase: number;
  gap: number;
  edgeOffset: number;
  /** @deprecated Popover and Tooltip no longer render arrows. This token is ignored. */
  arrowSize: number;
  maxWidth: number;
  actionMinSize: number;

  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  titleColor: string;
  descriptionColor: string;

  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  paddingHorizontal: number;
  paddingVertical: number;

  tooltip: {
    backgroundColor: string;
    color: string;
    borderRadius: number;
    paddingHorizontal: number;
    paddingVertical: number;
  };
}
```

### packages/theme/src/types/pressable-tokens.types.ts

```tsx
export interface PressableTokens {
  disabledOpacity: number;
  pressedOpacity: number;
}
```

### packages/theme/src/types/progress-tokens.types.ts

```tsx
import type { ComponentSize } from "./components.types";
import type { SpinnerTone } from "./spinner-tokens.types";

export type ProgressVariant = "linear" | "circular";

export type ProgressTone = SpinnerTone;

export interface ProgressSizeTokens {
  linearHeight: number;
  circularSize: number;
  circularStrokeWidth: number;
}

export interface ProgressColorTokens {
  indicatorColor: string;
  trackColor: string;
}

export interface ProgressTokens {
  animationDuration: number;
  borderRadius: number;
  indeterminateLinearWidth: number;
  sizes: Record<ComponentSize, ProgressSizeTokens>;
  colors: Record<ProgressTone, ProgressColorTokens>;
}
```

### packages/theme/src/types/radio-tokens.types.ts

```tsx
import type {
  ComponentSize,
  SelectionVariant,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export type RadioSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    indicatorSize: number;
    hitSlop: number;
  }
>;

export interface RadioAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type RadioVariantTokens = Record<
  SelectionVariant,
  VisualStateTokens<SelectionVisualState, RadioAppearanceTokens>
>;

export interface RadioTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: RadioSizeTokens;
  variants: RadioVariantTokens;
}
```

### packages/theme/src/types/segmented-control-tokens.types.ts

```tsx
import type {
  ComponentSize,
  SelectionState,
  SelectionVariant,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export type SegmentedControlItemLayout = "inline" | "stacked";

export interface SegmentedControlItemLayoutTokens {
  flexDirection: "column" | "row";
  gap: number;
  paddingVertical: number;
}

export interface SegmentedControlSizeToken {
  fontSize: number;
  height: number;
  hitSlop: number;
  iconSize: number;
  layouts: Record<SegmentedControlItemLayout, SegmentedControlItemLayoutTokens>;
  minItemWidth: number;
  paddingHorizontal: number;
}

export type SegmentedControlSizeTokens = Record<
  ComponentSize,
  SegmentedControlSizeToken
>;

export interface SegmentedControlAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface SegmentedControlVariantTokens {
  states: VisualStateTokens<
    SelectionVisualState,
    SegmentedControlAppearanceTokens
  >;
}

export interface SegmentedControlTokens {
  borderRadius: number;
  borderWidth: number;
  itemBorderRadius: number;
  itemBorderWidth: number;
  rootBackgroundColor: string;
  rootBorderColor: string;
  rootGap: number;
  rootPadding: number;
  sizes: SegmentedControlSizeTokens;
  variants: Record<SelectionVariant, SegmentedControlVariantTokens>;
}

export interface SegmentedControlItemTokenState extends SelectionState {
  layout: SegmentedControlItemLayout;
  size: ComponentSize;
  variant: SelectionVariant;
}

export type ResolvedSegmentedControlItemTokens = Omit<
  SegmentedControlSizeToken,
  "layouts"
> &
  SegmentedControlItemLayoutTokens &
  SegmentedControlAppearanceTokens & {
    borderRadius: number;
    borderWidth: number;
  };
```

### packages/theme/src/types/select-tokens.types.ts

```tsx
import type {
  SelectionItemVisualState,
  VisualStateTokens,
} from "./components.types";

export interface SelectOptionAppearanceTokens {
  iconColor: string;
  iconOpacity: number;
}

export interface SelectOptionTokens {
  height: number;
  padding: number;
  states: VisualStateTokens<
    SelectionItemVisualState,
    SelectOptionAppearanceTokens
  >;
}

export interface SelectTokens {
  flyoutHeight: number;
  multiValueGap: number;
  multiValueMarginHorizontal: number;
  option: SelectOptionTokens;
}
```

### packages/theme/src/types/shadow.types.ts

```tsx
import { ViewStyle } from "react-native";

export type ShadowLevel = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type ShadowPosition = "around" | "bottom" | "top";

export type ShadowIntensity = {
  radius: number;
  opacity: number;
  elevation: number;
};

export type ShadowScaleTokens = Record<ShadowLevel, ShadowIntensity>;

export type ShadowProps = {
  shadow?: ShadowLevel;
  shadowPosition?: ShadowPosition;
  shadowColor?: ViewStyle["shadowColor"];
  shadowOpacity?: ViewStyle["shadowOpacity"];
  shadowRadius?: ViewStyle["shadowRadius"];
  shadowOffset?: ViewStyle["shadowOffset"];
  elevation?: ViewStyle["elevation"];
};
```

### packages/theme/src/types/skeleton-tokens.types.ts

```tsx
export interface SkeletonBoneTokens {
  backgroundColor: string;
  borderColor: string;
  initialOpacity: number;
  animatedOpacity: number;
  animationDuration: number;
}

export interface SkeletonTextTokens {
  alignSelf:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  textTransform: "none" | "capitalize" | "uppercase" | "lowercase";
  opacity: number;
}

export interface SkeletonTokens {
  bone: SkeletonBoneTokens;
  text: SkeletonTextTokens;
}
```

### packages/theme/src/types/slider-tokens.types.ts

```tsx
import type {
  ComponentSize,
  ControlVisualState,
  SelectionVariant,
  VisualStateTokens,
} from "./components.types";

/** @deprecated Use SelectionVariant. */
export type SliderVariant = SelectionVariant;

export type SliderSizeTokens = Record<
  ComponentSize,
  {
    trackHeight: number;
    thumbSize: number;
    markSize: number;
  }
>;

export type SliderTrackLayout = "default" | "valueBubble";

export interface SliderTrackLayoutTokens {
  reservedVerticalSpace: number;
}

export interface SliderAppearanceTokens {
  activeMarkColor: string;
  activeTrackColor: string;
  inactiveTrackColor: string;
  labelColor: string;
  markColor: string;
  thumbBackgroundColor: string;
  thumbBorderColor: string;
  thumbBorderWidth: number;
  thumbHighlightColor: string;
  valueBubbleBackgroundColor: string;
  valueBubbleBorderColor: string;
  valueBubbleColor: string;
}

export type SliderVariantTokens = Record<
  SelectionVariant,
  VisualStateTokens<ControlVisualState, SliderAppearanceTokens>
>;

export interface SliderTokens {
  interactionMinHeight: number;
  trackBorderRadius: number;
  thumbBorderRadius: number;
  valueBubbleBorderRadius: number;
  valueBubbleBorderWidth: number;
  valueBubblePaddingHorizontal: number;
  valueBubblePaddingVertical: number;
  valueBubbleGap: number;
  labelGap: number;
  markLabelWidth: number;
  thumbHighlightSize: number;
  valueBubbleMinWidth: number;
  layouts: Record<SliderTrackLayout, SliderTrackLayoutTokens>;
  sizes: SliderSizeTokens;
  variants: SliderVariantTokens;
}

export interface SliderTrackTokenState {
  disabled: boolean;
  layout: SliderTrackLayout;
  size: ComponentSize;
  variant: SelectionVariant;
}

export type ResolvedSliderTrackTokens = SliderTrackLayoutTokens &
  SliderSizeTokens[ComponentSize] &
  SliderAppearanceTokens & {
    trackBorderRadius: number;
  };
```

### packages/theme/src/types/spacing.types.ts

```tsx
import { ViewStyle } from "react-native";

export interface SpacingProps {
  margin?: ViewStyle["margin"];
  marginTop?: ViewStyle["marginTop"];
  marginBottom?: ViewStyle["marginBottom"];
  marginLeft?: ViewStyle["marginLeft"];
  marginRight?: ViewStyle["marginRight"];
  marginHorizontal?: ViewStyle["marginHorizontal"];
  marginVertical?: ViewStyle["marginVertical"];

  padding?: ViewStyle["padding"];
  paddingTop?: ViewStyle["paddingTop"];
  paddingBottom?: ViewStyle["paddingBottom"];
  paddingLeft?: ViewStyle["paddingLeft"];
  paddingRight?: ViewStyle["paddingRight"];
  paddingHorizontal?: ViewStyle["paddingHorizontal"];
  paddingVertical?: ViewStyle["paddingVertical"];
}
```

### packages/theme/src/types/spinner-tokens.types.ts

```tsx
import type { ComponentSize } from "./components.types";

export type SpinnerTone = "primary" | "secondary" | "neutral" | "inverse";

export interface SpinnerTokens {
  baseSize: number;
  sizes: Record<ComponentSize, number>;
  colors: Record<SpinnerTone, string>;
}
```

### packages/theme/src/types/stepper-tokens.types.ts

```tsx
export interface StepperNavigationTokens {
  itemHeight: number;
  itemBackgroundColor: string;
}

export interface StepperTokens {
  navigation: StepperNavigationTokens;
}
```

### packages/theme/src/types/style.types.ts

```tsx
import { BorderProps } from "./border.types";
import { ColorProps } from "./color.types";
import { DimensionProps } from "./dimension.types";
import { FlexProps } from "./flex.types";
import { ShadowProps } from "./shadow.types";
import { SpacingProps } from "./spacing.types";
import { TypographyProps } from "./typography.types";

export type StyleProps = Partial<
  SpacingProps &
    ColorProps &
    ShadowProps &
    BorderProps &
    TypographyProps &
    FlexProps &
    DimensionProps
>;

export type StylePropKey = keyof StyleProps;
```

### packages/theme/src/types/switch-tokens.types.ts

```tsx
import type {
  AvailabilityVisualState,
  ComponentSize,
  SelectionVariant,
  VisualStateTokens,
} from "./components.types";

export type SwitchSizeTokens = Record<
  ComponentSize,
  {
    width: number;
    height: number;
    thumbSize: number;
    trackPadding: number;
    loadingIndicatorScale: number;
    hitSlop: number;
  }
>;

export interface SwitchAppearanceTokens {
  activeBackgroundColor: string;
  activeBorderColor: string;
  activeThumbColor: string;
  inactiveBackgroundColor: string;
  inactiveBorderColor: string;
  inactiveThumbColor: string;
}

export type SwitchVariantTokens = Record<
  SelectionVariant,
  VisualStateTokens<AvailabilityVisualState, SwitchAppearanceTokens>
>;

export interface SwitchTokens {
  animationDuration: number;
  borderWidth: number;
  borderRadius: number;
  thumbBorderRadius: number;
  loadingIndicatorColor: string;
  sizes: SwitchSizeTokens;
  variants: SwitchVariantTokens;
}
```

### packages/theme/src/types/tabs-tokens.types.ts

```tsx
import type {
  ComponentSize,
  SelectionState,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export interface TabsSizeTokens {
  fontSize: number;
  minHeight: number;
  hitSlop: number;
  paddingHorizontal: number;
  paddingVertical: number;
}

export interface TabsItemAppearanceTokens {
  color: string;
  indicatorColor: string;
  indicatorOpacity: number;
}

export interface TabsTokens {
  borderColor: string;
  borderWidth: number;
  indicatorHeight: number;
  panelGap: number;
  sizes: Record<ComponentSize, TabsSizeTokens>;
  states: VisualStateTokens<SelectionVisualState, TabsItemAppearanceTokens>;
}

export interface TabsItemTokenState extends SelectionState {
  size: ComponentSize;
}

export type ResolvedTabsItemTokens = TabsSizeTokens &
  TabsItemAppearanceTokens & {
    indicatorHeight: number;
  };
```

### packages/theme/src/types/tag-tokens.types.ts

```tsx
import type {
  AvailabilityVisualState,
  ComponentSize,
  DisplayVariant,
  VisualStateTokens,
} from "./components.types";

export type TagColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export type TagSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
    minWidth: number;
    fontSize: number;
  }
>;

export interface TagAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type TagVariantTokens = Record<
  DisplayVariant,
  VisualStateTokens<AvailabilityVisualState, TagAppearanceTokens>
>;

export type TagColorTokens = Record<TagColor, TagVariantTokens>;

export interface TagTokens {
  borderWidth: number;
  borderRadius: number;
  gap: number;
  closeHitSlop: number;
  iconMarginLeft: number;
  sizes: TagSizeTokens;
  colors: TagColorTokens;
}
```

### packages/theme/src/types/textarea-tokens.types.ts

```tsx
import type {
  ComponentSize,
  FieldVisualState,
  VisualStateTokens,
} from "./components.types";

export type TextareaSizeTokens = Record<
  ComponentSize,
  {
    lineHeight: number;
    paddingVertical: number;
  }
>;

export interface TextareaAppearanceTokens {
  counterColor: string;
}

export interface TextareaTokens {
  counterFontSize: number;
  footerGap: number;
  footerMarginTop: number;
  sizes: TextareaSizeTokens;
  states: VisualStateTokens<FieldVisualState, TextareaAppearanceTokens>;
}
```

### packages/theme/src/types/theme-provider.types.ts

```tsx
import type { BadgeTokens } from "./badge-tokens.types";
import type { CarouselTokens } from "./carousel-tokens.types";
import type { ChartsTokens } from "./charts-tokens.types";
import type { CheckboxTokens } from "./checkbox-tokens.types";
import type { ColorPickerTokens } from "./color-picker-tokens.types";
import type { ListTokens } from "./list-tokens.types";
import type { ModalTokens } from "./modal-tokens.types";
import type { PopoverTokens } from "./popover-tokens.types";
import type { RadioTokens } from "./radio-tokens.types";
import type { ShadowScaleTokens } from "./shadow.types";
import type { TabsTokens } from "./tabs-tokens.types";
import type { ToastTokens } from "./toast-tokens.types";
import { AccordionTokens } from "./accordion-tokens.types";
import { AvatarTokens } from "./avatar-tokens.types";
import { ButtonTokens, IconButtonTokens } from "./buttons-tokens.types";
import { CardTokens } from "./card-tokens.types";
import {
  ControlAddonTokens,
  ControlContainerTokens,
  ControlErrorTokens,
  ControlInputTokens,
  ControlLabelTokens,
} from "./control-tokens.types";
import { DataStateTokens } from "./data-state-tokens.types";
import { DatetimePickerTokens } from "./datetime-picker-tokens.types";
import { DividerTokens } from "./divider-tokens.types";
import { FlyoutTokens } from "./flyout-tokens.types";
import { IconTokens } from "./icon-tokens.types";
import { PaginationTokens } from "./pagination-tokens.types";
import { PressableTokens } from "./pressable-tokens.types";
import { ProgressTokens } from "./progress-tokens.types";
import { SegmentedControlTokens } from "./segmented-control-tokens.types";
import { SelectTokens } from "./select-tokens.types";
import { SkeletonTokens } from "./skeleton-tokens.types";
import { SliderTokens } from "./slider-tokens.types";
import { SpinnerTokens } from "./spinner-tokens.types";
import { StepperTokens } from "./stepper-tokens.types";
import { SwitchTokens } from "./switch-tokens.types";
import { TagTokens } from "./tag-tokens.types";
import { TextareaTokens } from "./textarea-tokens.types";
import { TimePickerTokens } from "./time-picker-token.types";
import {
  BorderSize,
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacings,
  LineHeight,
  NeutralColor,
  Radii,
  Space,
} from "./tokens.types";

export interface ThemeContextData {
  theme: AppTheme;
}

export type ColorScheme = "light" | "dark";

export type ColorPair = {
  value: string;
  contrast: string;
};

export type ThemeColors = {
  primary: ColorPair;
  accent: ColorPair;
  secondary: ColorPair;

  neutral: NeutralColor;

  surface: {
    /** App and screen backgrounds. */
    canvas: ColorPair;
    /** Muted control fills, tracks, and disabled backgrounds. */
    subtle: ColorPair;
    /** Content panels, cards, and lists. */
    default: ColorPair;
    elevated: ColorPair;
    inverse: ColorPair;
  };

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };

  border: {
    subtle: ColorPair;
    default: ColorPair;
    strong: ColorPair;
    focus: ColorPair;
  };

  feedback: {
    error: ColorPair;
    warning: ColorPair;
    success: ColorPair;
    info: ColorPair;
  };

  overlay: string;

  white: string;
  black: string;
} & ExtendedThemeColors;

export interface ExtendedThemeColors {}

export interface ComponentsThemes {
  (theme: PrimitiveThemeTokens): ComponentsTokens;
}

export interface ComponentsTokens {
  colorPicker: ColorPickerTokens;
  charts: ChartsTokens;
  modal: ModalTokens;
  popover: PopoverTokens;
  toast: ToastTokens;
  carousel: CarouselTokens;
  list: ListTokens;
  accordion: AccordionTokens;
  avatar: AvatarTokens;
  badge: BadgeTokens;
  button: ButtonTokens;
  card: CardTokens;
  checkbox: CheckboxTokens;
  iconButton: IconButtonTokens;
  icon: IconTokens;
  pagination: PaginationTokens;
  pressable: PressableTokens;
  progress: ProgressTokens;
  radio: RadioTokens;
  tag: TagTokens;
  controlAddon: ControlAddonTokens;
  controlContainer: ControlContainerTokens;
  controlError: ControlErrorTokens;
  controlInput: ControlInputTokens;
  controlLabel: ControlLabelTokens;
  select: SelectTokens;
  segmentedControl: SegmentedControlTokens;
  tabs: TabsTokens;
  datetimePicker: DatetimePickerTokens;
  divider: DividerTokens;
  timePicker: TimePickerTokens;
  flyout: FlyoutTokens;
  skeleton: SkeletonTokens;
  slider: SliderTokens;
  spinner: SpinnerTokens;
  stepper: StepperTokens;
  switch: SwitchTokens;
  textarea: TextareaTokens;
  dataState: DataStateTokens;
}

export interface PrimitiveThemeTokens {
  shadows: ShadowScaleTokens;
  codeFontFamily: string;
  colors: ThemeColors;
  space: Space;
  radii: Radii;
  borderSize: BorderSize;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  fontSize: FontSize;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacings;
}

export interface AppTheme extends PrimitiveThemeTokens {
  components: ComponentsTokens;
}
```

### packages/theme/src/types/time-picker-token.types.ts

```tsx
import type {
  SelectionItemVisualState,
  VisualStateTokens,
} from "./components.types";

export interface TimePickerColumnAppearanceTokens {
  color: string;
  fontWeight: number;
}

export interface TimePickerColumnTokens {
  width: number;
  height: number;
  gap: number;

  listWidth: number;
  itemHeight: number;
  visibleItems: number;
  verticalPadding: number;
  initialScrollIndexViewOffset: number;

  fontSize: number;
  states: VisualStateTokens<
    SelectionItemVisualState,
    TimePickerColumnAppearanceTokens
  >;
}

export interface TimePickerFlyoutTokens {
  gap: number;
}

export interface TimePickerColumnsTokens {
  height: number;
  gap: number;
  indicatorHeight: number;
  indicatorWidth: number;
  indicatorTop: number;
  indicatorBorderRadius: number;
  indicatorBackgroundColor: string;
}

export interface TimePickerTokens {
  column: TimePickerColumnTokens;
  flyout: TimePickerFlyoutTokens;
  columns: TimePickerColumnsTokens;
}
```

### packages/theme/src/types/toast-tokens.types.ts

```tsx
import type { ColorPair } from "./theme-provider.types";
import type { FontWeightValue } from "./tokens.types";

export type ToastTone = "success" | "info" | "warning" | "error";

export interface ToastTokens {
  enterDuration: number;
  exitDuration: number;
  stackDuration: number;
  actionFontWeight: FontWeightValue;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  gap: number;
  stackLimit: number;
  stackScaleStep: number;
  contentGap: number;
  edgeOffset: number;
  topOffset: number;
  iconSize: number;
  closeIconSize: number;
  closeColor: string;
  iconContainerSize: number;
  actionMinSize: number;
  titleColor: string;
  descriptionColor: string;
  actionColor: string;
  disabledColor: string;
  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  zIndexBase: number;
  tones: Record<ToastTone, ColorPair>;
}
```

### packages/theme/src/types/tokens.types.ts

```tsx
import { DimensionValue } from "react-native";

export type FontWeightNormal =
  | "Montserrat_100Thin"
  | "Montserrat_200ExtraLight"
  | "Montserrat_300Light"
  | "Montserrat_400Regular"
  | "Montserrat_500Medium"
  | "Montserrat_600SemiBold"
  | "Montserrat_700Bold"
  | "Montserrat_800ExtraBold"
  | "Montserrat_900Black";

export type FontWeightItalic =
  | "Montserrat_100Thin_Italic"
  | "Montserrat_200ExtraLight_Italic"
  | "Montserrat_300Light_Italic"
  | "Montserrat_400Regular_Italic"
  | "Montserrat_500Medium_Italic"
  | "Montserrat_600SemiBold_Italic"
  | "Montserrat_700Bold_Italic"
  | "Montserrat_800ExtraBold_Italic"
  | "Montserrat_900Black_Italic";

export type FontWeightValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type SpaceSizesKey =
  | "none"
  | "xxs"
  | "xs"
  | "mxs"
  | "sm"
  | "msm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export type Space = Record<SpaceSizesKey, number>;

export type TypographyKey =
  | "xxs"
  | "xs"
  | "xsm"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | "huge"
  | "massive"
  | "giant"
  | "colossal";

export type FontSize = Record<TypographyKey, number>;

export type LineHeight = Record<TypographyKey, number>;

export type FontWeightKeys =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

export type FontFamily = Record<
  "normal" | "italic",
  Record<FontWeightValue, string>
>;

export type FontWeight = Record<FontWeightKeys, FontWeightValue>;

export type LetterSpacingKey =
  | "tightest"
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest"
  | "ultraWide";

export type LetterSpacings = Record<LetterSpacingKey, number>;

export type BorderSizeKey = "sm" | "md" | "lg" | "xl" | "xxl";

export type BorderSize = Record<BorderSizeKey, number>;

export type RadiusKey = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "round";

export type Radii = Record<RadiusKey, number>;

export type RadiusDrawnKey =
  | "drawn1"
  | "drawn2"
  | "drawn3"
  | "drawn4"
  | "drawn5"
  | "drawn6";

export type RadiiDrawn = Record<RadiusDrawnKey, string>;

export type RadiusBlobKey = "blob1" | "blob2" | "blob3" | "blob4" | "blob5";

export type RadiiBlob = Record<RadiusBlobKey, string>;

export type RadiusConditionalKey =
  | "conditional1"
  | "conditional2"
  | "conditional3"
  | "conditional4"
  | "conditional5"
  | "conditional6";

export type RadiiConditional = Record<RadiusConditionalKey, string>;

export type NeutralColorKey =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13";

export type NeutralColor = Record<NeutralColorKey, string>;
```

### packages/theme/src/types/typography.types.ts

```tsx
import { TextStyle } from "react-native";

import { FontWeightValue } from "./tokens.types";

export interface TypographyProps {
  fontSize?: TextStyle["fontSize"];
  fontFamily?: TextStyle["fontFamily"];
  fontWeight?: FontWeightValue;
  fontVariant?: TextStyle["fontVariant"];
  fontStyle?: TextStyle["fontStyle"];
  letterSpacing?: TextStyle["letterSpacing"];
  lineHeight?: TextStyle["lineHeight"];
  textAlign?: TextStyle["textAlign"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textDecorationColor?: TextStyle["textDecorationColor"];
  textTransform?: TextStyle["textTransform"];
  includeFontPadding?: TextStyle["includeFontPadding"]; // Android only
  textAlignVertical?: TextStyle["textAlignVertical"]; // Android only
}

export type TypographyPresetKey =
  | "Master"
  | "DisplayLarge"
  | "DisplayMedium"
  | "DisplaySmall"
  | "Title1"
  | "Title2"
  | "Title3"
  | "Title4"
  | "Title5"
  | "Title6"
  | "Subtitle1"
  | "Subtitle2"
  | "BodyLarge"
  | "Body"
  | "BodySmall"
  | "Caption"
  | "Label"
  | "Overline"
  | "Helper"
  | "Code"
  | "Quote"
  | "Eyebrow";
```

### packages/theme/src/utils/action-state.utils.ts

```tsx
import type {
  ActionState,
  ActionVisualState,
  VisualStateTokens,
} from "../types";

export function getActionStateTokens<Tokens>(
  tokens: VisualStateTokens<ActionVisualState, Tokens>,
  state: ActionState,
): Tokens {
  const { disabled = false, loading = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return loading ? tokens.loading : tokens.default;
}
```

### packages/theme/src/utils/availability-state.utils.ts

```tsx
import type {
  AvailabilityState,
  AvailabilityVisualState,
  VisualStateTokens,
} from "../types";

export function getAvailabilityStateTokens<Tokens>(
  tokens: VisualStateTokens<AvailabilityVisualState, Tokens>,
  state: AvailabilityState,
): Tokens {
  const { disabled = false } = state;

  return disabled ? tokens.disabled : tokens.default;
}
```

### packages/theme/src/utils/control-state.utils.ts

```tsx
import type {
  ControlState,
  ControlVisualState,
  VisualStateTokens,
} from "../types";

export function getControlStateTokens<Tokens>(
  tokens: VisualStateTokens<ControlVisualState, Tokens>,
  state: ControlState,
): Tokens {
  const { disabled = false, focused = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return focused ? tokens.focused : tokens.default;
}
```

### packages/theme/src/utils/datetime-picker-state.utils.ts

```tsx
import type {
  DatetimePickerDayAppearanceTokens,
  DatetimePickerDayState,
  DatetimePickerDayTokens,
} from "../types";

export function getDatetimePickerDayStateTokens(
  tokens: DatetimePickerDayTokens["states"],
  state: DatetimePickerDayState,
): DatetimePickerDayAppearanceTokens {
  const { currentMonth = false, inRange = false, selected = false } = state;

  if (selected) {
    return tokens.selected;
  }

  if (inRange) {
    return tokens.range;
  }

  return currentMonth ? tokens.default : tokens.outsideMonth;
}
```

### packages/theme/src/utils/divider-tokens.utils.ts

```tsx
import type {
  DividerTokens,
  DividerTokenState,
  ResolvedDividerTokens,
} from "../types";

export function getDividerTokens(
  tokens: DividerTokens,
  state: DividerTokenState,
): ResolvedDividerTokens {
  return {
    ...tokens.layouts[state.orientation][state.inset],
    backgroundColor: tokens.colors[state.tone],
  };
}
```

### packages/theme/src/utils/field-state.utils.ts

```tsx
import type { FieldState, FieldVisualState, VisualStateTokens } from "../types";

export function getFieldStateTokens<Tokens>(
  tokens: VisualStateTokens<FieldVisualState, Tokens>,
  state: FieldState,
): Tokens {
  const { disabled = false, error = false } = state;

  if (disabled) {
    return error ? tokens.disabledError : tokens.disabled;
  }

  return error ? tokens.error : tokens.default;
}
```

### packages/theme/src/utils/flyout-tokens.utils.ts

```tsx
import type {
  FlyoutTokens,
  FlyoutTokenState,
  ResolvedFlyoutTokens,
} from "../types";

export function getFlyoutTokens(
  tokens: FlyoutTokens,
  state: FlyoutTokenState,
): ResolvedFlyoutTokens {
  const { placements, ...sharedTokens } = tokens;

  return {
    ...sharedTokens,
    ...placements[state.placement],
  };
}
```

### packages/theme/src/utils/index.ts

```tsx
export * from "./action-state.utils";
export * from "./availability-state.utils";
export * from "./control-state.utils";
export * from "./datetime-picker-state.utils";
export * from "./divider-tokens.utils";
export * from "./field-state.utils";
export * from "./flyout-tokens.utils";
export * from "./pagination-state.utils";
export * from "./selection-item-state.utils";
export * from "./selection-state.utils";
export * from "./segmented-control-state.utils";
export * from "./slider-tokens.utils";
export * from "./style.utils";
export * from "./tabs-state.utils";
```

### packages/theme/src/utils/pagination-state.utils.ts

```tsx
import type {
  PaginationState,
  PaginationVisualState,
  VisualStateTokens,
} from "../types";

export function getPaginationStateTokens<Tokens>(
  tokens: VisualStateTokens<PaginationVisualState, Tokens>,
  state: PaginationState,
): Tokens {
  const { current, disabled = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return current ? tokens.current : tokens.default;
}
```

### packages/theme/src/utils/segmented-control-state.utils.ts

```tsx
import type {
  ResolvedSegmentedControlItemTokens,
  SegmentedControlItemTokenState,
  SegmentedControlTokens,
} from "../types";
import { getSelectionStateTokens } from "./selection-state.utils";

export function getSegmentedControlItemTokens(
  tokens: SegmentedControlTokens,
  state: SegmentedControlItemTokenState,
): ResolvedSegmentedControlItemTokens {
  const { disabled, layout, selected, size, variant } = state;
  const { layouts, ...sizeTokens } = tokens.sizes[size];
  const appearanceTokens = getSelectionStateTokens(
    tokens.variants[variant].states,
    { disabled, selected },
  );

  return {
    ...sizeTokens,
    ...layouts[layout],
    ...appearanceTokens,
    borderRadius: tokens.itemBorderRadius,
    borderWidth: tokens.itemBorderWidth,
  };
}
```

### packages/theme/src/utils/selection-item-state.utils.ts

```tsx
import type {
  SelectionItemState,
  SelectionItemVisualState,
  VisualStateTokens,
} from "../types";

export function getSelectionItemStateTokens<Tokens>(
  tokens: VisualStateTokens<SelectionItemVisualState, Tokens>,
  state: SelectionItemState,
): Tokens {
  const { selected } = state;

  return selected ? tokens.selected : tokens.default;
}
```

### packages/theme/src/utils/selection-state.utils.ts

```tsx
import type {
  SelectionState,
  SelectionVisualState,
  VisualStateTokens,
} from "../types";

export function getSelectionStateTokens<Tokens>(
  tokens: VisualStateTokens<SelectionVisualState, Tokens>,
  state: SelectionState,
): Tokens {
  const { disabled = false, selected } = state;

  if (disabled) {
    return selected ? tokens.disabledSelected : tokens.disabledUnselected;
  }

  return selected ? tokens.selected : tokens.unselected;
}
```

### packages/theme/src/utils/slider-tokens.utils.ts

```tsx
import type {
  ResolvedSliderTrackTokens,
  SliderTokens,
  SliderTrackTokenState,
} from "../types";
import { getControlStateTokens } from "./control-state.utils";

export function getSliderTrackTokens(
  tokens: SliderTokens,
  state: SliderTrackTokenState,
): ResolvedSliderTrackTokens {
  return {
    ...tokens.sizes[state.size],
    ...tokens.layouts[state.layout],
    ...getControlStateTokens(tokens.variants[state.variant], {
      disabled: state.disabled,
    }),
    trackBorderRadius: tokens.trackBorderRadius,
  };
}
```

### packages/theme/src/utils/style.utils.ts

```tsx
import { Platform, ViewStyle } from "react-native";

import { ShadowScale, StylePropsSet } from "../constants";
import {
  ShadowLevel,
  ShadowPosition,
  ShadowScaleTokens,
  StylePropKey,
  StyleProps,
  ThemeColors,
} from "../types";

const isStylePropKey = (k: string): k is StylePropKey =>
  StylePropsSet.has(k as StylePropKey);

export const extractStyleProps = <Props extends object>(
  props: Props,
): StyleProps => {
  const style: StyleProps = {};

  for (const k in props) {
    if (isStylePropKey(k) && props[k] !== undefined) {
      style[k] = props[k] as any;
    }
  }

  return style;
};

export const createStyleKey = <Props extends object>(props: Props) => {
  let key = "";

  for (const k in props) {
    if (isStylePropKey(k)) {
      key += String(props[k as keyof Props]);
    }
  }

  return key;
};

export const getShadowStyle = (
  level: ShadowLevel = "none",
  position: ShadowPosition = "bottom",
  colors: ThemeColors,
  shadows: ShadowScaleTokens = ShadowScale,
): ViewStyle => {
  const token = shadows[level];

  if (level === "none") {
    return {};
  }

  if (Platform.OS === "android") {
    return {
      elevation: token.elevation,
    };
  }

  let offsetY = 0;

  if (position === "bottom") {
    offsetY = token.radius / 2;
  }

  if (position === "top") {
    offsetY = -token.radius / 2;
  }

  if (position === "around") {
    offsetY = 0;
  }

  return {
    shadowColor: colors.black,
    shadowOpacity: token.opacity,
    shadowRadius: token.radius,
    shadowOffset: {
      width: 0,
      height: offsetY,
    },
  };
};
```

### packages/theme/src/utils/tabs-state.utils.ts

```tsx
import type {
  ResolvedTabsItemTokens,
  TabsItemTokenState,
  TabsTokens,
} from "../types";
import { getSelectionStateTokens } from "./selection-state.utils";

export function getTabsItemTokens(
  tokens: TabsTokens,
  state: TabsItemTokenState,
): ResolvedTabsItemTokens {
  return {
    ...tokens.sizes[state.size],
    ...getSelectionStateTokens(tokens.states, state),
    indicatorHeight: tokens.indicatorHeight,
  };
}
```
