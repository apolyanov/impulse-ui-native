import { forwardRef, memo, useImperativeHandle, useMemo } from "react";

import { StepperProvider } from "../providers";
import { StepperProps, StepperProviderData, StepperRef } from "../types";

export const Stepper = memo(
  forwardRef<StepperRef, StepperProps>(function Stepper(props, ref) {
    const lastStepIndex = props.items.length - 1;

    const context = useMemo<StepperProviderData>(
      () => ({
        current: props.current,
        goto(value) {
          props.onChange(Math.min(Math.max(value, 0), lastStepIndex));
        },
        next() {
          props.onChange(Math.min(props.current + 1, lastStepIndex));
        },
        previous() {
          props.onChange(Math.max(props.current - 1, 0));
        },
      }),
      [],
    );

    useImperativeHandle(ref, () => context);

    const Step = useMemo(
      () => props.items[props.current]?.Component ?? null,
      [props.items, props.current],
    );

    if (!Step) {
      return null;
    }

    return (
      <StepperProvider {...context}>
        <Step />
      </StepperProvider>
    );
  }),
);
