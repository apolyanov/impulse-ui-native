import type { PaginationItemValue } from "../types";
import type { PaginationWindowLayout } from "../types/pagination-internal.types";

export function normalizePageCount(pageCount: number): number {
  if (!Number.isFinite(pageCount)) {
    return 1;
  }

  return Math.max(1, Math.floor(pageCount));
}

export function clampPage(page: number, pageCount: number): number {
  if (!Number.isFinite(page)) {
    return 1;
  }

  return Math.min(Math.max(1, Math.floor(page)), pageCount);
}

export function getPaginationItems(
  page: number,
  pageCount: number,
  maximumItemCount = 7,
): PaginationItemValue[] {
  const normalizedMaximumItemCount = maximumItemCount >= 7 ? 7 : 5;

  if (pageCount <= normalizedMaximumItemCount) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  if (normalizedMaximumItemCount === 5) {
    if (page <= 3) {
      return [1, 2, 3, "end-ellipsis", pageCount];
    }

    if (page >= pageCount - 2) {
      return [1, "start-ellipsis", pageCount - 2, pageCount - 1, pageCount];
    }

    return [1, "start-ellipsis", page, "end-ellipsis", pageCount];
  }

  if (page <= 3) {
    return [1, 2, 3, "end-ellipsis", pageCount];
  }

  if (page >= pageCount - 2) {
    return [1, "start-ellipsis", pageCount - 2, pageCount - 1, pageCount];
  }

  return [
    1,
    "start-ellipsis",
    page - 1,
    page,
    page + 1,
    "end-ellipsis",
    pageCount,
  ];
}

export function getPaginationWindowLayout(
  availableWidth: number | undefined,
  pageCount: number,
  controlSize: number,
  compactMinWidth: number,
  gap: number,
): PaginationWindowLayout {
  if (availableWidth === undefined) {
    return "full";
  }

  const fullItemCount = Math.min(pageCount, 7) + 2;
  const fullWidth = fullItemCount * controlSize + (fullItemCount - 1) * gap;

  if (availableWidth >= fullWidth) {
    return "full";
  }

  const condensedItemCount = Math.min(pageCount, 5) + 2;
  const condensedWidth =
    condensedItemCount * controlSize + (condensedItemCount - 1) * gap;

  if (availableWidth >= condensedWidth) {
    return "condensed";
  }

  const compactWidth = controlSize * 2 + compactMinWidth + gap * 2;

  return compactWidth < condensedWidth ? "compact" : "full";
}

export function getDefaultCompactLabel(
  page: number,
  pageCount: number,
): string {
  return `Page ${page} of ${pageCount}`;
}
