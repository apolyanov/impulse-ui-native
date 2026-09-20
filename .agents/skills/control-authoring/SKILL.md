---
name: control-authoring
description: Design, implement, review, or document reusable interactive controls in the ImpulseUI Native monorepo. Use for new controls and control families such as toggles, choices, buttons, inputs, selectors, and pickers; do not use for ordinary app screens or non-interactive layout components.
---

# ImpulseUI Native control authoring

Create controls that feel native to the library rather than isolated widgets. Base decisions on the closest existing controls, while checking the intended semantics instead of copying an implementation mechanically.

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

- Prefer native React Native prop contracts and extend the nearest primitive props rather than recreating press, style, accessibility, spacing, dimension, or shadow props.
- Support controlled and uncontrolled operation when both are useful. Use `value`/`defaultValue`/`onChange` for value controls or the established semantic equivalent such as `checked`/`defaultChecked`/`onCheckedChange`.
- Use `useControllableState` for that dual mode. Do not mirror controlled props into local state with effects.
- Keep transient interaction state separate from committed value state. Picker flyouts, for example, stage temporary values and commit on Apply.
- Preserve consumer callbacks when adding internal handlers. Run the semantic transition deliberately, then invoke the supplied callback with the original native event when applicable.
- Apply `size` and `variant` only when those axes are meaningful. Use the shared `ComponentSize` and `ComponentVariant` types rather than local string unions.
- Avoid speculative props. Add group-level behavior such as mutual exclusion, validation, roving focus, or shared labels to a group abstraction instead of overloading an item.

## Implement against library conventions

- Keep public prop contracts in the package `types` directory and export them through the nearest barrel and package root.
- Use a named function expression wrapped in `memo` for ordinary public components. Preserve the explicit generic cast pattern used by generic controls such as `Select` when inference requires it.
- Destructure defaults at the component boundary. Existing conventions usually default to `size="medium"`; action/choice controls commonly use `variant="filled"`, while field-shaped controls commonly use `variant="outlined"`.
- Use repository primitives (`Pressable`, `View`, `Typography`, and compound `Control`) instead of bypassing their token, style-prop, shadow, or interaction behavior without a concrete reason.
- Use `useEventCallback` for stable handlers that must read current values. Use memoization only when identity or computation cost matters.
- Use React Native `StyleSheet` and theme hooks. Keep state-derived visual selection in one themed style function rather than scattering inline color and spacing decisions through JSX.
- Keep render code declarative. Extract a custom hook when open state, temporary values, committed values, effects, and handlers form a coherent behavior model.

## Treat accessibility as behavior

- Set the semantic `accessibilityRole` and merge caller-provided `accessibilityState` with the control's actual selected, checked, disabled, busy, expanded, invalid, or mixed state as applicable.
- Never let caller state make the rendered semantics untrue. The control-owned state wins for fields the component manages.
- Ensure icon-only and otherwise unlabelled controls have an accessible-name path; document when consumers must provide `accessibilityLabel`.
- Disabled and loading states must block or intentionally constrain interaction, not only change opacity.
- Keep small visuals usable through tokenized `hitSlop` or an adequately sized press target.
- Consider focus, keyboard activation/navigation on web, RTL, font scaling, reduced motion, and screen-reader announcements according to the control's semantics.
- For a group, implement the group's native semantics and keyboard model rather than relying only on individual item roles.

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

For a dedicated package, follow the neighboring package shape and include source barrels, manifest, TypeScript/tsup/ESLint configuration, README, license, and changelog as required by the repository. Then:

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

Cover the meaningful matrix: default, supported sizes and variants, disabled/loading/error states, controlled and uncontrolled behavior, empty/selected/mixed states, accessibility-relevant states, and important composition or group behavior. Use examples that work in native and web hosts.

Update the owning package README with installation, provider/peer requirements, exports, a minimal example, state behavior, and accessibility obligations. Update `docs/component-roadmap.md` for a new control or maturity change. Add a Changeset for a release-worthy public change; a new public control is normally minor.

## Verify the result

Use checks proportional to the changed surface:

1. Format all changed supported files and inspect the diff.
2. Typecheck and build the owning package plus directly affected `theme`, `primitives`, `toolkit`, and `storybook` packages.
3. Run relevant lint checks; remember package lint scripts can modify files.
4. Run `git diff --check`.
5. Render the Storybook stories in the relevant native and web hosts when behavior or layout changed. Manually exercise interaction, accessibility state, controlled/uncontrolled behavior, disabled/loading behavior, and light/dark themes.

Do not describe builds or Storybook checks as unit tests. If automated behavioral tests are warranted, first verify that an appropriate runner and native/web scope exist.

## Completion gate

Do not call a new control complete until all applicable items are true:

- ownership and dependency direction are correct;
- semantic state transitions are explicit;
- controlled and uncontrolled modes behave consistently;
- accessibility role, name, state, focus, and touch target are accounted for;
- visuals come from theme tokens and work in light and dark themes;
- public types, package exports, and toolkit aggregation are intentional;
- Storybook, README, roadmap, and Changeset reflect the public contract;
- affected packages pass their checks and the interactive stories were exercised where feasible.
