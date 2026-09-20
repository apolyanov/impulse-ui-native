import type { ReactNode } from "react";
import type {
  NativeSyntheticEvent,
  PressableProps,
  ViewProps,
} from "react-native";

interface AccordionRootCommonProps extends ViewProps {
  children?: ReactNode;
  collapsible?: boolean;
  disabled?: boolean;
}

export interface AccordionSingleRootProps extends AccordionRootCommonProps {
  defaultValue?: string;
  onValueChange?: (value: string | undefined) => void;
  type?: "single";
  value?: string;
}

export interface AccordionMultipleRootProps extends AccordionRootCommonProps {
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  type: "multiple";
  value?: string[];
}

export type AccordionRootProps =
  | AccordionSingleRootProps
  | AccordionMultipleRootProps;

export interface AccordionItemProps extends ViewProps {
  children?: ReactNode;
  disabled?: boolean;
  value: string;
}

export interface AccordionTriggerProps extends Omit<
  PressableProps,
  "accessibilityRole" | "children"
> {
  children?: ReactNode;
  hideIndicator?: boolean;
  indicator?: ReactNode;
  onKeyDown?: (event: AccordionKeyDownEvent) => void;
}

export type AccordionKeyDownEvent = NativeSyntheticEvent<{
  key: string;
}>;

export interface AccordionContentProps extends ViewProps {
  children?: ReactNode;
}
