# @impulse-ui-native/toast: capability guide

Show a transient status message with optional action.

## Setup

- ThemeProvider, SafeAreaProvider, OverlayProvider and OverlayHost; configure SVG, Reanimated and Worklets.

## Capabilities

- Callable Toast with compound title/description/icon/action/close parts.
- Overlay registration, timed dismissal with background pause and feedback tones.

## Boundaries and composition

- Tone is success/info/warning/error, not primary/neutral/secondary.
- Custom compound parts need Toast.Root; store-owned lifetime belongs to the registered overlay.

Exact contracts: [API reference](../api/toast.md). Machine facts: [package JSON](toast.json) or [full catalog](../capabilities.json).

## Recipes

- [notifications](../recipes.md#notifications)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                             | Range      | Optional |
| -------------------------------- | ---------- | -------- |
| `react`                          | `>=18`     | No       |
| `react-native`                   | `>=0.73`   | No       |
| `react-native-reanimated`        | `>=4.0.0`  | No       |
| `react-native-worklets`          | `>=0.5`    | No       |
| `react-native-safe-area-context` | `>=5.0.0`  | No       |
| `react-native-svg`               | `>=13.9.0` | No       |

### Toast

Source: `packages/toast/src/components/toast.tsx:11`. Direct defaults: `tone="success"`, `hideIcon=false`, `hideClose=false`.

- **semantics**: Feedback tones only; not the shared brand tone axis.

| Prop              | Required | Type / choices                                    |
| ----------------- | -------- | ------------------------------------------------- |
| `action`          | No       | `ReactNode`                                       |
| `actionProps`     | No       | `Omit<ToastActionProps, "children"> \| undefined` |
| `children`        | No       | `ReactNode`                                       |
| `description`     | No       | `ReactNode`                                       |
| `duration`        | No       | `number \| undefined`                             |
| `hideClose`       | No       | `boolean \| undefined`                            |
| `hideIcon`        | No       | `boolean \| undefined`                            |
| `id`              | Yes      | `string`                                          |
| `layer`           | No       | `number \| undefined`                             |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined`           |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined`           |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined`           |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined`           |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`              |
| `open`            | No       | `boolean \| undefined`                            |
| `placement`       | No       | `bottom / top`                                    |
| `title`           | No       | `string \| undefined`                             |
| `tone`            | No       | `error / info / success / warning`                |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Toast.Action

Source: `packages/toast/src/components/toast-action.tsx:14`. Direct defaults: `closeOnPress=true`.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.
- **contextOwnedAppearance**: Tone comes from Toast.Root; these are not standalone Button appearance controls.

| Prop           | Required | Type / choices                                             |
| -------------- | -------- | ---------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                |
| `closeOnPress` | No       | `boolean \| undefined`                                     |
| `disabled`     | No       | `boolean \| undefined`                                     |
| `loading`      | No       | `boolean \| undefined`                                     |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`      | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`        | No       | `ViewStyle \| undefined`                                   |
| `testID`       | No       | `string \| undefined`                                      |
| `tone`         | No       | `neutral / primary / secondary`                            |

Style props: `aspectRatio`, `elevation`, `height`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `width`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### Toast.Close

Source: `packages/toast/src/components/toast-close.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.
- **contextOwnedAppearance**: Tone comes from Toast.Root; these are not standalone Button appearance controls.

| Prop          | Required | Type / choices                                             |
| ------------- | -------- | ---------------------------------------------------------- |
| `children`    | No       | `ReactNode`                                                |
| `disabled`    | No       | `boolean \| undefined`                                     |
| `loading`     | No       | `boolean \| undefined`                                     |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`     |
| `onLongPress` | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `style`       | No       | `ViewStyle \| undefined`                                   |
| `testID`      | No       | `string \| undefined`                                      |
| `tone`        | No       | `neutral / primary / secondary`                            |

Style props: `aspectRatio`, `elevation`, `height`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `width`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### Toast.Content

Source: `packages/toast/src/components/toast-content.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Toast.Description

Source: `packages/toast/src/components/toast-description.tsx:9`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.

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

### Toast.Icon

Source: `packages/toast/src/components/toast-icon.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Toast.Root

Source: `packages/toast/src/components/toast-root.tsx:20`. Direct defaults: `placement="bottom"`, `tone="success"`, `duration=DefaultDuration`, `layer=0`.

| Prop              | Required | Type / choices                          |
| ----------------- | -------- | --------------------------------------- |
| `children`        | No       | `ReactNode`                             |
| `duration`        | No       | `number \| undefined`                   |
| `id`              | Yes      | `string`                                |
| `layer`           | No       | `number \| undefined`                   |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined` |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined` |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined` |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined` |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`    |
| `open`            | No       | `boolean \| undefined`                  |
| `placement`       | No       | `bottom / top`                          |
| `title`           | No       | `string \| undefined`                   |
| `tone`            | No       | `error / info / success / warning`      |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Toast.Title

Source: `packages/toast/src/components/toast-title.tsx:9`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Toast.Root (the convenience Toast supplies one)
- **contentContract**: Provide child content for composition parts; convenience Toast supplies its default icon/close content.

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

## Public exports

- `Toast` (value)
  - `(props: import("@impulse-ui-native/toolkit").ToastProps): import("react").ReactNode`
- `ToastActionProps` (type)
- `ToastCloseProps` (type)
- `ToastContentProps` (type)
- `ToastContextValue` (type)
- `ToastDescriptionProps` (type)
- `ToastIconProps` (type)
- `ToastPlacement` (type)
- `ToastProps` (type)
- `ToastRootProps` (type)
- `ToastTitleProps` (type)
