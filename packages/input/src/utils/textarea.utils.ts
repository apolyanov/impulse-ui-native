export function normalizeTextareaRows(value: number, fallback: number): number {
  return Number.isFinite(value) ? Math.max(1, Math.floor(value)) : fallback;
}
