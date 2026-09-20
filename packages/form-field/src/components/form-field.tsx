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
  const labelId = `${fieldId}-label`;
  const controlId = `${fieldId}-control`;
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;
  const invalid = Boolean(error);
  const accessibleLabel = required ? `${label}, required` : label;
  const accessibilityHint = [error, description].filter(Boolean).join(" ");
  const styles = useThemedStyles(formFieldStyles, { disabled }, [disabled]);

  const controlProps = useMemo<FormFieldControlProps>(
    () => ({
      accessibilityHint: accessibilityHint || undefined,
      accessibilityLabel: accessibleLabel,
      accessibilityLabelledBy: labelId,
      accessibilityState: { disabled },
      disabled,
      nativeID: controlId,
    }),
    [accessibilityHint, accessibleLabel, controlId, disabled, labelId],
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
        <Control.Label
          accessibilityLabel={accessibleLabel}
          disabled={disabled}
          nativeID={labelId}
        >
          {required ? `${label} *` : label}
        </Control.Label>
        {description ? (
          <Typography.Caption
            nativeID={descriptionId}
            style={styles.description}
          >
            {description}
          </Typography.Caption>
        ) : null}
        {children(renderProps)}
        <Control.Error accessibilityLiveRegion="polite" nativeID={errorId} />
      </Control.Root>
    </Control.Provider>
  );
});
