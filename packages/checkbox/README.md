# @impulse-ui-native/checkbox

Token-aware checkbox controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/checkbox
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Checkbox` supports checked, unchecked, and indeterminate states.
- `CheckboxProps` describes the controlled and uncontrolled component API.
- `CheckboxState` is `boolean | "indeterminate"`.

## Usage

```tsx
import { useState } from "react";

import type { CheckboxState } from "@impulse-ui-native/checkbox";
import { Checkbox } from "@impulse-ui-native/checkbox";

export function TermsCheckbox() {
  const [checked, setChecked] = useState<CheckboxState>(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. Pressing an indeterminate checkbox
changes it to checked. The component accepts the shared `small`, `medium`, and
`large` sizes and the `filled`, `outlined`, and `soft` selection variants.

## Tones

Use `tone="neutral" | "primary" | "secondary"` independently of
`variant="filled" | "outlined" | "soft"`. The default tone is `primary`,
preserving existing appearances. Disabled styling remains neutral for all tones.
Appearance tokens are explicit `colors[tone][variant]` maps under this component's
theme tokens, replacing `variants[variant]`. Geometry and value behavior are unchanged.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/checkbox.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
