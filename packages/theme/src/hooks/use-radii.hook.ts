import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { Radii } from "../types";

export function useRadii(): Radii {
  const context = useThemeContext();

  return useMemo(() => context.radii, [context.radii]);
}
