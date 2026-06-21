import { memo, useMemo } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useTheme } from "@impulse-ui-native/theme";

import { TimeRange } from "../../types";
import {
  getCalendarDayState,
  getDateKey,
  getDayNames,
  getMonthCalendarMatrix,
} from "../../utils";
import { CalendarDay } from "./calendar-day";

interface CalendarProps {
  value: Date | TimeRange | null | undefined;
  visible: Date;
  onPress: (date: Date) => void;
}

export const Calendar = memo(function Calendar(props: CalendarProps) {
  const { visible, value, onPress } = props;

  const tokens = useComponentsTokens();
  const calendarTokens = tokens.datetimePicker.calendar;

  const visibleMonth = visible.getMonth();
  const visibleYear = visible.getFullYear();

  const days = useMemo(() => {
    return getDayNames();
  }, []);

  const calendar = useMemo(() => {
    return getMonthCalendarMatrix(visibleYear, visibleMonth);
  }, [visibleYear, visibleMonth]);

  return (
    <View>
      <View
        flexDirection="row"
        marginBottom={calendarTokens.dayNamesMarginBottom}
      >
        {days.map((day) => (
          <Typography.Body flex={1} textAlign="center" key={day}>
            {day[0]}
          </Typography.Body>
        ))}
      </View>

      <View gap={calendarTokens.weeksGap}>
        {calendar.map((dates, index) => (
          <View flexDirection="row" justifyContent="space-around" key={index}>
            {dates.map((date) => {
              const state = getCalendarDayState({
                date,
                visible,
                value,
              });

              return (
                <CalendarDay
                  key={getDateKey(date)}
                  date={date}
                  isSelected={state.isSelected}
                  isInRange={state.isInRange}
                  isRangeStart={state.isRangeStart}
                  isRangeEnd={state.isRangeEnd}
                  isCurrentMonth={state.isCurrentMonth}
                  onPress={onPress}
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
});
