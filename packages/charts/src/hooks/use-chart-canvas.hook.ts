import type { LayoutChangeEvent } from "react-native";
import { useMemo, useState } from "react";
import { useCanvasRef, useCanvasSize } from "@shopify/react-native-skia";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ChartSize } from "../types";

export function useChartCanvas() {
  const [layoutSize, setLayoutSize] = useState<ChartSize | null>(null);
  const ref = useCanvasRef();
  const { size: initialSize } = useCanvasSize(ref);
  const size = layoutSize ?? initialSize;

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    setLayoutSize((previous) =>
      previous?.width === width && previous.height === height
        ? previous
        : { width, height },
    );
  });

  return useMemo(() => ({ ref, size, onLayout }), [ref, size, onLayout]);
}
