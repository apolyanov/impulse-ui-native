export function getChartColor(id: string, palette: readonly string[]): string {
  let hash = 2166136261;

  for (let index = 0; index < id.length; index += 1) {
    hash = Math.imul(hash ^ id.charCodeAt(index), 16777619);
  }

  return palette[(hash >>> 0) % palette.length] ?? palette[0] ?? "transparent";
}
