import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackMinusBoldIcon } from "../bold/stack-minus-bold.icon";
import { StackMinusDuotoneIcon } from "../duotone/stack-minus-duotone.icon";
import { StackMinusFillIcon } from "../fill/stack-minus-fill.icon";
import { StackMinusLightIcon } from "../light/stack-minus-light.icon";
import { StackMinusRegularIcon } from "../regular/stack-minus-regular.icon";
import { StackMinusThinIcon } from "../thin/stack-minus-thin.icon";

export const StackMinusIcon = memo(function StackMinus(
  props: IconWrapperProps,
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
