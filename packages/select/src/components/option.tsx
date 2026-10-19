import type { PressableStateCallbackType } from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { Pressable, Typography } from "@impulse-ui-native/primitives";
import {
  getSelectionItemStateTokens,
  useComponentsTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { OptionProps } from "../types";

export const Option = memo(function Option(props: OptionProps) {
  const { label, selected, style, ...rest } = props;

  const tokens = useComponentsTokens();
  const styles = useThemedStyles(themedStyles);
  const extractedStyleProps = useStyleProps(rest);

  const optionTokens = tokens.select.option;
  const appearanceTokens = getSelectionItemStateTokens(optionTokens.states, {
    selected,
  });

  const optionStyle = useCallback(
    (state: PressableStateCallbackType) => [
      styles.option,
      extractedStyleProps,
      typeof style === "function" ? style(state) : style,
    ],
    [extractedStyleProps, style, styles.option],
  );

  return (
    <Pressable {...rest} style={optionStyle}>
      <Typography.Body flex={1} numberOfLines={1} ellipsizeMode="tail">
        {label}
      </Typography.Body>

      <Icon
        icon={CheckIcon}
        color={appearanceTokens.iconColor}
        opacity={appearanceTokens.iconOpacity}
      />
    </Pressable>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.select.option;

  return StyleSheet.create({
    option: {
      height: tokens.height,
      padding: tokens.padding,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
}
