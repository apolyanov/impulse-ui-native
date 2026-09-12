import { ScrollView, StyleSheet } from "react-native";

import type {
  MultiBarChartSeries,
  MultiLineChartSeries,
  MultiPieChartSeries,
} from "@impulse-ui-native/toolkit";
import {
  BarChart,
  LineChart,
  MultiBarChart,
  MultiLineChart,
  MultiPieChart,
  PieChart,
  Typography,
  View,
} from "@impulse-ui-native/toolkit";

const numericData = [
  { x: 0, y: 12 },
  { x: 1, y: 18 },
  { x: 2, y: 15 },
  { x: 3, y: 26 },
  { x: 4, y: 22 },
];

const categoryData = [
  { x: "Mon", y: 8 },
  { x: "Tue", y: 16 },
  { x: "Wed", y: 13 },
  { x: "Thu", y: 24 },
  { x: "Fri", y: 19 },
  { x: "Sat", y: 28 },
  { x: "Sun", y: 23 },
];

const barData = [
  { x: "Mon", y: 14 },
  { x: "Tue", y: 22 },
  { x: "Wed", y: -6 },
  { x: "Thu", y: 27 },
  { x: "Fri", y: 18 },
];

const multiLineSeries: readonly MultiLineChartSeries<string>[] = [
  {
    id: "current",
    data: [
      { x: "Mon", y: 12 },
      { x: "Tue", y: 18 },
      { x: "Wed", y: 15 },
      { x: "Thu", y: 26 },
      { x: "Fri", y: 22 },
      { x: "Sat", y: 31 },
      { x: "Sun", y: 27 },
    ],
    line: { curve: "monotone" },
  },
  {
    id: "previous",
    data: [
      { x: "Mon", y: 9 },
      { x: "Tue", y: 14 },
      { x: "Wed", y: 19 },
      { x: "Thu", y: 17 },
      { x: "Fri", y: 25 },
      { x: "Sat", y: 24 },
      { x: "Sun", y: 29 },
    ],
    line: { curve: "monotone" },
  },
  {
    id: "target",
    data: [
      { x: "Mon", y: 20 },
      { x: "Tue", y: 20 },
      { x: "Wed", y: 22 },
      { x: "Thu", y: 24 },
      { x: "Fri", y: 26 },
      { x: "Sat", y: 28 },
      { x: "Sun", y: 30 },
    ],
    line: { curve: "monotone" },
  },
];

const multiBarSeries: readonly MultiBarChartSeries<string>[] = [
  {
    id: "revenue",
    data: [
      { x: "Mon", y: 18 },
      { x: "Tue", y: 24 },
      { x: "Wed", y: 21 },
      { x: "Thu", y: 29 },
      { x: "Fri", y: 26 },
    ],
  },
  {
    id: "cost",
    data: [
      { x: "Mon", y: 12 },
      { x: "Tue", y: 15 },
      { x: "Wed", y: 17 },
      { x: "Thu", y: 18 },
      { x: "Fri", y: 20 },
    ],
  },
];

const pieData = [
  { id: "mobile", value: 46 },
  { id: "desktop", value: 34 },
  { id: "tablet", value: 20 },
];

const multiPieSeries: readonly MultiPieChartSeries[] = [
  {
    id: "current",
    data: [
      { id: "organic", value: 42 },
      { id: "paid", value: 33 },
      { id: "referral", value: 25 },
    ],
  },
  {
    id: "previous",
    data: [
      { id: "organic", value: 36 },
      { id: "paid", value: 29 },
      { id: "referral", value: 35 },
    ],
  },
  {
    id: "next",
    data: [
      { id: "organic", value: 66 },
      { id: "paid", value: 49 },
      { id: "referral", value: 15 },
    ],
  },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Typography.Title2>Line chart styles</Typography.Title2>

      <View style={styles.card}>
        <Typography.Title5>Scale</Typography.Title5>
        <Typography.Master color="#64748b">
          Axis baselines and tick marks
        </Typography.Master>
        <View style={styles.chart}>
          <LineChart
            data={numericData}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            line={{
              color: "#2563eb",
              curve: "monotone",
              cap: "round",
              join: "round",
            }}
            xAxis={{
              tickCount: 5,
              format: (value) => `Day ${value + 1}`,
              line: { color: "#64748b" },
              tick: { color: "#64748b", length: 6 },
              label: { color: "#475569", fontSize: 11, gap: 7 },
            }}
            yAxis={{
              domain: [0, 30],
              tickCount: 4,
              line: { color: "#64748b" },
              tick: { color: "#64748b", length: 6 },
              label: { color: "#475569", fontSize: 11, gap: 7 },
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Typography.Title5>Dashed grid</Typography.Title5>
        <Typography.Master color="#64748b">
          Full grid without scale lines
        </Typography.Master>
        <View style={styles.chart}>
          <LineChart
            data={numericData}
            grid={{
              x: { color: "#cbd5e1", opacity: 0.8, dash: [4, 4] },
              y: { color: "#cbd5e1", opacity: 0.8, dash: [4, 4] },
            }}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            line={{
              color: "#e11d48",
              curve: "linear",
              cap: "round",
              join: "round",
            }}
            xAxis={{
              tickCount: 5,
              format: (value) => `${value + 1}`,
              label: { color: "#475569", fontSize: 11, gap: 8 },
            }}
            yAxis={{
              domain: [0, 30],
              tickCount: 4,
              label: { color: "#475569", fontSize: 11, gap: 8 },
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Typography.Title5>Category grid</Typography.Title5>
        <Typography.Master color="#64748b">
          Point scale with a solid subtle grid
        </Typography.Master>
        <View style={styles.chart}>
          <LineChart
            data={categoryData}
            xScaleType="point"
            grid={{
              x: { color: "#e2e8f0", opacity: 0.7 },
              y: { color: "#e2e8f0", opacity: 0.7 },
            }}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            line={{
              color: "#059669",
              curve: "monotone",
              cap: "round",
              join: "round",
            }}
            xAxis={{
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
            yAxis={{
              domain: [0, 30],
              tickCount: 4,
              format: (value) => `${value}%`,
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Typography.Title5>Multiple series</Typography.Title5>
        <Typography.Master color="#64748b">
          Shared point scale with two trends and a dashed target
        </Typography.Master>
        <View style={styles.chart}>
          <MultiLineChart
            series={multiLineSeries}
            xScaleType="point"
            grid={{
              x: { color: "#e2e8f0", dash: [3, 5] },
              y: { color: "#e2e8f0", dash: [3, 5] },
            }}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            xAxis={{
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
            yAxis={{
              domain: [0, 35],
              tickCount: 5,
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
          />
        </View>
      </View>

      <Typography.Title2>Bar chart styles</Typography.Title2>

      <View style={styles.card}>
        <Typography.Title5>Single series</Typography.Title5>
        <Typography.Master color="#64748b">
          Rounded categorical bars with positive and negative values
        </Typography.Master>
        <View style={styles.chart}>
          <BarChart
            data={barData}
            bar={{ color: "#7c3aed", radius: 5 }}
            grid={{ y: { color: "#e2e8f0", opacity: 0.8 }, x: false }}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            xAxis={{
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
            yAxis={{
              tickCount: 5,
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Typography.Title5>Multiple series</Typography.Title5>
        <Typography.Master color="#64748b">
          Grouped bars with shared category and value scales
        </Typography.Master>
        <View style={styles.chart}>
          <MultiBarChart
            series={multiBarSeries}
            categoryPadding={0.22}
            seriesPadding={0.12}
            grid={{ y: { color: "#e2e8f0", dash: [3, 5] }, x: false }}
            insets={{ top: 20, right: 20, bottom: 44, left: 52 }}
            xAxis={{
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
            yAxis={{
              domain: [0, 35],
              tickCount: 5,
              label: { color: "#334155", fontSize: 11, gap: 8 },
            }}
          />
        </View>
      </View>

      <Typography.Title2>Pie chart styles</Typography.Title2>

      <View style={styles.card}>
        <Typography.Title5>Donut</Typography.Title5>
        <Typography.Master color="#64748b">
          Rounded slices with proportional inner and outer radii
        </Typography.Master>
        <View style={styles.chart}>
          <PieChart
            data={pieData}
            innerRadius={0.52}
            outerRadius={0.9}
            slice={{
              cornerRadius: 5,
              strokeColor: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Typography.Title5>Multiple series</Typography.Title5>
        <Typography.Master color="#64748b">
          Independently normalized series rendered as concentric rings
        </Typography.Master>
        <View style={styles.chart}>
          <MultiPieChart
            series={multiPieSeries}
            innerRadius={0.5}
            padAngle={1}
            ringPadding={4}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  card: {
    padding: 16,
    gap: 4,
    backgroundColor: "white",
    borderColor: "#e2e8f0",
    borderRadius: 12,
    borderWidth: 1,
  },
  chart: {
    height: 240,
    width: "100%",
    marginTop: 8,
  },
});
