import type { ReactNode } from "react";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { ComponentTone } from "@impulse-ui-native/theme";

export type CarouselPagination = "dots" | "segments" | "counter" | "none";

export interface CarouselProps extends ViewProps {
  children?: ReactNode;
  /** Zero-based logical slide index. */
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  disabled?: boolean;
  pagination?: CarouselPagination;
  tone?: ComponentTone;
  showNavigation?: boolean;
  /** Visible neighboring-slide preview; the final slide previews its predecessor. */
  peek?: number;
  slideAspectRatio?: number;
}

export interface CarouselBehaviorOptions {
  count: number;
  index?: number;
  defaultIndex: number;
  onIndexChange?: (index: number) => void;
  disabled: boolean;
  stride: number;
  endInset: number;
}

export interface CarouselIndicatorProps {
  active: boolean;
  disabled: boolean;
  index: number;
  variant: "dots" | "segments";
  tone: ComponentTone;
  onSelect: (index: number) => void;
}
