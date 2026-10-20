import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { useMemo } from "react";

import { AppTheme } from "../types";
import { useTheme } from "./use-theme.hook";

type NamedStyles<T> = { [Key in keyof T]: ViewStyle | TextStyle | ImageStyle };

type ThemedStyles<T extends NamedStyles<T>> = T;

type StyledFunctionNoProps<T extends NamedStyles<T>> = (
  theme: AppTheme,
) => ThemedStyles<T>;

type StyledFunctionWithProps<Props extends object, T extends NamedStyles<T>> = (
  theme: AppTheme,
  props: Props,
) => ThemedStyles<T>;

export function useThemedStyles<T extends NamedStyles<T>>(
  styledFunction: StyledFunctionNoProps<T>,
): ThemedStyles<T>;

export function useThemedStyles<Props extends object, T extends NamedStyles<T>>(
  styledFunction: StyledFunctionWithProps<Props, T>,
  props: Props,
  dependencies: readonly unknown[],
): ThemedStyles<T>;

export function useThemedStyles<Props extends object, T extends NamedStyles<T>>(
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
