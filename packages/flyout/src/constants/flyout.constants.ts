import { Easing } from "react-native-reanimated";

export const EnterAnimationConfig = {
  damping: 50,
  stiffness: 300,
  mass: 1,
  overshootClamping: true,
};

export const ExitAnimationConfig = {
  duration: 150,
  easing: Easing.in(Easing.quad),
};
