# @impulse-ui-native/checkbox

Accessible, token-aware checkbox controls for React Native and React Native Web.

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
      accessibilityLabel="Accept terms"
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
`large` sizes and all shared component variants.

The standalone checkbox does not render a label, so provide
`accessibilityLabel` unless a surrounding labelled control supplies an
accessible name.
