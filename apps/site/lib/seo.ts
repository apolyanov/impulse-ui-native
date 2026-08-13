import { project } from "./site-data";

const configuredUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const siteUrl = new URL(configuredUrl).origin;

export const seo = {
  title: "ImpulseUI Native — Open-source React Native UI system",
  shortTitle: "ImpulseUI Native",
  description:
    "A token-driven, composable React Native UI system for building consistent interfaces across iOS, Android, and the web.",
  socialDescription:
    "Accessible React Native components, shared design tokens, native Flyouts, pickers, controls, and Storybook documentation.",
  locale: "en_US",
  language: "en",
  themeColor: "#f55d6b",
  keywords: [
    "React Native UI library",
    "React Native components",
    "React Native design system",
    "Expo components",
    "TypeScript UI library",
    "cross-platform components",
    "mobile design system",
    "open source UI kit",
    "design tokens",
    "ImpulseUI Native",
  ],
  repository: project.repository,
  npmPackage: `https://www.npmjs.com/package/${project.packageName}`,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
