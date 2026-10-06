import type { ReactNode } from "react";

import type {
  PressableCoreProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export type ListRootProps = ViewProps;

export interface ListProps extends ListRootProps {
  items?: readonly ListEntryProps[];
}

export interface ListEntryProps extends ListItemProps {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  onPress?: ListPressableProps["onPress"];
  disabled?: boolean;
}

export type ListItemProps = ViewProps;

export interface ListPressableProps extends Omit<
  PressableCoreProps,
  "children" | "size" | "variant" | "loading"
> {
  children?: ReactNode;
}

export type ListLeadingProps = ViewProps;

export type ListContentProps = ViewProps;

export type ListTrailingProps = ViewProps;
