# @impulse-ui-native/carousel: capability guide

Browse a finite horizontal collection with snapping.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- One child per slide; controlled/uncontrolled index, peeking and navigation.
- Adaptive dots/counter pagination and tone-aware controls.

## Boundaries and composition

- Finite collection, not an infinite virtualized pager.
- Native ScrollView-based; no Gesture Handler or Reanimated setup is required by this package.

Exact contracts: [API reference](../api/carousel.md). Machine facts: [package JSON](carousel.json) or [full catalog](../capabilities.json).

## Recipes

- [product-carousel](../recipes.md#product-carousel)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer               | Range      | Optional |
| ------------------ | ---------- | -------- |
| `react`            | `>=18`     | No       |
| `react-native`     | `>=0.73`   | No       |
| `react-native-svg` | `>=13.9.0` | No       |

### Carousel

Source: `packages/carousel/src/components/carousel.tsx:15`. Direct defaults: `defaultIndex=0`, `disabled=false`, `pagination="dots"`, `tone="primary"`, `showNavigation=true`, `peek=0`, `slideAspectRatio=DefaultSlideAspectRatio`.

| Prop               | Required | Type / choices                                         |
| ------------------ | -------- | ------------------------------------------------------ |
| `children`         | No       | `ReactNode`                                            |
| `defaultIndex`     | No       | `number \| undefined`                                  |
| `disabled`         | No       | `boolean \| undefined`                                 |
| `index`            | No       | `number \| undefined`                                  |
| `onIndexChange`    | No       | `((index: number) => void) \| undefined`               |
| `onLayout`         | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `pagination`       | No       | `counter / dots / none / segments`                     |
| `peek`             | No       | `number \| undefined`                                  |
| `ref`              | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `showNavigation`   | No       | `boolean \| undefined`                                 |
| `slideAspectRatio` | No       | `number \| undefined`                                  |
| `style`            | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`           | No       | `string \| undefined`                                  |
| `tone`             | No       | `neutral / primary / secondary`                        |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `Carousel` (value)
  - `(props: CarouselProps): import("react").ReactNode`
- `CarouselPagination` (type)
- `CarouselProps` (type)
