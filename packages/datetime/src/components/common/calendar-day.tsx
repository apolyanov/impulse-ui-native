import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import { Pressable, Typography } from "@impulse-ui-native/primitives";
import {
  AppTheme,
  getDatetimePickerDayStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

interface CalendarDayProps {
  date: Date;
  isSelected?: boolean;
  isRangeStart?: boolean;
  isInRange?: boolean;
  isRangeEnd?: boolean;
  isCurrentMonth?: boolean;
  onPress?: (date: Date) => void;
}

export const CalendarDay = memo(function CalendarDay(props: CalendarDayProps) {
  const styles = useThemedStyles(themedStyles, props, [
    props.isSelected,
    props.isRangeStart,
    props.isInRange,
    props.isRangeEnd,
    props.isCurrentMonth,
  ]);

  const handleOnPress = useCallback(
    () => props.onPress?.(props.date),
    [props.date, props.onPress],
  );

  return (
    <Pressable style={styles.pressableStyles} onPress={handleOnPress}>
      <Typography.Body style={styles.text} numeric>
        {props.date.getDate()}
      </Typography.Body>
    </Pressable>
  );
});

function themedStyles(
  theme: AppTheme,
  props: {
    isSelected?: boolean;
    isRangeStart?: boolean;
    isInRange?: boolean;
    isRangeEnd?: boolean;
    isCurrentMonth?: boolean;
  },
) {
  const dayTokens = theme.components.datetimePicker.day;
  const appearanceTokens = getDatetimePickerDayStateTokens(dayTokens.states, {
    currentMonth: props.isCurrentMonth,
    inRange: props.isInRange,
    selected: props.isSelected || props.isRangeStart || props.isRangeEnd,
  });

  return StyleSheet.create({
    pressableStyles: {
      borderRadius: dayTokens.borderRadius,
      overflow: "hidden",
      width: dayTokens.size,
      height: dayTokens.size,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: appearanceTokens.backgroundColor,
    },

    text: {
      color: appearanceTokens.color,
    },
  });
}
