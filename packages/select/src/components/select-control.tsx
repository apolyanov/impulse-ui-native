import type { PropsWithChildren } from "react";
import { useMemo } from "react";

import { memo } from "@impulse-ui-native/core";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { CaretUpIcon } from "@impulse-ui-native/icon/icons/caret-up";
import { Control } from "@impulse-ui-native/primitives";

import type { PrimitiveValue, SelectControlProps } from "../types";

export const SelectControl = memo(function SelectControlComponent<
  Value extends PrimitiveValue,
>({
  loading,
  open,
  PrefixIcon,
  Prefix,
  SuffixIcon,
  Suffix,
  children,
  ...props
}: PropsWithChildren<SelectControlProps<Value>>) {
  const defaultSuffixIcon = open ? CaretUpIcon : CaretDownIcon;
  const suffixIcon = SuffixIcon ?? defaultSuffixIcon;

  const prefix = useMemo(() => {
    if (Prefix) {
      return <Prefix />;
    }

    return PrefixIcon ? <Control.Icon icon={PrefixIcon} /> : null;
  }, [Prefix, PrefixIcon]);
  const suffix = useMemo(() => {
    if (loading) {
      return <Control.Loader />;
    }

    if (Suffix) {
      return <Suffix />;
    }

    return <Control.Icon icon={suffixIcon} />;
  }, [loading, Suffix, suffixIcon]);

  return (
    <Control.Field {...props} prefix={prefix} suffix={suffix}>
      {children}
    </Control.Field>
  );
});
