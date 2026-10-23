import type { IconViewTokens, PrimitiveThemeTokens } from "../types";
import { createBadgeTokens } from "./create-badge-tokens";
import { createIconButtonTokens } from "./create-icon-button-tokens";

export function createIconViewTokens(
  tokens: PrimitiveThemeTokens,
): IconViewTokens {
  const badge = createBadgeTokens(tokens);
  const iconButton = createIconButtonTokens(tokens);

  return {
    borderRadius: iconButton.borderRadius,
    borderWidth: iconButton.borderWidth,
    sizes: iconButton.sizes,
    colors: badge.colors,
  };
}
