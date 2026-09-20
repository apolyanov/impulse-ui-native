# @impulse-ui-native/form-field

Accessible label, description, required-state, and validation composition for custom Impulse UI Native controls.

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

- `controlProps`: the generated native ID, accessible label, label relationship, hint, disabled state, and accessibility state to spread onto the control;
- `invalid`: whether the field currently has an error;
- `required`: the field's required state for custom visual treatment.

`FormField` renders validation feedback once outside the custom control. Use `invalid` only to map the field state into a control's own visual API; do not render the error a second time inside the control.

The required marker is both visible and included in the accessible label. Errors are announced as a polite live region and included in the control's accessibility hint. An explicit `nativeID` can be provided when stable IDs are required; otherwise, `FormField` generates one with React `useId`.
