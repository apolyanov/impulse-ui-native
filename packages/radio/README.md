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
