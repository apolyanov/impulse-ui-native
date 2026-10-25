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
