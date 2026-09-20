export type AccordionFocusDirection = "first" | "last" | "next" | "previous";

export function getAccordionFocusDirection(
  key: string,
): AccordionFocusDirection | undefined {
  if (key === "ArrowDown") return "next";
  if (key === "ArrowUp") return "previous";
  if (key === "Home") return "first";
  if (key === "End") return "last";
  return undefined;
}

export function normalizeAccordionValue(
  value: string | readonly string[] | undefined,
): readonly string[] {
  if (value === undefined) return [];
  return typeof value === "string" ? [value] : value;
}
