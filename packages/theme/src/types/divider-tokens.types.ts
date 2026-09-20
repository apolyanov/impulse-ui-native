export type DividerTone =
  | "subtle"
  | "default"
  | "strong"
  | "primary"
  | "inverse";

export interface DividerTokens {
  colors: Record<DividerTone, string>;
  inset: number;
  thickness: number;
}
