import type { ActivityIndicatorProps } from "react-native";

import type { ComponentSize, SpinnerTone } from "@impulse-ui-native/theme";

export interface SpinnerProps extends Omit<ActivityIndicatorProps, "size"> {
  size?: ComponentSize;
  tone?: SpinnerTone;
}
