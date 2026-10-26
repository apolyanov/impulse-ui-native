import { memo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme, ComponentTone } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { QuickDateOption, TimeRange } from "../../types";
import { getQuickOptionKey } from "../../utils";
import { QuickDateOptionTag } from "./quick-date-option-tag";

interface QuickDateOptionsProps {
  tone?: ComponentTone;
  value?: Date | TimeRange | null;
  options: QuickDateOption<Date | TimeRange>[];
  onPress?: (date: QuickDateOption<Date | TimeRange>["value"]) => void;
}

export const QuickDateOptions = memo(function QuickDateOptions(
  props: QuickDateOptionsProps,
) {
  const styles = useThemedStyles(themedStyles);
  const selectedKey = props.value ? getQuickOptionKey(props.value) : undefined;

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    >
      {props.options.map((option, index) => {
        const optionKey = getQuickOptionKey(option.value) ?? index;
        const selected =
          selectedKey !== undefined &&
          selectedKey === getQuickOptionKey(option.value);

        return (
          <QuickDateOptionTag
            tone={props.tone}
            selected={selected}
            key={optionKey}
            option={option}
            onPress={props.onPress}
          />
        );
      })}
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
