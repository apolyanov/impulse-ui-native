# @impulse-ui-native/segmented-control: capability guide

Choose one of a few adjacent options.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Root owns a value; Item provides a value, text or custom children.
- Root size/variant/tone and disabled state propagate to items.

## Boundaries and composition

- Items require the same Root; nested roots own independent state.
- Controlled mode requires value and forbids defaultValue; uncontrolled mode requires defaultValue. Do not pass both.

Exact contracts: [API reference](../api/segmented-control.md). Machine facts: [package JSON](segmented-control.json) or [full catalog](../capabilities.json).

## Recipes

- [filters](../recipes.md#filters)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer               | Range      | Optional |
| ------------------ | ---------- | -------- |
| `react`            | `>=18`     | No       |
| `react-native`     | `>=0.73`   | No       |
| `react-native-svg` | `>=13.9.0` | No       |

### SegmentedControl.Item

Source: `packages/segmented-control/src/components/item.tsx:27`. Direct defaults: `disabled=false`.

- **requiresParent**: SegmentedControl.Root
- **inheritance**: Root owns size, variant, tone and group disabled state.

| Prop          | Required | Type / choices                                                                                      |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`    | No       | `ReactNode`                                                                                         |
| `Icon`        | No       | `React.ComponentType<SvgProps> \| undefined`                                                        |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `style`       | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`      | No       | `string \| undefined`                                                                               |
| `value`       | Yes      | `string`                                                                                            |

Style props: none detected. Additional inherited native props: 124. See exact API types for these inherited contracts.

### SegmentedControl.Root

Source: `packages/segmented-control/src/components/root.tsx:19`. Direct defaults: `disabled=false`, `initialScrollToSelected=true`, `overflow="clip"`, `showsHorizontalScrollIndicator=false`, `size="medium"`, `variant="filled"`, `tone="primary"`.

Discriminated/value alternatives (do not mix incompatible modes):

- Required: `value`; `defaultValue: undefined`; `value: string`.
- Required: `defaultValue`; `defaultValue: string`; `value: undefined`.

| Prop                      | Required | Type / choices                                         |
| ------------------------- | -------- | ------------------------------------------------------ |
| `children`                | No       | `ReactNode`                                            |
| `contentContainerStyle`   | No       | `____ViewStyleProp_Internal \| undefined`              |
| `defaultValue`            | No       | `string \| undefined`                                  |
| `disabled`                | No       | `boolean \| undefined`                                 |
| `initialScrollToSelected` | No       | `boolean \| undefined`                                 |
| `onLayout`                | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onValueChange`           | No       | `((value: string) => void) \| undefined`               |
| `size`                    | No       | `large / medium / small`                               |
| `style`                   | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                  | No       | `string \| undefined`                                  |
| `tone`                    | No       | `neutral / primary / secondary`                        |
| `value`                   | No       | `string \| undefined`                                  |
| `variant`                 | No       | `filled / outlined / soft`                             |

Style props: `overflow`. Additional inherited native props: 171. See exact API types for these inherited contracts.

## Public exports

- `SegmentedControl` (value)
- `SegmentedControlItemProps` (type)
- `SegmentedControlItemThemeProps` (type)
- `SegmentedControlOverflow` (type)
- `SegmentedControlRootProps` (type)
- `SegmentedControlRootThemeProps` (type)
