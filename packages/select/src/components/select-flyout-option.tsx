import { memo, useEventCallback } from "@impulse-ui-native/core";

import type { SelectFlyoutOptionProps } from "../types/select-options.types";
import { PrimitiveValue } from "../types";
import { Option } from "./option";

export const SelectFlyoutOption = memo(function SelectFlyoutOption<
  Value extends PrimitiveValue,
>(props: SelectFlyoutOptionProps<Value>) {
  const handlePress = useEventCallback(() =>
    props.onSelect(props.option.value),
  );

  return (
    <Option
      label={props.option.label}
      onPress={handlePress}
      disabled={props.option.disabled}
      selected={props.selected}
    />
  );
});
