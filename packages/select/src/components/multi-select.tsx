import { memo, ReactElement, useId } from "react";

import { useEventCallback, useIsOpen } from "@impulse-ui-native/core";
import { Control, Tag, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { useMultiSelect } from "../hooks/use-multi-select.hook";
import { MultiSelectProps, PrimitiveValue } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";

interface SelectedTagProps<Value extends PrimitiveValue> {
  value: Value;
  label: string;
  size: MultiSelectProps<Value>["size"];
  onSelect: (value: Value) => void;
}

function SelectedTagComponent<Value extends PrimitiveValue>(
  props: SelectedTagProps<Value>,
) {
  const handleClose = useEventCallback(() => props.onSelect(props.value));

  return (
    <Tag
      variant="filled"
      size={props.size}
      closable
      onClose={handleClose}
      label={props.label}
    />
  );
}

const SelectedTag = memo(SelectedTagComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectedTagProps<Value>,
) => ReactElement | null;

function MultiSelectComponent<Value extends PrimitiveValue>(
  props: MultiSelectProps<Value>,
) {
  const { options, value, defaultValue, onChange, placeholder, ...rest } =
    props;
  const tokens = useComponentsTokens();
  const selectTokens = tokens.select;
  const id = useId();
  const { isOpen, open, close } = useIsOpen();

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
          gap={selectTokens.multiValueGap}
          marginHorizontal={selectTokens.multiValueMarginHorizontal}
          overflow="hidden"
        >
          {selected
            ? selected.map((value) => (
                <SelectedTag
                  size={props.size}
                  key={value}
                  label={String(getLabel(value))}
                  value={value}
                  onSelect={select}
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
