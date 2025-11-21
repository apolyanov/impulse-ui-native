import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackMinusBoldIcon } from "../bold";
import { StackMinusDuotoneIcon } from "../duotone";
import { StackMinusFillIcon } from "../fill";
import { StackMinusLightIcon } from "../light";
import { StackMinusRegularIcon } from "../regular";
import { StackMinusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackMinusIcon = memo(function StackMinus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackMinusBoldIcon,
      duotone: StackMinusDuotoneIcon,
      fill: StackMinusFillIcon,
      light: StackMinusLightIcon,
      regular: StackMinusRegularIcon,
      thin: StackMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
