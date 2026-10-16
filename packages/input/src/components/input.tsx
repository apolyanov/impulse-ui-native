import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
import { EyeIcon } from "@impulse-ui-native/icon/icons/eye";
import { EyeSlashIcon } from "@impulse-ui-native/icon/icons/eye-slash";
import { Control } from "@impulse-ui-native/primitives";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { InputProps } from "../types";

export const Input = memo(function Input(props: InputProps) {
  const {
    size = "medium",
    variant = "outlined",
    label,
    error,
    disabled,
    style,
    containerStyle,
    PrefixIcon,
    Prefix,
    SuffixIcon,
    Suffix,
    onPressPrefix,
    onPressSuffix,
    ...rest
  } = props;

  const addonTokens = useComponentsTokens().controlAddon;
  const addonColor = getFieldStateTokens(addonTokens.variants[variant], {
    disabled,
    error: Boolean(error),
  }).iconColor;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = useEventCallback(() => {
    setShowPassword((prevState) => !prevState);
  });

  const SuffixInternalIcon = props.secureTextEntry
    ? showPassword
      ? EyeIcon
      : EyeSlashIcon
    : SuffixIcon;

  const internalOnSuffixPress = props.secureTextEntry
    ? togglePasswordVisibility
    : onPressSuffix;

  const hasPrefix = Prefix || PrefixIcon;
  const showPrefixIcon = !Prefix && PrefixIcon;
  const secureTextEntry = props.secureTextEntry && !showPassword;
  const hasSuffix = Suffix || SuffixInternalIcon;
  const showSuffixIcon = !Suffix && SuffixInternalIcon;

  return (
    <Control.Provider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <Control.Root>
        <Control.Label>{label}</Control.Label>
        <Control.Container style={containerStyle}>
          {hasPrefix ? (
            <Control.Addon onPress={onPressPrefix}>
              {Prefix ? <Prefix /> : null}
              {showPrefixIcon ? (
                <Icon color={addonColor} icon={PrefixIcon} />
              ) : null}
            </Control.Addon>
          ) : null}
          <Control.Input
            secureTextEntry={secureTextEntry}
            style={style}
            {...rest}
          />
          {hasSuffix ? (
            <Control.Addon onPress={internalOnSuffixPress}>
              {Suffix ? <Suffix /> : null}
              {showSuffixIcon ? (
                <Icon color={addonColor} icon={SuffixInternalIcon} />
              ) : null}
            </Control.Addon>
          ) : null}
        </Control.Container>
        {error ? <Control.Error>{error}</Control.Error> : null}
      </Control.Root>
    </Control.Provider>
  );
});
