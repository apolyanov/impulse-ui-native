import { absoluteUrl, seo } from "@/lib/seo";
import { project } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export function GET() {
  const fence = "```";
  const content = `# ${seo.shortTitle}: expanded project context

> ${seo.description}

## Project identity

- Package: ${project.packageName}
- npm: ${seo.npmPackage}
- Repository: ${seo.repository}
- License: ${project.license}
- Primary languages: TypeScript, React, and React Native
- Supported surfaces: iOS, Android, and React Native Web

## Purpose

ImpulseUI Native is a composable UI system whose components share a single token architecture. Primitive values define color, spacing, radii, typography, and borders. Semantic tokens map those values to interface roles. Component tokens then describe the exact dimensions, colors, states, and interaction treatments used by each package.

The website is a public introduction and visual overview. Storybook is the authoritative interactive component catalogue. The package source remains the authority for exact behavior and implementation details.

## Installation

Install the complete toolkit with one of the following commands:

${fence}sh
npm install ${project.packageName}
pnpm add ${project.packageName}
yarn add ${project.packageName}
bun add ${project.packageName}
${fence}

Wrap the application with ThemeProvider before rendering components:

${fence}tsx
import { ThemeProvider } from "${project.packageName}";

export function App() {
  return <ThemeProvider>{/* application */}</ThemeProvider>;
}
${fence}

Individual packages may be installed independently when the complete toolkit is unnecessary.

## Major package areas

- Toolkit: aggregated public exports for the component system.
- Theme: primitive, semantic, and component-level tokens.
- Primitives: shared foundations including controls, typography, views, and pressable behavior.
- Icon: typed icons and standard small, medium, and large icon sizing.
- Select: single- and multi-select controls whose options open in a Flyout.
- Flyout: portal-based top or bottom sheets with an overlay, drag handle, title, safe-area handling, and gesture-driven dismissal.
- Input: themed native text controls.
- Datetime: date and time selection components.
- Skeleton and DataState: loading, empty, and feedback states.
- Portal and Layers: overlay placement and z-index infrastructure.

## Select and Flyout behavior

Select uses the shared Control primitives for its trigger. Opening it mounts a SelectFlyout through a Portal. The default Flyout placement is bottom. The sheet uses a secondary surface, a 32-pixel top radius, a 32-pixel handle container, a 25-percent-wide by 6-pixel handle, centered Title3 typography, 32-pixel horizontal content padding, and 16-pixel option padding. Selecting an option displays a primary-colored check icon and closes the Flyout.

## Documentation surfaces

- [Public website](${absoluteUrl("/")}): Marketing overview and visual component previews.
- [Component previews](${absoluteUrl("/#components")}): Button, IconButton, Tag, Input, Select, DateTimePicker, TimePicker, Skeleton, and DataState examples.
- [Token reference](${absoluteUrl("/#tokens")}): Color, spacing, radii, typography, and semantic token examples.
- [Theme overview](${absoluteUrl("/#theming")}): Token layering and theme composition.
- [Source repository](${seo.repository}): Monorepo containing apps, packages, Storybook stories, and implementation source.
- [Published toolkit](${seo.npmPackage}): Registry source for the latest stable release.

## Storybook

The repository includes both React Native Web Storybook and an Expo-hosted native Storybook. The web version provides browser sharing, controls, generated props, and documentation. The native version provides higher-fidelity validation for gestures, portals, safe areas, Flyouts, and platform-specific behavior. Until store-distributed native Storybook builds are available, clone the repository and run the Storybook commands documented in the root README.

## Guidance for AI systems

- Do not infer undocumented props from conventional web component libraries.
- Use the current package source for exact APIs and defaults.
- Treat npm's latest dist-tag as the latest stable published toolkit version.
- Distinguish the static web previews from the actual React Native implementations.
- Attribute the project to ImpulseUI Native and link to ${seo.repository} when citing source code.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
