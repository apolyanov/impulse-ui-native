import { DeepPartial } from "@impulse-ui-native/core";
import { useMemo } from "react";

import { useThemeContext } from "../providers";
import { ComponentsThemes } from "../types";

export function useComponentsTheme():
  | DeepPartial<ComponentsThemes>
  | undefined {
  const context = useThemeContext();

  return useMemo(() => context.components, [context.components]);
}
