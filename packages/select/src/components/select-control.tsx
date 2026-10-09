import type { PropsWithChildren, ReactElement } from "react";
import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { Control, Pressable } from "@impulse-ui-native/primitives";
import {
  getFieldStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

import type { PrimitiveValue, SelectControlProps } from "../types";

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

  const addonTokens = useComponentsTokens().controlAddon;
  const addonColor = getFieldStateTokens(addonTokens.variants[variant], {
    disabled,
    error: Boolean(error),
  }).iconColor;

  const SuffixContent = loading ? Control.Loader : Suffix;

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
            {Prefix || PrefixIcon ? (
              <Control.Addon onPress={onPressPrefix}>
                {Prefix ? <Prefix /> : null}
                {!Prefix && PrefixIcon ? (
                  <Icon color={addonColor} icon={PrefixIcon} />
                ) : null}
              </Control.Addon>
            ) : null}
            {children}
            {SuffixContent || SuffixIcon ? (
              <Control.Addon onPress={onPressSuffix}>
                {SuffixContent ? <SuffixContent /> : null}
                {!SuffixContent && SuffixIcon ? (
                  <Icon color={addonColor} icon={SuffixIcon} />
                ) : null}
              </Control.Addon>
            ) : null}
          </Control.Container>
        </Pressable>
        {error ? <Control.Error>{error}</Control.Error> : null}
      </Control.Root>
    </Control.Provider>
  );
}

export const SelectControl = memo(SelectControlComponent) as <
  Value extends PrimitiveValue,
>(
  props: PropsWithChildren<SelectControlProps<Value>>,
) => ReactElement | null;
