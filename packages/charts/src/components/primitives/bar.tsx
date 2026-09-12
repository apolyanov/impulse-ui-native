import { Group, RoundedRect } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  BarDefaultColor,
  BarDefaultOpacity,
  BarDefaultRadius,
} from "../../constants";
import { BarProps, ChartXValue } from "../../types";

export const Bar = memo(function Bar<X extends ChartXValue = string>(
  props: BarProps<X>,
) {
  const {
    color = BarDefaultColor,
    coordinates,
    opacity = BarDefaultOpacity,
    radius = BarDefaultRadius,
    visible = true,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {coordinates.map((coordinate) => {
        const resolvedRadius = Math.min(
          Math.max(0, radius),
          coordinate.width / 2,
          coordinate.height / 2,
        );

        return coordinate.height > 0 ? (
          <RoundedRect
            key={coordinate.index}
            x={coordinate.x}
            y={coordinate.y}
            width={coordinate.width}
            height={coordinate.height}
            r={resolvedRadius}
            color={color}
            opacity={opacity}
          />
        ) : null;
      })}
    </Group>
  );
});
