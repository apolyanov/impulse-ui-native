import { useThemeContext } from "../providers";

export function useComponentsTokens() {
  const context = useThemeContext();

  return context.components;
}
