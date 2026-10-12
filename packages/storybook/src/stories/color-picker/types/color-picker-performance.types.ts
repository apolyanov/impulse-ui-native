export interface ColorPickerFrameStats {
  frames: number;
  elapsed: number;
  worstInterval: number;
  slowFrames: number;
}

export type ColorPickerPerformanceMode =
  | "spectrum"
  | "full"
  | "noAlpha"
  | "confirm";
