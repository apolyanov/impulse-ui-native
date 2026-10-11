import { memo, ReactElement, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { PrimitiveValue, SelectFlyoutProps } from "../types";
import { SelectOptions } from "./select-options";

const SelectFlyoutComponent = function SelectFlyoutContent<
  Value extends PrimitiveValue,
>(props: SelectFlyoutProps<Value>) {
  const {
    options,
    isSelected,
    onSelect,
    initialScrollToSelected = true,
    ...rest
  } = props;

  const [openingKey, setOpeningKey] = useState(0);

  const tokens = useComponentsTokens();

  const handleOpen = useEventCallback((id: string) => {
    setOpeningKey((key) => key + 1);
    rest.onOpen?.(id);
  });

  return (
    <Portal>
      <Flyout {...rest} onOpen={handleOpen}>
        <View height={tokens.select.flyoutHeight}>
          <SelectOptions
            key={openingKey}
            options={options}
            isSelected={isSelected}
            onSelect={onSelect}
            initialScrollToSelected={
              Boolean(rest.open) && initialScrollToSelected
            }
          />
        </View>
      </Flyout>
    </Portal>
  );
};

export const SelectFlyout = memo(SelectFlyoutComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectFlyoutProps<Value>,
) => ReactElement | null;
