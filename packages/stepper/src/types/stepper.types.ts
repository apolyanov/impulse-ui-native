import { ComponentType, Ref } from "react";

export interface StepComponentProps {
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
  items: Step[];
  current: number;
  onChange: (value: number) => void;
}

export interface StepperNavigationProps {
  current: number;
  items: Step[];
}

export interface StepperProviderData extends StepperRef {
  current: number;
}
