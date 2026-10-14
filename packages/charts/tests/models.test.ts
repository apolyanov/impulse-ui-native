import assert from "node:assert/strict";
import { test } from "node:test";

import {
  createChartsTokens,
  createComponentsTokens,
  LightTheme,
} from "@impulse-ui-native/theme";

import { formatAxisTick } from "../src/utils/axis.util";
import { createBarChartModel } from "../src/utils/bar-chart.util";
import { createStackedBarDomainData } from "../src/utils/bar-stack.util";
import { getChartColor } from "../src/utils/chart-color.util";
import { updateChartGestureState } from "../src/utils/chart-gesture.util";
import {
  createBarChartHitTargets,
  createLineChartHitTargets,
  createPieChartHitTargets,
  findChartHitTarget,
} from "../src/utils/chart-interaction.util";
import {
  createChartLayout,
  createChartStrokeClip,
} from "../src/utils/chart-layout.util";
import {
  createChartHitIndex,
  getChartSelectedTargets,
} from "../src/utils/chart-selection.util";
import { resolveChartLabelTokens } from "../src/utils/chart-theme.util";
import {
  getChartTickCount,
  selectChartTicks,
} from "../src/utils/chart-ticks.util";
import {
  createLineChartCoordinates,
  createLineChartModel,
  createLineChartScaleModel,
} from "../src/utils/line-chart.util";
import { getIsolatedLineCoordinates } from "../src/utils/line-coordinates.util";
import { createMultiBarChartModel } from "../src/utils/multi-bar-chart.util";
import { createDrawableMultiLineChartSeries } from "../src/utils/multi-line-chart.util";
import { createMultiPieChartModel } from "../src/utils/multi-pie-chart.util";
import { createPieChartModel } from "../src/utils/pie-chart.util";

const plot = { x: 32, y: 32, width: 200, height: 100 };
const palette = ["red", "green", "blue"];

test("line scales infer categorical, numeric and date data", () => {
  for (const values of [
    ["Mon", "Tue"],
    [1, 2],
    [new Date(0), new Date(1000)],
  ]) {
    const model = createLineChartModel({
      plot,
      data: values.map((x) => ({ x, y: 10 })),
    });

    assert.ok(
      model.coordinates.every((point) => point.x !== null && point.y !== null),
    );
    assert.ok(model.yDomain[0] < model.yDomain[1]);
  }
});

test("line models handle empty, all-null, single-point and invalid data", () => {
  assert.deepEqual(createLineChartModel({ plot, data: [] }).coordinates, []);
  const nulls = createLineChartModel({ plot, data: [{ x: 1, y: null }] });
  assert.equal(nulls.coordinates[0]?.y, null);
  const single = createLineChartModel({ plot, data: [{ x: 5, y: 10 }] });
  assert.ok(single.xDomain[0]! < single.xDomain[1]!);
  assert.ok(Number.isFinite(single.coordinates[0]?.x));
  const invalid = createLineChartModel({
    plot,
    data: [
      { x: NaN, y: Infinity },
      { x: 2, y: 3 },
    ],
  });
  assert.equal(invalid.coordinates[0]?.x, null);
  assert.equal(invalid.coordinates[0]?.y, null);
});

test("single dates receive a usable time domain", () => {
  const model = createLineChartModel({
    plot,
    data: [{ x: new Date(5000), y: 1 }],
  });
  assert.ok(model.xDomain[0]!.getTime() < model.xDomain[1]!.getTime());
});

test("custom numeric domains preserve bounds and repair invalid or collapsed domains", () => {
  const data = [{ x: 1, y: 4 }];
  assert.deepEqual(
    createLineChartModel({ plot, data, yAxis: { domain: [2, 6] } }).yDomain,
    [2, 6],
  );
  assert.deepEqual(
    createLineChartModel({ plot, data, yAxis: { domain: [NaN, 6] } }).yDomain,
    [0, 1],
  );
  const model = createLineChartModel({ plot, data, yAxis: { domain: [4, 4] } });
  assert.ok(model.yDomain[0] < model.yDomain[1]);
});

test("null values retain gaps and multi-series coordinates share one scale", () => {
  const data = [
    { x: 0, y: 0 },
    { x: 5, y: null },
    { x: 10, y: 10 },
  ];
  const scale = createLineChartScaleModel({ plot, data });
  const coordinates = createLineChartCoordinates(
    data,
    scale.xScale,
    scale.yScale,
  );
  assert.equal(coordinates[1]?.y, null);
  const series = { id: "one", data, coordinates };
  const thin = createDrawableMultiLineChartSeries(
    { ...series, line: { width: 2 } },
    0,
    plot,
  );
  const thick = createDrawableMultiLineChartSeries(
    { ...series, line: { width: 20 } },
    1,
    plot,
  );
  assert.deepEqual(thin.coordinates, thick.coordinates);
  assert.equal(thick.coordinates[0]?.x, scale.xScale(0));
  const clip = createChartStrokeClip(plot, 20, { width: 300, height: 200 });
  assert.equal(clip.x, plot.x - 10);
});

test("selection clipping contains the full stroked dots at every plot corner", () => {
  const tokens = createChartsTokens(LightTheme);
  const radius = tokens.selection!.radius;
  const width = tokens.selection!.width;
  const extent = radius + width / 2;
  const size = { width: 300, height: 200 };
  const clip = createChartStrokeClip(plot, radius * 2 + width, size);

  for (const x of [plot.x, plot.x + plot.width]) {
    for (const y of [plot.y, plot.y + plot.height]) {
      assert.ok(clip.x <= x - extent);
      assert.ok(clip.y <= y - extent);
      assert.ok(clip.x + clip.width >= x + extent);
      assert.ok(clip.y + clip.height >= y + extent);
    }
  }

  const canvasClip = createChartStrokeClip(
    { x: 0, y: 0, ...size },
    radius * 2 + width,
    size,
  );
  assert.deepEqual(canvasClip, { x: 0, y: 0, ...size });
});

test("bars include zero, skip invalid values and share equivalent Date categories", () => {
  const model = createBarChartModel({
    plot,
    data: [
      { x: new Date(0), y: 2 },
      { x: new Date(0), y: 4 },
      { x: new Date(1), y: null },
      { x: new Date(NaN), y: 5 },
    ],
  });
  assert.equal(model.xDomain.length, 2);
  assert.equal(model.coordinates.length, 2);
  assert.equal(model.yDomain[0], 0);
});

test("horizontal bars map categories vertically and values horizontally", () => {
  const model = createBarChartModel({
    plot,
    orientation: "horizontal",
    data: [
      { x: "A", y: -5 },
      { x: "B", y: 5 },
    ],
    yAxis: { domain: [-5, 5] },
  });
  assert.equal(model.coordinates[0]?.x, plot.x);
  assert.equal(model.coordinates[0]?.width, plot.width / 2);
  assert.equal(model.coordinates[1]?.x, plot.x + plot.width / 2);
  assert.ok(model.coordinates[0]!.y < model.coordinates[1]!.y);
});

test("grouped bars align reordered and missing categories", () => {
  const model = createMultiBarChartModel({
    plot,
    series: [
      {
        id: "a",
        data: [
          { x: "A", y: 2 },
          { x: "B", y: 3 },
        ],
      },
      { id: "b", data: [{ x: "B", y: 4 }] },
    ],
  });
  const first = model.series[0]!.coordinates[1]!;
  const second = model.series[1]!.coordinates[0]!;
  assert.ok(second.x > first.x);
  assert.ok(second.x < first.x + model.bandwidth);
});

test("stacked bars use separate positive and negative accumulators", () => {
  const series = [
    {
      id: "a",
      data: [
        { x: "A", y: 2 },
        { x: "B", y: -3 },
      ],
    },
    {
      id: "b",
      data: [
        { x: "A", y: 4 },
        { x: "B", y: -5 },
      ],
    },
  ];
  for (const orientation of ["vertical", "horizontal"] as const) {
    const model = createMultiBarChartModel({
      plot,
      series,
      mode: "stacked",
      orientation,
    });
    assert.ok(model.yDomain[0] <= -8 && model.yDomain[1] >= 6);
    const first = model.series[0]!.coordinates[0]!;
    const second = model.series[1]!.coordinates[0]!;

    if (orientation === "vertical") {
      assert.equal(first.x, second.x);
      assert.ok(Math.abs(second.y + second.height - first.y) < 1e-8);
    } else {
      assert.equal(first.y, second.y);
      assert.ok(Math.abs(first.x + first.width - second.x) < 1e-8);
    }
  }
});

test("pie models ignore invalid values, preserve source indices and avoid overflow", () => {
  const model = createPieChartModel({
    plot,
    data: [
      { id: "a", value: 0 },
      { id: "b", value: 2 },
      { id: "c", value: -1 },
      { id: "d", value: Infinity },
    ],
  });
  assert.equal(model.coordinates.length, 1);
  assert.equal(model.coordinates[0]?.index, 1);
  const large = createPieChartModel({
    plot,
    data: [
      { id: "a", value: 1e308 },
      { id: "b", value: 1e308 },
    ],
  });
  assert.ok(Number.isFinite(large.total));
  assert.ok(Math.abs(large.coordinates[0]!.endAngle - Math.PI) < 1e-8);
  assert.ok(Math.abs(large.coordinates[1]!.endAngle - Math.PI * 2) < 1e-8);
});

test("pie colors remain stable across filtering, reordering and rings", () => {
  const first = createPieChartModel({
    plot,
    data: [
      { id: "a", value: 1 },
      { id: "b", value: 2 },
    ],
  });
  const second = createPieChartModel({
    plot,
    data: [
      { id: "b", value: 2 },
      { id: "a", value: 0 },
    ],
  });
  const color = createPieChartHitTargets(first.coordinates, palette).find(
    (target) => target.arc?.datum.id === "b",
  )!.color;
  assert.equal(
    createPieChartHitTargets(second.coordinates, palette)[0]?.color,
    color,
  );
  assert.equal(getChartColor("b", palette), color);
});

test("concentric rings normalize independently and clamp excessive spacing", () => {
  const model = createMultiPieChartModel({
    plot,
    ringPadding: 1000,
    innerRadius: 0.25,
    series: [
      { id: "a", data: [{ id: "x", value: 1 }] },
      { id: "b", data: [{ id: "x", value: 100 }] },
    ],
  });
  assert.equal(model.series[0]?.coordinates[0]?.endAngle, Math.PI * 2);
  assert.equal(model.series[1]?.coordinates[0]?.endAngle, Math.PI * 2);
  assert.ok(
    model.series.every((series) =>
      series.coordinates.every((arc) => arc.innerRadius <= arc.outerRadius),
    ),
  );
});

test("hit testing handles bars, line gaps, donut holes and points outside the plot", () => {
  const bars = createBarChartModel({ plot, data: [{ x: "A", y: 5 }] });
  const barTargets = createBarChartHitTargets(bars.coordinates, "red");
  assert.equal(
    findChartHitTarget(barTargets[0]!, barTargets, plot),
    barTargets[0],
  );
  assert.equal(findChartHitTarget({ x: -1, y: 50 }, barTargets, plot), null);
  const lines = createLineChartModel({
    plot,
    data: [
      { x: 0, y: null },
      { x: 1, y: 1 },
    ],
  });
  assert.equal(createLineChartHitTargets(lines.coordinates, "red").length, 1);
  const pie = createPieChartModel({
    plot,
    innerRadius: 0.5,
    data: [{ id: "a", value: 1 }],
  });
  const targets = createPieChartHitTargets(pie.coordinates, palette);
  assert.equal(
    findChartHitTarget(pie.coordinates[0]!.center, targets, plot),
    null,
  );
  assert.equal(findChartHitTarget(targets[0]!, targets, plot), targets[0]);
});

test("invalid X measurements do not distort inferred numeric domains", () => {
  const data = [
    { x: NaN, y: 1000 },
    { x: 2, y: 3 },
  ];
  const line = createLineChartModel({ plot, data });
  const bar = createBarChartModel({ plot, data });
  assert.ok(line.yDomain[1] < 1000);
  assert.ok(bar.yDomain[1] < 1000);
});

test("partially clipped bars remain selectable with an anchor inside the plot", () => {
  const model = createBarChartModel({
    plot,
    data: [{ x: "A", y: 100 }],
    yAxis: { domain: [0, 10] },
  });
  const targets = createBarChartHitTargets(
    model.coordinates,
    "red",
    undefined,
    undefined,
    plot,
  );
  assert.equal(targets.length, 1);
  assert.ok(targets[0]!.y >= plot.y && targets[0]!.y <= plot.y + plot.height);
  assert.equal(findChartHitTarget(targets[0]!, targets, plot), targets[0]);
});

test("rotated and reversed pie arcs select their visible sectors", () => {
  for (const [startAngle, endAngle] of [
    [90, 270],
    [270, 90],
  ]) {
    const model = createPieChartModel({
      plot,
      startAngle,
      endAngle,
      data: [
        { id: "a", value: 1 },
        { id: "b", value: 1 },
      ],
    });
    const targets = createPieChartHitTargets(model.coordinates, palette);

    for (const target of targets) {
      assert.equal(findChartHitTarget(target, targets, plot), target);
    }
  }
});

test("pie angular gaps and concentric ring spaces clear selection", () => {
  const model = createPieChartModel({
    plot,
    padAngle: 10,
    data: [
      { id: "a", value: 1 },
      { id: "b", value: 1 },
    ],
  });
  const targets = createPieChartHitTargets(model.coordinates, palette);
  const arc = model.coordinates[0]!;
  assert.equal(
    findChartHitTarget(
      { x: arc.center.x, y: arc.center.y - arc.outerRadius * 0.8 },
      targets,
      plot,
    ),
    null,
  );
  const rings = createMultiPieChartModel({
    plot,
    ringPadding: 10,
    series: [
      { id: "a", data: [{ id: "x", value: 1 }] },
      { id: "b", data: [{ id: "x", value: 1 }] },
    ],
  });
  const ringTargets = rings.series.flatMap((series) =>
    createPieChartHitTargets(series.coordinates, palette, series.id),
  );
  const outer = rings.series[0]!.coordinates[0]!;
  const inner = rings.series[1]!.coordinates[0]!;
  const radius = (outer.innerRadius + inner.outerRadius) / 2;
  assert.equal(
    findChartHitTarget(
      { x: outer.center.x + radius, y: outer.center.y },
      ringTargets,
      plot,
    ),
    null,
  );
});

test("series styling follows IDs instead of positions", () => {
  const model = createLineChartModel({ plot, data: [{ x: 0, y: 1 }] });
  const series = {
    id: "stable",
    data: [{ x: 0, y: 1 }],
    coordinates: model.coordinates,
  };
  assert.equal(
    createDrawableMultiLineChartSeries(series, 0, plot).line?.color,
    createDrawableMultiLineChartSeries(series, 7, plot).line?.color,
  );
  assert.equal(getChartColor("stable", []), "transparent");
});

test("single points and isolated measurements get explicit drawable markers", () => {
  const data = [
    { x: 0, y: 2 },
    { x: 1, y: null },
    { x: 2, y: 3 },
    { x: 3, y: 4 },
  ];
  const model = createLineChartModel({ plot, data });
  assert.deepEqual(
    getIsolatedLineCoordinates(model.coordinates).map(
      (coordinate) => coordinate.index,
    ),
    [0],
  );
  const single = createLineChartModel({ plot, data: [{ x: 1, y: 2 }] });
  assert.equal(getIsolatedLineCoordinates(single.coordinates).length, 1);
});

test("chart typography and radii share theme defaults and support legacy token objects", () => {
  const theme = {
    ...LightTheme,
    components: createComponentsTokens(LightTheme),
  };
  const tokens = theme.components.charts;
  const typography = resolveChartLabelTokens(theme);
  assert.equal(
    typography.fontFamily,
    theme.fontFamily.normal[theme.fontWeight.regular],
  );
  assert.equal(typography.fontSize, theme.fontSize.xs);
  assert.equal(tokens.bar.radius, tokens.pie.cornerRadius);
  assert.equal(tokens.bar.radius, theme.radii.sm);
  const legacy = {
    ...theme,
    components: {
      ...theme.components,
      charts: { ...tokens, label: undefined },
    },
  };
  assert.deepEqual(resolveChartLabelTokens(legacy), typography);
  const custom = {
    ...tokens.label!,
    fontSize: 18,
    fontFamily: "BrandFont",
    color: "#123456",
  };
  assert.equal(
    resolveChartLabelTokens({
      ...theme,
      components: { ...theme.components, charts: { ...tokens, label: custom } },
    }),
    custom,
  );
});

test("partial chart token overrides preserve the shared appearance contract", () => {
  const custom = createChartsTokens({
    ...LightTheme,
    fontSize: { ...LightTheme.fontSize, xs: 18 },
    space: { ...LightTheme.space, xs: 10 },
  });
  assert.equal(custom.label?.fontSize, 18);
  assert.equal(custom.legend?.gap, 10);
  assert.equal(custom.tooltip?.offset, 10);
  assert.equal(custom.selection?.width, LightTheme.borderSize.md);
});

test("line and bar categories use the same tick thinning policy", () => {
  const data = ["A", "B", "C", "D", "E"].map((x, index) => ({
    x,
    y: index + 1,
  }));
  const line = createLineChartModel({ plot, data, xAxis: { tickCount: 3 } });
  const bar = createBarChartModel({ plot, data, xAxis: { tickCount: 3 } });
  assert.deepEqual(line.xTicks, bar.xTicks);
  assert.deepEqual(line.xTicks, ["A", "C", "E"]);
  assert.equal(getChartTickCount(NaN), 5);
  assert.equal(getChartTickCount(-2), 0);
  assert.deepEqual(selectChartTicks(["A", "B"], 1), ["A"]);
});

test("shared numeric scales keep extreme finite data drawable", () => {
  const data = [
    { x: -1e308, y: -1e308 },
    { x: 0, y: 0 },
    { x: 1e308, y: 1e308 },
  ];
  const line = createLineChartModel({
    plot,
    data,
    yAxis: { domain: [-1e308, 1e308] },
  });
  assert.ok(
    line.coordinates.every(
      (coordinate) =>
        Number.isFinite(coordinate.x) && Number.isFinite(coordinate.y),
    ),
  );
  assert.equal(line.xScale(0), plot.x + plot.width / 2);
  assert.equal(line.yScale(0), plot.y + plot.height / 2);
  const bar = createBarChartModel({ plot, data });
  assert.ok(
    bar.coordinates.every((coordinate) => Number.isFinite(coordinate.height)),
  );
  assert.ok(line.xTicks.every(Number.isFinite));
  assert.ok(bar.yTicks.every(Number.isFinite));
});

test("stacked domain data scales with unique categories and retains null categories", () => {
  const data = Array.from({ length: 1000 }, (_, index) => ({
    x: index % 2 ? "A" : "B",
    y: 1,
  }));
  const domain = createStackedBarDomainData([...data, { x: "C", y: null }]);
  assert.equal(domain.length, 6);
  assert.equal(
    domain.find((datum) => datum.x === "A" && datum.y !== 0)?.y,
    500,
  );
  assert.equal(domain.filter((datum) => datum.x === "C").length, 2);
});

test("shared chart layouts fit tiny and invalid measured containers", () => {
  const layout = createChartLayout(
    { width: 20, height: 10 },
    {},
    { left: 32, right: 32, top: 32, bottom: 32 },
  );
  assert.equal(layout.plot.width, 0);
  assert.equal(layout.plot.height, 0);
  assert.ok(
    layout.plot.x <= layout.size.width && layout.plot.y <= layout.size.height,
  );
  const invalid = createChartLayout(
    { width: NaN, height: -1 },
    { left: Infinity, top: -1 },
  );
  assert.deepEqual(invalid.plot, { x: 0, y: 0, width: 0, height: 0 });
});

test("indexed selection groups shared categories and rejects hidden or off-plot selections", () => {
  const model = createLineChartModel({
    plot,
    data: [
      { x: "A", y: 2 },
      { x: "B", y: 3 },
    ],
  });
  const first = createLineChartHitTargets(model.coordinates, "red", "first");
  const second = createLineChartHitTargets(model.coordinates, "blue", "second");
  const index = createChartHitIndex([...first, ...second], plot);
  assert.equal(
    getChartSelectedTargets(index, { seriesId: "second", datumIndex: 0 })
      .length,
    2,
  );
  assert.deepEqual(
    getChartSelectedTargets(index, { seriesId: "missing", datumIndex: 0 }),
    [],
  );
  assert.equal(
    createChartHitIndex(first, { ...plot, width: 0 }).visibleCount,
    0,
  );
  assert.equal(
    createChartHitIndex([{ ...first[0]!, x: -1 }], plot).visibleCount,
    0,
  );
});

test("axes and tooltips share date and custom category formatting", () => {
  const date = new Date("2026-01-01T12:00:00Z");
  const line = createLineChartModel({ plot, data: [{ x: date, y: 2 }] });
  assert.equal(
    createLineChartHitTargets(line.coordinates, "red")[0]?.label,
    formatAxisTick(date),
  );
  assert.equal(formatAxisTick(date), "2026-01-01");
  assert.equal(formatAxisTick(new Date(NaN)), "Invalid Date");
  const format = (value: Date) => "Day " + value.getUTCDate();
  assert.equal(
    createLineChartHitTargets(
      line.coordinates,
      "red",
      undefined,
      undefined,
      format,
    )[0]?.label,
    formatAxisTick(date, format),
  );
  const bar = createBarChartModel({ plot, data: [{ x: "A", y: 2 }] });
  assert.equal(
    createBarChartHitTargets(
      bar.coordinates,
      "red",
      undefined,
      undefined,
      plot,
      (value) => "Category " + value,
    )[0]?.label,
    "Category A",
  );
});

test("chart gestures distinguish empty taps from drags through gaps", () => {
  const bars = createBarChartModel({
    plot,
    data: [
      { x: "A", y: 5 },
      { x: "B", y: 8 },
    ],
  });
  const targets = createBarChartHitTargets(bars.coordinates, "red");
  const first = targets[0]!;
  const last = targets[1]!;
  const gap = { x: plot.x + plot.width / 2, y: plot.y + plot.height / 2 };
  const empty = { x: plot.x - 1, y: plot.y - 1 };
  const hit = (point: { x: number; y: number }) =>
    findChartHitTarget(point, targets, plot) !== null;

  let gesture = updateChartGestureState(null, first, hit(first));
  gesture = updateChartGestureState(gesture, gap, hit(gap));
  assert.equal(gesture.hasHit, true);
  assert.equal(gesture.dragged, true);
  gesture = updateChartGestureState(gesture, last, hit(last));
  gesture = updateChartGestureState(gesture, empty, hit(empty));
  assert.equal(gesture.hasHit, true);

  const tap = updateChartGestureState(null, empty, hit(empty));
  assert.equal(tap.hasHit, false);
  assert.equal(tap.dragged, false);
  const slightMove = updateChartGestureState(
    tap,
    { x: empty.x + 2, y: empty.y + 2 },
    false,
  );
  assert.equal(slightMove.dragged, false);

  let emptyDrag = updateChartGestureState(
    tap,
    { x: empty.x + 20, y: empty.y },
    false,
  );
  emptyDrag = updateChartGestureState(emptyDrag, empty, false);
  assert.equal(emptyDrag.hasHit, false);
  assert.equal(emptyDrag.dragged, true);
});

test("pie gesture remembers a hit across donut holes and ring gaps", () => {
  const model = createMultiPieChartModel({
    plot,
    innerRadius: 0.25,
    ringPadding: 10,
    series: [
      { id: "a", data: [{ id: "x", value: 1 }] },
      { id: "b", data: [{ id: "x", value: 1 }] },
    ],
  });
  const targets = model.series.flatMap((series) =>
    createPieChartHitTargets(series.coordinates, palette, series.id),
  );
  const first = targets[0]!;
  const center = model.series[0]!.coordinates[0]!.center;
  const gesture = updateChartGestureState(
    updateChartGestureState(null, first, true),
    center,
    findChartHitTarget(center, targets, plot) !== null,
  );
  assert.equal(gesture.hasHit, true);
  assert.equal(gesture.dragged, true);
});
