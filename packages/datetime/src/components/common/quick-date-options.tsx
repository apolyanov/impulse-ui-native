import { memo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Tag } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { QuickDateOption, TimeRange } from "../../types";
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
  const styles = useThemedStyles(themedStyles);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.content}
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

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    content: {
      gap: theme.components.datetimePicker.quickDateOptions.gap,
    },
  });
}
