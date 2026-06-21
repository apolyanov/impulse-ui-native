import { createPreset } from "../../hocs";

export const Typography = {
  Master: createPreset(
    (theme) => ({ fontWeight: theme.fontWeight.regular }),
    "Master",
  ),

  DisplayLarge: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.colossal,
      lineHeight: theme.lineHeight.colossal,
    }),
    "DisplayLarge",
  ),

  DisplayMedium: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.giant,
      lineHeight: theme.lineHeight.giant,
    }),
    "DisplayMedium",
  ),

  DisplaySmall: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.huge,
      lineHeight: theme.lineHeight.huge,
    }),
    "DisplaySmall",
  ),

  Title1: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.xxxl,
      lineHeight: theme.lineHeight.xxxl,
    }),
    "Title1",
  ),

  Title2: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.xxl,
      lineHeight: theme.lineHeight.xxl,
    }),
    "Title2",
  ),

  Title3: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.xl,
      lineHeight: theme.lineHeight.xl,
    }),
    "Title3",
  ),

  Title4: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.lg,
      lineHeight: theme.lineHeight.lg,
    }),
    "Title4",
  ),

  Title5: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.md,
    }),
    "Title5",
  ),

  Title6: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Title6",
  ),

  Subtitle1: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
    }),
    "Subtitle1",
  ),

  Subtitle2: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Subtitle2",
  ),

  BodyLarge: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
    }),
    "BodyLarge",
  ),

  Body: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Body",
  ),

  BodySmall: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "BodySmall",
  ),

  Caption: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
    }),
    "Caption",
  ),

  Label: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Label",
  ),

  Overline: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
      textTransform: "uppercase",
      letterSpacing: 1,
    }),
    "Overline",
  ),

  Helper: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Helper",
  ),

  Code: createPreset(
    (theme) => ({
      fontFamily: "monospace",
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Code",
  ),

  Quote: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
      fontStyle: "italic",
    }),
    "Quote",
  ),

  Eyebrow: createPreset(
    (theme) => ({
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
      textTransform: "uppercase",
      letterSpacing: 1,
    }),
    "Eyebrow",
  ),
};

export type TypographyComponent = (typeof Typography)[keyof typeof Typography];
