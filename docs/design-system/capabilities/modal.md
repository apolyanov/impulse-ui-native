# @impulse-ui-native/modal: capability guide

Request focused confirmation or show a compact dialog.

## Setup

- ThemeProvider and SafeAreaProvider; configure Reanimated/Worklets.
- Use PortalProvider/PortalsHost for local portals or OverlayProvider/OverlayHost for global registration.

## Capabilities

- Callable dialog plus Provider/Root/Header/Title/Description/Content/Footer/Close.
- Local open/lifecycle props or global OverlayStore registration.

## Boundaries and composition

- Modal.Root and Modal.Close require Modal.Provider; Header/Content/Footer/Title/Description are presentation parts. Use the convenience component to assemble the provider and common structure.
- Custom Close content must be supplied; the part does not manufacture an X icon.

Exact contracts: [API reference](../api/modal.md). Machine facts: [package JSON](modal.json) or [full catalog](../capabilities.json).

## Recipes

- [details-dialog](../recipes.md#details-dialog)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                             | Range     | Optional |
| -------------------------------- | --------- | -------- |
| `react`                          | `>=18`    | No       |
| `react-native`                   | `>=0.73`  | No       |
| `react-native-reanimated`        | `>=4`     | No       |
| `react-native-safe-area-context` | `>=5.0.0` | No       |
| `react-native-worklets`          | `>=0.5`   | No       |

### Modal

Source: `packages/modal/src/components/modal.tsx:16`. Direct defaults: `hideClose=false`.

| Prop              | Required | Type / choices                                         |
| ----------------- | -------- | ------------------------------------------------------ |
| `children`        | No       | `ReactNode`                                            |
| `footer`          | No       | `ReactNode`                                            |
| `header`          | No       | `ReactNode`                                            |
| `hideClose`       | No       | `boolean \| undefined`                                 |
| `id`              | Yes      | `string`                                               |
| `layer`           | No       | `number \| undefined`                                  |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined`                |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined`                |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined`                |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined`                |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`                   |
| `open`            | No       | `boolean \| undefined`                                 |
| `size`            | No       | `large / medium / small`                               |
| `style`           | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`          | No       | `string \| undefined`                                  |
| `title`           | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 109. See exact API types for these inherited contracts.

### Modal.Close

Source: `packages/modal/src/components/close.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Modal.Provider
- **contentContract**: Render supplied children; no automatic close icon.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                                                         |
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

### Modal.Content

Source: `packages/modal/src/components/content.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Modal.Description

Source: `packages/modal/src/components/description.tsx:8`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

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

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `opacity`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

### Modal.Footer

Source: `packages/modal/src/components/footer.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Modal.Header

Source: `packages/modal/src/components/header.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Modal.Provider

Source: `packages/modal/src/components/provider.tsx:7`. Direct defaults: `layer=0`.

| Prop              | Required | Type / choices                          |
| ----------------- | -------- | --------------------------------------- |
| `children`        | No       | `ReactNode`                             |
| `id`              | Yes      | `string`                                |
| `layer`           | No       | `number \| undefined`                   |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined` |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined` |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined` |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined` |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`    |
| `open`            | No       | `boolean \| undefined`                  |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Modal.Root

Source: `packages/modal/src/components/root.tsx:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Modal.Provider

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`     | No       | `large / medium / small`                               |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Modal.Title

Source: `packages/modal/src/components/title.tsx:8`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

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

Style props: `alignContent`, `alignItems`, `alignSelf`, `backgroundColor`, `bottom`, `color`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `fontFamily`, `fontSize`, `fontStyle`, `fontVariant`, `fontWeight`, `gap`, `includeFontPadding`, `justifyContent`, `left`, `letterSpacing`, `lineHeight`, `opacity`, `position`, `right`, `rowGap`, `textAlign`, `textAlignVertical`, `textDecorationColor`, `textDecorationLine`, `textDecorationStyle`, `textTransform`, `top`, `zIndex`. Additional inherited native props: 65. See exact API types for these inherited contracts.

## Public exports

- `Modal` (value)
  - `(props: import("@impulse-ui-native/toolkit").ModalProps): import("react").ReactNode`
- `ModalCloseProps` (type)
- `ModalContentProps` (type)
- `ModalContextValue` (type)
- `ModalDescriptionProps` (type)
- `ModalFooterProps` (type)
- `ModalHeaderProps` (type)
- `ModalLifecycleProps` (type)
- `ModalProps` (type)
- `ModalProviderProps` (type)
- `ModalRootProps` (type)
- `ModalSurfaceProps` (type)
- `ModalTitleProps` (type)
- `useModalContext` (hook)
  - `(): import("@impulse-ui-native/toolkit").ModalContextValue`
