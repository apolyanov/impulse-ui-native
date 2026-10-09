---
name: compound-component-authoring
description: Create, extend, or review Parent.Child compound component APIs in ImpulseUI Native, including child-only parts, convenience components, shared context, theme tokens, and public exports. Use for composable component families; do not apply to ordinary screen composition or unrelated components merely grouped in a namespace.
---

# Compound component authoring

Build parts consumers can arrange directly, with optional convenience components
that assemble those same parts. This skill is scoped to ImpulseUI Native.

## Start from the right precedent

Follow [the repository skill](../impulse-ui-native-repo/SKILL.md) for ownership,
platform scope, dependencies, documentation, and verification. Native iOS and
Android are the default scope; web behavior, built-in accessibility, and reduced
motion remain deferred unless explicitly requested.

Read [the pattern analysis](references/existing-patterns.md) when choosing an API
shape or behavioral analog. It covers every current public dotted component
family identified in the source review. Inspect the relevant source before
copying it: older implementations do not uniformly satisfy current conventions.

For interactive controls, also follow
[control-authoring](../control-authoring/SKILL.md). For React implementations,
follow [hook-ordering](../hook-ordering/SKILL.md), with dependency order taking
precedence over grouping hooks mechanically. Repository helper-placement rules
take precedence over generic examples that place helpers beside components.

## Choose the composition contract

Before implementation, identify:

- Which parts are public, what each renders, and where supplied children go.
- Whether the API is a namespace only or a callable convenience component with
  attached parts.
- Which part owns shared state, which descendants consume it, and whether any
  part requires a nearer item-level provider.
- Which parts can be omitted, reordered, repeated, or used independently.
- Which defaults belong to the convenience component and which behavior belongs
  to a part, including disabled state and mounting/lifecycle behavior.

Use a plain namespace when manual composition is the primary API, as in
`Accordion.Root` or `SegmentedControl.Root`. Add a callable convenience component
when a common arrangement meaningfully reduces consumer work, as in `Card` or
`Toast`. Do not invent a convenience component or a `Root` member solely to make
every namespace uniform.

Use context only for actual coordination or an intentional containment contract.
Card and List demonstrate useful composition without shared context. Typography
demonstrates that dotted names alone do not imply a compound state model.

## Keep parts child-only

Public composable parts own their styling and behavior and render supplied
children. A `Header` does not manufacture a title; a `Close` owns closing behavior
but does not manufacture an X icon; an `Icon` slot does not pick its own icon.
Assemble default icons, labels, actions, and layout in the convenience component.

- Build the convenience component from the same public parts. Avoid a separate
  markup tree or duplicated styles and state.
- Preserve supplied `0`, empty strings, and `false`. Use explicit nullish checks
  when deciding whether a slot exists; do not use truthiness as a presence test.
- Render conditional JSX as `condition ? <Component /> : null`. For a supplied
  custom node with a default, render the custom node directly, then render the
  default separately only when the node is null or undefined.
- Wrapping supplied strings/numbers in token-aware typography is compatible
  with child-only composition. Arbitrary React nodes pass through unchanged;
  do not wrap a custom layout tree in a text element.
- Intrinsic structure or lifecycle behavior is not fallback content. A root can
  render its surface/backdrop, and a selection item can calculate selected state.
  Deliberately content-free visual parts such as Skeleton.Bone can render their
  own mark. Specify this distinction rather than applying child-only rules blindly.

Treat content-generating older parts as compatibility precedents, not the
template for new child-only slots. Do not change an existing public contract
incidentally while adding a sibling component.

## Own state once

Put coordinated state in Root or a dedicated Provider; do not make every child
keep a copy. Use a dedicated Provider when lifecycle/state needs to be separate
from the rendered surface, as Modal does. Root may be provider-only, as Popover
is, or provide state and render a container, as SegmentedControl does.

- Use `useControllableState` for meaningful controlled/uncontrolled support.
  Match semantic prop names (`value` or `open`) and define the empty state. Use
  discriminated props when the modes have different requirements; do not copy
  SegmentedControl's required `defaultValue` into unrelated contracts.
- Derive selected/open state from the shared value and an explicit item value.
  Use item context for nested ownership, as Accordion does. Prefer explicit
  children and context over child cloning or inspecting consumer JSX trees.
- Use typed context with an undefined default and a focused consumer hook that
  reports the required parent when it is missing. Do not silently use dummy
  state for a part that requires its parent.
- Memoize provider values and reference-valued props. Stabilize semantic event
  handlers with `useEventCallback`; use `useCallback` for other closures.
- Resolve group and local disabling together. Disabled children cannot override
  a disabled group. Respect loading and lifecycle interactivity where relevant;
  block the transition as well as styling the state.
- Preserve native events and consumer callbacks when composing internal handlers.
  Define transition/callback ordering; prop spreading must not replace the
  internal handler or let consumers bypass resolved disabled state.
- Specify mount policy only when relevant: never mounted, first-use mounted,
  retained, or unmounted when inactive. Keep exit animations mounted until their
  completion. Do not introduce lazy mounting merely because the API is compound.
- For portals, inspect whether context must be explicitly re-provided at the
  destination. Popover.Content is the local example; follow the actual host's
  provider and lifecycle requirements.

## Organize implementation and exports

Keep each component in its own file, including private implementation children.
Use named memoized function expressions for ordinary components. Keep public
props and theme-prop contracts in `types/`, pure helpers in `utils/`, constants in
`constants/`, contexts in `contexts/`, and extracted hooks in individual hook
files. Create directories only when they have a concrete responsibility.

Assemble the namespace at module scope through a barrel or a focused composition
module. For a callable family, attach parts to the memoized component with
`Object.assign`; preserve the inferred component and member types rather than
erasing them with `any` or a broad React component cast.

Card, List, and Toast use an internal `*-parts.ts` module that their convenience
components import. Their public barrel attaches those parts to the convenience
component. Use that structure when it avoids a cycle; otherwise direct part
imports, as used by Modal and Popover, are sufficient. A convenience component
must not import the public barrel that imports it back.

Expose only intentional composition capabilities. Keep private surfaces,
lifecycle helpers, and entry renderers out of the namespace and public barrels.
Export public types through the owning package's types barrel and root. Verify
toolkit aggregation and direct-install dependencies using the repository skill;
do not force standalone named exports for every part if the package exposes a
namespace as its contract.

## Style parts through theme tokens

Use the owning component's token factory for reusable geometry and appearance.
Share root/item/state/size tokens by responsibility; do not duplicate literal
colors or dimensions across parts or the convenience component. Add only
meaningful size and variant axes.

Create token-dependent styles with `useThemedStyles` and a module-level
`themedStyles` factory. That factory is the exception to the rule against helper
functions beside a component. Use `useComponentsTokens` for primitive props,
non-style values, and animated styles that cannot use the factory. Use repository
primitives for their style and interaction contracts; raw native containers are
appropriate when required for scrolling, measurement, or animation.

For style-prop-aware parts, follow the nearest analog's precedence: component
styles, extracted style props, then the supplied style. Preserve function-valued
pressable styles. Use Reanimated for animations and cancel them on cleanup.

## Document and verify both APIs

Show direct composition in Storybook and README, plus the convenience form when
one exists. Demonstrate custom children and the relevant provider hierarchy,
controlled behavior, disabled states, and light/dark token customization. For
stateful families, exercise sibling and nested roots to detect state leakage.

Review these meaningful invariants:

- The convenience form uses the public parts and keeps defaults outside slots.
- Omitted parts and falsy supplied content follow the documented contract.
- Selection/open state, disabling, events, and mount policy have one owner.
- Required-parent failures name the correct Root, Item, or Provider.
- Consumer styles and callbacks survive composition; internal behavior survives
  prop spreading.
- Imports are acyclic; public members and prop types remain inferred and reachable.

Run the applicable formatter, package typechecks/builds, and native behavior
checks described by the repository skill. Update release documentation only
when public capability changes. Do not add tests that merely mirror namespace
assembly, and do not describe typechecks or builds as behavioral tests.
