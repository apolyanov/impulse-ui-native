# @impulse-ui-native/switch: capability guide

Toggle a persistent boolean setting.

## Setup

- ThemeProvider; Reanimated and Worklets configured.

## Capabilities

- checked/defaultChecked/onCheckedChange; shared variants/tones and disabling.

## Boundaries and composition

- Provide adjacent label/help text; Switch does not render label children.
- Application owns persistence; the control only emits the next checked state.

Exact contracts: [API reference](../api/switch.md). Machine facts: [package JSON](switch.json) or [full catalog](../capabilities.json).

## Recipes

- [account-form](../recipes.md#account-form)
- [disclosure-settings](../recipes.md#disclosure-settings)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                      | Range     | Optional |
| ------------------------- | --------- | -------- |
| `react`                   | `>=18`    | No       |
| `react-native`            | `>=0.73`  | No       |
| `react-native-reanimated` | `>=3.6.0` | No       |
| `react-native-worklets`   | `>=0.5`   | No       |

### Switch

Source: `packages/switch/src/components/switch.tsx:18`. Direct defaults: `defaultChecked=false`, `loading=false`, `size="medium"`, `variant="filled"`, `tone="primary"`.

| Prop              | Required | Type / choices                                                                                      |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `checked`         | No       | `boolean \| undefined`                                                                              |
| `defaultChecked`  | No       | `boolean \| undefined`                                                                              |
| `disabled`        | No       | `boolean \| undefined`                                                                              |
| `loading`         | No       | `boolean \| undefined`                                                                              |
| `onCheckedChange` | No       | `((checked: boolean) => void) \| undefined`                                                         |
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

- `Switch` (value)
  - `(props: SwitchProps): import("react").ReactNode`
- `SwitchProps` (type)
- `SwitchThemeProps` (type)
