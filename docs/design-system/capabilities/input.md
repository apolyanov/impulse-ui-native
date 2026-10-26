# @impulse-ui-native/input: capability guide

Enter single-line or multiline text.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Input uses native value/onChangeText/defaultValue; password and keyboard props.
- Textarea supports character count and bounded auto-grow; shared labels/errors/addons.

## Boundaries and composition

- Fields default to medium/outlined/neutral; explicit props select other appearances.
- Input onChange is a native event callback; use onChangeText for a string.
- Prefix/Suffix components are caller-owned content; PrefixIcon/SuffixIcon use themed addon styling.

Exact contracts: [API reference](../api/input.md). Machine facts: [package JSON](input.json) or [full catalog](../capabilities.json).

## Recipes

- [account-form](../recipes.md#account-form)
- [field-appearances](../recipes.md#field-appearances)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Input

Source: `packages/input/src/components/input.tsx:16`. Direct defaults: `size="medium"`, `variant="outlined"`, `tone="neutral"`.

- **valueContract**: Input/Textarea use native value/onChangeText; Control.Field supplies composition context, not a value model.

| Prop              | Required | Type / choices                                                                                                                                                                                                   |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | No       | `React.ReactNode`                                                                                                                                                                                                |
| `containerStyle`  | No       | `____ViewStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `defaultValue`    | No       | `string \| undefined`                                                                                                                                                                                            |
| `disabled`        | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `editable`        | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `error`           | No       | `string \| undefined`                                                                                                                                                                                            |
| `keyboardType`    | No       | `ascii-capable / ascii-capable-number-pad / decimal-pad / default / email-address / name-phone-pad / number-pad / numbers-and-punctuation / numeric / phone-pad / twitter / url / visible-password / web-search` |
| `label`           | No       | `string \| undefined`                                                                                                                                                                                            |
| `maxLength`       | No       | `number \| undefined`                                                                                                                                                                                            |
| `multiline`       | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `numberOfLines`   | No       | `number \| undefined`                                                                                                                                                                                            |
| `onChange`        | No       | `((e: TextInputChangeEvent) => unknown) \| undefined`                                                                                                                                                            |
| `onChangeText`    | No       | `((text: string) => unknown) \| undefined`                                                                                                                                                                       |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                                                                                                                                           |
| `onPress`         | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                       |
| `onPressPrefix`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                       |
| `onPressSuffix`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                       |
| `placeholder`     | No       | `string \| undefined`                                                                                                                                                                                            |
| `Prefix`          | No       | `ComponentType \| undefined`                                                                                                                                                                                     |
| `PrefixIcon`      | No       | `ComponentType<SvgProps> \| undefined`                                                                                                                                                                           |
| `secureTextEntry` | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `size`            | No       | `large / medium / small`                                                                                                                                                                                         |
| `style`           | No       | `____TextStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `Suffix`          | No       | `ComponentType \| undefined`                                                                                                                                                                                     |
| `SuffixIcon`      | No       | `ComponentType<SvgProps> \| undefined`                                                                                                                                                                           |
| `testID`          | No       | `string \| undefined`                                                                                                                                                                                            |
| `tone`            | No       | `neutral / primary / secondary`                                                                                                                                                                                  |
| `value`           | No       | `string \| undefined`                                                                                                                                                                                            |
| `variant`         | No       | `filled / outlined / soft`                                                                                                                                                                                       |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `top`, `width`, `zIndex`. Additional inherited native props: 164. See exact API types for these inherited contracts.

### Textarea

Source: `packages/input/src/components/textarea.tsx:14`. Direct defaults: `autoGrow=false`, `defaultValue=""`, `disabled=false`, `maxRows=8`, `minRows=3`, `showCharacterCount=false`, `size="medium"`, `variant="outlined"`, `tone="neutral"`.

- **valueContract**: Input/Textarea use native value/onChangeText; Control.Field supplies composition context, not a value model.

| Prop                 | Required | Type / choices                                                                                                                                                                                                   |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoGrow`           | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `children`           | No       | `React.ReactNode`                                                                                                                                                                                                |
| `containerStyle`     | No       | `____ViewStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `defaultValue`       | No       | `string \| undefined`                                                                                                                                                                                            |
| `disabled`           | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `editable`           | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `error`              | No       | `string \| undefined`                                                                                                                                                                                            |
| `keyboardType`       | No       | `ascii-capable / ascii-capable-number-pad / decimal-pad / default / email-address / name-phone-pad / number-pad / numbers-and-punctuation / numeric / phone-pad / twitter / url / visible-password / web-search` |
| `label`              | No       | `string \| undefined`                                                                                                                                                                                            |
| `maxLength`          | No       | `number \| undefined`                                                                                                                                                                                            |
| `maxRows`            | No       | `number \| undefined`                                                                                                                                                                                            |
| `minRows`            | No       | `number \| undefined`                                                                                                                                                                                            |
| `onChange`           | No       | `((e: TextInputChangeEvent) => unknown) \| undefined`                                                                                                                                                            |
| `onChangeText`       | No       | `((text: string) => unknown) \| undefined`                                                                                                                                                                       |
| `onLayout`           | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                                                                                                                                           |
| `onPress`            | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                       |
| `placeholder`        | No       | `string \| undefined`                                                                                                                                                                                            |
| `showCharacterCount` | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `size`               | No       | `large / medium / small`                                                                                                                                                                                         |
| `style`              | No       | `____TextStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `testID`             | No       | `string \| undefined`                                                                                                                                                                                            |
| `tone`               | No       | `neutral / primary / secondary`                                                                                                                                                                                  |
| `value`              | No       | `string \| undefined`                                                                                                                                                                                            |
| `variant`            | No       | `filled / outlined / soft`                                                                                                                                                                                       |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `top`, `width`, `zIndex`. Additional inherited native props: 164. See exact API types for these inherited contracts.

## Public exports

- `Input` (value)
  - `(props: InputProps): import("react").ReactNode`
- `InputProps` (type)
- `Textarea` (value)
  - `(props: TextareaProps): import("react").ReactNode`
- `TextareaProps` (type)
