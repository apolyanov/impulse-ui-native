import type { RgbaColor } from "../types/color.types";

export const HueStops: readonly string[] = [
  "#FF0000",
  "#FFFF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#FF00FF",
  "#FF0000",
];
export const OpaqueWhite = "#FFFFFF";
export const OpaqueBlack = "#000000";

export const FallbackColor: RgbaColor = { r: 0, g: 0, b: 0, a: 1 };

/** Limit React color updates to roughly 60 Hz; gestures still render every frame. */
export const SpectrumUpdateInterval = 16;
