import { ComponentType, Ref } from "react";

import type { ComponentTone } from "@impulse-ui-native/theme";

export interface StepComponentProps {
  tone?: ComponentTone;
  title?: string;
}

export interface StepperRef {
  next: () => void;
  previous: () => void;
  goto: (value: number) => void;
}

export interface Step extends StepComponentProps {
  Component: ComponentType<StepComponentProps>;
}

export interface StepperProps {
  tone?: ComponentTone;
  items: Step[];
  current: number;
  onChange: (value: number) => void;
}

export interface StepperNavigationProps {
  tone?: ComponentTone;
  current: number;
  items: Step[];
}

export interface StepperProviderData extends StepperRef {
  current: number;
  tone: ComponentTone;
}

export type StepperProviderProps = Omit<StepperProviderData, "tone"> & {
  tone?: ComponentTone;
};
