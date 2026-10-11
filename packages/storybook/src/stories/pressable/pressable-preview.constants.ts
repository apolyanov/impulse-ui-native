import { StyleSheet } from "react-native";

export const PressablePreviewStyles = StyleSheet.create({
  outlined: {
    backgroundColor: "transparent",
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  wide: {
    width: "100%",
  },
});
