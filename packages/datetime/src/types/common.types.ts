import { ComponentType } from "react";

import { FlyoutProps } from "@impulse-ui-native/flyout";
import { IconProps } from "@impulse-ui-native/icon";
import {
  ControlComponentCommonProps,
  ControlComponentProps,
  PressableCoreProps,
} from "@impulse-ui-native/primitives";

export interface TimePickerValue {
  hours: number;
  minutes: number;
  seconds: number;
}
export type RangeSide = "start" | "end";
export type TimeFormat = "12h" | "24h";
export type PickerColumnType = "hour" | "minute" | "second";

export interface TimeRange {
  start?: Date;
  end?: Date;
}

export interface InfiniteRangeItem {
  key: string;
  value: number;
  index: number;
}

export interface QuickDateOption<Value> {
  label: string;
  value: Value;
}

export interface PickerFlyoutActions {
  clearable?: boolean;
  onPressApply?: PressableCoreProps["onPress"];
  onPressCancel?: PressableCoreProps["onPress"];
  onPressClear?: PressableCoreProps["onPress"];
}

export interface DatetimePickerCommonProps
  extends Partial<ControlComponentProps>, ControlComponentCommonProps {
  clearable?: boolean;
}

export interface DatetimePickerFlyoutCommonProps
  extends FlyoutProps, PickerFlyoutActions {
  visible: Date;
  quickDateOptions?: QuickDateOption<Date | TimeRange>[];
  onPressQuickDateOption?: (value: Date | TimeRange) => void;
  onChangeVisible: (date: Date) => void;
  onPressCalendarDay: (date: Date) => void;
}
