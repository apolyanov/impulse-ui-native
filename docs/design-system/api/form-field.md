# @impulse-ui-native/form-field

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/form-field

Label, description, required-state, and validation composition for custom Impulse UI Native controls.

## Installation

```sh
pnpm add @impulse-ui-native/form-field
```

Render `FormField` inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Usage

```tsx
import { FormField } from "@impulse-ui-native/form-field";
import { Switch } from "@impulse-ui-native/switch";

<FormField
  label="Notifications"
  description="Receive updates about your account."
  required
  error={notificationError}
>
  {({ controlProps }) => (
    <Switch
      {...controlProps}
      checked={notificationsEnabled}
      onCheckedChange={setNotificationsEnabled}
    />
  )}
</FormField>;
```

The render function receives:

- `controlProps`: the generated native ID and disabled state to spread onto the control;
- `invalid`: whether the field currently has an error;
- `required`: the field's required state for custom visual treatment.

`FormField` renders validation feedback once outside the custom control. Use `invalid` only to map the field state into a control's own visual API; do not render the error a second time inside the control.

An explicit `nativeID` can be provided when stable IDs are required; otherwise, `FormField` generates one with React `useId`.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/form-field/src/components/form-field.tsx

```tsx
import { memo, useId, useMemo } from "react";

import { Control, Typography } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type {
  FormFieldControlProps,
  FormFieldProps,
  FormFieldRenderProps,
} from "../types";
import { formFieldStyles } from "./form-field.styles";

export const FormField = memo(function FormField({
  children,
  description,
  disabled = false,
  error,
  label,
  nativeID,
  required = false,
  style,
  ...props
}: FormFieldProps) {
  const generatedId = useId();

  const fieldId = nativeID ?? `form-field-${generatedId}`;
  const controlId = `${fieldId}-control`;
  const invalid = Boolean(error);

  const styles = useThemedStyles(formFieldStyles, { disabled }, [disabled]);

  const controlProps = useMemo<FormFieldControlProps>(
    () => ({
      disabled,
      nativeID: controlId,
    }),
    [controlId, disabled],
  );
  const renderProps = useMemo<FormFieldRenderProps>(
    () => ({ controlProps, invalid, required }),
    [controlProps, invalid, required],
  );

  return (
    <Control.Provider
      disabled={disabled}
      error={error}
      size="medium"
      variant="outlined"
    >
      <Control.Root {...props} nativeID={fieldId} style={style}>
        <Control.Label disabled={disabled}>
          {required ? `${label} *` : label}
        </Control.Label>
        {description ? (
          <Typography.Caption style={styles.description}>
            {description}
          </Typography.Caption>
        ) : null}
        {children(renderProps)}
        {error ? <Control.Error>{error}</Control.Error> : null}
      </Control.Root>
    </Control.Provider>
  );
});
```

### packages/form-field/src/components/index.ts

```tsx
export { FormField } from "./form-field";
```

### packages/form-field/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/form-field/src/types/form-field.types.ts

```tsx
import type { ReactNode } from "react";

import type { ViewProps } from "@impulse-ui-native/primitives";

export interface FormFieldControlProps {
  disabled: boolean;
  nativeID: string;
}

export interface FormFieldRenderProps {
  controlProps: FormFieldControlProps;
  invalid: boolean;
  required: boolean;
}

export interface FormFieldProps extends Omit<ViewProps, "children"> {
  children: (props: FormFieldRenderProps) => ReactNode;
  description?: string;
  disabled?: boolean;
  error?: string;
  label: string;
  required?: boolean;
}
```

### packages/form-field/src/types/index.ts

```tsx
export * from "./form-field.types";
```
