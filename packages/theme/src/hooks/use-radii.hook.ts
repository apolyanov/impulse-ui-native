import { useThemeContext } from "../providers";
import { Radii } from "../types";

export function useRadii(): Radii {
  const context = useThemeContext();

  return context.radii;
}
