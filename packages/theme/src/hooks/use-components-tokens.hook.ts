import { useMemo } from "react";

import { useThemeContext } from "../providers";

export function useComponentsTokens() {
  const context = useThemeContext();

  return useMemo(() => context.components, [context.components]);
}
