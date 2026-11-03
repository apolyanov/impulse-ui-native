import { useId } from "react";

import { memo, useIsOpen } from "@impulse-ui-native/core";
import { Control, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { MultiSelectTagVariants } from "../constants/multi-select.constants";
import { useMultiSelect } from "../hooks/use-multi-select.hook";
import { MultiSelectProps, PrimitiveValue } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";
import { SelectedTag } from "./selected-tag";

export const MultiSelect = memo(function MultiSelectComponent<
  Value extends PrimitiveValue,
>(props: MultiSelectProps<Value>) {
  const {
    options,
    value,
    defaultValue,
    onChange,
    placeholder,
    tone = "neutral",
    variant = "outlined",
    initialScrollToSelected,
    searchable = false,
    searchValue,
    onSearchChange,
    optionsLoading,
    ...rest
  } = props;

  const tokens = useComponentsTokens();

  const id = useId();

  const { isOpen, open, close } = useIsOpen();

  const { selected, hasSelected, select, isSelected, getLabel } =
    useMultiSelect({
      options,
      value,
      defaultValue,
      onChange,
    });

  const selectTokens = tokens.select;
  const tagVariant = props.disabled
    ? "outlined"
    : MultiSelectTagVariants[variant];

  return (
    <SelectControl
      {...rest}
      variant={variant}
      tone={tone}
      open={isOpen}
      onPress={open}
    >
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
                  tone={tone}
                  variant={tagVariant}
                  disabled={props.disabled}
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
        tone={tone}
        id={id}
        title="Options"
        open={isOpen}
        options={options}
        searchable={searchable}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        optionsLoading={optionsLoading}
        initialScrollToSelected={initialScrollToSelected}
        isSelected={isSelected}
        onCloseFinished={close}
        onSelect={select}
      />
    </SelectControl>
  );
});
