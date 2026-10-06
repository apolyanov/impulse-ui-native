import { LightTheme } from "../../packages/theme/src/theme/light.theme.ts";
import { createComponentsTokens } from "../../packages/theme/src/theme/tokens.theme.ts";

const components = createComponentsTokens(LightTheme);

const px = (value) => `${value}px`;

const pxScale = (scale) =>
  Object.fromEntries(
    Object.entries(scale).map(([key, value]) => [key, px(value)]),
  );

const space = {
  ...pxScale(LightTheme.space),
  "component-small": px(components.button.sizes.small.height),
  "component-medium": px(components.button.sizes.medium.height),
  "component-large": px(components.button.sizes.large.height),
  "picker-day": px(components.datetimePicker.day.size),
  "time-item": px(components.timePicker.column.itemHeight),
  "time-column": px(components.timePicker.column.width),
  "time-viewport": px(components.timePicker.column.height),
  "data-state-gap": px(components.dataState.details.gap),
  "data-state-icon": px(components.dataState.details.iconSize),
};

const borderWidth = pxScale(LightTheme.borderSize);
const borderRadius = pxScale(LightTheme.radii);
const fontSizeScale = pxScale(LightTheme.fontSize);
const lineHeight = pxScale(LightTheme.lineHeight);
const fontWeight = Object.fromEntries(
  Object.entries(LightTheme.fontWeight).map(([key, value]) => [
    key,
    String(value),
  ]),
);

// Tailwind names the base color DEFAULT; the native API names it value.
const colorPair = ({ value, contrast }) => ({ DEFAULT: value, contrast });
const colorPairs = (roles) =>
  Object.fromEntries(
    Object.entries(roles).map(([key, pair]) => [key, colorPair(pair)]),
  );
const colors = {
  ...LightTheme.colors,
  primary: colorPair(LightTheme.colors.primary),
  accent: colorPair(LightTheme.colors.accent),
  secondary: colorPair(LightTheme.colors.secondary),
  surface: colorPairs(LightTheme.colors.surface),
  border: colorPairs(LightTheme.colors.border),
  feedback: colorPairs(LightTheme.colors.feedback),
};

const typography = {
  "display-large": [
    fontSizeScale.colossal,
    { lineHeight: lineHeight.colossal, fontWeight: fontWeight.bold },
  ],
  "display-medium": [
    fontSizeScale.giant,
    { lineHeight: lineHeight.giant, fontWeight: fontWeight.bold },
  ],
  "display-small": [
    fontSizeScale.huge,
    { lineHeight: lineHeight.huge, fontWeight: fontWeight.semiBold },
  ],
  "title-1": [
    fontSizeScale.xxxl,
    { lineHeight: lineHeight.xxxl, fontWeight: fontWeight.bold },
  ],
  "title-2": [
    fontSizeScale.xxl,
    { lineHeight: lineHeight.xxl, fontWeight: fontWeight.bold },
  ],
  "title-3": [
    fontSizeScale.xl,
    { lineHeight: lineHeight.xl, fontWeight: fontWeight.semiBold },
  ],
  "title-4": [
    fontSizeScale.lg,
    { lineHeight: lineHeight.lg, fontWeight: fontWeight.semiBold },
  ],
  "title-5": [
    fontSizeScale.md,
    { lineHeight: lineHeight.md, fontWeight: fontWeight.semiBold },
  ],
  "title-6": [
    fontSizeScale.sm,
    { lineHeight: lineHeight.sm, fontWeight: fontWeight.semiBold },
  ],
  "subtitle-1": [
    fontSizeScale.md,
    { lineHeight: lineHeight.lg, fontWeight: fontWeight.medium },
  ],
  "subtitle-2": [
    fontSizeScale.sm,
    { lineHeight: lineHeight.sm, fontWeight: fontWeight.regular },
  ],
  "body-large": [
    fontSizeScale.md,
    { lineHeight: lineHeight.lg, fontWeight: fontWeight.regular },
  ],
  body: [
    fontSizeScale.sm,
    { lineHeight: lineHeight.sm, fontWeight: fontWeight.regular },
  ],
  "body-small": [
    fontSizeScale.xsm,
    { lineHeight: lineHeight.xsm, fontWeight: fontWeight.regular },
  ],
  caption: [
    fontSizeScale.xs,
    { lineHeight: lineHeight.xs, fontWeight: fontWeight.regular },
  ],
  label: [
    fontSizeScale.xsm,
    { lineHeight: lineHeight.xsm, fontWeight: fontWeight.medium },
  ],
  helper: [
    fontSizeScale.xsm,
    { lineHeight: lineHeight.xsm, fontWeight: fontWeight.regular },
  ],
  code: [fontSizeScale.xsm, { lineHeight: lineHeight.xsm }],
  quote: [
    fontSizeScale.md,
    { lineHeight: lineHeight.lg, fontWeight: fontWeight.regular },
  ],
  eyebrow: [
    fontSizeScale.xs,
    {
      lineHeight: lineHeight.xs,
      fontWeight: fontWeight.medium,
      letterSpacing: "1px",
    },
  ],
  overline: [
    fontSizeScale.xs,
    {
      lineHeight: lineHeight.xs,
      fontWeight: fontWeight.semiBold,
      letterSpacing: "1px",
    },
  ],
};

const componentSize = Object.fromEntries(
  Object.entries(components.button.sizes).map(([key, value]) => [
    key,
    px(value.height),
  ]),
);

const picker = {
  day: px(components.datetimePicker.day.size),
  timeItem: px(components.timePicker.column.itemHeight),
  timeColumn: px(components.timePicker.column.width),
  timeViewport: px(components.timePicker.column.height),
};

const config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./lib/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors,
      spacing: space,
      gap: space,
      borderRadius,
      borderWidth,
      fontSize: {
        ...fontSizeScale,
        ...typography,
      },
      lineHeight,
      fontWeight,
      letterSpacing: pxScale(LightTheme.letterSpacing),
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "Arial", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        montserrat: [
          "var(--font-montserrat)",
          "Montserrat",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        none: "none",
        xs: `0 ${px(1)} ${px(2)} rgba(0, 0, 0, 0.08)`,
        sm: `0 ${px(2)} ${px(4)} rgba(0, 0, 0, 0.10)`,
        md: `0 ${px(4)} ${px(8)} rgba(0, 0, 0, 0.15)`,
        lg: `0 ${px(8)} ${px(16)} rgba(0, 0, 0, 0.18)`,
        xl: `0 ${px(12)} ${px(24)} rgba(0, 0, 0, 0.22)`,
      },
      height: {
        "component-small": componentSize.small,
        "component-medium": componentSize.medium,
        "component-large": componentSize.large,
        "picker-day": picker.day,
        "time-item": picker.timeItem,
        "time-viewport": picker.timeViewport,
        "data-state-icon": px(components.dataState.details.iconSize),
      },
      width: {
        "component-small": componentSize.small,
        "component-medium": componentSize.medium,
        "component-large": componentSize.large,
        "picker-day": picker.day,
        "time-column": picker.timeColumn,
        "data-state-icon": px(components.dataState.details.iconSize),
      },
      transitionDuration: {
        "data-state": `${components.dataState.loading.transitionDuration}ms`,
      },
      animation: {
        "skeleton-native": `skeleton-native ${components.skeleton.bone.animationDuration}ms linear infinite alternate`,
      },
      keyframes: {
        "skeleton-native": {
          from: { opacity: String(components.skeleton.bone.initialOpacity) },
          to: { opacity: String(components.skeleton.bone.animatedOpacity) },
        },
      },
    },
  },
};

export default config;
