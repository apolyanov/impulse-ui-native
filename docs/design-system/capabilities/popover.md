# @impulse-ui-native/popover: capability guide

Anchor contextual actions or a tooltip to a trigger.

## Setup

- ThemeProvider, SafeAreaProvider, PortalProvider and a matching PortalsHost.
- Configure Reanimated/Worklets; see package peers.

## Capabilities

- Popover.Root/Trigger/Content and presentation parts; controlled/uncontrolled open.
- Tooltip convenience component, host-relative positioning, and measured spring transitions with retained exits.

## Boundaries and composition

- Trigger/Content/Close require the same Popover.Root.
- The portal host name must match; touch trigger modes differ from browser hover behavior.

Exact contracts: [API reference](../api/popover.md). Machine facts: [package JSON](popover.json) or [full catalog](../capabilities.json).

## Recipes

- [anchored-actions](../recipes.md#anchored-actions)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                             | Range     | Optional |
| -------------------------------- | --------- | -------- |
| `react`                          | `>=18`    | No       |
| `react-native`                   | `>=0.73`  | No       |
| `react-native-safe-area-context` | `>=5.0.0` | No       |
| `react-native-reanimated`        | `>=4`     | No       |
| `react-native-worklets`          | `>=0.5`   | No       |

### Popover

Source: `packages/popover/src/components/popover.tsx:16`. Direct defaults: `hideClose=false`.

| Prop           | Required | Type / choices                           |
| -------------- | -------- | ---------------------------------------- |
| `children`     | No       | `ReactNode`                              |
| `contentProps` | No       | `ViewProps \| undefined`                 |
| `defaultOpen`  | No       | `boolean \| undefined`                   |
| `disabled`     | No       | `boolean \| undefined`                   |
| `footer`       | No       | `ReactNode`                              |
| `header`       | No       | `ReactNode`                              |
| `hideClose`    | No       | `boolean \| undefined`                   |
| `onOpenChange` | No       | `((open: boolean) => void) \| undefined` |
| `open`         | No       | `boolean \| undefined`                   |
| `placement`    | No       | `bottom / left / right / top`            |
| `portalName`   | No       | `string \| undefined`                    |
| `title`        | No       | `ReactNode`                              |
| `trigger`      | Yes      | `ReactNode`                              |
| `triggerProps` | No       | `PopoverTriggerProps \| undefined`       |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Popover.Close

Source: `packages/popover/src/components/popover-close.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Popover.Root
- **contentContract**: Render supplied children; portal Content re-provides its required context.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                                                         |
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

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### Popover.Content

Source: `packages/popover/src/components/popover-content.tsx:16`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Popover.Root
- **contentContract**: Render supplied children; portal Content re-provides its required context.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Popover.Description

Source: `packages/popover/src/components/popover-description.tsx:8`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

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

### Popover.Footer

Source: `packages/popover/src/components/popover-footer.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Popover.Header

Source: `packages/popover/src/components/popover-header.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Popover.Root

Source: `packages/popover/src/components/popover-root.tsx:10`. Direct defaults: `defaultOpen=false`, `disabled=false`, `placement="bottom"`.

| Prop           | Required | Type / choices                           |
| -------------- | -------- | ---------------------------------------- |
| `children`     | No       | `ReactNode`                              |
| `defaultOpen`  | No       | `boolean \| undefined`                   |
| `disabled`     | No       | `boolean \| undefined`                   |
| `onOpenChange` | No       | `((open: boolean) => void) \| undefined` |
| `open`         | No       | `boolean \| undefined`                   |
| `placement`    | No       | `bottom / left / right / top`            |
| `portalName`   | No       | `string \| undefined`                    |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Popover.Title

Source: `packages/popover/src/components/popover-title.tsx:8`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

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

### Popover.Trigger

Source: `packages/popover/src/components/popover-trigger.tsx:10`. Direct defaults: `trigger="press"`.

- **requiresParent**: Popover.Root
- **contentContract**: Render supplied children; portal Content re-provides its required context.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                                                         |
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
| `trigger`      | No       | `longPress / press`                                                                                 |
| `variant`      | No       | `filled / ghost / outlined / soft`                                                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 123. See exact API types for these inherited contracts.

### Tooltip

Source: `packages/popover/src/components/tooltip.tsx:19`. Direct defaults: `defaultOpen=false`, `placement="top"`, `duration=TooltipDuration`.

| Prop           | Required | Type / choices                           |
| -------------- | -------- | ---------------------------------------- |
| `children`     | No       | `ReactNode`                              |
| `content`      | Yes      | `ReactNode`                              |
| `defaultOpen`  | No       | `boolean \| undefined`                   |
| `disabled`     | No       | `boolean \| undefined`                   |
| `duration`     | No       | `number \| undefined`                    |
| `onOpenChange` | No       | `((open: boolean) => void) \| undefined` |
| `open`         | No       | `boolean \| undefined`                   |
| `placement`    | No       | `bottom / left / right / top`            |
| `portalName`   | No       | `string \| undefined`                    |
| `triggerProps` | No       | `PopoverTriggerProps \| undefined`       |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `Popover` (value)
  - `(props: import("@impulse-ui-native/toolkit").PopoverProps): import("react").ReactNode`
- `PopoverCloseProps` (type)
- `PopoverContentProps` (type)
- `PopoverDescriptionProps` (type)
- `PopoverFooterProps` (type)
- `PopoverHeaderProps` (type)
- `PopoverPlacement` (type)
- `PopoverProps` (type)
- `PopoverRootProps` (type)
- `PopoverTitleProps` (type)
- `PopoverTriggerProps` (type)
- `Tooltip` (value)
  - `(props: TooltipProps): import("react").ReactNode`
- `TooltipProps` (type)
