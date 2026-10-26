# @impulse-ui-native/radio: capability guide

Choose one option using application-owned grouping.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- checked/defaultChecked/onCheckedChange and shared appearance/disabling.

## Boundaries and composition

- There is no RadioGroup API; the application owns exclusivity.
- Render a visible label beside the control.

Exact contracts: [API reference](../api/radio.md). Machine facts: [package JSON](radio.json) or [full catalog](../capabilities.json).

## Recipes

- [account-form](../recipes.md#account-form)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Radio

Source: `packages/radio/src/components/radio.tsx:21`. Direct defaults: `defaultChecked=false`, `size="medium"`, `variant="filled"`, `tone="primary"`.

| Prop              | Required | Type / choices                                                                                      |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `checked`         | No       | `boolean \| undefined`                                                                              |
| `defaultChecked`  | No       | `boolean \| undefined`                                                                              |
| `disabled`        | No       | `boolean \| undefined`                                                                              |
| `onCheckedChange` | No       | `((checked: boolean) => void) \| undefined`                                                         |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`         | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle`    | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `size`            | No       | `large / medium / small`                                                                            |
| `style`           | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`          | No       | `string \| undefined`                                                                               |
| `tone`            | No       | `neutral / primary / secondary`                                                                     |
| `variant`         | No       | `filled / outlined / soft`                                                                          |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

## Public exports

- `Radio` (value)
  - `(props: RadioProps): import("react").ReactNode`
- `RadioProps` (type)
- `RadioThemeProps` (type)
