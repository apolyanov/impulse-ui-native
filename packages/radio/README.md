# @impulse-ui-native/radio

Accessible, token-aware radio controls for React Native and React Native Web.

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
      accessibilityLabel="Standard delivery"
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
shared `small`, `medium`, and `large` sizes and all shared component variants.

The standalone radio does not render a label, so provide `accessibilityLabel`
unless a surrounding labelled control supplies an accessible name. Mutual
exclusion, shared values, and keyboard navigation will be provided by the
planned `RadioGroup` component.
