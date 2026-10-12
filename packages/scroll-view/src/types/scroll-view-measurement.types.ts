import type { LayoutRectangle, ScrollView, View } from "react-native";

export interface ScrollViewMeasurement {
  scrollView: ScrollView;
  target: View;
  layout: LayoutRectangle;
}

export interface ScrollViewRevealOptions {
  layout: LayoutRectangle;
  viewportSize: number;
  contentSize: number;
  horizontal: boolean;
}
