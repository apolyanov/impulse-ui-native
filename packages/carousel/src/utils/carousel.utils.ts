import type { Key, ReactNode } from "react";

export function clampIndex(index: number, count: number): number {
  return Math.min(
    Math.max(Number.isFinite(index) ? Math.trunc(index) : 0, 0),
    Math.max(count - 1, 0),
  );
}

export function indexFromOffset(
  offset: number,
  stride: number,
  count: number,
  endInset = 0,
): number {
  if (stride <= 0 || count < 2 || !Number.isFinite(offset)) {
    return 0;
  }

  let lower = 0;
  let upper = count - 1;

  while (lower < upper) {
    const middle = Math.floor((lower + upper) / 2);
    const midpoint =
      (getSnapOffset(middle, count, stride, endInset) +
        getSnapOffset(middle + 1, count, stride, endInset)) /
      2;

    if (offset < midpoint) {
      upper = middle;
    } else {
      lower = middle + 1;
    }
  }

  return lower;
}

export function getSnapOffset(
  index: number,
  count: number,
  stride: number,
  endInset: number,
): number {
  const inset = index === 0 ? 0 : index === count - 1 ? endInset : endInset / 2;

  return Math.max(0, index * stride - inset);
}

export function getSnapOffsets(
  count: number,
  stride: number,
  endInset: number,
): number[] {
  return Array.from({ length: count }, (_, index) =>
    getSnapOffset(index, count, stride, endInset),
  );
}

export function getSlideWidth(
  width: number,
  peek: number,
  gap: number,
): number {
  const preview = Number.isFinite(peek) ? Math.max(0, peek) : 0;

  // Always leave room for a slide, even with an oversized preview request.
  return Math.max(
    1,
    width - (preview > 0 ? Math.min(preview + gap, width / 2) : 0),
  );
}

export function getSlideKey(slide: ReactNode, index: number): Key {
  return typeof slide === "object" && slide !== null && "key" in slide
    ? (slide.key ?? index)
    : index;
}
