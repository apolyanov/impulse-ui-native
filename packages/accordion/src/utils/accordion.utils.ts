export function normalizeAccordionValue(
  value: string | readonly string[] | undefined,
): readonly string[] {
  if (value === undefined) return [];
  return typeof value === "string" ? [value] : value;
}
