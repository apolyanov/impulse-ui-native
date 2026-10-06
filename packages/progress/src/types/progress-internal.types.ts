import type { ColorValue, ViewProps } from "react-native";

export interface LinearProgressProps extends ViewProps {
  animationDuration: number;
  borderRadius: number;
  fraction: number;
  indicatorColor: ColorValue;
  indeterminate: boolean;
  indeterminateWidth: number;
  trackColor: ColorValue;
  trackHeight: number;
}

export interface LinearIndeterminateIndicatorProps {
  animationDuration: number;
  borderRadius: number;
  color: ColorValue;
  ratio: number;
  trackHeight: number;
  trackWidth: number;
}

export interface CircularProgressProps extends ViewProps {
  animationDuration: number;
  fraction: number;
  indicatorColor: ColorValue;
  indeterminate: boolean;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}

export interface ProgressCircleProps {
  color: ColorValue;
  fraction: number;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}

export interface CircularIndeterminateIndicatorProps {
  animationDuration: number;
  color: ColorValue;
  strokeWidth: number;
  trackColor: ColorValue;
  width: number;
}
