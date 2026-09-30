import type { ViewProps } from "react-native";

import type { ComponentSize } from "@impulse-ui-native/theme";

export type PaginationItemValue = number | "start-ellipsis" | "end-ellipsis";

export type PaginationCompactLabelFormatter = (
  page: number,
  pageCount: number,
) => string;

interface PaginationCommonProps extends Omit<ViewProps, "children"> {
  compact?: boolean;
  disabled?: boolean;
  getCompactLabel?: PaginationCompactLabelFormatter;
  onPageChange?: (page: number) => void;
  pageCount: number;
  size?: ComponentSize;
}

interface PaginationControlledProps extends PaginationCommonProps {
  defaultPage?: never;
  page: number;
}

interface PaginationUncontrolledProps extends PaginationCommonProps {
  defaultPage?: number;
  page?: never;
}

export type PaginationProps =
  | PaginationControlledProps
  | PaginationUncontrolledProps;

export interface PaginationThemeProps {
  disabled: boolean;
  size: ComponentSize;
}

export interface PaginationButtonThemeProps {
  current: boolean;
  disabled: boolean;
  size: ComponentSize;
}
