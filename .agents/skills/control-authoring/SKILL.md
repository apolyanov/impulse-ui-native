---
name: control-authoring
description: Design, implement, review, or document reusable interactive controls in the ImpulseUI Native monorepo. Use for new controls and control families such as toggles, choices, buttons, inputs, selectors, and pickers; do not use for ordinary app screens or non-interactive layout components.
---

# ImpulseUI Native control authoring

Create controls that feel native to the library rather than isolated widgets. Base decisions on the closest existing controls, while checking the intended semantics instead of copying an implementation mechanically.

## Current platform scope

Author controls for native iOS and Android only. Do not implement browser-only
interaction, DOM behavior, hover/focus-visible states, web keyboard navigation,
or web-specific examples and tests unless the user explicitly requests them.
Existing web compatibility may remain when it is incidental, but it is not a
completion requirement. Built-in accessibility semantics are deferred alongside
web work. Do not add accessibility props or screen-reader-specific behavior
unless the user explicitly requests that scope.

## Start with repository context

1. Follow the `impulse-ui-native-repo` skill for package boundaries, dependency direction, exports, Storybook, and release workflow.
2. Read every `AGENTS.md` that governs the files being changed and preserve unrelated work in the tree.
3. Inspect the closest behavioral and visual analogs. Read [references/existing-patterns.md](references/existing-patterns.md) for the current pattern map and relevant source paths.
4. When adding or changing React components or hooks, follow the `hook-ordering` skill.

## Classify the control before placing it

Choose ownership from behavior and public API, not visual resemblance alone:

- Put a broadly reusable, low-domain interaction atom in `packages/primitives/src/components/atoms`. `Button` and `IconButton` are the reference points.
- Build rectangular label/value/error fields from the compound `Control` primitives in `packages/primitives/src/components/controls`. `Input`, `Select`, and the date/time pickers are the reference points. Do not place the new public form control itself in this internal foundation directory.
- Use a dedicated package for meaningful state, group semantics, dependencies, or an independently useful install surface. `checkbox` and `radio` are the smallest package examples.
- Extend an existing domain package when the control shares its value model and helpers with that family. Date and time picker variants belong in `datetime`.

Record the ownership decision before implementation. If the answer is unclear, compare direct dependencies, shared state, likely sibling controls, and whether consumers would reasonably install it independently.

## Define behavior and API first

Write down the control's semantic role, value model, state transitions, and disabled behavior before styling it.

- Prefer native React Native prop contracts and extend the nearest primitive props rather than recreating press, style, spacing, dimension, or shadow props.
- Support controlled and uncontrolled operation when both are useful. Use `value`/`defaultValue`/`onChange` for value controls or the established semantic equivalent such as `checked`/`defaultChecked`/`onCheckedChange`.
- Use `useControllableState` for that dual mode. Do not mirror controlled props into local state with effects.
- Keep transient interaction state separate from committed value state. Picker flyouts, for example, stage temporary values and commit on Apply.
- Preserve consumer callbacks when adding internal handlers. Run the semantic transition deliberately, then invoke the supplied callback with the original native event when applicable.
- Apply `size` and `variant` only when those axes are meaningful. Use the shared `ComponentSize` and `ComponentVariant` types rather than local string unions.
- Avoid speculative props. Add group-level behavior such as mutual exclusion, validation, roving focus, or shared labels to a group abstraction instead of overloading an item.

## Implement against library conventions

- Follow Input's composition model: reusable compound parts render their supplied
  children and own only their styling and behavior. Assemble default icons,
  labels, content, and actions in the public convenience component, built from
  those parts; do not hide default content inside child-only composable parts.
- Use `condition ? <Component /> : null` for conditional JSX. Keep default
  content in the convenience component, rather than `children ?? <Component />`
  inside child-only composable parts.
- Always use `react-native-reanimated` for component animations and animation
  hooks. Follow the repository skill's animation and runtime dependency guidance.
- Keep public prop contracts in the package `types` directory and export them through the nearest barrel and package root.
- Keep exactly one React component implementation per file, including private child components. When a compound API improves composition, implement each part in its own file and assemble it as `Parent.Child` through a barrel or dedicated composition module.
- Do not declare helper functions alongside a component. The sole exception is the `themedStyles` function used by `useThemedStyles`, which may remain at module scope in the component file. Keep callbacks and render-specific functions inside the component; move every other reusable pure function to a focused file in the owning package's `utils` directory.
- Apart from the component export itself, put every module-level constant in a focused `.constants.ts` file under the owning package's `constants` directory and import it into the component. Name constants declared in those constant modules in PascalCase (`DefaultMin`, not `DEFAULT_MIN`); ordinary bindings such as configuration objects, static style sheets, fixture data, and Storybook metadata continue to use camelCase. Preserve names that an external framework requires or generated code owns. Do not leave constants beside the component implementation.
- Use a named function expression wrapped in `memo` for ordinary public components. Preserve the explicit generic cast pattern used by generic controls such as `Select` when inference requires it.
- Destructure defaults at the component boundary. Existing conventions usually default to `size="medium"`; action/choice controls commonly use `variant="filled"`, while field-shaped controls commonly use `variant="outlined"`.
- Use repository primitives (`Pressable`, `View`, `Typography`, and compound `Control`) instead of bypassing their token, style-prop, shadow, or interaction behavior without a concrete reason.
- Stabilize functions and reference-valued values created during render. Use `useEventCallback` for event handlers that must retain stable identity while reading current props/state, `useCallback` for other render-created functions, and `useMemo` for objects, arrays, style compositions, context values, and derived structures passed across component or hook boundaries. Primitive values and imported module-level constants are already identity-stable and do not need hooks.
- Put pure domain transformations such as key-to-action mappings, value normalization, clamping, and state conversion in the owning package's `utils` directory. Give their parameters and return values explicit types, including named finite unions where relevant; do not rely on scattered `as const` assertions to define the contract.
- Use React Native `StyleSheet` and theme hooks. Keep state-derived visual selection in one themed style function rather than scattering inline color and spacing decisions through JSX.
- Keep render code declarative. Extract a custom hook when open state, temporary values, committed values, effects, and handlers form a coherent behavior model.

## Keep deferred concerns out of scope

- Do not add `accessibilityRole`, `accessibilityLabel`, `accessibilityState`,
  `accessible`, live-region announcements, or other screen-reader-specific
  behavior unless accessibility work is explicitly requested.
- Disabled and loading states must still block or intentionally constrain
  interaction, not only change opacity.
- Keep small visuals usable through tokenized `hitSlop` or an adequately sized
  press target. Continue to consider RTL and font scaling.
- Reduced motion is deferred for all components for now. Do not plan or add
  reduced-motion detection, animation alternatives, props, examples, tests, or
  acceptance criteria unless the user explicitly requests that scope.

## Add theme tokens deliberately

Use component tokens for reusable visual decisions and primitive theme scales for shared values. Do not hard-code brand colors or duplicate size tables in the component.

For a newly themed control:

1. Add its token types under `packages/theme/src/types` and export them.
2. Add `create-<control>-tokens.ts` under `packages/theme/src/theme` and export it if the theme barrel exposes factories.
3. Add the token property to `ComponentsTokens` in `theme-provider.types.ts`.
4. Construct it in `createComponentsTokens` in `tokens.theme.ts`.
5. Consume it through `useComponentsTokens` or `useThemedStyles`.

Model tokens by responsibility: shared geometry and inactive/disabled values at the component level, size-dependent geometry under `sizes`, and meaningful appearance differences under `variants`. Do not force all five shared variants when the control does not have five coherent treatments.

## Complete the public surface

For a dedicated package, follow the neighboring package shape and include source barrels, manifest, TypeScript/tsup configuration, README, license, and changelog as required by the repository. Never add ESLint configuration files. Then:

- declare every directly imported workspace package in `dependencies`;
- declare host-provided native/runtime libraries in `peerDependencies` and compatible development dependencies;
- export from the owning package and add the package to `toolkit` only when aggregation is intended;
- add direct dependencies to `toolkit` and `storybook` when they import or re-export the package;
- update the workspace catalog only when a new shared third-party version is needed.

Icons remain direct subpath imports from `@impulse-ui-native/icon`; do not add them to the toolkit surface incidentally.

## Document and exercise the contract

Add the established Storybook trio under `packages/storybook/src/stories/<control>/`:

- `<control>.stories.tsx` for typed metadata, controls, and named exports;
- `<control>.examples.tsx` for reusable typed examples;
- `<control>.documentation.tsx` for the long-form documentation page.

Cover the meaningful matrix: default, supported sizes and variants, disabled/loading/error states, controlled and uncontrolled behavior, empty/selected/mixed states, and important composition or group behavior. Use examples designed for the native host.

Update the owning package README with installation, provider/peer requirements, exports, a minimal example, and state behavior. Update `docs/component-roadmap.md` for a new control or maturity change. Add a Changeset for a release-worthy public change; a new public control is normally minor.

## Verify the result

Use checks proportional to the changed surface:

1. Format all changed supported files and inspect the diff.
2. Typecheck and build the owning package plus directly affected `theme`, `primitives`, `toolkit`, and `storybook` packages.
3. Run relevant lint checks; remember package lint scripts can modify files.
4. Run `git diff --check`.
5. Render the Storybook stories in the native host when behavior or layout changed. Manually exercise interaction, controlled/uncontrolled behavior, disabled/loading behavior, and light/dark themes on the relevant iOS and Android targets.

Do not describe builds or Storybook checks as unit tests. If automated behavioral tests are warranted, first verify that an appropriate runner and native iOS/Android scope exist.

## Completion gate

Do not call a new control complete until all applicable items are true:

- ownership and dependency direction are correct;
- semantic state transitions are explicit;
- controlled and uncontrolled modes behave consistently;
- touch targets are accounted for;
- visuals come from theme tokens and work in light and dark themes;
- public types, package exports, and toolkit aggregation are intentional;
- Storybook, README, roadmap, and Changeset reflect the public contract;
- affected packages pass their checks and the interactive stories were exercised where feasible.
