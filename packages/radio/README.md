# @impulse-ui-native/radio

Token-aware radio controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/radio
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Radio` supports controlled and uncontrolled selected state.
- `RadioProps` describes the component API.

## Usage

```tsx
import { useState } from "react";

import { Radio } from "@impulse-ui-native/radio";

export function DeliveryMethodRadio() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. Pressing a radio selects it;
pressing it again does not clear the selection. The component accepts the
shared `small`, `medium`, and `large` sizes and the `filled`, `outlined`, and
`soft` selection variants.

## Tones

Use `tone="neutral" | "primary" | "secondary"` independently of
`variant="filled" | "outlined" | "soft"`. The default tone is `primary`,
preserving existing appearances. Disabled styling remains neutral for all tones.
Appearance tokens are explicit `colors[tone][variant]` maps under this component's
theme tokens, replacing `variants[variant]`. Geometry and value behavior are unchanged.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/radio.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
