/** Move only as far as needed; oversized children align at their leading edge. */
export function getRevealOffset(
  start: number,
  size: number,
  viewport: number,
  content: number,
  initialOffset: number,
  fromEnd = false,
): number {
  if (size > viewport) {
    const offset = fromEnd ? start + size - viewport : start;

    return Math.max(0, Math.min(offset, content - viewport));
  }

  const offset =
    start < initialOffset
      ? start
      : Math.max(initialOffset, start + size - viewport);

  return Math.max(0, Math.min(offset, content - viewport));
}
