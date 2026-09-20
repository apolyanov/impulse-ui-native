# @impulse-ui-native/switch

Accessible, token-aware animated switch controls for React Native and React Native Web.

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
      accessibilityLabel="Notifications"
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. The thumb position and track colors animate when the state changes. System reduced-motion preferences disable the transition while preserving the state change.

Set `loading` while an update is pending. Loading switches expose a busy accessibility state, show an activity indicator, and block further presses until loading ends. Disabled switches also block interaction.

The standalone switch does not render a label, so provide `accessibilityLabel` unless a surrounding labelled control supplies an accessible name.
