import type {
  AvailabilityVisualState,
  ComponentTone,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export interface CarouselIndicatorAppearanceTokens {
  backgroundColor: string;
}

export interface CarouselCounterAppearanceTokens {
  color: string;
}

export interface CarouselTokens {
  gap: number;
  slideGap: number;
  borderRadius: number;
  indicatorGap: number;
  indicator: {
    borderRadius: number;
    targetSize: number;
    variants: Record<"dots" | "segments", { width: number; height: number }>;
    colors: Record<
      ComponentTone,
      VisualStateTokens<SelectionVisualState, CarouselIndicatorAppearanceTokens>
    >;
  };
  counter: {
    states: VisualStateTokens<
      AvailabilityVisualState,
      CarouselCounterAppearanceTokens
    >;
  };
}
