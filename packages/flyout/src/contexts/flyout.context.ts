import type { Gesture } from "react-native-gesture-handler";
import type { SharedValue } from "react-native-reanimated";
import { createContext } from "react";

import type { FlyoutRootProps } from "../types";

export const FlyoutContext = createContext<
  | {
      measuredHeight: SharedValue<number>;
      offset: number;
      screenHeight: number;
      maxHeight: number;
      dragGesture: ReturnType<typeof Gesture.Pan>;
      placement: NonNullable<FlyoutRootProps["placement"]>;
    }
  | undefined
>(undefined);
