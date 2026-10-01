import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ListContentProps } from "../../types";
import { View } from "../atoms/view";

export const ListContent = memo(function ListContent({
  style,
  ...props
}: ListContentProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const composedStyle = useMemo(
    () => [styles.part, extractedStyleProps, style],
    [styles.part, extractedStyleProps, style],
  );
  return <View {...props} style={composedStyle} />;
});
function themedStyles(theme: AppTheme) {
  const tokens = theme.components.list;
  return StyleSheet.create({
    part: { flex: 1, minWidth: 0, gap: tokens.content.gap },
  });
}
