import { memo, ReactElement, useCallback, useId } from "react";

import { useIsOpen } from "@impulse-ui-native/core";
import { Control } from "@impulse-ui-native/primitives";

import { useSelect } from "../hooks/use-select.hook";
import { PrimitiveValue, SelectProps } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";

function SelectComponent<Value extends PrimitiveValue>(
  props: SelectProps<Value>,
) {
  const { options, value, defaultValue, onChange, placeholder, ...rest } =
    props;
  const { isOpen, open, close } = useIsOpen();

  const id = useId();

  const { selected, hasSelected, select, isSelected, getLabel } = useSelect({
    options,
    value,
    defaultValue,
    onChange,
  });

  const handleOnSelect = useCallback(
    (value: Value) => {
      select(value);
      close();
    },
    [select, close],
  );

  return (
    <SelectControl {...rest} onPress={open}>
      {!hasSelected ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {selected !== null && selected !== undefined ? (
        <Control.Value>{getLabel(selected)}</Control.Value>
      ) : null}
      <SelectFlyout
        id={id}
        title="Options"
        open={isOpen}
        options={options}
        isSelected={isSelected}
        onCloseFinished={close}
        onSelect={handleOnSelect}
      />
    </SelectControl>
  );
}

export const Select = memo(SelectComponent) as <Value extends PrimitiveValue>(
  props: SelectProps<Value>,
) => ReactElement | null;
