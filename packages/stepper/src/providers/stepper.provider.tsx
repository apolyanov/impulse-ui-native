import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import { StepperProviderData } from "../types";

const StepperContext = createContext<StepperProviderData | undefined>(
  undefined,
);

export const StepperProvider = memo(function StepperProvider(
  props: PropsWithChildren<StepperProviderData>,
) {
  const value = useMemo<StepperProviderData>(
    () => ({
      current: props.current,
      goto: props.goto,
      next: props.next,
      previous: props.previous,
    }),
    [props.previous, props.goto, props.next, props.current],
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
