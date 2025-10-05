import { AppTheme, useTheme } from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { View } from "@impulse-ui-native/view";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

interface FlyoutTitleProps {
  title?: string;
  placement?: "top" | "bottom";
}

export const FlyoutTitle = memo(function FlyoutTitle(props: FlyoutTitleProps) {
  const theme = useTheme();

  const styles = useMemo(
    () => themedStyles(theme, props.placement),
    [theme, props.placement]
  );

  if (!props.title) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Typography.Title3>{props.title}</Typography.Title3>
    </View>
  );
});

const themedStyles = function (theme: AppTheme, placement?: "top" | "bottom") {
  return StyleSheet.create({
    container: {
      borderTopLeftRadius: placement === "bottom" ? theme.radii.xl : undefined,
      borderTopRightRadius: placement === "bottom" ? theme.radii.xl : undefined,
      backgroundColor: theme.colors.background.secondary,
      padding: theme.spacing.mxs,
      alignItems: "center",
    },
  });
};
