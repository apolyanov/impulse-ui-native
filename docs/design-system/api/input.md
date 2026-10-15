# @impulse-ui-native/input

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

`Textarea` supports native controlled and uncontrolled values. When `autoGrow` is enabled, it grows from `minRows` through `maxRows`, then becomes scrollable. Validation remains application-owned: pass the current message through `error`.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/input/src/components/index.ts

```tsx
export { Input } from "./input";
export { Textarea } from "./textarea";
```

### packages/input/src/components/input.tsx

```tsx
import { memo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
import { EyeIcon } from "@impulse-ui-native/icon/icons/eye";
import { EyeSlashIcon } from "@impulse-ui-native/icon/icons/eye-slash";
import { Control } from "@impulse-ui-native/primitives";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { InputProps } from "../types";

export const Input = memo(function Input(props: InputProps) {
  const {
    size = "medium",
    variant = "outlined",
    label,
    error,
    disabled,
    style,
    containerStyle,
    PrefixIcon,
    Prefix,
    SuffixIcon,
    Suffix,
    onPressPrefix,
    onPressSuffix,
    ...rest
  } = props;

  const addonTokens = useComponentsTokens().controlAddon;
  const addonColor = getFieldStateTokens(addonTokens.variants[variant], {
    disabled,
    error: Boolean(error),
  }).iconColor;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = useEventCallback(() => {
    setShowPassword((prevState) => !prevState);
  });

  const SuffixInternalIcon = props.secureTextEntry
    ? showPassword
      ? EyeIcon
      : EyeSlashIcon
    : SuffixIcon;

  const internalOnSuffixPress = props.secureTextEntry
    ? togglePasswordVisibility
    : onPressSuffix;

  return (
    <Control.Provider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <Control.Root>
        <Control.Label>{label}</Control.Label>
        <Control.Container style={containerStyle}>
          {Prefix || PrefixIcon ? (
            <Control.Addon onPress={onPressPrefix}>
              {Prefix ? <Prefix /> : null}
              {!Prefix && PrefixIcon ? (
                <Icon color={addonColor} icon={PrefixIcon} />
              ) : null}
            </Control.Addon>
          ) : null}
          <Control.Input
            secureTextEntry={props.secureTextEntry && !showPassword}
            style={style}
            {...rest}
          />
          {Suffix || SuffixInternalIcon ? (
            <Control.Addon onPress={internalOnSuffixPress}>
              {Suffix ? <Suffix /> : null}
              {!Suffix && SuffixInternalIcon ? (
                <Icon color={addonColor} icon={SuffixInternalIcon} />
              ) : null}
            </Control.Addon>
          ) : null}
        </Control.Container>
        {error ? <Control.Error>{error}</Control.Error> : null}
      </Control.Root>
    </Control.Provider>
  );
});
```

### packages/input/src/components/textarea.tsx

```tsx
import { memo, useMemo } from "react";

import { Control, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { TextareaProps } from "../types";
import { useTextarea } from "../hooks";
import { textareaStyles } from "./textarea.styles";

export const Textarea = memo(function Textarea({
  autoGrow = false,
  containerStyle,
  defaultValue = "",
  disabled = false,
  error,
  label,
  maxLength,
  maxRows = 8,
  minRows = 3,
  onChangeText,
  onContentSizeChange,
  scrollEnabled: scrollEnabledProp,
  showCharacterCount = false,
  size = "medium",
  style,
  value: valueProp,
  variant = "outlined",
  ...props
}: TextareaProps) {
  const componentsTokens = useComponentsTokens();

  const controlContainerTokens = componentsTokens.controlContainer;
  const textareaTokens = componentsTokens.textarea;
  const sizeTokens = textareaTokens.sizes[size];

  const styles = useThemedStyles(
    textareaStyles,
    { disabled, error: Boolean(error), size },
    [disabled, error, size],
  );
  const textarea = useTextarea({
    autoGrow,
    borderWidth: controlContainerTokens.borderWidth,
    defaultValue,
    maxRows,
    minRows,
    onChangeText,
    onContentSizeChange,
    paddingVertical: sizeTokens.paddingVertical,
    rowHeight: sizeTokens.lineHeight,
    value: valueProp,
  });

  const resolvedContainerStyle = useMemo(
    () => [styles.container, containerStyle, { height: textarea.height }],
    [containerStyle, styles.container, textarea.height],
  );
  const resolvedInputStyle = useMemo(
    () => [styles.input, style],
    [style, styles.input],
  );

  const counterLabel =
    maxLength === undefined
      ? `${textarea.characterCount}`
      : `${textarea.characterCount} / ${maxLength}`;
  const hasFooter = Boolean(error) || showCharacterCount;

  return (
    <Control.Provider
      disabled={disabled}
      error={error}
      size={size}
      variant={variant}
    >
      <Control.Root>
        <Control.Label disabled={disabled}>{label}</Control.Label>
        <Control.Container style={resolvedContainerStyle}>
          <Control.Input
            {...props}
            maxLength={maxLength}
            multiline
            numberOfLines={textarea.numberOfLines}
            onChangeText={textarea.handleChangeText}
            onContentSizeChange={textarea.handleContentSizeChange}
            scrollEnabled={
              autoGrow ? textarea.scrollEnabled : scrollEnabledProp
            }
            style={resolvedInputStyle}
            value={textarea.value}
          />
        </Control.Container>
        {hasFooter ? (
          <View style={styles.footer}>
            {error ? (
              <Control.Error style={styles.error}>{error}</Control.Error>
            ) : null}
            {showCharacterCount ? (
              <Typography.Caption style={styles.counter}>
                {counterLabel}
              </Typography.Caption>
            ) : null}
          </View>
        ) : null}
      </Control.Root>
    </Control.Provider>
  );
});
```

### packages/input/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/input/src/types/index.ts

```tsx
export * from "./input.types";
export * from "./textarea.types";
```

### packages/input/src/types/input.types.ts

```tsx
import { TextInputProps } from "react-native";

import {
  ControlComponentCommonProps,
  ControlComponentProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export interface InputProps
  extends
    TextInputProps,
    Partial<ControlComponentProps>,
    ControlComponentCommonProps {
  containerStyle?: ViewProps["style"];
}
```

### packages/input/src/types/textarea.types.ts

```tsx
import type { TextInputProps } from "react-native";

import type {
  ControlComponentProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export interface TextareaProps
  extends
    Omit<TextInputProps, "multiline" | "numberOfLines" | "secureTextEntry">,
    Partial<ControlComponentProps> {
  /** Grows the field with its content until `maxRows` is reached. */
  autoGrow?: boolean;
  /** Styles the bordered textarea container. */
  containerStyle?: ViewProps["style"];
  /** Visible label for the textarea. */
  label?: string;
  /** Maximum visible rows when `autoGrow` is enabled. */
  maxRows?: number;
  /** Initial and minimum visible row count. */
  minRows?: number;
  /** Displays the current character count and `maxLength` when provided. */
  showCharacterCount?: boolean;
}
```
