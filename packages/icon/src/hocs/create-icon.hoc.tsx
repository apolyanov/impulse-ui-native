import type { ComponentType } from "react";
import type { SvgProps } from "react-native-svg";
import { memo } from "react";

import type { IconVariant, IconWrapperProps } from "../types";

export function createIcon(
  name: string,
  variants: Record<IconVariant, ComponentType<SvgProps>>,
) {
  const IconWrapper = memo(function IconWrapper(props: IconWrapperProps) {
    const Variant = variants[props.variant ?? "regular"];

    return <Variant {...props} />;
  });

  IconWrapper.displayName = name;

  return IconWrapper;
}
