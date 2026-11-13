# @impulse-ui-native/data-state: capability guide

Coordinate loading, empty, error and content states.

## Setup

- ThemeProvider; configure Reanimated and Worklets.

## Capabilities

- DataView coordinates state copy/actions; standalone loading/empty/error views.
- Custom loaders, state details and tone-aware icons/actions.

## Boundaries and composition

- Supply the state detail props required by DataView; flags are application data.
- Custom loading/content components own their layout and may ignore tone.

Exact contracts: [API reference](../api/data-state.md). Machine facts: [package JSON](data-state.json) or [full catalog](../capabilities.json).

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

### DataView

Source: `packages/data-state/src/components/data-view.tsx:11`. Direct defaults: `tone="primary"`.

- **mountPolicy**: Successful content stays mounted and hidden under the loader while loading without error/empty flags. Error/empty flags remove successful content.
- **statePrecedence**: Error and empty details can both render if both flags are active; applications should choose flags deliberately.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `ReactNode`                                            |
| `contentContainerStyle` | No       | `ViewStyle \| undefined`                               |
| `emptyViewProps`        | Yes      | `StateViewProps`                                       |
| `error`                 | Yes      | `Error \| null`                                        |
| `errorViewProps`        | Yes      | `StateViewProps`                                       |
| `isEmpty`               | Yes      | `boolean`                                              |
| `loading`               | Yes      | `boolean`                                              |
| `LoadingComponent`      | Yes      | `ComponentType<{ tone?: ComponentTone; }>`             |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |
| `tone`                  | No       | `neutral / primary / secondary`                        |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### EmptyView

Source: `packages/data-state/src/components/empty-view.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `ViewStyle \| undefined`                               |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### ErrorView

Source: `packages/data-state/src/components/error-view.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `ViewStyle \| undefined`                               |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

### LoadingView

Source: `packages/data-state/src/components/loading-view.tsx:16`. Direct defaults: `tone="primary"`.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `contentContainerStyle` | No       | `ViewStyle \| undefined`                               |
| `loading`               | Yes      | `boolean`                                              |
| `LoadingComponent`      | Yes      | `ComponentType<{ tone?: ComponentTone; }>`             |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`                   | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |
| `tone`                  | No       | `neutral / primary / secondary`                        |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `DataView` (value)
  - `(props: DataViewProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `DataViewProps` (type)
- `EmptyView` (value)
  - `(props: import("@impulse-ui-native/toolkit").StateContainerProps): import("react").ReactNode`
- `EmptyViewProps` (type)
- `ErrorView` (value)
  - `(props: import("@impulse-ui-native/toolkit").StateContainerProps): import("react").ReactNode`
- `ErrorViewProps` (type)
- `LoadingView` (value)
  - `(props: LoadingViewProps): import("react").ReactNode`
- `LoadingViewProps` (type)
- `StateActionsFooterProps` (type)
- `StateContainerProps` (type)
- `StateViewProps` (type)
