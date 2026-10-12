export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HsvaColor {
  h: number;
  s: number;
  v: number;
  a: number;
}

export type ColorChannel = "r" | "g" | "b";
export type ColorPickerCommitMode = "immediate" | "confirm";
