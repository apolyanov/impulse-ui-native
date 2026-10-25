import type { ComponentTone } from "./components.types";

export interface DataStateDetailsTokens {
  gap: number;
  iconSize: number;
  colors: Record<ComponentTone, { iconColor: string }>;
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
