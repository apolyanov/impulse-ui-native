# @impulse-ui-native/stepper

A controlled multi-step flow with context-based and imperative navigation.

## Installation

```sh
pnpm add @impulse-ui-native/stepper
```

## Main exports

- `Stepper` renders the active step from an `items` array.
- `StepperTabsNavigation` renders navigation for the same step model.
- `StepperProvider` and `useStepperContext` expose `current`, `next`, `previous`, and `goto` to nested step content.
- `StepperRef` exposes the same navigation methods through a React ref.
- `Step`, `StepperProps`, and related interfaces type step definitions and navigation.

## Usage

```tsx
import { Stepper, useStepperContext } from "@impulse-ui-native/stepper";

function DetailsStep() {
  const stepper = useStepperContext();
  return <Button onPress={stepper.next}>Continue</Button>;
}

const steps = [
  { title: "Details", Component: DetailsStep },
  { title: "Review", Component: ReviewStep },
];

<Stepper items={steps} current={current} onChange={setCurrent} />;
```

The current index is controlled by the caller. Navigation methods clamp the index to the available step range.
