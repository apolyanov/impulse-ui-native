import { componentGroups } from "@/lib/component-catalog";
import { absoluteUrl, seo } from "@/lib/seo";
import {
  componentTokenNames,
  documentationLinks,
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
- Component development targets: iOS and Android
- Catalog last reviewed: ${project.lastReviewed}
- Browser previews are available; web component parity, built-in accessibility semantics, and reduced-motion support are deferred.

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

Install the native peer dependencies required by the packages you use and complete their platform setup before rendering components. In Expo projects, use expo install for native dependencies and rebuild the native application. ThemeProvider is the minimum setup for themed inline components:

${fence}tsx
import { ThemeProvider } from "${project.packageName}";

export function App() {
  return <ThemeProvider>{/* application */}</ThemeProvider>;
}
${fence}

ThemeProvider alone is insufficient for gestures and overlays. Follow the [application setup guide](${documentationLinks.setup}) for GestureHandlerRootView, SafeAreaProvider, PortalProvider with a stable PortalStore, PortalsHost, and OverlayHost. Select and keyboard-aware Flyout bodies additionally require react-native-keyboard-controller and a KeyboardProvider covering the application and its Portal/Overlay hosts.

Individual packages may be installed independently when the complete toolkit is unnecessary. Icons remain separate: import Icon from @impulse-ui-native/icon and named icons from per-icon subpaths such as @impulse-ui-native/icon/icons/heart.

## Theme API and token structure

AppTheme extends PrimitiveThemeTokens with components. PrimitiveThemeTokens contains colors, space, radii, borderSize, fontFamily, fontWeight, fontSize, lineHeight, and letterSpacing. ThemeColors uses { value, contrast } pairs for primary, accent, secondary, surface roles, border roles, and feedback roles. Text colors, neutral colors, overlay, white, and black are strings. For example, use colors.surface.canvas.value and colors.border.focus.value; colors.text.primary is already a string.

LightTheme and DarkTheme are primitive themes with distinct semantic color palettes and shared numeric scales. ThemeProvider accepts scheme: "light" | "dark" (default "light"). It does not select a scheme automatically. Its theme prop accepts deep partial overrides under light and dark. Its components prop accepts a deep partial token object or a function of the merged primitive theme. The provider regenerates component tokens from that merged theme, then merges component overrides.

fontFamily.normal and fontFamily.italic map numeric weights 100–900 to Montserrat font names. Load those fonts in the native host. ComponentSize is "small" | "medium" | "large"; component-specific dimensions live in component tokens rather than the primitive spacing scale.

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
- Slider: single-value and range selection with native UI-thread drag feedback, configurable steps, marks, value bubbles, and minimum range gaps.
- ColorPicker: composable spectrum, hue, and alpha controls with hex/RGB entry, presets, and immediate or confirmed color edits.
- SegmentedControl: composable single-choice segments with labels and icons.
- Tabs: a flat items API with controlled/uncontrolled selection, scrollable underline tabs, and conditional active panels. Switching tabs unmounts the old panel and resets local state; there is no prerendering or lazy-loading mode.
- Pagination: responsive page navigation with a compact layout.
- Stepper: controlled multi-step content and shared navigation methods. StepperTabsNavigation currently renders placeholder bars; labelled press navigation is not implemented.
- Primitives: shared foundations plus Button, IconButton, Avatar, Badge, Divider, Spinner, and Tag.
- IconView: non-pressable themed icon surfaces with display variants and semantic tones.
- FlatList: native FlatList plus useFlatListInitialScroll for known fixed-size rows.
- ScrollView: native ScrollView plus useScrollViewInitialScroll to reveal a measured initial child once per mount.
- Icon: typed icons and standard small, medium, and large icon sizing.
- Accordion: animated single- and multi-section disclosure.
- Checkbox, Radio, and Switch: native selection controls with shared sizes and visual variants.
- Modal: compound dialogs with local Portal or global OverlayHost usage, header/footer composition, lifecycle callbacks, and backdrop/Android Back dismissal. Compose confirmation actions in the footer.
- FormField: labels, descriptions, required state, and validation composition for custom controls.
- Select: single- and multi-select controls whose options open in a Flyout.
- Flyout: portal-based top or bottom sheets with an overlay, drag handle, title, safe-area handling, and gesture-driven dismissal.
- Input: themed single-line and multiline text controls, including Textarea auto-grow and character counting.
- Datetime: date and time selection components.
- Charts: Skia-rendered line, multi-line, bar, grouped-bar, pie, and concentric-pie visualizations.
- Skeleton and DataView: loading placeholders and coordinated loading, empty, error, and content states. LoadingView, EmptyView, and ErrorView are also exported independently.
- Portal and OverlayHost: named-host content placement and registered-overlay lifecycle infrastructure.

## Slider and ColorPicker behavior

Slider and RangeSlider are exported from @impulse-ui-native/slider and the toolkit. Use value/onValueChange for controlled state or defaultValue for uncontrolled state. Values are clamped to min/max and snapped to step. RangeSlider keeps values ordered and enforces minStepsBetweenThumbs, including when bounds do not align with the step grid. Fractional and scientific-notation steps are supported. Native gestures move thumbs and active fill continuously on the UI thread, independently of the step grid; values and callbacks remain normalized. onValueChange emits changed snapped values; onSlidingComplete receives the final selection on release or interruption. Controlled sliders reconcile to the supplied value after interaction ends. Custom trackContent replaces Slider's numeric fill with supplied visuals.

ColorPicker is exported from @impulse-ui-native/color-picker and the toolkit. Use value/onChange or defaultValue. Immediate mode commits edits as they occur; commitMode="confirm" stages edits until Apply and discards them on Cancel. External controlled value changes invalidate staged edits. Values accept RGB, RGBA, RRGGBB, or RRGGBBAA hex strings with an optional # and emit uppercase #RRGGBB or #RRGGBBAA. Invalid text retains the last valid color. showAlpha={false} hides opacity controls while preserving alpha. showPresets={false} hides the preset palette and its label.

Compose ColorPicker.Root with Spectrum, HueSlider, AlphaSlider, Preview, HexInput, ChannelInput, AlphaInput, Swatch, Apply, and Cancel. Root owns shared state; actions and swatches render supplied children. The spectrum indicator updates on the UI thread while React color updates are limited to approximately 60 Hz; the final selection is always flushed on release or interruption. Enabled spectrum and slider gestures keep touches that start on the control, including inside scrolling containers. Disabled controls leave scrolling available.

Standalone slider installs require react-native-gesture-handler >=2, react-native-reanimated >=4, and react-native-worklets >=0.5. ColorPicker additionally requires react-native-svg >=13.9. Complete native Gesture Handler and Reanimated/Worklets setup and wrap controls in GestureHandlerRootView and ThemeProvider. These controls are inline and do not require overlay providers. Verify native interaction and smoothness in iOS and Android Storybook.

- [Slider guide](${seo.repository}/blob/main/packages/slider/README.md): Installation, controlled/uncontrolled values, range constraints, marks, and custom tracks.
- [ColorPicker guide](${seo.repository}/blob/main/packages/color-picker/README.md): Installation, value formats, commit modes, presets, and composition.

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

Select and MultiSelect use shared Control parts with medium size, outlined variant, and neutral tone by default. Field appearance uses components.controlContainer.colors[tone][variant][state], controlInput.colors, and controlAddon.colors. Rectangular fields support outlined, soft, and filled variants with neutral, primary, and secondary tones. Error and disabled states override ordinary appearance. Actions such as Button default to medium / filled / primary; Button also supports ghost.

Options open in a portal-based Flyout. Select closes after choosing an option; MultiSelect supports multiple selections with tone-matched tags. Selection indicators follow the field tone, with neutral styling for disabled options. Set searchable for local case-insensitive label filtering, or supply searchValue/onSearchChange for caller-managed external search. optionsLoading shows a spinner without disabling existing results. Keep selected records in options when their labels must remain visible; selected-option caching is not built in.

On opening, Select reveals the selected option and MultiSelect reveals the first selected option in list order. initialScrollToSelected={false} disables this positioning. Options use native FlatList with fixed components.select.option.height rows (56 logical units by default); long labels truncate. Later selection changes do not scroll the already-open list.

Flyout accepts direct body children. Use Flyout.Content for token-based horizontal padding, Flyout.ScrollView or Flyout.FlatList for scrollable bodies, and Flyout.KeyboardAwareView as a direct body child for keyboard overlap padding. KeyboardAwareView does not insert a scroll container or automatically reveal focused inputs. Its keyboardOffset defaults to space.xs. Bottom-sheet scroll dismissal applies to supported scroll containers when a swipe begins at the top; validate native scroll and keyboard interactions on devices.

- [Select guide](${seo.repository}/blob/main/packages/select/README.md): Search, async results, initial positioning, field appearance, and selected tags.
- [Flyout guide](${seo.repository}/blob/main/packages/flyout/README.md): Body composition, scroll gestures, keyboard setup, and lifecycle.

## Documentation surfaces

- [Design and application reference](${documentationLinks.guide}): Source-derived package capabilities, exact APIs, resolved tokens, and native validation boundaries.
- [Component chooser](${documentationLinks.chooser}): Select packages by application task.
- [Recipes](${documentationLinks.recipes}): Typechecked composition examples; these do not certify device behavior.

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
- Use the current package source and design-system capability guides for exact APIs and defaults. Repository documentation describes local source; check the installed package version before copying examples.
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
