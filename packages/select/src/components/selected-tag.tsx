import type { ComponentTone, DisplayVariant } from "@impulse-ui-native/theme";
import { memo, useEventCallback } from "@impulse-ui-native/core";
import { Tag } from "@impulse-ui-native/primitives";

import type { MultiSelectProps, PrimitiveValue } from "../types";

interface SelectedTagProps<Value extends PrimitiveValue> {
  tone: ComponentTone;
  variant: DisplayVariant;
  disabled?: boolean;
  value: Value;
  label: string;
  size: MultiSelectProps<Value>["size"];
  onSelect: (value: Value) => void;
}

export const SelectedTag = memo(function SelectedTagComponent<
  Value extends PrimitiveValue,
>(props: SelectedTagProps<Value>) {
  const handleClose = useEventCallback(() => props.onSelect(props.value));

  return (
    <Tag
      tone={props.tone}
      disabled={props.disabled}
      variant={props.variant}
      size={props.size}
      closable
      onClose={handleClose}
      label={props.label}
    />
  );
});
