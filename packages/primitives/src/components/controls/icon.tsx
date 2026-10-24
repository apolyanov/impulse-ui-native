import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { ControlIconProps } from "../../types";
import { useControlContext } from "../../hooks/use-control-context.hook";

export const ControlIcon = memo(function ControlIcon({
  color,
  ...props
}: ControlIconProps) {
  const { variant, tone = "neutral", disabled, error } = useControlContext();
  const tokens = useComponentsTokens().controlAddon;
  const appearance = getFieldStateTokens(tokens.colors[tone][variant], {
    disabled,
    error: Boolean(error),
  });

  return <Icon {...props} color={color ?? appearance.iconColor} />;
});
