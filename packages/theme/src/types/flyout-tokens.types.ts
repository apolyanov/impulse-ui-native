export interface FlyoutHandleTokens {
  containerHeight: number;
  width: `${number}%`;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}

export interface FlyoutTitleTokens {
  paddingVertical: number;
  paddingHorizontal: number;
}

export interface FlyoutTokens {
  zIndexBase: number;

  maxHeightRatio: number;

  overlayColor: string;
  overlayVisibleOpacity: number;

  backgroundColor: string;
  contentPaddingHorizontal: number;

  borderRadius: number;

  hiddenOpacity: number;

  title: FlyoutTitleTokens;
  handle: FlyoutHandleTokens;
}
