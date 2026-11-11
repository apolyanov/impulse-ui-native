import { memo } from "@impulse-ui-native/core";
import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";

import { PrimitiveValue, SelectFlyoutProps } from "../types";
import { SelectOptions } from "./select-options";

export const SelectFlyout = memo(function SelectFlyoutContent<
  Value extends PrimitiveValue,
>(props: SelectFlyoutProps<Value>) {
  const {
    options,
    tone = "neutral",
    isSelected,
    onSelect,
    initialScrollToSelected = true,
    searchable = false,
    searchValue,
    onSearchChange,
    optionsLoading,
    ...rest
  } = props;

  const shouldScrollToSelected = Boolean(rest.open) && initialScrollToSelected;

  return (
    <Portal>
      <Flyout {...rest}>
        <SelectOptions
          searchable={searchable}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          optionsLoading={optionsLoading}
          tone={tone}
          options={options}
          isSelected={isSelected}
          onSelect={onSelect}
          initialScrollToSelected={shouldScrollToSelected}
        />
      </Flyout>
    </Portal>
  );
});
