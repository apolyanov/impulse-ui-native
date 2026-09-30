# @impulse-ui-native/switch

Token-aware animated switch controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/switch react-native-reanimated react-native-worklets
```

Complete the platform setup required by Reanimated and Worklets, rebuild the native application when necessary, and render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Switch` supports controlled and uncontrolled on/off state.
- `SwitchProps` describes the component API.

## Usage

```tsx
import { useState } from "react";

import { Switch } from "@impulse-ui-native/switch";

export function NotificationsSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. The thumb position and track colors animate when the state changes.

Set `loading` while an update is pending. Loading switches show an activity indicator and block further presses until loading ends. Disabled switches also block interaction.
