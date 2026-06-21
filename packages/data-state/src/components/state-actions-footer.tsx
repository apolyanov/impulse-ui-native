import { memo } from "react";

import { Button, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { StateActionsFooterProps } from "../types";

export const StateActionsFooter = memo(function StateActionsFooter(
  props: StateActionsFooterProps,
) {
  const tokens = useComponentsTokens().dataState.actionsFooter;
  const {
    onPressPrimaryAction,
    onPressSecondaryAction,
    primaryActionLabel,
    secondaryActionLabel,
    ...rest
  } = props;

  return (
    <View
      flexDirection="row"
      gap={tokens.gap}
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      <Button onPress={props.onPressPrimaryAction}>
        {props.primaryActionLabel}
      </Button>
      {props.onPressSecondaryAction ? (
        <Button variant="outlined" onPress={props.onPressSecondaryAction}>
          {props.secondaryActionLabel}
        </Button>
      ) : null}
    </View>
  );
});
