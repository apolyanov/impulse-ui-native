import { memo } from "react";
import { Skia } from "@shopify/react-native-skia";
import * as d3Shape from "d3-shape";

import { Typography, View } from "@impulse-ui-native/primitives";

import { CartesianDataPoint } from "../types";

interface TestProps {
  data: CartesianDataPoint[];
}

export const Test = memo(function Test(props: TestProps) {
  console.log(props.data);
  const line = d3Shape
    .line<CartesianDataPoint>()
    .x((d) => d.x)
    .y((d) => d.y);

  console.log(Skia.Path.MakeFromSVGString(line(props.data)!));

  return (
    <View>
      <Typography.Body>TEST</Typography.Body>
    </View>
  );
});
