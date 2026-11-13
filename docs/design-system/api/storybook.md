# @impulse-ui-native/storybook

Local package version: 17.4.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/storybook

Shared constants and metadata helpers used by the Impulse UI Native Storybook application.

## Installation

```sh
pnpm add -D @impulse-ui-native/storybook
```

This is an authoring-support package rather than a UI component package.

## Main exports

- `createStoryDescription(notes)` produces the notes metadata for an individual story.
- `createComponentDescription(notes)` produces component-level notes metadata.
- `ComponentSizeOptions` contains `small`, `medium`, and `large`.
- `ActionVariantOptions`, `DisplayVariantOptions`, `FieldVariantOptions`, and
  `SelectionVariantOptions` expose the variants supported by each component
  family.

## Usage

```ts
import {
  ComponentSizeOptions,
  createComponentDescription,
} from "@impulse-ui-native/storybook";

export default {
  title: "Primitives/Button",
  parameters: createComponentDescription("A token-driven action control."),
  argTypes: {
    size: { options: ComponentSizeOptions, control: "select" },
  },
};
```

The package source also contains the toolkit's stories and documentation screens for primitives, inputs, selection, date and time, feedback, navigation, overlays, portals, icons, and charts. Those files are discovered directly by the Storybook host and are not part of the public root export.

## Agent and design reference

Start with the [capability guide](../capabilities/storybook.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Library design recipes

The native host includes **Design system/Recipes**: realistic forms, filters, cards, data states, overlays, charts, color editing, onboarding and a variant/tone comparison. Recipe TS/TSX source is maintained in `docs/design-system/recipes/` and compiled against the public library APIs by `pnpm docs:check`. These are application compositions, not additional public component exports. The host loads the configured Montserrat family before rendering previews.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/storybook/src/constants/index.ts

```tsx
export * from "./storybook.constants";
```

### packages/storybook/src/constants/storybook.constants.ts

```tsx
import type {
  ActionVariant,
  ButtonTone,
  ComponentSize,
  ComponentTone,
  DisplayVariant,
  FieldTone,
  FieldVariant,
  SelectionVariant,
} from "@impulse-ui-native/theme";

export const ComponentSizeOptions = [
  "small",
  "medium",
  "large",
] satisfies ComponentSize[];

export const ActionVariantOptions = [
  "filled",
  "outlined",
  "soft",
  "ghost",
] satisfies ActionVariant[];

export const DisplayVariantOptions = [
  "filled",
  "outlined",
  "soft",
] satisfies DisplayVariant[];

export const FieldVariantOptions = [
  "filled",
  "outlined",
  "soft",
] satisfies FieldVariant[];

export const FieldToneOptions = [
  "neutral",
  "primary",
  "secondary",
] satisfies FieldTone[];

export const SelectionVariantOptions = [
  "filled",
  "outlined",
  "soft",
] satisfies SelectionVariant[];

/** @deprecated Use the options for the relevant component family. */
export const ComponentVariantOptions = ActionVariantOptions;

export const ButtonToneOptions = [
  "neutral",
  "primary",
  "secondary",
] satisfies ButtonTone[];

export const ComponentToneOptions = [
  "neutral",
  "primary",
  "secondary",
] satisfies ComponentTone[];
```

### packages/storybook/src/index.ts

```tsx
export * from "./utils";
export * from "./constants";
```

### packages/storybook/src/utils/index.ts

```tsx
export * from "./storybook.utils";
```

### packages/storybook/src/utils/storybook.utils.ts

```tsx
export function createStoryDescription(notes: string) {
  return {
    notes,
  };
}

export function createComponentDescription(notes: string) {
  return {
    notes,
  };
}
```
