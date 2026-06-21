import { TextStyle } from "react-native";

import { FontWeightValue } from "./tokens.types";

export interface TypographyProps {
  fontSize?: TextStyle["fontSize"];
  fontFamily?: TextStyle["fontFamily"];
  fontWeight?: FontWeightValue;
  fontVariant?: TextStyle["fontVariant"];
  fontStyle?: TextStyle["fontStyle"];
  letterSpacing?: TextStyle["letterSpacing"];
  lineHeight?: TextStyle["lineHeight"];
  textAlign?: TextStyle["textAlign"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textDecorationColor?: TextStyle["textDecorationColor"];
  textTransform?: TextStyle["textTransform"];
  includeFontPadding?: TextStyle["includeFontPadding"]; // Android only
  textAlignVertical?: TextStyle["textAlignVertical"]; // Android only
  writingDirection?: TextStyle["writingDirection"];
}

export type TypographyPresetKey =
  | "Master"
  | "DisplayLarge"
  | "DisplayMedium"
  | "DisplaySmall"
  | "Title1"
  | "Title2"
  | "Title3"
  | "Title4"
  | "Title5"
  | "Title6"
  | "Subtitle1"
  | "Subtitle2"
  | "BodyLarge"
  | "Body"
  | "BodySmall"
  | "Caption"
  | "Label"
  | "Overline"
  | "Helper"
  | "Code"
  | "Quote"
  | "Eyebrow";
