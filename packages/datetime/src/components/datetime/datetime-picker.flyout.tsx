import { memo, useMemo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
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
    tone = "neutral",
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

  const hasQuickDateOptions = quickDateOptions && quickDateOptions.length > 0;

  return (
    <Portal>
      <Flyout {...rest}>
        <Flyout.Content gap={datetimePickerTokens.gap}>
          <VisibleDateSelect value={visible} onChange={onChangeVisible} />
          <Calendar
            tone={tone}
            value={value}
            visible={visible}
            onPress={onPressCalendarDay}
          />
          <TimePicker
            variant="outlined"
            tone="neutral"
            pickerTone={tone}
            value={timeValue}
            clearable={false}
            defaultValue={timeValue}
            onChange={onChangeTime}
            placeholder="00:00:00"
          />
          {hasQuickDateOptions ? (
            <QuickDateOptions
              value={value}
              tone={tone}
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
        </Flyout.Content>
      </Flyout>
    </Portal>
  );
});
