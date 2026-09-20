# @impulse-ui-native/input

Themed single-line and multiline text controls built on the shared Impulse UI Native control system.

## Installation

```sh
pnpm add @impulse-ui-native/input
```

Render `Input` inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Input` combines a native single-line `TextInput` with a label, error message, addons, icons, size, and visual variant.
- `Textarea` adds multiline text entry, optional character counting, validation feedback, and bounded auto-grow behavior.
- `InputProps` extends React Native's `TextInputProps` and the shared control props.
- `TextareaProps` extends the native text-input contract with `autoGrow`, `minRows`, `maxRows`, and `showCharacterCount`.
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

## Textarea

```tsx
import { Textarea } from "@impulse-ui-native/input";

<Textarea
  label="Bio"
  placeholder="Tell us about yourself"
  value={bio}
  onChangeText={setBio}
  maxLength={280}
  showCharacterCount
  autoGrow
  minRows={3}
  maxRows={8}
  error={bioError}
/>;
```

`Textarea` supports native controlled and uncontrolled values. When `autoGrow` is enabled, it grows from `minRows` through `maxRows`, then becomes scrollable. Validation remains application-owned: pass the current message through `error`. The visible `label` is used as the accessible-name fallback when `accessibilityLabel` is not provided.
