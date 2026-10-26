# @impulse-ui-native/progress: capability guide

Show determinate progress or ongoing activity.

## Setup

- ThemeProvider; SVG, Reanimated and Worklets configured.

## Capabilities

- Linear/circular shapes, determinate values and indeterminate animations.
- Shared sizes and primary/secondary/neutral/inverse tones.

## Boundaries and composition

- variant means linear/circular geometry, not filled/outlined/soft.
- No children/label slot is implied; add labels outside.

Exact contracts: [API reference](../api/progress.md). Machine facts: [package JSON](progress.json) or [full catalog](../capabilities.json).

## Recipes

- [metrics](../recipes.md#metrics)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                      | Range      | Optional |
| ------------------------- | ---------- | -------- |
| `react`                   | `>=18`     | No       |
| `react-native`            | `>=0.73`   | No       |
| `react-native-svg`        | `>=13.9.0` | No       |
| `react-native-reanimated` | `>=4.0.0`  | No       |
| `react-native-worklets`   | `>=0.5`    | No       |

### Progress

Source: `packages/progress/src/components/progress.tsx:10`. Direct defaults: `max=100`, `min=0`, `size="medium"`, `tone="primary"`, `variant="linear"`.

- **semantics**: variant controls shape (linear/circular); tone controls indicator palette.

| Prop         | Required | Type / choices                                         |
| ------------ | -------- | ------------------------------------------------------ |
| `max`        | No       | `number \| undefined`                                  |
| `min`        | No       | `number \| undefined`                                  |
| `onLayout`   | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `size`       | No       | `large / medium / small`                               |
| `style`      | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`     | No       | `string \| undefined`                                  |
| `tone`       | No       | `inverse / neutral / primary / secondary`              |
| `trackColor` | No       | `____ColorValue_Internal \| undefined`                 |
| `value`      | No       | `number \| undefined`                                  |
| `variant`    | No       | `circular / linear`                                    |

Style props: `color`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `Progress` (value)
  - `(props: ProgressProps): import("react").ReactNode`
- `ProgressProps` (type)
