import type { ReactNode } from "react";

import type { PressableCoreProps } from "./button.types";
import type { ViewProps } from "./view.types";

export interface ListRootProps extends ViewProps {}
export interface ListItemProps extends ViewProps {}
export interface ListPressableProps extends Omit<
  PressableCoreProps,
  "children" | "size" | "variant" | "loading"
> {
  children?: ReactNode;
}
export interface ListLeadingProps extends ViewProps {}
export interface ListContentProps extends ViewProps {}
export interface ListTrailingProps extends ViewProps {}
