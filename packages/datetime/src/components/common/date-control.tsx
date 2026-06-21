import { memo, PropsWithChildren } from "react";
import { PressableProps } from "react-native";

import { CalendarDotsIcon } from "@impulse-ui-native/icon";
import { Control, Pressable } from "@impulse-ui-native/primitives";

import { DatetimePickerCommonProps } from "../../types";

interface DateControlProps extends DatetimePickerCommonProps {
  onPress: PressableProps["onPress"];
}

export const DateControl = memo(function DateControl(
  props: PropsWithChildren<DateControlProps>,
) {
  const {
    size = "medium",
    variant = "outlined",
    label,
    error,
    disabled,
    PrefixIcon = CalendarDotsIcon,
    Prefix,
    onPressPrefix: onPrefixPress,
    SuffixIcon,
    Suffix,
    onPressSuffix: onSuffixPress,
    onPress,
    children,
  } = props;

  return (
    <Control.Provider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <Control.Root>
        <Control.Label>{label}</Control.Label>
        <Pressable onPress={onPress}>
          <Control.Container>
            <Control.Addon
              icon={PrefixIcon}
              Content={Prefix}
              onPress={onPrefixPress}
            />
            {children}
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
