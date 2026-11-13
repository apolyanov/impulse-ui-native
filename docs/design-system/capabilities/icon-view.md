# @impulse-ui-native/icon-view: capability guide

Show an icon on a noninteractive themed surface.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Size, filled/outlined/soft variants and shared tones; IconButton-aligned geometry.

## Boundaries and composition

- Not pressable: use IconButton when the icon performs an action.
- Supply the icon; do not assume children become the glyph.

Exact contracts: [API reference](../api/icon-view.md). Machine facts: [package JSON](icon-view.json) or [full catalog](../capabilities.json).

## Recipes

- [profile-card](../recipes.md#profile-card)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                             | Range      | Optional |
| -------------------------------- | ---------- | -------- |
| `react`                          | `>=18`     | No       |
| `react-native`                   | `>=0.73`   | No       |
| `react-native-svg`               | `>=13.9.0` | No       |
| `react-native-safe-area-context` | `>=5.0.0`  | No       |

### IconView

Source: `packages/icon-view/src/components/icon-view.tsx:11`. Direct defaults: `size="medium"`, `tone="primary"`, `variant="filled"`.

| Prop        | Required | Type / choices                                                     |
| ----------- | -------- | ------------------------------------------------------------------ |
| `icon`      | Yes      | `React.ComponentType<SvgProps>`                                    |
| `iconProps` | No       | `Omit<IconProps, "color" \| "icon" \| "size"> \| undefined`        |
| `onLayout`  | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`             |
| `ref`       | No       | `Ref<ReactNativeElement> \| undefined`                             |
| `size`      | No       | `large / medium / small`                                           |
| `style`     | No       | `____ViewStyleProp_Internal \| undefined`                          |
| `testID`    | No       | `string \| undefined`                                              |
| `tone`      | No       | `error / info / neutral / primary / secondary / success / warning` |
| `variant`   | No       | `filled / outlined / soft`                                         |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `IconView` (value)
  - `(props: IconViewProps): import("react").ReactNode`
- `IconViewProps` (type)
- `IconViewThemeProps` (type)
