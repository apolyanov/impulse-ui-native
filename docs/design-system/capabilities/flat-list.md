# @impulse-ui-native/flat-list: capability guide

Render long virtualized lists with known item layouts.

## Setup

- React and React Native. No ThemeProvider is required by this wrapper.

## Capabilities

- Native FlatList export and initial-scroll positioning hook.

## Boundaries and composition

- Native FlatList props are authoritative; this package does not manufacture List rows.
- Use the initial-scroll helper when row sizes are known; use scroll-view for measured content.

Exact contracts: [API reference](../api/flat-list.md). Machine facts: [package JSON](flat-list.json) or [full catalog](../capabilities.json).

## Recipes

- [data-list](../recipes.md#data-list)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### FlatList

Source: `node_modules/react-native/types_generated/Libraries/Lists/FlatList.d.ts:245`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

Generic parameters: `ItemT extends unknown`.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `____ViewStyleProp_Internal \| undefined`              |
| `data`                  | Yes      | `Readonly<ArrayLike<ItemT>> \| undefined`              |
| `horizontal`            | No       | `boolean \| undefined`                                 |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `renderItem`            | No       | `ListRenderItem<ItemT> \| undefined`                   |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 206. See exact API types for these inherited contracts.

## Public exports

- `FlatList` (class)
- `FlatListProps` (type)
- `FlatListRef` (type)
- `useFlatListInitialScroll` (hook)
  - `<Item>(options: UseFlatListInitialScrollOptions): { initialScrollIndex: number \| undefined; getItemLayout: (data: Readonly<ArrayLike<Item>> \| undefined, index: number) => { length: number; offset: number; index: number; }; }`
- `UseFlatListInitialScrollOptions` (type)

### FlatList methods

- `scrollToEnd`
  - `(params?: null \| undefined \| { animated?: boolean \| undefined; }): void`
- `scrollToIndex`
  - `(params: { animated?: boolean \| undefined; index: number; viewOffset?: number \| undefined; viewPosition?: number \| undefined; }): void`
- `scrollToItem`
  - `(params: { animated?: boolean \| undefined; item: ItemT; viewOffset?: number \| undefined; viewPosition?: number \| undefined; }): void`
- `scrollToOffset`
  - `(params: { animated?: boolean \| undefined; offset: number; }): void`
- `recordInteraction`
  - `(): void`
- `flashScrollIndicators`
  - `(): void`
- `getScrollResponder`
  - `(): null \| undefined \| ScrollResponderType`
- `getNativeScrollRef`
  - `(): null \| undefined \| ScrollViewInstance`
- `getScrollableNode`
  - `(): any`
- `setNativeProps`
  - `(props: { [$$Key$$: string]: unknown; }): void`
- `componentDidUpdate`
  - `(prevProps: FlatListProps<ItemT>): void`
- `render`
  - `(): React.ReactNode`
- `setState`
  - `<K extends never>(state: {} \| ((prevState: Readonly<{}>, props: Readonly<import("react-native").FlatListProps<ItemT>>) => {} \| Pick<{}, K> \| null) \| Pick<{}, K> \| null, callback?: (() => void) \| undefined): void`
- `forceUpdate`
  - `(callback?: (() => void) \| undefined): void`
