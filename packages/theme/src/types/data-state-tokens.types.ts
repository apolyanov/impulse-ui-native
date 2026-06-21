export interface DataStateDetailsTokens {
  gap: number;
  iconSize: number;
  iconColor: string;
}

export interface DataStateActionsFooterTokens {
  gap: number;
}

export interface DataStateContentTokens {
  zIndex: number;
}

export interface DataStateLoadingTokens {
  transitionDuration: number;
  loaderZIndex: number;
}

export interface DataStateTokens {
  details: DataStateDetailsTokens;
  actionsFooter: DataStateActionsFooterTokens;
  content: DataStateContentTokens;
  loading: DataStateLoadingTokens;
}
