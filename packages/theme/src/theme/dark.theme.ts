import { PrimitiveThemeTokens } from "../types";
import {
  BorderSizeTokens,
  DarkColors,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LetterSpacingTokens,
  LineHeightTokens,
  RadiiTokens,
  SpaceTokens,
} from "./tokens.theme";

export const DarkTheme: PrimitiveThemeTokens = {
  colors: DarkColors,
  space: SpaceTokens,
  radii: RadiiTokens,
  fontFamily: FontFamilyTokens,
  borderSize: BorderSizeTokens,
  fontSize: FontSizeTokens,
  fontWeight: FontWeightTokens,
  lineHeight: LineHeightTokens,
  letterSpacing: LetterSpacingTokens,
};
