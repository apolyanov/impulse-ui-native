import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { Space } from "../types";

export function useSpace(): Space {
  const context = useThemeContext();

  return useMemo(() => context.theme.spacing, [context.theme.spacing]);
}
