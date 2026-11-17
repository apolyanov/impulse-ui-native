import type { UseControllableStateProps } from "../hooks/use-controllable-state.hook";

export interface UseAsyncControllableStateProps<
  Value,
> extends UseControllableStateProps<Value> {
  initialProp?: Value;
}
