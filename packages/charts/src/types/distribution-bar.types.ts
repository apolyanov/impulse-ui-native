import type { ViewProps } from "@impulse-ui-native/primitives";

export interface DistributionBarItem {
  /** Unique, stable identifier. */
  id: string;
  value: number;
  color?: string;
}

export interface DistributionBarProps extends Omit<ViewProps, "children"> {
  data: readonly DistributionBarItem[];
  /** Outer corner radius. Defaults to the chart distribution token. */
  radius?: number;
}
