import {
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

import type { UseAsyncControllableStateProps } from "../types/use-async-controllable-state.types";
import { useControllableState } from "./use-controllable-state.hook";

interface UseAsyncControllableStateValue<Value, State = Value> {
  state: State;
  setState: (nextValue: SetStateAction<Value>) => void;
  onInitialLoad: (value: Value) => void;
}

export function useAsyncControllableState<Value>(props: {
  prop: Value;
  defaultProp?: Value;
  initialProp?: Value;
  onChange?: (value: Value) => void;
}): UseAsyncControllableStateValue<Value>;

export function useAsyncControllableState<Value>(props: {
  prop?: Value;
  defaultProp: Value;
  initialProp?: Value;
  onChange?: (value: Value) => void;
}): UseAsyncControllableStateValue<Value>;

export function useAsyncControllableState<Value>(
  props: UseAsyncControllableStateProps<Value>,
): UseAsyncControllableStateValue<Value, Value | undefined>;

export function useAsyncControllableState<Value>({
  prop,
  defaultProp,
  initialProp,
  onChange,
}: UseAsyncControllableStateProps<Value>): UseAsyncControllableStateValue<
  Value,
  Value | undefined
> {
  const isInitializedRef = useRef<boolean>(defaultProp !== undefined);
  const isTouchedRef = useRef<boolean>(prop !== undefined);

  const [state, setInternalState] = useControllableState({
    prop,
    defaultProp,
    onChange,
  });

  const onInitialLoad = useCallback((value: Value) => {
    if (isInitializedRef.current || isTouchedRef.current) {
      return;
    }

    isInitializedRef.current = true;
    setInternalState(value);
  }, []);

  const setState = useCallback((nextValue: SetStateAction<Value>) => {
    isTouchedRef.current = true;
    setInternalState(nextValue);
  }, []);

  useEffect(() => {
    if (initialProp !== undefined) {
      onInitialLoad(initialProp);
    }
  }, [initialProp, onInitialLoad]);

  useLayoutEffect(() => {
    if (prop !== undefined) {
      isTouchedRef.current = true;
    }
  }, [prop]);

  return { state, setState, onInitialLoad };
}
