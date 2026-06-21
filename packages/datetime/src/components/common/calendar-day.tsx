import { memo, useCallback } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

interface CalendarDayProps {
  date: Date;
  selected?: boolean;
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
      <View style={styles.container}>
        <Typography.Body style={styles.text} numeric>
          {props.date.getDate()}
        </Typography.Body>
      </View>
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

  let color: TextStyle["color"] = dayTokens.color;
  let backgroundColor: ViewStyle["backgroundColor"] = "transparent";

  if (!props.isCurrentMonth) {
    color = dayTokens.outsideMonthColor;
  }

  if (props.isInRange) {
    backgroundColor = dayTokens.rangeBackgroundColor;
    color = dayTokens.rangeColor;
  }

  if (props.isSelected || props.isRangeStart || props.isRangeEnd) {
    backgroundColor = dayTokens.selectedBackgroundColor;
    color = dayTokens.selectedColor;
  }

  return StyleSheet.create({
    pressableStyles: {
      justifyContent: "center",
      alignItems: "center",
    },

    container: {
      borderRadius: dayTokens.borderRadius,
      width: dayTokens.size,
      height: dayTokens.size,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor,
    },

    text: {
      color,
    },
  });
}
