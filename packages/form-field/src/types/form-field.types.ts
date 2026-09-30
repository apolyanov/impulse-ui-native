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
