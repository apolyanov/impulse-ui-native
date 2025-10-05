import { AppTheme, useTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/view";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const FlyoutHandleHeight = 32;

interface FlyoutHandleProps {
  placement: "top" | "bottom";
}

export const FlyoutHandle = memo(function FlyoutHandle(
  props: FlyoutHandleProps
) {
  const theme = useTheme();

  const styles = useMemo(
    () => themedStyles(theme, props.placement),
    [theme, props.placement]
  );

  return (
    <Animated.View style={styles.flyoutHandleContainer}>
      <View style={styles.flyoutHandle} />
    </Animated.View>
  );
});

const themedStyles = function (theme: AppTheme, placement: "top" | "bottom") {
  return StyleSheet.create({
    flyoutHandle: {
      alignSelf: "center",
      backgroundColor: theme.colors.background.primary,
      width: "25%",
      height: 6,
      borderRadius: theme.radii.round,
    },
    flyoutHandleContainer: {
      position: "absolute",
      top: placement === "bottom" ? -FlyoutHandleHeight : undefined,
      bottom: placement === "top" ? -FlyoutHandleHeight : undefined,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: FlyoutHandleHeight,
    },
  });
};
