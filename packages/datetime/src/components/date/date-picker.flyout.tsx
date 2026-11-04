import { memo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DatetimePickerFlyoutCommonProps, TimeRange } from "../../types";
import { Calendar } from "../common/calendar";
import { DatetimePickerFlyoutActions } from "../common/datetime-picker-flyout-actions";
import { QuickDateOptions } from "../common/quick-date-options";
import { VisibleDateSelect } from "../common/visible-date-select";

interface DatePickerFlyoutProps extends DatetimePickerFlyoutCommonProps {
  value: Date | TimeRange | null | undefined;
}

export const DatePickerFlyout = memo(function DatePickerFlyout(
  props: DatePickerFlyoutProps,
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
    onPressClear,
    onPressCancel,
    onPressApply,
    ...rest
  } = props;

  const tokens = useComponentsTokens();

  const datePickerTokens = tokens.datetimePicker.datePickerFlyout;

  const hasQuickDateOptions = quickDateOptions && quickDateOptions.length > 0;

  return (
    <Portal>
      <Flyout {...rest}>
        <Flyout.Content gap={datePickerTokens.gap}>
          <VisibleDateSelect value={visible} onChange={onChangeVisible} />

          <Calendar
            tone={tone}
            value={value}
            visible={visible}
            onPress={onPressCalendarDay}
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
