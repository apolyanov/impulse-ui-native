import type { ComponentRef, RefObject } from "react";

import type { Pressable } from "@impulse-ui-native/primitives";

import type { SegmentedControlFocusDirection } from "../utils";

export interface SegmentedControlItemRegistration {
  disabled: boolean;
  ref: RefObject<ComponentRef<typeof Pressable> | null>;
  value: string;
}

export type SegmentedControlFocusItem = (
  value: string,
  direction: SegmentedControlFocusDirection,
) => void;

export type SegmentedControlRegisterItem = (
  registration: SegmentedControlItemRegistration,
) => () => void;

export type SegmentedControlSelectValue = (value: string) => void;
