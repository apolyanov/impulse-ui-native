import { useCanvasRef, useCanvasSize } from "@shopify/react-native-skia";

export function useChartCanvas() {
  const ref = useCanvasRef();
  const { size } = useCanvasSize(ref);

  return { ref, size };
}
