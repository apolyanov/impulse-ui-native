import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpiralBold } from "../bold";
import { SpiralDuotone } from "../duotone";
import { SpiralFill } from "../fill";
import { SpiralLight } from "../light";
import { SpiralRegular } from "../regular";
import { SpiralThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Spiral = memo(function Spiral(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpiralBold,
      duotone: SpiralDuotone,
      fill: SpiralFill,
      light: SpiralLight,
      regular: SpiralRegular,
      thin: SpiralThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
