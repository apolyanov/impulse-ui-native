import type { PanGesture } from "react-native-gesture-handler";
import { createContext } from "react";

export const FlyoutDragContext = createContext<PanGesture | undefined>(
  undefined,
);
