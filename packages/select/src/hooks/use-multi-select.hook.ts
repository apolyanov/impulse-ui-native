import { useCallback, useMemo } from "react";

import { useControllableState } from "@impulse-ui-native/core";

import { PrimitiveValue, UseSelectProps } from "../types";
import { buildLabelMap } from "../utils/option.utils";

export function useMultiSelect<Value extends PrimitiveValue>(
  props: UseSelectProps<Value[]>,
) {
  const { value, defaultValue, onChange } = props;

  const [selected, setSelected] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange,
  });

  const selectedValuesSet = useMemo(() => new Set(selected), [selected]);

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
        if (!prev) {
          return [value];
        }

        const exists = prev.includes(value);

        if (exists) {
          return prev.filter((prevValue) => prevValue !== value);
        }

        return [...prev, value];
      });
    },
    [setSelected],
  );

  const isSelected = useCallback(
    (value: Value) => selectedValuesSet.has(value),
    [selectedValuesSet],
  );

  return {
    selected,
    hasSelected: selected && selected.length > 0,
    select,
    isSelected,
    getLabel,
  };
}
