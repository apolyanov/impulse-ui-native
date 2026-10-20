import type { Gesture } from "react-native-gesture-handler";
import { createContext } from "react";

export const FlyoutDragContext = createContext<
  ReturnType<typeof Gesture.Pan> | undefined
>(undefined);
