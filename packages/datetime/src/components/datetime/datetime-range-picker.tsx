import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimeRangePicker } from "../../hooks";
import { DatetimeRangePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatetimeRangePickerFlyout } from "./datetime-range-picker.flyout";

export const DatetimeRangePicker = memo(function DatetimeRangePicker(
  props: DatetimeRangePickerProps,
) {
  const {
    value,
    defaultValue,
    clearable = true,
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
    onChangeStartTime,
    onChangeEndTime,
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
          {selected.start?.toLocaleString()} - {selected.end?.toLocaleString()}
        </Control.Value>
      ) : null}

      <DatetimeRangePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempRange}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onChangeStartTime={onChangeStartTime}
        onChangeEndTime={onChangeEndTime}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
