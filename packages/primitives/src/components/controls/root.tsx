import { memo, useMemo } from "react";

import type { ViewProps } from "../../types";
import { ControlRootStyles } from "../../constants/control-root.constants";
import { View } from "../atoms";

export const ControlRoot = memo(function ControlRoot(props: ViewProps) {
  const { style, ...rest } = props;

  const containerStyle = useMemo(
    () => [ControlRootStyles.container, style],
    [style],
  );

  return <View {...rest} style={containerStyle} />;
});
