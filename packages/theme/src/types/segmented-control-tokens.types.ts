import type {
  ComponentSize,
  SelectionVariant,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export type SegmentedControlSizeTokens = Record<
  ComponentSize,
  {
    fontSize: number;
    gap: number;
    height: number;
    hitSlop: number;
    iconSize: number;
    minItemWidth: number;
    paddingHorizontal: number;
    stackedPaddingVertical: number;
  }
>;

export interface SegmentedControlAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface SegmentedControlVariantTokens {
  states: VisualStateTokens<
    SelectionVisualState,
    SegmentedControlAppearanceTokens
  >;
}

export interface SegmentedControlTokens {
  borderRadius: number;
  borderWidth: number;
  itemBorderRadius: number;
  itemBorderWidth: number;
  rootBackgroundColor: string;
  rootBorderColor: string;
  rootGap: number;
  rootPadding: number;
  sizes: SegmentedControlSizeTokens;
  variants: Record<SelectionVariant, SegmentedControlVariantTokens>;
}
