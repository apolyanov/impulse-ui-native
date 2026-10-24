import { memo } from "react";

import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { ControlLoaderProps } from "../../types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { Spinner } from "../atoms/spinner";

export const ControlLoader = memo(function ControlLoader(
  props: ControlLoaderProps,
) {
  const { variant, tone = "neutral", disabled, error } = useControlContext();
  const tokens = useComponentsTokens().controlAddon;
  const appearance = getFieldStateTokens(tokens.colors[tone][variant], {
    disabled,
    error: Boolean(error),
  });

  return <Spinner color={appearance.iconColor} {...props} />;
});
