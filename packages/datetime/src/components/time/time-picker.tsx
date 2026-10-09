import { memo, useCallback, useEffect, useId, useState } from "react";

import { useControllableState, useIsOpen } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
import { ClockIcon } from "@impulse-ui-native/icon/icons/clock";
import { Control, Pressable } from "@impulse-ui-native/primitives";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { TimePickerProps, TimePickerValue } from "../../types";
import { formatTimepickerValue } from "../../utils";
import { TimePickerFlyout } from "./time-picker.flyout";

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

  const addonTokens = useComponentsTokens().controlAddon;
  const addonColor = getFieldStateTokens(addonTokens.variants[variant], {
    disabled,
    error: Boolean(error),
  }).iconColor;

  const id = useId();

  const [selected, setSelected] = useControllableState<TimePickerValue | null>({
    prop: value,
    defaultProp: defaultValue ?? null,
    onChange,
  });

  const [tempTime, setTempTime] = useState<TimePickerValue | null>(selected);

  const { isOpen, isClosed, finishClose, open, close } = useIsOpen();

  const onPressOpen = useCallback(() => {
    setTempTime(selected);
    open();
  }, [open, selected]);

  const onPressApply = useCallback(() => {
    setSelected(tempTime);
    close();
  }, [tempTime, close, setSelected]);

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
            <Control.Addon onPress={onPrefixPress}>
              {Prefix ? <Prefix /> : null}
              {!Prefix ? <Icon color={addonColor} icon={PrefixIcon} /> : null}
            </Control.Addon>

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

            {Suffix || SuffixIcon ? (
              <Control.Addon onPress={onSuffixPress}>
                {Suffix ? <Suffix /> : null}
                {!Suffix && SuffixIcon ? (
                  <Icon color={addonColor} icon={SuffixIcon} />
                ) : null}
              </Control.Addon>
            ) : null}
          </Control.Container>
        </Pressable>
        {error ? <Control.Error>{error}</Control.Error> : null}
      </Control.Root>
    </Control.Provider>
  );
});
