import { useThemeContext } from "../providers";
import { Space } from "../types";

export function useSpace(): Space {
  const context = useThemeContext();

  return context.space;
}
