export type DividerTone =
  | "subtle"
  | "default"
  | "strong"
  | "primary"
  | "inverse";

export type DividerTokenOrientation = "horizontal" | "vertical";

export type DividerTokenInset = "none" | "start" | "end" | "both";

export interface DividerLayoutTokens {
  height?: number;
  marginBottom: number;
  marginEnd: number;
  marginStart: number;
  marginTop: number;
  width?: number;
}

export interface DividerTokens {
  colors: Record<DividerTone, string>;
  layouts: Record<
    DividerTokenOrientation,
    Record<DividerTokenInset, DividerLayoutTokens>
  >;
}

export interface DividerTokenState {
  inset: DividerTokenInset;
  orientation: DividerTokenOrientation;
  tone: DividerTone;
}

export type ResolvedDividerTokens = DividerLayoutTokens & {
  backgroundColor: string;
};
