# @impulse-ui-native/icon: capability guide

Render a named SVG glyph with an explicit visual weight.

## Setup

- ThemeProvider and react-native-svg; use icon-catalog.md for exact entrypoints.

## Capabilities

- Shared Icon renderer, numeric/shared sizes and color/fill overrides.
- Named icon subpaths with bold, duotone, fill, light, regular and thin weights.

## Boundaries and composition

- Import glyphs from per-icon subpaths; toolkit does not re-export icon.
- Icon variant means glyph weight, not filled/outlined/soft component appearance. Raw icons do not have tone.

Exact contracts: [API reference](../api/icon.md). Machine facts: [package JSON](icon.json) or [full catalog](../capabilities.json).

## Recipes

- [profile-card](../recipes.md#profile-card)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer               | Range      | Optional |
| ------------------ | ---------- | -------- |
| `react`            | `>=18`     | No       |
| `react-native`     | `>=0.73`   | No       |
| `react-native-svg` | `>=13.9.0` | No       |

### Icon

Source: `packages/icon/src/components/icon.tsx:7`. Direct defaults: `size="medium"`.

| Prop          | Required | Type / choices                                          |
| ------------- | -------- | ------------------------------------------------------- |
| `children`    | No       | `ReactNode`                                             |
| `icon`        | Yes      | `ComponentType<SvgProps>`                               |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => void) \| undefined`     |
| `onLongPress` | No       | `((event: GestureResponderEvent) => void) \| undefined` |
| `onPress`     | No       | `((event: GestureResponderEvent) => void) \| undefined` |
| `size`        | No       | `number \| ComponentSize \| undefined`                  |
| `style`       | No       | `____ViewStyleProp_Internal \| undefined`               |
| `testID`      | No       | `string \| undefined`                                   |
| `variant`     | No       | `bold / duotone / fill / light / regular / thin`        |

Style props: `color`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `height`, `letterSpacing`, `opacity`, `width`. Additional inherited native props: 165. See exact API types for these inherited contracts.

## Public exports

- `Icon` (value)
  - `(props: IconProps): import("react").ReactNode`
- `IconProps` (type)
- `IconStyle` (type)
- `IconVariant` (type)
- `IconWrapperProps` (type)
