import { memo } from "react";
import { ActivityIndicator } from "react-native";

export const ControlLoader = memo(function ControlLoader() {
  return <ActivityIndicator />;
});
