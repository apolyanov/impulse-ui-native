import type { ReactNode } from "react";
import type { AccessibilityState } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";

export interface FormFieldControlProps {
  accessibilityHint?: string;
  accessibilityLabel: string;
  accessibilityLabelledBy: string;
  accessibilityState: AccessibilityState;
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
