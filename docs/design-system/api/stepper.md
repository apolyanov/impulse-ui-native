# @impulse-ui-native/stepper

Local package version: 17.2.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

## Repository palette consistency

Stepper and standalone StepperTabsNavigation accept a shared tone (default
primary). Steps receive tone as an optional prop and useStepperContext exposes it.
Navigation inherits a surrounding Stepper tone unless explicitly overridden;
standalone navigation accepts its own tone. Current/completed indicators use the
shared accent and upcoming indicators use a neutral border color. Colors live in
stepper.navigation.colors[tone].

## Agent and design reference

Start with the [capability guide](../capabilities/stepper.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/stepper/src/components/index.ts

```tsx
export { Stepper } from "./stepper";
export { StepperTabsNavigation } from "./stepper-tabs-navigation";
```

### packages/stepper/src/components/stepper-tabs-navigation.tsx

```tsx
import { forwardRef, memo, useContext } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { StepperContext } from "../contexts/stepper.context";
import { StepperNavigationProps, StepperRef } from "../types";

export const StepperTabsNavigation = memo(
  forwardRef<StepperRef, StepperNavigationProps>(
    function StepperTabsNavigation(props, _ref) {
      const context = useContext(StepperContext);
      const tokens = useComponentsTokens();

      const tone = props.tone ?? context?.tone ?? "primary";
      const navigationTokens = tokens.stepper.navigation;

      return (
        <View flexDirection="row" width="100%">
          {props.items.map((item, index) => {
            const completedOrCurrent = index <= props.current;
            const backgroundColor = completedOrCurrent
              ? navigationTokens.colors[tone].itemBackgroundColor
              : navigationTokens.inactiveItemBackgroundColor;

            return (
              <View
                key={`${item.title ?? "step"}-${index}`}
                height={navigationTokens.itemHeight}
                flex={1}
                backgroundColor={backgroundColor}
              />
            );
          })}
        </View>
      );
    },
  ),
);
```

### packages/stepper/src/components/stepper.tsx

```tsx
import { forwardRef, memo, useImperativeHandle, useMemo } from "react";

import { StepperProvider } from "../providers";
import { StepperProps, StepperProviderData, StepperRef } from "../types";

export const Stepper = memo(
  forwardRef<StepperRef, StepperProps>(function Stepper(props, ref) {
    const { current, items, onChange, tone = "primary" } = props;
    const lastStepIndex = items.length - 1;

    const context = useMemo<StepperProviderData>(
      () => ({
        current,
        tone,
        goto(value) {
          onChange(Math.min(Math.max(value, 0), lastStepIndex));
        },
        next() {
          onChange(Math.min(current + 1, lastStepIndex));
        },
        previous() {
          onChange(Math.max(current - 1, 0));
        },
      }),
      [current, lastStepIndex, onChange, tone],
    );

    const Step = items[current]?.Component ?? null;

    useImperativeHandle(ref, () => context, [context]);

    if (!Step) {
      return null;
    }

    return (
      <StepperProvider {...context}>
        <Step tone={tone} />
      </StepperProvider>
    );
  }),
);
```

### packages/stepper/src/index.ts

```tsx
export * from "./components";
export * from "./types";
export * from "./providers";
```

### packages/stepper/src/providers/index.ts

```tsx
export * from "./stepper.provider";
```

### packages/stepper/src/providers/stepper.provider.tsx

```tsx
import { memo, PropsWithChildren, useContext, useMemo } from "react";

import { StepperContext } from "../contexts/stepper.context";
import { StepperProviderData, StepperProviderProps } from "../types";

export const StepperProvider = memo(function StepperProvider(
  props: PropsWithChildren<StepperProviderProps>,
) {
  const value = useMemo<StepperProviderData>(
    () => ({
      current: props.current,
      tone: props.tone ?? "primary",
      goto: props.goto,
      next: props.next,
      previous: props.previous,
    }),
    [props.previous, props.goto, props.next, props.current, props.tone],
  );

  return (
    <StepperContext.Provider value={value}>
      {props.children}
    </StepperContext.Provider>
  );
});

export function useStepperContext() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("useStepperContext must be used inside a StepperProvider");
  }

  return context;
}
```

### packages/stepper/src/types/index.ts

```tsx
export * from "./stepper.types";
```

### packages/stepper/src/types/stepper.types.ts

```tsx
import { ComponentType, Ref } from "react";

import type { ComponentTone } from "@impulse-ui-native/theme";

export interface StepComponentProps {
  tone?: ComponentTone;
  title?: string;
}

export interface StepperRef {
  next: () => void;
  previous: () => void;
  goto: (value: number) => void;
}

export interface Step extends StepComponentProps {
  Component: ComponentType<StepComponentProps>;
}

export interface StepperProps {
  tone?: ComponentTone;
  items: Step[];
  current: number;
  onChange: (value: number) => void;
}

export interface StepperNavigationProps {
  tone?: ComponentTone;
  current: number;
  items: Step[];
}

export interface StepperProviderData extends StepperRef {
  current: number;
  tone: ComponentTone;
}

export type StepperProviderProps = Omit<StepperProviderData, "tone"> & {
  tone?: ComponentTone;
};
```
