# @impulse-ui-native/slider: capability guide

Adjust one numeric value or a numeric range.

## Setup

- ThemeProvider and GestureHandlerRootView; Gesture Handler, Reanimated and Worklets configured.

## Capabilities

- Slider/RangeSlider; marks, steps, labels and controlled/uncontrolled values.
- Gesture callbacks and shared filled/outlined/soft variants and tones.

## Boundaries and composition

- Range values and callback payloads differ from single-value sliders; read SliderValue.
- Numeric data and custom gradient tracks are distinct from tone; ensure min/max/step form valid bounds.

Exact contracts: [API reference](../api/slider.md). Machine facts: [package JSON](slider.json) or [full catalog](../capabilities.json).

## Recipes

- [filters](../recipes.md#filters)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                           | Range     | Optional |
| ------------------------------ | --------- | -------- |
| `react`                        | `>=18`    | No       |
| `react-native`                 | `>=0.73`  | No       |
| `react-native-gesture-handler` | `>=2.0.0` | No       |
| `react-native-reanimated`      | `>=4.0.0` | No       |
| `react-native-worklets`        | `>=0.5`   | No       |

### RangeSlider

Source: `packages/slider/src/components/range-slider.tsx:18`. Direct defaults: `defaultValue=DefaultRangeValue`, `disabled=false`, `max=DefaultMax`, `min=DefaultMin`, `minStepsBetweenThumbs=0`, `showMarkLabels=false`, `showMinMax=false`, `showValueBubble=false`, `size="medium"`, `step=DefaultStep`, `variant="filled"`, `tone="primary"`.

| Prop                    | Required | Type / choices                                         |
| ----------------------- | -------- | ------------------------------------------------------ |
| `children`              | No       | `React.ReactNode`                                      |
| `defaultValue`          | No       | `SliderValue \| undefined`                             |
| `disabled`              | No       | `boolean \| undefined`                                 |
| `formatValue`           | No       | `((value: number) => string) \| undefined`             |
| `marks`                 | No       | `readonly number[] \| undefined`                       |
| `max`                   | No       | `number \| undefined`                                  |
| `min`                   | No       | `number \| undefined`                                  |
| `minStepsBetweenThumbs` | No       | `number \| undefined`                                  |
| `onLayout`              | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onSlidingComplete`     | No       | `((value: SliderValue) => void) \| undefined`          |
| `onSlidingStart`        | No       | `((value: SliderValue) => void) \| undefined`          |
| `onValueChange`         | No       | `((value: SliderValue) => void) \| undefined`          |
| `showMarkLabels`        | No       | `boolean \| undefined`                                 |
| `showMinMax`            | No       | `boolean \| undefined`                                 |
| `showValueBubble`       | No       | `boolean \| undefined`                                 |
| `size`                  | No       | `large / medium / small`                               |
| `step`                  | No       | `number \| undefined`                                  |
| `style`                 | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                | No       | `string \| undefined`                                  |
| `tone`                  | No       | `neutral / primary / secondary`                        |
| `value`                 | No       | `SliderValue \| undefined`                             |
| `variant`               | No       | `filled / outlined / soft`                             |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Slider

Source: `packages/slider/src/components/slider.tsx:18`. Direct defaults: `defaultValue=DefaultValue`, `disabled=false`, `max=DefaultMax`, `min=DefaultMin`, `showMarkLabels=false`, `showMinMax=false`, `showValueBubble=false`, `size="medium"`, `step=DefaultStep`, `variant="filled"`, `tone="primary"`.

| Prop                   | Required | Type / choices                                         |
| ---------------------- | -------- | ------------------------------------------------------ |
| `children`             | No       | `React.ReactNode`                                      |
| `defaultValue`         | No       | `number \| undefined`                                  |
| `disabled`             | No       | `boolean \| undefined`                                 |
| `formatValue`          | No       | `((value: number) => string) \| undefined`             |
| `marks`                | No       | `readonly number[] \| undefined`                       |
| `max`                  | No       | `number \| undefined`                                  |
| `min`                  | No       | `number \| undefined`                                  |
| `onLayout`             | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onSlidingComplete`    | No       | `((value: number) => void) \| undefined`               |
| `onSlidingStart`       | No       | `((value: number) => void) \| undefined`               |
| `onValueChange`        | No       | `((value: number) => void) \| undefined`               |
| `onValueChangeWorklet` | No       | `((value: number) => void) \| undefined`               |
| `showMarkLabels`       | No       | `boolean \| undefined`                                 |
| `showMinMax`           | No       | `boolean \| undefined`                                 |
| `showValueBubble`      | No       | `boolean \| undefined`                                 |
| `size`                 | No       | `large / medium / small`                               |
| `step`                 | No       | `number \| undefined`                                  |
| `style`                | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`               | No       | `string \| undefined`                                  |
| `tone`                 | No       | `neutral / primary / secondary`                        |
| `trackContent`         | No       | `ReactNode`                                            |
| `value`                | No       | `number \| undefined`                                  |
| `variant`              | No       | `filled / outlined / soft`                             |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `RangeSlider` (value)
  - `(props: RangeSliderProps): import("react").ReactNode`
- `RangeSliderProps` (type)
- `Slider` (value)
  - `(props: SliderProps): import("react").ReactNode`
- `SliderProps` (type)
- `SliderThumb` (type)
- `SliderValue` (type)
