# @impulse-ui-native/primitives: capability guide

Build layouts, typography, actions and custom field composition.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- View/Pressable/SafeAreaView, Typography presets, buttons and icon buttons.
- Avatar, Badge, Tag, Divider, Spinner and compound Control parts.

## Boundaries and composition

- Button/IconButton default to medium/filled/primary; Control.Field defaults to medium/outlined/neutral; Divider tone defaults to default.
- Typography is a preset namespace, not shared state. All presets accept View-compatible margin and padding props; explicit style values take precedence. Control parts consume Control.Provider/Field context.
- Custom React node content owns its own foreground styling; a string child can use the component text defaults.

Exact contracts: [API reference](../api/primitives.md). Machine facts: [package JSON](primitives.json) or [full catalog](../capabilities.json).

## Recipes

- [app-shell](../recipes.md#app-shell)
- [profile-card](../recipes.md#profile-card)
- [field-appearances](../recipes.md#field-appearances)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                             | Range      | Optional |
| -------------------------------- | ---------- | -------- |
| `react`                          | `>=18`     | No       |
| `react-native`                   | `>=0.73`   | No       |
| `react-native-safe-area-context` | `>=5.0.0`  | No       |
| `react-native-svg`               | `>=13.9.0` | No       |

### Avatar

Source: `packages/primitives/src/components/atoms/avatar.tsx:11`. Direct defaults: `size="medium"`, `variant="filled"`, `tone="primary"`.

| Prop          | Required | Type / choices                                         |
| ------------- | -------- | ------------------------------------------------------ |
| `fallback`    | No       | `ReactNode`                                            |
| `imageProps`  | No       | `AvatarImageProps \| undefined`                        |
| `initials`    | No       | `string \| undefined`                                  |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`        | No       | `large / medium / small`                               |
| `source`      | No       | `ImageSource \| undefined`                             |
| `status`      | No       | `away / busy / offline / online`                       |
| `statusColor` | No       | `____ColorValue_Internal \| undefined`                 |
| `style`       | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`      | No       | `string \| undefined`                                  |
| `tone`        | No       | `neutral / primary / secondary`                        |
| `variant`     | No       | `filled / outlined / soft`                             |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Badge

Source: `packages/primitives/src/components/atoms/badge/root.tsx:15`. Direct defaults: `size="medium"`, `tone="primary"`, `variant="filled"`.

| Prop            | Required | Type / choices                                                     |
| --------------- | -------- | ------------------------------------------------------------------ |
| `children`      | Yes      | `ReactNode`                                                        |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`             |
| `onPressPrefix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`         |
| `onPressSuffix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`         |
| `Prefix`        | No       | `ComponentType \| undefined`                                       |
| `PrefixIcon`    | No       | `ComponentType<SvgProps> \| undefined`                             |
| `size`          | No       | `large / medium / small`                                           |
| `style`         | No       | `____ViewStyleProp_Internal \| undefined`                          |
| `Suffix`        | No       | `ComponentType \| undefined`                                       |
| `SuffixIcon`    | No       | `ComponentType<SvgProps> \| undefined`                             |
| `testID`        | No       | `string \| undefined`                                              |
| `tone`          | No       | `error / info / neutral / primary / secondary / success / warning` |
| `variant`       | No       | `filled / outlined / soft`                                         |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Button

Source: `packages/primitives/src/components/atoms/button.tsx:15`. Direct defaults: `size="medium"`, `variant="filled"`, `tone="primary"`, `loading=false`.

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

### Control.Addon

Source: `packages/primitives/src/components/controls/addon.tsx:11`. Direct defaults: `disabled=false`.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **inheritance**: Appearance/disabled/error state comes from field context.

| Prop       | Required | Type / choices                                             |
| ---------- | -------- | ---------------------------------------------------------- |
| `children` | No       | `React.ReactNode`                                          |
| `disabled` | No       | `boolean \| undefined`                                     |
| `hitSlop`  | No       | `RectOrSize \| undefined`                                  |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`                  |
| `testID`   | No       | `string \| undefined`                                      |

Style props: none detected. Additional inherited native props: 109. See exact API types for these inherited contracts.

### Control.Container

Source: `packages/primitives/src/components/controls/container.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Control.Error

Source: `packages/primitives/src/components/controls/error.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: none detected. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Control.Field

Source: `packages/primitives/src/components/controls/field.tsx:13`. Direct defaults: `size="medium"`, `variant="outlined"`, `tone="neutral"`.

- **valueContract**: Input/Textarea use native value/onChangeText; Control.Field supplies composition context, not a value model.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `ReactNode`                                                |
| `disabled`      | No       | `boolean \| undefined`                                     |
| `error`         | No       | `string \| undefined`                                      |
| `label`         | No       | `string \| undefined`                                      |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressPrefix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `prefix`        | No       | `ReactNode`                                                |
| `size`          | No       | `large / medium / small`                                   |
| `suffix`        | No       | `ReactNode`                                                |
| `tone`          | No       | `neutral / primary / secondary`                            |
| `variant`       | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Control.Icon

Source: `packages/primitives/src/components/controls/icon.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.
- **semantics**: Its variant prop selects the glyph weight through IconProps. The field visual variant/tone come from Control context.

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

### Control.Input

Source: `packages/primitives/src/components/controls/input.tsx:22`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.

| Prop              | Required | Type / choices                                                                                                                                                                                                   |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`        | No       | `React.ReactNode`                                                                                                                                                                                                |
| `defaultValue`    | No       | `string \| undefined`                                                                                                                                                                                            |
| `editable`        | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `keyboardType`    | No       | `ascii-capable / ascii-capable-number-pad / decimal-pad / default / email-address / name-phone-pad / number-pad / numbers-and-punctuation / numeric / phone-pad / twitter / url / visible-password / web-search` |
| `maxLength`       | No       | `number \| undefined`                                                                                                                                                                                            |
| `multiline`       | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `numberOfLines`   | No       | `number \| undefined`                                                                                                                                                                                            |
| `onChange`        | No       | `((e: TextInputChangeEvent) => unknown) \| undefined`                                                                                                                                                            |
| `onChangeText`    | No       | `((text: string) => unknown) \| undefined`                                                                                                                                                                       |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                                                                                                                                           |
| `onPress`         | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                                                                                                                                       |
| `placeholder`     | No       | `string \| undefined`                                                                                                                                                                                            |
| `ref`             | No       | `Ref<_TextInputInstance> \| undefined`                                                                                                                                                                           |
| `secureTextEntry` | No       | `boolean \| undefined`                                                                                                                                                                                           |
| `style`           | No       | `____TextStyleProp_Internal \| undefined`                                                                                                                                                                        |
| `testID`          | No       | `string \| undefined`                                                                                                                                                                                            |
| `value`           | No       | `string \| undefined`                                                                                                                                                                                            |

Style props: `textAlign`, `textAlignVertical`. Additional inherited native props: 165. See exact API types for these inherited contracts.

### Control.Label

Source: `packages/primitives/src/components/controls/label.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **inheritance**: Appearance/disabled/error state comes from field context.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: none detected. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Control.Loader

Source: `packages/primitives/src/components/controls/loader.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.
- **semantics**: Uses the field addon foreground. An explicit color override can replace it; Spinner tone alone does not replace the supplied field foreground.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`     | No       | `large / medium / small`                               |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |
| `tone`     | No       | `inverse / neutral / primary / secondary`              |

Style props: `color`. Additional inherited native props: 112. See exact API types for these inherited contracts.

### Control.Placeholder

Source: `packages/primitives/src/components/controls/placeholder.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: none detected. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Control.Provider

Source: `packages/primitives/src/components/controls/provider.tsx:7`. Direct defaults: `size="medium"`, `variant="outlined"`, `tone="neutral"`.

| Prop       | Required | Type / choices                  |
| ---------- | -------- | ------------------------------- |
| `children` | No       | `ReactNode`                     |
| `disabled` | Yes      | `boolean \| undefined`          |
| `error`    | Yes      | `string \| undefined`           |
| `size`     | Yes      | `large / medium / small`        |
| `tone`     | No       | `neutral / primary / secondary` |
| `variant`  | Yes      | `filled / outlined / soft`      |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Control.Root

Source: `packages/primitives/src/components/controls/root.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Control.Trigger

Source: `packages/primitives/src/components/controls/trigger.tsx:15`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **inheritance**: Appearance/disabled/error state comes from field context.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `React.ReactNode \| ((state: PressableStateCallbackType) => React.ReactNode)`                       |
| `disabled`     | No       | `boolean \| undefined`                                                                              |
| `loading`      | No       | `boolean \| undefined`                                                                              |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`      | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle` | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `size`         | No       | `large / medium / small`                                                                            |
| `style`        | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`       | No       | `string \| undefined`                                                                               |
| `variant`      | No       | `filled / ghost / outlined / soft`                                                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### Control.Value

Source: `packages/primitives/src/components/controls/value.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Control.Provider (normally supplied by Control.Field)
- **contentContract**: Composition primitive; use Input/Select for assembled default icons and labels.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: none detected. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Divider

Source: `packages/primitives/src/components/atoms/divider.tsx:14`. Direct defaults: `inset="none"`, `orientation="horizontal"`, `tone="default"`.

- **semantics**: Separator border-intensity tones include subtle/default/strong; primary is opt-in.

| Prop          | Required | Type / choices                                                        |
| ------------- | -------- | --------------------------------------------------------------------- |
| `inset`       | No       | `both / end / none / start`                                           |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                |
| `orientation` | No       | `horizontal / vertical`                                               |
| `style`       | No       | `____ViewStyleProp_Internal \| undefined`                             |
| `testID`      | No       | `string \| undefined`                                                 |
| `tone`        | No       | `default / inverse / neutral / primary / secondary / strong / subtle` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### IconButton

Source: `packages/primitives/src/components/atoms/icon-button.tsx:15`. Direct defaults: `size="medium"`, `variant="filled"`, `tone="primary"`, `loading=false`.

| Prop          | Required | Type / choices                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | No       | `((string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode> \| ((state: PressableStateCallbackType) => React.ReactNode)) & (string \| number \| bigint \| boolean \| ReactElement<unknown, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal \| Promise<AwaitedReactNode>)) \| null \| undefined` |
| `disabled`    | No       | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `icon`        | Yes      | `React.ComponentType<SvgProps>`                                                                                                                                                                                                                                                                                                                                                                                                            |
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

### Pressable

Source: `packages/primitives/src/components/atoms/pressable.tsx:30`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `React.ReactNode \| ((state: PressableStateCallbackType) => React.ReactNode)`                       |
| `disabled`     | No       | `boolean \| undefined`                                                                              |
| `loading`      | No       | `boolean \| undefined`                                                                              |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`      | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle` | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `ref`          | No       | `Ref<ReactNativeElement> \| undefined`                                                              |
| `size`         | No       | `large / medium / small`                                                                            |
| `style`        | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`       | No       | `string \| undefined`                                                                               |
| `variant`      | No       | `filled / ghost / outlined / soft`                                                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 124. See exact API types for these inherited contracts.

### SafeAreaView

Source: `packages/primitives/src/components/atoms/safe-area-view.tsx:14`. Direct defaults: `mode="padding"`.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 112. See exact API types for these inherited contracts.

### Spinner

Source: `packages/primitives/src/components/atoms/spinner.tsx:9`. Direct defaults: `animating=true`, `size="medium"`, `tone="primary"`.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`     | No       | `large / medium / small`                               |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |
| `tone`     | No       | `inverse / neutral / primary / secondary`              |

Style props: `color`. Additional inherited native props: 112. See exact API types for these inherited contracts.

### Tag

Source: `packages/primitives/src/components/atoms/tag.tsx:17`. Direct defaults: `size="medium"`, `variant="filled"`, `tone="primary"`.

| Prop       | Required | Type / choices                                                     |
| ---------- | -------- | ------------------------------------------------------------------ |
| `closable` | No       | `boolean \| undefined`                                             |
| `disabled` | No       | `boolean \| undefined`                                             |
| `label`    | Yes      | `string`                                                           |
| `onClose`  | No       | `(() => void) \| undefined`                                        |
| `onPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined`         |
| `size`     | No       | `large / medium / small`                                           |
| `style`    | No       | `ViewStyle \| undefined`                                           |
| `tone`     | No       | `error / info / neutral / primary / secondary / success / warning` |
| `variant`  | No       | `filled / outlined / soft`                                         |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Typography.Body

Source: `packages/primitives/src/components/atoms/typography.tsx:132`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.BodyLarge

Source: `packages/primitives/src/components/atoms/typography.tsx:122`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.BodySmall

Source: `packages/primitives/src/components/atoms/typography.tsx:142`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Caption

Source: `packages/primitives/src/components/atoms/typography.tsx:152`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Code

Source: `packages/primitives/src/components/atoms/typography.tsx:194`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.DisplayLarge

Source: `packages/primitives/src/components/atoms/typography.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.DisplayMedium

Source: `packages/primitives/src/components/atoms/typography.tsx:22`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.DisplaySmall

Source: `packages/primitives/src/components/atoms/typography.tsx:32`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Eyebrow

Source: `packages/primitives/src/components/atoms/typography.tsx:215`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Helper

Source: `packages/primitives/src/components/atoms/typography.tsx:184`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Label

Source: `packages/primitives/src/components/atoms/typography.tsx:162`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Master

Source: `packages/primitives/src/components/atoms/typography.tsx:4`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Overline

Source: `packages/primitives/src/components/atoms/typography.tsx:172`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Quote

Source: `packages/primitives/src/components/atoms/typography.tsx:204`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Subtitle1

Source: `packages/primitives/src/components/atoms/typography.tsx:102`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Subtitle2

Source: `packages/primitives/src/components/atoms/typography.tsx:112`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title1

Source: `packages/primitives/src/components/atoms/typography.tsx:42`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title2

Source: `packages/primitives/src/components/atoms/typography.tsx:52`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title3

Source: `packages/primitives/src/components/atoms/typography.tsx:62`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title4

Source: `packages/primitives/src/components/atoms/typography.tsx:72`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title5

Source: `packages/primitives/src/components/atoms/typography.tsx:82`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Typography.Title6

Source: `packages/primitives/src/components/atoms/typography.tsx:92`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `children`      | No       | `React.ReactNode`                                          |
| `numberOfLines` | No       | `number \| undefined`                                      |
| `numeric`       | No       | `boolean \| undefined`                                     |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`   | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`       | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`         | No       | `____TextStyleProp_Internal \| undefined`                  |
| `testID`        | No       | `string \| undefined`                                      |

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `opacity`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### View

Source: `packages/primitives/src/components/atoms/view.tsx:21`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 111. See exact API types for these inherited contracts.

## Public exports

- `Avatar` (value)
  - `(props: AvatarProps): import("react").ReactNode`
- `AvatarImageProps` (type)
- `AvatarProps` (type)
- `Badge` (value)
  - `(props: BadgeProps): import("react").ReactNode`
- `BadgeProps` (type)
- `BadgeThemeProps` (type)
- `Button` (value)
  - `(props: ButtonProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `ButtonProps` (type)
- `ButtonThemeProps` (type)
- `Control` (value)
- `ControlAddonProps` (type)
- `ControlComponentCommonProps` (type)
- `ControlComponentProps` (type)
- `ControlContainerProps` (type)
- `ControlContextData` (type)
- `ControlErrorLabelProps` (type)
- `ControlFieldProps` (type)
- `ControlIconProps` (type)
- `ControlInputProps` (type)
- `ControlLabelProps` (type)
- `ControlLayoutProps` (type)
- `ControlLoaderProps` (type)
- `ControlPlaceholderProps` (type)
- `ControlTriggerProps` (type)
- `ControlValueProps` (type)
- `createPreset` (value)
  - `(config: (theme: AppTheme) => TypographyProps & Pick<TextProps, "color">, key: TypographyPresetKey): import("react").MemoExoticComponent<{ (props: TextProps): import("react").JSX.Element; displayName: string; }>`
- `Divider` (value)
  - `(props: DividerProps): import("react").ReactNode`
- `DividerInset` (type)
- `DividerOrientation` (type)
- `DividerProps` (type)
- `EdgeToShorthandKeyMap` (value)
- `EdgeToSpacingKeyMap` (value)
- `IconButton` (value)
  - `(props: IconButtonProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `IconButtonProps` (type)
- `IconButtonThemeProps` (type)
- `Pressable` (value)
  - `(props: PressableCoreProps & RefAttributes<import("node_modules/react-native/types_generated/src/private/webapis/dom/nodes/ReactNativeElement").default>): import("react").ReactNode`
- `PressableCoreProps` (type)
- `SafeAreaView` (value)
  - `(props: import("react-native-safe-area-context").NativeSafeAreaViewProps): import("react").ReactNode`
- `SafeAreaViewProps` (type)
- `Spinner` (value)
  - `(props: SpinnerProps): import("react").ReactNode`
- `SpinnerProps` (type)
- `Tag` (value)
  - `(props: TagProps): import("react").ReactNode`
- `TagProps` (type)
- `TagThemeProps` (type)
- `TextProps` (type)
- `Typography` (value)
- `TypographyComponent` (type)
- `useControlContext` (hook)
  - `(): ControlContextData`
- `View` (value)
  - `(props: import("react-native").ViewProps & import("@impulse-ui-native/theme").SpacingProps & import("@impulse-ui-native/theme").ColorProps & import("@impulse-ui-native/theme").ShadowProps & import("@impulse-ui-native/theme").BorderProps & import("@impulse-ui-native/theme").FlexProps & import("@impulse-ui-native/theme").DimensionProps & RefAttributes<import("node_modules/react-native/types_generated/src/private/webapis/dom/nodes/ReactNativeElement").default>): import("react").ReactNode`
- `ViewProps` (type)
- `ViewStyleProps` (type)
