export interface PopoverTokens {
  zIndexBase: number;
  gap: number;
  edgeOffset: number;
  /** @deprecated Popover and Tooltip no longer render arrows. This token is ignored. */
  arrowSize: number;
  maxWidth: number;
  actionMinSize: number;

  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  titleColor: string;
  descriptionColor: string;

  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  paddingHorizontal: number;
  paddingVertical: number;

  tooltip: {
    backgroundColor: string;
    color: string;
    borderRadius: number;
    paddingHorizontal: number;
    paddingVertical: number;
  };
}
