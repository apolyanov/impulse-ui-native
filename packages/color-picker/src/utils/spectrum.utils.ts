import type { SpectrumPosition } from "../types/spectrum.types";
import { clampColorValue } from "./color.utils";

export function getSpectrumPosition(
  x: number,
  y: number,
  width: number,
  height: number,
): SpectrumPosition {
  "worklet";

  return {
    saturation: width > 0 ? clampColorValue(x / width, 0, 1) : 0,
    brightness: height > 0 ? clampColorValue(1 - y / height, 0, 1) : 1,
  };
}
