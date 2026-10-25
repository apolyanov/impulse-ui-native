import type {
  ComponentSize,
  ComponentTone,
  SelectionState,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export interface TabsSizeTokens {
  fontSize: number;
  minHeight: number;
  hitSlop: number;
  paddingHorizontal: number;
  paddingVertical: number;
}

export interface TabsItemAppearanceTokens {
  color: string;
  indicatorColor: string;
  indicatorOpacity: number;
}

export interface TabsTokens {
  borderColor: string;
  borderWidth: number;
  indicatorHeight: number;
  panelGap: number;
  sizes: Record<ComponentSize, TabsSizeTokens>;
  colors: Record<
    ComponentTone,
    VisualStateTokens<SelectionVisualState, TabsItemAppearanceTokens>
  >;
}

export interface TabsItemTokenState extends SelectionState {
  size: ComponentSize;
  tone?: ComponentTone;
}

export type ResolvedTabsItemTokens = TabsSizeTokens &
  TabsItemAppearanceTokens & {
    indicatorHeight: number;
  };
