import { createPreset } from "../hocs";

export const Typography = {
  Master: createPreset({ fontFamily: "Montserrat_400Regular" }, "Master"),

  DisplayLarge: createPreset(
    {
      fontFamily: "Montserrat_700Bold",
      fontSize: 56,
      lineHeight: 64,
    },
    "DisplayLarge"
  ),

  DisplayMedium: createPreset(
    {
      fontFamily: "Montserrat_700Bold",
      fontSize: 48,
      lineHeight: 56,
    },
    "DisplayMedium"
  ),

  DisplaySmall: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 36,
      lineHeight: 44,
    },
    "DisplaySmall"
  ),

  Title1: createPreset(
    {
      fontFamily: "Montserrat_700Bold",
      fontSize: 32,
      lineHeight: 40,
    },
    "Title1"
  ),

  Title2: createPreset(
    {
      fontFamily: "Montserrat_700Bold",
      fontSize: 28,
      lineHeight: 36,
    },
    "Title2"
  ),

  Title3: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 24,
      lineHeight: 32,
    },
    "Title3"
  ),

  Title4: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 20,
      lineHeight: 28,
    },
    "Title4"
  ),

  Title5: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 18,
      lineHeight: 26,
    },
    "Title5"
  ),

  Title6: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 16,
      lineHeight: 24,
    },
    "Title6"
  ),

  Subtitle1: createPreset(
    {
      fontFamily: "Montserrat_500Medium",
      fontSize: 18,
      lineHeight: 28,
    },
    "Subtitle1"
  ),

  Subtitle2: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 16,
      lineHeight: 24,
    },
    "Subtitle2"
  ),

  BodyLarge: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 18,
      lineHeight: 28,
    },
    "BodyLarge"
  ),

  Body: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 16,
      lineHeight: 24,
    },
    "Body"
  ),

  BodySmall: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 14,
      lineHeight: 20,
    },
    "BodySmall"
  ),

  Caption: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 12,
      lineHeight: 16,
    },
    "Caption"
  ),

  Label: createPreset(
    {
      fontFamily: "Montserrat_500Medium",
      fontSize: 14,
      lineHeight: 20,
    },
    "Label"
  ),

  Overline: createPreset(
    {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 12,
      lineHeight: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    "Overline"
  ),

  Helper: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 14,
      lineHeight: 20,
    },
    "Helper"
  ),

  Code: createPreset(
    {
      fontFamily: "monospace",
      fontSize: 14,
      lineHeight: 20,
    },
    "Code"
  ),

  Quote: createPreset(
    {
      fontFamily: "Montserrat_400Regular",
      fontSize: 18,
      lineHeight: 28,
      fontStyle: "italic",
    },
    "Quote"
  ),

  Eyebrow: createPreset(
    {
      fontFamily: "Montserrat_500Medium",
      fontSize: 12,
      lineHeight: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    "Eyebrow"
  ),
};
