import { memo } from "react";

import { ClockIcon } from "@impulse-ui-native/icon/icons/clock";
import { Control } from "@impulse-ui-native/primitives";

import type { TimePickerProps, TimePickerValue } from "../../types";
import { usePickerDraft } from "../../hooks/use-picker-draft.hook";
import { formatTimepickerValue } from "../../utils";
import { DateControl } from "../common/date-control";
import { TimePickerFlyout } from "./time-picker.flyout";

export const TimePicker = memo(function TimePicker({
  value,
  defaultValue,
  placeholder,
  clearable = true,
  onChange,
  PrefixIcon = ClockIcon,
  ...props
}: TimePickerProps) {
  const {
    id,
    isOpen,
    draft,
    selected,
    setDraft,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressClear,
    syncState,
  } = usePickerDraft<TimePickerValue>({ value, defaultValue, onChange });
  const showPlaceholder = selected === null && placeholder;

  return (
    <DateControl {...props} PrefixIcon={PrefixIcon} onPress={onPressOpen}>
      {showPlaceholder ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {selected !== null ? (
        <Control.Value>{formatTimepickerValue(selected)}</Control.Value>
      ) : null}
      <TimePickerFlyout
        id={id}
        title="Time"
        open={isOpen}
        value={draft}
        clearable={clearable}
        onClose={close}
        onCloseFinished={syncState}
        onChange={setDraft}
        onPressApply={onPressApply}
        onPressClear={onPressClear}
        onPressCancel={onPressCancel}
      />
    </DateControl>
  );
});
