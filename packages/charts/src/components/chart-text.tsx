import type { TextProps } from "@impulse-ui-native/primitives";
import { memo } from "@impulse-ui-native/core";
import { Typography } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import { resolveChartLabelTokens } from "../utils/chart-theme.util";

export const ChartText = memo(function ChartText(props: TextProps) {
  const theme = useTheme();
  const label = resolveChartLabelTokens(theme);

  return (
    <Typography.Master
      color={label.color}
      fontSize={label.fontSize}
      fontFamily={label.fontFamily}
      fontWeight={label.fontWeight}
      {...props}
    />
  );
});
