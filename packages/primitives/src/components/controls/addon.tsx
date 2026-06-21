import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@impulse-ui-native/icon";
import {
  AppTheme,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlAddonProps } from "../../types";
import { Pressable, View } from "../atoms";
import { useControlContext } from "./provider";

export const ControlAddon = memo(function ControlAddon(
  props: ControlAddonProps,
) {
  const { icon: AddonIcon, onPress, Content, style, ...rest } = props;

  const { disabled, error } = useControlContext();

  const tokens = useComponentsTokens();

  const styles = useThemedStyles(
    themedStyles,
    {
      disabled,
      error,
    },
    [disabled, error],
  );

  const Container = useMemo(() => {
    if (onPress) {
      return Pressable;
    }

    return View;
  }, [onPress]);

  const children = useMemo(() => {
    if (Content) {
      return <Content />;
    }

    if (AddonIcon) {
      return <Icon color={styles.icon.color} icon={AddonIcon} />;
    }

    return null;
  }, [AddonIcon, Content, styles.icon.color]);

  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );

  if (!children) {
    return null;
  }

  return (
    <Container
      {...rest}
      style={containerStyle}
      hitSlop={tokens.controlAddon.hitSlop}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Container>
  );
});

function themedStyles(
  theme: AppTheme,
  props: {
    disabled?: boolean;
    error?: string;
  },
) {
  const { disabled, error } = props;

  const controlAddonTokens = theme.components.controlAddon;

  return StyleSheet.create({
    container: {
      marginHorizontal: controlAddonTokens.marginHorizontal,
    },

    icon: {
      color: disabled
        ? controlAddonTokens.disabledIconColor
        : error
          ? controlAddonTokens.errorIconColor
          : controlAddonTokens.iconColor,
    },
  });
}
