import { memo, ReactNode, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Typography, View } from "@impulse-ui-native/primitives";
import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

interface FlyoutTitleProps {
  title?: ReactNode | string;
}

export const FlyoutTitle = memo(function FlyoutTitle(props: FlyoutTitleProps) {
  const styles = useThemedStyles(themedStyles);

  const title = useMemo(() => {
    if (typeof props.title === "string") {
      return <Typography.Title3>{props.title}</Typography.Title3>;
    }

    return props.title;
  }, [props.title]);

  if (!props.title) {
    return null;
  }

  return <View style={styles.container}>{title}</View>;
});

function themedStyles(theme: AppTheme) {
  const titleTokens = theme.components.flyout.title;

  return StyleSheet.create({
    container: {
      paddingVertical: titleTokens.paddingVertical,
      paddingHorizontal: titleTokens.paddingHorizontal,
      alignItems: "center",
    },
  });
}
