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

interface ChartExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
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
      <View height={240}>{example.preview}</View>
    </StoryExample>
  );
});
