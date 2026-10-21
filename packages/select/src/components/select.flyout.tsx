import { useState } from "react";

import { memo, useEventCallback } from "@impulse-ui-native/core";
import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { PrimitiveValue, SelectFlyoutProps } from "../types";
import { SelectOptions } from "./select-options";

export const SelectFlyout = memo(function SelectFlyoutContent<
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

  const shouldScrollToSelected = Boolean(rest.open) && initialScrollToSelected;

  return (
    <Portal>
      <Flyout {...rest} onOpen={handleOpen}>
        <View height={tokens.select.flyoutHeight}>
          <SelectOptions
            key={openingKey}
            options={options}
            isSelected={isSelected}
            onSelect={onSelect}
            initialScrollToSelected={shouldScrollToSelected}
          />
        </View>
      </Flyout>
    </Portal>
  );
});
