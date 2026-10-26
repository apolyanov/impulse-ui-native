import { memo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type {
  AppTheme,
  ComponentTone,
  FieldVariant,
} from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { QuickDateOption, TimeRange } from "../../types";
import { getQuickOptionKey } from "../../utils";
import { QuickDateOptionTag } from "./quick-date-option-tag";

interface QuickDateOptionsProps {
  tone?: ComponentTone;
  variant?: FieldVariant;
  options: QuickDateOption<Date | TimeRange>[];
  onPress?: (date: QuickDateOption<Date | TimeRange>["value"]) => void;
}

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
      {props.options.map((option, index) => {
        const optionKey = getQuickOptionKey(option.value) ?? index;

        return (
          <QuickDateOptionTag
            tone={props.tone}
            variant={props.variant}
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
