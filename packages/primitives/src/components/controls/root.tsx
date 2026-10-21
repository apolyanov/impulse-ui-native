import { memo } from "react";

import type { ViewProps } from "../../types";
import { View } from "../atoms";

export const ControlRoot = memo(function ControlRoot(props: ViewProps) {
  return <View {...props} />;
});
