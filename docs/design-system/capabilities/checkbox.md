# @impulse-ui-native/checkbox: capability guide

Choose independent options or represent a mixed selection.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- checked/defaultChecked/onCheckedChange; boolean or indeterminate.
- Shared size, filled/outlined/soft variants, tones and disabling.

## Boundaries and composition

- Render a visible label beside the control; Checkbox has no children/label API.
- Group values and aggregate indeterminate state belong to the application.

Exact contracts: [API reference](../api/checkbox.md). Machine facts: [package JSON](checkbox.json) or [full catalog](../capabilities.json).

## Recipes

- [account-form](../recipes.md#account-form)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Checkbox

Source: `packages/checkbox/src/components/checkbox.tsx:28`. Direct defaults: `defaultChecked=false`, `size="medium"`, `variant="filled"`, `tone="primary"`.

| Prop              | Required | Type / choices                                                                                      |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `checked`         | No       | `CheckboxState \| undefined`                                                                        |
| `defaultChecked`  | No       | `CheckboxState \| undefined`                                                                        |
| `disabled`        | No       | `boolean \| undefined`                                                                              |
| `onCheckedChange` | No       | `((checked: CheckboxState) => void) \| undefined`                                                   |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`         | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle`    | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `ref`             | No       | `Ref<ReactNativeElement> \| undefined`                                                              |
| `size`            | No       | `large / medium / small`                                                                            |
| `style`           | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`          | No       | `string \| undefined`                                                                               |
| `tone`            | No       | `neutral / primary / secondary`                                                                     |
| `variant`         | No       | `filled / outlined / soft`                                                                          |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

## Public exports

- `Checkbox` (value)
  - `(props: CheckboxProps): import("react").ReactNode`
- `CheckboxProps` (type)
- `CheckboxState` (type)
- `CheckboxThemeProps` (type)
