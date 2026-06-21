import { useCallback, useMemo } from "react";

import { useControllableState } from "@impulse-ui-native/core";

import { PrimitiveValue, UseSelectProps } from "../types";
import { buildLabelMap } from "../utils/option.utils";

export function useSelect<Value extends PrimitiveValue>(
  props: UseSelectProps<Value>,
) {
  const { value, defaultValue, onChange } = props;

  const [selected, setSelected] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange,
  });

  const labelsMap = useMemo(
    () => buildLabelMap(props.options),
    [props.options],
  );

  const getLabel = useCallback(
    (value: Value) => labelsMap[String(value)],
    [labelsMap],
  );

  const select = useCallback(
    (value: Value) => {
      setSelected((prev) => {
        if (prev === value) {
          return null as Value;
        }

        return value;
      });
    },
    [setSelected],
  );

  const isSelected = useCallback(
    (value: Value) => value === selected,
    [selected],
  );

  return {
    selected,
    hasSelected: selected !== null && selected !== undefined,
    select,
    getLabel,
    isSelected,
  };
}
