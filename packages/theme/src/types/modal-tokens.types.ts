import type { ComponentSize } from "./components.types";

export interface ModalTokens {
  zIndexBase: number;
  overlayColor: string;
  overlayVisibleOpacity: number;
  viewportPadding: number;
  closedScale: number;

  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  gap: number;
  headerGap: number;
  footerGap: number;

  titleColor: string;
  titleFontSize: number;
  titleLineHeight: number;

  descriptionColor: string;
  descriptionFontSize: number;
  descriptionLineHeight: number;

  sizes: Record<ComponentSize, { maxWidth: number }>;
}
