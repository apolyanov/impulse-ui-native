# @impulse-ui-native/storybook: capability guide

Author native component examples and discover supported options.

## Setup

- Install as a development dependency with the Storybook host; native preview uses the host providers.

## Capabilities

- Description metadata helpers and shared option constants.

## Boundaries and composition

- Authoring package, not a component runtime; stories themselves are not public package exports.
- Option arrays are not proof that every component supports every option; use component capability facts.

Exact contracts: [API reference](../api/storybook.md). Machine facts: [package JSON](storybook.json) or [full catalog](../capabilities.json).

## Recipes

- [story-authoring](../recipes.md#story-authoring)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.

## Public exports

- `ActionVariantOptions` (value)
- `ButtonToneOptions` (value)
- `ComponentSizeOptions` (value)
- `ComponentToneOptions` (value)
- `ComponentVariantOptions` (value)
- `createComponentDescription` (value)
  - `(notes: string): { notes: string; }`
- `createStoryDescription` (value)
  - `(notes: string): { notes: string; }`
- `DisplayVariantOptions` (value)
- `FieldToneOptions` (value)
- `FieldVariantOptions` (value)
- `SelectionVariantOptions` (value)
