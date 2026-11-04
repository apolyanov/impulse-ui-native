# @impulse-ui-native/flyout: capability guide

Show a top or bottom gesture-dismissable sheet.

## Setup

- ThemeProvider, GestureHandlerRootView and SafeAreaProvider; Reanimated/Worklets setup. KeyboardAwareView also requires react-native-keyboard-controller native setup and KeyboardProvider above Portal/Overlay hosts.
- Local portals additionally need PortalProvider/PortalsHost; registered sheets need OverlayProvider/OverlayHost.

## Capabilities

- Callable sheet plus Root/Header/Title/Content/ScrollView/KeyboardAwareView/Handle parts; body children render directly.
- Controlled open state, transition callbacks, safe-area layout and drag dismissal.

## Boundaries and composition

- Child-only parts do not generate header content; the convenience component supplies defaults.
- Use Content for static padding, ScrollView for scrolling, or a direct KeyboardAwareView body child to reserve keyboard overlap inside the body. KeyboardAwareView renders one View; it adds no scroll container; animated keyboard padding reflows its content and may grow the sheet up to its normal height cap. enabled defaults to true; keyboardOffset defaults to components.flyout.keyboardOffset, sourced from space.xs (8 logical units). The gap follows keyboard animation progress and is absent while closed; keyboardOffset=0 removes it. Root stays attached to its placement edge with no keyboard translation. Body padding can grow the sheet, with header and handle reflowing naturally; the scroll viewport shrinks once the sheet reaches its height cap. Overlap accounts for safe area, placement offset and siblings below the body. Normal body sizing returns when the keyboard closes. Focused-field scrolling belongs to the chosen scroll container. Root renders one backdrop and one sheet; safe-area padding is on the sheet itself. Handle inherits Root placement. Root caps the whole sheet at 70% of window height and tracks resizing without rebuilding its drag gesture. Custom containers own padding and keyboard behavior. Flyout does not itself imply a global registration or portal: choose local Portal or OverlayHost explicitly.

Exact contracts: [API reference](../api/flyout.md). Machine facts: [package JSON](flyout.json) or [full catalog](../capabilities.json).

## Recipes

- [details-dialog](../recipes.md#details-dialog)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                               | Range      | Optional |
| ---------------------------------- | ---------- | -------- |
| `react`                            | `>=18`     | No       |
| `react-native`                     | `>=0.73`   | No       |
| `react-native-reanimated`          | `>=4.0.0`  | No       |
| `react-native-gesture-handler`     | `>=2.0.0`  | No       |
| `react-native-worklets`            | `>=0.5`    | No       |
| `react-native-safe-area-context`   | `>=5.0.0`  | No       |
| `react-native-keyboard-controller` | `>=1.22.0` | No       |

### Flyout

Source: `packages/flyout/src/components/flyout.tsx:9`. Direct defaults: `placement="bottom"`.

| Prop              | Required | Type / choices                            |
| ----------------- | -------- | ----------------------------------------- |
| `bottomOffset`    | No       | `number \| undefined`                     |
| `children`        | No       | `ReactNode`                               |
| `header`          | No       | `ReactNode`                               |
| `id`              | Yes      | `string`                                  |
| `layer`           | No       | `number \| undefined`                     |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined`   |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined`   |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined`   |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined`   |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`      |
| `open`            | No       | `boolean \| undefined`                    |
| `placement`       | No       | `bottom / top`                            |
| `style`           | No       | `____ViewStyleProp_Internal \| undefined` |
| `title`           | No       | `string \| undefined`                     |
| `topOffset`       | No       | `number \| undefined`                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Flyout.Content

Source: `packages/flyout/src/components/index.ts:15`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Flyout.Handle

Source: `packages/flyout/src/components/index.ts:18`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Flyout.Header

Source: `packages/flyout/src/components/index.ts:13`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Flyout.KeyboardAwareView

Source: `packages/flyout/src/components/index.ts:17`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop             | Required | Type / choices                                         |
| ---------------- | -------- | ------------------------------------------------------ |
| `children`       | No       | `React.ReactNode`                                      |
| `enabled`        | No       | `boolean \| undefined`                                 |
| `keyboardOffset` | No       | `number \| undefined`                                  |
| `onLayout`       | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`            | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`          | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`         | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 111. See exact API types for these inherited contracts.

### Flyout.Root

Source: `packages/flyout/src/components/index.ts:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop              | Required | Type / choices                            |
| ----------------- | -------- | ----------------------------------------- |
| `bottomOffset`    | No       | `number \| undefined`                     |
| `children`        | No       | `ReactNode`                               |
| `id`              | Yes      | `string`                                  |
| `layer`           | No       | `number \| undefined`                     |
| `onClose`         | No       | `OverlayLifecycleCallback \| undefined`   |
| `onCloseFinished` | No       | `OverlayLifecycleCallback \| undefined`   |
| `onOpen`          | No       | `OverlayLifecycleCallback \| undefined`   |
| `onOpenFinished`  | No       | `OverlayLifecycleCallback \| undefined`   |
| `onStatusChange`  | No       | `OverlayStatusCallback \| undefined`      |
| `open`            | No       | `boolean \| undefined`                    |
| `placement`       | No       | `bottom / top`                            |
| `style`           | No       | `____ViewStyleProp_Internal \| undefined` |
| `topOffset`       | No       | `number \| undefined`                     |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Flyout.ScrollView

Source: `packages/flyout/src/components/index.ts:16`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `____ViewStyleProp_Internal \| undefined`              |
| `horizontal`            | No       | `boolean \| undefined`                                 |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `Ref<ScrollViewInstance> \| undefined`                 |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 173. See exact API types for these inherited contracts.

### Flyout.Title

Source: `packages/flyout/src/components/index.ts:14`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

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

- `Flyout` (value)
  - `(props: import("@impulse-ui-native/toolkit").FlyoutProps): import("react").ReactNode`
- `FlyoutContentProps` (type)
- `FlyoutHandleProps` (type)
- `FlyoutHeaderProps` (type)
- `FlyoutKeyboardAwareViewProps` (type)
- `FlyoutProps` (type)
- `FlyoutRootProps` (type)
- `FlyoutScrollViewProps` (type)
- `FlyoutTitleProps` (type)
