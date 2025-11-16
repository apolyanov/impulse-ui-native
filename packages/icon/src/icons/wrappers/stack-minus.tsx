import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackMinusBold } from "../bold";
import { StackMinusDuotone } from "../duotone";
import { StackMinusFill } from "../fill";
import { StackMinusLight } from "../light";
import { StackMinusRegular } from "../regular";
import { StackMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackMinus = memo(function StackMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackMinusBold,
      duotone: StackMinusDuotone,
      fill: StackMinusFill,
      light: StackMinusLight,
      regular: StackMinusRegular,
      thin: StackMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
