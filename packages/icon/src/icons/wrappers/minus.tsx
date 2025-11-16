import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusBold } from "../bold";
import { MinusDuotone } from "../duotone";
import { MinusFill } from "../fill";
import { MinusLight } from "../light";
import { MinusRegular } from "../regular";
import { MinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Minus = memo(function Minus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusBold,
      duotone: MinusDuotone,
      fill: MinusFill,
      light: MinusLight,
      regular: MinusRegular,
      thin: MinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
