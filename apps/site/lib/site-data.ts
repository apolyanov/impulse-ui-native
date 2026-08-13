import toolkitPackage from "../../../packages/toolkit/package.json";

export const project = {
  name: "ImpulseUI Native",
  shortName: "ImpulseUI",
  version: toolkitPackage.version,
  license: "MIT",
  packageName: toolkitPackage.name,
  repository: "https://github.com/apolyanov/impulse-ui-native",
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

export const primitiveTokenGroups = [
  {
    title: "Color",
    description: "Semantic roles backed by the native palette.",
    tokens: [
      { name: "colors.primary.value", value: "#f55d6b", swatch: "#f55d6b" },
      { name: "colors.accent.value", value: "#FA9EA7", swatch: "#FA9EA7" },
      { name: "colors.secondary.value", value: "#FEE7E9", swatch: "#FEE7E9" },
      { name: "colors.surface.primary", value: "#f1f3f5", swatch: "#f1f3f5" },
      { name: "colors.surface.elevated", value: "#ffffff", swatch: "#ffffff" },
    ],
  },
  {
    title: "Space",
    description: "The shared layout rhythm in logical pixels.",
    tokens: [
      { name: "space.xxs", value: "4" },
      { name: "space.xs", value: "8" },
      { name: "space.mxs", value: "12" },
      { name: "space.sm", value: "16" },
      { name: "space.msm", value: "24" },
      { name: "space.md", value: "32" },
    ],
  },
  {
    title: "Radii",
    description: "Consistent shape from controls to flyouts.",
    tokens: [
      { name: "radii.sm", value: "4" },
      { name: "radii.md", value: "8" },
      { name: "radii.lg", value: "16" },
      { name: "radii.xl", value: "32" },
      { name: "radii.round", value: "100000" },
    ],
  },
  {
    title: "Type",
    description: "Montserrat scales shared by every package.",
    tokens: [
      { name: "fontSize.xs", value: "12" },
      { name: "fontSize.xsm", value: "14" },
      { name: "fontSize.sm", value: "16" },
      { name: "fontSize.xl", value: "24" },
      { name: "fontSize.colossal", value: "56" },
    ],
  },
] as const;

export const semanticTokens = [
  { name: "colors.surface.primary", value: "#f1f3f5", swatch: "#f1f3f5" },
  { name: "colors.surface.secondary", value: "#ffffff", swatch: "#ffffff" },
  { name: "colors.text.primary", value: "#16191d", swatch: "#16191d" },
  { name: "colors.text.secondary", value: "#212529", swatch: "#212529" },
  { name: "colors.text.disabled", value: "#868e96", swatch: "#868e96" },
  { name: "colors.border.subtle", value: "#e9ecef", swatch: "#e9ecef" },
  { name: "colors.border.focus", value: "#f55d6b", swatch: "#f55d6b" },
] as const;
