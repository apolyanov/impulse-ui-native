import { useMemo } from "react";
import { useThemeContext } from "../providers";
import { BorderSizes } from "../types";

export function useBorder(): BorderSizes {
  const context = useThemeContext();

  return useMemo(() => context.theme.borderSize, [context.theme.borderSize]);
}
