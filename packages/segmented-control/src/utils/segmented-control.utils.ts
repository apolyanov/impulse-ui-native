export type SegmentedControlFocusDirection =
  | "first"
  | "last"
  | "next"
  | "previous";

export function getSegmentedControlFocusDirection(
  key: string,
  isRtl: boolean,
): SegmentedControlFocusDirection | undefined {
  if (key === "Home") return "first";
  if (key === "End") return "last";
  if (key === "ArrowRight") return isRtl ? "previous" : "next";
  if (key === "ArrowLeft") return isRtl ? "next" : "previous";

  return undefined;
}
