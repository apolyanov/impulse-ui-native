import type { ComponentRef } from "react";
import type { LayoutRectangle, ScrollView, View } from "react-native";

export interface ScrollViewMeasurement {
  scrollView: ComponentRef<typeof ScrollView>;
  target: ComponentRef<typeof View>;
  layout: LayoutRectangle;
}

export interface ScrollViewRevealOptions {
  layout: LayoutRectangle;
  viewportSize: number;
  contentSize: number;
  horizontal: boolean;
}
