import { createPreset } from "../hocs";

export const Typography = {
  Master: createPreset({ fontWeight: 400 }, "Master"),

  DisplayLarge: createPreset(
    {
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 64,
    },
    "DisplayLarge"
  ),

  DisplayMedium: createPreset(
    {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 56,
    },
    "DisplayMedium"
  ),

  DisplaySmall: createPreset(
    {
      fontWeight: 600,
      fontSize: 36,
      lineHeight: 44,
    },
    "DisplaySmall"
  ),

  Title1: createPreset(
    {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 40,
    },
    "Title1"
  ),

  Title2: createPreset(
    {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 36,
    },
    "Title2"
  ),

  Title3: createPreset(
    {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 32,
    },
    "Title3"
  ),

  Title4: createPreset(
    {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 28,
    },
    "Title4"
  ),

  Title5: createPreset(
    {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 26,
    },
    "Title5"
  ),

  Title6: createPreset(
    {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 24,
    },
    "Title6"
  ),

  Subtitle1: createPreset(
    {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 28,
    },
    "Subtitle1"
  ),

  Subtitle2: createPreset(
    {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
    },
    "Subtitle2"
  ),

  BodyLarge: createPreset(
    {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 28,
    },
    "BodyLarge"
  ),

  Body: createPreset(
    {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
    },
    "Body"
  ),

  BodySmall: createPreset(
    {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 20,
    },
    "BodySmall"
  ),

  Caption: createPreset(
    {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 16,
    },
    "Caption"
  ),

  Label: createPreset(
    {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 20,
    },
    "Label"
  ),

  Overline: createPreset(
    {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    "Overline"
  ),

  Helper: createPreset(
    {
      fontWeight: 400,
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
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 28,
      fontStyle: "italic",
    },
    "Quote"
  ),

  Eyebrow: createPreset(
    {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    "Eyebrow"
  ),
};
