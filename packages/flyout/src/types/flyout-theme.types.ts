import type { EdgeInsets } from "react-native-safe-area-context";

import type { FlyoutPlacement } from "@impulse-ui-native/theme";

export interface FlyoutSurfaceThemeProps {
  placement: FlyoutPlacement;
  layer: number;
  offset: number;
  screenHeight: number;
  insets: EdgeInsets;
}
