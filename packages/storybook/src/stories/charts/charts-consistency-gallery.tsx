import { useMemo } from "react";

import { Card } from "@impulse-ui-native/card";
import {
  BarChart,
  LineChart,
  MultiBarChart,
  MultiLineChart,
  MultiPieChart,
  PieChart,
} from "@impulse-ui-native/charts";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  ChartComparisonData,
  ChartComparisonPieData,
  ChartComparisonSelection,
  ChartComparisonSeries,
  ChartComparisonSeriesSelection,
} from "./charts-comparison.constants";
import { ChartPreviewHeight } from "./charts-layout.constants";

export function ChartsConsistencyGallery() {
  const theme = useTheme();
  const examples = useMemo(
    () => [
      {
        name: "LineChart",
        chart: (
          <LineChart
            data={ChartComparisonData}
            interactive
            defaultSelection={ChartComparisonSelection}
          />
        ),
      },
      {
        name: "MultiLineChart",
        chart: (
          <MultiLineChart
            series={ChartComparisonSeries}
            interactive
            legend
            defaultSelection={ChartComparisonSeriesSelection}
          />
        ),
      },
      {
        name: "BarChart",
        chart: (
          <BarChart
            data={ChartComparisonData}
            interactive
            defaultSelection={ChartComparisonSelection}
          />
        ),
      },
      {
        name: "MultiBarChart",
        chart: (
          <MultiBarChart
            series={ChartComparisonSeries}
            interactive
            legend
            defaultSelection={ChartComparisonSeriesSelection}
          />
        ),
      },
      {
        name: "PieChart",
        chart: (
          <PieChart
            data={ChartComparisonPieData}
            interactive
            legend
            defaultSelection={ChartComparisonSelection}
          />
        ),
      },
      {
        name: "MultiPieChart",
        chart: (
          <MultiPieChart
            series={[
              { id: "current", label: "Current", data: ChartComparisonPieData },
              {
                id: "previous",
                label: "Previous",
                data: ChartComparisonPieData,
              },
            ]}
            innerRadius={0.25}
            interactive
            legend
            defaultSelection={ChartComparisonSeriesSelection}
          />
        ),
      },
    ],
    [],
  );

  return (
    <View flex={1} backgroundColor={theme.colors.surface.primary.value}>
      <StoryDocumentationPage
        title="Chart consistency"
        description="Compare shared spacing, fonts, rounding, selection markers, Card tooltips, and toggleable legends across all six charts. Tap or drag within a chart to inspect values."
      >
        {examples.map((example) => (
          <Card.Root key={example.name}>
            <Card.Header>
              <Typography.Title3>{example.name}</Typography.Title3>
            </Card.Header>
            <Card.Content>
              <View height={ChartPreviewHeight} flexShrink={0}>
                {example.chart}
              </View>
            </Card.Content>
          </Card.Root>
        ))}
      </StoryDocumentationPage>
    </View>
  );
}
