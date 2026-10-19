import type { PropsWithChildren, ReactElement } from "react";
import { memo, useMemo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import type { PrimitiveValue, SelectControlProps } from "../types";

function SelectControlComponent<Value extends PrimitiveValue>({
  loading,
  PrefixIcon,
  Prefix,
  SuffixIcon,
  Suffix,
  children,
  ...props
}: PropsWithChildren<SelectControlProps<Value>>) {
  const prefix = useMemo(
    () => {
      if (Prefix) {
        return <Prefix />;
      }

      return PrefixIcon ? <Control.Icon icon={PrefixIcon} /> : null;
    },
    [Prefix, PrefixIcon],
  );
  const suffix = useMemo(() => {
    if (loading) {
      return <Control.Loader />;
    }

    if (Suffix) {
      return <Suffix />;
    }

    return SuffixIcon ? <Control.Icon icon={SuffixIcon} /> : null;
  }, [loading, Suffix, SuffixIcon]);

  return (
    <Control.Field {...props} prefix={prefix} suffix={suffix}>
      {children}
    </Control.Field>
  );
}

export const SelectControl = memo(SelectControlComponent) as <
  Value extends PrimitiveValue,
>(
  props: PropsWithChildren<SelectControlProps<Value>>,
) => ReactElement | null;
