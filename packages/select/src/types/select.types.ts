import { FlyoutProps } from "@impulse-ui-native/flyout";
import {
  ControlComponentCommonProps,
  ControlComponentProps,
  PressableCoreProps,
} from "@impulse-ui-native/primitives";

export type PrimitiveValue = string | number | null | undefined;

export type SelectFn<Value extends PrimitiveValue> = (
  option: SelectOption<Value>,
) => void;

export type SelectOption<Value> = {
  label: string;
  value: Value;
  disabled?: boolean;
};

export interface CommonSelectProps<Value>
  extends Partial<ControlComponentProps>, ControlComponentCommonProps {
  loading?: boolean;
  onChange?: (value: Value | undefined) => void;
}

export interface SelectControlProps<Value> extends CommonSelectProps<Value> {
  onPress: PressableCoreProps["onPress"];
}

export interface SelectProps<
  Value extends PrimitiveValue,
> extends CommonSelectProps<Value> {
  options: SelectOption<Value>[];
  value?: Value;
  defaultValue?: Value;
}

export interface MultiSelectProps<Value extends PrimitiveValue>
  extends Partial<ControlComponentProps>, CommonSelectProps<Value[]> {
  options: SelectOption<Value>[];
  value?: Value[];
  defaultValue?: Value[];
}

export interface SelectFlyoutProps<
  Value extends PrimitiveValue,
> extends FlyoutProps {
  options: SelectOption<Value>[];
  isSelected: (value: Value) => boolean;
  onSelect: (value: Value) => void;
}

export interface OptionProps extends PressableCoreProps {
  label: string;
  selected: boolean;
}

export interface UseSelectProps<Value> {
  options: SelectOption<PrimitiveValue>[];
  value?: Value;
  defaultValue?: Value;
  onChange?: (value: Value | undefined) => void;
}
