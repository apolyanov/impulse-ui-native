import { useMemo } from "react";
import { useCanvasRef, useCanvasSize } from "react-native-skia";

export function useChartCanvas() {
  const ref = useCanvasRef();
  const { size, onLayout } = useCanvasSize();

  return useMemo(() => ({ ref, size, onLayout }), [ref, size, onLayout]);
}
