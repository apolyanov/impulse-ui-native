import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { BorderSize } from "../types";

export function useBorder(): BorderSize {
  const context = useThemeContext();

  return useMemo(() => context.borderSize, [context.borderSize]);
}
