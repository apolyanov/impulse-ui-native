import { useMemo, useState } from "react";
import { Text } from "react-native";

import type { ChartSelection } from "@impulse-ui-native/charts";
import { MultiLineChart } from "@impulse-ui-native/charts";
import { View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import {
  ChartPreviewHeight,
  ChartSelectionPreviewHeight,
  ChartSelectionStatusHeight,
} from "./charts-layout.constants";

export function ChartsSelectionExample() {
  const theme = useTheme();
  const [selection, setSelection] = useState<ChartSelection | null>(null);
  const [hiddenIds, setHiddenIds] = useState<readonly string[]>([]);

  const series = useMemo(
    () => [
      {
        id: "current",
        label: "Current",
        data: [
          { x: "Mon", y: 12 },
          { x: "Tue", y: 18 },
          { x: "Wed", y: 15 },
        ],
      },
      {
        id: "previous",
        label: "Previous",
        data: [
          { x: "Mon", y: 12 },
          { x: "Tue", y: 14 },
          { x: "Wed", y: 15 },
        ],
        line: { dash: [4, 4] },
      },
    ],
    [],
  );

  return (
    <View height={ChartSelectionPreviewHeight} flexShrink={0}>
      <View height={ChartPreviewHeight} flexShrink={0}>
        <MultiLineChart
          series={series}
          interactive
          legend
          selection={selection}
          onSelectionChange={setSelection}
          hiddenIds={hiddenIds}
          onHiddenIdsChange={setHiddenIds}
          emptyContent={
            <Text style={{ color: theme.colors.text.secondary }}>
              Choose a series below
            </Text>
          }
        />
      </View>
      <View height={ChartSelectionStatusHeight} flexShrink={0}>
        <Text numberOfLines={2} style={{ color: theme.colors.text.secondary }}>
          {selection
            ? `Selected ${selection.seriesId}, point ${selection.datumIndex + 1}`
            : "Tap or drag to select; tap again to clear."}
        </Text>
      </View>
    </View>
  );
}
