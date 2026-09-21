import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SkeletonTagProps } from "../types";
import { Bone } from "./bone";

export const Tag = memo(function Tag(props: SkeletonTagProps) {
  const { size, ...rest } = props;
  const styles = useThemedStyles(themedStyles, { size }, [size]);

  return <Bone style={styles.tag} {...rest} />;
});

function themedStyles(theme: AppTheme, props: Pick<SkeletonTagProps, "size">) {
  const tagTokens = theme.components.tag;
  const sizeTokens = tagTokens.sizes[props.size];

  return StyleSheet.create({
    tag: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      minWidth: sizeTokens.minWidth,
      borderRadius: tagTokens.borderRadius,
      borderWidth: tagTokens.borderWidth,
    },
  });
}
