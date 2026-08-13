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
- `ComponentVariantOptions` contains `filled`, `outlined`, `soft`, `ghost`, and `plain`.

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

The package source also contains the toolkit's own stories and documentation screens, but those files are not part of the public root export.
