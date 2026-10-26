# @impulse-ui-native/color-picker: capability guide

Choose and edit a color inline.

## Setup

- ThemeProvider and GestureHandlerRootView.
- Configure SVG, Gesture Handler, Reanimated and Worklets; no portal/overlay provider is needed.

## Capabilities

- Immediate or confirm commit mode; controlled/uncontrolled color.
- Spectrum, sliders, preview, channel/hex/alpha inputs, swatches and Apply/Cancel parts.

## Boundaries and composition

- Parts require ColorPicker.Root; the convenience component assembles a common layout.
- Spectrum and selected color are data, not tone. Inputs inherit root tone; their field variant is independent.
- Drag presentation freezes React field snapshots until release; native gesture validation is separate from typechecking.

Exact contracts: [API reference](../api/color-picker.md). Machine facts: [package JSON](color-picker.json) or [full catalog](../capabilities.json).

## Recipes

- [color-settings](../recipes.md#color-settings)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                           | Range      | Optional |
| ------------------------------ | ---------- | -------- |
| `react`                        | `>=18`     | No       |
| `react-native`                 | `>=0.73`   | No       |
| `react-native-svg`             | `>=13.9.0` | No       |
| `react-native-gesture-handler` | `>=2.0.0`  | No       |
| `react-native-reanimated`      | `>=4.0.0`  | No       |
| `react-native-worklets`        | `>=0.5`    | No       |

### ColorPicker

Source: `packages/color-picker/src/components/color-picker.tsx:21`. Direct defaults: `showAlpha=true`, `showPresets=true`, `presetsLabel="Theme colors"`, `commitMode="immediate"`.

- **valueContract**: Color strings; immediate commits during edits, confirm commits with Apply. Spectrum colors are data.
- **delegatedDefaults**: {"source":"packages/color-picker/src/hooks/use-color-picker.hook.ts","function":"useColorPicker","expected":{"size":"medium","tone":"primary","commitMode":"immediate"}}

| Prop           | Required | Type / choices                                         |
| -------------- | -------- | ------------------------------------------------------ |
| `commitMode`   | No       | `confirm / immediate`                                  |
| `defaultValue` | No       | `string \| undefined`                                  |
| `disabled`     | No       | `boolean \| undefined`                                 |
| `onChange`     | No       | `((value: string) => void) \| undefined`               |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `presets`      | No       | `readonly ColorPickerPreset[] \| undefined`            |
| `presetsLabel` | No       | `string \| undefined`                                  |
| `showAlpha`    | No       | `boolean \| undefined`                                 |
| `showPresets`  | No       | `boolean \| undefined`                                 |
| `size`         | No       | `large / medium / small`                               |
| `style`        | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`       | No       | `string \| undefined`                                  |
| `tone`         | No       | `neutral / primary / secondary`                        |
| `value`        | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### ColorPicker.AlphaInput

Source: `packages/color-picker/src/components/alpha-input.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop      | Required | Type / choices                  |
| --------- | -------- | ------------------------------- |
| `label`   | No       | `string \| undefined`           |
| `tone`    | No       | `neutral / primary / secondary` |
| `variant` | No       | `filled / outlined / soft`      |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ColorPicker.AlphaSlider

Source: `packages/color-picker/src/components/alpha-slider.tsx:9`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop | Required | Type / choices |
| ---- | -------- | -------------- |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ColorPicker.Apply

Source: `packages/color-picker/src/components/apply.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop          | Required | Type / choices                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | No       | `((string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode> \| ((state: PressableStateCallbackType) => React.ReactNode)) & (string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode>)) \| null \| undefined` |
| `disabled`    | No       | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `loading`     | No       | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     |
| `onLongPress` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                 |
| `onPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                 |
| `size`        | No       | `large / medium / small`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `style`       | No       | `ViewStyle \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `testID`      | No       | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `tone`        | No       | `neutral / primary / secondary`                                                                                                                                                                                                                                                                                                                                                                                                            |
| `variant`     | No       | `filled / ghost / outlined / soft`                                                                                                                                                                                                                                                                                                                                                                                                         |

Style props: `aspectRatio`, `elevation`, `height`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `width`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### ColorPicker.Cancel

Source: `packages/color-picker/src/components/cancel.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop          | Required | Type / choices                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | No       | `((string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode> \| ((state: PressableStateCallbackType) => React.ReactNode)) & (string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode>)) \| null \| undefined` |
| `disabled`    | No       | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `loading`     | No       | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     |
| `onLongPress` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                 |
| `onPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                 |
| `size`        | No       | `large / medium / small`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `style`       | No       | `ViewStyle \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `testID`      | No       | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `tone`        | No       | `neutral / primary / secondary`                                                                                                                                                                                                                                                                                                                                                                                                            |
| `variant`     | No       | `filled / ghost / outlined / soft`                                                                                                                                                                                                                                                                                                                                                                                                         |

Style props: `aspectRatio`, `elevation`, `height`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `width`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### ColorPicker.ChannelInput

Source: `packages/color-picker/src/components/channel-input.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop      | Required | Type / choices                  |
| --------- | -------- | ------------------------------- |
| `channel` | Yes      | `b / g / r`                     |
| `label`   | No       | `string \| undefined`           |
| `tone`    | No       | `neutral / primary / secondary` |
| `variant` | No       | `filled / outlined / soft`      |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ColorPicker.HexInput

Source: `packages/color-picker/src/components/hex-input.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop              | Required | Type / choices                                                                                                                                                                                                   |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | No       | `React.ReactNode`                                                                                                                                                                                                |
| `containerStyle`  | No       | `____ViewStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `disabled`        | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `editable`        | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `error`           | No       | `string \| undefined`                                                                                                                                                                                            |
| `keyboardType`    | No       | `ascii-capable / ascii-capable-number-pad / decimal-pad / default / email-address / name-phone-pad / number-pad / numbers-and-punctuation / numeric / phone-pad / twitter / url / visible-password / web-search` |
| `label`           | No       | `string \| undefined`                                                                                                                                                                                            |
| `maxLength`       | No       | `number \| undefined`                                                                                                                                                                                            |
| `multiline`       | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `numberOfLines`   | No       | `number \| undefined`                                                                                                                                                                                            |
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
| `variant`         | No       | `filled / outlined / soft`                                                                                                                                                                                       |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `top`, `width`, `zIndex`. Additional inherited native props: 164. See exact API types for these inherited contracts.

### ColorPicker.HueSlider

Source: `packages/color-picker/src/components/hue-slider.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop | Required | Type / choices |
| ---- | -------- | -------------- |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ColorPicker.Preview

Source: `packages/color-picker/src/components/preview.tsx:13`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### ColorPicker.Root

Source: `packages/color-picker/src/components/root.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **delegatedDefaults**: {"source":"packages/color-picker/src/hooks/use-color-picker.hook.ts","function":"useColorPicker","expected":{"size":"medium","tone":"primary","commitMode":"immediate"}}

| Prop           | Required | Type / choices                                         |
| -------------- | -------- | ------------------------------------------------------ |
| `children`     | No       | `React.ReactNode`                                      |
| `commitMode`   | No       | `confirm / immediate`                                  |
| `defaultValue` | No       | `string \| undefined`                                  |
| `disabled`     | No       | `boolean \| undefined`                                 |
| `onChange`     | No       | `((value: string) => void) \| undefined`               |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`         | No       | `large / medium / small`                               |
| `style`        | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`       | No       | `string \| undefined`                                  |
| `tone`         | No       | `neutral / primary / secondary`                        |
| `value`        | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### ColorPicker.Spectrum

Source: `packages/color-picker/src/components/spectrum.tsx:18`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop | Required | Type / choices |
| ---- | -------- | -------------- |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ColorPicker.Swatch

Source: `packages/color-picker/src/components/swatch.tsx:21`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: ColorPicker.Root (the convenience component supplies one)
- **inheritance**: Root owns color/commit mode/disabled/size/tone. Explicit child appearance props override supported inherited props.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                                                         |
| `disabled`     | No       | `boolean \| undefined`                                                                              |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`      | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle` | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `size`         | No       | `large / medium / small`                                                                            |
| `style`        | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`       | No       | `string \| undefined`                                                                               |
| `variant`      | No       | `filled / ghost / outlined / soft`                                                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

## Public exports

- `ColorChannel` (type)
- `ColorPicker` (value)
  - `(props: import("@impulse-ui-native/toolkit").ColorPickerProps): import("react").ReactNode`
- `ColorPickerActionProps` (type)
- `ColorPickerAlphaInputProps` (type)
- `ColorPickerChannelInputProps` (type)
- `ColorPickerCommitMode` (type)
- `ColorPickerHexInputProps` (type)
- `ColorPickerPreset` (type)
- `ColorPickerProps` (type)
- `ColorPickerRootProps` (type)
- `ColorPickerSwatchProps` (type)
