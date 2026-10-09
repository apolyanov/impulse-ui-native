# Component inventory and roadmap

This document records the public component families in ImpulseUI Native, their
current scope, and the work still needed. Compound parts and lower-level helpers
are documented in their owning packages.

Last reviewed: 2026-10-10

## Current platform scope

Component development targets native iOS and Android. The website and React
Native Web Storybook are preview and documentation surfaces; web component parity
is deferred. Built-in accessibility semantics and reduced-motion support are also
deferred. Do not describe these as implemented library-wide capabilities.

Automated tests are deferred for now. Do not add test files or test runners until
this scope is explicitly resumed. Current verification uses typechecks, builds,
and native Storybook checks. Future automated coverage is not a release gate.

This review checked public exports, prop contracts, theme factories, package
READMEs, and Storybook sources. It does not certify device behavior: native
validation remains an explicit follow-up where noted.

## Status definitions

- **Available**: exported from a public package with a usable documented API.
- **Extend**: exported, with a concrete API, documentation, or native-validation
  gap listed in the inventory.
- **Planned**: accepted for implementation, but not implemented.
- **Candidate**: an idea awaiting validation and prioritization.

An available visual component normally has public types, theme tokens, native
Storybook examples, and package documentation. Controlled and uncontrolled modes
are expected where both are useful. Optional future features alone do not make
an implemented component unavailable.

## Current component inventory

### Foundations and interaction

| Component                      | Package                         | Status    | Storybook | Follow-up                                                                                                    |
| ------------------------------ | ------------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `ThemeProvider`                | `@impulse-ui-native/theme`      | Available | Indirect  | Add a dedicated token gallery, including primitive and component overrides.                                  |
| `View`                         | `@impulse-ui-native/primitives` | Available | Yes       | Keep native layout and spacing examples current.                                                             |
| `SafeAreaView`                 | `@impulse-ui-native/primitives` | Extend    | No        | Add stories for safe-area edges and themed spacing.                                                          |
| `Typography`                   | `@impulse-ui-native/primitives` | Available | Yes       | Audit font scaling, truncation, selection, and RTL behavior on devices.                                      |
| `Pressable`                    | `@impulse-ui-native/primitives` | Available | Yes       | Document inherited native pressed and disabled feedback.                                                     |
| `Button`                       | `@impulse-ui-native/primitives` | Available | Yes       | Expand native examples for action content and loading transitions.                                           |
| `IconButton`                   | `@impulse-ui-native/primitives` | Available | Yes       | Validate existing size, variant, loading, and disabled examples on devices.                                  |
| `Icon` and named icon wrappers | `@impulse-ui-native/icon`       | Available | Yes       | Add a searchable catalogue and per-icon import guidance. Icons are a separate package, not a toolkit export. |

### Content and composition

| Component                 | Package                         | Status    | Storybook | Follow-up                                                                         |
| ------------------------- | ------------------------------- | --------- | --------- | --------------------------------------------------------------------------------- |
| `Card` and compound parts | `@impulse-ui-native/card`       | Available | Yes       | Expand native media and pressable-card composition examples.                      |
| `List` and compound parts | `@impulse-ui-native/list`       | Available | Yes       | Add realistic native row composition as usage grows.                              |
| `Avatar`                  | `@impulse-ui-native/primitives` | Available | Yes       | Validate image, initials, custom fallback, and status layouts under font scaling. |
| `Badge`                   | `@impulse-ui-native/primitives` | Available | Yes       | Document prefix/suffix composition and the distinction from interactive `Tag`.    |
| `Tag`                     | `@impulse-ui-native/primitives` | Available | Yes       | Clarify whole-label actions, close actions, and display-only usage.               |
| `Divider`                 | `@impulse-ui-native/primitives` | Available | Yes       | Validate horizontal/vertical orientation and logical insets in RTL layouts.       |
| `Accordion`               | `@impulse-ui-native/accordion`  | Available | Yes       | Validate nested content and dynamic-height transitions on devices.                |

### Form controls

| Component             | Package                                | Status    | Storybook | Follow-up                                                                                |
| --------------------- | -------------------------------------- | --------- | --------- | ---------------------------------------------------------------------------------------- |
| Compound `Control`    | `@impulse-ui-native/primitives`        | Extend    | Indirect  | Add dedicated composition and loading stories for its child-only parts.                  |
| `Input`               | `@impulse-ui-native/input`             | Available | Yes       | Expand addon-action and form integration examples; use `Textarea` for longer text.       |
| `Textarea`            | `@impulse-ui-native/input`             | Available | Yes       | Validate character counts, errors, and bounded auto-grow with the native keyboard.       |
| `FormField`           | `@impulse-ui-native/form-field`        | Available | Yes       | Add realistic render-prop integration with custom controls and form libraries.           |
| `Checkbox`            | `@impulse-ui-native/checkbox`          | Available | Yes       | Document checked, unchecked, and indeterminate field composition.                        |
| `Radio`               | `@impulse-ui-native/radio`             | Available | Yes       | Document caller-managed mutual exclusion for groups of standalone radios.                |
| `Switch`              | `@impulse-ui-native/switch`            | Available | Yes       | Add labelled field composition and native loading-state examples.                        |
| `Slider`              | `@impulse-ui-native/slider`            | Extend    | Yes       | Validate existing steps, marks, value bubbles, gestures, and RTL positioning on devices. |
| `RangeSlider`         | `@impulse-ui-native/slider`            | Extend    | Yes       | Validate thumb interaction, clamping, and minimum step spacing on devices.               |
| `SegmentedControl`    | `@impulse-ui-native/segmented-control` | Available | Yes       | Validate controlled selection, disabled options, and scroll/clip overflow on devices.    |
| `Select`              | `@impulse-ui-native/select`            | Extend    | Yes       | Add search, grouped/custom option rendering, and clearer async option states.            |
| `MultiSelect`         | `@impulse-ui-native/select`            | Extend    | Yes       | Add search, selection limits, selected-item summaries, and large-list guidance.          |
| `DatePicker`          | `@impulse-ui-native/datetime`          | Extend    | Yes       | Add date constraints, disabled dates, locale, and first-day-of-week controls.            |
| `DateRangePicker`     | `@impulse-ui-native/datetime`          | Extend    | Yes       | Add range constraints and clearer incomplete/invalid range behavior.                     |
| `DatetimePicker`      | `@impulse-ui-native/datetime`          | Extend    | Yes       | Add date/time constraints and locale/timezone guidance.                                  |
| `DatetimeRangePicker` | `@impulse-ui-native/datetime`          | Extend    | Yes       | Define range validation and timezone/DST behavior.                                       |
| `TimePicker`          | `@impulse-ui-native/datetime`          | Extend    | Yes       | Add interval, min/max time, and locale controls for hours/minutes/seconds.               |

### Feedback, state, and loading

| Component                  | Package                         | Status    | Storybook      | Follow-up                                                                                |
| -------------------------- | ------------------------------- | --------- | -------------- | ---------------------------------------------------------------------------------------- |
| `Spinner`                  | `@impulse-ui-native/primitives` | Available | Yes            | Keep size and semantic-color examples current.                                           |
| `Progress`                 | `@impulse-ui-native/progress`   | Available | Yes            | Validate linear/circular and determinate/indeterminate states on devices.                |
| Compound `Skeleton`        | `@impulse-ui-native/skeleton`   | Available | Yes            | Keep shape and control presets aligned with their corresponding components.              |
| `Toast` and compound parts | `@impulse-ui-native/toast`      | Available | Yes            | Validate stacked placement, actions, timed dismissal, and background pausing on devices. |
| `LoadingView`              | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add a direct story for standalone loading content.                                       |
| `EmptyView`                | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add direct stories for zero, one, and two actions.                                       |
| `ErrorView`                | `@impulse-ui-native/data-state` | Available | Via `DataView` | Add direct stories and retry-action guidance.                                            |
| `DataView`                 | `@impulse-ui-native/data-state` | Available | Yes            | Document precedence and transitions between loading, error, empty, and content.          |

### Navigation and workflow

| Component                           | Package                         | Status    | Storybook     | Follow-up                                                                                                                                                                     |
| ----------------------------------- | ------------------------------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Pagination`                        | `@impulse-ui-native/pagination` | Available | Yes           | Validate compact controls and the adaptive page window on narrow native layouts.                                                                                              |
| `Tabs`                              | `@impulse-ui-native/tabs`       | Available | Yes           | Validate native scrolling, controlled selection, and conditional panel mount/reset behavior. Only the active panel is mounted; there is no prerendering or lazy-loading mode. |
| `Carousel` and `CarouselPagination` | `@impulse-ui-native/carousel`   | Extend    | Yes           | Validate native snapping, resizing, peeking, and controlled realignment. Autoplay and explicit RTL support are deferred; reduced-motion support is not implemented.           |
| `Stepper`                           | `@impulse-ui-native/stepper`    | Extend    | Yes           | Define optional/disabled steps and validation hooks; document invalid/empty current-step behavior.                                                                            |
| `StepperTabsNavigation`             | `@impulse-ui-native/stepper`    | Extend    | Via `Stepper` | Currently renders equal-width placeholder bars. Implement labels, active-step styling, press navigation, and the advertised ref contract before adding scrolling.             |

### Overlays and composition infrastructure

| Component                              | Package                      | Status    | Storybook     | Follow-up                                                                                                                                                     |
| -------------------------------------- | ---------------------------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Portal`, `PortalHost`, `PortalsHost`  | `@impulse-ui-native/portal`  | Available | Yes           | Document nested-provider boundaries, host removal, and ordering.                                                                                              |
| `OverlayHost` and overlay registration | `@impulse-ui-native/overlay` | Available | Yes           | Define stacked-overlay Android Back policy and lifecycle observation guidance.                                                                                |
| `Modal` and compound parts             | `@impulse-ui-native/modal`   | Available | Yes           | Validate local Portal/global OverlayHost usage, backdrop/Back dismissal, and lifecycle callbacks on devices. Confirmation actions are composed in its footer. |
| `Flyout` and compound parts            | `@impulse-ui-native/flyout`  | Extend    | Yes           | Add snap points and stronger scroll/gesture coordination; validate both placements on devices.                                                                |
| `Popover` and compound parts           | `@impulse-ui-native/popover` | Extend    | Yes           | Validate anchor tracking, safe-area collision handling, outside dismissal, and Android Back on devices.                                                       |
| `Tooltip`                              | `@impulse-ui-native/popover` | Extend    | Via `Popover` | Validate long-press opening, timed dismissal, and inverse-surface placement on devices.                                                                       |

### Data visualization

| Component                                               | Package                     | Status | Storybook  | Follow-up                                                                  |
| ------------------------------------------------------- | --------------------------- | ------ | ---------- | -------------------------------------------------------------------------- |
| `LineChart`                                             | `@impulse-ui-native/charts` | Extend | Yes        | Add interaction, tooltips, legends, and selection.                         |
| `MultiLineChart`                                        | `@impulse-ui-native/charts` | Extend | Yes        | Add shared interaction, series toggling, and overlapping-series treatment. |
| `BarChart`                                              | `@impulse-ui-native/charts` | Extend | Yes        | Add interaction, labels, stacked mode, and horizontal orientation.         |
| `MultiBarChart`                                         | `@impulse-ui-native/charts` | Extend | Yes        | Add stacked mode, legends, and series toggling.                            |
| `PieChart`                                              | `@impulse-ui-native/charts` | Extend | Yes        | Add labels, legends, selection, and empty-data guidance.                   |
| `MultiPieChart`                                         | `@impulse-ui-native/charts` | Extend | Yes        | Add ring labels, legends, and interactive series details.                  |
| `Bar`, `Grid`, `Label`, `Line`, `Pie`, `XAxis`, `YAxis` | `@impulse-ui-native/charts` | Extend | Via charts | Document their exported lower-level composition contracts.                 |

## Supporting packages

| Package                       | Current role                                                              | Follow-up                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `@impulse-ui-native/core`     | Shared state/event hooks, one-shot timers, and Android Back subscriptions | Document application-facing APIs and lifecycle guarantees.                                |
| `@impulse-ui-native/echo`     | Typed event channel                                                       | Replace the placeholder usage example with a real augmented event map.                    |
| `@impulse-ui-native/endpoint` | Axios and TanStack Query factories                                        | Add error, cancellation, retry, pagination, and cache-key examples.                       |
| `@impulse-ui-native/toolkit`  | Aggregated public packages                                                | Keep export/dependency coverage current and document tree-shaking; icons remain separate. |

## Remaining roadmap

Completed component families live in the inventory above instead of remaining
in candidate tables. No new component is currently marked **Planned**.

### Priority 0: documentation and native verification

- [ ] Add dedicated Storybook coverage for `SafeAreaView`, compound `Control`,
      standalone data-state views, and theme tokens.
- [ ] Define supported React Native, Expo, iOS, and Android versions in one
      compatibility document.
- [ ] Add an example form and a data-backed screen combining multiple packages.
- [ ] Exercise the native validation gaps recorded above on iOS and Android.
- [ ] Keep the website catalog, package docs, and inventory aligned without
      presenting browser previews as native feature parity.

### Priority 1: extend existing APIs

- [ ] Add picker constraints and locale/timezone contracts.
- [ ] Add Select search, richer option composition, and MultiSelect limits.
- [ ] Complete `StepperTabsNavigation` and define step validation behavior.
- [ ] Add Flyout snap points and native scroll coordination.
- [ ] Establish shared chart interaction, selection, tooltip, and legend APIs.

### Priority 2: validate additional chart families

| Candidate         | Status    | Suggested scope                                                                                |
| ----------------- | --------- | ---------------------------------------------------------------------------------------------- |
| Additional charts | Candidate | Area, stacked-area, scatter, and sparkline variants after shared chart interaction APIs exist. |

## Cross-component work

- RTL layout, logical insets, and native gesture direction.
- Font scaling and dynamic type.
- Controlled/uncontrolled state conventions and selection lifecycles.
- Ref forwarding and imperative APIs where useful.
- Form-library integration examples.
- Locale, timezone, and formatting boundaries.
- Performance budgets for lists, charts, icons, and animated overlays.

Web parity, built-in accessibility, reduced motion, automated behavior tests, and
visual regression automation remain deferred; they are not current implementation
or verification requirements.

## Updating the roadmap

1. Verify public exports and prop contracts against the owning package source.
2. Update the inventory row and remove completed work from the remaining roadmap.
3. Keep package documentation and native Storybook examples current.
4. Run the applicable typechecks/builds and record remaining native-validation gaps.
5. Update the website catalog and public support claims when capabilities change.
6. Update `Last reviewed` after reviewing the relevant inventory.
