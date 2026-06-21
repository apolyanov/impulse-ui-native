import { memo, useMemo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DatetimePickerFlyoutCommonProps, TimePickerValue } from "../../types";
import { Calendar } from "../common/calendar";
import { DatetimePickerFlyoutActions } from "../common/datetime-picker-flyout-actions";
import { QuickDateOptions } from "../common/quick-date-options";
import { VisibleDateSelect } from "../common/visible-date-select";
import { TimePicker } from "../time/time-picker";

export interface DatetimePickerFlyoutProps extends DatetimePickerFlyoutCommonProps {
  value: Date | null | undefined;
  onChangeTime?: (value: TimePickerValue | null) => void;
}

export const DatetimePickerFlyout = memo(function DateRangePickerFlyout(
  props: DatetimePickerFlyoutProps,
) {
  const {
    visible,
    value,
    clearable,
    quickDateOptions,
    onPressQuickDateOption,
    onChangeVisible,
    onPressCalendarDay,
    onChangeTime,
    onPressClear,
    onPressCancel,
    onPressApply,
    ...rest
  } = props;

  const tokens = useComponentsTokens();
  const datetimePickerTokens = tokens.datetimePicker.datetimePickerFlyout;

  const timeValue = useMemo<TimePickerValue | null>(() => {
    if (value) {
      return {
        hours: value.getHours(),
        minutes: value.getMinutes(),
        seconds: value.getSeconds(),
      };
    }

    return null;
  }, [value]);

  return (
    <Portal>
      <Flyout {...rest}>
        <View gap={datetimePickerTokens.gap}>
          <VisibleDateSelect value={visible} onChange={onChangeVisible} />
          <Calendar
            value={value}
            visible={visible}
            onPress={onPressCalendarDay}
          />
          <TimePicker
            value={timeValue}
            clearable={false}
            defaultValue={timeValue}
            onChange={onChangeTime}
            placeholder="00:00:00"
          />
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
});
