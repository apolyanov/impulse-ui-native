import type { ReactNode } from "react";
import { memo } from "react";

import {
  BarChart,
  LineChart,
  MultiBarChart,
  MultiLineChart,
  MultiPieChart,
  PieChart,
} from "@impulse-ui-native/charts";
import { View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";
import {
  ChartPreviewHeight,
  ChartSelectionPreviewHeight,
} from "./charts-layout.constants";
import { ChartsSelectionExample } from "./charts-selection.example";

interface ChartExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
  previewHeight?: number;
}

const lineData = [
  { x: "Mon", y: 12 },
  { x: "Tue", y: 18 },
  { x: "Wed", y: 15 },
  { x: "Thu", y: 26 },
  { x: "Fri", y: 22 },
];

const barData = [
  { x: "Mon", y: 14 },
  { x: "Tue", y: 22 },
  { x: "Wed", y: -6 },
  { x: "Thu", y: 27 },
  { x: "Fri", y: 18 },
];

const multiLineSeries = [
  { id: "current", data: lineData },
  {
    id: "previous",
    data: [
      { x: "Mon", y: 9 },
      { x: "Tue", y: 14 },
      { x: "Wed", y: 19 },
      { x: "Thu", y: 17 },
      { x: "Fri", y: 25 },
    ],
  },
];

const multiBarSeries = [
  { id: "revenue", data: barData },
  {
    id: "cost",
    data: [
      { x: "Mon", y: 8 },
      { x: "Tue", y: 15 },
      { x: "Wed", y: 11 },
      { x: "Thu", y: 19 },
      { x: "Fri", y: 12 },
    ],
  },
];

const pieData = [
  { id: "mobile", value: 46 },
  { id: "desktop", value: 34 },
  { id: "tablet", value: 20 },
];

export const ChartExampleDefinitions = [
  {
    name: "Selection",
    title: "Controlled selection and legends",
    description:
      "Tap or drag to select a category and compare overlapping series in the shared tooltip. Tap legend entries to toggle series.",
    props: [
      {
        name: "selection / hiddenIds",
        value: "controlled",
        description:
          "Selection and visibility can be controlled or left to the chart.",
      },
    ],
    preview: <ChartsSelectionExample />,
    previewHeight: ChartSelectionPreviewHeight,
  },
  {
    name: "StackedHorizontal",
    title: "Horizontal stacked bars",
    description:
      "Positive and negative values stack independently around zero. Category axis options remain on xAxis; numeric options remain on yAxis.",
    props: [
      {
        name: "mode / orientation",
        value: '"stacked" / "horizontal"',
        description:
          "Combines horizontal orientation with diverging stacked series.",
      },
    ],
    preview: (
      <MultiBarChart
        series={multiBarSeries}
        mode="stacked"
        orientation="horizontal"
        interactive
        legend
      />
    ),
  },
  {
    name: "Time",
    title: "Date scale with a missing measurement",
    description:
      "Date data automatically uses a time scale. Null measurements split the line instead of connecting across the gap.",
    props: [
      {
        name: "xAxis.format",
        value: "date formatter",
        description: "Formats date ticks without changing their scale.",
      },
    ],
    preview: (
      <LineChart
        data={[
          { x: new Date(2026, 0, 1), y: 4 },
          { x: new Date(2026, 0, 2), y: 9 },
          { x: new Date(2026, 0, 3), y: null },
          { x: new Date(2026, 0, 4), y: 6 },
          { x: new Date(2026, 0, 5), y: 8 },
        ]}
        xAxis={{ format: (date) => `${date.getMonth() + 1}/${date.getDate()}` }}
        interactive
      />
    ),
  },
  {
    name: "Single",
    title: "Single point and constant domains",
    description:
      "A single measurement receives an expanded domain and remains selectable.",
    props: [],
    preview: (
      <LineChart data={[{ x: 5, y: 10 }]} line={{ width: 8 }} interactive />
    ),
  },
  {
    name: "NoGrid",
    title: "Disabled grid with visible axes",
    description:
      "Grid visibility does not change axis lines or ticks. Axis options control those independently.",
    props: [
      {
        name: "grid",
        value: "{ x: false, y: false }",
        description: "Disables both sets of grid lines.",
      },
    ],
    preview: <BarChart data={barData} grid={{ x: false, y: false }} />,
  },
  {
    name: "Empty",
    title: "Empty chart",
    description:
      "Empty and all-null data produce no marks. Supply emptyContent to explain the state in your application.",
    props: [
      {
        name: "emptyContent",
        value: "ReactNode",
        description:
          "Renders centered over the canvas when there are no drawable targets.",
      },
    ],
    preview: <LineChart data={[]} />,
  },
  {
    name: "Line",
    title: "Line chart",
    description:
      "Use LineChart to show a continuous trend across numeric, date, or categorical values.",
    props: [
      {
        name: "data",
        value: "LineChartPoint[]",
        description:
          "Provides the horizontal values and nullable measurements.",
      },
    ],
    preview: <LineChart data={lineData} xScaleType="point" />,
  },
  {
    name: "MultiLine",
    title: "Multi-line chart",
    description:
      "Use MultiLineChart to compare several series on shared axes and grid lines.",
    props: [
      {
        name: "series",
        value: "MultiLineChartSeries[]",
        description:
          "Provides independently styled series with a shared domain.",
      },
    ],
    preview: <MultiLineChart series={multiLineSeries} xScaleType="point" />,
  },
  {
    name: "Bar",
    title: "Bar chart",
    description:
      "Use BarChart for categorical comparisons, including positive and negative values.",
    props: [
      {
        name: "bar",
        value: "{ radius: 4 }",
        description: "Styles every bar in the series.",
      },
    ],
    preview: <BarChart data={barData} bar={{ radius: 4 }} />,
  },
  {
    name: "MultiBar",
    title: "Grouped bar chart",
    description:
      "Use MultiBarChart to compare grouped series across shared categories.",
    props: [
      {
        name: "seriesPadding",
        value: "0.12",
        description: "Controls the spacing between bars in a category.",
      },
    ],
    preview: <MultiBarChart series={multiBarSeries} seriesPadding={0.12} />,
  },
  {
    name: "Pie",
    title: "Donut chart",
    description: "Use PieChart to show proportional values as a pie or donut.",
    props: [
      {
        name: "innerRadius",
        value: "0.5",
        description: "Creates the center opening as a radius ratio.",
      },
    ],
    preview: (
      <PieChart
        data={pieData}
        innerRadius={0.5}
        outerRadius={0.9}
        padAngle={2}
        slice={{ cornerRadius: 4 }}
        interactive
        legend
      />
    ),
  },
  {
    name: "MultiPie",
    title: "Concentric pie chart",
    description:
      "Use MultiPieChart for independently normalized concentric series.",
    props: [
      {
        name: "ringPadding",
        value: "4",
        description: "Separates adjacent series rings.",
      },
    ],
    preview: (
      <MultiPieChart
        series={[
          { id: "current", data: pieData },
          {
            id: "previous",
            data: [
              { id: "mobile", value: 38 },
              { id: "desktop", value: 42 },
              { id: "tablet", value: 20 },
            ],
          },
        ]}
        innerRadius={0.2}
        outerRadius={0.9}
        ringPadding={4}
        interactive
        legend
      />
    ),
  },
] satisfies ChartExampleDefinition[];

interface ChartExampleProps {
  example: ChartExampleDefinition;
  elevated?: boolean;
}

export const ChartExample = memo(function ChartExample({
  example,
  elevated,
}: ChartExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View height={example.previewHeight ?? ChartPreviewHeight} flexShrink={0}>
        {example.preview}
      </View>
    </StoryExample>
  );
});
