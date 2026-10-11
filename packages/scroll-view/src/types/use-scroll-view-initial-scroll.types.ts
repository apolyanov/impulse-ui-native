import type { ScrollViewProps } from "react-native";

export interface UseScrollViewInitialScrollOptions extends Pick<
  ScrollViewProps,
  | "horizontal"
  | "contentOffset"
  | "onLayout"
  | "onContentSizeChange"
  | "onScrollBeginDrag"
> {
  /** Reveal the target once per mount. Explicit contentOffset takes precedence. */
  enabled?: boolean;
}
