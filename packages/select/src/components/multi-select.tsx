import { memo, ReactElement, useId } from "react";

import { useIsOpen } from "@impulse-ui-native/core";
import { Control, Tag, View } from "@impulse-ui-native/primitives";

import { useMultiSelect } from "../hooks/use-multi-select.hook";
import { MultiSelectProps, PrimitiveValue } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";

function MultiSelectComponent<Value extends PrimitiveValue>(
  props: MultiSelectProps<Value>,
) {
  const { options, value, defaultValue, onChange, placeholder, ...rest } =
    props;
  const { isOpen, open, close } = useIsOpen();

  const id = useId();

  const { selected, hasSelected, select, isSelected, getLabel } =
    useMultiSelect({
      options,
      value,
      defaultValue,
      onChange,
    });

  return (
    <SelectControl {...rest} onPress={open}>
      {!hasSelected ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {hasSelected ? (
        <View
          flex={1}
          flexDirection="row"
          gap={4}
          marginHorizontal={4}
          overflow="hidden"
        >
          {selected
            ? selected.map((value) => (
                <Tag
                  variant="filled"
                  size={props.size}
                  key={value}
                  closable
                  onClose={() => select(value)}
                  label={String(getLabel(value))}
                />
              ))
            : null}
        </View>
      ) : null}
      <SelectFlyout
        id={id}
        title="Options"
        open={isOpen}
        options={options}
        isSelected={isSelected}
        onCloseFinished={close}
        onSelect={select}
      />
    </SelectControl>
  );
}

export const MultiSelect = memo(MultiSelectComponent) as <
  Value extends PrimitiveValue,
>(
  props: MultiSelectProps<Value>,
) => ReactElement | null;
