# @impulse-ui-native/card: capability guide

Group related media, copy and actions on a surface.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Callable convenience component with header/media/footer slots.
- Root, Pressable, Header, Content, Footer and Media composition.

## Boundaries and composition

- Parts are child-only presentation; they do not manufacture titles or actions.
- Use Card.Pressable for an interactive surface; appearance comes from tokens rather than variant/tone.

Exact contracts: [API reference](../api/card.md). Machine facts: [package JSON](card.json) or [full catalog](../capabilities.json).

## Recipes

- [profile-card](../recipes.md#profile-card)
- [product-carousel](../recipes.md#product-carousel)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Card

Source: `packages/card/src/components/card.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `footer`   | No       | `ReactNode`                                            |
| `header`   | No       | `ReactNode`                                            |
| `media`    | No       | `ReactNode`                                            |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Card.Content

Source: `packages/card/src/components/content.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Card.Footer

Source: `packages/card/src/components/footer.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Card.Header

Source: `packages/card/src/components/header.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Card.Media

Source: `packages/card/src/components/media.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Card.Pressable

Source: `packages/card/src/components/pressable.tsx:15`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop           | Required | Type / choices                                                                                      |
| -------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`     | No       | `ReactNode`                                                                                         |
| `onLayout`     | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress`  | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`      | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `pressedStyle` | No       | `StyleProp<ViewStyle> \| undefined`                                                                 |
| `style`        | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`       | No       | `string \| undefined`                                                                               |

Style props: `aspectRatio`, `elevation`, `height`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `width`. Additional inherited native props: 124. See exact API types for these inherited contracts.

### Card.Root

Source: `packages/card/src/components/root.tsx:10`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **contentContract**: Child-only presentation. No shared selection state is implied by the dotted namespace.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `React.ReactNode`                                      |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`      | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `Card` (value)
  - `(props: import("@impulse-ui-native/toolkit").CardProps): import("react").ReactNode`
- `CardContentProps` (type)
- `CardFooterProps` (type)
- `CardHeaderProps` (type)
- `CardMediaProps` (type)
- `CardPressableProps` (type)
- `CardProps` (type)
- `CardRootProps` (type)
