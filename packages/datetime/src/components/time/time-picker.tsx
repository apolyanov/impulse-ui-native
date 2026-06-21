import { memo, useCallback, useEffect, useId, useState } from "react";

import { useControllableState, useIsOpen } from "@impulse-ui-native/core";
import { ClockIcon } from "@impulse-ui-native/icon";
import { Control, Pressable } from "@impulse-ui-native/primitives";

import { DatetimePickerCommonProps, TimePickerValue } from "../../types";
import { formatTimepickerValue } from "../../utils";
import { TimePickerFlyout } from "./time-picker.flyout";

interface TimePickerProps extends DatetimePickerCommonProps {
  value?: TimePickerValue | null;
  defaultValue?: TimePickerValue | null;
  onChange?: (value: TimePickerValue | null) => void;
}

export const TimePicker = memo(function TimePicker(props: TimePickerProps) {
  const {
    value,
    defaultValue,
    placeholder,
    clearable = true,
    size = "medium",
    onChange,
    variant = "outlined",
    label,
    error,
    disabled,
    PrefixIcon = ClockIcon,
    Prefix,
    onPressPrefix: onPrefixPress,
    SuffixIcon,
    Suffix,
    onPressSuffix: onSuffixPress,
  } = props;

  const id = useId();
  const { isOpen, isClosed, finishClose, open, close } = useIsOpen();

  const [selected, setSelected] = useControllableState<TimePickerValue | null>({
    prop: value,
    defaultProp: defaultValue ?? null,
    onChange,
  });

  const [tempTime, setTempTime] = useState<TimePickerValue | null>(selected);

  const onPressOpen = useCallback(() => {
    setTempTime(selected);
    open();
  }, [open, selected]);

  const onPressApply = useCallback(() => {
    setSelected(tempTime);
    close();
  }, [tempTime, close]);

  const onPressClear = useCallback(() => {
    setTempTime(null);
  }, []);

  const syncState = useCallback(() => {
    setTempTime(selected);
  }, [selected]);

  const onCloseFinished = useCallback(() => {
    syncState();
    finishClose();
  }, [syncState, finishClose]);

  useEffect(() => {
    if (!isOpen && isClosed) {
      setTempTime(selected);
    }
  }, [isOpen, selected, isClosed]);

  return (
    <Control.Provider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <Control.Root>
        <Control.Label>{label}</Control.Label>
        <Pressable onPress={onPressOpen}>
          <Control.Container>
            <Control.Addon
              icon={PrefixIcon}
              Content={Prefix}
              onPress={onPrefixPress}
            />

            {selected === null && placeholder ? (
              <Control.Placeholder>{placeholder}</Control.Placeholder>
            ) : null}

            {selected !== null ? (
              <Control.Value>{formatTimepickerValue(selected)}</Control.Value>
            ) : null}

            <TimePickerFlyout
              id={id}
              title="Time"
              open={isOpen}
              value={tempTime}
              clearable={clearable}
              onClose={close}
              onCloseFinished={onCloseFinished}
              onChange={setTempTime}
              onPressApply={onPressApply}
              onPressClear={onPressClear}
              onPressCancel={close}
            />

            <Control.Addon
              icon={SuffixIcon}
              Content={Suffix}
              onPress={onSuffixPress}
            />
          </Control.Container>
        </Pressable>
        <Control.Error />
      </Control.Root>
    </Control.Provider>
  );
});
