import { memo, useMemo } from "react";
import { ScrollView, ViewStyle } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";
import { Tag } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { QuickDateOption, TimeRange } from "../../types";
import { getQuickOptionKey } from "../../utils";

interface QuickDateOptionsProps {
  options: QuickDateOption<Date | TimeRange>[];
  onPress?: (date: QuickDateOption<Date | TimeRange>["value"]) => void;
}

interface QuickDateOptionTagProps {
  option: QuickDateOption<Date | TimeRange>;
  onPress?: QuickDateOptionsProps["onPress"];
}

const QuickDateOptionTag = memo(function QuickDateOptionTag(
  props: QuickDateOptionTagProps,
) {
  const handlePress = useEventCallback(() =>
    props.onPress?.(props.option.value),
  );

  return <Tag label={props.option.label} onPress={handlePress} />;
});

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
        <QuickDateOptionTag
          key={getQuickOptionKey(option.value) ?? index}
          option={option}
          onPress={props.onPress}
        />
      ))}
    </ScrollView>
  );
});
