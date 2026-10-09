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
