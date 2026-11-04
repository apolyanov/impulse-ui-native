import type { SharedValue } from "react-native-reanimated";

import type { PopoverContentProps } from "./popover.types";

export interface PopoverSurfaceViewProps extends PopoverContentProps {
  progress: SharedValue<number>;
  interactive: boolean;
  onReady: () => void;
}
