import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { EyeIcon } from "@impulse-ui-native/icon/icons/eye";
import { EyeSlashIcon } from "@impulse-ui-native/icon/icons/eye-slash";
import { Control } from "@impulse-ui-native/primitives";

import { InputProps } from "../types";

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
          <Control.Addon
            icon={PrefixIcon}
            Content={Prefix}
            onPress={onPressPrefix}
          />
          <Control.Input
            secureTextEntry={props.secureTextEntry && !showPassword}
            style={style}
            {...rest}
          />
          <Control.Addon
            icon={SuffixInternalIcon}
            Content={Suffix}
            onPress={internalOnSuffixPress}
          />
        </Control.Container>
        <Control.Error />
      </Control.Root>
    </Control.Provider>
  );
});
