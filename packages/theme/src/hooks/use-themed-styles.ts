import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { AppTheme } from "../theme";
import { useTheme } from "./use-theme.hook";

interface StyledFunction<Props extends object = {}> {
  <T extends StyleSheet.NamedStyles<T>>(
    theme: AppTheme,
    props: Props
  ): StyleSheet.NamedStyles<T>;
}

export function useThemedStyles<Props extends object = {}>(
  styledFunction: StyledFunction<Props>,
  props: Props
) {
  const theme = useTheme();

  return useMemo(() => styledFunction(theme, props), [theme, props]);
}
