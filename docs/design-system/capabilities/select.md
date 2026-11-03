# @impulse-ui-native/select: capability guide

Choose one or multiple primitive values from a list.

## Setup

- ThemeProvider, GestureHandlerRootView and SafeAreaProvider.
- PortalProvider with stable PortalStore and PortalsHost; configure Gesture Handler, Reanimated and Worklets.

## Capabilities

- Select and MultiSelect; controlled/uncontrolled values and disabled options.
- Caret defaults, initial-scroll-to-selection, loading and field addons. searchable=true adds case-insensitive label filtering, an outlined/neutral search Input and an empty result message; uncontrolled queries reset on opening. Controlled searchValue/onSearchChange displays supplied options without local filtering; optionsLoading shows flyout progress while keeping search and results interactive. Controlled queries are reset by the caller. Selected labels still require their records in options.

## Boundaries and composition

- Options are label/value records with primitive values.
- Defaults are outlined/neutral. Tone propagates to options and selected tags.
- MultiSelect uses soft tags on filled fields and filled tags on outlined/soft fields; disabled tags are outlined and cannot be removed.

Exact contracts: [API reference](../api/select.md). Machine facts: [package JSON](select.json) or [full catalog](../capabilities.json).

## Recipes

- [filters](../recipes.md#filters)
- [field-appearances](../recipes.md#field-appearances)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### MultiSelect

Source: `packages/select/src/components/multi-select.tsx:14`. Direct defaults: `tone="neutral"`, `variant="outlined"`, `searchable=false`.

- **inheritedDefaults**: {"variant":"outlined","size":"medium","from":"Control.Field"}
- **valueContract**: Select holds one primitive or empty value; MultiSelect holds an array. Options are {label,value,disabled?}.

Generic parameters: `Value extends PrimitiveValue`.

| Prop                      | Required | Type / choices                                             |
| ------------------------- | -------- | ---------------------------------------------------------- |
| `defaultValue`            | No       | `Value[] \| undefined`                                     |
| `disabled`                | No       | `boolean \| undefined`                                     |
| `error`                   | No       | `string \| undefined`                                      |
| `initialScrollToSelected` | No       | `boolean \| undefined`                                     |
| `label`                   | No       | `string \| undefined`                                      |
| `loading`                 | No       | `boolean \| undefined`                                     |
| `onChange`                | No       | `((value: Value[] \| undefined) => void) \| undefined`     |
| `onPressPrefix`           | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`           | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onSearchChange`          | No       | `((value: string) => void) \| undefined`                   |
| `options`                 | Yes      | `SelectOption<Value>[]`                                    |
| `optionsLoading`          | No       | `boolean \| undefined`                                     |
| `placeholder`             | No       | `string \| undefined`                                      |
| `Prefix`                  | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`              | No       | `ComponentType<SvgProps> \| undefined`                     |
| `searchable`              | No       | `boolean \| undefined`                                     |
| `searchValue`             | No       | `string \| undefined`                                      |
| `size`                    | No       | `large / medium / small`                                   |
| `Suffix`                  | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`              | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`                    | No       | `neutral / primary / secondary`                            |
| `value`                   | No       | `Value[] \| undefined`                                     |
| `variant`                 | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### Select

Source: `packages/select/src/components/select.tsx:11`. Direct defaults: `tone="neutral"`, `searchable=false`.

- **inheritedDefaults**: {"variant":"outlined","size":"medium","from":"Control.Field"}
- **valueContract**: Select holds one primitive or empty value; MultiSelect holds an array. Options are {label,value,disabled?}.

Generic parameters: `Value extends PrimitiveValue`.

| Prop                      | Required | Type / choices                                             |
| ------------------------- | -------- | ---------------------------------------------------------- |
| `defaultValue`            | No       | `Value \| undefined`                                       |
| `disabled`                | No       | `boolean \| undefined`                                     |
| `error`                   | No       | `string \| undefined`                                      |
| `initialScrollToSelected` | No       | `boolean \| undefined`                                     |
| `label`                   | No       | `string \| undefined`                                      |
| `loading`                 | No       | `boolean \| undefined`                                     |
| `onChange`                | No       | `((value: Value \| undefined) => void) \| undefined`       |
| `onPressPrefix`           | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`           | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onSearchChange`          | No       | `((value: string) => void) \| undefined`                   |
| `options`                 | Yes      | `SelectOption<Value>[]`                                    |
| `optionsLoading`          | No       | `boolean \| undefined`                                     |
| `placeholder`             | No       | `string \| undefined`                                      |
| `Prefix`                  | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`              | No       | `ComponentType<SvgProps> \| undefined`                     |
| `searchable`              | No       | `boolean \| undefined`                                     |
| `searchValue`             | No       | `string \| undefined`                                      |
| `size`                    | No       | `large / medium / small`                                   |
| `Suffix`                  | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`              | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`                    | No       | `neutral / primary / secondary`                            |
| `value`                   | No       | `Value \| undefined`                                       |
| `variant`                 | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `CommonSelectProps` (type)
- `MultiSelect` (value)
  - `<Value extends PrimitiveValue>(props: MultiSelectProps<Value>): import("react").JSX.Element`
- `MultiSelectProps` (type)
- `OptionProps` (type)
- `PrimitiveValue` (type)
- `Select` (value)
  - `<Value extends PrimitiveValue>(props: SelectProps<Value>): import("react").JSX.Element`
- `SelectControlProps` (type)
- `SelectFlyoutProps` (type)
- `SelectFn` (type)
- `SelectOption` (type)
- `SelectProps` (type)
- `UseSelectProps` (type)
