import type { ColorPair } from "./theme-provider.types";

export interface PopoverTokens {
  zIndexBase: number;
  gap: number;
  edgeOffset: number;
  arrowSize: number;
  maxWidth: number;
  actionMinSize: number;

  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  titleColor: string;
  descriptionColor: string;

  surfaces: Record<
    "elevated" | "inverse",
    ColorPair & {
      borderColor: string;
      borderWidth: number;
      borderRadius: number;
      paddingHorizontal: number;
      paddingVertical: number;
    }
  >;
}
