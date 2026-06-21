import { useMemo } from "react";
import { StyleSheet } from "react-native";

import { AppTheme } from "../types";
import { useTheme } from "./use-theme.hook";

type ThemedStyles<T extends StyleSheet.NamedStyles<T>> = T;

type StyledFunctionNoProps<T extends StyleSheet.NamedStyles<T>> = (
  theme: AppTheme,
) => ThemedStyles<T>;

type StyledFunctionWithProps<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
> = (theme: AppTheme, props: Props) => ThemedStyles<T>;

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  styledFunction: StyledFunctionNoProps<T>,
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionWithProps<Props, T>,
  props: Props,
  dependencies: readonly unknown[],
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionWithProps<Props, T>,
  props: Props,
  dependencies: readonly unknown[],
): ThemedStyles<T>;

export function useThemedStyles<
  Props extends object,
  T extends StyleSheet.NamedStyles<T>,
>(
  styledFunction: StyledFunctionNoProps<T> | StyledFunctionWithProps<Props, T>,
  props?: Props,
  dependencies?: readonly unknown[],
): ThemedStyles<T> {
  const theme = useTheme();

  const memoDependencies = dependencies ?? (props === undefined ? [] : [props]);

  return useMemo(() => {
    if (props === undefined) {
      return (styledFunction as StyledFunctionNoProps<T>)(theme);
    }

    return (styledFunction as StyledFunctionWithProps<Props, T>)(theme, props);
  }, [theme, styledFunction, ...memoDependencies]);
}
