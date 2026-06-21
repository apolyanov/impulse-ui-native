import { memo, PropsWithChildren, ReactElement } from "react";

import { Control, Pressable } from "@impulse-ui-native/primitives";

import { PrimitiveValue, SelectControlProps } from "../types";

function SelectControlComponent<Value extends PrimitiveValue>(
  props: PropsWithChildren<SelectControlProps<Value>>,
) {
  const {
    size = "medium",
    variant = "outlined",
    label,
    error,
    disabled,
    loading,
    PrefixIcon,
    Prefix,
    onPressPrefix,
    SuffixIcon,
    Suffix,
    onPressSuffix,
    onPress,
    children,
  } = props;

  return (
    <Control.Provider
      size={size}
      variant={variant}
      error={error}
      disabled={disabled}
    >
      <Control.Root>
        <Control.Label>{label}</Control.Label>
        <Pressable onPress={onPress}>
          <Control.Container>
            <Control.Addon
              icon={PrefixIcon}
              Content={Prefix}
              onPress={onPressPrefix}
            />
            {children}
            <Control.Addon
              icon={SuffixIcon}
              Content={loading ? Control.Loader : Suffix}
              onPress={onPressSuffix}
            />
          </Control.Container>
        </Pressable>
        <Control.Error />
      </Control.Root>
    </Control.Provider>
  );
}

export const SelectControl = memo(SelectControlComponent) as <
  Value extends PrimitiveValue,
>(
  props: PropsWithChildren<SelectControlProps<Value>>,
) => ReactElement | null;
