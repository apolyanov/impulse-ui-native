import { ShadowScale } from "../constants";
import { PrimitiveThemeTokens } from "../types";
import {
  BorderSizeTokens,
  CodeFontFamilyToken,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LetterSpacingTokens,
  LightColors,
  LineHeightTokens,
  RadiiTokens,
  SpaceTokens,
} from "./tokens.theme";

export const LightTheme: PrimitiveThemeTokens = {
  shadows: ShadowScale,
  codeFontFamily: CodeFontFamilyToken,
  colors: LightColors,
  space: SpaceTokens,
  radii: RadiiTokens,
  fontFamily: FontFamilyTokens,
  borderSize: BorderSizeTokens,
  fontSize: FontSizeTokens,
  fontWeight: FontWeightTokens,
  lineHeight: LineHeightTokens,
  letterSpacing: LetterSpacingTokens,
};
