import { memo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
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

  return (
    <Portal>
      <Flyout {...rest}>
        <View gap={datePickerTokens.gap}>
          <VisibleDateSelect value={visible} onChange={onChangeVisible} />

          <Calendar
            value={value}
            visible={visible}
            onPress={onPressCalendarDay}
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
