import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimePicker } from "../../hooks";
import { DatetimePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatetimePickerFlyout } from "./datetime-picker.flyout";

export const DatetimePicker = memo(function DatetimePicker(
  props: DatetimePickerProps,
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
    tempDate,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onChangeTime,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>{selected.toLocaleString()}</Control.Value>
      ) : null}

      <DatetimePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempDate}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onChangeTime={onChangeTime}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
