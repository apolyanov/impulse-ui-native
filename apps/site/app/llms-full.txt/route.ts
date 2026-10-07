import { componentGroups } from "@/lib/component-catalog";
import { absoluteUrl, seo } from "@/lib/seo";
import {
  componentTokenNames,
  primitiveTokenExample,
  project,
} from "@/lib/site-data";

export const dynamic = "force-dynamic";

export function GET() {
  const componentNames = componentGroups
    .flatMap((group) => group.components.map((component) => component.name))
    .join(", ");

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

## Theme API and token structure

AppTheme extends PrimitiveThemeTokens with components. PrimitiveThemeTokens contains colors, space, radii, borderSize, fontFamily, fontWeight, fontSize, lineHeight, and letterSpacing. ThemeColors uses { value, contrast } pairs for primary, accent, secondary, surface roles, border roles, and feedback roles. Text colors, neutral colors, overlay, white, and black are strings. For example, use colors.surface.primary.value and colors.border.focus.value; colors.text.primary is already a string.

LightTheme and DarkTheme are primitive themes with distinct semantic color palettes and shared numeric scales. ThemeProvider accepts scheme: "light" | "dark" (default "light"). It does not select a scheme automatically. Its theme prop accepts deep partial overrides under light and dark. Its components prop accepts a deep partial token object or a function of the merged primitive theme. The provider regenerates component tokens from that merged theme, then merges component overrides.

fontFamily.normal and fontFamily.italic map numeric weights 100?900 to Montserrat font names. Load those fonts in the native host. ComponentSize is "small" | "medium" | "large"; component-specific dimensions live in component tokens rather than the primitive spacing scale.

The generated component token keys are: ${componentTokenNames.join(", ")}.

${fence}ts
${primitiveTokenExample}
${fence}

## Major package areas

- Toolkit: aggregated public exports for the component system.
- Theme: primitive, semantic, and component-level tokens.
- Core: shared state and event hooks, one-shot timers, and Android hardware Back subscriptions.
- Card and List: dedicated packages with ready-made components and composable namespaced parts.
- Progress: determinate and indeterminate linear or circular progress.
- Toast: timed overlay notifications with semantic tones, actions, and composable namespaced parts.
- Popover and Tooltip: compact anchored content rendered through Portal with theme tokens and safe-area collision handling.
- Carousel: horizontal slides with snapping, controls, and pagination.
- Slider: single-value and range selection with configurable steps and marks.
- SegmentedControl: composable single-choice segments with labels and icons.
- Pagination: responsive page navigation with a compact layout.
- Stepper: controlled multi-step content and shared navigation methods.
- Primitives: shared foundations plus Button, IconButton, Avatar, Badge, Divider, Spinner, and Tag.
- Icon: typed icons and standard small, medium, and large icon sizing.
- Accordion: animated single- and multi-section disclosure with keyboard navigation.
- Checkbox, Radio, and Switch: accessible selection controls with shared sizes and visual variants.
- FormField: labels, descriptions, required state, and validation composition for custom controls.
- Select: single- and multi-select controls whose options open in a Flyout.
- Flyout: portal-based top or bottom sheets with an overlay, drag handle, title, safe-area handling, and gesture-driven dismissal.
- Input: themed single-line and multiline text controls, including Textarea auto-grow and character counting.
- Datetime: date and time selection components.
- Charts: Skia-rendered line, multi-line, bar, grouped-bar, pie, and concentric-pie visualizations.
- Skeleton and DataState: loading, empty, and feedback states.
- Portal and Layers: overlay placement and z-index infrastructure.

## Popover and Tooltip behavior

Popover and Tooltip are exported from @impulse-ui-native/popover and the toolkit. Popover.Root owns controlled or uncontrolled open state. Compose Popover.Trigger, Popover.Content, Popover.Title, Popover.Description, and Popover.Close; each part renders supplied children. The convenience Popover accepts trigger, triggerProps, contentProps, and children.

${fence}tsx
import { Popover, Tooltip, Typography } from "${project.packageName}";

<Popover.Root placement="bottom">
  <Popover.Trigger>
    <Typography.Label>Visibility</Typography.Label>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Title>Project visibility</Popover.Title>
    <Popover.Description>Choose who can view this project.</Popover.Description>
    <Popover.Close>
      <Typography.Label>Done</Typography.Label>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>;

<Tooltip content="Syncs when you’re online">
  <Typography.Label>Auto-sync info</Typography.Label>
</Tooltip>;
${fence}

Install SafeAreaProvider, ThemeProvider, and PortalProvider at the app root. Create the PortalStore once outside render and render PortalsHost last inside a full-screen native View under the same providers. Content carries popover context into its portal. A custom portalName must match the host name. Other app-local providers around the anchor must also wrap the host or be placed inside Content.

Popover defaults to a press trigger, bottom placement, and an elevated surface. Tooltip defaults to long-press, top placement, an inverse surface, and dismissal after 3000ms; duration={0} persists until dismissal. Placements are top, bottom, left, and right, with physical left/right. Positioning flips or shifts within safe-area and host bounds while tracking the anchor. Outside taps are consumed without a scrim, and Android Back dismisses. Popover content sizes naturally without internal scrolling; use a sheet, dialog, or screen for larger content. Customize shared geometry, typography, fill, and borders through components.popover tokens.

## Shared core hooks

useTimer({ duration, callback, enabled, pauseOnBackground }) runs the latest callback once after the duration. Non-positive or non-finite durations disable it. enabled defaults to true, and pauseOnBackground defaults to false. Callback changes preserve the countdown; disabling or unmounting cancels it. Re-enabling or changing the duration/background policy starts a fresh countdown. Background pausing resumes the remaining duration, and a completed timer stays finished until restarted. Toast uses background pausing; Tooltip uses the default policy.

useBackHandler(callback, enabled = true) subscribes to Android hardware Back with the latest callback and removes the listener when disabled or unmounted. Return true to consume the press or false to let other handlers and the native default continue. Popover reuses this hook for dismissal.

## Select and Flyout behavior

Select uses the shared Control primitives for its trigger. Opening it mounts a SelectFlyout through a Portal. The default Flyout placement is bottom. The sheet uses a secondary surface, a 32-pixel top radius, a 32-pixel handle container, a 25-percent-wide by 6-pixel handle, centered Title3 typography, 32-pixel horizontal content padding, and 16-pixel option padding. Selecting an option displays a primary-colored check icon and closes the Flyout.

## Documentation surfaces

- [Public website](${absoluteUrl("/")}): Marketing overview and browsable component catalog.
- [Component catalog](${absoluteUrl("/#components")}): Purpose, capability, package, and source information for ${componentNames}.
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
- Use native Storybook and package source when exact component rendering or behavior matters.
- Attribute the project to ImpulseUI Native and link to ${seo.repository} when citing source code.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
