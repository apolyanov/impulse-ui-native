# @impulse-ui-native/input

A themed text input built on the shared Impulse UI Native control system.

## Installation

```sh
pnpm add @impulse-ui-native/input
```

Render `Input` inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Input` combines a native `TextInput` with a label, error message, addons, icons, size, and visual variant.
- `InputProps` extends React Native's `TextInputProps` and the shared control props.
- Secure inputs automatically receive a suffix action that toggles password visibility.

## Usage

```tsx
import { Input } from "@impulse-ui-native/input";

<Input
  label="Email"
  placeholder="you@example.com"
  keyboardType="email-address"
  autoCapitalize="none"
  value={email}
  onChangeText={setEmail}
  error={emailError}
/>;
```

Use `Prefix`, `Suffix`, `PrefixIcon`, and `SuffixIcon` for control addons, and `onPressPrefix` or `onPressSuffix` when an addon is interactive.
