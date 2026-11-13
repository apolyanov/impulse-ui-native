# @impulse-ui-native/stepper: capability guide

Coordinate an application-owned multi-step flow.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Controlled current step with next/previous/goto context and imperative ref.
- Separate tabs-style step navigation; tone propagates to steps/navigation.

## Boundaries and composition

- Not a form validator or uncontrolled wizard.
- Items supply Component functions; the application owns current and onChange.

Exact contracts: [API reference](../api/stepper.md). Machine facts: [package JSON](stepper.json) or [full catalog](../capabilities.json).

## Recipes

- [onboarding](../recipes.md#onboarding)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Stepper

Source: `packages/stepper/src/components/stepper.tsx:7`. Direct defaults: `tone="primary"`.

| Prop       | Required | Type / choices                  |
| ---------- | -------- | ------------------------------- |
| `current`  | Yes      | `number`                        |
| `items`    | Yes      | `Step[]`                        |
| `onChange` | Yes      | `(value: number) => void`       |
| `ref`      | No       | `Ref<StepperRef> \| undefined`  |
| `tone`     | No       | `neutral / primary / secondary` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### StepperProvider

Source: `packages/stepper/src/providers/stepper.provider.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                  |
| ---------- | -------- | ------------------------------- |
| `children` | No       | `ReactNode`                     |
| `current`  | Yes      | `number`                        |
| `goto`     | Yes      | `(value: number) => void`       |
| `next`     | Yes      | `() => void`                    |
| `previous` | Yes      | `() => void`                    |
| `tone`     | No       | `neutral / primary / secondary` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### StepperTabsNavigation

Source: `packages/stepper/src/components/stepper-tabs-navigation.tsx:11`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop      | Required | Type / choices                  |
| --------- | -------- | ------------------------------- |
| `current` | Yes      | `number`                        |
| `items`   | Yes      | `Step[]`                        |
| `ref`     | No       | `Ref<StepperRef> \| undefined`  |
| `tone`    | No       | `neutral / primary / secondary` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `Step` (type)
- `StepComponentProps` (type)
- `Stepper` (value)
  - `(props: StepperProps): import("react").ReactNode`
- `StepperNavigationProps` (type)
- `StepperProps` (type)
- `StepperProvider` (value)
  - `(props: Omit<StepperProviderData, "tone"> & { tone?: import("@impulse-ui-native/theme").ComponentTone; } & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `StepperProviderData` (type)
- `StepperProviderProps` (type)
- `StepperRef` (type)
- `StepperTabsNavigation` (value)
  - `(props: StepperNavigationProps): import("react").ReactNode`
- `useStepperContext` (hook)
  - `(): StepperProviderData`
