import type { ComponentTone } from "./components.types";

export interface StepperNavigationTokens {
  itemHeight: number;
  inactiveItemBackgroundColor: string;
  colors: Record<ComponentTone, { itemBackgroundColor: string }>;
}

export interface StepperTokens {
  navigation: StepperNavigationTokens;
}
