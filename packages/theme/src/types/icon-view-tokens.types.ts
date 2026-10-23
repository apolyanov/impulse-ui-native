import type { BadgeTokens } from "./badge-tokens.types";
import type { IconButtonTokens } from "./buttons-tokens.types";

export interface IconViewTokens {
  borderRadius: number;
  borderWidth: number;
  sizes: IconButtonTokens["sizes"];
  colors: BadgeTokens["colors"];
}
