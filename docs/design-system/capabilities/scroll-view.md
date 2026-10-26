# @impulse-ui-native/scroll-view: capability guide

Scroll content and reveal an initially selected measured child.

## Setup

- React and React Native. No ThemeProvider is required by this wrapper.

## Capabilities

- Native ScrollView and measured initial-scroll hook.

## Boundaries and composition

- No virtualization; use FlatList for large datasets.
- Attach the helper refs and layout/content callbacks as documented; it is not scroll-to-index for unknown items.

Exact contracts: [API reference](../api/scroll-view.md). Machine facts: [package JSON](scroll-view.json) or [full catalog](../capabilities.json).

## Recipes

- [data-list](../recipes.md#data-list)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### ScrollView

Source: `node_modules/react-native/types_generated/Libraries/Components/ScrollView/ScrollView.d.ts:678`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `____ViewStyleProp_Internal \| undefined`              |
| `horizontal`            | No       | `boolean \| undefined`                                 |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `React.Ref<ScrollViewInstance> \| undefined`           |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 172. See exact API types for these inherited contracts.

### ScrollView.Context

Source: `node_modules/react-native/types_generated/Libraries/Components/ScrollView/ScrollView.d.ts:636`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices |
| ---------- | -------- | -------------- |
| `children` | No       | `ReactNode`    |
| `value`    | Yes      | `Value`        |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ScrollView.Context.Consumer

Source: `node_modules/@types/react/index.d.ts:680`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                |
| ---------- | -------- | ----------------------------- |
| `children` | Yes      | `(value: Value) => ReactNode` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### ScrollView.Context.Provider

Source: `node_modules/@types/react/index.d.ts:679`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices |
| ---------- | -------- | -------------- |
| `children` | No       | `ReactNode`    |
| `value`    | Yes      | `Value`        |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `ScrollView` (value)
  - `(props: Omit<ScrollViewProps, "ref"> & { ref?: React.Ref<ScrollViewInstance> \| undefined; }): React.ReactNode`
- `ScrollViewProps` (type)
- `useScrollViewInitialScroll` (hook)
  - `({ enabled, horizontal, contentOffset, onLayout, onContentSizeChange, onScrollBeginDrag, }?: UseScrollViewInitialScrollOptions): UseScrollViewInitialScrollResult`
- `UseScrollViewInitialScrollOptions` (type)
- `UseScrollViewInitialScrollResult` (type)
