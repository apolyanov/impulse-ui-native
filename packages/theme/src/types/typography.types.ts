import { TextStyle } from "react-native";

export type TypographyProps = {
  fontSize?: TextStyle["fontSize"];
  fontFamily?: TextStyle["fontFamily"];
  fontWeight?: FontWeightKey;
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
};

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

export type FontWeightNormal =
  | "Montserrat_100Thin"
  | "Montserrat_200ExtraLight"
  | "Montserrat_300Light"
  | "Montserrat_400Regular"
  | "Montserrat_500Medium"
  | "Montserrat_600SemiBold"
  | "Montserrat_700Bold"
  | "Montserrat_800ExtraBold"
  | "Montserrat_900Black";

export type FontWeightItalic =
  | "Montserrat_100Thin_Italic"
  | "Montserrat_200ExtraLight_Italic"
  | "Montserrat_300Light_Italic"
  | "Montserrat_400Regular_Italic"
  | "Montserrat_500Medium_Italic"
  | "Montserrat_600SemiBold_Italic"
  | "Montserrat_700Bold_Italic"
  | "Montserrat_800ExtraBold_Italic"
  | "Montserrat_900Black_Italic";

export type FontWeightKey = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
