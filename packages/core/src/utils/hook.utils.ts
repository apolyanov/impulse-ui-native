import { SetStateAction } from "react";

export function resolverStateSetter<Value>(nextValue: SetStateAction<Value>) {
  if (typeof nextValue === "function") {
    return nextValue as (value: Value) => Value;
  }

  return () => nextValue;
}
