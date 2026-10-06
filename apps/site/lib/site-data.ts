import {
  createComponentsTokens,
  DarkTheme,
  LightTheme,
} from "@/lib/theme-tokens";

import toolkitPackage from "../../../packages/toolkit/package.json";

export const project = {
  name: "ImpulseUI Native",
  shortName: "ImpulseUI",
  version: toolkitPackage.version,
  license: "MIT",
  packageName: toolkitPackage.name,
  repository: "https://github.com/apolyanov/impulse-ui-native",
  licenseUrl:
    "https://github.com/apolyanov/impulse-ui-native/blob/main/LICENSE",
} as const;

export const navigationLinks = [
  { label: "Components", href: "#components" },
  { label: "Tokens", href: "#tokens" },
  { label: "Theming", href: "#theming" },
  { label: "Documentation", href: "#docs" },
  { label: "Contribute", href: "#contribute" },
] as const;

export const packageCommands = {
  npm: `npm install ${project.packageName}`,
  pnpm: `pnpm add ${project.packageName}`,
  yarn: `yarn add ${project.packageName}`,
  bun: `bun add ${project.packageName}`,
} as const;

function scaleTokens(prefix: string, scale: Record<string, number>) {
  return Object.entries(scale).map(([key, value]) => ({
    name: `${prefix}.${key}`,
    value: String(value),
  }));
}

export const primitiveTokenGroups: readonly {
  title: string;
  description: string;
  tokens: readonly { name: string; value: string; swatch?: string }[];
}[] = [
  {
    title: "Neutral color",
    description: "The neutral palette shared by light and dark themes.",
    tokens: Object.entries(LightTheme.colors.neutral).map(([key, value]) => ({
      name: `colors.neutral.${key}`,
      value,
      swatch: value,
    })),
  },
  {
    title: "Space",
    description: "The complete spacing scale in logical pixels.",
    tokens: scaleTokens("space", LightTheme.space),
  },
  {
    title: "Radii",
    description: "The complete corner-radius scale in logical pixels.",
    tokens: scaleTokens("radii", LightTheme.radii),
  },
  {
    title: "Font size",
    description: "The complete Montserrat size scale in logical pixels.",
    tokens: scaleTokens("fontSize", LightTheme.fontSize),
  },
  {
    title: "Line height",
    description: "Line heights paired with the typography scale.",
    tokens: scaleTokens("lineHeight", LightTheme.lineHeight),
  },
  {
    title: "Font weight",
    description: "Named weights from thin through black.",
    tokens: scaleTokens("fontWeight", LightTheme.fontWeight),
  },
  {
    title: "Letter spacing",
    description: "Tracking values in logical pixels.",
    tokens: scaleTokens("letterSpacing", LightTheme.letterSpacing),
  },
  {
    title: "Border size",
    description: "The complete border-width scale in logical pixels.",
    tokens: scaleTokens("borderSize", LightTheme.borderSize),
  },
  {
    title: "Font family",
    description:
      "Normal and italic Montserrat families are keyed by weights 100?900. Examples at weight 400:",
    tokens: [
      {
        name: "fontFamily.normal[400]",
        value: LightTheme.fontFamily.normal[400],
      },
      {
        name: "fontFamily.italic[400]",
        value: LightTheme.fontFamily.italic[400],
      },
    ],
  },
];

export const semanticTokens = [
  {
    name: "colors.primary.value",
    value: LightTheme.colors.primary.value,
    darkValue: DarkTheme.colors.primary.value,
  },
  {
    name: "colors.accent.contrast",
    value: LightTheme.colors.accent.contrast,
    darkValue: DarkTheme.colors.accent.contrast,
  },
  {
    name: "colors.secondary.contrast",
    value: LightTheme.colors.secondary.contrast,
    darkValue: DarkTheme.colors.secondary.contrast,
  },
  {
    name: "colors.surface.primary.value",
    value: LightTheme.colors.surface.primary.value,
    darkValue: DarkTheme.colors.surface.primary.value,
  },
  {
    name: "colors.surface.secondary.value",
    value: LightTheme.colors.surface.secondary.value,
    darkValue: DarkTheme.colors.surface.secondary.value,
  },
  {
    name: "colors.text.primary",
    value: LightTheme.colors.text.primary,
    darkValue: DarkTheme.colors.text.primary,
  },
  {
    name: "colors.text.disabled",
    value: LightTheme.colors.text.disabled,
    darkValue: DarkTheme.colors.text.disabled,
  },
  {
    name: "colors.border.focus.value",
    value: LightTheme.colors.border.focus.value,
    darkValue: DarkTheme.colors.border.focus.value,
  },
  {
    name: "colors.feedback.warning.value",
    value: LightTheme.colors.feedback.warning.value,
    darkValue: DarkTheme.colors.feedback.warning.value,
  },
  {
    name: "colors.feedback.success.value",
    value: LightTheme.colors.feedback.success.value,
    darkValue: DarkTheme.colors.feedback.success.value,
  },
];

export const componentTokenNames = Object.keys(
  createComponentsTokens(LightTheme),
);

export const primitiveTokenExample = `export const SpaceTokens = ${JSON.stringify(LightTheme.space, null, 2)};

export const RadiiTokens = ${JSON.stringify(LightTheme.radii, null, 2)};`;
