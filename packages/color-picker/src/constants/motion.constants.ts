import Animated from "react-native-reanimated";
import { Rect } from "react-native-svg";

export const TransparentStops: readonly string[] = ["#00000000", "#00000000"];
export const SaturationStops: readonly string[] = ["#FFFFFF", "#FFFFFF00"];
export const AnimatedColorRect = Animated.createAnimatedComponent(Rect);
