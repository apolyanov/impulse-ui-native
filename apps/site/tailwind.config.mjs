const px = (value) => `${value}px`;

const space = {
  none: "0px",
  xxs: "4px",
  xs: "8px",
  mxs: "12px",
  sm: "16px",
  msm: "24px",
  md: "32px",
  lg: "48px",
  xl: "64px",
  xxl: "96px",
  "component-small": "32px",
  "component-medium": "40px",
  "component-large": "48px",
  "picker-day": "40px",
  "time-item": "50px",
  "time-column": "70px",
  "time-viewport": "250px",
  "data-state-gap": "10px",
  "data-state-icon": "150px",
};

const borderWidth = {
  sm: "1px",
  md: "2px",
  lg: "3px",
  xl: "5px",
  xxl: "10px",
};

const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px",
  xxl: "64px",
  xxxl: "128px",
  round: "100000px",
};

const fontSizeScale = {
  xxs: "8px",
  xs: "12px",
  xsm: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
  xxl: "28px",
  xxxl: "32px",
  huge: "36px",
  massive: "40px",
  giant: "48px",
  colossal: "56px",
};

const lineHeight = {
  xxs: "12px",
  xs: "16px",
  xsm: "20px",
  sm: "24px",
  md: "26px",
  lg: "28px",
  xl: "32px",
  xxl: "36px",
  xxxl: "40px",
  huge: "44px",
  massive: "48px",
  giant: "56px",
  colossal: "64px",
};

const fontWeight = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
};

const colors = {
  primary: {
    DEFAULT: "#f55d6b",
    contrast: "#ffffff",
  },
  accent: {
    DEFAULT: "#FA9EA7",
    contrast: "#ffffff",
  },
  secondary: {
    DEFAULT: "#FEE7E9",
    contrast: "#f55d6b",
  },
  neutral: {
    0: "#ffffff",
    1: "#f8f9fa",
    2: "#f1f3f5",
    3: "#e9ecef",
    4: "#dee2e6",
    5: "#ced4da",
    6: "#adb5bd",
    7: "#868e96",
    8: "#495057",
    9: "#343a40",
    10: "#212529",
    11: "#16191d",
    12: "#0d0f12",
    13: "#000000",
  },
  surface: {
    primary: {
      DEFAULT: "#f1f3f5",
      contrast: "#16191d",
    },
    secondary: {
      DEFAULT: "#ffffff",
      contrast: "#16191d",
    },
    elevated: {
      DEFAULT: "#ffffff",
      contrast: "#16191d",
    },
    inverse: {
      DEFAULT: "#000000",
      contrast: "#ffffff",
    },
  },
  text: {
    primary: "#16191d",
    secondary: "#212529",
    tertiary: "#343a40",
    inverse: "#ffffff",
    disabled: "#868e96",
  },
  border: {
    subtle: {
      DEFAULT: "#e9ecef",
      contrast: "#343a40",
    },
    default: {
      DEFAULT: "#dee2e6",
      contrast: "#212529",
    },
    strong: {
      DEFAULT: "#adb5bd",
      contrast: "#16191d",
    },
    focus: {
      DEFAULT: "#f55d6b",
      contrast: "#ffffff",
    },
  },
  feedback: {
    error: {
      DEFAULT: "#c92a2a",
      contrast: "#fff5f5",
    },
    warning: {
      DEFAULT: "#e67700",
      contrast: "#fff4e6",
    },
    success: {
      DEFAULT: "#7a9908",
      contrast: "#f4fce3",
    },
    info: {
      DEFAULT: "#1864ab",
      contrast: "#e7f5ff",
    },
  },
  overlay: "rgba(0, 0, 0, 0.45)",
  white: "#ffffff",
  black: "#000000",
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

const componentSize = {
  small: "32px",
  medium: "40px",
  large: "48px",
};

const picker = {
  day: "40px",
  timeItem: "50px",
  timeColumn: "70px",
  timeViewport: "250px",
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
        "data-state-icon": "150px",
      },
      width: {
        "component-small": componentSize.small,
        "component-medium": componentSize.medium,
        "component-large": componentSize.large,
        "picker-day": picker.day,
        "time-column": picker.timeColumn,
        "data-state-icon": "150px",
      },
      transitionDuration: {
        "data-state": "250ms",
      },
      animation: {
        "skeleton-native": "skeleton-native 1000ms linear infinite alternate",
      },
      keyframes: {
        "skeleton-native": {
          from: { opacity: "1" },
          to: { opacity: "0.4" },
        },
      },
    },
  },
};

export default config;
