import type { Component, ComponentRef, ForwardedRef } from "react";
import type { ScrollView } from "react-native";

import type { FlyoutScrollViewProps } from "./flyout.types";

export type FlyoutScrollable = ComponentRef<typeof ScrollView> | Component;

export interface FlyoutScrollGestureOptions<
  Scrollable extends FlyoutScrollable = ComponentRef<typeof ScrollView>,
> {
  ref: ForwardedRef<Scrollable>;
  horizontal: FlyoutScrollViewProps["horizontal"];
  contentOffset: FlyoutScrollViewProps["contentOffset"];
  contentInset: FlyoutScrollViewProps["contentInset"];
}
