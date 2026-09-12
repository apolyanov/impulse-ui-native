import { forwardRef, memo, useImperativeHandle, useMemo } from "react";

import { StepperProvider } from "../providers";
import { StepperProps, StepperProviderData, StepperRef } from "../types";

export const Stepper = memo(
  forwardRef<StepperRef, StepperProps>(function Stepper(props, ref) {
    const { current, items, onChange } = props;
    const lastStepIndex = items.length - 1;

    const context = useMemo<StepperProviderData>(
      () => ({
        current,
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
      [current, lastStepIndex, onChange],
    );

    const Step = useMemo(
      () => items[current]?.Component ?? null,
      [current, items],
    );

    useImperativeHandle(ref, () => context, [context]);

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
