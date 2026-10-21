import { memo } from "react";

import { useStyleProps } from "@impulse-ui-native/theme";

import type { ControlFieldProps } from "../../types";
import { ControlAddon } from "./addon";
import { ControlError } from "./error";
import { ControlLabel } from "./label";
import { ControlProvider } from "./provider";
import { ControlRoot } from "./root";
import { ControlTrigger } from "./trigger";

export const ControlField = memo(function ControlField({
  children,
  disabled,
  error,
  label,
  onPress,
  onPressPrefix,
  onPressSuffix,
  prefix,
  size = "medium",
  suffix,
  variant = "outlined",
  ...props
}: ControlFieldProps) {
  const layoutStyle = useStyleProps(props);

  const hasPrefix = prefix !== null && prefix !== undefined;
  const hasSuffix = suffix !== null && suffix !== undefined;

  return (
    <ControlProvider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <ControlRoot style={layoutStyle}>
        <ControlLabel>{label}</ControlLabel>
        <ControlTrigger onPress={onPress}>
          {hasPrefix ? (
            <ControlAddon onPress={onPressPrefix}>{prefix}</ControlAddon>
          ) : null}
          {children}
          {hasSuffix ? (
            <ControlAddon onPress={onPressSuffix}>{suffix}</ControlAddon>
          ) : null}
        </ControlTrigger>
        {error ? <ControlError>{error}</ControlError> : null}
      </ControlRoot>
    </ControlProvider>
  );
});
