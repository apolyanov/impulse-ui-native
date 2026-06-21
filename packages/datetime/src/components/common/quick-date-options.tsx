import { memo, useMemo } from "react";
import { ScrollView, ViewStyle } from "react-native";

import { Tag } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { QuickDateOption, TimeRange } from "../../types";
import { getQuickOptionKey } from "../../utils";

interface QuickDateOptionsProps {
  options: QuickDateOption<Date | TimeRange>[];
  onPress?: (date: QuickDateOption<Date | TimeRange>["value"]) => void;
}

export const QuickDateOptions = memo(function QuickDateOptions(
  props: QuickDateOptionsProps,
) {
  const tokens = useComponentsTokens();

  const style = useMemo<ViewStyle>(
    () => ({ gap: tokens.datetimePicker.quickDateOptions.gap }),
    [tokens.datetimePicker.quickDateOptions],
  );

  return (
    <ScrollView
      horizontal
      contentContainerStyle={style}
      showsHorizontalScrollIndicator={false}
    >
      {props.options.map((option, index) => (
        <Tag
          key={getQuickOptionKey(option.value) ?? index}
          label={option.label}
          onPress={() => props.onPress?.(option.value)}
        />
      ))}
    </ScrollView>
  );
});
