import type { Gesture } from "react-native-gesture-handler";
import { createContext } from "react";

import type { FlyoutRootProps } from "../types";

export const FlyoutDragContext = createContext<
  | {
      dragGesture: ReturnType<typeof Gesture.Pan>;
      placement: NonNullable<FlyoutRootProps["placement"]>;
    }
  | undefined
>(undefined);
