import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { AppTheme } from "../types";
import { useTheme } from "./use-theme.hook";

type ThemedStyles<T extends StyleSheet.NamedStyles<T>> = T;

type StyledFunction<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>
> = (theme: AppTheme, props: Props) => ThemedStyles<T>;

export const useThemedStyles = <
  Props extends object,
  T extends StyleSheet.NamedStyles<T>
>(
  styledFunction: StyledFunction<Props, T>,
  props: Props
): ThemedStyles<T> => {
  const theme = useTheme();

  return useMemo(() => styledFunction(theme, props), [theme, props]);
};
