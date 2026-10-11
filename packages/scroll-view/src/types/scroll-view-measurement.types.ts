import type {
  LayoutRectangle,
  PlatformOSType,
  ScrollView,
  View,
} from "react-native";

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
  isRTL: boolean;
  platform: PlatformOSType;
}
