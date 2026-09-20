# Component inventory and roadmap

This document is the living inventory for ImpulseUI Native. It records what is
available today, where an existing component needs more work, and which
components are candidates for future development.

Last reviewed: 2026-09-20

## How to use this document

Use these statuses when updating the tables:

- **Available**: exported from a public package and ready for use.
- **Extend**: available, but known work remains before the API or experience is
  considered complete.
- **Planned**: accepted for the roadmap but not implemented.
- **Candidate**: useful idea that still needs validation and prioritization.

A component should normally include all of the following before it moves to
**Available**:

- a public, typed API and package export;
- light and dark theme tokens where visual styling is involved;
- accessibility roles, labels, state, focus, and keyboard behavior appropriate
  to native and web;
- controlled and uncontrolled behavior where both models are useful;
- native and web Storybook examples for important states;
- automated behavior tests for interaction and state changes;
- package documentation and a migration note for breaking changes.

## Current component inventory

### Foundations and interaction

| Component                      | Package                         | Status    | Storybook | Follow-up                                                             |
| ------------------------------ | ------------------------------- | --------- | --------- | --------------------------------------------------------------------- |
| `ThemeProvider`                | `@impulse-ui-native/theme`      | Available | Indirect  | Add a dedicated theme and token gallery.                              |
| `View`                         | `@impulse-ui-native/primitives` | Available | Yes       | Add responsive/web examples if responsive props are introduced.       |
| `SafeAreaView`                 | `@impulse-ui-native/primitives` | Extend    | No        | Add stories for edges and themed spacing.                             |
| `Typography`                   | `@impulse-ui-native/primitives` | Available | Yes       | Audit text scaling, truncation, selection, and RTL behavior.          |
| `Pressable`                    | `@impulse-ui-native/primitives` | Available | Yes       | Document focus-visible and keyboard behavior on web.                  |
| `Button`                       | `@impulse-ui-native/primitives` | Available | Yes       | Add icon-leading/icon-trailing examples and accessibility tests.      |
| `IconButton`                   | `@impulse-ui-native/primitives` | Available | Yes       | Require or strongly document accessible labels for icon-only actions. |
| `Tag`                          | `@impulse-ui-native/primitives` | Available | Yes       | Clarify when to use interactive, closable, and display-only tags.     |
| `Icon` and named icon wrappers | `@impulse-ui-native/icon`       | Available | Yes       | Add a searchable icon catalogue and bundle-size guidance.             |

### Form controls

| Component             | Package                         | Status    | Storybook | Follow-up                                                                       |
| --------------------- | ------------------------------- | --------- | --------- | ------------------------------------------------------------------------------- |
| Compound `Control`    | `@impulse-ui-native/primitives` | Extend    | Indirect  | Add dedicated composition, error, addon, loading, and focus stories.            |
| `Input`               | `@impulse-ui-native/input`      | Available | Yes       | Add multiline, prefix/suffix action, keyboard, and validation examples.         |
| `Switch`              | `@impulse-ui-native/switch`     | Available | Yes       | Add labelled field composition and automated interaction/accessibility tests.   |
| `Select`              | `@impulse-ui-native/select`     | Extend    | Yes       | Add search, custom option rendering, grouped options, and async states.         |
| `MultiSelect`         | `@impulse-ui-native/select`     | Extend    | Yes       | Add search, selected-item summaries, large-list behavior, and selection limits. |
| `DatePicker`          | `@impulse-ui-native/datetime`   | Extend    | Yes       | Add min/max dates, disabled dates, locale, and first-day-of-week controls.      |
| `DateRangePicker`     | `@impulse-ui-native/datetime`   | Extend    | Yes       | Add range constraints and clearer invalid/incomplete range behavior.            |
| `DatetimePicker`      | `@impulse-ui-native/datetime`   | Extend    | Yes       | Add timezone and locale guidance plus date/time constraints.                    |
| `DatetimeRangePicker` | `@impulse-ui-native/datetime`   | Extend    | Yes       | Add range validation and timezone/DST test coverage.                            |
| `TimePicker`          | `@impulse-ui-native/datetime`   | Extend    | Yes       | Add minute/second intervals, min/max time, and locale examples.                 |

### Feedback, state, and loading

| Component           | Package                         | Status    | Storybook      | Follow-up                                                      |
| ------------------- | ------------------------------- | --------- | -------------- | -------------------------------------------------------------- |
| Compound `Skeleton` | `@impulse-ui-native/skeleton`   | Available | Yes            | Add reduced-motion behavior and accessibility guidance.        |
| `LoadingView`       | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add a direct story and transition tests.                       |
| `EmptyView`         | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add direct stories for zero, one, and two actions.             |
| `ErrorView`         | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add direct stories and screen-reader announcement guidance.    |
| `DataView`          | `@impulse-ui-native/data-state` | Available | Yes            | Test state precedence and transitions between all four states. |

### Navigation and workflow

| Component               | Package                      | Status | Storybook | Follow-up                                                                   |
| ----------------------- | ---------------------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `Stepper`               | `@impulse-ui-native/stepper` | Extend | Yes       | Add optional/disabled steps, validation hooks, and accessibility semantics. |
| `StepperTabsNavigation` | `@impulse-ui-native/stepper` | Extend | Yes       | Add overflow/scroll behavior and keyboard navigation.                       |

### Overlays and composition infrastructure

| Component                              | Package                      | Status    | Storybook | Follow-up                                                                     |
| -------------------------------------- | ---------------------------- | --------- | --------- | ----------------------------------------------------------------------------- |
| `Portal`, `PortalHost`, `PortalsHost`  | `@impulse-ui-native/portal`  | Available | Yes       | Add nested-provider, host-removal, and ordering tests.                        |
| `OverlayHost` and overlay registration | `@impulse-ui-native/overlay` | Available | Yes       | Define focus restoration, back-button handling, and stacked-overlay policy.   |
| `Flyout`                               | `@impulse-ui-native/flyout`  | Extend    | Yes       | Add snap points, scroll coordination, keyboard avoidance, and focus trapping. |

### Data visualization

| Component        | Package                     | Status | Storybook | Follow-up                                                                   |
| ---------------- | --------------------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `LineChart`      | `@impulse-ui-native/charts` | Extend | Yes       | Add interaction, tooltips, legends, selection, and accessibility summaries. |
| `MultiLineChart` | `@impulse-ui-native/charts` | Extend | Yes       | Add series toggling and clearer overlapping-series treatment.               |
| `BarChart`       | `@impulse-ui-native/charts` | Extend | Yes       | Add interaction, labels, stacked bars, and horizontal orientation.          |
| `MultiBarChart`  | `@impulse-ui-native/charts` | Extend | Yes       | Add stacked mode, legends, and series toggling.                             |
| `PieChart`       | `@impulse-ui-native/charts` | Extend | Yes       | Add labels, legends, selection, and empty-data behavior.                    |
| `MultiPieChart`  | `@impulse-ui-native/charts` | Extend | Yes       | Add ring labels, legends, and interactive series details.                   |

## Supporting packages

These packages are part of the toolkit but do not primarily expose visual
components:

| Package                       | Current role                       | Follow-up                                                                                |
| ----------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `@impulse-ui-native/core`     | Shared hooks and utilities         | Add unit tests and document which APIs are intended for application use.                 |
| `@impulse-ui-native/echo`     | Typed event channel                | Replace the placeholder example with a real event and add emitter/subscription tests.    |
| `@impulse-ui-native/endpoint` | Axios and TanStack Query factories | Add error, cancellation, retry, pagination, and cache-key examples and tests.            |
| `@impulse-ui-native/toolkit`  | Complete public package            | Verify every intended public package is exported and document tree-shaking expectations. |

## Proposed component backlog

The priorities below are a starting point, not a release commitment. Promote a
candidate to **Planned** only after its API, dependencies, and maintenance cost
have been discussed.

### Priority 0: harden the existing library

- [ ] Add an automated test setup for packages. No package-level `*.test.*` or
      `*.spec.*` files were present when this inventory was created.
- [ ] Add accessibility checks and a manual VoiceOver/TalkBack/keyboard test
      matrix for interactive components.
- [ ] Add direct Storybook coverage for `SafeAreaView`, compound `Control`, the
      standalone data-state views, and theme tokens.
- [ ] Define supported React Native, Expo, iOS, Android, and web versions in one
      compatibility document.
- [ ] Add an example form and an example data-backed screen that combine several
      packages and cover realistic integration concerns.

### Priority 1: essential controls and feedback

| Candidate                    | Status    | Suggested scope                                                                                                                             |
| ---------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Checkbox                     | Available | Controlled and uncontrolled state, indeterminate state, shared sizes and variants, disabled behavior, and accessible mixed-state semantics. |
| Checkbox Group               | Planned   | Add shared values, labels, descriptions, validation, and group layout behavior.                                                             |
| Radio                        | Available | Controlled and uncontrolled selection, shared sizes and variants, disabled behavior, and accessible radio semantics.                        |
| Radio Group                  | Planned   | Add mutual exclusion, shared values, labels, descriptions, validation, and keyboard navigation on web.                                      |
| Switch                       | Available | Controlled and uncontrolled state, token-driven variants and sizes, reduced-motion-aware animation, and disabled/loading behavior.          |
| Textarea                     | Available | Multiline controlled and uncontrolled text entry with character count, validation feedback, and bounded auto-grow behavior.                 |
| Form Field                   | Available | Render-prop composition for shared labels, descriptions, required markers, validation feedback, disabled state, and accessibility wiring.   |
| Modal / Dialog               | Candidate | Portal-backed modal with focus management, keyboard avoidance, back-button behavior, and size variants.                                     |
| Alert Dialog                 | Candidate | Destructive-action semantics, cancel/confirm actions, and safe initial focus.                                                               |
| Toast                        | Candidate | Imperative queue, placements, durations, actions, screen-reader announcements, and reduced motion.                                          |
| Spinner / Activity Indicator | Available | Token-aware sizes and semantic colors for buttons, controls, and standalone loading states.                                                 |
| Progress                     | Available | Linear and circular determinate/indeterminate variants with accessible values and reduced-motion behavior.                                  |

### Priority 2: composition and navigation

| Candidate               | Status    | Suggested scope                                                                                 |
| ----------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| Card                    | Available | Compound header, content, footer, media, and pressable surfaces without imposing screen layout. |
| Divider / Separator     | Candidate | Horizontal and vertical orientation with inset and semantic color options.                      |
| Avatar / Avatar Group   | Candidate | Image, initials, fallback, status, and overflow count.                                          |
| Badge                   | Candidate | Status and numeric variants; define its relationship with `Tag` before implementation.          |
| List / List Item        | Candidate | Leading/trailing content, description, selection, separators, and pressable states.             |
| Tabs                    | Candidate | Controlled tabs, keyboard navigation, scrollable tab lists, and lazy panels.                    |
| Accordion / Collapsible | Candidate | Single/multiple expansion, animated height, keyboard behavior, and nested content.              |
| Menu                    | Candidate | Anchored actions, nested sections, destructive items, keyboard navigation, and portals.         |
| Tooltip / Popover       | Candidate | Anchor measurement, collision handling, focus/hover/press triggers, and portal rendering.       |

### Priority 3: advanced input and data display

| Candidate               | Status    | Suggested scope                                                                                  |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| Slider / Range Slider   | Candidate | Steps, marks, min/max values, gestures, keyboard input, and accessible value text.               |
| Segmented Control       | Candidate | Single selection, icons, labels, disabled options, and overflow policy.                          |
| Search Input / Combobox | Candidate | Decide whether this extends `Input` and `Select` or becomes a dedicated component.               |
| Pagination              | Candidate | Compact native controls plus complete web keyboard and screen-reader behavior.                   |
| Table / Data Grid       | Candidate | Start only after defining responsive behavior, virtualization, sorting, and accessibility scope. |
| Carousel                | Candidate | Snapping, pagination indicators, autoplay policy, RTL, and reduced motion.                       |
| Additional charts       | Candidate | Area, stacked-area, scatter, and sparkline variants after shared chart interaction APIs exist.   |

## Cross-component work

These concerns should be addressed as shared systems instead of separately in
each new component:

- accessibility conventions and reusable test helpers;
- focus-visible, hover, keyboard, and pointer behavior on web;
- reduced-motion support for Reanimated components;
- RTL layout and gesture direction;
- font scaling and dynamic type;
- controlled/uncontrolled state conventions;
- ref forwarding and imperative APIs;
- form-library integration examples;
- internationalization, locale, timezone, and formatting boundaries;
- visual regression coverage for light and dark themes;
- performance budgets for lists, charts, icons, and animated overlays.

## Updating the roadmap

When adding or changing a component:

1. Update its row in the current inventory.
2. Add or update its Storybook documentation and examples.
3. Add tests for new behavior and accessibility state.
4. Move the corresponding backlog entry to the correct status or remove it.
5. Update the `Last reviewed` date at the top of this document.
