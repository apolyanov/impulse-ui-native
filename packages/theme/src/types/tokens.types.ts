import { DimensionValue } from "react-native";

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

export type FontWeightValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type SpaceSizesKey =
  | "none"
  | "xxs"
  | "xs"
  | "mxs"
  | "sm"
  | "msm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";
export type Space = Record<SpaceSizesKey, number>;

export type TypographyKey =
  | "xxs"
  | "xs"
  | "xsm"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | "huge"
  | "massive"
  | "giant"
  | "colossal";
export type FontSize = Record<TypographyKey, number>;
export type LineHeight = Record<TypographyKey, number>;

export type FontWeightKeys =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

export type FontFamily = Record<
  "normal" | "italic",
  Record<FontWeightValue, string>
>;

export type FontWeight = Record<FontWeightKeys, FontWeightValue>;

export type LetterSpacingKey =
  | "tightest"
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest"
  | "ultraWide";
export type LetterSpacings = Record<LetterSpacingKey, number>;

export type BorderSizeKey = "sm" | "md" | "lg" | "xl" | "xxl";
export type BorderSize = Record<BorderSizeKey, number>;

export type RadiusKey = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "round";
export type Radii = Record<RadiusKey, number>;

export type RadiusDrawnKey =
  | "drawn1"
  | "drawn2"
  | "drawn3"
  | "drawn4"
  | "drawn5"
  | "drawn6";
export type RadiiDrawn = Record<RadiusDrawnKey, string>;

export type RadiusBlobKey = "blob1" | "blob2" | "blob3" | "blob4" | "blob5";
export type RadiiBlob = Record<RadiusBlobKey, string>;

export type RadiusConditionalKey =
  | "conditional1"
  | "conditional2"
  | "conditional3"
  | "conditional4"
  | "conditional5"
  | "conditional6";
export type RadiiConditional = Record<RadiusConditionalKey, string>;

export type NeutralColorKey =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13";

export type NeutralColor = Record<NeutralColorKey, string>;
