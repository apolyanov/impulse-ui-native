import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimeRangePicker } from "../../hooks";
import { DatetimeRangePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatePickerFlyout } from "./date-picker.flyout";

export const DateRangePicker = memo(function DateRangePicker(
  props: DatetimeRangePickerProps,
) {
  const {
    value,
    defaultValue,
    onChange,
    placeholder,
    quickDateOptions,
    ...rest
  } = props;

  const {
    id,
    isOpen,
    visible,
    tempRange,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimeRangePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>
          {selected.start?.toDateString()} - {selected.end?.toDateString()}
        </Control.Value>
      ) : null}

      <DatePickerFlyout
        id={id}
        title="Datetime"
        open={isOpen}
        visible={visible}
        value={tempRange}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
