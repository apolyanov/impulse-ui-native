import type { ComponentRef, RefObject } from "react";
import type { ScrollView, ScrollViewProps, View } from "react-native";

export interface UseScrollViewInitialScrollResult {
  scrollViewRef: RefObject<ComponentRef<typeof ScrollView> | null>;
  targetRef: RefObject<ComponentRef<typeof View> | null>;
  onTargetLayout: () => void;
  onLayout: NonNullable<ScrollViewProps["onLayout"]>;
  onContentSizeChange: NonNullable<ScrollViewProps["onContentSizeChange"]>;
  onScrollBeginDrag: NonNullable<ScrollViewProps["onScrollBeginDrag"]>;
}

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
