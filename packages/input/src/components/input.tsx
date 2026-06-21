import { memo, useMemo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { EyeIcon, EyeSlashIcon } from "@impulse-ui-native/icon";
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

  const SuffixInternalIcon = useMemo(() => {
    if (props.secureTextEntry) {
      return showPassword ? EyeIcon : EyeSlashIcon;
    }

    return SuffixIcon;
  }, [props.secureTextEntry, SuffixIcon, showPassword]);

  const internalOnSuffixPress = useMemo(() => {
    if (props.secureTextEntry) {
      return togglePasswordVisibility;
    }

    return onPressSuffix;
  }, [props.secureTextEntry, onPressSuffix]);

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
