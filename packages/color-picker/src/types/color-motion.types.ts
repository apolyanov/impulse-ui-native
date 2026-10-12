import type { DerivedValue } from "react-native-reanimated";

import type { RgbaColor } from "./color.types";

export interface ColorMotionSurfaceProps {
  rgba: DerivedValue<RgbaColor>;
}
