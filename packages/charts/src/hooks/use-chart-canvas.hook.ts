import { useMemo } from "react";
import { useCanvasRef, useCanvasSize } from "@shopify/react-native-skia";

export function useChartCanvas() {
  const ref = useCanvasRef();
  const { size } = useCanvasSize(ref);

  return useMemo(() => ({ ref, size }), [ref, size]);
}
