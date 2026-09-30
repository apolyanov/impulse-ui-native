export interface FlyoutHandleTokens {
  width: `${number}%`;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}

export type FlyoutPlacement = "top" | "bottom";

export interface FlyoutPlacementTokens {
  container: {
    top?: number;
    bottom?: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
  };
  handleContainer: {
    top?: number;
    bottom?: number;
    height: number;
  };
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

  hiddenOpacity: number;

  title: FlyoutTitleTokens;
  handle: FlyoutHandleTokens;
  placements: Record<FlyoutPlacement, FlyoutPlacementTokens>;
}

export interface FlyoutTokenState {
  placement: FlyoutPlacement;
}

export type ResolvedFlyoutTokens = Omit<FlyoutTokens, "placements"> &
  FlyoutPlacementTokens;
