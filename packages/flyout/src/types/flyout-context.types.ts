import type { SharedValue } from "react-native-reanimated";

import type { FlyoutRootProps } from "./flyout.types";

export type FlyoutContextValue = {
  measuredHeight: SharedValue<number>;
  offset: number;
  screenHeight: number;
  maxHeight: number;
  placement: NonNullable<FlyoutRootProps["placement"]>;
};
