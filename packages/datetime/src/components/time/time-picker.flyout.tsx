import { memo, useCallback, useMemo } from "react";

import { Flyout, FlyoutProps } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useTheme } from "@impulse-ui-native/theme";

import { PickerFlyoutActions, TimePickerValue } from "../../types";
import { createInfiniteRange, getInfiniteRangeInitialIndex } from "../../utils";
import { DatetimePickerFlyoutActions } from "../common/datetime-picker-flyout-actions";
import { PickerColumn } from "./picker-column";

interface TimePickerFlyoutProps extends FlyoutProps, PickerFlyoutActions {
  value: Partial<TimePickerValue> | null | undefined;
  onChange: (value: TimePickerValue | null) => void;
}

const DefaultTimePickerValue: TimePickerValue = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const TimePickerFlyout = memo(function TimePickerFlyout(
  props: TimePickerFlyoutProps,
) {
  const {
    value,
    onChange,
    onPressApply,
    onPressCancel,
    onPressClear,
    clearable,
    ...rest
  } = props;

  const tokens = useComponentsTokens();
  const timePickerTokens = tokens.timePicker;

  const selectedHours = value?.hours ?? DefaultTimePickerValue.hours;
  const selectedMinutes = value?.minutes ?? DefaultTimePickerValue.minutes;
  const selectedSeconds = value?.seconds ?? DefaultTimePickerValue.seconds;

  const hours = useMemo(() => {
    return createInfiniteRange(24, 4);
  }, []);

  const minutes = useMemo(() => {
    return createInfiniteRange(60, 4);
  }, []);

  const seconds = useMemo(() => {
    return createInfiniteRange(60, 4);
  }, []);

  const hoursInitialIndex = useMemo(() => {
    return getInfiniteRangeInitialIndex(24, selectedHours, 4);
  }, [selectedHours]);

  const minutesInitialIndex = useMemo(() => {
    return getInfiniteRangeInitialIndex(60, selectedMinutes, 4);
  }, [selectedMinutes]);

  const secondsInitialIndex = useMemo(() => {
    return getInfiniteRangeInitialIndex(60, selectedSeconds, 4);
  }, [selectedSeconds]);

  const handleHoursChange = useCallback(
    (hours: number) => {
      onChange({
        hours,
        minutes: selectedMinutes,
        seconds: selectedSeconds,
      });
    },
    [onChange, selectedMinutes, selectedSeconds],
  );

  const handleMinutesChange = useCallback(
    (minutes: number) => {
      onChange({
        hours: selectedHours,
        minutes,
        seconds: selectedSeconds,
      });
    },
    [onChange, selectedHours, selectedSeconds],
  );

  const handleSecondsChange = useCallback(
    (seconds: number) => {
      onChange({
        hours: selectedHours,
        minutes: selectedMinutes,
        seconds,
      });
    },
    [onChange, selectedHours, selectedMinutes],
  );

  return (
    <Portal>
      <Flyout {...rest}>
        <View gap={timePickerTokens.flyout.gap}>
          <View
            height={timePickerTokens.columns.height}
            gap={timePickerTokens.columns.gap}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <View
              pointerEvents="none"
              position="absolute"
              height={timePickerTokens.columns.indicatorHeight}
              width={timePickerTokens.columns.indicatorWidth}
              borderRadius={timePickerTokens.columns.indicatorBorderRadius}
              backgroundColor={
                timePickerTokens.columns.indicatorBackgroundColor
              }
              top={timePickerTokens.columns.indicatorTop}
            />

            <PickerColumn
              data={hours}
              label="h"
              format="24h"
              type="hour"
              value={selectedHours}
              initialScrollIndex={hoursInitialIndex}
              onChange={handleHoursChange}
            />

            <PickerColumn
              data={minutes}
              label="m"
              format="24h"
              type="minute"
              value={selectedMinutes}
              initialScrollIndex={minutesInitialIndex}
              onChange={handleMinutesChange}
            />

            <PickerColumn
              data={seconds}
              label="s"
              format="24h"
              type="second"
              value={selectedSeconds}
              initialScrollIndex={secondsInitialIndex}
              onChange={handleSecondsChange}
            />
          </View>

          <DatetimePickerFlyoutActions
            canClear={Boolean(value && clearable)}
            onPressApply={onPressApply}
            onPressCancel={onPressCancel}
            onPressClear={onPressClear}
          />
        </View>
      </Flyout>
    </Portal>
  );
});
