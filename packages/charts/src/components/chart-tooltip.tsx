import { Card } from "@impulse-ui-native/card";
import { memo } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import type { ChartTooltipProps } from "../types";
import { ChartRow } from "./chart-row";
import { ChartSwatch } from "./chart-swatch";
import { ChartText } from "./chart-text";

export const ChartTooltip = memo(function ChartTooltip({
  details,
}: ChartTooltipProps) {
  const theme = useTheme();

  return (
    <Card.Root>
      <Card.Content>
        {details.map((detail) => (
          <ChartRow
            key={
              (detail.selection.seriesId ?? "") +
              ":" +
              detail.selection.datumIndex
            }
          >
            <ChartSwatch color={detail.color} />
            <ChartText numeric color={theme.colors.text.primary} flexShrink={1}>
              {detail.label}: {detail.value}
            </ChartText>
          </ChartRow>
        ))}
      </Card.Content>
    </Card.Root>
  );
});
