import type {
  ComponentSize,
  SelectionState,
  SelectionVariant,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export type SegmentedControlItemLayout = "inline" | "stacked";

export interface SegmentedControlItemLayoutTokens {
  flexDirection: "column" | "row";
  gap: number;
  paddingVertical: number;
}

export interface SegmentedControlSizeToken {
  fontSize: number;
  height: number;
  hitSlop: number;
  iconSize: number;
  layouts: Record<SegmentedControlItemLayout, SegmentedControlItemLayoutTokens>;
  minItemWidth: number;
  paddingHorizontal: number;
}

export type SegmentedControlSizeTokens = Record<
  ComponentSize,
  SegmentedControlSizeToken
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

export interface SegmentedControlItemTokenState extends SelectionState {
  layout: SegmentedControlItemLayout;
  size: ComponentSize;
  variant: SelectionVariant;
}

export type ResolvedSegmentedControlItemTokens = Omit<
  SegmentedControlSizeToken,
  "layouts"
> &
  SegmentedControlItemLayoutTokens &
  SegmentedControlAppearanceTokens & {
    borderRadius: number;
    borderWidth: number;
  };
