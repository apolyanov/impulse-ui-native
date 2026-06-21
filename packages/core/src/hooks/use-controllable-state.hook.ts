import { SetStateAction, useCallback, useRef, useState } from "react";

import { resolverStateSetter } from "../utils";

interface UseControllableStateProps<Value> {
  prop?: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}

export function useControllableState<Value>(props: {
  prop: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}): [Value, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>(props: {
  prop?: Value;
  defaultProp: Value;
  onChange?: (value: Value) => void;
}): [Value, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>(props: {
  prop?: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}): [Value | undefined, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateProps<Value>): [
  Value | undefined,
  (nextValue: SetStateAction<Value>) => void,
] {
  const [uncontrolledProp, setUncontrolledProp] = useState<Value | undefined>(
    defaultProp,
  );

  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const valueRef = useRef<Value | undefined>(value);
  const isControlledRef = useRef(isControlled);
  const onChangeRef = useRef(onChange);

  valueRef.current = value;
  isControlledRef.current = isControlled;
  onChangeRef.current = onChange;

  const setValue = useCallback((nextValue: SetStateAction<Value>) => {
    const setter = resolverStateSetter(nextValue);
    const computedValue = setter(valueRef.current as Value);

    if (computedValue !== valueRef.current) {
      if (!isControlledRef.current) {
        setUncontrolledProp(computedValue);
      }

      onChangeRef.current?.(computedValue);
    }
  }, []);

  return [value, setValue];
}
