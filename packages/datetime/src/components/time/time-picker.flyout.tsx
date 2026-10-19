import { memo, useCallback } from "react";

import { Flyout, FlyoutProps } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { PickerFlyoutActions, TimePickerValue } from "../../types";
import { getInfiniteRangeInitialIndex } from "../../utils";
import {
  DefaultTimePickerValue,
  HourValues,
  MinuteSecondValues,
  TimePickerRangeRepeats,
} from "../../constants/time-picker.constants";
import { DatetimePickerFlyoutActions } from "../common/datetime-picker-flyout-actions";
import { PickerColumn } from "./picker-column";

interface TimePickerFlyoutProps extends FlyoutProps, PickerFlyoutActions {
  value: Partial<TimePickerValue> | null | undefined;
  onChange: (value: TimePickerValue | null) => void;
}

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

  const hoursInitialIndex = getInfiniteRangeInitialIndex(
    24,
    selectedHours,
    TimePickerRangeRepeats,
  );

  const minutesInitialIndex = getInfiniteRangeInitialIndex(
    60,
    selectedMinutes,
    TimePickerRangeRepeats,
  );

  const secondsInitialIndex = getInfiniteRangeInitialIndex(
    60,
    selectedSeconds,
    TimePickerRangeRepeats,
  );

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
              data={HourValues}
              label="h"
              value={selectedHours}
              initialScrollIndex={hoursInitialIndex}
              onChange={handleHoursChange}
            />

            <PickerColumn
              data={MinuteSecondValues}
              label="m"
              value={selectedMinutes}
              initialScrollIndex={minutesInitialIndex}
              onChange={handleMinutesChange}
            />

            <PickerColumn
              data={MinuteSecondValues}
              label="s"
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
