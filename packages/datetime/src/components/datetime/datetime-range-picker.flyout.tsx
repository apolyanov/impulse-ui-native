import { memo, useMemo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import {
  DatetimePickerFlyoutCommonProps,
  TimePickerValue,
  TimeRange,
} from "../../types";
import { Calendar } from "../common/calendar";
import { DatetimePickerFlyoutActions } from "../common/datetime-picker-flyout-actions";
import { QuickDateOptions } from "../common/quick-date-options";
import { VisibleDateSelect } from "../common/visible-date-select";
import { TimePicker } from "../time/time-picker";

export interface DatetimeRangePickerFlyoutProps extends DatetimePickerFlyoutCommonProps {
  value: TimeRange | null | undefined;
  onChangeStartTime?: (value: TimePickerValue | null) => void;
  onChangeEndTime?: (value: TimePickerValue | null) => void;
}

export const DatetimeRangePickerFlyout = memo(
  function DatetimeRangePickerFlyout(props: DatetimeRangePickerFlyoutProps) {
    const {
      visible,
      value,
      clearable,
      quickDateOptions,
      onPressQuickDateOption,
      onChangeVisible,
      onPressCalendarDay,
      onChangeStartTime,
      onChangeEndTime,
      onPressClear,
      onPressCancel,
      onPressApply,
      ...rest
    } = props;

    const tokens = useComponentsTokens();
    const datetimeRangePickerTokens =
      tokens.datetimePicker.datetimeRangePickerFlyout;

    const timeStartValue = useMemo<TimePickerValue | null>(() => {
      if (value?.start) {
        return {
          hours: value.start.getHours(),
          minutes: value.start.getMinutes(),
          seconds: value.start.getSeconds(),
        };
      }

      return null;
    }, [value?.start]);

    const timeEndValue = useMemo<TimePickerValue | null>(() => {
      if (value?.end) {
        return {
          hours: value.end.getHours(),
          minutes: value.end.getMinutes(),
          seconds: value.end.getSeconds(),
        };
      }

      return null;
    }, [value?.end]);

    return (
      <Portal>
        <Flyout {...rest}>
          <View gap={datetimeRangePickerTokens.gap}>
            <VisibleDateSelect value={visible} onChange={onChangeVisible} />
            <Calendar
              value={value}
              visible={visible}
              onPress={onPressCalendarDay}
            />

            <View
              flexDirection="row"
              gap={datetimeRangePickerTokens.timeInputsGap}
            >
              <View flex={1}>
                <TimePicker
                  value={timeStartValue}
                  defaultValue={timeStartValue}
                  clearable={false}
                  onChange={onChangeStartTime}
                  label="Start time"
                  placeholder="00:00:00"
                />
              </View>
              <View flex={1}>
                <TimePicker
                  value={timeEndValue}
                  defaultValue={timeEndValue}
                  clearable={false}
                  onChange={onChangeEndTime}
                  label="End time"
                  placeholder="00:00:00"
                />
              </View>
            </View>

            {quickDateOptions && quickDateOptions.length > 0 ? (
              <QuickDateOptions
                options={quickDateOptions}
                onPress={onPressQuickDateOption}
              />
            ) : null}
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
  },
);
