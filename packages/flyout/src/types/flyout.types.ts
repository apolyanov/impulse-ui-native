import type { ComponentRef, ReactElement, ReactNode, Ref } from "react";
import type {
  FlatList,
  FlatListProps,
  View as NativeView,
  ScrollView,
  ScrollViewProps,
} from "react-native";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";
import type { FlyoutPlacement } from "@impulse-ui-native/theme";

import type { FlyoutKeyboardAwareView } from "../components/keyboard-aware-view";

export interface FlyoutRootProps extends Omit<OverlayComponentProps, "title"> {
  placement?: FlyoutPlacement;
  topOffset?: number;
  bottomOffset?: number;
  style?: ViewProps["style"];
}

export interface FlyoutProps extends FlyoutRootProps {
  title?: OverlayComponentProps["title"];
  header?: ReactNode;
}

export type FlyoutHeaderProps = ViewProps;
export type FlyoutContentProps = ViewProps;
export type FlyoutTitleProps = TextProps;

export type FlyoutHandleProps = ViewProps;

export interface FlyoutScrollViewProps extends ScrollViewProps {
  ref?: Ref<ComponentRef<typeof ScrollView>>;
}

export interface FlyoutFlatListProps<Item> extends FlatListProps<Item> {
  ref?: Ref<FlatList<Item>>;
}

export interface FlyoutFlatListComponent {
  <Item>(props: FlyoutFlatListProps<Item>): ReactElement | null;
}

export interface FlyoutKeyboardAwareViewProps extends ViewProps {
  ref?: Ref<ComponentRef<typeof NativeView>>;
  /** Reserve keyboard overlap inside the body without translating the sheet. Defaults to true. */
  enabled?: boolean;
  /** Additional space above the keyboard, in logical units. Defaults to components.flyout.keyboardOffset (8). */
  keyboardOffset?: number;
}

export type FlyoutKeyboardAwareViewComponent = typeof FlyoutKeyboardAwareView;
