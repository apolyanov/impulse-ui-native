import type { PropsWithChildren } from "react";
import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { CalendarDotsIcon } from "@impulse-ui-native/icon/icons/calendar-dots";
import { Control, Pressable } from "@impulse-ui-native/primitives";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { DateControlProps } from "../../types/date-control.types";

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

  const addonTokens = useComponentsTokens().controlAddon;
  const addonColor = getFieldStateTokens(addonTokens.variants[variant], {
    disabled,
    error: Boolean(error),
  }).iconColor;

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
            <Control.Addon onPress={onPrefixPress}>
              {Prefix ? <Prefix /> : null}
              {!Prefix ? <Icon color={addonColor} icon={PrefixIcon} /> : null}
            </Control.Addon>
            {children}
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
