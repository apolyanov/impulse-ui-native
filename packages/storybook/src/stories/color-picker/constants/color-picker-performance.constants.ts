import type {
  ColorPickerFrameStats,
  ColorPickerPerformanceMode,
} from "../types/color-picker-performance.types";

export const InitialFrameStats: ColorPickerFrameStats = {
  frames: 0,
  elapsed: 0,
  worstInterval: 0,
  slowFrames: 0,
};
export const FrameReportInterval = 1000;
export const SlowFrameThreshold = 12.5;
export const PerformanceModes: readonly {
  value: ColorPickerPerformanceMode;
  label: string;
}[] = [
  { value: "spectrum", label: "Spectrum only" },
  { value: "full", label: "Full picker" },
  { value: "noAlpha", label: "No opacity" },
  { value: "confirm", label: "Confirm mode" },
];
