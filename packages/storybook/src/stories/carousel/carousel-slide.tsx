import { memo, useMemo } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

export const CarouselSlide = memo(function CarouselSlide({
  title,
  uri,
}: {
  title: string;
  uri: string;
}) {
  const styles = useThemedStyles(themedStyles);
  const source = useMemo(() => ({ uri }), [uri]);
  return (
    <ImageBackground source={source} resizeMode="cover" style={styles.image}>
      <View style={styles.caption}>
        <Typography.Title4 style={styles.title}>{title}</Typography.Title4>
      </View>
    </ImageBackground>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: theme.colors.surface.primary.value,
    },
    caption: { padding: theme.space.sm, backgroundColor: theme.colors.overlay },
    title: { color: theme.colors.white },
  });
}
