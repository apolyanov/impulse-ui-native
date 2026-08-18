import { useMemo } from "react";
import * as d3Array from "d3-array";
import * as d3Scale from "d3-scale";

import { CartesianChartValues, CartesianDataPoint, XScaleType } from "../types";

interface UseLineChartProps {
  width: number;
  height: number;
  xScaleType: XScaleType;
  data: CartesianDataPoint[];
}

export function useLineChart(props: UseLineChartProps) {
  const values = useMemo(
    () =>
      props.data.reduce<CartesianChartValues>(
        (acc, value) => {
          acc.yValues.push(value.y);
          acc.xValues.push(value.x);

          return acc;
        },
        { yValues: [], xValues: [] },
      ),
    [props.data],
  );

  const { max } = useMemo(() => {
    const [min = 0, max = 0] = d3Array.extent(values.yValues);

    return {
      min,
      max,
    };
  }, [values.yValues]);

  const y = useMemo(
    () => d3Scale.scaleLinear().domain([0, max]).range([props.height, 0]),
    [max, props.height],
  );

  const x = useMemo(() => {
    switch (props.xScaleType) {
      case "point":
        return d3Scale
          .scalePoint<number | string>()
          .domain(values.xValues)
          .range([0, props.width]);
      case "linear":
        const domain = d3Array.extent(values.xValues as number[]);

        return d3Scale
          .scaleLinear()
          .domain([domain[0] ?? 0, domain[1] ?? 1])
          .range([0, props.width]);
      case "time":
        return d3Scale.scaleTime().domain([]).range([0, props.width]);
    }
  }, [props.width, props.xScaleType]);
}
