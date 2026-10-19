# Package simplification audit

Date: 2026-10-20.

## Scope and workflow

The static scan covered all 37 packages under `packages/`: 11,509 TypeScript
source files, including 10,597 icon files and 172 Storybook files. Render trees,
hooks, duplicate implementations, and unused bindings were scanned structurally,
followed by manual review of candidate implementations and their contracts.
This is not a line-by-line review of every icon path or runtime validation.
Apps and generated build output are outside this audit.

The user subsequently authorized implementing all remaining items together. Preserve public APIs, consumer
callbacks, style precedence, controlled/uncontrolled behavior, and native
interaction. Implementation and user verification are separate statuses.
At the user's request, do not run verification commands; the user will verify.

The calendar-day change that prompted this audit is already applied: one
Pressable owns its dimensions, background, radius, alignment, and clipping.
The user confirmed the earlier clipping fix resolved the Android issue;
the subsequent consolidation has not been confirmed separately.

## Queue

| Item | Area | Status |
| --- | --- | --- |
| 1 | Select option layout wrapper | Implemented; awaiting user verification |
| 2 | Picker action wrappers | Implemented; awaiting user verification |
| 3 | Style-prop cache correctness | Implemented; awaiting user verification |
| 4 | Theme selector hooks | Implemented; awaiting user verification |
| 5 | Duplicate themed-styles overload | Implemented; awaiting user verification |
| 6 | Redundant style flattening | Implemented; awaiting user verification |
| 7 | Time-picker rows and unused private props | Implemented; awaiting user verification |
| 8 | Component selection memoization | Implemented; awaiting user verification |
| 9 | Time-picker arrays and initial indexes | Implemented; awaiting user verification |
| 10 | Icon sizing and variant lookup | Implemented; awaiting user verification |
| 11 | Tabs state options | Implemented; awaiting user verification |
| 12 | Progress common props | Implemented; awaiting user verification |
| 13 | Shared picker field structure | Implemented; awaiting user verification |
| 14 | Shared picker draft lifecycle | Implemented; awaiting user verification |
| 15 | Shared overlay timing transitions | Implemented; awaiting user verification |
| 16 | Duplicate date guards | Implemented; awaiting user verification |
| 17 | DataState contract mismatch | Implemented; awaiting user verification |

## Implementation decisions

All listed items are implemented and await user verification. No builds, tests,
formatting checks, package packing, or device checks were run for this pass.

- Style caching compares a fixed sequence of actual style values, preserving
  object identity for unchanged styles without string-key collisions. The public
  key utility now includes property names and unambiguous value serialization.
- Icon wrappers share a private factory. Each wrapper supplies its own six
  variants once at module initialization; per-icon entry points are preserved.
- Control.Field assembles the common field shell; Control.Trigger owns the
  interactive styled container; Control.Icon resolves supplied icons' field colors.
- Picker draft behavior is private to datetime and preserves existing public
  date/range hook result names. Close completion finishes the shared close
  state as well as resynchronizing drafts.
- Modal and Toast share timing through overlay. Runtime peer and development
  dependencies and the existing lockfile importer were updated accordingly.
- EmptyView and ErrorView retain their documented always-render-children behavior.
  At the user's request, legacy detail/state props were removed entirely. Both
  share StateContainerProps and a private container preserving separate outer
  and inner styles. DataView retains its state-selection and detail props.
- Both public date-guard names remain available through one implementation.

## Individual findings

### 1. Select option layout wrapper

Source: [option.tsx](../packages/select/src/components/option.tsx).

Move the inner View's row geometry onto the existing Pressable. Keep label
truncation, the selection indicator, disabled behavior, and event forwarding.
Merge styles in this order: component defaults, extracted style props, supplied
style. Preserve function-valued styles and pressed-state handling.

Implemented: removed the inner View and moved its themed geometry onto the
Pressable. No verification commands were run. Check Select and MultiSelect
options, long labels, selected/disabled rows, and supplied styles.

### 2. Picker action wrappers

Source: [datetime-picker-flyout-actions.tsx](../packages/datetime/src/components/common/datetime-picker-flyout-actions.tsx).

Replace the Clear alignment wrapper with `alignSelf: "center"` on its Pressable.
Move `flex: 1` from the two button wrappers into the buttons' styles. Preserve
the footer's gap, equal button widths, and callbacks.

### 3. Style-prop cache correctness

Sources: [use-style-props.hook.ts](../packages/theme/src/hooks/use-style-props.hook.ts)
and [style.utils.ts](../packages/theme/src/utils/style.utils.ts).

The cache key concatenates values without property names or separators.
For example, `{ width: 1, height: 23 }` and `{ width: 12, height: 3 }` both produce
`"123"`. The hook can therefore reuse stale styles. This is a correctness concern.
Replace the custom string cache with direct extraction or comparison of actual
style fields. Consider extracted-object identity when choosing the implementation.

### 4. Theme selector hooks

Sources: `packages/theme/src/hooks/use-components-tokens.hook.ts`,
`use-colors.hook.ts`, `use-space.hook.ts`, `use-radii.hook.ts`, and
`use-border.hook.ts`.

Return each context property directly. Their `useMemo` returns the same reference
it receives and adds no identity stability. Preserve the hooks and public types.

### 5. Duplicate themed-styles overload

Source: [use-themed-styles.ts](../packages/theme/src/hooks/use-themed-styles.ts).

Remove one of the two identical overload declarations. Keep supported signatures
and runtime behavior intact.

### 6. Redundant style flattening

Sources: Checkbox, Radio, Switch, Card.Pressable, and List.Pressable.

Their callbacks flatten style arrays before passing them to the shared Pressable,
which flattens them again. Return the arrays directly. Preserve callbacks,
consumer function-valued styles, and pressed overrides. Do not indiscriminately
remove style extraction: it can be necessary to put consumer style props above
component defaults.

### 7. Time-picker rows and unused private props

Sources: [picker-column.tsx](../packages/datetime/src/components/time/picker-column.tsx)
and [calendar-day.tsx](../packages/datetime/src/components/common/calendar-day.tsx).

Time-picker rows are Pressables without press handlers; scrolling owns selection.
Use a layout View if rows are intentionally not tappable. Tap-to-select would be
a separate feature. Remove unused private PickerColumn `type` and `format`
props and their call-site arguments, and CalendarDay's unused `selected` prop.
Preserve the actual `isSelected` prop.

### 8. Component selection memoization

Sources: Tag, BadgeAddon, and Stepper.

Choose existing component references directly rather than memoizing the lookup:
`onPress ? Pressable : View`, or the current item's component. Keep memoization
of context values and callbacks when their identities matter.

### 9. Time-picker arrays and initial indexes

Source: [time-picker.flyout.tsx](../packages/datetime/src/components/time/time-picker.flyout.tsx).

Minutes and seconds create identical immutable ranges. Share that stable data.
Calculate the three primitive initial indexes directly instead of memoizing them.
Preserve repeated wheel ranges and initial positioning behavior.

### 10. Icon sizing and variant lookup

Sources: `packages/icon/src/components/icon.tsx` and
`packages/icon/src/icons/wrappers/`.

Calculate the renderer's numeric size directly. All 1,512 wrappers construct a
variant map inside `useMemo`; use stable per-icon maps outside rendering and a
direct lookup. Keep per-icon imports and exports; do not introduce a central
registry that imports all icons.

### 11. Tabs state options

Source: [tabs.tsx](../packages/tabs/src/components/tabs.tsx).

Pass options directly to `useControllableState`. That hook reads individual
fields and does not depend on the options object's identity. Keep active-panel
keys and initial-scroll state.

### 12. Progress common props

Source: [progress.tsx](../packages/progress/src/components/progress.tsx).

Remove the memoized common-props object immediately spread into the child.
Its rest-props dependency is recreated during rendering, and the object is not
passed as a single prop. Preserve existing unsupported-variant behavior.

### 13. Shared picker field structure

Sources: DateControl, SelectControl, and TimePicker.

These repeat label, trigger, container, addons, and error composition. Consider
a focused part in the existing Control family owning the styled interactive
surface. Keep domain defaults in convenience components and supplied content
in composable parts. Review disabled behavior, nested addon presses, and style
targets before choosing the abstraction.

### 14. Shared picker draft lifecycle

Sources: `use-datetime-picker.hook.ts`, `use-datetime-range-picker.hook.ts`, and
TimePicker.

Opening snapshots, Apply, Cancel, and synchronization after closing repeat.
Share that lifecycle only if date/range transformations remain in the owning
hooks. Temporary and committed values must remain distinct. Preserve close
animation timing and external controlled updates.

### 15. Shared overlay timing transitions

Sources: `use-modal-lifecycle.hook.ts` and `use-toast-lifecycle.hook.ts`.

Enter/exit progress animations and completion callbacks repeat. A focused helper
in `overlay` could own the timing machinery. Keep Toast's timer and store-driven
dismissal separate, and preserve animation cancellation and transition IDs.

### 16. Duplicate date guards

Source: [calendar-day.utils.ts](../packages/datetime/src/utils/calendar-day.utils.ts).

`isTimeRange` and `isDateRange` have identical implementations. Back both public
names with one implementation if both must remain compatible. Do not remove
exported utilities merely because the repository has no call sites.

### 17. DataState contract mismatch

Sources: EmptyView, ErrorView, and `state-view.types.ts` in `packages/data-state`.

Resolved: EmptyView and ErrorView accept only View props, children, and
`contentContainerStyle`. Legacy state, text, variant, and action props were removed
from their types and the compatibility filtering was deleted. DataView continues
to own state selection and configured details. Separate outer `style` and inner
`contentContainerStyle` layout semantics are preserved.

## Layers and state to retain

- Carousel indicators separate visual mark size from the larger touch target.
- Radio indicators represent a distinct inner selection mark.
- Color swatches separate touch targets, selection rings, clipped colors, and
  checkerboard/content layers.
- Avatar separates clipped image content from the status marker outside it.
- Accordion content separates animated clipping from natural-height measurement.
- LoadingView separates content, the overlay, and loader-height measurement.
- Slider layers support positioning, shadows, highlights, and value bubbles.
- Portal/external-store subscription functions need stable identities.
- Slider and color-picker React state, refs, and UI-thread shared values have
  different synchronization responsibilities.
- Picker committed and temporary values support Apply/Cancel semantics.
- `isClosed` is not the inverse of `isOpen`: closing animations create an
  intermediate state.
- Public compound parts remain useful even when their implementations are short.
- Storybook example layout should favor clear usage over removing every wrapper.

No blanket removal of `memo`, `useMemo`, callbacks, wrappers, or context layers
is recommended.
