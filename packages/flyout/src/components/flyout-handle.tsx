import { AppTheme, useTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/view";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export const FlyoutHandle = memo(function FlyoutHandle() {
  const theme = useTheme();

  const styles = useMemo(() => themedStyles(theme), [theme]);

  return (
    <Animated.View style={styles.flyoutHandleContainer}>
      <View style={styles.flyoutHandle} />
    </Animated.View>
  );
});

const themedStyles = function (theme: AppTheme) {
  return StyleSheet.create({
    flyoutHandle: {
      alignSelf: "center",
      backgroundColor: theme.colors.background.primary,
      width: "25%",
      height: 6,
      borderRadius: theme.radii.round,
    },
    flyoutHandleContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: 32,
    },
  });
};
