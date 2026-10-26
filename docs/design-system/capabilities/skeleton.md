# @impulse-ui-native/skeleton: capability guide

Represent the geometry of content while loading.

## Setup

- ThemeProvider; Reanimated and Worklets configured.

## Capabilities

- Container, Bone, Text and token-matched component presets including Control, Button, Avatar, Slider and Textarea.

## Boundaries and composition

- Presets are placeholders, not disabled interactive components.
- Match skeleton geometry to the content and use DataView/LoadingView to choose when to show it.

Exact contracts: [API reference](../api/skeleton.md). Machine facts: [package JSON](skeleton.json) or [full catalog](../capabilities.json).

## Recipes

- [data-list](../recipes.md#data-list)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                      | Range     | Optional |
| ------------------------- | --------- | -------- |
| `react`                   | `>=18`    | No       |
| `react-native`            | `>=0.73`  | No       |
| `react-native-reanimated` | `>=3.6.0` | No       |
| `react-native-worklets`   | `>=0.5`   | No       |

### Skeleton.Avatar

Source: `packages/skeleton/src/components/skeleton.tsx:21`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Badge

Source: `packages/skeleton/src/components/skeleton.tsx:22`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Bone

Source: `packages/skeleton/src/components/skeleton.tsx:23`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                      |
| ---------- | -------- | ----------------------------------- |
| `children` | No       | `ReactNode`                         |
| `style`    | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Button

Source: `packages/skeleton/src/components/skeleton.tsx:24`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Checkbox

Source: `packages/skeleton/src/components/skeleton.tsx:25`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Container

Source: `packages/skeleton/src/components/skeleton.tsx:26`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices |
| ---------- | -------- | -------------- |
| `children` | No       | `ReactNode`    |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Control

Source: `packages/skeleton/src/components/skeleton.tsx:27`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Divider

Source: `packages/skeleton/src/components/skeleton.tsx:28`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop          | Required | Type / choices                      |
| ------------- | -------- | ----------------------------------- |
| `orientation` | No       | `horizontal / vertical`             |
| `style`       | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.IconButton

Source: `packages/skeleton/src/components/skeleton.tsx:29`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Pagination

Source: `packages/skeleton/src/components/skeleton.tsx:30`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop        | Required | Type / choices                      |
| ----------- | -------- | ----------------------------------- |
| `itemCount` | No       | `number \| undefined`               |
| `size`      | No       | `large / medium / small`            |
| `style`     | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Progress

Source: `packages/skeleton/src/components/skeleton.tsx:31`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop      | Required | Type / choices                      |
| --------- | -------- | ----------------------------------- |
| `size`    | No       | `large / medium / small`            |
| `style`   | No       | `StyleProp<ViewStyle> \| undefined` |
| `variant` | No       | `circular / linear`                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Radio

Source: `packages/skeleton/src/components/skeleton.tsx:32`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.SegmentedControl

Source: `packages/skeleton/src/components/skeleton.tsx:33`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop        | Required | Type / choices                      |
| ----------- | -------- | ----------------------------------- |
| `itemCount` | No       | `number \| undefined`               |
| `size`      | No       | `large / medium / small`            |
| `style`     | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Slider

Source: `packages/skeleton/src/components/skeleton.tsx:34`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Switch

Source: `packages/skeleton/src/components/skeleton.tsx:35`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Tag

Source: `packages/skeleton/src/components/skeleton.tsx:37`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Text

Source: `packages/skeleton/src/components/skeleton.tsx:36`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop        | Required | Type / choices                                                                               |
| ----------- | -------- | -------------------------------------------------------------------------------------------- |
| `Component` | Yes      | `React.MemoExoticComponent<{ (props: TextProps): React.JSX.Element; displayName: string; }>` |
| `text`      | Yes      | `string`                                                                                     |

Style props: `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Skeleton.Textarea

Source: `packages/skeleton/src/components/skeleton.tsx:38`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop    | Required | Type / choices                      |
| ------- | -------- | ----------------------------------- |
| `rows`  | No       | `number \| undefined`               |
| `size`  | No       | `large / medium / small`            |
| `style` | No       | `StyleProp<ViewStyle> \| undefined` |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `Skeleton` (value)
- `SkeletonAvatarProps` (type)
- `SkeletonBadgeProps` (type)
- `SkeletonBoneProps` (type)
- `SkeletonButtonProps` (type)
- `SkeletonCheckboxProps` (type)
- `SkeletonContainerProps` (type)
- `SkeletonControlProps` (type)
- `SkeletonDividerProps` (type)
- `SkeletonIconButtonProps` (type)
- `SkeletonPaginationProps` (type)
- `SkeletonProgressProps` (type)
- `SkeletonRadioProps` (type)
- `SkeletonSegmentedControlProps` (type)
- `SkeletonSizedProps` (type)
- `SkeletonSliderProps` (type)
- `SkeletonSwitchProps` (type)
- `SkeletonTagProps` (type)
- `SkeletonTextareaProps` (type)
- `SkeletonTextProps` (type)
