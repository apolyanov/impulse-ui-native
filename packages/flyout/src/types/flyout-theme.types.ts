import type { EdgeInsets } from "react-native-safe-area-context";

import type { FlyoutRootProps } from "./flyout.types";

export interface FlyoutRootThemeProps {
  placement: NonNullable<FlyoutRootProps["placement"]>;
  layer: number;
  offset: number;
  screenHeight: number;
  insets: EdgeInsets;
}
