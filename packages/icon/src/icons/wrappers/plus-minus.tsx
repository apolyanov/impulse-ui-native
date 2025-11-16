import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusMinusBold } from "../bold";
import { PlusMinusDuotone } from "../duotone";
import { PlusMinusFill } from "../fill";
import { PlusMinusLight } from "../light";
import { PlusMinusRegular } from "../regular";
import { PlusMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlusMinus = memo(function PlusMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusMinusBold,
      duotone: PlusMinusDuotone,
      fill: PlusMinusFill,
      light: PlusMinusLight,
      regular: PlusMinusRegular,
      thin: PlusMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
