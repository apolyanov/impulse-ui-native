# Existing control pattern map

Use this reference to choose analogs before implementing a new control. Re-read the cited source because this map records patterns, not frozen APIs.

## Choose analogs by concern

| Concern                  | Primary examples                   | Pattern to reuse                                                                                       |
| ------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Basic action             | `primitives` Button and IconButton | Primitive ownership, Pressable behavior, size/variant tokens, disabled and loading visuals             |
| Binary or item selection | Checkbox and Radio                 | Dedicated package, semantic controlled state, accessibility state, tokenized hit slop, state indicator |
| Text-entry field         | Input                              | Compound `Control` composition, label/addons/error, native input prop forwarding                       |
| Option field             | Select                             | Generic value API, behavior hook, field control separated from flyout content, open/close lifecycle    |
| Staged picker            | DatePicker and datetime hooks      | Temporary versus committed values, apply/cancel/clear behavior, domain-family ownership                |

Combine analogs when needed. A new switch may borrow package/state patterns from Checkbox, action handling from Pressable, and accessibility semantics specific to a switch. A searchable picker may borrow field composition from Select and text behavior from Input.

## Source paths

### Action primitives

- `packages/primitives/src/components/atoms/button.tsx`
- `packages/primitives/src/components/atoms/icon-button.tsx`
- `packages/primitives/src/components/atoms/pressable.tsx`
- `packages/primitives/src/types/button.types.ts`
- `packages/primitives/src/types/icon-button.types.ts`
- `packages/theme/src/theme/create-button-tokens.ts`
- `packages/theme/src/theme/create-icon-button-tokens.ts`

Button and IconButton are appropriate references for low-domain actions. Their placement does not imply that every interactive control belongs in primitives.

### Choice controls

- `packages/checkbox/src/components/checkbox.tsx`
- `packages/checkbox/src/types/checkbox.types.ts`
- `packages/radio/src/components/radio.tsx`
- `packages/radio/src/types/radio.types.ts`
- `packages/theme/src/theme/create-checkbox-tokens.ts`
- `packages/theme/src/theme/create-radio-tokens.ts`

Checkbox demonstrates three-state checked semantics and maps `indeterminate` to accessibility `mixed`. Radio demonstrates a one-way item transition: pressing an unchecked item selects it; pressing it again does not deselect it. Mutual exclusion and keyboard navigation belong to a future group-level abstraction, not the standalone item.

Both merge consumer styles through the Pressable callback, derive default hit slop from size tokens, preserve `onPress`, and make component-owned accessibility state explicit.

### Field controls

- `packages/primitives/src/components/controls/`
- `packages/input/src/components/input.tsx`
- `packages/select/src/components/select.tsx`
- `packages/select/src/components/select-control.tsx`
- `packages/datetime/src/components/common/date-control.tsx`

The compound `Control` directory is shared field infrastructure: provider, root, label, container, addon, input/value/placeholder, loader, and error. Public form controls compose it from their owning package. Keep domain behavior outside the foundation.

Select separates the generic value model and selection hook from field rendering and flyout rendering. Preserve this separation when a control has both a closed field and a complex selection surface.

### Staged and overlay controls

- `packages/datetime/src/components/date/date-picker.tsx`
- `packages/datetime/src/components/date/date-picker.flyout.tsx`
- `packages/datetime/src/hooks/use-datetime-picker.hook.ts`
- `packages/select/src/components/select.flyout.tsx`

DatePicker opens with a temporary copy of the committed selection, mutates the temporary value while the flyout is open, commits on Apply, discards on Cancel/close, and resynchronizes after the close animation. Use this model only when confirmation is part of the intended interaction; immediate-selection controls should not acquire staging accidentally.

Overlay-backed controls may require Gesture Handler, safe-area, theme, overlay, and portal providers. Check both Storybook host configurations before changing provider assumptions.

## Theme wiring map

The Checkbox implementation is a compact reference for the full path:

1. token contract: `packages/theme/src/types/checkbox-tokens.types.ts`;
2. type export: `packages/theme/src/types/index.ts`;
3. token factory: `packages/theme/src/theme/create-checkbox-tokens.ts`;
4. `ComponentsTokens` registration: `packages/theme/src/types/theme-provider.types.ts`;
5. default construction: `packages/theme/src/theme/tokens.theme.ts`;
6. component consumption: `packages/checkbox/src/components/checkbox.tsx`.

Use the primitive token scales and semantic colors where they express the design. Numeric values intrinsic to geometry can live in the component token factory. Keep disabled, unchecked/empty, selected, error, and focus colors semantically distinct when the control needs them.

## Public package map

Checkbox and Radio provide the smallest current dedicated-control package shape:

```text
packages/<control>/
  src/
    components/
      <control>.tsx
      index.ts
    types/
      <control>.types.ts
      index.ts
    index.ts
  CHANGELOG.md
  LICENSE
  README.md
  eslint.config.mjs
  package.json
  tsconfig.json
  tsup.config.ts
```

Add `hooks`, `utils`, `constants`, providers, or contexts only when behavior warrants them. A group control commonly justifies context/provider files; a simple item does not.

Trace a new public package across these integration points:

- owning package local and root barrels;
- `packages/toolkit/src/index.ts` and `packages/toolkit/package.json` when aggregated;
- `packages/storybook/package.json` when stories import it;
- package README and `docs/component-roadmap.md`;
- a Changeset for release-worthy additions.

## Storybook pattern

Representative locations:

- `packages/storybook/src/stories/button/`
- `packages/storybook/src/stories/icon-button/`
- `packages/storybook/src/stories/checkbox/`
- `packages/storybook/src/stories/radio/`
- `packages/storybook/src/stories/datetime/`

Use `satisfies Meta<typeof Component>`, `StoryObj<typeof meta>`, shared `ComponentSizeOptions` and `ComponentVariantOptions` when applicable, and `createStoryDescription`. Keep examples typed with `ComponentProps<typeof Component>` or a narrow pick of story-controlled props.

Do not create a story for every Cartesian combination. Cover each independent axis and add combinations only where interaction between states could reveal a real issue.

## Existing behavior is evidence, not a waiver

Older controls can omit requirements a new control needs. In particular, verify rather than assume:

- an icon-only control has a documented accessible-name requirement;
- loading blocks duplicate activation and exposes appropriate accessibility state;
- web keyboard and focus behavior match the semantic role;
- group controls implement group semantics rather than only styling a row of items;
- theme component overrides work before documenting consumer override support;
- stories were actually rendered in both relevant hosts.

Prefer the intended semantic contract when an existing implementation and platform accessibility guidance differ.
