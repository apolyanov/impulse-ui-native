import { memo } from "react";

import type { ComponentTone, FieldVariant } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Tag } from "@impulse-ui-native/primitives";

import type { QuickDateOption, TimeRange } from "../../types";

interface QuickDateOptionTagProps {
  tone?: ComponentTone;
  variant?: FieldVariant;
  option: QuickDateOption<Date | TimeRange>;
  onPress?: (value: QuickDateOption<Date | TimeRange>["value"]) => void;
}

export const QuickDateOptionTag = memo(function QuickDateOptionTag(
  props: QuickDateOptionTagProps,
) {
  const handlePress = useEventCallback(() =>
    props.onPress?.(props.option.value),
  );

  return (
    <Tag
      tone={props.tone}
      variant={props.variant}
      label={props.option.label}
      onPress={handlePress}
    />
  );
});
