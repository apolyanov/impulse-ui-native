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

## Native refs and React Hook Form

`Input` forwards object and callback refs to its native `TextInput`, exposing
native methods such as `focus()`, `blur()`, and `clear()`. For imperative focus,
pass a ref created with `useRef<ComponentRef<typeof TextInput>>(null)` (`ComponentRef`
and `useRef` come from React; `TextInput` comes from React Native).
Custom fields built with `Control.Input` support the same native ref contract.

With React Hook Form, pass `Controller`'s `field.ref` to `Input` and map its
string change callback to `onChangeText`:

```tsx
import { Controller, useForm } from "react-hook-form";

import { Input } from "@impulse-ui-native/input";

const { control } = useForm({ defaultValues: { email: "" } });

<Controller
  control={control}
  name="email"
  rules={{ required: "Enter your email address." }}
  render={({ field, fieldState }) => (
    <Input
      ref={field.ref}
      label="Email"
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
    />
  )}
/>;
```

Keep `useForm` inside your form component or custom hook. Remove
`shouldFocusError: false` to restore the default invalid-field focus after
submission through `handleSubmit`. `setFocus("email")` also uses this ref.
React Hook Form remains an optional consumer dependency.

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

`Textarea` supports native controlled and uncontrolled values. When `autoGrow` is enabled, it grows from `minRows` through `maxRows`, then becomes scrollable. Validation remains application-owned: pass the current message through `error`.

## Field layout

Input and Textarea accept flex, dimension, and spacing props on the outer field,
including its label and error. Use `flex={1}` for equal widths inside a row;
column layouts stretch horizontally by default without vertical growth. Use
`width`, `minWidth`, or `alignSelf` for explicit sizing. Existing `style` still
targets the text input; `containerStyle` targets the bordered container.

## Field appearance

Rectangular fields support `variant="outlined" | "soft" | "filled"` and
`tone="neutral" | "primary" | "secondary"`. The default is `outlined` / `neutral`.
Outlined uses a transparent surface with a tone border; soft uses a subtle tone
surface; filled uses the tone fill with its paired foreground. Colors come from
the active theme in both schemes. Error styling overrides the selected tone;
disabled fields use neutral styling and block interaction.

Customize `components.controlContainer.colors[tone][variant][state]`,
`controlInput.colors[tone][variant][state]`, and
`controlAddon.colors[tone][variant][state]` together. These tone-aware maps replace
the previous `variants[variant][state]` maps.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/input.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
