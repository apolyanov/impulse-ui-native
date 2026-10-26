import { memo } from "react";

import type { ComponentTone } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Tag } from "@impulse-ui-native/primitives";

import type { QuickDateOption, TimeRange } from "../../types";

interface QuickDateOptionTagProps {
  tone?: ComponentTone;
  selected?: boolean;
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
      tone={props.selected ? props.tone : "neutral"}
      variant={props.selected ? "soft" : "outlined"}
      label={props.option.label}
      onPress={handlePress}
    />
  );
});
