import { memo } from "react";

import { CloudXIcon } from "@impulse-ui-native/icon";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { StateViewProps } from "../types";
import { StateActionsFooter } from "./state-actions-footer";

export const ErrorDetails = memo(function ErrorDetails(props: StateViewProps) {
  const tokens = useComponentsTokens().dataState.details;

  return (
    <View alignItems="center" justifyContent="center" gap={tokens.gap}>
      <CloudXIcon
        width={tokens.iconSize}
        height={tokens.iconSize}
        variant={props.variant}
        color={tokens.iconColor}
      />
      <Typography.Body>{props.text}</Typography.Body>
      <StateActionsFooter
        onPressPrimaryAction={props.onPressPrimaryAction}
        primaryActionLabel={props.primaryActionLabel}
        onPressSecondaryAction={props.onPressSecondaryAction}
        secondaryActionLabel={props.secondaryActionLabel}
      />
    </View>
  );
});
